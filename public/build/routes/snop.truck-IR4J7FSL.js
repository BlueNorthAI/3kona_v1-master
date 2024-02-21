import {
  Command,
  CommandGroup,
  CommandItem
} from "/build/_shared/chunk-BFVQSGSR.js";
import {
  Label
} from "/build/_shared/chunk-2YHQU5X6.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-PAYI5ADR.js";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "/build/_shared/chunk-TAH65X5V.js";
import {
  Button,
  Input,
  cn
} from "/build/_shared/chunk-2NVTJMAP.js";
import "/build/_shared/chunk-WLB7K45O.js";
import "/build/_shared/chunk-AZ2ABKPG.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  MapIcon_default,
  PresentationChartLineIcon_default,
  TruckIcon_default
} from "/build/_shared/chunk-DFGEPVYF.js";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartValueAxis,
  ChartValueAxisItem,
  require_hammer
} from "/build/_shared/chunk-ZQSOIJBR.js";
import "/build/_shared/chunk-HEETWZQQ.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  Link
} from "/build/_shared/chunk-ZVVJ5DIP.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-MEDZ44IS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/snop.truck.tsx
var React = __toESM(require_react());

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react = __toESM(require_react());

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react.forwardRef)(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      ...rest
    }, ref) => {
      return (0, import_react.createElement)(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/check.js
var Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);

// node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js
var ChevronsUpDown = createLucideIcon("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);

// app/kendo/charts/waterfall/kendoWaterfallChart.client.js
var import_hammerjs = __toESM(require_hammer());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\waterfall\\\\kendoWaterfallChart.client.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\waterfall\\kendoWaterfallChart.client.js"
  );
  import.meta.hot.lastModified = "1708448308078.4805";
}
function pointColor(point) {
  let summary = point.dataItem.summary;
  if (summary) {
    return summary === "total" ? "#172554" : "gray";
  }
  if (point.value > 0) {
    return "skyblue";
  } else {
    return "red";
  }
}
function WaterfallChartContainer({
  data,
  field,
  category,
  summary,
  format = "n0",
  position = "insideEnd"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 250
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "waterfall", data, color: pointColor, field: "field", categoryField: "category", summaryField: "summary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesLabels, { format }, void 0, false, {
      fileName: "app/kendo/charts/waterfall/kendoWaterfallChart.client.js",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/waterfall/kendoWaterfallChart.client.js",
      lineNumber: 48,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/waterfall/kendoWaterfallChart.client.js",
      lineNumber: 47,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartValueAxis, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartValueAxisItem, {}, void 0, false, {
      fileName: "app/kendo/charts/waterfall/kendoWaterfallChart.client.js",
      lineNumber: 53,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/waterfall/kendoWaterfallChart.client.js",
      lineNumber: 52,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/waterfall/kendoWaterfallChart.client.js",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c = WaterfallChartContainer;
var _c;
$RefreshReg$(_c, "WaterfallChartContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/charts/waterfall/WrapperWaterfallChart.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\waterfall\\\\WrapperWaterfallChart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\waterfall\\WrapperWaterfallChart.jsx"
  );
  import.meta.hot.lastModified = "1708448308078.4805";
}
var Fallback = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06", stroke: "currentColor", strokeWidth: 0, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 24,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c2 = Fallback;
function WrapperWaterfallChart({
  data,
  field,
  category,
  summary,
  format = "C0",
  position = "insideEnd"
}) {
  return typeof document !== "undefined" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(WaterfallChartContainer, { data }, void 0, false, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 38,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Fallback, {}, void 0, false, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 38,
    columnNumber: 86
  }, this);
}
_c22 = WrapperWaterfallChart;
var _c2;
var _c22;
$RefreshReg$(_c2, "Fallback");
$RefreshReg$(_c22, "WrapperWaterfallChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/rawData/truckData.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\truckData.js"
  );
  import.meta.hot.lastModified = "1708448308157.084";
}
var tripData = [
  {
    category: "Variable cost per trip",
    field: 100168
  },
  {
    category: "Fixed cost per Trip",
    field: 21640
  },
  {
    category: "Admin Cost per Trip",
    field: 16197
  },
  {
    category: "Return of sale cost per trip",
    field: -1.26
  },
  // {
  //   category: "Total",
  //   field: 136744,
  // },
  {
    category: "Total",
    summary: "total"
  }
];
var bikeData = [
  {
    category: "Variable Cost",
    field: 1518
  },
  {
    category: "Fixed Cost",
    field: 309
  },
  {
    category: "Admin Cost",
    field: 245
  },
  {
    category: "Profit per bike",
    field: 207
  },
  //  {
  //    category: "Total",
  //    field: 2279,
  //  },
  {
    category: "Total",
    summary: "total"
  }
];

