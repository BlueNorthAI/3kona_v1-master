import * as React from "react";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  TruckIcon,
  MapIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import { Check, ChevronsUpDown } from "lucide-react";
import { kpiService_m } from "~/data/truckData";
import truck from "~/data/truck.json";
import admin from "~/data/admin.json";
import TruckInput from "~/components/truck-form";
import AdminInput from "~/components/admin-form";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import { cn } from "~/lib/utils";

const navigation = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" },
];

const stats = [
  { name: "Cost per Bike (INR/Bike)", stat: "2,279" },
  { name: "Cost per Trip Margin", stat: "136,744" },
  { name: "Cost per km", stat: "41" },
];

const frameworks = [
  {
    value: "next.js",
    label: "Kolkata",
  },
  {
    value: "sveltekit",
    label: "Chennai",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
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

export default function Input() {
  const [oropen, setorOpen] = React.useState(false);
  const [desopen, setdesOpen] = React.useState(false);
  const [disopen, setdisOpen] = React.useState(false);
  const [tyopen, settyOpen] = React.useState(false);
  const [bacopen, setbacOpen] = React.useState(false);

  const [value, setValue] = React.useState("");
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
        <div className="flex items-center  justify-between ">
          <h2 className="text-xl lg:text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text  bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Transportation Cleansheet
          </h2>
        </div>
        <div className="mt-2 items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-2">
          <div className="rounded-xl p-6 border shadow-lg">
            <div className="flex items-center space-x-4 justify-between mb-4 p-6 border-b rounded-lg">
              <div className="flex items-center space-x-4">
                <p className="text-lg text-blue-900 font-semibold">Origin</p>
                <Popover open={oropen} onOpenChange={setorOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={oropen}
                      className="w-[125px] justify-between bg-blue-900 text-white hover:bg-blue-800 hover:text-white"
                    >
                      {value
                        ? frameworks.find(
                            (framework) => framework.value === value,
                          )?.label
                        : "Chennai"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[130px] p-0">
                    <Command>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue,
                              );
                              setorOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === framework.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-lg text-blue-900 font-semibold">
                  Destination
                </p>
                <Popover open={desopen} onOpenChange={setdesOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={desopen}
                      className="w-[125px] justify-between bg-blue-900 text-white hover:bg-blue-800 hover:text-white"
                    >
                      {value
                        ? frameworks.find(
                            (framework) => framework.value === value,
                          )?.label
                        : "Kolkata"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[130px] p-0">
                    <Command>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue,
                              );
                              setdesOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === framework.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex items-center space-x-4">
                <p className="text-lg text-blue-900 font-semibold">Distance</p>
                <Popover open={disopen} onOpenChange={setdisOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={disopen}
                      className="w-[100px] justify-between bg-blue-900 text-white hover:bg-blue-800 hover:text-white"
                    >
                      {value
                        ? frameworks.find(
                            (framework) => framework.value === value,
                          )?.label
                        : "1,676"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[130px] p-0">
                    <Command>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue,
                              );
                              setdisOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === framework.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex items-center space-x-4">
                <p className="text-lg text-blue-900 font-semibold">Backhaul</p>
                <Popover open={bacopen} onOpenChange={setbacOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={bacopen}
                      className="w-[120px] justify-between bg-blue-900 text-white hover:bg-blue-800 hover:text-white"
                    >
                      {value
                        ? frameworks.find(
                            (framework) => framework.value === value,
                          )?.label
                        : "Backhaul"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[120px] p-0">
                    <Command>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue,
                              );
                              setbacOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === framework.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="mt-8 items-start justify-center gap-6 grid grid-cols-1 lg:grid-cols-2">
              <DemoContainer>
                <Card className="  text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="flex items-center">
                      <TruckIcon className="h-8 w-8 mr-2" />
                      <span className="text-2xl">Truck Parameters</span>
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-10 mb-2">
                    <div className="grid grid-cols-2 items-center gap-1">
                      <div className="text-xl text-blue-900 font-semibold ">
                        Truck Type
                      </div>
                      <div>
                        <Popover open={tyopen} onOpenChange={settyOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={tyopen}
                              className=" lg:w-[210px] w-[155px] justify-between text-xl "
                            >
                              {value
                                ? frameworks.find(
                                    (framework) => framework.value === value,
                                  )?.label
                                : "Kolkata"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandGroup>
                                {frameworks.map((framework) => (
                                  <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue,
                                      );
                                      settyOpen(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === framework.value
                                          ? "opacity-100"
                                          : "opacity-0",
                                      )}
                                    />
                                    {framework.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <TruckInput truck={truck} />
                  </CardContent>
                </Card>
              </DemoContainer>
              <DemoContainer>
                <Card className=" text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="flex items-center">
                      <MapIcon className="h-8 w-8 mr-2" />
                      <span className="text-2xl"> Route Admin Expenses</span>
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <AdminInput admin={admin} />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
            <div className="flex justify-end  pt-6 rounded-lg">
              <Button className="bg-blue-900 hover:bg-blue-800 text-lg">
                Submit
              </Button>
            </div>
          </div>

          <div>
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="flex items-center">
                    <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                    <span className="text-2xl">Cleansheet Summary</span>
                  </CardTitle>

                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div>
                    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                      {stats.map((item) => (
                        <div
                          key={item.name}
                          className="rounded-2xl bg-gray-100 border px-4 py-5 shadow"
                        >
                          <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                            {item.stat}
                          </dd>
                          <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                            {item.name}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <ul role="list" className="grid grid-cols-1 gap-2 mt-2">
                    {kpiService_m.map((kpi) => (
                      <li
                        key={kpi.Name}
                        className="col-span-1 flex flex-col divide-y divide-white"
                      >
                        <div className="relative flex flex-1 flex-col py-2 pl-3">
                          <div className="flex items-baseline gap-2">
                            <div>
                              <h3 className="text-base font-medium text-gray-900">
                                {kpi.Name}
                              </h3>
                            </div>
                          </div>
                          <div className="mt-2">{kpi.container}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </DemoContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
