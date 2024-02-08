import React from 'react'
import { Fragment, useState, useLayoutEffect, useRef } from "react";
import { Dialog, Transition, Menu } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import {
  WrapperTableGrid,
  WrapperTimeGrid,
  WrapperCostGrid,
  WrapperConstGrid,
} from "~/kendo/grid/WrapperGrid2";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Button } from "~/components/ui/button";

export default function Input () {
  return (
    <div>
      <div className="mx-4 mt-2 rounded-lg bg-white shadow">
        <div className="flex items-center justify-between p-2">
          <div className="m-2 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-gray-800 ">
              Appbar
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-white my-2 mx-4 p-4 rounded-lg shadow-md">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="m-2 grid grid-cols-1 lg:grid-cols-3 gap-2">
              {/* Exception Details */}
              <div className="ml-1.5 rounded-lg bg-white p-4">
                {/* header */}
                <div className="rounded-lg bg-slate-600 md:flex md:items-center md:justify-between">
                  <div className="min-w-0 flex-1 p-4">
                    <h1 className="text-xl font-semibold leading-6 text-white">
                      Time Period Demand
                    </h1>
                  </div>
                </div>

                <div className=" pt-4">
                  <div className="rounded-lg border p-2">
                    <WrapperTimeGrid />
                  </div>
                </div>
              </div>

              <div className="ml-1.5 rounded-lg bg-white p-4">
                {/* header */}
                <div className="rounded-lg bg-slate-600 md:flex md:items-center md:justify-between">
                  <div className="min-w-0 flex-1 p-4">
                    <h1 className="text-xl font-semibold leading-6 text-white">
                      Cost
                    </h1>
                  </div>
                </div>

                <div className=" pt-4">
                  <div className="rounded-lg border p-2">
                    <WrapperCostGrid />
                  </div>
                </div>
              </div>

              <div className="ml-1.5 rounded-lg bg-white p-4">
                {/* header */}
                <div className="rounded-lg bg-slate-600 md:flex md:items-center md:justify-between">
                  <div className="min-w-0 flex-1 p-4">
                    <h1 className="text-xl font-semibold leading-6 text-white">
                      Constraint
                    </h1>
                  </div>
                </div>

                <div className=" pt-4">
                  <div className="rounded-lg border p-2">
                    <WrapperConstGrid />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button className='bg-blue-500 hover:bg-blue-600'>Create Scenario</Button>
              <Button className='mx-2' variant="outline">Create Scenario</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}


