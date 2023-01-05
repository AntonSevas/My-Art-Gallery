"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6324],
  {
    15158: function (t, e, n) {
      var r = n(828),
        a = n(85893),
        o = n(67294),
        c = n(11163),
        i = n(41664),
        l = n.n(i),
        s = n(86873),
        u = n(34829),
        d = n(98831),
        f = n(65543),
        h = n(5506),
        m = n(55563),
        x = n(68121),
        p = n(40169),
        v = n(61731),
        g = n(96486),
        y = n.n(g),
        b = {
          black: "text-black",
          lightgreen: "text-lime",
          green: "text-green",
          red: "text-red",
          blue: "text-blue",
          pink: "text-pink",
          yellow: "text-yellow",
        },
        w = function (t) {
          var e = t.pidN,
            n = t.open,
            i = t.onClose,
            l = t.maxPage,
            m = t.baseLink,
            x = t.cb,
            p = t.replace,
            v = (0, s.T_)("Components.pagination.pageChoose"),
            g = (0, c.useRouter)(),
            b = (0, r.Z)((0, o.useState)((e + 1).toString()), 2),
            w = b[0],
            j = b[1];
          return (0, a.jsx)(u.u, {
            show: n,
            as: o.Fragment,
            children: (0, a.jsx)(d.V, {
              onClose: i,
              className: "fixed inset-0 z-50 overflow-y-auto",
              children: (0, a.jsxs)("div", {
                className: "flex min-h-screen items-center justify-center",
                children: [
                  (0, a.jsx)(d.V.Overlay, {
                    className: "fixed inset-0 bg-black opacity-30",
                  }),
                  (0, a.jsx)(u.u.Child, {
                    enter: "transition duration-100 ease-out",
                    enterFrom: "transform scale-95 opacity-0",
                    enterTo: "transform scale-100 opacity-100",
                    leave: "transition duration-75 ease-out",
                    leaveFrom: "transform scale-100 opacity-100",
                    leaveTo: "transform scale-95 opacity-0",
                    children: (0, a.jsxs)("div", {
                      className:
                        "max-w-6xlxl relative mx-auto rounded-xl bg-white p-8",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex w-full justify-between pb-4",
                          children: [
                            (0, a.jsx)("span", {
                              className: "pr-2 font-thin",
                              children: v("title"),
                            }),
                            (0, a.jsx)("div", {
                              onClick: i,
                              className: "h-4 w-4",
                              children: (0, a.jsx)(h.Z, {}),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("form", {
                          className: "flex flex-col items-center",
                          onSubmit: function (t) {
                            t.preventDefault();
                            var e = y().clamp(0, Number(w) - 1, l);
                            if (x) x(e);
                            else {
                              var n = "".concat(m).concat(e);
                              p ? g.replace(n) : g.push(n);
                            }
                            i();
                          },
                          children: [
                            (0, a.jsx)("input", {
                              type: "number",
                              className:
                                "w-full appearance-none rounded border border-gray py-2 px-2 text-sm focus:outline-none",
                              value: w,
                              min: 1,
                              max: l + 1,
                              onChange: function (t) {
                                j(t.target.value);
                              },
                            }),
                            (0, a.jsx)("div", {
                              className: "pt-4 text-lg font-light",
                              children: (0, a.jsx)(f.o, {
                                customFont: !0,
                                isSubmit: !0,
                                children: v("go"),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        j = function (t) {
          var e = t.children,
            n = t.onClick;
          return (0, a.jsx)("span", {
            className: "w-4 cursor-pointer px-1 md:px-2",
            onClick: n,
            children: e,
          });
        };
      e.Z = function (t) {
        var e = t.pidN,
          n = t.baseLink,
          c = t.perPage,
          i = t.maxElem,
          s = t.color,
          u = t.cb,
          d = t.replace,
          f = t.query,
          h = (0, r.Z)((0, o.useState)(!1), 2),
          g = h[0],
          N = h[1],
          k = Math.ceil(i / c) - 1,
          Z = (function (t, e, n) {
            if (e <= t) return [n];
            if (e - t <= 8) return y().range(t, e + 1);
            if (y().inRange(n, t - 1, t + 3)) {
              var r = y().range(t, t + 3);
              return n === t + 2 && r.push(n + 1), r.push(null), r.push(e), r;
            }
            if (y().inRange(n, e - 2, e + 1)) {
              var a = [t];
              return (
                a.push(null),
                n === e - 2 && a.push(n - 1),
                a.concat(y().range(e - 2, e + 1))
              );
            }
            return [t, null, n - 1, n, n + 1, null, e];
          })(0, k, e),
          _ = function (t) {
            var e = t.to,
              r = t.num,
              o = t.children;
            return u
              ? (0, a.jsx)("div", {
                  onClick: function () {
                    return u(e);
                  },
                  children: r
                    ? (0, a.jsx)("span", {
                        className:
                          "cursor-pointer px-1 text-xs md:px-2 md:text-base",
                        children: e + 1,
                      })
                    : o,
                })
              : (0, a.jsx)(l(), {
                  href: { pathname: "".concat(n).concat(e), query: f },
                  passHref: !0,
                  replace: !!d,
                  legacyBehavior: !0,
                  children: r
                    ? (0, a.jsx)("span", {
                        className:
                          "cursor-pointer px-1 text-xs md:px-2 md:text-base",
                        children: e + 1,
                      })
                    : o,
                });
          },
          F = function (t) {
            var n = t.elem;
            return n === e
              ? (0, a.jsx)("span", {
                  className: "".concat(
                    b[null != s ? s : "blue"],
                    " w-4 text-center text-xs md:text-base"
                  ),
                  children: e + 1,
                })
              : y().isNull(n)
              ? (0, a.jsx)(j, {
                  onClick: function () {
                    return N(!0);
                  },
                  children: "...",
                })
              : (0, a.jsx)(_, { to: n, num: !0 });
          };
        return (0, a.jsxs)("div", {
          className: "pt-2",
          children: [
            (0, a.jsxs)("div", {
              className:
                "mx-auto flex w-full items-center justify-center gap-2 md:gap-5",
              children: [
                (0, a.jsx)(function () {
                  return (0,
                  a.jsxs)(a.Fragment, { children: [e > 0 ? (0, a.jsx)(_, { to: 0, children: (0, a.jsx)("div", { className: "h-6 w-10 cursor-pointer px-2 ".concat(b[null != s ? s : "black"]), children: (0, a.jsx)(m.Z, {}) }) }) : (0, a.jsx)("div", { className: "h-6 w-10 cursor-pointer px-2 text-gray", children: (0, a.jsx)(m.Z, {}) }), e > 0 ? (0, a.jsx)(_, { to: Math.max(e - 1, 0), children: (0, a.jsx)("div", { className: "h-6 w-10 cursor-pointer px-2 ".concat(b[null != s ? s : "black"]), children: (0, a.jsx)(x.Z, {}) }) }) : (0, a.jsx)("div", { className: "h-6 w-10 cursor-pointer px-2 text-gray", children: (0, a.jsx)(x.Z, {}) })] });
                }, {}),
                (0, a.jsx)("div", {
                  className:
                    "flex items-center justify-evenly gap-2 md:justify-center md:gap-5",
                  children: Z.map(function (t, e) {
                    return (0, a.jsx)(F, { elem: t }, "page" + e);
                  }),
                }),
                (0, a.jsx)(function () {
                  return (0,
                  a.jsxs)(a.Fragment, { children: [e < k ? (0, a.jsx)(_, { to: Math.min(e + 1, k), children: (0, a.jsx)("div", { className: "h-6 w-10 cursor-pointer px-2 ".concat(b[null != s ? s : "black"]), children: (0, a.jsx)(p.Z, {}) }) }) : (0, a.jsx)("div", { className: "h-6 w-10 cursor-pointer px-2 text-gray", children: (0, a.jsx)(p.Z, {}) }), e < k ? (0, a.jsx)(_, { to: k, children: (0, a.jsx)("div", { className: "h-6 w-10 cursor-pointer px-2 ".concat(b[null != s ? s : "black"]), children: (0, a.jsx)(v.Z, {}) }) }) : (0, a.jsx)("div", { className: "h-6 w-10 cursor-pointer px-2 text-gray", children: (0, a.jsx)(v.Z, {}) })] });
                }, {}),
              ],
            }),
            (0, a.jsx)(w, {
              open: g,
              baseLink: n,
              pidN: e,
              onClose: function () {
                return N(!1);
              },
              cb: u,
              maxPage: k,
            }),
          ],
        });
      };
    },
    65543: function (t, e, n) {
      n.d(e, {
        Q: function () {
          return i;
        },
        o: function () {
          return l;
        },
      });
      var r = n(85893);
      n(67294);
      var a = n(86873),
        o = n(41664),
        c = n.n(o),
        i = function (t) {
          var e = t.def,
            n = t.className,
            o = t.linkTo,
            i = t.children,
            l = t.inversedColors,
            s = t.autoWidth,
            u = t.fullWidth,
            d = t.customFont,
            f = t.gray,
            h = t.autoFont,
            m = t.yellow,
            x = t.big,
            p = (0, a.T_)("Components.custombutton");
          return (0, r.jsx)(c(), {
            href: null != o ? o : "/404",
            passHref: !0,
            legacyBehavior: !0,
            children: (0, r.jsx)("button", {
              className:
                null != n
                  ? n
                  : ""
                      .concat(
                        s ? "w-auto" : u ? "w-full" : "mx-auto w-44",
                        "\n          "
                      )
                      .concat(h ? "" : "text-sm", "\n          ")
                      .concat(
                        f
                          ? "border-gray text-gray hover:bg-gray hover:text-white"
                          : l
                          ? m
                            ? "border-yellow bg-yellow text-white hover:bg-white hover:text-yellow"
                            : "bg-almostBlack text-white hover:bg-black hover:text-white"
                          : m
                          ? "border-yellow text-yellow hover:bg-yellow hover:text-white"
                          : "border-gray-100 text-gray hover:border-gray hover:text-black",
                        "\n          "
                      )
                      .concat(
                        s ? "w-auto" : u ? "w-full" : "mx-auto w-44",
                        "\n          "
                      )
                      .concat(!d && "text-lg font-bold", "\n          ")
                      .concat(
                        x ? "py-4" : "py-2",
                        "\n          flex h-full items-center justify-evenly rounded border visited:outline-none focus:outline-none"
                      ),
              children: e ? p("deflink") : i,
            }),
          });
        },
        l = function (t) {
          var e = t.def,
            n = t.className,
            o = t.onClick,
            c = t.children,
            i = t.inversedColors,
            l = t.autoWidth,
            s = t.fullWidth,
            u = t.autoFont,
            d = t.addMargin,
            f = t.customFont,
            h = t.isSubmit,
            m = t.lighter,
            x = t.gray,
            p = t.yellow,
            v = t.disabled,
            g = t.style,
            y = t.big,
            b = t.noBorder,
            w = t.noRounded,
            j = t.muchBig,
            N = (0, a.T_)("Components.custombutton");
          return (0, r.jsx)("button", {
            style: g,
            disabled: v,
            onClick: o,
            type: h ? "submit" : "button",
            className:
              null != n
                ? n
                : ""
                    .concat(
                      l ? "w-auto" : s ? "w-full" : "mx-auto w-44",
                      "\n      "
                    )
                    .concat(u ? "" : "text-sm", "\n      ")
                    .concat(
                      x
                        ? "border-gray text-gray hover:bg-gray hover:text-white"
                        : i
                        ? p
                          ? "border-yellow bg-yellow text-white hover:bg-white hover:text-yellow"
                          : "bg-almostBlack text-white hover:bg-black hover:text-white"
                        : p
                        ? "border-yellow text-yellow hover:bg-yellow hover:text-white"
                        : "border-gray-100 text-gray hover:border-gray hover:text-black",
                      "\n      "
                    )
                    .concat(
                      m ? "border-opacity-80 bg-opacity-80" : "",
                      "\n      "
                    )
                    .concat(d ? "my-2" : "", "\n      ")
                    .concat(!f && "text-lg font-bold", "\n      ")
                    .concat(
                      j ? "py-4" : y ? "py-3 md:py-4" : "py-2 ",
                      "\n      "
                    )
                    .concat(b ? "" : "border", "\n      ")
                    .concat(w ? "" : "rounded", "\n      ")
                    .concat(
                      "",
                      "\n      group flex h-full items-center justify-center focus:outline-none"
                    ),
            children: e ? N("defbutton") : c,
          });
        };
    },
    21367: function (t, e, n) {
      n.d(e, {
        Fk: function () {
          return f;
        },
        Ge: function () {
          return Z;
        },
        Gl: function () {
          return y;
        },
        IJ: function () {
          return N;
        },
        Kl: function () {
          return j;
        },
        SL: function () {
          return m;
        },
        U$: function () {
          return _;
        },
        Ui: function () {
          return u;
        },
        Uw: function () {
          return w;
        },
        Yc: function () {
          return k;
        },
        Yh: function () {
          return h;
        },
        b4: function () {
          return b;
        },
        dF: function () {
          return g;
        },
        iQ: function () {
          return v;
        },
        mJ: function () {
          return x;
        },
        oO: function () {
          return p;
        },
        v_: function () {
          return s;
        },
        wX: function () {
          return d;
        },
      });
      var r = n(47568),
        a = n(36305),
        o = n(70655),
        c = n(8100);
      function i(t, e) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = (0, r.Z)(function (t, e) {
          return (0, o.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, fetch(t, e)];
              case 1:
                return [2, n.sent().json()];
            }
          });
        })).apply(this, arguments);
      }
      var s = function (t) {
          var e = t.shouldNotFetch,
            n = t.limit,
            r = t.offset,
            a = t.noRevalidate,
            o = t.additional;
          return (0, c.ZP)(
            e
              ? null
              : "/api/products/?limit="
                  .concat(n, "&offset=")
                  .concat(r)
                  .concat(void 0 === o ? "" : o),
            i,
            a
              ? {
                  revalidateIfStale: !1,
                  revalidateOnFocus: !1,
                  revalidateOnReconnect: !1,
                }
              : {}
          );
        },
        u = function (t) {
          var e = t.shouldNotFetch,
            n = t.limit,
            r = t.offset,
            a = t.noRevalidate,
            o = t.additional;
          return (0, c.ZP)(
            e
              ? null
              : "/api/products/?short&limit="
                  .concat(n, "&offset=")
                  .concat(r)
                  .concat(void 0 === o ? "" : o),
            i,
            a
              ? {
                  revalidateIfStale: !1,
                  revalidateOnFocus: !1,
                  revalidateOnReconnect: !1,
                }
              : {}
          );
        },
        d = function (t) {
          var e = t.shouldNotFetch,
            n = t.limit,
            r = t.offset,
            a = t.noRevalidate,
            o = t.additional;
          return (0, c.ZP)(
            e
              ? null
              : "/api/news/?limit="
                  .concat(n, "&offset=")
                  .concat(r)
                  .concat(void 0 === o ? "" : o),
            i,
            a
              ? {
                  revalidateIfStale: !1,
                  revalidateOnFocus: !1,
                  revalidateOnReconnect: !1,
                }
              : {}
          );
        },
        f = function (t) {
          var e = t.shouldNotFetch,
            n = t.limit,
            r = t.offset,
            a = t.additional;
          return (0, c.ZP)(
            e
              ? null
              : "/api/artists/?short&limit="
                  .concat(n, "&offset=")
                  .concat(r)
                  .concat(void 0 === a ? "" : a),
            i
          );
        },
        h = function (t) {
          var e = t.shouldNotFetch,
            n = t.limit,
            r = t.offset,
            a = t.limit_images,
            o = t.additional;
          return (0, c.ZP)(
            e
              ? null
              : "/api/artists/with_images?limit="
                  .concat(n, "&offset=")
                  .concat(r, "&limit_images=")
                  .concat(void 0 === a ? 4 : a)
                  .concat(void 0 === o ? "" : o),
            i
          );
        },
        m = function (t) {
          var e = t.shouldNotFetch,
            n = t.limit,
            r = t.offset,
            a = t.additional;
          return (0, c.ZP)(
            e
              ? null
              : "/api/artists/?limit="
                  .concat(n, "&offset=")
                  .concat(r)
                  .concat(void 0 === a ? "" : a),
            i
          );
        };
      (0, a.Z)([
        "art_arttype",
        "art_format",
        "art_genre",
        "art_material",
        "art_fitto",
        "art_arttypetag",
        "art_materialtag",
        "art_size",
        "art_themetag",
        "art_price",
      ]).concat([
        "art_news",
        "art_colortag",
        "art_product",
        "art_author",
        "promocode",
      ]);
      var x = function (t) {
          var e = t.type,
            n = t.limit,
            r = t.offset,
            a = t.search,
            o = t.revalidate,
            l = t.sort,
            s = t.additional;
          return (0, c.ZP)(
            "/api/crm/data/fetch/?type="
              .concat(e, "&limit=")
              .concat(null != n ? n : "", "&offset=")
              .concat(null != r ? r : "", "&search=")
              .concat(null != a ? a : "", "&sort=")
              .concat(null != l ? l : "", "&")
              .concat(null != s ? s : ""),
            i,
            o
              ? {
                  revalidateIfStale: !1,
                  revalidateOnFocus: !1,
                  revalidateOnReconnect: !1,
                }
              : void 0
          );
        },
        p = function (t) {
          var e = t.type,
            n = t.id,
            r = t.shouldNotFetch;
          return (0, c.ZP)(
            r ? "/api/crm/data/fetch/".concat(n, "/?type=").concat(e) : null,
            i,
            {
              revalidateIfStale: !1,
              revalidateOnFocus: !1,
              revalidateOnReconnect: !1,
            }
          );
        },
        v = function () {
          return (0, c.ZP)("/api/user/get", i);
        },
        g = function (t) {
          var e = t.type,
            n = t.limit,
            r = t.offset,
            a = t.revalidate,
            o = t.search,
            l = t.sort;
          return (0, c.ZP)(
            "/api/crm/clients/fetch/?type="
              .concat(null != e ? e : "", "&limit=")
              .concat(null != n ? n : "", "&offset=")
              .concat(null != r ? r : "", "&search=")
              .concat(null != o ? o : "", "&sort=")
              .concat(null != l ? l : ""),
            i,
            a
              ? {
                  revalidateIfStale: !1,
                  revalidateOnFocus: !1,
                  revalidateOnReconnect: !1,
                }
              : void 0
          );
        },
        y = function () {
          return (0, c.ZP)("/api/crm/data/filters", i, {
            revalidateOnReconnect: !1,
          });
        },
        b = function (t) {
          var e = t.date;
          return (0, c.ZP)(
            "/api/crm/data/calendar/fetch?date=".concat(e.format("YYYY-MM-DD")),
            i
          );
        },
        w = function (t) {
          var e = t.date;
          return (0, c.ZP)(
            "/api/crm/data/calendar/fetch/".concat(e.format("YYYY-MM-DD")),
            i
          );
        },
        j = function () {
          return (0, c.ZP)("/api/payment/get_currency", i);
        },
        N = function (t) {
          var e = t.id,
            n = t.offset,
            r = t.limit;
          return (0, c.ZP)(
            "/api/crm/clients/payments?id="
              .concat(e, "&limit=")
              .concat(r, "&offset=")
              .concat(n),
            i,
            {
              revalidateIfStale: !1,
              revalidateOnFocus: !1,
              revalidateOnReconnect: !1,
            }
          );
        },
        k = function (t) {
          var e = t.offset,
            n = t.limit;
          return (0, c.ZP)(
            "/api/user/order_history?limit=".concat(n, "&offset=").concat(e),
            i
          );
        },
        Z = function (t) {
          var e = t.id,
            n = t.offset,
            r = t.limit,
            a = t.shouldNotFetch;
          return (0, c.ZP)(
            a
              ? null
              : "/api/crm/clients/documents/get?id="
                  .concat(e, "&limit=")
                  .concat(r, "&offset=")
                  .concat(n),
            i,
            { revalidateOnFocus: !1, revalidateOnReconnect: !1 }
          );
        },
        _ = function (t) {
          var e = t.limit,
            n = t.offset,
            r = t.sort;
          return (0, c.ZP)(
            "/api/payment/all?limit="
              .concat(e, "&offset=")
              .concat(n, "&sort=")
              .concat(null != r ? r : ""),
            i
          );
        };
    },
  },
]);
