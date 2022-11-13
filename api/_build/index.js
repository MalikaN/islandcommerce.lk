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
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/remix/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: !0,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: !0,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: !0,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: !0,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: !0,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: !0,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: !0,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: !0,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: !0,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: !0,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: !0,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: !0,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: !0,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: !0,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: !0,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: !0,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: !0,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: !0,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: !0,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: !0,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: !0,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: !0,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: !0,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: !0,
      get: function() {
        return react.useTransition;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: !0,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: !0,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: !0,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: !0,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: !0,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: !0,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: !0,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: !0,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: !0,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: !0,
      get: function() {
        return react.useSearchParams;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_config = require("dotenv/config"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 13,
    columnNumber: 33
  }, this));
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_react6 = require("@remix-run/react"), import_react7 = require("react"), import_clsx = __toESM(require("clsx")), import_framer_motion5 = require("framer-motion");

// app/hooks/use-theme.tsx
var import_react2 = require("react"), import_remix = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Theme = /* @__PURE__ */ ((Theme2) => (Theme2.DARK = "dark", Theme2.LIGHT = "light", Theme2))(Theme || {}), themes = Object.values(Theme), ThemeContext = (0, import_react2.createContext)({
  theme: "light" /* LIGHT */,
  toggleTheme: () => {
  }
});
ThemeContext.displayName = "ThemeContext";
var prefersLightMQ = "(prefers-color-scheme: light)", getPreferredTheme = () => window.matchMedia(prefersLightMQ).matches ? "light" /* LIGHT */ : "dark" /* DARK */, ThemeProvider = ({
  specifiedTheme,
  children
}) => {
  let [theme, setTheme] = (0, import_react2.useState)(() => {
    if (specifiedTheme && themes.includes(specifiedTheme))
      return specifiedTheme;
    if (typeof window == "object")
      return getPreferredTheme();
  }), toggleTheme = (0, import_react2.useCallback)(
    () => setTheme(theme === "dark" /* DARK */ ? "light" /* LIGHT */ : "dark" /* DARK */),
    [theme]
  ), persistTheme = (0, import_remix.useFetcher)(), persistThemeRef = (0, import_react2.useRef)(persistTheme);
  (0, import_react2.useEffect)(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  let mountRun = (0, import_react2.useRef)(!1);
  (0, import_react2.useEffect)(() => {
    if (!mountRun.current) {
      mountRun.current = !0;
      return;
    }
    !theme || persistThemeRef.current.submit({ theme }, { action: "action/toggle-theme", method: "post" });
  }, [theme]), (0, import_react2.useEffect)(() => {
    let mediaQuery = window.matchMedia(prefersLightMQ), handleChange = () => {
      setTheme(mediaQuery.matches ? "light" /* LIGHT */ : "dark" /* DARK */);
    };
    return mediaQuery.addEventListener("change", handleChange), () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  let value = (0, import_react2.useMemo)(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext.Provider, {
    value,
    children
  }, void 0, !1, {
    fileName: "app/hooks/use-theme.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}, clientThemeCode = `
// hi there dear reader \u{1F44B}
// this is how I make certain we avoid a flash of the wrong theme. If you select
// a theme, then I'll know what you want in the future and you'll not see this
// script anymore.
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersLightMQ)}).matches
    ? 'light'
    : 'dark';

  const cl = document.documentElement.classList;

  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let Kent know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }

  // the <dark-mode> and <light-mode> approach won't work for meta tags,
  // so we have to do it manually.
  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  } else {
    console.warn(
      "Heya, could you let Kent know you're seeing this message? Thanks!",
    );
  }
})();
`, useTheme = () => {
  let { theme, toggleTheme } = (0, import_react2.useContext)(ThemeContext);
  return { theme, toggleTheme };
};
function NonFlashOfWrongThemeEls({ ssrTheme }) {
  let { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        name: "color-scheme",
        content: theme === "light" ? "light" : "dark"
      }, void 0, !1, {
        fileName: "app/hooks/use-theme.tsx",
        lineNumber: 126,
        columnNumber: 7
      }, this),
      ssrTheme ? void 0 : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
        dangerouslySetInnerHTML: { __html: clientThemeCode }
      }, void 0, !1, {
        fileName: "app/hooks/use-theme.tsx",
        lineNumber: 128,
        columnNumber: 31
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/hooks/use-theme.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}
function isTheme(value) {
  return typeof value == "string" && themes.includes(value);
}

// app/utils/theme.server.ts
var import_remix2 = __toESM(require_dist());
var themeStorage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "OC_theme",
    secure: !0,
    sameSite: "lax",
    path: "/",
    expires: new Date("2097-07-21"),
    httpOnly: !0
  }
});
async function getThemeSession(request) {
  let session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => session.get("theme") || "dark" /* DARK */,
    setTheme: (theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session)
  };
}

// app/components/footer/footer.tsx
var import_framer_motion = require("framer-motion");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion.motion.footer, {
  variants: footerVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: !0 },
  className: "container flex flex-col justify-center gap-10 py-16 md:flex-row md:justify-between",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
      className: "flex w-1/2 gap-8 md:gap-12 text-xl",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion.motion.a, {
        href: "https://twitter.com/islandcommerce",
        target: "_blank",
        rel: "noreferrer",
        variants: footerItemVariants,
        className: "nav-link text-xl text-dark-500",
        children: "Twitter"
      }, void 0, !1, {
        fileName: "app/components/footer/footer.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/footer/footer.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion.motion.p, {
      variants: footerItemVariants,
      className: "font-light text-dark-300 dark:text-dark-400",
      children: "\xA9 Island Commerce"
    }, void 0, !1, {
      fileName: "app/components/footer/footer.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/footer/footer.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this);

// app/components/footer/footer.motion.ts
var footerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5
    }
  }
}, footerItemVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

// app/components/mobile-navigation.tsx
var import_react5 = require("react"), import_remix3 = __toESM(require_dist()), import_framer_motion3 = require("framer-motion"), import_use_scrollspy = require("use-scrollspy");

// app/hooks/use-click-away.ts
var import_react3 = require("react"), defaultEvents = ["mousedown", "touchstart"], useClickAway = (references, onClickAway) => {
  let handleClick = (0, import_react3.useCallback)(
    (event) => {
      references != null && references.some((ref) => ref.current && ref.current.contains(event.target)) || onClickAway(event);
    },
    [references, onClickAway]
  );
  (0, import_react3.useEffect)(() => {
    for (let event of defaultEvents)
      document.addEventListener(event, handleClick);
    return () => {
      for (let event of defaultEvents)
        document.removeEventListener(event, handleClick);
    };
  }, [handleClick]);
};

// app/components/logo.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Logo = ({ width = 144, height = 250, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  zoomAndPan: "magnify",
  viewBox: "0 0 224.87999 74.999997",
  height: "200",
  preserveAspectRatio: "xMidYMid meet",
  version: "1.0",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {}, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 140,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 139,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(0.324827, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 2.15625 0 L 2.15625 -19.421875 L 4.984375 -19.421875 L 4.984375 0 Z M 2.15625 0 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 145,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 144,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 143,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 142,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(7.462475, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 7.46875 0.390625 C 5.6875 0.390625 4.238281 0 3.125 -0.78125 C 2.007812 -1.5625 1.328125 -2.664062 1.078125 -4.09375 L 3.96875 -4.53125 C 4.144531 -3.78125 4.554688 -3.1875 5.203125 -2.75 C 5.859375 -2.3125 6.675781 -2.09375 7.65625 -2.09375 C 8.53125 -2.09375 9.21875 -2.269531 9.71875 -2.625 C 10.21875 -2.988281 10.46875 -3.484375 10.46875 -4.109375 C 10.46875 -4.484375 10.378906 -4.785156 10.203125 -5.015625 C 10.023438 -5.242188 9.65625 -5.460938 9.09375 -5.671875 C 8.539062 -5.878906 7.695312 -6.132812 6.5625 -6.4375 C 5.3125 -6.757812 4.316406 -7.109375 3.578125 -7.484375 C 2.847656 -7.859375 2.328125 -8.289062 2.015625 -8.78125 C 1.703125 -9.28125 1.546875 -9.890625 1.546875 -10.609375 C 1.546875 -11.484375 1.78125 -12.25 2.25 -12.90625 C 2.71875 -13.5625 3.375 -14.066406 4.21875 -14.421875 C 5.070312 -14.785156 6.070312 -14.96875 7.21875 -14.96875 C 8.332031 -14.96875 9.328125 -14.789062 10.203125 -14.4375 C 11.078125 -14.09375 11.78125 -13.597656 12.3125 -12.953125 C 12.851562 -12.316406 13.179688 -11.566406 13.296875 -10.703125 L 10.40625 -10.171875 C 10.300781 -10.867188 9.96875 -11.421875 9.40625 -11.828125 C 8.851562 -12.234375 8.132812 -12.457031 7.25 -12.5 C 6.394531 -12.53125 5.703125 -12.382812 5.171875 -12.0625 C 4.640625 -11.75 4.375 -11.3125 4.375 -10.75 C 4.375 -10.425781 4.472656 -10.148438 4.671875 -9.921875 C 4.878906 -9.703125 5.273438 -9.488281 5.859375 -9.28125 C 6.441406 -9.070312 7.304688 -8.828125 8.453125 -8.546875 C 9.671875 -8.222656 10.640625 -7.867188 11.359375 -7.484375 C 12.078125 -7.109375 12.59375 -6.65625 12.90625 -6.125 C 13.21875 -5.601562 13.375 -4.96875 13.375 -4.21875 C 13.375 -2.78125 12.847656 -1.648438 11.796875 -0.828125 C 10.753906 -0.015625 9.3125 0.390625 7.46875 0.390625 Z M 7.46875 0.390625 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 152,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 151,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 150,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 149,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(21.926667, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 2.15625 0 L 2.15625 -19.828125 L 4.984375 -19.828125 L 4.984375 0 Z M 2.15625 0 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 159,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 158,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 157,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 156,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(29.064314, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 6 0.40625 C 4.925781 0.40625 4.023438 0.207031 3.296875 -0.1875 C 2.566406 -0.59375 2.015625 -1.125 1.640625 -1.78125 C 1.265625 -2.445312 1.078125 -3.175781 1.078125 -3.96875 C 1.078125 -4.707031 1.207031 -5.351562 1.46875 -5.90625 C 1.726562 -6.46875 2.113281 -6.941406 2.625 -7.328125 C 3.144531 -7.722656 3.773438 -8.039062 4.515625 -8.28125 C 5.160156 -8.46875 5.894531 -8.632812 6.71875 -8.78125 C 7.539062 -8.925781 8.398438 -9.0625 9.296875 -9.1875 C 10.203125 -9.3125 11.101562 -9.4375 12 -9.5625 L 10.96875 -9 C 10.988281 -10.144531 10.75 -10.992188 10.25 -11.546875 C 9.75 -12.097656 8.890625 -12.375 7.671875 -12.375 C 6.910156 -12.375 6.207031 -12.195312 5.5625 -11.84375 C 4.925781 -11.488281 4.484375 -10.898438 4.234375 -10.078125 L 1.609375 -10.890625 C 1.960938 -12.140625 2.644531 -13.128906 3.65625 -13.859375 C 4.675781 -14.597656 6.023438 -14.96875 7.703125 -14.96875 C 9.003906 -14.96875 10.140625 -14.742188 11.109375 -14.296875 C 12.078125 -13.859375 12.785156 -13.160156 13.234375 -12.203125 C 13.472656 -11.722656 13.617188 -11.21875 13.671875 -10.6875 C 13.722656 -10.15625 13.75 -9.582031 13.75 -8.96875 L 13.75 0 L 11.25 0 L 11.25 -3.328125 L 11.734375 -2.90625 C 11.128906 -1.789062 10.363281 -0.957031 9.4375 -0.40625 C 8.507812 0.132812 7.363281 0.40625 6 0.40625 Z M 6.5 -1.90625 C 7.300781 -1.90625 7.988281 -2.046875 8.5625 -2.328125 C 9.144531 -2.609375 9.609375 -2.96875 9.953125 -3.40625 C 10.304688 -3.851562 10.535156 -4.316406 10.640625 -4.796875 C 10.796875 -5.222656 10.882812 -5.707031 10.90625 -6.25 C 10.925781 -6.789062 10.9375 -7.222656 10.9375 -7.546875 L 11.859375 -7.203125 C 10.972656 -7.066406 10.164062 -6.941406 9.4375 -6.828125 C 8.707031 -6.722656 8.046875 -6.617188 7.453125 -6.515625 C 6.867188 -6.421875 6.34375 -6.300781 5.875 -6.15625 C 5.488281 -6.019531 5.144531 -5.859375 4.84375 -5.671875 C 4.539062 -5.484375 4.300781 -5.253906 4.125 -4.984375 C 3.957031 -4.710938 3.875 -4.382812 3.875 -4 C 3.875 -3.613281 3.96875 -3.257812 4.15625 -2.9375 C 4.34375 -2.625 4.628906 -2.375 5.015625 -2.1875 C 5.398438 -2 5.894531 -1.90625 6.5 -1.90625 Z M 6.5 -1.90625 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 166,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 165,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 164,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 163,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(44.43252, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 12.109375 0 L 12.109375 -7.171875 C 12.109375 -7.734375 12.0625 -8.3125 11.96875 -8.90625 C 11.875 -9.507812 11.691406 -10.066406 11.421875 -10.578125 C 11.160156 -11.085938 10.789062 -11.5 10.3125 -11.8125 C 9.832031 -12.132812 9.207031 -12.296875 8.4375 -12.296875 C 7.925781 -12.296875 7.445312 -12.210938 7 -12.046875 C 6.550781 -11.878906 6.15625 -11.609375 5.8125 -11.234375 C 5.476562 -10.867188 5.210938 -10.382812 5.015625 -9.78125 C 4.828125 -9.175781 4.734375 -8.441406 4.734375 -7.578125 L 2.984375 -8.25 C 2.984375 -9.570312 3.226562 -10.738281 3.71875 -11.75 C 4.21875 -12.757812 4.929688 -13.546875 5.859375 -14.109375 C 6.785156 -14.679688 7.90625 -14.96875 9.21875 -14.96875 C 10.21875 -14.96875 11.0625 -14.800781 11.75 -14.46875 C 12.4375 -14.144531 12.992188 -13.71875 13.421875 -13.1875 C 13.847656 -12.664062 14.171875 -12.09375 14.390625 -11.46875 C 14.617188 -10.851562 14.769531 -10.25 14.84375 -9.65625 C 14.925781 -9.0625 14.96875 -8.539062 14.96875 -8.09375 L 14.96875 0 Z M 1.875 0 L 1.875 -14.578125 L 4.390625 -14.578125 L 4.390625 -10.359375 L 4.734375 -10.359375 L 4.734375 0 Z M 1.875 0 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 173,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 172,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 171,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 170,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(61.028559, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 7.671875 0.40625 C 6.316406 0.40625 5.144531 0.0664062 4.15625 -0.609375 C 3.175781 -1.285156 2.414062 -2.203125 1.875 -3.359375 C 1.34375 -4.523438 1.078125 -5.835938 1.078125 -7.296875 C 1.078125 -8.765625 1.347656 -10.078125 1.890625 -11.234375 C 2.429688 -12.390625 3.195312 -13.300781 4.1875 -13.96875 C 5.1875 -14.632812 6.367188 -14.96875 7.734375 -14.96875 C 9.109375 -14.96875 10.265625 -14.632812 11.203125 -13.96875 C 12.140625 -13.300781 12.847656 -12.382812 13.328125 -11.21875 C 13.816406 -10.0625 14.0625 -8.753906 14.0625 -7.296875 C 14.0625 -5.835938 13.816406 -4.523438 13.328125 -3.359375 C 12.847656 -2.203125 12.132812 -1.285156 11.1875 -0.609375 C 10.238281 0.0664062 9.066406 0.40625 7.671875 0.40625 Z M 8.0625 -2.140625 C 8.988281 -2.140625 9.742188 -2.359375 10.328125 -2.796875 C 10.921875 -3.242188 11.347656 -3.851562 11.609375 -4.625 C 11.878906 -5.394531 12.015625 -6.285156 12.015625 -7.296875 C 12.015625 -8.304688 11.878906 -9.195312 11.609375 -9.96875 C 11.335938 -10.738281 10.914062 -11.335938 10.34375 -11.765625 C 9.769531 -12.203125 9.039062 -12.421875 8.15625 -12.421875 C 7.226562 -12.421875 6.460938 -12.191406 5.859375 -11.734375 C 5.253906 -11.273438 4.804688 -10.660156 4.515625 -9.890625 C 4.222656 -9.117188 4.078125 -8.253906 4.078125 -7.296875 C 4.078125 -6.335938 4.222656 -5.46875 4.515625 -4.6875 C 4.804688 -3.90625 5.242188 -3.285156 5.828125 -2.828125 C 6.421875 -2.367188 7.164062 -2.140625 8.0625 -2.140625 Z M 12.015625 0 L 12.015625 -10.484375 L 11.703125 -10.484375 L 11.703125 -19.421875 L 14.53125 -19.421875 L 14.53125 0 Z M 12.015625 0 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 180,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 179,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 178,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 177,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(77.449197, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {}, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 186,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 185,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 184,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(82.84628, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 10 0.40625 C 8.050781 0.40625 6.394531 -0.015625 5.03125 -0.859375 C 3.664062 -1.710938 2.617188 -2.898438 1.890625 -4.421875 C 1.171875 -5.941406 0.8125 -7.707031 0.8125 -9.71875 C 0.8125 -11.71875 1.171875 -13.476562 1.890625 -15 C 2.617188 -16.519531 3.664062 -17.703125 5.03125 -18.546875 C 6.394531 -19.398438 8.050781 -19.828125 10 -19.828125 C 12.238281 -19.828125 14.09375 -19.257812 15.5625 -18.125 C 17.03125 -17 18.050781 -15.476562 18.625 -13.5625 L 15.765625 -12.796875 C 15.390625 -14.148438 14.71875 -15.210938 13.75 -15.984375 C 12.789062 -16.765625 11.539062 -17.15625 10 -17.15625 C 8.625 -17.15625 7.476562 -16.84375 6.5625 -16.21875 C 5.644531 -15.59375 4.953125 -14.722656 4.484375 -13.609375 C 4.023438 -12.492188 3.796875 -11.195312 3.796875 -9.71875 C 3.785156 -8.226562 4.007812 -6.925781 4.46875 -5.8125 C 4.9375 -4.695312 5.628906 -3.828125 6.546875 -3.203125 C 7.472656 -2.585938 8.625 -2.28125 10 -2.28125 C 11.539062 -2.28125 12.789062 -2.664062 13.75 -3.4375 C 14.71875 -4.21875 15.390625 -5.285156 15.765625 -6.640625 L 18.625 -5.875 C 18.050781 -3.957031 17.03125 -2.429688 15.5625 -1.296875 C 14.09375 -0.160156 12.238281 0.40625 10 0.40625 Z M 10 0.40625 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 192,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 191,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 190,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 189,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(102.559136, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 8.21875 0.40625 C 6.757812 0.40625 5.492188 0.078125 4.421875 -0.578125 C 3.347656 -1.234375 2.519531 -2.140625 1.9375 -3.296875 C 1.363281 -4.453125 1.078125 -5.785156 1.078125 -7.296875 C 1.078125 -8.816406 1.375 -10.15625 1.96875 -11.3125 C 2.5625 -12.46875 3.394531 -13.363281 4.46875 -14 C 5.539062 -14.644531 6.789062 -14.96875 8.21875 -14.96875 C 9.675781 -14.96875 10.9375 -14.640625 12 -13.984375 C 13.070312 -13.328125 13.898438 -12.421875 14.484375 -11.265625 C 15.078125 -10.117188 15.375 -8.796875 15.375 -7.296875 C 15.375 -5.773438 15.078125 -4.4375 14.484375 -3.28125 C 13.890625 -2.125 13.054688 -1.21875 11.984375 -0.5625 C 10.921875 0.0820312 9.664062 0.40625 8.21875 0.40625 Z M 8.21875 -2.25 C 9.613281 -2.25 10.65625 -2.71875 11.34375 -3.65625 C 12.03125 -4.601562 12.375 -5.816406 12.375 -7.296875 C 12.375 -8.816406 12.023438 -10.03125 11.328125 -10.9375 C 10.628906 -11.851562 9.59375 -12.3125 8.21875 -12.3125 C 7.269531 -12.3125 6.488281 -12.097656 5.875 -11.671875 C 5.269531 -11.242188 4.816406 -10.65625 4.515625 -9.90625 C 4.222656 -9.15625 4.078125 -8.285156 4.078125 -7.296875 C 4.078125 -5.765625 4.425781 -4.539062 5.125 -3.625 C 5.820312 -2.707031 6.851562 -2.25 8.21875 -2.25 Z M 8.21875 -2.25 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 199,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 198,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 197,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 196,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(119.006756, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 19.34375 0 L 19.359375 -9.078125 C 19.359375 -10.128906 19.085938 -10.945312 18.546875 -11.53125 C 18.003906 -12.125 17.296875 -12.421875 16.421875 -12.421875 C 15.878906 -12.421875 15.382812 -12.296875 14.9375 -12.046875 C 14.5 -11.804688 14.140625 -11.441406 13.859375 -10.953125 C 13.585938 -10.460938 13.453125 -9.847656 13.453125 -9.109375 L 12.09375 -9.796875 C 12.070312 -10.816406 12.285156 -11.710938 12.734375 -12.484375 C 13.191406 -13.265625 13.8125 -13.867188 14.59375 -14.296875 C 15.375 -14.722656 16.253906 -14.9375 17.234375 -14.9375 C 18.804688 -14.9375 20.023438 -14.460938 20.890625 -13.515625 C 21.753906 -12.578125 22.1875 -11.320312 22.1875 -9.75 L 22.171875 0 Z M 1.875 0 L 1.875 -14.578125 L 4.390625 -14.578125 L 4.390625 -10.359375 L 4.703125 -10.359375 L 4.703125 0 Z M 10.625 0 L 10.625 -9.03125 C 10.625 -10.09375 10.359375 -10.921875 9.828125 -11.515625 C 9.296875 -12.117188 8.578125 -12.421875 7.671875 -12.421875 C 6.785156 -12.421875 6.066406 -12.113281 5.515625 -11.5 C 4.972656 -10.894531 4.703125 -10.097656 4.703125 -9.109375 L 3.359375 -9.96875 C 3.359375 -10.925781 3.585938 -11.773438 4.046875 -12.515625 C 4.503906 -13.265625 5.125 -13.851562 5.90625 -14.28125 C 6.6875 -14.71875 7.570312 -14.9375 8.5625 -14.9375 C 9.601562 -14.9375 10.488281 -14.71875 11.21875 -14.28125 C 11.945312 -13.84375 12.5 -13.234375 12.875 -12.453125 C 13.257812 -11.671875 13.453125 -10.765625 13.453125 -9.734375 L 13.4375 0 Z M 10.625 0 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 206,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 205,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 204,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 203,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(142.807904, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 19.34375 0 L 19.359375 -9.078125 C 19.359375 -10.128906 19.085938 -10.945312 18.546875 -11.53125 C 18.003906 -12.125 17.296875 -12.421875 16.421875 -12.421875 C 15.878906 -12.421875 15.382812 -12.296875 14.9375 -12.046875 C 14.5 -11.804688 14.140625 -11.441406 13.859375 -10.953125 C 13.585938 -10.460938 13.453125 -9.847656 13.453125 -9.109375 L 12.09375 -9.796875 C 12.070312 -10.816406 12.285156 -11.710938 12.734375 -12.484375 C 13.191406 -13.265625 13.8125 -13.867188 14.59375 -14.296875 C 15.375 -14.722656 16.253906 -14.9375 17.234375 -14.9375 C 18.804688 -14.9375 20.023438 -14.460938 20.890625 -13.515625 C 21.753906 -12.578125 22.1875 -11.320312 22.1875 -9.75 L 22.171875 0 Z M 1.875 0 L 1.875 -14.578125 L 4.390625 -14.578125 L 4.390625 -10.359375 L 4.703125 -10.359375 L 4.703125 0 Z M 10.625 0 L 10.625 -9.03125 C 10.625 -10.09375 10.359375 -10.921875 9.828125 -11.515625 C 9.296875 -12.117188 8.578125 -12.421875 7.671875 -12.421875 C 6.785156 -12.421875 6.066406 -12.113281 5.515625 -11.5 C 4.972656 -10.894531 4.703125 -10.097656 4.703125 -9.109375 L 3.359375 -9.96875 C 3.359375 -10.925781 3.585938 -11.773438 4.046875 -12.515625 C 4.503906 -13.265625 5.125 -13.851562 5.90625 -14.28125 C 6.6875 -14.71875 7.570312 -14.9375 8.5625 -14.9375 C 9.601562 -14.9375 10.488281 -14.71875 11.21875 -14.28125 C 11.945312 -13.84375 12.5 -13.234375 12.875 -12.453125 C 13.257812 -11.671875 13.453125 -10.765625 13.453125 -9.734375 L 13.4375 0 Z M 10.625 0 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 213,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 212,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 211,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 210,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(166.609052, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 8.359375 0.40625 C 6.898438 0.40625 5.625 0.0859375 4.53125 -0.546875 C 3.445312 -1.179688 2.597656 -2.066406 1.984375 -3.203125 C 1.378906 -4.335938 1.078125 -5.660156 1.078125 -7.171875 C 1.078125 -8.753906 1.375 -10.128906 1.96875 -11.296875 C 2.570312 -12.472656 3.40625 -13.378906 4.46875 -14.015625 C 5.539062 -14.648438 6.789062 -14.96875 8.21875 -14.96875 C 9.695312 -14.96875 10.957031 -14.625 12 -13.9375 C 13.050781 -13.25 13.832031 -12.269531 14.34375 -11 C 14.863281 -9.738281 15.070312 -8.234375 14.96875 -6.484375 L 12.140625 -6.484375 L 12.140625 -7.515625 C 12.117188 -9.203125 11.796875 -10.453125 11.171875 -11.265625 C 10.546875 -12.078125 9.597656 -12.484375 8.328125 -12.484375 C 6.910156 -12.484375 5.847656 -12.035156 5.140625 -11.140625 C 4.429688 -10.253906 4.078125 -8.96875 4.078125 -7.28125 C 4.078125 -5.6875 4.429688 -4.445312 5.140625 -3.5625 C 5.847656 -2.6875 6.875 -2.25 8.21875 -2.25 C 9.09375 -2.25 9.851562 -2.445312 10.5 -2.84375 C 11.144531 -3.25 11.648438 -3.828125 12.015625 -4.578125 L 14.78125 -3.703125 C 14.207031 -2.390625 13.34375 -1.375 12.1875 -0.65625 C 11.039062 0.0507812 9.765625 0.40625 8.359375 0.40625 Z M 3.15625 -6.484375 L 3.15625 -8.6875 L 13.5625 -8.6875 L 13.5625 -6.484375 Z M 3.15625 -6.484375 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 220,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 219,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 218,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 217,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(182.705858, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 1.890625 0 L 1.890625 -14.578125 L 4.390625 -14.578125 L 4.390625 -11.03125 L 4.046875 -11.5 C 4.222656 -11.96875 4.457031 -12.394531 4.75 -12.78125 C 5.039062 -13.175781 5.375 -13.5 5.75 -13.75 C 6.113281 -14.019531 6.519531 -14.226562 6.96875 -14.375 C 7.425781 -14.519531 7.894531 -14.609375 8.375 -14.640625 C 8.851562 -14.671875 9.3125 -14.648438 9.75 -14.578125 L 9.75 -11.921875 C 9.28125 -12.046875 8.753906 -12.082031 8.171875 -12.03125 C 7.585938 -11.976562 7.054688 -11.796875 6.578125 -11.484375 C 6.109375 -11.179688 5.742188 -10.816406 5.484375 -10.390625 C 5.222656 -9.972656 5.03125 -9.503906 4.90625 -8.984375 C 4.789062 -8.472656 4.734375 -7.929688 4.734375 -7.359375 L 4.734375 0 Z M 1.890625 0 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 227,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 226,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 225,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 224,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(193.135712, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 8.125 0.40625 C 6.625 0.40625 5.351562 0.0703125 4.3125 -0.59375 C 3.269531 -1.257812 2.472656 -2.171875 1.921875 -3.328125 C 1.367188 -4.492188 1.085938 -5.8125 1.078125 -7.28125 C 1.085938 -8.78125 1.375 -10.109375 1.9375 -11.265625 C 2.507812 -12.421875 3.320312 -13.328125 4.375 -13.984375 C 5.425781 -14.640625 6.6875 -14.96875 8.15625 -14.96875 C 9.75 -14.96875 11.109375 -14.570312 12.234375 -13.78125 C 13.367188 -13 14.117188 -11.914062 14.484375 -10.53125 L 11.671875 -9.734375 C 11.390625 -10.546875 10.929688 -11.175781 10.296875 -11.625 C 9.660156 -12.082031 8.9375 -12.3125 8.125 -12.3125 C 7.195312 -12.3125 6.4375 -12.09375 5.84375 -11.65625 C 5.25 -11.226562 4.804688 -10.632812 4.515625 -9.875 C 4.234375 -9.125 4.085938 -8.257812 4.078125 -7.28125 C 4.085938 -5.78125 4.429688 -4.566406 5.109375 -3.640625 C 5.785156 -2.710938 6.789062 -2.25 8.125 -2.25 C 9.03125 -2.25 9.765625 -2.457031 10.328125 -2.875 C 10.890625 -3.300781 11.316406 -3.90625 11.609375 -4.6875 L 14.484375 -4 C 14.003906 -2.582031 13.210938 -1.492188 12.109375 -0.734375 C 11.015625 0.0234375 9.6875 0.40625 8.125 0.40625 Z M 8.125 0.40625 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 234,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 233,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 232,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 231,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "#8f8f8f",
      "fill-opacity": "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(208.476935, 47.569597)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 8.359375 0.40625 C 6.898438 0.40625 5.625 0.0859375 4.53125 -0.546875 C 3.445312 -1.179688 2.597656 -2.066406 1.984375 -3.203125 C 1.378906 -4.335938 1.078125 -5.660156 1.078125 -7.171875 C 1.078125 -8.753906 1.375 -10.128906 1.96875 -11.296875 C 2.570312 -12.472656 3.40625 -13.378906 4.46875 -14.015625 C 5.539062 -14.648438 6.789062 -14.96875 8.21875 -14.96875 C 9.695312 -14.96875 10.957031 -14.625 12 -13.9375 C 13.050781 -13.25 13.832031 -12.269531 14.34375 -11 C 14.863281 -9.738281 15.070312 -8.234375 14.96875 -6.484375 L 12.140625 -6.484375 L 12.140625 -7.515625 C 12.117188 -9.203125 11.796875 -10.453125 11.171875 -11.265625 C 10.546875 -12.078125 9.597656 -12.484375 8.328125 -12.484375 C 6.910156 -12.484375 5.847656 -12.035156 5.140625 -11.140625 C 4.429688 -10.253906 4.078125 -8.96875 4.078125 -7.28125 C 4.078125 -5.6875 4.429688 -4.445312 5.140625 -3.5625 C 5.847656 -2.6875 6.875 -2.25 8.21875 -2.25 C 9.09375 -2.25 9.851562 -2.445312 10.5 -2.84375 C 11.144531 -3.25 11.648438 -3.828125 12.015625 -4.578125 L 14.78125 -3.703125 C 14.207031 -2.390625 13.34375 -1.375 12.1875 -0.65625 C 11.039062 0.0507812 9.765625 0.40625 8.359375 0.40625 Z M 3.15625 -6.484375 L 3.15625 -8.6875 L 13.5625 -8.6875 L 13.5625 -6.484375 Z M 3.15625 -6.484375 "
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 241,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 240,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 239,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 238,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/logo.tsx",
  lineNumber: 138,
  columnNumber: 3
}, this);

// app/components/theme-toggle-button.tsx
var import_react4 = require("react"), import_framer_motion2 = require("framer-motion"), import_md = require("react-icons/md");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), IconButton = ({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion2.motion.button, {
  ...props,
  initial: { opacity: 0, rotate: -65, originY: "150%", originX: 0.5 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: 65 },
  transition: { duration: 0.4, ease: "backOut" },
  children
}, void 0, !1, {
  fileName: "app/components/theme-toggle-button.tsx",
  lineNumber: 12,
  columnNumber: 3
}, this);
IconButton.displayName = "IconButton";
var ThemeToggleButton = () => {
  let { theme, toggleTheme } = useTheme(), isDarkMode = (0, import_react4.useMemo)(() => theme === "dark", [theme]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion2.AnimatePresence, {
    exitBeforeEnter: !0,
    children: isDarkMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
      className: "hover:text-primary-brand overflow-hidden text-dark-400 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-200",
      onClick: toggleTheme,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_md.MdOutlineLightMode, {
        title: "Light mode",
        size: 24
      }, void 0, !1, {
        fileName: "app/components/theme-toggle-button.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    }, "light-mode", !1, {
      fileName: "app/components/theme-toggle-button.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
      className: "hover:text-primary-brand overflow-hidden text-dark-400 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-200",
      onClick: toggleTheme,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_md.MdOutlineDarkMode, {
        title: "Dark mode",
        size: 24
      }, void 0, !1, {
        fileName: "app/components/theme-toggle-button.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this)
    }, "dark-mode", !1, {
      fileName: "app/components/theme-toggle-button.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/theme-toggle-button.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
};

// app/components/mobile-navigation.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), navVariants = {
  hidden: {
    x: "100%",
    transition: {
      duration: 0.2,
      ease: [0.9, 0.1, 0.3, 0.96],
      when: "afterChildren"
    }
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.9, 0.1, 0.3, 0.96],
      when: "beforeChildren",
      staggerChildren: 0.05
    }
  }
}, linkVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "circOut"
    }
  }
}, MotionLink = (0, import_framer_motion3.motion)(import_remix3.Link);
function MobileNav() {
  let navRef = (0, import_react5.useRef)(null), navToggleRef = (0, import_react5.useRef)(null), [isOpen, setIsOpen] = (0, import_react5.useState)(!1), toggle = () => setIsOpen((open) => !open);
  useClickAway([navRef, navToggleRef], () => setIsOpen(!1)), (0, import_use_scrollspy.useScrollspy)({
    ids: ["intro", "Services", "about", "contact"],
    hrefs: ["/#intro", "/#services", "/#about", "/#contact"],
    offset: "topCenter",
    activeClass: "active-nav-link"
  });
  let location = (0, import_remix3.useLocation)();
  return (0, import_react5.useEffect)(() => setIsOpen(!1), [location]), (0, import_react5.useEffect)(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Link, {
        to: "/#",
        className: "fixed top-8 left-4 z-30 md:hidden",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {
          height: 36
        }, void 0, !1, {
          fileName: "app/components/mobile-navigation.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/mobile-navigation.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        ref: navToggleRef,
        type: "button",
        "aria-label": isOpen ? "Close menu" : "Open menu",
        onClick: toggle,
        className: "fixed top-8 right-4 z-30 text-dark-100 mix-blend-difference hover:opacity-60 dark:text-white md:hidden",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          className: "h-8 w-8",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion3.AnimatePresence, {
            children: isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion3.motion.path, {
              initial: { pathLength: 0 },
              animate: { pathLength: 1, pathOffset: 0 },
              exit: { pathOffset: 1 },
              transition: { duration: 1, ease: "circOut" },
              strokeLinecap: "square",
              strokeWidth: 1.5,
              d: "M6 18L18 6M6 6l12 12"
            }, "close", !1, {
              fileName: "app/components/mobile-navigation.tsx",
              lineNumber: 92,
              columnNumber: 15
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion3.motion.path, {
              initial: { pathLength: 0 },
              animate: { pathLength: 1, pathOffset: 0 },
              exit: { pathOffset: 1 },
              transition: { duration: 1, ease: "circOut" },
              strokeLinecap: "square",
              strokeWidth: 1.5,
              d: "M4 6h16M4 12h16m-7 6h7"
            }, "open", !1, {
              fileName: "app/components/mobile-navigation.tsx",
              lineNumber: 103,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/components/mobile-navigation.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/mobile-navigation.tsx",
          lineNumber: 83,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/mobile-navigation.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion3.AnimatePresence, {
        children: isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion3.motion.nav, {
          ref: navRef,
          variants: navVariants,
          initial: "hidden",
          animate: "visible",
          exit: "hidden",
          className: "fixed inset-y-0 right-0 z-20 flex w-9/12 flex-col bg-dark-100 px-12 transition-colors dark:bg-dark-700 md:hidden h-full flex-wrap items-start justify-center gap-y-14",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MotionLink, {
              to: "/#intro",
              variants: linkVariants,
              className: "mobile-nav-link",
              children: "Introduction"
            }, void 0, !1, {
              fileName: "app/components/mobile-navigation.tsx",
              lineNumber: 128,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MotionLink, {
              to: "/#services",
              variants: linkVariants,
              className: "mobile-nav-link",
              children: "Services"
            }, void 0, !1, {
              fileName: "app/components/mobile-navigation.tsx",
              lineNumber: 131,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MotionLink, {
              to: "/#about",
              variants: linkVariants,
              className: "mobile-nav-link",
              children: "About"
            }, void 0, !1, {
              fileName: "app/components/mobile-navigation.tsx",
              lineNumber: 134,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MotionLink, {
              to: "/#contact",
              variants: linkVariants,
              className: "mobile-nav-link",
              children: "Contact"
            }, void 0, !1, {
              fileName: "app/components/mobile-navigation.tsx",
              lineNumber: 137,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion3.motion.div, {
              variants: linkVariants,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggleButton, {}, void 0, !1, {
                fileName: "app/components/mobile-navigation.tsx",
                lineNumber: 141,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/mobile-navigation.tsx",
              lineNumber: 140,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/mobile-navigation.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/mobile-navigation.tsx",
        lineNumber: 118,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/mobile-navigation.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

// app/components/navigation/navigation.tsx
var import_remix4 = __toESM(require_dist()), import_framer_motion4 = require("framer-motion");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), AnimatedLink = (0, import_framer_motion4.motion)(import_remix4.Link);
AnimatedLink.defaultProps = { className: "hover:text-primary-brand nav-link" };
var Navigation = () => {
  let { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion4.motion.header, {
    variants: navVariants2,
    initial: "hidden",
    animate: "visible",
    className: "container fixed inset-x-0 top-0 z-50 hidden h-32 w-full items-center justify-between md:flex",
    style: { backgroundColor: theme === "dark" ? "#171717" : "#EDEDED" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedLink, {
        to: "/#",
        variants: linkVariants2,
        className: "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {
          height: 36
        }, void 0, !1, {
          fileName: "app/components/navigation/navigation.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation/navigation.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
        className: "flex items-center justify-center gap-x-14 text-lg",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedLink, {
            to: "/#intro",
            variants: linkVariants2,
            children: "Introduction"
          }, void 0, !1, {
            fileName: "app/components/navigation/navigation.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedLink, {
            to: "/#services",
            variants: linkVariants2,
            children: "Services"
          }, void 0, !1, {
            fileName: "app/components/navigation/navigation.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedLink, {
            to: "/#about",
            variants: linkVariants2,
            children: "About"
          }, void 0, !1, {
            fileName: "app/components/navigation/navigation.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedLink, {
            to: "/#contact",
            variants: linkVariants2,
            children: "Contact"
          }, void 0, !1, {
            fileName: "app/components/navigation/navigation.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion4.motion.div, {
            variants: linkVariants2,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggleButton, {}, void 0, !1, {
              fileName: "app/components/navigation/navigation.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/navigation/navigation.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/navigation/navigation.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/navigation/navigation.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};

// app/components/navigation/navigation.motion.ts
var navVariants2 = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1
    }
  }
}, linkVariants2 = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LKGBBK6X.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "icon",
    href: "/assets/logo.svg",
    type: "image/svg"
  },
  { rel: "stylesheet", href: tailwind_default },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700&display=swap"
  }
], loader = async ({ request }) => ({
  theme: await (await getThemeSession(request)).getTheme()
});
function Document({ children, title }) {
  let { theme: loadedTheme } = (0, import_react6.useLoaderData)(), { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    className: (0, import_clsx.default)("scroll-p-32 scroll-smooth", theme === "dark" && theme),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charSet: "utf8"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this),
          title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: title
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 67,
            columnNumber: 18
          }, this) : void 0,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NonFlashOfWrongThemeEls, {
            ssrTheme: Boolean(loadedTheme)
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 70,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "bg-dark-50 text-dark-600 transition-colors duration-300 ease-in-out dark:bg-dark-850 dark:text-dark-50",
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 74,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 76,
            columnNumber: 52
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "remix-app",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileNav, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 7
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
function App() {
  let { theme } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.StrictMode, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, {
      specifiedTheme: theme,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion5.AnimatePresence, {
        exitBeforeEnter: !0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 101,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    title: "Error!",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "There was an error"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 118,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: error.message
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 119,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 120,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: "Hey, developer, you should replace this with what you want your users to see."
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 121,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react6.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Oops! Looks like you tried to visit a page that you do not have access to."
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 135,
        columnNumber: 17
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Oops! Looks like you tried to visit a page that does not exist."
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 138,
        columnNumber: 17
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    title: `${caught.status} ${caught.statusText}`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "container",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "mt-40",
            children: [
              caught.status,
              ": ",
              caught.statusText
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 149,
            columnNumber: 11
          }, this),
          message
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 146,
    columnNumber: 5
  }, this);
}

// mdx:routes/service/headless-commerce.mdx
var headless_commerce_exports = {};
__export(headless_commerce_exports, {
  attributes: () => attributes,
  default: () => headless_commerce_default,
  filename: () => filename,
  headers: () => headers,
  meta: () => meta
});
var import_react8 = __toESM(require("react"));

// app/components/project-header-mdx.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ProjectHeaderMDX = ({ project }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
  className: "flex-col-reverse flex lg:flex-row container mt-40 lg:items-center mb-20",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
      className: "w-full lg:w-1/2 z-10 break-words",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mb-6 text-xl font-light leading-relaxed text-dark-400 dark:text-dark-200",
          children: "Coming soon..."
        }, void 0, !1, {
          fileName: "app/components/project-header-mdx.tsx",
          lineNumber: 10,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "text-4xl font-medium !leading-tight md:text-5xl lg:text-6xl",
          children: project.name
        }, void 0, !1, {
          fileName: "app/components/project-header-mdx.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
          className: "mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200",
          children: project.area
        }, void 0, !1, {
          fileName: "app/components/project-header-mdx.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/project-header-mdx.tsx",
      lineNumber: 9,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
      className: "h-full w-full mb-8 lg:mt-0 lg:w-1/2 aspect-[4/3]",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: project.image,
        alt: project.imageAlt,
        className: "w-full h-full object-cover"
      }, void 0, !1, {
        fileName: "app/components/project-header-mdx.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/project-header-mdx.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/project-header-mdx.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this);

// mdx:routes/service/headless-commerce.mdx
var attributes = {
  meta: {
    title: "Headless Commerce",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  project: {
    name: "Headless Commerce",
    area: "Design",
    image: "https://teleporthq.io/blog/content/images/size/w2000/2022/05/What-is-Headless-Commerce_.png",
    imageAlt: "100 days of UI by",
    link: "/project/100-days-of-ui",
    color: null
  },
  headers: {
    "Cache-Control": "no-cache"
  }
};
function MDXContent(props = {}) {
  let _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(ProjectHeaderMDX, {
    project: attributes.project
  }));
  return MDXLayout ? /* @__PURE__ */ import_react8.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var headless_commerce_default = MDXContent, filename = "headless-commerce.mdx", headers = typeof attributes < "u" && attributes.headers, meta = typeof attributes < "u" && attributes.meta;

// mdx:routes/project/100-days-of-ui.mdx
var days_of_ui_exports = {};
__export(days_of_ui_exports, {
  attributes: () => attributes2,
  default: () => days_of_ui_default,
  filename: () => filename2,
  headers: () => headers2,
  meta: () => meta2
});
var import_react9 = __toESM(require("react"));
var attributes2 = {
  meta: {
    title: "100 days of UI -",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  project: {
    name: "100 days of UI",
    area: "Design",
    image: "https://cdn.dribbble.com/users/1858541/screenshots/15234356/media/5514ddf67d4ba1ab8e763ceb88254253.png",
    imageAlt: "100 days of UI by",
    link: "/project/100-days-of-ui",
    color: null
  },
  headers: {
    "Cache-Control": "no-cache"
  }
};
function MDXContent2(props = {}) {
  let _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(ProjectHeaderMDX, {
    project: attributes2.project
  }));
  return MDXLayout ? /* @__PURE__ */ import_react9.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var days_of_ui_default = MDXContent2, filename2 = "100-days-of-ui.mdx", headers2 = typeof attributes2 < "u" && attributes2.headers, meta2 = typeof attributes2 < "u" && attributes2.meta;

// app/routes/action/toggle-theme.tsx
var toggle_theme_exports = {};
__export(toggle_theme_exports, {
  action: () => action,
  default: () => MarkRead,
  loader: () => loader2
});
var import_remix5 = __toESM(require_dist());
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  let themeSession = await getThemeSession(request), requestText = await request.text(), theme = new URLSearchParams(requestText).get("theme");
  return isTheme(theme) ? (themeSession.setTheme(theme), (0, import_remix5.json)(
    { success: !0 },
    {
      headers: { "Set-Cookie": await themeSession.commit() }
    }
  )) : (0, import_remix5.json)({
    success: !1,
    message: `theme value of ${theme} is not a valid theme.`
  });
}, loader2 = () => (0, import_remix5.redirect)("/", { status: 404 });
function MarkRead() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: "Oops... You should not see this."
  }, void 0, !1, {
    fileName: "app/routes/action/toggle-theme.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}

// mdx:routes/project/miinto.mdx
var miinto_exports = {};
__export(miinto_exports, {
  attributes: () => attributes3,
  default: () => miinto_default,
  filename: () => filename3,
  headers: () => headers3,
  meta: () => meta3
});
var import_react10 = __toESM(require("react"));
var attributes3 = {
  meta: {
    title: "Miinto 2.0 -",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  project: {
    name: "Miinto 2.0",
    area: "Design and Development",
    image: "https://cdn.dribbble.com/users/1858541/screenshots/17394216/media/113b3233d9f61e804377a2aa2488d613.png",
    imageAlt: "Miinto 2.0 by"
  },
  headers: {
    "Cache-Control": "no-cache"
  }
};
function MDXContent3(props = {}) {
  let _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(ProjectHeaderMDX, {
    project: attributes3.project
  }));
  return MDXLayout ? /* @__PURE__ */ import_react10.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var miinto_default = MDXContent3, filename3 = "miinto.mdx", headers3 = typeof attributes3 < "u" && attributes3.headers, meta3 = typeof attributes3 < "u" && attributes3.meta;

// app/routes/[sitemap.xml].tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader3
});
var loader3 = () => {
  let content = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://olivercederborg.com/</loc>
        <lastmod>2022-07-14T23:13:19+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://olivercederborg.com/side-projects</loc>
        <lastmod>2022-07-24T01:46:50+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://olivercederborg.com/project/miinto</loc>
        <lastmod>2022-07-14T23:13:19+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://olivercederborg.com/project/tsks</loc>
        <lastmod>2022-07-14T23:13:19+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://olivercederborg.com/project/100-days-of-ui</loc>
        <lastmod>2022-07-14T23:13:19+00:00</lastmod>
        <priority>0.80</priority>
      </url>
    </urlset>
`;
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "utf8"
    }
  });
};

