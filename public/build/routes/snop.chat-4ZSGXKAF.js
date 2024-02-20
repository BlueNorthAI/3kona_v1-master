import {
  $e
} from "/build/_shared/chunk-L4UBQWNJ.js";
import "/build/_shared/chunk-ZHRRJYGJ.js";
import "/build/_shared/chunk-ZSUFT5EU.js";
import "/build/_shared/chunk-JKKPAHGM.js";
import {
  AdjustmentsVerticalIcon_default,
  ArrowDownIcon_default,
  ArrowUpTrayIcon_default,
  ChatBubbleLeftEllipsisIcon_default,
  ChatBubbleOvalLeftEllipsisIcon_default,
  ChatBubbleOvalLeftIcon_default,
  ChevronLeftIcon_default,
  EyeIcon_default,
  HandThumbUpIcon_default,
  HeartIcon_default,
  InformationCircleIcon_default,
  PaperAirplaneIcon_default,
  ShareIcon_default,
  TrashIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-MREU3T6C.js";
import {
  Link
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

// app/routes/snop.chat.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.chat.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.chat.jsx"
  );
  import.meta.hot.lastModified = "1708076440554.6511";
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
var tabs = [{
  name: "Conversations",
  href: "#",
  count: "52",
  current: false
}, {
  name: "Prompts",
  href: "#",
  count: "6",
  current: true
}];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MyComponent() {
  _s();
  const [messages, setMessages] = (0, import_react.useState)([]);
  const [isSidebarOpen, setIsSidebarOpen] = (0, import_react.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
  const endOfMessagesRef = (0, import_react.useRef)(null);
  const textareaRef = (0, import_react.useRef)(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex ${isSidebarOpen ? "" : "xl:flex"} h-screen`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen w-full flex-col items-center bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center h-16 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 145,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg m-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center p-1 rounded-full bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "cursor-poniter mx-auto h-10 w-10 justify-center ", src: "/assets/logo-4.png", alt: "logo" }, void 0, false, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 148,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 147,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 146,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end items-center mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-full h-10 w-10 bg-sky-500 p-1.5 font-semibold text-white shadow-sm ", onClick: toggleSidebar, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeftIcon_default, { className: " flex items-center h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 154,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 153,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 152,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 144,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 143,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl w-4/6 mx-auto  flex-grow overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-2 flex w-full max-w-full text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg bg-white border text-blue-900 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChatBubbleOvalLeftEllipsisIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 162,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 161,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative inset-0 mx-2 flex w-full flex-col rounded-lg border p-4 text-gray-800 shadow-lg bg-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-blue-900", children: "ChatGPT" }, void 0, false, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 166,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "break-words text-lg", children: "Hello! It's great to connect with you. How can I assist you today?" }, void 0, false, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 167,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 165,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 flex text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-10 w-10 rounded-lg", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "profile" }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 177,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 w-full p-0.5 rounded-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex\r\n          w-full flex-col relative  bg-white p-4 shadow rounded-lg ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-medium text-gray-900", children: "What would you have done differently if you ran Jurassic Park?" }, void 0, false, {
                fileName: "app/routes/snop.chat.jsx",
                lineNumber: 183,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 break-words text-lg", children: "Hello! It great to connect with you. How can I assist you today?, Hello! It great to connect with you. How can I assist you today?, Hello! It great to connect with you. How can I assist you today?" }, void 0, false, {
                fileName: "app/routes/snop.chat.jsx",
                lineNumber: 187,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 pt-2 flex justify-between border-t", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex  text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HandThumbUpIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 198,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 197,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 196,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChatBubbleLeftEllipsisIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 203,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 202,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 201,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 208,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 207,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.chat.jsx",
                    lineNumber: 206,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 195,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShareIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 215,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 214,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 213,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.chat.jsx",
                  lineNumber: 212,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.chat.jsx",
                lineNumber: 194,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 181,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 179,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 175,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 159,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-full p-2 text-black border shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowDownIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 323,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 322,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 321,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "mx-auto flex h-20 w-full max-w-7xl p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-grow rounded-md bg-gray-100 p-2.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { required: true, name: "prompt", id: "prompt", placeholder: "Message ChatGPT...", ref: textareaRef, className: "flex-grow text-lg bg-gray-100 outline-none", style: {
            resize: "none"
          } }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 329,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: `ml-2 rounded-md text-white ${isSubmitting ? "opacity-50" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PaperAirplaneIcon_default, { className: "h-5 w-5 text-gray-500" }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 333,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 332,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 328,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-blue-900 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: `mx-2 flex items-center justify-center rounded-md bg-gray-100 p-2.5 ${isSubmitting ? "opacity-50" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpTrayIcon_default, { className: "h-5 w-5 font-bold stroke-2" }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 339,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 338,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: `flex items-center justify-center rounded-md bg-gray-100 p-2.5 ${isSubmitting ? "opacity-50" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdjustmentsVerticalIcon_default, { className: "h-5 w-5 font-bold stroke-2" }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 342,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 341,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 337,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 327,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.chat.jsx",
      lineNumber: 142,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `sidebar bg-slate-50 px-4  ${isSidebarOpen ? "block" : "hidden"} w-96 transition delay-150 duration-300 shadow-lg `, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  h-screen flex-col gap-y-4 pb-4 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4 justify-between ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "flex rounded-md p-2 mr-2 text-base font-semibold leading-6 bg-white text-blue-900 hover:bg-gray-100 hover:text-gray-200 border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6 shrink-0", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 352,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 351,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "flex-1 rounded-md px-2 py-2 text-base font-semibold leading-6 bg-white text-blue-900 hover:bg-gray-100 hover:text-gray-white border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChatBubbleOvalLeftIcon_default, { className: "h-6 w-6 mr-2", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 356,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center text-sm ", children: "New Conversation" }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 357,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 355,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 354,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 350,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e.Group, { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e.List, { className: "", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e, { className: ({
        selected
      }) => classNames("flex flex-col border-black p-2 text-center text-base font-semibold mx-1 outline-none", selected ? "border-b-2 text-blue-900" : "text-gray-400 hover:text-gray-700"), children: tab.name }, tab.name, false, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 366,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 365,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 364,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 363,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "mt-4 flex flex-1 flex-col gap-y-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white  rounded-md p-4 font-semibold leading-6 border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "flex items-center justify-between text-base text-blue-900 hover:text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Hello, World!" }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 378,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center justify-between space-x-2 mr-2", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeartIcon_default, { className: " h-4 w-4" }, void 0, false, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 382,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/snop.chat.jsx",
              lineNumber: 383,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 380,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 377,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 376,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto m-2 rounded-md p-2 font-semibold leading-6 text-gray-400  hover:text-gray-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "flex items-center justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InformationCircleIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 390,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center ml-4 text-lg", children: [
            " ",
            "Information"
          ] }, void 0, true, {
            fileName: "app/routes/snop.chat.jsx",
            lineNumber: 391,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 389,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.chat.jsx",
          lineNumber: 388,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 375,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.chat.jsx",
        lineNumber: 374,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.chat.jsx",
      lineNumber: 349,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.chat.jsx",
      lineNumber: 348,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.chat.jsx",
    lineNumber: 141,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.chat.jsx",
    lineNumber: 140,
    columnNumber: 10
  }, this);
}
_s(MyComponent, "ouFE6sl+I3GAnNVIkcLTp1oeyOo=");
_c = MyComponent;
var _c;
$RefreshReg$(_c, "MyComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MyComponent as default
};
//# sourceMappingURL=/build/routes/snop.chat-4ZSGXKAF.js.map
