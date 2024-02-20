import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Form } from "@remix-run/react";

export default function TruckInput({ truck }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return (
    <div className="grid w-full  gap-10">
      {truck.map((truck) => (
        <div key={truck.bucket} className="grid grid-cols-2 items-center">
          <Label className="text-xl" htmlFor={truck.truck_name}>
            {truck.truck_name}
            <p className="text-gray-400 text-sm">{truck.sub}</p>
          </Label>
          <Input
            id={truck.truck_value}
            placeholder="constraint value"
            defaultValue={truck.truck_value}
            className="text-xl text-gray-500 text-center"
          />
        </div>
      ))}
    </div>
  );
}