// app/data/truckData.js
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\truckData.js"
  );
  import.meta.hot.lastModified = "1708448307999.2563";
}
var kpiService_m = [
  {
    Name: "Cost per Trip",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperWaterfallChart, { data: tripData }, void 0, false, {
      fileName: "app/data/truckData.js",
      lineNumber: 30,
      columnNumber: 16
    }, this)
  },
  {
    Name: "Cost per Bike",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperWaterfallChart, { data: bikeData }, void 0, false, {
      fileName: "app/data/truckData.js",
      lineNumber: 34,
      columnNumber: 16
    }, this)
  }
];

// app/data/truck.json
var truck_default = [
  {
    bucket: 1,
    truck_name: "Purchase Cost ",
    sub: "inculing Fabrication",
    truck_value: "2,300,000"
  },
  {
    bucket: 2,
    truck_name: "Mileage with Load",
    sub: "",
    truck_value: 4.5
  },
  {
    bucket: 3,
    truck_name: "Mileage without Load",
    sub: "",
    truck_value: 5
  },
  {
    bucket: 4,
    truck_name: "Maintenance",
    sub: "",
    truck_value: "168,000"
  },
  {
    bucket: 5,
    truck_name: "Capacity",
    sub: "",
    truck_value: 60
  },
  {
    bucket: 6,
    truck_name: "Annual Distance",
    sub: "",
    truck_value: "84,000"
  }
];

// app/data/admin.json
var admin_default = [
  {
    bucket: 1,
    admin_name: "Life",
    sub: "",
    admin_value: 8
  },
  {
    bucket: 2,
    admin_name: "Diesel Price",
    sub: "",
    admin_value: 76
  },
  {
    bucket: 3,
    admin_name: "Loading/ Unloading",
    sub: "",
    admin_value: 800
  },
  {
    bucket: 4,
    admin_name: "Toll",
    sub: "",
    admin_value: 3
  },
  {
    bucket: 5,
    admin_name: "Route Expenses",
    sub: "",
    admin_value: "10,056"
  },
  {
    bucket: 6,
    admin_name: "Driver & Cleaner Expenses",
    sub: "",
    admin_value: "300,000"
  },
  {
    bucket: 6,
    admin_name: "Tyres",
    sub: "",
    admin_value: 10
  }
];

