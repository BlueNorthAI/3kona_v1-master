import { columns } from "../components/columns";
import { DataTable } from "../components/data-table";
import table from "../data/ui/tasks.json";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export default function TaskPage() {
  return (
    <>
      <div className="mx-4 mt-2 rounded-lg bg-white shadow">
        <div className="flex items-center justify-between p-2">
          <div className="m-2 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-gray-800 ">
              Appbar
            </h2>
          </div>
        </div>
      </div>
     
      <div className="bg-white mx-4 mt-4 p-2 rounded-lg">
        <DataTable data={table} columns={columns} />
      </div>
    </>
  );
}
