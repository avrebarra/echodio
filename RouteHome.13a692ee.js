// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"emU3S":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"aeH4U"}],"a4erj":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "eb9f13de13a692ee";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dMjyL":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$2405 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$2405.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Home", ()=>Home
);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _eventcommons = require("../services/eventcommons");
var _eventcommonsDefault = parcelHelpers.interopDefault(_eventcommons);
var _recorder = require("../libs/recorder");
var _config = require("../config");
var _configDefault = parcelHelpers.interopDefault(_config);
var _s = $RefreshSig$();
var AppState1;
(function(AppState) {
    AppState[AppState["Idle"] = 1] = "Idle";
    AppState[AppState["Recording"] = 2] = "Recording";
    AppState[AppState["Playing"] = 3] = "Playing";
})(AppState1 || (AppState1 = {
}));
// TODO: this is a code smell
let engine;
let recordings = [];
let audioplayer = document.createElement("audio");
const Home = (props)=>{
    _s();
    // context, vars, and states
    const [readiness, setReadiness] = _react.useState(false);
    const [appState, setAppState] = _react.useState(AppState1.Idle);
    // helper funcs
    const onSetupComponent = async ()=>{
        if (!engine) engine = await _recorder.NewRecorder();
        if (!readiness) {
            _eventcommonsDefault.default.on("echodio.RecordingAdded", onPlayRecordingWithIndex);
            _eventcommonsDefault.default.on("echodio.PlaybackEnded", onPlaybackEnded);
            setReadiness(true);
        }
    };
    const onRecord = async ()=>{
        if (!engine) return _eventcommonsDefault.default.emit("error", _configDefault.default.errors.ErrRecorderNotReady);
        engine.start({
            onStop: (blob)=>{
                // add to recordings
                recordings.push(new Blob([
                    blob
                ], {
                    type: blob.type
                }));
                recordings = recordings.slice(0, Math.min(10, recordings.length));
                // fire events
                _eventcommonsDefault.default.emit("echodio.RecordingAdded", recordings.length - 1);
            }
        });
        setAppState(AppState1.Recording);
    };
    const onPlayEcho = async ()=>{
        if (!engine) return _eventcommonsDefault.default.emit("error", _configDefault.default.errors.ErrRecorderNotReady);
        engine.stop();
        setAppState(AppState1.Playing);
    };
    const onStopEcho = async ()=>{
        if (!engine) return _eventcommonsDefault.default.emit("error", _configDefault.default.errors.ErrRecorderNotReady);
        audioplayer.pause();
        audioplayer.currentTime = 0;
        _eventcommonsDefault.default.emit("echodio.PlaybackEnded");
    };
    const onPlayRecordingWithIndex = async (index)=>{
        audioplayer.src = URL.createObjectURL(recordings[index]);
        audioplayer.onended = ()=>_eventcommonsDefault.default.emit("echodio.PlaybackEnded")
        ;
        audioplayer.play();
    };
    const onPlaybackEnded = async ()=>{
        setAppState(AppState1.Idle);
    };
    // effects
    _react.useEffect(()=>{
        onSetupComponent();
    }, [
        readiness
    ]);
    return(/*#__PURE__*/ _jsxRuntime.jsxs(_jsxRuntime.Fragment, {
        children: [
            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                className: "text-center",
                __source: {
                    fileName: "src/components/RouteHome.tsx",
                    lineNumber: 85,
                    columnNumber: 7
                },
                __self: undefined,
                children: [
                    /*#__PURE__*/ _jsxRuntime.jsx("br", {
                        __source: {
                            fileName: "src/components/RouteHome.tsx",
                            lineNumber: 86,
                            columnNumber: 9
                        },
                        __self: undefined
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsx("br", {
                        __source: {
                            fileName: "src/components/RouteHome.tsx",
                            lineNumber: 87,
                            columnNumber: 9
                        },
                        __self: undefined
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsx("div", {
                        className: "flex justify-center mb-3 " + (appState == AppState1.Recording ? "animate-pulse" : "") + (appState == AppState1.Playing ? "animate-bounce" : ""),
                        __source: {
                            fileName: "src/components/RouteHome.tsx",
                            lineNumber: 88,
                            columnNumber: 9
                        },
                        __self: undefined,
                        children: /*#__PURE__*/ _jsxRuntime.jsx("img", {
                            src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/parrot_1f99c.png",
                            className: "drop-shadow-md",
                            alt: "",
                            __source: {
                                fileName: "src/components/RouteHome.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            },
                            __self: undefined
                        })
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                        className: "drop-shadow-xl",
                        __source: {
                            fileName: "src/components/RouteHome.tsx",
                            lineNumber: 101,
                            columnNumber: 9
                        },
                        __self: undefined,
                        children: [
                            /*#__PURE__*/ _jsxRuntime.jsx("div", {
                                className: "font-bold text-6xl mb-2",
                                __source: {
                                    fileName: "src/components/RouteHome.tsx",
                                    lineNumber: 102,
                                    columnNumber: 11
                                },
                                __self: undefined,
                                children: /*#__PURE__*/ _jsxRuntime.jsx(_reactRouterDom.Link, {
                                    className: "text-white",
                                    to: `/`,
                                    __source: {
                                        fileName: "src/components/RouteHome.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    },
                                    __self: undefined,
                                    children: "echodio."
                                })
                            }),
                            /*#__PURE__*/ _jsxRuntime.jsx("div", {
                                className: "text-2xl text-stone-600",
                                __source: {
                                    fileName: "src/components/RouteHome.tsx",
                                    lineNumber: 107,
                                    columnNumber: 11
                                },
                                __self: undefined,
                                children: "record and replay your voice, yeah just that."
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsx("br", {
                        __source: {
                            fileName: "src/components/RouteHome.tsx",
                            lineNumber: 111,
                            columnNumber: 9
                        },
                        __self: undefined
                    })
                ]
            }),
            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                className: "drop-shadow-md",
                __source: {
                    fileName: "src/components/RouteHome.tsx",
                    lineNumber: 114,
                    columnNumber: 7
                },
                __self: undefined,
                children: [
                    appState == AppState1.Idle && /*#__PURE__*/ _jsxRuntime.jsx("div", {
                        className: "py-5 bg-blue-500 hover:animate-pulse active:bg-blue-600 text-white text-center text-xl font-medium cursor-pointer",
                        onClick: onRecord,
                        __source: {
                            fileName: "src/components/RouteHome.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        },
                        __self: undefined,
                        children: "Start Recording"
                    }),
                    appState == AppState1.Recording && /*#__PURE__*/ _jsxRuntime.jsx("div", {
                        className: "py-5 bg-green-600 hover:animate-pulse active:bg-green-700 text-white text-center text-xl font-medium cursor-pointer",
                        onClick: onPlayEcho,
                        __source: {
                            fileName: "src/components/RouteHome.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        },
                        __self: undefined,
                        children: "Stop and Echo"
                    }),
                    appState == AppState1.Playing && /*#__PURE__*/ _jsxRuntime.jsx("div", {
                        className: "py-5 bg-red-500 hover:animate-pulse active:bg-red-600 text-white text-center text-xl font-medium cursor-pointer",
                        onClick: onStopEcho,
                        __source: {
                            fileName: "src/components/RouteHome.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        },
                        __self: undefined,
                        children: "Stop Echo"
                    })
                ]
            })
        ]
    }));
};
_s(Home, "0ccf85Ik0pC06an0pSTLWAmf8sY=");
_c = Home;
var _c;
$RefreshReg$(_c, "Home");

  $parcel$ReactRefreshHelpers$2405.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","react":"4mchR","react-router-dom":"16kZP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13","../libs/recorder":"8Wp0O","../services/eventcommons":"cIPVK","../config":"bjZg9"}],"8Wp0O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NewRecorder", ()=>NewRecorder
);
const NewRecorder = async ()=>{
    const constraints = {
        audio: true
    };
    const mediastream = await navigator.mediaDevices.getUserMedia(constraints);
    // recorder state
    let latestBlob;
    let latestOpts;
    // setup recorder
    let mediaChunks = [];
    const mediaRecorder = new MediaRecorder(mediastream);
    mediaRecorder.ondataavailable = (e)=>{
        mediaChunks.push(e.data);
    };
    mediaRecorder.onstop = ()=>{
        latestBlob = new Blob(mediaChunks, {
            type: "audio/ogg; codecs=opus"
        });
        mediaChunks = []; // reset chunks
        latestOpts.onStop(latestBlob); // trigger callback
    };
    // build recorder wrapper
    return {
        start: (opts)=>{
            if (mediaRecorder.state != "inactive") mediaRecorder.stop(); // ensure inactive
            latestOpts = opts; // set current active opts
            mediaRecorder.start();
        },
        stop: ()=>{
            mediaRecorder.stop();
        }
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cIPVK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nanoevents = require("nanoevents");
exports.default = _nanoevents.createNanoEvents();

},{"nanoevents":"5Vvph","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5Vvph":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNanoEvents", ()=>createNanoEvents
);
let createNanoEvents = ()=>({
        events: {
        },
        emit (event, ...args) {
            (this.events[event] || []).forEach((i)=>i(...args)
            );
        },
        on (event, cb) {
            (this.events[event] = this.events[event] || []).push(cb);
            return ()=>this.events[event] = (this.events[event] || []).filter((i)=>i !== cb
                )
            ;
        }
    })
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["emU3S","a4erj"], null, "parcelRequireb4e2")

//# sourceMappingURL=RouteHome.13a692ee.js.map