// app/routes/side-projects.tsx
var side_projects_exports = {};
__export(side_projects_exports, {
  default: () => Sideprojects,
  headers: () => headers4,
  loader: () => loader4,
  meta: () => meta4
});
var import_remix6 = __toESM(require_dist()), import_framer_motion8 = require("framer-motion");

// app/components/animated-text/animated-text.tsx
var import_react11 = require("react"), import_framer_motion6 = require("framer-motion");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), AnimatedText = ({
  as: Tag = "p",
  text,
  variants = defaultLetterVariants,
  ...rest
}) => {
  let words = text.split(" ").map((word) => `${word}\xA0`), renderWords = (0, import_react11.useMemo)(
    () => words.map((word, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "inline-block overflow-hidden",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion6.motion.span, {
        variants,
        className: "inline-block",
        children: word
      }, void 0, !1, {
        fileName: "app/components/animated-text/animated-text.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    }, index, !1, {
      fileName: "app/components/animated-text/animated-text.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)),
    [variants, words]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, {
    ...rest,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion6.motion.span, {
      variants,
      children: renderWords
    }, void 0, !1, {
      fileName: "app/components/animated-text/animated-text.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/animated-text/animated-text.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}, AnimatedLetters = ({
  as: Tag = "div",
  text,
  textVariants = defaultTextVariants,
  letterVariants = defaultLetterVariants,
  ...rest
}) => {
  let words = text.split(" ").map((word) => `${word}\xA0`);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, {
    ...rest,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion6.motion.span, {
      variants: textVariants,
      children: words.map((_, index) => index === 4 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "inline-block whitespace-nowrap",
        children: [...words[index]].flat().map((letter, letterIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "inline-block overflow-hidden text text-orange-500",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion6.motion.span, {
            variants: letterVariants,
            className: "inline-block",
            children: letter
          }, void 0, !1, {
            fileName: "app/components/animated-text/animated-text.tsx",
            lineNumber: 75,
            columnNumber: 21
          }, this)
        }, letterIndex, !1, {
          fileName: "app/components/animated-text/animated-text.tsx",
          lineNumber: 74,
          columnNumber: 19
        }, this))
      }, index, !1, {
        fileName: "app/components/animated-text/animated-text.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "inline-block whitespace-nowrap",
        children: [...words[index]].flat().map((letter, letterIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "inline-block overflow-hidden",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion6.motion.span, {
            variants: letterVariants,
            className: "inline-block",
            children: letter
          }, void 0, !1, {
            fileName: "app/components/animated-text/animated-text.tsx",
            lineNumber: 88,
            columnNumber: 19
          }, this)
        }, letterIndex, !1, {
          fileName: "app/components/animated-text/animated-text.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this))
      }, index, !1, {
        fileName: "app/components/animated-text/animated-text.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this))
    }, void 0, !1, {
      fileName: "app/components/animated-text/animated-text.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/animated-text/animated-text.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
};

// app/components/animated-text/animated-text.motion.ts
var defaultTextVariants = {
  visible: {}
}, defaultLetterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "circOut", duration: 0.5 }
  }
};

// app/components/side-project-item.tsx
var import_react12 = require("react"), import_clsx2 = __toESM(require("clsx")), import_framer_motion7 = require("framer-motion"), import_useMedia = __toESM(require("react-use/lib/useMedia"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SideProjectItem = (0, import_react12.memo)(({ project, ...props }) => {
  let { id, name, area, url, stars, image, imageAlt, color = "#ededed" } = project, isPhone = (0, import_useMedia.default)("(max-width: 768px)"), phoneMotionProps = (0, import_react12.useMemo)(
    () => ({
      variants: { visible: { transition: { staggerChildren: 0.35 } } },
      viewport: { once: !0 },
      ...isPhone ? { initial: "hidden", whileInView: "visible", exit: "hidden" } : {}
    }),
    []
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: (0, import_clsx2.default)("col-span-12 flex flex-col md:col-span-6 xl:col-span-3", props.className),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion7.motion.article, {
      ...phoneMotionProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion7.motion.figure, {
          variants: {
            hidden: { scaleX: 0, originX: 0 },
            visible: {
              scaleX: 1,
              originX: [0, 0, 0, 0, 0, 0, 0.5],
              opacity: 1,
              transition: {
                duration: 0.75,
                ease: [0.9, 0.1, 0.3, 0.96],
                when: "beforeChildren",
                delayChildren: 0.15
              }
            }
          },
          whileHover: { scale: 1.05, transition: { duration: 0.5, ease: "circOut" } },
          whileTap: { scale: 0.95 },
          style: { backgroundColor: color },
          className: "aspect-[4/3] w-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion7.motion.img, {
            variants: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] }
              }
            },
            src: image,
            alt: imageAlt,
            className: "object-cover w-full h-full"
          }, void 0, !1, {
            fileName: "app/components/side-project-item.tsx",
            lineNumber: 59,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/side-project-item.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: "flex justify-between items-center mt-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
              text: area,
              className: "text-sm font-light text-dark-300 dark:text-dark-400"
            }, void 0, !1, {
              fileName: "app/components/side-project-item.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this),
            !!stars && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
              as: "span",
              text: `\u2605 ${stars}`,
              className: "text-sm font-light text-dark-300 dark:text-dark-400"
            }, void 0, !1, {
              fileName: "app/components/side-project-item.tsx",
              lineNumber: 78,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/side-project-item.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
          as: "h3",
          text: name || "Untitled",
          className: "mt-3 text-3xl text-dark-400 dark:text-dark-200"
        }, void 0, !1, {
          fileName: "app/components/side-project-item.tsx",
          lineNumber: 85,
          columnNumber: 9
        }, this)
      ]
    }, id, !0, {
      fileName: "app/components/side-project-item.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/side-project-item.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
});
SideProjectItem.displayName = "ProjectItem";

// app/routes/side-projects.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta4 = () => ({
  title: "Side Projects -",
  description: "I'm a 25 year old self-taught designer & frontend developer, focused on user experience, accessibility and modern web technologies."
}), headers4 = () => ({
  "Cache-Control": "max-age=600, s-maxage=3600"
}), loader4 = async () => {
  let sideProjects = [
    {
      id: 0,
      name: "use-scrollspy",
      area: "React Hook",
      image: "https://mj-gallery.com/6c010f60-f86b-4a99-84b0-b98177497205/grid_0.png",
      imageAlt: "scrollspy hook by",
      repo: "olivercederborg/use-scrollspy",
      url: "https://github.com/olivercederborg/use-scrollspy",
      color: "#4D4E52"
    },
    {
      id: 1,
      name: "Poimandres.nvim",
      area: "Neovim Plugin",
      image: "https://user-images.githubusercontent.com/47901349/180445055-92480553-0652-4155-8d41-835fec27245b.png",
      imageAlt: "Poimandres Neovim color scheme by",
      repo: "olivercederborg/poimandres.nvim",
      url: "https://github.com/olivercederborg/poimandres.nvim",
      color: "#23393D"
    },
    {
      id: 2,
      name: "Poimandres-wezterm",
      area: "WezTerm Color Scheme",
      image: "https://user-images.githubusercontent.com/47901349/179416018-ba8e24a6-3590-4eff-93cb-806d41378a0d.png",
      imageAlt: "Poimandres WezTerm color scheme by",
      repo: "olivercederborg/poimandres-wezterm",
      url: "https://github.com/olivercederborg/poimandres-wezterm",
      color: "#23393D"
    },
    {
      id: 3,
      name: "Modern Monokai",
      area: "VSCode Color Scheme",
      image: "https://github.com/olivercederborg/modern-monokai/raw/master/assets/screen1.png",
      imageAlt: "Modern Monokai color scheme by",
      repo: "olivercederborg/modern-monokai",
      url: "https://marketplace.visualstudio.com/items?itemName=OliverCederborg.modern-monokai",
      color: "#292E36"
    }
  ], projects2 = [];
  for await (let project of sideProjects)
    if (project.repo) {
      let data = await fetch(`https://api.github.com/repos/${project.repo}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }), { stargazers_count: stars } = await data.json();
      projects2.push({
        ...project,
        stars
      });
    } else
      projects2.push(project);
  return {
    projects: projects2
  };
};
function Sideprojects() {
  let { projects: projects2 } = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "container py-40",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion8.motion.article, {
        variants: {
          hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
          visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } }
        },
        initial: "hidden",
        whileInView: "visible",
        exit: "hidden",
        viewport: { once: !0 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion8.AnimatePresence, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedLetters, {
              as: "h1",
              text: "Side Projects",
              className: "text-4xl font-medium lg:text-5xl",
              textVariants: {
                hidden: { transition: { staggerChildren: 0.015 } },
                visible: { transition: { staggerChildren: 0.015 } }
              },
              letterVariants: {
                hidden: { opacity: 0, y: 75 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }
                }
              }
            }, "title", !1, {
              fileName: "app/routes/side-projects.tsx",
              lineNumber: 125,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
              as: "p",
              className: "mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:w-3/5",
              text: "This is where I keep my side projects. You will find stuff like web and mobile apps, automation projects and Neovim plugins."
            }, "text", !1, {
              fileName: "app/routes/side-projects.tsx",
              lineNumber: 143,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/side-projects.tsx",
          lineNumber: 124,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/side-projects.tsx",
        lineNumber: 114,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion8.motion.section, {
        variants: {
          visible: { transition: { staggerChildren: 0.25 } }
        },
        initial: "hidden",
        whileInView: "visible",
        exit: "hidden",
        viewport: { once: !0 },
        className: "relative grid flex-1 grid-cols-12 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16 mt-16",
        children: projects2.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SideProjectItem, {
          project
        }, project.id, !1, {
          fileName: "app/routes/side-projects.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/routes/side-projects.tsx",
        lineNumber: 152,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/side-projects.tsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
}

// app/routes/[robots.txt].tsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader5
});
var loader5 = () => {
  let robotText = `
    User-agent: Googlebot
    Disallow: /nogooglebot/

    User-agent: *
    Allow: /
    `;
  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
};

// mdx:routes/project/tsks.mdx
var tsks_exports = {};
__export(tsks_exports, {
  attributes: () => attributes4,
  default: () => tsks_default,
  filename: () => filename4,
  headers: () => headers5,
  meta: () => meta5
});
var import_react13 = __toESM(require("react"));
var attributes4 = {
  meta: {
    title: "Tsks.app -",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  project: {
    name: "Tsks.app",
    area: "Design and Development",
    image: "https://cdn.dribbble.com/users/1858541/screenshots/15209401/media/5781bdac4f41c65f58ea597cad62c2ce.png",
    imageAlt: "Tsks task manager app by",
    color: null
  },
  headers: {
    "Cache-Control": "no-cache"
  }
};
function MDXContent4(props = {}) {
  let _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(ProjectHeaderMDX, {
    project: attributes4.project
  }));
  return MDXLayout ? /* @__PURE__ */ import_react13.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var tsks_default = MDXContent4, filename4 = "tsks.mdx", headers5 = typeof attributes4 < "u" && attributes4.headers, meta5 = typeof attributes4 < "u" && attributes4.meta;

// app/routes/services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => Sideprojects2,
  headers: () => headers6,
  loader: () => loader6,
  meta: () => meta6
});
var import_remix7 = __toESM(require_dist()), import_framer_motion9 = require("framer-motion");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta6 = () => ({
  title: "Side Projects - ",
  description: "I'm a 25 year old self-taught designer & frontend developer, focused on user experience, accessibility and modern web technologies."
}), headers6 = () => ({
  "Cache-Control": "max-age=600, s-maxage=3600"
}), loader6 = async () => {
  let sideProjects = [
    {
      id: 0,
      name: "use-scrollspy",
      area: "React Hook",
      image: "https://mj-gallery.com/6c010f60-f86b-4a99-84b0-b98177497205/grid_0.png",
      imageAlt: "scrollspy hook by",
      repo: "olivercederborg/use-scrollspy",
      url: "https://github.com/olivercederborg/use-scrollspy",
      color: "#4D4E52"
    },
    {
      id: 1,
      name: "Poimandres.nvim",
      area: "Neovim Plugin",
      image: "https://user-images.githubusercontent.com/47901349/180445055-92480553-0652-4155-8d41-835fec27245b.png",
      imageAlt: "Poimandres Neovim color scheme by",
      repo: "olivercederborg/poimandres.nvim",
      url: "https://github.com/olivercederborg/poimandres.nvim",
      color: "#23393D"
    },
    {
      id: 2,
      name: "Poimandres-wezterm",
      area: "WezTerm Color Scheme",
      image: "https://user-images.githubusercontent.com/47901349/179416018-ba8e24a6-3590-4eff-93cb-806d41378a0d.png",
      imageAlt: "Poimandres WezTerm color scheme by",
      repo: "olivercederborg/poimandres-wezterm",
      url: "https://github.com/olivercederborg/poimandres-wezterm",
      color: "#23393D"
    },
    {
      id: 3,
      name: "Modern Monokai",
      area: "VSCode Color Scheme",
      image: "https://github.com/olivercederborg/modern-monokai/raw/master/assets/screen1.png",
      imageAlt: "Modern Monokai color scheme by",
      repo: "olivercederborg/modern-monokai",
      url: "https://marketplace.visualstudio.com/items?itemName=OliverCederborg.modern-monokai",
      color: "#292E36"
    }
  ], projects2 = [];
  for await (let project of sideProjects)
    if (project.repo) {
      let data = await fetch(`https://api.github.com/repos/${project.repo}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }), { stargazers_count: stars } = await data.json();
      projects2.push({
        ...project,
        stars
      });
    } else
      projects2.push(project);
  return {
    projects: projects2
  };
};
function Sideprojects2() {
  let { projects: projects2 } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "container py-40",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion9.motion.article, {
        variants: {
          hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
          visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } }
        },
        initial: "hidden",
        whileInView: "visible",
        exit: "hidden",
        viewport: { once: !0 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion9.AnimatePresence, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedLetters, {
              as: "h1",
              text: "Our Services",
              className: "text-4xl font-medium lg:text-5xl",
              textVariants: {
                hidden: { transition: { staggerChildren: 0.015 } },
                visible: { transition: { staggerChildren: 0.015 } }
              },
              letterVariants: {
                hidden: { opacity: 0, y: 75 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }
                }
              }
            }, "title", !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 125,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
              as: "p",
              className: "mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:w-3/5",
              text: "This is where I keep my side projects. You will find stuff like web and mobile apps, automation projects and Neovim plugins."
            }, "text", !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 143,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 124,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/services.tsx",
        lineNumber: 114,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion9.motion.section, {
        variants: {
          visible: { transition: { staggerChildren: 0.25 } }
        },
        initial: "hidden",
        whileInView: "visible",
        exit: "hidden",
        viewport: { once: !0 },
        className: "relative grid flex-1 grid-cols-12 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16 mt-16",
        children: projects2.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SideProjectItem, {
          project
        }, project.id, !1, {
          fileName: "app/routes/services.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/routes/services.tsx",
        lineNumber: 152,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/services.tsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index,
  loader: () => loader7,
  meta: () => meta7,
  validator: () => validator
});
var import_react18 = require("react"), import_remix9 = __toESM(require_dist()), import_with_zod = require("@remix-validated-form/with-zod"), import_remix_validated_form2 = require("remix-validated-form"), import_zod = require("zod");

