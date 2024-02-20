import {
  ConstraintInput,
  CostInput,
  DemandInput
} from "/build/_shared/chunk-XDOXXNGS.js";
import {
  Calendar,
  format
} from "/build/_shared/chunk-JJM6YTGR.js";
import "/build/_shared/chunk-EAHXE2UK.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-YOTMF5EX.js";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "/build/_shared/chunk-BOZ637FR.js";
import {
  Button,
  Input,
  cn
} from "/build/_shared/chunk-ZD6FT3IK.js";
import "/build/_shared/chunk-WLB7K45O.js";
import "/build/_shared/chunk-AZ2ABKPG.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  ArrowUpTrayIcon_default,
  CalendarIcon_default
} from "/build/_shared/chunk-MREU3T6C.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  Link
} from "/build/_shared/chunk-P4XB2KCN.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-36FLX65P.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/snop.update.tsx
var import_react = __toESM(require_react());

// app/data/empconst.json
var empconst_default = [
  {
    bucket: 0,
    constraint_name: "Max overtime hours",
    sub: "per employee per month",
    constraint_value: 160
  },
  {
    bucket: 0,
    constraint_name: " Starting # of employee",
    sub: "Units",
    constraint_value: 36
  },
  {
    bucket: 0,
    constraint_name: "Min ending # of employees",
    sub: "Units",
    constraint_value: 30
  },
  {
    bucket: 0,
    constraint_name: "Max ending # of employees",
    sub: "Units",
    constraint_value: 36
  }
];

// app/data/invconst.json
var invconst_default = [
  {
    bucket: 0,
    constraint_name: "Starting Inventory",
    sub: "Units",
    constraint_value: 500
  },
  {
    bucket: 0,
    constraint_name: "Ending Inventory",
    sub: "Units",
    constraint_value: 500
  },
  {
    bucket: 0,
    constraint_name: "Starting Backlog",
    sub: "Units",
    constraint_value: 0
  },
  {
    bucket: 0,
    constraint_name: "Ending Backlog",
    sub: "Units",
    constraint_value: 0
  }
];

// app/data/proconst.json
var proconst_default = [
  {
    bucket: 0,
    constraint_name: "Labour hours",
    sub: "per employee per unit",
    constraint_value: 4
  }
];

// app/data/materialcost.json
var materialcost_default = [
  {
    bucket: 1,
    cost_name: " Material Cost ",
    sub: "per unit",
    cost_value: 75
  },
  {
    bucket: 1,
    cost_name: "Holding Cost ",
    sub: "per unit per month",
    cost_value: 25
  },
  {
    bucket: 1,
    cost_name: "Stockout Cost",
    sub: "per unit per month",
    cost_value: 50
  }
];

// app/data/employeecost.json
var employeecost_default = [
  {
    bucket: 1,
    cost_name: "Hiring Cost ",
    sub: "per employee",
    cost_value: 1200
  },
  {
    bucket: 1,
    cost_name: "Layoff Cost",
    sub: "per employee",
    cost_value: 3600
  },
  {
    bucket: 1,
    cost_name: "Employee Cost",
    sub: "per employee",
    cost_value: 2400
  },
  {
    bucket: 1,
    cost_name: "Overtime Cost",
    sub: "per hour",
    cost_value: 25
  }
];

// app/data/outcost.json
var outcost_default = [
  {
    bucket: 1,
    cost_name: "Material Cost",
    sub: "per unit",
    cost_value: 175
  },
  {
    bucket: 1,
    cost_name: "Manufacturing Cost",
    sub: "per unit",
    cost_value: 175
  },
  {
    bucket: 1,
    cost_name: "Logistics Cost",
    sub: "per unit",
    cost_value: 175
  }
];

// app/data/demand.json
var demand_default = [
  { bucket: 1, demand: 2800 },
  { bucket: 2, demand: 2800 },
  { bucket: 3, demand: 1e3 },
  { bucket: 4, demand: 920 },
  { bucket: 5, demand: 780 },
  { bucket: 6, demand: 950 },
  { bucket: 7, demand: 1050 },
  { bucket: 8, demand: 1200 },
  { bucket: 9, demand: 2e3 },
  { bucket: 10, demand: 2500 },
  { bucket: 11, demand: 3e3 },
  { bucket: 12, demand: 2800 }
];

