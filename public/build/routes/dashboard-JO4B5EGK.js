import {
  clsx_default
} from "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  d,
  r,
  s,
  u as u2
} from "/build/_shared/chunk-X4JIH5W5.js";
import {
  T
} from "/build/_shared/chunk-ZSUFT5EU.js";
import {
  C,
  I,
  I2,
  O,
  T as T2,
  U,
  o,
  o2,
  o3,
  u,
  y
} from "/build/_shared/chunk-JKKPAHGM.js";
import {
  Bars3Icon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-MREU3T6C.js";
import {
  NavLink,
  Outlet,
  useLoaderData,
  useMatches
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

// app/routes/dashboard.tsx
var import_react3 = __toESM(require_react());

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react = __toESM(require_react(), 1);
var t;
var a = (t = import_react.default.startTransition) != null ? t : function(i) {
  i();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var Q = ((o4) => (o4[o4.Open = 0] = "Open", o4[o4.Closed = 1] = "Closed", o4))(Q || {});
var V = ((t2) => (t2[t2.ToggleDisclosure = 0] = "ToggleDisclosure", t2[t2.CloseDisclosure = 1] = "CloseDisclosure", t2[t2.SetButtonId = 2] = "SetButtonId", t2[t2.SetPanelId = 3] = "SetPanelId", t2[t2.LinkPanel = 4] = "LinkPanel", t2[t2.UnlinkPanel = 5] = "UnlinkPanel", t2))(V || {});
var Y = { [0]: (e) => ({ ...e, disclosureState: u(e.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e) => e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }, [4](e) {
  return e.linkedPanel === true ? e : { ...e, linkedPanel: true };
}, [5](e) {
  return e.linkedPanel === false ? e : { ...e, linkedPanel: false };
}, [2](e, n) {
  return e.buttonId === n.buttonId ? e : { ...e, buttonId: n.buttonId };
}, [3](e, n) {
  return e.panelId === n.panelId ? e : { ...e, panelId: n.panelId };
} };
var M = (0, import_react2.createContext)(null);
M.displayName = "DisclosureContext";
function _(e) {
  let n = (0, import_react2.useContext)(M);
  if (n === null) {
    let o4 = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o4, _), o4;
  }
  return n;
}
var v = (0, import_react2.createContext)(null);
v.displayName = "DisclosureAPIContext";
function K(e) {
  let n = (0, import_react2.useContext)(v);
  if (n === null) {
    let o4 = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o4, K), o4;
  }
  return n;
}
var F = (0, import_react2.createContext)(null);
F.displayName = "DisclosurePanelContext";
function Z() {
  return (0, import_react2.useContext)(F);
}
function ee(e, n) {
  return u(n.type, Y, e, n);
}
var te = import_react2.Fragment;
function ne(e, n) {
  let { defaultOpen: o4 = false, ...i } = e, f = (0, import_react2.useRef)(null), l = y(n, T2((u3) => {
    f.current = u3;
  }, e.as === void 0 || e.as === import_react2.Fragment)), t2 = (0, import_react2.useRef)(null), d2 = (0, import_react2.useRef)(null), s2 = (0, import_react2.useReducer)(ee, { disclosureState: o4 ? 0 : 1, linkedPanel: false, buttonRef: d2, panelRef: t2, buttonId: null, panelId: null }), [{ disclosureState: c, buttonId: a2 }, D] = s2, p = o((u3) => {
    D({ type: 1 });
    let y2 = o2(f);
    if (!y2 || !a2)
      return;
    let r3 = (() => u3 ? u3 instanceof HTMLElement ? u3 : u3.current instanceof HTMLElement ? u3.current : y2.getElementById(a2) : y2.getElementById(a2))();
    r3 == null || r3.focus();
  }), P = (0, import_react2.useMemo)(() => ({ close: p }), [p]), T3 = (0, import_react2.useMemo)(() => ({ open: c === 0, close: p }), [c, p]), C2 = { ref: l };
  return import_react2.default.createElement(M.Provider, { value: s2 }, import_react2.default.createElement(v.Provider, { value: P }, import_react2.default.createElement(s, { value: u(c, { [0]: d.Open, [1]: d.Closed }) }, C({ ourProps: C2, theirProps: i, slot: T3, defaultTag: te, name: "Disclosure" }))));
}
var le = "button";
function oe(e, n) {
  let o4 = I(), { id: i = `headlessui-disclosure-button-${o4}`, ...f } = e, [l, t2] = _("Disclosure.Button"), d2 = Z(), s2 = d2 === null ? false : d2 === l.panelId, c = (0, import_react2.useRef)(null), a2 = y(c, n, s2 ? null : l.buttonRef), D = I2();
  (0, import_react2.useEffect)(() => {
    if (!s2)
      return t2({ type: 2, buttonId: i }), () => {
        t2({ type: 2, buttonId: null });
      };
  }, [i, t2, s2]);
  let p = o((r3) => {
    var m;
    if (s2) {
      if (l.disclosureState === 1)
        return;
      switch (r3.key) {
        case o3.Space:
        case o3.Enter:
          r3.preventDefault(), r3.stopPropagation(), t2({ type: 0 }), (m = l.buttonRef.current) == null || m.focus();
          break;
      }
    } else
      switch (r3.key) {
        case o3.Space:
        case o3.Enter:
          r3.preventDefault(), r3.stopPropagation(), t2({ type: 0 });
          break;
      }
  }), P = o((r3) => {
    switch (r3.key) {
      case o3.Space:
        r3.preventDefault();
        break;
    }
  }), T3 = o((r3) => {
    var m;
    r(r3.currentTarget) || e.disabled || (s2 ? (t2({ type: 0 }), (m = l.buttonRef.current) == null || m.focus()) : t2({ type: 0 }));
  }), C2 = (0, import_react2.useMemo)(() => ({ open: l.disclosureState === 0 }), [l]), u3 = T(e, c), y2 = s2 ? { ref: a2, type: u3, onKeyDown: p, onClick: T3 } : { ref: a2, id: i, type: u3, "aria-expanded": l.disclosureState === 0, "aria-controls": l.linkedPanel ? l.panelId : void 0, onKeyDown: p, onKeyUp: P, onClick: T3 };
  return C({ mergeRefs: D, ourProps: y2, theirProps: f, slot: C2, defaultTag: le, name: "Disclosure.Button" });
}
var re = "div";
var se = O.RenderStrategy | O.Static;
function ue(e, n) {
  let o4 = I(), { id: i = `headlessui-disclosure-panel-${o4}`, ...f } = e, [l, t2] = _("Disclosure.Panel"), { close: d2 } = K("Disclosure.Panel"), s2 = I2(), c = y(n, l.panelRef, (T3) => {
    a(() => t2({ type: T3 ? 4 : 5 }));
  });
  (0, import_react2.useEffect)(() => (t2({ type: 3, panelId: i }), () => {
    t2({ type: 3, panelId: null });
  }), [i, t2]);
  let a2 = u2(), D = (() => a2 !== null ? (a2 & d.Open) === d.Open : l.disclosureState === 0)(), p = (0, import_react2.useMemo)(() => ({ open: l.disclosureState === 0, close: d2 }), [l, d2]), P = { ref: c, id: i };
  return import_react2.default.createElement(F.Provider, { value: l.panelId }, C({ mergeRefs: s2, ourProps: P, theirProps: f, slot: p, defaultTag: re, features: se, visible: D, name: "Disclosure.Panel" }));
}
var ie = U(ne);
var ae = U(oe);
var pe = U(ue);
var Ae = Object.assign(ie, { Button: ae, Panel: pe });

// app/routes/dashboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\dashboard.tsx"
  );
  import.meta.hot.lastModified = "1707904796390.1843";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var navigation = [{
  name: "Overview",
  to: "/snop/dashboard/overview",
  current: true
}, {
  name: "Demand",
  to: "/snop/demand",
  current: false
}, {
  name: "Supply",
  to: "supply",
  current: false
}, {
  name: "Inventory",
  to: "inventory",
  current: false
}, {
  name: "Spend",
  to: "spend",
  current: false
}, {
  name: "Finance",
  to: "finance",
  current: false
}, {
  name: "Sales & Marketing",
  to: "sales",
  current: false
}, {
  name: "Campaign",
  to: "campaign",
  current: false
}];
function NavItem({
  to,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to, prefetch: "intent", className: ({
    isActive
  }) => clsx_default("rounded-md px-2 py-2 text-md font-semibold md:px-3", isActive ? "py-2 bg-sky-600 text-white font-bold bg-opacity-75 border" : "text-white hover:bg-sky-300 hover:bg-opacity-75"), "aria-current": ({
    isActive
  }) => isActive ? "page" : void 0, children }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}
_c = NavItem;
function SCMDashboardRoute() {
  _s();
  const data = useLoaderData();
  const matches = useMatches();
  const currRoute = matches[matches.length - 1].id;
  const dashboardHome = "/demo/dashboard/overview";
  const scmOverviewMatches = matches.some((m) => m.id === "routes/snop/dashboard/overview");
  const inventoryMatches = matches.some((m) => m.id === "routes/snop/dashboard/inventory");
  const demandMatches = matches.some((m) => m.id === "routes/snop/dashboard/demand");
  const supplyMatches = matches.some((m) => m.id === "routes/snop/dashboard/supply");
  const dispatchMatches = matches.some((m) => m.id === "routes/snop/dashboard/dispatch");
  const binaryValues = [scmOverviewMatches, inventoryMatches, demandMatches, dispatchMatches, supplyMatches];
  const filteredValues = binaryValues.filter((value) => value);
  const items = [{
    id: 1,
    name: "Review",
    description: "Conduct periodic (month/quarter/year) performance review of key business KPIs",
    to: `review`
  }, {
    id: 2,
    name: "Meeting",
    description: "Conduct daily/weekly data driven meetings and create plan of action ",
    to: `${currRoute}/meeting`
  }];
  const [selected, setSelected] = import_react3.default.useState(items[0]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae, { as: "nav", className: "bg-sky-500 ", children: ({
      open
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-16 items-center justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ml-10 flex items-baseline space-x-4", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItem, { to: item.to, children: item.name }, item.name, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 121,
          columnNumber: 47
        }, this)) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 120,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 119,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 118,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mr-2 flex md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae.Button, { className: "flex items-center justify-start rounded-md bg-sky-600 p-2 text-white hover:bg-sky-700 hover:bg-opacity-75", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 130,
            columnNumber: 23
          }, this),
          open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 131,
            columnNumber: 31
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 131,
            columnNumber: 92
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 129,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 127,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 117,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 116,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae.Panel, { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1 px-2 pb-3 pt-2 sm:px-3", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae.Button, { as: "a", href: item.href, className: classNames(item.current ? "bg-blue-900 text-white" : "text-white hover:bg-blue-500 hover:bg-opacity-75", "block rounded-md px-3 py-2 text-base font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 139,
        columnNumber: 43
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 138,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 137,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 115,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 149,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 148,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 111,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
}
_s(SCMDashboardRoute, "4KP4R6bSf5Qg6khKypoVZqlvSoM=", false, function() {
  return [useLoaderData, useMatches];
});
_c2 = SCMDashboardRoute;
var _c;
var _c2;
$RefreshReg$(_c, "NavItem");
$RefreshReg$(_c2, "SCMDashboardRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SCMDashboardRoute as default
};
//# sourceMappingURL=/build/routes/dashboard-JO4B5EGK.js.map