// app/utils/get-error-message.ts
var getErrorMessage = (error) => error instanceof Error ? error.message : String(error);

// app/utils/send-email.ts
var import_mail = __toESM(require("@sendgrid/mail")), sendEmail = async (data) => {
  import_mail.default.setApiKey(process.env.SENDGRID_API_KEY);
  let { name, email, company, message } = data, emailToFrom = {
    to: "malika.nallaperuma@gmail.com",
    from: "hey@islandcommerce.co"
  }, content = {
    to: emailToFrom.to,
    from: emailToFrom.from,
    replyTo: email,
    subject: `New Message From: ${name}`,
    text: message,
    html: `<p><strong>Name: ${name}<br>
          Email: ${email}</strong>
          <br><br>
          <strong>Message</strong>: ${message}
          </p>`
  }, replyTo = {
    to: email,
    from: emailToFrom.from,
    templateId: "d-1820d2871f1642d78bf47ae1df51b7c7",
    dynamic_template_data: {
      subject: "Thank you for contacting us",
      name
    }
  };
  try {
    if (company)
      throw new Error("Bot detected, company name not allowed.");
    await import_mail.default.send(content), await import_mail.default.send(replyTo);
  } catch (error) {
    throw new Error(error);
  }
};

// app/components/input.tsx
var import_react14 = require("react"), import_clsx3 = __toESM(require("clsx")), import_framer_motion10 = require("framer-motion"), import_vsc = require("react-icons/vsc"), import_remix_validated_form = require("remix-validated-form"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Input = (0, import_react14.forwardRef)(
  ({ name, label, placeholder, required = !1 }, ref) => {
    let { error, getInputProps, touched } = (0, import_remix_validated_form.useField)(name);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion10.motion.label, {
          htmlFor: name,
          variants: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { ease: "circOut", duration: 0.5 } }
          },
          className: (0, import_clsx3.default)(
            "relative inline-flex flex-col text-xl font-light text-dark-400 dark:text-dark-200",
            required && "after:absolute after:-right-4 after:text-dark-300 after:content-['*']"
          ),
          children: label
        }, void 0, !1, {
          fileName: "app/components/input.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion10.motion.input, {
          variants: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { ease: "circOut", duration: 0.5 } }
          },
          ref,
          ...getInputProps({ id: name, placeholder }),
          className: (0, import_clsx3.default)(
            "focus-within:border-primary-brand mt-2 w-full appearance-none rounded-none border-b-[1px] border-dark-200 bg-transparent py-4 px-3 text-2xl font-light text-dark-400 outline-none placeholder:text-dark-200 dark:border-dark-600 dark:text-dark-200 dark:placeholder:text-dark-500",
            error && "border-red-500 dark:border-red-400",
            touched && !error && "border-green-500 dark:border-green-400"
          )
        }, void 0, !1, {
          fileName: "app/components/input.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "mt-4 block font-light text-red-500 dark:text-red-400",
          children: error
        }, void 0, !1, {
          fileName: "app/components/input.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/input.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this);
  }
);
Input.displayName = "Input";
var Textarea = ({ name, label, placeholder, required }) => {
  let { error, getInputProps, touched } = (0, import_remix_validated_form.useField)(name);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion10.motion.label, {
        variants: {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { ease: "circOut", duration: 0.5 } }
        },
        htmlFor: name,
        className: (0, import_clsx3.default)(
          "relative inline-flex flex-col text-xl font-light text-dark-400 dark:text-dark-200 ",
          required && "after:absolute after:-right-4 after:text-dark-300 after:content-['*']"
        ),
        children: label
      }, void 0, !1, {
        fileName: "app/components/input.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion10.motion.textarea, {
        variants: {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { ease: "circOut", duration: 0.5 } }
        },
        ...getInputProps({ id: name, placeholder }),
        className: (0, import_clsx3.default)(
          "focus-within:border-primary-brand mt-2 h-40 w-full appearance-none rounded-none border-b-[1px] border-dark-200 bg-transparent py-4 px-3 text-2xl font-light text-dark-400 outline-none placeholder:text-dark-200 dark:border-dark-600 dark:text-dark-200 dark:placeholder:text-dark-500",
          error && "border-red-500 dark:border-red-400",
          touched && !error && "border-green-500 dark:border-green-400"
        )
      }, void 0, !1, {
        fileName: "app/components/input.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this),
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "mt-4 block font-light text-red-500 dark:text-red-400",
        children: error
      }, void 0, !1, {
        fileName: "app/components/input.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/input.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
};
Textarea.displayName = "Textarea";
var SubmitButton = ({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion10.motion.div, {
  variants: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { ease: "circOut", duration: 0.5 } }
  },
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
    type: "submit",
    className: "group flex items-center gap-x-2 text-3xl font-light text-dark-400 transition duration-300 ease-in-out hover:text-dark-500 dark:text-dark-200",
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_vsc.VscArrowRight, {
        size: 36,
        className: "mb-1 block -rotate-45 text-dark-200 transition duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-dark-300 dark:text-dark-400"
      }, void 0, !1, {
        fileName: "app/components/input.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/input.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this)
}, void 0, !1, {
  fileName: "app/components/input.tsx",
  lineNumber: 94,
  columnNumber: 3
}, this);

