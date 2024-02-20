import {
  ConstraintInput,
  CostInput,
  DemandInput
} from "/build/_shared/chunk-XDOXXNGS.js";
import {
  Calendar,
  format
} from "/build/_shared/chunk-JJM6YTGR.js";
import {
  Label
} from "/build/_shared/chunk-EAHXE2UK.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-YOTMF5EX.js";
import {
  require_scenario
} from "/build/_shared/chunk-T5F5GXJC.js";
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
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  ArrowUpTrayIcon_default,
  CalendarIcon_default
} from "/build/_shared/chunk-MREU3T6C.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  Form,
  Link,
  useLoaderData,
  useNavigate
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/models/input.server
var require_input = __commonJS({
  "empty-module:~/models/input.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/snop.input.tsx
var import_react = __toESM(require_react());

// app/components/empcost-form.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
  import.meta.hot.lastModified = "1708428185249.7642";
}
function CostInput2({
  cost
}) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid w-full gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "hiringcost", children: [
        "Hiring Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee" }, void 0, false, {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "hiringcost", name: "hiring_cost_pw", defaultValue: cost["hiring_cost_pw"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empcost-form.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "layoff", children: [
        "Layoff Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee" }, void 0, false, {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "layoff", name: "firing_cost_pw", defaultValue: cost["firing_cost_pw"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empcost-form.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "emp", children: [
        "Employee Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee" }, void 0, false, {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "emp", name: "worker_cost_pm", defaultValue: cost["worker_cost_pm"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empcost-form.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "ot", children: [
        "Overtime Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per hour" }, void 0, false, {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "ot", name: "overtime_cost_phr", defaultValue: cost["overtime_cost_phr"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
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
_c = CostInput2;
var _c;
$RefreshReg$(_c, "CostInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/outcost-form.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
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
  import.meta.hot.lastModified = "1708428254502.779";
}
function CostInput3({
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
          fileName: "app/components/outcost-form.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "mc", name: "outsourcing_cost_pu", defaultValue: cost["outsourcing_cost_pu"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/outcost-form.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "man", children: [
        "Manufacturing Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit" }, void 0, false, {
          fileName: "app/components/outcost-form.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "man", name: "max_work_hrs_pwpm", defaultValue: cost["max_work_hrs_pwpm"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/outcost-form.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "logi", children: [
        "Logistics Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit" }, void 0, false, {
          fileName: "app/components/outcost-form.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "logi", name: "max_overtime_hrs_pwpm", defaultValue: cost["max_overtime_hrs_pwpm"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
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
_c2 = CostInput3;
var _c2;
$RefreshReg$(_c2, "CostInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/empconstraint-form.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
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
  import.meta.hot.lastModified = "1708428411728.5005";
}
function ConstraintInput2({
  constraint
}) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid w-full  gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { className: "text-lg", htmlFor: "max", children: [
        "Max overtime hours",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee per month" }, void 0, false, {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "max", name: "max_overtime_hrs_pwpm", defaultValue: constraint["max_overtime_hrs_pwpm"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empconstraint-form.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { className: "text-lg", htmlFor: "noemp", children: [
        "Starting # of employee",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, false, {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "noemp", name: "num_workers_start", defaultValue: constraint["num_workers_start"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empconstraint-form.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { className: "text-lg", htmlFor: "minemp", children: [
        "Min ending # of employees",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, false, {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "minemp", name: "min_end_workers", defaultValue: constraint["min_end_workers"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/empconstraint-form.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { className: "text-lg", htmlFor: "maxemp", children: [
        "Max ending # of employees",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, false, {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "maxemp", name: "max_end_workers", defaultValue: constraint["max_end_workers"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
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
_c3 = ConstraintInput2;
var _c3;
$RefreshReg$(_c3, "ConstraintInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/proconstraint-form.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
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
  import.meta.hot.lastModified = "1708428431997.7158";
}
function ConstraintInput3({
  constraint
}) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid w-full  gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { className: "text-lg", htmlFor: "labour", children: [
      "Labour hours",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee per unit" }, void 0, false, {
        fileName: "app/components/proconstraint-form.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/proconstraint-form.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { id: "labour", name: "labor_hrs_pu", defaultValue: constraint["labor_hrs_pu"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
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
_c4 = ConstraintInput3;
var _c4;
$RefreshReg$(_c4, "ConstraintInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/snop.input.tsx
var import_input6 = __toESM(require_input());
var import_scenario = __toESM(require_scenario());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.input.tsx"
  );
  import.meta.hot.lastModified = "1708433562550.568";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: cn("flex items-center justify-center [&>div]:w-full", className), ...props }, void 0, false, {
    fileName: "app/routes/snop.input.tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}
_c5 = DemoContainer;
function SnopInput() {
  _s();
  const [date, setDate] = import_react.default.useState(/* @__PURE__ */ new Date());
  const {
    snopInput
  } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "m-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/routes/snop.input.tsx",
      lineNumber: 115,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.input.tsx",
      lineNumber: 114,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.input.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.input.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center  justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Sales & Operations Planning Input" }, void 0, false, {
          fileName: "app/routes/snop.input.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-50", name: "description", placeholder: "Describe your scenario" }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-50 ", name: "customer", defaultValue: "All", hidden: true }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-50", name: "site", defaultValue: "All", hidden: true }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-50", name: "sku", defaultValue: "All", hidden: true }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-50", name: "Status", defaultValue: "Open", hidden: true }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Popover, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "outline", className: cn("w-[180px] justify-start text-left font-normal", !date && "text-muted-foreground"), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CalendarIcon_default, { className: "mr-2 h-4 w-4 text-blue-900" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 135,
                columnNumber: 21
              }, this),
              date ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-blue-900", children: format(date, "PPP") }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 136,
                columnNumber: 29
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-blue-900", children: "Pick a date" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 138,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 134,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PopoverContent, { className: "w-auto p-0 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Calendar, { className: "text-blue-900", mode: "single", selected: date, onSelect: setDate, initialFocus: true }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 142,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 141,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ml-2 flex max-w-sm items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { type: "file" }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 147,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { className: "mr-4  p-1 rounded-md border bg-blue-500 hover:bg-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center space-x-1 mx-2 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ArrowUpTrayIcon_default, { className: "text-white h-5 w-5" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 151,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "mx-1 text-sm p-1 text-white ", children: "Upload" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 152,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 150,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 149,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.input.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.input.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardTitle, { className: "text-2xl flex", children: "Demand" }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 163,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units per month" }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 164,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-b" }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 165,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 162,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DemandInput, { demands: snopInput }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 169,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 168,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.input.tsx",
          lineNumber: 161,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.input.tsx",
          lineNumber: 160,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.input.tsx",
          lineNumber: 159,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardTitle, { className: "text-2xl", children: "Material & Inventory Cost" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 179,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 182,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 178,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CostInput, { cost: snopInput }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 185,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 184,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 177,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardTitle, { className: "text-2xl", children: "Employee Cost" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 192,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 193,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 191,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CostInput2, { cost: snopInput }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 196,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 195,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 190,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 189,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.input.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardTitle, { className: "text-2xl", children: "Outsourcing Cost" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 206,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 207,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 205,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CostInput3, { cost: snopInput }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 210,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 209,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 204,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 203,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardTitle, { className: "text-2xl", children: "Inventory Constraint" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 217,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 220,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 216,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ConstraintInput, { constraint: snopInput }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 223,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 222,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 214,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.input.tsx",
          lineNumber: 202,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardTitle, { className: "text-2xl", children: "Employee Constraint" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 232,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 235,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 231,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ConstraintInput2, { constraint: snopInput }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 238,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 237,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 230,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 229,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardTitle, { className: "text-2xl", children: "Product Constraint" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 245,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.input.tsx",
                lineNumber: 248,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 244,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ConstraintInput3, { constraint: snopInput }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 251,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.input.tsx",
              lineNumber: 250,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 243,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.input.tsx",
            lineNumber: 242,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.input.tsx",
          lineNumber: 228,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.input.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "py-4 border-t flex justify-end space-x-2 mr-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { className: "bg-blue-500 hover:bg-blue-600", children: "Create Scenario" }, void 0, false, {
          fileName: "app/routes/snop.input.tsx",
          lineNumber: 259,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "outline", children: "Save Input" }, void 0, false, {
          fileName: "app/routes/snop.input.tsx",
          lineNumber: 263,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { onClick: () => navigate(-1), type: "button", className: "", variant: "default", children: "Cancel" }, void 0, false, {
          fileName: "app/routes/snop.input.tsx",
          lineNumber: 265,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.input.tsx",
          lineNumber: 264,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.input.tsx",
        lineNumber: 258,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.input.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.input.tsx",
    lineNumber: 111,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.input.tsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
}
_s(SnopInput, "gFr9IggDDycnA3h/uSvZOfvuPeY=", false, function() {
  return [useLoaderData, useNavigate];
});
_c22 = SnopInput;
var _c5;
var _c22;
$RefreshReg$(_c5, "DemoContainer");
$RefreshReg$(_c22, "SnopInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SnopInput as default
};
//# sourceMappingURL=/build/routes/snop.input-SIYMHTNM.js.map
