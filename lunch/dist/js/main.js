/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this = undefined;
(function (v, p) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (p),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = p() : v.anime = p();
})(undefined, function () {
  function v(a) {
    if (!g.col(a)) try {
      return document.querySelectorAll(a);
    } catch (b) {}
  }function p(a) {
    return a.reduce(function (a, d) {
      return a.concat(g.arr(d) ? p(d) : d);
    }, []);
  }function w(a) {
    if (g.arr(a)) return a;g.str(a) && (a = v(a) || a);return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a];
  }function F(a, b) {
    return a.some(function (a) {
      return a === b;
    });
  }
  function A(a) {
    var b = {},
        d;for (d in a) {
      b[d] = a[d];
    }return b;
  }function G(a, b) {
    var d = A(a),
        c;for (c in a) {
      d[c] = b.hasOwnProperty(c) ? b[c] : a[c];
    }return d;
  }function B(a, b) {
    var d = A(a),
        c;for (c in b) {
      d[c] = g.und(a[c]) ? b[c] : a[c];
    }return d;
  }function S(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, d, h) {
      return b + b + d + d + h + h;
    });var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a = parseInt(b[1], 16);var d = parseInt(b[2], 16),
        b = parseInt(b[3], 16);return "rgb(" + a + "," + d + "," + b + ")";
  }function T(a) {
    function b(a, b, c) {
      0 > c && (c += 1);1 < c && --c;return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a;
    }var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);a = parseInt(d[1]) / 360;var c = parseInt(d[2]) / 100,
        d = parseInt(d[3]) / 100;if (0 == c) c = d = a = d;else {
      var e = .5 > d ? d * (1 + c) : d + c - d * c,
          l = 2 * d - e,
          c = b(l, e, a + 1 / 3),
          d = b(l, e, a);a = b(l, e, a - 1 / 3);
    }return "rgb(" + 255 * c + "," + 255 * d + "," + 255 * a + ")";
  }function x(a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a)) return a[2];
  }function U(a) {
    if (-1 < a.indexOf("translate")) return "px";
    if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg";
  }function H(a, b) {
    return g.fnc(a) ? a(b.target, b.id, b.total) : a;
  }function C(a, b) {
    if (b in a.style) return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
  }function I(a, b) {
    if (g.dom(a) && F(V, b)) return "transform";if (g.dom(a) && (a.getAttribute(b) || g.svg(a) && a[b])) return "attribute";if (g.dom(a) && "transform" !== b && C(a, b)) return "css";if (null != a[b]) return "object";
  }function W(a, b) {
    var d = U(b),
        d = -1 < b.indexOf("scale") ? 1 : 0 + d;a = a.style.transform;if (!a) return d;for (var c = [], e = [], l = [], h = /(\w+)\((.+?)\)/g; c = h.exec(a);) {
      e.push(c[1]), l.push(c[2]);
    }a = l.filter(function (a, c) {
      return e[c] === b;
    });return a.length ? a[0] : d;
  }function J(a, b) {
    switch (I(a, b)) {case "transform":
        return W(a, b);case "css":
        return C(a, b);case "attribute":
        return a.getAttribute(b);}return a[b] || 0;
  }function K(a, b) {
    var d = /^(\*=|\+=|-=)/.exec(a);if (!d) return a;b = parseFloat(b);a = parseFloat(a.replace(d[0], ""));switch (d[0][0]) {case "+":
        return b + a;case "-":
        return b - a;case "*":
        return b * a;}
  }function D(a) {
    return g.obj(a) && a.hasOwnProperty("totalLength");
  }function X(a, b) {
    function d(c) {
      c = void 0 === c ? 0 : c;return a.el.getPointAtLength(1 <= b + c ? b + c : 0);
    }var c = d(),
        e = d(-1),
        l = d(1);switch (a.property) {case "x":
        return c.x;case "y":
        return c.y;case "angle":
        return 180 * Math.atan2(l.y - e.y, l.x - e.x) / Math.PI;}
  }function L(a, b) {
    var d = /-?\d*\.?\d+/g;a = D(a) ? a.totalLength : a;if (g.col(a)) b = g.rgb(a) ? a : g.hex(a) ? S(a) : g.hsl(a) ? T(a) : void 0;else {
      var c = x(a);a = c ? a.substr(0, a.length - c.length) : a;b = b ? a + b : a;
    }b += "";return { original: b,
      numbers: b.match(d) ? b.match(d).map(Number) : [0], strings: b.split(d) };
  }function Y(a, b) {
    return b.reduce(function (b, c, e) {
      return b + a[e - 1] + c;
    });
  }function M(a) {
    return (a ? p(g.arr(a) ? a.map(w) : w(a)) : []).filter(function (a, d, c) {
      return c.indexOf(a) === d;
    });
  }function Z(a) {
    var b = M(a);return b.map(function (a, c) {
      return { target: a, id: c, total: b.length };
    });
  }function aa(a, b) {
    var d = A(b);if (g.arr(a)) {
      var c = a.length;2 !== c || g.obj(a[0]) ? g.fnc(b.duration) || (d.duration = b.duration / c) : a = { value: a };
    }return w(a).map(function (a, c) {
      c = c ? 0 : b.delay;
      a = g.obj(a) && !D(a) ? a : { value: a };g.und(a.delay) && (a.delay = c);return a;
    }).map(function (a) {
      return B(a, d);
    });
  }function ba(a, b) {
    var d = {},
        c;for (c in a) {
      var e = H(a[c], b);g.arr(e) && (e = e.map(function (a) {
        return H(a, b);
      }), 1 === e.length && (e = e[0]));d[c] = e;
    }d.duration = parseFloat(d.duration);d.delay = parseFloat(d.delay);return d;
  }function ca(a) {
    return g.arr(a) ? y.apply(this, a) : N[a];
  }function da(a, b) {
    var d;return a.tweens.map(function (c) {
      c = ba(c, b);var e = c.value,
          l = J(b.target, a.name),
          h = d ? d.to.original : l,
          h = g.arr(e) ? e[0] : h,
          m = K(g.arr(e) ? e[1] : e, h),
          l = x(m) || x(h) || x(l);c.isPath = D(e);c.from = L(h, l);c.to = L(m, l);c.start = d ? d.end : a.offset;c.end = c.start + c.delay + c.duration;c.easing = ca(c.easing);c.elasticity = (1E3 - Math.min(Math.max(c.elasticity, 1), 999)) / 1E3;g.col(c.from.original) && (c.round = 1);return d = c;
    });
  }function ea(a, b) {
    return p(a.map(function (a) {
      return b.map(function (b) {
        var c = I(a.target, b.name);if (c) {
          var d = da(b, a);b = { type: c, property: b.name, animatable: a, tweens: d, duration: d[d.length - 1].end, delay: d[0].delay };
        } else b = void 0;return b;
      });
    })).filter(function (a) {
      return !g.und(a);
    });
  }
  function O(a, b, d) {
    var c = "delay" === a ? Math.min : Math.max;return b.length ? c.apply(Math, b.map(function (b) {
      return b[a];
    })) : d[a];
  }function fa(a) {
    var b = G(ga, a),
        d = G(ha, a),
        c = Z(a.targets),
        e = [],
        g = B(b, d),
        h;for (h in a) {
      g.hasOwnProperty(h) || "targets" === h || e.push({ name: h, offset: g.offset, tweens: aa(a[h], d) });
    }a = ea(c, e);return B(b, { children: [], animatables: c, animations: a, duration: O("duration", a, d), delay: O("delay", a, d) });
  }function n(a) {
    function b() {
      return window.Promise && new Promise(function (a) {
        return Q = a;
      });
    }function d(a) {
      return f.reversed ? f.duration - a : a;
    }function c(a) {
      for (var b = 0, c = {}, d = f.animations, e = {}; b < d.length;) {
        var g = d[b],
            h = g.animatable,
            m = g.tweens;e.tween = m.filter(function (b) {
          return a < b.end;
        })[0] || m[m.length - 1];e.isPath$1 = e.tween.isPath;e.round = e.tween.round;e.eased = e.tween.easing(Math.min(Math.max(a - e.tween.start - e.tween.delay, 0), e.tween.duration) / e.tween.duration, e.tween.elasticity);m = Y(e.tween.to.numbers.map(function (a) {
          return function (b, c) {
            c = a.isPath$1 ? 0 : a.tween.from.numbers[c];b = c + a.eased * (b - c);a.isPath$1 && (b = X(a.tween.value, b));a.round && (b = Math.round(b * a.round) / a.round);return b;
          };
        }(e)), e.tween.to.strings);ia[g.type](h.target, g.property, m, c, h.id);g.currentValue = m;b++;e = { isPath$1: e.isPath$1, tween: e.tween, eased: e.eased, round: e.round };
      }if (c) for (var k in c) {
        E || (E = C(document.body, "transform") ? "transform" : "-webkit-transform"), f.animatables[k].target.style[E] = c[k].join(" ");
      }f.currentTime = a;f.progress = a / f.duration * 100;
    }function e(a) {
      if (f[a]) f[a](f);
    }function g() {
      f.remaining && !0 !== f.remaining && f.remaining--;
    }function h(a) {
      var h = f.duration,
          l = f.offset,
          n = f.delay,
          P = f.currentTime,
          q = f.reversed,
          r = d(a),
          r = Math.min(Math.max(r, 0), h);if (f.children) {
        var p = f.children;if (r >= f.currentTime) for (var u = 0; u < p.length; u++) {
          p[u].seek(r);
        } else for (u = p.length; u--;) {
          p[u].seek(r);
        }
      }r > l && r < h ? (c(r), !f.began && r >= n && (f.began = !0, e("begin")), e("run")) : (r <= l && 0 !== P && (c(0), q && g()), r >= h && P !== h && (c(h), q || g()));a >= h && (f.remaining ? (t = m, "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(), "Promise" in window && (Q(), R = b()), f.completed || (f.completed = !0, e("complete"))), k = 0);e("update");
    }a = void 0 === a ? {} : a;var m,
        t,
        k = 0,
        Q = null,
        R = b(),
        f = fa(a);f.reset = function () {
      var a = f.direction,
          b = f.loop;f.currentTime = 0;f.progress = 0;f.paused = !0;f.began = !1;f.completed = !1;f.reversed = "reverse" === a;f.remaining = "alternate" === a && 1 === b ? 2 : b;for (a = f.children.length; a--;) {
        b = f.children[a], b.seek(b.offset), b.reset();
      }
    };f.tick = function (a) {
      m = a;t || (t = m);h((k + m - t) * n.speed);
    };f.seek = function (a) {
      h(d(a));
    };f.pause = function () {
      var a = q.indexOf(f);-1 < a && q.splice(a, 1);f.paused = !0;
    };f.play = function () {
      f.paused && (f.paused = !1, t = 0, k = d(f.currentTime), q.push(f), z || ja());
    };f.reverse = function () {
      f.reversed = !f.reversed;t = 0;k = d(f.currentTime);
    };f.restart = function () {
      f.pause();f.reset();f.play();
    };f.finished = R;f.reset();f.autoplay && f.play();return f;
  }var ga = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: !0, offset: 0 },
      ha = { duration: 1E3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 },
      V = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
      E,
      g = { arr: function arr(a) {
      return Array.isArray(a);
    }, obj: function obj(a) {
      return -1 < Object.prototype.toString.call(a).indexOf("Object");
    }, svg: function svg(a) {
      return a instanceof SVGElement;
    }, dom: function dom(a) {
      return a.nodeType || g.svg(a);
    }, str: function str(a) {
      return "string" === typeof a;
    }, fnc: function fnc(a) {
      return "function" === typeof a;
    }, und: function und(a) {
      return "undefined" === typeof a;
    }, hex: function hex(a) {
      return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
      );
    }, rgb: function rgb(a) {
      return (/^rgb/.test(a)
      );
    }, hsl: function hsl(a) {
      return (/^hsl/.test(a)
      );
    }, col: function col(a) {
      return g.hex(a) || g.rgb(a) || g.hsl(a);
    } },
      y = function () {
    function a(a, d, c) {
      return (((1 - 3 * c + 3 * d) * a + (3 * c - 6 * d)) * a + 3 * d) * a;
    }return function (b, d, c, e) {
      if (0 <= b && 1 >= b && 0 <= c && 1 >= c) {
        var g = new Float32Array(11);if (b !== d || c !== e) for (var h = 0; 11 > h; ++h) {
          g[h] = a(.1 * h, b, c);
        }return function (h) {
          if (b === d && c === e) return h;if (0 === h) return 0;if (1 === h) return 1;for (var m = 0, k = 1; 10 !== k && g[k] <= h; ++k) {
            m += .1;
          }--k;var k = m + (h - g[k]) / (g[k + 1] - g[k]) * .1,
              l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;if (.001 <= l) {
            for (m = 0; 4 > m; ++m) {
              l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;if (0 === l) break;
              var n = a(k, b, c) - h,
                  k = k - n / l;
            }h = k;
          } else if (0 === l) h = k;else {
            var k = m,
                m = m + .1,
                f = 0;do {
              n = k + (m - k) / 2, l = a(n, b, c) - h, 0 < l ? m = n : k = n;
            } while (1e-7 < Math.abs(l) && 10 > ++f);h = n;
          }return a(h, d, e);
        };
      }
    };
  }(),
      N = function () {
    function a(a, b) {
      return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b);
    }var b = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
        d = { In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], a], Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (b, c) {
        return 1 - a(1 - b, c);
      }], InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (b, c) {
        return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2;
      }] },
        c = { linear: y(.25, .25, .75, .75) },
        e = {},
        l;for (l in d) {
      e.type = l, d[e.type].forEach(function (a) {
        return function (d, e) {
          c["ease" + a.type + b[e]] = g.fnc(d) ? d : y.apply($jscomp$this, d);
        };
      }(e)), e = { type: e.type };
    }return c;
  }(),
      ia = { css: function css(a, b, d) {
      return a.style[b] = d;
    }, attribute: function attribute(a, b, d) {
      return a.setAttribute(b, d);
    }, object: function object(a, b, d) {
      return a[b] = d;
    }, transform: function transform(a, b, d, c, e) {
      c[e] || (c[e] = []);c[e].push(b + "(" + d + ")");
    } },
      q = [],
      z = 0,
      ja = function () {
    function a() {
      z = requestAnimationFrame(b);
    }function b(b) {
      var c = q.length;if (c) {
        for (var d = 0; d < c;) {
          q[d] && q[d].tick(b), d++;
        }a();
      } else cancelAnimationFrame(z), z = 0;
    }return a;
  }();n.version = "2.0.2";
  n.speed = 1;n.running = q;n.remove = function (a) {
    a = M(a);for (var b = q.length; b--;) {
      for (var d = q[b], c = d.animations, e = c.length; e--;) {
        F(a, c[e].animatable.target) && (c.splice(e, 1), c.length || d.pause());
      }
    }
  };n.getValue = J;n.path = function (a, b) {
    var d = g.str(a) ? v(a)[0] : a,
        c = b || 100;return function (a) {
      return { el: d, property: a, totalLength: d.getTotalLength() * (c / 100) };
    };
  };n.setDashoffset = function (a) {
    var b = a.getTotalLength();a.setAttribute("stroke-dasharray", b);return b;
  };n.bezier = y;n.easings = N;n.timeline = function (a) {
    var b = n(a);b.pause();
    b.duration = 0;b.add = function (a) {
      b.children.forEach(function (a) {
        a.began = !0;a.completed = !0;
      });w(a).forEach(function (a) {
        var c = b.duration,
            d = a.offset;a.autoplay = !1;a.offset = g.und(d) ? c : K(d, c);b.seek(a.offset);a = n(a);a.duration > c && (b.duration = a.duration);a.began = !0;b.children.push(a);
      });b.reset();b.seek(0);b.autoplay && b.restart();return b;
    };return b;
  };n.random = function (a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  };return n;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var settings = {
    gif: {
        element: '.js-random-giphy',
        api: ['http://api.giphy.com/v1/gifs/search?q=eating&limit=25&rating=PG-13&api_key=dc6zaTOxFJmzC', 'http://api.giphy.com/v1/gifs/search?q=cheeseburger&limit=100&rating=PG-13&api_key=dc6zaTOxFJmzC', 'http://api.giphy.com/v1/gifs/search?q=hot-dog&limit=100&rating=PG-13&api_key=dc6zaTOxFJmzC', 'http://api.giphy.com/v1/gifs/search?q=bacon&limit=100&rating=PG-13&api_key=dc6zaTOxFJmzC', 'http://api.giphy.com/v1/gifs/search?q=pizza&limit=100&rating=PG-13&api_key=dc6zaTOxFJmzC', 'http://api.giphy.com/v1/gifs/search?q=taco&limit=100&rating=PG-13&api_key=dc6zaTOxFJmzC']
    },
    animations: {
        enter: 600,
        exit: 350,
        hold: 3000,
        errorHold: 5000,
        colors: {
            background: '#1b1b1b',
            circleBorder: '#1b1b1b',
            success: '#50a418',
            error: '#ac2222'
        }
    },
    background: {
        icons: '.js-icon-path-element',
        path: '.js-icon-path rect'
    },
    status: {
        title: '.js-status-title > *',
        message: '.js-status-success-message',
        errorMessage: '.js-status-error-message',
        circleBorder: '.js-status-circle-border',
        circleBg: '.js-status-circle-bg',
        wrapper: '.js-status-wrapper'
    },
    employee: {
        name: '.js-employee-name',
        avatar: '.js-employee-avatar',
        list: '.js-employee-list',
        listItem: '.js-employee-list-item'
    },
    badgeIndication: {
        ripples: '.js-ripples > *',
        arrow: '.js-badge-indication-arrow'
    }
};

