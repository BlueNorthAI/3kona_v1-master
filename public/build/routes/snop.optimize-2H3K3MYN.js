import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-U4UP5LIE.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-PAYI5ADR.js";
import {
  Button,
  Input,
  cn
} from "/build/_shared/chunk-2NVTJMAP.js";
import "/build/_shared/chunk-WLB7K45O.js";
import "/build/_shared/chunk-AZ2ABKPG.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  Form,
  Link,
  useActionData
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

// app/routes/snop.optimize.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.optimize.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.optimize.tsx"
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
function DemoContainer({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex items-center justify-center [&>div]:w-full", className), ...props }, void 0, false, {
    fileName: "app/routes/snop.optimize.tsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
}
_c = DemoContainer;
function Optimizer() {
  _s();
  const data = useActionData();
  const [jobStatus, setJobStatus] = (0, import_react.useState)("Waiting for job to start...");
  const [jobId, setJobId] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (data?.job_id) {
      setJobId(data.job_id);
      const intervalId = setInterval(async () => {
        const response = await fetch(`http://127.0.0.1:5000/results/${data.job_id}`);
        const statusData = await response.json();
        if (response.ok) {
          setJobStatus(`Status: ${statusData.status}`);
          console.log(statusData.status);
          if (statusData.status !== "in progress") {
            clearInterval(intervalId);
          }
        } else {
          setJobStatus("Error fetching job status");
          clearInterval(intervalId);
        }
      }, 3e3);
      return () => clearInterval(intervalId);
    }
  }, [data?.job_id]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 118,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 117,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 116,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg pb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center  justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Optimizer Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.optimize.tsx",
        lineNumber: 127,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.optimize.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl flex", children: "Scenario Summary" }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 137,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 141,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 136,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4 space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Select for Optimization" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 146,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Scenario" }, void 0, false, {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 151,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 150,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectGroup, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel, { children: "Fruits" }, void 0, false, {
                    fileName: "app/routes/snop.optimize.tsx",
                    lineNumber: 155,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "apple", children: "Apple" }, void 0, false, {
                    fileName: "app/routes/snop.optimize.tsx",
                    lineNumber: 156,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "banana", children: "Banana" }, void 0, false, {
                    fileName: "app/routes/snop.optimize.tsx",
                    lineNumber: 157,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "blueberry", children: "Blueberry" }, void 0, false, {
                    fileName: "app/routes/snop.optimize.tsx",
                    lineNumber: 158,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 154,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 153,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 149,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 145,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Spare threshold" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 164,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { className: "w-[180px]", type: "email", id: "email", placeholder: "20" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 167,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 163,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Number of Knives" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 171,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { className: "w-[180px]", type: "email", id: "email", placeholder: "0" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 174,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 170,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "flex border-t justify-center pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", name: "start", value: "yes", className: "text-base bg-blue-500  text-white hover:bg-blue-600", children: "Optimize" }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 178,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 177,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 135,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl", children: "Optimization Parameters" }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 191,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 194,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 190,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4 space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Optimization Status" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 198,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { className: "w-[290px]", type: "email", id: "email", placeholder: "Completed @ 1:51:32 PM - 2/23/2021" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 201,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 197,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Solver Status" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 205,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { className: "w-[290px]", type: "email", id: "email", placeholder: "OPTIMAL" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 208,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 204,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Job ID" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 212,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { className: "w-[290px]", type: "email", id: "email", placeholder: "eeeb3265-3cf4-44f4-944d-ea7dad4c12ed" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 213,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 211,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "flex border-t justify-center pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", name: "start", value: "yes", className: "text-base bg-blue-500  text-white hover:bg-blue-600", children: "Log" }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 216,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 215,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 196,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 189,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 188,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.optimize.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.optimize.tsx",
    lineNumber: 114,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.optimize.tsx",
    lineNumber: 113,
    columnNumber: 10
  }, this);
}
_s(Optimizer, "Drxbdmzg6mJmEFMP9X+ZqrQzvbo=", false, function() {
  return [useActionData];
});
_c2 = Optimizer;
var _c;
var _c2;
$RefreshReg$(_c, "DemoContainer");
$RefreshReg$(_c2, "Optimizer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Optimizer as default
};
//# sourceMappingURL=/build/routes/snop.optimize-2H3K3MYN.js.map
