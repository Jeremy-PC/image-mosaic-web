!(function (t, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define([], r)
    : "object" == typeof exports
    ? (exports.mosaic = r())
    : (t.mosaic = r());
})(self, function () {
  return (() => {
    var t = {
        7766: (t, r, e) => {
          t.exports = e(8065);
        },
        4341: (t, r, e) => {
          t.exports = e(3685);
        },
        3536: (t, r, e) => {
          var n = e(1910);
          t.exports = n;
        },
        5367: (t, r, e) => {
          e(5906);
          var n = e(5703);
          t.exports = n("Array").concat;
        },
        6043: (t, r, e) => {
          var n = e(7046),
            o = e(5367),
            i = Array.prototype;
          t.exports = function (t) {
            var r = t.concat;
            return t === i || (n(i, t) && r === i.concat) ? o : r;
          };
        },
        8171: (t, r, e) => {
          e(6450);
          var n = e(4058).Object,
            o = (t.exports = function (t, r, e) {
              return n.defineProperty(t, r, e);
            });
          n.defineProperty.sham && (o.sham = !0);
        },
        3685: (t, r, e) => {
          var n = e(3536);
          t.exports = n;
        },
        4883: (t, r, e) => {
          var n = e(1899),
            o = e(7475),
            i = e(9826),
            a = n.TypeError;
          t.exports = function (t) {
            if (o(t)) return t;
            throw a(i(t) + " is not a function");
          };
        },
        6059: (t, r, e) => {
          var n = e(1899),
            o = e(941),
            i = n.String,
            a = n.TypeError;
          t.exports = function (t) {
            if (o(t)) return t;
            throw a(i(t) + " is not an object");
          };
        },
        568: (t, r, e) => {
          var n = e(5981),
            o = e(9813),
            i = e(3385),
            a = o("species");
          t.exports = function (t) {
            return (
              i >= 51 ||
              !n(function () {
                var r = [];
                return (
                  ((r.constructor = {})[a] = function () {
                    return { foo: 1 };
                  }),
                  1 !== r[t](Boolean).foo
                );
              })
            );
          };
        },
        5693: (t, r, e) => {
          var n = e(1899),
            o = e(1052),
            i = e(4284),
            a = e(941),
            u = e(9813)("species"),
            c = n.Array;
          t.exports = function (t) {
            var r;
            return (
              o(t) &&
                ((r = t.constructor),
                ((i(r) && (r === c || o(r.prototype))) ||
                  (a(r) && null === (r = r[u]))) &&
                  (r = void 0)),
              void 0 === r ? c : r
            );
          };
        },
        4692: (t, r, e) => {
          var n = e(5693);
          t.exports = function (t, r) {
            return new (n(t))(0 === r ? 0 : r);
          };
        },
        2532: (t, r, e) => {
          var n = e(5329),
            o = n({}.toString),
            i = n("".slice);
          t.exports = function (t) {
            return i(o(t), 8, -1);
          };
        },
        9697: (t, r, e) => {
          var n = e(1899),
            o = e(2885),
            i = e(7475),
            a = e(2532),
            u = e(9813)("toStringTag"),
            c = n.Object,
            s =
              "Arguments" ==
              a(
                (function () {
                  return arguments;
                })()
              );
          t.exports = o
            ? a
            : function (t) {
                var r, e, n;
                return void 0 === t
                  ? "Undefined"
                  : null === t
                  ? "Null"
                  : "string" ==
                    typeof (e = (function (t, r) {
                      try {
                        return t[r];
                      } catch (t) {}
                    })((r = c(t)), u))
                  ? e
                  : s
                  ? a(r)
                  : "Object" == (n = a(r)) && i(r.callee)
                  ? "Arguments"
                  : n;
              };
        },
        2029: (t, r, e) => {
          var n = e(5746),
            o = e(5988),
            i = e(1887);
          t.exports = n
            ? function (t, r, e) {
                return o.f(t, r, i(1, e));
              }
            : function (t, r, e) {
                return (t[r] = e), t;
              };
        },
        1887: (t) => {
          t.exports = function (t, r) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: r,
            };
          };
        },
        5449: (t, r, e) => {
          "use strict";
          var n = e(3894),
            o = e(5988),
            i = e(1887);
          t.exports = function (t, r, e) {
            var a = n(r);
            a in t ? o.f(t, a, i(0, e)) : (t[a] = e);
          };
        },
        5746: (t, r, e) => {
          var n = e(5981);
          t.exports = !n(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          });
        },
        1333: (t, r, e) => {
          var n = e(1899),
            o = e(941),
            i = n.document,
            a = o(i) && o(i.createElement);
          t.exports = function (t) {
            return a ? i.createElement(t) : {};
          };
        },
        2861: (t, r, e) => {
          var n = e(626);
          t.exports = n("navigator", "userAgent") || "";
        },
        3385: (t, r, e) => {
          var n,
            o,
            i = e(1899),
            a = e(2861),
            u = i.process,
            c = i.Deno,
            s = (u && u.versions) || (c && c.version),
            f = s && s.v8;
          f && (o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
            !o &&
              a &&
              (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
              (n = a.match(/Chrome\/(\d+)/)) &&
              (o = +n[1]),
            (t.exports = o);
        },
        5703: (t, r, e) => {
          var n = e(4058);
          t.exports = function (t) {
            return n[t + "Prototype"];
          };
        },
        6887: (t, r, e) => {
          "use strict";
          var n = e(1899),
            o = e(9730),
            i = e(5329),
            a = e(7475),
            u = e(9677).f,
            c = e(7252),
            s = e(4058),
            f = e(6843),
            p = e(2029),
            l = e(953),
            v = function (t) {
              var r = function (e, n, i) {
                if (this instanceof r) {
                  switch (arguments.length) {
                    case 0:
                      return new t();
                    case 1:
                      return new t(e);
                    case 2:
                      return new t(e, n);
                  }
                  return new t(e, n, i);
                }
                return o(t, this, arguments);
              };
              return (r.prototype = t.prototype), r;
            };
          t.exports = function (t, r) {
            var e,
              o,
              h,
              y,
              d,
              g,
              b,
              m,
              x = t.target,
              w = t.global,
              j = t.stat,
              O = t.proto,
              S = w ? n : j ? n[x] : (n[x] || {}).prototype,
              A = w ? s : s[x] || p(s, x, {})[x],
              P = A.prototype;
            for (h in r)
              (e =
                !c(w ? h : x + (j ? "." : "#") + h, t.forced) && S && l(S, h)),
                (d = A[h]),
                e && (g = t.noTargetGet ? (m = u(S, h)) && m.value : S[h]),
                (y = e && g ? g : r[h]),
                (e && typeof d == typeof y) ||
                  ((b =
                    t.bind && e
                      ? f(y, n)
                      : t.wrap && e
                      ? v(y)
                      : O && a(y)
                      ? i(y)
                      : y),
                  (t.sham || (y && y.sham) || (d && d.sham)) &&
                    p(b, "sham", !0),
                  p(A, h, b),
                  O &&
                    (l(s, (o = x + "Prototype")) || p(s, o, {}),
                    p(s[o], h, y),
                    t.real && P && !P[h] && p(P, h, y)));
          };
        },
        5981: (t) => {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        9730: (t, r, e) => {
          var n = e(8285),
            o = Function.prototype,
            i = o.apply,
            a = o.call;
          t.exports =
            ("object" == typeof Reflect && Reflect.apply) ||
            (n
              ? a.bind(i)
              : function () {
                  return a.apply(i, arguments);
                });
        },
        6843: (t, r, e) => {
          var n = e(5329),
            o = e(4883),
            i = e(8285),
            a = n(n.bind);
          t.exports = function (t, r) {
            return (
              o(t),
              void 0 === r
                ? t
                : i
                ? a(t, r)
                : function () {
                    return t.apply(r, arguments);
                  }
            );
          };
        },
        8285: (t, r, e) => {
          var n = e(5981);
          t.exports = !n(function () {
            var t = function () {}.bind();
            return "function" != typeof t || t.hasOwnProperty("prototype");
          });
        },
        8834: (t, r, e) => {
          var n = e(8285),
            o = Function.prototype.call;
          t.exports = n
            ? o.bind(o)
            : function () {
                return o.apply(o, arguments);
              };
        },
        5329: (t, r, e) => {
          var n = e(8285),
            o = Function.prototype,
            i = o.bind,
            a = o.call,
            u = n && i.bind(a, a);
          t.exports = n
            ? function (t) {
                return t && u(t);
              }
            : function (t) {
                return (
                  t &&
                  function () {
                    return a.apply(t, arguments);
                  }
                );
              };
        },
        626: (t, r, e) => {
          var n = e(4058),
            o = e(1899),
            i = e(7475),
            a = function (t) {
              return i(t) ? t : void 0;
            };
          t.exports = function (t, r) {
            return arguments.length < 2
              ? a(n[t]) || a(o[t])
              : (n[t] && n[t][r]) || (o[t] && o[t][r]);
          };
        },
        4229: (t, r, e) => {
          var n = e(4883);
          t.exports = function (t, r) {
            var e = t[r];
            return null == e ? void 0 : n(e);
          };
        },
        1899: (t, r, e) => {
          var n = function (t) {
            return t && t.Math == Math && t;
          };
          t.exports =
            n("object" == typeof globalThis && globalThis) ||
            n("object" == typeof window && window) ||
            n("object" == typeof self && self) ||
            n("object" == typeof e.g && e.g) ||
            (function () {
              return this;
            })() ||
            Function("return this")();
        },
        953: (t, r, e) => {
          var n = e(5329),
            o = e(9678),
            i = n({}.hasOwnProperty);
          t.exports =
            Object.hasOwn ||
            function (t, r) {
              return i(o(t), r);
            };
        },
        2840: (t, r, e) => {
          var n = e(5746),
            o = e(5981),
            i = e(1333);
          t.exports =
            !n &&
            !o(function () {
              return (
                7 !=
                Object.defineProperty(i("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        7026: (t, r, e) => {
          var n = e(1899),
            o = e(5329),
            i = e(5981),
            a = e(2532),
            u = n.Object,
            c = o("".split);
          t.exports = i(function () {
            return !u("z").propertyIsEnumerable(0);
          })
            ? function (t) {
                return "String" == a(t) ? c(t, "") : u(t);
              }
            : u;
        },
        1302: (t, r, e) => {
          var n = e(5329),
            o = e(7475),
            i = e(3030),
            a = n(Function.toString);
          o(i.inspectSource) ||
            (i.inspectSource = function (t) {
              return a(t);
            }),
            (t.exports = i.inspectSource);
        },
        1052: (t, r, e) => {
          var n = e(2532);
          t.exports =
            Array.isArray ||
            function (t) {
              return "Array" == n(t);
            };
        },
        7475: (t) => {
          t.exports = function (t) {
            return "function" == typeof t;
          };
        },
        4284: (t, r, e) => {
          var n = e(5329),
            o = e(5981),
            i = e(7475),
            a = e(9697),
            u = e(626),
            c = e(1302),
            s = function () {},
            f = [],
            p = u("Reflect", "construct"),
            l = /^\s*(?:class|function)\b/,
            v = n(l.exec),
            h = !l.exec(s),
            y = function (t) {
              if (!i(t)) return !1;
              try {
                return p(s, f, t), !0;
              } catch (t) {
                return !1;
              }
            },
            d = function (t) {
              if (!i(t)) return !1;
              switch (a(t)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                  return !1;
              }
              try {
                return h || !!v(l, c(t));
              } catch (t) {
                return !0;
              }
            };
          (d.sham = !0),
            (t.exports =
              !p ||
              o(function () {
                var t;
                return (
                  y(y.call) ||
                  !y(Object) ||
                  !y(function () {
                    t = !0;
                  }) ||
                  t
                );
              })
                ? d
                : y);
        },
        7252: (t, r, e) => {
          var n = e(5981),
            o = e(7475),
            i = /#|\.prototype\./,
            a = function (t, r) {
              var e = c[u(t)];
              return e == f || (e != s && (o(r) ? n(r) : !!r));
            },
            u = (a.normalize = function (t) {
              return String(t).replace(i, ".").toLowerCase();
            }),
            c = (a.data = {}),
            s = (a.NATIVE = "N"),
            f = (a.POLYFILL = "P");
          t.exports = a;
        },
        941: (t, r, e) => {
          var n = e(7475);
          t.exports = function (t) {
            return "object" == typeof t ? null !== t : n(t);
          };
        },
        2529: (t) => {
          t.exports = !0;
        },
        6664: (t, r, e) => {
          var n = e(1899),
            o = e(626),
            i = e(7475),
            a = e(7046),
            u = e(2302),
            c = n.Object;
          t.exports = u
            ? function (t) {
                return "symbol" == typeof t;
              }
            : function (t) {
                var r = o("Symbol");
                return i(r) && a(r.prototype, c(t));
              };
        },
        623: (t, r, e) => {
          var n = e(3057);
          t.exports = function (t) {
            return n(t.length);
          };
        },
        2497: (t, r, e) => {
          var n = e(3385),
            o = e(5981);
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !o(function () {
              var t = Symbol();
              return (
                !String(t) ||
                !(Object(t) instanceof Symbol) ||
                (!Symbol.sham && n && n < 41)
              );
            });
        },
        5988: (t, r, e) => {
          var n = e(1899),
            o = e(5746),
            i = e(2840),
            a = e(3937),
            u = e(6059),
            c = e(3894),
            s = n.TypeError,
            f = Object.defineProperty,
            p = Object.getOwnPropertyDescriptor;
          r.f = o
            ? a
              ? function (t, r, e) {
                  if (
                    (u(t),
                    (r = c(r)),
                    u(e),
                    "function" == typeof t &&
                      "prototype" === r &&
                      "value" in e &&
                      "writable" in e &&
                      !e.writable)
                  ) {
                    var n = p(t, r);
                    n &&
                      n.writable &&
                      ((t[r] = e.value),
                      (e = {
                        configurable:
                          "configurable" in e ? e.configurable : n.configurable,
                        enumerable:
                          "enumerable" in e ? e.enumerable : n.enumerable,
                        writable: !1,
                      }));
                  }
                  return f(t, r, e);
                }
              : f
            : function (t, r, e) {
                if ((u(t), (r = c(r)), u(e), i))
                  try {
                    return f(t, r, e);
                  } catch (t) {}
                if ("get" in e || "set" in e)
                  throw s("Accessors not supported");
                return "value" in e && (t[r] = e.value), t;
              };
        },
        9677: (t, r, e) => {
          var n = e(5746),
            o = e(8834),
            i = e(6760),
            a = e(1887),
            u = e(4529),
            c = e(3894),
            s = e(953),
            f = e(2840),
            p = Object.getOwnPropertyDescriptor;
          r.f = n
            ? p
            : function (t, r) {
                if (((t = u(t)), (r = c(r)), f))
                  try {
                    return p(t, r);
                  } catch (t) {}
                if (s(t, r)) return a(!o(i.f, t, r), t[r]);
              };
        },
        7046: (t, r, e) => {
          var n = e(5329);
          t.exports = n({}.isPrototypeOf);
        },
        6760: (t, r) => {
          "use strict";
          var e = {}.propertyIsEnumerable,
            n = Object.getOwnPropertyDescriptor,
            o = n && !e.call({ 1: 2 }, 1);
          r.f = o
            ? function (t) {
                var r = n(this, t);
                return !!r && r.enumerable;
              }
            : e;
        },
        9811: (t, r, e) => {
          var n = e(1899),
            o = e(8834),
            i = e(7475),
            a = e(941),
            u = n.TypeError;
          t.exports = function (t, r) {
            var e, n;
            if ("string" === r && i((e = t.toString)) && !a((n = o(e, t))))
              return n;
            if (i((e = t.valueOf)) && !a((n = o(e, t)))) return n;
            if ("string" !== r && i((e = t.toString)) && !a((n = o(e, t))))
              return n;
            throw u("Can't convert object to primitive value");
          };
        },
        4058: (t) => {
          t.exports = {};
        },
        8219: (t, r, e) => {
          var n = e(1899).TypeError;
          t.exports = function (t) {
            if (null == t) throw n("Can't call method on " + t);
            return t;
          };
        },
        4911: (t, r, e) => {
          var n = e(1899),
            o = Object.defineProperty;
          t.exports = function (t, r) {
            try {
              o(n, t, { value: r, configurable: !0, writable: !0 });
            } catch (e) {
              n[t] = r;
            }
            return r;
          };
        },
        3030: (t, r, e) => {
          var n = e(1899),
            o = e(4911),
            i = "__core-js_shared__",
            a = n[i] || o(i, {});
          t.exports = a;
        },
        8726: (t, r, e) => {
          var n = e(2529),
            o = e(3030);
          (t.exports = function (t, r) {
            return o[t] || (o[t] = void 0 !== r ? r : {});
          })("versions", []).push({
            version: "3.21.1",
            mode: n ? "pure" : "global",
            copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
            source: "https://github.com/zloirock/core-js",
          });
        },
        4529: (t, r, e) => {
          var n = e(7026),
            o = e(8219);
          t.exports = function (t) {
            return n(o(t));
          };
        },
        2435: (t) => {
          var r = Math.ceil,
            e = Math.floor;
          t.exports = function (t) {
            var n = +t;
            return n != n || 0 === n ? 0 : (n > 0 ? e : r)(n);
          };
        },
        3057: (t, r, e) => {
          var n = e(2435),
            o = Math.min;
          t.exports = function (t) {
            return t > 0 ? o(n(t), 9007199254740991) : 0;
          };
        },
        9678: (t, r, e) => {
          var n = e(1899),
            o = e(8219),
            i = n.Object;
          t.exports = function (t) {
            return i(o(t));
          };
        },
        6935: (t, r, e) => {
          var n = e(1899),
            o = e(8834),
            i = e(941),
            a = e(6664),
            u = e(4229),
            c = e(9811),
            s = e(9813),
            f = n.TypeError,
            p = s("toPrimitive");
          t.exports = function (t, r) {
            if (!i(t) || a(t)) return t;
            var e,
              n = u(t, p);
            if (n) {
              if (
                (void 0 === r && (r = "default"),
                (e = o(n, t, r)),
                !i(e) || a(e))
              )
                return e;
              throw f("Can't convert object to primitive value");
            }
            return void 0 === r && (r = "number"), c(t, r);
          };
        },
        3894: (t, r, e) => {
          var n = e(6935),
            o = e(6664);
          t.exports = function (t) {
            var r = n(t, "string");
            return o(r) ? r : r + "";
          };
        },
        2885: (t, r, e) => {
          var n = {};
          (n[e(9813)("toStringTag")] = "z"),
            (t.exports = "[object z]" === String(n));
        },
        9826: (t, r, e) => {
          var n = e(1899).String;
          t.exports = function (t) {
            try {
              return n(t);
            } catch (t) {
              return "Object";
            }
          };
        },
        9418: (t, r, e) => {
          var n = e(5329),
            o = 0,
            i = Math.random(),
            a = n((1).toString);
          t.exports = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36);
          };
        },
        2302: (t, r, e) => {
          var n = e(2497);
          t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        3937: (t, r, e) => {
          var n = e(5746),
            o = e(5981);
          t.exports =
            n &&
            o(function () {
              return (
                42 !=
                Object.defineProperty(function () {}, "prototype", {
                  value: 42,
                  writable: !1,
                }).prototype
              );
            });
        },
        9813: (t, r, e) => {
          var n = e(1899),
            o = e(8726),
            i = e(953),
            a = e(9418),
            u = e(2497),
            c = e(2302),
            s = o("wks"),
            f = n.Symbol,
            p = f && f.for,
            l = c ? f : (f && f.withoutSetter) || a;
          t.exports = function (t) {
            if (!i(s, t) || (!u && "string" != typeof s[t])) {
              var r = "Symbol." + t;
              u && i(f, t) ? (s[t] = f[t]) : (s[t] = c && p ? p(r) : l(r));
            }
            return s[t];
          };
        },
        5906: (t, r, e) => {
          "use strict";
          var n = e(6887),
            o = e(1899),
            i = e(5981),
            a = e(1052),
            u = e(941),
            c = e(9678),
            s = e(623),
            f = e(5449),
            p = e(4692),
            l = e(568),
            v = e(9813),
            h = e(3385),
            y = v("isConcatSpreadable"),
            d = 9007199254740991,
            g = "Maximum allowed index exceeded",
            b = o.TypeError,
            m =
              h >= 51 ||
              !i(function () {
                var t = [];
                return (t[y] = !1), t.concat()[0] !== t;
              }),
            x = l("concat"),
            w = function (t) {
              if (!u(t)) return !1;
              var r = t[y];
              return void 0 !== r ? !!r : a(t);
            };
          n(
            { target: "Array", proto: !0, forced: !m || !x },
            {
              concat: function (t) {
                var r,
                  e,
                  n,
                  o,
                  i,
                  a = c(this),
                  u = p(a, 0),
                  l = 0;
                for (r = -1, n = arguments.length; r < n; r++)
                  if (w((i = -1 === r ? a : arguments[r]))) {
                    if (l + (o = s(i)) > d) throw b(g);
                    for (e = 0; e < o; e++, l++) e in i && f(u, l, i[e]);
                  } else {
                    if (l >= d) throw b(g);
                    f(u, l++, i);
                  }
                return (u.length = l), u;
              },
            }
          );
        },
        6450: (t, r, e) => {
          var n = e(6887),
            o = e(5746),
            i = e(5988).f;
          n(
            {
              target: "Object",
              stat: !0,
              forced: Object.defineProperty !== i,
              sham: !o,
            },
            { defineProperty: i }
          );
        },
        8065: (t, r, e) => {
          var n = e(6043);
          t.exports = n;
        },
        1910: (t, r, e) => {
          var n = e(8171);
          t.exports = n;
        },
      },
      r = {};
    function e(n) {
      var o = r[n];
      if (void 0 !== o) return o.exports;
      var i = (r[n] = { exports: {} });
      return t[n](i, i.exports, e), i.exports;
    }
    (e.n = (t) => {
      var r = t && t.__esModule ? () => t.default : () => t;
      return e.d(r, { a: r }), r;
    }),
      (e.d = (t, r) => {
        for (var n in r)
          e.o(r, n) &&
            !e.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
      }),
      (e.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      })()),
      (e.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r));
    var n = {};
    return (
      (() => {
        "use strict";
        e.d(n, { default: () => a });
        var t = e(4341);
        function r(r, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              t(r, o.key, o);
          }
        }
        var o = e(7766),
          i = e.n(o),
          a = (function () {
            function e(t) {
              !(function (t, r) {
                if (!(t instanceof r))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.canvas = t.el),
                (this.context = ""),
                (this.quan = t.quan || 3),
                (this.num = t.num || 9),
                (this.width = t.width),
                (this.height = t.height),
                (this.url = t.url),
                (this.lastImgArr = []),
                (this.start = function (t, r, e, n, o) {
                  function i(t, r, e, n, o, i) {
                    for (
                      var a = r.getImageData(0, 0, t.width, t.height).data,
                        u = r.getImageData(0, 0, t.width, t.height),
                        c = u.data,
                        s = o - e * n;
                      s < o + e * n;
                      s = s + 2 * e + 1
                    )
                      for (var f = i - e * n; f < i + e * n; f = f + 2 * e + 1)
                        if (
                          !(
                            (s == o - e * n && f == i - e * n) ||
                            (s == o - e * n && f == i - e * n + 2 * e + 1) ||
                            (s == o - e * n && f == i - e * n + 4 * e + 2) ||
                            (s == o - e * n && f == i - e * n + 12 * e + 6) ||
                            (s == o - e * n && f == i - e * n + 14 * e + 7) ||
                            (s == o - e * n && f == i - e * n + 16 * e + 8) ||
                            (s == o - e * n + 16 * e + 8 && f == i - e * n) ||
                            (s == o - e * n + 16 * e + 8 &&
                              f == i - e * n + 2 * e + 1) ||
                            (s == o - e * n + 16 * e + 8 &&
                              f == i - e * n + 4 * e + 2) ||
                            (s == o - e * n + 16 * e + 8 &&
                              f == i - e * n + 12 * e + 6) ||
                            (s == o - e * n + 16 * e + 8 &&
                              f == i - e * n + 14 * e + 7) ||
                            (s == o - e * n + 16 * e + 8 &&
                              f == i - e * n + 16 * e + 8) ||
                            (s == o - e * n + 2 * e + 1 && f == i - e * n) ||
                            (s == o - e * n + 4 * e + 2 && f == i - e * n) ||
                            (s == o - e * n + 12 * e + 6 && f == i - e * n) ||
                            (s == o - e * n + 14 * e + 7 && f == i - e * n) ||
                            (s == o - e * n + 2 * e + 1 &&
                              f == i - e * n + 16 * e + 8) ||
                            (s == o - e * n + 4 * e + 2 &&
                              f == i - e * n + 16 * e + 8) ||
                            (s == o - e * n + 12 * e + 6 &&
                              f == i - e * n + 16 * e + 8) ||
                            (s == o - e * n + 14 * e + 7 &&
                              f == i - e * n + 16 * e + 8)
                          )
                        ) {
                          for (var p = 0, l = 0, v = 0, h = -e; h <= e; h++)
                            for (var y = -e; y <= e; y++) {
                              var d = s + h,
                                g = (f + y) * t.width + d;
                              (p += a[4 * g + 0]),
                                (l += a[4 * g + 1]),
                                (v += a[4 * g + 2]);
                            }
                          for (
                            var b = (2 * e + 1) * (2 * e + 1),
                              m = p / b,
                              x = l / b,
                              w = v / b,
                              j = -e;
                            j <= e;
                            j++
                          )
                            for (var O = -e; O <= e; O++) {
                              var S = s + j,
                                A = (f + O) * t.width + S;
                              (c[4 * A + 0] = m),
                                (c[4 * A + 1] = x),
                                (c[4 * A + 2] = w);
                            }
                        }
                    r.putImageData(u, 0, 0, 0, 0, t.width, t.height);
                  }
                  t.onmousedown = function (a) {
                    o.push(r.getImageData(0, 0, t.width, t.height));
                    var u = (a = a || window.event).clientX,
                      c = a.clientY;
                    i(t, r, e, n, u, c),
                      (document.onmousemove = function (o) {
                        var a = (o = o || window.event).offsetX,
                          s = o.clientY;
                        Math.pow(u - a, 2) + Math.pow(c - s, 2) >=
                          Math.pow(e * n, 2) &&
                          (i(t, r, e, n, a, s), (u = a), (c = s));
                      }),
                      (document.onmouseup = function () {
                        (document.onmousemove = null),
                          (document.onmouseup = null);
                      });
                  };
                }),
                (this.dataURLtoFile = function (t) {
                  for (
                    var r,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "file",
                      n = t.split(","),
                      o = n[0].match(/:(.*?);/)[1],
                      a = o.split("/")[1],
                      u = window.atob(n[1]),
                      c = u.length,
                      s = new Uint8Array(c);
                    c--;

                  )
                    s[c] = u.charCodeAt(c);
                  return new File(
                    [s],
                    i()((r = "".concat(e, "."))).call(r, a),
                    { type: o }
                  );
                });
            }
            var n, o;
            return (
              (n = e),
              (o = [
                {
                  key: "init",
                  value: function () {
                    if (
                      !this.canvas ||
                      "" === this.canvas ||
                      "CANVAS" !== this.canvas.tagName
                    )
                      throw (
                        (console.error("传入的节点并非canvas标签!"),
                        new Error("传入的节点并非canvas标签!"))
                      );
                    if (
                      ((this.context = this.canvas.getContext("2d")),
                      !this.url || "" === this.url)
                    )
                      throw (
                        (console.error("传入的url地址不存在!"),
                        new Error("传入的url地址不存在!"))
                      );
                    var t = new Image();
                    (t.crossOrigin = "Anonymous"), (t.src = this.url);
                    var r = this;
                    t.onload = function () {
                      (r.canvas.width = r.width || this.width),
                        (r.canvas.height = r.height || this.height),
                        r.context.drawImage(
                          this,
                          0,
                          0,
                          r.width || this.width,
                          r.height || this.height
                        ),
                        r.start(
                          r.canvas,
                          r.context,
                          r.quan,
                          r.num,
                          r.lastImgArr
                        );
                    };
                  },
                },
                {
                  key: "update",
                  value: function (t) {
                    (this.url = t), this.onClear(), this.init();
                  },
                },
                {
                  key: "onRevoked",
                  value: function () {
                    "" !== this.context &&
                      this.lastImgArr &&
                      this.lastImgArr.length &&
                      this.context.putImageData(this.lastImgArr.pop(), 0, 0);
                  },
                },
                {
                  key: "onSave",
                  value: function () {
                    var t = this.canvas.toDataURL("image/png"),
                      r = this.dataURLtoFile(
                        t,
                        "img_".concat(new Date().getTime())
                      );
                    return this.onClear(), { file: r, img: t };
                  },
                },
                {
                  key: "onClear",
                  value: function () {
                    this.lastImgArr = [];
                  },
                },
              ]) && r(n.prototype, o),
              t(n, "prototype", { writable: !1 }),
              e
            );
          })();
      })(),
      n.default
    );
  })();
});
