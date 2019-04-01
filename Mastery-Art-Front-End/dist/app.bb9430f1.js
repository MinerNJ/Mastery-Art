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
})({"../JS/utils/events/events-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function on(element, eventType, callback) {
  element.addEventListener(eventType, function (event) {
    return callback(event);
  });
}

var _default = {
  on: on
};
exports.default = _default;
},{}],"../JS/utils/api/api-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRequest(location, callback) {
  fetch(location).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest,
  postRequest: postRequest
};
exports.default = _default;
},{}],"../JS/components/Nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Nav;

function Nav() {
  return "\n    \n    <div id=\"logo\">\n        <h1>Local Art</h1>\n    </div>\n\n    <nav>\n        <button class=\"view__all-artists button\">Artists</button>\n        <button class=\"view__all-mediums button\">Mediums</button>\n        <button class=\"view__all-art button\">Art</button>\n    </nav>\n    ";
}
},{}],"../JS/components/Artists.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Artists;

function Artists(artists) {
  return "\n        <ul class=\"artists\">\n            ".concat(artists.map(function (artist) {
    return "\n                    <li>\n                        <h3 class=\"artist__artistName\" id=\"".concat(artist.id, "\">").concat(artist.artistName, "</h3>\n                        <img src=\"").concat(artist.artistImage, "\" class=\"artist__image\">\n                     \n                    </li>\n                    ");
  }).join(''), "\n        </ul>\n        <section class=\"add__artist\">\n            <input type=\"text\" class=\"add__artistName\" placeholder=\"Artist Name\">\n            <input type=\"text\" class=\"add__artistImage\" placeholder=\"Image URL\">\n            <button class=\"add__artist__button\">Add Artist</button>\n        </section>\n       ");
}
},{}],"../JS/components/Art.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Art;

function Art(art) {
  return "\n        <ul>\n            ".concat(art.map(function (art) {
    return "\n                    <li>\n                        <h3 class=\"art__singleArtPiece\" id=\"".concat(art.id, "\">").concat(art.artTitle, "</h3> \n                        <img src=\"").concat(art.artImage, "\" class=\"art__image\">                    \n                    </li>\n                    ");
  }).join(''), "\n        </ul>\n\n        <section class=\"add__art\">\n        <input type=\"text\" class=\"add__artTitle\" placeholder=\"Art Title\">\n        <input type=\"text\" class=\"add__artImage\" placeholder=\"Image URL\">\n        <button class=\"add__art__button\">Add Art</button>\n    </section>\n        \n       ");
}
},{}],"../JS/components/Artist.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Artist;

var _Art = _interopRequireDefault(require("./Art"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Artist(artist) {
  return "\n    <div class=\"artist__container\">\n        <h3 class=\"artist__artistName title\">Artist: ".concat(artist.artistName, "</h3>\n        <img src=\"").concat(artist.artistImage, "\" class=\"artist__image\">\n    </div>\n\n\n    <ul class=\"art\">\n            <h3>Art</h3>\n            <li class=\"art\">").concat((0, _Art.default)(artist.art), "</li>\n        </ul>\n\n        ");
}
},{"./Art":"../JS/components/Art.js"}],"../JS/components/Mediums.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mediums;

function Mediums(mediums) {
  return "\n        <ul>\n            ".concat(mediums.map(function (medium) {
    return "\n                    <li>\n                        <h3 class=\"medium__mediumName\" id=\"".concat(medium.id, "\">").concat(medium.mediumName, "</h3>                     \n                    </li>\n                    ");
  }).join(''), "\n        </ul>\n        <section class=\"add__medium\">\n            <input type=\"text\" class=\"add__mediumName\" placeholder=\"Medium Type\">\n            <button class=\"add__medium__button\">Add Medium</button>\n        </section>\n       ");
}
},{}],"../JS/components/Description.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Description;

function Description(descriptions) {
  return descriptions.map(function (description) {
    return "\n            <ul>\n                <li class=\"item\">".concat(description.descriptionContent, "</li>\n            </ul>\n            ");
  }).join('');
}
},{}],"../JS/components/Medium.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Medium;

var _Description = _interopRequireDefault(require("./Description"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Medium(medium) {
  return "\n    <div class=\"medium__container\">\n        <h3 title\">Medium: ".concat(medium.mediumName, "</h3>\n    </div>\n        ");
}
},{"./Description":"../JS/components/Description.js"}],"../JS/components/ArtPiece.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ArtPiece;

