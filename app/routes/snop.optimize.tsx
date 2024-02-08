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
import { Input } from "~/components/ui/input";
import { json } from "@remix-run/node";
import { log } from "console";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
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
    name: "Scenario modified",
    description: "1:21:17 PM - 6/6/2023",
  },
  {
    name: "Solve status",
    description: "OPTIMAL",
  },
  {
    name: "CS Job ID",
    description: "eeeb3265-3cf4-44f4-944d-ea7dad4c12ed",
  },
];

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
          console.log(statusData.status)
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
      <div className="mx-4 mt-1 rounded-lg bg-white shadow">
        <div className="flex items-center justify-between p-2">
          <div className="m-1 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-gray-800 p-1">
              Sales & Operations Optimizer
            </h2>
          </div>
        </div>
      </div>
      <div className="mx-4">
        <div role="list" className="mt-2 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10">
            <div className="relative flex flex-1 flex-col py-2 pl-3">
              <h3 className="m-2 text-xl font-bold text-gray-900">
                Optimization
              </h3>

              <div className="m-2 rounded-lg border px-4 py-2">
                <div>
                  <span className="">Optimize</span>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <span className="">Optimize</span>
                  <Input type="email" className="" placeholder="Email" />
                </div>
                <div>
                  <span className="">Optimize</span>
                  <Input type="email" placeholder="Email" />
                </div>
              </div>

              <Form method="post" className="flex justify-center pt-2">
                <button
                  type="button"
                  className="text-md rounded-md border bg-indigo-500 px-5 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600"
                >
                  LOG
                </button>
                <button
                  type="submit"
                  name="start"
                  value="yes"
                  className="text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600"
                >
                  Optimize
                </button>
              </Form>
              {data && (
                <div id="jobStatus">
                  Job ID:{" "}
                  <a
                    href={`http://localhost:5000/results/${
                      (data as { job_id?: string }).job_id
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {(data as { job_id?: string }).job_id}
                  </a>
                  . {jobStatus}
                </div>
              )}
            </div>
          </div>

          <div className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10">
            <div className="relative flex flex-1 flex-col py-2 pl-3">
              <h3 className="m-2 text-base font-medium text-gray-900">
                Parameters
              </h3>

              <div className="m-2 flex flex-row justify-start rounded-lg border ">
                <div className="mx-4 my-4 flex flex-1 flex-col">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-400"
                  >
                    Spare threshold
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="peer block w-full border-0 bg-gray-50 py-1.5 pr-4 text-right text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="20"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 border-t border-gray-300 "
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-400"
                    >
                      Number of Knives
                    </label>
                    <div className="relative mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="peer block w-full border-0 bg-gray-50 py-1.5 pr-4 text-right text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="7"
                      />
                      <div
                        className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 "
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