exports.default = settings;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _granted = __webpack_require__(11);

var _granted2 = _interopRequireDefault(_granted);

var _error2 = __webpack_require__(10);

var _error3 = _interopRequireDefault(_error2);

var _avatar = __webpack_require__(6);

var _avatar2 = _interopRequireDefault(_avatar);

var _name = __webpack_require__(7);

var _name2 = _interopRequireDefault(_name);

var _randomGiphy = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var app = function () {
    function app() {
        _classCallCheck(this, app);

        this.ID = '';
        this.avatars = {};
    }

    _createClass(app, [{
        key: 'handleErrors',
        value: function handleErrors(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }
    }, {
        key: 'run',
        value: function run() {
            this.bindEvents();
        }
    }, {
        key: 'success',


        /**
         * Get user data from lunch api
         */
        value: function success() {

            var user = {
                first_name: 'Gijs',
                last_name: 'Rogé',
                photo: 'http://gijsroge.github.io/gijs.jpg'
            };

            // Create avatar
            this.manageEmployeeAvatars(user);

            // Create user list item.
            var name = new _name2.default();
            name.create(user);

            // Set gif
            (0, _randomGiphy.setGif)();

            // Show success animation
            (0, _granted2.default)();

            // Clean employee ID
            this.cleanID();
        }
    }, {
        key: 'error',
        value: function error() {
            // Show error animation
            (0, _error3.default)();
            console.warn(err);

            // Clean employee ID
            this.cleanID();
        }

        /**
         * Store all avatars in object untill they are animated out of the dom.
         * @param user
         */

    }, {
        key: 'manageEmployeeAvatars',
        value: function manageEmployeeAvatars(user) {

            // Loop over all avatars and animate out
            if (Object.keys(this.avatars).length !== 0) {
                Object.values(this.avatars).forEach(function (avatar) {
                    avatar.animateOut();
                });
            }

            // Create unique avatarID for later
            var avatarID = Date.now();

            // Create callback to delete avatar from app/DOM
            var removeAvatarFunction = this.removeAvatarFromList.bind(this, avatarID);

            // Add new avatar to the avatar store
            this.avatars[avatarID] = new _avatar2.default(user, removeAvatarFunction);
        }
    }, {
        key: 'removeAvatarFromList',


        /**
         * Remove avatar from object
         * @param avatarID
         */
        value: function removeAvatarFromList(avatarID) {
            delete this.avatars[avatarID];
        }
    }, {
        key: 'storeID',


        /**
         * Store the userID entered from the card reader.
         */
        value: function storeID() {
            if (event.which !== 13) this.ID += String.fromCharCode(event.which);
        }
    }, {
        key: 'cleanID',


        /**
         * Clean stored userID so we can watch for new scans
         */
        value: function cleanID() {
            this.ID = '';
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            window.addEventListener('keyup', function () {
                if (event.which === 13) {
                    _this.success();
                } else {
                    _this.error();
                }
            });
        }
    }]);

    return app;
}();