// app/components/truck-form.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\truck-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\truck-form.tsx"
  );
  import.meta.hot.lastModified = "1708448307889.384";
}
function TruckInput({
  truck
}) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid w-full  gap-10", children: truck.map((truck2) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { className: "text-xl", htmlFor: truck2.truck_name, children: [
      truck2.truck_name,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-400 text-sm", children: truck2.sub }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { id: truck2.truck_value, placeholder: "constraint value", defaultValue: truck2.truck_value, className: "text-xl text-gray-500 text-center" }, void 0, false, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this)
  ] }, truck2.bucket, true, {
    fileName: "app/components/truck-form.tsx",
    lineNumber: 31,
    columnNumber: 27
  }, this)) }, void 0, false, {
    fileName: "app/components/truck-form.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c3 = TruckInput;
var _c3;
$RefreshReg$(_c3, "TruckInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin-form.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin-form.tsx"
  );
  import.meta.hot.lastModified = "1708448307858.0833";
}
function AdminInput({
  admin
}) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid w-full gap-10", children: admin.map((admin2) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Label, { className: "text-xl", htmlFor: admin2.admin_name, children: [
      admin2.admin_name,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-400 text-sm", children: admin2.sub }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { id: admin2.admin_value, placeholder: "admin value", defaultValue: admin2.admin_value, className: "text-xl text-gray-500 text-center" }, void 0, false, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this)
  ] }, admin2.bucket, true, {
    fileName: "app/components/admin-form.tsx",
    lineNumber: 31,
    columnNumber: 27
  }, this)) }, void 0, false, {
    fileName: "app/components/admin-form.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c4 = AdminInput;
var _c4;
$RefreshReg$(_c4, "AdminInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/snop.truck.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.truck.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.truck.tsx"
  );
  import.meta.hot.lastModified = "1708448308203.9727";
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
var stats = [{
  name: "Cost per Bike (INR/Bike)",
  stat: "2,279"
}, {
  name: "Cost per Trip Margin",
  stat: "136,744"
}, {
  name: "Cost per km",
  stat: "41"
}];
var frameworks = [{
  value: "next.js",
  label: "Kolkata"
}, {
  value: "sveltekit",
  label: "Chennai"
}, {
  value: "nuxt.js",
  label: "Nuxt.js"
}, {
  value: "remix",
  label: "Remix"
}, {
  value: "astro",
  label: "Astro"
}];
function DemoContainer({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: cn("flex items-center justify-center [&>div]:w-full", className), ...props }, void 0, false, {
    fileName: "app/routes/snop.truck.tsx",
    lineNumber: 87,
    columnNumber: 10
  }, this);
}
_c5 = DemoContainer;
function Input2() {
  _s();
  const [oropen, setorOpen] = React.useState(false);
  const [desopen, setdesOpen] = React.useState(false);
  const [disopen, setdisOpen] = React.useState(false);
  const [tyopen, settyOpen] = React.useState(false);
  const [bacopen, setbacOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [date, setDate] = React.useState(/* @__PURE__ */ new Date());
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/routes/snop.truck.tsx",
      lineNumber: 120,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.truck.tsx",
      lineNumber: 119,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.truck.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.truck.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center  justify-between ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-xl lg:text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text  bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Transportation Cleansheet" }, void 0, false, {
        fileName: "app/routes/snop.truck.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.truck.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-2 items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "rounded-xl p-6 border shadow-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center space-x-4 justify-between mb-4 p-6 border-b rounded-lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-lg text-blue-900 font-semibold", children: "Origin" }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 136,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Popover, { open: oropen, onOpenChange: setorOpen, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { variant: "outline", role: "combobox", "aria-expanded": oropen, className: "w-[125px] justify-between bg-blue-900 text-white hover:bg-blue-800 hover:text-white", children: [
                  value ? frameworks.find((framework) => framework.value === value)?.label : "Chennai",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 141,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 139,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 138,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PopoverContent, { className: "w-[130px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CommandItem, { value: framework.value, onSelect: (currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setorOpen(false);
                }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Check, { className: cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0") }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 151,
                    columnNumber: 29
                  }, this),
                  framework.label
                ] }, framework.value, true, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 147,
                  columnNumber: 54
                }, this)) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 146,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 145,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 144,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 137,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 135,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-lg text-blue-900 font-semibold", children: "Destination" }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 160,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Popover, { open: desopen, onOpenChange: setdesOpen, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { variant: "outline", role: "combobox", "aria-expanded": desopen, className: "w-[125px] justify-between bg-blue-900 text-white hover:bg-blue-800 hover:text-white", children: [
                  value ? frameworks.find((framework) => framework.value === value)?.label : "Kolkata",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 167,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 165,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 164,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PopoverContent, { className: "w-[130px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CommandItem, { value: framework.value, onSelect: (currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setdesOpen(false);
                }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Check, { className: cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0") }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 177,
                    columnNumber: 29
                  }, this),
                  framework.label
                ] }, framework.value, true, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 173,
                  columnNumber: 54
                }, this)) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 172,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 171,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 170,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 163,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 159,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-lg text-blue-900 font-semibold", children: "Distance" }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 187,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Popover, { open: disopen, onOpenChange: setdisOpen, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { variant: "outline", role: "combobox", "aria-expanded": disopen, className: "w-[100px] justify-between bg-blue-900 text-white hover:bg-blue-800 hover:text-white", children: [
                  value ? frameworks.find((framework) => framework.value === value)?.label : "1,676",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 192,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 190,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 189,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PopoverContent, { className: "w-[130px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CommandItem, { value: framework.value, onSelect: (currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setdisOpen(false);
                }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Check, { className: cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0") }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 202,
                    columnNumber: 29
                  }, this),
                  framework.label
                ] }, framework.value, true, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 198,
                  columnNumber: 54
                }, this)) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 197,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 196,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 195,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 188,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 186,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-lg text-blue-900 font-semibold", children: "Backhaul" }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 212,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Popover, { open: bacopen, onOpenChange: setbacOpen, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { variant: "outline", role: "combobox", "aria-expanded": bacopen, className: "w-[120px] justify-between bg-blue-900 text-white hover:bg-blue-800 hover:text-white", children: [
                  value ? frameworks.find((framework) => framework.value === value)?.label : "Backhaul",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 217,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 215,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 214,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PopoverContent, { className: "w-[120px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CommandItem, { value: framework.value, onSelect: (currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setbacOpen(false);
                }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Check, { className: cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0") }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 227,
                    columnNumber: 29
                  }, this),
                  framework.label
                ] }, framework.value, true, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 223,
                  columnNumber: 54
                }, this)) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 222,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 221,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 220,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 213,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 211,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-8 items-start justify-center gap-6 grid grid-cols-1 lg:grid-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card, { className: "  text-blue-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TruckIcon_default, { className: "h-8 w-8 mr-2" }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 242,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-2xl", children: "Truck Parameters" }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 243,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 241,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 246,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 240,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardContent, { className: "grid gap-10 mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-xl text-blue-900 font-semibold ", children: "Truck Type" }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 251,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Popover, { open: tyopen, onOpenChange: settyOpen, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { variant: "outline", role: "combobox", "aria-expanded": tyopen, className: " lg:w-[210px] w-[155px] justify-between text-xl ", children: [
                      value ? frameworks.find((framework) => framework.value === value)?.label : "Kolkata",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
                        fileName: "app/routes/snop.truck.tsx",
                        lineNumber: 259,
                        columnNumber: 31
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/snop.truck.tsx",
                      lineNumber: 257,
                      columnNumber: 29
                    }, this) }, void 0, false, {
                      fileName: "app/routes/snop.truck.tsx",
                      lineNumber: 256,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PopoverContent, { className: "w-[200px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CommandItem, { value: framework.value, onSelect: (currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      settyOpen(false);
                    }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Check, { className: cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0") }, void 0, false, {
                        fileName: "app/routes/snop.truck.tsx",
                        lineNumber: 269,
                        columnNumber: 37
                      }, this),
                      framework.label
                    ] }, framework.value, true, {
                      fileName: "app/routes/snop.truck.tsx",
                      lineNumber: 265,
                      columnNumber: 62
                    }, this)) }, void 0, false, {
                      fileName: "app/routes/snop.truck.tsx",
                      lineNumber: 264,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "app/routes/snop.truck.tsx",
                      lineNumber: 263,
                      columnNumber: 29
                    }, this) }, void 0, false, {
                      fileName: "app/routes/snop.truck.tsx",
                      lineNumber: 262,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 255,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 254,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 250,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TruckInput, { truck: truck_default }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 279,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 249,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 239,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 238,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card, { className: " text-blue-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardHeader, { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(MapIcon_default, { className: "h-8 w-8 mr-2" }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 287,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-2xl", children: " Route Admin Expenses" }, void 0, false, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 288,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 286,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 291,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 285,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AdminInput, { admin: admin_default }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 294,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 293,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 284,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 283,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 237,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-end  pt-6 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { className: "bg-blue-900 hover:bg-blue-800 text-lg", children: "Submit" }, void 0, false, {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 300,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 299,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.truck.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardHeader, { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PresentationChartLineIcon_default, { className: "h-8 w-8 mr-2" }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 311,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-2xl", children: "Cleansheet Summary" }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 312,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 310,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "border-b" }, void 0, false, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 315,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 309,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardContent, { className: "grid gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("dl", { className: "grid grid-cols-1 gap-6 sm:grid-cols-3", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "rounded-2xl bg-gray-100 border px-4 py-5 shadow", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("dd", { className: "flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900", children: item.stat }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 321,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("dt", { className: "mt-2 flex justify-center truncate text-sm font-medium text-gray-500", children: item.name }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 324,
                columnNumber: 27
              }, this)
            ] }, item.name, true, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 320,
              columnNumber: 42
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 319,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 318,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { role: "list", className: "grid grid-cols-1 gap-2 mt-2", children: kpiService_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-base font-medium text-gray-900", children: kpi.Name }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 336,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 335,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 334,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-2", children: kpi.container }, void 0, false, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 341,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 333,
              columnNumber: 25
            }, this) }, kpi.Name, false, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 332,
              columnNumber: 46
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 331,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 317,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.truck.tsx",
          lineNumber: 308,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.truck.tsx",
          lineNumber: 307,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.truck.tsx",
          lineNumber: 306,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.truck.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.truck.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.truck.tsx",
    lineNumber: 116,
    columnNumber: 10
  }, this);
}
_s(Input2, "kbQCLLj7Z5beZHd4ebPsuR6ckNY=");
_c23 = Input2;
var _c5;
var _c23;
$RefreshReg$(_c5, "DemoContainer");
$RefreshReg$(_c23, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Input2 as default
};
/*! Bundled license information:

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.330.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.330.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.js:
  (**
   * @license lucide-react v0.330.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevrons-up-down.js:
  (**
   * @license lucide-react v0.330.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.330.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/routes/snop.truck-IR4J7FSL.js.map
