import { Dialog, Transition, RadioGroup } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Form, useActionData, useSearchParams, Link } from "@remix-run/react";
import { redirect, json } from "@remix-run/node";

function classNames(
  ...classes: (string | undefined | null | boolean)[]
): string {
  return classes.filter(Boolean).join(" ");
}

// const tabs = [
//   { name: "Week 1", href: "#", current: true },
//   { name: "Week 2", href: "#", current: false },
//   { name: "Week 3", href: "#", current: false },
//   { name: "Week 4", href: "#", current: false },
// ];

const plans = [
  {
    id: 1,
    name: "Optimization completed",
    description: "1:51:32 PM - 2/23/2021",
  },
  {
    id: 2,
    name: "Scenario modified",
    description: "1:21:17 PM - 6/6/2023",
  },
  {
    id: 3,
    name: "Solve status",
    description: "OPTIMAL",
  },
  {
    id: 4,
    name: "CS Job ID",
    description: "eeeb3265-3cf4-44f4-944d-ea7dad4c12ed",
  },
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

export default function Optimizer() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(plans[0]);

  const [searchParams] = useSearchParams();
  const data = useActionData();
  console.log(data);
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
        {/* charts */}
        <div role="list" className="mt-2 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10">
            <div className="relative flex flex-1 flex-col py-2 pl-3">
              <h3 className="m-2 text-xl font-bold text-gray-900">
                Optimization
              </h3>

              <div className="m-2 rounded-lg border px-4 py-2">
                <Form method="post" className="flex justify-center pt-2">
                  <button
                    type="submit"
                    name="start"
                    value="yes"
                    className="text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600"
                  >
                    Optimize
                  </button>
                </Form>
                {data ? (
                  <div id="jobStatus">
                    Job ID:{" "}
                    <Link to="http://localhost:5000/results/${data.job_id}">
                      {data?.job_id}
                    </Link>
                    . Waiting for updates...
                  </div>
                ) : (
                  "Waiting..."
                )}
                {data ? (
                  <script
                    dangerouslySetInnerHTML={{
                      __html: `
        const eventSource = new EventSource('http://localhost:5000/results/${data.job_id}');
        eventSource.onmessage = function(event) {
          const data = JSON.parse(event.data);
          document.getElementById('jobStatus').textContent = 'Status: ' + data.status;
          if (data.status === 'completed' || data.status === 'failed') {
            eventSource.close();
          }
        };
      `,
                    }}
                  />
                ) : (
                  "Waiting"
                )}
              </div>
            </div>
          </div>

          {/* <div className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10">
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
          </div> */}
        </div>
      </div>

      {/* <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="bg-blue-900 px-4 py-4">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="py-1 text-base font-semibold leading-6 text-white">
                              Create Scenario
                            </Dialog.Title>

                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md  text-slate-300 hover:text-white"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-2">
                          <span className="text-md block font-medium leading-6 text-gray-900">
                            Name
                          </span>
                          <div className="mt-2">
                            <div className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                              <p>Blank1</p>
                            </div>
                          </div>
                        </div>

                        <div className="px-4 py-2">
                          <span className="text-md block font-medium leading-6 text-gray-900">
                            Description
                          </span>
                          <div className="mt-2">
                            <div className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                              <p>Blank scenario with default settings</p>
                            </div>
                          </div>
                          <div className="mb-2 border-b p-2"></div>
                        </div>

                        <div className="px-4 py-2">
                          <RadioGroup value={selected} onChange={setSelected}>
                            <RadioGroup.Label className="text-md block font-medium leading-6 text-gray-900">
                              Select a type of scenario
                            </RadioGroup.Label>
                            <div className="mt-2 space-y-4">
                              {plans.map((plan) => (
                                <RadioGroup.Option
                                  key={plan.name}
                                  value={plan}
                                  className={({ checked, active }) =>
                                    classNames(
                                      checked
                                        ? "border-transparent"
                                        : "border-gray-300",
                                      active ? "" : "",
                                      "relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between",
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <span className="flex items-center">
                                        <span className="flex flex-col text-sm">
                                          <RadioGroup.Label
                                            as="span"
                                            className="font-medium text-gray-900"
                                          >
                                            {plan.name}
                                          </RadioGroup.Label>
                                          <RadioGroup.Description
                                            as="span"
                                            className="text-gray-500"
                                          >
                                            <span className="block sm:inline">
                                              {plan.description}
                                            </span>{" "}
                                          </RadioGroup.Description>
                                        </span>
                                      </span>

                                      <span
                                        className={classNames(
                                          active ? "border" : "border-2",
                                          checked
                                            ? "border-rose-500"
                                            : "border-transparent",
                                          "pointer-events-none absolute -inset-px rounded-lg",
                                        )}
                                        aria-hidden="true"
                                      />
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                      <div className="flex justify-center p-2">
                        <button
                          type="button"
                          className="text-md rounded-md border bg-indigo-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root> */}
      {/* <div className="mt-4 flex justify-start p-2 ">
        <Link to='/demo/dashboard/optimizer/input'>
          <button
            type="button"
            className="text-md rounded-md border bg-indigo-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600"
          >

            Input
          </button>
        </Link>
        <Link to='/demo/dashboard/optimizer/master'>
          <button
            type="submit"
            className="text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600"
          >
            Master
          </button>
        </Link>
        <Link to='/demo/dashboard/optimizer/solution'>
          <button
            type="submit"
            className="text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600"
          >
            Solution
          </button>
        </Link>
      </div> */}
    </>
  );
}


import { Form, useActionData, useSearchParams, Link } from "@remix-run/react";
import { redirect, json } from "@remix-run/node";

function classNames(
  ...classes: (string | undefined | null | boolean)[]
): string {
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

export default function Optimizer() {
  const [searchParams] = useSearchParams();
  const data = useActionData();
  console.log(data);
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
        {/* charts */}
        <div role="list" className="mt-2 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10">
            <div className="relative flex flex-1 flex-col py-2 pl-3">
              <h3 className="m-2 text-xl font-bold text-gray-900">
                Optimization
              </h3>

              <div className="m-2 rounded-lg border px-4 py-2">
                <Form method="post" className="flex justify-center pt-2">
                  <button
                    type="submit"
                    name="start"
                    value="yes"
                    className="text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600"
                  >
                    Optimize
                  </button>
                </Form>
                {data ? (
                  <div id="jobStatus">
                    Job ID:{" "}
                    <a
                      href={`http://localhost:5000/results/${data.job_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data?.job_id}
                    </a>
                    . Waiting for updates...
                  </div>
                ) : (
                  "Waiting..."
                )}
                {data ? (
                  <script
                    dangerouslySetInnerHTML={{
                      __html: `
        const eventSource = new EventSource('http://localhost:5000/results/${data.job_id}');
        eventSource.onmessage = function(event) {
          const data = JSON.parse(event.data);
          document.getElementById('jobStatus').textContent = 'Status: ' + data.status;
          if (data.status === 'completed' || data.status === 'failed') {
            eventSource.close();
          }
        };
      `,
                    }}
                  />
                ) : (
                  "Waiting"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