var _Description = _interopRequireDefault(require("./Description"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ArtPiece(art) {
  return "\n    <div class=\"artPiece__container\">\n        <h3 title\">Art: ".concat(art.artTitle, "</h3>\n        <img src=\"").concat(art.artImage, "\" class=\"artPiece__image\">\n    </div>\n\n    <h3>Descriptions</h3>\n        <ul>\n            <li item\">").concat((0, _Description.default)(art.descriptions), "</li>\n        </ul>\n\n        <section class=\"add__description\">\n            <input type=\"text\" class=\"add__descriptionContent\" placeholder=\"Description here\">\n            <button class=\"add__description__button\" id=\"").concat(art.id, "\">Add Description</button>\n        </section>\n        ");
}
},{"./Description":"../JS/components/Description.js"}],"../JS/app.js":[function(require,module,exports) {
"use strict";

var _eventsActions = _interopRequireDefault(require("./utils/events/events-actions"));

var _apiActions = _interopRequireDefault(require("./utils/api/api-actions"));

var _Nav = _interopRequireDefault(require("./components/Nav"));

var _Artists = _interopRequireDefault(require("./components/Artists"));

var _Artist = _interopRequireDefault(require("./components/Artist"));

var _Mediums = _interopRequireDefault(require("./components/Mediums"));

var _Medium = _interopRequireDefault(require("./components/Medium"));

var _Art = _interopRequireDefault(require("./components/Art"));

var _ArtPiece = _interopRequireDefault(require("./components/ArtPiece"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

nav();
main();

function nav() {
  getNavContext().innerHTML = (0, _Nav.default)();
  navArtists();
  navMediums();
  navArt();
  viewSingleArtist();
  viewSingleMedium();
  viewSingleArtPiece();
  addDescriptionToArt();
  addArtists();
  addMediums();
  addArt(); // addArtToArtist()
}

function main() {
  _apiActions.default.getRequest('http://localhost:8080/art', function (art) {
    getAppContext().innerHTML = (0, _Art.default)(art);
  });
}

function navArtists() {
  _eventsActions.default.on(getNavContext(), 'click', function () {
    if (event.target.classList.contains('view__all-artists')) {
      _apiActions.default.getRequest("http://localhost:8080/artists", function (artists) {
        getAppContext().innerHTML = (0, _Artists.default)(artists);
      });
    }
  });
}

function navMediums() {
  _eventsActions.default.on(getNavContext(), 'click', function () {
    if (event.target.classList.contains('view__all-mediums')) {
      _apiActions.default.getRequest("http://localhost:8080/mediums", function (mediums) {
        getAppContext().innerHTML = (0, _Mediums.default)(mediums);
      });
    }
  });
}

function navArt() {
  _eventsActions.default.on(getNavContext(), 'click', function () {
    if (event.target.classList.contains('view__all-art')) {
      _apiActions.default.getRequest("http://localhost:8080/art", function (art) {
        getAppContext().innerHTML = (0, _Art.default)(art);
      });
    }
  });
}

function viewSingleArtist() {
  _eventsActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('artist__artistName')) {
      _apiActions.default.getRequest("http://localhost:8080/artists/".concat(event.target.id), function (artist) {
        getAppContext().innerHTML = (0, _Artist.default)(artist);
      });
    }
  });
}

function viewSingleMedium() {
  _eventsActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('medium__mediumName')) {
      _apiActions.default.getRequest("http://localhost:8080/mediums/".concat(event.target.id), function (medium) {
        getAppContext().innerHTML = (0, _Medium.default)(medium);
      });
    }
  });
}

function viewSingleArtPiece() {
  _eventsActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('art__singleArtPiece')) {
      _apiActions.default.getRequest("http://localhost:8080/art/".concat(event.target.id), function (art) {
        getAppContext().innerHTML = (0, _ArtPiece.default)(art);
      });
    }
  });
}

function addArtists() {
  _eventsActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__artist__button')) {
      var artistName = document.querySelector('.add__artistName').value;
      var artistImage = document.querySelector('.add__artistImage').value;

      _apiActions.default.postRequest('http://localhost:8080/artists/add/${event.target.id}', {
        artistName: artistName,
        artistImage: artistImage
      }, function (artists) {
        return getAppContext().innerHTML = (0, _Artists.default)(artists);
      });
    }
  });
}

function addMediums() {
  _eventsActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__medium__button')) {
      var mediumName = document.querySelector('.add__mediumName').value;

      _apiActions.default.postRequest('http://localhost:8080/mediums/add/${event.target.id}', {
        mediumName: mediumName
      }, function (mediums) {
        return getAppContext().innerHTML = (0, _Mediums.default)(mediums);
      });
    }
  });
}

function addArt() {
  _eventsActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__art__button')) {
      var artTitle = document.querySelector('.add__artTitle').value;
      var artImage = document.querySelector('.add__artImage').value;

      _apiActions.default.postRequest('http://localhost:8080/art/add/${event.target.id}', {
        artTitle: artTitle,
        artImage: artImage
      }, function (art) {
        return getAppContext().innerHTML = (0, _Art.default)(art);
      });
    }
  });
}

function addDescriptionToArt() {
  _eventsActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__description__button')) {
      var descriptionContent = document.querySelector('.add__descriptionContent').value;

      _apiActions.default.postRequest("http://localhost:8080/descriptions/add/".concat(event.target.id), {
        descriptionContent: descriptionContent
      }, function (art) {
        return getAppContext().innerHTML = (0, _ArtPiece.default)(art);
      });
    }
  });
} // function addArtToArtist() {
// 	events.on(getAppContext(), 'click', () => {
// 		if (event.target.classList.contains('add__art__button')) {
//             const artTitle = document.querySelector('.add__artTitle').value
//             const artImage = document.querySelector('.add__artImage').value
// 			api.postRequest(`http://localhost:8080/artists/art/add/${event.target.id}`, {
//                 artTitle: artTitle,
//                 artImage: artImage
// 			}, (art) => {
// 				getAppContext().innerHTML = Art(art)
// 			})
// 		}
// 	})
// }


function getAppContext() {
  return document.querySelector('#app');
}

function getNavContext() {
  return document.querySelector("#nav");
}
},{"./utils/events/events-actions":"../JS/utils/events/events-actions.js","./utils/api/api-actions":"../JS/utils/api/api-actions.js","./components/Nav":"../JS/components/Nav.js","./components/Artists":"../JS/components/Artists.js","./components/Artist":"../JS/components/Artist.js","./components/Mediums":"../JS/components/Mediums.js","./components/Medium":"../JS/components/Medium.js","./components/Art":"../JS/components/Art.js","./components/ArtPiece":"../JS/components/ArtPiece.js"}],"../../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55089" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../JS/app.js"], null)
//# sourceMappingURL=/app.bb9430f1.js.map