// app/routes/snop.update.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.update.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.update.tsx"
  );
  import.meta.hot.lastModified = "1708409298848.7246";
}
var navigation = [{
  id: 1,
  name: "S&OP",
  to: "/snop/optimize"
}, {
  id: 2,
  name: "Demand",
  to: "#"
}, {
  id: 3,
  name: "Inventory",
  to: "#"
}, {
  id: 4,
  name: "Logistics",
  to: "#"
}, {
  id: 5,
  name: "Procurement",
  to: "#"
}];
var bucket = {
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
  12: "December"
};
function DemoContainer({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex items-center justify-center [&>div]:w-full", className), ...props }, void 0, false, {
    fileName: "app/routes/snop.update.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_c = DemoContainer;
function SnopInput() {
  _s();
  const [date, setDate] = import_react.default.useState(/* @__PURE__ */ new Date());
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/routes/snop.update.tsx",
      lineNumber: 108,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.update.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.update.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.update.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center  justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Sales & Operations Planning Input" }, void 0, false, {
          fileName: "app/routes/snop.update.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { className: " text-blue-900 w-50", placeholder: "Scenario Id" }, void 0, false, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 120,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { className: "text-blue-900 w-50", placeholder: "Describe your scenario" }, void 0, false, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: cn("w-[180px] justify-start text-left font-normal", !date && "text-muted-foreground"), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon_default, { className: "mr-2 h-4 w-4 text-blue-900" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 125,
                columnNumber: 19
              }, this),
              date ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-blue-900", children: format(date, "PPP") }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 126,
                columnNumber: 27
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-blue-900", children: "Pick a date" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 126,
                columnNumber: 90
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 124,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 123,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverContent, { className: "w-auto p-0 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "text-blue-900", mode: "single", selected: date, onSelect: setDate, initialFocus: true }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 130,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 129,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2 flex max-w-sm items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "file" }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 135,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "mr-4  p-1 rounded-md border bg-blue-500 hover:bg-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1 mx-2 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpTrayIcon_default, { className: "text-white h-5 w-5" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 139,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-1 text-sm p-1 text-white ", children: "Upload" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 140,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 138,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 137,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 134,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.update.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.update.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl flex", children: "Demand" }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 151,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units per month" }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 152,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 153,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 150,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemandInput, { demands: demand_default, bucket }, void 0, false, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 157,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 156,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.update.tsx",
          lineNumber: 149,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.update.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.update.tsx",
          lineNumber: 147,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl", children: "Material & Inventory Cost" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 167,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 170,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 166,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CostInput, { cost: materialcost_default }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 173,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 172,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 165,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 164,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl", children: "Employee Cost" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 180,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 181,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 179,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CostInput, { cost: employeecost_default }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 184,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 183,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 178,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 177,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.update.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl", children: "Outsourcing Cost" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 194,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 195,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 193,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CostInput, { cost: outcost_default }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 198,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 197,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 192,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 191,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl", children: "Inventory Constraint" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 205,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 208,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 204,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConstraintInput, { constraint: invconst_default }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 211,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 210,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 203,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 202,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.update.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl", children: "Employee Constraint" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 220,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 223,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 219,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConstraintInput, { constraint: empconst_default }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 226,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 225,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 218,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 217,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl", children: "Product Constraint" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 233,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.update.tsx",
                lineNumber: 234,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 232,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConstraintInput, { constraint: proconst_default }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 237,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.update.tsx",
              lineNumber: 236,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 231,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.update.tsx",
            lineNumber: 230,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.update.tsx",
          lineNumber: 216,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.update.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-4 border-t flex justify-end space-x-2 mr-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "bg-blue-500 hover:bg-blue-600", children: "Update Scenario" }, void 0, false, {
          fileName: "app/routes/snop.update.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", children: "Save Input" }, void 0, false, {
          fileName: "app/routes/snop.update.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "", variant: "default", children: "Cancel" }, void 0, false, {
          fileName: "app/routes/snop.update.tsx",
          lineNumber: 249,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.update.tsx",
          lineNumber: 248,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.update.tsx",
        lineNumber: 243,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.update.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.update.tsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
}
_s(SnopInput, "rW+rxy2mJ1oFEB1Cqg4Z2uVJym0=");
_c2 = SnopInput;
var _c;
var _c2;
$RefreshReg$(_c, "DemoContainer");
$RefreshReg$(_c2, "SnopInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SnopInput as default
};
//# sourceMappingURL=/build/routes/snop.update-CP3T5IXX.js.map
