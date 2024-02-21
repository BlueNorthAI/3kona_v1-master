import {
  E,
  N as N2,
  ee,
  n,
  n2,
  s as s4,
  y as y3
} from "/build/_shared/chunk-EC4QPT3H.js";
import {
  kpiService_m
} from "/build/_shared/chunk-7UUGZQUL.js";
import "/build/_shared/chunk-N3WEPD7Z.js";
import "/build/_shared/chunk-EFKQI77X.js";
import "/build/_shared/chunk-TZVNLAUT.js";
import "/build/_shared/chunk-VM7DCUCB.js";
import "/build/_shared/chunk-OH52VQQI.js";
import {
  CardLayout,
  It,
  qe
} from "/build/_shared/chunk-56MKNIDO.js";
import {
  y
} from "/build/_shared/chunk-EL4ICYCD.js";
import "/build/_shared/chunk-H6ZGEDNT.js";
import "/build/_shared/chunk-DFGEPVYF.js";
import {
  d,
  r,
  s as s3,
  u as u2
} from "/build/_shared/chunk-X4JIH5W5.js";
import {
  M,
  N,
  O,
  T,
  f,
  f2,
  h,
  s as s2
} from "/build/_shared/chunk-ZHRRJYGJ.js";
import "/build/_shared/chunk-ZQSOIJBR.js";
import "/build/_shared/chunk-HEETWZQQ.js";
import {
  T as T2
} from "/build/_shared/chunk-ZSUFT5EU.js";
import {
  C,
  I,
  I2,
  O as O2,
  T as T3,
  U,
  l,
  o,
  o2,
  o3,
  s2 as s,
  u,
  y as y2
} from "/build/_shared/chunk-JKKPAHGM.js";
import {
  CheckIcon_default,
  ChevronDownIcon_default,
  FunnelIcon_default
} from "/build/_shared/chunk-OH3J6KOJ.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-ZVVJ5DIP.js";
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