exports.default = app;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.badgeIndication = undefined;

var _animejs = __webpack_require__(0);

var _animejs2 = _interopRequireDefault(_animejs);

var _settings = __webpack_require__(1);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function run() {
    arrowAnimation();
    rippleAnimation();
}

function arrowAnimation() {
    (0, _animejs2.default)({
        targets: _settings2.default.badgeIndication.arrow,
        duration: 600,
        easing: 'easeInOutCubic',
        direction: 'alternate',
        loop: true,
        translateY: ['-15px', '30px']
    });
}

function rippleAnimation() {
    (0, _animejs2.default)({
        targets: _settings2.default.badgeIndication.ripples,
        duration: 2500,
        easing: 'easeInOutCubic',
        opacity: [{ value: ['.05', '.25'] }, { value: ['.25', '.05'] }],
        scale: [{ value: ['1.05', '.95'] }, { value: ['.95', '1.05'] }],
        loop: true,
        delay: function delay(el, i, l) {
            return i * 250;
        }
    });
}

exports.badgeIndication = run;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.icons = undefined;

var _animejs = __webpack_require__(0);

var _animejs2 = _interopRequireDefault(_animejs);

var _settings = __webpack_require__(1);

var _settings2 = _interopRequireDefault(_settings);

var _helpers = __webpack_require__(9);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function run() {
    addImagesToPath(fetchIcons());
}

