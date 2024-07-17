var Ur = { exports: {} }, mr = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Vt() {
  if (dt) return mr;
  dt = 1;
  var m = Symbol.for("react.fragment");
  return mr.Fragment = m, mr.jsxDEV = void 0, mr;
}
var hr = {}, Vr = { exports: {} }, g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Lt() {
  if (pt) return g;
  pt = 1;
  var m = Symbol.for("react.element"), f = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), V = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), B = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), ne = Symbol.iterator;
  function oe(n) {
    return n === null || typeof n != "object" ? null : (n = ne && n[ne] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, Fe = {};
  function ue(n, u, _) {
    this.props = n, this.context = u, this.refs = Fe, this.updater = _ || ie;
  }
  ue.prototype.isReactComponent = {}, ue.prototype.setState = function(n, u) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, u, "setState");
  }, ue.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function se() {
  }
  se.prototype = ue.prototype;
  function N(n, u, _) {
    this.props = n, this.context = u, this.refs = Fe, this.updater = _ || ie;
  }
  var ge = N.prototype = new se();
  ge.constructor = N, fe(ge, ue.prototype), ge.isPureReactComponent = !0;
  var le = Array.isArray, L = Object.prototype.hasOwnProperty, Z = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function me(n, u, _) {
    var R, w = {}, P = null, T = null;
    if (u != null) for (R in u.ref !== void 0 && (T = u.ref), u.key !== void 0 && (P = "" + u.key), u) L.call(u, R) && !de.hasOwnProperty(R) && (w[R] = u[R]);
    var O = arguments.length - 2;
    if (O === 1) w.children = _;
    else if (1 < O) {
      for (var k = Array(O), M = 0; M < O; M++) k[M] = arguments[M + 2];
      w.children = k;
    }
    if (n && n.defaultProps) for (R in O = n.defaultProps, O) w[R] === void 0 && (w[R] = O[R]);
    return { $$typeof: m, type: n, key: P, ref: T, props: w, _owner: Z.current };
  }
  function we(n, u) {
    return { $$typeof: m, type: n.type, key: u, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function ke(n) {
    return typeof n == "object" && n !== null && n.$$typeof === m;
  }
  function Be(n) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(_) {
      return u[_];
    });
  }
  var Oe = /\/+/g;
  function J(n, u) {
    return typeof n == "object" && n !== null && n.key != null ? Be("" + n.key) : u.toString(36);
  }
  function re(n, u, _, R, w) {
    var P = typeof n;
    (P === "undefined" || P === "boolean") && (n = null);
    var T = !1;
    if (n === null) T = !0;
    else switch (P) {
      case "string":
      case "number":
        T = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case m:
          case f:
            T = !0;
        }
    }
    if (T) return T = n, w = w(T), n = R === "" ? "." + J(T, 0) : R, le(w) ? (_ = "", n != null && (_ = n.replace(Oe, "$&/") + "/"), re(w, u, _, "", function(M) {
      return M;
    })) : w != null && (ke(w) && (w = we(w, _ + (!w.key || T && T.key === w.key ? "" : ("" + w.key).replace(Oe, "$&/") + "/") + n)), u.push(w)), 1;
    if (T = 0, R = R === "" ? "." : R + ":", le(n)) for (var O = 0; O < n.length; O++) {
      P = n[O];
      var k = R + J(P, O);
      T += re(P, u, _, k, w);
    }
    else if (k = oe(n), typeof k == "function") for (n = k.call(n), O = 0; !(P = n.next()).done; ) P = P.value, k = R + J(P, O++), T += re(P, u, _, k, w);
    else if (P === "object") throw u = String(n), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return T;
  }
  function K(n, u, _) {
    if (n == null) return n;
    var R = [], w = 0;
    return re(n, R, "", "", function(P) {
      return u.call(_, P, w++);
    }), R;
  }
  function ce(n) {
    if (n._status === -1) {
      var u = n._result;
      u = u(), u.then(function(_) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = _);
      }, function(_) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = _);
      }), n._status === -1 && (n._status = 0, n._result = u);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var d = { current: null }, pe = { transition: null }, Te = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: pe, ReactCurrentOwner: Z };
  function he() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return g.Children = { map: K, forEach: function(n, u, _) {
    K(n, function() {
      u.apply(this, arguments);
    }, _);
  }, count: function(n) {
    var u = 0;
    return K(n, function() {
      u++;
    }), u;
  }, toArray: function(n) {
    return K(n, function(u) {
      return u;
    }) || [];
  }, only: function(n) {
    if (!ke(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = ue, g.Fragment = Q, g.Profiler = W, g.PureComponent = N, g.StrictMode = x, g.Suspense = z, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, g.act = he, g.cloneElement = function(n, u, _) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var R = fe({}, n.props), w = n.key, P = n.ref, T = n._owner;
    if (u != null) {
      if (u.ref !== void 0 && (P = u.ref, T = Z.current), u.key !== void 0 && (w = "" + u.key), n.type && n.type.defaultProps) var O = n.type.defaultProps;
      for (k in u) L.call(u, k) && !de.hasOwnProperty(k) && (R[k] = u[k] === void 0 && O !== void 0 ? O[k] : u[k]);
    }
    var k = arguments.length - 2;
    if (k === 1) R.children = _;
    else if (1 < k) {
      O = Array(k);
      for (var M = 0; M < k; M++) O[M] = arguments[M + 2];
      R.children = O;
    }
    return { $$typeof: m, type: n.type, key: w, ref: P, props: R, _owner: T };
  }, g.createContext = function(n) {
    return n = { $$typeof: V, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: U, _context: n }, n.Consumer = n;
  }, g.createElement = me, g.createFactory = function(n) {
    var u = me.bind(null, n);
    return u.type = n, u;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: ee, render: n };
  }, g.isValidElement = ke, g.lazy = function(n) {
    return { $$typeof: G, _payload: { _status: -1, _result: n }, _init: ce };
  }, g.memo = function(n, u) {
    return { $$typeof: B, type: n, compare: u === void 0 ? null : u };
  }, g.startTransition = function(n) {
    var u = pe.transition;
    pe.transition = {};
    try {
      n();
    } finally {
      pe.transition = u;
    }
  }, g.unstable_act = he, g.useCallback = function(n, u) {
    return d.current.useCallback(n, u);
  }, g.useContext = function(n) {
    return d.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return d.current.useDeferredValue(n);
  }, g.useEffect = function(n, u) {
    return d.current.useEffect(n, u);
  }, g.useId = function() {
    return d.current.useId();
  }, g.useImperativeHandle = function(n, u, _) {
    return d.current.useImperativeHandle(n, u, _);
  }, g.useInsertionEffect = function(n, u) {
    return d.current.useInsertionEffect(n, u);
  }, g.useLayoutEffect = function(n, u) {
    return d.current.useLayoutEffect(n, u);
  }, g.useMemo = function(n, u) {
    return d.current.useMemo(n, u);
  }, g.useReducer = function(n, u, _) {
    return d.current.useReducer(n, u, _);
  }, g.useRef = function(n) {
    return d.current.useRef(n);
  }, g.useState = function(n) {
    return d.current.useState(n);
  }, g.useSyncExternalStore = function(n, u, _) {
    return d.current.useSyncExternalStore(n, u, _);
  }, g.useTransition = function() {
    return d.current.useTransition();
  }, g.version = "18.3.1", g;
}
var Je = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Je.exports;
var vt;
function Mt() {
  return vt || (vt = 1, function(m, f) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Q = "18.3.1", x = Symbol.for("react.element"), W = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), B = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Fe = Symbol.for("react.offscreen"), ue = Symbol.iterator, se = "@@iterator";
      function N(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ue && e[ue] || e[se];
        return typeof r == "function" ? r : null;
      }
      var ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, le = {
        transition: null
      }, L = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, de = {}, me = null;
      function we(e) {
        me = e;
      }
      de.setExtraStackFrame = function(e) {
        me = e;
      }, de.getCurrentStack = null, de.getStackAddendum = function() {
        var e = "";
        me && (e += me);
        var r = de.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var ke = !1, Be = !1, Oe = !1, J = !1, re = !1, K = {
        ReactCurrentDispatcher: ge,
        ReactCurrentBatchConfig: le,
        ReactCurrentOwner: Z
      };
      K.ReactDebugCurrentFrame = de, K.ReactCurrentActQueue = L;
      function ce(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          pe("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          pe("error", e, a);
        }
      }
      function pe(e, r, a) {
        {
          var o = K.ReactDebugCurrentFrame, s = o.getStackAddendum();
          s !== "" && (r += "%s", a = a.concat([s]));
          var v = a.map(function(c) {
            return String(c);
          });
          v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
        }
      }
      var Te = {};
      function he(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", s = o + "." + r;
          if (Te[s])
            return;
          d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Te[s] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          he(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          he(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          he(e, "setState");
        }
      }, u = Object.assign, _ = {};
      Object.freeze(_);
      function R(e, r, a) {
        this.props = e, this.context = r, this.refs = _, this.updater = a || n;
      }
      R.prototype.isReactComponent = {}, R.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, R.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var w = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, P = function(e, r) {
          Object.defineProperty(R.prototype, e, {
            get: function() {
              ce("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var T in w)
          w.hasOwnProperty(T) && P(T, w[T]);
      }
      function O() {
      }
      O.prototype = R.prototype;
      function k(e, r, a) {
        this.props = e, this.context = r, this.refs = _, this.updater = a || n;
      }
      var M = k.prototype = new O();
      M.constructor = k, u(M, R.prototype), M.isPureReactComponent = !0;
      function yr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Xe = Array.isArray;
      function Ie(e) {
        return Xe(e);
      }
      function br(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function We(e) {
        try {
          return _e(e), !1;
        } catch {
          return !0;
        }
      }
      function _e(e) {
        return "" + e;
      }
      function De(e) {
        if (We(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(e)), _e(e);
      }
      function Qe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var s = r.displayName || r.name || "";
        return s !== "" ? a + "(" + s + ")" : a;
      }
      function Pe(e) {
        return e.displayName || "Context";
      }
      function ve(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case U:
            return "Fragment";
          case W:
            return "Portal";
          case ee:
            return "Profiler";
          case V:
            return "StrictMode";
          case ne:
            return "Suspense";
          case oe:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case B:
              var r = e;
              return Pe(r) + ".Consumer";
            case z:
              var a = e;
              return Pe(a._context) + ".Provider";
            case G:
              return Qe(e, e.render, "ForwardRef");
            case ie:
              var o = e.displayName || null;
              return o !== null ? o : ve(e.type) || "Memo";
            case fe: {
              var s = e, v = s._payload, c = s._init;
              try {
                return ve(c(v));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var xe = Object.prototype.hasOwnProperty, Ue = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, Ve;
      Ve = {};
      function ze(e) {
        if (xe.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Ee(e) {
        if (xe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function gr(e, r) {
        var a = function() {
          Ze || (Ze = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function rr(e, r) {
        var a = function() {
          er || (er = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && Z.current && e.__self && Z.current.stateNode !== e.__self) {
          var r = ve(Z.current.type);
          Ve[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ve[r] = !0);
        }
      }
      var je = function(e, r, a, o, s, v, c) {
        var h = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: x,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: c,
          // Record the component responsible for creating this element.
          _owner: v
        };
        return h._store = {}, Object.defineProperty(h._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(h, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(h, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: s
        }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
      };
      function _r(e, r, a) {
        var o, s = {}, v = null, c = null, h = null, C = null;
        if (r != null) {
          ze(r) && (c = r.ref, tr(r)), Ee(r) && (De(r.key), v = "" + r.key), h = r.__self === void 0 ? null : r.__self, C = r.__source === void 0 ? null : r.__source;
          for (o in r)
            xe.call(r, o) && !Ue.hasOwnProperty(o) && (s[o] = r[o]);
        }
        var D = arguments.length - 2;
        if (D === 1)
          s.children = a;
        else if (D > 1) {
          for (var j = Array(D), A = 0; A < D; A++)
            j[A] = arguments[A + 2];
          Object.freeze && Object.freeze(j), s.children = j;
        }
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (o in F)
            s[o] === void 0 && (s[o] = F[o]);
        }
        if (v || c) {
          var Y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && gr(s, Y), c && rr(s, Y);
        }
        return je(e, v, c, h, C, Z.current, s);
      }
      function Er(e, r) {
        var a = je(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Rr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, s = u({}, e.props), v = e.key, c = e.ref, h = e._self, C = e._source, D = e._owner;
        if (r != null) {
          ze(r) && (c = r.ref, D = Z.current), Ee(r) && (De(r.key), v = "" + r.key);
          var j;
          e.type && e.type.defaultProps && (j = e.type.defaultProps);
          for (o in r)
            xe.call(r, o) && !Ue.hasOwnProperty(o) && (r[o] === void 0 && j !== void 0 ? s[o] = j[o] : s[o] = r[o]);
        }
        var A = arguments.length - 2;
        if (A === 1)
          s.children = a;
        else if (A > 1) {
          for (var F = Array(A), Y = 0; Y < A; Y++)
            F[Y] = arguments[Y + 2];
          s.children = F;
        }
        return je(e.type, v, c, h, C, D, s);
      }
      function Re(e) {
        return typeof e == "object" && e !== null && e.$$typeof === x;
      }
      var nr = ".", Cr = ":";
      function Sr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(s) {
          return a[s];
        });
        return "$" + o;
      }
      var Le = !1, ar = /\/+/g;
      function ye(e) {
        return e.replace(ar, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (De(e.key), Sr("" + e.key)) : r.toString(36);
      }
      function Ce(e, r, a, o, s) {
        var v = typeof e;
        (v === "undefined" || v === "boolean") && (e = null);
        var c = !1;
        if (e === null)
          c = !0;
        else
          switch (v) {
            case "string":
            case "number":
              c = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case x:
                case W:
                  c = !0;
              }
          }
        if (c) {
          var h = e, C = s(h), D = o === "" ? nr + Ae(h, 0) : o;
          if (Ie(C)) {
            var j = "";
            D != null && (j = ye(D) + "/"), Ce(C, r, j, "", function(Ut) {
              return Ut;
            });
          } else C != null && (Re(C) && (C.key && (!h || h.key !== C.key) && De(C.key), C = Er(
            C,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (C.key && (!h || h.key !== C.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ye("" + C.key) + "/"
            ) : "") + D
          )), r.push(C));
          return 1;
        }
        var A, F, Y = 0, H = o === "" ? nr : o + Cr;
        if (Ie(e))
          for (var vr = 0; vr < e.length; vr++)
            A = e[vr], F = H + Ae(A, vr), Y += Ce(A, r, a, F, s);
        else {
          var Wr = N(e);
          if (typeof Wr == "function") {
            var lt = e;
            Wr === lt.entries && (Le || ce("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Le = !0);
            for (var It = Wr.call(lt), ct, Wt = 0; !(ct = It.next()).done; )
              A = ct.value, F = H + Ae(A, Wt++), Y += Ce(A, r, a, F, s);
          } else if (v === "object") {
            var ft = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (ft === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : ft) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Y;
      }
      function Ne(e, r, a) {
        if (e == null)
          return e;
        var o = [], s = 0;
        return Ce(e, o, "", "", function(v) {
          return r.call(a, v, s++);
        }), o;
      }
      function wr(e) {
        var r = 0;
        return Ne(e, function() {
          r++;
        }), r;
      }
      function or(e, r, a) {
        Ne(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function kr(e) {
        return Ne(e, function(r) {
          return r;
        }) || [];
      }
      function ir(e) {
        if (!Re(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ur(e) {
        var r = {
          $$typeof: B,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: z,
          _context: r
        };
        var a = !1, o = !1, s = !1;
        {
          var v = {
            $$typeof: B,
            _context: r
          };
          Object.defineProperties(v, {
            Provider: {
              get: function() {
                return o || (o = !0, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(c) {
                r.Provider = c;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(c) {
                r._currentValue = c;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(c) {
                r._currentValue2 = c;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(c) {
                r._threadCount = c;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(c) {
                s || (ce("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", c), s = !0);
              }
            }
          }), r.Consumer = v;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var $e = -1, Ke = 0, qe = 1, Or = 2;
      function Tr(e) {
        if (e._status === $e) {
          var r = e._result, a = r();
          if (a.then(function(v) {
            if (e._status === Ke || e._status === $e) {
              var c = e;
              c._status = qe, c._result = v;
            }
          }, function(v) {
            if (e._status === Ke || e._status === $e) {
              var c = e;
              c._status = Or, c._result = v;
            }
          }), e._status === $e) {
            var o = e;
            o._status = Ke, o._result = a;
          }
        }
        if (e._status === qe) {
          var s = e._result;
          return s === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, s), "default" in s || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, s), s.default;
        } else
          throw e._result;
      }
      function t(e) {
        var r = {
          // We use these fields to store the result.
          _status: $e,
          _result: e
        }, a = {
          $$typeof: fe,
          _payload: r,
          _init: Tr
        };
        {
          var o, s;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(v) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = v, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return s;
              },
              set: function(v) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), s = v, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function i(e) {
        e != null && e.$$typeof === ie ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: G,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var l;
      l = Symbol.for("react.module.reference");
      function p(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === U || e === ee || re || e === V || e === ne || e === oe || J || e === Fe || ke || Be || Oe || typeof e == "object" && e !== null && (e.$$typeof === fe || e.$$typeof === ie || e.$$typeof === z || e.$$typeof === B || e.$$typeof === G || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === l || e.getModuleId !== void 0));
      }
      function S(e, r) {
        p(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: ie,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(s) {
              o = s, !e.name && !e.displayName && (e.displayName = s);
            }
          });
        }
        return a;
      }
      function y() {
        var e = ge.current;
        return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function E(e) {
        var r = y();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function b(e) {
        var r = y();
        return r.useState(e);
      }
      function q(e, r, a) {
        var o = y();
        return o.useReducer(e, r, a);
      }
      function $(e) {
        var r = y();
        return r.useRef(e);
      }
      function I(e, r) {
        var a = y();
        return a.useEffect(e, r);
      }
      function te(e, r) {
        var a = y();
        return a.useInsertionEffect(e, r);
      }
      function Se(e, r) {
        var a = y();
        return a.useLayoutEffect(e, r);
      }
      function be(e, r) {
        var a = y();
        return a.useCallback(e, r);
      }
      function X(e, r) {
        var a = y();
        return a.useMemo(e, r);
      }
      function He(e, r, a) {
        var o = y();
        return o.useImperativeHandle(e, r, a);
      }
      function Dr(e, r) {
        {
          var a = y();
          return a.useDebugValue(e, r);
        }
      }
      function Pr() {
        var e = y();
        return e.useTransition();
      }
      function ht(e) {
        var r = y();
        return r.useDeferredValue(e);
      }
      function yt() {
        var e = y();
        return e.useId();
      }
      function bt(e, r, a) {
        var o = y();
        return o.useSyncExternalStore(e, r, a);
      }
      var Ge = 0, Mr, Yr, Br, zr, Kr, qr, Hr;
      function Gr() {
      }
      Gr.__reactDisabledLog = !0;
      function gt() {
        {
          if (Ge === 0) {
            Mr = console.log, Yr = console.info, Br = console.warn, zr = console.error, Kr = console.group, qr = console.groupCollapsed, Hr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Gr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Ge++;
        }
      }
      function _t() {
        {
          if (Ge--, Ge === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: u({}, e, {
                value: Mr
              }),
              info: u({}, e, {
                value: Yr
              }),
              warn: u({}, e, {
                value: Br
              }),
              error: u({}, e, {
                value: zr
              }),
              group: u({}, e, {
                value: Kr
              }),
              groupCollapsed: u({}, e, {
                value: qr
              }),
              groupEnd: u({}, e, {
                value: Hr
              })
            });
          }
          Ge < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xr = K.ReactCurrentDispatcher, jr;
      function sr(e, r, a) {
        {
          if (jr === void 0)
            try {
              throw Error();
            } catch (s) {
              var o = s.stack.trim().match(/\n( *(at )?)/);
              jr = o && o[1] || "";
            }
          return `
` + jr + e;
        }
      }
      var Ar = !1, lr;
      {
        var Et = typeof WeakMap == "function" ? WeakMap : Map;
        lr = new Et();
      }
      function Jr(e, r) {
        if (!e || Ar)
          return "";
        {
          var a = lr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Ar = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var v;
        v = xr.current, xr.current = null, gt();
        try {
          if (r) {
            var c = function() {
              throw Error();
            };
            if (Object.defineProperty(c.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(c, []);
              } catch (H) {
                o = H;
              }
              Reflect.construct(e, [], c);
            } else {
              try {
                c.call();
              } catch (H) {
                o = H;
              }
              e.call(c.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (H) {
              o = H;
            }
            e();
          }
        } catch (H) {
          if (H && o && typeof H.stack == "string") {
            for (var h = H.stack.split(`
`), C = o.stack.split(`
`), D = h.length - 1, j = C.length - 1; D >= 1 && j >= 0 && h[D] !== C[j]; )
              j--;
            for (; D >= 1 && j >= 0; D--, j--)
              if (h[D] !== C[j]) {
                if (D !== 1 || j !== 1)
                  do
                    if (D--, j--, j < 0 || h[D] !== C[j]) {
                      var A = `
` + h[D].replace(" at new ", " at ");
                      return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && lr.set(e, A), A;
                    }
                  while (D >= 1 && j >= 0);
                break;
              }
          }
        } finally {
          Ar = !1, xr.current = v, _t(), Error.prepareStackTrace = s;
        }
        var F = e ? e.displayName || e.name : "", Y = F ? sr(F) : "";
        return typeof e == "function" && lr.set(e, Y), Y;
      }
      function Rt(e, r, a) {
        return Jr(e, !1);
      }
      function Ct(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function cr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Jr(e, Ct(e));
        if (typeof e == "string")
          return sr(e);
        switch (e) {
          case ne:
            return sr("Suspense");
          case oe:
            return sr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case G:
              return Rt(e.render);
            case ie:
              return cr(e.type, r, a);
            case fe: {
              var o = e, s = o._payload, v = o._init;
              try {
                return cr(v(s), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Xr = {}, Qr = K.ReactDebugCurrentFrame;
      function fr(e) {
        if (e) {
          var r = e._owner, a = cr(e.type, e._source, r ? r.type : null);
          Qr.setExtraStackFrame(a);
        } else
          Qr.setExtraStackFrame(null);
      }
      function St(e, r, a, o, s) {
        {
          var v = Function.call.bind(xe);
          for (var c in e)
            if (v(e, c)) {
              var h = void 0;
              try {
                if (typeof e[c] != "function") {
                  var C = Error((o || "React class") + ": " + a + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw C.name = "Invariant Violation", C;
                }
                h = e[c](r, c, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (D) {
                h = D;
              }
              h && !(h instanceof Error) && (fr(s), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, c, typeof h), fr(null)), h instanceof Error && !(h.message in Xr) && (Xr[h.message] = !0, fr(s), d("Failed %s type: %s", a, h.message), fr(null));
            }
        }
      }
      function Me(e) {
        if (e) {
          var r = e._owner, a = cr(e.type, e._source, r ? r.type : null);
          we(a);
        } else
          we(null);
      }
      var Nr;
      Nr = !1;
      function Zr() {
        if (Z.current) {
          var e = ve(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function wt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function kt(e) {
        return e != null ? wt(e.__source) : "";
      }
      var et = {};
      function Ot(e) {
        var r = Zr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function rt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Ot(r);
          if (!et[a]) {
            et[a] = !0;
            var o = "";
            e && e._owner && e._owner !== Z.current && (o = " It was passed a child from " + ve(e._owner.type) + "."), Me(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Me(null);
          }
        }
      }
      function tt(e, r) {
        if (typeof e == "object") {
          if (Ie(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Re(o) && rt(o, r);
            }
          else if (Re(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var s = N(e);
            if (typeof s == "function" && s !== e.entries)
              for (var v = s.call(e), c; !(c = v.next()).done; )
                Re(c.value) && rt(c.value, r);
          }
        }
      }
      function nt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === G || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === ie))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = ve(r);
            St(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Nr) {
            Nr = !0;
            var s = ve(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Tt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Me(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Me(null);
              break;
            }
          }
          e.ref !== null && (Me(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
        }
      }
      function at(e, r, a) {
        var o = p(e);
        if (!o) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = kt(r);
          v ? s += v : s += Zr();
          var c;
          e === null ? c = "null" : Ie(e) ? c = "array" : e !== void 0 && e.$$typeof === x ? (c = "<" + (ve(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, s);
        }
        var h = _r.apply(this, arguments);
        if (h == null)
          return h;
        if (o)
          for (var C = 2; C < arguments.length; C++)
            tt(arguments[C], e);
        return e === U ? Tt(h) : nt(h), h;
      }
      var ot = !1;
      function Dt(e) {
        var r = at.bind(null, e);
        return r.type = e, ot || (ot = !0, ce("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ce("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Pt(e, r, a) {
        for (var o = Rr.apply(this, arguments), s = 2; s < arguments.length; s++)
          tt(arguments[s], o.type);
        return nt(o), o;
      }
      function xt(e, r) {
        var a = le.transition;
        le.transition = {};
        var o = le.transition;
        le.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (le.transition = a, a === null && o._updatedFibers) {
            var s = o._updatedFibers.size;
            s > 10 && ce("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var it = !1, dr = null;
      function jt(e) {
        if (dr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = m && m[r];
            dr = a.call(m, "timers").setImmediate;
          } catch {
            dr = function(s) {
              it === !1 && (it = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var v = new MessageChannel();
              v.port1.onmessage = s, v.port2.postMessage(void 0);
            };
          }
        return dr(e);
      }
      var Ye = 0, ut = !1;
      function st(e) {
        {
          var r = Ye;
          Ye++, L.current === null && (L.current = []);
          var a = L.isBatchingLegacy, o;
          try {
            if (L.isBatchingLegacy = !0, o = e(), !a && L.didScheduleLegacyUpdate) {
              var s = L.current;
              s !== null && (L.didScheduleLegacyUpdate = !1, Ir(s));
            }
          } catch (F) {
            throw pr(r), F;
          } finally {
            L.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var v = o, c = !1, h = {
              then: function(F, Y) {
                c = !0, v.then(function(H) {
                  pr(r), Ye === 0 ? $r(H, F, Y) : F(H);
                }, function(H) {
                  pr(r), Y(H);
                });
              }
            };
            return !ut && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              c || (ut = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), h;
          } else {
            var C = o;
            if (pr(r), Ye === 0) {
              var D = L.current;
              D !== null && (Ir(D), L.current = null);
              var j = {
                then: function(F, Y) {
                  L.current === null ? (L.current = [], $r(C, F, Y)) : F(C);
                }
              };
              return j;
            } else {
              var A = {
                then: function(F, Y) {
                  F(C);
                }
              };
              return A;
            }
          }
        }
      }
      function pr(e) {
        e !== Ye - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ye = e;
      }
      function $r(e, r, a) {
        {
          var o = L.current;
          if (o !== null)
            try {
              Ir(o), jt(function() {
                o.length === 0 ? (L.current = null, r(e)) : $r(e, r, a);
              });
            } catch (s) {
              a(s);
            }
          else
            r(e);
        }
      }
      var Fr = !1;
      function Ir(e) {
        if (!Fr) {
          Fr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Fr = !1;
          }
        }
      }
      var At = at, Nt = Pt, $t = Dt, Ft = {
        map: Ne,
        forEach: or,
        count: wr,
        toArray: kr,
        only: ir
      };
      f.Children = Ft, f.Component = R, f.Fragment = U, f.Profiler = ee, f.PureComponent = k, f.StrictMode = V, f.Suspense = ne, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K, f.act = st, f.cloneElement = Nt, f.createContext = ur, f.createElement = At, f.createFactory = $t, f.createRef = yr, f.forwardRef = i, f.isValidElement = Re, f.lazy = t, f.memo = S, f.startTransition = xt, f.unstable_act = st, f.useCallback = be, f.useContext = E, f.useDebugValue = Dr, f.useDeferredValue = ht, f.useEffect = I, f.useId = yt, f.useImperativeHandle = He, f.useInsertionEffect = te, f.useLayoutEffect = Se, f.useMemo = X, f.useReducer = q, f.useRef = $, f.useState = b, f.useSyncExternalStore = bt, f.useTransition = Pr, f.version = Q, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Je, Je.exports)), Je.exports;
}
process.env.NODE_ENV === "production" ? Vr.exports = Lt() : Vr.exports = Mt();
var Lr = Vr.exports;
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function Yt() {
  return mt || (mt = 1, process.env.NODE_ENV !== "production" && function() {
    var m = Lr, f = Symbol.for("react.element"), Q = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), V = Symbol.for("react.provider"), ee = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), fe = Symbol.iterator, Fe = "@@iterator";
    function ue(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = fe && t[fe] || t[Fe];
      return typeof i == "function" ? i : null;
    }
    var se = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(t) {
      {
        for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          l[p - 1] = arguments[p];
        ge("error", t, l);
      }
    }
    function ge(t, i, l) {
      {
        var p = se.ReactDebugCurrentFrame, S = p.getStackAddendum();
        S !== "" && (i += "%s", l = l.concat([S]));
        var y = l.map(function(E) {
          return String(E);
        });
        y.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, y);
      }
    }
    var le = !1, L = !1, Z = !1, de = !1, me = !1, we;
    we = Symbol.for("react.module.reference");
    function ke(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === x || t === U || me || t === W || t === B || t === G || de || t === ie || le || L || Z || typeof t == "object" && t !== null && (t.$$typeof === oe || t.$$typeof === ne || t.$$typeof === V || t.$$typeof === ee || t.$$typeof === z || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === we || t.getModuleId !== void 0));
    }
    function Be(t, i, l) {
      var p = t.displayName;
      if (p)
        return p;
      var S = i.displayName || i.name || "";
      return S !== "" ? l + "(" + S + ")" : l;
    }
    function Oe(t) {
      return t.displayName || "Context";
    }
    function J(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case x:
          return "Fragment";
        case Q:
          return "Portal";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case B:
          return "Suspense";
        case G:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case ee:
            var i = t;
            return Oe(i) + ".Consumer";
          case V:
            var l = t;
            return Oe(l._context) + ".Provider";
          case z:
            return Be(t, t.render, "ForwardRef");
          case ne:
            var p = t.displayName || null;
            return p !== null ? p : J(t.type) || "Memo";
          case oe: {
            var S = t, y = S._payload, E = S._init;
            try {
              return J(E(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, K = 0, ce, d, pe, Te, he, n, u;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function R() {
      {
        if (K === 0) {
          ce = console.log, d = console.info, pe = console.warn, Te = console.error, he = console.group, n = console.groupCollapsed, u = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: _,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        K++;
      }
    }
    function w() {
      {
        if (K--, K === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, t, {
              value: ce
            }),
            info: re({}, t, {
              value: d
            }),
            warn: re({}, t, {
              value: pe
            }),
            error: re({}, t, {
              value: Te
            }),
            group: re({}, t, {
              value: he
            }),
            groupCollapsed: re({}, t, {
              value: n
            }),
            groupEnd: re({}, t, {
              value: u
            })
          });
        }
        K < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = se.ReactCurrentDispatcher, T;
    function O(t, i, l) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (S) {
            var p = S.stack.trim().match(/\n( *(at )?)/);
            T = p && p[1] || "";
          }
        return `
` + T + t;
      }
    }
    var k = !1, M;
    {
      var yr = typeof WeakMap == "function" ? WeakMap : Map;
      M = new yr();
    }
    function Xe(t, i) {
      if (!t || k)
        return "";
      {
        var l = M.get(t);
        if (l !== void 0)
          return l;
      }
      var p;
      k = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = P.current, P.current = null, R();
      try {
        if (i) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (X) {
              p = X;
            }
            Reflect.construct(t, [], E);
          } else {
            try {
              E.call();
            } catch (X) {
              p = X;
            }
            t.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            p = X;
          }
          t();
        }
      } catch (X) {
        if (X && p && typeof X.stack == "string") {
          for (var b = X.stack.split(`
`), q = p.stack.split(`
`), $ = b.length - 1, I = q.length - 1; $ >= 1 && I >= 0 && b[$] !== q[I]; )
            I--;
          for (; $ >= 1 && I >= 0; $--, I--)
            if (b[$] !== q[I]) {
              if ($ !== 1 || I !== 1)
                do
                  if ($--, I--, I < 0 || b[$] !== q[I]) {
                    var te = `
` + b[$].replace(" at new ", " at ");
                    return t.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", t.displayName)), typeof t == "function" && M.set(t, te), te;
                  }
                while ($ >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        k = !1, P.current = y, w(), Error.prepareStackTrace = S;
      }
      var Se = t ? t.displayName || t.name : "", be = Se ? O(Se) : "";
      return typeof t == "function" && M.set(t, be), be;
    }
    function Ie(t, i, l) {
      return Xe(t, !1);
    }
    function br(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function We(t, i, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, br(t));
      if (typeof t == "string")
        return O(t);
      switch (t) {
        case B:
          return O("Suspense");
        case G:
          return O("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case z:
            return Ie(t.render);
          case ne:
            return We(t.type, i, l);
          case oe: {
            var p = t, S = p._payload, y = p._init;
            try {
              return We(y(S), i, l);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, De = {}, Qe = se.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var i = t._owner, l = We(t.type, t._source, i ? i.type : null);
        Qe.setExtraStackFrame(l);
      } else
        Qe.setExtraStackFrame(null);
    }
    function ve(t, i, l, p, S) {
      {
        var y = Function.call.bind(_e);
        for (var E in t)
          if (y(t, E)) {
            var b = void 0;
            try {
              if (typeof t[E] != "function") {
                var q = Error((p || "React class") + ": " + l + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw q.name = "Invariant Violation", q;
              }
              b = t[E](i, E, p, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              b = $;
            }
            b && !(b instanceof Error) && (Pe(S), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", l, E, typeof b), Pe(null)), b instanceof Error && !(b.message in De) && (De[b.message] = !0, Pe(S), N("Failed %s type: %s", l, b.message), Pe(null));
          }
      }
    }
    var xe = Array.isArray;
    function Ue(t) {
      return xe(t);
    }
    function Ze(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, l = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function er(t) {
      try {
        return Ve(t), !1;
      } catch {
        return !0;
      }
    }
    function Ve(t) {
      return "" + t;
    }
    function ze(t) {
      if (er(t))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), Ve(t);
    }
    var Ee = se.ReactCurrentOwner, gr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, je;
    je = {};
    function _r(t) {
      if (_e.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Er(t) {
      if (_e.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rr(t, i) {
      if (typeof t.ref == "string" && Ee.current && i && Ee.current.stateNode !== i) {
        var l = J(Ee.current.type);
        je[l] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(Ee.current.type), t.ref), je[l] = !0);
      }
    }
    function Re(t, i) {
      {
        var l = function() {
          rr || (rr = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function nr(t, i) {
      {
        var l = function() {
          tr || (tr = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Cr = function(t, i, l, p, S, y, E) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: l,
        props: E,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Sr(t, i, l, p, S) {
      {
        var y, E = {}, b = null, q = null;
        l !== void 0 && (ze(l), b = "" + l), Er(i) && (ze(i.key), b = "" + i.key), _r(i) && (q = i.ref, Rr(i, S));
        for (y in i)
          _e.call(i, y) && !gr.hasOwnProperty(y) && (E[y] = i[y]);
        if (t && t.defaultProps) {
          var $ = t.defaultProps;
          for (y in $)
            E[y] === void 0 && (E[y] = $[y]);
        }
        if (b || q) {
          var I = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          b && Re(E, I), q && nr(E, I);
        }
        return Cr(t, b, q, S, p, Ee.current, E);
      }
    }
    var Le = se.ReactCurrentOwner, ar = se.ReactDebugCurrentFrame;
    function ye(t) {
      if (t) {
        var i = t._owner, l = We(t.type, t._source, i ? i.type : null);
        ar.setExtraStackFrame(l);
      } else
        ar.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Ce(t) {
      return typeof t == "object" && t !== null && t.$$typeof === f;
    }
    function Ne() {
      {
        if (Le.current) {
          var t = J(Le.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function wr(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + i + ":" + l + ".";
        }
        return "";
      }
    }
    var or = {};
    function kr(t) {
      {
        var i = Ne();
        if (!i) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (i = `

Check the top-level render call using <` + l + ">.");
        }
        return i;
      }
    }
    function ir(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = kr(i);
        if (or[l])
          return;
        or[l] = !0;
        var p = "";
        t && t._owner && t._owner !== Le.current && (p = " It was passed a child from " + J(t._owner.type) + "."), ye(t), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, p), ye(null);
      }
    }
    function ur(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Ue(t))
          for (var l = 0; l < t.length; l++) {
            var p = t[l];
            Ce(p) && ir(p, i);
          }
        else if (Ce(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var S = ue(t);
          if (typeof S == "function" && S !== t.entries)
            for (var y = S.call(t), E; !(E = y.next()).done; )
              Ce(E.value) && ir(E.value, i);
        }
      }
    }
    function $e(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var l;
        if (typeof i == "function")
          l = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === z || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === ne))
          l = i.propTypes;
        else
          return;
        if (l) {
          var p = J(i);
          ve(l, t.props, "prop", p, t);
        } else if (i.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var S = J(i);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ke(t) {
      {
        for (var i = Object.keys(t.props), l = 0; l < i.length; l++) {
          var p = i[l];
          if (p !== "children" && p !== "key") {
            ye(t), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ye(null);
            break;
          }
        }
        t.ref !== null && (ye(t), N("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    var qe = {};
    function Or(t, i, l, p, S, y) {
      {
        var E = ke(t);
        if (!E) {
          var b = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var q = wr(S);
          q ? b += q : b += Ne();
          var $;
          t === null ? $ = "null" : Ue(t) ? $ = "array" : t !== void 0 && t.$$typeof === f ? ($ = "<" + (J(t.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof t, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, b);
        }
        var I = Sr(t, i, l, S, y);
        if (I == null)
          return I;
        if (E) {
          var te = i.children;
          if (te !== void 0)
            if (p)
              if (Ue(te)) {
                for (var Se = 0; Se < te.length; Se++)
                  ur(te[Se], t);
                Object.freeze && Object.freeze(te);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(te, t);
        }
        if (_e.call(i, "key")) {
          var be = J(t), X = Object.keys(i).filter(function(Pr) {
            return Pr !== "key";
          }), He = X.length > 0 ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!qe[be + He]) {
            var Dr = X.length > 0 ? "{" + X.join(": ..., ") + ": ...}" : "{}";
            N(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, He, be, Dr, be), qe[be + He] = !0;
          }
        }
        return t === x ? Ke(I) : $e(I), I;
      }
    }
    var Tr = Or;
    hr.Fragment = x, hr.jsxDEV = Tr;
  }()), hr;
}
process.env.NODE_ENV === "production" ? Ur.exports = Vt() : Ur.exports = Yt();
var ae = Ur.exports;
const Bt = (m, f) => `title-${m} title-weight-${f}`;
function en(m) {
  const { themeColor: f = "", level: Q = 1, children: x, className: W, ...U } = m;
  return /* @__PURE__ */ ae.jsxDEV(
    "div",
    {
      ...U,
      className: `title ${W || Bt(f, Q)}`,
      children: x
    },
    void 0,
    !1,
    {
      fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/title/title.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}
const zt = (m, f) => `button-${m} button-${m}-${f}`, Kt = (m) => {
  if (m === "contained")
    return "button-container-disable";
  if (m === "outlined")
    return "button-outline-disable";
  if (m === "text")
    return "button-text-disable";
};
function rn(m) {
  const {
    variant: f,
    themeColor: Q = "",
    isDisabled: x = !1,
    children: W,
    prefix: U,
    suffix: V,
    className: ee,
    onClick: z,
    ...B
  } = m;
  return /* @__PURE__ */ ae.jsxDEV(
    "button",
    {
      ...B,
      className: `button ${x ? Kt(f) : ee || zt(f, Q)}`,
      onClick: z,
      children: [
        U,
        W,
        V
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/button/button.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  );
}
const qt = (m) => m === "small" ? "input-small" : m === "large" ? "input-large" : "input-medium";
function tn(m) {
  const {
    className: f,
    placeholder: Q = "請輸入...",
    size: x = "medium",
    prefix: W,
    suffix: U,
    ...V
  } = m;
  return /* @__PURE__ */ ae.jsxDEV("div", { className: `input ${qt(x)} ${f} `, children: [
    W,
    /* @__PURE__ */ ae.jsxDEV("input", { ...V, placeholder: Q }, void 0, !1, {
      fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/input/input.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    U
  ] }, void 0, !0, {
    fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/input/input.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
const Ht = (m) => {
  if (!(m.length <= 0))
    return "textarea-border-error";
}, Gt = ({
  error: m,
  description: f
}) => {
  if (m.length > 0)
    return "textarea-hint-error";
  if (f.length > 0)
    return "textarea-hint-desc";
}, Jt = (m) => {
  if (m.length > 0)
    return "textarea-hint-count";
};
function nn(m) {
  const {
    label: f = "",
    className: Q,
    placeholder: x = "請輸入...",
    isDisabled: W = !1,
    total: U = 10,
    hint: V = { error: "", description: "" },
    ...ee
  } = m, [z, B] = Lr.useState("");
  return /* @__PURE__ */ ae.jsxDEV("div", { className: `textarea-container ${Q}`, children: [
    f && /* @__PURE__ */ ae.jsxDEV(
      "label",
      {
        className: `${W ? "textarea-disable" : "textarea-label"}`,
        htmlFor: "id",
        children: f
      },
      void 0,
      !1,
      {
        fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/textarea/textarea.tsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ ae.jsxDEV(
      "div",
      {
        className: `textarea-group ${W ? "textarea-disable" : Ht(V.error)}`,
        children: [
          /* @__PURE__ */ ae.jsxDEV(
            "textarea",
            {
              ...ee,
              id: "id",
              onChange: (G) => {
                B(G.target.value), console.log(G.target.value);
              },
              maxLength: U || void 0,
              className: `textarea ${W ? "textarea-disable" : ""}`,
              placeholder: x
            },
            void 0,
            !1,
            {
              fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/textarea/textarea.tsx",
              lineNumber: 41,
              columnNumber: 9
            },
            this
          ),
          U > 0 && /* @__PURE__ */ ae.jsxDEV(
            "small",
            {
              className: `${W ? "textarea-disable" : Jt(z)}`,
              children: z.length > 0 && `${z.length}/${U}`
            },
            void 0,
            !1,
            {
              fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/textarea/textarea.tsx",
              lineNumber: 53,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/textarea/textarea.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ ae.jsxDEV(
      "small",
      {
        className: `textarea-hint ${W ? "textarea-disable" : Gt(V)}`,
        children: V.error.length > 0 ? V.error : V.description
      },
      void 0,
      !1,
      {
        fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/textarea/textarea.tsx",
        lineNumber: 62,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/textarea/textarea.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
const Xt = (m) => `switch-${m} `, Qt = (m) => m ? "switch-on" : "switch-off", Zt = (m) => m ? "switch-label-on" : "switch-label-off";
function an(m) {
  const {
    themeColor: f = "",
    isChecked: Q = !1,
    isDisabled: x = !1,
    checkChildren: W = "on",
    unCheckChildren: U = "off",
    onChange: V,
    className: ee,
    ...z
  } = m, [B, G] = Lr.useState(Q);
  return /* @__PURE__ */ ae.jsxDEV(
    "div",
    {
      ...z,
      className: `switch ${ee || Xt(f)} ${Qt(B)} ${x ? "switch-disable" : ""}`,
      onClick: (ne) => {
        G((oe) => !oe), V && V(!B);
      },
      children: [
        /* @__PURE__ */ ae.jsxDEV(
          "div",
          {
            className: `switch-thumb ${x ? "switch-label-disable" : ""}`
          },
          void 0,
          !1,
          {
            fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/switch/switch.tsx",
            lineNumber: 50,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ ae.jsxDEV(
          "label",
          {
            className: `switch-label ${Zt(B)} ${x ? "switch-label-disable" : ""}`,
            children: x ? "" : B ? W : U
          },
          void 0,
          !1,
          {
            fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/switch/switch.tsx",
            lineNumber: 53,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/auouser/Desktop/Work_Space/AUO-DED-WDS/libs/src/ui/element/switch/switch.tsx",
      lineNumber: 40,
      columnNumber: 5
    },
    this
  );
}
export {
  rn as Button,
  tn as Input,
  an as Switch,
  nn as Textarea,
  en as Title
};
