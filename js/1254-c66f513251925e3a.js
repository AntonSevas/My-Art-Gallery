"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1254],
  {
    47568: function (e, n, t) {
      function r(e, n, t, r, i, o, u) {
        try {
          var a = e[o](u),
            c = a.value;
        } catch (e) {
          return void t(e);
        }
        a.done ? n(c) : Promise.resolve(c).then(r, i);
      }
      function i(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (i, o) {
            var u = e.apply(n, t);
            function a(e) {
              r(u, i, o, a, c, "next", e);
            }
            function c(e) {
              r(u, i, o, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      t.d(n, {
        Z: function () {
          return i;
        },
      });
    },
    36305: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(20943),
        i = t(13375),
        o = t(91566);
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (0, i.Z)(e) ||
          (0, o.Z)(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    8100: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return G;
        },
      });
      var r,
        i = t(67294);
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function o(
        e,
        n,
        t,
        r
      ) {
        return new (t || (t = Promise))(function (i, o) {
          function u(e) {
            try {
              c(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var n;
            e.done
              ? i(e.value)
              : ((n = e.value) instanceof t
                  ? n
                  : new t(function (e) {
                      e(n);
                    })
                ).then(u, a);
          }
          c((r = r.apply(e, n || [])).next());
        });
      }
      function u(e, n) {
        var t,
          r,
          i,
          o,
          u = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (t) throw TypeError("Generator is already executing.");
              for (; u; )
                try {
                  if (
                    ((t = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return u.label++, { value: o[1], done: !1 };
                    case 5:
                      u.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = u.ops.pop()), u.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = u.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        u = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        u.label = o[1];
                        break;
                      }
                      if (6 === o[0] && u.label < i[1]) {
                        (u.label = i[1]), (i = o);
                        break;
                      }
                      if (i && u.label < i[2]) {
                        (u.label = i[2]), u.ops.push(o);
                        break;
                      }
                      i[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  o = n.call(e, u);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  t = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      var a = function () {},
        c = void 0,
        f = Object,
        s = function (e) {
          return e === c;
        },
        l = function (e) {
          return "function" == typeof e;
        },
        d = function (e, n) {
          return f.assign({}, e, n);
        },
        v = "undefined",
        h = function () {
          return typeof window != v;
        },
        p = new WeakMap(),
        g = 0,
        y = function (e) {
          var n,
            t,
            r = typeof e,
            i = e && e.constructor,
            o = i == Date;
          if (f(e) !== e || o || i == RegExp)
            n = o
              ? e.toJSON()
              : "symbol" == r
              ? e.toString()
              : "string" == r
              ? JSON.stringify(e)
              : "" + e;
          else {
            if ((n = p.get(e))) return n;
            if (((n = ++g + "~"), p.set(e, n), i == Array)) {
              for (t = 0, n = "@"; t < e.length; t++) n += y(e[t]) + ",";
              p.set(e, n);
            }
            if (i == f) {
              n = "#";
              for (var u = f.keys(e).sort(); !s((t = u.pop())); )
                s(e[t]) || (n += t + ":" + y(e[t]) + ",");
              p.set(e, n);
            }
          }
          return n;
        },
        b = !0,
        w = h(),
        m = typeof document != v,
        E =
          w && window.addEventListener
            ? window.addEventListener.bind(window)
            : a,
        R = m ? document.addEventListener.bind(document) : a,
        k =
          w && window.removeEventListener
            ? window.removeEventListener.bind(window)
            : a,
        O = m ? document.removeEventListener.bind(document) : a,
        S = {
          initFocus: function (e) {
            return (
              R("visibilitychange", e),
              E("focus", e),
              function () {
                O("visibilitychange", e), k("focus", e);
              }
            );
          },
          initReconnect: function (e) {
            var n = function () {
                (b = !0), e();
              },
              t = function () {
                b = !1;
              };
            return (
              E("online", n),
              E("offline", t),
              function () {
                k("online", n), k("offline", t);
              }
            );
          },
        },
        T = !h() || "Deno" in window,
        V = T ? i.useEffect : i.useLayoutEffect,
        C = "undefined" != typeof navigator && navigator.connection,
        I =
          !T &&
          C &&
          (["slow-2g", "2g"].includes(C.effectiveType) || C.saveData),
        x = function (e) {
          if (l(e))
            try {
              e = e();
            } catch (n) {
              e = "";
            }
          var n = [].concat(e),
            t = (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                ? y(e)
                : "")
              ? "$swr$" + e
              : "";
          return [e, n, t];
        },
        D = new WeakMap(),
        P = function (e, n, t, r, i, o, u) {
          void 0 === u && (u = !0);
          var a = D.get(e),
            c = a[0],
            f = a[1],
            s = a[3],
            l = c[n],
            d = f[n];
          if (u && d) for (var v = 0; v < d.length; ++v) d[v](t, r, i);
          return o && (delete s[n], l && l[0])
            ? l[0](2).then(function () {
                return e.get(n);
              })
            : e.get(n);
        },
        L = 0,
        A = function () {
          return ++L;
        },
        F = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          return o(void 0, void 0, void 0, function () {
            var n, t, r, i, o, a, f, v, h, p, g, y, b, w, m, E, R, k, O, S;
            return u(this, function (u) {
              switch (u.label) {
                case 0:
                  if (
                    ((n = e[0]),
                    (t = e[1]),
                    (r = e[2]),
                    (a =
                      !!s(
                        (o =
                          "boolean" == typeof (i = e[3])
                            ? { revalidate: i }
                            : i || {}).populateCache
                      ) || o.populateCache),
                    (f = !1 !== o.revalidate),
                    (v = !1 !== o.rollbackOnError),
                    (h = o.optimisticData),
                    (g = (p = x(t))[0]),
                    (y = p[2]),
                    !g)
                  )
                    return [2];
                  if (((b = D.get(n)[2]), e.length < 3))
                    return [2, P(n, g, n.get(g), c, c, f, !0)];
                  if (
                    ((w = r),
                    (E = A()),
                    (b[g] = [E, 0]),
                    (R = !s(h)),
                    (k = n.get(g)),
                    R && ((O = l(h) ? h(k) : h), n.set(g, O), P(n, g, O)),
                    l(w))
                  )
                    try {
                      w = w(n.get(g));
                    } catch (e) {
                      m = e;
                    }
                  return w && l(w.then)
                    ? [
                        4,
                        w.catch(function (e) {
                          m = e;
                        }),
                      ]
                    : [3, 2];
                case 1:
                  if (((w = u.sent()), E !== b[g][0])) {
                    if (m) throw m;
                    return [2, w];
                  }
                  m && R && v && ((a = !0), (w = k), n.set(g, k)),
                    (u.label = 2);
                case 2:
                  return (
                    a &&
                      (m || (l(a) && (w = a(w, k)), n.set(g, w)),
                      n.set(y, d(n.get(y), { error: m }))),
                    (b[g][1] = A()),
                    [4, P(n, g, w, m, c, f, !!a)]
                  );
                case 3:
                  if (((S = u.sent()), m)) throw m;
                  return [2, a ? S : w];
              }
            });
          });
        },
        Z = function (e, n) {
          for (var t in e) e[t][0] && e[t][0](n);
        },
        M = function (e, n) {
          if (!D.has(e)) {
            var t = d(S, n),
              r = {},
              i = F.bind(c, e),
              o = a;
            if ((D.set(e, [r, {}, {}, {}, i]), !T)) {
              var u = t.initFocus(setTimeout.bind(c, Z.bind(c, r, 0))),
                f = t.initReconnect(setTimeout.bind(c, Z.bind(c, r, 1)));
              o = function () {
                u && u(), f && f(), D.delete(e);
              };
            }
            return [e, i, o];
          }
          return [e, D.get(e)[4]];
        },
        N = M(new Map()),
        W = N[0],
        _ = d(
          {
            onLoadingSlow: a,
            onSuccess: a,
            onError: a,
            onErrorRetry: function (e, n, t, r, i) {
              var o = t.errorRetryCount,
                u = i.retryCount,
                a =
                  ~~((Math.random() + 0.5) * (1 << (u < 8 ? u : 8))) *
                  t.errorRetryInterval;
              (s(o) || !(u > o)) && setTimeout(r, a, i);
            },
            onDiscarded: a,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: I ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: I ? 5e3 : 3e3,
            compare: function (e, n) {
              return y(e) == y(n);
            },
            isPaused: function () {
              return !1;
            },
            cache: W,
            mutate: N[1],
            fallback: {},
          },
          {
            isOnline: function () {
              return b;
            },
            isVisible: function () {
              var e = m && document.visibilityState;
              return s(e) || "hidden" !== e;
            },
          }
        ),
        j = function (e, n) {
          var t = d(e, n);
          if (n) {
            var r = e.use,
              i = e.fallback,
              o = n.use,
              u = n.fallback;
            r && o && (t.use = r.concat(o)), i && u && (t.fallback = d(i, u));
          }
          return t;
        },
        q = (0, i.createContext)({}),
        J = function (e, n, t) {
          var r = n[e] || (n[e] = []);
          return (
            r.push(t),
            function () {
              var e = r.indexOf(t);
              e >= 0 && ((r[e] = r[r.length - 1]), r.pop());
            }
          );
        },
        $ = { dedupe: !0 };
      f.defineProperty(
        function (e) {
          var n = e.value,
            t = j((0, i.useContext)(q), n),
            r = n && n.provider,
            o = (0, i.useState)(function () {
              return r ? M(r(t.cache || W), n) : c;
            })[0];
          return (
            o && ((t.cache = o[0]), (t.mutate = o[1])),
            V(function () {
              return o ? o[2] : c;
            }, []),
            (0, i.createElement)(q.Provider, d(e, { value: t }))
          );
        },
        "default",
        { value: _ }
      );
      var G =
        ((r = function (e, n, t) {
          var r = t.cache,
            a = t.compare,
            f = t.fallbackData,
            p = t.suspense,
            g = t.revalidateOnMount,
            y = t.refreshInterval,
            b = t.refreshWhenHidden,
            w = t.refreshWhenOffline,
            m = D.get(r),
            E = m[0],
            R = m[1],
            k = m[2],
            O = m[3],
            S = x(e),
            C = S[0],
            I = S[1],
            L = S[2],
            Z = (0, i.useRef)(!1),
            M = (0, i.useRef)(!1),
            N = (0, i.useRef)(C),
            W = (0, i.useRef)(n),
            _ = (0, i.useRef)(t),
            j = function () {
              return _.current;
            },
            q = function () {
              return j().isVisible() && j().isOnline();
            },
            G = function (e) {
              return r.set(L, d(r.get(L), e));
            },
            H = r.get(C),
            z = s(f) ? t.fallback[C] : f,
            B = s(H) ? z : H,
            K = r.get(L) || {},
            Q = K.error,
            U = !Z.current,
            X = function () {
              return U && !s(g)
                ? g
                : !j().isPaused() &&
                    (p
                      ? !s(B) && t.revalidateIfStale
                      : s(B) || t.revalidateIfStale);
            },
            Y = !!C && !!n && (!!K.isValidating || (U && X())),
            ee = (function (e, n) {
              var t = (0, i.useState)({})[1],
                r = (0, i.useRef)(e),
                o = (0, i.useRef)({ data: !1, error: !1, isValidating: !1 }),
                u = (0, i.useCallback)(function (e) {
                  var i = !1,
                    u = r.current;
                  for (var a in e) {
                    var c = a;
                    u[c] !== e[c] && ((u[c] = e[c]), o.current[c] && (i = !0));
                  }
                  i && !n.current && t({});
                }, []);
              return (
                V(function () {
                  r.current = e;
                }),
                [r, o.current, u]
              );
            })({ data: B, error: Q, isValidating: Y }, M),
            ne = ee[0],
            te = ee[1],
            re = ee[2],
            ie = (0, i.useCallback)(
              function (e) {
                return o(void 0, void 0, void 0, function () {
                  var n, i, o, f, d, v, h, p, g, y, b, w, m;
                  return u(this, function (u) {
                    switch (u.label) {
                      case 0:
                        if (
                          ((n = W.current),
                          !C || !n || M.current || j().isPaused())
                        )
                          return [2, !1];
                        (f = !0),
                          (d = e || {}),
                          (v = !O[C] || !d.dedupe),
                          (h = function () {
                            return !M.current && C === N.current && Z.current;
                          }),
                          (p = function () {
                            var e = O[C];
                            e && e[1] === o && delete O[C];
                          }),
                          (g = { isValidating: !1 }),
                          (y = function () {
                            G({ isValidating: !1 }), h() && re(g);
                          }),
                          G({ isValidating: !0 }),
                          re({ isValidating: !0 }),
                          (u.label = 1);
                      case 1:
                        return (
                          u.trys.push([1, 3, , 4]),
                          v &&
                            (P(r, C, ne.current.data, ne.current.error, !0),
                            t.loadingTimeout &&
                              !r.get(C) &&
                              setTimeout(function () {
                                f && h() && j().onLoadingSlow(C, t);
                              }, t.loadingTimeout),
                            (O[C] = [n.apply(void 0, I), A()])),
                          (i = (m = O[C])[0]),
                          (o = m[1]),
                          [4, i]
                        );
                      case 2:
                        return (
                          (i = u.sent()),
                          v && setTimeout(p, t.dedupingInterval),
                          O[C] && O[C][1] === o
                            ? (G({ error: c }),
                              (g.error = c),
                              !s((b = k[C])) &&
                              (o <= b[0] || o <= b[1] || 0 === b[1])
                                ? (y(), v && h() && j().onDiscarded(C), [2, !1])
                                : (a(ne.current.data, i)
                                    ? (g.data = ne.current.data)
                                    : (g.data = i),
                                  a(r.get(C), i) || r.set(C, i),
                                  v && h() && j().onSuccess(i, C, t),
                                  [3, 4]))
                            : (v && h() && j().onDiscarded(C), [2, !1])
                        );
                      case 3:
                        return (
                          (w = u.sent()),
                          p(),
                          !j().isPaused() &&
                            (G({ error: w }),
                            (g.error = w),
                            v &&
                              h() &&
                              (j().onError(w, C, t),
                              (("boolean" == typeof t.shouldRetryOnError &&
                                t.shouldRetryOnError) ||
                                (l(t.shouldRetryOnError) &&
                                  t.shouldRetryOnError(w))) &&
                                q() &&
                                j().onErrorRetry(w, C, t, ie, {
                                  retryCount: (d.retryCount || 0) + 1,
                                  dedupe: !0,
                                }))),
                          [3, 4]
                        );
                      case 4:
                        return (
                          (f = !1),
                          y(),
                          h() && v && P(r, C, g.data, g.error, !1),
                          [2, !0]
                        );
                    }
                  });
                });
              },
              [C]
            ),
            oe = (0, i.useCallback)(
              F.bind(c, r, function () {
                return N.current;
              }),
              []
            );
          if (
            (V(function () {
              (W.current = n), (_.current = t);
            }),
            V(
              function () {
                if (C) {
                  var e = C !== N.current,
                    n = ie.bind(c, $),
                    t = 0,
                    r = J(C, R, function (e, n, t) {
                      re(
                        d(
                          { error: n, isValidating: t },
                          a(ne.current.data, e) ? c : { data: e }
                        )
                      );
                    }),
                    i = J(C, E, function (e) {
                      if (0 == e) {
                        var r = Date.now();
                        j().revalidateOnFocus &&
                          r > t &&
                          q() &&
                          ((t = r + j().focusThrottleInterval), n());
                      } else if (1 == e)
                        j().revalidateOnReconnect && q() && n();
                      else if (2 == e) return ie();
                    });
                  return (
                    (M.current = !1),
                    (N.current = C),
                    (Z.current = !0),
                    e && re({ data: B, error: Q, isValidating: Y }),
                    X() &&
                      (s(B) || T
                        ? n()
                        : h() && typeof window.requestAnimationFrame != v
                        ? window.requestAnimationFrame(n)
                        : setTimeout(n, 1)),
                    function () {
                      (M.current = !0), r(), i();
                    }
                  );
                }
              },
              [C, ie]
            ),
            V(
              function () {
                var e;
                function n() {
                  var n = l(y) ? y(B) : y;
                  n && -1 !== e && (e = setTimeout(t, n));
                }
                function t() {
                  ne.current.error ||
                  (!b && !j().isVisible()) ||
                  (!w && !j().isOnline())
                    ? n()
                    : ie($).then(n);
                }
                return (
                  n(),
                  function () {
                    e && (clearTimeout(e), (e = -1));
                  }
                );
              },
              [y, b, w, ie]
            ),
            (0, i.useDebugValue)(B),
            p && s(B) && C)
          )
            throw (
              ((W.current = n),
              (_.current = t),
              (M.current = !1),
              s(Q) ? ie($) : Q)
            );
          return {
            mutate: oe,
            get data() {
              return (te.data = !0), B;
            },
            get error() {
              return (te.error = !0), Q;
            },
            get isValidating() {
              return (te.isValidating = !0), Y;
            },
          };
        }),
        function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          var t = d(_, (0, i.useContext)(q)),
            o = l(e[1])
              ? [e[0], e[1], e[2] || {}]
              : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
            u = o[0],
            a = o[1],
            c = j(t, o[2]),
            f = r,
            s = c.use;
          if (s) for (var v = s.length; v-- > 0; ) f = s[v](f);
          return f(u, a || c.fetcher, c);
        });
    },
  },
]);
