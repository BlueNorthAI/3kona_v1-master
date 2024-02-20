import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Form } from "@remix-run/react";

export default function AdminInput({ admin }) {
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
    <div className="grid w-full gap-10">
      {admin.map((admin) => (
        <div key={admin.bucket} className="grid grid-cols-2 items-center">
          <Label className="text-xl" htmlFor={admin.admin_name}>
            {admin.admin_name}
            <p className="text-gray-400 text-sm">{admin.sub}</p>
          </Label>
          <Input
            id={admin.admin_value}
            placeholder="admin value"
            defaultValue={admin.admin_value}
            className="text-xl text-gray-500 text-center"
          />
        </div>
      ))}
    </div>
  );
}
