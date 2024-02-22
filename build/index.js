var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// empty-module:~/kendo/charts/area/kendoAreaChart.client
var require_kendoAreaChart = __commonJS({
  "empty-module:~/kendo/charts/area/kendoAreaChart.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/kendo/charts/line/kendoLineChart.client
var require_kendoLineChart = __commonJS({
  "empty-module:~/kendo/charts/line/kendoLineChart.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/kendo/charts/bar/kendoBarChart.client
var require_kendoBarChart = __commonJS({
  "empty-module:~/kendo/charts/bar/kendoBarChart.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/kendo/charts/pie/kendoPieChart.client
var require_kendoPieChart = __commonJS({
  "empty-module:~/kendo/charts/pie/kendoPieChart.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/kendo/charts/stackcol/kendoStackColChart.client
var require_kendoStackColChart = __commonJS({
  "empty-module:~/kendo/charts/stackcol/kendoStackColChart.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/kendo/charts/column/kendoColumnChart.client
var require_kendoColumnChart = __commonJS({
  "empty-module:~/kendo/charts/column/kendoColumnChart.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/kendo/grid/kendogrid.client
var require_kendogrid = __commonJS({
  "empty-module:~/kendo/grid/kendogrid.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/kendo/charts/donut/kendoDonutChart.client
var require_kendoDonutChart = __commonJS({
  "empty-module:~/kendo/charts/donut/kendoDonutChart.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/kendo/charts/waterfall/kendoWaterfallChart.client
var require_kendoWaterfallChart = __commonJS({
  "empty-module:~/kendo/charts/waterfall/kendoWaterfallChart.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { abort, pipe } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response((0, import_node.createReadableStreamFromReadable)(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { abort, pipe } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response((0, import_node.createReadableStreamFromReadable)(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_node3 = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client");

// app/singleton.server.ts
var singleton = (name, valueFactory) => {
  let g = global;
  return g.__singletons ??= {}, g.__singletons[name] ??= valueFactory(), g.__singletons[name];
};

// app/db.server.ts
var prisma = singleton("prisma", () => new import_client.PrismaClient());
prisma.$connect();

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/styles/kendo.css
var kendo_default = "/build/_assets/kendo-KIIKUQWW.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-W65ZDPDG.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: kendo_default }
], loader = async ({ request }) => (0, import_node3.json)({ user: await getUser(request) });
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/snop.dashboard.inventory.jsx
var snop_dashboard_inventory_exports = {};
__export(snop_dashboard_inventory_exports, {
  default: () => InventoryRoute
});
var import_react4 = require("react"), import_react5 = require("@headlessui/react"), import_solid = require("@heroicons/react/20/solid");

// app/components/CardLayout.jsx
var import_kendo_react_progressbars = require("@progress/kendo-react-progressbars"), import_react3 = require("@remix-run/react"), import_outline = require("@heroicons/react/24/outline");
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function CardLayout({ mode: mode2, tab, kpiData }) {
  let emptyStyles = { background: "#ef4444" }, progressStyles = { background: "#22c55e" };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "ul",
    {
      role: "list",
      className: "mx-4 my-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ",
      children: kpiData.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "li",
        {
          className: "col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "span",
                {
                  className: `absolute inset-x-0 top-0 h-1 rounded-lg ${kpi.status === "Above Target" ? "bg-green-500" : kpi.status === "Below Target" ? "bg-red-500" : ""}`
                },
                void 0,
                !1,
                {
                  fileName: "app/components/CardLayout.jsx",
                  lineNumber: 28,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "my-2 flex items-baseline gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-base font-medium text-gray-900", children: kpi.Name }, void 0, !1, {
                    fileName: "app/components/CardLayout.jsx",
                    lineNumber: 39,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-4xl font-bold text-black", children: kpi.Value }, void 0, !1, {
                    fileName: "app/components/CardLayout.jsx",
                    lineNumber: 42,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/CardLayout.jsx",
                  lineNumber: 38,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-auto overflow-x-hidden px-2  text-center text-base font-medium text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  import_kendo_react_progressbars.ProgressBar,
                  {
                    value: kpi.TargetAch,
                    style: { width: 100, height: 12 },
                    labelVisible: !0,
                    labelPlacement: "start",
                    emptyStyle: emptyStyles,
                    progressStyle: progressStyles
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/CardLayout.jsx",
                    lineNumber: 47,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/CardLayout.jsx",
                  lineNumber: 46,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/CardLayout.jsx",
                lineNumber: 37,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: kpi.container }, void 0, !1, {
                fileName: "app/components/CardLayout.jsx",
                lineNumber: 57,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/CardLayout.jsx",
              lineNumber: 27,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "-mt-px flex divide-x divide-gray-200 bg-gray-50 h-10 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex w-0 flex-1  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                import_react3.Link,
                {
                  to: kpi.Analyze,
                  className: "relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                      import_outline.WrenchScrewdriverIcon,
                      {
                        className: "h-5 w-5",
                        "aria-hidden": "true"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/CardLayout.jsx",
                        lineNumber: 67,
                        columnNumber: 25
                      },
                      this
                    ),
                    "Analyze"
                  ] }, void 0, !0, {
                    fileName: "app/components/CardLayout.jsx",
                    lineNumber: 66,
                    columnNumber: 23
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/CardLayout.jsx",
                  lineNumber: 62,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/CardLayout.jsx",
                lineNumber: 61,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "-ml-px flex flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                import_react3.Link,
                {
                  to: "/demo/dashboard/salesExp",
                  className: "relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold  hover:bg-rose-500 hover:text-white",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                      import_outline.CircleStackIcon,
                      {
                        className: "h-5 w-5",
                        "aria-hidden": "true"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/CardLayout.jsx",
                        lineNumber: 82,
                        columnNumber: 25
                      },
                      this
                    ),
                    "Explore Data"
                  ] }, void 0, !0, {
                    fileName: "app/components/CardLayout.jsx",
                    lineNumber: 81,
                    columnNumber: 23
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/CardLayout.jsx",
                  lineNumber: 77,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/CardLayout.jsx",
                lineNumber: 76,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "-ml-px flex  flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                import_react3.Link,
                {
                  to: "/benchmark",
                  className: "relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_outline.LightBulbIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
                      fileName: "app/components/CardLayout.jsx",
                      lineNumber: 96,
                      columnNumber: 25
                    }, this),
                    "Insights"
                  ] }, void 0, !0, {
                    fileName: "app/components/CardLayout.jsx",
                    lineNumber: 95,
                    columnNumber: 23
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/CardLayout.jsx",
                  lineNumber: 91,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/CardLayout.jsx",
                lineNumber: 90,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/CardLayout.jsx",
              lineNumber: 60,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/CardLayout.jsx",
              lineNumber: 59,
              columnNumber: 15
            }, this)
          ]
        },
        kpi.Name,
        !0,
        {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 23,
          columnNumber: 13
        },
        this
      ))
    },
    void 0,
    !1,
    {
      fileName: "app/components/CardLayout.jsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/CardLayout.jsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/CardLayout.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/data/dashboard/carData.js
var carData = [
  { make: "Toyota", model: "Camry", price: 35e3 },
  { make: "Toyota", model: "Corolla", price: 25e3 },
  { make: "Toyota", model: "Prius", price: 3e4 },
  { make: "Honda", model: "Accord", price: 32e3 },
  { make: "Honda", model: "Civic", price: 22e3 },
  { make: "Honda", model: "CR-V", price: 28e3 },
  { make: "Ford", model: "Fusion", price: 3e4 },
  { make: "Ford", model: "Focus", price: 2e4 },
  { make: "Ford", model: "Escape", price: 25e3 },
  { make: "Nissan", model: "Altima", price: 3e4 },
  { make: "Nissan", model: "Sentra", price: 2e4 },
  { make: "Nissan", model: "Rogue", price: 25e3 },
  { make: "Chevrolet", model: "Malibu", price: 3e4 },
  { make: "Chevrolet", model: "Cruze", price: 2e4 },
  { make: "Chevrolet", model: "Equinox", price: 25e3 },
  { make: "Hyundai", model: "Sonata", price: 3e4 },
  { make: "Hyundai", model: "Elantra", price: 2e4 },
  { make: "Hyundai", model: "Santa Fe", price: 25e3 },
  { make: "Kia", model: "Optima", price: 3e4 },
  { make: "Kia", model: "Forte", price: 2e4 },
  { make: "Kia", model: "Sorento", price: 25e3 },
  { make: "Subaru", model: "Legacy", price: 3e4 },
  { make: "Subaru", model: "Impreza", price: 2e4 },
  { make: "Subaru", model: "Forester", price: 25e3 },
  { make: "Volkswagen", model: "Passat", price: 3e4 },
  { make: "Volkswagen", model: "Jetta", price: 2e4 },
  { make: "Volkswagen", model: "Tiguan", price: 25e3 },
  { make: "BMW", model: "3 Series", price: 3e4 },
  { make: "BMW", model: "5 Series", price: 2e4 },
  { make: "BMW", model: "X3", price: 25e3 },
  { make: "Mercedes-Benz", model: "C-Class", price: 3e4 },
  { make: "Mercedes-Benz", model: "E-Class", price: 2e4 },
  { make: "Mercedes-Benz", model: "GLC", price: 25e3 },
  { make: "Audi", model: "A4", price: 3e4 },
  { make: "Audi", model: "A6", price: 2e4 },
  { make: "Audi", model: "Q5", price: 25e3 },
  { make: "Lexus", model: "IS", price: 3e4 },
  { make: "Lexus", model: "ES", price: 2e4 },
  { make: "Lexus", model: "RX", price: 25e3 },
  { make: "Volvo", model: "S60", price: 3e4 },
  { make: "Volvo", model: "S90", price: 2e4 },
  { make: "Volvo", model: "XC60", price: 25e3 },
  { make: "Jaguar", model: "XE", price: 3e4 },
  { make: "Jaguar", model: "XF", price: 2e4 },
  { make: "Jaguar", model: "F-Pace", price: 25e3 },
  { make: "Mazda", model: "6", price: 3e4 },
  { make: "Mazda", model: "CX-5", price: 2e4 },
  { make: "Mazda", model: "CX-9", price: 25e3 },
  { make: "Lincoln", model: "MKZ", price: 3e4 },
  { make: "Lincoln", model: "MKC", price: 2e4 },
  { make: "Lincoln", model: "Navigator", price: 25e3 },
  { make: "Porsche", model: "Cayenne", price: 3e4 },
  { make: "Porsche", model: "Panamera", price: 2e4 },
  { make: "Porsche", model: "Macan", price: 25e3 },
  { make: "Acura", model: "TLX", price: 3e4 },
  { make: "Acura", model: "RDX", price: 2e4 },
  { make: "Acura", model: "MDX", price: 25e3 },
  { make: "Infiniti", model: "Q50", price: 3e4 },
  { make: "Infiniti", model: "QX50", price: 2e4 },
  { make: "Infiniti", model: "QX60", price: 25e3 },
  { make: "Land Rover", model: "Discovery", price: 3e4 },
  { make: "Land Rover", model: "Range Rover", price: 2e4 },
  { make: "Land Rover", model: "Range Rover Sport", price: 25e3 },
  { make: "Cadillac", model: "XT5", price: 3e4 },
  { make: "Cadillac", model: "XTS", price: 2e4 },
  { make: "Cadillac", model: "Escalade", price: 25e3 },
  { make: "Tesla", model: "Model 3", price: 3e4 },
  { make: "Tesla", model: "Model S", price: 2e4 },
  { make: "Tesla", model: "Model X", price: 25e3 },
  { make: "Genesis", model: "G70", price: 3e4 },
  { make: "Genesis", model: "G80", price: 2e4 },
  { make: "Genesis", model: "G90", price: 25e3 },
  { make: "Buick", model: "Envision", price: 3e4 },
  { make: "Buick", model: "Enclave", price: 2e4 },
  { make: "Buick", model: "Regal", price: 25e3 },
  { make: "Mini", model: "Countryman", price: 3e4 },
  { make: "Mini", model: "Cooper", price: 2e4 },
  { make: "Mini", model: "Cooper S", price: 25e3 },
  { make: "Mitsubishi", model: "Outlander", price: 3e4 }
];

// app/kendo/charts/area/WrapperAreaChart.jsx
var import_kendoAreaChart = __toESM(require_kendoAreaChart()), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Fallback = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  "path",
  {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  void 0,
  !1,
  {
    fileName: "app/kendo/charts/area/WrapperAreaChart.jsx",
    lineNumber: 8,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/kendo/charts/area/WrapperAreaChart.jsx",
  lineNumber: 7,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/kendo/charts/area/WrapperAreaChart.jsx",
  lineNumber: 6,
  columnNumber: 12
}, this);
function WrapperMultiAreaChart({ category, series }) {
  return typeof document < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_kendoAreaChart.MultiAreaChartContainer, { categories: category, series }, void 0, !1, {
    fileName: "app/kendo/charts/area/WrapperAreaChart.jsx",
    lineNumber: 20,
    columnNumber: 46
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Fallback, {}, void 0, !1, {
    fileName: "app/kendo/charts/area/WrapperAreaChart.jsx",
    lineNumber: 20,
    columnNumber: 114
  }, this);
}

// app/kendo/charts/line/WrapperLineChart.jsx
var import_kendoLineChart = __toESM(require_kendoLineChart()), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Fallback2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "path",
  {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  void 0,
  !1,
  {
    fileName: "app/kendo/charts/line/WrapperLineChart.jsx",
    lineNumber: 7,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/kendo/charts/line/WrapperLineChart.jsx",
  lineNumber: 6,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/kendo/charts/line/WrapperLineChart.jsx",
  lineNumber: 5,
  columnNumber: 12
}, this);
function WrapperMultiLineChart({ category, series }) {
  return typeof document < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_kendoLineChart.MultiLineChartContainer, { categories: category, series }, void 0, !1, {
    fileName: "app/kendo/charts/line/WrapperLineChart.jsx",
    lineNumber: 19,
    columnNumber: 46
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Fallback2, {}, void 0, !1, {
    fileName: "app/kendo/charts/line/WrapperLineChart.jsx",
    lineNumber: 19,
    columnNumber: 114
  }, this);
}

// app/kendo/charts/bar/WrapperBarChart.jsx
var import_kendoBarChart = __toESM(require_kendoBarChart()), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Fallback3 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "path",
  {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  void 0,
  !1,
  {
    fileName: "app/kendo/charts/bar/WrapperBarChart.jsx",
    lineNumber: 7,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/kendo/charts/bar/WrapperBarChart.jsx",
  lineNumber: 6,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/kendo/charts/bar/WrapperBarChart.jsx",
  lineNumber: 5,
  columnNumber: 12
}, this);
function WrapperMultiBarChart({ category, series }) {
  return typeof document < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_kendoBarChart.MultiBarChartContainer, { categories: category, series }, void 0, !1, {
    fileName: "app/kendo/charts/bar/WrapperBarChart.jsx",
    lineNumber: 19,
    columnNumber: 46
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Fallback3, {}, void 0, !1, {
    fileName: "app/kendo/charts/bar/WrapperBarChart.jsx",
    lineNumber: 19,
    columnNumber: 113
  }, this);
}

// app/kendo/charts/pie/WrapperPieChart.jsx
var import_kendoPieChart = __toESM(require_kendoPieChart()), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), Fallback4 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  "path",
  {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 0,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  void 0,
  !1,
  {
    fileName: "app/kendo/charts/pie/WrapperPieChart.jsx",
    lineNumber: 7,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/kendo/charts/pie/WrapperPieChart.jsx",
  lineNumber: 6,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/kendo/charts/pie/WrapperPieChart.jsx",
  lineNumber: 5,
  columnNumber: 12
}, this);
function WrapperPieChart({ series }) {
  return typeof document < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_kendoPieChart.PieChartContainer, { series }, void 0, !1, {
    fileName: "app/kendo/charts/pie/WrapperPieChart.jsx",
    lineNumber: 19,
    columnNumber: 46
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Fallback4, {}, void 0, !1, {
    fileName: "app/kendo/charts/pie/WrapperPieChart.jsx",
    lineNumber: 19,
    columnNumber: 86
  }, this);
}

// app/kendo/rawData/dashboard/inventoryDashboard.js
var handbalance_m = [{
  category: "APAC",
  value: 59.51
}, {
  category: "JAPAN",
  value: 13.77
}, {
  category: "EMEA",
  value: 9.61
}, {
  category: "NORTH AMERICA",
  value: 17.11
}], avgInventoryCategories_m = ["APAC", "EMEA", "JAPAN", "AMERICA"], avgInventorySeries_m = [
  {
    name: "Invoiced Amount",
    data: [300, 323, 634, 943]
  }
], mapeCategories_m = ["2021 Q1", "2021 Q2", "2021 Q3", "2021 Q4"], mapeSeries_m = [
  {
    name: "Custom",
    data: [100, 300, 200, 343]
  },
  {
    name: "Model",
    data: [350, 500, 300, 650]
  },
  {
    name: "Standard",
    data: [350, 500, 300, 650]
  }
], unitCategories_m = ["2020 Q3", "2020 Q4", "2021 Q2", "2021 Q3", "2021 Q4"], unitSeries_m = [
  {
    name: "Custom",
    data: [100, 300, 200, 343]
  },
  {
    name: "Model",
    data: [350, 500, 300, 650]
  },
  {
    name: "Standard",
    data: [350, 500, 300, 650]
  }
], resourceCategories_m = ["2020 Q3", "2020 Q4", "2021 Q1", "2021 Q2", "2021 Q3", "2021 Q4"], resourceSeries_m = [
  {
    name: "",
    data: [123, 276, 310, 212, 240, 156]
  }
], overheadCategories_m = ["2020 Q3", "2020 Q4", "2021 Q1", "2021 Q2", "2021 Q3", "2021 Q4"], overheadSeries_m = [
  {
    name: "",
    data: [123, 276, 310, 212, 240, 156]
  }
], materialCategories_m = ["Custom", "Modal", "Standard"], materialSeries_m = [
  {
    name: "",
    data: [300, 323, 634]
  }
], turnsCategories_m = ["APT", "BEM", "HLS", "SCR"], turnsSeries_m = [
  {
    name: "Japan",
    data: [8, 6, 7, 5]
  }
];

// app/data/dashboard/inventoryData.js
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
var kpiService_m = [
  {
    Name: "On Hand Balance",
    Value: "$8.46B",
    Trend: "up",
    TargetAch: 83,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(WrapperPieChart, { series: handbalance_m }, void 0, !1, {
      fileName: "app/data/dashboard/inventoryData.js",
      lineNumber: 28,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/inventoryAnalysis"
  },
  {
    Name: "Avg Inventory Valuation",
    Value: "$233.57M",
    Trend: "up",
    TargetAch: 80,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(WrapperMultiBarChart, { category: avgInventoryCategories_m, series: avgInventorySeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/inventoryData.js",
      lineNumber: 37,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/inventoryAnalysis"
  },
  {
    Name: "MAPE",
    Value: "24%",
    Trend: "down",
    TargetAch: 0,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(WrapperMultiLineChart, { category: mapeCategories_m, series: mapeSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/inventoryData.js",
      lineNumber: 46,
      columnNumber: 16
    }, this),
    status: "On Track",
    Analyze: "/demo/dashboard/analysis/inventoryAnalysis"
  },
  {
    Name: "Unit Cost",
    Value: "$52.37K",
    Trend: "down",
    TargetAch: 10,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(WrapperMultiLineChart, { category: unitCategories_m, series: unitSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/inventoryData.js",
      lineNumber: 55,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/invcostAnalysis"
  },
  {
    Name: "Resource Cost",
    Value: "$24.94M",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(WrapperMultiAreaChart, { category: resourceCategories_m, series: resourceSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/inventoryData.js",
      lineNumber: 64,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/invcostAnalysis"
  },
  {
    Name: "Overhead Cost",
    Value: "$2.74M",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(WrapperMultiLineChart, { category: overheadCategories_m, series: overheadSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/inventoryData.js",
      lineNumber: 73,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/invcostAnalysis"
  },
  {
    Name: "Material Cost",
    Value: "$4.17B",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(WrapperMultiBarChart, { category: materialCategories_m, series: materialSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/inventoryData.js",
      lineNumber: 82,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/invcostAnalysis"
  },
  {
    Name: "Inventory Turns",
    Value: "7",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(WrapperMultiBarChart, { category: turnsCategories_m, series: turnsSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/inventoryData.js",
      lineNumber: 91,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/inventoryAnalysis"
  }
];

// app/routes/snop.dashboard.inventory.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function InventoryRoute() {
  let items2 = [
    {
      id: 1,
      name: "Review",
      description: "Conduct periodic (month/quarter/year) performance review of key business KPIs",
      to: "review"
    },
    {
      id: 2,
      name: "Meeting",
      description: "Conduct daily/weekly data driven meetings and create plan of action ",
      to: "meeting"
    }
  ], centericon = [
    { name: "Download as PDF", icon: import_solid.DocumentArrowDownIcon },
    { name: "Email KPIs", icon: import_solid.ShareIcon },
    { name: "Copy as Image", icon: import_solid.ClipboardDocumentCheckIcon }
  ], [mode2, setMode] = (0, import_react4.useState)(items2[0]), reviewTabs4 = ["Month", "Quarter", "Year"], [reviewIndex, setReviewIndex] = (0, import_react4.useState)(0), meetingTabs4 = ["Daily", "Weekly"], [meetingIndex, setMeetingIndex] = (0, import_react4.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Demandi Dashboard" }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react5.Listbox, { value: mode2, onChange: setMode, children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_solid.CheckIcon,
              {
                className: "-ml-0.5 h-5 w-5 ",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.dashboard.inventory.jsx",
                lineNumber: 64,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-sm font-semibold", children: mode2.name }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.inventory.jsx",
              lineNumber: 68,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.dashboard.inventory.jsx",
            lineNumber: 63,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react5.Listbox.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_solid.ChevronDownIcon,
            {
              className: "h-5 w-5 text-white",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/snop.dashboard.inventory.jsx",
              lineNumber: 71,
              columnNumber: 27
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/snop.dashboard.inventory.jsx",
            lineNumber: 70,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.dashboard.inventory.jsx",
          lineNumber: 62,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          import_react5.Transition,
          {
            show: open,
            as: import_react4.Fragment,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react5.Listbox.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items2.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_react5.Listbox.Option,
              {
                className: ({ active }) => classNames(
                  active ? "bg-rose-500 text-white" : "text-gray-900",
                  "cursor-default select-none p-4 text-sm"
                ),
                value: option,
                children: ({ selected, active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                      "p",
                      {
                        className: selected ? "font-semibold" : "font-normal",
                        children: option.name
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.inventory.jsx",
                        lineNumber: 102,
                        columnNumber: 37
                      },
                      this
                    ),
                    selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                      "span",
                      {
                        className: active ? "text-white" : "text-rose-600",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                          import_solid.CheckIcon,
                          {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/snop.dashboard.inventory.jsx",
                            lineNumber: 119,
                            columnNumber: 41
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.inventory.jsx",
                        lineNumber: 112,
                        columnNumber: 39
                      },
                      this
                    ) : null
                  ] }, void 0, !0, {
                    fileName: "app/routes/snop.dashboard.inventory.jsx",
                    lineNumber: 101,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                    "p",
                    {
                      className: classNames(
                        active ? "text-rose-200" : "text-gray-500",
                        "mt-2"
                      ),
                      children: option.description
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/snop.dashboard.inventory.jsx",
                      lineNumber: 126,
                      columnNumber: 35
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.dashboard.inventory.jsx",
                  lineNumber: 100,
                  columnNumber: 33
                }, this)
              },
              option.name,
              !1,
              {
                fileName: "app/routes/snop.dashboard.inventory.jsx",
                lineNumber: 87,
                columnNumber: 29
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.inventory.jsx",
              lineNumber: 85,
              columnNumber: 25
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/snop.dashboard.inventory.jsx",
            lineNumber: 78,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 61,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 60,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 58,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 57,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.dashboard.inventory.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.inventory.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      CardLayout,
      {
        mode: mode2.name === "Review" ? reviewTabs4 : meetingTabs4,
        tab: mode2.name === "Review" ? reviewIndex : meetingIndex,
        kpiData: kpiService_m
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 195,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.inventory.jsx",
      lineNumber: 194,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.dashboard.inventory.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/snop.dashboard.campaign.jsx
var snop_dashboard_campaign_exports = {};
__export(snop_dashboard_campaign_exports, {
  default: () => CampaignRoute
});
var import_react6 = require("react"), import_react7 = require("@headlessui/react"), import_solid2 = require("@heroicons/react/20/solid"), import_outline2 = require("@heroicons/react/24/outline"), import_react8 = require("@remix-run/react");

// app/kendo/charts/stackcol/WrapperStackColChart.jsx
var import_kendoStackColChart = __toESM(require_kendoStackColChart()), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Fallback5 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  "path",
  {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  void 0,
  !1,
  {
    fileName: "app/kendo/charts/stackcol/WrapperStackColChart.jsx",
    lineNumber: 7,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/kendo/charts/stackcol/WrapperStackColChart.jsx",
  lineNumber: 6,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/kendo/charts/stackcol/WrapperStackColChart.jsx",
  lineNumber: 5,
  columnNumber: 12
}, this);
function WrapperMultiStackColChart({ category, series }) {
  return typeof document < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_kendoStackColChart.MultiStackColChartContainer, { categories: category, series }, void 0, !1, {
    fileName: "app/kendo/charts/stackcol/WrapperStackColChart.jsx",
    lineNumber: 19,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Fallback5, {}, void 0, !1, {
    fileName: "app/kendo/charts/stackcol/WrapperStackColChart.jsx",
    lineNumber: 19,
    columnNumber: 116
  }, this);
}

// app/kendo/charts/column/WrapperColumnChart.jsx
var import_kendoColumnChart = __toESM(require_kendoColumnChart()), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Fallback6 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  "path",
  {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  void 0,
  !1,
  {
    fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
    lineNumber: 8,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
  lineNumber: 7,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
  lineNumber: 6,
  columnNumber: 12
}, this);
function WrapperMultiColumnChart({ category, series }) {
  return typeof document < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_kendoColumnChart.MultiColumnChartContainer, { categories: category, series }, void 0, !1, {
    fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
    lineNumber: 20,
    columnNumber: 46
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Fallback6, {}, void 0, !1, {
    fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
    lineNumber: 20,
    columnNumber: 116
  }, this);
}

// app/kendo/rawData/dashboard/campaignDashboard.js
var leadsCategories_m = ["Jan", "Feb", "Mar", "Apr"], leadsSeries_m = [
  {
    name: "",
    data: [90, 150, 120, 50]
  },
  {
    name: "",
    data: [20, 40, 50, 20]
  }
], attributedCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], attributedSeries_m = [
  {
    name: "",
    data: [2, 4, 7, 10, 2]
  },
  {
    name: "",
    data: [8, 9, 9, 12, 9]
  }
], pipelineCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], pipelineSeries_m = [
  {
    name: "",
    data: [2, 4, 7, 10, 2]
  },
  {
    name: "",
    data: [4, 8, 9, 12, 10]
  }
], campaignCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], campaignSeries_m = [
  {
    name: "",
    data: [100, 300, 500, 700, 300]
  }
], revenueCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], revenueSeries_m = [
  {
    name: "",
    data: [400, 200, 100, 100, 400]
  }
], wonCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], wonSeries_m = [
  {
    name: "",
    data: [400, 300, 100, 80, 350]
  }
], topCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], topSeries_m = [
  {
    name: "",
    data: [100, 300, 400, 800, 300]
  }
], targetedCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], targetedSeries_m = [
  {
    name: "",
    data: [100, 300, 400, 800, 300]
  }
];

// app/data/dashboard/campaignData.js
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
var kpiService_m2 = [
  {
    Name: "Attributed Leads",
    Value: "378.00",
    Trend: "up",
    TargetAch: 83,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(WrapperMultiColumnChart, { category: leadsCategories_m, series: leadsSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 27,
      columnNumber: 15
    }, this),
    status: "Above Target"
  },
  {
    Name: "Attributed Opportunities",
    Value: "41.00",
    Trend: "up",
    TargetAch: 20,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(WrapperMultiStackColChart, { category: attributedCategories_m, series: attributedSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 35,
      columnNumber: 15
    }, this),
    status: "Above Target"
  },
  {
    Name: "Attributed Pipeline",
    Value: "$5.03M",
    Trend: "down",
    TargetAch: 0,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(WrapperMultiStackColChart, { category: pipelineCategories_m, series: pipelineSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 43,
      columnNumber: 16
    }, this),
    status: "On Track"
  },
  {
    Name: "Campaign ROI",
    Value: "345%",
    Trend: "down",
    TargetAch: 47,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(WrapperMultiColumnChart, { category: campaignCategories_m, series: campaignSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 51,
      columnNumber: 16
    }, this),
    status: "Above Target"
  },
  {
    Name: "Cost Per Revenue Line",
    Value: "$18.52K",
    Trend: "up",
    TargetAch: 0,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(WrapperMultiColumnChart, { category: revenueCategories_m, series: revenueSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 59,
      columnNumber: 16
    }, this),
    status: "Above Target"
  },
  {
    Name: "Cost Per Won Revenue",
    Value: "0.54",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(WrapperMultiColumnChart, { category: wonCategories_m, series: wonSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 67,
      columnNumber: 16
    }, this),
    status: "On Track"
  },
  {
    Name: "Top Campaigns",
    Value: "$2.09M",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(WrapperMultiColumnChart, { category: topCategories_m, series: topSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 75,
      columnNumber: 16
    }, this),
    status: "Above Target"
  },
  {
    Name: "Targeted Accounts",
    Value: "39.00",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(WrapperMultiLineChart, { category: targetedCategories_m, series: targetedSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 83,
      columnNumber: 16
    }, this),
    status: "Above Target"
  }
];

// app/routes/snop.dashboard.campaign.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function CampaignRoute() {
  let emptyStyles = { background: "#ef4444" }, progressStyles = { background: "#22c55e" }, items2 = [
    {
      id: 1,
      name: "Review",
      description: "Conduct periodic (month/quarter/year) performance review of key business KPIs",
      to: "review"
    },
    {
      id: 2,
      name: "Meeting",
      description: "Conduct daily/weekly data driven meetings and create plan of action ",
      to: "meeting"
    }
  ], centericon = [
    { name: "Download as PDF", icon: import_solid2.DocumentArrowDownIcon },
    { name: "Email KPIs", icon: import_solid2.ShareIcon },
    { name: "Copy as Image", icon: import_solid2.ClipboardDocumentCheckIcon }
  ], [mode2, setMode] = (0, import_react6.useState)(items2[0]), reviewTabs4 = ["Month", "Quarter", "Year"], [reviewIndex, setReviewIndex] = (0, import_react6.useState)(0), meetingTabs4 = ["Daily", "Weekly"], [meetingIndex, setMeetingIndex] = (0, import_react6.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Demand Dashboard" }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Listbox, { value: mode2, onChange: setMode, children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_solid2.CheckIcon,
              {
                className: "-ml-0.5 h-5 w-5 ",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.dashboard.campaign.jsx",
                lineNumber: 75,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-sm font-semibold", children: mode2.name }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.campaign.jsx",
              lineNumber: 79,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.dashboard.campaign.jsx",
            lineNumber: 74,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Listbox.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_solid2.ChevronDownIcon,
            {
              className: "h-5 w-5 text-white",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/snop.dashboard.campaign.jsx",
              lineNumber: 82,
              columnNumber: 27
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/snop.dashboard.campaign.jsx",
            lineNumber: 81,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.dashboard.campaign.jsx",
          lineNumber: 73,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          import_react7.Transition,
          {
            show: open,
            as: import_react6.Fragment,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Listbox.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items2.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_react7.Listbox.Option,
              {
                className: ({ active }) => classNames2(
                  active ? "bg-rose-500 text-white" : "text-gray-900",
                  "cursor-default select-none p-4 text-sm"
                ),
                value: option,
                children: ({ selected, active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                      "p",
                      {
                        className: selected ? "font-semibold" : "font-normal",
                        children: option.name
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.campaign.jsx",
                        lineNumber: 113,
                        columnNumber: 37
                      },
                      this
                    ),
                    selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                      "span",
                      {
                        className: active ? "text-white" : "text-rose-600",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                          import_solid2.CheckIcon,
                          {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/snop.dashboard.campaign.jsx",
                            lineNumber: 130,
                            columnNumber: 41
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.campaign.jsx",
                        lineNumber: 123,
                        columnNumber: 39
                      },
                      this
                    ) : null
                  ] }, void 0, !0, {
                    fileName: "app/routes/snop.dashboard.campaign.jsx",
                    lineNumber: 112,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                    "p",
                    {
                      className: classNames2(
                        active ? "text-rose-200" : "text-gray-500",
                        "mt-2"
                      ),
                      children: option.description
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/snop.dashboard.campaign.jsx",
                      lineNumber: 137,
                      columnNumber: 35
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.dashboard.campaign.jsx",
                  lineNumber: 111,
                  columnNumber: 33
                }, this)
              },
              option.name,
              !1,
              {
                fileName: "app/routes/snop.dashboard.campaign.jsx",
                lineNumber: 98,
                columnNumber: 29
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.campaign.jsx",
              lineNumber: 96,
              columnNumber: 25
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/snop.dashboard.campaign.jsx",
            lineNumber: 89,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 72,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 71,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 69,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 68,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.dashboard.campaign.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.campaign.jsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      CardLayout,
      {
        mode: mode2.name === "Review" ? reviewTabs4 : meetingTabs4,
        tab: mode2.name === "Review" ? reviewIndex : meetingIndex,
        kpiData: kpiService_m2
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 206,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.campaign.jsx",
      lineNumber: 205,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.dashboard.campaign.jsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/snop.dashboard.overview.jsx
var snop_dashboard_overview_exports = {};
__export(snop_dashboard_overview_exports, {
  default: () => OverviewRoute
});
var import_react9 = require("react"), import_react10 = require("@headlessui/react"), import_solid3 = require("@heroicons/react/20/solid");

// app/kendo/grid/WrapperGrid.jsx
var import_kendogrid = __toESM(require_kendogrid()), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), Fallback7 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  "path",
  {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  void 0,
  !1,
  {
    fileName: "app/kendo/grid/WrapperGrid.jsx",
    lineNumber: 7,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/kendo/grid/WrapperGrid.jsx",
  lineNumber: 6,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/kendo/grid/WrapperGrid.jsx",
  lineNumber: 5,
  columnNumber: 12
}, this);
function WrapperChartGrid({ data: data2 }) {
  return typeof document < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_kendogrid.GridContainer, { data: data2 }, void 0, !1, {
    fileName: "app/kendo/grid/WrapperGrid.jsx",
    lineNumber: 19,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Fallback7, {}, void 0, !1, {
    fileName: "app/kendo/grid/WrapperGrid.jsx",
    lineNumber: 19,
    columnNumber: 76
  }, this);
}

// app/kendo/rawData/dashboard/overviewDashboard.js
var salesCategory_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], salesData_m = [
  {
    name: "APAC",
    data: [100, 123, 234, 343, 123, 234]
  },
  {
    name: "Japan",
    data: [120, 67, 231, 196, 67, 231]
  },
  {
    name: "America",
    data: [45, 124, 189, 143, 124, 189]
  }
], forecastCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], forecastSeries_m = [
  {
    name: "APAC",
    data: [100, 123, 234, 343, 123, 234]
  },
  {
    name: "Japan",
    data: [120, 67, 231, 196, 67, 231]
  },
  {
    name: "America",
    data: [45, 124, 189, 143, 124, 189]
  }
], ontimeCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], ontimeSeries_m = [
  {
    name: "Japan",
    data: [100, 123, 234, 343, 123, 234]
  },
  {
    name: "America",
    data: [120, 67, 231, 196, 67, 231]
  },
  {
    name: "EMEA",
    data: [45, 124, 189, 143, 124, 189]
  }
], backlogData_m = [
  {
    category: "AT & solution",
    value: 0.51
  },
  {
    category: "Hilman and assocation",
    value: 8.11
  },
  {
    category: "INFINO services",
    value: 27.06
  },
  {
    category: "Internal-Vision",
    value: 61.2
  },
  {
    category: "National Science",
    value: 3.11
  }
], costCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], costSeries_m = [
  {
    name: "Japan",
    data: [100, 123, 234, 343, 123, 234]
  },
  {
    name: "America",
    data: [120, 67, 231, 196, 67, 231]
  },
  {
    name: "EMEA",
    data: [45, 124, 189, 143, 124, 189]
  }
], inventoryCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], inventorySeries_m = [{
  name: "",
  data: [123, 276, 310, 212, 240, 156]
}], marketingCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], marketingSeries_m = [{
  name: "",
  data: [123, 276, 310, 212, 240, 156]
}], logisticsCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], logisticsSeries_m = [{
  name: "",
  data: [123, 276, 310, 212, 240, 156]
}];

// app/data/dashboard/scmOverviewData.js
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
var kpiService_m3 = [
  {
    Name: "Sales",
    Value: "$2.2B",
    Trend: "up",
    TargetAch: 75,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperMultiStackColChart, { category: salesCategory_m, series: salesData_m }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 40,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 42,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "Forecast Accuracy",
    Value: "75%",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperMultiColumnChart, { category: forecastCategories_m, series: forecastSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 50,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 52,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/orderAnalysis"
  },
  {
    Name: "On-Time & In-Full",
    Value: "80%",
    Trend: "down",
    TargetAch: 90,
    // container: <WrapperTripleLineChart category={lineCategories_m} first={TripleLineFirstSeries_m} second={TripleLineSecondSeries_m} third={TripleLineThirdSeries_m}/>,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperMultiLineChart, { category: ontimeCategories_m, series: ontimeSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 62,
      columnNumber: 16
    }, this),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 64,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/ontimeAnalysis"
  },
  {
    Name: "Backlog",
    Value: "$1.2M",
    Trend: "down",
    TargetAch: 50,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperPieChart, { series: backlogData_m }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 72,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 74,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/agreementAnalysis"
  },
  {
    Name: "Cost of Goods",
    Value: "$1.2B",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperMultiColumnChart, { category: costCategories_m, series: costSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 82,
      columnNumber: 16
    }, this),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 84,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/costAnalysis"
  },
  {
    Name: "Inventory",
    Value: "$600M",
    Trend: "down",
    TargetAch: 50,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperMultiAreaChart, { category: inventoryCategories_m, series: inventorySeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 92,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 94,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/inventoryAnalysis"
  },
  {
    Name: "Sales & Marketing",
    Value: "$300M",
    Trend: "up",
    TargetAch: 80,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperMultiBarChart, { category: marketingCategories_m, series: marketingSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 102,
      columnNumber: 16
    }, this),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 104,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/invcostAnalysis"
  },
  {
    Name: "Logistics",
    Value: "$300M",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperMultiLineChart, { category: logisticsCategories_m, series: logisticsSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 112,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 114,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/inventoryAnalysis"
  }
];

// app/routes/snop.dashboard.overview.jsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function classNames3(...classes) {
  return classes.filter(Boolean).join(" ");
}
function OverviewRoute() {
  let items2 = [
    {
      id: 1,
      name: "Review",
      description: "Conduct periodic (month/quarter/year) performance review of key business KPIs",
      to: "review"
    },
    {
      id: 2,
      name: "Meeting",
      description: "Conduct daily/weekly data driven meetings and create plan of action ",
      to: "meeting"
    }
  ], centericon = [
    { name: "Download as PDF", icon: import_solid3.DocumentArrowDownIcon },
    { name: "Email KPIs", icon: import_solid3.ShareIcon },
    { name: "Copy as Image", icon: import_solid3.ClipboardDocumentCheckIcon }
  ], [mode2, setMode] = (0, import_react9.useState)(items2[0]), reviewTabs4 = ["Month", "Quarter", "Year"], [reviewIndex, setReviewIndex] = (0, import_react9.useState)(0), meetingTabs4 = ["Daily", "Weekly"], [meetingIndex, setMeetingIndex] = (0, import_react9.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Demand Dashboard" }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 55,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react10.Listbox, { value: mode2, onChange: setMode, children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              import_solid3.CheckIcon,
              {
                className: "-ml-0.5 h-5 w-5 ",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.dashboard.overview.jsx",
                lineNumber: 67,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-sm font-semibold", children: mode2.name }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.overview.jsx",
              lineNumber: 71,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.dashboard.overview.jsx",
            lineNumber: 66,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react10.Listbox.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            import_solid3.ChevronDownIcon,
            {
              className: "h-5 w-5 text-white",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/snop.dashboard.overview.jsx",
              lineNumber: 74,
              columnNumber: 27
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/snop.dashboard.overview.jsx",
            lineNumber: 73,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.dashboard.overview.jsx",
          lineNumber: 65,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          import_react10.Transition,
          {
            show: open,
            as: import_react9.Fragment,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react10.Listbox.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items2.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              import_react10.Listbox.Option,
              {
                className: ({ active }) => classNames3(
                  active ? "bg-rose-500 text-white" : "text-gray-900",
                  "cursor-default select-none p-4 text-sm"
                ),
                value: option,
                children: ({ selected, active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                      "p",
                      {
                        className: selected ? "font-semibold" : "font-normal",
                        children: option.name
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.overview.jsx",
                        lineNumber: 105,
                        columnNumber: 37
                      },
                      this
                    ),
                    selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                      "span",
                      {
                        className: active ? "text-white" : "text-rose-600",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                          import_solid3.CheckIcon,
                          {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/snop.dashboard.overview.jsx",
                            lineNumber: 122,
                            columnNumber: 41
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.overview.jsx",
                        lineNumber: 115,
                        columnNumber: 39
                      },
                      this
                    ) : null
                  ] }, void 0, !0, {
                    fileName: "app/routes/snop.dashboard.overview.jsx",
                    lineNumber: 104,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                    "p",
                    {
                      className: classNames3(
                        active ? "text-rose-200" : "text-gray-500",
                        "mt-2"
                      ),
                      children: option.description
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/snop.dashboard.overview.jsx",
                      lineNumber: 129,
                      columnNumber: 35
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.dashboard.overview.jsx",
                  lineNumber: 103,
                  columnNumber: 33
                }, this)
              },
              option.name,
              !1,
              {
                fileName: "app/routes/snop.dashboard.overview.jsx",
                lineNumber: 90,
                columnNumber: 29
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.overview.jsx",
              lineNumber: 88,
              columnNumber: 25
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/snop.dashboard.overview.jsx",
            lineNumber: 81,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 64,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 63,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 61,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 60,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.dashboard.overview.jsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.overview.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      CardLayout,
      {
        mode: mode2.name === "Review" ? reviewTabs4 : meetingTabs4,
        tab: mode2.name === "Review" ? reviewIndex : meetingIndex,
        kpiData: kpiService_m3
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 199,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.overview.jsx",
      lineNumber: 198,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.dashboard.overview.jsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/routes/snop.dashboard.finance.jsx
var snop_dashboard_finance_exports = {};
__export(snop_dashboard_finance_exports, {
  default: () => FinanceRoute
});
var import_react11 = require("react"), import_react12 = require("@headlessui/react"), import_solid4 = require("@heroicons/react/20/solid"), import_outline3 = require("@heroicons/react/24/outline"), import_react13 = require("@remix-run/react");

// app/kendo/rawData/dashboard/financeDashboard.js
var ratioCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], ratioSeries_m = [
  {
    name: "",
    data: [300, 400, 450, 470, 500]
  }
], currentCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], currentSeries_m = [
  {
    name: "",
    data: [300, 300, 350, 370, 300]
  }
], invCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], invSeries_m = [
  {
    name: "",
    data: [100, 98, 100, 110, 120]
  },
  {
    name: "",
    data: [50, 80, 90, 120, 80]
  }
], debtCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], debtSeries_m = [
  {
    name: "",
    data: [200, 98, 100, 100, 90]
  }
], cashCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], cashSeries_m = [
  {
    name: "",
    data: [400, 300, 400, 400, 200, 600]
  }
], fixedCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], fixedSeries_m = [
  {
    name: "",
    data: [400, 300, 400, 400, 200, 600]
  }
], equCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], equSeries_m = [
  {
    name: "",
    data: [90, 80, 70, 30, 25, 0]
  }
], assCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], assSeries_m = [
  {
    name: "",
    data: [12, 15, 12, 12, 25, 0]
  }
];

// app/data/dashboard/financeData.js
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
var kpiService_m4 = [
  {
    Name: "Operating Expense Ratio %",
    Value: "11.53",
    Trend: "up",
    TargetAch: 75,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: ratioCategories_m,
        series: ratioSeries_m
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 46,
        columnNumber: 7
      },
      this
    ),
    status: "Above Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 52,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/opexpenseAnalysis"
  },
  {
    Name: "Current Ratio",
    Value: "1.14",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: currentCategories_m,
        series: currentSeries_m
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 67,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/opexpenseAnalysis"
  },
  {
    Name: "Inventory Turnover Ratio",
    Value: "0.00",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WrapperMultiBarChart, { category: invCategories_m, series: invSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 79,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/opexpenseAnalysis"
  },
  {
    Name: "Debt to Equity Ratio",
    Value: "0.01",
    Trend: "down",
    TargetAch: 50,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: debtCategories_m,
        series: debtSeries_m
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 88,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 94,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/profitAnalysis"
  },
  {
    Name: "Cash Conversion Cycle",
    Value: "-$648.06K",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      WrapperMultiAreaChart,
      {
        category: cashCategories_m,
        series: cashSeries_m
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 103,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 109,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/profitAnalysis"
  },
  {
    Name: "Fixed Assets Turnover Ratio",
    Value: "0.00",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: fixedCategories_m,
        series: fixedSeries_m
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 118,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 124,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/profitAnalysis"
  },
  {
    Name: "Return on Equity %",
    Value: "0.10",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WrapperMultiAreaChart, { category: equCategories_m, series: equSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 136,
      columnNumber: 14
    }, this),
    Analyze: "//demo/dashboard/analysis/profitAnalysis"
  },
  {
    Name: "Return on Assets %",
    Value: "0.07",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WrapperMultiAreaChart, { category: assCategories_m, series: assSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    status: "Above Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, !1, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 148,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/profitAnalysis"
  }
];

// app/routes/snop.dashboard.finance.jsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function classNames4(...classes) {
  return classes.filter(Boolean).join(" ");
}
function FinanceRoute() {
  let emptyStyles = { background: "#ef4444" }, progressStyles = { background: "#22c55e" }, items2 = [
    {
      id: 1,
      name: "Review",
      description: "Conduct periodic (month/quarter/year) performance review of key business KPIs",
      to: "review"
    },
    {
      id: 2,
      name: "Meeting",
      description: "Conduct daily/weekly data driven meetings and create plan of action ",
      to: "meeting"
    }
  ], centericon = [
    { name: "Download as PDF", icon: import_solid4.DocumentArrowDownIcon },
    { name: "Email KPIs", icon: import_solid4.ShareIcon },
    { name: "Copy as Image", icon: import_solid4.ClipboardDocumentCheckIcon }
  ], [mode2, setMode] = (0, import_react11.useState)(items2[0]), reviewTabs4 = ["Month", "Quarter", "Year"], [reviewIndex, setReviewIndex] = (0, import_react11.useState)(0), meetingTabs4 = ["Daily", "Weekly"], [meetingIndex, setMeetingIndex] = (0, import_react11.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Demand Dashboard" }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react12.Listbox, { value: mode2, onChange: setMode, children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              import_solid4.CheckIcon,
              {
                className: "-ml-0.5 h-5 w-5 ",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.dashboard.finance.jsx",
                lineNumber: 74,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-sm font-semibold", children: mode2.name }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 78,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 73,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react12.Listbox.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            import_solid4.ChevronDownIcon,
            {
              className: "h-5 w-5 text-white",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 81,
              columnNumber: 27
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 80,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.dashboard.finance.jsx",
          lineNumber: 72,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          import_react12.Transition,
          {
            show: open,
            as: import_react11.Fragment,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react12.Listbox.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items2.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              import_react12.Listbox.Option,
              {
                className: ({ active }) => classNames4(
                  active ? "bg-rose-500 text-white" : "text-gray-900",
                  "cursor-default select-none p-4 text-sm"
                ),
                value: option,
                children: ({ selected, active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                      "p",
                      {
                        className: selected ? "font-semibold" : "font-normal",
                        children: option.name
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.finance.jsx",
                        lineNumber: 112,
                        columnNumber: 37
                      },
                      this
                    ),
                    selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                      "span",
                      {
                        className: active ? "text-white" : "text-rose-600",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                          import_solid4.CheckIcon,
                          {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/snop.dashboard.finance.jsx",
                            lineNumber: 129,
                            columnNumber: 41
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.finance.jsx",
                        lineNumber: 122,
                        columnNumber: 39
                      },
                      this
                    ) : null
                  ] }, void 0, !0, {
                    fileName: "app/routes/snop.dashboard.finance.jsx",
                    lineNumber: 111,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                    "p",
                    {
                      className: classNames4(
                        active ? "text-rose-200" : "text-gray-500",
                        "mt-2"
                      ),
                      children: option.description
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/snop.dashboard.finance.jsx",
                      lineNumber: 136,
                      columnNumber: 35
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.dashboard.finance.jsx",
                  lineNumber: 110,
                  columnNumber: 33
                }, this)
              },
              option.name,
              !1,
              {
                fileName: "app/routes/snop.dashboard.finance.jsx",
                lineNumber: 97,
                columnNumber: 29
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 95,
              columnNumber: 25
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 88,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 71,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 70,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 68,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.dashboard.finance.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.finance.jsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      CardLayout,
      {
        mode: mode2.name === "Review" ? reviewTabs4 : meetingTabs4,
        tab: mode2.name === "Review" ? reviewIndex : meetingIndex,
        kpiData: kpiService_m4
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 205,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.finance.jsx",
      lineNumber: 204,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.dashboard.finance.jsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/routes/snop.scenario_.$scenId.tsx
var snop_scenario_scenId_exports = {};
__export(snop_scenario_scenId_exports, {
  default: () => UpdateScenario,
  loader: () => loader2
});
var import_react16 = __toESM(require("react")), import_react17 = require("@remix-run/react"), import_node4 = require("@remix-run/node");

// app/models/scenario.server.ts
function getScenarioItems() {
  return prisma.snopScenario.findMany({
    select: {
      scenario_id: !0,
      description: !0,
      CreatedAt: !0,
      UpdatedAt: !0,
      module: !0,
      Status: !0
    }
  });
}
function createScenario(inputData) {
  return prisma.snopScenario.create({
    data: inputData
  });
}
async function updateScenario(scenario_id, status) {
  return await prisma.snopScenario.update({
    where: {
      scenario_id
      // Assuming scenario_id is the unique identifier or primary key
    },
    data: {
      Status: status
      // Set the status to the value passed to the function
    }
  });
}
async function getScenarioById(scenario_id) {
  return await prisma.snopScenario.findUnique({
    where: {
      scenario_id
      // Assuming scenario_id is the unique identifier or primary key
    }
  });
}
async function deleteScenarioById(scenario_id) {
  return await prisma.snopScenario.delete({
    where: {
      scenario_id
      // Assuming scenario_id is the unique identifier or primary key
    }
  });
}
async function duplicateScenario(scenarioId) {
  let existingScenario = await prisma.snopScenario.findUnique({
    where: {
      scenario_id: scenarioId
      // Assuming `scenario_id` is the unique identifier
    }
  });
  if (!existingScenario)
    throw new Error("Scenario not found");
  let { id, scenario_id, CreatedAt, UpdatedAt, Status, ...restOfData } = existingScenario;
  return await prisma.snopScenario.create({
    data: {
      ...restOfData,
      Status: "Open"
    }
  });
}

// app/components/SnopForm.tsx
var import_react14 = __toESM(require("react")), import_react15 = require("@remix-run/react");

// app/components/ui/input.tsx
var React = __toESM(require("react"));

// app/lib/utils.ts
var import_clsx = require("clsx"), import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// app/components/ui/input.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), Input = React.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "input",
    {
      type,
      className: cn(
        "flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
        className
      ),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/input.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  )
);
Input.displayName = "Input";

// app/components/ui/button.tsx
var React2 = __toESM(require("react")), import_react_slot = require("@radix-ui/react-slot"), import_class_variance_authority = require("class-variance-authority");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
        destructive: "bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        outline: "border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        secondary: "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React2.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    asChild ? import_react_slot.Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.tsx",
      lineNumber: 47,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// app/components/ui/label.tsx
var React3 = __toESM(require("react")), LabelPrimitive = __toESM(require("@radix-ui/react-label")), import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), labelVariants = (0, import_class_variance_authority2.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Label = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/label.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));
Label.displayName = LabelPrimitive.Root.displayName;

// app/components/demand-form.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function DemandInput({ demands }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid w-full  gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label, { className: "text-lg", htmlFor: "jan", children: "January" }, void 0, !1, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          id: "jan",
          name: "Jan",
          defaultValue: demands.Jan,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/demand-form.tsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label, { className: "text-lg", htmlFor: "feb", children: "February" }, void 0, !1, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          id: "feb",
          name: "Feb",
          defaultValue: demands.Feb,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/demand-form.tsx",
          lineNumber: 44,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label, { className: "text-lg", htmlFor: "mar", children: "March" }, void 0, !1, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          id: "mar",
          name: "Mar",
          defaultValue: demands.Mar,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/demand-form.tsx",
          lineNumber: 55,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label, { className: "text-lg", htmlFor: "apr", children: "April" }, void 0, !1, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          id: "apr",
          name: "Apr",
          defaultValue: demands.Apr,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/demand-form.tsx",
          lineNumber: 66,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label, { className: "text-lg", htmlFor: "may", children: "May" }, void 0, !1, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          id: "may",
          name: "May",
          defaultValue: demands.May,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/demand-form.tsx",
          lineNumber: 77,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label, { className: "text-lg", htmlFor: "jun", children: "June" }, void 0, !1, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          id: "jun",
          name: "Jun",
          defaultValue: demands.Jun,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/demand-form.tsx",
          lineNumber: 88,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label, { className: "text-lg", htmlFor: "jul", children: "July" }, void 0, !1, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          id: "jul",
          name: "Jul",
          defaultValue: demands.Jul,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/demand-form.tsx",
          lineNumber: 99,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label, { className: "text-lg", htmlFor: "aug", children: "August" }, void 0, !1, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          id: "aug",
          name: "Aug",
          defaultValue: demands.Aug,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/demand-form.tsx",
          lineNumber: 110,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label, { className: "text-lg", htmlFor: "sep", children: "September" }, void 0, !1, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          id: "sep",
          name: "Sep",
          defaultValue: demands.Sep,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/demand-form.tsx",
          lineNumber: 121,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label, { className: "text-lg", htmlFor: "oct", children: "October" }, void 0, !1, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          id: "oct",
          name: "Oct",
          defaultValue: demands.Oct,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/demand-form.tsx",
          lineNumber: 132,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label, { className: "text-lg", htmlFor: "nov", children: "November" }, void 0, !1, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          id: "nov",
          name: "Nov",
          defaultValue: demands.Nov,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/demand-form.tsx",
          lineNumber: 143,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 139,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Label, { className: "text-lg", htmlFor: "dec", children: "December" }, void 0, !1, {
        fileName: "app/components/demand-form.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        Input,
        {
          id: "dec",
          name: "Dec",
          defaultValue: demands.Dec,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/demand-form.tsx",
          lineNumber: 154,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/demand-form.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/demand-form.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/demand-form.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/cost-form.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function CostInput({ cost }) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "grid w-full gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Label, { className: "text-lg", htmlFor: "mc", children: [
        "Material Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit" }, void 0, !1, {
          fileName: "app/components/cost-form.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/cost-form.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        Input,
        {
          id: "mc",
          name: "material_cost_pu",
          defaultValue: cost.material_cost_pu,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/cost-form.tsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/cost-form.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Label, { className: "text-lg", htmlFor: "hold", children: [
        "Holding Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit per month" }, void 0, !1, {
          fileName: "app/components/cost-form.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/cost-form.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        Input,
        {
          id: "hold",
          name: "inv_hold_cost_pupm",
          defaultValue: cost.inv_hold_cost_pupm,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/cost-form.tsx",
          lineNumber: 46,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/cost-form.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Label, { className: "text-lg", htmlFor: "stock", children: [
        "Stockout Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit per month" }, void 0, !1, {
          fileName: "app/components/cost-form.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/cost-form.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        Input,
        {
          id: "stock",
          name: "stockout_cost_pupm",
          defaultValue: cost.stockout_cost_pupm,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/cost-form.tsx",
          lineNumber: 59,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/cost-form.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/cost-form.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/empcost-form.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function CostInput2({ cost }) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "grid w-full gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Label, { className: "text-lg", htmlFor: "hiringcost", children: [
        "Hiring Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee" }, void 0, !1, {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        Input,
        {
          id: "hiringcost",
          name: "hiring_cost_pw",
          defaultValue: cost.hiring_cost_pw,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/empcost-form.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Label, { className: "text-lg", htmlFor: "layoff", children: [
        "Layoff Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee" }, void 0, !1, {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        Input,
        {
          id: "layoff",
          name: "firing_cost_pw",
          defaultValue: cost.firing_cost_pw,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 46,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/empcost-form.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Label, { className: "text-lg", htmlFor: "emp", children: [
        "Employee Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee" }, void 0, !1, {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        Input,
        {
          id: "emp",
          name: "worker_cost_pm",
          defaultValue: cost.worker_cost_pm,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 59,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/empcost-form.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Label, { className: "text-lg", htmlFor: "ot", children: [
        "Overtime Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per hour" }, void 0, !1, {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/empcost-form.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        Input,
        {
          id: "ot",
          name: "overtime_cost_phr",
          defaultValue: cost.overtime_cost_phr,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/empcost-form.tsx",
          lineNumber: 71,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/empcost-form.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/empcost-form.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/outcost-form.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function CostInput3({ cost }) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid w-full gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Label, { className: "text-lg", htmlFor: "mc", children: [
        "Material Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit" }, void 0, !1, {
          fileName: "app/components/outcost-form.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        Input,
        {
          id: "mc",
          name: "outsourcing_cost_pu",
          defaultValue: cost.outsourcing_cost_pu,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/outcost-form.tsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/outcost-form.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Label, { className: "text-lg", htmlFor: "man", children: [
        "Manufacturing Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit" }, void 0, !1, {
          fileName: "app/components/outcost-form.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        Input,
        {
          id: "man",
          name: "max_work_hrs_pwpm",
          defaultValue: cost.max_work_hrs_pwpm,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/outcost-form.tsx",
          lineNumber: 46,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/outcost-form.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Label, { className: "text-lg", htmlFor: "logi", children: [
        "Logistics Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per unit" }, void 0, !1, {
          fileName: "app/components/outcost-form.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/outcost-form.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        Input,
        {
          id: "logi",
          name: "max_overtime_hrs_pwpm",
          defaultValue: cost.max_overtime_hrs_pwpm,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/outcost-form.tsx",
          lineNumber: 59,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/outcost-form.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/outcost-form.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/constraint-form.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function ConstraintInput({ constraint }) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "grid w-full  gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Label, { className: "text-lg", htmlFor: "startinv", children: [
        "Starting Inventory",
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, !1, {
          fileName: "app/components/constraint-form.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/constraint-form.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        Input,
        {
          id: "startinv",
          name: "inventory_start",
          defaultValue: constraint.inventory_start,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/constraint-form.tsx",
          lineNumber: 37,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/constraint-form.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Label, { className: "text-lg", htmlFor: "endinv", children: [
        "Ending Inventory",
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, !1, {
          fileName: "app/components/constraint-form.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/constraint-form.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        Input,
        {
          id: "endinv",
          name: "inventory_end",
          defaultValue: constraint.inventory_end,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/constraint-form.tsx",
          lineNumber: 49,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/constraint-form.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Label, { className: "text-lg", htmlFor: "startback", children: [
        "Starting Backlog",
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, !1, {
          fileName: "app/components/constraint-form.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/constraint-form.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        Input,
        {
          id: "startback",
          name: "backlog_start",
          defaultValue: constraint.backlog_start,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/constraint-form.tsx",
          lineNumber: 61,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/constraint-form.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Label, { className: "text-lg", htmlFor: "endback", children: [
        "Ending Backlog",
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, !1, {
          fileName: "app/components/constraint-form.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/constraint-form.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        Input,
        {
          id: "endback",
          name: "backlog_end",
          defaultValue: constraint.backlog_end,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/constraint-form.tsx",
          lineNumber: 73,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/constraint-form.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/constraint-form.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/components/empconstraint-form.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function ConstraintInput2({ constraint }) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "grid w-full  gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Label, { className: "text-lg", htmlFor: "max", children: [
        "Max overtime hours",
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee per month" }, void 0, !1, {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        Input,
        {
          id: "max",
          name: "max_overtime_hrs_pwpm",
          defaultValue: constraint.max_overtime_hrs_pwpm,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 37,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/empconstraint-form.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Label, { className: "text-lg", htmlFor: "noemp", children: [
        "Starting # of employee",
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, !1, {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        Input,
        {
          id: "noemp",
          name: "num_workers_start",
          defaultValue: constraint.num_workers_start,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 49,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/empconstraint-form.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Label, { className: "text-lg", htmlFor: "minemp", children: [
        "Min ending # of employees",
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, !1, {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        Input,
        {
          id: "minemp",
          name: "min_end_workers",
          defaultValue: constraint.min_end_workers,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 61,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/empconstraint-form.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Label, { className: "text-lg", htmlFor: "maxemp", children: [
        "Max ending # of employees",
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units" }, void 0, !1, {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/empconstraint-form.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        Input,
        {
          id: "maxemp",
          name: "max_end_workers",
          defaultValue: constraint.max_end_workers,
          className: "text-lg text-gray-500 text-center"
        },
        void 0,
        !1,
        {
          fileName: "app/components/empconstraint-form.tsx",
          lineNumber: 73,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/empconstraint-form.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/empconstraint-form.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/components/proconstraint-form.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function ConstraintInput3({ constraint }) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "grid w-full  gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Label, { className: "text-lg", htmlFor: "labour", children: [
      "Labour hours",
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "per employee per unit" }, void 0, !1, {
        fileName: "app/components/proconstraint-form.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/proconstraint-form.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      Input,
      {
        id: "labour",
        name: "labor_hrs_pu",
        defaultValue: constraint.labor_hrs_pu,
        className: "text-lg text-gray-500 text-center"
      },
      void 0,
      !1,
      {
        fileName: "app/components/proconstraint-form.tsx",
        lineNumber: 37,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/proconstraint-form.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/proconstraint-form.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/components/ui/card.tsx
var React4 = __toESM(require("react"));
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), Card = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 24,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
  "p",
  {
    ref,
    className: cn("text-sm text-neutral-500 dark:text-neutral-400", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 48,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 60,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 68,
    columnNumber: 3
  },
  this
));
CardFooter.displayName = "CardFooter";

// app/components/SnopForm.tsx
var import_date_fns = require("date-fns");

// app/components/ui/popover.tsx
var React5 = __toESM(require("react")), PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), Popover3 = PopoverPrimitive.Root, PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React5.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border border-neutral-200 bg-white p-4 text-neutral-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/popover.tsx",
    lineNumber: 17,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/popover.tsx",
  lineNumber: 16,
  columnNumber: 3
}, this));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// app/components/ui/calendar.tsx
var import_react_icons = require("@radix-ui/react-icons"), import_react_day_picker = require("react-day-picker");
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function Calendar({
  className,
  classNames: classNames13,
  showOutsideDays = !0,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    import_react_day_picker.DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-neutral-500 rounded-md w-8 font-normal text-[0.8rem] dark:text-neutral-400",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-neutral-100 [&:has([aria-selected].day-outside)]:bg-neutral-100/50 [&:has([aria-selected].day-range-end)]:rounded-r-md dark:[&:has([aria-selected])]:bg-neutral-800 dark:[&:has([aria-selected].day-outside)]:bg-neutral-800/50",
          props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-neutral-900 text-neutral-50 hover:bg-neutral-900 hover:text-neutral-50 focus:bg-neutral-900 focus:text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50 dark:hover:text-neutral-900 dark:focus:bg-neutral-50 dark:focus:text-neutral-900",
        day_today: "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50",
        day_outside: "day-outside text-neutral-500 opacity-50  aria-selected:bg-neutral-100/50 aria-selected:text-neutral-500 aria-selected:opacity-30 dark:text-neutral-400 dark:aria-selected:bg-neutral-800/50 dark:aria-selected:text-neutral-400",
        day_disabled: "text-neutral-500 opacity-50 dark:text-neutral-400",
        day_range_middle: "aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50",
        day_hidden: "invisible",
        ...classNames13
      },
      components: {
        IconLeft: ({ ...props2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react_icons.ChevronLeftIcon, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/components/ui/calendar.tsx",
          lineNumber: 61,
          columnNumber: 37
        }, this),
        IconRight: ({ ...props2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react_icons.ChevronRightIcon, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/components/ui/calendar.tsx",
          lineNumber: 62,
          columnNumber: 38
        }, this)
      },
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/calendar.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
Calendar.displayName = "Calendar";

// app/components/SnopForm.tsx
var import_solid5 = require("@heroicons/react/20/solid");
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), navigation = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" }
];
function DemoContainer({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
    "div",
    {
      className: cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/SnopForm.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  );
}
function SnopForm({ inputData }) {
  let [date, setDate] = import_react14.default.useState(/* @__PURE__ */ new Date()), navigate = (0, import_react15.useNavigate)(), params = (0, import_react15.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "m-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react15.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      "nav",
      {
        className: "ml-6 pl-6 flex items-center justify-center",
        "aria-label": "Global",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          import_react15.Link,
          {
            to: item.to,
            className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200",
            children: item.name
          },
          item.id,
          !1,
          {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 107,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 105,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/SnopForm.tsx",
        lineNumber: 101,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/SnopForm.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center  justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Sales & Operations Planning Input" }, void 0, !1, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            Input,
            {
              className: "mx-2 text-blue-900 w-50",
              name: "description",
              defaultValue: inputData.description || "Describe your scenario"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 124,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            Input,
            {
              className: "mx-2 text-blue-900 w-50 ",
              name: "customer",
              defaultValue: "All",
              hidden: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 130,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            Input,
            {
              className: "mx-2 text-blue-900 w-50",
              name: "site",
              defaultValue: "All",
              hidden: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 136,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            Input,
            {
              className: "mx-2 text-blue-900 w-50",
              name: "sku",
              defaultValue: "All",
              hidden: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 142,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            Input,
            {
              className: "mx-2 text-blue-900 w-50",
              name: "Status",
              defaultValue: "Open",
              hidden: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 148,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Popover3, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              Button,
              {
                variant: "outline",
                className: cn(
                  "w-[180px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_solid5.CalendarIcon, { className: "mr-2 h-4 w-4 text-blue-900" }, void 0, !1, {
                    fileName: "app/components/SnopForm.tsx",
                    lineNumber: 163,
                    columnNumber: 21
                  }, this),
                  date ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "text-blue-900", children: (0, import_date_fns.format)(date, "PPP") }, void 0, !1, {
                    fileName: "app/components/SnopForm.tsx",
                    lineNumber: 165,
                    columnNumber: 23
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "text-blue-900", children: "Pick a date" }, void 0, !1, {
                    fileName: "app/components/SnopForm.tsx",
                    lineNumber: 169,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 156,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 155,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(PopoverContent, { className: "w-auto p-0 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              Calendar,
              {
                className: "text-blue-900",
                mode: "single",
                selected: date,
                onSelect: setDate,
                initialFocus: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 174,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 173,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 154,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "ml-2 flex max-w-sm items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Input, { type: "file" }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 185,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { className: "mr-4  p-1 rounded-md border bg-blue-500 hover:bg-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center space-x-1 mx-2 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_solid5.ArrowUpTrayIcon, { className: "text-white h-5 w-5" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 189,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "mx-1 text-sm p-1 text-white ", children: "Upload" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 190,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 188,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 187,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SnopForm.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardTitle, { className: "text-2xl flex", children: "Demand" }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 201,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "Units per month" }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 202,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "border-b" }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 203,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 200,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(DemandInput, { demands: inputData }, void 0, !1, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 207,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 206,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 199,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 198,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 197,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardTitle, { className: "text-2xl", children: "Material & Inventory Cost" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 217,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "border-b" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 220,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 216,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CostInput, { cost: inputData }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 223,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 222,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 214,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardTitle, { className: "text-2xl", children: "Employee Cost" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 230,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "border-b" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 231,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 229,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CostInput2, { cost: inputData }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 234,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 233,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 228,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 213,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardTitle, { className: "text-2xl", children: "Outsourcing Cost" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 244,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "border-b" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 245,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 243,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CostInput3, { cost: inputData }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 248,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 247,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 242,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 241,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardTitle, { className: "text-2xl", children: "Inventory Constraint" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 255,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "border-b" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 258,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 254,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ConstraintInput, { constraint: inputData }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 261,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 260,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 253,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 252,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 240,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardTitle, { className: "text-2xl", children: "Employee Constraint" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 270,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "border-b" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 273,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 269,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ConstraintInput2, { constraint: inputData }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 276,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 275,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 268,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 267,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardHeader, { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardTitle, { className: "text-2xl", children: "Product Constraint" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 283,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "border-b" }, void 0, !1, {
                fileName: "app/components/SnopForm.tsx",
                lineNumber: 286,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 282,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ConstraintInput3, { constraint: inputData }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 289,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/SnopForm.tsx",
              lineNumber: 288,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 281,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 280,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 266,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SnopForm.tsx",
        lineNumber: 196,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "py-4 border-t flex justify-end space-x-2 mr-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { className: "bg-blue-500 hover:bg-blue-600", children: params.scenId ? "Update Scenario" : "Create Scenario" }, void 0, !1, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 297,
          columnNumber: 13
        }, this),
        params.scenId == null && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { variant: "outline", children: "Save Input" }, void 0, !1, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 302,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          Button,
          {
            onClick: () => navigate(-1),
            type: "button",
            className: "",
            variant: "default",
            children: "Cancel"
          },
          void 0,
          !1,
          {
            fileName: "app/components/SnopForm.tsx",
            lineNumber: 305,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/SnopForm.tsx",
          lineNumber: 304,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SnopForm.tsx",
        lineNumber: 296,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SnopForm.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SnopForm.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SnopForm.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

// app/routes/snop.scenario_.$scenId.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
var loader2 = async ({ params }) => {
  console.log(params.scenId);
  let scenarioData = await getScenarioById(params.scenId);
  return console.log(scenarioData), (0, import_node4.json)({ scenarioData });
};
function UpdateScenario() {
  let [date, setDate] = import_react16.default.useState(/* @__PURE__ */ new Date()), { scenarioData } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(SnopForm, { inputData: scenarioData }, void 0, !1, {
    fileName: "app/routes/snop.scenario_.$scenId.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

// app/routes/snop.dashboard.supply.jsx
var snop_dashboard_supply_exports = {};
__export(snop_dashboard_supply_exports, {
  default: () => SupplyRoute
});
var import_react18 = require("react"), import_react19 = require("@headlessui/react"), import_solid6 = require("@heroicons/react/20/solid");

// app/kendo/rawData/dashboard/supplyDashboard.js
var poamount_m = [
  {
    category: "A",
    value: 26.47
  },
  {
    category: "B",
    value: 0.09
  },
  {
    category: "C",
    value: 3.14
  },
  {
    category: "D",
    value: 7.76
  },
  {
    category: "E",
    value: 16.2
  },
  {
    category: "F",
    value: 9.25
  },
  {
    category: "G",
    value: 0
  },
  {
    category: "H",
    value: 17.74
  },
  {
    category: "I",
    value: 3.35
  }
], receivedCategories_m = ["2019Q2", "2019Q3", "2019Q4", "2020Q1", "2020Q2", "2020Q3"], receivedSeries_m = [
  {
    name: "Received Amount",
    data: [80, 80, 80, 90, 90, 90]
  },
  {
    name: "PO Amount",
    data: [100, 100, 100, 120, 120, 120]
  }
], agreementCategories_m = ["2019Q2", "2019Q3", "2019Q4", "2020Q1", "2020Q2", "2020Q3"], agreementSeries_m = [
  {
    name: "Agreement",
    data: [70, 70, 80, 90, 90, 90]
  },
  {
    name: "Non-Agreement",
    data: [5, 10, 20, 10, 10, 10]
  }
], savings_m = [
  {
    category: "A",
    value: 26.47
  },
  {
    category: "B",
    value: 0.09
  },
  {
    category: "C",
    value: 3.14
  },
  {
    category: "D",
    value: 7.76
  },
  {
    category: "E",
    value: 16.2
  },
  {
    category: "F",
    value: 9.25
  },
  {
    category: "G",
    value: 0
  },
  {
    category: "H",
    value: 17.74
  },
  {
    category: "I",
    value: 3.35
  }
], supplierCategories_m = [
  "2020 Q3",
  "2020 Q4",
  "2021 Q1",
  "2021 Q2",
  "2021 Q3",
  "2021 Q4"
], supplierSeries_m = [
  {
    name: "",
    data: [40, 45, 40, 40, 30, 40]
  }
], lateCategories_m = [
  "2020 Q3",
  "2020 Q4",
  "2021 Q1",
  "2021 Q2",
  "2021 Q3",
  "2021 Q4"
], lateSeries_m = [
  {
    name: "",
    data: [123, 276, 310, 212, 240, 156]
  }
], cycleCategories_m = ["Bluetooth", "Bulb", "Chip", "Circuit", "Packing", "plug", "Receiver", "Wire"], cycleSeries_m = [
  {
    name: "",
    data: [100, 30, 50, 30, 45, 50, 35, 30, 20]
  }
], overdueCategories_m = ["30 Days", "60 Days", "90 Days"], overdueSeries_m = [
  {
    name: "",
    data: [24, 19, 5]
  }
];

// app/data/dashboard/supplyData.js
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
var kpiService_m5 = [
  {
    Name: "PO Amount",
    Value: "$128M",
    Trend: "up",
    TargetAch: 100,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(WrapperPieChart, { series: poamount_m }, void 0, !1, {
      fileName: "app/data/dashboard/supplyData.js",
      lineNumber: 35,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/proeffAnalysis"
  },
  {
    Name: "Received Amount",
    Value: "$113M",
    Trend: "up",
    TargetAch: 94,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(WrapperMultiColumnChart, { category: receivedCategories_m, series: receivedSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/supplyData.js",
      lineNumber: 44,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/supplyAnalysis"
  },
  {
    Name: "Agreement Leakage",
    Value: "$14.89M",
    Trend: "down",
    TargetAch: 0,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(WrapperMultiColumnChart, { category: agreementCategories_m, series: agreementSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/supplyData.js",
      lineNumber: 53,
      columnNumber: 16
    }, this),
    status: "On Track",
    Analyze: "/demo/dashboard/analysis/procureAnalysis"
  },
  {
    Name: "Savings Opportunities",
    Value: "$32M",
    Trend: "down",
    TargetAch: 50,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(WrapperPieChart, { series: savings_m }, void 0, !1, {
      fileName: "app/data/dashboard/supplyData.js",
      lineNumber: 62,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/savingsAnalysis"
  },
  {
    Name: "Supplier Count",
    Value: "40",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(WrapperMultiColumnChart, { category: supplierCategories_m, series: supplierSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/supplyData.js",
      lineNumber: 71,
      columnNumber: 15
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/supplyAnalysis"
  },
  {
    Name: "Received Late %",
    Value: "18%",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(WrapperMultiAreaChart, { category: lateCategories_m, series: lateSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/supplyData.js",
      lineNumber: 80,
      columnNumber: 15
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/spendAnalysis"
  },
  {
    Name: "PR to PO Cycle Time",
    Value: "46.08",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(WrapperMultiBarChart, { category: cycleCategories_m, series: cycleSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/supplyData.js",
      lineNumber: 89,
      columnNumber: 15
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/proeffAnalysis"
  },
  {
    Name: "AP OverDue",
    Value: "$51M",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(WrapperMultiColumnChart, { category: overdueCategories_m, series: overdueSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/supplyData.js",
      lineNumber: 98,
      columnNumber: 15
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/spendAnalysis"
  }
];

// app/routes/snop.dashboard.supply.jsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function classNames5(...classes) {
  return classes.filter(Boolean).join(" ");
}
function SupplyRoute() {
  let items2 = [
    {
      id: 1,
      name: "Review",
      description: "Conduct periodic (month/quarter/year) performance review of key business KPIs",
      to: "review"
    },
    {
      id: 2,
      name: "Meeting",
      description: "Conduct daily/weekly data driven meetings and create plan of action ",
      to: "meeting"
    }
  ], [mode2, setMode] = (0, import_react18.useState)(items2[0]), reviewTabs4 = ["Month", "Quarter", "Year"], [reviewIndex, setReviewIndex] = (0, import_react18.useState)(0), meetingTabs4 = ["Daily", "Weekly"], [meetingIndex, setMeetingIndex] = (0, import_react18.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Demand Dashboard" }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react19.Listbox, { value: mode2, onChange: setMode, children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
              import_solid6.CheckIcon,
              {
                className: "-ml-0.5 h-5 w-5 ",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.dashboard.supply.jsx",
                lineNumber: 68,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-sm font-semibold", children: mode2.name }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.supply.jsx",
              lineNumber: 72,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.dashboard.supply.jsx",
            lineNumber: 67,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react19.Listbox.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
            import_solid6.ChevronDownIcon,
            {
              className: "h-5 w-5 text-white",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/snop.dashboard.supply.jsx",
              lineNumber: 75,
              columnNumber: 27
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/snop.dashboard.supply.jsx",
            lineNumber: 74,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.dashboard.supply.jsx",
          lineNumber: 66,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          import_react19.Transition,
          {
            show: open,
            as: import_react18.Fragment,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react19.Listbox.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items2.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
              import_react19.Listbox.Option,
              {
                className: ({ active }) => classNames5(
                  active ? "bg-rose-500 text-white" : "text-gray-900",
                  "cursor-default select-none p-4 text-sm"
                ),
                value: option,
                children: ({ selected, active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                      "p",
                      {
                        className: selected ? "font-semibold" : "font-normal",
                        children: option.name
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.supply.jsx",
                        lineNumber: 106,
                        columnNumber: 37
                      },
                      this
                    ),
                    selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                      "span",
                      {
                        className: active ? "text-white" : "text-rose-600",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                          import_solid6.CheckIcon,
                          {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/snop.dashboard.supply.jsx",
                            lineNumber: 123,
                            columnNumber: 41
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.supply.jsx",
                        lineNumber: 116,
                        columnNumber: 39
                      },
                      this
                    ) : null
                  ] }, void 0, !0, {
                    fileName: "app/routes/snop.dashboard.supply.jsx",
                    lineNumber: 105,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                    "p",
                    {
                      className: classNames5(
                        active ? "text-rose-200" : "text-gray-500",
                        "mt-2"
                      ),
                      children: option.description
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/snop.dashboard.supply.jsx",
                      lineNumber: 130,
                      columnNumber: 35
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.dashboard.supply.jsx",
                  lineNumber: 104,
                  columnNumber: 33
                }, this)
              },
              option.name,
              !1,
              {
                fileName: "app/routes/snop.dashboard.supply.jsx",
                lineNumber: 91,
                columnNumber: 29
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.supply.jsx",
              lineNumber: 89,
              columnNumber: 25
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/snop.dashboard.supply.jsx",
            lineNumber: 82,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 65,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 64,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 62,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.dashboard.supply.jsx",
      lineNumber: 54,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.supply.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      CardLayout,
      {
        mode: mode2.name === "Review" ? reviewTabs4 : meetingTabs4,
        tab: mode2.name === "Review" ? reviewIndex : meetingIndex,
        kpiData: kpiService_m5
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 384,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.supply.jsx",
      lineNumber: 383,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.dashboard.supply.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/snop.dashboard.sales.jsx
var snop_dashboard_sales_exports = {};
__export(snop_dashboard_sales_exports, {
  default: () => SalesRoute
});
var import_react20 = require("react"), import_react21 = require("@headlessui/react"), import_solid7 = require("@heroicons/react/20/solid"), import_outline4 = require("@heroicons/react/24/outline"), import_react22 = require("@remix-run/react");

// app/kendo/charts/donut/WrapperDonutChart.jsx
var import_kendoDonutChart = __toESM(require_kendoDonutChart()), import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), Fallback8 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("svg", { width: 20, height: 20, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
  "path",
  {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 0,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  void 0,
  !1,
  {
    fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
    lineNumber: 7,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
  lineNumber: 6,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
  lineNumber: 5,
  columnNumber: 12
}, this);
function WrapperDonutChart({ series }) {
  return typeof document < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_kendoDonutChart.DonutChartContainer, { series }, void 0, !1, {
    fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
    lineNumber: 20,
    columnNumber: 46
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Fallback8, {}, void 0, !1, {
    fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
    lineNumber: 20,
    columnNumber: 88
  }, this);
}

// app/kendo/rawData/dashboard/salesDashboard.js
var leadData_m = [
  {
    category: "Dirtect mail",
    value: 0.2545
  },
  {
    category: "E-Mail",
    value: 0.1552
  },
  {
    category: "Phone",
    value: 0.4059
  },
  {
    category: "Sales visit",
    value: 0.0911
  },
  {
    category: "Twitter",
    value: 0.0933
  },
  {
    category: "Web",
    value: 0.0933
  }
], campaignCategories_m2 = ["Jan", "Feb", "Mar", "Apr", "May"], campaignSeries_m2 = [
  {
    name: "",
    data: [8, 2, 6, 2, 8]
  }
], pipelineCategories_m2 = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], pipelineSeries_m2 = [
  {
    name: "Event",
    data: [300, 323, 634, 943, 1e3, 1200]
  },
  {
    name: "Newsletter",
    data: [520, 267, 831, 596, 700, 800]
  },
  {
    name: "Nurture",
    data: [145, 524, 600, 423, 500, 600]
  },
  {
    name: "Product Updates",
    data: [145, 524, 600, 423, 500, 600]
  },
  {
    name: "Promotion",
    data: [145, 524, 600, 423, 500, 600]
  }
], openCategories_m = [
  "Jan",
  "Feb",
  "Mar",
  "Apr"
], openSeries_m = [
  {
    name: "Event",
    data: [300, 323, 634, 943]
  }
], wonCategories_m2 = ["Lost", "Won"], wonSeries_m2 = [
  {
    name: "Call",
    data: [200, 600]
  },
  {
    name: "Demo",
    data: [100, 200]
  },
  {
    name: "E-mail",
    data: [0, 0]
  },
  {
    name: "Meeting",
    data: [50, 100]
  }
], productCategories_m = ["Fit", "Gladia", "Ninja", "Optim", "Refresh", "Soul", "Vibrance", "Welleness", "Xerves"], productSeries_m = [
  {
    name: "Created",
    data: [50, 0, 10, 0, 0, 0, 0, 80]
  },
  {
    name: "Ordered",
    data: [60, 50, 60, 50, 70, 30, 20, 100]
  },
  {
    name: "Rejected",
    data: [200, 50, 150, 50, 100, 100, 50, 50]
  }
], activeCategories_m = ["Custom", "Modal", "Standard"], activeSeries_m = [
  {
    name: "",
    data: [300, 323, 634]
  }
], criticalCategories_m = ["APT", "BEM", "HLS", "SCR"], criticalSeries_m = [
  {
    name: "Austin",
    data: [8, 6, 7, 5]
  }
];

// app/data/dashboard/salesData.js
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
var kpiService_m6 = [
  {
    Name: "Lead Conversion Rate",
    Value: "14.91",
    Trend: "up",
    TargetAch: "83",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(WrapperDonutChart, { series: leadData_m }, void 0, !1, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 28,
      columnNumber: 15
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/pipelineAnalysis"
  },
  {
    Name: "Campaign ROI",
    Value: "4.33",
    Trend: "up",
    TargetAch: "$291.96",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(WrapperMultiBarChart, { category: campaignCategories_m2, series: campaignSeries_m2 }, void 0, !1, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 38,
      columnNumber: 15
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/pipelineAnalysis"
  },
  {
    Name: "Campaign Attributed Pipeline",
    Value: "7.49M",
    Trend: "down",
    TargetAch: 0,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(WrapperMultiStackColChart, { category: pipelineCategories_m2, series: pipelineSeries_m2 }, void 0, !1, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 47,
      columnNumber: 16
    }, this),
    status: "On Track",
    Analyze: "/demo/dashboard/analysis/pipelineAnalysis"
  },
  {
    Name: "Open Pipeline",
    Value: "$10.02M",
    Trend: "down",
    TargetAch: "$47.13k",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(WrapperMultiColumnChart, { category: openCategories_m, series: openSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 56,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/pipelineAnalysis"
  },
  {
    Name: "Activity Rate - Won Oppty",
    Value: "3.61",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(WrapperMultiStackColChart, { category: wonCategories_m2, series: wonSeries_m2 }, void 0, !1, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 65,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/wonAnalysis"
  },
  {
    Name: "Avg Contract Value by Product",
    Value: "$968.20k",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(WrapperMultiStackColChart, { category: productCategories_m, series: productSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 74,
      columnNumber: 16
    }, this),
    status: "On Track",
    Analyze: "/demo/dashboard/analysis/quoteAnalysis"
  },
  {
    Name: "Active MRR",
    Value: "$130.80M",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(WrapperMultiColumnChart, { category: activeCategories_m, series: activeSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 83,
      columnNumber: 16
    }, this),
    status: "/demo/dashboard/analysis/winAnalysis"
  },
  {
    Name: "Open Critical SRs",
    Value: "7",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(WrapperMultiColumnChart, { category: criticalCategories_m, series: criticalSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 91,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/wonAnalysis"
  }
];

// app/routes/snop.dashboard.sales.jsx
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function classNames6(...classes) {
  return classes.filter(Boolean).join(" ");
}
function SalesRoute() {
  let emptyStyles = { background: "#ef4444" }, progressStyles = { background: "#22c55e" }, items2 = [
    {
      id: 1,
      name: "Review",
      description: "Conduct periodic (month/quarter/year) performance review of key business KPIs",
      to: "review"
    },
    {
      id: 2,
      name: "Meeting",
      description: "Conduct daily/weekly data driven meetings and create plan of action ",
      to: "meeting"
    }
  ], centericon = [
    { name: "Download as PDF", icon: import_solid7.DocumentArrowDownIcon },
    { name: "Email KPIs", icon: import_solid7.ShareIcon },
    { name: "Copy as Image", icon: import_solid7.ClipboardDocumentCheckIcon }
  ], [mode2, setMode] = (0, import_react20.useState)(items2[0]), reviewTabs4 = ["Month", "Quarter", "Year"], [reviewIndex, setReviewIndex] = (0, import_react20.useState)(0), meetingTabs4 = ["Daily", "Weekly"], [meetingIndex, setMeetingIndex] = (0, import_react20.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_jsx_dev_runtime38.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Demand Dashboard" }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react21.Listbox, { value: mode2, onChange: setMode, children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_jsx_dev_runtime38.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              import_solid7.CheckIcon,
              {
                className: "-ml-0.5 h-5 w-5 ",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.dashboard.sales.jsx",
                lineNumber: 74,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-sm font-semibold", children: mode2.name }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.sales.jsx",
              lineNumber: 78,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.dashboard.sales.jsx",
            lineNumber: 73,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react21.Listbox.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            import_solid7.ChevronDownIcon,
            {
              className: "h-5 w-5 text-white",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/snop.dashboard.sales.jsx",
              lineNumber: 81,
              columnNumber: 27
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/snop.dashboard.sales.jsx",
            lineNumber: 80,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.dashboard.sales.jsx",
          lineNumber: 72,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
          import_react21.Transition,
          {
            show: open,
            as: import_react20.Fragment,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react21.Listbox.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items2.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              import_react21.Listbox.Option,
              {
                className: ({ active }) => classNames6(
                  active ? "bg-rose-500 text-white" : "text-gray-900",
                  "cursor-default select-none p-4 text-sm"
                ),
                value: option,
                children: ({ selected, active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                      "p",
                      {
                        className: selected ? "font-semibold" : "font-normal",
                        children: option.name
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.sales.jsx",
                        lineNumber: 112,
                        columnNumber: 37
                      },
                      this
                    ),
                    selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                      "span",
                      {
                        className: active ? "text-white" : "text-rose-600",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                          import_solid7.CheckIcon,
                          {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/snop.dashboard.sales.jsx",
                            lineNumber: 129,
                            columnNumber: 41
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.sales.jsx",
                        lineNumber: 122,
                        columnNumber: 39
                      },
                      this
                    ) : null
                  ] }, void 0, !0, {
                    fileName: "app/routes/snop.dashboard.sales.jsx",
                    lineNumber: 111,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                    "p",
                    {
                      className: classNames6(
                        active ? "text-rose-200" : "text-gray-500",
                        "mt-2"
                      ),
                      children: option.description
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/snop.dashboard.sales.jsx",
                      lineNumber: 136,
                      columnNumber: 35
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.dashboard.sales.jsx",
                  lineNumber: 110,
                  columnNumber: 33
                }, this)
              },
              option.name,
              !1,
              {
                fileName: "app/routes/snop.dashboard.sales.jsx",
                lineNumber: 97,
                columnNumber: 29
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.sales.jsx",
              lineNumber: 95,
              columnNumber: 25
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/snop.dashboard.sales.jsx",
            lineNumber: 88,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 71,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 70,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 68,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.dashboard.sales.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.sales.jsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      CardLayout,
      {
        mode: mode2.name === "Review" ? reviewTabs4 : meetingTabs4,
        tab: mode2.name === "Review" ? reviewIndex : meetingIndex,
        kpiData: kpiService_m6
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 205,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.sales.jsx",
      lineNumber: 204,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.dashboard.sales.jsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/routes/snop.dashboard.spend.jsx
var snop_dashboard_spend_exports = {};
__export(snop_dashboard_spend_exports, {
  default: () => SpendRoute
});
var import_react23 = require("react"), import_react24 = require("@headlessui/react"), import_solid8 = require("@heroicons/react/20/solid");

// app/kendo/rawData/dashboard/spendDashboard.js
var totalSpend_m = [
  {
    category: "Direct1",
    value: 26.47
  },
  {
    category: "Online2",
    value: 0.09
  },
  {
    category: "Partner3",
    value: 0.28
  },
  {
    category: "Direct4",
    value: 0.08
  },
  {
    category: "Online5",
    value: 3.14
  },
  {
    category: "Partner6",
    value: 15.65
  },
  {
    category: "Direct7",
    value: 7.76
  },
  {
    category: "Online8",
    value: 16.2
  },
  {
    category: "Partner9",
    value: 9.25
  },
  {
    category: "Online10",
    value: 0
  },
  {
    category: "Partner11",
    value: 17.74
  },
  {
    category: "Partner12",
    value: 3.35
  }
], addressableCategories_m = ["2019Q2", "2019Q3", "2019Q4", "2020Q1", "2020Q2", "2020Q3"], addressableSeries_m = [
  {
    name: "Addressable",
    data: [80, 85, 90, 95, 95, 95]
  },
  {
    name: "Total Spend",
    data: [90, 95, 95, 120, 120, 120]
  }
], leakageCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], leakageSeries_m = [
  {
    name: "Off-Contract",
    data: [5, 15, 10, 5, 10, 15]
  },
  {
    name: "Contract",
    data: [75, 70, 75, 85, 80, 80]
  }
], offContractCategories_m = ["Hardware", "Production", "Supplies", "Servies", "Maintance", "Team"], offContractSeries_m = [
  {
    name: "",
    data: [70, 70, 80, 90, 90, 90]
  }
], employeeCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"], employeeSeries_m = [
  {
    name: "",
    data: [1.2, 0.7, 1.5, 0.8, 0.9, 0.1, 0.6, 0.7, 0.5]
  }
], savingsCategories_m = ["Electric", "Products", "Manufacturing", "Advanced Crop"], savingsSeries_m = [
  {
    name: "",
    data: [40, 38, 36, 40]
  }
], payableCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], payableSeries_m = [
  {
    name: "",
    data: [40, 45, 40, 38, 36, 40]
  }
], overdueCategories_m2 = ["30 Days", "60 Days", "90 Days"], overdueSeries_m2 = [
  {
    name: "",
    data: [24, 19, 5]
  }
];

// app/data/dashboard/spendData.js
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
var kpiService_m7 = [
  {
    Name: "Total Spend",
    Value: "$128M",
    Trend: "up",
    TargetAch: 5,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(WrapperPieChart, { series: totalSpend_m }, void 0, !1, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 30,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/spendAnalysis"
  },
  {
    Name: "Addressable Spend",
    Value: "$133M",
    Trend: "up",
    TargetAch: 94,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(WrapperMultiColumnChart, { category: addressableCategories_m, series: addressableSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 39,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/spendAnalysis"
  },
  {
    Name: "Contract Leakage",
    Value: "13%",
    Trend: "down",
    TargetAch: 0,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(WrapperMultiColumnChart, { category: leakageCategories_m, series: leakageSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 48,
      columnNumber: 16
    }, this),
    status: "On Track",
    Analyze: "/demo/dashboard/analysis/offContractAnalysis"
  },
  {
    Name: "Off-Contract Spend",
    Value: "$52.37K",
    Trend: "down",
    TargetAch: 47,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(WrapperMultiColumnChart, { category: offContractCategories_m, series: offContractSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 57,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/offContractAnalysis"
  },
  {
    Name: "Employee Expenses",
    Value: "$8M",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(WrapperMultiColumnChart, { category: employeeCategories_m, series: employeeSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 66,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/expenseAnalysis"
  },
  {
    Name: "Realized Savings",
    Value: "$10M",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(WrapperMultiLineChart, { category: savingsCategories_m, series: savingsSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 75,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/apAnalysis"
  },
  {
    Name: "Days Payable Outstanding",
    Value: "40",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(WrapperMultiColumnChart, { category: payableCategories_m, series: payableSeries_m }, void 0, !1, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 84,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/apAnalysis"
  },
  {
    Name: "AP OverDue",
    Value: "$51M",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(WrapperMultiBarChart, { category: overdueCategories_m2, series: overdueSeries_m2 }, void 0, !1, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 93,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/categoryAnalysis"
  }
];

// app/routes/snop.dashboard.spend.jsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function classNames7(...classes) {
  return classes.filter(Boolean).join(" ");
}
function SpendRoute() {
  let items2 = [
    {
      id: 1,
      name: "Review",
      description: "Conduct periodic (month/quarter/year) performance review of key business KPIs",
      to: "review"
    },
    {
      id: 2,
      name: "Meeting",
      description: "Conduct daily/weekly data driven meetings and create plan of action ",
      to: "meeting"
    }
  ], centericon = [
    { name: "Download as PDF", icon: import_solid8.DocumentArrowDownIcon },
    { name: "Email KPIs", icon: import_solid8.ShareIcon },
    { name: "Copy as Image", icon: import_solid8.ClipboardDocumentCheckIcon }
  ], [mode2, setMode] = (0, import_react23.useState)(items2[0]), reviewTabs4 = ["Month", "Quarter", "Year"], [reviewIndex, setReviewIndex] = (0, import_react23.useState)(0), meetingTabs4 = ["Daily", "Weekly"], [meetingIndex, setMeetingIndex] = (0, import_react23.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Demand Dashboard" }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 55,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react24.Listbox, { value: mode2, onChange: setMode, children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
              import_solid8.CheckIcon,
              {
                className: "-ml-0.5 h-5 w-5 ",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.dashboard.spend.jsx",
                lineNumber: 67,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "text-sm font-semibold", children: mode2.name }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.spend.jsx",
              lineNumber: 71,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.dashboard.spend.jsx",
            lineNumber: 66,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react24.Listbox.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            import_solid8.ChevronDownIcon,
            {
              className: "h-5 w-5 text-white",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/snop.dashboard.spend.jsx",
              lineNumber: 74,
              columnNumber: 27
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/snop.dashboard.spend.jsx",
            lineNumber: 73,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.dashboard.spend.jsx",
          lineNumber: 65,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
          import_react24.Transition,
          {
            show: open,
            as: import_react23.Fragment,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react24.Listbox.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items2.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
              import_react24.Listbox.Option,
              {
                className: ({ active }) => classNames7(
                  active ? "bg-rose-500 text-white" : "text-gray-900",
                  "cursor-default select-none p-4 text-sm"
                ),
                value: option,
                children: ({ selected, active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
                      "p",
                      {
                        className: selected ? "font-semibold" : "font-normal",
                        children: option.name
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.spend.jsx",
                        lineNumber: 105,
                        columnNumber: 37
                      },
                      this
                    ),
                    selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
                      "span",
                      {
                        className: active ? "text-white" : "text-rose-600",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
                          import_solid8.CheckIcon,
                          {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/snop.dashboard.spend.jsx",
                            lineNumber: 122,
                            columnNumber: 41
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.dashboard.spend.jsx",
                        lineNumber: 115,
                        columnNumber: 39
                      },
                      this
                    ) : null
                  ] }, void 0, !0, {
                    fileName: "app/routes/snop.dashboard.spend.jsx",
                    lineNumber: 104,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
                    "p",
                    {
                      className: classNames7(
                        active ? "text-rose-200" : "text-gray-500",
                        "mt-2"
                      ),
                      children: option.description
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/snop.dashboard.spend.jsx",
                      lineNumber: 129,
                      columnNumber: 35
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.dashboard.spend.jsx",
                  lineNumber: 103,
                  columnNumber: 33
                }, this)
              },
              option.name,
              !1,
              {
                fileName: "app/routes/snop.dashboard.spend.jsx",
                lineNumber: 90,
                columnNumber: 29
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/snop.dashboard.spend.jsx",
              lineNumber: 88,
              columnNumber: 25
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/snop.dashboard.spend.jsx",
            lineNumber: 81,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 64,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 63,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 61,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 60,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.dashboard.spend.jsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.spend.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      CardLayout,
      {
        mode: mode2.name === "Review" ? reviewTabs4 : meetingTabs4,
        tab: mode2.name === "Review" ? reviewIndex : meetingIndex,
        kpiData: kpiService_m7
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 198,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/snop.dashboard.spend.jsx",
      lineNumber: 197,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.dashboard.spend.jsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/routes/demo.chatbackup.jsx
var demo_chatbackup_exports = {};
__export(demo_chatbackup_exports, {
  default: () => Demo
});
var import_react25 = require("react"), import_solid9 = require("@heroicons/react/20/solid"), import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function formatText(text) {
  return text.replace(/\*([^\*]+)\*/g, "<strong>$1</strong>").replace(/_([^_]+)_/g, "<em>$1</em>").replace(/- ([^\n]+)/g, "<li>$1</li>").split(`
`).map((item, index) => item.startsWith("<li>") ? /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("li", { children: item.substring(4, item.length - 5) }, void 0, !1, {
    fileName: "app/routes/demo.chatbackup.jsx",
    lineNumber: 19,
    columnNumber: 11
  }, this) }, index, !1, {
    fileName: "app/routes/demo.chatbackup.jsx",
    lineNumber: 18,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { dangerouslySetInnerHTML: { __html: item } }, index, !1, {
    fileName: "app/routes/demo.chatbackup.jsx",
    lineNumber: 23,
    columnNumber: 14
  }, this));
}
function handleChatGPTStream(prompt, onData) {
  let eventSource = new EventSource(
    `/demo/gpt?prompt=${encodeURIComponent(prompt)}`
  );
  eventSource.onmessage = (event) => {
    let data2 = JSON.parse(event.data);
    if (data2.type === "done")
      eventSource.close();
    else {
      let content = data2?.choices?.[0]?.delta?.content;
      content && onData(content);
    }
  }, eventSource.onerror = (event) => {
    console.error("EventSource failed:", event), eventSource.close();
  };
}
function Demo({ aiMessage }) {
  let [messages, setMessages] = (0, import_react25.useState)([]), [isSubmitting, setIsSubmitting] = (0, import_react25.useState)(!1), endOfMessagesRef = (0, import_react25.useRef)(null), textareaRef = (0, import_react25.useRef)(null), appendToLastMessage = (newText) => {
    setMessages((prevMessages) => {
      let lastMessage = prevMessages[prevMessages.length - 1];
      return lastMessage && lastMessage.role === "gpt" ? [
        ...prevMessages.slice(0, -1),
        { ...lastMessage, content: lastMessage.content + newText }
      ] : [...prevMessages, { role: "gpt", content: newText }];
    });
  }, handleSubmit = (e) => {
    e.preventDefault(), setIsSubmitting(!0);
    let prompt = new FormData(e.target).get("prompt");
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: prompt }
    ]), textareaRef.current.value = "", handleChatGPTStream(prompt, appendToLastMessage, () => {
      setIsSubmitting(!1), console.log("Streaming complete");
    });
  };
  return (0, import_react25.useEffect)(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]), /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex h-screen flex-col items-center p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "w-full max-w-7xl flex-grow overflow-auto", children: [
      messages.map(
        (msg, index) => msg.role === "user" ? /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          "div",
          {
            className: "h-15 my-2 flex self-end rounded-lg border bg-blue-500 p-4 text-gray-200",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "mr-2 flex flex-shrink-0 flex-col items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_solid9.ChatBubbleOvalLeftEllipsisIcon, { className: "h-6 w-6 text-rose-500" }, void 0, !1, {
                fileName: "app/routes/demo.chatbackup.jsx",
                lineNumber: 101,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/demo.chatbackup.jsx",
                lineNumber: 100,
                columnNumber: 15
              }, this),
              formatText(msg.content)
            ]
          },
          index,
          !0,
          {
            fileName: "app/routes/demo.chatbackup.jsx",
            lineNumber: 96,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          "div",
          {
            className: "my-2 flex self-end rounded-lg border bg-blue-500/50 p-4 text-gray-200",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "mr-2 flex flex-shrink-0 flex-col items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_solid9.UserCircleIcon, { className: "h-6 w-6 text-gray-500" }, void 0, !1, {
                fileName: "app/routes/demo.chatbackup.jsx",
                lineNumber: 111,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/demo.chatbackup.jsx",
                lineNumber: 110,
                columnNumber: 15
              }, this),
              formatText(msg.content)
            ]
          },
          index,
          !0,
          {
            fileName: "app/routes/demo.chatbackup.jsx",
            lineNumber: 106,
            columnNumber: 13
          },
          this
        )
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { ref: endOfMessagesRef }, void 0, !1, {
        fileName: "app/routes/demo.chatbackup.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo.chatbackup.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("form", { onSubmit: handleSubmit, className: "flex w-full max-w-4xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex-grow rounded-md border border-gray-300 p-2 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          "textarea",
          {
            required: !0,
            name: "prompt",
            id: "prompt",
            ref: textareaRef,
            className: "text-lg",
            style: { resize: "none" }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo.chatbackup.jsx",
            lineNumber: 122,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: `ml-2  rounded-md p-2 text-white ${isSubmitting ? "opacity-50" : ""}`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_solid9.PaperAirplaneIcon, { className: "h-5 w-5 text-gray-500" }, void 0, !1, {
              fileName: "app/routes/demo.chatbackup.jsx",
              lineNumber: 137,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo.chatbackup.jsx",
            lineNumber: 130,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/demo.chatbackup.jsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: `m-1 flex items-center justify-center rounded-md bg-blue-500 p-2 ${isSubmitting ? "opacity-50" : ""}`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_solid9.ArrowUpTrayIcon, { className: "h-5 w-5 text-gray-100" }, void 0, !1, {
              fileName: "app/routes/demo.chatbackup.jsx",
              lineNumber: 149,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo.chatbackup.jsx",
            lineNumber: 142,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: `m-1 flex items-center justify-center rounded-md bg-blue-500 p-2 ${isSubmitting ? "opacity-50" : ""}`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_solid9.AdjustmentsVerticalIcon, { className: "h-5 w-5 text-gray-100" }, void 0, !1, {
              fileName: "app/routes/demo.chatbackup.jsx",
              lineNumber: 158,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/demo.chatbackup.jsx",
            lineNumber: 151,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/demo.chatbackup.jsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo.chatbackup.jsx",
      lineNumber: 120,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demo.chatbackup.jsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/routes/snop.chatchart.jsx
var snop_chatchart_exports = {};
__export(snop_chatchart_exports, {
  default: () => MyComponent
});
var import_react26 = require("react"), import_react27 = require("@remix-run/react"), import_react28 = require("@headlessui/react"), import_solid10 = require("@heroicons/react/20/solid");

// app/kendo/rawData/dashboard/demandDashboard.js
var shipmentsData_m = [
  {
    category: "Direct",
    value: 41.73
  },
  {
    category: "Online",
    value: 18.7
  },
  {
    category: "Partner",
    value: 39.57
  }
], cancelCategories_m = ["APAC", "EMEA", "LATAM", "NA"], cancelSeries_m = [
  {
    name: "Invoiced Amount",
    data: [100, 300, 200, 343]
  },
  {
    name: "Order Amount",
    data: [350, 500, 300, 650]
  }
], mapeCategories_m2 = ["APAC", "EMEA", "LATAM", "NA"], mapeSeries_m2 = [
  {
    name: "Invoiced Amount",
    data: [100, 300, 200, 343]
  },
  {
    name: "Order Amount",
    data: [350, 500, 300, 650]
  }
], locationCategories_m = ["ARG", "ARB", "BEM", "BRZ", "COL", "FRN", "GER", "HLS", "IND", "ITA", "MEX", "SFO", "SIG", "SPA", "SRC"], locationSeries_m = [
  {
    name: "",
    data: [70, 55, 30, 25, 10, 40, 30, 27, 37, 50, 37, 80, 37, 10, 10]
  },
  ,
];
var lateCategories_m2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], lateSeries_m2 = [
  {
    name: "",
    data: [100, 123, 234, 343, 123, 234]
  }
], ontimeCategories_m2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], ontimeSeries_m2 = [
  {
    name: "Japan",
    data: [60, 62, 64, 80, 70, 90]
  }
], perfectCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], perfectFirstSeries_m = [{
  name: "",
  data: [78, 55, 62, 74, 70]
}], invoiceCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"], invoiceSeries_m = [
  {
    name: "Austin",
    data: [123, 276, 310, 212, 240]
  },
  {
    name: "Nashvile",
    data: [13, 26, 30, 21, 40]
  },
  {
    name: "Seattle",
    data: [23, 76, 10, 21, 20]
  }
];

// app/data/dashboard/demandData.js
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
var kpiChat = [
  {
    Name: "Shipments by channel",
    Value: "$357M",
    Trend: "up",
    TargetAch: 75,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(WrapperPieChart, { series: shipmentsData_m }, void 0, !1, {
      fileName: "app/data/dashboard/demandData.js",
      lineNumber: 44,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "Cancellations",
    Value: "$15M",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      WrapperMultiBarChart,
      {
        category: cancelCategories_m,
        series: cancelSeries_m
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/demandAnalysis"
  }
], kpiService_m8 = [
  {
    Name: "Shipments by channel",
    Value: "$357M",
    Trend: "up",
    TargetAch: 75,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(WrapperPieChart, { series: shipmentsData_m }, void 0, !1, {
      fileName: "app/data/dashboard/demandData.js",
      lineNumber: 70,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "Cancellations",
    Value: "$15M",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      WrapperMultiBarChart,
      {
        category: cancelCategories_m,
        series: cancelSeries_m
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 80,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "MAPE",
    Value: "80%",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: mapeCategories_m2,
        series: mapeSeries_m2
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 94,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Analyze: "/demo/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "Top return locations",
    Value: "$27M",
    Trend: "down",
    TargetAch: 50,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: locationCategories_m,
        series: locationSeries_m
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 108,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "Late Shipments",
    Value: "$361.89M",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: lateCategories_m2,
        series: lateSeries_m2
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 122,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Analyze: "/demo/dashboard/analysis/orderAnalysis"
  },
  {
    Name: "On Time Shipment %",
    Value: "73.8%",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      WrapperMultiAreaChart,
      {
        category: ontimeCategories_m2,
        series: ontimeSeries_m2
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 136,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "Perfect Order %",
    Value: "$300M",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      WrapperMultiBarChart,
      {
        category: perfectCategories_m,
        series: perfectFirstSeries_m
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 150,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Analyze: "/demo/dashboard/analysis/orderAnalysis"
  },
  {
    Name: "Order to Invoice Cycle Time",
    Value: "75",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: invoiceCategories_m,
        series: invoiceSeries_m
      },
      void 0,
      !1,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 164,
        columnNumber: 7
      },
      this
    ),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/orderAnalysis"
  }
];

// app/routes/snop.chatchart.jsx
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function handleChatGPTStream2(prompt, onData) {
  let eventSource = new EventSource(
    `/demo/gpt?prompt=${encodeURIComponent(prompt)}`
  );
  eventSource.onmessage = (event) => {
    let data2 = JSON.parse(event.data);
    if (data2.type === "done")
      eventSource.close();
    else {
      let content = data2?.choices?.[0]?.delta?.content;
      content && onData(content);
    }
  }, eventSource.onerror = (event) => {
    console.error("EventSource failed:", event), eventSource.close();
  };
}
var tabs = [
  { name: "Conversations", href: "#", count: "52", current: !1 },
  { name: "Prompts", href: "#", count: "6", current: !0 }
];
function classNames8(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MyComponent() {
  let [messages, setMessages] = (0, import_react26.useState)([]), [isSidebarOpen, setIsSidebarOpen] = (0, import_react26.useState)(!1), [isSubmitting, setIsSubmitting] = (0, import_react26.useState)(!1), endOfMessagesRef = (0, import_react26.useRef)(null), textareaRef = (0, import_react26.useRef)(null), toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }, appendToLastMessage = (newText) => {
    setMessages((prevMessages) => {
      let lastMessage = prevMessages[prevMessages.length - 1];
      return lastMessage && lastMessage.role === "gpt" ? [
        ...prevMessages.slice(0, -1),
        { ...lastMessage, content: lastMessage.content + newText }
      ] : [...prevMessages, { role: "gpt", content: newText }];
    });
  }, handleSubmit = (e) => {
    e.preventDefault(), setIsSubmitting(!0);
    let prompt = new FormData(e.target).get("prompt");
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: prompt }
    ]), textareaRef.current.value = "", handleChatGPTStream2(prompt, appendToLastMessage, () => {
      setIsSubmitting(!1), console.log("Streaming complete");
    });
  };
  return (0, import_react26.useEffect)(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]), /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: `flex ${isSidebarOpen ? "" : "xl:flex"} h-screen`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex h-screen w-full flex-col items-center bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "w-full shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex justify-between items-center h-16 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", {}, void 0, !1, {
          fileName: "app/routes/snop.chatchart.jsx",
          lineNumber: 147,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg m-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex items-center justify-center p-1 rounded-full bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
          "img",
          {
            className: "cursor-poniter mx-auto h-10 w-10 justify-center ",
            src: "/assets/logo-4.png",
            alt: "logo"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 150,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/snop.chatchart.jsx",
          lineNumber: 149,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/snop.chatchart.jsx",
          lineNumber: 148,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex justify-end items-center mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
          "button",
          {
            type: "button",
            className: "rounded-full h-10 w-10 bg-sky-500 p-1.5 font-semibold text-white shadow-sm ",
            onClick: toggleSidebar,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
              import_solid10.ChevronLeftIcon,
              {
                className: " flex items-center h-6 w-6",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.chatchart.jsx",
                lineNumber: 177,
                columnNumber: 19
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 172,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/snop.chatchart.jsx",
          lineNumber: 171,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/snop.chatchart.jsx",
        lineNumber: 146,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.chatchart.jsx",
        lineNumber: 145,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "max-w-7xl w-4/6 mx-auto  flex-grow overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mx-auto mt-2 flex w-full max-w-full text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg bg-white border text-blue-900 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_solid10.ChatBubbleOvalLeftEllipsisIcon, { className: "h-6 w-6" }, void 0, !1, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 188,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 187,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "relative inset-0 mx-2 flex w-full flex-col rounded-lg border p-4 text-gray-800 shadow-lg bg-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "font-semibold text-blue-900", children: "ChatGPT" }, void 0, !1, {
              fileName: "app/routes/snop.chatchart.jsx",
              lineNumber: 192,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "break-words text-lg", children: "Hello! It's great to connect with you. How can I assist you today?" }, void 0, !1, {
              fileName: "app/routes/snop.chatchart.jsx",
              lineNumber: 193,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 191,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.chatchart.jsx",
          lineNumber: 186,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "my-4 flex text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
            "img",
            {
              className: "h-10 w-10 rounded-lg",
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              alt: "profile"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/snop.chatchart.jsx",
              lineNumber: 203,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 202,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mx-2 w-full p-0.5 rounded-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
              "div",
              {
                className: `flex\r
          w-full flex-col relative  bg-white p-4 shadow rounded-lg `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { className: "text-base font-medium text-gray-900", children: "What would you have done differently if you ran Jurassic Park?" }, void 0, !1, {
                    fileName: "app/routes/snop.chatchart.jsx",
                    lineNumber: 215,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "mt-1 break-words text-lg", children: "Hello! It great to connect with you. How can I assist you today?, Hello! It great to connect with you. How can I assist you today?, Hello! It great to connect with you. How can I assist you today?" }, void 0, !1, {
                    fileName: "app/routes/snop.chatchart.jsx",
                    lineNumber: 219,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mt-4 pt-2 flex justify-between border-t", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex space-x-4", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "inline-flex  text-gray-400 hover:text-gray-500",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                            import_solid10.HandThumbUpIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/snop.chatchart.jsx",
                              lineNumber: 233,
                              columnNumber: 27
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.chatchart.jsx",
                          lineNumber: 229,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/snop.chatchart.jsx",
                        lineNumber: 228,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                            import_solid10.ChatBubbleLeftEllipsisIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/snop.chatchart.jsx",
                              lineNumber: 244,
                              columnNumber: 27
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.chatchart.jsx",
                          lineNumber: 240,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/snop.chatchart.jsx",
                        lineNumber: 239,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_solid10.EyeIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
                            fileName: "app/routes/snop.chatchart.jsx",
                            lineNumber: 255,
                            columnNumber: 27
                          }, this)
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.chatchart.jsx",
                          lineNumber: 251,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/snop.chatchart.jsx",
                        lineNumber: 250,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/snop.chatchart.jsx",
                      lineNumber: 227,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                      "button",
                      {
                        type: "button",
                        className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_solid10.ShareIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
                          fileName: "app/routes/snop.chatchart.jsx",
                          lineNumber: 265,
                          columnNumber: 27
                        }, this)
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.chatchart.jsx",
                        lineNumber: 261,
                        columnNumber: 25
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/routes/snop.chatchart.jsx",
                      lineNumber: 260,
                      columnNumber: 23
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/snop.chatchart.jsx",
                      lineNumber: 259,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/snop.chatchart.jsx",
                    lineNumber: 226,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/snop.chatchart.jsx",
                lineNumber: 211,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 209,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.chatchart.jsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "my-4 flex text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
            "img",
            {
              className: "h-10 w-10 rounded-lg",
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              alt: "profile"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/snop.chatchart.jsx",
              lineNumber: 278,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 277,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mx-2 w-full p-0.5 rounded-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
              "div",
              {
                className: `flex\r
          w-full flex-col relative  bg-white p-4 shadow rounded-lg `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { className: "text-base font-medium text-gray-900", children: "What would you have done differently if you ran Jurassic Park?" }, void 0, !1, {
                    fileName: "app/routes/snop.chatchart.jsx",
                    lineNumber: 290,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("ul", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 rounded-lg  p-4", children: kpiChat.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                    "li",
                    {
                      className: "col-span-1 flex flex-col divide-y divide-white  bg-white  rounded-lg border shadow-lg",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h3", { className: "text-md mt-2 font-medium text-gray-900", children: kpi.Name }, void 0, !1, {
                            fileName: "app/routes/snop.chatchart.jsx",
                            lineNumber: 305,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h1", { className: "font-display text-d-h3 mb-3 text-4xl font-bold text-black", children: kpi.Value }, void 0, !1, {
                            fileName: "app/routes/snop.chatchart.jsx",
                            lineNumber: 308,
                            columnNumber: 31
                          }, this)
                        ] }, void 0, !0, {
                          fileName: "app/routes/snop.chatchart.jsx",
                          lineNumber: 304,
                          columnNumber: 29
                        }, this) }, void 0, !1, {
                          fileName: "app/routes/snop.chatchart.jsx",
                          lineNumber: 303,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { children: kpi.container }, void 0, !1, {
                          fileName: "app/routes/snop.chatchart.jsx",
                          lineNumber: 313,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/routes/snop.chatchart.jsx",
                        lineNumber: 302,
                        columnNumber: 25
                      }, this)
                    },
                    kpi.Name,
                    !1,
                    {
                      fileName: "app/routes/snop.chatchart.jsx",
                      lineNumber: 298,
                      columnNumber: 23
                    },
                    this
                  )) }, void 0, !1, {
                    fileName: "app/routes/snop.chatchart.jsx",
                    lineNumber: 295,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "pt-2 flex justify-between border-t", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex space-x-4", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "inline-flex  text-gray-400 hover:text-gray-500",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                            import_solid10.HandThumbUpIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/snop.chatchart.jsx",
                              lineNumber: 325,
                              columnNumber: 27
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.chatchart.jsx",
                          lineNumber: 321,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/snop.chatchart.jsx",
                        lineNumber: 320,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                            import_solid10.ChatBubbleLeftEllipsisIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/snop.chatchart.jsx",
                              lineNumber: 336,
                              columnNumber: 27
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.chatchart.jsx",
                          lineNumber: 332,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/snop.chatchart.jsx",
                        lineNumber: 331,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_solid10.EyeIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
                            fileName: "app/routes/snop.chatchart.jsx",
                            lineNumber: 347,
                            columnNumber: 27
                          }, this)
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.chatchart.jsx",
                          lineNumber: 343,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/snop.chatchart.jsx",
                        lineNumber: 342,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/snop.chatchart.jsx",
                      lineNumber: 319,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                      "button",
                      {
                        type: "button",
                        className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_solid10.ShareIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
                          fileName: "app/routes/snop.chatchart.jsx",
                          lineNumber: 357,
                          columnNumber: 27
                        }, this)
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.chatchart.jsx",
                        lineNumber: 353,
                        columnNumber: 25
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/routes/snop.chatchart.jsx",
                      lineNumber: 352,
                      columnNumber: 23
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/snop.chatchart.jsx",
                      lineNumber: 351,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/snop.chatchart.jsx",
                    lineNumber: 318,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/snop.chatchart.jsx",
                lineNumber: 286,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 284,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.chatchart.jsx",
          lineNumber: 276,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/snop.chatchart.jsx",
        lineNumber: 185,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "relative ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
        "button",
        {
          type: "button",
          className: "rounded-full p-2 text-black border shadow-lg",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_solid10.ArrowDownIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 373,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/snop.chatchart.jsx",
          lineNumber: 369,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/snop.chatchart.jsx",
        lineNumber: 368,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
        "form",
        {
          onSubmit: handleSubmit,
          className: "mx-auto flex h-20 w-full max-w-7xl p-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex flex-grow rounded-md bg-gray-100 p-2.5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "textarea",
                {
                  required: !0,
                  name: "prompt",
                  id: "prompt",
                  placeholder: "Message ChatGPT...",
                  ref: textareaRef,
                  className: "flex-grow text-lg bg-gray-100 outline-none",
                  style: { resize: "none" }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.chatchart.jsx",
                  lineNumber: 382,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "button",
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: `ml-2 rounded-md text-white ${isSubmitting ? "opacity-50" : ""}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_solid10.PaperAirplaneIcon, { className: "h-5 w-5 text-gray-500" }, void 0, !1, {
                    fileName: "app/routes/snop.chatchart.jsx",
                    lineNumber: 398,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.chatchart.jsx",
                  lineNumber: 391,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/snop.chatchart.jsx",
              lineNumber: 381,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex text-blue-900 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "button",
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: `mx-2 flex items-center justify-center rounded-md bg-gray-100 p-2.5 ${isSubmitting ? "opacity-50" : ""}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_solid10.ArrowUpTrayIcon, { className: "h-5 w-5 font-bold stroke-2" }, void 0, !1, {
                    fileName: "app/routes/snop.chatchart.jsx",
                    lineNumber: 410,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.chatchart.jsx",
                  lineNumber: 403,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                "button",
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: `flex items-center justify-center rounded-md bg-gray-100 p-2.5 ${isSubmitting ? "opacity-50" : ""}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_solid10.AdjustmentsVerticalIcon, { className: "h-5 w-5 font-bold stroke-2" }, void 0, !1, {
                    fileName: "app/routes/snop.chatchart.jsx",
                    lineNumber: 419,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.chatchart.jsx",
                  lineNumber: 412,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/snop.chatchart.jsx",
              lineNumber: 402,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/snop.chatchart.jsx",
          lineNumber: 377,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/snop.chatchart.jsx",
      lineNumber: 144,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
      "div",
      {
        className: `sidebar bg-slate-50 px-4  ${isSidebarOpen ? "block" : "hidden"} w-96 transition delay-150 duration-300 shadow-lg `,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex  h-screen flex-col gap-y-4 pb-4 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex my-4 justify-between ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
              import_react27.Link,
              {
                href: "#",
                className: "flex rounded-md p-2 mr-2 text-base font-semibold leading-6 bg-white text-blue-900 hover:bg-gray-100 hover:text-gray-200 border",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_solid10.XMarkIcon, { className: "h-6 w-6 shrink-0", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/snop.chatchart.jsx",
                  lineNumber: 436,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.chatchart.jsx",
                lineNumber: 432,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
              import_react27.Link,
              {
                href: "#",
                className: "flex-1 rounded-md px-2 py-2 text-base font-semibold leading-6 bg-white text-blue-900 hover:bg-gray-100 hover:text-gray-white border",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                    import_solid10.ChatBubbleOvalLeftIcon,
                    {
                      className: "h-6 w-6 mr-2",
                      "aria-hidden": "true"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/snop.chatchart.jsx",
                      lineNumber: 443,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "flex items-center text-sm ", children: "New Conversation" }, void 0, !1, {
                    fileName: "app/routes/snop.chatchart.jsx",
                    lineNumber: 447,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.chatchart.jsx",
                  lineNumber: 442,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.chatchart.jsx",
                lineNumber: 438,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 431,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react28.Tab.Group, { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react28.Tab.List, { className: "", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
            import_react28.Tab,
            {
              className: ({ selected }) => classNames8(
                "flex flex-col border-black p-2 text-center text-base font-semibold mx-1 outline-none",
                selected ? "border-b-2 text-blue-900" : "text-gray-400 hover:text-gray-700"
              ),
              children: tab.name
            },
            tab.name,
            !1,
            {
              fileName: "app/routes/snop.chatchart.jsx",
              lineNumber: 457,
              columnNumber: 21
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 455,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 454,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 453,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("nav", { className: "mt-4 flex flex-1 flex-col gap-y-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex flex-1 flex-col ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "bg-white  rounded-md p-4 font-semibold leading-6 border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react27.Link, { className: "flex items-center justify-between text-base text-blue-900 hover:text-gray-700", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { children: "Hello, World!" }, void 0, !1, {
                fileName: "app/routes/snop.chatchart.jsx",
                lineNumber: 478,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "flex items-center justify-between space-x-2 mr-2", children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_solid10.HeartIcon, { className: " h-4 w-4" }, void 0, !1, {
                  fileName: "app/routes/snop.chatchart.jsx",
                  lineNumber: 482,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_solid10.TrashIcon, { className: "h-4 w-4" }, void 0, !1, {
                  fileName: "app/routes/snop.chatchart.jsx",
                  lineNumber: 483,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.chatchart.jsx",
                lineNumber: 480,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.chatchart.jsx",
              lineNumber: 477,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/snop.chatchart.jsx",
              lineNumber: 476,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mt-auto m-2 rounded-md p-2 font-semibold leading-6 text-gray-400  hover:text-gray-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react27.Link, { href: "#", className: "flex items-center justify-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                import_solid10.InformationCircleIcon,
                {
                  className: "h-6 w-6",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.chatchart.jsx",
                  lineNumber: 490,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "flex items-center ml-4 text-lg", children: [
                " ",
                "Information"
              ] }, void 0, !0, {
                fileName: "app/routes/snop.chatchart.jsx",
                lineNumber: 494,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.chatchart.jsx",
              lineNumber: 489,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/snop.chatchart.jsx",
              lineNumber: 488,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 475,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/snop.chatchart.jsx",
            lineNumber: 474,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.chatchart.jsx",
          lineNumber: 430,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.chatchart.jsx",
        lineNumber: 425,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/snop.chatchart.jsx",
    lineNumber: 143,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/snop.chatchart.jsx",
    lineNumber: 142,
    columnNumber: 5
  }, this);
}

// app/routes/notes.$noteId.tsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => NoteDetailsPage,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react29 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/note.server.ts
function getNote({
  id,
  userId
}) {
  return prisma.note.findFirst({
    select: { id: !0, body: !0, title: !0 },
    where: { id, userId }
  });
}
function getNoteListItems({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: !0, title: !0 },
    orderBy: { updatedAt: "desc" }
  });
}
function createNote({
  body,
  title,
  userId
}) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function deleteNote({
  id,
  userId
}) {
  return prisma.note.deleteMany({
    where: { id, userId }
  });
}

// app/routes/notes.$noteId.tsx
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime"), loader3 = async ({ params, request }) => {
  let userId = await requireUserId(request);
  (0, import_tiny_invariant2.default)(params.noteId, "noteId not found");
  let note = await getNote({ id: params.noteId, userId });
  if (!note)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node5.json)({ note });
}, action = async ({ params, request }) => {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant2.default)(params.noteId, "noteId not found"), await deleteNote({ id: params.noteId, userId }), (0, import_node5.redirect)("/notes");
};
function NoteDetailsPage() {
  let data2 = (0, import_react29.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("h3", { className: "text-2xl font-bold", children: data2.note.title }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("p", { className: "py-6", children: data2.note.body }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("hr", { className: "my-4" }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react29.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/notes.$noteId.tsx",
        lineNumber: 43,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react29.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.message
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 58,
    columnNumber: 12
  }, this) : (0, import_react29.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { children: "Note not found" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 66,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 62,
    columnNumber: 12
  }, this);
}

// app/routes/snop.optimize.tsx
var snop_optimize_exports = {};
__export(snop_optimize_exports, {
  action: () => action2,
  default: () => Optimizer
});
var import_react30 = require("react"), import_react31 = require("@remix-run/react");

// app/components/ui/select.tsx
var React8 = __toESM(require("react")), import_react_icons2 = require("@radix-ui/react-icons"), SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime"), Select = SelectPrimitive.Root, SelectGroup = SelectPrimitive.Group, SelectValue = SelectPrimitive.Value, SelectTrigger = React8.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react_icons2.CaretSortIcon, { className: "h-4 w-4 opacity-50" }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 31,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 22,
    columnNumber: 3
  },
  this
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react_icons2.ChevronUpIcon, {}, void 0, !1, {
      fileName: "app/components/ui/select.tsx",
      lineNumber: 50,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 42,
    columnNumber: 3
  },
  this
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react_icons2.ChevronDownIcon, {}, void 0, !1, {
      fileName: "app/components/ui/select.tsx",
      lineNumber: 67,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 59,
    columnNumber: 3
  },
  this
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React8.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(SelectScrollUpButton, {}, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 89,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/select.tsx",
          lineNumber: 90,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(SelectScrollDownButton, {}, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 99,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 78,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 77,
  columnNumber: 3
}, this));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 109,
    columnNumber: 3
  },
  this
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React8.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react_icons2.CheckIcon, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(SelectPrimitive.ItemText, { children }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 134,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 121,
    columnNumber: 3
  },
  this
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 143,
    columnNumber: 3
  },
  this
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// app/routes/snop.optimize.tsx
var import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
var navigation2 = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" }
], action2 = async ({ request }) => {
  let start = (await request.formData()).get("start"), response = await fetch("http://127.0.0.1:5000/optimizer?start=yes", {
    method: "GET"
    // or "POST", depending on your Flask route
  }), data2 = await response.json();
  if (!response.ok)
    throw new Error("Failed to start the optimization process");
  return (0, import_node6.json)(data2);
};
function DemoContainer2({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    "div",
    {
      className: cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 73,
      columnNumber: 5
    },
    this
  );
}
function Optimizer() {
  let data2 = (0, import_react31.useActionData)(), [jobStatus, setJobStatus] = (0, import_react30.useState)("Waiting for job to start..."), [jobId, setJobId] = (0, import_react30.useState)(null);
  return (0, import_react30.useEffect)(() => {
    if (data2?.job_id) {
      setJobId(data2.job_id);
      let intervalId = setInterval(async () => {
        let response = await fetch(
          `http://127.0.0.1:5000/results/${data2.job_id}`
        ), statusData = await response.json();
        response.ok ? (setJobStatus(`Status: ${statusData.status}`), console.log(statusData.status), statusData.status !== "in progress" && clearInterval(intervalId)) : (setJobStatus("Error fetching job status"), clearInterval(intervalId));
      }, 3e3);
      return () => clearInterval(intervalId);
    }
  }, [data2?.job_id]), /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_jsx_dev_runtime46.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
      "nav",
      {
        className: "ml-6 pl-6 flex items-center justify-center",
        "aria-label": "Global",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
          import_react31.Link,
          {
            to: item.to,
            className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200",
            children: item.name
          },
          item.id,
          !1,
          {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 121,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.optimize.tsx",
        lineNumber: 115,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg pb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex items-center  justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Optimizer Dashboard" }, void 0, !1, {
        fileName: "app/routes/snop.optimize.tsx",
        lineNumber: 135,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.optimize.tsx",
        lineNumber: 134,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(DemoContainer2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(CardTitle, { className: "text-2xl flex", children: "Scenario Summary" }, void 0, !1, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 145,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "border-b" }, void 0, !1, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 149,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(CardContent, { className: "grid gap-4 space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("span", { className: "font-semibold", children: "Select for Optimization" }, void 0, !1, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 154,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Select, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(SelectValue, { placeholder: "Scenario" }, void 0, !1, {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 159,
                  columnNumber: 27
                }, this) }, void 0, !1, {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 158,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(SelectGroup, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(SelectLabel, { children: "Fruits" }, void 0, !1, {
                    fileName: "app/routes/snop.optimize.tsx",
                    lineNumber: 163,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(SelectItem, { value: "apple", children: "Apple" }, void 0, !1, {
                    fileName: "app/routes/snop.optimize.tsx",
                    lineNumber: 164,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(SelectItem, { value: "banana", children: "Banana" }, void 0, !1, {
                    fileName: "app/routes/snop.optimize.tsx",
                    lineNumber: 165,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(SelectItem, { value: "blueberry", children: "Blueberry" }, void 0, !1, {
                    fileName: "app/routes/snop.optimize.tsx",
                    lineNumber: 166,
                    columnNumber: 29
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 162,
                  columnNumber: 27
                }, this) }, void 0, !1, {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 161,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 157,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 153,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Spare threshold" }, void 0, !1, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 172,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
                Input,
                {
                  className: "w-[180px]",
                  type: "email",
                  id: "email",
                  placeholder: "20"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 175,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 171,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Number of Knives" }, void 0, !1, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 184,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
                Input,
                {
                  className: "w-[180px]",
                  type: "email",
                  id: "email",
                  placeholder: "0"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 187,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 183,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react31.Form, { className: "flex border-t justify-center pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
              Button,
              {
                type: "submit",
                name: "start",
                value: "yes",
                className: "text-base bg-blue-500  text-white hover:bg-blue-600",
                children: "Optimize"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 196,
                columnNumber: 23
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 195,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 152,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 143,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 142,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(DemoContainer2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(CardHeader, { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(CardTitle, { className: "text-2xl", children: "Optimization Parameters" }, void 0, !1, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 214,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "border-b" }, void 0, !1, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 217,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 213,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(CardContent, { className: "grid gap-4 space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Optimization Status" }, void 0, !1, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 221,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
                Input,
                {
                  className: "w-[290px]",
                  type: "email",
                  id: "email",
                  placeholder: "Completed @ 1:51:32 PM - 2/23/2021"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 224,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 220,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Solver Status" }, void 0, !1, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 233,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
                Input,
                {
                  className: "w-[290px]",
                  type: "email",
                  id: "email",
                  placeholder: "OPTIMAL"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 236,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 232,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Job ID" }, void 0, !1, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 245,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
                Input,
                {
                  className: "w-[290px]",
                  type: "email",
                  id: "email",
                  placeholder: "eeeb3265-3cf4-44f4-944d-ea7dad4c12ed"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 246,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 244,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react31.Form, { className: "flex border-t justify-center pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
              Button,
              {
                type: "submit",
                name: "start",
                value: "yes",
                className: "text-base bg-blue-500  text-white hover:bg-blue-600",
                children: "Log"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 254,
                columnNumber: 23
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 253,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 219,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 212,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 211,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/snop.optimize.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.optimize.tsx",
    lineNumber: 113,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/snop.optimize.tsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
}

// app/routes/snop.scenario.tsx
var snop_scenario_exports = {};
__export(snop_scenario_exports, {
  action: () => action3,
  default: () => TaskPage,
  loader: () => loader4
});
var import_react34 = require("@remix-run/react");

// app/data/ui/data.tsx
var import_react_icons3 = require("@radix-ui/react-icons");
var statuses = [
  {
    value: "Open",
    label: "Open",
    icon: import_react_icons3.QuestionMarkCircledIcon
  },
  {
    value: "Submitted",
    label: "Submitted",
    icon: import_react_icons3.CircleIcon
  },
  {
    value: "In-Progress",
    label: "In Progress",
    icon: import_react_icons3.StopwatchIcon
  },
  {
    value: "Completed",
    label: "Completed",
    icon: import_react_icons3.CheckCircledIcon
  },
  {
    value: "Canceled",
    label: "Canceled",
    icon: import_react_icons3.CrossCircledIcon
  }
], priorities = [
  {
    label: "Low",
    value: "low",
    icon: import_react_icons3.ArrowDownIcon
  },
  {
    label: "Medium",
    value: "medium",
    icon: import_react_icons3.ArrowRightIcon
  },
  {
    label: "High",
    value: "high",
    icon: import_react_icons3.ArrowUpIcon
  }
];

// app/components/data-table-column-header.tsx
var import_react_icons5 = require("@radix-ui/react-icons");

// app/components/ui/dropdown-menu.tsx
var React9 = __toESM(require("react")), DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu")), import_react_icons4 = require("@radix-ui/react-icons");
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime"), DropdownMenu = DropdownMenuPrimitive.Root, DropdownMenuTrigger = DropdownMenuPrimitive.Trigger, DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuSubTrigger = React9.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-800 dark:data-[state=open]:bg-neutral-800",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react_icons4.ChevronRightIcon, { className: "ml-auto h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 39,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 29,
    columnNumber: 3
  },
  this
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white p-1 text-neutral-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 49,
    columnNumber: 3
  },
  this
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React9.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white p-1 text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 66,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 65,
  columnNumber: 3
}, this));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React9.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 86,
    columnNumber: 3
  },
  this
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React9.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react_icons4.CheckIcon, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 112,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 111,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 102,
    columnNumber: 3
  },
  this
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React9.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react_icons4.DotFilledIcon, { className: "h-4 w-4 fill-current" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 135,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 134,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 126,
    columnNumber: 3
  },
  this
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React9.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 150,
    columnNumber: 3
  },
  this
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 166,
    columnNumber: 3
  },
  this
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
  "span",
  {
    className: cn("ml-auto text-xs tracking-widest opacity-60", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 179,
    columnNumber: 5
  },
  this
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// app/components/data-table-column-header.tsx
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function DataTableColumnHeader({
  column,
  title,
  className
}) {
  return column.getCanSort() ? /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: cn("flex items-center space-x-2", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
      Button,
      {
        variant: "ghost",
        size: "sm",
        className: "-ml-3 h-8 data-[state=open]:bg-accent",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("span", { children: title }, void 0, !1, {
            fileName: "app/components/data-table-column-header.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          column.getIsSorted() === "desc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_react_icons5.ArrowDownIcon, { className: "ml-2 h-4 w-4" }, void 0, !1, {
            fileName: "app/components/data-table-column-header.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this) : column.getIsSorted() === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_react_icons5.ArrowUpIcon, { className: "ml-2 h-4 w-4" }, void 0, !1, {
            fileName: "app/components/data-table-column-header.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_react_icons5.CaretSortIcon, { className: "ml-2 h-4 w-4" }, void 0, !1, {
            fileName: "app/components/data-table-column-header.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 39,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/data-table-column-header.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(DropdownMenuContent, { align: "start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(DropdownMenuItem, { onClick: () => column.toggleSorting(!1), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_react_icons5.ArrowUpIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }, void 0, !1, {
          fileName: "app/components/data-table-column-header.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        "Asc"
      ] }, void 0, !0, {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(DropdownMenuItem, { onClick: () => column.toggleSorting(!0), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_react_icons5.ArrowDownIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }, void 0, !1, {
          fileName: "app/components/data-table-column-header.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        "Desc"
      ] }, void 0, !0, {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(DropdownMenuSeparator, {}, void 0, !1, {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(DropdownMenuItem, { onClick: () => column.toggleVisibility(!1), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_react_icons5.EyeNoneIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }, void 0, !1, {
          fileName: "app/components/data-table-column-header.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        "Hide"
      ] }, void 0, !0, {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/data-table-column-header.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/data-table-column-header.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/data-table-column-header.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: cn(className), children: title }, void 0, !1, {
    fileName: "app/components/data-table-column-header.tsx",
    lineNumber: 32,
    columnNumber: 12
  }, this);
}

// app/components/data-table-row-actions.tsx
var import_react_icons6 = require("@radix-ui/react-icons");

// app/data/ui/schema.ts
var import_zod = require("zod"), taskSchema = import_zod.z.object({
  scenario_id: import_zod.z.string(),
  description: import_zod.z.string(),
  CreatedAt: import_zod.z.string(),
  UpdatedAt: import_zod.z.string(),
  module: import_zod.z.string(),
  Status: import_zod.z.string()
});

// app/components/data-table-row-actions.tsx
var import_react32 = require("@remix-run/react");
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime");
function DataTableRowActions({
  row
}) {
  let task = taskSchema.parse(row.original), fetcher = (0, import_react32.useFetcher)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
      Button,
      {
        variant: "ghost",
        className: "flex h-8 w-8 p-0 data-[state=open]:bg-muted",
        disabled: !row.getIsSelected(),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react_icons6.DotsHorizontalIcon, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/components/data-table-row-actions.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, !1, {
            fileName: "app/components/data-table-row-actions.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 37,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/data-table-row-actions.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[140px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
        import_react32.Link,
        {
          to: `/snop/scenario/${row.original.scenario_id}`,
          hidden: row.original.Status !== "Open",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(DropdownMenuItem, { children: "Edit" }, void 0, !1, {
            fileName: "app/components/data-table-row-actions.tsx",
            lineNumber: 51,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/data-table-row-actions.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(DropdownMenuItem, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
        "button",
        {
          type: "submit",
          name: "intent",
          value: "duplicate",
          className: "w-full",
          onClick: () => fetcher.submit(
            { scenario_id: row.original.scenario_id, intent: "duplicate" },
            { method: "post" }
          ),
          children: "Make a Copy"
        },
        void 0,
        !1,
        {
          fileName: "app/components/data-table-row-actions.tsx",
          lineNumber: 54,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(DropdownMenuItem, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
        "button",
        {
          type: "submit",
          name: "intent",
          value: "archive",
          className: "w-full",
          hidden: row.original.Status === "Open",
          onClick: () => fetcher.submit(
            { scenario_id: row.original.scenario_id, intent: "archive" },
            { method: "post" }
          ),
          children: "Archive"
        },
        void 0,
        !1,
        {
          fileName: "app/components/data-table-row-actions.tsx",
          lineNumber: 70,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(DropdownMenuItem, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
        "button",
        {
          type: "submit",
          name: "intent",
          value: "delete",
          className: "w-full",
          hidden: row.original.Status !== "Open",
          onClick: () => fetcher.submit(
            { scenario_id: row.original.scenario_id, intent: "delete" },
            { method: "post" }
          ),
          children: "Delete"
        },
        void 0,
        !1,
        {
          fileName: "app/components/data-table-row-actions.tsx",
          lineNumber: 87,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(DropdownMenuSeparator, {}, void 0, !1, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(DropdownMenuItem, { children: "Analyze" }, void 0, !1, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/data-table-row-actions.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/data-table-row-actions.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/components/data-table-row-submit.tsx
var import_react33 = require("@remix-run/react"), import_jsx_dev_runtime50 = require("react/jsx-dev-runtime");
function DataTableRowSubmit({
  row
}) {
  let task = taskSchema.parse(row.original), fetcher = (0, import_react33.useFetcher)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(DropdownMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
    Button,
    {
      className: "bg-blue-900 hover:bg-blue-800",
      disabled: row.getIsSelected() ? row.original.Status !== "Open" : !0,
      type: "submit",
      onClick: () => fetcher.submit(
        { scenario_id: row.original.scenario_id, intent: "optimize" },
        { method: "post" }
      ),
      children: [
        "Submit",
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, !1, {
          fileName: "app/components/data-table-row-submit.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/data-table-row-submit.tsx",
      lineNumber: 51,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/data-table-row-submit.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/data-table-row-submit.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/components/ui/badge.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime"), badgeVariants = (0, import_class_variance_authority3.cva)(
  "inline-flex items-center rounded-md border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80",
        secondary: "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        destructive: "border-transparent bg-red-500 text-neutral-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/80",
        outline: "text-neutral-950 dark:text-neutral-50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: cn(badgeVariants({ variant }), className), ...props }, void 0, !1, {
    fileName: "app/components/ui/badge.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/components/ui/checkbox.tsx
var React10 = __toESM(require("react")), CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox")), import_react_icons7 = require("@radix-ui/react-icons");
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime"), Checkbox = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-neutral-200 border-neutral-900 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=checked]:text-neutral-50 dark:border-neutral-800 dark:border-neutral-50 dark:focus-visible:ring-neutral-300 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=checked]:text-neutral-900",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react_icons7.CheckIcon, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/components/ui/checkbox.tsx",
          lineNumber: 22,
          columnNumber: 7
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/checkbox.tsx",
        lineNumber: 19,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/checkbox.tsx",
    lineNumber: 11,
    columnNumber: 3
  },
  this
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// app/components/columns.tsx
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime"), formatDate = (dateString) => {
  let date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(date);
}, columns = [
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
      Checkbox,
      {
        checked: table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate",
        onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all",
        className: "translate-y-[2px] "
      },
      void 0,
      !1,
      {
        fileName: "app/components/columns.tsx",
        lineNumber: 30,
        columnNumber: 7
      },
      this
    ),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
      Checkbox,
      {
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!!value),
        "aria-label": "Select row",
        className: "translate-y-[2px]"
      },
      void 0,
      !1,
      {
        fileName: "app/components/columns.tsx",
        lineNumber: 41,
        columnNumber: 7
      },
      this
    ),
    enableSorting: !1,
    enableHiding: !1
  },
  {
    accessorKey: "scenario_id",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(DataTableColumnHeader, { column, title: "Scenario Id" }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "w-[80px]", children: row.getValue("scenario_id") }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    enableSorting: !1,
    enableHiding: !1
  },
  {
    accessorKey: "description",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(DataTableColumnHeader, { column, title: "Description" }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("span", { className: "w-[50px] truncate font-medium ", children: row.getValue("description") }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  },
  {
    accessorKey: "CreatedAt",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(DataTableColumnHeader, { column, title: "Created Date" }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Badge, { variant: "outline", children: formatDate(row.getValue("CreatedAt")) }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this)
  },
  {
    accessorKey: "UpdatedAt",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(DataTableColumnHeader, { column, title: "Updated Date" }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Badge, { variant: "outline", children: formatDate(row.getValue("UpdatedAt")) }, void 0, !1, {
        fileName: "app/components/columns.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/columns.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this)
  },
  {
    accessorKey: "module",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(DataTableColumnHeader, { column, title: "Module" }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Badge, { variant: "outline", className: "bg-green-100 text-green-900", children: row.getValue("module") }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this)
  },
  {
    accessorKey: "Status",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(DataTableColumnHeader, { column, title: "Status" }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      let status = statuses.find(
        (status2) => status2.value === row.getValue("Status")
      );
      return status ? /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "flex w-[100px] items-center", children: [
        status.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(status.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }, void 0, !1, {
          fileName: "app/components/columns.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("span", { children: status.label }, void 0, !1, {
          fileName: "app/components/columns.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/columns.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this) : null;
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id))
  },
  {
    id: "submit",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(DataTableColumnHeader, { column, title: "Submit to Optimizer" }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(DataTableRowSubmit, { row }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 158,
      columnNumber: 24
    }, this)
  },
  {
    id: "actions",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(DataTableColumnHeader, { column, title: "Actions" }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(DataTableRowActions, { row }, void 0, !1, {
      fileName: "app/components/columns.tsx",
      lineNumber: 165,
      columnNumber: 24
    }, this)
  }
];

// app/components/data-table.tsx
var import_react_table = require("@tanstack/react-table"), React15 = __toESM(require("react"));

// app/components/data-table-pagination.tsx
var import_react_icons8 = require("@radix-ui/react-icons");
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime");
function DataTablePagination({
  table
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex items-center justify-between px-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex-1 text-sm text-muted-foreground", children: [
      table.getFilteredSelectedRowModel().rows.length,
      " of",
      " ",
      table.getFilteredRowModel().rows.length,
      " row(s) selected."
    ] }, void 0, !0, {
      fileName: "app/components/data-table-pagination.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex items-center space-x-6 lg:space-x-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("p", { className: "text-sm font-medium", children: "Rows per page" }, void 0, !1, {
          fileName: "app/components/data-table-pagination.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
          Select,
          {
            value: `${table.getState().pagination.pageSize}`,
            onValueChange: (value) => {
              table.setPageSize(Number(value));
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(SelectTrigger, { className: "h-8 w-[70px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(SelectValue, { placeholder: table.getState().pagination.pageSize }, void 0, !1, {
                fileName: "app/components/data-table-pagination.tsx",
                lineNumber: 41,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/components/data-table-pagination.tsx",
                lineNumber: 40,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(SelectContent, { side: "top", children: [10, 20, 30, 40, 50].map((pageSize) => /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(SelectItem, { value: `${pageSize}`, children: pageSize }, pageSize, !1, {
                fileName: "app/components/data-table-pagination.tsx",
                lineNumber: 45,
                columnNumber: 17
              }, this)) }, void 0, !1, {
                fileName: "app/components/data-table-pagination.tsx",
                lineNumber: 43,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 34,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/data-table-pagination.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        table.getState().pagination.pageIndex + 1,
        " of",
        " ",
        table.getPageCount()
      ] }, void 0, !0, {
        fileName: "app/components/data-table-pagination.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
          Button,
          {
            variant: "outline",
            className: "hidden h-8 w-8 p-0 lg:flex",
            onClick: () => table.setPageIndex(0),
            disabled: !table.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "sr-only", children: "Go to first page" }, void 0, !1, {
                fileName: "app/components/data-table-pagination.tsx",
                lineNumber: 63,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react_icons8.DoubleArrowLeftIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/components/data-table-pagination.tsx",
                lineNumber: 64,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 57,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
          Button,
          {
            variant: "outline",
            className: "h-8 w-8 p-0",
            onClick: () => table.previousPage(),
            disabled: !table.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "sr-only", children: "Go to previous page" }, void 0, !1, {
                fileName: "app/components/data-table-pagination.tsx",
                lineNumber: 72,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react_icons8.ChevronLeftIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/components/data-table-pagination.tsx",
                lineNumber: 73,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 66,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
          Button,
          {
            variant: "outline",
            className: "h-8 w-8 p-0",
            onClick: () => table.nextPage(),
            disabled: !table.getCanNextPage(),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "sr-only", children: "Go to next page" }, void 0, !1, {
                fileName: "app/components/data-table-pagination.tsx",
                lineNumber: 81,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react_icons8.ChevronRightIcon, { className: "h-4 w-4" }, void 0, !1, {
                fileName: "app/components/data-table-pagination.tsx",
                lineNumber: 82,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 75,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
          Button,
          {
            variant: "outline",
            className: "hidden h-8 w-8 p-0 lg:flex",
            onClick: () => table.setPageIndex(table.getPageCount() - 1),
            disabled: !table.getCanNextPage(),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "sr-only", children: "Go to last page" }, void 0, !1, {
                fileName: "app/components/data-table-pagination.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react_icons8.DoubleArrowRightIcon, { className: "h-4 w-4 text-red-500" }, void 0, !1, {
                fileName: "app/components/data-table-pagination.tsx",
                lineNumber: 91,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 84,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/data-table-pagination.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/data-table-pagination.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/data-table-pagination.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/components/data-table-toolbar.tsx
var import_react_icons12 = require("@radix-ui/react-icons");

// app/components/data-table-faceted-filter.tsx
var import_react_icons11 = require("@radix-ui/react-icons");

// app/components/ui/command.tsx
var React12 = __toESM(require("react")), import_react_icons10 = require("@radix-ui/react-icons"), import_cmdk = require("cmdk");

// app/components/ui/dialog.tsx
var React11 = __toESM(require("react")), DialogPrimitive = __toESM(require("@radix-ui/react-dialog")), import_react_icons9 = require("@radix-ui/react-icons");
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime"), Dialog = DialogPrimitive.Root, DialogTrigger = DialogPrimitive.Trigger, DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 19,
    columnNumber: 3
  },
  this
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(DialogOverlay, {}, void 0, !1, {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react_icons9.Cross2Icon, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/components/ui/dialog.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, !1, {
            fileName: "app/components/ui/dialog.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/dialog.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/dialog.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ui/dialog.tsx",
  lineNumber: 34,
  columnNumber: 3
}, this));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 58,
    columnNumber: 3
  },
  this
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 72,
    columnNumber: 3
  },
  this
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 86,
    columnNumber: 3
  },
  this
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-neutral-500 dark:text-neutral-400", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 101,
    columnNumber: 3
  },
  this
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// app/components/ui/command.tsx
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime"), Command = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
  import_cmdk.Command,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 13,
    columnNumber: 3
  },
  this
));
Command.displayName = import_cmdk.Command.displayName;
var CommandInput = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react_icons10.MagnifyingGlassIcon, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }, void 0, !1, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
    import_cmdk.Command.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/command.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 42,
  columnNumber: 3
}, this));
CommandInput.displayName = import_cmdk.Command.Input.displayName;
var CommandList = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
  import_cmdk.Command.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 61,
    columnNumber: 3
  },
  this
));
CommandList.displayName = import_cmdk.Command.List.displayName;
var CommandEmpty = React12.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
  import_cmdk.Command.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 74,
    columnNumber: 3
  },
  this
));
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroup = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
  import_cmdk.Command.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-neutral-950 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 dark:text-neutral-50 dark:[&_[cmdk-group-heading]]:text-neutral-400",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 87,
    columnNumber: 3
  },
  this
));
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
var CommandSeparator = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
  import_cmdk.Command.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-neutral-200 dark:bg-neutral-800", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 103,
    columnNumber: 3
  },
  this
));
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
var CommandItem = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
  import_cmdk.Command.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-neutral-100 aria-selected:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 115,
    columnNumber: 3
  },
  this
));
CommandItem.displayName = import_cmdk.Command.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
  "span",
  {
    className: cn(
      "ml-auto text-xs tracking-widest text-neutral-500 dark:text-neutral-400",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 132,
    columnNumber: 5
  },
  this
);
CommandShortcut.displayName = "CommandShortcut";

// app/components/ui/separator.tsx
var React13 = __toESM(require("react")), SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime"), Separator3 = React13.forwardRef(
  ({ className, orientation = "horizontal", decorative = !0, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-neutral-200 dark:bg-neutral-800",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/separator.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  )
);
Separator3.displayName = SeparatorPrimitive.Root.displayName;

// app/components/data-table-faceted-filter.tsx
var import_jsx_dev_runtime58 = require("react/jsx-dev-runtime");
function DataTableFacetedFilter({
  column,
  title,
  options
}) {
  let facets = column?.getFacetedUniqueValues(), selectedValues = new Set(column?.getFilterValue());
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Popover3, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Button, { variant: "outline", size: "sm", className: "h-8 border-dashed", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react_icons11.PlusCircledIcon, { className: "mr-2 h-4 w-4" }, void 0, !1, {
        fileName: "app/components/data-table-faceted-filter.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      title,
      selectedValues?.size > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_jsx_dev_runtime58.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Separator3, { orientation: "vertical", className: "mx-2 h-4" }, void 0, !1, {
          fileName: "app/components/data-table-faceted-filter.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
          Badge,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: selectedValues.size
          },
          void 0,
          !1,
          {
            fileName: "app/components/data-table-faceted-filter.tsx",
            lineNumber: 51,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "hidden space-x-1 lg:flex", children: selectedValues.size > 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
          Badge,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              selectedValues.size,
              " selected"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/data-table-faceted-filter.tsx",
            lineNumber: 59,
            columnNumber: 19
          },
          this
        ) : options.filter((option) => selectedValues.has(option.value)).map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
          Badge,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: option.label
          },
          option.value,
          !1,
          {
            fileName: "app/components/data-table-faceted-filter.tsx",
            lineNumber: 69,
            columnNumber: 23
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/data-table-faceted-filter.tsx",
          lineNumber: 57,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/data-table-faceted-filter.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/data-table-faceted-filter.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/data-table-faceted-filter.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(PopoverContent, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Command, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(CommandInput, { placeholder: title }, void 0, !1, {
        fileName: "app/components/data-table-faceted-filter.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(CommandList, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(CommandEmpty, { children: "No results found." }, void 0, !1, {
          fileName: "app/components/data-table-faceted-filter.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(CommandGroup, { children: options.map((option) => {
          let isSelected = selectedValues.has(option.value);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
            CommandItem,
            {
              onSelect: () => {
                isSelected ? selectedValues.delete(option.value) : selectedValues.add(option.value);
                let filterValues = Array.from(selectedValues);
                column?.setFilterValue(
                  filterValues.length ? filterValues : void 0
                );
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
                  "div",
                  {
                    className: cn(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                    ),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_react_icons11.CheckIcon, { className: cn("h-4 w-4") }, void 0, !1, {
                      fileName: "app/components/data-table-faceted-filter.tsx",
                      lineNumber: 114,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/data-table-faceted-filter.tsx",
                    lineNumber: 106,
                    columnNumber: 21
                  },
                  this
                ),
                option.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(option.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }, void 0, !1, {
                  fileName: "app/components/data-table-faceted-filter.tsx",
                  lineNumber: 117,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("span", { children: option.label }, void 0, !1, {
                  fileName: "app/components/data-table-faceted-filter.tsx",
                  lineNumber: 119,
                  columnNumber: 21
                }, this),
                facets?.get(option.value) && /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("span", { className: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs", children: facets.get(option.value) }, void 0, !1, {
                  fileName: "app/components/data-table-faceted-filter.tsx",
                  lineNumber: 121,
                  columnNumber: 23
                }, this)
              ]
            },
            option.value,
            !0,
            {
              fileName: "app/components/data-table-faceted-filter.tsx",
              lineNumber: 92,
              columnNumber: 19
            },
            this
          );
        }) }, void 0, !1, {
          fileName: "app/components/data-table-faceted-filter.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this),
        selectedValues.size > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_jsx_dev_runtime58.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(CommandSeparator, {}, void 0, !1, {
            fileName: "app/components/data-table-faceted-filter.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(CommandGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
            CommandItem,
            {
              onSelect: () => column?.setFilterValue(void 0),
              className: "justify-center text-center",
              children: "Clear filters"
            },
            void 0,
            !1,
            {
              fileName: "app/components/data-table-faceted-filter.tsx",
              lineNumber: 133,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/data-table-faceted-filter.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/data-table-faceted-filter.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/data-table-faceted-filter.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/data-table-faceted-filter.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/data-table-faceted-filter.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/data-table-faceted-filter.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/components/data-table-toolbar.tsx
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime");
function DataTableToolbar({
  table
}) {
  let isFiltered = table.getState().columnFilters.length > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "flex flex-1 items-center space-x-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
      Input,
      {
        placeholder: "Filter Scenario...",
        value: table.getColumn("title")?.getFilterValue() ?? "",
        onChange: (event) => table.getColumn("title")?.setFilterValue(event.target.value),
        className: "h-8 w-[150px] lg:w-[250px]"
      },
      void 0,
      !1,
      {
        fileName: "app/components/data-table-toolbar.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ),
    table.getColumn("status") && /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
      DataTableFacetedFilter,
      {
        column: table.getColumn("status"),
        title: "Status",
        options: statuses
      },
      void 0,
      !1,
      {
        fileName: "app/components/data-table-toolbar.tsx",
        lineNumber: 35,
        columnNumber: 11
      },
      this
    ),
    table.getColumn("priority") && /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
      DataTableFacetedFilter,
      {
        column: table.getColumn("priority"),
        title: "Priority",
        options: priorities
      },
      void 0,
      !1,
      {
        fileName: "app/components/data-table-toolbar.tsx",
        lineNumber: 43,
        columnNumber: 11
      },
      this
    ),
    isFiltered && /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
      Button,
      {
        variant: "ghost",
        onClick: () => table.resetColumnFilters(),
        className: "h-8 px-2 lg:px-3 ",
        children: [
          "Reset",
          /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_react_icons12.Cross2Icon, { className: "ml-2 h-4 w-4" }, void 0, !1, {
            fileName: "app/components/data-table-toolbar.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/data-table-toolbar.tsx",
        lineNumber: 50,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/data-table-toolbar.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/data-table-toolbar.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/components/ui/table.tsx
var React14 = __toESM(require("react"));
var import_jsx_dev_runtime60 = require("react/jsx-dev-runtime"), Table = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 10,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this));
Table.displayName = "Table";
var TableHeader = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 23,
  columnNumber: 3
}, this));
TableHeader.displayName = "TableHeader";
var TableBody = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 31,
    columnNumber: 3
  },
  this
));
TableBody.displayName = "TableBody";
var TableFooter = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-neutral-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-neutral-800/50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 43,
    columnNumber: 3
  },
  this
));
TableFooter.displayName = "TableFooter";
var TableRow = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 58,
    columnNumber: 3
  },
  this
));
TableRow.displayName = "TableRow";
var TableHead = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] dark:text-neutral-400",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 73,
    columnNumber: 3
  },
  this
));
TableHead.displayName = "TableHead";
var TableCell = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 88,
    columnNumber: 3
  },
  this
));
TableCell.displayName = "TableCell";
var TableCaption = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-neutral-500 dark:text-neutral-400", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 103,
    columnNumber: 3
  },
  this
));
TableCaption.displayName = "TableCaption";

// app/components/data-table.tsx
var import_jsx_dev_runtime61 = require("react/jsx-dev-runtime");
function DataTable({
  columns: columns3,
  data: data2
}) {
  let [rowSelection, setRowSelection] = React15.useState({}), [columnVisibility, setColumnVisibility] = React15.useState({}), [columnFilters, setColumnFilters] = React15.useState(
    []
  ), [sorting, setSorting] = React15.useState([]), table = (0, import_react_table.useReactTable)({
    data: data2,
    columns: columns3,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters
    },
    enableRowSelection: !0,
    enableMultiRowSelection: !1,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: (0, import_react_table.getCoreRowModel)(),
    getFilteredRowModel: (0, import_react_table.getFilteredRowModel)(),
    getPaginationRowModel: (0, import_react_table.getPaginationRowModel)(),
    getSortedRowModel: (0, import_react_table.getSortedRowModel)(),
    getFacetedRowModel: (0, import_react_table.getFacetedRowModel)(),
    getFacetedUniqueValues: (0, import_react_table.getFacetedUniqueValues)()
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(DataTableToolbar, { table }, void 0, !1, {
      fileName: "app/components/data-table.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("div", { className: "rounded-md border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(Table, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(TableRow, { children: headerGroup.headers.map((header) => /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(TableHead, { colSpan: header.colSpan, children: header.isPlaceholder ? null : (0, import_react_table.flexRender)(
        header.column.columnDef.header,
        header.getContext()
      ) }, header.id, !1, {
        fileName: "app/components/data-table.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this)) }, headerGroup.id, !1, {
        fileName: "app/components/data-table.tsx",
        lineNumber: 74,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/components/data-table.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(TableBody, { children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => (
        // <Form method="post" key={row.id}>
        /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
          TableRow,
          {
            "data-state": row.getIsSelected() && "selected",
            children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(TableCell, { children: (0, import_react_table.flexRender)(
              cell.column.columnDef.cell,
              cell.getContext()
            ) }, cell.id, !1, {
              fileName: "app/components/data-table.tsx",
              lineNumber: 99,
              columnNumber: 21
            }, this))
          },
          row.id,
          !1,
          {
            fileName: "app/components/data-table.tsx",
            lineNumber: 94,
            columnNumber: 17
          },
          this
        )
      )) : /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(
        TableCell,
        {
          colSpan: columns3.length,
          className: "h-24 text-center",
          children: "No results."
        },
        void 0,
        !1,
        {
          fileName: "app/components/data-table.tsx",
          lineNumber: 111,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/data-table.tsx",
        lineNumber: 110,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/data-table.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/data-table.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/data-table.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(DataTablePagination, { table }, void 0, !1, {
      fileName: "app/components/data-table.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/data-table.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

// app/routes/snop.scenario.tsx
var import_node7 = require("@remix-run/node"), import_jsx_dev_runtime62 = require("react/jsx-dev-runtime"), navigation3 = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" }
], loader4 = async () => {
  let scenarioList = await getScenarioItems();
  return (0, import_node7.json)({ scenarioList });
}, action3 = async ({ request }) => {
  let formData = await request.formData(), data2 = Object.fromEntries(formData), intent = formData.get("intent"), scenarioId = formData.get("scenario_id");
  return console.log("Intent-->", intent), console.log("scenario id-->", scenarioId), intent === "optimize" && await updateScenario(scenarioId, "Submitted"), intent === "delete" && await deleteScenarioById(scenarioId), intent === "duplicate" && await duplicateScenario(scenarioId), (0, import_node7.redirect)(".");
};
function TaskPage() {
  let { scenarioList } = (0, import_react34.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(import_jsx_dev_runtime62.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
      "nav",
      {
        className: "ml-6 pl-6 flex items-center justify-center",
        "aria-label": "Global",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation3.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
          import_react34.Link,
          {
            to: item.to,
            className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200",
            children: item.name
          },
          item.id,
          !1,
          {
            fileName: "app/routes/snop.scenario.tsx",
            lineNumber: 66,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/snop.scenario.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.scenario.tsx",
        lineNumber: 60,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/snop.scenario.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "flex items-center  justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Sales & Operations Planning - List of Scenarios" }, void 0, !1, {
        fileName: "app/routes/snop.scenario.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.scenario.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "m-4 bg-white rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(DataTable, { data: scenarioList, columns }, void 0, !1, {
        fileName: "app/routes/snop.scenario.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.scenario.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.scenario.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.scenario.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/snop.scenario.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/routes/notes._index.tsx
var notes_index_exports = {};
__export(notes_index_exports, {
  default: () => NoteIndexPage
});
var import_react35 = require("@remix-run/react"), import_jsx_dev_runtime63 = require("react/jsx-dev-runtime");
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("p", { children: [
    "No note selected. Select a note on the left, or",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_react35.Link, { to: "new", className: "text-blue-500 underline", children: "create a new note." }, void 0, !1, {
      fileName: "app/routes/notes._index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes._index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader5
});
var loader5 = async ({ request }) => {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
};

// app/routes/snop.demand.jsx
var snop_demand_exports = {};
__export(snop_demand_exports, {
  default: () => DemandRoute
});
var import_react36 = require("react"), import_react37 = require("@headlessui/react"), import_solid11 = require("@heroicons/react/20/solid");
var import_jsx_dev_runtime64 = require("react/jsx-dev-runtime");
function classNames9(...classes) {
  return classes.filter(Boolean).join(" ");
}
var items = [
  {
    id: 1,
    name: "Review",
    description: "Conduct periodic (month/quarter/year) performance review of key business KPIs",
    to: "review"
  },
  {
    id: 2,
    name: "Meeting",
    description: "Conduct daily/weekly data driven meetings and create plan of action ",
    to: "meeting"
  }
], filters = [
  {
    id: "year",
    name: "Year",
    options: [
      { value: "new-arrivals", label: "All New Arrivals", checked: !1 },
      { value: "tees", label: "Tees", checked: !1 },
      { value: "all", label: "All", checked: !0 }
    ]
  },
  {
    id: "region",
    name: "Region",
    options: [
      { value: "s", label: "S", checked: !1 },
      { value: "m", label: "M", checked: !1 },
      { value: "l", label: "L", checked: !1 }
    ]
  },
  {
    id: "products",
    name: "Products",
    options: [
      { value: "all", label: "All", checked: !1 },
      { value: "beige", label: "Beige", checked: !1 },
      { value: "blue", label: "Blue", checked: !1 }
    ]
  }
];
function DemandRoute() {
  let [mode2, setMode] = (0, import_react36.useState)(items[0]), reviewTabs4 = ["Month", "Quarter", "Year"], [reviewIndex] = (0, import_react36.useState)(0), meetingTabs4 = ["Daily", "Weekly"], [meetingIndex] = (0, import_react36.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_jsx_dev_runtime64.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Demand Dashboard" }, void 0, !1, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_react37.Listbox, { value: mode2, onChange: setMode, children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_jsx_dev_runtime64.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
              import_solid11.CheckIcon,
              {
                className: "-ml-0.5 h-5 w-5 ",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.demand.jsx",
                lineNumber: 89,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { className: "text-sm font-semibold", children: mode2.name }, void 0, !1, {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 93,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 88,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_react37.Listbox.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
            import_solid11.ChevronDownIcon,
            {
              className: "h-5 w-5 text-white",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 96,
              columnNumber: 27
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 95,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.demand.jsx",
          lineNumber: 87,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
          import_react37.Transition,
          {
            show: open,
            as: import_react36.Fragment,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_react37.Listbox.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
              import_react37.Listbox.Option,
              {
                className: ({ active }) => classNames9(
                  active ? "bg-rose-500 text-white" : "text-gray-900",
                  "cursor-default select-none p-4 text-sm"
                ),
                value: option,
                children: ({ selected, active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
                      "p",
                      {
                        className: selected ? "font-semibold" : "font-normal",
                        children: option.name
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.demand.jsx",
                        lineNumber: 127,
                        columnNumber: 37
                      },
                      this
                    ),
                    selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
                      "span",
                      {
                        className: active ? "text-white" : "text-rose-600",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
                          import_solid11.CheckIcon,
                          {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/snop.demand.jsx",
                            lineNumber: 144,
                            columnNumber: 41
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.demand.jsx",
                        lineNumber: 137,
                        columnNumber: 39
                      },
                      this
                    ) : null
                  ] }, void 0, !0, {
                    fileName: "app/routes/snop.demand.jsx",
                    lineNumber: 126,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
                    "p",
                    {
                      className: classNames9(
                        active ? "text-rose-200" : "text-gray-500",
                        "mt-2"
                      ),
                      children: option.description
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/snop.demand.jsx",
                      lineNumber: 151,
                      columnNumber: 35
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.demand.jsx",
                  lineNumber: 125,
                  columnNumber: 33
                }, this)
              },
              option.name,
              !1,
              {
                fileName: "app/routes/snop.demand.jsx",
                lineNumber: 112,
                columnNumber: 29
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 110,
              columnNumber: 25
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 103,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 86,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 85,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 83,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 82,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 81,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "mx-4 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("section", { "aria-labelledby": "filter-heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "my-4 rounded-lg border bg-white shadow-sm md:flex md:items-center md:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "mr-64 flex items-center px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_react37.Popover.Group, { className: "-mx-4 flex items-center divide-x divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("span", { className: "mx-4 inline-flex", children: "Filters" }, void 0, !1, {
          fileName: "app/routes/snop.demand.jsx",
          lineNumber: 183,
          columnNumber: 19
        }, this),
        filters.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
          import_react37.Popover,
          {
            className: "relative inline-block rounded-lg  text-gray-700 hover:bg-rose-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_react37.Popover.Button, { className: "group inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-400 hover:text-white", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("span", { children: section.name }, void 0, !1, {
                  fileName: "app/routes/snop.demand.jsx",
                  lineNumber: 190,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
                  import_solid11.ChevronDownIcon,
                  {
                    className: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 ",
                    "aria-hidden": "true"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/snop.demand.jsx",
                    lineNumber: 192,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/snop.demand.jsx",
                lineNumber: 189,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
                import_react37.Transition,
                {
                  as: import_react36.Fragment,
                  enter: "transition ease-out duration-100",
                  enterFrom: "transform opacity-0 scale-95",
                  enterTo: "transform opacity-100 scale-100",
                  leave: "transition ease-in duration-75",
                  leaveFrom: "transform opacity-100 scale-100",
                  leaveTo: "transform opacity-0 scale-95",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_react37.Popover.Panel, { className: "absolute z-10 mt-2 rounded-md bg-white p-4 shadow-2xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("form", { className: "space-y-4", children: section.options.map((option, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
                    "div",
                    {
                      className: "flex items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
                          "input",
                          {
                            id: `filter-${section.id}-${optionIdx}`,
                            name: `${section.id}[]`,
                            defaultValue: option.value,
                            type: "checkbox",
                            defaultChecked: option.checked,
                            className: "h-4 w-4 rounded border-gray-300 text-indigo-600 "
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/snop.demand.jsx",
                            lineNumber: 214,
                            columnNumber: 33
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
                          "label",
                          {
                            htmlFor: `filter-${section.id}-${optionIdx}`,
                            className: "ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:text-white",
                            children: option.label
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/snop.demand.jsx",
                            lineNumber: 222,
                            columnNumber: 33
                          },
                          this
                        )
                      ]
                    },
                    option.value,
                    !0,
                    {
                      fileName: "app/routes/snop.demand.jsx",
                      lineNumber: 210,
                      columnNumber: 31
                    },
                    this
                  )) }, void 0, !1, {
                    fileName: "app/routes/snop.demand.jsx",
                    lineNumber: 208,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/snop.demand.jsx",
                    lineNumber: 207,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.demand.jsx",
                  lineNumber: 198,
                  columnNumber: 23
                },
                this
              )
            ]
          },
          section.name,
          !0,
          {
            fileName: "app/routes/snop.demand.jsx",
            lineNumber: 185,
            columnNumber: 21
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 182,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 181,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 180,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: " m-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
        "button",
        {
          type: "button",
          className: "rounded-full border bg-gray-200 p-2 hover:bg-gray-100 ",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
            import_solid11.FunnelIcon,
            {
              className: "h-4 w-4 text-gray-500",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/snop.demand.jsx",
              lineNumber: 243,
              columnNumber: 17
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/snop.demand.jsx",
          lineNumber: 239,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 238,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 179,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 178,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 176,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
      CardLayout,
      {
        mode: mode2.name === "Review" ? reviewTabs4 : meetingTabs4,
        tab: mode2.name === "Review" ? reviewIndex : meetingIndex,
        kpiData: kpiService_m8
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.demand.jsx",
        lineNumber: 253,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/snop.demand.jsx",
      lineNumber: 252,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.demand.jsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

// app/routes/snop.result.tsx
var snop_result_exports = {};
__export(snop_result_exports, {
  default: () => DashboardPage
});

// app/components/ui/tabs.tsx
var React16 = __toESM(require("react")), TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));
var import_jsx_dev_runtime65 = require("react/jsx-dev-runtime"), Tabs = TabsPrimitive.Root, TabsList = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-neutral-100 p-1 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/tabs.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  this
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-neutral-950 data-[state=active]:shadow dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=active]:bg-neutral-950 dark:data-[state=active]:text-neutral-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/tabs.tsx",
    lineNumber: 27,
    columnNumber: 3
  },
  this
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/tabs.tsx",
    lineNumber: 42,
    columnNumber: 3
  },
  this
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// app/components/date-range-picker.tsx
var React17 = __toESM(require("react")), import_react_icons13 = require("@radix-ui/react-icons"), import_date_fns2 = require("date-fns");
var import_jsx_dev_runtime66 = require("react/jsx-dev-runtime");
function CalendarDateRangePicker({
  className
}) {
  let [date, setDate] = React17.useState({
    from: new Date(2023, 0, 20),
    to: (0, import_date_fns2.addDays)(new Date(2023, 0, 20), 20)
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("div", { className: cn("grid gap-2", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(Popover3, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(
      Button,
      {
        id: "date",
        variant: "outline",
        className: cn(
          "w-[260px] justify-start text-left font-normal",
          !date && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(import_react_icons13.CalendarIcon, { className: "mr-2 h-4 w-4" }, void 0, !1, {
            fileName: "app/components/date-range-picker.tsx",
            lineNumber: 36,
            columnNumber: 13
          }, this),
          date?.from ? date.to ? /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(import_jsx_dev_runtime66.Fragment, { children: [
            (0, import_date_fns2.format)(date.from, "LLL dd, y"),
            " -",
            " ",
            (0, import_date_fns2.format)(date.to, "LLL dd, y")
          ] }, void 0, !0, {
            fileName: "app/components/date-range-picker.tsx",
            lineNumber: 39,
            columnNumber: 17
          }, this) : (0, import_date_fns2.format)(date.from, "LLL dd, y") : /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("span", { children: "Pick a date" }, void 0, !1, {
            fileName: "app/components/date-range-picker.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/date-range-picker.tsx",
        lineNumber: 28,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/date-range-picker.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(PopoverContent, { className: "w-auto p-0", align: "end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(
      Calendar,
      {
        initialFocus: !0,
        mode: "range",
        defaultMonth: date?.from,
        selected: date,
        onSelect: setDate,
        numberOfMonths: 2
      },
      void 0,
      !1,
      {
        fileName: "app/components/date-range-picker.tsx",
        lineNumber: 52,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/date-range-picker.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/date-range-picker.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/date-range-picker.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/components/main-nav.tsx
var import_react38 = require("@remix-run/react");
var import_jsx_dev_runtime67 = require("react/jsx-dev-runtime");
function MainNav({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
    "nav",
    {
      className: cn("flex items-center space-x-4 lg:space-x-6", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
          import_react38.Link,
          {
            to: "/examples/dashboard",
            className: "text-sm font-medium transition-colors hover:text-primary",
            children: "Overview"
          },
          void 0,
          !1,
          {
            fileName: "app/components/main-nav.tsx",
            lineNumber: 15,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
          import_react38.Link,
          {
            to: "/examples/dashboard",
            className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
            children: "Customers"
          },
          void 0,
          !1,
          {
            fileName: "app/components/main-nav.tsx",
            lineNumber: 21,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
          import_react38.Link,
          {
            to: "/examples/dashboard",
            className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
            children: "Products"
          },
          void 0,
          !1,
          {
            fileName: "app/components/main-nav.tsx",
            lineNumber: 27,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
          import_react38.Link,
          {
            to: "/examples/dashboard",
            className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
            children: "Settings"
          },
          void 0,
          !1,
          {
            fileName: "app/components/main-nav.tsx",
            lineNumber: 33,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/main-nav.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/components/overview.tsx
var import_recharts = require("recharts"), import_jsx_dev_runtime68 = require("react/jsx-dev-runtime"), data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5e3) + 1e3
  }
];
function Overview() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(import_recharts.ResponsiveContainer, { width: "100%", height: 350, children: /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(import_recharts.BarChart, { data, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(
      import_recharts.XAxis,
      {
        dataKey: "name",
        stroke: "#888888",
        fontSize: 12,
        tickLine: !1,
        axisLine: !1
      },
      void 0,
      !1,
      {
        fileName: "app/components/overview.tsx",
        lineNumber: 58,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(
      import_recharts.YAxis,
      {
        stroke: "#888888",
        fontSize: 12,
        tickLine: !1,
        axisLine: !1,
        tickFormatter: (value) => `$${value}`
      },
      void 0,
      !1,
      {
        fileName: "app/components/overview.tsx",
        lineNumber: 65,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(
      import_recharts.Bar,
      {
        dataKey: "total",
        fill: "currentColor",
        radius: [4, 4, 0, 0],
        className: "fill-primary"
      },
      void 0,
      !1,
      {
        fileName: "app/components/overview.tsx",
        lineNumber: 72,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/overview.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/overview.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/components/ui/avatar.tsx
var React18 = __toESM(require("react")), AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"));
var import_jsx_dev_runtime69 = require("react/jsx-dev-runtime"), Avatar = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 37,
    columnNumber: 3
  },
  this
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// app/components/recent-sales.tsx
var import_jsx_dev_runtime70 = require("react/jsx-dev-runtime");
function RecentSales() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(Avatar, { className: "h-9 w-9", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(AvatarImage, { src: "/avatars/01.png", alt: "Avatar" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(AvatarFallback, { children: "OM" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 13,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: "Olivia Martin" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "olivia.martin@email.com" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 17,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "ml-auto font-medium", children: "+$1,999.00" }, void 0, !1, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/recent-sales.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(Avatar, { className: "flex h-9 w-9 items-center justify-center space-y-0 border", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(AvatarImage, { src: "/avatars/02.png", alt: "Avatar" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(AvatarFallback, { children: "JL" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: "Jackson Lee" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "jackson.lee@email.com" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "ml-auto font-medium", children: "+$39.00" }, void 0, !1, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/recent-sales.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(Avatar, { className: "h-9 w-9", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(AvatarImage, { src: "/avatars/03.png", alt: "Avatar" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(AvatarFallback, { children: "IN" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: "Isabella Nguyen" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "isabella.nguyen@email.com" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "ml-auto font-medium", children: "+$299.00" }, void 0, !1, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/recent-sales.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(Avatar, { className: "h-9 w-9", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(AvatarImage, { src: "/avatars/04.png", alt: "Avatar" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(AvatarFallback, { children: "WK" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: "William Kim" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "will@email.com" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "ml-auto font-medium", children: "+$99.00" }, void 0, !1, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/recent-sales.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(Avatar, { className: "h-9 w-9", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(AvatarImage, { src: "/avatars/05.png", alt: "Avatar" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(AvatarFallback, { children: "SD" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: "Sofia Davis" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "sofia.davis@email.com" }, void 0, !1, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "ml-auto font-medium", children: "+$39.00" }, void 0, !1, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/recent-sales.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/recent-sales.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/Search.tsx
var import_jsx_dev_runtime71 = require("react/jsx-dev-runtime");
function Search() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
    Input,
    {
      type: "search",
      placeholder: "Search...",
      className: "md:w-[100px] lg:w-[300px]"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Search.tsx",
      lineNumber: 6,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Search.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/team-switcher.tsx
var React19 = __toESM(require("react")), import_react_icons14 = require("@radix-ui/react-icons");
var import_jsx_dev_runtime72 = require("react/jsx-dev-runtime"), groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Alicia Koch",
        value: "personal"
      }
    ]
  },
  {
    label: "Teams",
    teams: [
      {
        label: "Acme Inc.",
        value: "acme-inc"
      },
      {
        label: "Monsters Inc.",
        value: "monsters"
      }
    ]
  }
];
function TeamSwitcher({ className }) {
  let [open, setOpen] = React19.useState(!1), [showNewTeamDialog, setShowNewTeamDialog] = React19.useState(!1), [selectedTeam, setSelectedTeam] = React19.useState(
    groups[0].teams[0]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(Dialog, { open: showNewTeamDialog, onOpenChange: setShowNewTeamDialog, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(Popover3, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
        Button,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": open,
          "aria-label": "Select a team",
          className: cn("w-[200px] justify-between", className),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(Avatar, { className: "mr-2 h-5 w-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
                AvatarImage,
                {
                  src: `https://avatar.vercel.sh/${selectedTeam.value}.png`,
                  alt: selectedTeam.label,
                  className: "grayscale"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/team-switcher.tsx",
                  lineNumber: 98,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(AvatarFallback, { children: "SC" }, void 0, !1, {
                fileName: "app/components/team-switcher.tsx",
                lineNumber: 103,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/team-switcher.tsx",
              lineNumber: 97,
              columnNumber: 13
            }, this),
            selectedTeam.label,
            /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(import_react_icons14.CaretSortIcon, { className: "ml-auto h-4 w-4 shrink-0 opacity-50" }, void 0, !1, {
              fileName: "app/components/team-switcher.tsx",
              lineNumber: 106,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 90,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(PopoverContent, { className: "w-[200px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(Command, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(CommandList, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(CommandInput, { placeholder: "Search team..." }, void 0, !1, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(CommandEmpty, { children: "No team found." }, void 0, !1, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this),
          groups.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(CommandGroup, { heading: group.label, children: group.teams.map((team) => /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
            CommandItem,
            {
              onSelect: () => {
                setSelectedTeam(team), setOpen(!1);
              },
              className: "text-sm",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(Avatar, { className: "mr-2 h-5 w-5", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
                    AvatarImage,
                    {
                      src: `https://avatar.vercel.sh/${team.value}.png`,
                      alt: team.label,
                      className: "grayscale"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/team-switcher.tsx",
                      lineNumber: 126,
                      columnNumber: 25
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(AvatarFallback, { children: "SC" }, void 0, !1, {
                    fileName: "app/components/team-switcher.tsx",
                    lineNumber: 131,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/team-switcher.tsx",
                  lineNumber: 125,
                  columnNumber: 23
                }, this),
                team.label,
                /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
                  import_react_icons14.CheckIcon,
                  {
                    className: cn(
                      "ml-auto h-4 w-4",
                      selectedTeam.value === team.value ? "opacity-100" : "opacity-0"
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/team-switcher.tsx",
                    lineNumber: 134,
                    columnNumber: 23
                  },
                  this
                )
              ]
            },
            team.value,
            !0,
            {
              fileName: "app/components/team-switcher.tsx",
              lineNumber: 117,
              columnNumber: 21
            },
            this
          )) }, group.label, !1, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 115,
            columnNumber: 17
          }, this))
        ] }, void 0, !0, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(CommandSeparator, {}, void 0, !1, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(CommandList, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(CommandGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
          CommandItem,
          {
            onSelect: () => {
              setOpen(!1), setShowNewTeamDialog(!0);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(import_react_icons14.PlusCircledIcon, { className: "mr-2 h-5 w-5" }, void 0, !1, {
                fileName: "app/components/team-switcher.tsx",
                lineNumber: 157,
                columnNumber: 21
              }, this),
              "Create Team"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 151,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 150,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 149,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/team-switcher.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(DialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(DialogTitle, { children: "Create team" }, void 0, !1, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 168,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(DialogDescription, { children: "Add a new team to manage products and customers." }, void 0, !1, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("div", { className: "space-y-4 py-2 pb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(Label, { htmlFor: "name", children: "Team name" }, void 0, !1, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(Input, { id: "name", placeholder: "Acme Inc." }, void 0, !1, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 177,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(Label, { htmlFor: "plan", children: "Subscription plan" }, void 0, !1, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 180,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(Select, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(SelectValue, { placeholder: "Select a plan" }, void 0, !1, {
              fileName: "app/components/team-switcher.tsx",
              lineNumber: 183,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/team-switcher.tsx",
              lineNumber: 182,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(SelectContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(SelectItem, { value: "free", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("span", { className: "font-medium", children: "Free" }, void 0, !1, {
                  fileName: "app/components/team-switcher.tsx",
                  lineNumber: 187,
                  columnNumber: 21
                }, this),
                " -",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("span", { className: "text-muted-foreground", children: "Trial for two weeks" }, void 0, !1, {
                  fileName: "app/components/team-switcher.tsx",
                  lineNumber: 188,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/team-switcher.tsx",
                lineNumber: 186,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(SelectItem, { value: "pro", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("span", { className: "font-medium", children: "Pro" }, void 0, !1, {
                  fileName: "app/components/team-switcher.tsx",
                  lineNumber: 193,
                  columnNumber: 21
                }, this),
                " -",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("span", { className: "text-muted-foreground", children: "$9/month per user" }, void 0, !1, {
                  fileName: "app/components/team-switcher.tsx",
                  lineNumber: 194,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/team-switcher.tsx",
                lineNumber: 192,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/team-switcher.tsx",
              lineNumber: 185,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 181,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 174,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 173,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(DialogFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(Button, { variant: "outline", onClick: () => setShowNewTeamDialog(!1), children: "Cancel" }, void 0, !1, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(Button, { type: "submit", children: "Continue" }, void 0, !1, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/team-switcher.tsx",
      lineNumber: 166,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/team-switcher.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

// app/components/user-nav.tsx
var import_jsx_dev_runtime73 = require("react/jsx-dev-runtime");
function UserNav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(Button, { variant: "ghost", className: "relative h-8 w-8 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(Avatar, { className: "h-8 w-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(AvatarImage, { src: "/avatars/01.png", alt: "@shadcn" }, void 0, !1, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(AvatarFallback, { children: "SC" }, void 0, !1, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/user-nav.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/user-nav.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/user-nav.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuContent, { className: "w-56", align: "end", forceMount: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: "shadcn" }, void 0, !1, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("p", { className: "text-xs leading-none text-muted-foreground", children: "m@example.com" }, void 0, !1, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuSeparator, {}, void 0, !1, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuItem, { children: [
          "Profile",
          /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuShortcut, { children: "\u21E7\u2318P" }, void 0, !1, {
            fileName: "app/components/user-nav.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuItem, { children: [
          "Billing",
          /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuShortcut, { children: "\u2318B" }, void 0, !1, {
            fileName: "app/components/user-nav.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuItem, { children: [
          "Settings",
          /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuShortcut, { children: "\u2318S" }, void 0, !1, {
            fileName: "app/components/user-nav.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuItem, { children: "New Team" }, void 0, !1, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuSeparator, {}, void 0, !1, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuItem, { children: [
        "Log out",
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(DropdownMenuShortcut, { children: "\u21E7\u2318Q" }, void 0, !1, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/user-nav.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/user-nav.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/snop.result.tsx
var import_jsx_dev_runtime74 = require("react/jsx-dev-runtime");
function DashboardPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(import_jsx_dev_runtime74.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "p-2 m-2 bg-white rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "hidden flex-col md:flex ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "flex h-16 items-center px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(TeamSwitcher, {}, void 0, !1, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 25,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(MainNav, { className: "mx-6" }, void 0, !1, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 26,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "ml-auto flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(Search, {}, void 0, !1, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 28,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(UserNav, {}, void 0, !1, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 27,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.result.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.result.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "flex-1 space-y-4 p-8 pt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "flex items-center justify-between space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight", children: "Dashboard" }, void 0, !1, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CalendarDateRangePicker, {}, void 0, !1, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 37,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(Button, { children: "Download" }, void 0, !1, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 38,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(Tabs, { defaultValue: "overview", className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(TabsList, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(TabsTrigger, { value: "overview", children: "Overview" }, void 0, !1, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(TabsTrigger, { value: "analytics", disabled: !0, children: "Analytics" }, void 0, !1, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(TabsTrigger, { value: "reports", disabled: !0, children: "Reports" }, void 0, !1, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(TabsTrigger, { value: "notifications", disabled: !0, children: "Notifications" }, void 0, !1, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(TabsContent, { value: "overview", className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardTitle, { className: "text-sm font-medium", children: "Total Revenue" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 58,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    className: "h-4 w-4 text-muted-foreground",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("path", { d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }, void 0, !1, {
                      fileName: "app/routes/snop.result.tsx",
                      lineNumber: 71,
                      columnNumber: 25
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/snop.result.tsx",
                    lineNumber: 61,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 57,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "text-2xl font-bold", children: "$45,231.89" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 75,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: "+20.1% from last month" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 76,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 74,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardTitle, { className: "text-sm font-medium", children: "Subscriptions" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 83,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    className: "h-4 w-4 text-muted-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }, void 0, !1, {
                        fileName: "app/routes/snop.result.tsx",
                        lineNumber: 96,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("circle", { cx: "9", cy: "7", r: "4" }, void 0, !1, {
                        fileName: "app/routes/snop.result.tsx",
                        lineNumber: 97,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" }, void 0, !1, {
                        fileName: "app/routes/snop.result.tsx",
                        lineNumber: 98,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/snop.result.tsx",
                    lineNumber: 86,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 82,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "text-2xl font-bold", children: "+2350" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 102,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: "+180.1% from last month" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 103,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 101,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardTitle, { className: "text-sm font-medium", children: "Sales" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 110,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    className: "h-4 w-4 text-muted-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }, void 0, !1, {
                        fileName: "app/routes/snop.result.tsx",
                        lineNumber: 123,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("path", { d: "M2 10h20" }, void 0, !1, {
                        fileName: "app/routes/snop.result.tsx",
                        lineNumber: 124,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/snop.result.tsx",
                    lineNumber: 113,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 109,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "text-2xl font-bold", children: "+12,234" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 128,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: "+19% from last month" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 129,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 127,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 108,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardTitle, { className: "text-sm font-medium", children: "Active Now" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 136,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    className: "h-4 w-4 text-muted-foreground",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" }, void 0, !1, {
                      fileName: "app/routes/snop.result.tsx",
                      lineNumber: 149,
                      columnNumber: 25
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/snop.result.tsx",
                    lineNumber: 139,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 135,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "text-2xl font-bold", children: "+573" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 153,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: "+201 since last hour" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 154,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 152,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 134,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(Card, { className: "col-span-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardTitle, { children: "Overview" }, void 0, !1, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 163,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 162,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardContent, { className: "pl-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(Overview, {}, void 0, !1, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 166,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 165,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 161,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(Card, { className: "col-span-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardHeader, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardTitle, { children: "Recent Sales" }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 171,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardDescription, { children: "You made 265 sales this month." }, void 0, !1, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 172,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 170,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(RecentSales, {}, void 0, !1, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 177,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 176,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 169,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 160,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.result.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.result.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/snop.result.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/snop.result.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/snop.clean.jsx
var snop_clean_exports = {};
__export(snop_clean_exports, {
  default: () => snop_clean_default
});
var import_react40 = require("react");

// app/data/truck.js
var import_react39 = require("react");
var import_jsx_dev_runtime75 = require("react/jsx-dev-runtime"), TruckSummary = ({ data: data2 }) => {
  let { truck, trips } = data2, formattedMileage = (mileage) => `${mileage} Kms/liter - With load: ${truck.mileageWithLoad} Kms/liter - Without load: ${truck.mileageWithoutLoad} Kms/liter`, formattedExpenses = (expenseType) => `${expenseType}: ${truck[expenseType]} INR/${expenseType === "km" ? "Km" : "Trip"}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "truck-summary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("h2", { children: "Truck Summary" }, void 0, !1, {
      fileName: "app/data/truck.js",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-label", children: "Truck Type:" }, void 0, !1, {
        fileName: "app/data/truck.js",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-value", children: truck.type }, void 0, !1, {
        fileName: "app/data/truck.js",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/data/truck.js",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: formattedMileage("Mileage") }, void 0, !1, {
      fileName: "app/data/truck.js",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: formattedExpenses("maintenance") }, void 0, !1, {
      fileName: "app/data/truck.js",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-label", children: "Capacity:" }, void 0, !1, {
        fileName: "app/data/truck.js",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-value", children: [
        truck.capacity,
        " Bikes / Truck"
      ] }, void 0, !0, {
        fileName: "app/data/truck.js",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/data/truck.js",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: formattedExpenses("annualDistance") }, void 0, !1, {
      fileName: "app/data/truck.js",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "trip-summary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("h3", { children: "Trip Summary" }, void 0, !1, {
        fileName: "app/data/truck.js",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-label", children: "Origin:" }, void 0, !1, {
          fileName: "app/data/truck.js",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-value", children: trips[0].origin }, void 0, !1, {
          fileName: "app/data/truck.js",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/data/truck.js",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-label", children: "Destination:" }, void 0, !1, {
          fileName: "app/data/truck.js",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-value", children: trips[0].destination }, void 0, !1, {
          fileName: "app/data/truck.js",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/data/truck.js",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-label", children: "Distance:" }, void 0, !1, {
          fileName: "app/data/truck.js",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-value", children: [
          trips[0].distance,
          " Kms"
        ] }, void 0, !0, {
          fileName: "app/data/truck.js",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/data/truck.js",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-label", children: "Fixed Cost per Trip:" }, void 0, !1, {
          fileName: "app/data/truck.js",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-value", children: [
          trips[0].fixedCostPerTrip,
          " INR"
        ] }, void 0, !0, {
          fileName: "app/data/truck.js",
          lineNumber: 45,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/data/truck.js",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-label", children: "Admin Cost per Trip:" }, void 0, !1, {
          fileName: "app/data/truck.js",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-value", children: [
          trips[0].adminCostPerTrip,
          " INR"
        ] }, void 0, !0, {
          fileName: "app/data/truck.js",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/data/truck.js",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-label", children: "Variable Cost per Trip:" }, void 0, !1, {
          fileName: "app/data/truck.js",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-value", children: [
          trips[0].variableCostPerTrip,
          " INR"
        ] }, void 0, !0, {
          fileName: "app/data/truck.js",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/data/truck.js",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-label", children: "Cost per Bike:" }, void 0, !1, {
          fileName: "app/data/truck.js",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-value", children: [
          trips[0].costPerBike,
          " INR"
        ] }, void 0, !0, {
          fileName: "app/data/truck.js",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/data/truck.js",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-label", children: "Revenue per Bike:" }, void 0, !1, {
          fileName: "app/data/truck.js",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "summary-value", children: [
          trips[0].revenuePerBike,
          " INR"
        ] }, void 0, !0, {
          fileName: "app/data/truck.js",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/data/truck.js",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/data/truck.js",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/data/truck.js",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}, truck_default = TruckSummary;

// app/routes/snop.clean.jsx
var import_jsx_dev_runtime76 = require("react/jsx-dev-runtime"), SnopClean = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)("div", { className: "clean-snop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(truck_default, { data: {
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
  trips: [
    {
      origin: "Chennai",
      destination: "Kolkata",
      distance: 2279,
      fixedCostPerTrip: 309,
      adminCostPerTrip: 245,
      variableCostPerTrip: 21640,
      costPerBike: 1518,
      revenuePerBike: 1676
    }
  ]
} }, void 0, !1, {
  fileName: "app/routes/snop.clean.jsx",
  lineNumber: 35,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/snop.clean.jsx",
  lineNumber: 34,
  columnNumber: 5
}, this), snop_clean_default = SnopClean;

// app/routes/snop.input.tsx
var snop_input_exports = {};
__export(snop_input_exports, {
  action: () => action4,
  default: () => SnopInput,
  loader: () => loader6
});
var import_react41 = __toESM(require("react")), import_react42 = require("@remix-run/react");

// app/models/input.server.ts
function getInput() {
  return prisma.planInput.findFirst();
}

// app/routes/snop.input.tsx
var import_node8 = require("@remix-run/node");
var import_jsx_dev_runtime77 = require("react/jsx-dev-runtime");
function convertToNumbers(obj) {
  let numericFields = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "material_cost_pu",
    "inv_hold_cost_pupm",
    "stockout_cost_pupm",
    "hiring_cost_pw",
    "firing_cost_pw",
    "worker_cost_pm",
    "overtime_cost_phr",
    "outsourcing_cost_pu",
    "max_work_hrs_pwpm",
    "max_overtime_hrs_pwpm",
    "inventory_start",
    "inventory_end",
    "backlog_start",
    "backlog_end",
    "num_workers_start",
    "min_end_workers",
    "max_end_workers",
    "labor_hrs_pu"
  ], converted = { ...obj };
  return numericFields.forEach((field) => {
    converted[field] && (converted[field] = parseFloat(converted[field]));
  }), converted;
}
var loader6 = async () => {
  let snopInput = await getInput();
  return (0, import_node8.json)({ snopInput });
}, action4 = async ({ request }) => {
  let formData = await request.formData(), updates = convertToNumbers(Object.fromEntries(formData));
  return await createScenario(updates), (0, import_node8.redirect)("/snop/scenario");
};
function SnopInput() {
  let [date, setDate] = import_react41.default.useState(/* @__PURE__ */ new Date()), { snopInput } = (0, import_react42.useLoaderData)(), navigate = (0, import_react42.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)(SnopForm, { inputData: snopInput }, void 0, !1, {
    fileName: "app/routes/snop.input.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

// app/routes/snop.table.jsx
var snop_table_exports = {};
__export(snop_table_exports, {
  default: () => App2
});

// app/components/TaskTable.jsx
var import_react50 = require("react"), import_react51 = require("@chakra-ui/react"), import_react_table2 = require("@tanstack/react-table");

// app/data/data.js
var STATUS_ON_DECK = { id: 1, name: "On Deck", color: "blue.300" }, STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  color: "yellow.400"
}, STATUS_TESTING = { id: 3, name: "Testing", color: "pink.300" }, STATUS_DEPLOYED = { id: 4, name: "Deployed", color: "green.300" }, STATUSES = [
  STATUS_ON_DECK,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_DEPLOYED
], DATA = [
  {
    task: "Add a New Feature",
    status: STATUS_ON_DECK,
    due: /* @__PURE__ */ new Date("2023/10/15"),
    notes: "This is a note"
  },
  {
    task: "Write Integration Tests",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Use Jest"
  },
  {
    task: "Add Instagram Integration",
    status: STATUS_DEPLOYED,
    due: null,
    notes: ""
  },
  {
    task: "Cleanup Database",
    status: null,
    due: /* @__PURE__ */ new Date("2023/02/15"),
    notes: "Remove old data"
  },
  {
    task: "Refactor API Endpoints",
    status: STATUS_TESTING,
    due: null,
    notes: ""
  },
  {
    task: "Add Documentation to API",
    status: null,
    due: /* @__PURE__ */ new Date("2023/09/12"),
    notes: "Add JS Docs to all endpoints"
  },
  {
    task: "Update NPM Packages",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Upgrade React & Chakra UI"
  }
], data_default = DATA;

// app/components/EditableCell.jsx
var import_react43 = require("@chakra-ui/react"), import_react44 = require("react"), import_jsx_dev_runtime78 = require("react/jsx-dev-runtime"), EditableCell = ({ getValue, row, column, table }) => {
  let initialValue = getValue(), [value, setValue] = (0, import_react44.useState)(initialValue), onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };
  return (0, import_react44.useEffect)(() => {
    setValue(initialValue);
  }, [initialValue]), /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
    import_react43.Input,
    {
      value,
      onChange: (e) => setValue(e.target.value),
      onBlur,
      variant: "filled",
      size: "sm",
      w: "85%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    void 0,
    !1,
    {
      fileName: "app/components/EditableCell.jsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}, EditableCell_default = EditableCell;

// app/components/StausCell.jsx
var import_react45 = require("@chakra-ui/react");
var import_jsx_dev_runtime79 = require("react/jsx-dev-runtime"), ColorIcon = ({ color, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(import_react45.Box, { w: "12px", h: "12px", bg: color, borderRadius: "3px", ...props }, void 0, !1, {
  fileName: "app/components/StausCell.jsx",
  lineNumber: 5,
  columnNumber: 3
}, this), StatusCell = ({ getValue, row, column, table }) => {
  let { name, color } = getValue() || {}, { updateData } = table.options.meta;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(import_react45.Menu, { isLazy: !0, offset: [0, 0], flip: !1, autoSelect: !1, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(
      import_react45.MenuButton,
      {
        h: "100%",
        w: "100%",
        textAlign: "left",
        p: 1.5,
        bg: color || "transparent",
        color: "gray.900",
        children: name
      },
      void 0,
      !1,
      {
        fileName: "app/components/StausCell.jsx",
        lineNumber: 13,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(import_react45.MenuList, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(import_react45.MenuItem, { onClick: () => updateData(row.index, column.id, null), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(ColorIcon, { color: "red.400", mr: 3 }, void 0, !1, {
          fileName: "app/components/StausCell.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        "None"
      ] }, void 0, !0, {
        fileName: "app/components/StausCell.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      STATUSES.map((status) => /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(
        import_react45.MenuItem,
        {
          onClick: () => updateData(row.index, column.id, status),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(ColorIcon, { color: status.color, mr: 3 }, void 0, !1, {
              fileName: "app/components/StausCell.jsx",
              lineNumber: 33,
              columnNumber: 13
            }, this),
            status.name
          ]
        },
        status.id,
        !0,
        {
          fileName: "app/components/StausCell.jsx",
          lineNumber: 29,
          columnNumber: 11
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/components/StausCell.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/StausCell.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}, StausCell_default = StatusCell;

// app/components/DateCell.jsx
var import_react46 = require("react"), import_react47 = require("@chakra-ui/react"), import_react_datepicker = __toESM(require("react-datepicker"));

// app/components/icons/CalendarIcon.jsx
var import_jsx_dev_runtime80 = require("react/jsx-dev-runtime"), CalendarIcon3 = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/CalendarIcon.jsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/CalendarIcon.jsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), CalendarIcon_default = CalendarIcon3;

// app/components/DateCell.jsx
var import_jsx_dev_runtime81 = require("react/jsx-dev-runtime"), DateCustomInput = (0, import_react46.forwardRef)(
  ({ value, onClick, clearDate }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(import_react47.Center, { ref, onClick, cursor: "pointer", children: value ? /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(import_jsx_dev_runtime81.Fragment, { children: [
    value,
    /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(
      import_react47.Box,
      {
        pos: "absolute",
        right: 3,
        fontSize: "md",
        color: "red.300",
        onClick: (e) => {
          e.stopPropagation(), clearDate();
        },
        children: "\xD7"
      },
      void 0,
      !1,
      {
        fileName: "app/components/DateCell.jsx",
        lineNumber: 13,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/DateCell.jsx",
    lineNumber: 10,
    columnNumber: 3
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(import_react47.Icon, { as: CalendarIcon_default, fontSize: "xl" }, void 0, !1, {
    fileName: "app/components/DateCell.jsx",
    lineNumber: 27,
    columnNumber: 3
  }, this) }, void 0, !1, {
    fileName: "app/components/DateCell.jsx",
    lineNumber: 8,
    columnNumber: 1
  }, this)
), DateCell = ({ getValue, row, column, table }) => {
  let date = getValue(), { updateData } = table.options.meta;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(
    import_react_datepicker.default,
    {
      wrapperClassName: "date-wrapper",
      dateFormat: "MMM d",
      selected: date,
      onChange: (date2) => updateData(row.index, column.id, date2),
      customInput: /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(
        DateCustomInput,
        {
          clearDate: () => updateData(row.index, column.id, null)
        },
        void 0,
        !1,
        {
          fileName: "app/components/DateCell.jsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/DateCell.jsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  );
}, DateCell_default = DateCell;

// app/components/Filters.jsx
var import_react49 = require("@chakra-ui/react");

// app/components/icons/SearchIcon.jsx
var import_jsx_dev_runtime82 = require("react/jsx-dev-runtime"), SearchIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/SearchIcon.jsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/SearchIcon.jsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), SearchIcon_default = SearchIcon;

// app/components/FilterPopover.jsx
var import_react48 = require("@chakra-ui/react");

// app/components/icons/FilterIcon.jsx
var import_jsx_dev_runtime83 = require("react/jsx-dev-runtime"), FilterIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime83.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime83.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/FilterIcon.jsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/FilterIcon.jsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), FilterIcon_default = FilterIcon;

// app/components/FilterPopover.jsx
var import_jsx_dev_runtime84 = require("react/jsx-dev-runtime"), StatusItem = ({ status, setColumnFilters, isActive }) => /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
  import_react48.Flex,
  {
    align: "center",
    cursor: "pointer",
    borderRadius: 5,
    fontWeight: "bold",
    p: 1.5,
    bg: isActive ? "gray.800" : "transparent",
    _hover: {
      bg: "gray.800"
    },
    onClick: () => setColumnFilters((prev) => {
      let statuses2 = prev.find((filter) => filter.id === "status")?.value;
      return statuses2 ? prev.map(
        (f) => f.id === "status" ? {
          ...f,
          value: isActive ? statuses2.filter((s) => s !== status.id) : statuses2.concat(status.id)
        } : f
      ) : prev.concat({
        id: "status",
        value: [status.id]
      });
    }),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(ColorIcon, { color: status.color, mr: 3 }, void 0, !1, {
        fileName: "app/components/FilterPopover.jsx",
        lineNumber: 52,
        columnNumber: 5
      }, this),
      status.name
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/FilterPopover.jsx",
    lineNumber: 19,
    columnNumber: 3
  },
  this
), FilterPopover = ({ columnFilters, setColumnFilters }) => {
  let filterStatuses = columnFilters.find((f) => f.id === "status")?.value || [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_react48.Popover, { isLazy: !0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_react48.PopoverTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
      import_react48.Button,
      {
        size: "sm",
        color: filterStatuses.length > 0 ? "blue.300" : "",
        leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_react48.Icon, { as: FilterIcon_default, fontSize: 18 }, void 0, !1, {
          fileName: "app/components/FilterPopover.jsx",
          lineNumber: 67,
          columnNumber: 21
        }, this),
        children: "Filter"
      },
      void 0,
      !1,
      {
        fileName: "app/components/FilterPopover.jsx",
        lineNumber: 64,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/FilterPopover.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_react48.PopoverContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_react48.PopoverArrow, {}, void 0, !1, {
        fileName: "app/components/FilterPopover.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_react48.PopoverCloseButton, {}, void 0, !1, {
        fileName: "app/components/FilterPopover.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_react48.PopoverBody, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_react48.Text, { fontSize: "md", fontWeight: "bold", mb: 4, children: "Filter By:" }, void 0, !1, {
          fileName: "app/components/FilterPopover.jsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_react48.Text, { fontWeight: "bold", color: "gray.400", mb: 1, children: "Status" }, void 0, !1, {
          fileName: "app/components/FilterPopover.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_react48.VStack, { align: "flex-start", spacing: 1, children: STATUSES.map((status) => /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
          StatusItem,
          {
            status,
            isActive: filterStatuses.includes(status.id),
            setColumnFilters
          },
          status.id,
          !1,
          {
            fileName: "app/components/FilterPopover.jsx",
            lineNumber: 84,
            columnNumber: 15
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/FilterPopover.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/FilterPopover.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/FilterPopover.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FilterPopover.jsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}, FilterPopover_default = FilterPopover;

// app/components/Filters.jsx
var import_jsx_dev_runtime85 = require("react/jsx-dev-runtime"), Filters = ({ columnFilters, setColumnFilters }) => {
  let taskName = columnFilters.find((f) => f.id === "task")?.value || "", onFilterChange = (id, value) => setColumnFilters(
    (prev) => prev.filter((f) => f.id !== id).concat({
      id,
      value
    })
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(import_react49.HStack, { mb: 6, spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(import_react49.InputGroup, { size: "sm", maxW: "12rem", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(import_react49.InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(import_react49.Icon, { as: SearchIcon_default }, void 0, !1, {
        fileName: "app/components/Filters.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Filters.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(
        import_react49.Input,
        {
          type: "text",
          variant: "filled",
          placeholder: "Task name",
          borderRadius: 5,
          value: taskName,
          onChange: (e) => onFilterChange("task", e.target.value)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Filters.jsx",
          lineNumber: 30,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Filters.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(
      FilterPopover_default,
      {
        columnFilters,
        setColumnFilters
      },
      void 0,
      !1,
      {
        fileName: "app/components/Filters.jsx",
        lineNumber: 39,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Filters.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}, Filters_default = Filters;

// app/components/icons/SortIcon.jsx
var import_jsx_dev_runtime86 = require("react/jsx-dev-runtime"), SortIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/SortIcon.jsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/SortIcon.jsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), SortIcon_default = SortIcon;

// app/components/TaskTable.jsx
var import_jsx_dev_runtime87 = require("react/jsx-dev-runtime"), columns2 = [
  {
    accessorKey: "task",
    header: "Task",
    size: 225,
    cell: EditableCell_default,
    enableColumnFilter: !0,
    filterFn: "includesString"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: StausCell_default,
    enableSorting: !1,
    enableColumnFilter: !0,
    filterFn: (row, columnId, filterStatuses) => {
      if (filterStatuses.length === 0)
        return !0;
      let status = row.getValue(columnId);
      return filterStatuses.includes(status?.id);
    }
  },
  {
    accessorKey: "due",
    header: "Due",
    cell: DateCell_default
  },
  {
    accessorKey: "notes",
    header: "Notes",
    size: 225,
    cell: EditableCell_default
  }
], TaskTable = () => {
  let [data2, setData] = (0, import_react50.useState)(data_default), [columnFilters, setColumnFilters] = (0, import_react50.useState)([]), table = (0, import_react_table2.useReactTable)({
    data: data2,
    columns: columns2,
    state: {
      columnFilters
    },
    getCoreRowModel: (0, import_react_table2.getCoreRowModel)(),
    getFilteredRowModel: (0, import_react_table2.getFilteredRowModel)(),
    getPaginationRowModel: (0, import_react_table2.getPaginationRowModel)(),
    getSortedRowModel: (0, import_react_table2.getSortedRowModel)(),
    columnResizeMode: "onChange",
    meta: {
      updateData: (rowIndex, columnId, value) => setData(
        (prev) => prev.map(
          (row, index) => index === rowIndex ? {
            ...prev[rowIndex],
            [columnId]: value
          } : row
        )
      )
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(import_react51.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(
      Filters_default,
      {
        columnFilters,
        setColumnFilters
      },
      void 0,
      !1,
      {
        fileName: "app/components/TaskTable.jsx",
        lineNumber: 84,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(import_react51.Box, { className: "table", w: table.getTotalSize(), children: [
      table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(import_react51.Box, { className: "tr", children: headerGroup.headers.map((header) => /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(import_react51.Box, { className: "th", w: header.getSize(), children: [
        header.column.columnDef.header,
        header.column.getCanSort() && /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(
          import_react51.Icon,
          {
            as: SortIcon_default,
            mx: 3,
            fontSize: 14,
            onClick: header.column.getToggleSortingHandler()
          },
          void 0,
          !1,
          {
            fileName: "app/components/TaskTable.jsx",
            lineNumber: 95,
            columnNumber: 19
          },
          this
        ),
        {
          asc: " \u{1F53C}",
          desc: " \u{1F53D}"
        }[header.column.getIsSorted()],
        /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(
          import_react51.Box,
          {
            onMouseDown: header.getResizeHandler(),
            onTouchStart: header.getResizeHandler(),
            className: `resizer ${header.column.getIsResizing() ? "isResizing" : ""}`
          },
          void 0,
          !1,
          {
            fileName: "app/components/TaskTable.jsx",
            lineNumber: 108,
            columnNumber: 17
          },
          this
        )
      ] }, header.id, !0, {
        fileName: "app/components/TaskTable.jsx",
        lineNumber: 92,
        columnNumber: 15
      }, this)) }, headerGroup.id, !1, {
        fileName: "app/components/TaskTable.jsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)),
      table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(import_react51.Box, { className: "tr", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(import_react51.Box, { className: "td", w: cell.column.getSize(), children: (0, import_react_table2.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id, !1, {
        fileName: "app/components/TaskTable.jsx",
        lineNumber: 122,
        columnNumber: 15
      }, this)) }, row.id, !1, {
        fileName: "app/components/TaskTable.jsx",
        lineNumber: 120,
        columnNumber: 11
      }, this))
    ] }, void 0, !0, {
      fileName: "app/components/TaskTable.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/TaskTable.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(import_react51.Text, { mb: 2, children: [
      "Page ",
      table.getState().pagination.pageIndex + 1,
      " of",
      " ",
      table.getPageCount()
    ] }, void 0, !0, {
      fileName: "app/components/TaskTable.jsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(import_react51.ButtonGroup, { size: "sm", isAttached: !0, variant: "outline", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(
        import_react51.Button,
        {
          onClick: () => table.previousPage(),
          isDisabled: !table.getCanPreviousPage(),
          children: "<"
        },
        void 0,
        !1,
        {
          fileName: "app/components/TaskTable.jsx",
          lineNumber: 135,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(
        import_react51.Button,
        {
          onClick: () => table.nextPage(),
          isDisabled: !table.getCanNextPage(),
          children: ">"
        },
        void 0,
        !1,
        {
          fileName: "app/components/TaskTable.jsx",
          lineNumber: 141,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/TaskTable.jsx",
      lineNumber: 134,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/TaskTable.jsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}, TaskTable_default = TaskTable;

// app/routes/snop.table.jsx
var import_react53 = require("@chakra-ui/react");

// app/styles/theme.js
var import_react52 = require("@chakra-ui/react");

// app/styles/styles.js
var styles = {
  global: {
    "html, body": {
      backgroundColor: "gray.900",
      color: "black"
    },
    svg: {
      cursor: "pointer"
    },
    ".table": {
      border: "1px solid #424242"
    },
    ".tr": {
      display: "flex",
      width: "fit-content"
    },
    ".th, .td": { boxShadow: "inset 0 0 0 1px #424242" },
    ".th": {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "gray.400",
      padding: "0.5rem",
      fontWeight: "bold",
      fontSize: "xs",
      textTransform: "uppercase",
      textAlign: "center"
    },
    ".td > input": {
      m: "1",
      padding: "0.2rem",
      bg: "transparent",
      maxW: "100%"
    },
    ".date-wrapper": {
      display: "flex",
      alignItems: "center",
      w: "100%",
      h: "100%"
    },
    ".resizer": {
      position: "absolute",
      opacity: 0,
      top: 0,
      right: 0,
      h: "100%",
      w: "5px",
      bg: "#27bbff",
      cursor: "col-resize",
      userSelect: "none",
      touchAction: "none",
      borderRadius: "6px"
    },
    ".resizer.isResizing": {
      bg: "#2eff31",
      opacity: 1
    },
    "*:hover > .resizer": {
      opacity: 1
    }
  }
}, styles_default = styles;

// app/styles/theme.js
var theme = (0, import_react52.extendTheme)({
  styles: styles_default
}), theme_default = theme;

// app/routes/snop.table.jsx
var import_jsx_dev_runtime88 = require("react/jsx-dev-runtime");
function App2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(import_jsx_dev_runtime88.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(import_react53.ChakraProvider, { theme: theme_default, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("h1", { className: "mb-10 ", children: "TanStack Table" }, void 0, !1, {
      fileName: "app/routes/snop.table.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(TaskTable_default, {}, void 0, !1, {
      fileName: "app/routes/snop.table.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.table.jsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/snop.table.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/snop.truck.tsx
var snop_truck_exports = {};
__export(snop_truck_exports, {
  default: () => Input4
});
var React24 = __toESM(require("react")), import_react54 = require("@remix-run/react");
var import_outline5 = require("@heroicons/react/24/outline"), import_lucide_react = require("lucide-react");

// app/kendo/charts/waterfall/WrapperWaterfallChart.jsx
var import_kendoWaterfallChart = __toESM(require_kendoWaterfallChart()), import_jsx_dev_runtime89 = require("react/jsx-dev-runtime"), Fallback10 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(
  "path",
  {
    d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06",
    stroke: "currentColor",
    strokeWidth: 0,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  void 0,
  !1,
  {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 7,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
  lineNumber: 6,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
  lineNumber: 5,
  columnNumber: 12
}, this);
function WrapperWaterfallChart({ data: data2, field, category, summary, format: format3 = "C0", position = "insideEnd" }) {
  return typeof document < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(import_kendoWaterfallChart.default, { data: data2 }, void 0, !1, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 19,
    columnNumber: 46
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(Fallback10, {}, void 0, !1, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 19,
    columnNumber: 87
  }, this);
}

// app/kendo/rawData/truckData.js
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
], bikeData = [
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
var import_jsx_dev_runtime90 = require("react/jsx-dev-runtime");
var kpiService_m9 = [
  {
    Name: "Cost per Trip",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(WrapperWaterfallChart, { data: tripData }, void 0, !1, {
      fileName: "app/data/truckData.js",
      lineNumber: 19,
      columnNumber: 16
    }, this)
  },
  {
    Name: "Cost per Bike",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(WrapperWaterfallChart, { data: bikeData }, void 0, !1, {
      fileName: "app/data/truckData.js",
      lineNumber: 23,
      columnNumber: 16
    }, this)
  }
];

// app/data/truck.json
var truck_default2 = [
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
var import_jsx_dev_runtime91 = require("react/jsx-dev-runtime");
function TruckInput({ truck }) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "grid w-full  gap-10", children: truck.map((truck2) => /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "grid grid-cols-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(Label, { className: "text-xl", htmlFor: truck2.truck_name, children: [
      truck2.truck_name,
      /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("p", { className: "text-gray-400 text-sm", children: truck2.sub }, void 0, !1, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(
      Input,
      {
        id: truck2.truck_value,
        placeholder: "constraint value",
        defaultValue: truck2.truck_value,
        className: "text-xl text-gray-500 text-center"
      },
      void 0,
      !1,
      {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    )
  ] }, truck2.bucket, !0, {
    fileName: "app/components/truck-form.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/truck-form.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/components/admin-form.tsx
var import_jsx_dev_runtime92 = require("react/jsx-dev-runtime");
function AdminInput({ admin }) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("div", { className: "grid w-full gap-10", children: admin.map((admin2) => /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("div", { className: "grid grid-cols-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(Label, { className: "text-xl", htmlFor: admin2.admin_name, children: [
      admin2.admin_name,
      /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("p", { className: "text-gray-400 text-sm", children: admin2.sub }, void 0, !1, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(
      Input,
      {
        id: admin2.admin_value,
        placeholder: "admin value",
        defaultValue: admin2.admin_value,
        className: "text-xl text-gray-500 text-center"
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    )
  ] }, admin2.bucket, !0, {
    fileName: "app/components/admin-form.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/admin-form.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/snop.truck.tsx
var import_jsx_dev_runtime93 = require("react/jsx-dev-runtime"), navigation4 = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" }
], stats = [
  { name: "Cost per Bike (INR/Bike)", stat: "2,279" },
  { name: "Cost per Trip Margin", stat: "136,744" },
  { name: "Cost per km", stat: "41" }
], frameworks = [
  {
    value: "next.js",
    label: "Kolkata"
  },
  {
    value: "sveltekit",
    label: "Chennai"
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js"
  },
  {
    value: "remix",
    label: "Remix"
  },
  {
    value: "astro",
    label: "Astro"
  }
];
function DemoContainer3({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
    "div",
    {
      className: cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/routes/snop.truck.tsx",
      lineNumber: 73,
      columnNumber: 5
    },
    this
  );
}
function Input4() {
  let [oropen, setorOpen] = React24.useState(!1), [desopen, setdesOpen] = React24.useState(!1), [disopen, setdisOpen] = React24.useState(!1), [tyopen, settyOpen] = React24.useState(!1), [bacopen, setbacOpen] = React24.useState(!1), [value, setValue] = React24.useState(""), [date, setDate] = React24.useState(/* @__PURE__ */ new Date());
  return /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
      "nav",
      {
        className: "ml-6 pl-6 flex items-center justify-center",
        "aria-label": "Global",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation4.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
          import_react54.Link,
          {
            to: item.to,
            className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200",
            children: item.name
          },
          item.id,
          !1,
          {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 118,
            columnNumber: 15
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/snop.truck.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.truck.tsx",
        lineNumber: 112,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/snop.truck.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-center  justify-between ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("h2", { className: "text-xl lg:text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text  bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Transportation Cleansheet" }, void 0, !1, {
        fileName: "app/routes/snop.truck.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.truck.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "mt-2 items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "rounded-xl p-6 border shadow-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-center space-x-4 justify-between mb-4 p-6 border-b rounded-lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("p", { className: "text-lg text-blue-900 font-semibold", children: "Origin" }, void 0, !1, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 139,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Popover3, { open: oropen, onOpenChange: setorOpen, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                  Button,
                  {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": oropen,
                    className: "w-[125px] justify-between bg-blue-900 text-white hover:bg-blue-800 hover:text-white",
                    children: [
                      value ? frameworks.find(
                        (framework) => framework.value === value
                      )?.label : "Chennai",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(import_lucide_react.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, !1, {
                        fileName: "app/routes/snop.truck.tsx",
                        lineNumber: 153,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 142,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 141,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(PopoverContent, { className: "w-[130px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                  CommandItem,
                  {
                    value: framework.value,
                    onSelect: (currentValue) => {
                      setValue(
                        currentValue === value ? "" : currentValue
                      ), setorOpen(!1);
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                        import_lucide_react.Check,
                        {
                          className: cn(
                            "mr-2 h-4 w-4",
                            value === framework.value ? "opacity-100" : "opacity-0"
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.truck.tsx",
                          lineNumber: 170,
                          columnNumber: 29
                        },
                        this
                      ),
                      framework.label
                    ]
                  },
                  framework.value,
                  !0,
                  {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 160,
                    columnNumber: 27
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 158,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 157,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 156,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 140,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 138,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("p", { className: "text-lg text-blue-900 font-semibold", children: "Destination" }, void 0, !1, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 187,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Popover3, { open: desopen, onOpenChange: setdesOpen, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                  Button,
                  {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": desopen,
                    className: "w-[125px] justify-between bg-blue-900 text-white hover:bg-blue-800 hover:text-white",
                    children: [
                      value ? frameworks.find(
                        (framework) => framework.value === value
                      )?.label : "Kolkata",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(import_lucide_react.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, !1, {
                        fileName: "app/routes/snop.truck.tsx",
                        lineNumber: 203,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 192,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 191,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(PopoverContent, { className: "w-[130px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                  CommandItem,
                  {
                    value: framework.value,
                    onSelect: (currentValue) => {
                      setValue(
                        currentValue === value ? "" : currentValue
                      ), setdesOpen(!1);
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                        import_lucide_react.Check,
                        {
                          className: cn(
                            "mr-2 h-4 w-4",
                            value === framework.value ? "opacity-100" : "opacity-0"
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.truck.tsx",
                          lineNumber: 220,
                          columnNumber: 29
                        },
                        this
                      ),
                      framework.label
                    ]
                  },
                  framework.value,
                  !0,
                  {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 210,
                    columnNumber: 27
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 208,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 207,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 206,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 190,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 186,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("p", { className: "text-lg text-blue-900 font-semibold", children: "Distance" }, void 0, !1, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 238,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Popover3, { open: disopen, onOpenChange: setdisOpen, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                  Button,
                  {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": disopen,
                    className: "w-[100px] justify-between bg-blue-900 text-white hover:bg-blue-800 hover:text-white",
                    children: [
                      value ? frameworks.find(
                        (framework) => framework.value === value
                      )?.label : "1,676",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(import_lucide_react.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, !1, {
                        fileName: "app/routes/snop.truck.tsx",
                        lineNumber: 252,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 241,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 240,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(PopoverContent, { className: "w-[130px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                  CommandItem,
                  {
                    value: framework.value,
                    onSelect: (currentValue) => {
                      setValue(
                        currentValue === value ? "" : currentValue
                      ), setdisOpen(!1);
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                        import_lucide_react.Check,
                        {
                          className: cn(
                            "mr-2 h-4 w-4",
                            value === framework.value ? "opacity-100" : "opacity-0"
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.truck.tsx",
                          lineNumber: 269,
                          columnNumber: 29
                        },
                        this
                      ),
                      framework.label
                    ]
                  },
                  framework.value,
                  !0,
                  {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 259,
                    columnNumber: 27
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 257,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 256,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 255,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 239,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 237,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("p", { className: "text-lg text-blue-900 font-semibold", children: "Backhaul" }, void 0, !1, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 287,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Popover3, { open: bacopen, onOpenChange: setbacOpen, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                  Button,
                  {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": bacopen,
                    className: "w-[120px] justify-between bg-blue-900 text-white hover:bg-blue-800 hover:text-white",
                    children: [
                      value ? frameworks.find(
                        (framework) => framework.value === value
                      )?.label : "Backhaul",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(import_lucide_react.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, !1, {
                        fileName: "app/routes/snop.truck.tsx",
                        lineNumber: 301,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 290,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 289,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(PopoverContent, { className: "w-[120px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                  CommandItem,
                  {
                    value: framework.value,
                    onSelect: (currentValue) => {
                      setValue(
                        currentValue === value ? "" : currentValue
                      ), setbacOpen(!1);
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                        import_lucide_react.Check,
                        {
                          className: cn(
                            "mr-2 h-4 w-4",
                            value === framework.value ? "opacity-100" : "opacity-0"
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.truck.tsx",
                          lineNumber: 318,
                          columnNumber: 29
                        },
                        this
                      ),
                      framework.label
                    ]
                  },
                  framework.value,
                  !0,
                  {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 308,
                    columnNumber: 27
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 306,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 305,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 304,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 288,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 286,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 137,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "mt-8 items-start justify-center gap-6 grid grid-cols-1 lg:grid-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(DemoContainer3, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Card, { className: "  text-blue-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(import_outline5.TruckIcon, { className: "h-8 w-8 mr-2" }, void 0, !1, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 341,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("span", { className: "text-2xl", children: "Truck Parameters" }, void 0, !1, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 342,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 340,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "border-b" }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 345,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 339,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CardContent, { className: "grid gap-10 mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "text-xl text-blue-900 font-semibold ", children: "Truck Type" }, void 0, !1, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 350,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Popover3, { open: tyopen, onOpenChange: settyOpen, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                      Button,
                      {
                        variant: "outline",
                        role: "combobox",
                        "aria-expanded": tyopen,
                        className: " lg:w-[210px] w-[155px] justify-between text-xl ",
                        children: [
                          value ? frameworks.find(
                            (framework) => framework.value === value
                          )?.label : "Kolkata",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(import_lucide_react.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, !1, {
                            fileName: "app/routes/snop.truck.tsx",
                            lineNumber: 367,
                            columnNumber: 31
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/snop.truck.tsx",
                        lineNumber: 356,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/routes/snop.truck.tsx",
                      lineNumber: 355,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(PopoverContent, { className: "w-[200px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                      CommandItem,
                      {
                        value: framework.value,
                        onSelect: (currentValue) => {
                          setValue(
                            currentValue === value ? "" : currentValue
                          ), settyOpen(!1);
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
                            import_lucide_react.Check,
                            {
                              className: cn(
                                "mr-2 h-4 w-4",
                                value === framework.value ? "opacity-100" : "opacity-0"
                              )
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/snop.truck.tsx",
                              lineNumber: 386,
                              columnNumber: 37
                            },
                            this
                          ),
                          framework.label
                        ]
                      },
                      framework.value,
                      !0,
                      {
                        fileName: "app/routes/snop.truck.tsx",
                        lineNumber: 374,
                        columnNumber: 35
                      },
                      this
                    )) }, void 0, !1, {
                      fileName: "app/routes/snop.truck.tsx",
                      lineNumber: 372,
                      columnNumber: 31
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/snop.truck.tsx",
                      lineNumber: 371,
                      columnNumber: 29
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/snop.truck.tsx",
                      lineNumber: 370,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 354,
                    columnNumber: 25
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 353,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 349,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(TruckInput, { truck: truck_default2 }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 404,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 348,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 338,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 337,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(DemoContainer3, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Card, { className: " text-blue-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CardHeader, { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(import_outline5.MapIcon, { className: "h-8 w-8 mr-2" }, void 0, !1, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 412,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("span", { className: "text-2xl", children: " Route Admin Expenses" }, void 0, !1, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 413,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 411,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "border-b" }, void 0, !1, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 416,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 410,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(AdminInput, { admin: admin_default }, void 0, !1, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 419,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 418,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 409,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 408,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 336,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex justify-end  pt-6 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Button, { className: "bg-blue-900 hover:bg-blue-800 text-lg", children: "Submit" }, void 0, !1, {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 425,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 424,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.truck.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(DemoContainer3, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CardHeader, { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(import_outline5.PresentationChartLineIcon, { className: "h-8 w-8 mr-2" }, void 0, !1, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 436,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("span", { className: "text-2xl", children: "Cleansheet Summary" }, void 0, !1, {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 437,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 435,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "border-b" }, void 0, !1, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 440,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 434,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(CardContent, { className: "grid gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("dl", { className: "grid grid-cols-1 gap-6 sm:grid-cols-3", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
              "div",
              {
                className: "rounded-2xl bg-gray-100 border px-4 py-5 shadow",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("dd", { className: "flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900", children: item.stat }, void 0, !1, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 450,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("dt", { className: "mt-2 flex justify-center truncate text-sm font-medium text-gray-500", children: item.name }, void 0, !1, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 453,
                    columnNumber: 27
                  }, this)
                ]
              },
              item.name,
              !0,
              {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 446,
                columnNumber: 25
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 444,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 443,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("ul", { role: "list", className: "grid grid-cols-1 gap-2 mt-2", children: kpiService_m9.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
              "li",
              {
                className: "col-span-1 flex flex-col divide-y divide-white",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("h3", { className: "text-base font-medium text-gray-900", children: kpi.Name }, void 0, !1, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 470,
                    columnNumber: 31
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 469,
                    columnNumber: 29
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 468,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "mt-2", children: kpi.container }, void 0, !1, {
                    fileName: "app/routes/snop.truck.tsx",
                    lineNumber: 475,
                    columnNumber: 27
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.truck.tsx",
                  lineNumber: 467,
                  columnNumber: 25
                }, this)
              },
              kpi.Name,
              !1,
              {
                fileName: "app/routes/snop.truck.tsx",
                lineNumber: 463,
                columnNumber: 23
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/snop.truck.tsx",
              lineNumber: 461,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.truck.tsx",
            lineNumber: 442,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.truck.tsx",
          lineNumber: 433,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/snop.truck.tsx",
          lineNumber: 432,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/snop.truck.tsx",
          lineNumber: 431,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/snop.truck.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/snop.truck.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.truck.tsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => SCMDashboardRoute
});
var import_react55 = __toESM(require("react")), import_solid12 = require("@heroicons/react/20/solid"), import_react56 = require("@remix-run/react"), import_react57 = require("@headlessui/react"), import_clsx2 = __toESM(require("clsx")), import_jsx_dev_runtime94 = require("react/jsx-dev-runtime");
function classNames10(...classes) {
  return classes.filter(Boolean).join(" ");
}
var navigation5 = [
  { name: "Overview", to: "/snop/dashboard/overview", current: !0 },
  { name: "Demand", to: "/snop/demand", current: !1 },
  { name: "Supply", to: "supply", current: !1 },
  { name: "Inventory", to: "inventory", current: !1 },
  { name: "Spend", to: "spend", current: !1 },
  { name: "Finance", to: "finance", current: !1 },
  { name: "Sales & Marketing", to: "sales", current: !1 },
  { name: "Campaign", to: "campaign", current: !1 }
];
function NavItem({ to, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
    import_react56.NavLink,
    {
      to,
      prefetch: "intent",
      className: ({ isActive }) => (0, import_clsx2.default)(
        "rounded-md px-2 py-2 text-md font-semibold md:px-3",
        isActive ? "py-2 bg-sky-600 text-white font-bold bg-opacity-75 border" : "text-white hover:bg-sky-300 hover:bg-opacity-75"
      ),
      "aria-current": ({ isActive }) => isActive ? "page" : void 0,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}
function SCMDashboardRoute() {
  let data2 = (0, import_react56.useLoaderData)(), matches = (0, import_react56.useMatches)(), currRoute = matches[matches.length - 1].id, dashboardHome = "/demo/dashboard/overview", scmOverviewMatches = matches.some((m) => m.id === "routes/snop/dashboard/overview"), inventoryMatches = matches.some((m) => m.id === "routes/snop/dashboard/inventory"), demandMatches = matches.some((m) => m.id === "routes/snop/dashboard/demand"), supplyMatches = matches.some((m) => m.id === "routes/snop/dashboard/supply"), dispatchMatches = matches.some((m) => m.id === "routes/snop/dashboard/dispatch"), filteredValues = [scmOverviewMatches, inventoryMatches, demandMatches, dispatchMatches, supplyMatches].filter((value) => value), items2 = [
    { id: 1, name: "Review", description: "Conduct periodic (month/quarter/year) performance review of key business KPIs", to: "review" },
    { id: 2, name: "Meeting", description: "Conduct daily/weekly data driven meetings and create plan of action ", to: `${currRoute}/meeting` }
  ], [selected, setSelected] = import_react55.default.useState(items2[0]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_jsx_dev_runtime94.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "min-h-screen overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_react57.Disclosure, { as: "nav", className: "bg-sky-500 ", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_jsx_dev_runtime94.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "flex h-16 items-center justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: " ml-10 flex items-baseline space-x-4", children: navigation5.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(NavItem, { to: item.to, children: item.name }, item.name, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 90,
          columnNumber: 27
        }, this)) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 88,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 87,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 86,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "-mr-2 flex md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_react57.Disclosure.Button, { className: "flex items-center justify-start rounded-md bg-sky-600 p-2 text-white hover:bg-sky-700 hover:bg-opacity-75", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 100,
            columnNumber: 23
          }, this),
          open ? /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_solid12.XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 102,
            columnNumber: 25
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_solid12.Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 104,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 99,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 97,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 84,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_react57.Disclosure.Panel, { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "space-y-1 px-2 pb-3 pt-2 sm:px-3", children: navigation5.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
        import_react57.Disclosure.Button,
        {
          as: "a",
          href: item.href,
          className: classNames10(
            item.current ? "bg-blue-900 text-white" : "text-white hover:bg-blue-500 hover:bg-opacity-75",
            "block rounded-md px-3 py-2 text-base font-medium"
          ),
          "aria-current": item.current ? "page" : void 0,
          children: item.name
        },
        item.name,
        !1,
        {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 114,
          columnNumber: 21
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 112,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 111,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_react56.Outlet, {}, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 137,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 79,
    columnNumber: 9
  }, this);
}

// app/routes/notes.new.tsx
var notes_new_exports = {};
__export(notes_new_exports, {
  action: () => action5,
  default: () => NewNotePage
});
var import_node9 = require("@remix-run/node"), import_react58 = require("@remix-run/react"), import_react59 = require("react");
var import_jsx_dev_runtime95 = require("react/jsx-dev-runtime"), action5 = async ({ request }) => {
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), body = formData.get("body");
  if (typeof title != "string" || title.length === 0)
    return (0, import_node9.json)(
      { errors: { body: null, title: "Title is required" } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node9.json)(
      { errors: { body: "Body is required", title: null } },
      { status: 400 }
    );
  let note = await createNote({ body, title, userId });
  return (0, import_node9.redirect)(`/notes/${note.id}`);
};
function NewNotePage() {
  let actionData = (0, import_react58.useActionData)(), titleRef = (0, import_react59.useRef)(null), bodyRef = (0, import_react59.useRef)(null);
  return (0, import_react59.useEffect)(() => {
    actionData?.errors?.title ? titleRef.current?.focus() : actionData?.errors?.body && bodyRef.current?.focus();
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(
    import_react58.Form,
    {
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("span", { children: "Title: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(
              "input",
              {
                ref: titleRef,
                name: "title",
                className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
                "aria-invalid": actionData?.errors?.title ? !0 : void 0,
                "aria-errormessage": actionData?.errors?.title ? "title-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.new.tsx",
                lineNumber: 61,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          actionData?.errors?.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 72,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("span", { children: "Body: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(
              "textarea",
              {
                ref: bodyRef,
                name: "body",
                rows: 8,
                className: "w-full flex-1 rounded-md border-2 border-blue-500 px-3 py-2 text-lg leading-6",
                "aria-invalid": actionData?.errors?.body ? !0 : void 0,
                "aria-errormessage": actionData?.errors?.body ? "body-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.new.tsx",
                lineNumber: 81,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          actionData?.errors?.body ? /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Save"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 100,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
}

// app/routes/snop.chat.jsx
var snop_chat_exports = {};
__export(snop_chat_exports, {
  default: () => MyComponent2
});
var import_react60 = require("react"), import_react61 = require("@remix-run/react"), import_react62 = require("@headlessui/react"), import_solid13 = require("@heroicons/react/20/solid");
var import_jsx_dev_runtime96 = require("react/jsx-dev-runtime");
function handleChatGPTStream3(prompt, onData) {
  let eventSource = new EventSource(
    `/demo/gpt?prompt=${encodeURIComponent(prompt)}`
  );
  eventSource.onmessage = (event) => {
    let data2 = JSON.parse(event.data);
    if (data2.type === "done")
      eventSource.close();
    else {
      let content = data2?.choices?.[0]?.delta?.content;
      content && onData(content);
    }
  }, eventSource.onerror = (event) => {
    console.error("EventSource failed:", event), eventSource.close();
  };
}
var tabs2 = [
  { name: "Conversations", href: "#", count: "52", current: !1 },
  { name: "Prompts", href: "#", count: "6", current: !0 }
];
function classNames11(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MyComponent2() {
  let [messages, setMessages] = (0, import_react60.useState)([]), [isSidebarOpen, setIsSidebarOpen] = (0, import_react60.useState)(!1), [isSubmitting, setIsSubmitting] = (0, import_react60.useState)(!1), endOfMessagesRef = (0, import_react60.useRef)(null), textareaRef = (0, import_react60.useRef)(null), toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }, appendToLastMessage = (newText) => {
    setMessages((prevMessages) => {
      let lastMessage = prevMessages[prevMessages.length - 1];
      return lastMessage && lastMessage.role === "gpt" ? [
        ...prevMessages.slice(0, -1),
        { ...lastMessage, content: lastMessage.content + newText }
      ] : [...prevMessages, { role: "gpt", content: newText }];
    });
  }, handleSubmit = (e) => {
    e.preventDefault(), setIsSubmitting(!0);
    let prompt = new FormData(e.target).get("prompt");
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: prompt }
    ]), textareaRef.current.value = "", handleChatGPTStream3(prompt, appendToLastMessage, () => {
      setIsSubmitting(!1), console.log("Streaming complete");
    });
  };
  return (0, import_react60.useEffect)(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]), /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: `flex ${isSidebarOpen ? "" : "xl:flex"} h-screen`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex h-screen w-full flex-col items-center bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "w-full shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex justify-between items-center h-16 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", {}, void 0, !1, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 148,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg m-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex items-center justify-center p-1 rounded-full bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
          "img",
          {
            className: "cursor-poniter mx-auto h-10 w-10 justify-center ",
            src: "/assets/logo-4.png",
            alt: "logo"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 151,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 150,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 149,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex justify-end items-center mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
          "button",
          {
            type: "button",
            className: "rounded-full h-10 w-10 bg-sky-500 p-1.5 font-semibold text-white shadow-sm ",
            onClick: toggleSidebar,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
              import_solid13.ChevronLeftIcon,
              {
                className: " flex items-center h-6 w-6",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.chat.jsx",
                lineNumber: 165,
                columnNumber: 19
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 160,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 159,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 147,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 146,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "max-w-7xl w-4/6 mx-auto  flex-grow overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "mx-auto mt-2 flex w-full max-w-full text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg bg-white border text-blue-900 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_solid13.ChatBubbleOvalLeftEllipsisIcon, { className: "h-6 w-6" }, void 0, !1, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 176,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 175,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "relative inset-0 mx-2 flex w-full flex-col rounded-lg border p-4 text-gray-800 shadow-lg bg-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "font-semibold text-blue-900", children: "ChatGPT" }, void 0, !1, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 180,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("p", { className: "break-words text-lg", children: "Hello! It's great to connect with you. How can I assist you today?" }, void 0, !1, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 181,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 179,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "my-4 flex text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
            "img",
            {
              className: "h-10 w-10 rounded-lg",
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              alt: "profile"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 191,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 190,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "mx-2 w-full p-0.5 rounded-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
              "div",
              {
                className: `flex\r
          w-full flex-col relative  bg-white p-4 shadow rounded-lg `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("h2", { className: "text-base font-medium text-gray-900", children: "What would you have done differently if you ran Jurassic Park?" }, void 0, !1, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 203,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("p", { className: "mt-1 break-words text-lg", children: "Hello! It great to connect with you. How can I assist you today?, Hello! It great to connect with you. How can I assist you today?, Hello! It great to connect with you. How can I assist you today?" }, void 0, !1, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 207,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "mt-4 pt-2 flex justify-between border-t", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex space-x-4", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "inline-flex  text-gray-400 hover:text-gray-500",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
                            import_solid13.HandThumbUpIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/snop.chat.jsx",
                              lineNumber: 221,
                              columnNumber: 27
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.chat.jsx",
                          lineNumber: 217,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/snop.chat.jsx",
                        lineNumber: 216,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
                            import_solid13.ChatBubbleLeftEllipsisIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/snop.chat.jsx",
                              lineNumber: 232,
                              columnNumber: 27
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.chat.jsx",
                          lineNumber: 228,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/snop.chat.jsx",
                        lineNumber: 227,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_solid13.EyeIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
                            fileName: "app/routes/snop.chat.jsx",
                            lineNumber: 243,
                            columnNumber: 27
                          }, this)
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/snop.chat.jsx",
                          lineNumber: 239,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/snop.chat.jsx",
                        lineNumber: 238,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/snop.chat.jsx",
                      lineNumber: 215,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
                      "button",
                      {
                        type: "button",
                        className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_solid13.ShareIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
                          fileName: "app/routes/snop.chat.jsx",
                          lineNumber: 253,
                          columnNumber: 27
                        }, this)
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/snop.chat.jsx",
                        lineNumber: 249,
                        columnNumber: 25
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/routes/snop.chat.jsx",
                      lineNumber: 248,
                      columnNumber: 23
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/snop.chat.jsx",
                      lineNumber: 247,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 214,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/snop.chat.jsx",
                lineNumber: 199,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 197,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 189,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 173,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "relative ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
        "button",
        {
          type: "button",
          className: "rounded-full p-2 text-black border shadow-lg",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_solid13.ArrowDownIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 365,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 361,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 360,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
        "form",
        {
          onSubmit: handleSubmit,
          className: "mx-auto flex h-20 w-full max-w-7xl p-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex flex-grow rounded-md bg-gray-100 p-2.5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
                "textarea",
                {
                  required: !0,
                  name: "prompt",
                  id: "prompt",
                  placeholder: "Message ChatGPT...",
                  ref: textareaRef,
                  className: "flex-grow text-lg bg-gray-100 outline-none",
                  style: { resize: "none" }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 374,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
                "button",
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: `ml-2 rounded-md text-white ${isSubmitting ? "opacity-50" : ""}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_solid13.PaperAirplaneIcon, { className: "h-5 w-5 text-gray-500" }, void 0, !1, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 390,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 383,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 373,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex text-blue-900 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
                "button",
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: `mx-2 flex items-center justify-center rounded-md bg-gray-100 p-2.5 ${isSubmitting ? "opacity-50" : ""}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_solid13.ArrowUpTrayIcon, { className: "h-5 w-5 font-bold stroke-2" }, void 0, !1, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 402,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 395,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
                "button",
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: `flex items-center justify-center rounded-md bg-gray-100 p-2.5 ${isSubmitting ? "opacity-50" : ""}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_solid13.AdjustmentsVerticalIcon, { className: "h-5 w-5 font-bold stroke-2" }, void 0, !1, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 411,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 404,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 394,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 369,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/snop.chat.jsx",
      lineNumber: 145,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
      "div",
      {
        className: `sidebar bg-slate-50 px-4  ${isSidebarOpen ? "block" : "hidden"} w-96 transition delay-150 duration-300 shadow-lg `,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex  h-screen flex-col gap-y-4 pb-4 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex my-4 justify-between ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
              import_react61.Link,
              {
                href: "#",
                className: "flex rounded-md p-2 mr-2 text-base font-semibold leading-6 bg-white text-blue-900 hover:bg-gray-100 hover:text-gray-200 border",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_solid13.XMarkIcon, { className: "h-6 w-6 shrink-0", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 428,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.chat.jsx",
                lineNumber: 424,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
              import_react61.Link,
              {
                href: "#",
                className: "flex-1 rounded-md px-2 py-2 text-base font-semibold leading-6 bg-white text-blue-900 hover:bg-gray-100 hover:text-gray-white border",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
                    import_solid13.ChatBubbleOvalLeftIcon,
                    {
                      className: "h-6 w-6 mr-2",
                      "aria-hidden": "true"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/snop.chat.jsx",
                      lineNumber: 435,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("span", { className: "flex items-center text-sm ", children: "New Conversation" }, void 0, !1, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 439,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 434,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.chat.jsx",
                lineNumber: 430,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 423,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_react62.Tab.Group, { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_react62.Tab.List, { className: "", children: tabs2.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
            import_react62.Tab,
            {
              className: ({ selected }) => classNames11(
                "flex flex-col border-black p-2 text-center text-base font-semibold mx-1 outline-none",
                selected ? "border-b-2 text-blue-900" : "text-gray-400 hover:text-gray-700"
              ),
              children: tab.name
            },
            tab.name,
            !1,
            {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 449,
              columnNumber: 21
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 447,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 446,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 445,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("nav", { className: "mt-4 flex flex-1 flex-col gap-y-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "flex flex-1 flex-col ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "bg-white  rounded-md p-4 font-semibold leading-6 border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_react61.Link, { className: "flex items-center justify-between text-base text-blue-900 hover:text-gray-700", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("span", { children: "Hello, World!" }, void 0, !1, {
                fileName: "app/routes/snop.chat.jsx",
                lineNumber: 470,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("span", { className: "flex items-center justify-between space-x-2 mr-2", children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_solid13.HeartIcon, { className: " h-4 w-4" }, void 0, !1, {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 474,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_solid13.TrashIcon, { className: "h-4 w-4" }, void 0, !1, {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 475,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/snop.chat.jsx",
                lineNumber: 472,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 469,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 468,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "mt-auto m-2 rounded-md p-2 font-semibold leading-6 text-gray-400  hover:text-gray-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(import_react61.Link, { href: "#", className: "flex items-center justify-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(
                import_solid13.InformationCircleIcon,
                {
                  className: "h-6 w-6",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 482,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("span", { className: "flex items-center ml-4 text-lg", children: [
                " ",
                "Information"
              ] }, void 0, !0, {
                fileName: "app/routes/snop.chat.jsx",
                lineNumber: 486,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 481,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 480,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 467,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 466,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 422,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 417,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/snop.chat.jsx",
    lineNumber: 144,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/snop.chat.jsx",
    lineNumber: 143,
    columnNumber: 5
  }, this);
}

// app/routes/demo.gpt.ts
var demo_gpt_exports = {};
__export(demo_gpt_exports, {
  loader: () => loader7
});
var loader7 = async ({ request }) => {
  let prompt = new URL(request.url).searchParams.get("prompt");
  if (!prompt)
    return new Response("Prompt is required", { status: 400 });
  let openAIResponse = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        stream: !0,
        messages: [{ role: "user", content: prompt }]
      })
    }
  );
  if (console.log(openAIResponse), !openAIResponse.ok)
    return new Response("Error calling OpenAI", {
      status: openAIResponse.status
    });
  let stream = new ReadableStream({
    start(controller) {
      let reader = openAIResponse.body.getReader();
      return pump();
      function pump() {
        return reader.read().then(({ done, value }) => {
          if (done) {
            controller.close();
            return;
          }
          return controller.enqueue(value), pump();
        });
      }
    }
  });
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    }
  });
};

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action6,
  loader: () => loader8
});
var import_node10 = require("@remix-run/node");
var action6 = async ({ request }) => logout(request), loader8 = async () => (0, import_node10.redirect)("/");

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Example
});
var import_react64 = require("@headlessui/react"), import_outline6 = require("@heroicons/react/24/outline"), import_react65 = require("@remix-run/react"), import_clsx3 = __toESM(require("clsx")), import_react66 = require("react");

// app/components/HeroBackground.tsx
var import_react63 = require("react"), import_jsx_dev_runtime97 = require("react/jsx-dev-runtime");
function HeroBackground(props) {
  let id = (0, import_react63.useId)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
    "svg",
    {
      "aria-hidden": "true",
      viewBox: "0 0 668 1069",
      width: 500,
      height: 800,
      fill: "none",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("clipPath", { id: `${id}-clip-path`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
          "path",
          {
            fill: "#fff",
            transform: "rotate(-180 334 534.4)",
            d: "M0 0h668v1068.8H0z"
          },
          void 0,
          !1,
          {
            fileName: "app/components/HeroBackground.tsx",
            lineNumber: 17,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/HeroBackground.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/HeroBackground.tsx",
          lineNumber: 15,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("g", { opacity: ".4", clipPath: `url(#${id}-clip-path)`, strokeWidth: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "path",
            {
              opacity: ".3",
              d: "M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 25,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "path",
            {
              d: "M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 30,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "path",
            {
              d: "M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 34,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "83.5",
              cy: "384.1",
              r: "10.438",
              transform: "rotate(-180 83.5 384.1)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 38,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "83.5",
              cy: "200.399",
              r: "10.438",
              transform: "rotate(-180 83.5 200.399)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 47,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "83.5",
              cy: "81.412",
              r: "10.438",
              transform: "rotate(-180 83.5 81.412)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 54,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "183.699",
              cy: "375.75",
              r: "10.438",
              transform: "rotate(-180 183.699 375.75)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 61,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "183.699",
              cy: "563.625",
              r: "10.438",
              transform: "rotate(-180 183.699 563.625)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 69,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "384.1",
              cy: "651.3",
              r: "10.438",
              transform: "rotate(-180 384.1 651.3)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 77,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "484.301",
              cy: "574.062",
              r: "10.438",
              transform: "rotate(-180 484.301 574.062)",
              fill: "#0EA5E9",
              fillOpacity: ".42",
              stroke: "#0EA5E9"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 85,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "384.1",
              cy: "749.412",
              r: "10.438",
              transform: "rotate(-180 384.1 749.412)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 94,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "384.1",
              cy: "1027.05",
              r: "10.438",
              transform: "rotate(-180 384.1 1027.05)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 102,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "283.9",
              cy: "924.763",
              r: "10.438",
              transform: "rotate(-180 283.9 924.763)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 109,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "183.699",
              cy: "870.487",
              r: "10.438",
              transform: "rotate(-180 183.699 870.487)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 116,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "283.9",
              cy: "738.975",
              r: "10.438",
              transform: "rotate(-180 283.9 738.975)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 123,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "83.5",
              cy: "695.138",
              r: "10.438",
              transform: "rotate(-180 83.5 695.138)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 131,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "83.5",
              cy: "484.3",
              r: "10.438",
              transform: "rotate(-180 83.5 484.3)",
              fill: "#0EA5E9",
              fillOpacity: ".42",
              stroke: "#0EA5E9"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 139,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "484.301",
              cy: "432.112",
              r: "10.438",
              transform: "rotate(-180 484.301 432.112)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 148,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "584.5",
              cy: "432.112",
              r: "10.438",
              transform: "rotate(-180 584.5 432.112)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 156,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "584.5",
              cy: "642.95",
              r: "10.438",
              transform: "rotate(-180 584.5 642.95)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 164,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "484.301",
              cy: "851.699",
              r: "10.438",
              transform: "rotate(-180 484.301 851.699)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 172,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
            "circle",
            {
              cx: "384.1",
              cy: "256.763",
              r: "10.438",
              transform: "rotate(-180 384.1 256.763)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.tsx",
              lineNumber: 179,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/HeroBackground.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/HeroBackground.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}

// app/assets/logo.png
var logo_default = "/build/_assets/logo-VOLM65DI.png";

// app/components/Logo.tsx
var import_jsx_dev_runtime98 = require("react/jsx-dev-runtime");
function LogomarkPaths() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("img", { className: "", src: logo_default, alt: "", width: 40, height: 40 }, void 0, !1, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}
function Logomark() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(LogomarkPaths, {}, void 0, !1, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { className: "flex items-center ", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(LogomarkPaths, {}, void 0, !1, {
      fileName: "app/components/Logo.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("h1", { className: "ml-2 flex items-center text-2xl font-bold tracking-wide", children: "BlueNorth AI" }, void 0, !1, {
      fileName: "app/components/Logo.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime99 = require("react/jsx-dev-runtime");
function GitHubIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("path", { d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var navigation6 = [
  { id: 1, name: "Application", to: "/snop/optimize" },
  { id: 2, name: "Features", to: "#" },
  { id: 3, name: "Marketplace", to: "#" },
  { id: 4, name: "Company", to: "#" }
];
function Example() {
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react66.useState)(!1), [isScrolled, setIsScrolled] = (0, import_react66.useState)(!1);
  return (0, import_react66.useEffect)(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    return onScroll(), window.addEventListener("scroll", onScroll, { passive: !0 }), () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_jsx_dev_runtime99.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
      "header",
      {
        className: (0, import_clsx3.default)(
          "fixed  w-full top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-2 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none",
          isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
            "button",
            {
              type: "button",
              className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400",
              onClick: () => setMobileMenuOpen(!0),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 61,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_outline6.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 62,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 56,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "relative mt-6 z-10 mr-6 flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_react64.Dialog, { as: "div", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_react64.Dialog.Panel, { className: "fixed inset-0 z-50 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_react65.Link, { to: "#", className: "-m-1.5 p-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "flex items-center ", "aria-hidden": "true", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(Logomark, {}, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 71,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("h1", { className: "ml-2 flex items-center  text-base font-bold tracking-wide text-white", children: "BlueNorth AI" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 72,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 70,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 69,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "-m-2.5 rounded-md p-2.5 text-gray-400",
                  onClick: () => setMobileMenuOpen(!1),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, !1, {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 82,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_outline6.XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 83,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 77,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "mt-4 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/25", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "space-y-2 py-6", children: navigation6.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
                import_react65.Link,
                {
                  to: item.to,
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-400/10",
                  children: item.name
                },
                item.id,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 90,
                  columnNumber: 23
                },
                this
              )) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 88,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "py-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
                  import_react65.Link,
                  {
                    to: "/join",
                    className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-white hover:bg-gray-400/10",
                    children: "Sign up"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 100,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
                  import_react65.Link,
                  {
                    to: "/login",
                    className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-white hover:bg-gray-400/10",
                    children: "Log in"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 106,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 99,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 87,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 86,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 66,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "grid grid-cols-3 " }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 119,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "relative flex flex-grow basis-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_react65.Link, { to: "/", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(Logo, {}, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 121,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 120,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
            "nav",
            {
              className: "ml-6 pl-6 flex items-center justify-center",
              "aria-label": "Global",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "hidden lg:flex lg:gap-x-6 lg:justify-center ml-6", children: navigation6.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
                import_react65.Link,
                {
                  to: item.to,
                  className: " text-base lg:text-lg font-semibold leading-6 text-gray-600 hover:text-black",
                  children: item.name
                },
                item.id,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 133,
                  columnNumber: 17
                },
                this
              )) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 131,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 127,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 126,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "relative flex items-center justify-end  md:flex-grow ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "hidden md:mx-2 sm:block md:block lg:block xl:block" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 146,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "hidden mx-4 lg:flex lg:justify-end lg:text-base text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
                import_react65.Link,
                {
                  to: "/join",
                  className: "font-semibold leading-6 hover:text-black text-gray-500",
                  children: [
                    "Sign up ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 182,
                      columnNumber: 23
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 178,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("span", { className: "ml-6 inline-flex rounded-md shadow-sm" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 185,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
                import_react65.Link,
                {
                  to: "/login",
                  className: "font-semibold leading-6 hover:text-black text-gray-500",
                  children: [
                    "Log in ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 190,
                      columnNumber: 22
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 186,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 177,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_react65.Link, { to: "https://github.com", className: "group", "aria-label": "GitHub", children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(GitHubIcon, { className: "h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 194,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 193,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 145,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "relative isolate h-full w-full overflow-hidden bg-slate-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "hidden sm:mb-8 sm:flex sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20", children: [
          "Announcing our next round of funding.",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_react65.Link, { to: "#", className: "font-semibold text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 205,
              columnNumber: 19
            }, this),
            "Read more ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 206,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 204,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 202,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "relative z-10 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("h1", { className: "bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-6xl font-bold text-transparent lg:text-8xl", children: "BlueNorth AI" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 211,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("p", { className: "mt-6 text-base lg:text-lg  text-gray-300", children: "Enterprise AI suite to transform Supply Chain Planning and Execution" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 214,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "mt-8 flex justify-center gap-4 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
              import_react65.Link,
              {
                to: "/",
                type: "button",
                className: "rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500",
                children: "Get started"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 219,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
              "button",
              {
                type: "button",
                className: "rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400",
                children: "Request Demo"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 226,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 218,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 200,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(HeroBackground, { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 237,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 236,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 199,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action7,
  default: () => LoginPage,
  loader: () => loader9,
  meta: () => meta
});
var import_node11 = require("@remix-run/node"), import_react69 = require("@remix-run/react"), import_react70 = require("react");

// app/utils.ts
var import_react67 = require("@remix-run/react"), import_react68 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react67.useMatches)();
  return (0, import_react68.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  )?.data;
}
function isUser(user) {
  return user != null && typeof user == "object" && "email" in user && typeof user.email == "string";
}
function useOptionalUser() {
  let data2 = useMatchesData("root");
  if (!(!data2 || !isUser(data2.user)))
    return data2.user;
}
function useUser() {
  let maybeUser = useOptionalUser();
  if (!maybeUser)
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  return maybeUser;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/login.tsx
var import_jsx_dev_runtime100 = require("react/jsx-dev-runtime"), loader9 = async ({ request }) => await getUserId(request) ? (0, import_node11.redirect)("/") : (0, import_node11.json)({}), action7 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node11.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node11.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node11.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    redirectTo,
    remember: remember === "on",
    request,
    userId: user.id
  }) : (0, import_node11.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}, meta = () => [{ title: "Login" }];
function LoginPage() {
  let [searchParams] = (0, import_react69.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/notes", actionData = (0, import_react69.useActionData)(), emailRef = (0, import_react70.useRef)(null), passwordRef = (0, import_react70.useRef)(null);
  return (0, import_react70.useEffect)(() => {
    actionData?.errors?.email ? emailRef.current?.focus() : actionData?.errors?.password && passwordRef.current?.focus();
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(import_react69.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 87,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": actionData?.errors?.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 94,
            columnNumber: 15
          },
          this
        ),
        actionData?.errors?.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 116,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "current-password",
            "aria-invalid": actionData?.errors?.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 123,
            columnNumber: 15
          },
          this
        ),
        actionData?.errors?.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 115,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Log in"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 142,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
          "input",
          {
            id: "remember",
            name: "remember",
            type: "checkbox",
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 150,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
          "label",
          {
            htmlFor: "remember",
            className: "ml-2 block text-sm text-gray-900",
            children: "Remember me"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 156,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
          import_react69.Link,
          {
            className: "text-blue-500 underline",
            to: {
              pathname: "/join",
              search: searchParams.toString()
            },
            children: "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 165,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 85,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader10
});
var import_node12 = require("@remix-run/node"), import_react71 = require("@remix-run/react");
var import_jsx_dev_runtime101 = require("react/jsx-dev-runtime"), loader10 = async ({ request }) => {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return (0, import_node12.json)({ noteListItems });
};
function NotesPage() {
  let data2 = (0, import_react71.useLoaderData)(), user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("header", { className: "flex items-center justify-between bg-slate-800 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("h1", { className: "text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(import_react71.Link, { to: ".", children: "Notes" }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("p", { children: user.email }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(import_react71.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600",
          children: "Logout"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/notes.tsx",
          lineNumber: 27,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("main", { className: "flex h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("div", { className: "h-full w-80 border-r bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(import_react71.Link, { to: "new", className: "block p-4 text-xl text-blue-500", children: "+ New Note" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("hr", {}, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        data2.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("p", { className: "p-4", children: "No notes yet" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("ol", { children: data2.noteListItems.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(
          import_react71.NavLink,
          {
            className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
            to: note.id,
            children: [
              "\u{1F4DD} ",
              note.title
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 50,
            columnNumber: 19
          },
          this
        ) }, note.id, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(import_react71.Outlet, {}, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action8,
  default: () => Join,
  loader: () => loader11,
  meta: () => meta2
});
var import_node13 = require("@remix-run/node"), import_react72 = require("@remix-run/react"), import_react73 = require("react");
var import_jsx_dev_runtime102 = require("react/jsx-dev-runtime"), loader11 = async ({ request }) => await getUserId(request) ? (0, import_node13.redirect)("/") : (0, import_node13.json)({}), action8 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node13.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node13.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node13.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node13.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user = await createUser(email, password);
  return createUserSession({
    redirectTo,
    remember: !1,
    request,
    userId: user.id
  });
}, meta2 = () => [{ title: "Sign Up" }];
function Join() {
  let [searchParams] = (0, import_react72.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react72.useActionData)(), emailRef = (0, import_react73.useRef)(null), passwordRef = (0, import_react73.useRef)(null);
  return (0, import_react73.useEffect)(() => {
    actionData?.errors?.email ? emailRef.current?.focus() : actionData?.errors?.password && passwordRef.current?.focus();
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(import_react72.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 92,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": actionData?.errors?.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 99,
            columnNumber: 15
          },
          this
        ),
        actionData?.errors?.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 121,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "new-password",
            "aria-invalid": actionData?.errors?.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 128,
            columnNumber: 15
          },
          this
        ),
        actionData?.errors?.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 139,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 127,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 120,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 146,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Create Account"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/join.tsx",
        lineNumber: 147,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(
        import_react72.Link,
        {
          className: "text-blue-500 underline",
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Log in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 156,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 154,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 153,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/join.tsx",
    lineNumber: 90,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 89,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

// app/routes/snop.tsx
var snop_exports = {};
__export(snop_exports, {
  default: () => Sidebar,
  links: () => links2
});
var import_react_icons15 = require("@radix-ui/react-icons"), import_react74 = require("@remix-run/react"), import_react75 = require("react");
var import_jsx_dev_runtime103 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "icon", type: "image/svg+xml", href: logo_default }], menus = [
  {
    id: 1,
    name: "Input Data",
    to: "/snop/input",
    icon: import_react_icons15.CubeIcon,
    current: !1
  },
  {
    id: 2,
    name: "Scenario",
    to: "/snop/scenario",
    icon: import_react_icons15.GearIcon,
    current: !1
  },
  {
    id: 3,
    name: "Optimizer",
    to: "/snop/optimize",
    icon: import_react_icons15.MixIcon,
    current: !0
  },
  {
    id: 4,
    name: "Results",
    to: "/snop/result",
    icon: import_react_icons15.PieChartIcon,
    current: !1
  },
  {
    id: 5,
    name: "Results",
    to: "/snop/demand",
    icon: import_react_icons15.PieChartIcon,
    current: !1
  },
  {
    id: 6,
    name: "Truck",
    to: "/snop/truck",
    icon: import_react_icons15.BarChartIcon,
    current: !1
  },
  {
    id: 7,
    name: "chat chart",
    to: "/snop/chatchart",
    icon: import_react_icons15.BarChartIcon,
    current: !1
  },
  {
    id: 8,
    name: "chat",
    to: "/snop/chat",
    icon: import_react_icons15.BarChartIcon,
    current: !1
  }
];
function classNames12(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Sidebar() {
  let [open, setOpen] = (0, import_react75.useState)(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "flex h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
      "div",
      {
        className: `bg-blue-900  ${open ? "w-24" : "w-16"} flex flex-col text-gray-100 duration-500 `,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "flex items-center justify-center bg-white py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
              "img",
              {
                className: "cursor-poniter mx-auto h-14 w-14 justify-center ",
                src: logo_default,
                alt: "logo",
                onClick: () => setOpen(!open)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/snop.tsx",
                lineNumber: 103,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/snop.tsx",
              lineNumber: 102,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("nav", { "aria-label": "Sidebar", className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "static mt-4 w-full  space-y-1 px-2", children: menus.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
              import_react74.NavLink,
              {
                to: item.to,
                className: ({ isActive }) => classNames12(
                  isActive ? "bg-sky-500 text-white" : "text-white hover:bg-blue-800 hover:text-blue-200",
                  "group flex w-full flex-col items-center rounded-md p-3 text-sm font-medium"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(item.icon, { className: "h-8 w-8", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/routes/snop.tsx",
                    lineNumber: 126,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
                    "h2",
                    {
                      style: {
                        transitionDelay: `${index * 100}ms`
                      },
                      className: `whitespace-pre duration-500 ${!open && "translate-x-28 overflow-hidden opacity-0 "}`,
                      children: item?.name
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/snop.tsx",
                      lineNumber: 127,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
                    "h2",
                    {
                      className: `${open && "hidden"} absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `,
                      children: item?.name
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/snop.tsx",
                      lineNumber: 137,
                      columnNumber: 19
                    },
                    this
                  )
                ]
              },
              item.id,
              !0,
              {
                fileName: "app/routes/snop.tsx",
                lineNumber: 114,
                columnNumber: 17
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/snop.tsx",
              lineNumber: 112,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/snop.tsx",
              lineNumber: 111,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/snop.tsx",
            lineNumber: 101,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(import_react74.Link, { to: "/scenario/dashboard/user", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
            "div",
            {
              className: classNames12(
                "text-blue-100 hover:bg-blue-800 hover:text-white",
                "group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(import_react_icons15.PersonIcon, { className: "h-8 w-8", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/snop.tsx",
                  lineNumber: 158,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/routes/snop.tsx",
                  lineNumber: 157,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
                  "h2",
                  {
                    className: `whitespace-pre duration-500 ${!open && "translate-x-28 overflow-hidden opacity-0"}`,
                    children: "User Profile"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/snop.tsx",
                    lineNumber: 160,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
                  "h2",
                  {
                    className: `${open && "hidden"} absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `,
                    children: "User Profile"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/snop.tsx",
                    lineNumber: 167,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/snop.tsx",
              lineNumber: 151,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/snop.tsx",
            lineNumber: 150,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/snop.tsx",
            lineNumber: 149,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/snop.tsx",
        lineNumber: 96,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "flex flex-1 flex-col overflow-y-auto bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(import_react74.Outlet, {}, void 0, !1, {
      fileName: "app/routes/snop.tsx",
      lineNumber: 182,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.tsx",
      lineNumber: 181,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/snop.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/snop.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-FJBYXCFU.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-ZVVJ5DIP.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-MEDZ44IS.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ERFCYVK6.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-KQE3642W.js", imports: ["/build/_shared/chunk-2VZUH2EY.js", "/build/_shared/chunk-EC4QPT3H.js", "/build/_shared/chunk-Y3Q3TNJF.js", "/build/_shared/chunk-EL4ICYCD.js", "/build/_shared/chunk-DFGEPVYF.js", "/build/_shared/chunk-X4JIH5W5.js", "/build/_shared/chunk-ZHRRJYGJ.js", "/build/_shared/chunk-JKKPAHGM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-CPVIPNOO.js", imports: ["/build/_shared/chunk-Y3Q3TNJF.js", "/build/_shared/chunk-X4JIH5W5.js", "/build/_shared/chunk-ZSUFT5EU.js", "/build/_shared/chunk-JKKPAHGM.js", "/build/_shared/chunk-OH3J6KOJ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/demo.chatbackup": { id: "routes/demo.chatbackup", parentId: "root", path: "demo/chatbackup", index: void 0, caseSensitive: void 0, module: "/build/routes/demo.chatbackup-HLSPX27F.js", imports: ["/build/_shared/chunk-OH3J6KOJ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/demo.gpt": { id: "routes/demo.gpt", parentId: "root", path: "demo/gpt", index: void 0, caseSensitive: void 0, module: "/build/routes/demo.gpt-5DMJ3KPK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-UKIBAX2W.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-GI7HFUCY.js", imports: ["/build/_shared/chunk-G3ACJGOK.js", "/build/_shared/chunk-CNUX32M4.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-AOVSCBTV.js", imports: ["/build/_shared/chunk-G3ACJGOK.js", "/build/_shared/chunk-CNUX32M4.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-HDN2CJTB.js", imports: ["/build/_shared/chunk-CNUX32M4.js", "/build/_shared/chunk-2LJDV4EM.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-RN7DNBKR.js", imports: ["/build/_shared/chunk-IYD4CINF.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/notes._index": { id: "routes/notes._index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes._index-JBP6XX2V.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/notes.new": { id: "routes/notes.new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.new-JHJVUXFH.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop": { id: "routes/snop", parentId: "root", path: "snop", index: void 0, caseSensitive: void 0, module: "/build/routes/snop-J5GOJX6D.js", imports: ["/build/_shared/chunk-2VZUH2EY.js", "/build/_shared/chunk-WLB7K45O.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.chat": { id: "routes/snop.chat", parentId: "routes/snop", path: "chat", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.chat-RGVYFLZX.js", imports: ["/build/_shared/chunk-L4UBQWNJ.js", "/build/_shared/chunk-ZHRRJYGJ.js", "/build/_shared/chunk-ZSUFT5EU.js", "/build/_shared/chunk-JKKPAHGM.js", "/build/_shared/chunk-OH3J6KOJ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.chatchart": { id: "routes/snop.chatchart", parentId: "routes/snop", path: "chatchart", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.chatchart-DVSXVJIN.js", imports: ["/build/_shared/chunk-L4UBQWNJ.js", "/build/_shared/chunk-7UUGZQUL.js", "/build/_shared/chunk-N3WEPD7Z.js", "/build/_shared/chunk-EFKQI77X.js", "/build/_shared/chunk-TZVNLAUT.js", "/build/_shared/chunk-VM7DCUCB.js", "/build/_shared/chunk-OH52VQQI.js", "/build/_shared/chunk-ZHRRJYGJ.js", "/build/_shared/chunk-ZQSOIJBR.js", "/build/_shared/chunk-HEETWZQQ.js", "/build/_shared/chunk-ZSUFT5EU.js", "/build/_shared/chunk-JKKPAHGM.js", "/build/_shared/chunk-OH3J6KOJ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.clean": { id: "routes/snop.clean", parentId: "routes/snop", path: "clean", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.clean-LIIBSLZK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.dashboard.campaign": { id: "routes/snop.dashboard.campaign", parentId: "routes/snop", path: "dashboard/campaign", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.dashboard.campaign-SKIGP7ZW.js", imports: ["/build/_shared/chunk-DUAIL3HA.js", "/build/_shared/chunk-N3WEPD7Z.js", "/build/_shared/chunk-OH52VQQI.js", "/build/_shared/chunk-56MKNIDO.js", "/build/_shared/chunk-EL4ICYCD.js", "/build/_shared/chunk-H6ZGEDNT.js", "/build/_shared/chunk-DFGEPVYF.js", "/build/_shared/chunk-X4JIH5W5.js", "/build/_shared/chunk-ZHRRJYGJ.js", "/build/_shared/chunk-ZQSOIJBR.js", "/build/_shared/chunk-HEETWZQQ.js", "/build/_shared/chunk-ZSUFT5EU.js", "/build/_shared/chunk-JKKPAHGM.js", "/build/_shared/chunk-OH3J6KOJ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.dashboard.finance": { id: "routes/snop.dashboard.finance", parentId: "routes/snop", path: "dashboard/finance", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.dashboard.finance-W6WFJU6L.js", imports: ["/build/_shared/chunk-ZNCGOUJM.js", "/build/_shared/chunk-N3WEPD7Z.js", "/build/_shared/chunk-TZVNLAUT.js", "/build/_shared/chunk-VM7DCUCB.js", "/build/_shared/chunk-OH52VQQI.js", "/build/_shared/chunk-56MKNIDO.js", "/build/_shared/chunk-EL4ICYCD.js", "/build/_shared/chunk-H6ZGEDNT.js", "/build/_shared/chunk-DFGEPVYF.js", "/build/_shared/chunk-X4JIH5W5.js", "/build/_shared/chunk-ZHRRJYGJ.js", "/build/_shared/chunk-ZQSOIJBR.js", "/build/_shared/chunk-HEETWZQQ.js", "/build/_shared/chunk-ZSUFT5EU.js", "/build/_shared/chunk-JKKPAHGM.js", "/build/_shared/chunk-OH3J6KOJ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.dashboard.inventory": { id: "routes/snop.dashboard.inventory", parentId: "routes/snop", path: "dashboard/inventory", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.dashboard.inventory-O2LVRGGI.js", imports: ["/build/_shared/chunk-N3WEPD7Z.js", "/build/_shared/chunk-EFKQI77X.js", "/build/_shared/chunk-TZVNLAUT.js", "/build/_shared/chunk-VM7DCUCB.js", "/build/_shared/chunk-56MKNIDO.js", "/build/_shared/chunk-EL4ICYCD.js", "/build/_shared/chunk-H6ZGEDNT.js", "/build/_shared/chunk-DFGEPVYF.js", "/build/_shared/chunk-X4JIH5W5.js", "/build/_shared/chunk-ZHRRJYGJ.js", "/build/_shared/chunk-ZQSOIJBR.js", "/build/_shared/chunk-HEETWZQQ.js", "/build/_shared/chunk-ZSUFT5EU.js", "/build/_shared/chunk-JKKPAHGM.js", "/build/_shared/chunk-OH3J6KOJ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.dashboard.overview": { id: "routes/snop.dashboard.overview", parentId: "routes/snop", path: "dashboard/overview", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.dashboard.overview-A4JPMO52.js", imports: ["/build/_shared/chunk-DUAIL3HA.js", "/build/_shared/chunk-ZNCGOUJM.js", "/build/_shared/chunk-N3WEPD7Z.js", "/build/_shared/chunk-EFKQI77X.js", "/build/_shared/chunk-TZVNLAUT.js", "/build/_shared/chunk-VM7DCUCB.js", "/build/_shared/chunk-OH52VQQI.js", "/build/_shared/chunk-56MKNIDO.js", "/build/_shared/chunk-EL4ICYCD.js", "/build/_shared/chunk-H6ZGEDNT.js", "/build/_shared/chunk-DFGEPVYF.js", "/build/_shared/chunk-X4JIH5W5.js", "/build/_shared/chunk-ZHRRJYGJ.js", "/build/_shared/chunk-ZQSOIJBR.js", "/build/_shared/chunk-HEETWZQQ.js", "/build/_shared/chunk-ZSUFT5EU.js", "/build/_shared/chunk-JKKPAHGM.js", "/build/_shared/chunk-OH3J6KOJ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.dashboard.sales": { id: "routes/snop.dashboard.sales", parentId: "routes/snop", path: "dashboard/sales", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.dashboard.sales-D7W2W2FN.js", imports: ["/build/_shared/chunk-DUAIL3HA.js", "/build/_shared/chunk-VM7DCUCB.js", "/build/_shared/chunk-OH52VQQI.js", "/build/_shared/chunk-56MKNIDO.js", "/build/_shared/chunk-EL4ICYCD.js", "/build/_shared/chunk-H6ZGEDNT.js", "/build/_shared/chunk-DFGEPVYF.js", "/build/_shared/chunk-X4JIH5W5.js", "/build/_shared/chunk-ZHRRJYGJ.js", "/build/_shared/chunk-ZQSOIJBR.js", "/build/_shared/chunk-HEETWZQQ.js", "/build/_shared/chunk-ZSUFT5EU.js", "/build/_shared/chunk-JKKPAHGM.js", "/build/_shared/chunk-OH3J6KOJ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.dashboard.spend": { id: "routes/snop.dashboard.spend", parentId: "routes/snop", path: "dashboard/spend", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.dashboard.spend-PXSOXFIE.js", imports: ["/build/_shared/chunk-N3WEPD7Z.js", "/build/_shared/chunk-EFKQI77X.js", "/build/_shared/chunk-VM7DCUCB.js", "/build/_shared/chunk-OH52VQQI.js", "/build/_shared/chunk-56MKNIDO.js", "/build/_shared/chunk-EL4ICYCD.js", "/build/_shared/chunk-H6ZGEDNT.js", "/build/_shared/chunk-DFGEPVYF.js", "/build/_shared/chunk-X4JIH5W5.js", "/build/_shared/chunk-ZHRRJYGJ.js", "/build/_shared/chunk-ZQSOIJBR.js", "/build/_shared/chunk-HEETWZQQ.js", "/build/_shared/chunk-ZSUFT5EU.js", "/build/_shared/chunk-JKKPAHGM.js", "/build/_shared/chunk-OH3J6KOJ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.dashboard.supply": { id: "routes/snop.dashboard.supply", parentId: "routes/snop", path: "dashboard/supply", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.dashboard.supply-JDMSCZJP.js", imports: ["/build/_shared/chunk-EFKQI77X.js", "/build/_shared/chunk-TZVNLAUT.js", "/build/_shared/chunk-VM7DCUCB.js", "/build/_shared/chunk-OH52VQQI.js", "/build/_shared/chunk-56MKNIDO.js", "/build/_shared/chunk-EL4ICYCD.js", "/build/_shared/chunk-H6ZGEDNT.js", "/build/_shared/chunk-DFGEPVYF.js", "/build/_shared/chunk-X4JIH5W5.js", "/build/_shared/chunk-ZHRRJYGJ.js", "/build/_shared/chunk-ZQSOIJBR.js", "/build/_shared/chunk-HEETWZQQ.js", "/build/_shared/chunk-ZSUFT5EU.js", "/build/_shared/chunk-JKKPAHGM.js", "/build/_shared/chunk-OH3J6KOJ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.demand": { id: "routes/snop.demand", parentId: "routes/snop", path: "demand", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.demand-6NGF6TQ2.js", imports: ["/build/_shared/chunk-EC4QPT3H.js", "/build/_shared/chunk-7UUGZQUL.js", "/build/_shared/chunk-N3WEPD7Z.js", "/build/_shared/chunk-EFKQI77X.js", "/build/_shared/chunk-TZVNLAUT.js", "/build/_shared/chunk-VM7DCUCB.js", "/build/_shared/chunk-OH52VQQI.js", "/build/_shared/chunk-56MKNIDO.js", "/build/_shared/chunk-EL4ICYCD.js", "/build/_shared/chunk-H6ZGEDNT.js", "/build/_shared/chunk-DFGEPVYF.js", "/build/_shared/chunk-X4JIH5W5.js", "/build/_shared/chunk-ZHRRJYGJ.js", "/build/_shared/chunk-ZQSOIJBR.js", "/build/_shared/chunk-HEETWZQQ.js", "/build/_shared/chunk-ZSUFT5EU.js", "/build/_shared/chunk-JKKPAHGM.js", "/build/_shared/chunk-OH3J6KOJ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.input": { id: "routes/snop.input", parentId: "routes/snop", path: "input", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.input-DLXLQ3NQ.js", imports: ["/build/_shared/chunk-AQCFHFK4.js", "/build/_shared/chunk-OESJ757L.js", "/build/_shared/chunk-2YHQU5X6.js", "/build/_shared/chunk-PAYI5ADR.js", "/build/_shared/chunk-T5F5GXJC.js", "/build/_shared/chunk-TAH65X5V.js", "/build/_shared/chunk-2NVTJMAP.js", "/build/_shared/chunk-AZ2ABKPG.js", "/build/_shared/chunk-Y3Q3TNJF.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-OH3J6KOJ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.optimize": { id: "routes/snop.optimize", parentId: "routes/snop", path: "optimize", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.optimize-2H3K3MYN.js", imports: ["/build/_shared/chunk-U4UP5LIE.js", "/build/_shared/chunk-PAYI5ADR.js", "/build/_shared/chunk-2NVTJMAP.js", "/build/_shared/chunk-AZ2ABKPG.js", "/build/_shared/chunk-Y3Q3TNJF.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.result": { id: "routes/snop.result", parentId: "routes/snop", path: "result", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.result-EPLIO6GD.js", imports: ["/build/_shared/chunk-IYD4CINF.js", "/build/_shared/chunk-BYUAI66E.js", "/build/_shared/chunk-BFVQSGSR.js", "/build/_shared/chunk-U4UP5LIE.js", "/build/_shared/chunk-OESJ757L.js", "/build/_shared/chunk-2YHQU5X6.js", "/build/_shared/chunk-PAYI5ADR.js", "/build/_shared/chunk-TAH65X5V.js", "/build/_shared/chunk-2NVTJMAP.js", "/build/_shared/chunk-AZ2ABKPG.js", "/build/_shared/chunk-Y3Q3TNJF.js", "/build/_shared/chunk-H6ZGEDNT.js", "/build/_shared/chunk-HEETWZQQ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.scenario": { id: "routes/snop.scenario", parentId: "routes/snop", path: "scenario", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.scenario-OEFMOFM5.js", imports: ["/build/_shared/chunk-BYUAI66E.js", "/build/_shared/chunk-C3GB7RDK.js", "/build/_shared/chunk-BFVQSGSR.js", "/build/_shared/chunk-U4UP5LIE.js", "/build/_shared/chunk-T5F5GXJC.js", "/build/_shared/chunk-TAH65X5V.js", "/build/_shared/chunk-2NVTJMAP.js", "/build/_shared/chunk-AZ2ABKPG.js", "/build/_shared/chunk-Y3Q3TNJF.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.scenario_.$scenId": { id: "routes/snop.scenario_.$scenId", parentId: "routes/snop", path: "scenario/:scenId", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.scenario_.$scenId-7PHM4PGC.js", imports: ["/build/_shared/chunk-AQCFHFK4.js", "/build/_shared/chunk-OESJ757L.js", "/build/_shared/chunk-2YHQU5X6.js", "/build/_shared/chunk-PAYI5ADR.js", "/build/_shared/chunk-T5F5GXJC.js", "/build/_shared/chunk-TAH65X5V.js", "/build/_shared/chunk-2NVTJMAP.js", "/build/_shared/chunk-AZ2ABKPG.js", "/build/_shared/chunk-Y3Q3TNJF.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-OH3J6KOJ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.table": { id: "routes/snop.table", parentId: "routes/snop", path: "table", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.table-W75YGGNR.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-C3GB7RDK.js", "/build/_shared/chunk-AZ2ABKPG.js", "/build/_shared/chunk-HEETWZQQ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/snop.truck": { id: "routes/snop.truck", parentId: "routes/snop", path: "truck", index: void 0, caseSensitive: void 0, module: "/build/routes/snop.truck-IR4J7FSL.js", imports: ["/build/_shared/chunk-BFVQSGSR.js", "/build/_shared/chunk-2YHQU5X6.js", "/build/_shared/chunk-PAYI5ADR.js", "/build/_shared/chunk-TAH65X5V.js", "/build/_shared/chunk-2NVTJMAP.js", "/build/_shared/chunk-AZ2ABKPG.js", "/build/_shared/chunk-Y3Q3TNJF.js", "/build/_shared/chunk-DFGEPVYF.js", "/build/_shared/chunk-ZQSOIJBR.js", "/build/_shared/chunk-HEETWZQQ.js", "/build/_shared/chunk-ELWJTL4F.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "4f8c0f1b", hmr: { runtime: "/build/_shared\\chunk-MEDZ44IS.js", timestamp: 1708584062435 }, url: "/build/manifest-4F8C0F1B.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/snop.dashboard.inventory": {
    id: "routes/snop.dashboard.inventory",
    parentId: "routes/snop",
    path: "dashboard/inventory",
    index: void 0,
    caseSensitive: void 0,
    module: snop_dashboard_inventory_exports
  },
  "routes/snop.dashboard.campaign": {
    id: "routes/snop.dashboard.campaign",
    parentId: "routes/snop",
    path: "dashboard/campaign",
    index: void 0,
    caseSensitive: void 0,
    module: snop_dashboard_campaign_exports
  },
  "routes/snop.dashboard.overview": {
    id: "routes/snop.dashboard.overview",
    parentId: "routes/snop",
    path: "dashboard/overview",
    index: void 0,
    caseSensitive: void 0,
    module: snop_dashboard_overview_exports
  },
  "routes/snop.dashboard.finance": {
    id: "routes/snop.dashboard.finance",
    parentId: "routes/snop",
    path: "dashboard/finance",
    index: void 0,
    caseSensitive: void 0,
    module: snop_dashboard_finance_exports
  },
  "routes/snop.scenario_.$scenId": {
    id: "routes/snop.scenario_.$scenId",
    parentId: "routes/snop",
    path: "scenario/:scenId",
    index: void 0,
    caseSensitive: void 0,
    module: snop_scenario_scenId_exports
  },
  "routes/snop.dashboard.supply": {
    id: "routes/snop.dashboard.supply",
    parentId: "routes/snop",
    path: "dashboard/supply",
    index: void 0,
    caseSensitive: void 0,
    module: snop_dashboard_supply_exports
  },
  "routes/snop.dashboard.sales": {
    id: "routes/snop.dashboard.sales",
    parentId: "routes/snop",
    path: "dashboard/sales",
    index: void 0,
    caseSensitive: void 0,
    module: snop_dashboard_sales_exports
  },
  "routes/snop.dashboard.spend": {
    id: "routes/snop.dashboard.spend",
    parentId: "routes/snop",
    path: "dashboard/spend",
    index: void 0,
    caseSensitive: void 0,
    module: snop_dashboard_spend_exports
  },
  "routes/demo.chatbackup": {
    id: "routes/demo.chatbackup",
    parentId: "root",
    path: "demo/chatbackup",
    index: void 0,
    caseSensitive: void 0,
    module: demo_chatbackup_exports
  },
  "routes/snop.chatchart": {
    id: "routes/snop.chatchart",
    parentId: "routes/snop",
    path: "chatchart",
    index: void 0,
    caseSensitive: void 0,
    module: snop_chatchart_exports
  },
  "routes/notes.$noteId": {
    id: "routes/notes.$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_noteId_exports
  },
  "routes/snop.optimize": {
    id: "routes/snop.optimize",
    parentId: "routes/snop",
    path: "optimize",
    index: void 0,
    caseSensitive: void 0,
    module: snop_optimize_exports
  },
  "routes/snop.scenario": {
    id: "routes/snop.scenario",
    parentId: "routes/snop",
    path: "scenario",
    index: void 0,
    caseSensitive: void 0,
    module: snop_scenario_exports
  },
  "routes/notes._index": {
    id: "routes/notes._index",
    parentId: "routes/notes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: notes_index_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/snop.demand": {
    id: "routes/snop.demand",
    parentId: "routes/snop",
    path: "demand",
    index: void 0,
    caseSensitive: void 0,
    module: snop_demand_exports
  },
  "routes/snop.result": {
    id: "routes/snop.result",
    parentId: "routes/snop",
    path: "result",
    index: void 0,
    caseSensitive: void 0,
    module: snop_result_exports
  },
  "routes/snop.clean": {
    id: "routes/snop.clean",
    parentId: "routes/snop",
    path: "clean",
    index: void 0,
    caseSensitive: void 0,
    module: snop_clean_exports
  },
  "routes/snop.input": {
    id: "routes/snop.input",
    parentId: "routes/snop",
    path: "input",
    index: void 0,
    caseSensitive: void 0,
    module: snop_input_exports
  },
  "routes/snop.table": {
    id: "routes/snop.table",
    parentId: "routes/snop",
    path: "table",
    index: void 0,
    caseSensitive: void 0,
    module: snop_table_exports
  },
  "routes/snop.truck": {
    id: "routes/snop.truck",
    parentId: "routes/snop",
    path: "truck",
    index: void 0,
    caseSensitive: void 0,
    module: snop_truck_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/notes.new": {
    id: "routes/notes.new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: notes_new_exports
  },
  "routes/snop.chat": {
    id: "routes/snop.chat",
    parentId: "routes/snop",
    path: "chat",
    index: void 0,
    caseSensitive: void 0,
    module: snop_chat_exports
  },
  "routes/demo.gpt": {
    id: "routes/demo.gpt",
    parentId: "root",
    path: "demo/gpt",
    index: void 0,
    caseSensitive: void 0,
    module: demo_gpt_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  },
  "routes/snop": {
    id: "routes/snop",
    parentId: "root",
    path: "snop",
    index: void 0,
    caseSensitive: void 0,
    module: snop_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
