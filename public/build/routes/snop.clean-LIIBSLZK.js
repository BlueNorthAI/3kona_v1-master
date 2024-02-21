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

// app/data/truck.js
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\data\\\\truck.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\truck.js"
  );
}
var TruckSummary = ({
  data
}) => {
  const {
    truck,
    trips
  } = data;
  const formattedMileage = (mileage) => `${mileage} Kms/liter - With load: ${truck.mileageWithLoad} Kms/liter - Without load: ${truck.mileageWithoutLoad} Kms/liter`;
  const formattedExpenses = (expenseType) => `${expenseType}: ${truck[expenseType]} INR/${expenseType === "km" ? "Km" : "Trip"}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "truck-summary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Truck Summary" }, void 0, false, {
      fileName: "app/data/truck.js",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-label", children: "Truck Type:" }, void 0, false, {
        fileName: "app/data/truck.js",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-value", children: truck.type }, void 0, false, {
        fileName: "app/data/truck.js",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/truck.js",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: formattedMileage("Mileage") }, void 0, false, {
      fileName: "app/data/truck.js",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: formattedExpenses("maintenance") }, void 0, false, {
      fileName: "app/data/truck.js",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-label", children: "Capacity:" }, void 0, false, {
        fileName: "app/data/truck.js",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-value", children: [
        truck.capacity,
        " Bikes / Truck"
      ] }, void 0, true, {
        fileName: "app/data/truck.js",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/truck.js",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: formattedExpenses("annualDistance") }, void 0, false, {
      fileName: "app/data/truck.js",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "trip-summary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Trip Summary" }, void 0, false, {
        fileName: "app/data/truck.js",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-label", children: "Origin:" }, void 0, false, {
          fileName: "app/data/truck.js",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-value", children: trips[0].origin }, void 0, false, {
          fileName: "app/data/truck.js",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/truck.js",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-label", children: "Destination:" }, void 0, false, {
          fileName: "app/data/truck.js",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-value", children: trips[0].destination }, void 0, false, {
          fileName: "app/data/truck.js",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/truck.js",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-label", children: "Distance:" }, void 0, false, {
          fileName: "app/data/truck.js",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-value", children: [
          trips[0].distance,
          " Kms"
        ] }, void 0, true, {
          fileName: "app/data/truck.js",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/truck.js",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-label", children: "Fixed Cost per Trip:" }, void 0, false, {
          fileName: "app/data/truck.js",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-value", children: [
          trips[0].fixedCostPerTrip,
          " INR"
        ] }, void 0, true, {
          fileName: "app/data/truck.js",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/truck.js",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-label", children: "Admin Cost per Trip:" }, void 0, false, {
          fileName: "app/data/truck.js",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-value", children: [
          trips[0].adminCostPerTrip,
          " INR"
        ] }, void 0, true, {
          fileName: "app/data/truck.js",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/truck.js",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-label", children: "Variable Cost per Trip:" }, void 0, false, {
          fileName: "app/data/truck.js",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-value", children: [
          trips[0].variableCostPerTrip,
          " INR"
        ] }, void 0, true, {
          fileName: "app/data/truck.js",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/truck.js",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-label", children: "Cost per Bike:" }, void 0, false, {
          fileName: "app/data/truck.js",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-value", children: [
          trips[0].costPerBike,
          " INR"
        ] }, void 0, true, {
          fileName: "app/data/truck.js",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/truck.js",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-label", children: "Revenue per Bike:" }, void 0, false, {
          fileName: "app/data/truck.js",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary-value", children: [
          trips[0].revenuePerBike,
          " INR"
        ] }, void 0, true, {
          fileName: "app/data/truck.js",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/truck.js",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/truck.js",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/data/truck.js",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c = TruckSummary;
var truck_default = TruckSummary;
var _c;
$RefreshReg$(_c, "TruckSummary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/snop.clean.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.clean.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.clean.jsx"
  );
  import.meta.hot.lastModified = "1708448308188.3486";
}
var SnopClean = (props) => {
  const data2 = {
    truck: {
      type: "Multi Axle Truck",
      purchaseCost: 23e5,
      mileageWithLoad: 4.5,
      mileageWithoutLoad: 5,
      maintenance: 168e3,
      capacity: 60,
      annualDistance: 84e3,
      tires: 10,
      dieselPrice: 76,
      loadingUnloadingToll: 800,
      driverAndCleanerExpenses: 3e5
    },
    trips: [{
      origin: "Chennai",
      destination: "Kolkata",
      distance: 2279,
      fixedCostPerTrip: 309,
      adminCostPerTrip: 245,
      variableCostPerTrip: 21640,
      costPerBike: 1518,
      revenuePerBike: 1676
    }]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "clean-snop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(truck_default, { data: data2 }, void 0, false, {
    fileName: "app/routes/snop.clean.jsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.clean.jsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
};
_c2 = SnopClean;
var snop_clean_default = SnopClean;
var _c2;
$RefreshReg$(_c2, "SnopClean");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  snop_clean_default as default
};
//# sourceMappingURL=/build/routes/snop.clean-LIIBSLZK.js.map
