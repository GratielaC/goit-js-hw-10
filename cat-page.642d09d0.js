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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"iBiZV":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "a200cabb642d09d0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"frAPK":[function(require,module,exports,__globalThis) {
// imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "breedSelect", ()=>breedSelect);
parcelHelpers.export(exports, "loader", ()=>loader);
parcelHelpers.export(exports, "catInfo", ()=>catInfo);
parcelHelpers.export(exports, "breedSelectContainer", ()=>breedSelectContainer);
var _catApiJs = require("./jsFiles/catFinder/cat-api.js");
var _getElementJs = require("./jsFiles/getElement.js");
const breedSelect = (0, _getElementJs.getElement)('.breed-select');
const loader = (0, _getElementJs.getElement)('.loader-container');
const catInfo = (0, _getElementJs.getElement)('.cat-info');
const breedSelectContainer = (0, _getElementJs.getElement)('.breed-select-container');
const showBreedInfo = (e)=>{
    const catId = e.target.value;
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${catId}&api_key=live_yyt921ibZYoALyxNkRNjFjEZAaEZmc8IbLIPjqKyPyABlK3qvZVyozRR4YZH7kvD`;
    breedSelectContainer.classList.add('hide');
    loader.classList.remove('hide');
    catInfo.innerHTML = '';
    (0, _catApiJs.fetchCatByBreed)(url);
};
window.addEventListener('DOMContentLoaded', (0, _catApiJs.getCatsBreeds));
breedSelect.addEventListener('change', showBreedInfo);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./jsFiles/catFinder/cat-api.js":"lPfm1","./jsFiles/getElement.js":"eRbd9"}],"lPfm1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCatsBreeds", ()=>getCatsBreeds);
parcelHelpers.export(exports, "fetchCatByBreed", ()=>fetchCatByBreed);
var _catFinderIndex = require("../../catFinderIndex");
var _slimSelect = require("slim-select");
var _slimSelectDefault = parcelHelpers.interopDefault(_slimSelect);
var _notiflix = require("notiflix");
var _notiflixDefault = parcelHelpers.interopDefault(_notiflix);
const getCatsBreeds = ()=>{
    return fetch('https://api.thecatapi.com/v1/breeds').then((resp)=>resp.json()).then((resp)=>{
        const arrayOfBreeds = getOnlyTheBreeds(resp);
        (0, _catFinderIndex.breedSelect).innerHTML = addToBreedSelect(arrayOfBreeds);
        (0, _catFinderIndex.breedSelect).classList.remove('hide');
        (0, _catFinderIndex.loader).classList.add('hide');
        new (0, _slimSelectDefault.default)({
            select: (0, _catFinderIndex.breedSelect)
        });
    }).catch((err)=>{
        (0, _notiflixDefault.default).Notify.failure('Oops! Something went wrong! Try reloading the page!');
        (0, _catFinderIndex.loader).classList.add('hide');
        console.log(err);
    });
};
function getOnlyTheBreeds(array) {
    const arrayOfBreeds = array.map((cat)=>{
        const name = cat.name;
        const id = cat.id;
        return {
            id,
            name
        };
    });
    return arrayOfBreeds;
}
function addToBreedSelect(array) {
    const breedSelectOptions = array.map((cat)=>{
        return `<option value="${cat.id}">${cat.name}</option>`;
    }).join('');
    return breedSelectOptions;
}
const makeCatInfo = (image, moreInfo)=>{
    return `<img
        src="${image}"
        alt="${moreInfo.name}"
        class="cat-img"
      />
      <div class="description-text">
        <h2 class="breed-name">${moreInfo.name}</h2>
        <p class="cat-description">${moreInfo.description}</p>
        <p class="temperament">
          <span>temperament: </span> ${moreInfo.temperament}
        </p>
      </div>`;
};
const fetchCatByBreed = (url)=>{
    return fetch(url).then((resp)=>resp.json()).then((resp)=>{
        const catSelect = resp[0];
        let { url: image, breeds: moreInfo } = catSelect;
        moreInfo = moreInfo[0];
        (0, _catFinderIndex.loader).classList.add('hide');
        (0, _catFinderIndex.catInfo).innerHTML = makeCatInfo(image, moreInfo);
        (0, _catFinderIndex.breedSelectContainer).classList.remove('hide');
    }).catch((err)=>{
        (0, _catFinderIndex.loader).classList.add('hide');
        (0, _catFinderIndex.breedSelectContainer).classList.remove('hide');
        (0, _notiflixDefault.default).Notify.failure('Oops! Something went wrong! Please chouse another cat!');
        console.log(err);
    });
};

},{"../../catFinderIndex":"frAPK","slim-select":"lzHUr","notiflix":"fuMq1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lzHUr":[function(require,module,exports,__globalThis) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    class CssClasses {
        constructor(classes){
            if (!classes) classes = {};
            this.main = classes.main || 'ss-main';
            this.placeholder = classes.placeholder || 'ss-placeholder';
            this.values = classes.values || 'ss-values';
            this.single = classes.single || 'ss-single';
            this.max = classes.max || 'ss-max';
            this.value = classes.value || 'ss-value';
            this.valueText = classes.valueText || 'ss-value-text';
            this.valueDelete = classes.valueDelete || 'ss-value-delete';
            this.valueOut = classes.valueOut || 'ss-value-out';
            this.deselect = classes.deselect || 'ss-deselect';
            this.deselectPath = classes.deselectPath || 'M10,10 L90,90 M10,90 L90,10';
            this.arrow = classes.arrow || 'ss-arrow';
            this.arrowClose = classes.arrowClose || 'M10,30 L50,70 L90,30';
            this.arrowOpen = classes.arrowOpen || 'M10,70 L50,30 L90,70';
            this.content = classes.content || 'ss-content';
            this.openAbove = classes.openAbove || 'ss-open-above';
            this.openBelow = classes.openBelow || 'ss-open-below';
            this.search = classes.search || 'ss-search';
            this.searchHighlighter = classes.searchHighlighter || 'ss-search-highlight';
            this.searching = classes.searching || 'ss-searching';
            this.addable = classes.addable || 'ss-addable';
            this.addablePath = classes.addablePath || 'M50,10 L50,90 M10,50 L90,50';
            this.list = classes.list || 'ss-list';
            this.optgroup = classes.optgroup || 'ss-optgroup';
            this.optgroupLabel = classes.optgroupLabel || 'ss-optgroup-label';
            this.optgroupLabelText = classes.optgroupLabelText || 'ss-optgroup-label-text';
            this.optgroupActions = classes.optgroupActions || 'ss-optgroup-actions';
            this.optgroupSelectAll = classes.optgroupSelectAll || 'ss-selectall';
            this.optgroupSelectAllBox = classes.optgroupSelectAllBox || 'M60,10 L10,10 L10,90 L90,90 L90,50';
            this.optgroupSelectAllCheck = classes.optgroupSelectAllCheck || 'M30,45 L50,70 L90,10';
            this.optgroupClosable = classes.optgroupClosable || 'ss-closable';
            this.option = classes.option || 'ss-option';
            this.optionDelete = classes.optionDelete || 'M10,10 L90,90 M10,90 L90,10';
            this.highlighted = classes.highlighted || 'ss-highlighted';
            this.open = classes.open || 'ss-open';
            this.close = classes.close || 'ss-close';
            this.selected = classes.selected || 'ss-selected';
            this.error = classes.error || 'ss-error';
            this.disabled = classes.disabled || 'ss-disabled';
            this.hide = classes.hide || 'ss-hide';
        }
    }
    function generateID() {
        return Math.random().toString(36).substring(2, 10);
    }
    function hasClassInTree(element, className) {
        function hasClass(e, c) {
            if (c && e && e.classList && e.classList.contains(c)) return e;
            if (c && e && e.dataset && e.dataset.id && e.dataset.id === className) return e;
            return null;
        }
        function parentByClass(e, c) {
            if (!e || e === document) return null;
            else if (hasClass(e, c)) return e;
            else return parentByClass(e.parentNode, c);
        }
        return hasClass(element, className) || parentByClass(element, className);
    }
    function debounce(func, wait = 50, immediate = false) {
        let timeout;
        return function(...args) {
            const context = self;
            const later = ()=>{
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    function isEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    function kebabCase(str) {
        const result = str.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, (match)=>'-' + match.toLowerCase());
        return str[0] === str[0].toUpperCase() ? result.substring(1) : result;
    }
    class Optgroup {
        constructor(optgroup){
            this.id = !optgroup.id || optgroup.id === '' ? generateID() : optgroup.id;
            this.label = optgroup.label || '';
            this.selectAll = optgroup.selectAll === undefined ? false : optgroup.selectAll;
            this.selectAllText = optgroup.selectAllText || 'Select All';
            this.closable = optgroup.closable || 'off';
            this.options = [];
            if (optgroup.options) for (const o of optgroup.options)this.options.push(new Option(o));
        }
    }
    class Option {
        constructor(option){
            this.id = !option.id || option.id === '' ? generateID() : option.id;
            this.value = option.value === undefined ? option.text : option.value;
            this.text = option.text || '';
            this.html = option.html || '';
            this.selected = option.selected !== undefined ? option.selected : false;
            this.display = option.display !== undefined ? option.display : true;
            this.disabled = option.disabled !== undefined ? option.disabled : false;
            this.mandatory = option.mandatory !== undefined ? option.mandatory : false;
            this.placeholder = option.placeholder !== undefined ? option.placeholder : false;
            this.class = option.class || '';
            this.style = option.style || '';
            this.data = option.data || {};
        }
    }
    class Store {
        constructor(type, data){
            this.selectType = 'single';
            this.data = [];
            this.selectedOrder = [];
            this.selectType = type;
            this.setData(data);
        }
        validateDataArray(data) {
            if (!Array.isArray(data)) return new Error('Data must be an array');
            for (let dataObj of data){
                if (dataObj instanceof Optgroup || 'label' in dataObj) {
                    if (!('label' in dataObj)) return new Error('Optgroup must have a label');
                    if ('options' in dataObj && dataObj.options) for (let option of dataObj.options){
                        const validationError = this.validateOption(option);
                        if (validationError) return validationError;
                    }
                } else if (dataObj instanceof Option || 'text' in dataObj) {
                    const validationError = this.validateOption(dataObj);
                    if (validationError) return validationError;
                } else return new Error('Data object must be a valid optgroup or option');
            }
            return null;
        }
        validateOption(option) {
            if (!('text' in option)) return new Error('Option must have a text');
            return null;
        }
        partialToFullData(data) {
            let dataFinal = [];
            data.forEach((dataObj)=>{
                if (dataObj instanceof Optgroup || 'label' in dataObj) {
                    let optOptions = [];
                    if ('options' in dataObj && dataObj.options) dataObj.options.forEach((option)=>{
                        optOptions.push(new Option(option));
                    });
                    if (optOptions.length > 0) dataFinal.push(new Optgroup(dataObj));
                }
                if (dataObj instanceof Option || 'text' in dataObj) dataFinal.push(new Option(dataObj));
            });
            return dataFinal;
        }
        setData(data) {
            this.data = this.partialToFullData(data);
            if (this.selectType === 'single') this.setSelectedBy('id', this.getSelected());
        }
        getData() {
            return this.filter(null, true);
        }
        getDataOptions() {
            return this.filter(null, false);
        }
        addOption(option, addToStart = false) {
            if (addToStart) {
                let data = [
                    new Option(option)
                ];
                this.setData(data.concat(this.getData()));
            } else this.setData(this.getData().concat(new Option(option)));
        }
        setSelectedBy(selectedType, selectedValues) {
            let firstOption = null;
            let hasSelected = false;
            const selectedObjects = [];
            for (let dataObj of this.data){
                if (dataObj instanceof Optgroup) for (let option of dataObj.options){
                    if (!firstOption) firstOption = option;
                    option.selected = hasSelected ? false : selectedValues.includes(option[selectedType]);
                    if (option.selected) {
                        selectedObjects.push(option);
                        if (this.selectType === 'single') hasSelected = true;
                    }
                }
                if (dataObj instanceof Option) {
                    if (!firstOption) firstOption = dataObj;
                    dataObj.selected = hasSelected ? false : selectedValues.includes(dataObj[selectedType]);
                    if (dataObj.selected) {
                        selectedObjects.push(dataObj);
                        if (this.selectType === 'single') hasSelected = true;
                    }
                }
            }
            if (this.selectType === 'single' && firstOption && !hasSelected) {
                firstOption.selected = true;
                selectedObjects.push(firstOption);
            }
            const selectedIds = selectedValues.map((value)=>{
                var _a;
                return ((_a = selectedObjects.find((option)=>option[selectedType] === value)) === null || _a === void 0 ? void 0 : _a.id) || '';
            });
            this.selectedOrder = selectedIds;
        }
        getSelected() {
            return this.getSelectedOptions().map((option)=>option.id);
        }
        getSelectedValues() {
            return this.getSelectedOptions().map((option)=>option.value);
        }
        getSelectedOptions() {
            return this.filter((opt)=>{
                return opt.selected;
            }, false);
        }
        getOptgroupByID(id) {
            for (let dataObj of this.data){
                if (dataObj instanceof Optgroup && dataObj.id === id) return dataObj;
            }
            return null;
        }
        getOptionByID(id) {
            let options = this.filter((opt)=>{
                return opt.id === id;
            }, false);
            return options.length ? options[0] : null;
        }
        getSelectType() {
            return this.selectType;
        }
        getFirstOption() {
            let option = null;
            for (let dataObj of this.data){
                if (dataObj instanceof Optgroup) option = dataObj.options[0];
                else if (dataObj instanceof Option) option = dataObj;
                if (option) break;
            }
            return option;
        }
        search(search, searchFilter) {
            search = search.trim();
            if (search === '') return this.getData();
            return this.filter((opt)=>{
                return searchFilter(opt, search);
            }, true);
        }
        filter(filter, includeOptgroup) {
            const dataSearch = [];
            this.data.forEach((dataObj)=>{
                if (dataObj instanceof Optgroup) {
                    let optOptions = [];
                    dataObj.options.forEach((option)=>{
                        if (!filter || filter(option)) {
                            if (!includeOptgroup) dataSearch.push(new Option(option));
                            else optOptions.push(new Option(option));
                        }
                    });
                    if (optOptions.length > 0) {
                        let optgroup = new Optgroup(dataObj);
                        optgroup.options = optOptions;
                        dataSearch.push(optgroup);
                    }
                }
                if (dataObj instanceof Option) {
                    if (!filter || filter(dataObj)) dataSearch.push(new Option(dataObj));
                }
            });
            return dataSearch;
        }
        selectedOrderOptions(options) {
            const newOrder = [];
            this.selectedOrder.forEach((id)=>{
                const option = options.find((opt)=>opt.id === id);
                if (option) newOrder.push(option);
            });
            options.forEach((option)=>{
                let isIn = false;
                newOrder.forEach((selectedOption)=>{
                    if (option.id === selectedOption.id) {
                        isIn = true;
                        return;
                    }
                });
                if (!isIn) newOrder.push(option);
            });
            return newOrder;
        }
    }
    class Render {
        constructor(settings, classes, store, callbacks){
            this.store = store;
            this.settings = settings;
            this.classes = classes;
            this.callbacks = callbacks;
            this.main = this.mainDiv();
            this.content = this.contentDiv();
            this.updateClassStyles();
            this.updateAriaAttributes();
            if (this.settings.contentLocation) this.settings.contentLocation.appendChild(this.content.main);
        }
        enable() {
            this.main.main.classList.remove(this.classes.disabled);
            this.content.search.input.disabled = false;
        }
        disable() {
            this.main.main.classList.add(this.classes.disabled);
            this.content.search.input.disabled = true;
        }
        open() {
            this.main.arrow.path.setAttribute('d', this.classes.arrowOpen);
            this.main.main.classList.add(this.settings.openPosition === 'up' ? this.classes.openAbove : this.classes.openBelow);
            this.main.main.setAttribute('aria-expanded', 'true');
            this.moveContent();
            const selectedOptions = this.store.getSelectedOptions();
            if (selectedOptions.length) {
                const selectedId = selectedOptions[selectedOptions.length - 1].id;
                const selectedOption = this.content.list.querySelector('[data-id="' + selectedId + '"]');
                if (selectedOption) this.ensureElementInView(this.content.list, selectedOption);
            }
        }
        close() {
            this.main.main.classList.remove(this.classes.openAbove);
            this.main.main.classList.remove(this.classes.openBelow);
            this.main.main.setAttribute('aria-expanded', 'false');
            this.content.main.classList.remove(this.classes.openAbove);
            this.content.main.classList.remove(this.classes.openBelow);
            this.main.arrow.path.setAttribute('d', this.classes.arrowClose);
        }
        updateClassStyles() {
            this.main.main.className = '';
            this.main.main.removeAttribute('style');
            this.content.main.className = '';
            this.content.main.removeAttribute('style');
            this.main.main.classList.add(this.classes.main);
            this.content.main.classList.add(this.classes.content);
            if (this.settings.style !== '') {
                this.main.main.style.cssText = this.settings.style;
                this.content.main.style.cssText = this.settings.style;
            }
            if (this.settings.class.length) {
                for (const c of this.settings.class)if (c.trim() !== '') {
                    this.main.main.classList.add(c.trim());
                    this.content.main.classList.add(c.trim());
                }
            }
            if (this.settings.contentPosition === 'relative' || this.settings.contentPosition === 'fixed') this.content.main.classList.add('ss-' + this.settings.contentPosition);
        }
        updateAriaAttributes() {
            this.main.main.role = 'combobox';
            this.main.main.setAttribute('aria-haspopup', 'listbox');
            this.main.main.setAttribute('aria-controls', this.content.main.id);
            this.main.main.setAttribute('aria-expanded', 'false');
            this.content.main.setAttribute('role', 'listbox');
        }
        mainDiv() {
            var _a;
            const main = document.createElement('div');
            main.dataset.id = this.settings.id;
            main.setAttribute('aria-label', this.settings.ariaLabel);
            main.tabIndex = 0;
            main.onkeydown = (e)=>{
                switch(e.key){
                    case 'ArrowUp':
                    case 'ArrowDown':
                        this.callbacks.open();
                        e.key === 'ArrowDown' ? this.highlight('down') : this.highlight('up');
                        return false;
                    case 'Tab':
                        this.callbacks.close();
                        return true;
                    case 'Enter':
                    case ' ':
                        this.callbacks.open();
                        const highlighted = this.content.list.querySelector('.' + this.classes.highlighted);
                        if (highlighted) highlighted.click();
                        return false;
                    case 'Escape':
                        this.callbacks.close();
                        return false;
                }
                if (e.key.length === 1) this.callbacks.open();
                return true;
            };
            main.onclick = (e)=>{
                if (this.settings.disabled) return;
                this.settings.isOpen ? this.callbacks.close() : this.callbacks.open();
            };
            const values = document.createElement('div');
            values.classList.add(this.classes.values);
            main.appendChild(values);
            const deselect = document.createElement('div');
            deselect.classList.add(this.classes.deselect);
            const selectedOptions = (_a = this.store) === null || _a === void 0 ? void 0 : _a.getSelectedOptions();
            if (!this.settings.allowDeselect || this.settings.isMultiple && selectedOptions && selectedOptions.length <= 0) deselect.classList.add(this.classes.hide);
            else deselect.classList.remove(this.classes.hide);
            deselect.onclick = (e)=>{
                e.stopPropagation();
                if (this.settings.disabled) return;
                let shouldDelete = true;
                const before = this.store.getSelectedOptions();
                const after = [];
                if (this.callbacks.beforeChange) shouldDelete = this.callbacks.beforeChange(after, before) === true;
                if (shouldDelete) {
                    if (this.settings.isMultiple) {
                        this.callbacks.setSelected([], false);
                        this.updateDeselectAll();
                    } else {
                        const firstOption = this.store.getFirstOption();
                        const id = firstOption ? firstOption.id : '';
                        this.callbacks.setSelected(id, false);
                    }
                    if (this.settings.closeOnSelect) this.callbacks.close();
                    if (this.callbacks.afterChange) this.callbacks.afterChange(this.store.getSelectedOptions());
                }
            };
            const deselectSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            deselectSvg.setAttribute('viewBox', '0 0 100 100');
            const deselectPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            deselectPath.setAttribute('d', this.classes.deselectPath);
            deselectSvg.appendChild(deselectPath);
            deselect.appendChild(deselectSvg);
            main.appendChild(deselect);
            const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            arrow.classList.add(this.classes.arrow);
            arrow.setAttribute('viewBox', '0 0 100 100');
            const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            arrowPath.setAttribute('d', this.classes.arrowClose);
            if (this.settings.alwaysOpen) arrow.classList.add(this.classes.hide);
            arrow.appendChild(arrowPath);
            main.appendChild(arrow);
            return {
                main: main,
                values: values,
                deselect: {
                    main: deselect,
                    svg: deselectSvg,
                    path: deselectPath
                },
                arrow: {
                    main: arrow,
                    path: arrowPath
                }
            };
        }
        mainFocus(eventType) {
            if (eventType !== 'click') this.main.main.focus({
                preventScroll: true
            });
        }
        placeholder() {
            const placeholderOption = this.store.filter((o)=>o.placeholder, false);
            let placeholderText = this.settings.placeholderText;
            if (placeholderOption.length) {
                if (placeholderOption[0].html !== '') placeholderText = placeholderOption[0].html;
                else if (placeholderOption[0].text !== '') placeholderText = placeholderOption[0].text;
            }
            const placeholder = document.createElement('div');
            placeholder.classList.add(this.classes.placeholder);
            placeholder.innerHTML = placeholderText;
            return placeholder;
        }
        renderValues() {
            if (!this.settings.isMultiple) {
                this.renderSingleValue();
                return;
            }
            this.renderMultipleValues();
            this.updateDeselectAll();
        }
        renderSingleValue() {
            const selected = this.store.filter((o)=>{
                return o.selected && !o.placeholder;
            }, false);
            const selectedSingle = selected.length > 0 ? selected[0] : null;
            if (!selectedSingle) this.main.values.innerHTML = this.placeholder().outerHTML;
            else {
                const singleValue = document.createElement('div');
                singleValue.classList.add(this.classes.single);
                if (selectedSingle.html) singleValue.innerHTML = selectedSingle.html;
                else singleValue.innerText = selectedSingle.text;
                this.main.values.innerHTML = singleValue.outerHTML;
            }
            if (!this.settings.allowDeselect || !selected.length) this.main.deselect.main.classList.add(this.classes.hide);
            else this.main.deselect.main.classList.remove(this.classes.hide);
        }
        renderMultipleValues() {
            let currentNodes = this.main.values.childNodes;
            let selectedOptions = this.store.filter((opt)=>{
                return opt.selected && opt.display;
            }, false);
            if (selectedOptions.length === 0) {
                this.main.values.innerHTML = this.placeholder().outerHTML;
                return;
            } else {
                const placeholder = this.main.values.querySelector('.' + this.classes.placeholder);
                if (placeholder) placeholder.remove();
            }
            if (selectedOptions.length > this.settings.maxValuesShown) {
                const singleValue = document.createElement('div');
                singleValue.classList.add(this.classes.max);
                singleValue.textContent = this.settings.maxValuesMessage.replace('{number}', selectedOptions.length.toString());
                this.main.values.innerHTML = singleValue.outerHTML;
                return;
            } else {
                const maxValuesMessage = this.main.values.querySelector('.' + this.classes.max);
                if (maxValuesMessage) maxValuesMessage.remove();
            }
            if (this.settings.keepOrder) selectedOptions = this.store.selectedOrderOptions(selectedOptions);
            let removeNodes = [];
            for(let i = 0; i < currentNodes.length; i++){
                const node = currentNodes[i];
                const id = node.getAttribute('data-id');
                if (id) {
                    const found = selectedOptions.filter((opt)=>{
                        return opt.id === id;
                    }, false);
                    if (!found.length) removeNodes.push(node);
                }
            }
            for (const n of removeNodes){
                n.classList.add(this.classes.valueOut);
                setTimeout(()=>{
                    if (this.main.values.hasChildNodes() && this.main.values.contains(n)) this.main.values.removeChild(n);
                }, 100);
            }
            currentNodes = this.main.values.childNodes;
            for(let d = 0; d < selectedOptions.length; d++){
                let shouldAdd = true;
                for(let i = 0; i < currentNodes.length; i++)if (selectedOptions[d].id === String(currentNodes[i].dataset.id)) shouldAdd = false;
                if (shouldAdd) {
                    if (this.settings.keepOrder) this.main.values.appendChild(this.multipleValue(selectedOptions[d]));
                    else {
                        if (currentNodes.length === 0) this.main.values.appendChild(this.multipleValue(selectedOptions[d]));
                        else if (d === 0) this.main.values.insertBefore(this.multipleValue(selectedOptions[d]), currentNodes[d]);
                        else currentNodes[d - 1].insertAdjacentElement('afterend', this.multipleValue(selectedOptions[d]));
                    }
                }
            }
        }
        multipleValue(option) {
            const value = document.createElement('div');
            value.classList.add(this.classes.value);
            value.dataset.id = option.id;
            const text = document.createElement('div');
            text.classList.add(this.classes.valueText);
            text.textContent = option.text;
            value.appendChild(text);
            if (!option.mandatory) {
                const deleteDiv = document.createElement('div');
                deleteDiv.classList.add(this.classes.valueDelete);
                deleteDiv.onclick = (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    if (this.settings.disabled) return;
                    let shouldDelete = true;
                    const before = this.store.getSelectedOptions();
                    const after = before.filter((o)=>{
                        return o.selected && o.id !== option.id;
                    }, true);
                    if (this.settings.minSelected && after.length < this.settings.minSelected) return;
                    if (this.callbacks.beforeChange) shouldDelete = this.callbacks.beforeChange(after, before) === true;
                    if (shouldDelete) {
                        let selectedIds = [];
                        for (const o of after){
                            if (o instanceof Optgroup) for (const c of o.options)selectedIds.push(c.id);
                            if (o instanceof Option) selectedIds.push(o.id);
                        }
                        this.callbacks.setSelected(selectedIds, false);
                        if (this.settings.closeOnSelect) this.callbacks.close();
                        if (this.callbacks.afterChange) this.callbacks.afterChange(after);
                        this.updateDeselectAll();
                    }
                };
                const deleteSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                deleteSvg.setAttribute('viewBox', '0 0 100 100');
                const deletePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                deletePath.setAttribute('d', this.classes.optionDelete);
                deleteSvg.appendChild(deletePath);
                deleteDiv.appendChild(deleteSvg);
                value.appendChild(deleteDiv);
            }
            return value;
        }
        contentDiv() {
            const main = document.createElement('div');
            main.dataset.id = this.settings.id;
            const search = this.searchDiv();
            main.appendChild(search.main);
            const list = this.listDiv();
            main.appendChild(list);
            return {
                main: main,
                search: search,
                list: list
            };
        }
        moveContent() {
            if (this.settings.contentPosition === 'relative') {
                this.moveContentBelow();
                return;
            }
            if (this.settings.openPosition === 'down') {
                this.moveContentBelow();
                return;
            } else if (this.settings.openPosition === 'up') {
                this.moveContentAbove();
                return;
            }
            if (this.putContent() === 'up') this.moveContentAbove();
            else this.moveContentBelow();
        }
        searchDiv() {
            const main = document.createElement('div');
            const input = document.createElement('input');
            const addable = document.createElement('div');
            main.classList.add(this.classes.search);
            const searchReturn = {
                main,
                input
            };
            if (!this.settings.showSearch) {
                main.classList.add(this.classes.hide);
                input.readOnly = true;
            }
            input.type = 'search';
            input.placeholder = this.settings.searchPlaceholder;
            input.tabIndex = -1;
            input.setAttribute('aria-label', this.settings.searchPlaceholder);
            input.setAttribute('autocapitalize', 'off');
            input.setAttribute('autocomplete', 'off');
            input.setAttribute('autocorrect', 'off');
            input.oninput = debounce((e)=>{
                this.callbacks.search(e.target.value);
            }, 100);
            input.onkeydown = (e)=>{
                switch(e.key){
                    case 'ArrowUp':
                    case 'ArrowDown':
                        e.key === 'ArrowDown' ? this.highlight('down') : this.highlight('up');
                        return false;
                    case 'Tab':
                        this.callbacks.close();
                        return true;
                    case 'Escape':
                        this.callbacks.close();
                        return false;
                    case ' ':
                        const highlighted = this.content.list.querySelector('.' + this.classes.highlighted);
                        if (highlighted) {
                            highlighted.click();
                            return false;
                        }
                        return true;
                    case 'Enter':
                        if (this.callbacks.addable) {
                            addable.click();
                            return false;
                        } else {
                            const highlighted = this.content.list.querySelector('.' + this.classes.highlighted);
                            if (highlighted) {
                                highlighted.click();
                                return false;
                            }
                        }
                        return true;
                }
                return true;
            };
            main.appendChild(input);
            if (this.callbacks.addable) {
                addable.classList.add(this.classes.addable);
                const plus = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                plus.setAttribute('viewBox', '0 0 100 100');
                const plusPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                plusPath.setAttribute('d', this.classes.addablePath);
                plus.appendChild(plusPath);
                addable.appendChild(plus);
                addable.onclick = (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    if (!this.callbacks.addable) return;
                    const inputValue = this.content.search.input.value.trim();
                    if (inputValue === '') {
                        this.content.search.input.focus();
                        return;
                    }
                    const runFinish = (oo)=>{
                        let newOption = new Option(oo);
                        this.callbacks.addOption(newOption);
                        if (this.settings.isMultiple) {
                            let ids = this.store.getSelected();
                            ids.push(newOption.id);
                            this.callbacks.setSelected(ids, true);
                        } else this.callbacks.setSelected([
                            newOption.id
                        ], true);
                        this.callbacks.search('');
                        if (this.settings.closeOnSelect) setTimeout(()=>{
                            this.callbacks.close();
                        }, 100);
                    };
                    const addableValue = this.callbacks.addable(inputValue);
                    if (addableValue === false || addableValue === undefined || addableValue === null) return;
                    if (addableValue instanceof Promise) addableValue.then((value)=>{
                        if (typeof value === 'string') runFinish({
                            text: value,
                            value: value
                        });
                        else if (addableValue instanceof Error) this.renderError(addableValue.message);
                        else runFinish(value);
                    });
                    else if (typeof addableValue === 'string') runFinish({
                        text: addableValue,
                        value: addableValue
                    });
                    else if (addableValue instanceof Error) this.renderError(addableValue.message);
                    else runFinish(addableValue);
                    return;
                };
                main.appendChild(addable);
                searchReturn.addable = {
                    main: addable,
                    svg: plus,
                    path: plusPath
                };
            }
            return searchReturn;
        }
        searchFocus() {
            this.content.search.input.focus();
        }
        getOptions(notPlaceholder = false, notDisabled = false, notHidden = false) {
            let query = '.' + this.classes.option;
            if (notPlaceholder) query += ':not(.' + this.classes.placeholder + ')';
            if (notDisabled) query += ':not(.' + this.classes.disabled + ')';
            if (notHidden) query += ':not(.' + this.classes.hide + ')';
            return Array.from(this.content.list.querySelectorAll(query));
        }
        highlight(dir) {
            const options = this.getOptions(true, true, true);
            if (options.length === 0) return;
            if (options.length === 1) {
                if (!options[0].classList.contains(this.classes.highlighted)) {
                    options[0].classList.add(this.classes.highlighted);
                    return;
                }
            }
            let highlighted = false;
            for (const o of options)if (o.classList.contains(this.classes.highlighted)) highlighted = true;
            if (!highlighted) {
                for (const o of options)if (o.classList.contains(this.classes.selected)) {
                    o.classList.add(this.classes.highlighted);
                    break;
                }
            }
            for(let i = 0; i < options.length; i++)if (options[i].classList.contains(this.classes.highlighted)) {
                const prevOption = options[i];
                prevOption.classList.remove(this.classes.highlighted);
                const prevParent = prevOption.parentElement;
                if (prevParent && prevParent.classList.contains(this.classes.open)) {
                    const optgroupLabel = prevParent.querySelector('.' + this.classes.optgroupLabel);
                    if (optgroupLabel) optgroupLabel.click();
                }
                let selectOption = options[dir === 'down' ? i + 1 < options.length ? i + 1 : 0 : i - 1 >= 0 ? i - 1 : options.length - 1];
                selectOption.classList.add(this.classes.highlighted);
                this.ensureElementInView(this.content.list, selectOption);
                const selectParent = selectOption.parentElement;
                if (selectParent && selectParent.classList.contains(this.classes.close)) {
                    const optgroupLabel = selectParent.querySelector('.' + this.classes.optgroupLabel);
                    if (optgroupLabel) optgroupLabel.click();
                }
                return;
            }
            options[dir === 'down' ? 0 : options.length - 1].classList.add(this.classes.highlighted);
            this.ensureElementInView(this.content.list, options[dir === 'down' ? 0 : options.length - 1]);
        }
        listDiv() {
            const options = document.createElement('div');
            options.classList.add(this.classes.list);
            return options;
        }
        renderError(error) {
            this.content.list.innerHTML = '';
            const errorDiv = document.createElement('div');
            errorDiv.classList.add(this.classes.error);
            errorDiv.textContent = error;
            this.content.list.appendChild(errorDiv);
        }
        renderSearching() {
            this.content.list.innerHTML = '';
            const searchingDiv = document.createElement('div');
            searchingDiv.classList.add(this.classes.searching);
            searchingDiv.textContent = this.settings.searchingText;
            this.content.list.appendChild(searchingDiv);
        }
        renderOptions(data) {
            this.content.list.innerHTML = '';
            if (data.length === 0) {
                const noResults = document.createElement('div');
                noResults.classList.add(this.classes.search);
                if (this.callbacks.addable) noResults.innerHTML = this.settings.addableText.replace('{value}', this.content.search.input.value);
                else noResults.innerHTML = this.settings.searchText;
                this.content.list.appendChild(noResults);
                return;
            }
            if (this.settings.allowDeselect && !this.settings.isMultiple) {
                const placeholderOption = this.store.filter((o)=>o.placeholder, false);
                if (!placeholderOption.length) this.store.addOption(new Option({
                    text: '',
                    value: '',
                    selected: false,
                    placeholder: true
                }), true);
            }
            for (const d of data){
                if (d instanceof Optgroup) {
                    const optgroupEl = document.createElement('div');
                    optgroupEl.classList.add(this.classes.optgroup);
                    const optgroupLabel = document.createElement('div');
                    optgroupLabel.classList.add(this.classes.optgroupLabel);
                    optgroupEl.appendChild(optgroupLabel);
                    const optgroupLabelText = document.createElement('div');
                    optgroupLabelText.classList.add(this.classes.optgroupLabelText);
                    optgroupLabelText.textContent = d.label;
                    optgroupLabel.appendChild(optgroupLabelText);
                    const optgroupActions = document.createElement('div');
                    optgroupActions.classList.add(this.classes.optgroupActions);
                    optgroupLabel.appendChild(optgroupActions);
                    if (this.settings.isMultiple && d.selectAll) {
                        const selectAll = document.createElement('div');
                        selectAll.classList.add(this.classes.optgroupSelectAll);
                        let allSelected = true;
                        for (const o of d.options)if (!o.selected) {
                            allSelected = false;
                            break;
                        }
                        if (allSelected) selectAll.classList.add(this.classes.selected);
                        const selectAllText = document.createElement('span');
                        selectAllText.textContent = d.selectAllText;
                        selectAll.appendChild(selectAllText);
                        const selectAllSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        selectAllSvg.setAttribute('viewBox', '0 0 100 100');
                        selectAll.appendChild(selectAllSvg);
                        const selectAllBox = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        selectAllBox.setAttribute('d', this.classes.optgroupSelectAllBox);
                        selectAllSvg.appendChild(selectAllBox);
                        const selectAllCheck = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        selectAllCheck.setAttribute('d', this.classes.optgroupSelectAllCheck);
                        selectAllSvg.appendChild(selectAllCheck);
                        selectAll.addEventListener('click', (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            const currentSelected = this.store.getSelected();
                            if (allSelected) {
                                const newSelected = currentSelected.filter((s)=>{
                                    for (const o of d.options){
                                        if (s === o.id) return false;
                                    }
                                    return true;
                                });
                                this.callbacks.setSelected(newSelected, true);
                                return;
                            } else {
                                const newSelected = currentSelected.concat(d.options.map((o)=>o.id));
                                for (const o of d.options)if (!this.store.getOptionByID(o.id)) this.callbacks.addOption(o);
                                this.callbacks.setSelected(newSelected, true);
                                return;
                            }
                        });
                        optgroupActions.appendChild(selectAll);
                    }
                    if (d.closable !== 'off') {
                        const optgroupClosable = document.createElement('div');
                        optgroupClosable.classList.add(this.classes.optgroupClosable);
                        const optgroupClosableSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        optgroupClosableSvg.setAttribute('viewBox', '0 0 100 100');
                        optgroupClosableSvg.classList.add(this.classes.arrow);
                        optgroupClosable.appendChild(optgroupClosableSvg);
                        const optgroupClosableArrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        optgroupClosableSvg.appendChild(optgroupClosableArrow);
                        if (d.options.some((o)=>o.selected) || this.content.search.input.value.trim() !== '') {
                            optgroupClosable.classList.add(this.classes.open);
                            optgroupClosableArrow.setAttribute('d', this.classes.arrowOpen);
                        } else if (d.closable === 'open') {
                            optgroupEl.classList.add(this.classes.open);
                            optgroupClosableArrow.setAttribute('d', this.classes.arrowOpen);
                        } else if (d.closable === 'close') {
                            optgroupEl.classList.add(this.classes.close);
                            optgroupClosableArrow.setAttribute('d', this.classes.arrowClose);
                        }
                        optgroupLabel.addEventListener('click', (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            if (optgroupEl.classList.contains(this.classes.close)) {
                                optgroupEl.classList.remove(this.classes.close);
                                optgroupEl.classList.add(this.classes.open);
                                optgroupClosableArrow.setAttribute('d', this.classes.arrowOpen);
                            } else {
                                optgroupEl.classList.remove(this.classes.open);
                                optgroupEl.classList.add(this.classes.close);
                                optgroupClosableArrow.setAttribute('d', this.classes.arrowClose);
                            }
                        });
                        optgroupActions.appendChild(optgroupClosable);
                    }
                    optgroupEl.appendChild(optgroupLabel);
                    for (const o of d.options)optgroupEl.appendChild(this.option(o));
                    this.content.list.appendChild(optgroupEl);
                }
                if (d instanceof Option) this.content.list.appendChild(this.option(d));
            }
        }
        option(option) {
            if (option.placeholder) {
                const placeholder = document.createElement('div');
                placeholder.classList.add(this.classes.option);
                placeholder.classList.add(this.classes.hide);
                return placeholder;
            }
            const optionEl = document.createElement('div');
            optionEl.dataset.id = option.id;
            optionEl.classList.add(this.classes.option);
            optionEl.setAttribute('role', 'option');
            if (option.class) option.class.split(' ').forEach((dataClass)=>{
                optionEl.classList.add(dataClass);
            });
            if (option.style) optionEl.style.cssText = option.style;
            if (this.settings.searchHighlight && this.content.search.input.value.trim() !== '') optionEl.innerHTML = this.highlightText(option.html !== '' ? option.html : option.text, this.content.search.input.value, this.classes.searchHighlighter);
            else if (option.html !== '') optionEl.innerHTML = option.html;
            else optionEl.textContent = option.text;
            if (this.settings.showOptionTooltips && optionEl.textContent) optionEl.setAttribute('title', optionEl.textContent);
            if (!option.display) optionEl.classList.add(this.classes.hide);
            if (option.disabled) optionEl.classList.add(this.classes.disabled);
            if (option.selected && this.settings.hideSelected) optionEl.classList.add(this.classes.hide);
            if (option.selected) {
                optionEl.classList.add(this.classes.selected);
                optionEl.setAttribute('aria-selected', 'true');
                this.main.main.setAttribute('aria-activedescendant', optionEl.id);
            } else {
                optionEl.classList.remove(this.classes.selected);
                optionEl.setAttribute('aria-selected', 'false');
            }
            optionEl.addEventListener('click', (e)=>{
                e.preventDefault();
                e.stopPropagation();
                const selectedOptions = this.store.getSelected();
                const element = e.currentTarget;
                const elementID = String(element.dataset.id);
                if (option.disabled || option.selected && !this.settings.allowDeselect) return;
                if (this.settings.isMultiple && this.settings.maxSelected <= selectedOptions.length && !option.selected || this.settings.isMultiple && this.settings.minSelected >= selectedOptions.length && option.selected) return;
                let shouldUpdate = false;
                const before = this.store.getSelectedOptions();
                let after = [];
                if (this.settings.isMultiple) {
                    if (option.selected) after = before.filter((o)=>o.id !== elementID);
                    else after = before.concat(option);
                }
                if (!this.settings.isMultiple) {
                    if (option.selected) after = [];
                    else after = [
                        option
                    ];
                }
                if (!this.callbacks.beforeChange) shouldUpdate = true;
                if (this.callbacks.beforeChange) {
                    if (this.callbacks.beforeChange(after, before) === false) shouldUpdate = false;
                    else shouldUpdate = true;
                }
                if (shouldUpdate) {
                    if (!this.store.getOptionByID(elementID)) this.callbacks.addOption(option);
                    this.callbacks.setSelected(after.map((o)=>o.id), false);
                    if (this.settings.closeOnSelect) this.callbacks.close();
                    if (this.callbacks.afterChange) this.callbacks.afterChange(after);
                }
            });
            return optionEl;
        }
        destroy() {
            this.main.main.remove();
            this.content.main.remove();
        }
        highlightText(str, search, className) {
            let completedString = str;
            const regex = new RegExp('(?![^<]*>)(' + search.trim() + ')(?![^<]*>[^<>]*</)', 'i');
            if (!str.match(regex)) return str;
            const matchStartPosition = str.match(regex).index;
            const matchEndPosition = matchStartPosition + str.match(regex)[0].toString().length;
            const originalTextFoundByRegex = str.substring(matchStartPosition, matchEndPosition);
            completedString = completedString.replace(regex, `<mark class="${className}">${originalTextFoundByRegex}</mark>`);
            return completedString;
        }
        moveContentAbove() {
            const mainHeight = this.main.main.offsetHeight;
            const contentHeight = this.content.main.offsetHeight;
            this.main.main.classList.remove(this.classes.openBelow);
            this.main.main.classList.add(this.classes.openAbove);
            this.content.main.classList.remove(this.classes.openBelow);
            this.content.main.classList.add(this.classes.openAbove);
            const containerRect = this.main.main.getBoundingClientRect();
            this.content.main.style.margin = '-' + (mainHeight + contentHeight - 1) + 'px 0px 0px 0px';
            this.content.main.style.top = containerRect.top + containerRect.height + (this.settings.contentPosition === 'fixed' ? 0 : window.scrollY) + 'px';
            this.content.main.style.left = containerRect.left + (this.settings.contentPosition === 'fixed' ? 0 : window.scrollX) + 'px';
            this.content.main.style.width = containerRect.width + 'px';
        }
        moveContentBelow() {
            this.main.main.classList.remove(this.classes.openAbove);
            this.main.main.classList.add(this.classes.openBelow);
            this.content.main.classList.remove(this.classes.openAbove);
            this.content.main.classList.add(this.classes.openBelow);
            const containerRect = this.main.main.getBoundingClientRect();
            this.content.main.style.margin = '-1px 0px 0px 0px';
            if (this.settings.contentPosition !== 'relative') {
                this.content.main.style.top = containerRect.top + containerRect.height + (this.settings.contentPosition === 'fixed' ? 0 : window.scrollY) + 'px';
                this.content.main.style.left = containerRect.left + (this.settings.contentPosition === 'fixed' ? 0 : window.scrollX) + 'px';
                this.content.main.style.width = containerRect.width + 'px';
            }
        }
        ensureElementInView(container, element) {
            const cTop = container.scrollTop + container.offsetTop;
            const cBottom = cTop + container.clientHeight;
            const eTop = element.offsetTop;
            const eBottom = eTop + element.clientHeight;
            if (eTop < cTop) container.scrollTop -= cTop - eTop;
            else if (eBottom > cBottom) container.scrollTop += eBottom - cBottom;
        }
        putContent() {
            const mainHeight = this.main.main.offsetHeight;
            const mainRect = this.main.main.getBoundingClientRect();
            const contentHeight = this.content.main.offsetHeight;
            const spaceBelow = window.innerHeight - (mainRect.top + mainHeight);
            if (spaceBelow <= contentHeight) {
                if (mainRect.top > contentHeight) return 'up';
                else return 'down';
            }
            return 'down';
        }
        updateDeselectAll() {
            if (!this.store || !this.settings) return;
            const selected = this.store.getSelectedOptions();
            const hasSelectedItems = selected && selected.length > 0;
            const isMultiple = this.settings.isMultiple;
            const allowDeselect = this.settings.allowDeselect;
            const deselectButton = this.main.deselect.main;
            const hideClass = this.classes.hide;
            if (allowDeselect && !(isMultiple && !hasSelectedItems)) deselectButton.classList.remove(hideClass);
            else deselectButton.classList.add(hideClass);
        }
    }
    class Select {
        constructor(select){
            this.listen = false;
            this.observer = null;
            this.select = select;
            this.valueChange = this.valueChange.bind(this);
            this.select.addEventListener('change', this.valueChange, {
                passive: true
            });
            this.observer = new MutationObserver(this.observeCall.bind(this));
            this.changeListen(true);
        }
        enable() {
            this.select.disabled = false;
        }
        disable() {
            this.select.disabled = true;
        }
        hideUI() {
            this.select.tabIndex = -1;
            this.select.style.display = 'none';
            this.select.setAttribute('aria-hidden', 'true');
        }
        showUI() {
            this.select.removeAttribute('tabindex');
            this.select.style.display = '';
            this.select.removeAttribute('aria-hidden');
        }
        changeListen(listen) {
            this.listen = listen;
            if (listen) {
                if (this.observer) this.observer.observe(this.select, {
                    subtree: true,
                    childList: true,
                    attributes: true
                });
            }
            if (!listen) {
                if (this.observer) this.observer.disconnect();
            }
        }
        valueChange(ev) {
            if (this.listen && this.onValueChange) this.onValueChange(this.getSelectedOptions());
            return true;
        }
        observeCall(mutations) {
            if (!this.listen) return;
            let classChanged = false;
            let disabledChanged = false;
            let optgroupOptionChanged = false;
            for (const m of mutations){
                if (m.target === this.select) {
                    if (m.attributeName === 'disabled') disabledChanged = true;
                    if (m.attributeName === 'class') classChanged = true;
                    if (m.type === 'childList') {
                        for (const n of m.addedNodes)if (n.nodeName === 'OPTION' && n.value === this.select.value) {
                            this.select.dispatchEvent(new Event('change'));
                            break;
                        }
                        optgroupOptionChanged = true;
                    }
                }
                if (m.target.nodeName === 'OPTGROUP' || m.target.nodeName === 'OPTION') optgroupOptionChanged = true;
            }
            if (classChanged && this.onClassChange) this.onClassChange(this.select.className.split(' '));
            if (disabledChanged && this.onDisabledChange) {
                this.changeListen(false);
                this.onDisabledChange(this.select.disabled);
                this.changeListen(true);
            }
            if (optgroupOptionChanged && this.onOptionsChange) {
                this.changeListen(false);
                this.onOptionsChange(this.getData());
                this.changeListen(true);
            }
        }
        getData() {
            let data = [];
            const nodes = this.select.childNodes;
            for (const n of nodes){
                if (n.nodeName === 'OPTGROUP') data.push(this.getDataFromOptgroup(n));
                if (n.nodeName === 'OPTION') data.push(this.getDataFromOption(n));
            }
            return data;
        }
        getDataFromOptgroup(optgroup) {
            let data = {
                id: optgroup.id,
                label: optgroup.label,
                selectAll: optgroup.dataset ? optgroup.dataset.selectall === 'true' : false,
                selectAllText: optgroup.dataset ? optgroup.dataset.selectalltext : 'Select all',
                closable: optgroup.dataset ? optgroup.dataset.closable : 'off',
                options: []
            };
            const options = optgroup.childNodes;
            for (const o of options)if (o.nodeName === 'OPTION') data.options.push(this.getDataFromOption(o));
            return data;
        }
        getDataFromOption(option) {
            return {
                id: option.id,
                value: option.value,
                text: option.text,
                html: option.dataset && option.dataset.html ? option.dataset.html : '',
                selected: option.selected,
                display: option.style.display !== 'none',
                disabled: option.disabled,
                mandatory: option.dataset ? option.dataset.mandatory === 'true' : false,
                placeholder: option.dataset.placeholder === 'true',
                class: option.className,
                style: option.style.cssText,
                data: option.dataset
            };
        }
        getSelectedOptions() {
            let options = [];
            const opts = this.select.childNodes;
            for (const o of opts){
                if (o.nodeName === 'OPTGROUP') {
                    const optgroupOptions = o.childNodes;
                    for (const oo of optgroupOptions)if (oo.nodeName === 'OPTION') {
                        const option = oo;
                        if (option.selected) options.push(this.getDataFromOption(option));
                    }
                }
                if (o.nodeName === 'OPTION') {
                    const option = o;
                    if (option.selected) options.push(this.getDataFromOption(option));
                }
            }
            return options;
        }
        getSelectedValues() {
            return this.getSelectedOptions().map((option)=>option.value);
        }
        setSelected(ids) {
            this.changeListen(false);
            const options = this.select.childNodes;
            for (const o of options){
                if (o.nodeName === 'OPTGROUP') {
                    const optgroup = o;
                    const optgroupOptions = optgroup.childNodes;
                    for (const oo of optgroupOptions)if (oo.nodeName === 'OPTION') {
                        const option = oo;
                        option.selected = ids.includes(option.id);
                    }
                }
                if (o.nodeName === 'OPTION') {
                    const option = o;
                    option.selected = ids.includes(option.id);
                }
            }
            this.changeListen(true);
        }
        setSelectedByValue(values) {
            this.changeListen(false);
            const options = this.select.childNodes;
            for (const o of options){
                if (o.nodeName === 'OPTGROUP') {
                    const optgroup = o;
                    const optgroupOptions = optgroup.childNodes;
                    for (const oo of optgroupOptions)if (oo.nodeName === 'OPTION') {
                        const option = oo;
                        option.selected = values.includes(option.value);
                    }
                }
                if (o.nodeName === 'OPTION') {
                    const option = o;
                    option.selected = values.includes(option.value);
                }
            }
            this.changeListen(true);
        }
        updateSelect(id, style, classes) {
            this.changeListen(false);
            if (id) this.select.dataset.id = id;
            if (style) this.select.style.cssText = style;
            if (classes) {
                this.select.className = '';
                classes.forEach((c)=>{
                    if (c.trim() !== '') this.select.classList.add(c.trim());
                });
            }
            this.changeListen(true);
        }
        updateOptions(data) {
            this.changeListen(false);
            this.select.innerHTML = '';
            for (const d of data){
                if (d instanceof Optgroup) this.select.appendChild(this.createOptgroup(d));
                if (d instanceof Option) this.select.appendChild(this.createOption(d));
            }
            this.select.dispatchEvent(new Event('change', {
                bubbles: true
            }));
            this.changeListen(true);
        }
        createOptgroup(optgroup) {
            const optgroupEl = document.createElement('optgroup');
            optgroupEl.id = optgroup.id;
            optgroupEl.label = optgroup.label;
            if (optgroup.selectAll) optgroupEl.dataset.selectAll = 'true';
            if (optgroup.closable !== 'off') optgroupEl.dataset.closable = optgroup.closable;
            if (optgroup.options) for (const o of optgroup.options)optgroupEl.appendChild(this.createOption(o));
            return optgroupEl;
        }
        createOption(info) {
            const optionEl = document.createElement('option');
            optionEl.id = info.id;
            optionEl.value = info.value;
            optionEl.textContent = info.text;
            if (info.html !== '') optionEl.setAttribute('data-html', info.html);
            if (info.selected) optionEl.selected = info.selected;
            if (info.disabled) optionEl.disabled = true;
            if (!info.display) optionEl.style.display = 'none';
            if (info.placeholder) optionEl.setAttribute('data-placeholder', 'true');
            if (info.mandatory) optionEl.setAttribute('data-mandatory', 'true');
            if (info.class) info.class.split(' ').forEach((optionClass)=>{
                optionEl.classList.add(optionClass);
            });
            if (info.data && typeof info.data === 'object') Object.keys(info.data).forEach((key)=>{
                optionEl.setAttribute('data-' + kebabCase(key), info.data[key]);
            });
            return optionEl;
        }
        destroy() {
            this.changeListen(false);
            this.select.removeEventListener('change', this.valueChange);
            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }
            delete this.select.dataset.id;
            this.showUI();
        }
    }
    class Settings {
        constructor(settings){
            this.id = '';
            this.style = '';
            this.class = [];
            this.isMultiple = false;
            this.isOpen = false;
            this.isFullOpen = false;
            this.intervalMove = null;
            if (!settings) settings = {};
            this.id = 'ss-' + generateID();
            this.style = settings.style || '';
            this.class = settings.class || [];
            this.disabled = settings.disabled !== undefined ? settings.disabled : false;
            this.alwaysOpen = settings.alwaysOpen !== undefined ? settings.alwaysOpen : false;
            this.showSearch = settings.showSearch !== undefined ? settings.showSearch : true;
            this.focusSearch = settings.focusSearch !== undefined ? settings.focusSearch : true;
            this.ariaLabel = settings.ariaLabel || 'Combobox';
            this.searchPlaceholder = settings.searchPlaceholder || 'Search';
            this.searchText = settings.searchText || 'No Results';
            this.searchingText = settings.searchingText || 'Searching...';
            this.searchHighlight = settings.searchHighlight !== undefined ? settings.searchHighlight : false;
            this.closeOnSelect = settings.closeOnSelect !== undefined ? settings.closeOnSelect : true;
            this.contentLocation = settings.contentLocation || document.body;
            this.contentPosition = settings.contentPosition || 'absolute';
            this.openPosition = settings.openPosition || 'auto';
            this.placeholderText = settings.placeholderText !== undefined ? settings.placeholderText : 'Select Value';
            this.allowDeselect = settings.allowDeselect !== undefined ? settings.allowDeselect : false;
            this.hideSelected = settings.hideSelected !== undefined ? settings.hideSelected : false;
            this.keepOrder = settings.keepOrder !== undefined ? settings.keepOrder : false;
            this.showOptionTooltips = settings.showOptionTooltips !== undefined ? settings.showOptionTooltips : false;
            this.minSelected = settings.minSelected || 0;
            this.maxSelected = settings.maxSelected || 1000;
            this.timeoutDelay = settings.timeoutDelay || 200;
            this.maxValuesShown = settings.maxValuesShown || 20;
            this.maxValuesMessage = settings.maxValuesMessage || '{number} selected';
            this.addableText = settings.addableText || 'Press "Enter" to add {value}';
        }
    }
    class SlimSelect {
        constructor(config){
            var _a;
            this.events = {
                search: undefined,
                searchFilter: (opt, search)=>{
                    return opt.text.toLowerCase().indexOf(search.toLowerCase()) !== -1;
                },
                addable: undefined,
                beforeChange: undefined,
                afterChange: undefined,
                beforeOpen: undefined,
                afterOpen: undefined,
                beforeClose: undefined,
                afterClose: undefined
            };
            this.windowResize = debounce(()=>{
                if (!this.settings.isOpen && !this.settings.isFullOpen) return;
                this.render.moveContent();
            });
            this.windowScroll = debounce(()=>{
                if (!this.settings.isOpen && !this.settings.isFullOpen) return;
                this.render.moveContent();
            });
            this.documentClick = (e)=>{
                if (!this.settings.isOpen) return;
                if (e.target && !hasClassInTree(e.target, this.settings.id)) this.close(e.type);
            };
            this.windowVisibilityChange = ()=>{
                if (document.hidden) this.close();
            };
            this.selectEl = typeof config.select === 'string' ? document.querySelector(config.select) : config.select;
            if (!this.selectEl) {
                if (config.events && config.events.error) config.events.error(new Error('Could not find select element'));
                return;
            }
            if (this.selectEl.tagName !== 'SELECT') {
                if (config.events && config.events.error) config.events.error(new Error('Element isnt of type select'));
                return;
            }
            if (this.selectEl.dataset.ssid) this.destroy();
            this.settings = new Settings(config.settings);
            this.cssClasses = new CssClasses(config.cssClasses);
            const debounceEvents = [
                'afterChange',
                'beforeOpen',
                'afterOpen',
                'beforeClose',
                'afterClose'
            ];
            for(const key in config.events){
                if (!config.events.hasOwnProperty(key)) continue;
                if (debounceEvents.indexOf(key) !== -1) this.events[key] = debounce(config.events[key], 100);
                else this.events[key] = config.events[key];
            }
            this.settings.disabled = ((_a = config.settings) === null || _a === void 0 ? void 0 : _a.disabled) ? config.settings.disabled : this.selectEl.disabled;
            this.settings.isMultiple = this.selectEl.multiple;
            this.settings.style = this.selectEl.style.cssText;
            this.settings.class = this.selectEl.className.split(' ');
            this.select = new Select(this.selectEl);
            this.select.updateSelect(this.settings.id, this.settings.style, this.settings.class);
            this.select.hideUI();
            this.select.onValueChange = (options)=>{
                this.setSelected(options.map((option)=>option.id));
            };
            this.select.onClassChange = (classes)=>{
                this.settings.class = classes;
                this.render.updateClassStyles();
            };
            this.select.onDisabledChange = (disabled)=>{
                if (disabled) this.disable();
                else this.enable();
            };
            this.select.onOptionsChange = (data)=>{
                this.setData(data);
            };
            this.store = new Store(this.settings.isMultiple ? 'multiple' : 'single', config.data ? config.data : this.select.getData());
            if (config.data) this.select.updateOptions(this.store.getData());
            const renderCallbacks = {
                open: this.open.bind(this),
                close: this.close.bind(this),
                addable: this.events.addable ? this.events.addable : undefined,
                setSelected: this.setSelected.bind(this),
                addOption: this.addOption.bind(this),
                search: this.search.bind(this),
                beforeChange: this.events.beforeChange,
                afterChange: this.events.afterChange
            };
            this.render = new Render(this.settings, this.cssClasses, this.store, renderCallbacks);
            this.render.renderValues();
            this.render.renderOptions(this.store.getData());
            const selectAriaLabel = this.selectEl.getAttribute('aria-label');
            const selectAriaLabelledBy = this.selectEl.getAttribute('aria-labelledby');
            if (selectAriaLabel) this.render.main.main.setAttribute('aria-label', selectAriaLabel);
            else if (selectAriaLabelledBy) this.render.main.main.setAttribute('aria-labelledby', selectAriaLabelledBy);
            if (this.selectEl.parentNode) this.selectEl.parentNode.insertBefore(this.render.main.main, this.selectEl.nextSibling);
            window.addEventListener('resize', this.windowResize, false);
            if (this.settings.openPosition === 'auto') window.addEventListener('scroll', this.windowScroll, false);
            document.addEventListener('visibilitychange', this.windowVisibilityChange);
            if (this.settings.disabled) this.disable();
            if (this.settings.alwaysOpen) this.open();
            this.selectEl.slim = this;
        }
        enable() {
            this.settings.disabled = false;
            this.select.enable();
            this.render.enable();
        }
        disable() {
            this.settings.disabled = true;
            this.select.disable();
            this.render.disable();
        }
        getData() {
            return this.store.getData();
        }
        setData(data) {
            const selected = this.store.getSelected();
            const err = this.store.validateDataArray(data);
            if (err) {
                if (this.events.error) this.events.error(err);
                return;
            }
            this.store.setData(data);
            const dataClean = this.store.getData();
            this.select.updateOptions(dataClean);
            this.render.renderValues();
            this.render.renderOptions(dataClean);
            if (this.events.afterChange && !isEqual(selected, this.store.getSelected())) this.events.afterChange(this.store.getSelectedOptions());
        }
        getSelected() {
            let options = this.store.getSelectedOptions();
            if (this.settings.keepOrder) options = this.store.selectedOrderOptions(options);
            return options.map((option)=>option.value);
        }
        setSelected(values, runAfterChange = true) {
            const selected = this.store.getSelected();
            const options = this.store.getDataOptions();
            values = Array.isArray(values) ? values : [
                values
            ];
            const ids = [];
            for (const value of values){
                if (options.find((option)=>option.id == value)) {
                    ids.push(value);
                    continue;
                }
                for (const option of options.filter((option)=>option.value == value))ids.push(option.id);
            }
            this.store.setSelectedBy('id', ids);
            const data = this.store.getData();
            this.select.updateOptions(data);
            this.render.renderValues();
            if (this.render.content.search.input.value !== '') this.search(this.render.content.search.input.value);
            else this.render.renderOptions(data);
            if (runAfterChange && this.events.afterChange && !isEqual(selected, this.store.getSelected())) this.events.afterChange(this.store.getSelectedOptions());
        }
        addOption(option) {
            const selected = this.store.getSelected();
            if (!this.store.getDataOptions().some((o)=>{
                var _a;
                return o.value === ((_a = option.value) !== null && _a !== void 0 ? _a : option.text);
            })) this.store.addOption(option);
            const data = this.store.getData();
            this.select.updateOptions(data);
            this.render.renderValues();
            this.render.renderOptions(data);
            if (this.events.afterChange && !isEqual(selected, this.store.getSelected())) this.events.afterChange(this.store.getSelectedOptions());
        }
        open() {
            if (this.settings.disabled || this.settings.isOpen) return;
            if (this.events.beforeOpen) this.events.beforeOpen();
            this.render.open();
            if (this.settings.showSearch && this.settings.focusSearch) this.render.searchFocus();
            this.settings.isOpen = true;
            setTimeout(()=>{
                if (this.events.afterOpen) this.events.afterOpen();
                if (this.settings.isOpen) this.settings.isFullOpen = true;
                document.addEventListener('click', this.documentClick);
            }, this.settings.timeoutDelay);
            if (this.settings.contentPosition === 'absolute') {
                if (this.settings.intervalMove) clearInterval(this.settings.intervalMove);
                this.settings.intervalMove = setInterval(this.render.moveContent.bind(this.render), 500);
            }
        }
        close(eventType = null) {
            if (!this.settings.isOpen || this.settings.alwaysOpen) return;
            if (this.events.beforeClose) this.events.beforeClose();
            this.render.close();
            if (this.render.content.search.input.value !== '') this.search('');
            this.render.mainFocus(eventType);
            this.settings.isOpen = false;
            this.settings.isFullOpen = false;
            setTimeout(()=>{
                if (this.events.afterClose) this.events.afterClose();
                document.removeEventListener('click', this.documentClick);
            }, this.settings.timeoutDelay);
            if (this.settings.intervalMove) clearInterval(this.settings.intervalMove);
        }
        search(value) {
            if (this.render.content.search.input.value !== value) this.render.content.search.input.value = value;
            if (!this.events.search) {
                this.render.renderOptions(value === '' ? this.store.getData() : this.store.search(value, this.events.searchFilter));
                return;
            }
            this.render.renderSearching();
            const searchResp = this.events.search(value, this.store.getSelectedOptions());
            if (searchResp instanceof Promise) {
                searchResp.then((data)=>{
                    this.render.renderOptions(this.store.partialToFullData(data));
                }).catch((err)=>{
                    this.render.renderError(typeof err === 'string' ? err : err.message);
                });
                return;
            } else if (Array.isArray(searchResp)) this.render.renderOptions(this.store.partialToFullData(searchResp));
            else this.render.renderError('Search event must return a promise or an array of data');
        }
        destroy() {
            document.removeEventListener('click', this.documentClick);
            window.removeEventListener('resize', this.windowResize, false);
            if (this.settings.openPosition === 'auto') window.removeEventListener('scroll', this.windowScroll, false);
            document.removeEventListener('visibilitychange', this.windowVisibilityChange);
            this.store.setData([]);
            this.render.destroy();
            this.select.destroy();
        }
    }
    return SlimSelect;
});

},{}]},["iBiZV","frAPK"], "frAPK", "parcelRequire94c2")

//# sourceMappingURL=cat-page.642d09d0.js.map