function fetchIcons() {
    return document.querySelectorAll(_settings2.default.background.icons);
}

function centerIconOnPath(element) {
    var top = -(element.clientWidth / 2);
    var left = -(element.clientHeight / 2);
    Object.assign(element.style, { top: top, left: left });
}

function addImagesToPath(icons) {
    var path = _animejs2.default.path(_settings2.default.background.path);
    var count = icons.length;

    icons.forEach(function (icon, i) {

        // Center icon
        centerIconOnPath(icon);

        // Store duration
        var duration = 500000;

        // Start animation
        var animation = (0, _animejs2.default)({
            targets: icon,
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            duration: duration,
            loop: true,
            easing: 'linear',
            autoplay: false
        });

        animation.seek(duration / count * i);
        animation.play();

        addRandomAnimation(icon.querySelector('img'));
    });
}

function addRandomAnimation(element) {
    (0, _animejs2.default)({
        targets: element,
        duration: 50000,
        easing: 'linear',
        direction: 'alternate',
        loop: true,

        scale: function scale() {
            return _helpers2.default.random(0.8, 1.2);
        },
        rotate: function rotate() {
            return _helpers2.default.random(-360, 360);
        },
        delay: function delay() {
            return _helpers2.default.random(0, 5000);
        }
    });
}

