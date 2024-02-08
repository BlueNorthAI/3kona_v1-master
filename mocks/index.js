const { rest } = require("msw");
const { setupServer } = require("msw/node");

// put one-off handlers that don't really need an entire file to themselves here
const miscHandlers = [
  rest.post(`${process.env.REMIX_DEV_HTTP_ORIGIN}/ping`, (req) =>
    req.passthrough(),
  ),
];

const server = setupServer(...miscHandlers);

// server.listen({ onUnhandledRequest: "bypass" });
// console.info("🔶 Mock server running");

// process.once("SIGINT", () => server.close());
// process.once("SIGTERM", () => server.close());

if (process.env.MOCK_SERVER_ENABLED === "true") {
  server.listen({ onUnhandledRequest: "bypass" });
  console.info("🔶 Mock server running");

  process.once("SIGINT", () => server.close());
  process.once("SIGTERM", () => server.close());
} else {
  console.info("🔶 Mock server is disabled");
}
