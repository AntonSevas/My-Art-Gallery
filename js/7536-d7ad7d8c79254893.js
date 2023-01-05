"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7536],
  {
    87536: function (e, r, t) {
      t.d(r, {
        Dq: function () {
          return he;
        },
        KN: function () {
          return T;
        },
        U2: function () {
          return y;
        },
        cI: function () {
          return Oe;
        },
        t8: function () {
          return q;
        },
      });
      var a = t(67294),
        s = (e) => "checkbox" === e.type,
        i = (e) => e instanceof Date,
        l = (e) => null == e;
      let n = (e) => "object" == typeof e;
      var u = (e) => !l(e) && !Array.isArray(e) && n(e) && !i(e),
        o = (e) =>
          u(e) && e.target
            ? s(e.target)
              ? e.target.checked
              : e.target.value
            : e,
        d = (e, r) =>
          e.has(((e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(r)),
        f = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
        c = (e) => void 0 === e,
        y = (e, r, t) => {
          if (!r || !u(e)) return t;
          let a = f(r.split(/[,[\].]+?/)).reduce(
            (e, r) => (l(e) ? e : e[r]),
            e
          );
          return c(a) || a === e ? (c(e[r]) ? t : e[r]) : a;
        };
      let m = "blur",
        h = "focusout",
        g = "onBlur",
        p = "onChange",
        _ = "onSubmit",
        v = "onTouched",
        b = "all",
        A = "max",
        x = "min",
        F = "maxLength",
        V = "minLength",
        w = "pattern",
        S = "required",
        k = "validate",
        D = a.createContext(null),
        C = () => a.useContext(D);
      var E = (e) => u(e) && !Object.keys(e).length,
        O = (e) => (Array.isArray(e) ? e : [e]);
      function j(e) {
        let r = a.useRef(e);
        (r.current = e),
          a.useEffect(() => {
            let t =
              !e.disabled &&
              r.current.subject.subscribe({ next: r.current.callback });
            return () => {
              t && t.unsubscribe();
            };
          }, [e.disabled]);
      }
      var N = (e) => "string" == typeof e,
        U =
          "undefined" != typeof window &&
          void 0 !== window.HTMLElement &&
          "undefined" != typeof document;
      function B(e) {
        let r,
          t = Array.isArray(e);
        if (e instanceof Date) r = new Date(e);
        else if (e instanceof Set) r = new Set(e);
        else {
          if (
            (U && (e instanceof Blob || e instanceof FileList)) ||
            (!t && !u(e))
          )
            return e;
          if (
            ((r = t ? [] : {}),
            Array.isArray(e) ||
              ((e) => {
                let r = e.constructor && e.constructor.prototype;
                return u(r) && r.hasOwnProperty("isPrototypeOf");
              })(e))
          )
            for (let t in e) r[t] = B(e[t]);
          else r = e;
        }
        return r;
      }
      var T = (e, r, t, a, s) =>
          r
            ? {
                ...t[e],
                types: {
                  ...(t[e] && t[e].types ? t[e].types : {}),
                  [a]: s || !0,
                },
              }
            : {},
        M = (e) => /^\w*$/.test(e),
        L = (e) => f(e.replace(/["|']|\]/g, "").split(/\.|\[/));
      function q(e, r, t) {
        let a = -1,
          s = M(r) ? [r] : L(r),
          i = s.length,
          l = i - 1;
        for (; ++a < i; ) {
          let r = s[a],
            i = t;
          if (a !== l) {
            let t = e[r];
            i = u(t) || Array.isArray(t) ? t : isNaN(+s[a + 1]) ? {} : [];
          }
          (e[r] = i), (e = e[r]);
        }
        return e;
      }
      let R = (e, r, t) => {
        for (let a of t || Object.keys(e)) {
          let t = y(e, a);
          if (t) {
            let { _f: e, ...a } = t;
            if (e && r(e.name)) {
              if (e.ref.focus) {
                e.ref.focus();
                break;
              }
              if (e.refs && e.refs[0].focus) {
                e.refs[0].focus();
                break;
              }
            } else u(a) && R(a, r);
          }
        }
      };
      var I = () => {
          let e =
            "undefined" == typeof performance
              ? Date.now()
              : 1e3 * performance.now();
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            (r) => {
              let t = (16 * Math.random() + e) % 16 | 0;
              return ("x" == r ? t : (3 & t) | 8).toString(16);
            }
          );
        },
        $ = (e, r, t = {}) =>
          t.shouldFocus || c(t.shouldFocus)
            ? t.focusName || `${e}.${c(t.focusIndex) ? r : t.focusIndex}.`
            : "",
        P = (e, r, t) =>
          !t &&
          (r.watchAll ||
            r.watch.has(e) ||
            [...r.watch].some(
              (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
            )),
        H = (e, r, t) => {
          let a = f(y(e, t));
          return q(a, "root", r[t]), q(e, t, a), e;
        },
        W = (e) => "boolean" == typeof e,
        K = (e) => "file" === e.type,
        z = (e) => "function" == typeof e,
        G = (e) => N(e) || a.isValidElement(e),
        J = (e) => "radio" === e.type,
        Q = (e) => e instanceof RegExp;
      let X = { value: !1, isValid: !1 },
        Y = { value: !0, isValid: !0 };
      var Z = (e) => {
        if (Array.isArray(e)) {
          if (e.length > 1) {
            let r = e
              .filter((e) => e && e.checked && !e.disabled)
              .map((e) => e.value);
            return { value: r, isValid: !!r.length };
          }
          return e[0].checked && !e[0].disabled
            ? e[0].attributes && !c(e[0].attributes.value)
              ? c(e[0].value) || "" === e[0].value
                ? Y
                : { value: e[0].value, isValid: !0 }
              : Y
            : X;
        }
        return X;
      };
      let ee = { isValid: !1, value: null };
      var re = (e) =>
        Array.isArray(e)
          ? e.reduce(
              (e, r) =>
                r && r.checked && !r.disabled
                  ? { isValid: !0, value: r.value }
                  : e,
              ee
            )
          : ee;
      function te(e, r, t = "validate") {
        if (G(e) || (Array.isArray(e) && e.every(G)) || (W(e) && !e))
          return { type: t, message: G(e) ? e : "", ref: r };
      }
      var ae = (e) => (u(e) && !Q(e) ? e : { value: e, message: "" }),
        se = async (e, r, t, a, i) => {
          let {
            ref: n,
            refs: o,
            required: d,
            maxLength: f,
            minLength: c,
            min: y,
            max: m,
            pattern: h,
            validate: g,
            name: p,
            valueAsNumber: _,
            mount: v,
            disabled: b,
          } = e._f;
          if (!v || b) return {};
          let D = o ? o[0] : n,
            C = (e) => {
              a &&
                D.reportValidity &&
                (D.setCustomValidity(W(e) ? "" : e || ""), D.reportValidity());
            },
            O = {},
            j = J(n),
            U = s(n),
            B =
              ((_ || K(n)) && !n.value) ||
              "" === r ||
              (Array.isArray(r) && !r.length),
            M = T.bind(null, p, t, O),
            L = (e, r, t, a = F, s = V) => {
              let i = e ? r : t;
              O[p] = {
                type: e ? a : s,
                message: i,
                ref: n,
                ...M(e ? a : s, i),
              };
            };
          if (
            i
              ? !Array.isArray(r) || !r.length
              : d &&
                ((!j && !U && (B || l(r))) ||
                  (W(r) && !r) ||
                  (U && !Z(o).isValid) ||
                  (j && !re(o).isValid))
          ) {
            let { value: e, message: r } = G(d)
              ? { value: !!d, message: d }
              : ae(d);
            if (e && ((O[p] = { type: S, message: r, ref: D, ...M(S, r) }), !t))
              return C(r), O;
          }
          if (!(B || (l(y) && l(m)))) {
            let e,
              a,
              s = ae(m),
              i = ae(y);
            if (l(r) || isNaN(r)) {
              let t = n.valueAsDate || new Date(r),
                l = (e) => new Date(new Date().toDateString() + " " + e),
                u = "time" == n.type,
                o = "week" == n.type;
              N(s.value) &&
                r &&
                (e = u
                  ? l(r) > l(s.value)
                  : o
                  ? r > s.value
                  : t > new Date(s.value)),
                N(i.value) &&
                  r &&
                  (a = u
                    ? l(r) < l(i.value)
                    : o
                    ? r < i.value
                    : t < new Date(i.value));
            } else {
              let t = n.valueAsNumber || (r ? +r : r);
              l(s.value) || (e = t > s.value), l(i.value) || (a = t < i.value);
            }
            if ((e || a) && (L(!!e, s.message, i.message, A, x), !t))
              return C(O[p].message), O;
          }
          if ((f || c) && !B && (N(r) || (i && Array.isArray(r)))) {
            let e = ae(f),
              a = ae(c),
              s = !l(e.value) && r.length > e.value,
              i = !l(a.value) && r.length < a.value;
            if ((s || i) && (L(s, e.message, a.message), !t))
              return C(O[p].message), O;
          }
          if (h && !B && N(r)) {
            let { value: e, message: a } = ae(h);
            if (
              Q(e) &&
              !r.match(e) &&
              ((O[p] = { type: w, message: a, ref: n, ...M(w, a) }), !t)
            )
              return C(a), O;
          }
          if (g)
            if (z(g)) {
              let e = te(await g(r), D);
              if (e && ((O[p] = { ...e, ...M(k, e.message) }), !t))
                return C(e.message), O;
            } else if (u(g)) {
              let e = {};
              for (let a in g) {
                if (!E(e) && !t) break;
                let s = te(await g[a](r), D, a);
                s &&
                  ((e = { ...s, ...M(a, s.message) }),
                  C(s.message),
                  t && (O[p] = e));
              }
              if (!E(e) && ((O[p] = { ref: D, ...e }), !t)) return O;
            }
          return C(!0), O;
        };
      function ie(e, r) {
        return [...e, ...O(r)];
      }
      var le = (e) => (Array.isArray(e) ? e.map(() => {}) : void 0),
        ne = (e) => ({
          isOnSubmit: !e || e === _,
          isOnBlur: e === g,
          isOnChange: e === p,
          isOnAll: e === b,
          isOnTouch: e === v,
        });
      function ue(e, r, t) {
        return [...e.slice(0, r), ...O(t), ...e.slice(r)];
      }
      var oe = (e, r, t) =>
        Array.isArray(e)
          ? (c(e[t]) && (e[t] = void 0), e.splice(t, 0, e.splice(r, 1)[0]), e)
          : [];
      function de(e, r) {
        return [...O(r), ...O(e)];
      }
      var fe = (e, r) =>
          c(r)
            ? []
            : (function (e, r) {
                let t = 0,
                  a = [...e];
                for (let e of r) a.splice(e - t, 1), t++;
                return f(a).length ? a : [];
              })(
                e,
                O(r).sort((e, r) => e - r)
              ),
        ce = (e, r, t) => {
          e[r] = [e[t], (e[t] = e[r])][0];
        };
      function ye(e, r) {
        let t,
          a = M(r) ? [r] : L(r),
          s =
            1 == a.length
              ? e
              : (function (e, r) {
                  let t = r.slice(0, -1).length,
                    a = 0;
                  for (; a < t; ) e = c(e) ? a++ : e[r[a++]];
                  return e;
                })(e, a),
          i = a[a.length - 1];
        s && delete s[i];
        for (let r = 0; r < a.slice(0, -1).length; r++) {
          let s,
            i = -1,
            l = a.slice(0, -(r + 1)),
            n = l.length - 1;
          for (r > 0 && (t = e); ++i < l.length; ) {
            let r = l[i];
            (s = s ? s[r] : e[r]),
              n === i &&
                ((u(s) && E(s)) ||
                  (Array.isArray(s) &&
                    (function (e) {
                      for (let r in e) if (!c(e[r])) return !1;
                      return !0;
                    })(s))) &&
                (t ? delete t[r] : delete e[r]),
              (t = s);
          }
        }
        return e;
      }
      var me = (e, r, t) => ((e[r] = t), e);
      function he(e) {
        let r = C(),
          {
            control: t = r.control,
            name: s,
            keyName: i = "id",
            shouldUnregister: l,
          } = e,
          [n, u] = a.useState(t._getFieldArray(s)),
          o = a.useRef(t._getFieldArray(s).map(I)),
          d = a.useRef(n),
          f = a.useRef(s),
          c = a.useRef(!1);
        (f.current = s),
          (d.current = n),
          t._names.array.add(s),
          e.rules && t.register(s, e.rules),
          j({
            callback: a.useCallback(({ values: e, name: r }) => {
              if (r === f.current || !r) {
                let r = y(e, f.current);
                Array.isArray(r) && (u(r), (o.current = r.map(I)));
              }
            }, []),
            subject: t._subjects.array,
          });
        let m = a.useCallback(
          (e) => {
            (c.current = !0), t._updateFieldArray(s, e);
          },
          [t, s]
        );
        return (
          a.useEffect(() => {
            if (
              ((t._stateFlags.action = !1),
              P(s, t._names) && t._subjects.state.next({}),
              c.current &&
                (!ne(t._options.mode).isOnSubmit || t._formState.isSubmitted))
            )
              if (t._options.resolver)
                t._executeSchema([s]).then((e) => {
                  let r = y(e.errors, s),
                    a = y(t._formState.errors, s);
                  (a ? !r && a.type : r && r.type) &&
                    (r
                      ? q(t._formState.errors, s, r)
                      : ye(t._formState.errors, s),
                    t._subjects.state.next({ errors: t._formState.errors }));
                });
              else {
                let e = y(t._fields, s);
                e &&
                  e._f &&
                  se(
                    e,
                    y(t._formValues, s),
                    t._options.criteriaMode === b,
                    t._options.shouldUseNativeValidation,
                    !0
                  ).then(
                    (e) =>
                      !E(e) &&
                      t._subjects.state.next({
                        errors: H(t._formState.errors, e, s),
                      })
                  );
              }
            t._subjects.watch.next({ name: s, values: t._formValues }),
              t._names.focus &&
                R(t._fields, (e) => !!e && e.startsWith(t._names.focus || "")),
              (t._names.focus = ""),
              t._proxyFormState.isValid && t._updateValid();
          }, [n, s, t]),
          a.useEffect(
            () => (
              y(t._formValues, s) || t._updateFieldArray(s),
              () => {
                (t._options.shouldUnregister || l) && t.unregister(s);
              }
            ),
            [s, t, i, l]
          ),
          {
            swap: a.useCallback(
              (e, r) => {
                let a = t._getFieldArray(s);
                ce(a, e, r),
                  ce(o.current, e, r),
                  m(a),
                  u(a),
                  t._updateFieldArray(s, a, ce, { argA: e, argB: r }, !1);
              },
              [m, s, t]
            ),
            move: a.useCallback(
              (e, r) => {
                let a = t._getFieldArray(s);
                oe(a, e, r),
                  oe(o.current, e, r),
                  m(a),
                  u(a),
                  t._updateFieldArray(s, a, oe, { argA: e, argB: r }, !1);
              },
              [m, s, t]
            ),
            prepend: a.useCallback(
              (e, r) => {
                let a = O(B(e)),
                  i = de(t._getFieldArray(s), a);
                (t._names.focus = $(s, 0, r)),
                  (o.current = de(o.current, a.map(I))),
                  m(i),
                  u(i),
                  t._updateFieldArray(s, i, de, { argA: le(e) });
              },
              [m, s, t]
            ),
            append: a.useCallback(
              (e, r) => {
                let a = O(B(e)),
                  i = ie(t._getFieldArray(s), a);
                (t._names.focus = $(s, i.length - 1, r)),
                  (o.current = ie(o.current, a.map(I))),
                  m(i),
                  u(i),
                  t._updateFieldArray(s, i, ie, { argA: le(e) });
              },
              [m, s, t]
            ),
            remove: a.useCallback(
              (e) => {
                let r = fe(t._getFieldArray(s), e);
                (o.current = fe(o.current, e)),
                  m(r),
                  u(r),
                  t._updateFieldArray(s, r, fe, { argA: e });
              },
              [m, s, t]
            ),
            insert: a.useCallback(
              (e, r, a) => {
                let i = O(B(r)),
                  l = ue(t._getFieldArray(s), e, i);
                (t._names.focus = $(s, e, a)),
                  (o.current = ue(o.current, e, i.map(I))),
                  m(l),
                  u(l),
                  t._updateFieldArray(s, l, ue, { argA: e, argB: le(r) });
              },
              [m, s, t]
            ),
            update: a.useCallback(
              (e, r) => {
                let a = B(r),
                  i = me(t._getFieldArray(s), e, a);
                (o.current = [...i].map((r, t) =>
                  r && t !== e ? o.current[t] : I()
                )),
                  m(i),
                  u([...i]),
                  t._updateFieldArray(s, i, me, { argA: e, argB: a }, !0, !1);
              },
              [m, s, t]
            ),
            replace: a.useCallback(
              (e) => {
                let r = O(B(e));
                (o.current = r.map(I)),
                  m([...r]),
                  u([...r]),
                  t._updateFieldArray(s, [...r], (e) => e, {}, !0, !1);
              },
              [m, s, t]
            ),
            fields: a.useMemo(
              () => n.map((e, r) => ({ ...e, [i]: o.current[r] || I() })),
              [n, i]
            ),
          }
        );
      }
      function ge() {
        let e = [];
        return {
          get observers() {
            return e;
          },
          next: (r) => {
            for (let t of e) t.next(r);
          },
          subscribe: (r) => (
            e.push(r),
            {
              unsubscribe() {
                e = e.filter((e) => e !== r);
              },
            }
          ),
          unsubscribe: () => {
            e = [];
          },
        };
      }
      var pe = (e) => l(e) || !n(e);
      function _e(e, r) {
        if (pe(e) || pe(r)) return e === r;
        if (i(e) && i(r)) return e.getTime() === r.getTime();
        let t = Object.keys(e),
          a = Object.keys(r);
        if (t.length !== a.length) return !1;
        for (let s of t) {
          let t = e[s];
          if (!a.includes(s)) return !1;
          if ("ref" !== s) {
            let e = r[s];
            if (
              (i(t) && i(e)) ||
              (u(t) && u(e)) ||
              (Array.isArray(t) && Array.isArray(e))
                ? !_e(t, e)
                : t !== e
            )
              return !1;
          }
        }
        return !0;
      }
      var ve = (e) => {
          let r = e ? e.ownerDocument : 0;
          return (
            e instanceof
            (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement)
          );
        },
        be = (e) => "select-multiple" === e.type,
        Ae = (e) => J(e) || s(e),
        xe = (e) => ve(e) && e.isConnected,
        Fe = (e) => {
          for (let r in e) if (z(e[r])) return !0;
          return !1;
        };
      function Ve(e, r = {}) {
        let t = Array.isArray(e);
        if (u(e) || t)
          for (let t in e)
            Array.isArray(e[t]) || (u(e[t]) && !Fe(e[t]))
              ? ((r[t] = Array.isArray(e[t]) ? [] : {}), Ve(e[t], r[t]))
              : l(e[t]) || (r[t] = !0);
        return r;
      }
      var we = (e, r) =>
          (function e(r, t, a) {
            let s = Array.isArray(r);
            if (u(r) || s)
              for (let s in r)
                Array.isArray(r[s]) || (u(r[s]) && !Fe(r[s]))
                  ? c(t) || pe(a[s])
                    ? (a[s] = Array.isArray(r[s])
                        ? Ve(r[s], [])
                        : { ...Ve(r[s]) })
                    : e(r[s], l(t) ? {} : t[s], a[s])
                  : _e(r[s], t[s])
                  ? delete a[s]
                  : (a[s] = !0);
            return a;
          })(e, r, Ve(r)),
        Se = (e, { valueAsNumber: r, valueAsDate: t, setValueAs: a }) =>
          c(e)
            ? e
            : r
            ? "" === e
              ? NaN
              : e
              ? +e
              : e
            : t && N(e)
            ? new Date(e)
            : a
            ? a(e)
            : e;
      function ke(e) {
        let r = e.ref;
        return (e.refs ? e.refs.every((e) => e.disabled) : r.disabled)
          ? void 0
          : K(r)
          ? r.files
          : J(r)
          ? re(e.refs).value
          : be(r)
          ? [...r.selectedOptions].map(({ value: e }) => e)
          : s(r)
          ? Z(e.refs).value
          : Se(c(r.value) ? e.ref.value : r.value, e);
      }
      var De = (e) =>
        c(e)
          ? e
          : Q(e)
          ? e.source
          : u(e)
          ? Q(e.value)
            ? e.value.source
            : e.value
          : e;
      function Ce(e, r, t) {
        let a = y(e, t);
        if (a || M(t)) return { error: a, name: t };
        let s = t.split(".");
        for (; s.length; ) {
          let a = s.join("."),
            i = y(r, a),
            l = y(e, a);
          if (i && !Array.isArray(i) && t !== a) break;
          if (l && l.type) return { name: a, error: l };
          s.pop();
        }
        return { name: t };
      }
      let Ee = { mode: _, reValidateMode: p, shouldFocusError: !0 };
      function Oe(e = {}) {
        let r = a.useRef(),
          [t, n] = a.useState({
            isDirty: !1,
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            errors: {},
            defaultValues: e.defaultValues,
          });
        r.current ||
          (r.current = {
            ...(function (e = {}) {
              let r,
                t = { ...Ee, ...e },
                a = {
                  submitCount: 0,
                  isDirty: !1,
                  isValidating: !1,
                  isSubmitted: !1,
                  isSubmitting: !1,
                  isSubmitSuccessful: !1,
                  isValid: !1,
                  touchedFields: {},
                  dirtyFields: {},
                  errors: {},
                },
                n = {},
                u = B(t.defaultValues) || {},
                g = t.shouldUnregister ? {} : B(u),
                p = { action: !1, mount: !1, watch: !1 },
                _ = {
                  mount: new Set(),
                  unMount: new Set(),
                  array: new Set(),
                  watch: new Set(),
                },
                v = 0,
                A = {},
                x = {
                  isDirty: !1,
                  dirtyFields: !1,
                  touchedFields: !1,
                  isValidating: !1,
                  isValid: !1,
                  errors: !1,
                },
                F = { watch: ge(), array: ge(), state: ge() },
                V = ne(t.mode),
                w = ne(t.reValidateMode),
                S = t.criteriaMode === b,
                k = async () => {
                  if (x.isValid) {
                    let e = t.resolver
                      ? E((await T()).errors)
                      : (await M(n, !0)).valid;
                    e !== a.isValid &&
                      ((a.isValid = e), F.state.next({ isValid: e }));
                  }
                },
                D = (e, r, t, a) => {
                  let s = y(n, e);
                  if (s) {
                    let i = y(g, e, c(t) ? y(u, e) : t);
                    c(i) || (a && a.defaultChecked) || r
                      ? q(g, e, r ? i : ke(s._f))
                      : $(e, i),
                      p.mount && k();
                  }
                },
                C = (e, r, t, s, i) => {
                  let l = !1,
                    n = !1,
                    o = { name: e };
                  if (
                    (x.isDirty &&
                      ((n = a.isDirty),
                      (a.isDirty = o.isDirty = L()),
                      (l = n !== o.isDirty)),
                    x.dirtyFields && (!t || s))
                  ) {
                    n = y(a.dirtyFields, e);
                    let t = _e(y(u, e), r);
                    t ? ye(a.dirtyFields, e) : q(a.dirtyFields, e, !0),
                      (o.dirtyFields = a.dirtyFields),
                      (l = l || !t !== n);
                  }
                  if (t) {
                    let r = y(a.touchedFields, e);
                    r ||
                      (q(a.touchedFields, e, t),
                      (o.touchedFields = a.touchedFields),
                      (l = l || (x.touchedFields && r !== t)));
                  }
                  return l && i && F.state.next(o), l ? o : {};
                },
                j = (t, s, i, l) => {
                  let n = y(a.errors, t),
                    u = x.isValid && W(s) && a.isValid !== s;
                  if (
                    (e.delayError && i
                      ? (r = ((e) => (r) => {
                          clearTimeout(v), (v = window.setTimeout(e, r));
                        })(() =>
                          ((e, r) => {
                            q(a.errors, e, r),
                              F.state.next({ errors: a.errors });
                          })(t, i)
                        ))(e.delayError)
                      : (clearTimeout(v),
                        (r = null),
                        i ? q(a.errors, t, i) : ye(a.errors, t)),
                    (i ? !_e(n, i) : n) || !E(l) || u)
                  ) {
                    let e = {
                      ...l,
                      ...(u && W(s) ? { isValid: s } : {}),
                      errors: a.errors,
                      name: t,
                    };
                    (a = { ...a, ...e }), F.state.next(e);
                  }
                  A[t]--,
                    x.isValidating &&
                      !Object.values(A).some((e) => e) &&
                      (F.state.next({ isValidating: !1 }), (A = {}));
                },
                T = async (e) =>
                  await t.resolver(
                    g,
                    t.context,
                    ((e, r, t, a) => {
                      let s = {};
                      for (let t of e) {
                        let e = y(r, t);
                        e && q(s, t, e._f);
                      }
                      return {
                        criteriaMode: t,
                        names: [...e],
                        fields: s,
                        shouldUseNativeValidation: a,
                      };
                    })(
                      e || _.mount,
                      n,
                      t.criteriaMode,
                      t.shouldUseNativeValidation
                    )
                  ),
                M = async (e, r, s = { valid: !0 }) => {
                  for (let i in e) {
                    let l = e[i];
                    if (l) {
                      let { _f: e, ...i } = l;
                      if (e) {
                        let i = _.array.has(e.name),
                          n = await se(
                            l,
                            y(g, e.name),
                            S,
                            t.shouldUseNativeValidation,
                            i
                          );
                        if (
                          n[e.name] &&
                          (e.name === s.name && (s.error = n[s.name]),
                          (s.valid = !1),
                          r)
                        )
                          break;
                        r ||
                          (y(n, e.name)
                            ? i
                              ? H(a.errors, n, e.name)
                              : q(a.errors, e.name, n[e.name])
                            : ye(a.errors, e.name));
                      }
                      i && (await M(i, r, s));
                    }
                  }
                  return s;
                },
                L = (e, r) => (e && r && q(g, e, r), !_e(Y(), u)),
                I = (e, r, t) =>
                  ((e, r, t, a) =>
                    N(e)
                      ? (a && r.watch.add(e), y(t, e))
                      : Array.isArray(e)
                      ? e.map((e) => (a && r.watch.add(e), y(t, e)))
                      : (a && (r.watchAll = !0), t))(
                    e,
                    _,
                    { ...(p.mount ? g : c(r) ? u : N(e) ? { [e]: r } : r) },
                    t
                  ),
                $ = (e, r, t = {}) => {
                  let a = y(n, e),
                    i = r;
                  if (a) {
                    let t = a._f;
                    t &&
                      (t.disabled || q(g, e, Se(r, t)),
                      (i = U && ve(t.ref) && l(r) ? "" : r),
                      be(t.ref)
                        ? [...t.ref.options].forEach(
                            (e) => (e.selected = i.includes(e.value))
                          )
                        : t.refs
                        ? s(t.ref)
                          ? t.refs.length > 1
                            ? t.refs.forEach(
                                (e) =>
                                  (!e.defaultChecked || !e.disabled) &&
                                  (e.checked = Array.isArray(i)
                                    ? !!i.find((r) => r === e.value)
                                    : i === e.value)
                              )
                            : t.refs[0] && (t.refs[0].checked = !!i)
                          : t.refs.forEach((e) => (e.checked = e.value === i))
                        : K(t.ref)
                        ? (t.ref.value = "")
                        : ((t.ref.value = i),
                          t.ref.type || F.watch.next({ name: e })));
                  }
                  (t.shouldDirty || t.shouldTouch) &&
                    C(e, i, t.shouldTouch, t.shouldDirty, !0),
                    t.shouldValidate && X(e);
                },
                G = (e, r, t) => {
                  for (let a in r) {
                    let s = r[a],
                      l = `${e}.${a}`,
                      u = y(n, l);
                    (!_.array.has(e) && pe(s) && (!u || u._f)) || i(s)
                      ? $(l, s, t)
                      : G(l, s, t);
                  }
                },
                J = (e, r, t = {}) => {
                  let s = y(n, e),
                    i = _.array.has(e),
                    o = B(r);
                  q(g, e, o),
                    i
                      ? (F.array.next({ name: e, values: g }),
                        (x.isDirty || x.dirtyFields) &&
                          t.shouldDirty &&
                          ((a.dirtyFields = we(u, g)),
                          F.state.next({
                            name: e,
                            dirtyFields: a.dirtyFields,
                            isDirty: L(e, o),
                          })))
                      : !s || s._f || l(o)
                      ? $(e, o, t)
                      : G(e, o, t),
                    P(e, _) && F.state.next({}),
                    F.watch.next({ name: e });
                },
                Q = async (e) => {
                  let s = e.target,
                    i = s.name,
                    l = y(n, i);
                  if (l) {
                    let u,
                      d,
                      f = s.type ? ke(l._f) : o(e),
                      c = e.type === m || e.type === h,
                      p =
                        (!((e) =>
                          e.mount &&
                          (e.required ||
                            e.min ||
                            e.max ||
                            e.maxLength ||
                            e.minLength ||
                            e.pattern ||
                            e.validate))(l._f) &&
                          !t.resolver &&
                          !y(a.errors, i) &&
                          !l._f.deps) ||
                        ((e, r, t, a, s) =>
                          !s.isOnAll &&
                          (!t && s.isOnTouch
                            ? !(r || e)
                            : (t ? a.isOnBlur : s.isOnBlur)
                            ? !e
                            : (t ? !a.isOnChange : !s.isOnChange) || e))(
                          c,
                          y(a.touchedFields, i),
                          a.isSubmitted,
                          w,
                          V
                        ),
                      v = P(i, _, c);
                    q(g, i, f),
                      c
                        ? (l._f.onBlur && l._f.onBlur(e), r && r(0))
                        : l._f.onChange && l._f.onChange(e);
                    let b = C(i, f, c, !1),
                      D = !E(b) || v;
                    if ((c || F.watch.next({ name: i, type: e.type }), p))
                      return (
                        x.isValid && k(),
                        D && F.state.next({ name: i, ...(v ? {} : b) })
                      );
                    if (
                      (!c && v && F.state.next({}),
                      (A[i] = A[i] ? A[i] + 1 : 1),
                      F.state.next({ isValidating: !0 }),
                      t.resolver)
                    ) {
                      let { errors: e } = await T([i]),
                        r = Ce(a.errors, n, i),
                        t = Ce(e, n, r.name || i);
                      (u = t.error), (i = t.name), (d = E(e));
                    } else {
                      if (x.isValid) {
                        let e = await M(n, !0, { name: i, valid: !0 });
                        (u = e.error || {}), (d = e.valid);
                      }
                      (!u || E(u)) &&
                        (u = (
                          await se(l, y(g, i), S, t.shouldUseNativeValidation)
                        )[i]);
                    }
                    l._f.deps && X(l._f.deps), j(i, d, u, b);
                  }
                },
                X = async (e, r = {}) => {
                  let s,
                    i,
                    l = O(e);
                  if ((F.state.next({ isValidating: !0 }), t.resolver)) {
                    let r = await (async (e) => {
                      let { errors: r } = await T();
                      if (e)
                        for (let t of e) {
                          let e = y(r, t);
                          e ? q(a.errors, t, e) : ye(a.errors, t);
                        }
                      else a.errors = r;
                      return r;
                    })(c(e) ? e : l);
                    (s = E(r)), (i = e ? !l.some((e) => y(r, e)) : s);
                  } else
                    e
                      ? ((i = (
                          await Promise.all(
                            l.map(async (e) => {
                              let r = y(n, e);
                              return (await M(r && r._f ? { [e]: r } : r))
                                .valid;
                            })
                          )
                        ).every(Boolean)) ||
                          a.isValid) &&
                        k()
                      : (i = s = (await M(n)).valid);
                  return (
                    F.state.next({
                      ...(!N(e) || (x.isValid && s !== a.isValid)
                        ? {}
                        : { name: e }),
                      ...(t.resolver || !e ? { isValid: s } : {}),
                      errors: a.errors,
                      isValidating: !1,
                    }),
                    r.shouldFocus &&
                      !i &&
                      R(n, (e) => e && y(a.errors, e), e ? l : _.mount),
                    i
                  );
                },
                Y = (e) => {
                  let r = { ...u, ...(p.mount ? g : {}) };
                  return c(e) ? r : N(e) ? y(r, e) : e.map((e) => y(r, e));
                },
                Z = (e, r) => ({
                  invalid: !!y((r || a).errors, e),
                  isDirty: !!y((r || a).dirtyFields, e),
                  isTouched: !!y((r || a).touchedFields, e),
                  error: y((r || a).errors, e),
                }),
                ee = (e, r = {}) => {
                  for (let s of e ? O(e) : _.mount)
                    _.mount.delete(s),
                      _.array.delete(s),
                      y(n, s) &&
                        (r.keepValue || (ye(n, s), ye(g, s)),
                        r.keepError || ye(a.errors, s),
                        r.keepDirty || ye(a.dirtyFields, s),
                        r.keepTouched || ye(a.touchedFields, s),
                        t.shouldUnregister || r.keepDefaultValue || ye(u, s));
                  F.watch.next({}),
                    F.state.next({
                      ...a,
                      ...(r.keepDirty ? { isDirty: L() } : {}),
                    }),
                    r.keepIsValid || k();
                },
                re = (e, r = {}) => {
                  let a = y(n, e),
                    s = W(r.disabled);
                  return (
                    q(n, e, {
                      ...(a || {}),
                      _f: {
                        ...(a && a._f ? a._f : { ref: { name: e } }),
                        name: e,
                        mount: !0,
                        ...r,
                      },
                    }),
                    _.mount.add(e),
                    a
                      ? s && q(g, e, r.disabled ? void 0 : y(g, e, ke(a._f)))
                      : D(e, !0, r.value),
                    {
                      ...(s ? { disabled: r.disabled } : {}),
                      ...(t.shouldUseNativeValidation
                        ? {
                            required: !!r.required,
                            min: De(r.min),
                            max: De(r.max),
                            minLength: De(r.minLength),
                            maxLength: De(r.maxLength),
                            pattern: De(r.pattern),
                          }
                        : {}),
                      name: e,
                      onChange: Q,
                      onBlur: Q,
                      ref(s) {
                        if (s) {
                          re(e, r), (a = y(n, e));
                          let t =
                              (c(s.value) &&
                                s.querySelectorAll &&
                                s.querySelectorAll(
                                  "input,select,textarea"
                                )[0]) ||
                              s,
                            i = Ae(t),
                            l = a._f.refs || [];
                          (i ? l.find((e) => e === t) : t === a._f.ref) ||
                            (q(n, e, {
                              _f: {
                                ...a._f,
                                ...(i
                                  ? {
                                      refs: [
                                        ...l.filter(xe),
                                        t,
                                        ...(Array.isArray(y(u, e)) ? [{}] : []),
                                      ],
                                      ref: { type: t.type, name: e },
                                    }
                                  : { ref: t }),
                              },
                            }),
                            D(e, !1, void 0, t));
                        } else
                          (a = y(n, e, {}))._f && (a._f.mount = !1),
                            (t.shouldUnregister || r.shouldUnregister) &&
                              (!d(_.array, e) || !p.action) &&
                              _.unMount.add(e);
                      },
                    }
                  );
                },
                te = () =>
                  t.shouldFocusError &&
                  R(n, (e) => e && y(a.errors, e), _.mount),
                ae = (r, t = {}) => {
                  let s = r || u,
                    i = B(s),
                    l = r && !E(r) ? i : u;
                  if ((t.keepDefaultValues || (u = s), !t.keepValues)) {
                    if (t.keepDirtyValues)
                      for (let e of _.mount)
                        y(a.dirtyFields, e) ? q(l, e, y(g, e)) : J(e, y(l, e));
                    else {
                      if (U && c(r))
                        for (let e of _.mount) {
                          let r = y(n, e);
                          if (r && r._f) {
                            let e = Array.isArray(r._f.refs)
                              ? r._f.refs[0]
                              : r._f.ref;
                            if (ve(e)) {
                              let r = e.closest("form");
                              if (r) {
                                r.reset();
                                break;
                              }
                            }
                          }
                        }
                      n = {};
                    }
                    (g = e.shouldUnregister
                      ? t.keepDefaultValues
                        ? B(u)
                        : {}
                      : i),
                      F.array.next({ values: l }),
                      F.watch.next({ values: l });
                  }
                  (_ = {
                    mount: new Set(),
                    unMount: new Set(),
                    array: new Set(),
                    watch: new Set(),
                    watchAll: !1,
                    focus: "",
                  }),
                    (p.mount = !x.isValid || !!t.keepIsValid),
                    (p.watch = !!e.shouldUnregister),
                    F.state.next({
                      submitCount: t.keepSubmitCount ? a.submitCount : 0,
                      isDirty:
                        t.keepDirty || t.keepDirtyValues
                          ? a.isDirty
                          : !(!t.keepDefaultValues || _e(r, u)),
                      isSubmitted: !!t.keepIsSubmitted && a.isSubmitted,
                      dirtyFields:
                        t.keepDirty || t.keepDirtyValues
                          ? a.dirtyFields
                          : t.keepDefaultValues && r
                          ? we(u, r)
                          : {},
                      touchedFields: t.keepTouched ? a.touchedFields : {},
                      errors: t.keepErrors ? a.errors : {},
                      isSubmitting: !1,
                      isSubmitSuccessful: !1,
                    });
                };
              return {
                control: {
                  register: re,
                  unregister: ee,
                  getFieldState: Z,
                  _executeSchema: T,
                  _focusError: te,
                  _getWatch: I,
                  _getDirty: L,
                  _updateValid: k,
                  _removeUnmounted: () => {
                    for (let e of _.unMount) {
                      let r = y(n, e);
                      r &&
                        (r._f.refs
                          ? r._f.refs.every((e) => !xe(e))
                          : !xe(r._f.ref)) &&
                        ee(e);
                    }
                    _.unMount = new Set();
                  },
                  _updateFieldArray: (e, r = [], t, s, i = !0, l = !0) => {
                    if (s && t) {
                      if (((p.action = !0), l && Array.isArray(y(n, e)))) {
                        let r = t(y(n, e), s.argA, s.argB);
                        i && q(n, e, r);
                      }
                      if (l && Array.isArray(y(a.errors, e))) {
                        let r = t(y(a.errors, e), s.argA, s.argB);
                        i && q(a.errors, e, r),
                          ((e, r) => {
                            !f(y(e, r)).length && ye(e, r);
                          })(a.errors, e);
                      }
                      if (
                        x.touchedFields &&
                        l &&
                        Array.isArray(y(a.touchedFields, e))
                      ) {
                        let r = t(y(a.touchedFields, e), s.argA, s.argB);
                        i && q(a.touchedFields, e, r);
                      }
                      x.dirtyFields && (a.dirtyFields = we(u, g)),
                        F.state.next({
                          name: e,
                          isDirty: L(e, r),
                          dirtyFields: a.dirtyFields,
                          errors: a.errors,
                          isValid: a.isValid,
                        });
                    } else q(g, e, r);
                  },
                  _getFieldArray: (r) =>
                    f(
                      y(
                        p.mount ? g : u,
                        r,
                        e.shouldUnregister ? y(u, r, []) : []
                      )
                    ),
                  _subjects: F,
                  _proxyFormState: x,
                  get _fields() {
                    return n;
                  },
                  get _formValues() {
                    return g;
                  },
                  get _stateFlags() {
                    return p;
                  },
                  set _stateFlags(e) {
                    p = e;
                  },
                  get _defaultValues() {
                    return u;
                  },
                  get _names() {
                    return _;
                  },
                  set _names(e) {
                    _ = e;
                  },
                  get _formState() {
                    return a;
                  },
                  set _formState(e) {
                    a = e;
                  },
                  get _options() {
                    return t;
                  },
                  set _options(e) {
                    t = { ...t, ...e };
                  },
                },
                trigger: X,
                register: re,
                handleSubmit: (e, r) => async (s) => {
                  s &&
                    (s.preventDefault && s.preventDefault(),
                    s.persist && s.persist());
                  let i = !0,
                    l = B(g);
                  F.state.next({ isSubmitting: !0 });
                  try {
                    if (t.resolver) {
                      let { errors: e, values: r } = await T();
                      (a.errors = e), (l = r);
                    } else await M(n);
                    E(a.errors)
                      ? (F.state.next({ errors: {}, isSubmitting: !0 }),
                        await e(l, s))
                      : (r && (await r({ ...a.errors }, s)), te());
                  } catch (e) {
                    throw ((i = !1), e);
                  } finally {
                    (a.isSubmitted = !0),
                      F.state.next({
                        isSubmitted: !0,
                        isSubmitting: !1,
                        isSubmitSuccessful: E(a.errors) && i,
                        submitCount: a.submitCount + 1,
                        errors: a.errors,
                      });
                  }
                },
                watch: (e, r) =>
                  z(e)
                    ? F.watch.subscribe({ next: (t) => e(I(void 0, r), t) })
                    : I(e, r, !0),
                setValue: J,
                getValues: Y,
                reset: (e, r) => ae(z(e) ? e(g) : e, r),
                resetField: (e, r = {}) => {
                  y(n, e) &&
                    (c(r.defaultValue)
                      ? J(e, y(u, e))
                      : (J(e, r.defaultValue), q(u, e, r.defaultValue)),
                    r.keepTouched || ye(a.touchedFields, e),
                    r.keepDirty ||
                      (ye(a.dirtyFields, e),
                      (a.isDirty = r.defaultValue ? L(e, y(u, e)) : L())),
                    !r.keepError && (ye(a.errors, e), x.isValid && k()),
                    F.state.next({ ...a }));
                },
                clearErrors: (e) => {
                  e ? O(e).forEach((e) => ye(a.errors, e)) : (a.errors = {}),
                    F.state.next({ errors: a.errors });
                },
                unregister: ee,
                setError: (e, r, t) => {
                  let s = (y(n, e, { _f: {} })._f || {}).ref;
                  q(a.errors, e, { ...r, ref: s }),
                    F.state.next({ name: e, errors: a.errors, isValid: !1 }),
                    t && t.shouldFocus && s && s.focus && s.focus();
                },
                setFocus: (e, r = {}) => {
                  let t = y(n, e),
                    a = t && t._f;
                  if (a) {
                    let e = a.refs ? a.refs[0] : a.ref;
                    e.focus && (e.focus(), r.shouldSelect && e.select());
                  }
                },
                getFieldState: Z,
              };
            })(e),
            formState: t,
          });
        let u = r.current.control;
        return (
          (u._options = e),
          j({
            subject: u._subjects.state,
            callback: a.useCallback(
              (e) => {
                ((e, r, t) => {
                  let { name: a, ...s } = e;
                  return (
                    E(s) ||
                    Object.keys(s).length >= Object.keys(r).length ||
                    Object.keys(s).find((e) => r[e] === (!t || b))
                  );
                })(e, u._proxyFormState, !0) &&
                  ((u._formState = { ...u._formState, ...e }),
                  n({ ...u._formState }));
              },
              [u]
            ),
          }),
          a.useEffect(() => {
            u._stateFlags.mount ||
              (u._proxyFormState.isValid && u._updateValid(),
              (u._stateFlags.mount = !0)),
              u._stateFlags.watch &&
                ((u._stateFlags.watch = !1), u._subjects.state.next({})),
              u._removeUnmounted();
          }),
          a.useEffect(() => {
            t.submitCount && u._focusError();
          }, [u, t.submitCount]),
          (r.current.formState = ((e, r, t, a = !0) => {
            let s = { defaultValues: r._defaultValues };
            for (let i in e)
              Object.defineProperty(s, i, {
                get() {
                  let s = i;
                  return (
                    r._proxyFormState[s] !== b &&
                      (r._proxyFormState[s] = !a || b),
                    t && (t[s] = !0),
                    e[s]
                  );
                },
              });
            return s;
          })(t, u)),
          r.current
        );
      }
    },
  },
]);