// app/routes/snop.demand.jsx
var import_react2 = __toESM(require_react());

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react = __toESM(require_react(), 1);
var he = ((u3) => (u3[u3.Open = 0] = "Open", u3[u3.Closed = 1] = "Closed", u3))(he || {});
var He = ((e) => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(He || {});
var Ge = { [0]: (t) => {
  let o4 = { ...t, popoverState: u(t.popoverState, { [0]: 1, [1]: 0 }) };
  return o4.popoverState === 0 && (o4.__demoMode = false), o4;
}, [1](t) {
  return t.popoverState === 1 ? t : { ...t, popoverState: 1 };
}, [2](t, o4) {
  return t.button === o4.button ? t : { ...t, button: o4.button };
}, [3](t, o4) {
  return t.buttonId === o4.buttonId ? t : { ...t, buttonId: o4.buttonId };
}, [4](t, o4) {
  return t.panel === o4.panel ? t : { ...t, panel: o4.panel };
}, [5](t, o4) {
  return t.panelId === o4.panelId ? t : { ...t, panelId: o4.panelId };
} };
var ue = (0, import_react.createContext)(null);
ue.displayName = "PopoverContext";
function oe(t) {
  let o4 = (0, import_react.useContext)(ue);
  if (o4 === null) {
    let u3 = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u3, oe), u3;
  }
  return o4;
}
var ie = (0, import_react.createContext)(null);
ie.displayName = "PopoverAPIContext";
function fe(t) {
  let o4 = (0, import_react.useContext)(ie);
  if (o4 === null) {
    let u3 = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u3, fe), u3;
  }
  return o4;
}
var Pe = (0, import_react.createContext)(null);
Pe.displayName = "PopoverGroupContext";
function Ee() {
  return (0, import_react.useContext)(Pe);
}
var re = (0, import_react.createContext)(null);
re.displayName = "PopoverPanelContext";
function Ne() {
  return (0, import_react.useContext)(re);
}
function ke(t, o4) {
  return u(o4.type, Ge, t, o4);
}
var we = "div";
function Ue(t, o4) {
  var B;
  let { __demoMode: u3 = false, ...M2 } = t, x = (0, import_react.useRef)(null), n3 = y2(o4, T3((l2) => {
    x.current = l2;
  })), e = (0, import_react.useRef)([]), c = (0, import_react.useReducer)(ke, { __demoMode: u3, popoverState: u3 ? 0 : 1, buttons: e, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react.createRef)(), afterPanelSentinel: (0, import_react.createRef)() }), [{ popoverState: f3, button: s5, buttonId: I3, panel: a, panelId: v, beforePanelSentinel: y4, afterPanelSentinel: A }, P] = c, p = n((B = x.current) != null ? B : s5), E2 = (0, import_react.useMemo)(() => {
    if (!s5 || !a)
      return false;
    for (let W of document.querySelectorAll("body > *"))
      if (Number(W == null ? void 0 : W.contains(s5)) ^ Number(W == null ? void 0 : W.contains(a)))
        return true;
    let l2 = f(), S = l2.indexOf(s5), q = (S + l2.length - 1) % l2.length, U2 = (S + 1) % l2.length, z = l2[q], be = l2[U2];
    return !a.contains(z) && !a.contains(be);
  }, [s5, a]), F = s(I3), D = s(v), _ = (0, import_react.useMemo)(() => ({ buttonId: F, panelId: D, close: () => P({ type: 1 }) }), [F, D, P]), O3 = Ee(), L = O3 == null ? void 0 : O3.registerPopover, $ = o(() => {
    var l2;
    return (l2 = O3 == null ? void 0 : O3.isFocusWithinPopoverGroup()) != null ? l2 : (p == null ? void 0 : p.activeElement) && ((s5 == null ? void 0 : s5.contains(p.activeElement)) || (a == null ? void 0 : a.contains(p.activeElement)));
  });
  (0, import_react.useEffect)(() => L == null ? void 0 : L(_), [L, _]);
  let [i, b] = ee(), T4 = N2({ mainTreeNodeRef: O3 == null ? void 0 : O3.mainTreeNodeRef, portals: i, defaultContainers: [s5, a] });
  E(p == null ? void 0 : p.defaultView, "focus", (l2) => {
    var S, q, U2, z;
    l2.target !== window && l2.target instanceof HTMLElement && f3 === 0 && ($() || s5 && a && (T4.contains(l2.target) || (q = (S = y4.current) == null ? void 0 : S.contains) != null && q.call(S, l2.target) || (z = (U2 = A.current) == null ? void 0 : U2.contains) != null && z.call(U2, l2.target) || P({ type: 1 })));
  }, true), y(T4.resolveContainers, (l2, S) => {
    P({ type: 1 }), h(S, T.Loose) || (l2.preventDefault(), s5 == null || s5.focus());
  }, f3 === 0);
  let d2 = o((l2) => {
    P({ type: 1 });
    let S = (() => l2 ? l2 instanceof HTMLElement ? l2 : "current" in l2 && l2.current instanceof HTMLElement ? l2.current : s5 : s5)();
    S == null || S.focus();
  }), r2 = (0, import_react.useMemo)(() => ({ close: d2, isPortalled: E2 }), [d2, E2]), m = (0, import_react.useMemo)(() => ({ open: f3 === 0, close: d2 }), [f3, d2]), g = { ref: n3 };
  return import_react.default.createElement(re.Provider, { value: null }, import_react.default.createElement(ue.Provider, { value: c }, import_react.default.createElement(ie.Provider, { value: r2 }, import_react.default.createElement(s3, { value: u(f3, { [0]: d.Open, [1]: d.Closed }) }, import_react.default.createElement(b, null, C({ ourProps: g, theirProps: M2, slot: m, defaultTag: we, name: "Popover" }), import_react.default.createElement(T4.MainTreeNode, null))))));
}
var We = "button";
function Ke(t, o4) {
  let u3 = I(), { id: M2 = `headlessui-popover-button-${u3}`, ...x } = t, [n3, e] = oe("Popover.Button"), { isPortalled: c } = fe("Popover.Button"), f3 = (0, import_react.useRef)(null), s5 = `headlessui-focus-sentinel-${I()}`, I3 = Ee(), a = I3 == null ? void 0 : I3.closeOthers, y4 = Ne() !== null;
  (0, import_react.useEffect)(() => {
    if (!y4)
      return e({ type: 3, buttonId: M2 }), () => {
        e({ type: 3, buttonId: null });
      };
  }, [y4, M2, e]);
  let [A] = (0, import_react.useState)(() => Symbol()), P = y2(f3, o4, y4 ? null : (r2) => {
    if (r2)
      n3.buttons.current.push(A);
    else {
      let m = n3.buttons.current.indexOf(A);
      m !== -1 && n3.buttons.current.splice(m, 1);
    }
    n3.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), r2 && e({ type: 2, button: r2 });
  }), p = y2(f3, o4), E2 = n(f3), F = o((r2) => {
    var m, g, B;
    if (y4) {
      if (n3.popoverState === 1)
        return;
      switch (r2.key) {
        case o3.Space:
        case o3.Enter:
          r2.preventDefault(), (g = (m = r2.target).click) == null || g.call(m), e({ type: 1 }), (B = n3.button) == null || B.focus();
          break;
      }
    } else
      switch (r2.key) {
        case o3.Space:
        case o3.Enter:
          r2.preventDefault(), r2.stopPropagation(), n3.popoverState === 1 && (a == null || a(n3.buttonId)), e({ type: 0 });
          break;
        case o3.Escape:
          if (n3.popoverState !== 0)
            return a == null ? void 0 : a(n3.buttonId);
          if (!f3.current || E2 != null && E2.activeElement && !f3.current.contains(E2.activeElement))
            return;
          r2.preventDefault(), r2.stopPropagation(), e({ type: 1 });
          break;
      }
  }), D = o((r2) => {
    y4 || r2.key === o3.Space && r2.preventDefault();
  }), _ = o((r2) => {
    var m, g;
    r(r2.currentTarget) || t.disabled || (y4 ? (e({ type: 1 }), (m = n3.button) == null || m.focus()) : (r2.preventDefault(), r2.stopPropagation(), n3.popoverState === 1 && (a == null || a(n3.buttonId)), e({ type: 0 }), (g = n3.button) == null || g.focus()));
  }), O3 = o((r2) => {
    r2.preventDefault(), r2.stopPropagation();
  }), L = n3.popoverState === 0, $ = (0, import_react.useMemo)(() => ({ open: L }), [L]), i = T2(t, f3), b = y4 ? { ref: p, type: i, onKeyDown: F, onClick: _ } : { ref: P, id: n3.buttonId, type: i, "aria-expanded": n3.popoverState === 0, "aria-controls": n3.panel ? n3.panelId : void 0, onKeyDown: F, onKeyUp: D, onClick: _, onMouseDown: O3 }, T4 = n2(), d2 = o(() => {
    let r2 = n3.panel;
    if (!r2)
      return;
    function m() {
      u(T4.current, { [s4.Forwards]: () => O(r2, M.First), [s4.Backwards]: () => O(r2, M.Last) }) === N.Error && O(f().filter((B) => B.dataset.headlessuiFocusGuard !== "true"), u(T4.current, { [s4.Forwards]: M.Next, [s4.Backwards]: M.Previous }), { relativeTo: n3.button });
    }
    m();
  });
  return import_react.default.createElement(import_react.default.Fragment, null, C({ ourProps: b, theirProps: x, slot: $, defaultTag: We, name: "Popover.Button" }), L && !y4 && c && import_react.default.createElement(f2, { id: s5, features: s2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: d2 }));
}
var je = "div";
var Ve = O2.RenderStrategy | O2.Static;
function $e(t, o4) {
  let u3 = I(), { id: M2 = `headlessui-popover-overlay-${u3}`, ...x } = t, [{ popoverState: n3 }, e] = oe("Popover.Overlay"), c = y2(o4), f3 = u2(), s5 = (() => f3 !== null ? (f3 & d.Open) === d.Open : n3 === 0)(), I3 = o((y4) => {
    if (r(y4.currentTarget))
      return y4.preventDefault();
    e({ type: 1 });
  }), a = (0, import_react.useMemo)(() => ({ open: n3 === 0 }), [n3]);
  return C({ ourProps: { ref: c, id: M2, "aria-hidden": true, onClick: I3 }, theirProps: x, slot: a, defaultTag: je, features: Ve, visible: s5, name: "Popover.Overlay" });
}
var Je = "div";
var Xe = O2.RenderStrategy | O2.Static;
function Ye(t, o4) {
  let u3 = I(), { id: M2 = `headlessui-popover-panel-${u3}`, focus: x = false, ...n3 } = t, [e, c] = oe("Popover.Panel"), { close: f3, isPortalled: s5 } = fe("Popover.Panel"), I3 = `headlessui-focus-sentinel-before-${I()}`, a = `headlessui-focus-sentinel-after-${I()}`, v = (0, import_react.useRef)(null), y4 = y2(v, o4, (i) => {
    c({ type: 4, panel: i });
  }), A = n(v), P = I2();
  l(() => (c({ type: 5, panelId: M2 }), () => {
    c({ type: 5, panelId: null });
  }), [M2, c]);
  let p = u2(), E2 = (() => p !== null ? (p & d.Open) === d.Open : e.popoverState === 0)(), F = o((i) => {
    var b;
    switch (i.key) {
      case o3.Escape:
        if (e.popoverState !== 0 || !v.current || A != null && A.activeElement && !v.current.contains(A.activeElement))
          return;
        i.preventDefault(), i.stopPropagation(), c({ type: 1 }), (b = e.button) == null || b.focus();
        break;
    }
  });
  (0, import_react.useEffect)(() => {
    var i;
    t.static || e.popoverState === 1 && ((i = t.unmount) == null || i) && c({ type: 4, panel: null });
  }, [e.popoverState, t.unmount, t.static, c]), (0, import_react.useEffect)(() => {
    if (e.__demoMode || !x || e.popoverState !== 0 || !v.current)
      return;
    let i = A == null ? void 0 : A.activeElement;
    v.current.contains(i) || O(v.current, M.First);
  }, [e.__demoMode, x, v, e.popoverState]);
  let D = (0, import_react.useMemo)(() => ({ open: e.popoverState === 0, close: f3 }), [e, f3]), _ = { ref: y4, id: M2, onKeyDown: F, onBlur: x && e.popoverState === 0 ? (i) => {
    var T4, d2, r2, m, g;
    let b = i.relatedTarget;
    b && v.current && ((T4 = v.current) != null && T4.contains(b) || (c({ type: 1 }), ((r2 = (d2 = e.beforePanelSentinel.current) == null ? void 0 : d2.contains) != null && r2.call(d2, b) || (g = (m = e.afterPanelSentinel.current) == null ? void 0 : m.contains) != null && g.call(m, b)) && b.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1 }, O3 = n2(), L = o(() => {
    let i = v.current;
    if (!i)
      return;
    function b() {
      u(O3.current, { [s4.Forwards]: () => {
        var d2;
        O(i, M.First) === N.Error && ((d2 = e.afterPanelSentinel.current) == null || d2.focus());
      }, [s4.Backwards]: () => {
        var T4;
        (T4 = e.button) == null || T4.focus({ preventScroll: true });
      } });
    }
    b();
  }), $ = o(() => {
    let i = v.current;
    if (!i)
      return;
    function b() {
      u(O3.current, { [s4.Forwards]: () => {
        var B;
        if (!e.button)
          return;
        let T4 = f(), d2 = T4.indexOf(e.button), r2 = T4.slice(0, d2 + 1), g = [...T4.slice(d2 + 1), ...r2];
        for (let l2 of g.slice())
          if (l2.dataset.headlessuiFocusGuard === "true" || (B = e.panel) != null && B.contains(l2)) {
            let S = g.indexOf(l2);
            S !== -1 && g.splice(S, 1);
          }
        O(g, M.First, { sorted: false });
      }, [s4.Backwards]: () => {
        var d2;
        O(i, M.Previous) === N.Error && ((d2 = e.button) == null || d2.focus());
      } });
    }
    b();
  });
  return import_react.default.createElement(re.Provider, { value: M2 }, E2 && s5 && import_react.default.createElement(f2, { id: I3, ref: e.beforePanelSentinel, features: s2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: L }), C({ mergeRefs: P, ourProps: _, theirProps: n3, slot: D, defaultTag: Je, features: Xe, visible: E2, name: "Popover.Panel" }), E2 && s5 && import_react.default.createElement(f2, { id: a, ref: e.afterPanelSentinel, features: s2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: $ }));
}
var qe2 = "div";
function ze(t, o4) {
  let u3 = (0, import_react.useRef)(null), M2 = y2(u3, o4), [x, n3] = (0, import_react.useState)([]), e = y3(), c = o((P) => {
    n3((p) => {
      let E2 = p.indexOf(P);
      if (E2 !== -1) {
        let F = p.slice();
        return F.splice(E2, 1), F;
      }
      return p;
    });
  }), f3 = o((P) => (n3((p) => [...p, P]), () => c(P))), s5 = o(() => {
    var E2;
    let P = o2(u3);
    if (!P)
      return false;
    let p = P.activeElement;
    return (E2 = u3.current) != null && E2.contains(p) ? true : x.some((F) => {
      var D, _;
      return ((D = P.getElementById(F.buttonId.current)) == null ? void 0 : D.contains(p)) || ((_ = P.getElementById(F.panelId.current)) == null ? void 0 : _.contains(p));
    });
  }), I3 = o((P) => {
    for (let p of x)
      p.buttonId.current !== P && p.close();
  }), a = (0, import_react.useMemo)(() => ({ registerPopover: f3, unregisterPopover: c, isFocusWithinPopoverGroup: s5, closeOthers: I3, mainTreeNodeRef: e.mainTreeNodeRef }), [f3, c, s5, I3, e.mainTreeNodeRef]), v = (0, import_react.useMemo)(() => ({}), []), y4 = t, A = { ref: M2 };
  return import_react.default.createElement(Pe.Provider, { value: a }, C({ ourProps: A, theirProps: y4, slot: v, defaultTag: qe2, name: "Popover.Group" }), import_react.default.createElement(e.MainTreeNode, null));
}
var Qe = U(Ue);
var Ze = U(Ke);
var et = U($e);
var tt = U(Ye);
var ot = U(ze);
var Ct = Object.assign(Qe, { Button: Ze, Overlay: et, Panel: tt, Group: ot });

// app/routes/snop.demand.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.demand.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.demand.jsx"
  );
  import.meta.hot.lastModified = "1708448308203.9727";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var items = [{
  id: 1,
  name: "Review",
  description: "Conduct periodic (month/quarter/year) performance review of key business KPIs",
  to: `review`
}, {
  id: 2,
  name: "Meeting",
  description: "Conduct daily/weekly data driven meetings and create plan of action ",
  to: `meeting`
}];
var filters = [{
  id: "year",
  name: "Year",
  options: [{
    value: "new-arrivals",
    label: "All New Arrivals",
    checked: false
  }, {
    value: "tees",
    label: "Tees",
    checked: false
  }, {
    value: "all",
    label: "All",
    checked: true
  }]
}, {
  id: "region",
  name: "Region",
  options: [{
    value: "s",
    label: "S",
    checked: false
  }, {
    value: "m",
    label: "M",
    checked: false
  }, {
    value: "l",
    label: "L",
    checked: false
  }]
}, {
  id: "products",
  name: "Products",
  options: [{
    value: "all",
    label: "All",
    checked: false
  }, {
    value: "beige",
    label: "Beige",
    checked: false
  }, {
    value: "blue",
    label: "Blue",
    checked: false
  }]
}];
function DemandRoute() {
  _s();
  const [mode, setMode] = (0, import_react2.useState)(items[0]);
  const reviewTabs = ["Month", "Quarter", "Year"];
  const [reviewIndex] = (0, import_react2.useState)(0);
  const meetingTabs = ["Daily", "Weekly"];
  const [meetingIndex] = (0, import_react2.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Demand Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 101,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(It, { value: mode, onChange: setMode, children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckIcon_default, { className: "-ml-0.5 h-5 w-5 ", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 114,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold", children: mode.name }, void 0, false, {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 115,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 113,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(It.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 118,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 117,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.demand.jsx",
          lineNumber: 112,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe, { show: open, as: import_react2.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(It.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(It.Option, { className: ({
          active
        }) => classNames(active ? "bg-rose-500 text-white" : "text-gray-900", "cursor-default select-none p-4 text-sm"), value: option, children: ({
          selected,
          active
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: selected ? "font-semibold" : "font-normal", children: option.name }, void 0, false, {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 132,
              columnNumber: 37
            }, this),
            selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: active ? "text-white" : "text-rose-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 136,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 135,
              columnNumber: 49
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 131,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: classNames(active ? "text-rose-200" : "text-gray-500", "mt-2"), children: option.description }, void 0, false, {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 139,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.demand.jsx",
          lineNumber: 130,
          columnNumber: 31
        }, this) }, option.name, false, {
          fileName: "app/routes/snop.demand.jsx",
          lineNumber: 124,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.demand.jsx",
          lineNumber: 123,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.demand.jsx",
          lineNumber: 122,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 111,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 110,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 107,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 106,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-4 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { "aria-labelledby": "filter-heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 rounded-lg border bg-white shadow-sm md:flex md:items-center md:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-64 flex items-center px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ct.Group, { className: "-mx-4 flex items-center divide-x divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-4 inline-flex", children: "Filters" }, void 0, false, {
          fileName: "app/routes/snop.demand.jsx",
          lineNumber: 161,
          columnNumber: 19
        }, this),
        filters.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ct, { className: "relative inline-block rounded-lg  text-gray-700 hover:bg-rose-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ct.Button, { className: "group inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-400 hover:text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: section.name }, void 0, false, {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 164,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon_default, { className: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 ", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 166,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 163,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe, { as: import_react2.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ct.Panel, { className: "absolute z-10 mt-2 rounded-md bg-white p-4 shadow-2xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-4", children: section.options.map((option, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: `filter-${section.id}-${optionIdx}`, name: `${section.id}[]`, defaultValue: option.value, type: "checkbox", defaultChecked: option.checked, className: "h-4 w-4 rounded border-gray-300 text-indigo-600 " }, void 0, false, {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 173,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: `filter-${section.id}-${optionIdx}`, className: "ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:text-white", children: option.label }, void 0, false, {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 174,
              columnNumber: 33
            }, this)
          ] }, option.value, true, {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 172,
            columnNumber: 73
          }, this)) }, void 0, false, {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 171,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 170,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 169,
            columnNumber: 23
          }, this)
        ] }, section.name, true, {
          fileName: "app/routes/snop.demand.jsx",
          lineNumber: 162,
          columnNumber: 43
        }, this))
      ] }, void 0, true, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 160,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 159,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 158,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " m-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-full border bg-gray-200 p-2 hover:bg-gray-100 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FunnelIcon_default, { className: "h-4 w-4 text-gray-500", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 187,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 186,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 185,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 157,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 156,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardLayout, { mode: mode.name === "Review" ? reviewTabs : meetingTabs, tab: mode.name === "Review" ? reviewIndex : meetingIndex, kpiData: kpiService_m }, void 0, false, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 194,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 193,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.demand.jsx",
    lineNumber: 97,
    columnNumber: 10
  }, this);
}
_s(DemandRoute, "X+DKkRvoCu4tJfg+G1R0Qr96X70=");
_c = DemandRoute;
var _c;
$RefreshReg$(_c, "DemandRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DemandRoute as default
};
//# sourceMappingURL=/build/routes/snop.demand-6NGF6TQ2.js.map
