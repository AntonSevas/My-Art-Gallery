"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5211],
  {
    60543: function (e, t, i) {
      i.d(t, {
        useGesture: function () {
          return se;
        },
      });
      let n = {
        toVector: (e, t) => (
          void 0 === e && (e = t), Array.isArray(e) ? e : [e, e]
        ),
        add: (e, t) => [e[0] + t[0], e[1] + t[1]],
        sub: (e, t) => [e[0] - t[0], e[1] - t[1]],
        addTo(e, t) {
          (e[0] += t[0]), (e[1] += t[1]);
        },
        subTo(e, t) {
          (e[0] -= t[0]), (e[1] -= t[1]);
        },
      };
      function r(e, t, i) {
        return 0 === t || Math.abs(t) === 1 / 0
          ? Math.pow(e, 5 * i)
          : (e * t * i) / (t + i * e);
      }
      function s(e, t, i, n = 0.15) {
        return 0 === n
          ? Math.max(t, Math.min(e, i))
          : e < t
          ? -r(t - e, i - t, n) + t
          : e > i
          ? +r(e - i, i - t, n) + i
          : e;
      }
      function o(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function a(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(i), !0).forEach(function (t) {
                o(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : a(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      let l = {
        pointer: { start: "down", change: "move", end: "up" },
        mouse: { start: "down", change: "move", end: "up" },
        touch: { start: "start", change: "move", end: "end" },
        gesture: { start: "start", change: "change", end: "end" },
      };
      function u(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : "";
      }
      let h = ["enter", "leave"],
        d = ["gotpointercapture", "lostpointercapture"];
      function p(e) {
        return "touches" in e;
      }
      function f(e) {
        return p(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse";
      }
      function v(e) {
        return p(e)
          ? ("touchend" === e.type || "touchcancel" === e.type
              ? e.changedTouches
              : e.targetTouches)[0]
          : e;
      }
      function m(e, t) {
        let i = t.clientX - e.clientX,
          n = t.clientY - e.clientY,
          r = (t.clientX + e.clientX) / 2,
          s = (t.clientY + e.clientY) / 2;
        return {
          angle: (-180 * Math.atan2(i, n)) / Math.PI,
          distance: Math.hypot(i, n),
          origin: [r, s],
        };
      }
      function g(e, t) {
        let [i, n] = Array.from(e.touches).filter((e) =>
          t.includes(e.identifier)
        );
        return m(i, n);
      }
      function b(e) {
        let t = v(e);
        return p(e) ? t.identifier : t.pointerId;
      }
      function y(e) {
        let t = v(e);
        return [t.clientX, t.clientY];
      }
      function _(e) {
        let { deltaX: t, deltaY: i, deltaMode: n } = e;
        return (
          1 === n
            ? ((t *= 40), (i *= 40))
            : 2 === n && ((t *= 800), (i *= 800)),
          [t, i]
        );
      }
      function w(e, ...t) {
        return "function" == typeof e ? e(...t) : e;
      }
      function k() {}
      function E(e, t) {
        return Object.assign({}, t, e || {});
      }
      class T {
        constructor(e, t, i) {
          (this.ctrl = e),
            (this.args = t),
            (this.key = i),
            this.state ||
              ((this.state = {}),
              this.computeValues([0, 0]),
              this.computeInitial(),
              this.init && this.init(),
              this.reset());
        }
        get state() {
          return this.ctrl.state[this.key];
        }
        set state(e) {
          this.ctrl.state[this.key] = e;
        }
        get shared() {
          return this.ctrl.state.shared;
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key];
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key];
        }
        get config() {
          return this.ctrl.config[this.key];
        }
        get sharedConfig() {
          return this.ctrl.config.shared;
        }
        get handler() {
          return this.ctrl.handlers[this.key];
        }
        reset() {
          let { state: e, shared: t, ingKey: i, args: n } = this;
          (t[i] = e._active = e.active = e._blocked = e._force = !1),
            (e._step = [!1, !1]),
            (e.intentional = !1),
            (e._movement = [0, 0]),
            (e._distance = [0, 0]),
            (e._direction = [0, 0]),
            (e._delta = [0, 0]),
            (e._bounds = [
              [-1 / 0, 1 / 0],
              [-1 / 0, 1 / 0],
            ]),
            (e.args = n),
            (e.axis = void 0),
            (e.memo = void 0),
            (e.elapsedTime = 0),
            (e.direction = [0, 0]),
            (e.distance = [0, 0]),
            (e.overflow = [0, 0]),
            (e._movementBound = [!1, !1]),
            (e.velocity = [0, 0]),
            (e.movement = [0, 0]),
            (e.delta = [0, 0]),
            (e.timeStamp = 0);
        }
        start(e) {
          let t = this.state,
            i = this.config;
          t._active ||
            (this.reset(),
            this.computeInitial(),
            (t._active = !0),
            (t.target = e.target),
            (t.currentTarget = e.currentTarget),
            (t.lastOffset = i.from ? w(i.from, t) : t.offset),
            (t.offset = t.lastOffset)),
            (t.startTime = t.timeStamp = e.timeStamp);
        }
        computeValues(e) {
          let t = this.state;
          (t._values = e), (t.values = this.config.transform(e));
        }
        computeInitial() {
          let e = this.state;
          (e._initial = e._values), (e.initial = e.values);
        }
        compute(e) {
          let { state: t, config: i, shared: r } = this;
          t.args = this.args;
          let o = 0;
          if (
            (e &&
              ((t.event = e),
              i.preventDefault && e.cancelable && t.event.preventDefault(),
              (t.type = e.type),
              (r.touches =
                this.ctrl.pointerIds.size || this.ctrl.touchIds.size),
              (r.locked = !!document.pointerLockElement),
              Object.assign(
                r,
                (function (e) {
                  let t = {};
                  if (
                    ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e)
                  ) {
                    let { shiftKey: i, altKey: n, metaKey: r, ctrlKey: s } = e;
                    Object.assign(t, {
                      shiftKey: i,
                      altKey: n,
                      metaKey: r,
                      ctrlKey: s,
                    });
                  }
                  return t;
                })(e)
              ),
              (r.down = r.pressed = r.buttons % 2 == 1 || r.touches > 0),
              (o = e.timeStamp - t.timeStamp),
              (t.timeStamp = e.timeStamp),
              (t.elapsedTime = t.timeStamp - t.startTime)),
            t._active)
          ) {
            let e = t._delta.map(Math.abs);
            n.addTo(t._distance, e);
          }
          this.axisIntent && this.axisIntent(e);
          let [a, c] = t._movement,
            [l, u] = i.threshold,
            { _step: h, values: d } = t;
          if (
            (i.hasCustomTransform
              ? (!1 === h[0] && (h[0] = Math.abs(a) >= l && d[0]),
                !1 === h[1] && (h[1] = Math.abs(c) >= u && d[1]))
              : (!1 === h[0] && (h[0] = Math.abs(a) >= l && Math.sign(a) * l),
                !1 === h[1] && (h[1] = Math.abs(c) >= u && Math.sign(c) * u)),
            (t.intentional = !1 !== h[0] || !1 !== h[1]),
            !t.intentional)
          )
            return;
          let p = [0, 0];
          if (i.hasCustomTransform) {
            let [e, t] = d;
            (p[0] = !1 !== h[0] ? e - h[0] : 0),
              (p[1] = !1 !== h[1] ? t - h[1] : 0);
          } else
            (p[0] = !1 !== h[0] ? a - h[0] : 0),
              (p[1] = !1 !== h[1] ? c - h[1] : 0);
          this.restrictToAxis && !t._blocked && this.restrictToAxis(p);
          let f = t.offset,
            v = (t._active && !t._blocked) || t.active;
          v &&
            ((t.first = t._active && !t.active),
            (t.last = !t._active && t.active),
            (t.active = r[this.ingKey] = t._active),
            e &&
              (t.first &&
                ("bounds" in i && (t._bounds = w(i.bounds, t)),
                this.setup && this.setup()),
              (t.movement = p),
              this.computeOffset()));
          let [m, g] = t.offset,
            [[b, y], [_, k]] = t._bounds;
          (t.overflow = [
            m < b ? -1 : m > y ? 1 : 0,
            g < _ ? -1 : g > k ? 1 : 0,
          ]),
            (t._movementBound[0] =
              !!t.overflow[0] &&
              (!1 === t._movementBound[0]
                ? t._movement[0]
                : t._movementBound[0])),
            (t._movementBound[1] =
              !!t.overflow[1] &&
              (!1 === t._movementBound[1]
                ? t._movement[1]
                : t._movementBound[1]));
          let E = (t._active && i.rubberband) || [0, 0];
          if (
            ((t.offset = (function (e, [t, i], [n, r]) {
              let [[o, a], [c, l]] = e;
              return [s(t, o, a, n), s(i, c, l, r)];
            })(t._bounds, t.offset, E)),
            (t.delta = n.sub(t.offset, f)),
            this.computeMovement(),
            v && (!t.last || o > 32))
          ) {
            t.delta = n.sub(t.offset, f);
            let e = t.delta.map(Math.abs);
            n.addTo(t.distance, e),
              (t.direction = t.delta.map(Math.sign)),
              (t._direction = t._delta.map(Math.sign)),
              !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o]);
          }
        }
        emit() {
          let e = this.state,
            t = this.shared,
            i = this.config;
          if (
            (e._active || this.clean(),
            (e._blocked || !e.intentional) && !e._force && !i.triggerAllEvents)
          )
            return;
          let n = this.handler(
            c(c(c({}, t), e), {}, { [this.aliasKey]: e.values })
          );
          void 0 !== n && (e.memo = n);
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean();
        }
      }
      class S extends T {
        constructor(...e) {
          super(...e), o(this, "aliasKey", "xy");
        }
        reset() {
          super.reset(), (this.state.axis = void 0);
        }
        init() {
          (this.state.offset = [0, 0]), (this.state.lastOffset = [0, 0]);
        }
        computeOffset() {
          this.state.offset = n.add(this.state.lastOffset, this.state.movement);
        }
        computeMovement() {
          this.state.movement = n.sub(this.state.offset, this.state.lastOffset);
        }
        axisIntent(e) {
          let t = this.state,
            i = this.config;
          if (!t.axis && e) {
            let n =
              "object" == typeof i.axisThreshold
                ? i.axisThreshold[f(e)]
                : i.axisThreshold;
            t.axis = (function ([e, t], i) {
              let n = Math.abs(e),
                r = Math.abs(t);
              return n > r && n > i ? "x" : r > n && r > i ? "y" : void 0;
            })(t._movement, n);
          }
          t._blocked =
            ((i.lockDirection || !!i.axis) && !t.axis) ||
            (!!i.axis && i.axis !== t.axis);
        }
        restrictToAxis(e) {
          if (this.config.axis || this.config.lockDirection)
            switch (this.state.axis) {
              case "x":
                e[1] = 0;
                break;
              case "y":
                e[0] = 0;
            }
        }
      }
      let O = (e) => e,
        x = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, i) => c(c({}, i.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [0.15, 0.15];
              case !1:
                return [0, 0];
              default:
                return n.toVector(e);
            }
          },
          from: (e) =>
            "function" == typeof e ? e : null != e ? n.toVector(e) : void 0,
          transform(e, t, i) {
            let n = e || i.shared.transform;
            return (this.hasCustomTransform = !!n), n || O;
          },
          threshold: (e) => n.toVector(e, 0),
        },
        M = c(
          c({}, x),
          {},
          {
            axis(e, t, { axis: i }) {
              if (((this.lockDirection = "lock" === i), !this.lockDirection))
                return i;
            },
            axisThreshold: (e = 0) => e,
            bounds(e = {}) {
              if ("function" == typeof e) return (t) => M.bounds(e(t));
              if ("current" in e) return () => e.current;
              if ("function" == typeof HTMLElement && e instanceof HTMLElement)
                return e;
              let {
                left: t = -1 / 0,
                right: i = 1 / 0,
                top: n = -1 / 0,
                bottom: r = 1 / 0,
              } = e;
              return [
                [t, i],
                [n, r],
              ];
            },
          }
        ),
        C = {
          ArrowRight: (e = 1) => [10 * e, 0],
          ArrowLeft: (e = 1) => [-10 * e, 0],
          ArrowUp: (e = 1) => [0, -10 * e],
          ArrowDown: (e = 1) => [0, 10 * e],
        },
        I =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement;
      function A() {
        return (
          (I && "ontouchstart" in window) ||
          (I && window.navigator.maxTouchPoints > 1)
        );
      }
      let R = {
          isBrowser: I,
          gesture: (function () {
            try {
              return "constructor" in GestureEvent;
            } catch (e) {
              return !1;
            }
          })(),
          touch: A(),
          touchscreen: A(),
          pointer: I && "onpointerdown" in window,
          pointerLock: I && "exitPointerLock" in window.document,
        },
        P = { mouse: 0, touch: 0, pen: 8 },
        D = c(
          c({}, M),
          {},
          {
            device(
              e,
              t,
              { pointer: { touch: i = !1, lock: n = !1, mouse: r = !1 } = {} }
            ) {
              return (
                (this.pointerLock = n && R.pointerLock),
                R.touch && i
                  ? "touch"
                  : this.pointerLock
                  ? "mouse"
                  : R.pointer && !r
                  ? "pointer"
                  : R.touch
                  ? "touch"
                  : "mouse"
              );
            },
            preventScrollAxis(e, t, { preventScroll: i }) {
              if (
                ((this.preventScrollDelay =
                  "number" == typeof i
                    ? i
                    : i || (void 0 === i && e)
                    ? 250
                    : void 0),
                R.touchscreen && !1 !== i)
              )
                return e || (void 0 !== i ? "y" : void 0);
            },
            pointerCapture(
              e,
              t,
              {
                pointer: { capture: i = !0, buttons: n = 1, keys: r = !0 } = {},
              }
            ) {
              return (
                (this.pointerButtons = n),
                (this.keys = r),
                !this.pointerLock && "pointer" === this.device && i
              );
            },
            threshold(
              e,
              t,
              { filterTaps: i = !1, tapsThreshold: r = 3, axis: s }
            ) {
              let o = n.toVector(e, i ? r : s ? 1 : 0);
              return (this.filterTaps = i), (this.tapsThreshold = r), o;
            },
            swipe({
              velocity: e = 0.5,
              distance: t = 50,
              duration: i = 250,
            } = {}) {
              return {
                velocity: this.transform(n.toVector(e)),
                distance: this.transform(n.toVector(t)),
                duration: i,
              };
            },
            delay(e = 0) {
              switch (e) {
                case !0:
                  return 180;
                case !1:
                  return 0;
                default:
                  return e;
              }
            },
            axisThreshold: (e) => (e ? c(c({}, P), e) : P),
          }
        );
      function L(e) {
        let [t, i] = e.overflow,
          [n, r] = e._delta,
          [s, o] = e._direction;
        ((t < 0 && n > 0 && s < 0) || (t > 0 && n < 0 && s > 0)) &&
          (e._movement[0] = e._movementBound[0]),
          ((i < 0 && r > 0 && o < 0) || (i > 0 && r < 0 && o > 0)) &&
            (e._movement[1] = e._movementBound[1]);
      }
      let j = c(
          c({}, x),
          {},
          {
            device(e, t, { shared: i, pointer: { touch: n = !1 } = {} }) {
              if (i.target && !R.touch && R.gesture) return "gesture";
              if (R.touch && n) return "touch";
              if (R.touchscreen) {
                if (R.pointer) return "pointer";
                if (R.touch) return "touch";
              }
            },
            bounds(e, t, { scaleBounds: i = {}, angleBounds: n = {} }) {
              let r = (e) => {
                  let t = E(w(i, e), { min: -1 / 0, max: 1 / 0 });
                  return [t.min, t.max];
                },
                s = (e) => {
                  let t = E(w(n, e), { min: -1 / 0, max: 1 / 0 });
                  return [t.min, t.max];
                };
              return "function" != typeof i && "function" != typeof n
                ? [r(), s()]
                : (e) => [r(e), s(e)];
            },
            threshold(e, t, i) {
              return (
                (this.lockDirection = "lock" === i.axis),
                n.toVector(e, this.lockDirection ? [0.1, 3] : 0)
              );
            },
            modifierKey: (e) => (void 0 === e ? "ctrlKey" : e),
            pinchOnWheel: (e = !0) => e,
          }
        ),
        K = c(c({}, M), {}, { mouseOnly: (e = !0) => e }),
        B = c(c({}, M), {}, { mouseOnly: (e = !0) => e }),
        V = new Map(),
        F = new Map();
      function N(e) {
        V.set(e.key, e.engine), F.set(e.key, e.resolver);
      }
      let z = {
          key: "drag",
          engine: class extends S {
            constructor(...e) {
              super(...e), o(this, "ingKey", "dragging");
            }
            reset() {
              super.reset();
              let e = this.state;
              (e._pointerId = void 0),
                (e._pointerActive = !1),
                (e._keyboardActive = !1),
                (e._preventScroll = !1),
                (e._delayed = !1),
                (e.swipe = [0, 0]),
                (e.tap = !1),
                (e.canceled = !1),
                (e.cancel = this.cancel.bind(this));
            }
            setup() {
              let e = this.state;
              if (e._bounds instanceof HTMLElement) {
                let t = e._bounds.getBoundingClientRect(),
                  i = e.currentTarget.getBoundingClientRect(),
                  n = {
                    left: t.left - i.left + e.offset[0],
                    right: t.right - i.right + e.offset[0],
                    top: t.top - i.top + e.offset[1],
                    bottom: t.bottom - i.bottom + e.offset[1],
                  };
                e._bounds = M.bounds(n);
              }
            }
            cancel() {
              let e = this.state;
              e.canceled ||
                ((e.canceled = !0),
                (e._active = !1),
                setTimeout(() => {
                  this.compute(), this.emit();
                }, 0));
            }
            setActive() {
              this.state._active =
                this.state._pointerActive || this.state._keyboardActive;
            }
            clean() {
              this.pointerClean(),
                (this.state._pointerActive = !1),
                (this.state._keyboardActive = !1),
                super.clean();
            }
            pointerDown(e) {
              let t = this.config,
                i = this.state;
              if (
                null != e.buttons &&
                (Array.isArray(t.pointerButtons)
                  ? !t.pointerButtons.includes(e.buttons)
                  : -1 !== t.pointerButtons && t.pointerButtons !== e.buttons)
              )
                return;
              let n = this.ctrl.setEventIds(e);
              t.pointerCapture && e.target.setPointerCapture(e.pointerId),
                (n && n.size > 1 && i._pointerActive) ||
                  (this.start(e),
                  this.setupPointer(e),
                  (i._pointerId = b(e)),
                  (i._pointerActive = !0),
                  this.computeValues(y(e)),
                  this.computeInitial(),
                  t.preventScrollAxis && "mouse" !== f(e)
                    ? ((i._active = !1), this.setupScrollPrevention(e))
                    : t.delay > 0
                    ? (this.setupDelayTrigger(e),
                      t.triggerAllEvents && (this.compute(e), this.emit()))
                    : this.startPointerDrag(e));
            }
            startPointerDrag(e) {
              let t = this.state;
              (t._active = !0),
                (t._preventScroll = !0),
                (t._delayed = !1),
                this.compute(e),
                this.emit();
            }
            pointerMove(e) {
              let t = this.state,
                i = this.config;
              if (
                !t._pointerActive ||
                (t.type === e.type && e.timeStamp === t.timeStamp)
              )
                return;
              let r = b(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              let s = y(e);
              if (
                (document.pointerLockElement === e.target
                  ? (t._delta = [e.movementX, e.movementY])
                  : ((t._delta = n.sub(s, t._values)), this.computeValues(s)),
                n.addTo(t._movement, t._delta),
                this.compute(e),
                t._delayed && t.intentional)
              )
                return (
                  this.timeoutStore.remove("dragDelay"),
                  (t.active = !1),
                  void this.startPointerDrag(e)
                );
              if (i.preventScrollAxis && !t._preventScroll) {
                if (!t.axis) return;
                return t.axis === i.preventScrollAxis ||
                  "xy" === i.preventScrollAxis
                  ? ((t._active = !1), void this.clean())
                  : (this.timeoutStore.remove("startPointerDrag"),
                    void this.startPointerDrag(e));
              }
              this.emit();
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture &&
                  e.target.hasPointerCapture(e.pointerId) &&
                  e.target.releasePointerCapture(e.pointerId);
              } catch (e) {}
              let t = this.state,
                i = this.config;
              if (!t._active || !t._pointerActive) return;
              let n = b(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              (this.state._pointerActive = !1),
                this.setActive(),
                this.compute(e);
              let [r, s] = t._distance;
              if (
                ((t.tap = r <= i.tapsThreshold && s <= i.tapsThreshold),
                t.tap && i.filterTaps)
              )
                t._force = !0;
              else {
                let [e, n] = t.direction,
                  [r, s] = t.velocity,
                  [o, a] = t.movement,
                  [c, l] = i.swipe.velocity,
                  [u, h] = i.swipe.distance,
                  d = i.swipe.duration;
                t.elapsedTime < d &&
                  (Math.abs(r) > c && Math.abs(o) > u && (t.swipe[0] = e),
                  Math.abs(s) > l && Math.abs(a) > h && (t.swipe[1] = n));
              }
              this.emit();
            }
            pointerClick(e) {
              !this.state.tap &&
                e.detail > 0 &&
                (e.preventDefault(), e.stopPropagation());
            }
            setupPointer(e) {
              let t = this.config,
                i = t.device;
              t.pointerLock && e.currentTarget.requestPointerLock(),
                t.pointerCapture ||
                  (this.eventStore.add(
                    this.sharedConfig.window,
                    i,
                    "change",
                    this.pointerMove.bind(this)
                  ),
                  this.eventStore.add(
                    this.sharedConfig.window,
                    i,
                    "end",
                    this.pointerUp.bind(this)
                  ),
                  this.eventStore.add(
                    this.sharedConfig.window,
                    i,
                    "cancel",
                    this.pointerUp.bind(this)
                  ));
            }
            pointerClean() {
              this.config.pointerLock &&
                document.pointerLockElement === this.state.currentTarget &&
                document.exitPointerLock();
            }
            preventScroll(e) {
              this.state._preventScroll && e.cancelable && e.preventDefault();
            }
            setupScrollPrevention(e) {
              (this.state._preventScroll = !1),
                "persist" in e && "function" == typeof e.persist && e.persist();
              let t = this.eventStore.add(
                this.sharedConfig.window,
                "touch",
                "change",
                this.preventScroll.bind(this),
                { passive: !1 }
              );
              this.eventStore.add(this.sharedConfig.window, "touch", "end", t),
                this.eventStore.add(
                  this.sharedConfig.window,
                  "touch",
                  "cancel",
                  t
                ),
                this.timeoutStore.add(
                  "startPointerDrag",
                  this.startPointerDrag.bind(this),
                  this.config.preventScrollDelay,
                  e
                );
            }
            setupDelayTrigger(e) {
              (this.state._delayed = !0),
                this.timeoutStore.add(
                  "dragDelay",
                  () => {
                    (this.state._step = [0, 0]), this.startPointerDrag(e);
                  },
                  this.config.delay
                );
            }
            keyDown(e) {
              let t = C[e.key];
              if (t) {
                let i = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
                this.start(e),
                  (i._delta = t(r)),
                  (i._keyboardActive = !0),
                  n.addTo(i._movement, i._delta),
                  this.compute(e),
                  this.emit();
              }
            }
            keyUp(e) {
              e.key in C &&
                ((this.state._keyboardActive = !1),
                this.setActive(),
                this.compute(e),
                this.emit());
            }
            bind(e) {
              let t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)),
                this.config.pointerCapture &&
                  (e(t, "change", this.pointerMove.bind(this)),
                  e(t, "end", this.pointerUp.bind(this)),
                  e(t, "cancel", this.pointerUp.bind(this)),
                  e("lostPointerCapture", "", this.pointerUp.bind(this))),
                this.config.keys &&
                  (e("key", "down", this.keyDown.bind(this)),
                  e("key", "up", this.keyUp.bind(this))),
                this.config.filterTaps &&
                  e("click", "", this.pointerClick.bind(this), {
                    capture: !0,
                    passive: !1,
                  });
            }
          },
          resolver: D,
        },
        U = {
          key: "hover",
          engine: class extends S {
            constructor(...e) {
              super(...e), o(this, "ingKey", "hovering");
            }
            enter(e) {
              (this.config.mouseOnly && "mouse" !== e.pointerType) ||
                (this.start(e),
                this.computeValues(y(e)),
                this.compute(e),
                this.emit());
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              let t = this.state;
              if (!t._active) return;
              t._active = !1;
              let i = y(e);
              (t._movement = t._delta = n.sub(i, t._values)),
                this.computeValues(i),
                this.compute(e),
                (t.delta = t.movement),
                this.emit();
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)),
                e("pointer", "leave", this.leave.bind(this));
            }
          },
          resolver: B,
        },
        W = {
          key: "move",
          engine: class extends S {
            constructor(...e) {
              super(...e), o(this, "ingKey", "moving");
            }
            move(e) {
              (this.config.mouseOnly && "mouse" !== e.pointerType) ||
                (this.state._active ? this.moveChange(e) : this.moveStart(e),
                this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
            }
            moveStart(e) {
              this.start(e),
                this.computeValues(y(e)),
                this.compute(e),
                this.computeInitial(),
                this.emit();
            }
            moveChange(e) {
              if (!this.state._active) return;
              let t = y(e),
                i = this.state;
              (i._delta = n.sub(t, i._values)),
                n.addTo(i._movement, i._delta),
                this.computeValues(t),
                this.compute(e),
                this.emit();
            }
            moveEnd(e) {
              this.state._active &&
                ((this.state._active = !1), this.compute(e), this.emit());
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)),
                e("pointer", "leave", this.moveEnd.bind(this));
            }
          },
          resolver: K,
        },
        Y = {
          key: "pinch",
          engine: class extends T {
            constructor(...e) {
              super(...e),
                o(this, "ingKey", "pinching"),
                o(this, "aliasKey", "da");
            }
            init() {
              (this.state.offset = [1, 0]),
                (this.state.lastOffset = [1, 0]),
                (this.state._pointerEvents = new Map());
            }
            reset() {
              super.reset();
              let e = this.state;
              (e._touchIds = []),
                (e.canceled = !1),
                (e.cancel = this.cancel.bind(this)),
                (e.turns = 0);
            }
            computeOffset() {
              let { type: e, movement: t, lastOffset: i } = this.state;
              this.state.offset =
                "wheel" === e ? n.add(t, i) : [(1 + t[0]) * i[0], t[1] + i[1]];
            }
            computeMovement() {
              let { offset: e, lastOffset: t } = this.state;
              this.state.movement = [e[0] / t[0], e[1] - t[1]];
            }
            axisIntent() {
              let e = this.state,
                [t, i] = e._movement;
              if (!e.axis) {
                let n = 30 * Math.abs(t) - Math.abs(i);
                n < 0 ? (e.axis = "angle") : n > 0 && (e.axis = "scale");
              }
            }
            restrictToAxis(e) {
              this.config.lockDirection &&
                ("scale" === this.state.axis
                  ? (e[1] = 0)
                  : "angle" === this.state.axis && (e[0] = 0));
            }
            cancel() {
              let e = this.state;
              e.canceled ||
                setTimeout(() => {
                  (e.canceled = !0),
                    (e._active = !1),
                    this.compute(),
                    this.emit();
                }, 0);
            }
            touchStart(e) {
              this.ctrl.setEventIds(e);
              let t = this.state,
                i = this.ctrl.touchIds;
              if (
                (t._active && t._touchIds.every((e) => i.has(e))) ||
                i.size < 2
              )
                return;
              this.start(e), (t._touchIds = Array.from(i).slice(0, 2));
              let n = g(e, t._touchIds);
              this.pinchStart(e, n);
            }
            pointerStart(e) {
              if (null != e.buttons && e.buttons % 2 != 1) return;
              this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
              let t = this.state,
                i = t._pointerEvents,
                n = this.ctrl.pointerIds;
              if (
                (t._active && Array.from(i.keys()).every((e) => n.has(e))) ||
                (i.size < 2 && i.set(e.pointerId, e), t._pointerEvents.size < 2)
              )
                return;
              this.start(e);
              let r = m(...Array.from(i.values()));
              this.pinchStart(e, r);
            }
            pinchStart(e, t) {
              (this.state.origin = t.origin),
                this.computeValues([t.distance, t.angle]),
                this.computeInitial(),
                this.compute(e),
                this.emit();
            }
            touchMove(e) {
              if (!this.state._active) return;
              let t = g(e, this.state._touchIds);
              this.pinchMove(e, t);
            }
            pointerMove(e) {
              let t = this.state._pointerEvents;
              if (
                (t.has(e.pointerId) && t.set(e.pointerId, e),
                !this.state._active)
              )
                return;
              let i = m(...Array.from(t.values()));
              this.pinchMove(e, i);
            }
            pinchMove(e, t) {
              let i = this.state,
                n = i._values[1],
                r = t.angle - n,
                s = 0;
              Math.abs(r) > 270 && (s += Math.sign(r)),
                this.computeValues([t.distance, t.angle - 360 * s]),
                (i.origin = t.origin),
                (i.turns = s),
                (i._movement = [
                  i._values[0] / i._initial[0] - 1,
                  i._values[1] - i._initial[1],
                ]),
                this.compute(e),
                this.emit();
            }
            touchEnd(e) {
              this.ctrl.setEventIds(e),
                this.state._active &&
                  this.state._touchIds.some(
                    (e) => !this.ctrl.touchIds.has(e)
                  ) &&
                  ((this.state._active = !1), this.compute(e), this.emit());
            }
            pointerEnd(e) {
              let t = this.state;
              this.ctrl.setEventIds(e);
              try {
                e.target.releasePointerCapture(e.pointerId);
              } catch (e) {}
              t._pointerEvents.has(e.pointerId) &&
                t._pointerEvents.delete(e.pointerId),
                t._active &&
                  t._pointerEvents.size < 2 &&
                  ((t._active = !1), this.compute(e), this.emit());
            }
            gestureStart(e) {
              e.cancelable && e.preventDefault();
              let t = this.state;
              t._active ||
                (this.start(e),
                this.computeValues([e.scale, e.rotation]),
                (t.origin = [e.clientX, e.clientY]),
                this.compute(e),
                this.emit());
            }
            gestureMove(e) {
              if ((e.cancelable && e.preventDefault(), !this.state._active))
                return;
              let t = this.state;
              this.computeValues([e.scale, e.rotation]),
                (t.origin = [e.clientX, e.clientY]);
              let i = t._movement;
              (t._movement = [e.scale - 1, e.rotation]),
                (t._delta = n.sub(t._movement, i)),
                this.compute(e),
                this.emit();
            }
            gestureEnd(e) {
              this.state._active &&
                ((this.state._active = !1), this.compute(e), this.emit());
            }
            wheel(e) {
              let t = this.config.modifierKey;
              (!t || e[t]) &&
                (this.state._active ? this.wheelChange(e) : this.wheelStart(e),
                this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
            }
            wheelStart(e) {
              this.start(e), this.wheelChange(e);
            }
            wheelChange(e) {
              "uv" in e || !e.cancelable || e.preventDefault();
              let t = this.state;
              (t._delta = [(-_(e)[1] / 100) * t.offset[0], 0]),
                n.addTo(t._movement, t._delta),
                L(t),
                (this.state.origin = [e.clientX, e.clientY]),
                this.compute(e),
                this.emit();
            }
            wheelEnd() {
              this.state._active &&
                ((this.state._active = !1), this.compute(), this.emit());
            }
            bind(e) {
              let t = this.config.device;
              t &&
                (e(t, "start", this[t + "Start"].bind(this)),
                e(t, "change", this[t + "Move"].bind(this)),
                e(t, "end", this[t + "End"].bind(this)),
                e(t, "cancel", this[t + "End"].bind(this))),
                this.config.pinchOnWheel &&
                  e("wheel", "", this.wheel.bind(this), { passive: !1 });
            }
          },
          resolver: j,
        },
        H = {
          key: "scroll",
          engine: class extends S {
            constructor(...e) {
              super(...e), o(this, "ingKey", "scrolling");
            }
            scroll(e) {
              this.state._active || this.start(e),
                this.scrollChange(e),
                this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
            }
            scrollChange(e) {
              e.cancelable && e.preventDefault();
              let t = this.state,
                i = (function (e) {
                  var t, i;
                  let {
                    scrollX: n,
                    scrollY: r,
                    scrollLeft: s,
                    scrollTop: o,
                  } = e.currentTarget;
                  return [
                    null !== (t = null != n ? n : s) && void 0 !== t ? t : 0,
                    null !== (i = null != r ? r : o) && void 0 !== i ? i : 0,
                  ];
                })(e);
              (t._delta = n.sub(i, t._values)),
                n.addTo(t._movement, t._delta),
                this.computeValues(i),
                this.compute(e),
                this.emit();
            }
            scrollEnd() {
              this.state._active &&
                ((this.state._active = !1), this.compute(), this.emit());
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this));
            }
          },
          resolver: M,
        },
        G = {
          key: "wheel",
          engine: class extends S {
            constructor(...e) {
              super(...e), o(this, "ingKey", "wheeling");
            }
            wheel(e) {
              this.state._active || this.start(e),
                this.wheelChange(e),
                this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
            }
            wheelChange(e) {
              let t = this.state;
              (t._delta = _(e)),
                n.addTo(t._movement, t._delta),
                L(t),
                this.compute(e),
                this.emit();
            }
            wheelEnd() {
              this.state._active &&
                ((this.state._active = !1), this.compute(), this.emit());
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this));
            }
          },
          resolver: M,
        };
      var X = i(67294);
      let Z = {
          target(e) {
            if (e) return () => ("current" in e ? e.current : e);
          },
          enabled: (e = !0) => e,
          window: (e = R.isBrowser ? window : void 0) => e,
          eventOptions: ({ passive: e = !0, capture: t = !1 } = {}) => ({
            passive: e,
            capture: t,
          }),
          transform: (e) => e,
        },
        $ = ["target", "eventOptions", "window", "enabled", "transform"];
      function q(e = {}, t) {
        let i = {};
        for (let [n, r] of Object.entries(t))
          switch (typeof r) {
            case "function":
              i[n] = r.call(i, e[n], n, e);
              break;
            case "object":
              i[n] = q(e[n], r);
              break;
            case "boolean":
              r && (i[n] = e[n]);
          }
        return i;
      }
      class J {
        constructor(e, t) {
          o(this, "_listeners", new Set()),
            (this._ctrl = e),
            (this._gestureKey = t);
        }
        add(e, t, i, n, r) {
          let s = this._listeners,
            o = (function (e, t = "") {
              let i = l[e];
              return e + ((i && i[t]) || t);
            })(t, i),
            a = c(
              c(
                {},
                this._gestureKey
                  ? this._ctrl.config[this._gestureKey].eventOptions
                  : {}
              ),
              r
            );
          e.addEventListener(o, n, a);
          let u = () => {
            e.removeEventListener(o, n, a), s.delete(u);
          };
          return s.add(u), u;
        }
        clean() {
          this._listeners.forEach((e) => e()), this._listeners.clear();
        }
      }
      class Q {
        constructor() {
          o(this, "_timeouts", new Map());
        }
        add(e, t, i = 140, ...n) {
          this.remove(e), this._timeouts.set(e, window.setTimeout(t, i, ...n));
        }
        remove(e) {
          let t = this._timeouts.get(e);
          t && window.clearTimeout(t);
        }
        clean() {
          this._timeouts.forEach((e) => {
            window.clearTimeout(e);
          }),
            this._timeouts.clear();
        }
      }
      class ee {
        constructor(e) {
          o(this, "gestures", new Set()),
            o(this, "_targetEventStore", new J(this)),
            o(this, "gestureEventStores", {}),
            o(this, "gestureTimeoutStores", {}),
            o(this, "handlers", {}),
            o(this, "config", {}),
            o(this, "pointerIds", new Set()),
            o(this, "touchIds", new Set()),
            o(this, "state", {
              shared: { shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1 },
            }),
            e.drag && te(this, "drag"),
            e.wheel && te(this, "wheel"),
            e.scroll && te(this, "scroll"),
            e.move && te(this, "move"),
            e.pinch && te(this, "pinch"),
            e.hover && te(this, "hover");
        }
        setEventIds(e) {
          return p(e)
            ? ((this.touchIds = new Set(
                Array.from(e.touches)
                  .filter((t) => {
                    var i, n;
                    return (
                      t.target === e.currentTarget ||
                      (null === (i = e.currentTarget) ||
                      void 0 === i ||
                      null === (n = i.contains) ||
                      void 0 === n
                        ? void 0
                        : n.call(i, t.target))
                    );
                  })
                  .map((e) => e.identifier)
              )),
              this.touchIds)
            : "pointerId" in e
            ? ("pointerup" === e.type || "pointercancel" === e.type
                ? this.pointerIds.delete(e.pointerId)
                : "pointerdown" === e.type && this.pointerIds.add(e.pointerId),
              this.pointerIds)
            : void 0;
        }
        applyHandlers(e, t) {
          (this.handlers = e), (this.nativeHandlers = t);
        }
        applyConfig(e, t) {
          this.config = (function (e, t, i = {}) {
            let {
                target: n,
                eventOptions: r,
                window: s,
                enabled: o,
                transform: a,
              } = e,
              l = (function (e, t) {
                if (null == e) return {};
                var i,
                  n,
                  r = (function (e, t) {
                    if (null == e) return {};
                    var i,
                      n,
                      r = {},
                      s = Object.keys(e);
                    for (n = 0; n < s.length; n++)
                      (i = s[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
                    return r;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var s = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < s.length; n++)
                    (i = s[n]),
                      !(t.indexOf(i) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, i) &&
                        (r[i] = e[i]);
                }
                return r;
              })(e, $);
            if (
              ((i.shared = q(
                {
                  target: n,
                  eventOptions: r,
                  window: s,
                  enabled: o,
                  transform: a,
                },
                Z
              )),
              t)
            ) {
              let e = F.get(t);
              i[t] = q(c({ shared: i.shared }, l), e);
            } else
              for (let e in l) {
                let t = F.get(e);
                t && (i[e] = q(c({ shared: i.shared }, l[e]), t));
              }
            return i;
          })(e, t, this.config);
        }
        clean() {
          for (let e of (this._targetEventStore.clean(), this.gestures))
            this.gestureEventStores[e].clean(),
              this.gestureTimeoutStores[e].clean();
        }
        effect() {
          return (
            this.config.shared.target && this.bind(),
            () => this._targetEventStore.clean()
          );
        }
        bind(...e) {
          let t,
            i = this.config.shared,
            n = {};
          if (!i.target || (t = i.target())) {
            if (i.enabled) {
              for (let i of this.gestures) {
                let r = this.config[i],
                  s = ie(n, r.eventOptions, !!t);
                if (r.enabled) {
                  new (V.get(i))(this, e, i).bind(s);
                }
              }
              let r = ie(n, i.eventOptions, !!t);
              for (let t in this.nativeHandlers)
                r(
                  t,
                  "",
                  (i) =>
                    this.nativeHandlers[t](
                      c(c({}, this.state.shared), {}, { event: i, args: e })
                    ),
                  void 0,
                  !0
                );
            }
            for (let e in n)
              n[e] = (function (...e) {
                return 0 === e.length
                  ? k
                  : 1 === e.length
                  ? e[0]
                  : function () {
                      let t;
                      for (let i of e) t = i.apply(this, arguments) || t;
                      return t;
                    };
              })(...n[e]);
            if (!t) return n;
            for (let e in n) {
              let {
                device: i,
                capture: r,
                passive: s,
              } = (function (e) {
                let t = e.substring(2).toLowerCase(),
                  i = !!~t.indexOf("passive");
                i && (t = t.replace("passive", ""));
                let n = d.includes(t) ? "capturecapture" : "capture",
                  r = !!~t.indexOf(n);
                return (
                  r && (t = t.replace("capture", "")),
                  { device: t, capture: r, passive: i }
                );
              })(e);
              this._targetEventStore.add(t, i, "", n[e], {
                capture: r,
                passive: s,
              });
            }
          }
        }
      }
      function te(e, t) {
        e.gestures.add(t),
          (e.gestureEventStores[t] = new J(e, t)),
          (e.gestureTimeoutStores[t] = new Q());
      }
      let ie =
          (e, t, i) =>
          (n, r, s, o = {}, a = !1) => {
            var c, d;
            let p = null !== (c = o.capture) && void 0 !== c ? c : t.capture,
              f = null !== (d = o.passive) && void 0 !== d ? d : t.passive,
              v = a
                ? n
                : (function (e, t = "", i = !1) {
                    let n = l[e],
                      r = (n && n[t]) || t;
                    return (
                      "on" +
                      u(e) +
                      u(r) +
                      ((function (e = !1, t) {
                        return e && !h.includes(t);
                      })(i, r)
                        ? "Capture"
                        : "")
                    );
                  })(n, r, p);
            i && f && (v += "Passive"), (e[v] = e[v] || []), e[v].push(s);
          },
        ne = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
      function re(e, t, i, n, r, s) {
        if (!e.has(i) || !V.has(n)) return;
        let o = i + "Start",
          a = i + "End";
        (r[n] = (e) => {
          let n;
          return (
            e.first && o in t && t[o](e),
            i in t && (n = t[i](e)),
            e.last && a in t && t[a](e),
            n
          );
        }),
          (s[n] = s[n] || {});
      }
      function se(e, t) {
        return ([z, Y, H, G, W, U].forEach(N),
        function (e, t) {
          let {
            handlers: i,
            nativeHandlers: n,
            config: r,
          } = (function (e, t) {
            let [i, n, r] = (function (e) {
                let t = {},
                  i = {},
                  n = new Set();
                for (let r in e)
                  ne.test(r)
                    ? (n.add(RegExp.lastMatch), (i[r] = e[r]))
                    : (t[r] = e[r]);
                return [i, t, n];
              })(e),
              s = {};
            return (
              re(r, i, "onDrag", "drag", s, t),
              re(r, i, "onWheel", "wheel", s, t),
              re(r, i, "onScroll", "scroll", s, t),
              re(r, i, "onPinch", "pinch", s, t),
              re(r, i, "onMove", "move", s, t),
              re(r, i, "onHover", "hover", s, t),
              { handlers: s, config: t, nativeHandlers: n }
            );
          })(e, t || {});
          return (function (e, t = {}, i, n) {
            let r = X.useMemo(() => new ee(e), []);
            if (
              (r.applyHandlers(e, n),
              r.applyConfig(t, i),
              X.useEffect(r.effect.bind(r)),
              X.useEffect(() => r.clean.bind(r), []),
              void 0 === t.target)
            )
              return r.bind.bind(r);
          })(i, r, void 0, n);
        })(e, t || {});
      }
    },
    85769: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = i(67294);
      function r(e, t) {
        return e === t;
      }
      function s(e) {
        return "function" == typeof e
          ? function () {
              return e;
            }
          : e;
      }
      function o(e, t, i) {
        var o,
          a,
          c,
          l = (i && i.equalityFn) || r,
          u =
            ((a = (o = (0, n.useState)(s(e)))[0]),
            (c = o[1]),
            [
              a,
              (0, n.useCallback)(function (e) {
                return c(s(e));
              }, []),
            ]),
          h = u[0],
          d = u[1],
          p = (function (e, t, i) {
            var r = this,
              s = (0, n.useRef)(null),
              o = (0, n.useRef)(0),
              a = (0, n.useRef)(null),
              c = (0, n.useRef)([]),
              l = (0, n.useRef)(),
              u = (0, n.useRef)(),
              h = (0, n.useRef)(e),
              d = (0, n.useRef)(!0);
            h.current = e;
            var p = !t && 0 !== t && "undefined" != typeof window;
            if ("function" != typeof e) throw TypeError("Expected a function");
            t = +t || 0;
            var f = !!(i = i || {}).leading,
              v = !("trailing" in i) || !!i.trailing,
              m = "maxWait" in i,
              g = m ? Math.max(+i.maxWait || 0, t) : null;
            return (
              (0, n.useEffect)(function () {
                return (
                  (d.current = !0),
                  function () {
                    d.current = !1;
                  }
                );
              }, []),
              (0, n.useMemo)(
                function () {
                  var e = function (e) {
                      var t = c.current,
                        i = l.current;
                      return (
                        (c.current = l.current = null),
                        (o.current = e),
                        (u.current = h.current.apply(i, t))
                      );
                    },
                    i = function (e, t) {
                      p && cancelAnimationFrame(a.current),
                        (a.current = p
                          ? requestAnimationFrame(e)
                          : setTimeout(e, t));
                    },
                    n = function (e) {
                      if (!d.current) return !1;
                      var i = e - s.current,
                        n = e - o.current;
                      return !s.current || i >= t || i < 0 || (m && n >= g);
                    },
                    b = function (t) {
                      return (
                        (a.current = null),
                        v && c.current
                          ? e(t)
                          : ((c.current = l.current = null), u.current)
                      );
                    },
                    y = function () {
                      var e = Date.now();
                      if (n(e)) return b(e);
                      if (d.current) {
                        var r = e - s.current,
                          a = e - o.current,
                          c = t - r;
                        i(y, m ? Math.min(c, g - a) : c);
                      }
                    },
                    _ = function () {
                      for (var h = [], p = 0; p < arguments.length; p++)
                        h[p] = arguments[p];
                      var v = Date.now(),
                        g = n(v);
                      if (
                        ((c.current = h), (l.current = r), (s.current = v), g)
                      ) {
                        if (!a.current && d.current)
                          return (
                            (o.current = s.current),
                            i(y, t),
                            f ? e(s.current) : u.current
                          );
                        if (m) return i(y, t), e(s.current);
                      }
                      return a.current || i(y, t), u.current;
                    };
                  return (
                    (_.cancel = function () {
                      a.current &&
                        (p
                          ? cancelAnimationFrame(a.current)
                          : clearTimeout(a.current)),
                        (o.current = 0),
                        (c.current = s.current = l.current = a.current = null);
                    }),
                    (_.isPending = function () {
                      return !!a.current;
                    }),
                    (_.flush = function () {
                      return a.current ? b(Date.now()) : u.current;
                    }),
                    _
                  );
                },
                [f, m, t, g, v, p]
              )
            );
          })(
            (0, n.useCallback)(
              function (e) {
                return d(e);
              },
              [d]
            ),
            t,
            i
          ),
          f = (0, n.useRef)(e);
        return l(f.current, e) || (p(e), (f.current = e)), [h, p];
      }
    },
    17690: function (e, t, i) {
      i.d(t, {
        E: function () {
          return M;
        },
      });
      var n,
        r,
        s = i(67294),
        o = i(12351),
        a = i(19946),
        c = i(32984),
        l = i(16723),
        u = i(61363),
        h = i(84575),
        d = i(23784),
        p = i(73781);
      let f = (0, s.createContext)(null);
      function v() {
        let [e, t] = (0, s.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, s.useMemo)(
            () =>
              function (e) {
                let i = (0, p.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let i = t.slice(),
                            n = i.indexOf(e);
                          return -1 !== n && i.splice(n, 1), i;
                        })
                    )
                  ),
                  n = (0, s.useMemo)(
                    () => ({
                      register: i,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [i, e.slot, e.name, e.props]
                  );
                return s.createElement(f.Provider, { value: n }, e.children);
              },
            [t]
          ),
        ];
      }
      let m = (0, o.yV)(function (e, t) {
        let { passive: i = !1, ...n } = e,
          r = (function e() {
            let t = (0, s.useContext)(f);
            if (null === t) {
              let t = Error(
                "You used a <Label /> component, but it is not inside a relevant parent."
              );
              throw (
                (Error.captureStackTrace && Error.captureStackTrace(t, e), t)
              );
            }
            return t;
          })(),
          c = `headlessui-label-${(0, a.M)()}`,
          u = (0, d.T)(t);
        (0, l.e)(() => r.register(c), [c, r.register]);
        let h = { ref: u, ...r.props, id: c };
        return (
          i &&
            ("onClick" in h && delete h.onClick,
            "onClick" in n && delete n.onClick),
          (0, o.sY)({
            ourProps: h,
            theirProps: n,
            slot: r.slot || {},
            defaultTag: "label",
            name: r.name || "Label",
          })
        );
      });
      var g = i(39516),
        b = i(15466),
        y = i(46045);
      function _(e, t) {
        return e ? e + "[" + t + "]" : t;
      }
      var w = i(64103),
        k =
          (((n = k || {})[(n.RegisterOption = 0)] = "RegisterOption"),
          (n[(n.UnregisterOption = 1)] = "UnregisterOption"),
          n);
      let E = {
          0(e, t) {
            let i = [
              ...e.options,
              { id: t.id, element: t.element, propsRef: t.propsRef },
            ];
            return { ...e, options: (0, h.z2)(i, (e) => e.element.current) };
          },
          1(e, t) {
            let i = e.options.slice(),
              n = e.options.findIndex((e) => e.id === t.id);
            return -1 === n ? e : (i.splice(n, 1), { ...e, options: i });
          },
        },
        T = (0, s.createContext)(null);
      function S(e, t) {
        return (0, c.E)(t.type, E, e, t);
      }
      T.displayName = "RadioGroupContext";
      let O = (0, o.yV)(function (e, t) {
        let {
            value: i,
            defaultValue: n,
            name: r,
            onChange: c,
            by: f = (e, t) => e === t,
            disabled: m = !1,
            ...w
          } = e,
          k = (0, p.z)(
            "string" == typeof f
              ? (e, t) =>
                  (null == e ? void 0 : e[f]) === (null == t ? void 0 : t[f])
              : f
          ),
          [E, O] = (0, s.useReducer)(S, { options: [] }),
          x = E.options,
          [M, C] = v(),
          [I, A] = (0, g.f)(),
          R = `headlessui-radiogroup-${(0, a.M)()}`,
          P = (0, s.useRef)(null),
          D = (0, d.T)(P, t),
          [L, j] = (function (e, t, i) {
            let [n, r] = (0, s.useState)(i),
              o = void 0 !== e,
              a = (0, s.useRef)(o),
              c = (0, s.useRef)(!1),
              l = (0, s.useRef)(!1);
            return (
              !o || a.current || c.current
                ? o ||
                  !a.current ||
                  l.current ||
                  ((l.current = !0),
                  (a.current = o),
                  console.error(
                    "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
                  ))
                : ((c.current = !0),
                  (a.current = o),
                  console.error(
                    "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
                  )),
              [
                o ? e : n,
                (0, p.z)((e) => (o || r(e), null == t ? void 0 : t(e))),
              ]
            );
          })(i, c, n),
          K = (0, s.useMemo)(
            () => x.find((e) => !e.propsRef.current.disabled),
            [x]
          ),
          B = (0, s.useMemo)(
            () => x.some((e) => k(e.propsRef.current.value, L)),
            [x, L]
          ),
          V = (0, p.z)((e) => {
            var t;
            if (m || k(e, L)) return !1;
            let i =
              null == (t = x.find((t) => k(t.propsRef.current.value, e)))
                ? void 0
                : t.propsRef.current;
            return !((null != i && i.disabled) || (null == j || j(e), 0));
          });
        !(function ({ container: e, accept: t, walk: i, enabled: n = !0 }) {
          let r = (0, s.useRef)(t),
            o = (0, s.useRef)(i);
          (0, s.useEffect)(() => {
            (r.current = t), (o.current = i);
          }, [t, i]),
            (0, l.e)(() => {
              if (!e || !n) return;
              let t = (0, b.r)(e);
              if (!t) return;
              let i = r.current,
                s = o.current,
                a = Object.assign((e) => i(e), { acceptNode: i }),
                c = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, a, !1);
              for (; c.nextNode(); ) s(c.currentNode);
            }, [e, n, r, o]);
        })({
          container: P.current,
          accept: (e) =>
            "radio" === e.getAttribute("role")
              ? NodeFilter.FILTER_REJECT
              : e.hasAttribute("role")
              ? NodeFilter.FILTER_SKIP
              : NodeFilter.FILTER_ACCEPT,
          walk(e) {
            e.setAttribute("role", "none");
          },
        });
        let F = (0, p.z)((e) => {
            let t = P.current;
            if (!t) return;
            let i = (0, b.r)(t),
              n = x
                .filter((e) => !1 === e.propsRef.current.disabled)
                .map((e) => e.element.current);
            switch (e.key) {
              case u.R.Enter:
                !(function (e) {
                  var t;
                  let i =
                    null != (t = null == e ? void 0 : e.form)
                      ? t
                      : e.closest("form");
                  if (i)
                    for (let e of i.elements)
                      if (
                        ("INPUT" === e.tagName && "submit" === e.type) ||
                        ("BUTTON" === e.tagName && "submit" === e.type) ||
                        ("INPUT" === e.nodeName && "image" === e.type)
                      )
                        return void e.click();
                })(e.currentTarget);
                break;
              case u.R.ArrowLeft:
              case u.R.ArrowUp:
                if (
                  (e.preventDefault(),
                  e.stopPropagation(),
                  (0, h.jA)(n, h.TO.Previous | h.TO.WrapAround) ===
                    h.fE.Success)
                ) {
                  let e = x.find(
                    (e) =>
                      e.element.current ===
                      (null == i ? void 0 : i.activeElement)
                  );
                  e && V(e.propsRef.current.value);
                }
                break;
              case u.R.ArrowRight:
              case u.R.ArrowDown:
                if (
                  (e.preventDefault(),
                  e.stopPropagation(),
                  (0, h.jA)(n, h.TO.Next | h.TO.WrapAround) === h.fE.Success)
                ) {
                  let e = x.find(
                    (e) =>
                      e.element.current ===
                      (null == i ? void 0 : i.activeElement)
                  );
                  e && V(e.propsRef.current.value);
                }
                break;
              case u.R.Space: {
                e.preventDefault(), e.stopPropagation();
                let t = x.find(
                  (e) =>
                    e.element.current === (null == i ? void 0 : i.activeElement)
                );
                t && V(t.propsRef.current.value);
              }
            }
          }),
          N = (0, p.z)(
            (e) => (O({ type: 0, ...e }), () => O({ type: 1, id: e.id }))
          ),
          z = (0, s.useMemo)(
            () => ({
              registerOption: N,
              firstOption: K,
              containsCheckedOption: B,
              change: V,
              disabled: m,
              value: L,
              compare: k,
            }),
            [N, K, B, V, m, L, k]
          ),
          U = (0, s.useMemo)(() => ({ value: L }), [L]);
        return s.createElement(
          A,
          { name: "RadioGroup.Description" },
          s.createElement(
            C,
            { name: "RadioGroup.Label" },
            s.createElement(
              T.Provider,
              { value: z },
              null != r &&
                null != L &&
                (function e(t = {}, i = null, n = []) {
                  for (let [r, s] of Object.entries(t))
                    !(function t(i, n, r) {
                      if (Array.isArray(r))
                        for (let [e, s] of r.entries())
                          t(i, _(n, e.toString()), s);
                      else
                        r instanceof Date
                          ? i.push([n, r.toISOString()])
                          : "boolean" == typeof r
                          ? i.push([n, r ? "1" : "0"])
                          : "string" == typeof r
                          ? i.push([n, r])
                          : "number" == typeof r
                          ? i.push([n, `${r}`])
                          : null == r
                          ? i.push([n, ""])
                          : e(r, n, i);
                    })(n, _(i, r), s);
                  return n;
                })({ [r]: L }).map(([e, t]) =>
                  s.createElement(y._, {
                    features: y.A.Hidden,
                    ...(0, o.oA)({
                      key: e,
                      as: "input",
                      type: "radio",
                      checked: null != t,
                      hidden: !0,
                      readOnly: !0,
                      name: e,
                      value: t,
                    }),
                  })
                ),
              (0, o.sY)({
                ourProps: {
                  ref: D,
                  id: R,
                  role: "radiogroup",
                  "aria-labelledby": M,
                  "aria-describedby": I,
                  onKeyDown: F,
                },
                theirProps: w,
                slot: U,
                defaultTag: "div",
                name: "RadioGroup",
              })
            )
          )
        );
      });
      var x =
        (((r = x || {})[(r.Empty = 1)] = "Empty"),
        (r[(r.Active = 2)] = "Active"),
        r);
      let M = Object.assign(O, {
        Option: (0, o.yV)(function (e, t) {
          let i = (0, s.useRef)(null),
            n = (0, d.T)(i, t),
            r = `headlessui-radiogroup-option-${(0, a.M)()}`,
            [c, u] = v(),
            [h, f] = (0, g.f)(),
            {
              addFlag: m,
              removeFlag: b,
              hasFlag: y,
            } = (function (e = 0) {
              let [t, i] = (0, s.useState)(e);
              return {
                addFlag: (0, s.useCallback)((e) => i((t) => t | e), [t]),
                hasFlag: (0, s.useCallback)((e) => Boolean(t & e), [t]),
                removeFlag: (0, s.useCallback)((e) => i((t) => t & ~e), [i]),
                toggleFlag: (0, s.useCallback)((e) => i((t) => t ^ e), [i]),
              };
            })(1),
            { value: _, disabled: k = !1, ...E } = e,
            S = (0, s.useRef)({ value: _, disabled: k });
          (0, l.e)(() => {
            S.current.value = _;
          }, [_, S]),
            (0, l.e)(() => {
              S.current.disabled = k;
            }, [k, S]);
          let {
            registerOption: O,
            disabled: x,
            change: M,
            firstOption: C,
            containsCheckedOption: I,
            value: A,
            compare: R,
          } = (function e(t) {
            let i = (0, s.useContext)(T);
            if (null === i) {
              let i = Error(
                `<${t} /> is missing a parent <RadioGroup /> component.`
              );
              throw (
                (Error.captureStackTrace && Error.captureStackTrace(i, e), i)
              );
            }
            return i;
          })("RadioGroup.Option");
          (0, l.e)(() => O({ id: r, element: i, propsRef: S }), [r, O, i, e]);
          let P = (0, p.z)((e) => {
              var t;
              if ((0, w.P)(e.currentTarget)) return e.preventDefault();
              M(_) && (m(2), null == (t = i.current) || t.focus());
            }),
            D = (0, p.z)((e) => {
              if ((0, w.P)(e.currentTarget)) return e.preventDefault();
              m(2);
            }),
            L = (0, p.z)(() => b(2)),
            j = (null == C ? void 0 : C.id) === r,
            K = x || k,
            B = R(A, _),
            V = (0, s.useMemo)(
              () => ({ checked: B, disabled: K, active: y(2) }),
              [B, K, y]
            );
          return s.createElement(
            f,
            { name: "RadioGroup.Description" },
            s.createElement(
              u,
              { name: "RadioGroup.Label" },
              (0, o.sY)({
                ourProps: {
                  ref: n,
                  id: r,
                  role: "radio",
                  "aria-checked": B ? "true" : "false",
                  "aria-labelledby": c,
                  "aria-describedby": h,
                  "aria-disabled": !!K || void 0,
                  tabIndex: K ? -1 : B || (!I && j) ? 0 : -1,
                  onClick: K ? void 0 : P,
                  onFocus: K ? void 0 : D,
                  onBlur: K ? void 0 : L,
                },
                theirProps: E,
                slot: V,
                defaultTag: "div",
                name: "RadioGroup.Option",
              })
            )
          );
        }),
        Label: m,
        Description: g.d,
      });
    },
    55563: function (e, t, i) {
      var n = i(67294);
      let r = n.forwardRef(function (e, t) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M11 19l-7-7 7-7m8 14l-7-7 7-7",
          })
        );
      });
      t.Z = r;
    },
    61731: function (e, t, i) {
      var n = i(67294);
      let r = n.forwardRef(function (e, t) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13 5l7 7-7 7M5 5l7 7-7 7",
          })
        );
      });
      t.Z = r;
    },
    61782: function (e, t, i) {
      var n = i(67294);
      let r = n.forwardRef(function (e, t) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 9l-7 7-7-7",
          })
        );
      });
      t.Z = r;
    },
    68121: function (e, t, i) {
      var n = i(67294);
      let r = n.forwardRef(function (e, t) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 19l-7-7 7-7",
          })
        );
      });
      t.Z = r;
    },
    40169: function (e, t, i) {
      var n = i(67294);
      let r = n.forwardRef(function (e, t) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 5l7 7-7 7",
          })
        );
      });
      t.Z = r;
    },
  },
]);
