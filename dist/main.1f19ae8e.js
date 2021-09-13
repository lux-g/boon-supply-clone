// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/1_2c03dedc-7682-4230-b399-73c8e08a130e_348x.webp":[function(require,module,exports) {
module.exports = "/1_2c03dedc-7682-4230-b399-73c8e08a130e_348x.c0cb0eb0.webp";
},{}],"images/3_45347f99-6fe0-4f6e-aac1-10eb4e26124a_348x.webp":[function(require,module,exports) {
module.exports = "/3_45347f99-6fe0-4f6e-aac1-10eb4e26124a_348x.4dc57d7c.webp";
},{}],"images/gifting-featured-collection_8f42de05-a776-4366-9645-194eec1cb77a_400x.webp":[function(require,module,exports) {
module.exports = "/gifting-featured-collection_8f42de05-a776-4366-9645-194eec1cb77a_400x.9ac18969.webp";
},{}],"images/1_d6395417-ef46-4353-b423-53dec91fa749_348x.webp":[function(require,module,exports) {
module.exports = "/1_d6395417-ef46-4353-b423-53dec91fa749_348x.5b9bafd3.webp";
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _2c03dedc76824230B39973c8e08a130e_348x = _interopRequireDefault(require("./images/1_2c03dedc-7682-4230-b399-73c8e08a130e_348x.webp"));

var _45347f996fe04f6eAac110eb4e26124a_348x = _interopRequireDefault(require("./images/3_45347f99-6fe0-4f6e-aac1-10eb4e26124a_348x.webp"));

var _giftingFeaturedCollection_8f42de05A77643669645194eec1cb77a_400x = _interopRequireDefault(require("./images/gifting-featured-collection_8f42de05-a776-4366-9645-194eec1cb77a_400x.webp"));

var _d6395417Ef464353B42353dec91fa749_348x = _interopRequireDefault(require("./images/1_d6395417-ef46-4353-b423-53dec91fa749_348x.webp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navLinks = document.querySelectorAll('.link'); //NAVLINKS ADD AND REMOVE FUNCTIONS

var removeClass = function removeClass(target, classname) {
  target.classList.remove(classname);
};

var addClass = function addClass(target, classname) {
  target.classList.add(classname);
};

navLinks.forEach(function (link) {
  var shopLink = document.querySelector('.shop-link');
  var fundraiseLink = document.querySelector('.fundraise-link');
  var navMenuShop = document.querySelector('.nav-menu-shop');
  var navMenuFundraiser = document.querySelector('.nav-menu-fundraiser');
  var navContainer = document.querySelector('.nav-container');
  link.addEventListener('mouseenter', function (e) {
    if (e.target === shopLink) {
      //remove any class
      removeClass(navMenuFundraiser, 'open-nav-menu-shop'); //add classes

      addClass(navMenuShop, 'open-nav-menu-shop');
      addClass(navContainer, 'nav-container-background');
    }

    if (e.target === fundraiseLink) {
      //remove any class
      removeClass(navMenuShop, 'open-nav-menu-shop'); //add classes

      addClass(navMenuFundraiser, 'open-nav-menu-shop');
      addClass(navContainer, 'nav-container-background');
    }
  }); //EVENT LISTENER SHOP MOUSELEAVE

  navMenuShop.addEventListener('mouseleave', function () {
    removeClass(navMenuShop, 'open-nav-menu-shop');
    addClass(navContainer, 'nav-container-background');
  }); //EVENT LISTENER FUNDRAISER MOUSELEAVE

  navMenuFundraiser.addEventListener('mouseleave', function () {
    removeClass(navMenuFundraiser, 'open-nav-menu-shop');
    addClass(navContainer, 'nav-container-background');
  });
});
window.addEventListener('scroll', function () {
  if (scrollY >= 100) {
    document.querySelector('.nav-container').classList.add('nav-container-background');
  } else {
    document.querySelector('.nav-container').classList.remove('nav-container-background');
  }
});
var cardBtn = document.querySelectorAll('.card-btn');
var closeCard = document.querySelector('.close-btn');
var modal = document.querySelector('.modal');
var modalImg = document.querySelector('.modal-img');
var modalContainer = document.querySelector('.modal-container'); //IMAGES

cardBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    //console.log(e.currentTarget)
    modal.classList.add('handle-modal');
    modalContainer.classList.add('handle-modal');

    if (e.currentTarget === document.querySelector('.btn-one')) {
      modalImg.src = _2c03dedc76824230B39973c8e08a130e_348x.default;
    }

    if (e.currentTarget === document.querySelector('.btn-two')) {
      modalImg.src = _45347f996fe04f6eAac110eb4e26124a_348x.default;
    }

    if (e.currentTarget === document.querySelector('.btn-three')) {
      modalImg.src = _giftingFeaturedCollection_8f42de05A77643669645194eec1cb77a_400x.default;
    }

    if (e.currentTarget === document.querySelector('.btn-four')) {
      modalImg.src = _d6395417Ef464353B42353dec91fa749_348x.default;
    }
  });
});
closeCard.addEventListener('click', function () {
  modal.classList.remove('handle-modal');
  modalContainer.classList.remove('handle-modal');
});
window.addEventListener('click', function (e) {
  if (e.target === modalContainer) {
    modal.classList.remove('handle-modal');
    modalContainer.classList.remove('handle-modal');
  }
});
},{"./images/1_2c03dedc-7682-4230-b399-73c8e08a130e_348x.webp":"images/1_2c03dedc-7682-4230-b399-73c8e08a130e_348x.webp","./images/3_45347f99-6fe0-4f6e-aac1-10eb4e26124a_348x.webp":"images/3_45347f99-6fe0-4f6e-aac1-10eb4e26124a_348x.webp","./images/gifting-featured-collection_8f42de05-a776-4366-9645-194eec1cb77a_400x.webp":"images/gifting-featured-collection_8f42de05-a776-4366-9645-194eec1cb77a_400x.webp","./images/1_d6395417-ef46-4353-b423-53dec91fa749_348x.webp":"images/1_d6395417-ef46-4353-b423-53dec91fa749_348x.webp"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50750" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map