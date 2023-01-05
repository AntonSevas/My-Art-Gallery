(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8039],
  {
    22804: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      let { Decimal: n } = r(73847),
        i = {};
      (t.Prisma = i),
        (i.prismaVersion = {
          client: "3.15.2",
          engine: "461d6a05159055555eb7dfb337c9fb271cbd4d7e",
        }),
        (i.PrismaClientKnownRequestError = () => {
          throw Error(
            "PrismaClientKnownRequestError is unable to be run in the browser.\nIn case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues"
          );
        }),
        (i.PrismaClientUnknownRequestError = () => {
          throw Error(
            "PrismaClientUnknownRequestError is unable to be run in the browser.\nIn case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues"
          );
        }),
        (i.PrismaClientRustPanicError = () => {
          throw Error(
            "PrismaClientRustPanicError is unable to be run in the browser.\nIn case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues"
          );
        }),
        (i.PrismaClientInitializationError = () => {
          throw Error(
            "PrismaClientInitializationError is unable to be run in the browser.\nIn case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues"
          );
        }),
        (i.PrismaClientValidationError = () => {
          throw Error(
            "PrismaClientValidationError is unable to be run in the browser.\nIn case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues"
          );
        }),
        (i.Decimal = n),
        (i.sql = () => {
          throw Error(
            "sqltag is unable to be run in the browser.\nIn case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues"
          );
        }),
        (i.empty = () => {
          throw Error(
            "empty is unable to be run in the browser.\nIn case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues"
          );
        }),
        (i.join = () => {
          throw Error(
            "join is unable to be run in the browser.\nIn case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues"
          );
        }),
        (i.raw = () => {
          throw Error(
            "raw is unable to be run in the browser.\nIn case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues"
          );
        }),
        (i.validator = () => (e) => e),
        (i.DbNull = "DbNull"),
        (i.JsonNull = "JsonNull"),
        (i.AnyNull = "AnyNull"),
        (t.Prisma.AccountScalarFieldEnum = {
          id: "id",
          userId: "userId",
          type: "type",
          provider: "provider",
          providerAccountId: "providerAccountId",
          refresh_token: "refresh_token",
          access_token: "access_token",
          expires_at: "expires_at",
          token_type: "token_type",
          scope: "scope",
          id_token: "id_token",
          session_state: "session_state",
        }),
        (t.Prisma.SessionScalarFieldEnum = {
          id: "id",
          sessionToken: "sessionToken",
          userId: "userId",
          expires: "expires",
        }),
        (t.Prisma.UserScalarFieldEnum = {
          id: "id",
          name: "name",
          email: "email",
          emailVerified: "emailVerified",
          agreeOnPolicy: "agreeOnPolicy",
          dateofbirth: "dateofbirth",
          phone: "phone",
          newsletter: "newsletter",
          password: "password",
          checksum: "checksum",
          image: "image",
          old: "old",
          role: "role",
          online: "online",
          documents: "documents",
          paymentOptionsId: "paymentOptionsId",
          comments: "comments",
        }),
        (t.Prisma.VerificationTokenScalarFieldEnum = {
          identifier: "identifier",
          token: "token",
          expires: "expires",
        }),
        (t.Prisma.SavedUserPaymentOptionsScalarFieldEnum = {
          id: "id",
          payrole: "payrole",
          fio: "fio",
          phone: "phone",
          mail: "mail",
          city: "city",
          house: "house",
          postCode: "postCode",
          inn: "inn",
          juridName: "juridName",
          datetime: "datetime",
        }),
        (t.Prisma.Art_arttypeScalarFieldEnum = {
          id: "id",
          text: "text",
          text_en: "text_en",
          order: "order",
        }),
        (t.Prisma.Art_authorScalarFieldEnum = {
          id: "id",
          name: "name",
          name_en: "name_en",
          text_simple: "text_simple",
          text_simple_en: "text_simple_en",
          text_full: "text_full",
          text_full_en: "text_full_en",
          image: "image",
          name_internal: "name_internal",
          active: "active",
          datetime: "datetime",
        }),
        (t.Prisma.Art_currencyexchangeScalarFieldEnum = {
          id: "id",
          currency: "currency",
          ratebuy: "ratebuy",
          ratesell: "ratesell",
        }),
        (t.Prisma.Art_formatScalarFieldEnum = {
          id: "id",
          text: "text",
          text_en: "text_en",
          order: "order",
        }),
        (t.Prisma.Art_genreScalarFieldEnum = {
          id: "id",
          text: "text",
          text_en: "text_en",
          order: "order",
        }),
        (t.Prisma.Art_materialScalarFieldEnum = {
          id: "id",
          text: "text",
          text_en: "text_en",
          order: "order",
        }),
        (t.Prisma.Art_priceScalarFieldEnum = {
          id: "id",
          text: "text",
          text_en: "text_en",
          order: "order",
          min: "min",
          max: "max",
        }),
        (t.Prisma.Art_productScalarFieldEnum = {
          id: "id",
          name_internal: "name_internal",
          year: "year",
          price: "price",
          description: "description",
          description_en: "description_en",
          width: "width",
          height: "height",
          datetime: "datetime",
          arttype_id: "arttype_id",
          author_id: "author_id",
          formatof_id: "formatof_id",
          genre_id: "genre_id",
          material_id: "material_id",
          size_id: "size_id",
          name: "name",
          name_en: "name_en",
          quantity: "quantity",
          image: "image",
          image_preview: "image_preview",
          image_blurred: "image_blurred",
          lenght: "lenght",
          active: "active",
          show_price: "show_price",
          ordering: "ordering",
        }),
        (t.Prisma.Art_product_extraScalarFieldEnum = {
          id: "id",
          product_id: "product_id",
          price: "price",
          width: "width",
          height: "height",
          descripton: "descripton",
          descripton_en: "descripton_en",
          image: "image",
          image_preview: "image_preview",
          image_blurred: "image_blurred",
          datetime: "datetime",
          quantity: "quantity",
          lenght: "lenght",
          active: "active",
          material_id: "material_id",
        }),
        (t.Prisma.Art_fittoScalarFieldEnum = {
          id: "id",
          text: "text",
          text_en: "text_en",
          order: "order",
        }),
        (t.Prisma.Art_arttypetagScalarFieldEnum = {
          id: "id",
          text: "text",
          text_en: "text_en",
          order: "order",
        }),
        (t.Prisma.Art_colortagScalarFieldEnum = {
          id: "id",
          color: "color",
          name: "name",
          name_en: "name_en",
        }),
        (t.Prisma.Art_materialtagScalarFieldEnum = {
          id: "id",
          text: "text",
          text_en: "text_en",
          order: "order",
        }),
        (t.Prisma.Art_sizeScalarFieldEnum = {
          id: "id",
          text: "text",
          text_en: "text_en",
          order: "order",
        }),
        (t.Prisma.Art_themetagScalarFieldEnum = {
          id: "id",
          text: "text",
          text_en: "text_en",
          order: "order",
        }),
        (t.Prisma.Art_newsScalarFieldEnum = {
          id: "id",
          title: "title",
          title_en: "title_en",
          image: "image",
          image_preview: "image_preview",
          text: "text",
          text_en: "text_en",
          text_full: "text_full",
          text_full_en: "text_full_en",
          extra_images: "extra_images",
          active: "active",
          datetime: "datetime",
        }),
        (t.Prisma.Art_exhibitsScalarFieldEnum = {
          id: "id",
          author: "author",
          title: "title",
          title_en: "title_en",
          image: "image",
          image_preview: "image_preview",
          text_full: "text_full",
          text_full_en: "text_full_en",
          time_start: "time_start",
          time_end: "time_end",
          active: "active",
          datetime: "datetime",
        }),
        (t.Prisma.PaymentScalarFieldEnum = {
          actualId: "actualId",
          id: "id",
          ykassa_id: "ykassa_id",
          type: "type",
          comments: "comments",
          framing: "framing",
          datetime: "datetime",
          created: "created",
          status: "status",
          status_item: "status_item",
          price: "price",
          delivery: "delivery",
          commision: "commision",
          registered_id: "registered_id",
          anonimus_id: "anonimus_id",
          fast_id: "fast_id",
          promocode_id: "promocode_id",
          payment_option: "payment_option",
        }),
        (t.Prisma.PromocodeScalarFieldEnum = {
          id: "id",
          code: "code",
          value: "value",
          end: "end",
          datetime: "datetime",
        }),
        (t.Prisma.PaymentRegisteredScalarFieldEnum = {
          id: "id",
          userId: "userId",
          dataId: "dataId",
        }),
        (t.Prisma.PaymentAnonimusScalarFieldEnum = {
          id: "id",
          payrole: "payrole",
          fio: "fio",
          dateofbirth: "dateofbirth",
          phone: "phone",
          mail: "mail",
          city: "city",
          house: "house",
          postCode: "postCode",
          inn: "inn",
          juridName: "juridName",
        }),
        (t.Prisma.FastPaymentToAnonimusScalarFieldEnum = {
          id: "id",
          fio: "fio",
          phone: "phone",
          mail: "mail",
        }),
        (t.Prisma.EventScalarFieldEnum = {
          id: "id",
          name: "name",
          description: "description",
          date: "date",
          priority: "priority",
        }),
        (t.Prisma.ExpensesScalarFieldEnum = {
          id: "id",
          type: "type",
          customName: "customName",
          value: "value",
          date: "date",
        }),
        (t.Prisma.AdminInfoScalarFieldEnum = {
          id: "id",
          phone: "phone",
          email: "email",
        }),
        (t.Prisma.SortOrder = { asc: "asc", desc: "desc" }),
        (t.Prisma.QueryMode = {
          default: "default",
          insensitive: "insensitive",
        }),
        (t.Role = { USER: "USER", ADMIN: "ADMIN" }),
        (t.PayRole = { PHYS: "PHYS", JURISTIC: "JURISTIC" }),
        (t.ShowPrice = {
          BOTH: "BOTH",
          EURO: "EURO",
          DOLLAR: "DOLLAR",
          EURO_AND_DOLLAR: "EURO_AND_DOLLAR",
        }),
        (t.PaymentType = {
          ANONIMUS: "ANONIMUS",
          REGISTERED: "REGISTERED",
          FAST: "FAST",
        }),
        (t.PaymentStatus = {
          PENDING: "PENDING",
          CANCELED: "CANCELED",
          SUCCEEDED: "SUCCEEDED",
        }),
        (t.ItemsStatus = {
          AWAITING_PAYMENT: "AWAITING_PAYMENT",
          ON_OPERATOR: "ON_OPERATOR",
          IN_DELIVERY: "IN_DELIVERY",
          DELIVERED: "DELIVERED",
          CANCELED: "CANCELED",
        }),
        (t.PaymentOption = {
          CASH: "CASH",
          ONLINE: "ONLINE",
          OFFLINE: "OFFLINE",
          APAY: "APAY",
          GPAY: "GPAY",
          PAYPAL: "PAYPAL",
          FOREIGN: "FOREIGN",
        }),
        (t.ExpensesType = {
          CONTEXT: "CONTEXT",
          TARGET: "TARGET",
          OFFLINE: "OFFLINE",
          CUSTOM: "CUSTOM",
        }),
        (t.Prisma.ModelName = {
          Account: "Account",
          Session: "Session",
          User: "User",
          VerificationToken: "VerificationToken",
          SavedUserPaymentOptions: "SavedUserPaymentOptions",
          art_arttype: "art_arttype",
          art_author: "art_author",
          art_currencyexchange: "art_currencyexchange",
          art_format: "art_format",
          art_genre: "art_genre",
          art_material: "art_material",
          art_price: "art_price",
          art_product: "art_product",
          art_product_extra: "art_product_extra",
          art_fitto: "art_fitto",
          art_arttypetag: "art_arttypetag",
          art_colortag: "art_colortag",
          art_materialtag: "art_materialtag",
          art_size: "art_size",
          art_themetag: "art_themetag",
          art_news: "art_news",
          art_exhibits: "art_exhibits",
          Payment: "Payment",
          Promocode: "Promocode",
          PaymentRegistered: "PaymentRegistered",
          PaymentAnonimus: "PaymentAnonimus",
          FastPaymentToAnonimus: "FastPaymentToAnonimus",
          Event: "Event",
          Expenses: "Expenses",
          AdminInfo: "AdminInfo",
        }),
        (t.PrismaClient = class {
          constructor() {
            throw Error(
              "PrismaClient is unable to be run in the browser.\nIn case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues"
            );
          }
        }),
        Object.assign(t, i);
    },
    70385: function (e, t, r) {
      let n = r(22804);
      e.exports = n;
    },
    73847: function (e) {
      var t,
        r,
        n = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        o = Object.getOwnPropertyNames,
        s = Object.prototype.hasOwnProperty,
        a = (e, t) => n(e, "name", { value: t, configurable: !0 }),
        u = {};
      ((e, t) => {
        for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
      })(u, { Decimal: () => $e }),
        (e.exports = ((e, t, r, a) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let r of o(t))
              s.call(e, r) ||
                void 0 === r ||
                n(e, r, {
                  get: () => t[r],
                  enumerable: !(a = i(t, r)) || a.enumerable,
                });
          return e;
        })(n({}, "__esModule", { value: !0 }), u));
      var c = "0123456789abcdef",
        l =
          "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        f =
          "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        d = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -9e15,
          maxE: 9e15,
          crypto: !1,
        },
        p = !0,
        h = "[DecimalError] ",
        m = h + "Invalid argument: ",
        g = h + "Precision limit exceeded",
        y = h + "crypto unavailable",
        v = "[object Decimal]",
        w = Math.floor,
        b = Math.pow,
        _ = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        E = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        x = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        P = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        N = l.length - 1,
        O = f.length - 1,
        S = { toStringTag: v };
      function A(e) {
        var t,
          r,
          n,
          i = e.length - 1,
          o = "",
          s = e[0];
        if (i > 0) {
          for (o += s, t = 1; t < i; t++)
            (r = 7 - (n = e[t] + "").length) && (o += q(r)), (o += n);
          (r = 7 - (n = (s = e[t]) + "").length) && (o += q(r));
        } else if (0 === s) return "0";
        for (; s % 10 == 0; ) s /= 10;
        return o + s;
      }
      function I(e, t, r) {
        if (e !== ~~e || e < t || e > r) throw Error(m + e);
      }
      function j(e, t, r, n) {
        var i, o, s, a;
        for (o = e[0]; o >= 10; o /= 10) --t;
        return (
          --t < 0
            ? ((t += 7), (i = 0))
            : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
          (o = b(10, 7 - t)),
          (a = e[i] % o | 0),
          null == n
            ? t < 3
              ? (0 == t ? (a = (a / 100) | 0) : 1 == t && (a = (a / 10) | 0),
                (s =
                  (r < 4 && 99999 == a) ||
                  (r > 3 && 49999 == a) ||
                  5e4 == a ||
                  0 == a))
              : (s =
                  (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
                    ((e[i + 1] / o / 100) | 0) == b(10, t - 2) - 1) ||
                  ((a == o / 2 || 0 == a) && 0 == ((e[i + 1] / o / 100) | 0)))
            : t < 4
            ? (0 == t
                ? (a = (a / 1e3) | 0)
                : 1 == t
                ? (a = (a / 100) | 0)
                : 2 == t && (a = (a / 10) | 0),
              (s = ((n || r < 4) && 9999 == a) || (!n && r > 3 && 4999 == a)))
            : (s =
                (((n || r < 4) && a + 1 == o) ||
                  (!n && r > 3 && a + 1 == o / 2)) &&
                ((e[i + 1] / o / 1e3) | 0) == b(10, t - 3) - 1),
          s
        );
      }
      function T(e, t, r) {
        for (var n, i, o = [0], s = 0, a = e.length; s < a; ) {
          for (i = o.length; i--; ) o[i] *= t;
          for (o[0] += c.indexOf(e.charAt(s++)), n = 0; n < o.length; n++)
            o[n] > r - 1 &&
              (void 0 === o[n + 1] && (o[n + 1] = 0),
              (o[n + 1] += (o[n] / r) | 0),
              (o[n] %= r));
        }
        return o.reverse();
      }
      function M(e, t) {
        var r, n, i;
        if (t.isZero()) return t;
        (n = t.d.length) < 32
          ? (i = (1 / W(4, (r = Math.ceil(n / 3)))).toString())
          : ((r = 16), (i = "2.3283064365386962890625e-10")),
          (e.precision += r),
          (t = Y(e, 1, t.times(i), new e(1)));
        for (var o = r; o--; ) {
          var s = t.times(t);
          t = s.times(s).minus(s).times(8).plus(1);
        }
        return (e.precision -= r), t;
      }
      (S.absoluteValue = S.abs =
        function () {
          var e = new this.constructor(this);
          return e.s < 0 && (e.s = 1), k(e);
        }),
        (S.ceil = function () {
          return k(new this.constructor(this), this.e + 1, 2);
        }),
        (S.clampedTo = S.clamp =
          function (e, t) {
            var r = this.constructor;
            if (((e = new r(e)), (t = new r(t)), !e.s || !t.s))
              return new r(NaN);
            if (e.gt(t)) throw Error(m + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new r(this);
          }),
        (S.comparedTo = S.cmp =
          function (e) {
            var t,
              r,
              n,
              i,
              o = this.d,
              s = (e = new this.constructor(e)).d,
              a = this.s,
              u = e.s;
            if (!o || !s)
              return a && u
                ? a !== u
                  ? a
                  : o === s
                  ? 0
                  : !o ^ (a < 0)
                  ? 1
                  : -1
                : NaN;
            if (!o[0] || !s[0]) return o[0] ? a : s[0] ? -u : 0;
            if (a !== u) return a;
            if (this.e !== e.e) return (this.e > e.e) ^ (a < 0) ? 1 : -1;
            for (t = 0, r = (n = o.length) < (i = s.length) ? n : i; t < r; ++t)
              if (o[t] !== s[t]) return (o[t] > s[t]) ^ (a < 0) ? 1 : -1;
            return n === i ? 0 : (n > i) ^ (a < 0) ? 1 : -1;
          }),
        (S.cosine = S.cos =
          function () {
            var e,
              t,
              n = this,
              i = n.constructor;
            return n.d
              ? n.d[0]
                ? ((e = i.precision),
                  (t = i.rounding),
                  (i.precision = e + Math.max(n.e, n.sd()) + 7),
                  (i.rounding = 1),
                  (n = M(i, X(i, n))),
                  (i.precision = e),
                  (i.rounding = t),
                  k(2 == r || 3 == r ? n.neg() : n, e, t, !0))
                : new i(1)
              : new i(NaN);
          }),
        (S.cubeRoot = S.cbrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              o,
              s,
              a,
              u,
              c,
              l = this.constructor;
            if (!this.isFinite() || this.isZero()) return new l(this);
            for (
              p = !1,
                (o = this.s * b(this.s * this, 1 / 3)) && Math.abs(o) != 1 / 0
                  ? (n = new l(o.toString()))
                  : ((r = A(this.d)),
                    (o = ((e = this.e) - r.length + 1) % 3) &&
                      (r += 1 == o || -2 == o ? "0" : "00"),
                    (o = b(r, 1 / 3)),
                    (e = w((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                    ((n = new l(
                      (r =
                        o == 1 / 0
                          ? "5e" + e
                          : (r = o.toExponential()).slice(
                              0,
                              r.indexOf("e") + 1
                            ) + e)
                    )).s = this.s)),
                s = (e = l.precision) + 3;
              ;

            )
              if (
                ((c = (u = (a = n).times(a).times(a)).plus(this)),
                (n = R(c.plus(this).times(a), c.plus(u), s + 2, 1)),
                A(a.d).slice(0, s) === (r = A(n.d)).slice(0, s))
              ) {
                if (
                  "9999" != (r = r.slice(s - 3, s + 1)) &&
                  (i || "4999" != r)
                ) {
                  (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                    (k(n, e + 1, 1), (t = !n.times(n).times(n).eq(this)));
                  break;
                }
                if (!i && (k(a, e + 1, 0), a.times(a).times(a).eq(this))) {
                  n = a;
                  break;
                }
                (s += 4), (i = 1);
              }
            return (p = !0), k(n, e, l.rounding, t);
          }),
        (S.decimalPlaces = S.dp =
          function () {
            var e,
              t = this.d,
              r = NaN;
            if (t) {
              if (((r = 7 * ((e = t.length - 1) - w(this.e / 7))), (e = t[e])))
                for (; e % 10 == 0; e /= 10) r--;
              r < 0 && (r = 0);
            }
            return r;
          }),
        (S.dividedBy = S.div =
          function (e) {
            return R(this, new this.constructor(e));
          }),
        (S.dividedToIntegerBy = S.divToInt =
          function (e) {
            var t = this.constructor;
            return k(R(this, new t(e), 0, 1, 1), t.precision, t.rounding);
          }),
        (S.equals = S.eq =
          function (e) {
            return 0 === this.cmp(e);
          }),
        (S.floor = function () {
          return k(new this.constructor(this), this.e + 1, 3);
        }),
        (S.greaterThan = S.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (S.greaterThanOrEqualTo = S.gte =
          function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
          }),
        (S.hyperbolicCosine = S.cosh =
          function () {
            var e,
              t,
              r,
              n,
              i,
              o = this,
              s = o.constructor,
              a = new s(1);
            if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
            if (o.isZero()) return a;
            (r = s.precision),
              (n = s.rounding),
              (s.precision = r + Math.max(o.e, o.sd()) + 4),
              (s.rounding = 1),
              (i = o.d.length) < 32
                ? (t = (1 / W(4, (e = Math.ceil(i / 3)))).toString())
                : ((e = 16), (t = "2.3283064365386962890625e-10")),
              (o = Y(s, 1, o.times(t), new s(1), !0));
            for (var u, c = e, l = new s(8); c--; )
              (u = o.times(o)), (o = a.minus(u.times(l.minus(u.times(l)))));
            return k(o, (s.precision = r), (s.rounding = n), !0);
          }),
        (S.hyperbolicSine = S.sinh =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              o = i.constructor;
            if (!i.isFinite() || i.isZero()) return new o(i);
            if (
              ((t = o.precision),
              (r = o.rounding),
              (o.precision = t + Math.max(i.e, i.sd()) + 4),
              (o.rounding = 1),
              (n = i.d.length) < 3)
            )
              i = Y(o, 2, i, i, !0);
            else {
              (e = (e = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | e),
                (i = Y(o, 2, (i = i.times(1 / W(5, e))), i, !0));
              for (var s, a = new o(5), u = new o(16), c = new o(20); e--; )
                (s = i.times(i)),
                  (i = i.times(a.plus(s.times(u.times(s).plus(c)))));
            }
            return (o.precision = t), (o.rounding = r), k(i, t, r, !0);
          }),
        (S.hyperbolicTangent = S.tanh =
          function () {
            var e,
              t,
              r = this.constructor;
            return this.isFinite()
              ? this.isZero()
                ? new r(this)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + 7),
                  (r.rounding = 1),
                  R(
                    this.sinh(),
                    this.cosh(),
                    (r.precision = e),
                    (r.rounding = t)
                  ))
              : new r(this.s);
          }),
        (S.inverseCosine = S.acos =
          function () {
            var e,
              t = this,
              r = t.constructor,
              n = t.abs().cmp(1),
              i = r.precision,
              o = r.rounding;
            return -1 !== n
              ? 0 === n
                ? t.isNeg()
                  ? L(r, i, o)
                  : new r(0)
                : new r(NaN)
              : t.isZero()
              ? L(r, i + 4, o).times(0.5)
              : ((r.precision = i + 6),
                (r.rounding = 1),
                (t = t.asin()),
                (e = L(r, i + 4, o).times(0.5)),
                (r.precision = i),
                (r.rounding = o),
                e.minus(t));
          }),
        (S.inverseHyperbolicCosine = S.acosh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.lte(1)
              ? new n(r.eq(1) ? 0 : NaN)
              : r.isFinite()
              ? ((e = n.precision),
                (t = n.rounding),
                (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
                (n.rounding = 1),
                (p = !1),
                (r = r.times(r).minus(1).sqrt().plus(r)),
                (p = !0),
                (n.precision = e),
                (n.rounding = t),
                r.ln())
              : new n(r);
          }),
        (S.inverseHyperbolicSine = S.asinh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return !r.isFinite() || r.isZero()
              ? new n(r)
              : ((e = n.precision),
                (t = n.rounding),
                (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
                (n.rounding = 1),
                (p = !1),
                (r = r.times(r).plus(1).sqrt().plus(r)),
                (p = !0),
                (n.precision = e),
                (n.rounding = t),
                r.ln());
          }),
        (S.inverseHyperbolicTangent = S.atanh =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              o = i.constructor;
            return i.isFinite()
              ? i.e >= 0
                ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
                : ((e = o.precision),
                  (t = o.rounding),
                  Math.max((n = i.sd()), e) < -2 * i.e - 1
                    ? k(new o(i), e, t, !0)
                    : ((o.precision = r = n - i.e),
                      (i = R(i.plus(1), new o(1).minus(i), r + e, 1)),
                      (o.precision = e + 4),
                      (o.rounding = 1),
                      (i = i.ln()),
                      (o.precision = e),
                      (o.rounding = t),
                      i.times(0.5)))
              : new o(NaN);
          }),
        (S.inverseSine = S.asin =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              o = i.constructor;
            return i.isZero()
              ? new o(i)
              : ((t = i.abs().cmp(1)),
                (r = o.precision),
                (n = o.rounding),
                -1 !== t
                  ? 0 === t
                    ? (((e = L(o, r + 4, n).times(0.5)).s = i.s), e)
                    : new o(NaN)
                  : ((o.precision = r + 6),
                    (o.rounding = 1),
                    (i = i
                      .div(new o(1).minus(i.times(i)).sqrt().plus(1))
                      .atan()),
                    (o.precision = r),
                    (o.rounding = n),
                    i.times(2)));
          }),
        (S.inverseTangent = S.atan =
          function () {
            var e,
              t,
              r,
              n,
              i,
              o,
              s,
              a,
              u,
              c = this,
              l = c.constructor,
              f = l.precision,
              d = l.rounding;
            if (c.isFinite()) {
              if (c.isZero()) return new l(c);
              if (c.abs().eq(1) && f + 4 <= O)
                return ((s = L(l, f + 4, d).times(0.25)).s = c.s), s;
            } else {
              if (!c.s) return new l(NaN);
              if (f + 4 <= O)
                return ((s = L(l, f + 4, d).times(0.5)).s = c.s), s;
            }
            for (
              l.precision = a = f + 10,
                l.rounding = 1,
                e = r = Math.min(28, (a / 7 + 2) | 0);
              e;
              --e
            )
              c = c.div(c.times(c).plus(1).sqrt().plus(1));
            for (
              p = !1,
                t = Math.ceil(a / 7),
                n = 1,
                u = c.times(c),
                s = new l(c),
                i = c;
              -1 !== e;

            )
              if (
                ((i = i.times(u)),
                (o = s.minus(i.div((n += 2)))),
                (i = i.times(u)),
                void 0 !== (s = o.plus(i.div((n += 2)))).d[t])
              )
                for (e = t; s.d[e] === o.d[e] && e--; );
            return (
              r && (s = s.times(2 << (r - 1))),
              (p = !0),
              k(s, (l.precision = f), (l.rounding = d), !0)
            );
          }),
        (S.isFinite = function () {
          return !!this.d;
        }),
        (S.isInteger = S.isInt =
          function () {
            return !!this.d && w(this.e / 7) > this.d.length - 2;
          }),
        (S.isNaN = function () {
          return !this.s;
        }),
        (S.isNegative = S.isNeg =
          function () {
            return this.s < 0;
          }),
        (S.isPositive = S.isPos =
          function () {
            return this.s > 0;
          }),
        (S.isZero = function () {
          return !!this.d && 0 === this.d[0];
        }),
        (S.lessThan = S.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        (S.lessThanOrEqualTo = S.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        (S.logarithm = S.log =
          function (e) {
            var t,
              r,
              n,
              i,
              o,
              s,
              a = this.constructor,
              u = a.precision,
              c = a.rounding;
            if (null == e) (e = new a(10)), (t = !0);
            else {
              if (((r = (e = new a(e)).d), e.s < 0 || !r || !r[0] || e.eq(1)))
                return new a(NaN);
              t = e.eq(10);
            }
            if (((r = this.d), this.s < 0 || !r || !r[0] || this.eq(1)))
              return new a(
                r && !r[0] ? -1 / 0 : 1 != this.s ? NaN : r ? 0 : 1 / 0
              );
            if (t)
              if (r.length > 1) i = !0;
              else {
                for (n = r[0]; n % 10 == 0; ) n /= 10;
                i = 1 !== n;
              }
            if (
              ((p = !1),
              j(
                (s = R(Z(this, (o = u + 5)), t ? D(a, o + 10) : Z(e, o), o, 1))
                  .d,
                (n = u),
                c
              ))
            )
              do {
                if (
                  ((s = R(
                    Z(this, (o += 10)),
                    t ? D(a, o + 10) : Z(e, o),
                    o,
                    1
                  )),
                  !i)
                ) {
                  +A(s.d).slice(n + 1, n + 15) + 1 == 1e14 &&
                    (s = k(s, u + 1, 0));
                  break;
                }
              } while (j(s.d, (n += 10), c));
            return (p = !0), k(s, u, c);
          }),
        (S.minus = S.sub =
          function (e) {
            var t,
              r,
              n,
              i,
              o,
              s,
              a,
              u,
              c,
              l,
              f,
              d,
              h = this.constructor;
            if (((e = new h(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d
                    ? (e.s = -e.s)
                    : (e = new h(e.d || this.s !== e.s ? this : NaN))
                  : (e = new h(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (
              ((c = this.d),
              (d = e.d),
              (a = h.precision),
              (u = h.rounding),
              !c[0] || !d[0])
            ) {
              if (d[0]) e.s = -e.s;
              else {
                if (!c[0]) return new h(-0);
                e = new h(this);
              }
              return p ? k(e, a, u) : e;
            }
            if (
              ((r = w(e.e / 7)),
              (l = w(this.e / 7)),
              (c = c.slice()),
              (o = l - r))
            ) {
              for (
                (f = o < 0)
                  ? ((t = c), (o = -o), (s = d.length))
                  : ((t = d), (r = l), (s = c.length)),
                  o > (n = Math.max(Math.ceil(a / 7), s) + 2) &&
                    ((o = n), (t.length = 1)),
                  t.reverse(),
                  n = o;
                n--;

              )
                t.push(0);
              t.reverse();
            } else {
              for (
                (f = (n = c.length) < (s = d.length)) && (s = n), n = 0;
                n < s;
                n++
              )
                if (c[n] != d[n]) {
                  f = c[n] < d[n];
                  break;
                }
              o = 0;
            }
            for (
              f && ((t = c), (c = d), (d = t), (e.s = -e.s)),
                s = c.length,
                n = d.length - s;
              n > 0;
              --n
            )
              c[s++] = 0;
            for (n = d.length; n > o; ) {
              if (c[--n] < d[n]) {
                for (i = n; i && 0 === c[--i]; ) c[i] = 9999999;
                --c[i], (c[n] += 1e7);
              }
              c[n] -= d[n];
            }
            for (; 0 === c[--s]; ) c.pop();
            for (; 0 === c[0]; c.shift()) --r;
            return c[0]
              ? ((e.d = c), (e.e = F(c, r)), p ? k(e, a, u) : e)
              : new h(-0);
          }),
        (S.modulo = S.mod =
          function (e) {
            var t,
              r = this.constructor;
            return (
              (e = new r(e)),
              this.d && e.s && (!e.d || e.d[0])
                ? !e.d || (this.d && !this.d[0])
                  ? k(new r(this), r.precision, r.rounding)
                  : ((p = !1),
                    9 == r.modulo
                      ? ((t = R(this, e.abs(), 0, 3, 1)).s *= e.s)
                      : (t = R(this, e, 0, r.modulo, 1)),
                    (t = t.times(e)),
                    (p = !0),
                    this.minus(t))
                : new r(NaN)
            );
          }),
        (S.naturalExponential = S.exp =
          function () {
            return B(this);
          }),
        (S.naturalLogarithm = S.ln =
          function () {
            return Z(this);
          }),
        (S.negated = S.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), k(e);
          }),
        (S.plus = S.add =
          function (e) {
            var t,
              r,
              n,
              i,
              o,
              s,
              a,
              u,
              c,
              l,
              f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d || (e = new f(e.d || this.s === e.s ? this : NaN))
                  : (e = new f(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (
              ((c = this.d),
              (l = e.d),
              (a = f.precision),
              (u = f.rounding),
              !c[0] || !l[0])
            )
              return l[0] || (e = new f(this)), p ? k(e, a, u) : e;
            if (
              ((o = w(this.e / 7)),
              (n = w(e.e / 7)),
              (c = c.slice()),
              (i = o - n))
            ) {
              for (
                i < 0
                  ? ((r = c), (i = -i), (s = l.length))
                  : ((r = l), (n = o), (s = c.length)),
                  i > (s = (o = Math.ceil(a / 7)) > s ? o + 1 : s + 1) &&
                    ((i = s), (r.length = 1)),
                  r.reverse();
                i--;

              )
                r.push(0);
              r.reverse();
            }
            for (
              (s = c.length) - (i = l.length) < 0 &&
                ((i = s), (r = l), (l = c), (c = r)),
                t = 0;
              i;

            )
              (t = ((c[--i] = c[i] + l[i] + t) / 1e7) | 0), (c[i] %= 1e7);
            for (t && (c.unshift(t), ++n), s = c.length; 0 == c[--s]; ) c.pop();
            return (e.d = c), (e.e = F(c, n)), p ? k(e, a, u) : e;
          }),
        (S.precision = S.sd =
          function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(m + e);
            return (
              this.d
                ? ((t = U(this.d)), e && this.e + 1 > t && (t = this.e + 1))
                : (t = NaN),
              t
            );
          }),
        (S.round = function () {
          var e = this.constructor;
          return k(new e(this), this.e + 1, e.rounding);
        }),
        (S.sine = S.sin =
          function () {
            var e,
              t,
              n = this,
              i = n.constructor;
            return n.isFinite()
              ? n.isZero()
                ? new i(n)
                : ((e = i.precision),
                  (t = i.rounding),
                  (i.precision = e + Math.max(n.e, n.sd()) + 7),
                  (i.rounding = 1),
                  (n = K(i, X(i, n))),
                  (i.precision = e),
                  (i.rounding = t),
                  k(r > 2 ? n.neg() : n, e, t, !0))
              : new i(NaN);
          }),
        (S.squareRoot = S.sqrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              o,
              s = this.d,
              a = this.e,
              u = this.s,
              c = this.constructor;
            if (1 !== u || !s || !s[0])
              return new c(
                !u || (u < 0 && (!s || s[0])) ? NaN : s ? this : 1 / 0
              );
            for (
              p = !1,
                0 == (u = Math.sqrt(+this)) || u == 1 / 0
                  ? (((t = A(s)).length + a) % 2 == 0 && (t += "0"),
                    (u = Math.sqrt(t)),
                    (a = w((a + 1) / 2) - (a < 0 || a % 2)),
                    (n = new c(
                      (t =
                        u == 1 / 0
                          ? "5e" + a
                          : (t = u.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1
                            ) + a)
                    )))
                  : (n = new c(u.toString())),
                r = (a = c.precision) + 3;
              ;

            )
              if (
                ((n = (o = n).plus(R(this, o, r + 2, 1)).times(0.5)),
                A(o.d).slice(0, r) === (t = A(n.d)).slice(0, r))
              ) {
                if (
                  "9999" != (t = t.slice(r - 3, r + 1)) &&
                  (i || "4999" != t)
                ) {
                  (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                    (k(n, a + 1, 1), (e = !n.times(n).eq(this)));
                  break;
                }
                if (!i && (k(o, a + 1, 0), o.times(o).eq(this))) {
                  n = o;
                  break;
                }
                (r += 4), (i = 1);
              }
            return (p = !0), k(n, a, c.rounding, e);
          }),
        (S.tangent = S.tan =
          function () {
            var e,
              t,
              n = this,
              i = n.constructor;
            return n.isFinite()
              ? n.isZero()
                ? new i(n)
                : ((e = i.precision),
                  (t = i.rounding),
                  (i.precision = e + 10),
                  (i.rounding = 1),
                  ((n = n.sin()).s = 1),
                  (n = R(n, new i(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                  (i.precision = e),
                  (i.rounding = t),
                  k(2 == r || 4 == r ? n.neg() : n, e, t, !0))
              : new i(NaN);
          }),
        (S.times = S.mul =
          function (e) {
            var t,
              r,
              n,
              i,
              o,
              s,
              a,
              u,
              c,
              l = this.constructor,
              f = this.d,
              d = (e = new l(e)).d;
            if (((e.s *= this.s), !(f && f[0] && d && d[0])))
              return new l(
                !e.s || (f && !f[0] && !d) || (d && !d[0] && !f)
                  ? NaN
                  : f && d
                  ? 0 * e.s
                  : e.s / 0
              );
            for (
              r = w(this.e / 7) + w(e.e / 7),
                (u = f.length) < (c = d.length) &&
                  ((o = f), (f = d), (d = o), (s = u), (u = c), (c = s)),
                o = [],
                n = s = u + c;
              n--;

            )
              o.push(0);
            for (n = c; --n >= 0; ) {
              for (t = 0, i = u + n; i > n; )
                (a = o[i] + d[n] * f[i - n - 1] + t),
                  (o[i--] = a % 1e7 | 0),
                  (t = (a / 1e7) | 0);
              o[i] = (o[i] + t) % 1e7 | 0;
            }
            for (; !o[--s]; ) o.pop();
            return (
              t ? ++r : o.shift(),
              (e.d = o),
              (e.e = F(o, r)),
              p ? k(e, l.precision, l.rounding) : e
            );
          }),
        (S.toBinary = function (e, t) {
          return Q(this, 2, e, t);
        }),
        (S.toDecimalPlaces = S.toDP =
          function (e, t) {
            var r = this,
              n = r.constructor;
            return (
              (r = new n(r)),
              void 0 === e
                ? r
                : (I(e, 0, 1e9),
                  void 0 === t ? (t = n.rounding) : I(t, 0, 8),
                  k(r, e + r.e + 1, t))
            );
          }),
        (S.toExponential = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = C(n, !0))
              : (I(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : I(t, 0, 8),
                (r = C((n = k(new i(n), e + 1, t)), !0, e + 1))),
            n.isNeg() && !n.isZero() ? "-" + r : r
          );
        }),
        (S.toFixed = function (e, t) {
          var r,
            n,
            i = this.constructor;
          return (
            void 0 === e
              ? (r = C(this))
              : (I(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : I(t, 0, 8),
                (r = C(
                  (n = k(new i(this), e + this.e + 1, t)),
                  !1,
                  e + n.e + 1
                ))),
            this.isNeg() && !this.isZero() ? "-" + r : r
          );
        }),
        (S.toFraction = function (e) {
          var t,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            f,
            d,
            h = this.d,
            g = this.constructor;
          if (!h) return new g(this);
          if (
            ((c = r = new g(1)),
            (n = u = new g(0)),
            (s = (o = (t = new g(n)).e = U(h) - this.e - 1) % 7),
            (t.d[0] = b(10, s < 0 ? 7 + s : s)),
            null == e)
          )
            e = o > 0 ? t : c;
          else {
            if (!(a = new g(e)).isInt() || a.lt(c)) throw Error(m + a);
            e = a.gt(t) ? (o > 0 ? t : c) : a;
          }
          for (
            p = !1,
              a = new g(A(h)),
              l = g.precision,
              g.precision = o = 14 * h.length;
            (f = R(a, t, 0, 1, 1)), 1 != (i = r.plus(f.times(n))).cmp(e);

          )
            (r = n),
              (n = i),
              (i = c),
              (c = u.plus(f.times(i))),
              (u = i),
              (i = t),
              (t = a.minus(f.times(i))),
              (a = i);
          return (
            (i = R(e.minus(r), n, 0, 1, 1)),
            (u = u.plus(i.times(c))),
            (r = r.plus(i.times(n))),
            (u.s = c.s = this.s),
            (d =
              1 >
              R(c, n, o, 1)
                .minus(this)
                .abs()
                .cmp(R(u, r, o, 1).minus(this).abs())
                ? [c, n]
                : [u, r]),
            (g.precision = l),
            (p = !0),
            d
          );
        }),
        (S.toHexadecimal = S.toHex =
          function (e, t) {
            return Q(this, 16, e, t);
          }),
        (S.toNearest = function (e, t) {
          var r = this,
            n = r.constructor;
          if (((r = new n(r)), null == e)) {
            if (!r.d) return r;
            (e = new n(1)), (t = n.rounding);
          } else {
            if (
              ((e = new n(e)),
              void 0 === t ? (t = n.rounding) : I(t, 0, 8),
              !r.d)
            )
              return e.s ? r : e;
            if (!e.d) return e.s && (e.s = r.s), e;
          }
          return (
            e.d[0]
              ? ((p = !1), (r = R(r, e, 0, t, 1).times(e)), (p = !0), k(r))
              : ((e.s = r.s), (r = e)),
            r
          );
        }),
        (S.toNumber = function () {
          return +this;
        }),
        (S.toOctal = function (e, t) {
          return Q(this, 8, e, t);
        }),
        (S.toPower = S.pow =
          function (e) {
            var t,
              r,
              n,
              i,
              o,
              s,
              a = this,
              u = a.constructor,
              c = +(e = new u(e));
            if (!(a.d && e.d && a.d[0] && e.d[0])) return new u(b(+a, c));
            if ((a = new u(a)).eq(1)) return a;
            if (((n = u.precision), (o = u.rounding), e.eq(1)))
              return k(a, n, o);
            if (
              (t = w(e.e / 7)) >= e.d.length - 1 &&
              (r = c < 0 ? -c : c) <= 9007199254740991
            )
              return (
                (i = z(u, a, r, n)), e.s < 0 ? new u(1).div(i) : k(i, n, o)
              );
            if ((s = a.s) < 0) {
              if (t < e.d.length - 1) return new u(NaN);
              if (
                (0 == (1 & e.d[t]) && (s = 1),
                0 == a.e && 1 == a.d[0] && 1 == a.d.length)
              )
                return (a.s = s), a;
            }
            return (t =
              0 != (r = b(+a, c)) && isFinite(r)
                ? new u(r + "").e
                : w(c * (Math.log("0." + A(a.d)) / Math.LN10 + a.e + 1))) >
              u.maxE + 1 || t < u.minE - 1
              ? new u(t > 0 ? s / 0 : 0)
              : ((p = !1),
                (u.rounding = a.s = 1),
                (r = Math.min(12, (t + "").length)),
                (i = B(e.times(Z(a, n + r)), n)).d &&
                  j((i = k(i, n + 5, 1)).d, n, o) &&
                  ((t = n + 10),
                  +A((i = k(B(e.times(Z(a, t + r)), t), t + 5, 1)).d).slice(
                    n + 1,
                    n + 15
                  ) +
                    1 ==
                    1e14 && (i = k(i, n + 1, 0))),
                (i.s = s),
                (p = !0),
                (u.rounding = o),
                k(i, n, o));
          }),
        (S.toPrecision = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = C(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
              : (I(e, 1, 1e9),
                void 0 === t ? (t = i.rounding) : I(t, 0, 8),
                (r = C(
                  (n = k(new i(n), e, t)),
                  e <= n.e || n.e <= i.toExpNeg,
                  e
                ))),
            n.isNeg() && !n.isZero() ? "-" + r : r
          );
        }),
        (S.toSignificantDigits = S.toSD =
          function (e, t) {
            var r = this.constructor;
            return (
              void 0 === e
                ? ((e = r.precision), (t = r.rounding))
                : (I(e, 1, 1e9), void 0 === t ? (t = r.rounding) : I(t, 0, 8)),
              k(new r(this), e, t)
            );
          }),
        (S.toString = function () {
          var e = this.constructor,
            t = C(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
          return this.isNeg() && !this.isZero() ? "-" + t : t;
        }),
        (S.truncated = S.trunc =
          function () {
            return k(new this.constructor(this), this.e + 1, 1);
          }),
        (S.valueOf = S.toJSON =
          function () {
            var e = this.constructor,
              t = C(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
          }),
        a(A, "digitsToString"),
        a(I, "checkInt32"),
        a(j, "checkRoundingDigits"),
        a(T, "convertBase"),
        a(M, "cosine");
      var R = (function () {
        function e(e, t, r) {
          var n,
            i = 0,
            o = e.length;
          for (e = e.slice(); o--; )
            (n = e[o] * t + i), (e[o] = n % r | 0), (i = (n / r) | 0);
          return i && e.unshift(i), e;
        }
        function r(e, t, r, n) {
          var i, o;
          if (r != n) o = r > n ? 1 : -1;
          else
            for (i = o = 0; i < r; i++)
              if (e[i] != t[i]) {
                o = e[i] > t[i] ? 1 : -1;
                break;
              }
          return o;
        }
        function n(e, t, r, n) {
          for (var i = 0; r--; )
            (e[r] -= i),
              (i = e[r] < t[r] ? 1 : 0),
              (e[r] = i * n + e[r] - t[r]);
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return (
          a(e, "multiplyInteger"),
          a(r, "compare"),
          a(n, "subtract"),
          function (i, o, s, a, u, c) {
            var l,
              f,
              d,
              p,
              h,
              m,
              g,
              y,
              v,
              b,
              _,
              E,
              x,
              P,
              N,
              O,
              S,
              A,
              I,
              j,
              T = i.constructor,
              M = i.s == o.s ? 1 : -1,
              R = i.d,
              C = o.d;
            if (!(R && R[0] && C && C[0]))
              return new T(
                i.s && o.s && (R ? !C || R[0] != C[0] : C)
                  ? (R && 0 == R[0]) || !C
                    ? 0 * M
                    : M / 0
                  : NaN
              );
            for (
              c
                ? ((h = 1), (f = i.e - o.e))
                : ((c = 1e7), (h = 7), (f = w(i.e / h) - w(o.e / h))),
                I = C.length,
                S = R.length,
                b = (v = new T(M)).d = [],
                d = 0;
              C[d] == (R[d] || 0);
              d++
            );
            if (
              (C[d] > (R[d] || 0) && f--,
              null == s
                ? ((P = s = T.precision), (a = T.rounding))
                : (P = u ? s + (i.e - o.e) + 1 : s),
              P < 0)
            )
              b.push(1), (m = !0);
            else {
              if (((P = (P / h + 2) | 0), (d = 0), 1 == I)) {
                for (p = 0, C = C[0], P++; (d < S || p) && P--; d++)
                  (N = p * c + (R[d] || 0)),
                    (b[d] = (N / C) | 0),
                    (p = N % C | 0);
                m = p || d < S;
              } else {
                for (
                  (p = (c / (C[0] + 1)) | 0) > 1 &&
                    ((C = e(C, p, c)),
                    (R = e(R, p, c)),
                    (I = C.length),
                    (S = R.length)),
                    O = I,
                    E = (_ = R.slice(0, I)).length;
                  E < I;

                )
                  _[E++] = 0;
                (j = C.slice()).unshift(0), (A = C[0]), C[1] >= c / 2 && ++A;
                do {
                  (p = 0),
                    (l = r(C, _, I, E)) < 0
                      ? ((x = _[0]),
                        I != E && (x = x * c + (_[1] || 0)),
                        (p = (x / A) | 0) > 1
                          ? (p >= c && (p = c - 1),
                            (y = (g = e(C, p, c)).length),
                            1 == (l = r(g, _, y, (E = _.length))) &&
                              (p--, n(g, I < y ? j : C, y, c)))
                          : (0 == p && (l = p = 1), (g = C.slice())),
                        (y = g.length) < E && g.unshift(0),
                        n(_, g, E, c),
                        -1 == l &&
                          (l = r(C, _, I, (E = _.length))) < 1 &&
                          (p++, n(_, I < E ? j : C, E, c)),
                        (E = _.length))
                      : 0 === l && (p++, (_ = [0])),
                    (b[d++] = p),
                    l && _[0] ? (_[E++] = R[O] || 0) : ((_ = [R[O]]), (E = 1));
                } while ((O++ < S || void 0 !== _[0]) && P--);
                m = void 0 !== _[0];
              }
              b[0] || b.shift();
            }
            if (1 == h) (v.e = f), (t = m);
            else {
              for (d = 1, p = b[0]; p >= 10; p /= 10) d++;
              (v.e = d + f * h - 1), k(v, u ? s + v.e + 1 : s, a, m);
            }
            return v;
          }
        );
      })();
      function k(e, t, r, n) {
        var i,
          o,
          s,
          a,
          u,
          c,
          l,
          f,
          d,
          h = e.constructor;
        e: if (null != t) {
          if (!(f = e.d)) return e;
          for (i = 1, a = f[0]; a >= 10; a /= 10) i++;
          if ((o = t - i) < 0)
            (o += 7),
              (s = t),
              (u = ((l = f[(d = 0)]) / b(10, i - s - 1)) % 10 | 0);
          else if ((d = Math.ceil((o + 1) / 7)) >= (a = f.length)) {
            if (!n) break e;
            for (; a++ <= d; ) f.push(0);
            (l = u = 0), (i = 1), (s = (o %= 7) - 7 + 1);
          } else {
            for (i = 1, l = a = f[d]; a >= 10; a /= 10) i++;
            u =
              (s = (o %= 7) - 7 + i) < 0 ? 0 : (l / b(10, i - s - 1)) % 10 | 0;
          }
          if (
            ((n =
              n ||
              t < 0 ||
              void 0 !== f[d + 1] ||
              (s < 0 ? l : l % b(10, i - s - 1))),
            (c =
              r < 4
                ? (u || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                : u > 5 ||
                  (5 == u &&
                    (4 == r ||
                      n ||
                      (6 == r &&
                        (o > 0 ? (s > 0 ? l / b(10, i - s) : 0) : f[d - 1]) %
                          10 &
                          1) ||
                      r == (e.s < 0 ? 8 : 7)))),
            t < 1 || !f[0])
          )
            return (
              (f.length = 0),
              c
                ? ((t -= e.e + 1),
                  (f[0] = b(10, (7 - (t % 7)) % 7)),
                  (e.e = -t || 0))
                : (f[0] = e.e = 0),
              e
            );
          if (
            (0 == o
              ? ((f.length = d), (a = 1), d--)
              : ((f.length = d + 1),
                (a = b(10, 7 - o)),
                (f[d] = s > 0 ? ((l / b(10, i - s)) % b(10, s) | 0) * a : 0)),
            c)
          )
            for (;;) {
              if (0 == d) {
                for (o = 1, s = f[0]; s >= 10; s /= 10) o++;
                for (s = f[0] += a, a = 1; s >= 10; s /= 10) a++;
                o != a && (e.e++, 1e7 == f[0] && (f[0] = 1));
                break;
              }
              if (((f[d] += a), 1e7 != f[d])) break;
              (f[d--] = 0), (a = 1);
            }
          for (o = f.length; 0 === f[--o]; ) f.pop();
        }
        return (
          p &&
            (e.e > h.maxE
              ? ((e.d = null), (e.e = NaN))
              : e.e < h.minE && ((e.e = 0), (e.d = [0]))),
          e
        );
      }
      function C(e, t, r) {
        if (!e.isFinite()) return H(e);
        var n,
          i = e.e,
          o = A(e.d),
          s = o.length;
        return (
          t
            ? (r && (n = r - s) > 0
                ? (o = o.charAt(0) + "." + o.slice(1) + q(n))
                : s > 1 && (o = o.charAt(0) + "." + o.slice(1)),
              (o = o + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
            ? ((o = "0." + q(-i - 1) + o), r && (n = r - s) > 0 && (o += q(n)))
            : i >= s
            ? ((o += q(i + 1 - s)),
              r && (n = r - i - 1) > 0 && (o = o + "." + q(n)))
            : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)),
              r && (n = r - s) > 0 && (i + 1 === s && (o += "."), (o += q(n)))),
          o
        );
      }
      function F(e, t) {
        var r = e[0];
        for (t *= 7; r >= 10; r /= 10) t++;
        return t;
      }
      function D(e, t, r) {
        if (t > N) throw ((p = !0), r && (e.precision = r), Error(g));
        return k(new e(l), t, 1, !0);
      }
      function L(e, t, r) {
        if (t > O) throw Error(g);
        return k(new e(f), t, r, !0);
      }
      function U(e) {
        var t = e.length - 1,
          r = 7 * t + 1;
        if ((t = e[t])) {
          for (; t % 10 == 0; t /= 10) r--;
          for (t = e[0]; t >= 10; t /= 10) r++;
        }
        return r;
      }
      function q(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function z(e, t, r, n) {
        var i,
          o = new e(1),
          s = Math.ceil(n / 7 + 4);
        for (p = !1; ; ) {
          if (
            (r % 2 && ee((o = o.times(t)).d, s) && (i = !0),
            0 === (r = w(r / 2)))
          ) {
            (r = o.d.length - 1), i && 0 === o.d[r] && ++o.d[r];
            break;
          }
          ee((t = t.times(t)).d, s);
        }
        return (p = !0), o;
      }
      function V(e) {
        return 1 & e.d[e.d.length - 1];
      }
      function $(e, t, r) {
        for (var n, i = new e(t[0]), o = 0; ++o < t.length; ) {
          if (!(n = new e(t[o])).s) {
            i = n;
            break;
          }
          i[r](n) && (i = n);
        }
        return i;
      }
      function B(e, t) {
        var r,
          n,
          i,
          o,
          s,
          a,
          u,
          c = 0,
          l = 0,
          f = 0,
          d = e.constructor,
          h = d.rounding,
          m = d.precision;
        if (!e.d || !e.d[0] || e.e > 17)
          return new d(
            e.d
              ? e.d[0]
                ? e.s < 0
                  ? 0
                  : 1 / 0
                : 1
              : e.s
              ? e.s < 0
                ? 0
                : e
              : NaN
          );
        for (
          null == t ? ((p = !1), (u = m)) : (u = t), a = new d(0.03125);
          e.e > -2;

        )
          (e = e.times(a)), (f += 5);
        for (
          u += n = ((Math.log(b(2, f)) / Math.LN10) * 2 + 5) | 0,
            r = o = s = new d(1),
            d.precision = u;
          ;

        ) {
          if (
            ((o = k(o.times(e), u, 1)),
            (r = r.times(++l)),
            A((a = s.plus(R(o, r, u, 1))).d).slice(0, u) === A(s.d).slice(0, u))
          ) {
            for (i = f; i--; ) s = k(s.times(s), u, 1);
            if (null != t) return (d.precision = m), s;
            if (!(c < 3 && j(s.d, u - n, h, c)))
              return k(s, (d.precision = m), h, (p = !0));
            (d.precision = u += 10), (r = o = a = new d(1)), (l = 0), c++;
          }
          s = a;
        }
      }
      function Z(e, t) {
        var r,
          n,
          i,
          o,
          s,
          a,
          u,
          c,
          l,
          f,
          d,
          h = 1,
          m = e,
          g = m.d,
          y = m.constructor,
          v = y.rounding,
          w = y.precision;
        if (m.s < 0 || !g || !g[0] || (!m.e && 1 == g[0] && 1 == g.length))
          return new y(g && !g[0] ? -1 / 0 : 1 != m.s ? NaN : g ? 0 : m);
        if (
          (null == t ? ((p = !1), (l = w)) : (l = t),
          (y.precision = l += 10),
          (n = (r = A(g)).charAt(0)),
          !(15e14 > Math.abs((o = m.e))))
        )
          return (
            (c = D(y, l + 2, w).times(o + "")),
            (m = Z(new y(n + "." + r.slice(1)), l - 10).plus(c)),
            (y.precision = w),
            null == t ? k(m, w, v, (p = !0)) : m
          );
        for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
          (n = (r = A((m = m.times(e)).d)).charAt(0)), h++;
        for (
          o = m.e,
            n > 1
              ? ((m = new y("0." + r)), o++)
              : (m = new y(n + "." + r.slice(1))),
            f = m,
            u = s = m = R(m.minus(1), m.plus(1), l, 1),
            d = k(m.times(m), l, 1),
            i = 3;
          ;

        ) {
          if (
            ((s = k(s.times(d), l, 1)),
            A((c = u.plus(R(s, new y(i), l, 1))).d).slice(0, l) ===
              A(u.d).slice(0, l))
          ) {
            if (
              ((u = u.times(2)),
              0 !== o && (u = u.plus(D(y, l + 2, w).times(o + ""))),
              (u = R(u, new y(h), l, 1)),
              null != t)
            )
              return (y.precision = w), u;
            if (!j(u.d, l - 10, v, a))
              return k(u, (y.precision = w), v, (p = !0));
            (y.precision = l += 10),
              (c = s = m = R(f.minus(1), f.plus(1), l, 1)),
              (d = k(m.times(m), l, 1)),
              (i = a = 1);
          }
          (u = c), (i += 2);
        }
      }
      function H(e) {
        return String((e.s * e.s) / 0);
      }
      function G(e, t) {
        var r, n, i;
        for (
          (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (n = t.search(/e/i)) > 0
              ? (r < 0 && (r = n),
                (r += +t.slice(n + 1)),
                (t = t.substring(0, n)))
              : r < 0 && (r = t.length),
            n = 0;
          48 === t.charCodeAt(n);
          n++
        );
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if ((t = t.slice(n, i))) {
          if (
            ((i -= n),
            (e.e = r = r - n - 1),
            (e.d = []),
            (n = (r + 1) % 7),
            r < 0 && (n += 7),
            n < i)
          ) {
            for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i; )
              e.d.push(+t.slice(n, (n += 7)));
            n = 7 - (t = t.slice(n)).length;
          } else n -= i;
          for (; n--; ) t += "0";
          e.d.push(+t),
            p &&
              (e.e > e.constructor.maxE
                ? ((e.d = null), (e.e = NaN))
                : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
        } else (e.e = 0), (e.d = [0]);
        return e;
      }
      function J(e, t) {
        var r, n, i, o, s, a, u, c, l;
        if (t.indexOf("_") > -1) {
          if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), P.test(t)))
            return G(e, t);
        } else if ("Infinity" === t || "NaN" === t)
          return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
        if (E.test(t)) (r = 16), (t = t.toLowerCase());
        else if (_.test(t)) r = 2;
        else {
          if (!x.test(t)) throw Error(m + t);
          r = 8;
        }
        for (
          (o = t.search(/p/i)) > 0
            ? ((u = +t.slice(o + 1)), (t = t.substring(2, o)))
            : (t = t.slice(2)),
            s = (o = t.indexOf(".")) >= 0,
            n = e.constructor,
            s &&
              ((o = (a = (t = t.replace(".", "")).length) - o),
              (i = z(n, new n(r), o, 2 * o))),
            o = l = (c = T(t, r, 1e7)).length - 1;
          0 === c[o];
          --o
        )
          c.pop();
        return o < 0
          ? new n(0 * e.s)
          : ((e.e = F(c, l)),
            (e.d = c),
            (p = !1),
            s && (e = R(e, i, 4 * a)),
            u && (e = e.times(54 > Math.abs(u) ? b(2, u) : Ve.pow(2, u))),
            (p = !0),
            e);
      }
      function K(e, t) {
        var r,
          n = t.d.length;
        if (n < 3) return t.isZero() ? t : Y(e, 2, t, t);
        (r = (r = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | r),
          (t = Y(e, 2, (t = t.times(1 / W(5, r))), t));
        for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
          (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))));
        return t;
      }
      function Y(e, t, r, n, i) {
        var o,
          s,
          a,
          u,
          c = e.precision,
          l = Math.ceil(c / 7);
        for (p = !1, u = r.times(r), a = new e(n); ; ) {
          if (
            ((s = R(a.times(u), new e(t++ * t++), c, 1)),
            (a = i ? n.plus(s) : n.minus(s)),
            (n = R(s.times(u), new e(t++ * t++), c, 1)),
            void 0 !== (s = a.plus(n)).d[l])
          ) {
            for (o = l; s.d[o] === a.d[o] && o--; );
            if (-1 == o) break;
          }
          (o = a), (a = n), (n = s), (s = o);
        }
        return (p = !0), (s.d.length = l + 1), s;
      }
      function W(e, t) {
        for (var r = e; --t; ) r *= e;
        return r;
      }
      function X(e, t) {
        var n,
          i = t.s < 0,
          o = L(e, e.precision, 1),
          s = o.times(0.5);
        if ((t = t.abs()).lte(s)) return (r = i ? 4 : 1), t;
        if ((n = t.divToInt(o)).isZero()) r = i ? 3 : 2;
        else {
          if ((t = t.minus(n.times(o))).lte(s))
            return (r = V(n) ? (i ? 2 : 3) : i ? 4 : 1), t;
          r = V(n) ? (i ? 1 : 4) : i ? 3 : 2;
        }
        return t.minus(o).abs();
      }
      function Q(e, r, n, i) {
        var o,
          s,
          a,
          u,
          l,
          f,
          d,
          p,
          h,
          m = e.constructor,
          g = void 0 !== n;
        if (
          (g
            ? (I(n, 1, 1e9), void 0 === i ? (i = m.rounding) : I(i, 0, 8))
            : ((n = m.precision), (i = m.rounding)),
          e.isFinite())
        ) {
          for (
            g
              ? ((o = 2), 16 == r ? (n = 4 * n - 3) : 8 == r && (n = 3 * n - 2))
              : (o = r),
              (a = (d = C(e)).indexOf(".")) >= 0 &&
                ((d = d.replace(".", "")),
                ((h = new m(1)).e = d.length - a),
                (h.d = T(C(h), 10, o)),
                (h.e = h.d.length)),
              s = l = (p = T(d, 10, o)).length;
            0 == p[--l];

          )
            p.pop();
          if (p[0]) {
            if (
              (a < 0
                ? s--
                : (((e = new m(e)).d = p),
                  (e.e = s),
                  (p = (e = R(e, h, n, i, 0, o)).d),
                  (s = e.e),
                  (f = t)),
              (a = p[n]),
              (u = o / 2),
              (f = f || void 0 !== p[n + 1]),
              (f =
                i < 4
                  ? (void 0 !== a || f) && (0 === i || i === (e.s < 0 ? 3 : 2))
                  : a > u ||
                    (a === u &&
                      (4 === i ||
                        f ||
                        (6 === i && 1 & p[n - 1]) ||
                        i === (e.s < 0 ? 8 : 7)))),
              (p.length = n),
              f)
            )
              for (; ++p[--n] > o - 1; ) (p[n] = 0), n || (++s, p.unshift(1));
            for (l = p.length; !p[l - 1]; --l);
            for (a = 0, d = ""; a < l; a++) d += c.charAt(p[a]);
            if (g) {
              if (l > 1)
                if (16 == r || 8 == r) {
                  for (a = 16 == r ? 4 : 3, --l; l % a; l++) d += "0";
                  for (l = (p = T(d, o, r)).length; !p[l - 1]; --l);
                  for (a = 1, d = "1."; a < l; a++) d += c.charAt(p[a]);
                } else d = d.charAt(0) + "." + d.slice(1);
              d = d + (s < 0 ? "p" : "p+") + s;
            } else if (s < 0) {
              for (; ++s; ) d = "0" + d;
              d = "0." + d;
            } else if (++s > l) for (s -= l; s--; ) d += "0";
            else s < l && (d = d.slice(0, s) + "." + d.slice(s));
          } else d = g ? "0p+0" : "0";
          d = (16 == r ? "0x" : 2 == r ? "0b" : 8 == r ? "0o" : "") + d;
        } else d = H(e);
        return e.s < 0 ? "-" + d : d;
      }
      function ee(e, t) {
        if (e.length > t) return (e.length = t), !0;
      }
      function te(e) {
        return new this(e).abs();
      }
      function re(e) {
        return new this(e).acos();
      }
      function ne(e) {
        return new this(e).acosh();
      }
      function ie(e, t) {
        return new this(e).plus(t);
      }
      function oe(e) {
        return new this(e).asin();
      }
      function se(e) {
        return new this(e).asinh();
      }
      function ae(e) {
        return new this(e).atan();
      }
      function ue(e) {
        return new this(e).atanh();
      }
      function ce(e, t) {
        (e = new this(e)), (t = new this(t));
        var r,
          n = this.precision,
          i = this.rounding,
          o = n + 4;
        return (
          e.s && t.s
            ? e.d || t.d
              ? !t.d || e.isZero()
                ? ((r = t.s < 0 ? L(this, n, i) : new this(0)).s = e.s)
                : !e.d || t.isZero()
                ? ((r = L(this, o, 1).times(0.5)).s = e.s)
                : t.s < 0
                ? ((this.precision = o),
                  (this.rounding = 1),
                  (r = this.atan(R(e, t, o, 1))),
                  (t = L(this, o, 1)),
                  (this.precision = n),
                  (this.rounding = i),
                  (r = e.s < 0 ? r.minus(t) : r.plus(t)))
                : (r = this.atan(R(e, t, o, 1)))
              : ((r = L(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (r = new this(NaN)),
          r
        );
      }
      function le(e) {
        return new this(e).cbrt();
      }
      function fe(e) {
        return k((e = new this(e)), e.e + 1, 2);
      }
      function de(e, t, r) {
        return new this(e).clamp(t, r);
      }
      function pe(e) {
        if (!e || "object" != typeof e) throw Error(h + "Object expected");
        var t,
          r,
          n,
          i = !0 === e.defaults,
          o = [
            "precision",
            1,
            1e9,
            "rounding",
            0,
            8,
            "toExpNeg",
            -9e15,
            0,
            "toExpPos",
            0,
            9e15,
            "maxE",
            0,
            9e15,
            "minE",
            -9e15,
            0,
            "modulo",
            0,
            9,
          ];
        for (t = 0; t < o.length; t += 3)
          if (((r = o[t]), i && (this[r] = d[r]), void 0 !== (n = e[r]))) {
            if (!(w(n) === n && n >= o[t + 1] && n <= o[t + 2]))
              throw Error(m + r + ": " + n);
            this[r] = n;
          }
        if (((r = "crypto"), i && (this[r] = d[r]), void 0 !== (n = e[r]))) {
          if (!0 !== n && !1 !== n && 0 !== n && 1 !== n)
            throw Error(m + r + ": " + n);
          if (n) {
            if (
              "undefined" == typeof crypto ||
              !crypto ||
              (!crypto.getRandomValues && !crypto.randomBytes)
            )
              throw Error(y);
            this[r] = !0;
          } else this[r] = !1;
        }
        return this;
      }
      function he(e) {
        return new this(e).cos();
      }
      function me(e) {
        return new this(e).cosh();
      }
      function ge(e) {
        var t, r, n;
        function i(e) {
          var t,
            r,
            n,
            o = this;
          if (!(o instanceof i)) return new i(e);
          if (((o.constructor = i), _e(e)))
            return (
              (o.s = e.s),
              void (p
                ? !e.d || e.e > i.maxE
                  ? ((o.e = NaN), (o.d = null))
                  : e.e < i.minE
                  ? ((o.e = 0), (o.d = [0]))
                  : ((o.e = e.e), (o.d = e.d.slice()))
                : ((o.e = e.e), (o.d = e.d ? e.d.slice() : e.d)))
            );
          if ("number" == (n = typeof e)) {
            if (0 === e)
              return (o.s = 1 / e < 0 ? -1 : 1), (o.e = 0), void (o.d = [0]);
            if (
              (e < 0 ? ((e = -e), (o.s = -1)) : (o.s = 1), e === ~~e && e < 1e7)
            ) {
              for (t = 0, r = e; r >= 10; r /= 10) t++;
              return void (p
                ? t > i.maxE
                  ? ((o.e = NaN), (o.d = null))
                  : t < i.minE
                  ? ((o.e = 0), (o.d = [0]))
                  : ((o.e = t), (o.d = [e]))
                : ((o.e = t), (o.d = [e])));
            }
            return 0 * e != 0
              ? (e || (o.s = NaN), (o.e = NaN), void (o.d = null))
              : G(o, e.toString());
          }
          if ("string" !== n) throw Error(m + e);
          return (
            45 === (r = e.charCodeAt(0))
              ? ((e = e.slice(1)), (o.s = -1))
              : (43 === r && (e = e.slice(1)), (o.s = 1)),
            P.test(e) ? G(o, e) : J(o, e)
          );
        }
        if (
          (a(i, "Decimal"),
          (i.prototype = S),
          (i.ROUND_UP = 0),
          (i.ROUND_DOWN = 1),
          (i.ROUND_CEIL = 2),
          (i.ROUND_FLOOR = 3),
          (i.ROUND_HALF_UP = 4),
          (i.ROUND_HALF_DOWN = 5),
          (i.ROUND_HALF_EVEN = 6),
          (i.ROUND_HALF_CEIL = 7),
          (i.ROUND_HALF_FLOOR = 8),
          (i.EUCLID = 9),
          (i.config = i.set = pe),
          (i.clone = ge),
          (i.isDecimal = _e),
          (i.abs = te),
          (i.acos = re),
          (i.acosh = ne),
          (i.add = ie),
          (i.asin = oe),
          (i.asinh = se),
          (i.atan = ae),
          (i.atanh = ue),
          (i.atan2 = ce),
          (i.cbrt = le),
          (i.ceil = fe),
          (i.clamp = de),
          (i.cos = he),
          (i.cosh = me),
          (i.div = ye),
          (i.exp = ve),
          (i.floor = we),
          (i.hypot = be),
          (i.ln = Ee),
          (i.log = xe),
          (i.log10 = Ne),
          (i.log2 = Pe),
          (i.max = Oe),
          (i.min = Se),
          (i.mod = Ae),
          (i.mul = Ie),
          (i.pow = je),
          (i.random = Te),
          (i.round = Me),
          (i.sign = Re),
          (i.sin = ke),
          (i.sinh = Ce),
          (i.sqrt = Fe),
          (i.sub = De),
          (i.sum = Le),
          (i.tan = Ue),
          (i.tanh = qe),
          (i.trunc = ze),
          void 0 === e && (e = {}),
          e && !0 !== e.defaults)
        )
          for (
            t = 0,
              n = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "maxE",
                "minE",
                "modulo",
                "crypto",
              ];
            t < n.length;

          )
            e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
        return i.config(e), i;
      }
      function ye(e, t) {
        return new this(e).div(t);
      }
      function ve(e) {
        return new this(e).exp();
      }
      function we(e) {
        return k((e = new this(e)), e.e + 1, 3);
      }
      function be() {
        var e,
          t,
          r = new this(0);
        for (e = 0, p = !1; e < arguments.length; )
          if ((t = new this(arguments[e++])).d) r.d && (r = r.plus(t.times(t)));
          else {
            if (t.s) return (p = !0), new this(1 / 0);
            r = t;
          }
        return (p = !0), r.sqrt();
      }
      function _e(e) {
        return e instanceof Ve || (e && e.toStringTag === v) || !1;
      }
      function Ee(e) {
        return new this(e).ln();
      }
      function xe(e, t) {
        return new this(e).log(t);
      }
      function Pe(e) {
        return new this(e).log(2);
      }
      function Ne(e) {
        return new this(e).log(10);
      }
      function Oe() {
        return $(this, arguments, "lt");
      }
      function Se() {
        return $(this, arguments, "gt");
      }
      function Ae(e, t) {
        return new this(e).mod(t);
      }
      function Ie(e, t) {
        return new this(e).mul(t);
      }
      function je(e, t) {
        return new this(e).pow(t);
      }
      function Te(e) {
        var t,
          r,
          n,
          i,
          o = 0,
          s = new this(1),
          a = [];
        if (
          (void 0 === e ? (e = this.precision) : I(e, 1, 1e9),
          (n = Math.ceil(e / 7)),
          this.crypto)
        )
          if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
              (i = t[o]) >= 429e7
                ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (a[o++] = i % 1e7);
          else {
            if (!crypto.randomBytes) throw Error(y);
            for (t = crypto.randomBytes((n *= 4)); o < n; )
              (i =
                t[o] +
                (t[o + 1] << 8) +
                (t[o + 2] << 16) +
                ((127 & t[o + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(t, o)
                : (a.push(i % 1e7), (o += 4));
            o = n / 4;
          }
        else for (; o < n; ) a[o++] = (1e7 * Math.random()) | 0;
        for (
          e %= 7,
            (n = a[--o]) &&
              e &&
              ((i = b(10, 7 - e)), (a[o] = ((n / i) | 0) * i));
          0 === a[o];
          o--
        )
          a.pop();
        if (o < 0) (r = 0), (a = [0]);
        else {
          for (r = -1; 0 === a[0]; r -= 7) a.shift();
          for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
          n < 7 && (r -= 7 - n);
        }
        return (s.e = r), (s.d = a), s;
      }
      function Me(e) {
        return k((e = new this(e)), e.e + 1, this.rounding);
      }
      function Re(e) {
        return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
      }
      function ke(e) {
        return new this(e).sin();
      }
      function Ce(e) {
        return new this(e).sinh();
      }
      function Fe(e) {
        return new this(e).sqrt();
      }
      function De(e, t) {
        return new this(e).sub(t);
      }
      function Le() {
        var e = 0,
          t = arguments,
          r = new this(t[e]);
        for (p = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
        return (p = !0), k(r, this.precision, this.rounding);
      }
      function Ue(e) {
        return new this(e).tan();
      }
      function qe(e) {
        return new this(e).tanh();
      }
      function ze(e) {
        return k((e = new this(e)), e.e + 1, 1);
      }
      a(k, "finalise"),
        a(C, "finiteToString"),
        a(F, "getBase10Exponent"),
        a(D, "getLn10"),
        a(L, "getPi"),
        a(U, "getPrecision"),
        a(q, "getZeroString"),
        a(z, "intPow"),
        a(V, "isOdd"),
        a($, "maxOrMin"),
        a(B, "naturalExponential"),
        a(Z, "naturalLogarithm"),
        a(H, "nonFiniteToString"),
        a(G, "parseDecimal"),
        a(J, "parseOther"),
        a(K, "sine"),
        a(Y, "taylorSeries"),
        a(W, "tinyPow"),
        a(X, "toLessThanHalfPi"),
        a(Q, "toStringBinary"),
        a(ee, "truncate"),
        a(te, "abs"),
        a(re, "acos"),
        a(ne, "acosh"),
        a(ie, "add"),
        a(oe, "asin"),
        a(se, "asinh"),
        a(ae, "atan"),
        a(ue, "atanh"),
        a(ce, "atan2"),
        a(le, "cbrt"),
        a(fe, "ceil"),
        a(de, "clamp"),
        a(pe, "config"),
        a(he, "cos"),
        a(me, "cosh"),
        a(ge, "clone"),
        a(ye, "div"),
        a(ve, "exp"),
        a(we, "floor"),
        a(be, "hypot"),
        a(_e, "isDecimalInstance"),
        a(Ee, "ln"),
        a(xe, "log"),
        a(Pe, "log2"),
        a(Ne, "log10"),
        a(Oe, "max"),
        a(Se, "min"),
        a(Ae, "mod"),
        a(Ie, "mul"),
        a(je, "pow"),
        a(Te, "random"),
        a(Me, "round"),
        a(Re, "sign"),
        a(ke, "sin"),
        a(Ce, "sinh"),
        a(Fe, "sqrt"),
        a(De, "sub"),
        a(Le, "sum"),
        a(Ue, "tan"),
        a(qe, "tanh"),
        a(ze, "trunc"),
        (S[Symbol.for("nodejs.util.inspect.custom")] = S.toString),
        (S[Symbol.toStringTag] = "Decimal");
      var Ve = (S.constructor = ge(d));
      (l = new Ve(l)), (f = new Ve(f));
      var $e = Ve;
    },
    8679: function (e, t, r) {
      "use strict";
      var n = r(59864),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      function u(e) {
        return n.isMemo(e) ? s : a[e.$$typeof] || i;
      }
      (a[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (a[n.Memo] = s);
      var c = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (h) {
            var i = p(r);
            i && i !== h && e(t, i, n);
          }
          var s = l(r);
          f && (s = s.concat(f(r)));
          for (var a = u(t), m = u(r), g = 0; g < s.length; ++g) {
            var y = s[g];
            if (!(o[y] || (n && n[y]) || (m && m[y]) || (a && a[y]))) {
              var v = d(r, y);
              try {
                c(t, y, v);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    },
    8396: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
        i =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function s(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(s, a);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              i,
              o,
              s = {
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
                  if (r) throw TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i =
                            2 & o[0]
                              ? n.return
                              : o[0]
                              ? n.throw || ((i = n.return) && i.call(n), 0)
                              : n.next) &&
                          !(i = i.call(n, o[1])).done)
                      )
                        return i;
                      switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, { value: o[1], done: !1 };
                        case 5:
                          s.label++, (n = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = t.call(e, s);
                    } catch (e) {
                      (o = [6, e]), (n = 0);
                    } finally {
                      r = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          },
        s =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                0 > t.indexOf(n) &&
                (r[n] = e[n]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                0 > t.indexOf(n[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                  (r[n[i]] = e[n[i]]);
            }
            return r;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.withSuperJSONPage =
          t.deserializeProps =
          t.withSuperJSONInitProps =
          t.withSuperJSONProps =
            void 0);
      var a = r(8679),
        u = r(67294),
        c = r(58118);
      function l(e) {
        var t = e._superjson,
          r = s(e, ["_superjson"]);
        return c.default.deserialize({ json: r, meta: t });
      }
      (t.withSuperJSONProps = function (e, t) {
        return (
          void 0 === t && (t = []),
          function () {
            for (var r = [], s = 0; s < arguments.length; s++)
              r[s] = arguments[s];
            return i(this, void 0, void 0, function () {
              var i, s, a, u, l, f;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [4, e.apply(void 0, r)];
                  case 1:
                    return "props" in (i = o.sent()) && i.props
                      ? ((s = t.map(function (e) {
                          var t = i.props[e];
                          return delete i.props[e], t;
                        })),
                        (u = (a = c.default.serialize(i.props)).json),
                        (l = a.meta),
                        (f = u),
                        l && (f._superjson = l),
                        t.forEach(function (e, t) {
                          var r = s[t];
                          void 0 !== r && (f[e] = r);
                        }),
                        [2, n(n({}, i), { props: f })])
                      : [2, i];
                }
              });
            });
          }
        );
      }),
        (t.withSuperJSONInitProps = function (e, t) {
          return (
            void 0 === t && (t = []),
            function () {
              for (var r = [], s = 0; s < arguments.length; s++)
                r[s] = arguments[s];
              return i(this, void 0, void 0, function () {
                var i, s, a, u, l, f;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [4, e.apply(void 0, r)];
                    case 1:
                      return (
                        (i = o.sent()),
                        (s = t.map(function (e) {
                          var t = i[e];
                          return delete i[e], t;
                        })),
                        (u = (a = c.default.serialize(i)).json),
                        (l = a.meta),
                        (f = u),
                        l && (f._superjson = l),
                        t.forEach(function (e, t) {
                          var r = s[t];
                          void 0 !== r && (f[e] = r);
                        }),
                        [2, n(n({}, i), f)]
                      );
                  }
                });
              });
            }
          );
        }),
        (t.deserializeProps = l),
        (t.withSuperJSONPage = function (e) {
          function t(t) {
            return u.createElement(e, n({}, l(t)));
          }
          return a(t, e), t;
        });
    },
    10227: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, n, i) {
          var o = r(72554).normalizeLocalePath,
            s = r(84643).detectDomainLocale,
            a = t || o(e, n).detectedLocale,
            u = s(i, void 0, a);
          if (u) {
            var c = "http".concat(u.http ? "" : "s", "://"),
              l = a === u.defaultLocale ? "" : "/".concat(a);
            return "".concat(c).concat(u.domain).concat("").concat(l).concat(e);
          }
          return !1;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    31551: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(94941).Z;
      r(45753).default,
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(92648).Z,
        o = r(17273).Z,
        s = i(r(67294)),
        a = r(41003),
        u = r(67795),
        c = r(54465),
        l = r(72692),
        f = r(48245),
        d = r(69246),
        p = r(10227),
        h = r(33468),
        m = new Set();
      function g(e, t, r, n) {
        if (a.isLocalURL(t)) {
          if (!n.bypassPrefetchedCheck) {
            var i =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (m.has(i)) return;
            m.add(i);
          }
          Promise.resolve(e.prefetch(t, r, n)).catch(function (e) {});
        }
      }
      function y(e) {
        return "string" == typeof e ? e : u.formatUrl(e);
      }
      var v = s.default.forwardRef(function (e, t) {
        var r,
          i,
          u = e.href,
          m = e.as,
          v = e.children,
          w = e.prefetch,
          b = e.passHref,
          _ = e.replace,
          E = e.shallow,
          x = e.scroll,
          P = e.locale,
          N = e.onClick,
          O = e.onMouseEnter,
          S = e.onTouchStart,
          A = e.legacyBehavior,
          I = void 0 === A ? !0 !== Boolean(!0) : A,
          j = o(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (r = v),
          I &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = s.default.createElement("a", null, r));
        var T = !1 !== w,
          M = s.default.useContext(l.RouterContext),
          R = s.default.useContext(f.AppRouterContext),
          k = null != M ? M : R,
          C = !M,
          F = s.default.useMemo(
            function () {
              if (!M) {
                var e = y(u);
                return { href: e, as: m ? y(m) : e };
              }
              var t = n(a.resolveHref(M, u, !0), 2),
                r = t[0],
                i = t[1];
              return { href: r, as: m ? a.resolveHref(M, m) : i || r };
            },
            [M, u, m]
          ),
          D = F.href,
          L = F.as,
          U = s.default.useRef(D),
          q = s.default.useRef(L);
        I && (i = s.default.Children.only(r));
        var z = I ? i && "object" == typeof i && i.ref : t,
          V = n(d.useIntersection({ rootMargin: "200px" }), 3),
          $ = V[0],
          B = V[1],
          Z = V[2],
          H = s.default.useCallback(
            function (e) {
              (q.current !== L || U.current !== D) &&
                (Z(), (q.current = L), (U.current = D)),
                $(e),
                z &&
                  ("function" == typeof z
                    ? z(e)
                    : "object" == typeof z && (z.current = e));
            },
            [L, z, D, Z, $]
          );
        s.default.useEffect(
          function () {
            k && B && T && g(k, D, L, { locale: P });
          },
          [L, D, B, P, T, null == M ? void 0 : M.locale, k]
        );
        var G = {
          ref: H,
          onClick: function (e) {
            I || "function" != typeof N || N(e),
              I &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(e),
              k &&
                !e.defaultPrevented &&
                (function (e, t, r, n, i, o, u, c, l, f) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    ((!(p = (d = e).currentTarget.target) || "_self" === p) &&
                      !d.metaKey &&
                      !d.ctrlKey &&
                      !d.shiftKey &&
                      !d.altKey &&
                      (!d.nativeEvent || 2 !== d.nativeEvent.which) &&
                      a.isLocalURL(r))
                  ) {
                    e.preventDefault();
                    var d,
                      p,
                      h = function () {
                        "beforePopState" in t
                          ? t[i ? "replace" : "push"](r, n, {
                              shallow: o,
                              locale: c,
                              scroll: u,
                            })
                          : t[i ? "replace" : "push"](n || r, {
                              forceOptimisticNavigation: !f,
                            });
                      };
                    l ? s.default.startTransition(h) : h();
                  }
                })(e, k, D, L, _, E, x, P, C, T);
          },
          onMouseEnter: function (e) {
            I || "function" != typeof O || O(e),
              I &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              k &&
                (T || !C) &&
                g(k, D, L, {
                  locale: P,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart: function (e) {
            I || "function" != typeof S || S(e),
              I &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              k &&
                (T || !C) &&
                g(k, D, L, {
                  locale: P,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if (!I || b || ("a" === i.type && !("href" in i.props))) {
          var J = void 0 !== P ? P : null == M ? void 0 : M.locale,
            K =
              (null == M ? void 0 : M.isLocaleDomain) &&
              p.getDomainLocale(
                L,
                J,
                null == M ? void 0 : M.locales,
                null == M ? void 0 : M.domainLocales
              );
          G.href =
            K ||
            h.addBasePath(
              c.addLocale(L, J, null == M ? void 0 : M.defaultLocale)
            );
        }
        return I
          ? s.default.cloneElement(i, G)
          : s.default.createElement("a", Object.assign({}, j, G), r);
      });
      (t.default = v),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    72554: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizeLocalePath = void 0),
        (t.normalizeLocalePath = function (e, t) {
          return r(24769).normalizeLocalePath(e, t);
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    69246: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(94941).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            r = e.rootMargin,
            c = e.disabled || !s,
            l = n(i.useState(!1), 2),
            f = l[0],
            d = l[1],
            p = n(i.useState(null), 2),
            h = p[0],
            m = p[1];
          return (
            i.useEffect(
              function () {
                var e, n, i, l;
                if (s) {
                  if (!c && !f && h && h.tagName)
                    return (
                      (n = (e = (function (e) {
                        var t,
                          r = {
                            root: e.root || null,
                            margin: e.rootMargin || "",
                          },
                          n = u.find(function (e) {
                            return e.root === r.root && e.margin === r.margin;
                          });
                        if (n && (t = a.get(n))) return t;
                        var i = new Map();
                        return (
                          (t = {
                            id: r,
                            observer: new IntersectionObserver(function (e) {
                              e.forEach(function (e) {
                                var t = i.get(e.target),
                                  r =
                                    e.isIntersecting || e.intersectionRatio > 0;
                                t && r && t(r);
                              });
                            }, e),
                            elements: i,
                          }),
                          u.push(r),
                          a.set(r, t),
                          t
                        );
                      })({
                        root: null == t ? void 0 : t.current,
                        rootMargin: r,
                      })).id),
                      (i = e.observer),
                      (l = e.elements).set(h, function (e) {
                        return e && d(e);
                      }),
                      i.observe(h),
                      function () {
                        if ((l.delete(h), i.unobserve(h), 0 === l.size)) {
                          i.disconnect(), a.delete(n);
                          var e = u.findIndex(function (e) {
                            return e.root === n.root && e.margin === n.margin;
                          });
                          e > -1 && u.splice(e, 1);
                        }
                      }
                    );
                } else if (!f) {
                  var p = o.requestIdleCallback(function () {
                    return d(!0);
                  });
                  return function () {
                    return o.cancelIdleCallback(p);
                  };
                }
              },
              [h, c, r, t, f]
            ),
            [
              m,
              f,
              i.useCallback(function () {
                d(!1);
              }, []),
            ]
          );
        });
      var i = r(67294),
        o = r(44686),
        s = "function" == typeof IntersectionObserver,
        a = new Map(),
        u = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    41664: function (e, t, r) {
      e.exports = r(31551);
    },
    69921: function (e, t) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        a = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        d = r ? Symbol.for("react.forward_ref") : 60112,
        p = r ? Symbol.for("react.suspense") : 60113,
        h = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        g = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        w = r ? Symbol.for("react.responder") : 60118,
        b = r ? Symbol.for("react.scope") : 60119;
      function _(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case l:
                case f:
                case o:
                case a:
                case s:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case d:
                    case g:
                    case m:
                    case u:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function E(e) {
        return _(e) === f;
      }
      (t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = c),
        (t.ContextProvider = u),
        (t.Element = n),
        (t.ForwardRef = d),
        (t.Fragment = o),
        (t.Lazy = g),
        (t.Memo = m),
        (t.Portal = i),
        (t.Profiler = a),
        (t.StrictMode = s),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return E(e) || _(e) === l;
        }),
        (t.isConcurrentMode = E),
        (t.isContextConsumer = function (e) {
          return _(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return _(e) === u;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function (e) {
          return _(e) === d;
        }),
        (t.isFragment = function (e) {
          return _(e) === o;
        }),
        (t.isLazy = function (e) {
          return _(e) === g;
        }),
        (t.isMemo = function (e) {
          return _(e) === m;
        }),
        (t.isPortal = function (e) {
          return _(e) === i;
        }),
        (t.isProfiler = function (e) {
          return _(e) === a;
        }),
        (t.isStrictMode = function (e) {
          return _(e) === s;
        }),
        (t.isSuspense = function (e) {
          return _(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === o ||
            e === f ||
            e === a ||
            e === s ||
            e === p ||
            e === h ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === g ||
                e.$$typeof === m ||
                e.$$typeof === u ||
                e.$$typeof === c ||
                e.$$typeof === d ||
                e.$$typeof === v ||
                e.$$typeof === w ||
                e.$$typeof === b ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = _);
    },
    59864: function (e, t, r) {
      "use strict";
      e.exports = r(69921);
    },
    58118: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return W;
          },
          deserialize: function () {
            return Q;
          },
          parse: function () {
            return te;
          },
          serialize: function () {
            return X;
          },
          stringify: function () {
            return ee;
          },
        });
      var n,
        i = (function () {
          function e() {
            (this.keyToValue = new Map()), (this.valueToKey = new Map());
          }
          return (
            (e.prototype.set = function (e, t) {
              this.keyToValue.set(e, t), this.valueToKey.set(t, e);
            }),
            (e.prototype.getByKey = function (e) {
              return this.keyToValue.get(e);
            }),
            (e.prototype.getByValue = function (e) {
              return this.valueToKey.get(e);
            }),
            (e.prototype.clear = function () {
              this.keyToValue.clear(), this.valueToKey.clear();
            }),
            e
          );
        })(),
        o = (function () {
          function e(e) {
            (this.generateIdentifier = e), (this.kv = new i());
          }
          return (
            (e.prototype.register = function (e, t) {
              this.kv.getByValue(e) ||
                (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
            }),
            (e.prototype.clear = function () {
              this.kv.clear();
            }),
            (e.prototype.getIdentifier = function (e) {
              return this.kv.getByValue(e);
            }),
            (e.prototype.getValue = function (e) {
              return this.kv.getByKey(e);
            }),
            e
          );
        })(),
        s =
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        a = (function (e) {
          function t() {
            var t =
              e.call(this, function (e) {
                return e.name;
              }) || this;
            return (t.classToAllowedProps = new Map()), t;
          }
          return (
            s(t, e),
            (t.prototype.register = function (t, r) {
              "object" == typeof r
                ? (r.allowProps &&
                    this.classToAllowedProps.set(t, r.allowProps),
                  e.prototype.register.call(this, t, r.identifier))
                : e.prototype.register.call(this, t, r);
            }),
            (t.prototype.getAllowedProps = function (e) {
              return this.classToAllowedProps.get(e);
            }),
            t
          );
        })(o);
      function u(e, t) {
        Object.entries(e).forEach(function (e) {
          var r = (function (e, t) {
              var r = "function" == typeof Symbol && e[Symbol.iterator];
              if (!r) return e;
              var n,
                i,
                o = r.call(e),
                s = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
                  s.push(n.value);
              } catch (e) {
                i = { error: e };
              } finally {
                try {
                  n && !n.done && (r = o.return) && r.call(o);
                } finally {
                  if (i) throw i.error;
                }
              }
              return s;
            })(e, 2),
            n = r[0];
          return t(r[1], n);
        });
      }
      function c(e, t) {
        return -1 !== e.indexOf(t);
      }
      function l(e, t) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          if (t(n)) return n;
        }
      }
      var f = (function () {
          function e() {
            this.transfomers = {};
          }
          return (
            (e.prototype.register = function (e) {
              this.transfomers[e.name] = e;
            }),
            (e.prototype.findApplicable = function (e) {
              return (function (e, t) {
                var r = (function (e) {
                  if ("values" in Object) return Object.values(e);
                  var t = [];
                  for (var r in e) e.hasOwnProperty(r) && t.push(e[r]);
                  return t;
                })(e);
                if ("find" in r) return r.find(t);
                for (var n = 0; n < r.length; n++) {
                  var i = r[n];
                  if (t(i)) return i;
                }
              })(this.transfomers, function (t) {
                return t.isApplicable(e);
              });
            }),
            (e.prototype.findByName = function (e) {
              return this.transfomers[e];
            }),
            e
          );
        })(),
        d = function (e) {
          return void 0 === e;
        },
        p = function (e) {
          return (
            "object" == typeof e &&
            null !== e &&
            e !== Object.prototype &&
            (null === Object.getPrototypeOf(e) ||
              (e.constructor === Object &&
                Object.getPrototypeOf(e) === Object.prototype))
          );
        },
        h = function (e) {
          return p(e) && 0 === Object.keys(e).length;
        },
        m = function (e) {
          return Array.isArray(e);
        },
        g = function (e) {
          return e instanceof Map;
        },
        y = function (e) {
          return e instanceof Set;
        },
        v = function (e) {
          return "Symbol" === Object.prototype.toString.call(e).slice(8, -1);
        },
        w = function (e) {
          return "number" == typeof e && isNaN(e);
        },
        b = function (e) {
          return (
            "boolean" == typeof e ||
            null === e ||
            d(e) ||
            ("number" == typeof e && !isNaN(e)) ||
            "string" == typeof e ||
            v(e)
          );
        },
        _ = function (e) {
          return e.replace(/\./g, "\\.");
        },
        E = function (e) {
          return e.map(String).map(_).join(".");
        },
        x = function (e) {
          for (var t = [], r = "", n = 0; n < e.length; n++) {
            var i = e.charAt(n);
            "\\" !== i || "." !== e.charAt(n + 1)
              ? "." !== i
                ? (r += i)
                : (t.push(r), (r = ""))
              : ((r += "."), n++);
          }
          var o = r;
          return t.push(o), t;
        },
        P = function () {
          return (P =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        N = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              s.push(n.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        },
        O = function (e, t) {
          for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
            e[i] = t[r];
          return e;
        };
      function S(e, t, r, n) {
        return { isApplicable: e, annotation: t, transform: r, untransform: n };
      }
      var A = [
        S(
          d,
          "undefined",
          function () {
            return null;
          },
          function () {}
        ),
        S(
          function (e) {
            return "bigint" == typeof e;
          },
          "bigint",
          function (e) {
            return e.toString();
          },
          function (e) {
            return "undefined" != typeof BigInt
              ? BigInt(e)
              : (console.error("Please add a BigInt polyfill."), e);
          }
        ),
        S(
          function (e) {
            return e instanceof Date && !isNaN(e.valueOf());
          },
          "Date",
          function (e) {
            return e.toISOString();
          },
          function (e) {
            return new Date(e);
          }
        ),
        S(
          function (e) {
            return e instanceof Error;
          },
          "Error",
          function (e, t) {
            var r = { name: e.name, message: e.message };
            return (
              t.allowedErrorProps.forEach(function (t) {
                r[t] = e[t];
              }),
              r
            );
          },
          function (e, t) {
            var r = Error(e.message);
            return (
              (r.name = e.name),
              (r.stack = e.stack),
              t.allowedErrorProps.forEach(function (t) {
                r[t] = e[t];
              }),
              r
            );
          }
        ),
        S(
          function (e) {
            return e instanceof RegExp;
          },
          "regexp",
          function (e) {
            return "" + e;
          },
          function (e) {
            return RegExp(
              e.slice(1, e.lastIndexOf("/")),
              e.slice(e.lastIndexOf("/") + 1)
            );
          }
        ),
        S(
          y,
          "set",
          function (e) {
            return O([], N(e.values()));
          },
          function (e) {
            return new Set(e);
          }
        ),
        S(
          g,
          "map",
          function (e) {
            return O([], N(e.entries()));
          },
          function (e) {
            return new Map(e);
          }
        ),
        S(
          function (e) {
            var t;
            return w(e) || (t = e) === 1 / 0 || t === -1 / 0;
          },
          "number",
          function (e) {
            return w(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity";
          },
          Number
        ),
        S(
          function (e) {
            return 0 === e && 1 / e == -1 / 0;
          },
          "number",
          function () {
            return "-0";
          },
          Number
        ),
        S(
          function (e) {
            return e instanceof URL;
          },
          "URL",
          function (e) {
            return e.toString();
          },
          function (e) {
            return new URL(e);
          }
        ),
      ];
      function I(e, t, r, n) {
        return { isApplicable: e, annotation: t, transform: r, untransform: n };
      }
      var j = I(
          function (e, t) {
            return !!v(e) && !!t.symbolRegistry.getIdentifier(e);
          },
          function (e, t) {
            return ["symbol", t.symbolRegistry.getIdentifier(e)];
          },
          function (e) {
            return e.description;
          },
          function (e, t, r) {
            var n = r.symbolRegistry.getValue(t[1]);
            if (!n) throw Error("Trying to deserialize unknown symbol");
            return n;
          }
        ),
        T = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          Uint8ClampedArray,
        ].reduce(function (e, t) {
          return (e[t.name] = t), e;
        }, {}),
        M = I(
          function (e) {
            return ArrayBuffer.isView(e) && !(e instanceof DataView);
          },
          function (e) {
            return ["typed-array", e.constructor.name];
          },
          function (e) {
            return O([], N(e));
          },
          function (e, t) {
            var r = T[t[1]];
            if (!r) throw Error("Trying to deserialize unknown typed array");
            return new r(e);
          }
        );
      function R(e, t) {
        return (
          null != e &&
          !!e.constructor &&
          !!t.classRegistry.getIdentifier(e.constructor)
        );
      }
      var k = I(
          R,
          function (e, t) {
            return ["class", t.classRegistry.getIdentifier(e.constructor)];
          },
          function (e, t) {
            var r = t.classRegistry.getAllowedProps(e.constructor);
            if (!r) return P({}, e);
            var n = {};
            return (
              r.forEach(function (t) {
                n[t] = e[t];
              }),
              n
            );
          },
          function (e, t, r) {
            var n = r.classRegistry.getValue(t[1]);
            if (!n)
              throw Error(
                "Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564"
              );
            return Object.assign(Object.create(n.prototype), e);
          }
        ),
        C = I(
          function (e, t) {
            return !!t.customTransformerRegistry.findApplicable(e);
          },
          function (e, t) {
            return [
              "custom",
              t.customTransformerRegistry.findApplicable(e).name,
            ];
          },
          function (e, t) {
            return t.customTransformerRegistry.findApplicable(e).serialize(e);
          },
          function (e, t, r) {
            var n = r.customTransformerRegistry.findByName(t[1]);
            if (!n) throw Error("Trying to deserialize unknown custom value");
            return n.deserialize(e);
          }
        ),
        F = [k, j, C, M],
        D = function (e, t) {
          var r = l(F, function (r) {
            return r.isApplicable(e, t);
          });
          if (r) return { value: r.transform(e, t), type: r.annotation(e, t) };
          var n = l(A, function (r) {
            return r.isApplicable(e, t);
          });
          return n ? { value: n.transform(e, t), type: n.annotation } : void 0;
        },
        L = {};
      A.forEach(function (e) {
        L[e.annotation] = e;
      });
      var U = function (e, t) {
        for (var r = e.keys(); t > 0; ) r.next(), t--;
        return r.next().value;
      };
      function q(e) {
        if (c(e, "__proto__"))
          throw Error("__proto__ is not allowed as a property");
        if (c(e, "prototype"))
          throw Error("prototype is not allowed as a property");
        if (c(e, "constructor"))
          throw Error("constructor is not allowed as a property");
      }
      var z = function (e, t, r) {
          if ((q(t), 0 === t.length)) return r(e);
          for (var n = e, i = 0; i < t.length - 1; i++) {
            var o = t[i];
            if (m(n)) n = n[+o];
            else if (p(n)) n = n[o];
            else if (y(n)) {
              n = U(n, (s = +o));
            } else if (g(n)) {
              if (i === t.length - 2) break;
              var s = +o,
                a = 0 == +t[++i] ? "key" : "value",
                u = U(n, s);
              switch (a) {
                case "key":
                  n = u;
                  break;
                case "value":
                  n = n.get(u);
              }
            }
          }
          var c = t[t.length - 1];
          if (((m(n) || p(n)) && (n[c] = r(n[c])), y(n))) {
            var l = U(n, +c),
              f = r(l);
            l !== f && (n.delete(l), n.add(f));
          }
          if (g(n)) {
            s = +t[t.length - 2];
            var d = U(n, s);
            switch ((a = 0 == +c ? "key" : "value")) {
              case "key":
                var h = r(d);
                n.set(h, n.get(d)), h !== d && n.delete(d);
                break;
              case "value":
                n.set(d, r(n.get(d)));
            }
          }
          return e;
        },
        V = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              s.push(n.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        },
        $ = function (e, t) {
          for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
            e[i] = t[r];
          return e;
        },
        B = function (e, t, r, n, i) {
          if (
            (void 0 === n && (n = []),
            void 0 === i && (i = []),
            b(e) ||
              ((o = e),
              (s = n),
              (l = (a = t).get(o)) ? l.push(s) : a.set(o, [s])),
            !(p(e) || m(e) || g(e) || y(e) || R(e, r)))
          ) {
            var o,
              s,
              a,
              l,
              f,
              d = D(e, r);
            return d
              ? { transformedValue: d.value, annotations: [d.type] }
              : { transformedValue: e };
          }
          if (c(i, e)) return { transformedValue: null };
          var v = D(e, r),
            w =
              null !== (f = null == v ? void 0 : v.value) && void 0 !== f
                ? f
                : e;
          b(e) || (i = $($([], V(i)), [e]));
          var E = m(w) ? [] : {},
            x = {};
          return (
            u(w, function (e, o) {
              var s = B(e, t, r, $($([], V(n)), [o]), i);
              (E[o] = s.transformedValue),
                m(s.annotations)
                  ? (x[o] = s.annotations)
                  : p(s.annotations) &&
                    u(s.annotations, function (e, t) {
                      x[_(o) + "." + t] = e;
                    });
            }),
            h(x)
              ? { transformedValue: E, annotations: v ? [v.type] : void 0 }
              : { transformedValue: E, annotations: v ? [v.type, x] : x }
          );
        };
      function Z(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      }
      function H(e) {
        return "Array" === Z(e);
      }
      var G = function () {
          return (G =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        J = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              s.push(n.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        },
        K = function (e, t) {
          for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
            e[i] = t[r];
          return e;
        },
        Y = (function () {
          function e() {
            (this.classRegistry = new a()),
              (this.symbolRegistry = new o(function (e) {
                var t;
                return null !== (t = e.description) && void 0 !== t ? t : "";
              })),
              (this.customTransformerRegistry = new f()),
              (this.allowedErrorProps = []);
          }
          return (
            (e.prototype.serialize = function (e) {
              var t,
                r,
                n = new Map(),
                i = B(e, n, this),
                o = { json: i.transformedValue };
              i.annotations &&
                (o.meta = G(G({}, o.meta), { values: i.annotations }));
              var s =
                ((t = {}),
                (r = void 0),
                n.forEach(function (e) {
                  if (!(e.length <= 1)) {
                    var n = V(
                        e
                          .map(function (e) {
                            return e.map(String);
                          })
                          .sort(function (e, t) {
                            return e.length - t.length;
                          })
                      ),
                      i = n[0],
                      o = n.slice(1);
                    0 === i.length ? (r = o.map(E)) : (t[E(i)] = o.map(E));
                  }
                }),
                r ? (h(t) ? [r] : [r, t]) : h(t) ? void 0 : t);
              return (
                s && (o.meta = G(G({}, o.meta), { referentialEqualities: s })),
                o
              );
            }),
            (e.prototype.deserialize = function (e) {
              var t,
                r,
                n,
                i = e.json,
                o = e.meta,
                s = (function e(t, r = {}) {
                  if (H(t)) return t.map((t) => e(t, r));
                  if (
                    "Object" !== Z(t) ||
                    t.constructor !== Object ||
                    Object.getPrototypeOf(t) !== Object.prototype
                  )
                    return t;
                  return [
                    ...Object.getOwnPropertyNames(t),
                    ...Object.getOwnPropertySymbols(t),
                  ].reduce((n, i) => {
                    if (H(r.props) && !r.props.includes(i)) return n;
                    let o = t[i];
                    return (
                      (function (e, t, r, n, i) {
                        let o = {}.propertyIsEnumerable.call(n, t)
                          ? "enumerable"
                          : "nonenumerable";
                        "enumerable" === o && (e[t] = r),
                          i &&
                            "nonenumerable" === o &&
                            Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !1,
                              writable: !0,
                              configurable: !0,
                            });
                      })(n, i, e(o, r), t, r.nonenumerable),
                      n
                    );
                  }, {});
                })(i);
              return (
                (null == o ? void 0 : o.values) &&
                  ((t = s),
                  (r = o.values),
                  (n = this),
                  (function e(t, r, n) {
                    if ((void 0 === n && (n = []), t)) {
                      if (!m(t))
                        return void u(t, function (t, i) {
                          return e(t, r, $($([], V(n)), V(x(i))));
                        });
                      var i = V(t, 2),
                        o = i[0],
                        s = i[1];
                      s &&
                        u(s, function (t, i) {
                          e(t, r, $($([], V(n)), V(x(i))));
                        }),
                        r(o, n);
                    }
                  })(r, function (e, r) {
                    t = z(t, r, function (t) {
                      return (function (e, t, r) {
                        if (!m(t)) {
                          var n = L[t];
                          if (!n) throw Error("Unknown transformation: " + t);
                          return n.untransform(e, r);
                        }
                        switch (t[0]) {
                          case "symbol":
                            return j.untransform(e, t, r);
                          case "class":
                            return k.untransform(e, t, r);
                          case "custom":
                            return C.untransform(e, t, r);
                          case "typed-array":
                            return M.untransform(e, t, r);
                          default:
                            throw Error("Unknown transformation: " + t);
                        }
                      })(t, e, n);
                    });
                  }),
                  (s = t)),
                (null == o ? void 0 : o.referentialEqualities) &&
                  (s = (function (e, t) {
                    function r(t, r) {
                      var n,
                        i,
                        o =
                          ((n = e),
                          q((i = x(r))),
                          i.forEach(function (e) {
                            n = n[e];
                          }),
                          n);
                      t.map(x).forEach(function (t) {
                        e = z(e, t, function () {
                          return o;
                        });
                      });
                    }
                    if (m(t)) {
                      var n = V(t, 2),
                        i = n[0],
                        o = n[1];
                      i.forEach(function (t) {
                        e = z(e, x(t), function () {
                          return e;
                        });
                      }),
                        o && u(o, r);
                    } else u(t, r);
                    return e;
                  })(s, o.referentialEqualities)),
                s
              );
            }),
            (e.prototype.stringify = function (e) {
              return JSON.stringify(this.serialize(e));
            }),
            (e.prototype.parse = function (e) {
              return this.deserialize(JSON.parse(e));
            }),
            (e.prototype.registerClass = function (e, t) {
              this.classRegistry.register(e, t);
            }),
            (e.prototype.registerSymbol = function (e, t) {
              this.symbolRegistry.register(e, t);
            }),
            (e.prototype.registerCustom = function (e, t) {
              this.customTransformerRegistry.register(G({ name: t }, e));
            }),
            (e.prototype.allowErrorProps = function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              (e = this.allowedErrorProps).push.apply(e, K([], J(t)));
            }),
            (e.defaultInstance = new e()),
            (e.serialize = e.defaultInstance.serialize.bind(e.defaultInstance)),
            (e.deserialize = e.defaultInstance.deserialize.bind(
              e.defaultInstance
            )),
            (e.stringify = e.defaultInstance.stringify.bind(e.defaultInstance)),
            (e.parse = e.defaultInstance.parse.bind(e.defaultInstance)),
            (e.registerClass = e.defaultInstance.registerClass.bind(
              e.defaultInstance
            )),
            (e.registerSymbol = e.defaultInstance.registerSymbol.bind(
              e.defaultInstance
            )),
            (e.registerCustom = e.defaultInstance.registerCustom.bind(
              e.defaultInstance
            )),
            (e.allowErrorProps = e.defaultInstance.allowErrorProps.bind(
              e.defaultInstance
            )),
            e
          );
        })(),
        W = Y,
        X = Y.serialize,
        Q = Y.deserialize,
        ee = Y.stringify,
        te = Y.parse;
    },
    7874: function (e, t, r) {
      "use strict";
      function n(e) {
        if (null == e) throw TypeError("Cannot destructure " + e);
        return e;
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
  },
]);
