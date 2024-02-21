import React from "react";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

import { getScenarioById } from "~/models/scenario.server";
import SnopForm from "~/components/SnopForm";
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

export const loader = async ({ params }) => {
  console.log(params.scenId);
  const scenarioData = await getScenarioById(params.scenId);
  console.log(scenarioData);

  return json({ scenarioData });
};

// export const action = async ({ request }) => {};

export default function UpdateScenario() {
  const [date, setDate] = React.useState<Date>(new Date());
  const { scenarioData } = useLoaderData<typeof loader>();

  return (
    <SnopForm inputData={scenarioData}/>
      );
}
