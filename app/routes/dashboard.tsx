import React from "react";
import type { LoaderArgs } from "@remix-run/node";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { json } from "@remix-run/node";
import { NavLink, Outlet, useLoaderData, useMatches} from "@remix-run/react";
import { Disclosure} from '@headlessui/react'
import clsx from 'clsx'
import { Link } from '@remix-run/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

    const navigation = [
      { name: "Overview", to: "/snop/dashboard/overview", current: true },
      { name: "Demand", to: "/snop/demand", current: false },
      { name: "Supply", to: "supply", current: false },
      { name: "Inventory", to: "inventory", current: false },
      { name: "Spend", to: "spend", current: false },
      { name: "Finance", to: "finance", current: false },
      { name: "Sales & Marketing", to: "sales", current: false },
      { name: "Campaign", to: "campaign", current: false },
    ];


function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
return (
    <NavLink
    to={to}
    prefetch="intent"
    className={({ isActive }) =>
        clsx(
          'rounded-md px-2 py-2 text-md font-semibold md:px-3',
          isActive
            ? 'py-2 bg-sky-600 text-white font-bold bg-opacity-75 border'
            : 'text-white hover:bg-sky-300 hover:bg-opacity-75'
      )
    }
    aria-current={({isActive})=> isActive ? 'page' : undefined}
    >
    {children}

    </NavLink>
);
}
export default function SCMDashboardRoute(){
    const data = useLoaderData<typeof loader>()
    const matches = useMatches();
    const currRoute = matches[matches.length - 1].id
    
    const dashboardHome = '/demo/dashboard/overview'
    const scmOverviewMatches = matches.some((m) => m.id === 'routes/snop/dashboard/overview')
    const inventoryMatches = matches.some((m)=> m.id === 'routes/snop/dashboard/inventory')
    const demandMatches = matches.some((m)=> m.id === 'routes/snop/dashboard/demand')
    const supplyMatches = matches.some((m)=> m.id === 'routes/snop/dashboard/supply')
    const dispatchMatches = matches.some( m => m.id === 'routes/snop/dashboard/dispatch')

    // Example input array
    const binaryValues = [scmOverviewMatches, inventoryMatches, demandMatches, dispatchMatches, supplyMatches];
    // console.log(binaryValues[2]);
    

    // Use the Array.prototype.filter() method to filter out only the true value
    const filteredValues = binaryValues.filter(value => value);

    // console.log(filteredValues[0])

    const items = [
        { id: 1, name: 'Review', description: 'Conduct periodic (month/quarter/year) performance review of key business KPIs', to: `review`},
        { id: 2, name: 'Meeting', description: 'Conduct daily/weekly data driven meetings and create plan of action ', to: `${currRoute}/meeting` },
      ]

    const [selected, setSelected] = React.useState(items[0])



 
    return (
        <>
      <div className="min-h-screen overflow-hidden">
        <Disclosure as="nav" className="bg-sky-500 ">
          {({ open }) => (
            <>
              <div className="w-full">
                <div className="flex h-16 items-center justify-center">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className=" ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                          <NavItem to={item.to} key={item.name}>
                              {item.name}
                          </NavItem> 
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="flex items-center justify-start rounded-md bg-sky-600 p-2 text-white hover:bg-sky-700 hover:bg-opacity-75">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-blue-900 text-white'
                          : 'text-white hover:bg-blue-500 hover:bg-opacity-75',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
            <Outlet />
        </main>
      </div>
    </>
    )
}