exports.icons = run;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(2);

var _app2 = _interopRequireDefault(_app);

var _floatingIcons = __webpack_require__(4);

var _badgeIndication = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Start app
new _app2.default().run();

// Set background spinning/floating icons
(0, _floatingIcons.icons)();

// Start badge indication animations
(0, _badgeIndication.badgeIndication)();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(1);

var _settings2 = _interopRequireDefault(_settings);

var _animejs = __webpack_require__(0);

var _animejs2 = _interopRequireDefault(_animejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Create Avatar and animate on the screen in top right corner
 */
var Avatar = function () {
    function Avatar(user, removeAvatarFunction) {
        _classCallCheck(this, Avatar);

        // State
        this.isAnimating = false;

        // Callback
        this.removeAvatarFunction = removeAvatarFunction;

        /**
         * Show employee avatar so employee has confirmation the badge has been successful
         * @param user
         */
        this.avatarElement = document.createElement('figure');
        this.avatarElement.classList.add('c-employee-avatar', _settings2.default.employee.avatar.slice(1));
        this.avatarElement.innerHTML = '<img src="' + user.photo + '" alt="profiel foto van ' + user.first_name + ' ' + user.last_name + '">';
        document.querySelector('body').appendChild(this.avatarElement);
        this.animateIn();
    }

    _createClass(Avatar, [{
        key: 'animateIn',
        value: function animateIn() {
            var _this = this;

            // Start animation after avatar has been created.
            (0, _animejs2.default)({
                targets: this.avatarElement,
                opacity: [{ value: [0, 1], duration: _settings2.default.animations.enter, easing: 'linear' }],
                scale: [{ value: [0, 1.3], duration: _settings2.default.animations.enter, easing: 'easeOutElastic' }],
                complete: function complete() {
                    setTimeout(function () {
                        _this.animateOut();
                    }, _settings2.default.animations.hold);
                }
            });
        }
    }, {
        key: 'animateOut',
        value: function animateOut() {
            var _this2 = this;

            // If already animating, return.
            if (this.isAnimating) return;

            // Set state to animating
            this.isAnimating = true;

            (0, _animejs2.default)({
                targets: this.avatarElement,
                opacity: [{ value: 0, duration: _settings2.default.animations.exit, easing: 'linear' }],
                scale: [{ value: 0, duration: _settings2.default.animations.exit, easing: 'easeOutCirc' }],
                complete: function complete() {
                    _this2.avatarElement.remove();
                    _this2.removeAvatarFunction();
                    _this2.isAnimating = false;
                }
            });
        }
    }]);

    return Avatar;
}();

exports.default = Avatar;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(1);

var _settings2 = _interopRequireDefault(_settings);

var _animejs = __webpack_require__(0);

var _animejs2 = _interopRequireDefault(_animejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Create employee name item in employee name list and
 * animate in the bottom right corner
 */
var Name = function () {
    function Name() {
        _classCallCheck(this, Name);
    }

    _createClass(Name, [{
        key: 'create',
        value: function create(user) {
            // Create user list item
            var check = '<svg width="15" height="12" viewBox="0 0 15 12"><path d="M6176.47,788.68l-8.21,6.771-3.75-2.778-1.51,1.636,4.63,5.413,0.82,0.955,0.85-.924,8.7-9.442Z" transform="translate(-6163 -788.688)"/></svg>';
            var userListItem = document.createElement('li');
            userListItem.classList.add('c-employee-list__item', _settings2.default.employee.listItem.slice(1));
            userListItem.innerHTML = check + ' <span>' + user.first_name + ' ' + user.last_name;
            document.querySelector(_settings2.default.employee.list).appendChild(userListItem);

            // Pass new employee list item to animation
            this.animateIn(userListItem);
        }
    }, {
        key: 'animateIn',
        value: function animateIn(userListItem) {
            // Start animation after avatar has been created.
            (0, _animejs2.default)({
                targets: userListItem,
                opacity: [{ value: 1, duration: 2000, easing: 'easeOutQuint' }, { value: 0, delay: 7000, duration: 3000, easing: 'easeOutQuint' }],
                complete: function complete() {
                    userListItem.remove();
                }
            });
        }
    }]);

    return Name;
}();

exports.default = Name;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setGif = exports.randomGif = undefined;

var _animejs = __webpack_require__(0);

var _animejs2 = _interopRequireDefault(_animejs);

var _settings = __webpack_require__(1);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function fetchGhiphys() {
    localStorage.setItem('gifs', JSON.stringify([]));
    _settings2.default.gif.api.forEach(function (url, i) {
        fetch(url).then(function (resp) {
            return resp.json();
        }) // Transform the data into json
        .then(function (gifs) {
            var gifArray = JSON.parse(localStorage.getItem('gifs'));
            gifArray.push.apply(gifArray, gifs.data);
            localStorage.setItem('gifs', JSON.stringify(gifArray));
        });
    });
})();

document.querySelector('.js-status-circle').addEventListener('click', function () {
    setGif();
    (0, _animejs2.default)({
        targets: _settings2.default.gif.element,
        opacity: [{ value: [0, .5], duration: 200, delay: 150, easing: 'linear' }, { value: 0, delay: _settings2.default.animations.hold - 150, duration: 200, easing: 'linear' }]
    });
});

function setGif() {
    Object.assign(document.querySelector(_settings2.default.gif.element).style, {
        backgroundImage: 'url(' + randomGif() + ')'
    });
}

function randomGif() {
    var gifs = JSON.parse(localStorage.getItem('gifs'));
    return gifs[Math.floor(Math.random() * gifs.length)].images.downsized_medium.url;
}

exports.randomGif = randomGif;
exports.setGif = setGif;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    random: function random(min, max) {
        return Math.random() * (max - min) + min;
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    var errorSound = new Audio('audio/error.mp3');
    errorSound.play();

    _animejs2.default.remove(_settings2.default.status.circleBorder);
    (0, _animejs2.default)({
        targets: _settings2.default.status.circleBorder,
        duration: _settings2.default.animations.enter,
        backgroundColor: [{ value: colors.error, duration: animation.enter, easing: 'linear' }, { value: colors.circleBorder, delay: animation.errorHold, duration: animation.exit, easing: 'linear' }],
        scale: [{ value: 1.1, duration: animation.enter, easing: 'easeOutElastic' }, { value: 1, delay: animation.errorHold + 50, duration: animation.exit, easing: 'easeOutCirc' }]
    });

    // Hide gif element
    _animejs2.default.remove(_settings2.default.gif.element);
    (0, _animejs2.default)({
        targets: _settings2.default.gif.element,
        duration: animation.enter,
        opacity: 0
    });

    _animejs2.default.remove(_settings2.default.status.circleBg);
    (0, _animejs2.default)({
        targets: _settings2.default.status.circleBg,
        scale: [{ value: 1.05, duration: animation.enter - 150, easing: 'easeOutElastic' }, { value: 1, delay: animation.errorHold, duration: animation.exit, easing: 'easeOutCirc' }]
    });

    // Center name vertically
    var name = document.querySelector(_settings2.default.status.errorMessage);
    var top = -(name.clientHeight / 2);
    Object.assign(name.style, { marginTop: top });

    _animejs2.default.remove(_settings2.default.status.errorMessage);
    (0, _animejs2.default)({
        targets: _settings2.default.status.errorMessage,
        opacity: [{ value: [0, 1], duration: animation.enter, delay: 150, easing: 'linear' }, { value: 0, delay: animation.errorHold - 250, duration: animation.exit, easing: 'linear' }],
        scale: [{ value: [0.5, 1], duration: animation.enter, delay: 150, easing: 'easeOutElastic' }, { value: 0.5, delay: animation.errorHold - 250, duration: animation.exit, easing: 'easeOutCirc' }]
    });

    // Stop current success message animations and add new exit animation.
    _animejs2.default.remove(_settings2.default.status.message);
    (0, _animejs2.default)({
        targets: _settings2.default.status.message,
        opacity: [{ value: 0, duration: animation.exit, easing: 'linear' }],
        scale: [{ value: 0.5, duration: animation.exit, easing: 'easeOutCirc' }]
    });

    // Show error message
    _animejs2.default.remove(_settings2.default.status.title);
    (0, _animejs2.default)({
        targets: _settings2.default.status.title,
        opacity: [{ value: 0, duration: animation.enter, easing: 'easeOutQuint' }, { value: 1, delay: animation.errorHold, duration: animation.exit, easing: 'linear' }],
        scale: [{ value: [1, 1.5], duration: animation.enter, easing: 'easeOutElastic' }, { value: 1, delay: animation.errorHold, duration: animation.exit, easing: 'easeOutCirc' }],
        delay: function delay(el, i, l) {
            return i * 50;
        }
    });
};

var _animejs = __webpack_require__(0);

var _animejs2 = _interopRequireDefault(_animejs);

var _settings = __webpack_require__(1);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = _settings2.default.animations.colors;
var animation = _settings2.default.animations;

/**
 * Turn status circle red to indicate "something went wrong"
 */

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    var successSound = new Audio('audio/success.mp3');
    successSound.play();

    /**
     * Show green circle
     */
    _animejs2.default.remove(_settings2.default.status.circleBorder);
    (0, _animejs2.default)({
        targets: _settings2.default.status.circleBorder,
        duration: animation.enter,
        backgroundColor: [{ value: colors.success, duration: animation.enter, easing: 'linear' }, { value: colors.circleBorder, delay: animation.hold, duration: animation.exit, easing: 'linear' }],
        scale: [{ value: [1, 1.1], duration: animation.enter, easing: 'easeOutElastic' }, { value: 1, delay: animation.hold + 50, duration: animation.exit, easing: 'easeOutCirc' }]
    });

    _animejs2.default.remove(_settings2.default.status.circleBg);
    (0, _animejs2.default)({
        targets: _settings2.default.status.circleBg,
        scale: [{ value: [1, 1.05], duration: animation.enter - 150, easing: 'easeOutElastic' }, { value: 1, delay: animation.hold, duration: animation.exit, easing: 'easeOutCirc' }]
    });

    // Animate gif
    (0, _animejs2.default)({
        targets: _settings2.default.gif.element,
        scale: [{ value: [1, 1.05], duration: animation.enter - 150, easing: 'easeOutElastic' }, { value: 1, delay: animation.hold, duration: animation.exit, easing: 'easeOutCirc' }],
        opacity: [{ value: [0, .5], duration: 200, delay: 150, easing: 'linear' }, { value: 0, delay: animation.hold - 150, duration: 200, easing: 'linear' }]
    });

    /**
     * Create highlight loop on floating background icons
     */
    (0, _animejs2.default)({
        targets: _settings2.default.background.icons + ' img',
        duration: 600,
        easing: 'easeOutCubic',
        opacity: [{ value: 0.5 }, { value: 0.25 }],
        delay: function delay(el, i, l) {
            return i * 50;
        }
    });

    /**
     * Show success message
     */

    // Center name vertically
    var name = document.querySelector(_settings2.default.status.message);
    var top = -(name.clientHeight / 2);
    Object.assign(name.style, { marginTop: top });

    _animejs2.default.remove(_settings2.default.status.message);
    (0, _animejs2.default)({
        targets: _settings2.default.status.message,
        opacity: [{ value: [0, 1], duration: animation.enter, delay: 150, easing: 'linear' }, { value: 0, delay: animation.hold - 250, duration: animation.exit, easing: 'linear' }],
        scale: [{ value: [0.5, 1], duration: animation.enter, delay: 150, easing: 'easeOutElastic' }, { value: 0.5, delay: animation.hold - 250, duration: animation.exit, easing: 'easeOutCirc' }]
    });

    // Stop current error animations and add new exit animation.
    _animejs2.default.remove(_settings2.default.status.errorMessage);
    (0, _animejs2.default)({
        targets: _settings2.default.status.errorMessage,
        opacity: [{ value: 0, duration: animation.exit, easing: 'linear' }],
        scale: [{ value: 0.5, duration: animation.exit, easing: 'easeOutCirc' }]
    });

    _animejs2.default.remove(_settings2.default.status.title);
    (0, _animejs2.default)({
        targets: _settings2.default.status.title,
        opacity: [{ value: 0, duration: animation.enter, easing: 'easeOutQuint' }, { value: 1, delay: animation.hold, duration: animation.exit, easing: 'linear' }],
        scale: [{ value: [1, 1.5], duration: animation.enter, easing: 'easeOutElastic' }, { value: 1, delay: animation.hold, duration: animation.exit, easing: 'easeOutCirc' }],
        delay: function delay(el, i, l) {
            return i * 50;
        }
    });
};

var _animejs = __webpack_require__(0);

var _animejs2 = _interopRequireDefault(_animejs);

var _settings = __webpack_require__(1);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = _settings2.default.animations.colors;
var animation = _settings2.default.animations;

/*
 Turn status circle green to show the badge has been successfully.
 */

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map