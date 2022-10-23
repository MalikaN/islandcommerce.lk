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
  viewBox: "0 0 375 74.999997",
  height: "60",
  preserveAspectRatio: "xMidYMid meet",
  version: "1.0",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {}, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(1.250612, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 12.15625 -30.546875 L 12.15625 -4.21875 L 14.703125 -4.21875 L 14.703125 0 L 4.46875 0 L 4.46875 -4.21875 L 7.0625 -4.21875 L 7.0625 -30.546875 L 4.46875 -30.546875 L 4.46875 -34.765625 L 14.703125 -34.765625 L 14.703125 -30.546875 Z M 12.15625 -30.546875 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 36,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 33,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(20.518271, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 13.6875 -4.90625 C 13.976562 -5.164062 14.238281 -5.457031 14.46875 -5.78125 C 14.695312 -6.113281 14.8125 -6.488281 14.8125 -6.90625 C 14.8125 -7.4375 14.625 -7.878906 14.25 -8.234375 C 13.875 -8.597656 13.414062 -8.898438 12.875 -9.140625 C 12.332031 -9.390625 11.765625 -9.578125 11.171875 -9.703125 C 10.585938 -9.835938 10.097656 -9.953125 9.703125 -10.046875 C 8.628906 -10.304688 7.617188 -10.625 6.671875 -11 C 5.722656 -11.382812 4.894531 -11.84375 4.1875 -12.375 C 3.488281 -12.914062 2.929688 -13.550781 2.515625 -14.28125 C 2.109375 -15.019531 1.90625 -15.898438 1.90625 -16.921875 C 1.90625 -17.867188 2.132812 -18.757812 2.59375 -19.59375 C 3.050781 -20.425781 3.664062 -21.160156 4.4375 -21.796875 C 5.207031 -22.429688 6.101562 -22.9375 7.125 -23.3125 C 8.15625 -23.6875 9.242188 -23.875 10.390625 -23.875 C 11.410156 -23.875 12.375 -23.726562 13.28125 -23.4375 C 14.195312 -23.144531 15.019531 -22.742188 15.75 -22.234375 C 16.488281 -21.722656 17.113281 -21.109375 17.625 -20.390625 C 18.132812 -19.671875 18.46875 -18.875 18.625 -18 L 14.359375 -16.96875 C 14.171875 -17.75 13.75 -18.398438 13.09375 -18.921875 C 12.4375 -19.441406 11.535156 -19.703125 10.390625 -19.703125 C 10.003906 -19.703125 9.597656 -19.644531 9.171875 -19.53125 C 8.742188 -19.425781 8.347656 -19.257812 7.984375 -19.03125 C 7.628906 -18.800781 7.328125 -18.519531 7.078125 -18.1875 C 6.835938 -17.863281 6.71875 -17.488281 6.71875 -17.0625 C 6.71875 -16.601562 6.851562 -16.207031 7.125 -15.875 C 7.40625 -15.550781 7.742188 -15.285156 8.140625 -15.078125 C 8.535156 -14.867188 8.957031 -14.695312 9.40625 -14.5625 C 9.863281 -14.425781 10.289062 -14.3125 10.6875 -14.21875 C 12.414062 -13.789062 13.851562 -13.332031 15 -12.84375 C 16.144531 -12.351562 17.0625 -11.8125 17.75 -11.21875 C 18.4375 -10.632812 18.914062 -9.988281 19.1875 -9.28125 C 19.46875 -8.582031 19.609375 -7.789062 19.609375 -6.90625 C 19.609375 -5.863281 19.367188 -4.882812 18.890625 -3.96875 C 18.421875 -3.050781 17.769531 -2.257812 16.9375 -1.59375 C 16.101562 -0.925781 15.101562 -0.398438 13.9375 -0.015625 C 12.78125 0.359375 11.535156 0.546875 10.203125 0.546875 C 8.171875 0.546875 6.363281 0.046875 4.78125 -0.953125 C 3.195312 -1.953125 2.125 -3.285156 1.5625 -4.953125 L 5.59375 -6.765625 C 6.113281 -5.617188 6.78125 -4.84375 7.59375 -4.4375 C 8.414062 -4.03125 9.347656 -3.828125 10.390625 -3.828125 C 11.703125 -3.828125 12.800781 -4.1875 13.6875 -4.90625 Z M 13.6875 -4.90625 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 40,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(41.59993, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 7.75 -35.796875 L 7.75 0 L 2.984375 0 L 2.984375 -35.796875 Z M 7.75 -35.796875 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 50,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(51.993684, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 25 -23.484375 L 25 0 L 20.984375 0 L 20.25 -2.703125 C 19.4375 -1.617188 18.390625 -0.796875 17.109375 -0.234375 C 15.835938 0.316406 14.546875 0.59375 13.234375 0.59375 C 11.597656 0.59375 10.066406 0.273438 8.640625 -0.359375 C 7.222656 -1.003906 5.984375 -1.878906 4.921875 -2.984375 C 3.859375 -4.097656 3.015625 -5.40625 2.390625 -6.90625 C 1.773438 -8.414062 1.46875 -10.019531 1.46875 -11.71875 C 1.46875 -13.414062 1.773438 -15.015625 2.390625 -16.515625 C 3.015625 -18.023438 3.859375 -19.332031 4.921875 -20.4375 C 5.984375 -21.550781 7.222656 -22.425781 8.640625 -23.0625 C 10.066406 -23.707031 11.597656 -24.03125 13.234375 -24.03125 C 14.546875 -24.03125 15.804688 -23.773438 17.015625 -23.265625 C 18.222656 -22.753906 19.300781 -21.960938 20.25 -20.890625 L 20.984375 -23.484375 Z M 13.234375 -3.625 C 14.179688 -3.625 15.078125 -3.835938 15.921875 -4.265625 C 16.773438 -4.691406 17.515625 -5.269531 18.140625 -6 C 18.765625 -6.738281 19.253906 -7.597656 19.609375 -8.578125 C 19.972656 -9.554688 20.15625 -10.601562 20.15625 -11.71875 C 20.15625 -12.832031 19.972656 -13.878906 19.609375 -14.859375 C 19.253906 -15.835938 18.765625 -16.691406 18.140625 -17.421875 C 17.515625 -18.160156 16.773438 -18.742188 15.921875 -19.171875 C 15.078125 -19.597656 14.179688 -19.8125 13.234375 -19.8125 C 12.285156 -19.8125 11.382812 -19.597656 10.53125 -19.171875 C 9.6875 -18.742188 8.953125 -18.160156 8.328125 -17.421875 C 7.710938 -16.691406 7.222656 -15.835938 6.859375 -14.859375 C 6.503906 -13.878906 6.328125 -12.832031 6.328125 -11.71875 C 6.328125 -10.601562 6.503906 -9.554688 6.859375 -8.578125 C 7.222656 -7.597656 7.710938 -6.738281 8.328125 -6 C 8.953125 -5.269531 9.6875 -4.691406 10.53125 -4.265625 C 11.382812 -3.835938 12.285156 -3.625 13.234375 -3.625 Z M 13.234375 -3.625 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 54,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(79.105678, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 7.40625 0 L 2.640625 0 L 2.640625 -23.484375 L 6.421875 -23.484375 L 7.40625 -21.421875 C 8.1875 -22.171875 9.132812 -22.789062 10.25 -23.28125 C 11.363281 -23.78125 12.570312 -24.03125 13.875 -24.03125 C 14.726562 -24.03125 15.691406 -23.894531 16.765625 -23.625 C 17.847656 -23.363281 18.851562 -22.875 19.78125 -22.15625 C 20.71875 -21.4375 21.503906 -20.441406 22.140625 -19.171875 C 22.773438 -17.898438 23.09375 -16.25 23.09375 -14.21875 L 23.09375 0 L 18.578125 0 L 18.578125 -14.265625 C 18.578125 -15.273438 18.421875 -16.128906 18.109375 -16.828125 C 17.804688 -17.535156 17.398438 -18.101562 16.890625 -18.53125 C 16.378906 -18.957031 15.804688 -19.257812 15.171875 -19.4375 C 14.535156 -19.613281 13.875 -19.703125 13.1875 -19.703125 C 12.664062 -19.703125 12.066406 -19.601562 11.390625 -19.40625 C 10.722656 -19.21875 10.09375 -18.898438 9.5 -18.453125 C 8.914062 -18.015625 8.421875 -17.457031 8.015625 -16.78125 C 7.609375 -16.113281 7.40625 -15.289062 7.40625 -14.3125 Z M 7.40625 0 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 63,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 61,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(105.286157, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 25.203125 -35.796875 L 25.203125 0 L 21.421875 0 L 20.453125 -2.453125 C 19.503906 -1.503906 18.421875 -0.757812 17.203125 -0.21875 C 15.992188 0.320312 14.609375 0.59375 13.046875 0.59375 C 11.410156 0.59375 9.90625 0.273438 8.53125 -0.359375 C 7.15625 -1.003906 5.960938 -1.878906 4.953125 -2.984375 C 3.941406 -4.097656 3.148438 -5.40625 2.578125 -6.90625 C 2.003906 -8.414062 1.71875 -10.019531 1.71875 -11.71875 C 1.71875 -13.414062 2.003906 -15.015625 2.578125 -16.515625 C 3.148438 -18.023438 3.941406 -19.332031 4.953125 -20.4375 C 5.960938 -21.550781 7.15625 -22.425781 8.53125 -23.0625 C 9.90625 -23.707031 11.410156 -24.03125 13.046875 -24.03125 C 14.679688 -24.03125 16.101562 -23.757812 17.3125 -23.21875 C 18.519531 -22.675781 19.566406 -21.914062 20.453125 -20.9375 L 20.453125 -35.796875 Z M 13.4375 -3.625 C 14.414062 -3.625 15.320312 -3.785156 16.15625 -4.109375 C 16.988281 -4.441406 17.722656 -4.941406 18.359375 -5.609375 C 18.992188 -6.285156 19.488281 -7.128906 19.84375 -8.140625 C 20.207031 -9.148438 20.390625 -10.34375 20.390625 -11.71875 C 20.390625 -13.1875 20.207031 -14.425781 19.84375 -15.4375 C 19.488281 -16.457031 18.992188 -17.285156 18.359375 -17.921875 C 17.722656 -18.554688 16.988281 -19.007812 16.15625 -19.28125 C 15.320312 -19.5625 14.414062 -19.703125 13.4375 -19.703125 C 12.488281 -19.703125 11.585938 -19.5 10.734375 -19.09375 C 9.890625 -18.6875 9.15625 -18.125 8.53125 -17.40625 C 7.90625 -16.6875 7.410156 -15.835938 7.046875 -14.859375 C 6.691406 -13.878906 6.515625 -12.832031 6.515625 -11.71875 C 6.515625 -10.601562 6.691406 -9.554688 7.046875 -8.578125 C 7.410156 -7.597656 7.90625 -6.738281 8.53125 -6 C 9.15625 -5.269531 9.890625 -4.691406 10.734375 -4.265625 C 11.585938 -3.835938 12.488281 -3.625 13.4375 -3.625 Z M 13.4375 -3.625 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 68,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(133.672852, 52.101652)"
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 75,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(146.468924, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 19.125 -4.265625 C 21.019531 -4.265625 22.773438 -4.722656 24.390625 -5.640625 C 26.003906 -6.554688 27.367188 -7.765625 28.484375 -9.265625 L 32.0625 -5.828125 C 30.5 -3.972656 28.597656 -2.457031 26.359375 -1.28125 C 24.117188 -0.101562 21.707031 0.484375 19.125 0.484375 C 16.769531 0.484375 14.546875 0.0078125 12.453125 -0.9375 C 10.359375 -1.882812 8.539062 -3.164062 7 -4.78125 C 5.46875 -6.394531 4.253906 -8.289062 3.359375 -10.46875 C 2.460938 -12.644531 2.015625 -14.941406 2.015625 -17.359375 C 2.015625 -19.804688 2.460938 -22.109375 3.359375 -24.265625 C 4.253906 -26.421875 5.46875 -28.304688 7 -29.921875 C 8.539062 -31.546875 10.359375 -32.832031 12.453125 -33.78125 C 14.546875 -34.726562 16.769531 -35.203125 19.125 -35.203125 C 21.3125 -35.203125 23.375 -34.769531 25.3125 -33.90625 C 27.257812 -33.039062 29.003906 -31.90625 30.546875 -30.5 L 27.5 -26.625 C 26.425781 -27.769531 25.171875 -28.707031 23.734375 -29.4375 C 22.296875 -30.175781 20.757812 -30.546875 19.125 -30.546875 C 17.457031 -30.546875 15.894531 -30.191406 14.4375 -29.484375 C 12.988281 -28.785156 11.722656 -27.832031 10.640625 -26.625 C 9.554688 -25.414062 8.695312 -24.015625 8.0625 -22.421875 C 7.425781 -20.835938 7.109375 -19.148438 7.109375 -17.359375 C 7.109375 -15.554688 7.425781 -13.863281 8.0625 -12.28125 C 8.695312 -10.695312 9.554688 -9.304688 10.640625 -8.109375 C 11.722656 -6.921875 12.988281 -5.984375 14.4375 -5.296875 C 15.894531 -4.609375 17.457031 -4.265625 19.125 -4.265625 Z M 19.125 -4.265625 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 83,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 82,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 81,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 80,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(180.101522, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 13.046875 0.59375 C 11.410156 0.59375 9.878906 0.273438 8.453125 -0.359375 C 7.035156 -1.003906 5.796875 -1.878906 4.734375 -2.984375 C 3.671875 -4.097656 2.828125 -5.40625 2.203125 -6.90625 C 1.585938 -8.414062 1.28125 -10.019531 1.28125 -11.71875 C 1.28125 -13.414062 1.585938 -15.015625 2.203125 -16.515625 C 2.828125 -18.023438 3.671875 -19.332031 4.734375 -20.4375 C 5.796875 -21.550781 7.035156 -22.425781 8.453125 -23.0625 C 9.878906 -23.707031 11.410156 -24.03125 13.046875 -24.03125 C 14.640625 -24.03125 16.15625 -23.707031 17.59375 -23.0625 C 19.039062 -22.425781 20.296875 -21.550781 21.359375 -20.4375 C 22.421875 -19.332031 23.257812 -18.023438 23.875 -16.515625 C 24.5 -15.015625 24.8125 -13.414062 24.8125 -11.71875 C 24.8125 -10.019531 24.5 -8.414062 23.875 -6.90625 C 23.257812 -5.40625 22.421875 -4.097656 21.359375 -2.984375 C 20.296875 -1.878906 19.039062 -1.003906 17.59375 -0.359375 C 16.15625 0.273438 14.640625 0.59375 13.046875 0.59375 Z M 13.046875 -19.765625 C 12.097656 -19.765625 11.195312 -19.550781 10.34375 -19.125 C 9.5 -18.695312 8.753906 -18.125 8.109375 -17.40625 C 7.472656 -16.6875 6.972656 -15.835938 6.609375 -14.859375 C 6.253906 -13.878906 6.078125 -12.832031 6.078125 -11.71875 C 6.078125 -10.601562 6.253906 -9.554688 6.609375 -8.578125 C 6.972656 -7.597656 7.472656 -6.738281 8.109375 -6 C 8.753906 -5.269531 9.5 -4.691406 10.34375 -4.265625 C 11.195312 -3.835938 12.097656 -3.625 13.046875 -3.625 C 13.992188 -3.625 14.890625 -3.835938 15.734375 -4.265625 C 16.585938 -4.691406 17.320312 -5.269531 17.9375 -6 C 18.5625 -6.738281 19.050781 -7.597656 19.40625 -8.578125 C 19.769531 -9.554688 19.953125 -10.601562 19.953125 -11.71875 C 19.953125 -12.832031 19.769531 -13.878906 19.40625 -14.859375 C 19.050781 -15.835938 18.5625 -16.6875 17.9375 -17.40625 C 17.320312 -18.125 16.585938 -18.695312 15.734375 -19.125 C 14.890625 -19.550781 13.992188 -19.765625 13.046875 -19.765625 Z M 13.046875 -19.765625 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 88,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 87,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(205.987833, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 7.5 0 L 2.75 0 L 2.75 -23.484375 L 6.515625 -23.484375 L 7.5 -21.46875 C 8.09375 -22.15625 8.796875 -22.753906 9.609375 -23.265625 C 10.421875 -23.773438 11.414062 -24.03125 12.59375 -24.03125 C 13.050781 -24.03125 13.566406 -23.972656 14.140625 -23.859375 C 14.710938 -23.742188 15.300781 -23.546875 15.90625 -23.265625 C 16.507812 -22.984375 17.085938 -22.601562 17.640625 -22.125 C 18.203125 -21.65625 18.679688 -21.046875 19.078125 -20.296875 C 19.628906 -21.304688 20.46875 -22.179688 21.59375 -22.921875 C 22.726562 -23.660156 23.929688 -24.03125 25.203125 -24.03125 C 26.054688 -24.03125 26.957031 -23.894531 27.90625 -23.625 C 28.851562 -23.363281 29.734375 -22.875 30.546875 -22.15625 C 31.359375 -21.4375 32.023438 -20.441406 32.546875 -19.171875 C 33.078125 -17.898438 33.34375 -16.25 33.34375 -14.21875 L 33.34375 0 L 28.875 0 L 28.875 -14.265625 C 28.875 -16.296875 28.457031 -17.707031 27.625 -18.5 C 26.789062 -19.300781 25.6875 -19.703125 24.3125 -19.703125 C 23.269531 -19.703125 22.351562 -19.257812 21.5625 -18.375 C 20.78125 -17.5 20.390625 -16.113281 20.390625 -14.21875 L 20.390625 0 L 15.9375 0 L 15.9375 -14.265625 C 15.9375 -16.296875 15.519531 -17.707031 14.6875 -18.5 C 13.851562 -19.300781 12.75 -19.703125 11.375 -19.703125 C 10.394531 -19.703125 9.535156 -19.328125 8.796875 -18.578125 C 8.066406 -17.828125 7.632812 -16.648438 7.5 -15.046875 Z M 7.5 0 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 96,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 95,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 94,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(242.169832, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 7.5 0 L 2.75 0 L 2.75 -23.484375 L 6.515625 -23.484375 L 7.5 -21.46875 C 8.09375 -22.15625 8.796875 -22.753906 9.609375 -23.265625 C 10.421875 -23.773438 11.414062 -24.03125 12.59375 -24.03125 C 13.050781 -24.03125 13.566406 -23.972656 14.140625 -23.859375 C 14.710938 -23.742188 15.300781 -23.546875 15.90625 -23.265625 C 16.507812 -22.984375 17.085938 -22.601562 17.640625 -22.125 C 18.203125 -21.65625 18.679688 -21.046875 19.078125 -20.296875 C 19.628906 -21.304688 20.46875 -22.179688 21.59375 -22.921875 C 22.726562 -23.660156 23.929688 -24.03125 25.203125 -24.03125 C 26.054688 -24.03125 26.957031 -23.894531 27.90625 -23.625 C 28.851562 -23.363281 29.734375 -22.875 30.546875 -22.15625 C 31.359375 -21.4375 32.023438 -20.441406 32.546875 -19.171875 C 33.078125 -17.898438 33.34375 -16.25 33.34375 -14.21875 L 33.34375 0 L 28.875 0 L 28.875 -14.265625 C 28.875 -16.296875 28.457031 -17.707031 27.625 -18.5 C 26.789062 -19.300781 25.6875 -19.703125 24.3125 -19.703125 C 23.269531 -19.703125 22.351562 -19.257812 21.5625 -18.375 C 20.78125 -17.5 20.390625 -16.113281 20.390625 -14.21875 L 20.390625 0 L 15.9375 0 L 15.9375 -14.265625 C 15.9375 -16.296875 15.519531 -17.707031 14.6875 -18.5 C 13.851562 -19.300781 12.75 -19.703125 11.375 -19.703125 C 10.394531 -19.703125 9.535156 -19.328125 8.796875 -18.578125 C 8.066406 -17.828125 7.632812 -16.648438 7.5 -15.046875 Z M 7.5 0 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 104,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 103,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 102,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 101,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(278.351831, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 13.875 0.59375 C 12.175781 0.59375 10.582031 0.273438 9.09375 -0.359375 C 7.601562 -1.003906 6.300781 -1.878906 5.1875 -2.984375 C 4.082031 -4.097656 3.210938 -5.40625 2.578125 -6.90625 C 1.941406 -8.414062 1.625 -10.019531 1.625 -11.71875 C 1.625 -13.414062 1.925781 -15.015625 2.53125 -16.515625 C 3.132812 -18.023438 3.945312 -19.332031 4.96875 -20.4375 C 6 -21.550781 7.203125 -22.425781 8.578125 -23.0625 C 9.953125 -23.707031 11.425781 -24.03125 13 -24.03125 C 14.59375 -24.03125 16.066406 -23.75 17.421875 -23.1875 C 18.785156 -22.632812 19.960938 -21.769531 20.953125 -20.59375 C 21.953125 -19.414062 22.726562 -17.921875 23.28125 -16.109375 C 23.84375 -14.296875 24.125 -12.128906 24.125 -9.609375 L 6.671875 -9.609375 C 6.898438 -8.753906 7.257812 -7.957031 7.75 -7.21875 C 8.238281 -6.488281 8.816406 -5.851562 9.484375 -5.3125 C 10.160156 -4.78125 10.914062 -4.363281 11.75 -4.0625 C 12.582031 -3.769531 13.453125 -3.625 14.359375 -3.625 C 15.609375 -3.625 16.765625 -3.851562 17.828125 -4.3125 C 18.890625 -4.769531 19.796875 -5.375 20.546875 -6.125 L 23.484375 -3.1875 C 22.335938 -2.039062 20.9375 -1.125 19.28125 -0.4375 C 17.632812 0.25 15.832031 0.59375 13.875 0.59375 Z M 13 -19.703125 C 12.238281 -19.703125 11.523438 -19.554688 10.859375 -19.265625 C 10.191406 -18.972656 9.570312 -18.566406 9 -18.046875 C 8.425781 -17.523438 7.929688 -16.90625 7.515625 -16.1875 C 7.109375 -15.46875 6.8125 -14.679688 6.625 -13.828125 L 19.03125 -13.828125 C 18.957031 -14.609375 18.773438 -15.359375 18.484375 -16.078125 C 18.191406 -16.796875 17.78125 -17.425781 17.25 -17.96875 C 16.726562 -18.507812 16.113281 -18.929688 15.40625 -19.234375 C 14.707031 -19.546875 13.90625 -19.703125 13 -19.703125 Z M 13 -19.703125 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 111,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 110,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 109,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 108,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(304.336176, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 16.921875 -19.125 C 16.691406 -19.21875 16.460938 -19.316406 16.234375 -19.421875 C 16.035156 -19.484375 15.804688 -19.546875 15.546875 -19.609375 C 15.285156 -19.671875 15.003906 -19.703125 14.703125 -19.703125 C 13.753906 -19.703125 12.867188 -19.546875 12.046875 -19.234375 C 11.234375 -18.929688 10.535156 -18.515625 9.953125 -17.984375 C 9.367188 -17.460938 8.90625 -16.851562 8.5625 -16.15625 C 8.21875 -15.457031 8.046875 -14.710938 8.046875 -13.921875 L 7.984375 0 L 3.234375 0 L 3.234375 -23.484375 L 7.015625 -23.484375 L 7.984375 -20.890625 C 8.640625 -21.835938 9.5 -22.597656 10.5625 -23.171875 C 11.625 -23.742188 12.957031 -24.03125 14.5625 -24.03125 C 15.601562 -24.03125 16.796875 -23.878906 18.140625 -23.578125 Z M 16.921875 -19.125 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 118,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 117,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 116,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 115,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(322.868417, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 13.53125 0.59375 C 11.894531 0.59375 10.363281 0.273438 8.9375 -0.359375 C 7.519531 -1.003906 6.28125 -1.878906 5.21875 -2.984375 C 4.15625 -4.097656 3.3125 -5.40625 2.6875 -6.90625 C 2.070312 -8.414062 1.765625 -10.019531 1.765625 -11.71875 C 1.765625 -13.414062 2.070312 -15.015625 2.6875 -16.515625 C 3.3125 -18.023438 4.15625 -19.332031 5.21875 -20.4375 C 6.28125 -21.550781 7.519531 -22.425781 8.9375 -23.0625 C 10.363281 -23.707031 11.894531 -24.03125 13.53125 -24.03125 C 15.425781 -24.03125 17.175781 -23.601562 18.78125 -22.75 C 20.382812 -21.894531 21.722656 -20.734375 22.796875 -19.265625 L 19.46875 -16.671875 C 18.8125 -17.617188 17.984375 -18.359375 16.984375 -18.890625 C 15.992188 -19.429688 14.925781 -19.703125 13.78125 -19.703125 C 12.800781 -19.703125 11.867188 -19.5 10.984375 -19.09375 C 10.097656 -18.6875 9.328125 -18.125 8.671875 -17.40625 C 8.023438 -16.6875 7.507812 -15.835938 7.125 -14.859375 C 6.75 -13.878906 6.5625 -12.832031 6.5625 -11.71875 C 6.5625 -10.601562 6.75 -9.554688 7.125 -8.578125 C 7.507812 -7.597656 8.023438 -6.738281 8.671875 -6 C 9.328125 -5.269531 10.097656 -4.691406 10.984375 -4.265625 C 11.867188 -3.835938 12.800781 -3.625 13.78125 -3.625 C 15.050781 -3.625 16.207031 -3.96875 17.25 -4.65625 C 18.300781 -5.34375 19.15625 -6.257812 19.8125 -7.40625 L 23.046875 -4.5625 C 21.992188 -2.988281 20.632812 -1.734375 18.96875 -0.796875 C 17.300781 0.128906 15.488281 0.59375 13.53125 0.59375 Z M 13.53125 0.59375 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 125,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 124,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 123,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 122,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
      fill: "none",
      fillOpacity: "1",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        transform: "translate(347.774194, 52.101652)",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M 13.875 0.59375 C 12.175781 0.59375 10.582031 0.273438 9.09375 -0.359375 C 7.601562 -1.003906 6.300781 -1.878906 5.1875 -2.984375 C 4.082031 -4.097656 3.210938 -5.40625 2.578125 -6.90625 C 1.941406 -8.414062 1.625 -10.019531 1.625 -11.71875 C 1.625 -13.414062 1.925781 -15.015625 2.53125 -16.515625 C 3.132812 -18.023438 3.945312 -19.332031 4.96875 -20.4375 C 6 -21.550781 7.203125 -22.425781 8.578125 -23.0625 C 9.953125 -23.707031 11.425781 -24.03125 13 -24.03125 C 14.59375 -24.03125 16.066406 -23.75 17.421875 -23.1875 C 18.785156 -22.632812 19.960938 -21.769531 20.953125 -20.59375 C 21.953125 -19.414062 22.726562 -17.921875 23.28125 -16.109375 C 23.84375 -14.296875 24.125 -12.128906 24.125 -9.609375 L 6.671875 -9.609375 C 6.898438 -8.753906 7.257812 -7.957031 7.75 -7.21875 C 8.238281 -6.488281 8.816406 -5.851562 9.484375 -5.3125 C 10.160156 -4.78125 10.914062 -4.363281 11.75 -4.0625 C 12.582031 -3.769531 13.453125 -3.625 14.359375 -3.625 C 15.609375 -3.625 16.765625 -3.851562 17.828125 -4.3125 C 18.890625 -4.769531 19.796875 -5.375 20.546875 -6.125 L 23.484375 -3.1875 C 22.335938 -2.039062 20.9375 -1.125 19.28125 -0.4375 C 17.632812 0.25 15.832031 0.59375 13.875 0.59375 Z M 13 -19.703125 C 12.238281 -19.703125 11.523438 -19.554688 10.859375 -19.265625 C 10.191406 -18.972656 9.570312 -18.566406 9 -18.046875 C 8.425781 -17.523438 7.929688 -16.90625 7.515625 -16.1875 C 7.109375 -15.46875 6.8125 -14.679688 6.625 -13.828125 L 19.03125 -13.828125 C 18.957031 -14.609375 18.773438 -15.359375 18.484375 -16.078125 C 18.191406 -16.796875 17.78125 -17.425781 17.25 -17.96875 C 16.726562 -18.507812 16.113281 -18.929688 15.40625 -19.234375 C 14.707031 -19.546875 13.90625 -19.703125 13 -19.703125 Z M 13 -19.703125 ",
            className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-grey-50"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 132,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/logo.tsx",
          lineNumber: 131,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/logo.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 129,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/logo.tsx",
  lineNumber: 29,
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
    ids: ["intro", "projects", "about", "contact"],
    hrefs: ["/#intro", "/#projects", "/#about", "/#contact"],
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
              to: "/#projects",
              variants: linkVariants,
              className: "mobile-nav-link",
              children: "Projects"
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
            to: "/#projects",
            variants: linkVariants2,
            children: "Projects"
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
        text: "Get a brief look at who we are and what we do, If you would like to know more about us and our company"
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
                  text: "Island Commerce is owned by two technophiles who has technical and digital experience which spans for almost a decade",
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
                  text: "We at Island Commerce put together a bunch of passionate minds to transform your visions into reality imparting an awesome experience for your users. From headless commerce solutions, custom store fronts, covering various industries and app development, the solutions we engineer accelerate efficiency and fuel growth for our clients",
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
        to: "#projects",
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
  id: "projects",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
      heading: "Projects"
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
var assets_manifest_default = { version: "bfbbabc3", entry: { module: "/build/entry.client-FSW6VEAV.js", imports: ["/build/_shared/chunk-QM6342XS.js", "/build/_shared/chunk-CZALT7KZ.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6YQCRZYV.js", imports: ["/build/_shared/chunk-JEOXN7TR.js", "/build/_shared/chunk-W7JTXIBI.js", "/build/_shared/chunk-TDY5T25U.js", "/build/_shared/chunk-E2J4K2K6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/[robots.txt]-XZ5KURTG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[sitemap.xml]": { id: "routes/[sitemap.xml]", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/[sitemap.xml]-5F4JOHYP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/action/toggle-theme": { id: "routes/action/toggle-theme", parentId: "root", path: "action/toggle-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/action/toggle-theme-L66ENDN3.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-67BNFTSO.js", imports: ["/build/_shared/chunk-KI4HR2ZI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/project/100-days-of-ui": { id: "routes/project/100-days-of-ui", parentId: "root", path: "project/100-days-of-ui", index: void 0, caseSensitive: void 0, module: "/build/routes/project/100-days-of-ui-PJAOY4XJ.js", imports: ["/build/_shared/chunk-UDSKB5KG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/project/miinto": { id: "routes/project/miinto", parentId: "root", path: "project/miinto", index: void 0, caseSensitive: void 0, module: "/build/routes/project/miinto-ESLYPYQZ.js", imports: ["/build/_shared/chunk-UDSKB5KG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/project/tsks": { id: "routes/project/tsks", parentId: "root", path: "project/tsks", index: void 0, caseSensitive: void 0, module: "/build/routes/project/tsks-JVBHFWJO.js", imports: ["/build/_shared/chunk-UDSKB5KG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/service/headless-commerce": { id: "routes/service/headless-commerce", parentId: "root", path: "service/headless-commerce", index: void 0, caseSensitive: void 0, module: "/build/routes/service/headless-commerce-TRF5TUZZ.js", imports: ["/build/_shared/chunk-UDSKB5KG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-2OP4JKZT.js", imports: ["/build/_shared/chunk-2HUBEZBF.js", "/build/_shared/chunk-KI4HR2ZI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/side-projects": { id: "routes/side-projects", parentId: "root", path: "side-projects", index: void 0, caseSensitive: void 0, module: "/build/routes/side-projects-VI5NJT3L.js", imports: ["/build/_shared/chunk-2HUBEZBF.js", "/build/_shared/chunk-KI4HR2ZI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-BFBBABC3.js" };

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
