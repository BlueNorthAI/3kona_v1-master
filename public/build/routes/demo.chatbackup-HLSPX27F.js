import {
  AdjustmentsVerticalIcon_default,
  ArrowUpTrayIcon_default,
  ChatBubbleOvalLeftEllipsisIcon_default,
  PaperAirplaneIcon_default,
  UserCircleIcon_default
} from "/build/_shared/chunk-OH3J6KOJ.js";
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

// app/routes/demo.chatbackup.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\demo.chatbackup.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\demo.chatbackup.jsx"
  );
  import.meta.hot.lastModified = "1708448308172.7625";
}
function formatText(text) {
  const formattedText = text.replace(/\*([^\*]+)\*/g, "<strong>$1</strong>").replace(/_([^_]+)_/g, "<em>$1</em>").replace(/- ([^\n]+)/g, "<li>$1</li>");
  return formattedText.split("\n").map((item, index) => {
    if (item.startsWith("<li>")) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: item.substring(4, item.length - 5) }, void 0, false, {
        fileName: "app/routes/demo.chatbackup.jsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, index, false, {
        fileName: "app/routes/demo.chatbackup.jsx",
        lineNumber: 31,
        columnNumber: 14
      }, this);
    } else {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { dangerouslySetInnerHTML: {
        __html: item
      } }, index, false, {
        fileName: "app/routes/demo.chatbackup.jsx",
        lineNumber: 35,
        columnNumber: 14
      }, this);
    }
  });
}
function handleChatGPTStream(prompt, onData) {
  const eventSource = new EventSource(`/demo/gpt?prompt=${encodeURIComponent(prompt)}`);
  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === "done") {
      eventSource.close();
    } else {
      let content = data?.choices?.[0]?.delta?.content;
      if (content) {
        onData(content);
      }
    }
  };
  eventSource.onerror = (event) => {
    console.error("EventSource failed:", event);
    eventSource.close();
  };
}
function Demo({
  aiMessage
}) {
  _s();
  const [messages, setMessages] = (0, import_react.useState)([]);
  const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
  const endOfMessagesRef = (0, import_react.useRef)(null);
  const textareaRef = (0, import_react.useRef)(null);
  const appendToLastMessage = (newText) => {
    setMessages((prevMessages) => {
      const lastMessage = prevMessages[prevMessages.length - 1];
      if (lastMessage && lastMessage.role === "gpt") {
        return [...prevMessages.slice(0, -1), {
          ...lastMessage,
          content: lastMessage.content + newText
        }];
      } else {
        return [...prevMessages, {
          role: "gpt",
          content: newText
        }];
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const prompt = formData.get("prompt");
    setMessages((prevMessages) => [...prevMessages, {
      role: "user",
      content: prompt
    }]);
    textareaRef.current.value = "";
    handleChatGPTStream(prompt, appendToLastMessage, () => {
      setIsSubmitting(false);
      console.log("Streaming complete");
    });
  };
  (0, import_react.useEffect)(() => {
    endOfMessagesRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen flex-col items-center p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-7xl flex-grow overflow-auto", children: [
      messages.map((msg, index) => msg.role === "user" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-15 my-2 flex self-end rounded-lg border bg-blue-500 p-4 text-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-2 flex flex-shrink-0 flex-col items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChatBubbleOvalLeftEllipsisIcon_default, { className: "h-6 w-6 text-rose-500" }, void 0, false, {
          fileName: "app/routes/demo.chatbackup.jsx",
          lineNumber: 107,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/demo.chatbackup.jsx",
          lineNumber: 106,
          columnNumber: 15
        }, this),
        formatText(msg.content)
      ] }, index, true, {
        fileName: "app/routes/demo.chatbackup.jsx",
        lineNumber: 105,
        columnNumber: 61
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-2 flex self-end rounded-lg border bg-blue-500/50 p-4 text-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-2 flex flex-shrink-0 flex-col items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCircleIcon_default, { className: "h-6 w-6 text-gray-500" }, void 0, false, {
          fileName: "app/routes/demo.chatbackup.jsx",
          lineNumber: 112,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/demo.chatbackup.jsx",
          lineNumber: 111,
          columnNumber: 15
        }, this),
        formatText(msg.content)
      ] }, index, true, {
        fileName: "app/routes/demo.chatbackup.jsx",
        lineNumber: 110,
        columnNumber: 22
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endOfMessagesRef }, void 0, false, {
        fileName: "app/routes/demo.chatbackup.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/demo.chatbackup.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "flex w-full max-w-4xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-grow rounded-md border border-gray-300 p-2 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { required: true, name: "prompt", id: "prompt", ref: textareaRef, className: "text-lg", style: {
          resize: "none"
        } }, void 0, false, {
          fileName: "app/routes/demo.chatbackup.jsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: `ml-2  rounded-md p-2 text-white ${isSubmitting ? "opacity-50" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PaperAirplaneIcon_default, { className: "h-5 w-5 text-gray-500" }, void 0, false, {
          fileName: "app/routes/demo.chatbackup.jsx",
          lineNumber: 125,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/demo.chatbackup.jsx",
          lineNumber: 124,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/demo.chatbackup.jsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: `m-1 flex items-center justify-center rounded-md bg-blue-500 p-2 ${isSubmitting ? "opacity-50" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpTrayIcon_default, { className: "h-5 w-5 text-gray-100" }, void 0, false, {
          fileName: "app/routes/demo.chatbackup.jsx",
          lineNumber: 131,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/demo.chatbackup.jsx",
          lineNumber: 130,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: `m-1 flex items-center justify-center rounded-md bg-blue-500 p-2 ${isSubmitting ? "opacity-50" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdjustmentsVerticalIcon_default, { className: "h-5 w-5 text-gray-100" }, void 0, false, {
          fileName: "app/routes/demo.chatbackup.jsx",
          lineNumber: 134,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/demo.chatbackup.jsx",
          lineNumber: 133,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/demo.chatbackup.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/demo.chatbackup.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/demo.chatbackup.jsx",
    lineNumber: 103,
    columnNumber: 10
  }, this);
}
_s(Demo, "ZdcUgKLlM+1V4EeE6xWV37AO2dc=");
_c = Demo;
var _c;
$RefreshReg$(_c, "Demo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Demo as default
};
//# sourceMappingURL=/build/routes/demo.chatbackup-HLSPX27F.js.map
