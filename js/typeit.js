//////////////
/// TYPEIT ///
//////////////
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).TypeIt = e()
}(this, (function() {
    "use strict";

    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(e)
    }
    var e = {
        strings: [],
        speed: 100,
        cursor: !0,
        cursorChar: "|",
        cursorSpeed: 1e3,
        deleteSpeed: null,
        lifeLike: !0,
        breakLines: !0,
        startDelay: 250,
        startDelete: !1,
        nextStringDelay: 750,
        loop: !1,
        loopDelay: 750,
        html: !0,
        waitUntilVisible: !1,
        beforeString: function() {},
        afterString: function() {},
        beforeStep: function() {},
        afterStep: function() {},
        afterComplete: function() {}
    };

    function n() {
        var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.insert = function(e, n) {
            t.waiting.splice(e, 0, n)
        }, this.add = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return Array.isArray(e[0]) ? (t.waiting = t.waiting.concat(e), t) : (t.waiting[n ? "unshift" : "push"](e), t)
        }, this.delete = function(e) {
            return t.waiting.splice(e, 1), t
        }, this.reset = function() {
            return t.waiting = t.executed.concat(t.waiting), t.executed = [], t
        }, this.executed = [], this.waiting = e, !e.length && n && this.add(n)
    }
    var i = function(t) {
        return document.createElement(t)
    };

    function r(t, e) {
        return Math.abs(Math.random() * (t + e - (t - e)) + (t - e))
    }

    function o(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = i("style");
        n.id = e, n.appendChild(document.createTextNode(t)), document.head.appendChild(n)
    }

    function u(t) {
        return t.map((function(t) {
            return t.replace(/<\!--.*?-->/g, "")
        }))
    }
    var s = function(t) {
            return ["textarea", "input"].indexOf(t.tagName.toLowerCase()) > -1
        },
        a = function(t) {
            return Array.isArray(t) ? t : [t]
        },
        c = function(t) {
            return Array.from(t)
        },
        f = function(t, e) {
            var n = t.nextSibling;
            return !!n && !n.isEqualNode(e)
        };
    var l = function(e, n) {
            var r = n;
            if (s(e)) e.value = "".concat(e.value).concat(r);
            else {
                var o = c(e.childNodes).filter((function(t) {
                    return t.classList && t.classList.contains("ti-cursor")
                }));
                if (o = o.length ? o[0] : null, "object" === t(n) && !(n instanceof HTMLElement)) {
                    var u = n.ancestorTree.slice(0).reverse().join(" "),
                        a = c(e.querySelectorAll("".concat(u))),
                        l = (a = a.filter((function(t) {
                            return !o || !o.isEqualNode(t)
                        }))).length > 0 ? a[a.length - 1] : null;
                    if (l && function(t, e) {
                            if (!t) return !1;
                            for (var n = !1, i = [], r = t; !n;) i.push(f(r, e)), (r = r.parentNode) && r.hasAttribute && !r.hasAttribute("data-typeit-id") || (n = !0);
                            return !i.some((function(t) {
                                return t
                            }))
                        }(l, o)) e = l, r = n.content;
                    else if (r = function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                                r = i(t);
                            return e.forEach((function(t) {
                                r.setAttribute(t.name, t.value)
                            })), r.innerHTML = n, r
                        }(n.ancestorTree[0], n.attributes, n.content), n.ancestorTree.length > 1) {
                        var h = c(e.querySelectorAll(n.ancestorTree[1]));
                        e = h[h.length - 1]
                    }
                }
                r = "object" === t(r) ? r : document.createTextNode(r), e.insertBefore(r, o && e.hasAttribute("data-typeit-id") ? o : null)
            }
        },
        h = function(t) {
            var e = [];
            return e.concat.apply(e, t)
        },
        p = function(t) {
            var e = document.implementation.createHTMLDocument("");
            return e.body.innerHTML = t, e.body
        },
        d = function(t) {
            return c(t.childNodes).map((function(t) {
                return 3 === t.nodeType ? c(t.nodeValue) : t
            }))
        },
        v = function(t, e, n) {
            return {
                ancestorTree: e,
                attributes: (i = t, c(i.attributes).map((function(t) {
                    return {
                        name: t.name,
                        value: t.nodeValue
                    }
                }))),
                content: n
            };
            var i
        },
        y = function(t, e) {
            var n = v(t, e, ""),
                i = d(t).map((function(n, i) {
                    return Array.isArray(n) ? n.map((function(n, i) {
                        return v(t, e, n)
                    })) : n
                }));
            return i.unshift(n), h(i)
        },
        m = function(t) {
            return t instanceof HTMLElement && "BR" !== t.tagName
        },
        g = function t(e) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                i = e.map((function(t) {
                    if (m(t)) {
                        if (!n) return c(t.childNodes);
                        for (var e = t.parentNode, i = [t.tagName];
                            ["BODY", "HTML"].indexOf(e.tagName) < 0;) i.push(e.tagName), e = e.parentNode;
                        return y(t, i)
                    }
                    return t
                }));
            return (i = h(i)).some((function(t) {
                return m(t)
            })) ? t(i, n) : i
        };

    function b(t) {
        var e = p(t),
            n = d(e);
        return g(n)
    }

    function w(t) {
        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return e ? b(t) : c(t)
    }
    var q = function(t, e) {
            e ? t.value = "" : t.querySelector(".ti-cursor") && (t.innerHTML = "")
        },
        S = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = !Array.isArray(t),
                r = t.length;
            return (t = i ? new Array(t).fill(0) : t).map((function(t, o) {
                if (i) return e;
                var u = [e, t];
                return n && (0 === o && u.push({
                    isFirst: !0
                }), o + 1 === r && u.push({
                    isLast: !0
                })), u
            }))
        },
        A = function(t) {
            t.parentNode.removeChild(t)
        },
        T = function(t) {
            return 3 !== t.nodeType && "BR" !== t.tagName && !t.firstChild
        },
        N = function(t) {
            return t.some((function(t) {
                return T(t)
            }))
        },
        L = function(t) {
            for (var e = c(t.querySelectorAll("*")), n = N(e); e.length && n;) {
                var i = !1;
                e.forEach((function(t) {
                    T(t) && (A(t), i = !0)
                })), i && (e = c(t.querySelectorAll("*"))), n = N(e)
            }
            return e
        },
        $ = function(t) {
            return Array.isArray(t) || (t = [t / 2, t / 2]), {
                before: t[0],
                after: t[1],
                total: t[0] + t[1]
            }
        };

    function x(t, e, n) {
        var i = (e = null !== e ? e : t / 3) / 2;
        return n ? [r(t, t / 2), r(e, i)] : [t, e]
    }

    function D(t, e, n) {
        return n ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t)
    }

    function E(t) {
        return function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            try {
                return Promise.resolve(t.apply(this, e))
            } catch (t) {
                return Promise.reject(t)
            }
        }
    }

    function M() {}

    function C(t, e) {
        if (!e) return t && t.then ? t.then(M) : Promise.resolve()
    }

    function H(t, e) {
        var n = t();
        return n && n.then ? n.then(e) : e(n)
    }

    function P(t) {
        var e = t();
        if (e && e.then) return e.then(M)
    }

    function k(t, e, n) {
        if (!t.s) {
            if (n instanceof j) {
                if (!n.s) return void(n.o = k.bind(null, t, e));
                1 & e && (e = n.s), n = n.v
            }
            if (n && n.then) return void n.then(k.bind(null, t, e), k.bind(null, t, 2));
            t.s = e, t.v = n;
            var i = t.o;
            i && i(t)
        }
    }
    var j = function() {
        function t() {}
        return t.prototype.then = function(e, n) {
            var i = new t,
                r = this.s;
            if (r) {
                var o = 1 & r ? e : n;
                if (o) {
                    try {
                        k(i, 1, o(this.v))
                    } catch (t) {
                        k(i, 2, t)
                    }
                    return i
                }
                return this
            }
            return this.o = function(t) {
                try {
                    var r = t.v;
                    1 & t.s ? k(i, 1, e ? e(r) : r) : n ? k(i, 1, n(r)) : k(i, 2, r)
                } catch (t) {
                    k(i, 2, t)
                }
            }, i
        }, t
    }();

    function O(t, e, n) {
        var i, r, o = -1;
        return function u(s) {
            try {
                for (; ++o < t.length && (!n || !n());)
                    if ((s = e(o)) && s.then) {
                        if (!((a = s) instanceof j && 1 & a.s)) return void s.then(u, r || (r = k.bind(null, i = new j, 2)));
                        s = s.v
                    } i ? k(i, 1, s) : i = s
            } catch (t) {
                k(i || (i = new j), 2, t)
            }
            var a
        }(), i
    }

    function z(t, e) {
        return t && t.then ? t.then(e) : e(t)
    }

    function I(t, e) {
        try {
            var n = t()
        } catch (t) {
            return e(t)
        }
        return n && n.then ? n.then(void 0, e) : n
    }

    function R() {
        var r = this,
            f = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            h = f.typeIt,
            d = f.element,
            v = f.id,
            y = f.options,
            m = f.queue,
            T = void 0 === m ? [] : m,
            N = f.isAReset,
            k = void 0 !== N && N,
            j = function() {
                if (J) return c(r.$e.value);
                var t = c(r.$e.childNodes).filter((function(t) {
                    return !t.isEqualNode(Q)
                }));
                return g(t, !1)
            },
            B = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = r.opts.nextStringDelay;
                r.queue.insert(t, [r.pause, n.before]), r.queue.insert(t + e + 1, [r.pause, n.after])
            },
            V = function() {
                if (J || !r.opts.cursor) return null;
                var t = i("span");
                return t.innerHTML = p(r.opts.cursorChar).innerHTML, t.className = "ti-cursor", t.setAttribute("style", "display:inline;position:relative;font:inherit;color:inherit;line-height:inherit;"), t
            },
            F = function() {
                Q && (o("@keyframes blink-".concat(v, " { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} }[data-typeit-id='").concat(v, "'] .ti-cursor { animation: blink-").concat(v, " ").concat(r.opts.cursorSpeed / 1e3, "s infinite; }"), v), r.$e.appendChild(Q))
            };
        this.wait = E((function(t, e) {
            return this.timeouts.push(setTimeout(t, e)), D()
        }));
        var U = function() {
                r.opts.strings.forEach((function(t, e) {
                    var n = w(t, r.opts.html);
                    r.queue.add(S(n, r.type, !0));
                    var o = r.queue.waiting.length;
                    if (e + 1 !== r.opts.strings.length) {
                        if (r.opts.breakLines) return r.queue.add([r.type, i("BR")]), void B(o);
                        r.queue.add(S(n, r.delete)), B(o, t.length)
                    }
                }))
            },
            Y = function(t) {
                r.queue.reset().delete(0).add([r.pause, t.before], !0);
                for (var e = 0; e < j().length; e++) r.queue.add([r.delete, null, {
                    isPhantom: !0
                }], !0)
            },
            G = function(t) {
                var e = r.$e.innerHTML;
                return e ? (r.$e.innerHTML = "", r.opts.startDelete ? (b(e).forEach((function(t) {
                    l(r.$e, t)
                })), r.queue.add([r.delete, !0]), B(1), t) : [e.trim()].concat(t)) : t
            };
        this.pause = function() {
            var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return new Promise((function(n, i) {
                t.wait((function() {
                    return n()
                }), e || t.opts.nextStringDelay.total)
            }))
        }, this.reset = function() {
            return this.queue.reset(), new R({
                typeIt: h,
                element: this.$e,
                id: v,
                options: this.opts,
                queue: this.queue.waiting,
                isAReset: !0
            })
        }, this.init = function() {
            var t = this;
            if (!this.status.started) {
                if (F(), !this.opts.waitUntilVisible) return this.status.started = !0, this.fire();
                new IntersectionObserver((function(e, n) {
                    e.forEach((function(e) {
                        e.isIntersecting && (t.fire(), n.unobserve(t.$e))
                    }))
                }), {
                    threshold: 1
                }).observe(this.$e)
            }
        }, this.fire = E((function() {
            var t = this,
                e = t.queue.waiting.slice();
            return I((function() {
                return z(O(e, (function(n) {
                    var i = e[n],
                        r = [i, t.queue, h];
                    if (t.status.frozen) throw new Error;
                    return t.pace = x(t.opts.speed, t.opts.deleteSpeed, t.opts.lifeLike), H((function() {
                        var e;
                        if (i[2] && i[2].isFirst) return C((e = t.opts).beforeString.apply(e, r))
                    }), (function() {
                        var e;
                        return D((e = t.opts).beforeStep.apply(e, r), (function() {
                            return D(i[0].call(t, i[1], i[2]), (function() {
                                var e = t.queue.waiting.shift(),
                                    n = i[2] && i[2].isPhantom;
                                return P((function() {
                                    if (!n) return H((function() {
                                        var e;
                                        if (i[2] && i[2].isLast) return C((e = t.opts).afterString.apply(e, r))
                                    }), (function() {
                                        var n;
                                        return D((n = t.opts).afterStep.apply(n, r), (function() {
                                            t.queue.executed.push(e)
                                        }))
                                    }))
                                }))
                            }))
                        }))
                    }))
                }), (function() {
                    return !1
                })), (function(e) {
                    return t.status.completed = !0, D(t.opts.afterComplete(h), (function() {
                        if (t.opts.loop) {
                            var e = t.opts.loopDelay ? t.opts.loopDelay : t.opts.nextStringDelay;
                            t.wait((function() {
                                Y(e), t.fire()
                            }), e.after)
                        }
                    }))
                }))
            }), M)
        })), this.type = function(e) {
            var n = this;
            return "object" !== t(e) || e.content ? new Promise((function(t) {
                n.wait((function() {
                    return l(n.$e, e), t()
                }), n.pace[0])
            })) : (l(this.$e, e), Promise.resolve())
        }, this.empty = E((function() {
            J ? this.$e.value = "" : c(this.$e.childNodes).forEach((function(t) {
                Q && Q.isEqualNode(t) || A(t)
            }))
        })), this.delete = function() {
            var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return new Promise((function(n) {
                t.wait((function() {
                    var i = j();
                    return i.length && (J ? t.$e.value = t.$e.value.slice(0, -1) : A(i[i.length - 1])), L(t.$e), e && i.length - 1 > 0 ? t.delete(!0).then((function() {
                        return n()
                    })) : n()
                }), t.pace[1])
            }))
        }, this.setOptions = E((function(t) {
            this.opts = Object.assign({}, this.opts, t)
        }));
        var J = s(d);
        this.status = {
            started: !1,
            complete: !1,
            frozen: !1,
            destroyed: !1
        }, this.$e = d, this.timeouts = [], this.opts = Object.assign({}, e, y), this.opts.html = !J && this.opts.html, this.opts.nextStringDelay = $(this.opts.nextStringDelay), this.opts.loopDelay = $(this.opts.loopDelay), this.queue = new n(T, [this.pause, this.opts.startDelay]), this.$e.setAttribute("data-typeit-id", v), o("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}"), q(d, J);
        var K = a(this.opts.strings);
        K = G(K), this.opts.strings = u(K);
        var Q = V();
        this.opts.strings.length && !k && U()
    }
    return function(t, e) {
        var n, r = this;
        this.instances = (n = t, "string" == typeof n ? n = document.querySelectorAll(n) : n.forEach || (n = [n]), c(n)).map((function(t) {
            return new R({
                typeIt: r,
                element: t,
                id: Math.random().toString(36).substring(2, 15),
                options: e,
                queue: [],
                isAReset: !1
            })
        }));
        var o = function(t) {
                r.instances.forEach((function(e) {
                    t.call(r, e)
                }))
            },
            u = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                o((function(i) {
                    var o = "string" != typeof t,
                        u = o ? t : i[t],
                        s = S(n, [u, o ? r : e]);
                    i.queue.add(s)
                }))
            };
        this.is = function(t) {
            return e = this.instances, n = t, i = !0, !!e.length && !e.some((function(t) {
                return t.status[n] !== i
            }));
            var e, n, i
        }, this.freeze = function() {
            o((function(t) {
                t.status.frozen = !0
            }))
        }, this.unfreeze = function() {
            o((function(t) {
                t.status.frozen && (t.status.frozen = !1, t.fire())
            }))
        }, this.type = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return o((function(e) {
                var n = w(t, e.opts.html);
                e.queue.add(S(n, e.type, !0))
            })), this
        }, this.delete = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return u("delete", null === t, null === t ? 1 : t), this
        }, this.pause = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return u("pause", t), this
        }, this.break = function() {
            return u("type", i("BR")), this
        }, this.options = function(t) {
            return u("setOptions", t), this
        }, this.exec = function(t) {
            return u(t), this
        }, this.destroy = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.instances = this.instances.map((function(e) {
                if (e.timeouts.forEach((function(t) {
                        clearTimeout(t)
                    })), e.timeouts = [], t) {
                    var n = e.isInput ? null : e.$e.querySelector(".ti-cursor");
                    n && e.$e.removeChild(n)
                }
                return e.status.destroyed = !0, e
            }))
        }, this.empty = function() {
            return u("empty"), this
        }, this.reset = function() {
            return this.destroy(), this.instances = this.instances.map((function(t) {
                return t.reset()
            })), this
        }, this.go = function() {
            return o((function(t) {
                t.init()
            })), this
        }
    }
}));