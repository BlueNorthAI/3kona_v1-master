import React from "react";
import { Link } from "@remix-run/react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import empconst from "~/data/empconst.json";
import invconst from "~/data/invconst.json";
import proconst from "~/data/proconst.json";
import materialcost from "~/data/materialcost.json";
import employeecost from "~/data/employeecost.json";
import outcost from "~/data/outcost.json";

import demands from "~/data/demand.json";

import DemandInput from "~/components/demand-form";
import CostInput from "~/components/cost-form";
import ConstraintInput from "~/components/constraint-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Calendar } from "~/components/ui/calendar";
import { ArrowUpTrayIcon, CalendarIcon } from "@heroicons/react/20/solid";
import { cn } from "~/lib/utils";

const navigation = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" },
];

const bucket = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

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

// export const loader = async () => {
//   const demands = await getBucketDemand();
//   console.log(demands);
//   const constraint = await getBucketConstraint();
//   console.log(constraint);
//   const cost = await getBucketCost();
//   console.log(cost);

//   return json({ demands, constraint, cost });
// };

// export const action = async ({ request }) => {};

export default function SnopInput() {
  const [date, setDate] = React.useState<Date>(new Date());
  // const { demands, constraint, cost } = useLoaderData<typeof loader>();
  // console.log("demands", demands);
  // console.log("constraint", constraint);
  // console.log("cost", cost);
  return (
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
      <div className="bg-white mx-2 shadow-md rounded-b-lg">
        <div className="flex items-center  justify-between">
          <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Sales & Operations Planning Input
          </h2>
          <div className="flex items-center space-x-2">
            <Input className=" text-blue-900 w-50" placeholder="Scenario Id" />
            <Input
              className="text-blue-900 w-50"
              placeholder="Describe your scenario"
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[180px] justify-start text-left font-normal",
                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-blue-900" />
                  {date ? (
                    <span className="text-blue-900">{format(date, "PPP")}</span>
                  ) : (
                    <span className="text-blue-900">Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 ">
                <Calendar
                  className="text-blue-900"
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <div className="ml-2 flex max-w-sm items-center">
              <Input type="file" />

              <Button className="mr-4  p-1 rounded-md border bg-blue-500 hover:bg-blue-600">
                <div className="flex items-center space-x-1 mx-2 ">
                  <ArrowUpTrayIcon className="text-white h-5 w-5" />
                  <span className="mx-1 text-sm p-1 text-white ">Upload</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-4">
          <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ">
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1 ">
                  <CardTitle className="text-2xl flex">Demand</CardTitle>
                  <p className="text-gray-400 text-sm">Units per month</p>
                  <div className="border-b" />
                </CardHeader>

                <CardContent className="grid gap-4">
                  <DemandInput demands={demands} bucket={bucket} />
                </CardContent>
              </Card>
            </DemoContainer>
          </div>

          <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">
                    Material & Inventory Cost
                  </CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <CostInput cost={materialcost} />
                </CardContent>
              </Card>
            </DemoContainer>
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Employee Cost</CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <CostInput cost={employeecost} />
                </CardContent>
              </Card>
            </DemoContainer>
          </div>

          <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Outsourcing Cost</CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <CostInput cost={outcost} />
                </CardContent>
              </Card>
            </DemoContainer>
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">
                    Inventory Constraint
                  </CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <ConstraintInput constraint={invconst} />
                </CardContent>
              </Card>
            </DemoContainer>
          </div>
          <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">
                    Employee Constraint
                  </CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <ConstraintInput constraint={empconst} />
                </CardContent>
              </Card>
            </DemoContainer>
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Product Constraint</CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <ConstraintInput constraint={proconst} />
                </CardContent>
              </Card>
            </DemoContainer>
          </div>
        </div>
        <div className="py-4 border-t flex justify-end space-x-2 mr-2">
          <Button className="bg-blue-500 hover:bg-blue-600">
            Update Scenario
          </Button>
          <Button variant="outline">Save Input</Button>
          <div className="mr-2">
            <Button className="" variant="default">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
