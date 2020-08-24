/* eslint-disable */
export default ({ app }) => {
  (function (e, t) {
    const n = e.amplitude || { _q: [], _iq: {} };
    const r = t.createElement('script');
    r.type = 'text/javascript';
    r.integrity = 'sha384-cukXwabQy+j/QA1+RqiXSzxhgQg5Rrn3zVszlwH3pWj/bXJxlA8Ge7NhcD6vP2Ik';
    r.crossOrigin = 'anonymous';
    r.async = true;
    r.src = 'https://cdn.amplitude.com/libs/amplitude-7.1.0-min.gz.js';

    r.onload = function () {
      if (!e.amplitude.runQueuedFunctions) {
        console.log('[Amplitude] Error: could not load SDK');
      }
    };

    const i = t.getElementsByTagName('script')[0];
    i.parentNode.insertBefore(r, i);
    function s (e, t) {
      e.prototype[t] = function () {
        this._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
        return this;
      };
    }

    const o = function () {
      this._q = [];
      return this;
    };

    const a = ['add', 'append', 'clearAll', 'prepend', 'set', 'setOnce', 'unset'];
    for (let c = 0; c < a.length; c++) {
      s(o, a[c]);
    }

    n.Identify = o;
    const u = function () {
      this._q = [];
      return this;
    };

    const l = ['setProductId', 'setQuantity', 'setPrice', 'setRevenueType', 'setEventProperties'];

    for (let p = 0; p < l.length; p++) {
      s(u, l[p]);
    }

    n.Revenue = u;
    const d = ['init', 'logEvent', 'logRevenue', 'setUserId', 'setUserProperties', 'setOptOut', 'setVersionName', 'setDomain', 'setDeviceId', 'enableTracking', 'setGlobalUserProperties', 'identify', 'clearUserProperties', 'setGroup', 'logRevenueV2', 'regenerateDeviceId', 'groupIdentify', 'onInit', 'logEventWithTimestamp', 'logEventWithGroups', 'setSessionId', 'resetSessionId'];
    function v (e) {
      function t (t) {
        e[t] = function () {
          e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
        };
      }

      for (let n = 0; n < d.length; n++) {
        t(d[n]);
      }
    }
    v(n);

    n.getInstance = function (e) {
      e = (!e || e.length === 0 ? '$default_instance' : e).toLowerCase();
      if (!n._iq.hasOwnProperty(e)) {
        n._iq[e] = { _q: [] };
        v(n._iq[e]);
      }
      return n._iq[e];
    };

    e.amplitude = n;
  })(window, document);

  window.amplitude.getInstance().init('09f6da2dc1f09162c0fcda4b1b87b28b');

  app.router.afterEach((to, from) => {
    if (app.router.history.current.name === 'signin') {
      window.amplitude.getInstance().logEvent('RET001 Page > Sign in');
    }
  });
};
