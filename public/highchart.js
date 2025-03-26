!(
  /**
   * Highcharts JS v12.1.2 (2024-12-21)
   * @module highcharts/highcharts
   *
   * (c) 2009-2024 Torstein Honsi
   *
   * License: www.highcharts.com/license
   */ (function (t, e) {
    "object" == typeof exports && "object" == typeof module
      ? ((t._Highcharts = e()), (module.exports = t._Highcharts))
      : "function" == typeof define && define.amd
      ? define("highcharts/highcharts", [], e)
      : "object" == typeof exports
      ? ((t._Highcharts = e()), (exports.highcharts = t._Highcharts))
      : (t.Highcharts && t.Highcharts.error(16, !0), (t.Highcharts = e()));
  })("undefined" == typeof window ? this : window, () =>
    (() => {
      "use strict";
      let t, e;
      var i,
        s,
        o,
        r,
        a,
        n,
        h,
        l,
        d,
        c,
        p,
        g,
        u,
        f,
        m,
        x,
        y,
        b = {};
      (b.d = (t, e) => {
        for (var i in e)
          b.o(e, i) &&
            !b.o(t, i) &&
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
      }),
        (b.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e));
      var v = {};
      b.d(v, { default: () => lb }),
        (function (t) {
          (t.SVG_NS = "http://www.w3.org/2000/svg"),
            (t.product = "Highcharts"),
            (t.version = "12.1.2"),
            (t.win = "undefined" != typeof window ? window : {}),
            (t.doc = t.win.document),
            (t.svg =
              t.doc &&
              t.doc.createElementNS &&
              !!t.doc.createElementNS(t.SVG_NS, "svg").createSVGRect),
            (t.pageLang = t.doc?.documentElement?.closest("[lang]")?.lang),
            (t.userAgent =
              (t.win.navigator && t.win.navigator.userAgent) || ""),
            (t.isChrome = t.win.chrome),
            (t.isFirefox = -1 !== t.userAgent.indexOf("Firefox")),
            (t.isMS = /(edge|msie|trident)/i.test(t.userAgent) && !t.win.opera),
            (t.isSafari = !t.isChrome && -1 !== t.userAgent.indexOf("Safari")),
            (t.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(
              t.userAgent
            )),
            (t.isWebKit = -1 !== t.userAgent.indexOf("AppleWebKit")),
            (t.deg2rad = (2 * Math.PI) / 360),
            (t.marginNames = [
              "plotTop",
              "marginRight",
              "marginBottom",
              "plotLeft",
            ]),
            (t.noop = function () {}),
            (t.supportsPassiveEvents = (function () {
              let e = !1;
              if (!t.isMS) {
                let i = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  },
                });
                t.win.addEventListener &&
                  t.win.removeEventListener &&
                  (t.win.addEventListener("testPassive", t.noop, i),
                  t.win.removeEventListener("testPassive", t.noop, i));
              }
              return e;
            })()),
            (t.charts = []),
            (t.composed = []),
            (t.dateFormats = {}),
            (t.seriesTypes = {}),
            (t.symbolSizes = {}),
            (t.chartCount = 0);
        })(i || (i = {}));
      let k = i,
        { charts: w, doc: M, win: S } = k;
      function T(t, e, i, s) {
        let o = e ? "Highcharts error" : "Highcharts warning";
        32 === t && (t = `${o}: Deprecated member`);
        let r = I(t),
          a = r ? `${o} #${t}: www.highcharts.com/errors/${t}/` : t.toString();
        if (void 0 !== s) {
          let t = "";
          r && (a += "?"),
            G(s, function (e, i) {
              (t += `
    - ${i}: ${e}`),
                r && (a += encodeURI(i) + "=" + encodeURI(e));
            }),
            (a += t);
        }
        j(
          k,
          "displayError",
          { chart: i, code: t, message: a, params: s },
          function () {
            if (e) throw Error(a);
            S.console && -1 === T.messages.indexOf(a) && console.warn(a);
          }
        ),
          T.messages.push(a);
      }
      function C(t, e) {
        return parseInt(t, e || 10);
      }
      function A(t) {
        return "string" == typeof t;
      }
      function P(t) {
        let e = Object.prototype.toString.call(t);
        return "[object Array]" === e || "[object Array Iterator]" === e;
      }
      function L(t, e) {
        return !!t && "object" == typeof t && (!e || !P(t));
      }
      function O(t) {
        return L(t) && "number" == typeof t.nodeType;
      }
      function E(t) {
        let e = t && t.constructor;
        return !!(L(t, !0) && !O(t) && e && e.name && "Object" !== e.name);
      }
      function I(t) {
        return "number" == typeof t && !isNaN(t) && t < 1 / 0 && t > -1 / 0;
      }
      function D(t) {
        return null != t;
      }
      function B(t, e, i) {
        let s;
        let o = A(e) && !D(i),
          r = (e, i) => {
            D(e)
              ? t.setAttribute(i, e)
              : o
              ? (s = t.getAttribute(i)) ||
                "class" !== i ||
                (s = t.getAttribute(i + "Name"))
              : t.removeAttribute(i);
          };
        return A(e) ? r(i, e) : G(e, r), s;
      }
      function N(t) {
        return P(t) ? t : [t];
      }
      function z(t, e) {
        let i;
        for (i in (t || (t = {}), e)) t[i] = e[i];
        return t;
      }
      function R() {
        let t = arguments,
          e = t.length;
        for (let i = 0; i < e; i++) {
          let e = t[i];
          if (null != e) return e;
        }
      }
      function W(t, e) {
        z(t.style, e);
      }
      function H(t) {
        return Math.pow(10, Math.floor(Math.log(t) / Math.LN10));
      }
      function X(t, e) {
        return t > 1e14 ? t : parseFloat(t.toPrecision(e || 14));
      }
      ((T || (T = {})).messages = []),
        (Math.easeInOutSine = function (t) {
          return -0.5 * (Math.cos(Math.PI * t) - 1);
        });
      let F = Array.prototype.find
        ? function (t, e) {
            return t.find(e);
          }
        : function (t, e) {
            let i;
            let s = t.length;
            for (i = 0; i < s; i++) if (e(t[i], i)) return t[i];
          };
      function G(t, e, i) {
        for (let s in t)
          Object.hasOwnProperty.call(t, s) && e.call(i || t[s], t[s], s, t);
      }
      function Y(t, e, i) {
        function s(e, i) {
          let s = t.removeEventListener;
          s && s.call(t, e, i, !1);
        }
        function o(i) {
          let o, r;
          t.nodeName &&
            (e ? ((o = {})[e] = !0) : (o = i),
            G(o, function (t, e) {
              if (i[e]) for (r = i[e].length; r--; ) s(e, i[e][r].fn);
            }));
        }
        let r = ("function" == typeof t && t.prototype) || t;
        if (Object.hasOwnProperty.call(r, "hcEvents")) {
          let t = r.hcEvents;
          if (e) {
            let r = t[e] || [];
            i
              ? ((t[e] = r.filter(function (t) {
                  return i !== t.fn;
                })),
                s(e, i))
              : (o(t), (t[e] = []));
          } else o(t), delete r.hcEvents;
        }
      }
      function j(t, e, i, s) {
        if (
          ((i = i || {}),
          M.createEvent && (t.dispatchEvent || (t.fireEvent && t !== k)))
        ) {
          let s = M.createEvent("Events");
          s.initEvent(e, !0, !0),
            (i = z(s, i)),
            t.dispatchEvent ? t.dispatchEvent(i) : t.fireEvent(e, i);
        } else if (t.hcEvents) {
          i.target ||
            z(i, {
              preventDefault: function () {
                i.defaultPrevented = !0;
              },
              target: t,
              type: e,
            });
          let s = [],
            o = t,
            r = !1;
          for (; o.hcEvents; )
            Object.hasOwnProperty.call(o, "hcEvents") &&
              o.hcEvents[e] &&
              (s.length && (r = !0), s.unshift.apply(s, o.hcEvents[e])),
              (o = Object.getPrototypeOf(o));
          r && s.sort((t, e) => t.order - e.order),
            s.forEach((e) => {
              !1 === e.fn.call(t, i) && i.preventDefault();
            });
        }
        s && !i.defaultPrevented && s.call(t, i);
      }
      let U = (function () {
        let e = Math.random().toString(36).substring(2, 9) + "-",
          i = 0;
        return function () {
          return "highcharts-" + (t ? "" : e) + i++;
        };
      })();
      S.jQuery &&
        (S.jQuery.fn.highcharts = function () {
          let t = [].slice.call(arguments);
          if (this[0])
            return t[0]
              ? (new k[A(t[0]) ? t.shift() : "Chart"](this[0], t[0], t[1]),
                this)
              : w[B(this[0], "data-highcharts-chart")];
        });
      let $ = {
          addEvent: function (t, e, i, s = {}) {
            let o = ("function" == typeof t && t.prototype) || t;
            Object.hasOwnProperty.call(o, "hcEvents") || (o.hcEvents = {});
            let r = o.hcEvents;
            k.Point &&
              t instanceof k.Point &&
              t.series &&
              t.series.chart &&
              (t.series.chart.runTrackerClick = !0);
            let a = t.addEventListener;
            a &&
              a.call(
                t,
                e,
                i,
                !!k.supportsPassiveEvents && {
                  passive:
                    void 0 === s.passive
                      ? -1 !== e.indexOf("touch")
                      : s.passive,
                  capture: !1,
                }
              ),
              r[e] || (r[e] = []);
            let n = {
              fn: i,
              order: "number" == typeof s.order ? s.order : 1 / 0,
            };
            return (
              r[e].push(n),
              r[e].sort((t, e) => t.order - e.order),
              function () {
                Y(t, e, i);
              }
            );
          },
          arrayMax: function (t) {
            let e = t.length,
              i = t[0];
            for (; e--; ) t[e] > i && (i = t[e]);
            return i;
          },
          arrayMin: function (t) {
            let e = t.length,
              i = t[0];
            for (; e--; ) t[e] < i && (i = t[e]);
            return i;
          },
          attr: B,
          clamp: function (t, e, i) {
            return t > e ? (t < i ? t : i) : e;
          },
          clearTimeout: function (t) {
            D(t) && clearTimeout(t);
          },
          correctFloat: X,
          createElement: function (t, e, i, s, o) {
            let r = M.createElement(t);
            return (
              e && z(r, e),
              o && W(r, { padding: "0", border: "none", margin: "0" }),
              i && W(r, i),
              s && s.appendChild(r),
              r
            );
          },
          crisp: function (t, e = 0, i) {
            let s = (e % 2) / 2,
              o = i ? -1 : 1;
            return (Math.round(t * o - s) + s) * o;
          },
          css: W,
          defined: D,
          destroyObjectProperties: function (t, e, i) {
            G(t, function (s, o) {
              s !== e && s?.destroy && s.destroy(),
                (s?.destroy || !i) && delete t[o];
            });
          },
          diffObjects: function (t, e, i, s) {
            let o = {};
            return (
              !(function t(e, o, r, a) {
                let n = i ? o : e;
                G(e, function (i, h) {
                  if (!a && s && s.indexOf(h) > -1 && o[h]) {
                    (i = N(i)), (r[h] = []);
                    for (let e = 0; e < Math.max(i.length, o[h].length); e++)
                      o[h][e] &&
                        (void 0 === i[e]
                          ? (r[h][e] = o[h][e])
                          : ((r[h][e] = {}), t(i[e], o[h][e], r[h][e], a + 1)));
                  } else L(i, !0) && !i.nodeType ? ((r[h] = P(i) ? [] : {}), t(i, o[h] || {}, r[h], a + 1), 0 !== Object.keys(r[h]).length || ("colorAxis" === h && 0 === a) || delete r[h]) : (e[h] !== o[h] || (h in e && !(h in o))) && "__proto__" !== h && "constructor" !== h && (r[h] = n[h]);
                });
              })(t, e, o, 0),
              o
            );
          },
          discardElement: function (t) {
            t && t.parentElement && t.parentElement.removeChild(t);
          },
          erase: function (t, e) {
            let i = t.length;
            for (; i--; )
              if (t[i] === e) {
                t.splice(i, 1);
                break;
              }
          },
          error: T,
          extend: z,
          extendClass: function (t, e) {
            let i = function () {};
            return (i.prototype = new t()), z(i.prototype, e), i;
          },
          find: F,
          fireEvent: j,
          getAlignFactor: (t = "") =>
            ({ center: 0.5, right: 1, middle: 0.5, bottom: 1 }[t] || 0),
          getClosestDistance: function (t, e) {
            let i, s, o, r;
            let a = !e;
            return (
              t.forEach((t) => {
                if (t.length > 1)
                  for (r = s = t.length - 1; r > 0; r--)
                    (o = t[r] - t[r - 1]) < 0 && !a
                      ? (e?.(), (e = void 0))
                      : o && (void 0 === i || o < i) && (i = o);
              }),
              i
            );
          },
          getMagnitude: H,
          getNestedProperty: function (t, e) {
            let i = t.split(".");
            for (; i.length && D(e); ) {
              let t = i.shift();
              if (void 0 === t || "__proto__" === t) return;
              if ("this" === t) {
                let t;
                return L(e) && (t = e["@this"]), t ?? e;
              }
              let s = e[t.replace(/[\\'"]/g, "")];
              if (
                !D(s) ||
                "function" == typeof s ||
                "number" == typeof s.nodeType ||
                s === S
              )
                return;
              e = s;
            }
            return e;
          },
          getStyle: function t(e, i, s) {
            let o;
            if ("width" === i) {
              let i = Math.min(e.offsetWidth, e.scrollWidth),
                s = e.getBoundingClientRect && e.getBoundingClientRect().width;
              return (
                s < i && s >= i - 1 && (i = Math.floor(s)),
                Math.max(
                  0,
                  i -
                    (t(e, "padding-left", !0) || 0) -
                    (t(e, "padding-right", !0) || 0)
                )
              );
            }
            if ("height" === i)
              return Math.max(
                0,
                Math.min(e.offsetHeight, e.scrollHeight) -
                  (t(e, "padding-top", !0) || 0) -
                  (t(e, "padding-bottom", !0) || 0)
              );
            let r = S.getComputedStyle(e, void 0);
            return (
              r &&
                ((o = r.getPropertyValue(i)),
                R(s, "opacity" !== i) && (o = C(o))),
              o
            );
          },
          insertItem: function (t, e) {
            let i;
            let s = t.options.index,
              o = e.length;
            for (i = t.options.isInternal ? o : 0; i < o + 1; i++)
              if (
                !e[i] ||
                (I(s) && s < R(e[i].options.index, e[i]._i)) ||
                e[i].options.isInternal
              ) {
                e.splice(i, 0, t);
                break;
              }
            return i;
          },
          isArray: P,
          isClass: E,
          isDOMElement: O,
          isFunction: function (t) {
            return "function" == typeof t;
          },
          isNumber: I,
          isObject: L,
          isString: A,
          merge: function (t, ...e) {
            let i,
              s = [t, ...e],
              o = {},
              r = function (t, e) {
                return (
                  "object" != typeof t && (t = {}),
                  G(e, function (i, s) {
                    "__proto__" !== s &&
                      "constructor" !== s &&
                      (!L(i, !0) || E(i) || O(i)
                        ? (t[s] = e[s])
                        : (t[s] = r(t[s] || {}, i)));
                  }),
                  t
                );
              };
            !0 === t && ((o = s[1]), (s = Array.prototype.slice.call(s, 2)));
            let a = s.length;
            for (i = 0; i < a; i++) o = r(o, s[i]);
            return o;
          },
          normalizeTickInterval: function (t, e, i, s, o) {
            let r,
              a = t;
            i = R(i, H(t));
            let n = t / i;
            for (
              !e &&
                ((e = o
                  ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]
                  : [1, 2, 2.5, 5, 10]),
                !1 === s &&
                  (1 === i
                    ? (e = e.filter(function (t) {
                        return t % 1 == 0;
                      }))
                    : i <= 0.1 && (e = [1 / i]))),
                r = 0;
              r < e.length &&
              ((a = e[r]),
              (!o || !(a * i >= t)) &&
                (o || !(n <= (e[r] + (e[r + 1] || e[r])) / 2)));
              r++
            );
            return X(a * i, -Math.round(Math.log(0.001) / Math.LN10));
          },
          objectEach: G,
          offset: function (t) {
            let e = M.documentElement,
              i =
                t.parentElement || t.parentNode
                  ? t.getBoundingClientRect()
                  : { top: 0, left: 0, width: 0, height: 0 };
            return {
              top: i.top + (S.pageYOffset || e.scrollTop) - (e.clientTop || 0),
              left:
                i.left + (S.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
              width: i.width,
              height: i.height,
            };
          },
          pad: function (t, e, i) {
            return (
              Array((e || 2) + 1 - String(t).replace("-", "").length).join(
                i || "0"
              ) + t
            );
          },
          pick: R,
          pInt: C,
          pushUnique: function (t, e) {
            return 0 > t.indexOf(e) && !!t.push(e);
          },
          relativeLength: function (t, e, i) {
            return /%$/.test(t)
              ? (e * parseFloat(t)) / 100 + (i || 0)
              : parseFloat(t);
          },
          removeEvent: Y,
          replaceNested: function (t, ...e) {
            let i, s;
            do for (s of ((i = t), e)) t = t.replace(s[0], s[1]);
            while (t !== i);
            return t;
          },
          splat: N,
          stableSort: function (t, e) {
            let i, s;
            let o = t.length;
            for (s = 0; s < o; s++) t[s].safeI = s;
            for (
              t.sort(function (t, s) {
                return 0 === (i = e(t, s)) ? t.safeI - s.safeI : i;
              }),
                s = 0;
              s < o;
              s++
            )
              delete t[s].safeI;
          },
          syncTimeout: function (t, e, i) {
            return e > 0 ? setTimeout(t, e, i) : (t.call(0, i), -1);
          },
          timeUnits: {
            millisecond: 1,
            second: 1e3,
            minute: 6e4,
            hour: 36e5,
            day: 864e5,
            week: 6048e5,
            month: 24192e5,
            year: 314496e5,
          },
          ucfirst: function (t) {
            return A(t)
              ? t.substring(0, 1).toUpperCase() + t.substring(1)
              : String(t);
          },
          uniqueKey: U,
          useSerialIds: function (e) {
            return (t = R(e, t));
          },
          wrap: function (t, e, i) {
            let s = t[e];
            t[e] = function () {
              let t = arguments,
                e = this;
              return i.apply(
                this,
                [
                  function () {
                    return s.apply(e, arguments.length ? arguments : t);
                  },
                ].concat([].slice.call(arguments))
              );
            };
          },
        },
        { pageLang: V, win: _ } = k,
        {
          defined: q,
          error: Z,
          extend: K,
          isNumber: J,
          isObject: Q,
          isString: tt,
          merge: te,
          objectEach: ti,
          pad: ts,
          splat: to,
          timeUnits: tr,
          ucfirst: ta,
        } = $,
        tn =
          k.isSafari && _.Intl && !_.Intl.DateTimeFormat.prototype.formatRange,
        th = (t) => void 0 === t.main,
        tl = (t) => ["D", "L", "M", "X", "J", "V", "S"].indexOf(t),
        td = class {
          constructor(t) {
            (this.options = { timezone: "UTC" }),
              (this.variableTimezone = !1),
              (this.Date = _.Date),
              this.update(t);
          }
          update(t = {}) {
            (this.dTLCache = {}), (this.options = t = te(!0, this.options, t));
            let { timezoneOffset: e, useUTC: i } = t;
            this.Date = t.Date || _.Date || Date;
            let s = t.timezone;
            q(i) && (s = i ? "UTC" : void 0),
              e && e % 60 == 0 && (s = "Etc/GMT" + (e > 0 ? "+" : "") + e / 60),
              (this.variableTimezone =
                "UTC" !== s && s?.indexOf("Etc/GMT") !== 0),
              (this.timezone = s),
              ["months", "shortMonths", "weekdays", "shortWeekdays"].forEach(
                (t) => {
                  let e = /months/i.test(t),
                    i = /short/.test(t),
                    s = { timeZone: "UTC" };
                  (s[e ? "month" : "weekday"] = i ? "short" : "long"),
                    (this[t] = (
                      e
                        ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                        : [3, 4, 5, 6, 7, 8, 9]
                    ).map((t) =>
                      this.dateFormat(s, (e ? 31 : 1) * 24 * 36e5 * t)
                    ));
                }
              );
          }
          toParts(t) {
            let [e, i, s, o, r, a, n] = this.dateTimeFormat(
              {
                weekday: "narrow",
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              },
              t,
              "es"
            ).split(/(?:, |\/|:)/g);
            return [
              o,
              +s - 1,
              i,
              r,
              a,
              n,
              Math.floor(Number(t) || 0) % 1e3,
              tl(e),
            ].map(Number);
          }
          dateTimeFormat(t, e, i = this.options.locale || V) {
            let s = JSON.stringify(t) + i;
            tt(t) && (t = this.str2dtf(t));
            let o = this.dTLCache[s];
            if (!o) {
              t.timeZone ?? (t.timeZone = this.timezone);
              try {
                o = new Intl.DateTimeFormat(i, t);
              } catch (e) {
                /Invalid time zone/i.test(e.message)
                  ? (Z(34),
                    (t.timeZone = "UTC"),
                    (o = new Intl.DateTimeFormat(i, t)))
                  : Z(e.message, !1);
              }
            }
            return (this.dTLCache[s] = o), o?.format(e) || "";
          }
          str2dtf(t, e = {}) {
            let i = {
              L: { fractionalSecondDigits: 3 },
              S: { second: "2-digit" },
              M: { minute: "numeric" },
              H: { hour: "2-digit" },
              k: { hour: "numeric" },
              E: { weekday: "narrow" },
              a: { weekday: "short" },
              A: { weekday: "long" },
              d: { day: "2-digit" },
              e: { day: "numeric" },
              b: { month: "short" },
              B: { month: "long" },
              m: { month: "2-digit" },
              o: { month: "numeric" },
              y: { year: "2-digit" },
              Y: { year: "numeric" },
            };
            return (
              Object.keys(i).forEach((s) => {
                -1 !== t.indexOf(s) && K(e, i[s]);
              }),
              e
            );
          }
          makeTime(t, e, i = 1, s = 0, o, r, a) {
            let n = this.Date.UTC(t, e, i, s, o || 0, r || 0, a || 0);
            if ("UTC" !== this.timezone) {
              let t = this.getTimezoneOffset(n);
              if (
                ((n += t),
                -1 !== [2, 3, 8, 9, 10, 11].indexOf(e) && (s < 5 || s > 20))
              ) {
                let e = this.getTimezoneOffset(n);
                t !== e
                  ? (n += e - t)
                  : t - 36e5 !== this.getTimezoneOffset(n - 36e5) ||
                    tn ||
                    (n -= 36e5);
              }
            }
            return n;
          }
          parse(t) {
            if (!tt(t)) return t ?? void 0;
            let e =
                (t = t.replace(/\//g, "-").replace(/(GMT|UTC)/, "")).indexOf(
                  "Z"
                ) > -1 || /([+-][0-9]{2}):?[0-9]{2}$/.test(t),
              i = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(t);
            e || i || (t += "Z");
            let s = Date.parse(t);
            if (J(s)) return s + (!e || i ? this.getTimezoneOffset(s) : 0);
          }
          getTimezoneOffset(t) {
            if ("UTC" !== this.timezone) {
              let [e, i, s, o, r = 0] = this.dateTimeFormat(
                  { timeZoneName: "shortOffset" },
                  t,
                  "en"
                )
                  .split(/(GMT|:)/)
                  .map(Number),
                a = -(36e5 * (s + r / 60));
              if (J(a)) return a;
            }
            return 0;
          }
          dateFormat(t, e, i) {
            let s = k.defaultOptions?.lang;
            if (!q(e) || isNaN(e)) return s?.invalidDate || "";
            if (tt((t = t ?? "%Y-%m-%d %H:%M:%S"))) {
              let i;
              let s = /%\[([a-zA-Z]+)\]/g;
              for (; (i = s.exec(t)); )
                t = t.replace(i[0], this.dateTimeFormat(i[1], e));
            }
            if (tt(t) && -1 !== t.indexOf("%")) {
              let i = this,
                [o, r, a, n, h, l, d, c] = this.toParts(e),
                p = s?.weekdays || this.weekdays,
                g = s?.shortWeekdays || this.shortWeekdays,
                u = s?.months || this.months,
                f = s?.shortMonths || this.shortMonths;
              ti(
                K(
                  {
                    a: g ? g[c] : p[c].substr(0, 3),
                    A: p[c],
                    d: ts(a),
                    e: ts(a, 2, " "),
                    w: c,
                    b: f[r],
                    B: u[r],
                    m: ts(r + 1),
                    o: r + 1,
                    y: o.toString().substr(2, 2),
                    Y: o,
                    H: ts(n),
                    k: n,
                    I: ts(n % 12 || 12),
                    l: n % 12 || 12,
                    M: ts(h),
                    p: n < 12 ? "AM" : "PM",
                    P: n < 12 ? "am" : "pm",
                    S: ts(l),
                    L: ts(d, 3),
                  },
                  k.dateFormats
                ),
                function (s, o) {
                  if (tt(t))
                    for (; -1 !== t.indexOf("%" + o); )
                      t = t.replace(
                        "%" + o,
                        "function" == typeof s ? s.call(i, e) : s
                      );
                }
              );
            } else if (Q(t)) {
              let i = (this.getTimezoneOffset(e) || 0) / 36e5,
                s = this.timezone || "Etc/GMT" + (i >= 0 ? "+" : "") + i,
                { prefix: o = "", suffix: r = "" } = t;
              t = o + this.dateTimeFormat(K({ timeZone: s }, t), e) + r;
            }
            return i ? ta(t) : t;
          }
          resolveDTLFormat(t) {
            return Q(t, !0)
              ? Q(t, !0) && th(t)
                ? { main: t }
                : t
              : { main: (t = to(t))[0], from: t[1], to: t[2] };
          }
          getTimeTicks(t, e, i, s) {
            let o = this,
              r = [],
              a = {},
              { count: n = 1, unitRange: h } = t,
              [l, d, c, p, g, u] = o.toParts(e),
              f = (e || 0) % 1e3,
              m;
            if ((s ?? (s = 1), q(e))) {
              if (
                ((f = h >= tr.second ? 0 : n * Math.floor(f / n)),
                h >= tr.second &&
                  (u = h >= tr.minute ? 0 : n * Math.floor(u / n)),
                h >= tr.minute &&
                  (g = h >= tr.hour ? 0 : n * Math.floor(g / n)),
                h >= tr.hour && (p = h >= tr.day ? 0 : n * Math.floor(p / n)),
                h >= tr.day &&
                  (c = h >= tr.month ? 1 : Math.max(1, n * Math.floor(c / n))),
                h >= tr.month && (d = h >= tr.year ? 0 : n * Math.floor(d / n)),
                h >= tr.year && (l -= l % n),
                h === tr.week)
              ) {
                n && (e = o.makeTime(l, d, c, p, g, u, f));
                let t = tl(
                  this.dateTimeFormat(
                    { timeZone: this.timezone, weekday: "narrow" },
                    e,
                    "es"
                  )
                );
                c += -t + s + (t < s ? -7 : 0);
              }
              (e = o.makeTime(l, d, c, p, g, u, f)),
                o.variableTimezone &&
                  q(i) &&
                  (m =
                    i - e > 4 * tr.month ||
                    o.getTimezoneOffset(e) !== o.getTimezoneOffset(i));
              let t = e,
                x = 1;
              for (; t < i; )
                r.push(t),
                  h === tr.year
                    ? (t = o.makeTime(l + x * n, 0))
                    : h === tr.month
                    ? (t = o.makeTime(l, d + x * n))
                    : m && (h === tr.day || h === tr.week)
                    ? (t = o.makeTime(l, d, c + x * n * (h === tr.day ? 1 : 7)))
                    : m && h === tr.hour && n > 1
                    ? (t = o.makeTime(l, d, c, p + x * n))
                    : (t += h * n),
                  x++;
              r.push(t),
                h <= tr.hour &&
                  r.length < 1e4 &&
                  r.forEach((t) => {
                    t % 18e5 == 0 &&
                      "000000000" === o.dateFormat("%H%M%S%L", t) &&
                      (a[t] = "day");
                  });
            }
            return (r.info = K(t, { higherRanks: a, totalRange: h * n })), r;
          }
          getDateFormat(t, e, i, s) {
            let o = this.dateFormat("%m-%d %H:%M:%S.%L", e),
              r = "01-01 00:00:00.000",
              a = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 },
              n = "millisecond",
              h = n;
            for (n in tr) {
              if (
                t === tr.week &&
                +this.dateFormat("%w", e) === i &&
                o.substr(6) === r.substr(6)
              ) {
                n = "week";
                break;
              }
              if (tr[n] > t) {
                n = h;
                break;
              }
              if (a[n] && o.substr(a[n]) !== r.substr(a[n])) break;
              "week" !== n && (h = n);
            }
            return this.resolveDTLFormat(s[n]).main;
          }
        },
        { isTouchDevice: tc } = k,
        { fireEvent: tp, merge: tg } = $,
        tu = {
          colors: [
            "#2caffe",
            "#544fc5",
            "#00e272",
            "#fe6a35",
            "#6b8abc",
            "#d568fb",
            "#2ee0ca",
            "#fa4b42",
            "#feb56a",
            "#91e8e1",
          ],
          symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
          lang: {
            locale: void 0,
            loading: "Loading...",
            months: void 0,
            shortMonths: void 0,
            weekdays: void 0,
            numericSymbols: ["k", "M", "G", "T", "P", "E"],
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
          },
          global: {
            buttonTheme: {
              fill: "#f7f7f7",
              padding: 8,
              r: 2,
              stroke: "#cccccc",
              "stroke-width": 1,
              style: {
                color: "#333333",
                cursor: "pointer",
                fontSize: "0.8em",
                fontWeight: "normal",
              },
              states: {
                hover: { fill: "#e6e6e6" },
                select: {
                  fill: "#e6e9ff",
                  style: { color: "#000000", fontWeight: "bold" },
                },
                disabled: { style: { color: "#cccccc" } },
              },
            },
          },
          time: {
            Date: void 0,
            timezone: "UTC",
            timezoneOffset: 0,
            useUTC: void 0,
          },
          chart: {
            alignThresholds: !1,
            panning: { enabled: !1, type: "x" },
            styledMode: !1,
            borderRadius: 0,
            colorCount: 10,
            allowMutatingData: !0,
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            resetZoomButton: { theme: {}, position: {} },
            reflow: !0,
            type: "line",
            zooming: {
              singleTouch: !1,
              resetButton: {
                theme: { zIndex: 6 },
                position: { align: "right", x: -10, y: 10 },
              },
            },
            width: null,
            height: null,
            borderColor: "#334eff",
            backgroundColor: "#ffffff",
            plotBorderColor: "#cccccc",
          },
          title: {
            style: { color: "#333333", fontWeight: "bold" },
            text: "Chart title",
            margin: 15,
            minScale: 0.67,
          },
          subtitle: {
            style: { color: "#666666", fontSize: "0.8em" },
            text: "",
          },
          caption: {
            margin: 15,
            style: { color: "#666666", fontSize: "0.8em" },
            text: "",
            align: "left",
            verticalAlign: "bottom",
          },
          plotOptions: {},
          legend: {
            enabled: !0,
            align: "center",
            alignColumns: !0,
            className: "highcharts-no-tooltip",
            events: {},
            layout: "horizontal",
            itemMarginBottom: 2,
            itemMarginTop: 2,
            labelFormatter: function () {
              return this.name;
            },
            borderColor: "#999999",
            borderRadius: 0,
            navigation: {
              style: { fontSize: "0.8em" },
              activeColor: "#0022ff",
              inactiveColor: "#cccccc",
            },
            itemStyle: {
              color: "#333333",
              cursor: "pointer",
              fontSize: "0.8em",
              textDecoration: "none",
              textOverflow: "ellipsis",
            },
            itemHoverStyle: { color: "#000000" },
            itemHiddenStyle: {
              color: "#666666",
              textDecoration: "line-through",
            },
            shadow: !1,
            itemCheckboxStyle: {
              position: "absolute",
              width: "13px",
              height: "13px",
            },
            squareSymbol: !0,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: { style: { fontSize: "0.8em", fontWeight: "bold" } },
          },
          loading: {
            labelStyle: {
              fontWeight: "bold",
              position: "relative",
              top: "45%",
            },
            style: {
              position: "absolute",
              backgroundColor: "#ffffff",
              opacity: 0.5,
              textAlign: "center",
            },
          },
          tooltip: {
            enabled: !0,
            animation: {
              duration: 300,
              easing: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)),
            },
            borderRadius: 3,
            dateTimeLabelFormats: {
              millisecond: "%[AebHMSL]",
              second: "%[AebHMS]",
              minute: "%[AebHM]",
              hour: "%[AebHM]",
              day: "%[AebY]",
              week: "Week from %[AebY]",
              month: "%[BY]",
              year: "%Y",
            },
            footerFormat: "",
            headerShape: "callout",
            hideDelay: 500,
            padding: 8,
            shape: "callout",
            shared: !1,
            snap: tc ? 25 : 10,
            headerFormat:
              '<span style="font-size: 0.8em">{ucfirst point.key}</span><br/>',
            pointFormat:
              '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
            backgroundColor: "#ffffff",
            borderWidth: void 0,
            shadow: !0,
            stickOnContact: !1,
            style: { color: "#333333", cursor: "default", fontSize: "0.8em" },
            useHTML: !1,
          },
          credits: {
            enabled: !0,
            href: "https://www.arismahmudi.my.id/",
            position: {
              align: "right",
              x: -10,
              verticalAlign: "bottom",
              y: -5,
            },
            style: { cursor: "pointer", color: "#999999", fontSize: "0.6em" },
            text: "arismahmudi.my.id",
          },
        },
        tf = new td(tu.time),
        tm = {
          defaultOptions: tu,
          defaultTime: tf,
          getOptions: function () {
            return tu;
          },
          setOptions: function (t) {
            return (
              tp(k, "setOptions", { options: t }),
              tg(!0, tu, t),
              t.time && tf.update(tu.time),
              t.lang &&
                "locale" in t.lang &&
                tf.update({ locale: t.lang.locale }),
              tu
            );
          },
        },
        { isNumber: tx, merge: ty, pInt: tb, defined: tv } = $;
      class tk {
        static parse(t) {
          return t ? new tk(t) : tk.None;
        }
        constructor(t) {
          let e, i, s, o;
          (this.rgba = [NaN, NaN, NaN, NaN]), (this.input = t);
          let r = k.Color;
          if (r && r !== tk) return new r(t);
          if ("object" == typeof t && void 0 !== t.stops)
            this.stops = t.stops.map((t) => new tk(t[1]));
          else if ("string" == typeof t)
            for (
              this.input = t = tk.names[t.toLowerCase()] || t,
                s = tk.parsers.length;
              s-- && !i;

            )
              (e = (o = tk.parsers[s]).regex.exec(t)) && (i = o.parse(e));
          i && (this.rgba = i);
        }
        get(t) {
          let e = this.input,
            i = this.rgba;
          if ("object" == typeof e && void 0 !== this.stops) {
            let i = ty(e);
            return (
              (i.stops = [].slice.call(i.stops)),
              this.stops.forEach((e, s) => {
                i.stops[s] = [i.stops[s][0], e.get(t)];
              }),
              i
            );
          }
          return i && tx(i[0])
            ? "rgb" !== t && (t || 1 !== i[3])
              ? "a" === t
                ? `${i[3]}`
                : "rgba(" + i.join(",") + ")"
              : "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")"
            : e;
        }
        brighten(t) {
          let e = this.rgba;
          if (this.stops)
            this.stops.forEach(function (e) {
              e.brighten(t);
            });
          else if (tx(t) && 0 !== t)
            for (let i = 0; i < 3; i++)
              (e[i] += tb(255 * t)),
                e[i] < 0 && (e[i] = 0),
                e[i] > 255 && (e[i] = 255);
          return this;
        }
        setOpacity(t) {
          return (this.rgba[3] = t), this;
        }
        tweenTo(t, e) {
          let i = this.rgba,
            s = t.rgba;
          if (!tx(i[0]) || !tx(s[0])) return t.input || "none";
          let o = 1 !== s[3] || 1 !== i[3],
            r = (t, s) => t + (i[s] - t) * (1 - e),
            a = s.slice(0, 3).map(r).map(Math.round);
          return (
            o && a.push(r(s[3], 3)), (o ? "rgba(" : "rgb(") + a.join(",") + ")"
          );
        }
      }
      (tk.names = { white: "#ffffff", black: "#000000" }),
        (tk.parsers = [
          {
            regex:
              /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/,
            parse: function (t) {
              return [tb(t[1]), tb(t[2]), tb(t[3]), parseFloat(t[4], 10)];
            },
          },
          {
            regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,
            parse: function (t) {
              return [tb(t[1]), tb(t[2]), tb(t[3]), 1];
            },
          },
          {
            regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i,
            parse: function (t) {
              return [
                tb(t[1] + t[1], 16),
                tb(t[2] + t[2], 16),
                tb(t[3] + t[3], 16),
                tv(t[4]) ? tb(t[4] + t[4], 16) / 255 : 1,
              ];
            },
          },
          {
            regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i,
            parse: function (t) {
              return [
                tb(t[1], 16),
                tb(t[2], 16),
                tb(t[3], 16),
                tv(t[4]) ? tb(t[4], 16) / 255 : 1,
              ];
            },
          },
        ]),
        (tk.None = new tk(""));
      let { parse: tw } = tk,
        { win: tM } = k,
        { isNumber: tS, objectEach: tT } = $;
      class tC {
        constructor(t, e, i) {
          (this.pos = NaN),
            (this.options = e),
            (this.elem = t),
            (this.prop = i);
        }
        dSetter() {
          let t = this.paths,
            e = t && t[0],
            i = t && t[1],
            s = this.now || 0,
            o = [];
          if (1 !== s && e && i) {
            if (e.length === i.length && s < 1)
              for (let t = 0; t < i.length; t++) {
                let r = e[t],
                  a = i[t],
                  n = [];
                for (let t = 0; t < a.length; t++) {
                  let e = r[t],
                    i = a[t];
                  tS(e) && tS(i) && !("A" === a[0] && (4 === t || 5 === t))
                    ? (n[t] = e + s * (i - e))
                    : (n[t] = i);
                }
                o.push(n);
              }
            else o = i;
          } else o = this.toD || [];
          this.elem.attr("d", o, void 0, !0);
        }
        update() {
          let t = this.elem,
            e = this.prop,
            i = this.now,
            s = this.options.step;
          this[e + "Setter"]
            ? this[e + "Setter"]()
            : t.attr
            ? t.element && t.attr(e, i, null, !0)
            : (t.style[e] = i + this.unit),
            s && s.call(t, i, this);
        }
        run(t, e, i) {
          let s = this,
            o = s.options,
            r = function (t) {
              return !r.stopped && s.step(t);
            },
            a =
              tM.requestAnimationFrame ||
              function (t) {
                setTimeout(t, 13);
              },
            n = function () {
              for (let t = 0; t < tC.timers.length; t++)
                tC.timers[t]() || tC.timers.splice(t--, 1);
              tC.timers.length && a(n);
            };
          t !== e || this.elem["forceAnimate:" + this.prop]
            ? ((this.startTime = +new Date()),
              (this.start = t),
              (this.end = e),
              (this.unit = i),
              (this.now = this.start),
              (this.pos = 0),
              (r.elem = this.elem),
              (r.prop = this.prop),
              r() && 1 === tC.timers.push(r) && a(n))
            : (delete o.curAnim[this.prop],
              o.complete &&
                0 === Object.keys(o.curAnim).length &&
                o.complete.call(this.elem));
        }
        step(t) {
          let e, i;
          let s = +new Date(),
            o = this.options,
            r = this.elem,
            a = o.complete,
            n = o.duration,
            h = o.curAnim;
          return (
            r.attr && !r.element
              ? (e = !1)
              : t || s >= n + this.startTime
              ? ((this.now = this.end),
                (this.pos = 1),
                this.update(),
                (h[this.prop] = !0),
                (i = !0),
                tT(h, function (t) {
                  !0 !== t && (i = !1);
                }),
                i && a && a.call(r),
                (e = !1))
              : ((this.pos = o.easing((s - this.startTime) / n)),
                (this.now = this.start + (this.end - this.start) * this.pos),
                this.update(),
                (e = !0)),
            e
          );
        }
        initPath(t, e, i) {
          let s = t.startX,
            o = t.endX,
            r = i.slice(),
            a = t.isArea,
            n = a ? 2 : 1,
            h = e && i.length > e.length && i.hasStackedCliffs,
            l,
            d,
            c,
            p,
            g = e && e.slice();
          if (!g || h) return [r, r];
          function u(t, e) {
            for (; t.length < d; ) {
              let i = t[0],
                s = e[d - t.length];
              if (
                (s &&
                  "M" === i[0] &&
                  ("C" === s[0]
                    ? (t[0] = ["C", i[1], i[2], i[1], i[2], i[1], i[2]])
                    : (t[0] = ["L", i[1], i[2]])),
                t.unshift(i),
                a)
              ) {
                let e = t.pop();
                t.push(t[t.length - 1], e);
              }
            }
          }
          function f(t) {
            for (; t.length < d; ) {
              let e = t[Math.floor(t.length / n) - 1].slice();
              if (("C" === e[0] && ((e[1] = e[5]), (e[2] = e[6])), a)) {
                let i = t[Math.floor(t.length / n)].slice();
                t.splice(t.length / 2, 0, e, i);
              } else t.push(e);
            }
          }
          if (s && o && o.length) {
            for (c = 0; c < s.length; c++) {
              if (s[c] === o[0]) {
                l = c;
                break;
              }
              if (s[0] === o[o.length - s.length + c]) {
                (l = c), (p = !0);
                break;
              }
              if (s[s.length - 1] === o[o.length - s.length + c]) {
                l = s.length - c;
                break;
              }
            }
            void 0 === l && (g = []);
          }
          return (
            g.length &&
              tS(l) &&
              ((d = r.length + l * n), p ? (u(g, r), f(r)) : (u(r, g), f(g))),
            [g, r]
          );
        }
        fillSetter() {
          tC.prototype.strokeSetter.apply(this, arguments);
        }
        strokeSetter() {
          this.elem.attr(
            this.prop,
            tw(this.start).tweenTo(tw(this.end), this.pos),
            void 0,
            !0
          );
        }
      }
      tC.timers = [];
      let {
        defined: tA,
        getStyle: tP,
        isArray: tL,
        isNumber: tO,
        isObject: tE,
        merge: tI,
        objectEach: tD,
        pick: tB,
      } = $;
      function tN(t) {
        return tE(t)
          ? tI({ duration: 500, defer: 0 }, t)
          : { duration: t ? 500 : 0, defer: 0 };
      }
      function tz(t, e) {
        let i = tC.timers.length;
        for (; i--; )
          tC.timers[i].elem !== t ||
            (e && e !== tC.timers[i].prop) ||
            (tC.timers[i].stopped = !0);
      }
      let tR = {
          animate: function (t, e, i) {
            let s,
              o = "",
              r,
              a,
              n;
            tE(i) ||
              ((n = arguments),
              (i = { duration: n[2], easing: n[3], complete: n[4] })),
              tO(i.duration) || (i.duration = 400),
              (i.easing =
                "function" == typeof i.easing
                  ? i.easing
                  : Math[i.easing] || Math.easeInOutSine),
              (i.curAnim = tI(e)),
              tD(e, function (n, h) {
                tz(t, h),
                  (a = new tC(t, i, h)),
                  (r = void 0),
                  "d" === h && tL(e.d)
                    ? ((a.paths = a.initPath(t, t.pathArray, e.d)),
                      (a.toD = e.d),
                      (s = 0),
                      (r = 1))
                    : t.attr
                    ? (s = t.attr(h))
                    : ((s = parseFloat(tP(t, h)) || 0),
                      "opacity" !== h && (o = "px")),
                  r || (r = n),
                  "string" == typeof r &&
                    r.match("px") &&
                    (r = r.replace(/px/g, "")),
                  a.run(s, r, o);
              });
          },
          animObject: tN,
          getDeferredAnimation: function (t, e, i) {
            let s = tN(e),
              o = i ? [i] : t.series,
              r = 0,
              a = 0;
            return (
              o.forEach((t) => {
                let i = tN(t.options.animation);
                (r =
                  tE(e) && tA(e.defer)
                    ? s.defer
                    : Math.max(r, i.duration + i.defer)),
                  (a = Math.min(s.duration, i.duration));
              }),
              t.renderer.forExport && (r = 0),
              { defer: Math.max(0, r - a), duration: Math.min(r, a) }
            );
          },
          setAnimation: function (t, e) {
            e.renderer.globalAnimation = tB(t, e.options.chart.animation, !0);
          },
          stop: tz,
        },
        { SVG_NS: tW, win: tH } = k,
        {
          attr: tX,
          createElement: tF,
          css: tG,
          error: tY,
          isFunction: tj,
          isString: tU,
          objectEach: t$,
          splat: tV,
        } = $,
        { trustedTypes: t_ } = tH,
        tq =
          t_ &&
          tj(t_.createPolicy) &&
          t_.createPolicy("highcharts", { createHTML: (t) => t }),
        tZ = tq ? tq.createHTML("") : "";
      class tK {
        static filterUserAttributes(t) {
          return (
            t$(t, (e, i) => {
              let s = !0;
              -1 === tK.allowedAttributes.indexOf(i) && (s = !1),
                -1 !==
                  ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(
                    i
                  ) &&
                  (s =
                    tU(e) &&
                    tK.allowedReferences.some((t) => 0 === e.indexOf(t))),
                s ||
                  (tY(33, !1, void 0, {
                    "Invalid attribute in config": `${i}`,
                  }),
                  delete t[i]),
                tU(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"));
            }),
            t
          );
        }
        static parseStyle(t) {
          return t.split(";").reduce((t, e) => {
            let i = e.split(":").map((t) => t.trim()),
              s = i.shift();
            return (
              s &&
                i.length &&
                (t[s.replace(/-([a-z])/g, (t) => t[1].toUpperCase())] =
                  i.join(":")),
              t
            );
          }, {});
        }
        static setElementHTML(t, e) {
          (t.innerHTML = tK.emptyHTML), e && new tK(e).addToDOM(t);
        }
        constructor(t) {
          this.nodes = "string" == typeof t ? this.parseMarkup(t) : t;
        }
        addToDOM(t) {
          return (function t(e, i) {
            let s;
            return (
              tV(e).forEach(function (e) {
                let o;
                let r = e.tagName,
                  a = e.textContent
                    ? k.doc.createTextNode(e.textContent)
                    : void 0,
                  n = tK.bypassHTMLFiltering;
                if (r) {
                  if ("#text" === r) o = a;
                  else if (-1 !== tK.allowedTags.indexOf(r) || n) {
                    let s = "svg" === r ? tW : i.namespaceURI || tW,
                      h = k.doc.createElementNS(s, r),
                      l = e.attributes || {};
                    t$(e, function (t, e) {
                      "tagName" !== e &&
                        "attributes" !== e &&
                        "children" !== e &&
                        "style" !== e &&
                        "textContent" !== e &&
                        (l[e] = t);
                    }),
                      tX(h, n ? l : tK.filterUserAttributes(l)),
                      e.style && tG(h, e.style),
                      a && h.appendChild(a),
                      t(e.children || [], h),
                      (o = h);
                  } else tY(33, !1, void 0, { "Invalid tagName in config": r });
                }
                o && i.appendChild(o), (s = o);
              }),
              s
            );
          })(this.nodes, t);
        }
        parseMarkup(t) {
          let e;
          let i = [];
          t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
          try {
            e = new DOMParser().parseFromString(
              tq ? tq.createHTML(t) : t,
              "text/html"
            );
          } catch (t) {}
          if (!e) {
            let i = tF("div");
            (i.innerHTML = t), (e = { body: i });
          }
          let s = (t, e) => {
            let i = t.nodeName.toLowerCase(),
              o = { tagName: i };
            "#text" === i && (o.textContent = t.textContent || "");
            let r = t.attributes;
            if (r) {
              let t = {};
              [].forEach.call(r, (e) => {
                "data-style" === e.name
                  ? (o.style = tK.parseStyle(e.value))
                  : (t[e.name] = e.value);
              }),
                (o.attributes = t);
            }
            if (t.childNodes.length) {
              let e = [];
              [].forEach.call(t.childNodes, (t) => {
                s(t, e);
              }),
                e.length && (o.children = e);
            }
            e.push(o);
          };
          return [].forEach.call(e.body.childNodes, (t) => s(t, i)), i;
        }
      }
      (tK.allowedAttributes = [
        "alt",
        "aria-controls",
        "aria-describedby",
        "aria-expanded",
        "aria-haspopup",
        "aria-hidden",
        "aria-label",
        "aria-labelledby",
        "aria-live",
        "aria-pressed",
        "aria-readonly",
        "aria-roledescription",
        "aria-selected",
        "class",
        "clip-path",
        "color",
        "colspan",
        "cx",
        "cy",
        "d",
        "dx",
        "dy",
        "disabled",
        "fill",
        "filterUnits",
        "flood-color",
        "flood-opacity",
        "height",
        "href",
        "id",
        "in",
        "in2",
        "markerHeight",
        "markerWidth",
        "offset",
        "opacity",
        "operator",
        "orient",
        "padding",
        "paddingLeft",
        "paddingRight",
        "patternUnits",
        "r",
        "radius",
        "refX",
        "refY",
        "role",
        "scope",
        "slope",
        "src",
        "startOffset",
        "stdDeviation",
        "stroke",
        "stroke-linecap",
        "stroke-width",
        "style",
        "tableValues",
        "result",
        "rowspan",
        "summary",
        "target",
        "tabindex",
        "text-align",
        "text-anchor",
        "textAnchor",
        "textLength",
        "title",
        "type",
        "valign",
        "width",
        "x",
        "x1",
        "x2",
        "xlink:href",
        "y",
        "y1",
        "y2",
        "zIndex",
      ]),
        (tK.allowedReferences = [
          "https://",
          "http://",
          "mailto:",
          "/",
          "../",
          "./",
          "#",
        ]),
        (tK.allowedTags = [
          "a",
          "abbr",
          "b",
          "br",
          "button",
          "caption",
          "circle",
          "clipPath",
          "code",
          "dd",
          "defs",
          "div",
          "dl",
          "dt",
          "em",
          "feComponentTransfer",
          "feComposite",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feMorphology",
          "feOffset",
          "feMerge",
          "feMergeNode",
          "filter",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "hr",
          "i",
          "img",
          "li",
          "linearGradient",
          "marker",
          "ol",
          "p",
          "path",
          "pattern",
          "pre",
          "rect",
          "small",
          "span",
          "stop",
          "strong",
          "style",
          "sub",
          "sup",
          "svg",
          "table",
          "text",
          "textPath",
          "thead",
          "title",
          "tbody",
          "tspan",
          "td",
          "th",
          "tr",
          "u",
          "ul",
          "#text",
        ]),
        (tK.emptyHTML = tZ),
        (tK.bypassHTMLFiltering = !1);
      let { defaultOptions: tJ, defaultTime: tQ } = tm,
        { pageLang: t0 } = k,
        {
          extend: t1,
          getNestedProperty: t2,
          isArray: t3,
          isNumber: t5,
          isObject: t6,
          isString: t9,
          pick: t4,
          ucfirst: t8,
        } = $,
        t7 = {
          add: (t, e) => t + e,
          divide: (t, e) => (0 !== e ? t / e : ""),
          eq: (t, e) => t == e,
          each: function (t) {
            let e = arguments[arguments.length - 1];
            return (
              !!t3(t) &&
              t
                .map((i, s) =>
                  ei(
                    e.body,
                    t1(t6(i) ? i : { "@this": i }, {
                      "@index": s,
                      "@first": 0 === s,
                      "@last": s === t.length - 1,
                    })
                  )
                )
                .join("")
            );
          },
          ge: (t, e) => t >= e,
          gt: (t, e) => t > e,
          if: (t) => !!t,
          le: (t, e) => t <= e,
          lt: (t, e) => t < e,
          multiply: (t, e) => t * e,
          ne: (t, e) => t != e,
          subtract: (t, e) => t - e,
          ucfirst: t8,
          unless: (t) => !t,
        },
        et = {},
        ee = (t) => /^["'].+["']$/.test(t);
      function ei(t = "", e, i) {
        let s = /\{([\p{L}\d:\.,;\-\/<>\[\]%_@+"'’= #\(\)]+)\}/gu,
          o = /\(([\p{L}\d:\.,;\-\/<>\[\]%_@+"'= ]+)\)/gu,
          r = [],
          a = /f$/,
          n = /\.(\d)/,
          h = i?.options.lang || tJ.lang,
          l = (i && i.time) || tQ,
          d = (i && i.numberFormatter) || es,
          c = (t = "") => {
            let i;
            return (
              "true" === t ||
              ("false" !== t &&
                ((i = Number(t)).toString() === t
                  ? i
                  : ee(t)
                  ? t.slice(1, -1)
                  : t2(t, e)))
            );
          },
          p,
          g,
          u = 0,
          f;
        for (; null !== (p = s.exec(t)); ) {
          let i = p,
            s = o.exec(p[1]);
          s && ((p = s), (f = !0)),
            (g && g.isBlock) ||
              (g = {
                ctx: e,
                expression: p[1],
                find: p[0],
                isBlock: "#" === p[1].charAt(0),
                start: p.index,
                startInner: p.index + p[0].length,
                length: p[0].length,
              });
          let a = (g.isBlock ? i : p)[1].split(" ")[0].replace("#", "");
          t7[a] && (g.isBlock && a === g.fn && u++, g.fn || (g.fn = a));
          let n = "else" === p[1];
          if (g.isBlock && g.fn && (p[1] === `/${g.fn}` || n)) {
            if (u) !n && u--;
            else {
              let e = g.startInner,
                i = t.substr(e, p.index - e);
              void 0 === g.body
                ? ((g.body = i), (g.startInner = p.index + p[0].length))
                : (g.elseBody = i),
                (g.find += i + p[0]),
                n || (r.push(g), (g = void 0));
            }
          } else g.isBlock || r.push(g);
          if (s && !g?.isBlock) break;
        }
        return (
          r.forEach((s) => {
            let r, p;
            let { body: g, elseBody: u, expression: f, fn: m } = s;
            if (m) {
              let t = [s],
                o = [],
                a = f.length,
                n = 0,
                h;
              for (p = 0; p <= a; p++) {
                let t = f.charAt(p);
                h || ('"' !== t && "'" !== t) ? h === t && (h = "") : (h = t),
                  h ||
                    (" " !== t && p !== a) ||
                    (o.push(f.substr(n, p - n)), (n = p + 1));
              }
              for (p = t7[m].length; p--; ) t.unshift(c(o[p + 1]));
              (r = t7[m].apply(e, t)),
                s.isBlock && "boolean" == typeof r && (r = ei(r ? g : u, e, i));
            } else {
              let t = ee(f) ? [f] : f.split(":");
              if (
                ((r = c(t.shift() || "")), t.length && "number" == typeof r)
              ) {
                let e = t.join(":");
                if (a.test(e)) {
                  let t = parseInt((e.match(n) || ["", "-1"])[1], 10);
                  null !== r &&
                    (r = d(
                      r,
                      t,
                      h.decimalPoint,
                      e.indexOf(",") > -1 ? h.thousandsSep : ""
                    ));
                } else r = l.dateFormat(e, r);
              }
              (o.lastIndex = 0), o.test(s.find) && t9(r) && (r = `"${r}"`);
            }
            t = t.replace(s.find, t4(r, ""));
          }),
          f ? ei(t, e, i) : t
        );
      }
      function es(t, e, i, s) {
        e = +e;
        let o,
          r,
          [a, n] = (t = +t || 0).toString().split("e").map(Number),
          h = this?.options?.lang || tJ.lang,
          l = (t.toString().split(".")[1] || "").split("e")[0].length,
          d = e,
          c = {};
        i ?? (i = h.decimalPoint),
          s ?? (s = h.thousandsSep),
          -1 === e
            ? (e = Math.min(l, 20))
            : t5(e)
            ? e &&
              n < 0 &&
              ((r = e + n) >= 0
                ? ((a = +a.toExponential(r).split("e")[0]), (e = r))
                : ((a = Math.floor(a)),
                  (t = e < 20 ? +(a * Math.pow(10, n)).toFixed(e) : 0),
                  (n = 0)))
            : (e = 2),
          n && (e ?? (e = 2), (t = a)),
          t5(e) &&
            e >= 0 &&
            ((c.minimumFractionDigits = e), (c.maximumFractionDigits = e)),
          "" === s && (c.useGrouping = !1);
        let p = s || i,
          g = p ? "en" : this?.locale || h.locale || t0,
          u = JSON.stringify(c) + g;
        return (
          (o = (et[u] ?? (et[u] = new Intl.NumberFormat(g, c))).format(t)),
          p &&
            (o = o
              .replace(/([,\.])/g, "_$1")
              .replace(/_\,/g, s ?? ",")
              .replace("_.", i ?? ".")),
          ((e || 0 != +o) && (!(n < 0) || d)) || (o = "0"),
          n && 0 != +o && (o += "e" + (n < 0 ? "" : "+") + n),
          o
        );
      }
      let eo = {
        dateFormat: function (t, e, i) {
          return tQ.dateFormat(t, e, i);
        },
        format: ei,
        helpers: t7,
        numberFormat: es,
      };
      !(function (t) {
        let e;
        (t.rendererTypes = {}),
          (t.getRendererType = function (i = e) {
            return t.rendererTypes[i] || t.rendererTypes[e];
          }),
          (t.registerRendererType = function (i, s, o) {
            (t.rendererTypes[i] = s), (!e || o) && ((e = i), (k.Renderer = s));
          });
      })(s || (s = {}));
      let er = s,
        { clamp: ea, pick: en, pushUnique: eh, stableSort: el } = $;
      (o || (o = {})).distribute = function t(e, i, s) {
        let o = e,
          r = o.reducedLen || i,
          a = (t, e) => t.target - e.target,
          n = [],
          h = e.length,
          l = [],
          d = n.push,
          c,
          p,
          g,
          u = !0,
          f,
          m,
          x = 0,
          y;
        for (c = h; c--; ) x += e[c].size;
        if (x > r) {
          for (
            el(e, (t, e) => (e.rank || 0) - (t.rank || 0)),
              g = (y = e[0].rank === e[e.length - 1].rank) ? h / 2 : -1,
              p = y ? g : h - 1;
            g && x > r;

          )
            (f = e[(c = Math.floor(p))]),
              eh(l, c) && (x -= f.size),
              (p += g),
              y && p >= e.length && ((g /= 2), (p = g));
          l.sort((t, e) => e - t).forEach((t) => d.apply(n, e.splice(t, 1)));
        }
        for (
          el(e, a),
            e = e.map((t) => ({
              size: t.size,
              targets: [t.target],
              align: en(t.align, 0.5),
            }));
          u;

        ) {
          for (c = e.length; c--; )
            (f = e[c]),
              (m =
                (Math.min.apply(0, f.targets) + Math.max.apply(0, f.targets)) /
                2),
              (f.pos = ea(m - f.size * f.align, 0, i - f.size));
          for (c = e.length, u = !1; c--; )
            c > 0 &&
              e[c - 1].pos + e[c - 1].size > e[c].pos &&
              ((e[c - 1].size += e[c].size),
              (e[c - 1].targets = e[c - 1].targets.concat(e[c].targets)),
              (e[c - 1].align = 0.5),
              e[c - 1].pos + e[c - 1].size > i &&
                (e[c - 1].pos = i - e[c - 1].size),
              e.splice(c, 1),
              (u = !0));
        }
        return (
          d.apply(o, n),
          (c = 0),
          e.some((e) => {
            let r = 0;
            return (e.targets || []).some(() =>
              ((o[c].pos = e.pos + r),
              void 0 !== s && Math.abs(o[c].pos - o[c].target) > s)
                ? (o.slice(0, c + 1).forEach((t) => delete t.pos),
                  (o.reducedLen = (o.reducedLen || i) - 0.1 * i),
                  o.reducedLen > 0.1 * i && t(o, i, s),
                  !0)
                : ((r += o[c].size), c++, !1)
            );
          }),
          el(o, a),
          o
        );
      };
      let ed = o,
        { animate: ec, animObject: ep, stop: eg } = tR,
        {
          deg2rad: eu,
          doc: ef,
          svg: em,
          SVG_NS: ex,
          win: ey,
          isFirefox: eb,
        } = k,
        {
          addEvent: ev,
          attr: ek,
          createElement: ew,
          crisp: eM,
          css: eS,
          defined: eT,
          erase: eC,
          extend: eA,
          fireEvent: eP,
          getAlignFactor: eL,
          isArray: eO,
          isFunction: eE,
          isNumber: eI,
          isObject: eD,
          isString: eB,
          merge: eN,
          objectEach: ez,
          pick: eR,
          pInt: eW,
          pushUnique: eH,
          replaceNested: eX,
          syncTimeout: eF,
          uniqueKey: eG,
        } = $;
      class eY {
        _defaultGetter(t) {
          let e = eR(
            this[t + "Value"],
            this[t],
            this.element ? this.element.getAttribute(t) : null,
            0
          );
          return /^-?[\d\.]+$/.test(e) && (e = parseFloat(e)), e;
        }
        _defaultSetter(t, e, i) {
          i.setAttribute(e, t);
        }
        add(t) {
          let e;
          let i = this.renderer,
            s = this.element;
          return (
            t && (this.parentGroup = t),
            void 0 !== this.textStr &&
              "text" === this.element.nodeName &&
              i.buildText(this),
            (this.added = !0),
            (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()),
            e || (t ? t.element : i.box).appendChild(s),
            this.onAdd && this.onAdd(),
            this
          );
        }
        addClass(t, e) {
          let i = e ? "" : this.attr("class") || "";
          return (
            (t = (t || "")
              .split(/ /g)
              .reduce(
                function (t, e) {
                  return -1 === i.indexOf(e) && t.push(e), t;
                },
                i ? [i] : []
              )
              .join(" ")) !== i && this.attr("class", t),
            this
          );
        }
        afterSetters() {
          this.doTransform && (this.updateTransform(), (this.doTransform = !1));
        }
        align(t, e, i, s = !0) {
          let o = this.renderer,
            r = o.alignedObjects,
            a = !!t;
          t
            ? ((this.alignOptions = t),
              (this.alignByTranslate = e),
              (this.alignTo = i))
            : ((t = this.alignOptions || {}),
              (e = this.alignByTranslate),
              (i = this.alignTo));
          let n = !i || eB(i) ? i || "renderer" : void 0;
          n && (a && eH(r, this), (i = void 0));
          let h = eR(i, o[n], o),
            l =
              (h.x || 0) +
              (t.x || 0) +
              ((h.width || 0) - (t.width || 0)) * eL(t.align),
            d =
              (h.y || 0) +
              (t.y || 0) +
              ((h.height || 0) - (t.height || 0)) * eL(t.verticalAlign),
            c = { "text-align": t?.align };
          return (
            (c[e ? "translateX" : "x"] = Math.round(l)),
            (c[e ? "translateY" : "y"] = Math.round(d)),
            s &&
              (this[this.placed ? "animate" : "attr"](c), (this.placed = !0)),
            (this.alignAttr = c),
            this
          );
        }
        alignSetter(t) {
          let e = { left: "start", center: "middle", right: "end" };
          e[t] &&
            ((this.alignValue = t),
            this.element.setAttribute("text-anchor", e[t]));
        }
        animate(t, e, i) {
          let s = ep(eR(e, this.renderer.globalAnimation, !0)),
            o = s.defer;
          return (
            ef.hidden && (s.duration = 0),
            0 !== s.duration
              ? (i && (s.complete = i),
                eF(() => {
                  this.element && ec(this, t, s);
                }, o))
              : (this.attr(t, void 0, i || s.complete),
                ez(
                  t,
                  function (t, e) {
                    s.step &&
                      s.step.call(this, t, { prop: e, pos: 1, elem: this });
                  },
                  this
                )),
            this
          );
        }
        applyTextOutline(t) {
          let e = this.element;
          -1 !== t.indexOf("contrast") &&
            (t = t.replace(
              /contrast/g,
              this.renderer.getContrast(e.style.fill)
            ));
          let i = t.split(" "),
            s = i[i.length - 1],
            o = i[0];
          if (o && "none" !== o && k.svg) {
            (this.fakeTS = !0),
              (o = o.replace(/(^[\d\.]+)(.*?)$/g, function (t, e, i) {
                return 2 * Number(e) + i;
              })),
              this.removeTextOutline();
            let t = ef.createElementNS(ex, "tspan");
            ek(t, {
              class: "highcharts-text-outline",
              fill: s,
              stroke: s,
              "stroke-width": o,
              "stroke-linejoin": "round",
            });
            let i = e.querySelector("textPath") || e;
            [].forEach.call(i.childNodes, (e) => {
              let i = e.cloneNode(!0);
              i.removeAttribute &&
                ["fill", "stroke", "stroke-width", "stroke"].forEach((t) =>
                  i.removeAttribute(t)
                ),
                t.appendChild(i);
            });
            let r = 0;
            [].forEach.call(i.querySelectorAll("text tspan"), (t) => {
              r += Number(t.getAttribute("dy"));
            });
            let a = ef.createElementNS(ex, "tspan");
            (a.textContent = "​"),
              ek(a, { x: Number(e.getAttribute("x")), dy: -r }),
              t.appendChild(a),
              i.insertBefore(t, i.firstChild);
          }
        }
        attr(t, e, i, s) {
          let { element: o } = this,
            r = eY.symbolCustomAttribs,
            a,
            n,
            h = this,
            l;
          return (
            "string" == typeof t &&
              void 0 !== e &&
              ((a = t), ((t = {})[a] = e)),
            "string" == typeof t
              ? (h = (this[t + "Getter"] || this._defaultGetter).call(
                  this,
                  t,
                  o
                ))
              : (ez(
                  t,
                  function (e, i) {
                    (l = !1),
                      s || eg(this, i),
                      this.symbolName &&
                        -1 !== r.indexOf(i) &&
                        (n || (this.symbolAttr(t), (n = !0)), (l = !0)),
                      this.rotation &&
                        ("x" === i || "y" === i) &&
                        (this.doTransform = !0),
                      l ||
                        (this[i + "Setter"] || this._defaultSetter).call(
                          this,
                          e,
                          i,
                          o
                        );
                  },
                  this
                ),
                this.afterSetters()),
            i && i.call(this),
            h
          );
        }
        clip(t) {
          if (t && !t.clipPath) {
            let e = eG() + "-",
              i = this.renderer
                .createElement("clipPath")
                .attr({ id: e })
                .add(this.renderer.defs);
            eA(t, { clipPath: i, id: e, count: 0 }), t.add(i);
          }
          return this.attr(
            "clip-path",
            t ? `url(${this.renderer.url}#${t.id})` : "none"
          );
        }
        crisp(t, e) {
          e = Math.round(e || t.strokeWidth || 0);
          let i = t.x || this.x || 0,
            s = t.y || this.y || 0,
            o = (t.width || this.width || 0) + i,
            r = (t.height || this.height || 0) + s,
            a = eM(i, e),
            n = eM(s, e);
          return (
            eA(t, { x: a, y: n, width: eM(o, e) - a, height: eM(r, e) - n }),
            eT(t.strokeWidth) && (t.strokeWidth = e),
            t
          );
        }
        complexColor(t, e, i) {
          let s = this.renderer,
            o,
            r,
            a,
            n,
            h,
            l,
            d,
            c,
            p,
            g,
            u = [],
            f;
          eP(this.renderer, "complexColor", { args: arguments }, function () {
            if (
              (t.radialGradient
                ? (r = "radialGradient")
                : t.linearGradient && (r = "linearGradient"),
              r)
            ) {
              if (
                ((a = t[r]),
                (h = s.gradients),
                (l = t.stops),
                (p = i.radialReference),
                eO(a) &&
                  (t[r] = a =
                    {
                      x1: a[0],
                      y1: a[1],
                      x2: a[2],
                      y2: a[3],
                      gradientUnits: "userSpaceOnUse",
                    }),
                "radialGradient" === r &&
                  p &&
                  !eT(a.gradientUnits) &&
                  ((n = a),
                  (a = eN(a, s.getRadialAttr(p, n), {
                    gradientUnits: "userSpaceOnUse",
                  }))),
                ez(a, function (t, e) {
                  "id" !== e && u.push(e, t);
                }),
                ez(l, function (t) {
                  u.push(t);
                }),
                h[(u = u.join(","))])
              )
                g = h[u].attr("id");
              else {
                a.id = g = eG();
                let t = (h[u] = s.createElement(r).attr(a).add(s.defs));
                (t.radAttr = n),
                  (t.stops = []),
                  l.forEach(function (e) {
                    0 === e[1].indexOf("rgba")
                      ? ((d = (o = tk.parse(e[1])).get("rgb")),
                        (c = o.get("a")))
                      : ((d = e[1]), (c = 1));
                    let i = s
                      .createElement("stop")
                      .attr({
                        offset: e[0],
                        "stop-color": d,
                        "stop-opacity": c,
                      })
                      .add(t);
                    t.stops.push(i);
                  });
              }
              (f = "url(" + s.url + "#" + g + ")"),
                i.setAttribute(e, f),
                (i.gradient = u),
                (t.toString = function () {
                  return f;
                });
            }
          });
        }
        css(t) {
          let e = this.styles,
            i = {},
            s = this.element,
            o,
            r = !e;
          if (
            (e &&
              ez(t, function (t, s) {
                e && e[s] !== t && ((i[s] = t), (r = !0));
              }),
            r)
          ) {
            e && (t = eA(e, i)),
              null === t.width || "auto" === t.width
                ? delete this.textWidth
                : "text" === s.nodeName.toLowerCase() &&
                  t.width &&
                  (o = this.textWidth = eW(t.width)),
              eA(this.styles, t),
              o && !em && this.renderer.forExport && delete t.width;
            let r = (eb && t.fontSize) || null;
            r && (eI(r) || /^\d+$/.test(r)) && (t.fontSize += "px");
            let a = eN(t);
            s.namespaceURI === this.SVG_NS &&
              (["textOutline", "textOverflow", "whiteSpace", "width"].forEach(
                (t) => a && delete a[t]
              ),
              a.color && (a.fill = a.color)),
              eS(s, a);
          }
          return (
            this.added &&
              ("text" === this.element.nodeName &&
                this.renderer.buildText(this),
              t.textOutline && this.applyTextOutline(t.textOutline)),
            this
          );
        }
        dashstyleSetter(t) {
          let e,
            i = this["stroke-width"];
          if (("inherit" === i && (i = 1), (t = t && t.toLowerCase()))) {
            let s = t
              .replace("shortdashdotdot", "3,1,1,1,1,1,")
              .replace("shortdashdot", "3,1,1,1")
              .replace("shortdot", "1,1,")
              .replace("shortdash", "3,1,")
              .replace("longdash", "8,3,")
              .replace(/dot/g, "1,3,")
              .replace("dash", "4,3,")
              .replace(/,$/, "")
              .split(",");
            for (e = s.length; e--; ) s[e] = "" + eW(s[e]) * eR(i, NaN);
            (t = s.join(",").replace(/NaN/g, "none")),
              this.element.setAttribute("stroke-dasharray", t);
          }
        }
        destroy() {
          let t = this,
            e = t.element || {},
            i = t.renderer,
            s = e.ownerSVGElement,
            o = ("SPAN" === e.nodeName && t.parentGroup) || void 0,
            r,
            a;
          if (
            ((e.onclick =
              e.onmouseout =
              e.onmouseover =
              e.onmousemove =
              e.point =
                null),
            eg(t),
            t.clipPath && s)
          ) {
            let e = t.clipPath;
            [].forEach.call(
              s.querySelectorAll("[clip-path],[CLIP-PATH]"),
              function (t) {
                t.getAttribute("clip-path").indexOf(e.element.id) > -1 &&
                  t.removeAttribute("clip-path");
              }
            ),
              (t.clipPath = e.destroy());
          }
          if (((t.connector = t.connector?.destroy()), t.stops)) {
            for (a = 0; a < t.stops.length; a++) t.stops[a].destroy();
            (t.stops.length = 0), (t.stops = void 0);
          }
          for (
            t.safeRemoveChild(e);
            o && o.div && 0 === o.div.childNodes.length;

          )
            (r = o.parentGroup),
              t.safeRemoveChild(o.div),
              delete o.div,
              (o = r);
          t.alignOptions && eC(i.alignedObjects, t),
            ez(t, function (e, i) {
              t[i] && t[i].parentGroup === t && t[i].destroy && t[i].destroy(),
                delete t[i];
            });
        }
        dSetter(t, e, i) {
          eO(t) &&
            ("string" == typeof t[0] && (t = this.renderer.pathToSegments(t)),
            (this.pathArray = t),
            (t = t.reduce(
              (t, e, i) =>
                e && e.join
                  ? (i ? t + " " : "") + e.join(" ")
                  : (e || "").toString(),
              ""
            ))),
            /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"),
            this[e] !== t && (i.setAttribute(e, t), (this[e] = t));
        }
        fillSetter(t, e, i) {
          "string" == typeof t
            ? i.setAttribute(e, t)
            : t && this.complexColor(t, e, i);
        }
        hrefSetter(t, e, i) {
          i.setAttributeNS("http://www.w3.org/1999/xlink", e, t);
        }
        getBBox(t, e) {
          let i, s, o, r;
          let {
              alignValue: a,
              element: n,
              renderer: h,
              styles: l,
              textStr: d,
            } = this,
            { cache: c, cacheKeys: p } = h,
            g = n.namespaceURI === this.SVG_NS,
            u = eR(e, this.rotation, 0),
            f = h.styledMode
              ? n && eY.prototype.getStyle.call(n, "font-size")
              : l.fontSize;
          if (
            (eT(d) &&
              (-1 === (r = d.toString()).indexOf("<") &&
                (r = r.replace(/\d/g, "0")),
              (r += [
                "",
                h.rootFontSize,
                f,
                u,
                this.textWidth,
                a,
                l.lineClamp,
                l.textOverflow,
                l.fontWeight,
              ].join(","))),
            r && !t && (i = c[r]),
            !i || i.polygon)
          ) {
            if (g || h.forExport) {
              try {
                (o =
                  this.fakeTS &&
                  function (t) {
                    let e = n.querySelector(".highcharts-text-outline");
                    e && eS(e, { display: t });
                  }),
                  eE(o) && o("none"),
                  (i = n.getBBox
                    ? eA({}, n.getBBox())
                    : {
                        width: n.offsetWidth,
                        height: n.offsetHeight,
                        x: 0,
                        y: 0,
                      }),
                  eE(o) && o("");
              } catch (t) {}
              (!i || i.width < 0) && (i = { x: 0, y: 0, width: 0, height: 0 });
            } else i = this.htmlGetBBox();
            (s = i.height),
              g &&
                (i.height = s =
                  { "11px,17": 14, "13px,20": 16 }[
                    `${f || ""},${Math.round(s)}`
                  ] || s),
              u && (i = this.getRotatedBox(i, u));
            let t = { bBox: i };
            eP(this, "afterGetBBox", t), (i = t.bBox);
          }
          if (r && ("" === d || i.height > 0)) {
            for (; p.length > 250; ) delete c[p.shift()];
            c[r] || p.push(r), (c[r] = i);
          }
          return i;
        }
        getRotatedBox(t, e) {
          let { x: i, y: s, width: o, height: r } = t,
            {
              alignValue: a,
              translateY: n,
              rotationOriginX: h = 0,
              rotationOriginY: l = 0,
            } = this,
            d = eL(a),
            c = Number(this.element.getAttribute("y") || 0) - (n ? 0 : s),
            p = e * eu,
            g = (e - 90) * eu,
            u = Math.cos(p),
            f = Math.sin(p),
            m = o * u,
            x = o * f,
            y = Math.cos(g),
            b = Math.sin(g),
            [[v, k], [w, M]] = [h, l].map((t) => [t - t * u, t * f]),
            S = i + d * (o - m) + v + M + c * y,
            T = S + m,
            C = T - r * y,
            A = C - m,
            P = s + c - d * x - k + w + c * b,
            L = P + x,
            O = L - r * b,
            E = O - x,
            I = Math.min(S, T, C, A),
            D = Math.min(P, L, O, E),
            B = Math.max(S, T, C, A) - I,
            N = Math.max(P, L, O, E) - D;
          return {
            x: I,
            y: D,
            width: B,
            height: N,
            polygon: [
              [S, P],
              [T, L],
              [C, O],
              [A, E],
            ],
          };
        }
        getStyle(t) {
          return ey
            .getComputedStyle(this.element || this, "")
            .getPropertyValue(t);
        }
        hasClass(t) {
          return -1 !== ("" + this.attr("class")).split(" ").indexOf(t);
        }
        hide() {
          return this.attr({ visibility: "hidden" });
        }
        htmlGetBBox() {
          return { height: 0, width: 0, x: 0, y: 0 };
        }
        constructor(t, e) {
          (this.onEvents = {}),
            (this.opacity = 1),
            (this.SVG_NS = ex),
            (this.element =
              "span" === e || "body" === e
                ? ew(e)
                : ef.createElementNS(this.SVG_NS, e)),
            (this.renderer = t),
            (this.styles = {}),
            eP(this, "afterInit");
        }
        on(t, e) {
          let { onEvents: i } = this;
          return i[t] && i[t](), (i[t] = ev(this.element, t, e)), this;
        }
        opacitySetter(t, e, i) {
          let s = Number(Number(t).toFixed(3));
          (this.opacity = s), i.setAttribute(e, s);
        }
        reAlign() {
          this.alignOptions?.width &&
            "left" !== this.alignOptions.align &&
            ((this.alignOptions.width = this.getBBox().width),
            (this.placed = !1),
            this.align());
        }
        removeClass(t) {
          return this.attr(
            "class",
            ("" + this.attr("class"))
              .replace(eB(t) ? RegExp(`(^| )${t}( |$)`) : t, " ")
              .replace(/ +/g, " ")
              .trim()
          );
        }
        removeTextOutline() {
          let t = this.element.querySelector("tspan.highcharts-text-outline");
          t && this.safeRemoveChild(t);
        }
        safeRemoveChild(t) {
          let e = t.parentNode;
          e && e.removeChild(t);
        }
        setRadialReference(t) {
          let e =
            this.element.gradient &&
            this.renderer.gradients[this.element.gradient];
          return (
            (this.element.radialReference = t),
            e &&
              e.radAttr &&
              e.animate(this.renderer.getRadialAttr(t, e.radAttr)),
            this
          );
        }
        shadow(t) {
          let { renderer: e } = this,
            i = eN(
              this.parentGroup?.rotation === 90
                ? { offsetX: -1, offsetY: -1 }
                : {},
              eD(t) ? t : {}
            ),
            s = e.shadowDefinition(i);
          return this.attr({ filter: t ? `url(${e.url}#${s})` : "none" });
        }
        show(t = !0) {
          return this.attr({ visibility: t ? "inherit" : "visible" });
        }
        "stroke-widthSetter"(t, e, i) {
          (this[e] = t), i.setAttribute(e, t);
        }
        strokeWidth() {
          if (!this.renderer.styledMode) return this["stroke-width"] || 0;
          let t = this.getStyle("stroke-width"),
            e = 0,
            i;
          return (
            /px$/.test(t)
              ? (e = eW(t))
              : "" !== t &&
                (ek((i = ef.createElementNS(ex, "rect")), {
                  width: t,
                  "stroke-width": 0,
                }),
                this.element.parentNode.appendChild(i),
                (e = i.getBBox().width),
                i.parentNode.removeChild(i)),
            e
          );
        }
        symbolAttr(t) {
          let e = this;
          eY.symbolCustomAttribs.forEach(function (i) {
            e[i] = eR(t[i], e[i]);
          }),
            e.attr({
              d: e.renderer.symbols[e.symbolName](
                e.x,
                e.y,
                e.width,
                e.height,
                e
              ),
            });
        }
        textSetter(t) {
          t !== this.textStr &&
            (delete this.textPxLength,
            (this.textStr = t),
            this.added && this.renderer.buildText(this),
            this.reAlign());
        }
        titleSetter(t) {
          let e = this.element,
            i =
              e.getElementsByTagName("title")[0] ||
              ef.createElementNS(this.SVG_NS, "title");
          e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i),
            (i.textContent = eX(eR(t, ""), [/<[^>]*>/g, ""])
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">"));
        }
        toFront() {
          let t = this.element;
          return t.parentNode.appendChild(t), this;
        }
        translate(t, e) {
          return this.attr({ translateX: t, translateY: e });
        }
        updateTransform(t = "transform") {
          let {
              element: e,
              matrix: i,
              rotation: s = 0,
              rotationOriginX: o,
              rotationOriginY: r,
              scaleX: a,
              scaleY: n,
              translateX: h = 0,
              translateY: l = 0,
            } = this,
            d = ["translate(" + h + "," + l + ")"];
          eT(i) && d.push("matrix(" + i.join(",") + ")"),
            s &&
              (d.push(
                "rotate(" +
                  s +
                  " " +
                  eR(o, e.getAttribute("x"), 0) +
                  " " +
                  eR(r, e.getAttribute("y") || 0) +
                  ")"
              ),
              this.text?.element.tagName === "SPAN" &&
                this.text.attr({
                  rotation: s,
                  rotationOriginX: (o || 0) - this.padding,
                  rotationOriginY: (r || 0) - this.padding,
                })),
            (eT(a) || eT(n)) &&
              d.push("scale(" + eR(a, 1) + " " + eR(n, 1) + ")"),
            d.length &&
              !(this.text || this).textPath &&
              e.setAttribute(t, d.join(" "));
        }
        visibilitySetter(t, e, i) {
          "inherit" === t
            ? i.removeAttribute(e)
            : this[e] !== t && i.setAttribute(e, t),
            (this[e] = t);
        }
        xGetter(t) {
          return (
            "circle" === this.element.nodeName &&
              ("x" === t ? (t = "cx") : "y" === t && (t = "cy")),
            this._defaultGetter(t)
          );
        }
        zIndexSetter(t, e) {
          let i = this.renderer,
            s = this.parentGroup,
            o = (s || i).element || i.box,
            r = this.element,
            a = o === i.box,
            n,
            h,
            l,
            d = !1,
            c,
            p = this.added,
            g;
          if (
            (eT(t)
              ? (r.setAttribute("data-z-index", t),
                (t = +t),
                this[e] === t && (p = !1))
              : eT(this[e]) && r.removeAttribute("data-z-index"),
            (this[e] = t),
            p)
          ) {
            for (
              (t = this.zIndex) && s && (s.handleZ = !0),
                g = (n = o.childNodes).length - 1;
              g >= 0 && !d;
              g--
            )
              (c = !eT((l = (h = n[g]).getAttribute("data-z-index")))),
                h !== r &&
                  (t < 0 && c && !a && !g
                    ? (o.insertBefore(r, n[g]), (d = !0))
                    : (eW(l) <= t || (c && (!eT(t) || t >= 0))) &&
                      (o.insertBefore(r, n[g + 1]), (d = !0)));
            d || (o.insertBefore(r, n[a ? 3 : 0]), (d = !0));
          }
          return d;
        }
      }
      (eY.symbolCustomAttribs = [
        "anchorX",
        "anchorY",
        "clockwise",
        "end",
        "height",
        "innerR",
        "r",
        "start",
        "width",
        "x",
        "y",
      ]),
        (eY.prototype.strokeSetter = eY.prototype.fillSetter),
        (eY.prototype.yGetter = eY.prototype.xGetter),
        (eY.prototype.matrixSetter =
          eY.prototype.rotationOriginXSetter =
          eY.prototype.rotationOriginYSetter =
          eY.prototype.rotationSetter =
          eY.prototype.scaleXSetter =
          eY.prototype.scaleYSetter =
          eY.prototype.translateXSetter =
          eY.prototype.translateYSetter =
          eY.prototype.verticalAlignSetter =
            function (t, e) {
              (this[e] = t), (this.doTransform = !0);
            });
      let ej = eY,
        {
          defined: eU,
          extend: e$,
          getAlignFactor: eV,
          isNumber: e_,
          merge: eq,
          pick: eZ,
          removeEvent: eK,
        } = $;
      class eJ extends ej {
        constructor(t, e, i, s, o, r, a, n, h, l) {
          let d;
          super(t, "g"),
            (this.paddingLeftSetter = this.paddingSetter),
            (this.paddingRightSetter = this.paddingSetter),
            (this.doUpdate = !1),
            (this.textStr = e),
            (this.x = i),
            (this.y = s),
            (this.anchorX = r),
            (this.anchorY = a),
            (this.baseline = h),
            (this.className = l),
            this.addClass(
              "button" === l ? "highcharts-no-tooltip" : "highcharts-label"
            ),
            l && this.addClass("highcharts-" + l),
            (this.text = t.text(void 0, 0, 0, n).attr({ zIndex: 1 })),
            "string" == typeof o &&
              ((d = /^url\((.*?)\)$/.test(o)) || this.renderer.symbols[o]) &&
              (this.symbolKey = o),
            (this.bBox = eJ.emptyBBox),
            (this.padding = 3),
            (this.baselineOffset = 0),
            (this.needsBox = t.styledMode || d),
            (this.deferredAttr = {}),
            (this.alignFactor = 0);
        }
        alignSetter(t) {
          let e = eV(t);
          (this.textAlign = t),
            e !== this.alignFactor &&
              ((this.alignFactor = e),
              this.bBox &&
                e_(this.xSetting) &&
                this.attr({ x: this.xSetting }));
        }
        anchorXSetter(t, e) {
          (this.anchorX = t),
            this.boxAttr(
              e,
              Math.round(t) - this.getCrispAdjust() - this.xSetting
            );
        }
        anchorYSetter(t, e) {
          (this.anchorY = t), this.boxAttr(e, t - this.ySetting);
        }
        boxAttr(t, e) {
          this.box ? this.box.attr(t, e) : (this.deferredAttr[t] = e);
        }
        css(t) {
          if (t) {
            let e = {};
            (t = eq(t)),
              eJ.textProps.forEach((i) => {
                void 0 !== t[i] && ((e[i] = t[i]), delete t[i]);
              }),
              this.text.css(e),
              "fontSize" in e || "fontWeight" in e
                ? this.updateTextPadding()
                : ("width" in e || "textOverflow" in e) && this.updateBoxSize();
          }
          return ej.prototype.css.call(this, t);
        }
        destroy() {
          eK(this.element, "mouseenter"),
            eK(this.element, "mouseleave"),
            this.text && this.text.destroy(),
            this.box && (this.box = this.box.destroy()),
            ej.prototype.destroy.call(this);
        }
        fillSetter(t, e) {
          t && (this.needsBox = !0), (this.fill = t), this.boxAttr(e, t);
        }
        getBBox(t, e) {
          this.textStr &&
            0 === this.bBox.width &&
            0 === this.bBox.height &&
            this.updateBoxSize();
          let {
              padding: i,
              height: s = 0,
              translateX: o = 0,
              translateY: r = 0,
              width: a = 0,
            } = this,
            n = eZ(this.paddingLeft, i),
            h = e ?? (this.rotation || 0),
            l = {
              width: a,
              height: s,
              x: o + this.bBox.x - n,
              y: r + this.bBox.y - i + this.baselineOffset,
            };
          return h && (l = this.getRotatedBox(l, h)), l;
        }
        getCrispAdjust() {
          return (
            ((this.renderer.styledMode && this.box
              ? this.box.strokeWidth()
              : this["stroke-width"]
              ? parseInt(this["stroke-width"], 10)
              : 0) %
              2) /
            2
          );
        }
        heightSetter(t) {
          (this.heightSetting = t), (this.doUpdate = !0);
        }
        afterSetters() {
          super.afterSetters(),
            this.doUpdate && (this.updateBoxSize(), (this.doUpdate = !1));
        }
        onAdd() {
          this.text.add(this),
            this.attr({
              text: eZ(this.textStr, ""),
              x: this.x || 0,
              y: this.y || 0,
            }),
            this.box &&
              eU(this.anchorX) &&
              this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
        }
        paddingSetter(t, e) {
          e_(t)
            ? t !== this[e] && ((this[e] = t), this.updateTextPadding())
            : (this[e] = void 0);
        }
        rSetter(t, e) {
          this.boxAttr(e, t);
        }
        strokeSetter(t, e) {
          (this.stroke = t), this.boxAttr(e, t);
        }
        "stroke-widthSetter"(t, e) {
          t && (this.needsBox = !0),
            (this["stroke-width"] = t),
            this.boxAttr(e, t);
        }
        "text-alignSetter"(t) {
          (this.textAlign = this["text-align"] = t), this.updateTextPadding();
        }
        textSetter(t) {
          void 0 !== t && this.text.attr({ text: t }),
            this.updateTextPadding(),
            this.reAlign();
        }
        updateBoxSize() {
          let t;
          let e = this.text,
            i = {},
            s = this.padding,
            o = (this.bBox =
              (!e_(this.widthSetting) ||
                !e_(this.heightSetting) ||
                this.textAlign) &&
              eU(e.textStr)
                ? e.getBBox(void 0, 0)
                : eJ.emptyBBox);
          (this.width = this.getPaddedWidth()),
            (this.height = (this.heightSetting || o.height || 0) + 2 * s);
          let r = this.renderer.fontMetrics(e);
          if (
            ((this.baselineOffset =
              s +
              Math.min((this.text.firstLineMetrics || r).b, o.height || 1 / 0)),
            this.heightSetting &&
              (this.baselineOffset += (this.heightSetting - r.h) / 2),
            this.needsBox && !e.textPath)
          ) {
            if (!this.box) {
              let t = (this.box = this.symbolKey
                ? this.renderer.symbol(this.symbolKey)
                : this.renderer.rect());
              t.addClass(
                ("button" === this.className ? "" : "highcharts-label-box") +
                  (this.className
                    ? " highcharts-" + this.className + "-box"
                    : "")
              ),
                t.add(this);
            }
            (t = this.getCrispAdjust()),
              (i.x = t),
              (i.y = (this.baseline ? -this.baselineOffset : 0) + t),
              (i.width = Math.round(this.width)),
              (i.height = Math.round(this.height)),
              this.box.attr(e$(i, this.deferredAttr)),
              (this.deferredAttr = {});
          }
        }
        updateTextPadding() {
          let t = this.text,
            e = t.styles.textAlign || this.textAlign;
          if (!t.textPath) {
            this.updateBoxSize();
            let i = this.baseline ? 0 : this.baselineOffset,
              s =
                (this.paddingLeft ?? this.padding) +
                eV(e) * (this.widthSetting ?? this.bBox.width);
            (s !== t.x || i !== t.y) &&
              (t.attr({ align: e, x: s }), void 0 !== i && t.attr("y", i)),
              (t.x = s),
              (t.y = i);
          }
        }
        widthSetter(t) {
          (this.widthSetting = e_(t) ? t : void 0), (this.doUpdate = !0);
        }
        getPaddedWidth() {
          let t = this.padding,
            e = eZ(this.paddingLeft, t),
            i = eZ(this.paddingRight, t);
          return (this.widthSetting || this.bBox.width || 0) + e + i;
        }
        xSetter(t) {
          (this.x = t),
            this.alignFactor &&
              ((t -= this.alignFactor * this.getPaddedWidth()),
              (this["forceAnimate:x"] = !0)),
            (this.xSetting = Math.round(t)),
            this.attr("translateX", this.xSetting);
        }
        ySetter(t) {
          (this.ySetting = this.y = Math.round(t)),
            this.attr("translateY", this.ySetting);
        }
      }
      (eJ.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }),
        (eJ.textProps = [
          "color",
          "direction",
          "fontFamily",
          "fontSize",
          "fontStyle",
          "fontWeight",
          "lineClamp",
          "lineHeight",
          "textAlign",
          "textDecoration",
          "textOutline",
          "textOverflow",
          "whiteSpace",
          "width",
        ]);
      let { defined: eQ, isNumber: e0, pick: e1 } = $;
      function e2(t, e, i, s, o) {
        let r = [];
        if (o) {
          let a = o.start || 0,
            n = e1(o.r, i),
            h = e1(o.r, s || i),
            l = 2e-4 / (o.borderRadius ? 1 : Math.max(n, 1)),
            d = Math.abs((o.end || 0) - a - 2 * Math.PI) < l,
            c = (o.end || 0) - (d ? l : 0),
            p = o.innerR,
            g = e1(o.open, d),
            u = Math.cos(a),
            f = Math.sin(a),
            m = Math.cos(c),
            x = Math.sin(c),
            y = e1(o.longArc, c - a - Math.PI < l ? 0 : 1),
            b = ["A", n, h, 0, y, e1(o.clockwise, 1), t + n * m, e + h * x];
          (b.params = { start: a, end: c, cx: t, cy: e }),
            r.push(["M", t + n * u, e + h * f], b),
            eQ(p) &&
              (((b = [
                "A",
                p,
                p,
                0,
                y,
                eQ(o.clockwise) ? 1 - o.clockwise : 0,
                t + p * u,
                e + p * f,
              ]).params = { start: c, end: a, cx: t, cy: e }),
              r.push(
                g ? ["M", t + p * m, e + p * x] : ["L", t + p * m, e + p * x],
                b
              )),
            g || r.push(["Z"]);
        }
        return r;
      }
      function e3(t, e, i, s, o) {
        return o && o.r
          ? e5(t, e, i, s, o)
          : [
              ["M", t, e],
              ["L", t + i, e],
              ["L", t + i, e + s],
              ["L", t, e + s],
              ["Z"],
            ];
      }
      function e5(t, e, i, s, o) {
        let r = o?.r || 0;
        return [
          ["M", t + r, e],
          ["L", t + i - r, e],
          ["A", r, r, 0, 0, 1, t + i, e + r],
          ["L", t + i, e + s - r],
          ["A", r, r, 0, 0, 1, t + i - r, e + s],
          ["L", t + r, e + s],
          ["A", r, r, 0, 0, 1, t, e + s - r],
          ["L", t, e + r],
          ["A", r, r, 0, 0, 1, t + r, e],
          ["Z"],
        ];
      }
      let e6 = {
          arc: e2,
          callout: function (t, e, i, s, o) {
            let r = Math.min((o && o.r) || 0, i, s),
              a = r + 6,
              n = o && o.anchorX,
              h = (o && o.anchorY) || 0,
              l = e5(t, e, i, s, { r });
            if (!e0(n) || (n < i && n > 0 && h < s && h > 0)) return l;
            if (t + n > i - a) {
              if (h > e + a && h < e + s - a)
                l.splice(
                  3,
                  1,
                  ["L", t + i, h - 6],
                  ["L", t + i + 6, h],
                  ["L", t + i, h + 6],
                  ["L", t + i, e + s - r]
                );
              else if (n < i) {
                let o = h < e + a,
                  d = o ? e : e + s;
                l.splice(o ? 2 : 5, 0, ["L", n, h], ["L", t + i - r, d]);
              } else
                l.splice(
                  3,
                  1,
                  ["L", t + i, s / 2],
                  ["L", n, h],
                  ["L", t + i, s / 2],
                  ["L", t + i, e + s - r]
                );
            } else if (t + n < a) {
              if (h > e + a && h < e + s - a)
                l.splice(
                  7,
                  1,
                  ["L", t, h + 6],
                  ["L", t - 6, h],
                  ["L", t, h - 6],
                  ["L", t, e + r]
                );
              else if (n > 0) {
                let i = h < e + a,
                  o = i ? e : e + s;
                l.splice(i ? 1 : 6, 0, ["L", n, h], ["L", t + r, o]);
              } else
                l.splice(
                  7,
                  1,
                  ["L", t, s / 2],
                  ["L", n, h],
                  ["L", t, s / 2],
                  ["L", t, e + r]
                );
            } else
              h > s && n < i - a
                ? l.splice(
                    5,
                    1,
                    ["L", n + 6, e + s],
                    ["L", n, e + s + 6],
                    ["L", n - 6, e + s],
                    ["L", t + r, e + s]
                  )
                : h < 0 &&
                  n > a &&
                  l.splice(
                    1,
                    1,
                    ["L", n - 6, e],
                    ["L", n, e - 6],
                    ["L", n + 6, e],
                    ["L", i - r, e]
                  );
            return l;
          },
          circle: function (t, e, i, s) {
            return e2(t + i / 2, e + s / 2, i / 2, s / 2, {
              start: 0.5 * Math.PI,
              end: 2.5 * Math.PI,
              open: !1,
            });
          },
          diamond: function (t, e, i, s) {
            return [
              ["M", t + i / 2, e],
              ["L", t + i, e + s / 2],
              ["L", t + i / 2, e + s],
              ["L", t, e + s / 2],
              ["Z"],
            ];
          },
          rect: e3,
          roundedRect: e5,
          square: e3,
          triangle: function (t, e, i, s) {
            return [
              ["M", t + i / 2, e],
              ["L", t + i, e + s],
              ["L", t, e + s],
              ["Z"],
            ];
          },
          "triangle-down": function (t, e, i, s) {
            return [
              ["M", t, e],
              ["L", t + i, e],
              ["L", t + i / 2, e + s],
              ["Z"],
            ];
          },
        },
        { doc: e9, SVG_NS: e4, win: e8 } = k,
        {
          attr: e7,
          extend: it,
          fireEvent: ie,
          isString: ii,
          objectEach: is,
          pick: io,
        } = $,
        ir = (t, e) => t.substring(0, e) + "…",
        ia = class {
          constructor(t) {
            let e = t.styles;
            (this.renderer = t.renderer),
              (this.svgElement = t),
              (this.width = t.textWidth),
              (this.textLineHeight = e && e.lineHeight),
              (this.textOutline = e && e.textOutline),
              (this.ellipsis = !!(e && "ellipsis" === e.textOverflow)),
              (this.lineClamp = e?.lineClamp),
              (this.noWrap = !!(e && "nowrap" === e.whiteSpace));
          }
          buildSVG() {
            let t = this.svgElement,
              e = t.element,
              i = t.renderer,
              s = io(t.textStr, "").toString(),
              o = -1 !== s.indexOf("<"),
              r = e.childNodes,
              a = !t.added && i.box,
              n = [
                s,
                this.ellipsis,
                this.noWrap,
                this.textLineHeight,
                this.textOutline,
                t.getStyle("font-size"),
                t.styles.lineClamp,
                this.width,
              ].join(",");
            if (n !== t.textCache) {
              (t.textCache = n), delete t.actualWidth;
              for (let t = r.length; t--; ) e.removeChild(r[t]);
              if (
                o ||
                this.ellipsis ||
                this.width ||
                t.textPath ||
                (-1 !== s.indexOf(" ") && (!this.noWrap || /<br.*?>/g.test(s)))
              ) {
                if ("" !== s) {
                  a && a.appendChild(e);
                  let i = new tK(s);
                  this.modifyTree(i.nodes),
                    i.addToDOM(e),
                    this.modifyDOM(),
                    this.ellipsis &&
                      -1 !== (e.textContent || "").indexOf("…") &&
                      t.attr(
                        "title",
                        this.unescapeEntities(t.textStr || "", ["&lt;", "&gt;"])
                      ),
                    a && a.removeChild(e);
                }
              } else e.appendChild(e9.createTextNode(this.unescapeEntities(s)));
              ii(this.textOutline) &&
                t.applyTextOutline &&
                t.applyTextOutline(this.textOutline);
            }
          }
          modifyDOM() {
            let t;
            let e = this.svgElement,
              i = e7(e.element, "x");
            for (e.firstLineMetrics = void 0; (t = e.element.firstChild); )
              if (/^[\s\u200B]*$/.test(t.textContent || " "))
                e.element.removeChild(t);
              else break;
            [].forEach.call(
              e.element.querySelectorAll("tspan.highcharts-br"),
              (t, s) => {
                t.nextSibling &&
                  t.previousSibling &&
                  (0 === s &&
                    1 === t.previousSibling.nodeType &&
                    (e.firstLineMetrics = e.renderer.fontMetrics(
                      t.previousSibling
                    )),
                  e7(t, { dy: this.getLineHeight(t.nextSibling), x: i }));
              }
            );
            let s = this.width || 0;
            if (!s) return;
            let o = (t, o) => {
                let r = t.textContent || "",
                  a = r.replace(/([^\^])-/g, "$1- ").split(" "),
                  n =
                    !this.noWrap &&
                    (a.length > 1 || e.element.childNodes.length > 1),
                  h = this.getLineHeight(o),
                  l = Math.max(0, s - 0.8 * h),
                  d = 0,
                  c = e.actualWidth;
                if (n) {
                  let r = [],
                    n = [];
                  for (; o.firstChild && o.firstChild !== t; )
                    n.push(o.firstChild), o.removeChild(o.firstChild);
                  for (; a.length; )
                    if (
                      (a.length &&
                        !this.noWrap &&
                        d > 0 &&
                        (r.push(t.textContent || ""),
                        (t.textContent = a.join(" ").replace(/- /g, "-"))),
                      this.truncate(
                        t,
                        void 0,
                        a,
                        (0 === d && c) || 0,
                        s,
                        l,
                        (t, e) => a.slice(0, e).join(" ").replace(/- /g, "-")
                      ),
                      (c = e.actualWidth),
                      d++,
                      this.lineClamp && d >= this.lineClamp)
                    ) {
                      a.length &&
                        (this.truncate(
                          t,
                          t.textContent || "",
                          void 0,
                          0,
                          s,
                          l,
                          ir
                        ),
                        (t.textContent =
                          t.textContent?.replace("…", "") + "…"));
                      break;
                    }
                  n.forEach((e) => {
                    o.insertBefore(e, t);
                  }),
                    r.forEach((e) => {
                      o.insertBefore(e9.createTextNode(e), t);
                      let s = e9.createElementNS(e4, "tspan");
                      (s.textContent = "​"),
                        e7(s, { dy: h, x: i }),
                        o.insertBefore(s, t);
                    });
                } else
                  this.ellipsis &&
                    r &&
                    this.truncate(t, r, void 0, 0, s, l, ir);
              },
              r = (t) => {
                [].slice.call(t.childNodes).forEach((i) => {
                  i.nodeType === e8.Node.TEXT_NODE
                    ? o(i, t)
                    : (-1 !== i.className.baseVal.indexOf("highcharts-br") &&
                        (e.actualWidth = 0),
                      r(i));
                });
              };
            r(e.element);
          }
          getLineHeight(t) {
            let e = t.nodeType === e8.Node.TEXT_NODE ? t.parentElement : t;
            return this.textLineHeight
              ? parseInt(this.textLineHeight.toString(), 10)
              : this.renderer.fontMetrics(e || this.svgElement.element).h;
          }
          modifyTree(t) {
            let e = (i, s) => {
              let {
                  attributes: o = {},
                  children: r,
                  style: a = {},
                  tagName: n,
                } = i,
                h = this.renderer.styledMode;
              if (
                ("b" === n || "strong" === n
                  ? h
                    ? (o.class = "highcharts-strong")
                    : (a.fontWeight = "bold")
                  : ("i" === n || "em" === n) &&
                    (h
                      ? (o.class = "highcharts-emphasized")
                      : (a.fontStyle = "italic")),
                a && a.color && (a.fill = a.color),
                "br" === n)
              ) {
                (o.class = "highcharts-br"), (i.textContent = "​");
                let e = t[s + 1];
                e &&
                  e.textContent &&
                  (e.textContent = e.textContent.replace(/^ +/gm, ""));
              } else
                "a" === n &&
                  r &&
                  r.some((t) => "#text" === t.tagName) &&
                  (i.children = [{ children: r, tagName: "tspan" }]);
              "#text" !== n && "a" !== n && (i.tagName = "tspan"),
                it(i, { attributes: o, style: a }),
                r && r.filter((t) => "#text" !== t.tagName).forEach(e);
            };
            t.forEach(e), ie(this.svgElement, "afterModifyTree", { nodes: t });
          }
          truncate(t, e, i, s, o, r, a) {
            let n, h;
            let l = this.svgElement,
              { rotation: d } = l,
              c = [],
              p = i && !s ? 1 : 0,
              g = (e || i || "").length,
              u = g;
            i || (o = r);
            let f = function (e, o) {
              let r = o || e,
                a = t.parentNode;
              if (a && void 0 === c[r] && a.getSubStringLength)
                try {
                  c[r] = s + a.getSubStringLength(0, i ? r + 1 : r);
                } catch (t) {}
              return c[r];
            };
            if (((l.rotation = 0), s + (h = f(t.textContent.length)) > o)) {
              for (; p <= g; )
                (u = Math.ceil((p + g) / 2)),
                  i && (n = a(i, u)),
                  (h = f(u, n && n.length - 1)),
                  p === g ? (p = g + 1) : h > o ? (g = u - 1) : (p = u);
              0 === g
                ? (t.textContent = "")
                : (e && g === e.length - 1) ||
                  (t.textContent = n || a(e || i, u)),
                this.ellipsis &&
                  h > o &&
                  this.truncate(t, t.textContent || "", void 0, 0, o, r, ir);
            }
            i && i.splice(0, u), (l.actualWidth = h), (l.rotation = d);
          }
          unescapeEntities(t, e) {
            return (
              is(this.renderer.escapes, function (i, s) {
                (e && -1 !== e.indexOf(i)) ||
                  (t = t.toString().replace(RegExp(i, "g"), s));
              }),
              t
            );
          }
        },
        { defaultOptions: ih } = tm,
        {
          charts: il,
          deg2rad: id,
          doc: ic,
          isFirefox: ip,
          isMS: ig,
          isWebKit: iu,
          noop: im,
          SVG_NS: ix,
          symbolSizes: iy,
          win: ib,
        } = k,
        {
          addEvent: iv,
          attr: ik,
          createElement: iw,
          crisp: iM,
          css: iS,
          defined: iT,
          destroyObjectProperties: iC,
          extend: iA,
          isArray: iP,
          isNumber: iL,
          isObject: iO,
          isString: iE,
          merge: iI,
          pick: iD,
          pInt: iB,
          replaceNested: iN,
          uniqueKey: iz,
        } = $;
      class iR {
        constructor(t, e, i, s, o, r, a) {
          let n, h;
          let l = this.createElement("svg").attr({
              version: "1.1",
              class: "highcharts-root",
            }),
            d = l.element;
          a || l.css(this.getStyle(s || {})),
            t.appendChild(d),
            ik(t, "dir", "ltr"),
            -1 === t.innerHTML.indexOf("xmlns") && ik(d, "xmlns", this.SVG_NS),
            (this.box = d),
            (this.boxWrapper = l),
            (this.alignedObjects = []),
            (this.url = this.getReferenceURL()),
            this.createElement("desc")
              .add()
              .element.appendChild(
                ic.createTextNode("Created with Highcharts 12.1.2")
              ),
            (this.defs = this.createElement("defs").add()),
            (this.allowHTML = r),
            (this.forExport = o),
            (this.styledMode = a),
            (this.gradients = {}),
            (this.cache = {}),
            (this.cacheKeys = []),
            (this.imgCount = 0),
            (this.rootFontSize = l.getStyle("font-size")),
            this.setSize(e, i, !1),
            ip &&
              t.getBoundingClientRect &&
              ((n = function () {
                iS(t, { left: 0, top: 0 }),
                  (h = t.getBoundingClientRect()),
                  iS(t, {
                    left: Math.ceil(h.left) - h.left + "px",
                    top: Math.ceil(h.top) - h.top + "px",
                  });
              })(),
              (this.unSubPixelFix = iv(ib, "resize", n)));
        }
        definition(t) {
          return new tK([t]).addToDOM(this.defs.element);
        }
        getReferenceURL() {
          if ((ip || iu) && ic.getElementsByTagName("base").length) {
            if (!iT(e)) {
              let t = iz(),
                i = new tK([
                  {
                    tagName: "svg",
                    attributes: { width: 8, height: 8 },
                    children: [
                      {
                        tagName: "defs",
                        children: [
                          {
                            tagName: "clipPath",
                            attributes: { id: t },
                            children: [
                              {
                                tagName: "rect",
                                attributes: { width: 4, height: 4 },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        tagName: "rect",
                        attributes: {
                          id: "hitme",
                          width: 8,
                          height: 8,
                          "clip-path": `url(#${t})`,
                          fill: "rgba(0,0,0,0.001)",
                        },
                      },
                    ],
                  },
                ]).addToDOM(ic.body);
              iS(i, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
              let s = ic.elementFromPoint(6, 6);
              (e = "hitme" === (s && s.id)), ic.body.removeChild(i);
            }
            if (e)
              return iN(
                ib.location.href.split("#")[0],
                [/<[^>]*>/g, ""],
                [/([\('\)])/g, "\\$1"],
                [/ /g, "%20"]
              );
          }
          return "";
        }
        getStyle(t) {
          return (
            (this.style = iA(
              {
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: "1rem",
              },
              t
            )),
            this.style
          );
        }
        setStyle(t) {
          this.boxWrapper.css(this.getStyle(t));
        }
        isHidden() {
          return !this.boxWrapper.getBBox().width;
        }
        destroy() {
          let t = this.defs;
          return (
            (this.box = null),
            (this.boxWrapper = this.boxWrapper.destroy()),
            iC(this.gradients || {}),
            (this.gradients = null),
            (this.defs = t.destroy()),
            this.unSubPixelFix && this.unSubPixelFix(),
            (this.alignedObjects = null),
            null
          );
        }
        createElement(t) {
          return new this.Element(this, t);
        }
        getRadialAttr(t, e) {
          return {
            cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
            cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
            r: (e.r || 0) * t[2],
          };
        }
        shadowDefinition(t) {
          let e = [
              `highcharts-drop-shadow-${this.chartIndex}`,
              ...Object.keys(t).map((e) => `${e}-${t[e]}`),
            ]
              .join("-")
              .toLowerCase()
              .replace(/[^a-z\d\-]/g, ""),
            i = iI(
              {
                color: "#000000",
                offsetX: 1,
                offsetY: 1,
                opacity: 0.15,
                width: 5,
              },
              t
            );
          return (
            this.defs.element.querySelector(`#${e}`) ||
              this.definition({
                tagName: "filter",
                attributes: { id: e, filterUnits: i.filterUnits },
                children: this.getShadowFilterContent(i),
              }),
            e
          );
        }
        getShadowFilterContent(t) {
          return [
            {
              tagName: "feDropShadow",
              attributes: {
                dx: t.offsetX,
                dy: t.offsetY,
                "flood-color": t.color,
                "flood-opacity": Math.min(5 * t.opacity, 1),
                stdDeviation: t.width / 2,
              },
            },
          ];
        }
        buildText(t) {
          new ia(t).buildSVG();
        }
        getContrast(t) {
          let e = tk.parse(t).rgba.map((t) => {
              let e = t / 255;
              return e <= 0.03928
                ? e / 12.92
                : Math.pow((e + 0.055) / 1.055, 2.4);
            }),
            i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
          return 1.05 / (i + 0.05) > (i + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
        }
        button(t, e, i, s, o = {}, r, a, n, h, l) {
          let d = this.label(t, e, i, h, void 0, void 0, l, void 0, "button"),
            c = this.styledMode,
            p = arguments,
            g = 0;
          (o = iI(ih.global.buttonTheme, o)),
            c && (delete o.fill, delete o.stroke, delete o["stroke-width"]);
          let u = o.states || {},
            f = o.style || {};
          delete o.states, delete o.style;
          let m = [tK.filterUserAttributes(o)],
            x = [f];
          return (
            c ||
              ["hover", "select", "disabled"].forEach((t, e) => {
                m.push(
                  iI(m[0], tK.filterUserAttributes(p[e + 5] || u[t] || {}))
                ),
                  x.push(m[e + 1].style),
                  delete m[e + 1].style;
              }),
            iv(d.element, ig ? "mouseover" : "mouseenter", function () {
              3 !== g && d.setState(1);
            }),
            iv(d.element, ig ? "mouseout" : "mouseleave", function () {
              3 !== g && d.setState(g);
            }),
            (d.setState = (t = 0) => {
              if (
                (1 !== t && (d.state = g = t),
                d
                  .removeClass(
                    /highcharts-button-(normal|hover|pressed|disabled)/
                  )
                  .addClass(
                    "highcharts-button-" +
                      ["normal", "hover", "pressed", "disabled"][t]
                  ),
                !c)
              ) {
                d.attr(m[t]);
                let e = x[t];
                iO(e) && d.css(e);
              }
            }),
            d.attr(m[0]),
            !c &&
              (d.css(iA({ cursor: "default" }, f)),
              l && d.text.css({ pointerEvents: "none" })),
            d
              .on("touchstart", (t) => t.stopPropagation())
              .on("click", function (t) {
                3 !== g && s.call(d, t);
              })
          );
        }
        crispLine(t, e) {
          let [i, s] = t;
          return (
            iT(i[1]) && i[1] === s[1] && (i[1] = s[1] = iM(i[1], e)),
            iT(i[2]) && i[2] === s[2] && (i[2] = s[2] = iM(i[2], e)),
            t
          );
        }
        path(t) {
          let e = this.styledMode ? {} : { fill: "none" };
          return (
            iP(t) ? (e.d = t) : iO(t) && iA(e, t),
            this.createElement("path").attr(e)
          );
        }
        circle(t, e, i) {
          let s = iO(t) ? t : void 0 === t ? {} : { x: t, y: e, r: i },
            o = this.createElement("circle");
          return (
            (o.xSetter = o.ySetter =
              function (t, e, i) {
                i.setAttribute("c" + e, t);
              }),
            o.attr(s)
          );
        }
        arc(t, e, i, s, o, r) {
          let a;
          iO(t)
            ? ((e = (a = t).y),
              (i = a.r),
              (s = a.innerR),
              (o = a.start),
              (r = a.end),
              (t = a.x))
            : (a = { innerR: s, start: o, end: r });
          let n = this.symbol("arc", t, e, i, i, a);
          return (n.r = i), n;
        }
        rect(t, e, i, s, o, r) {
          let a = iO(t)
              ? t
              : void 0 === t
              ? {}
              : {
                  x: t,
                  y: e,
                  r: o,
                  width: Math.max(i || 0, 0),
                  height: Math.max(s || 0, 0),
                },
            n = this.createElement("rect");
          return (
            this.styledMode ||
              (void 0 !== r && ((a["stroke-width"] = r), iA(a, n.crisp(a))),
              (a.fill = "none")),
            (n.rSetter = function (t, e, i) {
              (n.r = t), ik(i, { rx: t, ry: t });
            }),
            (n.rGetter = function () {
              return n.r || 0;
            }),
            n.attr(a)
          );
        }
        roundedRect(t) {
          return this.symbol("roundedRect").attr(t);
        }
        setSize(t, e, i) {
          (this.width = t),
            (this.height = e),
            this.boxWrapper.animate(
              { width: t, height: e },
              {
                step: function () {
                  this.attr({
                    viewBox:
                      "0 0 " + this.attr("width") + " " + this.attr("height"),
                  });
                },
                duration: iD(i, !0) ? void 0 : 0,
              }
            ),
            this.alignElements();
        }
        g(t) {
          let e = this.createElement("g");
          return t ? e.attr({ class: "highcharts-" + t }) : e;
        }
        image(t, e, i, s, o, r) {
          let a = { preserveAspectRatio: "none" };
          iL(e) && (a.x = e),
            iL(i) && (a.y = i),
            iL(s) && (a.width = s),
            iL(o) && (a.height = o);
          let n = this.createElement("image").attr(a),
            h = function (e) {
              n.attr({ href: t }), r.call(n, e);
            };
          if (r) {
            n.attr({
              href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            });
            let e = new ib.Image();
            iv(e, "load", h), (e.src = t), e.complete && h({});
          } else n.attr({ href: t });
          return n;
        }
        symbol(t, e, i, s, o, r) {
          let a, n, h, l;
          let d = this,
            c = /^url\((.*?)\)$/,
            p = c.test(t),
            g = !p && (this.symbols[t] ? t : "circle"),
            u = g && this.symbols[g];
          if (u)
            "number" == typeof e &&
              (n = u.call(this.symbols, e || 0, i || 0, s || 0, o || 0, r)),
              (a = this.path(n)),
              d.styledMode || a.attr("fill", "none"),
              iA(a, {
                symbolName: g || void 0,
                x: e,
                y: i,
                width: s,
                height: o,
              }),
              r && iA(a, r);
          else if (p) {
            h = t.match(c)[1];
            let s = (a = this.image(h));
            (s.imgwidth = iD(r && r.width, iy[h] && iy[h].width)),
              (s.imgheight = iD(r && r.height, iy[h] && iy[h].height)),
              (l = (t) => t.attr({ width: t.width, height: t.height })),
              ["width", "height"].forEach((t) => {
                s[`${t}Setter`] = function (t, e) {
                  this[e] = t;
                  let {
                      alignByTranslate: i,
                      element: s,
                      width: o,
                      height: a,
                      imgwidth: n,
                      imgheight: h,
                    } = this,
                    l = "width" === e ? n : h,
                    d = 1;
                  r && "within" === r.backgroundSize && o && a && n && h
                    ? ((d = Math.min(o / n, a / h)),
                      ik(s, {
                        width: Math.round(n * d),
                        height: Math.round(h * d),
                      }))
                    : s && l && s.setAttribute(e, l),
                    !i &&
                      n &&
                      h &&
                      this.translate(
                        ((o || 0) - n * d) / 2,
                        ((a || 0) - h * d) / 2
                      );
                };
              }),
              iT(e) && s.attr({ x: e, y: i }),
              (s.isImg = !0),
              (s.symbolUrl = t),
              iT(s.imgwidth) && iT(s.imgheight)
                ? l(s)
                : (s.attr({ width: 0, height: 0 }),
                  iw("img", {
                    onload: function () {
                      let t = il[d.chartIndex];
                      0 === this.width &&
                        (iS(this, { position: "absolute", top: "-999em" }),
                        ic.body.appendChild(this)),
                        (iy[h] = { width: this.width, height: this.height }),
                        (s.imgwidth = this.width),
                        (s.imgheight = this.height),
                        s.element && l(s),
                        this.parentNode && this.parentNode.removeChild(this),
                        d.imgCount--,
                        d.imgCount || !t || t.hasLoaded || t.onload();
                    },
                    src: h,
                  }),
                  this.imgCount++);
          }
          return a;
        }
        clipRect(t, e, i, s) {
          return this.rect(t, e, i, s, 0);
        }
        text(t, e, i, s) {
          let o = {};
          if (s && (this.allowHTML || !this.forExport))
            return this.html(t, e, i);
          (o.x = Math.round(e || 0)),
            i && (o.y = Math.round(i)),
            iT(t) && (o.text = t);
          let r = this.createElement("text").attr(o);
          return (
            (s && (!this.forExport || this.allowHTML)) ||
              (r.xSetter = function (t, e, i) {
                let s = i.getElementsByTagName("tspan"),
                  o = i.getAttribute(e);
                for (let i = 0, r; i < s.length; i++)
                  (r = s[i]).getAttribute(e) === o && r.setAttribute(e, t);
                i.setAttribute(e, t);
              }),
            r
          );
        }
        fontMetrics(t) {
          let e = iB(ej.prototype.getStyle.call(t, "font-size") || 0),
            i = e < 24 ? e + 3 : Math.round(1.2 * e),
            s = Math.round(0.8 * i);
          return { h: i, b: s, f: e };
        }
        rotCorr(t, e, i) {
          let s = t;
          return (
            e && i && (s = Math.max(s * Math.cos(e * id), 4)),
            { x: (-t / 3) * Math.sin(e * id), y: s }
          );
        }
        pathToSegments(t) {
          let e = [],
            i = [],
            s = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
          for (let o = 0; o < t.length; o++)
            iE(i[0]) &&
              iL(t[o]) &&
              i.length === s[i[0].toUpperCase()] &&
              t.splice(o, 0, i[0].replace("M", "L").replace("m", "l")),
              "string" == typeof t[o] &&
                (i.length && e.push(i.slice(0)), (i.length = 0)),
              i.push(t[o]);
          return e.push(i.slice(0)), e;
        }
        label(t, e, i, s, o, r, a, n, h) {
          return new eJ(this, t, e, i, s, o, r, a, n, h);
        }
        alignElements() {
          this.alignedObjects.forEach((t) => t.align());
        }
      }
      iA(iR.prototype, {
        Element: ej,
        SVG_NS: ix,
        escapes: {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        },
        symbols: e6,
        draw: im,
      }),
        er.registerRendererType("svg", iR, !0);
      let { composed: iW } = k,
        {
          attr: iH,
          css: iX,
          createElement: iF,
          defined: iG,
          extend: iY,
          getAlignFactor: ij,
          isNumber: iU,
          pInt: i$,
          pushUnique: iV,
        } = $;
      function i_(t, e, i) {
        let s = this.div?.style || i.style;
        ej.prototype[`${e}Setter`].call(this, t, e, i), s && (s[e] = t);
      }
      let iq = (t, e) => {
        if (!t.div) {
          let i = iH(t.element, "class"),
            s = t.css,
            o = iF(
              "div",
              i ? { className: i } : void 0,
              {
                position: "absolute",
                left: `${t.translateX || 0}px`,
                top: `${t.translateY || 0}px`,
                ...t.styles,
                display: t.display,
                opacity: t.opacity,
                visibility: t.visibility,
              },
              t.parentGroup?.div || e
            );
          (t.classSetter = (t, e, i) => {
            i.setAttribute("class", t), (o.className = t);
          }),
            (t.translateXSetter = t.translateYSetter =
              (e, i) => {
                (t[i] = e),
                  (o.style["translateX" === i ? "left" : "top"] = `${e}px`),
                  (t.doTransform = !0);
              }),
            (t.opacitySetter = t.visibilitySetter = i_),
            (t.css = (e) => (
              s.call(t, e),
              e.cursor && (o.style.cursor = e.cursor),
              e.pointerEvents && (o.style.pointerEvents = e.pointerEvents),
              t
            )),
            (t.on = function () {
              return (
                ej.prototype.on.apply(
                  { element: o, onEvents: t.onEvents },
                  arguments
                ),
                t
              );
            }),
            (t.div = o);
        }
        return t.div;
      };
      class iZ extends ej {
        static compose(t) {
          iV(iW, this.compose) &&
            (t.prototype.html = function (t, e, i) {
              return new iZ(this, "span").attr({
                text: t,
                x: Math.round(e),
                y: Math.round(i),
              });
            });
        }
        constructor(t, e) {
          super(t, e),
            this.css({
              position: "absolute",
              ...(t.styledMode
                ? {}
                : {
                    fontFamily: t.style.fontFamily,
                    fontSize: t.style.fontSize,
                  }),
            });
        }
        getSpanCorrection(t, e, i) {
          (this.xCorr = -t * i), (this.yCorr = -e);
        }
        css(t) {
          let e;
          let { element: i } = this,
            s = "SPAN" === i.tagName && t && "width" in t,
            o = s && t.width;
          return (
            s && (delete t.width, (this.textWidth = i$(o) || void 0), (e = !0)),
            t?.textOverflow === "ellipsis" && (t.overflow = "hidden"),
            t?.lineClamp &&
              ((t.display = "-webkit-box"),
              (t.WebkitLineClamp = t.lineClamp),
              (t.WebkitBoxOrient = "vertical"),
              (t.overflow = "hidden")),
            iU(Number(t?.fontSize)) && (t.fontSize = t.fontSize + "px"),
            iY(this.styles, t),
            iX(i, t),
            e && this.updateTransform(),
            this
          );
        }
        htmlGetBBox() {
          let { element: t } = this;
          return {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: t.offsetWidth,
            height: t.offsetHeight,
          };
        }
        updateTransform() {
          if (!this.added) {
            this.alignOnAdd = !0;
            return;
          }
          let {
              element: t,
              renderer: e,
              rotation: i,
              rotationOriginX: s,
              rotationOriginY: o,
              scaleX: r,
              scaleY: a,
              styles: n,
              textAlign: h = "left",
              textWidth: l,
              translateX: d = 0,
              translateY: c = 0,
              x: p = 0,
              y: g = 0,
            } = this,
            { display: u = "block", whiteSpace: f } = n;
          if (
            (iX(t, { marginLeft: `${d}px`, marginTop: `${c}px` }),
            "SPAN" === t.tagName)
          ) {
            let n;
            let d = [i, h, t.innerHTML, l, this.textAlign].join(","),
              c = -(this.parentGroup?.padding * 1) || 0;
            if (l !== this.oldTextWidth) {
              let e = this.textPxLength
                  ? this.textPxLength
                  : (iX(t, { width: "", whiteSpace: f || "nowrap" }),
                    t.offsetWidth),
                s = l || 0;
              (s > this.oldTextWidth || e > s) &&
                (/[ \-]/.test(t.textContent || t.innerText) ||
                  "ellipsis" === t.style.textOverflow) &&
                (iX(t, {
                  width: e > s || i || r ? l + "px" : "auto",
                  display: u,
                  whiteSpace: f || "normal",
                }),
                (this.oldTextWidth = l));
            }
            d !== this.cTT &&
              ((n = e.fontMetrics(t).b),
              iG(i) &&
                (i !== (this.oldRotation || 0) || h !== this.oldAlign) &&
                this.setSpanRotation(i, c, c),
              this.getSpanCorrection(
                (!iG(i) && !this.textWidth && this.textPxLength) ||
                  t.offsetWidth,
                n,
                ij(h)
              ));
            let { xCorr: m = 0, yCorr: x = 0 } = this,
              y = {
                left: `${p + m}px`,
                top: `${g + x}px`,
                textAlign: h,
                transformOrigin: `${(s ?? p) - m - p - c}px ${
                  (o ?? g) - x - g - c
                }px`,
              };
            (r || a) && (y.transform = `scale(${r ?? 1},${a ?? 1})`),
              iX(t, y),
              (this.cTT = d),
              (this.oldRotation = i),
              (this.oldAlign = h);
          }
        }
        setSpanRotation(t, e, i) {
          iX(this.element, {
            transform: `rotate(${t}deg)`,
            transformOrigin: `${e}% ${i}px`,
          });
        }
        add(t) {
          let e;
          let i = this.renderer.box.parentNode,
            s = [];
          if (((this.parentGroup = t), t && !(e = t.div))) {
            let o = t;
            for (; o; ) s.push(o), (o = o.parentGroup);
            for (let t of s.reverse()) e = iq(t, i);
          }
          return (
            (e || i).appendChild(this.element),
            (this.added = !0),
            this.alignOnAdd && this.updateTransform(),
            this
          );
        }
        textSetter(t) {
          t !== this.textStr &&
            (delete this.bBox,
            delete this.oldTextWidth,
            tK.setElementHTML(this.element, t ?? ""),
            (this.textStr = t),
            (this.doTransform = !0));
        }
        alignSetter(t) {
          (this.alignValue = this.textAlign = t), (this.doTransform = !0);
        }
        xSetter(t, e) {
          (this[e] = t), (this.doTransform = !0);
        }
      }
      let iK = iZ.prototype;
      (iK.visibilitySetter = iK.opacitySetter = i_),
        (iK.ySetter =
          iK.rotationSetter =
          iK.rotationOriginXSetter =
          iK.rotationOriginYSetter =
            iK.xSetter),
        (function (t) {
          (t.xAxis = {
            alignTicks: !0,
            allowDecimals: void 0,
            panningEnabled: !0,
            zIndex: 2,
            zoomEnabled: !0,
            dateTimeLabelFormats: {
              millisecond: { main: "%[HMSL]", range: !1 },
              second: { main: "%[HMS]", range: !1 },
              minute: { main: "%[HM]", range: !1 },
              hour: { main: "%[HM]", range: !1 },
              day: { main: "%[eb]" },
              week: { main: "%[eb]" },
              month: { main: "%[bY]" },
              year: { main: "%Y" },
            },
            endOnTick: !1,
            gridLineDashStyle: "Solid",
            gridZIndex: 1,
            labels: {
              autoRotationLimit: 80,
              distance: 15,
              enabled: !0,
              indentation: 10,
              overflow: "justify",
              reserveSpace: void 0,
              rotation: void 0,
              staggerLines: 0,
              step: 0,
              useHTML: !1,
              zIndex: 7,
              style: {
                color: "#333333",
                cursor: "default",
                fontSize: "0.8em",
                textOverflow: "ellipsis",
              },
            },
            maxPadding: 0.01,
            minorGridLineDashStyle: "Solid",
            minorTickLength: 2,
            minorTickPosition: "outside",
            minorTicksPerMajor: 5,
            minPadding: 0.01,
            offset: void 0,
            reversed: void 0,
            reversedStacks: !1,
            showEmpty: !0,
            showFirstLabel: !0,
            showLastLabel: !0,
            startOfWeek: 1,
            startOnTick: !1,
            tickLength: 10,
            tickPixelInterval: 100,
            tickmarkPlacement: "between",
            tickPosition: "outside",
            title: {
              align: "middle",
              useHTML: !1,
              x: 0,
              y: 0,
              style: { color: "#666666", fontSize: "0.8em" },
            },
            visible: !0,
            minorGridLineColor: "#f2f2f2",
            minorGridLineWidth: 1,
            minorTickColor: "#999999",
            lineColor: "#333333",
            lineWidth: 1,
            gridLineColor: "#e6e6e6",
            gridLineWidth: void 0,
            tickColor: "#333333",
          }),
            (t.yAxis = {
              reversedStacks: !0,
              endOnTick: !0,
              maxPadding: 0.05,
              minPadding: 0.05,
              tickPixelInterval: 72,
              showLastLabel: !0,
              labels: { x: void 0 },
              startOnTick: !0,
              title: { text: "Values" },
              stackLabels: {
                animation: {},
                allowOverlap: !1,
                enabled: !1,
                crop: !0,
                overflow: "justify",
                formatter: function () {
                  let { numberFormatter: t } = this.axis.chart;
                  return t(this.total || 0, -1);
                },
                style: {
                  color: "#000000",
                  fontSize: "0.7em",
                  fontWeight: "bold",
                  textOutline: "1px contrast",
                },
              },
              gridLineWidth: 1,
              lineWidth: 0,
            });
        })(r || (r = {}));
      let iJ = r,
        { addEvent: iQ, isFunction: i0, objectEach: i1, removeEvent: i2 } = $;
      (a || (a = {})).registerEventOptions = function (t, e) {
        (t.eventOptions = t.eventOptions || {}),
          i1(e.events, function (e, i) {
            t.eventOptions[i] !== e &&
              (t.eventOptions[i] &&
                (i2(t, i, t.eventOptions[i]), delete t.eventOptions[i]),
              i0(e) && ((t.eventOptions[i] = e), iQ(t, i, e, { order: 0 })));
          });
      };
      let i3 = a,
        { deg2rad: i5 } = k,
        {
          clamp: i6,
          correctFloat: i9,
          defined: i4,
          destroyObjectProperties: i8,
          extend: i7,
          fireEvent: st,
          getAlignFactor: se,
          isNumber: si,
          merge: ss,
          objectEach: so,
          pick: sr,
        } = $,
        sa = class {
          constructor(t, e, i, s, o) {
            (this.isNew = !0),
              (this.isNewLabel = !0),
              (this.axis = t),
              (this.pos = e),
              (this.type = i || ""),
              (this.parameters = o || {}),
              (this.tickmarkOffset = this.parameters.tickmarkOffset),
              (this.options = this.parameters.options),
              st(this, "init"),
              i || s || this.addLabel();
          }
          addLabel() {
            let t = this,
              e = t.axis,
              i = e.options,
              s = e.chart,
              o = e.categories,
              r = e.logarithmic,
              a = e.names,
              n = t.pos,
              h = sr(t.options && t.options.labels, i.labels),
              l = e.tickPositions,
              d = n === l[0],
              c = n === l[l.length - 1],
              p = (!h.step || 1 === h.step) && 1 === e.tickInterval,
              g = l.info,
              u = t.label,
              f,
              m,
              x,
              y = this.parameters.category || (o ? sr(o[n], a[n], n) : n);
            r && si(y) && (y = i9(r.lin2log(y))),
              e.dateTime &&
                (g
                  ? (f = (m = s.time.resolveDTLFormat(
                      i.dateTimeLabelFormats[
                        (!i.grid && g.higherRanks[n]) || g.unitName
                      ]
                    )).main)
                  : si(y) &&
                    (f = e.dateTime.getXDateFormat(
                      y,
                      i.dateTimeLabelFormats || {}
                    ))),
              (t.isFirst = d),
              (t.isLast = c);
            let b = {
              axis: e,
              chart: s,
              dateTimeLabelFormat: f,
              isFirst: d,
              isLast: c,
              pos: n,
              tick: t,
              tickPositionInfo: g,
              value: y,
            };
            st(this, "labelFormat", b);
            let v = (t) =>
                h.formatter
                  ? h.formatter.call(t, t)
                  : h.format
                  ? ((t.text = e.defaultLabelFormatter.call(t)),
                    eo.format(h.format, t, s))
                  : e.defaultLabelFormatter.call(t),
              k = v.call(b, b),
              w = m && m.list;
            w
              ? (t.shortenLabel = function () {
                  for (x = 0; x < w.length; x++)
                    if (
                      (i7(b, { dateTimeLabelFormat: w[x] }),
                      u.attr({ text: v.call(b, b) }),
                      u.getBBox().width <
                        e.getSlotWidth(t) - 2 * (h.padding || 0))
                    )
                      return;
                  u.attr({ text: "" });
                })
              : (t.shortenLabel = void 0),
              p && e._addedPlotLB && t.moveLabel(k, h),
              i4(u) || t.movedLabel
                ? u &&
                  u.textStr !== k &&
                  !p &&
                  (!u.textWidth ||
                    h.style.width ||
                    u.styles.width ||
                    u.css({ width: null }),
                  u.attr({ text: k }),
                  (u.textPxLength = u.getBBox().width))
                : ((t.label = u = t.createLabel(k, h)), (t.rotation = 0));
          }
          createLabel(t, e, i) {
            let s = this.axis,
              { renderer: o, styledMode: r } = s.chart,
              a =
                i4(t) && e.enabled
                  ? o.text(t, i?.x, i?.y, e.useHTML).add(s.labelGroup)
                  : void 0;
            if (a) {
              let t = e.style.whiteSpace || "normal";
              r || a.css(ss(e.style, { whiteSpace: "nowrap" })),
                (a.textPxLength = a.getBBox().width),
                r || a.css({ whiteSpace: t });
            }
            return a;
          }
          destroy() {
            i8(this, this.axis);
          }
          getPosition(t, e, i, s) {
            let o = this.axis,
              r = o.chart,
              a = (s && r.oldChartHeight) || r.chartHeight,
              n = {
                x: t
                  ? i9(o.translate(e + i, void 0, void 0, s) + o.transB)
                  : o.left +
                    o.offset +
                    (o.opposite
                      ? ((s && r.oldChartWidth) || r.chartWidth) -
                        o.right -
                        o.left
                      : 0),
                y: t
                  ? a - o.bottom + o.offset - (o.opposite ? o.height : 0)
                  : i9(a - o.translate(e + i, void 0, void 0, s) - o.transB),
              };
            return (
              (n.y = i6(n.y, -1e9, 1e9)),
              st(this, "afterGetPosition", { pos: n }),
              n
            );
          }
          getLabelPosition(t, e, i, s, o, r, a, n) {
            let h, l;
            let d = this.axis,
              c = d.transA,
              p =
                d.isLinked && d.linkedParent
                  ? d.linkedParent.reversed
                  : d.reversed,
              g = d.staggerLines,
              u = d.tickRotCorr || { x: 0, y: 0 },
              f =
                s || d.reserveSpaceDefault
                  ? 0
                  : -d.labelOffset * ("center" === d.labelAlign ? 0.5 : 1),
              m = o.distance,
              x = {};
            return (
              (h =
                0 === d.side
                  ? i.rotation
                    ? -m
                    : -i.getBBox().height
                  : 2 === d.side
                  ? u.y + m
                  : Math.cos(i.rotation * i5) *
                    (u.y - i.getBBox(!1, 0).height / 2)),
              i4(o.y) && (h = 0 === d.side && d.horiz ? o.y + h : o.y),
              (t =
                t +
                sr(o.x, [0, 1, 0, -1][d.side] * m) +
                f +
                u.x -
                (r && s ? r * c * (p ? -1 : 1) : 0)),
              (e = e + h - (r && !s ? r * c * (p ? 1 : -1) : 0)),
              g &&
                ((l = (a / (n || 1)) % g),
                d.opposite && (l = g - l - 1),
                (e += l * (d.labelOffset / g))),
              (x.x = t),
              (x.y = Math.round(e)),
              st(this, "afterGetLabelPosition", {
                pos: x,
                tickmarkOffset: r,
                index: a,
              }),
              x
            );
          }
          getLabelSize() {
            return this.label
              ? this.label.getBBox()[this.axis.horiz ? "height" : "width"]
              : 0;
          }
          getMarkPath(t, e, i, s, o = !1, r) {
            return r.crispLine(
              [
                ["M", t, e],
                ["L", t + (o ? 0 : -i), e + (o ? i : 0)],
              ],
              s
            );
          }
          handleOverflow(t) {
            let e = this.axis,
              i = e.options.labels,
              s = t.x,
              o = e.chart.chartWidth,
              r = e.chart.spacing,
              a = sr(e.labelLeft, Math.min(e.pos, r[3])),
              n = sr(
                e.labelRight,
                Math.max(e.isRadial ? 0 : e.pos + e.len, o - r[1])
              ),
              h = this.label,
              l = this.rotation,
              d = se(e.labelAlign || h.attr("align")),
              c = h.getBBox().width,
              p = e.getSlotWidth(this),
              g = p,
              u = 1,
              f,
              m,
              x;
            l || "justify" !== i.overflow
              ? l < 0 && s - d * c < a
                ? (x = Math.round(s / Math.cos(l * i5) - a))
                : l > 0 &&
                  s + d * c > n &&
                  (x = Math.round((o - s) / Math.cos(l * i5)))
              : ((f = s - d * c),
                (m = s + (1 - d) * c),
                f < a
                  ? (g = t.x + g * (1 - d) - a)
                  : m > n && ((g = n - t.x + g * d), (u = -1)),
                (g = Math.min(p, g)) < p &&
                  "center" === e.labelAlign &&
                  (t.x += u * (p - g - d * (p - Math.min(c, g)))),
                (c > g || (e.autoRotation && (h.styles || {}).width)) &&
                  (x = g)),
              x &&
                h &&
                (this.shortenLabel
                  ? this.shortenLabel()
                  : h.css(
                      i7(
                        {},
                        {
                          width: Math.floor(x) + "px",
                          lineClamp: e.isRadial ? 0 : 1,
                        }
                      )
                    ));
          }
          moveLabel(t, e) {
            let i = this,
              s = i.label,
              o = i.axis,
              r = !1,
              a;
            s && s.textStr === t
              ? ((i.movedLabel = s), (r = !0), delete i.label)
              : so(o.ticks, function (e) {
                  r ||
                    e.isNew ||
                    e === i ||
                    !e.label ||
                    e.label.textStr !== t ||
                    ((i.movedLabel = e.label),
                    (r = !0),
                    (e.labelPos = i.movedLabel.xy),
                    delete e.label);
                }),
              !r &&
                (i.labelPos || s) &&
                ((a = i.labelPos || s.xy),
                (i.movedLabel = i.createLabel(t, e, a)),
                i.movedLabel && i.movedLabel.attr({ opacity: 0 }));
          }
          render(t, e, i) {
            let s = this.axis,
              o = s.horiz,
              r = this.pos,
              a = sr(this.tickmarkOffset, s.tickmarkOffset),
              n = this.getPosition(o, r, a, e),
              h = n.x,
              l = n.y,
              d = s.pos,
              c = d + s.len,
              p = o ? h : l;
            !s.chart.polar && this.isNew && (i9(p) < d || p > c) && (i = 0);
            let g = sr(i, this.label && this.label.newOpacity, 1);
            (i = sr(i, 1)),
              (this.isActive = !0),
              this.renderGridLine(e, i),
              this.renderMark(n, i),
              this.renderLabel(n, e, g, t),
              (this.isNew = !1),
              st(this, "afterRender");
          }
          renderGridLine(t, e) {
            let i = this.axis,
              s = i.options,
              o = {},
              r = this.pos,
              a = this.type,
              n = sr(this.tickmarkOffset, i.tickmarkOffset),
              h = i.chart.renderer,
              l = this.gridLine,
              d,
              c = s.gridLineWidth,
              p = s.gridLineColor,
              g = s.gridLineDashStyle;
            "minor" === this.type &&
              ((c = s.minorGridLineWidth),
              (p = s.minorGridLineColor),
              (g = s.minorGridLineDashStyle)),
              l ||
                (i.chart.styledMode ||
                  ((o.stroke = p),
                  (o["stroke-width"] = c || 0),
                  (o.dashstyle = g)),
                a || (o.zIndex = 1),
                t && (e = 0),
                (this.gridLine = l =
                  h
                    .path()
                    .attr(o)
                    .addClass("highcharts-" + (a ? a + "-" : "") + "grid-line")
                    .add(i.gridGroup))),
              l &&
                (d = i.getPlotLinePath({
                  value: r + n,
                  lineWidth: l.strokeWidth(),
                  force: "pass",
                  old: t,
                  acrossPanes: !1,
                })) &&
                l[t || this.isNew ? "attr" : "animate"]({ d: d, opacity: e });
          }
          renderMark(t, e) {
            let i = this.axis,
              s = i.options,
              o = i.chart.renderer,
              r = this.type,
              a = i.tickSize(r ? r + "Tick" : "tick"),
              n = t.x,
              h = t.y,
              l = sr(
                s["minor" !== r ? "tickWidth" : "minorTickWidth"],
                !r && i.isXAxis ? 1 : 0
              ),
              d = s["minor" !== r ? "tickColor" : "minorTickColor"],
              c = this.mark,
              p = !c;
            a &&
              (i.opposite && (a[0] = -a[0]),
              c ||
                ((this.mark = c =
                  o
                    .path()
                    .addClass("highcharts-" + (r ? r + "-" : "") + "tick")
                    .add(i.axisGroup)),
                i.chart.styledMode || c.attr({ stroke: d, "stroke-width": l })),
              c[p ? "attr" : "animate"]({
                d: this.getMarkPath(n, h, a[0], c.strokeWidth(), i.horiz, o),
                opacity: e,
              }));
          }
          renderLabel(t, e, i, s) {
            let o = this.axis,
              r = o.horiz,
              a = o.options,
              n = this.label,
              h = a.labels,
              l = h.step,
              d = sr(this.tickmarkOffset, o.tickmarkOffset),
              c = t.x,
              p = t.y,
              g = !0;
            n &&
              si(c) &&
              ((n.xy = t = this.getLabelPosition(c, p, n, r, h, d, s, l)),
              (!this.isFirst || this.isLast || a.showFirstLabel) &&
              (!this.isLast || this.isFirst || a.showLastLabel)
                ? !r ||
                  h.step ||
                  h.rotation ||
                  e ||
                  0 === i ||
                  this.handleOverflow(t)
                : (g = !1),
              l && s % l && (g = !1),
              g && si(t.y)
                ? ((t.opacity = i),
                  n[this.isNewLabel ? "attr" : "animate"](t).show(!0),
                  (this.isNewLabel = !1))
                : (n.hide(), (this.isNewLabel = !0)));
          }
          replaceMovedLabel() {
            let t = this.label,
              e = this.axis;
            t &&
              !this.isNew &&
              (t.animate({ opacity: 0 }, void 0, t.destroy), delete this.label),
              (e.isDirty = !0),
              (this.label = this.movedLabel),
              delete this.movedLabel;
          }
        },
        { animObject: sn } = tR,
        { xAxis: sh, yAxis: sl } = iJ,
        { defaultOptions: sd } = tm,
        { registerEventOptions: sc } = i3,
        { deg2rad: sp } = k,
        {
          arrayMax: sg,
          arrayMin: su,
          clamp: sf,
          correctFloat: sm,
          defined: sx,
          destroyObjectProperties: sy,
          erase: sb,
          error: sv,
          extend: sk,
          fireEvent: sw,
          getClosestDistance: sM,
          insertItem: sS,
          isArray: sT,
          isNumber: sC,
          isString: sA,
          merge: sP,
          normalizeTickInterval: sL,
          objectEach: sO,
          pick: sE,
          relativeLength: sI,
          removeEvent: sD,
          splat: sB,
          syncTimeout: sN,
        } = $,
        sz = (t, e) =>
          sL(
            e,
            void 0,
            void 0,
            sE(t.options.allowDecimals, e < 0.5 || void 0 !== t.tickAmount),
            !!t.tickAmount
          );
      sk(sd, { xAxis: sh, yAxis: sP(sh, sl) });
      class sR {
        constructor(t, e, i) {
          this.init(t, e, i);
        }
        init(t, e, i = this.coll) {
          let s = "xAxis" === i,
            o = this.isZAxis || (t.inverted ? !s : s);
          (this.chart = t),
            (this.horiz = o),
            (this.isXAxis = s),
            (this.coll = i),
            sw(this, "init", { userOptions: e }),
            (this.opposite = sE(e.opposite, this.opposite)),
            (this.side = sE(
              e.side,
              this.side,
              o ? (this.opposite ? 0 : 2) : this.opposite ? 1 : 3
            )),
            this.setOptions(e);
          let r = this.options,
            a = r.labels;
          this.type ?? (this.type = r.type || "linear"),
            this.uniqueNames ?? (this.uniqueNames = r.uniqueNames ?? !0),
            sw(this, "afterSetType"),
            (this.userOptions = e),
            (this.minPixelPadding = 0),
            (this.reversed = sE(r.reversed, this.reversed)),
            (this.visible = r.visible),
            (this.zoomEnabled = r.zoomEnabled),
            (this.hasNames = "category" === this.type || !0 === r.categories),
            (this.categories =
              (sT(r.categories) && r.categories) ||
              (this.hasNames ? [] : void 0)),
            this.names || ((this.names = []), (this.names.keys = {})),
            (this.plotLinesAndBandsGroups = {}),
            (this.positiveValuesOnly = !!this.logarithmic),
            (this.isLinked = sx(r.linkedTo)),
            (this.ticks = {}),
            (this.labelEdge = []),
            (this.minorTicks = {}),
            (this.plotLinesAndBands = []),
            (this.alternateBands = {}),
            this.len ?? (this.len = 0),
            (this.minRange = this.userMinRange = r.minRange || r.maxZoom),
            (this.range = r.range),
            (this.offset = r.offset || 0),
            (this.max = void 0),
            (this.min = void 0);
          let n = sE(r.crosshair, sB(t.options.tooltip.crosshairs)[s ? 0 : 1]);
          (this.crosshair = !0 === n ? {} : n),
            -1 === t.axes.indexOf(this) &&
              (s ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this),
              sS(this, t[this.coll])),
            t.orderItems(this.coll),
            (this.series = this.series || []),
            t.inverted &&
              !this.isZAxis &&
              s &&
              !sx(this.reversed) &&
              (this.reversed = !0),
            (this.labelRotation = sC(a.rotation) ? a.rotation : void 0),
            sc(this, r),
            sw(this, "afterInit");
        }
        setOptions(t) {
          let e = this.horiz
            ? { labels: { autoRotation: [-45], padding: 3 }, margin: 15 }
            : { labels: { padding: 1 }, title: { rotation: 90 * this.side } };
          (this.options = sP(e, sd[this.coll], t)),
            sw(this, "afterSetOptions", { userOptions: t });
        }
        defaultLabelFormatter() {
          let t = this.axis,
            { numberFormatter: e } = this.chart,
            i = sC(this.value) ? this.value : NaN,
            s = t.chart.time,
            o = t.categories,
            r = this.dateTimeLabelFormat,
            a = sd.lang,
            n = a.numericSymbols,
            h = a.numericSymbolMagnitude || 1e3,
            l = t.logarithmic ? Math.abs(i) : t.tickInterval,
            d = n && n.length,
            c,
            p;
          if (o) p = `${this.value}`;
          else if (r) p = s.dateFormat(r, i, !0);
          else if (d && n && l >= 1e3)
            for (; d-- && void 0 === p; )
              l >= (c = Math.pow(h, d + 1)) &&
                (10 * i) % c == 0 &&
                null !== n[d] &&
                0 !== i &&
                (p = e(i / c, -1) + n[d]);
          return (
            void 0 === p &&
              (p = Math.abs(i) >= 1e4 ? e(i, -1) : e(i, -1, void 0, "")),
            p
          );
        }
        getSeriesExtremes() {
          let t;
          let e = this;
          sw(this, "getSeriesExtremes", null, function () {
            (e.hasVisibleSeries = !1),
              (e.dataMin = e.dataMax = e.threshold = void 0),
              (e.softThreshold = !e.isXAxis),
              e.series.forEach((i) => {
                if (i.reserveSpace()) {
                  let s = i.options,
                    o,
                    r = s.threshold,
                    a,
                    n;
                  if (
                    ((e.hasVisibleSeries = !0),
                    e.positiveValuesOnly && 0 >= (r || 0) && (r = void 0),
                    e.isXAxis)
                  )
                    (o = i.getColumn("x")).length &&
                      ((o = e.logarithmic ? o.filter((t) => t > 0) : o),
                      (a = (t = i.getXExtremes(o)).min),
                      (n = t.max),
                      sC(a) ||
                        a instanceof Date ||
                        ((o = o.filter(sC)),
                        (a = (t = i.getXExtremes(o)).min),
                        (n = t.max)),
                      o.length &&
                        ((e.dataMin = Math.min(sE(e.dataMin, a), a)),
                        (e.dataMax = Math.max(sE(e.dataMax, n), n))));
                  else {
                    let t = i.applyExtremes();
                    sC(t.dataMin) &&
                      ((a = t.dataMin),
                      (e.dataMin = Math.min(sE(e.dataMin, a), a))),
                      sC(t.dataMax) &&
                        ((n = t.dataMax),
                        (e.dataMax = Math.max(sE(e.dataMax, n), n))),
                      sx(r) && (e.threshold = r),
                      (!s.softThreshold || e.positiveValuesOnly) &&
                        (e.softThreshold = !1);
                  }
                }
              });
          }),
            sw(this, "afterGetSeriesExtremes");
        }
        translate(t, e, i, s, o, r) {
          let a = this.linkedParent || this,
            n = s && a.old ? a.old.min : a.min;
          if (!sC(n)) return NaN;
          let h = a.minPixelPadding,
            l =
              (a.isOrdinal ||
                a.brokenAxis?.hasBreaks ||
                (a.logarithmic && o)) &&
              a.lin2val,
            d = 1,
            c = 0,
            p = s && a.old ? a.old.transA : a.transA,
            g = 0;
          return (
            p || (p = a.transA),
            i && ((d *= -1), (c = a.len)),
            a.reversed && ((d *= -1), (c -= d * (a.sector || a.len))),
            e
              ? ((g = (t = t * d + c - h) / p + n), l && (g = a.lin2val(g)))
              : (l && (t = a.val2lin(t)),
                (g = d * (t - n) * p + c + d * h + (sC(r) ? p * r : 0)),
                a.isRadial || (g = sm(g))),
            g
          );
        }
        toPixels(t, e) {
          return (
            this.translate(
              this.chart?.time.parse(t) ?? NaN,
              !1,
              !this.horiz,
              void 0,
              !0
            ) + (e ? 0 : this.pos)
          );
        }
        toValue(t, e) {
          return this.translate(
            t - (e ? 0 : this.pos),
            !0,
            !this.horiz,
            void 0,
            !0
          );
        }
        getPlotLinePath(t) {
          let e = this,
            i = e.chart,
            s = e.left,
            o = e.top,
            r = t.old,
            a = t.value,
            n = t.lineWidth,
            h = (r && i.oldChartHeight) || i.chartHeight,
            l = (r && i.oldChartWidth) || i.chartWidth,
            d = e.transB,
            c = t.translatedValue,
            p = t.force,
            g,
            u,
            f,
            m,
            x;
          function y(t, e, i) {
            return (
              "pass" !== p &&
                (t < e || t > i) &&
                (p ? (t = sf(t, e, i)) : (x = !0)),
              t
            );
          }
          let b = {
            value: a,
            lineWidth: n,
            old: r,
            force: p,
            acrossPanes: t.acrossPanes,
            translatedValue: c,
          };
          return (
            sw(this, "getPlotLinePath", b, function (t) {
              (g = f =
                (c = sf(
                  (c = sE(c, e.translate(a, void 0, void 0, r))),
                  -1e9,
                  1e9
                )) + d),
                (u = m = h - c - d),
                sC(c)
                  ? e.horiz
                    ? ((u = o),
                      (m =
                        h -
                        e.bottom +
                        (e.options.isInternal ? 0 : i.scrollablePixelsY || 0)),
                      (g = f = y(g, s, s + e.width)))
                    : ((g = s),
                      (f = l - e.right + (i.scrollablePixelsX || 0)),
                      (u = m = y(u, o, o + e.height)))
                  : ((x = !0), (p = !1)),
                (t.path =
                  x && !p
                    ? void 0
                    : i.renderer.crispLine(
                        [
                          ["M", g, u],
                          ["L", f, m],
                        ],
                        n || 1
                      ));
            }),
            b.path
          );
        }
        getLinearTickPositions(t, e, i) {
          let s, o, r;
          let a = sm(Math.floor(e / t) * t),
            n = sm(Math.ceil(i / t) * t),
            h = [];
          if ((sm(a + t) === a && (r = 20), this.single)) return [e];
          for (s = a; s <= n && (h.push(s), (s = sm(s + t, r)) !== o); ) o = s;
          return h;
        }
        getMinorTickInterval() {
          let { minorTicks: t, minorTickInterval: e } = this.options;
          return !0 === t ? sE(e, "auto") : !1 !== t ? e : void 0;
        }
        getMinorTickPositions() {
          let t = this.options,
            e = this.tickPositions,
            i = this.minorTickInterval,
            s = this.pointRangePadding || 0,
            o = (this.min || 0) - s,
            r = (this.max || 0) + s,
            a = this.brokenAxis?.hasBreaks ? this.brokenAxis.unitLength : r - o,
            n = [],
            h;
          if (a && a / i < this.len / 3) {
            let s = this.logarithmic;
            if (s)
              this.paddedTicks.forEach(function (t, e, o) {
                e &&
                  n.push.apply(n, s.getLogTickPositions(i, o[e - 1], o[e], !0));
              });
            else if (this.dateTime && "auto" === this.getMinorTickInterval())
              n = n.concat(
                this.getTimeTicks(
                  this.dateTime.normalizeTimeTickInterval(i),
                  o,
                  r,
                  t.startOfWeek
                )
              );
            else
              for (h = o + ((e[0] - o) % i); h <= r && h !== n[0]; h += i)
                n.push(h);
          }
          return 0 !== n.length && this.trimTicks(n), n;
        }
        adjustForMinRange() {
          let t = this.options,
            e = this.logarithmic,
            i = this.chart.time,
            { max: s, min: o, minRange: r } = this,
            a,
            n,
            h,
            l;
          this.isXAxis &&
            void 0 === r &&
            !e &&
            (r =
              sx(t.min) || sx(t.max) || sx(t.floor) || sx(t.ceiling)
                ? null
                : Math.min(
                    5 *
                      (sM(
                        this.series.map((t) => {
                          let e = t.getColumn("x");
                          return t.xIncrement ? e.slice(0, 2) : e;
                        })
                      ) || 0),
                    this.dataMax - this.dataMin
                  )),
            sC(s) &&
              sC(o) &&
              sC(r) &&
              s - o < r &&
              ((n = this.dataMax - this.dataMin >= r),
              (a = (r - s + o) / 2),
              (h = [o - a, i.parse(t.min) ?? o - a]),
              n && (h[2] = e ? e.log2lin(this.dataMin) : this.dataMin),
              (l = [(o = sg(h)) + r, i.parse(t.max) ?? o + r]),
              n && (l[2] = e ? e.log2lin(this.dataMax) : this.dataMax),
              (s = su(l)) - o < r &&
                ((h[0] = s - r),
                (h[1] = i.parse(t.min) ?? s - r),
                (o = sg(h)))),
            (this.minRange = r),
            (this.min = o),
            (this.max = s);
        }
        getClosest() {
          let t, e;
          if (this.categories) e = 1;
          else {
            let i = [];
            this.series.forEach(function (t) {
              let s = t.closestPointRange,
                o = t.getColumn("x");
              1 === o.length
                ? i.push(o[0])
                : t.sorted &&
                  sx(s) &&
                  t.reserveSpace() &&
                  (e = sx(e) ? Math.min(e, s) : s);
            }),
              i.length && (i.sort((t, e) => t - e), (t = sM([i])));
          }
          return t && e ? Math.min(t, e) : t || e;
        }
        nameToX(t) {
          let e = sT(this.options.categories),
            i = e ? this.categories : this.names,
            s = t.options.x,
            o;
          return (
            (t.series.requireSorting = !1),
            sx(s) ||
              (s =
                this.uniqueNames && i
                  ? e
                    ? i.indexOf(t.name)
                    : sE(i.keys[t.name], -1)
                  : t.series.autoIncrement()),
            -1 === s ? !e && i && (o = i.length) : sC(s) && (o = s),
            void 0 !== o
              ? ((this.names[o] = t.name), (this.names.keys[t.name] = o))
              : t.x && (o = t.x),
            o
          );
        }
        updateNames() {
          let t = this,
            e = this.names;
          e.length > 0 &&
            (Object.keys(e.keys).forEach(function (t) {
              delete e.keys[t];
            }),
            (e.length = 0),
            (this.minRange = this.userMinRange),
            (this.series || []).forEach((e) => {
              (e.xIncrement = null),
                (!e.points || e.isDirtyData) &&
                  ((t.max = Math.max(t.max || 0, e.dataTable.rowCount - 1)),
                  e.processData(),
                  e.generatePoints());
              let i = e.getColumn("x").slice();
              e.data.forEach((e, s) => {
                let o = i[s];
                e?.options &&
                  void 0 !== e.name &&
                  void 0 !== (o = t.nameToX(e)) &&
                  o !== e.x &&
                  (i[s] = e.x = o);
              }),
                e.dataTable.setColumn("x", i);
            }));
        }
        setAxisTranslation() {
          let t = this,
            e = t.max - t.min,
            i = t.linkedParent,
            s = !!t.categories,
            o = t.isXAxis,
            r = t.axisPointRange || 0,
            a,
            n = 0,
            h = 0,
            l,
            d = t.transA;
          (o || s || r) &&
            ((a = t.getClosest()),
            i
              ? ((n = i.minPointOffset), (h = i.pointRangePadding))
              : t.series.forEach(function (e) {
                  let i = s
                      ? 1
                      : o
                      ? sE(e.options.pointRange, a, 0)
                      : t.axisPointRange || 0,
                    l = e.options.pointPlacement;
                  if (((r = Math.max(r, i)), !t.single || s)) {
                    let t = e.is("xrange") ? !o : o;
                    (n = Math.max(n, t && sA(l) ? 0 : i / 2)),
                      (h = Math.max(h, t && "on" === l ? 0 : i));
                  }
                }),
            (l = t.ordinal && t.ordinal.slope && a ? t.ordinal.slope / a : 1),
            (t.minPointOffset = n *= l),
            (t.pointRangePadding = h *= l),
            (t.pointRange = Math.min(r, t.single && s ? 1 : e)),
            o && a && (t.closestPointRange = a)),
            (t.translationSlope =
              t.transA =
              d =
                t.staticScale || t.len / (e + h || 1)),
            (t.transB = t.horiz ? t.left : t.bottom),
            (t.minPixelPadding = d * n),
            sw(this, "afterSetAxisTranslation");
        }
        minFromRange() {
          let { max: t, min: e } = this;
          return (sC(t) && sC(e) && t - e) || void 0;
        }
        setTickInterval(t) {
          let {
              categories: e,
              chart: i,
              dataMax: s,
              dataMin: o,
              dateTime: r,
              isXAxis: a,
              logarithmic: n,
              options: h,
              softThreshold: l,
            } = this,
            d = i.time,
            c = sC(this.threshold) ? this.threshold : void 0,
            p = this.minRange || 0,
            { ceiling: g, floor: u, linkedTo: f, softMax: m, softMin: x } = h,
            y = sC(f) && i[this.coll]?.[f],
            b = h.tickPixelInterval,
            v = h.maxPadding,
            k = h.minPadding,
            w = 0,
            M,
            S =
              sC(h.tickInterval) && h.tickInterval >= 0
                ? h.tickInterval
                : void 0,
            T,
            C,
            A,
            P;
          if (
            (r || e || y || this.getTickAmount(),
            (A = sE(this.userMin, d.parse(h.min))),
            (P = sE(this.userMax, d.parse(h.max))),
            y
              ? ((this.linkedParent = y),
                (M = y.getExtremes()),
                (this.min = sE(M.min, M.dataMin)),
                (this.max = sE(M.max, M.dataMax)),
                this.type !== y.type && sv(11, !0, i))
              : (l &&
                  sx(c) &&
                  sC(s) &&
                  sC(o) &&
                  (o >= c ? ((T = c), (k = 0)) : s <= c && ((C = c), (v = 0))),
                (this.min = sE(A, T, o)),
                (this.max = sE(P, C, s))),
            sC(this.max) &&
              sC(this.min) &&
              (n &&
                (this.positiveValuesOnly &&
                  !t &&
                  0 >= Math.min(this.min, sE(o, this.min)) &&
                  sv(10, !0, i),
                (this.min = sm(n.log2lin(this.min), 16)),
                (this.max = sm(n.log2lin(this.max), 16))),
              this.range &&
                sC(o) &&
                ((this.userMin =
                  this.min =
                  A =
                    Math.max(o, this.minFromRange() || 0)),
                (this.userMax = P = this.max),
                (this.range = void 0))),
            sw(this, "foundExtremes"),
            this.adjustForMinRange(),
            sC(this.min) && sC(this.max))
          ) {
            if (
              (!sC(this.userMin) && sC(x) && x < this.min && (this.min = A = x),
              !sC(this.userMax) && sC(m) && m > this.max && (this.max = P = m),
              e ||
                this.axisPointRange ||
                this.stacking?.usePercentage ||
                y ||
                !(w = this.max - this.min) ||
                (!sx(A) && k && (this.min -= w * k),
                sx(P) || !v || (this.max += w * v)),
              !sC(this.userMin) && sC(u) && (this.min = Math.max(this.min, u)),
              !sC(this.userMax) && sC(g) && (this.max = Math.min(this.max, g)),
              l && sC(o) && sC(s))
            ) {
              let t = c || 0;
              !sx(A) && this.min < t && o >= t
                ? (this.min = h.minRange ? Math.min(t, this.max - p) : t)
                : !sx(P) &&
                  this.max > t &&
                  s <= t &&
                  (this.max = h.minRange ? Math.max(t, this.min + p) : t);
            }
            !i.polar &&
              this.min > this.max &&
              (sx(h.min)
                ? (this.max = this.min)
                : sx(h.max) && (this.min = this.max)),
              (w = this.max - this.min);
          }
          if (
            (this.min !== this.max && sC(this.min) && sC(this.max)
              ? y && !S && b === y.options.tickPixelInterval
                ? (this.tickInterval = S = y.tickInterval)
                : (this.tickInterval = sE(
                    S,
                    this.tickAmount
                      ? w / Math.max(this.tickAmount - 1, 1)
                      : void 0,
                    e ? 1 : (w * b) / Math.max(this.len, b)
                  ))
              : (this.tickInterval = 1),
            a && !t)
          ) {
            let t = this.min !== this.old?.min || this.max !== this.old?.max;
            this.series.forEach(function (e) {
              (e.forceCrop = e.forceCropping?.()), e.processData(t);
            }),
              sw(this, "postProcessData", { hasExtremesChanged: t });
          }
          this.setAxisTranslation(),
            sw(this, "initialAxisTranslation"),
            this.pointRange &&
              !S &&
              (this.tickInterval = Math.max(
                this.pointRange,
                this.tickInterval
              ));
          let L = sE(
            h.minTickInterval,
            r && !this.series.some((t) => !t.sorted)
              ? this.closestPointRange
              : 0
          );
          !S && this.tickInterval < L && (this.tickInterval = L),
            r || n || S || (this.tickInterval = sz(this, this.tickInterval)),
            this.tickAmount || (this.tickInterval = this.unsquish()),
            this.setTickPositions();
        }
        setTickPositions() {
          let t = this.options,
            e = t.tickPositions,
            i = t.tickPositioner,
            s = this.getMinorTickInterval(),
            o = !this.isPanning,
            r = o && t.startOnTick,
            a = o && t.endOnTick,
            n = [],
            h;
          if (
            ((this.tickmarkOffset =
              this.categories &&
              "between" === t.tickmarkPlacement &&
              1 === this.tickInterval
                ? 0.5
                : 0),
            (this.single =
              this.min === this.max &&
              sx(this.min) &&
              !this.tickAmount &&
              (this.min % 1 == 0 || !1 !== t.allowDecimals)),
            e)
          )
            n = e.slice();
          else if (sC(this.min) && sC(this.max)) {
            if (
              !this.ordinal?.positions &&
              (this.max - this.min) / this.tickInterval >
                Math.max(2 * this.len, 200)
            )
              (n = [this.min, this.max]), sv(19, !1, this.chart);
            else if (this.dateTime)
              n = this.getTimeTicks(
                this.dateTime.normalizeTimeTickInterval(
                  this.tickInterval,
                  t.units
                ),
                this.min,
                this.max,
                t.startOfWeek,
                this.ordinal?.positions,
                this.closestPointRange,
                !0
              );
            else if (this.logarithmic)
              n = this.logarithmic.getLogTickPositions(
                this.tickInterval,
                this.min,
                this.max
              );
            else {
              let t = this.tickInterval,
                e = t;
              for (; e <= 2 * t; )
                if (
                  ((n = this.getLinearTickPositions(
                    this.tickInterval,
                    this.min,
                    this.max
                  )),
                  this.tickAmount && n.length > this.tickAmount)
                )
                  this.tickInterval = sz(this, (e *= 1.1));
                else break;
            }
            n.length > this.len &&
              (n = [n[0], n[n.length - 1]])[0] === n[1] &&
              (n.length = 1),
              i &&
                ((this.tickPositions = n),
                (h = i.apply(this, [this.min, this.max])) && (n = h));
          }
          (this.tickPositions = n),
            (this.minorTickInterval =
              "auto" === s && this.tickInterval
                ? this.tickInterval / t.minorTicksPerMajor
                : s),
            (this.paddedTicks = n.slice(0)),
            this.trimTicks(n, r, a),
            !this.isLinked &&
              sC(this.min) &&
              sC(this.max) &&
              (this.single &&
                n.length < 2 &&
                !this.categories &&
                !this.series.some(
                  (t) =>
                    t.is("heatmap") && "between" === t.options.pointPlacement
                ) &&
                ((this.min -= 0.5), (this.max += 0.5)),
              e || h || this.adjustTickAmount()),
            sw(this, "afterSetTickPositions");
        }
        trimTicks(t, e, i) {
          let s = t[0],
            o = t[t.length - 1],
            r = (!this.isOrdinal && this.minPointOffset) || 0;
          if ((sw(this, "trimTicks"), !this.isLinked)) {
            if (e && s !== -1 / 0) this.min = s;
            else for (; this.min - r > t[0]; ) t.shift();
            if (i) this.max = o;
            else for (; this.max + r < t[t.length - 1]; ) t.pop();
            0 === t.length &&
              sx(s) &&
              !this.options.tickPositions &&
              t.push((o + s) / 2);
          }
        }
        alignToOthers() {
          let t;
          let e = this,
            i = e.chart,
            s = [this],
            o = e.options,
            r = i.options.chart,
            a = "yAxis" === this.coll && r.alignThresholds,
            n = [];
          if (
            ((e.thresholdAlignment = void 0),
            ((!1 !== r.alignTicks && o.alignTicks) || a) &&
              !1 !== o.startOnTick &&
              !1 !== o.endOnTick &&
              !e.logarithmic)
          ) {
            let o = (t) => {
                let { horiz: e, options: i } = t;
                return [e ? i.left : i.top, i.width, i.height, i.pane].join(
                  ","
                );
              },
              r = o(this);
            i[this.coll].forEach(function (i) {
              let { series: a } = i;
              a.length &&
                a.some((t) => t.visible) &&
                i !== e &&
                o(i) === r &&
                ((t = !0), s.push(i));
            });
          }
          if (t && a) {
            s.forEach((t) => {
              let i = t.getThresholdAlignment(e);
              sC(i) && n.push(i);
            });
            let t =
              n.length > 1
                ? n.reduce((t, e) => (t += e), 0) / n.length
                : void 0;
            s.forEach((e) => {
              e.thresholdAlignment = t;
            });
          }
          return t;
        }
        getThresholdAlignment(t) {
          if (
            ((!sC(this.dataMin) ||
              (this !== t &&
                this.series.some((t) => t.isDirty || t.isDirtyData))) &&
              this.getSeriesExtremes(),
            sC(this.threshold))
          ) {
            let t = sf(
              (this.threshold - (this.dataMin || 0)) /
                ((this.dataMax || 0) - (this.dataMin || 0)),
              0,
              1
            );
            return this.options.reversed && (t = 1 - t), t;
          }
        }
        getTickAmount() {
          let t = this.options,
            e = t.tickPixelInterval,
            i = t.tickAmount;
          sx(t.tickInterval) ||
            i ||
            !(this.len < e) ||
            this.isRadial ||
            this.logarithmic ||
            !t.startOnTick ||
            !t.endOnTick ||
            (i = 2),
            !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1),
            i < 4 && ((this.finalTickAmt = i), (i = 5)),
            (this.tickAmount = i);
        }
        adjustTickAmount() {
          let t = this,
            {
              finalTickAmt: e,
              max: i,
              min: s,
              options: o,
              tickPositions: r,
              tickAmount: a,
              thresholdAlignment: n,
            } = t,
            h = r?.length,
            l = sE(t.threshold, t.softThreshold ? 0 : null),
            d,
            c,
            p = t.tickInterval,
            g,
            u = () => r.push(sm(r[r.length - 1] + p)),
            f = () => r.unshift(sm(r[0] - p));
          if (
            (sC(n) &&
              ((g = n < 0.5 ? Math.ceil(n * (a - 1)) : Math.floor(n * (a - 1))),
              o.reversed && (g = a - 1 - g)),
            t.hasData() && sC(s) && sC(i))
          ) {
            let n = () => {
              (t.transA *= (h - 1) / (a - 1)),
                (t.min = o.startOnTick ? r[0] : Math.min(s, r[0])),
                (t.max = o.endOnTick
                  ? r[r.length - 1]
                  : Math.max(i, r[r.length - 1]));
            };
            if (sC(g) && sC(t.threshold)) {
              for (
                ;
                r[g] !== l || r.length !== a || r[0] > s || r[r.length - 1] < i;

              ) {
                for (r.length = 0, r.push(t.threshold); r.length < a; )
                  void 0 === r[g] || r[g] > t.threshold ? f() : u();
                if (p > 8 * t.tickInterval) break;
                p *= 2;
              }
              n();
            } else if (h < a) {
              for (; r.length < a; ) r.length % 2 || s === l ? u() : f();
              n();
            }
            if (sx(e)) {
              for (c = d = r.length; c--; )
                ((3 === e && c % 2 == 1) || (e <= 2 && c > 0 && c < d - 1)) &&
                  r.splice(c, 1);
              t.finalTickAmt = void 0;
            }
          }
        }
        setScale() {
          let { coll: t, stacking: e } = this,
            i = !1,
            s = !1;
          this.series.forEach((t) => {
            (i = i || t.isDirtyData || t.isDirty),
              (s = s || (t.xAxis && t.xAxis.isDirty) || !1);
          }),
            this.setAxisSize();
          let o = this.len !== (this.old && this.old.len);
          o ||
          i ||
          s ||
          this.isLinked ||
          this.forceRedraw ||
          this.userMin !== (this.old && this.old.userMin) ||
          this.userMax !== (this.old && this.old.userMax) ||
          this.alignToOthers()
            ? (e && "yAxis" === t && e.buildStacks(),
              (this.forceRedraw = !1),
              this.userMinRange || (this.minRange = void 0),
              this.getSeriesExtremes(),
              this.setTickInterval(),
              e && "xAxis" === t && e.buildStacks(),
              this.isDirty ||
                (this.isDirty =
                  o ||
                  this.min !== this.old?.min ||
                  this.max !== this.old?.max))
            : e && e.cleanStacks(),
            i && delete this.allExtremes,
            sw(this, "afterSetScale");
        }
        setExtremes(t, e, i = !0, s, o) {
          let r = this.chart;
          this.series.forEach((t) => {
            delete t.kdTree;
          }),
            (t = r.time.parse(t)),
            (e = r.time.parse(e)),
            sw(this, "setExtremes", (o = sk(o, { min: t, max: e })), (t) => {
              (this.userMin = t.min),
                (this.userMax = t.max),
                (this.eventArgs = t),
                i && r.redraw(s);
            });
        }
        setAxisSize() {
          let t = this.chart,
            e = this.options,
            i = e.offsets || [0, 0, 0, 0],
            s = this.horiz,
            o = (this.width = Math.round(
              sI(sE(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)
            )),
            r = (this.height = Math.round(
              sI(sE(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)
            )),
            a = (this.top = Math.round(
              sI(sE(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)
            )),
            n = (this.left = Math.round(
              sI(sE(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft)
            ));
          (this.bottom = t.chartHeight - r - a),
            (this.right = t.chartWidth - o - n),
            (this.len = Math.max(s ? o : r, 0)),
            (this.pos = s ? n : a);
        }
        getExtremes() {
          let t = this.logarithmic;
          return {
            min: t ? sm(t.lin2log(this.min)) : this.min,
            max: t ? sm(t.lin2log(this.max)) : this.max,
            dataMin: this.dataMin,
            dataMax: this.dataMax,
            userMin: this.userMin,
            userMax: this.userMax,
          };
        }
        getThreshold(t) {
          let e = this.logarithmic,
            i = e ? e.lin2log(this.min) : this.min,
            s = e ? e.lin2log(this.max) : this.max;
          return (
            null === t || t === -1 / 0
              ? (t = i)
              : t === 1 / 0
              ? (t = s)
              : i > t
              ? (t = i)
              : s < t && (t = s),
            this.translate(t, 0, 1, 0, 1)
          );
        }
        autoLabelAlign(t) {
          let e = (sE(t, 0) - 90 * this.side + 720) % 360,
            i = { align: "center" };
          return (
            sw(this, "autoLabelAlign", i, function (t) {
              e > 15 && e < 165
                ? (t.align = "right")
                : e > 195 && e < 345 && (t.align = "left");
            }),
            i.align
          );
        }
        tickSize(t) {
          let e = this.options,
            i = sE(
              e["tick" === t ? "tickWidth" : "minorTickWidth"],
              "tick" === t && this.isXAxis && !this.categories ? 1 : 0
            ),
            s = e["tick" === t ? "tickLength" : "minorTickLength"],
            o;
          i && s && ("inside" === e[t + "Position"] && (s = -s), (o = [s, i]));
          let r = { tickSize: o };
          return sw(this, "afterTickSize", r), r.tickSize;
        }
        labelMetrics() {
          let t = this.chart.renderer,
            e = this.ticks,
            i = e[Object.keys(e)[0]] || {};
          return this.chart.renderer.fontMetrics(
            i.label || i.movedLabel || t.box
          );
        }
        unsquish() {
          let t = this.options.labels,
            e = t.padding || 0,
            i = this.horiz,
            s = this.tickInterval,
            o =
              this.len /
              (((this.categories ? 1 : 0) + this.max - this.min) / s),
            r = t.rotation,
            a = sm(0.8 * this.labelMetrics().h),
            n = Math.max(this.max - this.min, 0),
            h = function (t) {
              let i = (t + 2 * e) / (o || 1);
              return (
                (i = i > 1 ? Math.ceil(i) : 1) * s > n &&
                  t !== 1 / 0 &&
                  o !== 1 / 0 &&
                  n &&
                  (i = Math.ceil(n / s)),
                sm(i * s)
              );
            },
            l = s,
            d,
            c = Number.MAX_VALUE,
            p;
          if (i) {
            if (
              (!t.staggerLines &&
                (sC(r)
                  ? (p = [r])
                  : o < t.autoRotationLimit && (p = t.autoRotation)),
              p)
            ) {
              let t, e;
              for (let i of p)
                (i === r || (i && i >= -90 && i <= 90)) &&
                  (e =
                    (t = h(Math.abs(a / Math.sin(sp * i)))) +
                    Math.abs(i / 360)) < c &&
                  ((c = e), (d = i), (l = t));
            }
          } else l = h(0.75 * a);
          return (
            (this.autoRotation = p),
            (this.labelRotation = sE(d, sC(r) ? r : 0)),
            t.step ? s : l
          );
        }
        getSlotWidth(t) {
          let e = this.chart,
            i = this.horiz,
            s = this.options.labels,
            o = Math.max(
              this.tickPositions.length - (this.categories ? 0 : 1),
              1
            ),
            r = e.margin[3];
          if (t && sC(t.slotWidth)) return t.slotWidth;
          if (i && s.step < 2 && !this.isRadial)
            return s.rotation ? 0 : ((this.staggerLines || 1) * this.len) / o;
          if (!i) {
            let t = s.style.width;
            if (void 0 !== t) return parseInt(String(t), 10);
            if (r) return r - e.spacing[3];
          }
          return 0.33 * e.chartWidth;
        }
        renderUnsquish() {
          let t = this.chart,
            e = t.renderer,
            i = this.tickPositions,
            s = this.ticks,
            o = this.options.labels,
            r = o.style,
            a = this.horiz,
            n = this.getSlotWidth(),
            h = Math.max(
              1,
              Math.round(n - (a ? 2 * (o.padding || 0) : o.distance || 0))
            ),
            l = {},
            d = this.labelMetrics(),
            c = r.lineClamp,
            p,
            g = c ?? (Math.floor(this.len / (i.length * d.h)) || 1),
            u = 0;
          sA(o.rotation) || (l.rotation = o.rotation || 0),
            i.forEach(function (t) {
              let e = s[t];
              e.movedLabel && e.replaceMovedLabel();
              let i = e.label?.textPxLength || 0;
              i > u && (u = i);
            }),
            (this.maxLabelLength = u),
            this.autoRotation
              ? u > h && u > d.h
                ? (l.rotation = this.labelRotation)
                : (this.labelRotation = 0)
              : n && (p = h),
            l.rotation &&
              ((p = u > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : u),
              c || (g = 1)),
            (this.labelAlign =
              o.align || this.autoLabelAlign(this.labelRotation)),
            this.labelAlign && (l.align = this.labelAlign),
            i.forEach(function (t) {
              let e = s[t],
                i = e && e.label,
                o = r.width,
                a = {};
              i &&
                (i.attr(l),
                e.shortenLabel
                  ? e.shortenLabel()
                  : p &&
                    !o &&
                    "nowrap" !== r.whiteSpace &&
                    (p < (i.textPxLength || 0) || "SPAN" === i.element.tagName)
                  ? i.css(sk(a, { width: `${p}px`, lineClamp: g }))
                  : !i.styles.width || a.width || o || i.css({ width: "auto" }),
                (e.rotation = l.rotation));
            }, this),
            (this.tickRotCorr = e.rotCorr(
              d.b,
              this.labelRotation || 0,
              0 !== this.side
            ));
        }
        hasData() {
          return (
            this.series.some(function (t) {
              return t.hasData();
            }) ||
            (this.options.showEmpty && sx(this.min) && sx(this.max))
          );
        }
        addTitle(t) {
          let e;
          let i = this.chart.renderer,
            s = this.horiz,
            o = this.opposite,
            r = this.options.title,
            a = this.chart.styledMode;
          this.axisTitle ||
            ((e = r.textAlign) ||
              (e = (
                s
                  ? { low: "left", middle: "center", high: "right" }
                  : {
                      low: o ? "right" : "left",
                      middle: "center",
                      high: o ? "left" : "right",
                    }
              )[r.align]),
            (this.axisTitle = i
              .text(r.text || "", 0, 0, r.useHTML)
              .attr({ zIndex: 7, rotation: r.rotation || 0, align: e })
              .addClass("highcharts-axis-title")),
            a || this.axisTitle.css(sP(r.style)),
            this.axisTitle.add(this.axisGroup),
            (this.axisTitle.isNew = !0)),
            a ||
              r.style.width ||
              this.isRadial ||
              this.axisTitle.css({ width: this.len + "px" }),
            this.axisTitle[t ? "show" : "hide"](t);
        }
        generateTick(t) {
          let e = this.ticks;
          e[t] ? e[t].addLabel() : (e[t] = new sa(this, t));
        }
        createGroups() {
          let { axisParent: t, chart: e, coll: i, options: s } = this,
            o = e.renderer,
            r = (e, r, a) =>
              o
                .g(e)
                .attr({ zIndex: a })
                .addClass(
                  `highcharts-${i.toLowerCase()}${r} ` +
                    (this.isRadial ? `highcharts-radial-axis${r} ` : "") +
                    (s.className || "")
                )
                .add(t);
          this.axisGroup ||
            ((this.gridGroup = r("grid", "-grid", s.gridZIndex)),
            (this.axisGroup = r("axis", "", s.zIndex)),
            (this.labelGroup = r("axis-labels", "-labels", s.labels.zIndex)));
        }
        getOffset() {
          let t = this,
            {
              chart: e,
              horiz: i,
              options: s,
              side: o,
              ticks: r,
              tickPositions: a,
              coll: n,
            } = t,
            h = e.inverted && !t.isZAxis ? [1, 0, 3, 2][o] : o,
            l = t.hasData(),
            d = s.title,
            c = s.labels,
            p = sC(s.crossing),
            g = e.axisOffset,
            u = e.clipOffset,
            f = [-1, 1, 1, -1][o],
            m,
            x = 0,
            y,
            b = 0,
            v = 0,
            k,
            w;
          if (
            ((t.showAxis = m = l || s.showEmpty),
            (t.staggerLines = (t.horiz && c.staggerLines) || void 0),
            t.createGroups(),
            l || t.isLinked
              ? (a.forEach(function (e) {
                  t.generateTick(e);
                }),
                t.renderUnsquish(),
                (t.reserveSpaceDefault =
                  0 === o ||
                  2 === o ||
                  { 1: "left", 3: "right" }[o] === t.labelAlign),
                sE(
                  c.reserveSpace,
                  !p && null,
                  "center" === t.labelAlign || null,
                  t.reserveSpaceDefault
                ) &&
                  a.forEach(function (t) {
                    v = Math.max(r[t].getLabelSize(), v);
                  }),
                t.staggerLines && (v *= t.staggerLines),
                (t.labelOffset = v * (t.opposite ? -1 : 1)))
              : sO(r, function (t, e) {
                  t.destroy(), delete r[e];
                }),
            d?.text &&
              !1 !== d.enabled &&
              (t.addTitle(m),
              m &&
                !p &&
                !1 !== d.reserveSpace &&
                ((t.titleOffset = x =
                  t.axisTitle.getBBox()[i ? "height" : "width"]),
                (b = sx((y = d.offset)) ? 0 : sE(d.margin, i ? 5 : 10)))),
            t.renderLine(),
            (t.offset = f * sE(s.offset, g[o] ? g[o] + (s.margin || 0) : 0)),
            (t.tickRotCorr = t.tickRotCorr || { x: 0, y: 0 }),
            (w = 0 === o ? -t.labelMetrics().h : 2 === o ? t.tickRotCorr.y : 0),
            (k = Math.abs(v) + b),
            v &&
              ((k -= w),
              (k +=
                f *
                (i
                  ? sE(c.y, t.tickRotCorr.y + f * c.distance)
                  : sE(c.x, f * c.distance)))),
            (t.axisTitleMargin = sE(y, k)),
            t.getMaxLabelDimensions &&
              (t.maxLabelDimensions = t.getMaxLabelDimensions(r, a)),
            "colorAxis" !== n && u)
          ) {
            let e = this.tickSize("tick");
            g[o] = Math.max(
              g[o],
              (t.axisTitleMargin || 0) + x + f * t.offset,
              k,
              a && a.length && e ? e[0] + f * t.offset : 0
            );
            let i = !t.axisLine || s.offset ? 0 : t.axisLine.strokeWidth() / 2;
            u[h] = Math.max(u[h], i);
          }
          sw(this, "afterGetOffset");
        }
        getLinePath(t) {
          let e = this.chart,
            i = this.opposite,
            s = this.offset,
            o = this.horiz,
            r = this.left + (i ? this.width : 0) + s,
            a = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
          return (
            i && (t *= -1),
            e.renderer.crispLine(
              [
                ["M", o ? this.left : r, o ? a : this.top],
                [
                  "L",
                  o ? e.chartWidth - this.right : r,
                  o ? a : e.chartHeight - this.bottom,
                ],
              ],
              t
            )
          );
        }
        renderLine() {
          this.axisLine ||
            ((this.axisLine = this.chart.renderer
              .path()
              .addClass("highcharts-axis-line")
              .add(this.axisGroup)),
            this.chart.styledMode ||
              this.axisLine.attr({
                stroke: this.options.lineColor,
                "stroke-width": this.options.lineWidth,
                zIndex: 7,
              }));
        }
        getTitlePosition(t) {
          let e = this.horiz,
            i = this.left,
            s = this.top,
            o = this.len,
            r = this.options.title,
            a = e ? i : s,
            n = this.opposite,
            h = this.offset,
            l = r.x,
            d = r.y,
            c = this.chart.renderer.fontMetrics(t),
            p = t ? Math.max(t.getBBox(!1, 0).height - c.h - 1, 0) : 0,
            g = {
              low: a + (e ? 0 : o),
              middle: a + o / 2,
              high: a + (e ? o : 0),
            }[r.align],
            u =
              (e ? s + this.height : i) +
              (e ? 1 : -1) * (n ? -1 : 1) * (this.axisTitleMargin || 0) +
              [-p, p, c.f, -p][this.side],
            f = {
              x: e ? g + l : u + (n ? this.width : 0) + h + l,
              y: e ? u + d - (n ? this.height : 0) + h : g + d,
            };
          return sw(this, "afterGetTitlePosition", { titlePosition: f }), f;
        }
        renderMinorTick(t, e) {
          let i = this.minorTicks;
          i[t] || (i[t] = new sa(this, t, "minor")),
            e && i[t].isNew && i[t].render(null, !0),
            i[t].render(null, !1, 1);
        }
        renderTick(t, e, i) {
          let s = this.isLinked,
            o = this.ticks;
          (!s ||
            (t >= this.min && t <= this.max) ||
            (this.grid && this.grid.isColumn)) &&
            (o[t] || (o[t] = new sa(this, t)),
            i && o[t].isNew && o[t].render(e, !0, -1),
            o[t].render(e));
        }
        render() {
          let t, e;
          let i = this,
            s = i.chart,
            o = i.logarithmic,
            r = s.renderer,
            a = i.options,
            n = i.isLinked,
            h = i.tickPositions,
            l = i.axisTitle,
            d = i.ticks,
            c = i.minorTicks,
            p = i.alternateBands,
            g = a.stackLabels,
            u = a.alternateGridColor,
            f = a.crossing,
            m = i.tickmarkOffset,
            x = i.axisLine,
            y = i.showAxis,
            b = sn(r.globalAnimation);
          if (
            ((i.labelEdge.length = 0),
            (i.overlap = !1),
            [d, c, p].forEach(function (t) {
              sO(t, function (t) {
                t.isActive = !1;
              });
            }),
            sC(f))
          ) {
            let t = this.isXAxis ? s.yAxis[0] : s.xAxis[0],
              e = [1, -1, -1, 1][this.side];
            if (t) {
              let s = t.toPixels(f, !0);
              i.horiz && (s = t.len - s), (i.offset = e * s);
            }
          }
          if (i.hasData() || n) {
            let r = i.chart.hasRendered && i.old && sC(i.old.min);
            i.minorTickInterval &&
              !i.categories &&
              i.getMinorTickPositions().forEach(function (t) {
                i.renderMinorTick(t, r);
              }),
              h.length &&
                (h.forEach(function (t, e) {
                  i.renderTick(t, e, r);
                }),
                m &&
                  (0 === i.min || i.single) &&
                  (d[-1] || (d[-1] = new sa(i, -1, null, !0)),
                  d[-1].render(-1))),
              u &&
                h.forEach(function (r, a) {
                  (e = void 0 !== h[a + 1] ? h[a + 1] + m : i.max - m),
                    a % 2 == 0 &&
                      r < i.max &&
                      e <= i.max + (s.polar ? -m : m) &&
                      (p[r] || (p[r] = new k.PlotLineOrBand(i, {})),
                      (t = r + m),
                      (p[r].options = {
                        from: o ? o.lin2log(t) : t,
                        to: o ? o.lin2log(e) : e,
                        color: u,
                        className: "highcharts-alternate-grid",
                      }),
                      p[r].render(),
                      (p[r].isActive = !0));
                }),
              i._addedPlotLB ||
                ((i._addedPlotLB = !0),
                (a.plotLines || [])
                  .concat(a.plotBands || [])
                  .forEach(function (t) {
                    i.addPlotBandOrLine(t);
                  }));
          }
          [d, c, p].forEach(function (t) {
            let e = [],
              i = b.duration;
            sO(t, function (t, i) {
              t.isActive || (t.render(i, !1, 0), (t.isActive = !1), e.push(i));
            }),
              sN(
                function () {
                  let i = e.length;
                  for (; i--; )
                    t[e[i]] &&
                      !t[e[i]].isActive &&
                      (t[e[i]].destroy(), delete t[e[i]]);
                },
                t !== p && s.hasRendered && i ? i : 0
              );
          }),
            x &&
              (x[x.isPlaced ? "animate" : "attr"]({
                d: this.getLinePath(x.strokeWidth()),
              }),
              (x.isPlaced = !0),
              x[y ? "show" : "hide"](y)),
            l &&
              y &&
              (l[l.isNew ? "attr" : "animate"](i.getTitlePosition(l)),
              (l.isNew = !1)),
            g && g.enabled && i.stacking && i.stacking.renderStackTotals(),
            (i.old = {
              len: i.len,
              max: i.max,
              min: i.min,
              transA: i.transA,
              userMax: i.userMax,
              userMin: i.userMin,
            }),
            (i.isDirty = !1),
            sw(this, "afterRender");
        }
        redraw() {
          this.visible &&
            (this.render(),
            this.plotLinesAndBands.forEach(function (t) {
              t.render();
            })),
            this.series.forEach(function (t) {
              t.isDirty = !0;
            });
        }
        getKeepProps() {
          return this.keepProps || sR.keepProps;
        }
        destroy(t) {
          let e = this,
            i = e.plotLinesAndBands,
            s = this.eventOptions;
          if (
            (sw(this, "destroy", { keepEvents: t }),
            t || sD(e),
            [e.ticks, e.minorTicks, e.alternateBands].forEach(function (t) {
              sy(t);
            }),
            i)
          ) {
            let t = i.length;
            for (; t--; ) i[t].destroy();
          }
          for (let t in ([
            "axisLine",
            "axisTitle",
            "axisGroup",
            "gridGroup",
            "labelGroup",
            "cross",
            "scrollbar",
          ].forEach(function (t) {
            e[t] && (e[t] = e[t].destroy());
          }),
          e.plotLinesAndBandsGroups))
            e.plotLinesAndBandsGroups[t] =
              e.plotLinesAndBandsGroups[t].destroy();
          sO(e, function (t, i) {
            -1 === e.getKeepProps().indexOf(i) && delete e[i];
          }),
            (this.eventOptions = s);
        }
        drawCrosshair(t, e) {
          let i = this.crosshair,
            s = sE(i && i.snap, !0),
            o = this.chart,
            r,
            a,
            n,
            h = this.cross,
            l;
          if (
            (sw(this, "drawCrosshair", { e: t, point: e }),
            t || (t = this.cross && this.cross.e),
            i && !1 !== (sx(e) || !s))
          ) {
            if (
              (s
                ? sx(e) &&
                  (a = sE(
                    "colorAxis" !== this.coll ? e.crosshairPos : null,
                    this.isXAxis ? e.plotX : this.len - e.plotY
                  ))
                : (a =
                    t &&
                    (this.horiz
                      ? t.chartX - this.pos
                      : this.len - t.chartY + this.pos)),
              sx(a) &&
                ((l = {
                  value: e && (this.isXAxis ? e.x : sE(e.stackY, e.y)),
                  translatedValue: a,
                }),
                o.polar &&
                  sk(l, {
                    isCrosshair: !0,
                    chartX: t && t.chartX,
                    chartY: t && t.chartY,
                    point: e,
                  }),
                (r = this.getPlotLinePath(l) || null)),
              !sx(r))
            ) {
              this.hideCrosshair();
              return;
            }
            (n = this.categories && !this.isRadial),
              h ||
                ((this.cross = h =
                  o.renderer
                    .path()
                    .addClass(
                      "highcharts-crosshair highcharts-crosshair-" +
                        (n ? "category " : "thin ") +
                        (i.className || "")
                    )
                    .attr({ zIndex: sE(i.zIndex, 2) })
                    .add()),
                !o.styledMode &&
                  (h
                    .attr({
                      stroke:
                        i.color ||
                        (n
                          ? tk.parse("#ccd3ff").setOpacity(0.25).get()
                          : "#cccccc"),
                      "stroke-width": sE(i.width, 1),
                    })
                    .css({ "pointer-events": "none" }),
                  i.dashStyle && h.attr({ dashstyle: i.dashStyle }))),
              h.show().attr({ d: r }),
              n && !i.width && h.attr({ "stroke-width": this.transA }),
              (this.cross.e = t);
          } else this.hideCrosshair();
          sw(this, "afterDrawCrosshair", { e: t, point: e });
        }
        hideCrosshair() {
          this.cross && this.cross.hide(), sw(this, "afterHideCrosshair");
        }
        update(t, e) {
          let i = this.chart;
          (t = sP(this.userOptions, t)),
            this.destroy(!0),
            this.init(i, t),
            (i.isDirtyBox = !0),
            sE(e, !0) && i.redraw();
        }
        remove(t) {
          let e = this.chart,
            i = this.coll,
            s = this.series,
            o = s.length;
          for (; o--; ) s[o] && s[o].remove(!1);
          sb(e.axes, this),
            sb(e[i] || [], this),
            e.orderItems(i),
            this.destroy(),
            (e.isDirtyBox = !0),
            sE(t, !0) && e.redraw();
        }
        setTitle(t, e) {
          this.update({ title: t }, e);
        }
        setCategories(t, e) {
          this.update({ categories: t }, e);
        }
      }
      sR.keepProps = [
        "coll",
        "extKey",
        "hcEvents",
        "len",
        "names",
        "series",
        "userMax",
        "userMin",
      ];
      let {
        addEvent: sW,
        getMagnitude: sH,
        normalizeTickInterval: sX,
        timeUnits: sF,
      } = $;
      !(function (t) {
        function e() {
          return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
        }
        function i() {
          if ("datetime" !== this.type) {
            this.dateTime = void 0;
            return;
          }
          this.dateTime || (this.dateTime = new s(this));
        }
        t.compose = function (t) {
          return (
            t.keepProps.includes("dateTime") ||
              (t.keepProps.push("dateTime"),
              (t.prototype.getTimeTicks = e),
              sW(t, "afterSetType", i)),
            t
          );
        };
        class s {
          constructor(t) {
            this.axis = t;
          }
          normalizeTimeTickInterval(t, e) {
            let i = e || [
                ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                ["second", [1, 2, 5, 10, 15, 30]],
                ["minute", [1, 2, 5, 10, 15, 30]],
                ["hour", [1, 2, 3, 4, 6, 8, 12]],
                ["day", [1, 2]],
                ["week", [1, 2]],
                ["month", [1, 2, 3, 4, 6]],
                ["year", null],
              ],
              s = i[i.length - 1],
              o = sF[s[0]],
              r = s[1],
              a;
            for (
              a = 0;
              a < i.length &&
              ((o = sF[(s = i[a])[0]]),
              (r = s[1]),
              !i[a + 1] || !(t <= (o * r[r.length - 1] + sF[i[a + 1][0]]) / 2));
              a++
            );
            o === sF.year && t < 5 * o && (r = [1, 2, 5]);
            let n = sX(t / o, r, "year" === s[0] ? Math.max(sH(t / o), 1) : 1);
            return { unitRange: o, count: n, unitName: s[0] };
          }
          getXDateFormat(t, e) {
            let { axis: i } = this,
              s = i.chart.time;
            return i.closestPointRange
              ? s.getDateFormat(
                  i.closestPointRange,
                  t,
                  i.options.startOfWeek,
                  e
                ) || s.resolveDTLFormat(e.year).main
              : s.resolveDTLFormat(e.day).main;
          }
        }
        t.Additions = s;
      })(n || (n = {}));
      let sG = n,
        { addEvent: sY, normalizeTickInterval: sj, pick: sU } = $;
      !(function (t) {
        function e() {
          "logarithmic" !== this.type
            ? (this.logarithmic = void 0)
            : this.logarithmic ?? (this.logarithmic = new s(this));
        }
        function i() {
          let t = this.logarithmic;
          t &&
            ((this.lin2val = function (e) {
              return t.lin2log(e);
            }),
            (this.val2lin = function (e) {
              return t.log2lin(e);
            }));
        }
        t.compose = function (t) {
          return (
            t.keepProps.includes("logarithmic") ||
              (t.keepProps.push("logarithmic"),
              sY(t, "afterSetType", e),
              sY(t, "afterInit", i)),
            t
          );
        };
        class s {
          constructor(t) {
            this.axis = t;
          }
          getLogTickPositions(t, e, i, s) {
            let o = this.axis,
              r = o.len,
              a = o.options,
              n = [];
            if ((s || (this.minorAutoInterval = void 0), t >= 0.5))
              (t = Math.round(t)), (n = o.getLinearTickPositions(t, e, i));
            else if (t >= 0.08) {
              let o, r, a, h, l, d, c;
              let p = Math.floor(e);
              for (
                o =
                  t > 0.3
                    ? [1, 2, 4]
                    : t > 0.15
                    ? [1, 2, 4, 6, 8]
                    : [1, 2, 3, 4, 5, 6, 7, 8, 9],
                  r = p;
                r < i + 1 && !c;
                r++
              )
                for (a = 0, h = o.length; a < h && !c; a++)
                  (l = this.log2lin(this.lin2log(r) * o[a])) > e &&
                    (!s || d <= i) &&
                    void 0 !== d &&
                    n.push(d),
                    d > i && (c = !0),
                    (d = l);
            } else {
              let h = this.lin2log(e),
                l = this.lin2log(i),
                d = s ? o.getMinorTickInterval() : a.tickInterval,
                c = a.tickPixelInterval / (s ? 5 : 1),
                p = s ? r / o.tickPositions.length : r;
              (t = sj(
                (t = sU(
                  "auto" === d ? null : d,
                  this.minorAutoInterval,
                  ((l - h) * c) / (p || 1)
                ))
              )),
                (n = o.getLinearTickPositions(t, h, l).map(this.log2lin)),
                s || (this.minorAutoInterval = t / 5);
            }
            return s || (o.tickInterval = t), n;
          }
          lin2log(t) {
            return Math.pow(10, t);
          }
          log2lin(t) {
            return Math.log(t) / Math.LN10;
          }
        }
        t.Additions = s;
      })(h || (h = {}));
      let s$ = h,
        { erase: sV, extend: s_, isNumber: sq } = $;
      !(function (t) {
        let e;
        function i(t) {
          return this.addPlotBandOrLine(t, "plotBands");
        }
        function s(t, i) {
          let s = this.userOptions,
            o = new e(this, t);
          if ((this.visible && (o = o.render()), o)) {
            if (
              (this._addedPlotLB ||
                ((this._addedPlotLB = !0),
                (s.plotLines || []).concat(s.plotBands || []).forEach((t) => {
                  this.addPlotBandOrLine(t);
                })),
              i)
            ) {
              let e = s[i] || [];
              e.push(t), (s[i] = e);
            }
            this.plotLinesAndBands.push(o);
          }
          return o;
        }
        function o(t) {
          return this.addPlotBandOrLine(t, "plotLines");
        }
        function r(t, e, i) {
          i = i || this.options;
          let s = this.getPlotLinePath({
              value: e,
              force: !0,
              acrossPanes: i.acrossPanes,
            }),
            o = [],
            r = this.horiz,
            a =
              !sq(this.min) ||
              !sq(this.max) ||
              (t < this.min && e < this.min) ||
              (t > this.max && e > this.max),
            n = this.getPlotLinePath({
              value: t,
              force: !0,
              acrossPanes: i.acrossPanes,
            }),
            h,
            l = 1,
            d;
          if (n && s)
            for (
              a && ((d = n.toString() === s.toString()), (l = 0)), h = 0;
              h < n.length;
              h += 2
            ) {
              let t = n[h],
                e = n[h + 1],
                i = s[h],
                a = s[h + 1];
              ("M" === t[0] || "L" === t[0]) &&
                ("M" === e[0] || "L" === e[0]) &&
                ("M" === i[0] || "L" === i[0]) &&
                ("M" === a[0] || "L" === a[0]) &&
                (r && i[1] === t[1]
                  ? ((i[1] += l), (a[1] += l))
                  : r || i[2] !== t[2] || ((i[2] += l), (a[2] += l)),
                o.push(
                  ["M", t[1], t[2]],
                  ["L", e[1], e[2]],
                  ["L", a[1], a[2]],
                  ["L", i[1], i[2]],
                  ["Z"]
                )),
                (o.isFlat = d);
            }
          return o;
        }
        function a(t) {
          this.removePlotBandOrLine(t);
        }
        function n(t) {
          let e = this.plotLinesAndBands,
            i = this.options,
            s = this.userOptions;
          if (e) {
            let o = e.length;
            for (; o--; ) e[o].id === t && e[o].destroy();
            [
              i.plotLines || [],
              s.plotLines || [],
              i.plotBands || [],
              s.plotBands || [],
            ].forEach(function (e) {
              for (o = e.length; o--; ) (e[o] || {}).id === t && sV(e, e[o]);
            });
          }
        }
        function h(t) {
          this.removePlotBandOrLine(t);
        }
        t.compose = function (t, l) {
          let d = l.prototype;
          return (
            d.addPlotBand ||
              ((e = t),
              s_(d, {
                addPlotBand: i,
                addPlotLine: o,
                addPlotBandOrLine: s,
                getPlotBandPath: r,
                removePlotBand: a,
                removePlotLine: h,
                removePlotBandOrLine: n,
              })),
            l
          );
        };
      })(l || (l = {}));
      let sZ = l,
        {
          addEvent: sK,
          arrayMax: sJ,
          arrayMin: sQ,
          defined: s0,
          destroyObjectProperties: s1,
          erase: s2,
          fireEvent: s3,
          merge: s5,
          objectEach: s6,
          pick: s9,
        } = $;
      class s4 {
        static compose(t, e) {
          return (
            sK(t, "afterInit", function () {
              this.labelCollectors.push(() => {
                let t = [];
                for (let e of this.axes)
                  for (let { label: i, options: s } of e.plotLinesAndBands)
                    i && !s?.label?.allowOverlap && t.push(i);
                return t;
              });
            }),
            sZ.compose(s4, e)
          );
        }
        constructor(t, e) {
          (this.axis = t), (this.options = e), (this.id = e.id);
        }
        render() {
          s3(this, "render");
          let { axis: t, options: e } = this,
            { horiz: i, logarithmic: s } = t,
            { color: o, events: r, zIndex: a = 0 } = e,
            { renderer: n, time: h } = t.chart,
            l = {},
            d = h.parse(e.to),
            c = h.parse(e.from),
            p = h.parse(e.value),
            g = e.borderWidth,
            u = e.label,
            { label: f, svgElem: m } = this,
            x = [],
            y,
            b = s0(c) && s0(d),
            v = s0(p),
            k = !m,
            w = {
              class:
                "highcharts-plot-" +
                (b ? "band " : "line ") +
                (e.className || ""),
            },
            M = b ? "bands" : "lines";
          if (
            (!t.chart.styledMode &&
              (v
                ? ((w.stroke = o || "#999999"),
                  (w["stroke-width"] = s9(e.width, 1)),
                  e.dashStyle && (w.dashstyle = e.dashStyle))
                : b &&
                  ((w.fill = o || "#e6e9ff"),
                  g && ((w.stroke = e.borderColor), (w["stroke-width"] = g)))),
            (l.zIndex = a),
            (M += "-" + a),
            (y = t.plotLinesAndBandsGroups[M]) ||
              (t.plotLinesAndBandsGroups[M] = y =
                n
                  .g("plot-" + M)
                  .attr(l)
                  .add()),
            m || (this.svgElem = m = n.path().attr(w).add(y)),
            s0(p))
          )
            x = t.getPlotLinePath({
              value: s?.log2lin(p) ?? p,
              lineWidth: m.strokeWidth(),
              acrossPanes: e.acrossPanes,
            });
          else {
            if (!(s0(c) && s0(d))) return;
            x = t.getPlotBandPath(s?.log2lin(c) ?? c, s?.log2lin(d) ?? d, e);
          }
          return (
            !this.eventsAdded &&
              r &&
              (s6(r, (t, e) => {
                m?.on(e, (t) => {
                  r[e].apply(this, [t]);
                });
              }),
              (this.eventsAdded = !0)),
            (k || !m.d) && x?.length
              ? m.attr({ d: x })
              : m &&
                (x
                  ? (m.show(), m.animate({ d: x }))
                  : m.d && (m.hide(), f && (this.label = f = f.destroy()))),
            u &&
            (s0(u.text) || s0(u.formatter)) &&
            x?.length &&
            t.width > 0 &&
            t.height > 0 &&
            !x.isFlat
              ? ((u = s5(
                  {
                    align: i && b ? "center" : void 0,
                    x: i ? !b && 4 : 10,
                    verticalAlign: !i && b ? "middle" : void 0,
                    y: i ? (b ? 16 : 10) : b ? 6 : -4,
                    rotation: i && !b ? 90 : 0,
                    ...(b ? { inside: !0 } : {}),
                  },
                  u
                )),
                this.renderLabel(u, x, b, a))
              : f && f.hide(),
            this
          );
        }
        renderLabel(t, e, i, s) {
          let o = this.axis,
            r = o.chart.renderer,
            a = t.inside,
            n = this.label;
          n ||
            ((this.label = n =
              r.text(this.getLabelText(t), 0, 0, t.useHTML).attr({
                align: t.textAlign || t.align,
                rotation: t.rotation,
                class:
                  "highcharts-plot-" +
                  (i ? "band" : "line") +
                  "-label " +
                  (t.className || ""),
                zIndex: s,
              })),
            o.chart.styledMode ||
              n.css(
                s5(
                  {
                    fontSize: "0.8em",
                    textOverflow: i && !a ? "" : "ellipsis",
                  },
                  t.style
                )
              ),
            n.add());
          let h = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]],
            l = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]],
            d = sQ(h),
            c = sQ(l),
            p = sJ(h) - d;
          n.align(t, !1, { x: d, y: c, width: p, height: sJ(l) - c }),
            (!n.alignValue || "left" === n.alignValue || s0(a)) &&
              n.css({
                width:
                  (t.style?.width ||
                    (i && a
                      ? p
                      : 90 === n.rotation
                      ? o.height - (n.alignAttr.y - o.top)
                      : (t.clip ? o.width : o.chart.chartWidth) -
                        (n.alignAttr.x - o.left))) + "px",
              }),
            n.show(!0);
        }
        getLabelText(t) {
          return s0(t.formatter) ? t.formatter.call(this) : t.text;
        }
        destroy() {
          s2(this.axis.plotLinesAndBands, this), delete this.axis, s1(this);
        }
      }
      let { animObject: s8 } = tR,
        { format: s7 } = eo,
        { composed: ot, dateFormats: oe, doc: oi, isSafari: os } = k,
        { distribute: oo } = ed,
        {
          addEvent: or,
          clamp: oa,
          css: on,
          discardElement: oh,
          extend: ol,
          fireEvent: od,
          isArray: oc,
          isNumber: op,
          isObject: og,
          isString: ou,
          merge: of,
          pick: om,
          pushUnique: ox,
          splat: oy,
          syncTimeout: ob,
        } = $;
      class ov {
        constructor(t, e, i) {
          (this.allowShared = !0),
            (this.crosshairs = []),
            (this.distance = 0),
            (this.isHidden = !0),
            (this.isSticky = !1),
            (this.options = {}),
            (this.outside = !1),
            (this.chart = t),
            this.init(t, e),
            (this.pointer = i);
        }
        bodyFormatter(t) {
          return t.map((t) => {
            let e = t.series.tooltipOptions,
              i = t.formatPrefix || "point";
            return (e[i + "Formatter"] || t.tooltipFormatter).call(
              t,
              e[i + "Format"] || ""
            );
          });
        }
        cleanSplit(t) {
          this.chart.series.forEach(function (e) {
            let i = e && e.tt;
            i && (!i.isActive || t ? (e.tt = i.destroy()) : (i.isActive = !1));
          });
        }
        defaultFormatter(t) {
          let e;
          let i = this.points || oy(this);
          return (
            (e = (e = [t.headerFooterFormatter(i[0])]).concat(
              t.bodyFormatter(i)
            )).push(t.headerFooterFormatter(i[0], !0)),
            e
          );
        }
        destroy() {
          this.label && (this.label = this.label.destroy()),
            this.split &&
              (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())),
            this.renderer &&
              ((this.renderer = this.renderer.destroy()), oh(this.container)),
            $.clearTimeout(this.hideTimer);
        }
        getAnchor(t, e) {
          let i;
          let { chart: s, pointer: o } = this,
            r = s.inverted,
            a = s.plotTop,
            n = s.plotLeft;
          if (
            ((t = oy(t))[0].series &&
              t[0].series.yAxis &&
              !t[0].series.yAxis.options.reversedStacks &&
              (t = t.slice().reverse()),
            this.followPointer && e)
          )
            void 0 === e.chartX && (e = o.normalize(e)),
              (i = [e.chartX - n, e.chartY - a]);
          else if (t[0].tooltipPos) i = t[0].tooltipPos;
          else {
            let s = 0,
              o = 0;
            t.forEach(function (t) {
              let e = t.pos(!0);
              e && ((s += e[0]), (o += e[1]));
            }),
              (s /= t.length),
              (o /= t.length),
              this.shared &&
                t.length > 1 &&
                e &&
                (r ? (s = e.chartX) : (o = e.chartY)),
              (i = [s - n, o - a]);
          }
          return i.map(Math.round);
        }
        getClassName(t, e, i) {
          let s = this.options,
            o = t.series,
            r = o.options;
          return [
            s.className,
            "highcharts-label",
            i && "highcharts-tooltip-header",
            e ? "highcharts-tooltip-box" : "highcharts-tooltip",
            !i && "highcharts-color-" + om(t.colorIndex, o.colorIndex),
            r && r.className,
          ]
            .filter(ou)
            .join(" ");
        }
        getLabel({ anchorX: t, anchorY: e } = { anchorX: 0, anchorY: 0 }) {
          let i = this,
            s = this.chart.styledMode,
            o = this.options,
            r = this.split && this.allowShared,
            a = this.container,
            n = this.chart.renderer;
          if (this.label) {
            let t = !this.label.hasClass("highcharts-label");
            ((!r && t) || (r && !t)) && this.destroy();
          }
          if (!this.label) {
            if (this.outside) {
              let t = this.chart,
                e = t.options.chart.style,
                i = er.getRendererType();
              (this.container = a = k.doc.createElement("div")),
                (a.className =
                  "highcharts-tooltip-container " +
                  (t.renderTo.className.match(
                    /(highcharts[a-zA-Z0-9-]+)\s?/gm
                  ) || "")),
                on(a, {
                  position: "absolute",
                  top: "1px",
                  pointerEvents: "none",
                  zIndex: Math.max(
                    this.options.style.zIndex || 0,
                    ((e && e.zIndex) || 0) + 3
                  ),
                }),
                (this.renderer = n =
                  new i(a, 0, 0, e, void 0, void 0, n.styledMode));
            }
            if (
              (r
                ? (this.label = n.g("tooltip"))
                : ((this.label = n
                    .label(
                      "",
                      t,
                      e,
                      o.shape,
                      void 0,
                      void 0,
                      o.useHTML,
                      void 0,
                      "tooltip"
                    )
                    .attr({ padding: o.padding, r: o.borderRadius })),
                  s ||
                    this.label
                      .attr({
                        fill: o.backgroundColor,
                        "stroke-width": o.borderWidth || 0,
                      })
                      .css(o.style)
                      .css({
                        pointerEvents:
                          o.style.pointerEvents ||
                          (this.shouldStickOnContact() ? "auto" : "none"),
                      })),
              i.outside)
            ) {
              let t = this.label;
              [t.xSetter, t.ySetter].forEach((e, s) => {
                t[s ? "ySetter" : "xSetter"] = (o) => {
                  e.call(t, i.distance),
                    (t[s ? "y" : "x"] = o),
                    a && (a.style[s ? "top" : "left"] = `${o}px`);
                };
              });
            }
            this.label.attr({ zIndex: 8 }).shadow(o.shadow).add();
          }
          return a && !a.parentElement && k.doc.body.appendChild(a), this.label;
        }
        getPlayingField() {
          let { body: t, documentElement: e } = oi,
            { chart: i, distance: s, outside: o } = this;
          return {
            width: o
              ? Math.max(
                  t.scrollWidth,
                  e.scrollWidth,
                  t.offsetWidth,
                  e.offsetWidth,
                  e.clientWidth
                ) -
                2 * s -
                2
              : i.chartWidth,
            height: o
              ? Math.max(
                  t.scrollHeight,
                  e.scrollHeight,
                  t.offsetHeight,
                  e.offsetHeight,
                  e.clientHeight
                )
              : i.chartHeight,
          };
        }
        getPosition(t, e, i) {
          let { distance: s, chart: o, outside: r, pointer: a } = this,
            { inverted: n, plotLeft: h, plotTop: l, polar: d } = o,
            { plotX: c = 0, plotY: p = 0 } = i,
            g = {},
            u = (n && i.h) || 0,
            { height: f, width: m } = this.getPlayingField(),
            x = a.getChartPosition(),
            y = (t) => t * x.scaleX,
            b = (t) => t * x.scaleY,
            v = (i) => {
              let a = "x" === i;
              return [i, a ? m : f, a ? t : e].concat(
                r
                  ? [
                      a ? y(t) : b(e),
                      a ? x.left - s + y(c + h) : x.top - s + b(p + l),
                      0,
                      a ? m : f,
                    ]
                  : [
                      a ? t : e,
                      a ? c + h : p + l,
                      a ? h : l,
                      a ? h + o.plotWidth : l + o.plotHeight,
                    ]
              );
            },
            k = v("y"),
            w = v("x"),
            M,
            S = !!i.negative;
          !d && o.hoverSeries?.yAxis?.reversed && (S = !S);
          let T = !this.followPointer && om(i.ttBelow, !d && !n === S),
            C = function (t, e, i, o, a, n, h) {
              let l = r ? ("y" === t ? b(s) : y(s)) : s,
                d = (i - o) / 2,
                c = o < a - s,
                p = a + s + o < e,
                f = a - l - i + d,
                m = a + l - d;
              if (T && p) g[t] = m;
              else if (!T && c) g[t] = f;
              else if (c) g[t] = Math.min(h - o, f - u < 0 ? f : f - u);
              else {
                if (!p) return !1;
                g[t] = Math.max(n, m + u + i > e ? m : m + u);
              }
            },
            A = function (t, e, i, o, r) {
              if (r < s || r > e - s) return !1;
              r < i / 2
                ? (g[t] = 1)
                : r > e - o / 2
                ? (g[t] = e - o - 2)
                : (g[t] = r - i / 2);
            },
            P = function (t) {
              ([k, w] = [w, k]), (M = t);
            },
            L = () => {
              !1 !== C.apply(0, k)
                ? !1 !== A.apply(0, w) || M || (P(!0), L())
                : M
                ? (g.x = g.y = 0)
                : (P(!0), L());
            };
          return ((n && !d) || this.len > 1) && P(), L(), g;
        }
        hide(t) {
          let e = this;
          $.clearTimeout(this.hideTimer),
            (t = om(t, this.options.hideDelay)),
            this.isHidden ||
              (this.hideTimer = ob(function () {
                let i = e.getLabel();
                e.getLabel().animate(
                  { opacity: 0 },
                  {
                    duration: t ? 150 : t,
                    complete: () => {
                      i.hide(), e.container && e.container.remove();
                    },
                  }
                ),
                  (e.isHidden = !0);
              }, t));
        }
        init(t, e) {
          (this.chart = t),
            (this.options = e),
            (this.crosshairs = []),
            (this.isHidden = !0),
            (this.split = e.split && !t.inverted && !t.polar),
            (this.shared = e.shared || this.split),
            (this.outside = om(
              e.outside,
              !!(t.scrollablePixelsX || t.scrollablePixelsY)
            ));
        }
        shouldStickOnContact(t) {
          return !!(
            !this.followPointer &&
            this.options.stickOnContact &&
            (!t || this.pointer.inClass(t.target, "highcharts-tooltip"))
          );
        }
        move(t, e, i, s) {
          let o = this,
            r = s8(!o.isHidden && o.options.animation),
            a = o.followPointer || (o.len || 0) > 1,
            n = { x: t, y: e };
          a || ((n.anchorX = i), (n.anchorY = s)),
            (r.step = () => o.drawTracker()),
            o.getLabel().animate(n, r);
        }
        refresh(t, e) {
          let { chart: i, options: s, pointer: o, shared: r } = this,
            a = oy(t),
            n = a[0],
            h = s.format,
            l = s.formatter || this.defaultFormatter,
            d = i.styledMode,
            c = this.allowShared;
          if (!s.enabled || !n.series) return;
          $.clearTimeout(this.hideTimer),
            (this.allowShared = !(
              !oc(t) &&
              t.series &&
              t.series.noSharedTooltip
            )),
            (c = c && !this.allowShared),
            (this.followPointer =
              !this.split && n.series.tooltipOptions.followPointer);
          let p = this.getAnchor(t, e),
            g = p[0],
            u = p[1];
          r &&
            this.allowShared &&
            (o.applyInactiveState(a),
            a.forEach((t) => t.setState("hover")),
            (n.points = a)),
            (this.len = a.length);
          let f = ou(h) ? s7(h, n, i) : l.call(n, this);
          n.points = void 0;
          let m = n.series;
          if (((this.distance = om(m.tooltipOptions.distance, 16)), !1 === f))
            this.hide();
          else {
            if (this.split && this.allowShared) this.renderSplit(f, a);
            else {
              let t = g,
                r = u;
              if (
                (e &&
                  o.isDirectTouch &&
                  ((t = e.chartX - i.plotLeft), (r = e.chartY - i.plotTop)),
                i.polar ||
                  !1 === m.options.clip ||
                  a.some(
                    (e) => o.isDirectTouch || e.series.shouldShowTooltip(t, r)
                  ))
              ) {
                let t = this.getLabel((c && this.tt) || {});
                (!s.style.width || d) &&
                  t.css({
                    width:
                      (this.outside ? this.getPlayingField() : i.spacingBox)
                        .width + "px",
                  }),
                  t.attr({
                    class: this.getClassName(n),
                    text: f && f.join ? f.join("") : f,
                  }),
                  this.outside &&
                    t.attr({
                      x: oa(
                        t.x || 0,
                        0,
                        this.getPlayingField().width - (t.width || 0) - 1
                      ),
                    }),
                  d ||
                    t.attr({
                      stroke: s.borderColor || n.color || m.color || "#666666",
                    }),
                  this.updatePosition({
                    plotX: g,
                    plotY: u,
                    negative: n.negative,
                    ttBelow: n.ttBelow,
                    h: p[2] || 0,
                  });
              } else {
                this.hide();
                return;
              }
            }
            this.isHidden &&
              this.label &&
              this.label.attr({ opacity: 1 }).show(),
              (this.isHidden = !1);
          }
          od(this, "refresh");
        }
        renderSplit(t, e) {
          let i = this,
            {
              chart: s,
              chart: {
                chartWidth: o,
                chartHeight: r,
                plotHeight: a,
                plotLeft: n,
                plotTop: h,
                scrollablePixelsY: l = 0,
                scrollablePixelsX: d,
                styledMode: c,
              },
              distance: p,
              options: g,
              options: { positioner: u },
              pointer: f,
            } = i,
            { scrollLeft: m = 0, scrollTop: x = 0 } =
              s.scrollablePlotArea?.scrollingContainer || {},
            y =
              i.outside && "number" != typeof d
                ? oi.documentElement.getBoundingClientRect()
                : { left: m, right: m + o, top: x, bottom: x + r },
            b = i.getLabel(),
            v = this.renderer || s.renderer,
            k = !!(s.xAxis[0] && s.xAxis[0].opposite),
            { left: w, top: M } = f.getChartPosition(),
            S = h + x,
            T = 0,
            C = a - l;
          function A(t, e, s, o, r = !0) {
            let a, n;
            return (
              s
                ? ((a = k ? 0 : C),
                  (n = oa(
                    t - o / 2,
                    y.left,
                    y.right - o - (i.outside ? w : 0)
                  )))
                : ((a = e - S),
                  (n = oa(
                    (n = r ? t - o - p : t + p),
                    r ? n : y.left,
                    y.right
                  ))),
              { x: n, y: a }
            );
          }
          ou(t) && (t = [!1, t]);
          let P = t.slice(0, e.length + 1).reduce(function (t, s, o) {
            if (!1 !== s && "" !== s) {
              let r = e[o - 1] || {
                  isHeader: !0,
                  plotX: e[0].plotX,
                  plotY: a,
                  series: {},
                },
                l = r.isHeader,
                d = l ? i : r.series,
                f = (d.tt = (function (t, e, s) {
                  let o = t,
                    { isHeader: r, series: a } = e;
                  if (!o) {
                    let t = { padding: g.padding, r: g.borderRadius };
                    c ||
                      ((t.fill = g.backgroundColor),
                      (t["stroke-width"] = g.borderWidth ?? 1)),
                      (o = v
                        .label(
                          "",
                          0,
                          0,
                          g[r ? "headerShape" : "shape"],
                          void 0,
                          void 0,
                          g.useHTML
                        )
                        .addClass(i.getClassName(e, !0, r))
                        .attr(t)
                        .add(b));
                  }
                  return (
                    (o.isActive = !0),
                    o.attr({ text: s }),
                    c ||
                      o.css(g.style).attr({
                        stroke:
                          g.borderColor || e.color || a.color || "#333333",
                      }),
                    o
                  );
                })(d.tt, r, s.toString())),
                m = f.getBBox(),
                x = m.width + f.strokeWidth();
              l && ((T = m.height), (C += T), k && (S -= T));
              let { anchorX: w, anchorY: M } = (function (t) {
                let e, i;
                let { isHeader: s, plotX: o = 0, plotY: r = 0, series: l } = t;
                if (s) (e = Math.max(n + o, n)), (i = h + a / 2);
                else {
                  let { xAxis: t, yAxis: s } = l;
                  (e = t.pos + oa(o, -p, t.len + p)),
                    l.shouldShowTooltip(0, s.pos - h + r, { ignoreX: !0 }) &&
                      (i = s.pos + r);
                }
                return {
                  anchorX: (e = oa(e, y.left - p, y.right + p)),
                  anchorY: i,
                };
              })(r);
              if ("number" == typeof M) {
                let e = m.height + 1,
                  s = u ? u.call(i, x, e, r) : A(w, M, l, x);
                t.push({
                  align: u ? 0 : void 0,
                  anchorX: w,
                  anchorY: M,
                  boxWidth: x,
                  point: r,
                  rank: om(s.rank, l ? 1 : 0),
                  size: e,
                  target: s.y,
                  tt: f,
                  x: s.x,
                });
              } else f.isActive = !1;
            }
            return t;
          }, []);
          !u &&
            P.some((t) => {
              let { outside: e } = i,
                s = (e ? w : 0) + t.anchorX;
              return (
                (s < y.left && s + t.boxWidth < y.right) ||
                (s < w - y.left + t.boxWidth && y.right - s > s)
              );
            }) &&
            (P = P.map((t) => {
              let { x: e, y: i } = A(
                t.anchorX,
                t.anchorY,
                t.point.isHeader,
                t.boxWidth,
                !1
              );
              return ol(t, { target: i, x: e });
            })),
            i.cleanSplit(),
            oo(P, C);
          let L = { left: w, right: w };
          P.forEach(function (t) {
            let { x: e, boxWidth: s, isHeader: o } = t;
            !o &&
              (i.outside && w + e < L.left && (L.left = w + e),
              !o && i.outside && L.left + s > L.right && (L.right = w + e));
          }),
            P.forEach(function (t) {
              let {
                  x: e,
                  anchorX: s,
                  anchorY: o,
                  pos: r,
                  point: { isHeader: a },
                } = t,
                n = {
                  visibility: void 0 === r ? "hidden" : "inherit",
                  x: e,
                  y: (r || 0) + S,
                  anchorX: s,
                  anchorY: o,
                };
              if (i.outside && e < s) {
                let t = w - L.left;
                t > 0 &&
                  (a || ((n.x = e + t), (n.anchorX = s + t)),
                  a && ((n.x = (L.right - L.left) / 2), (n.anchorX = s + t)));
              }
              t.tt.attr(n);
            });
          let { container: O, outside: E, renderer: I } = i;
          if (E && O && I) {
            let { width: t, height: e, x: i, y: s } = b.getBBox();
            I.setSize(t + i, e + s, !1),
              (O.style.left = L.left + "px"),
              (O.style.top = M + "px");
          }
          os && b.attr({ opacity: 1 === b.opacity ? 0.999 : 1 });
        }
        drawTracker() {
          if (!this.shouldStickOnContact()) {
            this.tracker && (this.tracker = this.tracker.destroy());
            return;
          }
          let t = this.chart,
            e = this.label,
            i = this.shared ? t.hoverPoints : t.hoverPoint;
          if (!e || !i) return;
          let s = { x: 0, y: 0, width: 0, height: 0 },
            o = this.getAnchor(i),
            r = e.getBBox();
          (o[0] += t.plotLeft - (e.translateX || 0)),
            (o[1] += t.plotTop - (e.translateY || 0)),
            (s.x = Math.min(0, o[0])),
            (s.y = Math.min(0, o[1])),
            (s.width =
              o[0] < 0
                ? Math.max(Math.abs(o[0]), r.width - o[0])
                : Math.max(Math.abs(o[0]), r.width)),
            (s.height =
              o[1] < 0
                ? Math.max(Math.abs(o[1]), r.height - Math.abs(o[1]))
                : Math.max(Math.abs(o[1]), r.height)),
            this.tracker
              ? this.tracker.attr(s)
              : ((this.tracker = e.renderer
                  .rect(s)
                  .addClass("highcharts-tracker")
                  .add(e)),
                t.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
        }
        styledModeFormat(t) {
          return t
            .replace('style="font-size: 0.8em"', 'class="highcharts-header"')
            .replace(
              /style="color:{(point|series)\.color}"/g,
              'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"'
            );
        }
        headerFooterFormatter(t, e) {
          let i = t.series,
            s = i.tooltipOptions,
            o = i.xAxis,
            r = o && o.dateTime,
            a = { isFooter: e, point: t },
            n = s.xDateFormat || "",
            h = s[e ? "footerFormat" : "headerFormat"];
          return (
            od(this, "headerFormatter", a, function (e) {
              if (
                (r &&
                  !n &&
                  op(t.key) &&
                  (n = r.getXDateFormat(t.key, s.dateTimeLabelFormats)),
                r && n)
              ) {
                if (og(n)) {
                  let t = n;
                  (oe[0] = (e) => i.chart.time.dateFormat(t, e)), (n = "%0");
                }
                (t.tooltipDateKeys || ["key"]).forEach((t) => {
                  h = h.replace(
                    RegExp("point\\." + t + "([ \\)}])", ""),
                    `(point.${t}:${n})$1`
                  );
                });
              }
              i.chart.styledMode && (h = this.styledModeFormat(h)),
                (e.text = s7(h, t, this.chart));
            }),
            a.text || ""
          );
        }
        update(t) {
          this.destroy(), this.init(this.chart, of(!0, this.options, t));
        }
        updatePosition(t) {
          let {
              chart: e,
              container: i,
              distance: s,
              options: o,
              pointer: r,
              renderer: a,
            } = this,
            { height: n = 0, width: h = 0 } = this.getLabel(),
            { left: l, top: d, scaleX: c, scaleY: p } = r.getChartPosition(),
            g = (o.positioner || this.getPosition).call(this, h, n, t),
            u = k.doc,
            f = (t.plotX || 0) + e.plotLeft,
            m = (t.plotY || 0) + e.plotTop,
            x;
          a &&
            i &&
            (o.positioner && ((g.x += l - s), (g.y += d - s)),
            (x = (o.borderWidth || 0) + 2 * s + 2),
            a.setSize(
              oa(h + x, 0, u.documentElement.clientWidth) - 1,
              n + x,
              !1
            ),
            (1 !== c || 1 !== p) &&
              (on(i, { transform: `scale(${c}, ${p})` }), (f *= c), (m *= p)),
            (f += l - g.x),
            (m += d - g.y)),
            this.move(Math.round(g.x), Math.round(g.y || 0), f, m);
        }
      }
      !(function (t) {
        t.compose = function (e) {
          ox(ot, "Core.Tooltip") &&
            or(e, "afterInit", function () {
              let e = this.chart;
              e.options.tooltip &&
                (e.tooltip = new t(e, e.options.tooltip, this));
            });
        };
      })(ov || (ov = {}));
      let ok = ov,
        { animObject: ow } = tR,
        { defaultOptions: oM } = tm,
        { format: oS } = eo,
        {
          addEvent: oT,
          crisp: oC,
          erase: oA,
          extend: oP,
          fireEvent: oL,
          getNestedProperty: oO,
          isArray: oE,
          isFunction: oI,
          isNumber: oD,
          isObject: oB,
          merge: oN,
          pick: oz,
          syncTimeout: oR,
          removeEvent: oW,
          uniqueKey: oH,
        } = $;
      class oX {
        animateBeforeDestroy() {
          let t = this,
            e = { x: t.startXPos, opacity: 0 },
            i = t.getGraphicalProps();
          i.singular.forEach(function (i) {
            t[i] = t[i].animate(
              "dataLabel" === i
                ? { x: t[i].startXPos, y: t[i].startYPos, opacity: 0 }
                : e
            );
          }),
            i.plural.forEach(function (e) {
              t[e].forEach(function (e) {
                e.element &&
                  e.animate(
                    oP(
                      { x: t.startXPos },
                      e.startYPos ? { x: e.startXPos, y: e.startYPos } : {}
                    )
                  );
              });
            });
        }
        applyOptions(t, e) {
          let i = this.series,
            s = i.options.pointValKey || i.pointValKey;
          return (
            oP(this, (t = oX.prototype.optionsToObject.call(this, t))),
            (this.options = this.options ? oP(this.options, t) : t),
            t.group && delete this.group,
            t.dataLabels && delete this.dataLabels,
            s && (this.y = oX.prototype.getNestedProperty.call(this, s)),
            this.selected && (this.state = "select"),
            "name" in this &&
              void 0 === e &&
              i.xAxis &&
              i.xAxis.hasNames &&
              (this.x = i.xAxis.nameToX(this)),
            void 0 === this.x && i
              ? (this.x = e ?? i.autoIncrement())
              : oD(t.x) && i.options.relativeXValue
              ? (this.x = i.autoIncrement(t.x))
              : "string" == typeof this.x &&
                (e ?? (e = i.chart.time.parse(this.x)), oD(e) && (this.x = e)),
            (this.isNull = this.isValid && !this.isValid()),
            (this.formatPrefix = this.isNull ? "null" : "point"),
            this
          );
        }
        destroy() {
          if (!this.destroyed) {
            let t = this,
              e = t.series,
              i = e.chart,
              s = e.options.dataSorting,
              o = i.hoverPoints,
              r = ow(t.series.chart.renderer.globalAnimation),
              a = () => {
                for (let e in ((t.graphic ||
                  t.graphics ||
                  t.dataLabel ||
                  t.dataLabels) &&
                  (oW(t), t.destroyElements()),
                t))
                  delete t[e];
              };
            t.legendItem && i.legend.destroyItem(t),
              o && (t.setState(), oA(o, t), o.length || (i.hoverPoints = null)),
              t === i.hoverPoint && t.onMouseOut(),
              s && s.enabled
                ? (this.animateBeforeDestroy(), oR(a, r.duration))
                : a(),
              i.pointCount--;
          }
          this.destroyed = !0;
        }
        destroyElements(t) {
          let e = this,
            i = e.getGraphicalProps(t);
          i.singular.forEach(function (t) {
            e[t] = e[t].destroy();
          }),
            i.plural.forEach(function (t) {
              e[t].forEach(function (t) {
                t && t.element && t.destroy();
              }),
                delete e[t];
            });
        }
        firePointEvent(t, e, i) {
          let s = this,
            o = this.series.options;
          s.manageEvent(t),
            "click" === t &&
              o.allowPointSelect &&
              (i = function (t) {
                !s.destroyed &&
                  s.select &&
                  s.select(null, t.ctrlKey || t.metaKey || t.shiftKey);
              }),
            oL(s, t, e, i);
        }
        getClassName() {
          return (
            "highcharts-point" +
            (this.selected ? " highcharts-point-select" : "") +
            (this.negative ? " highcharts-negative" : "") +
            (this.isNull ? " highcharts-null-point" : "") +
            (void 0 !== this.colorIndex
              ? " highcharts-color-" + this.colorIndex
              : "") +
            (this.options.className ? " " + this.options.className : "") +
            (this.zone && this.zone.className
              ? " " + this.zone.className.replace("highcharts-negative", "")
              : "")
          );
        }
        getGraphicalProps(t) {
          let e, i;
          let s = this,
            o = [],
            r = { singular: [], plural: [] };
          for (
            (t = t || { graphic: 1, dataLabel: 1 }).graphic &&
              o.push("graphic", "connector"),
              t.dataLabel &&
                o.push("dataLabel", "dataLabelPath", "dataLabelUpper"),
              i = o.length;
            i--;

          )
            s[(e = o[i])] && r.singular.push(e);
          return (
            ["graphic", "dataLabel"].forEach(function (e) {
              let i = e + "s";
              t[e] && s[i] && r.plural.push(i);
            }),
            r
          );
        }
        getNestedProperty(t) {
          return t
            ? 0 === t.indexOf("custom.")
              ? oO(t, this.options)
              : this[t]
            : void 0;
        }
        getZone() {
          let t = this.series,
            e = t.zones,
            i = t.zoneAxis || "y",
            s,
            o = 0;
          for (s = e[0]; this[i] >= s.value; ) s = e[++o];
          return (
            this.nonZonedColor || (this.nonZonedColor = this.color),
            s && s.color && !this.options.color
              ? (this.color = s.color)
              : (this.color = this.nonZonedColor),
            s
          );
        }
        hasNewShapeType() {
          return (
            (this.graphic &&
              (this.graphic.symbolName || this.graphic.element.nodeName)) !==
            this.shapeType
          );
        }
        constructor(t, e, i) {
          (this.formatPrefix = "point"),
            (this.visible = !0),
            (this.point = this),
            (this.series = t),
            this.applyOptions(e, i),
            this.id ?? (this.id = oH()),
            this.resolveColor(),
            t.chart.pointCount++,
            oL(this, "afterInit");
        }
        isValid() {
          return (oD(this.x) || this.x instanceof Date) && oD(this.y);
        }
        optionsToObject(t) {
          let e = this.series,
            i = e.options.keys,
            s = i || e.pointArrayMap || ["y"],
            o = s.length,
            r = {},
            a,
            n = 0,
            h = 0;
          if (oD(t) || null === t) r[s[0]] = t;
          else if (oE(t))
            for (
              !i &&
              t.length > o &&
              ("string" == (a = typeof t[0])
                ? e.xAxis?.dateTime
                  ? (r.x = e.chart.time.parse(t[0]))
                  : (r.name = t[0])
                : "number" === a && (r.x = t[0]),
              n++);
              h < o;

            )
              (i && void 0 === t[n]) ||
                (s[h].indexOf(".") > 0
                  ? oX.prototype.setNestedProperty(r, t[n], s[h])
                  : (r[s[h]] = t[n])),
                n++,
                h++;
          else
            "object" == typeof t &&
              ((r = t),
              t.dataLabels && (e.hasDataLabels = () => !0),
              t.marker && (e._hasPointMarkers = !0));
          return r;
        }
        pos(t, e = this.plotY) {
          if (!this.destroyed) {
            let { plotX: i, series: s } = this,
              { chart: o, xAxis: r, yAxis: a } = s,
              n = 0,
              h = 0;
            if (oD(i) && oD(e))
              return (
                t &&
                  ((n = r ? r.pos : o.plotLeft), (h = a ? a.pos : o.plotTop)),
                o.inverted && r && a
                  ? [a.len - e + h, r.len - i + n]
                  : [i + n, e + h]
              );
          }
        }
        resolveColor() {
          let t = this.series,
            e = t.chart.options.chart,
            i = t.chart.styledMode,
            s,
            o,
            r = e.colorCount,
            a;
          delete this.nonZonedColor,
            t.options.colorByPoint
              ? (i ||
                  ((s = (o = t.options.colors || t.chart.options.colors)[
                    t.colorCounter
                  ]),
                  (r = o.length)),
                (a = t.colorCounter),
                t.colorCounter++,
                t.colorCounter === r && (t.colorCounter = 0))
              : (i || (s = t.color), (a = t.colorIndex)),
            (this.colorIndex = oz(this.options.colorIndex, a)),
            (this.color = oz(this.options.color, s));
        }
        setNestedProperty(t, e, i) {
          return (
            i.split(".").reduce(function (t, i, s, o) {
              let r = o.length - 1 === s;
              return (t[i] = r ? e : oB(t[i], !0) ? t[i] : {}), t[i];
            }, t),
            t
          );
        }
        shouldDraw() {
          return !this.isNull;
        }
        tooltipFormatter(t) {
          let {
              chart: e,
              pointArrayMap: i = ["y"],
              tooltipOptions: s,
            } = this.series,
            {
              valueDecimals: o = "",
              valuePrefix: r = "",
              valueSuffix: a = "",
            } = s;
          return (
            e.styledMode && (t = e.tooltip?.styledModeFormat(t) || t),
            i.forEach((e) => {
              (e = "{point." + e),
                (r || a) &&
                  (t = t.replace(RegExp(e + "}", "g"), r + e + "}" + a)),
                (t = t.replace(RegExp(e + "}", "g"), e + ":,." + o + "f}"));
            }),
            oS(t, this, e)
          );
        }
        update(t, e, i, s) {
          let o;
          let r = this,
            a = r.series,
            n = r.graphic,
            h = a.chart,
            l = a.options;
          function d() {
            r.applyOptions(t);
            let s = n && r.hasMockGraphic,
              d = null === r.y ? !s : s;
            n && d && ((r.graphic = n.destroy()), delete r.hasMockGraphic),
              oB(t, !0) &&
                (n &&
                  n.element &&
                  t &&
                  t.marker &&
                  void 0 !== t.marker.symbol &&
                  (r.graphic = n.destroy()),
                t?.dataLabels &&
                  r.dataLabel &&
                  (r.dataLabel = r.dataLabel.destroy())),
              (o = r.index);
            let c = {};
            for (let t of a.dataColumnKeys()) c[t] = r[t];
            a.dataTable.setRow(c, o),
              (l.data[o] =
                oB(l.data[o], !0) || oB(t, !0) ? r.options : oz(t, l.data[o])),
              (a.isDirty = a.isDirtyData = !0),
              !a.fixedBox && a.hasCartesianSeries && (h.isDirtyBox = !0),
              "point" === l.legendType && (h.isDirtyLegend = !0),
              e && h.redraw(i);
          }
          (e = oz(e, !0)),
            !1 === s ? d() : r.firePointEvent("update", { options: t }, d);
        }
        remove(t, e) {
          this.series.removePoint(this.series.data.indexOf(this), t, e);
        }
        select(t, e) {
          let i = this,
            s = i.series,
            o = s.chart;
          (t = oz(t, !i.selected)),
            (this.selectedStaging = t),
            i.firePointEvent(
              t ? "select" : "unselect",
              { accumulate: e },
              function () {
                (i.selected = i.options.selected = t),
                  (s.options.data[s.data.indexOf(i)] = i.options),
                  i.setState(t && "select"),
                  e ||
                    o.getSelectedPoints().forEach(function (t) {
                      let e = t.series;
                      t.selected &&
                        t !== i &&
                        ((t.selected = t.options.selected = !1),
                        (e.options.data[e.data.indexOf(t)] = t.options),
                        t.setState(
                          o.hoverPoints && e.options.inactiveOtherPoints
                            ? "inactive"
                            : ""
                        ),
                        t.firePointEvent("unselect"));
                    });
              }
            ),
            delete this.selectedStaging;
        }
        onMouseOver(t) {
          let { inverted: e, pointer: i } = this.series.chart;
          i &&
            ((t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e)),
            i.runPointActions(t, this));
        }
        onMouseOut() {
          let t = this.series.chart;
          this.firePointEvent("mouseOut"),
            this.series.options.inactiveOtherPoints ||
              (t.hoverPoints || []).forEach(function (t) {
                t.setState();
              }),
            (t.hoverPoints = t.hoverPoint = null);
        }
        manageEvent(t) {
          let e = oN(this.series.options.point, this.options),
            i = e.events?.[t];
          oI(i) &&
          (!this.hcEvents?.[t] ||
            this.hcEvents?.[t]?.map((t) => t.fn).indexOf(i) === -1)
            ? (this.importedUserEvent?.(),
              (this.importedUserEvent = oT(this, t, i)),
              this.hcEvents && (this.hcEvents[t].userEvent = !0))
            : this.importedUserEvent &&
              !i &&
              this.hcEvents?.[t] &&
              this.hcEvents?.[t].userEvent &&
              (oW(this, t),
              delete this.hcEvents[t],
              Object.keys(this.hcEvents) || delete this.importedUserEvent);
        }
        setState(t, e) {
          let i = this.series,
            s = this.state,
            o = i.options.states[t || "normal"] || {},
            r = oM.plotOptions[i.type].marker && i.options.marker,
            a = r && !1 === r.enabled,
            n = (r && r.states && r.states[t || "normal"]) || {},
            h = !1 === n.enabled,
            l = this.marker || {},
            d = i.chart,
            c = r && i.markerAttribs,
            p = i.halo,
            g,
            u,
            f,
            m = i.stateMarkerGraphic,
            x;
          if (
            ((t = t || "") === this.state && !e) ||
            (this.selected && "select" !== t) ||
            !1 === o.enabled ||
            (t && (h || (a && !1 === n.enabled))) ||
            (t && l.states && l.states[t] && !1 === l.states[t].enabled)
          )
            return;
          if (
            ((this.state = t),
            c && (g = i.markerAttribs(this, t)),
            this.graphic && !this.hasMockGraphic)
          ) {
            if (
              (s && this.graphic.removeClass("highcharts-point-" + s),
              t && this.graphic.addClass("highcharts-point-" + t),
              !d.styledMode)
            ) {
              (u = i.pointAttribs(this, t)),
                (f = oz(d.options.chart.animation, o.animation));
              let e = u.opacity;
              i.options.inactiveOtherPoints &&
                oD(e) &&
                (this.dataLabels || []).forEach(function (t) {
                  t &&
                    !t.hasClass("highcharts-data-label-hidden") &&
                    (t.animate({ opacity: e }, f),
                    t.connector && t.connector.animate({ opacity: e }, f));
                }),
                this.graphic.animate(u, f);
            }
            g &&
              this.graphic.animate(
                g,
                oz(d.options.chart.animation, n.animation, r.animation)
              ),
              m && m.hide();
          } else
            t &&
              n &&
              ((x = l.symbol || i.symbol),
              m && m.currentSymbol !== x && (m = m.destroy()),
              g &&
                (m
                  ? m[e ? "animate" : "attr"]({ x: g.x, y: g.y })
                  : x &&
                    ((i.stateMarkerGraphic = m =
                      d.renderer
                        .symbol(x, g.x, g.y, g.width, g.height, oN(r, n))
                        .add(i.markerGroup)),
                    (m.currentSymbol = x))),
              !d.styledMode &&
                m &&
                "inactive" !== this.state &&
                m.attr(i.pointAttribs(this, t))),
              m &&
                (m[t && this.isInside ? "show" : "hide"](),
                (m.element.point = this),
                m.addClass(this.getClassName(), !0));
          let y = o.halo,
            b = this.graphic || m,
            v = (b && b.visibility) || "inherit";
          y && y.size && b && "hidden" !== v && !this.isCluster
            ? (p || (i.halo = p = d.renderer.path().add(b.parentGroup)),
              p.show()[e ? "animate" : "attr"]({ d: this.haloPath(y.size) }),
              p.attr({
                class:
                  "highcharts-halo highcharts-color-" +
                  oz(this.colorIndex, i.colorIndex) +
                  (this.className ? " " + this.className : ""),
                visibility: v,
                zIndex: -1,
              }),
              (p.point = this),
              d.styledMode ||
                p.attr(
                  oP(
                    { fill: this.color || i.color, "fill-opacity": y.opacity },
                    tK.filterUserAttributes(y.attributes || {})
                  )
                ))
            : p?.point?.haloPath &&
              !p.point.destroyed &&
              p.animate({ d: p.point.haloPath(0) }, null, p.hide),
            oL(this, "afterSetState", { state: t });
        }
        haloPath(t) {
          let e = this.pos();
          return e
            ? this.series.chart.renderer.symbols.circle(
                oC(e[0], 1) - t,
                e[1] - t,
                2 * t,
                2 * t
              )
            : [];
        }
      }
      let oF = oX,
        { parse: oG } = tk,
        { charts: oY, composed: oj, isTouchDevice: oU } = k,
        {
          addEvent: o$,
          attr: oV,
          css: o_,
          extend: oq,
          find: oZ,
          fireEvent: oK,
          isNumber: oJ,
          isObject: oQ,
          objectEach: o0,
          offset: o1,
          pick: o2,
          pushUnique: o3,
          splat: o5,
        } = $;
      class o6 {
        applyInactiveState(t) {
          let e = [],
            i;
          (t || []).forEach(function (t) {
            (i = t.series),
              e.push(i),
              i.linkedParent && e.push(i.linkedParent),
              i.linkedSeries && (e = e.concat(i.linkedSeries)),
              i.navigatorSeries && e.push(i.navigatorSeries);
          }),
            this.chart.series.forEach(function (t) {
              -1 === e.indexOf(t)
                ? t.setState("inactive", !0)
                : t.options.inactiveOtherPoints &&
                  t.setAllPointsToState("inactive");
            });
        }
        destroy() {
          let t = this;
          this.eventsToUnbind.forEach((t) => t()),
            (this.eventsToUnbind = []),
            !k.chartCount &&
              (o6.unbindDocumentMouseUp.forEach((t) => t.unbind()),
              (o6.unbindDocumentMouseUp.length = 0),
              o6.unbindDocumentTouchEnd &&
                (o6.unbindDocumentTouchEnd = o6.unbindDocumentTouchEnd())),
            clearInterval(t.tooltipTimeout),
            o0(t, function (e, i) {
              t[i] = void 0;
            });
        }
        getSelectionMarkerAttrs(t, e) {
          let i = {
            args: { chartX: t, chartY: e },
            attrs: {},
            shapeType: "rect",
          };
          return (
            oK(this, "getSelectionMarkerAttrs", i, (i) => {
              let s;
              let { chart: o, zoomHor: r, zoomVert: a } = this,
                { mouseDownX: n = 0, mouseDownY: h = 0 } = o,
                l = i.attrs;
              (l.x = o.plotLeft),
                (l.y = o.plotTop),
                (l.width = r ? 1 : o.plotWidth),
                (l.height = a ? 1 : o.plotHeight),
                r &&
                  ((s = t - n),
                  (l.width = Math.max(1, Math.abs(s))),
                  (l.x = (s > 0 ? 0 : s) + n)),
                a &&
                  ((s = e - h),
                  (l.height = Math.max(1, Math.abs(s))),
                  (l.y = (s > 0 ? 0 : s) + h));
            }),
            i
          );
        }
        drag(t) {
          let { chart: e } = this,
            { mouseDownX: i = 0, mouseDownY: s = 0 } = e,
            { panning: o, panKey: r, selectionMarkerFill: a } = e.options.chart,
            n = e.plotLeft,
            h = e.plotTop,
            l = e.plotWidth,
            d = e.plotHeight,
            c = oQ(o) ? o.enabled : o,
            p = r && t[`${r}Key`],
            g = t.chartX,
            u = t.chartY,
            f,
            m = this.selectionMarker;
          if (
            (!m || !m.touch) &&
            (g < n ? (g = n) : g > n + l && (g = n + l),
            u < h ? (u = h) : u > h + d && (u = h + d),
            (this.hasDragged = Math.sqrt(
              Math.pow(i - g, 2) + Math.pow(s - u, 2)
            )),
            this.hasDragged > 10)
          ) {
            f = e.isInsidePlot(i - n, s - h, { visiblePlotOnly: !0 });
            let { shapeType: r, attrs: l } = this.getSelectionMarkerAttrs(g, u);
            (e.hasCartesianSeries || e.mapView) &&
              this.hasZoom &&
              f &&
              !p &&
              !m &&
              ((this.selectionMarker = m = e.renderer[r]()),
              m.attr({ class: "highcharts-selection-marker", zIndex: 7 }).add(),
              e.styledMode ||
                m.attr({ fill: a || oG("#334eff").setOpacity(0.25).get() })),
              m && m.attr(l),
              f && !m && c && e.pan(t, o);
          }
        }
        dragStart(t) {
          let e = this.chart;
          (e.mouseIsDown = t.type),
            (e.cancelClick = !1),
            (e.mouseDownX = t.chartX),
            (e.mouseDownY = t.chartY);
        }
        getSelectionBox(t) {
          let e = { args: { marker: t }, result: t.getBBox() };
          return oK(this, "getSelectionBox", e), e.result;
        }
        drop(t) {
          let e;
          let { chart: i, selectionMarker: s } = this;
          for (let t of i.axes)
            t.isPanning &&
              ((t.isPanning = !1),
              (t.options.startOnTick ||
                t.options.endOnTick ||
                t.series.some((t) => t.boosted)) &&
                ((t.forceRedraw = !0),
                t.setExtremes(t.userMin, t.userMax, !1),
                (e = !0)));
          if ((e && i.redraw(), s && t)) {
            if (this.hasDragged) {
              let e = this.getSelectionBox(s);
              i.transform({
                axes: i.axes.filter(
                  (t) =>
                    t.zoomEnabled &&
                    (("xAxis" === t.coll && this.zoomX) ||
                      ("yAxis" === t.coll && this.zoomY))
                ),
                selection: { originalEvent: t, xAxis: [], yAxis: [], ...e },
                from: e,
              });
            }
            oJ(i.index) && (this.selectionMarker = s.destroy());
          }
          i &&
            oJ(i.index) &&
            (o_(i.container, { cursor: i._cursor }),
            (i.cancelClick = this.hasDragged > 10),
            (i.mouseIsDown = !1),
            (this.hasDragged = 0),
            (this.pinchDown = []));
        }
        findNearestKDPoint(t, e, i) {
          let s;
          return (
            t.forEach(function (t) {
              let o =
                  !(t.noSharedTooltip && e) &&
                  0 > t.options.findNearestPointBy.indexOf("y"),
                r = t.searchPoint(i, o);
              oQ(r, !0) &&
                r.series &&
                (!oQ(s, !0) ||
                  (function (t, i) {
                    let s = t.distX - i.distX,
                      o = t.dist - i.dist,
                      r = i.series.group?.zIndex - t.series.group?.zIndex;
                    return 0 !== s && e
                      ? s
                      : 0 !== o
                      ? o
                      : 0 !== r
                      ? r
                      : t.series.index > i.series.index
                      ? -1
                      : 1;
                  })(s, r) > 0) &&
                (s = r);
            }),
            s
          );
        }
        getChartCoordinatesFromPoint(t, e) {
          let { xAxis: i, yAxis: s } = t.series,
            o = t.shapeArgs;
          if (i && s) {
            let r = t.clientX ?? t.plotX ?? 0,
              a = t.plotY || 0;
            return (
              t.isNode && o && oJ(o.x) && oJ(o.y) && ((r = o.x), (a = o.y)),
              e
                ? { chartX: s.len + s.pos - a, chartY: i.len + i.pos - r }
                : { chartX: r + i.pos, chartY: a + s.pos }
            );
          }
          if (o && o.x && o.y) return { chartX: o.x, chartY: o.y };
        }
        getChartPosition() {
          if (this.chartPosition) return this.chartPosition;
          let { container: t } = this.chart,
            e = o1(t);
          this.chartPosition = {
            left: e.left,
            top: e.top,
            scaleX: 1,
            scaleY: 1,
          };
          let { offsetHeight: i, offsetWidth: s } = t;
          return (
            s > 2 &&
              i > 2 &&
              ((this.chartPosition.scaleX = e.width / s),
              (this.chartPosition.scaleY = e.height / i)),
            this.chartPosition
          );
        }
        getCoordinates(t) {
          let e = { xAxis: [], yAxis: [] };
          for (let i of this.chart.axes)
            e[i.isXAxis ? "xAxis" : "yAxis"].push({
              axis: i,
              value: i.toValue(t[i.horiz ? "chartX" : "chartY"]),
            });
          return e;
        }
        getHoverData(t, e, i, s, o, r) {
          let a = [],
            n = function (t) {
              return (
                t.visible &&
                !(!o && t.directTouch) &&
                o2(t.options.enableMouseTracking, !0)
              );
            },
            h = e,
            l,
            d = {
              chartX: r ? r.chartX : void 0,
              chartY: r ? r.chartY : void 0,
              shared: o,
            };
          oK(this, "beforeGetHoverData", d),
            (l =
              h && !h.stickyTracking
                ? [h]
                : i.filter((t) => t.stickyTracking && (d.filter || n)(t)));
          let c = (s && t) || !r ? t : this.findNearestKDPoint(l, o, r);
          return (
            (h = c && c.series),
            c &&
              (o && !h.noSharedTooltip
                ? (l = i.filter(function (t) {
                    return d.filter ? d.filter(t) : n(t) && !t.noSharedTooltip;
                  })).forEach(function (t) {
                    let e = oZ(t.points, function (t) {
                      return t.x === c.x && !t.isNull;
                    });
                    oQ(e) &&
                      (t.boosted && t.boost && (e = t.boost.getPoint(e)),
                      a.push(e));
                  })
                : a.push(c)),
            oK(this, "afterGetHoverData", (d = { hoverPoint: c })),
            { hoverPoint: d.hoverPoint, hoverSeries: h, hoverPoints: a }
          );
        }
        getPointFromEvent(t) {
          let e = t.target,
            i;
          for (; e && !i; ) (i = e.point), (e = e.parentNode);
          return i;
        }
        onTrackerMouseOut(t) {
          let e = this.chart,
            i = t.relatedTarget,
            s = e.hoverSeries;
          (this.isDirectTouch = !1),
            !s ||
              !i ||
              s.stickyTracking ||
              this.inClass(i, "highcharts-tooltip") ||
              (this.inClass(i, "highcharts-series-" + s.index) &&
                this.inClass(i, "highcharts-tracker")) ||
              s.onMouseOut();
        }
        inClass(t, e) {
          let i = t,
            s;
          for (; i; ) {
            if ((s = oV(i, "class"))) {
              if (-1 !== s.indexOf(e)) return !0;
              if (-1 !== s.indexOf("highcharts-container")) return !1;
            }
            i = i.parentElement;
          }
        }
        constructor(t, e) {
          (this.hasDragged = 0),
            (this.pointerCaptureEventsToUnbind = []),
            (this.eventsToUnbind = []),
            (this.options = e),
            (this.chart = t),
            (this.runChartClick = !!e.chart.events?.click),
            (this.pinchDown = []),
            this.setDOMEvents(),
            oK(this, "afterInit");
        }
        normalize(t, e) {
          let i = t.touches,
            s = i
              ? i.length
                ? i.item(0)
                : o2(i.changedTouches, t.changedTouches)[0]
              : t;
          e || (e = this.getChartPosition());
          let o = s.pageX - e.left,
            r = s.pageY - e.top;
          return oq(t, {
            chartX: Math.round((o /= e.scaleX)),
            chartY: Math.round((r /= e.scaleY)),
          });
        }
        onContainerClick(t) {
          let e = this.chart,
            i = e.hoverPoint,
            s = this.normalize(t),
            o = e.plotLeft,
            r = e.plotTop;
          !e.cancelClick &&
            (i && this.inClass(s.target, "highcharts-tracker")
              ? (oK(i.series, "click", oq(s, { point: i })),
                e.hoverPoint && i.firePointEvent("click", s))
              : (oq(s, this.getCoordinates(s)),
                e.isInsidePlot(s.chartX - o, s.chartY - r, {
                  visiblePlotOnly: !0,
                }) && oK(e, "click", s)));
        }
        onContainerMouseDown(t) {
          let e = (1 & (t.buttons || t.button)) == 1;
          (t = this.normalize(t)),
            k.isFirefox && 0 !== t.button && this.onContainerMouseMove(t),
            (void 0 === t.button || e) &&
              (this.zoomOption(t),
              e && t.preventDefault?.(),
              this.dragStart(t));
        }
        onContainerMouseLeave(t) {
          let { pointer: e } = oY[o2(o6.hoverChartIndex, -1)] || {};
          (t = this.normalize(t)),
            this.onContainerMouseMove(t),
            e &&
              !this.inClass(t.relatedTarget, "highcharts-tooltip") &&
              (e.reset(), (e.chartPosition = void 0));
        }
        onContainerMouseEnter() {
          delete this.chartPosition;
        }
        onContainerMouseMove(t) {
          let e = this.chart,
            i = e.tooltip,
            s = this.normalize(t);
          this.setHoverChartIndex(t),
            ("mousedown" === e.mouseIsDown || this.touchSelect(s)) &&
              this.drag(s),
            !e.openMenu &&
              (this.inClass(s.target, "highcharts-tracker") ||
                e.isInsidePlot(s.chartX - e.plotLeft, s.chartY - e.plotTop, {
                  visiblePlotOnly: !0,
                })) &&
              !(i && i.shouldStickOnContact(s)) &&
              (this.inClass(s.target, "highcharts-no-tooltip")
                ? this.reset(!1, 0)
                : this.runPointActions(s));
        }
        onDocumentTouchEnd(t) {
          this.onDocumentMouseUp(t);
        }
        onContainerTouchMove(t) {
          this.touchSelect(t) ? this.onContainerMouseMove(t) : this.touch(t);
        }
        onContainerTouchStart(t) {
          this.touchSelect(t)
            ? this.onContainerMouseDown(t)
            : (this.zoomOption(t), this.touch(t, !0));
        }
        onDocumentMouseMove(t) {
          let e = this.chart,
            i = e.tooltip,
            s = this.chartPosition,
            o = this.normalize(t, s);
          !s ||
            e.isInsidePlot(o.chartX - e.plotLeft, o.chartY - e.plotTop, {
              visiblePlotOnly: !0,
            }) ||
            (i && i.shouldStickOnContact(o)) ||
            (o.target !== e.container.ownerDocument &&
              this.inClass(o.target, "highcharts-tracker")) ||
            this.reset();
        }
        onDocumentMouseUp(t) {
          oY[o2(o6.hoverChartIndex, -1)]?.pointer?.drop(t);
        }
        pinch(t) {
          let e = this,
            { chart: i, hasZoom: s, lastTouches: o } = e,
            r = [].map.call(t.touches || [], (t) => e.normalize(t)),
            a = r.length,
            n =
              1 === a &&
              ((e.inClass(t.target, "highcharts-tracker") &&
                i.runTrackerClick) ||
                e.runChartClick),
            h = i.tooltip,
            l = 1 === a && o2(h?.options.followTouchMove, !0);
          a > 1 ? (e.initiated = !0) : l && (e.initiated = !1),
            s && e.initiated && !n && !1 !== t.cancelable && t.preventDefault(),
            "touchstart" === t.type
              ? ((e.pinchDown = r), (e.res = !0), (i.mouseDownX = t.chartX))
              : l
              ? this.runPointActions(e.normalize(t))
              : o &&
                (oK(i, "touchpan", { originalEvent: t, touches: r }, () => {
                  let e = (t) => {
                    let e = t[0],
                      i = t[1] || e;
                    return {
                      x: e.chartX,
                      y: e.chartY,
                      width: i.chartX - e.chartX,
                      height: i.chartY - e.chartY,
                    };
                  };
                  i.transform({
                    axes: i.axes.filter(
                      (t) =>
                        t.zoomEnabled &&
                        ((this.zoomHor && t.horiz) ||
                          (this.zoomVert && !t.horiz))
                    ),
                    to: e(r),
                    from: e(o),
                    trigger: t.type,
                  });
                }),
                e.res && ((e.res = !1), this.reset(!1, 0))),
            (e.lastTouches = r);
        }
        reset(t, e) {
          let i = this.chart,
            s = i.hoverSeries,
            o = i.hoverPoint,
            r = i.hoverPoints,
            a = i.tooltip,
            n = a && a.shared ? r : o;
          t &&
            n &&
            o5(n).forEach(function (e) {
              e.series.isCartesian && void 0 === e.plotX && (t = !1);
            }),
            t
              ? a &&
                n &&
                o5(n).length &&
                (a.refresh(n),
                a.shared && r
                  ? r.forEach(function (t) {
                      t.setState(t.state, !0),
                        t.series.isCartesian &&
                          (t.series.xAxis.crosshair &&
                            t.series.xAxis.drawCrosshair(null, t),
                          t.series.yAxis.crosshair &&
                            t.series.yAxis.drawCrosshair(null, t));
                    })
                  : o &&
                    (o.setState(o.state, !0),
                    i.axes.forEach(function (t) {
                      t.crosshair &&
                        o.series[t.coll] === t &&
                        t.drawCrosshair(null, o);
                    })))
              : (o && o.onMouseOut(),
                r &&
                  r.forEach(function (t) {
                    t.setState();
                  }),
                s && s.onMouseOut(),
                a && a.hide(e),
                this.unDocMouseMove &&
                  (this.unDocMouseMove = this.unDocMouseMove()),
                i.axes.forEach(function (t) {
                  t.hideCrosshair();
                }),
                (i.hoverPoints = i.hoverPoint = void 0));
        }
        runPointActions(t, e, i) {
          let s = this.chart,
            o = s.series,
            r = s.tooltip && s.tooltip.options.enabled ? s.tooltip : void 0,
            a = !!r && r.shared,
            n = e || s.hoverPoint,
            h = (n && n.series) || s.hoverSeries,
            l =
              (!t || "touchmove" !== t.type) &&
              (!!e || (h && h.directTouch && this.isDirectTouch)),
            d = this.getHoverData(n, h, o, l, a, t);
          (n = d.hoverPoint), (h = d.hoverSeries);
          let c = d.hoverPoints,
            p = h && h.tooltipOptions.followPointer && !h.tooltipOptions.split,
            g = a && h && !h.noSharedTooltip;
          if (n && (i || n !== s.hoverPoint || (r && r.isHidden))) {
            if (
              ((s.hoverPoints || []).forEach(function (t) {
                -1 === c.indexOf(t) && t.setState();
              }),
              s.hoverSeries !== h && h.onMouseOver(),
              this.applyInactiveState(c),
              (c || []).forEach(function (t) {
                t.setState("hover");
              }),
              s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"),
              !n.series)
            )
              return;
            (s.hoverPoints = c),
              (s.hoverPoint = n),
              n.firePointEvent("mouseOver", void 0, () => {
                r && n && r.refresh(g ? c : n, t);
              });
          } else if (p && r && !r.isHidden) {
            let e = r.getAnchor([{}], t);
            s.isInsidePlot(e[0], e[1], { visiblePlotOnly: !0 }) &&
              r.updatePosition({ plotX: e[0], plotY: e[1] });
          }
          this.unDocMouseMove ||
            ((this.unDocMouseMove = o$(
              s.container.ownerDocument,
              "mousemove",
              (t) =>
                oY[o6.hoverChartIndex ?? -1]?.pointer?.onDocumentMouseMove(t)
            )),
            this.eventsToUnbind.push(this.unDocMouseMove)),
            s.axes.forEach(function (e) {
              let i;
              let o = o2((e.crosshair || {}).snap, !0);
              !o ||
                ((i = s.hoverPoint) && i.series[e.coll] === e) ||
                (i = oZ(c, (t) => t.series && t.series[e.coll] === e)),
                i || !o ? e.drawCrosshair(t, i) : e.hideCrosshair();
            });
        }
        setDOMEvents() {
          let t = this.chart.container,
            e = t.ownerDocument;
          (t.onmousedown = this.onContainerMouseDown.bind(this)),
            (t.onmousemove = this.onContainerMouseMove.bind(this)),
            (t.onclick = this.onContainerClick.bind(this)),
            this.eventsToUnbind.push(
              o$(t, "mouseenter", this.onContainerMouseEnter.bind(this)),
              o$(t, "mouseleave", this.onContainerMouseLeave.bind(this))
            ),
            o6.unbindDocumentMouseUp.some((t) => t.doc === e) ||
              o6.unbindDocumentMouseUp.push({
                doc: e,
                unbind: o$(e, "mouseup", this.onDocumentMouseUp.bind(this)),
              });
          let i = this.chart.renderTo.parentElement;
          for (; i && "BODY" !== i.tagName; )
            this.eventsToUnbind.push(
              o$(i, "scroll", () => {
                delete this.chartPosition;
              })
            ),
              (i = i.parentElement);
          this.eventsToUnbind.push(
            o$(t, "touchstart", this.onContainerTouchStart.bind(this), {
              passive: !1,
            }),
            o$(t, "touchmove", this.onContainerTouchMove.bind(this), {
              passive: !1,
            })
          ),
            o6.unbindDocumentTouchEnd ||
              (o6.unbindDocumentTouchEnd = o$(
                e,
                "touchend",
                this.onDocumentTouchEnd.bind(this),
                { passive: !1 }
              )),
            this.setPointerCapture(),
            o$(this.chart, "redraw", this.setPointerCapture.bind(this));
        }
        setPointerCapture() {
          if (!oU) return;
          let t = this.pointerCaptureEventsToUnbind,
            e = this.chart,
            i = e.container,
            s =
              o2(e.options.tooltip?.followTouchMove, !0) &&
              e.series.some(
                (t) => t.options.findNearestPointBy.indexOf("y") > -1
              );
          !this.hasPointerCapture && s
            ? (t.push(
                o$(i, "pointerdown", (t) => {
                  t.target?.hasPointerCapture(t.pointerId) &&
                    t.target?.releasePointerCapture(t.pointerId);
                }),
                o$(i, "pointermove", (t) => {
                  e.pointer?.getPointFromEvent(t)?.onMouseOver(t);
                })
              ),
              e.styledMode || o_(i, { "touch-action": "none" }),
              (i.className += " highcharts-no-touch-action"),
              (this.hasPointerCapture = !0))
            : this.hasPointerCapture &&
              !s &&
              (t.forEach((t) => t()),
              (t.length = 0),
              e.styledMode ||
                o_(i, {
                  "touch-action": o2(
                    e.options.chart.style?.["touch-action"],
                    "manipulation"
                  ),
                }),
              (i.className = i.className.replace(
                " highcharts-no-touch-action",
                ""
              )),
              (this.hasPointerCapture = !1));
        }
        setHoverChartIndex(t) {
          let e = this.chart,
            i = k.charts[o2(o6.hoverChartIndex, -1)];
          if (i && i !== e) {
            let s = { relatedTarget: e.container };
            t && !t?.relatedTarget && Object.assign({}, t, s),
              i.pointer?.onContainerMouseLeave(t || s);
          }
          (i && i.mouseIsDown) || (o6.hoverChartIndex = e.index);
        }
        touch(t, e) {
          let i;
          let { chart: s, pinchDown: o = [] } = this;
          this.setHoverChartIndex(),
            1 === (t = this.normalize(t)).touches.length
              ? s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, {
                  visiblePlotOnly: !0,
                }) && !s.openMenu
                ? (e && this.runPointActions(t),
                  "touchmove" === t.type &&
                    (i =
                      !!o[0] &&
                      Math.pow(o[0].chartX - t.chartX, 2) +
                        Math.pow(o[0].chartY - t.chartY, 2) >=
                        16),
                  o2(i, !0) && this.pinch(t))
                : e && this.reset()
              : 2 === t.touches.length && this.pinch(t);
        }
        touchSelect(t) {
          return !!(
            this.chart.zooming.singleTouch &&
            t.touches &&
            1 === t.touches.length
          );
        }
        zoomOption(t) {
          let e = this.chart,
            i = e.inverted,
            s = e.zooming.type || "",
            o,
            r;
          /touch/.test(t.type) && (s = o2(e.zooming.pinchType, s)),
            (this.zoomX = o = /x/.test(s)),
            (this.zoomY = r = /y/.test(s)),
            (this.zoomHor = (o && !i) || (r && i)),
            (this.zoomVert = (r && !i) || (o && i)),
            (this.hasZoom = o || r);
        }
      }
      (o6.unbindDocumentMouseUp = []),
        (function (t) {
          t.compose = function (e) {
            o3(oj, "Core.Pointer") &&
              o$(e, "beforeRender", function () {
                this.pointer = new t(this, this.options);
              });
          };
        })(o6 || (o6 = {}));
      let o9 = o6,
        { fireEvent: o4, isArray: o8, objectEach: o7, uniqueKey: rt } = $,
        re = class {
          constructor(t = {}) {
            (this.autoId = !t.id),
              (this.columns = {}),
              (this.id = t.id || rt()),
              (this.modified = this),
              (this.rowCount = 0),
              (this.versionTag = rt());
            let e = 0;
            o7(t.columns || {}, (t, i) => {
              (this.columns[i] = t.slice()), (e = Math.max(e, t.length));
            }),
              this.applyRowCount(e);
          }
          applyRowCount(t) {
            (this.rowCount = t),
              o7(this.columns, (e) => {
                o8(e) && (e.length = t);
              });
          }
          getColumn(t, e) {
            return this.columns[t];
          }
          getColumns(t, e) {
            return (t || Object.keys(this.columns)).reduce(
              (t, e) => ((t[e] = this.columns[e]), t),
              {}
            );
          }
          getRow(t, e) {
            return (e || Object.keys(this.columns)).map(
              (e) => this.columns[e]?.[t]
            );
          }
          setColumn(t, e = [], i = 0, s) {
            this.setColumns({ [t]: e }, i, s);
          }
          setColumns(t, e, i) {
            let s = this.rowCount;
            o7(t, (t, e) => {
              (this.columns[e] = t.slice()), (s = t.length);
            }),
              this.applyRowCount(s),
              i?.silent ||
                (o4(this, "afterSetColumns"), (this.versionTag = rt()));
          }
          setRow(t, e = this.rowCount, i, s) {
            let { columns: o } = this,
              r = i ? this.rowCount + 1 : e + 1;
            o7(t, (t, a) => {
              let n = o[a] || (s?.addColumns !== !1 && Array(r));
              n && (i ? n.splice(e, 0, t) : (n[e] = t), (o[a] = n));
            }),
              r > this.rowCount && this.applyRowCount(r),
              s?.silent || (o4(this, "afterSetRows"), (this.versionTag = rt()));
          }
        },
        { extend: ri, merge: rs, pick: ro } = $;
      !(function (t) {
        function e(t, e, i) {
          let s = (this.legendItem = this.legendItem || {}),
            { chart: o, options: r } = this,
            { baseline: a = 0, symbolWidth: n, symbolHeight: h } = t,
            l = this.symbol || "circle",
            d = h / 2,
            c = o.renderer,
            p = s.group,
            g = a - Math.round((t.fontMetrics?.b || h) * (i ? 0.4 : 0.3)),
            u = {},
            f,
            m = r.marker,
            x = 0;
          if (
            (o.styledMode ||
              ((u["stroke-width"] = Math.min(r.lineWidth || 0, 24)),
              r.dashStyle
                ? (u.dashstyle = r.dashStyle)
                : "square" === r.linecap || (u["stroke-linecap"] = "round")),
            (s.line = c.path().addClass("highcharts-graph").attr(u).add(p)),
            i && (s.area = c.path().addClass("highcharts-area").add(p)),
            u["stroke-linecap"] && (x = Math.min(s.line.strokeWidth(), n) / 2),
            n)
          ) {
            let t = [
              ["M", x, g],
              ["L", n - x, g],
            ];
            s.line.attr({ d: t }),
              s.area?.attr({ d: [...t, ["L", n - x, a], ["L", x, a]] });
          }
          if (m && !1 !== m.enabled && n) {
            let t = Math.min(ro(m.radius, d), d);
            0 === l.indexOf("url") &&
              ((m = rs(m, { width: h, height: h })), (t = 0)),
              (s.symbol = f =
                c
                  .symbol(
                    l,
                    n / 2 - t,
                    g - t,
                    2 * t,
                    2 * t,
                    ri({ context: "legend" }, m)
                  )
                  .addClass("highcharts-point")
                  .add(p)),
              (f.isMarker = !0);
          }
        }
        (t.areaMarker = function (t, i) {
          e.call(this, t, i, !0);
        }),
          (t.lineMarker = e),
          (t.rectangle = function (t, e) {
            let i = e.legendItem || {},
              s = t.options,
              o = t.symbolHeight,
              r = s.squareSymbol,
              a = r ? o : t.symbolWidth;
            i.symbol = this.chart.renderer
              .rect(
                r ? (t.symbolWidth - o) / 2 : 0,
                t.baseline - o + 1,
                a,
                o,
                ro(t.options.symbolRadius, o / 2)
              )
              .addClass("highcharts-point")
              .attr({ zIndex: 3 })
              .add(i.group);
          });
      })(d || (d = {}));
      let rr = d,
        { defaultOptions: ra } = tm,
        { extend: rn, extendClass: rh, merge: rl } = $;
      !(function (t) {
        function e(e, i) {
          let s = ra.plotOptions || {},
            o = i.defaultOptions,
            r = i.prototype;
          return (
            (r.type = e),
            r.pointClass || (r.pointClass = oF),
            !t.seriesTypes[e] && (o && (s[e] = o), (t.seriesTypes[e] = i), !0)
          );
        }
        (t.seriesTypes = k.seriesTypes),
          (t.registerSeriesType = e),
          (t.seriesType = function (i, s, o, r, a) {
            let n = ra.plotOptions || {};
            if (
              ((s = s || ""),
              (n[i] = rl(n[s], o)),
              delete t.seriesTypes[i],
              e(i, rh(t.seriesTypes[s] || function () {}, r)),
              (t.seriesTypes[i].prototype.type = i),
              a)
            ) {
              class e extends oF {}
              rn(e.prototype, a), (t.seriesTypes[i].prototype.pointClass = e);
            }
            return t.seriesTypes[i];
          });
      })(c || (c = {}));
      let rd = c,
        { animObject: rc, setAnimation: rp } = tR,
        { defaultOptions: rg } = tm,
        { registerEventOptions: ru } = i3,
        { svg: rf, win: rm } = k,
        { seriesTypes: rx } = rd,
        {
          arrayMax: ry,
          arrayMin: rb,
          clamp: rv,
          correctFloat: rk,
          crisp: rw,
          defined: rM,
          destroyObjectProperties: rS,
          diffObjects: rT,
          erase: rC,
          error: rA,
          extend: rP,
          find: rL,
          fireEvent: rO,
          getClosestDistance: rE,
          getNestedProperty: rI,
          insertItem: rD,
          isArray: rB,
          isNumber: rN,
          isString: rz,
          merge: rR,
          objectEach: rW,
          pick: rH,
          removeEvent: rX,
          syncTimeout: rF,
        } = $;
      class rG {
        constructor() {
          this.zoneAxis = "y";
        }
        init(t, e) {
          let i;
          rO(this, "init", { options: e }),
            this.dataTable ?? (this.dataTable = new re());
          let s = t.series;
          (this.eventsToUnbind = []),
            (this.chart = t),
            (this.options = this.setOptions(e));
          let o = this.options,
            r = !1 !== o.visible;
          (this.linkedSeries = []),
            this.bindAxes(),
            rP(this, {
              name: o.name,
              state: "",
              visible: r,
              selected: !0 === o.selected,
            }),
            ru(this, o);
          let a = o.events;
          ((a && a.click) ||
            (o.point && o.point.events && o.point.events.click) ||
            o.allowPointSelect) &&
            (t.runTrackerClick = !0),
            this.getColor(),
            this.getSymbol(),
            this.isCartesian && (t.hasCartesianSeries = !0),
            s.length && (i = s[s.length - 1]),
            (this._i = rH(i && i._i, -1) + 1),
            (this.opacity = this.options.opacity),
            t.orderItems("series", rD(this, s)),
            o.dataSorting && o.dataSorting.enabled
              ? this.setDataSortingOptions()
              : this.points || this.data || this.setData(o.data, !1),
            rO(this, "afterInit");
        }
        is(t) {
          return rx[t] && this instanceof rx[t];
        }
        bindAxes() {
          let t;
          let e = this,
            i = e.options,
            s = e.chart;
          rO(this, "bindAxes", null, function () {
            (e.axisTypes || []).forEach(function (o) {
              (s[o] || []).forEach(function (s) {
                (t = s.options),
                  (rH(i[o], 0) === s.index ||
                    (void 0 !== i[o] && i[o] === t.id)) &&
                    (rD(e, s.series), (e[o] = s), (s.isDirty = !0));
              }),
                e[o] || e.optionalAxis === o || rA(18, !0, s);
            });
          }),
            rO(this, "afterBindAxes");
        }
        hasData() {
          return (
            (this.visible &&
              void 0 !== this.dataMax &&
              void 0 !== this.dataMin) ||
            (this.visible && this.dataTable.rowCount > 0)
          );
        }
        hasMarkerChanged(t, e) {
          let i = t.marker,
            s = e.marker || {};
          return (
            i &&
            ((s.enabled && !i.enabled) ||
              s.symbol !== i.symbol ||
              s.height !== i.height ||
              s.width !== i.width)
          );
        }
        autoIncrement(t) {
          let e;
          let i = this.options,
            { pointIntervalUnit: s, relativeXValue: o } = this.options,
            r = this.chart.time,
            a = this.xIncrement ?? r.parse(i.pointStart) ?? 0;
          if (
            ((this.pointInterval = e =
              rH(this.pointInterval, i.pointInterval, 1)),
            o && rN(t) && (e *= t),
            s)
          ) {
            let t = r.toParts(a);
            "day" === s
              ? (t[2] += e)
              : "month" === s
              ? (t[1] += e)
              : "year" === s && (t[0] += e),
              (e = r.makeTime.apply(r, t) - a);
          }
          return o && rN(t) ? a + e : ((this.xIncrement = a + e), a);
        }
        setDataSortingOptions() {
          let t = this.options;
          rP(this, {
            requireSorting: !1,
            sorted: !1,
            enabledDataSorting: !0,
            allowDG: !1,
          }),
            rM(t.pointRange) || (t.pointRange = 1);
        }
        setOptions(t) {
          let e;
          let i = this.chart,
            s = i.options.plotOptions,
            o = i.userOptions || {},
            r = rR(t),
            a = i.styledMode,
            n = { plotOptions: s, userOptions: r };
          rO(this, "setOptions", n);
          let h = n.plotOptions[this.type],
            l = o.plotOptions || {},
            d = l.series || {},
            c = rg.plotOptions[this.type] || {},
            p = l[this.type] || {};
          this.userOptions = n.userOptions;
          let g = rR(h, s.series, p, r);
          (this.tooltipOptions = rR(
            rg.tooltip,
            rg.plotOptions.series?.tooltip,
            c?.tooltip,
            i.userOptions.tooltip,
            l.series?.tooltip,
            p.tooltip,
            r.tooltip
          )),
            (this.stickyTracking = rH(
              r.stickyTracking,
              p.stickyTracking,
              d.stickyTracking,
              (!!this.tooltipOptions.shared && !this.noSharedTooltip) ||
                g.stickyTracking
            )),
            null === h.marker && delete g.marker,
            (this.zoneAxis = g.zoneAxis || "y");
          let u = (this.zones = (g.zones || []).map((t) => ({ ...t })));
          return (
            (g.negativeColor || g.negativeFillColor) &&
              !g.zones &&
              ((e = {
                value: g[this.zoneAxis + "Threshold"] || g.threshold || 0,
                className: "highcharts-negative",
              }),
              a ||
                ((e.color = g.negativeColor),
                (e.fillColor = g.negativeFillColor)),
              u.push(e)),
            u.length &&
              rM(u[u.length - 1].value) &&
              u.push(a ? {} : { color: this.color, fillColor: this.fillColor }),
            rO(this, "afterSetOptions", { options: g }),
            g
          );
        }
        getName() {
          return rH(this.options.name, "Series " + (this.index + 1));
        }
        getCyclic(t, e, i) {
          let s, o;
          let r = this.chart,
            a = `${t}Index`,
            n = `${t}Counter`,
            h = i?.length || r.options.chart.colorCount;
          !e &&
            (rM(
              (o = rH(
                "color" === t ? this.options.colorIndex : void 0,
                this[a]
              ))
            )
              ? (s = o)
              : (r.series.length || (r[n] = 0), (s = r[n] % h), (r[n] += 1)),
            i && (e = i[s])),
            void 0 !== s && (this[a] = s),
            (this[t] = e);
        }
        getColor() {
          this.chart.styledMode
            ? this.getCyclic("color")
            : this.options.colorByPoint
            ? (this.color = "#cccccc")
            : this.getCyclic(
                "color",
                this.options.color || rg.plotOptions[this.type].color,
                this.chart.options.colors
              );
        }
        getPointsCollection() {
          return (this.hasGroupedData ? this.points : this.data) || [];
        }
        getSymbol() {
          let t = this.options.marker;
          this.getCyclic("symbol", t.symbol, this.chart.options.symbols);
        }
        getColumn(t, e) {
          return (
            (e ? this.dataTable.modified : this.dataTable).getColumn(t, !0) ||
            []
          );
        }
        findPointIndex(t, e) {
          let i, s, o;
          let r = t.id,
            a = t.x,
            n = this.points,
            h = this.options.dataSorting;
          if (r) {
            let t = this.chart.get(r);
            t instanceof oF && (i = t);
          } else if (
            this.linkedParent ||
            this.enabledDataSorting ||
            this.options.relativeXValue
          ) {
            let e = (e) => !e.touched && e.index === t.index;
            if (
              (h && h.matchByName
                ? (e = (e) => !e.touched && e.name === t.name)
                : this.options.relativeXValue &&
                  (e = (e) => !e.touched && e.options.x === t.x),
              !(i = rL(n, e)))
            )
              return;
          }
          return (
            i && void 0 !== (o = i && i.index) && (s = !0),
            void 0 === o && rN(a) && (o = this.getColumn("x").indexOf(a, e)),
            -1 !== o &&
              void 0 !== o &&
              this.cropped &&
              (o = o >= this.cropStart ? o - this.cropStart : o),
            !s && rN(o) && n[o] && n[o].touched && (o = void 0),
            o
          );
        }
        updateData(t, e) {
          let i = this.options,
            s = i.dataSorting,
            o = this.points,
            r = [],
            a = this.requireSorting,
            n = t.length === o.length,
            h,
            l,
            d,
            c,
            p = !0;
          if (
            ((this.xIncrement = null),
            t.forEach(function (t, e) {
              let l;
              let d =
                  (rM(t) &&
                    this.pointClass.prototype.optionsToObject.call(
                      { series: this },
                      t
                    )) ||
                  {},
                p = d.x;
              d.id || rN(p)
                ? (-1 === (l = this.findPointIndex(d, c)) || void 0 === l
                    ? r.push(t)
                    : o[l] && t !== i.data[l]
                    ? (o[l].update(t, !1, null, !1),
                      (o[l].touched = !0),
                      a && (c = l + 1))
                    : o[l] && (o[l].touched = !0),
                  (!n || e !== l || (s && s.enabled) || this.hasDerivedData) &&
                    (h = !0))
                : r.push(t);
            }, this),
            h)
          )
            for (l = o.length; l--; )
              (d = o[l]) && !d.touched && d.remove && d.remove(!1, e);
          else
            !n || (s && s.enabled)
              ? (p = !1)
              : (t.forEach(function (t, e) {
                  t === o[e].y ||
                    o[e].destroyed ||
                    o[e].update(t, !1, null, !1);
                }),
                (r.length = 0));
          if (
            (o.forEach(function (t) {
              t && (t.touched = !1);
            }),
            !p)
          )
            return !1;
          r.forEach(function (t) {
            this.addPoint(t, !1, null, null, !1);
          }, this);
          let g = this.getColumn("x");
          return (
            null === this.xIncrement &&
              g.length &&
              ((this.xIncrement = ry(g)), this.autoIncrement()),
            !0
          );
        }
        dataColumnKeys() {
          return ["x", ...(this.pointArrayMap || ["y"])];
        }
        setData(t, e = !0, i, s) {
          let o = this.points,
            r = (o && o.length) || 0,
            a = this.options,
            n = this.chart,
            h = a.dataSorting,
            l = this.xAxis,
            d = a.turboThreshold,
            c = this.dataTable,
            p = this.dataColumnKeys(),
            g = this.pointValKey || "y",
            u = (this.pointArrayMap || []).length,
            f = a.keys,
            m,
            x,
            y = 0,
            b = 1,
            v;
          n.options.chart.allowMutatingData ||
            (a.data && delete this.options.data,
            this.userOptions.data && delete this.userOptions.data,
            (v = rR(!0, t)));
          let k = (t = v || t || []).length;
          if (
            (h && h.enabled && (t = this.sortData(t)),
            n.options.chart.allowMutatingData &&
              !1 !== s &&
              k &&
              r &&
              !this.cropped &&
              !this.hasGroupedData &&
              this.visible &&
              !this.boosted &&
              (x = this.updateData(t, i)),
            !x)
          ) {
            (this.xIncrement = null), (this.colorCounter = 0);
            let e = d && k > d;
            if (e) {
              let i = this.getFirstValidPoint(t),
                s = this.getFirstValidPoint(t, k - 1, -1),
                o = (t) => !!(rB(t) && (f || rN(t[0])));
              if (rN(i) && rN(s)) {
                let e = [],
                  i = [];
                for (let s of t) e.push(this.autoIncrement()), i.push(s);
                c.setColumns({ x: e, [g]: i });
              } else if (o(i) && o(s)) {
                if (u) {
                  let e = i.length === u ? 1 : 0,
                    s = Array(p.length)
                      .fill(0)
                      .map(() => []);
                  for (let i of t) {
                    e && s[0].push(this.autoIncrement());
                    for (let t = e; t <= u; t++) s[t]?.push(i[t - e]);
                  }
                  c.setColumns(p.reduce((t, e, i) => ((t[e] = s[i]), t), {}));
                } else {
                  f &&
                    ((y = f.indexOf("x")),
                    (b = f.indexOf("y")),
                    (y = y >= 0 ? y : 0),
                    (b = b >= 0 ? b : 1)),
                    1 === i.length && (b = 0);
                  let e = [],
                    s = [];
                  if (y === b)
                    for (let i of t) e.push(this.autoIncrement()), s.push(i[b]);
                  else for (let i of t) e.push(i[y]), s.push(i[b]);
                  c.setColumns({ x: e, [g]: s });
                }
              } else e = !1;
            }
            if (!e) {
              let e = p.reduce((t, e) => ((t[e] = []), t), {});
              for (m = 0; m < k; m++) {
                let i = this.pointClass.prototype.applyOptions.apply(
                  { series: this },
                  [t[m]]
                );
                for (let t of p) e[t][m] = i[t];
              }
              c.setColumns(e);
            }
            for (
              rz(this.getColumn("y")[0]) && rA(14, !0, n),
                this.data = [],
                this.options.data = this.userOptions.data = t,
                m = r;
              m--;

            )
              o[m]?.destroy();
            l && (l.minRange = l.userMinRange),
              (this.isDirty = n.isDirtyBox = !0),
              (this.isDirtyData = !!o),
              (i = !1);
          }
          "point" === a.legendType &&
            (this.processData(), this.generatePoints()),
            e && n.redraw(i);
        }
        sortData(t) {
          let e = this,
            i = e.options.dataSorting.sortKey || "y",
            s = function (t, e) {
              return (
                (rM(e) &&
                  t.pointClass.prototype.optionsToObject.call(
                    { series: t },
                    e
                  )) ||
                {}
              );
            };
          return (
            t.forEach(function (i, o) {
              (t[o] = s(e, i)), (t[o].index = o);
            }, this),
            t
              .concat()
              .sort((t, e) => {
                let s = rI(i, t),
                  o = rI(i, e);
                return o < s ? -1 : o > s ? 1 : 0;
              })
              .forEach(function (t, e) {
                t.x = e;
              }, this),
            e.linkedSeries &&
              e.linkedSeries.forEach(function (e) {
                let i = e.options,
                  o = i.data;
                (i.dataSorting && i.dataSorting.enabled) ||
                  !o ||
                  (o.forEach(function (i, r) {
                    (o[r] = s(e, i)),
                      t[r] && ((o[r].x = t[r].x), (o[r].index = r));
                  }),
                  e.setData(o, !1));
              }),
            t
          );
        }
        getProcessedData(t) {
          let e = this,
            { dataTable: i, isCartesian: s, options: o, xAxis: r } = e,
            a = o.cropThreshold,
            n = t || e.getExtremesFromAll,
            h = r?.logarithmic,
            l = i.rowCount,
            d,
            c,
            p = 0,
            g,
            u,
            f,
            m = e.getColumn("x"),
            x = i,
            y = !1;
          return (
            r &&
              ((u = (g = r.getExtremes()).min),
              (f = g.max),
              (y = !!(r.categories && !r.names.length)),
              s &&
                e.sorted &&
                !n &&
                (!a || l > a || e.forceCrop) &&
                (m[l - 1] < u || m[0] > f
                  ? (x = new re())
                  : e.getColumn(e.pointValKey || "y").length &&
                    (m[0] < u || m[l - 1] > f) &&
                    ((x = (d = this.cropData(i, u, f)).modified),
                    (p = d.start),
                    (c = !0)))),
            (m = x.getColumn("x") || []),
            {
              modified: x,
              cropped: c,
              cropStart: p,
              closestPointRange: rE(
                [h ? m.map(h.log2lin) : m],
                () => e.requireSorting && !y && rA(15, !1, e.chart)
              ),
            }
          );
        }
        processData(t) {
          let e = this.xAxis,
            i = this.dataTable;
          if (
            this.isCartesian &&
            !this.isDirty &&
            !e.isDirty &&
            !this.yAxis.isDirty &&
            !t
          )
            return !1;
          let s = this.getProcessedData();
          (i.modified = s.modified),
            (this.cropped = s.cropped),
            (this.cropStart = s.cropStart),
            (this.closestPointRange = this.basePointRange =
              s.closestPointRange),
            rO(this, "afterProcessData");
        }
        cropData(t, e, i) {
          let s = t.getColumn("x", !0) || [],
            o = s.length,
            r = {},
            a,
            n,
            h = 0,
            l = o;
          for (a = 0; a < o; a++)
            if (s[a] >= e) {
              h = Math.max(0, a - 1);
              break;
            }
          for (n = a; n < o; n++)
            if (s[n] > i) {
              l = n + 1;
              break;
            }
          for (let e of this.dataColumnKeys()) {
            let i = t.getColumn(e, !0);
            i && (r[e] = i.slice(h, l));
          }
          return { modified: new re({ columns: r }), start: h, end: l };
        }
        generatePoints() {
          let t = this.options,
            e = this.processedData || t.data,
            i = this.dataTable.modified,
            s = this.getColumn("x", !0),
            o = this.pointClass,
            r = i.rowCount,
            a = this.cropStart || 0,
            n = this.hasGroupedData,
            h = t.keys,
            l = [],
            d = t.dataGrouping && t.dataGrouping.groupAll ? a : 0,
            c = this.xAxis?.categories,
            p = this.pointArrayMap || ["y"],
            g = this.dataColumnKeys(),
            u,
            f,
            m,
            x,
            y = this.data,
            b;
          if (!y && !n) {
            let t = [];
            (t.length = e?.length || 0), (y = this.data = t);
          }
          for (h && n && (this.options.keys = !1), x = 0; x < r; x++)
            (f = a + x),
              n
                ? (((m = new o(this, i.getRow(x, g) || [])).dataGroup =
                    this.groupMap[d + x]),
                  m.dataGroup?.options &&
                    ((m.options = m.dataGroup.options),
                    rP(m, m.dataGroup.options),
                    delete m.dataLabels))
                : ((m = y[f]),
                  (b = e ? e[f] : i.getRow(x, p)),
                  m || void 0 === b || (y[f] = m = new o(this, b, s[x]))),
              m &&
                ((m.index = n ? d + x : f),
                (l[x] = m),
                (m.category = c?.[m.x] ?? m.x),
                (m.key = m.name ?? m.category));
          if (((this.options.keys = h), y && (r !== (u = y.length) || n)))
            for (x = 0; x < u; x++)
              x !== a || n || (x += r),
                y[x] && (y[x].destroyElements(), (y[x].plotX = void 0));
          (this.data = y), (this.points = l), rO(this, "afterGeneratePoints");
        }
        getXExtremes(t) {
          return { min: rb(t), max: ry(t) };
        }
        getExtremes(t, e) {
          let { xAxis: i, yAxis: s } = this,
            o = e || this.getExtremesFromAll || this.options.getExtremesFromAll,
            r = o && this.cropped ? this.dataTable : this.dataTable.modified,
            a = r.rowCount,
            n = t || this.stackedYData,
            h = n
              ? [n]
              : (this.keysAffectYAxis || this.pointArrayMap || ["y"])?.map(
                  (t) => r.getColumn(t, !0) || []
                ) || [],
            l = this.getColumn("x", !0),
            d = [],
            c = this.requireSorting && !this.is("column") ? 1 : 0,
            p = !!s && s.positiveValuesOnly,
            g = o || this.cropped || !i,
            u,
            f,
            m,
            x = 0,
            y = 0;
          for (
            i && ((x = (u = i.getExtremes()).min), (y = u.max)), m = 0;
            m < a;
            m++
          )
            if (
              ((f = l[m]), g || ((l[m + c] || f) >= x && (l[m - c] || f) <= y))
            )
              for (let t of h) {
                let e = t[m];
                rN(e) && (e > 0 || !p) && d.push(e);
              }
          let b = { activeYData: d, dataMin: rb(d), dataMax: ry(d) };
          return rO(this, "afterGetExtremes", { dataExtremes: b }), b;
        }
        applyExtremes() {
          let t = this.getExtremes();
          return (this.dataMin = t.dataMin), (this.dataMax = t.dataMax), t;
        }
        getFirstValidPoint(t, e = 0, i = 1) {
          let s = t.length,
            o = e;
          for (; o >= 0 && o < s; ) {
            if (rM(t[o])) return t[o];
            o += i;
          }
        }
        translate() {
          this.generatePoints();
          let t = this.options,
            e = t.stacking,
            i = this.xAxis,
            s = this.enabledDataSorting,
            o = this.yAxis,
            r = this.points,
            a = r.length,
            n = this.pointPlacementToXValue(),
            h = !!n,
            l = t.threshold,
            d = t.startFromThreshold ? l : 0,
            c,
            p,
            g,
            u,
            f = Number.MAX_VALUE;
          function m(t) {
            return rv(t, -1e9, 1e9);
          }
          for (c = 0; c < a; c++) {
            let t;
            let a = r[c],
              x = a.x,
              y,
              b,
              v = a.y,
              k = a.low,
              w =
                e &&
                o.stacking?.stacks[
                  (this.negStacks && v < (d ? 0 : l) ? "-" : "") + this.stackKey
                ];
            (p = i.translate(x, !1, !1, !1, !0, n)),
              (a.plotX = rN(p) ? rk(m(p)) : void 0),
              e &&
                this.visible &&
                w &&
                w[x] &&
                ((u = this.getStackIndicator(u, x, this.index)),
                !a.isNull && u.key && (b = (y = w[x]).points[u.key]),
                y &&
                  rB(b) &&
                  ((k = b[0]),
                  (v = b[1]),
                  k === d && u.key === w[x].base && (k = rH(rN(l) ? l : o.min)),
                  o.positiveValuesOnly && rM(k) && k <= 0 && (k = void 0),
                  (a.total = a.stackTotal = rH(y.total)),
                  (a.percentage =
                    rM(a.y) && y.total ? (a.y / y.total) * 100 : void 0),
                  (a.stackY = v),
                  this.irregularWidths ||
                    y.setOffset(
                      this.pointXOffset || 0,
                      this.barW || 0,
                      void 0,
                      void 0,
                      void 0,
                      this.xAxis
                    ))),
              (a.yBottom = rM(k) ? m(o.translate(k, !1, !0, !1, !0)) : void 0),
              this.dataModify && (v = this.dataModify.modifyValue(v, c)),
              rN(v) &&
                void 0 !== a.plotX &&
                (t = rN((t = o.translate(v, !1, !0, !1, !0))) ? m(t) : void 0),
              (a.plotY = t),
              (a.isInside = this.isPointInside(a)),
              (a.clientX = h ? rk(i.translate(x, !1, !1, !1, !0, n)) : p),
              (a.negative = (a.y || 0) < (l || 0)),
              a.isNull ||
                !1 === a.visible ||
                (void 0 !== g && (f = Math.min(f, Math.abs(p - g))), (g = p)),
              (a.zone = this.zones.length ? a.getZone() : void 0),
              !a.graphic && this.group && s && (a.isNew = !0);
          }
          (this.closestPointRangePx = f), rO(this, "afterTranslate");
        }
        getValidPoints(t, e, i) {
          let s = this.chart;
          return (t || this.points || []).filter(function (t) {
            let { plotX: o, plotY: r } = t;
            return (
              !!(
                (i || (!t.isNull && rN(r))) &&
                (!e || s.isInsidePlot(o, r, { inverted: s.inverted }))
              ) && !1 !== t.visible
            );
          });
        }
        getClipBox() {
          let { chart: t, xAxis: e, yAxis: i } = this,
            { x: s, y: o, width: r, height: a } = rR(t.clipBox);
          return (
            e && e.len !== t.plotSizeX && (r = e.len),
            i && i.len !== t.plotSizeY && (a = i.len),
            t.inverted && !this.invertible && ([r, a] = [a, r]),
            { x: s, y: o, width: r, height: a }
          );
        }
        getSharedClipKey() {
          return (
            (this.sharedClipKey =
              (this.options.xAxis || 0) + "," + (this.options.yAxis || 0)),
            this.sharedClipKey
          );
        }
        setClip() {
          let { chart: t, group: e, markerGroup: i } = this,
            s = t.sharedClips,
            o = t.renderer,
            r = this.getClipBox(),
            a = this.getSharedClipKey(),
            n = s[a];
          n ? n.animate(r) : (s[a] = n = o.clipRect(r)),
            e && e.clip(!1 === this.options.clip ? void 0 : n),
            i && i.clip();
        }
        animate(t) {
          let { chart: e, group: i, markerGroup: s } = this,
            o = e.inverted,
            r = rc(this.options.animation),
            a = [this.getSharedClipKey(), r.duration, r.easing, r.defer].join(
              ","
            ),
            n = e.sharedClips[a],
            h = e.sharedClips[a + "m"];
          if (t && i) {
            let t = this.getClipBox();
            if (n) n.attr("height", t.height);
            else {
              (t.width = 0),
                o && (t.x = e.plotHeight),
                (n = e.renderer.clipRect(t)),
                (e.sharedClips[a] = n);
              let i = {
                x: -99,
                y: -99,
                width: o ? e.plotWidth + 199 : 99,
                height: o ? 99 : e.plotHeight + 199,
              };
              (h = e.renderer.clipRect(i)), (e.sharedClips[a + "m"] = h);
            }
            i.clip(n), s?.clip(h);
          } else if (n && !n.hasClass("highcharts-animating")) {
            let t = this.getClipBox(),
              i = r.step;
            (s?.element.childNodes.length || e.series.length > 1) &&
              (r.step = function (t, e) {
                i && i.apply(e, arguments),
                  "width" === e.prop &&
                    h?.element &&
                    h.attr(o ? "height" : "width", t + 99);
              }),
              n.addClass("highcharts-animating").animate(t, r);
          }
        }
        afterAnimate() {
          this.setClip(),
            rW(this.chart.sharedClips, (t, e, i) => {
              t &&
                !this.chart.container.querySelector(
                  `[clip-path="url(#${t.id})"]`
                ) &&
                (t.destroy(), delete i[e]);
            }),
            (this.finishedAnimating = !0),
            rO(this, "afterAnimate");
        }
        drawPoints(t = this.points) {
          let e, i, s, o, r, a, n;
          let h = this.chart,
            l = h.styledMode,
            { colorAxis: d, options: c } = this,
            p = c.marker,
            g = this[this.specialGroup || "markerGroup"],
            u = this.xAxis,
            f = rH(
              p.enabled,
              !u || !!u.isRadial || null,
              this.closestPointRangePx >= p.enabledThreshold * p.radius
            );
          if (!1 !== p.enabled || this._hasPointMarkers)
            for (e = 0; e < t.length; e++)
              if (
                ((o = (s = (i = t[e]).graphic) ? "animate" : "attr"),
                (r = i.marker || {}),
                (a = !!i.marker),
                ((f && void 0 === r.enabled) || r.enabled) &&
                  !i.isNull &&
                  !1 !== i.visible)
              ) {
                let t = rH(r.symbol, this.symbol, "rect");
                (n = this.markerAttribs(i, i.selected && "select")),
                  this.enabledDataSorting &&
                    (i.startXPos = u.reversed ? -(n.width || 0) : u.width);
                let e = !1 !== i.isInside;
                if (
                  (!s &&
                    e &&
                    ((n.width || 0) > 0 || i.hasImage) &&
                    ((i.graphic = s =
                      h.renderer
                        .symbol(t, n.x, n.y, n.width, n.height, a ? r : p)
                        .add(g)),
                    this.enabledDataSorting &&
                      h.hasRendered &&
                      (s.attr({ x: i.startXPos }), (o = "animate"))),
                  s && "animate" === o && s[e ? "show" : "hide"](e).animate(n),
                  s)
                ) {
                  let t = this.pointAttribs(
                    i,
                    l || !i.selected ? void 0 : "select"
                  );
                  l ? d && s.css({ fill: t.fill }) : s[o](t);
                }
                s && s.addClass(i.getClassName(), !0);
              } else s && (i.graphic = s.destroy());
        }
        markerAttribs(t, e) {
          let i = this.options,
            s = i.marker,
            o = t.marker || {},
            r = o.symbol || s.symbol,
            a = {},
            n,
            h,
            l = rH(o.radius, s && s.radius);
          e &&
            ((n = s.states[e]),
            (l = rH(
              (h = o.states && o.states[e]) && h.radius,
              n && n.radius,
              l && l + ((n && n.radiusPlus) || 0)
            ))),
            (t.hasImage = r && 0 === r.indexOf("url")),
            t.hasImage && (l = 0);
          let d = t.pos();
          return (
            rN(l) &&
              d &&
              (i.crisp &&
                (d[0] = rw(
                  d[0],
                  t.hasImage ? 0 : "rect" === r ? s?.lineWidth || 0 : 1
                )),
              (a.x = d[0] - l),
              (a.y = d[1] - l)),
            l && (a.width = a.height = 2 * l),
            a
          );
        }
        pointAttribs(t, e) {
          let i = this.options.marker,
            s = t && t.options,
            o = (s && s.marker) || {},
            r = s && s.color,
            a = t && t.color,
            n = t && t.zone && t.zone.color,
            h,
            l,
            d = this.color,
            c,
            p,
            g = rH(o.lineWidth, i.lineWidth),
            u = 1;
          return (
            (d = r || n || a || d),
            (c = o.fillColor || i.fillColor || d),
            (p = o.lineColor || i.lineColor || d),
            (e = e || "normal"),
            (h = i.states[e] || {}),
            (g = rH(
              (l = (o.states && o.states[e]) || {}).lineWidth,
              h.lineWidth,
              g + rH(l.lineWidthPlus, h.lineWidthPlus, 0)
            )),
            (c = l.fillColor || h.fillColor || c),
            {
              stroke: (p = l.lineColor || h.lineColor || p),
              "stroke-width": g,
              fill: c,
              opacity: (u = rH(l.opacity, h.opacity, u)),
            }
          );
        }
        destroy(t) {
          let e, i, s;
          let o = this,
            r = o.chart,
            a = /AppleWebKit\/533/.test(rm.navigator.userAgent),
            n = o.data || [];
          for (
            rO(o, "destroy", { keepEventsForUpdate: t }),
              this.removeEvents(t),
              (o.axisTypes || []).forEach(function (t) {
                (s = o[t]) &&
                  s.series &&
                  (rC(s.series, o), (s.isDirty = s.forceRedraw = !0));
              }),
              o.legendItem && o.chart.legend.destroyItem(o),
              e = n.length;
            e--;

          )
            (i = n[e]) && i.destroy && i.destroy();
          for (let t of o.zones) rS(t, void 0, !0);
          $.clearTimeout(o.animationTimeout),
            rW(o, function (t, e) {
              t instanceof ej &&
                !t.survive &&
                t[a && "group" === e ? "hide" : "destroy"]();
            }),
            r.hoverSeries === o && (r.hoverSeries = void 0),
            rC(r.series, o),
            r.orderItems("series"),
            rW(o, function (e, i) {
              (t && "hcEvents" === i) || delete o[i];
            });
        }
        applyZones() {
          let {
              area: t,
              chart: e,
              graph: i,
              zones: s,
              points: o,
              xAxis: r,
              yAxis: a,
              zoneAxis: n,
            } = this,
            { inverted: h, renderer: l } = e,
            d = this[`${n}Axis`],
            { isXAxis: c, len: p = 0, minPointOffset: g = 0 } = d || {},
            u = (i?.strokeWidth() || 0) / 2 + 1,
            f = (t, e = 0, i = 0) => {
              h && (i = p - i);
              let { translated: s = 0, lineClip: o } = t,
                r = i - s;
              o?.push([
                "L",
                e,
                Math.abs(r) < u ? i - u * (r <= 0 ? -1 : 1) : s,
              ]);
            };
          if (s.length && (i || t) && d && rN(d.min)) {
            let e = d.getExtremes().max + g,
              u = (t) => {
                t.forEach((e, i) => {
                  ("M" === e[0] || "L" === e[0]) &&
                    (t[i] = [e[0], c ? p - e[1] : e[1], c ? e[2] : p - e[2]]);
                });
              };
            if (
              (s.forEach((t) => {
                (t.lineClip = []),
                  (t.translated = rv(
                    d.toPixels(rH(t.value, e), !0) || 0,
                    0,
                    p
                  ));
              }),
              i && !this.showLine && i.hide(),
              t && t.hide(),
              "y" === n && o.length < r.len)
            )
              for (let t of o) {
                let { plotX: e, plotY: i, zone: o } = t,
                  r = o && s[s.indexOf(o) - 1];
                o && f(o, e, i), r && f(r, e, i);
              }
            let m = [],
              x = d.toPixels(d.getExtremes().min - g, !0);
            s.forEach((e) => {
              let s = e.lineClip || [],
                o = Math.round(e.translated || 0);
              r.reversed && s.reverse();
              let { clip: n, simpleClip: d } = e,
                p = 0,
                g = 0,
                f = r.len,
                y = a.len;
              c ? ((p = o), (f = x)) : ((g = o), (y = x));
              let b = [
                  ["M", p, g],
                  ["L", f, g],
                  ["L", f, y],
                  ["L", p, y],
                  ["Z"],
                ],
                v = [b[0], ...s, b[1], b[2], ...m, b[3], b[4]];
              (m = s.reverse()),
                (x = o),
                h && (u(v), t && u(b)),
                n
                  ? (n.animate({ d: v }), d?.animate({ d: b }))
                  : ((n = e.clip = l.path(v)),
                    t && (d = e.simpleClip = l.path(b))),
                i && e.graph?.clip(n),
                t && e.area?.clip(d);
            });
          } else this.visible && (i && i.show(), t && t.show());
        }
        plotGroup(t, e, i, s, o) {
          let r = this[t],
            a = !r,
            n = { visibility: i, zIndex: s || 0.1 };
          return (
            rM(this.opacity) &&
              !this.chart.styledMode &&
              "inactive" !== this.state &&
              (n.opacity = this.opacity),
            r || (this[t] = r = this.chart.renderer.g().add(o)),
            r.addClass(
              "highcharts-" +
                e +
                " highcharts-series-" +
                this.index +
                " highcharts-" +
                this.type +
                "-series " +
                (rM(this.colorIndex)
                  ? "highcharts-color-" + this.colorIndex + " "
                  : "") +
                (this.options.className || "") +
                (r.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""),
              !0
            ),
            r.attr(n)[a ? "attr" : "animate"](this.getPlotBox(e)),
            r
          );
        }
        getPlotBox(t) {
          let e = this.xAxis,
            i = this.yAxis,
            s = this.chart,
            o =
              s.inverted && !s.polar && e && this.invertible && "series" === t;
          return (
            s.inverted && ((e = i), (i = this.xAxis)),
            {
              translateX: e ? e.left : s.plotLeft,
              translateY: i ? i.top : s.plotTop,
              rotation: o ? 90 : 0,
              rotationOriginX: o ? (e.len - i.len) / 2 : 0,
              rotationOriginY: o ? (e.len + i.len) / 2 : 0,
              scaleX: o ? -1 : 1,
              scaleY: 1,
            }
          );
        }
        removeEvents(t) {
          let { eventsToUnbind: e } = this;
          t || rX(this),
            e.length &&
              (e.forEach((t) => {
                t();
              }),
              (e.length = 0));
        }
        render() {
          let t = this,
            { chart: e, options: i, hasRendered: s } = t,
            o = rc(i.animation),
            r = t.visible ? "inherit" : "hidden",
            a = i.zIndex,
            n = e.seriesGroup,
            h = t.finishedAnimating ? 0 : o.duration;
          rO(this, "render"),
            t.plotGroup("group", "series", r, a, n),
            (t.markerGroup = t.plotGroup("markerGroup", "markers", r, a, n)),
            !1 !== i.clip && t.setClip(),
            h && t.animate?.(!0),
            t.drawGraph && (t.drawGraph(), t.applyZones()),
            t.visible && t.drawPoints(),
            t.drawDataLabels?.(),
            t.redrawPoints?.(),
            i.enableMouseTracking && t.drawTracker?.(),
            h && t.animate?.(),
            s ||
              (h && o.defer && (h += o.defer),
              (t.animationTimeout = rF(() => {
                t.afterAnimate();
              }, h || 0))),
            (t.isDirty = !1),
            (t.hasRendered = !0),
            rO(t, "afterRender");
        }
        redraw() {
          let t = this.isDirty || this.isDirtyData;
          this.translate(), this.render(), t && delete this.kdTree;
        }
        reserveSpace() {
          return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
        }
        searchPoint(t, e) {
          let { xAxis: i, yAxis: s } = this,
            o = this.chart.inverted;
          return this.searchKDTree(
            {
              clientX: o ? i.len - t.chartY + i.pos : t.chartX - i.pos,
              plotY: o ? s.len - t.chartX + s.pos : t.chartY - s.pos,
            },
            e,
            t
          );
        }
        buildKDTree(t) {
          this.buildingKdTree = !0;
          let e = this,
            i = e.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
          delete e.kdTree,
            rF(
              function () {
                (e.kdTree = (function t(i, s, o) {
                  let r, a;
                  let n = i?.length;
                  if (n)
                    return (
                      (r = e.kdAxisArray[s % o]),
                      i.sort((t, e) => (t[r] || 0) - (e[r] || 0)),
                      {
                        point: i[(a = Math.floor(n / 2))],
                        left: t(i.slice(0, a), s + 1, o),
                        right: t(i.slice(a + 1), s + 1, o),
                      }
                    );
                })(e.getValidPoints(void 0, !e.directTouch), i, i)),
                  (e.buildingKdTree = !1);
              },
              e.options.kdNow || t?.type === "touchstart" ? 0 : 1
            );
        }
        searchKDTree(t, e, i, s, o) {
          let r = this,
            [a, n] = this.kdAxisArray,
            h = e ? "distX" : "dist",
            l = (r.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1,
            d = !!r.isBubble,
            c = s || ((t, e, i) => [(t[i] || 0) < (e[i] || 0) ? t : e, !1]),
            p = o || ((t, e) => t < e);
          if (
            (this.kdTree || this.buildingKdTree || this.buildKDTree(i),
            this.kdTree)
          )
            return (function t(e, i, s, o) {
              let l = i.point,
                g = r.kdAxisArray[s % o],
                u = l,
                f = !1;
              !(function (t, e) {
                let i = t[a],
                  s = e[a],
                  o = rM(i) && rM(s) ? i - s : null,
                  r = t[n],
                  h = e[n],
                  l = rM(r) && rM(h) ? r - h : 0,
                  c = (d && e.marker?.radius) || 0;
                (e.dist = Math.sqrt(((o && o * o) || 0) + l * l) - c),
                  (e.distX = rM(o) ? Math.abs(o) - c : Number.MAX_VALUE);
              })(e, l);
              let m =
                  (e[g] || 0) - (l[g] || 0) + ((d && l.marker?.radius) || 0),
                x = m < 0 ? "left" : "right",
                y = m < 0 ? "right" : "left";
              return (
                i[x] && ([u, f] = c(l, t(e, i[x], s + 1, o), h)),
                i[y] &&
                  p(Math.sqrt(m * m), u[h], f) &&
                  (u = c(u, t(e, i[y], s + 1, o), h)[0]),
                u
              );
            })(t, this.kdTree, l, l);
        }
        pointPlacementToXValue() {
          let { options: t, xAxis: e } = this,
            i = t.pointPlacement;
          return (
            "between" === i && (i = e.reversed ? -0.5 : 0.5),
            rN(i) ? i * (t.pointRange || e.pointRange) : 0
          );
        }
        isPointInside(t) {
          let { chart: e, xAxis: i, yAxis: s } = this,
            { plotX: o = -1, plotY: r = -1 } = t;
          return (
            r >= 0 &&
            r <= (s ? s.len : e.plotHeight) &&
            o >= 0 &&
            o <= (i ? i.len : e.plotWidth)
          );
        }
        drawTracker() {
          let t = this,
            e = t.options,
            i = e.trackByArea,
            s = [].concat((i ? t.areaPath : t.graphPath) || []),
            o = t.chart,
            r = o.pointer,
            a = o.renderer,
            n = o.options.tooltip?.snap || 0,
            h = () => {
              e.enableMouseTracking && o.hoverSeries !== t && t.onMouseOver();
            },
            l = "rgba(192,192,192," + (rf ? 1e-4 : 0.002) + ")",
            d = t.tracker;
          d
            ? d.attr({ d: s })
            : t.graph &&
              ((t.tracker = d =
                a
                  .path(s)
                  .attr({
                    visibility: t.visible ? "inherit" : "hidden",
                    zIndex: 2,
                  })
                  .addClass(
                    i ? "highcharts-tracker-area" : "highcharts-tracker-line"
                  )
                  .add(t.group)),
              o.styledMode ||
                d.attr({
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  stroke: l,
                  fill: i ? l : "none",
                  "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * n),
                }),
              [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach((t) => {
                t &&
                  (t
                    .addClass("highcharts-tracker")
                    .on("mouseover", h)
                    .on("mouseout", (t) => {
                      r?.onTrackerMouseOut(t);
                    }),
                  e.cursor && !o.styledMode && t.css({ cursor: e.cursor }),
                  t.on("touchstart", h));
              })),
            rO(this, "afterDrawTracker");
        }
        addPoint(t, e, i, s, o) {
          let r, a;
          let n = this.options,
            { chart: h, data: l, dataTable: d, xAxis: c } = this,
            p = c && c.hasNames && c.names,
            g = n.data,
            u = this.getColumn("x");
          e = rH(e, !0);
          let f = { series: this };
          this.pointClass.prototype.applyOptions.apply(f, [t]);
          let m = f.x;
          if (((a = u.length), this.requireSorting && m < u[a - 1]))
            for (r = !0; a && u[a - 1] > m; ) a--;
          d.setRow(f, a, !0, { addColumns: !1 }),
            p && f.name && (p[m] = f.name),
            g?.splice(a, 0, t),
            (r || this.processedData) &&
              (this.data.splice(a, 0, null), this.processData()),
            "point" === n.legendType && this.generatePoints(),
            i &&
              (l[0] && l[0].remove
                ? l[0].remove(!1)
                : ([l, g, ...Object.values(d.getColumns())]
                    .filter(rM)
                    .forEach((t) => {
                      t.shift();
                    }),
                  (d.rowCount -= 1),
                  rO(d, "afterDeleteRows"))),
            !1 !== o && rO(this, "addPoint", { point: f }),
            (this.isDirty = !0),
            (this.isDirtyData = !0),
            e && h.redraw(s);
        }
        removePoint(t, e, i) {
          let s = this,
            { chart: o, data: r, points: a, dataTable: n } = s,
            h = r[t],
            l = function () {
              [
                a?.length === r.length ? a : void 0,
                r,
                s.options.data,
                ...Object.values(n.getColumns()),
              ]
                .filter(rM)
                .forEach((e) => {
                  e.splice(t, 1);
                }),
                (n.rowCount -= 1),
                rO(n, "afterDeleteRows"),
                h?.destroy(),
                (s.isDirty = !0),
                (s.isDirtyData = !0),
                e && o.redraw();
            };
          rp(i, o),
            (e = rH(e, !0)),
            h ? h.firePointEvent("remove", null, l) : l();
        }
        remove(t, e, i, s) {
          let o = this,
            r = o.chart;
          function a() {
            o.destroy(s),
              (r.isDirtyLegend = r.isDirtyBox = !0),
              r.linkSeries(s),
              rH(t, !0) && r.redraw(e);
          }
          !1 !== i ? rO(o, "remove", null, a) : a();
        }
        update(t, e) {
          rO(this, "update", { options: (t = rT(t, this.userOptions)) });
          let i = this,
            s = i.chart,
            o = i.userOptions,
            r = i.initialType || i.type,
            a = s.options.plotOptions,
            n = rx[r].prototype,
            h = i.finishedAnimating && { animation: !1 },
            l = {},
            d,
            c,
            p = [
              "colorIndex",
              "eventOptions",
              "navigatorSeries",
              "symbolIndex",
              "baseSeries",
            ],
            g = t.type || o.type || s.options.chart.type,
            u = !(
              this.hasDerivedData ||
              (g && g !== this.type) ||
              void 0 !== t.keys ||
              void 0 !== t.pointStart ||
              void 0 !== t.pointInterval ||
              void 0 !== t.relativeXValue ||
              t.joinBy ||
              t.mapData ||
              [
                "dataGrouping",
                "pointStart",
                "pointInterval",
                "pointIntervalUnit",
                "keys",
              ].some((t) => i.hasOptionChanged(t))
            );
          (g = g || r),
            u
              ? (p.push(
                  "data",
                  "isDirtyData",
                  "isDirtyCanvas",
                  "points",
                  "dataTable",
                  "processedData",
                  "xIncrement",
                  "cropped",
                  "_hasPointMarkers",
                  "hasDataLabels",
                  "nodes",
                  "layout",
                  "level",
                  "mapMap",
                  "mapData",
                  "minY",
                  "maxY",
                  "minX",
                  "maxX",
                  "transformGroups"
                ),
                !1 !== t.visible && p.push("area", "graph"),
                i.parallelArrays.forEach(function (t) {
                  p.push(t + "Data");
                }),
                t.data &&
                  (t.dataSorting && rP(i.options.dataSorting, t.dataSorting),
                  this.setData(t.data, !1)))
              : (this.dataTable.modified = this.dataTable),
            (t = rR(
              o,
              {
                index: void 0 === o.index ? i.index : o.index,
                pointStart:
                  a?.series?.pointStart ?? o.pointStart ?? i.getColumn("x")[0],
              },
              !u && { data: i.options.data },
              t,
              h
            )),
            u && t.data && (t.data = i.options.data),
            (p = [
              "group",
              "markerGroup",
              "dataLabelsGroup",
              "transformGroup",
            ].concat(p)).forEach(function (t) {
              (p[t] = i[t]), delete i[t];
            });
          let f = !1;
          if (rx[g]) {
            if (((f = g !== i.type), i.remove(!1, !1, !1, !0), f)) {
              if ((s.propFromSeries(), Object.setPrototypeOf))
                Object.setPrototypeOf(i, rx[g].prototype);
              else {
                let t = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
                for (c in n) i[c] = void 0;
                rP(i, rx[g].prototype),
                  t ? (i.hcEvents = t) : delete i.hcEvents;
              }
            }
          } else rA(17, !0, s, { missingModuleFor: g });
          if (
            (p.forEach(function (t) {
              i[t] = p[t];
            }),
            i.init(s, t),
            u && this.points)
          )
            for (let t of (!1 === (d = i.options).visible
              ? ((l.graphic = 1), (l.dataLabel = 1))
              : (this.hasMarkerChanged(d, o) && (l.graphic = 1),
                i.hasDataLabels?.() || (l.dataLabel = 1)),
            this.points))
              t &&
                t.series &&
                (t.resolveColor(),
                Object.keys(l).length && t.destroyElements(l),
                !1 === d.showInLegend &&
                  t.legendItem &&
                  s.legend.destroyItem(t));
          (i.initialType = r),
            s.linkSeries(),
            s.setSortedData(),
            f && i.linkedSeries.length && (i.isDirtyData = !0),
            rO(this, "afterUpdate"),
            rH(e, !0) && s.redraw(!!u && void 0);
        }
        setName(t) {
          (this.name = this.options.name = this.userOptions.name = t),
            (this.chart.isDirtyLegend = !0);
        }
        hasOptionChanged(t) {
          let e = this.chart,
            i = this.options[t],
            s = e.options.plotOptions,
            o = this.userOptions[t],
            r = rH(s?.[this.type]?.[t], s?.series?.[t]);
          return o && !rM(r) ? i !== o : i !== rH(r, i);
        }
        onMouseOver() {
          let t = this.chart,
            e = t.hoverSeries,
            i = t.pointer;
          i?.setHoverChartIndex(),
            e && e !== this && e.onMouseOut(),
            this.options.events.mouseOver && rO(this, "mouseOver"),
            this.setState("hover"),
            (t.hoverSeries = this);
        }
        onMouseOut() {
          let t = this.options,
            e = this.chart,
            i = e.tooltip,
            s = e.hoverPoint;
          (e.hoverSeries = null),
            s && s.onMouseOut(),
            this && t.events.mouseOut && rO(this, "mouseOut"),
            i &&
              !this.stickyTracking &&
              (!i.shared || this.noSharedTooltip) &&
              i.hide(),
            e.series.forEach(function (t) {
              t.setState("", !0);
            });
        }
        setState(t, e) {
          let i = this,
            s = i.options,
            o = i.graph,
            r = s.inactiveOtherPoints,
            a = s.states,
            n = rH(
              a[t || "normal"] && a[t || "normal"].animation,
              i.chart.options.chart.animation
            ),
            h = s.lineWidth,
            l = s.opacity;
          if (
            ((t = t || ""),
            i.state !== t &&
              ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function (
                e
              ) {
                e &&
                  (i.state && e.removeClass("highcharts-series-" + i.state),
                  t && e.addClass("highcharts-series-" + t));
              }),
              (i.state = t),
              !i.chart.styledMode))
          ) {
            if (a[t] && !1 === a[t].enabled) return;
            if (
              (t &&
                ((h = a[t].lineWidth || h + (a[t].lineWidthPlus || 0)),
                (l = rH(a[t].opacity, l))),
              o && !o.dashstyle && rN(h))
            )
              for (let t of [o, ...this.zones.map((t) => t.graph)])
                t?.animate({ "stroke-width": h }, n);
            r ||
              [
                i.group,
                i.markerGroup,
                i.dataLabelsGroup,
                i.labelBySeries,
              ].forEach(function (t) {
                t && t.animate({ opacity: l }, n);
              });
          }
          e && r && i.points && i.setAllPointsToState(t || void 0);
        }
        setAllPointsToState(t) {
          this.points.forEach(function (e) {
            e.setState && e.setState(t);
          });
        }
        setVisible(t, e) {
          let i = this,
            s = i.chart,
            o = s.options.chart.ignoreHiddenSeries,
            r = i.visible;
          i.visible =
            t =
            i.options.visible =
            i.userOptions.visible =
              void 0 === t ? !r : t;
          let a = t ? "show" : "hide";
          ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(
            (t) => {
              i[t]?.[a]();
            }
          ),
            (s.hoverSeries === i || s.hoverPoint?.series === i) &&
              i.onMouseOut(),
            i.legendItem && s.legend.colorizeItem(i, t),
            (i.isDirty = !0),
            i.options.stacking &&
              s.series.forEach((t) => {
                t.options.stacking && t.visible && (t.isDirty = !0);
              }),
            i.linkedSeries.forEach((e) => {
              e.setVisible(t, !1);
            }),
            o && (s.isDirtyBox = !0),
            rO(i, a),
            !1 !== e && s.redraw();
        }
        show() {
          this.setVisible(!0);
        }
        hide() {
          this.setVisible(!1);
        }
        select(t) {
          (this.selected =
            t =
            this.options.selected =
              void 0 === t ? !this.selected : t),
            this.checkbox && (this.checkbox.checked = t),
            rO(this, t ? "select" : "unselect");
        }
        shouldShowTooltip(t, e, i = {}) {
          return (
            (i.series = this),
            (i.visiblePlotOnly = !0),
            this.chart.isInsidePlot(t, e, i)
          );
        }
        drawLegendSymbol(t, e) {
          rr[this.options.legendSymbol || "rectangle"]?.call(this, t, e);
        }
      }
      (rG.defaultOptions = {
        lineWidth: 2,
        allowPointSelect: !1,
        crisp: !0,
        showCheckbox: !1,
        animation: { duration: 1e3 },
        enableMouseTracking: !0,
        events: {},
        marker: {
          enabledThreshold: 2,
          lineColor: "#ffffff",
          lineWidth: 0,
          radius: 4,
          states: {
            normal: { animation: !0 },
            hover: {
              animation: { duration: 150 },
              enabled: !0,
              radiusPlus: 2,
              lineWidthPlus: 1,
            },
            select: {
              fillColor: "#cccccc",
              lineColor: "#000000",
              lineWidth: 2,
            },
          },
        },
        point: { events: {} },
        dataLabels: {
          animation: {},
          align: "center",
          borderWidth: 0,
          defer: !0,
          formatter: function () {
            let { numberFormatter: t } = this.series.chart;
            return "number" != typeof this.y ? "" : t(this.y, -1);
          },
          padding: 5,
          style: {
            fontSize: "0.7em",
            fontWeight: "bold",
            color: "contrast",
            textOutline: "1px contrast",
          },
          verticalAlign: "bottom",
          x: 0,
          y: 0,
        },
        cropThreshold: 300,
        opacity: 1,
        pointRange: 0,
        softThreshold: !0,
        states: {
          normal: { animation: !0 },
          hover: {
            animation: { duration: 150 },
            lineWidthPlus: 1,
            marker: {},
            halo: { size: 10, opacity: 0.25 },
          },
          select: { animation: { duration: 0 } },
          inactive: { animation: { duration: 150 }, opacity: 0.2 },
        },
        stickyTracking: !0,
        turboThreshold: 1e3,
        findNearestPointBy: "x",
      }),
        (rG.types = rd.seriesTypes),
        (rG.registerType = rd.registerSeriesType),
        rP(rG.prototype, {
          axisTypes: ["xAxis", "yAxis"],
          coll: "series",
          colorCounter: 0,
          directTouch: !1,
          invertible: !0,
          isCartesian: !0,
          kdAxisArray: ["clientX", "plotY"],
          parallelArrays: ["x", "y"],
          pointClass: oF,
          requireSorting: !0,
          sorted: !0,
        }),
        (rd.series = rG);
      let rY = rG,
        { animObject: rj, setAnimation: rU } = tR,
        { registerEventOptions: r$ } = i3,
        { composed: rV, marginNames: r_ } = k,
        { distribute: rq } = ed,
        { format: rZ } = eo,
        {
          addEvent: rK,
          createElement: rJ,
          css: rQ,
          defined: r0,
          discardElement: r1,
          find: r2,
          fireEvent: r3,
          isNumber: r5,
          merge: r6,
          pick: r9,
          pushUnique: r4,
          relativeLength: r8,
          stableSort: r7,
          syncTimeout: at,
        } = $;
      class ae {
        constructor(t, e) {
          (this.allItems = []),
            (this.initialItemY = 0),
            (this.itemHeight = 0),
            (this.itemMarginBottom = 0),
            (this.itemMarginTop = 0),
            (this.itemX = 0),
            (this.itemY = 0),
            (this.lastItemY = 0),
            (this.lastLineHeight = 0),
            (this.legendHeight = 0),
            (this.legendWidth = 0),
            (this.maxItemWidth = 0),
            (this.maxLegendWidth = 0),
            (this.offsetWidth = 0),
            (this.padding = 0),
            (this.pages = []),
            (this.symbolHeight = 0),
            (this.symbolWidth = 0),
            (this.titleHeight = 0),
            (this.totalItemWidth = 0),
            (this.widthOption = 0),
            (this.chart = t),
            this.setOptions(e),
            e.enabled &&
              (this.render(),
              r$(this, e),
              rK(this.chart, "endResize", function () {
                this.legend.positionCheckboxes();
              })),
            rK(this.chart, "render", () => {
              this.options.enabled &&
                this.proximate &&
                (this.proximatePositions(), this.positionItems());
            });
        }
        setOptions(t) {
          let e = r9(t.padding, 8);
          (this.options = t),
            this.chart.styledMode ||
              ((this.itemStyle = t.itemStyle),
              (this.itemHiddenStyle = r6(this.itemStyle, t.itemHiddenStyle))),
            (this.itemMarginTop = t.itemMarginTop),
            (this.itemMarginBottom = t.itemMarginBottom),
            (this.padding = e),
            (this.initialItemY = e - 5),
            (this.symbolWidth = r9(t.symbolWidth, 16)),
            (this.pages = []),
            (this.proximate = "proximate" === t.layout && !this.chart.inverted),
            (this.baseline = void 0);
        }
        update(t, e) {
          let i = this.chart;
          this.setOptions(r6(!0, this.options, t)),
            "events" in this.options && r$(this, this.options),
            this.destroy(),
            (i.isDirtyLegend = i.isDirtyBox = !0),
            r9(e, !0) && i.redraw(),
            r3(this, "afterUpdate", { redraw: e });
        }
        colorizeItem(t, e) {
          let i = t.color,
            {
              area: s,
              group: o,
              label: r,
              line: a,
              symbol: n,
            } = t.legendItem || {};
          if (
            ((t instanceof rY || t instanceof oF) &&
              (t.color = t.options?.legendSymbolColor || i),
            o?.[e ? "removeClass" : "addClass"](
              "highcharts-legend-item-hidden"
            ),
            !this.chart.styledMode)
          ) {
            let { itemHiddenStyle: i = {} } = this,
              o = i.color,
              {
                fillColor: h,
                fillOpacity: l,
                lineColor: d,
                marker: c,
              } = t.options,
              p = (t) => (
                !e && (t.fill && (t.fill = o), t.stroke && (t.stroke = o)), t
              );
            r?.css(r6(e ? this.itemStyle : i)),
              a?.attr(p({ stroke: d || t.color })),
              n &&
                n.attr(
                  p(c && n.isMarker ? t.pointAttribs() : { fill: t.color })
                ),
              s?.attr(
                p({ fill: h || t.color, "fill-opacity": h ? 1 : l ?? 0.75 })
              );
          }
          (t.color = i), r3(this, "afterColorizeItem", { item: t, visible: e });
        }
        positionItems() {
          this.allItems.forEach(this.positionItem, this),
            this.chart.isResizing || this.positionCheckboxes();
        }
        positionItem(t) {
          let { group: e, x: i = 0, y: s = 0 } = t.legendItem || {},
            o = this.options,
            r = o.symbolPadding,
            a = !o.rtl,
            n = t.checkbox;
          if (e && e.element) {
            let o = {
              translateX: a ? i : this.legendWidth - i - 2 * r - 4,
              translateY: s,
            };
            e[r0(e.translateY) ? "animate" : "attr"](o, void 0, () => {
              r3(this, "afterPositionItem", { item: t });
            });
          }
          n && ((n.x = i), (n.y = s));
        }
        destroyItem(t) {
          let e = t.checkbox,
            i = t.legendItem || {};
          for (let t of ["group", "label", "line", "symbol"])
            i[t] && (i[t] = i[t].destroy());
          e && r1(e), (t.legendItem = void 0);
        }
        destroy() {
          for (let t of this.getAllItems()) this.destroyItem(t);
          for (let t of [
            "clipRect",
            "up",
            "down",
            "pager",
            "nav",
            "box",
            "title",
            "group",
          ])
            this[t] && (this[t] = this[t].destroy());
          this.display = null;
        }
        positionCheckboxes() {
          let t;
          let e = this.group && this.group.alignAttr,
            i = this.clipHeight || this.legendHeight,
            s = this.titleHeight;
          e &&
            ((t = e.translateY),
            this.allItems.forEach(function (o) {
              let r;
              let a = o.checkbox;
              a &&
                ((r = t + s + a.y + (this.scrollOffset || 0) + 3),
                rQ(a, {
                  left: e.translateX + o.checkboxOffset + a.x - 20 + "px",
                  top: r + "px",
                  display:
                    this.proximate || (r > t - 6 && r < t + i - 6)
                      ? ""
                      : "none",
                }));
            }, this));
        }
        renderTitle() {
          let t = this.options,
            e = this.padding,
            i = t.title,
            s,
            o = 0;
          i.text &&
            (this.title ||
              ((this.title = this.chart.renderer
                .label(
                  i.text,
                  e - 3,
                  e - 4,
                  void 0,
                  void 0,
                  void 0,
                  t.useHTML,
                  void 0,
                  "legend-title"
                )
                .attr({ zIndex: 1 })),
              this.chart.styledMode || this.title.css(i.style),
              this.title.add(this.group)),
            i.width || this.title.css({ width: this.maxLegendWidth + "px" }),
            (o = (s = this.title.getBBox()).height),
            (this.offsetWidth = s.width),
            this.contentGroup.attr({ translateY: o })),
            (this.titleHeight = o);
        }
        setText(t) {
          let e = this.options;
          t.legendItem.label.attr({
            text: e.labelFormat
              ? rZ(e.labelFormat, t, this.chart)
              : e.labelFormatter.call(t),
          });
        }
        renderItem(t) {
          let e = (t.legendItem = t.legendItem || {}),
            i = this.chart,
            s = i.renderer,
            o = this.options,
            r = "horizontal" === o.layout,
            a = this.symbolWidth,
            n = o.symbolPadding || 0,
            h = this.itemStyle,
            l = this.itemHiddenStyle,
            d = r ? r9(o.itemDistance, 20) : 0,
            c = !o.rtl,
            p = !t.series,
            g = !p && t.series.drawLegendSymbol ? t.series : t,
            u = g.options,
            f = !!this.createCheckboxForItem && u && u.showCheckbox,
            m = o.useHTML,
            x = t.options.className,
            y = e.label,
            b = a + n + d + (f ? 20 : 0);
          !y &&
            ((e.group = s
              .g("legend-item")
              .addClass(
                "highcharts-" +
                  g.type +
                  "-series highcharts-color-" +
                  t.colorIndex +
                  (x ? " " + x : "") +
                  (p ? " highcharts-series-" + t.index : "")
              )
              .attr({ zIndex: 1 })
              .add(this.scrollGroup)),
            (e.label = y = s.text("", c ? a + n : -n, this.baseline || 0, m)),
            i.styledMode || y.css(r6(t.visible ? h : l)),
            y.attr({ align: c ? "left" : "right", zIndex: 2 }).add(e.group),
            !this.baseline &&
              ((this.fontMetrics = s.fontMetrics(y)),
              (this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop),
              y.attr("y", this.baseline),
              (this.symbolHeight = r9(o.symbolHeight, this.fontMetrics.f)),
              o.squareSymbol &&
                ((this.symbolWidth = r9(
                  o.symbolWidth,
                  Math.max(this.symbolHeight, 16)
                )),
                (b = this.symbolWidth + n + d + (f ? 20 : 0)),
                c && y.attr("x", this.symbolWidth + n))),
            g.drawLegendSymbol(this, t),
            this.setItemEvents && this.setItemEvents(t, y, m)),
            f &&
              !t.checkbox &&
              this.createCheckboxForItem &&
              this.createCheckboxForItem(t),
            this.colorizeItem(t, t.visible),
            (i.styledMode || !h.width) &&
              y.css({
                width:
                  (o.itemWidth || this.widthOption || i.spacingBox.width) -
                  b +
                  "px",
              }),
            this.setText(t);
          let v = y.getBBox(),
            k = (this.fontMetrics && this.fontMetrics.h) || 0;
          (t.itemWidth = t.checkboxOffset =
            o.itemWidth || e.labelWidth || v.width + b),
            (this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth)),
            (this.totalItemWidth += t.itemWidth),
            (this.itemHeight = t.itemHeight =
              Math.round(e.labelHeight || (v.height > 1.5 * k ? v.height : k)));
        }
        layoutItem(t) {
          let e = this.options,
            i = this.padding,
            s = "horizontal" === e.layout,
            o = t.itemHeight,
            r = this.itemMarginBottom,
            a = this.itemMarginTop,
            n = s ? r9(e.itemDistance, 20) : 0,
            h = this.maxLegendWidth,
            l =
              e.alignColumns && this.totalItemWidth > h
                ? this.maxItemWidth
                : t.itemWidth,
            d = t.legendItem || {};
          s &&
            this.itemX - i + l > h &&
            ((this.itemX = i),
            this.lastLineHeight && (this.itemY += a + this.lastLineHeight + r),
            (this.lastLineHeight = 0)),
            (this.lastItemY = a + this.itemY + r),
            (this.lastLineHeight = Math.max(o, this.lastLineHeight)),
            (d.x = this.itemX),
            (d.y = this.itemY),
            s
              ? (this.itemX += l)
              : ((this.itemY += a + o + r), (this.lastLineHeight = o)),
            (this.offsetWidth =
              this.widthOption ||
              Math.max(
                (s ? this.itemX - i - (t.checkbox ? 0 : n) : l) + i,
                this.offsetWidth
              ));
        }
        getAllItems() {
          let t = [];
          return (
            this.chart.series.forEach(function (e) {
              let i = e && e.options;
              e &&
                r9(i.showInLegend, !r0(i.linkedTo) && void 0, !0) &&
                (t = t.concat(
                  (e.legendItem || {}).labels ||
                    ("point" === i.legendType ? e.data : e)
                ));
            }),
            r3(this, "afterGetAllItems", { allItems: t }),
            t
          );
        }
        getAlignment() {
          let t = this.options;
          return this.proximate
            ? t.align.charAt(0) + "tv"
            : t.floating
            ? ""
            : t.align.charAt(0) +
              t.verticalAlign.charAt(0) +
              t.layout.charAt(0);
        }
        adjustMargins(t, e) {
          let i = this.chart,
            s = this.options,
            o = this.getAlignment();
          o &&
            [
              /(lth|ct|rth)/,
              /(rtv|rm|rbv)/,
              /(rbh|cb|lbh)/,
              /(lbv|lm|ltv)/,
            ].forEach(function (r, a) {
              r.test(o) &&
                !r0(t[a]) &&
                (i[r_[a]] = Math.max(
                  i[r_[a]],
                  i.legend[(a + 1) % 2 ? "legendHeight" : "legendWidth"] +
                    [1, -1, -1, 1][a] * s[a % 2 ? "x" : "y"] +
                    r9(s.margin, 12) +
                    e[a] +
                    (i.titleOffset[a] || 0)
                ));
            });
        }
        proximatePositions() {
          let t;
          let e = this.chart,
            i = [],
            s = "left" === this.options.align;
          for (let o of (this.allItems.forEach(function (t) {
            let o,
              r,
              a = s,
              n,
              h;
            t.yAxis &&
              (t.xAxis.options.reversed && (a = !a),
              t.points &&
                (o = r2(
                  a ? t.points : t.points.slice(0).reverse(),
                  function (t) {
                    return r5(t.plotY);
                  }
                )),
              (r =
                this.itemMarginTop +
                t.legendItem.label.getBBox().height +
                this.itemMarginBottom),
              (h = t.yAxis.top - e.plotTop),
              (n = t.visible
                ? (o ? o.plotY : t.yAxis.height) + (h - 0.3 * r)
                : h + t.yAxis.height),
              i.push({ target: n, size: r, item: t }));
          }, this),
          rq(i, e.plotHeight)))
            (t = o.item.legendItem || {}),
              r5(o.pos) && (t.y = e.plotTop - e.spacing[0] + o.pos);
        }
        render() {
          let t = this.chart,
            e = t.renderer,
            i = this.options,
            s = this.padding,
            o = this.getAllItems(),
            r,
            a,
            n,
            h = this.group,
            l,
            d = this.box;
          (this.itemX = s),
            (this.itemY = this.initialItemY),
            (this.offsetWidth = 0),
            (this.lastItemY = 0),
            (this.widthOption = r8(i.width, t.spacingBox.width - s)),
            (l = t.spacingBox.width - 2 * s - i.x),
            ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 &&
              (l /= 2),
            (this.maxLegendWidth = this.widthOption || l),
            h ||
              ((this.group = h =
                e
                  .g("legend")
                  .addClass(i.className || "")
                  .attr({ zIndex: 7 })
                  .add()),
              (this.contentGroup = e.g().attr({ zIndex: 1 }).add(h)),
              (this.scrollGroup = e.g().add(this.contentGroup))),
            this.renderTitle(),
            r7(
              o,
              (t, e) =>
                ((t.options && t.options.legendIndex) || 0) -
                ((e.options && e.options.legendIndex) || 0)
            ),
            i.reversed && o.reverse(),
            (this.allItems = o),
            (this.display = r = !!o.length),
            (this.lastLineHeight = 0),
            (this.maxItemWidth = 0),
            (this.totalItemWidth = 0),
            (this.itemHeight = 0),
            o.forEach(this.renderItem, this),
            o.forEach(this.layoutItem, this),
            (a = (this.widthOption || this.offsetWidth) + s),
            (n = this.lastItemY + this.lastLineHeight + this.titleHeight),
            (n = this.handleOverflow(n) + s),
            d ||
              (this.box = d =
                e
                  .rect()
                  .addClass("highcharts-legend-box")
                  .attr({ r: i.borderRadius })
                  .add(h)),
            t.styledMode ||
              d
                .attr({
                  stroke: i.borderColor,
                  "stroke-width": i.borderWidth || 0,
                  fill: i.backgroundColor || "none",
                })
                .shadow(i.shadow),
            a > 0 &&
              n > 0 &&
              d[d.placed ? "animate" : "attr"](
                d.crisp.call(
                  {},
                  { x: 0, y: 0, width: a, height: n },
                  d.strokeWidth()
                )
              ),
            h[r ? "show" : "hide"](),
            t.styledMode && "none" === h.getStyle("display") && (a = n = 0),
            (this.legendWidth = a),
            (this.legendHeight = n),
            r && this.align(),
            this.proximate || this.positionItems(),
            r3(this, "afterRender");
        }
        align(t = this.chart.spacingBox) {
          let e = this.chart,
            i = this.options,
            s = t.y;
          /(lth|ct|rth)/.test(this.getAlignment()) && e.titleOffset[0] > 0
            ? (s += e.titleOffset[0])
            : /(lbh|cb|rbh)/.test(this.getAlignment()) &&
              e.titleOffset[2] > 0 &&
              (s -= e.titleOffset[2]),
            s !== t.y && (t = r6(t, { y: s })),
            e.hasRendered || (this.group.placed = !1),
            this.group.align(
              r6(i, {
                width: this.legendWidth,
                height: this.legendHeight,
                verticalAlign: this.proximate ? "top" : i.verticalAlign,
              }),
              !0,
              t
            );
        }
        handleOverflow(t) {
          let e = this,
            i = this.chart,
            s = i.renderer,
            o = this.options,
            r = o.y,
            a = "top" === o.verticalAlign,
            n = this.padding,
            h = o.maxHeight,
            l = o.navigation,
            d = r9(l.animation, !0),
            c = l.arrowSize || 12,
            p = this.pages,
            g = this.allItems,
            u = function (t) {
              "number" == typeof t
                ? k.attr({ height: t })
                : k && ((e.clipRect = k.destroy()), e.contentGroup.clip()),
                e.contentGroup.div &&
                  (e.contentGroup.div.style.clip = t
                    ? "rect(" + n + "px,9999px," + (n + t) + "px,0)"
                    : "auto");
            },
            f = function (t) {
              return (
                (e[t] = s
                  .circle(0, 0, 1.3 * c)
                  .translate(c / 2, c / 2)
                  .add(v)),
                i.styledMode || e[t].attr("fill", "rgba(0,0,0,0.0001)"),
                e[t]
              );
            },
            m,
            x,
            y,
            b = i.spacingBox.height + (a ? -r : r) - n,
            v = this.nav,
            k = this.clipRect;
          return (
            "horizontal" !== o.layout ||
              "middle" === o.verticalAlign ||
              o.floating ||
              (b /= 2),
            h && (b = Math.min(b, h)),
            (p.length = 0),
            t && b > 0 && t > b && !1 !== l.enabled
              ? ((this.clipHeight = m =
                  Math.max(b - 20 - this.titleHeight - n, 0)),
                (this.currentPage = r9(this.currentPage, 1)),
                (this.fullHeight = t),
                g.forEach((t, e) => {
                  let i = (y = t.legendItem || {}).y || 0,
                    s = Math.round(y.label.getBBox().height),
                    o = p.length;
                  (!o || (i - p[o - 1] > m && (x || i) !== p[o - 1])) &&
                    (p.push(x || i), o++),
                    (y.pageIx = o - 1),
                    x && ((g[e - 1].legendItem || {}).pageIx = o - 1),
                    e === g.length - 1 &&
                      i + s - p[o - 1] > m &&
                      i > p[o - 1] &&
                      (p.push(i), (y.pageIx = o)),
                    i !== x && (x = i);
                }),
                k ||
                  ((k = e.clipRect = s.clipRect(0, n - 2, 9999, 0)),
                  e.contentGroup.clip(k)),
                u(m),
                v ||
                  ((this.nav = v = s.g().attr({ zIndex: 1 }).add(this.group)),
                  (this.up = s.symbol("triangle", 0, 0, c, c).add(v)),
                  f("upTracker").on("click", function () {
                    e.scroll(-1, d);
                  }),
                  (this.pager = s
                    .text("", 15, 10)
                    .addClass("highcharts-legend-navigation")),
                  !i.styledMode && l.style && this.pager.css(l.style),
                  this.pager.add(v),
                  (this.down = s.symbol("triangle-down", 0, 0, c, c).add(v)),
                  f("downTracker").on("click", function () {
                    e.scroll(1, d);
                  })),
                e.scroll(0),
                (t = b))
              : v &&
                (u(),
                (this.nav = v.destroy()),
                this.scrollGroup.attr({ translateY: 1 }),
                (this.clipHeight = 0)),
            t
          );
        }
        scroll(t, e) {
          let i = this.chart,
            s = this.pages,
            o = s.length,
            r = this.clipHeight,
            a = this.options.navigation,
            n = this.pager,
            h = this.padding,
            l = this.currentPage + t;
          l > o && (l = o),
            l > 0 &&
              (void 0 !== e && rU(e, i),
              this.nav.attr({
                translateX: h,
                translateY: r + this.padding + 7 + this.titleHeight,
                visibility: "inherit",
              }),
              [this.up, this.upTracker].forEach(function (t) {
                t.attr({
                  class:
                    1 === l
                      ? "highcharts-legend-nav-inactive"
                      : "highcharts-legend-nav-active",
                });
              }),
              n.attr({ text: l + "/" + o }),
              [this.down, this.downTracker].forEach(function (t) {
                t.attr({
                  x: 18 + this.pager.getBBox().width,
                  class:
                    l === o
                      ? "highcharts-legend-nav-inactive"
                      : "highcharts-legend-nav-active",
                });
              }, this),
              i.styledMode ||
                (this.up.attr({
                  fill: 1 === l ? a.inactiveColor : a.activeColor,
                }),
                this.upTracker.css({ cursor: 1 === l ? "default" : "pointer" }),
                this.down.attr({
                  fill: l === o ? a.inactiveColor : a.activeColor,
                }),
                this.downTracker.css({
                  cursor: l === o ? "default" : "pointer",
                })),
              (this.scrollOffset = -s[l - 1] + this.initialItemY),
              this.scrollGroup.animate({ translateY: this.scrollOffset }),
              (this.currentPage = l),
              this.positionCheckboxes(),
              at(() => {
                r3(this, "afterScroll", { currentPage: l });
              }, rj(r9(e, i.renderer.globalAnimation, !0)).duration));
        }
        setItemEvents(t, e, i) {
          let s = this,
            o = t.legendItem || {},
            r = s.chart.renderer.boxWrapper,
            a = t instanceof oF,
            n = t instanceof rY,
            h = "highcharts-legend-" + (a ? "point" : "series") + "-active",
            l = s.chart.styledMode,
            d = i ? [e, o.symbol] : [o.group],
            c = (e) => {
              s.allItems.forEach((i) => {
                t !== i &&
                  [i].concat(i.linkedSeries || []).forEach((t) => {
                    t.setState(e, !a);
                  });
              });
            };
          for (let i of d)
            i &&
              i
                .on("mouseover", function () {
                  t.visible && c("inactive"),
                    t.setState("hover"),
                    t.visible && r.addClass(h),
                    l || e.css(s.options.itemHoverStyle);
                })
                .on("mouseout", function () {
                  s.chart.styledMode ||
                    e.css(r6(t.visible ? s.itemStyle : s.itemHiddenStyle)),
                    c(""),
                    r.removeClass(h),
                    t.setState();
                })
                .on("click", function (e) {
                  let i = function () {
                    t.setVisible && t.setVisible(),
                      c(t.visible ? "inactive" : "");
                  };
                  r.removeClass(h),
                    r3(s, "itemClick", { browserEvent: e, legendItem: t }, i),
                    a
                      ? t.firePointEvent("legendItemClick", { browserEvent: e })
                      : n && r3(t, "legendItemClick", { browserEvent: e });
                });
        }
        createCheckboxForItem(t) {
          (t.checkbox = rJ(
            "input",
            {
              type: "checkbox",
              className: "highcharts-legend-checkbox",
              checked: t.selected,
              defaultChecked: t.selected,
            },
            this.options.itemCheckboxStyle,
            this.chart.container
          )),
            rK(t.checkbox, "click", function (e) {
              let i = e.target;
              r3(
                t.series || t,
                "checkboxClick",
                { checked: i.checked, item: t },
                function () {
                  t.select();
                }
              );
            });
        }
      }
      !(function (t) {
        t.compose = function (e) {
          r4(rV, "Core.Legend") &&
            rK(e, "beforeMargins", function () {
              this.legend = new t(this, this.options.legend);
            });
        };
      })(ae || (ae = {}));
      let ai = ae,
        { animate: as, animObject: ao, setAnimation: ar } = tR,
        { defaultOptions: aa } = tm,
        { numberFormat: an } = eo,
        { registerEventOptions: ah } = i3,
        { charts: al, doc: ad, marginNames: ac, svg: ap, win: ag } = k,
        { seriesTypes: au } = rd,
        {
          addEvent: af,
          attr: am,
          createElement: ax,
          css: ay,
          defined: ab,
          diffObjects: av,
          discardElement: ak,
          erase: aw,
          error: aM,
          extend: aS,
          find: aT,
          fireEvent: aC,
          getAlignFactor: aA,
          getStyle: aP,
          isArray: aL,
          isNumber: aO,
          isObject: aE,
          isString: aI,
          merge: aD,
          objectEach: aB,
          pick: aN,
          pInt: az,
          relativeLength: aR,
          removeEvent: aW,
          splat: aH,
          syncTimeout: aX,
          uniqueKey: aF,
        } = $;
      class aG {
        static chart(t, e, i) {
          return new aG(t, e, i);
        }
        constructor(t, e, i) {
          this.sharedClips = {};
          let s = [...arguments];
          (aI(t) || t.nodeName) && (this.renderTo = s.shift()),
            this.init(s[0], s[1]);
        }
        setZoomOptions() {
          let t = this.options.chart,
            e = t.zooming;
          this.zooming = {
            ...e,
            type: aN(t.zoomType, e.type),
            key: aN(t.zoomKey, e.key),
            pinchType: aN(t.pinchType, e.pinchType),
            singleTouch: aN(t.zoomBySingleTouch, e.singleTouch, !1),
            resetButton: aD(e.resetButton, t.resetZoomButton),
          };
        }
        init(t, e) {
          aC(this, "init", { args: arguments }, function () {
            let i = aD(aa, t),
              s = i.chart,
              o = this.renderTo || s.renderTo;
            (this.userOptions = aS({}, t)),
              (this.renderTo = aI(o) ? ad.getElementById(o) : o) ||
                aM(13, !0, this),
              (this.margin = []),
              (this.spacing = []),
              (this.labelCollectors = []),
              (this.callback = e),
              (this.isResizing = 0),
              (this.options = i),
              (this.axes = []),
              (this.series = []),
              (this.locale =
                i.lang.locale ?? this.renderTo.closest("[lang]")?.lang),
              (this.time = new td(aS(i.time || {}, { locale: this.locale }))),
              (i.time = this.time.options),
              (this.numberFormatter = (s.numberFormatter || an).bind(this)),
              (this.styledMode = s.styledMode),
              (this.hasCartesianSeries = s.showAxes),
              (this.index = al.length),
              al.push(this),
              k.chartCount++,
              ah(this, s),
              (this.xAxis = []),
              (this.yAxis = []),
              (this.pointCount = this.colorCounter = this.symbolCounter = 0),
              this.setZoomOptions(),
              aC(this, "afterInit"),
              this.firstRender();
          });
        }
        initSeries(t) {
          let e = this.options.chart,
            i = t.type || e.type,
            s = au[i];
          s || aM(17, !0, this, { missingModuleFor: i });
          let o = new s();
          return "function" == typeof o.init && o.init(this, t), o;
        }
        setSortedData() {
          this.getSeriesOrderByLinks().forEach(function (t) {
            t.points ||
              t.data ||
              !t.enabledDataSorting ||
              t.setData(t.options.data, !1);
          });
        }
        getSeriesOrderByLinks() {
          return this.series.concat().sort(function (t, e) {
            return t.linkedSeries.length || e.linkedSeries.length
              ? e.linkedSeries.length - t.linkedSeries.length
              : 0;
          });
        }
        orderItems(t, e = 0) {
          let i = this[t],
            s = (this.options[t] = aH(this.options[t]).slice()),
            o = (this.userOptions[t] = this.userOptions[t]
              ? aH(this.userOptions[t]).slice()
              : []);
          if ((this.hasRendered && (s.splice(e), o.splice(e)), i))
            for (let t = e, r = i.length; t < r; ++t) {
              let e = i[t];
              e &&
                ((e.index = t),
                e instanceof rY && (e.name = e.getName()),
                e.options.isInternal ||
                  ((s[t] = e.options), (o[t] = e.userOptions)));
            }
        }
        isInsidePlot(t, e, i = {}) {
          let {
              inverted: s,
              plotBox: o,
              plotLeft: r,
              plotTop: a,
              scrollablePlotBox: n,
            } = this,
            { scrollLeft: h = 0, scrollTop: l = 0 } =
              (i.visiblePlotOnly &&
                this.scrollablePlotArea?.scrollingContainer) ||
              {},
            d = i.series,
            c = (i.visiblePlotOnly && n) || o,
            p = i.inverted ? e : t,
            g = i.inverted ? t : e,
            u = { x: p, y: g, isInsidePlot: !0, options: i };
          if (!i.ignoreX) {
            let t = (d && (s && !this.polar ? d.yAxis : d.xAxis)) || {
                pos: r,
                len: 1 / 0,
              },
              e = i.paneCoordinates ? t.pos + p : r + p;
            (e >= Math.max(h + r, t.pos) &&
              e <= Math.min(h + r + c.width, t.pos + t.len)) ||
              (u.isInsidePlot = !1);
          }
          if (!i.ignoreY && u.isInsidePlot) {
            let t = (!s && i.axis && !i.axis.isXAxis && i.axis) ||
                (d && (s ? d.xAxis : d.yAxis)) || { pos: a, len: 1 / 0 },
              e = i.paneCoordinates ? t.pos + g : a + g;
            (e >= Math.max(l + a, t.pos) &&
              e <= Math.min(l + a + c.height, t.pos + t.len)) ||
              (u.isInsidePlot = !1);
          }
          return aC(this, "afterIsInsidePlot", u), u.isInsidePlot;
        }
        redraw(t) {
          aC(this, "beforeRedraw");
          let e = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
            i = this.series,
            s = this.pointer,
            o = this.legend,
            r = this.userOptions.legend,
            a = this.renderer,
            n = a.isHidden(),
            h = [],
            l,
            d,
            c,
            p = this.isDirtyBox,
            g = this.isDirtyLegend,
            u;
          for (
            a.rootFontSize = a.boxWrapper.getStyle("font-size"),
              this.setResponsive && this.setResponsive(!1),
              ar(!!this.hasRendered && t, this),
              n && this.temporaryDisplay(),
              this.layOutTitles(!1),
              c = i.length;
            c--;

          )
            if (
              ((u = i[c]).options.stacking || u.options.centerInCategory) &&
              ((d = !0), u.isDirty)
            ) {
              l = !0;
              break;
            }
          if (l)
            for (c = i.length; c--; )
              (u = i[c]).options.stacking && (u.isDirty = !0);
          i.forEach(function (t) {
            t.isDirty &&
              ("point" === t.options.legendType
                ? ("function" == typeof t.updateTotals && t.updateTotals(),
                  (g = !0))
                : r && (r.labelFormatter || r.labelFormat) && (g = !0)),
              t.isDirtyData && aC(t, "updatedData");
          }),
            g &&
              o &&
              o.options.enabled &&
              (o.render(), (this.isDirtyLegend = !1)),
            d && this.getStacks(),
            e.forEach(function (t) {
              t.updateNames(), t.setScale();
            }),
            this.getMargins(),
            e.forEach(function (t) {
              t.isDirty && (p = !0);
            }),
            e.forEach(function (t) {
              let e = t.min + "," + t.max;
              t.extKey !== e &&
                ((t.extKey = e),
                h.push(function () {
                  aC(t, "afterSetExtremes", aS(t.eventArgs, t.getExtremes())),
                    delete t.eventArgs;
                })),
                (p || d) && t.redraw();
            }),
            p && this.drawChartBox(),
            aC(this, "predraw"),
            i.forEach(function (t) {
              (p || t.isDirty) && t.visible && t.redraw(), (t.isDirtyData = !1);
            }),
            s && s.reset(!0),
            a.draw(),
            aC(this, "redraw"),
            aC(this, "render"),
            n && this.temporaryDisplay(!0),
            h.forEach(function (t) {
              t.call();
            });
        }
        get(t) {
          let e = this.series;
          function i(e) {
            return e.id === t || (e.options && e.options.id === t);
          }
          let s = aT(this.axes, i) || aT(this.series, i);
          for (let t = 0; !s && t < e.length; t++) s = aT(e[t].points || [], i);
          return s;
        }
        createAxes() {
          let t = this.userOptions;
          for (let e of (aC(this, "createAxes"), ["xAxis", "yAxis"]))
            for (let i of (t[e] = aH(t[e] || {}))) new sR(this, i, e);
          aC(this, "afterCreateAxes");
        }
        getSelectedPoints() {
          return this.series.reduce(
            (t, e) => (
              e.getPointsCollection().forEach((e) => {
                aN(e.selectedStaging, e.selected) && t.push(e);
              }),
              t
            ),
            []
          );
        }
        getSelectedSeries() {
          return this.series.filter((t) => t.selected);
        }
        setTitle(t, e, i) {
          this.applyDescription("title", t),
            this.applyDescription("subtitle", e),
            this.applyDescription("caption", void 0),
            this.layOutTitles(i);
        }
        applyDescription(t, e) {
          let i = this,
            s = (this.options[t] = aD(this.options[t], e)),
            o = this[t];
          o && e && (this[t] = o = o.destroy()),
            s &&
              !o &&
              (((o = this.renderer
                .text(s.text, 0, 0, s.useHTML)
                .attr({
                  align: s.align,
                  class: "highcharts-" + t,
                  zIndex: s.zIndex || 4,
                })
                .css({ textOverflow: "ellipsis", whiteSpace: "nowrap" })
                .add()).update = function (e, s) {
                i.applyDescription(t, e), i.layOutTitles(s);
              }),
              this.styledMode ||
                o.css(
                  aS(
                    "title" === t
                      ? { fontSize: this.options.isStock ? "1em" : "1.2em" }
                      : {},
                    s.style
                  )
                ),
              (o.textPxLength = o.getBBox().width),
              o.css({ whiteSpace: s.style?.whiteSpace }),
              (this[t] = o));
        }
        layOutTitles(t = !0) {
          let e = [0, 0, 0],
            { options: i, renderer: s, spacingBox: o } = this;
          ["title", "subtitle", "caption"].forEach((t) => {
            let i = this[t],
              r = this.options[t],
              a = aD(o),
              n = i?.textPxLength || 0;
            if (i && r) {
              aC(this, "layOutTitle", { alignTo: a, key: t, textPxLength: n });
              let o = s.fontMetrics(i),
                h = o.b,
                l = o.h,
                d = r.verticalAlign || "top",
                c = "top" === d,
                p = (c && r.minScale) || 1,
                g = "title" === t ? (c ? -3 : 0) : c ? e[0] + 2 : 0,
                u = Math.min(a.width / n, 1),
                f = Math.max(p, u),
                m = aD(
                  { y: "bottom" === d ? h : g + h },
                  {
                    align:
                      "title" === t
                        ? u < p
                          ? "left"
                          : "center"
                        : this.title?.alignValue,
                  },
                  r
                ),
                x = r.width || (u > p ? this.chartWidth : a.width) / f;
              i.alignValue !== m.align && (i.placed = !1);
              let y = Math.round(
                i.css({ width: `${x}px` }).getBBox(r.useHTML).height
              );
              if (
                ((m.height = y),
                i.align(m, !1, a).attr({
                  align: m.align,
                  scaleX: f,
                  scaleY: f,
                  "transform-origin": `${a.x + n * f * aA(m.align)} ${l}`,
                }),
                !r.floating)
              ) {
                let t = y * (y < 1.2 * l ? 1 : f);
                "top" === d
                  ? (e[0] = Math.ceil(e[0] + t))
                  : "bottom" === d && (e[2] = Math.ceil(e[2] + t));
              }
            }
          }, this),
            e[0] &&
              "top" === (i.title?.verticalAlign || "top") &&
              (e[0] += i.title?.margin || 0),
            e[2] &&
              i.caption?.verticalAlign === "bottom" &&
              (e[2] += i.caption?.margin || 0);
          let r =
            !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
          (this.titleOffset = e),
            aC(this, "afterLayOutTitles"),
            !this.isDirtyBox &&
              r &&
              ((this.isDirtyBox = this.isDirtyLegend = r),
              this.hasRendered && t && this.isDirtyBox && this.redraw());
        }
        getContainerBox() {
          let t = [].map.call(this.renderTo.children, (t) => {
              if (t !== this.container) {
                let e = t.style.display;
                return (t.style.display = "none"), [t, e];
              }
            }),
            e = {
              width: aP(this.renderTo, "width", !0) || 0,
              height: aP(this.renderTo, "height", !0) || 0,
            };
          return (
            t.filter(Boolean).forEach(([t, e]) => {
              t.style.display = e;
            }),
            e
          );
        }
        getChartSize() {
          let t = this.options.chart,
            e = t.width,
            i = t.height,
            s = this.getContainerBox(),
            o =
              s.height <= 1 ||
              (!this.renderTo.parentElement?.style.height &&
                "100%" === this.renderTo.style.height);
          (this.chartWidth = Math.max(0, e || s.width || 600)),
            (this.chartHeight = Math.max(
              0,
              aR(i, this.chartWidth) || (o ? 400 : s.height)
            )),
            (this.containerBox = s);
        }
        temporaryDisplay(t) {
          let e = this.renderTo,
            i;
          if (t)
            for (; e && e.style; )
              e.hcOrigStyle && (ay(e, e.hcOrigStyle), delete e.hcOrigStyle),
                e.hcOrigDetached &&
                  (ad.body.removeChild(e), (e.hcOrigDetached = !1)),
                (e = e.parentNode);
          else
            for (
              ;
              e &&
              e.style &&
              (ad.body.contains(e) ||
                e.parentNode ||
                ((e.hcOrigDetached = !0), ad.body.appendChild(e)),
              ("none" === aP(e, "display", !1) || e.hcOricDetached) &&
                ((e.hcOrigStyle = {
                  display: e.style.display,
                  height: e.style.height,
                  overflow: e.style.overflow,
                }),
                (i = { display: "block", overflow: "hidden" }),
                e !== this.renderTo && (i.height = 0),
                ay(e, i),
                e.offsetWidth ||
                  e.style.setProperty("display", "block", "important")),
              (e = e.parentNode) !== ad.body);

            );
        }
        setClassName(t) {
          this.container.className = "highcharts-container " + (t || "");
        }
        getContainer() {
          let t;
          let e = this.options,
            i = e.chart,
            s = "data-highcharts-chart",
            o = aF(),
            r = this.renderTo,
            a = az(am(r, s));
          aO(a) && al[a] && al[a].hasRendered && al[a].destroy(),
            am(r, s, this.index),
            (r.innerHTML = tK.emptyHTML),
            i.skipClone || r.offsetWidth || this.temporaryDisplay(),
            this.getChartSize();
          let n = this.chartHeight,
            h = this.chartWidth;
          ay(r, { overflow: "hidden" }),
            this.styledMode ||
              (t = aS(
                {
                  position: "relative",
                  overflow: "hidden",
                  width: h + "px",
                  height: n + "px",
                  textAlign: "left",
                  lineHeight: "normal",
                  zIndex: 0,
                  "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                  userSelect: "none",
                  "touch-action": "manipulation",
                  outline: "none",
                  padding: "0px",
                },
                i.style || {}
              ));
          let l = ax("div", { id: o }, t, r);
          (this.container = l),
            this.getChartSize(),
            h === this.chartWidth ||
              ((h = this.chartWidth),
              this.styledMode ||
                ay(l, { width: aN(i.style?.width, h + "px") })),
            (this.containerBox = this.getContainerBox()),
            (this._cursor = l.style.cursor);
          let d = i.renderer || !ap ? er.getRendererType(i.renderer) : iR;
          if (
            ((this.renderer = new d(
              l,
              h,
              n,
              void 0,
              i.forExport,
              e.exporting && e.exporting.allowHTML,
              this.styledMode
            )),
            ar(void 0, this),
            this.setClassName(i.className),
            this.styledMode)
          )
            for (let t in e.defs) this.renderer.definition(e.defs[t]);
          else this.renderer.setStyle(i.style);
          (this.renderer.chartIndex = this.index),
            aC(this, "afterGetContainer");
        }
        getMargins(t) {
          let { spacing: e, margin: i, titleOffset: s } = this;
          this.resetMargins(),
            s[0] &&
              !ab(i[0]) &&
              (this.plotTop = Math.max(this.plotTop, s[0] + e[0])),
            s[2] &&
              !ab(i[2]) &&
              (this.marginBottom = Math.max(this.marginBottom, s[2] + e[2])),
            this.legend &&
              this.legend.display &&
              this.legend.adjustMargins(i, e),
            aC(this, "getMargins"),
            t || this.getAxisMargins();
        }
        getAxisMargins() {
          let t = this,
            e = (t.axisOffset = [0, 0, 0, 0]),
            i = t.colorAxis,
            s = t.margin,
            o = function (t) {
              t.forEach(function (t) {
                t.visible && t.getOffset();
              });
            };
          t.hasCartesianSeries ? o(t.axes) : i && i.length && o(i),
            ac.forEach(function (i, o) {
              ab(s[o]) || (t[i] += e[o]);
            }),
            t.setChartSize();
        }
        getOptions() {
          return av(this.userOptions, aa);
        }
        reflow(t) {
          let e = this,
            i = e.containerBox,
            s = e.getContainerBox();
          delete e.pointer?.chartPosition,
            !e.isPrinting &&
              !e.isResizing &&
              i &&
              s.width &&
              ((s.width !== i.width || s.height !== i.height) &&
                ($.clearTimeout(e.reflowTimeout),
                (e.reflowTimeout = aX(
                  function () {
                    e.container && e.setSize(void 0, void 0, !1);
                  },
                  t ? 100 : 0
                ))),
              (e.containerBox = s));
        }
        setReflow() {
          let t = this,
            e = (e) => {
              t.options?.chart.reflow && t.hasLoaded && t.reflow(e);
            };
          if ("function" == typeof ResizeObserver)
            new ResizeObserver(e).observe(t.renderTo);
          else {
            let t = af(ag, "resize", e);
            af(this, "destroy", t);
          }
        }
        setSize(t, e, i) {
          let s = this,
            o = s.renderer;
          (s.isResizing += 1), ar(i, s);
          let r = o.globalAnimation;
          (s.oldChartHeight = s.chartHeight),
            (s.oldChartWidth = s.chartWidth),
            void 0 !== t && (s.options.chart.width = t),
            void 0 !== e && (s.options.chart.height = e),
            s.getChartSize();
          let {
            chartWidth: a,
            chartHeight: n,
            scrollablePixelsX: h = 0,
            scrollablePixelsY: l = 0,
          } = s;
          (s.isDirtyBox || a !== s.oldChartWidth || n !== s.oldChartHeight) &&
            (s.styledMode ||
              (r ? as : ay)(
                s.container,
                { width: `${a + h}px`, height: `${n + l}px` },
                r
              ),
            s.setChartSize(!0),
            o.setSize(a, n, r),
            s.axes.forEach(function (t) {
              (t.isDirty = !0), t.setScale();
            }),
            (s.isDirtyLegend = !0),
            (s.isDirtyBox = !0),
            s.layOutTitles(),
            s.getMargins(),
            s.redraw(r),
            (s.oldChartHeight = void 0),
            aC(s, "resize"),
            setTimeout(() => {
              s && aC(s, "endResize");
            }, ao(r).duration)),
            (s.isResizing -= 1);
        }
        setChartSize(t) {
          let e, i, s, o;
          let {
              chartHeight: r,
              chartWidth: a,
              inverted: n,
              spacing: h,
              renderer: l,
            } = this,
            d = this.clipOffset,
            c = Math[n ? "floor" : "round"];
          (this.plotLeft = e = Math.round(this.plotLeft)),
            (this.plotTop = i = Math.round(this.plotTop)),
            (this.plotWidth = s =
              Math.max(0, Math.round(a - e - this.marginRight))),
            (this.plotHeight = o =
              Math.max(0, Math.round(r - i - this.marginBottom))),
            (this.plotSizeX = n ? o : s),
            (this.plotSizeY = n ? s : o),
            (this.spacingBox = l.spacingBox =
              {
                x: h[3],
                y: h[0],
                width: a - h[3] - h[1],
                height: r - h[0] - h[2],
              }),
            (this.plotBox = l.plotBox = { x: e, y: i, width: s, height: o }),
            d &&
              (this.clipBox = {
                x: c(d[3]),
                y: c(d[0]),
                width: c(this.plotSizeX - d[1] - d[3]),
                height: c(this.plotSizeY - d[0] - d[2]),
              }),
            t ||
              (this.axes.forEach(function (t) {
                t.setAxisSize(), t.setAxisTranslation();
              }),
              l.alignElements()),
            aC(this, "afterSetChartSize", { skipAxes: t });
        }
        resetMargins() {
          aC(this, "resetMargins");
          let t = this,
            e = t.options.chart,
            i = e.plotBorderWidth || 0,
            s = i / 2;
          ["margin", "spacing"].forEach(function (i) {
            let s = e[i],
              o = aE(s) ? s : [s, s, s, s];
            ["Top", "Right", "Bottom", "Left"].forEach(function (s, r) {
              t[i][r] = aN(e[i + s], o[r]);
            });
          }),
            ac.forEach(function (e, i) {
              t[e] = aN(t.margin[i], t.spacing[i]);
            }),
            (t.axisOffset = [0, 0, 0, 0]),
            (t.clipOffset = [s, s, s, s]),
            (t.plotBorderWidth = i);
        }
        drawChartBox() {
          let t = this.options.chart,
            e = this.renderer,
            i = this.chartWidth,
            s = this.chartHeight,
            o = this.styledMode,
            r = this.plotBGImage,
            a = t.backgroundColor,
            n = t.plotBackgroundColor,
            h = t.plotBackgroundImage,
            l = this.plotLeft,
            d = this.plotTop,
            c = this.plotWidth,
            p = this.plotHeight,
            g = this.plotBox,
            u = this.clipRect,
            f = this.clipBox,
            m = this.chartBackground,
            x = this.plotBackground,
            y = this.plotBorder,
            b,
            v,
            k,
            w = "animate";
          m ||
            ((this.chartBackground = m =
              e.rect().addClass("highcharts-background").add()),
            (w = "attr")),
            o
              ? (b = v = m.strokeWidth())
              : ((v = (b = t.borderWidth || 0) + (t.shadow ? 8 : 0)),
                (k = { fill: a || "none" }),
                (b || m["stroke-width"]) &&
                  ((k.stroke = t.borderColor), (k["stroke-width"] = b)),
                m.attr(k).shadow(t.shadow)),
            m[w]({
              x: v / 2,
              y: v / 2,
              width: i - v - (b % 2),
              height: s - v - (b % 2),
              r: t.borderRadius,
            }),
            (w = "animate"),
            x ||
              ((w = "attr"),
              (this.plotBackground = x =
                e.rect().addClass("highcharts-plot-background").add())),
            x[w](g),
            !o &&
              (x.attr({ fill: n || "none" }).shadow(t.plotShadow),
              h &&
                (r
                  ? (h !== r.attr("href") && r.attr("href", h), r.animate(g))
                  : (this.plotBGImage = e.image(h, l, d, c, p).add()))),
            u
              ? u.animate({ width: f.width, height: f.height })
              : (this.clipRect = e.clipRect(f)),
            (w = "animate"),
            y ||
              ((w = "attr"),
              (this.plotBorder = y =
                e
                  .rect()
                  .addClass("highcharts-plot-border")
                  .attr({ zIndex: 1 })
                  .add())),
            o ||
              y.attr({
                stroke: t.plotBorderColor,
                "stroke-width": t.plotBorderWidth || 0,
                fill: "none",
              }),
            y[w](
              y.crisp({ x: l, y: d, width: c, height: p }, -y.strokeWidth())
            ),
            (this.isDirtyBox = !1),
            aC(this, "afterDrawChartBox");
        }
        propFromSeries() {
          let t, e, i;
          let s = this,
            o = s.options.chart,
            r = s.options.series;
          ["inverted", "angular", "polar"].forEach(function (a) {
            for (
              e = au[o.type],
                i = o[a] || (e && e.prototype[a]),
                t = r && r.length;
              !i && t--;

            )
              (e = au[r[t].type]) && e.prototype[a] && (i = !0);
            s[a] = i;
          });
        }
        linkSeries(t) {
          let e = this,
            i = e.series;
          i.forEach(function (t) {
            t.linkedSeries.length = 0;
          }),
            i.forEach(function (t) {
              let { linkedTo: i } = t.options;
              if (aI(i)) {
                let s;
                (s = ":previous" === i ? e.series[t.index - 1] : e.get(i)) &&
                  s.linkedParent !== t &&
                  (s.linkedSeries.push(t),
                  (t.linkedParent = s),
                  s.enabledDataSorting && t.setDataSortingOptions(),
                  (t.visible = aN(
                    t.options.visible,
                    s.options.visible,
                    t.visible
                  )));
              }
            }),
            aC(this, "afterLinkSeries", { isUpdating: t });
        }
        renderSeries() {
          this.series.forEach(function (t) {
            t.translate(), t.render();
          });
        }
        render() {
          let t = this.axes,
            e = this.colorAxis,
            i = this.renderer,
            s = this.options.chart.axisLayoutRuns || 2,
            o = (t) => {
              t.forEach((t) => {
                t.visible && t.render();
              });
            },
            r = 0,
            a = !0,
            n,
            h = 0;
          for (let e of (this.setTitle(),
          aC(this, "beforeMargins"),
          this.getStacks?.(),
          this.getMargins(!0),
          this.setChartSize(),
          t)) {
            let { options: t } = e,
              { labels: i } = t;
            if (
              this.hasCartesianSeries &&
              e.horiz &&
              e.visible &&
              i.enabled &&
              e.series.length &&
              "colorAxis" !== e.coll &&
              !this.polar
            ) {
              (r = t.tickLength), e.createGroups();
              let s = new sa(e, 0, "", !0),
                o = s.createLabel("x", i);
              if (
                (s.destroy(),
                o &&
                  aN(i.reserveSpace, !aO(t.crossing)) &&
                  (r =
                    o.getBBox().height +
                    i.distance +
                    Math.max(t.offset || 0, 0)),
                r)
              ) {
                o?.destroy();
                break;
              }
            }
          }
          for (
            this.plotHeight = Math.max(this.plotHeight - r, 0);
            (a || n || s > 1) && h < s;

          ) {
            let e = this.plotWidth,
              i = this.plotHeight;
            for (let e of t)
              0 === h
                ? e.setScale()
                : ((e.horiz && a) || (!e.horiz && n)) && e.setTickInterval(!0);
            0 === h ? this.getAxisMargins() : this.getMargins(),
              (a = e / this.plotWidth > (h ? 1 : 1.1)),
              (n = i / this.plotHeight > (h ? 1 : 1.05)),
              h++;
          }
          this.drawChartBox(),
            this.hasCartesianSeries ? o(t) : e && e.length && o(e),
            this.seriesGroup ||
              (this.seriesGroup = i
                .g("series-group")
                .attr({ zIndex: 3 })
                .shadow(this.options.chart.seriesGroupShadow)
                .add()),
            this.renderSeries(),
            this.addCredits(),
            this.setResponsive && this.setResponsive(),
            (this.hasRendered = !0);
        }
        addCredits(t) {
          let e = this,
            i = aD(!0, this.options.credits, t);
          i.enabled &&
            !this.credits &&
            ((this.credits = this.renderer
              .text(i.text + (this.mapCredits || ""), 0, 0)
              .addClass("highcharts-credits")
              .on("click", function () {
                i.href && (ag.location.href = i.href);
              })
              .attr({ align: i.position.align, zIndex: 8 })),
            e.styledMode || this.credits.css(i.style),
            this.credits.add().align(i.position),
            (this.credits.update = function (t) {
              (e.credits = e.credits.destroy()), e.addCredits(t);
            }));
        }
        destroy() {
          let t;
          let e = this,
            i = e.axes,
            s = e.series,
            o = e.container,
            r = o && o.parentNode;
          for (
            aC(e, "destroy"),
              e.renderer.forExport ? aw(al, e) : (al[e.index] = void 0),
              k.chartCount--,
              e.renderTo.removeAttribute("data-highcharts-chart"),
              aW(e),
              t = i.length;
            t--;

          )
            i[t] = i[t].destroy();
          for (
            this.scroller && this.scroller.destroy && this.scroller.destroy(),
              t = s.length;
            t--;

          )
            s[t] = s[t].destroy();
          [
            "title",
            "subtitle",
            "chartBackground",
            "plotBackground",
            "plotBGImage",
            "plotBorder",
            "seriesGroup",
            "clipRect",
            "credits",
            "pointer",
            "rangeSelector",
            "legend",
            "resetZoomButton",
            "tooltip",
            "renderer",
          ].forEach(function (t) {
            let i = e[t];
            i && i.destroy && (e[t] = i.destroy());
          }),
            o && ((o.innerHTML = tK.emptyHTML), aW(o), r && ak(o)),
            aB(e, function (t, i) {
              delete e[i];
            });
        }
        firstRender() {
          let t = this,
            e = t.options;
          t.getContainer(),
            t.resetMargins(),
            t.setChartSize(),
            t.propFromSeries(),
            t.createAxes();
          let i = aL(e.series) ? e.series : [];
          (e.series = []),
            i.forEach(function (e) {
              t.initSeries(e);
            }),
            t.linkSeries(),
            t.setSortedData(),
            aC(t, "beforeRender"),
            t.render(),
            t.pointer?.getChartPosition(),
            t.renderer.imgCount || t.hasLoaded || t.onload(),
            t.temporaryDisplay(!0);
        }
        onload() {
          this.callbacks.concat([this.callback]).forEach(function (t) {
            t && void 0 !== this.index && t.apply(this, [this]);
          }, this),
            aC(this, "load"),
            aC(this, "render"),
            ab(this.index) && this.setReflow(),
            this.warnIfA11yModuleNotLoaded(),
            (this.hasLoaded = !0);
        }
        warnIfA11yModuleNotLoaded() {
          let { options: t, title: e } = this;
          !t ||
            this.accessibility ||
            (this.renderer.boxWrapper.attr({
              role: "img",
              "aria-label": ((e && e.element.textContent) || "").replace(
                /</g,
                "&lt;"
              ),
            }),
            (t.accessibility && !1 === t.accessibility.enabled) ||
              aM(
                'Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
                !1,
                this
              ));
        }
        addSeries(t, e, i) {
          let s;
          let o = this;
          return (
            t &&
              ((e = aN(e, !0)),
              aC(o, "addSeries", { options: t }, function () {
                (s = o.initSeries(t)),
                  (o.isDirtyLegend = !0),
                  o.linkSeries(),
                  s.enabledDataSorting && s.setData(t.data, !1),
                  aC(o, "afterAddSeries", { series: s }),
                  e && o.redraw(i);
              })),
            s
          );
        }
        addAxis(t, e, i, s) {
          return this.createAxis(e ? "xAxis" : "yAxis", {
            axis: t,
            redraw: i,
            animation: s,
          });
        }
        addColorAxis(t, e, i) {
          return this.createAxis("colorAxis", {
            axis: t,
            redraw: e,
            animation: i,
          });
        }
        createAxis(t, e) {
          let i = new sR(this, e.axis, t);
          return aN(e.redraw, !0) && this.redraw(e.animation), i;
        }
        showLoading(t) {
          let e = this,
            i = e.options,
            s = i.loading,
            o = function () {
              r &&
                ay(r, {
                  left: e.plotLeft + "px",
                  top: e.plotTop + "px",
                  width: e.plotWidth + "px",
                  height: e.plotHeight + "px",
                });
            },
            r = e.loadingDiv,
            a = e.loadingSpan;
          r ||
            (e.loadingDiv = r =
              ax(
                "div",
                { className: "highcharts-loading highcharts-loading-hidden" },
                null,
                e.container
              )),
            a ||
              ((e.loadingSpan = a =
                ax("span", { className: "highcharts-loading-inner" }, null, r)),
              af(e, "redraw", o)),
            (r.className = "highcharts-loading"),
            tK.setElementHTML(a, aN(t, i.lang.loading, "")),
            e.styledMode ||
              (ay(r, aS(s.style, { zIndex: 10 })),
              ay(a, s.labelStyle),
              e.loadingShown ||
                (ay(r, { opacity: 0, display: "" }),
                as(
                  r,
                  { opacity: s.style.opacity || 0.5 },
                  { duration: s.showDuration || 0 }
                ))),
            (e.loadingShown = !0),
            o();
        }
        hideLoading() {
          let t = this.options,
            e = this.loadingDiv;
          e &&
            ((e.className = "highcharts-loading highcharts-loading-hidden"),
            this.styledMode ||
              as(
                e,
                { opacity: 0 },
                {
                  duration: t.loading.hideDuration || 100,
                  complete: function () {
                    ay(e, { display: "none" });
                  },
                }
              )),
            (this.loadingShown = !1);
        }
        update(t, e, i, s) {
          let o, r, a;
          let n = this,
            h = {
              credits: "addCredits",
              title: "setTitle",
              subtitle: "setSubtitle",
              caption: "setCaption",
            },
            l = t.isResponsiveOptions,
            d = [];
          aC(n, "update", { options: t }),
            l || n.setResponsive(!1, !0),
            (t = av(t, n.options)),
            (n.userOptions = aD(n.userOptions, t));
          let c = t.chart;
          c &&
            (aD(!0, n.options.chart, c),
            this.setZoomOptions(),
            "className" in c && n.setClassName(c.className),
            ("inverted" in c || "polar" in c || "type" in c) &&
              (n.propFromSeries(), (o = !0)),
            "alignTicks" in c && (o = !0),
            "events" in c && ah(this, c),
            aB(c, function (t, e) {
              -1 !== n.propsRequireUpdateSeries.indexOf("chart." + e) &&
                (r = !0),
                -1 !== n.propsRequireDirtyBox.indexOf(e) && (n.isDirtyBox = !0),
                -1 === n.propsRequireReflow.indexOf(e) ||
                  ((n.isDirtyBox = !0), l || (a = !0));
            }),
            !n.styledMode &&
              c.style &&
              n.renderer.setStyle(n.options.chart.style || {})),
            !n.styledMode && t.colors && (this.options.colors = t.colors),
            aB(t, function (e, i) {
              n[i] && "function" == typeof n[i].update
                ? n[i].update(e, !1)
                : "function" == typeof n[h[i]]
                ? n[h[i]](e)
                : "colors" !== i &&
                  -1 === n.collectionsWithUpdate.indexOf(i) &&
                  aD(!0, n.options[i], t[i]),
                "chart" !== i &&
                  -1 !== n.propsRequireUpdateSeries.indexOf(i) &&
                  (r = !0);
            }),
            this.collectionsWithUpdate.forEach(function (e) {
              t[e] &&
                (aH(t[e]).forEach(function (t, s) {
                  let o;
                  let r = ab(t.id);
                  r && (o = n.get(t.id)),
                    !o &&
                      n[e] &&
                      (o = n[e][aN(t.index, s)]) &&
                      ((r && ab(o.options.id)) || o.options.isInternal) &&
                      (o = void 0),
                    o &&
                      o.coll === e &&
                      (o.update(t, !1), i && (o.touched = !0)),
                    !o &&
                      i &&
                      n.collectionsWithInit[e] &&
                      (n.collectionsWithInit[e][0].apply(
                        n,
                        [t]
                          .concat(n.collectionsWithInit[e][1] || [])
                          .concat([!1])
                      ).touched = !0);
                }),
                i &&
                  n[e].forEach(function (t) {
                    t.touched || t.options.isInternal
                      ? delete t.touched
                      : d.push(t);
                  }));
            }),
            d.forEach(function (t) {
              t.chart && t.remove && t.remove(!1);
            }),
            o &&
              n.axes.forEach(function (t) {
                t.update({}, !1);
              }),
            r &&
              n.getSeriesOrderByLinks().forEach(function (t) {
                t.chart && t.update({}, !1);
              }, this);
          let p = c && c.width,
            g =
              c && (aI(c.height) ? aR(c.height, p || n.chartWidth) : c.height);
          a || (aO(p) && p !== n.chartWidth) || (aO(g) && g !== n.chartHeight)
            ? n.setSize(p, g, s)
            : aN(e, !0) && n.redraw(s),
            aC(n, "afterUpdate", { options: t, redraw: e, animation: s });
        }
        setSubtitle(t, e) {
          this.applyDescription("subtitle", t), this.layOutTitles(e);
        }
        setCaption(t, e) {
          this.applyDescription("caption", t), this.layOutTitles(e);
        }
        showResetZoom() {
          let t = this,
            e = aa.lang,
            i = t.zooming.resetButton,
            s = i.theme,
            o =
              "chart" === i.relativeTo || "spacingBox" === i.relativeTo
                ? null
                : "plotBox";
          function r() {
            t.zoomOut();
          }
          aC(this, "beforeShowResetZoom", null, function () {
            t.resetZoomButton = t.renderer
              .button(e.resetZoom, null, null, r, s)
              .attr({ align: i.position.align, title: e.resetZoomTitle })
              .addClass("highcharts-reset-zoom")
              .add()
              .align(i.position, !1, o);
          }),
            aC(this, "afterShowResetZoom");
        }
        zoomOut() {
          aC(this, "selection", { resetSelection: !0 }, () =>
            this.transform({ reset: !0, trigger: "zoom" })
          );
        }
        pan(t, e) {
          let i = this,
            s = "object" == typeof e ? e : { enabled: e, type: "x" },
            o = s.type,
            r =
              o &&
              i[{ x: "xAxis", xy: "axes", y: "yAxis" }[o]].filter(
                (t) => t.options.panningEnabled && !t.options.isInternal
              ),
            a = i.options.chart;
          a?.panning && (a.panning = s),
            aC(this, "pan", { originalEvent: t }, () => {
              i.transform({
                axes: r,
                event: t,
                to: {
                  x: t.chartX - (i.mouseDownX || 0),
                  y: t.chartY - (i.mouseDownY || 0),
                },
                trigger: "pan",
              }),
                ay(i.container, { cursor: "move" });
            });
        }
        transform(t) {
          let {
              axes: e = this.axes,
              event: i,
              from: s = {},
              reset: o,
              selection: r,
              to: a = {},
              trigger: n,
            } = t,
            { inverted: h, time: l } = this,
            d = !1,
            c,
            p;
          for (let t of (this.hoverPoints?.forEach((t) => t.setState()), e)) {
            let {
                horiz: e,
                len: g,
                minPointOffset: u = 0,
                options: f,
                reversed: m,
              } = t,
              x = e ? "width" : "height",
              y = e ? "x" : "y",
              b = aN(a[x], t.len),
              v = aN(s[x], t.len),
              k = 10 > Math.abs(b) ? 1 : b / v,
              w = (s[y] || 0) + v / 2 - t.pos,
              M = w - ((a[y] ?? t.pos) + b / 2 - t.pos) / k,
              S = (m && !h) || (!m && h) ? -1 : 1;
            if (!o && (w < 0 || w > t.len)) continue;
            let T = t.toValue(M, !0) + (r || t.isOrdinal ? 0 : u * S),
              C =
                t.toValue(M + g / k, !0) - (r || t.isOrdinal ? 0 : u * S || 0),
              A = t.allExtremes;
            if (
              (T > C && ([T, C] = [C, T]),
              1 === k && !o && "yAxis" === t.coll && !A)
            ) {
              for (let e of t.series) {
                let t = e.getExtremes(
                  e.getProcessedData(!0).modified.getColumn("y") || [],
                  !0
                );
                A ??
                  (A = {
                    dataMin: Number.MAX_VALUE,
                    dataMax: -Number.MAX_VALUE,
                  }),
                  aO(t.dataMin) &&
                    aO(t.dataMax) &&
                    ((A.dataMin = Math.min(t.dataMin, A.dataMin)),
                    (A.dataMax = Math.max(t.dataMax, A.dataMax)));
              }
              t.allExtremes = A;
            }
            let {
                dataMin: P,
                dataMax: L,
                min: O,
                max: E,
              } = aS(t.getExtremes(), A || {}),
              I = l.parse(f.min),
              D = l.parse(f.max),
              B = P ?? I,
              N = L ?? D,
              z = C - T,
              R = t.categories ? 0 : Math.min(z, N - B),
              W = B - R * (ab(I) ? 0 : f.minPadding),
              H = N + R * (ab(D) ? 0 : f.maxPadding),
              X = t.allowZoomOutside || 1 === k || ("zoom" !== n && k > 1),
              F = Math.min(I ?? W, W, X ? O : W),
              G = Math.max(D ?? H, H, X ? E : H);
            (!t.isOrdinal || t.options.overscroll || 1 !== k || o) &&
              (T < F && ((T = F), k >= 1 && (C = T + z)),
              C > G && ((C = G), k >= 1 && (T = C - z)),
              (o ||
                (t.series.length &&
                  (T !== O || C !== E) &&
                  T >= F &&
                  C <= G)) &&
                (r
                  ? r[t.coll].push({ axis: t, min: T, max: C })
                  : ((t.isPanning = "zoom" !== n),
                    t.isPanning && (p = !0),
                    t.setExtremes(o ? void 0 : T, o ? void 0 : C, !1, !1, {
                      move: M,
                      trigger: n,
                      scale: k,
                    }),
                    !o && (T > F || C < G) && "mousewheel" !== n && (c = !0)),
                (d = !0)),
              i &&
                (this[e ? "mouseDownX" : "mouseDownY"] =
                  i[e ? "chartX" : "chartY"]));
          }
          return (
            d &&
              (r
                ? aC(this, "selection", r, () => {
                    delete t.selection, (t.trigger = "zoom"), this.transform(t);
                  })
                : (!c || p || this.resetZoomButton
                    ? !c &&
                      this.resetZoomButton &&
                      (this.resetZoomButton = this.resetZoomButton.destroy())
                    : this.showResetZoom(),
                  this.redraw(
                    "zoom" === n &&
                      (this.options.chart.animation ?? this.pointCount < 100)
                  ))),
            d
          );
        }
      }
      aS(aG.prototype, {
        callbacks: [],
        collectionsWithInit: {
          xAxis: [aG.prototype.addAxis, [!0]],
          yAxis: [aG.prototype.addAxis, [!1]],
          series: [aG.prototype.addSeries],
        },
        collectionsWithUpdate: ["xAxis", "yAxis", "series"],
        propsRequireDirtyBox: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "borderRadius",
          "plotBackgroundColor",
          "plotBackgroundImage",
          "plotBorderColor",
          "plotBorderWidth",
          "plotShadow",
          "shadow",
        ],
        propsRequireReflow: [
          "margin",
          "marginTop",
          "marginRight",
          "marginBottom",
          "marginLeft",
          "spacing",
          "spacingTop",
          "spacingRight",
          "spacingBottom",
          "spacingLeft",
        ],
        propsRequireUpdateSeries: [
          "chart.inverted",
          "chart.polar",
          "chart.ignoreHiddenSeries",
          "chart.type",
          "colors",
          "plotOptions",
          "time",
          "tooltip",
        ],
      });
      let { stop: aY } = tR,
        { composed: aj } = k,
        {
          addEvent: aU,
          createElement: a$,
          css: aV,
          defined: a_,
          erase: aq,
          merge: aZ,
          pushUnique: aK,
        } = $;
      function aJ() {
        let t = this.scrollablePlotArea;
        (this.scrollablePixelsX || this.scrollablePixelsY) &&
          !t &&
          (this.scrollablePlotArea = t = new a0(this)),
          t?.applyFixed();
      }
      function aQ() {
        this.chart.scrollablePlotArea &&
          (this.chart.scrollablePlotArea.isDirty = !0);
      }
      class a0 {
        static compose(t, e, i) {
          aK(aj, this.compose) &&
            (aU(t, "afterInit", aQ),
            aU(e, "afterSetChartSize", (t) => this.afterSetSize(t.target, t)),
            aU(e, "render", aJ),
            aU(i, "show", aQ));
        }
        static afterSetSize(t, e) {
          let i, s, o;
          let { minWidth: r, minHeight: a } =
              t.options.chart.scrollablePlotArea || {},
            { clipBox: n, plotBox: h, inverted: l, renderer: d } = t;
          if (
            !d.forExport &&
            (r
              ? ((t.scrollablePixelsX = i = Math.max(0, r - t.chartWidth)),
                i &&
                  ((t.scrollablePlotBox = aZ(t.plotBox)),
                  (h.width = t.plotWidth += i),
                  (n[l ? "height" : "width"] += i),
                  (o = !0)))
              : a &&
                ((t.scrollablePixelsY = s = Math.max(0, a - t.chartHeight)),
                a_(s) &&
                  ((t.scrollablePlotBox = aZ(t.plotBox)),
                  (h.height = t.plotHeight += s),
                  (n[l ? "width" : "height"] += s),
                  (o = !1))),
            a_(o) && !e.skipAxes)
          )
            for (let e of t.axes)
              (e.horiz === o ||
                (t.hasParallelCoordinates && "yAxis" === e.coll)) &&
                (e.setAxisSize(), e.setAxisTranslation());
        }
        constructor(t) {
          let e;
          let i = t.options.chart,
            s = er.getRendererType(),
            o = i.scrollablePlotArea || {},
            r = this.moveFixedElements.bind(this),
            a = {
              WebkitOverflowScrolling: "touch",
              overflowX: "hidden",
              overflowY: "hidden",
            };
          t.scrollablePixelsX && (a.overflowX = "auto"),
            t.scrollablePixelsY && (a.overflowY = "auto"),
            (this.chart = t);
          let n = (this.parentDiv = a$(
              "div",
              { className: "highcharts-scrolling-parent" },
              { position: "relative" },
              t.renderTo
            )),
            h = (this.scrollingContainer = a$(
              "div",
              { className: "highcharts-scrolling" },
              a,
              n
            )),
            l = (this.innerContainer = a$(
              "div",
              { className: "highcharts-inner-container" },
              void 0,
              h
            )),
            d = (this.fixedDiv = a$(
              "div",
              { className: "highcharts-fixed" },
              {
                position: "absolute",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: (i.style?.zIndex || 0) + 2,
                top: 0,
              },
              void 0,
              !0
            )),
            c = (this.fixedRenderer = new s(
              d,
              t.chartWidth,
              t.chartHeight,
              i.style
            ));
          (this.mask = c
            .path()
            .attr({
              fill: i.backgroundColor || "#fff",
              "fill-opacity": o.opacity ?? 0.85,
              zIndex: -1,
            })
            .addClass("highcharts-scrollable-mask")
            .add()),
            h.parentNode.insertBefore(d, h),
            aV(t.renderTo, { overflow: "visible" }),
            aU(t, "afterShowResetZoom", r),
            aU(t, "afterApplyDrilldown", r),
            aU(t, "afterLayOutTitles", r),
            aU(h, "scroll", () => {
              let { pointer: i, hoverPoint: s } = t;
              i &&
                (delete i.chartPosition,
                s && (e = s),
                i.runPointActions(void 0, e, !0));
            }),
            l.appendChild(t.container);
        }
        applyFixed() {
          let {
              chart: t,
              fixedRenderer: e,
              isDirty: i,
              scrollingContainer: s,
            } = this,
            {
              axisOffset: o,
              chartWidth: r,
              chartHeight: a,
              container: n,
              plotHeight: h,
              plotLeft: l,
              plotTop: d,
              plotWidth: c,
              scrollablePixelsX: p = 0,
              scrollablePixelsY: g = 0,
            } = t,
            { scrollPositionX: u = 0, scrollPositionY: f = 0 } =
              t.options.chart.scrollablePlotArea || {},
            m = r + p,
            x = a + g;
          e.setSize(r, a),
            (i ?? !0) && ((this.isDirty = !1), this.moveFixedElements()),
            aY(t.container),
            aV(n, { width: `${m}px`, height: `${x}px` }),
            t.renderer.boxWrapper.attr({
              width: m,
              height: x,
              viewBox: [0, 0, m, x].join(" "),
            }),
            t.chartBackground?.attr({ width: m, height: x }),
            aV(s, { width: `${r}px`, height: `${a}px` }),
            a_(i) || ((s.scrollLeft = p * u), (s.scrollTop = g * f));
          let y = d - o[0] - 1,
            b = l - o[3] - 1,
            v = d + h + o[2] + 1,
            k = l + c + o[1] + 1,
            w = l + c - p,
            M = d + h - g,
            S = [["M", 0, 0]];
          p
            ? (S = [
                ["M", 0, y],
                ["L", l - 1, y],
                ["L", l - 1, v],
                ["L", 0, v],
                ["Z"],
                ["M", w, y],
                ["L", r, y],
                ["L", r, v],
                ["L", w, v],
                ["Z"],
              ])
            : g &&
              (S = [
                ["M", b, 0],
                ["L", b, d - 1],
                ["L", k, d - 1],
                ["L", k, 0],
                ["Z"],
                ["M", b, M],
                ["L", b, a],
                ["L", k, a],
                ["L", k, M],
                ["Z"],
              ]),
            "adjustHeight" !== t.redrawTrigger && this.mask.attr({ d: S });
        }
        moveFixedElements() {
          let t;
          let {
              container: e,
              inverted: i,
              scrollablePixelsX: s,
              scrollablePixelsY: o,
            } = this.chart,
            r = this.fixedRenderer,
            a = a0.fixedSelectors;
          if (
            (s && !i
              ? (t = ".highcharts-yaxis")
              : s && i
              ? (t = ".highcharts-xaxis")
              : o && !i
              ? (t = ".highcharts-xaxis")
              : o && i && (t = ".highcharts-yaxis"),
            t &&
              !(this.chart.hasParallelCoordinates && ".highcharts-yaxis" === t))
          )
            for (let e of [
              `${t}:not(.highcharts-radial-axis)`,
              `${t}-labels:not(.highcharts-radial-axis-labels)`,
            ])
              aK(a, e);
          else
            for (let t of [".highcharts-xaxis", ".highcharts-yaxis"])
              for (let e of [
                `${t}:not(.highcharts-radial-axis)`,
                `${t}-labels:not(.highcharts-radial-axis-labels)`,
              ])
                aq(a, e);
          for (let t of a)
            [].forEach.call(e.querySelectorAll(t), (t) => {
              (t.namespaceURI === r.SVG_NS
                ? r.box
                : r.box.parentNode
              ).appendChild(t),
                (t.style.pointerEvents = "auto");
            });
        }
      }
      a0.fixedSelectors = [
        ".highcharts-breadcrumbs-group",
        ".highcharts-contextbutton",
        ".highcharts-caption",
        ".highcharts-credits",
        ".highcharts-drillup-button",
        ".highcharts-legend",
        ".highcharts-legend-checkbox",
        ".highcharts-navigator-series",
        ".highcharts-navigator-xaxis",
        ".highcharts-navigator-yaxis",
        ".highcharts-navigator",
        ".highcharts-range-selector-group",
        ".highcharts-reset-zoom",
        ".highcharts-scrollbar",
        ".highcharts-subtitle",
        ".highcharts-title",
      ];
      let { format: a1 } = eo,
        { series: a2 } = rd,
        {
          destroyObjectProperties: a3,
          fireEvent: a5,
          getAlignFactor: a6,
          isNumber: a9,
          pick: a4,
        } = $,
        a8 = class {
          constructor(t, e, i, s, o) {
            let r = t.chart.inverted,
              a = t.reversed;
            this.axis = t;
            let n = (this.isNegative = !!i != !!a);
            (this.options = e = e || {}),
              (this.x = s),
              (this.total = null),
              (this.cumulative = null),
              (this.points = {}),
              (this.hasValidPoints = !1),
              (this.stack = o),
              (this.leftCliff = 0),
              (this.rightCliff = 0),
              (this.alignOptions = {
                align: e.align || (r ? (n ? "left" : "right") : "center"),
                verticalAlign:
                  e.verticalAlign || (r ? "middle" : n ? "bottom" : "top"),
                y: e.y,
                x: e.x,
              }),
              (this.textAlign =
                e.textAlign || (r ? (n ? "right" : "left") : "center"));
          }
          destroy() {
            a3(this, this.axis);
          }
          render(t) {
            let e = this.axis.chart,
              i = this.options,
              s = i.format,
              o = s ? a1(s, this, e) : i.formatter.call(this);
            if (this.label) this.label.attr({ text: o, visibility: "hidden" });
            else {
              this.label = e.renderer.label(
                o,
                null,
                void 0,
                i.shape,
                void 0,
                void 0,
                i.useHTML,
                !1,
                "stack-labels"
              );
              let s = {
                r: i.borderRadius || 0,
                text: o,
                padding: a4(i.padding, 5),
                visibility: "hidden",
              };
              e.styledMode ||
                ((s.fill = i.backgroundColor),
                (s.stroke = i.borderColor),
                (s["stroke-width"] = i.borderWidth),
                this.label.css(i.style || {})),
                this.label.attr(s),
                this.label.added || this.label.add(t);
            }
            (this.label.labelrank = e.plotSizeY), a5(this, "afterRender");
          }
          setOffset(t, e, i, s, o, r) {
            let {
                alignOptions: a,
                axis: n,
                label: h,
                options: l,
                textAlign: d,
              } = this,
              c = n.chart,
              p = this.getStackBox({
                xOffset: t,
                width: e,
                boxBottom: i,
                boxTop: s,
                defaultX: o,
                xAxis: r,
              }),
              { verticalAlign: g } = a;
            if (h && p) {
              let t = h.getBBox(void 0, 0),
                e = h.padding,
                i = "justify" === a4(l.overflow, "justify"),
                s;
              (a.x = l.x || 0), (a.y = l.y || 0);
              let { x: o, y: r } = this.adjustStackPosition({
                labelBox: t,
                verticalAlign: g,
                textAlign: d,
              });
              (p.x -= o),
                (p.y -= r),
                h.align(a, !1, p),
                (s = c.isInsidePlot(
                  h.alignAttr.x + a.x + o,
                  h.alignAttr.y + a.y + r
                )) || (i = !1),
                i &&
                  a2.prototype.justifyDataLabel.call(
                    n,
                    h,
                    a,
                    h.alignAttr,
                    t,
                    p
                  ),
                h.attr({
                  x: h.alignAttr.x,
                  y: h.alignAttr.y,
                  rotation: l.rotation,
                  rotationOriginX: t.width * a6(l.textAlign || "center"),
                  rotationOriginY: t.height / 2,
                }),
                a4(!i && l.crop, !0) &&
                  (s =
                    a9(h.x) &&
                    a9(h.y) &&
                    c.isInsidePlot(h.x - e + (h.width || 0), h.y) &&
                    c.isInsidePlot(h.x + e, h.y)),
                h[s ? "show" : "hide"]();
            }
            a5(this, "afterSetOffset", { xOffset: t, width: e });
          }
          adjustStackPosition({ labelBox: t, verticalAlign: e, textAlign: i }) {
            return {
              x: t.width / 2 + (t.width / 2) * (2 * a6(i) - 1),
              y: (t.height / 2) * 2 * (1 - a6(e)),
            };
          }
          getStackBox(t) {
            let e = this.axis,
              i = e.chart,
              {
                boxTop: s,
                defaultX: o,
                xOffset: r,
                width: a,
                boxBottom: n,
              } = t,
              h = e.stacking.usePercentage ? 100 : a4(s, this.total, 0),
              l = e.toPixels(h),
              d = t.xAxis || i.xAxis[0],
              c = a4(o, d.translate(this.x)) + r,
              p = Math.abs(
                l -
                  e.toPixels(
                    n ||
                      (a9(e.min) &&
                        e.logarithmic &&
                        e.logarithmic.lin2log(e.min)) ||
                      0
                  )
              ),
              g = i.inverted,
              u = this.isNegative;
            return g
              ? {
                  x: (u ? l : l - p) - i.plotLeft,
                  y: d.height - c - a + d.top - i.plotTop,
                  width: p,
                  height: a,
                }
              : {
                  x: c + d.transB - i.plotLeft,
                  y: (u ? l - p : l) - i.plotTop,
                  width: a,
                  height: p,
                };
          }
        },
        { getDeferredAnimation: a7 } = tR,
        {
          series: { prototype: nt },
        } = rd,
        {
          addEvent: ne,
          correctFloat: ni,
          defined: ns,
          destroyObjectProperties: no,
          fireEvent: nr,
          isNumber: na,
          objectEach: nn,
          pick: nh,
        } = $;
      function nl() {
        let t = this.inverted;
        this.axes.forEach((t) => {
          t.stacking &&
            t.stacking.stacks &&
            t.hasVisibleSeries &&
            (t.stacking.oldStacks = t.stacking.stacks);
        }),
          this.series.forEach((e) => {
            let i = (e.xAxis && e.xAxis.options) || {};
            e.options.stacking &&
              e.reserveSpace() &&
              (e.stackKey = [
                e.type,
                nh(e.options.stack, ""),
                t ? i.top : i.left,
                t ? i.height : i.width,
              ].join(","));
          });
      }
      function nd() {
        let t = this.stacking;
        if (t) {
          let e = t.stacks;
          nn(e, (t, i) => {
            no(t), delete e[i];
          }),
            t.stackTotalGroup?.destroy();
        }
      }
      function nc() {
        this.stacking || (this.stacking = new nx(this));
      }
      function np(t, e, i, s) {
        return (
          !ns(t) || t.x !== e || (s && t.stackKey !== s)
            ? (t = { x: e, index: 0, key: s, stackKey: s })
            : t.index++,
          (t.key = [i, e, t.index].join(",")),
          t
        );
      }
      function ng() {
        let t;
        let e = this,
          i = e.yAxis,
          s = e.stackKey || "",
          o = i.stacking.stacks,
          r = e.getColumn("x", !0),
          a = e.options.stacking,
          n = e[a + "Stacker"];
        n &&
          [s, "-" + s].forEach((i) => {
            let s = r.length,
              a,
              h,
              l;
            for (; s--; )
              (a = r[s]),
                (t = e.getStackIndicator(t, a, e.index, i)),
                (h = o[i]?.[a]),
                (l = h?.points[t.key || ""]) && n.call(e, l, h, s);
          });
      }
      function nu(t, e, i) {
        let s = e.total ? 100 / e.total : 0;
        (t[0] = ni(t[0] * s)),
          (t[1] = ni(t[1] * s)),
          (this.stackedYData[i] = t[1]);
      }
      function nf(t) {
        (this.is("column") || this.is("columnrange")) &&
          (this.options.centerInCategory && this.chart.series.length > 1
            ? nt.setStackedPoints.call(this, t, "group")
            : t.stacking.resetStacks());
      }
      function nm(t, e) {
        let i, s, o, r, a, n, h;
        let l = e || this.options.stacking;
        if (
          !l ||
          !this.reserveSpace() ||
          ({ group: "xAxis" }[l] || "yAxis") !== t.coll
        )
          return;
        let d = this.getColumn("x", !0),
          c = this.getColumn(this.pointValKey || "y", !0),
          p = [],
          g = c.length,
          u = this.options,
          f = u.threshold || 0,
          m = u.startFromThreshold ? f : 0,
          x = u.stack,
          y = e ? `${this.type},${l}` : this.stackKey || "",
          b = "-" + y,
          v = this.negStacks,
          k = t.stacking,
          w = k.stacks,
          M = k.oldStacks;
        for (k.stacksTouched += 1, h = 0; h < g; h++) {
          let e = d[h] || 0,
            g = c[h],
            u = (na(g) && g) || 0;
          (n = (i = this.getStackIndicator(i, e, this.index)).key || ""),
            w[(a = (s = v && u < (m ? 0 : f)) ? b : y)] || (w[a] = {}),
            w[a][e] ||
              (M[a]?.[e]
                ? ((w[a][e] = M[a][e]), (w[a][e].total = null))
                : (w[a][e] = new a8(t, t.options.stackLabels, !!s, e, x))),
            (o = w[a][e]),
            null !== g
              ? ((o.points[n] = o.points[this.index] = [nh(o.cumulative, m)]),
                ns(o.cumulative) || (o.base = n),
                (o.touched = k.stacksTouched),
                i.index > 0 &&
                  !1 === this.singleStacks &&
                  (o.points[n][0] = o.points[this.index + "," + e + ",0"][0]))
              : (delete o.points[n], delete o.points[this.index]);
          let S = o.total || 0;
          "percent" === l
            ? ((r = s ? y : b),
              (S =
                v && w[r]?.[e]
                  ? ((r = w[r][e]).total =
                      Math.max(r.total || 0, S) + Math.abs(u))
                  : ni(S + Math.abs(u))))
            : "group" === l
            ? na(g) && S++
            : (S = ni(S + u)),
            "group" === l
              ? (o.cumulative = (S || 1) - 1)
              : (o.cumulative = ni(nh(o.cumulative, m) + u)),
            (o.total = S),
            null !== g &&
              (o.points[n].push(o.cumulative),
              (p[h] = o.cumulative),
              (o.hasValidPoints = !0));
        }
        "percent" === l && (k.usePercentage = !0),
          "group" !== l && (this.stackedYData = p),
          (k.oldStacks = {});
      }
      class nx {
        constructor(t) {
          (this.oldStacks = {}),
            (this.stacks = {}),
            (this.stacksTouched = 0),
            (this.axis = t);
        }
        buildStacks() {
          let t, e;
          let i = this.axis,
            s = i.series,
            o = "xAxis" === i.coll,
            r = i.options.reversedStacks,
            a = s.length;
          for (this.resetStacks(), this.usePercentage = !1, e = a; e--; )
            (t = s[r ? e : a - e - 1]),
              o && t.setGroupedPoints(i),
              t.setStackedPoints(i);
          if (!o) for (e = 0; e < a; e++) s[e].modifyStacks();
          nr(i, "afterBuildStacks");
        }
        cleanStacks() {
          this.oldStacks &&
            ((this.stacks = this.oldStacks),
            nn(this.stacks, (t) => {
              nn(t, (t) => {
                t.cumulative = t.total;
              });
            }));
        }
        resetStacks() {
          nn(this.stacks, (t) => {
            nn(t, (e, i) => {
              na(e.touched) && e.touched < this.stacksTouched
                ? (e.destroy(), delete t[i])
                : ((e.total = null), (e.cumulative = null));
            });
          });
        }
        renderStackTotals() {
          let t = this.axis,
            e = t.chart,
            i = e.renderer,
            s = this.stacks,
            o = a7(e, t.options.stackLabels?.animation || !1),
            r = (this.stackTotalGroup =
              this.stackTotalGroup ||
              i.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add());
          r.translate(e.plotLeft, e.plotTop),
            nn(s, (t) => {
              nn(t, (t) => {
                t.render(r);
              });
            }),
            r.animate({ opacity: 1 }, o);
        }
      }
      (p || (p = {})).compose = function (t, e, i) {
        let s = e.prototype,
          o = i.prototype;
        s.getStacks ||
          (ne(t, "init", nc),
          ne(t, "destroy", nd),
          (s.getStacks = nl),
          (o.getStackIndicator = np),
          (o.modifyStacks = ng),
          (o.percentStacker = nu),
          (o.setGroupedPoints = nf),
          (o.setStackedPoints = nm));
      };
      let ny = p,
        { defined: nb, merge: nv, isObject: nk } = $;
      class nw extends rY {
        drawGraph() {
          let t = this.options,
            e = (this.gappedPath || this.getGraphPath).call(this),
            i = this.chart.styledMode;
          [this, ...this.zones].forEach((s, o) => {
            let r,
              a = s.graph,
              n = a ? "animate" : "attr",
              h = s.dashStyle || t.dashStyle;
            a
              ? ((a.endX = this.preventGraphAnimation ? null : e.xMap),
                a.animate({ d: e }))
              : e.length &&
                (s.graph = a =
                  this.chart.renderer
                    .path(e)
                    .addClass(
                      "highcharts-graph" +
                        (o ? ` highcharts-zone-graph-${o - 1} ` : " ") +
                        ((o && s.className) || "")
                    )
                    .attr({ zIndex: 1 })
                    .add(this.group)),
              a &&
                !i &&
                ((r = {
                  stroke:
                    (!o && t.lineColor) || s.color || this.color || "#cccccc",
                  "stroke-width": t.lineWidth || 0,
                  fill: (this.fillGraph && this.color) || "none",
                }),
                h
                  ? (r.dashstyle = h)
                  : "square" !== t.linecap &&
                    (r["stroke-linecap"] = r["stroke-linejoin"] = "round"),
                a[n](r).shadow(
                  t.shadow &&
                    nv(
                      { filterUnits: "userSpaceOnUse" },
                      nk(t.shadow) ? t.shadow : {}
                    )
                )),
              a && ((a.startX = e.xMap), (a.isArea = e.isArea));
          });
        }
        getGraphPath(t, e, i) {
          let s = this,
            o = s.options,
            r = [],
            a = [],
            n,
            h = o.step,
            l = (t = t || s.points).reversed;
          return (
            l && t.reverse(),
            (h = { right: 1, center: 2 }[h] || (h && 3)) && l && (h = 4 - h),
            (t = this.getValidPoints(
              t,
              !1,
              !(o.connectNulls && !e && !i)
            )).forEach(function (l, d) {
              let c;
              let p = l.plotX,
                g = l.plotY,
                u = t[d - 1],
                f = l.isNull || "number" != typeof g;
              (l.leftCliff || (u && u.rightCliff)) && !i && (n = !0),
                f && !nb(e) && d > 0
                  ? (n = !o.connectNulls)
                  : f && !e
                  ? (n = !0)
                  : (0 === d || n
                      ? (c = [["M", l.plotX, l.plotY]])
                      : s.getPointSpline
                      ? (c = [s.getPointSpline(t, l, d)])
                      : h
                      ? (c =
                          1 === h
                            ? [["L", u.plotX, g]]
                            : 2 === h
                            ? [
                                ["L", (u.plotX + p) / 2, u.plotY],
                                ["L", (u.plotX + p) / 2, g],
                              ]
                            : [["L", p, u.plotY]]).push(["L", p, g])
                      : (c = [["L", p, g]]),
                    a.push(l.x),
                    h && (a.push(l.x), 2 === h && a.push(l.x)),
                    r.push.apply(r, c),
                    (n = !1));
            }),
            (r.xMap = a),
            (s.graphPath = r),
            r
          );
        }
      }
      (nw.defaultOptions = nv(rY.defaultOptions, {
        legendSymbol: "lineMarker",
      })),
        rd.registerSeriesType("line", nw);
      let {
          seriesTypes: { line: nM },
        } = rd,
        { extend: nS, merge: nT, objectEach: nC, pick: nA } = $;
      class nP extends nM {
        drawGraph() {
          (this.areaPath = []), super.drawGraph.apply(this);
          let { areaPath: t, options: e } = this;
          [this, ...this.zones].forEach((i, s) => {
            let o = {},
              r = i.fillColor || e.fillColor,
              a = i.area,
              n = a ? "animate" : "attr";
            a
              ? ((a.endX = this.preventGraphAnimation ? null : t.xMap),
                a.animate({ d: t }))
              : ((o.zIndex = 0),
                ((a = i.area =
                  this.chart.renderer
                    .path(t)
                    .addClass(
                      "highcharts-area" +
                        (s ? ` highcharts-zone-area-${s - 1} ` : " ") +
                        ((s && i.className) || "")
                    )
                    .add(this.group)).isArea = !0)),
              this.chart.styledMode ||
                ((o.fill = r || i.color || this.color),
                (o["fill-opacity"] = r ? 1 : e.fillOpacity ?? 0.75),
                a.css({
                  pointerEvents: this.stickyTracking ? "none" : "auto",
                })),
              a[n](o),
              (a.startX = t.xMap),
              (a.shiftUnit = e.step ? 2 : 1);
          });
        }
        getGraphPath(t) {
          let e, i, s;
          let o = nM.prototype.getGraphPath,
            r = this.options,
            a = r.stacking,
            n = this.yAxis,
            h = [],
            l = [],
            d = this.index,
            c = n.stacking.stacks[this.stackKey],
            p = r.threshold,
            g = Math.round(n.getThreshold(r.threshold)),
            u = nA(r.connectNulls, "percent" === a),
            f = function (i, s, o) {
              let r = t[i],
                u = a && c[r.x].points[d],
                f = r[o + "Null"] || 0,
                m = r[o + "Cliff"] || 0,
                x,
                y,
                b = !0;
              m || f
                ? ((x = (f ? u[0] : u[1]) + m), (y = u[0] + m), (b = !!f))
                : !a && t[s] && t[s].isNull && (x = y = p),
                void 0 !== x &&
                  (l.push({
                    plotX: e,
                    plotY: null === x ? g : n.getThreshold(x),
                    isNull: b,
                    isCliff: !0,
                  }),
                  h.push({
                    plotX: e,
                    plotY: null === y ? g : n.getThreshold(y),
                    doCurve: !1,
                  }));
            };
          (t = t || this.points), a && (t = this.getStackPoints(t));
          for (let o = 0, r = t.length; o < r; ++o)
            a ||
              (t[o].leftCliff =
                t[o].rightCliff =
                t[o].leftNull =
                t[o].rightNull =
                  void 0),
              (i = t[o].isNull),
              (e = nA(t[o].rectPlotX, t[o].plotX)),
              (s = a ? nA(t[o].yBottom, g) : g),
              (i && !u) ||
                (u || f(o, o - 1, "left"),
                (i && !a && u) ||
                  (l.push(t[o]), h.push({ x: o, plotX: e, plotY: s })),
                u || f(o, o + 1, "right"));
          let m = o.call(this, l, !0, !0);
          h.reversed = !0;
          let x = o.call(this, h, !0, !0),
            y = x[0];
          y && "M" === y[0] && (x[0] = ["L", y[1], y[2]]);
          let b = m.concat(x);
          b.length && b.push(["Z"]);
          let v = o.call(this, l, !1, u);
          return (
            this.chart.series.length > 1 &&
              a &&
              l.some((t) => t.isCliff) &&
              (b.hasStackedCliffs = v.hasStackedCliffs = !0),
            (b.xMap = m.xMap),
            (this.areaPath = b),
            v
          );
        }
        getStackPoints(t) {
          let e = this,
            i = [],
            s = [],
            o = this.xAxis,
            r = this.yAxis,
            a = r.stacking.stacks[this.stackKey],
            n = {},
            h = r.series,
            l = h.length,
            d = r.options.reversedStacks ? 1 : -1,
            c = h.indexOf(e);
          if (((t = t || this.points), this.options.stacking)) {
            for (let e = 0; e < t.length; e++)
              (t[e].leftNull = t[e].rightNull = void 0), (n[t[e].x] = t[e]);
            nC(a, function (t, e) {
              null !== t.total && s.push(e);
            }),
              s.sort(function (t, e) {
                return t - e;
              });
            let p = h.map((t) => t.visible);
            s.forEach(function (t, g) {
              let u = 0,
                f,
                m;
              if (n[t] && !n[t].isNull)
                i.push(n[t]),
                  [-1, 1].forEach(function (i) {
                    let o = 1 === i ? "rightNull" : "leftNull",
                      r = a[s[g + i]],
                      u = 0;
                    if (r) {
                      let i = c;
                      for (; i >= 0 && i < l; ) {
                        let s = h[i].index;
                        !(f = r.points[s]) &&
                          (s === e.index
                            ? (n[t][o] = !0)
                            : p[i] &&
                              (m = a[t].points[s]) &&
                              (u -= m[1] - m[0])),
                          (i += d);
                      }
                    }
                    n[t][1 === i ? "rightCliff" : "leftCliff"] = u;
                  });
              else {
                let e = c;
                for (; e >= 0 && e < l; ) {
                  let i = h[e].index;
                  if ((f = a[t].points[i])) {
                    u = f[1];
                    break;
                  }
                  e += d;
                }
                (u = nA(u, 0)),
                  (u = r.translate(u, 0, 1, 0, 1)),
                  i.push({
                    isNull: !0,
                    plotX: o.translate(t, 0, 0, 0, 1),
                    x: t,
                    plotY: u,
                    yBottom: u,
                  });
              }
            });
          }
          return i;
        }
      }
      (nP.defaultOptions = nT(nM.defaultOptions, {
        threshold: 0,
        legendSymbol: "areaMarker",
      })),
        nS(nP.prototype, { singleStacks: !1 }),
        rd.registerSeriesType("area", nP);
      let { line: nL } = rd.seriesTypes,
        { merge: nO, pick: nE } = $;
      class nI extends nL {
        getPointSpline(t, e, i) {
          let s, o, r, a;
          let n = e.plotX || 0,
            h = e.plotY || 0,
            l = t[i - 1],
            d = t[i + 1];
          function c(t) {
            return t && !t.isNull && !1 !== t.doCurve && !e.isCliff;
          }
          if (c(l) && c(d)) {
            let t = l.plotX || 0,
              i = l.plotY || 0,
              c = d.plotX || 0,
              p = d.plotY || 0,
              g = 0;
            (s = (1.5 * n + t) / 2.5),
              (o = (1.5 * h + i) / 2.5),
              (r = (1.5 * n + c) / 2.5),
              (a = (1.5 * h + p) / 2.5),
              r !== s && (g = ((a - o) * (r - n)) / (r - s) + h - a),
              (o += g),
              (a += g),
              o > i && o > h
                ? ((o = Math.max(i, h)), (a = 2 * h - o))
                : o < i && o < h && ((o = Math.min(i, h)), (a = 2 * h - o)),
              a > p && a > h
                ? ((a = Math.max(p, h)), (o = 2 * h - a))
                : a < p && a < h && ((a = Math.min(p, h)), (o = 2 * h - a)),
              (e.rightContX = r),
              (e.rightContY = a),
              (e.controlPoints = { low: [s, o], high: [r, a] });
          }
          let p = [
            "C",
            nE(l.rightContX, l.plotX, 0),
            nE(l.rightContY, l.plotY, 0),
            nE(s, n, 0),
            nE(o, h, 0),
            n,
            h,
          ];
          return (l.rightContX = l.rightContY = void 0), p;
        }
      }
      (nI.defaultOptions = nO(nL.defaultOptions)),
        rd.registerSeriesType("spline", nI);
      let nD = nI,
        {
          area: nB,
          area: { prototype: nN },
        } = rd.seriesTypes,
        { extend: nz, merge: nR } = $;
      class nW extends nD {}
      (nW.defaultOptions = nR(nD.defaultOptions, nB.defaultOptions)),
        nz(nW.prototype, {
          getGraphPath: nN.getGraphPath,
          getStackPoints: nN.getStackPoints,
          drawGraph: nN.drawGraph,
        }),
        rd.registerSeriesType("areaspline", nW);
      let { animObject: nH } = tR,
        { parse: nX } = tk,
        { noop: nF } = k,
        {
          clamp: nG,
          crisp: nY,
          defined: nj,
          extend: nU,
          fireEvent: n$,
          isArray: nV,
          isNumber: n_,
          merge: nq,
          pick: nZ,
          objectEach: nK,
        } = $;
      class nJ extends rY {
        animate(t) {
          let e, i;
          let s = this,
            o = this.yAxis,
            r = o.pos,
            a = o.reversed,
            n = s.options,
            { clipOffset: h, inverted: l } = this.chart,
            d = {},
            c = l ? "translateX" : "translateY";
          t && h
            ? ((d.scaleY = 0.001),
              (i = nG(o.toPixels(n.threshold || 0), r, r + o.len)),
              l
                ? ((i += a ? -Math.floor(h[0]) : Math.ceil(h[2])),
                  (d.translateX = i - o.len))
                : ((i += a ? Math.ceil(h[0]) : -Math.floor(h[2])),
                  (d.translateY = i)),
              s.clipBox && s.setClip(),
              s.group.attr(d))
            : ((e = Number(s.group.attr(c))),
              s.group.animate(
                { scaleY: 1 },
                nU(nH(s.options.animation), {
                  step: function (t, i) {
                    s.group && ((d[c] = e + i.pos * (r - e)), s.group.attr(d));
                  },
                })
              ));
        }
        init(t, e) {
          super.init.apply(this, arguments);
          let i = this;
          (t = i.chart).hasRendered &&
            t.series.forEach(function (t) {
              t.type === i.type && (t.isDirty = !0);
            });
        }
        getColumnMetrics() {
          let t = this,
            e = t.options,
            i = t.xAxis,
            s = t.yAxis,
            o = i.options.reversedStacks,
            r = (i.reversed && !o) || (!i.reversed && o),
            a = {},
            n,
            h = 0;
          !1 === e.grouping
            ? (h = 1)
            : t.chart.series.forEach(function (e) {
                let i;
                let o = e.yAxis,
                  r = e.options;
                e.type === t.type &&
                  e.reserveSpace() &&
                  s.len === o.len &&
                  s.pos === o.pos &&
                  (r.stacking && "group" !== r.stacking
                    ? (void 0 === a[(n = e.stackKey)] && (a[n] = h++),
                      (i = a[n]))
                    : !1 !== r.grouping && (i = h++),
                  (e.columnIndex = i));
              });
          let l = Math.min(
              Math.abs(i.transA) *
                ((!i.brokenAxis?.hasBreaks && i.ordinal?.slope) ||
                  e.pointRange ||
                  i.closestPointRange ||
                  i.tickInterval ||
                  1),
              i.len
            ),
            d = l * e.groupPadding,
            c = (l - 2 * d) / (h || 1),
            p = Math.min(
              e.maxPointWidth || i.len,
              nZ(e.pointWidth, c * (1 - 2 * e.pointPadding))
            ),
            g = (t.columnIndex || 0) + (r ? 1 : 0);
          return (
            (t.columnMetrics = {
              width: p,
              offset: (c - p) / 2 + (d + g * c - l / 2) * (r ? -1 : 1),
              paddedWidth: c,
              columnCount: h,
            }),
            t.columnMetrics
          );
        }
        crispCol(t, e, i, s) {
          let o = this.borderWidth,
            r = this.chart.inverted;
          return (
            (s = nY(e + s, o, r) - (e = nY(e, o, r))),
            this.options.crisp && (i = nY(t + i, o) - (t = nY(t, o))),
            { x: t, y: e, width: i, height: s }
          );
        }
        adjustForMissingColumns(t, e, i, s) {
          if (!i.isNull && s.columnCount > 1) {
            let o = this.xAxis.series
                .filter((t) => t.visible)
                .map((t) => t.index),
              r = 0,
              a = 0;
            nK(this.xAxis.stacking?.stacks, (t) => {
              let e =
                  "number" == typeof i.x ? t[i.x.toString()]?.points : void 0,
                s = e?.[this.index],
                n = {};
              if (e && nV(s)) {
                let t = this.index,
                  i = Object.keys(e)
                    .filter((t) => !t.match(",") && e[t] && e[t].length > 1)
                    .map(parseFloat)
                    .filter((t) => -1 !== o.indexOf(t))
                    .filter((e) => {
                      let i = this.chart.series[e].options,
                        s = i.stacking && i.stack;
                      if (nj(s)) {
                        if (n_(n[s])) return t === e && (t = n[s]), !1;
                        n[s] = e;
                      }
                      return !0;
                    })
                    .sort((t, e) => e - t);
                (r = i.indexOf(t)), (a = i.length);
              }
            }),
              (r = this.xAxis.reversed ? a - 1 - r : r);
            let n = (a - 1) * s.paddedWidth + e;
            t = (i.plotX || 0) + n / 2 - e - r * s.paddedWidth;
          }
          return t;
        }
        translate() {
          let t = this,
            e = t.chart,
            i = t.options,
            s = (t.dense = t.closestPointRange * t.xAxis.transA < 2),
            o = (t.borderWidth = nZ(i.borderWidth, s ? 0 : 1)),
            r = t.xAxis,
            a = t.yAxis,
            n = i.threshold,
            h = nZ(i.minPointLength, 5),
            l = t.getColumnMetrics(),
            d = l.width,
            c = (t.pointXOffset = l.offset),
            p = t.dataMin,
            g = t.dataMax,
            u = (t.translatedThreshold = a.getThreshold(n)),
            f = (t.barW = Math.max(d, 1 + 2 * o));
          i.pointPadding && i.crisp && (f = Math.ceil(f)),
            rY.prototype.translate.apply(t),
            t.points.forEach(function (s) {
              let o = nZ(s.yBottom, u),
                m = 999 + Math.abs(o),
                x = s.plotX || 0,
                y = nG(s.plotY, -m, a.len + m),
                b,
                v = Math.min(y, o),
                k = Math.max(y, o) - v,
                w = d,
                M = x + c,
                S = f;
              h &&
                Math.abs(k) < h &&
                ((k = h),
                (b =
                  (!a.reversed && !s.negative) || (a.reversed && s.negative)),
                n_(n) &&
                  n_(g) &&
                  s.y === n &&
                  g <= n &&
                  (a.min || 0) < n &&
                  (p !== g || (a.max || 0) <= n) &&
                  ((b = !b), (s.negative = !s.negative)),
                (v = Math.abs(v - u) > h ? o - h : u - (b ? h : 0))),
                nj(s.options.pointWidth) &&
                  (M -= Math.round(
                    ((w = S = Math.ceil(s.options.pointWidth)) - d) / 2
                  )),
                i.centerInCategory &&
                  (M = t.adjustForMissingColumns(M, w, s, l)),
                (s.barX = M),
                (s.pointWidth = w),
                (s.tooltipPos = e.inverted
                  ? [
                      nG(
                        a.len + a.pos - e.plotLeft - y,
                        a.pos - e.plotLeft,
                        a.len + a.pos - e.plotLeft
                      ),
                      r.len + r.pos - e.plotTop - M - S / 2,
                      k,
                    ]
                  : [
                      r.left - e.plotLeft + M + S / 2,
                      nG(
                        y + a.pos - e.plotTop,
                        a.pos - e.plotTop,
                        a.len + a.pos - e.plotTop
                      ),
                      k,
                    ]),
                (s.shapeType =
                  t.pointClass.prototype.shapeType || "roundedRect"),
                (s.shapeArgs = t.crispCol(
                  M,
                  s.isNull ? u : v,
                  S,
                  s.isNull ? 0 : k
                ));
            }),
            n$(this, "afterColumnTranslate");
        }
        drawGraph() {
          this.group[this.dense ? "addClass" : "removeClass"](
            "highcharts-dense-data"
          );
        }
        pointAttribs(t, e) {
          let i = this.options,
            s = this.pointAttrToOptions || {},
            o = s.stroke || "borderColor",
            r = s["stroke-width"] || "borderWidth",
            a,
            n,
            h,
            l = (t && t.color) || this.color,
            d = (t && t[o]) || i[o] || l,
            c = (t && t.options.dashStyle) || i.dashStyle,
            p = (t && t[r]) || i[r] || this[r] || 0,
            g = nZ(t && t.opacity, i.opacity, 1);
          t &&
            this.zones.length &&
            ((n = t.getZone()),
            (l =
              t.options.color ||
              (n && (n.color || t.nonZonedColor)) ||
              this.color),
            n &&
              ((d = n.borderColor || d),
              (c = n.dashStyle || c),
              (p = n.borderWidth || p))),
            e &&
              t &&
              ((h = (a = nq(
                i.states[e],
                (t.options.states && t.options.states[e]) || {}
              )).brightness),
              (l =
                a.color ||
                (void 0 !== h && nX(l).brighten(a.brightness).get()) ||
                l),
              (d = a[o] || d),
              (p = a[r] || p),
              (c = a.dashStyle || c),
              (g = nZ(a.opacity, g)));
          let u = { fill: l, stroke: d, "stroke-width": p, opacity: g };
          return c && (u.dashstyle = c), u;
        }
        drawPoints(t = this.points) {
          let e;
          let i = this,
            s = this.chart,
            o = i.options,
            r = s.renderer,
            a = o.animationLimit || 250;
          t.forEach(function (t) {
            let n = t.plotY,
              h = t.graphic,
              l = !!h,
              d = h && s.pointCount < a ? "animate" : "attr";
            n_(n) && null !== t.y
              ? ((e = t.shapeArgs),
                h && t.hasNewShapeType() && (h = h.destroy()),
                i.enabledDataSorting &&
                  (t.startXPos = i.xAxis.reversed
                    ? -((e && e.width) || 0)
                    : i.xAxis.width),
                !h &&
                  ((t.graphic = h = r[t.shapeType](e).add(t.group || i.group)),
                  h &&
                    i.enabledDataSorting &&
                    s.hasRendered &&
                    s.pointCount < a &&
                    (h.attr({ x: t.startXPos }), (l = !0), (d = "animate"))),
                h && l && h[d](nq(e)),
                s.styledMode ||
                  h[d](i.pointAttribs(t, t.selected && "select")).shadow(
                    !1 !== t.allowShadow && o.shadow
                  ),
                h &&
                  (h.addClass(t.getClassName(), !0),
                  h.attr({ visibility: t.visible ? "inherit" : "hidden" })))
              : h && (t.graphic = h.destroy());
          });
        }
        drawTracker(t = this.points) {
          let e;
          let i = this,
            s = i.chart,
            o = s.pointer,
            r = function (t) {
              o?.normalize(t);
              let e = o?.getPointFromEvent(t),
                r =
                  !s.scrollablePlotArea ||
                  s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, {
                    visiblePlotOnly: !0,
                  });
              o &&
                e &&
                i.options.enableMouseTracking &&
                r &&
                ((o.isDirectTouch = !0), e.onMouseOver(t));
            };
          t.forEach(function (t) {
            (e = nV(t.dataLabels)
              ? t.dataLabels
              : t.dataLabel
              ? [t.dataLabel]
              : []),
              t.graphic && (t.graphic.element.point = t),
              e.forEach(function (e) {
                (e.div || e.element).point = t;
              });
          }),
            i._hasTracking ||
              (i.trackerGroups.forEach(function (t) {
                i[t] &&
                  (i[t]
                    .addClass("highcharts-tracker")
                    .on("mouseover", r)
                    .on("mouseout", function (t) {
                      o?.onTrackerMouseOut(t);
                    })
                    .on("touchstart", r),
                  !s.styledMode &&
                    i.options.cursor &&
                    i[t].css({ cursor: i.options.cursor }));
              }),
              (i._hasTracking = !0)),
            n$(this, "afterDrawTracker");
        }
        remove() {
          let t = this,
            e = t.chart;
          e.hasRendered &&
            e.series.forEach(function (e) {
              e.type === t.type && (e.isDirty = !0);
            }),
            rY.prototype.remove.apply(t, arguments);
        }
      }
      (nJ.defaultOptions = nq(rY.defaultOptions, {
        borderRadius: 3,
        centerInCategory: !1,
        groupPadding: 0.2,
        marker: null,
        pointPadding: 0.1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
          hover: { halo: !1, brightness: 0.1 },
          select: { color: "#cccccc", borderColor: "#000000" },
        },
        dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 },
        startFromThreshold: !0,
        stickyTracking: !1,
        tooltip: { distance: 6 },
        threshold: 0,
        borderColor: "#ffffff",
      })),
        nU(nJ.prototype, {
          directTouch: !0,
          getSymbol: nF,
          negStacks: !0,
          trackerGroups: ["group", "dataLabelsGroup"],
        }),
        rd.registerSeriesType("column", nJ);
      let nQ = nJ,
        { getDeferredAnimation: n0 } = tR,
        { format: n1 } = eo,
        {
          defined: n2,
          extend: n3,
          fireEvent: n5,
          getAlignFactor: n6,
          isArray: n9,
          isString: n4,
          merge: n8,
          objectEach: n7,
          pick: ht,
          pInt: he,
          splat: hi,
        } = $;
      !(function (t) {
        function e() {
          return h(this).some((t) => t?.enabled);
        }
        function i(t, e, i, s, o) {
          let { chart: r, enabledDataSorting: a } = this,
            n = this.isCartesian && r.inverted,
            h = t.plotX,
            l = t.plotY,
            d = i.rotation || 0,
            c =
              n2(h) &&
              n2(l) &&
              r.isInsidePlot(h, Math.round(l), {
                inverted: n,
                paneCoordinates: !0,
                series: this,
              }),
            p = 0 === d && "justify" === ht(i.overflow, a ? "none" : "justify"),
            g =
              this.visible &&
              !1 !== t.visible &&
              n2(h) &&
              (t.series.forceDL ||
                (a && !p) ||
                c ||
                (ht(i.inside, !!this.options.stacking) &&
                  s &&
                  r.isInsidePlot(h, n ? s.x + 1 : s.y + s.height - 1, {
                    inverted: n,
                    paneCoordinates: !0,
                    series: this,
                  }))),
            u = t.pos();
          if (g && u) {
            var f;
            let h = e.getBBox(),
              l = e.getBBox(void 0, 0);
            if (
              ((s = n3(
                { x: u[0], y: Math.round(u[1]), width: 0, height: 0 },
                s || {}
              )),
              "plotEdges" === i.alignTo &&
                this.isCartesian &&
                ((s[n ? "x" : "y"] = 0),
                (s[n ? "width" : "height"] = this.yAxis?.len || 0)),
              n3(i, { width: h.width, height: h.height }),
              (f = s),
              a && this.xAxis && !p && this.setDataLabelStartPos(t, e, o, c, f),
              e.align(n8(i, { width: l.width, height: l.height }), !1, s, !1),
              (e.alignAttr.x += n6(i.align) * (l.width - h.width)),
              (e.alignAttr.y += n6(i.verticalAlign) * (l.height - h.height)),
              e[e.placed ? "animate" : "attr"]({
                "text-align": e.alignAttr["text-align"] || "center",
                x: e.alignAttr.x + (h.width - l.width) / 2,
                y: e.alignAttr.y + (h.height - l.height) / 2,
                rotationOriginX: (e.width || 0) / 2,
                rotationOriginY: (e.height || 0) / 2,
              }),
              p && s.height >= 0)
            )
              this.justifyDataLabel(e, i, e.alignAttr, h, s, o);
            else if (ht(i.crop, !0)) {
              let { x: t, y: i } = e.alignAttr;
              g =
                r.isInsidePlot(t, i, { paneCoordinates: !0, series: this }) &&
                r.isInsidePlot(t + h.width - 1, i + h.height - 1, {
                  paneCoordinates: !0,
                  series: this,
                });
            }
            i.shape &&
              !d &&
              e[o ? "attr" : "animate"]({ anchorX: u[0], anchorY: u[1] });
          }
          o && a && (e.placed = !1),
            g || (a && !p)
              ? (e.show(), (e.placed = !0))
              : (e.hide(), (e.placed = !1));
        }
        function s() {
          return this.plotGroup(
            "dataLabelsGroup",
            "data-labels",
            this.hasRendered ? "inherit" : "hidden",
            this.options.dataLabels.zIndex || 6
          );
        }
        function o(t) {
          let e = this.hasRendered || 0,
            i = this.initDataLabelsGroup().attr({ opacity: +e });
          return (
            !e &&
              i &&
              (this.visible && i.show(),
              this.options.animation
                ? i.animate({ opacity: 1 }, t)
                : i.attr({ opacity: 1 })),
            i
          );
        }
        function r(t) {
          let e;
          t = t || this.points;
          let i = this,
            s = i.chart,
            o = i.options,
            r = s.renderer,
            { backgroundColor: a, plotBackgroundColor: l } = s.options.chart,
            d = r.getContrast((n4(l) && l) || (n4(a) && a) || "#000000"),
            c = h(i),
            { animation: p, defer: g } = c[0],
            u = g ? n0(s, p, i) : { defer: 0, duration: 0 };
          n5(this, "drawDataLabels"),
            i.hasDataLabels?.() &&
              ((e = this.initDataLabels(u)),
              t.forEach((t) => {
                let a = t.dataLabels || [];
                hi(n(c, t.dlOptions || t.options?.dataLabels)).forEach(
                  (n, h) => {
                    let l =
                        n.enabled &&
                        (t.visible || t.dataLabelOnHidden) &&
                        (!t.isNull || t.dataLabelOnNull) &&
                        (function (t, e) {
                          let i = e.filter;
                          if (i) {
                            let e = i.operator,
                              s = t[i.property],
                              o = i.value;
                            return (
                              (">" === e && s > o) ||
                              ("<" === e && s < o) ||
                              (">=" === e && s >= o) ||
                              ("<=" === e && s <= o) ||
                              ("==" === e && s == o) ||
                              ("===" === e && s === o) ||
                              ("!=" === e && s != o) ||
                              ("!==" === e && s !== o)
                            );
                          }
                          return !0;
                        })(t, n),
                      {
                        backgroundColor: c,
                        borderColor: p,
                        distance: g,
                        style: u = {},
                      } = n,
                      f,
                      m,
                      x,
                      y = {},
                      b = a[h],
                      v = !b,
                      k;
                    l &&
                      ((m = n2((f = ht(n[t.formatPrefix + "Format"], n.format)))
                        ? n1(f, t, s)
                        : (n[t.formatPrefix + "Formatter"] || n.formatter).call(
                            t,
                            n
                          )),
                      (x = n.rotation),
                      !s.styledMode &&
                        ((u.color = ht(
                          n.color,
                          u.color,
                          n4(i.color) ? i.color : void 0,
                          "#000000"
                        )),
                        "contrast" === u.color
                          ? ("none" !== c && (k = c),
                            (t.contrastColor = r.getContrast(
                              ("auto" !== k && k) || t.color || i.color
                            )),
                            (u.color =
                              k ||
                              (!n2(g) && n.inside) ||
                              0 > he(g || 0) ||
                              o.stacking
                                ? t.contrastColor
                                : d))
                          : delete t.contrastColor,
                        o.cursor && (u.cursor = o.cursor)),
                      (y = {
                        r: n.borderRadius || 0,
                        rotation: x,
                        padding: n.padding,
                        zIndex: 1,
                      }),
                      s.styledMode ||
                        ((y.fill = "auto" === c ? t.color : c),
                        (y.stroke = "auto" === p ? t.color : p),
                        (y["stroke-width"] = n.borderWidth)),
                      n7(y, (t, e) => {
                        void 0 === t && delete y[e];
                      })),
                      !b ||
                        (l &&
                          n2(m) &&
                          !!b.div == !!n.useHTML &&
                          ((b.rotation && n.rotation) ||
                            b.rotation === n.rotation)) ||
                        ((b = void 0), (v = !0)),
                      l &&
                        n2(m) &&
                        (b
                          ? (y.text = m)
                          : (b = r.label(
                              m,
                              0,
                              0,
                              n.shape,
                              void 0,
                              void 0,
                              n.useHTML,
                              void 0,
                              "data-label"
                            )).addClass(
                              " highcharts-data-label-color-" +
                                t.colorIndex +
                                " " +
                                (n.className || "") +
                                (n.useHTML ? " highcharts-tracker" : "")
                            ),
                        b &&
                          ((b.options = n),
                          b.attr(y),
                          s.styledMode
                            ? u.width &&
                              b.css({
                                width: u.width,
                                textOverflow: u.textOverflow,
                                whiteSpace: u.whiteSpace,
                              })
                            : b.css(u).shadow(n.shadow),
                          n5(b, "beforeAddingDataLabel", {
                            labelOptions: n,
                            point: t,
                          }),
                          b.added || b.add(e),
                          i.alignDataLabel(t, b, n, void 0, v),
                          (b.isActive = !0),
                          a[h] && a[h] !== b && a[h].destroy(),
                          (a[h] = b)));
                  }
                );
                let h = a.length;
                for (; h--; )
                  a[h] && a[h].isActive
                    ? (a[h].isActive = !1)
                    : (a[h]?.destroy(), a.splice(h, 1));
                (t.dataLabel = a[0]), (t.dataLabels = a);
              })),
            n5(this, "afterDrawDataLabels");
        }
        function a(t, e, i, s, o, r) {
          let a = this.chart,
            n = e.align,
            h = e.verticalAlign,
            l = t.box ? 0 : t.padding || 0,
            d = a.inverted ? this.yAxis : this.xAxis,
            c = d ? d.left - a.plotLeft : 0,
            p = a.inverted ? this.xAxis : this.yAxis,
            g = p ? p.top - a.plotTop : 0,
            { x: u = 0, y: f = 0 } = e,
            m,
            x;
          return (
            (m = (i.x || 0) + l + c) < 0 &&
              ("right" === n && u >= 0
                ? ((e.align = "left"), (e.inside = !0))
                : (u -= m),
              (x = !0)),
            (m = (i.x || 0) + s.width - l + c) > a.plotWidth &&
              ("left" === n && u <= 0
                ? ((e.align = "right"), (e.inside = !0))
                : (u += a.plotWidth - m),
              (x = !0)),
            (m = i.y + l + g) < 0 &&
              ("bottom" === h && f >= 0
                ? ((e.verticalAlign = "top"), (e.inside = !0))
                : (f -= m),
              (x = !0)),
            (m = (i.y || 0) + s.height - l + g) > a.plotHeight &&
              ("top" === h && f <= 0
                ? ((e.verticalAlign = "bottom"), (e.inside = !0))
                : (f += a.plotHeight - m),
              (x = !0)),
            x && ((e.x = u), (e.y = f), (t.placed = !r), t.align(e, void 0, o)),
            x
          );
        }
        function n(t, e) {
          let i = [],
            s;
          if (n9(t) && !n9(e))
            i = t.map(function (t) {
              return n8(t, e);
            });
          else if (n9(e) && !n9(t))
            i = e.map(function (e) {
              return n8(t, e);
            });
          else if (n9(t) || n9(e)) {
            if (n9(t) && n9(e))
              for (s = Math.max(t.length, e.length); s--; )
                i[s] = n8(t[s], e[s]);
          } else i = n8(t, e);
          return i;
        }
        function h(t) {
          let e = t.chart.options.plotOptions;
          return hi(
            n(
              n(e?.series?.dataLabels, e?.[t.type]?.dataLabels),
              t.options.dataLabels
            )
          );
        }
        function l(t, e, i, s, o) {
          let r = this.chart,
            a = r.inverted,
            n = this.xAxis,
            h = n.reversed,
            l = ((a ? e.height : e.width) || 0) / 2,
            d = t.pointWidth,
            c = d ? d / 2 : 0;
          (e.startXPos = a ? o.x : h ? -l - c : n.width - l + c),
            (e.startYPos = a ? (h ? this.yAxis.height - l + c : -l - c) : o.y),
            s
              ? "hidden" === e.visibility &&
                (e.show(), e.attr({ opacity: 0 }).animate({ opacity: 1 }))
              : e.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, e.hide),
            r.hasRendered &&
              (i && e.attr({ x: e.startXPos, y: e.startYPos }),
              (e.placed = !0));
        }
        t.compose = function (t) {
          let n = t.prototype;
          n.initDataLabels ||
            ((n.initDataLabels = o),
            (n.initDataLabelsGroup = s),
            (n.alignDataLabel = i),
            (n.drawDataLabels = r),
            (n.justifyDataLabel = a),
            (n.setDataLabelStartPos = l),
            (n.hasDataLabels = e));
        };
      })(g || (g = {}));
      let hs = g,
        { composed: ho } = k,
        { series: hr } = rd,
        { merge: ha, pick: hn, pushUnique: hh } = $;
      !(function (t) {
        function e(t, e, i, s, o) {
          let r = this.chart.inverted,
            a = t.series,
            n = (a.xAxis ? a.xAxis.len : this.chart.plotSizeX) || 0,
            h = (a.yAxis ? a.yAxis.len : this.chart.plotSizeY) || 0,
            l = t.dlBox || t.shapeArgs,
            d = hn(t.below, t.plotY > hn(this.translatedThreshold, h)),
            c = hn(i.inside, !!this.options.stacking);
          if (l) {
            if (((s = ha(l)), !("allow" === i.overflow && !1 === i.crop))) {
              s.y < 0 && ((s.height += s.y), (s.y = 0));
              let t = s.y + s.height - h;
              t > 0 && t < s.height - 1 && (s.height -= t);
            }
            r &&
              (s = {
                x: h - s.y - s.height,
                y: n - s.x - s.width,
                width: s.height,
                height: s.width,
              }),
              c ||
                (r
                  ? ((s.x += d ? 0 : s.width), (s.width = 0))
                  : ((s.y += d ? s.height : 0), (s.height = 0)));
          }
          (i.align = hn(i.align, !r || c ? "center" : d ? "right" : "left")),
            (i.verticalAlign = hn(
              i.verticalAlign,
              r || c ? "middle" : d ? "top" : "bottom"
            )),
            hr.prototype.alignDataLabel.call(this, t, e, i, s, o),
            i.inside && t.contrastColor && e.css({ color: t.contrastColor });
        }
        t.compose = function (t) {
          hs.compose(hr),
            hh(ho, "ColumnDataLabel") && (t.prototype.alignDataLabel = e);
        };
      })(u || (u = {}));
      let hl = u,
        { extend: hd, merge: hc } = $;
      class hp extends nQ {}
      (hp.defaultOptions = hc(nQ.defaultOptions, {})),
        hd(hp.prototype, { inverted: !0 }),
        rd.registerSeriesType("bar", hp);
      let { column: hg, line: hu } = rd.seriesTypes,
        { addEvent: hf, extend: hm, merge: hx } = $;
      class hy extends hu {
        applyJitter() {
          let t = this,
            e = this.options.jitter,
            i = this.points.length;
          e &&
            this.points.forEach(function (s, o) {
              ["x", "y"].forEach(function (r, a) {
                if (e[r] && !s.isNull) {
                  let n = `plot${r.toUpperCase()}`,
                    h = t[`${r}Axis`],
                    l = e[r] * h.transA;
                  if (h && !h.logarithmic) {
                    let t = Math.max(0, (s[n] || 0) - l),
                      e = Math.min(h.len, (s[n] || 0) + l);
                    (s[n] =
                      t +
                      (e - t) *
                        (function (t) {
                          let e = 1e4 * Math.sin(t);
                          return e - Math.floor(e);
                        })(o + a * i)),
                      "x" === r && (s.clientX = s.plotX);
                  }
                }
              });
            });
        }
        drawGraph() {
          this.options.lineWidth
            ? super.drawGraph()
            : this.graph && (this.graph = this.graph.destroy());
        }
      }
      (hy.defaultOptions = hx(hu.defaultOptions, {
        lineWidth: 0,
        findNearestPointBy: "xy",
        jitter: { x: 0, y: 0 },
        marker: { enabled: !0 },
        tooltip: {
          headerFormat:
            '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>',
          pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",
        },
      })),
        hm(hy.prototype, {
          drawTracker: hg.prototype.drawTracker,
          sorted: !1,
          requireSorting: !1,
          noSharedTooltip: !0,
          trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
        }),
        hf(hy, "afterTranslate", function () {
          this.applyJitter();
        }),
        rd.registerSeriesType("scatter", hy);
      let { deg2rad: hb } = k,
        { fireEvent: hv, isNumber: hk, pick: hw, relativeLength: hM } = $;
      !(function (t) {
        (t.getCenter = function () {
          let t = this.options,
            e = this.chart,
            i = 2 * (t.slicedOffset || 0),
            s = e.plotWidth - 2 * i,
            o = e.plotHeight - 2 * i,
            r = t.center,
            a = Math.min(s, o),
            n = t.thickness,
            h,
            l = t.size,
            d = t.innerSize || 0,
            c,
            p;
          "string" == typeof l && (l = parseFloat(l)),
            "string" == typeof d && (d = parseFloat(d));
          let g = [
            hw(r?.[0], "50%"),
            hw(r?.[1], "50%"),
            hw(l && l < 0 ? void 0 : t.size, "100%"),
            hw(d && d < 0 ? void 0 : t.innerSize || 0, "0%"),
          ];
          for (
            !e.angular || this instanceof rY || (g[3] = 0), c = 0;
            c < 4;
            ++c
          )
            (p = g[c]),
              (h = c < 2 || (2 === c && /%$/.test(p))),
              (g[c] = hM(p, [s, o, a, g[2]][c]) + (h ? i : 0));
          return (
            g[3] > g[2] && (g[3] = g[2]),
            hk(n) && 2 * n < g[2] && n > 0 && (g[3] = g[2] - 2 * n),
            hv(this, "afterGetCenter", { positions: g }),
            g
          );
        }),
          (t.getStartAndEndRadians = function (t, e) {
            let i = hk(t) ? t : 0,
              s = hk(e) && e > i && e - i < 360 ? e : i + 360;
            return { start: hb * (i + -90), end: hb * (s + -90) };
          });
      })(f || (f = {}));
      let hS = f,
        { setAnimation: hT } = tR,
        {
          addEvent: hC,
          defined: hA,
          extend: hP,
          isNumber: hL,
          pick: hO,
          relativeLength: hE,
        } = $;
      class hI extends oF {
        getConnectorPath(t) {
          let e = t.dataLabelPosition,
            i = t.options || {},
            s = i.connectorShape,
            o = this.connectorShapes[s] || s;
          return (
            (e &&
              o.call(
                this,
                { ...e.computed, alignment: e.alignment },
                e.connectorPosition,
                i
              )) ||
            []
          );
        }
        getTranslate() {
          return (
            (this.sliced && this.slicedTranslation) || {
              translateX: 0,
              translateY: 0,
            }
          );
        }
        haloPath(t) {
          let e = this.shapeArgs;
          return this.sliced || !this.visible
            ? []
            : this.series.chart.renderer.symbols.arc(
                e.x,
                e.y,
                e.r + t,
                e.r + t,
                {
                  innerR: e.r - 1,
                  start: e.start,
                  end: e.end,
                  borderRadius: e.borderRadius,
                }
              );
        }
        constructor(t, e, i) {
          super(t, e, i), (this.half = 0), this.name ?? (this.name = "Slice");
          let s = (t) => {
            this.slice("select" === t.type);
          };
          hC(this, "select", s), hC(this, "unselect", s);
        }
        isValid() {
          return hL(this.y) && this.y >= 0;
        }
        setVisible(t, e = !0) {
          t !== this.visible &&
            this.update({ visible: t ?? !this.visible }, e, void 0, !1);
        }
        slice(t, e, i) {
          let s = this.series;
          hT(i, s.chart),
            (e = hO(e, !0)),
            (this.sliced = this.options.sliced = t = hA(t) ? t : !this.sliced),
            (s.options.data[s.data.indexOf(this)] = this.options),
            this.graphic && this.graphic.animate(this.getTranslate());
        }
      }
      hP(hI.prototype, {
        connectorShapes: {
          fixedOffset: function (t, e, i) {
            let s = e.breakAt,
              o = e.touchingSliceAt,
              r = i.softConnector
                ? [
                    "C",
                    t.x + ("left" === t.alignment ? -5 : 5),
                    t.y,
                    2 * s.x - o.x,
                    2 * s.y - o.y,
                    s.x,
                    s.y,
                  ]
                : ["L", s.x, s.y];
            return [["M", t.x, t.y], r, ["L", o.x, o.y]];
          },
          straight: function (t, e) {
            let i = e.touchingSliceAt;
            return [
              ["M", t.x, t.y],
              ["L", i.x, i.y],
            ];
          },
          crookedLine: function (t, e, i) {
            let {
                angle: s = this.angle || 0,
                breakAt: o,
                touchingSliceAt: r,
              } = e,
              { series: a } = this,
              [n, h, l] = a.center,
              d = l / 2,
              { plotLeft: c, plotWidth: p } = a.chart,
              g = "left" === t.alignment,
              { x: u, y: f } = t,
              m = o.x;
            if (i.crookDistance) {
              let t = hE(i.crookDistance, 1);
              m = g ? n + d + (p + c - n - d) * (1 - t) : c + (n - d) * t;
            } else m = n + (h - f) * Math.tan(s - Math.PI / 2);
            let x = [["M", u, f]];
            return (
              (g ? m <= u && m >= o.x : m >= u && m <= o.x) &&
                x.push(["L", m, f]),
              x.push(["L", o.x, o.y], ["L", r.x, r.y]),
              x
            );
          },
        },
      });
      let { getStartAndEndRadians: hD } = hS,
        { noop: hB } = k,
        { clamp: hN, extend: hz, fireEvent: hR, merge: hW, pick: hH } = $;
      class hX extends rY {
        animate(t) {
          let e = this,
            i = e.points,
            s = e.startAngleRad;
          t ||
            i.forEach(function (t) {
              let i = t.graphic,
                o = t.shapeArgs;
              i &&
                o &&
                (i.attr({
                  r: hH(t.startR, e.center && e.center[3] / 2),
                  start: s,
                  end: s,
                }),
                i.animate(
                  { r: o.r, start: o.start, end: o.end },
                  e.options.animation
                ));
            });
        }
        drawEmpty() {
          let t, e;
          let i = this.startAngleRad,
            s = this.endAngleRad,
            o = this.options;
          0 === this.total && this.center
            ? ((t = this.center[0]),
              (e = this.center[1]),
              this.graph ||
                (this.graph = this.chart.renderer
                  .arc(t, e, this.center[1] / 2, 0, i, s)
                  .addClass("highcharts-empty-series")
                  .add(this.group)),
              this.graph.attr({
                d: e6.arc(t, e, this.center[2] / 2, 0, {
                  start: i,
                  end: s,
                  innerR: this.center[3] / 2,
                }),
              }),
              this.chart.styledMode ||
                this.graph.attr({
                  "stroke-width": o.borderWidth,
                  fill: o.fillColor || "none",
                  stroke: o.color || "#cccccc",
                }))
            : this.graph && (this.graph = this.graph.destroy());
        }
        drawPoints() {
          let t = this.chart.renderer;
          this.points.forEach(function (e) {
            e.graphic &&
              e.hasNewShapeType() &&
              (e.graphic = e.graphic.destroy()),
              e.graphic ||
                ((e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group)),
                (e.delayedRendering = !0));
          });
        }
        generatePoints() {
          super.generatePoints(), this.updateTotals();
        }
        getX(t, e, i, s) {
          let o = this.center,
            r = this.radii ? this.radii[i.index] || 0 : o[2] / 2,
            a = s.dataLabelPosition,
            n = a?.distance || 0,
            h = Math.asin(hN((t - o[1]) / (r + n), -1, 1));
          return (
            o[0] +
            Math.cos(h) * (r + n) * (e ? -1 : 1) +
            (n > 0 ? (e ? -1 : 1) * (s.padding || 0) : 0)
          );
        }
        hasData() {
          return !!this.dataTable.rowCount;
        }
        redrawPoints() {
          let t, e, i, s;
          let o = this,
            r = o.chart;
          this.drawEmpty(),
            o.group && !r.styledMode && o.group.shadow(o.options.shadow),
            o.points.forEach(function (a) {
              let n = {};
              (e = a.graphic),
                !a.isNull && e
                  ? ((s = a.shapeArgs),
                    (t = a.getTranslate()),
                    r.styledMode ||
                      (i = o.pointAttribs(a, a.selected && "select")),
                    a.delayedRendering
                      ? (e.setRadialReference(o.center).attr(s).attr(t),
                        r.styledMode ||
                          e.attr(i).attr({ "stroke-linejoin": "round" }),
                        (a.delayedRendering = !1))
                      : (e.setRadialReference(o.center),
                        r.styledMode || hW(!0, n, i),
                        hW(!0, n, s, t),
                        e.animate(n)),
                    e.attr({ visibility: a.visible ? "inherit" : "hidden" }),
                    e.addClass(a.getClassName(), !0))
                  : e && (a.graphic = e.destroy());
            });
        }
        sortByAngle(t, e) {
          t.sort(function (t, i) {
            return void 0 !== t.angle && (i.angle - t.angle) * e;
          });
        }
        translate(t) {
          hR(this, "translate"), this.generatePoints();
          let e = this.options,
            i = e.slicedOffset,
            s = hD(e.startAngle, e.endAngle),
            o = (this.startAngleRad = s.start),
            r = (this.endAngleRad = s.end) - o,
            a = this.points,
            n = e.ignoreHiddenPoint,
            h = a.length,
            l,
            d,
            c,
            p,
            g,
            u,
            f,
            m = 0;
          for (t || (this.center = t = this.getCenter()), u = 0; u < h; u++) {
            (f = a[u]),
              (l = o + m * r),
              f.isValid() && (!n || f.visible) && (m += f.percentage / 100),
              (d = o + m * r);
            let e = {
              x: t[0],
              y: t[1],
              r: t[2] / 2,
              innerR: t[3] / 2,
              start: Math.round(1e3 * l) / 1e3,
              end: Math.round(1e3 * d) / 1e3,
            };
            (f.shapeType = "arc"),
              (f.shapeArgs = e),
              (c = (d + l) / 2) > 1.5 * Math.PI
                ? (c -= 2 * Math.PI)
                : c < -Math.PI / 2 && (c += 2 * Math.PI),
              (f.slicedTranslation = {
                translateX: Math.round(Math.cos(c) * i),
                translateY: Math.round(Math.sin(c) * i),
              }),
              (p = (Math.cos(c) * t[2]) / 2),
              (g = (Math.sin(c) * t[2]) / 2),
              (f.tooltipPos = [t[0] + 0.7 * p, t[1] + 0.7 * g]),
              (f.half = c < -Math.PI / 2 || c > Math.PI / 2 ? 1 : 0),
              (f.angle = c);
          }
          hR(this, "afterTranslate");
        }
        updateTotals() {
          let t = this.points,
            e = t.length,
            i = this.options.ignoreHiddenPoint,
            s,
            o,
            r = 0;
          for (s = 0; s < e; s++)
            (o = t[s]).isValid() && (!i || o.visible) && (r += o.y);
          for (s = 0, this.total = r; s < e; s++)
            ((o = t[s]).percentage =
              r > 0 && (o.visible || !i) ? (o.y / r) * 100 : 0),
              (o.total = r);
        }
      }
      (hX.defaultOptions = hW(rY.defaultOptions, {
        borderRadius: 3,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
          connectorPadding: 5,
          connectorShape: "crookedLine",
          crookDistance: void 0,
          distance: 30,
          enabled: !0,
          formatter: function () {
            return this.isNull ? void 0 : this.name;
          },
          softConnector: !0,
          x: 0,
        },
        fillColor: void 0,
        ignoreHiddenPoint: !0,
        inactiveOtherPoints: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        stickyTracking: !1,
        tooltip: { followPointer: !0 },
        borderColor: "#ffffff",
        borderWidth: 1,
        lineWidth: void 0,
        states: { hover: { brightness: 0.1 } },
      })),
        hz(hX.prototype, {
          axisTypes: [],
          directTouch: !0,
          drawGraph: void 0,
          drawTracker: nQ.prototype.drawTracker,
          getCenter: hS.getCenter,
          getSymbol: hB,
          invertible: !1,
          isCartesian: !1,
          noSharedTooltip: !0,
          pointAttribs: nQ.prototype.pointAttribs,
          pointClass: hI,
          requireSorting: !1,
          searchPoint: hB,
          trackerGroups: ["group", "dataLabelsGroup"],
        }),
        rd.registerSeriesType("pie", hX);
      let { composed: hF, noop: hG } = k,
        { distribute: hY } = ed,
        { series: hj } = rd,
        {
          arrayMax: hU,
          clamp: h$,
          defined: hV,
          pick: h_,
          pushUnique: hq,
          relativeLength: hZ,
        } = $;
      !(function (t) {
        let e = {
          radialDistributionY: function (t, e) {
            return (e.dataLabelPosition?.top || 0) + t.distributeBox.pos;
          },
          radialDistributionX: function (t, e, i, s, o) {
            let r = o.dataLabelPosition;
            return t.getX(
              i < (r?.top || 0) + 2 || i > (r?.bottom || 0) - 2 ? s : i,
              e.half,
              e,
              o
            );
          },
          justify: function (t, e, i, s) {
            return (
              s[0] +
              (t.half ? -1 : 1) * (i + (e.dataLabelPosition?.distance || 0))
            );
          },
          alignToPlotEdges: function (t, e, i, s) {
            let o = t.getBBox().width;
            return e ? o + s : i - o - s;
          },
          alignToConnectors: function (t, e, i, s) {
            let o = 0,
              r;
            return (
              t.forEach(function (t) {
                (r = t.dataLabel.getBBox().width) > o && (o = r);
              }),
              e ? o + s : i - o - s
            );
          },
        };
        function i(t, e) {
          let i = Math.PI / 2,
            { start: s = 0, end: o = 0 } = t.shapeArgs || {},
            r = t.angle || 0;
          e > 0 &&
            s < i &&
            o > i &&
            r > i / 2 &&
            r < 1.5 * i &&
            (r =
              r <= i
                ? Math.max(i / 2, (s + i) / 2)
                : Math.min(1.5 * i, (i + o) / 2));
          let { center: a, options: n } = this,
            h = a[2] / 2,
            l = Math.cos(r),
            d = Math.sin(r),
            c = a[0] + l * h,
            p = a[1] + d * h,
            g = Math.min((n.slicedOffset || 0) + (n.borderWidth || 0), e / 5);
          return {
            natural: { x: c + l * e, y: p + d * e },
            computed: {},
            alignment: e < 0 ? "center" : t.half ? "right" : "left",
            connectorPosition: {
              angle: r,
              breakAt: { x: c + l * g, y: p + d * g },
              touchingSliceAt: { x: c, y: p },
            },
            distance: e,
          };
        }
        function s() {
          let t = this,
            e = t.points,
            i = t.chart,
            s = i.plotWidth,
            o = i.plotHeight,
            r = i.plotLeft,
            a = Math.round(i.chartWidth / 3),
            n = t.center,
            h = n[2] / 2,
            l = n[1],
            d = [[], []],
            c = [0, 0, 0, 0],
            p = t.dataLabelPositioners,
            g,
            u,
            f,
            m = 0;
          t.visible &&
            t.hasDataLabels?.() &&
            (e.forEach((t) => {
              (t.dataLabels || []).forEach((t) => {
                t.shortened &&
                  (t
                    .attr({ width: "auto" })
                    .css({ width: "auto", textOverflow: "clip" }),
                  (t.shortened = !1));
              });
            }),
            hj.prototype.drawDataLabels.apply(t),
            e.forEach((t) => {
              (t.dataLabels || []).forEach((e, i) => {
                let s = n[2] / 2,
                  o = e.options,
                  r = hZ(o?.distance || 0, s);
                0 === i && d[t.half].push(t),
                  !hV(o?.style?.width) &&
                    e.getBBox().width > a &&
                    (e.css({ width: Math.round(0.7 * a) + "px" }),
                    (e.shortened = !0)),
                  (e.dataLabelPosition = this.getDataLabelPosition(t, r)),
                  (m = Math.max(m, r));
              });
            }),
            d.forEach((e, a) => {
              let d = e.length,
                g = [],
                x,
                y,
                b = 0,
                v;
              d &&
                (t.sortByAngle(e, a - 0.5),
                m > 0 &&
                  ((x = Math.max(0, l - h - m)),
                  (y = Math.min(l + h + m, i.plotHeight)),
                  e.forEach((t) => {
                    (t.dataLabels || []).forEach((e) => {
                      let s = e.dataLabelPosition;
                      s &&
                        s.distance > 0 &&
                        ((s.top = Math.max(0, l - h - s.distance)),
                        (s.bottom = Math.min(l + h + s.distance, i.plotHeight)),
                        (b = e.getBBox().height || 21),
                        (e.lineHeight =
                          i.renderer.fontMetrics(e.text || e).h +
                          2 * e.padding),
                        (t.distributeBox = {
                          target:
                            (e.dataLabelPosition?.natural.y || 0) -
                            s.top +
                            e.lineHeight / 2,
                          size: b,
                          rank: t.y,
                        }),
                        g.push(t.distributeBox));
                    });
                  }),
                  hY(g, (v = y + b - x), v / 5)),
                e.forEach((i) => {
                  (i.dataLabels || []).forEach((l) => {
                    let d = l.options || {},
                      m = i.distributeBox,
                      x = l.dataLabelPosition,
                      y = x?.natural.y || 0,
                      b = d.connectorPadding || 0,
                      v = l.lineHeight || 21,
                      k = (v - l.getBBox().height) / 2,
                      w = 0,
                      M = y,
                      S = "inherit";
                    if (x) {
                      if (
                        (g &&
                          hV(m) &&
                          x.distance > 0 &&
                          (void 0 === m.pos
                            ? (S = "hidden")
                            : ((f = m.size),
                              (M = p.radialDistributionY(i, l)))),
                        d.justify)
                      )
                        w = p.justify(i, l, h, n);
                      else
                        switch (d.alignTo) {
                          case "connectors":
                            w = p.alignToConnectors(e, a, s, r);
                            break;
                          case "plotEdges":
                            w = p.alignToPlotEdges(l, a, s, r);
                            break;
                          default:
                            w = p.radialDistributionX(t, i, M - k, y, l);
                        }
                      if (
                        ((x.attribs = { visibility: S, align: x.alignment }),
                        (x.posAttribs = {
                          x:
                            w +
                            (d.x || 0) +
                            ({ left: b, right: -b }[x.alignment] || 0),
                          y: M + (d.y || 0) - v / 2,
                        }),
                        (x.computed.x = w),
                        (x.computed.y = M - k),
                        h_(d.crop, !0))
                      ) {
                        let t;
                        w - (u = l.getBBox().width) < b && 1 === a
                          ? ((t = Math.round(u - w + b)),
                            (c[3] = Math.max(t, c[3])))
                          : w + u > s - b &&
                            0 === a &&
                            ((t = Math.round(w + u - s + b)),
                            (c[1] = Math.max(t, c[1]))),
                          M - f / 2 < 0
                            ? (c[0] = Math.max(Math.round(-M + f / 2), c[0]))
                            : M + f / 2 > o &&
                              (c[2] = Math.max(
                                Math.round(M + f / 2 - o),
                                c[2]
                              )),
                          (x.sideOverflow = t);
                      }
                    }
                  });
                }));
            }),
            (0 === hU(c) || this.verifyDataLabelOverflow(c)) &&
              (this.placeDataLabels(),
              this.points.forEach((e) => {
                (e.dataLabels || []).forEach((s) => {
                  let { connectorColor: o, connectorWidth: r = 1 } =
                      s.options || {},
                    a = s.dataLabelPosition;
                  if (r) {
                    let n;
                    (g = s.connector),
                      a && a.distance > 0
                        ? ((n = !g),
                          g ||
                            (s.connector = g =
                              i.renderer
                                .path()
                                .addClass(
                                  "highcharts-data-label-connector  highcharts-color-" +
                                    e.colorIndex +
                                    (e.className ? " " + e.className : "")
                                )
                                .add(t.dataLabelsGroup)),
                          i.styledMode ||
                            g.attr({
                              "stroke-width": r,
                              stroke: o || e.color || "#666666",
                            }),
                          g[n ? "attr" : "animate"]({
                            d: e.getConnectorPath(s),
                          }),
                          g.attr({ visibility: a.attribs?.visibility }))
                        : g && (s.connector = g.destroy());
                  }
                });
              })));
        }
        function o() {
          this.points.forEach((t) => {
            (t.dataLabels || []).forEach((t) => {
              let e = t.dataLabelPosition;
              e
                ? (e.sideOverflow &&
                    (t.css({
                      width:
                        Math.max(t.getBBox().width - e.sideOverflow, 0) + "px",
                      textOverflow:
                        (t.options?.style || {}).textOverflow || "ellipsis",
                    }),
                    (t.shortened = !0)),
                  t.attr(e.attribs),
                  t[t.moved ? "animate" : "attr"](e.posAttribs),
                  (t.moved = !0))
                : t && t.attr({ y: -9999 });
            }),
              delete t.distributeBox;
          }, this);
        }
        function r(t) {
          let e = this.center,
            i = this.options,
            s = i.center,
            o = i.minSize || 80,
            r = o,
            a = null !== i.size;
          return (
            !a &&
              (null !== s[0]
                ? (r = Math.max(e[2] - Math.max(t[1], t[3]), o))
                : ((r = Math.max(e[2] - t[1] - t[3], o)),
                  (e[0] += (t[3] - t[1]) / 2)),
              null !== s[1]
                ? (r = h$(r, o, e[2] - Math.max(t[0], t[2])))
                : ((r = h$(r, o, e[2] - t[0] - t[2])),
                  (e[1] += (t[0] - t[2]) / 2)),
              r < e[2]
                ? ((e[2] = r),
                  (e[3] = Math.min(
                    i.thickness
                      ? Math.max(0, r - 2 * i.thickness)
                      : Math.max(0, hZ(i.innerSize || 0, r)),
                    r
                  )),
                  this.translate(e),
                  this.drawDataLabels && this.drawDataLabels())
                : (a = !0)),
            a
          );
        }
        t.compose = function (t) {
          if ((hs.compose(hj), hq(hF, "PieDataLabel"))) {
            let a = t.prototype;
            (a.dataLabelPositioners = e),
              (a.alignDataLabel = hG),
              (a.drawDataLabels = s),
              (a.getDataLabelPosition = i),
              (a.placeDataLabels = o),
              (a.verifyDataLabelOverflow = r);
          }
        };
      })(m || (m = {}));
      let hK = m;
      !(function (t) {
        (t.getCenterOfPoints = function (t) {
          let e = t.reduce((t, e) => ((t.x += e.x), (t.y += e.y), t), {
            x: 0,
            y: 0,
          });
          return { x: e.x / t.length, y: e.y / t.length };
        }),
          (t.getDistanceBetweenPoints = function (t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
          }),
          (t.getAngleBetweenPoints = function (t, e) {
            return Math.atan2(e.x - t.x, e.y - t.y);
          }),
          (t.pointInPolygon = function ({ x: t, y: e }, i) {
            let s = i.length,
              o,
              r,
              a = !1;
            for (o = 0, r = s - 1; o < s; r = o++) {
              let [s, n] = i[o],
                [h, l] = i[r];
              n > e != l > e &&
                t < ((h - s) * (e - n)) / (l - n) + s &&
                (a = !a);
            }
            return a;
          });
      })(x || (x = {}));
      let { pointInPolygon: hJ } = x,
        { addEvent: hQ, fireEvent: h0, objectEach: h1, pick: h2 } = $;
      function h3(t) {
        let e = t.length,
          i = (t, e) =>
            !(
              e.x >= t.x + t.width ||
              e.x + e.width <= t.x ||
              e.y >= t.y + t.height ||
              e.y + e.height <= t.y
            ),
          s = (t, e) => {
            for (let i of t) if (hJ({ x: i[0], y: i[1] }, e)) return !0;
            return !1;
          },
          o,
          r,
          a,
          n,
          h,
          l = !1;
        for (let i = 0; i < e; i++)
          (o = t[i]) &&
            ((o.oldOpacity = o.opacity),
            (o.newOpacity = 1),
            (o.absoluteBox = (function (t) {
              if (t && (!t.alignAttr || t.placed)) {
                let e = t.box ? 0 : t.padding || 0,
                  i = t.alignAttr || { x: t.attr("x"), y: t.attr("y") },
                  s = t.getBBox();
                return (
                  (t.width = s.width),
                  (t.height = s.height),
                  {
                    x: i.x + (t.parentGroup?.translateX || 0) + e,
                    y: i.y + (t.parentGroup?.translateY || 0) + e,
                    width: (t.width || 0) - 2 * e,
                    height: (t.height || 0) - 2 * e,
                    polygon: s?.polygon,
                  }
                );
              }
            })(o)));
        t.sort((t, e) => (e.labelrank || 0) - (t.labelrank || 0));
        for (let o = 0; o < e; ++o) {
          n = (r = t[o]) && r.absoluteBox;
          let l = n?.polygon;
          for (let d = o + 1; d < e; ++d) {
            h = (a = t[d]) && a.absoluteBox;
            let e = !1;
            if (
              n &&
              h &&
              r !== a &&
              0 !== r.newOpacity &&
              0 !== a.newOpacity &&
              "hidden" !== r.visibility &&
              "hidden" !== a.visibility
            ) {
              let t = h.polygon;
              if (
                (l && t && l !== t ? s(l, t) && (e = !0) : i(n, h) && (e = !0),
                e)
              ) {
                let t = r.labelrank < a.labelrank ? r : a,
                  e = t.text;
                (t.newOpacity = 0),
                  e?.element.querySelector("textPath") && e.hide();
              }
            }
          }
        }
        for (let e of t) h5(e, this) && (l = !0);
        l && h0(this, "afterHideAllOverlappingLabels");
      }
      function h5(t, e) {
        let i,
          s,
          o = !1;
        return (
          t &&
            ((s = t.newOpacity),
            t.oldOpacity !== s &&
              (t.hasClass("highcharts-data-label")
                ? (t[s ? "removeClass" : "addClass"](
                    "highcharts-data-label-hidden"
                  ),
                  (i = function () {
                    e.styledMode ||
                      t.css({ pointerEvents: s ? "auto" : "none" });
                  }),
                  (o = !0),
                  t[t.isOld ? "animate" : "attr"]({ opacity: s }, void 0, i),
                  h0(e, "afterHideOverlappingLabel"))
                : t.attr({ opacity: s })),
            (t.isOld = !0)),
          o
        );
      }
      function h6() {
        let t = this,
          e = [];
        for (let i of t.labelCollectors || []) e = e.concat(i());
        for (let i of t.yAxis || [])
          i.stacking &&
            i.options.stackLabels &&
            !i.options.stackLabels.allowOverlap &&
            h1(i.stacking.stacks, (t) => {
              h1(t, (t) => {
                t.label && e.push(t.label);
              });
            });
        for (let i of t.series || [])
          if (i.visible && i.hasDataLabels?.()) {
            let s = (i) => {
              for (let s of i)
                s.visible &&
                  (s.dataLabels || []).forEach((i) => {
                    let o = i.options || {};
                    (i.labelrank = h2(
                      o.labelrank,
                      s.labelrank,
                      s.shapeArgs?.height
                    )),
                      o.allowOverlap ?? Number(o.distance) > 0
                        ? ((i.oldOpacity = i.opacity),
                          (i.newOpacity = 1),
                          h5(i, t))
                        : e.push(i);
                  });
            };
            s(i.nodes || []), s(i.points);
          }
        this.hideOverlappingLabels(e);
      }
      let h9 = {
          compose: function (t) {
            let e = t.prototype;
            e.hideOverlappingLabels ||
              ((e.hideOverlappingLabels = h3), hQ(t, "render", h6));
          },
        },
        { defaultOptions: h4 } = tm,
        { noop: h8 } = k,
        {
          addEvent: h7,
          extend: lt,
          isObject: le,
          merge: li,
          relativeLength: ls,
        } = $,
        lo = { radius: 0, scope: "stack", where: void 0 },
        lr = h8,
        la = h8;
      function ln(t, e, i, s, o = {}) {
        let r = lr(t, e, i, s, o),
          { innerR: a = 0, r: n = i, start: h = 0, end: l = 0 } = o;
        if (o.open || !o.borderRadius) return r;
        let d = l - h,
          c = Math.sin(d / 2),
          p = Math.max(
            Math.min(
              ls(o.borderRadius || 0, n - a),
              (n - a) / 2,
              (n * c) / (1 + c)
            ),
            0
          ),
          g = Math.min(p, (d / Math.PI) * 2 * a),
          u = r.length - 1;
        for (; u--; )
          !(function (t, e, i) {
            let s, o, r;
            let a = t[e],
              n = t[e + 1];
            if (
              ("Z" === n[0] && (n = t[0]),
              ("M" === a[0] || "L" === a[0]) && "A" === n[0]
                ? ((s = a), (o = n), (r = !0))
                : "A" === a[0] &&
                  ("M" === n[0] || "L" === n[0]) &&
                  ((s = n), (o = a)),
              s && o && o.params)
            ) {
              let a = o[1],
                n = o[5],
                h = o.params,
                { start: l, end: d, cx: c, cy: p } = h,
                g = n ? a - i : a + i,
                u = g ? Math.asin(i / g) : 0,
                f = n ? u : -u,
                m = Math.cos(u) * g;
              r
                ? ((h.start = l + f),
                  (s[1] = c + m * Math.cos(l)),
                  (s[2] = p + m * Math.sin(l)),
                  t.splice(e + 1, 0, [
                    "A",
                    i,
                    i,
                    0,
                    0,
                    1,
                    c + a * Math.cos(h.start),
                    p + a * Math.sin(h.start),
                  ]))
                : ((h.end = d - f),
                  (o[6] = c + a * Math.cos(h.end)),
                  (o[7] = p + a * Math.sin(h.end)),
                  t.splice(e + 1, 0, [
                    "A",
                    i,
                    i,
                    0,
                    0,
                    1,
                    c + m * Math.cos(d),
                    p + m * Math.sin(d),
                  ])),
                (o[4] = Math.abs(h.end - h.start) < Math.PI ? 0 : 1);
            }
          })(r, u, u > 1 ? g : p);
        return r;
      }
      function lh() {
        if (
          this.options.borderRadius &&
          !(this.chart.is3d && this.chart.is3d())
        ) {
          let { options: t, yAxis: e } = this,
            i = "percent" === t.stacking,
            s = h4.plotOptions?.[this.type]?.borderRadius,
            o = ll(t.borderRadius, le(s) ? s : {}),
            r = e.options.reversed;
          for (let s of this.points) {
            let { shapeArgs: a } = s;
            if ("roundedRect" === s.shapeType && a) {
              let { width: n = 0, height: h = 0, y: l = 0 } = a,
                d = l,
                c = h;
              if ("stack" === o.scope && s.stackTotal) {
                let o = e.translate(i ? 100 : s.stackTotal, !1, !0, !1, !0),
                  r = e.translate(t.threshold || 0, !1, !0, !1, !0),
                  a = this.crispCol(0, Math.min(o, r), 0, Math.abs(o - r));
                (d = a.y), (c = a.height);
              }
              let p = (s.negative ? -1 : 1) * (r ? -1 : 1) == -1,
                g = o.where;
              !g &&
                this.is("waterfall") &&
                Math.abs((s.yBottom || 0) - (this.translatedThreshold || 0)) >
                  this.borderWidth &&
                (g = "all"),
                g || (g = "end");
              let u =
                Math.min(ls(o.radius, n), n / 2, "all" === g ? h / 2 : 1 / 0) ||
                0;
              "end" === g && (p && (d -= u), (c += u)),
                lt(a, { brBoxHeight: c, brBoxY: d, r: u });
            }
          }
        }
      }
      function ll(t, e) {
        return le(t) || (t = { radius: t || 0 }), li(lo, e, t);
      }
      function ld() {
        let t = ll(this.options.borderRadius);
        for (let e of this.points) {
          let i = e.shapeArgs;
          i && (i.borderRadius = ls(t.radius, (i.r || 0) - (i.innerR || 0)));
        }
      }
      function lc(t, e, i, s, o = {}) {
        let r = la(t, e, i, s, o),
          { r: a = 0, brBoxHeight: n = s, brBoxY: h = e } = o,
          l = e - h,
          d = h + n - (e + s),
          c = l - a > -0.1 ? 0 : a,
          p = d - a > -0.1 ? 0 : a,
          g = Math.max(c && l, 0),
          u = Math.max(p && d, 0),
          f = [t + c, e],
          m = [t + i - c, e],
          x = [t + i, e + c],
          y = [t + i, e + s - p],
          b = [t + i - p, e + s],
          v = [t + p, e + s],
          k = [t, e + s - p],
          w = [t, e + c],
          M = (t, e) => Math.sqrt(Math.pow(t, 2) - Math.pow(e, 2));
        if (g) {
          let t = M(c, c - g);
          (f[0] -= t), (m[0] += t), (x[1] = w[1] = e + c - g);
        }
        if (s < c - g) {
          let o = M(c, c - g - s);
          (x[0] = y[0] = t + i - c + o),
            (b[0] = Math.min(x[0], b[0])),
            (v[0] = Math.max(y[0], v[0])),
            (k[0] = w[0] = t + c - o),
            (x[1] = w[1] = e + s);
        }
        if (u) {
          let t = M(p, p - u);
          (b[0] += t), (v[0] -= t), (y[1] = k[1] = e + s - p + u);
        }
        if (s < p - u) {
          let o = M(p, p - u - s);
          (x[0] = y[0] = t + i - p + o),
            (m[0] = Math.min(x[0], m[0])),
            (f[0] = Math.max(y[0], f[0])),
            (k[0] = w[0] = t + p - o),
            (y[1] = k[1] = e);
        }
        return (
          (r.length = 0),
          r.push(
            ["M", ...f],
            ["L", ...m],
            ["A", c, c, 0, 0, 1, ...x],
            ["L", ...y],
            ["A", p, p, 0, 0, 1, ...b],
            ["L", ...v],
            ["A", p, p, 0, 0, 1, ...k],
            ["L", ...w],
            ["A", c, c, 0, 0, 1, ...f],
            ["Z"]
          ),
          r
        );
      }
      let {
        diffObjects: lp,
        extend: lg,
        find: lu,
        merge: lf,
        pick: lm,
        uniqueKey: lx,
      } = $;
      !(function (t) {
        function e(t, e) {
          let i = t.condition;
          (
            i.callback ||
            function () {
              return (
                this.chartWidth <= lm(i.maxWidth, Number.MAX_VALUE) &&
                this.chartHeight <= lm(i.maxHeight, Number.MAX_VALUE) &&
                this.chartWidth >= lm(i.minWidth, 0) &&
                this.chartHeight >= lm(i.minHeight, 0)
              );
            }
          ).call(this) && e.push(t._id);
        }
        function i(t, e) {
          let i = this.options.responsive,
            s = this.currentResponsive,
            o = [],
            r;
          !e &&
            i &&
            i.rules &&
            i.rules.forEach((t) => {
              void 0 === t._id && (t._id = lx()),
                this.matchResponsiveRule(t, o);
            }, this);
          let a = lf(
            ...o
              .map((t) => lu((i || {}).rules || [], (e) => e._id === t))
              .map((t) => t && t.chartOptions)
          );
          (a.isResponsiveOptions = !0), (o = o.toString() || void 0);
          let n = s && s.ruleIds;
          o === n ||
            (s &&
              ((this.currentResponsive = void 0),
              (this.updatingResponsive = !0),
              this.update(s.undoOptions, t, !0),
              (this.updatingResponsive = !1)),
            o
              ? (((r = lp(
                  a,
                  this.options,
                  !0,
                  this.collectionsWithUpdate
                )).isResponsiveOptions = !0),
                (this.currentResponsive = {
                  ruleIds: o,
                  mergedOptions: a,
                  undoOptions: r,
                }),
                this.updatingResponsive || this.update(a, t, !0))
              : (this.currentResponsive = void 0));
        }
        t.compose = function (t) {
          let s = t.prototype;
          return (
            s.matchResponsiveRule ||
              lg(s, { matchResponsiveRule: e, setResponsive: i }),
            t
          );
        };
      })(y || (y = {}));
      let ly = y;
      (k.AST = tK),
        (k.Axis = sR),
        (k.Chart = aG),
        (k.Color = tk),
        (k.DataLabel = hs),
        (k.DataTableCore = re),
        (k.Fx = tC),
        (k.HTMLElement = iZ),
        (k.Legend = ai),
        (k.LegendSymbol = rr),
        (k.OverlappingDataLabels = k.OverlappingDataLabels || h9),
        (k.PlotLineOrBand = s4),
        (k.Point = oF),
        (k.Pointer = o9),
        (k.RendererRegistry = er),
        (k.Series = rY),
        (k.SeriesRegistry = rd),
        (k.StackItem = a8),
        (k.SVGElement = ej),
        (k.SVGRenderer = iR),
        (k.Templating = eo),
        (k.Tick = sa),
        (k.Time = td),
        (k.Tooltip = ok),
        (k.animate = tR.animate),
        (k.animObject = tR.animObject),
        (k.chart = aG.chart),
        (k.color = tk.parse),
        (k.dateFormat = eo.dateFormat),
        (k.defaultOptions = tm.defaultOptions),
        (k.distribute = ed.distribute),
        (k.format = eo.format),
        (k.getDeferredAnimation = tR.getDeferredAnimation),
        (k.getOptions = tm.getOptions),
        (k.numberFormat = eo.numberFormat),
        (k.seriesType = rd.seriesType),
        (k.setAnimation = tR.setAnimation),
        (k.setOptions = tm.setOptions),
        (k.stop = tR.stop),
        (k.time = tm.defaultTime),
        (k.timers = tC.timers),
        {
          compose: function (t, e, i) {
            let s = t.types.pie;
            if (!e.symbolCustomAttribs.includes("borderRadius")) {
              let o = i.prototype.symbols;
              h7(t, "afterColumnTranslate", lh, { order: 9 }),
                h7(s, "afterTranslate", ld),
                e.symbolCustomAttribs.push(
                  "borderRadius",
                  "brBoxHeight",
                  "brBoxY"
                ),
                (lr = o.arc),
                (la = o.roundedRect),
                (o.arc = ln),
                (o.roundedRect = lc);
            }
          },
          optionsToObject: ll,
        }.compose(k.Series, k.SVGElement, k.SVGRenderer),
        hl.compose(k.Series.types.column),
        hs.compose(k.Series),
        sG.compose(k.Axis),
        iZ.compose(k.SVGRenderer),
        ai.compose(k.Chart),
        s$.compose(k.Axis),
        h9.compose(k.Chart),
        hK.compose(k.Series.types.pie),
        s4.compose(k.Chart, k.Axis),
        o9.compose(k.Chart),
        ly.compose(k.Chart),
        a0.compose(k.Axis, k.Chart, k.Series),
        ny.compose(k.Axis, k.Chart, k.Series),
        ok.compose(k.Pointer),
        $.extend(k, $);
      let lb = k;
      return v.default;
    })()
  )
);
