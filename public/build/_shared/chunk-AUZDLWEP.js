import {
  Calendar,
  format
} from "/build/_shared/chunk-OESJ757L.js";
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
import {
  ArrowUpTrayIcon_default,
  CalendarIcon_default
} from "/build/_shared/chunk-OH3J6KOJ.js";
import {
  Form,
  Link,
  useNavigate,
  useParams
} from "/build/_shared/chunk-ZVVJ5DIP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-MEDZ44IS.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/SnopForm.tsx
var import_react = __toESM(require_react());

// app/components/demand-form.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\demand-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\demand-form.tsx"
  );
  import.meta.hot.lastModified = "1708448307873.7605";
}
function DemandInput({
  demands
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid w-full  gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "jan", children: "January" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "jan", name: "Jan", defaultValue: demands["Jan"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "feb", children: "February" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "feb", name: "Feb", defaultValue: demands["Feb"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "mar", children: "March" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "mar", name: "Mar", defaultValue: demands["Mar"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "apr", children: "April" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "apr", name: "Apr", defaultValue: demands["Apr"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "may", children: "May" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "may", name: "May", defaultValue: demands["May"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "jun", children: "June" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "jun", name: "Jun", defaultValue: demands["Jun"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "jul", children: "July" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "jul", name: "Jul", defaultValue: demands["Jul"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "aug", children: "August" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "aug", name: "Aug", defaultValue: demands["Aug"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "sep", children: "September" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "sep", name: "Sep", defaultValue: demands["Sep"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "oct", children: "October" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "oct", name: "Oct", defaultValue: demands["Oct"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "nov", children: "November" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "nov", name: "Nov", defaultValue: demands["Nov"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "dec", children: "December" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "dec", name: "Dec", defaultValue: demands["Dec"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/demand-form.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/demand-form.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_c = DemandInput;
var _c;
$RefreshReg$(_c, "DemandInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/cost-form.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\cost-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\cost-form.tsx"
  );
  import.meta.hot.lastModified = "1708448307858.0833";
}
function CostInput({
  cost
}) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid w-full gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "mc", children: [
        "Material Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit" }, void 0, false, {
          fileName: "app/components/cost-form.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/cost-form.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "mc", name: "material_cost_pu", defaultValue: cost["material_cost_pu"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/cost-form.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/cost-form.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "hold", children: [
        "Holding Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit per month" }, void 0, false, {
          fileName: "app/components/cost-form.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/cost-form.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "hold", name: "inv_hold_cost_pupm", defaultValue: cost["inv_hold_cost_pupm"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/cost-form.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/cost-form.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "stock", children: [
        "Stockout Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit per month" }, void 0, false, {
          fileName: "app/components/cost-form.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/cost-form.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "stock", name: "stockout_cost_pupm", defaultValue: cost["stockout_cost_pupm"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/cost-form.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/cost-form.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/cost-form.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c2 = CostInput;
var _c2;
$RefreshReg$(_c2, "CostInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/empcost-form.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\empcost-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\empcost-form.tsx"
  );
  import.meta.hot.lastModified = "1708448307873.7605";
}
function CostInput2({
  cost
}) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid w-full gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { className: "text-lg", htmlFor: "hiringcost", children: [
        "Hiring Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee" }, void 0, false, {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "hiringcost", name: "hiring_cost_pw", defaultValue: cost["hiring_cost_pw"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empcost-form.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { className: "text-lg", htmlFor: "layoff", children: [
        "Layoff Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee" }, void 0, false, {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "layoff", name: "firing_cost_pw", defaultValue: cost["firing_cost_pw"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empcost-form.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { className: "text-lg", htmlFor: "emp", children: [
        "Employee Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee" }, void 0, false, {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "emp", name: "worker_cost_pm", defaultValue: cost["worker_cost_pm"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empcost-form.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { className: "text-lg", htmlFor: "ot", children: [
        "Overtime Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per hour" }, void 0, false, {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "ot", name: "overtime_cost_phr", defaultValue: cost["overtime_cost_phr"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empcost-form.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/empcost-form.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c3 = CostInput2;
var _c3;
$RefreshReg$(_c3, "CostInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/outcost-form.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\outcost-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\outcost-form.tsx"
  );
  import.meta.hot.lastModified = "1708448307873.7605";
}
function CostInput3({
  cost
}) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid w-full gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { className: "text-lg", htmlFor: "mc", children: [
        "Material Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit" }, void 0, false, {
          fileName: "app/components/outcost-form.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { id: "mc", name: "outsourcing_cost_pu", defaultValue: cost["outsourcing_cost_pu"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/outcost-form.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { className: "text-lg", htmlFor: "man", children: [
        "Manufacturing Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit" }, void 0, false, {
          fileName: "app/components/outcost-form.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { id: "man", name: "max_work_hrs_pwpm", defaultValue: cost["max_work_hrs_pwpm"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/outcost-form.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { className: "text-lg", htmlFor: "logi", children: [
        "Logistics Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit" }, void 0, false, {
          fileName: "app/components/outcost-form.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { id: "logi", name: "max_overtime_hrs_pwpm", defaultValue: cost["max_overtime_hrs_pwpm"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/outcost-form.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/outcost-form.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c4 = CostInput3;
var _c4;
$RefreshReg$(_c4, "CostInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/constraint-form.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\constraint-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\constraint-form.tsx"
  );
  import.meta.hot.lastModified = "1708448307858.0833";
}
function ConstraintInput({
  constraint
}) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid w-full  gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Label, { className: "text-lg", htmlFor: "startinv", children: [
        "Starting Inventory",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, false, {
          fileName: "app/components/constraint-form.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/constraint-form.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { id: "startinv", name: "inventory_start", defaultValue: constraint["inventory_start"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/constraint-form.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/constraint-form.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Label, { className: "text-lg", htmlFor: "endinv", children: [
        "Ending Inventory",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, false, {
          fileName: "app/components/constraint-form.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/constraint-form.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { id: "endinv", name: "inventory_end", defaultValue: constraint["inventory_end"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/constraint-form.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/constraint-form.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Label, { className: "text-lg", htmlFor: "startback", children: [
        "Starting Backlog",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, false, {
          fileName: "app/components/constraint-form.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/constraint-form.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { id: "startback", name: "backlog_start", defaultValue: constraint["backlog_start"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/constraint-form.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/constraint-form.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Label, { className: "text-lg", htmlFor: "endback", children: [
        "Ending Backlog",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, false, {
          fileName: "app/components/constraint-form.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/constraint-form.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { id: "endback", name: "backlog_end", defaultValue: constraint["backlog_end"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/constraint-form.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/constraint-form.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/constraint-form.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c5 = ConstraintInput;
var _c5;
$RefreshReg$(_c5, "ConstraintInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/empconstraint-form.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\empconstraint-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\empconstraint-form.tsx"
  );
  import.meta.hot.lastModified = "1708448307873.7605";
}
function ConstraintInput2({
  constraint
}) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid w-full  gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Label, { className: "text-lg", htmlFor: "max", children: [
        "Max overtime hours",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee per month" }, void 0, false, {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { id: "max", name: "max_overtime_hrs_pwpm", defaultValue: constraint["max_overtime_hrs_pwpm"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empconstraint-form.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Label, { className: "text-lg", htmlFor: "noemp", children: [
        "Starting # of employee",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, false, {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { id: "noemp", name: "num_workers_start", defaultValue: constraint["num_workers_start"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empconstraint-form.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Label, { className: "text-lg", htmlFor: "minemp", children: [
        "Min ending # of employees",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, false, {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { id: "minemp", name: "min_end_workers", defaultValue: constraint["min_end_workers"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empconstraint-form.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Label, { className: "text-lg", htmlFor: "maxemp", children: [
        "Max ending # of employees",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, false, {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { id: "maxemp", name: "max_end_workers", defaultValue: constraint["max_end_workers"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empconstraint-form.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/empconstraint-form.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c6 = ConstraintInput2;
var _c6;
$RefreshReg$(_c6, "ConstraintInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/proconstraint-form.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\proconstraint-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\proconstraint-form.tsx"
  );
  import.meta.hot.lastModified = "1708448307873.7605";
}
function ConstraintInput3({
  constraint
}) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid w-full  gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Label, { className: "text-lg", htmlFor: "labour", children: [
      "Labour hours",
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee per unit" }, void 0, false, {
        fileName: "app/components/proconstraint-form.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/proconstraint-form.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { id: "labour", name: "labor_hrs_pu", defaultValue: constraint["labor_hrs_pu"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
      fileName: "app/components/proconstraint-form.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/proconstraint-form.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/proconstraint-form.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c7 = ConstraintInput3;
var _c7;
$RefreshReg$(_c7, "ConstraintInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/SnopForm.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\SnopForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\SnopForm.tsx"
  );
  import.meta.hot.lastModified = "1708501694441.8108";
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
function DemoContainer({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: cn("flex items-center justify-center [&>div]:w-full", className), ...props }, void 0, false, {
    fileName: "app/components/SnopForm.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_c8 = DemoContainer;
function SnopForm({
  inputData
}) {
  _s();
  const [date, setDate] = import_react.default.useState(/* @__PURE__ */ new Date());
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.scenId);
  console.log(inputData);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "m-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/components/SnopForm.tsx",
      lineNumber: 98,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/components/SnopForm.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/SnopForm.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/SnopForm.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center  justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Sales & Operations Planning Input" }, void 0, false, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            Input,
            {
              className: "mx-2 text-blue-900 w-50",
              name: "description",
              defaultValue: inputData.description || "Describe your scenario"
            },
            void 0,
            false,
            {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 110,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-50 ", name: "customer", defaultValue: "All", hidden: true }, void 0, false, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-50", name: "site", defaultValue: "All", hidden: true }, void 0, false, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 114,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-50", name: "sku", defaultValue: "All", hidden: true }, void 0, false, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 115,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-50", name: "Status", defaultValue: "Open", hidden: true }, void 0, false, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Popover, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { variant: "outline", className: cn("w-[180px] justify-start text-left font-normal", !date && "text-muted-foreground"), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CalendarIcon_default, { className: "mr-2 h-4 w-4 text-blue-900" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 120,
                columnNumber: 21
              }, this),
              date ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-blue-900", children: format(date, "PPP") }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 121,
                columnNumber: 29
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-blue-900", children: "Pick a date" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 123,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 119,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 118,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(PopoverContent, { className: "w-auto p-0 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Calendar, { className: "text-blue-900", mode: "single", selected: date, onSelect: setDate, initialFocus: true }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 126,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "ml-2 flex max-w-sm items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Input, { type: "file" }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 132,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { className: "mr-4  p-1 rounded-md border bg-blue-500 hover:bg-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center space-x-1 mx-2 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ArrowUpTrayIcon_default, { className: "text-white h-5 w-5" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 136,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "mx-1 text-sm p-1 text-white ", children: "Upload" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 137,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 135,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 134,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/SnopForm.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardTitle, { className: "text-2xl flex", children: "Demand" }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 148,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units per month" }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 149,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "border-b" }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 150,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 147,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DemandInput, { demands: inputData }, void 0, false, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 154,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 153,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 146,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 144,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardTitle, { className: "text-2xl", children: "Material & Inventory Cost" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 164,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 167,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 163,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CostInput, { cost: inputData }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 170,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 169,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 161,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardTitle, { className: "text-2xl", children: "Employee Cost" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 177,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 178,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 176,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CostInput2, { cost: inputData }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 181,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 180,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 175,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardTitle, { className: "text-2xl", children: "Outsourcing Cost" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 191,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 192,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 190,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CostInput3, { cost: inputData }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 195,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 194,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 189,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 188,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardTitle, { className: "text-2xl", children: "Inventory Constraint" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 202,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 205,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 201,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ConstraintInput, { constraint: inputData }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 208,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 207,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 200,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 199,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardTitle, { className: "text-2xl", children: "Employee Constraint" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 217,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 220,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 216,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ConstraintInput2, { constraint: inputData }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 223,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 222,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 214,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardTitle, { className: "text-2xl", children: "Product Constraint" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 230,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 233,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 229,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ConstraintInput3, { constraint: inputData }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 236,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 235,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 228,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 213,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/SnopForm.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "py-4 border-t flex justify-end space-x-2 mr-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { className: "bg-blue-500 hover:bg-blue-600", children: params.scenId ? "Update Scenario" : "Create Scenario" }, void 0, false, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 244,
          columnNumber: 13
        }, this),
        params.scenId == null && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { variant: "outline", children: "Save Input" }, void 0, false, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 248,
          columnNumber: 39
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { onClick: () => navigate(-1), type: "button", className: "", variant: "default", children: "Cancel" }, void 0, false, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 250,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 249,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/SnopForm.tsx",
        lineNumber: 243,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SnopForm.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SnopForm.tsx",
    lineNumber: 94,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/SnopForm.tsx",
    lineNumber: 93,
    columnNumber: 10
  }, this);
}
_s(SnopForm, "9HjmH+nau3PMXXq22nkMIktQBUA=", false, function() {
  return [useNavigate, useParams];
});
_c22 = SnopForm;
var _c8;
var _c22;
$RefreshReg$(_c8, "DemoContainer");
$RefreshReg$(_c22, "SnopForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  SnopForm
};
//# sourceMappingURL=/build/_shared/chunk-AUZDLWEP.js.map
