"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7775],
  {
    35518: function (e, l, r) {
      r.d(l, {
        _: function () {
          return w;
        },
        j: function () {
          return N;
        },
      });
      var t = r(7874),
        n = r(26042),
        s = r(69396),
        i = r(828),
        a = r(85893),
        o = r(47939),
        c = r(21367),
        d = r(81103),
        x = r(11163),
        u = r(41664),
        h = r.n(u),
        f = r(89755),
        m = r.n(f),
        p = r(86873),
        j = r(56299),
        v = r(65543),
        g = r(5506),
        b = r(3326),
        y = r(57855),
        w = function (e) {
          var l,
            r = e.id,
            t = e.image,
            n = e.image_preview,
            s = e.name,
            i = e.name_en,
            c = e.art_size,
            d = e.price,
            u = e.art_author,
            f = e.noX,
            p = e.currQuantity,
            j = e.close,
            v = (0, o.Z)().removeItem,
            w = (0, x.useRouter)().locale;
          return (0, a.jsx)("div", {
            className: "flex py-2",
            children: (0, a.jsxs)("div", {
              className: "flex flex-1 overflow-hidden rounded",
              children: [
                (0, a.jsx)(h(), {
                  href: "/item/".concat(r),
                  passHref: !0,
                  legacyBehavior: !0,
                  children: (0, a.jsx)("div", {
                    onClick: j,
                    className:
                      "relative w-40 max-w-md cursor-pointer overflow-hidden md:max-w-xs",
                    children: (0, a.jsx)(m(), {
                      loader: y.ei,
                      className: "object-cover",
                      layout: "fill",
                      unoptimized: !0,
                      src:
                        null !== (l = null != n ? n : t) && void 0 !== l
                          ? l
                          : "",
                      alt: "paint",
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "relative flex flex-1 flex-col border-2 border-l-0 border-gray-100 bg-white px-4 py-2",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex justify-between",
                      children: [
                        (0, a.jsx)("h1", {
                          className:
                            "max-w-[8rem] flex-1 truncate pb-6 text-left text-sm xl:max-w-[12rem]",
                          children: "ru" === w ? s : i,
                        }),
                        !f &&
                          (0, a.jsx)("div", {
                            className: "h-5 w-5 cursor-pointer text-gray",
                            onClick: function () {
                              return v(r.toString());
                            },
                            children: (0, a.jsx)(g.Z, {}),
                          }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex justify-between pb-3",
                      children: [
                        (0, a.jsx)("div", {
                          className: "text-xs",
                          children: "Author: ",
                        }),
                        (0, a.jsx)(h(), {
                          href: "/artists/info/".concat(
                            null == u ? void 0 : u.id
                          ),
                          passHref: !0,
                          legacyBehavior: !0,
                          children: (0, a.jsx)("div", {
                            onClick: j,
                            className:
                              "cursor-pointer pl-2 text-xs text-yellow underline hover:no-underline",
                            children:
                              "ru" === w
                                ? null == u
                                  ? void 0
                                  : u.name
                                : null == u
                                ? void 0
                                : u.name_en,
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex justify-between pb-3",
                      children: [
                        (0, a.jsx)("div", {
                          className: "text-xs",
                          children: "Size: ",
                        }),
                        (0, a.jsx)("div", {
                          className: "pl-2 text-xs",
                          children:
                            "ru" === w
                              ? null == c
                                ? void 0
                                : c.text
                              : null == c
                              ? void 0
                              : c.text_en,
                        }),
                      ],
                    }),
                    p &&
                      (0, a.jsxs)("div", {
                        className: "flex justify-between pb-3",
                        children: [
                          (0, a.jsx)("div", {
                            className: "text-xs",
                            children: "Quantity: ",
                          }),
                          (0, a.jsx)("div", {
                            className: "pl-2 text-xs",
                            children: p,
                          }),
                        ],
                      }),
                    (0, a.jsx)("div", {
                      className: "flex justify-end pb-3",
                      children: (0, a.jsx)(b.Z, {
                        price: d,
                        skipNonRubles: !0,
                        black: !0,
                        noPadding: !0,
                        small: !0,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        N = function (e) {
          (0, t.Z)(e);
          var l,
            r = (0, o.Z)(),
            u = r.items,
            h = r.isEmpty,
            f = r.idsList,
            m = (0, p.T_)("Components"),
            g = (0, x.useRouter)(),
            y = (0, d.o)(),
            N = (0, i.Z)(y.right, 2)[1],
            L = (0, c.v_)({
              shouldNotFetch: h,
              limit: 10,
              offset: 0,
              additional: "&id=".concat(f),
            }).data,
            C =
              null !==
                (l =
                  null == L
                    ? void 0
                    : L.results.reduce(function (e, l) {
                        return e + l.price;
                      }, 0)) && void 0 !== l
                ? l
                : 0;
          return L
            ? (0, a.jsxs)("div", {
                className:
                  "flex flex-1 flex-col justify-between bg-gray-200 pt-4",
                children: [
                  (0, a.jsx)("div", {
                    className: "flex flex-col overflow-auto px-4",
                    children: L.results.map(function (e) {
                      return (0, a.jsx)(
                        w,
                        (0, s.Z)((0, n.Z)({}, e), {
                          currQuantity: u.get(e.id.toString()),
                          close: function () {
                            return N(!1);
                          },
                        }),
                        e.id
                      );
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col border-t border-gray bg-white px-4 pb-6 pt-4",
                    children: [
                      C > 0 &&
                        (0, a.jsxs)("div", {
                          className: "flex justify-between pb-6",
                          children: [
                            (0, a.jsx)("div", {
                              className: "text-lg",
                              children: m("basket.total"),
                            }),
                            (0, a.jsx)(b.Z, {
                              price: C,
                              skipNonRubles: !0,
                              black: !0,
                              noPadding: !0,
                            }),
                          ],
                        }),
                      (0, a.jsx)(v.o, {
                        onClick: function () {
                          g.push("/basket"), N(!1);
                        },
                        fullWidth: !0,
                        inversedColors: !0,
                        big: !0,
                        customFont: !0,
                        children: m("bag"),
                      }),
                    ],
                  }),
                ],
              })
            : (0, a.jsx)(j.Z, {});
        };
    },
    14833: function (e, l, r) {
      r.d(l, {
        e: function () {
          return c;
        },
        g: function () {
          return o;
        },
      });
      var t = r(85893),
        n = r(34829),
        s = r(98831),
        i = r(67294),
        a = r(30220),
        o = function (e) {
          var l = e.open,
            r = e.close,
            o = e.children;
          return (0, t.jsx)(n.u, {
            show: l,
            children: (0, t.jsx)(s.V, {
              className: "fixed inset-0 z-50 overflow-y-auto",
              onClose: r,
              children: (0, t.jsxs)("div", {
                className: "flex h-full w-full",
                children: [
                  (0, t.jsx)(s.V.Overlay, {
                    className: "fixed inset-0 bg-black opacity-30",
                  }),
                  (0, t.jsx)(n.u.Child, {
                    enter: "transition ease-in-out duration-500 transform",
                    enterFrom: "translate-x-full",
                    enterTo: "translate-x-0",
                    leave: "transition ease-in-out duration-300 transform",
                    leaveFrom: "translate-x-0",
                    leaveTo: "translate-x-full",
                    as: i.Fragment,
                    children: (0, t.jsxs)("div", {
                      className:
                        "fixed right-0 flex h-full w-full flex-col overflow-auto bg-gray-200 md:w-5/12 xl:w-4/12",
                      children: [
                        (0, t.jsx)("div", {
                          className: "flex justify-end md:hidden",
                          children: (0, t.jsx)("button", {
                            onClick: r,
                            className:
                              "cursor-pointer rounded border border-white bg-gray-200 py-4 pr-4 focus:outline-none",
                            children: (0, t.jsx)("div", {
                              className: "h-4 w-4",
                              children: (0, t.jsx)(a.X1, {}),
                            }),
                          }),
                        }),
                        o,
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        c = function (e) {
          var l = e.open,
            r = e.close,
            o = e.children;
          return (0, t.jsx)(n.u, {
            show: l,
            children: (0, t.jsxs)(s.V, {
              className: "fixed inset-0 z-50",
              onClose: r,
              children: [
                (0, t.jsx)(s.V.Overlay, {
                  className: "fixed inset-0 bg-black opacity-30",
                }),
                (0, t.jsx)(n.u.Child, {
                  enter: "transition ease-in-out duration-500 transform",
                  enterFrom: "-translate-x-full",
                  enterTo: "translate-x-0",
                  leave: "transition ease-in-out duration-300 transform",
                  leaveFrom: "translate-x-0",
                  leaveTo: "-translate-x-full",
                  as: i.Fragment,
                  children: (0, t.jsxs)("div", {
                    className:
                      "flex h-full flex-col overflow-auto bg-gray-200 md:w-5/12 xl:w-4/12",
                    children: [
                      (0, t.jsx)("div", {
                        className: "flex justify-end md:hidden",
                        children: (0, t.jsx)("button", {
                          onClick: r,
                          className:
                            "cursor-pointer rounded border border-white bg-gray-200 py-4 pr-4 focus:outline-none",
                          children: (0, t.jsx)("div", {
                            className: "h-4 w-4",
                            children: (0, t.jsx)(a.X1, {}),
                          }),
                        }),
                      }),
                      o,
                    ],
                  }),
                }),
              ],
            }),
          });
        };
    },
    25295: function (e, l, r) {
      r.d(l, {
        Ui: function () {
          return m;
        },
        zq: function () {
          return p;
        },
      });
      var t = r(828),
        n = r(85893),
        s = r(67294),
        i = r(41664),
        a = r.n(i),
        o = r(86873),
        c = r(57775),
        d = r(63895),
        x = r(11163),
        u = r(56299),
        h = r(40169),
        f = r(34829),
        m = function () {
          return (0, n.jsxs)("svg", {
            className: "stroke-current h-full w-full",
            viewBox: "0 0 32 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M15.0544 1.5191L4.89658 6.81885L16.081 4.33341C17.1174 4.10311 17.5993 2.90386 17.0104 2.02051C16.5822 1.37827 15.7388 1.16205 15.0544 1.5191Z",
                fill: "currentColor",
              }),
              (0, n.jsx)("path", {
                d: "M22.9174 3.58803L8.35428 7.55979H23.46C24.8668 7.55979 25.8238 6.11984 25.3139 4.80876C24.9429 3.85467 23.905 3.31868 22.9174 3.58803Z",
                fill: "currentColor",
              }),
              (0, n.jsx)("path", {
                d: "M1.19189 24.2939V13.5477C1.19189 10.7863 3.43047 8.5477 6.1919 8.5477H24.3475C27.1089 8.5477 29.3475 10.7863 29.3475 13.5477V14.2282C30.3023 14.2282 31.0763 15.0022 31.0763 15.9571V18.9208V21.8846C31.0763 22.8394 30.3023 23.6134 29.3475 23.6134V24.2939C29.3475 27.0553 27.1089 29.2939 24.3475 29.2939H6.19189C3.43047 29.2939 1.19189 27.0553 1.19189 24.2939Z",
                fill: "currentColor",
              }),
              (0, n.jsx)("path", {
                d: "M29.3475 14.2282V14.2282C30.3023 14.2282 31.0763 15.0022 31.0763 15.9571V18.9208V21.8846C31.0763 22.8394 30.3023 23.6134 29.3475 23.6134V23.6134M29.3475 14.2282H21.4683C20.3638 14.2282 19.4683 15.1236 19.4683 16.2282V21.6134C19.4683 22.718 20.3638 23.6134 21.4683 23.6134H29.3475M29.3475 14.2282V13.5477C29.3475 10.7863 27.1089 8.5477 24.3475 8.5477H6.1919C3.43047 8.5477 1.19189 10.7863 1.19189 13.5477V24.2939C1.19189 27.0553 3.43047 29.2939 6.19189 29.2939H24.3475C27.1089 29.2939 29.3475 27.0553 29.3475 24.2939V23.6134M4.89658 6.81885L15.0544 1.5191C15.7388 1.16205 16.5822 1.37827 17.0104 2.02051V2.02051C17.5993 2.90386 17.1174 4.10311 16.081 4.33341L4.89658 6.81885ZM8.35428 7.55979L22.9174 3.58803C23.905 3.31868 24.9429 3.85467 25.3139 4.80876V4.80876C25.8238 6.11984 24.8668 7.55979 23.46 7.55979H8.35428Z",
                stroke: "white",
              }),
              (0, n.jsx)("circle", {
                cx: "23.173",
                cy: "18.9208",
                r: "1.72885",
                fill: "currentColor",
              }),
            ],
          });
        },
        p = function () {
          return (0, n.jsxs)("svg", {
            className: "stroke-current h-full w-full",
            viewBox: "0 0 36 34",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("rect", {
                x: "12.4068",
                y: "1.59355",
                width: "22.6979",
                height: "14.7946",
                rx: "2",
                transform: "rotate(10.98 12.4068 1.59355)",
                fill: "currentColor",
                stroke: "currentColor",
                strokeWidth: "2",
              }),
              (0, n.jsx)("rect", {
                x: "1.25719",
                y: "18.8027",
                width: "22.6979",
                height: "14.3309",
                rx: "2",
                transform: "rotate(-16.0533 1.25719 18.8027)",
                fill: "white",
                stroke: "currentColor",
                strokeWidth: "2",
              }),
              (0, n.jsx)("rect", {
                x: "11.3677",
                y: "4.37366",
                width: "23.6846",
                height: "4.11055",
                transform: "rotate(10.98 11.3677 4.37366)",
                fill: "white",
              }),
              (0, n.jsx)("rect", {
                x: "1.37994",
                y: "21.183",
                width: "23.9126",
                height: "4.11055",
                transform: "rotate(-16.05 1.37994 21.183)",
                fill: "currentColor",
              }),
              (0, n.jsx)("rect", {
                x: "28.1506",
                y: "13.3812",
                width: "4.44562",
                height: "4.44562",
                transform: "rotate(10.98 28.1506 13.3812)",
                fill: "white",
              }),
              (0, n.jsx)("rect", {
                x: "4.66302",
                y: "26.6558",
                width: "4.44562",
                height: "4.44562",
                transform: "rotate(-16.05 4.66302 26.6558)",
                fill: "currentColor",
              }),
            ],
          });
        },
        j = function (e) {
          var l = e.title,
            r = e.children,
            t = (e.big, e.color);
          return (0, n.jsxs)("div", {
            className: "flex w-1/2 flex-col px-2 py-2",
            children: [
              (0, n.jsx)("div", {
                className: "rounded border ".concat(
                  c.r$[null != t ? t : "black"]
                ),
                children: (0, n.jsx)("div", {
                  className:
                    "mx-auto flex h-10 items-center justify-center py-2 px-4",
                  children: r,
                }),
              }),
              (0, n.jsx)("span", {
                className: "text-center text-xs text-black",
                children: l,
              }),
            ],
          });
        },
        v = function (e) {
          e.mobile;
          var l = e.color,
            r = (0, o.T_)("Components.footer.paymentIcons"),
            i = (0, o.T_)("Components.footer"),
            a = (0, t.Z)((0, s.useState)(!1), 2),
            d = a[0],
            x = a[1];
          return (0, n.jsxs)("div", {
            className: "flex-1 pt-4 md:p-0 ".concat(
              c.rA[null != l ? l : "black"]
            ),
            children: [
              (0, n.jsxs)("div", {
                className:
                  "mx-auto flex w-1/2 cursor-pointer items-center justify-center",
                onClick: function () {
                  return x(!d);
                },
                children: [
                  (0, n.jsx)("h1", {
                    className: "text-sm md:text-base",
                    children: i("payment"),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "ml-2 h-5 w-5 transform duration-300 ease-in-out ".concat(
                        d ? "rotate-90" : ""
                      ),
                    children: (0, n.jsx)(h.Z, {}),
                  }),
                ],
              }),
              (0, n.jsx)(f.u, {
                show: d,
                enter: "transition-opacity ease-in-out duration-1000",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "transition-opacity ease-in-out duration-500",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, n.jsxs)("div", {
                  className:
                    "mx-auto flex flex-wrap justify-center pt-4 lg:w-3/4",
                  children: [
                    (0, n.jsx)(j, {
                      title: r("cash"),
                      color: l,
                      children: (0, n.jsx)(m, {}),
                    }),
                    (0, n.jsx)(j, {
                      title: r("online"),
                      color: l,
                      children: (0, n.jsx)(p, {}),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        g = function (e) {
          var l = e.color,
            r = (0, o.T_)("Components.footer");
          return (0, n.jsxs)("div", {
            className: "flex flex-col px-4 md:px-0",
            children: [
              (0, n.jsx)("div", {
                className:
                  "flex h-8 justify-start py-2 md:h-12 md:w-56 ".concat(
                    c.rA[null != l ? l : "black"]
                  ),
                children: (0, n.jsx)(d.Z, {}),
              }),
              (0, n.jsx)("p", {
                className: "hidden pb-2 pt-8 text-sm md:block lg:text-base",
                children: r("gallery"),
              }),
              (0, n.jsx)(a(), {
                href: "/info/return-shopping",
                passHref: !0,
                legacyBehavior: !0,
                children: (0, n.jsx)("p", {
                  className:
                    "cursor-pointer pb-2 pt-6 text-sm hover:underline lg:text-base",
                  children: r("returnpolicy"),
                }),
              }),
              (0, n.jsx)(a(), {
                href: "/info/privacy-policy",
                passHref: !0,
                legacyBehavior: !0,
                children: (0, n.jsx)("p", {
                  className:
                    "cursor-pointer py-2 text-sm hover:underline lg:text-base",
                  children: r("personaldata"),
                }),
              }),
              (0, n.jsx)(a(), {
                href: "/info/offer",
                passHref: !0,
                legacyBehavior: !0,
                children: (0, n.jsx)("p", {
                  className:
                    "cursor-pointer py-2 text-sm hover:underline lg:text-base",
                  children: r("offeragreement"),
                }),
              }),
            ],
          });
        },
        b = function (e) {
          var l = e.color;
          return (
            (0, o.T_)("Components.footer"),
            (0, n.jsx)("div", {
              className:
                "flex w-full flex-1 flex-col justify-between md:w-10/12 md:flex-row lg:w-8/12",
              children: (0, n.jsx)(v, { color: l }),
            })
          );
        };
      l.ZP = function (e) {
        var l = e.color,
          r = e.noNav;
        return (0, x.useRouter)().isFallback
          ? (0, n.jsx)(u.Z, {})
          : (0, n.jsx)("div", {
              className: "".concat(
                r ? "border-t border-gray border-opacity-80" : ""
              ),
              children: (0, n.jsxs)("footer", {
                className: "container mx-auto flex flex-col",
                children: [
                  (0, n.jsx)("div", {
                    className: ""
                      .concat(r ? "" : "border-b", " ")
                      .concat(
                        "black" === l
                          ? "border-gray md:border-black"
                          : c.r$[null != l ? l : "black"]
                      ),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "flex flex-col justify-between pt-4 pb-4 md:flex-row md:pt-12",
                    children: [
                      (0, n.jsx)(g, { color: l }),
                      (0, n.jsx)(b, { color: l }),
                    ],
                  }),
                  (0, n.jsx)("p", {
                    className: "block py-2 text-center text-xs md:hidden",
                    children: "© ООО «АСКЕРИ ГАЛЛЕРИ» (ИНН 7704451884), 2022",
                  }),
                ],
              }),
            });
      };
    },
    31762: function (e, l, r) {
      r.d(l, {
        Z: function () {
          return k;
        },
      });
      var t = r(828),
        n = r(85893),
        s = r(67294),
        i = r(57775),
        a = r(25295),
        o = r(42677),
        c = r(63895),
        d = r(34829),
        x = r(11163),
        u = r(86873),
        h = r(30220),
        f = r(65543),
        m = r(56299),
        p = function (e) {
          var l = e.onClose,
            r = (0, u.T_)("Cookies");
          return (0, n.jsxs)("div", {
            className: "flex flex-col items-center text-center",
            children: [
              r("body", {
                title: function (e) {
                  return (0, n.jsx)("h1", {
                    className: "pb-2 text-base font-black md:text-base",
                    children: e,
                  });
                },
                body: function (e) {
                  return (0, n.jsx)("p", {
                    className:
                      "py-2 text-xs font-extralight text-gray md:text-sm",
                    children: e,
                  });
                },
                link: function (e) {
                  return (0, n.jsx)("span", {
                    className:
                      "cursor-pointer py-4 text-sm font-light underline hover:no-underline md:text-sm",
                    children: e,
                  });
                },
              }),
              (0, n.jsx)("div", {
                className: "w-64 pb-2 text-sm font-bold md:w-72 md:text-sm",
                children: (0, n.jsx)(f.o, {
                  onClick: l,
                  inversedColors: !0,
                  fullWidth: !0,
                  customFont: !0,
                  big: !0,
                  children: r("agree"),
                }),
              }),
            ],
          });
        },
        j = function (e) {
          var l = e.open,
            r = e.onClose;
          return (0, x.useRouter)().isFallback
            ? (0, n.jsx)(m.Z, {})
            : (0, n.jsx)(d.u, {
                show: l,
                className: "fixed inset-x-0 bottom-0 z-50 pb-4",
                children: (0, n.jsxs)("div", {
                  className:
                    "mx-auto flex w-4/5 flex-col rounded-sm bg-white p-2 shadow-2xl md:w-3/6",
                  children: [
                    (0, n.jsx)("div", {
                      className: "flex justify-end",
                      children: (0, n.jsx)("button", {
                        onClick: r,
                        className:
                          "h-4 w-4 cursor-pointer border-white bg-white focus:outline-none",
                        children: (0, n.jsx)(h.X1, {}),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "flex items-center justify-evenly",
                      children: (0, n.jsx)(p, { onClose: r }),
                    }),
                  ],
                }),
              });
        },
        v = "cookies_informed",
        g = function () {
          var e = (0, t.Z)((0, s.useState)(!1), 2),
            l = e[0],
            r = e[1];
          return (
            (0, s.useEffect)(function () {
              r("true" !== window.localStorage.getItem(v));
            }, []),
            [
              l,
              function () {
                window.localStorage.setItem(v, "true"), r(!1);
              },
            ]
          );
        },
        b = r(33299),
        y = r(70385),
        w = r(41664),
        N = r.n(w),
        L = r(61782),
        C = function (e) {
          var l = e.color,
            r = (0, t.Z)((0, s.useState)(!0), 2),
            a = r[0],
            o = r[1];
          return (0, n.jsxs)("div", {
            className: "fixed bottom-0 left-10 z-20 flex flex-col ".concat(
              i.rA[null != l ? l : "black"]
            ),
            children: [
              (0, n.jsx)("div", {
                className:
                  "h-8 w-8 transform cursor-pointer rounded-t bg-gray-200 p-1 duration-200 ease-in-out ".concat(
                    a ? "" : "rotate-180"
                  ),
                onClick: function () {
                  return o(!a);
                },
                children: (0, n.jsx)(L.Z, {}),
              }),
              (0, n.jsx)(d.u, {
                show: a,
                enter: "transition ease-in-out duration-200 transform",
                enterFrom: "translate-y-full",
                enterTo: "translate-y-0",
                leave: "transition ease-in-out duration-200 transform",
                leaveFrom: "translate-y-0",
                leaveTo: "translate-y-full",
                as: s.Fragment,
                children: (0, n.jsx)("div", {
                  children: (0, n.jsx)(N(), {
                    href: "/admin/crm",
                    className:
                      "cursor-pointer rounded-r bg-gray-200 p-2 underline hover:no-underline",
                    children: "Перейти в CRM",
                  }),
                }),
              }),
            ],
          });
        },
        k = function (e) {
          var l,
            r = e.children,
            d = e.color,
            u = e.bgGray,
            h = e.noNav,
            f = e.mobileGray,
            m = e.divider,
            p = e.noPadding,
            v = (0, t.Z)((0, s.useState)(!1), 2),
            w = v[0],
            N = v[1],
            L = (0, x.useRouter)().locale,
            k = (0, t.Z)(g(), 2),
            Z = k[0],
            M = k[1],
            R = (0, b.useSession)().data,
            z =
              (null == R || null === (l = R.user) || void 0 === l
                ? void 0
                : l.role) === y.Role.ADMIN;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(o.E.div, {
                className:
                  "fixed z-50 h-full w-full items-center justify-center bg-white",
                initial: { opacity: 1 },
                animate: { opacity: 0 },
                onAnimationComplete: function () {
                  return N(!0);
                },
                style: { display: w ? "none" : "flex" },
                transition: { duration: 3 },
                children: (0, n.jsxs)("div", {
                  className:
                    "flex h-full w-full flex-col items-center justify-center text-black",
                  children: [
                    (0, n.jsx)("div", {
                      className: "mx-auto w-2/3 cursor-pointer md:w-2/6",
                      children: (0, n.jsx)(c.Z, {}),
                    }),
                    (0, n.jsx)("span", {
                      className:
                        "text-center font-normal text-black md:text-sm",
                      children:
                        "ru" === L && "онлайн-галерея современного искусства",
                    }),
                    (0, n.jsx)("span", {
                      className:
                        "mt-4 text-center font-normal text-black md:text-sm",
                      children:
                        "ru" === L &&
                        (0, n.jsx)("span", {
                          children: (0, n.jsx)("b", {
                            className: "font-semibold text-red-200",
                            children:
                              "Виртуальная примерка работ в мобильной версии сайта",
                          }),
                        }),
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(i.ZP, {
                color: d,
                noNav: h,
                mobileGray: f,
                divider: m,
              }),
              (0, n.jsxs)("main", {
                className: ""
                  .concat(u ? "bg-gray-200" : "", " ")
                  .concat(f ? "bg-gray-200 md:bg-white" : "", " ")
                  .concat(p ? "" : "pb-10"),
                children: [
                  z && (0, n.jsx)(C, { color: d }),
                  (0, n.jsx)("div", {
                    className: "container mx-auto",
                    children: r,
                  }),
                ],
              }),
              (0, n.jsx)(j, { open: Z, onClose: M }),
              (0, n.jsx)(a.ZP, { color: d, noNav: h }),
            ],
          });
        };
    },
    2839: function (e, l, r) {
      var t = r(85893);
      r(67294);
      var n = r(63895),
        s = r(41664),
        i = r.n(s),
        a = r(86873),
        o = r(57775);
      l.Z = function (e) {
        var l = e.color,
          r = e.noText,
          s = (0, a.T_)("Components.navbar");
        return (0, t.jsx)(i(), {
          href: "/0",
          passHref: !0,
          legacyBehavior: !0,
          children: (0, t.jsxs)("div", {
            className: "flex w-full flex-col ".concat(
              o.rA[null != l ? l : "black"],
              " cursor-pointer"
            ),
            children: [
              (0, t.jsx)("div", {
                className: "h-10",
                children: (0, t.jsx)(n.Z, {}),
              }),
              !r &&
                (0, t.jsx)("span", {
                  className:
                    "hidden text-center font-thin text-black md:block md:text-sm lg:text-sm",
                  children: s("logosubtext"),
                }),
            ],
          }),
        });
      };
    },
    57775: function (e, l, r) {
      r.d(l, {
        r$: function () {
          return W;
        },
        rA: function () {
          return U;
        },
        ZP: function () {
          return de;
        },
      });
      var t = r(828),
        n = r(85893),
        s = r(86873),
        i = r(41664),
        a = r.n(i),
        o = r(11163),
        c = r(34829),
        d = r(98831),
        x = r(2839),
        u = r(67294),
        h = r(30220),
        f = r(47568),
        m = r(26042),
        p = r(69396),
        j = r(70655),
        v = (0, r(88305).f)(function () {
          return (0, u.useState)(!1);
        });
      v.Provider, v.useContainer;
      var g = r(9669),
        b = r.n(g),
        y = r(87536),
        w = r(65543),
        N = function (e) {
          var l = e.children;
          return (0, n.jsx)("div", {
            className:
              "m-4 mx-10 h-full rounded-sm border border-gray border-opacity-60 p-2 py-3 text-black",
            children: l,
          });
        },
        L = function (e) {
          var l,
            r = e.close,
            t = (0, s.T_)("Components.feedback"),
            i = (0, y.cI)({
              defaultValues: {
                name: "",
                mail: "",
                phone: "",
                theme: "",
                message: "",
              },
            }),
            a = i.register,
            o = (0, i.handleSubmit)(
              ((l = (0, f.Z)(function (e) {
                return (0, j.__generator)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return [4, b().post("/api/feedback/send", e)];
                    case 1:
                      return l.sent(), r(), [2];
                  }
                });
              })),
              function (e) {
                return l.apply(this, arguments);
              })
            );
          return (0, n.jsxs)("form", {
            className: "flex flex-col",
            onSubmit: o,
            children: [
              (0, n.jsxs)("div", {
                className: "pb-6",
                children: [
                  (0, n.jsx)(N, {
                    children: (0, n.jsx)(
                      "input",
                      (0, p.Z)(
                        (0, m.Z)({ type: "text" }, a("name", { required: !0 })),
                        {
                          className:
                            "w-full bg-white text-sm focus:outline-none md:text-base",
                          placeholder: t("fio"),
                        }
                      )
                    ),
                  }),
                  (0, n.jsx)(N, {
                    children: (0, n.jsx)(
                      "input",
                      (0, p.Z)(
                        (0, m.Z)({ type: "text" }, a("mail", { required: !0 })),
                        {
                          className:
                            "w-full bg-white text-sm focus:outline-none md:text-base",
                          placeholder: t("mail"),
                        }
                      )
                    ),
                  }),
                  (0, n.jsx)(N, {
                    children: (0, n.jsx)(
                      "input",
                      (0, p.Z)(
                        (0, m.Z)(
                          { type: "text" },
                          a("phone", { required: !0 })
                        ),
                        {
                          className:
                            "w-full bg-white text-sm focus:outline-none md:text-base",
                          placeholder: t("phone"),
                        }
                      )
                    ),
                  }),
                  (0, n.jsx)(N, {
                    children: (0, n.jsx)(
                      "input",
                      (0, p.Z)(
                        (0, m.Z)(
                          { type: "text" },
                          a("theme", { required: !0 })
                        ),
                        {
                          className:
                            "w-full bg-white text-sm focus:outline-none md:text-base",
                          placeholder: t("theme"),
                        }
                      )
                    ),
                  }),
                  (0, n.jsx)(N, {
                    children: (0, n.jsx)(
                      "textarea",
                      (0, p.Z)((0, m.Z)({}, a("message", { required: !0 })), {
                        className:
                          "h-full w-full resize-y bg-white text-sm focus:outline-none md:text-base",
                        placeholder: t("message"),
                      })
                    ),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "mx-auto w-2/3 px-4",
                children: (0, n.jsx)(w.o, {
                  inversedColors: !0,
                  customFont: !0,
                  fullWidth: !0,
                  big: !0,
                  isSubmit: !0,
                  children: t("send"),
                }),
              }),
            ],
          });
        },
        C = r(33299),
        k = r(47939),
        Z = function () {
          return (0, n.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            className: "h-10 w-10",
            zoomAndPan: "magnify",
            viewBox: "0 0 375 374.999991",
            preserveAspectRatio: "xMidYMid meet",
            version: "1.0",
            children: [
              (0, n.jsxs)("defs", {
                children: [
                  (0, n.jsx)("clipPath", {
                    id: "clip-0000",
                    children: (0, n.jsx)("path", {
                      d: "M 89 80.953125 L 286 80.953125 L 286 146 L 89 146 Z M 89 80.953125 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-1111",
                    children: (0, n.jsx)("path", {
                      d: "M 80.953125 145.890625 L 293.953125 145.890625 L 293.953125 234.574219 L 80.953125 234.574219 Z M 80.953125 145.890625 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-2222",
                    children: (0, n.jsx)("path", {
                      d: "M 89.097656 228.753906 L 285.78125 228.753906 L 285.78125 293.953125 L 89.097656 293.953125 Z M 89.097656 228.753906 ",
                      clipRule: "nonzero",
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-0000)",
                children: (0, n.jsx)("path", {
                  fill: "rgb(100%, 100%, 100%)",
                  d: "M 277.523438 130.535156 C 273.34375 123.957031 268.414062 117.789062 262.769531 112.144531 C 242.652344 92.027344 215.90625 80.953125 187.457031 80.953125 C 159.007812 80.953125 132.261719 92.027344 112.148438 112.144531 C 106.5 117.789062 101.570312 123.957031 97.394531 130.535156 C 94.273438 135.453125 91.585938 140.609375 89.328125 145.945312 L 285.585938 145.945312 C 283.328125 140.609375 280.644531 135.453125 277.523438 130.535156 ",
                  fillOpacity: "1",
                  fillRule: "nonzero",
                }),
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-1111)",
                children: (0, n.jsx)("path", {
                  fill: "rgb(19.219971%, 31.369019%, 66.668701%)",
                  d: "M 293.964844 187.457031 C 293.964844 172.957031 291.070312 158.90625 285.585938 145.945312 L 89.328125 145.945312 C 83.839844 158.90625 80.953125 172.957031 80.953125 187.457031 C 80.953125 204.070312 84.742188 220.089844 91.890625 234.558594 L 283.023438 234.558594 C 290.171875 220.089844 293.964844 204.070312 293.964844 187.457031 ",
                  fillOpacity: "1",
                  fillRule: "nonzero",
                }),
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-2222)",
                children: (0, n.jsx)("path", {
                  fill: "rgb(74.899292%, 11.759949%, 21.179199%)",
                  d: "M 89.328125 228.960938 C 90.640625 231.613281 94.609375 239.816406 96.144531 242.355469 C 100.578125 249.695312 105.925781 256.550781 112.148438 262.769531 C 132.261719 282.882812 159.007812 293.960938 187.457031 293.960938 C 215.90625 293.960938 242.652344 282.882812 262.769531 262.769531 C 268.988281 256.550781 274.339844 249.695312 278.769531 242.355469 C 280.304688 239.816406 284.277344 231.613281 285.585938 228.960938 L 89.328125 228.960938 ",
                  fillOpacity: "1",
                  fillRule: "nonzero",
                }),
              }),
            ],
          });
        },
        M = function () {
          return (0, n.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            className: "h-10 w-10",
            zoomAndPan: "magnify",
            viewBox: "0 0 375 374.999991",
            preserveAspectRatio: "xMidYMid meet",
            version: "1.0",
            children: [
              (0, n.jsxs)("defs", {
                children: [
                  (0, n.jsx)("clipPath", {
                    id: "clip-0",
                    children: (0, n.jsx)("path", {
                      d: "M 81 81 L 293.683594 81 L 293.683594 293.953125 L 81 293.953125 Z M 81 81 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-1",
                    children: (0, n.jsx)("path", {
                      d: "M 293.410156 187.453125 C 293.410156 246.117188 245.910156 293.675781 187.320312 293.675781 C 128.722656 293.675781 81.226562 246.117188 81.226562 187.453125 C 81.226562 128.785156 128.722656 81.226562 187.320312 81.226562 C 245.910156 81.226562 293.410156 128.785156 293.410156 187.453125 Z M 293.410156 187.453125 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-2",
                    children: (0, n.jsx)("path", {
                      d: "M 81 206.164062 L 167.9375 206.164062 L 167.9375 293.953125 L 81 293.953125 Z M 81 206.164062 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-3",
                    children: (0, n.jsx)("path", {
                      d: "M 293.410156 187.453125 C 293.410156 246.117188 245.910156 293.675781 187.320312 293.675781 C 128.722656 293.675781 81.226562 246.117188 81.226562 187.453125 C 81.226562 128.785156 128.722656 81.226562 187.320312 81.226562 C 245.910156 81.226562 293.410156 128.785156 293.410156 187.453125 Z M 293.410156 187.453125 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-4",
                    children: (0, n.jsx)("path", {
                      d: "M 81 206.164062 L 168 206.164062 L 168 293.953125 L 81 293.953125 Z M 81 206.164062 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-5",
                    children: (0, n.jsx)("path", {
                      d: "M 293.410156 187.453125 C 293.410156 246.117188 245.910156 293.675781 187.320312 293.675781 C 128.722656 293.675781 81.226562 246.117188 81.226562 187.453125 C 81.226562 128.785156 128.722656 81.226562 187.320312 81.226562 C 245.910156 81.226562 293.410156 128.785156 293.410156 187.453125 Z M 293.410156 187.453125 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-6",
                    children: (0, n.jsx)("path", {
                      d: "M 206.007812 81 L 293.683594 81 L 293.683594 183.640625 L 206.007812 183.640625 Z M 206.007812 81 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-7",
                    children: (0, n.jsx)("path", {
                      d: "M 293.410156 187.453125 C 293.410156 246.117188 245.910156 293.675781 187.320312 293.675781 C 128.722656 293.675781 81.226562 246.117188 81.226562 187.453125 C 81.226562 128.785156 128.722656 81.226562 187.320312 81.226562 C 245.910156 81.226562 293.410156 128.785156 293.410156 187.453125 Z M 293.410156 187.453125 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-8",
                    children: (0, n.jsx)("path", {
                      d: "M 81 81 L 293.683594 81 L 293.683594 293.953125 L 81 293.953125 Z M 81 81 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-9",
                    children: (0, n.jsx)("path", {
                      d: "M 293.410156 187.453125 C 293.410156 246.117188 245.910156 293.675781 187.320312 293.675781 C 128.722656 293.675781 81.226562 246.117188 81.226562 187.453125 C 81.226562 128.785156 128.722656 81.226562 187.320312 81.226562 C 245.910156 81.226562 293.410156 128.785156 293.410156 187.453125 Z M 293.410156 187.453125 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-10",
                    children: (0, n.jsx)("path", {
                      d: "M 81 90.652344 L 167.359375 90.652344 L 167.359375 200.964844 L 81 200.964844 Z M 81 90.652344 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-11",
                    children: (0, n.jsx)("path", {
                      d: "M 293.410156 187.453125 C 293.410156 246.117188 245.910156 293.675781 187.320312 293.675781 C 128.722656 293.675781 81.226562 246.117188 81.226562 187.453125 C 81.226562 128.785156 128.722656 81.226562 187.320312 81.226562 C 245.910156 81.226562 293.410156 128.785156 293.410156 187.453125 Z M 293.410156 187.453125 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-12",
                    children: (0, n.jsx)("path", {
                      d: "M 81 90.078125 L 167.9375 90.078125 L 167.9375 200.964844 L 81 200.964844 Z M 81 90.078125 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-13",
                    children: (0, n.jsx)("path", {
                      d: "M 293.410156 187.453125 C 293.410156 246.117188 245.910156 293.675781 187.320312 293.675781 C 128.722656 293.675781 81.226562 246.117188 81.226562 187.453125 C 81.226562 128.785156 128.722656 81.226562 187.320312 81.226562 C 245.910156 81.226562 293.410156 128.785156 293.410156 187.453125 Z M 293.410156 187.453125 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-14",
                    children: (0, n.jsx)("path", {
                      d: "M 214.082031 195.191406 L 293.683594 195.191406 L 293.683594 293.953125 L 214.082031 293.953125 Z M 214.082031 195.191406 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-15",
                    children: (0, n.jsx)("path", {
                      d: "M 293.410156 187.453125 C 293.410156 246.117188 245.910156 293.675781 187.320312 293.675781 C 128.722656 293.675781 81.226562 246.117188 81.226562 187.453125 C 81.226562 128.785156 128.722656 81.226562 187.320312 81.226562 C 245.910156 81.226562 293.410156 128.785156 293.410156 187.453125 Z M 293.410156 187.453125 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-16",
                    children: (0, n.jsx)("path", {
                      d: "M 81 81 L 293.683594 81 L 293.683594 293.953125 L 81 293.953125 Z M 81 81 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-17",
                    children: (0, n.jsx)("path", {
                      d: "M 293.410156 187.453125 C 293.410156 246.117188 245.910156 293.675781 187.320312 293.675781 C 128.722656 293.675781 81.226562 246.117188 81.226562 187.453125 C 81.226562 128.785156 128.722656 81.226562 187.320312 81.226562 C 245.910156 81.226562 293.410156 128.785156 293.410156 187.453125 Z M 293.410156 187.453125 ",
                      clipRule: "nonzero",
                    }),
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip-18",
                    children: (0, n.jsx)("path", {
                      d: "M 80.816406 80.953125 L 293.816406 80.953125 L 293.816406 293.953125 L 80.816406 293.953125 Z M 80.816406 80.953125 ",
                      clipRule: "nonzero",
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-0)",
                children: (0, n.jsxs)("g", {
                  clipPath: "url(#clip-1)",
                  children: [
                    (0, n.jsx)("path", {
                      fill: "rgb(15.689087%, 19.60907%, 51.759338%)",
                      d: "M 351.621094 297.136719 L 23.949219 297.136719 L 23.949219 77.582031 L 351.621094 77.582031 L 351.621094 297.136719 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                    (0, n.jsx)("path", {
                      fill: "rgb(13.729858%, 12.159729%, 12.548828%)",
                      d: "M 351.621094 297.136719 L 351.621094 296.847656 L 24.238281 296.847656 L 24.238281 77.867188 L 351.332031 77.867188 L 351.332031 297.136719 L 351.621094 297.136719 L 351.621094 296.847656 L 351.621094 297.136719 L 351.910156 297.136719 L 351.910156 77.582031 C 351.910156 77.503906 351.882812 77.429688 351.828125 77.378906 C 351.769531 77.324219 351.699219 77.292969 351.621094 77.292969 L 23.949219 77.292969 C 23.871094 77.292969 23.796875 77.324219 23.742188 77.378906 C 23.691406 77.429688 23.660156 77.503906 23.660156 77.582031 L 23.660156 297.136719 C 23.660156 297.214844 23.6875 297.285156 23.746094 297.339844 C 23.800781 297.394531 23.871094 297.425781 23.949219 297.425781 L 351.621094 297.425781 C 351.699219 297.425781 351.769531 297.394531 351.828125 297.339844 C 351.882812 297.285156 351.910156 297.214844 351.910156 297.136719 L 351.621094 297.136719 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                    (0, n.jsx)("path", {
                      fill: "rgb(100%, 100%, 100%)",
                      d: "M 63.195312 297.320312 L 23.949219 297.136719 L 23.949219 268.628906 L 331.375 77.582031 L 351.621094 77.582031 L 351.621094 124.703125 L 63.195312 297.320312 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                    (0, n.jsx)("path", {
                      fill: "rgb(13.729858%, 12.159729%, 12.548828%)",
                      d: "M 63.195312 297.320312 L 63.195312 297.03125 L 24.238281 296.851562 L 24.238281 268.792969 L 331.457031 77.867188 L 351.332031 77.867188 L 351.332031 124.539062 L 63.046875 297.074219 L 63.195312 297.320312 L 63.195312 297.03125 L 63.195312 297.320312 L 63.339844 297.566406 L 351.769531 124.949219 C 351.855469 124.898438 351.910156 124.804688 351.910156 124.703125 L 351.910156 77.582031 C 351.910156 77.503906 351.882812 77.429688 351.828125 77.378906 C 351.769531 77.324219 351.699219 77.292969 351.621094 77.292969 L 331.375 77.292969 C 331.320312 77.292969 331.265625 77.308594 331.222656 77.335938 L 23.796875 268.386719 C 23.710938 268.4375 23.660156 268.53125 23.660156 268.628906 L 23.660156 297.136719 C 23.660156 297.292969 23.789062 297.425781 23.945312 297.425781 L 63.191406 297.609375 C 63.242188 297.609375 63.296875 297.59375 63.339844 297.566406 L 63.195312 297.320312 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-2)",
                children: (0, n.jsx)("g", {
                  clipPath: "url(#clip-3)",
                  children: (0, n.jsx)("path", {
                    fill: "rgb(76.078796%, 11.759949%, 22.749329%)",
                    d: "M 167.695312 206.566406 L 23.949219 297.136719 L 49.722656 297.136719 L 167.695312 225.371094 L 167.695312 206.566406 ",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                  }),
                }),
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-4)",
                children: (0, n.jsx)("g", {
                  clipPath: "url(#clip-5)",
                  children: (0, n.jsx)("path", {
                    fill: "rgb(13.729858%, 12.159729%, 12.548828%)",
                    d: "M 167.695312 206.566406 L 167.542969 206.320312 L 23.796875 296.894531 C 23.683594 296.960938 23.636719 297.089844 23.671875 297.214844 C 23.707031 297.339844 23.820312 297.425781 23.949219 297.425781 L 49.722656 297.425781 C 49.777344 297.425781 49.828125 297.410156 49.875 297.382812 L 167.847656 225.617188 C 167.933594 225.5625 167.984375 225.472656 167.984375 225.371094 L 167.984375 206.566406 C 167.984375 206.460938 167.929688 206.363281 167.835938 206.3125 C 167.742188 206.261719 167.628906 206.265625 167.542969 206.320312 L 167.695312 206.566406 L 167.40625 206.566406 L 167.40625 225.207031 L 49.640625 296.847656 L 24.945312 296.847656 L 167.847656 206.808594 L 167.695312 206.566406 L 167.40625 206.566406 L 167.695312 206.566406 ",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                  }),
                }),
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-6)",
                children: (0, n.jsxs)("g", {
                  clipPath: "url(#clip-7)",
                  children: [
                    (0, n.jsx)("path", {
                      fill: "rgb(76.078796%, 11.759949%, 22.749329%)",
                      d: "M 206.472656 183.242188 L 351.621094 94.421875 L 351.621094 77.582031 L 346.480469 77.582031 L 206.472656 163.613281 L 206.472656 183.242188 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                    (0, n.jsx)("path", {
                      fill: "rgb(13.729858%, 12.159729%, 12.548828%)",
                      d: "M 206.472656 183.242188 L 206.621094 183.488281 L 351.773438 94.667969 C 351.859375 94.617188 351.910156 94.519531 351.910156 94.421875 L 351.910156 77.582031 C 351.910156 77.503906 351.882812 77.429688 351.828125 77.378906 C 351.769531 77.324219 351.699219 77.292969 351.621094 77.292969 L 346.480469 77.292969 C 346.425781 77.292969 346.375 77.308594 346.328125 77.335938 L 206.324219 163.367188 C 206.234375 163.421875 206.183594 163.511719 206.183594 163.613281 L 206.183594 183.242188 C 206.183594 183.347656 206.242188 183.441406 206.332031 183.492188 C 206.421875 183.542969 206.535156 183.542969 206.621094 183.488281 L 206.472656 183.242188 L 206.757812 183.242188 L 206.757812 163.773438 L 346.5625 77.867188 L 351.332031 77.867188 L 351.332031 94.257812 L 206.324219 182.996094 L 206.472656 183.242188 L 206.757812 183.242188 L 206.472656 183.242188 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-8)",
                children: (0, n.jsxs)("g", {
                  clipPath: "url(#clip-9)",
                  children: [
                    (0, n.jsx)("path", {
                      fill: "rgb(100%, 100%, 100%)",
                      d: "M 312.375 297.320312 L 351.621094 297.136719 L 351.621094 268.628906 L 44.191406 77.582031 L 23.949219 77.582031 L 23.949219 124.703125 L 312.375 297.320312 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                    (0, n.jsx)("path", {
                      fill: "rgb(13.729858%, 12.159729%, 12.548828%)",
                      d: "M 312.375 297.320312 L 312.375 297.609375 L 351.621094 297.425781 C 351.78125 297.425781 351.910156 297.292969 351.910156 297.136719 L 351.910156 268.628906 C 351.910156 268.53125 351.859375 268.4375 351.773438 268.386719 L 44.34375 77.335938 C 44.300781 77.308594 44.246094 77.292969 44.191406 77.292969 L 23.949219 77.292969 C 23.871094 77.292969 23.796875 77.324219 23.742188 77.378906 C 23.691406 77.429688 23.660156 77.503906 23.660156 77.582031 L 23.660156 124.703125 C 23.660156 124.804688 23.714844 124.898438 23.800781 124.949219 L 312.226562 297.566406 C 312.273438 297.59375 312.320312 297.609375 312.375 297.609375 L 312.375 297.320312 L 312.523438 297.074219 L 24.238281 124.539062 L 24.238281 77.867188 L 44.109375 77.867188 L 351.332031 268.792969 L 351.332031 296.851562 L 312.371094 297.03125 L 312.375 297.320312 L 312.523438 297.074219 L 312.375 297.320312 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-10)",
                children: (0, n.jsx)("g", {
                  clipPath: "url(#clip-11)",
                  children: (0, n.jsx)("path", {
                    fill: "rgb(76.078796%, 11.759949%, 22.749329%)",
                    d: "M 167.226562 180.957031 L 23.949219 90.679688 L 23.949219 113.476562 L 167.226562 200.640625 L 167.226562 180.957031 ",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                  }),
                }),
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-12)",
                children: (0, n.jsx)("g", {
                  clipPath: "url(#clip-13)",
                  children: (0, n.jsx)("path", {
                    fill: "rgb(13.729858%, 12.159729%, 12.548828%)",
                    d: "M 167.226562 180.957031 L 167.378906 180.710938 L 24.101562 90.433594 C 24.011719 90.378906 23.902344 90.375 23.808594 90.425781 C 23.714844 90.476562 23.660156 90.574219 23.660156 90.679688 L 23.660156 113.476562 C 23.660156 113.574219 23.710938 113.671875 23.796875 113.722656 L 167.078125 200.886719 C 167.167969 200.941406 167.277344 200.941406 167.367188 200.890625 C 167.460938 200.839844 167.515625 200.742188 167.515625 200.640625 L 167.515625 180.957031 C 167.515625 180.855469 167.464844 180.761719 167.378906 180.710938 L 167.226562 180.957031 L 166.9375 180.957031 L 166.9375 200.125 L 24.238281 113.3125 L 24.238281 91.203125 L 167.074219 181.199219 L 167.226562 180.957031 L 166.9375 180.957031 L 167.226562 180.957031 ",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                  }),
                }),
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-14)",
                children: (0, n.jsxs)("g", {
                  clipPath: "url(#clip-15)",
                  children: [
                    (0, n.jsx)("path", {
                      fill: "rgb(76.078796%, 11.759949%, 22.749329%)",
                      d: "M 214.574219 195.730469 L 214.574219 214.292969 L 351.621094 297.136719 L 351.621094 279.953125 L 214.574219 195.730469 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                    (0, n.jsx)("path", {
                      fill: "rgb(13.729858%, 12.159729%, 12.548828%)",
                      d: "M 214.574219 195.730469 L 214.285156 195.730469 L 214.285156 214.292969 C 214.285156 214.394531 214.335938 214.488281 214.421875 214.539062 L 351.472656 297.382812 C 351.5625 297.4375 351.675781 297.4375 351.765625 297.386719 C 351.855469 297.335938 351.910156 297.242188 351.910156 297.136719 L 351.910156 279.953125 C 351.910156 279.851562 351.859375 279.757812 351.773438 279.707031 L 214.722656 195.480469 C 214.632812 195.425781 214.523438 195.425781 214.429688 195.476562 C 214.339844 195.527344 214.285156 195.625 214.285156 195.730469 L 214.574219 195.730469 L 214.421875 195.972656 L 351.332031 280.113281 L 351.332031 296.625 L 214.859375 214.128906 L 214.859375 195.730469 L 214.574219 195.730469 L 214.421875 195.972656 L 214.574219 195.730469 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-16)",
                children: (0, n.jsxs)("g", {
                  clipPath: "url(#clip-17)",
                  children: [
                    (0, n.jsx)("path", {
                      fill: "rgb(100%, 100%, 100%)",
                      d: "M 351.621094 159.421875 L 217.683594 159.421875 L 217.683594 77.582031 L 156.949219 77.582031 L 156.949219 159.421875 L 23.015625 159.421875 L 23.015625 215.296875 L 156.949219 215.296875 L 156.949219 297.136719 L 217.683594 297.136719 L 217.683594 215.296875 L 351.621094 215.296875 L 351.621094 159.421875 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                    (0, n.jsx)("path", {
                      fill: "rgb(13.729858%, 12.159729%, 12.548828%)",
                      d: "M 351.621094 159.421875 L 351.621094 159.132812 L 217.972656 159.132812 L 217.972656 77.582031 C 217.972656 77.503906 217.945312 77.429688 217.890625 77.378906 C 217.835938 77.324219 217.765625 77.292969 217.683594 77.292969 L 156.949219 77.292969 C 156.875 77.292969 156.800781 77.324219 156.746094 77.378906 C 156.691406 77.429688 156.660156 77.503906 156.660156 77.582031 L 156.660156 159.132812 L 23.015625 159.132812 C 22.9375 159.132812 22.863281 159.164062 22.808594 159.214844 C 22.757812 159.269531 22.726562 159.34375 22.726562 159.421875 L 22.726562 215.296875 C 22.726562 215.378906 22.757812 215.449219 22.808594 215.503906 C 22.863281 215.558594 22.9375 215.585938 23.015625 215.585938 L 156.660156 215.585938 L 156.660156 297.136719 C 156.660156 297.214844 156.691406 297.285156 156.746094 297.339844 C 156.800781 297.394531 156.871094 297.425781 156.949219 297.425781 L 217.683594 297.425781 C 217.765625 297.425781 217.835938 297.394531 217.890625 297.339844 C 217.945312 297.285156 217.972656 297.214844 217.972656 297.136719 L 217.972656 215.585938 L 351.621094 215.585938 C 351.699219 215.585938 351.769531 215.558594 351.828125 215.503906 C 351.882812 215.449219 351.910156 215.378906 351.910156 215.296875 L 351.910156 159.421875 C 351.910156 159.34375 351.882812 159.273438 351.828125 159.21875 C 351.769531 159.160156 351.699219 159.132812 351.621094 159.132812 L 351.621094 159.421875 L 351.332031 159.421875 L 351.332031 215.011719 L 217.683594 215.011719 C 217.609375 215.011719 217.535156 215.042969 217.480469 215.09375 C 217.429688 215.148438 217.398438 215.222656 217.398438 215.296875 L 217.398438 296.847656 L 157.234375 296.847656 L 157.234375 215.296875 C 157.234375 215.222656 157.207031 215.148438 157.152344 215.09375 C 157.097656 215.042969 157.027344 215.011719 156.949219 215.011719 L 23.300781 215.011719 L 23.300781 159.710938 L 156.949219 159.710938 C 157.027344 159.710938 157.097656 159.679688 157.152344 159.625 C 157.207031 159.570312 157.234375 159.496094 157.234375 159.421875 L 157.234375 77.867188 L 217.398438 77.867188 L 217.398438 159.421875 C 217.398438 159.496094 217.429688 159.570312 217.480469 159.625 C 217.535156 159.679688 217.609375 159.710938 217.683594 159.710938 L 351.621094 159.710938 L 351.621094 159.421875 L 351.332031 159.421875 L 351.621094 159.421875 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                    (0, n.jsx)("path", {
                      fill: "rgb(76.078796%, 11.759949%, 22.749329%)",
                      d: "M 351.621094 170.988281 L 203.667969 170.988281 L 203.667969 77.582031 L 170.96875 77.582031 L 170.96875 170.988281 L 23.015625 170.988281 L 23.015625 203.730469 L 169.09375 203.730469 L 169.09375 297.136719 L 203.667969 297.136719 L 203.667969 205.605469 L 351.621094 205.605469 L 351.621094 170.988281 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                    (0, n.jsx)("path", {
                      fill: "rgb(13.729858%, 12.159729%, 12.548828%)",
                      d: "M 351.621094 170.988281 L 351.621094 170.699219 L 203.957031 170.699219 L 203.957031 77.582031 C 203.957031 77.503906 203.925781 77.429688 203.871094 77.378906 C 203.820312 77.324219 203.746094 77.292969 203.667969 77.292969 L 170.96875 77.292969 C 170.890625 77.292969 170.816406 77.324219 170.761719 77.378906 C 170.707031 77.429688 170.679688 77.503906 170.679688 77.582031 L 170.679688 170.695312 L 23.015625 170.699219 C 22.9375 170.699219 22.863281 170.726562 22.808594 170.78125 C 22.757812 170.835938 22.726562 170.910156 22.726562 170.988281 L 22.726562 203.730469 C 22.726562 203.8125 22.757812 203.882812 22.808594 203.9375 C 22.863281 203.992188 22.9375 204.019531 23.015625 204.019531 L 168.804688 204.019531 L 168.804688 297.136719 C 168.804688 297.214844 168.835938 297.285156 168.890625 297.339844 C 168.945312 297.394531 169.019531 297.425781 169.09375 297.425781 L 203.667969 297.425781 C 203.746094 297.425781 203.820312 297.394531 203.871094 297.339844 C 203.925781 297.285156 203.957031 297.214844 203.957031 297.136719 L 203.957031 205.894531 L 351.621094 205.894531 C 351.699219 205.894531 351.769531 205.863281 351.828125 205.808594 C 351.882812 205.753906 351.910156 205.683594 351.910156 205.605469 L 351.910156 170.988281 C 351.910156 170.910156 351.882812 170.835938 351.828125 170.78125 C 351.769531 170.726562 351.699219 170.699219 351.621094 170.699219 L 351.621094 170.988281 L 351.332031 170.988281 L 351.332031 205.316406 L 203.667969 205.316406 C 203.59375 205.316406 203.519531 205.347656 203.464844 205.402344 C 203.410156 205.457031 203.378906 205.53125 203.378906 205.605469 L 203.378906 296.847656 L 169.382812 296.847656 L 169.382812 203.730469 C 169.382812 203.65625 169.355469 203.582031 169.296875 203.527344 C 169.242188 203.476562 169.171875 203.441406 169.09375 203.441406 L 23.300781 203.441406 L 23.300781 171.273438 L 170.96875 171.273438 C 171.042969 171.273438 171.117188 171.246094 171.171875 171.191406 C 171.222656 171.136719 171.253906 171.0625 171.253906 170.988281 L 171.253906 77.867188 L 203.378906 77.867188 L 203.378906 170.988281 C 203.378906 171.0625 203.410156 171.136719 203.464844 171.191406 C 203.519531 171.246094 203.589844 171.273438 203.667969 171.273438 L 351.621094 171.273438 L 351.621094 170.988281 L 351.332031 170.988281 L 351.621094 170.988281 ",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("g", {
                clipPath: "url(#clip-18)",
                children: (0, n.jsx)("path", {
                  fill: "rgb(13.729858%, 12.159729%, 12.548828%)",
                  d: "M 293.410156 187.453125 L 293.121094 187.453125 C 293.121094 216.707031 281.28125 243.1875 262.132812 262.359375 C 242.984375 281.53125 216.535156 293.386719 187.320312 293.386719 C 158.101562 293.386719 131.652344 281.53125 112.503906 262.359375 C 93.355469 243.1875 81.515625 216.707031 81.515625 187.453125 C 81.515625 158.199219 93.355469 131.714844 112.503906 112.542969 C 131.652344 93.371094 158.101562 81.515625 187.320312 81.511719 C 216.535156 81.515625 242.984375 93.371094 262.132812 112.542969 C 281.28125 131.714844 293.121094 158.199219 293.121094 187.453125 L 293.695312 187.453125 C 293.695312 128.625 246.070312 80.9375 187.320312 80.9375 C 128.566406 80.9375 80.9375 128.625 80.9375 187.453125 C 80.9375 246.277344 128.566406 293.964844 187.320312 293.964844 C 246.070312 293.964844 293.695312 246.277344 293.695312 187.453125 L 293.410156 187.453125 ",
                  fillOpacity: "1",
                  fillRule: "nonzero",
                }),
              }),
            ],
          });
        },
        R = function () {
          return (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: (0, n.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
            }),
          });
        },
        z = function () {
          return (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: (0, n.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            }),
          });
        },
        P = r(63895),
        _ = r(85769),
        V = r(42677),
        T = r(84323),
        O = r(94262),
        S = r(21367),
        F = r(67345),
        H = r(15158),
        A = u.forwardRef(function (e, l) {
          var r = e.placeholder,
            s = e.onBlur,
            i = e.onClick,
            a = (0, t.Z)((0, O.R)(), 2),
            o = a[0],
            c = a[1];
          return (0, n.jsxs)("div", {
            className:
              "flex h-full flex-1 rounded border-white px-2 py-3 text-black outline-none ring-1 ring-gray focus:outline-none",
            children: [
              (0, n.jsx)("div", {
                className: "stroke-current w-6 px-1",
                children: (0, n.jsx)(h.jV, {}),
              }),
              (0, n.jsx)("input", {
                className:
                  "w-full truncate bg-white text-xs focus:outline-none md:text-lg",
                value: o,
                onClick: i,
                onBlur: s,
                onChange: function (e) {
                  c(e.target.value);
                },
                ref: l,
                placeholder: r,
              }),
            ],
          });
        }),
        B = function (e) {
          var l = e.data,
            r = e.close,
            t = (0, o.useRouter)(),
            i = t.locale,
            a = (0, s.T_)("Components.searchdialog");
          return l && 0 !== l.results.length
            ? (0, n.jsxs)("div", {
                className: "flex w-full flex-col p-2",
                children: [
                  (0, n.jsx)("h2", {
                    className: "pb-1 text-lg font-semibold",
                    children: a("artists"),
                  }),
                  l.results.map(function (e) {
                    return (0, n.jsx)(
                      "div",
                      {
                        className: "py-1 pl-4",
                        children: (0, n.jsx)("div", {
                          onClick: function () {
                            r(), t.push("/artists/info/".concat(e.id));
                          },
                          className:
                            "flex cursor-pointer justify-start rounded bg-white p-1 hover:bg-gray-200",
                          children: (0, n.jsx)("span", {
                            className: "pl-2 text-lg",
                            children: "ru" === i ? e.name : e.name_en,
                          }),
                        }),
                      },
                      e.id
                    );
                  }),
                ],
              })
            : null;
        },
        E = function (e) {
          var l = e.data,
            r = e.close,
            t = (0, o.useRouter)(),
            i = (0, s.T_)("Components.searchdialog");
          return l && 0 !== (null == l ? void 0 : l.results.length)
            ? (0, n.jsxs)("div", {
                className: "flex w-full flex-col p-2",
                children: [
                  (0, n.jsx)("h2", {
                    className: "pb-2 text-lg font-semibold",
                    children: i("paints"),
                  }),
                  (0, n.jsx)("div", {
                    className: "grid grid-cols-3 gap-3",
                    children: l.results.map(function (e) {
                      return (0, n.jsx)(
                        "div",
                        {
                          onClick: function () {
                            r(), t.push("/item/".concat(e.id));
                          },
                          children: (0, n.jsx)(
                            F.CatalogElement,
                            (0, m.Z)({ noLink: !0 }, e)
                          ),
                        },
                        "search" + e.id
                      );
                    }),
                  }),
                ],
              })
            : null;
        },
        I = function (e) {
          var l,
            r = e.color,
            s = (0, o.useRouter)().locale,
            i = (0, t.Z)((0, u.useState)(0), 2),
            a = i[0],
            f = i[1],
            m = (0, t.Z)((0, T.p)(), 2),
            p = m[0],
            j = m[1],
            v = (0, t.Z)((0, O.R)(), 2),
            g = v[0],
            b = v[1],
            y = (0, t.Z)(
              (0, _.Z)(
                "ru" === (null != s ? s : "ru")
                  ? "&starts_ru=".concat(g)
                  : "&starts_en=".concat(g),
                1e3
              ),
              1
            )[0],
            w = (0, S.Fk)({
              limit: 18,
              offset: 0,
              additional: "".concat(y, "&order=datetime"),
            }).data,
            N = (0, S.Ui)({
              limit: 18,
              offset: 18 * a,
              additional: "".concat(y, "&order=datetime"),
            }).data;
          (0, u.useEffect)(
            function () {
              f(0), b("");
            },
            [p]
          );
          var L = function () {
            return j(!1);
          };
          return (0, n.jsx)(c.u, {
            show: p,
            as: u.Fragment,
            children: (0, n.jsx)(d.V, {
              onClose: L,
              className: "fixed inset-0 z-50 overflow-y-auto",
              children: (0, n.jsxs)("div", {
                className: "flex min-h-screen items-center justify-center",
                children: [
                  (0, n.jsx)(d.V.Overlay, {
                    as: u.Fragment,
                    children: (0, n.jsx)(V.E.div, {
                      className: "fixed inset-0 z-20",
                      initial: { backgroundColor: "rgba(0, 0, 0, 0)" },
                      animate: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        transition: { duration: 0.3 },
                      },
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "fixed top-0 z-30 w-full bg-white pb-4 pt-4 md:pb-2",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "container mx-auto flex items-center justify-center",
                        children: (0, n.jsx)(x.Z, { color: r }),
                      }),
                      (0, n.jsx)("div", {
                        className: "pt-2",
                        children: (0, n.jsx)("div", {
                          className:
                            "container mx-auto md:text-xs lg:text-base",
                          children: (0, n.jsxs)(V.E.div, {
                            className:
                              "mx-auto flex transform items-center justify-between self-end ",
                            initial: { translateX: "100%", width: "40%" },
                            animate: { translateX: "0%", width: "90%" },
                            transition: { duration: 0.2 },
                            children: [
                              (0, n.jsx)(A, {}),
                              (0, n.jsx)("div", {
                                onClick: L,
                                className:
                                  "flex h-10 w-10 cursor-pointer items-center justify-center pl-4",
                                children: (0, n.jsx)(h.X1, {}),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  "" !== g &&
                    (0, n.jsx)("div", {
                      className: "fixed bottom-0 md:bottom-2 ".concat(
                        "ru" === s ? "top-28 md:top-36" : "top-32 md:top-36",
                        " container z-30 mx-auto"
                      ),
                      children: (0, n.jsxs)("div", {
                        className:
                          "max-h-full max-w-full overflow-auto bg-white pb-2 md:rounded-b",
                        children: [
                          0 !== (null == w ? void 0 : w.results.length) &&
                            (0, n.jsx)(B, { data: w, close: L }),
                          0 !== (null == N ? void 0 : N.results.length) &&
                            (0, n.jsx)(E, { data: N, close: L }),
                          (0, n.jsx)(H.Z, {
                            perPage: 18,
                            pidN: a,
                            cb: f,
                            maxElem:
                              null !== (l = null == N ? void 0 : N.count) &&
                              void 0 !== l
                                ? l
                                : 0,
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            }),
          });
        },
        G = r(56299),
        q = r(81103),
        D = r(14833),
        X = r(35518),
        W = {
          black: "border-black",
          lightgreen: "border-lime",
          green: "border-green",
          red: "border-red",
          blue: "border-blue",
          pink: "border-pink",
          yellow: "border-yellow",
        },
        U = {
          black: "text-black",
          lightgreen: "text-lime",
          green: "text-green",
          red: "text-red",
          blue: "text-blue",
          pink: "text-pink",
          yellow: "text-yellow",
        },
        Y = {
          black: "group-hover:border-black",
          lightgreen: "group-hover:border-lime",
          green: "group-hover:border-green",
          red: "group-hover:border-red",
          blue: "group-hover:border-blue",
          pink: "group-hover:border-pink",
          yellow: "group-hover:border-yellow",
        },
        Q = function (e) {
          var l,
            r,
            t = e.children,
            s = e.color,
            i = e.linkTo,
            c = e.closeAction,
            d = e.ignoreColor,
            x = e.className,
            u = e.test,
            f = void 0 === u ? [] : u,
            m = (0, o.useRouter)().pathname;
          return (0, n.jsx)(a(), {
            href: i,
            passHref: !0,
            legacyBehavior: !0,
            children: (0, n.jsxs)("div", {
              onClick: c,
              className: "".concat(x, " cursor-pointer"),
              children: [
                (0, n.jsxs)("div", {
                  className: "group hidden flex-col md:flex",
                  children: [
                    (0, n.jsx)("span", { children: t }),
                    (0, n.jsx)("div", {
                      className: "rounded-lg border-b ".concat(
                        ((l = W[s]),
                        (r = "border-white ".concat(Y[s])),
                        d
                          ? r
                          : ("/0" !== i && f.push(i),
                            f.some(function (e) {
                              return m === e;
                            })
                              ? l
                              : r))
                      ),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex items-center justify-between py-5 px-0 md:hidden",
                  children: [
                    (0, n.jsx)("span", { className: "text-lg", children: t }),
                    (0, n.jsx)("div", {
                      className: "h-4 w-4 -rotate-90 transform",
                      children: (0, n.jsx)(h.V, {}),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        $ = function (e) {
          var l = e.onClick,
            r = e.children;
          return (0, n.jsx)("div", {
            className: "w-44",
            children: (0, n.jsxs)("div", {
              className:
                "flex h-full rounded border border-gray px-2 py-1 text-black outline-none focus:outline-none",
              onClick: l,
              children: [
                (0, n.jsx)("div", {
                  className: "stroke-current w-6 px-1",
                  children: (0, n.jsx)(h.jV, {}),
                }),
                (0, n.jsx)("div", {
                  className:
                    "w-full truncate bg-white text-sm text-gray focus:outline-none",
                  children: r,
                }),
              ],
            }),
          });
        },
        J = function (e) {
          var l = e.className,
            r = e.onClick,
            t = e.mobile,
            s = (0, o.useRouter)(),
            i = s.pathname,
            c = s.query,
            d = s.asPath,
            x = "ru" === s.locale ? "en" : "ru";
          return (0, n.jsx)(a(), {
            href: { pathname: i, query: c },
            as: d,
            locale: x,
            passHref: !0,
            legacyBehavior: !0,
            children: (0, n.jsx)("div", {
              className: "".concat(
                t ? "" : "w-10 bg-white hover:bg-gray-100 xl:w-16",
                " flex h-full cursor-pointer items-center justify-center rounded p-1"
              ),
              children: (0, n.jsx)("div", {
                className: l,
                onClick: r,
                children: (0, n.jsx)(function () {
                  return "en" === s.locale
                    ? (0, n.jsx)(M, {})
                    : (0, n.jsx)(Z, {});
                }, {}),
              }),
            }),
          });
        },
        K = function (e) {
          var l = e.mobile;
          return (0, n.jsx)(a(), {
            href: "/favorites",
            passHref: !0,
            legacyBehavior: !0,
            children: (0, n.jsx)("div", {
              className: "".concat(
                !l &&
                  "flex h-full w-10 cursor-pointer items-center justify-center rounded bg-white hover:bg-gray-100 xl:w-16",
                "\n      relative p-1"
              ),
              children: (0, n.jsx)(h.SF, {}),
            }),
          });
        },
        ee = function (e) {
          var l = e.mobile,
            r = (0, k.Z)(),
            s = r.items,
            i = r.isEmpty,
            a = (0, q.o)(),
            o = (0, t.Z)(a.right, 2)[1];
          return (0, n.jsxs)("div", {
            className: ""
              .concat(
                !l &&
                  "flex h-full w-10 items-center justify-center rounded bg-white hover:bg-gray-100 xl:w-16",
                " "
              )
              .concat(
                i ? "text-gray" : "text-black ",
                " group relative cursor-pointer p-1"
              ),
            onClick: function () {
              i || o(!0);
            },
            children: [
              (0, n.jsx)(h.OH, {}),
              (0, n.jsx)("div", {
                className: "".concat(
                  i ? "border-gray" : "border-black",
                  " absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full border bg-white text-xs group-hover:bg-gray-100 md:bottom-1 xl:right-3"
                ),
                children: (0, n.jsx)("div", { children: s.size }),
              }),
            ],
          });
        },
        le = function (e) {
          var l = e.mobile;
          return "authenticated" === (0, C.useSession)().status
            ? (0, n.jsx)(a(), {
                href: "/personal/edit",
                passHref: !0,
                legacyBehavior: !0,
                children: (0, n.jsx)("div", {
                  className: "".concat(
                    l ? "" : "w-10 bg-white hover:bg-gray-100 xl:w-16",
                    " flex h-full cursor-pointer items-center justify-center rounded p-1"
                  ),
                  children: (0, n.jsx)(h.PL, {}),
                }),
              })
            : (0, n.jsx)(a(), {
                href: "/login",
                passHref: !0,
                legacyBehavior: !0,
                children: (0, n.jsx)("div", {
                  className: "".concat(
                    l ? "" : "w-10 bg-white hover:bg-gray-100 xl:w-16",
                    " flex h-full cursor-pointer items-center justify-center rounded p-1"
                  ),
                  children: (0, n.jsx)(h.PL, {}),
                }),
              });
        },
        re = function (e) {
          var l = e.closeAction,
            r = (0, s.T_)("Components.navbar");
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(Q, {
                closeAction: l,
                color: "yellow",
                linkTo: "/0",
                test: ["/[pid]", "/item/[pid]"],
                children: r("catalog"),
              }),
              (0, n.jsx)(Q, {
                closeAction: l,
                color: "red",
                linkTo: "/artists/0",
                test: ["/artists/[pid]", "/artists/info/[pid]"],
                children: r("artists"),
              }),
              (0, n.jsx)(Q, {
                closeAction: l,
                color: "blue",
                linkTo: "/news",
                children: r("news"),
              }),
              (0, n.jsx)(Q, {
                closeAction: l,
                color: "green",
                linkTo: "/services",
                children: r("services"),
              }),
              (0, n.jsx)(Q, {
                closeAction: l,
                color: "pink",
                linkTo: "/collaboration",
                children: r("collaboration"),
              }),
              (0, n.jsx)(Q, {
                closeAction: l,
                color: "red",
                linkTo: "/about",
                children: r("about"),
              }),
              (0, n.jsx)(Q, {
                closeAction: l,
                color: "lightgreen",
                linkTo: "/contacts",
                children: r("contacts"),
              }),
              (0, n.jsx)(Q, {
                closeAction: l,
                color: "black",
                linkTo: "https://askerigallery.com",
                ignoreColor: !0,
                className: "uppercase",
                children: "Askeri Gallery",
              }),
            ],
          });
        },
        te = function (e) {
          var l = e.show,
            r = e.closeAction;
          return (0, n.jsx)(c.u, {
            show: l,
            children: (0, n.jsx)("div", {
              className:
                "fixed inset-0 top-16 z-30 flex flex-col justify-between",
              children: (0, n.jsx)(c.u.Child, {
                enter: "transition ease-in-out duration-500 transform",
                enterFrom: "-translate-x-full",
                enterTo: "translate-x-0",
                leave: "transition ease-in-out duration-300 transform",
                leaveFrom: "translate-x-0",
                leaveTo: "-translate-x-full",
                as: u.Fragment,
                children: (0, n.jsxs)("div", {
                  className:
                    "flex h-full w-full flex-col justify-between bg-white px-4 pt-2",
                  children: [
                    (0, n.jsx)("div", {
                      className: "flex flex-col",
                      children: (0, n.jsx)(re, { closeAction: r }),
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mb-10 flex w-full justify-evenly rounded-full bg-gray-200 py-2 text-gray",
                      children: [
                        (0, n.jsx)(a(), {
                          href: "tel:+79995503129",
                          passHref: !0,
                          legacyBehavior: !0,
                          children: (0, n.jsx)("div", {
                            className:
                              "flex justify-center rounded-full p-1 hover:bg-gray-100",
                            children: (0, n.jsx)("div", {
                              className: "w-6",
                              children: (0, n.jsx)(R, {}),
                            }),
                          }),
                        }),
                        (0, n.jsx)(a(), {
                          href: "mailto:info@artonline24.com",
                          passHref: !0,
                          legacyBehavior: !0,
                          children: (0, n.jsx)("div", {
                            className:
                              "flex justify-center rounded-full p-1 hover:bg-gray-100",
                            children: (0, n.jsx)("div", {
                              className: "w-6",
                              children: (0, n.jsx)(z, {}),
                            }),
                          }),
                        }),
                        (0, n.jsx)(a(), {
                          href: "https://wa.me/79995503129",
                          passHref: !0,
                          legacyBehavior: !0,
                          children: (0, n.jsx)("div", {
                            className:
                              "flex justify-center rounded-full p-1 hover:bg-gray-100",
                            children: (0, n.jsx)("div", {
                              className: "w-6",
                              children: (0, n.jsx)(h.yB, {}),
                            }),
                          }),
                        }),
                        (0, n.jsx)(a(), {
                          href: "https://t.me/ArtOnline24",
                          passHref: !0,
                          legacyBehavior: !0,
                          children: (0, n.jsx)("div", {
                            className:
                              "flex justify-center rounded-full p-1 hover:bg-gray-100",
                            children: (0, n.jsx)("div", {
                              className: "w-6",
                              children: (0, n.jsx)(h.YG, {}),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        ne = function (e) {
          var l = e.color,
            r = e.mobileGray,
            s = e.divider,
            i = (0, t.Z)((0, u.useState)(!1), 2),
            o = i[0],
            c = i[1],
            d = (0, t.Z)((0, T.p)(), 2)[1],
            x = function () {
              return c(!1);
            };
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className:
                  "fixed top-0 z-30 flex w-full flex-col bg-white px-4 pt-2 md:hidden  "
                    .concat(s ? "border-t border-b border-gray" : "", " ")
                    .concat(
                      r ? "border-t border-b border-gray border-opacity-80" : ""
                    ),
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex w-full items-center",
                    children: [
                      (0, n.jsx)("div", {
                        onClick: function () {
                          return c(function (e) {
                            return !e;
                          });
                        },
                        children: (0, n.jsx)(h.SI, {}),
                      }),
                      (0, n.jsx)(a(), {
                        href: "/0",
                        passHref: !0,
                        legacyBehavior: !0,
                        children: (0, n.jsx)("div", {
                          className: "mx-auto w-3/4 ".concat(
                            U[null != l ? l : "black"],
                            " cursor-pointer px-1"
                          ),
                          onTouchStartCapture: x,
                          children: (0, n.jsx)(P.Z, {}),
                        }),
                      }),
                      (0, n.jsx)(J, { mobile: !0 }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex w-full items-center justify-around py-1",
                    children: [
                      (0, n.jsx)("div", {
                        onClick: function (e) {
                          d(!0);
                        },
                        onTouchEndCapture: function (e) {
                          e.preventDefault(), d(!0);
                        },
                        children: (0, n.jsx)("div", {
                          className: "w-5",
                          children: (0, n.jsx)(h.jV, {}),
                        }),
                      }),
                      (0, n.jsx)(le, { mobile: !0 }),
                      (0, n.jsx)(K, { mobile: !0 }),
                      (0, n.jsx)(ee, { mobile: !0 }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(te, { show: o, closeAction: x }),
              (0, n.jsx)("div", { className: "block h-24 md:hidden" }),
            ],
          });
        },
        se = function () {
          var e = (0, s.T_)("Components.navbar"),
            l = (0, q.o)(),
            r = (0, t.Z)(l.left, 2)[1];
          return (0, n.jsxs)("div", {
            className: "flex w-full items-center",
            children: [
              (0, n.jsx)("span", {
                onClick: function () {
                  return r(!0);
                },
                className:
                  "text mr-4 cursor-pointer rounded bg-white p-1 hover:bg-gray-100",
                children: e("contact"),
              }),
              (0, n.jsx)(a(), {
                href: "tel:+79995503129",
                passHref: !0,
                legacyBehavior: !0,
                children: (0, n.jsx)("div", {
                  className:
                    "cursor-pointer rounded bg-white p-1 hover:bg-gray-100",
                  children: (0, n.jsx)("div", {
                    className:
                      "flex h-6 w-5 items-center justify-center text-gray",
                    children: (0, n.jsx)(R, {}),
                  }),
                }),
              }),
              (0, n.jsx)(a(), {
                href: "mailto:info@artonline24.com",
                passHref: !0,
                legacyBehavior: !0,
                children: (0, n.jsx)("div", {
                  className:
                    "cursor-pointer rounded bg-white p-1 hover:bg-gray-100",
                  children: (0, n.jsx)("div", {
                    className:
                      "flex h-6 w-5 items-center justify-center text-gray",
                    children: (0, n.jsx)(z, {}),
                  }),
                }),
              }),
              (0, n.jsx)(a(), {
                href: "https://wa.me/79995503129",
                passHref: !0,
                legacyBehavior: !0,
                children: (0, n.jsx)("div", {
                  className:
                    "cursor-pointer rounded bg-white p-1 hover:bg-gray-100",
                  children: (0, n.jsx)("div", {
                    className:
                      "flex h-6 w-5 items-center justify-center text-gray",
                    children: (0, n.jsx)(h.yB, {}),
                  }),
                }),
              }),
              (0, n.jsx)(a(), {
                href: "https://t.me/ArtOnline24",
                passHref: !0,
                legacyBehavior: !0,
                children: (0, n.jsx)("div", {
                  className:
                    "cursor-pointer rounded bg-white p-1 hover:bg-gray-100",
                  children: (0, n.jsx)("div", {
                    className:
                      "flex h-6 w-5 items-center justify-center text-gray",
                    children: (0, n.jsx)(h.YG, {}),
                  }),
                }),
              }),
            ],
          });
        },
        ie = function (e) {
          var l = e.noNav;
          return (0, n.jsx)("div", {
            className: "flex h-full w-full",
            children: (0, n.jsxs)("div", {
              className: "ml-auto flex justify-end py-1 md:w-2/4",
              children: [
                (0, n.jsx)(J, {}),
                !l &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(le, {}), (0, n.jsx)(K, {})],
                  }),
                (0, n.jsx)(ee, {}),
              ],
            }),
          });
        },
        ae = function (e) {
          var l = e.color,
            r = e.noNav,
            i = e.divider,
            a = (0, t.Z)((0, T.p)(), 2)[1],
            o = (0, s.T_)("Components.navbar");
          return (0, n.jsx)(c.u, {
            show: !0,
            enter: "transition ease-in-out duration-1000 transform",
            enterFrom: "-translate-y-full",
            enterTo: "translate-y-0",
            as: u.Fragment,
            children: (0, n.jsxs)("div", {
              className:
                "sticky top-0 z-30 hidden w-full bg-white pb-6 pt-4 md:block ".concat(
                  i || r
                    ? "border-t border-b border-gray border-opacity-80"
                    : ""
                ),
              children: [
                (0, n.jsxs)("div", {
                  className: "container mx-auto flex items-center ".concat(
                    r ? "pb-2" : ""
                  ),
                  children: [
                    r
                      ? (0, n.jsx)("div", {
                          className: "flex w-full items-center",
                        })
                      : (0, n.jsx)(se, {}),
                    (0, n.jsx)(x.Z, { color: l }),
                    (0, n.jsx)(ie, { noNav: r }),
                  ],
                }),
                !r &&
                  (0, n.jsx)("div", {
                    className: "pt-2",
                    children: (0, n.jsxs)("div", {
                      className:
                        "container mx-auto flex items-center justify-between md:text-xs lg:text-base",
                      children: [
                        (0, n.jsx)(re, {}),
                        (0, n.jsx)($, {
                          onClick: function () {
                            return a(!0);
                          },
                          children: o("search.placeholder"),
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          });
        },
        oe = function () {
          var e = (0, s.T_)("Components.feedback"),
            l = (0, q.o)(),
            r = (0, t.Z)(l.left, 2),
            i = r[0],
            a = r[1],
            o = function () {
              return a(!1);
            };
          return (0, n.jsx)(d.V, {
            open: i,
            onClose: o,
            className: "fixed inset-0 z-50 overflow-y-auto",
            children: (0, n.jsxs)("div", {
              className: "flex min-h-screen md:items-center md:justify-center",
              children: [
                (0, n.jsx)(d.V.Overlay, {
                  className: "fixed inset-0 bg-black opacity-30",
                }),
                (0, n.jsxs)("div", {
                  className:
                    "relative mx-auto flex-1 bg-white p-8 md:max-w-xl md:rounded-xl",
                  children: [
                    (0, n.jsx)(d.V.Title, {
                      className:
                        "relative border-b border-gray border-opacity-40 pb-8 text-center text-[21px] font-medium",
                      children: e("title"),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "absolute inset-y-0 right-5 top-5 h-5 w-5 cursor-pointer fill-black",
                      onClick: o,
                      children: (0, n.jsx)(h.X1, {}),
                    }),
                    (0, n.jsx)("div", {
                      className: "flex flex-1 flex-col px-4 pt-6",
                      children: (0, n.jsx)(L, { close: o }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ce = function () {
          var e = (0, q.o)(),
            l = (0, t.Z)(e.right, 2),
            r = l[0],
            s = l[1];
          return (0, n.jsx)(D.g, {
            open: r,
            close: function () {
              return s(!1);
            },
            children: (0, n.jsx)(X.j, {}),
          });
        },
        de = function (e) {
          var l = e.color,
            r = e.noNav,
            t = e.mobileGray,
            s = e.divider;
          return (0, o.useRouter)().isFallback
            ? (0, n.jsx)(G.Z, {})
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(ae, {
                    color: l,
                    noNav: r,
                    mobileGray: t,
                    divider: s,
                  }),
                  (0, n.jsx)(ne, { color: l, mobileGray: t }),
                  (0, n.jsx)(I, { color: l }),
                  (0, n.jsx)(oe, {}),
                  (0, n.jsx)(ce, {}),
                ],
              });
        };
    },
    29307: function (e, l, r) {
      r.d(l, {
        x: function () {
          return d;
        },
      });
      var t,
        n = r(26042),
        s = r(69396),
        i = r(85893),
        a = r(86873),
        o = r(11163),
        c = r(57775),
        d = function (e) {
          (null !== (l = (t = e).color) && void 0 !== l) || (t.color = "black");
          var l,
            r,
            d,
            x = (0, o.useRouter)(),
            u = Number(null !== (r = x.query.perPage) && void 0 !== r ? r : 18),
            h = (0, a.T_)("Components.pagination.pageChoose");
          return (0, i.jsxs)("div", {
            className: "flex items-center text-xs md:text-base",
            children: [
              (0, i.jsx)("span", { children: h("itemsizeselect") }),
              e.values.map(function (l) {
                return (0, i.jsx)(
                  "span",
                  {
                    className: "".concat(
                      u === l
                        ? c.rA[
                            null !== (d = e.color) && void 0 !== d ? d : "black"
                          ]
                        : "text-black",
                      " ml-2 cursor-pointer"
                    ),
                    onClick: function () {
                      return x.push({
                        pathname: e.baseLink,
                        query: (0, s.Z)((0, n.Z)({}, x.query), { perPage: l }),
                      });
                    },
                    children: l,
                  },
                  "pageSelector" + l
                );
              }),
              e.all &&
                (0, i.jsx)("span", {
                  className: "ml-2 cursor-pointer",
                  children: h("all"),
                }),
            ],
          });
        };
    },
    63895: function (e, l, r) {
      var t = r(85893);
      l.Z = function () {
        return (0, t.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 253.82668 33.626667",
          className: "h-full w-full",
          xmlSpace: "preserve",
          id: "svg2",
          version: "1.1",
          children: [
            (0, t.jsx)("defs", { id: "defs6" }),
            (0, t.jsx)("g", {
              transform: "matrix(1.3333333,0,0,-1.3333333,0,33.626667)",
              id: "g10",
              children: (0, t.jsxs)("g", {
                transform: "scale(0.1)",
                id: "g12",
                children: [
                  (0, t.jsx)("path", {
                    id: "path14",
                    fill: "#231f20",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    d: "M 456.875,248.879 H 322.988 v -28.02 h 52.95 V 92.2969 h 28.027 V 220.859 h 52.91 v 28.02",
                  }),
                  (0, t.jsx)("path", {
                    id: "path16",
                    fill: "#231f20",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    d: "m 242.227,164.785 h -28.028 v 56.074 h 28.028 c 15.449,0 28.027,-12.586 28.027,-28.046 0,-15.438 -12.578,-28.028 -28.027,-28.028 z m 30.371,-19.012 c 15.39,10 25.683,27.313 25.683,47.04 0,30.898 -25.156,56.066 -56.054,56.066 H 186.172 V 92.2969 h 28.027 v 44.4611 h 29.375 l 37.305,-44.4611 h 36.562 l -44.843,53.4761",
                  }),
                  (0, t.jsx)("path", {
                    id: "path18",
                    fill: "#231f20",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    d: "m 58.1836,150.773 20.1758,43.25 20.1758,-43.25 z M 125.781,92.2969 h 30.918 L 83.7109,248.879 H 73.0078 L 0,92.2969 h 30.918 l 14.1992,30.4571 h 66.4648 l 14.199,-30.4571",
                  }),
                  (0, t.jsx)("path", {
                    id: "path20",
                    fill: "#231f20",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    d: "m 653.691,223.242 c -29.023,0 -52.675,-23.601 -52.675,-52.656 0,-29.043 23.652,-52.664 52.675,-52.664 29.082,0 52.676,23.621 52.676,52.664 0,29.055 -23.594,52.656 -52.676,52.656 z m 0,-134.2772 c -45,0 -81.601,36.6012 -81.601,81.6212 0,45.019 36.601,81.633 81.601,81.633 45.02,0 81.661,-36.614 81.661,-81.633 0,-45.02 -36.641,-81.6212 -81.661,-81.6212",
                  }),
                  (0, t.jsx)("path", {
                    id: "path22",
                    fill: "#231f20",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    d: "m 1153.77,92.2969 h -28.02 V 248.859 h 28.02 V 92.2969",
                  }),
                  (0, t.jsx)("path", {
                    id: "path24",
                    fill: "#231f20",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    d: "M 891.133,248.859 V 151.27 l -97.598,97.589 h -8.652 V 92.2969 h 28.027 v 97.5861 l 97.578,-97.5861 h 8.711 V 248.859 h -28.066",
                  }),
                  (0, t.jsx)("path", {
                    id: "path26",
                    fill: "#231f20",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    d: "M 1324.4,248.859 V 151.27 l -97.58,97.589 h -8.71 V 92.2969 h 28.01 v 97.5861 l 97.6,-97.5861 h 8.71 V 248.859 h -28.03",
                  }),
                  (0, t.jsx)("path", {
                    id: "path28",
                    fill: "#231f20",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    d: "M 1011.9,120.32 V 248.859 H 983.871 V 92.2969 h 98.069 V 120.32 h -70.04",
                  }),
                  (0, t.jsx)("path", {
                    id: "path30",
                    fill: "#231f20",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    d: "m 1515.1,220.84 v 28.019 H 1417 V 92.2969 h 98.1 V 120.32 h -70.08 v 36.254 h 56.06 v 28.035 h -56.06 v 36.231 h 70.08",
                  }),
                  (0, t.jsx)("path", {
                    id: "path32",
                    fill: "currentColor",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    d: "m 1680.55,120.344 c 26.88,22.437 61.37,56.883 46.35,93.992 -6.82,16.894 -18.48,28.672 -33.65,34.074 -30.92,10.938 -65.47,-7.305 -69.28,-9.426 l 13.52,-24.55 c 7.42,4.043 30.27,13.332 46.42,7.519 7.62,-2.715 13.18,-8.66 17.03,-18.125 7.81,-19.316 -9.02,-40.586 -24.53,-55 -19.18,-17.871 -41.35,-30.078 -41.6,-30.207 l -10.84,-5.906 V 92.2969 h 109.2 v 28.0471 h -52.62",
                  }),
                  (0, t.jsx)("path", {
                    id: "path34",
                    fill: "currentColor",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    d: "m 1877.43,204.348 h -28.01 v -53.575 h -40.45 l 26.21,98.106 h -28.96 l -30.04,-111.875 v -14.25 h 73.24 V 92.2969 h 28.01 v 30.4571 h 26.27 v 28.019 h -26.27 v 53.575",
                  }),
                  (0, t.jsx)("path", {
                    id: "path36",
                    fill: "currentColor",
                    fillOpacity: "1",
                    fillRule: "nonzero",
                    stroke: "none",
                    d: "M 0,0 V 28.0078 H 1903.7 V 0 H 0",
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    8329: function (e, l, r) {
      r.d(l, {
        Tf: function () {
          return a;
        },
        Xr: function () {
          return c;
        },
        rH: function () {
          return o;
        },
        wj: function () {
          return i;
        },
      });
      var t = r(85893),
        n = r(96486),
        s = r.n(n),
        i = function () {
          return (0, t.jsx)("div", {
            className: "flex flex-1 flex-wrap",
            children: s()
              .range(0, 12)
              .map(function (e) {
                return (0,
                t.jsx)("div", { className: "w-1/2 p-2 md:w-1/3", children: (0, t.jsxs)("div", { className: "flex flex-col", children: [(0, t.jsx)("span", { className: "animate-pulse text-center", children: "Loading..." }), (0, t.jsx)("div", { className: "h-44 animate-pulse bg-gray md:h-56" }), (0, t.jsxs)("div", { className: "flex h-32 pt-1 md:h-36", children: [(0, t.jsx)("div", { className: "mx-1 flex-1 animate-pulse bg-gray" }), (0, t.jsx)("div", { className: "mx-1 flex-1 animate-pulse bg-gray" }), (0, t.jsx)("div", { className: "mx-1 flex-1 animate-pulse bg-gray" })] })] }) }, e);
              }),
          });
        },
        a = function () {
          return (0, t.jsx)("div", {
            className: "flex flex-1 flex-wrap",
            children: s()
              .range(0, 12)
              .map(function (e) {
                return (0,
                t.jsx)("div", { className: "w-1/2 p-1 md:w-1/3", children: (0, t.jsx)("div", { className: "h-72 animate-pulse bg-gray md:h-96" }) }, e);
              }),
          });
        },
        o = function () {
          return (0, t.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, t.jsx)("span", {
                className: "animate-pulse text-center text-3xl font-bold",
                children: "Loading...",
              }),
              (0, t.jsxs)("div", {
                className: "flex",
                children: [
                  (0, t.jsx)("div", {
                    className: "h-96 w-96 animate-pulse bg-gray",
                  }),
                  (0, t.jsx)("span", {
                    className: "animate-pulse pl-5",
                    children: "Loading...",
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "flex justify-evenly pt-28",
                children: s()
                  .range(0, 5)
                  .map(function (e) {
                    return (0,
                    t.jsx)("div", { className: "w-1/5 flex-1 px-1", children: (0, t.jsx)("div", { className: "h-72 animate-pulse bg-gray md:h-96" }) }, e);
                  }),
              }),
            ],
          });
        },
        c = function () {
          return (0, t.jsx)("div", {
            className: "flex flex-1 flex-col",
            children: s()
              .range(0, 10)
              .map(function (e) {
                return (0,
                t.jsxs)("div", { className: "flex flex-col py-4 ".concat(e % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"), children: [(0, t.jsx)("div", { className: "h-64 animate-pulse bg-gray md:h-80 md:w-64" }), (0, t.jsxs)("div", { className: "flex flex-1 flex-col px-5", children: [(0, t.jsx)("span", { className: "animate-pulse pb-2 text-center text-base font-bold md:text-lg", children: "Loading..." }), (0, t.jsx)("span", { className: "animate-pulse", children: "Loading..." })] })] }, e);
              }),
          });
        };
    },
    3326: function (e, l, r) {
      r.d(l, {
        Z: function () {
          return a;
        },
      });
      var t = r(85893);
      r(96486);
      var n = r(21367),
        s = function () {
          var e = (0, n.Kl)().data;
          return e
            ? { toDollar: e.USD, toEuro: e.EUR }
            : { toDollar: 0, toEuro: 0 };
        },
        i = r(86873),
        a = function (e) {
          var l = e.price,
            r = e.skipNonRubles,
            n = e.differentSize,
            a = e.yellow,
            o = e.black,
            c = e.small,
            d = e.noPadding,
            x = e.bottomGray,
            u = e.gray,
            h = (e.mobile, e.minus),
            f = (0, i.YB)(),
            m = s(),
            p = m.toDollar,
            j = m.toEuro;
          if (!l) return null;
          var v = f.formatNumber(Math.round(l), {
              style: "currency",
              currency: "RUB",
              maximumSignificantDigits: 21,
            }),
            g = f.formatNumber(Math.round(l * p), {
              style: "currency",
              currency: "USD",
              maximumSignificantDigits: 21,
            }),
            b = f.formatNumber(Math.round(l * j), {
              style: "currency",
              currency: "EUR",
              maximumSignificantDigits: 21,
            });
          return (0, t.jsxs)("div", {
            className: "flex flex-col ".concat(
              o
                ? "text-black"
                : a
                ? "text-yellow"
                : u
                ? "text-gray"
                : "text-white"
            ),
            children: [
              (0, t.jsxs)("span", {
                className: ""
                  .concat(
                    n
                      ? "text-4xl font-black"
                      : c
                      ? "text-sm"
                      : "text-xl font-black",
                    " "
                  )
                  .concat(d ? "" : "pt-4"),
                children: [h ? "-" : "", " ", v],
              }),
              !r &&
                (0, t.jsxs)("span", {
                  className: "\n\t\t\t\t\t"
                    .concat(
                      n ? "text-base" : c ? "text-xs" : "text-xl font-black",
                      " \n\t\t\t\t\t"
                    )
                    .concat(x ? "text-black text-opacity-50" : "text-white"),
                  children: [g, " / ", b],
                }),
            ],
          });
        };
    },
    57855: function (e, l, r) {
      r.d(l, {
        ei: function () {
          return t;
        },
        f8: function () {
          return n;
        },
        s3: function () {
          return s;
        },
      });
      var t = function (e) {
          var l = e.src;
          return l.startsWith("https")
            ? l
            : "https://imgs.artonline24.com/".concat(l);
        },
        n = function (e, l, r) {
          return '\n<svg width="'
            .concat(e, '" height="')
            .concat(
              l,
              '" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n    <linearGradient id="g">\n        <stop stop-color="#'
            )
            .concat(r, '" offset="20%" />\n        <stop stop-color="#')
            .concat(
              (parseInt(r, 16) - 30).toString(16),
              '" offset="50%" />\n        <stop stop-color="#'
            )
            .concat(
              r,
              '" offset="70%" />\n    </linearGradient>\n    </defs>\n    <rect width="'
            )
            .concat(e, '" height="')
            .concat(l, '" fill="#')
            .concat(r, '" />\n    <rect id="r" width="')
            .concat(e, '" height="')
            .concat(
              l,
              '" fill="url(#g)" />\n    <animate xlink:href="#r" attributeName="x" from="-'
            )
            .concat(e, '" to="')
            .concat(e, '" dur="1s" repeatCount="indefinite"  />\n</svg>');
        },
        s = function (e) {
          return window.btoa(e);
        };
    },
    47939: function (e, l, r) {
      var t = r(67294),
        n = r(47793);
      l.Z = function () {
        return (0, t.useContext)(n.f);
      };
    },
    67345: function (e, l, r) {
      r.r(l),
        r.d(l, {
          CatalogElement: function () {
            return K;
          },
          __N_SSG: function () {
            return J;
          },
          default: function () {
            return ce;
          },
        });
      var t = r(26042),
        n = r(69396),
        s = r(828),
        i = r(85893),
        a = r(8396),
        o = r(67294),
        c = r(9008),
        d = r.n(c),
        x = r(86873),
        u = r(96486),
        h = r.n(u),
        f = r(42677),
        m = r(11163),
        p = r(89755),
        j = r.n(p),
        v = r(31762),
        g = r(34829),
        b = r(30220),
        y = function (e) {
          var l = e.title,
            r = e.noScrollable,
            t = e.children,
            n = e.folded,
            a = (0, s.Z)((0, o.useState)(!n), 2),
            c = a[0],
            d = a[1];
          return (0, i.jsxs)("div", {
            className: "flex h-full w-full flex-col py-6",
            children: [
              (0, i.jsx)(g.u, {
                show: !0,
                enter: "transition ease-in-out duration-1000 transform",
                enterFrom: "-translate-x-full",
                enterTo: "translate-x-0",
                children: (0, i.jsxs)("div", {
                  className: "flex h-full cursor-pointer justify-between px-8",
                  onClick: function () {
                    return d(!c);
                  },
                  children: [
                    (0, i.jsx)("h1", {
                      className: "".concat(
                        c ? "font-medium" : "font-thin",
                        " pb-1 text-base"
                      ),
                      children: l,
                    }),
                    (0, i.jsx)("div", {
                      className: "relative flex-1",
                      children: (0, i.jsx)("div", {
                        className:
                          "absolute inset-y-0 right-0 w-4 transform transition duration-300 ease-in-out ".concat(
                            c ? "rotate-0" : "-rotate-90"
                          ),
                        children: (0, i.jsx)(b.V, {
                          className: "h-full w-full",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(g.u, {
                show: c,
                enter: "transition-opacity ease-in-out duration-1000",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "transition-opacity ease-in-out duration-500",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                as: o.Fragment,
                children: (0, i.jsx)("div", {
                  className: "py-2 md:pl-0 ".concat(r ? "" : "overflow-scroll"),
                  style: { direction: "rtl" },
                  children: (0, i.jsx)("div", {
                    className: "h-full w-full",
                    style: { direction: "ltr" },
                    children: t,
                  }),
                }),
              }),
            ],
          });
        },
        w = r(9669),
        N = r.n(w),
        L = r(56299),
        C = r(53948),
        k = r(88305),
        Z = r(21367),
        M = (0, k.f)(function () {
          return (0, o.useState)(null);
        }),
        R = M.Provider,
        z = M.useContainer,
        P = r(64343),
        _ = function (e) {
          var l = e.id,
            r = e.checked,
            t = e.onChange,
            n = e.children;
          return (0, i.jsxs)(
            "div",
            {
              onClick: t,
              className:
                "flex flex-1 cursor-pointer items-center bg-gray-200 py-2 pl-1 hover:bg-opacity-40 md:hover:bg-gray",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "h-4 w-4 rounded-full border border-black border-opacity-95",
                  children: r && (0, i.jsx)(P.Z, {}),
                }),
                (0, i.jsx)("span", { className: "flex-1 pl-2", children: n }),
              ],
            },
            l
          );
        },
        V = function (e) {
          var l = e.innerId,
            r = (0, m.useRouter)().locale,
            t = (0, C.mN)(),
            n = (0, s.Z)(t.temp, 1)[0],
            a = (0, C.Eb)().toggleId,
            o = (0, s.Z)(z(), 1)[0];
          return o
            ? (0, i.jsx)("form", {
                className: "flex flex-col px-8",
                children: o[l].map(function (e) {
                  return (0, i.jsx)(
                    _,
                    {
                      id: e.id,
                      checked: n[l].includes(e.id.toString()),
                      innerId: l,
                      onChange: function () {
                        return a(l, e.id.toString());
                      },
                      children: "ru" === r ? e.text : e.text_en,
                    },
                    l + e.id
                  );
                }),
              })
            : (0, i.jsx)(L.Z, {});
        },
        T = function () {
          var e = (0, m.useRouter)().locale,
            l = (0, C.mN)(),
            r = (0, s.Z)(l.temp, 1)[0],
            t = (0, C.Eb)().toggleId,
            n = (0, s.Z)(z(), 1)[0];
          return (0, i.jsx)("form", {
            className: "flex flex-wrap items-center justify-center",
            children: n
              ? n.art_colors.map(function (l) {
                  return (0, i.jsxs)(
                    "div",
                    {
                      onClick: function () {
                        return t("art_colors", l.id.toString());
                      },
                      className: "\n\t\t\t\t\t\t\t".concat(
                        r.art_colors.includes(l.id.toString())
                          ? "border-black border-opacity-40"
                          : "border-gray-100",
                        "\n\t\t\t\t\t\t\tm-1 flex cursor-pointer flex-col items-center justify-evenly rounded border p-1 pt-2"
                      ),
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "h-14 w-14 appearance-none rounded-lg md:h-20 md:w-20",
                          style: { backgroundColor: l.color },
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "flex h-10 w-16 items-center justify-center break-words pt-2 text-center md:h-14 md:w-24 md:text-sm",
                          children: (0, i.jsx)("span", {
                            className: "text-[11px]",
                            children: "ru" === e ? l.name : l.name_en,
                          }),
                        }),
                      ],
                    },
                    "colors" + l.id
                  );
                })
              : (0, i.jsx)(L.Z, {}),
          });
        },
        O = function () {
          var e = (0, x.T_)("Catalog.filters"),
            l = (0, s.Z)(z(), 2)[1];
          return (
            (0, o.useEffect)(function () {
              N()
                .get("/api/filters/")
                .then(function (e) {
                  console.log(e.data), l(e.data);
                })
                .catch(function (e) {
                  return console.log(e);
                });
            }, []),
            (0, i.jsxs)("div", {
              className: "flex w-full flex-col",
              children: [
                (0, i.jsx)("h1", {
                  className: "pb-8 text-center text-xl font-bold",
                  children: e("title"),
                }),
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col divide-y divide-gray divide-opacity-40 border-t border-b border-gray border-opacity-40 py-1",
                  children: [
                    (0, i.jsx)(y, {
                      title: e("artforms"),
                      noScrollable: !0,
                      children: (0, i.jsx)(V, { innerId: "art_arttype" }),
                    }),
                    (0, i.jsx)(y, {
                      title: e("themes"),
                      folded: !0,
                      noScrollable: !0,
                      children: (0, i.jsx)(V, { innerId: "art_themes" }),
                    }),
                    (0, i.jsx)(y, {
                      title: e("formats"),
                      folded: !0,
                      noScrollable: !0,
                      children: (0, i.jsx)(V, { innerId: "art_format" }),
                    }),
                    (0, i.jsx)(y, {
                      title: e("sizes"),
                      folded: !0,
                      noScrollable: !0,
                      children: (0, i.jsx)(V, { innerId: "art_size" }),
                    }),
                    (0, i.jsx)(y, {
                      title: e("colors"),
                      folded: !0,
                      noScrollable: !0,
                      children: (0, i.jsx)(T, {}),
                    }),
                    (0, i.jsx)(y, {
                      title: e("prices"),
                      folded: !0,
                      noScrollable: !0,
                      children: (0, i.jsx)(V, { innerId: "art_price" }),
                    }),
                    (0, i.jsx)(y, {
                      title: e("styles"),
                      folded: !0,
                      noScrollable: !0,
                      children: (0, i.jsx)(V, { innerId: "art_genre" }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        S = function () {
          return (0, i.jsx)(R, { children: (0, i.jsx)(O, {}) });
        },
        F = r(8329),
        H = r(3326),
        A = r(65543),
        B = (0, k.f)(function () {
          return { left: (0, o.useState)(!1), right: (0, o.useState)(!1) };
        }),
        E = B.Provider,
        I = B.useContainer,
        G = r(14339),
        q = r(17690),
        D = function (e) {
          var l = e.checked,
            r = e.children;
          return (0, i.jsxs)("div", {
            className:
              "flex flex-1 cursor-pointer items-center bg-gray-200 py-2 pl-1 hover:bg-gray hover:bg-opacity-40",
            children: [
              (0, i.jsx)("div", {
                className:
                  "h-4 w-4 rounded-full border border-black border-opacity-95",
                children: l && (0, i.jsx)(P.Z, {}),
              }),
              (0, i.jsx)("span", { className: "flex-1 pl-2", children: r }),
            ],
          });
        },
        X = function () {
          var e = (0, x.T_)("Catalog.sorts"),
            l = (0, s.Z)((0, G.G)(), 2),
            r = l[0],
            t = l[1];
          return (0, i.jsxs)(q.E, {
            value: r,
            onChange: t,
            className: "flex w-full flex-col",
            children: [
              (0, i.jsx)(q.E.Label, {
                as: "h1",
                className: "pb-8 text-center text-xl font-bold",
                children: e("title"),
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col border-t border-gray",
                children: [
                  (0, i.jsx)(q.E.Option, {
                    className: "focus:outline-none",
                    value: "ordering",
                    children: function (l) {
                      var r = l.checked;
                      return (0, i.jsx)(D, {
                        checked: r,
                        children: e("default"),
                      });
                    },
                  }),
                  (0, i.jsx)(q.E.Option, {
                    className: "focus:outline-none",
                    value: "newest",
                    children: function (l) {
                      var r = l.checked;
                      return (0, i.jsx)(D, {
                        checked: r,
                        children: e("newest"),
                      });
                    },
                  }),
                  (0, i.jsx)(q.E.Option, {
                    className: "focus:outline-none",
                    value: "priceLow",
                    children: function (l) {
                      var r = l.checked;
                      return (0, i.jsx)(D, {
                        checked: r,
                        children: e("priceLow"),
                      });
                    },
                  }),
                  (0, i.jsx)(q.E.Option, {
                    className: "focus:outline-none",
                    value: "priceHight",
                    children: function (l) {
                      var r = l.checked;
                      return (0, i.jsx)(D, {
                        checked: r,
                        children: e("priceHight"),
                      });
                    },
                  }),
                ],
              }),
            ],
          });
        },
        W = r(15158),
        U = r(14833),
        Y = r(60543),
        Q = r(29307),
        $ = r(57855),
        J = !0,
        K = function (e) {
          var l,
            r,
            s,
            a = e.id,
            o = e.art_author,
            c = e.name,
            d = e.name_en,
            x = e.image,
            u = e.image_preview,
            p = e.price,
            v = e.className,
            g = e.height,
            b = e.width,
            y = e.art_arttype,
            w = e.onlyNamePrice,
            N = e.skipName,
            L = e.yellowPrice,
            C = e.bordered,
            k = e.noLink,
            Z = e.containImage,
            M = (0, m.useRouter)(),
            R =
              g && b
                ? "".concat(g / 10, " x ").concat(b / 10)
                : (null != g ? g : 0) / 10 || (null != b ? b : 0) / 10 || null,
            z =
              "ru" === M.locale
                ? [null == y ? void 0 : y.text]
                : [null == y ? void 0 : y.text_en],
            P = h().compact(z).join(", "),
            _ = { opacity: 1, transition: { duration: 0.5 } },
            V = (0, Y.useGesture)({
              onClick: function () {
                return !k && M.push("/item/".concat(a));
              },
            }),
            T = null !== (l = null != u ? u : x) && void 0 !== l ? l : "";
          return T
            ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(
                  "div",
                  (0, n.Z)(
                    (0, t.Z)(
                      {
                        className:
                          "\n\t\t\t\tflex cursor-pointer touch-pan-y flex-col items-center\n\t\t\t\t".concat(
                            C ? "border-2 border-white md:border-4" : ""
                          ),
                      },
                      V()
                    ),
                    {
                      children: (0, i.jsxs)("div", {
                        className:
                          null != v
                            ? v
                            : "relative h-72 max-h-full w-full overflow-hidden md:h-96",
                        children: [
                          (0, i.jsx)(j(), {
                            loader: $.ei,
                            className: "".concat(
                              Z
                                ? "object-contain"
                                : "object-cover object-center",
                              " h-full w-full"
                            ),
                            layout: "fill",
                            unoptimized: !0,
                            src: T,
                            alt: "paint",
                          }),
                          (0, i.jsx)(f.E.div, {
                            className:
                              "absolute inset-0 bg-black bg-opacity-40 opacity-0",
                            whileHover: _,
                            whileTap: _,
                            children: (0, i.jsxs)("div", {
                              className:
                                "my-auto flex h-full select-none flex-col justify-center py-4 text-center text-white",
                              children: [
                                (0, i.jsx)("h1", {
                                  className: "text-base font-black ".concat(
                                    w
                                      ? "max-h-20 truncate md:text-lg"
                                      : "md:text-xl",
                                    " pb-2"
                                  ),
                                  children: "ru" === M.locale ? c : d,
                                }),
                                w
                                  ? null
                                  : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        !N &&
                                          (0, i.jsx)("span", {
                                            className: "text-sm",
                                            children:
                                              "ru" === M.locale
                                                ? null !==
                                                    (r =
                                                      null == o
                                                        ? void 0
                                                        : o.name) &&
                                                  void 0 !== r
                                                  ? r
                                                  : ""
                                                : null !==
                                                    (s =
                                                      null == o
                                                        ? void 0
                                                        : o.name_en) &&
                                                  void 0 !== s
                                                ? s
                                                : "",
                                          }),
                                        R &&
                                          (0, i.jsxs)("span", {
                                            className: "text-sm",
                                            children: [
                                              R,
                                              " ",
                                              "ru" === M.locale ? "см" : "cm",
                                            ],
                                          }),
                                        (0, i.jsx)("span", {
                                          className: "text-sm",
                                          children: P,
                                        }),
                                      ],
                                    }),
                                p &&
                                  p > 0 &&
                                  (0, i.jsx)(H.Z, {
                                    price: p,
                                    skipNonRubles: "ru" === M.locale,
                                    yellow: !!L,
                                    small: !!w,
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }
                  )
                ),
              })
            : null;
        },
        ee = function (e) {
          var l = e.data;
          return (0, i.jsx)("div", {
            className: "flex flex-1 flex-wrap",
            children: l.map(function (e) {
              return (0,
              i.jsx)("div", { className: "w-1/2 p-1 md:w-1/3", children: (0, i.jsx)(K, (0, n.Z)((0, t.Z)({}, e), { yellowPrice: !0 })) }, "catalogE" + e.id);
            }),
          });
        },
        le = function (e) {
          switch (e) {
            case "newest":
              return "ordering=datetime";
            case "priceHight":
              return "ordering=-price";
            case "priceLow":
              return "ordering=price";
            case "nameAsc":
              return "ordering=name";
            case "nameDesc":
              return "ordering=-name";
            default:
              return "ordering=ordering";
          }
        },
        re = function () {
          var e = (0, m.useRouter)().query,
            l = e.pid,
            r = e.perPage,
            t = Number(l),
            n = Number(null != r ? r : 18),
            a = (0, C.mN)(),
            c = (0, s.Z)(a.actual, 1)[0],
            d = (0, s.Z)((0, G.G)(), 1)[0],
            x = (0, Z.v_)({
              limit: n,
              offset: t * n,
              additional: "&"
                .concat(
                  h()
                    .chain(h().toPairs(c))
                    .filter(function (e) {
                      return !(0, s.Z)(e, 2)[1].isEmpty();
                    })
                    .map(function (e) {
                      var l = (0, s.Z)(e, 2),
                        r = l[0],
                        t = l[1];
                      return "".concat(r, "=").concat(t.join(","));
                    })
                    .join("&")
                    .value(),
                  "&"
                )
                .concat(le(d)),
              noRevalidate: !0,
            }).data;
          return (
            (0, o.useEffect)(
              function () {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              },
              [t]
            ),
            x
              ? (0, i.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, i.jsx)(ee, { data: x.results }),
                    (0, i.jsx)(W.Z, {
                      baseLink: "/",
                      perPage: n,
                      pidN: t,
                      maxElem: x.count,
                      color: "yellow",
                      overflowRedirect: !0,
                      query: { perPage: n },
                    }),
                    (0, i.jsx)("div", {
                      className: "flex justify-center pt-8 pb-8 md:pb-0",
                      children: (0, i.jsx)(Q.x, {
                        baseLink: "/[pid]",
                        values: [18, 54, 162],
                        color: "yellow",
                        all: !1,
                      }),
                    }),
                  ],
                })
              : (0, i.jsx)(F.Tf, {})
          );
        },
        te = function () {
          var e = (0, x.T_)("Catalog.footer");
          return (0, i.jsxs)("div", {
            className: "md:pt-8",
            children: [
              (0, i.jsx)("div", {
                className: "flex pb-8",
                children: (0, i.jsxs)("div", {
                  className: "cursor-pointer",
                  onClick: function () {},
                  children: [
                    (0, i.jsx)("h1", { className: "", children: e("title") }),
                    (0, i.jsx)("div", { className: "border border-gray" }),
                  ],
                }),
              }),
              (0, i.jsx)("p", { className: "", children: e("body") }),
            ],
          });
        },
        ne = function (e) {
          var l = e.children,
            r = e.pos,
            t = I(),
            n = (0, s.Z)(t[r], 2)[1];
          return (0, i.jsx)("div", {
            className: "flex-1 cursor-pointer px-1 md:flex-none",
            onClick: function () {
              return n(!0);
            },
            children: (0, i.jsx)("div", {
              className:
                "rounded-sm border border-gray border-opacity-60 bg-white py-3 px-4 text-center text-sm hover:border-opacity-90 md:w-44",
              children: l,
            }),
          });
        },
        se = function () {
          var e = I(),
            l = (0, s.Z)(e.left, 2),
            r = l[0],
            t = l[1],
            n = (0, C.Eb)(),
            a = n.clear,
            o = n.filtersCount,
            c = n.apply,
            d = (0, x.T_)("Catalog.filters"),
            u = function () {
              t(!1);
            };
          return (0, i.jsxs)(U.e, {
            open: r,
            close: u,
            children: [
              (0, i.jsx)("div", {
                className: "flex justify-center pt-8 pb-16",
                children: (0, i.jsx)(S, {}),
              }),
              (0, i.jsxs)("div", {
                className:
                  "sticky inset-x-0 bottom-0 flex justify-center bg-white py-2 text-lg font-medium md:text-base",
                children: [
                  (0, i.jsx)("div", {
                    className: "mx-2 w-2/5",
                    children: (0, i.jsx)(A.o, {
                      customFont: !0,
                      autoFont: !0,
                      fullWidth: !0,
                      gray: !0,
                      onClick: a,
                      children: (0, i.jsx)("span", {
                        className:
                          "py-2 text-sm text-black group-hover:text-white",
                        children: d("clear"),
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "mx-2 w-2/5",
                    children: (0, i.jsx)(A.o, {
                      inversedColors: !0,
                      autoFont: !0,
                      customFont: !0,
                      fullWidth: !0,
                      gray: !0,
                      onClick: function () {
                        c(), u();
                      },
                      children: (0, i.jsx)("span", {
                        className: "".concat(
                          0 === o
                            ? "text-black text-opacity-40 group-hover:text-white"
                            : "text-black group-hover:text-white",
                          " py-2 text-sm"
                        ),
                        children: "".concat(d("apply"), " (").concat(o, ")"),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ie = function () {
          var e = I(),
            l = (0, s.Z)(e.right, 2),
            r = l[0],
            t = l[1];
          return (0, i.jsx)(U.g, {
            open: r,
            close: function () {
              return t(!1);
            },
            children: (0, i.jsx)("div", {
              className: "flex justify-center px-8 pt-8",
              children: (0, i.jsx)(X, {}),
            }),
          });
        },
        ae = function () {
          var e = (0, x.T_)("Catalog");
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className:
                  "inset-x-0 block pt-4 text-center text-lg md:absolute md:top-5 md:pt-0",
                children: e("title"),
              }),
              (0, i.jsxs)("div", {
                className:
                  "sticky top-24 z-20 flex items-center justify-between py-4 md:top-32 md:px-4",
                children: [
                  (0, i.jsx)(ne, {
                    pos: "left",
                    children: e("filters.buttons.filter"),
                  }),
                  (0, i.jsx)(ne, {
                    pos: "right",
                    children: e("filters.buttons.sort"),
                  }),
                ],
              }),
            ],
          });
        },
        oe = function () {
          return (0, m.useRouter)().isFallback
            ? (0, i.jsx)(L.Z, {})
            : (0, i.jsx)(E, {
                children: (0, i.jsxs)("div", {
                  className: "relative flex flex-col px-4 md:px-0",
                  children: [
                    (0, i.jsx)(ae, {}),
                    (0, i.jsx)(se, {}),
                    (0, i.jsx)(ie, {}),
                    (0, i.jsx)(re, {}),
                    (0, i.jsx)(te, {}),
                  ],
                }),
              });
        };
      oe.getLayout = function (e) {
        return (0, i.jsxs)(v.Z, {
          color: "yellow",
          children: [
            (0, i.jsxs)(d(), {
              children: [
                (0, i.jsx)("title", {
                  children:
                    "Главная - Art Online 24 - онлайн галерея современного искусства.",
                }),
                (0, i.jsx)(
                  "meta",
                  { property: "og:title", content: "Главная - Art Online 24" },
                  "title"
                ),
                (0, i.jsx)(
                  "meta",
                  {
                    property: "og:description",
                    content:
                      "Главная - Art Online 24 - онлайн галерея современного искусства. Графика, живопись, скульптура и фотографии. Ведущие работы от лучших художников.",
                  },
                  "description"
                ),
              ],
            }),
            e,
          ],
        });
      };
      var ce = (0, a.withSuperJSONPage)(oe);
    },
  },
]);
