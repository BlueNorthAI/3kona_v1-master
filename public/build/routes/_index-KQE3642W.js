import {
  logo_default
} from "/build/_shared/chunk-2VZUH2EY.js";
import {
  E,
  N as N2,
  c,
  ee,
  l as l3,
  n,
  n2,
  s as s2,
  te
} from "/build/_shared/chunk-EC4QPT3H.js";
import {
  clsx_default
} from "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  p,
  t as t2,
  y as y2
} from "/build/_shared/chunk-EL4ICYCD.js";
import {
  Bars3Icon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-DFGEPVYF.js";
import {
  d,
  r,
  u as u2
} from "/build/_shared/chunk-X4JIH5W5.js";
import {
  M,
  N,
  O,
  f2 as f,
  f3 as f2,
  o as o2,
  s,
  t,
  y
} from "/build/_shared/chunk-ZHRRJYGJ.js";
import {
  C,
  I,
  O as O2,
  U,
  l,
  l2,
  o,
  o3,
  u,
  y as y3
} from "/build/_shared/chunk-JKKPAHGM.js";
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

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react = __toESM(require_react(), 1);
function m(u7, t7) {
  let e2 = (0, import_react.useRef)([]), r4 = o(u7);
  (0, import_react.useEffect)(() => {
    let o4 = [...e2.current];
    for (let [n3, a5] of t7.entries())
      if (e2.current[n3] !== a5) {
        let l7 = r4(t7, o4);
        return e2.current = t7, l7;
      }
  }, [r4, ...t7]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t3(n3) {
  function e2() {
    document.readyState !== "loading" && (n3(), document.removeEventListener("DOMContentLoaded", e2));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e2), e2());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var t4 = [];
t3(() => {
  function e2(n3) {
    n3.target instanceof HTMLElement && n3.target !== document.body && t4[0] !== n3.target && (t4.unshift(n3.target), t4 = t4.filter((r4) => r4 != null && r4.isConnected), t4.splice(10));
  }
  window.addEventListener("click", e2, { capture: true }), window.addEventListener("mousedown", e2, { capture: true }), window.addEventListener("focus", e2, { capture: true }), document.body.addEventListener("click", e2, { capture: true }), document.body.addEventListener("mousedown", e2, { capture: true }), document.body.addEventListener("focus", e2, { capture: true });
});

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react2 = __toESM(require_react(), 1);
function P(t7) {
  if (!t7)
    return /* @__PURE__ */ new Set();
  if (typeof t7 == "function")
    return new Set(t7());
  let n3 = /* @__PURE__ */ new Set();
  for (let e2 of t7.current)
    e2.current instanceof HTMLElement && n3.add(e2.current);
  return n3;
}
var X = "div";
var _ = ((r4) => (r4[r4.None = 1] = "None", r4[r4.InitialFocus = 2] = "InitialFocus", r4[r4.TabLock = 4] = "TabLock", r4[r4.FocusLock = 8] = "FocusLock", r4[r4.RestoreFocus = 16] = "RestoreFocus", r4[r4.All = 30] = "All", r4))(_ || {});
function z(t7, n3) {
  let e2 = (0, import_react2.useRef)(null), o4 = y3(e2, n3), { initialFocus: l7, containers: c5, features: r4 = 30, ...s6 } = t7;
  l2() || (r4 = 1);
  let i2 = n(e2);
  Y({ ownerDocument: i2 }, Boolean(r4 & 16));
  let u7 = Z({ ownerDocument: i2, container: e2, initialFocus: l7 }, Boolean(r4 & 2));
  $({ ownerDocument: i2, container: e2, containers: c5, previousActiveElement: u7 }, Boolean(r4 & 8));
  let y6 = n2(), R = o((a5) => {
    let m5 = e2.current;
    if (!m5)
      return;
    ((B) => B())(() => {
      u(y6.current, { [s2.Forwards]: () => {
        O(m5, M.First, { skipElements: [a5.relatedTarget] });
      }, [s2.Backwards]: () => {
        O(m5, M.Last, { skipElements: [a5.relatedTarget] });
      } });
    });
  }), h3 = p(), H2 = (0, import_react2.useRef)(false), j = { ref: o4, onKeyDown(a5) {
    a5.key == "Tab" && (H2.current = true, h3.requestAnimationFrame(() => {
      H2.current = false;
    }));
  }, onBlur(a5) {
    let m5 = P(c5);
    e2.current instanceof HTMLElement && m5.add(e2.current);
    let T2 = a5.relatedTarget;
    T2 instanceof HTMLElement && T2.dataset.headlessuiFocusGuard !== "true" && (S(m5, T2) || (H2.current ? O(e2.current, u(y6.current, { [s2.Forwards]: () => M.Next, [s2.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: a5.target }) : a5.target instanceof HTMLElement && y(a5.target)));
  } };
  return import_react2.default.createElement(import_react2.default.Fragment, null, Boolean(r4 & 4) && import_react2.default.createElement(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R, features: s.Focusable }), C({ ourProps: j, theirProps: s6, defaultTag: X, name: "FocusTrap" }), Boolean(r4 & 4) && import_react2.default.createElement(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R, features: s.Focusable }));
}
var D = U(z);
var de = Object.assign(D, { features: _ });
function Q(t7 = true) {
  let n3 = (0, import_react2.useRef)(t4.slice());
  return m(([e2], [o4]) => {
    o4 === true && e2 === false && t(() => {
      n3.current.splice(0);
    }), o4 === false && e2 === true && (n3.current = t4.slice());
  }, [t7, t4, n3]), o(() => {
    var e2;
    return (e2 = n3.current.find((o4) => o4 != null && o4.isConnected)) != null ? e2 : null;
  });
}
function Y({ ownerDocument: t7 }, n3) {
  let e2 = Q(n3);
  m(() => {
    n3 || (t7 == null ? void 0 : t7.activeElement) === (t7 == null ? void 0 : t7.body) && y(e2());
  }, [n3]), c(() => {
    n3 && y(e2());
  });
}
function Z({ ownerDocument: t7, container: n3, initialFocus: e2 }, o4) {
  let l7 = (0, import_react2.useRef)(null), c5 = f2();
  return m(() => {
    if (!o4)
      return;
    let r4 = n3.current;
    r4 && t(() => {
      if (!c5.current)
        return;
      let s6 = t7 == null ? void 0 : t7.activeElement;
      if (e2 != null && e2.current) {
        if ((e2 == null ? void 0 : e2.current) === s6) {
          l7.current = s6;
          return;
        }
      } else if (r4.contains(s6)) {
        l7.current = s6;
        return;
      }
      e2 != null && e2.current ? y(e2.current) : O(r4, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l7.current = t7 == null ? void 0 : t7.activeElement;
    });
  }, [o4]), l7;
}
function $({ ownerDocument: t7, container: n3, containers: e2, previousActiveElement: o4 }, l7) {
  let c5 = f2();
  E(t7 == null ? void 0 : t7.defaultView, "focus", (r4) => {
    if (!l7 || !c5.current)
      return;
    let s6 = P(e2);
    n3.current instanceof HTMLElement && s6.add(n3.current);
    let i2 = o4.current;
    if (!i2)
      return;
    let u7 = r4.target;
    u7 && u7 instanceof HTMLElement ? S(s6, u7) ? (o4.current = u7, y(u7)) : (r4.preventDefault(), r4.stopPropagation(), y(i2)) : y(o4.current);
  }, true);
}
function S(t7, n3) {
  for (let e2 of t7)
    if (e2.contains(n3))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l4 = __toESM(require_react(), 1);
function i(e2, t7) {
  return e2 === t7 && (e2 !== 0 || 1 / e2 === 1 / t7) || e2 !== e2 && t7 !== t7;
}
var d3 = typeof Object.is == "function" ? Object.is : i;
var { useState: u3, useEffect: h, useLayoutEffect: f4, useDebugValue: p2 } = l4;
function y4(e2, t7, c5) {
  const a5 = t7(), [{ inst: n3 }, o4] = u3({ inst: { value: a5, getSnapshot: t7 } });
  return f4(() => {
    n3.value = a5, n3.getSnapshot = t7, r2(n3) && o4({ inst: n3 });
  }, [e2, a5, t7]), h(() => (r2(n3) && o4({ inst: n3 }), e2(() => {
    r2(n3) && o4({ inst: n3 });
  })), [e2]), p2(a5), a5;
}
function r2(e2) {
  const t7 = e2.getSnapshot, c5 = e2.value;
  try {
    const a5 = t7();
    return !d3(c5, a5);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t5(r4, e2, n3) {
  return e2();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r3 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s4 = !r3;
var c2 = s4 ? t5 : y4;
var a = "useSyncExternalStore" in e ? ((n3) => n3.useSyncExternalStore)(e) : c2;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S2(t7) {
  return a(t7.subscribe, t7.getSnapshot, t7.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a2(o4, r4) {
  let t7 = o4(), n3 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t7;
  }, subscribe(e2) {
    return n3.add(e2), () => n3.delete(e2);
  }, dispatch(e2, ...s6) {
    let i2 = r4[e2].call(t7, ...s6);
    i2 && (t7 = i2, n3.forEach((c5) => c5()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c3() {
  let o4;
  return { before({ doc: e2 }) {
    var l7;
    let n3 = e2.documentElement;
    o4 = ((l7 = e2.defaultView) != null ? l7 : window).innerWidth - n3.clientWidth;
  }, after({ doc: e2, d: n3 }) {
    let t7 = e2.documentElement, l7 = t7.clientWidth - t7.offsetWidth, r4 = o4 - l7;
    n3.style(t7, "paddingRight", `${r4}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function d4() {
  return t2() ? { before({ doc: r4, d: l7, meta: c5 }) {
    function o4(a5) {
      return c5.containers.flatMap((n3) => n3()).some((n3) => n3.contains(a5));
    }
    l7.microTask(() => {
      var s6;
      if (window.getComputedStyle(r4.documentElement).scrollBehavior !== "auto") {
        let t7 = o2();
        t7.style(r4.documentElement, "scrollBehavior", "auto"), l7.add(() => l7.microTask(() => t7.dispose()));
      }
      let a5 = (s6 = window.scrollY) != null ? s6 : window.pageYOffset, n3 = null;
      l7.addEventListener(r4, "click", (t7) => {
        if (t7.target instanceof HTMLElement)
          try {
            let e2 = t7.target.closest("a");
            if (!e2)
              return;
            let { hash: f6 } = new URL(e2.href), i2 = r4.querySelector(f6);
            i2 && !o4(i2) && (n3 = i2);
          } catch {
          }
      }, true), l7.addEventListener(r4, "touchstart", (t7) => {
        if (t7.target instanceof HTMLElement)
          if (o4(t7.target)) {
            let e2 = t7.target;
            for (; e2.parentElement && o4(e2.parentElement); )
              e2 = e2.parentElement;
            l7.style(e2, "overscrollBehavior", "contain");
          } else
            l7.style(t7.target, "touchAction", "none");
      }), l7.addEventListener(r4, "touchmove", (t7) => {
        if (t7.target instanceof HTMLElement)
          if (o4(t7.target)) {
            let e2 = t7.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); )
              e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t7.preventDefault();
          } else
            t7.preventDefault();
      }, { passive: false }), l7.add(() => {
        var e2;
        let t7 = (e2 = window.scrollY) != null ? e2 : window.pageYOffset;
        a5 !== t7 && window.scrollTo(0, a5), n3 && n3.isConnected && (n3.scrollIntoView({ block: "nearest" }), n3 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l5() {
  return { before({ doc: e2, d: o4 }) {
    o4.style(e2.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m2(e2) {
  let n3 = {};
  for (let t7 of e2)
    Object.assign(n3, t7(n3));
  return n3;
}
var a3 = a2(() => /* @__PURE__ */ new Map(), { PUSH(e2, n3) {
  var o4;
  let t7 = (o4 = this.get(e2)) != null ? o4 : { doc: e2, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t7.count++, t7.meta.add(n3), this.set(e2, t7), this;
}, POP(e2, n3) {
  let t7 = this.get(e2);
  return t7 && (t7.count--, t7.meta.delete(n3)), this;
}, SCROLL_PREVENT({ doc: e2, d: n3, meta: t7 }) {
  let o4 = { doc: e2, d: n3, meta: m2(t7) }, c5 = [d4(), c3(), l5()];
  c5.forEach(({ before: r4 }) => r4 == null ? void 0 : r4(o4)), c5.forEach(({ after: r4 }) => r4 == null ? void 0 : r4(o4));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a3.subscribe(() => {
  let e2 = a3.getSnapshot(), n3 = /* @__PURE__ */ new Map();
  for (let [t7] of e2)
    n3.set(t7, t7.documentElement.style.overflow);
  for (let t7 of e2.values()) {
    let o4 = n3.get(t7.doc) === "hidden", c5 = t7.count !== 0;
    (c5 && !o4 || !c5 && o4) && a3.dispatch(t7.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t7), t7.count === 0 && a3.dispatch("TEARDOWN", t7);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p3(e2, r4, n3) {
  let f6 = S2(a3), o4 = e2 ? f6.get(e2) : void 0, i2 = o4 ? o4.count > 0 : false;
  return l(() => {
    if (!(!e2 || !r4))
      return a3.dispatch("PUSH", e2, n3), () => a3.dispatch("POP", e2, n3);
  }, [r4, e2]), i2;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u4 = /* @__PURE__ */ new Map();
var t6 = /* @__PURE__ */ new Map();
function b(r4, l7 = true) {
  l(() => {
    var o4;
    if (!l7)
      return;
    let e2 = typeof r4 == "function" ? r4() : r4.current;
    if (!e2)
      return;
    function a5() {
      var d7;
      if (!e2)
        return;
      let i2 = (d7 = t6.get(e2)) != null ? d7 : 1;
      if (i2 === 1 ? t6.delete(e2) : t6.set(e2, i2 - 1), i2 !== 1)
        return;
      let n3 = u4.get(e2);
      n3 && (n3["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n3["aria-hidden"]), e2.inert = n3.inert, u4.delete(e2));
    }
    let f6 = (o4 = t6.get(e2)) != null ? o4 : 0;
    return t6.set(e2, f6 + 1), f6 !== 0 || (u4.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true), a5;
  }, [r4, l7]);
}

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react3 = __toESM(require_react(), 1);
var a4 = (0, import_react3.createContext)(() => {
});
a4.displayName = "StackContext";
var s5 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s5 || {});
function x() {
  return (0, import_react3.useContext)(a4);
}
function b2({ children: i2, onUpdate: r4, type: e2, element: n3, enabled: u7 }) {
  let l7 = x(), o4 = o((...t7) => {
    r4 == null || r4(...t7), l7(...t7);
  });
  return l(() => {
    let t7 = u7 === void 0 || u7 === true;
    return t7 && o4(0, e2, n3), () => {
      t7 && o4(1, e2, n3);
    };
  }, [o4, e2, n3, u7]), import_react3.default.createElement(a4.Provider, { value: o4 }, i2);
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react4 = __toESM(require_react(), 1);
var d6 = (0, import_react4.createContext)(null);
function f5() {
  let r4 = (0, import_react4.useContext)(d6);
  if (r4 === null) {
    let t7 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t7, f5), t7;
  }
  return r4;
}
function w() {
  let [r4, t7] = (0, import_react4.useState)([]);
  return [r4.length > 0 ? r4.join(" ") : void 0, (0, import_react4.useMemo)(() => function(e2) {
    let i2 = o((s6) => (t7((o4) => [...o4, s6]), () => t7((o4) => {
      let p4 = o4.slice(), c5 = p4.indexOf(s6);
      return c5 !== -1 && p4.splice(c5, 1), p4;
    }))), n3 = (0, import_react4.useMemo)(() => ({ register: i2, slot: e2.slot, name: e2.name, props: e2.props }), [i2, e2.slot, e2.name, e2.props]);
    return import_react4.default.createElement(d6.Provider, { value: n3 }, e2.children);
  }, [t7])];
}
var I2 = "p";
function S3(r4, t7) {
  let a5 = I(), { id: e2 = `headlessui-description-${a5}`, ...i2 } = r4, n3 = f5(), s6 = y3(t7);
  l(() => n3.register(e2), [e2, n3.register]);
  let o4 = { ref: s6, ...n3.props, id: e2 };
  return C({ ourProps: o4, theirProps: i2, slot: n3.slot || {}, defaultTag: I2, name: n3.name || "Description" });
}
var h2 = U(S3);
var G = Object.assign(h2, {});

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Me = ((r4) => (r4[r4.Open = 0] = "Open", r4[r4.Closed = 1] = "Closed", r4))(Me || {});
var we = ((e2) => (e2[e2.SetTitleId = 0] = "SetTitleId", e2))(we || {});
var He = { [0](t7, e2) {
  return t7.titleId === e2.id ? t7 : { ...t7, titleId: e2.id };
} };
var I3 = (0, import_react5.createContext)(null);
I3.displayName = "DialogContext";
function b3(t7) {
  let e2 = (0, import_react5.useContext)(I3);
  if (e2 === null) {
    let r4 = new Error(`<${t7} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r4, b3), r4;
  }
  return e2;
}
function Be(t7, e2, r4 = () => [document.body]) {
  p3(t7, e2, (i2) => {
    var n3;
    return { containers: [...(n3 = i2.containers) != null ? n3 : [], r4] };
  });
}
function Ge(t7, e2) {
  return u(e2.type, He, t7, e2);
}
var Ne = "div";
var Ue = O2.RenderStrategy | O2.Static;
function We(t7, e2) {
  let r4 = I(), { id: i2 = `headlessui-dialog-${r4}`, open: n3, onClose: l7, initialFocus: s6, role: a5 = "dialog", __demoMode: T2 = false, ...m5 } = t7, [M2, f6] = (0, import_react5.useState)(0), U2 = (0, import_react5.useRef)(false);
  a5 = function() {
    return a5 === "dialog" || a5 === "alertdialog" ? a5 : (U2.current || (U2.current = true, console.warn(`Invalid role [${a5}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let E3 = u2();
  n3 === void 0 && E3 !== null && (n3 = (E3 & d.Open) === d.Open);
  let D3 = (0, import_react5.useRef)(null), ee2 = y3(D3, e2), g = n(D3), W = t7.hasOwnProperty("open") || E3 !== null, $2 = t7.hasOwnProperty("onClose");
  if (!W && !$2)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!W)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!$2)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n3 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n3}`);
  if (typeof l7 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l7}`);
  let p4 = n3 ? 0 : 1, [h3, te2] = (0, import_react5.useReducer)(Ge, { titleId: null, descriptionId: null, panelRef: (0, import_react5.createRef)() }), P2 = o(() => l7(false)), Y2 = o((o4) => te2({ type: 0, id: o4 })), S4 = l2() ? T2 ? false : p4 === 0 : false, x2 = M2 > 1, j = (0, import_react5.useContext)(I3) !== null, [oe, re] = ee(), ne = { get current() {
    var o4;
    return (o4 = h3.panelRef.current) != null ? o4 : D3.current;
  } }, { resolveContainers: w2, mainTreeNodeRef: L, MainTreeNode: le } = N2({ portals: oe, defaultContainers: [ne] }), ae = x2 ? "parent" : "leaf", J = E3 !== null ? (E3 & d.Closing) === d.Closing : false, ie = (() => j || J ? false : S4)(), se = (0, import_react5.useCallback)(() => {
    var o4, c5;
    return (c5 = Array.from((o4 = g == null ? void 0 : g.querySelectorAll("body > *")) != null ? o4 : []).find((d7) => d7.id === "headlessui-portal-root" ? false : d7.contains(L.current) && d7 instanceof HTMLElement)) != null ? c5 : null;
  }, [L]);
  b(se, ie);
  let pe = (() => x2 ? true : S4)(), de2 = (0, import_react5.useCallback)(() => {
    var o4, c5;
    return (c5 = Array.from((o4 = g == null ? void 0 : g.querySelectorAll("[data-headlessui-portal]")) != null ? o4 : []).find((d7) => d7.contains(L.current) && d7 instanceof HTMLElement)) != null ? c5 : null;
  }, [L]);
  b(de2, pe);
  let ue = (() => !(!S4 || x2))();
  y2(w2, P2, ue);
  let fe = (() => !(x2 || p4 !== 0))();
  E(g == null ? void 0 : g.defaultView, "keydown", (o4) => {
    fe && (o4.defaultPrevented || o4.key === o3.Escape && (o4.preventDefault(), o4.stopPropagation(), P2()));
  });
  let ge = (() => !(J || p4 !== 0 || j))();
  Be(g, ge, w2), (0, import_react5.useEffect)(() => {
    if (p4 !== 0 || !D3.current)
      return;
    let o4 = new ResizeObserver((c5) => {
      for (let d7 of c5) {
        let F = d7.target.getBoundingClientRect();
        F.x === 0 && F.y === 0 && F.width === 0 && F.height === 0 && P2();
      }
    });
    return o4.observe(D3.current), () => o4.disconnect();
  }, [p4, D3, P2]);
  let [Te, ce] = w(), De = (0, import_react5.useMemo)(() => [{ dialogState: p4, close: P2, setTitleId: Y2 }, h3], [p4, h3, P2, Y2]), X2 = (0, import_react5.useMemo)(() => ({ open: p4 === 0 }), [p4]), me = { ref: ee2, id: i2, role: a5, "aria-modal": p4 === 0 ? true : void 0, "aria-labelledby": h3.titleId, "aria-describedby": Te };
  return import_react5.default.createElement(b2, { type: "Dialog", enabled: p4 === 0, element: D3, onUpdate: o((o4, c5) => {
    c5 === "Dialog" && u(o4, { [s5.Add]: () => f6((d7) => d7 + 1), [s5.Remove]: () => f6((d7) => d7 - 1) });
  }) }, import_react5.default.createElement(l3, { force: true }, import_react5.default.createElement(te, null, import_react5.default.createElement(I3.Provider, { value: De }, import_react5.default.createElement(te.Group, { target: D3 }, import_react5.default.createElement(l3, { force: false }, import_react5.default.createElement(ce, { slot: X2, name: "Dialog.Description" }, import_react5.default.createElement(de, { initialFocus: s6, containers: w2, features: S4 ? u(ae, { parent: de.features.RestoreFocus, leaf: de.features.All & ~de.features.FocusLock }) : de.features.None }, import_react5.default.createElement(re, null, C({ ourProps: me, theirProps: m5, slot: X2, defaultTag: Ne, features: Ue, visible: p4 === 0, name: "Dialog" }))))))))), import_react5.default.createElement(le, null));
}
var $e = "div";
function Ye(t7, e2) {
  let r4 = I(), { id: i2 = `headlessui-dialog-overlay-${r4}`, ...n3 } = t7, [{ dialogState: l7, close: s6 }] = b3("Dialog.Overlay"), a5 = y3(e2), T2 = o((f6) => {
    if (f6.target === f6.currentTarget) {
      if (r(f6.currentTarget))
        return f6.preventDefault();
      f6.preventDefault(), f6.stopPropagation(), s6();
    }
  }), m5 = (0, import_react5.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return C({ ourProps: { ref: a5, id: i2, "aria-hidden": true, onClick: T2 }, theirProps: n3, slot: m5, defaultTag: $e, name: "Dialog.Overlay" });
}
var je = "div";
function Je(t7, e2) {
  let r4 = I(), { id: i2 = `headlessui-dialog-backdrop-${r4}`, ...n3 } = t7, [{ dialogState: l7 }, s6] = b3("Dialog.Backdrop"), a5 = y3(e2);
  (0, import_react5.useEffect)(() => {
    if (s6.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s6.panelRef]);
  let T2 = (0, import_react5.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return import_react5.default.createElement(l3, { force: true }, import_react5.default.createElement(te, null, C({ ourProps: { ref: a5, id: i2, "aria-hidden": true }, theirProps: n3, slot: T2, defaultTag: je, name: "Dialog.Backdrop" })));
}
var Xe = "div";
function Ke(t7, e2) {
  let r4 = I(), { id: i2 = `headlessui-dialog-panel-${r4}`, ...n3 } = t7, [{ dialogState: l7 }, s6] = b3("Dialog.Panel"), a5 = y3(e2, s6.panelRef), T2 = (0, import_react5.useMemo)(() => ({ open: l7 === 0 }), [l7]), m5 = o((f6) => {
    f6.stopPropagation();
  });
  return C({ ourProps: { ref: a5, id: i2, onClick: m5 }, theirProps: n3, slot: T2, defaultTag: Xe, name: "Dialog.Panel" });
}
var Ve = "h2";
function qe(t7, e2) {
  let r4 = I(), { id: i2 = `headlessui-dialog-title-${r4}`, ...n3 } = t7, [{ dialogState: l7, setTitleId: s6 }] = b3("Dialog.Title"), a5 = y3(e2);
  (0, import_react5.useEffect)(() => (s6(i2), () => s6(null)), [i2, s6]);
  let T2 = (0, import_react5.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return C({ ourProps: { ref: a5, id: i2 }, theirProps: n3, slot: T2, defaultTag: Ve, name: "Dialog.Title" });
}
var ze = U(We);
var Qe = U(Je);
var Ze = U(Ke);
var et = U(Ye);
var tt = U(qe);
var _t = Object.assign(ze, { Backdrop: Qe, Panel: Ze, Overlay: et, Title: tt, Description: G });

// app/routes/_index.tsx
var import_react9 = __toESM(require_react());

// app/components/HeroBackground.tsx
var import_react6 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\HeroBackground.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\HeroBackground.tsx"
  );
  import.meta.hot.lastModified = "1708448307847.0332";
}
function HeroBackground(props) {
  _s();
  let id = (0, import_react6.useId)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 668 1069", width: 500, height: 800, fill: "none", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("clipPath", { id: `${id}-clip-path`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fill: "#fff", transform: "rotate(-180 334 534.4)", d: "M0 0h668v1068.8H0z" }, void 0, false, {
      fileName: "app/components/HeroBackground.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/HeroBackground.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/HeroBackground.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { opacity: ".4", clipPath: `url(#${id}-clip-path)`, strokeWidth: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { opacity: ".3", d: "M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "83.5", cy: "384.1", r: "10.438", transform: "rotate(-180 83.5 384.1)", fill: "#1E293B", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "83.5", cy: "200.399", r: "10.438", transform: "rotate(-180 83.5 200.399)", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "83.5", cy: "81.412", r: "10.438", transform: "rotate(-180 83.5 81.412)", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "183.699", cy: "375.75", r: "10.438", transform: "rotate(-180 183.699 375.75)", fill: "#1E293B", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "183.699", cy: "563.625", r: "10.438", transform: "rotate(-180 183.699 563.625)", fill: "#1E293B", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "384.1", cy: "651.3", r: "10.438", transform: "rotate(-180 384.1 651.3)", fill: "#1E293B", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "484.301", cy: "574.062", r: "10.438", transform: "rotate(-180 484.301 574.062)", fill: "#0EA5E9", fillOpacity: ".42", stroke: "#0EA5E9" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "384.1", cy: "749.412", r: "10.438", transform: "rotate(-180 384.1 749.412)", fill: "#1E293B", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "384.1", cy: "1027.05", r: "10.438", transform: "rotate(-180 384.1 1027.05)", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "283.9", cy: "924.763", r: "10.438", transform: "rotate(-180 283.9 924.763)", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "183.699", cy: "870.487", r: "10.438", transform: "rotate(-180 183.699 870.487)", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "283.9", cy: "738.975", r: "10.438", transform: "rotate(-180 283.9 738.975)", fill: "#1E293B", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "83.5", cy: "695.138", r: "10.438", transform: "rotate(-180 83.5 695.138)", fill: "#1E293B", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "83.5", cy: "484.3", r: "10.438", transform: "rotate(-180 83.5 484.3)", fill: "#0EA5E9", fillOpacity: ".42", stroke: "#0EA5E9" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "484.301", cy: "432.112", r: "10.438", transform: "rotate(-180 484.301 432.112)", fill: "#1E293B", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "584.5", cy: "432.112", r: "10.438", transform: "rotate(-180 584.5 432.112)", fill: "#1E293B", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "584.5", cy: "642.95", r: "10.438", transform: "rotate(-180 584.5 642.95)", fill: "#1E293B", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "484.301", cy: "851.699", r: "10.438", transform: "rotate(-180 484.301 851.699)", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "384.1", cy: "256.763", r: "10.438", transform: "rotate(-180 384.1 256.763)", stroke: "#334155" }, void 0, false, {
        fileName: "app/components/HeroBackground.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/HeroBackground.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/HeroBackground.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_s(HeroBackground, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
  return [import_react6.useId];
});
_c = HeroBackground;
var _c;
$RefreshReg$(_c, "HeroBackground");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Logo.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Logo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Logo.tsx"
  );
  import.meta.hot.lastModified = "1708448307847.0332";
}
function LogomarkPaths() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "", src: logo_default, alt: "", width: 40, height: 40 }, void 0, false, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c2 = LogomarkPaths;
function Logomark() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LogomarkPaths, {}, void 0, false, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c22 = Logomark;
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center ", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LogomarkPaths, {}, void 0, false, {
      fileName: "app/components/Logo.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "ml-2 flex items-center text-2xl font-bold tracking-wide", children: "BlueNorth AI" }, void 0, false, {
      fileName: "app/components/Logo.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c3 = Logo;
var _c2;
var _c22;
var _c3;
$RefreshReg$(_c2, "LogomarkPaths");
$RefreshReg$(_c22, "Logomark");
$RefreshReg$(_c3, "Logo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1708448308172.7625";
}
function GitHubIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c4 = GitHubIcon;
var navigation = [{
  id: 1,
  name: "Application",
  to: "/snop/optimize"
}, {
  id: 2,
  name: "Features",
  to: "#"
}, {
  id: 3,
  name: "Marketplace",
  to: "#"
}, {
  id: 4,
  name: "Company",
  to: "#"
}];
function Example() {
  _s2();
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react9.useState)(false);
  const [isScrolled, setIsScrolled] = (0, import_react9.useState)(false);
  (0, import_react9.useEffect)(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: clsx_default("fixed  w-full top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-2 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none", isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400", onClick: () => setMobileMenuOpen(true), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative mt-6 z-10 mr-6 flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(_t, { as: "div", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(_t.Panel, { className: "fixed inset-0 z-50 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", className: "-m-1.5 p-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center ", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Logomark, {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 88,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "ml-2 flex items-center  text-base font-bold tracking-wide text-white", children: "BlueNorth AI" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 89,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", className: "-m-2.5 rounded-md p-2.5 text-gray-400", onClick: () => setMobileMenuOpen(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 95,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 96,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/25", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-2 py-6", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: item.to, className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-400/10", children: item.name }, item.id, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 102,
            columnNumber: 45
          }, this)) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 101,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "py-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/join", className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-white hover:bg-gray-400/10", children: "Sign up" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 107,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/login", className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-white hover:bg-gray-400/10", children: "Log in" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 110,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 106,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 100,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 99,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-3 " }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative flex flex-grow basis-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Logo, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden lg:flex lg:gap-x-6 lg:justify-center ml-6", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-gray-600 hover:text-black", children: item.name }, item.id, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 130,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative flex items-center justify-end  md:flex-grow ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden md:mx-2 sm:block md:block lg:block xl:block" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden mx-4 lg:flex lg:justify-end lg:text-base text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/join", className: "font-semibold leading-6 hover:text-black text-gray-500", children: [
            "Sign up ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 171,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 170,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ml-6 inline-flex rounded-md shadow-sm" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 174,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/login", className: "font-semibold leading-6 hover:text-black text-gray-500", children: [
            "Log in ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 176,
              columnNumber: 22
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 175,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "https://github.com", className: "group", "aria-label": "GitHub", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GitHubIcon, { className: "h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative isolate h-full w-full overflow-hidden bg-slate-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden sm:mb-8 sm:flex sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20", children: [
          "Announcing our next round of funding.",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", className: "font-semibold text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 191,
              columnNumber: 19
            }, this),
            "Read more ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 192,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 190,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 188,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative z-10 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-6xl font-bold text-transparent lg:text-8xl", children: "BlueNorth AI" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 197,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-6 text-base lg:text-lg  text-gray-300", children: "Enterprise AI suite to transform Supply Chain Planning and Execution" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 200,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-8 flex justify-center gap-4 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", type: "button", className: "rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500", children: "Get started" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 205,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", className: "rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400", children: "Request Demo" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 208,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeroBackground, { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 185,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s2(Example, "/8SauWscXt79oOQuuHV5sqonLwY=");
_c23 = Example;
var _c4;
var _c23;
$RefreshReg$(_c4, "GitHubIcon");
$RefreshReg$(_c23, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Example as default
};
//# sourceMappingURL=/build/routes/_index-KQE3642W.js.map
