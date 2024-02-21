import {
  SnopForm
} from "/build/_shared/chunk-AUZDLWEP.js";
import "/build/_shared/chunk-OESJ757L.js";
import "/build/_shared/chunk-2YHQU5X6.js";
import "/build/_shared/chunk-PAYI5ADR.js";
import {
  require_scenario
} from "/build/_shared/chunk-T5F5GXJC.js";
import "/build/_shared/chunk-TAH65X5V.js";
import {
  cn
} from "/build/_shared/chunk-2NVTJMAP.js";
import "/build/_shared/chunk-WLB7K45O.js";
import "/build/_shared/chunk-AZ2ABKPG.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-OH3J6KOJ.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  useLoaderData,
  useNavigate
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
var import_input = __toESM(require_input());
var import_scenario = __toESM(require_scenario());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
  import.meta.hot.lastModified = "1708499886002.1836";
}
function DemoContainer({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex items-center justify-center [&>div]:w-full", className), ...props }, void 0, false, {
    fileName: "app/routes/snop.input.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_c = DemoContainer;
function SnopInput() {
  _s();
  const [date, setDate] = import_react.default.useState(/* @__PURE__ */ new Date());
  const {
    snopInput
  } = useLoaderData();
  const navigate = useNavigate();
  console.log(snopInput);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SnopForm, { inputData: snopInput }, void 0, false, {
    fileName: "app/routes/snop.input.tsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}
_s(SnopInput, "gFr9IggDDycnA3h/uSvZOfvuPeY=", false, function() {
  return [useLoaderData, useNavigate];
});
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
//# sourceMappingURL=/build/routes/snop.input-4XXJWAZQ.js.map
