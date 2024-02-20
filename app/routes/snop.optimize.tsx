import { useState, useEffect } from "react";
import { Form, useActionData, useSearchParams, Link } from "@remix-run/react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { json } from "@remix-run/node";
import { log } from "console";
import { cn } from "~/lib/utils";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const navigation = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" },
];

export const action = async ({ request }) => {
  const formData = await request.formData();
  const start = formData.get("start");

  const response = await fetch("http://127.0.0.1:5000/optimizer?start=yes", {
    method: "GET", // or "POST", depending on your Flask route
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to start the optimization process");
  }

  // Redirect to the same page or to a new one with the job ID in the query params
  return json(data);
};

const plans = [
  { name: "Optimization completed", description: "1:51:32 PM - 2/23/2021" },

  {
    name: "Solve status",
    description: "OPTIMAL",
  },
  {
    name: "CS Job ID",
    description: "eeeb3265-3cf4-44f4-944d-ea7dad4c12ed",
  },
];
function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className,
      )}
      {...props}
    />
  );
}
export default function Optimizer() {
  const data = useActionData();
  const [jobStatus, setJobStatus] = useState("Waiting for job to start...");
  const [jobId, setJobId] = useState(null);

  useEffect(() => {
    if (data?.job_id) {
      setJobId(data.job_id);
      const intervalId = setInterval(async () => {
        const response = await fetch(
          `http://127.0.0.1:5000/results/${data.job_id}`,
        );
        const statusData = await response.json();
        if (response.ok) {
          setJobStatus(`Status: ${statusData.status}`);
          console.log(statusData.status);
          if (statusData.status !== "in progress") {
            clearInterval(intervalId);
          }
        } else {
          setJobStatus("Error fetching job status");
          clearInterval(intervalId);
        }
      }, 3000); // Poll every 3 seconds

      return () => clearInterval(intervalId); // Cleanup on component unmount
    }
  }, [data?.job_id]);

  return (
    <>
      <div className="m-2">
        <div className="mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ">
          <nav
            className="ml-6 pl-6 flex items-center justify-center"
            aria-label="Global"
          >
            <div className=" flex gap-x-8 justify-center ">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className=" text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="bg-white mx-2 shadow-md rounded-b-lg pb-6">
          <div className="flex items-center  justify-between">
            <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
              Optimizer Dashboard
            </h2>
          </div>

          <div className="items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-2">
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="text-2xl flex">
                      Scenario Summary
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4 space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold">
                        Select for Optimization
                      </span>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Scenario" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Spare threshold
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder="20"
                      />
                    </div>

                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Number of Knives
                      </span>
                      <Input
                        className="w-[180px]"
                        type="email"
                        id="email"
                        placeholder="0"
                      />
                    </div>

                    <Form className="flex border-t justify-center pt-4">
                      <Button
                        type="submit"
                        name="start"
                        value="yes"
                        className="text-base bg-blue-500  text-white hover:bg-blue-600"
                      >
                        Optimize
                      </Button>
                    </Form>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Optimization Parameters
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4 space-y-4">
                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Optimization Status
                      </span>
                      <Input
                        className="w-[290px]"
                        type="email"
                        id="email"
                        placeholder="Completed @ 1:51:32 PM - 2/23/2021"
                      />
                    </div>

                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">
                        Solver Status
                      </span>
                      <Input
                        className="w-[290px]"
                        type="email"
                        id="email"
                        placeholder="OPTIMAL"
                      />
                    </div>

                    <div className="flex items-center space-x-4 ">
                      <span className="w-[160px] font-semibold">Job ID</span>
                      <Input
                        className="w-[290px]"
                        type="email"
                        id="email"
                        placeholder="eeeb3265-3cf4-44f4-944d-ea7dad4c12ed"
                      />
                    </div>
                    <Form className="flex border-t justify-center pt-4">
                      <Button
                        type="submit"
                        name="start"
                        value="yes"
                        className="text-base bg-blue-500  text-white hover:bg-blue-600"
                      >
                        Log
                      </Button>
                    </Form>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