// app/templates/about/about.tsx
var import_framer_motion12 = require("framer-motion"), import_si = require("react-icons/si");

// app/components/section-header.tsx
var import_react15 = require("react"), import_framer_motion11 = require("framer-motion"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), lineVariants = {
  hidden: {
    originX: 0,
    scaleX: 0
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.75,
      ease: "circOut"
    }
  }
}, headerVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "circOut"
    }
  }
}, parentVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.25
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren"
    }
  }
}, SectionHeader = (0, import_react15.forwardRef)(
  ({ heading, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion11.motion.header, {
    ref,
    ...props,
    className: "flex items-center",
    variants: parentVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: !0 },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion11.motion.h1, {
        variants: headerVariants,
        className: "w-32 text-lg uppercase tracking-wider pr-2 text-dark-200 dark:text-dark-400",
        children: heading
      }, void 0, !1, {
        fileName: "app/components/section-header.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion11.motion.div, {
        variants: lineVariants,
        className: "h-[1px] flex-1 bg-dark-100 transition-colors duration-150 ease-in-out dark:bg-dark-700"
      }, void 0, !1, {
        fileName: "app/components/section-header.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/section-header.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this)
);
SectionHeader.displayName = "SectionHeader";

// app/components/section-shell.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SectionShell = ({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
  className: "container pb-40 md:pb-64",
  ...props,
  children
}, void 0, !1, {
  fileName: "app/components/section-shell.tsx",
  lineNumber: 6,
  columnNumber: 3
}, this);

// app/templates/about/about.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), About = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionShell, {
  id: "about",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
      heading: "About"
    }, void 0, !1, {
      fileName: "app/templates/about/about.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion12.motion.section, {
      variants: {
        visible: { transition: { staggerChildren: 0.25 } }
      },
      initial: "hidden",
      whileInView: "visible",
      exit: "hidden",
      viewport: { once: !0 },
      className: "relative mt-16 grid grid-cols-12 gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
        as: "p",
        className: "col-span-full text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8",
        text: "Get a brief look at who we are and what we do, if you would like to know more about us and our company"
      }, void 0, !1, {
        fileName: "app/templates/about/about.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/templates/about/about.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
      className: "relative mt-24 flex grid-cols-12 flex-col-reverse gap-y-10 md:ml-24 md:grid md:gap-x-8 lg:gap-x-16",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: "col-span-full md:col-span-6 xl:col-span-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion12.motion.article, {
              variants: {
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } }
              },
              initial: "hidden",
              whileInView: "visible",
              exit: "hidden",
              viewport: { once: !0 },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
                  as: "h3",
                  text: "Who are we",
                  className: "text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400"
                }, void 0, !1, {
                  fileName: "app/templates/about/about.tsx",
                  lineNumber: 65,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
                  as: "p",
                  text: "Island Commerce is owned by two technophiles who has technical and digital experience which spans for almost two decades",
                  className: "mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
                }, void 0, !1, {
                  fileName: "app/templates/about/about.tsx",
                  lineNumber: 70,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
                  as: "p",
                  text: "We get a buzz out of unlocking the power of emerging tech and deep diving into it",
                  className: "mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
                }, void 0, !1, {
                  fileName: "app/templates/about/about.tsx",
                  lineNumber: 75,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
                  as: "p",
                  text: "We at Island Commerce put together a bunch of passionate minds to transform your visions into a reality, imparting an awesome experience for your users. From headless commerce solutions, custom store fronts, covering various industries and app development, the solutions we engineer accelerate efficiency and fuel growth for our clients",
                  className: "mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
                }, void 0, !1, {
                  fileName: "app/templates/about/about.tsx",
                  lineNumber: 80,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
                  as: "p",
                  text: "Our team is passionate about helping your business reach its technological goals and converting your innovative ideas into digital realities. When you choose Island Commerce, you will receive the best, personalized services tailored to your needs and goals",
                  className: "mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
                }, void 0, !1, {
                  fileName: "app/templates/about/about.tsx",
                  lineNumber: 85,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/templates/about/about.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion12.motion.section, {
              variants: {
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } }
              },
              initial: "hidden",
              whileInView: "visible",
              exit: "hidden",
              viewport: { once: !0 },
              className: "col-span-full mt-14 overflow-hidden md:col-span-6 xl:col-span-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
                  as: "h3",
                  text: "Tech we enjoy",
                  className: "text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400"
                }, void 0, !1, {
                  fileName: "app/templates/about/about.tsx",
                  lineNumber: 108,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion12.motion.div, {
                  variants: {
                    hidden: { y: 50, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.5, ease: "circOut" }
                    }
                  },
                  className: "mt-6 flex flex-wrap gap-6 text-dark-300",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_si.SiFigma, {
                      size: 28,
                      title: "Figma"
                    }, void 0, !1, {
                      fileName: "app/templates/about/about.tsx",
                      lineNumber: 124,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_si.SiReact, {
                      size: 28,
                      title: "React.js"
                    }, void 0, !1, {
                      fileName: "app/templates/about/about.tsx",
                      lineNumber: 125,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_si.SiNextdotjs, {
                      size: 28,
                      title: "Next.js"
                    }, void 0, !1, {
                      fileName: "app/templates/about/about.tsx",
                      lineNumber: 126,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_si.SiTypescript, {
                      size: 28,
                      title: "TypeScript"
                    }, void 0, !1, {
                      fileName: "app/templates/about/about.tsx",
                      lineNumber: 127,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_si.SiTailwindcss, {
                      size: 28,
                      title: "TailwindCSS"
                    }, void 0, !1, {
                      fileName: "app/templates/about/about.tsx",
                      lineNumber: 128,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_si.SiNodedotjs, {
                      size: 28,
                      title: "Nodejs"
                    }, void 0, !1, {
                      fileName: "app/templates/about/about.tsx",
                      lineNumber: 129,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_si.SiGraphql, {
                      size: 28,
                      title: "Graphql"
                    }, void 0, !1, {
                      fileName: "app/templates/about/about.tsx",
                      lineNumber: 130,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_si.SiNestjs, {
                      size: 28,
                      title: "Nestjs"
                    }, void 0, !1, {
                      fileName: "app/templates/about/about.tsx",
                      lineNumber: 131,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_si.SiPrisma, {
                      size: 28,
                      title: "Prisma"
                    }, void 0, !1, {
                      fileName: "app/templates/about/about.tsx",
                      lineNumber: 132,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_si.SiPostgresql, {
                      size: 28,
                      title: "Postgresql"
                    }, void 0, !1, {
                      fileName: "app/templates/about/about.tsx",
                      lineNumber: 133,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/templates/about/about.tsx",
                  lineNumber: 113,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/templates/about/about.tsx",
              lineNumber: 98,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/templates/about/about.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: "col-span-full md:col-span-6 xl:col-span-4",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion12.motion.figure, {
            variants: {
              hidden: { scaleX: 0, originX: 0 },
              visible: {
                scaleX: 1,
                opacity: 1,
                transition: {
                  duration: 0.75,
                  ease: [0.9, 0.1, 0.3, 0.96],
                  when: "beforeChildren",
                  delayChildren: 0.15,
                  delay: 0.25
                }
              }
            },
            initial: "hidden",
            whileInView: "visible",
            exit: "hidden",
            viewport: { once: !0 },
            className: "mb-6 w-2/3 self-start md:col-span-full md:col-start-7 md:mb-0 mt-24 md:w-full xl:col-start-9",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion12.motion.img, {
              variants: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] }
                }
              },
              src: "/assets/team_collaboration.svg",
              alt: "",
              height: 400,
              width: 400
            }, void 0, !1, {
              fileName: "app/templates/about/about.tsx",
              lineNumber: 160,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/templates/about/about.tsx",
            lineNumber: 138,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/templates/about/about.tsx",
          lineNumber: 137,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/templates/about/about.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/templates/about/about.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this);

// app/templates/contact/contact.tsx
var import_framer_motion13 = require("framer-motion");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Contact = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionShell, {
  id: "contact",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
      heading: "Contact"
    }, void 0, !1, {
      fileName: "app/templates/contact/contact.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion13.motion.section, {
      variants: {
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } }
      },
      initial: "hidden",
      whileInView: "visible",
      exit: "hidden",
      viewport: { once: !0 },
      className: "mt-16 flex flex-1 flex-col gap-x-16 gap-y-24 md:ml-24 md:flex-row",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "md:w-1/2",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion13.motion.p, {
            variants: {
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { ease: "circOut", duration: 0.5 } }
            },
            className: "col-span-full text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8",
            children: [
              "Do not hesitate to contact us through the form here or by direct email on",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "mailto:malika.nallaperuma@gmail.com",
                className: "underline decoration-dark-200 underline-offset-[6px] hover:decoration-dark-300 dark:decoration-dark-500 dark:hover:decoration-dark-400",
                children: "hey@islandcommerce.co"
              }, void 0, !1, {
                fileName: "app/templates/contact/contact.tsx",
                lineNumber: 35,
                columnNumber: 11
              }, this),
              " ",
              "regardless of the subject."
            ]
          }, void 0, !0, {
            fileName: "app/templates/contact/contact.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/templates/contact/contact.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion13.motion.div, {
          variants: {
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } }
          },
          initial: "hidden",
          whileInView: "visible",
          exit: "hidden",
          viewport: { once: !0 },
          className: "md:w-1/2",
          children
        }, void 0, !1, {
          fileName: "app/templates/contact/contact.tsx",
          lineNumber: 44,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/templates/contact/contact.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/templates/contact/contact.tsx",
  lineNumber: 13,
  columnNumber: 3
}, this);

// app/templates/hero/hero.tsx
var import_framer_motion16 = require("framer-motion");

// app/components/hero-illustration.tsx
var import_framer_motion14 = require("framer-motion");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), bigWidgetVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0
  }
}, smallWidgetVariants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    opacity: 1,
    x: 0
  }
}, imageMap = {
  dark: {
    base: { webp: "/assets/hero-base-dark.webp", png: "/assets/hero-base-dark.png" },
    notification: {
      webp: "/assets/hero-notif-widget-dark.webp",
      png: "/assets/hero-notif-widget-dark.png"
    },
    heart: {
      webp: "/assets/hero-heart-widget-dark.webp",
      png: "/assets/hero-heart-widget-dark.png"
    },
    bigWidget: {
      webp: "/assets/hero-big-widget-dark.webp",
      png: "/assets/hero-big-widget-dark.png"
    }
  },
  light: {
    base: { webp: "/assets/hero-base-light.webp", png: "/assets/hero-base-light.png" },
    notification: {
      webp: "/assets/hero-notif-widget-light.webp",
      png: "/assets/hero-notif-widget-light.png"
    },
    heart: {
      webp: "/assets/hero-heart-widget-light.webp",
      png: "/assets/hero-heart-widget-light.png"
    },
    bigWidget: {
      webp: "/assets/hero-big-widget-light.webp",
      png: "/assets/hero-big-widget-light.png"
    }
  }
}, HeroIllustration = () => {
  let { theme } = useTheme(), image = imageMap[theme ?? "light"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "z-[-10] absolute scale-[0.6] -bottom-[38rem] right-[50%] translate-x-[50%] hidden md:block md:translate-x-0 md:scale-[0.8] md:bottom-auto md:top-52 md:-right-40 lg:-right-36 lg:top-16 xl:-top-24 xl:-right-20 2xl:-right-16 lg:scale-100",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("picture", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", {
            type: "image/webp",
            srcSet: image.base.webp
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 70,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", {
            type: "image/png",
            srcSet: image.base.png
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion14.motion.img, {
            variants: {
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            },
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            transition: {
              duration: 0.75,
              ease: [0.455, 0.03, 0.515, 0.955],
              delay: 1
            },
            src: image.base.png,
            loading: "lazy",
            width: 693,
            height: 706,
            alt: "Hero illustration",
            className: "object-cover w-full min-w-[693px] h-full min-h-[706px]"
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/hero-illustration.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("picture", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", {
            type: "image/webp",
            srcSet: image.notification.webp
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", {
            type: "image/png",
            srcSet: image.notification.png
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 95,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion14.motion.img, {
            variants: smallWidgetVariants,
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            transition: {
              duration: 0.75,
              ease: [0.455, 0.03, 0.515, 0.955],
              delay: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 8
            },
            src: image.notification.png,
            loading: "lazy",
            height: 114,
            width: 252,
            alt: "Hero notification widget",
            className: "absolute right-96 top-24"
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 96,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/hero-illustration.tsx",
        lineNumber: 93,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("picture", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", {
            type: "image/webp",
            srcSet: image.bigWidget.webp
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 118,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", {
            type: "image/png",
            srcSet: image.bigWidget.png
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 119,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion14.motion.img, {
            variants: bigWidgetVariants,
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            transition: {
              duration: 0.75,
              ease: [0.455, 0.03, 0.515, 0.955],
              delay: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 8
            },
            src: image.bigWidget.png,
            loading: "lazy",
            height: 186,
            width: 205,
            alt: "Hero big widget",
            className: "absolute left-[5rem] top-[19rem]"
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 120,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/hero-illustration.tsx",
        lineNumber: 117,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("picture", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", {
            type: "image/webp",
            srcSet: image.bigWidget.webp
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 142,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", {
            type: "image/png",
            srcSet: image.bigWidget.png
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 143,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion14.motion.img, {
            variants: bigWidgetVariants,
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            transition: {
              duration: 0.75,
              ease: [0.455, 0.03, 0.515, 0.955],
              delay: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 8
            },
            src: image.bigWidget.png,
            loading: "lazy",
            height: 186,
            width: 205,
            alt: "Hero big widget",
            className: "absolute right-[8rem] top-[8.25rem]"
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 144,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/hero-illustration.tsx",
        lineNumber: 141,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("picture", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", {
            type: "image/webp",
            srcSet: image.heart.webp
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 166,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", {
            type: "image/png",
            srcSet: image.heart.png
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 167,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion14.motion.img, {
            variants: smallWidgetVariants,
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            transition: {
              duration: 0.75,
              ease: [0.455, 0.03, 0.515, 0.955],
              delay: 14,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 8
            },
            src: image.heart.png,
            loading: "lazy",
            height: 113,
            width: 255,
            alt: "Hero like widget",
            className: "absolute right-[5.5rem] top-[24.75rem]"
          }, void 0, !1, {
            fileName: "app/components/hero-illustration.tsx",
            lineNumber: 168,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/hero-illustration.tsx",
        lineNumber: 165,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/hero-illustration.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
};

// app/components/link-button.tsx
var import_react16 = require("react"), import_remix8 = __toESM(require_dist()), import_clsx4 = __toESM(require("clsx")), import_framer_motion15 = require("framer-motion"), import_vsc2 = require("react-icons/vsc"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LinkButton = (0, import_react16.forwardRef)(
  ({ children = "Button", icon: Icon, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix8.Link, {
    ref,
    ...rest,
    className: (0, import_clsx4.default)(
      "group flex gap-3 text-3xl font-light text-dark-400 transition duration-300 ease-in-out hover:text-dark-500 dark:text-dark-200",
      rest.className
    ),
    children: [
      children,
      Icon ?? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_vsc2.VscArrowRight, {
        size: 36,
        className: "rotate-45 text-dark-200 transition duration-300 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 dark:text-dark-400"
      }, void 0, !1, {
        fileName: "app/components/link-button.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/link-button.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this)
), MotionLinkButton = (0, import_react16.forwardRef)(
  ({ children, motionProps, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion15.motion.div, {
    ...motionProps,
    ref,
    className: rest.className,
    style: rest.style,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkButton, {
      ...rest,
      children
    }, void 0, !1, {
      fileName: "app/components/link-button.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/link-button.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this)
);

// app/templates/hero/hero.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Hero = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
  id: "intro",
  className: "pt-40 pb-40 shadow-[inset_0_-40px_15px_-10px_#ededed] transition duration-300 ease-in-out dark:shadow-[inset_0_-40px_15px_-10px_#171717] md:bg-auto lg:pt-48 lg:pb-64 xl:py-40 overflow-hidden",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion16.motion.section, {
    variants: {
      hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
      visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } }
    },
    initial: "hidden",
    whileInView: "visible",
    exit: "hidden",
    viewport: { once: !0 },
    className: "container relative",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion16.AnimatePresence, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
          className: "lg:max-w-[60%]",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedLetters, {
              as: "h1",
              text: "We design and develop ecommerce apps.",
              className: "text-5xl font-medium md:text-6xl lg:text-7xl",
              textVariants: {
                hidden: { transition: { staggerChildren: 0.015 } },
                visible: { transition: { staggerChildren: 0.015 } }
              },
              letterVariants: {
                hidden: { opacity: 0, y: 75 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }
                }
              }
            }, void 0, !1, {
              fileName: "app/templates/hero/hero.tsx",
              lineNumber: 27,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
              as: "p",
              className: "mt-10 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200",
              text: "We identify your goals together, then use our expertise to find that sweet spot of realistic and impactful."
            }, void 0, !1, {
              fileName: "app/templates/hero/hero.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/templates/hero/hero.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/templates/hero/hero.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MotionLinkButton, {
        to: "#services",
        motionProps: {
          variants: {
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { ease: "circOut", duration: 0.5 }
            }
          }
        },
        className: "mt-8 inline-block md:mt-10",
        children: "Explore what we do"
      }, void 0, !1, {
        fileName: "app/templates/hero/hero.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeroIllustration, {}, void 0, !1, {
        fileName: "app/templates/hero/hero.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/templates/hero/hero.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/templates/hero/hero.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this);

// app/templates/projects/projects.tsx
var import_framer_motion18 = require("framer-motion");

// app/components/project-item.tsx
var import_react17 = require("react"), import_clsx5 = __toESM(require("clsx")), import_framer_motion17 = require("framer-motion"), import_useMedia2 = __toESM(require("react-use/lib/useMedia"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ProjectItem = (0, import_react17.memo)(({ project, ...props }) => {
  let { id, name, area, link, image, imageAlt, color = "" } = project, isPhone = (0, import_useMedia2.default)("(max-width: 768px)"), phoneMotionProps = (0, import_react17.useMemo)(
    () => ({
      variants: { visible: { transition: { staggerChildren: 0.35 } } },
      viewport: { once: !0 },
      ...isPhone ? { initial: "hidden", whileInView: "visible", exit: "hidden" } : {}
    }),
    []
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    className: (0, import_clsx5.default)(
      "col-span-12 flex flex-col md:col-span-6 xl:col-span-4",
      props.className && props.className
    ),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion17.motion.article, {
      ...phoneMotionProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion17.motion.figure, {
          variants: {
            hidden: { scaleX: 0, originX: 0 },
            visible: {
              scaleX: 1,
              originX: [0, 0, 0, 0, 0, 0, 0.5],
              opacity: 1,
              transition: {
                duration: 0.75,
                ease: [0.9, 0.1, 0.3, 0.96],
                when: "beforeChildren",
                delayChildren: 0.15
              }
            }
          },
          whileHover: { scale: 1.05, transition: { duration: 0.5, ease: "circOut" } },
          whileTap: { scale: 0.95 },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion17.motion.img, {
            variants: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] }
              }
            },
            src: image,
            alt: imageAlt,
            className: "object-cover"
          }, void 0, !1, {
            fileName: "app/components/project-item.tsx",
            lineNumber: 63,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/project-item.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
          text: "",
          className: "mt-6 text-sm font-light text-dark-300 dark:text-dark-400"
        }, void 0, !1, {
          fileName: "app/components/project-item.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
          as: "h5",
          text: name,
          className: "mt-3 text-3xl text-dark-400 dark:text-dark-200"
        }, void 0, !1, {
          fileName: "app/components/project-item.tsx",
          lineNumber: 80,
          columnNumber: 9
        }, this)
      ]
    }, id, !0, {
      fileName: "app/components/project-item.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/project-item.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
});
ProjectItem.displayName = "ProjectItem";

// projects.ts
var projects = [
  {
    id: 0,
    name: "Custom store fronts",
    area: "Design and Development",
    image: "/assets/store_front.svg",
    imageAlt: "custom store fronts",
    link: "/project/tsks",
    color: "#1D1D26"
  },
  {
    id: 1,
    name: "Headless commerce solutions",
    area: "Design and Development",
    image: "/assets/headless_solutions.svg",
    imageAlt: "headless commerce solutions",
    link: "/service/headless-commerce"
  },
  {
    id: 2,
    name: "Solutions for multiple industries",
    area: "Design",
    image: "/assets/multiple_industries.svg",
    imageAlt: "solutions for multiple industries",
    link: "/project/100-days-of-ui",
    color: "#E3E3E3"
  }
];

// app/templates/projects/projects.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Projects = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionShell, {
  id: "services",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
      heading: "Services"
    }, void 0, !1, {
      fileName: "app/templates/projects/projects.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion18.motion.section, {
      variants: {
        visible: { transition: { staggerChildren: 0.25 } }
      },
      initial: "hidden",
      whileInView: "visible",
      exit: "hidden",
      viewport: { once: !0 },
      className: "relative mt-16 grid grid-cols-12 gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedText, {
        as: "p",
        className: "col-span-full text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8",
        text: "We craft holistic, people-friendly commerce experiences to help your business grow"
      }, void 0, !1, {
        fileName: "app/templates/projects/projects.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/templates/projects/projects.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion18.motion.div, {
      variants: {
        visible: { transition: { staggerChildren: 0.25 } }
      },
      initial: "hidden",
      whileInView: "visible",
      exit: "hidden",
      viewport: { once: !0 },
      className: "mt-24 flex",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion18.motion.section, {
        variants: {
          visible: { transition: { staggerChildren: 0.25 } }
        },
        initial: "hidden",
        whileInView: "visible",
        exit: "hidden",
        viewport: { once: !0 },
        className: "relative grid flex-1 grid-cols-12 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16",
        children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectItem, {
          project
        }, project.id, !1, {
          fileName: "app/templates/projects/projects.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this))
      }, void 0, !1, {
        fileName: "app/templates/projects/projects.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/templates/projects/projects.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/templates/projects/projects.tsx",
  lineNumber: 14,
  columnNumber: 5
}, this);

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), validator = (0, import_with_zod.withZod)(
  import_zod.z.object({
    name: import_zod.z.string().nonempty("Please enter your name"),
    email: import_zod.z.string().nonempty("I need to know where to reach you!").email("Uh oh, that doesn't look like an email address..."),
    company: import_zod.z.string(),
    message: import_zod.z.string().nonempty("You need to send me a message!")
  })
), loader7 = () => ({
  defaultValues: {
    name: "",
    email: "",
    company: "",
    message: ""
  }
}), action2 = async ({ request }) => {
  let fieldValues = validator.validate(await request.formData());
  if (fieldValues.error)
    return (0, import_remix_validated_form2.validationError)(fieldValues.error);
  let { ...fields } = fieldValues.data;
  try {
    return await sendEmail(fieldValues.data), (0, import_remix9.json)({
      fields,
      status: "success",
      errors: {}
    });
  } catch (error) {
    return (0, import_remix9.json)({
      fields,
      status: "error",
      errors: {
        sendError: getErrorMessage(error) ?? `Sorry ${fields.name}, something went wrong. Please try again. \u{1F622}`
      }
    });
  }
}, meta7 = () => ({
  title: "Island Commerce",
  description: "I'm a 25 year old self-taught designer & frontend developer, focused on user experience, accessibility and modern web technologies."
});
function Index() {
  var _a;
  let { defaultValues } = (0, import_remix9.useLoaderData)(), actionData = (0, import_remix9.useActionData)(), transition = (0, import_remix9.useTransition)(), formRef = (0, import_react18.useRef)(null), nameInputRef = (0, import_react18.useRef)(null), emailSent = transition.state === "loading" && transition.type === "actionReload";
  return (0, import_react18.useEffect)(() => {
    var _a2, _b;
    emailSent && ((_a2 = formRef.current) == null || _a2.reset(), (_b = nameInputRef.current) == null || _b.focus());
  }, [emailSent]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 123,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Projects, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 124,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(About, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 125,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Contact, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_validated_form2.ValidatedForm, {
          formRef,
          validator,
          replace: !0,
          method: "post",
          defaultValues,
          resetAfterSubmit: !0,
          className: "space-y-10",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
              ref: nameInputRef,
              name: "name",
              label: "What's your name?",
              placeholder: "John Doe",
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 136,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
              name: "email",
              label: "Where can I reach you?",
              placeholder: "johndoe@xyz.com",
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 143,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              htmlFor: "company",
              className: "hidden",
              children: [
                "What company do you work for?",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "text",
                  id: "company",
                  name: "company",
                  placeholder: "No need to give me this information"
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 152,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 150,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
              name: "message",
              label: "What's your message?",
              placeholder: "Hi, would love to work with your company",
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 159,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubmitButton, {
              children: transition.state === "submitting" ? "Sending..." : "Send it to us"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 165,
              columnNumber: 11
            }, this),
            (actionData == null ? void 0 : actionData.status) === "success" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "text-green-500",
              children: [
                "Thank you for reaching out, ",
                actionData.fields.name,
                ". we will get back to you asap!"
              ]
            }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 170,
              columnNumber: 13
            }, this),
            (actionData == null ? void 0 : actionData.status) === "error" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "text-red-500",
              children: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.sendError
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 175,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 127,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 126,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 122,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "b7c67f8f", entry: { module: "/build/entry.client-FSW6VEAV.js", imports: ["/build/_shared/chunk-QM6342XS.js", "/build/_shared/chunk-CZALT7KZ.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EGN25K3F.js", imports: ["/build/_shared/chunk-JEOXN7TR.js", "/build/_shared/chunk-W7JTXIBI.js", "/build/_shared/chunk-TDY5T25U.js", "/build/_shared/chunk-E2J4K2K6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/[robots.txt]-XZ5KURTG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[sitemap.xml]": { id: "routes/[sitemap.xml]", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/[sitemap.xml]-5F4JOHYP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/action/toggle-theme": { id: "routes/action/toggle-theme", parentId: "root", path: "action/toggle-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/action/toggle-theme-L66ENDN3.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-DJHUWGQA.js", imports: ["/build/_shared/chunk-KI4HR2ZI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/project/100-days-of-ui": { id: "routes/project/100-days-of-ui", parentId: "root", path: "project/100-days-of-ui", index: void 0, caseSensitive: void 0, module: "/build/routes/project/100-days-of-ui-PJAOY4XJ.js", imports: ["/build/_shared/chunk-UDSKB5KG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/project/miinto": { id: "routes/project/miinto", parentId: "root", path: "project/miinto", index: void 0, caseSensitive: void 0, module: "/build/routes/project/miinto-ESLYPYQZ.js", imports: ["/build/_shared/chunk-UDSKB5KG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/project/tsks": { id: "routes/project/tsks", parentId: "root", path: "project/tsks", index: void 0, caseSensitive: void 0, module: "/build/routes/project/tsks-JVBHFWJO.js", imports: ["/build/_shared/chunk-UDSKB5KG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/service/headless-commerce": { id: "routes/service/headless-commerce", parentId: "root", path: "service/headless-commerce", index: void 0, caseSensitive: void 0, module: "/build/routes/service/headless-commerce-TRF5TUZZ.js", imports: ["/build/_shared/chunk-UDSKB5KG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-2OP4JKZT.js", imports: ["/build/_shared/chunk-2HUBEZBF.js", "/build/_shared/chunk-KI4HR2ZI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/side-projects": { id: "routes/side-projects", parentId: "root", path: "side-projects", index: void 0, caseSensitive: void 0, module: "/build/routes/side-projects-VI5NJT3L.js", imports: ["/build/_shared/chunk-2HUBEZBF.js", "/build/_shared/chunk-KI4HR2ZI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-B7C67F8F.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/service/headless-commerce": {
    id: "routes/service/headless-commerce",
    parentId: "root",
    path: "service/headless-commerce",
    index: void 0,
    caseSensitive: void 0,
    module: headless_commerce_exports
  },
  "routes/project/100-days-of-ui": {
    id: "routes/project/100-days-of-ui",
    parentId: "root",
    path: "project/100-days-of-ui",
    index: void 0,
    caseSensitive: void 0,
    module: days_of_ui_exports
  },
  "routes/action/toggle-theme": {
    id: "routes/action/toggle-theme",
    parentId: "root",
    path: "action/toggle-theme",
    index: void 0,
    caseSensitive: void 0,
    module: toggle_theme_exports
  },
  "routes/project/miinto": {
    id: "routes/project/miinto",
    parentId: "root",
    path: "project/miinto",
    index: void 0,
    caseSensitive: void 0,
    module: miinto_exports
  },
  "routes/[sitemap.xml]": {
    id: "routes/[sitemap.xml]",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/side-projects": {
    id: "routes/side-projects",
    parentId: "root",
    path: "side-projects",
    index: void 0,
    caseSensitive: void 0,
    module: side_projects_exports
  },
  "routes/[robots.txt]": {
    id: "routes/[robots.txt]",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/project/tsks": {
    id: "routes/project/tsks",
    parentId: "root",
    path: "project/tsks",
    index: void 0,
    caseSensitive: void 0,
    module: tsks_exports
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
/**
 * @remix-run/node v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
