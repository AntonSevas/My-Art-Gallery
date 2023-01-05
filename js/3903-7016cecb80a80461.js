"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3903],
  {
    39516: function (e, t, n) {
      n.d(t, {
        d: function () {
          return d;
        },
        f: function () {
          return c;
        },
      });
      var r = n(67294),
        o = n(19946),
        i = n(12351),
        u = n(16723),
        l = n(23784),
        a = n(73781);
      let s = (0, r.createContext)(null);
      function c() {
        let [e, t] = (0, r.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, r.useMemo)(
            () =>
              function (e) {
                let n = (0, a.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let n = t.slice(),
                            r = n.indexOf(e);
                          return -1 !== r && n.splice(r, 1), n;
                        })
                    )
                  ),
                  o = (0, r.useMemo)(
                    () => ({
                      register: n,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [n, e.slot, e.name, e.props]
                  );
                return r.createElement(s.Provider, { value: o }, e.children);
              },
            [t]
          ),
        ];
      }
      let d = (0, i.yV)(function (e, t) {
        let n = (function e() {
            let t = (0, r.useContext)(s);
            if (null === t) {
              let t = Error(
                "You used a <Description /> component, but it is not inside a relevant parent."
              );
              throw (
                (Error.captureStackTrace && Error.captureStackTrace(t, e), t)
              );
            }
            return t;
          })(),
          a = `headlessui-description-${(0, o.M)()}`,
          c = (0, l.T)(t);
        (0, u.e)(() => n.register(a), [a, n.register]);
        let d = { ref: c, ...n.props, id: a };
        return (0,
        i.sY)({ ourProps: d, theirProps: e, slot: n.slot || {}, defaultTag: "p", name: n.name || "Description" });
      });
    },
    98831: function (e, t, n) {
      n.d(t, {
        V: function () {
          return re;
        },
      });
      var r,
        o,
        i,
        u,
        l = n(67294),
        a = n(32984),
        s = n(12351),
        c = n(23784),
        d = n(61363),
        f = n(64103),
        p = n(19946),
        v = n(82180),
        m = n(46045),
        h = n(84575),
        E = n(73781),
        g = n(70638),
        b = n(14879),
        w = n(51074),
        y = n(14007),
        T = n(81021);
      function P(e, t) {
        let n = (0, l.useRef)([]),
          r = (0, E.z)(e);
        (0, l.useEffect)(() => {
          let e = [...n.current];
          for (let [o, i] of t.entries())
            if (n.current[o] !== i) {
              let o = r(t, e);
              return (n.current = t), o;
            }
        }, [r, ...t]);
      }
      var C =
        (((r = C || {})[(r.None = 1)] = "None"),
        (r[(r.InitialFocus = 2)] = "InitialFocus"),
        (r[(r.TabLock = 4)] = "TabLock"),
        (r[(r.FocusLock = 8)] = "FocusLock"),
        (r[(r.RestoreFocus = 16)] = "RestoreFocus"),
        (r[(r.All = 30)] = "All"),
        r);
      let F = Object.assign(
        (0, s.yV)(function (e, t) {
          let n = (0, l.useRef)(null),
            r = (0, c.T)(n, t),
            { initialFocus: o, containers: i, features: u = 30, ...d } = e;
          (0, v.H)() || (u = 1);
          let f = (0, w.i)(n);
          !(function ({ ownerDocument: e }, t) {
            let n = (0, l.useRef)(null);
            (0, y.O)(
              null == e ? void 0 : e.defaultView,
              "focusout",
              (e) => {
                !t || n.current || (n.current = e.target);
              },
              !0
            ),
              P(() => {
                t ||
                  ((null == e ? void 0 : e.activeElement) ===
                    (null == e ? void 0 : e.body) && (0, h.C5)(n.current),
                  (n.current = null));
              }, [t]);
            let r = (0, l.useRef)(!1);
            (0, l.useEffect)(
              () => (
                (r.current = !1),
                () => {
                  (r.current = !0),
                    (0, T.Y)(() => {
                      r.current && ((0, h.C5)(n.current), (n.current = null));
                    });
                }
              ),
              []
            );
          })({ ownerDocument: f }, Boolean(16 & u));
          let p = (function (
            { ownerDocument: e, container: t, initialFocus: n },
            r
          ) {
            let o = (0, l.useRef)(null),
              i = (0, b.t)();
            return (
              P(() => {
                if (!r) return;
                let u = t.current;
                u &&
                  (0, T.Y)(() => {
                    if (!i.current) return;
                    let t = null == e ? void 0 : e.activeElement;
                    if (null != n && n.current) {
                      if ((null == n ? void 0 : n.current) === t)
                        return void (o.current = t);
                    } else if (u.contains(t)) return void (o.current = t);
                    null != n && n.current
                      ? (0, h.C5)(n.current)
                      : (0, h.jA)(u, h.TO.First) === h.fE.Error &&
                        console.warn(
                          "There are no focusable elements inside the <FocusTrap />"
                        ),
                      (o.current = null == e ? void 0 : e.activeElement);
                  });
              }, [r]),
              o
            );
          })(
            { ownerDocument: f, container: n, initialFocus: o },
            Boolean(2 & u)
          );
          !(function (
            {
              ownerDocument: e,
              container: t,
              containers: n,
              previousActiveElement: r,
            },
            o
          ) {
            let i = (0, b.t)();
            (0, y.O)(
              null == e ? void 0 : e.defaultView,
              "focus",
              (e) => {
                if (!o || !i.current) return;
                let u = new Set(null == n ? void 0 : n.current);
                u.add(t);
                let l = r.current;
                if (!l) return;
                let a = e.target;
                a && a instanceof HTMLElement
                  ? (function (e, t) {
                      var n;
                      for (let r of e)
                        if (null != (n = r.current) && n.contains(t)) return !0;
                      return !1;
                    })(u, a)
                    ? ((r.current = a), (0, h.C5)(a))
                    : (e.preventDefault(), e.stopPropagation(), (0, h.C5)(l))
                  : (0, h.C5)(r.current);
              },
              !0
            );
          })(
            {
              ownerDocument: f,
              container: n,
              containers: i,
              previousActiveElement: p,
            },
            Boolean(8 & u)
          );
          let C = (0, g.l)(),
            F = (0, E.z)(() => {
              let e = n.current;
              e &&
                (0, a.E)(C.current, {
                  [g.N.Forwards]: () => (0, h.jA)(e, h.TO.First),
                  [g.N.Backwards]: () => (0, h.jA)(e, h.TO.Last),
                });
            });
          return l.createElement(
            l.Fragment,
            null,
            Boolean(4 & u) &&
              l.createElement(m._, {
                as: "button",
                type: "button",
                onFocus: F,
                features: m.A.Focusable,
              }),
            (0, s.sY)({
              ourProps: { ref: r },
              theirProps: d,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            Boolean(4 & u) &&
              l.createElement(m._, {
                as: "button",
                type: "button",
                onFocus: F,
                features: m.A.Focusable,
              })
          );
        }),
        { features: C }
      );
      var A = n(15466),
        S = n(16723);
      let O = new Set(),
        R = new Map();
      function D(e) {
        e.setAttribute("aria-hidden", "true"), (e.inert = !0);
      }
      function x(e) {
        let t = R.get(e);
        t &&
          (null === t["aria-hidden"]
            ? e.removeAttribute("aria-hidden")
            : e.setAttribute("aria-hidden", t["aria-hidden"]),
          (e.inert = t.inert));
      }
      var k = n(73935);
      let L = (0, l.createContext)(!1);
      function N(e) {
        return l.createElement(L.Provider, { value: e.force }, e.children);
      }
      var M = n(43393);
      let H = l.Fragment,
        j = (0, s.yV)(function (e, t) {
          let n = (0, l.useRef)(null),
            r = (0, c.T)(
              (0, c.h)((e) => {
                n.current = e;
              }),
              t
            ),
            o = (0, w.i)(n),
            i = (function (e) {
              let t = (0, l.useContext)(L),
                n = (0, l.useContext)(I),
                r = (0, w.i)(e),
                [o, i] = (0, l.useState)(() => {
                  if ((!t && null !== n) || M.s) return null;
                  let e =
                    null == r
                      ? void 0
                      : r.getElementById("headlessui-portal-root");
                  if (e) return e;
                  if (null === r) return null;
                  let o = r.createElement("div");
                  return (
                    o.setAttribute("id", "headlessui-portal-root"),
                    r.body.appendChild(o)
                  );
                });
              return (
                (0, l.useEffect)(() => {
                  null !== o &&
                    ((null != r && r.body.contains(o)) ||
                      null == r ||
                      r.body.appendChild(o));
                }, [o, r]),
                (0, l.useEffect)(() => {
                  t || (null !== n && i(n.current));
                }, [n, i, t]),
                o
              );
            })(n),
            [u] = (0, l.useState)(() => {
              var e;
              return M.s
                ? null
                : null != (e = null == o ? void 0 : o.createElement("div"))
                ? e
                : null;
            }),
            a = (0, v.H)(),
            d = (0, l.useRef)(!1);
          return (
            (0, S.e)(() => {
              if (((d.current = !1), i && u))
                return (
                  i.contains(u) ||
                    (u.setAttribute("data-headlessui-portal", ""),
                    i.appendChild(u)),
                  () => {
                    (d.current = !0),
                      (0, T.Y)(() => {
                        var e;
                        d.current &&
                          i &&
                          u &&
                          (i.removeChild(u),
                          i.childNodes.length <= 0 &&
                            (null == (e = i.parentElement) ||
                              e.removeChild(i)));
                      });
                  }
                );
            }, [i, u]),
            a && i && u
              ? (0, k.createPortal)(
                  (0, s.sY)({
                    ourProps: { ref: r },
                    theirProps: e,
                    defaultTag: H,
                    name: "Portal",
                  }),
                  u
                )
              : null
          );
        }),
        Y = l.Fragment,
        I = (0, l.createContext)(null),
        V = Object.assign(j, {
          Group: (0, s.yV)(function (e, t) {
            let { target: n, ...r } = e,
              o = { ref: (0, c.T)(t) };
            return l.createElement(
              I.Provider,
              { value: n },
              (0, s.sY)({
                ourProps: o,
                theirProps: r,
                defaultTag: Y,
                name: "Popover.Group",
              })
            );
          }),
        });
      var z = n(39516),
        B = n(16567);
      let $ = (0, l.createContext)(() => {});
      $.displayName = "StackContext";
      var U =
        (((o = U || {})[(o.Add = 0)] = "Add"),
        (o[(o.Remove = 1)] = "Remove"),
        o);
      function _({
        children: e,
        onUpdate: t,
        type: n,
        element: r,
        enabled: o,
      }) {
        let i = (0, l.useContext)($),
          u = (0, E.z)((...e) => {
            null == t || t(...e), i(...e);
          });
        return (
          (0, S.e)(() => {
            let e = void 0 === o || !0 === o;
            return (
              e && u(0, n, r),
              () => {
                e && u(1, n, r);
              }
            );
          }, [u, n, r, o]),
          l.createElement($.Provider, { value: u }, e)
        );
      }
      var q = n(39650),
        W = n(9362),
        Z =
          (((i = Z || {})[(i.Open = 0)] = "Open"),
          (i[(i.Closed = 1)] = "Closed"),
          i),
        G = (((u = G || {})[(u.SetTitleId = 0)] = "SetTitleId"), u);
      let J = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        K = (0, l.createContext)(null);
      function Q(e) {
        let t = (0, l.useContext)(K);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, Q), t);
        }
        return t;
      }
      function X(e, t) {
        return (0, a.E)(t.type, J, e, t);
      }
      K.displayName = "DialogContext";
      let ee = s.AN.RenderStrategy | s.AN.Static,
        te = (0, s.yV)(function (e, t) {
          var n;
          let {
              open: r,
              onClose: o,
              initialFocus: i,
              __demoMode: u = !1,
              ...f
            } = e,
            [h, g] = (0, l.useState)(0),
            b = (0, B.oJ)();
          void 0 === r &&
            null !== b &&
            (r = (0, a.E)(b, { [B.ZM.Open]: !0, [B.ZM.Closed]: !1 }));
          let T = (0, l.useRef)(new Set()),
            P = (0, l.useRef)(null),
            C = (0, c.T)(P, t),
            k = (0, l.useRef)(null),
            L = (0, w.i)(P),
            M = e.hasOwnProperty("open") || null !== b,
            H = e.hasOwnProperty("onClose");
          if (!M && !H)
            throw Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            );
          if (!M)
            throw Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            );
          if (!H)
            throw Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
            );
          if ("boolean" != typeof r)
            throw Error(
              `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`
            );
          if ("function" != typeof o)
            throw Error(
              `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`
            );
          let j = r ? 0 : 1,
            [Y, I] = (0, l.useReducer)(X, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, l.createRef)(),
            }),
            $ = (0, E.z)(() => o(!1)),
            Z = (0, E.z)((e) => I({ type: 0, id: e })),
            G = !!(0, v.H)() && !u && 0 === j,
            J = h > 1,
            Q = null !== (0, l.useContext)(K);
          (function (e, t = !0) {
            (0, S.e)(() => {
              if (!t || !e.current) return;
              let n = e.current,
                r = (0, A.r)(n);
              if (r) {
                for (let e of (O.add(n), R.keys()))
                  e.contains(n) && (x(e), R.delete(e));
                return (
                  r.querySelectorAll("body > *").forEach((e) => {
                    if (e instanceof HTMLElement) {
                      for (let t of O) if (e.contains(t)) return;
                      1 === O.size &&
                        (R.set(e, {
                          "aria-hidden": e.getAttribute("aria-hidden"),
                          inert: e.inert,
                        }),
                        D(e));
                    }
                  }),
                  () => {
                    if ((O.delete(n), O.size > 0))
                      r.querySelectorAll("body > *").forEach((e) => {
                        if (e instanceof HTMLElement && !R.has(e)) {
                          for (let t of O) if (e.contains(t)) return;
                          R.set(e, {
                            "aria-hidden": e.getAttribute("aria-hidden"),
                            inert: e.inert,
                          }),
                            D(e);
                        }
                      });
                    else for (let e of R.keys()) x(e), R.delete(e);
                  }
                );
              }
            }, [t]);
          })(P, !!J && G),
            (0, q.O)(
              () => {
                var e, t;
                return [
                  ...Array.from(
                    null !=
                      (e =
                        null == L
                          ? void 0
                          : L.querySelectorAll(
                              "body > *, [data-headlessui-portal]"
                            ))
                      ? e
                      : []
                  ).filter(
                    (e) =>
                      !(
                        !(e instanceof HTMLElement) ||
                        e.contains(k.current) ||
                        (Y.panelRef.current && e.contains(Y.panelRef.current))
                      )
                  ),
                  null != (t = Y.panelRef.current) ? t : P.current,
                ];
              },
              $,
              G && !J
            ),
            (0, y.O)(null == L ? void 0 : L.defaultView, "keydown", (e) => {
              e.defaultPrevented ||
                (e.key === d.R.Escape &&
                  0 === j &&
                  (J || (e.preventDefault(), e.stopPropagation(), $())));
            }),
            (n = 0 === j && !Q),
            (0, l.useEffect)(() => {
              var e;
              if (!n || !L) return;
              let t = (0, W.k)();
              function r(e, n, r) {
                let o = e.style.getPropertyValue(n);
                return (
                  Object.assign(e.style, { [n]: r }),
                  t.add(() => {
                    Object.assign(e.style, { [n]: o });
                  })
                );
              }
              let o = L.documentElement,
                i =
                  (null != (e = L.defaultView) ? e : window).innerWidth -
                  o.clientWidth;
              if ((r(o, "overflow", "hidden"), i > 0)) {
                r(
                  o,
                  "paddingRight",
                  i - (o.clientWidth - o.offsetWidth) + "px"
                );
              }
              if (
                /iPhone/gi.test(window.navigator.platform) ||
                (/Mac/gi.test(window.navigator.platform) &&
                  window.navigator.maxTouchPoints > 0)
              ) {
                let e = window.pageYOffset;
                r(o, "position", "fixed"),
                  r(o, "marginTop", `-${e}px`),
                  r(o, "width", "100%"),
                  t.add(() => window.scrollTo(0, e));
              }
              return t.dispose;
            }, [L, n]),
            (0, l.useEffect)(() => {
              if (0 !== j || !P.current) return;
              let e = new IntersectionObserver((e) => {
                for (let t of e)
                  0 === t.boundingClientRect.x &&
                    0 === t.boundingClientRect.y &&
                    0 === t.boundingClientRect.width &&
                    0 === t.boundingClientRect.height &&
                    $();
              });
              return e.observe(P.current), () => e.disconnect();
            }, [j, P, $]);
          let [te, ne] = (0, z.f)(),
            re = `headlessui-dialog-${(0, p.M)()}`,
            oe = (0, l.useMemo)(
              () => [{ dialogState: j, close: $, setTitleId: Z }, Y],
              [j, Y, $, Z]
            ),
            ie = (0, l.useMemo)(() => ({ open: 0 === j }), [j]),
            ue = {
              ref: C,
              id: re,
              role: "dialog",
              "aria-modal": 0 === j || void 0,
              "aria-labelledby": Y.titleId,
              "aria-describedby": te,
            };
          return l.createElement(
            _,
            {
              type: "Dialog",
              enabled: 0 === j,
              element: P,
              onUpdate: (0, E.z)((e, t, n) => {
                "Dialog" === t &&
                  (0, a.E)(e, {
                    [U.Add]() {
                      T.current.add(n), g((e) => e + 1);
                    },
                    [U.Remove]() {
                      T.current.add(n), g((e) => e - 1);
                    },
                  });
              }),
            },
            l.createElement(
              N,
              { force: !0 },
              l.createElement(
                V,
                null,
                l.createElement(
                  K.Provider,
                  { value: oe },
                  l.createElement(
                    V.Group,
                    { target: P },
                    l.createElement(
                      N,
                      { force: !1 },
                      l.createElement(
                        ne,
                        { slot: ie, name: "Dialog.Description" },
                        l.createElement(
                          F,
                          {
                            initialFocus: i,
                            containers: T,
                            features: G
                              ? (0, a.E)(J ? "parent" : "leaf", {
                                  parent: F.features.RestoreFocus,
                                  leaf: F.features.All & ~F.features.FocusLock,
                                })
                              : F.features.None,
                          },
                          (0, s.sY)({
                            ourProps: ue,
                            theirProps: f,
                            slot: ie,
                            defaultTag: "div",
                            features: ee,
                            visible: 0 === j,
                            name: "Dialog",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            l.createElement(m._, { features: m.A.Hidden, ref: k })
          );
        }),
        ne = (0, s.yV)(function (e, t) {
          let [{ dialogState: n, close: r }] = Q("Dialog.Overlay"),
            o = (0, c.T)(t),
            i = `headlessui-dialog-overlay-${(0, p.M)()}`,
            u = (0, E.z)((e) => {
              if (e.target === e.currentTarget) {
                if ((0, f.P)(e.currentTarget)) return e.preventDefault();
                e.preventDefault(), e.stopPropagation(), r();
              }
            }),
            a = (0, l.useMemo)(() => ({ open: 0 === n }), [n]);
          return (0,
          s.sY)({ ourProps: { ref: o, id: i, "aria-hidden": !0, onClick: u }, theirProps: e, slot: a, defaultTag: "div", name: "Dialog.Overlay" });
        }),
        re = Object.assign(te, {
          Backdrop: (0, s.yV)(function (e, t) {
            let [{ dialogState: n }, r] = Q("Dialog.Backdrop"),
              o = (0, c.T)(t),
              i = `headlessui-dialog-backdrop-${(0, p.M)()}`;
            (0, l.useEffect)(() => {
              if (null === r.panelRef.current)
                throw Error(
                  "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
                );
            }, [r.panelRef]);
            let u = (0, l.useMemo)(() => ({ open: 0 === n }), [n]);
            return l.createElement(
              N,
              { force: !0 },
              l.createElement(
                V,
                null,
                (0, s.sY)({
                  ourProps: { ref: o, id: i, "aria-hidden": !0 },
                  theirProps: e,
                  slot: u,
                  defaultTag: "div",
                  name: "Dialog.Backdrop",
                })
              )
            );
          }),
          Panel: (0, s.yV)(function (e, t) {
            let [{ dialogState: n }, r] = Q("Dialog.Panel"),
              o = (0, c.T)(t, r.panelRef),
              i = `headlessui-dialog-panel-${(0, p.M)()}`,
              u = (0, l.useMemo)(() => ({ open: 0 === n }), [n]),
              a = (0, E.z)((e) => {
                e.stopPropagation();
              });
            return (0,
            s.sY)({ ourProps: { ref: o, id: i, onClick: a }, theirProps: e, slot: u, defaultTag: "div", name: "Dialog.Panel" });
          }),
          Overlay: ne,
          Title: (0, s.yV)(function (e, t) {
            let [{ dialogState: n, setTitleId: r }] = Q("Dialog.Title"),
              o = `headlessui-dialog-title-${(0, p.M)()}`,
              i = (0, c.T)(t);
            (0, l.useEffect)(() => (r(o), () => r(null)), [o, r]);
            let u = (0, l.useMemo)(() => ({ open: 0 === n }), [n]);
            return (0,
            s.sY)({ ourProps: { ref: i, id: o }, theirProps: e, slot: u, defaultTag: "h2", name: "Dialog.Title" });
          }),
          Description: z.d,
        });
    },
    61363: function (e, t, n) {
      n.d(t, {
        R: function () {
          return o;
        },
      });
      var r,
        o =
          (((r = o || {}).Space = " "),
          (r.Enter = "Enter"),
          (r.Escape = "Escape"),
          (r.Backspace = "Backspace"),
          (r.Delete = "Delete"),
          (r.ArrowLeft = "ArrowLeft"),
          (r.ArrowUp = "ArrowUp"),
          (r.ArrowRight = "ArrowRight"),
          (r.ArrowDown = "ArrowDown"),
          (r.Home = "Home"),
          (r.End = "End"),
          (r.PageUp = "PageUp"),
          (r.PageDown = "PageDown"),
          (r.Tab = "Tab"),
          r);
    },
    34829: function (e, t, n) {
      n.d(t, {
        u: function () {
          return L;
        },
      });
      var r,
        o,
        i = n(67294),
        u = n(12351),
        l = n(16567),
        a = n(32984),
        s = n(14879),
        c = n(16723),
        d = n(3855),
        f = n(82180),
        p = n(23784),
        v = n(9362);
      function m(e, ...t) {
        e && t.length > 0 && e.classList.add(...t);
      }
      function h(e, ...t) {
        e && t.length > 0 && e.classList.remove(...t);
      }
      var E = (((r = E || {}).Ended = "ended"), (r.Cancelled = "cancelled"), r);
      function g() {
        let [e] = (0, i.useState)(v.k);
        return (0, i.useEffect)(() => () => e.dispose(), [e]), e;
      }
      var b = n(73781);
      function w(e = "") {
        return e.split(" ").filter((e) => e.trim().length > 1);
      }
      let y = (0, i.createContext)(null);
      y.displayName = "TransitionContext";
      var T = (((o = T || {}).Visible = "visible"), (o.Hidden = "hidden"), o);
      let P = (0, i.createContext)(null);
      function C(e) {
        return "children" in e
          ? C(e.children)
          : e.current
              .filter(({ el: e }) => null !== e.current)
              .filter(({ state: e }) => "visible" === e).length > 0;
      }
      function F(e, t) {
        let n = (0, d.E)(e),
          r = (0, i.useRef)([]),
          o = (0, s.t)(),
          l = g(),
          c = (0, b.z)((e, t = u.l4.Hidden) => {
            let i = r.current.findIndex(({ el: t }) => t === e);
            -1 !== i &&
              ((0, a.E)(t, {
                [u.l4.Unmount]() {
                  r.current.splice(i, 1);
                },
                [u.l4.Hidden]() {
                  r.current[i].state = "hidden";
                },
              }),
              l.microTask(() => {
                var e;
                !C(r) && o.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          f = (0, b.z)((e) => {
            let t = r.current.find(({ el: t }) => t === e);
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : r.current.push({ el: e, state: "visible" }),
              () => c(e, u.l4.Unmount)
            );
          }),
          p = (0, i.useRef)([]),
          v = (0, i.useRef)(Promise.resolve()),
          m = (0, i.useRef)({ enter: [], leave: [], idle: [] }),
          h = (0, b.z)((e, n, r) => {
            p.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter(
                  ([t]) => t !== e
                )),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    p.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    Promise.all(m.current[n].map(([e, t]) => t)).then(() =>
                      e()
                    );
                  }),
                ]),
              "enter" === n
                ? (v.current = v.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => r(n)))
                : r(n);
          }),
          E = (0, b.z)((e, t, n) => {
            Promise.all(m.current[t].splice(0).map(([e, t]) => t))
              .then(() => {
                var e;
                null == (e = p.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, i.useMemo)(
          () => ({
            children: r,
            register: f,
            unregister: c,
            onStart: h,
            onStop: E,
            wait: v,
            chains: m,
          }),
          [f, c, r, h, E, m, v]
        );
      }
      function A() {}
      P.displayName = "NestingContext";
      let S = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function O(e) {
        var t;
        let n = {};
        for (let r of S) n[r] = null != (t = e[r]) ? t : A;
        return n;
      }
      let R = u.AN.RenderStrategy,
        D = (0, u.yV)(function (e, t) {
          var n;
          let r,
            {
              beforeEnter: o,
              afterEnter: T,
              beforeLeave: A,
              afterLeave: S,
              enter: D,
              enterFrom: x,
              enterTo: k,
              entered: L,
              leave: N,
              leaveFrom: M,
              leaveTo: H,
              ...j
            } = e,
            Y = (0, i.useRef)(null),
            I = (0, p.T)(Y, t),
            V = j.unmount ? u.l4.Unmount : u.l4.Hidden,
            {
              show: z,
              appear: B,
              initial: $,
            } = (function () {
              let e = (0, i.useContext)(y);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            [U, _] = (0, i.useState)(z ? "visible" : "hidden"),
            q = (function () {
              let e = (0, i.useContext)(P);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            { register: W, unregister: Z } = q,
            G = (0, i.useRef)(null);
          (0, i.useEffect)(() => W(Y), [W, Y]),
            (0, i.useEffect)(() => {
              if (V === u.l4.Hidden && Y.current)
                return z && "visible" !== U
                  ? void _("visible")
                  : (0, a.E)(U, { hidden: () => Z(Y), visible: () => W(Y) });
            }, [U, Y, W, Z, z, V]);
          let J = (0, d.E)({
              enter: w(D),
              enterFrom: w(x),
              enterTo: w(k),
              entered: w(L),
              leave: w(N),
              leaveFrom: w(M),
              leaveTo: w(H),
            }),
            K =
              ((n = {
                beforeEnter: o,
                afterEnter: T,
                beforeLeave: A,
                afterLeave: S,
              }),
              (r = (0, i.useRef)(O(n))),
              (0, i.useEffect)(() => {
                r.current = O(n);
              }, [n]),
              r),
            Q = (0, f.H)();
          (0, i.useEffect)(() => {
            if (Q && "visible" === U && null === Y.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }, [Y, U, Q]);
          let X = $ && !B,
            ee = !Q || X || G.current === z ? "idle" : z ? "enter" : "leave",
            te = (0, b.z)((e) =>
              (0, a.E)(e, {
                enter: () => K.current.beforeEnter(),
                leave: () => K.current.beforeLeave(),
                idle() {},
              })
            ),
            ne = (0, b.z)((e) =>
              (0, a.E)(e, {
                enter: () => K.current.afterEnter(),
                leave: () => K.current.afterLeave(),
                idle() {},
              })
            ),
            re = F(() => {
              _("hidden"), Z(Y);
            }, q);
          return (
            (function ({
              container: e,
              direction: t,
              classes: n,
              onStart: r,
              onStop: o,
            }) {
              let i = (0, s.t)(),
                u = g(),
                l = (0, d.E)(t);
              (0, c.e)(() => {
                let t = (0, v.k)();
                u.add(t.dispose);
                let s = e.current;
                if (s && "idle" !== l.current && i.current) {
                  var c, d, f, p;
                  let e, i, u, g, b, w, y;
                  return (
                    t.dispose(),
                    r.current(l.current),
                    t.add(
                      ((c = s),
                      (d = n.current),
                      (f = "enter" === l.current),
                      (p = (e) => {
                        t.dispose(),
                          (0, a.E)(e, {
                            [E.Ended]() {
                              o.current(l.current);
                            },
                            [E.Cancelled]() {},
                          });
                      }),
                      (i = f ? "enter" : "leave"),
                      (u = (0, v.k)()),
                      (g =
                        void 0 !== p
                          ? ((e = { called: !1 }),
                            (...t) => {
                              if (!e.called) return (e.called = !0), p(...t);
                            })
                          : () => {}),
                      "enter" === i &&
                        (c.removeAttribute("hidden"), (c.style.display = "")),
                      (b = (0, a.E)(i, {
                        enter: () => d.enter,
                        leave: () => d.leave,
                      })),
                      (w = (0, a.E)(i, {
                        enter: () => d.enterTo,
                        leave: () => d.leaveTo,
                      })),
                      (y = (0, a.E)(i, {
                        enter: () => d.enterFrom,
                        leave: () => d.leaveFrom,
                      })),
                      h(
                        c,
                        ...d.enter,
                        ...d.enterTo,
                        ...d.enterFrom,
                        ...d.leave,
                        ...d.leaveFrom,
                        ...d.leaveTo,
                        ...d.entered
                      ),
                      m(c, ...b, ...y),
                      u.nextFrame(() => {
                        h(c, ...y),
                          m(c, ...w),
                          (function (e, t) {
                            let n = (0, v.k)();
                            if (!e) return n.dispose;
                            let { transitionDuration: r, transitionDelay: o } =
                                getComputedStyle(e),
                              [i, u] = [r, o].map((e) => {
                                let [t = 0] = e
                                  .split(",")
                                  .filter(Boolean)
                                  .map((e) =>
                                    e.includes("ms")
                                      ? parseFloat(e)
                                      : 1e3 * parseFloat(e)
                                  )
                                  .sort((e, t) => t - e);
                                return t;
                              });
                            if (i + u !== 0) {
                              let r = [];
                              r.push(
                                n.addEventListener(e, "transitionrun", (o) => {
                                  o.target === o.currentTarget &&
                                    (r.splice(0).forEach((e) => e()),
                                    r.push(
                                      n.addEventListener(
                                        e,
                                        "transitionend",
                                        (e) => {
                                          e.target === e.currentTarget &&
                                            (t("ended"),
                                            r.splice(0).forEach((e) => e()));
                                        }
                                      ),
                                      n.addEventListener(
                                        e,
                                        "transitioncancel",
                                        (e) => {
                                          e.target === e.currentTarget &&
                                            (t("cancelled"),
                                            r.splice(0).forEach((e) => e()));
                                        }
                                      )
                                    ));
                                })
                              );
                            } else t("ended");
                            n.add(() => t("cancelled")), n.dispose;
                          })(
                            c,
                            (e) => (
                              "ended" === e && (h(c, ...b), m(c, ...d.entered)),
                              g(e)
                            )
                          );
                      }),
                      u.dispose)
                    ),
                    t.dispose
                  );
                }
              }, [t]);
            })({
              container: Y,
              classes: J,
              direction: ee,
              onStart: (0, d.E)((e) => {
                re.onStart(Y, e, te);
              }),
              onStop: (0, d.E)((e) => {
                re.onStop(Y, e, ne),
                  "leave" !== e || C(re) || (_("hidden"), Z(Y));
              }),
            }),
            (0, i.useEffect)(() => {
              X && (V === u.l4.Hidden ? (G.current = null) : (G.current = z));
            }, [z, X, U]),
            i.createElement(
              P.Provider,
              { value: re },
              i.createElement(
                l.up,
                {
                  value: (0, a.E)(U, {
                    visible: l.ZM.Open,
                    hidden: l.ZM.Closed,
                  }),
                },
                (0, u.sY)({
                  ourProps: { ref: I },
                  theirProps: j,
                  defaultTag: "div",
                  features: R,
                  visible: "visible" === U,
                  name: "Transition.Child",
                })
              )
            )
          );
        }),
        x = (0, u.yV)(function (e, t) {
          let { show: n, appear: r = !1, unmount: o, ...s } = e,
            d = (0, i.useRef)(null),
            v = (0, p.T)(d, t);
          (0, f.H)();
          let m = (0, l.oJ)();
          if (
            (void 0 === n &&
              null !== m &&
              (n = (0, a.E)(m, { [l.ZM.Open]: !0, [l.ZM.Closed]: !1 })),
            ![!0, !1].includes(n))
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          let [h, E] = (0, i.useState)(n ? "visible" : "hidden"),
            g = F(() => {
              E("hidden");
            }),
            [b, w] = (0, i.useState)(!0),
            T = (0, i.useRef)([n]);
          (0, c.e)(() => {
            !1 !== b &&
              T.current[T.current.length - 1] !== n &&
              (T.current.push(n), w(!1));
          }, [T, n]);
          let A = (0, i.useMemo)(
            () => ({ show: n, appear: r, initial: b }),
            [n, r, b]
          );
          (0, i.useEffect)(() => {
            if (n) E("visible");
            else if (C(g)) {
              let e = d.current;
              if (!e) return;
              let t = e.getBoundingClientRect();
              0 === t.x &&
                0 === t.y &&
                0 === t.width &&
                0 === t.height &&
                E("hidden");
            } else E("hidden");
          }, [n, g]);
          let S = { unmount: o };
          return i.createElement(
            P.Provider,
            { value: g },
            i.createElement(
              y.Provider,
              { value: A },
              (0, u.sY)({
                ourProps: {
                  ...S,
                  as: i.Fragment,
                  children: i.createElement(D, { ref: v, ...S, ...s }),
                },
                theirProps: {},
                defaultTag: i.Fragment,
                features: R,
                visible: "visible" === h,
                name: "Transition",
              })
            )
          );
        }),
        k = (0, u.yV)(function (e, t) {
          let n = null !== (0, i.useContext)(y),
            r = null !== (0, l.oJ)();
          return i.createElement(
            i.Fragment,
            null,
            !n && r
              ? i.createElement(x, { ref: t, ...e })
              : i.createElement(D, { ref: t, ...e })
          );
        }),
        L = Object.assign(x, { Child: k, Root: x });
    },
    14007: function (e, t, n) {
      n.d(t, {
        O: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(3855);
      function i(e, t, n, i) {
        let u = (0, o.E)(n);
        (0, r.useEffect)(() => {
          function n(e) {
            u.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, i),
            () => e.removeEventListener(t, n, i)
          );
        }, [e, t, i]);
      }
    },
    73781: function (e, t, n) {
      n.d(t, {
        z: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(3855);
      let i = function (e) {
        let t = (0, o.E)(e);
        return r.useCallback((...e) => t.current(...e), [t]);
      };
    },
    19946: function (e, t, n) {
      n.d(t, {
        M: function () {
          return s;
        },
      });
      var r,
        o = n(67294),
        i = n(16723),
        u = n(82180);
      let l = 0;
      function a() {
        return ++l;
      }
      let s =
        null != (r = o.useId)
          ? r
          : function () {
              let e = (0, u.H)(),
                [t, n] = o.useState(e ? a : null);
              return (
                (0, i.e)(() => {
                  null === t && n(a());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
    },
    14879: function (e, t, n) {
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(16723);
      function i() {
        let e = (0, r.useRef)(!1);
        return (
          (0, o.e)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
    },
    16723: function (e, t, n) {
      n.d(t, {
        e: function () {
          return o;
        },
      });
      var r = n(67294);
      let o = n(43393).s ? r.useEffect : r.useLayoutEffect;
    },
    3855: function (e, t, n) {
      n.d(t, {
        E: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(16723);
      function i(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, o.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    39650: function (e, t, n) {
      n.d(t, {
        O: function () {
          return l;
        },
      });
      var r = n(67294),
        o = n(84575),
        i = n(3855);
      function u(e, t, n) {
        let o = (0, i.E)(t);
        (0, r.useEffect)(() => {
          function t(e) {
            o.current(e);
          }
          return (
            document.addEventListener(e, t, n),
            () => document.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
      function l(e, t, n = !0) {
        let i = (0, r.useRef)(!1);
        function l(n, r) {
          if (!i.current || n.defaultPrevented) return;
          let u = (function e(t) {
              return "function" == typeof t
                ? e(t())
                : Array.isArray(t) || t instanceof Set
                ? t
                : [t];
            })(e),
            l = r(n);
          if (null !== l && l.getRootNode().contains(l)) {
            for (let e of u) {
              if (null === e) continue;
              let t = e instanceof HTMLElement ? e : e.current;
              if (null != t && t.contains(l)) return;
            }
            return (
              (0, o.sP)(l, o.tJ.Loose) ||
                -1 === l.tabIndex ||
                n.preventDefault(),
              t(n, l)
            );
          }
        }
        (0, r.useEffect)(() => {
          requestAnimationFrame(() => {
            i.current = n;
          });
        }, [n]);
        let a = (0, r.useRef)(null);
        u(
          "mousedown",
          (e) => {
            var t, n;
            i.current &&
              (a.current =
                (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                  ? void 0
                  : n[0]) || e.target);
          },
          !0
        ),
          u(
            "click",
            (e) => {
              a.current && (l(e, () => a.current), (a.current = null));
            },
            !0
          ),
          u(
            "blur",
            (e) =>
              l(e, () =>
                window.document.activeElement instanceof HTMLIFrameElement
                  ? window.document.activeElement
                  : null
              ),
            !0
          );
      }
    },
    51074: function (e, t, n) {
      n.d(t, {
        i: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(15466);
      function i(...e) {
        return (0, r.useMemo)(() => (0, o.r)(...e), [...e]);
      }
    },
    82180: function (e, t, n) {
      n.d(t, {
        H: function () {
          return i;
        },
      });
      var r = n(67294);
      let o = { serverHandoffComplete: !1 };
      function i() {
        let [e, t] = (0, r.useState)(o.serverHandoffComplete);
        return (
          (0, r.useEffect)(() => {
            !0 !== e && t(!0);
          }, [e]),
          (0, r.useEffect)(() => {
            !1 === o.serverHandoffComplete && (o.serverHandoffComplete = !0);
          }, []),
          e
        );
      }
    },
    23784: function (e, t, n) {
      n.d(t, {
        T: function () {
          return l;
        },
        h: function () {
          return u;
        },
      });
      var r = n(67294),
        o = n(73781);
      let i = Symbol();
      function u(e, t = !0) {
        return Object.assign(e, { [i]: t });
      }
      function l(...e) {
        let t = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = (0, o.z)((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[i]))
          ? void 0
          : n;
      }
    },
    70638: function (e, t, n) {
      n.d(t, {
        N: function () {
          return u;
        },
        l: function () {
          return l;
        },
      });
      var r,
        o = n(67294),
        i = n(3855),
        u =
          (((r = u || {})[(r.Forwards = 0)] = "Forwards"),
          (r[(r.Backwards = 1)] = "Backwards"),
          r);
      function l() {
        var e, t;
        let n,
          r = (0, o.useRef)(0);
        return (
          (e = "keydown"),
          (t = (e) => {
            "Tab" === e.key && (r.current = e.shiftKey ? 1 : 0);
          }),
          (n = (0, i.E)(t)),
          (0, o.useEffect)(() => {
            function t(e) {
              n.current(e);
            }
            return (
              window.addEventListener(e, t, !0),
              () => window.removeEventListener(e, t, !0)
            );
          }, [e, !0]),
          r
        );
      }
    },
    46045: function (e, t, n) {
      n.d(t, {
        A: function () {
          return i;
        },
        _: function () {
          return u;
        },
      });
      var r,
        o = n(12351),
        i =
          (((r = i || {})[(r.None = 1)] = "None"),
          (r[(r.Focusable = 2)] = "Focusable"),
          (r[(r.Hidden = 4)] = "Hidden"),
          r);
      let u = (0, o.yV)(function (e, t) {
        let { features: n = 1, ...r } = e,
          i = {
            ref: t,
            "aria-hidden": 2 == (2 & n) || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...(4 == (4 & n) && 2 != (2 & n) && { display: "none" }),
            },
          };
        return (0,
        o.sY)({ ourProps: i, theirProps: r, slot: {}, defaultTag: "div", name: "Hidden" });
      });
    },
    16567: function (e, t, n) {
      n.d(t, {
        ZM: function () {
          return u;
        },
        oJ: function () {
          return l;
        },
        up: function () {
          return a;
        },
      });
      var r,
        o = n(67294);
      let i = (0, o.createContext)(null);
      i.displayName = "OpenClosedContext";
      var u =
        (((r = u || {})[(r.Open = 0)] = "Open"),
        (r[(r.Closed = 1)] = "Closed"),
        r);
      function l() {
        return (0, o.useContext)(i);
      }
      function a({ value: e, children: t }) {
        return o.createElement(i.Provider, { value: e }, t);
      }
    },
    64103: function (e, t, n) {
      function r(e) {
        let t = e.parentElement,
          n = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        let r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
        return (
          !(
            r &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)
          ) && r
        );
      }
      n.d(t, {
        P: function () {
          return r;
        },
      });
    },
    9362: function (e, t, n) {
      n.d(t, {
        k: function () {
          return o;
        },
      });
      var r = n(81021);
      function o() {
        let e = [],
          t = [],
          n = {
            enqueue(e) {
              t.push(e);
            },
            addEventListener: (e, t, r, o) => (
              e.addEventListener(t, r, o),
              n.add(() => e.removeEventListener(t, r, o))
            ),
            requestAnimationFrame(...e) {
              let t = requestAnimationFrame(...e);
              return n.add(() => cancelAnimationFrame(t));
            },
            nextFrame: (...e) =>
              n.requestAnimationFrame(() => n.requestAnimationFrame(...e)),
            setTimeout(...e) {
              let t = setTimeout(...e);
              return n.add(() => clearTimeout(t));
            },
            microTask(...e) {
              let t = { current: !0 };
              return (
                (0, r.Y)(() => {
                  t.current && e[0]();
                }),
                n.add(() => {
                  t.current = !1;
                })
              );
            },
            add: (t) => (
              e.push(t),
              () => {
                let n = e.indexOf(t);
                if (n >= 0) {
                  let [t] = e.splice(n, 1);
                  t();
                }
              }
            ),
            dispose() {
              for (let t of e.splice(0)) t();
            },
            async workQueue() {
              for (let e of t.splice(0)) await e();
            },
          };
        return n;
      }
    },
    84575: function (e, t, n) {
      n.d(t, {
        C5: function () {
          return h;
        },
        GO: function () {
          return p;
        },
        TO: function () {
          return c;
        },
        fE: function () {
          return d;
        },
        jA: function () {
          return g;
        },
        sP: function () {
          return m;
        },
        tJ: function () {
          return v;
        },
        z2: function () {
          return E;
        },
      });
      var r,
        o,
        i,
        u,
        l = n(32984),
        a = n(15466);
      let s = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((e) => `${e}:not([tabindex='-1'])`)
        .join(",");
      var c =
          (((r = c || {})[(r.First = 1)] = "First"),
          (r[(r.Previous = 2)] = "Previous"),
          (r[(r.Next = 4)] = "Next"),
          (r[(r.Last = 8)] = "Last"),
          (r[(r.WrapAround = 16)] = "WrapAround"),
          (r[(r.NoScroll = 32)] = "NoScroll"),
          r),
        d =
          (((o = d || {})[(o.Error = 0)] = "Error"),
          (o[(o.Overflow = 1)] = "Overflow"),
          (o[(o.Success = 2)] = "Success"),
          (o[(o.Underflow = 3)] = "Underflow"),
          o),
        f =
          (((i = f || {})[(i.Previous = -1)] = "Previous"),
          (i[(i.Next = 1)] = "Next"),
          i);
      function p(e = document.body) {
        return null == e ? [] : Array.from(e.querySelectorAll(s));
      }
      var v =
        (((u = v || {})[(u.Strict = 0)] = "Strict"),
        (u[(u.Loose = 1)] = "Loose"),
        u);
      function m(e, t = 0) {
        var n;
        return (
          e !== (null == (n = (0, a.r)(e)) ? void 0 : n.body) &&
          (0, l.E)(t, {
            0: () => e.matches(s),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(s)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      function h(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function E(e, t = (e) => e) {
        return e.slice().sort((e, n) => {
          let r = t(e),
            o = t(n);
          if (null === r || null === o) return 0;
          let i = r.compareDocumentPosition(o);
          return i & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : i & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function g(e, t, n = !0, r = null) {
        var o, i, u;
        let l = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          a = Array.isArray(e) ? (n ? E(e) : e) : p(e);
        r = null != r ? r : l.activeElement;
        let s,
          c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, a.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, a.indexOf(r)) + 1;
            if (8 & t) return a.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          v = 0,
          m = a.length;
        do {
          if (v >= m || v + m <= 0) return 0;
          let e = d + v;
          if (16 & t) e = (e + m) % m;
          else {
            if (e < 0) return 3;
            if (e >= m) return 1;
          }
          null == (s = a[e]) || s.focus(f), (v += c);
        } while (s !== l.activeElement);
        return (
          6 & t &&
            null !=
              (u =
                null == (i = null == (o = s) ? void 0 : o.matches)
                  ? void 0
                  : i.call(o, "textarea,input")) &&
            u &&
            s.select(),
          s.hasAttribute("tabindex") || s.setAttribute("tabindex", "0"),
          2
        );
      }
    },
    32984: function (e, t, n) {
      function r(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...n) : r;
        }
        let o = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(o, r), o);
      }
      n.d(t, {
        E: function () {
          return r;
        },
      });
    },
    81021: function (e, t, n) {
      function r(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
      n.d(t, {
        Y: function () {
          return r;
        },
      });
    },
    15466: function (e, t, n) {
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(43393);
      function o(e) {
        return r.s
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
    },
    12351: function (e, t, n) {
      n.d(t, {
        AN: function () {
          return l;
        },
        l4: function () {
          return a;
        },
        oA: function () {
          return p;
        },
        sY: function () {
          return s;
        },
        yV: function () {
          return f;
        },
      });
      var r,
        o,
        i = n(67294),
        u = n(32984),
        l =
          (((r = l || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        a =
          (((o = a || {})[(o.Unmount = 0)] = "Unmount"),
          (o[(o.Hidden = 1)] = "Hidden"),
          o);
      function s({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: r,
        features: o,
        visible: i = !0,
        name: l,
      }) {
        let a = d(t, e);
        if (i) return c(a, n, r, l);
        let s = null != o ? o : 0;
        if (2 & s) {
          let { static: e = !1, ...t } = a;
          if (e) return c(t, n, r, l);
        }
        if (1 & s) {
          let { unmount: e = !0, ...t } = a;
          return (0, u.E)(e ? 0 : 1, {
            0: () => null,
            1: () =>
              c({ ...t, hidden: !0, style: { display: "none" } }, n, r, l),
          });
        }
        return c(a, n, r, l);
      }
      function c(e, t = {}, n, r) {
        let {
            as: o = n,
            children: u,
            refName: l = "ref",
            ...a
          } = v(e, ["unmount", "static"]),
          s = void 0 !== e.ref ? { [l]: e.ref } : {},
          c = "function" == typeof u ? u(t) : u;
        a.className &&
          "function" == typeof a.className &&
          (a.className = a.className(t));
        let f = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
          e && (f["data-headlessui-state"] = n.join(" "));
        }
        if (o === i.Fragment && Object.keys(p(a)).length > 0) {
          if (!(0, i.isValidElement)(c) || (Array.isArray(c) && c.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${r} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(a)
                  .map((e) => `  - ${e}`)
                  .join("\n"),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ]
                  .map((e) => `  - ${e}`)
                  .join("\n"),
              ].join("\n")
            );
          return (0, i.cloneElement)(
            c,
            Object.assign(
              {},
              d(c.props, p(v(a, ["ref"]))),
              f,
              s,
              (function (...e) {
                return {
                  ref: e.every((e) => null == e)
                    ? void 0
                    : (t) => {
                        for (let n of e)
                          null != n &&
                            ("function" == typeof n ? n(t) : (n.current = t));
                      },
                };
              })(c.ref, s.ref)
            )
          );
        }
        return (0, i.createElement)(
          o,
          Object.assign(
            {},
            v(a, ["ref"]),
            o !== i.Fragment && s,
            o !== i.Fragment && f
          ),
          c
        );
      }
      function d(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((e) => [e, void 0]))
          );
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let o of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                o(t, ...r);
              }
            },
          });
        return t;
      }
      function f(e) {
        var t;
        return Object.assign((0, i.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function p(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function v(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
    },
    43393: function (e, t, n) {
      n.d(t, {
        s: function () {
          return r;
        },
      });
      let r = "undefined" == typeof window || "undefined" == typeof document;
    },
  },
]);
