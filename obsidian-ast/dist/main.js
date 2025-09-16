/*
THIS IS A BUNDLED FILE FOR OBSIDIAN.
Source: src/main.ts
*/
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/extend/index.js"(exports, module2) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject2 = function isPlainObject3(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return typeof key === "undefined" || hasOwn.call(obj, key);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module2.exports = function extend2() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i < length; ++i) {
        options = arguments[i];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject2(src) ? src : {};
                }
                setProperty(target, { name, newValue: extend2(deep, clone, copy) });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
  }
});

// node_modules/parsimmon/build/parsimmon.umd.min.js
var require_parsimmon_umd_min = __commonJS({
  "node_modules/parsimmon/build/parsimmon.umd.min.js"(exports, module2) {
    !function(n, t) {
      "object" == typeof exports && "object" == typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Parsimmon = t() : n.Parsimmon = t();
    }("undefined" != typeof self ? self : exports, function() {
      return function(n) {
        var t = {};
        function r(e) {
          if (t[e]) return t[e].exports;
          var u = t[e] = { i: e, l: false, exports: {} };
          return n[e].call(u.exports, u, u.exports, r), u.l = true, u.exports;
        }
        return r.m = n, r.c = t, r.d = function(n2, t2, e) {
          r.o(n2, t2) || Object.defineProperty(n2, t2, { configurable: false, enumerable: true, get: e });
        }, r.r = function(n2) {
          Object.defineProperty(n2, "__esModule", { value: true });
        }, r.n = function(n2) {
          var t2 = n2 && n2.__esModule ? function() {
            return n2.default;
          } : function() {
            return n2;
          };
          return r.d(t2, "a", t2), t2;
        }, r.o = function(n2, t2) {
          return Object.prototype.hasOwnProperty.call(n2, t2);
        }, r.p = "", r(r.s = 0);
      }([function(n, t, r) {
        "use strict";
        function e(n2) {
          if (!(this instanceof e)) return new e(n2);
          this._ = n2;
        }
        var u = e.prototype;
        function o(n2, t2) {
          for (var r2 = 0; r2 < n2; r2++) t2(r2);
        }
        function i(n2, t2, r2) {
          return function(n3, t3) {
            o(t3.length, function(r3) {
              n3(t3[r3], r3, t3);
            });
          }(function(r3, e2, u2) {
            t2 = n2(t2, r3, e2, u2);
          }, r2), t2;
        }
        function a(n2, t2) {
          return i(function(t3, r2, e2, u2) {
            return t3.concat([n2(r2, e2, u2)]);
          }, [], t2);
        }
        function f(n2, t2) {
          var r2 = { v: 0, buf: t2 };
          return o(n2, function() {
            var n3;
            r2 = { v: r2.v << 1 | (n3 = r2.buf, n3[0] >> 7), buf: function(n4) {
              var t3 = i(function(n5, t4, r3, e2) {
                return n5.concat(r3 === e2.length - 1 ? Buffer.from([t4, 0]).readUInt16BE(0) : e2.readUInt16BE(r3));
              }, [], n4);
              return Buffer.from(a(function(n5) {
                return (n5 << 1 & 65535) >> 8;
              }, t3));
            }(r2.buf) };
          }), r2;
        }
        function c() {
          return "undefined" != typeof Buffer;
        }
        function s() {
          if (!c()) throw new Error("Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.");
        }
        function l(n2) {
          s();
          var t2 = i(function(n3, t3) {
            return n3 + t3;
          }, 0, n2);
          if (t2 % 8 != 0) throw new Error("The bits [" + n2.join(", ") + "] add up to " + t2 + " which is not an even number of bytes; the total should be divisible by 8");
          var r2, u2 = t2 / 8, o2 = (r2 = function(n3) {
            return n3 > 48;
          }, i(function(n3, t3) {
            return n3 || (r2(t3) ? t3 : n3);
          }, null, n2));
          if (o2) throw new Error(o2 + " bit range requested exceeds 48 bit (6 byte) Number max.");
          return new e(function(t3, r3) {
            var e2 = u2 + r3;
            return e2 > t3.length ? x(r3, u2.toString() + " bytes") : b(e2, i(function(n3, t4) {
              var r4 = f(t4, n3.buf);
              return { coll: n3.coll.concat(r4.v), buf: r4.buf };
            }, { coll: [], buf: t3.slice(r3, e2) }, n2).coll);
          });
        }
        function h(n2, t2) {
          return new e(function(r2, e2) {
            return s(), e2 + t2 > r2.length ? x(e2, t2 + " bytes for " + n2) : b(e2 + t2, r2.slice(e2, e2 + t2));
          });
        }
        function p(n2, t2) {
          if ("number" != typeof (r2 = t2) || Math.floor(r2) !== r2 || t2 < 0 || t2 > 6) throw new Error(n2 + " requires integer length in range [0, 6].");
          var r2;
        }
        function d(n2) {
          return p("uintBE", n2), h("uintBE(" + n2 + ")", n2).map(function(t2) {
            return t2.readUIntBE(0, n2);
          });
        }
        function v(n2) {
          return p("uintLE", n2), h("uintLE(" + n2 + ")", n2).map(function(t2) {
            return t2.readUIntLE(0, n2);
          });
        }
        function g(n2) {
          return p("intBE", n2), h("intBE(" + n2 + ")", n2).map(function(t2) {
            return t2.readIntBE(0, n2);
          });
        }
        function m(n2) {
          return p("intLE", n2), h("intLE(" + n2 + ")", n2).map(function(t2) {
            return t2.readIntLE(0, n2);
          });
        }
        function y(n2) {
          return n2 instanceof e;
        }
        function E(n2) {
          return "[object Array]" === {}.toString.call(n2);
        }
        function w(n2) {
          return c() && Buffer.isBuffer(n2);
        }
        function b(n2, t2) {
          return { status: true, index: n2, value: t2, furthest: -1, expected: [] };
        }
        function x(n2, t2) {
          return E(t2) || (t2 = [t2]), { status: false, index: -1, value: null, furthest: n2, expected: t2 };
        }
        function B(n2, t2) {
          if (!t2) return n2;
          if (n2.furthest > t2.furthest) return n2;
          var r2 = n2.furthest === t2.furthest ? function(n3, t3) {
            if (function() {
              if (void 0 !== e._supportsSet) return e._supportsSet;
              var n4 = "undefined" != typeof Set;
              return e._supportsSet = n4, n4;
            }() && Array.from) {
              for (var r3 = new Set(n3), u2 = 0; u2 < t3.length; u2++) r3.add(t3[u2]);
              var o2 = Array.from(r3);
              return o2.sort(), o2;
            }
            for (var i2 = {}, a2 = 0; a2 < n3.length; a2++) i2[n3[a2]] = true;
            for (var f2 = 0; f2 < t3.length; f2++) i2[t3[f2]] = true;
            var c2 = [];
            for (var s2 in i2) ({}).hasOwnProperty.call(i2, s2) && c2.push(s2);
            return c2.sort(), c2;
          }(n2.expected, t2.expected) : t2.expected;
          return { status: n2.status, index: n2.index, value: n2.value, furthest: t2.furthest, expected: r2 };
        }
        var j = {};
        function S(n2, t2) {
          if (w(n2)) return { offset: t2, line: -1, column: -1 };
          n2 in j || (j[n2] = {});
          for (var r2 = j[n2], e2 = 0, u2 = 0, o2 = 0, i2 = t2; i2 >= 0; ) {
            if (i2 in r2) {
              e2 = r2[i2].line, 0 === o2 && (o2 = r2[i2].lineStart);
              break;
            }
            ("\n" === n2.charAt(i2) || "\r" === n2.charAt(i2) && "\n" !== n2.charAt(i2 + 1)) && (u2++, 0 === o2 && (o2 = i2 + 1)), i2--;
          }
          var a2 = e2 + u2, f2 = t2 - o2;
          return r2[t2] = { line: a2, lineStart: o2 }, { offset: t2, line: a2 + 1, column: f2 + 1 };
        }
        function _(n2) {
          if (!y(n2)) throw new Error("not a parser: " + n2);
        }
        function L(n2, t2) {
          return "string" == typeof n2 ? n2.charAt(t2) : n2[t2];
        }
        function O(n2) {
          if ("number" != typeof n2) throw new Error("not a number: " + n2);
        }
        function k(n2) {
          if ("function" != typeof n2) throw new Error("not a function: " + n2);
        }
        function P3(n2) {
          if ("string" != typeof n2) throw new Error("not a string: " + n2);
        }
        var q = 2, A = 3, I = 8, F = 5 * I, M = 4 * I, z = "  ";
        function R(n2, t2) {
          return new Array(t2 + 1).join(n2);
        }
        function U(n2, t2, r2) {
          var e2 = t2 - n2.length;
          return e2 <= 0 ? n2 : R(r2, e2) + n2;
        }
        function W(n2, t2, r2, e2) {
          return { from: n2 - t2 > 0 ? n2 - t2 : 0, to: n2 + r2 > e2 ? e2 : n2 + r2 };
        }
        function D(n2, t2) {
          var r2, e2, u2, o2, f2, c2 = t2.index, s2 = c2.offset, l2 = 1;
          if (s2 === n2.length) return "Got the end of the input";
          if (w(n2)) {
            var h2 = s2 - s2 % I, p2 = s2 - h2, d2 = W(h2, F, M + I, n2.length), v2 = a(function(n3) {
              return a(function(n4) {
                return U(n4.toString(16), 2, "0");
              }, n3);
            }, function(n3, t3) {
              var r3 = n3.length, e3 = [], u3 = 0;
              if (r3 <= t3) return [n3.slice()];
              for (var o3 = 0; o3 < r3; o3++) e3[u3] || e3.push([]), e3[u3].push(n3[o3]), (o3 + 1) % t3 == 0 && u3++;
              return e3;
            }(n2.slice(d2.from, d2.to).toJSON().data, I));
            o2 = function(n3) {
              return 0 === n3.from && 1 === n3.to ? { from: n3.from, to: n3.to } : { from: n3.from / I, to: Math.floor(n3.to / I) };
            }(d2), e2 = h2 / I, r2 = 3 * p2, p2 >= 4 && (r2 += 1), l2 = 2, u2 = a(function(n3) {
              return n3.length <= 4 ? n3.join(" ") : n3.slice(0, 4).join(" ") + "  " + n3.slice(4).join(" ");
            }, v2), (f2 = (8 * (o2.to > 0 ? o2.to - 1 : o2.to)).toString(16).length) < 2 && (f2 = 2);
          } else {
            var g2 = n2.split(/\r\n|[\n\r\u2028\u2029]/);
            r2 = c2.column - 1, e2 = c2.line - 1, o2 = W(e2, q, A, g2.length), u2 = g2.slice(o2.from, o2.to), f2 = o2.to.toString().length;
          }
          var m2 = e2 - o2.from;
          return w(n2) && (f2 = (8 * (o2.to > 0 ? o2.to - 1 : o2.to)).toString(16).length) < 2 && (f2 = 2), i(function(t3, e3, u3) {
            var i2, a2 = u3 === m2, c3 = a2 ? "> " : z;
            return i2 = w(n2) ? U((8 * (o2.from + u3)).toString(16), f2, "0") : U((o2.from + u3 + 1).toString(), f2, " "), [].concat(t3, [c3 + i2 + " | " + e3], a2 ? [z + R(" ", f2) + " | " + U("", r2, " ") + R("^", l2)] : []);
          }, [], u2).join("\n");
        }
        function N(n2, t2) {
          return ["\n", "-- PARSING FAILED " + R("-", 50), "\n\n", D(n2, t2), "\n\n", (r2 = t2.expected, 1 === r2.length ? "Expected:\n\n" + r2[0] : "Expected one of the following: \n\n" + r2.join(", ")), "\n"].join("");
          var r2;
        }
        function G(n2) {
          return void 0 !== n2.flags ? n2.flags : [n2.global ? "g" : "", n2.ignoreCase ? "i" : "", n2.multiline ? "m" : "", n2.unicode ? "u" : "", n2.sticky ? "y" : ""].join("");
        }
        function C() {
          for (var n2 = [].slice.call(arguments), t2 = n2.length, r2 = 0; r2 < t2; r2 += 1) _(n2[r2]);
          return e(function(r3, e2) {
            for (var u2, o2 = new Array(t2), i2 = 0; i2 < t2; i2 += 1) {
              if (!(u2 = B(n2[i2]._(r3, e2), u2)).status) return u2;
              o2[i2] = u2.value, e2 = u2.index;
            }
            return B(b(e2, o2), u2);
          });
        }
        function J() {
          var n2 = [].slice.call(arguments);
          if (0 === n2.length) throw new Error("seqMap needs at least one argument");
          var t2 = n2.pop();
          return k(t2), C.apply(null, n2).map(function(n3) {
            return t2.apply(null, n3);
          });
        }
        function T() {
          var n2 = [].slice.call(arguments), t2 = n2.length;
          if (0 === t2) return Y("zero alternates");
          for (var r2 = 0; r2 < t2; r2 += 1) _(n2[r2]);
          return e(function(t3, r3) {
            for (var e2, u2 = 0; u2 < n2.length; u2 += 1) if ((e2 = B(n2[u2]._(t3, r3), e2)).status) return e2;
            return e2;
          });
        }
        function V(n2, t2) {
          return H(n2, t2).or(X([]));
        }
        function H(n2, t2) {
          return _(n2), _(t2), J(n2, t2.then(n2).many(), function(n3, t3) {
            return [n3].concat(t3);
          });
        }
        function K(n2) {
          P3(n2);
          var t2 = "'" + n2 + "'";
          return e(function(r2, e2) {
            var u2 = e2 + n2.length, o2 = r2.slice(e2, u2);
            return o2 === n2 ? b(u2, o2) : x(e2, t2);
          });
        }
        function Q(n2, t2) {
          !function(n3) {
            if (!(n3 instanceof RegExp)) throw new Error("not a regexp: " + n3);
            for (var t3 = G(n3), r3 = 0; r3 < t3.length; r3++) {
              var e2 = t3.charAt(r3);
              if ("i" !== e2 && "m" !== e2 && "u" !== e2 && "s" !== e2) throw new Error('unsupported regexp flag "' + e2 + '": ' + n3);
            }
          }(n2), arguments.length >= 2 ? O(t2) : t2 = 0;
          var r2 = function(n3) {
            return RegExp("^(?:" + n3.source + ")", G(n3));
          }(n2), u2 = "" + n2;
          return e(function(n3, e2) {
            var o2 = r2.exec(n3.slice(e2));
            if (o2) {
              if (0 <= t2 && t2 <= o2.length) {
                var i2 = o2[0], a2 = o2[t2];
                return b(e2 + i2.length, a2);
              }
              return x(e2, "valid match group (0 to " + o2.length + ") in " + u2);
            }
            return x(e2, u2);
          });
        }
        function X(n2) {
          return e(function(t2, r2) {
            return b(r2, n2);
          });
        }
        function Y(n2) {
          return e(function(t2, r2) {
            return x(r2, n2);
          });
        }
        function Z(n2) {
          if (y(n2)) return e(function(t2, r2) {
            var e2 = n2._(t2, r2);
            return e2.index = r2, e2.value = "", e2;
          });
          if ("string" == typeof n2) return Z(K(n2));
          if (n2 instanceof RegExp) return Z(Q(n2));
          throw new Error("not a string, regexp, or parser: " + n2);
        }
        function $(n2) {
          return _(n2), e(function(t2, r2) {
            var e2 = n2._(t2, r2), u2 = t2.slice(r2, e2.index);
            return e2.status ? x(r2, 'not "' + u2 + '"') : b(r2, null);
          });
        }
        function nn(n2) {
          return k(n2), e(function(t2, r2) {
            var e2 = L(t2, r2);
            return r2 < t2.length && n2(e2) ? b(r2 + 1, e2) : x(r2, "a character/byte matching " + n2);
          });
        }
        function tn(n2, t2) {
          arguments.length < 2 && (t2 = n2, n2 = void 0);
          var r2 = e(function(n3, e2) {
            return r2._ = t2()._, r2._(n3, e2);
          });
          return n2 ? r2.desc(n2) : r2;
        }
        function rn() {
          return Y("fantasy-land/empty");
        }
        u.parse = function(n2) {
          if ("string" != typeof n2 && !w(n2)) throw new Error(".parse must be called with a string or Buffer as its argument");
          var t2, r2 = this.skip(an)._(n2, 0);
          return t2 = r2.status ? { status: true, value: r2.value } : { status: false, index: S(n2, r2.furthest), expected: r2.expected }, delete j[n2], t2;
        }, u.tryParse = function(n2) {
          var t2 = this.parse(n2);
          if (t2.status) return t2.value;
          var r2 = N(n2, t2), e2 = new Error(r2);
          throw e2.type = "ParsimmonError", e2.result = t2, e2;
        }, u.assert = function(n2, t2) {
          return this.chain(function(r2) {
            return n2(r2) ? X(r2) : Y(t2);
          });
        }, u.or = function(n2) {
          return T(this, n2);
        }, u.trim = function(n2) {
          return this.wrap(n2, n2);
        }, u.wrap = function(n2, t2) {
          return J(n2, this, t2, function(n3, t3) {
            return t3;
          });
        }, u.thru = function(n2) {
          return n2(this);
        }, u.then = function(n2) {
          return _(n2), C(this, n2).map(function(n3) {
            return n3[1];
          });
        }, u.many = function() {
          var n2 = this;
          return e(function(t2, r2) {
            for (var e2 = [], u2 = void 0; ; ) {
              if (!(u2 = B(n2._(t2, r2), u2)).status) return B(b(r2, e2), u2);
              if (r2 === u2.index) throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");
              r2 = u2.index, e2.push(u2.value);
            }
          });
        }, u.tieWith = function(n2) {
          return P3(n2), this.map(function(t2) {
            if (function(n3) {
              if (!E(n3)) throw new Error("not an array: " + n3);
            }(t2), t2.length) {
              P3(t2[0]);
              for (var r2 = t2[0], e2 = 1; e2 < t2.length; e2++) P3(t2[e2]), r2 += n2 + t2[e2];
              return r2;
            }
            return "";
          });
        }, u.tie = function() {
          return this.tieWith("");
        }, u.times = function(n2, t2) {
          var r2 = this;
          return arguments.length < 2 && (t2 = n2), O(n2), O(t2), e(function(e2, u2) {
            for (var o2 = [], i2 = void 0, a2 = void 0, f2 = 0; f2 < n2; f2 += 1) {
              if (a2 = B(i2 = r2._(e2, u2), a2), !i2.status) return a2;
              u2 = i2.index, o2.push(i2.value);
            }
            for (; f2 < t2 && (a2 = B(i2 = r2._(e2, u2), a2), i2.status); f2 += 1) u2 = i2.index, o2.push(i2.value);
            return B(b(u2, o2), a2);
          });
        }, u.result = function(n2) {
          return this.map(function() {
            return n2;
          });
        }, u.atMost = function(n2) {
          return this.times(0, n2);
        }, u.atLeast = function(n2) {
          return J(this.times(n2), this.many(), function(n3, t2) {
            return n3.concat(t2);
          });
        }, u.map = function(n2) {
          k(n2);
          var t2 = this;
          return e(function(r2, e2) {
            var u2 = t2._(r2, e2);
            return u2.status ? B(b(u2.index, n2(u2.value)), u2) : u2;
          });
        }, u.contramap = function(n2) {
          k(n2);
          var t2 = this;
          return e(function(r2, e2) {
            var u2 = t2.parse(n2(r2.slice(e2)));
            return u2.status ? b(e2 + r2.length, u2.value) : u2;
          });
        }, u.promap = function(n2, t2) {
          return k(n2), k(t2), this.contramap(n2).map(t2);
        }, u.skip = function(n2) {
          return C(this, n2).map(function(n3) {
            return n3[0];
          });
        }, u.mark = function() {
          return J(en, this, en, function(n2, t2, r2) {
            return { start: n2, value: t2, end: r2 };
          });
        }, u.node = function(n2) {
          return J(en, this, en, function(t2, r2, e2) {
            return { name: n2, value: r2, start: t2, end: e2 };
          });
        }, u.sepBy = function(n2) {
          return V(this, n2);
        }, u.sepBy1 = function(n2) {
          return H(this, n2);
        }, u.lookahead = function(n2) {
          return this.skip(Z(n2));
        }, u.notFollowedBy = function(n2) {
          return this.skip($(n2));
        }, u.desc = function(n2) {
          E(n2) || (n2 = [n2]);
          var t2 = this;
          return e(function(r2, e2) {
            var u2 = t2._(r2, e2);
            return u2.status || (u2.expected = n2), u2;
          });
        }, u.fallback = function(n2) {
          return this.or(X(n2));
        }, u.ap = function(n2) {
          return J(n2, this, function(n3, t2) {
            return n3(t2);
          });
        }, u.chain = function(n2) {
          var t2 = this;
          return e(function(r2, e2) {
            var u2 = t2._(r2, e2);
            return u2.status ? B(n2(u2.value)._(r2, u2.index), u2) : u2;
          });
        }, u.concat = u.or, u.empty = rn, u.of = X, u["fantasy-land/ap"] = u.ap, u["fantasy-land/chain"] = u.chain, u["fantasy-land/concat"] = u.concat, u["fantasy-land/empty"] = u.empty, u["fantasy-land/of"] = u.of, u["fantasy-land/map"] = u.map;
        var en = e(function(n2, t2) {
          return b(t2, S(n2, t2));
        }), un = e(function(n2, t2) {
          return t2 >= n2.length ? x(t2, "any character/byte") : b(t2 + 1, L(n2, t2));
        }), on = e(function(n2, t2) {
          return b(n2.length, n2.slice(t2));
        }), an = e(function(n2, t2) {
          return t2 < n2.length ? x(t2, "EOF") : b(t2, null);
        }), fn = Q(/[0-9]/).desc("a digit"), cn = Q(/[0-9]*/).desc("optional digits"), sn = Q(/[a-z]/i).desc("a letter"), ln = Q(/[a-z]*/i).desc("optional letters"), hn = Q(/\s*/).desc("optional whitespace"), pn = Q(/\s+/).desc("whitespace"), dn = K("\r"), vn = K("\n"), gn = K("\r\n"), mn = T(gn, vn, dn).desc("newline"), yn = T(mn, an);
        e.all = on, e.alt = T, e.any = un, e.cr = dn, e.createLanguage = function(n2) {
          var t2 = {};
          for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && function(r3) {
            t2[r3] = tn(function() {
              return n2[r3](t2);
            });
          }(r2);
          return t2;
        }, e.crlf = gn, e.custom = function(n2) {
          return e(n2(b, x));
        }, e.digit = fn, e.digits = cn, e.empty = rn, e.end = yn, e.eof = an, e.fail = Y, e.formatError = N, e.index = en, e.isParser = y, e.lazy = tn, e.letter = sn, e.letters = ln, e.lf = vn, e.lookahead = Z, e.makeFailure = x, e.makeSuccess = b, e.newline = mn, e.noneOf = function(n2) {
          return nn(function(t2) {
            return n2.indexOf(t2) < 0;
          }).desc("none of '" + n2 + "'");
        }, e.notFollowedBy = $, e.of = X, e.oneOf = function(n2) {
          for (var t2 = n2.split(""), r2 = 0; r2 < t2.length; r2++) t2[r2] = "'" + t2[r2] + "'";
          return nn(function(t3) {
            return n2.indexOf(t3) >= 0;
          }).desc(t2);
        }, e.optWhitespace = hn, e.Parser = e, e.range = function(n2, t2) {
          return nn(function(r2) {
            return n2 <= r2 && r2 <= t2;
          }).desc(n2 + "-" + t2);
        }, e.regex = Q, e.regexp = Q, e.sepBy = V, e.sepBy1 = H, e.seq = C, e.seqMap = J, e.seqObj = function() {
          for (var n2, t2 = {}, r2 = 0, u2 = (n2 = arguments, Array.prototype.slice.call(n2)), o2 = u2.length, i2 = 0; i2 < o2; i2 += 1) {
            var a2 = u2[i2];
            if (!y(a2)) {
              if (E(a2) && 2 === a2.length && "string" == typeof a2[0] && y(a2[1])) {
                var f2 = a2[0];
                if (Object.prototype.hasOwnProperty.call(t2, f2)) throw new Error("seqObj: duplicate key " + f2);
                t2[f2] = true, r2++;
                continue;
              }
              throw new Error("seqObj arguments must be parsers or [string, parser] array pairs.");
            }
          }
          if (0 === r2) throw new Error("seqObj expects at least one named parser, found zero");
          return e(function(n3, t3) {
            for (var r3, e2 = {}, i3 = 0; i3 < o2; i3 += 1) {
              var a3, f3;
              if (E(u2[i3]) ? (a3 = u2[i3][0], f3 = u2[i3][1]) : (a3 = null, f3 = u2[i3]), !(r3 = B(f3._(n3, t3), r3)).status) return r3;
              a3 && (e2[a3] = r3.value), t3 = r3.index;
            }
            return B(b(t3, e2), r3);
          });
        }, e.string = K, e.succeed = X, e.takeWhile = function(n2) {
          return k(n2), e(function(t2, r2) {
            for (var e2 = r2; e2 < t2.length && n2(L(t2, e2)); ) e2++;
            return b(e2, t2.slice(r2, e2));
          });
        }, e.test = nn, e.whitespace = pn, e["fantasy-land/empty"] = rn, e["fantasy-land/of"] = X, e.Binary = { bitSeq: l, bitSeqObj: function(n2) {
          s();
          var t2 = {}, r2 = 0, e2 = a(function(n3) {
            if (E(n3)) {
              var e3 = n3;
              if (2 !== e3.length) throw new Error("[" + e3.join(", ") + "] should be length 2, got length " + e3.length);
              if (P3(e3[0]), O(e3[1]), Object.prototype.hasOwnProperty.call(t2, e3[0])) throw new Error("duplicate key in bitSeqObj: " + e3[0]);
              return t2[e3[0]] = true, r2++, e3;
            }
            return O(n3), [null, n3];
          }, n2);
          if (r2 < 1) throw new Error("bitSeqObj expects at least one named pair, got [" + n2.join(", ") + "]");
          var u2 = a(function(n3) {
            return n3[0];
          }, e2);
          return l(a(function(n3) {
            return n3[1];
          }, e2)).map(function(n3) {
            return i(function(n4, t3) {
              return null !== t3[0] && (n4[t3[0]] = t3[1]), n4;
            }, {}, a(function(t3, r3) {
              return [t3, n3[r3]];
            }, u2));
          });
        }, byte: function(n2) {
          if (s(), O(n2), n2 > 255) throw new Error("Value specified to byte constructor (" + n2 + "=0x" + n2.toString(16) + ") is larger in value than a single byte.");
          var t2 = (n2 > 15 ? "0x" : "0x0") + n2.toString(16);
          return e(function(r2, e2) {
            var u2 = L(r2, e2);
            return u2 === n2 ? b(e2 + 1, u2) : x(e2, t2);
          });
        }, buffer: function(n2) {
          return h("buffer", n2).map(function(n3) {
            return Buffer.from(n3);
          });
        }, encodedString: function(n2, t2) {
          return h("string", t2).map(function(t3) {
            return t3.toString(n2);
          });
        }, uintBE: d, uint8BE: d(1), uint16BE: d(2), uint32BE: d(4), uintLE: v, uint8LE: v(1), uint16LE: v(2), uint32LE: v(4), intBE: g, int8BE: g(1), int16BE: g(2), int32BE: g(4), intLE: m, int8LE: m(1), int16LE: m(2), int32LE: m(4), floatBE: h("floatBE", 4).map(function(n2) {
          return n2.readFloatBE(0);
        }), floatLE: h("floatLE", 4).map(function(n2) {
          return n2.readFloatLE(0);
        }), doubleBE: h("doubleBE", 8).map(function(n2) {
          return n2.readDoubleBE(0);
        }), doubleLE: h("doubleLE", 8).map(function(n2) {
          return n2.readDoubleLE(0);
        }) }, n.exports = e;
      }]);
    });
  }
});

// node_modules/boolbase/index.js
var require_boolbase = __commonJS({
  "node_modules/boolbase/index.js"(exports, module2) {
    module2.exports = {
      trueFunc: function trueFunc() {
        return true;
      },
      falseFunc: function falseFunc() {
        return false;
      }
    };
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => AstPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// node_modules/bail/index.js
function bail(error) {
  if (error) {
    throw error;
  }
}

// node_modules/unified/lib/index.js
var import_extend = __toESM(require_extend(), 1);

// node_modules/devlop/lib/default.js
function ok() {
}
function unreachable() {
}

// node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}

// node_modules/trough/lib/index.js
function trough() {
  const fns = [];
  const pipeline = { run: run2, use };
  return pipeline;
  function run2(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next(null, ...values);
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index2 < values.length) {
        if (output[index2] === null || output[index2] === void 0) {
          output[index2] = values[index2];
        }
      }
      values = output;
      if (fn) {
        wrap(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError(
        "Expected `middelware` to be a function, not " + middelware
      );
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      const exception = (
        /** @type {Error} */
        error
      );
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result && result.then && typeof result.then === "function") {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}

// node_modules/unist-util-stringify-position/lib/index.js
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position(value.position);
  }
  if ("start" in value || "end" in value) {
    return position(value);
  }
  if ("line" in value || "column" in value) {
    return point(value);
  }
  return "";
}
function point(point3) {
  return index(point3 && point3.line) + ":" + index(point3 && point3.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}

// node_modules/vfile-message/lib/index.js
var VFileMessage = class extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(causeOrReason, optionsOrParentOrPlace, origin) {
    super();
    if (typeof optionsOrParentOrPlace === "string") {
      origin = optionsOrParentOrPlace;
      optionsOrParentOrPlace = void 0;
    }
    let reason = "";
    let options = {};
    let legacyCause = false;
    if (optionsOrParentOrPlace) {
      if ("line" in optionsOrParentOrPlace && "column" in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ("start" in optionsOrParentOrPlace && "end" in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ("type" in optionsOrParentOrPlace) {
        options = {
          ancestors: [optionsOrParentOrPlace],
          place: optionsOrParentOrPlace.position
        };
      } else {
        options = { ...optionsOrParentOrPlace };
      }
    }
    if (typeof causeOrReason === "string") {
      reason = causeOrReason;
    } else if (!options.cause && causeOrReason) {
      legacyCause = true;
      reason = causeOrReason.message;
      options.cause = causeOrReason;
    }
    if (!options.ruleId && !options.source && typeof origin === "string") {
      const index2 = origin.indexOf(":");
      if (index2 === -1) {
        options.ruleId = origin;
      } else {
        options.source = origin.slice(0, index2);
        options.ruleId = origin.slice(index2 + 1);
      }
    }
    if (!options.place && options.ancestors && options.ancestors) {
      const parent2 = options.ancestors[options.ancestors.length - 1];
      if (parent2) {
        options.place = parent2.position;
      }
    }
    const start = options.place && "start" in options.place ? options.place.start : options.place;
    this.ancestors = options.ancestors || void 0;
    this.cause = options.cause || void 0;
    this.column = start ? start.column : void 0;
    this.fatal = void 0;
    this.file = "";
    this.message = reason;
    this.line = start ? start.line : void 0;
    this.name = stringifyPosition(options.place) || "1:1";
    this.place = options.place || void 0;
    this.reason = this.message;
    this.ruleId = options.ruleId || void 0;
    this.source = options.source || void 0;
    this.stack = legacyCause && options.cause && typeof options.cause.stack === "string" ? options.cause.stack : "";
    this.actual = void 0;
    this.expected = void 0;
    this.note = void 0;
    this.url = void 0;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.column = void 0;
VFileMessage.prototype.line = void 0;
VFileMessage.prototype.ancestors = void 0;
VFileMessage.prototype.cause = void 0;
VFileMessage.prototype.fatal = void 0;
VFileMessage.prototype.place = void 0;
VFileMessage.prototype.ruleId = void 0;
VFileMessage.prototype.source = void 0;

// node_modules/unified/node_modules/vfile/lib/minpath.browser.js
var minpath = { basename, dirname, extname, join, sep: "/" };
function basename(path2, extname2) {
  if (extname2 !== void 0 && typeof extname2 !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath(path2);
  let start = 0;
  let end = -1;
  let index2 = path2.length;
  let seenNonSlash;
  if (extname2 === void 0 || extname2.length === 0 || extname2.length > path2.length) {
    while (index2--) {
      if (path2.codePointAt(index2) === 47) {
        if (seenNonSlash) {
          start = index2 + 1;
          break;
        }
      } else if (end < 0) {
        seenNonSlash = true;
        end = index2 + 1;
      }
    }
    return end < 0 ? "" : path2.slice(start, end);
  }
  if (extname2 === path2) {
    return "";
  }
  let firstNonSlashEnd = -1;
  let extnameIndex = extname2.length - 1;
  while (index2--) {
    if (path2.codePointAt(index2) === 47) {
      if (seenNonSlash) {
        start = index2 + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        seenNonSlash = true;
        firstNonSlashEnd = index2 + 1;
      }
      if (extnameIndex > -1) {
        if (path2.codePointAt(index2) === extname2.codePointAt(extnameIndex--)) {
          if (extnameIndex < 0) {
            end = index2;
          }
        } else {
          extnameIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }
  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path2.length;
  }
  return path2.slice(start, end);
}
function dirname(path2) {
  assertPath(path2);
  if (path2.length === 0) {
    return ".";
  }
  let end = -1;
  let index2 = path2.length;
  let unmatchedSlash;
  while (--index2) {
    if (path2.codePointAt(index2) === 47) {
      if (unmatchedSlash) {
        end = index2;
        break;
      }
    } else if (!unmatchedSlash) {
      unmatchedSlash = true;
    }
  }
  return end < 0 ? path2.codePointAt(0) === 47 ? "/" : "." : end === 1 && path2.codePointAt(0) === 47 ? "//" : path2.slice(0, end);
}
function extname(path2) {
  assertPath(path2);
  let index2 = path2.length;
  let end = -1;
  let startPart = 0;
  let startDot = -1;
  let preDotState = 0;
  let unmatchedSlash;
  while (index2--) {
    const code3 = path2.codePointAt(index2);
    if (code3 === 47) {
      if (unmatchedSlash) {
        startPart = index2 + 1;
        break;
      }
      continue;
    }
    if (end < 0) {
      unmatchedSlash = true;
      end = index2 + 1;
    }
    if (code3 === 46) {
      if (startDot < 0) {
        startDot = index2;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      preDotState = -1;
    }
  }
  if (startDot < 0 || end < 0 || // We saw a non-dot character immediately before the dot.
  preDotState === 0 || // The (right-most) trimmed path component is exactly `..`.
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
function join(...segments) {
  let index2 = -1;
  let joined;
  while (++index2 < segments.length) {
    assertPath(segments[index2]);
    if (segments[index2]) {
      joined = joined === void 0 ? segments[index2] : joined + "/" + segments[index2];
    }
  }
  return joined === void 0 ? "." : normalize(joined);
}
function normalize(path2) {
  assertPath(path2);
  const absolute = path2.codePointAt(0) === 47;
  let value = normalizeString(path2, !absolute);
  if (value.length === 0 && !absolute) {
    value = ".";
  }
  if (value.length > 0 && path2.codePointAt(path2.length - 1) === 47) {
    value += "/";
  }
  return absolute ? "/" + value : value;
}
function normalizeString(path2, allowAboveRoot) {
  let result = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let index2 = -1;
  let code3;
  let lastSlashIndex;
  while (++index2 <= path2.length) {
    if (index2 < path2.length) {
      code3 = path2.codePointAt(index2);
    } else if (code3 === 47) {
      break;
    } else {
      code3 = 47;
    }
    if (code3 === 47) {
      if (lastSlash === index2 - 1 || dots === 1) {
      } else if (lastSlash !== index2 - 1 && dots === 2) {
        if (result.length < 2 || lastSegmentLength !== 2 || result.codePointAt(result.length - 1) !== 46 || result.codePointAt(result.length - 2) !== 46) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf("/");
            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = "";
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
              }
              lastSlash = index2;
              dots = 0;
              continue;
            }
          } else if (result.length > 0) {
            result = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          result = result.length > 0 ? result + "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += "/" + path2.slice(lastSlash + 1, index2);
        } else {
          result = path2.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (code3 === 46 && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }
  return result;
}
function assertPath(path2) {
  if (typeof path2 !== "string") {
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(path2)
    );
  }
}

// node_modules/unified/node_modules/vfile/lib/minproc.browser.js
var minproc = { cwd };
function cwd() {
  return "/";
}

// node_modules/unified/node_modules/vfile/lib/minurl.shared.js
function isUrl(fileUrlOrPath) {
  return Boolean(
    fileUrlOrPath !== null && typeof fileUrlOrPath === "object" && "href" in fileUrlOrPath && fileUrlOrPath.href && "protocol" in fileUrlOrPath && fileUrlOrPath.protocol && // @ts-expect-error: indexing is fine.
    fileUrlOrPath.auth === void 0
  );
}

// node_modules/unified/node_modules/vfile/lib/minurl.browser.js
function urlToPath(path2) {
  if (typeof path2 === "string") {
    path2 = new URL(path2);
  } else if (!isUrl(path2)) {
    const error = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + path2 + "`"
    );
    error.code = "ERR_INVALID_ARG_TYPE";
    throw error;
  }
  if (path2.protocol !== "file:") {
    const error = new TypeError("The URL must be of scheme file");
    error.code = "ERR_INVALID_URL_SCHEME";
    throw error;
  }
  return getPathFromURLPosix(path2);
}
function getPathFromURLPosix(url) {
  if (url.hostname !== "") {
    const error = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    error.code = "ERR_INVALID_FILE_URL_HOST";
    throw error;
  }
  const pathname = url.pathname;
  let index2 = -1;
  while (++index2 < pathname.length) {
    if (pathname.codePointAt(index2) === 37 && pathname.codePointAt(index2 + 1) === 50) {
      const third = pathname.codePointAt(index2 + 2);
      if (third === 70 || third === 102) {
        const error = new TypeError(
          "File URL path must not include encoded / characters"
        );
        error.code = "ERR_INVALID_FILE_URL_PATH";
        throw error;
      }
    }
  }
  return decodeURIComponent(pathname);
}

// node_modules/unified/node_modules/vfile/lib/index.js
var order = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
var VFile = class {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (isUrl(value)) {
      options = { path: value };
    } else if (typeof value === "string" || isUint8Array(value)) {
      options = { value };
    } else {
      options = value;
    }
    this.cwd = "cwd" in options ? "" : minproc.cwd();
    this.data = {};
    this.history = [];
    this.messages = [];
    this.value;
    this.map;
    this.result;
    this.stored;
    let index2 = -1;
    while (++index2 < order.length) {
      const field2 = order[index2];
      if (field2 in options && options[field2] !== void 0 && options[field2] !== null) {
        this[field2] = field2 === "history" ? [...options[field2]] : options[field2];
      }
    }
    let field;
    for (field in options) {
      if (!order.includes(field)) {
        this[field] = options[field];
      }
    }
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path === "string" ? minpath.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(basename2) {
    assertNonEmpty(basename2, "basename");
    assertPart(basename2, "basename");
    this.path = minpath.join(this.dirname || "", basename2);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path === "string" ? minpath.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(dirname2) {
    assertPath2(this.basename, "dirname");
    this.path = minpath.join(dirname2 || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path === "string" ? minpath.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(extname2) {
    assertPart(extname2, "extname");
    assertPath2(this.dirname, "extname");
    if (extname2) {
      if (extname2.codePointAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (extname2.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = minpath.join(this.dirname, this.stem + (extname2 || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(path2) {
    if (isUrl(path2)) {
      path2 = urlToPath(path2);
    }
    assertNonEmpty(path2, "path");
    if (this.path !== path2) {
      this.history.push(path2);
    }
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path === "string" ? minpath.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(stem) {
    assertNonEmpty(stem, "stem");
    assertPart(stem, "stem");
    this.path = minpath.join(this.dirname || "", stem + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
    message.fatal = true;
    throw message;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
    message.fatal = void 0;
    return message;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = new VFileMessage(
      // @ts-expect-error: the overloads are fine.
      causeOrReason,
      optionsOrParentOrPlace,
      origin
    );
    if (this.path) {
      message.name = this.path + ":" + message.name;
      message.file = this.path;
    }
    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(encoding) {
    if (this.value === void 0) {
      return "";
    }
    if (typeof this.value === "string") {
      return this.value;
    }
    const decoder = new TextDecoder(encoding || void 0);
    return decoder.decode(this.value);
  }
};
function assertPart(part, name) {
  if (part && part.includes(minpath.sep)) {
    throw new Error(
      "`" + name + "` cannot be a path: did not expect `" + minpath.sep + "`"
    );
  }
}
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error("`" + name + "` cannot be empty");
  }
}
function assertPath2(path2, name) {
  if (!path2) {
    throw new Error("Setting `" + name + "` requires `path` to be set too");
  }
}
function isUint8Array(value) {
  return Boolean(
    value && typeof value === "object" && "byteLength" in value && "byteOffset" in value
  );
}

// node_modules/unified/lib/callable-instance.js
var CallableInstance = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(property) {
    const self2 = this;
    const constr = self2.constructor;
    const proto = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      constr.prototype
    );
    const value = proto[property];
    const apply = function() {
      return value.apply(apply, arguments);
    };
    Object.setPrototypeOf(apply, proto);
    return apply;
  }
);

// node_modules/unified/lib/index.js
var own = {}.hasOwnProperty;
var Processor = class _Processor extends CallableInstance {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy");
    this.Compiler = void 0;
    this.Parser = void 0;
    this.attachers = [];
    this.compiler = void 0;
    this.freezeIndex = -1;
    this.frozen = void 0;
    this.namespace = {};
    this.parser = void 0;
    this.transformers = trough();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const destination = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new _Processor()
    );
    let index2 = -1;
    while (++index2 < this.attachers.length) {
      const attacher = this.attachers[index2];
      destination.use(...attacher);
    }
    destination.data((0, import_extend.default)(true, {}, this.namespace));
    return destination;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", this.frozen);
        this.namespace[key] = value;
        return this;
      }
      return own.call(this.namespace, key) && this.namespace[key] || void 0;
    }
    if (key) {
      assertUnfrozen("data", this.frozen);
      this.namespace = key;
      return this;
    }
    return this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen) {
      return this;
    }
    const self2 = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    while (++this.freezeIndex < this.attachers.length) {
      const [attacher, ...options] = this.attachers[this.freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[0] = void 0;
      }
      const transformer = attacher.call(self2, ...options);
      if (typeof transformer === "function") {
        this.transformers.use(transformer);
      }
    }
    this.frozen = true;
    this.freezeIndex = Number.POSITIVE_INFINITY;
    return this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(file) {
    this.freeze();
    const realFile = vfile(file);
    const parser = this.parser || this.Parser;
    assertParser("parse", parser);
    return parser(String(realFile), realFile);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(file, done) {
    const self2 = this;
    this.freeze();
    assertParser("process", this.parser || this.Parser);
    assertCompiler("process", this.compiler || this.Compiler);
    return done ? executor(void 0, done) : new Promise(executor);
    function executor(resolve, reject) {
      const realFile = vfile(file);
      const parseTree = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        self2.parse(realFile)
      );
      self2.run(parseTree, realFile, function(error, tree, file2) {
        if (error || !tree || !file2) {
          return realDone(error);
        }
        const compileTree = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          tree
        );
        const compileResult = self2.stringify(compileTree, file2);
        if (looksLikeAValue(compileResult)) {
          file2.value = compileResult;
        } else {
          file2.result = compileResult;
        }
        realDone(
          error,
          /** @type {VFileWithOutput<CompileResult>} */
          file2
        );
      });
      function realDone(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          ok(done, "`done` is defined if `resolve` is not");
          done(void 0, file2);
        }
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(file) {
    let complete = false;
    let result;
    this.freeze();
    assertParser("processSync", this.parser || this.Parser);
    assertCompiler("processSync", this.compiler || this.Compiler);
    this.process(file, realDone);
    assertDone("processSync", "process", complete);
    ok(result, "we either bailed on an error or have a tree");
    return result;
    function realDone(error, file2) {
      complete = true;
      bail(error);
      result = file2;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(tree, file, done) {
    assertNode(tree);
    this.freeze();
    const transformers = this.transformers;
    if (!done && typeof file === "function") {
      done = file;
      file = void 0;
    }
    return done ? executor(void 0, done) : new Promise(executor);
    function executor(resolve, reject) {
      ok(
        typeof file !== "function",
        "`file` can\u2019t be a `done` anymore, we checked"
      );
      const realFile = vfile(file);
      transformers.run(tree, realFile, realDone);
      function realDone(error, outputTree, file2) {
        const resultingTree = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          outputTree || tree
        );
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(resultingTree);
        } else {
          ok(done, "`done` is defined if `resolve` is not");
          done(void 0, resultingTree, file2);
        }
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(tree, file) {
    let complete = false;
    let result;
    this.run(tree, file, realDone);
    assertDone("runSync", "run", complete);
    ok(result, "we either bailed on an error or have a tree");
    return result;
    function realDone(error, tree2) {
      bail(error);
      result = tree2;
      complete = true;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(tree, file) {
    this.freeze();
    const realFile = vfile(file);
    const compiler2 = this.compiler || this.Compiler;
    assertCompiler("stringify", compiler2);
    assertNode(tree);
    return compiler2(tree, realFile);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(value, ...parameters) {
    const attachers = this.attachers;
    const namespace = this.namespace;
    assertUnfrozen("use", this.frozen);
    if (value === null || value === void 0) {
    } else if (typeof value === "function") {
      addPlugin(value, parameters);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    return this;
    function add2(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2, []);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...parameters2] = (
            /** @type {PluginTuple<Array<unknown>>} */
            value2
          );
          addPlugin(plugin, parameters2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      if (!("plugins" in result) && !("settings" in result)) {
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      }
      addList(result.plugins);
      if (result.settings) {
        namespace.settings = (0, import_extend.default)(true, namespace.settings, result.settings);
      }
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins === null || plugins === void 0) {
      } else if (Array.isArray(plugins)) {
        while (++index2 < plugins.length) {
          const thing = plugins[index2];
          add2(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, parameters2) {
      let index2 = -1;
      let entryIndex = -1;
      while (++index2 < attachers.length) {
        if (attachers[index2][0] === plugin) {
          entryIndex = index2;
          break;
        }
      }
      if (entryIndex === -1) {
        attachers.push([plugin, ...parameters2]);
      } else if (parameters2.length > 0) {
        let [primary, ...rest] = parameters2;
        const currentPrimary = attachers[entryIndex][1];
        if (isPlainObject(currentPrimary) && isPlainObject(primary)) {
          primary = (0, import_extend.default)(true, currentPrimary, primary);
        }
        attachers[entryIndex] = [plugin, primary, ...rest];
      }
    }
  }
};
var unified = new Processor().freeze();
function assertParser(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `parser`");
  }
}
function assertCompiler(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `compiler`");
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      "Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
  }
}
function assertNode(node2) {
  if (!isPlainObject(node2) || typeof node2.type !== "string") {
    throw new TypeError("Expected node, got `" + node2 + "`");
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      "`" + name + "` finished async. Use `" + asyncName + "` instead"
    );
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(
    value && typeof value === "object" && "message" in value && "messages" in value
  );
}
function looksLikeAValue(value) {
  return typeof value === "string" || isUint8Array2(value);
}
function isUint8Array2(value) {
  return Boolean(
    value && typeof value === "object" && "byteLength" in value && "byteOffset" in value
  );
}

// node_modules/mdast-util-to-string/lib/index.js
var emptyOptions = {};
function toString(value, options) {
  const settings = options || emptyOptions;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one(value, includeImageAlt, includeHtml);
}
function one(value, includeImageAlt, includeHtml) {
  if (node(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all(values, includeImageAlt, includeHtml) {
  const result = [];
  let index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one(values[index2], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node(value) {
  return Boolean(value && typeof value === "object");
}

// node_modules/decode-named-character-reference/index.dom.js
var element = document.createElement("i");
function decodeNamedCharacterReference(value) {
  const characterReference2 = "&" + value + ";";
  element.innerHTML = characterReference2;
  const character = element.textContent;
  if (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    character.charCodeAt(character.length - 1) === 59 && value !== "semi"
  ) {
    return false;
  }
  return character === characterReference2 ? false : character;
}

// node_modules/micromark-util-chunked/index.js
function splice(list3, start, remove, items) {
  const end = list3.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    list3.splice(...parameters);
  } else {
    if (remove) list3.splice(start, remove);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      list3.splice(...parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list3, items) {
  if (list3.length > 0) {
    splice(list3, list3.length, 0, items);
    return list3;
  }
  return items;
}

// node_modules/micromark-util-combine-extensions/index.js
var hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  const all3 = {};
  let index2 = -1;
  while (++index2 < extensions.length) {
    syntaxExtension(all3, extensions[index2]);
  }
  return all3;
}
function syntaxExtension(all3, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe = hasOwnProperty.call(all3, hook) ? all3[hook] : void 0;
    const left = maybe || (all3[hook] = {});
    const right = extension2[hook];
    let code3;
    if (right) {
      for (code3 in right) {
        if (!hasOwnProperty.call(left, code3)) left[code3] = [];
        const value = right[code3];
        constructs(
          // @ts-expect-error Looks like a list.
          left[code3],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }
}
function constructs(existing, list3) {
  let index2 = -1;
  const before = [];
  while (++index2 < list3.length) {
    ;
    (list3[index2].add === "after" ? existing : before).push(list3[index2]);
  }
  splice(existing, 0, 0, before);
}

// node_modules/micromark-util-decode-numeric-character-reference/index.js
function decodeNumericCharacterReference(value, base) {
  const code3 = Number.parseInt(value, base);
  if (
    // C0 except for HT, LF, FF, CR, space.
    code3 < 9 || code3 === 11 || code3 > 13 && code3 < 32 || // Control character (DEL) of C0, and C1 controls.
    code3 > 126 && code3 < 160 || // Lone high surrogates and low surrogates.
    code3 > 55295 && code3 < 57344 || // Noncharacters.
    code3 > 64975 && code3 < 65008 || /* eslint-disable no-bitwise */
    (code3 & 65535) === 65535 || (code3 & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    code3 > 1114111
  ) {
    return "\uFFFD";
  }
  return String.fromCodePoint(code3);
}

// node_modules/micromark-util-normalize-identifier/index.js
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}

// node_modules/micromark-util-character/index.js
var asciiAlpha = regexCheck(/[A-Za-z]/);
var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code3) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code3 !== null && (code3 < 32 || code3 === 127)
  );
}
var asciiDigit = regexCheck(/\d/);
var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(code3) {
  return code3 !== null && code3 < -2;
}
function markdownLineEndingOrSpace(code3) {
  return code3 !== null && (code3 < 0 || code3 === 32);
}
function markdownSpace(code3) {
  return code3 === -2 || code3 === -1 || code3 === 32;
}
var unicodePunctuation = regexCheck(/\p{P}|\p{S}/u);
var unicodeWhitespace = regexCheck(/\s/);
function regexCheck(regex) {
  return check;
  function check(code3) {
    return code3 !== null && code3 > -1 && regex.test(String.fromCharCode(code3));
  }
}

// node_modules/micromark-factory-space/index.js
function factorySpace(effects, ok3, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code3) {
    if (markdownSpace(code3)) {
      effects.enter(type);
      return prefix(code3);
    }
    return ok3(code3);
  }
  function prefix(code3) {
    if (markdownSpace(code3) && size++ < limit) {
      effects.consume(code3);
      return prefix;
    }
    effects.exit(type);
    return ok3(code3);
  }
}

// node_modules/micromark/lib/initialize/content.js
var content = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  let previous4;
  return contentStart;
  function afterContentStartConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code3) {
    effects.enter("paragraph");
    return lineStart(code3);
  }
  function lineStart(code3) {
    const token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous4
    });
    if (previous4) {
      previous4.next = token;
    }
    previous4 = token;
    return data(code3);
  }
  function data(code3) {
    if (code3 === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code3);
      return;
    }
    if (markdownLineEnding(code3)) {
      effects.consume(code3);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code3);
    return data;
  }
}

// node_modules/micromark/lib/initialize/document.js
var document2 = {
  tokenize: initializeDocument
};
var containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  const self2 = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start;
  function start(code3) {
    if (continued < stack.length) {
      const item = stack[continued];
      self2.containerState = item[1];
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code3);
    }
    return checkNewContainers(code3);
  }
  function documentContinue(code3) {
    continued++;
    if (self2.containerState._closeFlow) {
      self2.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self2.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point3;
      while (indexBeforeFlow--) {
        if (self2.events[indexBeforeFlow][0] === "exit" && self2.events[indexBeforeFlow][1].type === "chunkFlow") {
          point3 = self2.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      while (index2 < self2.events.length) {
        self2.events[index2][1].end = {
          ...point3
        };
        index2++;
      }
      splice(self2.events, indexBeforeFlow + 1, 0, self2.events.slice(indexBeforeExits));
      self2.events.length = index2;
      return checkNewContainers(code3);
    }
    return start(code3);
  }
  function checkNewContainers(code3) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code3);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code3);
      }
      self2.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }
    self2.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code3);
  }
  function thereIsANewContainer(code3) {
    if (childFlow) closeFlow();
    exitContainers(continued);
    return documentContinued(code3);
  }
  function thereIsNoNewContainer(code3) {
    self2.parser.lazy[self2.now().line] = continued !== stack.length;
    lineStartOffset = self2.now().offset;
    return flowStart(code3);
  }
  function documentContinued(code3) {
    self2.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code3);
  }
  function containerContinue(code3) {
    continued++;
    stack.push([self2.currentConstruct, self2.containerState]);
    return documentContinued(code3);
  }
  function flowStart(code3) {
    if (code3 === null) {
      if (childFlow) closeFlow();
      exitContainers(0);
      effects.consume(code3);
      return;
    }
    childFlow = childFlow || self2.parser.flow(self2.now());
    effects.enter("chunkFlow", {
      _tokenizer: childFlow,
      contentType: "flow",
      previous: childToken
    });
    return flowContinue(code3);
  }
  function flowContinue(code3) {
    if (code3 === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code3);
      return;
    }
    if (markdownLineEnding(code3)) {
      effects.consume(code3);
      writeToChild(effects.exit("chunkFlow"));
      continued = 0;
      self2.interrupt = void 0;
      return start;
    }
    effects.consume(code3);
    return flowContinue;
  }
  function writeToChild(token, endOfFile) {
    const stream = self2.sliceStream(token);
    if (endOfFile) stream.push(null);
    token.previous = childToken;
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);
    if (self2.parser.lazy[token.start.line]) {
      let index2 = childFlow.events.length;
      while (index2--) {
        if (
          // The token starts before the line ending…
          childFlow.events[index2][1].start.offset < lineStartOffset && // …and either is not ended yet…
          (!childFlow.events[index2][1].end || // …or ends after it.
          childFlow.events[index2][1].end.offset > lineStartOffset)
        ) {
          return;
        }
      }
      const indexBeforeExits = self2.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point3;
      while (indexBeforeFlow--) {
        if (self2.events[indexBeforeFlow][0] === "exit" && self2.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point3 = self2.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);
      index2 = indexBeforeExits;
      while (index2 < self2.events.length) {
        self2.events[index2][1].end = {
          ...point3
        };
        index2++;
      }
      splice(self2.events, indexBeforeFlow + 1, 0, self2.events.slice(indexBeforeExits));
      self2.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    while (index2-- > size) {
      const entry = stack[index2];
      self2.containerState = entry[1];
      entry[0].exit.call(self2, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = void 0;
    childFlow = void 0;
    self2.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok3, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok3, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}

// node_modules/micromark-util-classify-character/index.js
function classifyCharacter(code3) {
  if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
    return 1;
  }
  if (unicodePunctuation(code3)) {
    return 2;
  }
}

// node_modules/micromark-util-resolve-all/index.js
function resolveAll(constructs2, events, context) {
  const called = [];
  let index2 = -1;
  while (++index2 < constructs2.length) {
    const resolve = constructs2[index2].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}

// node_modules/micromark-core-commonmark/lib/attention.js
var attention = {
  name: "attention",
  resolveAll: resolveAllAttention,
  tokenize: tokenizeAttention
};
function resolveAllAttention(events, context) {
  let index2 = -1;
  let open;
  let group;
  let text5;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index2 < events.length) {
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      open = index2;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
        context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          const start = {
            ...events[open][1].end
          };
          const end = {
            ...events[index2][1].start
          };
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: {
              ...events[open][1].end
            }
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...events[index2][1].start
            },
            end
          };
          text5 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: {
              ...events[open][1].end
            },
            end: {
              ...events[index2][1].start
            }
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: {
              ...openingSequence.start
            },
            end: {
              ...closingSequence.end
            }
          };
          events[open][1].end = {
            ...openingSequence.start
          };
          events[index2][1].start = {
            ...closingSequence.end
          };
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [["enter", events[open][1], context], ["exit", events[open][1], context]]);
          }
          nextEvents = push(nextEvents, [["enter", group, context], ["enter", openingSequence, context], ["exit", openingSequence, context], ["enter", text5, context]]);
          nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
          nextEvents = push(nextEvents, [["exit", text5, context], ["enter", closingSequence, context], ["exit", closingSequence, context], ["exit", group, context]]);
          if (events[index2][1].end.offset - events[index2][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [["enter", events[index2][1], context], ["exit", events[index2][1], context]]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index2 - open + 3, nextEvents);
          index2 = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index2 = -1;
  while (++index2 < events.length) {
    if (events[index2][1].type === "attentionSequence") {
      events[index2][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok3) {
  const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
  const previous4 = this.previous;
  const before = classifyCharacter(previous4);
  let marker;
  return start;
  function start(code3) {
    marker = code3;
    effects.enter("attentionSequence");
    return inside(code3);
  }
  function inside(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      return inside;
    }
    const token = effects.exit("attentionSequence");
    const after = classifyCharacter(code3);
    const open = !after || after === 2 && before || attentionMarkers2.includes(code3);
    const close = !before || before === 2 && after || attentionMarkers2.includes(previous4);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok3(code3);
  }
}
function movePoint(point3, offset) {
  point3.column += offset;
  point3.offset += offset;
  point3._bufferIndex += offset;
}

// node_modules/micromark-core-commonmark/lib/autolink.js
var autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok3, nok) {
  let size = 0;
  return start;
  function start(code3) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code3);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return schemeOrEmailAtext;
    }
    if (code3 === 64) {
      return nok(code3);
    }
    return emailAtext(code3);
  }
  function schemeOrEmailAtext(code3) {
    if (code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) {
      size = 1;
      return schemeInsideOrEmailAtext(code3);
    }
    return emailAtext(code3);
  }
  function schemeInsideOrEmailAtext(code3) {
    if (code3 === 58) {
      effects.consume(code3);
      size = 0;
      return urlInside;
    }
    if ((code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) && size++ < 32) {
      effects.consume(code3);
      return schemeInsideOrEmailAtext;
    }
    size = 0;
    return emailAtext(code3);
  }
  function urlInside(code3) {
    if (code3 === 62) {
      effects.exit("autolinkProtocol");
      effects.enter("autolinkMarker");
      effects.consume(code3);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok3;
    }
    if (code3 === null || code3 === 32 || code3 === 60 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return urlInside;
  }
  function emailAtext(code3) {
    if (code3 === 64) {
      effects.consume(code3);
      return emailAtSignOrDot;
    }
    if (asciiAtext(code3)) {
      effects.consume(code3);
      return emailAtext;
    }
    return nok(code3);
  }
  function emailAtSignOrDot(code3) {
    return asciiAlphanumeric(code3) ? emailLabel(code3) : nok(code3);
  }
  function emailLabel(code3) {
    if (code3 === 46) {
      effects.consume(code3);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code3 === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      effects.enter("autolinkMarker");
      effects.consume(code3);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok3;
    }
    return emailValue(code3);
  }
  function emailValue(code3) {
    if ((code3 === 45 || asciiAlphanumeric(code3)) && size++ < 63) {
      const next = code3 === 45 ? emailValue : emailLabel;
      effects.consume(code3);
      return next;
    }
    return nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/blank-line.js
var blankLine = {
  partial: true,
  tokenize: tokenizeBlankLine
};
function tokenizeBlankLine(effects, ok3, nok) {
  return start;
  function start(code3) {
    return markdownSpace(code3) ? factorySpace(effects, after, "linePrefix")(code3) : after(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok3(code3) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/block-quote.js
var blockQuote = {
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit,
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart
};
function tokenizeBlockQuoteStart(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    if (code3 === 62) {
      const state = self2.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code3);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    if (markdownSpace(code3)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code3);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok3;
    }
    effects.exit("blockQuotePrefix");
    return ok3(code3);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok3, nok) {
  const self2 = this;
  return contStart;
  function contStart(code3) {
    if (markdownSpace(code3)) {
      return factorySpace(effects, contBefore, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3);
    }
    return contBefore(code3);
  }
  function contBefore(code3) {
    return effects.attempt(blockQuote, ok3, nok)(code3);
  }
}
function exit(effects) {
  effects.exit("blockQuote");
}

// node_modules/micromark-core-commonmark/lib/character-escape.js
var characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code3);
    effects.exit("escapeMarker");
    return inside;
  }
  function inside(code3) {
    if (asciiPunctuation(code3)) {
      effects.enter("characterEscapeValue");
      effects.consume(code3);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok3;
    }
    return nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/character-reference.js
var characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok3, nok) {
  const self2 = this;
  let size = 0;
  let max;
  let test2;
  return start;
  function start(code3) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code3);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code3) {
    if (code3 === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code3);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test2 = asciiAlphanumeric;
    return value(code3);
  }
  function numeric(code3) {
    if (code3 === 88 || code3 === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code3);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test2 = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test2 = asciiDigit;
    return value(code3);
  }
  function value(code3) {
    if (code3 === 59 && size) {
      const token = effects.exit("characterReferenceValue");
      if (test2 === asciiAlphanumeric && !decodeNamedCharacterReference(self2.sliceSerialize(token))) {
        return nok(code3);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code3);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok3;
    }
    if (test2(code3) && size++ < max) {
      effects.consume(code3);
      return value;
    }
    return nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/code-fenced.js
var nonLazyContinuation = {
  partial: true,
  tokenize: tokenizeNonLazyContinuation
};
var codeFenced = {
  concrete: true,
  name: "codeFenced",
  tokenize: tokenizeCodeFenced
};
function tokenizeCodeFenced(effects, ok3, nok) {
  const self2 = this;
  const closeStart = {
    partial: true,
    tokenize: tokenizeCloseStart
  };
  let initialPrefix = 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code3) {
    return beforeSequenceOpen(code3);
  }
  function beforeSequenceOpen(code3) {
    const tail = self2.events[self2.events.length - 1];
    initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    marker = code3;
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === marker) {
      sizeOpen++;
      effects.consume(code3);
      return sequenceOpen;
    }
    if (sizeOpen < 3) {
      return nok(code3);
    }
    effects.exit("codeFencedFenceSequence");
    return markdownSpace(code3) ? factorySpace(effects, infoBefore, "whitespace")(code3) : infoBefore(code3);
  }
  function infoBefore(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFencedFence");
      return self2.interrupt ? ok3(code3) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code3);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code3);
  }
  function info(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return infoBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, metaBefore, "whitespace")(code3);
    }
    if (code3 === 96 && code3 === marker) {
      return nok(code3);
    }
    effects.consume(code3);
    return info;
  }
  function metaBefore(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return infoBefore(code3);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code3);
  }
  function meta(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return infoBefore(code3);
    }
    if (code3 === 96 && code3 === marker) {
      return nok(code3);
    }
    effects.consume(code3);
    return meta;
  }
  function atNonLazyBreak(code3) {
    return effects.attempt(closeStart, after, contentBefore)(code3);
  }
  function contentBefore(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return contentStart;
  }
  function contentStart(code3) {
    return initialPrefix > 0 && markdownSpace(code3) ? factorySpace(effects, beforeContentChunk, "linePrefix", initialPrefix + 1)(code3) : beforeContentChunk(code3);
  }
  function beforeContentChunk(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code3);
    }
    effects.enter("codeFlowValue");
    return contentChunk(code3);
  }
  function contentChunk(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFlowValue");
      return beforeContentChunk(code3);
    }
    effects.consume(code3);
    return contentChunk;
  }
  function after(code3) {
    effects.exit("codeFenced");
    return ok3(code3);
  }
  function tokenizeCloseStart(effects2, ok4, nok2) {
    let size = 0;
    return startBefore;
    function startBefore(code3) {
      effects2.enter("lineEnding");
      effects2.consume(code3);
      effects2.exit("lineEnding");
      return start2;
    }
    function start2(code3) {
      effects2.enter("codeFencedFence");
      return markdownSpace(code3) ? factorySpace(effects2, beforeSequenceClose, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3) : beforeSequenceClose(code3);
    }
    function beforeSequenceClose(code3) {
      if (code3 === marker) {
        effects2.enter("codeFencedFenceSequence");
        return sequenceClose(code3);
      }
      return nok2(code3);
    }
    function sequenceClose(code3) {
      if (code3 === marker) {
        size++;
        effects2.consume(code3);
        return sequenceClose;
      }
      if (size >= sizeOpen) {
        effects2.exit("codeFencedFenceSequence");
        return markdownSpace(code3) ? factorySpace(effects2, sequenceCloseAfter, "whitespace")(code3) : sequenceCloseAfter(code3);
      }
      return nok2(code3);
    }
    function sequenceCloseAfter(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects2.exit("codeFencedFence");
        return ok4(code3);
      }
      return nok2(code3);
    }
  }
}
function tokenizeNonLazyContinuation(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code3) {
    return self2.parser.lazy[self2.now().line] ? nok(code3) : ok3(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/code-indented.js
var codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
};
var furtherStart = {
  partial: true,
  tokenize: tokenizeFurtherStart
};
function tokenizeCodeIndented(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    effects.enter("codeIndented");
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterPrefix(code3) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code3) : nok(code3);
  }
  function atBreak(code3) {
    if (code3 === null) {
      return after(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.attempt(furtherStart, atBreak, after)(code3);
    }
    effects.enter("codeFlowValue");
    return inside(code3);
  }
  function inside(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFlowValue");
      return atBreak(code3);
    }
    effects.consume(code3);
    return inside;
  }
  function after(code3) {
    effects.exit("codeIndented");
    return ok3(code3);
  }
}
function tokenizeFurtherStart(effects, ok3, nok) {
  const self2 = this;
  return furtherStart2;
  function furtherStart2(code3) {
    if (self2.parser.lazy[self2.now().line]) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return furtherStart2;
    }
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterPrefix(code3) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok3(code3) : markdownLineEnding(code3) ? furtherStart2(code3) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/code-text.js
var codeText = {
  name: "codeText",
  previous,
  resolve: resolveCodeText,
  tokenize: tokenizeCodeText
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index2;
  let enter2;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter2 === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter2 = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter2][1].type = "codeTextData";
      if (index2 !== enter2 + 2) {
        events[enter2][1].end = events[index2 - 1][1].end;
        events.splice(enter2 + 2, index2 - enter2 - 2);
        tailExitIndex -= index2 - enter2 - 2;
        index2 = enter2 + 2;
      }
      enter2 = void 0;
    }
  }
  return events;
}
function previous(code3) {
  return code3 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok3, nok) {
  const self2 = this;
  let sizeOpen = 0;
  let size;
  let token;
  return start;
  function start(code3) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === 96) {
      effects.consume(code3);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeTextSequence");
    return between(code3);
  }
  function between(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 32) {
      effects.enter("space");
      effects.consume(code3);
      effects.exit("space");
      return between;
    }
    if (code3 === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return sequenceClose(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return between;
    }
    effects.enter("codeTextData");
    return data(code3);
  }
  function data(code3) {
    if (code3 === null || code3 === 32 || code3 === 96 || markdownLineEnding(code3)) {
      effects.exit("codeTextData");
      return between(code3);
    }
    effects.consume(code3);
    return data;
  }
  function sequenceClose(code3) {
    if (code3 === 96) {
      effects.consume(code3);
      size++;
      return sequenceClose;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok3(code3);
    }
    token.type = "codeTextData";
    return data(code3);
  }
}

// node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var SpliceBuffer = class {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(initial) {
    this.left = initial ? [...initial] : [];
    this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(index2) {
    if (index2 < 0 || index2 >= this.left.length + this.right.length) {
      throw new RangeError("Cannot access index `" + index2 + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    }
    if (index2 < this.left.length) return this.left[index2];
    return this.right[this.right.length - index2 + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    this.setCursor(0);
    return this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(start, end) {
    const stop = end === null || end === void 0 ? Number.POSITIVE_INFINITY : end;
    if (stop < this.left.length) {
      return this.left.slice(start, stop);
    }
    if (start > this.left.length) {
      return this.right.slice(this.right.length - stop + this.left.length, this.right.length - start + this.left.length).reverse();
    }
    return this.left.slice(start).concat(this.right.slice(this.right.length - stop + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(start, deleteCount, items) {
    const count2 = deleteCount || 0;
    this.setCursor(Math.trunc(start));
    const removed = this.right.splice(this.right.length - count2, Number.POSITIVE_INFINITY);
    if (items) chunkedPush(this.left, items);
    return removed.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    this.setCursor(Number.POSITIVE_INFINITY);
    return this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(item) {
    this.setCursor(Number.POSITIVE_INFINITY);
    this.left.push(item);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(items) {
    this.setCursor(Number.POSITIVE_INFINITY);
    chunkedPush(this.left, items);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(item) {
    this.setCursor(0);
    this.right.push(item);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(items) {
    this.setCursor(0);
    chunkedPush(this.right, items.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(n) {
    if (n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0) return;
    if (n < this.left.length) {
      const removed = this.left.splice(n, Number.POSITIVE_INFINITY);
      chunkedPush(this.right, removed.reverse());
    } else {
      const removed = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
      chunkedPush(this.left, removed.reverse());
    }
  }
};
function chunkedPush(list3, right) {
  let chunkStart = 0;
  if (right.length < 1e4) {
    list3.push(...right);
  } else {
    while (chunkStart < right.length) {
      list3.push(...right.slice(chunkStart, chunkStart + 1e4));
      chunkStart += 1e4;
    }
  }
}

// node_modules/micromark-util-subtokenize/index.js
function subtokenize(eventsArray) {
  const jumps = {};
  let index2 = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  const events = new SpliceBuffer(eventsArray);
  while (++index2 < events.length) {
    while (index2 in jumps) {
      index2 = jumps[index2];
    }
    event = events.get(index2);
    if (index2 && event[1].type === "chunkFlow" && events.get(index2 - 1)[1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index2));
        index2 = jumps[index2];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index2;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events.get(otherIndex);
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events.get(lineIndex)[1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else if (otherEvent[1].type === "linePrefix" || otherEvent[1].type === "listItemIndent") {
        } else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = {
          ...events.get(lineIndex)[1].start
        };
        parameters = events.slice(lineIndex, index2);
        parameters.unshift(event);
        events.splice(lineIndex, index2 - lineIndex + 1, parameters);
      }
    }
  }
  splice(eventsArray, 0, Number.POSITIVE_INFINITY, events.slice(0));
  return !more;
}
function subcontent(events, eventIndex) {
  const token = events.get(eventIndex)[1];
  const context = events.get(eventIndex)[2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  let tokenizer = token._tokenizer;
  if (!tokenizer) {
    tokenizer = context.parser[token.contentType](token.start);
    if (token._contentTypeTextTrailing) {
      tokenizer._contentTypeTextTrailing = true;
    }
  }
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous4;
  let index2 = -1;
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];
  while (current) {
    while (events.get(++startPosition)[1] !== current) {
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous4) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous4 = current;
    current = current.next;
  }
  current = token;
  while (++index2 < childEvents.length) {
    if (
      // Find a void token that includes a break.
      childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line
    ) {
      start = index2 + 1;
      breaks.push(start);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
  } else {
    breaks.pop();
  }
  index2 = breaks.length;
  while (index2--) {
    const slice = childEvents.slice(breaks[index2], breaks[index2 + 1]);
    const start2 = startPositions.pop();
    jumps.push([start2, start2 + slice.length - 1]);
    events.splice(start2, 2, slice);
  }
  jumps.reverse();
  index2 = -1;
  while (++index2 < jumps.length) {
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
    adjust += jumps[index2][1] - jumps[index2][0] - 1;
  }
  return gaps;
}

// node_modules/micromark-core-commonmark/lib/content.js
var content2 = {
  resolve: resolveContent,
  tokenize: tokenizeContent
};
var continuationConstruct = {
  partial: true,
  tokenize: tokenizeContinuation
};
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok3) {
  let previous4;
  return chunkStart;
  function chunkStart(code3) {
    effects.enter("content");
    previous4 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return chunkInside(code3);
  }
  function chunkInside(code3) {
    if (code3 === null) {
      return contentEnd(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code3);
    }
    effects.consume(code3);
    return chunkInside;
  }
  function contentEnd(code3) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok3(code3);
  }
  function contentContinue(code3) {
    effects.consume(code3);
    effects.exit("chunkContent");
    previous4.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous4
    });
    previous4 = previous4.next;
    return chunkInside;
  }
}
function tokenizeContinuation(effects, ok3, nok) {
  const self2 = this;
  return startLookahead;
  function startLookahead(code3) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return nok(code3);
    }
    const tail = self2.events[self2.events.length - 1];
    if (!self2.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok3(code3);
    }
    return effects.interrupt(self2.parser.constructs.flow, nok, ok3)(code3);
  }
}

// node_modules/micromark-factory-destination/index.js
function factoryDestination(effects, ok3, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code3) {
    if (code3 === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code3);
      effects.exit(literalMarkerType);
      return enclosedBefore;
    }
    if (code3 === null || code3 === 32 || code3 === 41 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return raw(code3);
  }
  function enclosedBefore(code3) {
    if (code3 === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code3);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok3;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return enclosed(code3);
  }
  function enclosed(code3) {
    if (code3 === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return enclosedBefore(code3);
    }
    if (code3 === null || code3 === 60 || markdownLineEnding(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? enclosedEscape : enclosed;
  }
  function enclosedEscape(code3) {
    if (code3 === 60 || code3 === 62 || code3 === 92) {
      effects.consume(code3);
      return enclosed;
    }
    return enclosed(code3);
  }
  function raw(code3) {
    if (!balance && (code3 === null || code3 === 41 || markdownLineEndingOrSpace(code3))) {
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok3(code3);
    }
    if (balance < limit && code3 === 40) {
      effects.consume(code3);
      balance++;
      return raw;
    }
    if (code3 === 41) {
      effects.consume(code3);
      balance--;
      return raw;
    }
    if (code3 === null || code3 === 32 || code3 === 40 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? rawEscape : raw;
  }
  function rawEscape(code3) {
    if (code3 === 40 || code3 === 41 || code3 === 92) {
      effects.consume(code3);
      return raw;
    }
    return raw(code3);
  }
}

// node_modules/micromark-factory-label/index.js
function factoryLabel(effects, ok3, nok, type, markerType, stringType) {
  const self2 = this;
  let size = 0;
  let seen;
  return start;
  function start(code3) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code3);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code3) {
    if (size > 999 || code3 === null || code3 === 91 || code3 === 93 && !seen || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    code3 === 94 && !size && "_hiddenFootnoteSupport" in self2.parser.constructs) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      effects.exit(type);
      return ok3;
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return labelInside(code3);
  }
  function labelInside(code3) {
    if (code3 === null || code3 === 91 || code3 === 93 || markdownLineEnding(code3) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code3);
    }
    effects.consume(code3);
    if (!seen) seen = !markdownSpace(code3);
    return code3 === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return labelInside;
    }
    return labelInside(code3);
  }
}

// node_modules/micromark-factory-title/index.js
function factoryTitle(effects, ok3, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code3) {
    if (code3 === 34 || code3 === 39 || code3 === 40) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      marker = code3 === 40 ? 41 : code3;
      return begin;
    }
    return nok(code3);
  }
  function begin(code3) {
    if (code3 === marker) {
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      effects.exit(type);
      return ok3;
    }
    effects.enter(stringType);
    return atBreak(code3);
  }
  function atBreak(code3) {
    if (code3 === marker) {
      effects.exit(stringType);
      return begin(marker);
    }
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return factorySpace(effects, atBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return inside(code3);
  }
  function inside(code3) {
    if (code3 === marker || code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      return atBreak(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? escape : inside;
  }
  function escape(code3) {
    if (code3 === marker || code3 === 92) {
      effects.consume(code3);
      return inside;
    }
    return inside(code3);
  }
}

// node_modules/micromark-factory-whitespace/index.js
function factoryWhitespace(effects, ok3) {
  let seen;
  return start;
  function start(code3) {
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code3);
    }
    return ok3(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/definition.js
var definition = {
  name: "definition",
  tokenize: tokenizeDefinition
};
var titleBefore = {
  partial: true,
  tokenize: tokenizeTitleBefore
};
function tokenizeDefinition(effects, ok3, nok) {
  const self2 = this;
  let identifier;
  return start;
  function start(code3) {
    effects.enter("definition");
    return before(code3);
  }
  function before(code3) {
    return factoryLabel.call(
      self2,
      effects,
      labelAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(code3);
  }
  function labelAfter(code3) {
    identifier = normalizeIdentifier(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1));
    if (code3 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code3);
      effects.exit("definitionMarker");
      return markerAfter;
    }
    return nok(code3);
  }
  function markerAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, destinationBefore)(code3) : destinationBefore(code3);
  }
  function destinationBefore(code3) {
    return factoryDestination(
      effects,
      destinationAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(code3);
  }
  function destinationAfter(code3) {
    return effects.attempt(titleBefore, after, after)(code3);
  }
  function after(code3) {
    return markdownSpace(code3) ? factorySpace(effects, afterWhitespace, "whitespace")(code3) : afterWhitespace(code3);
  }
  function afterWhitespace(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("definition");
      self2.parser.defined.push(identifier);
      return ok3(code3);
    }
    return nok(code3);
  }
}
function tokenizeTitleBefore(effects, ok3, nok) {
  return titleBefore2;
  function titleBefore2(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, beforeMarker)(code3) : nok(code3);
  }
  function beforeMarker(code3) {
    return factoryTitle(effects, titleAfter, nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code3);
  }
  function titleAfter(code3) {
    return markdownSpace(code3) ? factorySpace(effects, titleAfterOptionalWhitespace, "whitespace")(code3) : titleAfterOptionalWhitespace(code3);
  }
  function titleAfterOptionalWhitespace(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok3(code3) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.enter("hardBreakEscape");
    effects.consume(code3);
    return after;
  }
  function after(code3) {
    if (markdownLineEnding(code3)) {
      effects.exit("hardBreakEscape");
      return ok3(code3);
    }
    return nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/heading-atx.js
var headingAtx = {
  name: "headingAtx",
  resolve: resolveHeadingAtx,
  tokenize: tokenizeHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content3;
  let text5;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content3 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text5 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [["enter", content3, context], ["enter", text5, context], ["exit", text5, context], ["exit", content3, context]]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok3, nok) {
  let size = 0;
  return start;
  function start(code3) {
    effects.enter("atxHeading");
    return before(code3);
  }
  function before(code3) {
    effects.enter("atxHeadingSequence");
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === 35 && size++ < 6) {
      effects.consume(code3);
      return sequenceOpen;
    }
    if (code3 === null || markdownLineEndingOrSpace(code3)) {
      effects.exit("atxHeadingSequence");
      return atBreak(code3);
    }
    return nok(code3);
  }
  function atBreak(code3) {
    if (code3 === 35) {
      effects.enter("atxHeadingSequence");
      return sequenceFurther(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("atxHeading");
      return ok3(code3);
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, atBreak, "whitespace")(code3);
    }
    effects.enter("atxHeadingText");
    return data(code3);
  }
  function sequenceFurther(code3) {
    if (code3 === 35) {
      effects.consume(code3);
      return sequenceFurther;
    }
    effects.exit("atxHeadingSequence");
    return atBreak(code3);
  }
  function data(code3) {
    if (code3 === null || code3 === 35 || markdownLineEndingOrSpace(code3)) {
      effects.exit("atxHeadingText");
      return atBreak(code3);
    }
    effects.consume(code3);
    return data;
  }
}

// node_modules/micromark-util-html-tag-name/index.js
var htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var htmlRawNames = ["pre", "script", "style", "textarea"];

// node_modules/micromark-core-commonmark/lib/html-flow.js
var htmlFlow = {
  concrete: true,
  name: "htmlFlow",
  resolveTo: resolveToHtmlFlow,
  tokenize: tokenizeHtmlFlow
};
var blankLineBefore = {
  partial: true,
  tokenize: tokenizeBlankLineBefore
};
var nonLazyContinuationStart = {
  partial: true,
  tokenize: tokenizeNonLazyContinuationStart
};
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
      break;
    }
  }
  if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
    events[index2][1].start = events[index2 - 2][1].start;
    events[index2 + 1][1].start = events[index2 - 2][1].start;
    events.splice(index2 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok3, nok) {
  const self2 = this;
  let marker;
  let closingTag;
  let buffer;
  let index2;
  let markerB;
  return start;
  function start(code3) {
    return before(code3);
  }
  function before(code3) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code3);
    return open;
  }
  function open(code3) {
    if (code3 === 33) {
      effects.consume(code3);
      return declarationOpen;
    }
    if (code3 === 47) {
      effects.consume(code3);
      closingTag = true;
      return tagCloseStart;
    }
    if (code3 === 63) {
      effects.consume(code3);
      marker = 3;
      return self2.interrupt ? ok3 : continuationDeclarationInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      buffer = String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function declarationOpen(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      marker = 2;
      return commentOpenInside;
    }
    if (code3 === 91) {
      effects.consume(code3);
      marker = 5;
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      marker = 4;
      return self2.interrupt ? ok3 : continuationDeclarationInside;
    }
    return nok(code3);
  }
  function commentOpenInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return self2.interrupt ? ok3 : continuationDeclarationInside;
    }
    return nok(code3);
  }
  function cdataOpenInside(code3) {
    const value = "CDATA[";
    if (code3 === value.charCodeAt(index2++)) {
      effects.consume(code3);
      if (index2 === value.length) {
        return self2.interrupt ? ok3 : continuation;
      }
      return cdataOpenInside;
    }
    return nok(code3);
  }
  function tagCloseStart(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      buffer = String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function tagName(code3) {
    if (code3 === null || code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      const slash = code3 === 47;
      const name = buffer.toLowerCase();
      if (!slash && !closingTag && htmlRawNames.includes(name)) {
        marker = 1;
        return self2.interrupt ? ok3(code3) : continuation(code3);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        marker = 6;
        if (slash) {
          effects.consume(code3);
          return basicSelfClosing;
        }
        return self2.interrupt ? ok3(code3) : continuation(code3);
      }
      marker = 7;
      return self2.interrupt && !self2.parser.lazy[self2.now().line] ? nok(code3) : closingTag ? completeClosingTagAfter(code3) : completeAttributeNameBefore(code3);
    }
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      buffer += String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function basicSelfClosing(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return self2.interrupt ? ok3 : continuation;
    }
    return nok(code3);
  }
  function completeClosingTagAfter(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeClosingTagAfter;
    }
    return completeEnd(code3);
  }
  function completeAttributeNameBefore(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return completeEnd;
    }
    if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
      effects.consume(code3);
      return completeAttributeName;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeNameBefore;
    }
    return completeEnd(code3);
  }
  function completeAttributeName(code3) {
    if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code3);
  }
  function completeAttributeNameAfter(code3) {
    if (code3 === 61) {
      effects.consume(code3);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code3);
  }
  function completeAttributeValueBefore(code3) {
    if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 34 || code3 === 39) {
      effects.consume(code3);
      markerB = code3;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeValueBefore;
    }
    return completeAttributeValueUnquoted(code3);
  }
  function completeAttributeValueQuoted(code3) {
    if (code3 === markerB) {
      effects.consume(code3);
      markerB = null;
      return completeAttributeValueQuotedAfter;
    }
    if (code3 === null || markdownLineEnding(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code3) {
    if (code3 === null || code3 === 34 || code3 === 39 || code3 === 47 || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 || markdownLineEndingOrSpace(code3)) {
      return completeAttributeNameAfter(code3);
    }
    effects.consume(code3);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code3) {
    if (code3 === 47 || code3 === 62 || markdownSpace(code3)) {
      return completeAttributeNameBefore(code3);
    }
    return nok(code3);
  }
  function completeEnd(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return completeAfter;
    }
    return nok(code3);
  }
  function completeAfter(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return continuation(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAfter;
    }
    return nok(code3);
  }
  function continuation(code3) {
    if (code3 === 45 && marker === 2) {
      effects.consume(code3);
      return continuationCommentInside;
    }
    if (code3 === 60 && marker === 1) {
      effects.consume(code3);
      return continuationRawTagOpen;
    }
    if (code3 === 62 && marker === 4) {
      effects.consume(code3);
      return continuationClose;
    }
    if (code3 === 63 && marker === 3) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    if (code3 === 93 && marker === 5) {
      effects.consume(code3);
      return continuationCdataInside;
    }
    if (markdownLineEnding(code3) && (marker === 6 || marker === 7)) {
      effects.exit("htmlFlowData");
      return effects.check(blankLineBefore, continuationAfter, continuationStart)(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("htmlFlowData");
      return continuationStart(code3);
    }
    effects.consume(code3);
    return continuation;
  }
  function continuationStart(code3) {
    return effects.check(nonLazyContinuationStart, continuationStartNonLazy, continuationAfter)(code3);
  }
  function continuationStartNonLazy(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return continuationBefore;
  }
  function continuationBefore(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return continuationStart(code3);
    }
    effects.enter("htmlFlowData");
    return continuation(code3);
  }
  function continuationCommentInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationRawTagOpen(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      buffer = "";
      return continuationRawEndTag;
    }
    return continuation(code3);
  }
  function continuationRawEndTag(code3) {
    if (code3 === 62) {
      const name = buffer.toLowerCase();
      if (htmlRawNames.includes(name)) {
        effects.consume(code3);
        return continuationClose;
      }
      return continuation(code3);
    }
    if (asciiAlpha(code3) && buffer.length < 8) {
      effects.consume(code3);
      buffer += String.fromCharCode(code3);
      return continuationRawEndTag;
    }
    return continuation(code3);
  }
  function continuationCdataInside(code3) {
    if (code3 === 93) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationDeclarationInside(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return continuationClose;
    }
    if (code3 === 45 && marker === 2) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationClose(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("htmlFlowData");
      return continuationAfter(code3);
    }
    effects.consume(code3);
    return continuationClose;
  }
  function continuationAfter(code3) {
    effects.exit("htmlFlow");
    return ok3(code3);
  }
}
function tokenizeNonLazyContinuationStart(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return self2.parser.lazy[self2.now().line] ? nok(code3) : ok3(code3);
  }
}
function tokenizeBlankLineBefore(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return effects.attempt(blankLine, ok3, nok);
  }
}

// node_modules/micromark-core-commonmark/lib/html-text.js
var htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok3, nok) {
  const self2 = this;
  let marker;
  let index2;
  let returnState;
  return start;
  function start(code3) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code3);
    return open;
  }
  function open(code3) {
    if (code3 === 33) {
      effects.consume(code3);
      return declarationOpen;
    }
    if (code3 === 47) {
      effects.consume(code3);
      return tagCloseStart;
    }
    if (code3 === 63) {
      effects.consume(code3);
      return instruction;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return tagOpen;
    }
    return nok(code3);
  }
  function declarationOpen(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentOpenInside;
    }
    if (code3 === 91) {
      effects.consume(code3);
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return declaration;
    }
    return nok(code3);
  }
  function commentOpenInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentEnd;
    }
    return nok(code3);
  }
  function comment(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 45) {
      effects.consume(code3);
      return commentClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = comment;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return comment;
  }
  function commentClose(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentEnd;
    }
    return comment(code3);
  }
  function commentEnd(code3) {
    return code3 === 62 ? end(code3) : code3 === 45 ? commentClose(code3) : comment(code3);
  }
  function cdataOpenInside(code3) {
    const value = "CDATA[";
    if (code3 === value.charCodeAt(index2++)) {
      effects.consume(code3);
      return index2 === value.length ? cdata : cdataOpenInside;
    }
    return nok(code3);
  }
  function cdata(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.consume(code3);
      return cdataClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = cdata;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return cdata;
  }
  function cdataClose(code3) {
    if (code3 === 93) {
      effects.consume(code3);
      return cdataEnd;
    }
    return cdata(code3);
  }
  function cdataEnd(code3) {
    if (code3 === 62) {
      return end(code3);
    }
    if (code3 === 93) {
      effects.consume(code3);
      return cdataEnd;
    }
    return cdata(code3);
  }
  function declaration(code3) {
    if (code3 === null || code3 === 62) {
      return end(code3);
    }
    if (markdownLineEnding(code3)) {
      returnState = declaration;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return declaration;
  }
  function instruction(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 63) {
      effects.consume(code3);
      return instructionClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = instruction;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return instruction;
  }
  function instructionClose(code3) {
    return code3 === 62 ? end(code3) : instruction(code3);
  }
  function tagCloseStart(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return tagClose;
    }
    return nok(code3);
  }
  function tagClose(code3) {
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagClose;
    }
    return tagCloseBetween(code3);
  }
  function tagCloseBetween(code3) {
    if (markdownLineEnding(code3)) {
      returnState = tagCloseBetween;
      return lineEndingBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagCloseBetween;
    }
    return end(code3);
  }
  function tagOpen(code3) {
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagOpen;
    }
    if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    return nok(code3);
  }
  function tagOpenBetween(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return end;
    }
    if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
      effects.consume(code3);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenBetween;
      return lineEndingBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenBetween;
    }
    return end(code3);
  }
  function tagOpenAttributeName(code3) {
    if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code3);
  }
  function tagOpenAttributeNameAfter(code3) {
    if (code3 === 61) {
      effects.consume(code3);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeNameAfter;
      return lineEndingBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code3);
  }
  function tagOpenAttributeValueBefore(code3) {
    if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 34 || code3 === 39) {
      effects.consume(code3);
      marker = code3;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeValueBefore;
      return lineEndingBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code3);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      marker = void 0;
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeValueQuoted;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueUnquoted(code3) {
    if (code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    effects.consume(code3);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuotedAfter(code3) {
    if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    return nok(code3);
  }
  function end(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok3;
    }
    return nok(code3);
  }
  function lineEndingBefore(code3) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return lineEndingAfter;
  }
  function lineEndingAfter(code3) {
    return markdownSpace(code3) ? factorySpace(effects, lineEndingAfterPrefix, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3) : lineEndingAfterPrefix(code3);
  }
  function lineEndingAfterPrefix(code3) {
    effects.enter("htmlTextData");
    return returnState(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/label-end.js
var labelEnd = {
  name: "labelEnd",
  resolveAll: resolveAllLabelEnd,
  resolveTo: resolveToLabelEnd,
  tokenize: tokenizeLabelEnd
};
var resourceConstruct = {
  tokenize: tokenizeResource
};
var referenceFullConstruct = {
  tokenize: tokenizeReferenceFull
};
var referenceCollapsedConstruct = {
  tokenize: tokenizeReferenceCollapsed
};
function resolveAllLabelEnd(events) {
  let index2 = -1;
  const newEvents = [];
  while (++index2 < events.length) {
    const token = events[index2][1];
    newEvents.push(events[index2]);
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      const offset = token.type === "labelImage" ? 4 : 2;
      token.type = "data";
      index2 += offset;
    }
  }
  if (events.length !== newEvents.length) {
    splice(events, 0, events.length, newEvents);
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index2--) {
    token = events[index2][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index2][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index2;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index2;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: {
      ...events[open][1].start
    },
    end: {
      ...events[events.length - 1][1].end
    }
  };
  const label4 = {
    type: "label",
    start: {
      ...events[open][1].start
    },
    end: {
      ...events[close][1].end
    }
  };
  const text5 = {
    type: "labelText",
    start: {
      ...events[open + offset + 2][1].end
    },
    end: {
      ...events[close - 2][1].start
    }
  };
  media = [["enter", group, context], ["enter", label4, context]];
  media = push(media, events.slice(open + 1, open + offset + 3));
  media = push(media, [["enter", text5, context]]);
  media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
  media = push(media, [["exit", text5, context], events[close - 2], events[close - 1], ["exit", label4, context]]);
  media = push(media, events.slice(close + 1));
  media = push(media, [["exit", group, context]]);
  splice(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok3, nok) {
  const self2 = this;
  let index2 = self2.events.length;
  let labelStart;
  let defined;
  while (index2--) {
    if ((self2.events[index2][1].type === "labelImage" || self2.events[index2][1].type === "labelLink") && !self2.events[index2][1]._balanced) {
      labelStart = self2.events[index2][1];
      break;
    }
  }
  return start;
  function start(code3) {
    if (!labelStart) {
      return nok(code3);
    }
    if (labelStart._inactive) {
      return labelEndNok(code3);
    }
    defined = self2.parser.defined.includes(normalizeIdentifier(self2.sliceSerialize({
      start: labelStart.end,
      end: self2.now()
    })));
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code3);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return after;
  }
  function after(code3) {
    if (code3 === 40) {
      return effects.attempt(resourceConstruct, labelEndOk, defined ? labelEndOk : labelEndNok)(code3);
    }
    if (code3 === 91) {
      return effects.attempt(referenceFullConstruct, labelEndOk, defined ? referenceNotFull : labelEndNok)(code3);
    }
    return defined ? labelEndOk(code3) : labelEndNok(code3);
  }
  function referenceNotFull(code3) {
    return effects.attempt(referenceCollapsedConstruct, labelEndOk, labelEndNok)(code3);
  }
  function labelEndOk(code3) {
    return ok3(code3);
  }
  function labelEndNok(code3) {
    labelStart._balanced = true;
    return nok(code3);
  }
}
function tokenizeResource(effects, ok3, nok) {
  return resourceStart;
  function resourceStart(code3) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code3);
    effects.exit("resourceMarker");
    return resourceBefore;
  }
  function resourceBefore(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, resourceOpen)(code3) : resourceOpen(code3);
  }
  function resourceOpen(code3) {
    if (code3 === 41) {
      return resourceEnd(code3);
    }
    return factoryDestination(effects, resourceDestinationAfter, resourceDestinationMissing, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code3);
  }
  function resourceDestinationAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, resourceBetween)(code3) : resourceEnd(code3);
  }
  function resourceDestinationMissing(code3) {
    return nok(code3);
  }
  function resourceBetween(code3) {
    if (code3 === 34 || code3 === 39 || code3 === 40) {
      return factoryTitle(effects, resourceTitleAfter, nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code3);
    }
    return resourceEnd(code3);
  }
  function resourceTitleAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, resourceEnd)(code3) : resourceEnd(code3);
  }
  function resourceEnd(code3) {
    if (code3 === 41) {
      effects.enter("resourceMarker");
      effects.consume(code3);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok3;
    }
    return nok(code3);
  }
}
function tokenizeReferenceFull(effects, ok3, nok) {
  const self2 = this;
  return referenceFull;
  function referenceFull(code3) {
    return factoryLabel.call(self2, effects, referenceFullAfter, referenceFullMissing, "reference", "referenceMarker", "referenceString")(code3);
  }
  function referenceFullAfter(code3) {
    return self2.parser.defined.includes(normalizeIdentifier(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1))) ? ok3(code3) : nok(code3);
  }
  function referenceFullMissing(code3) {
    return nok(code3);
  }
}
function tokenizeReferenceCollapsed(effects, ok3, nok) {
  return referenceCollapsedStart;
  function referenceCollapsedStart(code3) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code3);
    effects.exit("referenceMarker");
    return referenceCollapsedOpen;
  }
  function referenceCollapsedOpen(code3) {
    if (code3 === 93) {
      effects.enter("referenceMarker");
      effects.consume(code3);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok3;
    }
    return nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/label-start-image.js
var labelStartImage = {
  name: "labelStartImage",
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartImage
};
function tokenizeLabelStartImage(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code3);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code3) {
    if (code3 === 91) {
      effects.enter("labelMarker");
      effects.consume(code3);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code3) : ok3(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/label-start-link.js
var labelStartLink = {
  name: "labelStartLink",
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartLink
};
function tokenizeLabelStartLink(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code3);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code3) : ok3(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/line-ending.js
var lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok3) {
  return start;
  function start(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, ok3, "linePrefix");
  }
}

// node_modules/micromark-core-commonmark/lib/thematic-break.js
var thematicBreak = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok3, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code3) {
    effects.enter("thematicBreak");
    return before(code3);
  }
  function before(code3) {
    marker = code3;
    return atBreak(code3);
  }
  function atBreak(code3) {
    if (code3 === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code3);
    }
    if (size >= 3 && (code3 === null || markdownLineEnding(code3))) {
      effects.exit("thematicBreak");
      return ok3(code3);
    }
    return nok(code3);
  }
  function sequence(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return markdownSpace(code3) ? factorySpace(effects, atBreak, "whitespace")(code3) : atBreak(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/list.js
var list = {
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd,
  name: "list",
  tokenize: tokenizeListStart
};
var listItemPrefixWhitespaceConstruct = {
  partial: true,
  tokenize: tokenizeListItemPrefixWhitespace
};
var indentConstruct = {
  partial: true,
  tokenize: tokenizeIndent
};
function tokenizeListStart(effects, ok3, nok) {
  const self2 = this;
  const tail = self2.events[self2.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code3) {
    const kind = self2.containerState.type || (code3 === 42 || code3 === 43 || code3 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self2.containerState.marker || code3 === self2.containerState.marker : asciiDigit(code3)) {
      if (!self2.containerState.type) {
        self2.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code3 === 42 || code3 === 45 ? effects.check(thematicBreak, nok, atMarker)(code3) : atMarker(code3);
      }
      if (!self2.interrupt || code3 === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code3);
      }
    }
    return nok(code3);
  }
  function inside(code3) {
    if (asciiDigit(code3) && ++size < 10) {
      effects.consume(code3);
      return inside;
    }
    if ((!self2.interrupt || size < 2) && (self2.containerState.marker ? code3 === self2.containerState.marker : code3 === 41 || code3 === 46)) {
      effects.exit("listItemValue");
      return atMarker(code3);
    }
    return nok(code3);
  }
  function atMarker(code3) {
    effects.enter("listItemMarker");
    effects.consume(code3);
    effects.exit("listItemMarker");
    self2.containerState.marker = self2.containerState.marker || code3;
    return effects.check(
      blankLine,
      // Can’t be empty when interrupting.
      self2.interrupt ? nok : onBlank,
      effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix)
    );
  }
  function onBlank(code3) {
    self2.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code3);
  }
  function otherPrefix(code3) {
    if (markdownSpace(code3)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code3);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code3);
  }
  function endOfPrefix(code3) {
    self2.containerState.size = initialSize + self2.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok3(code3);
  }
}
function tokenizeListContinuation(effects, ok3, nok) {
  const self2 = this;
  self2.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code3) {
    self2.containerState.furtherBlankLines = self2.containerState.furtherBlankLines || self2.containerState.initialBlankLine;
    return factorySpace(effects, ok3, "listItemIndent", self2.containerState.size + 1)(code3);
  }
  function notBlank(code3) {
    if (self2.containerState.furtherBlankLines || !markdownSpace(code3)) {
      self2.containerState.furtherBlankLines = void 0;
      self2.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code3);
    }
    self2.containerState.furtherBlankLines = void 0;
    self2.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok3, notInCurrentItem)(code3);
  }
  function notInCurrentItem(code3) {
    self2.containerState._closeFlow = true;
    self2.interrupt = void 0;
    return factorySpace(effects, effects.attempt(list, ok3, nok), "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3);
  }
}
function tokenizeIndent(effects, ok3, nok) {
  const self2 = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self2.containerState.size + 1);
  function afterPrefix(code3) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self2.containerState.size ? ok3(code3) : nok(code3);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok3, nok) {
  const self2 = this;
  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function afterPrefix(code3) {
    const tail = self2.events[self2.events.length - 1];
    return !markdownSpace(code3) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok3(code3) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/setext-underline.js
var setextUnderline = {
  name: "setextUnderline",
  resolveTo: resolveToSetextUnderline,
  tokenize: tokenizeSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index2 = events.length;
  let content3;
  let text5;
  let definition3;
  while (index2--) {
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content3 = index2;
        break;
      }
      if (events[index2][1].type === "paragraph") {
        text5 = index2;
      }
    } else {
      if (events[index2][1].type === "content") {
        events.splice(index2, 1);
      }
      if (!definition3 && events[index2][1].type === "definition") {
        definition3 = index2;
      }
    }
  }
  const heading2 = {
    type: "setextHeading",
    start: {
      ...events[content3][1].start
    },
    end: {
      ...events[events.length - 1][1].end
    }
  };
  events[text5][1].type = "setextHeadingText";
  if (definition3) {
    events.splice(text5, 0, ["enter", heading2, context]);
    events.splice(definition3 + 1, 0, ["exit", events[content3][1], context]);
    events[content3][1].end = {
      ...events[definition3][1].end
    };
  } else {
    events[content3][1] = heading2;
  }
  events.push(["exit", heading2, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok3, nok) {
  const self2 = this;
  let marker;
  return start;
  function start(code3) {
    let index2 = self2.events.length;
    let paragraph2;
    while (index2--) {
      if (self2.events[index2][1].type !== "lineEnding" && self2.events[index2][1].type !== "linePrefix" && self2.events[index2][1].type !== "content") {
        paragraph2 = self2.events[index2][1].type === "paragraph";
        break;
      }
    }
    if (!self2.parser.lazy[self2.now().line] && (self2.interrupt || paragraph2)) {
      effects.enter("setextHeadingLine");
      marker = code3;
      return before(code3);
    }
    return nok(code3);
  }
  function before(code3) {
    effects.enter("setextHeadingLineSequence");
    return inside(code3);
  }
  function inside(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      return inside;
    }
    effects.exit("setextHeadingLineSequence");
    return markdownSpace(code3) ? factorySpace(effects, after, "lineSuffix")(code3) : after(code3);
  }
  function after(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("setextHeadingLine");
      return ok3(code3);
    }
    return nok(code3);
  }
}

// node_modules/micromark/lib/initialize/flow.js
var flow = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  const self2 = this;
  const initial = effects.attempt(
    // Try to parse a blank line.
    blankLine,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content2, afterConstruct)), "linePrefix"))
  );
  return initial;
  function atBlankEnding(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code3);
    effects.exit("lineEndingBlank");
    self2.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    self2.currentConstruct = void 0;
    return initial;
  }
}

// node_modules/micromark/lib/initialize/text.js
var resolver = {
  resolveAll: createResolver()
};
var string = initializeFactory("string");
var text = initializeFactory("text");
function initializeFactory(field) {
  return {
    resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0),
    tokenize: initializeText
  };
  function initializeText(effects) {
    const self2 = this;
    const constructs2 = this.parser.constructs[field];
    const text5 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code3) {
      return atBreak(code3) ? text5(code3) : notText(code3);
    }
    function notText(code3) {
      if (code3 === null) {
        effects.consume(code3);
        return;
      }
      effects.enter("data");
      effects.consume(code3);
      return data;
    }
    function data(code3) {
      if (atBreak(code3)) {
        effects.exit("data");
        return text5(code3);
      }
      effects.consume(code3);
      return data;
    }
    function atBreak(code3) {
      if (code3 === null) {
        return true;
      }
      const list3 = constructs2[code3];
      let index2 = -1;
      if (list3) {
        while (++index2 < list3.length) {
          const item = list3[index2];
          if (!item.previous || item.previous.call(self2, self2.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1;
    let enter2;
    while (++index2 <= events.length) {
      if (enter2 === void 0) {
        if (events[index2] && events[index2][1].type === "data") {
          enter2 = index2;
          index2++;
        }
      } else if (!events[index2] || events[index2][1].type !== "data") {
        if (index2 !== enter2 + 2) {
          events[enter2][1].end = events[index2 - 1][1].end;
          events.splice(enter2 + 2, index2 - enter2 - 2);
          index2 = enter2 + 2;
        }
        enter2 = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index2 = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index2--) {
        const chunk = chunks[index2];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex) break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) {
        } else {
          index2++;
          break;
        }
      }
      if (context._contentTypeTextTrailing && eventIndex === events.length) {
        size = 0;
      }
      if (size) {
        const token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex,
            _index: data.start._index + index2,
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size
          },
          end: {
            ...data.end
          }
        };
        data.end = {
          ...token.start
        };
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ["enter", token, context], ["exit", token, context]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}

// node_modules/micromark/lib/constructs.js
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document3,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text2
});
var document3 = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
};
var contentInitial = {
  [91]: definition
};
var flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
var flow2 = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
};
var string2 = {
  [38]: characterReference,
  [92]: characterEscape
};
var text2 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
var insideSpan = {
  null: [attention, resolver]
};
var attentionMarkers = {
  null: [42, 95]
};
var disable = {
  null: []
};

// node_modules/micromark/lib/create-tokenizer.js
function createTokenizer(parser, initialize, from) {
  let point3 = {
    _bufferIndex: -1,
    _index: 0,
    line: from && from.line || 1,
    column: from && from.column || 1,
    offset: from && from.offset || 0
  };
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  let consumed = true;
  const effects = {
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    consume,
    enter: enter2,
    exit: exit4,
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    code: null,
    containerState: {},
    defineSkip,
    events: [],
    now,
    parser,
    previous: null,
    sliceSerialize,
    sliceStream,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  let expectedCode;
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    const {
      _bufferIndex,
      _index,
      line,
      column,
      offset
    } = point3;
    return {
      _bufferIndex,
      _index,
      line,
      column,
      offset
    };
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point3._index < chunks.length) {
      const chunk = chunks[point3._index];
      if (typeof chunk === "string") {
        chunkIndex = point3._index;
        if (point3._bufferIndex < 0) {
          point3._bufferIndex = 0;
        }
        while (point3._index === chunkIndex && point3._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point3._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code3) {
    consumed = void 0;
    expectedCode = code3;
    state = state(code3);
  }
  function consume(code3) {
    if (markdownLineEnding(code3)) {
      point3.line++;
      point3.column = 1;
      point3.offset += code3 === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code3 !== -1) {
      point3.column++;
      point3.offset++;
    }
    if (point3._bufferIndex < 0) {
      point3._index++;
    } else {
      point3._bufferIndex++;
      if (point3._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
      // strings.
      /** @type {string} */
      chunks[point3._index].length) {
        point3._bufferIndex = -1;
        point3._index++;
      }
    }
    context.previous = code3;
    consumed = true;
  }
  function enter2(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit4(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs2) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs2)
      ) : "tokenize" in constructs2 ? (
        // Looks like a construct.
        handleListOfConstructs([
          /** @type {Construct} */
          constructs2
        ])
      ) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map3) {
        return start;
        function start(code3) {
          const left = code3 !== null && map3[code3];
          const all3 = code3 !== null && map3.null;
          const list3 = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(left) ? left : left ? [left] : [],
            ...Array.isArray(all3) ? all3 : all3 ? [all3] : []
          ];
          return handleListOfConstructs(list3)(code3);
        }
      }
      function handleListOfConstructs(list3) {
        listOfConstructs = list3;
        constructIndex = 0;
        if (list3.length === 0) {
          return bogusState;
        }
        return handleConstruct(list3[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code3) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok(code3);
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok3,
            nok
          )(code3);
        }
      }
      function ok3(code3) {
        consumed = true;
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code3) {
        consumed = true;
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(context.events, from2, context.events.length - from2, construct.resolve(context.events.slice(from2), context));
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      from: startEventsIndex,
      restore
    };
    function restore() {
      point3 = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point3.line in columnStart && point3.column < 2) {
      point3.column = columnStart[point3.line];
      point3.offset += columnStart[point3.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      const head = view[0];
      if (typeof head === "string") {
        view[0] = head.slice(startBufferIndex);
      } else {
        view.shift();
      }
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1;
  const result = [];
  let atTab;
  while (++index2 < chunks.length) {
    const chunk = chunks[index2];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else switch (chunk) {
      case -5: {
        value = "\r";
        break;
      }
      case -4: {
        value = "\n";
        break;
      }
      case -3: {
        value = "\r\n";
        break;
      }
      case -2: {
        value = expandTabs ? " " : "	";
        break;
      }
      case -1: {
        if (!expandTabs && atTab) continue;
        value = " ";
        break;
      }
      default: {
        value = String.fromCharCode(chunk);
      }
    }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

// node_modules/micromark/lib/parse.js
function parse(options) {
  const settings = options || {};
  const constructs2 = (
    /** @type {FullNormalizedExtension} */
    combineExtensions([constructs_exports, ...settings.extensions || []])
  );
  const parser = {
    constructs: constructs2,
    content: create(content),
    defined: [],
    document: create(document2),
    flow: create(flow),
    lazy: {},
    string: create(string),
    text: create(text)
  };
  return parser;
  function create(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}

// node_modules/micromark/lib/postprocess.js
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}

// node_modules/micromark/lib/preprocess.js
var search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1;
  let buffer = "";
  let start = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next;
    let startPosition;
    let endPosition;
    let code3;
    value = buffer + (typeof value === "string" ? value.toString() : new TextDecoder(encoding || void 0).decode(value));
    startPosition = 0;
    buffer = "";
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code3 = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }
      if (code3 === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code3) {
          case 0: {
            chunks.push(65533);
            column++;
            break;
          }
          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next) chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn) chunks.push(-5);
      if (buffer) chunks.push(buffer);
      chunks.push(null);
    }
    return chunks;
  }
}

// node_modules/micromark-util-decode-string/index.js
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head2 = $2.charCodeAt(1);
    const hex = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}

// node_modules/mdast-util-from-markdown/lib/index.js
var own2 = {}.hasOwnProperty;
function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, true))));
}
function compiler(options) {
  const config = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: opener(link2),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading2),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText2, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition3),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis2),
      hardBreakEscape: opener(hardBreak2),
      hardBreakTrailing: opener(hardBreak2),
      htmlFlow: opener(html2, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html2, buffer),
      htmlTextData: onenterdata,
      image: opener(image2),
      label: buffer,
      link: opener(link2),
      listItem: opener(listItem2),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list3, onenterlistordered),
      listUnordered: opener(list3),
      paragraph: opener(paragraph2),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading2),
      strong: opener(strong2),
      thematicBreak: opener(thematicBreak3)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      characterReference: onexitcharacterreference,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  };
  configure(config, (options || {}).mdastExtensions || []);
  const data = {};
  return compile3;
  function compile3(events) {
    let tree = {
      type: "root",
      children: []
    };
    const context = {
      stack: [tree],
      tokenStack: [],
      config,
      enter: enter2,
      exit: exit4,
      buffer,
      resume,
      data
    };
    const listStack = [];
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
        if (events[index2][0] === "enter") {
          listStack.push(index2);
        } else {
          const tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      const handler = config[events[index2][0]];
      if (own2.call(handler, events[index2][1].type)) {
        handler[events[index2][1].type].call(Object.assign({
          sliceSerialize: events[index2][2].sliceSerialize
        }, context), events[index2][1]);
      }
    }
    if (context.tokenStack.length > 0) {
      const tail = context.tokenStack[context.tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point2(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point2(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    index2 = -1;
    while (++index2 < config.transforms.length) {
      tree = config.transforms[index2](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem3;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index2 <= length) {
      const event = events[index2];
      switch (event[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          if (event[0] === "enter") {
            containerBalance++;
          } else {
            containerBalance--;
          }
          atMarker = void 0;
          break;
        }
        case "lineEndingBlank": {
          if (event[0] === "enter") {
            if (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex) {
              firstBlankLineIndex = index2;
            }
            atMarker = void 0;
          }
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace": {
          break;
        }
        default: {
          atMarker = void 0;
        }
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem3) {
          let tailIndex = index2;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit") continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
            } else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem3._spread = true;
          }
          listItem3.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index2, 0, ["exit", listItem3, event[2]]);
          index2++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          const item = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          listItem3 = item;
          events.splice(index2, 0, ["enter", item, event[2]]);
          index2++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter2.call(this, create(token), token);
      if (and) and.call(this, token);
    }
  }
  function buffer() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter2(node2, token, errorHandler) {
    const parent2 = this.stack[this.stack.length - 1];
    const siblings = parent2.children;
    siblings.push(node2);
    this.stack.push(node2);
    this.tokenStack.push([token, errorHandler || void 0]);
    node2.position = {
      start: point2(token.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) and.call(this, token);
      exit4.call(this, token);
    }
  }
  function exit4(token, onExitError) {
    const node2 = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
        start: token.start,
        end: token.end
      }) + "): it\u2019s not open");
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node2.position.end = point2(token.end);
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    this.data.expectingFirstListItemValue = true;
  }
  function onenterlistitemvalue(token) {
    if (this.data.expectingFirstListItemValue) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      this.data.expectingFirstListItemValue = void 0;
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.meta = data2;
  }
  function onexitcodefencedfence() {
    if (this.data.flowCodeInside) return;
    this.buffer();
    this.data.flowCodeInside = true;
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    this.data.flowCodeInside = void 0;
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    const label4 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label4;
    node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data2;
  }
  function onexitatxheadingsequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    if (!node2.depth) {
      const depth = this.sliceSerialize(token).length;
      node2.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    this.data.setextHeadingSlurpLineEnding = true;
  }
  function onexitsetextheadinglinesequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    node2.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function onenterdata(token) {
    const node2 = this.stack[this.stack.length - 1];
    const siblings = node2.children;
    let tail = siblings[siblings.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text5();
      tail.position = {
        start: point2(token.start),
        // @ts-expect-error: we’ll add `end` later.
        end: void 0
      };
      siblings.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point2(token.end);
  }
  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point2(token.end);
      this.data.atHardBreak = void 0;
      return;
    }
    if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    this.data.atHardBreak = true;
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexitlink() {
    const node2 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitimage() {
    const node2 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitlabeltext(token) {
    const string5 = this.sliceSerialize(token);
    const ancestor = this.stack[this.stack.length - 2];
    ancestor.label = decodeString(string5);
    ancestor.identifier = normalizeIdentifier(string5).toLowerCase();
  }
  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    this.data.inReference = true;
    if (node2.type === "link") {
      const children = fragment.children;
      node2.children = children;
    } else {
      node2.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data2;
  }
  function onexitresource() {
    this.data.inReference = void 0;
  }
  function onenterreference() {
    this.data.referenceType = "collapsed";
  }
  function onexitreferencestring(token) {
    const label4 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label4;
    node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    this.data.referenceType = "full";
  }
  function onexitcharacterreferencemarker(token) {
    this.data.characterReferenceType = token.type;
  }
  function onexitcharacterreferencevalue(token) {
    const data2 = this.sliceSerialize(token);
    const type = this.data.characterReferenceType;
    let value;
    if (type) {
      value = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
      this.data.characterReferenceType = void 0;
    } else {
      const result = decodeNamedCharacterReference(data2);
      value = result;
    }
    const tail = this.stack[this.stack.length - 1];
    tail.value += value;
  }
  function onexitcharacterreference(token) {
    const tail = this.stack.pop();
    tail.position.end = point2(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition3() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis2() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading2() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function hardBreak2() {
    return {
      type: "break"
    };
  }
  function html2() {
    return {
      type: "html",
      value: ""
    };
  }
  function image2() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link2() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list3(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem2(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph2() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong2() {
    return {
      type: "strong",
      children: []
    };
  }
  function text5() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak3() {
    return {
      type: "thematicBreak"
    };
  }
}
function point2(d) {
  return {
    line: d.line,
    column: d.column,
    offset: d.offset
  };
}
function configure(combined, extensions) {
  let index2 = -1;
  while (++index2 < extensions.length) {
    const value = extensions[index2];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
}
function extension(combined, extension2) {
  let key;
  for (key in extension2) {
    if (own2.call(extension2, key)) {
      switch (key) {
        case "canContainEols": {
          const right = extension2[key];
          if (right) {
            combined[key].push(...right);
          }
          break;
        }
        case "transforms": {
          const right = extension2[key];
          if (right) {
            combined[key].push(...right);
          }
          break;
        }
        case "enter":
        case "exit": {
          const right = extension2[key];
          if (right) {
            Object.assign(combined[key], right);
          }
          break;
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
      start: left.start,
      end: left.end
    }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is open");
  } else {
    throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is still open");
  }
}

// node_modules/remark-parse/lib/index.js
function remarkParse(options) {
  const self2 = this;
  self2.parser = parser;
  function parser(doc) {
    return fromMarkdown(doc, {
      ...self2.data("settings"),
      ...options,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: self2.data("micromarkExtensions") || [],
      mdastExtensions: self2.data("fromMarkdownExtensions") || []
    });
  }
}

// node_modules/mdast-util-gfm-autolink-literal/node_modules/ccount/index.js
function ccount(value, character) {
  const source = String(value);
  if (typeof character !== "string") {
    throw new TypeError("Expected character");
  }
  let count2 = 0;
  let index2 = source.indexOf(character);
  while (index2 !== -1) {
    count2++;
    index2 = source.indexOf(character, index2 + character.length);
  }
  return count2;
}

// node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js
function escapeStringRegexp(string5) {
  if (typeof string5 !== "string") {
    throw new TypeError("Expected a string");
  }
  return string5.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

// node_modules/unist-util-is/lib/index.js
var convert = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(test2) {
    if (test2 === null || test2 === void 0) {
      return ok2;
    }
    if (typeof test2 === "function") {
      return castFactory(test2);
    }
    if (typeof test2 === "object") {
      return Array.isArray(test2) ? anyFactory(test2) : propsFactory(test2);
    }
    if (typeof test2 === "string") {
      return typeFactory(test2);
    }
    throw new Error("Expected function, string, or object as test");
  }
);
function anyFactory(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].apply(this, parameters)) return true;
    }
    return false;
  }
}
function propsFactory(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory(all3);
  function all3(node2) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node2
    );
    let key;
    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node2) {
    return node2 && node2.type === check;
  }
}
function castFactory(testFunction) {
  return check;
  function check(value, index2, parent2) {
    return Boolean(
      looksLikeANode(value) && testFunction.call(
        this,
        value,
        typeof index2 === "number" ? index2 : void 0,
        parent2 || void 0
      )
    );
  }
}
function ok2() {
  return true;
}
function looksLikeANode(value) {
  return value !== null && typeof value === "object" && "type" in value;
}

// node_modules/unist-util-visit-parents/lib/color.js
function color(d) {
  return d;
}

// node_modules/unist-util-visit-parents/lib/index.js
var empty = [];
var CONTINUE = true;
var EXIT = false;
var SKIP = "skip";
function visitParents(tree, test2, visitor, reverse) {
  let check;
  if (typeof test2 === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test2;
  } else {
    check = test2;
  }
  const is3 = convert(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node2, index2, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node2 && typeof node2 === "object" ? node2 : {}
    );
    if (typeof value.type === "string") {
      const name = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(node2.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = empty;
      let subresult;
      let offset;
      let grandparents;
      if (!test2 || is3(node2, index2, parents[parents.length - 1] || void 0)) {
        result = toResult(visitor(node2, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if ("children" in node2 && node2.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node2
        );
        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];
            subresult = factory(child, offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return value === null || value === void 0 ? empty : [value];
}

// node_modules/mdast-util-find-and-replace/lib/index.js
function findAndReplace(tree, list3, options) {
  const settings = options || {};
  const ignored = convert(settings.ignore || []);
  const pairs = toPairs(list3);
  let pairIndex = -1;
  while (++pairIndex < pairs.length) {
    visitParents(tree, "text", visitor);
  }
  function visitor(node2, parents) {
    let index2 = -1;
    let grandparent;
    while (++index2 < parents.length) {
      const parent2 = parents[index2];
      const siblings = grandparent ? grandparent.children : void 0;
      if (ignored(
        parent2,
        siblings ? siblings.indexOf(parent2) : void 0,
        grandparent
      )) {
        return;
      }
      grandparent = parent2;
    }
    if (grandparent) {
      return handler(node2, parents);
    }
  }
  function handler(node2, parents) {
    const parent2 = parents[parents.length - 1];
    const find = pairs[pairIndex][0];
    const replace2 = pairs[pairIndex][1];
    let start = 0;
    const siblings = parent2.children;
    const index2 = siblings.indexOf(node2);
    let change = false;
    let nodes = [];
    find.lastIndex = 0;
    let match = find.exec(node2.value);
    while (match) {
      const position2 = match.index;
      const matchObject = {
        index: match.index,
        input: match.input,
        stack: [...parents, node2]
      };
      let value = replace2(...match, matchObject);
      if (typeof value === "string") {
        value = value.length > 0 ? { type: "text", value } : void 0;
      }
      if (value === false) {
        find.lastIndex = position2 + 1;
      } else {
        if (start !== position2) {
          nodes.push({
            type: "text",
            value: node2.value.slice(start, position2)
          });
        }
        if (Array.isArray(value)) {
          nodes.push(...value);
        } else if (value) {
          nodes.push(value);
        }
        start = position2 + match[0].length;
        change = true;
      }
      if (!find.global) {
        break;
      }
      match = find.exec(node2.value);
    }
    if (change) {
      if (start < node2.value.length) {
        nodes.push({ type: "text", value: node2.value.slice(start) });
      }
      parent2.children.splice(index2, 1, ...nodes);
    } else {
      nodes = [node2];
    }
    return index2 + nodes.length;
  }
}
function toPairs(tupleOrList) {
  const result = [];
  if (!Array.isArray(tupleOrList)) {
    throw new TypeError("Expected find and replace tuple or list of tuples");
  }
  const list3 = !tupleOrList[0] || Array.isArray(tupleOrList[0]) ? tupleOrList : [tupleOrList];
  let index2 = -1;
  while (++index2 < list3.length) {
    const tuple = list3[index2];
    result.push([toExpression(tuple[0]), toFunction(tuple[1])]);
  }
  return result;
}
function toExpression(find) {
  return typeof find === "string" ? new RegExp(escapeStringRegexp(find), "g") : find;
}
function toFunction(replace2) {
  return typeof replace2 === "function" ? replace2 : function() {
    return replace2;
  };
}

// node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var inConstruct = "phrasing";
var notInConstruct = ["autolink", "link", "image", "label"];
function gfmAutolinkLiteralFromMarkdown() {
  return {
    transforms: [transformGfmAutolinkLiterals],
    enter: {
      literalAutolink: enterLiteralAutolink,
      literalAutolinkEmail: enterLiteralAutolinkValue,
      literalAutolinkHttp: enterLiteralAutolinkValue,
      literalAutolinkWww: enterLiteralAutolinkValue
    },
    exit: {
      literalAutolink: exitLiteralAutolink,
      literalAutolinkEmail: exitLiteralAutolinkEmail,
      literalAutolinkHttp: exitLiteralAutolinkHttp,
      literalAutolinkWww: exitLiteralAutolinkWww
    }
  };
}
function gfmAutolinkLiteralToMarkdown() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct,
        notInConstruct
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct,
        notInConstruct
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct,
        notInConstruct
      }
    ]
  };
}
function enterLiteralAutolink(token) {
  this.enter({ type: "link", title: null, url: "", children: [] }, token);
}
function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  const node2 = this.stack[this.stack.length - 1];
  ok(node2.type === "link");
  node2.url = "http://" + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
  this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
  findAndReplace(
    tree,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
      [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, findEmail]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function findUrl(_, protocol, domain2, path2, match) {
  let prefix = "";
  if (!previous2(match)) {
    return false;
  }
  if (/^w/i.test(protocol)) {
    domain2 = protocol + domain2;
    protocol = "";
    prefix = "http://";
  }
  if (!isCorrectDomain(domain2)) {
    return false;
  }
  const parts = splitUrl(domain2 + path2);
  if (!parts[0]) return false;
  const result = {
    type: "link",
    title: null,
    url: prefix + protocol + parts[0],
    children: [{ type: "text", value: protocol + parts[0] }]
  };
  if (parts[1]) {
    return [result, { type: "text", value: parts[1] }];
  }
  return result;
}
function findEmail(_, atext, label4, match) {
  if (
    // Not an expected previous character.
    !previous2(match, true) || // Label ends in not allowed character.
    /[-\d_]$/.test(label4)
  ) {
    return false;
  }
  return {
    type: "link",
    title: null,
    url: "mailto:" + atext + "@" + label4,
    children: [{ type: "text", value: atext + "@" + label4 }]
  };
}
function isCorrectDomain(domain2) {
  const parts = domain2.split(".");
  if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
    return false;
  }
  return true;
}
function splitUrl(url) {
  const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
  if (!trailExec) {
    return [url, void 0];
  }
  url = url.slice(0, trailExec.index);
  let trail2 = trailExec[0];
  let closingParenIndex = trail2.indexOf(")");
  const openingParens = ccount(url, "(");
  let closingParens = ccount(url, ")");
  while (closingParenIndex !== -1 && openingParens > closingParens) {
    url += trail2.slice(0, closingParenIndex + 1);
    trail2 = trail2.slice(closingParenIndex + 1);
    closingParenIndex = trail2.indexOf(")");
    closingParens++;
  }
  return [url, trail2];
}
function previous2(match, email) {
  const code3 = match.input.charCodeAt(match.index - 1);
  return (match.index === 0 || unicodeWhitespace(code3) || unicodePunctuation(code3)) && // If it’s an email, the previous character should not be a slash.
  (!email || code3 !== 47);
}

// node_modules/mdast-util-gfm-footnote/lib/index.js
footnoteReference.peek = footnoteReferencePeek;
function enterFootnoteCallString() {
  this.buffer();
}
function enterFootnoteCall(token) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, token);
}
function enterFootnoteDefinitionLabelString() {
  this.buffer();
}
function enterFootnoteDefinition(token) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    token
  );
}
function exitFootnoteCallString(token) {
  const label4 = this.resume();
  const node2 = this.stack[this.stack.length - 1];
  ok(node2.type === "footnoteReference");
  node2.identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase();
  node2.label = label4;
}
function exitFootnoteCall(token) {
  this.exit(token);
}
function exitFootnoteDefinitionLabelString(token) {
  const label4 = this.resume();
  const node2 = this.stack[this.stack.length - 1];
  ok(node2.type === "footnoteDefinition");
  node2.identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase();
  node2.label = label4;
}
function exitFootnoteDefinition(token) {
  this.exit(token);
}
function footnoteReferencePeek() {
  return "[";
}
function footnoteReference(node2, _, state, info) {
  const tracker = state.createTracker(info);
  let value = tracker.move("[^");
  const exit4 = state.enter("footnoteReference");
  const subexit = state.enter("reference");
  value += tracker.move(
    state.safe(state.associationId(node2), { after: "]", before: value })
  );
  subexit();
  exit4();
  value += tracker.move("]");
  return value;
}
function gfmFootnoteFromMarkdown() {
  return {
    enter: {
      gfmFootnoteCallString: enterFootnoteCallString,
      gfmFootnoteCall: enterFootnoteCall,
      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
      gfmFootnoteDefinition: enterFootnoteDefinition
    },
    exit: {
      gfmFootnoteCallString: exitFootnoteCallString,
      gfmFootnoteCall: exitFootnoteCall,
      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
      gfmFootnoteDefinition: exitFootnoteDefinition
    }
  };
}
function gfmFootnoteToMarkdown(options) {
  let firstLineBlank = false;
  if (options && options.firstLineBlank) {
    firstLineBlank = true;
  }
  return {
    handlers: { footnoteDefinition, footnoteReference },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function footnoteDefinition(node2, _, state, info) {
    const tracker = state.createTracker(info);
    let value = tracker.move("[^");
    const exit4 = state.enter("footnoteDefinition");
    const subexit = state.enter("label");
    value += tracker.move(
      state.safe(state.associationId(node2), { before: value, after: "]" })
    );
    subexit();
    value += tracker.move("]:");
    if (node2.children && node2.children.length > 0) {
      tracker.shift(4);
      value += tracker.move(
        (firstLineBlank ? "\n" : " ") + state.indentLines(
          state.containerFlow(node2, tracker.current()),
          firstLineBlank ? mapAll : mapExceptFirst
        )
      );
    }
    exit4();
    return value;
  }
}
function mapExceptFirst(line, index2, blank) {
  return index2 === 0 ? line : mapAll(line, index2, blank);
}
function mapAll(line, index2, blank) {
  return (blank ? "" : "    ") + line;
}

// node_modules/mdast-util-gfm-strikethrough/lib/index.js
var constructsWithoutStrikethrough = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
handleDelete.peek = peekDelete;
function gfmStrikethroughFromMarkdown() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: enterStrikethrough },
    exit: { strikethrough: exitStrikethrough }
  };
}
function gfmStrikethroughToMarkdown() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: constructsWithoutStrikethrough
      }
    ],
    handlers: { delete: handleDelete }
  };
}
function enterStrikethrough(token) {
  this.enter({ type: "delete", children: [] }, token);
}
function exitStrikethrough(token) {
  this.exit(token);
}
function handleDelete(node2, _, state, info) {
  const tracker = state.createTracker(info);
  const exit4 = state.enter("strikethrough");
  let value = tracker.move("~~");
  value += state.containerPhrasing(node2, {
    ...tracker.current(),
    before: value,
    after: "~"
  });
  value += tracker.move("~~");
  exit4();
  return value;
}
function peekDelete() {
  return "~";
}

// node_modules/mdast-util-gfm-table/node_modules/markdown-table/index.js
function defaultStringLength(value) {
  return value.length;
}
function markdownTable(table, options) {
  const settings = options || {};
  const align = (settings.align || []).concat();
  const stringLength = settings.stringLength || defaultStringLength;
  const alignments = [];
  const cellMatrix = [];
  const sizeMatrix = [];
  const longestCellByColumn = [];
  let mostCellsPerRow = 0;
  let rowIndex = -1;
  while (++rowIndex < table.length) {
    const row2 = [];
    const sizes2 = [];
    let columnIndex2 = -1;
    if (table[rowIndex].length > mostCellsPerRow) {
      mostCellsPerRow = table[rowIndex].length;
    }
    while (++columnIndex2 < table[rowIndex].length) {
      const cell = serialize(table[rowIndex][columnIndex2]);
      if (settings.alignDelimiters !== false) {
        const size = stringLength(cell);
        sizes2[columnIndex2] = size;
        if (longestCellByColumn[columnIndex2] === void 0 || size > longestCellByColumn[columnIndex2]) {
          longestCellByColumn[columnIndex2] = size;
        }
      }
      row2.push(cell);
    }
    cellMatrix[rowIndex] = row2;
    sizeMatrix[rowIndex] = sizes2;
  }
  let columnIndex = -1;
  if (typeof align === "object" && "length" in align) {
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = toAlignment(align[columnIndex]);
    }
  } else {
    const code3 = toAlignment(align);
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = code3;
    }
  }
  columnIndex = -1;
  const row = [];
  const sizes = [];
  while (++columnIndex < mostCellsPerRow) {
    const code3 = alignments[columnIndex];
    let before = "";
    let after = "";
    if (code3 === 99) {
      before = ":";
      after = ":";
    } else if (code3 === 108) {
      before = ":";
    } else if (code3 === 114) {
      after = ":";
    }
    let size = settings.alignDelimiters === false ? 1 : Math.max(
      1,
      longestCellByColumn[columnIndex] - before.length - after.length
    );
    const cell = before + "-".repeat(size) + after;
    if (settings.alignDelimiters !== false) {
      size = before.length + size + after.length;
      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size;
      }
      sizes[columnIndex] = size;
    }
    row[columnIndex] = cell;
  }
  cellMatrix.splice(1, 0, row);
  sizeMatrix.splice(1, 0, sizes);
  rowIndex = -1;
  const lines = [];
  while (++rowIndex < cellMatrix.length) {
    const row2 = cellMatrix[rowIndex];
    const sizes2 = sizeMatrix[rowIndex];
    columnIndex = -1;
    const line = [];
    while (++columnIndex < mostCellsPerRow) {
      const cell = row2[columnIndex] || "";
      let before = "";
      let after = "";
      if (settings.alignDelimiters !== false) {
        const size = longestCellByColumn[columnIndex] - (sizes2[columnIndex] || 0);
        const code3 = alignments[columnIndex];
        if (code3 === 114) {
          before = " ".repeat(size);
        } else if (code3 === 99) {
          if (size % 2) {
            before = " ".repeat(size / 2 + 0.5);
            after = " ".repeat(size / 2 - 0.5);
          } else {
            before = " ".repeat(size / 2);
            after = before;
          }
        } else {
          after = " ".repeat(size);
        }
      }
      if (settings.delimiterStart !== false && !columnIndex) {
        line.push("|");
      }
      if (settings.padding !== false && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(settings.alignDelimiters === false && cell === "") && (settings.delimiterStart !== false || columnIndex)) {
        line.push(" ");
      }
      if (settings.alignDelimiters !== false) {
        line.push(before);
      }
      line.push(cell);
      if (settings.alignDelimiters !== false) {
        line.push(after);
      }
      if (settings.padding !== false) {
        line.push(" ");
      }
      if (settings.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) {
        line.push("|");
      }
    }
    lines.push(
      settings.delimiterEnd === false ? line.join("").replace(/ +$/, "") : line.join("")
    );
  }
  return lines.join("\n");
}
function serialize(value) {
  return value === null || value === void 0 ? "" : String(value);
}
function toAlignment(value) {
  const code3 = typeof value === "string" ? value.codePointAt(0) : 0;
  return code3 === 67 || code3 === 99 ? 99 : code3 === 76 || code3 === 108 ? 108 : code3 === 82 || code3 === 114 ? 114 : 0;
}

// node_modules/zwitch/index.js
var own3 = {}.hasOwnProperty;
function zwitch(key, options) {
  const settings = options || {};
  function one3(value, ...parameters) {
    let fn = one3.invalid;
    const handlers = one3.handlers;
    if (value && own3.call(value, key)) {
      const id = String(value[key]);
      fn = own3.call(handlers, id) ? handlers[id] : one3.unknown;
    }
    if (fn) {
      return fn.call(this, value, ...parameters);
    }
  }
  one3.handlers = settings.handlers || {};
  one3.invalid = settings.invalid;
  one3.unknown = settings.unknown;
  return one3;
}

// node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function blockquote(node2, _, state, info) {
  const exit4 = state.enter("blockquote");
  const tracker = state.createTracker(info);
  tracker.move("> ");
  tracker.shift(2);
  const value = state.indentLines(
    state.containerFlow(node2, tracker.current()),
    map
  );
  exit4();
  return value;
}
function map(line, _, blank) {
  return ">" + (blank ? "" : " ") + line;
}

// node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
function listInScope(stack, list3, none) {
  if (typeof list3 === "string") {
    list3 = [list3];
  }
  if (!list3 || list3.length === 0) {
    return none;
  }
  let index2 = -1;
  while (++index2 < list3.length) {
    if (stack.includes(list3[index2])) {
      return true;
    }
  }
  return false;
}

// node_modules/mdast-util-to-markdown/lib/handle/break.js
function hardBreak(_, _1, state, info) {
  let index2 = -1;
  while (++index2 < state.unsafe.length) {
    if (state.unsafe[index2].character === "\n" && patternInScope(state.stack, state.unsafe[index2])) {
      return /[ \t]/.test(info.before) ? "" : " ";
    }
  }
  return "\\\n";
}

// node_modules/mdast-util-to-markdown/node_modules/longest-streak/index.js
function longestStreak(value, substring) {
  const source = String(value);
  let index2 = source.indexOf(substring);
  let expected = index2;
  let count2 = 0;
  let max = 0;
  if (typeof substring !== "string") {
    throw new TypeError("Expected substring");
  }
  while (index2 !== -1) {
    if (index2 === expected) {
      if (++count2 > max) {
        max = count2;
      }
    } else {
      count2 = 1;
    }
    expected = index2 + substring.length;
    index2 = source.indexOf(substring, expected);
  }
  return max;
}

// node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function formatCodeAsIndented(node2, state) {
  return Boolean(
    state.options.fences === false && node2.value && // If there’s no info…
    !node2.lang && // And there’s a non-whitespace character…
    /[^ \r\n]/.test(node2.value) && // And the value doesn’t start or end in a blank…
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node2.value)
  );
}

// node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function checkFence(state) {
  const marker = state.options.fence || "`";
  if (marker !== "`" && marker !== "~") {
    throw new Error(
      "Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/code.js
function code(node2, _, state, info) {
  const marker = checkFence(state);
  const raw = node2.value || "";
  const suffix = marker === "`" ? "GraveAccent" : "Tilde";
  if (formatCodeAsIndented(node2, state)) {
    const exit5 = state.enter("codeIndented");
    const value2 = state.indentLines(raw, map2);
    exit5();
    return value2;
  }
  const tracker = state.createTracker(info);
  const sequence = marker.repeat(Math.max(longestStreak(raw, marker) + 1, 3));
  const exit4 = state.enter("codeFenced");
  let value = tracker.move(sequence);
  if (node2.lang) {
    const subexit = state.enter(`codeFencedLang${suffix}`);
    value += tracker.move(
      state.safe(node2.lang, {
        before: value,
        after: " ",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  if (node2.lang && node2.meta) {
    const subexit = state.enter(`codeFencedMeta${suffix}`);
    value += tracker.move(" ");
    value += tracker.move(
      state.safe(node2.meta, {
        before: value,
        after: "\n",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  value += tracker.move("\n");
  if (raw) {
    value += tracker.move(raw + "\n");
  }
  value += tracker.move(sequence);
  exit4();
  return value;
}
function map2(line, _, blank) {
  return (blank ? "" : "    ") + line;
}

// node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function checkQuote(state) {
  const marker = state.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error(
      "Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/definition.js
function definition2(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit4 = state.enter("definition");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  value += tracker.move(
    state.safe(state.associationId(node2), {
      before: value,
      after: "]",
      ...tracker.current()
    })
  );
  value += tracker.move("]: ");
  subexit();
  if (
    // If there’s no url, or…
    !node2.url || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node2.url, {
        before: value,
        after: node2.title ? " " : "\n",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  exit4();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function checkEmphasis(state) {
  const marker = state.options.emphasis || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function encodeCharacterReference(code3) {
  return "&#x" + code3.toString(16).toUpperCase() + ";";
}

// node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function encodeInfo(outside, inside, marker) {
  const outsideKind = classifyCharacter(outside);
  const insideKind = classifyCharacter(inside);
  if (outsideKind === void 0) {
    return insideKind === void 0 ? (
      // Letter inside:
      // we have to encode *both* letters for `_` as it is looser.
      // it already forms for `*` (and GFMs `~`).
      marker === "_" ? { inside: true, outside: true } : { inside: false, outside: false }
    ) : insideKind === 1 ? (
      // Whitespace inside: encode both (letter, whitespace).
      { inside: true, outside: true }
    ) : (
      // Punctuation inside: encode outer (letter)
      { inside: false, outside: true }
    );
  }
  if (outsideKind === 1) {
    return insideKind === void 0 ? (
      // Letter inside: already forms.
      { inside: false, outside: false }
    ) : insideKind === 1 ? (
      // Whitespace inside: encode both (whitespace).
      { inside: true, outside: true }
    ) : (
      // Punctuation inside: already forms.
      { inside: false, outside: false }
    );
  }
  return insideKind === void 0 ? (
    // Letter inside: already forms.
    { inside: false, outside: false }
  ) : insideKind === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: true, outside: false }
  ) : (
    // Punctuation inside: already forms.
    { inside: false, outside: false }
  );
}

// node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
emphasis.peek = emphasisPeek;
function emphasis(node2, _, state, info) {
  const marker = checkEmphasis(state);
  const exit4 = state.enter("emphasis");
  const tracker = state.createTracker(info);
  const before = tracker.move(marker);
  let between = tracker.move(
    state.containerPhrasing(node2, {
      after: marker,
      before,
      ...tracker.current()
    })
  );
  const betweenHead = between.charCodeAt(0);
  const open = encodeInfo(
    info.before.charCodeAt(info.before.length - 1),
    betweenHead,
    marker
  );
  if (open.inside) {
    between = encodeCharacterReference(betweenHead) + between.slice(1);
  }
  const betweenTail = between.charCodeAt(between.length - 1);
  const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
  if (close.inside) {
    between = between.slice(0, -1) + encodeCharacterReference(betweenTail);
  }
  const after = tracker.move(marker);
  exit4();
  state.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between + after;
}
function emphasisPeek(_, _1, state) {
  return state.options.emphasis || "*";
}

// node_modules/unist-util-visit/lib/index.js
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test2;
  let visitor;
  if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
    test2 = void 0;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    test2 = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents(tree, test2, overload, reverse);
  function overload(node2, parents) {
    const parent2 = parents[parents.length - 1];
    const index2 = parent2 ? parent2.children.indexOf(node2) : void 0;
    return visitor(node2, index2, parent2);
  }
}

// node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function formatHeadingAsSetext(node2, state) {
  let literalWithBreak = false;
  visit(node2, function(node3) {
    if ("value" in node3 && /\r?\n|\r/.test(node3.value) || node3.type === "break") {
      literalWithBreak = true;
      return EXIT;
    }
  });
  return Boolean(
    (!node2.depth || node2.depth < 3) && toString(node2) && (state.options.setext || literalWithBreak)
  );
}

// node_modules/mdast-util-to-markdown/lib/handle/heading.js
function heading(node2, _, state, info) {
  const rank = Math.max(Math.min(6, node2.depth || 1), 1);
  const tracker = state.createTracker(info);
  if (formatHeadingAsSetext(node2, state)) {
    const exit5 = state.enter("headingSetext");
    const subexit2 = state.enter("phrasing");
    const value2 = state.containerPhrasing(node2, {
      ...tracker.current(),
      before: "\n",
      after: "\n"
    });
    subexit2();
    exit5();
    return value2 + "\n" + (rank === 1 ? "=" : "-").repeat(
      // The whole size…
      value2.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(value2.lastIndexOf("\r"), value2.lastIndexOf("\n")) + 1)
    );
  }
  const sequence = "#".repeat(rank);
  const exit4 = state.enter("headingAtx");
  const subexit = state.enter("phrasing");
  tracker.move(sequence + " ");
  let value = state.containerPhrasing(node2, {
    before: "# ",
    after: "\n",
    ...tracker.current()
  });
  if (/^[\t ]/.test(value)) {
    value = encodeCharacterReference(value.charCodeAt(0)) + value.slice(1);
  }
  value = value ? sequence + " " + value : sequence;
  if (state.options.closeAtx) {
    value += " " + sequence;
  }
  subexit();
  exit4();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/handle/html.js
html.peek = htmlPeek;
function html(node2) {
  return node2.value || "";
}
function htmlPeek() {
  return "<";
}

// node_modules/mdast-util-to-markdown/lib/handle/image.js
image.peek = imagePeek;
function image(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit4 = state.enter("image");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  value += tracker.move(
    state.safe(node2.alt, { before: value, after: "]", ...tracker.current() })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node2.url && node2.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node2.url, {
        before: value,
        after: node2.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit4();
  return value;
}
function imagePeek() {
  return "!";
}

// node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
imageReference.peek = imageReferencePeek;
function imageReference(node2, _, state, info) {
  const type = node2.referenceType;
  const exit4 = state.enter("imageReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  const alt3 = state.safe(node2.alt, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(alt3 + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit4();
  if (type === "full" || !alt3 || alt3 !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function imageReferencePeek() {
  return "!";
}

// node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
inlineCode.peek = inlineCodePeek;
function inlineCode(node2, _, state) {
  let value = node2.value || "";
  let sequence = "`";
  let index2 = -1;
  while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
    sequence += "`";
  }
  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = " " + value + " ";
  }
  while (++index2 < state.unsafe.length) {
    const pattern = state.unsafe[index2];
    const expression = state.compilePattern(pattern);
    let match;
    if (!pattern.atBreak) continue;
    while (match = expression.exec(value)) {
      let position2 = match.index;
      if (value.charCodeAt(position2) === 10 && value.charCodeAt(position2 - 1) === 13) {
        position2--;
      }
      value = value.slice(0, position2) + " " + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}

// node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function formatLinkAsAutolink(node2, state) {
  const raw = toString(node2);
  return Boolean(
    !state.options.resourceLink && // If there’s a url…
    node2.url && // And there’s a no title…
    !node2.title && // And the content of `node` is a single text node…
    node2.children && node2.children.length === 1 && node2.children[0].type === "text" && // And if the url is the same as the content…
    (raw === node2.url || "mailto:" + raw === node2.url) && // And that starts w/ a protocol…
    /^[a-z][a-z+.-]+:/i.test(node2.url) && // And that doesn’t contain ASCII control codes (character escapes and
    // references don’t work), space, or angle brackets…
    !/[\0- <>\u007F]/.test(node2.url)
  );
}

// node_modules/mdast-util-to-markdown/lib/handle/link.js
link.peek = linkPeek;
function link(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const tracker = state.createTracker(info);
  let exit4;
  let subexit;
  if (formatLinkAsAutolink(node2, state)) {
    const stack = state.stack;
    state.stack = [];
    exit4 = state.enter("autolink");
    let value2 = tracker.move("<");
    value2 += tracker.move(
      state.containerPhrasing(node2, {
        before: value2,
        after: ">",
        ...tracker.current()
      })
    );
    value2 += tracker.move(">");
    exit4();
    state.stack = stack;
    return value2;
  }
  exit4 = state.enter("link");
  subexit = state.enter("label");
  let value = tracker.move("[");
  value += tracker.move(
    state.containerPhrasing(node2, {
      before: value,
      after: "](",
      ...tracker.current()
    })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node2.url && node2.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node2.url, {
        before: value,
        after: node2.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit4();
  return value;
}
function linkPeek(node2, _, state) {
  return formatLinkAsAutolink(node2, state) ? "<" : "[";
}

// node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
linkReference.peek = linkReferencePeek;
function linkReference(node2, _, state, info) {
  const type = node2.referenceType;
  const exit4 = state.enter("linkReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  const text5 = state.containerPhrasing(node2, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(text5 + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit4();
  if (type === "full" || !text5 || text5 !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function linkReferencePeek() {
  return "[";
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function checkBullet(state) {
  const marker = state.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function checkBulletOther(state) {
  const bullet = checkBullet(state);
  const bulletOther = state.options.bulletOther;
  if (!bulletOther) {
    return bullet === "*" ? "-" : "*";
  }
  if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") {
    throw new Error(
      "Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  }
  if (bulletOther === bullet) {
    throw new Error(
      "Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different"
    );
  }
  return bulletOther;
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function checkBulletOrdered(state) {
  const marker = state.options.bulletOrdered || ".";
  if (marker !== "." && marker !== ")") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function checkRule(state) {
  const marker = state.options.rule || "*";
  if (marker !== "*" && marker !== "-" && marker !== "_") {
    throw new Error(
      "Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/list.js
function list2(node2, parent2, state, info) {
  const exit4 = state.enter("list");
  const bulletCurrent = state.bulletCurrent;
  let bullet = node2.ordered ? checkBulletOrdered(state) : checkBullet(state);
  const bulletOther = node2.ordered ? bullet === "." ? ")" : "." : checkBulletOther(state);
  let useDifferentMarker = parent2 && state.bulletLastUsed ? bullet === state.bulletLastUsed : false;
  if (!node2.ordered) {
    const firstListItem = node2.children ? node2.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (bullet === "*" || bullet === "-") && // Empty first list item:
      firstListItem && (!firstListItem.children || !firstListItem.children[0]) && // Directly in two other list items:
      state.stack[state.stack.length - 1] === "list" && state.stack[state.stack.length - 2] === "listItem" && state.stack[state.stack.length - 3] === "list" && state.stack[state.stack.length - 4] === "listItem" && // That are each the first child.
      state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0
    ) {
      useDifferentMarker = true;
    }
    if (checkRule(state) === bullet && firstListItem) {
      let index2 = -1;
      while (++index2 < node2.children.length) {
        const item = node2.children[index2];
        if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
          useDifferentMarker = true;
          break;
        }
      }
    }
  }
  if (useDifferentMarker) {
    bullet = bulletOther;
  }
  state.bulletCurrent = bullet;
  const value = state.containerFlow(node2, info);
  state.bulletLastUsed = bullet;
  state.bulletCurrent = bulletCurrent;
  exit4();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function checkListItemIndent(state) {
  const style = state.options.listItemIndent || "one";
  if (style !== "tab" && style !== "one" && style !== "mixed") {
    throw new Error(
      "Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  }
  return style;
}

// node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function listItem(node2, parent2, state, info) {
  const listItemIndent = checkListItemIndent(state);
  let bullet = state.bulletCurrent || checkBullet(state);
  if (parent2 && parent2.type === "list" && parent2.ordered) {
    bullet = (typeof parent2.start === "number" && parent2.start > -1 ? parent2.start : 1) + (state.options.incrementListMarker === false ? 0 : parent2.children.indexOf(node2)) + bullet;
  }
  let size = bullet.length + 1;
  if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent2 && parent2.type === "list" && parent2.spread || node2.spread)) {
    size = Math.ceil(size / 4) * 4;
  }
  const tracker = state.createTracker(info);
  tracker.move(bullet + " ".repeat(size - bullet.length));
  tracker.shift(size);
  const exit4 = state.enter("listItem");
  const value = state.indentLines(
    state.containerFlow(node2, tracker.current()),
    map3
  );
  exit4();
  return value;
  function map3(line, index2, blank) {
    if (index2) {
      return (blank ? "" : " ".repeat(size)) + line;
    }
    return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}

// node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function paragraph(node2, _, state, info) {
  const exit4 = state.enter("paragraph");
  const subexit = state.enter("phrasing");
  const value = state.containerPhrasing(node2, info);
  subexit();
  exit4();
  return value;
}

// node_modules/mdast-util-phrasing/lib/index.js
var phrasing = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  convert([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);

// node_modules/mdast-util-to-markdown/lib/handle/root.js
function root(node2, _, state, info) {
  const hasPhrasing = node2.children.some(function(d) {
    return phrasing(d);
  });
  const container = hasPhrasing ? state.containerPhrasing : state.containerFlow;
  return container.call(state, node2, info);
}

// node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function checkStrong(state) {
  const marker = state.options.strong || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/strong.js
strong.peek = strongPeek;
function strong(node2, _, state, info) {
  const marker = checkStrong(state);
  const exit4 = state.enter("strong");
  const tracker = state.createTracker(info);
  const before = tracker.move(marker + marker);
  let between = tracker.move(
    state.containerPhrasing(node2, {
      after: marker,
      before,
      ...tracker.current()
    })
  );
  const betweenHead = between.charCodeAt(0);
  const open = encodeInfo(
    info.before.charCodeAt(info.before.length - 1),
    betweenHead,
    marker
  );
  if (open.inside) {
    between = encodeCharacterReference(betweenHead) + between.slice(1);
  }
  const betweenTail = between.charCodeAt(between.length - 1);
  const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
  if (close.inside) {
    between = between.slice(0, -1) + encodeCharacterReference(betweenTail);
  }
  const after = tracker.move(marker + marker);
  exit4();
  state.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between + after;
}
function strongPeek(_, _1, state) {
  return state.options.strong || "*";
}

// node_modules/mdast-util-to-markdown/lib/handle/text.js
function text3(node2, _, state, info) {
  return state.safe(node2.value, info);
}

// node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function checkRuleRepetition(state) {
  const repetition = state.options.ruleRepetition || 3;
  if (repetition < 3) {
    throw new Error(
      "Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more"
    );
  }
  return repetition;
}

// node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function thematicBreak2(_, _1, state) {
  const value = (checkRule(state) + (state.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(state));
  return state.options.ruleSpaces ? value.slice(0, -1) : value;
}

// node_modules/mdast-util-to-markdown/lib/handle/index.js
var handle = {
  blockquote,
  break: hardBreak,
  code,
  definition: definition2,
  emphasis,
  hardBreak,
  heading,
  html,
  image,
  imageReference,
  inlineCode,
  link,
  linkReference,
  list: list2,
  listItem,
  paragraph,
  root,
  strong,
  text: text3,
  thematicBreak: thematicBreak2
};

// node_modules/mdast-util-gfm-table/lib/index.js
function gfmTableFromMarkdown() {
  return {
    enter: {
      table: enterTable,
      tableData: enterCell,
      tableHeader: enterCell,
      tableRow: enterRow
    },
    exit: {
      codeText: exitCodeText,
      table: exitTable,
      tableData: exit2,
      tableHeader: exit2,
      tableRow: exit2
    }
  };
}
function enterTable(token) {
  const align = token._align;
  ok(align, "expected `_align` on table");
  this.enter(
    {
      type: "table",
      align: align.map(function(d) {
        return d === "none" ? null : d;
      }),
      children: []
    },
    token
  );
  this.data.inTable = true;
}
function exitTable(token) {
  this.exit(token);
  this.data.inTable = void 0;
}
function enterRow(token) {
  this.enter({ type: "tableRow", children: [] }, token);
}
function exit2(token) {
  this.exit(token);
}
function enterCell(token) {
  this.enter({ type: "tableCell", children: [] }, token);
}
function exitCodeText(token) {
  let value = this.resume();
  if (this.data.inTable) {
    value = value.replace(/\\([\\|])/g, replace);
  }
  const node2 = this.stack[this.stack.length - 1];
  ok(node2.type === "inlineCode");
  node2.value = value;
  this.exit(token);
}
function replace($0, $1) {
  return $1 === "|" ? $1 : $0;
}
function gfmTableToMarkdown(options) {
  const settings = options || {};
  const padding = settings.tableCellPadding;
  const alignDelimiters = settings.tablePipeAlign;
  const stringLength = settings.stringLength;
  const around = padding ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: "\n", inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: true, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: true, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: true, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: inlineCodeWithTable,
      table: handleTable,
      tableCell: handleTableCell,
      tableRow: handleTableRow
    }
  };
  function handleTable(node2, _, state, info) {
    return serializeData(handleTableAsData(node2, state, info), node2.align);
  }
  function handleTableRow(node2, _, state, info) {
    const row = handleTableRowAsData(node2, state, info);
    const value = serializeData([row]);
    return value.slice(0, value.indexOf("\n"));
  }
  function handleTableCell(node2, _, state, info) {
    const exit4 = state.enter("tableCell");
    const subexit = state.enter("phrasing");
    const value = state.containerPhrasing(node2, {
      ...info,
      before: around,
      after: around
    });
    subexit();
    exit4();
    return value;
  }
  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength
    });
  }
  function handleTableAsData(node2, state, info) {
    const children = node2.children;
    let index2 = -1;
    const result = [];
    const subexit = state.enter("table");
    while (++index2 < children.length) {
      result[index2] = handleTableRowAsData(children[index2], state, info);
    }
    subexit();
    return result;
  }
  function handleTableRowAsData(node2, state, info) {
    const children = node2.children;
    let index2 = -1;
    const result = [];
    const subexit = state.enter("tableRow");
    while (++index2 < children.length) {
      result[index2] = handleTableCell(children[index2], node2, state, info);
    }
    subexit();
    return result;
  }
  function inlineCodeWithTable(node2, parent2, state) {
    let value = handle.inlineCode(node2, parent2, state);
    if (state.stack.includes("tableCell")) {
      value = value.replace(/\|/g, "\\$&");
    }
    return value;
  }
}

// node_modules/mdast-util-gfm-task-list-item/lib/index.js
function gfmTaskListItemFromMarkdown() {
  return {
    exit: {
      taskListCheckValueChecked: exitCheck,
      taskListCheckValueUnchecked: exitCheck,
      paragraph: exitParagraphWithTaskListItem
    }
  };
}
function gfmTaskListItemToMarkdown() {
  return {
    unsafe: [{ atBreak: true, character: "-", after: "[:|-]" }],
    handlers: { listItem: listItemWithTaskListItem }
  };
}
function exitCheck(token) {
  const node2 = this.stack[this.stack.length - 2];
  ok(node2.type === "listItem");
  node2.checked = token.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(token) {
  const parent2 = this.stack[this.stack.length - 2];
  if (parent2 && parent2.type === "listItem" && typeof parent2.checked === "boolean") {
    const node2 = this.stack[this.stack.length - 1];
    ok(node2.type === "paragraph");
    const head = node2.children[0];
    if (head && head.type === "text") {
      const siblings = parent2.children;
      let index2 = -1;
      let firstParaghraph;
      while (++index2 < siblings.length) {
        const sibling = siblings[index2];
        if (sibling.type === "paragraph") {
          firstParaghraph = sibling;
          break;
        }
      }
      if (firstParaghraph === node2) {
        head.value = head.value.slice(1);
        if (head.value.length === 0) {
          node2.children.shift();
        } else if (node2.position && head.position && typeof head.position.start.offset === "number") {
          head.position.start.column++;
          head.position.start.offset++;
          node2.position.start = Object.assign({}, head.position.start);
        }
      }
    }
  }
  this.exit(token);
}
function listItemWithTaskListItem(node2, parent2, state, info) {
  const head = node2.children[0];
  const checkable = typeof node2.checked === "boolean" && head && head.type === "paragraph";
  const checkbox = "[" + (node2.checked ? "x" : " ") + "] ";
  const tracker = state.createTracker(info);
  if (checkable) {
    tracker.move(checkbox);
  }
  let value = handle.listItem(node2, parent2, state, {
    ...info,
    ...tracker.current()
  });
  if (checkable) {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }
  return value;
  function check($0) {
    return $0 + checkbox;
  }
}

// node_modules/mdast-util-gfm/lib/index.js
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown(),
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown(),
    gfmTableFromMarkdown(),
    gfmTaskListItemFromMarkdown()
  ];
}
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown(),
      gfmFootnoteToMarkdown(options),
      gfmStrikethroughToMarkdown(),
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown()
    ]
  };
}

// node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var wwwPrefix = {
  tokenize: tokenizeWwwPrefix,
  partial: true
};
var domain = {
  tokenize: tokenizeDomain,
  partial: true
};
var path = {
  tokenize: tokenizePath,
  partial: true
};
var trail = {
  tokenize: tokenizeTrail,
  partial: true
};
var emailDomainDotTrail = {
  tokenize: tokenizeEmailDomainDotTrail,
  partial: true
};
var wwwAutolink = {
  name: "wwwAutolink",
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
};
var protocolAutolink = {
  name: "protocolAutolink",
  tokenize: tokenizeProtocolAutolink,
  previous: previousProtocol
};
var emailAutolink = {
  name: "emailAutolink",
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
};
var text4 = {};
function gfmAutolinkLiteral() {
  return {
    text: text4
  };
}
var code2 = 48;
while (code2 < 123) {
  text4[code2] = emailAutolink;
  code2++;
  if (code2 === 58) code2 = 65;
  else if (code2 === 91) code2 = 97;
}
text4[43] = emailAutolink;
text4[45] = emailAutolink;
text4[46] = emailAutolink;
text4[95] = emailAutolink;
text4[72] = [emailAutolink, protocolAutolink];
text4[104] = [emailAutolink, protocolAutolink];
text4[87] = [emailAutolink, wwwAutolink];
text4[119] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(effects, ok3, nok) {
  const self2 = this;
  let dot;
  let data;
  return start;
  function start(code3) {
    if (!gfmAtext(code3) || !previousEmail.call(self2, self2.previous) || previousUnbalanced(self2.events)) {
      return nok(code3);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkEmail");
    return atext(code3);
  }
  function atext(code3) {
    if (gfmAtext(code3)) {
      effects.consume(code3);
      return atext;
    }
    if (code3 === 64) {
      effects.consume(code3);
      return emailDomain;
    }
    return nok(code3);
  }
  function emailDomain(code3) {
    if (code3 === 46) {
      return effects.check(emailDomainDotTrail, emailDomainAfter, emailDomainDot)(code3);
    }
    if (code3 === 45 || code3 === 95 || asciiAlphanumeric(code3)) {
      data = true;
      effects.consume(code3);
      return emailDomain;
    }
    return emailDomainAfter(code3);
  }
  function emailDomainDot(code3) {
    effects.consume(code3);
    dot = true;
    return emailDomain;
  }
  function emailDomainAfter(code3) {
    if (data && dot && asciiAlpha(self2.previous)) {
      effects.exit("literalAutolinkEmail");
      effects.exit("literalAutolink");
      return ok3(code3);
    }
    return nok(code3);
  }
}
function tokenizeWwwAutolink(effects, ok3, nok) {
  const self2 = this;
  return wwwStart;
  function wwwStart(code3) {
    if (code3 !== 87 && code3 !== 119 || !previousWww.call(self2, self2.previous) || previousUnbalanced(self2.events)) {
      return nok(code3);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkWww");
    return effects.check(wwwPrefix, effects.attempt(domain, effects.attempt(path, wwwAfter), nok), nok)(code3);
  }
  function wwwAfter(code3) {
    effects.exit("literalAutolinkWww");
    effects.exit("literalAutolink");
    return ok3(code3);
  }
}
function tokenizeProtocolAutolink(effects, ok3, nok) {
  const self2 = this;
  let buffer = "";
  let seen = false;
  return protocolStart;
  function protocolStart(code3) {
    if ((code3 === 72 || code3 === 104) && previousProtocol.call(self2, self2.previous) && !previousUnbalanced(self2.events)) {
      effects.enter("literalAutolink");
      effects.enter("literalAutolinkHttp");
      buffer += String.fromCodePoint(code3);
      effects.consume(code3);
      return protocolPrefixInside;
    }
    return nok(code3);
  }
  function protocolPrefixInside(code3) {
    if (asciiAlpha(code3) && buffer.length < 5) {
      buffer += String.fromCodePoint(code3);
      effects.consume(code3);
      return protocolPrefixInside;
    }
    if (code3 === 58) {
      const protocol = buffer.toLowerCase();
      if (protocol === "http" || protocol === "https") {
        effects.consume(code3);
        return protocolSlashesInside;
      }
    }
    return nok(code3);
  }
  function protocolSlashesInside(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      if (seen) {
        return afterProtocol;
      }
      seen = true;
      return protocolSlashesInside;
    }
    return nok(code3);
  }
  function afterProtocol(code3) {
    return code3 === null || asciiControl(code3) || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3) || unicodePunctuation(code3) ? nok(code3) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code3);
  }
  function protocolAfter(code3) {
    effects.exit("literalAutolinkHttp");
    effects.exit("literalAutolink");
    return ok3(code3);
  }
}
function tokenizeWwwPrefix(effects, ok3, nok) {
  let size = 0;
  return wwwPrefixInside;
  function wwwPrefixInside(code3) {
    if ((code3 === 87 || code3 === 119) && size < 3) {
      size++;
      effects.consume(code3);
      return wwwPrefixInside;
    }
    if (code3 === 46 && size === 3) {
      effects.consume(code3);
      return wwwPrefixAfter;
    }
    return nok(code3);
  }
  function wwwPrefixAfter(code3) {
    return code3 === null ? nok(code3) : ok3(code3);
  }
}
function tokenizeDomain(effects, ok3, nok) {
  let underscoreInLastSegment;
  let underscoreInLastLastSegment;
  let seen;
  return domainInside;
  function domainInside(code3) {
    if (code3 === 46 || code3 === 95) {
      return effects.check(trail, domainAfter, domainAtPunctuation)(code3);
    }
    if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3) || code3 !== 45 && unicodePunctuation(code3)) {
      return domainAfter(code3);
    }
    seen = true;
    effects.consume(code3);
    return domainInside;
  }
  function domainAtPunctuation(code3) {
    if (code3 === 95) {
      underscoreInLastSegment = true;
    } else {
      underscoreInLastLastSegment = underscoreInLastSegment;
      underscoreInLastSegment = void 0;
    }
    effects.consume(code3);
    return domainInside;
  }
  function domainAfter(code3) {
    if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) {
      return nok(code3);
    }
    return ok3(code3);
  }
}
function tokenizePath(effects, ok3) {
  let sizeOpen = 0;
  let sizeClose = 0;
  return pathInside;
  function pathInside(code3) {
    if (code3 === 40) {
      sizeOpen++;
      effects.consume(code3);
      return pathInside;
    }
    if (code3 === 41 && sizeClose < sizeOpen) {
      return pathAtPunctuation(code3);
    }
    if (code3 === 33 || code3 === 34 || code3 === 38 || code3 === 39 || code3 === 41 || code3 === 42 || code3 === 44 || code3 === 46 || code3 === 58 || code3 === 59 || code3 === 60 || code3 === 63 || code3 === 93 || code3 === 95 || code3 === 126) {
      return effects.check(trail, ok3, pathAtPunctuation)(code3);
    }
    if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
      return ok3(code3);
    }
    effects.consume(code3);
    return pathInside;
  }
  function pathAtPunctuation(code3) {
    if (code3 === 41) {
      sizeClose++;
    }
    effects.consume(code3);
    return pathInside;
  }
}
function tokenizeTrail(effects, ok3, nok) {
  return trail2;
  function trail2(code3) {
    if (code3 === 33 || code3 === 34 || code3 === 39 || code3 === 41 || code3 === 42 || code3 === 44 || code3 === 46 || code3 === 58 || code3 === 59 || code3 === 63 || code3 === 95 || code3 === 126) {
      effects.consume(code3);
      return trail2;
    }
    if (code3 === 38) {
      effects.consume(code3);
      return trailCharacterReferenceStart;
    }
    if (code3 === 93) {
      effects.consume(code3);
      return trailBracketAfter;
    }
    if (
      // `<` is an end.
      code3 === 60 || // So is whitespace.
      code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)
    ) {
      return ok3(code3);
    }
    return nok(code3);
  }
  function trailBracketAfter(code3) {
    if (code3 === null || code3 === 40 || code3 === 91 || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
      return ok3(code3);
    }
    return trail2(code3);
  }
  function trailCharacterReferenceStart(code3) {
    return asciiAlpha(code3) ? trailCharacterReferenceInside(code3) : nok(code3);
  }
  function trailCharacterReferenceInside(code3) {
    if (code3 === 59) {
      effects.consume(code3);
      return trail2;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return trailCharacterReferenceInside;
    }
    return nok(code3);
  }
}
function tokenizeEmailDomainDotTrail(effects, ok3, nok) {
  return start;
  function start(code3) {
    effects.consume(code3);
    return after;
  }
  function after(code3) {
    return asciiAlphanumeric(code3) ? nok(code3) : ok3(code3);
  }
}
function previousWww(code3) {
  return code3 === null || code3 === 40 || code3 === 42 || code3 === 95 || code3 === 91 || code3 === 93 || code3 === 126 || markdownLineEndingOrSpace(code3);
}
function previousProtocol(code3) {
  return !asciiAlpha(code3);
}
function previousEmail(code3) {
  return !(code3 === 47 || gfmAtext(code3));
}
function gfmAtext(code3) {
  return code3 === 43 || code3 === 45 || code3 === 46 || code3 === 95 || asciiAlphanumeric(code3);
}
function previousUnbalanced(events) {
  let index2 = events.length;
  let result = false;
  while (index2--) {
    const token = events[index2][1];
    if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
      result = true;
      break;
    }
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = false;
      break;
    }
  }
  if (events.length > 0 && !result) {
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }
  return result;
}

// node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var indent = {
  tokenize: tokenizeIndent2,
  partial: true
};
function gfmFootnote() {
  return {
    document: {
      [91]: {
        name: "gfmFootnoteDefinition",
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        name: "gfmFootnoteCall",
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}
function tokenizePotentialGfmFootnoteCall(effects, ok3, nok) {
  const self2 = this;
  let index2 = self2.events.length;
  const defined = self2.parser.gfmFootnotes || (self2.parser.gfmFootnotes = []);
  let labelStart;
  while (index2--) {
    const token = self2.events[index2][1];
    if (token.type === "labelImage") {
      labelStart = token;
      break;
    }
    if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") {
      break;
    }
  }
  return start;
  function start(code3) {
    if (!labelStart || !labelStart._balanced) {
      return nok(code3);
    }
    const id = normalizeIdentifier(self2.sliceSerialize({
      start: labelStart.end,
      end: self2.now()
    }));
    if (id.codePointAt(0) !== 94 || !defined.includes(id.slice(1))) {
      return nok(code3);
    }
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallLabelMarker");
    return ok3(code3);
  }
}
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index2 = events.length;
  let labelStart;
  while (index2--) {
    if (events[index2][1].type === "labelImage" && events[index2][0] === "enter") {
      labelStart = events[index2][1];
      break;
    }
  }
  events[index2 + 1][1].type = "data";
  events[index2 + 3][1].type = "gfmFootnoteCallLabelMarker";
  const call = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, events[index2 + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const marker = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, events[index2 + 3][1].end),
    end: Object.assign({}, events[index2 + 3][1].end)
  };
  marker.end.column++;
  marker.end.offset++;
  marker.end._bufferIndex++;
  const string5 = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  };
  const chunk = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, string5.start),
    end: Object.assign({}, string5.end)
  };
  const replacement = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    events[index2 + 1],
    events[index2 + 2],
    ["enter", call, context],
    // The `[`
    events[index2 + 3],
    events[index2 + 4],
    // The `^`.
    ["enter", marker, context],
    ["exit", marker, context],
    // Everything in between.
    ["enter", string5, context],
    ["enter", chunk, context],
    ["exit", chunk, context],
    ["exit", string5, context],
    // The ending (`]`, properly parsed and labelled).
    events[events.length - 2],
    events[events.length - 1],
    ["exit", call, context]
  ];
  events.splice(index2, events.length - index2 + 1, ...replacement);
  return events;
}
function tokenizeGfmFootnoteCall(effects, ok3, nok) {
  const self2 = this;
  const defined = self2.parser.gfmFootnotes || (self2.parser.gfmFootnotes = []);
  let size = 0;
  let data;
  return start;
  function start(code3) {
    effects.enter("gfmFootnoteCall");
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallLabelMarker");
    return callStart;
  }
  function callStart(code3) {
    if (code3 !== 94) return nok(code3);
    effects.enter("gfmFootnoteCallMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallMarker");
    effects.enter("gfmFootnoteCallString");
    effects.enter("chunkString").contentType = "string";
    return callData;
  }
  function callData(code3) {
    if (
      // Too long.
      size > 999 || // Closing brace with nothing.
      code3 === 93 && !data || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      code3 === null || code3 === 91 || markdownLineEndingOrSpace(code3)
    ) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.exit("chunkString");
      const token = effects.exit("gfmFootnoteCallString");
      if (!defined.includes(normalizeIdentifier(self2.sliceSerialize(token)))) {
        return nok(code3);
      }
      effects.enter("gfmFootnoteCallLabelMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteCallLabelMarker");
      effects.exit("gfmFootnoteCall");
      return ok3;
    }
    if (!markdownLineEndingOrSpace(code3)) {
      data = true;
    }
    size++;
    effects.consume(code3);
    return code3 === 92 ? callEscape : callData;
  }
  function callEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return callData;
    }
    return callData(code3);
  }
}
function tokenizeDefinitionStart(effects, ok3, nok) {
  const self2 = this;
  const defined = self2.parser.gfmFootnotes || (self2.parser.gfmFootnotes = []);
  let identifier;
  let size = 0;
  let data;
  return start;
  function start(code3) {
    effects.enter("gfmFootnoteDefinition")._container = true;
    effects.enter("gfmFootnoteDefinitionLabel");
    effects.enter("gfmFootnoteDefinitionLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteDefinitionLabelMarker");
    return labelAtMarker;
  }
  function labelAtMarker(code3) {
    if (code3 === 94) {
      effects.enter("gfmFootnoteDefinitionMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteDefinitionMarker");
      effects.enter("gfmFootnoteDefinitionLabelString");
      effects.enter("chunkString").contentType = "string";
      return labelInside;
    }
    return nok(code3);
  }
  function labelInside(code3) {
    if (
      // Too long.
      size > 999 || // Closing brace with nothing.
      code3 === 93 && !data || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      code3 === null || code3 === 91 || markdownLineEndingOrSpace(code3)
    ) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.exit("chunkString");
      const token = effects.exit("gfmFootnoteDefinitionLabelString");
      identifier = normalizeIdentifier(self2.sliceSerialize(token));
      effects.enter("gfmFootnoteDefinitionLabelMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteDefinitionLabelMarker");
      effects.exit("gfmFootnoteDefinitionLabel");
      return labelAfter;
    }
    if (!markdownLineEndingOrSpace(code3)) {
      data = true;
    }
    size++;
    effects.consume(code3);
    return code3 === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return labelInside;
    }
    return labelInside(code3);
  }
  function labelAfter(code3) {
    if (code3 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code3);
      effects.exit("definitionMarker");
      if (!defined.includes(identifier)) {
        defined.push(identifier);
      }
      return factorySpace(effects, whitespaceAfter, "gfmFootnoteDefinitionWhitespace");
    }
    return nok(code3);
  }
  function whitespaceAfter(code3) {
    return ok3(code3);
  }
}
function tokenizeDefinitionContinuation(effects, ok3, nok) {
  return effects.check(blankLine, ok3, effects.attempt(indent, ok3, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit("gfmFootnoteDefinition");
}
function tokenizeIndent2(effects, ok3, nok) {
  const self2 = this;
  return factorySpace(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 4 + 1);
  function afterPrefix(code3) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok3(code3) : nok(code3);
  }
}

// node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function gfmStrikethrough(options) {
  const options_ = options || {};
  let single = options_.singleTilde;
  const tokenizer = {
    name: "strikethrough",
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };
  if (single === null || single === void 0) {
    single = true;
  }
  return {
    text: {
      [126]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function resolveAllStrikethrough(events, context) {
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][0] === "enter" && events[index2][1].type === "strikethroughSequenceTemporary" && events[index2][1]._close) {
        let open = index2;
        while (open--) {
          if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && // If the sizes are the same:
          events[index2][1].end.offset - events[index2][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
            events[index2][1].type = "strikethroughSequence";
            events[open][1].type = "strikethroughSequence";
            const strikethrough = {
              type: "strikethrough",
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index2][1].end)
            };
            const text5 = {
              type: "strikethroughText",
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index2][1].start)
            };
            const nextEvents = [["enter", strikethrough, context], ["enter", events[open][1], context], ["exit", events[open][1], context], ["enter", text5, context]];
            const insideSpan2 = context.parser.constructs.insideSpan.null;
            if (insideSpan2) {
              splice(nextEvents, nextEvents.length, 0, resolveAll(insideSpan2, events.slice(open + 1, index2), context));
            }
            splice(nextEvents, nextEvents.length, 0, [["exit", text5, context], ["enter", events[index2][1], context], ["exit", events[index2][1], context], ["exit", strikethrough, context]]);
            splice(events, open - 1, index2 - open + 3, nextEvents);
            index2 = open + nextEvents.length - 2;
            break;
          }
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "strikethroughSequenceTemporary") {
        events[index2][1].type = "data";
      }
    }
    return events;
  }
  function tokenizeStrikethrough(effects, ok3, nok) {
    const previous4 = this.previous;
    const events = this.events;
    let size = 0;
    return start;
    function start(code3) {
      if (previous4 === 126 && events[events.length - 1][1].type !== "characterEscape") {
        return nok(code3);
      }
      effects.enter("strikethroughSequenceTemporary");
      return more(code3);
    }
    function more(code3) {
      const before = classifyCharacter(previous4);
      if (code3 === 126) {
        if (size > 1) return nok(code3);
        effects.consume(code3);
        size++;
        return more;
      }
      if (size < 2 && !single) return nok(code3);
      const token = effects.exit("strikethroughSequenceTemporary");
      const after = classifyCharacter(code3);
      token._open = !after || after === 2 && Boolean(before);
      token._close = !before || before === 2 && Boolean(after);
      return ok3(code3);
    }
  }
}

// node_modules/micromark-extension-gfm-table/lib/edit-map.js
var EditMap = class {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(index2, remove, add2) {
    addImplementation(this, index2, remove, add2);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(events) {
    this.map.sort(function(a, b) {
      return a[0] - b[0];
    });
    if (this.map.length === 0) {
      return;
    }
    let index2 = this.map.length;
    const vecs = [];
    while (index2 > 0) {
      index2 -= 1;
      vecs.push(events.slice(this.map[index2][0] + this.map[index2][1]), this.map[index2][2]);
      events.length = this.map[index2][0];
    }
    vecs.push(events.slice());
    events.length = 0;
    let slice = vecs.pop();
    while (slice) {
      for (const element2 of slice) {
        events.push(element2);
      }
      slice = vecs.pop();
    }
    this.map.length = 0;
  }
};
function addImplementation(editMap, at, remove, add2) {
  let index2 = 0;
  if (remove === 0 && add2.length === 0) {
    return;
  }
  while (index2 < editMap.map.length) {
    if (editMap.map[index2][0] === at) {
      editMap.map[index2][1] += remove;
      editMap.map[index2][2].push(...add2);
      return;
    }
    index2 += 1;
  }
  editMap.map.push([at, remove, add2]);
}

// node_modules/micromark-extension-gfm-table/lib/infer.js
function gfmTableAlign(events, index2) {
  let inDelimiterRow = false;
  const align = [];
  while (index2 < events.length) {
    const event = events[index2];
    if (inDelimiterRow) {
      if (event[0] === "enter") {
        if (event[1].type === "tableContent") {
          align.push(events[index2 + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
        }
      } else if (event[1].type === "tableContent") {
        if (events[index2 - 1][1].type === "tableDelimiterMarker") {
          const alignIndex = align.length - 1;
          align[alignIndex] = align[alignIndex] === "left" ? "center" : "right";
        }
      } else if (event[1].type === "tableDelimiterRow") {
        break;
      }
    } else if (event[0] === "enter" && event[1].type === "tableDelimiterRow") {
      inDelimiterRow = true;
    }
    index2 += 1;
  }
  return align;
}

// node_modules/micromark-extension-gfm-table/lib/syntax.js
function gfmTable() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: tokenizeTable,
        resolveAll: resolveTable
      }
    }
  };
}
function tokenizeTable(effects, ok3, nok) {
  const self2 = this;
  let size = 0;
  let sizeB = 0;
  let seen;
  return start;
  function start(code3) {
    let index2 = self2.events.length - 1;
    while (index2 > -1) {
      const type = self2.events[index2][1].type;
      if (type === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      type === "linePrefix") index2--;
      else break;
    }
    const tail = index2 > -1 ? self2.events[index2][1].type : null;
    const next = tail === "tableHead" || tail === "tableRow" ? bodyRowStart : headRowBefore;
    if (next === bodyRowStart && self2.parser.lazy[self2.now().line]) {
      return nok(code3);
    }
    return next(code3);
  }
  function headRowBefore(code3) {
    effects.enter("tableHead");
    effects.enter("tableRow");
    return headRowStart(code3);
  }
  function headRowStart(code3) {
    if (code3 === 124) {
      return headRowBreak(code3);
    }
    seen = true;
    sizeB += 1;
    return headRowBreak(code3);
  }
  function headRowBreak(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      if (sizeB > 1) {
        sizeB = 0;
        self2.interrupt = true;
        effects.exit("tableRow");
        effects.enter("lineEnding");
        effects.consume(code3);
        effects.exit("lineEnding");
        return headDelimiterStart;
      }
      return nok(code3);
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, headRowBreak, "whitespace")(code3);
    }
    sizeB += 1;
    if (seen) {
      seen = false;
      size += 1;
    }
    if (code3 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code3);
      effects.exit("tableCellDivider");
      seen = true;
      return headRowBreak;
    }
    effects.enter("data");
    return headRowData(code3);
  }
  function headRowData(code3) {
    if (code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3)) {
      effects.exit("data");
      return headRowBreak(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? headRowEscape : headRowData;
  }
  function headRowEscape(code3) {
    if (code3 === 92 || code3 === 124) {
      effects.consume(code3);
      return headRowData;
    }
    return headRowData(code3);
  }
  function headDelimiterStart(code3) {
    self2.interrupt = false;
    if (self2.parser.lazy[self2.now().line]) {
      return nok(code3);
    }
    effects.enter("tableDelimiterRow");
    seen = false;
    if (markdownSpace(code3)) {
      return factorySpace(effects, headDelimiterBefore, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3);
    }
    return headDelimiterBefore(code3);
  }
  function headDelimiterBefore(code3) {
    if (code3 === 45 || code3 === 58) {
      return headDelimiterValueBefore(code3);
    }
    if (code3 === 124) {
      seen = true;
      effects.enter("tableCellDivider");
      effects.consume(code3);
      effects.exit("tableCellDivider");
      return headDelimiterCellBefore;
    }
    return headDelimiterNok(code3);
  }
  function headDelimiterCellBefore(code3) {
    if (markdownSpace(code3)) {
      return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code3);
    }
    return headDelimiterValueBefore(code3);
  }
  function headDelimiterValueBefore(code3) {
    if (code3 === 58) {
      sizeB += 1;
      seen = true;
      effects.enter("tableDelimiterMarker");
      effects.consume(code3);
      effects.exit("tableDelimiterMarker");
      return headDelimiterLeftAlignmentAfter;
    }
    if (code3 === 45) {
      sizeB += 1;
      return headDelimiterLeftAlignmentAfter(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      return headDelimiterCellAfter(code3);
    }
    return headDelimiterNok(code3);
  }
  function headDelimiterLeftAlignmentAfter(code3) {
    if (code3 === 45) {
      effects.enter("tableDelimiterFiller");
      return headDelimiterFiller(code3);
    }
    return headDelimiterNok(code3);
  }
  function headDelimiterFiller(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return headDelimiterFiller;
    }
    if (code3 === 58) {
      seen = true;
      effects.exit("tableDelimiterFiller");
      effects.enter("tableDelimiterMarker");
      effects.consume(code3);
      effects.exit("tableDelimiterMarker");
      return headDelimiterRightAlignmentAfter;
    }
    effects.exit("tableDelimiterFiller");
    return headDelimiterRightAlignmentAfter(code3);
  }
  function headDelimiterRightAlignmentAfter(code3) {
    if (markdownSpace(code3)) {
      return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code3);
    }
    return headDelimiterCellAfter(code3);
  }
  function headDelimiterCellAfter(code3) {
    if (code3 === 124) {
      return headDelimiterBefore(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      if (!seen || size !== sizeB) {
        return headDelimiterNok(code3);
      }
      effects.exit("tableDelimiterRow");
      effects.exit("tableHead");
      return ok3(code3);
    }
    return headDelimiterNok(code3);
  }
  function headDelimiterNok(code3) {
    return nok(code3);
  }
  function bodyRowStart(code3) {
    effects.enter("tableRow");
    return bodyRowBreak(code3);
  }
  function bodyRowBreak(code3) {
    if (code3 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code3);
      effects.exit("tableCellDivider");
      return bodyRowBreak;
    }
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("tableRow");
      return ok3(code3);
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, bodyRowBreak, "whitespace")(code3);
    }
    effects.enter("data");
    return bodyRowData(code3);
  }
  function bodyRowData(code3) {
    if (code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3)) {
      effects.exit("data");
      return bodyRowBreak(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? bodyRowEscape : bodyRowData;
  }
  function bodyRowEscape(code3) {
    if (code3 === 92 || code3 === 124) {
      effects.consume(code3);
      return bodyRowData;
    }
    return bodyRowData(code3);
  }
}
function resolveTable(events, context) {
  let index2 = -1;
  let inFirstCellAwaitingPipe = true;
  let rowKind = 0;
  let lastCell = [0, 0, 0, 0];
  let cell = [0, 0, 0, 0];
  let afterHeadAwaitingFirstBodyRow = false;
  let lastTableEnd = 0;
  let currentTable;
  let currentBody;
  let currentCell;
  const map3 = new EditMap();
  while (++index2 < events.length) {
    const event = events[index2];
    const token = event[1];
    if (event[0] === "enter") {
      if (token.type === "tableHead") {
        afterHeadAwaitingFirstBodyRow = false;
        if (lastTableEnd !== 0) {
          flushTableEnd(map3, context, lastTableEnd, currentTable, currentBody);
          currentBody = void 0;
          lastTableEnd = 0;
        }
        currentTable = {
          type: "table",
          start: Object.assign({}, token.start),
          // Note: correct end is set later.
          end: Object.assign({}, token.end)
        };
        map3.add(index2, 0, [["enter", currentTable, context]]);
      } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
        inFirstCellAwaitingPipe = true;
        currentCell = void 0;
        lastCell = [0, 0, 0, 0];
        cell = [0, index2 + 1, 0, 0];
        if (afterHeadAwaitingFirstBodyRow) {
          afterHeadAwaitingFirstBodyRow = false;
          currentBody = {
            type: "tableBody",
            start: Object.assign({}, token.start),
            // Note: correct end is set later.
            end: Object.assign({}, token.end)
          };
          map3.add(index2, 0, [["enter", currentBody, context]]);
        }
        rowKind = token.type === "tableDelimiterRow" ? 2 : currentBody ? 3 : 1;
      } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
        inFirstCellAwaitingPipe = false;
        if (cell[2] === 0) {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(map3, context, lastCell, rowKind, void 0, currentCell);
            lastCell = [0, 0, 0, 0];
          }
          cell[2] = index2;
        }
      } else if (token.type === "tableCellDivider") {
        if (inFirstCellAwaitingPipe) {
          inFirstCellAwaitingPipe = false;
        } else {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(map3, context, lastCell, rowKind, void 0, currentCell);
          }
          lastCell = cell;
          cell = [lastCell[1], index2, 0, 0];
        }
      }
    } else if (token.type === "tableHead") {
      afterHeadAwaitingFirstBodyRow = true;
      lastTableEnd = index2;
    } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
      lastTableEnd = index2;
      if (lastCell[1] !== 0) {
        cell[0] = cell[1];
        currentCell = flushCell(map3, context, lastCell, rowKind, index2, currentCell);
      } else if (cell[1] !== 0) {
        currentCell = flushCell(map3, context, cell, rowKind, index2, currentCell);
      }
      rowKind = 0;
    } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
      cell[3] = index2;
    }
  }
  if (lastTableEnd !== 0) {
    flushTableEnd(map3, context, lastTableEnd, currentTable, currentBody);
  }
  map3.consume(context.events);
  index2 = -1;
  while (++index2 < context.events.length) {
    const event = context.events[index2];
    if (event[0] === "enter" && event[1].type === "table") {
      event[1]._align = gfmTableAlign(context.events, index2);
    }
  }
  return events;
}
function flushCell(map3, context, range, rowKind, rowEnd, previousCell) {
  const groupName = rowKind === 1 ? "tableHeader" : rowKind === 2 ? "tableDelimiter" : "tableData";
  const valueName = "tableContent";
  if (range[0] !== 0) {
    previousCell.end = Object.assign({}, getPoint(context.events, range[0]));
    map3.add(range[0], 0, [["exit", previousCell, context]]);
  }
  const now = getPoint(context.events, range[1]);
  previousCell = {
    type: groupName,
    start: Object.assign({}, now),
    // Note: correct end is set later.
    end: Object.assign({}, now)
  };
  map3.add(range[1], 0, [["enter", previousCell, context]]);
  if (range[2] !== 0) {
    const relatedStart = getPoint(context.events, range[2]);
    const relatedEnd = getPoint(context.events, range[3]);
    const valueToken = {
      type: valueName,
      start: Object.assign({}, relatedStart),
      end: Object.assign({}, relatedEnd)
    };
    map3.add(range[2], 0, [["enter", valueToken, context]]);
    if (rowKind !== 2) {
      const start = context.events[range[2]];
      const end = context.events[range[3]];
      start[1].end = Object.assign({}, end[1].end);
      start[1].type = "chunkText";
      start[1].contentType = "text";
      if (range[3] > range[2] + 1) {
        const a = range[2] + 1;
        const b = range[3] - range[2] - 1;
        map3.add(a, b, []);
      }
    }
    map3.add(range[3] + 1, 0, [["exit", valueToken, context]]);
  }
  if (rowEnd !== void 0) {
    previousCell.end = Object.assign({}, getPoint(context.events, rowEnd));
    map3.add(rowEnd, 0, [["exit", previousCell, context]]);
    previousCell = void 0;
  }
  return previousCell;
}
function flushTableEnd(map3, context, index2, table, tableBody) {
  const exits = [];
  const related = getPoint(context.events, index2);
  if (tableBody) {
    tableBody.end = Object.assign({}, related);
    exits.push(["exit", tableBody, context]);
  }
  table.end = Object.assign({}, related);
  exits.push(["exit", table, context]);
  map3.add(index2 + 1, 0, exits);
}
function getPoint(events, index2) {
  const event = events[index2];
  const side = event[0] === "enter" ? "start" : "end";
  return event[1][side];
}

// node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var tasklistCheck = {
  name: "tasklistCheck",
  tokenize: tokenizeTasklistCheck
};
function gfmTaskListItem() {
  return {
    text: {
      [91]: tasklistCheck
    }
  };
}
function tokenizeTasklistCheck(effects, ok3, nok) {
  const self2 = this;
  return open;
  function open(code3) {
    if (
      // Exit if there’s stuff before.
      self2.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !self2._gfmTasklistFirstContentOfListItem
    ) {
      return nok(code3);
    }
    effects.enter("taskListCheck");
    effects.enter("taskListCheckMarker");
    effects.consume(code3);
    effects.exit("taskListCheckMarker");
    return inside;
  }
  function inside(code3) {
    if (markdownLineEndingOrSpace(code3)) {
      effects.enter("taskListCheckValueUnchecked");
      effects.consume(code3);
      effects.exit("taskListCheckValueUnchecked");
      return close;
    }
    if (code3 === 88 || code3 === 120) {
      effects.enter("taskListCheckValueChecked");
      effects.consume(code3);
      effects.exit("taskListCheckValueChecked");
      return close;
    }
    return nok(code3);
  }
  function close(code3) {
    if (code3 === 93) {
      effects.enter("taskListCheckMarker");
      effects.consume(code3);
      effects.exit("taskListCheckMarker");
      effects.exit("taskListCheck");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    if (markdownLineEnding(code3)) {
      return ok3(code3);
    }
    if (markdownSpace(code3)) {
      return effects.check({
        tokenize: spaceThenNonSpace
      }, ok3, nok)(code3);
    }
    return nok(code3);
  }
}
function spaceThenNonSpace(effects, ok3, nok) {
  return factorySpace(effects, after, "whitespace");
  function after(code3) {
    return code3 === null ? nok(code3) : ok3(code3);
  }
}

// node_modules/micromark-extension-gfm/index.js
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral(),
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable(),
    gfmTaskListItem()
  ]);
}

// node_modules/remark-gfm/lib/index.js
var emptyOptions2 = {};
function remarkGfm(options) {
  const self2 = (
    /** @type {Processor<Root>} */
    this
  );
  const settings = options || emptyOptions2;
  const data = self2.data();
  const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);
  const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);
  const toMarkdownExtensions = data.toMarkdownExtensions || (data.toMarkdownExtensions = []);
  micromarkExtensions.push(gfm(settings));
  fromMarkdownExtensions.push(gfmFromMarkdown());
  toMarkdownExtensions.push(gfmToMarkdown(settings));
}

// src/mdast-extensions/remark-tag/syntax.ts
var TOKENS = {
  tag: "mdTag",
  marker: "mdTagMarker",
  name: "mdTagName"
};
var HASH = 35;
var TAB = 9;
var LF = 10;
var CR = 13;
var SPACE = 32;
function isWs(c) {
  return c === null || c === SPACE || c === TAB || c === LF || c === CR;
}
function isAlphaUnderscore(c) {
  return c >= 65 && c <= 90 || c >= 97 && c <= 122 || c === 95;
}
function isNameChar(c) {
  return c >= 48 && c <= 57 || // 0-9
  c >= 65 && c <= 90 || // A-Z
  c >= 97 && c <= 122 || // a-z
  c === 95 || // _
  c === 45;
}
var mdTagConstruct = {
  name: "mdTag",
  tokenize: tokenizeMdTag,
  partial: true
  // can start in the middle of text
};
function tokenizeMdTag(effects, ok3, nok) {
  const prev = this.previous;
  if (!isWs(prev)) return nok;
  return start;
  function start(code3) {
    if (code3 !== HASH) return nok(code3);
    effects.enter(TOKENS.tag);
    effects.enter(TOKENS.marker);
    effects.consume(code3);
    effects.exit(TOKENS.marker);
    return head;
  }
  function head(code3) {
    if (typeof code3 !== "number") return nok(code3);
    if (!isAlphaUnderscore(code3)) return nok(code3);
    effects.enter(TOKENS.name);
    effects.consume(code3);
    return body;
  }
  function body(code3) {
    if (code3 === null) {
      effects.exit(TOKENS.name);
      effects.exit(TOKENS.tag);
      return ok3(code3);
    }
    if (isWs(code3)) {
      effects.exit(TOKENS.name);
      effects.exit(TOKENS.tag);
      return ok3;
    }
    if (!isNameChar(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return body;
  }
}
function mdTagSyntax() {
  return {
    text: {
      [HASH]: mdTagConstruct
    }
  };
}

// src/mdast-extensions/remark-tag/from-markdown.ts
function mdTagFromMarkdown() {
  return {
    enter: {
      [TOKENS.tag]: function enterTag(token) {
        const node2 = { type: "mdTag", value: "" };
        this.enter(node2, token);
      }
    },
    exit: {
      [TOKENS.name]: function exitName2(token) {
        const name = this.sliceSerialize(token);
        const node2 = this.stack[this.stack.length - 1];
        node2.value = name;
      },
      [TOKENS.tag]: function exitTag(token) {
        this.exit(token);
      }
    }
  };
}

// src/mdast-extensions/remark-tag/to-markdown.ts
var handleMdTag = (node2) => {
  const n = node2;
  return `#${n.value}`;
};
function mdTagToMarkdown() {
  return {
    handlers: {
      mdTag: handleMdTag
    }
  };
}

// src/mdast-extensions/remark-tag/remark-mdtag.ts
var remarkMdTag = function() {
  const data = this.data();
  (data.micromarkExtensions || (data.micromarkExtensions = [])).push(mdTagSyntax());
  (data.fromMarkdownExtensions || (data.fromMarkdownExtensions = [])).push(mdTagFromMarkdown());
  (data.toMarkdownExtensions || (data.toMarkdownExtensions = [])).push(mdTagToMarkdown());
};
var remark_mdtag_default = remarkMdTag;

// src/mdast-extensions/remark-inline-field/syntax.ts
var TOKENS2 = {
  // container tokens (3 distinct styles so the bridge can set node.style)
  fieldSquare: "inlineFieldSquare",
  fieldParen: "inlineFieldParen",
  fieldBare: "inlineFieldBare",
  // inner pieces
  open: "inlineFieldOpen",
  close: "inlineFieldClose",
  key: "inlineFieldKey",
  sep: "inlineFieldSep",
  value: "inlineFieldValue"
};
var LBRACKET = 91;
var RBRACKET = 93;
var LPAREN = 40;
var RPAREN = 41;
var COLON = 58;
var SPACE2 = 32;
var TAB2 = 9;
var LF2 = 10;
var CR2 = 13;
var QUOTE = 39;
var DQUOTE = 34;
function isWs2(c) {
  return c === null || c === SPACE2 || c === TAB2 || c === LF2 || c === CR2;
}
function isKeyStart(c) {
  return c >= 65 && c <= 90 || c >= 97 && c <= 122 || c === 95;
}
function isKeyChar(c) {
  return c >= 48 && c <= 57 || // 0-9
  c >= 65 && c <= 90 || // A-Z
  c >= 97 && c <= 122 || // a-z
  c === 95 || // _
  c === 45;
}
var squareConstruct = {
  name: "inlineFieldSquare",
  tokenize: tokenizeSquare,
  partial: true
};
function tokenizeSquare(effects, ok3, nok) {
  return start;
  function start(code3) {
    if (code3 !== LBRACKET) return nok(code3);
    effects.enter(TOKENS2.fieldSquare);
    effects.enter(TOKENS2.open);
    effects.consume(code3);
    effects.exit(TOKENS2.open);
    return keyStart;
  }
  function keyStart(code3) {
    if (typeof code3 !== "number" || !isKeyStart(code3)) return bail2(code3);
    effects.enter(TOKENS2.key);
    effects.consume(code3);
    return keyRest;
  }
  function keyRest(code3) {
    if (typeof code3 === "number" && isKeyChar(code3)) {
      effects.consume(code3);
      return keyRest;
    }
    effects.exit(TOKENS2.key);
    return maybeSep1(code3);
  }
  function maybeSep1(code3) {
    if (code3 !== COLON) return bail2(code3);
    effects.enter(TOKENS2.sep);
    effects.consume(code3);
    return sep2;
  }
  function sep2(code3) {
    if (code3 !== COLON) return bail2(code3);
    effects.consume(code3);
    effects.exit(TOKENS2.sep);
    return afterSep;
  }
  function afterSep(code3) {
    if (code3 === SPACE2 || code3 === TAB2) {
      effects.consume(code3);
      return afterSep;
    }
    effects.enter(TOKENS2.value);
    return valueUntilClose(code3);
  }
  function valueUntilClose(code3) {
    if (code3 === null) return bail2(code3);
    if (code3 === RBRACKET) {
      effects.exit(TOKENS2.value);
      effects.enter(TOKENS2.close);
      effects.consume(code3);
      effects.exit(TOKENS2.close);
      effects.exit(TOKENS2.fieldSquare);
      return ok3;
    }
    effects.consume(code3);
    return valueUntilClose;
  }
  function bail2(code3) {
    return nok(code3);
  }
}
var parenConstruct = {
  name: "inlineFieldParen",
  tokenize: tokenizeParen,
  partial: true
};
function tokenizeParen(effects, ok3, nok) {
  return start;
  function start(code3) {
    if (code3 !== LPAREN) return nok(code3);
    effects.enter(TOKENS2.fieldParen);
    effects.enter(TOKENS2.open);
    effects.consume(code3);
    effects.exit(TOKENS2.open);
    return keyStart;
  }
  function keyStart(code3) {
    if (typeof code3 !== "number" || !isKeyStart(code3)) return bail2(code3);
    effects.enter(TOKENS2.key);
    effects.consume(code3);
    return keyRest;
  }
  function keyRest(code3) {
    if (typeof code3 === "number" && isKeyChar(code3)) {
      effects.consume(code3);
      return keyRest;
    }
    effects.exit(TOKENS2.key);
    return maybeSep1(code3);
  }
  function maybeSep1(code3) {
    if (code3 !== COLON) return bail2(code3);
    effects.enter(TOKENS2.sep);
    effects.consume(code3);
    return sep2;
  }
  function sep2(code3) {
    if (code3 !== COLON) return bail2(code3);
    effects.consume(code3);
    effects.exit(TOKENS2.sep);
    return afterSep;
  }
  function afterSep(code3) {
    if (code3 === SPACE2 || code3 === TAB2) {
      effects.consume(code3);
      return afterSep;
    }
    effects.enter(TOKENS2.value);
    return valueUntilClose(code3);
  }
  function valueUntilClose(code3) {
    if (code3 === null) return bail2(code3);
    if (code3 === RPAREN) {
      effects.exit(TOKENS2.value);
      effects.enter(TOKENS2.close);
      effects.consume(code3);
      effects.exit(TOKENS2.close);
      effects.exit(TOKENS2.fieldParen);
      return ok3;
    }
    effects.consume(code3);
    return valueUntilClose;
  }
  function bail2(code3) {
    return nok(code3);
  }
}
var bareConstruct = {
  name: "inlineFieldBare",
  tokenize: tokenizeBare,
  partial: true
};
function tokenizeBare(effects, ok3, nok) {
  const prev = this.previous;
  if (!isWs2(prev)) return nok;
  return keyStart;
  function keyStart(code3) {
    if (typeof code3 !== "number" || !isKeyStart(code3)) return nok(code3);
    effects.enter(TOKENS2.fieldBare);
    effects.enter(TOKENS2.key);
    effects.consume(code3);
    return keyRest;
  }
  function keyRest(code3) {
    if (typeof code3 === "number" && isKeyChar(code3)) {
      effects.consume(code3);
      return keyRest;
    }
    effects.exit(TOKENS2.key);
    return maybeSep1(code3);
  }
  function maybeSep1(code3) {
    if (code3 !== COLON) return bail2(code3);
    effects.enter(TOKENS2.sep);
    effects.consume(code3);
    return sep2;
  }
  function sep2(code3) {
    if (code3 !== COLON) return bail2(code3);
    effects.consume(code3);
    effects.exit(TOKENS2.sep);
    return afterSep;
  }
  function afterSep(code3) {
    if (code3 === SPACE2 || code3 === TAB2) {
      effects.consume(code3);
      return afterSep;
    }
    effects.enter(TOKENS2.value);
    return valueStart(code3);
  }
  function valueStart(code3) {
    if (code3 === null || isWs2(code3)) {
      effects.exit(TOKENS2.value);
      effects.exit(TOKENS2.fieldBare);
      return ok3(code3);
    }
    effects.consume(code3);
    if (code3 === QUOTE) return inSingle;
    if (code3 === DQUOTE) return inDouble;
    return inUnquoted;
  }
  function inUnquoted(code3) {
    if (code3 === null || isWs2(code3)) {
      effects.exit(TOKENS2.value);
      effects.exit(TOKENS2.fieldBare);
      return ok3(code3);
    }
    effects.consume(code3);
    return inUnquoted;
  }
  function inSingle(code3) {
    if (code3 === null) return bail2(code3);
    effects.consume(code3);
    if (code3 === QUOTE) {
      effects.exit(TOKENS2.value);
      effects.exit(TOKENS2.fieldBare);
      return ok3;
    }
    return inSingle;
  }
  function inDouble(code3) {
    if (code3 === null) return bail2(code3);
    effects.consume(code3);
    if (code3 === DQUOTE) {
      effects.exit(TOKENS2.value);
      effects.exit(TOKENS2.fieldBare);
      return ok3;
    }
    return inDouble;
  }
  function bail2(code3) {
    return nok(code3);
  }
}
function inlineFieldSyntax() {
  const text5 = {
    [LBRACKET]: squareConstruct,
    [LPAREN]: parenConstruct
  };
  const starts = [
    95,
    // _
    // A-Z:
    ...Array.from({ length: 26 }, (_, i) => 65 + i),
    // a-z:
    ...Array.from({ length: 26 }, (_, i) => 97 + i)
  ];
  for (const c of starts) text5[c] = bareConstruct;
  return { text: text5 };
}

// src/mdast-extensions/remark-inline-field/from-markdown.ts
function inlineFieldFromMarkdown() {
  return {
    enter: {
      [TOKENS2.fieldSquare]: enterField("square"),
      [TOKENS2.fieldParen]: enterField("paren"),
      [TOKENS2.fieldBare]: enterField("bare")
      // NOTE: no buffer() calls needed when using sliceSerialize
    },
    exit: {
      [TOKENS2.key]: setKey,
      [TOKENS2.value]: setValue,
      [TOKENS2.fieldSquare]: exitField,
      [TOKENS2.fieldParen]: exitField,
      [TOKENS2.fieldBare]: exitField
    }
  };
  function enterField(style) {
    return function(token) {
      const node2 = {
        type: "inlineField",
        key: "",
        value: "",
        style
      };
      this.enter(node2, token);
    };
  }
  function setKey(token) {
    const text5 = this.sliceSerialize(token);
    const node2 = this.stack[this.stack.length - 1];
    node2.key = text5.trim();
  }
  function setValue(token) {
    const node2 = this.stack[this.stack.length - 1];
    let raw = this.sliceSerialize(token);
    let quote = "none";
    if (node2.style !== "bare") {
      raw = raw.trim();
    } else {
      const first = raw.charCodeAt(0);
      const last = raw.charCodeAt(raw.length - 1);
      if (first === 34 && last === 34) {
        quote = "double";
        raw = raw.slice(1, -1);
      } else if (first === 39 && last === 39) {
        quote = "single";
        raw = raw.slice(1, -1);
      }
    }
    node2.value = raw;
    if (quote !== "none") node2.quote = quote;
  }
  function exitField(token) {
    this.exit(token);
  }
}

// src/mdast-extensions/remark-inline-field/to-markdown.ts
var handleInlineField = (node2) => {
  const n = node2;
  const key = n.key;
  const sep = "::";
  let value = n.value;
  if (n.style === "bare") {
    const needsQuote = /\s/.test(value);
    if (n.quote === "single") value = `'${value}'`;
    else if (n.quote === "double" || !n.quote && needsQuote) value = `"${value}"`;
    return `${key}${sep} ${value}`;
  }
  if (n.style === "square") {
    return `[${key}${sep} ${value}]`;
  }
  return `(${key}${sep} ${value})`;
};
function inlineFieldToMarkdown() {
  return {
    handlers: {
      inlineField: handleInlineField
    }
  };
}

// src/mdast-extensions/remark-inline-field/remark-inlinefield.ts
var remarkInlineField = function() {
  const data = this.data();
  (data.micromarkExtensions || (data.micromarkExtensions = [])).push(inlineFieldSyntax());
  (data.fromMarkdownExtensions || (data.fromMarkdownExtensions = [])).push(inlineFieldFromMarkdown());
  (data.toMarkdownExtensions || (data.toMarkdownExtensions = [])).push(inlineFieldToMarkdown());
};
var remark_inlinefield_default = remarkInlineField;

// src/mdast-extensions/helper.ts
function copyPos(dst, src) {
  if (src?.position) dst.position = {
    start: { ...src.position.start },
    end: { ...src.position.end }
  };
  return dst;
}
function unionPos(a, b) {
  if (!a && !b) return void 0;
  if (!a) return b;
  if (!b) return a;
  const start = (a.start.offset ?? 0) < (b.start.offset ?? Infinity) ? a.start : b.start;
  const end = (a.end.offset ?? 0) > (b.end.offset ?? -Infinity) ? a.end : b.end;
  return { start, end };
}

// src/mdast-extensions/remark-callout/transform.ts
var RE = /^\s*\[\!([A-Za-z][A-Za-z0-9_-]*)\]\s*([+-])?\s*/;
function transformCallouts() {
  return function transformer(tree) {
    visit(tree, "blockquote", (node2, index2, parent2) => {
      if (!parent2 || typeof index2 !== "number") return;
      const first = node2.children[0];
      if (!first || first.type !== "paragraph") return;
      const para = first;
      if (!para.children?.length) return;
      const firstInline = para.children[0];
      if (!firstInline || firstInline.type !== "text") return;
      const m = firstInline.value.match(RE);
      if (!m) return;
      const calloutType = m[1].toLowerCase();
      const expanded = m[2] || void 0;
      firstInline.value = firstInline.value.slice(m[0].length);
      if (para.children[0]?.type === "text") {
        const t = para.children[0];
        t.value = t.value.replace(/^[ ]+/, "");
        if (!t.value) para.children.shift();
      }
      const title = para.children.length ? para.children : void 0;
      const content3 = node2.children.slice(1);
      var callout = {
        type: "callout",
        calloutType,
        expanded,
        title,
        children: content3,
        position: node2.position
      };
      const lastChild2 = content3.length ? content3[content3.length - 1] : void 0;
      callout.position = unionPos(node2.position, lastChild2?.position);
      parent2.children.splice(index2, 1, callout);
      return [visit.SKIP, index2];
    });
  };
}

// src/mdast-extensions/remark-callout/to-markdown.ts
function prefixBlockquote(value) {
  const lines = value.replace(/\r\n/g, "\n").split("\n");
  return lines.map((l) => "> " + l).join("\n");
}
var handleCallout = (node2, _parent, context) => {
  const n = node2;
  const marker = `[!${n.calloutType}]${n.expanded ?? ""}`;
  let titleInline = "";
  if (n.title?.length) {
    titleInline = context.containerPhrasing({ type: "paragraph", children: n.title }, { before: "", after: "" }).trim();
  }
  const firstLine = "> " + marker + (titleInline ? " " + titleInline : "") + "\n";
  let body = "";
  if (n.children?.length) {
    const content3 = n.children.map((child) => context.handle(child, n)).join("");
    const contentWithNl = content3.endsWith("\n") ? content3 : content3 + "\n";
    body = prefixBlockquote(contentWithNl);
  }
  return firstLine + body;
};
function calloutToMarkdown() {
  return { handlers: { callout: handleCallout } };
}

// src/mdast-extensions/remark-callout/remark-callout.ts
var remarkCallout = function() {
  this.use(function() {
    const transformer = transformCallouts();
    return transformer;
  });
  const data = this.data();
  (data.toMarkdownExtensions || (data.toMarkdownExtensions = [])).push(calloutToMarkdown());
};
var remark_callout_default = remarkCallout;

// src/mdast-extensions/remark-nested-heading/transform.ts
function transformNestedHeadings() {
  return function transformer(tree) {
    const root3 = tree;
    const out = [];
    const stack = [];
    function finalizePosition(sec) {
      const start = sec.position?.start;
      const last = sec.children.length ? sec.children[sec.children.length - 1] : null;
      const end = last?.position?.end ?? sec.position?.end;
      if (start && end) sec.position = { start, end };
    }
    function openSection(h) {
      const sec = {
        ...h,
        type: "heading",
        title: h.children ?? [],
        children: [],
        _sectionized: true
      };
      sec.children = sec.children;
      return sec;
    }
    function popToDepth(depth) {
      while (stack.length && (stack[stack.length - 1].depth ?? 7) >= depth) {
        const done = stack.pop();
        finalizePosition(done);
      }
    }
    for (const node2 of root3.children) {
      if (node2.type === "heading") {
        const depth = node2.depth ?? 6;
        popToDepth(depth);
        const sec = openSection(node2);
        if (stack.length) {
          stack[stack.length - 1].children.push(sec);
        } else {
          out.push(sec);
        }
        stack.push(sec);
      } else {
        if (stack.length) {
          stack[stack.length - 1].children.push(node2);
        } else {
          out.push(node2);
        }
      }
    }
    while (stack.length) {
      const done = stack.pop();
      finalizePosition(done);
    }
    root3.children = out;
  };
}

// src/mdast-extensions/remark-nested-heading/to-markdown.ts
var handleHeading = (node2, _parent, context) => {
  const h = node2;
  const depth = h.depth ?? 1;
  const marker = "#".repeat(Math.max(1, Math.min(6, depth)));
  let phrasing2 = h.title;
  if (!phrasing2 || !phrasing2.length) {
    if (Array.isArray(h.children) && h.children.length) {
      phrasing2 = h.children;
    } else {
      phrasing2 = [];
    }
  }
  const titleInline = context.containerPhrasing(
    { type: "paragraph", children: phrasing2 },
    { before: "", after: "" }
  ).trim();
  const line = `${marker} ${titleInline}`.trimEnd() + "\n";
  let body = "";
  if (Array.isArray(h.children) && h.children.length) {
    const parts = h.children.map((child) => context.handle(child, h));
    const joined = parts.join("");
    body = joined.endsWith("\n") ? joined : joined + "\n";
  }
  return line + body;
};
function nestedHeadingToMarkdown() {
  return {
    handlers: { heading: handleHeading }
  };
}

// src/mdast-extensions/remark-nested-heading/remark-nested-heading.ts
var remarkNestedHeading = function() {
  const data = this.data();
  (data.toMarkdownExtensions || (data.toMarkdownExtensions = [])).push(nestedHeadingToMarkdown());
  return transformNestedHeadings();
};
var remark_nested_heading_default = remarkNestedHeading;

// node_modules/mdast-util-directive/node_modules/ccount/index.js
function ccount2(value, character) {
  const source = String(value);
  if (typeof character !== "string") {
    throw new TypeError("Expected character");
  }
  let count2 = 0;
  let index2 = source.indexOf(character);
  while (index2 !== -1) {
    count2++;
    index2 = source.indexOf(character, index2 + character.length);
  }
  return count2;
}

// node_modules/character-entities-legacy/index.js
var characterEntitiesLegacy = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml"
];

// node_modules/character-reference-invalid/index.js
var characterReferenceInvalid = {
  0: "\uFFFD",
  128: "\u20AC",
  130: "\u201A",
  131: "\u0192",
  132: "\u201E",
  133: "\u2026",
  134: "\u2020",
  135: "\u2021",
  136: "\u02C6",
  137: "\u2030",
  138: "\u0160",
  139: "\u2039",
  140: "\u0152",
  142: "\u017D",
  145: "\u2018",
  146: "\u2019",
  147: "\u201C",
  148: "\u201D",
  149: "\u2022",
  150: "\u2013",
  151: "\u2014",
  152: "\u02DC",
  153: "\u2122",
  154: "\u0161",
  155: "\u203A",
  156: "\u0153",
  158: "\u017E",
  159: "\u0178"
};

// node_modules/is-decimal/index.js
function isDecimal(character) {
  const code3 = typeof character === "string" ? character.charCodeAt(0) : character;
  return code3 >= 48 && code3 <= 57;
}

// node_modules/is-hexadecimal/index.js
function isHexadecimal(character) {
  const code3 = typeof character === "string" ? character.charCodeAt(0) : character;
  return code3 >= 97 && code3 <= 102 || code3 >= 65 && code3 <= 70 || code3 >= 48 && code3 <= 57;
}

// node_modules/is-alphabetical/index.js
function isAlphabetical(character) {
  const code3 = typeof character === "string" ? character.charCodeAt(0) : character;
  return code3 >= 97 && code3 <= 122 || code3 >= 65 && code3 <= 90;
}

// node_modules/is-alphanumerical/index.js
function isAlphanumerical(character) {
  return isAlphabetical(character) || isDecimal(character);
}

// node_modules/parse-entities/lib/index.js
var messages = [
  "",
  /* 1: Non terminated (named) */
  "Named character references must be terminated by a semicolon",
  /* 2: Non terminated (numeric) */
  "Numeric character references must be terminated by a semicolon",
  /* 3: Empty (named) */
  "Named character references cannot be empty",
  /* 4: Empty (numeric) */
  "Numeric character references cannot be empty",
  /* 5: Unknown (named) */
  "Named character references must be known",
  /* 6: Disallowed (numeric) */
  "Numeric character references cannot be disallowed",
  /* 7: Prohibited (numeric) */
  "Numeric character references cannot be outside the permissible Unicode range"
];
function parseEntities(value, options) {
  const settings = options || {};
  const additional = typeof settings.additional === "string" ? settings.additional.charCodeAt(0) : settings.additional;
  const result = [];
  let index2 = 0;
  let lines = -1;
  let queue = "";
  let point3;
  let indent2;
  if (settings.position) {
    if ("start" in settings.position || "indent" in settings.position) {
      indent2 = settings.position.indent;
      point3 = settings.position.start;
    } else {
      point3 = settings.position;
    }
  }
  let line = (point3 ? point3.line : 0) || 1;
  let column = (point3 ? point3.column : 0) || 1;
  let previous4 = now();
  let character;
  index2--;
  while (++index2 <= value.length) {
    if (character === 10) {
      column = (indent2 ? indent2[lines] : 0) || 1;
    }
    character = value.charCodeAt(index2);
    if (character === 38) {
      const following = value.charCodeAt(index2 + 1);
      if (following === 9 || following === 10 || following === 12 || following === 32 || following === 38 || following === 60 || Number.isNaN(following) || additional && following === additional) {
        queue += String.fromCharCode(character);
        column++;
        continue;
      }
      const start = index2 + 1;
      let begin = start;
      let end = start;
      let type;
      if (following === 35) {
        end = ++begin;
        const following2 = value.charCodeAt(end);
        if (following2 === 88 || following2 === 120) {
          type = "hexadecimal";
          end = ++begin;
        } else {
          type = "decimal";
        }
      } else {
        type = "named";
      }
      let characterReferenceCharacters = "";
      let characterReference2 = "";
      let characters = "";
      const test2 = type === "named" ? isAlphanumerical : type === "decimal" ? isDecimal : isHexadecimal;
      end--;
      while (++end <= value.length) {
        const following2 = value.charCodeAt(end);
        if (!test2(following2)) {
          break;
        }
        characters += String.fromCharCode(following2);
        if (type === "named" && characterEntitiesLegacy.includes(characters)) {
          characterReferenceCharacters = characters;
          characterReference2 = decodeNamedCharacterReference(characters);
        }
      }
      let terminated = value.charCodeAt(end) === 59;
      if (terminated) {
        end++;
        const namedReference = type === "named" ? decodeNamedCharacterReference(characters) : false;
        if (namedReference) {
          characterReferenceCharacters = characters;
          characterReference2 = namedReference;
        }
      }
      let diff = 1 + end - start;
      let reference = "";
      if (!terminated && settings.nonTerminated === false) {
      } else if (!characters) {
        if (type !== "named") {
          warning(4, diff);
        }
      } else if (type === "named") {
        if (terminated && !characterReference2) {
          warning(5, 1);
        } else {
          if (characterReferenceCharacters !== characters) {
            end = begin + characterReferenceCharacters.length;
            diff = 1 + end - begin;
            terminated = false;
          }
          if (!terminated) {
            const reason = characterReferenceCharacters ? 1 : 3;
            if (settings.attribute) {
              const following2 = value.charCodeAt(end);
              if (following2 === 61) {
                warning(reason, diff);
                characterReference2 = "";
              } else if (isAlphanumerical(following2)) {
                characterReference2 = "";
              } else {
                warning(reason, diff);
              }
            } else {
              warning(reason, diff);
            }
          }
        }
        reference = characterReference2;
      } else {
        if (!terminated) {
          warning(2, diff);
        }
        let referenceCode = Number.parseInt(
          characters,
          type === "hexadecimal" ? 16 : 10
        );
        if (prohibited(referenceCode)) {
          warning(7, diff);
          reference = String.fromCharCode(
            65533
            /* `�` */
          );
        } else if (referenceCode in characterReferenceInvalid) {
          warning(6, diff);
          reference = characterReferenceInvalid[referenceCode];
        } else {
          let output = "";
          if (disallowed(referenceCode)) {
            warning(6, diff);
          }
          if (referenceCode > 65535) {
            referenceCode -= 65536;
            output += String.fromCharCode(
              referenceCode >>> (10 & 1023) | 55296
            );
            referenceCode = 56320 | referenceCode & 1023;
          }
          reference = output + String.fromCharCode(referenceCode);
        }
      }
      if (reference) {
        flush();
        previous4 = now();
        index2 = end - 1;
        column += end - start + 1;
        result.push(reference);
        const next = now();
        next.offset++;
        if (settings.reference) {
          settings.reference.call(
            settings.referenceContext || void 0,
            reference,
            { start: previous4, end: next },
            value.slice(start - 1, end)
          );
        }
        previous4 = next;
      } else {
        characters = value.slice(start - 1, end);
        queue += characters;
        column += characters.length;
        index2 = end - 1;
      }
    } else {
      if (character === 10) {
        line++;
        lines++;
        column = 0;
      }
      if (Number.isNaN(character)) {
        flush();
      } else {
        queue += String.fromCharCode(character);
        column++;
      }
    }
  }
  return result.join("");
  function now() {
    return {
      line,
      column,
      offset: index2 + ((point3 ? point3.offset : 0) || 0)
    };
  }
  function warning(code3, offset) {
    let position2;
    if (settings.warning) {
      position2 = now();
      position2.column += offset;
      position2.offset += offset;
      settings.warning.call(
        settings.warningContext || void 0,
        messages[code3],
        position2,
        code3
      );
    }
  }
  function flush() {
    if (queue) {
      result.push(queue);
      if (settings.text) {
        settings.text.call(settings.textContext || void 0, queue, {
          start: previous4,
          end: now()
        });
      }
      queue = "";
    }
  }
}
function prohibited(code3) {
  return code3 >= 55296 && code3 <= 57343 || code3 > 1114111;
}
function disallowed(code3) {
  return code3 >= 1 && code3 <= 8 || code3 === 11 || code3 >= 13 && code3 <= 31 || code3 >= 127 && code3 <= 159 || code3 >= 64976 && code3 <= 65007 || (code3 & 65535) === 65535 || (code3 & 65535) === 65534;
}

// node_modules/stringify-entities/lib/core.js
var defaultSubsetRegex = /["&'<>`]/g;
var surrogatePairsRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
var controlCharactersRegex = (
  // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
  /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
);
var regexEscapeRegex = /[|\\{}()[\]^$+*?.]/g;
var subsetToRegexCache = /* @__PURE__ */ new WeakMap();
function core(value, options) {
  value = value.replace(
    options.subset ? charactersToExpressionCached(options.subset) : defaultSubsetRegex,
    basic
  );
  if (options.subset || options.escapeOnly) {
    return value;
  }
  return value.replace(surrogatePairsRegex, surrogate).replace(controlCharactersRegex, basic);
  function surrogate(pair, index2, all3) {
    return options.format(
      (pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536,
      all3.charCodeAt(index2 + 2),
      options
    );
  }
  function basic(character, index2, all3) {
    return options.format(
      character.charCodeAt(0),
      all3.charCodeAt(index2 + 1),
      options
    );
  }
}
function charactersToExpressionCached(subset) {
  let cached = subsetToRegexCache.get(subset);
  if (!cached) {
    cached = charactersToExpression(subset);
    subsetToRegexCache.set(subset, cached);
  }
  return cached;
}
function charactersToExpression(subset) {
  const groups = [];
  let index2 = -1;
  while (++index2 < subset.length) {
    groups.push(subset[index2].replace(regexEscapeRegex, "\\$&"));
  }
  return new RegExp("(?:" + groups.join("|") + ")", "g");
}

// node_modules/stringify-entities/lib/util/format-basic.js
function formatBasic(code3) {
  return "&#x" + code3.toString(16).toUpperCase() + ";";
}

// node_modules/stringify-entities/lib/index.js
function stringifyEntitiesLight(value, options) {
  return core(value, Object.assign({ format: formatBasic }, options));
}

// node_modules/mdast-util-directive/lib/index.js
var own4 = {}.hasOwnProperty;
var emptyOptions3 = {};
var shortcut = /^[^\t\n\r "#'.<=>`}]+$/;
var unquoted = /^[^\t\n\r "'<=>`}]+$/;
function directiveFromMarkdown() {
  return {
    canContainEols: ["textDirective"],
    enter: {
      directiveContainer: enterContainer,
      directiveContainerAttributes: enterAttributes,
      directiveContainerLabel: enterContainerLabel,
      directiveLeaf: enterLeaf,
      directiveLeafAttributes: enterAttributes,
      directiveText: enterText,
      directiveTextAttributes: enterAttributes
    },
    exit: {
      directiveContainer: exit3,
      directiveContainerAttributeClassValue: exitAttributeClassValue,
      directiveContainerAttributeIdValue: exitAttributeIdValue,
      directiveContainerAttributeName: exitAttributeName,
      directiveContainerAttributeValue: exitAttributeValue,
      directiveContainerAttributes: exitAttributes,
      directiveContainerLabel: exitContainerLabel,
      directiveContainerName: exitName,
      directiveLeaf: exit3,
      directiveLeafAttributeClassValue: exitAttributeClassValue,
      directiveLeafAttributeIdValue: exitAttributeIdValue,
      directiveLeafAttributeName: exitAttributeName,
      directiveLeafAttributeValue: exitAttributeValue,
      directiveLeafAttributes: exitAttributes,
      directiveLeafName: exitName,
      directiveText: exit3,
      directiveTextAttributeClassValue: exitAttributeClassValue,
      directiveTextAttributeIdValue: exitAttributeIdValue,
      directiveTextAttributeName: exitAttributeName,
      directiveTextAttributeValue: exitAttributeValue,
      directiveTextAttributes: exitAttributes,
      directiveTextName: exitName
    }
  };
}
function directiveToMarkdown(options) {
  const settings = options || emptyOptions3;
  if (settings.quote !== '"' && settings.quote !== "'" && settings.quote !== null && settings.quote !== void 0) {
    throw new Error(
      "Invalid quote `" + settings.quote + "`, expected `'` or `\"`"
    );
  }
  handleDirective.peek = peekDirective;
  return {
    handlers: {
      containerDirective: handleDirective,
      leafDirective: handleDirective,
      textDirective: handleDirective
    },
    unsafe: [
      {
        character: "\r",
        inConstruct: ["leafDirectiveLabel", "containerDirectiveLabel"]
      },
      {
        character: "\n",
        inConstruct: ["leafDirectiveLabel", "containerDirectiveLabel"]
      },
      {
        before: "[^:]",
        character: ":",
        after: "[A-Za-z]",
        inConstruct: ["phrasing"]
      },
      { atBreak: true, character: ":", after: ":" }
    ]
  };
  function handleDirective(node2, _, state, info) {
    const tracker = state.createTracker(info);
    const sequence = fence(node2);
    const exit4 = state.enter(node2.type);
    let value = tracker.move(sequence + (node2.name || ""));
    let label4;
    if (node2.type === "containerDirective") {
      const head = (node2.children || [])[0];
      label4 = inlineDirectiveLabel(head) ? head : void 0;
    } else {
      label4 = node2;
    }
    if (label4 && label4.children && label4.children.length > 0) {
      const exit5 = state.enter("label");
      const labelType = `${node2.type}Label`;
      const subexit = state.enter(labelType);
      value += tracker.move("[");
      value += tracker.move(
        state.containerPhrasing(label4, {
          ...tracker.current(),
          before: value,
          after: "]"
        })
      );
      value += tracker.move("]");
      subexit();
      exit5();
    }
    value += tracker.move(attributes4(node2, state));
    if (node2.type === "containerDirective") {
      const head = (node2.children || [])[0];
      let shallow = node2;
      if (inlineDirectiveLabel(head)) {
        shallow = Object.assign({}, node2, { children: node2.children.slice(1) });
      }
      if (shallow && shallow.children && shallow.children.length > 0) {
        value += tracker.move("\n");
        value += tracker.move(state.containerFlow(shallow, tracker.current()));
      }
      value += tracker.move("\n" + sequence);
    }
    exit4();
    return value;
  }
  function attributes4(node2, state) {
    const attributes5 = node2.attributes || {};
    const values = [];
    let classesFull;
    let classes;
    let id;
    let key;
    for (key in attributes5) {
      if (own4.call(attributes5, key) && attributes5[key] !== void 0 && attributes5[key] !== null) {
        const value = String(attributes5[key]);
        if (key === "id") {
          id = settings.preferShortcut !== false && shortcut.test(value) ? "#" + value : quoted("id", value, node2, state);
        } else if (key === "class") {
          const list3 = value.split(/[\t\n\r ]+/g);
          const classesFullList = [];
          const classesList = [];
          let index2 = -1;
          while (++index2 < list3.length) {
            ;
            (settings.preferShortcut !== false && shortcut.test(list3[index2]) ? classesList : classesFullList).push(list3[index2]);
          }
          classesFull = classesFullList.length > 0 ? quoted("class", classesFullList.join(" "), node2, state) : "";
          classes = classesList.length > 0 ? "." + classesList.join(".") : "";
        } else {
          values.push(quoted(key, value, node2, state));
        }
      }
    }
    if (classesFull) {
      values.unshift(classesFull);
    }
    if (classes) {
      values.unshift(classes);
    }
    if (id) {
      values.unshift(id);
    }
    return values.length > 0 ? "{" + values.join(" ") + "}" : "";
  }
  function quoted(key, value, node2, state) {
    if (settings.collapseEmptyAttributes !== false && !value) return key;
    if (settings.preferUnquoted && unquoted.test(value)) {
      return key + "=" + value;
    }
    const preferred = settings.quote || state.options.quote || '"';
    const alternative = preferred === '"' ? "'" : '"';
    const appliedQuote = settings.quoteSmart && ccount2(value, preferred) > ccount2(value, alternative) ? alternative : preferred;
    const subset = node2.type === "textDirective" ? [appliedQuote] : [appliedQuote, "\n", "\r"];
    return key + "=" + appliedQuote + stringifyEntitiesLight(value, { subset }) + appliedQuote;
  }
}
function enterContainer(token) {
  enter.call(this, "containerDirective", token);
}
function enterLeaf(token) {
  enter.call(this, "leafDirective", token);
}
function enterText(token) {
  enter.call(this, "textDirective", token);
}
function enter(type, token) {
  this.enter({ type, name: "", attributes: {}, children: [] }, token);
}
function exitName(token) {
  const node2 = this.stack[this.stack.length - 1];
  ok(
    node2.type === "containerDirective" || node2.type === "leafDirective" || node2.type === "textDirective"
  );
  node2.name = this.sliceSerialize(token);
}
function enterContainerLabel(token) {
  this.enter(
    { type: "paragraph", data: { directiveLabel: true }, children: [] },
    token
  );
}
function exitContainerLabel(token) {
  this.exit(token);
}
function enterAttributes() {
  this.data.directiveAttributes = [];
  this.buffer();
}
function exitAttributeIdValue(token) {
  const list3 = this.data.directiveAttributes;
  ok(list3, "expected `directiveAttributes`");
  list3.push([
    "id",
    parseEntities(this.sliceSerialize(token), { attribute: true })
  ]);
}
function exitAttributeClassValue(token) {
  const list3 = this.data.directiveAttributes;
  ok(list3, "expected `directiveAttributes`");
  list3.push([
    "class",
    parseEntities(this.sliceSerialize(token), { attribute: true })
  ]);
}
function exitAttributeValue(token) {
  const list3 = this.data.directiveAttributes;
  ok(list3, "expected `directiveAttributes`");
  list3[list3.length - 1][1] = parseEntities(this.sliceSerialize(token), {
    attribute: true
  });
}
function exitAttributeName(token) {
  const list3 = this.data.directiveAttributes;
  ok(list3, "expected `directiveAttributes`");
  list3.push([this.sliceSerialize(token), ""]);
}
function exitAttributes() {
  const list3 = this.data.directiveAttributes;
  ok(list3, "expected `directiveAttributes`");
  const cleaned = {};
  let index2 = -1;
  while (++index2 < list3.length) {
    const attribute2 = list3[index2];
    if (attribute2[0] === "class" && cleaned.class) {
      cleaned.class += " " + attribute2[1];
    } else {
      cleaned[attribute2[0]] = attribute2[1];
    }
  }
  this.data.directiveAttributes = void 0;
  this.resume();
  const node2 = this.stack[this.stack.length - 1];
  ok(
    node2.type === "containerDirective" || node2.type === "leafDirective" || node2.type === "textDirective"
  );
  node2.attributes = cleaned;
}
function exit3(token) {
  this.exit(token);
}
function peekDirective() {
  return ":";
}
function inlineDirectiveLabel(node2) {
  return Boolean(
    node2 && node2.type === "paragraph" && node2.data && node2.data.directiveLabel
  );
}
function fence(node2) {
  let size = 0;
  if (node2.type === "containerDirective") {
    visitParents(node2, function(node3, parents) {
      if (node3.type === "containerDirective") {
        let index2 = parents.length;
        let nesting = 0;
        while (index2--) {
          if (parents[index2].type === "containerDirective") {
            nesting++;
          }
        }
        if (nesting > size) size = nesting;
      }
    });
    size += 3;
  } else if (node2.type === "leafDirective") {
    size = 2;
  } else {
    size = 1;
  }
  return ":".repeat(size);
}

// node_modules/micromark-extension-directive/lib/factory-attributes.js
function factoryAttributes(effects, ok3, nok, attributesType, attributesMarkerType, attributeType, attributeIdType, attributeClassType, attributeNameType, attributeInitializerType, attributeValueLiteralType, attributeValueType, attributeValueMarker, attributeValueData, disallowEol) {
  let type;
  let marker;
  return start;
  function start(code3) {
    effects.enter(attributesType);
    effects.enter(attributesMarkerType);
    effects.consume(code3);
    effects.exit(attributesMarkerType);
    return between;
  }
  function between(code3) {
    if (code3 === 35) {
      type = attributeIdType;
      return shortcutStart(code3);
    }
    if (code3 === 46) {
      type = attributeClassType;
      return shortcutStart(code3);
    }
    if (disallowEol && markdownSpace(code3)) {
      return factorySpace(effects, between, "whitespace")(code3);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code3)) {
      return factoryWhitespace(effects, between)(code3);
    }
    if (code3 === null || markdownLineEnding(code3) || unicodeWhitespace(code3) || unicodePunctuation(code3) && code3 !== 45 && code3 !== 95) {
      return end(code3);
    }
    effects.enter(attributeType);
    effects.enter(attributeNameType);
    effects.consume(code3);
    return name;
  }
  function shortcutStart(code3) {
    const markerType = (
      /** @type {TokenType} */
      type + "Marker"
    );
    effects.enter(attributeType);
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code3);
    effects.exit(markerType);
    return shortcutStartAfter;
  }
  function shortcutStartAfter(code3) {
    if (code3 === null || code3 === 34 || code3 === 35 || code3 === 39 || code3 === 46 || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 || code3 === 125 || markdownLineEndingOrSpace(code3)) {
      return nok(code3);
    }
    const valueType = (
      /** @type {TokenType} */
      type + "Value"
    );
    effects.enter(valueType);
    effects.consume(code3);
    return shortcut2;
  }
  function shortcut2(code3) {
    if (code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 35 || code3 === 46 || code3 === 125 || markdownLineEndingOrSpace(code3)) {
      const valueType = (
        /** @type {TokenType} */
        type + "Value"
      );
      effects.exit(valueType);
      effects.exit(type);
      effects.exit(attributeType);
      return between(code3);
    }
    effects.consume(code3);
    return shortcut2;
  }
  function name(code3) {
    if (code3 === null || markdownLineEnding(code3) || unicodeWhitespace(code3) || unicodePunctuation(code3) && code3 !== 45 && code3 !== 46 && code3 !== 58 && code3 !== 95) {
      effects.exit(attributeNameType);
      if (disallowEol && markdownSpace(code3)) {
        return factorySpace(effects, nameAfter, "whitespace")(code3);
      }
      if (!disallowEol && markdownLineEndingOrSpace(code3)) {
        return factoryWhitespace(effects, nameAfter)(code3);
      }
      return nameAfter(code3);
    }
    effects.consume(code3);
    return name;
  }
  function nameAfter(code3) {
    if (code3 === 61) {
      effects.enter(attributeInitializerType);
      effects.consume(code3);
      effects.exit(attributeInitializerType);
      return valueBefore;
    }
    effects.exit(attributeType);
    return between(code3);
  }
  function valueBefore(code3) {
    if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 || code3 === 125 || disallowEol && markdownLineEnding(code3)) {
      return nok(code3);
    }
    if (code3 === 34 || code3 === 39) {
      effects.enter(attributeValueLiteralType);
      effects.enter(attributeValueMarker);
      effects.consume(code3);
      effects.exit(attributeValueMarker);
      marker = code3;
      return valueQuotedStart;
    }
    if (disallowEol && markdownSpace(code3)) {
      return factorySpace(effects, valueBefore, "whitespace")(code3);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code3)) {
      return factoryWhitespace(effects, valueBefore)(code3);
    }
    effects.enter(attributeValueType);
    effects.enter(attributeValueData);
    effects.consume(code3);
    marker = void 0;
    return valueUnquoted;
  }
  function valueUnquoted(code3) {
    if (code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 125 || markdownLineEndingOrSpace(code3)) {
      effects.exit(attributeValueData);
      effects.exit(attributeValueType);
      effects.exit(attributeType);
      return between(code3);
    }
    effects.consume(code3);
    return valueUnquoted;
  }
  function valueQuotedStart(code3) {
    if (code3 === marker) {
      effects.enter(attributeValueMarker);
      effects.consume(code3);
      effects.exit(attributeValueMarker);
      effects.exit(attributeValueLiteralType);
      effects.exit(attributeType);
      return valueQuotedAfter;
    }
    effects.enter(attributeValueType);
    return valueQuotedBetween(code3);
  }
  function valueQuotedBetween(code3) {
    if (code3 === marker) {
      effects.exit(attributeValueType);
      return valueQuotedStart(code3);
    }
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      return disallowEol ? nok(code3) : factoryWhitespace(effects, valueQuotedBetween)(code3);
    }
    effects.enter(attributeValueData);
    effects.consume(code3);
    return valueQuoted;
  }
  function valueQuoted(code3) {
    if (code3 === marker || code3 === null || markdownLineEnding(code3)) {
      effects.exit(attributeValueData);
      return valueQuotedBetween(code3);
    }
    effects.consume(code3);
    return valueQuoted;
  }
  function valueQuotedAfter(code3) {
    return code3 === 125 || markdownLineEndingOrSpace(code3) ? between(code3) : end(code3);
  }
  function end(code3) {
    if (code3 === 125) {
      effects.enter(attributesMarkerType);
      effects.consume(code3);
      effects.exit(attributesMarkerType);
      effects.exit(attributesType);
      return ok3;
    }
    return nok(code3);
  }
}

// node_modules/micromark-extension-directive/lib/factory-label.js
function factoryLabel2(effects, ok3, nok, type, markerType, stringType, disallowEol) {
  let size = 0;
  let balance = 0;
  let previous4;
  return start;
  function start(code3) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code3);
    effects.exit(markerType);
    return afterStart;
  }
  function afterStart(code3) {
    if (code3 === 93) {
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      effects.exit(type);
      return ok3;
    }
    effects.enter(stringType);
    return lineStart(code3);
  }
  function lineStart(code3) {
    if (code3 === 93 && !balance) {
      return atClosingBrace(code3);
    }
    const token = effects.enter("chunkText", {
      _contentTypeTextTrailing: true,
      contentType: "text",
      previous: previous4
    });
    if (previous4) previous4.next = token;
    previous4 = token;
    return data(code3);
  }
  function data(code3) {
    if (code3 === null || size > 999) {
      return nok(code3);
    }
    if (code3 === 91 && ++balance > 32) {
      return nok(code3);
    }
    if (code3 === 93 && !balance--) {
      effects.exit("chunkText");
      return atClosingBrace(code3);
    }
    if (markdownLineEnding(code3)) {
      if (disallowEol) {
        return nok(code3);
      }
      effects.consume(code3);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code3);
    return code3 === 92 ? dataEscape : data;
  }
  function dataEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return data;
    }
    return data(code3);
  }
  function atClosingBrace(code3) {
    effects.exit(stringType);
    effects.enter(markerType);
    effects.consume(code3);
    effects.exit(markerType);
    effects.exit(type);
    return ok3;
  }
}

// node_modules/micromark-extension-directive/lib/factory-name.js
function factoryName(effects, ok3, nok, type) {
  const self2 = this;
  return start;
  function start(code3) {
    if (code3 === null || markdownLineEnding(code3) || unicodePunctuation(code3) || unicodeWhitespace(code3)) {
      return nok(code3);
    }
    effects.enter(type);
    effects.consume(code3);
    return name;
  }
  function name(code3) {
    if (code3 === null || markdownLineEnding(code3) || unicodeWhitespace(code3) || unicodePunctuation(code3) && code3 !== 45 && code3 !== 95) {
      effects.exit(type);
      return self2.previous === 45 || self2.previous === 95 ? nok(code3) : ok3(code3);
    }
    effects.consume(code3);
    return name;
  }
}

// node_modules/micromark-extension-directive/lib/directive-container.js
var directiveContainer = {
  tokenize: tokenizeDirectiveContainer,
  concrete: true
};
var label = {
  tokenize: tokenizeLabel,
  partial: true
};
var attributes = {
  tokenize: tokenizeAttributes,
  partial: true
};
var nonLazyLine = {
  tokenize: tokenizeNonLazyLine,
  partial: true
};
function tokenizeDirectiveContainer(effects, ok3, nok) {
  const self2 = this;
  const tail = self2.events[self2.events.length - 1];
  const initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let sizeOpen = 0;
  let previous4;
  return start;
  function start(code3) {
    effects.enter("directiveContainer");
    effects.enter("directiveContainerFence");
    effects.enter("directiveContainerSequence");
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === 58) {
      effects.consume(code3);
      sizeOpen++;
      return sequenceOpen;
    }
    if (sizeOpen < 3) {
      return nok(code3);
    }
    effects.exit("directiveContainerSequence");
    return factoryName.call(self2, effects, afterName, nok, "directiveContainerName")(code3);
  }
  function afterName(code3) {
    return code3 === 91 ? effects.attempt(label, afterLabel, afterLabel)(code3) : afterLabel(code3);
  }
  function afterLabel(code3) {
    return code3 === 123 ? effects.attempt(attributes, afterAttributes, afterAttributes)(code3) : afterAttributes(code3);
  }
  function afterAttributes(code3) {
    return factorySpace(effects, openAfter, "whitespace")(code3);
  }
  function openAfter(code3) {
    effects.exit("directiveContainerFence");
    if (code3 === null) {
      return after(code3);
    }
    if (markdownLineEnding(code3)) {
      if (self2.interrupt) {
        return ok3(code3);
      }
      return effects.attempt(nonLazyLine, contentStart, after)(code3);
    }
    return nok(code3);
  }
  function contentStart(code3) {
    if (code3 === null) {
      return after(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.check(nonLazyLine, emptyContentNonLazyLineAfter, after)(code3);
    }
    effects.enter("directiveContainerContent");
    return lineStart(code3);
  }
  function lineStart(code3) {
    return effects.attempt({
      tokenize: tokenizeClosingFence,
      partial: true
    }, afterContent, initialSize ? factorySpace(effects, chunkStart, "linePrefix", initialSize + 1) : chunkStart)(code3);
  }
  function chunkStart(code3) {
    if (code3 === null) {
      return afterContent(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.check(nonLazyLine, chunkNonLazyStart, afterContent)(code3);
    }
    return chunkNonLazyStart(code3);
  }
  function contentContinue(code3) {
    if (code3 === null) {
      const t = effects.exit("chunkDocument");
      self2.parser.lazy[t.start.line] = false;
      return afterContent(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.check(nonLazyLine, nonLazyLineAfter, lineAfter)(code3);
    }
    effects.consume(code3);
    return contentContinue;
  }
  function chunkNonLazyStart(code3) {
    const token = effects.enter("chunkDocument", {
      contentType: "document",
      previous: previous4
    });
    if (previous4) previous4.next = token;
    previous4 = token;
    return contentContinue(code3);
  }
  function emptyContentNonLazyLineAfter(code3) {
    effects.enter("directiveContainerContent");
    return lineStart(code3);
  }
  function nonLazyLineAfter(code3) {
    effects.consume(code3);
    const t = effects.exit("chunkDocument");
    self2.parser.lazy[t.start.line] = false;
    return lineStart;
  }
  function lineAfter(code3) {
    const t = effects.exit("chunkDocument");
    self2.parser.lazy[t.start.line] = false;
    return afterContent(code3);
  }
  function afterContent(code3) {
    effects.exit("directiveContainerContent");
    return after(code3);
  }
  function after(code3) {
    effects.exit("directiveContainer");
    return ok3(code3);
  }
  function tokenizeClosingFence(effects2, ok4, nok2) {
    let size = 0;
    return factorySpace(effects2, closingPrefixAfter, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function closingPrefixAfter(code3) {
      effects2.enter("directiveContainerFence");
      effects2.enter("directiveContainerSequence");
      return closingSequence(code3);
    }
    function closingSequence(code3) {
      if (code3 === 58) {
        effects2.consume(code3);
        size++;
        return closingSequence;
      }
      if (size < sizeOpen) return nok2(code3);
      effects2.exit("directiveContainerSequence");
      return factorySpace(effects2, closingSequenceEnd, "whitespace")(code3);
    }
    function closingSequenceEnd(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects2.exit("directiveContainerFence");
        return ok4(code3);
      }
      return nok2(code3);
    }
  }
}
function tokenizeLabel(effects, ok3, nok) {
  return factoryLabel2(effects, ok3, nok, "directiveContainerLabel", "directiveContainerLabelMarker", "directiveContainerLabelString", true);
}
function tokenizeAttributes(effects, ok3, nok) {
  return factoryAttributes(effects, ok3, nok, "directiveContainerAttributes", "directiveContainerAttributesMarker", "directiveContainerAttribute", "directiveContainerAttributeId", "directiveContainerAttributeClass", "directiveContainerAttributeName", "directiveContainerAttributeInitializerMarker", "directiveContainerAttributeValueLiteral", "directiveContainerAttributeValue", "directiveContainerAttributeValueMarker", "directiveContainerAttributeValueData", true);
}
function tokenizeNonLazyLine(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code3) {
    return self2.parser.lazy[self2.now().line] ? nok(code3) : ok3(code3);
  }
}

// node_modules/micromark-extension-directive/lib/directive-leaf.js
var directiveLeaf = {
  tokenize: tokenizeDirectiveLeaf
};
var label2 = {
  tokenize: tokenizeLabel2,
  partial: true
};
var attributes2 = {
  tokenize: tokenizeAttributes2,
  partial: true
};
function tokenizeDirectiveLeaf(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    effects.enter("directiveLeaf");
    effects.enter("directiveLeafSequence");
    effects.consume(code3);
    return inStart;
  }
  function inStart(code3) {
    if (code3 === 58) {
      effects.consume(code3);
      effects.exit("directiveLeafSequence");
      return factoryName.call(self2, effects, afterName, nok, "directiveLeafName");
    }
    return nok(code3);
  }
  function afterName(code3) {
    return code3 === 91 ? effects.attempt(label2, afterLabel, afterLabel)(code3) : afterLabel(code3);
  }
  function afterLabel(code3) {
    return code3 === 123 ? effects.attempt(attributes2, afterAttributes, afterAttributes)(code3) : afterAttributes(code3);
  }
  function afterAttributes(code3) {
    return factorySpace(effects, end, "whitespace")(code3);
  }
  function end(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("directiveLeaf");
      return ok3(code3);
    }
    return nok(code3);
  }
}
function tokenizeLabel2(effects, ok3, nok) {
  return factoryLabel2(effects, ok3, nok, "directiveLeafLabel", "directiveLeafLabelMarker", "directiveLeafLabelString", true);
}
function tokenizeAttributes2(effects, ok3, nok) {
  return factoryAttributes(effects, ok3, nok, "directiveLeafAttributes", "directiveLeafAttributesMarker", "directiveLeafAttribute", "directiveLeafAttributeId", "directiveLeafAttributeClass", "directiveLeafAttributeName", "directiveLeafAttributeInitializerMarker", "directiveLeafAttributeValueLiteral", "directiveLeafAttributeValue", "directiveLeafAttributeValueMarker", "directiveLeafAttributeValueData", true);
}

// node_modules/micromark-extension-directive/lib/directive-text.js
var directiveText = {
  tokenize: tokenizeDirectiveText,
  previous: previous3
};
var label3 = {
  tokenize: tokenizeLabel3,
  partial: true
};
var attributes3 = {
  tokenize: tokenizeAttributes3,
  partial: true
};
function previous3(code3) {
  return code3 !== 58 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeDirectiveText(effects, ok3, nok) {
  const self2 = this;
  return start;
  function start(code3) {
    effects.enter("directiveText");
    effects.enter("directiveTextMarker");
    effects.consume(code3);
    effects.exit("directiveTextMarker");
    return factoryName.call(self2, effects, afterName, nok, "directiveTextName");
  }
  function afterName(code3) {
    return code3 === 58 ? nok(code3) : code3 === 91 ? effects.attempt(label3, afterLabel, afterLabel)(code3) : afterLabel(code3);
  }
  function afterLabel(code3) {
    return code3 === 123 ? effects.attempt(attributes3, afterAttributes, afterAttributes)(code3) : afterAttributes(code3);
  }
  function afterAttributes(code3) {
    effects.exit("directiveText");
    return ok3(code3);
  }
}
function tokenizeLabel3(effects, ok3, nok) {
  return factoryLabel2(effects, ok3, nok, "directiveTextLabel", "directiveTextLabelMarker", "directiveTextLabelString");
}
function tokenizeAttributes3(effects, ok3, nok) {
  return factoryAttributes(effects, ok3, nok, "directiveTextAttributes", "directiveTextAttributesMarker", "directiveTextAttribute", "directiveTextAttributeId", "directiveTextAttributeClass", "directiveTextAttributeName", "directiveTextAttributeInitializerMarker", "directiveTextAttributeValueLiteral", "directiveTextAttributeValue", "directiveTextAttributeValueMarker", "directiveTextAttributeValueData");
}

// node_modules/micromark-extension-directive/lib/syntax.js
function directive() {
  return {
    text: {
      [58]: directiveText
    },
    flow: {
      [58]: [directiveContainer, directiveLeaf]
    }
  };
}

// node_modules/remark-directive/lib/index.js
function remarkDirective() {
  const self2 = (
    /** @type {Processor<Root>} */
    this
  );
  const data = self2.data();
  const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);
  const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);
  const toMarkdownExtensions = data.toMarkdownExtensions || (data.toMarkdownExtensions = []);
  micromarkExtensions.push(directive());
  fromMarkdownExtensions.push(directiveFromMarkdown());
  toMarkdownExtensions.push(directiveToMarkdown());
}

// src/mdast-extensions/remark-directive-extension/props-grammar.ts
var P = __toESM(require_parsimmon_umd_min(), 1);
function parsePropValue(input) {
  const s = input.trim();
  return Value().tryParse(s);
}
var wsp = P.regexp(/[ \t\r\n]*/m);
var lex = (p) => p.skip(wsp);
var tok = (s) => lex(P.string(s));
var DQ = P.regexp(/"((?:[^"\\]|\\.)*)"/, 1);
var SQ = P.regexp(/'((?:[^'\\]|\\.)*)'/, 1);
var Ident = lex(P.regexp(/[A-Za-z_][A-Za-z0-9_-]*/));
var String_ = () => lex(P.alt(DQ, SQ)).map((v) => ({ kind: "lit", value: unescapeStr(v) }));
var Number_ = () => lex(P.regexp(/-?(?:0|[1-9]\d*)(?:\.\d+)?/)).map((v) => ({ kind: "lit", value: Number(v) }));
var Bool_ = () => lex(P.alt(P.string("true"), P.string("false"))).map((v) => ({ kind: "lit", value: v === "true" }));
var Null_ = () => lex(P.string("null")).map(() => ({ kind: "lit", value: null }));
var BareWord = () => (
  // anything non-space that isn't starting with a control char
  lex(P.regexp(/[^\s\[\]{}:,'"]+/)).map((s) => ({ kind: "lit", value: s }))
);
var Value = () => P.lazy(() => P.alt(InlineNode(), Array_(), String_(), Number_(), Bool_(), Null_(), BareWord()));
var Array_ = () => P.seqMap(tok("["), ValueList(), tok("]"), (_1, items) => ({ kind: "arr", items }));
var ValueList = () => P.sepBy(Value(), lex(P.string(",")));
var InlineNode = () => P.seqMap(
  tok(":"),
  // leading colon
  Ident,
  // name
  MaybeAttrs(),
  // optional {}
  MaybeBody(),
  // optional []
  (_c, name, attrs, body) => ({ kind: "inline", name, attrs, body })
);
var MaybeAttrs = () => P.alt(
  P.seqMap(tok("{"), AttrList(), tok("}"), (_1, a) => a),
  P.of({})
);
var MaybeBody = () => P.alt(
  P.seqMap(tok("["), BodyList(), tok("]"), (_1, items) => items),
  P.of([])
);
var AttrList = () => P.sepBy(AttrPair(), P.alt(wsp, tok(","))).map((kvs) => {
  const out = {};
  for (const [k, v] of kvs) if (k) out[k] = v;
  return out;
});
var AttrPair = () => P.seqMap(Ident, lex(P.string("=")), Value(), (k, _eq, v) => [k, v]);
var BodyItem = () => P.alt(InlineNode(), String_(), BodyChunk());
var BodyList = () => P.sepBy(BodyItem(), wsp);
var BodyChunk = () => (
  // take a run of text that doesn't start a new inline (:) and doesn't close the body (])
  P.regexp(/[^:\]\n][^\]\n]*/).map((s) => ({ kind: "lit", value: s.trim() })).fallback({ kind: "lit", value: "" })
);
function unescapeStr(s) {
  return s.replace(/\\(["'\\nrt])/g, (_m, g1) => {
    if (g1 === "n") return "\n";
    if (g1 === "r") return "\r";
    if (g1 === "t") return "	";
    return g1;
  });
}

// src/mdast-extensions/remark-directive-extension/node-factory.ts
function exprToValue(expr) {
  switch (expr.kind) {
    case "lit":
      return expr.value;
    case "arr":
      return expr.items.map(exprToValue);
    default:
      return inlineToMd(expr);
  }
}
function inlineToMd(e) {
  const name = e.name;
  const props = Object.fromEntries(Object.entries(e.attrs).map(([k, v]) => [k, exprToValue(v)]));
  const bodyChildren = flattenBody(e.body);
  switch (name) {
    case "text": {
      const text5 = String(props.value ?? joinText(bodyChildren));
      return [{ type: "text", value: text5 }];
    }
    case "paragraph": {
      return [{ type: "paragraph", children: bodyChildren.length ? bodyChildren : textToNodes(joinText(e.body)) }];
    }
    case "emphasis": {
      return [{ type: "emphasis", children: bodyChildren.length ? bodyChildren : textToNodes(joinText(e.body)) }];
    }
    case "strong": {
      return [{ type: "strong", children: bodyChildren.length ? bodyChildren : textToNodes(joinText(e.body)) }];
    }
    case "code": {
      const value = String(props.value ?? joinText(e.body));
      const lang = typeof props.lang === "string" ? props.lang : void 0;
      return [{ type: "code", lang, value }];
    }
    case "js": {
      const value = String(props.value ?? joinText(e.body));
      return [{ type: "code", lang: "js", value }];
    }
    case "link": {
      const url = String(props.url ?? props.href ?? "");
      const title = typeof props.title === "string" ? props.title : void 0;
      const children = bodyChildren.length ? bodyChildren : textToNodes(joinText(e.body));
      return [{ type: "link", url, title, children }];
    }
    default: {
      return [{
        type: name,
        ...props,
        children: bodyChildren.length ? bodyChildren : textToNodes(joinText(e.body))
      }];
    }
  }
}
function flattenBody(items) {
  const out = [];
  for (const it of items) {
    if (it.kind === "inline") out.push(...inlineToMd(it));
    else if (it.kind === "lit") out.push(...textToNodes(String(it.value ?? "")));
    else if (it.kind === "arr") out.push(...textToNodes(it.items.map((x) => x.kind === "lit" ? String(x.value ?? "") : "").join(" ")));
  }
  return out;
}
function textToNodes(s) {
  const trimmed = s == null ? "" : String(s);
  return trimmed ? [{ type: "text", value: trimmed }] : [];
}
function joinText(items) {
  return items.map((x) => x.kind === "lit" ? String(x.value ?? "") : "").join("").trim();
}
function buildComponentNode(name, attrs, bodyChildren) {
  const node2 = { type: name, children: bodyChildren };
  for (const [k, v] of Object.entries(attrs)) {
    const val = exprToValue(v);
    if (Array.isArray(val) && val.every(isMdNode)) {
      node2[k] = val;
    } else if (isMdNode(val)) {
      node2[k] = val;
    } else {
      node2[k] = val;
    }
  }
  return node2;
}
function isMdNode(x) {
  return !!x && typeof x === "object" && typeof x.type === "string";
}

// src/mdast-extensions/remark-directive-extension/from-directive.ts
function remarkDirectiveAdapter() {
  return (tree) => {
    visit(tree, (node2, index2, parent2) => {
      if (index2 == null || !parent2) return;
      const isDirective = node2.type === "containerDirective" || node2.type === "leafDirective" || node2.type === "textDirective";
      if (!isDirective) return;
      try {
        const name = String(node2.name || "").trim();
        if (!name) return;
        const raw = node2.attributes || {};
        const attrs = {};
        for (const [k, v] of Object.entries(raw)) {
          if (v === true) {
            attrs[k] = { kind: "lit", value: true };
          } else {
            try {
              attrs[k] = parsePropValue(String(v));
            } catch (err) {
              console.warn(`[obsidian-ast] prop parse failed (${name}.${k}):`, v, err);
              attrs[k] = { kind: "lit", value: String(v) };
            }
          }
        }
        const bodyChildren = Array.isArray(node2.children) ? node2.children : [];
        var comp = buildComponentNode(name, attrs, bodyChildren);
        copyPos(comp, node2);
        parent2.children.splice(index2, 1, comp);
        console.debug("[obsidian-ast] directive -> component:", node2, "=>", comp, "at ", comp.position);
      } catch (err) {
        console.error(
          "[obsidian-ast] directive transform failed; leaving node as-is:",
          err,
          node2
        );
      }
    });
  };
}

// src/mdast-extensions/remark-directive-extension/bundle.ts
var remarkDirective2 = remarkDirective?.default ?? remarkDirective;
var remarkDirectivesExtension = function() {
  try {
    if (typeof remarkDirective2 !== "function") {
      throw new Error("remark-directive is not a function");
    }
    this.use(remarkDirective2);
    this.use(remarkDirectiveAdapter);
  } catch (e) {
    console.error("[obsidian-ast] remarkDirectivesExtension failed:", e);
  }
};

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  enableMdTag: true,
  enableInlineField: true,
  enableCallout: true,
  enableNestedHeadings: true,
  enableDirectives: true
};
var AstSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "AST Tools \u2013 Settings" });
    new import_obsidian.Setting(containerEl).setName("MdTag (#tag)").setDesc("Enable custom mdTag inline syntax.").addToggle(
      (t) => t.setValue(this.plugin.settings.enableMdTag).onChange(async (v) => {
        this.plugin.settings.enableMdTag = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("InlineField ([key:: value], (key:: value), key:: value)").setDesc("Enable InlineField inline syntax.").addToggle(
      (t) => t.setValue(this.plugin.settings.enableInlineField).onChange(async (v) => {
        this.plugin.settings.enableInlineField = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Callouts (> [!type][+|-]? Title)").setDesc("Promote blockquotes starting with [!type] into callout nodes.").addToggle(
      (t) => t.setValue(this.plugin.settings.enableCallout).onChange(async (v) => {
        this.plugin.settings.enableCallout = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Nested Headings (## Heading)").setDesc("Make a hierarchy headings from the text").addToggle(
      (t) => t.setValue(this.plugin.settings.enableNestedHeadings).onChange(async (v) => {
        this.plugin.settings.enableNestedHeadings = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Directives (:::directive ... :::)").setDesc("Enable custom directives as mdast nodes.").addToggle(
      (t) => t.setValue(this.plugin.settings.enableDirectives).onChange(async (v) => {
        this.plugin.settings.enableDirectives = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Clear AST cache").setDesc("Forces reparsing of notes with the current settings.").addButton(
      (b) => b.setButtonText("Clear").onClick(async () => {
        this.plugin.cache?.clear?.();
        new window.Notice("AST cache cleared");
      })
    );
  }
};

// src/unit-select-extention/lang/grammar.ts
var P2 = __toESM(require_parsimmon_umd_min(), 1);
var TAG_NODE = "tag";
var TAG_PROP = "key";
var wsp2 = P2.regexp(/[ \t\r\n]*/m);
var lex2 = (p) => p.skip(wsp2);
var tok2 = (s) => lex2(P2.string(s));
var DQ2 = P2.regexp(/"((?:[^"\\]|\\.)*)"/, 1);
var SQ2 = P2.regexp(/'((?:[^'\\]|\\.)*)'/, 1);
var String_2 = lex2(P2.alt(DQ2, SQ2)).map((v) => ({ kind: "str", value: unescapeStr2(v) }));
var Number_2 = lex2(P2.regexp(/-?(?:0|[1-9]\d*)(?:\.\d+)?/)).map((v) => ({ kind: "num", value: Number(v) }));
var Ident2 = lex2(P2.regexp(/[A-Za-z_][A-Za-z0-9_-]*/)).map((v) => ({ kind: "ident", value: v }));
var Value2 = P2.alt(String_2, Number_2, Ident2);
var Regex_ = lex2(P2.regexp(/\/((?:[^/\\]|\\.)*)\/([a-z]*)/)).map((full) => {
  const m = full.match(/^\/((?:[^/\\]|\\.)*)\/([a-z]*)$/);
  return { kind: "regex", pattern: m[1], flags: m[2] };
});
function unescapeStr2(s) {
  return s.replace(/\\(["'\\nrt])/g, (_m, g1) => {
    if (g1 === "n") return "\n";
    if (g1 === "r") return "\r";
    if (g1 === "t") return "	";
    return g1;
  });
}
var LPAR = tok2("(");
var RPAR = tok2(")");
var LBRK = tok2("[");
var RBRK = tok2("]");
var DOT = tok2(".");
var AMP = tok2("&");
var BAR = tok2("|");
var BANG = tok2("!");
var GG = tok2(">>");
var LL = tok2("<<");
var PP = tok2("++");
var MM = tok2("--");
var GT = tok2(">");
var LT = tok2("<");
var PLUS = tok2("+");
var MIN = tok2("-");
var KW_IN = lex2(P2.string("in"));
var Comp = P2.alt(
  tok2("<="),
  tok2(">="),
  tok2("!="),
  tok2("*i="),
  tok2("^i="),
  tok2("$i="),
  tok2("si="),
  tok2("i="),
  tok2("s="),
  tok2("^="),
  tok2("$="),
  tok2("*="),
  tok2("~="),
  // regex literal on RHS
  tok2("<"),
  tok2(">"),
  tok2("=")
);
var Path = Ident2.chain(
  (first) => DOT.then(Ident2).many().map((rest) => [first.value, ...rest.map((x) => x.value)])
);
var HashTag = lex2(P2.string("#")).then(P2.regexp(/[A-Za-z0-9/_-]+/)).map((val) => ({
  base: TAG_NODE,
  fields: [],
  filters: [wrapCond(oneCmp(TAG_PROP, "=", { kind: "str", value: val }))]
}));
var InlineFieldSugar = P2.seqMap(
  Ident2.skip(lex2(P2.string("::"))),
  Value2,
  (k, v) => ({
    base: "inlineField",
    fields: [],
    filters: [
      wrapCond(oneCmp("key", "=", k)),
      wrapCond(oneCmp("value", "=", v))
    ]
  })
);
var Base = P2.alt(
  P2.seq(lex2(P2.string("@")), lex2(P2.regexp(/\d*/))).map(([_, digits]) => ({ kind: "@", hop: digits ? Number(digits) : 1 })),
  lex2(P2.string("*")).map(() => ({ kind: "*" })),
  lex2(P2.string(":root")).map(() => ({ kind: ":root" })),
  Ident2.map((id) => ({ kind: id.value }))
);
var Fields = DOT.then(Ident2).many().map((xs) => xs.map((i) => i.value));
var CondExprP = P2.lazy(() => CondOrP);
var CondPrimaryP = P2.lazy(
  () => P2.alt(
    BANG.then(CondPrimaryP).map((inner) => ({ kind: "not", inner })),
    LPAR.then(CondExprP).skip(RPAR).map((expr) => ({ kind: "group", expr })),
    CondAtomP
  )
);
var CondAndP = P2.sepBy1(CondPrimaryP, AMP).map((terms) => ({ kind: "and", terms }));
var CondOrP = P2.sepBy1(CondAndP, BAR).map((terms) => ({ kind: "or", terms }));
var QueryHead = P2.alt(
  lex2(P2.string("(")),
  lex2(P2.string('"')),
  lex2(P2.string("'")),
  lex2(P2.string("#")),
  lex2(P2.string("@")),
  lex2(P2.string("*")),
  lex2(P2.string(":root")),
  P2.lookahead(Ident2.skip(lex2(P2.string("::")))),
  // inline-field sugar
  P2.lookahead(Ident2)
);
var CondAtomP = P2.lazy(
  () => P2.alt(
    // subquery: PATH? (>>|>|<<|<|++|+|--|-) Query
    P2.seqMap(
      P2.alt(Path, P2.of(null)),
      P2.alt(GG, GT, LL, LT, PP, PLUS, MM, MIN).map((s) => s),
      P2.lookahead(QueryHead).then(QueryP),
      (path2, op, q) => ({ kind: "subq", path: path2 ?? void 0, op, query: q })
    ),
    // in: KEY_PATH in ( Query )
    P2.seqMap(
      Path,
      KW_IN.then(LPAR).then(QueryP).skip(RPAR),
      (keyPath, query) => ({ kind: "in", keyPath, query })
    ),
    // comparison: KEY OP (VALUE | /regex/)
    P2.seqMap(
      P2.alt(
        P2.string("field.").then(Ident2).map((i) => ({ raw: i.value, isField: true })),
        Ident2.map((i) => ({ raw: i.value, isField: false }))
      ),
      Comp,
      P2.alt(String_2, Number_2, Ident2, Regex_),
      (key, op, v) => {
        return { kind: "cmp", key, op, value: v };
      }
    ),
    // bare string in filter: ["Hello"]  =>  [>> text[value="Hello"]]
    P2.alt(DQ2, SQ2).map((raw) => ({
      kind: "subq",
      path: void 0,
      op: ">>",
      query: makeTextQuery(unescapeStr2(raw))
    }))
  )
);
var FilterBlock = LBRK.then(CondExprP).skip(RBRK);
var SegmentP = P2.alt(
  InlineFieldSugar,
  HashTag,
  P2.seqMap(
    Base,
    Fields,
    FilterBlock.many(),
    (b, fields, filters) => {
      if (b.kind === "@") return { base: "@", atHop: b.hop, fields, filters };
      return { base: b.kind, fields, filters };
    }
  )
);
var QuotedTextPrimary = P2.alt(DQ2, SQ2).map((raw) => ({
  kind: "segment",
  seg: {
    base: "text",
    fields: [],
    filters: [wrapCond(oneCmp("value", "=", { kind: "str", value: unescapeStr2(raw) }))]
  }
}));
var PrimaryP = P2.alt(
  QuotedTextPrimary,
  SegmentP.map((seg) => ({ kind: "segment", seg })),
  LPAR.then(P2.lazy(() => QueryP)).skip(RPAR).map((expr) => ({ kind: "group", expr }))
);
var ChainP = P2.seqMap(
  PrimaryP,
  P2.seqMap(
    P2.alt(GG, GT, LL, LT, PP, PLUS, MM, MIN).map((s) => s),
    PrimaryP,
    (op, next) => ({ op, next })
  ).many(),
  (head, steps) => ({ kind: "chain", head, steps })
);
var IntersectP = P2.sepBy1(ChainP, AMP).map((terms) => ({ kind: "intersect", terms }));
var UnionP = P2.sepBy1(IntersectP, BAR).map((terms) => ({ kind: "union", terms }));
var QueryP = wsp2.then(UnionP).skip(wsp2);
function parseQuery(input) {
  const s = input.trim();
  if (/^(>>|<<|\+\+|--|[<>+\-])/.test(s)) {
    throw new Error(
      "Query cannot start with a combinator. Start with a segment, e.g. 'heading << paragraph' or ':root < heading'. If you meant a placeholder, wrap it in an ast-example block."
    );
  }
  const res = QueryP.parse(input);
  if (res.status) return res.value;
  const { index: index2 } = res;
  const near = input.slice(Math.max(0, index2.offset - 30), index2.offset + 30);
  throw new Error(`Parse error at ${index2.line}:${index2.column} near ${JSON.stringify(near)}`);
}
function oneCmp(keyRaw, op, rhs) {
  const isField = keyRaw.startsWith("field.");
  return {
    kind: "cmp",
    key: { raw: isField ? keyRaw.slice(6) : keyRaw, isField },
    op,
    value: rhs
  };
}
function wrapCond(atom) {
  return { kind: "or", terms: [{ kind: "and", terms: [atom] }] };
}
function makeTextQuery(s) {
  return {
    kind: "union",
    terms: [{
      kind: "intersect",
      terms: [{
        kind: "chain",
        head: {
          kind: "segment",
          seg: {
            base: "text",
            fields: [],
            filters: [wrapCond(oneCmp("value", "=", { kind: "str", value: s }))]
          }
        },
        steps: []
      }]
    }]
  };
}

// node_modules/css-selector-parser/dist/mjs/indexes.js
var emptyMulticharIndex = {};
var emptyRegularIndex = {};
function extendIndex(item, index2) {
  var currentIndex = index2;
  for (var pos = 0; pos < item.length; pos++) {
    var isLast = pos === item.length - 1;
    var char = item.charAt(pos);
    var charIndex = currentIndex[char] || (currentIndex[char] = { chars: {} });
    if (isLast) {
      charIndex.self = item;
    }
    currentIndex = charIndex.chars;
  }
}
function createMulticharIndex(items) {
  if (items.length === 0) {
    return emptyMulticharIndex;
  }
  var index2 = {};
  for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var item = items_1[_i];
    extendIndex(item, index2);
  }
  return index2;
}
function createRegularIndex(items) {
  if (items.length === 0) {
    return emptyRegularIndex;
  }
  var result = {};
  for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
    var item = items_2[_i];
    result[item] = true;
  }
  return result;
}

// node_modules/css-selector-parser/dist/mjs/pseudo-signatures.js
var emptyPseudoSignatures = {};
var defaultPseudoSignature = {
  type: "String",
  optional: true
};
function calculatePseudoSignature(types) {
  var result = {
    type: "NoArgument",
    optional: false
  };
  function setResultType(type2) {
    if (result.type && result.type !== type2 && result.type !== "NoArgument") {
      throw new Error('Conflicting pseudo-class argument type: "'.concat(result.type, '" vs "').concat(type2, '".'));
    }
    result.type = type2;
  }
  for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
    var type = types_1[_i];
    if (type === "NoArgument") {
      result.optional = true;
    }
    if (type === "Formula") {
      setResultType("Formula");
    }
    if (type === "FormulaOfSelector") {
      setResultType("Formula");
      result.ofSelector = true;
    }
    if (type === "String") {
      setResultType("String");
    }
    if (type === "Selector") {
      setResultType("Selector");
    }
  }
  return result;
}
function inverseCategories(obj) {
  var result = {};
  for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
    var category = _a[_i];
    var items = obj[category];
    if (items) {
      for (var _b = 0, _c = items; _b < _c.length; _b++) {
        var item = _c[_b];
        (result[item] || (result[item] = [])).push(category);
      }
    }
  }
  return result;
}
function calculatePseudoSignatures(definitions) {
  var pseudoClassesToArgumentTypes = inverseCategories(definitions);
  var result = {};
  for (var _i = 0, _a = Object.keys(pseudoClassesToArgumentTypes); _i < _a.length; _i++) {
    var pseudoClass = _a[_i];
    var argumentTypes = pseudoClassesToArgumentTypes[pseudoClass];
    if (argumentTypes) {
      result[pseudoClass] = calculatePseudoSignature(argumentTypes);
    }
  }
  return result;
}

// node_modules/css-selector-parser/dist/mjs/syntax-definitions.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var emptyXmlOptions = {};
var defaultXmlOptions = { wildcard: true };
function getXmlOptions(param) {
  if (param) {
    if (typeof param === "boolean") {
      return defaultXmlOptions;
    } else {
      return param;
    }
  } else {
    return emptyXmlOptions;
  }
}
function withMigration(migration, merge) {
  return function(base, extension2) {
    return merge(migration(base), migration(extension2));
  };
}
function withNoNegative(merge) {
  return function(base, extension2) {
    var result = merge(base, extension2);
    if (!result) {
      throw new Error("Syntax definition cannot be null or undefined.");
    }
    return result;
  };
}
function withPositive(positive, merge) {
  return function(base, extension2) {
    if (extension2 === true) {
      return positive;
    }
    return merge(base === true ? positive : base, extension2);
  };
}
function mergeSection(values) {
  return function(base, extension2) {
    if (!extension2 || !base) {
      return extension2;
    }
    if (typeof extension2 !== "object" || extension2 === null) {
      throw new Error("Unexpected syntax definition extension type: ".concat(extension2, "."));
    }
    var result = __assign({}, base);
    for (var _i = 0, _a = Object.entries(extension2); _i < _a.length; _i++) {
      var _b = _a[_i], key = _b[0], value = _b[1];
      if (key === "latest") {
        continue;
      }
      var mergeSchema = values[key];
      result[key] = mergeSchema(base[key], value);
    }
    return result;
  };
}
function replaceValueIfSpecified(base, extension2) {
  if (extension2 !== void 0) {
    return extension2;
  }
  return base;
}
function concatArray(base, extension2) {
  if (!extension2) {
    return base;
  }
  if (!base) {
    return extension2;
  }
  return base.concat(extension2);
}
function mergeDefinitions(base, extension2) {
  if (!extension2) {
    return base;
  }
  if (!base) {
    return extension2;
  }
  var result = __assign({}, base);
  for (var _i = 0, _a = Object.entries(extension2); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    if (!value) {
      delete result[key];
      continue;
    }
    var baseValue = base[key];
    if (!baseValue) {
      result[key] = value;
      continue;
    }
    result[key] = baseValue.concat(value);
  }
  return result;
}
var extendSyntaxDefinition = withNoNegative(mergeSection({
  baseSyntax: replaceValueIfSpecified,
  modules: concatArray,
  tag: withPositive(defaultXmlOptions, mergeSection({
    wildcard: replaceValueIfSpecified
  })),
  ids: replaceValueIfSpecified,
  classNames: replaceValueIfSpecified,
  namespace: withPositive(defaultXmlOptions, mergeSection({
    wildcard: replaceValueIfSpecified
  })),
  combinators: concatArray,
  attributes: mergeSection({
    operators: concatArray,
    caseSensitivityModifiers: concatArray,
    unknownCaseSensitivityModifiers: replaceValueIfSpecified
  }),
  pseudoClasses: mergeSection({
    unknown: replaceValueIfSpecified,
    definitions: mergeDefinitions
  }),
  pseudoElements: mergeSection({
    unknown: replaceValueIfSpecified,
    notation: replaceValueIfSpecified,
    definitions: withMigration(function(definitions) {
      return Array.isArray(definitions) ? { NoArgument: definitions } : definitions;
    }, mergeDefinitions)
  })
}));
var css1SyntaxDefinition = {
  tag: {},
  ids: true,
  classNames: true,
  combinators: [],
  pseudoElements: {
    unknown: "reject",
    notation: "singleColon",
    definitions: ["first-letter", "first-line"]
  },
  pseudoClasses: {
    unknown: "reject",
    definitions: {
      NoArgument: ["link", "visited", "active"]
    }
  }
};
var css2SyntaxDefinition = extendSyntaxDefinition(css1SyntaxDefinition, {
  tag: { wildcard: true },
  combinators: [">", "+"],
  attributes: {
    unknownCaseSensitivityModifiers: "reject",
    operators: ["=", "~=", "|="]
  },
  pseudoElements: {
    definitions: ["before", "after"]
  },
  pseudoClasses: {
    unknown: "reject",
    definitions: {
      NoArgument: ["hover", "focus", "first-child"],
      String: ["lang"]
    }
  }
});
var selectors3SyntaxDefinition = extendSyntaxDefinition(css2SyntaxDefinition, {
  namespace: {
    wildcard: true
  },
  combinators: ["~"],
  attributes: {
    operators: ["^=", "$=", "*="]
  },
  pseudoElements: {
    notation: "both"
  },
  pseudoClasses: {
    definitions: {
      NoArgument: [
        "root",
        "last-child",
        "first-of-type",
        "last-of-type",
        "only-child",
        "only-of-type",
        "empty",
        "target",
        "enabled",
        "disabled",
        "checked",
        "indeterminate"
      ],
      Formula: ["nth-child", "nth-last-child", "nth-of-type", "nth-last-of-type"],
      Selector: ["not"]
    }
  }
});
var selectors4SyntaxDefinition = extendSyntaxDefinition(selectors3SyntaxDefinition, {
  combinators: ["||"],
  attributes: {
    caseSensitivityModifiers: ["i", "I", "s", "S"]
  },
  pseudoClasses: {
    definitions: {
      NoArgument: [
        "any-link",
        "local-link",
        "target-within",
        "scope",
        "current",
        "past",
        "future",
        "focus-within",
        "focus-visible",
        "read-write",
        "read-only",
        "placeholder-shown",
        "default",
        "valid",
        "invalid",
        "in-range",
        "out-of-range",
        "required",
        "optional",
        "blank",
        "user-invalid",
        "playing",
        "paused",
        "autofill",
        "modal",
        "fullscreen",
        "picture-in-picture",
        "defined",
        "loading",
        "popover-open"
      ],
      Formula: ["nth-col", "nth-last-col"],
      String: ["dir"],
      FormulaOfSelector: ["nth-child", "nth-last-child"],
      Selector: ["current", "is", "where", "has", "state"]
    }
  },
  pseudoElements: {
    definitions: {
      NoArgument: ["marker"]
    }
  }
});
var cssModules = {
  "css-position-1": {
    latest: false,
    pseudoClasses: {
      definitions: {
        NoArgument: ["static", "relative", "absolute"]
      }
    }
  },
  "css-position-2": {
    latest: false,
    pseudoClasses: {
      definitions: {
        NoArgument: ["static", "relative", "absolute", "fixed"]
      }
    }
  },
  "css-position-3": {
    latest: false,
    pseudoClasses: {
      definitions: {
        NoArgument: ["sticky", "fixed", "absolute", "relative", "static"]
      }
    }
  },
  "css-position-4": {
    latest: true,
    pseudoClasses: {
      definitions: {
        NoArgument: ["sticky", "fixed", "absolute", "relative", "static", "initial"]
      }
    }
  },
  "css-scoping-1": {
    latest: true,
    pseudoClasses: {
      definitions: {
        NoArgument: ["host", "host-context"],
        Selector: ["host", "host-context"]
      }
    },
    pseudoElements: {
      definitions: {
        Selector: ["slotted"]
      }
    }
  },
  "css-pseudo-4": {
    latest: true,
    pseudoElements: {
      definitions: {
        NoArgument: [
          "marker",
          "selection",
          "target-text",
          "search-text",
          "spelling-error",
          "grammar-error",
          "backdrop",
          "file-selector-button",
          "prefix",
          "postfix",
          "placeholder",
          "details-content"
        ],
        String: ["highlight"]
      }
    }
  },
  "css-shadow-parts-1": {
    latest: true,
    pseudoElements: {
      definitions: {
        String: ["part"]
      }
    }
  }
};
var latestSyntaxDefinition = __assign(__assign({}, selectors4SyntaxDefinition), { modules: Object.entries(cssModules).filter(function(_a) {
  var latest = _a[1].latest;
  return latest;
}).map(function(_a) {
  var name = _a[0];
  return name;
}) });
var progressiveSyntaxDefinition = extendSyntaxDefinition(latestSyntaxDefinition, {
  pseudoElements: {
    unknown: "accept"
  },
  pseudoClasses: {
    unknown: "accept"
  },
  attributes: {
    unknownCaseSensitivityModifiers: "accept"
  }
});
var cssSyntaxDefinitions = {
  css1: css1SyntaxDefinition,
  css2: css2SyntaxDefinition,
  css3: selectors3SyntaxDefinition,
  "selectors-3": selectors3SyntaxDefinition,
  "selectors-4": selectors4SyntaxDefinition,
  latest: latestSyntaxDefinition,
  progressive: progressiveSyntaxDefinition
};
function buildPseudoLocationIndex() {
  var index2 = {
    pseudoClasses: {},
    pseudoElements: {}
  };
  var cssLevels = ["css1", "css2", "css3", "selectors-3", "selectors-4"];
  for (var _i = 0, cssLevels_1 = cssLevels; _i < cssLevels_1.length; _i++) {
    var level = cssLevels_1[_i];
    var syntax = cssSyntaxDefinitions[level];
    if (syntax.pseudoClasses && typeof syntax.pseudoClasses === "object") {
      var definitions = syntax.pseudoClasses.definitions;
      if (definitions) {
        for (var _a = 0, _b = Object.entries(definitions); _a < _b.length; _a++) {
          var _c = _b[_a], names = _c[1];
          for (var _d = 0, names_1 = names; _d < names_1.length; _d++) {
            var name_1 = names_1[_d];
            if (!index2.pseudoClasses[name_1]) {
              index2.pseudoClasses[name_1] = [];
            }
            if (!index2.pseudoClasses[name_1].includes(level)) {
              index2.pseudoClasses[name_1].push(level);
            }
          }
        }
      }
    }
    if (syntax.pseudoElements && typeof syntax.pseudoElements === "object") {
      var definitions = syntax.pseudoElements.definitions;
      if (definitions) {
        if (Array.isArray(definitions)) {
          for (var _e = 0, definitions_1 = definitions; _e < definitions_1.length; _e++) {
            var name_2 = definitions_1[_e];
            if (!index2.pseudoElements[name_2]) {
              index2.pseudoElements[name_2] = [];
            }
            if (!index2.pseudoElements[name_2].includes(level)) {
              index2.pseudoElements[name_2].push(level);
            }
          }
        } else {
          for (var _f = 0, _g = Object.values(definitions); _f < _g.length; _f++) {
            var names = _g[_f];
            for (var _h = 0, names_2 = names; _h < names_2.length; _h++) {
              var name_3 = names_2[_h];
              if (!index2.pseudoElements[name_3]) {
                index2.pseudoElements[name_3] = [];
              }
              if (!index2.pseudoElements[name_3].includes(level)) {
                index2.pseudoElements[name_3].push(level);
              }
            }
          }
        }
      }
    }
  }
  for (var _j = 0, _k = Object.entries(cssModules); _j < _k.length; _j++) {
    var _l = _k[_j], moduleName = _l[0], moduleSyntax = _l[1];
    if (moduleSyntax.pseudoClasses && typeof moduleSyntax.pseudoClasses === "object") {
      var definitions = moduleSyntax.pseudoClasses.definitions;
      if (definitions) {
        for (var _m = 0, _o = Object.values(definitions); _m < _o.length; _m++) {
          var names = _o[_m];
          for (var _p = 0, names_3 = names; _p < names_3.length; _p++) {
            var name_4 = names_3[_p];
            if (!index2.pseudoClasses[name_4]) {
              index2.pseudoClasses[name_4] = [];
            }
            if (!index2.pseudoClasses[name_4].includes(moduleName)) {
              index2.pseudoClasses[name_4].push(moduleName);
            }
          }
        }
      }
    }
    if (moduleSyntax.pseudoElements && typeof moduleSyntax.pseudoElements === "object") {
      var definitions = moduleSyntax.pseudoElements.definitions;
      if (definitions) {
        if (Array.isArray(definitions)) {
          for (var _q = 0, definitions_2 = definitions; _q < definitions_2.length; _q++) {
            var name_5 = definitions_2[_q];
            if (!index2.pseudoElements[name_5]) {
              index2.pseudoElements[name_5] = [];
            }
            if (!index2.pseudoElements[name_5].includes(moduleName)) {
              index2.pseudoElements[name_5].push(moduleName);
            }
          }
        } else {
          for (var _r = 0, _s = Object.values(definitions); _r < _s.length; _r++) {
            var names = _s[_r];
            for (var _t = 0, names_4 = names; _t < names_4.length; _t++) {
              var name_6 = names_4[_t];
              if (!index2.pseudoElements[name_6]) {
                index2.pseudoElements[name_6] = [];
              }
              if (!index2.pseudoElements[name_6].includes(moduleName)) {
                index2.pseudoElements[name_6].push(moduleName);
              }
            }
          }
        }
      }
    }
  }
  return index2;
}
var pseudoLocationIndex = buildPseudoLocationIndex();

// node_modules/css-selector-parser/dist/mjs/utils.js
function isIdentStart(c) {
  return c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c === "-" || c === "_" || c === "\\" || c >= "\xA0";
}
function isIdent(c) {
  return c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c >= "0" && c <= "9" || c === "-" || c === "_" || c >= "\xA0";
}
function isHex(c) {
  return c >= "a" && c <= "f" || c >= "A" && c <= "F" || c >= "0" && c <= "9";
}
var whitespaceChars = {
  " ": true,
  "	": true,
  "\n": true,
  "\r": true,
  "\f": true
};
var quoteChars = {
  '"': true,
  "'": true
};
var digitsChars = {
  0: true,
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true
};
var maxHexLength = 6;

// node_modules/css-selector-parser/dist/mjs/parser.js
var errorPrefix = "css-selector-parser parse error: ";
function createParser(options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.syntax, syntax = _a === void 0 ? "latest" : _a, substitutes = options.substitutes, _b = options.strict, strict = _b === void 0 ? true : _b, modules = options.modules;
  var syntaxDefinition = typeof syntax === "object" ? syntax : cssSyntaxDefinitions[syntax];
  if (syntaxDefinition.baseSyntax) {
    syntaxDefinition = extendSyntaxDefinition(cssSyntaxDefinitions[syntaxDefinition.baseSyntax], syntaxDefinition);
  }
  if (syntaxDefinition.modules && syntaxDefinition.modules.length > 0) {
    for (var _i = 0, _c = syntaxDefinition.modules; _i < _c.length; _i++) {
      var module_1 = _c[_i];
      var moduleSyntax = cssModules[module_1];
      if (moduleSyntax) {
        syntaxDefinition = extendSyntaxDefinition(moduleSyntax, syntaxDefinition);
      }
    }
  }
  if (modules && modules.length > 0) {
    for (var _d = 0, modules_1 = modules; _d < modules_1.length; _d++) {
      var module_2 = modules_1[_d];
      var moduleSyntax = cssModules[module_2];
      if (moduleSyntax) {
        syntaxDefinition = extendSyntaxDefinition(moduleSyntax, syntaxDefinition);
      }
    }
  }
  var _e = syntaxDefinition.tag ? [true, Boolean(getXmlOptions(syntaxDefinition.tag).wildcard)] : [false, false], tagNameEnabled = _e[0], tagNameWildcardEnabled = _e[1];
  var idEnabled = Boolean(syntaxDefinition.ids);
  var classNamesEnabled = Boolean(syntaxDefinition.classNames);
  var namespaceEnabled = Boolean(syntaxDefinition.namespace);
  var namespaceWildcardEnabled = syntaxDefinition.namespace && (syntaxDefinition.namespace === true || syntaxDefinition.namespace.wildcard === true);
  if (namespaceEnabled && !tagNameEnabled) {
    throw new Error("".concat(errorPrefix, "Namespaces cannot be enabled while tags are disabled."));
  }
  var substitutesEnabled = Boolean(substitutes);
  var combinatorsIndex = syntaxDefinition.combinators ? createMulticharIndex(syntaxDefinition.combinators) : emptyMulticharIndex;
  var _f = syntaxDefinition.attributes ? [
    true,
    syntaxDefinition.attributes.operators ? createMulticharIndex(syntaxDefinition.attributes.operators) : emptyMulticharIndex,
    syntaxDefinition.attributes.caseSensitivityModifiers ? createRegularIndex(syntaxDefinition.attributes.caseSensitivityModifiers) : emptyRegularIndex,
    syntaxDefinition.attributes.unknownCaseSensitivityModifiers === "accept"
  ] : [false, emptyMulticharIndex, emptyRegularIndex, false], attributesEnabled = _f[0], attributesOperatorsIndex = _f[1], attributesCaseSensitivityModifiers = _f[2], attributesAcceptUnknownCaseSensitivityModifiers = _f[3];
  var attributesCaseSensitivityModifiersEnabled = attributesAcceptUnknownCaseSensitivityModifiers || Object.keys(attributesCaseSensitivityModifiers).length > 0;
  var _g = syntaxDefinition.pseudoClasses ? [
    true,
    syntaxDefinition.pseudoClasses.definitions ? calculatePseudoSignatures(syntaxDefinition.pseudoClasses.definitions) : emptyPseudoSignatures,
    syntaxDefinition.pseudoClasses.unknown === "accept"
  ] : [false, emptyPseudoSignatures, false], pseudoClassesEnabled = _g[0], pseudoClassesDefinitions = _g[1], pseudoClassesAcceptUnknown = _g[2];
  var _h = syntaxDefinition.pseudoElements ? [
    true,
    syntaxDefinition.pseudoElements.notation === "singleColon" || syntaxDefinition.pseudoElements.notation === "both",
    !syntaxDefinition.pseudoElements.notation || syntaxDefinition.pseudoElements.notation === "doubleColon" || syntaxDefinition.pseudoElements.notation === "both",
    syntaxDefinition.pseudoElements.definitions ? calculatePseudoSignatures(Array.isArray(syntaxDefinition.pseudoElements.definitions) ? { NoArgument: syntaxDefinition.pseudoElements.definitions } : syntaxDefinition.pseudoElements.definitions) : emptyPseudoSignatures,
    syntaxDefinition.pseudoElements.unknown === "accept"
  ] : [false, false, false, emptyPseudoSignatures, false], pseudoElementsEnabled = _h[0], pseudoElementsSingleColonNotationEnabled = _h[1], pseudoElementsDoubleColonNotationEnabled = _h[2], pseudoElementsDefinitions = _h[3], pseudoElementsAcceptUnknown = _h[4];
  var str = "";
  var l = str.length;
  var pos = 0;
  var chr = "";
  var is3 = function(comparison) {
    return chr === comparison;
  };
  var isTagStart = function() {
    return is3("*") || isIdentStart(chr);
  };
  var rewind = function(newPos) {
    pos = newPos;
    chr = str.charAt(pos);
  };
  var next = function() {
    pos++;
    chr = str.charAt(pos);
  };
  var readAndNext = function() {
    var current = chr;
    pos++;
    chr = str.charAt(pos);
    return current;
  };
  function fail(errorMessage) {
    var position2 = Math.min(l - 1, pos);
    var error = new Error("".concat(errorPrefix).concat(errorMessage, " Pos: ").concat(position2, "."));
    error.position = position2;
    error.name = "ParserError";
    throw error;
  }
  function assert(condition, errorMessage) {
    if (!condition) {
      return fail(errorMessage);
    }
  }
  var assertNonEof = function() {
    assert(pos < l, "Unexpected end of input.");
  };
  var isEof = function() {
    return pos >= l;
  };
  var pass = function(character) {
    assert(pos < l, 'Expected "'.concat(character, '" but end of input reached.'));
    assert(chr === character, 'Expected "'.concat(character, '" but "').concat(chr, '" found.'));
    pos++;
    chr = str.charAt(pos);
  };
  function matchMulticharIndex(index2) {
    var match = matchMulticharIndexPos(index2, pos);
    if (match) {
      pos += match.length;
      chr = str.charAt(pos);
      return match;
    }
  }
  function matchMulticharIndexPos(index2, subPos) {
    var char = str.charAt(subPos);
    var charIndex = index2[char];
    if (charIndex) {
      var subMatch = matchMulticharIndexPos(charIndex.chars, subPos + 1);
      if (subMatch) {
        return subMatch;
      }
      if (charIndex.self) {
        return charIndex.self;
      }
    }
  }
  function parseHex() {
    var hex = readAndNext();
    var count2 = 1;
    while (isHex(chr) && count2 < maxHexLength) {
      hex += readAndNext();
      count2++;
    }
    skipSingleWhitespace();
    return String.fromCharCode(parseInt(hex, 16));
  }
  function parseString(quote) {
    var result = "";
    pass(quote);
    while (pos < l) {
      if (is3(quote)) {
        next();
        return result;
      } else if (is3("\\")) {
        next();
        if (is3(quote)) {
          result += quote;
          next();
        } else if (chr === "\n" || chr === "\f") {
          next();
        } else if (chr === "\r") {
          next();
          if (is3("\n")) {
            next();
          }
        } else if (isHex(chr)) {
          result += parseHex();
        } else {
          result += chr;
          next();
        }
      } else {
        result += chr;
        next();
      }
    }
    return result;
  }
  function parseIdentifier() {
    if (!isIdentStart(chr)) {
      return null;
    }
    var result = "";
    while (is3("-")) {
      result += chr;
      next();
    }
    if (result === "-" && !isIdent(chr) && !is3("\\")) {
      fail("Identifiers cannot consist of a single hyphen.");
    }
    if (strict && result.length >= 2) {
      fail("Identifiers cannot start with two hyphens with strict mode on.");
    }
    if (digitsChars[chr]) {
      fail("Identifiers cannot start with hyphens followed by digits.");
    }
    while (pos < l) {
      if (isIdent(chr)) {
        result += readAndNext();
      } else if (is3("\\")) {
        next();
        assertNonEof();
        if (isHex(chr)) {
          result += parseHex();
        } else {
          result += readAndNext();
        }
      } else {
        break;
      }
    }
    return result;
  }
  function parsePseudoClassString() {
    var result = "";
    while (pos < l) {
      if (is3(")")) {
        break;
      } else if (is3("\\")) {
        next();
        if (isEof() && !strict) {
          return (result + "\\").trim();
        }
        assertNonEof();
        if (isHex(chr)) {
          result += parseHex();
        } else {
          result += readAndNext();
        }
      } else {
        result += readAndNext();
      }
    }
    return result.trim();
  }
  function skipSingleWhitespace() {
    if (chr === " " || chr === "	" || chr === "\f" || chr === "\n") {
      next();
      return;
    }
    if (chr === "\r") {
      next();
    }
    if (chr === "\n") {
      next();
    }
  }
  function skipWhitespace() {
    while (whitespaceChars[chr]) {
      next();
    }
  }
  function parseSelector(relative) {
    if (relative === void 0) {
      relative = false;
    }
    skipWhitespace();
    var rules = [parseRule(relative)];
    while (is3(",")) {
      next();
      skipWhitespace();
      rules.push(parseRule(relative));
    }
    return {
      type: "Selector",
      rules
    };
  }
  function parseAttribute() {
    pass("[");
    skipWhitespace();
    var attr;
    if (is3("|")) {
      assert(namespaceEnabled, "Namespaces are not enabled.");
      next();
      var name_1 = parseIdentifier();
      assert(name_1, "Expected attribute name.");
      attr = {
        type: "Attribute",
        name: name_1,
        namespace: { type: "NoNamespace" }
      };
    } else if (is3("*")) {
      assert(namespaceEnabled, "Namespaces are not enabled.");
      assert(namespaceWildcardEnabled, "Wildcard namespace is not enabled.");
      next();
      pass("|");
      var name_2 = parseIdentifier();
      assert(name_2, "Expected attribute name.");
      attr = {
        type: "Attribute",
        name: name_2,
        namespace: { type: "WildcardNamespace" }
      };
    } else {
      var identifier = parseIdentifier();
      assert(identifier, "Expected attribute name.");
      attr = {
        type: "Attribute",
        name: identifier
      };
      if (is3("|")) {
        var savedPos = pos;
        next();
        if (isIdentStart(chr)) {
          assert(namespaceEnabled, "Namespaces are not enabled.");
          var name_3 = parseIdentifier();
          assert(name_3, "Expected attribute name.");
          attr = {
            type: "Attribute",
            name: name_3,
            namespace: { type: "NamespaceName", name: identifier }
          };
        } else {
          rewind(savedPos);
        }
      }
    }
    assert(attr.name, "Expected attribute name.");
    skipWhitespace();
    if (isEof() && !strict) {
      return attr;
    }
    if (is3("]")) {
      next();
    } else {
      attr.operator = matchMulticharIndex(attributesOperatorsIndex);
      assert(attr.operator, "Expected a valid attribute selector operator.");
      skipWhitespace();
      assertNonEof();
      if (quoteChars[chr]) {
        attr.value = {
          type: "String",
          value: parseString(chr)
        };
      } else if (substitutesEnabled && is3("$")) {
        next();
        var name_4 = parseIdentifier();
        assert(name_4, "Expected substitute name.");
        attr.value = {
          type: "Substitution",
          name: name_4
        };
      } else {
        var value = parseIdentifier();
        assert(value, "Expected attribute value.");
        attr.value = {
          type: "String",
          value
        };
      }
      skipWhitespace();
      if (isEof() && !strict) {
        return attr;
      }
      if (!is3("]")) {
        var caseSensitivityModifier = parseIdentifier();
        assert(caseSensitivityModifier, "Expected end of attribute selector.");
        attr.caseSensitivityModifier = caseSensitivityModifier;
        assert(attributesCaseSensitivityModifiersEnabled, "Attribute case sensitivity modifiers are not enabled.");
        assert(attributesAcceptUnknownCaseSensitivityModifiers || attributesCaseSensitivityModifiers[attr.caseSensitivityModifier], "Unknown attribute case sensitivity modifier.");
        skipWhitespace();
        if (isEof() && !strict) {
          return attr;
        }
      }
      pass("]");
    }
    return attr;
  }
  function parseNumber() {
    var result = "";
    while (digitsChars[chr]) {
      result += readAndNext();
    }
    assert(result !== "", "Formula parse error.");
    return parseInt(result);
  }
  var isNumberStart = function() {
    return is3("-") || is3("+") || digitsChars[chr];
  };
  function parseFormula() {
    if (is3("e") || is3("o")) {
      var ident = parseIdentifier();
      if (ident === "even") {
        skipWhitespace();
        return [2, 0];
      }
      if (ident === "odd") {
        skipWhitespace();
        return [2, 1];
      }
    }
    var firstNumber = null;
    var firstNumberMultiplier = 1;
    if (is3("-")) {
      next();
      firstNumberMultiplier = -1;
    }
    if (isNumberStart()) {
      if (is3("+")) {
        next();
      }
      firstNumber = parseNumber();
      if (!is3("\\") && !is3("n")) {
        return [0, firstNumber * firstNumberMultiplier];
      }
    }
    if (firstNumber === null) {
      firstNumber = 1;
    }
    firstNumber *= firstNumberMultiplier;
    var identifier;
    if (is3("\\")) {
      next();
      if (isHex(chr)) {
        identifier = parseHex();
      } else {
        identifier = readAndNext();
      }
    } else {
      identifier = readAndNext();
    }
    assert(identifier === "n", 'Formula parse error: expected "n".');
    skipWhitespace();
    if (is3("+") || is3("-")) {
      var sign = is3("+") ? 1 : -1;
      next();
      skipWhitespace();
      return [firstNumber, sign * parseNumber()];
    } else {
      return [firstNumber, 0];
    }
  }
  function parsePseudoArgument(pseudoName, type, signature) {
    var argument;
    if (is3("(")) {
      next();
      skipWhitespace();
      if (substitutesEnabled && is3("$")) {
        next();
        var name_5 = parseIdentifier();
        assert(name_5, "Expected substitute name.");
        argument = {
          type: "Substitution",
          name: name_5
        };
      } else if (signature.type === "String") {
        argument = {
          type: "String",
          value: parsePseudoClassString()
        };
        assert(argument.value, "Expected ".concat(type, " argument value."));
      } else if (signature.type === "Selector") {
        argument = parseSelector(true);
      } else if (signature.type === "Formula") {
        var _a2 = parseFormula(), a = _a2[0], b = _a2[1];
        argument = {
          type: "Formula",
          a,
          b
        };
        if (signature.ofSelector) {
          skipWhitespace();
          if (is3("o") || is3("\\")) {
            var ident = parseIdentifier();
            assert(ident === "of", "Formula of selector parse error.");
            skipWhitespace();
            argument = {
              type: "FormulaOfSelector",
              a,
              b,
              selector: parseRule()
            };
          }
        }
      } else {
        return fail("Invalid ".concat(type, " signature."));
      }
      skipWhitespace();
      if (isEof() && !strict) {
        return argument;
      }
      pass(")");
    } else {
      assert(signature.optional, "Argument is required for ".concat(type, ' "').concat(pseudoName, '".'));
    }
    return argument;
  }
  function parseTagName() {
    if (is3("*")) {
      assert(tagNameWildcardEnabled, "Wildcard tag name is not enabled.");
      next();
      return { type: "WildcardTag" };
    } else if (isIdentStart(chr)) {
      assert(tagNameEnabled, "Tag names are not enabled.");
      var name_6 = parseIdentifier();
      assert(name_6, "Expected tag name.");
      return {
        type: "TagName",
        name: name_6
      };
    } else {
      return fail("Expected tag name.");
    }
  }
  function parseTagNameWithNamespace() {
    if (is3("*")) {
      var savedPos = pos;
      next();
      if (!is3("|")) {
        rewind(savedPos);
        return parseTagName();
      }
      next();
      if (!isTagStart()) {
        rewind(savedPos);
        return parseTagName();
      }
      assert(namespaceEnabled, "Namespaces are not enabled.");
      assert(namespaceWildcardEnabled, "Wildcard namespace is not enabled.");
      var tagName = parseTagName();
      tagName.namespace = { type: "WildcardNamespace" };
      return tagName;
    } else if (is3("|")) {
      assert(namespaceEnabled, "Namespaces are not enabled.");
      next();
      var tagName = parseTagName();
      tagName.namespace = { type: "NoNamespace" };
      return tagName;
    } else if (isIdentStart(chr)) {
      var identifier = parseIdentifier();
      assert(identifier, "Expected tag name.");
      if (!is3("|")) {
        assert(tagNameEnabled, "Tag names are not enabled.");
        return {
          type: "TagName",
          name: identifier
        };
      }
      var savedPos = pos;
      next();
      if (!isTagStart()) {
        rewind(savedPos);
        return {
          type: "TagName",
          name: identifier
        };
      }
      assert(namespaceEnabled, "Namespaces are not enabled.");
      var tagName = parseTagName();
      tagName.namespace = { type: "NamespaceName", name: identifier };
      return tagName;
    } else {
      return fail("Expected tag name.");
    }
  }
  function parseRule(relative) {
    var _a2, _b2;
    if (relative === void 0) {
      relative = false;
    }
    var rule = { type: "Rule", items: [] };
    if (relative) {
      var combinator = matchMulticharIndex(combinatorsIndex);
      if (combinator) {
        rule.combinator = combinator;
        skipWhitespace();
      }
    }
    while (pos < l) {
      if (isTagStart()) {
        assert(rule.items.length === 0, "Unexpected tag/namespace start.");
        rule.items.push(parseTagNameWithNamespace());
      } else if (is3("|")) {
        var savedPos = pos;
        next();
        if (isTagStart()) {
          assert(rule.items.length === 0, "Unexpected tag/namespace start.");
          rewind(savedPos);
          rule.items.push(parseTagNameWithNamespace());
        } else {
          rewind(savedPos);
          break;
        }
      } else if (is3(".")) {
        assert(classNamesEnabled, "Class names are not enabled.");
        next();
        var className = parseIdentifier();
        assert(className, "Expected class name.");
        rule.items.push({ type: "ClassName", name: className });
      } else if (is3("#")) {
        assert(idEnabled, "IDs are not enabled.");
        next();
        var idName = parseIdentifier();
        assert(idName, "Expected ID name.");
        rule.items.push({ type: "Id", name: idName });
      } else if (is3("[")) {
        assert(attributesEnabled, "Attributes are not enabled.");
        rule.items.push(parseAttribute());
      } else if (is3(":")) {
        var isDoubleColon = false;
        var isPseudoElement = false;
        next();
        if (is3(":")) {
          assert(pseudoElementsEnabled, "Pseudo elements are not enabled.");
          assert(pseudoElementsDoubleColonNotationEnabled, "Pseudo elements double colon notation is not enabled.");
          isDoubleColon = true;
          next();
        }
        var pseudoName = parseIdentifier();
        assert(isDoubleColon || pseudoName, "Expected pseudo-class name.");
        assert(!isDoubleColon || pseudoName, "Expected pseudo-element name.");
        assert(pseudoName, "Expected pseudo-class name.");
        if (!isDoubleColon || pseudoElementsAcceptUnknown || Object.prototype.hasOwnProperty.call(pseudoElementsDefinitions, pseudoName)) {
        } else {
          var locations = pseudoLocationIndex.pseudoElements[pseudoName];
          var errorMessage = 'Unknown pseudo-element "'.concat(pseudoName, '"');
          if (locations && locations.length > 0) {
            errorMessage += ". It is defined in: ".concat(locations.join(", "));
          }
          fail(errorMessage + ".");
        }
        isPseudoElement = pseudoElementsEnabled && (isDoubleColon || !isDoubleColon && pseudoElementsSingleColonNotationEnabled && Object.prototype.hasOwnProperty.call(pseudoElementsDefinitions, pseudoName));
        if (isPseudoElement) {
          var signature = (_a2 = pseudoElementsDefinitions[pseudoName]) !== null && _a2 !== void 0 ? _a2 : pseudoElementsAcceptUnknown && defaultPseudoSignature;
          var pseudoElement = {
            type: "PseudoElement",
            name: pseudoName
          };
          var argument = parsePseudoArgument(pseudoName, "pseudo-element", signature);
          if (argument) {
            assert(argument.type !== "Formula" && argument.type !== "FormulaOfSelector", "Pseudo-elements cannot have formula argument.");
            pseudoElement.argument = argument;
          }
          rule.items.push(pseudoElement);
        } else {
          assert(pseudoClassesEnabled, "Pseudo-classes are not enabled.");
          var signature = (_b2 = pseudoClassesDefinitions[pseudoName]) !== null && _b2 !== void 0 ? _b2 : pseudoClassesAcceptUnknown && defaultPseudoSignature;
          if (signature) {
          } else {
            var locations = pseudoLocationIndex.pseudoClasses[pseudoName];
            var errorMessage = 'Unknown pseudo-class: "'.concat(pseudoName, '"');
            if (locations && locations.length > 0) {
              errorMessage += ". It is defined in: ".concat(locations.join(", "));
            }
            fail(errorMessage + ".");
          }
          var argument = parsePseudoArgument(pseudoName, "pseudo-class", signature);
          var pseudoClass = {
            type: "PseudoClass",
            name: pseudoName
          };
          if (argument) {
            pseudoClass.argument = argument;
          }
          rule.items.push(pseudoClass);
        }
      } else {
        break;
      }
    }
    if (rule.items.length === 0) {
      if (isEof()) {
        return fail("Expected rule but end of input reached.");
      } else {
        return fail('Expected rule but "'.concat(chr, '" found.'));
      }
    }
    skipWhitespace();
    if (!isEof() && !is3(",") && !is3(")")) {
      var combinator = matchMulticharIndex(combinatorsIndex);
      skipWhitespace();
      rule.nestedRule = parseRule();
      rule.nestedRule.combinator = combinator;
    }
    return rule;
  }
  return function(input) {
    if (typeof input !== "string") {
      throw new Error("".concat(errorPrefix, "Expected string input."));
    }
    str = input;
    l = str.length;
    pos = 0;
    chr = str.charAt(0);
    return parseSelector();
  };
}

// node_modules/css-selector-parser/dist/mjs/ast.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
function astMethods(type) {
  return function(generatorName, checkerName) {
    var _a;
    return _a = {}, _a[generatorName] = function(props) {
      return __assign2({ type }, props);
    }, _a[checkerName] = function(entity) {
      return typeof entity === "object" && entity !== null && entity.type === type;
    }, _a;
  };
}
var ast = __assign2(__assign2(__assign2(__assign2(__assign2(__assign2(__assign2(__assign2(__assign2(__assign2(__assign2(__assign2(__assign2(__assign2(__assign2(__assign2({}, astMethods("Selector")("selector", "isSelector")), astMethods("Rule")("rule", "isRule")), astMethods("TagName")("tagName", "isTagName")), astMethods("Id")("id", "isId")), astMethods("ClassName")("className", "isClassName")), astMethods("WildcardTag")("wildcardTag", "isWildcardTag")), astMethods("NamespaceName")("namespaceName", "isNamespaceName")), astMethods("WildcardNamespace")("wildcardNamespace", "isWildcardNamespace")), astMethods("NoNamespace")("noNamespace", "isNoNamespace")), astMethods("Attribute")("attribute", "isAttribute")), astMethods("PseudoClass")("pseudoClass", "isPseudoClass")), astMethods("PseudoElement")("pseudoElement", "isPseudoElement")), astMethods("String")("string", "isString")), astMethods("Formula")("formula", "isFormula")), astMethods("FormulaOfSelector")("formulaOfSelector", "isFormulaOfSelector")), astMethods("Substitution")("substitution", "isSubstitution"));

// node_modules/unist-util-select/lib/parse.js
var cssSelectorParse = createParser({ syntax: "selectors-4" });
function parse2(selector) {
  if (typeof selector !== "string") {
    throw new TypeError("Expected `string` as selector, not `" + selector + "`");
  }
  return cssSelectorParse(selector);
}

// node_modules/unist-util-select/lib/util.js
function indexable(value) {
  if (!value || typeof value !== "object") {
    unreachable("Expected object");
  }
}
function parent(node2) {
  indexable(node2);
  return Array.isArray(node2.children);
}

// node_modules/unist-util-select/lib/attribute.js
function attribute(query, node2) {
  indexable(node2);
  const value = node2[query.name];
  if (!query.value) {
    return value !== null && value !== void 0;
  }
  ok(query.value.type === "String", "expected plain string");
  let key = query.value.value;
  let normal = value === null || value === void 0 ? void 0 : String(value);
  if (query.caseSensitivityModifier === "i") {
    key = key.toLowerCase();
    if (normal) {
      normal = normal.toLowerCase();
    }
  }
  if (value !== void 0) {
    switch (query.operator) {
      // Exact.
      case "=": {
        return typeof normal === "string" && key === normal;
      }
      // Ends.
      case "$=": {
        return typeof value === "string" && value.slice(-key.length) === key;
      }
      // Contains.
      case "*=": {
        return typeof value === "string" && value.includes(key);
      }
      // Begins.
      case "^=": {
        return typeof value === "string" && key === value.slice(0, key.length);
      }
      // Space-separated list.
      case "~=": {
        return Array.isArray(value) && value.includes(key) || normal === key;
      }
    }
  }
  return false;
}

// node_modules/nth-check/lib/esm/parse.js
var whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]);
var ZERO = "0".charCodeAt(0);
var NINE = "9".charCodeAt(0);
function parse3(formula) {
  formula = formula.trim().toLowerCase();
  if (formula === "even") {
    return [2, 0];
  } else if (formula === "odd") {
    return [2, 1];
  }
  let idx = 0;
  let a = 0;
  let sign = readSign();
  let number = readNumber();
  if (idx < formula.length && formula.charAt(idx) === "n") {
    idx++;
    a = sign * (number !== null && number !== void 0 ? number : 1);
    skipWhitespace();
    if (idx < formula.length) {
      sign = readSign();
      skipWhitespace();
      number = readNumber();
    } else {
      sign = number = 0;
    }
  }
  if (number === null || idx < formula.length) {
    throw new Error(`n-th rule couldn't be parsed ('${formula}')`);
  }
  return [a, sign * number];
  function readSign() {
    if (formula.charAt(idx) === "-") {
      idx++;
      return -1;
    }
    if (formula.charAt(idx) === "+") {
      idx++;
    }
    return 1;
  }
  function readNumber() {
    const start = idx;
    let value = 0;
    while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
      value = value * 10 + (formula.charCodeAt(idx) - ZERO);
      idx++;
    }
    return idx === start ? null : value;
  }
  function skipWhitespace() {
    while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
      idx++;
    }
  }
}

// node_modules/nth-check/lib/esm/compile.js
var import_boolbase = __toESM(require_boolbase(), 1);
function compile(parsed) {
  const a = parsed[0];
  const b = parsed[1] - 1;
  if (b < 0 && a <= 0)
    return import_boolbase.default.falseFunc;
  if (a === -1)
    return (index2) => index2 <= b;
  if (a === 0)
    return (index2) => index2 === b;
  if (a === 1)
    return b < 0 ? import_boolbase.default.trueFunc : (index2) => index2 >= b;
  const absA = Math.abs(a);
  const bMod = (b % absA + absA) % absA;
  return a > 1 ? (index2) => index2 >= b && index2 % absA === bMod : (index2) => index2 <= b && index2 % absA === bMod;
}

// node_modules/nth-check/lib/esm/index.js
function nthCheck(formula) {
  return compile(parse3(formula));
}

// node_modules/unist-util-select/lib/pseudo.js
var nthCheck2 = nthCheck.default || nthCheck;
var pseudo = zwitch("name", {
  // @ts-expect-error: always known.
  unknown: unknownPseudo,
  invalid: invalidPseudo,
  handlers: {
    is: is2,
    blank: empty2,
    empty: empty2,
    "first-child": firstChild,
    "first-of-type": firstOfType,
    has,
    "last-child": lastChild,
    "last-of-type": lastOfType,
    not,
    "nth-child": nthChild,
    "nth-last-child": nthLastChild,
    "nth-of-type": nthOfType,
    "nth-last-of-type": nthLastOfType,
    "only-child": onlyChild,
    "only-of-type": onlyOfType,
    root: root2,
    scope
  }
});
function empty2(_1, node2) {
  return parent(node2) ? node2.children.length === 0 : !("value" in node2);
}
function firstChild(query, _1, _2, _3, state) {
  assertDeep(state, query);
  return state.nodeIndex === 0;
}
function firstOfType(query, _1, _2, _3, state) {
  assertDeep(state, query);
  return state.typeIndex === 0;
}
function has(query, node2, _1, _2, state) {
  const argument = query.argument;
  if (!argument || argument.type !== "Selector") {
    unreachable("`:has` has selectors");
  }
  const fragment = { type: "root", children: parent(node2) ? node2.children : [] };
  const childState = {
    ...state,
    // Not found yet.
    found: false,
    // Do walk deep.
    shallow: false,
    // One result is enough.
    one: true,
    scopeNodes: [node2],
    results: [],
    rootQuery: argument
  };
  walk(childState, fragment);
  return childState.results.length > 0;
}
function lastChild(query, _1, _2, _3, state) {
  assertDeep(state, query);
  return typeof state.nodeCount === "number" && state.nodeIndex === state.nodeCount - 1;
}
function lastOfType(query, _1, _2, _3, state) {
  assertDeep(state, query);
  return typeof state.typeCount === "number" && state.typeIndex === state.typeCount - 1;
}
function is2(query, node2, _1, _2, state) {
  const argument = query.argument;
  if (!argument || argument.type !== "Selector") {
    unreachable("`:is` has selectors");
  }
  const childState = {
    ...state,
    // Not found yet.
    found: false,
    // Do walk deep.
    shallow: false,
    // One result is enough.
    one: true,
    scopeNodes: [node2],
    results: [],
    rootQuery: argument
  };
  walk(childState, node2);
  return childState.results[0] === node2;
}
function not(query, node2, index2, parent2, state) {
  return !is2(query, node2, index2, parent2, state);
}
function nthChild(query, _1, _2, _3, state) {
  const fn = getCachedNthCheck(query);
  assertDeep(state, query);
  return typeof state.nodeIndex === "number" && fn(state.nodeIndex);
}
function nthLastChild(query, _1, _2, _3, state) {
  const fn = getCachedNthCheck(query);
  assertDeep(state, query);
  return typeof state.nodeCount === "number" && typeof state.nodeIndex === "number" && fn(state.nodeCount - state.nodeIndex - 1);
}
function nthLastOfType(query, _1, _2, _3, state) {
  const fn = getCachedNthCheck(query);
  assertDeep(state, query);
  return typeof state.typeIndex === "number" && typeof state.typeCount === "number" && fn(state.typeCount - 1 - state.typeIndex);
}
function nthOfType(query, _1, _2, _3, state) {
  const fn = getCachedNthCheck(query);
  assertDeep(state, query);
  return typeof state.typeIndex === "number" && fn(state.typeIndex);
}
function onlyChild(query, _1, _2, _3, state) {
  assertDeep(state, query);
  return state.nodeCount === 1;
}
function onlyOfType(query, _1, _2, _3, state) {
  assertDeep(state, query);
  return state.typeCount === 1;
}
function root2(_1, node2, _2, parent2) {
  return node2 && !parent2;
}
function scope(_1, node2, _2, _3, state) {
  return node2 && state.scopeNodes.includes(node2);
}
function invalidPseudo() {
  throw new Error("Invalid pseudo-selector");
}
function unknownPseudo(query) {
  throw new Error("Unknown pseudo-selector `" + query.name + "`");
}
function assertDeep(state, query) {
  if (state.shallow) {
    throw new Error("Cannot use `:" + query.name + "` without parent");
  }
}
function getCachedNthCheck(query) {
  let fn = query._cachedFn;
  if (!fn) {
    const value = query.argument;
    ok(value, "expected `argument`");
    if (value.type !== "Formula") {
      throw new Error(
        "Expected `nth` formula, such as `even` or `2n+1` (`of` is not yet supported)"
      );
    }
    fn = nthCheck2(value.a + "n+" + value.b);
    query._cachedFn = fn;
  }
  return fn;
}

// node_modules/unist-util-select/lib/test.js
function test(query, node2, index2, parent2, state) {
  for (const item of query.items) {
    if (item.type === "Attribute") {
      if (!attribute(item, node2)) return false;
    } else if (item.type === "Id") {
      throw new Error("Invalid selector: id");
    } else if (item.type === "ClassName") {
      throw new Error("Invalid selector: class");
    } else if (item.type === "PseudoClass") {
      if (!pseudo(item, node2, index2, parent2, state)) return false;
    } else if (item.type === "PseudoElement") {
      throw new Error("Invalid selector: `::" + item.name + "`");
    } else if (item.type === "TagName") {
      if (item.name !== node2.type) return false;
    } else {
    }
  }
  return true;
}

// node_modules/unist-util-select/lib/walk.js
var empty3 = [];
function walk(state, tree) {
  if (tree) {
    one2(state, [], tree, void 0, void 0, tree);
  }
}
function one2(state, currentRules, node2, index2, parentNode, tree) {
  let nestResult = {
    directChild: void 0,
    descendant: void 0,
    adjacentSibling: void 0,
    generalSibling: void 0
  };
  let rootRules = state.rootQuery.rules;
  if (parentNode && parentNode !== tree) {
    rootRules = state.rootQuery.rules.filter(
      (d) => d.combinator === void 0 || d.combinator === ">" && parentNode === tree
    );
  }
  nestResult = applySelectors(
    state,
    // Try the root rules for this node too.
    combine(currentRules, rootRules),
    node2,
    index2,
    parentNode
  );
  if (parent(node2) && !state.shallow && !(state.one && state.found)) {
    all2(state, nestResult, node2, tree);
  }
  return nestResult;
}
function all2(state, nest, node2, tree) {
  const fromParent = combine(nest.descendant, nest.directChild);
  let fromSibling;
  let index2 = -1;
  const total = { count: 0, types: /* @__PURE__ */ new Map() };
  const before = { count: 0, types: /* @__PURE__ */ new Map() };
  while (++index2 < node2.children.length) {
    count(total, node2.children[index2]);
  }
  index2 = -1;
  while (++index2 < node2.children.length) {
    const child = node2.children[index2];
    const name = child.type.toUpperCase();
    state.nodeIndex = before.count;
    state.typeIndex = before.types.get(name) || 0;
    state.nodeCount = total.count;
    state.typeCount = total.types.get(name);
    const forSibling = combine(fromParent, fromSibling);
    const nest2 = one2(state, forSibling, node2.children[index2], index2, node2, tree);
    fromSibling = combine(nest2.generalSibling, nest2.adjacentSibling);
    if (state.one && state.found) {
      break;
    }
    count(before, node2.children[index2]);
  }
}
function applySelectors(state, rules, node2, index2, parent2) {
  const nestResult = {
    directChild: void 0,
    descendant: void 0,
    adjacentSibling: void 0,
    generalSibling: void 0
  };
  let selectorIndex = -1;
  while (++selectorIndex < rules.length) {
    const rule = rules[selectorIndex];
    if (state.one && state.found) {
      break;
    }
    if (state.shallow && rule.nestedRule) {
      throw new Error("Expected selector without nesting");
    }
    if (test(rule, node2, index2, parent2, state)) {
      const nest = rule.nestedRule;
      if (nest) {
        const label4 = nest.combinator === "+" ? "adjacentSibling" : nest.combinator === "~" ? "generalSibling" : nest.combinator === ">" ? "directChild" : "descendant";
        add(nestResult, label4, nest);
      } else {
        state.found = true;
        if (!state.results.includes(node2)) {
          state.results.push(node2);
        }
      }
    }
    if (rule.combinator === void 0) {
      add(nestResult, "descendant", rule);
    } else if (rule.combinator === "~") {
      add(nestResult, "generalSibling", rule);
    }
  }
  return nestResult;
}
function combine(left, right) {
  return left && right && left.length > 0 && right.length > 0 ? [...left, ...right] : left && left.length > 0 ? left : right && right.length > 0 ? right : empty3;
}
function add(nest, field, rule) {
  const list3 = nest[field];
  if (list3) {
    list3.push(rule);
  } else {
    nest[field] = [rule];
  }
}
function count(counts, node2) {
  const name = node2.type.toUpperCase();
  const count2 = (counts.types.get(name) || 0) + 1;
  counts.count++;
  counts.types.set(name, count2);
}

// node_modules/unist-util-select/index.js
function selectAll(selector, tree) {
  const state = createState(selector, tree);
  walk(state, tree || void 0);
  return state.results;
}
function createState(selector, tree) {
  return {
    // State of the query.
    rootQuery: parse2(selector),
    results: [],
    scopeNodes: tree ? parent(tree) && // Root in nlcst.
    (tree.type === "RootNode" || tree.type === "root") ? tree.children : [tree] : [],
    one: false,
    shallow: false,
    found: false,
    // State in the tree.
    typeIndex: void 0,
    nodeIndex: void 0,
    typeCount: void 0,
    nodeCount: void 0
  };
}

// src/unit-select-extention/expand.ts
function expandFieldChain(nodes, fields, ctx) {
  let current = nodes;
  for (const f of fields) current = expandFieldOnce(current, f, ctx);
  return current;
}
function expandFieldOnce(nodes, field, ctx) {
  const out = [];
  for (const n of nodes) {
    if (field === "parent") {
      const p = ctx?.parentMap?.get(n) ?? null;
      if (p) out.push(p);
      continue;
    }
    const val = n[field];
    if (field === "title") {
      if (Array.isArray(val)) {
        out.push({ type: "paragraph", children: val, position: n.position });
        continue;
      }
      if (val && typeof val === "object") {
        out.push(val);
        continue;
      }
      continue;
    }
    if (field === "children") {
      if (Array.isArray(n.children)) {
        out.push(...n.children);
        continue;
      }
      continue;
    }
    if (Array.isArray(val)) {
      for (const x of val) if (x && typeof x === "object" && "type" in x) out.push(x);
      continue;
    }
    if (val && typeof val === "object" && "type" in val) {
      out.push(val);
      continue;
    }
    if (val != null) throw new Error(`Cannot expand non-node field "${field}" on ${n.type}`);
  }
  return out;
}

// src/unit-select-extention/traverse.ts
function runAllWithin(scope2) {
  const nodes = [];
  visit(scope2, (n) => {
    nodes.push(n);
  });
  return nodes;
}
function orderByPos(arr) {
  return [...arr].sort((a, b) => {
    const sa = a?.position?.start?.offset ?? 0;
    const sb = b?.position?.start?.offset ?? 0;
    return sa - sb;
  });
}
function uniqueById(arr) {
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const x of arr) if (!seen.has(x)) {
    seen.add(x);
    out.push(x);
  }
  return out;
}
function buildParentMap(root3) {
  const parents = /* @__PURE__ */ new WeakMap();
  parents.set(root3, null);
  visit(root3, (n, _i, p) => {
    if (n && !parents.has(n)) parents.set(n, p ?? null);
  });
  return parents;
}
function minimizeRoots(nodes, parents) {
  const set = new Set(nodes);
  const keep = [];
  outer: for (const n of nodes) {
    let p = parents.get(n) ?? null;
    while (p) {
      if (set.has(p)) continue outer;
      p = parents.get(p) ?? null;
    }
    keep.push(n);
  }
  return keep;
}

// src/unit-select-extention/lang/evaluate.ts
function evaluateQuery(astRoot, query, scopes) {
  const ctx = { ast: astRoot, parentMap: buildParentMap(astRoot) };
  const start = scopes && scopes.length ? scopes : [astRoot];
  const out = evalExpr(query, start, ctx);
  return orderByPos(uniqueById(out));
}
function childrenOf(n) {
  return Array.isArray(n?.children) ? n.children : [];
}
function evalExpr(expr, input, ctx) {
  return evalUnion(expr, input, ctx);
}
function evalUnion(node2, input, ctx) {
  let out = [];
  for (const term of node2.terms) out = uniqueById(out.concat(evalIntersect(term, input, ctx)));
  return out;
}
function evalIntersect(node2, input, ctx) {
  let acc = null;
  for (const term of node2.terms) {
    const r = evalChain(term, input, ctx);
    acc = acc == null ? r : acc.filter((x) => new Set(r).has(x));
  }
  return acc ?? [];
}
function evalChain(node2, input, ctx) {
  let current = evalPrimary(node2.head, input, ctx, "descendants");
  for (const step of node2.steps) {
    let acc = [];
    switch (step.op) {
      case ">": {
        for (const n of current) acc.push(...childrenOf(n));
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
      case ">>": {
        const minimized = minimizeRoots(current, ctx.parentMap);
        for (const n of minimized) acc = acc.concat(evalPrimary(step.next, [n], ctx, "descendants"));
        current = uniqueById(acc);
        break;
      }
      case "<": {
        for (const n of current) {
          const p = ctx.parentMap.get(n) ?? null;
          if (p) acc.push(p);
        }
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
      case "<<": {
        for (const n of current) {
          let p = ctx.parentMap.get(n) ?? null;
          while (p) {
            acc.push(p);
            p = ctx.parentMap.get(p) ?? null;
          }
        }
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
      case "+": {
        for (const n of current) {
          const p = ctx.parentMap.get(n) ?? null;
          if (!p || !Array.isArray(p.children)) continue;
          const i = p.children.indexOf(n);
          if (i >= 0 && i + 1 < p.children.length) acc.push(p.children[i + 1]);
        }
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
      case "++": {
        for (const n of current) {
          const p = ctx.parentMap.get(n) ?? null;
          if (!p || !Array.isArray(p.children)) continue;
          const i = p.children.indexOf(n);
          if (i >= 0) acc.push(...p.children.slice(i + 1));
        }
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
      case "-": {
        for (const n of current) {
          const p = ctx.parentMap.get(n) ?? null;
          if (!p || !Array.isArray(p.children)) continue;
          const i = p.children.indexOf(n);
          if (i > 0) acc.push(p.children[i - 1]);
        }
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
      case "--": {
        for (const n of current) {
          const p = ctx.parentMap.get(n) ?? null;
          if (!p || !Array.isArray(p.children)) continue;
          const i = p.children.indexOf(n);
          if (i > 0) acc.push(...p.children.slice(0, i));
        }
        current = uniqueById(evalPrimary(step.next, acc, ctx, "descendants"));
        break;
      }
    }
  }
  return current;
}
function evalPrimary(node2, input, ctx, _mode) {
  if (node2.kind === "group") return evalExpr(node2.expr, input, ctx);
  return evalSegment(node2.seg, input, ctx);
}
function evalSegment(seg, scopes, ctx) {
  const out = [];
  for (const scope2 of scopes) {
    let baseMatches = [];
    if (seg.base === "@") {
      const hop = Math.max(1, seg.atHop ?? 1);
      let level = [scope2];
      for (let i = 0; i < hop; i++) {
        const next = [];
        for (const n of level) if (Array.isArray(n?.children)) next.push(...n.children);
        level = next;
        if (!level.length) break;
      }
      baseMatches = level;
    } else if (seg.base === "*" || seg.base === ":root") {
      baseMatches = runAllWithin(scope2);
    } else {
      try {
        baseMatches = selectAll(seg.base, scope2);
      } catch {
        baseMatches = [];
      }
    }
    const expanded = seg.fields.length ? expandFieldChain(baseMatches, seg.fields, ctx) : baseMatches;
    const filtered = seg.filters.length ? expanded.filter((n) => seg.filters.every((f) => evalCond(f, n, ctx))) : expanded;
    out.push(...filtered);
  }
  return out;
}
function evalCond(node2, n, ctx) {
  return evalCondOr(node2, n, ctx);
}
function evalCondOr(node2, n, ctx) {
  for (const t of node2.terms) if (evalCondAnd(t, n, ctx)) return true;
  return false;
}
function evalCondAnd(node2, n, ctx) {
  for (const t of node2.terms) if (!evalCondPrimary(t, n, ctx)) return false;
  return true;
}
function evalCondPrimary(node2, n, ctx) {
  if (node2.kind === "not") return !evalCondPrimary(node2.inner, n, ctx);
  if (node2.kind === "group") return evalCond(node2.expr, n, ctx);
  return evalCondAtom(node2, n, ctx);
}
function evalCondAtom(node2, n, ctx) {
  switch (node2.kind) {
    case "cmp":
      return evalCmp(node2, n);
    case "subq":
      return evalSubq(node2, n, ctx);
    case "in":
      return evalIn(node2, n, ctx);
  }
}
function evalCmp(c, n) {
  const lhsRaw = c.isField ? n?.fields?.[c.key.raw] : pickComparable(n, c.key.raw);
  const rhs = literalToJs(c.value);
  const lhs = String(lhsRaw ?? "");
  const rhsS = String(rhs ?? "");
  if (c.op === "<" || c.op === "<=" || c.op === ">" || c.op === ">=") {
    const a = Number(lhsRaw), b = Number(rhs);
    if (!Number.isFinite(a) || !Number.isFinite(b)) return false;
    if (c.op === "<") return a < b;
    if (c.op === "<=") return a <= b;
    if (c.op === ">") return a > b;
    return a >= b;
  }
  const eq = (a, b) => a === b;
  const contains = (a, b) => a.includes(b);
  const starts = (a, b) => a.startsWith(b);
  const ends = (a, b) => a.endsWith(b);
  const norm_i = (s) => s.toLowerCase();
  const norm_s = (s) => s.replace(/\s+/g, "");
  const norm_si = (s) => norm_s(s).toLowerCase();
  switch (c.op) {
    case "=":
      return eq(lhs, rhsS);
    case "!=":
      return !eq(lhs, rhsS);
    case "*=":
      return contains(lhs, rhsS);
    case "^=":
      return starts(lhs, rhsS);
    case "$=":
      return ends(lhs, rhsS);
    case "i=":
      return eq(norm_i(lhs), norm_i(rhsS));
    case "s=":
      return eq(norm_s(lhs), norm_s(rhsS));
    case "si=":
      return eq(norm_si(lhs), norm_si(rhsS));
    case "*i=":
      return contains(norm_i(lhs), norm_i(rhsS));
    case "^i=":
      return starts(norm_i(lhs), norm_i(rhsS));
    case "$i=":
      return ends(norm_i(lhs), norm_i(rhsS));
    default:
      return false;
  }
}
function evalSubq(sq, n, ctx) {
  const scopes = sq.path && sq.path.length ? expandFieldChain([n], sq.path, ctx) : [n];
  if (!scopes.length) return false;
  const start = sq.op === ">>" ? minimizeRoots(scopes, ctx.parentMap) : scopes;
  let acc = [];
  for (const root3 of start) acc = acc.concat(evalExpr(sq.query, [root3], ctx));
  return uniqueById(acc).length > 0;
}
function evalIn(cond, n, ctx) {
  const keyNodes = expandFieldChain([n], cond.keyPath, ctx);
  if (!keyNodes.length) return false;
  const hits = evalExpr(cond.query, [n], ctx);
  const set = new Set(hits);
  return keyNodes.some((k) => set.has(k));
}
function pickComparable(n, key) {
  if (key === "type") return n?.type;
  if (key === "depth") return n?.depth;
  if (key === "title") {
    const t = n.title;
    if (!t) return "";
    if (Array.isArray(t)) return "[phrasing]";
    return t.value ?? "";
  }
  if (key === "text") return typeof n?.value === "string" ? n.value : "";
  if (key.startsWith("field.")) return n.fields?.[key.slice(6).trim()];
  return n?.[key];
}
function literalToJs(v) {
  if (v.kind === "str") return v.value;
  if (v.kind === "num") return v.value;
  return v.value;
}

// src/unit-select-extention/lang/index.ts
function run(mdastRoot, querySource, scopes) {
  const ast2 = parseQuery(querySource);
  return evaluateQuery(mdastRoot, ast2, scopes);
}

// src/unit-select-extention/enrich.ts
function enrichFieldsAndTags(ast2) {
  const addField = (host, k, v) => {
    host.fields ?? (host.fields = {});
    if (host.fields[k] == null) host.fields[k] = String(v).trim();
  };
  const addTag = (host, t) => {
    host.tags ?? (host.tags = []);
    const tag = String(t).replace(/^#/, "").toLowerCase();
    if (!host.tags.includes(tag)) host.tags.push(tag);
  };
  const harvestInline = (node2, host) => {
    if (!node2) return;
    if (node2.type === "inlineField") addField(host, node2.key, node2.value);
    if (node2.type === "mdTag") addTag(host, node2.value);
    if (Array.isArray(node2.children)) for (const c of node2.children) harvestInline(c, host);
  };
  visit(ast2, (n) => {
    if (n?.type === "paragraph" || n?.type === "heading" || n?.type === "tableCell") harvestInline(n, n);
    if (n?.type === "heading" && n.title) harvestInline({ type: "paragraph", children: n.title }, n);
    if (n?.type === "listItem" && Array.isArray(n.children)) {
      const para = n.children.find((c) => c.type === "paragraph");
      if (para) harvestInline(para, n);
    }
    if (n?.type === "callout") {
      if (n.title) harvestInline(n.title, n);
      for (const c of n.children || []) harvestInline(c, n);
    }
  });
}

// src/unit-select-extention/selector-chain.ts
function makeChain(astPromise, nodesPromise) {
  const next = (p) => makeChain(astPromise, p);
  const select = (query) => next(Promise.all([astPromise, nodesPromise]).then(([ast2, nodes]) => {
    if (!ast2) return [];
    const out = [];
    for (const r of nodes) out.push(...selectExtended(ast2, query, [r]));
    return out;
  }));
  const visitChain = (query, fn, narrow = false) => next(Promise.all([astPromise, nodesPromise]).then(async ([ast2, nodes]) => {
    if (!ast2) return narrow ? [] : nodes;
    const matches = [];
    for (const r of nodes) matches.push(...selectExtended(ast2, query, [r]));
    for (const m of matches) await fn(m);
    return narrow ? matches : nodes;
  }));
  const filter = (fn) => next(nodesPromise.then(async (ns) => {
    const keep = [];
    for (let i = 0; i < ns.length; i++) if (await fn(ns[i], i, ns)) keep.push(ns[i]);
    return keep;
  }));
  const through = (fn) => next(nodesPromise.then((ns) => Promise.resolve(fn(ns))));
  const tap = (fn) => next(nodesPromise.then(async (ns) => {
    await fn(ns);
    return ns;
  }));
  const toArray = () => nodesPromise;
  const done = async () => {
    await nodesPromise;
  };
  return { select, visit: visitChain, filter, through, tap, toArray, done };
}

// src/unit-select-extention/index.ts
function selectExtended(ast2, query, scopeRoots) {
  return run(ast2, query, scopeRoots);
}

// src/main.ts
var AstPlugin = class extends import_obsidian2.Plugin {
  constructor(app, manifest) {
    super(app, manifest);
    this.cache = /* @__PURE__ */ new Map();
    this.settings = { ...DEFAULT_SETTINGS };
    /* ---------- processor ---------- */
    this.rebuildProcessor = () => {
      console.info("[obsidian-ast] rebuildProcessor start");
      try {
        let p = unified().use(remarkParse).use(remarkGfm);
        if (this.settings.enableMdTag) p = p.use(remark_mdtag_default);
        if (this.settings.enableInlineField) p = p.use(remark_inlinefield_default);
        if (this.settings.enableDirectives) p = p.use(remarkDirectivesExtension);
        if (this.settings.enableCallout) p = p.use(remark_callout_default);
        if (this.settings.enableNestedHeadings) p = p.use(remark_nested_heading_default);
        this.processor = p;
        console.info("[obsidian-ast] rebuildProcessor ok");
      } catch (e) {
        console.error("[obsidian-ast] processor build failed; falling back:", e);
        new import_obsidian2.Notice("obsidian-ast: fell back to basic parser (see console)", 5e3);
        this.processor = unified().use(remarkParse).use(remarkGfm);
      }
    };
  }
  async onload() {
    await this.loadSettings();
    this.rebuildProcessor();
    this.api = {
      ast: (path2) => {
        const astPromise = this.ensureParsedByPath(path2);
        const nodesPromise = astPromise.then((ast2) => ast2 ? [ast2] : []);
        return makeChain(astPromise, nodesPromise);
      }
    };
    this.register(() => this.api = void 0);
    this.registerEvent(this.app.vault.on("modify", async (f) => {
      if (f instanceof import_obsidian2.TFile && f.extension === "md") await this.ensureParsed(f);
    }));
    this.registerEvent(this.app.vault.on("rename", (f, oldPath) => {
      if (f instanceof import_obsidian2.TFile && f.extension === "md") {
        const e = this.cache.get(oldPath);
        if (e) {
          this.cache.delete(oldPath);
          this.cache.set(f.path, e);
        }
      }
    }));
    this.registerEvent(this.app.vault.on("delete", (f) => {
      if (f instanceof import_obsidian2.TFile && f.extension === "md") this.cache.delete(f.path);
    }));
    this.registerMarkdownCodeBlockProcessor("ast", async (src, el, ctx) => {
      try {
        const selector = src.trim();
        if (!selector) throw new Error("selector missing");
        const ast2 = await this.ensureParsedByPath(ctx.sourcePath);
        if (!ast2) {
          el.setText("(no AST)");
          return;
        }
        const nodes = selectExtended(ast2, selector, [ast2]);
        if (!nodes.length) {
          el.setText("(no matches)");
          return;
        }
        for (const n of nodes) {
          const block = el.createDiv({ cls: "ast-match" });
          await renderNodeSliceAsMarkdown(n, ctx.sourcePath, block, this);
          block.createEl("hr");
        }
      } catch (e) {
        el.setText(`ast error: ${e.message}`);
      }
    });
    this.addCommand({
      id: "show-current-file-ast-counts",
      name: "Show AST summary for current file",
      callback: async () => {
        const file = this.getActiveFile();
        if (!file) {
          new import_obsidian2.Notice("No active file.");
          return;
        }
        const ast2 = await this.ensureParsed(file);
        if (!ast2) {
          new import_obsidian2.Notice("Could not parse current file.");
          return;
        }
        const c = countByType(ast2);
        new import_obsidian2.Notice(
          `Types: ${Object.keys(c).length}. H:${c["heading"] ?? 0} P:${c["paragraph"] ?? 0} L:${c["list"] ?? 0} CA:${c["callout"] ?? 0}`
        );
      }
    });
    this.addSettingTab(new AstSettingsTab(this.app, this));
  }
  onunload() {
    this.cache.clear();
  }
  /* ---------- settings ---------- */
  async loadSettings() {
    const data = await this.loadData();
    this.settings = Object.assign({}, DEFAULT_SETTINGS, data || {});
  }
  async saveSettings() {
    await this.saveData(this.settings);
    await this.rebuildProcessor();
    this.cache.clear();
  }
  /* ---------- AST / cache ---------- */
  getActiveFile() {
    const v = this.app.workspace.getActiveViewOfType(import_obsidian2.MarkdownView);
    return v?.file ?? null;
  }
  async ensureParsedByPath(path2) {
    const f = this.app.vault.getAbstractFileByPath(path2);
    if (!(f instanceof import_obsidian2.TFile) || f.extension !== "md") return;
    return this.ensureParsed(f);
  }
  async ensureParsed(f) {
    if (f.extension !== "md") return;
    const stat = await this.app.vault.adapter.stat(f.path);
    const size = stat?.size ?? 0, mtime = stat?.mtime ?? 0;
    const prev = this.cache.get(f.path);
    if (prev && prev.mtime === mtime && prev.size === size) return prev.ast;
    const raw = await this.app.vault.read(f);
    const ast2 = await this.processor.run(this.processor.parse(raw));
    enrichFieldsAndTags(ast2);
    this.cache.set(f.path, { ast: ast2, mtime, size, raw });
    return ast2;
  }
};
function countByType(ast2) {
  const out = {};
  visit(ast2, (n) => {
    const t = n?.type;
    if (t) out[t] = (out[t] ?? 0) + 1;
  });
  return out;
}
async function renderNodeSliceAsMarkdown(node2, filePath, el, plugin) {
  const f = plugin.app.vault.getAbstractFileByPath(filePath);
  if (!(f instanceof import_obsidian2.TFile)) return;
  const raw = await plugin.app.vault.read(f);
  const s = node2?.position?.start?.offset ?? 0;
  const e = node2?.position?.end?.offset ?? s;
  const slice = raw.slice(s, e);
  await import_obsidian2.MarkdownRenderer.renderMarkdown(slice, el, filePath, plugin);
}
