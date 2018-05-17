(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (FT5Y) {
        if (!FT5Y || !FT5Y.length) return null;
        var bdy4C = window;
        for (var a = FT5Y.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; bdy4C = bdy4C[a[i]] = bdy4C[a[i]] || {}, i++) ;
        return bdy4C
    };
    NEJ.Q = function (bJ4N, FT5Y) {
        bJ4N = bJ4N || NEJ.O;
        var br4v = FT5Y.split(".");
        for (var i = 0, l = br4v.length; i < l; i++) {
            bJ4N = bJ4N[br4v[i]];
            if (!bJ4N) break
        }
        return bJ4N
    };
    NEJ.C = function () {
        var bxy0x = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bxF0x = function (D4H, bz4D) {
            for (var x in bz4D) if (D4H == bz4D[x]) return x;
            return null
        };
        var biP6J = {cx5C: 0, bl4p: 1, bD4H: 2, bW5b: 3, bL4P: 4, eZ6T: 5, ke8W: 6, eD6x: 7},
            uV2x = {cD6x: 0, bm4q: 1, bG4K: 2, cg5l: 3, bR4V: 4, gC7v: 5, kZ9Q: 6, gq7j: 7};
        return function () {
            var fK7D = function () {
                this.byk0x();
                return this.cx5C.apply(this, arguments)
            };
            fK7D.prototype.byk0x = NEJ.F;
            fK7D.prototype.cx5C = NEJ.F;
            fK7D.O4S = function (Db4f, byR0x) {
                if (bxy0x(Db4f)) return;
                if (byR0x == null || !!byR0x) NEJ.X(this, Db4f, bxy0x);
                this.cwY6S = Db4f;
                this.cs5x = Db4f.prototype;
                var bI4M = function () {
                };
                bI4M.prototype = Db4f.prototype;
                this.prototype = new bI4M;
                var Ha6U = this.prototype;
                Ha6U.constructor = this;
                var ck5p;
                for (var x in biP6J) {
                    ck5p = bxF0x(biP6J[x], uV2x);
                    if (!ck5p || !this.cs5x[x]) continue;
                    Ha6U[x] = function (V4Z) {
                        return function () {
                            this[V4Z].apply(this, arguments)
                        }
                    }(ck5p)
                }
                var Fs5x = {};
                for (var x in uV2x) {
                    ck5p = bxF0x(uV2x[x], biP6J);
                    if (!ck5p || !this.cs5x[ck5p]) continue;
                    Fs5x[ck5p] = Db4f;
                    Ha6U[x] = function (V4Z) {
                        return function () {
                            var o4s, bI4M = this.bfG5L[V4Z], bev5A = bI4M.prototype[V4Z];
                            this.bfG5L[V4Z] = bI4M.cwY6S || Db4f;
                            if (!!bev5A) o4s = bev5A.apply(this, arguments);
                            this.bfG5L[V4Z] = Db4f;
                            return o4s
                        }
                    }(ck5p)
                }
                Ha6U.byk0x = function () {
                    this.bfG5L = NEJ.X({}, Fs5x)
                };
                Ha6U.cHU9L = Ha6U.cD6x;
                return Ha6U
            };
            return fK7D
        }
    }();
    NEJ.X = function (gw7p, bS4W, dV6P) {
        if (!gw7p || !bS4W) return gw7p;
        dV6P = dV6P || NEJ.F;
        for (var x in bS4W) {
            if (bS4W.hasOwnProperty(x) && !dV6P(bS4W[x], x)) gw7p[x] = bS4W[x]
        }
        return gw7p
    };
    NEJ.EX = function (gw7p, bS4W) {
        if (!gw7p || !bS4W) return gw7p;
        for (var x in gw7p) {
            if (gw7p.hasOwnProperty(x) && bS4W[x] != null) gw7p[x] = bS4W[x]
        }
        return gw7p
    };
    var HN6H = Function.prototype;
    HN6H.eB6v = function (ly9p, xs2x) {
        var f = NEJ.F, xs2x = xs2x || f, ly9p = ly9p || f, dt6n = this;
        return function () {
            var d4h = {args: NEJ.R.slice.call(arguments, 0)};
            ly9p(d4h);
            if (!d4h.stopped) {
                d4h.value = dt6n.apply(this, d4h.args);
                xs2x(d4h)
            }
            return d4h.value
        }
    };
    HN6H.g4k = function () {
        var bf4j = arguments, gw7p = arguments[0], bpR8J = this;
        return function () {
            var xq2x = NEJ.R.slice.call(bf4j, 1);
            NEJ.R.push.apply(xq2x, arguments);
            return bpR8J.apply(gw7p || window, xq2x)
        }
    };
    HN6H.ew6q = function () {
        var bf4j = arguments, gw7p = NEJ.R.shift.call(bf4j), bpR8J = this;
        return function () {
            NEJ.R.push.apply(arguments, bf4j);
            return bpR8J.apply(gw7p || window, arguments)
        }
    };
    var HN6H = String.prototype;
    if (!HN6H.trim) {
        HN6H.trim = function () {
            var dh6b = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(dh6b, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, N4R = c4g("nej.p"), ub1x = window.navigator.platform,
        vn2x = window.navigator.userAgent;
    var lk9b = {mac: ub1x, win: ub1x, linux: ub1x, ipad: vn2x, ipod: vn2x, iphone: ub1x, android: vn2x};
    N4R.HP6J = lk9b;
    for (var x in lk9b) lk9b[x] = (new RegExp(x, "i")).test(lk9b[x]);
    lk9b.ios = lk9b.ipad || lk9b.iphone || lk9b.ipod;
    lk9b.tablet = lk9b.ipad;
    lk9b.desktop = lk9b.mac || lk9b.win || lk9b.linux && !lk9b.android;
    var is8k = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    N4R.ds6m = is8k;
    if (/msie\s+(.*?);/i.test(vn2x) || /trident\/.+rv:([\d\.]+)/i.test(vn2x)) {
        is8k.engine = "trident";
        is8k.browser = "ie";
        is8k.version = RegExp.$1;
        is8k.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var mz9q = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        is8k.release = mz9q[document.documentMode] || mz9q[parseInt(is8k.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(vn2x)) {
        is8k.engine = "webkit";
        is8k.release = RegExp.$1 || "";
        is8k.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(vn2x)) {
        is8k.engine = "gecko";
        is8k.release = RegExp.$1 || "";
        is8k.browser = "firefox";
        is8k.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(vn2x)) is8k.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(vn2x)) {
        is8k.engine = "presto";
        is8k.release = RegExp.$1 || "";
        is8k.browser = "opera";
        is8k.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(vn2x)) is8k.version = RegExp.$1 || ""
    }
    if (is8k.browser == "unknow") {
        var mz9q = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = mz9q.length, V4Z; i < l; i++) {
            V4Z = mz9q[i] == "safari" ? "version" : mz9q[i];
            if ((new RegExp(V4Z + "/(.*?)(?=\\s|$)", "i")).test(vn2x)) {
                is8k.browser = mz9q[i];
                is8k.version = RegExp.$1.trim();
                break
            }
        }
    }
    N4R.bzU0x = {};
    var beq5v = is8k.engine != "trident";
    N4R.nj9a = {
        gecko: is8k.engine != "gecko",
        webkit: is8k.engine != "webkit",
        presto: is8k.engine != "presto",
        trident0: beq5v || is8k.release > "2.0",
        trident1: beq5v || is8k.release < "6.0",
        trident2: beq5v || is8k.release > "3.0",
        trident: beq5v || is8k.release >= "6.0"
    }
})();
(function () {
    var it8l = NEJ.P("nej.c"), R4V = {};
    var bgp5u = function () {
        var dh6b = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (Y4c) {
            Y4c = Y4c || "";
            if (dh6b.test(Y4c)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var MQ7J = function () {
        var bAd0x = function (i4m, bz4D) {
            if (!i4m || !i4m.length) return;
            for (var i = 0, l = i4m.length, jK8C; i < l; i++) {
                jK8C = i4m[i];
                if (jK8C.indexOf("://") > 0) bz4D[bgp5u(jK8C)] = jK8C
            }
        };
        var bg4k = {
            portrait: {name: "portrait", dft: "portrait/"},
            "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"},
            "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"},
            "audio.swf": {name: "audio", dft: "nej_player_audio.swf"},
            "video.swf": {name: "video", dft: "nej_player_video.swf"},
            "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"}
        };
        return function (bS4W) {
            it8l.HS6M("root", bS4W.root || "/res/");
            var bqm8e, fT7M = it8l.B4F("root");
            for (var x in bg4k) {
                bqm8e = bg4k[x];
                it8l.HS6M(x, bS4W[bqm8e.name] || fT7M + bqm8e.dft)
            }
            var CP4T = bS4W.p_csrf;
            if (CP4T == !0) {
                CP4T = {cookie: "AntiCSRF", param: "AntiCSRF"}
            }
            it8l.HS6M("csrf", NEJ.EX({cookie: "", param: ""}, CP4T));
            R4V.frames = {};
            bAd0x(bS4W.p_frame, R4V.frames);
            R4V.flashs = {};
            bAd0x(bS4W.p_flash, R4V.flashs)
        }
    }();
    it8l.HS6M = function (J4N, D4H) {
        R4V[J4N] = D4H
    };
    it8l.B4F = function (J4N) {
        return R4V[J4N]
    };
    it8l.cjL2x = function (Y4c) {
        var sz1x = bgp5u(Y4c);
        return R4V.frames[sz1x] || sz1x + "/res/nej_proxy_frame.html"
    };
    it8l.csE5J = function (Y4c) {
        return R4V.flashs[bgp5u(Y4c)]
    };
    MQ7J(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c4g = NEJ.P, N4R = c4g("nej.p"), it8l = c4g("nej.c"), bS4W = window.NEJ_CONF || NEJ.O;
    if (N4R.nj9a.trident) return;
    it8l.HS6M("storage.swf", bS4W.storage || it8l.B4F("root") + "nej_storage.swf");
    if (N4R.ds6m.release < "4.0") {
        it8l.HS6M("blank.png", bS4W.blank || it8l.B4F("root") + "nej_blank.gif")
    }
    var i4m = bS4W.xdr, gK7D = /^(https?:\/\/.*?)(?=\/|$)/i, ku8m = /[\/?=&]/i;
    var bAZ0x = function (Y4c) {
        return (gK7D.test(Y4c) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i4m && !!i4m.length) for (var i = i4m.length - 1, Y4c, J4N; i >= 0; i--) {
        Y4c = i4m[i];
        J4N = bAZ0x(Y4c);
        if (!!J4N) it8l.HS6M(J4N, Y4c)
    }
    it8l.cHG9x = function (Y4c) {
        var J4N = bAZ0x(Y4c);
        if (!J4N) {
            if (ku8m.test(Y4c)) {
                J4N = location.protocol + "//" + location.host
            } else if (Y4c.indexOf("://") < 0) {
                J4N = location.protocol + "//" + Y4c
            } else {
                J4N = Y4c
            }
        }
        return it8l.B4F(J4N) || J4N + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c4g = NEJ.P, it8l = c4g("nej.c"), N4R = c4g("nej.g"), gJ7C = +(new Date);
    N4R.cHC9t = 1e4 - gJ7C;
    N4R.bua9R = 10001 - gJ7C;
    N4R.cHB9s = 10002 - gJ7C;
    N4R.bBG1x = 10003 - gJ7C;
    N4R.bYx8p = 10004 - gJ7C;
    N4R.cHv9m = 10005 - gJ7C;
    N4R.bie6Y = 10006 - gJ7C;
    N4R.cel0x = 10007 - gJ7C;
    N4R.yg3x = "Content-Type";
    N4R.cHq9h = "text/plain";
    N4R.EK5P = "multipart/form-data";
    N4R.cil1x = "application/x-www-form-urlencoded";
    N4R.bkx6r = it8l.B4F("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c4g = NEJ.P, fx7q = NEJ.R, N4R = c4g("nej.p"), a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        be4i = c4g("nej.h");
    var kb8T = N4R.ds6m.prefix, bDQ1x = N4R.bzU0x,
        ckG2x = {scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})"}, ckJ2x = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        }, Nh7a = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var MQ7J = function () {
        var sF1x = be4i.bFT2x();
        bDQ1x.css3d = !!sF1x && sF1x.m41 != null;
        var dh6b = /-([a-z])/g;
        for (var x in Nh7a) {
            Nh7a[bFU2x(x)] = Nh7a[x]
        }
    };
    var bFU2x = function () {
        var dh6b = /-([a-z])/g;
        return function (V4Z) {
            V4Z = V4Z || "";
            return V4Z.replace(dh6b, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bGh2x = function (V4Z) {
        return (!bDQ1x.css3d ? ckG2x : ckJ2x)[V4Z]
    };
    var bGz2x = function () {
        var dh6b = /\s+/;
        return function (fK7D) {
            fK7D = (fK7D || "").trim();
            return !!fK7D ? fK7D.split(dh6b) : null
        }
    }();
    var bdY4c = function (F4J, u4y, fK7D) {
        F4J = a2x.B4F(F4J);
        if (!F4J) return;
        k4o.bd4h(bGz2x(fK7D), function (dZ6T) {
            F4J.classList[u4y](dZ6T)
        })
    };
    be4i.HV6P = function (i4m) {
        return fx7q.slice.call(i4m, 0)
    };
    be4i.bjx6r = function (F4J) {
        return be4i.HV6P(F4J.children)
    };
    be4i.bjO6I = function (F4J, fK7D) {
        return be4i.HV6P(F4J.getElementsByClassName(fK7D))
    };
    be4i.bjP6J = function (F4J, HW6Q) {
        bdY4c(F4J, "add", HW6Q)
    };
    be4i.bkd6X = function (F4J, HX6R) {
        bdY4c(F4J, "remove", HX6R)
    };
    be4i.Np7i = function (F4J, HX6R, HW6Q) {
        bdY4c(F4J, "remove", HX6R);
        bdY4c(F4J, "add", HW6Q)
    };
    be4i.bmV7O = function (F4J, fK7D) {
        F4J = a2x.B4F(F4J);
        if (!F4J) return !1;
        var i4m = F4J.classList;
        if (!i4m || !i4m.length) return !1;
        return k4o.di6c(bGz2x(fK7D), function (dZ6T) {
            return i4m.contains(dZ6T)
        }) >= 0
    };
    be4i.bnO7H = function (F4J, dZ6T) {
    };
    be4i.bov7o = function (F4J) {
    };
    be4i.boW7P = function (ge7X, on0x) {
        ge7X.selectionEnd = on0x.end || 0;
        ge7X.selectionStart = on0x.start || 0;
        ge7X.focus()
    };
    be4i.bqL8D = function (ge7X) {
        return {end: ge7X.selectionEnd, start: ge7X.selectionStart}
    };
    be4i.bri8a = function () {
        var Ez5E = function (dZ6T, d4h) {
            var F4J = h4l.W4a(d4h);
            if (!F4J.value) a2x.x4B(F4J, dZ6T)
        };
        var HZ6T = function (dZ6T, d4h) {
            a2x.y4C(h4l.W4a(d4h), dZ6T)
        };
        return function (F4J, fl7e, dZ6T) {
            if (fl7e == 1) {
                h4l.s4w(F4J, "blur", Ez5E.g4k(null, dZ6T))
            }
            if (fl7e == 1 || fl7e == -1) {
                h4l.s4w(F4J, "focus", HZ6T.g4k(null, dZ6T))
            }
        }
    }();
    be4i.bfH5M = function (G4K) {
        return (new XMLSerializer).serializeToString(G4K) || ""
    };
    be4i.bfQ5V = function (Cu4y) {
        var fT7M = (new DOMParser).parseFromString(Cu4y, "text/xml").documentElement;
        return fT7M.nodeName == "parsererror" ? null : fT7M
    };
    be4i.bgn5s = function (F4J) {
    };
    be4i.oi0x = function (F4J) {
        return null
    };
    be4i.bgs5x = function (F4J) {
        return null
    };
    be4i.bgw5B = function (dO6I) {
    };
    be4i.bhM5R = function () {
        var bf4j = be4i.HV6P(arguments);
        bf4j[0] = a2x.B4F(bf4j[0]);
        if (!bf4j[0]) return null;
        bf4j[1] = (bf4j[1] || "").toLowerCase();
        if (!bf4j[1]) return null;
        return bf4j
    };
    be4i.Ct4x = function () {
        var xd2x = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, jl8d = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var czo7h = function (u4y) {
            return (kb8T.evt || kb8T.pro) + u4y
        };
        return function () {
            var bf4j = be4i.bhM5R.apply(be4i, arguments);
            if (!bf4j) return;
            var bdR4V = jl8d[bf4j[1]], bdQ4U = xd2x[bf4j[1]];
            if (!!bdR4V) {
                bf4j[4] = bf4j[1];
                bf4j[1] = czo7h(bdR4V)
            } else if (!!bdQ4U) {
                var V4Z = "on" + bf4j[1];
                if (!(V4Z in bf4j[0])) {
                    bf4j[4] = bf4j[1];
                    bf4j[1] = bdQ4U
                }
            }
            return bf4j
        }
    }();
    be4i.biQ6K = function () {
        var bf4j = arguments;
        bf4j[0].addEventListener(bf4j[1], bf4j[2], !!bf4j[3])
    };
    be4i.bdO4S = function () {
        var bf4j = arguments;
        bf4j[0].removeEventListener(bf4j[1], bf4j[2], !!bf4j[3])
    };
    be4i.bjh6b = function (F4J, u4y, e4i) {
        var d4h = document.createEvent("Event");
        d4h.initEvent(u4y, !0, !0);
        NEJ.X(d4h, e4i);
        F4J.dispatchEvent(d4h)
    };
    be4i.bFT2x = function () {
        var gK7D = /\((.*?)\)/, ku8m = /\s*,\s*/, i4m = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var bdN4R = function (sF1x) {
            var im8e = {};
            if (gK7D.test(sF1x || "")) {
                k4o.bd4h(RegExp.$1.split(ku8m), function (D4H, r4v) {
                    im8e[i4m[r4v]] = D4H || ""
                })
            }
            return im8e
        };
        return function (sF1x) {
            if (!!window.CSSMatrix) return new CSSMatrix(sF1x);
            var V4Z = kb8T.clz + "CSSMatrix";
            if (!!window[V4Z]) return new window[V4Z](sF1x || "");
            return bdN4R(sF1x)
        }
    }();
    be4i.bGJ2x = function () {
        var dh6b = /\{(.*?)\}/g;
        return function (V4Z, bz4D) {
            bz4D = bz4D || o;
            var or0x = bGh2x(V4Z);
            return !or0x ? "" : or0x.replace(dh6b, function ($1, $2) {
                var br4v = $2.split("|");
                return bz4D[br4v[0]] || br4v[1] || "0"
            })
        }
    }();
    be4i.bkE6y = function (F4J, V4Z, D4H) {
        F4J.style[be4i.bGK2x(V4Z)] = D4H
    };
    be4i.bGK2x = function () {
        var dh6b = /^[a-z]/, bkJ6D = kb8T.css;
        var cAr7k = function (V4Z) {
            return V4Z.replace(dh6b, function ($1) {
                return bkJ6D + $1.toUpperCase()
            })
        };
        return function (V4Z) {
            V4Z = bFU2x(V4Z);
            var cAy7r = be4i.cAE7x(V4Z, Nh7a);
            return cAy7r ? cAr7k(V4Z) : V4Z
        }
    }();
    be4i.cAE7x = function () {
        var dh6b = /^([a-z]+?)[A-Z]/;
        return function (V4Z, bz4D) {
            if (!bz4D[V4Z]) {
                if (dh6b.test(V4Z)) V4Z = RegExp.$1
            }
            return !!bz4D[V4Z]
        }
    }();
    be4i.cBQ7J = function () {
        var dh6b = /\$<(.*?)>/gi, bkJ6D = "-" + kb8T.css.toLowerCase() + "-";
        return function (kh8Z) {
            return kh8Z.replace(dh6b, function ($1, $2) {
                var eQ6K = $2, br4v = eQ6K.split("|"), or0x = bGh2x(br4v[0]);
                if (!!or0x) {
                    return be4i.bGJ2x(br4v[0], k4o.hv7o(br4v[1]))
                }
                return !be4i.cCf7Y(eQ6K, Nh7a) ? eQ6K : bkJ6D + eQ6K
            })
        }
    }();
    be4i.cCf7Y = function (V4Z, bz4D) {
        return !!bz4D[V4Z]
    };
    be4i.bpq7j = function (ch5m, kh8Z) {
        ch5m.textContent = kh8Z
    };
    be4i.bqi8a = function (ch5m, kh8Z) {
        var zN3x = ch5m.sheet, bq4u = zN3x.cssRules.length;
        zN3x.insertRule(kh8Z, bq4u);
        return zN3x.cssRules[bq4u]
    };
    be4i.cGn9e = function (F4J, e4i) {
    };
    be4i.bdB4F = function (bdA4E) {
        return (bdA4E || "").toLowerCase() != "transparent"
    };
    be4i.cCP8H = function (F4J) {
    };
    be4i.btl8d = function (F4J, V4Z) {
        if (!!F4J.getAttribute) return F4J.getAttribute(V4Z);
        return ""
    };
    be4i.bdz4D = function (eK6E) {
        a2x.cJ6D(eK6E)
    };
    MQ7J()
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), N4R = c4g("nej.p"), be4i = c4g("nej.h");
    if (N4R.nj9a.trident0) return;
    var gJ7C = +(new Date);
    R4V = {};
    be4i.bnO7H = be4i.bnO7H.eB6v(function (d4h) {
        d4h.stopped = !0;
        var bf4j = d4h.args, C4G = a2x.lv9m(bf4j[0]), J4N = "hover-" + C4G;
        if (!C4G || !!R4V[J4N]) return;
        R4V[J4N] = !0;
        h4l.s4w(C4G, "mouseenter", a2x.y4C.g4k(a2x, C4G, bf4j[1]));
        h4l.s4w(C4G, "mouseleave", a2x.x4B.g4k(a2x, C4G, bf4j[1]))
    });
    be4i.bov7o = function () {
        var cGl9c = function () {
        };
        return be4i.bov7o.eB6v(function (d4h) {
            d4h.stopped = !0;
            var F4J = d4h.args[0], C4G = "fixed-" + a2x.lv9m(F4J);
            if (!!R4V[C4G]) return;
            var bg4k = {};
            R4V[C4G] = bg4k
        })
    }();
    be4i.bgn5s = be4i.bgn5s.eB6v(function (d4h) {
        d4h.stopped = !0;
        var F4J = d4h.args[0], ch5m = F4J.style, bGY2x = a2x.oy0x();
        ch5m.width = bGY2x.scrollWidth + "px";
        ch5m.height = bGY2x.scrollHeight + "px"
    });
    be4i.oi0x = be4i.oi0x.eB6v(function (d4h) {
        d4h.stopped = !0;
        var F4J = d4h.args[0], kX9O = R4V[F4J.msk];
        if (!kX9O) {
            F4J.msk = gJ7C++;
            kX9O = a2x.dg6a("iframe");
            kX9O.style.position = "absolute";
            R4V[F4J.msk] = kX9O
        }
        d4h.value = kX9O;
        var ch5m = kX9O.style;
        ch5m.top = (parseInt(a2x.df6Z(F4J, "top")) || 0) + "px";
        ch5m.left = (parseInt(a2x.df6Z(F4J, "left")) || 0) + "px";
        ch5m.width = F4J.offsetWidth + "px";
        ch5m.height = F4J.offsetHeight + "px";
        F4J.insertAdjacentElement("beforeBegin", kX9O)
    });
    be4i.bgs5x = be4i.bgs5x.eB6v(function (d4h) {
        d4h.stopped = !0;
        var kX9O = R4V[d4h.args[0].msk];
        if (!!kX9O) a2x.mY9P(kX9O)
    })
})();
(function () {
    var c4g = NEJ.P, N4R = c4g("nej.p"), a2x = c4g("nej.e"), be4i = c4g("nej.h");
    if (N4R.nj9a.trident1) return;
    be4i.Ct4x = function () {
        var xd2x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return be4i.Ct4x.eB6v(function (d4h) {
            var bf4j = be4i.bhM5R.apply(be4i, d4h.args);
            if (!bf4j) {
                d4h.stopped = !0;
                return
            }
            var u4y = xd2x[bf4j[1]];
            if (!!u4y && ("on" + u4y).toLowerCase() in bf4j[0]) {
                bf4j[4] = bf4j[1];
                bf4j[1] = u4y;
                d4h.stopped = !0;
                d4h.value = bf4j
            }
        })
    }();
    be4i.bdB4F = function (bdA4E) {
        return !0
    };
    be4i.bdz4D = be4i.bdz4D.eB6v(function (d4h) {
        d4h.stopped = !0;
        var eK6E = d4h.args[0];
        a2x.ba4e(eK6E, "display", "none");
        try {
            eK6E.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {
        }
    })
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, N4R = c4g("nej.p"), a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        be4i = c4g("nej.h"), bmb7U = {};
    if (N4R.nj9a.trident) return;
    be4i.HV6P = be4i.HV6P.eB6v(function (d4h) {
        d4h.stopped = !0;
        var i4m = d4h.args[0];
        if (!i4m) {
            d4h.value = null;
            return
        }
        var r4v = 0, o4s = [];
        while (!!i4m[r4v]) {
            o4s.push(i4m[r4v++])
        }
        d4h.value = o4s
    });
    be4i.bjx6r = be4i.bjx6r.eB6v(function (d4h) {
        d4h.stopped = !0;
        var br4v = [];
        k4o.bd4h(d4h.args[0].childNodes, function (f4j) {
            if (f4j.nodeType == 1) br4v.push(f4j)
        });
        d4h.value = br4v
    });
    be4i.bjO6I = be4i.bjO6I.eB6v(function (d4h) {
        var F4J = d4h.args[0];
        if (!!F4J.getElementsByClassName) return;
        d4h.stopped = !0;
        var o4s = [], Ny9p = new RegExp("(\\s|^)(?:" + d4h.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k4o.bd4h(F4J.getElementsByTagName("*"), function (f4j) {
            if (Ny9p.test(f4j.className)) o4s.push(f4j)
        });
        d4h.value = o4s
    });
    be4i.boW7P = be4i.boW7P.eB6v(function (d4h) {
        var ge7X = d4h.args[0], on0x = d4h.args[1];
        if (ge7X.selectionStart == null) {
            d4h.stopped = !0;
            var db6V = ge7X.createTextRange();
            db6V.collapse(!0);
            db6V.moveStart("character", on0x.start);
            db6V.moveEnd("character", on0x.end - on0x.start);
            db6V.select();
            ge7X.focus()
        }
    });
    be4i.bqL8D = be4i.bqL8D.eB6v(function (d4h) {
        var ge7X = d4h.args[0];
        ge7X.focus();
        if (ge7X.selectionStart == null) {
            d4h.stopped = !0;
            var bHg2x = document.selection.createRange();
            var bHh2x = ge7X.createTextRange();
            bHh2x.moveToBookmark(bHg2x.getBookmark());
            var bhQ5V = ge7X.createTextRange();
            bhQ5V.collapse(!0);
            bhQ5V.setEndPoint("EndToStart", bHh2x);
            var hz7s = bhQ5V.text.length;
            d4h.value = {start: hz7s, end: hz7s + bHg2x.text.length}
        }
    });
    be4i.bfH5M = be4i.bfH5M.eB6v(function (d4h) {
        if (!!window.XMLSerializer) return;
        d4h.stopped = !0;
        var F4J = d4h.args[0];
        d4h.value = F4J.xml != null ? F4J.xml : F4J.outHTML
    });
    be4i.bfQ5V = function () {
        var NG9x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bWo8g = function () {
            try {
                for (var i = 0, l = NG9x.length; i < l; i++) return new ActiveXObject(NG9x[i])
            } catch (ex) {
                return null
            }
        };
        return be4i.bfQ5V.eB6v(function (d4h) {
            if (!!window.DOMParser) return;
            d4h.stopped = !0;
            var nT9K = bWo8g();
            if (!!nT9K && nT9K.loadXML(d4h.args[0]) && !nT9K.parseError.errorCode) d4h.value = nT9K.documentElement
        })
    }();
    be4i.Ct4x = function () {
        var jl8d = {input: "propertychange", load: "readystatechange"};
        for (var x in jl8d) bmb7U[jl8d[x]] = !0;
        var bYu8m = function (F4J, u4y) {
            if ("on" + u4y in F4J) return null;
            return jl8d[u4y] || ""
        };
        var bYC8u = function (u4y, dt6n) {
            var cK6E = dt6n;
            switch (u4y) {
                case"readystatechange":
                    cK6E = function (d4h) {
                        var F4J = h4l.W4a(d4h) || this;
                        if (F4J.readyState == "loaded" || F4J.readyState == "complete") {
                            d4h.target = F4J;
                            dt6n.call(F4J, d4h)
                        }
                    };
                    break;
                case"propertychange":
                    cK6E = function (d4h) {
                        var F4J = h4l.W4a(d4h) || this;
                        if ("value" in F4J && d4h.propertyName == "value") {
                            d4h.target = F4J;
                            dt6n.call(F4J, d4h)
                        }
                    };
                    break
            }
            return cK6E
        };
        return be4i.Ct4x.eB6v(function (d4h) {
            var bf4j = be4i.bhM5R.apply(be4i, d4h.args);
            if (!bf4j) {
                d4h.stopped = !0;
                return
            }
            var u4y = bYu8m(bf4j[0], bf4j[1]);
            if (!!u4y) {
                d4h.stopped = !0;
                bf4j[4] = bf4j[1];
                bf4j[1] = u4y;
                if (!!bf4j[2]) {
                    bf4j[5] = bf4j[2];
                    bf4j[2] = bYC8u(bf4j[1], bf4j[2])
                }
                d4h.value = bf4j
            }
        }, function (d4h) {
            var bf4j = d4h.value;
            if (!bf4j[0] || !k4o.gG7z(bf4j[2])) return;
            if (!k4o.gG7z(bf4j[5])) bf4j[5] = bf4j[2];
            bf4j[2] = bf4j[2].g4k(bf4j[0])
        })
    }();
    be4i.biQ6K = be4i.biQ6K.eB6v(function (d4h) {
        var bf4j = d4h.args;
        if (!!bmb7U[bf4j[1]] || !document.addEventListener) {
            d4h.stopped = !0;
            bf4j[0].attachEvent("on" + bf4j[1], bf4j[2])
        }
    });
    be4i.bdO4S = be4i.bdO4S.eB6v(function (d4h) {
        var bf4j = d4h.args;
        if (!!bmb7U[bf4j[1]] || !document.removeEventListener) {
            d4h.stopped = !0;
            bf4j[0].detachEvent("on" + bf4j[1], bf4j[2])
        }
    });
    be4i.bjh6b = be4i.bjh6b.eB6v(function (d4h) {
        if (!document.createEvent) {
            d4h.stopped = !0;
            var bf4j = d4h.args, bJt3x = document.createEventObject();
            NEJ.X(bJt3x, bf4j[2]);
            try {
                bf4j[0].fireEvent("on" + bf4j[1], bJt3x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    be4i.bkE6y = be4i.bkE6y.eB6v(function (d4h) {
        var bf4j = d4h.args, V4Z = bf4j[1].toLowerCase();
        if (V4Z == "opacity" && !(V4Z in document.body.style)) {
            bf4j[1] = "filter";
            bf4j[2] = "alpha(opacity=" + bf4j[2] * 100 + ")"
        }
    });
    be4i.bpq7j = function () {
        var fo7h = 30;
        return be4i.bpq7j.eB6v(function (d4h) {
            var F4J = d4h.args[0];
            if (!F4J.styleSheet) return;
            d4h.stopped = !0;
            var kh8Z = d4h.args[1];
            var i4m = document.styleSheets;
            if (i4m.length > fo7h) {
                F4J = i4m[fo7h];
                kh8Z = F4J.cssText + kh8Z
            } else {
                F4J = F4J.styleSheet
            }
            F4J.cssText = kh8Z
        })
    }();
    be4i.bqi8a = be4i.bqi8a.eB6v(function (d4h) {
        var bf4j = d4h.args, zN3x = bf4j[0].sheet;
        if (!!zN3x) return;
        d4h.stopped = !0;
        var zN3x = bf4j[0].styleSheet, bq4u = zN3x.rules.length, br4v = bf4j[1].split(/[\{\}]/);
        zN3x.addRule(br4v[0], br4v[1], bq4u);
        d4h.value = zN3x.rules[bq4u]
    });
    be4i.bri8a = function () {
        var Ez5E = function (dZ6T, d4h) {
            a2x.x4B(h4l.W4a(d4h), dZ6T)
        };
        return be4i.bri8a.eB6v(function (d4h) {
            if (N4R.ds6m.release >= "4.0") return;
            var bf4j = d4h.args;
            if (bf4j[1] != 1) {
                h4l.s4w(bf4j[0], "blur", Ez5E.g4k(null, bf4j[2]));
                bf4j[1] = -1
            }
        })
    }();
    be4i.bdB4F = function (bdA4E) {
        return !0
    };
    be4i.btl8d = be4i.btl8d.eB6v(function (d4h) {
        var bf4j = d4h.args, f4j = (bf4j[0].attributes || bb4f)[bf4j[1]];
        if (!!f4j) {
            d4h.stopped = !0;
            d4h.value = f4j.value
        }
    }, function (d4h) {
        var bf4j = d4h.args;
        if (bf4j[1] == "maxlength" && d4h.value == 2147483647) d4h.value = ""
    });
    if (N4R.ds6m.release < 5) {
        be4i.bgw5B = function () {
            var eg6a, eK6E, jZ8R = [], bkc6W = "cb-" + +(new Date),
                bo4s = '<script>parent.nej.h["' + bkc6W + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bJA3x = function () {
                eg6a = window.clearTimeout(eg6a);
                if (!jZ8R.length) return;
                var dO6I = jZ8R.shift();
                try {
                    var wK2x = eK6E.contentWindow.document;
                    wK2x.open();
                    wK2x.write("<head><title>");
                    wK2x.write(document.title);
                    wK2x.write("</title>");
                    wK2x.write(bo4s.replace("#<HASH>", encodeURIComponent(dO6I)));
                    wK2x.write("</head><body></body>");
                    if (location.hostname != document.domain) wK2x.domain = document.domain;
                    wK2x.close();
                    be4i[bkc6W] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jZ8R.unshift(dO6I)
                }
                eg6a = window.setTimeout(bJA3x, 50)
            };
            return be4i.bgw5B.eB6v(function (d4h) {
                d4h.stopped = !0;
                var dO6I = d4h.args[0];
                if (!!be4i[bkc6W] || !eK6E && !dO6I) return;
                jZ8R.push(dO6I);
                if (!eK6E) eK6E = a2x.bdk4o();
                bJA3x()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {
    }
})();
(function () {
    var c4g = NEJ.P, h4l = c4g("nej.v"), be4i = c4g("nej.h"), N4R = c4g("nej.p"), bdj4n = N4R.bzU0x;
    if (N4R.nj9a.gecko) return;
    var MQ7J = function () {
        bdj4n.css3d = bdj4n.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (iL8D, F4J) {
            if (!iL8D || !F4J) return;
            switch (iL8D) {
                case"beforeEnd":
                    this.appendChild(F4J);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(F4J, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(F4J) : this.insertBefore(F4J, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(F4J) : this.parentNode.insertBefore(F4J, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bo4s) {
                this.textContent = bo4s
            })
        }
    };
    be4i.Ct4x = function () {
        var gK7D = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return be4i.Ct4x.eB6v(function (d4h) {
            var bf4j = d4h.args;
            if (gK7D.test(bf4j[1] || "")) {
                d4h.stopped = !0;
                d4h.value = bf4j
            }
        })
    }();
    be4i.cCP8H = function () {
        var cah9Y = function (d4h) {
            h4l.bh4l(d4h);
            h4l.W4a(d4h).control.click()
        };
        return function (F4J) {
            h4l.s4w(F4J, "click", cah9Y)
        }
    }();
    MQ7J()
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), be4i = c4g("nej.h");
    var bdh4l = function () {
        var mz9q = !!document.body.classList;
        return function () {
            return mz9q
        }
    }();
    var bJK3x = function () {
        var dh6b = /\s+/g;
        return function (fK7D) {
            fK7D = (fK7D || "").trim();
            return !fK7D ? null : new RegExp("(\\s|^)(?:" + fK7D.replace(dh6b, "|") + ")(?=\\s|$)", "g")
        }
    }();
    be4i.Np7i = be4i.Np7i.eB6v(function (d4h) {
        if (bdh4l()) return;
        d4h.stopped = !0;
        var bf4j = d4h.args, F4J = a2x.B4F(bf4j[0]);
        if (!F4J || !bf4j[1] && !bf4j[2]) return;
        var fK7D = F4J.className || "";
        var HW6Q = " " + (bf4j[2] || ""), HX6R = bJK3x((bf4j[1] || "") + HW6Q);
        !!HX6R && (fK7D = fK7D.replace(HX6R, "$1"));
        F4J.className = (fK7D + HW6Q).replace(/\s+/g, " ").trim()
    });
    be4i.bjP6J = be4i.bjP6J.eB6v(function (d4h) {
        if (bdh4l()) return;
        d4h.stopped = !0;
        var bf4j = d4h.args;
        be4i.Np7i(bf4j[0], "", bf4j[1])
    });
    be4i.bkd6X = be4i.bkd6X.eB6v(function (d4h) {
        if (bdh4l()) return;
        d4h.stopped = !0;
        var bf4j = d4h.args;
        be4i.Np7i(bf4j[0], bf4j[1], "")
    });
    be4i.bmV7O = be4i.bmV7O.eB6v(function (d4h) {
        if (bdh4l()) return;
        d4h.stopped = !0;
        var bf4j = d4h.args, F4J = a2x.B4F(bf4j[0]);
        if (!F4J) {
            d4h.value = !1;
            return
        }
        var dh6b = bJK3x(bf4j[1]);
        d4h.value = !dh6b ? !1 : dh6b.test(F4J.className || "")
    })
})();
(function () {
    var c4g = NEJ.P, N4R = c4g("nej.p"), be4i = c4g("nej.h");
    if (N4R.nj9a.webkit) return;
    be4i.bdB4F = function (bdA4E) {
        return !0
    }
})();
(function () {
    var c4g = NEJ.P, be4i = c4g("nej.h"), a2x = c4g("nej.e"), k4o = c4g("nej.u"), h4l = c4g("nej.v"),
        cY6S = c4g("nej.x"), R4V = {};
    var bKa3x = function (F4J) {
        F4J = a2x.B4F(F4J);
        if (!F4J || !R4V[F4J.id]) return;
        var bdf4j = !0, C4G = F4J.id;
        k4o.eC6w(R4V[C4G], function () {
            bdf4j = !1;
            return !0
        });
        if (bdf4j) delete R4V[C4G]
    };
    h4l.s4w = cY6S.s4w = function () {
        var cbk9b = function () {
            var bf4j = be4i.Ct4x.apply(be4i, arguments);
            if (!bf4j || !bf4j[2]) return;
            var uj1x = a2x.lv9m(bf4j[0]), oZ0x = R4V[uj1x] || {};
            R4V[uj1x] = oZ0x;
            uj1x = bf4j[4] || bf4j[1];
            var BY4c = oZ0x[uj1x] || [];
            oZ0x[uj1x] = BY4c;
            BY4c.push({type: bf4j[1], func: bf4j[2], capt: !!bf4j[3], sfun: bf4j[5] || bf4j[2]});
            return bf4j.slice(0, 4)
        };
        return function () {
            var bf4j = cbk9b.apply(null, arguments);
            if (!!bf4j) be4i.biQ6K.apply(be4i, bf4j);
            return this
        }
    }();
    h4l.mw9n = cY6S.mw9n = function () {
        var cbN9E = function () {
            var xq2x = arguments, uj1x = a2x.lv9m(xq2x[0]), oZ0x = R4V[uj1x], u4y = (xq2x[1] || "").toLowerCase(),
                d4h = xq2x[2];
            if (!oZ0x || !u4y || !d4h) return;
            oZ0x = oZ0x[u4y];
            if (!oZ0x) return;
            var cbV9M = !!xq2x[3], r4v = k4o.di6c(oZ0x, function (jl8d) {
                return d4h == jl8d.sfun && cbV9M == jl8d.capt
            });
            if (r4v < 0) return;
            var jl8d = oZ0x.splice(r4v, 1)[0];
            return !jl8d ? null : [a2x.B4F(uj1x), jl8d.type, jl8d.func, jl8d.capt]
        };
        return function () {
            var bf4j = cbN9E.apply(null, arguments);
            if (!!bf4j) {
                be4i.bdO4S.apply(be4i, bf4j);
                bKa3x(bf4j[0])
            }
            return this
        }
    }();
    h4l.hd7W = cY6S.hd7W = function () {
        var bKH3x = function () {
            var xq2x = arguments, uj1x = a2x.lv9m(xq2x[0]), oZ0x = R4V[uj1x], BY4c = (xq2x[1] || "").toLowerCase();
            if (!oZ0x || !BY4c) return;
            var F4J = a2x.B4F(uj1x);
            k4o.no9f(oZ0x[BY4c], function (jl8d, r4v, i4m) {
                be4i.bdO4S(F4J, jl8d.type, jl8d.func, jl8d.capt);
                i4m.splice(r4v, 1)
            });
            delete oZ0x[BY4c]
        };
        var cdb0x = function (F4J) {
            F4J = a2x.B4F(F4J);
            if (!F4J) return;
            var C4G = F4J.id;
            k4o.eC6w(R4V[C4G], function (i4m, u4y) {
                bKH3x(C4G, u4y)
            });
            delete R4V[C4G]
        };
        return function (F4J, u4y) {
            !u4y ? cdb0x(F4J) : bKH3x(F4J, u4y);
            bKa3x(F4J);
            return this
        }
    }();
    h4l.W4a = function () {
        var btY9P;
        var Ih6b = function (V4Z, F4J) {
            var br4v = V4Z.split(":");
            if (br4v.length > 1) {
                if (!btY9P) btY9P = {c: a2x.bE4I, d: a2x.t4x, a: a2x.gh7a};
                var Ii6c = btY9P[br4v[0]];
                if (!!Ii6c) return !!Ii6c(F4J, br4v[1]);
                V4Z = br4v[1]
            }
            return !!a2x.gh7a(F4J, V4Z) || !!a2x.t4x(F4J, V4Z) || a2x.bE4I(F4J, V4Z)
        };
        return function (d4h) {
            if (!d4h) return null;
            var F4J = d4h.target || d4h.srcElement, dV6P = arguments[1];
            if (!dV6P) return F4J;
            if (k4o.fG7z(dV6P)) dV6P = Ih6b.g4k(null, dV6P);
            if (k4o.gG7z(dV6P)) {
                while (F4J) {
                    if (!!dV6P(F4J)) return F4J;
                    F4J = F4J.parentNode
                }
                return null
            }
            return F4J
        }
    }();
    h4l.bh4l = function (d4h) {
        h4l.tr1x(d4h);
        h4l.cp5u(d4h);
        return this
    };
    h4l.tr1x = function (d4h) {
        if (!!d4h) {
            !!d4h.stopPropagation ? d4h.stopPropagation() : d4h.cancelBubble = !0
        }
        return this
    };
    h4l.cp5u = function (d4h) {
        if (!!d4h) {
            !!d4h.preventDefault ? d4h.preventDefault() : d4h.returnValue = !1
        }
        return this
    };
    h4l.cFK8C = function () {
        var qQ0x = !1;
        var cdn0x = function () {
            if (qQ0x) return;
            qQ0x = !0;
            h4l.s4w(document, "click", cdp0x, !0)
        };
        var cdp0x = function (d4h) {
            var F4J = h4l.W4a(d4h), cds0x = a2x.t4x(F4J, "stopped");
            if (cds0x == "true") {
                h4l.bh4l(d4h);
                a2x.t4x(F4J, "stopped", "false")
            }
        };
        return function (d4h) {
            if (!d4h) return;
            if (d4h.type == "click") {
                h4l.bh4l(d4h);
                return
            }
            cdn0x();
            a2x.t4x(h4l.W4a(d4h), "stopped", "true")
        }
    }();
    h4l.jB8t = function (d4h) {
        return d4h.pageX != null ? d4h.pageX : d4h.clientX + a2x.oy0x().scrollLeft
    };
    h4l.mf9W = function (d4h) {
        return d4h.pageY != null ? d4h.pageY : d4h.clientY + a2x.oy0x().scrollTop
    };
    h4l.z4D = cY6S.z4D = function (F4J, u4y, e4i) {
        var bf4j = be4i.Ct4x(F4J, u4y);
        if (!!bf4j) be4i.bjh6b(bf4j[0], bf4j[1], e4i);
        return this
    };
    c4g("dbg").dumpEV = function () {
        return R4V
    };
    cY6S.isChange = !0
})();
(function () {
    var o = !0, w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify, b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({a: [f, o, !1, w, "\0\b\n\f\r\t"]}) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {
                                }
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {
                                }
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }

        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {
        }
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor, J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function (a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function (a) {
                var f = {}, c;
                if ((f.__proto__ = w, f.__proto__ = {toString: 1}, f).toString != m) p = function (a) {
                    var f = this.__proto__, a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                }; else {
                    c = f.constructor;
                    p = function (a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {"boolean": 1, number: 1, string: 1, "undefined": 1};
            C = function (a, f) {
                var c = 0, b, h, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function (a, f) {
                    var c = {}, b = m.call(a) == "[object Function]", d;
                    for (d in a) !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function (a, f) {
                    var c = m.call(a) == "[object Function]", b, d;
                    for (b in a) !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                }; else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c) if (d = typeof a.constructor != "function") {
                            d = typeof a.hasOwnProperty;
                            d = d == "object" ? !!a.hasOwnProperty : !K[d]
                        }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a) !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b)) ;
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                    u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    }, G = function (a) {
                        var f = '"', b = 0, d = a.length, h = d > 10 && s, n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    }, E = function (a, b, c, d, h, n, e) {
                        var g = b[a], i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {
                        }
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON")) if (g > -1 / 0 && g < 1 / 0) {
                                if (z) {
                                    k = t(g / 864e5);
                                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++) ;
                                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++) ;
                                    k = 1 + k - z(i, j);
                                    l = (g % 864e5 + 864e5) % 864e5;
                                    q = t(l / 36e5) % 24;
                                    s = t(l / 6e4) % 60;
                                    v = t(l / 1e3) % 60;
                                    l = l % 1e3
                                } else {
                                    i = g.getUTCFullYear();
                                    j = g.getUTCMonth();
                                    k = g.getUTCDate();
                                    q = g.getUTCHours();
                                    s = g.getUTCMinutes();
                                    v = g.getUTCSeconds();
                                    l = g.getUTCMilliseconds()
                                }
                                g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                            } else g = w; else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;) if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b) if (m.call(b) == "[object Function]") h = b; else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1)) ;
                    }
                    if (c) if (m.call(c) == "[object Number]") {
                        if ((c = c - c % 1) > 0) {
                            d = "";
                            for (c > 10 && (c = 10); d.length < c; d = d + " ") ;
                        }
                    } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, b, A,
                    j = function () {
                        b = A = w;
                        throw SyntaxError()
                    }, q = function () {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j(); else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++) ;
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++) ;
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++) ;
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    }, F = function (a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = []; ; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {}; ; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    }, I = function (a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    }, H = function (a, b, c) {
                        var d = a[b], h;
                        if (typeof d == "object" && d) if (m.call(d) == "[object Array]") for (h = d.length; h--;) I(d, h, c); else C(d, function (a) {
                            I(d, a, c)
                        });
                        return c.call(a, b, d)
                    };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var c4g = NEJ.P, N4R = c4g("nej.p");
    if (N4R.nj9a.trident0) return;
    JSON.parse = JSON.parse.eB6v(function (d4h) {
        var cI6C = d4h.args[0] || "";
        if (cI6C.length >= 5e5) {
            d4h.stopped = !0;
            d4h.value = eval("(" + cI6C + ")")
        }
    })
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, em6g = c4g("nej.g"), a2x = c4g("nej.e"), k4o = c4g("nej.u"),
        h4l = c4g("nej.v"), be4i = c4g("nej.h"), cY6S = c4g("nej.x"), Ij6d, bhO5T = {},
        R4V = document.createDocumentFragment();
    a2x.lv9m = cY6S.lv9m = function (F4J) {
        F4J = a2x.B4F(F4J);
        if (!F4J) return;
        var C4G = !!F4J.id ? F4J.id : "auto-id-" + k4o.Oe9V(16);
        F4J.id = C4G;
        if (a2x.B4F(C4G) != F4J) bhO5T[C4G] = F4J;
        return C4G
    };
    a2x.B4F = cY6S.B4F = function (F4J) {
        var f4j = bhO5T["" + F4J];
        if (!!f4j) return f4j;
        if (!k4o.fG7z(F4J) && !k4o.wg2x(F4J)) return F4J;
        return document.getElementById(F4J)
    };
    a2x.dk6e = cY6S.dk6e = function (F4J, dZ6T) {
        F4J = a2x.B4F(F4J);
        if (!F4J) return null;
        var i4m = be4i.bjx6r(F4J);
        if (!!dZ6T) k4o.no9f(i4m, function (f4j, r4v) {
            if (!a2x.bE4I(f4j, dZ6T)) i4m.splice(r4v, 1)
        });
        return i4m
    };
    a2x.H4L = cY6S.H4L = function (F4J, fK7D) {
        F4J = a2x.B4F(F4J);
        return !F4J ? null : be4i.bjO6I(F4J, fK7D.trim())
    };
    a2x.bKU3x = cY6S.bKU3x = function (F4J) {
        F4J = a2x.B4F(F4J);
        if (!!F4J) {
            F4J = F4J.parentNode;
            while (!!F4J) {
                if (F4J.scrollHeight > F4J.clientHeight) break;
                F4J = F4J.parentNode
            }
            if (!!F4J) return F4J
        }
        var oZ0x = document.body.scrollHeight, BY4c = document.documentElement.scrollHeight;
        return BY4c >= oZ0x ? document.documentElement : document.body
    };
    a2x.oy0x = function () {
        var bKV3x = function (i4m) {
            var o4s = 0;
            k4o.bd4h(i4m, function (eE6y) {
                if (!eE6y) return;
                if (!o4s) {
                    o4s = eE6y
                } else {
                    o4s = Math.min(o4s, eE6y)
                }
            });
            return o4s
        };
        return function (wK2x) {
            var Il6f = wK2x || document, BC4G = Il6f.body, Bw4A = Il6f.documentElement, o4s = {
                scrollTop: Math.max(BC4G.scrollTop, Bw4A.scrollTop),
                scrollLeft: Math.max(BC4G.scrollLeft, Bw4A.scrollLeft),
                clientWidth: bKV3x([BC4G.clientWidth, BC4G.offsetWidth, Bw4A.clientWidth, Bw4A.offsetWidth]),
                clientHeight: bKV3x([BC4G.clientHeight, BC4G.offsetHeight, Bw4A.clientHeight, Bw4A.offsetHeight])
            };
            o4s.scrollWidth = Math.max(o4s.clientWidth, BC4G.scrollWidth, Bw4A.scrollWidth);
            o4s.scrollHeight = Math.max(o4s.clientHeight, BC4G.scrollHeight, Bw4A.scrollHeight);
            return o4s
        }
    }();
    a2x.cFD8v = function (fo7h, oV0x) {
        var o4s = NEJ.X({}, oV0x), bKW3x = fo7h.width / fo7h.height, bcG4K = oV0x.width / oV0x.height;
        if (bKW3x > bcG4K && oV0x.height > fo7h.height) {
            o4s.height = fo7h.height;
            o4s.width = o4s.height * bcG4K
        }
        if (bKW3x < bcG4K && oV0x.width > fo7h.width) {
            o4s.width = fo7h.width;
            o4s.height = o4s.width / bcG4K
        }
        return o4s
    };
    a2x.cFB8t = function () {
        var dh6b = /\s+/;
        var vE2x = {
            left: function () {
                return 0
            }, center: function (hx7q, oV0x) {
                return (hx7q.width - oV0x.width) / 2
            }, right: function (hx7q, oV0x) {
                return hx7q.width - oV0x.width
            }, top: function () {
                return 0
            }, middle: function (hx7q, oV0x) {
                return (hx7q.height - oV0x.height) / 2
            }, bottom: function (hx7q, oV0x) {
                return hx7q.height - oV0x.height
            }
        };
        return function (hx7q, oV0x, nJ9A) {
            var o4s = {}, br4v = (nJ9A || "").split(dh6b), gx7q = vE2x[br4v[1]] || vE2x.middle,
                gS7L = vE2x[br4v[0]] || vE2x.center;
            o4s.top = gx7q(hx7q, oV0x);
            o4s.left = gS7L(hx7q, oV0x);
            return o4s
        }
    }();
    a2x.tN1x = cY6S.tN1x = function (F4J, dZ6T) {
        be4i.bnO7H(F4J, dZ6T || a2x.t4x(F4J, "hover") || "js-hover");
        return this
    };
    a2x.Ip6j = cY6S.Ip6j = function (F4J) {
        F4J = a2x.B4F(F4J);
        if (!F4J) return;
        be4i.bov7o(F4J)
    };
    a2x.cdz0x = cY6S.cdz0x = function () {
        var R4V = {}, bKZ3x = 2;
        var cei0x = function (C4G, dZ6T, d4h) {
            R4V[C4G] = [h4l.jB8t(d4h), h4l.mf9W(d4h)];
            a2x.y4C(C4G, dZ6T)
        };
        var cem0x = function (C4G, dZ6T, d4h) {
            var bM4Q = R4V[C4G];
            if (!k4o.eJ6D(bM4Q)) return;
            var ceC0x = Math.abs(h4l.jB8t(d4h) - bM4Q[0]), cga1x = Math.abs(h4l.mf9W(d4h) - bM4Q[1]);
            if (ceC0x > bKZ3x || cga1x > bKZ3x) boI7B(C4G, dZ6T)
        };
        var boI7B = function (C4G, dZ6T) {
            if (k4o.eJ6D(R4V[C4G])) {
                R4V[C4G] = -1;
                a2x.x4B(C4G, dZ6T)
            }
        };
        return function (F4J, dZ6T) {
            var C4G = a2x.lv9m(F4J);
            if (!C4G || R4V[C4G] != null) return;
            R4V[C4G] = -1;
            dZ6T = dZ6T || a2x.t4x(C4G, "highlight") || "js-highlight";
            h4l.s4w(C4G, "touchstart", cei0x.g4k(null, C4G, dZ6T));
            h4l.s4w(document, "touchmove", cem0x.g4k(null, C4G, dZ6T));
            h4l.s4w(document, "touchend", boI7B.g4k(null, C4G, dZ6T));
            h4l.s4w(document, "touchcancel", boI7B.g4k(null, C4G, dZ6T))
        }
    }();
    a2x.Bd4h = cY6S.Bd4h = function () {
        var cgb1x = function (C4G, dZ6T, ciR2x) {
            var F4J = a2x.B4F(C4G), d4h = {clazz: dZ6T, target: F4J};
            if (a2x.bE4I(F4J, dZ6T)) {
                d4h.toggled = !1;
                a2x.x4B(F4J, dZ6T)
            } else {
                d4h.toggled = !0;
                a2x.y4C(F4J, dZ6T)
            }
            ciR2x.call(null, d4h)
        };
        return function (F4J, e4i) {
            F4J = a2x.B4F(F4J);
            if (!!F4J) {
                var im8e = {ontoggle: bs4w, clazz: "js-toggle", element: F4J.parentNode};
                if (k4o.fG7z(e4i)) {
                    var f4j = a2x.B4F(e4i);
                    !!f4j ? im8e.element = f4j : im8e.clazz = e4i
                } else {
                    NEJ.EX(im8e, e4i);
                    im8e.element = a2x.B4F(im8e.element)
                }
                var C4G = a2x.lv9m(im8e.element);
                h4l.s4w(F4J, "click", cgb1x.g4k(null, C4G, im8e.clazz, im8e.ontoggle || bs4w))
            }
            return this
        }
    }();
    a2x.mP9G = cY6S.mP9G = function (F4J, e4i) {
        F4J = a2x.B4F(F4J);
        if (!F4J) return;
        var fl7e = 0, dZ6T = "js-focus";
        if (k4o.wg2x(e4i)) {
            fl7e = e4i
        } else if (k4o.fG7z(e4i)) {
            dZ6T = e4i
        } else if (k4o.lw9n(e4i)) {
            fl7e = e4i.mode || fl7e;
            dZ6T = e4i.clazz || dZ6T
        }
        var D4H = parseInt(a2x.t4x(F4J, "mode"));
        if (!isNaN(D4H)) fl7e = D4H;
        D4H = a2x.t4x(F4J, "focus");
        if (!!D4H) dZ6T = D4H;
        be4i.bri8a(F4J, fl7e, dZ6T);
        return this
    };
    a2x.dg6a = function () {
        var bz4D = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (fB7u, fK7D, bI4M) {
            var F4J = document.createElement(fB7u);
            NEJ.X(F4J, bz4D[fB7u.toLowerCase()]);
            if (!!fK7D) F4J.className = fK7D;
            bI4M = a2x.B4F(bI4M);
            if (!!bI4M) bI4M.appendChild(F4J);
            return F4J
        }
    }();
    a2x.bdk4o = function () {
        var ckz2x = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var ckR2x = function (V4Z) {
            V4Z = V4Z.trim();
            if (!V4Z) return a2x.dg6a("iframe");
            var eK6E;
            try {
                eK6E = document.createElement('<iframe name="' + V4Z + '"></iframe>');
                eK6E.frameBorder = 0
            } catch (e) {
                eK6E = a2x.dg6a("iframe");
                eK6E.name = V4Z
            }
            return eK6E
        };
        return function (e4i) {
            e4i = e4i || bb4f;
            var eK6E = ckR2x(e4i.name || "");
            if (!e4i.visible) eK6E.style.display = "none";
            if (k4o.gG7z(e4i.onload)) h4l.s4w(eK6E, "load", function (d4h) {
                if (!eK6E.src) return;
                h4l.hd7W(eK6E, "load");
                e4i.onload(d4h)
            });
            var bI4M = e4i.parent;
            if (k4o.gG7z(bI4M)) {
                try {
                    bI4M(eK6E)
                } catch (e) {
                }
            } else {
                (a2x.B4F(bI4M) || document.body).appendChild(eK6E)
            }
            var cS6M = e4i.src || ckz2x();
            window.setTimeout(function () {
                eK6E.src = cS6M
            }, 0);
            return eK6E
        }
    }();
    a2x.cJ6D = cY6S.cJ6D = function () {
        var bNW4a = function (xJ3x) {
            xJ3x.src = em6g.bkx6r
        };
        var bOw4A = function (eh6b) {
            eh6b.src = "about:blank"
        };
        return function (F4J, cml3x) {
            F4J = a2x.B4F(F4J);
            if (!F4J) return this;
            if (!cml3x) h4l.hd7W(F4J);
            delete bhO5T[F4J.id];
            var fB7u = F4J.tagName;
            if (fB7u == "IFRAME") {
                bOw4A(F4J)
            } else if (fB7u == "IMG") {
                bNW4a(F4J)
            } else if (!!F4J.getElementsByTagName) {
                k4o.bd4h(F4J.getElementsByTagName("img"), bNW4a);
                k4o.bd4h(F4J.getElementsByTagName("iframe"), bOw4A)
            }
            if (!!F4J.parentNode) {
                F4J.parentNode.removeChild(F4J)
            }
            return this
        }
    }();
    a2x.mY9P = cY6S.mY9P = function (F4J) {
        F4J = a2x.B4F(F4J);
        if (!!F4J) R4V.appendChild(F4J);
        return this
    };
    a2x.bOO4S = cY6S.bOO4S = function (F4J) {
        F4J = a2x.B4F(F4J);
        if (!F4J) return;
        k4o.no9f(F4J.childNodes, function (f4j) {
            a2x.cJ6D(f4j)
        })
    };
    a2x.Iv6p = cY6S.Iv6p = function () {
        var dZ6T, gK7D = /\s+/;
        var cns3x = function () {
            if (!!dZ6T) return;
            dZ6T = a2x.tO1x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a2x.bOQ4U()
        };
        return function (F4J, e4i) {
            F4J = a2x.B4F(F4J);
            if (!F4J) return;
            cns3x();
            e4i = e4i || bb4f;
            var bI4M = F4J.parentNode;
            if (!a2x.bE4I(bI4M, dZ6T)) {
                bI4M = a2x.dg6a("span", dZ6T);
                F4J.insertAdjacentElement("beforeBegin", bI4M);
                bI4M.appendChild(F4J)
            }
            var bOR4V = e4i.nid || "", f4j = a2x.H4L(bI4M, bOR4V || dZ6T + "-show")[0];
            if (!f4j) {
                var dY6S = ((e4i.clazz || "") + " " + bOR4V).trim();
                dY6S = dZ6T + "-show" + (!dY6S ? "" : " ") + dY6S;
                f4j = a2x.dg6a(e4i.tag || "span", dY6S);
                bI4M.appendChild(f4j)
            }
            var dY6S = e4i.clazz;
            if (!!dY6S) {
                dY6S = (dY6S || "").trim().split(gK7D)[0] + "-parent";
                a2x.y4C(bI4M, dY6S)
            }
            return f4j
        }
    }();
    a2x.t4x = cY6S.t4x = function () {
        var beN5S = {}, fB7u = "data-", dh6b = /\-(.{1})/gi;
        var Gd5i = function (F4J) {
            var C4G = a2x.lv9m(F4J);
            if (!!beN5S[C4G]) return;
            var bz4D = {};
            k4o.bd4h(F4J.attributes, function (f4j) {
                var J4N = f4j.nodeName;
                if (J4N.indexOf(fB7u) != 0) return;
                J4N = J4N.replace(fB7u, "").replace(dh6b, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bz4D[J4N] = f4j.nodeValue || ""
            });
            beN5S[C4G] = bz4D
        };
        return function (F4J, J4N, D4H) {
            F4J = a2x.B4F(F4J);
            if (!F4J) return null;
            var bcn4r = F4J.dataset;
            if (!bcn4r) {
                Gd5i(F4J);
                bcn4r = beN5S[F4J.id]
            }
            if (D4H !== undefined) bcn4r[J4N] = D4H;
            return bcn4r[J4N]
        }
    }();
    a2x.gh7a = cY6S.gh7a = function (F4J, V4Z, D4H) {
        F4J = a2x.B4F(F4J);
        if (!F4J) return "";
        if (D4H !== undefined && !!F4J.setAttribute) F4J.setAttribute(V4Z, D4H);
        return be4i.btl8d(F4J, V4Z)
    };
    a2x.nH9y = function (dT6N) {
        var rz1x = document.createElement("div");
        rz1x.innerHTML = dT6N;
        var i4m = a2x.dk6e(rz1x);
        return i4m.length > 1 ? rz1x : i4m[0]
    };
    a2x.cnH3x = cY6S.cnH3x = function (F4J) {
        F4J = a2x.B4F(F4J);
        return !F4J ? "" : be4i.bfH5M(F4J)
    };
    a2x.bPb4f = function (Cu4y) {
        Cu4y = (Cu4y || "").trim();
        return !Cu4y ? null : be4i.bfQ5V(Cu4y)
    };
    a2x.cod3x = function (cG6A, u4y) {
        cG6A = cG6A || "";
        switch (u4y) {
            case"xml":
                cG6A = a2x.bPb4f(cG6A);
                break;
            case"json":
                try {
                    cG6A = JSON.parse(cG6A)
                } catch (ex) {
                    cG6A = null
                }
                break
        }
        return cG6A
    };
    a2x.hO8G = cY6S.hO8G = function () {
        var coh3x = function (F4J) {
            return F4J == document.body || F4J == document.documentElement
        };
        return function (ea6U, nb9S) {
            ea6U = a2x.B4F(ea6U);
            if (!ea6U) return null;
            nb9S = a2x.B4F(nb9S) || null;
            var o4s = {x: 0, y: 0}, bhJ5O, do6i, bci4m;
            while (!!ea6U && ea6U != nb9S) {
                bhJ5O = coh3x(ea6U);
                do6i = bhJ5O ? 0 : ea6U.scrollLeft;
                bci4m = parseInt(a2x.df6Z(ea6U, "borderLeftWidth")) || 0;
                o4s.x += ea6U.offsetLeft + bci4m - do6i;
                do6i = bhJ5O ? 0 : ea6U.scrollTop;
                bci4m = parseInt(a2x.df6Z(ea6U, "borderTopWidth")) || 0;
                o4s.y += ea6U.offsetTop + bci4m - do6i;
                ea6U = ea6U.offsetParent
            }
            return o4s
        }
    }();
    a2x.nn9e = cY6S.nn9e = function (F4J) {
        var bi4m = a2x.hO8G(F4J);
        window.scrollTo(bi4m.x, bi4m.y);
        return this
    };
    a2x.cEv8n = function (sF1x) {
        sF1x = (sF1x || "").trim();
        return be4i.bFT2x(sF1x)
    };
    a2x.cok3x = cY6S.cok3x = function (F4J, V4Z, bz4D) {
        F4J = a2x.B4F(F4J);
        if (!F4J) return this;
        var D4H = be4i.bGJ2x(V4Z, bz4D);
        if (!D4H) return this;
        a2x.ba4e(F4J, "transform", D4H);
        return this
    };
    a2x.eY6S = cY6S.eY6S = function (F4J, bz4D) {
        F4J = a2x.B4F(F4J);
        if (!!F4J) k4o.eC6w(bz4D, function (D4H, V4Z) {
            a2x.ba4e(F4J, V4Z, D4H)
        });
        return this
    };
    a2x.coo3x = cY6S.coo3x = function (ge7X, e4i) {
        ge7X = a2x.B4F(ge7X);
        if (!ge7X) return {start: 0, end: 0};
        if (k4o.wg2x(e4i)) e4i = {start: e4i, end: e4i};
        if (e4i != null) {
            if (e4i.end == null) e4i.end = e4i.start || 0;
            be4i.boW7P(ge7X, e4i)
        } else {
            e4i = be4i.bqL8D(ge7X)
        }
        return e4i
    };
    a2x.ba4e = cY6S.ba4e = function (F4J, V4Z, D4H) {
        F4J = a2x.B4F(F4J);
        if (!!F4J) be4i.bkE6y(F4J, V4Z, D4H);
        return this
    };
    a2x.df6Z = cY6S.df6Z = function (F4J, V4Z) {
        F4J = a2x.B4F(F4J);
        if (!F4J) return "";
        var hc7V = !window.getComputedStyle ? F4J.currentStyle || bb4f : window.getComputedStyle(F4J, null);
        return hc7V[be4i.bGK2x(V4Z)] || ""
    };
    a2x.bPk4o = function () {
        var dh6b = /[\s\r\n]+/gi;
        return function (ch5m) {
            ch5m = (ch5m || "").trim().replace(dh6b, " ");
            if (!ch5m) return;
            var f4j = a2x.dg6a("style");
            document.head.appendChild(f4j);
            be4i.bpq7j(f4j, be4i.cBQ7J(ch5m));
            return f4j
        }
    }();
    a2x.bPl4p = function (yu3x) {
        try {
            yu3x = yu3x.trim();
            if (!!yu3x) return (new Function(yu3x))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a2x.tO1x = function () {
        var dh6b = /#<.*?>/g, gJ7C = +(new Date);
        return function (kh8Z) {
            if (!Ij6d) Ij6d = [];
            var fK7D = "auto-" + gJ7C++;
            Ij6d.push(kh8Z.replace(dh6b, fK7D));
            return fK7D
        }
    }();
    a2x.bOQ4U = function () {
        if (!!Ij6d) {
            a2x.bPk4o(Ij6d.join(""));
            Ij6d = null
        }
        return this
    };
    a2x.cEq8i = function (ch5m, kh8Z) {
        ch5m = a2x.B4F(ch5m);
        return !ch5m ? null : be4i.bqi8a(ch5m, kh8Z)
    };
    a2x.y4C = cY6S.y4C = function () {
        be4i.bjP6J.apply(be4i, arguments);
        return this
    };
    a2x.x4B = cY6S.x4B = function () {
        be4i.bkd6X.apply(be4i, arguments);
        return this
    };
    a2x.fb6V = cY6S.fb6V = function () {
        be4i.Np7i.apply(be4i, arguments);
        return this
    };
    a2x.bE4I = cY6S.bE4I = function () {
        return be4i.bmV7O.apply(be4i, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cY6S.isChange = !0
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, fx7q = NEJ.R, bs4w = NEJ.F, a2x = c4g("nej.e"), be4i = c4g("nej.h"),
        k4o = c4g("nej.u");
    var Gx5C = function (j4n, u4y) {
        try {
            u4y = u4y.toLowerCase();
            if (j4n === null) return u4y == "null";
            if (j4n === undefined) return u4y == "undefined";
            return bb4f.toString.call(j4n).toLowerCase() == "[object " + u4y + "]"
        } catch (e) {
            return !1
        }
    };
    k4o.gG7z = function (j4n) {
        return Gx5C(j4n, "function")
    };
    k4o.fG7z = function (j4n) {
        return Gx5C(j4n, "string")
    };
    k4o.wg2x = function (j4n) {
        return Gx5C(j4n, "number")
    };
    k4o.cEj8b = function (j4n) {
        return Gx5C(j4n, "boolean")
    };
    k4o.GY6S = function (j4n) {
        return Gx5C(j4n, "date")
    };
    k4o.eJ6D = function (j4n) {
        return Gx5C(j4n, "array")
    };
    k4o.lw9n = function (j4n) {
        return Gx5C(j4n, "object")
    };
    k4o.fy7r = function () {
        var dh6b = /[^\x00-\xfff]/g;
        return function (bo4s) {
            return ("" + (bo4s || "")).replace(dh6b, "**").length
        }
    }();
    k4o.di6c = function (i4m, p4t) {
        var dV6P = k4o.gG7z(p4t) ? p4t : function (D4H) {
            return D4H === p4t
        }, r4v = k4o.eC6w(i4m, dV6P);
        return r4v != null ? r4v : -1
    };
    k4o.cEe8W = function () {
        var bQd4h;
        var OS9J = function (i4m, oD0x, oA0x) {
            if (oD0x > oA0x) return -1;
            var DO5T = Math.ceil((oD0x + oA0x) / 2), o4s = bQd4h(i4m[DO5T], DO5T, i4m);
            if (o4s == 0) return DO5T;
            if (o4s < 0) return OS9J(i4m, oD0x, DO5T - 1);
            return OS9J(i4m, DO5T + 1, oA0x)
        };
        return function (i4m, Ii6c) {
            bQd4h = Ii6c || bs4w;
            return OS9J(i4m, 0, i4m.length - 1)
        }
    }();
    k4o.no9f = function (i4m, cK6E, P4T) {
        if (!i4m || !i4m.length || !k4o.gG7z(cK6E)) return null;
        for (var i = i4m.length - 1; i >= 0; i--) if (!!cK6E.call(P4T, i4m[i], i, i4m)) return i;
        return null
    };
    k4o.bd4h = function (i4m, cK6E, P4T) {
        if (!i4m || !i4m.length || !k4o.gG7z(cK6E)) return this;
        if (!!i4m.forEach) {
            i4m.forEach(cK6E, P4T);
            return this
        }
        for (var i = 0, l = i4m.length; i < l; i++) cK6E.call(P4T, i4m[i], i, i4m);
        return this
    };
    k4o.eC6w = function (i4m, cK6E, P4T) {
        if (!i4m || !k4o.gG7z(cK6E)) return null;
        if (i4m.length != null) {
            if (i4m.length > 0) for (var i = 0, l = i4m.length; i < l; i++) if (!!cK6E.call(P4T, i4m[i], i, i4m)) return i
        }
        if (k4o.lw9n(i4m)) {
            for (var x in i4m) if (i4m.hasOwnProperty(x) && !!cK6E.call(P4T, i4m[x], x, i4m)) return x
        }
        return null
    };
    k4o.cqe4i = function (jg8Y, cqP4T, e4i) {
        jg8Y = jg8Y || [];
        e4i = e4i || bb4f;
        var bQx5C = !!e4i.union, wy2x = !!e4i.begin, bbQ4U = e4i.compare, crm4q = bQx5C && wy2x ? k4o.no9f : k4o.bd4h;
        crm4q(cqP4T, function (p4t) {
            if (!!bbQ4U) bbQ4U = bbQ4U.ew6q(p4t);
            var r4v = k4o.di6c(jg8Y, bbQ4U || p4t);
            if (r4v >= 0) jg8Y.splice(r4v, 1);
            if (bQx5C) jg8Y[wy2x ? "unshift" : "push"](p4t)
        });
        return jg8Y
    };
    k4o.Fl5q = function (bz4D, bo4s) {
        if (!bz4D || !bo4s || !bo4s.replace) return bo4s || "";
        return bo4s.replace(bz4D.r, function ($1) {
            var o4s = bz4D[!bz4D.i ? $1.toLowerCase() : $1];
            return o4s != null ? o4s : $1
        })
    };
    k4o.dG6A = function () {
        var bz4D = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function (bo4s) {
            return k4o.Fl5q(bz4D, bo4s)
        }
    }();
    k4o.Ay3x = function () {
        var bz4D = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bo4s) {
            return k4o.Fl5q(bz4D, bo4s)
        }
    }();
    k4o.if8X = function () {
        var bz4D = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, crU5Z = ["上午", "下午"],
            csn5s = ["A.M.", "P.M."], bpC8u = ["日", "一", "二", "三", "四", "五", "六"],
            ctA5F = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            cuc5h = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var OU9L = function (gR7K) {
            gR7K = parseInt(gR7K) || 0;
            return (gR7K < 10 ? "0" : "") + gR7K
        };
        var cuw5B = function (pV0x) {
            return pV0x < 12 ? 0 : 1
        };
        return function (bA4E, IB6v, cuO5T) {
            if (!bA4E || !IB6v) return "";
            bA4E = k4o.bbD4H(bA4E);
            bz4D.yyyy = bA4E.getFullYear();
            bz4D.yy = ("" + bz4D.yyyy).substr(2);
            bz4D.M = bA4E.getMonth() + 1;
            bz4D.MM = OU9L(bz4D.M);
            bz4D.eM = cuc5h[bz4D.M - 1];
            bz4D.cM = ctA5F[bz4D.M - 1];
            bz4D.d = bA4E.getDate();
            bz4D.dd = OU9L(bz4D.d);
            bz4D.H = bA4E.getHours();
            bz4D.HH = OU9L(bz4D.H);
            bz4D.m = bA4E.getMinutes();
            bz4D.mm = OU9L(bz4D.m);
            bz4D.s = bA4E.getSeconds();
            bz4D.ss = OU9L(bz4D.s);
            bz4D.ms = bA4E.getMilliseconds();
            bz4D.w = bpC8u[bA4E.getDay()];
            var bSl6f = cuw5B(bz4D.H);
            bz4D.ct = crU5Z[bSl6f];
            bz4D.et = csn5s[bSl6f];
            if (!!cuO5T) {
                bz4D.H = bz4D.H % 12
            }
            return k4o.Fl5q(bz4D, IB6v)
        }
    }();
    k4o.bbD4H = function (bA4E) {
        var da6U = bA4E;
        if (k4o.fG7z(bA4E)) da6U = new Date(Date.parse(bA4E));
        if (!k4o.GY6S(bA4E)) da6U = new Date(bA4E);
        return da6U
    };
    k4o.Ip6j = function (cxD6x, cyg6a) {
        return (new Number(cxD6x)).toFixed(cyg6a)
    };
    k4o.bte8W = function () {
        var gK7D = /([^\/:])\/.*$/, ku8m = /\/[^\/]+$/, HA6u = /[#\?]/, btt9k = location.href.split(/[?#]/)[0],
            sO1x = document.createElement("a");
        var btX9O = function (jE8w) {
            return (jE8w || "").indexOf("://") > 0
        };
        var bTI7B = function (jE8w) {
            return (jE8w || "").split(HA6u)[0].replace(ku8m, "/")
        };
        var cCs8k = function (jE8w, fT7M) {
            if (jE8w.indexOf("/") == 0) return fT7M.replace(gK7D, "$1") + jE8w;
            return bTI7B(fT7M) + jE8w
        };
        btt9k = bTI7B(btt9k);
        return function (jE8w, fT7M) {
            jE8w = (jE8w || "").trim();
            if (!btX9O(fT7M)) fT7M = btt9k;
            if (!jE8w) return fT7M;
            if (btX9O(jE8w)) return jE8w;
            jE8w = cCs8k(jE8w, fT7M);
            sO1x.href = jE8w;
            jE8w = sO1x.href;
            return btX9O(jE8w) ? jE8w : sO1x.getAttribute("href", 4)
        }
    }();
    k4o.cCu8m = function () {
        var dh6b = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (Y4c) {
            if (dh6b.test(Y4c || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k4o.bUI7B = function (G4K, im8e) {
        if (!G4K) return im8e;
        var V4Z = G4K.tagName.toLowerCase(), i4m = a2x.dk6e(G4K);
        if (!i4m || !i4m.length) {
            im8e[V4Z] = G4K.textContent || G4K.text || "";
            return im8e
        }
        var ck5p = {};
        im8e[V4Z] = ck5p;
        k4o.bd4h(i4m, function (f4j) {
            k4o.bUI7B(f4j, ck5p)
        });
        return im8e
    };
    k4o.cDa8S = function (Cu4y) {
        try {
            return k4o.bUI7B(a2x.bPb4f(Cu4y), {})
        } catch (ex) {
            return null
        }
    };
    k4o.Pm9d = function (ib8T, Pt9k) {
        var im8e = {};
        k4o.bd4h((ib8T || "").split(Pt9k), function (V4Z) {
            var bbt4x = V4Z.split("=");
            if (!bbt4x || !bbt4x.length) return;
            var J4N = bbt4x.shift();
            if (!J4N) return;
            im8e[decodeURIComponent(J4N)] = decodeURIComponent(bbt4x.join("="))
        });
        return im8e
    };
    k4o.uX2x = function (gw7p, Pt9k, cCU8M) {
        if (!gw7p) return "";
        var br4v = [];
        for (var x in gw7p) {
            br4v.push(encodeURIComponent(x) + "=" + (!!cCU8M ? encodeURIComponent(gw7p[x]) : gw7p[x]))
        }
        return br4v.join(Pt9k || ",")
    };
    k4o.hv7o = function (bv4z) {
        return k4o.Pm9d(bv4z, "&")
    };
    k4o.cE6y = function (gw7p) {
        return k4o.uX2x(gw7p, "&", !0)
    };
    k4o.cCZ8R = function (gw7p) {
        return be4i.HV6P(gw7p)
    };
    k4o.cFH8z = function (i4m, dV6P) {
        var o4s = {};
        k4o.bd4h(i4m, function (p4t) {
            var J4N = p4t;
            if (!!dV6P) {
                J4N = dV6P(p4t)
            }
            o4s[J4N] = p4t
        });
        return o4s
    };
    k4o.cDb8T = function (gR7K, gc7V) {
        var cCS8K = ("" + gR7K).length, cCR8J = Math.max(1, parseInt(gc7V) || 0), do6i = cCR8J - cCS8K;
        if (do6i > 0) {
            gR7K = (new Array(do6i + 1)).join("0") + gR7K
        }
        return "" + gR7K
    };
    k4o.bbo4s = function (gw7p, V4Z) {
        if (!k4o.eJ6D(V4Z)) {
            try {
                delete gw7p[V4Z]
            } catch (e) {
                gw7p[V4Z] = undefined
            }
            return this
        }
        k4o.bd4h(V4Z, k4o.bbo4s.g4k(k4o, gw7p));
        return this
    };
    k4o.Oe9V = function () {
        var bUH7A = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bq4u) {
            bq4u = bq4u || 10;
            var o4s = [];
            for (var i = 0, bUG7z; i < bq4u; ++i) {
                bUG7z = Math.floor(Math.random() * bUH7A.length);
                o4s.push(bUH7A.charAt(bUG7z))
            }
            return o4s.join("")
        }
    }();
    k4o.Ad3x = function (fF7y, fo7h) {
        return Math.floor(Math.random() * (fo7h - fF7y) + fF7y)
    };
    k4o.oh0x = function (bq4u) {
        bq4u = Math.max(0, Math.min(bq4u || 8, 30));
        var fF7y = Math.pow(10, bq4u - 1), fo7h = fF7y * 10;
        return k4o.Ad3x(fF7y, fo7h).toString()
    };
    k4o.bbn4r = function () {
        var gJ7C = +(new Date);
        return function () {
            return "" + gJ7C++
        }
    }()
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, fx7q = NEJ.R, bs4w = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"), oG0x;
    if (!!N4R.cH6B) return;
    N4R.cH6B = NEJ.C();
    oG0x = N4R.cH6B.prototype;
    N4R.cH6B.A4E = function (e4i) {
        e4i = e4i || {};
        var cz5E = !!this.BD4H && this.BD4H.shift();
        if (!cz5E) {
            cz5E = new this(e4i);
            this.cCO8G = (this.cCO8G || 0) + 1
        }
        cz5E.bl4p(e4i);
        return cz5E
    };
    N4R.cH6B.T4X = function () {
        var Pw9n = function (p4t, r4v, i4m) {
            p4t.T4X();
            i4m.splice(r4v, 1)
        };
        return function (cz5E) {
            if (!cz5E) return null;
            if (!k4o.eJ6D(cz5E)) {
                if (!(cz5E instanceof this)) {
                    var fK7D = cz5E.constructor;
                    if (!!fK7D.T4X) fK7D.T4X(cz5E);
                    return null
                }
                if (cz5E == this.ff7Y) delete this.ff7Y;
                if (cz5E == this.Ae3x) delete this.Ae3x;
                cz5E.bD4H();
                if (!this.BD4H) this.BD4H = [];
                if (k4o.di6c(this.BD4H, cz5E) < 0) {
                    this.BD4H.push(cz5E)
                }
                return null
            }
            k4o.no9f(cz5E, Pw9n, this)
        }
    }();
    N4R.cH6B.gr7k = function (e4i) {
        e4i = e4i || {};
        if (!this.ff7Y) this.ff7Y = this.A4E(e4i);
        return this.ff7Y
    };
    N4R.cH6B.bUF7y = function (e4i, rt1x) {
        e4i = e4i || {};
        if (!!rt1x && !!this.Ae3x) {
            this.Ae3x.T4X();
            delete this.Ae3x
        }
        if (!this.Ae3x) {
            this.Ae3x = this.A4E(e4i)
        } else {
            this.Ae3x.bl4p(e4i)
        }
        return this.Ae3x
    };
    oG0x.cx5C = function () {
        var gJ7C = +(new Date);
        return function () {
            this.id = gJ7C++;
            this.lW9N = {};
            this.bUE7x = {}
        }
    }();
    oG0x.bl4p = function (e4i) {
        this.bjI6C(e4i)
    };
    oG0x.bD4H = function () {
        this.hd7W();
        this.IJ6D()
    };
    oG0x.bX5c = function () {
        var gJ7C = +(new Date);
        var cCL8D = function (bf4j) {
            if (!bf4j || bf4j.length < 3) return;
            this.bUE7x["de-" + gJ7C++] = bf4j;
            h4l.s4w.apply(h4l, bf4j)
        };
        return function (i4m) {
            k4o.bd4h(i4m, cCL8D, this)
        }
    }();
    oG0x.IJ6D = function () {
        var cCt8l = function (bf4j, J4N, bz4D) {
            delete bz4D[J4N];
            h4l.mw9n.apply(h4l, bf4j)
        };
        return function () {
            k4o.eC6w(this.bUE7x, cCt8l)
        }
    }();
    oG0x.cDf8X = function (dV6P) {
        dV6P = dV6P || bs4w;
        k4o.eC6w(this, function (DZ5e, J4N, bz4D) {
            if (!!DZ5e && !!DZ5e.T4X && !dV6P(DZ5e)) {
                delete bz4D[J4N];
                DZ5e.T4X()
            }
        })
    };
    oG0x.T4X = function () {
        this.constructor.T4X(this)
    };
    oG0x.bkb6V = function (u4y) {
        var d4h = this.lW9N[u4y.toLowerCase()];
        return !!d4h && d4h !== bs4w
    };
    oG0x.s4w = function (u4y, d4h) {
        this.xp2x.apply(this, arguments);
        return this
    };
    oG0x.mw9n = function (u4y, d4h) {
        var u4y = (u4y || "").toLowerCase(), ec6W = this.lW9N[u4y];
        if (!k4o.eJ6D(ec6W)) {
            if (ec6W == d4h) delete this.lW9N[u4y];
            return
        }
        k4o.no9f(ec6W, function (et6n, r4v, i4m) {
            if (et6n == d4h) i4m.splice(r4v, 1)
        })
    };
    oG0x.xp2x = function (u4y, d4h) {
        if (!!u4y && k4o.gG7z(d4h)) this.lW9N[u4y.toLowerCase()] = d4h;
        return this
    };
    oG0x.bjI6C = function () {
        var cCn8f = function (d4h, u4y) {
            this.xp2x(u4y, d4h)
        };
        return function (ec6W) {
            k4o.eC6w(ec6W, cCn8f, this);
            return this
        }
    }();
    oG0x.hd7W = function () {
        var bko6i = function (d4h, u4y) {
            this.hd7W(u4y)
        };
        return function (u4y) {
            var u4y = (u4y || "").toLowerCase();
            if (!!u4y) {
                delete this.lW9N[u4y]
            } else {
                k4o.eC6w(this.lW9N, bko6i, this)
            }
            return this
        }
    }();
    oG0x.bkp6j = function (u4y, d4h) {
        if (!u4y || !k4o.gG7z(d4h)) return this;
        u4y = u4y.toLowerCase();
        var ec6W = this.lW9N[u4y];
        if (!ec6W) {
            this.lW9N[u4y] = d4h;
            return this
        }
        if (!k4o.eJ6D(ec6W)) {
            this.lW9N[u4y] = [ec6W]
        }
        this.lW9N[u4y].push(d4h);
        return this
    };
    oG0x.z4D = function (u4y) {
        var d4h = this.lW9N[(u4y || "").toLowerCase()];
        if (!d4h) return this;
        var bf4j = fx7q.slice.call(arguments, 1);
        if (!k4o.eJ6D(d4h)) return d4h.apply(this, bf4j);
        k4o.bd4h(d4h, function (dt6n) {
            try {
                dt6n.apply(this, bf4j)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    N4R.bba4e = function () {
        var R4V = {};
        return function (C4G, fK7D, e4i) {
            var fj7c = fK7D.cCm7f;
            if (!fj7c) {
                fj7c = k4o.Oe9V(10);
                fK7D.cCm7f = fj7c
            }
            var J4N = C4G + "-" + fj7c, cz5E = R4V[J4N];
            if (!!e4i && !cz5E) {
                cz5E = fK7D.A4E(e4i);
                cz5E.T4X = cz5E.T4X.eB6v(function (d4h) {
                    delete R4V[J4N];
                    delete cz5E.T4X
                });
                R4V[J4N] = cz5E
            }
            return cz5E
        }
    }()
})();
(function () {
    var o = NEJ.O, u = NEJ.P("nej.u"), j = NEJ.P("nej.j");
    j.gy7r = function () {
        var da6U = new Date, cCl7e = +da6U, blH6B = 864e5;
        var cCj7c = function (V4Z) {
            var rl0x = document.cookie, sx1x = "\\b" + V4Z + "=", baW3x = rl0x.search(sx1x);
            if (baW3x < 0) return "";
            baW3x += sx1x.length - 2;
            var xm2x = rl0x.indexOf(";", baW3x);
            if (xm2x < 0) xm2x = rl0x.length;
            return rl0x.substring(baW3x, xm2x) || ""
        };
        return function (V4Z, j4n) {
            if (j4n === undefined) return cCj7c(V4Z);
            if (u.fG7z(j4n)) {
                if (!!j4n) {
                    document.cookie = V4Z + "=" + j4n + ";";
                    return j4n
                }
                j4n = {expires: -100}
            }
            j4n = j4n || o;
            var rl0x = V4Z + "=" + (j4n.value || "") + ";";
            delete j4n.value;
            if (j4n.expires !== undefined) {
                da6U.setTime(cCl7e + j4n.expires * blH6B);
                j4n.expires = da6U.toGMTString()
            }
            rl0x += u.uX2x(j4n, ";");
            document.cookie = rl0x
        }
    }()
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, it8l = c4g("nej.c"), em6g = c4g("nej.g"), a2x = c4g("nej.e"), v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"), N4R = c4g("nej.ut.j"), k4o = c4g("nej.u"), b3x;
    if (!!N4R.IK6E) return;
    N4R.IK6E = NEJ.C();
    b3x = N4R.IK6E.O4S(I4M.cH6B);
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.pj0x = {noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4};
        NEJ.EX(this.pj0x, e4i);
        var CP4T = it8l.B4F("csrf");
        if ((/^\/[^\/]/.test(this.pj0x.url) || this.pj0x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!CP4T.cookie && !!CP4T.param) {
            var bv4z = encodeURIComponent(CP4T.param) + "=" + encodeURIComponent(v4z.gy7r(CP4T.cookie) || ""),
                Pt9k = this.pj0x.url.indexOf("?") < 0 ? "?" : "&";
            this.pj0x.url += Pt9k + bv4z
        }
        this.baU3x = e4i.headers || {};
        var bo4s = this.baU3x[em6g.yg3x];
        if (bo4s == null) this.baU3x[em6g.yg3x] = em6g.cil1x
    };
    b3x.bD4H = function () {
        this.bG4K();
        delete this.Af3x;
        delete this.pj0x;
        delete this.baU3x
    };
    b3x.cCi7b = function (bo4s) {
        var bz4D = {r: /\<|\>/g, "<": "&lt;", ">": "&gt;"};
        if (!this.pj0x.noescape) {
            return k4o.Fl5q(bz4D, bo4s)
        } else {
            return bo4s
        }
    };
    b3x.uT2x = function (d4h) {
        var ex6r = d4h.status;
        if (ex6r == -1) {
            this.z4D("onerror", {code: em6g.bBG1x, message: "请求[" + this.pj0x.url + "]超时！"});
            return
        }
        if (("" + ex6r).indexOf("2") != 0) {
            this.z4D("onerror", {
                data: ex6r,
                code: em6g.bie6Y,
                message: "服务器返回异常状态[" + ex6r + "]!",
                extData: d4h.result
            });
            return
        }
        this.z4D("onload", a2x.cod3x(this.cCi7b(d4h.result), this.pj0x.type))
    };
    b3x.co5t = bs4w;
    b3x.bpF8x = function (j4n) {
        var Y4c = this.pj0x.url;
        if (!Y4c) {
            this.z4D("onerror", {code: em6g.bua9R, message: "没有输入请求地址！"});
            return this
        }
        try {
            this.pj0x.data = j4n == null ? null : j4n;
            var d4h = {request: this.pj0x, headers: this.baU3x};
            try {
                this.z4D("onbeforerequest", d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.co5t(d4h)
        } catch (e) {
            this.z4D("onerror", {code: em6g.bie6Y, message: "请求[" + Y4c + "]失败:" + e.message + "！"})
        }
        return this
    };
    b3x.ks8k = bs4w
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, be4i = c4g("nej.h"), em6g = c4g("nej.g"), k4o = c4g("nej.u"), N4R = c4g("nej.ut.j"),
        R4V = {}, PQ9H;
    if (!!N4R.baO3x) return;
    N4R.baO3x = NEJ.C();
    PQ9H = N4R.baO3x.O4S(N4R.IK6E);
    PQ9H.bD4H = function () {
        this.bG4K();
        window.clearTimeout(this.ed6X);
        delete this.ed6X;
        try {
            this.sk1x.onreadystatechange = bs4w;
            this.sk1x.abort()
        } catch (e) {
        }
        delete this.sk1x
    };
    PQ9H.co5t = function () {
        var cCh7a = function (D4H, J4N) {
            this.sk1x.setRequestHeader(J4N, D4H)
        };
        return function (e4i) {
            var gm7f = e4i.request, ph0x = e4i.headers;
            this.sk1x = be4i.bra8S();
            if (ph0x[em6g.yg3x] === em6g.EK5P) {
                delete ph0x[em6g.yg3x];
                this.sk1x.upload.onprogress = this.gv7o.g4k(this, 1);
                if (gm7f.data.tagName === "FORM") gm7f.data = new FormData(gm7f.data)
            }
            this.sk1x.onreadystatechange = this.gv7o.g4k(this, 2);
            if (gm7f.timeout != 0) {
                this.ed6X = window.setTimeout(this.gv7o.g4k(this, 3), gm7f.timeout)
            }
            this.sk1x.open(gm7f.method, gm7f.url, !gm7f.sync);
            k4o.eC6w(ph0x, cCh7a, this);
            if (!!this.pj0x.cookie && "withCredentials" in this.sk1x) this.sk1x.withCredentials = !0;
            this.sk1x.send(gm7f.data)
        }
    }();
    PQ9H.gv7o = function (u4y) {
        switch (u4y) {
            case 1:
                this.z4D("onuploading", arguments[1]);
                break;
            case 2:
                if (this.sk1x.readyState == 4) this.uT2x({
                    status: this.sk1x.status,
                    result: this.sk1x.responseText || ""
                });
                break;
            case 3:
                this.uT2x({status: -1});
                break
        }
    };
    PQ9H.ks8k = function () {
        this.uT2x({status: 0});
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var PT9K = {}, baM3x = [], bUv7o = /\s+/g, gJ7C = +(new Date), IL6F, bS4W, hE7x;
    var Eb5g = function () {
        var gK7D = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, ku8m = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            HA6u = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, btg8Y = /^new\s+/,
            cCd7W = /['"]/;
        var cBZ7S = function (D4H) {
            if (gK7D.test(D4H)) return;
            D4H = D4H.split(".")[0].trim();
            if (!D4H || cCd7W.test(D4H)) return;
            D4H = D4H.replace(btg8Y, "");
            try {
                if (HA6u.test(D4H)) return;
                hE7x[D4H] = 1
            } catch (e) {
            }
        };
        return function (bo4s) {
            bo4s = bo4s || "";
            if (!bo4s || gK7D.test(bo4s)) return;
            var br4v = bo4s.split(ku8m);
            for (var i = 0, l = br4v.length; i < l; i++) cBZ7S(br4v[i])
        }
    }();
    var cBY7R = function (dJ6D) {
        if (dJ6D[2] != "in") throw"bad for loop statement: " + dJ6D.join(" ");
        baM3x.push(dJ6D[1]);
        Eb5g(dJ6D[3]);
        return "var __HASH__" + dJ6D[1] + " = " + dJ6D[3] + "," + dJ6D[1] + "," + dJ6D[1] + "_count=0;" + "if (!!__HASH__" + dJ6D[1] + ")" + "for(var " + dJ6D[1] + "_key in __HASH__" + dJ6D[1] + "){" + dJ6D[1] + " = __HASH__" + dJ6D[1] + "[" + dJ6D[1] + "_key];" + "if (typeof(" + dJ6D[1] + ')=="function") continue;' + dJ6D[1] + "_count++;"
    };
    var cBS7L = function () {
        var dJ6D = baM3x[baM3x.length - 1];
        return "}; if(!__HASH__" + dJ6D + "||!" + dJ6D + "_count){"
    };
    var cBP7I = function () {
        baM3x.pop();
        return "};"
    };
    var cBO7H = function (dJ6D) {
        if (dJ6D[2] != "as") throw"bad for list loop statement: " + dJ6D.join(" ");
        var Qe9V = dJ6D[1].split("..");
        if (Qe9V.length > 1) {
            Eb5g(Qe9V[0]);
            Eb5g(Qe9V[1]);
            return "for(var " + dJ6D[3] + "," + dJ6D[3] + "_index=0," + dJ6D[3] + "_beg=" + Qe9V[0] + "," + dJ6D[3] + "_end=" + Qe9V[1] + "," + dJ6D[3] + "_length=parseInt(" + dJ6D[3] + "_end-" + dJ6D[3] + "_beg+1);" + dJ6D[3] + "_index<" + dJ6D[3] + "_length;" + dJ6D[3] + "_index++){" + dJ6D[3] + " = " + dJ6D[3] + "_beg+" + dJ6D[3] + "_index;"
        } else {
            Eb5g(dJ6D[1]);
            return "for(var __LIST__" + dJ6D[3] + " = " + dJ6D[1] + "," + dJ6D[3] + "," + dJ6D[3] + "_index=0," + dJ6D[3] + "_length=__LIST__" + dJ6D[3] + ".length;" + dJ6D[3] + "_index<" + dJ6D[3] + "_length;" + dJ6D[3] + "_index++){" + dJ6D[3] + " = __LIST__" + dJ6D[3] + "[" + dJ6D[3] + "_index];"
        }
    };
    var cBL7E = function (dJ6D) {
        if (!dJ6D || !dJ6D.length) return;
        dJ6D.shift();
        var V4Z = dJ6D[0].split("(")[0];
        return "var " + V4Z + " = function" + dJ6D.join("").replace(V4Z, "") + "{var __OUT=[];"
    };
    var cBI7B = function (dJ6D) {
        if (!dJ6D[1]) throw"bad include statement: " + dJ6D.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var buF9w = function (kb8T, dJ6D) {
        Eb5g(dJ6D.slice(1).join(" "));
        return kb8T
    };
    var cBH7A = function (dJ6D) {
        return buF9w("if(", dJ6D)
    };
    var cBC7v = function (dJ6D) {
        return buF9w("}else if(", dJ6D)
    };
    var cBB7u = function (dJ6D) {
        return buF9w("var ", dJ6D)
    };
    bS4W = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: cBH7A, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: cBC7v, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: cBY7R, pmin: 3},
            forelse: {pfix: cBS7L},
            "/for": {pfix: cBP7I},
            list: {pfix: cBO7H, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: cBB7u, sfix: ";"},
            macro: {pfix: cBL7E},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    IL6F = !0
                }
            },
            "/trim": {
                pfix: function () {
                    IL6F = null
                }
            },
            inline: {pfix: cBI7B, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (kb8T) {
                return (kb8T || "") + "" + gJ7C
            }, "default": function (D4H, kg8Y) {
                return D4H || kg8Y
            }
        }
    };
    var cBy7r = function () {
        var cBx7q = /\\([\{\}])/g;
        return function (bo4s, jG8y) {
            bo4s = bo4s.replace(cBx7q, "$1");
            var dJ6D = bo4s.slice(1, -1).split(bUv7o), bg4k = bS4W.def[dJ6D[0]];
            if (!bg4k) {
                baz3x(bo4s, jG8y);
                return
            }
            if (!!bg4k.pmin && bg4k.pmin >= dJ6D.length) throw"Statement needs more parameters:" + bo4s;
            jG8y.push(!!bg4k.pfix && typeof bg4k.pfix != "string" ? bg4k.pfix(dJ6D) : bg4k.pfix || "");
            if (!!bg4k.sfix) {
                if (dJ6D.length <= 1) {
                    if (!!bg4k.pdft) jG8y.push(bg4k.pdft)
                } else {
                    for (var i = 1, l = dJ6D.length; i < l; i++) {
                        if (i > 1) jG8y.push(" ");
                        jG8y.push(dJ6D[i])
                    }
                }
                jG8y.push(bg4k.sfix)
            }
        }
    }();
    var bUm7f = function (IP6J, jG8y) {
        if (!IP6J || !IP6J.length) return;
        if (IP6J.length == 1) {
            var bfq5v = IP6J.pop();
            Eb5g(bfq5v);
            jG8y.push(bfq5v == "" ? '""' : bfq5v);
            return
        }
        var bfu5z = IP6J.pop().split(":");
        jG8y.push("__MDF['" + bfu5z.shift() + "'](");
        bUm7f(IP6J, jG8y);
        if (bfu5z.length > 0) {
            var bf4j = bfu5z.join(":");
            Eb5g(bf4j);
            jG8y.push("," + bf4j)
        }
        jG8y.push(")")
    };
    var baz3x = function (bo4s, jG8y) {
        if (!bo4s) return;
        var xb2x = bo4s.split("\n");
        if (!xb2x || !xb2x.length) return;
        for (var i = 0, l = xb2x.length, hu7n; i < l; i++) {
            hu7n = xb2x[i];
            if (!!IL6F) {
                hu7n = hu7n.trim();
                if (!hu7n) continue
            }
            cBp7i(hu7n, jG8y);
            if (!!IL6F && i < l - 1) jG8y.push("__OUT.push('\\n');")
        }
    };
    var cBp7i = function () {
        var cBl7e = /\|\|/g, cBc7V = /#@@#/g;
        return function (bo4s, jG8y) {
            var Qr9i = "}", Qs9j = -1, bq4u = bo4s.length, wy2x, fR7K, IS6M, bai3x, Qz9q;
            while (Qs9j + Qr9i.length < bq4u) {
                wy2x = "${";
                fR7K = "}";
                IS6M = bo4s.indexOf(wy2x, Qs9j + Qr9i.length);
                if (IS6M < 0) break;
                if (bo4s.charAt(IS6M + 2) == "%") {
                    wy2x = "${%";
                    fR7K = "%}"
                }
                bai3x = bo4s.indexOf(fR7K, IS6M + wy2x.length);
                if (bai3x < 0) break;
                baf3x(bo4s.substring(Qs9j + Qr9i.length, IS6M), jG8y);
                Qz9q = bo4s.substring(IS6M + wy2x.length, bai3x).replace(cBl7e, "#@@#").split("|");
                for (var i = 0, l = Qz9q.length; i < l; Qz9q[i] = Qz9q[i].replace(cBc7V, "||"), i++) ;
                jG8y.push("__OUT.push(");
                bUm7f(Qz9q, jG8y);
                jG8y.push(");");
                Qr9i = fR7K;
                Qs9j = bai3x
            }
            baf3x(bo4s.substring(Qs9j + Qr9i.length), jG8y)
        }
    }();
    var baf3x = function () {
        var bz4D = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var cBa7T = function (bo4s) {
            return (bo4s || "").replace(bz4D.r, function ($1) {
                return bz4D[$1] || $1
            })
        };
        return function (bo4s, jG8y) {
            if (!bo4s) return;
            jG8y.push("__OUT.push('" + cBa7T(bo4s) + "');")
        }
    }();
    var cAZ7S = function () {
        var cAY7R = /\t/g, cAX7Q = /\n/g, cAT7M = /\r\n?/g;
        var bUd7W = function (bo4s, wy2x) {
            var r4v = bo4s.indexOf("}", wy2x + 1);
            while (bo4s.charAt(r4v - 1) == "\\") {
                r4v = bo4s.indexOf("}", r4v + 1)
            }
            return r4v
        };
        var cAO7H = function () {
            var br4v = [], GL5Q = arguments[0];
            for (var x in GL5Q) {
                x = (x || "").trim();
                if (!x) continue;
                br4v.push(x + "=$v('" + x + "')")
            }
            return br4v.length > 0 ? "var " + br4v.join(",") + ";" : ""
        };
        return function (bo4s) {
            hE7x = {};
            bo4s = bo4s.replace(cAT7M, "\n").replace(cAY7R, "    ");
            var rM1x = ["if(!__CTX) return '';", ""];
            rM1x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            rM1x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            rM1x.push("__OUT=[];");
            var GR5W = -1, bq4u = bo4s.length;
            var nc9T, IY6S, QI0x, QQ0x, Ao3x, QS0x, bir6l, QU0x;
            while (GR5W + 1 < bq4u) {
                nc9T = GR5W;
                nc9T = bo4s.indexOf("{", nc9T + 1);
                while (nc9T >= 0) {
                    IY6S = bUd7W(bo4s, nc9T);
                    QI0x = bo4s.substring(nc9T, IY6S);
                    QQ0x = QI0x.match(bS4W.blk);
                    if (!!QQ0x) {
                        Ao3x = QQ0x[1].length + 1;
                        QS0x = bo4s.indexOf("}", nc9T + Ao3x);
                        if (QS0x >= 0) {
                            bir6l = QS0x - nc9T - Ao3x <= 0 ? "{/" + QQ0x[1] + "}" : QI0x.substr(Ao3x + 1);
                            Ao3x = bo4s.indexOf(bir6l, QS0x + 1);
                            if (Ao3x >= 0) {
                                baz3x(bo4s.substring(GR5W + 1, nc9T), rM1x);
                                QU0x = bo4s.substring(QS0x + 1, Ao3x);
                                switch (QQ0x[1]) {
                                    case"cdata":
                                        baf3x(QU0x, rM1x);
                                        break;
                                    case"minify":
                                        baf3x(QU0x.replace(cAX7Q, " ").replace(bUv7o, " "), rM1x);
                                        break;
                                    case"eval":
                                        if (!!QU0x) rM1x.push("__OUT.push((function(){" + QU0x + "})());");
                                        break
                                }
                                nc9T = GR5W = Ao3x + bir6l.length - 1
                            }
                        }
                    } else if (bo4s.charAt(nc9T - 1) != "$" && bo4s.charAt(nc9T - 1) != "\\" && QI0x.substr(QI0x.charAt(1) == "/" ? 2 : 1).search(bS4W.tag) == 0) {
                        break
                    }
                    nc9T = bo4s.indexOf("{", nc9T + 1)
                }
                if (nc9T < 0) break;
                IY6S = bUd7W(bo4s, nc9T);
                if (IY6S < 0) break;
                baz3x(bo4s.substring(GR5W + 1, nc9T), rM1x);
                cBy7r(bo4s.substring(nc9T, IY6S + 1), rM1x);
                GR5W = IY6S
            }
            baz3x(bo4s.substring(GR5W + 1), rM1x);
            rM1x.push(';return __OUT.join("");');
            rM1x[1] = cAO7H(hE7x);
            hE7x = null;
            return new Function("__CTX", "__MDF", rM1x.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gJ7C
    };
    TrimPath.merge = function () {
        var QW0x = {};
        TrimPath.dump = function () {
            return {func: QW0x, text: PT9K}
        };
        return function (fj7c, j4n, jM8E) {
            try {
                j4n = j4n || {};
                if (!QW0x[fj7c] && !PT9K[fj7c]) return "";
                if (!QW0x[fj7c]) {
                    QW0x[fj7c] = cAZ7S(PT9K[fj7c]);
                    delete PT9K[fj7c]
                }
                if (!!jM8E) {
                    for (var x in bS4W.ext) if (!jM8E[x]) jM8E[x] = bS4W.ext[x]
                }
                return QW0x[fj7c](j4n, jM8E || bS4W.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var cAN7G = +(new Date);
        return function (bo4s, fj7c) {
            if (!bo4s) return "";
            fj7c = fj7c || "ck_" + cAN7G++;
            PT9K[fj7c] = bo4s;
            return fj7c
        }
    }()
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), k4o = c4g("nej.u"), eu6o = {}, bUc7V = {};
    a2x.Ja6U = TrimPath.seed;
    a2x.bZ5e = function () {
        var bUb7U = function (C4G) {
            return !a2x.iI8A ? "" : a2x.iI8A(C4G)
        };
        return function (fj7c, j4n, jM8E) {
            j4n = NEJ.X(NEJ.X({}, bUc7V), j4n);
            j4n.inline = bUb7U;
            jM8E = NEJ.X(NEJ.X({}, eu6o), jM8E);
            jM8E.rand = k4o.oh0x;
            jM8E.format = k4o.if8X;
            jM8E.escape = k4o.dG6A;
            jM8E.inline = bUb7U;
            return TrimPath.merge(fj7c, j4n, jM8E)
        }
    }();
    a2x.es6m = function (bo4s, cAK7D) {
        if (!bo4s) return "";
        var fj7c, F4J = a2x.B4F(bo4s);
        if (!!F4J) {
            fj7c = F4J.id;
            bo4s = F4J.value || F4J.innerText;
            if (!cAK7D) a2x.cJ6D(F4J)
        }
        return TrimPath.parse(bo4s, fj7c)
    };
    a2x.dI6C = function (bI4M, fj7c, j4n, jM8E) {
        bI4M = a2x.B4F(bI4M);
        if (!!bI4M) bI4M.innerHTML = a2x.bZ5e(fj7c, j4n, jM8E);
        return this
    };
    a2x.cDh8Z = function (bz4D) {
        NEJ.X(eu6o, bz4D)
    };
    a2x.cAF7y = function (bz4D) {
        NEJ.X(bUc7V, bz4D)
    };
    c4g("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var dv6p = NEJ.P("nej.p"), N4R = window, lk9b = dv6p.HP6J, bTX7Q = lk9b.ipad || lk9b.iphone;
    if (!bTX7Q && !!N4R.requestAnimationFrame && !!N4R.cancelRequestAnimationFrame) return;
    var kb8T = dv6p.ds6m.prefix.pro;
    if (!bTX7Q && !!N4R[kb8T + "RequestAnimationFrame"] && !!N4R[kb8T + "CancelRequestAnimationFrame"]) {
        N4R.requestAnimationFrame = N4R[kb8T + "RequestAnimationFrame"];
        N4R.cancelRequestAnimationFrame = N4R[kb8T + "CancelRequestAnimationFrame"];
        return
    }
    var ZF3x = lk9b.desktop ? 80 : lk9b.ios ? 50 : 30;
    N4R.requestAnimationFrame = function (cK6E) {
        return window.setTimeout(function () {
            try {
                cK6E(+(new Date))
            } catch (ex) {
            }
        }, 1e3 / ZF3x)
    };
    N4R.cancelRequestAnimationFrame = function (C4G) {
        window.clearTimeout(C4G);
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, k4o = c4g("nej.u"), a2x = c4g("nej.e"), h4l = c4g("nej.v"), be4i = c4g("nej.h"),
        cY6S = c4g("nej.x"), ZE3x = c4g("nej.ut.j.cb"), gi7b;
    if (!!a2x.rG1x) return;
    a2x.rG1x = cY6S.rG1x = function () {
        var R4V = {}, gK7D = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d4h) {
            var C4G = decodeURIComponent(d4h.target), u4y = d4h.type.toLowerCase();
            var dt6n = R4V[C4G + "-on" + u4y];
            if (!!dt6n) {
                try {
                    dt6n(d4h)
                } catch (e) {
                }
                return
            }
            var cN6H = R4V[C4G + "-tgt"];
            if (!!cN6H && gK7D.test(u4y)) {
                bTT7M(cN6H, d4h)
            }
        };
        var bki6c = function (e4i) {
            var bI4M = a2x.B4F(e4i.parent) || document.body, dT6N = a2x.bZ5e(gi7b, e4i);
            bI4M.insertAdjacentHTML(!e4i.hidden ? "beforeEnd" : "afterBegin", dT6N)
        };
        var bTT7M = function (C4G, d4h) {
            var u4y = d4h.type.toLowerCase();
            requestAnimationFrame(function () {
                h4l.z4D(C4G, u4y)
            })
        };
        var cAx7q = function (hT8L) {
            return !!hT8L && !!hT8L.inited && !!hT8L.inited()
        };
        var Re0x = function (C4G) {
            var br4v = [document.embeds[C4G], a2x.B4F(C4G), document[C4G], window[C4G]], r4v = k4o.eC6w(br4v, cAx7q),
                hT8L = br4v[r4v], bku6o = C4G + "-count";
            R4V[bku6o]++;
            if (!!hT8L || R4V[bku6o] > 100) {
                R4V[C4G](hT8L);
                delete R4V[C4G];
                delete R4V[bku6o];
                return
            }
            window.setTimeout(Re0x.g4k(null, C4G), 300)
        };
        var cAw7p = function (e4i) {
            var C4G = e4i.id, cl5q = e4i.params;
            if (!cl5q) {
                cl5q = {};
                e4i.params = cl5q
            }
            var hE7x = cl5q.flashvars || "";
            hE7x += (!hE7x ? "" : "&") + ("id=" + C4G);
            if (!e4i.hidden && (!!e4i.target || be4i.bdB4F(cl5q.wmode))) {
                var hN8F = a2x.lv9m(e4i.target) || a2x.lv9m(e4i.parent), ZA3x = k4o.bbn4r();
                ZE3x["cb" + ZA3x] = bTT7M.g4k(null, hN8F);
                hE7x += "&onevent=nej.ut.j.cb.cb" + ZA3x;
                R4V[C4G + "-tgt"] = hN8F
            }
            cl5q.flashvars = hE7x;
            k4o.eC6w(e4i, function (D4H, J4N) {
                if (k4o.gG7z(D4H) && J4N != "onready") {
                    R4V[C4G + "-" + J4N] = D4H
                }
            })
        };
        return function (e4i) {
            e4i = NEJ.X({}, e4i);
            if (!e4i.src) return;
            var C4G = "flash_" + k4o.bbn4r();
            e4i.id = C4G;
            cAw7p(e4i);
            bki6c(e4i);
            if (!e4i.onready) return;
            R4V[C4G] = e4i.onready;
            R4V[C4G + "-count"] = 0;
            Re0x(C4G)
        }
    }();
    gi7b = a2x.es6m('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cY6S.isChange = !0
})();
(function () {
    var c4g = NEJ.P, it8l = c4g("nej.c"), a2x = c4g("nej.e"), k4o = c4g("nej.u"), N4R = c4g("nej.ut.j"),
        ZE3x = c4g("nej.ut.j.cb"), R4V = {}, gJ7C = +(new Date), bkK6E;
    if (!!N4R.blj6d) return;
    ZE3x["ld" + gJ7C] = function (J4N, cG6A) {
        var jY8Q = R4V[J4N];
        if (!jY8Q) return;
        delete R4V[J4N];
        jY8Q.uT2x({status: 200, result: cG6A})
    };
    ZE3x["er" + gJ7C] = function (J4N, ex6r) {
        var jY8Q = R4V[J4N];
        if (!jY8Q) return;
        delete R4V[J4N];
        jY8Q.uT2x({status: ex6r || 0})
    };
    N4R.blj6d = NEJ.C();
    bkK6E = N4R.blj6d.O4S(N4R.IK6E);
    bkK6E.co5t = function (e4i) {
        var hT8L = R4V.flash;
        if (k4o.eJ6D(hT8L)) {
            hT8L.push(this.co5t.g4k(this, e4i));
            return
        }
        if (!hT8L) {
            R4V.flash = [this.co5t.g4k(this, e4i)];
            a2x.rG1x({
                hidden: !0, src: it8l.B4F("ajax.swf"), onready: function (hT8L) {
                    if (!hT8L) return;
                    var i4m = R4V.flash;
                    R4V.flash = hT8L;
                    k4o.no9f(i4m, function (dt6n) {
                        try {
                            dt6n()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.Af3x = "swf-" + k4o.oh0x();
        R4V[this.Af3x] = this;
        var j4n = NEJ.EX({url: "", data: null, method: "GET"}, e4i.request);
        j4n.key = this.Af3x;
        j4n.headers = e4i.headers;
        j4n.onerror = "nej.ut.j.cb.er" + gJ7C;
        j4n.onloaded = "nej.ut.j.cb.ld" + gJ7C;
        var bTS7L = it8l.csE5J(j4n.url);
        if (!!bTS7L) j4n.policyURL = bTS7L;
        hT8L.request(j4n)
    };
    bkK6E.ks8k = function () {
        delete R4V[this.Af3x];
        this.uT2x({status: 0});
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, be4i = c4g("nej.h");
    be4i.bTP7I = function () {
        var dh6b = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (kN8F) {
            kN8F = kN8F || "";
            if (dh6b.test(kN8F)) return RegExp.$1;
            return "*"
        }
    }();
    be4i.blR7K = function (j4n) {
        return j4n
    };
    be4i.blT7M = function (Zu3x, e4i) {
        if (!Zu3x.postMessage) return;
        e4i = e4i || bb4f;
        Zu3x.postMessage(be4i.blR7K(e4i.data), be4i.bTP7I(e4i.origin))
    }
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), N4R = c4g("nej.ut"), b3x;
    if (!!N4R.fJ7C) return;
    N4R.fJ7C = NEJ.C();
    b3x = N4R.fJ7C.O4S(N4R.cH6B);
    b3x.cx5C = function () {
        this.S4W = {};
        this.cD6x()
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.Rm0x = a2x.B4F(e4i.element) || window;
        this.bTO7H(e4i.event);
        this.cAo7h();
        this.z4D("oninit")
    };
    b3x.bD4H = function () {
        var GW6Q = function (D4H, J4N, bz4D) {
            if (!k4o.eJ6D(D4H)) {
                k4o.bbo4s(this.Rm0x, J4N)
            }
            delete bz4D[J4N]
        };
        return function () {
            this.bG4K();
            k4o.eC6w(this.S4W, GW6Q, this);
            delete this.Rm0x
        }
    }();
    b3x.Zq3x = function (F4J, u4y) {
        F4J = a2x.B4F(F4J);
        return F4J == this.Rm0x && (!u4y || !!this.S4W["on" + u4y])
    };
    b3x.bTO7H = function (d4h) {
        if (k4o.fG7z(d4h)) {
            var V4Z = "on" + d4h;
            if (!this.S4W[V4Z]) {
                this.S4W[V4Z] = this.cAk7d.g4k(this, d4h)
            }
            this.bTM7F(d4h);
            return
        }
        if (k4o.eJ6D(d4h)) {
            k4o.bd4h(d4h, this.bTO7H, this)
        }
    };
    b3x.bTM7F = function (u4y) {
        var d4h = "on" + u4y, dt6n = this.Rm0x[d4h], bTL7E = this.S4W[d4h];
        if (dt6n != bTL7E) {
            this.Zp3x(u4y);
            if (!!dt6n && dt6n != bs4w) this.bTJ7C(u4y, dt6n);
            this.Rm0x[d4h] = bTL7E
        }
    };
    b3x.bTJ7C = function (u4y, dt6n, czW7P) {
        var i4m = this.S4W[u4y];
        if (!i4m) {
            i4m = [];
            this.S4W[u4y] = i4m
        }
        if (k4o.gG7z(dt6n)) {
            !czW7P ? i4m.push(dt6n) : i4m.unshift(dt6n)
        }
    };
    b3x.Zp3x = function (u4y, dt6n) {
        var i4m = this.S4W[u4y];
        if (!i4m || !i4m.length) return;
        if (!dt6n) {
            delete this.S4W[u4y];
            return
        }
        k4o.no9f(i4m, function (D4H, r4v, Jh6b) {
            if (dt6n === D4H) {
                Jh6b.splice(r4v, 1);
                return !0
            }
        })
    };
    b3x.cAk7d = function (u4y, d4h) {
        d4h = d4h || {noargs: !0};
        d4h.type = u4y;
        this.z4D("ondispatch", d4h);
        if (!!d4h.stopped) return;
        k4o.bd4h(this.S4W[u4y], function (dt6n) {
            try {
                dt6n(d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b3x.cAo7h = function () {
        var bpm7f = function (d4h) {
            var bf4j = d4h.args, u4y = bf4j[1].toLowerCase();
            if (this.Zq3x(bf4j[0], u4y)) {
                d4h.stopped = !0;
                this.bTM7F(u4y);
                this.bTJ7C(u4y, bf4j[2], bf4j[3]);
                this.z4D("oneventadd", {type: u4y, listener: bf4j[2]})
            }
        };
        var czV7O = function (d4h) {
            var bf4j = d4h.args, u4y = bf4j[1].toLowerCase();
            if (this.Zq3x(bf4j[0], u4y)) {
                d4h.stopped = !0;
                this.Zp3x(u4y, bf4j[2])
            }
        };
        var bko6i = function (d4h) {
            var bf4j = d4h.args, u4y = (bf4j[1] || "").toLowerCase();
            if (this.Zq3x(bf4j[0])) {
                if (!!u4y) {
                    this.Zp3x(u4y);
                    return
                }
                k4o.eC6w(this.S4W, function (D4H, J4N) {
                    if (k4o.eJ6D(D4H)) {
                        this.Zp3x(J4N)
                    }
                }, this)
            }
        };
        var czS7L = function (d4h) {
            var bf4j = d4h.args, u4y = bf4j[1].toLowerCase();
            if (this.Zq3x(bf4j[0], u4y)) {
                d4h.stopped = !0;
                bf4j[0]["on" + u4y].apply(bf4j[0], bf4j.slice(2))
            }
        };
        return function () {
            if (!!this.czQ7J) return;
            this.czQ7J = true;
            h4l.s4w = h4l.s4w.eB6v(bpm7f.g4k(this));
            h4l.mw9n = h4l.mw9n.eB6v(czV7O.g4k(this));
            h4l.hd7W = h4l.hd7W.eB6v(bko6i.g4k(this));
            h4l.z4D = h4l.z4D.eB6v(czS7L.g4k(this))
        }
    }()
})();
(function () {
    var c4g = NEJ.P, N4R = c4g("nej.p"), be4i = c4g("nej.h"), k4o = c4g("nej.u"), h4l = c4g("nej.v"),
        I4M = c4g("nej.ut");
    if (N4R.nj9a.trident) return;
    if (!!window.postMessage) {
        be4i.blR7K = be4i.blR7K.eB6v(function (d4h) {
            d4h.stopped = !0;
            d4h.value = JSON.stringify(d4h.args[0])
        });
        return
    }
    var J4N = "MSG|", jZ8R = [];
    var czP7I = function () {
        var V4Z = unescape(window.name || "").trim();
        if (!V4Z || V4Z.indexOf(J4N) != 0) return;
        window.name = "";
        var o4s = k4o.Pm9d(V4Z.replace(J4N, ""), "|"), kN8F = (o4s.origin || "").toLowerCase();
        if (!!kN8F && kN8F != "*" && location.href.toLowerCase().indexOf(kN8F) != 0) return;
        h4l.z4D(window, "message", {
            data: JSON.parse(o4s.data || "null"),
            source: window.frames[o4s.self] || o4s.self,
            origin: be4i.bTP7I(o4s.ref || document.referrer)
        })
    };
    var czJ7C = function () {
        var Zf3x;
        var czI7B = function (bz4D, r4v, i4m) {
            if (k4o.di6c(Zf3x, bz4D.w) < 0) {
                Zf3x.push(bz4D.w);
                i4m.splice(r4v, 1);
                bz4D.w.name = bz4D.d
            }
        };
        return function () {
            Zf3x = [];
            k4o.no9f(jZ8R, czI7B);
            Zf3x = null
        }
    }();
    be4i.blT7M = function () {
        var czH7A = function (j4n) {
            var o4s = {};
            j4n = j4n || bb4f;
            o4s.origin = j4n.origin || "";
            o4s.ref = location.href;
            o4s.self = j4n.source;
            o4s.data = JSON.stringify(j4n.data);
            return J4N + k4o.uX2x(o4s, "|", !0)
        };
        return be4i.blT7M.eB6v(function (d4h) {
            d4h.stopped = !0;
            var bf4j = d4h.args;
            jZ8R.unshift({w: bf4j[0], d: escape(czH7A(bf4j[1]))})
        })
    }();
    I4M.fJ7C.A4E({element: window, event: "message"});
    window.setInterval(czJ7C, 100);
    window.setInterval(czP7I, 20)
})();
(function () {
    var c4g = NEJ.P, be4i = c4g("nej.h"), a2x = c4g("nej.e"), v4z = c4g("nej.j");
    v4z.czB7u = function () {
        var gL7E = window.name || "_parent", czA7t = {gx7q: window.top, gL7E: window, bI4M: window.parent};
        return function (cN6H, e4i) {
            if (typeof cN6H == "string") {
                cN6H = czA7t[cN6H] || window.frames[cN6H];
                if (!cN6H) return this
            }
            var j4n = NEJ.X({origin: "*", source: gL7E}, e4i);
            be4i.blT7M(cN6H, j4n);
            return this
        }
    }()
})();
(function () {
    var c4g = NEJ.P, it8l = c4g("nej.c"), a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        v4z = c4g("nej.j"), N4R = c4g("nej.ut.j"), R4V = {}, Zb3x;
    if (!!N4R.bqV8N) return;
    N4R.bqV8N = NEJ.C();
    Zb3x = N4R.bqV8N.O4S(N4R.IK6E);
    Zb3x.cx5C = function () {
        var eV6P = "NEJ-AJAX-DATA:", Gd5i = !1;
        var brd8V = function (d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(eV6P) != 0) return;
            j4n = JSON.parse(j4n.replace(eV6P, ""));
            var jY8Q = R4V[j4n.key];
            if (!jY8Q) return;
            delete R4V[j4n.key];
            j4n.result = decodeURIComponent(j4n.result || "");
            jY8Q.uT2x(j4n)
        };
        var brh8Z = function () {
            if (!Gd5i) {
                Gd5i = !0;
                h4l.s4w(window, "message", brd8V)
            }
        };
        return function () {
            this.cD6x();
            brh8Z()
        }
    }();
    Zb3x.co5t = function (e4i) {
        var gm7f = e4i.request, jY8Q = it8l.cjL2x(gm7f.url), eh6b = R4V[jY8Q];
        if (k4o.eJ6D(eh6b)) {
            eh6b.push(this.co5t.g4k(this, e4i));
            return
        }
        if (!eh6b) {
            R4V[jY8Q] = [this.co5t.g4k(this, e4i)];
            a2x.bdk4o({
                src: jY8Q, visible: !1, onload: function (d4h) {
                    var i4m = R4V[jY8Q];
                    R4V[jY8Q] = h4l.W4a(d4h).contentWindow;
                    k4o.no9f(i4m, function (dt6n) {
                        try {
                            dt6n()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.Af3x = "frm-" + k4o.oh0x();
        R4V[this.Af3x] = this;
        var j4n = NEJ.EX({url: "", data: null, timeout: 0, method: "GET"}, gm7f);
        j4n.key = this.Af3x;
        j4n.headers = e4i.headers;
        v4z.czB7u(R4V[jY8Q], {data: j4n})
    };
    Zb3x.ks8k = function () {
        delete R4V[this.Af3x];
        this.uT2x({status: 0});
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, em6g = c4g("nej.g"), a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        v4z = c4g("nej.j"), N4R = c4g("nej.ut.j"), R4V = {}, Jk6e;
    if (!!N4R.brw8o) return;
    N4R.brw8o = NEJ.C();
    Jk6e = N4R.brw8o.O4S(N4R.IK6E);
    Jk6e.cx5C = function () {
        var eV6P = "NEJ-UPLOAD-RESULT:", Gd5i = !1;
        var brd8V = function (d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(eV6P) != 0) return;
            j4n = JSON.parse(j4n.replace(eV6P, ""));
            var jY8Q = R4V[j4n.key];
            if (!jY8Q) return;
            delete R4V[j4n.key];
            jY8Q.uT2x(decodeURIComponent(j4n.result))
        };
        var brh8Z = function () {
            if (!Gd5i) {
                Gd5i = !0;
                h4l.s4w(window, "message", brd8V)
            }
        };
        return function () {
            this.cD6x();
            brh8Z()
        }
    }();
    Jk6e.bD4H = function () {
        this.bG4K();
        a2x.cJ6D(this.brP8H);
        delete this.brP8H;
        window.clearTimeout(this.ed6X);
        delete this.ed6X
    };
    Jk6e.uT2x = function (cG6A) {
        var Q4U;
        try {
            Q4U = JSON.parse(cG6A);
            this.z4D("onload", Q4U)
        } catch (e) {
            this.z4D("onerror", {code: em6g.bYx8p, message: cG6A})
        }
    };
    Jk6e.co5t = function () {
        var czp7i = function () {
            var mx9o, cG6A;
            try {
                var mx9o = this.brP8H.contentWindow.document.body, cG6A = mx9o.innerText || mx9o.textContent
            } catch (e) {
                return
            }
            this.uT2x(cG6A)
        };
        var bsu8m = function (Y4c, fl7e, rl0x) {
            v4z.bn4r(Y4c, {
                type: "json",
                method: "POST",
                cookie: rl0x,
                mode: parseInt(fl7e) || 0,
                onload: function (j4n) {
                    if (!this.ed6X) return;
                    this.z4D("onuploading", j4n);
                    this.ed6X = window.setTimeout(bsu8m.g4k(this, Y4c, fl7e, rl0x), 1e3)
                }.g4k(this),
                onerror: function (cb5g) {
                    if (!this.ed6X) return;
                    this.ed6X = window.setTimeout(bsu8m.g4k(this, Y4c, fl7e, rl0x), 1e3)
                }.g4k(this)
            })
        };
        return function (e4i) {
            var gm7f = e4i.request, ph0x = e4i.headers, fc6W = gm7f.data, V4Z = "fom-" + k4o.oh0x();
            R4V[V4Z] = this;
            fc6W.target = V4Z;
            fc6W.method = "POST";
            fc6W.enctype = em6g.EK5P;
            fc6W.encoding = em6g.EK5P;
            var Y4c = fc6W.action || "", lE9v = Y4c.indexOf("?") <= 0 ? "?" : "&";
            fc6W.action = Y4c + lE9v + "_proxy_=form";
            this.brP8H = a2x.bdk4o({
                name: V4Z, onload: function (d4h) {
                    var eh6b = h4l.W4a(d4h);
                    h4l.s4w(eh6b, "load", czp7i.g4k(this));
                    fc6W.submit();
                    var bTC7v = (fc6W.nej_query || bb4f).value;
                    if (!bTC7v) return;
                    var fl7e = (fc6W.nej_mode || bb4f).value, rl0x = (fc6W.nej_cookie || bb4f).value == "true";
                    this.ed6X = window.setTimeout(bsu8m.g4k(this, bTC7v, fl7e, rl0x), 100)
                }.g4k(this)
            })
        }
    }();
    Jk6e.ks8k = function () {
        this.z4D("onerror", {code: em6g.cel0x, message: "客户端终止文件上传"});
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, be4i = c4g("nej.h"), N4R = c4g("nej.ut.j");
    be4i.bra8S = function () {
        return new XMLHttpRequest
    };
    be4i.bti8a = function (fl7e, YZ3x, e4i) {
        var bz4D = !!YZ3x ? {2: N4R.brw8o} : {2: N4R.bqV8N, 3: N4R.blj6d};
        return (bz4D[fl7e] || N4R.baO3x).A4E(e4i)
    }
})();
(function () {
    var c4g = NEJ.P, N4R = c4g("nej.p"), be4i = c4g("nej.h");
    if (N4R.nj9a.trident) return;
    be4i.bra8S = function () {
        var NG9x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var czj7c = function () {
            for (var i = 0, l = NG9x.length; i < l; i++) {
                try {
                    return new ActiveXObject(NG9x[i])
                } catch (e) {
                }
            }
            return null
        };
        return be4i.bra8S.eB6v(function (d4h) {
            if (!!window.XMLHttpRequest) return;
            d4h.stopped = !0;
            d4h.value = czj7c()
        })
    }();
    be4i.bti8a = function () {
        var Fs5x = {0: 2, 1: 3};
        return be4i.bti8a.eB6v(function (d4h) {
            var bf4j = d4h.args, fl7e = bf4j[0] || 0;
            bf4j[0] = !!bf4j[1] ? 2 : Fs5x[fl7e] || fl7e
        })
    }()
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, be4i = c4g("nej.h"), em6g = c4g("nej.g"), k4o = c4g("nej.u"),
        v4z = c4g("nej.j"), N4R = c4g("nej.ut.j"), of0x = {}, Ih6b = bs4w;
    v4z.ks8k = function (fj7c) {
        var R4V = of0x[fj7c];
        if (!R4V) return this;
        R4V.req.ks8k();
        return this
    };
    v4z.YY3x = function (dV6P) {
        Ih6b = dV6P || bs4w;
        return this
    };
    v4z.bn4r = function () {
        var jA8s = (location.protocol + "//" + location.host).toLowerCase();
        var czf7Y = function (Y4c) {
            var kN8F = k4o.cCu8m(Y4c);
            return !!kN8F && kN8F != jA8s
        };
        var cza7T = function (ph0x) {
            return (ph0x || bb4f)[em6g.yg3x] == em6g.EK5P
        };
        var cyZ7S = function (e4i) {
            var YZ3x = cza7T(e4i.headers);
            if (!czf7Y(e4i.url) && !YZ3x) return N4R.baO3x.A4E(e4i);
            return be4i.bti8a(e4i.mode, YZ3x, e4i)
        };
        var GW6Q = function (fj7c) {
            var R4V = of0x[fj7c];
            if (!R4V) return;
            if (!!R4V.req) R4V.req.T4X();
            delete of0x[fj7c]
        };
        var bTB7u = function (fj7c, u4y) {
            var R4V = of0x[fj7c];
            if (!R4V) return;
            GW6Q(fj7c);
            try {
                var d4h = {type: u4y, result: arguments[2]};
                Ih6b(d4h);
                if (!d4h.stopped) (R4V[u4y] || bs4w)(d4h.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yB3x = function (fj7c, j4n) {
            bTB7u(fj7c, "onload", j4n)
        };
        var AE3x = function (fj7c, cb5g) {
            bTB7u(fj7c, "onerror", cb5g)
        };
        return function (Y4c, e4i) {
            e4i = e4i || {};
            var fj7c = k4o.oh0x(), R4V = {onload: e4i.onload || bs4w, onerror: e4i.onerror || bs4w};
            of0x[fj7c] = R4V;
            e4i.onload = yB3x.g4k(null, fj7c);
            e4i.onerror = AE3x.g4k(null, fj7c);
            if (!!e4i.query) {
                var lE9v = Y4c.indexOf("?") < 0 ? "?" : "&", bv4z = e4i.query;
                if (k4o.lw9n(bv4z)) bv4z = k4o.cE6y(bv4z);
                if (!!bv4z) Y4c += lE9v + bv4z
            }
            e4i.url = Y4c;
            R4V.req = cyZ7S(e4i);
            R4V.req.bpF8x(e4i.data);
            return fj7c
        }
    }();
    v4z.gQ7J = function (fc6W, e4i) {
        var fr7k = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(fr7k, e4i);
        fr7k.data = fc6W;
        fr7k.method = "POST";
        fr7k.timeout = 0;
        fr7k.headers[em6g.yg3x] = em6g.EK5P;
        return v4z.bn4r(fc6W.action, fr7k)
    }
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, em6g = c4g("nej.g"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        N4R = c4g("nej.ut.j"), mn9e, gO7H = 6e4;
    if (!!N4R.Ry0x) return;
    N4R.Ry0x = NEJ.C();
    mn9e = N4R.Ry0x.O4S(I4M.cH6B);
    mn9e.cx5C = function () {
        this.cD6x();
        this.Rz0x = {onerror: this.cyT7M.g4k(this), onloaded: this.cyS7L.g4k(this)};
        if (!this.constructor.S4W) this.constructor.S4W = {loaded: {}}
    };
    mn9e.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.Jn6h = e4i.version;
        this.beG5L = e4i.timeout;
        this.Rz0x.version = this.Jn6h;
        this.Rz0x.timeout = this.beG5L
    };
    mn9e.bTz7s = function (J4N) {
        delete this.constructor.S4W[J4N]
    };
    mn9e.AH3x = function (J4N) {
        return this.constructor.S4W[J4N]
    };
    mn9e.bTy7r = function (J4N, j4n) {
        this.constructor.S4W[J4N] = j4n
    };
    mn9e.YN2x = bs4w;
    mn9e.bTx7q = function (gm7f) {
        h4l.hd7W(gm7f)
    };
    mn9e.bfF5K = function (gm7f) {
        gm7f.src = this.lB9s;
        document.head.appendChild(gm7f)
    };
    mn9e.AN3x = function () {
        var R4V = this.AH3x(this.lB9s);
        if (!R4V) return;
        window.clearTimeout(R4V.timer);
        this.bTx7q(R4V.request);
        delete R4V.bind;
        delete R4V.timer;
        delete R4V.request;
        this.bTz7s(this.lB9s);
        this.AH3x("loaded")[this.lB9s] = !0
    };
    mn9e.YG2x = function (V4Z) {
        var R4V = this.AH3x(this.lB9s);
        if (!R4V) return;
        var i4m = R4V.bind;
        this.AN3x();
        if (!!i4m && i4m.length > 0) {
            var cz5E;
            while (i4m.length) {
                cz5E = i4m.shift();
                try {
                    cz5E.z4D(V4Z, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cz5E.T4X()
            }
        }
    };
    mn9e.eI6C = function (cb5g) {
        this.YG2x("onerror", cb5g)
    };
    mn9e.bTu7n = function () {
        this.YG2x("onloaded")
    };
    mn9e.cyw6q = function (Y4c) {
        this.constructor.A4E(this.Rz0x).Jr6l(Y4c)
    };
    mn9e.bTq7j = function (cb5g) {
        var R4V = this.AH3x(this.wl2x);
        if (!R4V) return;
        if (!!cb5g) R4V.error++;
        R4V.loaded++;
        if (R4V.loaded < R4V.total) return;
        this.bTz7s(this.wl2x);
        this.z4D(R4V.error > 0 ? "onerror" : "onloaded")
    };
    mn9e.cyT7M = function (cb5g) {
        this.bTq7j(!0)
    };
    mn9e.cyS7L = function () {
        this.bTq7j()
    };
    mn9e.Jr6l = function (Y4c) {
        Y4c = k4o.bte8W(Y4c);
        if (!Y4c) {
            this.z4D("onerror", {code: em6g.bua9R, message: "请指定要载入的资源地址！"});
            return this
        }
        this.lB9s = Y4c;
        if (!!this.Jn6h) this.lB9s += (this.lB9s.indexOf("?") < 0 ? "?" : "&") + this.Jn6h;
        if (this.AH3x("loaded")[this.lB9s]) {
            try {
                this.z4D("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T4X();
            return this
        }
        var R4V = this.AH3x(this.lB9s), gm7f;
        if (!!R4V) {
            R4V.bind.unshift(this);
            R4V.timer = window.clearTimeout(R4V.timer)
        } else {
            gm7f = this.YN2x();
            R4V = {request: gm7f, bind: [this]};
            this.bTy7r(this.lB9s, R4V);
            h4l.s4w(gm7f, "load", this.bTu7n.g4k(this));
            h4l.s4w(gm7f, "error", this.eI6C.g4k(this, {code: em6g.bie6Y, message: "无法加载指定资源文件[" + this.lB9s + "]！"}))
        }
        if (this.beG5L != 0) R4V.timer = window.setTimeout(this.eI6C.g4k(this, {
            code: em6g.bBG1x,
            message: "指定资源文件[" + this.lB9s + "]载入超时！"
        }), this.beG5L || gO7H);
        if (!!gm7f) this.bfF5K(gm7f);
        this.z4D("onloading");
        return this
    };
    mn9e.bTp7i = function (i4m) {
        if (!i4m || !i4m.length) {
            this.z4D("onerror", {code: em6g.bua9R, message: "请指定要载入的资源队列！"});
            return this
        }
        this.wl2x = k4o.oh0x();
        var R4V = {error: 0, loaded: 0, total: i4m.length};
        this.bTy7r(this.wl2x, R4V);
        for (var i = 0, l = i4m.length; i < l; i++) {
            if (!i4m[i]) {
                R4V.total--;
                continue
            }
            this.cyw6q(i4m[i])
        }
        this.z4D("onloading");
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = c4g("nej.e"), be4i = c4g("nej.h"), N4R = c4g("nej.ut.j"), RK0x;
    if (!!N4R.bgu5z) return;
    N4R.bgu5z = NEJ.C();
    RK0x = N4R.bgu5z.O4S(N4R.Ry0x);
    RK0x.YN2x = function () {
        var eK6E = a2x.dg6a("iframe");
        eK6E.width = 0;
        eK6E.height = 0;
        eK6E.style.display = "none";
        return eK6E
    };
    RK0x.bfF5K = function (gm7f) {
        gm7f.src = this.lB9s;
        document.body.appendChild(gm7f)
    };
    RK0x.eI6C = function (cb5g) {
        var eK6E = (this.AH3x(this.lB9s) || bb4f).request;
        this.YG2x("onerror", cb5g);
        be4i.bdz4D(eK6E)
    };
    RK0x.bTu7n = function () {
        var mx9o = null, eK6E = (this.AH3x(this.lB9s) || bb4f).request;
        try {
            mx9o = eK6E.contentWindow.document.body
        } catch (ex) {
        }
        this.YG2x("onloaded", mx9o);
        be4i.bdz4D(eK6E)
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), N4R = c4g("nej.ut.j"), bgv5A;
    if (!!N4R.Yw2x) return;
    N4R.Yw2x = NEJ.C();
    bgv5A = N4R.Yw2x.O4S(N4R.Ry0x);
    bgv5A.YN2x = function () {
        return a2x.dg6a("link")
    };
    bgv5A.bfF5K = function (gm7f) {
        gm7f.href = this.lB9s;
        document.head.appendChild(gm7f)
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), N4R = c4g("nej.ut.j"), Yu2x;
    if (!!N4R.Yt2x) return;
    N4R.Yt2x = NEJ.C();
    Yu2x = N4R.Yt2x.O4S(N4R.Ry0x);
    Yu2x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.bTn7g = e4i.async;
        this.bgO5T = e4i.charset;
        this.Rz0x.async = !1;
        this.Rz0x.charset = this.bgO5T
    };
    Yu2x.YN2x = function () {
        var gm7f = a2x.dg6a("script");
        if (this.bTn7g != null) gm7f.async = !!this.bTn7g;
        if (this.bgO5T != null) gm7f.charset = this.bgO5T;
        return gm7f
    };
    Yu2x.bTx7q = function (gm7f) {
        a2x.cJ6D(gm7f)
    }
})();
(function () {
    var c4g = NEJ.P, v4z = c4g("nej.j"), N4R = c4g("nej.ut.j");
    v4z.cyj6d = function (Y4c, e4i) {
        N4R.Yt2x.A4E(e4i).Jr6l(Y4c);
        return this
    };
    v4z.cyi6c = function (i4m, e4i) {
        N4R.Yt2x.A4E(e4i).bTp7i(i4m);
        return this
    };
    v4z.cDn8f = function (Y4c, e4i) {
        N4R.Yw2x.A4E(e4i).Jr6l(Y4c);
        return this
    };
    v4z.cyf6Z = function (i4m, e4i) {
        N4R.Yw2x.A4E(e4i).bTp7i(i4m);
        return this
    };
    v4z.bTm7f = function (Y4c, e4i) {
        N4R.bgu5z.A4E(e4i).Jr6l(Y4c);
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"), R4V = {}, tv1x = +(new Date) + "-";
    a2x.cZ6T = function () {
        var cF6z = 0;
        var RL0x = function () {
            if (cF6z > 0) return;
            cF6z = 0;
            h4l.z4D(document, "templateready");
            h4l.hd7W(document, "templateready")
        };
        var Yq2x = function (ge7X, e4i) {
            var cS6M = a2x.t4x(ge7X, "src");
            if (!cS6M) return;
            e4i = e4i || bb4f;
            var fT7M = e4i.root;
            if (!fT7M) {
                fT7M = ge7X.ownerDocument.location.href
            } else {
                fT7M = k4o.bte8W(fT7M)
            }
            cS6M = cS6M.split(",");
            k4o.bd4h(cS6M, function (D4H, r4v, i4m) {
                i4m[r4v] = k4o.bte8W(D4H, fT7M)
            });
            return cS6M
        };
        var cyd6X = function (ge7X, e4i) {
            if (!ge7X) return;
            var cS6M = Yq2x(ge7X, e4i);
            if (!!cS6M) v4z.cyf6Z(cS6M, {version: a2x.t4x(ge7X, "version")});
            a2x.bPk4o(ge7X.value)
        };
        var cxX6R = function (D4H) {
            cF6z--;
            a2x.bPl4p(D4H);
            RL0x()
        };
        var cxW6Q = function (ge7X, e4i) {
            if (!ge7X) return;
            var cS6M = Yq2x(ge7X, e4i), eQ6K = ge7X.value;
            if (!!cS6M) {
                cF6z++;
                var e4i = {version: a2x.t4x(ge7X, "version"), onloaded: cxX6R.g4k(null, eQ6K)};
                window.setTimeout(v4z.cyi6c.g4k(v4z, cS6M, e4i), 0);
                return
            }
            a2x.bPl4p(eQ6K)
        };
        var cxV6P = function (mx9o) {
            cF6z--;
            a2x.cZ6T(mx9o);
            RL0x()
        };
        var cxU6O = function (ge7X, e4i) {
            if (!ge7X) return;
            var cS6M = Yq2x(ge7X, e4i)[0];
            if (!!cS6M) {
                cF6z++;
                var e4i = {version: a2x.t4x(ge7X, "version"), onloaded: cxV6P};
                window.setTimeout(v4z.bTm7f.g4k(v4z, cS6M, e4i), 0)
            }
        };
        var cxT6N = function (C4G, cG6A) {
            cF6z--;
            a2x.Jw6q(C4G, cG6A || "");
            RL0x()
        };
        var cxQ6K = function (ge7X, e4i) {
            if (!ge7X || !ge7X.id) return;
            var C4G = ge7X.id, cS6M = Yq2x(ge7X, e4i)[0];
            if (!!cS6M) {
                cF6z++;
                var Y4c = cS6M + (cS6M.indexOf("?") < 0 ? "?" : "&") + (a2x.t4x(ge7X, "version") || ""),
                    e4i = {type: "text", method: "GET", onload: cxT6N.g4k(null, C4G)};
                window.setTimeout(v4z.bn4r.g4k(v4z, Y4c, e4i), 0)
            }
        };
        var cxP6J = function (f4j, e4i) {
            var u4y = f4j.name.toLowerCase();
            switch (u4y) {
                case"jst":
                    a2x.es6m(f4j, !0);
                    return;
                case"txt":
                    a2x.Jw6q(f4j.id, f4j.value || "");
                    return;
                case"ntp":
                    a2x.iu8m(f4j.value || "", f4j.id);
                    return;
                case"js":
                    cxW6Q(f4j, e4i);
                    return;
                case"css":
                    cyd6X(f4j, e4i);
                    return;
                case"html":
                    cxU6O(f4j, e4i);
                    return;
                case"res":
                    cxQ6K(f4j, e4i);
                    return
            }
        };
        I4M.fJ7C.A4E({element: document, event: "templateready", oneventadd: RL0x});
        return function (F4J, e4i) {
            F4J = a2x.B4F(F4J);
            if (!!F4J) {
                var i4m = F4J.tagName == "TEXTAREA" ? [F4J] : F4J.getElementsByTagName("textarea");
                k4o.bd4h(i4m, function (f4j) {
                    cxP6J(f4j, e4i)
                });
                a2x.cJ6D(F4J, !0)
            }
            RL0x();
            return this
        }
    }();
    a2x.Jw6q = function (J4N, D4H) {
        R4V[J4N] = D4H || "";
        return this
    };
    a2x.iI8A = function (J4N) {
        return R4V[J4N] || ""
    };
    a2x.iu8m = function (F4J, J4N) {
        J4N = J4N || k4o.oh0x();
        F4J = a2x.B4F(F4J) || F4J;
        a2x.Jw6q(tv1x + J4N, F4J);
        a2x.mY9P(F4J);
        return J4N
    };
    a2x.dy6s = function (J4N) {
        if (!J4N) return null;
        J4N = tv1x + J4N;
        var D4H = a2x.iI8A(J4N);
        if (!D4H) return null;
        if (k4o.fG7z(D4H)) {
            D4H = a2x.nH9y(D4H);
            a2x.Jw6q(J4N, D4H)
        }
        return D4H.cloneNode(!0)
    };
    a2x.AS3x = function () {
        var Ih6b = function (D4H, J4N) {
            return J4N == "offset" || J4N == "limit"
        };
        return function (i4m, p4t, e4i) {
            var br4v = [];
            if (!i4m || !i4m.length || !p4t) return br4v;
            e4i = e4i || bb4f;
            var dr6l = i4m.length, jT8L = parseInt(e4i.offset) || 0,
                fR7K = Math.min(dr6l, jT8L + (parseInt(e4i.limit) || dr6l)),
                cq5v = {total: i4m.length, range: [jT8L, fR7K]};
            NEJ.X(cq5v, e4i, Ih6b);
            for (var i = jT8L, cz5E; i < fR7K; i++) {
                cq5v.index = i;
                cq5v.data = i4m[i];
                cz5E = p4t.A4E(cq5v);
                var C4G = cz5E.FB5G();
                R4V[C4G] = cz5E;
                cz5E.T4X = cz5E.T4X.eB6v(function (C4G, cz5E) {
                    delete R4V[C4G];
                    delete cz5E.T4X
                }.g4k(null, C4G, cz5E));
                br4v.push(cz5E)
            }
            return br4v
        }
    }();
    a2x.bTd6X = function (C4G) {
        return R4V[C4G]
    };
    a2x.cDo8g = function (dY6S, e4i) {
        e4i = e4i || bb4f;
        a2x.cZ6T(e4i.tid || "template-box");
        h4l.s4w(document, "templateready", function () {
            dY6S.A4E().z4D("onshow", e4i)
        })
    };
    c4g("dbg").dumpTC = function () {
        return R4V
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, a2x = c4g("nej.e"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        N4R = c4g("nej.ui"), b3x;
    if (!!N4R.ei6c) return;
    N4R.ei6c = NEJ.C();
    b3x = N4R.ei6c.O4S(I4M.cH6B);
    b3x.cx5C = function () {
        this.cD6x();
        a2x.bOQ4U();
        this.ce5j();
        this.bW5b()
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.cxC6w(e4i.clazz);
        this.bTb6V(e4i.parent)
    };
    b3x.bD4H = function () {
        this.bG4K();
        this.bSZ6T();
        delete this.gg7Z;
        a2x.mY9P(this.n4r);
        a2x.x4B(this.n4r, this.bjR6L);
        delete this.bjR6L
    };
    b3x.ce5j = bs4w;
    b3x.bW5b = function () {
        if (!this.cd5i) this.Jz6t();
        this.n4r = a2x.dy6s(this.cd5i);
        if (!this.n4r) this.n4r = a2x.dg6a("div", this.mb9S);
        a2x.y4C(this.n4r, this.mb9S)
    };
    b3x.Jz6t = bs4w;
    b3x.cxC6w = function (dZ6T) {
        this.bjR6L = dZ6T || "";
        a2x.y4C(this.n4r, this.bjR6L)
    };
    b3x.cxx6r = function () {
        if (!this.mb9S) return;
        a2x.y4C(this.gg7Z, this.mb9S + "-parent")
    };
    b3x.bSZ6T = function () {
        if (!this.mb9S) return;
        a2x.x4B(this.gg7Z, this.mb9S + "-parent")
    };
    b3x.lQ9H = function () {
        return this.n4r
    };
    b3x.bTb6V = function (bI4M) {
        if (!this.n4r) return this;
        this.bSZ6T();
        if (k4o.gG7z(bI4M)) {
            this.gg7Z = bI4M(this.n4r)
        } else {
            this.gg7Z = a2x.B4F(bI4M);
            if (!!this.gg7Z) this.gg7Z.appendChild(this.n4r)
        }
        this.cxx6r();
        return this
    };
    b3x.L4P = function () {
        if (!this.gg7Z || !this.n4r || this.n4r.parentNode == this.gg7Z) return this;
        this.gg7Z.appendChild(this.n4r);
        return this
    };
    b3x.bu4y = function () {
        a2x.mY9P(this.n4r);
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, a2x = c4g("nej.e"), k4o = c4g("nej.u"), be4i = c4g("nej.h"),
        N4R = c4g("nej.ui"), vV2x, bSW6Q;
    if (!!N4R.Sc0x) return;
    N4R.Sc0x = NEJ.C();
    vV2x = N4R.Sc0x.O4S(N4R.ei6c);
    bSW6Q = N4R.Sc0x.cs5x;
    vV2x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.xp2x("oncontentready", e4i.oncontentready || this.cxo6i.g4k(this));
        this.cxn6h = !!e4i.nohack;
        this.cxk6e = !!e4i.destroyable;
        this.JC6w(e4i.content)
    };
    vV2x.bD4H = function () {
        this.z4D("onbeforerecycle");
        this.bG4K();
        this.XT2x();
        this.JC6w("");
        a2x.eY6S(this.n4r, {top: "", left: ""})
    };
    vV2x.cxo6i = bs4w;
    vV2x.JD6x = bs4w;
    vV2x.XT2x = function () {
        a2x.mY9P(this.n4r);
        if (!!this.oi0x) {
            this.oi0x = be4i.bgs5x(this.n4r);
            delete this.oi0x
        }
    };
    vV2x.JC6w = function (bo4s) {
        if (!this.n4r || !this.AW4a || bo4s == null) return this;
        bo4s = bo4s || "";
        k4o.fG7z(bo4s) ? this.AW4a.innerHTML = bo4s : this.AW4a.appendChild(bo4s);
        this.z4D("oncontentready", this.AW4a);
        return this
    };
    vV2x.gF7y = function (bi4m) {
        var D4H = bi4m.top;
        if (D4H != null) {
            D4H += "px";
            a2x.ba4e(this.n4r, "top", D4H);
            a2x.ba4e(this.oi0x, "top", D4H)
        }
        var D4H = bi4m.left;
        if (D4H != null) {
            D4H += "px";
            a2x.ba4e(this.n4r, "left", D4H);
            a2x.ba4e(this.oi0x, "left", D4H)
        }
        return this
    };
    vV2x.L4P = function () {
        a2x.ba4e(this.n4r, "visibility", "hidden");
        bSW6Q.L4P.apply(this, arguments);
        this.JD6x();
        a2x.ba4e(this.n4r, "visibility", "");
        if (!this.cxn6h) {
            this.oi0x = be4i.oi0x(this.n4r)
        }
        return this
    };
    vV2x.bu4y = function () {
        this.cxk6e ? this.T4X() : this.XT2x();
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, k4o = c4g("nej.u"), a2x = c4g("nej.e"), N4R = c4g("nej.ui"), AX4b;
    if (!!N4R.XP2x) return;
    N4R.XP2x = NEJ.C();
    AX4b = N4R.XP2x.O4S(N4R.ei6c);
    AX4b.bl4p = function (e4i) {
        this.So0x();
        this.bm4q(this.cxj6d(e4i));
        this.cc5h.onbeforerecycle = this.T4X.g4k(this);
        this.pb0x = this.blJ6D()
    };
    AX4b.bD4H = function () {
        this.z4D("onbeforerecycle");
        this.bG4K();
        delete this.cc5h;
        a2x.mY9P(this.n4r);
        var AZ4d = this.pb0x;
        if (!!AZ4d) {
            delete this.pb0x;
            AZ4d.T4X()
        }
    };
    AX4b.blJ6D = bs4w;
    AX4b.cxj6d = function (e4i) {
        var o4s = {};
        k4o.eC6w(e4i, function (p4t, J4N) {
            this.cc5h.hasOwnProperty(J4N) ? this.cc5h[J4N] = p4t : o4s[J4N] = p4t
        }, this);
        return o4s
    };
    AX4b.So0x = function () {
        this.cc5h = {clazz: "", parent: null, content: this.n4r, destroyable: !1, oncontentready: null, nohack: !1}
    };
    AX4b.L4P = function () {
        if (!!this.pb0x) this.pb0x.L4P();
        this.z4D("onaftershow");
        return this
    };
    AX4b.bu4y = function () {
        if (!!this.pb0x) this.pb0x.bu4y();
        return this
    }
})();
(function () {
    var c4g = NEJ.P, em6g = c4g("nej.g"), be4i = c4g("nej.h"), a2x = c4g("nej.e"), k4o = c4g("nej.u"),
        h4l = c4g("nej.v"), N4R = c4g("nej.ui"), Sq0x, bSV6P;
    if (!!N4R.JE6y) return;
    var iZ8R = a2x.tO1x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + em6g.bkx6r + ");}");
    N4R.JE6y = NEJ.C();
    Sq0x = N4R.JE6y.O4S(N4R.ei6c);
    bSV6P = N4R.JE6y.cs5x;
    Sq0x.bl4p = function (e4i) {
        this.bm4q(e4i);
        var bo4s = e4i.content || "&nbsp;";
        k4o.fG7z(bo4s) ? this.n4r.innerHTML = bo4s : this.n4r.appendChild(bo4s)
    };
    Sq0x.bD4H = function () {
        this.bG4K();
        this.n4r.innerHTML = "&nbsp;"
    };
    Sq0x.ce5j = function () {
        this.mb9S = iZ8R
    };
    Sq0x.L4P = function () {
        be4i.bgn5s(this.n4r);
        bSV6P.L4P.apply(this, arguments);
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = c4g("nej.e"), h4l = c4g("nej.v"), N4R = c4g("nej.ut"), vP2x;
    if (!!N4R.vN2x) return;
    N4R.vN2x = NEJ.C();
    vP2x = N4R.vN2x.O4S(N4R.cH6B);
    vP2x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.cxh6b = !!e4i.overflow;
        this.n4r = a2x.B4F(e4i.body);
        this.Bb4f = a2x.B4F(e4i.view) || a2x.bKU3x(this.n4r);
        this.bSU6O = a2x.B4F(e4i.mbar) || this.n4r;
        this.XE2x = parseInt(e4i.direction) || 0;
        if (!!e4i.isRelative) {
            this.n4r.style.position = "relative";
            this.bnf7Y = true;
            this.bnn7g()
        }
        this.bX5c([[document, "mouseup", this.bns7l.g4k(this)], [document, "mousemove", this.bnL7E.g4k(this)], [this.bSU6O, "mousedown", this.Sz0x.g4k(this)]])
    };
    vP2x.bnn7g = function () {
        if (!!this.bnf7Y) {
            this.JH6B = a2x.hO8G(this.n4r, this.Bb4f);
            this.JH6B.x -= parseInt(a2x.df6Z(this.n4r, "left")) || 0;
            this.JH6B.y -= parseInt(a2x.df6Z(this.n4r, "top")) || 0
        }
    };
    vP2x.bD4H = function () {
        this.bG4K();
        delete this.n4r;
        delete this.bSU6O;
        delete this.Bb4f
    };
    vP2x.bnZ7S = function () {
        return {
            x: Math.max(this.Bb4f.clientWidth, this.Bb4f.scrollWidth) - this.n4r.offsetWidth,
            y: Math.max(this.Bb4f.clientHeight, this.Bb4f.scrollHeight) - this.n4r.offsetHeight
        }
    };
    vP2x.Sz0x = function (d4h) {
        h4l.bh4l(d4h);
        if (!!this.hP8H) return;
        this.hP8H = {x: h4l.jB8t(d4h), y: h4l.mf9W(d4h)};
        this.bSS6M = this.bnZ7S();
        this.z4D("ondragstart", d4h)
    };
    vP2x.bnL7E = function (d4h) {
        if (!this.hP8H) return;
        var bi4m = {x: h4l.jB8t(d4h), y: h4l.mf9W(d4h)};
        var py0x = bi4m.x - this.hP8H.x, pz0x = bi4m.y - this.hP8H.y, D4H = {
            top: (parseInt(a2x.df6Z(this.n4r, "top")) || 0) + pz0x,
            left: (parseInt(a2x.df6Z(this.n4r, "left")) || 0) + py0x
        };
        if (this.bnf7Y) {
            this.bnn7g();
            D4H.top = D4H.top + this.JH6B.y;
            D4H.left = D4H.left + this.JH6B.x
        }
        this.hP8H = bi4m;
        this.gF7y(D4H)
    };
    vP2x.bns7l = function (d4h) {
        if (!this.hP8H) return;
        delete this.bSS6M;
        delete this.hP8H;
        this.z4D("ondragend", this.boP7I())
    };
    vP2x.gF7y = function (d4h) {
        if (!this.cxh6b) {
            var bSR6L = this.bSS6M || this.bnZ7S();
            d4h.top = Math.min(bSR6L.y, Math.max(0, d4h.top));
            d4h.left = Math.min(bSR6L.x, Math.max(0, d4h.left))
        }
        var ch5m = this.n4r.style;
        if (this.bnf7Y) {
            this.bnn7g();
            d4h.top = d4h.top - this.JH6B.y;
            d4h.left = d4h.left - this.JH6B.x
        }
        if (this.XE2x == 0 || this.XE2x == 2) ch5m.top = d4h.top + "px";
        if (this.XE2x == 0 || this.XE2x == 1) ch5m.left = d4h.left + "px";
        this.z4D("onchange", d4h);
        return this
    };
    vP2x.boP7I = function () {
        return {left: parseInt(a2x.df6Z(this.n4r, "left")) || 0, top: parseInt(a2x.df6Z(this.n4r, "top")) || 0}
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = NEJ.P("nej.e"), h4l = NEJ.P("nej.v"), k4o = NEJ.P("nej.u"),
        I4M = NEJ.P("nej.ut"), N4R = NEJ.P("nej.ui"), iZ8R, gi7b, b3x, K4O;
    if (!!N4R.XA2x) return;
    N4R.XA2x = NEJ.C();
    b3x = N4R.XA2x.O4S(N4R.Sc0x);
    K4O = N4R.XA2x.cs5x;
    b3x.cx5C = function () {
        this.se1x = {};
        this.kQ9H = {onchange: this.bnL7E.g4k(this)};
        this.cD6x()
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.cwZ6T(e4i.mask);
        this.cwV6P(e4i.align);
        this.Bg4k(e4i.title);
        if (!e4i.draggable) return;
        this.iX8P = I4M.vN2x.A4E(this.kQ9H)
    };
    b3x.bD4H = function () {
        this.bG4K();
        delete this.qN0x;
        delete this.SE1x;
        if (!!this.Bh4l) {
            this.Bh4l.T4X();
            delete this.Bh4l
        }
        if (!!this.iX8P) {
            this.iX8P.T4X();
            delete this.iX8P
        }
    };
    b3x.ce5j = function () {
        this.mb9S = iZ8R;
        this.cd5i = gi7b
    };
    b3x.bW5b = function () {
        this.cg5l();
        var i4m = a2x.dk6e(this.n4r);
        this.AW4a = i4m[1];
        this.kQ9H.mbar = i4m[0];
        this.kQ9H.body = this.n4r;
        h4l.s4w(i4m[2], "mousedown", this.cwU6O.g4k(this));
        h4l.s4w(this.kQ9H.mbar, "mousedown", this.Sz0x.g4k(this));
        this.bSP6J = a2x.dk6e(this.kQ9H.mbar)[0]
    };
    b3x.cwU6O = function (d4h) {
        h4l.bh4l(d4h);
        this.z4D("onclose", d4h);
        if (!d4h.stopped) {
            this.bu4y()
        }
    };
    b3x.Sz0x = function (d4h) {
        h4l.z4D(document, "click")
    };
    b3x.bnL7E = function (d4h) {
        if (!this.oi0x) return;
        a2x.eY6S(this.oi0x, {top: d4h.top + "px", left: d4h.left + "px"})
    };
    b3x.JD6x = function () {
        var et6n = [function () {
            return 0
        }, function (om0x, mB9s, bi4m, J4N) {
            if (J4N == "top" && window.top != window.self) {
                var Xw2x = 0, Gj5o = 0;
                if (top.g_topBarHeight) Xw2x = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight) Gj5o = top.g_bottomBarHeight;
                if (om0x.top <= Xw2x) {
                    var brI8A = Math.max(0, (mB9s.height - (Xw2x - om0x.top) - Gj5o - bi4m.height) / 2);
                    return brI8A + Xw2x
                } else {
                    var brI8A = Math.max(0, (mB9s.height - Gj5o - bi4m.height) / 2);
                    return brI8A + om0x.top
                }
            }
            return Math.max(0, om0x[J4N] + (mB9s[io8g[J4N]] - bi4m[io8g[J4N]]) / 2)
        }, function (om0x, mB9s, bi4m, J4N) {
            return om0x[J4N] + (mB9s[io8g[J4N]] - bi4m[io8g[J4N]])
        }], cwI6C = ["left", "top"], io8g = {left: "width", top: "height"};
        return function () {
            var D4H = {}, ch5m = this.n4r.style, jD8v = a2x.oy0x(), om0x = {left: jD8v.scrollLeft, top: jD8v.scrollTop},
                mB9s = {width: jD8v.clientWidth, height: jD8v.clientHeight},
                bi4m = {width: this.n4r.offsetWidth, height: this.n4r.offsetHeight},
                do6i = {left: jD8v.clientWidth - this.n4r.offsetWidth, top: jD8v.clientHeight - this.n4r.offsetHeight};
            k4o.bd4h(cwI6C, function (J4N, r4v) {
                var dt6n = et6n[this.qN0x[r4v]];
                if (!dt6n) return;
                D4H[J4N] = dt6n(om0x, mB9s, bi4m, J4N)
            }, this);
            this.gF7y(D4H)
        }
    }();
    b3x.cwH6B = function () {
        if (!this.Bh4l) {
            if (!this.SE1x) return;
            this.se1x.parent = this.gg7Z;
            this.Bh4l = this.SE1x.A4E(this.se1x)
        }
        this.Bh4l.L4P()
    };
    b3x.XT2x = function () {
        if (!!this.Bh4l) this.Bh4l.bu4y();
        K4O.XT2x.apply(this, arguments)
    };
    b3x.cwZ6T = function (kX9O) {
        if (!!kX9O) {
            if (kX9O instanceof N4R.JE6y) {
                this.Bh4l = kX9O;
                return
            }
            if (k4o.gG7z(kX9O)) {
                this.SE1x = kX9O;
                return
            }
            this.SE1x = N4R.JE6y;
            if (k4o.fG7z(kX9O)) this.se1x.clazz = kX9O;
            return
        }
        this.SE1x = null
    };
    b3x.Bg4k = function (el6f, dT6N) {
        if (!!this.bSP6J) {
            var bev5A = !dT6N ? "innerText" : "innerHTML";
            this.bSP6J[bev5A] = el6f || "标题"
        }
        return this
    };
    b3x.cwV6P = function () {
        var dh6b = /\s+/, cwF6z = {left: 0, center: 1, right: 2, auto: 3},
            cwE6y = {top: 0, middle: 1, bottom: 2, auto: 3};
        return function (nJ9A) {
            this.qN0x = (nJ9A || "").split(dh6b);
            var ck5p = cwF6z[this.qN0x[0]];
            if (ck5p == null) ck5p = 1;
            this.qN0x[0] = ck5p;
            var ck5p = cwE6y[this.qN0x[1]];
            if (ck5p == null) ck5p = 1;
            this.qN0x[1] = ck5p;
            return this
        }
    }();
    b3x.L4P = function () {
        K4O.L4P.apply(this, arguments);
        this.cwH6B();
        return this
    };
    iZ8R = a2x.tO1x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gi7b = a2x.iu8m('<div class="' + iZ8R + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c4g = NEJ.P, k4o = c4g("nej.u"), N4R = c4g("nej.ui"), bsy8q;
    if (!!N4R.Xv2x) return;
    N4R.Xv2x = NEJ.C();
    bsy8q = N4R.Xv2x.O4S(N4R.XP2x);
    bsy8q.blJ6D = function () {
        return N4R.XA2x.A4E(this.cc5h)
    };
    bsy8q.So0x = function () {
        N4R.Xv2x.cs5x.So0x.apply(this, arguments);
        this.cc5h.mask = null;
        this.cc5h.title = "标题";
        this.cc5h.align = "";
        this.cc5h.draggable = !1;
        this.cc5h.onclose = null
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), bc4g = c4g("nej.ui"), m4q = c4g("nm.l"), b3x, K4O;
    m4q.en6h = NEJ.C();
    b3x = m4q.en6h.O4S(bc4g.Xv2x);
    b3x.bl4p = function (e4i) {
        e4i.clazz = "m-layer z-show " + (e4i.clazz || "");
        e4i.nohack = true;
        e4i.draggable = true;
        this.bm4q(e4i)
    };
    b3x.dP6J = function (f4j, bH4L) {
        if (!f4j) return;
        a2x.ba4e(f4j, "display", !bH4L ? "none" : "");
        f4j.lastChild.innerText = bH4L || ""
    };
    b3x.dX6R = function (gH7A, cX6R, SG1x, SI1x) {
        var dY6S = "js-lock";
        if (cX6R === undefined) return a2x.bE4I(gH7A, dY6S);
        !cX6R ? a2x.x4B(gH7A, dY6S) : a2x.y4C(gH7A, dY6S);
        gH7A.firstChild.innerText = !cX6R ? SG1x : SI1x
    };
    m4q.en6h.L4P = function (e4i) {
        e4i = e4i || {};
        if (e4i.mask === undefined) e4i.mask = "m-mask";
        if (e4i.parent === undefined) e4i.parent = document.body;
        if (e4i.draggable === undefined) e4i.draggable = true;
        !!this.ff7Y && this.ff7Y.T4X();
        this.ff7Y = this.A4E(e4i);
        this.ff7Y.L4P(e4i);
        return this.ff7Y
    };
    m4q.en6h.bu4y = function () {
        !!this.ff7Y && this.ff7Y.T4X()
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), q4u = c4g("nm.d"),
        l4p = c4g("nm.x"), m4q = c4g("nm.l"), b3x, K4O;
    m4q.bud9U = NEJ.C();
    b3x = m4q.bud9U.O4S(m4q.en6h);
    K4O = m4q.bud9U.cs5x;
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        if (e4i.bubble === undefined) e4i.bubble = true;
        this.SK1x = e4i.bubble;
        this.qC0x = e4i.message || ""
    };
    b3x.ce5j = function () {
        this.cd5i = a2x.iu8m('<div class="lyct f-cb f-tc"></div>')
    };
    b3x.bW5b = function () {
        this.cg5l();
        h4l.s4w(this.n4r, "click", this.cM6G.g4k(this))
    };
    b3x.cM6G = function (d4h) {
        var f4j = h4l.W4a(d4h, "d:action");
        if (!f4j) return;
        if (f4j.href) h4l.cp5u(d4h);
        if (a2x.t4x(f4j, "action") == "close") this.bu4y();
        if (this.SK1x === !1) h4l.tr1x(d4h);
        this.z4D("onaction", a2x.t4x(f4j, "action"))
    };
    b3x.L4P = function () {
        K4O.L4P.call(this);
        this.n4r.innerHTML = this.qC0x
    };
    var gJ7C = a2x.es6m('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l4p.mZ9Q = function () {
        var eg6a;
        var cz5E;
        var bva9R = function (fp7i, U4Y) {
            if (k4o.gG7z(fp7i, "function") && fp7i(U4Y) != -1) cz5E.T4X()
        };
        var Bm4q = function () {
            !!cz5E && cz5E.bu4y()
        };
        return function (e4i) {
            clearTimeout(eg6a);
            e4i = e4i || {};
            e4i.title = e4i.title || "提示";
            e4i.clazz = e4i.clazz || "";
            e4i.parent = e4i.parent || document.body;
            e4i.buttons = e4i.buttons || [];
            e4i.message = a2x.bZ5e(gJ7C, e4i);
            e4i.onaction = bva9R.g4k(null, e4i.action);
            if (e4i.mask === undefined) e4i.mask = true;
            if (e4i.draggable === undefined) e4i.draggable = true;
            !!cz5E && cz5E.T4X();
            cz5E = m4q.bud9U.A4E(e4i);
            cz5E.L4P();
            if (e4i.autoclose) eg6a = setTimeout(Bm4q.g4k(null), 2e3);
            return cz5E
        }
    }();
    l4p.fq7j = function (e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w1";
        e4i.buttons = [{klass: "u-btn2-2", action: "close", text: e4i.btntxt || "确定"}];
        var cz5E = l4p.mZ9Q(e4i);
        return cz5E
    };
    l4p.hi7b = function (e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w2";
        e4i.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e4i.btnok || "确定",
            style: e4i.okstyle || ""
        }, {klass: "u-btn2-1", action: "close", text: e4i.btncc || "取消", style: e4i.ccstyle || ""}];
        var cz5E = l4p.mZ9Q(e4i);
        return cz5E
    }
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u");
    a2x.cwD6x = function () {
        var gK7D = /[\r\n]/gi, R4V = {};
        var cwC6w = function (cI6C) {
            return (cI6C || "").replace(gK7D, "aa").length
        };
        var bSL6F = function (C4G) {
            var bg4k = R4V[C4G], bSK6E = a2x.B4F(C4G), qz0x = a2x.B4F(C4G + "-counter");
            if (!bSK6E || !bg4k) return;
            var d4h = {input: bSK6E.value};
            d4h.length = bg4k.onlength(d4h.input);
            d4h.delta = bg4k.max - d4h.length;
            bg4k.onchange(d4h);
            qz0x.innerHTML = d4h.value || "剩余" + d4h.delta + "个字"
        };
        return function (F4J, e4i) {
            var C4G = a2x.lv9m(F4J);
            if (!C4G || !!R4V[C4G]) return;
            var bg4k = NEJ.X({}, e4i);
            bg4k.onchange = bg4k.onchange || bs4w;
            bg4k.onlength = cwC6w;
            if (!bg4k.max) {
                var bSJ6D = parseInt(a2x.gh7a(C4G, "maxlength")), bSI6C = parseInt(a2x.t4x(C4G, "maxLength"));
                bg4k.max = bSJ6D || bSI6C || 100;
                if (!bSJ6D && !!bSI6C) bg4k.onlength = k4o.fy7r
            }
            R4V[C4G] = bg4k;
            h4l.s4w(C4G, "input", bSL6F.g4k(null, C4G));
            var f4j = a2x.Iv6p(C4G, {nid: bg4k.nid || "js-counter", clazz: bg4k.clazz});
            bg4k.xid = C4G + "-counter";
            f4j.id = bg4k.xid;
            bSL6F(C4G)
        }
    }()
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), be4i = c4g("nej.h");
    be4i.beQ5V = function (F4J, dZ6T) {
    }
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, N4R = c4g("nej.p"), a2x = c4g("nej.e"), h4l = c4g("nej.v"), be4i = c4g("nej.h");
    if (N4R.nj9a.trident) return;
    be4i.beQ5V = function () {
        var R4V = {};
        var HZ6T = function (d4h) {
            var dm6g = h4l.W4a(d4h);
            if (!!dm6g.value) return;
            a2x.ba4e(a2x.Iv6p(dm6g), "display", "none")
        };
        var Ez5E = function (d4h) {
            var dm6g = h4l.W4a(d4h);
            if (!!dm6g.value) return;
            a2x.ba4e(a2x.Iv6p(dm6g), "display", "")
        };
        var cwx6r = function (dm6g, dZ6T) {
            var C4G = a2x.lv9m(dm6g), iU8M = a2x.Iv6p(dm6g, {tag: "label", clazz: dZ6T});
            iU8M.htmlFor = C4G;
            var cG6A = a2x.gh7a(dm6g, "placeholder") || "";
            iU8M.innerText = cG6A == "null" ? "" : cG6A;
            var ci5n = dm6g.offsetHeight + "px";
            a2x.eY6S(iU8M, {left: 0, display: !dm6g.value ? "" : "none"})
        };
        return be4i.beQ5V.eB6v(function (d4h) {
            d4h.stopped = !0;
            var bf4j = d4h.args, dm6g = a2x.B4F(bf4j[0]);
            if (!!R4V[dm6g.id]) return;
            cwx6r(dm6g, bf4j[1]);
            R4V[dm6g.id] = !0;
            h4l.s4w(dm6g, "blur", Ez5E.g4k(null));
            h4l.s4w(dm6g, "focus", HZ6T.g4k(null))
        })
    }()
})();
(function () {
    var c4g = NEJ.P, be4i = c4g("nej.h"), a2x = c4g("nej.e"), cY6S = c4g("nej.x");
    a2x.gn7g = cY6S.gn7g = function (F4J, dZ6T) {
        be4i.beQ5V(F4J, a2x.t4x(F4J, "holder") || dZ6T || "js-placeholder");
        return this
    };
    cY6S.isChange = !0
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"), hL7E;
    if (!!N4R.SM1x) return;
    N4R.SM1x = NEJ.C();
    hL7E = N4R.SM1x.O4S(N4R.cH6B);
    hL7E.cx5C = function () {
        this.cD6x();
        this.EI5N = {tp: {nid: "js-nej-tp"}, ok: {nid: "js-nej-ok"}, er: {nid: "js-nej-er"}}
    };
    hL7E.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.gu7n = document.forms[e4i.form] || a2x.B4F(e4i.form);
        this.bX5c([[this.gu7n, "keypress", this.cwt6n.g4k(this)]]);
        this.qC0x = e4i.message || {};
        this.qC0x.pass = this.qC0x.pass || "&nbsp;";
        var fl7e = this.qd0x(this.gu7n, "focusMode", 1);
        if (!isNaN(fl7e)) {
            this.bSG6A = {mode: fl7e, clazz: e4i.focus}
        }
        this.Bo4s = e4i.holder;
        this.EI5N.tp.clazz = "js-mhd " + (e4i.tip || "js-tip");
        this.EI5N.ok.clazz = "js-mhd " + (e4i.pass || "js-pass");
        this.EI5N.er.clazz = "js-mhd " + (e4i.error || "js-error");
        this.bSD6x = e4i.invalid || "js-invalid";
        this.cwo6i(e4i);
        this.gB7u();
        if (!!this.Bp4t) this.Bp4t.focus()
    };
    hL7E.bD4H = function () {
        this.bG4K();
        delete this.qC0x;
        delete this.Bp4t;
        delete this.Fc5h;
        delete this.gu7n;
        delete this.bSB6v;
        delete this.SP1x
    };
    hL7E.qd0x = function (f4j, vY2x, u4y) {
        var D4H = a2x.t4x(f4j, vY2x);
        switch (u4y) {
            case 1:
                return parseInt(D4H);
            case 2:
                return (D4H || "").toLowerCase() == "true";
            case 3:
                return this.bgx5C(D4H)
        }
        return D4H
    };
    hL7E.Bt4x = function (D4H, u4y) {
        if (u4y == "date") return this.bgx5C(D4H);
        return parseInt(D4H)
    };
    hL7E.Xm2x = function () {
        var ku8m = /^button|submit|reset|image|hidden|file$/i;
        return function (f4j) {
            f4j = this.B4F(f4j) || f4j;
            var u4y = f4j.type;
            return !!f4j.name && !ku8m.test(f4j.type || "")
        }
    }();
    hL7E.cwk6e = function () {
        var ku8m = /^hidden$/i;
        return function (f4j) {
            if (this.Xm2x(f4j)) return !0;
            f4j = this.B4F(f4j) || f4j;
            var u4y = f4j.type || "";
            return ku8m.test(u4y)
        }
    }();
    hL7E.bgx5C = function () {
        var dh6b = /[-\/]/;
        var cwj6d = function (D4H) {
            if (!D4H) return "";
            D4H = D4H.split(dh6b);
            D4H.push(D4H.shift());
            return D4H.join("/")
        };
        return function (D4H) {
            if ((D4H || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cwj6d(D4H))
        }
    }();
    hL7E.cwt6n = function (d4h) {
        if (d4h.keyCode != 13) return;
        this.z4D("onenter", d4h)
    };
    hL7E.cwi6c = function (C4G, V4Z) {
        var rA1x = this.SP1x[V4Z], D4H = this.qd0x(C4G, V4Z);
        if (!D4H || !rA1x) return;
        this.Xk2x(C4G, rA1x);
        this.bho5t(C4G, V4Z, D4H)
    };
    hL7E.cwb6V = function (C4G, V4Z) {
        try {
            var bSx6r = this.qd0x(C4G, V4Z);
            if (!bSx6r) return;
            var D4H = new RegExp(bSx6r);
            this.bho5t(C4G, V4Z, D4H);
            this.Xk2x(C4G, this.SP1x[V4Z])
        } catch (e) {
        }
    };
    hL7E.cvY6S = function (C4G, V4Z) {
        var rA1x = this.SP1x[V4Z];
        if (!!rA1x && this.qd0x(C4G, V4Z, 2)) this.Xk2x(C4G, rA1x)
    };
    hL7E.bhE5J = function (C4G, V4Z, D4H) {
        D4H = parseInt(D4H);
        if (isNaN(D4H)) return;
        this.bho5t(C4G, V4Z, D4H);
        this.Xk2x(C4G, this.SP1x[V4Z])
    };
    hL7E.bSv6p = function (C4G, V4Z) {
        this.bhE5J(C4G, V4Z, this.qd0x(C4G, V4Z))
    };
    hL7E.bSt6n = function (C4G, V4Z) {
        this.bhE5J(C4G, V4Z, a2x.gh7a(C4G, V4Z))
    };
    hL7E.bSs6m = function (C4G, V4Z, u4y) {
        var D4H = this.Bt4x(this.qd0x(C4G, V4Z), this.qd0x(C4G, "type"));
        this.bhE5J(C4G, V4Z, D4H)
    };
    hL7E.cvT6N = function () {
        var gK7D = /^input|textarea$/i;
        var HZ6T = function (d4h) {
            this.qh0x(h4l.W4a(d4h))
        };
        var Ez5E = function (d4h) {
            var f4j = h4l.W4a(d4h);
            if (!this.qd0x(f4j, "ignore", 2)) {
                this.bSr6l(f4j)
            }
        };
        return function (f4j) {
            if (this.qd0x(f4j, "autoFocus", 2)) this.Bp4t = f4j;
            var ql0x = a2x.gh7a(f4j, "placeholder");
            if (!!ql0x && ql0x != "null") a2x.gn7g(f4j, this.Bo4s);
            if (!!this.bSG6A && gK7D.test(f4j.tagName)) a2x.mP9G(f4j, this.bSG6A);
            var C4G = a2x.lv9m(f4j);
            this.cvY6S(C4G, "required");
            this.cwi6c(C4G, "type");
            this.cwb6V(C4G, "pattern");
            this.bSt6n(C4G, "maxlength");
            this.bSt6n(C4G, "minlength");
            this.bSv6p(C4G, "maxLength");
            this.bSv6p(C4G, "minLength");
            this.bSs6m(C4G, "min");
            this.bSs6m(C4G, "max");
            var V4Z = f4j.name;
            this.qC0x[V4Z + "-tip"] = this.qd0x(f4j, "tip");
            this.qC0x[V4Z + "-error"] = this.qd0x(f4j, "message");
            this.qh0x(f4j);
            var by4C = this.Fc5h[C4G], j4n = (by4C || bb4f).data || bb4f, Tf1x = this.qd0x(f4j, "counter", 2);
            if (Tf1x && (j4n.maxlength || j4n.maxLength)) {
                a2x.cwD6x(C4G, {nid: this.EI5N.tp.nid, clazz: "js-counter"})
            }
            if (!!by4C && gK7D.test(f4j.tagName)) {
                this.bX5c([[f4j, "focus", HZ6T.g4k(this)], [f4j, "blur", Ez5E.g4k(this)]])
            } else if (this.qd0x(f4j, "focus", 2)) {
                this.bX5c([[f4j, "focus", HZ6T.g4k(this)]])
            }
        }
    }();
    hL7E.cwo6i = function () {
        var Gk5p = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.bgx5C(v))
            }
        };
        var cvO6I = {
            required: function (f4j) {
                var u4y = f4j.type, cvN6H = !f4j.value, cvM6G = (u4y == "checkbox" || u4y == "radio") && !f4j.checked;
                if (cvM6G || cvN6H) return -1
            }, type: function (f4j, e4i) {
                var dh6b = this.bSB6v[e4i.type], eQ6K = f4j.value.trim(), cvG6A = !!dh6b.test && !dh6b.test(eQ6K),
                    cvC6w = k4o.gG7z(dh6b) && !dh6b.call(this, eQ6K);
                if (cvG6A || cvC6w) return -2
            }, pattern: function (f4j, e4i) {
                if (!e4i.pattern.test(f4j.value)) return -3
            }, maxlength: function (f4j, e4i) {
                if (f4j.value.length > e4i.maxlength) return -4
            }, minlength: function (f4j, e4i) {
                if (f4j.value.length < e4i.minlength) return -5
            }, maxLength: function (f4j, e4i) {
                if (k4o.fy7r(f4j.value) > e4i.maxLength) return -4
            }, minLength: function (f4j, e4i) {
                if (k4o.fy7r(f4j.value) < e4i.minLength) return -5
            }, min: function (f4j, e4i) {
                var gR7K = this.Bt4x(f4j.value, e4i.type);
                if (isNaN(gR7K) || gR7K < e4i.min) return -6
            }, max: function (f4j, e4i) {
                var gR7K = this.Bt4x(f4j.value, e4i.type);
                if (isNaN(gR7K) || gR7K > e4i.max) return -7
            }
        };
        return function (e4i) {
            this.bSB6v = NEJ.X(NEJ.X({}, Gk5p), e4i.type);
            this.SP1x = NEJ.X(NEJ.X({}, cvO6I), e4i.attr)
        }
    }();
    hL7E.Xk2x = function (C4G, yV3x) {
        if (!k4o.gG7z(yV3x)) return;
        var by4C = this.Fc5h[C4G];
        if (!by4C || !by4C.func) {
            by4C = by4C || {};
            by4C.func = [];
            this.Fc5h[C4G] = by4C
        }
        by4C.func.push(yV3x)
    };
    hL7E.bho5t = function (C4G, V4Z, D4H) {
        if (!V4Z) return;
        var by4C = this.Fc5h[C4G];
        if (!by4C || !by4C.data) {
            by4C = by4C || {};
            by4C.data = {};
            this.Fc5h[C4G] = by4C
        }
        by4C.data[V4Z] = D4H
    };
    hL7E.bSr6l = function (f4j) {
        f4j = this.B4F(f4j) || f4j;
        var by4C = this.Fc5h[a2x.lv9m(f4j)];
        if (!f4j || !by4C || !this.Xm2x(f4j)) return !0;
        var o4s;
        k4o.eC6w(by4C.func, function (et6n) {
            o4s = et6n.call(this, f4j, by4C.data);
            return o4s != null
        }, this);
        if (o4s == null) {
            var d4h = {target: f4j, form: this.gu7n};
            this.z4D("oncheck", d4h);
            o4s = d4h.value
        }
        var d4h = {target: f4j, form: this.gu7n};
        if (o4s != null) {
            d4h.code = o4s;
            this.z4D("oninvalid", d4h);
            if (!d4h.stopped) {
                this.cvA6u(f4j, d4h.value || this.qC0x[f4j.name + o4s])
            }
        } else {
            this.z4D("onvalid", d4h);
            if (!d4h.stopped) this.cvz6t(f4j, d4h.value)
        }
        return o4s == null
    };
    hL7E.yT3x = function () {
        var cvy6s = function (bdR4V, bdQ4U) {
            return bdR4V == bdQ4U ? "block" : "none"
        };
        var cvv6p = function (f4j, u4y, bH4L) {
            var ql0x = bSi6c.call(this, f4j, u4y);
            if (!ql0x && !!bH4L) ql0x = a2x.Iv6p(f4j, this.EI5N[u4y]);
            return ql0x
        };
        var bSi6c = function (f4j, u4y) {
            var ql0x;
            if (u4y == "tp") ql0x = a2x.B4F(f4j.name + "-tip");
            if (!ql0x) ql0x = a2x.H4L(f4j.parentNode, this.EI5N[u4y].nid)[0];
            return ql0x
        };
        return function (f4j, bH4L, u4y) {
            f4j = this.B4F(f4j) || f4j;
            if (!f4j) return;
            u4y == "er" ? a2x.y4C(f4j, this.bSD6x) : a2x.x4B(f4j, this.bSD6x);
            var ql0x = cvv6p.call(this, f4j, u4y, bH4L);
            if (!!ql0x && !!bH4L) ql0x.innerHTML = bH4L;
            k4o.eC6w(this.EI5N, function (D4H, J4N) {
                a2x.ba4e(bSi6c.call(this, f4j, J4N), "display", cvy6s(u4y, J4N))
            }, this)
        }
    }();
    hL7E.qh0x = function (f4j, bH4L) {
        this.yT3x(f4j, bH4L || this.qC0x[f4j.name + "-tip"], "tp");
        return this
    };
    hL7E.cvz6t = function (f4j, bH4L) {
        this.yT3x(f4j, bH4L || this.qC0x[f4j.name + "-pass"] || this.qC0x.pass, "ok");
        return this
    };
    hL7E.cvA6u = function (f4j, bH4L) {
        this.yT3x(f4j, bH4L || this.qC0x[f4j.name + "-error"], "er");
        return this
    };
    hL7E.iO8G = function () {
        var gK7D = /^(?:radio|checkbox)$/i;
        var cvs6m = function (D4H) {
            return D4H == null ? "" : D4H
        };
        var bSg6a = function (D4H, f4j) {
            if (gK7D.test(f4j.type || "")) {
                f4j.checked = D4H == f4j.value
            } else {
                f4j.value = cvs6m(D4H)
            }
        };
        return function (V4Z, D4H) {
            var f4j = this.B4F(V4Z);
            if (!f4j) return this;
            if (f4j.tagName == "SELECT" || !f4j.length) {
                bSg6a(D4H, f4j)
            } else {
                k4o.bd4h(f4j, bSg6a.g4k(null, D4H))
            }
            return this
        }
    }();
    hL7E.B4F = function (V4Z) {
        return this.gu7n.elements[V4Z]
    };
    hL7E.cDr8j = function () {
        return this.gu7n
    };
    hL7E.WX2x = function () {
        var gK7D = /^radio|checkbox$/i, ku8m = /^number|date$/;
        var cvo6i = function (bz4D, f4j) {
            var V4Z = f4j.name, D4H = f4j.value, by4C = bz4D[V4Z], u4y = this.qd0x(f4j, "type");
            if (ku8m.test(u4y)) D4H = this.Bt4x(D4H, u4y);
            if (gK7D.test(f4j.type) && !f4j.checked) {
                D4H = this.qd0x(f4j, "value");
                if (!D4H) return
            }
            if (!!by4C) {
                if (!k4o.eJ6D(by4C)) {
                    by4C = [by4C];
                    bz4D[V4Z] = by4C
                }
                by4C.push(D4H)
            } else {
                bz4D[V4Z] = D4H
            }
        };
        return function () {
            var o4s = {};
            k4o.bd4h(this.gu7n.elements, function (f4j) {
                if (this.cwk6e(f4j)) cvo6i.call(this, o4s, f4j)
            }, this);
            return o4s
        }
    }();
    hL7E.JM6G = function () {
        var cvl6f = function (f4j) {
            if (this.Xm2x(f4j)) this.qh0x(f4j)
        };
        return function () {
            this.gu7n.reset();
            k4o.bd4h(this.gu7n.elements, cvl6f, this);
            return this
        }
    }();
    hL7E.cDt8l = function () {
        this.gu7n.submit();
        return this
    };
    hL7E.gB7u = function () {
        var cvj6d = function (f4j) {
            if (this.Xm2x(f4j)) this.cvT6N(f4j)
        };
        return function () {
            this.Fc5h = {};
            k4o.bd4h(this.gu7n.elements, cvj6d, this);
            return this
        }
    }();
    hL7E.cvi6c = function (f4j) {
        f4j = this.B4F(f4j) || f4j;
        if (!!f4j) return this.bSr6l(f4j);
        var o4s = !0;
        k4o.bd4h(this.gu7n.elements, function (f4j) {
            var ll9c = this.cvi6c(f4j);
            o4s = o4s && ll9c
        }, this);
        return o4s
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = c4g("nej.e"), h4l = c4g("nej.v"), I4M = c4g("nej.ut"), k4o = c4g("nej.u"),
        l4p = c4g("nm.x"), m4q = c4g("nm.l"), b3x, K4O;
    m4q.WS2x = NEJ.C();
    b3x = m4q.WS2x.O4S(m4q.en6h);
    K4O = m4q.WS2x.cs5x;
    b3x.bW5b = function () {
        this.cg5l();
        h4l.s4w(this.n4r, "click", this.cM6G.g4k(this));
        h4l.s4w(document, "mousewheel", this.BF4J.g4k(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.BF4J.g4k(this))
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        if (e4i.jst) {
            this.n4r.innerHTML = a2x.bZ5e(e4i.jst, e4i.data)
        } else if (e4i.ntp) {
            this.n4r.appendChild(a2x.dy6s(e4i.ntp))
        } else if (e4i.txt) {
            this.n4r.innerHTML = a2x.iI8A(e4i.txt)
        } else if (e4i.html) {
            this.n4r.innerHTML = e4i.html
        }
        var Tu1x = this.n4r.getElementsByTagName("form");
        if (Tu1x.length) {
            this.gu7n = I4M.SM1x.A4E({form: Tu1x[0]})
        }
        this.Dy4C = a2x.dk6e(this.n4r)[0]
    };
    b3x.bD4H = function () {
        this.z4D("ondestroy");
        this.bG4K();
        this.n4r.innerHTML = "";
        delete this.Dy4C
    };
    b3x.cM6G = function (d4h) {
        var f4j = h4l.W4a(d4h, "d:action"), j4n = this.gu7n ? this.gu7n.WX2x() : null,
            d4h = {action: a2x.t4x(f4j, "action")};
        if (j4n) d4h.data = j4n;
        if (d4h.action) {
            this.z4D("onaction", d4h);
            if (d4h.stopped) return;
            this.bu4y()
        }
    };
    b3x.BF4J = function (d4h) {
        if (!this.Dy4C) return;
        h4l.bh4l(d4h);
        var do6i = d4h.wheelDelta || -d4h.detail;
        this.Dy4C.scrollTop -= do6i
    };
    l4p.kk8c = function (e4i) {
        e4i.destroyable = e4i.destroyable || true;
        e4i.title = e4i.title || "提示";
        e4i.draggable = true;
        e4i.parent = e4i.parent || document.body;
        e4i.mask = e4i.mask || true;
        var AZ4d = m4q.WS2x.A4E(e4i);
        AZ4d.L4P();
        return AZ4d
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bSb6V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ty1x = {}, DD4H = {};
    for (var i = 0, l = bSb6V.length, c; i < l; i++) {
        c = bSb6V.charAt(i);
        Ty1x[i] = c;
        DD4H[c] = i
    }
    var cvg6a = function (iv8n) {
        var r4v = 0, c, o4s = [];
        while (r4v < iv8n.length) {
            c = iv8n[r4v];
            if (c < 128) {
                o4s.push(String.fromCharCode(c));
                r4v++
            } else if (c > 191 && c < 224) {
                o4s.push(String.fromCharCode((c & 31) << 6 | iv8n[r4v + 1] & 63));
                r4v += 2
            } else {
                o4s.push(String.fromCharCode((c & 15) << 12 | (iv8n[r4v + 1] & 63) << 6 | iv8n[r4v + 2] & 63));
                r4v += 3
            }
        }
        return o4s.join("")
    };
    var cvf6Z = function () {
        var hu7n = /\r\n/g;
        return function (j4n) {
            j4n = j4n.replace(hu7n, "\n");
            var o4s = [], mz9q = String.fromCharCode(237);
            if (mz9q.charCodeAt(0) < 0) for (var i = 0, l = j4n.length, c; i < l; i++) {
                c = j4n.charCodeAt(i);
                c > 0 ? o4s.push(c) : o4s.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0, l = j4n.length, c; i < l; i++) {
                c = j4n.charCodeAt(i);
                if (c < 128) o4s.push(c); else if (c > 127 && c < 2048) o4s.push(c >> 6 | 192, c & 63 | 128); else o4s.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return o4s
        }
    }();
    var JS6M = function (iv8n) {
        var r4v = 0, o4s = [], fl7e = iv8n.length % 3;
        if (fl7e == 1) iv8n.push(0, 0);
        if (fl7e == 2) iv8n.push(0);
        while (r4v < iv8n.length) {
            o4s.push(Ty1x[iv8n[r4v] >> 2], Ty1x[(iv8n[r4v] & 3) << 4 | iv8n[r4v + 1] >> 4], Ty1x[(iv8n[r4v + 1] & 15) << 2 | iv8n[r4v + 2] >> 6], Ty1x[iv8n[r4v + 2] & 63]);
            r4v += 3
        }
        if (fl7e == 1) o4s[o4s.length - 1] = o4s[o4s.length - 2] = "=";
        if (fl7e == 2) o4s[o4s.length - 1] = "=";
        return o4s.join("")
    };
    var bRZ6T = function () {
        var rt1x = /\n|\r|=/g;
        return function (j4n) {
            var r4v = 0, o4s = [];
            j4n = j4n.replace(rt1x, "");
            for (var i = 0, l = j4n.length; i < l; i += 4) o4s.push(DD4H[j4n.charAt(i)] << 2 | DD4H[j4n.charAt(i + 1)] >> 4, (DD4H[j4n.charAt(i + 1)] & 15) << 4 | DD4H[j4n.charAt(i + 2)] >> 2, (DD4H[j4n.charAt(i + 2)] & 3) << 6 | DD4H[j4n.charAt(i + 3)]);
            var bq4u = o4s.length, fl7e = j4n.length % 4;
            if (fl7e == 2) o4s = o4s.slice(0, bq4u - 2);
            if (fl7e == 3) o4s = o4s.slice(0, bq4u - 1);
            return o4s
        }
    }();
    p.cDv8n = function (j4n) {
        return cvg6a(bRZ6T(j4n))
    };
    p.cvb6V = function (j4n) {
        var iv8n = bRZ6T(j4n), dr6l = iv8n.length, it8l;
        var r4v = 0;
        while (it8l = iv8n[r4v]) {
            if (it8l > 128) {
                iv8n[r4v] = it8l - 256
            }
            r4v++
        }
        return iv8n
    };
    p.cuZ5e = function (j4n) {
        try {
            return window.btoa(j4n)
        } catch (ex) {
            return JS6M(cvf6Z(j4n))
        }
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, h4l = c4g("nej.v"), a2x = c4g("nej.e"), v4z = c4g("nej.j"), N4R = c4g("nej.p"),
        k4o = c4g("nej.u"), m4q = c4g("nm.l"), w4A = c4g("nm.w"), bC4G = c4g("nej.ui"), q4u = c4g("nm.d"),
        l4p = c4g("nm.x"), b3x, K4O;
    var TYPE_MAP = {13: "playlist", 17: "program", 18: "song", 19: "album"};
    m4q.bRX6R = NEJ.C();
    b3x = m4q.bRX6R.O4S(m4q.en6h);
    b3x.ce5j = function () {
        this.cd5i = "m-download-layer"
    };
    b3x.bW5b = function () {
        this.cg5l();
        var i4m = a2x.H4L(this.n4r, "j-flag");
        this.bkT6N = i4m[0];
        this.bkV6P = i4m[1];
        this.bRW6Q = i4m[2];
        v4z.bn4r("/client/version/get", {type: "json", onload: this.cuV5a.g4k(this)});
        if (N4R.HP6J.mac) {
            a2x.x4B(this.bkT6N.parentNode, "f-hide");
            a2x.y4C(this.bkV6P.parentNode, "f-hide");
            a2x.y4C(this.bRW6Q, "f-hide")
        } else {
            a2x.y4C(this.bkT6N.parentNode, "f-hide");
            a2x.x4B(this.bkV6P.parentNode, "f-hide");
            a2x.x4B(this.bRW6Q, "f-hide")
        }
    };
    b3x.bl4p = function (e4i) {
        e4i.clazz = " m-layer-down";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "下载";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bm4q(e4i);
        this.bX5c([[this.n4r, "click", this.bT5Y.g4k(this)]]);
        this.ey6s = TYPE_MAP[e4i.type];
        this.gY7R = e4i.id
    };
    b3x.bD4H = function () {
        this.bG4K()
    };
    b3x.BH4L = function () {
        this.bu4y()
    };
    b3x.Ev5A = function (d4h) {
        this.z4D("onok", D4H);
        this.bu4y()
    };
    b3x.bT5Y = function (d4h) {
        var f4j = h4l.W4a(d4h, "d:action");
        switch (a2x.t4x(f4j, "action")) {
            case"download":
                this.bu4y();
                window.open(a2x.t4x(f4j, "src"));
                break;
            case"orpheus":
                this.bu4y();
                location.href = "orpheus://" + k4o.cuZ5e(JSON.stringify({
                    type: this.ey6s,
                    id: this.gY7R,
                    cmd: "download"
                }));
                break
        }
    };
    b3x.cuV5a = function (d4h) {
        if ((d4h || bb4f).code == 200) {
            this.Jn6h = d4h.data;
            this.bkT6N.innerText = "V" + this.Jn6h.mac;
            this.bkV6P.innerText = "V" + this.Jn6h.pc
        }
    };
    l4p.JU6O = function (e4i) {
        m4q.bRX6R.A4E(e4i).L4P()
    }
})();
(function () {
    var c4g = NEJ.P, l4p = c4g("nm.x");
    var FullscreenApi = {};
    var apiMap = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]];
    var specApi = apiMap[0];
    var browserApi;
    for (var i = 0; i < apiMap.length; i++) {
        if (apiMap[i][1] in document) {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi) {
        for (var i = 0; i < browserApi.length; i++) {
            FullscreenApi[specApi[i]] = browserApi[i]
        }
    }
    l4p.EA5F = FullscreenApi
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, k4o = c4g("nej.u"), q4u = c4g("nm.d"), bS4W = {};
    q4u.B4F = function (J4N) {
        return bS4W[J4N]
    };
    q4u.na9R = function (J4N, bg4k) {
        bS4W[J4N] = bg4k
    };
    q4u.fe7X = function (j4n) {
        k4o.eC6w(j4n, function (p4t, J4N) {
            var bg4k = bS4W[J4N] || {};
            NEJ.X(bg4k, p4t);
            bS4W[J4N] = bg4k
        })
    }
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, be4i = c4g("nej.h");
    be4i.Wx2x = function (J4N) {
        return localStorage.getItem(J4N)
    };
    be4i.Ww2x = function (J4N, D4H) {
        localStorage.setItem(J4N, D4H)
    };
    be4i.bmk7d = function (J4N) {
        localStorage.removeItem(J4N)
    };
    be4i.bml7e = function () {
        localStorage.clear()
    };
    be4i.cuU5Z = function () {
        var o4s = [];
        for (var i = 0, l = localStorage.length; i < l; i++) o4s.push(localStorage.key(i));
        return o4s
    };
    be4i.bmz7s = function () {
        (document.onstorageready || bs4w)()
    };
    be4i.bmQ7J = function () {
        return !0
    }
})();
(function () {
    var c4g = NEJ.P, N4R = c4g("nej.p"), it8l = c4g("nej.c"), be4i = c4g("nej.h"), tu1x;
    if (N4R.nj9a.trident || !!window.localStorage) return;
    var cuT5Y = function () {
        var rz1x, eg6a;
        var bki6c = function () {
            rz1x = document.createElement("div");
            NEJ.X(rz1x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", rz1x);
            rz1x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + it8l.B4F("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Re0x = function () {
            eg6a = window.clearTimeout(eg6a);
            var hT8L = rz1x.getElementsByTagName("object")[0];
            if (!!hT8L.initStorage) {
                delete rz1x;
                tu1x = hT8L;
                tu1x.initStorage("nej-storage");
                (document.onstorageready || bs4w)();
                return
            }
            eg6a = window.setTimeout(Re0x, 500)
        };
        return function () {
            if (!!tu1x) return;
            bki6c();
            Re0x()
        }
    }();
    be4i.Wx2x = be4i.Wx2x.eB6v(function (d4h) {
        d4h.stopped = !0;
        if (!tu1x) return;
        d4h.value = tu1x.getItem(d4h.args[0])
    });
    be4i.Ww2x = be4i.Ww2x.eB6v(function (d4h) {
        d4h.stopped = !0;
        if (!tu1x) return;
        var bf4j = d4h.args;
        tu1x.setItem(bf4j[0], bf4j[1])
    });
    be4i.bmk7d = be4i.bmk7d.eB6v(function (d4h) {
        d4h.stopped = !0;
        if (!tu1x) return;
        tu1x.removeItem(d4h.args[0])
    });
    be4i.bml7e = be4i.bml7e.eB6v(function (d4h) {
        d4h.stopped = !0;
        if (!!tu1x) tu1x.clear()
    });
    be4i.bmz7s = be4i.bmz7s.eB6v(function (d4h) {
        d4h.stopped = !0;
        cuT5Y()
    });
    be4i.bmQ7J = be4i.bmQ7J.eB6v(function (d4h) {
        d4h.stopped = !0;
        d4h.value = !!tu1x
    })
})();
(function () {
    var c4g = NEJ.P, k4o = c4g("nej.u"), h4l = c4g("nej.v"), be4i = c4g("nej.h"), v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"), R4V = {};
    v4z.uW2x = function (J4N, D4H) {
        var bRV6P = JSON.stringify(D4H);
        try {
            be4i.Ww2x(J4N, bRV6P)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bRV6P != be4i.Wx2x(J4N)) R4V[J4N] = D4H;
        return this
    };
    v4z.sw1x = function (J4N) {
        var j4n = JSON.parse(be4i.Wx2x(J4N) || "null");
        return j4n == null ? R4V[J4N] : j4n
    };
    v4z.bRU6O = function (J4N, D4H) {
        var j4n = v4z.sw1x(J4N);
        if (j4n == null) {
            j4n = D4H;
            v4z.uW2x(J4N, j4n)
        }
        return j4n
    };
    v4z.JV6P = function (J4N) {
        delete R4V[J4N];
        be4i.bmk7d(J4N);
        return this
    };
    v4z.cDw8o = function () {
        var bnv7o = function (p4t, J4N, bz4D) {
            delete bz4D[J4N]
        };
        return function () {
            k4o.eC6w(R4V, bnv7o);
            be4i.bml7e();
            return this
        }
    }();
    v4z.cDx8p = function (o4s) {
        o4s = o4s || {};
        k4o.bd4h(be4i.cuU5Z(), function (J4N) {
            o4s[J4N] = v4z.sw1x(J4N)
        });
        return o4s
    };
    I4M.fJ7C.A4E({
        element: document, event: "storageready", oneventadd: function () {
            if (be4i.bmQ7J()) {
                document.onstorageready()
            }
        }
    });
    var cuL5Q = function () {
        var cuH5M = function (D4H, J4N, bz4D) {
            be4i.Ww2x(J4N, JSON.stringify(D4H));
            delete bz4D[J4N]
        };
        return function () {
            k4o.eC6w(R4V, cuH5M)
        }
    }();
    h4l.s4w(document, "storageready", cuL5Q);
    be4i.bmz7s()
})();
(function () {
    var c4g = NEJ.P, h4l = c4g("nej.v"), k4o = c4g("nej.u"), N4R = c4g("nej.ut"), JW6Q;
    if (!!N4R.bnM7F) return;
    N4R.bnM7F = NEJ.C();
    JW6Q = N4R.bnM7F.O4S(N4R.cH6B);
    JW6Q.cx5C = function () {
        var gJ7C = +(new Date), mR9I = "dat-" + gJ7C;
        return function () {
            this.cD6x();
            var R4V = this.constructor[mR9I];
            if (!R4V) {
                R4V = {};
                this.constructor[mR9I] = R4V
            }
            this.S4W = R4V
        }
    }();
    JW6Q.B4F = function (J4N) {
        return this.S4W[J4N]
    };
    JW6Q.na9R = function (J4N, D4H) {
        var nq9h = this.S4W[J4N];
        this.S4W[J4N] = D4H;
        h4l.z4D(localCache, "cachechange", {key: J4N, type: "set", oldValue: nq9h, newValue: D4H});
        return this
    };
    JW6Q.cJ6D = function (J4N) {
        var nq9h = this.S4W[J4N];
        k4o.bbo4s(this.S4W, J4N);
        h4l.z4D(localCache, "cachechange", {key: J4N, type: "delete", oldValue: nq9h, newValue: undefined});
        return nq9h
    };
    JW6Q.Wt2x = function (FT5Y) {
        return NEJ.Q(this.S4W, FT5Y)
    };
    window.localCache = N4R.bnM7F.A4E();
    N4R.fJ7C.A4E({element: localCache, event: "cachechange"})
})();
(function () {
    var c4g = NEJ.P, fx7q = NEJ.R, bs4w = NEJ.F, k4o = c4g("nej.u"), v4z = c4g("nej.j"), N4R = c4g("nej.ut"),
        mR9I = "dat-" + +(new Date), ny9p;
    if (!!N4R.bof7Y) return;
    N4R.bof7Y = NEJ.C();
    ny9p = N4R.bof7Y.O4S(N4R.cH6B);
    ny9p.cx5C = function () {
        this.cD6x();
        this.S4W = this.constructor[mR9I];
        if (!this.S4W) {
            this.S4W = {};
            this.S4W[mR9I + "-l"] = {};
            this.constructor[mR9I] = this.S4W
        }
    };
    ny9p.sh1x = function (J4N) {
        return this.S4W[J4N]
    };
    ny9p.qb0x = function (J4N, D4H) {
        this.S4W[J4N] = D4H
    };
    ny9p.ls9j = function (J4N, kg8Y) {
        var j4n = this.sh1x(J4N);
        if (j4n == null) {
            j4n = kg8Y;
            this.qb0x(J4N, j4n)
        }
        return j4n
    };
    ny9p.cuF5K = function (J4N) {
        if (J4N != null) {
            delete this.S4W[J4N];
            return
        }
        k4o.eC6w(this.S4W, function (p4t, J4N) {
            if (J4N == mR9I + "-l") return;
            this.cuF5K(J4N)
        }, this)
    };
    ny9p.cDz8r = function (J4N) {
        if (!!v4z.JV6P) return v4z.JV6P(J4N)
    };
    ny9p.cuB5G = function (J4N) {
        if (!!v4z.sw1x) return v4z.sw1x(J4N)
    };
    ny9p.cuA5F = function (J4N, D4H) {
        if (!!v4z.uW2x) v4z.uW2x(J4N, D4H)
    };
    ny9p.FE5J = function (J4N, kg8Y) {
        var j4n = this.Ur1x(J4N);
        if (j4n == null) {
            j4n = kg8Y;
            this.wr2x(J4N, j4n)
        }
        return j4n
    };
    ny9p.Ur1x = function (J4N) {
        var j4n = this.sh1x(J4N);
        if (j4n != null) return j4n;
        j4n = this.cuB5G(J4N);
        if (j4n != null) this.qb0x(J4N, j4n);
        return j4n
    };
    ny9p.wr2x = function (J4N, D4H) {
        this.cuA5F(J4N, D4H);
        this.qb0x(J4N, D4H)
    };
    ny9p.bRM6G = function (J4N) {
        if (J4N != null) {
            delete this.S4W[J4N];
            if (!!v4z.JV6P) v4z.JV6P(J4N);
            return
        }
        k4o.eC6w(this.S4W, function (p4t, J4N) {
            if (J4N == mR9I + "-l") return;
            this.bRM6G(J4N)
        }, this)
    };
    ny9p.cDA8s = function () {
        this.bRM6G();
        return this
    };
    ny9p.cDD8v = function (J4N) {
        var j4n = this.S4W[mR9I + "-l"];
        delete j4n[J4N]
    };
    ny9p.bpG8y = function (J4N) {
        var j4n = this.S4W[mR9I + "-l"], bf4j = fx7q.slice.call(arguments, 1);
        k4o.bd4h(j4n[J4N], function (cK6E) {
            try {
                cK6E.apply(null, bf4j)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j4n[J4N]
    };
    ny9p.bpP8H = function (J4N, cK6E) {
        cK6E = cK6E || bs4w;
        var i4m = this.S4W[mR9I + "-l"][J4N];
        if (!i4m) {
            i4m = [cK6E];
            this.S4W[mR9I + "-l"][J4N] = i4m;
            return !1
        }
        i4m.push(cK6E);
        return !0
    };
    ny9p.cuu5z = function (i4m, bi4m, gc7V) {
        if (!i4m) return !1;
        bi4m = parseInt(bi4m) || 0;
        gc7V = parseInt(gc7V) || 0;
        if (!gc7V) {
            if (!i4m.loaded) return !1;
            gc7V = i4m.length
        }
        if (!!i4m.loaded) gc7V = Math.min(gc7V, i4m.length - bi4m);
        for (var i = 0; i < gc7V; i++) if (!i4m[bi4m + i]) return !1;
        return !0
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, k4o = c4g("nej.u"), N4R = c4g("nej.ut"), b3x, K4O;
    if (!!N4R.Uv1x) return;
    N4R.Uv1x = NEJ.C();
    b3x = N4R.Uv1x.O4S(N4R.bof7Y);
    K4O = N4R.Uv1x.cs5x;
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.wl2x = e4i.key || "id";
        this.bk4o = e4i.data || bb4f;
        this.cus5x = !!e4i.autogc;
        this.cuq5v(e4i.id)
    };
    b3x.bD4H = function () {
        this.bG4K();
        if (!!this.ed6X) {
            this.bRJ6D()
        }
    };
    b3x.cuq5v = function (C4G) {
        var R4V;
        if (!!C4G) {
            R4V = this.S4W[C4G];
            if (!R4V) {
                R4V = {};
                this.S4W[C4G] = R4V
            }
        }
        R4V = R4V || this.S4W;
        R4V.hash = R4V.hash || {};
        this.Uz1x = R4V
    };
    b3x.bRJ6D = function () {
        this.ed6X = window.clearTimeout(this.ed6X);
        var bz4D = {};
        k4o.eC6w(this.Uz1x, function (i4m, J4N) {
            if (J4N == "hash") return;
            if (!k4o.eJ6D(i4m)) return;
            k4o.bd4h(i4m, function (p4t) {
                if (!p4t) return;
                bz4D[p4t[this.wl2x]] = !0
            }, this)
        }, this);
        k4o.eC6w(this.Wa1x(), function (p4t, C4G, dO6I) {
            if (!bz4D[C4G]) {
                delete dO6I[C4G]
            }
        })
    };
    b3x.cuo5t = function () {
        if (!!this.ed6X) {
            this.ed6X = window.clearTimeout(this.ed6X)
        }
        this.ed6X = window.setTimeout(this.bRJ6D.g4k(this), 150)
    };
    b3x.BV4Z = function (p4t, VZ1x) {
        p4t = this.bRI6C(p4t, VZ1x) || p4t;
        if (!p4t) return null;
        var J4N = p4t[this.wl2x];
        if (J4N != null) {
            var id8V = this.Wa1x()[J4N];
            if (!!id8V) p4t = NEJ.X(id8V, p4t);
            this.Wa1x()[J4N] = p4t
        }
        delete p4t.bRF6z;
        return p4t
    };
    b3x.bRI6C = bs4w;
    b3x.brp8h = function (J4N, p4t) {
        if (!p4t) return;
        if (!k4o.eJ6D(p4t)) {
            var i4m = this.hD7w(J4N), p4t = this.BV4Z(p4t, J4N);
            if (!!p4t) i4m.unshift(p4t);
            return
        }
        k4o.no9f(p4t, this.brp8h.g4k(this, J4N))
    };
    b3x.UD1x = function (J4N, cy5D) {
        var i4m = this.hD7w(J4N);
        i4m.length = Math.max(i4m.length, cy5D);
        this.brS8K(J4N);
        return this
    };
    b3x.kq8i = function (J4N) {
        return this.hD7w(J4N).length
    };
    b3x.brS8K = function (J4N, pg0x) {
        this.hD7w(J4N).loaded = pg0x != !1;
        return this
    };
    b3x.VW1x = function (J4N) {
        return !!this.hD7w(J4N).loaded
    };
    b3x.uu1x = function (J4N, i4m) {
        this.ut1x(J4N);
        this.bsL8D({key: J4N, offset: 0, limit: i4m.length + 1}, {list: i4m, total: i4m.length})
    };
    b3x.hD7w = function () {
        var Hc6W = function (J4N) {
            return (J4N || "") + (!J4N ? "" : "-") + "list"
        };
        return function (J4N) {
            var J4N = Hc6W(J4N), i4m = this.Uz1x[J4N];
            if (!i4m) {
                i4m = [];
                this.Uz1x[J4N] = i4m
            }
            return i4m
        }
    }();
    b3x.Wa1x = function () {
        var dO6I = this.Uz1x.hash;
        if (!dO6I) {
            dO6I = {};
            this.Uz1x.hash = dO6I
        }
        return dO6I
    };
    b3x.bsW8O = function () {
        var Hc6W = function (e4i) {
            return "r-" + e4i.key
        };
        return function (e4i) {
            var iQ8I = NEJ.X({}, e4i), nX9O = Hc6W(iQ8I);
            if (!this.bpP8H(nX9O, this.z4D.g4k(this))) {
                iQ8I.rkey = nX9O;
                iQ8I.onload = this.cuh5m.g4k(this, iQ8I);
                this.z4D("dopullrefresh", iQ8I)
            }
            return this
        }
    }();
    b3x.cuh5m = function (e4i, i4m) {
        this.brp8h(e4i.key, i4m);
        this.bpG8y(e4i.rkey, "onpullrefresh", e4i)
    };
    b3x.lK9B = function () {
        var Hc6W = function (e4i) {
            return "r-" + e4i.key + "-" + e4i.offset + "-" + e4i.limit
        };
        return function (e4i) {
            e4i = e4i || bb4f;
            var iQ8I = {
                key: "" + e4i.key || "",
                ext: e4i.ext || null,
                data: e4i.data || null,
                offset: parseInt(e4i.offset) || 0,
                limit: parseInt(e4i.limit) || 0
            }, i4m = this.hD7w(iQ8I.key);
            if (this.cuu5z(i4m, iQ8I.offset, iQ8I.limit)) {
                this.z4D("onlistload", iQ8I);
                return this
            }
            var nX9O = Hc6W(iQ8I);
            if (!this.bpP8H(nX9O, this.z4D.g4k(this))) {
                iQ8I.rkey = nX9O;
                iQ8I.onload = this.bsL8D.g4k(this, iQ8I);
                this.z4D("doloadlist", iQ8I)
            }
            return this
        }
    }();
    b3x.bsL8D = function () {
        var GW6Q = function (p4t, r4v, i4m) {
            if (!!p4t) {
                return !0
            }
            i4m.splice(r4v, 1)
        };
        return function (e4i, o4s) {
            e4i = e4i || bb4f;
            var J4N = e4i.key, bi4m = e4i.offset, bRE6y = this.hD7w(J4N);
            var i4m = o4s || [];
            if (!k4o.eJ6D(i4m)) {
                i4m = o4s.result || o4s.list || [];
                var cy5D = parseInt(o4s.total);
                if (!isNaN(cy5D) || cy5D > i4m.length) {
                    this.UD1x(J4N, cy5D)
                }
            }
            k4o.bd4h(i4m, function (p4t, r4v) {
                bRE6y[bi4m + r4v] = this.BV4Z(p4t, J4N)
            }, this);
            if (i4m.length < e4i.limit) {
                this.brS8K(J4N);
                k4o.no9f(bRE6y, GW6Q)
            }
            this.bpG8y(e4i.rkey, "onlistload", e4i)
        }
    }();
    b3x.ut1x = function () {
        var GW6Q = function (p4t, r4v, i4m) {
            i4m.splice(r4v, 1)
        };
        return function (J4N) {
            var i4m = this.hD7w(J4N);
            k4o.no9f(i4m, GW6Q);
            this.brS8K(J4N, !1);
            if (this.cus5x) {
                this.cuo5t()
            }
            return this
        }
    }();
    b3x.bRD6x = function (p4t, VZ1x) {
        return !p4t.bRF6z
    };
    b3x.eH6B = function (C4G) {
        return this.Wa1x()[C4G]
    };
    b3x.cDJ8B = function (C4G) {
        var p4t = this.eH6B(C4G);
        if (!!p4t) p4t.bRF6z = !0
    };
    b3x.VU1x = function () {
        var Hc6W = function (e4i) {
            return "r-" + e4i.key + "-" + e4i.id
        };
        return function (e4i) {
            e4i = e4i || bb4f;
            var C4G = e4i[this.wl2x], iQ8I = {id: C4G, ext: e4i.ext, data: e4i.data || {}, key: "" + e4i.key || ""};
            p4t = this.eH6B(C4G);
            iQ8I.data[this.wl2x] = C4G;
            if (!!p4t && this.bRD6x(p4t, iQ8I.key)) {
                this.z4D("onitemload", iQ8I);
                return this
            }
            var nX9O = Hc6W(iQ8I);
            if (!this.bpP8H(nX9O, this.z4D.g4k(this))) {
                iQ8I.rkey = nX9O;
                iQ8I.onload = this.cub5g.g4k(this, iQ8I);
                this.z4D("doloaditem", iQ8I)
            }
            return this
        }
    }();
    b3x.cub5g = function (e4i, p4t) {
        e4i = e4i || bb4f;
        this.BV4Z(p4t, e4i.key);
        this.bpG8y(e4i.rkey, "onitemload", e4i)
    };
    b3x.jw8o = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.zs3x.g4k(this, e4i);
        this.z4D("doadditem", e4i)
    };
    b3x.zs3x = function (e4i, p4t) {
        var J4N = e4i.key;
        p4t = this.BV4Z(p4t, J4N);
        if (!!p4t) {
            var eV6P = 0, i4m = this.hD7w(J4N);
            if (!e4i.push) {
                eV6P = -1;
                var bi4m = e4i.offset || 0;
                i4m.splice(bi4m, 0, p4t)
            } else if (i4m.loaded) {
                eV6P = 1;
                i4m.push(p4t)
            } else {
                i4m.length++
            }
        }
        var d4h = {key: J4N, flag: eV6P, data: p4t, action: "add", ext: e4i.ext};
        this.z4D("onitemadd", d4h);
        return d4h
    };
    b3x.Kc6W = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.buf9W.g4k(this, e4i);
        this.z4D("dodeleteitem", e4i)
    };
    b3x.buf9W = function (e4i, bRC6w) {
        var p4t, J4N = e4i.key;
        if (!!bRC6w) {
            p4t = this.eH6B(e4i.id) || null;
            var C4G = e4i.id, ctZ5e = this.wl2x, i4m = this.hD7w(J4N), r4v = k4o.di6c(i4m, function (id8V) {
                return !!id8V && id8V[ctZ5e] == C4G
            });
            if (r4v >= 0) i4m.splice(r4v, 1)
        }
        var d4h = {key: J4N, data: p4t, action: "delete", ext: e4i.ext};
        this.z4D("onitemdelete", d4h);
        return d4h
    };
    b3x.VR1x = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.ctY5d.g4k(this, e4i);
        this.z4D("doupdateitem", e4i)
    };
    b3x.ctY5d = function (e4i, p4t) {
        var J4N = e4i.key;
        if (!!p4t) p4t = this.BV4Z(p4t, J4N);
        var d4h = {key: J4N, data: p4t, action: "update", ext: e4i.ext};
        this.z4D("onitemupdate", d4h);
        return d4h
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, k4o = c4g("nej.u"), N4R = c4g("nej.ut"), b3x;
    if (!!N4R.buP9G) return;
    N4R.buP9G = NEJ.C();
    b3x = N4R.buP9G.O4S(N4R.Uv1x);
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.bjI6C({
            doloadlist: this.VQ1x.g4k(this),
            doloaditem: this.bve9V.g4k(this),
            doadditem: this.bRB6v.g4k(this),
            dodeleteitem: this.VP1x.g4k(this),
            doupdateitem: this.VO1x.g4k(this),
            dopullrefresh: this.bRA6u.g4k(this)
        })
    };
    b3x.VQ1x = bs4w;
    b3x.bRA6u = bs4w;
    b3x.bve9V = bs4w;
    b3x.bRB6v = bs4w;
    b3x.VP1x = bs4w;
    b3x.VO1x = bs4w
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, k4o = c4g("nej.u"), h4l = c4g("nej.v"), v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"), l4p = c4g("nm.x"), q4u = c4g("nm.d"), b3x, K4O;
    q4u.hG7z = NEJ.C();
    b3x = q4u.hG7z.O4S(I4M.buP9G);
    b3x.co5t = function () {
        var zg3x = location.protocol + "//" + location.host;
        var ctU5Z = function (br4v, j4n) {
            var bz4D = {conf: {}, data: {}, urls: []};
            k4o.bd4h(br4v, function (J4N, r4v, i4m) {
                var bg4k = q4u.B4F(J4N);
                if (!bg4k) return;
                var bvV9M = bRz6t(bg4k.url, j4n[J4N]);
                bz4D.urls.push(bvV9M);
                bz4D.conf[bvV9M] = bg4k;
                bz4D.data[bvV9M] = JSON.stringify(j4n[J4N] == null ? "" : j4n[J4N])
            });
            return bz4D
        };
        var bRz6t = function (Y4c, j4n) {
            return Y4c.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return j4n[$2] || $1
            })
        };
        var bRy6s = function (bg4k, e4i, d4h) {
            h4l.z4D(window, "requesterror", d4h);
            if (!!d4h.stopped) return;
            var Cb4f = bg4k.onerror || e4i.onerror;
            if (k4o.fG7z(Cb4f)) {
                this.z4D(Cb4f, d4h, e4i)
            } else {
                (Cb4f || bs4w).call(this, d4h, e4i)
            }
            var d4h = {result: d4h, option: e4i};
            this.z4D("onerror", d4h);
            if (!d4h.stopped) (bg4k.onmessage || bs4w).call(this, d4h.result.code, d4h.result)
        };
        var bRx6r = function (Q4U, bg4k, e4i) {
            var o4s = Q4U;
            if (k4o.gG7z(bg4k.format)) {
                o4s = bg4k.format.call(this, Q4U, e4i)
            }
            return o4s
        };
        var yB3x = function (Q4U, bg4k, e4i, uV2x) {
            if (k4o.gG7z(bg4k.beforeload)) {
                bg4k.beforeload.call(this, Q4U, e4i, bg4k)
            }
            if (Q4U && Q4U.code != null && Q4U.code != 200) {
                bRy6s.call(this, bg4k, e4i, {
                    key: e4i.key,
                    code: Q4U.code,
                    message: Q4U.message || "",
                    captchaId: Q4U.captchaId,
                    ext: Q4U
                });
                return
            }
            var o4s = Q4U;
            if (!uV2x) {
                o4s = bRx6r.call(this, Q4U, bg4k, e4i)
            } else if (k4o.gG7z(bg4k.format)) {
                var bwG9x = [];
                k4o.bd4h(uV2x.urls, function (Y4c) {
                    bwG9x.push(bRx6r.call(this, Q4U[Y4c], uV2x.conf[Y4c], e4i))
                }, this);
                bwG9x.push(e4i);
                o4s = bg4k.format.apply(this, bwG9x)
            }
            var ss1x = bg4k.onload || e4i.onload, bRv6p = bg4k.finaly || e4i.finaly || bs4w;
            if (k4o.fG7z(ss1x)) {
                bRv6p.call(this, this.z4D(ss1x, o4s), e4i)
            } else {
                bRv6p.call(this, (ss1x || bs4w).call(this, o4s), e4i)
            }
        };
        var AE3x = function (bg4k, e4i, cb5g) {
            bRy6s.call(this, bg4k, e4i, {key: e4i.key, code: cb5g.code || -1, message: cb5g.message || ""})
        };
        return function (bg4k, e4i) {
            if (k4o.fG7z(bg4k)) {
                bg4k = q4u.B4F(bg4k)
            }
            delete e4i.value;
            (bg4k.filter || bs4w).call(this, e4i, bg4k);
            var Q4U = e4i.value;
            if (!!Q4U) {
                yB3x.call(this, Q4U, bg4k, e4i);
                return
            }
            var Y4c, j4n = e4i.data || bb4f, yR3x = {
                cookie: !0,
                type: bg4k.rtype || "json",
                method: bg4k.type || "POST",
                onerror: AE3x.g4k(this, bg4k, e4i),
                noescape: bg4k.noescape
            };
            if (k4o.eJ6D(bg4k.url)) {
                var uV2x = ctU5Z(bg4k.url, j4n);
                Y4c = zg3x + "/api/batch";
                yR3x.data = k4o.cE6y(uV2x.data);
                yR3x.onload = yB3x.ew6q(this, bg4k, e4i, uV2x);
                yR3x.headers = {"batch-method": "POST"};
                delete uV2x.data
            } else {
                var kb8T = bg4k.url.indexOf(":") < 0 ? zg3x : "";
                Y4c = bRz6t(kb8T + bg4k.url, j4n);
                yR3x.data = k4o.cE6y(e4i.data);
                yR3x.onload = yB3x.ew6q(this, bg4k, e4i)
            }
            if (yR3x.method == "GET") yR3x.query = yR3x.data;
            return v4z.bn4r(Y4c, yR3x)
        }
    }();
    b3x.Ed5i = function () {
        var gK7D = /^get|list|pull$/i;
        return function (bRu6o, e4i) {
            var J4N = e4i.key, bg4k = q4u.B4F(J4N.split("-")[0] + "-" + bRu6o);
            if (gK7D.test(bRu6o) && J4N.indexOf("post-") < 0) bg4k.type = "GET";
            this.co5t(bg4k, e4i)
        }
    }();
    b3x.cDK8C = function (J4N, i4m) {
        var cy5D = i4m.length;
        this.bsL8D({key: J4N, offset: 0, limit: cy5D + 1}, {list: i4m, total: cy5D})
    };
    b3x.VQ1x = function (e4i) {
        this.Ed5i("list", e4i)
    };
    b3x.bve9V = function (e4i) {
        this.Ed5i("get", e4i)
    };
    b3x.bRA6u = function (e4i) {
        this.Ed5i("pull", e4i)
    };
    b3x.bRB6v = function (e4i) {
        this.Ed5i("add", e4i)
    };
    b3x.VP1x = function (e4i) {
        this.Ed5i("del", e4i)
    };
    b3x.VO1x = function (e4i) {
        this.Ed5i("update", e4i)
    };
    b3x.ctF5K = function (p4t) {
        this.BV4Z(p4t)
    };
    I4M.fJ7C.A4E({element: window, event: "requesterror"})
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, h4l = c4g("nej.v"), I4M = c4g("nej.ut"), q4u = c4g("nm.d"), bfp5u = {},
        b3x, K4O;
    var ui1x = function (o4s, e4i) {
        o4s.conf = e4i.conf;
        return o4s
    };
    q4u.fe7X({
        "res-mv-get": {
            type: "GET", url: "/api/v1/mv/detail", format: function (Q4U, e4i) {
                return ui1x({mv: Q4U}, e4i)
            }
        },
        "res-song-get": {
            type: "GET", url: "/api/song/detail", format: function (o4s, e4i) {
                if (!!o4s.songs && o4s.songs.length > 0) o4s.song = o4s.songs[0]; else o4s.song = bfp5u;
                delete o4s.songs;
                return ui1x(o4s, e4i)
            }, filter: function (e4i) {
                e4i.data.ids = "[" + e4i.data.id + "]"
            }
        },
        "res-program-get": {type: "GET", url: "/api/dj/program/detail", format: ui1x},
        "res-album-get": {type: "GET", url: "/api/album/{id}", format: ui1x},
        "res-playlist-get": {
            type: "GET", url: "/api/playlist/detail", format: function (o4s, e4i) {
                o4s.playlist = o4s.result;
                delete o4s.result;
                return ui1x(o4s, e4i)
            }
        },
        "res-mv-play": {type: "GET", url: "/api/song/mv/play", format: ui1x},
        "res-playlist-play": {type: "GET", url: "/api/playlist/update/playcount", format: ui1x},
        "res-program-play": {type: "GET", url: "/api/dj/program/listen", format: ui1x},
        "res-djradio-get": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e4i) {
                var i4m = e4i.data.id.split("-");
                e4i.data.radioId = i4m[0];
                e4i.data.asc = i4m[1] == 2;
                e4i.data.limit = 1e3;
                delete e4i.data.id
            }, format: function (Q4U, e4i) {
                var ctE5J = {id: e4i.data.radioId, programs: Q4U.programs};
                return ui1x({djradio: ctE5J}, e4i)
            }
        },
        "res-hotSongs-get": {type: "GET", url: "/api/artist/{id}", format: ui1x},
        "res-lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            }, format: function (o4s, e4i) {
                var wH2x = {lyric: "", nolyric: true};
                if (o4s.code == 200 && o4s.lrc && o4s.lrc.lyric) {
                    wH2x.lyric = o4s.lrc.lyric;
                    wH2x.nolyric = false
                } else {
                    wH2x.nolyric = true
                }
                return ui1x({lyric: wH2x}, e4i)
            }
        }
    });
    q4u.wI2x = NEJ.C();
    b3x = q4u.wI2x.O4S(q4u.hG7z);
    b3x.ctD5I = function (u4y, cT6N) {
        return this.sh1x(this.VI1x(u4y, cT6N))
    };
    b3x.UT1x = function (u4y, cT6N, e4i) {
        e4i = e4i || {};
        var j4n = this.sh1x(this.VI1x(u4y, cT6N));
        if (j4n && (u4y != 13 && u4y != 19 || e4i.conf && e4i.conf.useCache)) {
            this.z4D("onresourceload", u4y, cT6N, j4n, e4i.conf);
            return
        }
        e4i.data = {id: cT6N};
        e4i.onload = this.ctC5H.g4k(this, u4y, cT6N);
        e4i.onerror = this.ctB5G.g4k(this, u4y, cT6N);
        this.co5t("res-" + this.Cd4h(u4y) + "-get", e4i)
    };
    b3x.ctC5H = function (u4y, cT6N, o4s) {
        var j4n = o4s[this.Cd4h(u4y)];
        this.qb0x(this.VI1x(u4y, cT6N), j4n);
        this.z4D("onresourceload", u4y, cT6N, j4n, o4s.conf)
    };
    b3x.ctB5G = function (u4y, cT6N, o4s, e4i) {
        if (o4s.code != 404) {
            this.z4D("onresourceerror", u4y, cT6N, o4s.code);
            return
        }
        this.qb0x(this.VI1x(u4y, cT6N), bfp5u);
        this.z4D("onresourceload", u4y, cT6N, bfp5u, e4i.conf)
    };
    b3x.cDL8D = function (u4y, e4i) {
        this.co5t("res-" + this.Cd4h(u4y) + "-play", e4i)
    };
    b3x.VI1x = function (u4y, cT6N) {
        return "res-" + this.Cd4h(u4y) + "-" + cT6N
    };
    b3x.Cd4h = function (u4y) {
        var bz4D = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bz4D[u4y]
    };
    q4u.wI2x.Ke7X = function (u4y, cT6N) {
        if (!this.ff7Y) this.ff7Y = q4u.wI2x.A4E({});
        return this.ff7Y.ctD5I(u4y, cT6N)
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        q4u = c4g("nm.d"), l4p = c4g("nm.x"), bgf5k = /^[1-9][0-9]*$/, b3x, K4O;
    var LOCAL_LOG_KEY = "local-log";
    q4u.fe7X({
        "bi-log": {url: "/api/feedback/weblog"},
        "bi-batch-log": {url: "/api/feedback/weblog"},
        "plus-mv-count": {url: "/api/song/mv/play"},
        "plus-song-count": {url: "/api/song/play"},
        "plus-dj-count": {type: "GET", url: "/api/dj/program/listen"},
        "plus-playlist-count": {type: "GET", url: "/api/playlist/update/playcount"}
    });
    q4u.hR8J = NEJ.C();
    b3x = q4u.hR8J.O4S(q4u.hG7z);
    b3x.fu7n = function (U4Y, bg4k) {
        if (!U4Y || !bg4k) return;
        if (k4o.fG7z(bg4k)) {
            try {
                bg4k = JSON.parse(bg4k)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a2x)
                }
            }
        }
        if (!k4o.lw9n(bg4k)) return;
        this.co5t("bi-log", {data: {logs: JSON.stringify([{action: U4Y, json: bg4k}])}});
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + U4Y + ", json=" + JSON.stringify(bg4k))
        }
    };
    b3x.VC1x = function (nI9z) {
        if (!k4o.eJ6D(nI9z)) return;
        this.co5t("bi-batch-log", {data: {logs: JSON.stringify(nI9z)}})
    };
    b3x.bRn6h = function (bg4k) {
        if (!bg4k || !bg4k.type || !bg4k.rid) return;
        var nP9G = bg4k.type;
        if (bgf5k.test(nP9G)) {
            nP9G = this.Cd4h(nP9G)
        }
        if (!nP9G) return;
        if (nP9G == "playlist") nP9G = "list";
        this.fu7n("search", {type: nP9G, id: bg4k.rid || null, keyword: bg4k.keyword || null})
    };
    b3x.UX1x = function () {
        var cto5t = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bg4k) {
            if (!bg4k || !bg4k.type || !bg4k.rid) return;
            if (bg4k.play === undefined) bg4k.play = true;
            var nP9G = bg4k.type;
            if (bgf5k.test(nP9G)) {
                nP9G = this.Cd4h(nP9G)
            }
            if (!nP9G) return;
            if (nP9G == "playlist") nP9G = "list";
            var Q4U = {id: bg4k.rid, type: nP9G};
            if (nP9G == "song" && bg4k.source) {
                Q4U.source = this.bRl6f(bg4k.source);
                if (!!bg4k.sourceid) Q4U.sourceid = bg4k.sourceid
            }
            this.fu7n(!bg4k.play ? "addto" : "play", Q4U);
            if (nP9G == "song" && bg4k.hash && bg4k.hash.match(cto5t)) {
                this.fu7n(!bg4k.play ? "addto" : "play", {type: RegExp.$1, id: RegExp.$2})
            }
        }
    }();
    b3x.bgy5D = function (C4G, bA4E, ea6U, Fe5j) {
        var Q4U = {type: "song", wifi: 0, download: 0};
        var cth5m = {1: "ui", 2: "playend", 3: "interrupt", 4: "exception"};
        Q4U.id = C4G;
        Q4U.time = Math.round(bA4E);
        Q4U.end = k4o.fG7z(Fe5j) ? Fe5j : cth5m[Fe5j] || "";
        if (ea6U && ea6U.fid) {
            Q4U.source = this.bRl6f(ea6U.fid);
            Q4U.sourceId = ea6U.fdata
        }
        this.fu7n("play", Q4U)
    };
    b3x.bRj6d = function (u4y, cT6N) {
        if (!u4y || !cT6N) return;
        if (bgf5k.test(u4y)) u4y = this.Cd4h(u4y);
        if (u4y != "playlist" && u4y != "dj") return;
        var bg4k = q4u.B4F("plus-" + u4y + "-count");
        if (!bg4k) return !1;
        this.co5t(bg4k, {data: {id: cT6N}});
        var R4V = this.ls9j("play-hist-" + u4y, []);
        if (k4o.di6c(R4V, cT6N) < 0) {
            R4V.push(cT6N);
            return !0
        }
        return !1
    };
    b3x.Cd4h = function (u4y) {
        var bz4D = {1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist"};
        return bz4D[u4y]
    };
    b3x.bRl6f = function (Kf7Y) {
        var bz4D = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bz4D[Kf7Y]
    };
    b3x.bRh6b = function (hk7d) {
        var nI9z = this.FE5J(LOCAL_LOG_KEY, []);
        nI9z.unshift(hk7d);
        if (nI9z.length > 200) {
            nI9z.length = 200
        }
        this.wr2x(LOCAL_LOG_KEY, nI9z)
    };
    b3x.cta5f = function () {
        return this.Ur1x(LOCAL_LOG_KEY)
    };
    b3x.ej6d = function (Q4U) {
        this.fu7n("play", Q4U)
    };
    var bRf6Z = q4u.hR8J.gr7k();
    l4p.tc1x = function () {
        bRf6Z.fu7n.apply(bRf6Z, arguments)
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, h4l = c4g("nej.v"), v4z = c4g("nej.j"), I4M = c4g("nej.ut"),
        a2x = c4g("nej.e"), k4o = c4g("nej.u"), m4q = c4g("nm.l"), l4p = c4g("nm.x"), q4u = c4g("nm.d");
    var FullscreenApi = l4p.EA5F || {};
    if (!q4u.wI2x) return;
    var R4V = q4u.wI2x.A4E({onresourceload: csW5b});
    var tX1x = q4u.hR8J.gr7k();

    function csW5b(u4y, cT6N, j4n, bg4k) {
        var i4m = [];
        switch (parseInt(u4y)) {
            case 2:
                i4m = j4n;
                break;
            case 13:
                i4m = j4n.tracks;
                break;
            case 18:
                i4m.push(j4n);
                break;
            case 19:
                i4m = j4n.songs;
                break;
            case 21:
                if (j4n.mp && j4n.mp.fee && j4n.mp.pl <= 0) {
                    l4p.Vl1x(j4n.data.id, j4n.mp.fee);
                    return
                }
                break
        }
        if (l4p.Kg7Z(i4m, true, null, u4y == 19 ? {source: "album", sourceid: cT6N} : null) == 0) {
            return
        }
        l4p.fq7j({clazz: "m-layer-w2", bubble: !1, message: bg4k.message})
    }

    function csV5a(d4h, rY1x, yo3x, eu6o) {
        eu6o = eu6o || {};
        if (d4h.action == "ok") {
            if (yo3x) {
                location.dispatch2("/payfee?songId=" + yo3x)
            } else {
                location.dispatch2("/payfee?fee=" + rY1x || 1)
            }
            tX1x.fu7n("click", {
                type: "tobuyvip",
                name: "box",
                source: eu6o.source || "song",
                sourceid: eu6o.sourceid || yo3x || 0
            })
        } else if (d4h.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + yo3x);
            tX1x.fu7n("click", {
                type: "tobuyone",
                name: "box",
                source: eu6o.source || "song",
                sourceid: eu6o.sourceid || yo3x || 0
            })
        }
    }

    function Vn1x(bH4L) {
        l4p.fq7j({clazz: "m-layer-w2", bubble: !1, message: bH4L, btntxt: "知道了"})
    }

    function Vp1x(bH4L, Q4U) {
        Vn1x((Q4U || bb4f).toast || bH4L)
    }

    l4p.ir8j = function (bH4L, C4G, u4y, csU5Z, bj4n) {
        bH4L = bH4L || "由于版权保护，您所在的地区暂时无法使用。";
        if (csU5Z && bj4n && bj4n.privilege && bj4n.privilege.toast) {
            v4z.bn4r("/api/song/toast", {
                query: {id: bj4n.id},
                type: "json",
                onload: Vp1x.g4k(this, bH4L),
                onerror: Vp1x.g4k(this, bH4L)
            })
        } else if (C4G && u4y) {
            R4V.UT1x(u4y, C4G, {conf: {message: bH4L, useCache: u4y != 18}})
        } else {
            Vn1x(bH4L)
        }
    };
    l4p.tW1x = function (rY1x, yo3x, u4y, eu6o, mS9J) {
        var bS4W, or0x = "m-popup-info", bia6U = "单首购买", bic6W = "马上去开通", cV6P = "唱片公司要求，当前歌曲须付费使用。", bRe6Y = true;
        try {
            bS4W = top.api.feeMessage || {}
        } catch (e) {
            bS4W = {}
        }
        if (rY1x == 1 || rY1x == 8 || rY1x == 16) {
            if (u4y == "song") {
                or0x = "m-popup-song-buy";
                cV6P = bS4W["vip2"] || cV6P;
                bic6W = bS4W["vip2button"] || "包月购买";
                bia6U = bS4W["vip2link"] || bia6U;
                if (mS9J && mS9J.flag !== undefined) {
                    var br4v = mS9J.flag.toString(2).split("");
                    if (parseInt(br4v.pop(), 10) == 1) {
                        bRe6Y = false
                    }
                }
            } else {
                cV6P = bS4W["vip"] || cV6P
            }
        } else if (rY1x == 4) {
            cV6P = bS4W["album"] || cV6P;
            bic6W = "立即订购"
        } else {
            cV6P = bS4W["unknow"] || cV6P
        }
        l4p.kk8c({
            clazz: "m-layer-w5",
            html: a2x.bZ5e(or0x, {songTxt: bia6U, tip: cV6P, oktext: bic6W, cctext: "以后再说", showSongText: bRe6Y}),
            onaction: csV5a.ew6q(null, rY1x, yo3x, eu6o)
        })
    };
    l4p.bRd6X = function (hr7k, gl7e) {
        l4p.hi7b({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (u4y) {
                if (u4y == "ok") {
                    l4p.JU6O({id: hr7k, type: gl7e})
                }
            }
        })
    };
    l4p.Vl1x = function (lu9l, rY1x) {
        var bS4W, cV6P = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bS4W = top.api.feeMessage || {}
        } catch (e) {
            bS4W = {}
        }
        if (rY1x == 1 || rY1x == 8) {
            cV6P = bS4W["vip"] || cV6P
        } else if (rY1x == 4) {
            cV6P = bS4W["album"] || cV6P
        } else {
            cV6P = bS4W["unknow"] || cV6P
        }
        return l4p.kk8c({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a2x.bZ5e("m-popup-info", {tip: cV6P, oktext: "马上去开通", cctext: "以后再说"}),
            onaction: function (d4h) {
                if (d4h.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + lu9l);
                    tX1x.fu7n("click", {type: "tobuyone", name: "box", source: "mv", sourceid: lu9l || 0})
                }
            }
        })
    };
    l4p.Kg7Z = function () {
        function compareFee(csP5U, csO5T) {
            var bz4D = {1: 99, 8: 99, 4: 88, 16: 99};
            return (bz4D[csP5U] || 0) - (bz4D[csO5T] || 0)
        }

        return function (i4m, cV6P, sq1x, eu6o) {
            sq1x = sq1x || {};
            var yV3x = [], Ki7b = {}, bRc6W = 0, bRb6V = 0, Kl7e = null;
            if (!i4m || !i4m.length) return yV3x;
            k4o.bd4h(i4m, function (bj4n) {
                var fA7t = l4p.pB0x(bj4n);
                if (fA7t == 0) {
                    yV3x.push(bj4n)
                } else if (fA7t == 10) {
                    if (bj4n.privilege) {
                        bj4n.fee = bj4n.privilege.fee
                    }
                    if (compareFee(bj4n.fee, Ki7b.fee) > 0) {
                        Ki7b = bj4n
                    }
                } else if (fA7t == 11) {
                    ++bRc6W;
                    if (!sq1x.play) yV3x.push(bj4n)
                } else if (fA7t == 1e3) {
                    ++bRb6V;
                    if (!sq1x.download) yV3x.push(bj4n)
                } else if (fA7t == 100) {
                    Kl7e = bj4n
                }
            });
            if (yV3x.length == 0 && cV6P) {
                if (bRc6W == i4m.length) {
                    var ta1x = i4m[0].privilege || {};
                    if (ta1x.payed) {
                        l4p.ir8j("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l4p.tW1x(ta1x.fee, null, null, eu6o)
                    }
                } else if (bRb6V == i4m.length) {
                    l4p.ir8j("因版权方要求，该歌曲不支持下载")
                } else if (Ki7b.id) {
                    l4p.tW1x(Ki7b.fee, Ki7b.id, null, eu6o, Ki7b.privilege)
                } else {
                    if (Kl7e && i4m.length == 1 && Kl7e.privilege && Kl7e.privilege.st < 0 && Kl7e.privilege.toast) {
                        l4p.ir8j(null, null, null, true, Kl7e)
                    } else {
                        l4p.ir8j()
                    }
                }
            }
            return yV3x
        }
    }();
    l4p.pB0x = function (bj4n) {
        if (!bj4n) return 0;
        var fA7t = bj4n.privilege;
        if (bj4n.program) return 0;
        if (window.GAbroad) return 100;
        if (fA7t) {
            if (fA7t.st != null && fA7t.st < 0) {
                return 100
            }
            if (fA7t.fee > 0 && fA7t.fee != 8 && fA7t.payed == 0 && fA7t.pl <= 0) return 10;
            if (fA7t.fee == 16) return 11;
            if ((fA7t.fee == 0 || fA7t.payed) && fA7t.pl > 0 && fA7t.dl == 0) return 1e3;
            if (fA7t.pl == 0 && fA7t.dl == 0) return 100;
            return 0
        } else {
            var ex6r = bj4n.status != null ? bj4n.status : bj4n.st != null ? bj4n.st : 0;
            if (bj4n.status >= 0) return 0;
            if (bj4n.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, fx7q = NEJ.R, a2x = c4g("nej.e"), h4l = c4g("nej.v"),
        k4o = c4g("nej.u"), I4M = c4g("nej.ut"), w4A = c4g("nm.w"), b3x;
    if (!!w4A.bRa6U) return;
    var ck5p = ~[];
    ck5p = {
        bQY6S: ++ck5p,
        csH5M: (![] + "")[ck5p],
        kc8U: ++ck5p,
        Kq7j: (![] + "")[ck5p],
        VB1x: (ck5p[ck5p] + "")[ck5p],
        bQU6O: ++ck5p,
        cDM8E: ({} + "")[ck5p],
        csb5g: (ck5p[ck5p] + "")[ck5p],
        csa5f: (![] + "")[ck5p],
        UQ1x: ++ck5p,
        VJ1x: (!"" + "")[ck5p],
        cDP8H: ++ck5p,
        Ch4l: ++ck5p,
        bQK6E: ({} + "")[ck5p],
        wQ2x: ++ck5p,
        crI5N: ++ck5p,
        cDQ8I: ++ck5p,
        cDR8J: ++ck5p
    };
    ck5p.Kv7o = (ck5p.Kv7o = ck5p + "")[ck5p.Ch4l] + (ck5p.Kw7p = ck5p.Kv7o[ck5p.kc8U]) + (ck5p.VX1x = (ck5p.Dh4l + "")[ck5p.kc8U]) + (!ck5p + "")[ck5p.UQ1x] + (ck5p.Dj4n = ck5p.Kv7o[ck5p.wQ2x]) + (ck5p.Dh4l = (!"" + "")[ck5p.kc8U]) + (crE4I = (!"" + "")[ck5p.bQU6O]) + ck5p.Kv7o[ck5p.Ch4l] + ck5p.Dj4n + ck5p.Kw7p + ck5p.Dh4l;
    ck5p.VX1x = ck5p.Dh4l + (!"" + "")[ck5p.UQ1x] + ck5p.Dj4n + crE4I + ck5p.Dh4l + ck5p.VX1x;
    ck5p.Dh4l = ck5p.bQY6S[ck5p.Kv7o][ck5p.Kv7o];
    w4A.bRa6U = ck5p
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, h4l = c4g("nej.v"), a2x = c4g("nej.e"), N4R = c4g("nej.ui"), b3x;
    if (!!N4R.VY1x) return;
    var iZ8R = a2x.tO1x(".#<uispace>{position:absolute;background:#fff;}");
    N4R.VY1x = NEJ.C();
    b3x = N4R.VY1x.O4S(N4R.Sc0x);
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.bX5c([[document, "click", this.sW1x.g4k(this)]]);
        this.crz4D = !!e4i.nostop;
        this.bQC5H = {top: e4i.top, left: e4i.left}
    };
    b3x.bD4H = function () {
        delete this.xI2x;
        delete this.bkz6t;
        delete this.qN0x;
        delete this.bQB5G;
        delete this.Wb2x;
        delete this.bQC5H;
        this.bG4K()
    };
    b3x.ce5j = function () {
        this.mb9S = iZ8R
    };
    b3x.bW5b = function () {
        this.cg5l();
        this.AW4a = this.n4r;
        h4l.s4w(this.n4r, "click", this.crt4x.g4k(this))
    };
    b3x.sW1x = function (d4h) {
        if (d4h.button != 2) this.bu4y()
    };
    b3x.crt4x = function (d4h) {
        if (this.crz4D) return;
        h4l.tr1x(d4h);
        var F4J = h4l.W4a(d4h);
        if (F4J.tagName == "A") h4l.cp5u(d4h)
    };
    b3x.crq4u = function () {
        var dh6b = /\s+/i;
        return function (nJ9A) {
            nJ9A = (nJ9A || "").trim().toLowerCase().split(dh6b);
            nJ9A[0] = nJ9A[0] || "bottom";
            nJ9A[1] = nJ9A[1] || "left";
            this.qN0x = nJ9A
        }
    }();
    b3x.crn4r = function (nJ9A) {
        var o4s = {}, nm9d = this.bkz6t, cDS8K = a2x.oy0x(), cA5F = this.n4r.offsetWidth, ci5n = this.n4r.offsetHeight;
        switch (nJ9A[0]) {
            case"top":
                o4s.top = nm9d.top - ci5n;
                o4s.left = nJ9A[1] == "right" ? nm9d.left + nm9d.width - cA5F : nm9d.left;
                break;
            case"left":
                o4s.left = nm9d.left - cA5F;
                o4s.top = nJ9A[1] == "bottom" ? nm9d.top + nm9d.height - ci5n : nm9d.top;
                break;
            case"right":
                o4s.left = nm9d.left + nm9d.width;
                o4s.top = nJ9A[1] == "bottom" ? nm9d.top + nm9d.height - ci5n : nm9d.top;
                break;
            default:
                o4s.top = nm9d.top + nm9d.height;
                o4s.left = nJ9A[1] == "right" ? nm9d.left + nm9d.width - cA5F : nm9d.left;
                break
        }
        return o4s
    };
    b3x.JD6x = function () {
        if (!this.bQB5G) {
            this.gF7y(this.bQC5H);
            return
        }
        if (!!this.Wb2x) {
            this.gF7y(this.xI2x);
            return
        }
        if (!!this.bkz6t) this.gF7y(this.crn4r(this.qN0x))
    };
    b3x.crd4h = function (F4J, do6i, d4h) {
        do6i = do6i || bb4f;
        var bQt5y = a2x.oy0x(), cY6S = h4l.jB8t(d4h) + (do6i.left || 0), hB7u = h4l.mf9W(d4h) + (do6i.top || 0),
            cA5F = F4J.offsetWidth + (do6i.right || 0), ci5n = F4J.offsetHeight + (do6i.bottom || 0),
            Kx7q = bQt5y.scrollWidth, blo6i = bQt5y.scrollHeight, blp6j = cY6S + cA5F, blq6k = hB7u + ci5n;
        switch (this.qN0x[0]) {
            case"top":
                hB7u = blq6k > blo6i ? hB7u - ci5n : hB7u;
                if (this.qN0x[1] == "right") {
                    cY6S = cY6S - cA5F < 0 ? 0 : cY6S - cA5F
                } else {
                    cY6S = blp6j > Kx7q ? Kx7q - cA5F : cY6S
                }
                break;
            case"left":
                cY6S = blp6j > Kx7q ? Kx7q - cA5F : cY6S;
                if (this.qN0x[1] == "top") {
                    hB7u = blq6k > blo6i ? hB7u - ci5n : hB7u
                } else {
                    hB7u = hB7u - ci5n < 0 ? hB7u : hB7u - ci5n
                }
                break;
            case"right":
                cY6S = cY6S - cA5F < 0 ? 0 : cY6S - cA5F;
                if (this.qN0x[1] == "top") {
                    hB7u = blq6k > blo6i ? hB7u - ci5n : hB7u
                } else {
                    hB7u = hB7u - ci5n < 0 ? hB7u : hB7u - ci5n
                }
                break;
            default:
                hB7u = hB7u - ci5n < 0 ? hB7u : hB7u - ci5n;
                if (this.qN0x[1] == "left") {
                    cY6S = blp6j > Kx7q ? Kx7q - cA5F : cY6S
                } else {
                    cY6S = cY6S - cA5F < 0 ? 0 : cY6S - cA5F
                }
                break
        }
        return {top: hB7u, left: cY6S}
    };
    b3x.blt6n = function () {
        var cqQ4U = function (F4J, do6i) {
            F4J = a2x.B4F(F4J);
            if (!F4J) return;
            do6i = do6i || bb4f;
            var bi4m = a2x.hO8G(F4J);
            return {
                top: bi4m.y - (do6i.top || 0),
                left: bi4m.x - (do6i.left || 0),
                width: F4J.offsetWidth + (do6i.right || 0),
                height: F4J.offsetHeight + (do6i.bottom || 0)
            }
        };
        return function (e4i) {
            e4i = e4i || bb4f;
            this.Wb2x = e4i.event;
            this.crq4u(e4i.align);
            if (!!this.Wb2x) this.xI2x = this.crd4h(e4i.target, e4i.delta, this.Wb2x);
            this.bkz6t = cqQ4U(e4i.target, e4i.delta);
            this.bQB5G = !!e4i.fitable;
            this.L4P();
            return this
        }
    }()
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), N4R = c4g("nej.ui"), b3x,
        K4O;
    if (!!N4R.Cl4p) return;
    N4R.Cl4p = NEJ.C();
    b3x = N4R.Cl4p.O4S(N4R.XP2x);
    K4O = N4R.Cl4p.cs5x;
    N4R.Cl4p.cDU8M = function () {
        var cqO4S = function (d4h, C4G, fK7D, ka8S, Ut1x) {
            var cz5E, J4N = C4G + "-i", R4V = fK7D.zi3x, bQq4u = !!ka8S.noclear, bQp4t = !!ka8S.toggled;
            if (k4o.gG7z(ka8S.onbeforeclick)) {
                var Wh2x = ka8S.noclear, cqE4I = ka8S.toggled;
                try {
                    ka8S.onbeforeclick(ka8S)
                } catch (e) {
                }
                bQq4u = !!ka8S.noclear;
                bQp4t = !!ka8S.toggled;
                ka8S.toggled = cqE4I;
                ka8S.noclear = Wh2x
            }
            var DZ5e = R4V[J4N];
            if (bQp4t && !!DZ5e) {
                DZ5e.bu4y();
                return
            }
            h4l.bh4l(d4h);
            if (!bQq4u) {
                h4l.z4D(document, "click");
                cz5E = fK7D.A4E(ka8S)
            } else {
                cz5E = fK7D.bUF7y(ka8S, !0)
            }
            R4V[J4N] = cz5E;
            cz5E.xp2x("onbeforerecycle", function () {
                delete R4V[J4N]
            });
            cz5E.blt6n(Ut1x)
        };
        return function (f4j, e4i) {
            f4j = a2x.B4F(f4j);
            if (!f4j) return this;
            if (!this.zi3x) this.zi3x = {};
            var C4G = a2x.lv9m(f4j);
            if (!!this.zi3x[C4G]) return this;
            e4i = NEJ.X({}, e4i);
            var Ut1x = NEJ.EX({align: "", delta: null, fitable: !1}, e4i);
            Ut1x.target = C4G;
            e4i.destroyable = !0;
            if (!e4i.fixed) {
                Ut1x.fitable = !0;
                e4i.parent = document.body
            }
            this.zi3x[C4G] = [C4G, e4i.event || "click", cqO4S.ew6q(null, C4G, this, e4i, Ut1x)];
            h4l.s4w.apply(h4l, this.zi3x[C4G]);
            return this
        }
    }();
    N4R.Cl4p.cDX8P = function (f4j) {
        if (!this.zi3x) return this;
        var C4G = a2x.lv9m(f4j), d4h = this.zi3x[C4G];
        if (!d4h) return this;
        delete this.zi3x[C4G];
        h4l.mw9n.apply(h4l, d4h);
        var cz5E = this.zi3x[C4G + "-i"];
        if (!!cz5E) cz5E.bu4y();
        return this
    };
    b3x.blJ6D = function () {
        return N4R.VY1x.A4E(this.cc5h)
    };
    b3x.So0x = function () {
        K4O.So0x.apply(this, arguments);
        this.cc5h.top = null;
        this.cc5h.left = null;
        this.cc5h.nostop = !1
    };
    b3x.blt6n = function (e4i) {
        if (!!this.pb0x) this.pb0x.blt6n(e4i);
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bc4g = c4g("nej.ui"), m4q = c4g("nm.l"), b3x, K4O;
    m4q.blX7Q = NEJ.C();
    b3x = m4q.blX7Q.O4S(bc4g.Cl4p);
    b3x.bl4p = function (e4i) {
        e4i.nohack = true;
        this.bm4q(e4i)
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), m4q = c4g("nm.l"), l4p = c4g("nm.x"), b3x, K4O;
    var FullscreenApi = l4p.EA5F || {};
    m4q.Z4d = NEJ.C();
    b3x = m4q.Z4d.O4S(m4q.blX7Q);
    K4O = m4q.Z4d.cs5x;
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.ey6s = e4i.type || 1
    };
    b3x.bW5b = function () {
        this.cg5l();
        this.n4r = a2x.nH9y(this.cqy4C());
        var i4m = a2x.dk6e(this.n4r);
        this.qY0x = i4m[0];
        this.cv5A = i4m[1]
    };
    b3x.cqy4C = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b3x.JD6x = function () {
        var D4H = {}, ch5m = this.n4r.style, jD8v = a2x.oy0x(), om0x = {left: jD8v.scrollLeft, top: jD8v.scrollTop},
            do6i = {left: jD8v.clientWidth - this.n4r.offsetWidth, top: jD8v.clientHeight - this.n4r.offsetHeight};
        D4H.top = Math.max(0, om0x.top + do6i.top / 2);
        D4H.left = Math.max(0, om0x.left + do6i.left / 2);
        this.pb0x.gF7y(D4H)
    };
    b3x.L4P = function (e4i) {
        K4O.L4P.call(this);
        this.JD6x();
        this.ey6s == 1 ? a2x.fb6V(this.qY0x, "u-icn-32", "u-icn-31") : a2x.fb6V(this.qY0x, "u-icn-31", "u-icn-32");
        this.cv5A.innerHTML = e4i.tip || ""
    };
    window.g_showTipCard = m4q.Z4d.L4P = function () {
        var eg6a;
        return function (e4i) {
            clearTimeout(eg6a);
            if (e4i.parent === undefined) e4i.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e4i.autoclose === undefined) e4i.autoclose = true;
            e4i.clazz = "m-sysmsg";
            !!this.ff7Y && this.ff7Y.T4X();
            this.ff7Y = this.A4E(e4i);
            this.ff7Y.L4P(e4i);
            if (e4i.autoclose) eg6a = setTimeout(this.bu4y.g4k(this), 2e3)
        }.g4k(m4q.Z4d)
    }();
    m4q.Z4d.bu4y = function () {
        !!this.ff7Y && this.ff7Y.bu4y()
    }
})();
(function () {
    var c4g = NEJ.P, v4z = c4g("nej.j"), k4o = c4g("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v4z.bn4r = v4z.bn4r.eB6v(function (d4h) {
            e4i = d4h.args[1];
            e4i.query = e4i.query || {};
            if (k4o.fG7z(e4i.query)) e4i.query = k4o.hv7o(e4i.query);
            e4i.query.ref = "mail"
        })
    }
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, fx7q = NEJ.R, I4M = c4g("nej.ut"), k4o = c4g("nej.u"), h4l = c4g("nej.v"),
        v4z = c4g("nej.j"), q4u = c4g("nm.d"), m4q = c4g("nm.l"), J4N = "playlist-tracks_", b3x;
    q4u.fe7X({
        "playlist_my-list": {
            url: "/api/user/playlist", type: "GET", format: function (Q4U, e4i) {
                this.cqx4B(Q4U.playlist);
                return {total: 0, list: fx7q}
            }, onerror: function () {
                this.z4D("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create", format: function (Q4U, e4i) {
                var nu9l = Q4U.playlist;
                nu9l.creator = GUser;
                nu9l.isHost = !0;
                nu9l.typeFlag = "playlist";
                return nu9l
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.ig8Y, "listchange", d4h)
            }, onmessage: function () {
                var mv9m = {507: "歌单数量超过上限！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (cm5r) {
                    m4q.Z4d.L4P({tip: mv9m[cm5r] || "创建失败", type: 2})
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete", type: "GET", filter: function (e4i) {
                e4i.id = e4i.data.pid
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.ig8Y, "listchange", d4h)
            }, onmessage: function () {
                var mv9m = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (cm5r) {
                    m4q.Z4d.L4P({tip: mv9m[cm5r] || "删除失败", type: 2})
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET", url: "/api/playlist/subscribe", filter: function (e4i) {
                var eu6o = e4i.ext || {};
                e4i.ext = NEJ.X(eu6o, e4i.data);
                e4i.data = {id: e4i.ext.id}
            }, format: function (Q4U, e4i) {
                m4q.Z4d.L4P({tip: "收藏成功" + (Q4U.point > 0 ? ' 获得<em class="s-fc6">' + Q4U.point + "积分</em>" : "")});
                var p4t = e4i.ext;
                p4t.subscribedCount++;
                return p4t
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.cqw4A, "listchange", d4h);
                h4l.z4D(q4u.cqw4A, "itemchange", {attr: "subscribedCount", data: d4h.data})
            }, onmessage: function () {
                var mv9m = {404: "歌单不存在！", 501: "歌单已经收藏！", 506: "歌单收藏数量超过上限！"};
                return function (cm5r) {
                    m4q.Z4d.L4P({type: 2, tip: mv9m[cm5r] || "收藏失败，请稍后再试！"})
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe", type: "GET", filter: function (e4i) {
                e4i.id = e4i.data.id = e4i.data.pid
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.ig8Y, "listchange", d4h)
            }, onmessage: function () {
                var mv9m = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (cm5r) {
                    m4q.Z4d.L4P({tip: mv9m[cm5r], type: 2})
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e4i) {
                var j4n = e4i.data, Wm2x = {};
                Wm2x["playlist-update-name"] = {id: j4n.id, name: j4n.name};
                Wm2x["playlist-update-tag"] = {id: j4n.id, tags: j4n.tags.join(";")};
                Wm2x["playlist-update-desc"] = {id: j4n.id, desc: j4n.description};
                e4i.data = Wm2x;
                e4i.ext = j4n
            },
            format: function (V4Z, qZ0x, Uo1x, e4i) {
                if (V4Z.code == 200 && qZ0x.code == 200 && Uo1x.code == 200) {
                    e4i.ext.allSuccess = true;
                    m4q.Z4d.L4P({tip: "保存成功"})
                } else if (V4Z.code == 407 || qZ0x.code == 407 || Uo1x.code == 407) {
                    e4i.ext.allSuccess = false;
                    m4q.Z4d.L4P({type: 2, tip: "输入内容包含关键字"})
                } else {
                    e4i.ext.allSuccess = false;
                    m4q.Z4d.L4P({type: 2, tip: "保存失败"})
                }
                return this.eH6B(e4i.ext.id)
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.ig8Y, "listchange", d4h)
            },
            onmessage: function (cm5r) {
                m4q.Z4d.L4P({type: 2, tip: "保存失败"})
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name", format: function (Q4U, e4i) {
                var p4t = this.eH6B(e4i.ext.id);
                if (Q4U.code == 200) p4t.name = e4i.ext.name;
                return Q4U
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update", format: function (Q4U, e4i) {
                var p4t = this.eH6B(e4i.ext.id);
                if (Q4U.code == 200) p4t.tags = e4i.ext.tags;
                return Q4U
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update", format: function (Q4U, e4i) {
                var p4t = this.eH6B(e4i.ext.id);
                if (Q4U.code == 200) p4t.description = e4i.ext.description;
                return Q4U
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update", filter: function (e4i) {
                e4i.url = e4i.data.url;
                delete e4i.data.url
            }, format: function (Q4U, e4i) {
                m4q.Z4d.L4P({tip: "保存成功"});
                var p4t = this.eH6B(e4i.data.id);
                p4t.coverImgUrl = e4i.url;
                e4i.ext = p4t;
                return p4t
            }, onmessage: function (cm5r) {
                m4q.Z4d.L4P({type: 2, tip: "保存失败"})
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.ig8Y, "itemchange", {attr: "coverImgUrl", data: e4i.ext})
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount", type: "GET", format: function (Q4U, e4i) {
                var nu9l = this.eH6B(e4i.data.id);
                if (!nu9l) return;
                nu9l.playCount++;
                h4l.z4D(q4u.ig8Y, "itemchange", {attr: "playcount", data: nu9l})
            }
        }
    });
    q4u.ig8Y = NEJ.C();
    b3x = q4u.ig8Y.O4S(q4u.hG7z);
    b3x.cx5C = function () {
        this.cD6x()
    };
    b3x.bQk4o = function () {
        var dn6h = GUser.userId;
        this.lK9B({limit: 1001, key: "playlist_my-" + dn6h, data: {offset: 0, limit: 1001, uid: dn6h}})
    };
    b3x.cqx4B = function (i4m) {
        var dn6h = GUser.userId, iN8F = [], bQj4n = [];
        k4o.bd4h(i4m, function (p4t) {
            p4t.typeFlag = "playlist";
            if (p4t.creator && p4t.creator.userId == dn6h) {
                if (p4t.specialType == 5) p4t.name = "我喜欢的音乐";
                p4t.isHost = !0;
                iN8F.push(p4t)
            } else {
                bQj4n.push(p4t)
            }
        });
        this.uu1x("playlist_new-" + dn6h, iN8F);
        this.uu1x("playlist_fav-" + dn6h, bQj4n)
    };
    b3x.cqo4s = function (j4n) {
        this.co5t("playlist-update-cover", {data: j4n})
    };
    b3x.cDY8Q = function () {
        var Uk1x = this.cqk4o.B4F("host-plist");
        if (Uk1x.length == 0) {
            return
        }
        if (Uk1x.length == 1 && Uk1x[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Uk1x.length; i < len; i++) {
            var p4t = Uk1x[i];
            if (p4t.trackCount > 0) return p4t.id
        }
        return this.cqk4o.B4F("host-plist")[0].id
    };
    b3x.cqj4n = function (C4G) {
        if (GUser && GUser.userId > 0) {
            this.co5t("playlist-upcount", {data: {id: C4G}})
        }
    };
    b3x.EB5G = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b3x.cDZ8R = function () {
        return GUser.userId
    };
    b3x.EH5M = function (p4t) {
        if (p4t.userId == GUser.userId && p4t.specialType == 5) p4t.name = "我喜欢的音乐";
        h4l.z4D(this.constructor, "itemchange", {data: this.BV4Z(p4t)});
        return p4t
    };
    I4M.fJ7C.A4E({element: q4u.ig8Y, event: ["listchange", "playcountchange", "itemchange"]})
})();
(function () {
    var c4g = NEJ.P, fx7q = NEJ.R, bs4w = NEJ.F, bb4f = NEJ.O, I4M = c4g("nej.ut"), h4l = c4g("nej.v"),
        k4o = c4g("nej.u"), l4p = c4g("nm.x"), q4u = c4g("nm.d"), m4q = c4g("nm.l"), b3x, K4O;
    q4u.fe7X({
        "program-get": {
            url: "/api/dj/program/detail", format: function (Q4U) {
                return Q4U.program
            }
        }, "program_djradio-list": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e4i) {
                e4i.data.limit = 1e3;
                delete e4i.data.id
            }, format: function (Q4U, e4i) {
                var bQf4j = [], pl0x = Q4U.programs;
                if (pl0x) {
                    for (var i = 0, l = pl0x.length; i < l; i++) {
                        if (pl0x[i].programFeeType < 10 || pl0x[i].buyed) {
                            bQf4j.push(pl0x[i])
                        }
                    }
                }
                return bQf4j
            }
        }, "program_fav-list": {
            url: "/api/djprogram/subscribed/paged", format: function (Q4U, e4i) {
                return Q4U.programs
            }, onerror: "onlisterror"
        }, "program_fav-add": {
            url: "/api/djprogram/subscribe", filter: function (e4i) {
                e4i.ext = e4i.data;
                e4i.data = {id: e4i.ext.id};
                e4i.id = e4i.data.id
            }, format: function (Q4U, e4i) {
                m4q.Z4d.L4P({tip: "收藏成功"});
                var p4t = e4i.ext;
                p4t.subscribedCount++;
                p4t.subscribed = !0;
                return p4t
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.qk0x, "listchange", d4h)
            }, onmessage: function () {
                var mv9m = {404: "节目不存在！", 501: "节目已收藏！"};
                return function (cm5r) {
                    m4q.Z4d.L4P({type: 2, tip: mv9m[cm5r] || "收藏失败！"})
                }
            }()
        }, "program_fav-del": {
            url: "/api/djprogram/unsubscribe", finaly: function (d4h, e4i) {
                h4l.z4D(q4u.qk0x, "listchange", d4h)
            }, onmessage: function () {
                var mv9m = {404: "节目不存在！", 502: "没有收藏此节目！"};
                return function (cm5r) {
                    l4p.bnQ7J({txt: mv9m[cm5r] || "取消收藏失败！"})
                }
            }()
        }, "program-update-count": {
            type: "GET", url: "/api/dj/program/listen", filter: function (e4i) {
                var p4t = this.eH6B(e4i.data.id) || bb4f;
                e4i.ext = (p4t.listenerCount || 0) + 1
            }, format: function (Q4U, e4i) {
                var p4t = this.eH6B(e4i.data.id);
                if (!!p4t) {
                    p4t.listenerCount = Math.max(e4i.ext, p4t.listenerCount || 0)
                }
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.qk0x, "itemchange", {attr: "playCount", data: this.eH6B(e4i.data.id)})
            }
        }, "program-like": {
            url: "/api/resource/like", filter: function (e4i) {
                e4i.data = {threadId: "A_DJ_1_" + e4i.id}
            }, format: function (Q4U, e4i) {
                var p4t = e4i.ext.data || this.eH6B(e4i.id);
                p4t.liked = true;
                p4t.likedCount++;
                e4i.ext.data = p4t;
                try {
                    top.player.setLike(p4t)
                } catch (e) {
                }
                return p4t
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.qk0x, "itemchange", {attr: "likedCount", data: e4i.ext.data})
            }
        }, "program-unlike": {
            url: "/api/resource/unlike", filter: function (e4i) {
                e4i.data = {threadId: "A_DJ_1_" + e4i.id}
            }, format: function (Q4U, e4i) {
                var p4t = e4i.ext.data || this.eH6B(e4i.id);
                p4t.liked = false;
                p4t.likedCount--;
                e4i.ext.data = p4t;
                try {
                    top.player.setLike(p4t)
                } catch (e) {
                }
                return p4t
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.qk0x, "itemchange", {attr: "likedCount", data: e4i.ext.data})
            }
        }
    });
    q4u.qk0x = NEJ.C();
    b3x = q4u.qk0x.O4S(q4u.hG7z);
    b3x.cEa8S = function () {
        var dn6h = GUser.userId;
        this.lK9B({limit: 1001, key: "program_fav-" + dn6h, data: {offset: 0, limit: 1e3, uid: dn6h}})
    };
    b3x.cEb8T = function (dc6W) {
        var pk0x = dc6W[this.wl2x];
        l4p.cqd4h(4, function (R4V) {
            R4V.uu1x("track_program-" + pk0x, dc6W.songs)
        });
        delete dc6W.songs;
        var bN4R = dc6W.mainSong;
        l4p.cqd4h(4, function (R4V) {
            R4V.uu1x("track_program_main-" + pk0x, !bN4R ? [] : [bN4R])
        });
        dc6W.mainSong = (bN4R || bb4f).id
    };
    b3x.cEc8U = function (C4G) {
        var dc6W = this.eH6B(C4G), dn6h = localCache.Wt2x("host.profile.userId");
        return !!dc6W && dc6W.dj.userId == dn6h
    };
    b3x.cEd8V = function (C4G) {
        return !1
    };
    b3x.EH5M = function (p4t) {
        h4l.z4D(this.constructor, "itemchange", {attr: "detail", data: this.BV4Z(p4t)});
        return p4t
    };
    b3x.cqj4n = function (C4G) {
        this.co5t("program-update-count", {data: {id: C4G}})
    };
    l4p.bQc4g = function (e4i) {
        var R4V = q4u.qk0x.A4E({
            onitemadd: function () {
                (e4i.onsuccess || bs4w)()
            }, onerror: function () {
                (e4i.onerror || bs4w)()
            }
        });
        if (e4i.data.liked) {
            R4V.vd2x(e4i.data)
        } else {
            R4V.pf0x(e4i.data)
        }
    };
    b3x.pf0x = function (dc6W) {
        if (!l4p.gW7P()) return;
        var cq5v = {ext: {}};
        if (k4o.lw9n(dc6W)) {
            cq5v.id = dc6W.id;
            cq5v.ext.data = dc6W
        } else {
            cq5v.id = dc6W
        }
        this.co5t("program-like", cq5v)
    };
    b3x.vd2x = function (dc6W) {
        if (!l4p.gW7P()) return;
        var cq5v = {ext: {}};
        if (k4o.lw9n(dc6W)) {
            cq5v.id = dc6W.id;
            cq5v.ext.data = dc6W
        } else {
            cq5v.id = dc6W
        }
        this.co5t("program-unlike", cq5v)
    };
    I4M.fJ7C.A4E({element: q4u.qk0x, event: ["listchange", "itemchange"]})
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, fx7q = NEJ.R, I4M = c4g("nej.ut"), k4o = c4g("nej.u"), h4l = c4g("nej.v"),
        v4z = c4g("nej.j"), q4u = c4g("nm.d"), m4q = c4g("nm.l"), l4p = c4g("nm.x"), J4N = "playlist-tracks_",
        l4p = c4g("nm.x"), b3x;
    q4u.fe7X({
        "track-get": {
            url: "/api/v3/song/detail", filter: function (e4i) {
                e4i.data.c = JSON.stringify([{id: e4i.data.id}])
            }, format: function (Q4U, e4i) {
                var bj4n = l4p.Fd5i(Q4U.songs[0]);
                bj4n.privilege = Q4U.privileges[0];
                return bj4n
            }
        }, "track_playlist-list": {
            url: "/api/v3/playlist/detail", filter: function (e4i) {
                e4i.data.n = 1e3
            }, format: function (Q4U, e4i) {
                var hw7p = [];
                this.sM1x.EH5M(Q4U.playlist);
                k4o.bd4h(Q4U.playlist.tracks, function (bN4R, r4v) {
                    var bQb4f = l4p.Fd5i(bN4R);
                    bQb4f.privilege = Q4U.privileges[r4v];
                    hw7p.push(bQb4f)
                }, this);
                return hw7p
            }
        }, "track_album-list": {
            url: "/api/v1/album/{id}", format: function (Q4U, e4i) {
                var hw7p = [];
                k4o.bd4h(Q4U.songs, function (bj4n) {
                    hw7p.push(l4p.Fd5i(bj4n))
                });
                return hw7p
            }
        }, "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks", filter: function (e4i) {
                var bz4D = {}, j4n = e4i.data, cpW4a = this.hD7w(e4i.key) || [];
                Fj5o = [];
                k4o.bd4h(cpW4a, function (bN4R) {
                    var C4G = k4o.lw9n(bN4R) ? bN4R.id : bN4R;
                    bz4D[C4G] = true
                });
                e4i.ext = [];
                k4o.bd4h(j4n.tracks, function (bN4R) {
                    var C4G = k4o.lw9n(bN4R) ? bN4R.id : bN4R;
                    if (!bz4D[C4G]) {
                        Fj5o.push(C4G);
                        bz4D[C4G] = true;
                        e4i.ext.push(bN4R)
                    }
                });
                j4n.trackIds = JSON.stringify(Fj5o);
                j4n.op = "add";
                if (!Fj5o.length) {
                    e4i.value = {code: 502}
                }
            }, format: function (Q4U, e4i) {
                m4q.Z4d.L4P({tip: "已添加至歌单"});
                var nu9l = this.sM1x.eH6B(e4i.data.pid);
                if (!!Q4U.coverImgUrl) nu9l.coverImgUrl = Q4U.coverImgUrl;
                k4o.no9f(e4i.ext, function (bN4R) {
                    this.zs3x(e4i, k4o.lw9n(bN4R) ? bN4R : null);
                    if (!!nu9l) nu9l.trackCount++
                }, this);
                h4l.z4D(q4u.ig8Y, "itemchange", {data: nu9l || {}, cmd: "add"});
                this.z4D("onaddsuccess");
                return null
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.xc2x, "listchange", {key: e4i.key, action: "refresh"});
                var pk0x = e4i.data.pid, cy5D = this.kq8i(e4i.key)
            }, onmessage: function () {
                var mv9m = {502: "歌曲已存在！", 505: "歌单已满！"};
                return function (cm5r) {
                    setTimeout(function () {
                        m4q.Z4d.L4P({tip: mv9m[cm5r] || "添加失败，请稍后再试！", type: 2})
                    }, 0)
                }
            }()
        }, "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks", filter: function (e4i) {
                var j4n = e4i.data;
                e4i.ext = j4n.trackIds;
                j4n.trackIds = JSON.stringify(j4n.trackIds);
                j4n.op = "del"
            }, format: function (Q4U, e4i) {
                var nu9l = this.sM1x.eH6B(e4i.data.pid);
                k4o.bd4h(e4i.ext, function (C4G) {
                    this.buf9W({id: C4G, key: "track_playlist-" + e4i.data.pid}, !0);
                    if (!!nu9l) nu9l.trackCount = Math.max(0, nu9l.trackCount - 1)
                }, this);
                h4l.z4D(q4u.ig8Y, "itemchange", {data: nu9l || {}, cmd: "del"});
                return null
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.xc2x, "listchange", {key: e4i.key, action: "refresh"})
            }, onmessage: function (cm5r) {
                l4p.bnQ7J({text: "歌曲删除失败！"})
            }
        }, "track_program-list": {
            url: "/api/dj/program/detail", format: function (Q4U, e4i) {
                return this.bQa4e.EH5M(Q4U.program).songs
            }, onerror: "onlisterror"
        }, "track_listen_record-list": {
            url: "/api/v1/play/record", format: function (Q4U, e4i) {
                var i4m = [];
                if (e4i.data.type == -1) {
                    if (Q4U.weekData && Q4U.weekData.length) {
                        e4i.data.type = 1
                    } else {
                        e4i.data.type = 0
                    }
                }
                if (e4i.data.type == 1) {
                    i4m = this.bPZ4d(Q4U.weekData)
                } else {
                    i4m = this.bPZ4d(Q4U.allData)
                }
                return i4m
            }, onerror: "onlisterror"
        }, "track_day-list": {
            url: "/api/v2/discovery/recommend/songs", format: function (Q4U, e4i) {
                var nI9z = [], i4m = Q4U.recommend || [];
                k4o.bd4h(i4m, function (bj4n, r4v) {
                    nI9z.push({
                        action: "recommendimpress",
                        json: {alg: bj4n.alg, scene: "user-song", position: r4v, id: bj4n.id}
                    })
                });
                this.kI8A.VC1x(nI9z);
                e4i.limit = i4m.length;
                return i4m
            }, onerror: "onlisterror"
        }, "track_lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            }, format: function (o4s, e4i) {
                return o4s
            }, onload: "onlyricload", onerror: "onlyricerror"
        }
    });
    q4u.xc2x = NEJ.C();
    b3x = q4u.xc2x.O4S(q4u.hG7z);
    b3x.cx5C = function () {
        this.cD6x();
        this.sM1x = q4u.ig8Y.A4E();
        this.bQa4e = q4u.qk0x.A4E();
        this.kI8A = q4u.hR8J.A4E()
    };
    b3x.bPZ4d = function (i4m) {
        var o4s = [], fo7h = 0;
        k4o.bd4h(i4m, function (p4t, r4v) {
            var bj4n = l4p.Fd5i(p4t.song);
            if (r4v == 0) {
                fo7h = p4t.score
            }
            bj4n.max = fo7h;
            bj4n.playCount = p4t.playCount;
            bj4n.score = p4t.score;
            o4s.push(bj4n)
        });
        return o4s
    };
    I4M.fJ7C.A4E({element: q4u.xc2x, event: ["listchange"]})
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, cW6Q = c4g("nm.pc");
    var bpL8D = {playlist: "A_PL_0_", dj: "A_DJ_1_", program: "A_DJ_1_", album: "R_AL_3_", song: "R_SO_4_"};
    var rE1x = function (bS4W) {
        var zg3x = "orpheus://orpheus";
        if (GEnvType == "local") zg3x = "http://igame.163.com";
        window.top.postMessage(JSON.stringify(bS4W), zg3x)
    };
    var cpT4X = function (mg9X) {
        var kN8F = "http://" + location.host + "/",
            TU1x = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
            dN6H = TU1x.exec(mg9X);
        if (!dN6H) return cpR4V(mg9X);
        var gl7e = dN6H[2], hr7k = dN6H[3], dn6h = dN6H[4] || "", jj8b = "";
        switch (gl7e) {
            case"album":
                jj8b = "#/m/album/comment/?rid=" + bpL8D[gl7e] + hr7k + "&id=" + hr7k;
                break;
            case"playlist":
                jj8b = "#/m/playlist/comment/?rid=" + bpL8D[gl7e] + hr7k + "&id=" + hr7k;
                break;
            case"song":
            case"dj":
            case"program":
                jj8b = "#/m/song?rid=" + bpL8D[gl7e] + hr7k;
                break;
            case"event":
                jj8b = "#/m/friend/event/?id=" + hr7k + "&uid=" + dn6h;
                break;
            case"user/home":
                jj8b = "#/m/personal/?uid=" + hr7k;
                break;
            case"mv":
                jj8b = "#/m2/mv/?id=" + hr7k;
                break;
            case"activity":
                jj8b = "#/m/friend/activity?id=" + hr7k;
                break;
            case"video":
                jj8b = "#/m2/mv/?id=" + hr7k + "&type=1";
                break;
            default:
                jj8b = "#/m/" + gl7e + "/?id=" + hr7k
        }
        return kN8F + jj8b
    };
    var cpR4V = function (mg9X) {
        var cpO4S = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dN6H = cpO4S.exec(mg9X);
        if (dN6H) return "http://v.youku.com/v_show/id_" + dN6H[1];
        return mg9X
    };
    cW6Q.ej6d = function (gl7e, hr7k) {
        rE1x({name: "play", args: {type: gl7e, id: hr7k}})
    };
    cW6Q.fC7v = function () {
        rE1x({name: "pause"})
    };
    cW6Q.Cr4v = function (mg9X) {
        rE1x({name: "open", args: {link: cpT4X(mg9X)}})
    };
    cW6Q.lj9a = function (gl7e, hr7k) {
        rE1x({name: "share", args: {type: gl7e, id: hr7k}})
    };
    cW6Q.bPX4b = function (gl7e, hr7k) {
        rE1x({name: "comment", args: {type: gl7e, id: hr7k}})
    };
    cW6Q.cpM4Q = function () {
        rE1x({name: "init"})
    };
    cW6Q.TP1x = function (ci5n) {
        rE1x({name: "setHeight", args: {height: ci5n}})
    };
    cW6Q.jv8n = function (bH4L, X4b) {
        rE1x({name: "toast", args: {message: bH4L || "", state: X4b}})
    };
    cW6Q.TO1x = function (mg9X) {
        rE1x({name: "login", args: {link: mg9X}})
    };
    cW6Q.bPW4a = function (Cs4w) {
        rE1x({name: "topbar", args: {show: !!Cs4w}})
    };
    cW6Q.cpG4K = function (by4C) {
        rE1x({name: "refreshtopbar", args: {info: by4C}})
    };
    cW6Q.cpC4G = function (br4v, r4v) {
        rE1x({name: "big", args: {arr: br4v, index: r4v}})
    };
    cW6Q.JU6O = function (cw5B) {
        rE1x({name: "download", args: {img: cw5B}})
    }
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++) if (f.charAt(c) == g[a]) {
                    b.push(a.toString(16));
                    break
                }
            }
            return decodeURIComponent(b.join(""))
        }
    }

    var k = (new J).d, d = (new J).d, e = (new J).d, f = (new J).d, g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15], l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h) for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]); else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d,
                        f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74], e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g); else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g); else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]); else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++) if (h.charAt(d) == b[27]) if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]); else throw Error(b[146]); else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23], g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {
                        }
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }

                        var d = [c[21], c[141], B[6]], l = [], f = c[139], e = b[327], g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]), g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null, h = null, d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {
                        }
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {
                        }
                        try {
                            d.push(e(a, h))
                        } catch (k) {
                        }
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76], l = b[240], g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](), X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]), d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]), d = h[B[7]](b[354]), f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [], f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b) if (z && b.forEach === z) b.forEach(h, void 0); else if (b.length === +b.length) for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++) ; else for (c in b) if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }

                    var z = Array.prototype.forEach, I = Array.prototype.map,
                        n = {e: M, j: !0, i: !0, h: !0, b: !0, a: !0};
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = [], l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88], d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]), p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a:{
                        if (!r(q)) for (h = a[15]; h < q.length; h++) {
                            var d = q[h];
                            if (d.g && !Ra(d)) {
                                h = d;
                                break a
                            }
                        }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta, f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]], e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++) if (h.hasOwnProperty(d[f])) {
                            var g = b[29] + d[f] + b[262], k;
                            k = b[0] + h[d[f]];
                            k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                            e += g + k + b[191]
                        }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15])) for (var c = a[15]; c < K.length; c++) {
                        var d = K[c];
                        (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                    }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0, t = {v: b[227]}, l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({b: Xa, a: Ya})).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t), t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v, y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y), p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301], z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p), p = na(p, g(y)), E = p = g(p), I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F); else {
                            var n = A.length, J = a[15], J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null; else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null; else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p), ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null; else if (null == D) ia = w; else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E), ja = f(xa), ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null; else if (G.length == a[15]) ka = b[0]; else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;) if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya; else {
                                    u.push(k(G, R, G.length - R));
                                    break
                                }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({ec: b[43], em: ga.message}), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }

                m.prototype = {
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0, Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]], y = window[c[6]], N = a[16], T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158], L = a[158], ha = a[23], va = a[23], d = function (b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    }, Za = b[345], S = b[299], V = c[100], fa = a[91], ea = b[275], Ta = ea.length, sa = a[444],
                    ta = a[396], Ya = !1, Xa = !1, O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56], A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A), pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(), K = function (c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1; else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () {
})();
(function () {
    var bPO4S;
    var uE2x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cpt4x = 0;
    var bPM4Q = 0;
    var bPL4P = 1;
    var bPK4O = 0;
    var bsi8a = "";
    var bPJ4N = "";
    var bPI4M = "";
    var WF2x = "";
    var WH2x = "";
    var bsB8t = "";
    var bPH4L = 0;
    var bPG4K = "";
    var KG7z = "";
    var GI5N = 0;
    var bsP8H = ntes_get_domain();
    var bsQ8I = null;
    var cEh8Z = "//analytics.163.com";
    var cpi4m = function () {
    };

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bsP8H
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bsP8H
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bsP8H
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "", n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {
                    }
                }
            }
        }
        return f
    }

    var cph4l = 0;
    var TD1x = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * TD1x))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << TD1x) - 1;
        for (var b = 0; b < d.length * TD1x; b += TD1x) {
            c[b >> 5] |= (d.charCodeAt(b / TD1x) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = cph4l ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        WF2x = "-";
        bsB8t = "-";
        WH2x = "-";
        var c = window.self, b = window.screen, a = window.navigator;
        if (c.screen) {
            WF2x = b.width + "x" + b.height;
            bsB8t = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                WF2x = f.width + "x" + f.height
            }
        }
        if (a.language) {
            WH2x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                WH2x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bPH4L = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cEi8a(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || cpi4m;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        };
        a.onerror = function () {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bPO4S;
        bsi8a = escape(a || document.location);
        bPJ4N = escape(m || document.title);
        bPI4M = l === true ? "" : escape(l || document.referrer);
        bPG4K = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bsQ8I == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bsQ8I = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bsi8a.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bsQ8I) {
                uE2x = fetch_visitor_hash();
                bPM4Q = 1;
                ntes_set_cookie_long("_ntes_nnid", uE2x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uE2x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            uE2x = h.substr(0, o);
            GI5N = h.substr(o + 1, p - o - 1);
            if (GI5N == 0) {
                GI5N = (new Date).getTime();
                f = true
            }
            if (!uE2x) {
                uE2x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", uE2x + "," + GI5N);
                ntes_set_cookie_long("_ntes_nuid", uE2x)
            }
            if (GI5N != 0 && b - GI5N > 365 * 86400 * 1e3) {
                GI5N = 0;
                ntes_set_cookie_long("_ntes_nnid", uE2x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uE2x)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q), r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }

        KG7z = c("P_INFO", "P_OINFO");
        KG7z = KG7z ? KG7z.substr(0, KG7z.indexOf("|")) : "";
        bPK4O = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", uE2x, "&_nvtm=", cpt4x, "&_nvsf=", bPL4P, "&_nvfi=", bPM4Q, "&_nlag=", WH2x, "&_nlmf=", bPH4L, "&_nres=", WF2x, "&_nscd=", bsB8t, "&_nstm=", bPK4O, "&_nurl=", bsi8a, "&_ntit=", bPJ4N, "&_nref=", bPI4M, "&_nfla=", bPG4K, "&_nssn=", KG7z, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bPL4P = 0;
        neteaseTracker.callback = null
    }

    bPO4S = "iad";
    neteaseTracker()
})();
(function () {
})();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {}, l = d.lib = {}, s = function () {
    }, t = l.Base = {
        extend: function (a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function () {
                c.$super.init.apply(this, arguments)
            });
            c.init.prototype = c;
            c.$super = this;
            return c
        }, create: function () {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        }, init: function () {
        }, mixIn: function (a) {
            for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        }, clone: function () {
            return this.init.prototype.extend(this)
        }
    }, r = l.WordArray = t.extend({
        init: function (a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c : 4 * a.length
        }, toString: function (a) {
            return (a || v).stringify(this)
        }, concat: function (a) {
            var c = this.words, e = a.words, j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4); else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2]; else c.push.apply(c, e);
            this.sigBytes += a;
            return this
        }, clamp: function () {
            var a = this.words, c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        }, clone: function () {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        }, random: function (a) {
            for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
            return new r.init(c, a)
        }
    }), w = d.enc = {}, v = w.Hex = {
        stringify: function (a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        }, parse: function (a) {
            for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e, c / 2)
        }
    }, b = w.Latin1 = {
        stringify: function (a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        }, parse: function (a) {
            for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e, c)
        }
    }, x = w.Utf8 = {
        stringify: function (a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch (c) {
                throw Error("Malformed UTF-8 data")
            }
        }, parse: function (a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    }, q = l.BufferedBlockAlgorithm = t.extend({
        reset: function () {
            this.j4n = new r.init;
            this.bPA4E = 0
        }, WM2x: function (a) {
            "string" == typeof a && (a = x.parse(a));
            this.j4n.concat(a);
            this.bPA4E += a.sigBytes
        }, CC4G: function (a) {
            var c = this.j4n, e = c.words, j = c.sigBytes, k = this.blockSize, b = j / (4 * k),
                b = a ? u.ceil(b) : u.max((b | 0) - this.bPE4I, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k) this.bPz4D(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q, j)
        }, clone: function () {
            var a = t.clone.call(this);
            a.j4n = this.j4n.clone();
            return a
        }, bPE4I: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(), init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset: function () {
            q.reset.call(this);
            this.btK9B()
        }, update: function (a) {
            this.WM2x(a);
            this.CC4G();
            return this
        }, finalize: function (a) {
            a && this.WM2x(a);
            return this.WV2x()
        }, blockSize: 16, btu9l: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        }, coX4b: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS, p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words, p = d.sigBytes, t = this.bz4D;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
            return d.join("")
        }, parse: function (d) {
            var l = d.length, s = this.bz4D, t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        }, bz4D: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        btK9B: function () {
            this.dO6I = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        }, bPz4D: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a, e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dO6I.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5],
                t = q[n + 6], w = q[n + 7], v = q[n + 8], A = q[n + 9], B = q[n + 10], C = q[n + 11], u = q[n + 12],
                D = q[n + 13], E = q[n + 14], x = q[n + 15], f = a[0], m = a[1], g = a[2], h = a[3],
                f = p(f, m, g, h, c, 7, b[0]), h = p(h, f, m, g, e, 12, b[1]), g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]), f = p(f, m, g, h, z, 7, b[4]), h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]), m = p(m, g, h, f, w, 22, b[7]), f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]), g = p(g, h, f, m, B, 17, b[10]), m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]), h = p(h, f, m, g, D, 12, b[13]), g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]), f = d(f, m, g, h, e, 5, b[16]), h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]), m = d(m, g, h, f, c, 20, b[19]), f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]), g = d(g, h, f, m, x, 14, b[22]), m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]), h = d(h, f, m, g, E, 9, b[25]), g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]), f = d(f, m, g, h, D, 5, b[28]), h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]), m = d(m, g, h, f, u, 20, b[31]), f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]), g = l(g, h, f, m, C, 16, b[34]), m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]), h = l(h, f, m, g, z, 11, b[37]), g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]), f = l(f, m, g, h, D, 4, b[40]), h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]), m = l(m, g, h, f, t, 23, b[43]), f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]), g = l(g, h, f, m, x, 16, b[46]), m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]), h = s(h, f, m, g, w, 10, b[49]), g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]), f = s(f, m, g, h, u, 6, b[52]), h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]), m = s(m, g, h, f, e, 21, b[55]), f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]), g = s(g, h, f, m, t, 15, b[58]), m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]), h = s(h, f, m, g, C, 10, b[61]), g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        }, WV2x: function () {
            var b = this.j4n, n = b.words, a = 8 * this.bPA4E, c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.CC4G();
            b = this.dO6I;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        }, clone: function () {
            var b = v.clone.call(this);
            b.dO6I = this.dO6I.clone();
            return b
        }
    });
    t.MD5 = v.btu9l(r);
    t.HmacMD5 = v.coX4b(r)
})(Math);
(function () {
    var u = CryptoJS, p = u.lib, d = p.Base, l = p.WordArray, p = u.algo, s = p.EvpKDF = d.extend({
        cfg: d.extend({keySize: 4, hasher: p.MD5, iterations: 1}), init: function (d) {
            this.cfg = this.cfg.extend(d)
        }, compute: function (d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS, d = p.lib, l = d.Base, s = d.WordArray, t = d.BufferedBlockAlgorithm, r = p.enc.Base64,
        w = p.algo.EvpKDF, v = d.Cipher = t.extend({
            cfg: l.extend(), createEncryptor: function (e, a) {
                return this.create(this.btQ9H, e, a)
            }, createDecryptor: function (e, a) {
                return this.create(this.coU3x, e, a)
            }, init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bPx4B = e;
                this.J4N = a;
                this.reset()
            }, reset: function () {
                t.reset.call(this);
                this.btK9B()
            }, process: function (e) {
                this.WM2x(e);
                return this.CC4G()
            }, finalize: function (e) {
                e && this.WM2x(e);
                return this.WV2x()
            }, keySize: 4, ivSize: 4, btQ9H: 1, coU3x: 2, btu9l: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    }, decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        WV2x: function () {
            return this.CC4G(!0)
        }, blockSize: 1
    });
    var b = p.mode = {}, x = function (e, a, b) {
        var c = this.bPv4z;
        c ? this.bPv4z = u : c = this.bPt4x;
        for (var d = 0; d < b; d++) e[a + d] ^= c[d]
    }, q = (d.BlockCipherMode = l.extend({
        createEncryptor: function (e, a) {
            return this.Encryptor.create(e, a)
        }, createDecryptor: function (e, a) {
            return this.Decryptor.create(e, a)
        }, init: function (e, a) {
            this.bPs4w = e;
            this.bPv4z = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bPs4w, c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bPt4x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bPs4w, c = b.blockSize, d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bPt4x = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        }, unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({mode: b, padding: q}), reset: function () {
            v.reset.call(this);
            var a = this.cfg, b = a.iv, a = a.mode;
            if (this.bPx4B == this.btQ9H) var c = a.createEncryptor; else c = a.createDecryptor, this.bPE4I = 1;
            this.fl7e = c.call(a, this, b && b.words)
        }, bPz4D: function (a, b) {
            this.fl7e.processBlock(a, b)
        }, WV2x: function () {
            var a = this.cfg.padding;
            if (this.bPx4B == this.btQ9H) {
                a.pad(this.j4n, this.blockSize);
                var b = this.CC4G(!0)
            } else b = this.CC4G(!0), a.unpad(b);
            return b
        }, blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function (a) {
            this.mixIn(a)
        }, toString: function (a) {
            return (a || this.formatter).stringify(this)
        }
    }), b = (p.format = {}).OpenSSL = {
        stringify: function (a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        }, parse: function (a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({ciphertext: a, salt: c})
        }
    }, a = d.SerializableCipher = l.extend({
        cfg: l.extend({format: b}), encrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        }, decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.bdN4R(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        }, bdN4R: function (a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    }), p = (p.kdf = {}).OpenSSL = {
        execute: function (a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({keySize: b + c}).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({key: a, iv: c, salt: d})
        }
    }, c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({kdf: p}), encrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        }, decrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.bdN4R(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4, k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e], F = a[z], G = a[F], y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], d = d.AES = p.extend({
        btK9B: function () {
            for (var a = this.J4N, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cos3x = d + 6) + 1), e = this.coq3x = [], j = 0; j < a; j++) if (j < d) e[j] = c[j]; else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k
            }
            c = this.cob3x = [];
            for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        }, encryptBlock: function (a, b) {
            this.bPn4r(a, b, this.coq3x, t, r, w, v, l)
        }, decryptBlock: function (a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bPn4r(a, c, this.cob3x, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        }, bPn4r: function (a, b, c, d, e, j, l, f) {
            for (var m = this.cos3x, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        }, keySize: 8
    });
    u.AES = p.btu9l(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e) for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);) ++c;
    if (c == a.length) d = new BigInt; else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15, c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];) --b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c) if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);) ++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;) --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a; ;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b; ;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}

var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks,
    biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
!function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b), d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a), f = CryptoJS.AES.encrypt(e, c, {iv: d, mode: CryptoJS.mode.CBC});
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {}, i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }

    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c4g = NEJ.P, em6g = c4g("nej.g"), v4z = c4g("nej.j"), k4o = c4g("nej.u"), Tg1x = c4g("nm.x.ek");
    Tg1x.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Tg1x.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var c4g = NEJ.P, em6g = c4g("nej.g"), v4z = c4g("nej.j"), k4o = c4g("nej.u"), Tg1x = c4g("nm.x.ek"),
        l4p = c4g("nm.x");
    if (v4z.bn4r.redefine) return;
    window.GEnc = true;
    var buv9m = function (coa3x) {
        var o4s = [];
        k4o.bd4h(coa3x, function (cnX3x) {
            o4s.push(Tg1x.emj[cnX3x])
        });
        return o4s.join("")
    };
    var cnS3x = v4z.bn4r;
    v4z.bn4r = function (Y4c, e4i) {
        var j4n = {}, e4i = NEJ.X({}, e4i), lE9v = Y4c.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(Y4c) && !(e4i.headers && e4i.headers[em6g.yg3x] == em6g.EK5P) && !e4i.noEnc) {
            if (lE9v != -1) {
                j4n = k4o.hv7o(Y4c.substring(lE9v + 1));
                Y4c = Y4c.substring(0, lE9v)
            }
            if (e4i.query) {
                j4n = NEJ.X(j4n, k4o.fG7z(e4i.query) ? k4o.hv7o(e4i.query) : e4i.query)
            }
            if (e4i.data) {
                j4n = NEJ.X(j4n, k4o.fG7z(e4i.data) ? k4o.hv7o(e4i.data) : e4i.data)
            }
            j4n["csrf_token"] = v4z.gy7r("__csrf");
            Y4c = Y4c.replace("api", "weapi");
            e4i.method = "post";
            delete e4i.query;
            var bPc4g = window.asrsea(JSON.stringify(j4n), buv9m(["流泪", "强"]), buv9m(Tg1x.md), buv9m(["爱心", "女孩", "惊恐", "大笑"]));
            e4i.data = k4o.cE6y({params: bPc4g.encText, encSecKey: bPc4g.encSecKey})
        }
        cnS3x(Y4c, e4i)
    };
    v4z.bn4r.redefine = true
})();
(function () {
    window.setTimeout(function () {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
        var getNode = function (tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue) return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0, ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow") return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href) canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL) canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
})();
(function () {
})();
(function () {
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), dv6p = c4g("nej.p"), k4o = c4g("nej.u"), h4l = c4g("nej.v"),
        v4z = c4g("nej.j"), dC6w = c4g("nm.u"), l4p = c4g("nm.x"), q4u = c4g("nm.d"), m4q = c4g("nm.l"),
        cW6Q = c4g("nm.pc"), buT9K = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png", j4n = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        }, cnO3x = function () {
            if (h4l && h4l.z4D) {
                h4l.dispatchEventalias = h4l.z4D
            }
        };
    cnO3x();
    l4p.bvb9S = function (bN4R) {
        if (!bN4R || bN4R.copyrightId === undefined || !!bN4R.program) return false;
        if (window.GAbroad) {
            bN4R.fee = 0;
            return true
        }
        if (bN4R.status < 0) return true;
        var Tb1x;
        if (typeof GCopyrights !== "undefined") Tb1x = GCopyrights;
        try {
            if (!Tb1x && !!top.GCopyrights) Tb1x = top.GCopyrights
        } catch (e) {
        }
        if (Tb1x) {
            var r4v = k4o.di6c(Tb1x, bN4R.copyrightId);
            if (r4v >= 0) return true
        }
        return false
    };
    l4p.bvg9X = function () {
        var CO4S = /^\/m\/(song|album|artist|playlist|dj|search)\?/, xd2x = {
            2: "artist",
            13: "playlist",
            17: "dj",
            19: "album",
            18: "song",
            31: "toplist",
            32: "searchsong",
            33: "searchlyric",
            34: "event",
            70: "djradio",
            24: "day",
            50: "record"
        }, cnE3x = {
            song: "单曲",
            album: "专辑",
            artist: "歌手",
            playlist: "歌单",
            dj: "电台节目",
            searchsong: "单曲搜索",
            searchlyric: "歌词搜索",
            toplist: "榜单",
            event: "动态",
            djradio: "电台",
            day: "每日歌曲推荐",
            record: "听歌排行榜"
        };
        var cnD3x = function (J4N, j4n, SY1x) {
            switch (J4N) {
                case"event":
                    j4n = j4n.split("|");
                    return "/event?id=" + j4n[0] + "&uid=" + j4n[1];
                case"searchsong":
                case"searchlyric":
                    var u4y = J4N == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j4n) + "&type=" + u4y;
                case"toplist":
                    return "/discover/toplist?id=" + j4n + "&_hash=songlist-" + SY1x;
                case"day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + SY1x;
                    ;
                case"record":
                    j4n = j4n.split("|");
                    return "/user/songs/rank?id=" + j4n[0] + "&cat=" + j4n[1];
                    break;
                default:
                    return "/" + J4N + "?id=" + j4n + "&_hash=songlist-" + SY1x
            }
        };
        return function (ea6U, SY1x) {
            if (!ea6U) return null;
            var Kf7Y = ea6U.fid || (ea6U.type != 18 ? ea6U.type : null), bvy9p = ea6U.fdata || ea6U.rid,
                bOU4Y = ea6U.page || ea6U.fhref;
            var J4N = xd2x[Kf7Y];
            if (!J4N) {
                var xZ3x = (bOU4Y || "").match(CO4S);
                if (xZ3x) J4N = xZ3x[1]
            }
            if (!J4N) return null;
            return {title: cnE3x[J4N], link: !xd2x[Kf7Y] ? bOU4Y : cnD3x(J4N, bvy9p, SY1x), fid: Kf7Y, fdata: bvy9p}
        }
    }();
    l4p.Xf2x = function (kg8Y) {
        var dp6j = kg8Y;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dp6j = GUser;
        return dp6j
    };
    l4p.gW7P = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l4p.KN7G = function () {
        var CO4S = /#(.*?)$/;
        return function (gx7q) {
            var jA8s = gx7q === false ? location : top.location;
            return CO4S.test(jA8s.href) ? RegExp.$1 : ""
        }
    }();
    l4p.CS4W = function () {
        var CT4X = a2x.dg6a("audio"), cnm3x = CT4X.canPlayType && CT4X.canPlayType("audio/mpeg");
        if (cnm3x) return 2;
        var cng3x = l4p.bwp9g().supported;
        if (cng3x) return 1;
        return 0
    };
    l4p.bwp9g = function () {
        var gw7p, bws9j = !1, bwt9k = "";
        if (dv6p.ds6m.browser == "ie") {
            try {
                gw7p = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gw7p = null
            }
            if (gw7p) {
                bws9j = !0;
                bwt9k = gw7p.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gw7p = navigator.plugins["Shockwave Flash"];
                if (gw7p) {
                    bws9j = !0;
                    bwt9k = gw7p.description
                }
            }
        }
        return {supported: bws9j, version: bwt9k}
    };
    l4p.ru1x = function () {
        return "网易云音乐"
    };
    l4p.cnf3x = function () {
        return j4n
    };
    l4p.bOK4O = function (cG6A) {
        var C4G = j4n[cG6A];
        return C4G == null ? "" : buT9K.replace("{ID}", C4G)
    };
    l4p.xj2x = function (bo4s, dY6S, CU4Y) {
        if (!bo4s) return "";
        if (!!CU4Y) {
            bo4s = l4p.cnb3x(bo4s)
        }
        return l4p.Xj2x(l4p.cna3x(bo4s, dY6S))
    };
    l4p.Xq2x = function () {
        var TU1x = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }, beV5a = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }, cmZ3x = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }, cmY3x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cmT3x = function (dH6B, bfr5w) {
            dH6B = KT7M(dH6B);
            if (!!bfr5w) {
                dH6B = dH6B.replace(TU1x.MLINE, "\n\n").replace(TU1x.LING, "</br>")
            }
            dH6B = l4p.Xj2x(dH6B);
            return dH6B
        };
        var KT7M = function (bo4s) {
            return k4o.Fl5q(cmZ3x, bo4s)
        };
        return function (dH6B, e4i, dB6v) {
            e4i = e4i || {};
            dB6v = dB6v || {};
            dB6v.actHash = {};
            var cmO3x = !!e4i.parseLink, cmN3x = !!e4i.parseAct, cmM3x = e4i.linkTpl || beV5a.LINK,
                cmL3x = e4i.atTpl || beV5a.AT, cmK3x = e4i.atUrl || "/user/home?nickname=",
                cmI3x = e4i.actTpl || beV5a.ACT, bfr5w = !!e4i.keepSpace, bfJ5O = e4i.linkKlass || "s-fc7";
            cEK8C = e4i.actBiJson || "";
            if (!dH6B) return "";
            dH6B = dH6B.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lF9w = cmY3x[cmO3x + 2 * cmN3x], dh6b = TU1x[lF9w], br4v = null, mc9T = null, gt7m = 0, cEL8D = "",
                cEM8E = "";
            var pS0x = [];
            dh6b.lastIndex = 0;
            while (br4v = dh6b.exec(dH6B)) {
                var dN6H = {html: "", before: br4v.index - 1, after: br4v.index + br4v[0].length};
                if (br4v[1]) {
                    var mc9T = br4v[2].replace(/[^\x00-\xff]/g, "**");
                    if (mc9T.length < 4 || mc9T.length > 32) {
                    } else {
                        var Ea5f = a2x.es6m(cmL3x);
                        dN6H.html = a2x.bZ5e(Ea5f, {
                            value: KT7M(br4v[2]),
                            url: encodeURI(cmK3x + br4v[2]),
                            klass: bfJ5O
                        });
                        pS0x.push(dN6H)
                    }
                } else if (br4v.length > 8 && br4v[4]) {
                    var Ea5f = a2x.es6m(cmM3x);
                    dN6H.html = a2x.bZ5e(Ea5f, {value: KT7M(br4v[4]), url: br4v[4], klass: bfJ5O});
                    pS0x.push(dN6H)
                } else {
                    var bOB4F = lF9w == "ACT_NOLINK" ? 4 : 9;
                    var Ea5f = a2x.es6m(cmI3x);
                    dN6H.html = a2x.bZ5e(Ea5f, {value: KT7M(br4v[bOB4F]), klass: bfJ5O});
                    pS0x.push(dN6H);
                    dB6v.actHash[br4v[bOB4F].slice(1, -1)] = true
                }
            }
            var bgd5i = pS0x.length, kg8Y = {before: dH6B.length - 1, after: 0}, bge5j = "";
            for (var i = 0; i <= bgd5i; i++) {
                var hz7s, fR7K;
                hz7s = (pS0x[i - 1] || kg8Y).after;
                fR7K = (pS0x[i] || kg8Y).before;
                if (fR7K >= hz7s && hz7s >= 0 && fR7K <= dH6B.length - 1) {
                    bge5j += cmT3x(dH6B.substring(hz7s, fR7K + 1), bfr5w)
                }
                if (pS0x[i]) {
                    bge5j += pS0x[i].html
                }
            }
            return bge5j
        }
    }();
    l4p.cnb3x = function () {
        var dh6b = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bo4s) {
            return (bo4s || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(dh6b, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l4p.cna3x = function () {
        var dh6b = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var et6n = function (mc9T, dY6S) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(mc9T) + '" class="' + (dY6S || "") + '">@' + mc9T + "</a>"
        };
        return function (bo4s, dY6S) {
            return (bo4s || "").replace(dh6b, function ($0, $1) {
                return et6n($1, dY6S)
            })
        }
    }();
    l4p.Xj2x = function () {
        var dh6b = /\[(.*?)\]/g;
        return function (bo4s) {
            return (bo4s || "").replace(dh6b, function ($1, $2) {
                var Y4c = l4p.bOK4O($2);
                return !Y4c ? $1 : '<img src="' + Y4c + '"/>'
            })
        }
    }();
    l4p.Bd4h = function (F4J, dY6S) {
        a2x.bE4I(F4J, dY6S) ? a2x.x4B(F4J, dY6S) : a2x.y4C(F4J, dY6S)
    };
    l4p.KW7P = function (cN6H, kN8F) {
        cN6H = a2x.B4F(cN6H);
        kN8F = a2x.B4F(kN8F);
        if (!cN6H || !kN8F) return !1;
        for (kN8F = kN8F.parentNode; !!kN8F && kN8F != cN6H; kN8F = kN8F.parentNode) ;
        return kN8F == cN6H
    };
    l4p.lg9X = function () {
        var bOA4E = function (gR7K) {
            return (gR7K < 10 ? "0" : "") + gR7K
        };
        return function (kO8G) {
            kO8G = parseInt(kO8G) || 0;
            if (!kO8G) return "00:00";
            var yb3x = Math.floor(kO8G % 60), cme3x = Math.floor(kO8G / 60);
            return bOA4E(cme3x) + ":" + bOA4E(yb3x)
        }
    }();
    l4p.zw3x = function (fO7H, xr2x) {
        if (!fO7H || fO7H.length == 0) return "";
        xr2x = xr2x || "/";
        var br4v = [];
        for (var i = fO7H.length - 1; i >= 0; i--) {
            br4v.unshift(fO7H[i].name)
        }
        return br4v.join(xr2x)
    };
    l4p.rV1x = function () {
        var Sk0x = function (ic8U, dY6S, cN6H, XU2x) {
            var et6n = XU2x ? l4p.bgB5G : k4o.dG6A;
            if (!ic8U || !ic8U.name) return "";
            if (!ic8U.id) return '<span class="' + dY6S + '">' + et6n(ic8U.name) + "</span>";
            return "<a" + (cN6H ? ' target="_blank"' : "") + ' class="' + dY6S + '" href="/artist?id=' + ic8U.id + '" hidefocus="true">' + et6n(ic8U.name) + "</a>"
        };
        return function (fO7H, V4Z, xr2x, cN6H, bOy4C, XU2x) {
            if (!fO7H || !fO7H.length) return "";
            xr2x = xr2x || "/";
            V4Z = V4Z || "";
            Lc7V = "";
            var el6f = [];
            for (var i = 0, i4m = [], tf1x = [], fH7A; i < fO7H.length; ++i) {
                el6f.push(fO7H[i].name);
                if (!fO7H[i] || fO7H[i].id <= 0) {
                    tf1x.push(fO7H[i]);
                    continue
                }
                if (k4o.gG7z(V4Z)) {
                    fH7A = V4Z(fO7H[i])
                } else {
                    fH7A = Sk0x(fO7H[i], V4Z, cN6H, XU2x)
                }
                if (fH7A && bOy4C && fO7H[i].tns && fO7H[i].tns.length > 0) {
                    Lc7V = k4o.dG6A(fO7H[i].tns[0]);
                    fH7A += '<span class="s-fc8" title="' + Lc7V + '"> - (' + Lc7V + ")</span>"
                }
                !!fH7A && i4m.push(fH7A)
            }
            for (var i = 0, fH7A; i < tf1x.length; ++i) {
                if (k4o.gG7z(V4Z)) {
                    fH7A = V4Z(tf1x[i])
                } else {
                    fH7A = Sk0x(tf1x[i], V4Z, cN6H, XU2x)
                }
                if (fH7A && bOy4C && tf1x[i].tns && tf1x[i].tns.length > 0) {
                    Lc7V = k4o.dG6A(tf1x[i].tns[0]);
                    fH7A += '<span class="s-fc8" title="' + Lc7V + '"> - (' + Lc7V + ")</span>"
                }
                !!fH7A && i4m.push(fH7A)
            }
            return '<span title="' + el6f.join(xr2x) + '">' + i4m.join(xr2x) + "</span>"
        }
    }();
    l4p.xS3x = function (fz7s, pv0x) {
        pv0x = pv0x || "86";
        return !!fz7s && (pv0x == "86" ? /^\d{11}$/ : /^\d+$/).test(fz7s)
    };
    l4p.cEN8F = function (fz7s) {
        if (!l4p.xS3x(fz7s)) return fz7s;
        return fz7s.substring(0, 3) + "****" + fz7s.substr(7)
    };
    l4p.jL8D = function () {
        var dh6b = /^\s+$/g;
        return function (ib8T) {
            return !ib8T || dh6b.test(ib8T)
        }
    }();
    l4p.Sh0x = function () {
        var bhm5r = /[^\x00-\xfff]/g;
        return function (ib8T) {
            var clW3x = ib8T.match(bhm5r) || [], dr6l = clW3x.length;
            return ib8T.length + dr6l
        }
    }();
    l4p.CZ4d = function () {
        var bhm5r = /[^\x00-\xfff]/;
        return function (ib8T, eE6y) {
            for (var i = 0, len = ib8T.length; i < len && eE6y > 0; i++) {
                if (bhm5r.test(ib8T.charAt(i))) {
                    eE6y -= 2;
                    if (eE6y < 0) {
                        break
                    }
                } else {
                    eE6y -= 1
                }
            }
            return ib8T.substring(0, i)
        }
    }();
    l4p.Dc4g = function (ib8T, eE6y, Tf1x) {
        eE6y = eE6y || 10;
        Tf1x = Tf1x || nej.p.ds6m.engine == "trident" && parseInt(nej.p.ds6m.release) < 5;
        if (Tf1x && l4p.Sh0x(ib8T) > eE6y) {
            return l4p.CZ4d(ib8T, eE6y) + "..."
        } else {
            return ib8T
        }
    };
    l4p.bOj4n = function (f4j) {
        return f4j === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f4j.type || f4j.href || ~f4j.tabIndex)
    };
    l4p.clK3x = function (d4h, cN6H) {
        if (!d4h || !cN6H) return !0;
        var f4j, u4y = d4h.type.toLowerCase();
        if (u4y == "mouseout") {
            f4j = d4h.relatedTarget || d4h.toElement
        } else if (u4y == "mouseover") {
            f4j = d4h.relatedTarget || d4h.fromElement
        }
        return !f4j || f4j !== cN6H && !l4p.KW7P(cN6H, f4j)
    };
    l4p.tN1x = function () {
        R4V = {};
        return function (f4j, dZ6T) {
            var C4G = a2x.lv9m(f4j), J4N = "hover-" + C4G;
            if (!dZ6T || !C4G || !!R4V[J4N]) return;
            R4V[J4N] = !0;
            h4l.s4w(C4G, "mouseover", function () {
                var bhw5B = a2x.H4L(f4j, "hshow") || [];
                var bhx5C = a2x.H4L(f4j, "icn-dislike") || [];
                a2x.y4C(C4G, "z-hover");
                a2x.ba4e(bhw5B[0], "display", "block");
                a2x.ba4e(bhx5C[0], "display", "block")
            });
            h4l.s4w(C4G, "mouseout", function () {
                var bhw5B = a2x.H4L(f4j, "hshow") || [];
                var bhx5C = a2x.H4L(f4j, "icn-dislike") || [];
                a2x.x4B(C4G, "z-hover");
                a2x.ba4e(bhw5B[0], "display", "none");
                a2x.ba4e(bhx5C[0], "display", "none")
            })
        }
    }();
    l4p.bOf4j = function () {
        var bz4D = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function (ib8T) {
            return k4o.Fl5q(bz4D, ib8T)
        }
    }();
    l4p.yI3x = function (bA4E) {
        if (k4o.GY6S(bA4E)) bA4E = bA4E.getTime();
        var eR6L = new Date, kj8b = eR6L.getTime() - bA4E;
        if (kj8b <= 6e4) return "刚刚";
        var nx9o = eR6L.getHours() * 36e5 + eR6L.getMinutes() * 6e4 + eR6L.getSeconds() * 1e3;
        if (kj8b <= nx9o) {
            if (kj8b < 36e5) {
                var EY5d = Math.floor(kj8b / 6e4);
                return EY5d + "分钟前"
            }
            return k4o.if8X(bA4E, "HH:mm")
        } else {
            if (kj8b < nx9o + 864e5) {
                return "昨天" + k4o.if8X(bA4E, "HH:mm")
            } else {
                var gI7B = eR6L.getFullYear(), Se0x = new Date(gI7B, 0, 1);
                var nx9o = eR6L.getTime() - Se0x.getTime();
                if (kj8b < nx9o) {
                    return k4o.if8X(bA4E, "M月d日 HH:mm")
                }
                return k4o.if8X(bA4E, "yyyy年M月d日")
            }
        }
    };
    l4p.clD2x = function (bA4E) {
        if (k4o.GY6S(bA4E)) bA4E = bA4E.getTime();
        var eR6L = new Date, kj8b = eR6L.getTime() - bA4E;
        var nx9o = eR6L.getHours() * 36e5 + eR6L.getMinutes() * 6e4 + eR6L.getSeconds() * 1e3;
        if (kj8b <= nx9o) {
            return "今天" + k4o.if8X(bA4E, "HH:mm")
        } else {
            if (kj8b < nx9o + 864e5) {
                return "昨天" + k4o.if8X(bA4E, "HH:mm")
            } else {
                return k4o.if8X(bA4E, "yy-MM-dd HH:mm")
            }
        }
    };
    l4p.clC2x = function (bA4E) {
        if (k4o.GY6S(bA4E)) bA4E = bA4E.getTime();
        var eR6L = new Date, kj8b = eR6L.getTime() - bA4E;
        if (kj8b <= 6e4) return "刚刚";
        var nx9o = eR6L.getHours() * 36e5 + eR6L.getMinutes() * 6e4 + eR6L.getSeconds() * 1e3;
        if (kj8b <= nx9o) {
            if (kj8b < 36e5) {
                var EY5d = Math.floor(kj8b / 6e4);
                return EY5d + "分钟前"
            }
            return k4o.if8X(bA4E, "HH:mm")
        } else {
            if (kj8b < nx9o + 864e5) {
                return "昨天" + k4o.if8X(bA4E, "HH:mm")
            } else if (kj8b < nx9o + 864e5 * 6) {
                var gI7B = eR6L.getFullYear(), Se0x = new Date(gI7B, 0, 1);
                var nx9o = eR6L.getTime() - Se0x.getTime();
                if (kj8b < nx9o) {
                    return k4o.if8X(bA4E, "M月d日 HH:mm")
                }
                return k4o.if8X(bA4E, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l4p.XX2x = function () {
        var dh6b = /\{(.*?)\}/gi;
        return function (or0x, j4n) {
            return (or0x || "").replace(dh6b, function ($1, $2) {
                var D4H = j4n[$2];
                return D4H == null ? $1 : D4H
            })
        }
    }();
    l4p.fe7X = function () {
        var bf4j = Array.prototype.slice.call(arguments, 0), or0x = bf4j.shift();
        if (or0x) {
            return or0x.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bf4j.length ? bf4j[$2] : $1
            })
        }
        return ""
    };
    l4p.Ld7W = function (i4m, dY6S, kb8T) {
        return "";
        kb8T = kb8T || " - ";
        if (i4m && i4m.length) {
            return kb8T + (!!dY6S ? '<span class="' + dY6S + '">' + i4m[0] + "</span>" : i4m[0])
        }
        return ""
    };
    l4p.bOe4i = function () {
        if (window.getSelection) {
            var sl1x = window.getSelection();
            if (sl1x && sl1x.focusNode && sl1x.focusNode.tagName) {
                var AY4c = a2x.dk6e(sl1x.focusNode);
                for (var i = 0, zh3x; i < AY4c.length; ++i) {
                    zh3x = AY4c[i].tagName;
                    if (!zh3x) continue;
                    zh3x = zh3x.toLowerCase();
                    if (zh3x == "textarea" || zh3x == "input") return !0
                }
            }
        } else if (document.selection) {
            var db6V = document.selection.createRange();
            if (db6V) {
                var f4j = db6V.parentElement();
                if (f4j && f4j.tagName) {
                    var zh3x = f4j.tagName.toLowerCase();
                    if (zh3x == "textarea" || zh3x == "input") return !0
                }
            }
        }
        return !1
    };
    l4p.Dd4h = function (fE7x) {
        if (/^[A-Z]\:\\/i.test(fE7x)) {
            fE7x = fE7x.split("\\")
        } else {
            fE7x = fE7x.split("/")
        }
        fE7x = fE7x[fE7x.length - 1];
        return fE7x
    };
    l4p.clx2x = function () {
        var Gk5p = [13, 17, 34, 19, 18, 21];
        return function (C4G) {
            var br4v = (C4G || "").split("_");
            return {type: Gk5p[br4v[2]] || -1, id: br4v[3] || ""}
        }
    }();
    l4p.bOb4f = function (gw7p) {
        if (!gw7p) {
            return true
        }
        for (var k in gw7p) {
            return false
        }
        return true
    };
    l4p.biv6p = function (dp6j) {
        if (!dp6j) {
            return ""
        }
        if (4 == dp6j.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp6j.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp6j.expertTags && dp6j.expertTags.length || !l4p.bOb4f(dp6j.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l4p.RY0x = function (hH7A) {
        if (!hH7A) return "";
        var dr6l = hH7A.length, ik8c = [];
        ik8c[0] = dr6l / 3 | 0;
        ik8c[1] = ik8c[0] + ((dr6l - ik8c[0]) / 2 | 0);
        return hH7A.substring(0, ik8c[0]) + hH7A.substring(ik8c[0], ik8c[1]).replace(/\d/g, "*") + hH7A.substring(ik8c[1], dr6l)
    };
    l4p.cEO8G = function (r4v, cy5D) {
        return (r4v % cy5D + cy5D) % cy5D
    };
    l4p.biG6A = function () {
        var Gk5p = {0: "playlist", 1: "program", 2: "event", 3: "album", 4: "song", 5: "mv", 6: "topic", 62: "video"};
        return function (C4G) {
            var br4v = (C4G || "").split("_"), o4s = {type: Gk5p[br4v[2]] || -1, id: br4v[3] || ""};
            if (o4s.type == "event") {
                o4s.uid = br4v[4] || "";
                return "/" + o4s.type + "?id=" + o4s.id + "&uid=" + o4s.uid
            }
            return "/" + o4s.type + "?id=" + o4s.id
        }
    }();
    l4p.biJ6D = function () {
        var Gk5p = {0: "歌单", 1: "电台节目", 2: "动态", 3: "专辑", 4: "单曲", 5: "MV", 6: "专栏文章", 62: "视频"};
        return function (C4G) {
            var br4v = (C4G || "").split("_");
            return Gk5p[br4v[2]] || "资源"
        }
    }();
    l4p.clu2x = function (bv4z) {
        var qs = bv4z.length > 0 ? bv4z.substring(1) : "", args = {}, items = qs.length ? qs.split("&") : [],
            item = null, name = null, value = null, i = 0, len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l4p.biM6G = function (nD9u, RU0x) {
        var Yj2x = 0, ex6r = new Array;
        k4o.bd4h(nD9u, function (Y4c, r4v) {
            var cw5B = a2x.dg6a("img");
            cw5B.src = Y4c;
            h4l.s4w(cw5B, "load", function (r4v, d4h) {
                ex6r[r4v] = 1;
                Yj2x++;
                if (Yj2x == nD9u.length) RU0x(nD9u, ex6r)
            }.g4k(this, r4v));
            h4l.s4w(cw5B, "error", function (d4h, r4v) {
                ex6r[r4v] = 0;
                Yj2x++;
                if (Yj2x == nD9u.length) RU0x(nD9u, ex6r)
            }.g4k(this, r4v))
        })
    };
    l4p.Lj7c = function (i4m, dV6P) {
        var o4s = [];
        k4o.bd4h(i4m, function (p4t, r4v, P4T) {
            o4s.push(dV6P(p4t, r4v, P4T))
        });
        return o4s
    };
    l4p.YY3x = function (i4m, dV6P, P4T) {
        var o4s = [];
        k4o.bd4h(i4m, function (p4t, r4v) {
            if (dV6P.call(P4T, p4t, r4v, i4m)) {
                o4s.push(p4t)
            }
        });
        return o4s
    };
    l4p.bOa4e = function (bo4s) {
        return k4o.dG6A((bo4s || "").replace(/\s{2,}/g, " ").trim())
    };
    l4p.biV6P = function (bj4n) {
        if (bj4n.transNames && bj4n.transNames.length) {
            return bj4n.transNames[0]
        } else if (bj4n.alias && bj4n.alias.length) {
            return bj4n.alias[0]
        }
    };
    l4p.biZ6T = function (Uo1x) {
        if (Uo1x) {
            return Uo1x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l4p.bjb6V = function (f4j) {
        var f4j = a2x.B4F(f4j), cG6A = f4j && f4j.getElementsByTagName("textarea")[0], J4N = a2x.t4x(f4j, "key"),
            bjd6X = a2x.t4x(f4j, "simple") == "1", clr2x = a2x.t4x(f4j, "pvnamed") == "1", clo2x = q4u.xc2x.gr7k();
        if (!(f4j && cG6A && J4N)) return;
        var YE2x, bjm6g, YM2x;
        YE2x = a2x.H4L(a2x.B4F("m-playlist"), "j-img");
        k4o.bd4h(YE2x, function (iT8L) {
            if (!YM2x && a2x.t4x(iT8L, "key")) {
                YM2x = a2x.t4x(iT8L, "key");
                iT8L.removeAttribute("data-key")
            }
        });
        YE2x = a2x.H4L(a2x.B4F("m-playlist"), "m-info");
        k4o.bd4h(YE2x, function (iT8L) {
            if (!bjm6g && iT8L.id && iT8L.id.indexOf("auto-id-") == 0) {
                bjm6g = iT8L.id.slice(8, 12)
            }
        });
        var D4H = cG6A.value || cG6A.defaultValue;
        if (YM2x) {
            D4H = decodeURIComponent(k4o.cln2x(D4H, "param=" + bjm6g + YM2x))
        }
        D4H = JSON.parse(D4H);
        if (clr2x) {
            l4p.clm2x(D4H)
        }
        if (bjd6X) {
            D4H = l4p.Fd5i(D4H)
        }
        clo2x.uu1x(J4N, D4H);
        f4j.innerHTML = "";
        return J4N
    };
    l4p.clk2x = function (qf0x) {
        if (!qf0x.onbeforelistload) {
            qf0x.onbeforelistload = function (d4h) {
                d4h.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!qf0x.onemptylist) {
            qf0x.onemptylist = function (d4h) {
                d4h.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (qf0x.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return qf0x
    };
    l4p.clm2x = function (hw7p) {
        k4o.bd4h(hw7p, function (bN4R) {
            bN4R.privilege = bN4R.pv;
            delete bN4R.pv
        })
    };
    l4p.Fd5i = function (il8d) {
        if (k4o.eJ6D(il8d)) {
            var dB6v = [];
            k4o.bd4h(il8d, function (bjd6X) {
                dB6v.push(bNX4b(bjd6X))
            });
            return dB6v
        } else {
            return bNX4b(il8d)
        }

        function bNX4b(il8d) {
            if (!il8d) return null;
            var dB6v = {
                album: il8d.al,
                alias: il8d.alia || il8d.ala || [],
                artists: il8d.ar || [],
                commentThreadId: "R_SO_4_" + il8d.id,
                copyrightId: il8d.cp || 0,
                duration: il8d.dt || 0,
                id: il8d.id,
                mvid: il8d.mv || 0,
                name: il8d.name || "",
                cd: il8d.cd,
                position: il8d.no || 0,
                ringtone: il8d.rt,
                rtUrl: il8d.rtUrl,
                status: il8d.st || 0,
                pstatus: il8d.pst || 0,
                fee: il8d.fee || 0,
                version: il8d.v || 0,
                eq: il8d.eq,
                songType: il8d.t || 0,
                mst: il8d.mst,
                score: il8d.pop || 0,
                ftype: il8d.ftype,
                rtUrls: il8d.rtUrls,
                transNames: il8d.tns,
                privilege: il8d.privilege,
                lyrics: il8d.lyrics
            };
            return dB6v
        }
    };
    l4p.cEP8H = function () {
        var f4j = a2x.nH9y('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f4j);
        h4l.s4w(f4j, "click", function (d4h) {
            h4l.bh4l(d4h);
            a2x.cJ6D(f4j)
        })
    };
    l4p.iA8s = function (cF6z) {
        if (cF6z < 1e5) {
            return cF6z
        } else if (cF6z < 1e8) {
            return Math.floor(cF6z / 1e3) / 10 + "万"
        } else {
            return Math.floor(cF6z / 1e7) / 10 + "亿"
        }
    };
    l4p.uC2x = function (cF6z, cG6A) {
        return "<i>" + (cF6z ? "(" + cF6z + ")" : cG6A) + "</i>"
    };
    l4p.bNV4Z = function (u4y, hW8O) {
        var e4i = {};
        if (!k4o.lw9n(hW8O)) {
            return e4i
        }
        switch (parseInt(u4y)) {
            case 17:
                e4i.title = hW8O.name;
                e4i.author = (hW8O.radio || []).name;
                e4i.picUrl = hW8O.coverUrl;
                e4i.category = hW8O.radio.category;
                break;
            case 19:
                e4i.title = hW8O.name;
                e4i.author = l4p.zw3x(hW8O.artists);
                e4i.authors = l4p.zw3x(hW8O.artists, " / ");
                e4i.picUrl = hW8O.picUrl;
                break;
            case 13:
                e4i.title = hW8O.name;
                e4i.author = (hW8O.creator || []).nickname;
                e4i.picUrl = hW8O.coverImgUrl;
                break;
            case 18:
                e4i.title = hW8O.name;
                e4i.author = l4p.zw3x(hW8O.artists);
                e4i.picUrl = (hW8O.album || []).picUrl;
                break;
            case 20:
                e4i.title = hW8O.name;
                e4i.author = "";
                e4i.picUrl = hW8O.img1v1Url;
                break;
            case 21:
                e4i.title = hW8O.name;
                e4i.author = hW8O.artistName;
                e4i.authors = l4p.zw3x(hW8O.artists, " / ");
                e4i.picUrl = hW8O.newCover || hW8O.cover;
                break;
            case 70:
                e4i.title = hW8O.name;
                e4i.author = (hW8O.dj || []).nickname;
                e4i.picUrl = hW8O.picUrl;
                e4i.category = hW8O.category;
                break;
            default:
                break
        }
        return e4i
    };
    l4p.bNR4V = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l4p.YU3x = function (et6n, nG9x, e4i) {
        var bJ4N, bf4j, o4s;
        var gO7H = null;
        var uY2x = 0;
        if (!e4i) e4i = {};
        var zY3x = function () {
            uY2x = e4i.leading === false ? 0 : +(new Date);
            gO7H = null;
            o4s = et6n.apply(bJ4N, bf4j);
            if (!gO7H) bJ4N = bf4j = null
        };
        return function () {
            var eR6L = +(new Date);
            if (!uY2x && e4i.leading === false) uY2x = eR6L;
            var Gs5x = nG9x - (eR6L - uY2x);
            bJ4N = this;
            bf4j = arguments;
            if (Gs5x <= 0 || Gs5x > nG9x) {
                if (gO7H) {
                    clearTimeout(gO7H);
                    gO7H = null
                }
                uY2x = eR6L;
                o4s = et6n.apply(bJ4N, bf4j);
                if (!gO7H) bJ4N = bf4j = null
            } else if (!gO7H && e4i.trailing !== false) {
                gO7H = setTimeout(zY3x, Gs5x)
            }
            return o4s
        }
    };
    l4p.Lp7i = function (et6n, nG9x, op0x) {
        var gO7H, bf4j, bJ4N, CR4V, o4s;
        var zY3x = function () {
            var gt7m = new Date - CR4V;
            if (gt7m < nG9x && gt7m >= 0) {
                gO7H = setTimeout(zY3x, nG9x - gt7m)
            } else {
                gO7H = null;
                if (!op0x) {
                    o4s = et6n.apply(bJ4N, bf4j);
                    if (!gO7H) bJ4N = bf4j = null
                }
            }
        };
        return function () {
            bJ4N = this;
            bf4j = arguments;
            CR4V = new Date;
            var Ro0x = op0x && !gO7H;
            if (!gO7H) gO7H = setTimeout(zY3x, nG9x);
            if (Ro0x) {
                o4s = et6n.apply(bJ4N, bf4j);
                bJ4N = bf4j = null
            }
            return o4s
        }
    };
    l4p.Rn0x = function (f4j, hn7g) {
        if (f4j) {
            var f4j = f4j.firstElementChild;
            if (f4j) {
                f4j.firstElementChild && (f4j = f4j.firstElementChild);
                f4j.setAttribute("xlink:href", "/style/pc/svg/" + hn7g)
            }
        }
    };
    l4p.bNP4T = function (el6f) {
        if (!el6f || !el6f.length) {
            return
        }
        el6f = /^#(.+?)#$/.exec(el6f)[1];
        el6f = el6f.replace(/\s/g, " ");
        v4z.bn4r("/api/act/detail", {
            type: "json",
            method: "post",
            data: k4o.cE6y({actname: el6f}),
            onload: function (Q4U) {
                if (!Q4U || Q4U.code != 200 || !Q4U.act) {
                    m4q.Z4d.L4P({type: 2, tip: "该话题暂未创建"})
                } else {
                    location.dispatch2("/activity?id=" + Q4U.act.actId)
                }
            },
            onerror: function (cb5g) {
                m4q.Z4d.L4P({type: 2, tip: "操作失败，请稍后再试"})
            }
        })
    };
    l4p.ckP2x = function (el6f) {
        if (!el6f || !el6f.length) {
            return
        }
        var Rl0x = location.host;
        el6f = /^#(.+?)#$/.exec(el6f)[1];
        el6f = el6f.replace(/\s/g, " ");
        v4z.bn4r("/api/act/detail", {
            type: "json",
            method: "post",
            data: k4o.cE6y({actname: el6f}),
            onload: function (Q4U) {
                if (!Q4U || Q4U.code != 200 || !Q4U.act) {
                    cW6Q.jv8n("该话题暂未创建")
                } else {
                    cW6Q.Cr4v(Rl0x + "/activity?id=" + Q4U.act.actId)
                }
            },
            onerror: function (cb5g) {
                cW6Q.jv8n("操作失败，请稍后再试")
            }
        })
    };
    l4p.bkt6n = function (yC3x, rn0x) {
        if (!yC3x || !rn0x) return false;
        if (yC3x == rn0x) return true;
        return l4p.bkt6n(yC3x, rn0x.parentNode)
    };
    a2x.cC6w = function (bI4M, jb8T) {
        if (!bI4M) return null;
        if (!jb8T) return bI4M.firstChild;
        return a2x.H4L(bI4M, jb8T)[0]
    };
    l4p.bNN4R = function (ib8T) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(ib8T)
    };
    l4p.bNM4Q = function (ib8T, Ri0x) {
        Ri0x = Ri0x || "86";
        if (Ri0x == "86") return /^\d{11}$/.test(ib8T);
        return /^\d+$/.test(ib8T)
    };
    l4p.cES8K = function (tQ1x) {
        if (!tQ1x) {
            return "0b"
        }
        var ckF2x = ["Bytes", "KB", "MB", "GB"];
        var bc4g = Math.floor(Math.log(tQ1x) / Math.log(1024));
        return (tQ1x / Math.pow(1024, Math.floor(bc4g))).toFixed(bc4g == 1 ? 0 : 1) + ckF2x[bc4g]
    };
    l4p.bNI4M = function (dH6B, fo7h, ckB2x) {
        if (!dH6B) return dH6B;
        var dr6l = k4o.fy7r(dH6B);
        if (dr6l <= fo7h) return dH6B;
        var bkP6J = dr6l - dH6B.length, bkR6L = dH6B.length - bkP6J;
        var fF7y = Math.ceil(fo7h / 2), ckx2x = fo7h, bNF4J = 0;
        if (bkP6J < fF7y) fF7y = fo7h - bkP6J;
        if (bkR6L < fo7h) fo7h = bkR6L + Math.ceil((fo7h - bkR6L) / 2);
        while (fF7y <= fo7h) {
            bNF4J = k4o.fy7r(dH6B.substr(0, fF7y));
            var bkW6Q = ckx2x - bNF4J;
            if (bkW6Q == 0) break;
            if (bkW6Q == 1) {
                var ckt2x = k4o.fy7r(dH6B.charAt(fF7y));
                if (ckt2x == 1) {
                    fF7y++;
                    break
                } else {
                    break
                }
            }
            fF7y += Math.floor(bkW6Q / 2)
        }
        return dH6B.substr(0, fF7y) + (!!ckB2x ? "" : "...")
    };
    l4p.ckp2x = function (bq4u) {
        bq4u = bq4u || 10;
        var cI6C = "";
        for (var i = 0; i < bq4u; i++) {
            cI6C += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cI6C
    };
    var cke2x = /([A-Za-z0-9 \.\-\(\)\!\?])/, ckd2x = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        ckc2x = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bNA4E = function (cjT2x) {
        var bq4u = k4o.Ad3x(1, 5), cjP2x = Math.random() < .5, iN8F = "";
        if (cjT2x) {
            if (cjP2x) {
                while (bq4u >= 0) {
                    iN8F += ckc2x[k4o.Ad3x(0, 500)];
                    bq4u--
                }
            } else {
                iN8F = l4p.ckp2x(bq4u)
            }
        } else {
            iN8F = k4o.Oe9V(bq4u)
        }
        return '<div class="soil">' + iN8F + "</div>"
    };
    l4p.bgB5G = function (ep6j) {
        ep6j = k4o.Ay3x(ep6j);
        try {
            var bq4u = ep6j.length, r4v = k4o.Ad3x(1, bq4u - 1);
            while (r4v < bq4u) {
                if (ckd2x.test(ep6j.charAt(r4v))) {
                    return k4o.dG6A(ep6j.slice(0, r4v)) + bNA4E(true) + k4o.dG6A(ep6j.slice(r4v))
                } else if (cke2x.test(ep6j.charAt(r4v))) {
                    return k4o.dG6A(ep6j.slice(0, r4v)) + bNA4E() + k4o.dG6A(ep6j.slice(r4v))
                } else {
                    r4v++
                }
            }
            return k4o.dG6A(ep6j)
        } catch (e) {
            return k4o.dG6A(ep6j)
        }
    };
    l4p.ZK3x = function (lo9f, mO9F) {
        return "//nos.netease.com/" + lo9f + "/" + mO9F
    };
    l4p.cjM2x = function (fE7x) {
        var dN6H = /(.+)(\.[^\.]+$)/.exec(fE7x);
        return dN6H ? {filename: dN6H[1], suffix: dN6H[2]} : {filename: fE7x || "", suffix: ""}
    };
    l4p.bNu4y = function (br4v, cjH2x) {
        var dB6v = [];
        k4o.bd4h(br4v, function (id8V) {
            dB6v.push(cjH2x(id8V))
        });
        return dB6v
    };
    var cjD2x = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l4p.bNs4w = function (yF3x) {
        var j4n = NEJ.X({}, yF3x);
        k4o.eC6w(yF3x, function (p4t, J4N) {
            var bNr4v = cjD2x[J4N];
            if (bNr4v) {
                j4n[bNr4v] = p4t
            }
        });
        var QV0x = yF3x.creator || [];
        if (!k4o.eJ6D(QV0x)) {
            QV0x = [QV0x]
        }
        if (QV0x) {
            j4n.artists = [];
            k4o.bd4h(QV0x, function (p4t) {
                j4n.artists.push({name: p4t.nickname || p4t.userName, id: p4t.userId})
            })
        }
        if (!!yF3x.aliaName) {
            j4n.alias = [yF3x.aliaName]
        }
        if (!!yF3x.transName) {
            j4n.transNames = [yF3x.transName]
        }
        return j4n
    };
    l4p.cjx2x = function (Y4c) {
        return (Y4c || "").replace(/^https?:/, "")
    };
    l4p.EH5M = function (cI6C) {
        if (!k4o.fG7z(cI6C)) return cI6C;
        var dB6v = null;
        try {
            dB6v = JSON.parse(cI6C)
        } catch (_e) {
        }
        return dB6v
    };
    var cjw2x = '<span class="s-fc7 f-tdn">${value}</span>';
    l4p.cjv2x = function (cG6A, sG1x, e4i) {
        e4i = e4i || {};
        if (!sG1x) {
            return k4o.dG6A(cG6A)
        }
        cG6A = k4o.Ay3x(cG6A);
        var pS0x = [], br4v = null, Ny9p = new RegExp(l4p.bOf4j(sG1x), "gi"), or0x = e4i.tpl || cjw2x;
        while (br4v = Ny9p.exec(cG6A)) {
            var dN6H = {html: "", before: br4v.index - 1, after: br4v.index + br4v[0].length};
            var Ea5f = a2x.es6m(or0x);
            dN6H.html = a2x.bZ5e(Ea5f, {value: k4o.dG6A(br4v[0])});
            pS0x.push(dN6H)
        }
        var bgd5i = pS0x.length, kg8Y = {before: cG6A.length - 1, after: 0}, dB6v = "";
        for (var i = 0; i <= bgd5i; i++) {
            var hz7s, fR7K;
            hz7s = (pS0x[i - 1] || kg8Y).after;
            fR7K = (pS0x[i] || kg8Y).before;
            if (fR7K >= hz7s && hz7s >= 0 && fR7K <= cG6A.length - 1) {
                dB6v += k4o.dG6A(cG6A.substring(hz7s, fR7K + 1))
            }
            if (pS0x[i]) {
                dB6v += pS0x[i].html
            }
        }
        return dB6v
    }
})();
(function () {
    var k4o = NEJ.P("nej.u");

    function cjt2x() {
        var Cy4C = function (jr8j) {
            if (jr8j < -128) {
                return Cy4C(128 - (-128 - jr8j))
            } else if (jr8j >= -128 && jr8j <= 127) {
                return jr8j
            } else if (jr8j > 127) {
                return Cy4C(-129 + jr8j - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cjr2x = function (jr8j, bi4m) {
            return Cy4C(jr8j + bi4m)
        };
        var cjl2x = function (ZP3x, bmg7Z) {
            if (ZP3x == null) {
                return null
            }
            if (bmg7Z == null) {
                return ZP3x
            }
            var qK0x = [];
            var cjh2x = bmg7Z.length;
            for (var i = 0, bq4u = ZP3x.length; i < bq4u; i++) {
                qK0x[i] = cjr2x(ZP3x[i], bmg7Z[i % cjh2x])
            }
            return qK0x
        };
        var cjd2x = function (ZT3x) {
            if (ZT3x == null) {
                return ZT3x
            }
            var qK0x = [];
            var cjc2x = ZT3x.length;
            for (var i = 0, bq4u = cjc2x; i < bq4u; i++) {
                qK0x[i] = Cy4C(0 - ZT3x[i])
            }
            return qK0x
        };
        var cjb2x = function (bmE7x, QM0x) {
            bmE7x = Cy4C(bmE7x);
            QM0x = Cy4C(QM0x);
            return Cy4C(bmE7x ^ QM0x)
        };
        var bNl4p = function (QL0x, bmT7M) {
            if (QL0x == null || bmT7M == null || QL0x.length != bmT7M.length) {
                return QL0x
            }
            var qK0x = [];
            var ciX2x = QL0x.length;
            for (var i = 0, bq4u = ciX2x; i < bq4u; i++) {
                qK0x[i] = cjb2x(QL0x[i], bmT7M[i])
            }
            return qK0x
        };
        var bNk4o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var ciV2x = function (dv6p) {
            var Lz7s = [];
            Lz7s.push(bNk4o[dv6p >>> 4 & 15]);
            Lz7s.push(bNk4o[dv6p & 15]);
            return Lz7s.join("")
        };
        var bNh4l = function (tQ1x) {
            var bq4u = tQ1x.length;
            if (tQ1x == null || bq4u < 0) {
                return new String("")
            }
            var Lz7s = [];
            for (var i = 0; i < bq4u; i++) {
                Lz7s.push(ciV2x(tQ1x[i]))
            }
            return Lz7s.join("")
        };
        var bNg4k = function (ZW3x) {
            if (ZW3x == null || ZW3x.length == 0) {
                return ZW3x
            }
            var bng7Z = new String(ZW3x);
            var qK0x = [];
            var bq4u = bng7Z.length / 2;
            var bi4m = 0;
            for (var i = 0; i < bq4u; i++) {
                var oA0x = parseInt(bng7Z.charAt(bi4m++), 16) << 4;
                var oD0x = parseInt(bng7Z.charAt(bi4m++), 16);
                qK0x[i] = Cy4C(oA0x + oD0x)
            }
            return qK0x
        };
        var bNf4j = function (cI6C) {
            if (cI6C == null || cI6C == undefined) {
                return cI6C
            }
            var QE0x = encodeURIComponent(cI6C);
            var tQ1x = [];
            var bNe4i = QE0x.length;
            for (var i = 0; i < bNe4i; i++) {
                if (QE0x.charAt(i) == "%") {
                    if (i + 2 < bNe4i) {
                        tQ1x.push(bNg4k(QE0x.charAt(++i) + "" + QE0x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    tQ1x.push(QE0x.charCodeAt(i))
                }
            }
            return tQ1x
        };
        var ciJ2x = function (xa2x) {
            var bc4g = 0;
            bc4g += (xa2x[0] & 255) << 24;
            bc4g += (xa2x[1] & 255) << 16;
            bc4g += (xa2x[2] & 255) << 8;
            bc4g += xa2x[3] & 255;
            return bc4g
        };
        var cEW8O = function (bc4g) {
            var xa2x = [];
            xa2x[0] = bc4g >>> 24 & 255;
            xa2x[1] = bc4g >>> 16 & 255;
            xa2x[2] = bc4g >>> 8 & 255;
            xa2x[3] = bc4g & 255;
            return xa2x
        };
        var ciH2x = function (cS6M, bnx7q, bq4u) {
            var dB6v = [];
            if (cS6M == null || cS6M.length == 0) {
                return dB6v
            }
            if (cS6M.length < bq4u) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq4u; i++) {
                dB6v[i] = cS6M[bnx7q + i]
            }
            return dB6v
        };
        var bny7r = function (cS6M, bnx7q, rs1x, ciG2x, bq4u) {
            if (cS6M == null || cS6M.length == 0) {
                return rs1x
            }
            if (rs1x == null) {
                throw new Error("1004")
            }
            if (cS6M.length < bq4u) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq4u; i++) {
                rs1x[ciG2x + i] = cS6M[bnx7q + i]
            }
            return rs1x
        };
        var ciF2x = function (bq4u) {
            var br4v = [];
            for (var i = 0; i < bq4u; i++) {
                br4v[i] = 0
            }
            return br4v
        };
        var ciE2x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var LE7x = 64;
        var bal3x = 64;
        var bNd4h = 4;
        var cit1x = function (rf0x) {
            var bMZ4d = [];
            if (rf0x == null || rf0x == undefined || rf0x.length == 0) {
                return ciF2x(bal3x)
            }
            if (rf0x.length >= bal3x) {
                return ciH2x(rf0x, 0, bal3x)
            } else {
                for (var i = 0; i < bal3x; i++) {
                    bMZ4d[i] = rf0x[i % rf0x.length]
                }
            }
            return bMZ4d
        };
        var ciq1x = function (baA3x) {
            if (baA3x == null || baA3x.length % LE7x != 0) {
                throw new Error("1005")
            }
            var bod7W = [];
            var bi4m = 0;
            var cip1x = baA3x.length / LE7x;
            for (var i = 0; i < cip1x; i++) {
                bod7W[i] = [];
                for (var j = 0; j < LE7x; j++) {
                    bod7W[i][j] = baA3x[bi4m++]
                }
            }
            return bod7W
        };
        var cio1x = function (bMX4b) {
            var oA0x = bMX4b >>> 4 & 15;
            var oD0x = bMX4b & 15;
            var bi4m = oA0x * 16 + oD0x;
            return ciE2x[bi4m]
        };
        var bMW4a = function (bou7n) {
            if (bou7n == null) {
                return null
            }
            var bMV4Z = [];
            for (var i = 0, bq4u = bou7n.length; i < bq4u; i++) {
                bMV4Z[i] = cio1x(bou7n[i])
            }
            return bMV4Z
        };
        var bMT4X = function (LL7E, rf0x) {
            if (LL7E == null) {
                return null
            }
            if (LL7E.length == 0) {
                return []
            }
            if (LL7E.length % LE7x != 0) {
                throw new Error("1005")
            }
            rf0x = cit1x(rf0x);
            var boE7x = rf0x;
            var boF7y = ciq1x(LL7E);
            var PZ9Q = [];
            var cii1x = boF7y.length;
            for (var i = 0; i < cii1x; i++) {
                var boJ7C = bMW4a(boF7y[i]);
                boJ7C = bMW4a(boJ7C);
                var boK7D = bNl4p(boJ7C, boE7x);
                var cih1x = cjl2x(boK7D, cjd2x(boE7x));
                boK7D = bNl4p(cih1x, rf0x);
                bny7r(boK7D, 0, PZ9Q, i * LE7x, LE7x);
                boE7x = boF7y[i]
            }
            var bMR4V = [];
            bny7r(PZ9Q, PZ9Q.length - bNd4h, bMR4V, 0, bNd4h);
            var bq4u = ciJ2x(bMR4V);
            if (bq4u > PZ9Q.length) {
                throw new Error("1006")
            }
            var qK0x = [];
            bny7r(PZ9Q, 0, qK0x, 0, bq4u);
            return qK0x
        };
        var chU1x = function (baV3x, J4N) {
            if (baV3x == null) {
                return null
            }
            var bMO4S = new String(baV3x);
            if (bMO4S.length == 0) {
                return []
            }
            var LL7E = bNg4k(bMO4S);
            if (J4N == null || J4N == undefined) {
                throw new Error("1007")
            }
            var rf0x = bNf4j(J4N);
            return bMT4X(LL7E, rf0x)
        };
        this.chS1x = function (baV3x, J4N) {
            var bpn7g = chU1x(baV3x, J4N);
            var Es5x = new String(bNh4l(bpn7g));
            var zL3x = [];
            var bpr7k = Es5x.length / 2;
            var bi4m = 0;
            for (var i = 0; i < bpr7k; i++) {
                zL3x.push("%");
                zL3x.push(Es5x.charAt(bi4m++));
                zL3x.push(Es5x.charAt(bi4m++))
            }
            return zL3x.join("")
        };
        k4o.cln2x = function (bpv7o, J4N) {
            return k4o.chR1x(k4o.cvb6V(bpv7o), J4N)
        };
        k4o.chR1x = function (bpv7o, J4N) {
            var bpn7g = bMT4X(bpv7o, bNf4j(J4N));
            var Es5x = new String(bNh4l(bpn7g));
            var zL3x = [];
            var bpr7k = Es5x.length / 2;
            var bi4m = 0;
            for (var i = 0; i < bpr7k; i++) {
                zL3x.push("%");
                zL3x.push(Es5x.charAt(bi4m++));
                zL3x.push(Es5x.charAt(bi4m++))
            }
            return zL3x.join("")
        }
    }

    window.settmusic = (new cjt2x).chS1x
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, I4M = c4g("nej.ut"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), v4z = c4g("nej.j"),
        q4u = c4g("nm.d"), l4p = c4g("nm.x"), J4N = "Search-tracks_", b3x;
    q4u.fe7X({
        "search-suggest": {
            url: "/api/search/suggest/web", type: "POST", format: function (Q4U) {
                return Q4U
            }, onerror: function (Q4U, e4i) {
                if (Q4U.code == 407) {
                    e4i.onForbidden()
                }
            }
        },
        "search-multimatch": {url: "/api/search/suggest/multimatch", type: "GET"},
        "search-list": {
            url: "/api/cloudsearch/get/web", type: "post", noescape: true, filter: function (e4i, bg4k) {
                window.log && window.log("searchkeywordclient", {
                    type: this.chQ1x(parseInt(e4i.data.type)) || "suggest",
                    keyword: e4i.data.s,
                    offset: e4i.offset
                })
            }, format: function (Q4U, e4i) {
                if (Q4U.abroad) {
                    try {
                        Q4U.result = JSON.parse(decodeURIComponent(settmusic(Q4U.result, q4u.sk)))
                    } catch (e) {
                    }
                }
                Q4U.result = Q4U.result || {};
                var i4m, cy5D, hQ8I = [], pw0x = e4i.data.s || "", gc7V = e4i.data.limit,
                    u4y = parseInt(e4i.data.type) || 1, o4s = Q4U.result;
                switch (u4y) {
                    case 1:
                        i4m = this.bMN4R(o4s.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                        cy5D = o4s.songCount;
                        break;
                    case 10:
                        i4m = o4s.albums;
                        cy5D = o4s.albumCount;
                        break;
                    case 100:
                        i4m = o4s.artists;
                        cy5D = o4s.artistCount;
                        break;
                    case 1e3:
                        i4m = o4s.playlists;
                        cy5D = o4s.playlistCount;
                        break;
                    case 1002:
                        i4m = o4s.userprofiles;
                        cy5D = o4s.userprofileCount;
                        break;
                    case 1004:
                        i4m = o4s.mvs;
                        cy5D = o4s.mvCount;
                        break;
                    case 1014:
                        i4m = l4p.bNu4y(o4s.videos, l4p.bNs4w);
                        cy5D = o4s.videoCount;
                        break;
                    case 1006:
                        i4m = this.bMN4R(o4s.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                        cy5D = o4s.songCount;
                        break;
                    case 1009:
                        var qT0x = o4s.djRadios;
                        if (!!qT0x) {
                            k4o.bd4h(qT0x, function (D4H, r4v, chO1x) {
                                D4H.xid = D4H.id;
                                D4H.id = D4H.id + "_rad"
                            });
                            if (qT0x.length) {
                                this.uu1x("radio_search-" + e4i.data.s, qT0x)
                            }
                        }
                        cy5D = Math.min(o4s.djprogramCount, 500);
                        i4m = o4s.djprograms || [];
                        if (e4i.data.isPub) {
                            k4o.no9f(qT0x, function (D4H, r4v, chO1x) {
                                D4H.stype = 1;
                                i4m.unshift(D4H)
                            });
                            cy5D = Math.min(i4m.length, 500)
                        }
                        break
                }
                this.z4D("onsearchload", Q4U);
                if (i4m && i4m.length) {
                    for (var i = 0; i < gc7V; i++) {
                        if (i < i4m.length) {
                            hQ8I.push(i4m[i])
                        } else {
                            hQ8I.push(null)
                        }
                    }
                }
                return {more: !0, total: Math.min(cy5D || 0, pw0x.length < 3 ? 500 : 5e3), list: hQ8I}
            }, onerror: function (Q4U, e4i) {
                e4i.onload(e4i, []);
                if (k4o.gG7z(e4i.onerror)) {
                    e4i.onerror(Q4U)
                }
            }
        }
    });
    q4u.EC5H = NEJ.C();
    b3x = q4u.EC5H.O4S(q4u.hG7z);
    b3x.cx5C = function () {
        this.cD6x()
    };
    b3x.chL1x = function (J4N, e4i) {
        if (!J4N) return;
        if (!!this.bMK3x) v4z.ks8k(this.bMK3x);
        this.bMK3x = this.co5t("search-suggest", NEJ.X({data: {s: J4N, limit: 8}}, e4i))
    };
    b3x.chJ1x = function (J4N, e4i) {
        if (!J4N) return;
        this.co5t("search-multimatch", NEJ.X({data: {s: J4N}}, e4i))
    };
    b3x.bMN4R = function () {
        var chI1x = function (hu7n, bMI3x, bMH3x) {
            var chE1x = hu7n.match(new RegExp(bMI3x + "(.+?)" + bMH3x, "gi")), cF6z = 0;
            k4o.bd4h(chE1x, function (p4t) {
                cF6z += p4t.replace(new RegExp(bMI3x, "g"), "").replace(new RegExp(bMH3x, "g"), "").length
            });
            return cF6z
        };
        return function (jt8l, chD1x, chC1x) {
            var bMG3x = [];
            k4o.bd4h(jt8l, function (bj4n, bc4g) {
                bj4n = l4p.Fd5i(bj4n);
                var baY4c = bj4n.lyrics || [], dr6l = baY4c.length, jT8L = 0, cy5D = 4, baZ4d = {l: 0, v: 0}, bqN8F;
                if (dr6l > 4) {
                    k4o.bd4h(baY4c, function (hu7n, r4v) {
                        var bMF3x = chI1x(hu7n, chD1x, chC1x);
                        if (bMF3x > baZ4d.v) {
                            baZ4d.v = bMF3x;
                            baZ4d.l = r4v
                        }
                    });
                    jT8L = baZ4d.l;
                    jT8L = Math.max(jT8L, 0);
                    bqN8F = dr6l - jT8L - 4;
                    if (bqN8F < 0) jT8L += bqN8F;
                    bj4n.lrcAbstractEnd = jT8L + cy5D - 1
                } else {
                    bj4n.lrcAbstractEnd = dr6l - 1
                }
                bj4n.lrcAbstractStart = jT8L;
                bj4n.indexId = (baY4c && baY4c.length ? "L" : "NL") + bj4n.id;
                bMG3x.push(bj4n)
            });
            return bMG3x
        }
    }();
    b3x.chQ1x = function (u4y) {
        switch (u4y) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1014:
                return "video";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        v4z = c4g("nej.j"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), E4I = c4g("nm.m"), m4q = c4g("nm.l"),
        dw6q = c4g("nm.i"), M4Q = c4g("nm.m.sch"), b3x, K4O;
    var bbe4i = {songs: 1, artists: 100, albums: 10, playlists: 1e3, mvs: 1004};
    M4Q.PC9t = NEJ.C();
    b3x = M4Q.PC9t.O4S(I4M.cH6B);
    b3x.cx5C = function (f4j) {
        this.cD6x();
        this.bW5b(f4j);
        this.S4W = q4u.EC5H.gr7k()
    };
    b3x.bW5b = function (f4j) {
        this.n4r = f4j;
        var i4m = a2x.H4L(f4j, "j-flag");
        this.eS6M = i4m[0];
        this.brj8b = i4m[1];
        this.cr5w = i4m[2];
        this.mW9N = i4m[3];
        h4l.s4w(this.eS6M, "input", this.gk7d.g4k(this));
        h4l.s4w(this.eS6M, "keyup", this.gk7d.g4k(this));
        h4l.s4w(this.eS6M, "focus", this.gN7G.g4k(this));
        h4l.s4w(this.brj8b, "click", this.gN7G.g4k(this));
        h4l.s4w(this.eS6M, "blur", this.brA8s.g4k(this));
        h4l.s4w(this.cr5w, "click", this.bbf4j.g4k(this));
        h4l.s4w(this.n4r, "keydown", this.brE8w.g4k(this));
        h4l.s4w(this.n4r, "keypress", this.bbh4l.g4k(this));
        h4l.s4w(this.mW9N, "mouseover", this.Py9p.g4k(this));
        h4l.s4w(this.mW9N, "mouseout", this.Py9p.g4k(this));
        if (this.eS6M.value) {
            this.eS6M.value = ""
        }
        if (this.eS6M.style.opacity != null) {
            this.eS6M.style.opacity = 1
        }
    };
    b3x.gk7d = function (d4h) {
        if (d4h.type == "keyup" && d4h.keyCode == 8 || d4h.keyCode == 46) {
            this.Fi5n()
        } else if (d4h.type == "input" || d4h.type == "propertychange") {
            setTimeout(this.Fi5n.g4k(this), 0)
        }
    };
    b3x.gN7G = function () {
        this.yk3x(this.brj8b, !1);
        a2x.y4C(this.n4r, "m-srch-fcs");
        this.eS6M.focus();
        this.Fi5n();
        a2x.y4C((a2x.H4L("g-topbar", "j-showoff") || [])[0], "f-hide")
    };
    b3x.brA8s = function () {
        if (!this.eS6M.value) {
            this.yk3x(this.brj8b, !0)
        }
        var Fk5p = a2x.H4L(this.mW9N, "slt");
        if (this.bbk4o(this.mW9N) && Fk5p.length > 0 && a2x.t4x(Fk5p[0], "type")) {
            var hn7g = Fk5p[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hn7g)) {
                window.log("search", {rid: RegExp.$2, type: RegExp.$1, keyword: this.eS6M.value})
            }
            this.bsf8X(Fk5p[0].href)
        }
        this.yk3x(this.mW9N, !1);
        a2x.x4B(this.n4r, "m-srch-fcs")
    };
    b3x.yk3x = function (f4j, ml9c) {
        a2x.ba4e(f4j, "display", !ml9c ? "none" : "")
    };
    b3x.bbk4o = function (f4j) {
        return a2x.df6Z(f4j, "display") != "none"
    };
    b3x.Fi5n = function () {
        var chz1x = function (ib8T) {
            ib8T = k4o.Ay3x(ib8T);
            var eE6y = this.n4r.clientWidth > 250 ? 41 : 17;
            if (l4p.Sh0x(ib8T) > eE6y) {
                ib8T = l4p.CZ4d(ib8T, eE6y) + "..."
            }
            return k4o.dG6A(ib8T)
        };
        var bbm4q = function (o4s) {
            return o4s.songs && o4s.songs.length || o4s.albums && o4s.albums.length || o4s.artists && o4s.artists.length || o4s.playlists && o4s.playlists.length
        };
        var ss1x = function (sG1x, d4h) {
            if (!l4p.bOj4n(this.eS6M) || l4p.jL8D(this.eS6M.value)) {
                this.yk3x(this.mW9N, !1);
                return
            }
            d4h.keyword = k4o.dG6A(sG1x);
            var dT6N = a2x.bZ5e("m-search-suggest", d4h, {mark: l4p.cjv2x.ew6q(this, sG1x), cutStr: chz1x.g4k(this)}),
                tb1x = d4h.result.order;
            this.mW9N.innerHTML = dT6N;
            this.yk3x(this.mW9N, bbm4q(d4h.result) ? !0 : !1);
            if (!!tb1x && !!tb1x.length && bbe4i[tb1x[0]]) {
                this.bsl8d = {keyword: sG1x, type: bbe4i[tb1x[0]]}
            }
        };
        var chy1x = function () {
            this.yk3x(this.mW9N, !1);
            return
        };
        return function () {
            var D4H = this.eS6M.value;
            if (l4p.jL8D(D4H)) {
                this.yk3x(this.mW9N, !1);
                return
            }
            this.S4W.chL1x(D4H, {onload: ss1x.g4k(this, D4H), onForbidden: chy1x.g4k(this)})
        }
    }();
    b3x.bbh4l = function (d4h) {
        if (d4h.keyCode != 13) return;
        var Fk5p = a2x.H4L(this.mW9N, "slt");
        if (this.bbk4o(this.mW9N) && Fk5p.length > 0) {
            this.bsf8X(Fk5p[0].href);
            this.yk3x(this.mW9N, !1);
            return
        }
        this.bbf4j();
        this.yk3x(this.mW9N, !1)
    };
    b3x.brE8w = function (d4h) {
        if (!this.bbk4o(this.mW9N)) return;
        var i4m = a2x.H4L(this.mW9N, "xtag"), dr6l = i4m.length, r4v = k4o.di6c(i4m, function (p4t) {
            return a2x.bE4I(p4t, "slt")
        });
        switch (d4h.keyCode) {
            case 38:
                if (r4v >= 0) a2x.x4B(i4m[r4v], "slt");
                a2x.y4C(i4m[r4v <= 0 ? dr6l - 1 : r4v - 1], "slt");
                break;
            case 40:
                if (r4v >= 0) a2x.x4B(i4m[r4v], "slt");
                a2x.y4C(i4m[(r4v + 1) % dr6l], "slt");
                break
        }
    };
    b3x.Py9p = function (d4h) {
        if (!this.bbk4o(this.mW9N)) return;
        var Pv9m, F4J = h4l.W4a(d4h), i4m = a2x.H4L(this.mW9N, "xtag");
        if (F4J.tagName.toLowerCase() == "a") Pv9m = F4J; else if (F4J.parentNode.tagName.toLowerCase() == "a") Pv9m = F4J.parentNode;
        if (!Pv9m) return;
        k4o.bd4h(i4m, function (p4t) {
            a2x.x4B(p4t, "slt");
            a2x.t4x(p4t, "type", "")
        });
        if (d4h.type == "mouseout") return;
        a2x.y4C(Pv9m, "slt");
        a2x.t4x(Pv9m, "type", "mouse")
    };
    b3x.bbf4j = function () {
        var dO6I = location.hash, r4v = dO6I.indexOf("?"), bv4z = k4o.hv7o(dO6I.substring(r4v + 1));
        bv4z.s = this.eS6M.value;
        if (l4p.jL8D(bv4z.s)) return;
        if (!bv4z.type && this.bsl8d && this.bsl8d.keyword == bv4z.s) {
            bv4z.type = this.bsl8d.type
        }
        this.bsf8X("/search/#/?" + k4o.cE6y(bv4z));
        this.eS6M.blur()
    };
    b3x.bsf8X = function (Y4c) {
        if (location.dispatch2) {
            location.dispatch2(Y4c)
        } else {
            location.href = Y4c
        }
    };
    M4Q.PC9t.chx1x = function () {
        var i4m = a2x.H4L(document.body, "j-suggest");
        k4o.bd4h(i4m, function (p4t) {
            new M4Q.PC9t(p4t)
        })
    };
    M4Q.PC9t.chx1x()
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, I4M = c4g("nej.ut"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), v4z = c4g("nej.j"),
        q4u = c4g("nm.d"), b3x;
    q4u.fe7X({
        "mv_artist-list": {
            url: "/api/artist/mvs", type: "get", format: function (Q4U) {
                return {total: Q4U.size || 0, list: Q4U.mvs || []}
            }
        }, "album_artist-list": {
            url: "/api/artist/albums/{id}", type: "get", format: function (Q4U) {
                return {total: Q4U.size || 0, list: Q4U.hotAlbums || []}
            }
        }, "ydcailing_post-list": {
            url: "/api/cailing/all", type: "POST", format: function (Q4U) {
                return Q4U.result.songs
            }
        }, "wo-list": {
            url: "/api/unicom/wo/content", format: function (Q4U, e4i) {
                if (e4i.offset == 0) {
                    var pG0x = Q4U.data[0];
                    this.z4D("onfirstload", pG0x);
                    Q4U.data.splice(0, 1);
                    return Q4U.data
                } else {
                    return Q4U.data
                }
            }
        }
    });
    q4u.Fx5C = NEJ.C();
    b3x = q4u.Fx5C.O4S(q4u.hG7z);
    b3x.cx5C = function () {
        this.cD6x()
    };
    b3x.bsD8v = function () {
        var tv1x = "LOCAL_FLAG";
        return function (u4y, chw1x) {
            var j4n = this.FE5J(tv1x, {});
            if (j4n[u4y]) {
                return true
            } else {
                if (!chw1x) {
                    j4n[u4y] = true;
                    this.wr2x(tv1x, j4n)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), k4o = c4g("nej.u"), N4R = c4g("nej.ut"), bsG8y;
    if (!!N4R.nW9N) return;
    N4R.nW9N = NEJ.C();
    bsG8y = N4R.nW9N.O4S(N4R.cH6B);
    bsG8y.bl4p = function () {
        var chv1x = function (d4h) {
            d4h.matched = d4h.source == d4h.target
        };
        return function (e4i) {
            e4i.oncheck = e4i.oncheck || chv1x;
            this.bm4q(e4i);
            this.bU5Z = e4i.list;
            this.ji8a = e4i.dataset || "id";
            this.kR9I = e4i.selected || "js-selected"
        }
    }();
    bsG8y.nF9w = function (D4H) {
        var F4J, d4h = {target: D4H};
        k4o.bd4h(this.bU5Z, function (f4j) {
            delete d4h.matched;
            d4h.source = a2x.t4x(f4j, this.ji8a);
            this.z4D("oncheck", d4h);
            if (!d4h.matched) {
                a2x.x4B(f4j, this.kR9I)
            } else {
                F4J = f4j;
                a2x.y4C(f4j, this.kR9I)
            }
        }, this);
        return F4J
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, a2x = c4g("nej.e"), N4R = c4g("nej.ut"), pN0x;
    if (!!N4R.de6Y) return;
    N4R.de6Y = NEJ.C();
    pN0x = N4R.de6Y.O4S(N4R.cH6B);
    pN0x.cx5C = function () {
        this.iV8N = {};
        this.cD6x();
        this.bL4P()
    };
    pN0x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.btc8U = e4i.umi || "";
        this.BZ4d = e4i.dispatcher;
        this.LU7N = e4i.composite || bb4f;
        this.bjI6C({
            onshow: this.eZ6T.g4k(this),
            onhide: this.ke8W.g4k(this),
            onrefresh: this.eD6x.g4k(this),
            onmessage: this.qG0x.g4k(this),
            onbeforehide: this.chs1x.g4k(this)
        })
    };
    pN0x.bD4H = function () {
        delete this.btc8U;
        this.iV8N = {};
        this.bG4K()
    };
    pN0x.um1x = function (d4h) {
        if (!!d4h) d4h.stopped = !0
    };
    pN0x.bL4P = bs4w;
    pN0x.eZ6T = bs4w;
    pN0x.ke8W = bs4w;
    pN0x.eD6x = bs4w;
    pN0x.qG0x = bs4w;
    pN0x.chs1x = bs4w;
    pN0x.nB9s = function (nb9S, bH4L, fl7e) {
        this.BZ4d.btp9g({to: nb9S, mode: fl7e || 0, data: bH4L, from: this.btc8U})
    };
    pN0x.cFa8S = function (u4y, j4n) {
        this.BZ4d.BX4b(u4y, {from: this.btc8U, data: j4n})
    };
    pN0x.cFc8U = function () {
        this.BZ4d.mq9h.apply(this.BZ4d, arguments)
    };
    pN0x.cho1x = function () {
        return this.iV8N
    };
    a2x.bbw4A = function () {
        if (!!window.dispatcher) {
            dispatcher.bMC3x.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c4g = NEJ.P, bs4w = NEJ.F, bb4f = NEJ.O, a2x = c4g("nej.e"), k4o = c4g("nej.u"), N4R = c4g("nej.ut"), zt3x;
    if (!!N4R.dx6r) return;
    N4R.dx6r = NEJ.C();
    zt3x = N4R.dx6r.O4S(N4R.de6Y);
    zt3x.chk1x = function (e4i) {
        var bI4M;
        if (!bI4M) {
            var j4n = e4i.input || bb4f;
            bI4M = a2x.B4F(j4n.parent)
        }
        if (!bI4M) {
            var j4n = e4i.data || bb4f;
            bI4M = a2x.B4F(j4n.parent)
        }
        if (!bI4M) {
            bI4M = a2x.B4F(e4i.parent)
        }
        return bI4M
    };
    zt3x.eZ6T = function (e4i) {
        var bI4M = this.chk1x(e4i);
        if (!!bI4M && !!this.n4r) bI4M.appendChild(this.n4r);
        this.gC7v(e4i);
        this.bMA3x("onshow", e4i);
        this.eD6x(e4i)
    };
    zt3x.eD6x = function (e4i) {
        this.gq7j(e4i);
        this.bMA3x("onrefresh", e4i)
    };
    zt3x.ke8W = function () {
        this.kZ9Q();
        this.chi1x();
        a2x.mY9P(this.n4r)
    };
    zt3x.bMz3x = function () {
        var gK7D = /^onshow|onrefresh|delay$/;
        return function (cj5o) {
            return gK7D.test(cj5o)
        }
    }();
    zt3x.bMy3x = bs4w;
    zt3x.bMA3x = function () {
        var bMx3x = function (bv4z, e4i, cj5o, pk0x) {
            if (this.bMz3x(pk0x)) return;
            if (!!bv4z) cj5o += (cj5o.indexOf("?") > 1 ? "&" : "?") + bv4z;
            var dm6g = this.bMy3x(pk0x, e4i) || {};
            dm6g.location = e4i;
            dm6g.parent = this.iV8N[pk0x];
            this.BZ4d.iz8r(cj5o, {input: dm6g})
        };
        return function (u4y, e4i) {
            if (!e4i.nodelay) {
                if (!!this.LU7N.delay) return;
                var bMw3x = this.LU7N[u4y] || bb4f;
                if (bMw3x.delay) return
            }
            var bv4z = k4o.cE6y(e4i.param) || "";
            if (u4y == "onrefresh") {
                k4o.eC6w(this.LU7N, bMx3x.g4k(this, bv4z, e4i))
            }
            k4o.eC6w(bMw3x, bMx3x.g4k(this, bv4z, e4i))
        }
    }();
    zt3x.chi1x = function () {
        var Bm4q = function (cj5o, pk0x) {
            if (!this.bMz3x(pk0x)) this.BZ4d.bu4y(cj5o)
        };
        return function () {
            k4o.eC6w(this.LU7N, Bm4q, this);
            k4o.eC6w(this.LU7N.onshow, Bm4q, this);
            k4o.eC6w(this.LU7N.onrefresh, Bm4q, this)
        }
    }()
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), I4M = c4g("nej.ut"), v4z = c4g("nej.j"),
        k4o = c4g("nej.u"), E4I = c4g("nm.m"), l4p = c4g("nm.x"), q4u = c4g("nm.d"), b3x, K4O;
    E4I.Pe9V = NEJ.C();
    b3x = E4I.Pe9V.O4S(I4M.cH6B);
    b3x.cx5C = function () {
        this.cD6x();
        this.n4r = a2x.B4F("g-topbar");
        var i4m = a2x.H4L(this.n4r, "j-tflag");
        this.bur9i = i4m[0];
        this.Gv5A = i4m[1];
        this.bMt3x = i4m[2];
        this.buB9s = i4m[3];
        this.cgZ1x = I4M.nW9N.A4E({list: this.bur9i.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.buG9x = I4M.nW9N.A4E({list: this.buB9s.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bX5c([[this.n4r, "click", this.Pc9T.g4k(this)], [this.Gv5A, "click", this.cM6G.g4k(this)], [this.Gv5A, "mouseout", this.bMs3x.g4k(this, 0)], [this.Gv5A, "mouseover", this.bMs3x.g4k(this, 1)]]);
        window.scrollTopbar = this.cgX1x.g4k(this);
        window.matchNav = this.bMr3x.g4k(this);
        window.polling = this.uy2x.g4k(this);
        this.buZ9Q = q4u.Fx5C.A4E();
        this.cgU1x();
        this.LY7R();
        var bv4z = k4o.hv7o(location.href.split("?")[1]) || {};
        if (bv4z.market) {
            a2x.B4F("topbar-download-link").href = "/download?market=" + bv4z.market
        }
        var bvd9U = a2x.H4L(this.n4r, "j-showoff");
        if (bvd9U && !this.buZ9Q.bsD8v("newMvSearch")) {
            a2x.x4B(bvd9U[0], "f-hide");
            window.setTimeout(function () {
                a2x.y4C(bvd9U[0], "f-hide")
            }, 5e3)
        }
    };
    b3x.uy2x = function (d4h) {
        var dO6I = l4p.KN7G();
        if (!/^\/msg/.test(dO6I)) {
            var ww2x = 0;
            ww2x += d4h.comment;
            ww2x += d4h.forward;
            ww2x += d4h.msg;
            ww2x += d4h.notice;
            if (ww2x > 0) {
                ww2x = ww2x > 99 ? "99+" : ww2x;
                this.OT9K.innerText = ww2x;
                this.Md7W.innerText = ww2x;
                a2x.x4B(this.OT9K, "f-hide");
                a2x.x4B(this.Md7W, "f-hide");
                this.bbY4c = true
            } else {
                a2x.y4C(this.OT9K, "f-hide");
                a2x.y4C(this.Md7W, "f-hide");
                this.bbY4c = false
            }
            var eT6N = "/at";
            if (d4h.notice) eT6N = "/notify";
            if (d4h.comment) eT6N = "/comment";
            if (d4h.msg > 0) eT6N = "/private";
            if (d4h.forward > 0) eT6N = "/at";
            this.Md7W.parentNode.href = "/msg/#" + eT6N
        } else {
            this.Md7W.parentNode.href = "javascript:;";
            a2x.y4C(this.OT9K, "f-hide");
            a2x.y4C(this.Md7W, "f-hide");
            this.bbY4c = false
        }
        var i4m = a2x.H4L(this.bur9i, "j-t");
        if (!/^\/friend/.test(dO6I)) {
            if (i4m && i4m.length) {
                a2x.ba4e(i4m[0], "display", d4h.event > 0 ? "" : "none")
            }
        } else {
            a2x.ba4e(i4m[0], "display", "none")
        }
    };
    b3x.cM6G = function (d4h) {
        var f4j = h4l.W4a(d4h, "d:action");
        if (f4j) {
            switch (a2x.t4x(f4j, "action")) {
                case"login":
                    h4l.cp5u(d4h);
                    var u4y = a2x.t4x(f4j, "type");
                    if (u4y) {
                        if (u4y == "sina" || u4y == "tencent") top.open(f4j.href); else top.login(u4y == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case"logout":
                    h4l.cp5u(d4h);
                    top.logout();
                    break;
                case"viewStore":
                    if (!this.buZ9Q.bsD8v("storeNew")) {
                        a2x.y4C(this.cFe8W, "f-vhide")
                    }
                    break;
                case"viewLevel":
                    if (!this.buZ9Q.bsD8v("levelNew")) {
                        a2x.y4C(this.cFg8Y, "f-vhide")
                    }
                    break
            }
        }
    };
    b3x.Pc9T = function (d4h) {
        var f4j = h4l.W4a(d4h, "d:action");
        if (!f4j) return;
        var U4Y = a2x.t4x(f4j, "action");
        switch (U4Y) {
            case"bilog":
                var bvt9k = a2x.t4x(f4j, "logAction"), bvw9n = a2x.t4x(f4j, "logJson");
                window.log(bvt9k, bvw9n);
                break
        }
    };
    b3x.bMs3x = function (Mg7Z, d4h) {
        if (this.bvz9q) {
            this.bvz9q.style.display = !Mg7Z ? "none" : "";
            (Mg7Z || !this.bbY4c ? a2x.y4C : a2x.x4B).call(window, this.OT9K, "f-hide")
        }
    };
    b3x.cgX1x = function (gj7c) {
        a2x.ba4e(this.n4r, "top", -gj7c + "px")
    };
    b3x.bMr3x = function (eT6N, cgP1x) {
        this.cgZ1x.nF9w(eT6N);
        if (eT6N == "discover") {
            a2x.y4C(this.bMt3x, "f-hide");
            a2x.x4B(this.buB9s, "f-hide");
            window.g_topBarHeight = 105;
            this.buG9x.nF9w(cgP1x)
        } else {
            a2x.x4B(this.bMt3x, "f-hide");
            a2x.y4C(this.buB9s, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b3x.cgU1x = function () {
        var eh6b = a2x.B4F("g_iframe");
        if (!eh6b) return;
        var gx7q = eh6b.contentWindow.document.getElementById("g_top");
        this.bMr3x(a2x.t4x(gx7q, "module"), a2x.t4x(gx7q, "sub"))
    };
    var bcc4g = {}, bMl3x = /\/\/\w+/, cgJ1x = {
        avatarUrl: function (a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bMl3x, "") !== b.replace(bMl3x, "")
        }, userId: true, nickname: true, reward: true, topic: true, djStatus: true
    };
    b3x.cgG1x = function (bcj4n) {
        var ob0x = k4o.di6c(cgJ1x, function (D4H, J4N) {
            if (k4o.gG7z(D4H)) {
                return D4H(bcj4n[J4N], bcc4g[J4N])
            } else {
                return bcj4n[J4N] !== bcc4g[J4N]
            }
        });
        bcc4g = bcj4n;
        return bcj4n[ob0x]
    };
    b3x.LY7R = function () {
        var dp6j = GUser || {}, cgF1x = GUserAcc || {};
        if (dp6j && dp6j.userId) {
            var bMi3x = NEJ.X(dp6j, cgF1x);
            if (this.cgG1x(bMi3x)) {
                a2x.dI6C(this.Gv5A, "m-topbar-user-login", bMi3x)
            }
        } else {
            bcc4g = {};
            this.Gv5A.innerHTML = a2x.iI8A("m-topbar-user-unlogin");
            var i4m = a2x.H4L(this.bur9i, "j-t");
            a2x.ba4e(i4m[0], "display", "none")
        }
        a2x.x4B(this.Gv5A, "f-hide");
        this.bbY4c = false;
        var i4m = a2x.H4L(this.Gv5A, "j-uflag");
        if (dp6j && dp6j.userId) {
            this.OT9K = i4m.shift();
            this.bvz9q = i4m.shift();
            this.Md7W = i4m.shift()
        } else {
            this.bvz9q = i4m.shift()
        }
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, h4l = c4g("nej.v"), I4M = c4g("nej.ut"), q4u = c4g("nm.d"), b3x, K4O;
    q4u.fe7X({
        "polling-get": {
            type: "GET", url: "/api/pl/count", format: function (Q4U) {
                h4l.z4D(q4u.to1x, "message", Q4U)
            }
        }
    });
    q4u.to1x = NEJ.C();
    b3x = q4u.to1x.O4S(q4u.hG7z);
    b3x.bck4o = function () {
        this.co5t("polling-get", {})
    };
    b3x.uI2x = function () {
        var eg6a;
        return function () {
            if (!!eg6a) return;
            eg6a = window.setInterval(this.bck4o.g4k(this), 1e5);
            this.bck4o()
        }
    }();
    I4M.fJ7C.A4E({event: "message", element: q4u.to1x})
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host), uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""), uri = {}, i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol, host = uri.host, port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""), components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [], depth = typeof deep == "undefined" ? 2 : deep, prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {
            }

            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function (arr, arr2) {
            var ret = [], longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {
            }
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {
        }

        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }

            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {parse: nativeJSON.parse, stringify: nativeJSON.stringify}
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }

        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent,
            meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case"string":
                    return quote(value);
                case"number":
                    return isFinite(value) ? String(value) : "null";
                case"boolean":
                case"null":
                    return String(value);
                case"object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }

        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {"": value})
        };
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON, indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type), id = packet.id || "", endpoint = packet.endpoint || "",
                ack = packet.ack, data = null;
            switch (packet.type) {
                case"error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case"message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case"event":
                    var ev = {name: packet.name};
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case"json":
                    data = JSON.stringify(packet.data);
                    break;
                case"connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case"ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "", data = pieces[5] || "",
                packet = {type: packets[pieces[1]], endpoint: pieces[4] || ""};
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data"; else packet.ack = true
            }
            switch (packet.type) {
                case"error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case"message":
                    packet.data = data || "";
                    break;
                case"event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {
                    }
                    packet.args = packet.args || [];
                    break;
                case"json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {
                    }
                    break;
                case"connect":
                    packet.qs = data || "";
                    break;
                case"ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {
                            }
                        }
                    }
                    break;
                case"disconnect":
                case"heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }

        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({type: "heartbeat"})
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }

        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({type: "connect"})
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {
        }

        Socket.prototype.handshake = function (fn) {
            var self = this, options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }

            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0], script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {
                                        }
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }

                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({type: "disconnect"})
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected, wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this, maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"], limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({type: "connect"})
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }

            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }

        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {type: this.flags.json ? "json" : "message", data: data};
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1), lastArg = args[args.length - 1],
                packet = {type: "event", name: name};
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({type: "disconnect"});
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({type: "ack", args: io.util.toArray(arguments), ackId: packet.id})
            }

            switch (packet.type) {
                case"connect":
                    this.$emit("connect");
                    break;
                case"disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case"message":
                case"json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({type: "ack", ackId: packet.id})
                    }
                    this.$emit.apply(this, params);
                    break;
                case"event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case"ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case"error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }

        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }

        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }

        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this, args = arguments;
            WebSocket.bcp4t(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this, args = arguments;
            WebSocket.bcp4t(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.OC9t.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options, port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bwv9m();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }

            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window,
                j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false,
                a = false, n, G, m = true, M = function () {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1", ag = [0, 0, 0], ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new (window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {
                            }
                        }
                    }
                    return {w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac}
                }(), k = function () {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function () {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function () {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {success: false, id: Y};
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {success: false, id: X};
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {
                }
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv, X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }

            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function (ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({success: false, id: ab})
                        }
                    }
                }, getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {success: false, id: ah};
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                }, switchOffAutoHideShow: function () {
                    m = false
                }, ua: M, getFlashPlayerVersion: function () {
                    return {major: M.pv[0], minor: M.pv[1], release: M.pv[2]}
                }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                }, showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                }, removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                }, createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                }, expressInstallCallback: function () {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }
    (function () {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () {
                }, error: function () {
                }
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gY7R = WebSocket.cgC1x++;
            WebSocket.bMh3x[self.gY7R] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lW9N = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.bcp4t(function () {
                    WebSocket.qa0x.create(self.gY7R, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw"INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.qa0x.send(this.gY7R, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.qa0x.close(this.gY7R)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.lW9N)) {
                this.lW9N[type] = []
            }
            this.lW9N[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.lW9N)) return;
            var events = this.lW9N[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.lW9N[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cgz1x = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bMg3x(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bMg3x("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cgu1x("message", data)
            } else {
                throw"unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bMg3x = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {type: type, bubbles: false, cancelable: false}
            }
        };
        WebSocket.prototype.cgu1x = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {type: type, data: data, bubbles: false, cancelable: false}
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.qa0x = null;
        WebSocket.bMh3x = {};
        WebSocket.OC9t = [];
        WebSocket.cgC1x = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.bcp4t(function () {
                WebSocket.qa0x.loadManualPolicyFile(url)
            })
        };
        WebSocket.bwv9m = function () {
            if (WebSocket.qa0x) return;
            if (WebSocket.cgt1x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cgt1x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cgs1x()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cFi8a = function () {
            setTimeout(function () {
                WebSocket.qa0x = document.getElementById("webSocketFlash");
                WebSocket.qa0x.setCallerUrl(location.href);
                WebSocket.qa0x.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.OC9t.length; ++i) {
                    WebSocket.OC9t[i]()
                }
                WebSocket.OC9t = []
            }, 0)
        };
        WebSocket.cFk8c = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.qa0x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bMh3x[events[i].webSocketId].cgz1x(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cFm8e = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dP6J = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.bcp4t = function (task) {
            if (WebSocket.qa0x) {
                task()
            } else {
                WebSocket.OC9t.push(task)
            }
        };
        WebSocket.cgs1x = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.bwv9m()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.bwv9m()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }

        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };

        function empty() {
        }

        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }

            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {
                }
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {
            }
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.c4g = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {
            }
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {
                }
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {
                }
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {
        }

        XHRPolling.prototype.get = function () {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }

            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {
                }
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.c4g(msg)
            })
        }

        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index, iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }

            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {
            }
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this, script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c4g = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.ec6W) this.ec6W = {};
        this.bMc3x = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.ec6W || !this.ec6W.error || isArray(this.ec6W.error) && !this.ec6W.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.ec6W) return false;
        var handler = this.ec6W[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.ec6W) this.ec6W = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.ec6W[type]) {
            this.ec6W[type] = listener
        } else if (isArray(this.ec6W[type])) {
            this.ec6W[type].push(listener)
        } else {
            this.ec6W[type] = [this.ec6W[type], listener]
        }
        if (isArray(this.ec6W[type]) && !this.ec6W[type].warned) {
            var m;
            if (this.bMc3x !== undefined) {
                m = this.bMc3x
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.ec6W[type].length > m) {
                this.ec6W[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.ec6W[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }

        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.ec6W || !this.ec6W[type]) return this;
        var list = this.ec6W[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.ec6W[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.ec6W = {};
            return this
        }
        var events = this.ec6W && this.ec6W[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.ec6W[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.ec6W) this.ec6W = {};
        if (!this.ec6W[type]) this.ec6W[type] = [];
        if (!isArray(this.ec6W[type])) {
            this.ec6W[type] = [this.ec6W[type]]
        }
        return this.ec6W[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {
            }

            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {"force new connection": true, reconnect: true, "max reconnection attempts": 50}
        } else {
            params = {"force new connection": true, reconnect: false}
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {id: msgId, route: path, msg: msg};
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {flag: "online", domain: current_domain, user: current_user})
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {user: user, msgIds: msgIds, types: types, domain: domain};
        notify("ack", message)
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        l4p = c4g("nm.x"), dC6w = c4g("nm.u"), q4u = c4g("nm.d"), OA9r = c4g("pomelo"), X4b = 0, b3x, K4O;
    q4u.fe7X({
        "polling-init": {
            url: "/api/push/init", format: function (Q4U) {
                X4b = 2;
                var tq1x = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }, j4n = Q4U.account || bb4f, dn6h = GUser.userId;
                OA9r.init(tq1x.host, tq1x.port, true, this.cgg1x.g4k(this, {
                    user: dn6h,
                    nonce: j4n.nonce,
                    domain: tq1x.domain,
                    productKey: tq1x.key,
                    signature: j4n.signature,
                    expire_time: j4n.expireTime
                }))
            }, onerror: function () {
                return this.beU5Z()
            }
        }
    });
    q4u.BK4O = NEJ.C();
    b3x = q4u.BK4O.O4S(q4u.hG7z);
    b3x.cx5C = function () {
        var qQ0x = !1;
        return function (e4i) {
            if (!qQ0x) {
                qQ0x = !0
            }
            this.cD6x(e4i);
            OA9r.on("specify", this.qG0x.g4k(this));
            OA9r.on("broadcast", this.qG0x.g4k(this))
        }
    }();
    b3x.qG0x = function (d4h) {
        k4o.bd4h(d4h, function (bH4L) {
            h4l.z4D(q4u.BK4O, "message", bH4L)
        }, this)
    };
    b3x.beU5Z = function () {
        var bA4E = 500;
        return function () {
            X4b = 0;
            OA9r.disconnect();
            if (bA4E > 6e4) bA4E = 500;
            bA4E *= 2
        }
    }();
    b3x.cgg1x = function (e4i, cb5g) {
        if (!!cb5g) {
            return this.beU5Z()
        }
        X4b = 3;
        OA9r.registerAndBind(e4i, function (o4s) {
            if (o4s.code != 200) {
                return this.beU5Z()
            }
            X4b = 4
        }.g4k(this))
    };
    b3x.cFo8g = function () {
        dC6w.cfS1x.gr7k().cFp8h()
    };
    b3x.cFq8i = function () {
        dC6w.cfS1x.gr7k().cFr8j()
    };
    b3x.bfk5p = function () {
        var qQ0x = !1;
        return function () {
            if (qQ0x) return;
            qQ0x = !0;
            this.co5t("polling-init", {})
        }
    }();
    I4M.fJ7C.A4E({event: "message", element: q4u.BK4O})
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = c4g("nej.e"), h4l = c4g("nej.v"), v4z = c4g("nej.j"), dv6p = c4g("nej.p"),
        k4o = c4g("nej.u"), m4q = c4g("nm.l"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), cW6Q = c4g("api"), b3x, K4O;
    var gi7b = a2x.iu8m('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    m4q.bfn5s = NEJ.C();
    b3x = m4q.bfn5s.O4S(m4q.en6h);
    K4O = m4q.bfn5s.cs5x;
    b3x.bl4p = function (e4i) {
        e4i.title = "意见反馈";
        this.bm4q(e4i)
    };
    b3x.ce5j = function () {
        this.cd5i = gi7b
    };
    b3x.bW5b = function () {
        this.cg5l();
        this.hy7r = {};
        var Mk7d = a2x.H4L;
        var HI6C = h4l.s4w;
        this.hy7r.submit_btn = Mk7d(this.n4r, "u-btn2")[0];
        this.hy7r.cancle_btn = Mk7d(this.n4r, "u-btn2")[1];
        this.hy7r.prompt_msg = Mk7d(this.n4r, "u-err")[0];
        this.hy7r.zs = Mk7d(this.n4r, "zs")[0];
        a2x.ba4e(this.hy7r.zs, "display", "none");
        this.hy7r.fb_txt = Mk7d(this.n4r, "u-txt")[0];
        this.hy7r.contact = Mk7d(this.n4r, "u-txt")[1];
        a2x.gn7g(this.hy7r.fb_txt, "holder");
        a2x.gn7g(this.hy7r.contact, "holder");
        if (a2x.bE4I(this.hy7r.fb_txt.parentNode, "holder-parent")) {
            a2x.ba4e(this.hy7r.fb_txt.parentNode, "display", "block")
        }
        if (a2x.bE4I(this.hy7r.contact.parentNode, "holder-parent")) {
            a2x.ba4e(this.hy7r.contact.parentNode, "display", "block")
        }
        HI6C(this.hy7r.submit_btn, "click", this.cfP1x.g4k(this));
        HI6C(this.hy7r.cancle_btn, "click", this.cfO1x.g4k(this));
        HI6C(this.hy7r.prompt_msg, "msgShow", this.cfK1x.g4k(this));
        HI6C(this.hy7r.fb_txt, "keyup", this.uU2x.g4k(this));
        HI6C(this.hy7r.fb_txt, "input", this.fN7G.g4k(this));
        HI6C(this.hy7r.contact, "keyup", this.cfJ1x.g4k(this));
        HI6C(this.hy7r.contact, "input", this.bLT3x.g4k(this));
        this.kI8A = q4u.hR8J.A4E()
    };
    b3x.cfP1x = function (d4h) {
        h4l.bh4l(d4h);
        if (this.cO6I()) return;
        var bo4s = this.hy7r.fb_txt.value.trim();
        var bq4u = bo4s.length;
        var e4i = {type: "json", method: "post", noEnc: true};
        var bLS3x = this.hy7r.contact.value.trim();
        var bcC4G = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l4p.bwp9g(),
            contact: bLS3x
        };
        var j4n = {content: bo4s, client: "web", xInfo: JSON.stringify(bcC4G)}, nI9z = this.kI8A.cta5f();
        if (nI9z && nI9z.length) {
            j4n.log = nI9z.join("\n")
        }
        if (bq4u == 0) {
            this.hy7r.prompt_msg.innerHTML = "反馈内容不能为空";
            a2x.ba4e(this.hy7r.prompt_msg, "display", "block");
            return
        }
        if (bLS3x.length > 100) {
            this.hy7r.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a2x.ba4e(this.hy7r.prompt_msg, "display", "block");
            return
        }
        this.cO6I(true);
        e4i.data = k4o.cE6y(j4n);
        e4i.onload = this.cfz1x.g4k(this);
        e4i.onerror = this.iY8Q.g4k(this);
        v4z.bn4r("/api/feedback/web", e4i)
    };
    b3x.fN7G = function (d4h) {
        var bq4u = this.hy7r.fb_txt.value.trim().length;
        if (bq4u > 0) a2x.ba4e(this.hy7r.prompt_msg, "display", "none");
        dv6p.ds6m.browser == "ie" && dv6p.ds6m.version < "7.0" ? setTimeout(this.gk7d.g4k(this), 0) : this.gk7d()
    };
    b3x.uU2x = function (d4h) {
        if (d4h.keyCode === 8) this.gk7d()
    };
    b3x.gk7d = function () {
        var bq4u = this.hy7r.fb_txt.value.trim().length;
        this.hy7r.zs.innerHTML = !bq4u ? "0/140" : bq4u + "/140"
    };
    b3x.bLT3x = function (d4h) {
        var bq4u = this.hy7r.contact.value.trim().length;
        if (bq4u > 0) a2x.ba4e(this.hy7r.prompt_msg, "display", "none")
    };
    b3x.cfJ1x = function (d4h) {
        if (d4h.keyCode === 8) this.bLT3x()
    };
    b3x.cfO1x = function (d4h) {
        h4l.cp5u(d4h);
        this.bu4y()
    };
    b3x.cfK1x = function (d4h) {
        var f4j = h4l.W4a(d4h);
        f4j.innerHTML = "请输入反馈内容"
    };
    b3x.cFs8k = function (cFt8l) {
        var f4j = h4l.W4a(d4h);
        f4j.innerHTML = ""
    };
    b3x.cfz1x = function (o4s) {
        this.cO6I(false);
        this.bu4y();
        m4q.Z4d.L4P({tip: "意见发送成功", autoclose: true})
    };
    b3x.iY8Q = function (o4s) {
        this.cO6I(false);
        m4q.Z4d.L4P({tip: "意见发送失败", autoclose: true})
    };
    b3x.cO6I = function (cX6R) {
        return this.dX6R(this.hy7r.submit_btn, cX6R, "发送意见", "发送中...")
    };
    b3x.L4P = function () {
        K4O.L4P.call(this);
        this.cO6I(false);
        this.hy7r.fb_txt.value = "";
        this.hy7r.contact.value = "";
        a2x.ba4e(this.hy7r.prompt_msg, "display", "none");
        this.gk7d()
    };
    l4p.cfu1x = function (e4i) {
        e4i = e4i || {};
        if (e4i.title === undefined) e4i.title = "意见反馈";
        m4q.bfn5s.L4P(e4i)
    };
    cW6Q.feedback = l4p.feedback = l4p.cfu1x
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, N4R = c4g("nej.ui"), b3x;
    if (!!N4R.yA3x) return;
    N4R.yA3x = NEJ.C();
    b3x = N4R.yA3x.O4S(N4R.ei6c);
    b3x.cx5C = function () {
        this.gY7R = this.bLM3x();
        this.cD6x()
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.ct5y = e4i.index;
        this.gA7t = e4i.total;
        this.ht7m = e4i.range;
        this.gB7u(e4i.data)
    };
    b3x.bD4H = function () {
        this.bG4K();
        delete this.bk4o;
        delete this.ct5y;
        delete this.gA7t;
        delete this.ht7m
    };
    b3x.iy8q = bs4w;
    b3x.bLM3x = function () {
        var gJ7C = +(new Date);
        return function () {
            return "itm-" + ++gJ7C
        }
    }();
    b3x.FB5G = function () {
        return this.gY7R
    };
    b3x.ie8W = function () {
        return this.bk4o
    };
    b3x.gB7u = function (j4n) {
        this.bk4o = j4n || {};
        this.iy8q(this.bk4o)
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), N4R = c4g("nej.ui"), b3x, K4O;
    if (!!N4R.vh2x) return;
    N4R.vh2x = NEJ.C();
    b3x = N4R.vh2x.O4S(N4R.yA3x);
    K4O = N4R.vh2x.cs5x;
    b3x.bl4p = function (e4i) {
        this.cfq0x = e4i.pkey || "id";
        this.bm4q(e4i)
    };
    b3x.DC4G = function (j4n) {
        this.z4D("ondelete", {ext: j4n, id: this.FB5G(), data: this.ie8W(), body: this.lQ9H()})
    };
    b3x.tz1x = function (j4n) {
        this.z4D("onupdate", {ext: j4n, id: this.FB5G(), data: this.ie8W(), body: this.lQ9H()})
    };
    b3x.gB7u = function (j4n) {
        K4O.gB7u.apply(this, arguments);
        this.gY7R = this.bk4o[this.cfq0x] || this.bLM3x()
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, fx7q = NEJ.R, a2x = c4g("nej.e"), k4o = c4g("nej.u"), N4R = c4g("nej.ui"), b3x, iZ8R,
        bgj5o;
    if (!!N4R.bgk5p) return;
    N4R.bgk5p = NEJ.C();
    b3x = N4R.bgk5p.O4S(N4R.ei6c);
    b3x.bl4p = function (e4i) {
        this.bda4e = NEJ.X({}, e4i);
        this.fP7I = NEJ.X({}, e4i);
        delete this.bda4e.onchange;
        this.fP7I.onchange = this.fY7R.g4k(this);
        this.bm4q(e4i);
        this.cfm0x({number: e4i.number, label: e4i.label || bb4f})
    };
    b3x.bD4H = function () {
        this.bG4K();
        if (!!this.lp9g) {
            this.lp9g.T4X();
            delete this.lp9g
        }
        delete this.bda4e;
        delete this.fP7I;
        this.cfk0x();
        this.n4r.innerHTML = "&nbsp;"
    };
    b3x.ce5j = function () {
        this.mb9S = iZ8R
    };
    b3x.cfm0x = function (j4n) {
        a2x.dI6C(this.n4r, bgj5o, j4n);
        var gJ7C = a2x.Ja6U();
        this.fP7I.list = a2x.H4L(this.n4r, "js-i-" + gJ7C);
        this.fP7I.pbtn = (a2x.H4L(this.n4r, "js-p-" + gJ7C) || fx7q)[0];
        this.fP7I.nbtn = (a2x.H4L(this.n4r, "js-n-" + gJ7C) || fx7q)[0]
    };
    b3x.bW5b = function () {
        this.cg5l()
    };
    b3x.cFu8m = function (j4n) {
        return a2x.bZ5e(bgj5o, j4n)
    };
    b3x.fY7R = function (d4h) {
        if (this.NN9E) return;
        var r4v = d4h.index, cy5D = d4h.total;
        this.NN9E = !0;
        this.NM9D(r4v, cy5D);
        k4o.bd4h(this.bde4i, function (tC1x) {
            tC1x.NM9D(r4v, cy5D)
        });
        this.NN9E = !1;
        this.z4D("onchange", d4h)
    };
    b3x.g4k = function (bI4M) {
        bI4M = a2x.B4F(bI4M);
        if (!bI4M) return this;
        var cq5v = NEJ.X({}, this.bda4e);
        cq5v.parent = bI4M;
        cq5v.index = this.tD1x();
        cq5v.total = this.kq8i();
        var tC1x = this.constructor.A4E(cq5v);
        tC1x.xp2x("onchange", this.fP7I.onchange);
        if (!this.bde4i) this.bde4i = [];
        this.bde4i.push(tC1x);
        return this
    };
    b3x.cfk0x = function () {
        var bnv7o = function (tC1x, r4v, i4m) {
            tC1x.T4X();
            i4m.splice(r4v, 1)
        };
        return function () {
            k4o.no9f(this.bde4i, bnv7o)
        }
    }();
    b3x.kU9L = function (r4v) {
        if (!this.lp9g) return;
        this.lp9g.kU9L(r4v)
    };
    b3x.tD1x = function () {
        if (!this.lp9g) return 1;
        return this.lp9g.tD1x()
    };
    b3x.kq8i = function () {
        if (!this.lp9g) return 1;
        return this.lp9g.kq8i()
    };
    b3x.NM9D = function (r4v, cy5D) {
        if (!this.lp9g) return;
        this.lp9g.NM9D(r4v, cy5D)
    };
    b3x.bgE5J = function (cy5D) {
        if (!this.lp9g) return;
        this.lp9g.bgE5J(cy5D)
    };
    iZ8R = a2x.tO1x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bgj5o = a2x.es6m('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"), b3x;
    if (!!N4R.bdg4k) return;
    N4R.bdg4k = NEJ.C();
    b3x = N4R.bdg4k.O4S(N4R.cH6B);
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.bdn4r = e4i.pbtn;
        this.cr5w = e4i.nbtn;
        this.bdp4t = e4i.sbtn;
        this.bdr4v = e4i.ebtn;
        this.ji8a = e4i.event || "click";
        this.kR9I = e4i.selected || "js-selected";
        this.nK9B = e4i.disabled || "js-disabled";
        this.cfg0x(e4i.list);
        this.NM9D(e4i.index || 1, e4i.total || 1)
    };
    b3x.bD4H = function () {
        this.bG4K();
        delete this.bU5Z;
        delete this.ji8a;
        delete this.bdn4r;
        delete this.cr5w;
        delete this.bdp4t;
        delete this.bdr4v;
        delete this.bLJ3x;
        delete this.gA7t;
        delete this.ct5y;
        delete this.kR9I;
        delete this.nK9B
    };
    b3x.cfg0x = function () {
        var bgY5d = function (f4j) {
            this.bU5Z.push(f4j);
            this.bX5c([[f4j, this.ji8a, this.cu5z.ew6q(this, 0)]])
        };
        return function (i4m) {
            this.bU5Z = [];
            this.bX5c([[this.bdn4r, "click", this.cu5z.ew6q(this, -1)], [this.cr5w, "click", this.cu5z.ew6q(this, 1)], [this.bdp4t, "click", this.cu5z.ew6q(this, -2)], [this.bdr4v, "click", this.cu5z.ew6q(this, 2)]]);
            k4o.bd4h(i4m, bgY5d, this)
        }
    }();
    b3x.Ee5j = function (f4j, r4v) {
        if (r4v == null) {
            f4j.innerText = "";
            a2x.ba4e(f4j, "display", "none");
            a2x.x4B(f4j, this.kR9I)
        } else {
            f4j.innerText = r4v;
            a2x.ba4e(f4j, "display", "");
            r4v == this.ct5y ? a2x.y4C(f4j, this.kR9I) : a2x.x4B(f4j, this.kR9I)
        }
    };
    b3x.bhd5i = function () {
        if (this.ct5y <= 1) {
            a2x.y4C(this.bdn4r, this.nK9B);
            a2x.y4C(this.bdp4t, this.nK9B)
        } else {
            a2x.x4B(this.bdn4r, this.nK9B);
            a2x.x4B(this.bdp4t, this.nK9B)
        }
        if (this.ct5y >= this.gA7t) {
            a2x.y4C(this.cr5w, this.nK9B);
            a2x.y4C(this.bdr4v, this.nK9B)
        } else {
            a2x.x4B(this.cr5w, this.nK9B);
            a2x.x4B(this.bdr4v, this.nK9B)
        }
    };
    b3x.bdt4x = bs4w;
    b3x.bhg5l = function () {
        this.bdt4x();
        this.bhd5i();
        this.z4D("onchange", {last: this.bLJ3x, total: this.gA7t, index: this.ct5y, ext: this.bhi5n})
    };
    b3x.bLI3x = function (r4v) {
        r4v = parseInt(r4v);
        if (isNaN(r4v) || this.gA7t == null) return !1;
        r4v = Math.max(1, Math.min(r4v, this.gA7t));
        this.bLJ3x = this.ct5y;
        this.ct5y = r4v;
        return !0
    };
    b3x.bhk5p = function (cy5D) {
        cy5D = parseInt(cy5D);
        if (isNaN(cy5D) || cy5D < 1) return !1;
        this.gA7t = cy5D;
        return !0
    };
    b3x.cu5z = function (d4h, eV6P) {
        h4l.cp5u(d4h);
        var F4J = h4l.W4a(d4h);
        if (!F4J || a2x.bE4I(F4J, this.kR9I) || a2x.bE4I(F4J, this.nK9B)) return;
        var r4v = F4J.innerText;
        switch (eV6P) {
            case 1:
            case-1:
                r4v = this.ct5y + eV6P;
                break;
            case 2:
                r4v = this.gA7t;
                break;
            case-2:
                r4v = 1;
                break
        }
        this.kU9L(r4v)
    };
    b3x.tD1x = function () {
        return this.ct5y
    };
    b3x.kU9L = function (r4v) {
        var ceX0x = this.ct5y;
        this.bLI3x(r4v);
        if (ceX0x != this.ct5y) this.bhg5l();
        return this
    };
    b3x.kq8i = function () {
        return this.gA7t
    };
    b3x.UD1x = function (cy5D) {
        if (this.bhk5p(cy5D) && this.ct5y != null) {
            this.ct5y = 1;
            this.bhg5l()
        }
        return this
    };
    b3x.bgE5J = function (cy5D) {
        if (this.bhk5p(cy5D)) {
            this.bdt4x();
            this.bhd5i()
        }
        return this
    };
    b3x.NM9D = function (r4v, cy5D) {
        if (!this.bhk5p(cy5D) || !this.bLI3x(r4v)) return this;
        this.bhg5l();
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = c4g("nej.e"), k4o = c4g("nej.u"), cY6S = c4g("nej.x"), N4R = c4g("nej.ut"),
        b3x;
    if (!!N4R.ND9u) return;
    N4R.ND9u = NEJ.C();
    b3x = N4R.ND9u.O4S(N4R.bdg4k);
    b3x.cx5C = function () {
        this.cD6x();
        var f4j = a2x.dg6a("span", "zdot");
        f4j.innerText = "...";
        this.bdu4y = [f4j.cloneNode(true), f4j]
    };
    b3x.bD4H = function () {
        this.bG4K();
        this.bLF3x()
    };
    b3x.bLF3x = function () {
        a2x.mY9P(this.bdu4y[0]);
        a2x.mY9P(this.bdu4y[1])
    };
    b3x.bdt4x = function () {
        this.bhi5n = {last: !1, first: !1, list: this.bU5Z};
        this.bLF3x();
        this.Ee5j(this.bU5Z[0], 1);
        var bM4Q = 1, bq4u = this.bU5Z.length;
        if (this.gA7t < bq4u) {
            for (var qp0x; bM4Q < bq4u; bM4Q++) {
                qp0x = bM4Q + 1;
                this.Ee5j(this.bU5Z[bM4Q], qp0x > this.gA7t ? null : qp0x)
            }
            return
        }
        if (this.ct5y > 1) {
            var cF6z = Math.floor((bq4u - 2) / 2), ceP0x = this.gA7t - bq4u + 2, hz7s = Math.max(2, this.ct5y - cF6z);
            if (this.gA7t >= bq4u) {
                hz7s = Math.min(hz7s, ceP0x)
            }
            if (hz7s > 2) {
                this.bU5Z[0].insertAdjacentElement("afterEnd", this.bdu4y[0]);
                this.bhi5n.first = !0
            }
            for (var r4v; ; bM4Q++) {
                r4v = hz7s + bM4Q - 1;
                if (r4v > this.ct5y) break;
                this.Ee5j(this.bU5Z[bM4Q], r4v)
            }
        }
        if (this.ct5y < this.gA7t) {
            var r4v, hz7s = this.ct5y + 1;
            for (var i = 0, l = bq4u - 2; ; i++, bM4Q++) {
                r4v = hz7s + i;
                if (bM4Q > l || r4v > this.gA7t) break;
                this.Ee5j(this.bU5Z[bM4Q], r4v)
            }
            if (r4v < this.gA7t) {
                this.bU5Z[bM4Q].insertAdjacentElement("beforeBegin", this.bdu4y[1]);
                this.bhi5n.last = !0
            }
            if (r4v <= this.gA7t) {
                this.Ee5j(this.bU5Z[bM4Q++], this.gA7t)
            }
        }
        for (; bM4Q < bq4u; bM4Q++) {
            this.Ee5j(this.bU5Z[bM4Q])
        }
    };
    a2x.ceN0x = cY6S.ceN0x = function (bI4M, e4i) {
        var C4G = a2x.lv9m(bI4M);
        if (!C4G) return null;
        if (!N4R.bba4e(C4G, N4R.ND9u)) {
            e4i = e4i || {};
            var i4m = !e4i.clazz ? a2x.dk6e(C4G) : a2x.H4L(C4G, e4i.clazz);
            e4i.pbtn = i4m.shift();
            e4i.nbtn = i4m.pop();
            e4i.list = i4m;
            delete e4i.clazz
        }
        return N4R.bba4e(C4G, N4R.ND9u, e4i || bb4f)
    };
    cY6S.isChange = !0
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, fx7q = NEJ.R, a2x = c4g("nej.e"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        N4R = c4g("nej.ui"), b3x, K4O, gi7b;
    if (!!N4R.NA9r) return;
    N4R.NA9r = NEJ.C();
    b3x = N4R.NA9r.O4S(N4R.bgk5p);
    K4O = N4R.NA9r.cs5x;
    b3x.bl4p = function (e4i) {
        e4i.number = parseInt(e4i.number) || 9;
        this.bm4q(e4i);
        this.lp9g = I4M.ND9u.A4E(this.fP7I)
    };
    b3x.fY7R = function (d4h) {
        if (!!this.bda4e.noend) {
            var bLB3x = d4h.ext || bb4f, i4m = bLB3x.list || fx7q;
            if (bLB3x.last) {
                a2x.ba4e(i4m[i4m.length - 1], "display", "none")
            }
        }
        K4O.fY7R.apply(this, arguments)
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        bc4g = c4g("nej.ui"), N4R = c4g("nej.ut"), b3x;
    if (!!N4R.bdx4B) return;
    N4R.bdx4B = NEJ.C();
    b3x = N4R.bdx4B.O4S(N4R.cH6B);
    b3x.bl4p = function (e4i) {
        this.jq8i = {};
        this.bm4q(e4i);
        this.ii8a = a2x.B4F(e4i.parent);
        this.fd6X = {parent: this.ii8a};
        this.pd0x = parseInt(e4i.limit) || 10;
        this.zO3x = parseInt(e4i.first) || this.pd0x;
        this.ceL0x(e4i.item);
        this.ceK0x(e4i.cache || bb4f);
        this.ceI0x(e4i.pager || bb4f);
        this.gB7u()
    };
    b3x.bD4H = function () {
        this.z4D("onbeforerecycle");
        this.Nu8m();
        this.bG4K();
        if (this.jq8i.clear) {
            this.S4W.ut1x(this.jq8i.key)
        }
        this.S4W.T4X();
        if (!!this.jo8g) {
            this.jo8g.T4X();
            delete this.jo8g
        }
        delete this.bLz3x;
        delete this.fP7I;
        delete this.bdH4L;
        delete this.S4W;
        delete this.ii8a;
        delete this.Ns8k;
        delete this.fd6X;
        delete this.jq8i
    };
    b3x.bLy3x = function () {
        var dh6b = /\{(.*?)\}/gi, ceB0x = function (or0x, j4n) {
            return (or0x || "{id}{seed}").replace(dh6b, function ($1, $2) {
                var D4H = j4n[$2];
                return D4H == null ? $1 : D4H
            })
        };
        return function (C4G) {
            var J4N = ceB0x(this.fd6X.jstIdTempalte, {id: C4G, seed: a2x.Ja6U()});
            if (!this.fd6X.jstIdType) {
                return a2x.B4F(J4N)
            } else if (this.fd6X.jstIdType == 1) {
                return (a2x.H4L(this.ii8a, J4N) || [])[0]
            }
        }
    }();
    b3x.Bk4o = function (bM4Q, bi4m, gc7V, bq4u) {
        var o4s = {index: 1, total: 1};
        if (bi4m >= bM4Q) {
            o4s.index = Math.floor((bi4m - bM4Q) / gc7V) + 2
        }
        if (bq4u > bM4Q) {
            o4s.total = Math.ceil((bq4u - bM4Q) / gc7V) + 1
        }
        return o4s
    };
    b3x.bLx3x = function (J4N) {
        delete this.Ns8k;
        this.MA7t = J4N;
        this.bX5c([[this.ii8a, "click", this.cez0x.g4k(this)]])
    };
    b3x.ceL0x = function (p4t) {
        if (k4o.fG7z(p4t)) {
            this.bLx3x(p4t);
            return
        }
        NEJ.X(this.fd6X, p4t);
        var dY6S = this.fd6X.klass;
        delete this.fd6X.klass;
        if (k4o.fG7z(dY6S)) {
            this.bLx3x(dY6S);
            return
        }
        delete this.MA7t;
        this.Ns8k = dY6S;
        this.fd6X.ondelete = this.z4D.g4k(this, "ondelete");
        this.fd6X.onupdate = this.z4D.g4k(this, "onupdate")
    };
    b3x.ceK0x = function (R4V) {
        var dY6S = R4V.klass, ka8S = NEJ.X({}, R4V);
        this.jq8i.key = ka8S.lkey;
        this.jq8i.data = ka8S.data || {};
        this.jq8i.clear = !!ka8S.clear;
        this.fd6X.pkey = ka8S.key || "id";
        ka8S.onlistload = this.bin6h.g4k(this);
        ka8S.onpullrefresh = this.cey0x.g4k(this);
        if (!!dY6S && "onlistchange" in dY6S) {
            this.bX5c([[dY6S, "listchange", this.bip6j.g4k(this)]])
        } else {
            ka8S.onitemadd = this.bdX4b.g4k(this);
            ka8S.onitemdelete = this.bdZ4d.g4k(this);
            ka8S.onitemupdate = this.bLw3x.g4k(this)
        }
        this.S4W = (dY6S || N4R.Uv1x).A4E(ka8S);
        if (R4V.total != null) {
            this.S4W.UD1x(this.jq8i.key, R4V.total)
        }
        if (!!R4V.list) {
            this.S4W.uu1x(this.jq8i.key, R4V.list)
        }
    };
    b3x.ceI0x = function (tC1x) {
        this.bLz3x = tC1x.klass || bc4g.NA9r;
        this.fP7I = NEJ.X({}, tC1x);
        if (k4o.eJ6D(tC1x.parent)) {
            this.fP7I.parent = tC1x.parent[0];
            this.Ng7Z = tC1x.parent.slice(1);
            if (!this.Ng7Z || !this.Ng7Z.length) {
                delete this.Ng7Z
            }
        }
        delete this.fP7I.klass
    };
    b3x.Nu8m = function () {
        var gK7D = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.z4D("onbeforelistclear", {parent: this.ii8a});
            if (!!this.fL7E && this.fL7E.length > 0) {
                this.fL7E = this.Ns8k.T4X(this.fL7E);
                delete this.fL7E
            }
            if (gK7D.test(this.ii8a.tagName)) {
                a2x.bOO4S(this.ii8a)
            } else {
                this.ii8a.innerHTML = ""
            }
        }
    }();
    b3x.biw6q = function (beb4f) {
        if (!!this.fP7I.fixed) return;
        a2x.ba4e(this.fP7I.parent, "display", beb4f);
        k4o.bd4h(this.Ng7Z, function (bI4M) {
            a2x.ba4e(bI4M, "display", beb4f)
        }, this)
    };
    b3x.biz6t = function () {
        var r4v = this.fP7I.index || 1;
        delete this.fP7I.index;
        if (!!this.jo8g) {
            r4v = this.jo8g.tD1x()
        }
        this.Be4i({last: r4v, index: r4v})
    };
    b3x.Be4i = function (d4h) {
        this.z4D("onpagechange", d4h)
    };
    b3x.bLv3x = function (bi4m) {
        this.jq8i.offset = bi4m;
        this.VQ1x()
    };
    b3x.bLu3x = function (e4i) {
        return e4i
    };
    b3x.VQ1x = function () {
        this.Nd7W();
        var j4n = this.jq8i.data;
        j4n.offset = this.jq8i.offset;
        var pG0x = j4n.offset == 0;
        j4n.total = pG0x;
        this.jq8i.limit = pG0x ? this.zO3x : this.pd0x;
        j4n.limit = this.jq8i.limit;
        this.S4W.lK9B(this.bLu3x(NEJ.X({}, this.jq8i)))
    };
    b3x.bin6h = function (e4i) {
        if (e4i.key != this.jq8i.key || e4i.offset != this.jq8i.offset) return;
        this.bed5i();
        var i4m = this.S4W.hD7w(e4i.key);
        if (!i4m || !i4m.length) {
            this.biH6B();
            return
        }
        var gc7V = e4i.limit, bi4m = e4i.offset;
        if (this.biI6C(i4m, bi4m, gc7V)) return;
        this.z4D("onbeforelistrender", {list: i4m, offset: bi4m, parent: this.ii8a});
        if (!!this.MA7t) {
            this.fd6X.xlist = i4m;
            this.fd6X.beg = bi4m;
            this.fd6X.end = Math.min(i4m.length, bi4m + gc7V) - 1;
            this.fd6X.act = "list";
            var dT6N = a2x.bZ5e(this.MA7t, this.fd6X);
            this.Nb7U(dT6N)
        } else {
            this.fd6X.limit = gc7V;
            this.fd6X.offset = bi4m;
            var ho7h = a2x.AS3x(i4m, this.Ns8k, this.fd6X);
            this.Na7T(ho7h)
        }
        this.z4D("onafterlistrender", {list: i4m, offset: bi4m, parent: this.ii8a})
    };
    b3x.cey0x = function (e4i) {
        if (!this.bdH4L) return;
        delete this.bdH4L;
        this.bed5i("onafterpullrefresh");
        this.gB7u()
    };
    b3x.bLs3x = function (r4v, cy5D) {
        if (!!this.jo8g) {
            var xm2x = this.jo8g.tD1x(), cep0x = this.jo8g.kq8i();
            if (xm2x > cy5D || cy5D != cep0x) {
                this.jo8g.T4X();
                delete this.jo8g;
                this.Be4i({last: xm2x, index: Math.min(r4v, cy5D)});
                return !0
            }
        } else {
            this.fP7I.index = r4v;
            this.fP7I.total = cy5D;
            this.jo8g = this.bLz3x.A4E(this.fP7I);
            this.jo8g.xp2x("onchange", this.Be4i.g4k(this));
            k4o.bd4h(this.Ng7Z, function (bI4M) {
                this.jo8g.g4k(bI4M)
            }, this)
        }
    };
    b3x.bei5n = function () {
        var gJ7C = +(new Date);
        return function (j4n) {
            var C4G = j4n[this.fd6X.pkey];
            if (!C4G) {
                j4n["dirty-data"] = !0;
                j4n[this.fd6X.pkey] = "dirty-" + gJ7C++
            }
            return j4n
        }
    }();
    b3x.bej5o = function (j4n) {
        var C4G = j4n[this.fd6X.pkey];
        if (!!j4n["dirty-data"]) {
            delete j4n["dirty-data"];
            delete j4n[this.fd6X.pkey]
        }
        return C4G
    };
    b3x.bel5q = function () {
        var ceo0x = function (kL8D, mx9o) {
            this.ii8a.insertAdjacentElement(kL8D, mx9o)
        };
        return function (kL8D, j4n) {
            var Jh6b = [j4n];
            if (!!this.MA7t) {
                this.fd6X.xlist = Jh6b;
                this.fd6X.beg = 0;
                this.fd6X.end = 0;
                this.fd6X.act = "add";
                this.Nb7U(a2x.bZ5e(this.MA7t, this.fd6X), kL8D)
            } else {
                this.fd6X.limit = 1;
                this.fd6X.offset = 0;
                this.fd6X.parent = ceo0x.g4k(this, kL8D);
                var ho7h = a2x.AS3x(Jh6b, this.Ns8k, this.fd6X);
                this.fd6X.parent = this.ii8a;
                this.Na7T(ho7h)
            }
        }
    }();
    b3x.Nd7W = bs4w;
    b3x.bed5i = function (V4Z) {
        var d4h = {parent: this.ii8a};
        this.z4D(V4Z || "onafterlistload", d4h);
        if (!d4h.stopped) {
            a2x.mY9P(this.cv5A)
        }
    };
    b3x.biI6C = bs4w;
    b3x.ben5s = function (bH4L, kL8D) {
        if (k4o.fG7z(bH4L)) {
            if (!this.cv5A) this.cv5A = a2x.dg6a("div");
            this.cv5A.innerHTML = bH4L
        } else {
            this.cv5A = bH4L
        }
        this.ii8a.insertAdjacentElement(kL8D || "beforeEnd", this.cv5A)
    };
    b3x.yT3x = function (V4Z, kg8Y, kL8D) {
        var d4h = {parent: this.ii8a};
        this.z4D(V4Z, d4h);
        if (!d4h.stopped) {
            this.ben5s(d4h.value || kg8Y, kL8D)
        }
    };
    b3x.biH6B = bs4w;
    b3x.Nb7U = bs4w;
    b3x.Na7T = bs4w;
    b3x.cez0x = function () {
        var gK7D = /^(?:delete|update)$/;
        return function (d4h) {
            var f4j = h4l.W4a(d4h, "d:action");
            if (!f4j) return;
            var U4Y = a2x.t4x(f4j, "action");
            if (!gK7D.test(U4Y)) return;
            var C4G = a2x.t4x(f4j, "id");
            if (!C4G) return;
            var p4t = this.S4W.eH6B(C4G);
            if (!p4t) return;
            h4l.bh4l(d4h);
            this.z4D("on" + U4Y, {data: p4t, id: p4t[this.fd6X.pkey], body: a2x.B4F(this.bLy3x(C4G))})
        }
    }();
    b3x.bdX4b = bs4w;
    b3x.VP1x = function (d4h) {
        var j4n = d4h.data || {}, e4i = {data: j4n, key: this.jq8i.key, id: j4n[this.fd6X.pkey]};
        this.z4D("onbeforedelete", e4i);
        this.S4W.Kc6W(e4i)
    };
    b3x.bdZ4d = bs4w;
    b3x.VO1x = function (d4h) {
        var j4n = d4h.data || {}, e4i = {data: j4n, key: this.jq8i.key};
        this.z4D("onbeforeupdate", e4i);
        this.S4W.VR1x(e4i)
    };
    b3x.bLw3x = function (d4h) {
        this.MR7K(d4h, "onafterupdate");
        if (d4h.stopped) return;
        var C4G = d4h.data[this.fd6X.pkey];
        if (!!this.fL7E) {
            var p4t = a2x.bTd6X(C4G);
            if (!!p4t) p4t.gB7u(d4h.data)
        } else {
            var f4j = a2x.B4F(C4G + "" + a2x.Ja6U());
            if (!f4j) return;
            var i4m = this.S4W.hD7w(d4h.key), r4v = k4o.di6c(i4m, d4h.data);
            if (r4v < 0) return;
            this.fd6X.list = i4m;
            this.fd6X.beg = r4v;
            this.fd6X.end = r4v;
            this.fd6X.act = "update";
            var dT6N = a2x.bZ5e(this.MA7t, this.fd6X);
            f4j.insertAdjacentHTML("afterEnd", dT6N);
            a2x.cJ6D(f4j)
        }
    };
    b3x.MR7K = function (d4h, V4Z) {
        var p4t = d4h.data;
        if (!p4t || p4t[this.fd6X.pkey] == null) {
            this.z4D("onerror", d4h);
            d4h.stopped = !0
        }
        if (!d4h.stopped) {
            this.z4D(V4Z, d4h)
        }
    };
    b3x.bje6Y = bs4w;
    b3x.bjf6Z = bs4w;
    b3x.bip6j = function (d4h) {
        if (d4h.key != this.jq8i.key) return;
        switch (d4h.action) {
            case"add":
                this.bdX4b(d4h);
                break;
            case"delete":
                this.bdZ4d(d4h);
                break;
            case"update":
                this.bLw3x(d4h);
                break;
            case"refresh":
                this.gB7u();
                break;
            case"unshift":
                this.bjf6Z(d4h.offset, d4h.limit);
                break;
            case"append":
                this.bje6Y(d4h.offset, d4h.limit);
                break
        }
    };
    b3x.pu0x = function (p4t) {
        this.VO1x({data: p4t})
    };
    b3x.my9p = function (p4t) {
        this.VP1x({data: p4t})
    };
    b3x.tM1x = function (p4t) {
        this.S4W.jw8o({data: p4t, key: this.jq8i.key})
    };
    b3x.tK1x = function () {
        return this.S4W
    };
    b3x.bjo6i = function (j4n) {
        this.bel5q("afterBegin", this.bei5n(j4n));
        return this.bej5o(j4n)
    };
    b3x.bLr3x = function (j4n) {
        this.bel5q("beforeEnd", this.bei5n(j4n));
        return this.bej5o(j4n)
    };
    b3x.gB7u = function () {
        this.Nu8m();
        this.biz6t()
    };
    b3x.cFx8p = function () {
        this.S4W.ut1x(this.jq8i.key);
        this.gB7u()
    };
    b3x.bsW8O = function () {
        if (!!this.bdH4L) return;
        this.bdH4L = !0;
        this.yT3x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.S4W.bsW8O({key: this.jq8i.key, data: this.jq8i.data})
    };
    b3x.kq8i = function () {
        return this.S4W.kq8i(this.jq8i.key)
    };
    b3x.bLq3x = function () {
        return this.jo8g
    };
    b3x.VW1x = function () {
        return this.S4W.VW1x(this.jq8i.key)
    };
    b3x.cek0x = function () {
        return this.fL7E
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, fx7q = NEJ.R, k4o = c4g("nej.u"), a2x = c4g("nej.e"), N4R = c4g("nej.ut"), b3x, K4O;
    if (!!N4R.kx8p) return;
    N4R.kx8p = NEJ.C();
    b3x = N4R.kx8p.O4S(N4R.bdx4B);
    K4O = N4R.kx8p.cs5x;
    b3x.Bk4o = function (bi4m, bq4u) {
        return K4O.Bk4o.call(this, this.zO3x, bi4m, this.pd0x, bq4u)
    };
    b3x.bjC6w = function (r4v) {
        var bi4m = 0;
        if (r4v > 1) bi4m = this.zO3x + (r4v - 2) * this.pd0x;
        return bi4m
    };
    b3x.Be4i = function (d4h) {
        K4O.Be4i.apply(this, arguments);
        if (!d4h.stopped) {
            this.bLv3x(this.bjC6w(d4h.index))
        }
    };
    b3x.Nd7W = function () {
        this.Nu8m();
        this.yT3x("onbeforelistload", "列表加载中...")
    };
    b3x.bed5i = function () {
        K4O.bed5i.apply(this, arguments);
        this.Nu8m()
    };
    b3x.biI6C = function (i4m, bi4m, gc7V) {
        var by4C = this.Bk4o(bi4m, i4m.length);
        if (this.bLs3x(by4C.index, by4C.total)) return !0;
        this.biw6q(by4C.total > 1 ? "" : "none")
    };
    b3x.biH6B = function () {
        this.yT3x("onemptylist", "没有列表数据！")
    };
    b3x.ben5s = function (bH4L, kL8D) {
        if (!kL8D && k4o.fG7z(bH4L)) {
            this.ii8a.innerHTML = bH4L;
            return
        }
        K4O.ben5s.apply(this, arguments)
    };
    b3x.Nb7U = function (dT6N) {
        this.ii8a.innerHTML = dT6N
    };
    b3x.Na7T = function (ho7h) {
        this.fL7E = ho7h
    };
    b3x.bdX4b = function (d4h) {
        this.MR7K(d4h, "onafteradd");
        if (!d4h.stopped) this.gB7u()
    };
    b3x.bdZ4d = function (d4h) {
        this.MR7K(d4h, "onafterdelete");
        if (!d4h.stopped) this.gB7u()
    };
    b3x.bje6Y = function (bi4m, gc7V) {
        var r4v = 1;
        if (!!this.jo8g) {
            r4v = this.jo8g.tD1x()
        }
        var jT8L = this.bjC6w(r4v), fR7K = jT8L + (r4v > 1 ? this.pd0x : this.zO3x);
        if (bi4m >= fR7K && !!this.jo8g) {
            var by4C = this.Bk4o(0, this.kq8i());
            this.jo8g.bgE5J(by4C.total);
            this.biw6q(by4C.total > 1 ? "" : "none")
        } else {
            this.gB7u()
        }
    };
    b3x.bjf6Z = function (bi4m, gc7V) {
        var r4v = 1;
        if (!!this.jo8g) {
            r4v = this.jo8g.tD1x()
        }
        var jT8L = this.bjC6w(r4v), by4C = this.Bk4o(jT8L, this.kq8i());
        this.Be4i({last: r4v, index: by4C.index})
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, a2x = c4g("nej.e"), h4l = c4g("nej.v"), I4M = c4g("nej.ut"),
        k4o = c4g("nej.u"), l4p = c4g("nm.x"), q4u = c4g("nm.d"), w4A = c4g("nm.w"), fo7h = 40, b3x, K4O;
    w4A.bew5B = NEJ.C();
    b3x = w4A.bew5B.O4S(I4M.cH6B);
    K4O = w4A.bew5B.cs5x;
    b3x.cx5C = function () {
        this.cD6x()
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.MJ7C = e4i.inputer;
        this.bjG6A = e4i.tipper;
        this.bX5c([[this.MJ7C, "input", this.fN7G.g4k(this)]])
    };
    b3x.bD4H = function () {
        this.bG4K();
        this.MC7v(null, null)
    };
    b3x.fN7G = function (d4h) {
        if (d4h && d4h.type == "keyup" && (d4h.keyCode != 8 || d4h.keyCode != 68)) return;
        var V4Z = this.MJ7C.value, cFy8q;
        if (l4p.Sh0x(V4Z) > fo7h) {
            this.MJ7C.value = l4p.CZ4d(V4Z, fo7h);
            this.MC7v("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g4k(this))
        } else if (V4Z.indexOf("#") >= 0 || V4Z.indexOf("@") >= 0) {
            this.MC7v("歌单名不能包含字符“@”和“#”！")
        } else {
            this.MC7v(null, null);
            this.z4D("onchange", {value: V4Z})
        }
    };
    b3x.ceh0x = function () {
        this.fN7G()
    };
    b3x.MC7v = function () {
        var C4G = 0;
        return function (dH6B, bLp3x) {
            if (!!C4G) window.clearTimeout(C4G);
            if (!dH6B) {
                a2x.y4C(this.bjG6A, "f-vhide");
                this.bLo3x = !1;
                return
            }
            this.bjG6A.innerHTML = '<i class="u-icn u-icn-25"></i>' + dH6B;
            a2x.x4B(this.bjG6A, "f-vhide");
            this.bLo3x = !0;
            if (k4o.gG7z(bLp3x)) C4G = window.setTimeout(function () {
                this.MC7v(null, null);
                bLp3x()
            }.g4k(this), 1e3)
        }
    }();
    b3x.bLn3x = function () {
        if (this.bLo3x) return !1;
        if (l4p.jL8D(this.MJ7C.value)) {
            this.MC7v("歌单名不能为空");
            return !1
        }
        return !0
    };
    b3x.fS7L = function () {
        return this.MJ7C.value
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, h4l = c4g("nej.v"), a2x = c4g("nej.e"), v4z = c4g("nej.j"), m4q = c4g("nm.l"),
        w4A = c4g("nm.w"), bC4G = c4g("nej.ui"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), b3x, K4O;
    m4q.bes5x = NEJ.C();
    b3x = m4q.bes5x.O4S(m4q.en6h);
    K4O = m4q.bes5x.cs5x;
    b3x.cx5C = function () {
        this.cD6x()
    };
    b3x.bW5b = function () {
        this.cg5l();
        var i4m = a2x.H4L(this.n4r, "j-flag");
        this.bdJ4N = {inputer: i4m[0], tipper: i4m[1]};
        this.iE8w = {onerror: this.bLm3x.g4k(this), onitemadd: this.bLm3x.g4k(this)};
        this.lG9x = i4m[2];
        h4l.s4w(i4m[2], "click", this.FK5P.g4k(this));
        h4l.s4w(i4m[3], "click", this.BH4L.g4k(this));
        h4l.s4w(this.n4r, "keypress", this.bLl3x.g4k(this))
    };
    b3x.ce5j = function () {
        this.cd5i = "m-wgt-create"
    };
    b3x.bl4p = function (e4i) {
        e4i.clazz = " m-layer-w2";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "新建歌单";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bm4q(e4i);
        this.bdJ4N.inputer.value = e4i.name || "";
        this.va2x = w4A.bew5B.A4E(this.bdJ4N);
        this.va2x.ceh0x();
        this.S4W = q4u.ig8Y.A4E(this.iE8w);
        setTimeout(function () {
            this.bdJ4N.inputer.focus()
        }.g4k(this), 0)
    };
    b3x.bD4H = function () {
        this.bG4K();
        if (this.va2x) {
            this.va2x.T4X();
            delete this.va2x
        }
        this.tt1x(!1);
        this.bdJ4N.inputer.value = ""
    };
    b3x.tt1x = function (NP9G) {
        this.oN0x = NP9G;
        if (NP9G) {
            this.lG9x.innerHTML = "<i>新建中...</i>";
            a2x.y4C(this.lG9x, "u-btn2-dis")
        } else {
            this.lG9x.innerHTML = "<i>新 建</i>";
            a2x.x4B(this.lG9x, "u-btn2-dis")
        }
    };
    b3x.FK5P = function () {
        if (this.oN0x || !this.va2x.bLn3x()) return;
        var cq5v = {key: "playlist_new-" + GUser.userId, data: {name: this.va2x.fS7L()}, offset: 1};
        this.S4W.jw8o(cq5v);
        this.tt1x(!0)
    };
    b3x.bLm3x = function (d4h) {
        var cm5r = (d4h.result || bb4f).code;
        if (!cm5r) {
            this.z4D("onsuccess", d4h.data)
        } else {
            this.z4D("onerror", d4h)
        }
        this.bu4y()
    };
    b3x.BH4L = function () {
        this.bu4y()
    };
    b3x.bLl3x = function (d4h) {
        if (d4h.keyCode == 13) this.FK5P()
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"), v4z = c4g("nej.j"), l4p = c4g("nm.x"), q4u = c4g("nm.d"), m4q = c4g("nm.l"), b3x, K4O;
    m4q.bkg6a = NEJ.C();
    b3x = m4q.bkg6a.O4S(m4q.en6h);
    K4O = m4q.bkg6a.cs5x;
    b3x.cx5C = function () {
        this.cD6x()
    };
    b3x.bW5b = function () {
        this.cg5l();
        var i4m = a2x.H4L(this.n4r, "j-flag");
        this.iC8u = {
            limit: 301,
            parent: i4m[1],
            cache: {klass: q4u.ig8Y, lkey: "playlist_new-" + GUser.userId, onlisterror: this.bkm6g.g4k(this)},
            item: {klass: "m-wgt-subscribe-item", cutStr: l4p.Dc4g, escape: k4o.dG6A}
        };
        this.iE8w = {onsuccess: this.bdd4h.g4k(this), onerror: this.eI6C.g4k(this)};
        h4l.s4w(i4m[0], "click", this.FK5P.g4k(this));
        h4l.s4w(i4m[1], "click", this.lA9r.g4k(this))
    };
    b3x.ce5j = function () {
        this.cd5i = "m-wgt-subscribe"
    };
    b3x.bl4p = function (e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.clazz = " m-layer-w2";
        e4i.title = "添加到歌单";
        e4i.draggable = !0;
        e4i.mask = !0;
        this.bm4q(e4i);
        this.bdc4g = (e4i.tracks || []).reverse();
        this.iC8u.item.size = this.bdc4g.length;
        this.iE8w.name = e4i.name || "";
        this.bLk3x = q4u.xc2x.A4E({onaddsuccess: this.AL3x.g4k(this)});
        this.sM1x = q4u.ig8Y.A4E({onlistload: this.cea0x.g4k(this)});
        this.sM1x.bQk4o();
        k4o.bd4h(this.bdc4g, function (p4t, r4v, i4m) {
            if (!k4o.lw9n(p4t)) {
                i4m[r4v] = this.bLk3x.eH6B(p4t) || p4t
            }
        }, this)
    };
    b3x.cea0x = function () {
        if (this.dK6E) this.dK6E.T4X();
        this.dK6E = I4M.kx8p.A4E(this.iC8u)
    };
    b3x.FK5P = function () {
        this.bu4y();
        if (this.FX5c) this.FX5c.T4X();
        this.FX5c = m4q.bes5x.A4E(this.iE8w);
        this.FX5c.L4P()
    };
    b3x.lA9r = function () {
        var cdZ0x = function (f4j) {
            while (f4j && f4j != document) {
                if (f4j.tagName.toLowerCase() == "li") {
                    return f4j
                }
                f4j = f4j.parentNode
            }
        };
        return function (d4h) {
            h4l.cp5u(d4h);
            var F4J = h4l.W4a(d4h), Mu7n = cdZ0x(F4J);
            if (!!Mu7n && !a2x.bE4I(Mu7n, "dis")) {
                this.bdd4h({id: a2x.t4x(Mu7n, "id")})
            }
        }
    }();
    b3x.bdd4h = function (d4h) {
        var C4G = d4h.id;
        if (!C4G || !this.bdc4g.length) return;
        this.bLk3x.jw8o({key: "track_playlist-" + C4G, data: {tracks: this.bdc4g, pid: C4G}});
        this.bu4y()
    };
    b3x.AL3x = function () {
        this.z4D("onsuccess");
        m4q.Z4d.L4P({tip: "收藏成功"})
    };
    b3x.eI6C = function (d4h) {
        this.bu4y();
        this.z4D("onerror", d4h);
        var cV6P = "收藏失败";
        switch (d4h.code) {
            case 405:
                cV6P = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cV6P = "歌单数量超过限制";
                break;
            case 502:
                cV6P = "歌曲已经存在"
        }
        m4q.Z4d.L4P({tip: cV6P, type: 2})
    };
    b3x.bkm6g = function () {
        this.bu4y();
        m4q.Z4d.L4P({tip: "列表下载失败，请稍后再试", type: 2})
    };
    l4p.mq9h = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        m4q.bkg6a.L4P(e4i)
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, dv6p = c4g("nej.p"), a2x = c4g("nej.e"), h4l = c4g("nej.v"),
        v4z = c4g("nej.j"), k4o = c4g("nej.u"), l4p = c4g("nm.x");
    var bky6s, pg0x, Y4c = decodeURIComponent(location.href),
        jY8Q = /.+(https?:\/\/.+\/proxy.html)/.test(Y4c) ? RegExp.$1 : "";
    if (!!jY8Q) {
        v4z.uW2x("mail_proxy_url", jY8Q)
    } else {
        jY8Q = v4z.sw1x("mail_proxy_url") || "about:blank"
    }
    bky6s = a2x.bdk4o({
        src: jY8Q, onload: function () {
            pg0x = true
        }
    });
    var bLj3x = function () {
        v4z.gy7r("USER_TRIGGER", {value: true, expire: 1 / (24 * 60), path: "/"})
    };
    var cdX0x = function () {
        if (dv6p.ds6m.browser == "ie" && parseInt(dv6p.ds6m.version) < 9) {
            l4p.fq7j({clazz: "m-layer-w2", message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"});
            return false
        }
        return true
    };
    l4p.Mr7k = function (u4y, C4G, U4Y) {
        if (!cdX0x()) return;
        bLj3x();
        if (U4Y == "stop") {
            if (!pg0x) throw"proxy not loaded";
            bLj3x();
            bky6s.contentWindow.location.replace(jY8Q + "#" + k4o.cE6y({
                to: "ifrmMusic",
                message: JSON.stringify({s: +(new Date), action: "stop"})
            }))
        } else {
            bky6s.contentWindow.location.replace(jY8Q + "#" + k4o.cE6y({
                to: "ifrmMusic",
                message: JSON.stringify({type: u4y, id: C4G, s: +(new Date), action: U4Y})
            }))
        }
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, a2x = c4g("nej.e"), h4l = c4g("nej.v"), v4z = c4g("nej.j"),
        k4o = c4g("nej.u"), l4p = c4g("nm.x"), m4q = c4g("nm.l"), q4u = c4g("nm.d");
    var kI8A = q4u.hR8J.A4E();
    var oP0x = q4u.xc2x.A4E({onlistload: cdU0x, onitemload: cdT0x, onerror: eI6C});
    var Gf5k = q4u.qk0x.A4E({onlistload: cdS0x, onitemload: cdR0x, onerror: eI6C});
    var bLg3x = {};

    function wu2x(d4h) {
        var f4j = h4l.W4a(d4h, "d:resAction"), U4Y = a2x.t4x(f4j, "resAction");
        if (f4j && (U4Y == "play" || U4Y == "addto")) {
            var u4y = parseInt(a2x.t4x(f4j, "resType"));
            bLf3x({
                action: U4Y,
                type: u4y,
                id: a2x.t4x(f4j, "resId"),
                from: a2x.t4x(f4j, "resFrom"),
                data: a2x.t4x(f4j, "resData"),
                order: a2x.t4x(f4j, "resOrder"),
                node: f4j
            });
            if (u4y != 13) bLe3x(f4j)
        }
    }

    function bLf3x(bS4W) {
        var U4Y = bS4W.action, u4y = bS4W.type, C4G = bS4W.id, ea6U = bS4W.from, j4n = bS4W.data, tb1x = bS4W.order,
            e4i = {
                limit: 1e3,
                offset: 0,
                data: {id: C4G},
                ext: {id: C4G, action: U4Y, type: u4y, from: ea6U, data: j4n, node: bS4W.node}
            };
        if (U4Y != "play" && U4Y != "addto" || !u4y) return;
        if (window.GRef && GRef == "mail") {
            l4p.Mr7k(u4y, C4G, U4Y);
            return
        }
        switch (u4y) {
            case 13:
                e4i.key = "track_playlist-" + C4G;
                oP0x.lK9B(e4i);
                break;
            case 17:
                e4i.key = "program";
                e4i.id = C4G;
                Gf5k.VU1x(e4i);
                if (U4Y == "play") {
                    v4z.bn4r("/api/dj/program/listen", {query: {id: C4G}})
                }
                break;
            case 18:
                e4i.key = "track";
                e4i.id = C4G;
                oP0x.VU1x(e4i);
                break;
            case 19:
                e4i.key = "track_album-" + C4G;
                oP0x.lK9B(e4i);
                break;
            case 24:
                e4i.key = "track_day";
                oP0x.lK9B(e4i);
                break;
            case 2:
                e4i.key = "track_artist_top-" + C4G;
                oP0x.lK9B(e4i);
                break;
            case 70:
                e4i.key = "program_djradio-" + C4G + "-" + tb1x;
                e4i.data.radioId = C4G;
                e4i.data.asc = tb1x == 2;
                Gf5k.lK9B(e4i);
                break
        }
    }

    function bLd3x(i4m) {
        var o4s = [];
        k4o.bd4h(i4m, function (p4t) {
            if (p4t.mainSong) {
                p4t.mainSong.program = p4t;
                o4s.push(p4t.mainSong);
                p4t.localupdatetime = +(new Date);
                oP0x.ctF5K(p4t.mainSong);
                p4t.mainTrackId = p4t.mainSong.id;
                delete p4t.mainSong
            } else {
                var bLc3x = oP0x.eH6B(p4t.mainTrackId);
                bLc3x && o4s.push(bLc3x)
            }
        });
        return o4s
    }

    function bcz4D(i4m, e4i) {
        var rt1x = e4i.action == "play" && e4i.type != 17 && e4i.type != 18, fV7O = e4i.action == "play";
        if (!i4m.length) return;
        if (e4i.type == 19) {
            i4m = l4p.Kg7Z(i4m, true, {play: true}, {source: "album", sourceid: e4i.id})
        } else {
            i4m = l4p.Kg7Z(i4m, true, {play: true})
        }
        k4o.bd4h(i4m, function (p4t) {
            p4t.source = l4p.bvg9X({fid: e4i.from, fdata: e4i.data, type: e4i.type, rid: e4i.id}, p4t.id)
        });
        top.player.addTo(i4m, rt1x, fV7O);
        kI8A.UX1x({rid: e4i.id, type: e4i.type, hash: l4p.KN7G(), play: fV7O, source: e4i.from, sourceid: e4i.data})
    }

    function cdU0x(d4h) {
        var eu6o = d4h.ext || {};
        i4m = oP0x.hD7w(d4h.key);
        bcz4D(i4m, eu6o);
        if (eu6o.type == 13 && eu6o.action == "play" && i4m && i4m.length > 0) {
            bLe3x(eu6o.node);
            v4z.bn4r("/api/playlist/update/playcount", {query: {id: eu6o.id}})
        }
    }

    function cdT0x(d4h) {
        var i4m = [oP0x.eH6B(d4h.id)], bj4n = i4m[0], rd0x = l4p.pB0x(bj4n), ta1x = bj4n.privilege || {};
        if (rd0x == 10) {
            l4p.tW1x(ta1x.fee || bj4n.fee, bj4n.id, "song", null, ta1x)
        } else if (rd0x == 100) {
            l4p.ir8j(null, null, null, true, bj4n)
        } else if (rd0x == 11) {
            l4p.bRd6X(bj4n.id, 18)
        } else {
            bcz4D(i4m, d4h.ext)
        }
    }

    function cdS0x(d4h) {
        var i4m = bLd3x(Gf5k.hD7w(d4h.key));
        bcz4D(i4m, d4h.ext)
    }

    function cdR0x(d4h) {
        var i4m = bLd3x([Gf5k.eH6B(d4h.id)]);
        bcz4D(i4m, d4h.ext)
    }

    function eI6C() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bLe3x(f4j) {
        var u4y = a2x.t4x(f4j, "resType"), C4G = a2x.t4x(f4j, "resId"), J4N = u4y + "-" + C4G;
        if (bLg3x[J4N]) return;
        var bLb3x = a2x.B4F("play-count"), bkZ6T = a2x.H4L(f4j.parentNode, "nb"), OE9v = null;
        if (bLb3x) {
            OE9v = bLb3x
        } else {
            OE9v = !!bkZ6T && !!bkZ6T[0] ? bkZ6T[0] : null
        }
        if (OE9v) {
            var cF6z = OE9v.innerHTML;
            if (/^\d+$/.test(cF6z)) {
                OE9v.innerText = +cF6z + 1
            }
            bLg3x[J4N] = true
        }
    }

    l4p.cdK0x = function (f4j) {
        h4l.s4w(f4j || document.body, "click", wu2x.g4k(this))
    };
    l4p.cdJ0x = function (U4Y, u4y, C4G) {
        bLf3x({action: U4Y, type: u4y, id: C4G})
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), b3x, K4O;
    q4u.fe7X({
        "share-all": {
            url: "/api/share/friends/resource", format: function (o4s, e4i) {
                this.cdI0x(o4s, e4i)
            }, onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns", format: function (o4s, e4i) {
                this.z4D("onshareall", e4i.result)
            }, onerror: function (o4s, e4i) {
                this.z4D("onshareall", e4i.result)
            }
        },
        "share-private": {url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror"},
        share_img_compound: {
            url: "/upload/event/img/compound", type: "POST", format: function (o4s, e4i) {
                e4i.options.picUrl = o4s.picUrl;
                this.bLa3x(e4i.options, e4i.result)
            }, onerror: function (o4s, e4i) {
                this.z4D("onshareall", e4i.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get", format: function (Q4U, e4i) {
                this.qb0x("vid_info-" + e4i.data.nosKey, Q4U);
                return Q4U
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit", filter: function (e4i) {
            }, format: function (o4s, e4i) {
                e4i.data = e4i.data2;
                this.co5t("share-all", e4i)
            }, onerror: "onshareerror"
        }
    });
    q4u.blg6a = NEJ.C();
    b3x = q4u.blg6a.O4S(q4u.hG7z);
    b3x.cdG0x = function () {
        var ur1x = function (Q4U, e4i) {
            e4i.times++;
            if (e4i.times > 10) {
                this.z4D("onvinfoerror", e4i.key, Q4U)
            } else {
                setTimeout(et6n.g4k(this, e4i), e4i.times * 1e3)
            }
        };
        var yH3x = function (Q4U, e4i) {
            this.z4D("onvinfo", e4i.key, Q4U)
        };
        var et6n = function (e4i) {
            var Y4c = e4i.url;
            v4z.bn4r(Y4c + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: yH3x.ew6q(this, e4i),
                onerror: ur1x.ew6q(this, e4i)
            })
        };
        return function (e4i) {
            e4i.times = 0;
            et6n.call(this, e4i)
        }
    }();
    b3x.cFz8r = function () {
        var GA5F;
        var ur1x = function (Q4U, e4i) {
            if (Q4U.code > 0) {
                clearInterval(this.GB5G);
                this.z4D("onviderror", e4i.data.nosKey)
            }
        };
        var yH3x = function (J4N, Q4U) {
            if (Q4U.vid && Q4U.covers) {
                clearInterval(this.GB5G);
                this.z4D("onvid", J4N, Q4U)
            }
        };
        var et6n = function (e4i) {
            if (+(new Date) - GA5F > 60 * 60 * 1e3) {
                clearInterval(this.GB5G);
                this.z4D("onviderror", e4i.data.nosKey);
                return
            }
            e4i.onload = yH3x.g4k(this, e4i.data.nosKey);
            e4i.onerror = ur1x.g4k(this);
            this.co5t("vid-get", e4i)
        };
        return function (e4i) {
            if (!e4i || !e4i.data) return;
            GA5F = +(new Date);
            this.GB5G = clearInterval(this.GB5G);
            this.GB5G = setInterval(et6n.g4k(this, e4i), 1e4);
            et6n.apply(this, arguments)
        }
    }();
    b3x.cdE0x = function () {
        this.GB5G = clearInterval(this.GB5G)
    };
    b3x.cdI0x = function (o4s, oe0x) {
        if (o4s.event && oe0x.snsTypes) {
            if (oe0x.pics) {
                var bKY3x = [];
                for (var i = 0, len = oe0x.pics.length; i < len; i++) {
                    bKY3x[i] = oe0x.pics[i].originId
                }
                this.co5t("share_img_compound", {data: {picIds: bKY3x.join(",")}, options: oe0x, result: o4s})
            } else {
                oe0x.picUrl = oe0x.picUrl;
                this.bLa3x(oe0x, o4s)
            }
        } else {
            this.z4D("onshareall", o4s)
        }
        var tX1x = q4u.hR8J.A4E();
        tX1x.fu7n(oe0x.isPub ? "pubevent" : "shareevent", {id: o4s.id})
    };
    b3x.bLa3x = function (oe0x, o4s) {
        var cq5v = {}, d4h = o4s.event || {};
        cq5v.eventid = d4h.id;
        cq5v.eventtype = d4h.type;
        oe0x.picUrl && (cq5v.picUrl = oe0x.picUrl);
        cq5v.snsTypes = oe0x.snsTypes;
        cq5v.msg = oe0x.data.msg || "";
        cq5v.type = oe0x.data.type;
        oe0x.data.id && (cq5v.id = oe0x.data.id);
        if (cq5v.eventtype == 41) {
            var Q4U = l4p.EH5M(d4h.json);
            cq5v.eventtype = 39;
            if (cq5v.msg) {
                cq5v.msg += "  "
            }
            cq5v.msg += "分享" + Q4U.video.creator.nickname + "的视频《" + Q4U.video.title + "》";
            delete cq5v.id
        }
        this.co5t("share-sns", {data: cq5v, result: o4s})
    };
    b3x.cdC0x = function (e4i) {
        var j4n = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k4o.oh0x(5)
        };
        j4n = NEJ.EX(j4n, e4i);
        if (j4n.id < 0) {
            delete j4n.id;
            j4n.type = "noresource"
        }
        if (!j4n.threadId) {
            delete j4n.threadId
        }
        if (!j4n.actId) {
            delete j4n.actId
        }
        if (!j4n.pics) {
            delete j4n.pics
        } else {
            j4n.pics = JSON.stringify(j4n.pics)
        }
        this.co5t("share-all", {
            data: j4n,
            snsTypes: e4i.snsTypes,
            picUrl: e4i.picUrl,
            pics: e4i.pics,
            isPub: e4i.isPub
        })
    };
    b3x.cdB0x = function (e4i) {
        this.co5t("share-private", e4i)
    };
    b3x.cdA0x = function (e4i) {
        this.co5t("video-submit", e4i)
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        q4u = c4g("nm.d"), l4p = c4g("nm.x"), b3x, K4O;
    var cdy0x = {40: !0};
    q4u.fe7X({
        "event-list": {
            url: "/api/v1/event/get", filter: function (e4i) {
                e4i.data.getcounts = true;
                e4i.data.pagesize = e4i.data.limit;
                if (e4i.data.offset == 0) {
                    e4i.data.lasttime = -1
                }
                delete e4i.data.offset
            }, format: function (Q4U, e4i) {
                Q4U.event = l4p.YY3x(Q4U.event, function (p4t, r4v) {
                    return !cdy0x[p4t.type]
                });
                this.cdx0x(Q4U.event);
                e4i.data.lasttime = Q4U.lasttime;
                if (Q4U.event.length) {
                    Q4U.event.length = e4i.limit
                }
                return {list: Q4U.event, total: Q4U.size}
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews", format: function (Q4U, e4i) {
                return {list: Q4U.events, total: Q4U.count}
            }
        },
        "event-pull": {
            url: "/api/event/getnews", filter: function (e4i) {
                e4i.data.pagesize = 20
            }, format: function (Q4U, e4i) {
                return Q4U.event
            }
        },
        "ievent-get": {type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror"},
        "ievent-new-get": {type: "GET", url: "/api/event/getnews", onload: "oneventnewload"},
        "ievent_user-list": {
            type: "GET", url: "/api/event/get/{userId}", filter: function (e4i) {
                if (e4i.data.offset == 0) {
                    e4i.data.time = -1
                }
                delete e4i.data.offset;
                e4i.data.getcounts = true
            }, format: function (Q4U, e4i) {
                e4i.data.time = Q4U.lasttime;
                var i4m = Q4U.events;
                if (Q4U.more && i4m.length < e4i.data.limit) {
                    i4m = this.Me7X(i4m, e4i.data.limit)
                }
                return {list: i4m, total: Q4U.size}
            }
        },
        "ievent-res-get": {
            url: "/api/res/status", format: function (o4s, e4i) {
                o4s.conf = e4i.conf;
                return o4s
            }
        },
        "ievent-like": {
            url: "/api/resource/like", onload: "oneventlike", filter: function (e4i, bg4k) {
                if (e4i.like) {
                    if (e4i.comment) {
                        bg4k.url = "/api/v1/comment/like"
                    } else {
                        bg4k.url = "/api/resource/like"
                    }
                    bg4k.onload = "oneventlike";
                    bg4k.onerror = "oneventlikeerr"
                } else {
                    if (e4i.comment) {
                        bg4k.url = "/api/v1/comment/unlike"
                    } else {
                        bg4k.url = "/api/resource/unlike"
                    }
                    bg4k.onload = "oneventunlike";
                    bg4k.onerror = "oneventunlikeerr"
                }
            }, format: function (o4s, e4i) {
                o4s.eid = e4i.eid;
                o4s.origin = e4i.origin;
                o4s.ext = e4i.ext;
                return o4s
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete", format: function (o4s, e4i) {
                o4s.id = e4i.data.id;
                return o4s
            }
        },
        "event-del": {
            url: "/api/event/delete", filter: function (e4i, bg4k) {
                if (e4i.data.type == "nointer") {
                    bg4k.url = "/api/event/rcmd/reject"
                } else if (e4i.data.transcoding) {
                    bg4k.url = "/api/event/video/transcoding/delete"
                } else {
                    bg4k.url = "/api/event/delete"
                }
            }, format: function (o4s, e4i) {
                o4s.id = e4i.data.id;
                return o4s
            }
        },
        "event_activity-del": {
            url: "/api/event/delete", format: function (o4s, e4i) {
                o4s.id = e4i.data.id;
                return o4s
            }
        },
        "event_activity-list": {
            url: "/api/act/event", filter: function (e4i) {
                e4i.data.lasttime = e4i.data.lasttime || -1;
                e4i.data.pagesize = e4i.data.limit;
                e4i.data.getcounts = true;
                delete e4i.data.offset
            }, format: function (Q4U, e4i) {
                e4i.data.lasttime = Q4U.lasttime;
                var i4m = Q4U.events;
                if (Q4U.more) i4m = this.Me7X(i4m, e4i.data.pagesize);
                return {list: i4m, total: Q4U.size}
            }, onerror: "onlisterror"
        }
    });
    q4u.yN3x = NEJ.C();
    b3x = q4u.yN3x.O4S(q4u.hG7z);
    b3x.cx5C = function () {
        this.cD6x()
    };
    b3x.blD6x = function (u4y, cT6N) {
        return u4y + "-" + cT6N
    };
    b3x.cFE8w = function (e4i) {
        this.co5t("ievent-get", e4i)
    };
    b3x.cFF8x = function (e4i) {
        this.co5t("ievent-new-get", e4i)
    };
    b3x.cIp9g = function (e4i) {
        this.co5t("ievent-user-get", e4i)
    };
    b3x.cFI8A = function (u4y, cT6N) {
        return this.sh1x(this.blD6x(u4y, cT6N))
    };
    b3x.cFJ8B = function (LZ7S, e4i) {
        if (!LZ7S || !LZ7S.length) return;
        e4i = e4i || {};
        var bz4D = {song: 2, album: 4, playlist: 1, mv: 3, program: 5};
        for (var i = 0, Fj5o = [], bKS3x = [], j4n; i < LZ7S.length; ++i) {
            j4n = LZ7S[i];
            j4n = this.sh1x(this.blD6x(j4n.type, j4n.id));
            if (!j4n) {
                Fj5o.push(LZ7S[i].id);
                bKS3x.push(bz4D[LZ7S[i].type] || 0)
            }
        }
        if (!Fj5o.length) {
            this.z4D("oneventresload", e4i.conf);
            return
        }
        e4i.data = {ids: JSON.stringify(Fj5o), types: JSON.stringify(bKS3x)};
        e4i.onload = this.cdl0x.g4k(this);
        this.co5t("ievent-res-get", e4i)
    };
    b3x.cdl0x = function (o4s) {
        if (o4s.code != 200) {
            this.z4D("oneventreserror", o4s.code);
            return
        }
        var bz4D = {1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program"};
        for (var i = 0, i4m = o4s.results; i < i4m.length; ++i) {
            this.qb0x(this.blD6x(bz4D[i4m[i].type], i4m[i].id), i4m[i])
        }
        this.z4D("oneventresload", o4s.conf)
    };
    b3x.bKR3x = function (j4n) {
        var J4N = "event-list";
        this.brp8h(J4N, j4n);
        this.z4D("onitemadd", {key: J4N, action: "add", data: j4n, flag: -1})
    };
    b3x.pf0x = function (e4i) {
        this.co5t("ievent-like", e4i)
    };
    b3x.my9p = function (e4i) {
        this.co5t("ievent-delete", e4i)
    };
    b3x.Me7X = function (i4m, gc7V) {
        for (var i = i4m.length; i < gc7V; i++) i4m.push(null);
        return i4m
    };
    b3x.cdx0x = function (i4m) {
        var o4s = [];
        if (!i4m || !i4m.length) return;
        k4o.bd4h(i4m, function (d4h) {
            d4h.biData = this.bKQ3x(d4h)
        }, this)
    };
    b3x.bKQ3x = function () {
        var bbe4i = {32: "comment", 33: "activity", 34: "recomment_artist"},
            cdf0x = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d4h) {
            var Q4U = {
                id: d4h.id,
                sourceid: d4h.user.userId,
                alg: d4h.rcmdInfo ? d4h.rcmdInfo.alg : null,
                contentType: bbe4i[d4h.type] || (k4o.di6c(cdf0x, d4h.type) != -1 ? "user_event" : "other")
            };
            return Q4U
        }
    }();
    b3x.GV6P = function (cdc0x, d4h) {
        var Q4U = this.bKQ3x(d4h);
        Q4U.actionType = cdc0x;
        if (window.log) log("eventclick", Q4U)
    };
    b3x.cFL8D = function (e4i) {
        this.co5t("event_latest-list", e4i)
    }
})();
(function (factory) {
    window.SparkMD5 = factory()
})(function (undefined) {
    "use strict";
    var add32 = function (a, b) {
        return a + b & 4294967295
    }, hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }

    function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }

    function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }

    function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }

    function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function md51_array(a) {
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }

    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function (x, y) {
            var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray,
                    sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }

    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }

    function SparkMD5() {
        this.reset()
    }

    SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function (contents) {
        this.sg1x += contents;
        this.bq4u += contents.length;
        var length = this.sg1x.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dO6I, md5blk(this.sg1x.substring(i - 64, i)))
        }
        this.sg1x = this.sg1x.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this.sg1x, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.oF0x(tail, length);
        ret = hex(this.dO6I);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function () {
        this.sg1x = "";
        this.bq4u = 0;
        this.dO6I = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function () {
        return {buff: this.sg1x, length: this.bq4u, hash: this.dO6I}
    };
    SparkMD5.prototype.setState = function (state) {
        this.sg1x = state.buff;
        this.bq4u = state.length;
        this.dO6I = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function () {
        delete this.dO6I;
        delete this.sg1x;
        delete this.bq4u
    };
    SparkMD5.prototype.oF0x = function (tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dO6I, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bq4u * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dO6I, tail)
    };
    SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function () {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this.sg1x.buffer, arr, true), length = buff.length, i;
        this.bq4u += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dO6I, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.sg1x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this.sg1x, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.oF0x(tail, length);
        ret = hex(this.dO6I);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this.sg1x = new Uint8Array(0);
        this.bq4u = 0;
        this.dO6I = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.oF0x = SparkMD5.prototype.oF0x;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, a2x = c4g("nej.e"), h4l = c4g("nej.v"), v4z = c4g("nej.j"),
        em6g = c4g("nej.g"), k4o = c4g("nej.u"), fH7A = c4g("nej.n"), I4M = c4g("nej.ut"), l4p = c4g("nm.x"),
        q4u = c4g("nm.d"), jx8p = c4g("nm.x.nos"), w4A = c4g("nm.w");
    var ccZ0x = 1024 * 256, ccV0x = 1024 * 1024 * 2, qM0x = {TOKEN_ERROR: -100, DNS_ERROR: -101},
        bKJ3x = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : bs4w,
        rj0x = {MD5_DONE: .2, TOKEN_GET: .22, DNS_GET: .24, UPLOADED: 1},
        jH8z = {AUDIO: "audio", IMAGE: "image", TXT: "txt", RAR: "rar", OTHER: "other", VIDEO: "video"};
    var of0x = {};
    var tX1x = q4u.hR8J.A4E();
    jx8p.cFM8E = function () {
        return jH8z
    };
    var ccL0x = function () {
        return k4o.oh0x(6) + +(new Date)
    };
    var LS7L = function (iH8z, e4i) {
        if (!of0x[e4i.taskId]) {
            return
        }
        (e4i.onuploading || bs4w).call(this, iH8z)
    };
    var bmN7G = function (R4V) {
        var ccK0x = R4V.md5, cU6O = R4V.file, ccJ0x = ccK0x + cU6O.size;
        return "nos_file_hash_" + ccJ0x
    };
    var ccI0x = function (R4V) {
        var J4N = bmN7G(R4V), j4n = v4z.bRU6O(J4N, "{}");
        try {
            j4n = JSON.parse(j4n)
        } catch (e) {
            j4n = {}
        }
        return j4n
    };
    var ccF0x = function (R4V, e4i) {
        if (!R4V.md5) {
            return
        }
        var J4N = bmN7G(R4V), j4n = v4z.bRU6O(J4N, "{}");
        try {
            j4n = JSON.parse(j4n)
        } catch (e) {
            j4n = {}
        }
        NEJ.X(j4n, e4i);
        v4z.uW2x(J4N, JSON.stringify(j4n))
    };
    var ccD0x = function (R4V) {
        var J4N = bmN7G(R4V);
        v4z.JV6P(J4N)
    };
    var ccC0x = function (R4V, fp7i) {
        var Y4c = R4V.urls[Math.min(R4V.urlIndex, R4V.urls.length - 1)], cU6O = R4V.file, lo9f = R4V.bucket,
            mO9F = R4V.objectKey, eL6F = R4V.token, bJ4N = R4V.context, ph0x = {},
            PV9M = bKJ3x.call(cU6O, R4V.beg, R4V.end),
            bv4z = {offset: R4V.beg, complete: R4V.lastChunk || false, version: "1.0"};
        if (bJ4N) {
            bv4z.context = bJ4N
        }
        ph0x["x-nos-token"] = eL6F;
        ph0x[em6g.yg3x] = cU6O.type;
        R4V.reqId = v4z.bn4r(Y4c + "/" + lo9f + "/" + mO9F, {
            type: "json",
            method: "POST",
            headers: ph0x,
            query: bv4z,
            data: PV9M,
            onload: fp7i.onload,
            onerror: fp7i.onerror
        })
    };
    var ccz0x = function (o4s, R4V, e4i) {
        o4s = {
            code: 200,
            fileName: e4i.file.name,
            size: e4i.file.size,
            type: e4i.file.type,
            bucket: R4V.bucket,
            docId: R4V.docId,
            objectKey: R4V.objectKey,
            url: "//nos.netease.com/" + R4V.bucket + "/" + R4V.objectKey
        };
        ccD0x(R4V);
        if (!of0x[e4i.taskId]) {
            return
        }
        delete of0x[e4i.taskId];
        tX1x.fu7n("sysaction", {type: "nosuploadsuccess", location: location.href, result: JSON.stringify(o4s)});
        (e4i.onsuccess || bs4w).call(this, o4s)
    };
    var ccy9p = function (o4s, e4i) {
        (e4i.onerror || bs4w).call(this, o4s)
    };
    var ccu9l = function (o4s, R4V, e4i) {
        R4V.context = o4s.context;
        R4V.beg = o4s.offset;
        var iH8z = R4V.beg / R4V.file.size;
        ccF0x(R4V, {
            bucket: R4V.bucket,
            objectKey: R4V.objectKey,
            token: R4V.token,
            context: R4V.context,
            beg: R4V.beg,
            updateTime: +(new Date)
        });
        iH8z = rj0x.DNS_GET + (rj0x.UPLOADED - rj0x.DNS_GET) * iH8z;
        LS7L(iH8z, e4i);
        if (R4V.lastChunk) {
            ccz0x(o4s, R4V, e4i)
        } else {
            baJ3x(R4V, e4i)
        }
    };
    var ccr9i = function (o4s, R4V, e4i) {
        tX1x.fu7n("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: o4s.data,
            body: o4s.extData,
            ext: JSON.stringify(R4V),
            timging: +(new Date) - R4V.chuckUploadStartTime
        });
        if (R4V.urlIndex < Math.max(R4V.urls.length - 1, 5)) {
            R4V.urlIndex++;
            baJ3x(R4V, e4i)
        } else {
            ccy9p(o4s, e4i)
        }
    };
    var baJ3x = function (R4V, e4i) {
        if (!R4V || R4V.step == -1) {
            return
        }
        R4V.end = R4V.beg + ccZ0x;
        if (R4V.end >= R4V.file.size) {
            R4V.end = R4V.file.size;
            R4V.lastChunk = true
        }
        R4V.chuckUploadStartTime = +(new Date);
        ccC0x(R4V, {onload: ccu9l.ew6q(this, R4V, e4i), onerror: ccr9i.ew6q(this, R4V, e4i)})
    };
    var ccq9h = function (o4s, R4V, e4i) {
        R4V.beg = o4s.offset;
        var iH8z = R4V.beg / R4V.file.size;
        iH8z = rj0x.DNS_GET + (rj0x.UPLOADED - rj0x.DNS_GET) * iH8z;
        LS7L(iH8z, e4i);
        baJ3x(R4V, e4i)
    };
    var ccp9g = function (o4s, R4V, e4i) {
        R4V.beg = 0;
        delete R4V.context;
        bnl7e(R4V, e4i)
    };
    var bKC3x = function (Qf9W, R4V, e4i) {
        R4V.lastChunk = false;
        R4V.urls = Qf9W;
        R4V.urlIndex = 0;
        LS7L(rj0x.DNS_GET, e4i);
        if (R4V.fromExist) {
            delete R4V.fromExist;
            var Y4c = R4V.urls[Math.min(R4V.urlIndex, R4V.urls.length - 1)], lo9f = R4V.bucket, mO9F = R4V.objectKey,
                eL6F = R4V.token, bJ4N = R4V.context, ph0x = {}, bv4z = {context: bJ4N, version: "1.0"};
            ph0x["x-nos-token"] = eL6F;
            R4V.reqId = v4z.bn4r(Y4c + "/" + lo9f + "/" + mO9F + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: ph0x,
                query: bv4z,
                onload: ccq9h.ew6q(this, R4V, e4i),
                onerror: ccp9g.ew6q(this, R4V, e4i)
            })
        } else {
            R4V.beg = 0;
            baJ3x(R4V, e4i)
        }
    };
    var cck9b = function (o4s, R4V, e4i) {
        o4s.code = qM0x.DNS_ERROR;
        (e4i.onerror || bs4w).call(this, o4s)
    };
    var bKz3x = function (j4n, e4i) {
        var o4s = j4n.result || {}, lo9f = o4s.bucket, mO9F = o4s.objectKey, eL6F = o4s.token, R4V = of0x[e4i.taskId];
        if (!lo9f || !mO9F || !eL6F || !R4V) {
            o4s.code = qM0x.TOKEN_ERROR;
            (e4i.onerror || bs4w).call(this, o4s);
            return
        }
        R4V.bucket = lo9f;
        R4V.objectKey = mO9F;
        R4V.docId = o4s.docId;
        R4V.token = eL6F;
        LS7L(rj0x.TOKEN_GET, e4i);
        if (location.protocol == "https:") {
            bKC3x(["//nosup-hz1.127.net"], R4V, e4i)
        } else {
            R4V.reqId = jx8p.cci9Z({
                bucket: lo9f,
                onload: bKC3x.ew6q(this, R4V, e4i),
                onerror: cck9b.ew6q(this, R4V, e4i)
            })
        }
        R4V.step = 1
    };
    var cch9Y = function (o4s, e4i) {
        o4s.code = qM0x.TOKEN_ERROR;
        (e4i.onerror || bs4w).call(this, o4s)
    };
    var bnl7e = function (R4V, e4i) {
        var cU6O = e4i.file, ft7m = cU6O.name || "", eu6o = ft7m.split(".").pop();
        jx8p.bak3x(NEJ.X({
            filename: ft7m,
            ext: eu6o,
            onload: bKz3x.ew6q(this, e4i),
            onerror: cch9Y.ew6q(this, e4i)
        }, e4i, function (p4t) {
            return k4o.gG7z(p4t) || k4o.lw9n(p4t)
        }))
    };
    var ccf9W = function (R4V, e4i) {
        if (!R4V || R4V.step == -1) {
            return
        }
        R4V.md5 = R4V.spark.end();
        var LD7w = ccI0x(R4V) || {}, lo9f = LD7w.bucket, mO9F = LD7w.objectKey, eL6F = LD7w.token;
        if (!lo9f || !mO9F || !eL6F) {
            bnl7e(R4V, e4i)
        } else {
            R4V.context = LD7w.context;
            R4V.beg = LD7w.beg;
            R4V.fromExist = true;
            bKz3x({result: LD7w}, e4i)
        }
    };
    var cce9V = function (Dn4r, R4V, e4i) {
        if (!R4V || R4V.step == -1) {
            return
        }
        R4V.beg = R4V.end;
        var iH8z = R4V.beg / R4V.file.size;
        iH8z = 0 + rj0x.MD5_DONE * iH8z;
        LS7L(iH8z, e4i);
        R4V.spark.append(Dn4r.result);
        if (R4V.lastChunk) {
            ccf9W(R4V, e4i)
        } else {
            bKx3x(R4V, e4i)
        }
    };
    var ccc9T = function (o4s, R4V, e4i) {
        R4V.md5 = "";
        bnl7e(R4V, e4i)
    };
    var bKx3x = function (R4V, e4i) {
        if (!R4V || R4V.step == -1) {
            return
        }
        R4V.end = R4V.beg + ccV0x;
        if (R4V.end >= R4V.file.size) {
            R4V.end = R4V.file.size;
            R4V.lastChunk = true
        }
        var Dn4r = new FileReader;
        Dn4r.onload = cce9V.g4k(this, Dn4r, R4V, e4i);
        Dn4r.onerror = ccc9T.g4k(this, Dn4r, R4V, e4i);
        Dn4r.readAsArrayBuffer(bKJ3x.call(R4V.file, R4V.beg, R4V.end))
    };
    jx8p.gQ7J = function (e4i) {
        var cU6O = e4i.file, ft7m = cU6O.name || "", eu6o = ft7m.split(".").pop(), Dp4t = ccL0x();
        e4i.taskId = Dp4t;
        of0x[Dp4t] = {step: 0};
        LS7L(0, e4i);
        var R4V = of0x[Dp4t];
        R4V.id = Dp4t;
        R4V.file = cU6O;
        R4V.beg = 0;
        R4V.lastChunk = false;
        R4V.spark = new SparkMD5.ArrayBuffer;
        var ccb9S = e4i.onerror || bs4w;
        e4i.onerror = function () {
            if (!of0x[Dp4t]) {
                return
            }
            delete of0x[Dp4t];
            ccb9S.apply(this, arguments)
        };
        tX1x.fu7n("sysaction", {type: "nosuploadstart", location: location.href});
        bKx3x(R4V, e4i);
        return Dp4t
    };
    jx8p.ks8k = function (C4G) {
        var R4V = of0x[C4G];
        if (R4V) {
            if (R4V.step == 0) {
                delete of0x[C4G]
            } else {
                R4V.step = -1;
                if (R4V.reqId) {
                    v4z.ks8k(R4V.reqId)
                }
                delete of0x[C4G]
            }
        }
    };
    jx8p.bak3x = function () {
        var yB3x = function (o4s, e4i) {
            (e4i.onload || bs4w).call(this, o4s)
        };
        var AE3x = function (o4s, e4i) {
            (e4i.onerror || bs4w).call(this, o4s)
        };
        var bKw3x = JSON.stringify({code: 200, size: "$(ObjectSize)"});
        return function (e4i) {
            var bah3x = e4i.returnBody || bKw3x;
            if (k4o.lw9n(bah3x)) {
                try {
                    JSON.stringify(bah3x)
                } catch (e) {
                    bah3x = bKw3x
                }
            }
            return v4z.bn4r("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e4i.filename || "",
                    ext: e4i.ext || "",
                    type: e4i.type || jH8z.OTHER,
                    bucket: e4i.bucket || "",
                    local: e4i.local || false,
                    nos_product: e4i.nosProduct || 0,
                    return_body: bah3x
                },
                onload: yB3x.ew6q(this, e4i),
                onerror: AE3x.ew6q(this, e4i)
            })
        }
    }();
    jx8p.cci9Z = function () {
        var cbZ9Q = "//wanproxy.127.net/lbs";
        var yB3x = function (o4s, e4i) {
            if (o4s.lbs) {
            }
            var Qf9W = o4s.upload;
            if (!Qf9W || !Qf9W.length) {
                AE3x(o4s, e4i)
            }
            (e4i.onload || bs4w).call(this, Qf9W)
        };
        var AE3x = function (o4s, e4i) {
            (e4i.onerror || bs4w).call(this, o4s)
        };
        return function (e4i) {
            var lo9f = e4i.bucket;
            return v4z.bn4r(cbZ9Q, {
                method: "GET",
                type: "json",
                query: {version: "1.0", bucketname: lo9f},
                onload: yB3x.ew6q(this, e4i),
                onerror: AE3x.ew6q(this, e4i)
            })
        }
    }();
    jx8p.ZV3x = function () {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), v4z = c4g("nej.j"),
        ca5f = c4g("nej.ut"), bC4G = c4g("nej.ui"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), jx8p = c4g("nm.x.nos"),
        E4I = c4g("nm.m"), m4q = c4g("nm.l"), w4A = c4g("nm.w"), b3x, K4O;
    var gi7b = a2x.iu8m('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    w4A.bKv3x = NEJ.C();
    b3x = w4A.bKv3x.O4S(bC4G.ei6c);
    b3x.ce5j = function () {
        this.cd5i = gi7b
    };
    b3x.bW5b = function () {
        this.cg5l();
        this.bF4J = this.n4r;
        this.hK7D = a2x.H4L(this.n4r, "j-file")[0];
        h4l.s4w(this.hK7D, "change", this.rJ1x.g4k(this))
    };
    b3x.bl4p = function (e4i) {
        e4i = e4i || {};
        this.bm4q(e4i);
        this.hK7D.accept = e4i.accept || "*";
        this.xk2x = e4i
    };
    b3x.ZD3x = function () {
        return a2x.lv9m(this.hK7D)
    };
    b3x.rJ1x = function (d4h) {
        if (this.hK7D.value == "") return;
        var kE8w = this.hK7D.value.split("\\"), ft7m = kE8w.length > 0 ? kE8w[kE8w.length - 1] : kE8w[0],
            ox0x = (this.hK7D.files || [{}])[0];
        var cl5q = {files: this.hK7D.files, filename: ft7m, size: ox0x.size, cancelUpload: false};
        this.z4D("onchange", cl5q);
        if (cl5q.cancelUpload) {
            this.hK7D.value = "";
            return
        }
        if (cl5q.stopped) {
            return
        }
        this.Rr0x()
    };
    b3x.Rr0x = function () {
        if (this.hK7D.value == "") return;
        var kE8w = this.hK7D.value.split("\\"), ft7m = kE8w.length > 0 ? kE8w[kE8w.length - 1] : kE8w[0],
            eu6o = (ft7m.split(".") || []).pop(), ox0x = (this.hK7D.files || [{}])[0],
            DF4J = (ox0x.type || "").split("/").shift();
        if (ox0x.size > 100 * 1024 * 1024) {
            return this.mV9M("onerror", {code: -200})
        }
        this.z4D("onuploading", 0);
        this.bKu3x = jx8p.bak3x(NEJ.X({
            onload: this.Rs0x.ew6q(this, ft7m),
            onerror: this.mV9M.g4k(this)
        }, this.xk2x, function (p4t) {
            return k4o.gG7z(p4t) || k4o.lw9n(p4t)
        }))
    };
    b3x.Rs0x = function (bP4T, ft7m) {
        var o4s = bP4T.result || {}, lo9f = o4s.bucket, mO9F = o4s.objectKey, eL6F = o4s.token;
        if (!lo9f || !mO9F || !eL6F) {
            bP4T.code = -100;
            this.mV9M.call(this, bP4T);
            return
        }
        var ox0x = (this.hK7D.files || [{}])[0];
        var hQ8I = a2x.dk6e(this.bF4J);
        hQ8I[0].value = mO9F;
        hQ8I[1].value = eL6F;
        if (ox0x.type && ox0x.type.indexOf("audio") == 0) {
            hQ8I[3].value = "audio/mpeg"
        } else {
            hQ8I[3].value = ox0x.type || ""
        }
        this.bF4J.action = "//nos.netease.com/" + lo9f;
        this.DK4O = o4s;
        this.qs0x = ft7m;
        this.z4D("onuploading", .2);
        this.gQ7J()
    };
    b3x.gQ7J = function () {
        this.bKu3x = v4z.gQ7J(this.bF4J, {
            type: "json",
            onload: this.vG2x.g4k(this),
            onerror: this.mV9M.g4k(this),
            onuploading: this.Za3x.g4k(this)
        })
    };
    b3x.ks8k = function () {
        v4z.ks8k(this.bKu3x);
        this.bF4J.reset()
    };
    b3x.vG2x = function (bP4T) {
        var eL6F = this.DK4O, ft7m = this.qs0x, ox0x = (this.hK7D.files || [{}])[0], kg8Y = {
            code: 200,
            fileName: ft7m,
            size: ox0x.size,
            bucket: eL6F.bucket,
            docId: eL6F.docId,
            objectKey: eL6F.objectKey,
            url: "//nos.netease.com/" + eL6F.bucket + "/" + eL6F.objectKey
        };
        if (!bP4T) {
            bP4T = kg8Y
        }
        if (!bP4T.code || bP4T.code == 200) {
            this.z4D("onsuccess", NEJ.X(kg8Y, bP4T))
        } else {
            this.z4D("onerror", bP4T)
        }
        this.bF4J.reset()
    };
    b3x.mV9M = function (bP4T) {
        this.z4D("onerror", bP4T);
        this.bF4J.reset()
    };
    b3x.Za3x = function (iH8z) {
        this.z4D("onuploading", .2 + iH8z.loaded / iH8z.total * .8)
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), v4z = c4g("nej.j"),
        ca5f = c4g("nej.ut"), bC4G = c4g("nej.ui"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), jx8p = c4g("nm.x.nos"),
        E4I = c4g("nm.m"), m4q = c4g("nm.l"), w4A = c4g("nm.w"), b3x, K4O;
    w4A.Rw0x = NEJ.C();
    b3x = w4A.Rw0x.O4S(ca5f.cH6B);
    b3x.bl4p = function (e4i) {
        e4i = e4i || {};
        this.bm4q(e4i);
        this.Yo2x = w4A.bKv3x.A4E(NEJ.X({
            parent: e4i.parent,
            onchange: this.rJ1x.g4k(this),
            onuploading: this.z4D.g4k(this, "onuploading"),
            onsuccess: this.z4D.g4k(this, "onsuccess"),
            onerror: this.z4D.g4k(this, "onerror")
        }, e4i, function (p4t) {
            return k4o.gG7z(p4t) || k4o.lw9n(p4t)
        }));
        if (e4i.multiple && jx8p.ZV3x()) {
            a2x.gh7a(this.Yo2x.ZD3x(), "multiple", true)
        }
        this.xk2x = e4i
    };
    b3x.rJ1x = function (e4i) {
        var ft7m = e4i.filename, eu6o = (ft7m.split(".") || []).pop();
        this.bKr3x = (e4i.files || [{}])[0];
        this.z4D("onchange", e4i);
        if (jx8p.ZV3x() && !e4i.stopped && !e4i.cancelUpload) {
            this.Rr0x(true);
            e4i.stopped = true
        }
    };
    b3x.ZD3x = function () {
        return this.Yo2x.ZD3x()
    };
    b3x.cbP9G = function () {
        return this.bKr3x
    };
    b3x.Rr0x = function (eV6P, cU6O) {
        cU6O = cU6O || this.bKr3x;
        if (jx8p.ZV3x()) {
            this.bKq3x = jx8p.gQ7J(NEJ.X({
                file: cU6O,
                local: this.xk2x.bucket && this.xk2x.bucket.length,
                onuploading: this.z4D.g4k(this, "onuploading"),
                onsuccess: this.z4D.g4k(this, "onsuccess"),
                onerror: this.z4D.g4k(this, "onerror")
            }, this.xk2x, function (p4t) {
                return k4o.gG7z(p4t) || k4o.lw9n(p4t)
            }));
            return this.bKq3x
        } else if (!eV6P) {
            this.Yo2x.Rr0x()
        }
    };
    b3x.ks8k = function (C4G) {
        C4G = C4G || this.bKq3x;
        if (C4G) {
            jx8p.ks8k(C4G)
        }
        this.Yo2x.ks8k()
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), em6g = c4g("nej.g"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        v4z = c4g("nej.j"), fH7A = c4g("nej.n"), I4M = c4g("nej.ut"), bc4g = c4g("nej.ui"), w4A = c4g("nm.w"),
        m4q = c4g("nm.l"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), M4Q = c4g("nm.x.f"), jx8p = c4g("nm.x.nos"), b3x, K4O,
        boX7Q = {0: "", "-1": "不能添加重复图片", "-10": "最多只能添加9张", "-3": "请选择不超过5M的图片"}, boY7R = 5 * 1024 * 1024, cFP8H = 80,
        bKp3x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    w4A.bKo3x = NEJ.C();
    b3x = w4A.bKo3x.O4S(I4M.vN2x);
    b3x.bnZ7S = function () {
        return {x: this.Bb4f.clientWidth - this.n4r.offsetWidth, y: this.Bb4f.clientHeight - this.n4r.offsetHeight}
    };
    w4A.bpi7b = NEJ.C();
    b3x = w4A.bpi7b.O4S(bc4g.ei6c);
    b3x.ce5j = function () {
        this.cd5i = "m-xwgt-share-upload"
    };
    b3x.bW5b = function () {
        this.cg5l();
        var i4m = a2x.H4L(this.n4r, "j-flag");
        this.XW2x = i4m.shift();
        this.Lb7U = i4m.shift();
        this.Sm0x = i4m.shift();
        this.bKn3x = {
            onchange: this.bKm3x.ew6q(this, 0),
            onerror: this.eI6C.g4k(this),
            onsuccess: this.tZ1x.g4k(this),
            multiple: true,
            parent: this.Lb7U,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bps7l = {
            onchange: this.bKm3x.ew6q(this, 1),
            onerror: this.eI6C.g4k(this),
            onsuccess: this.tZ1x.g4k(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cbH9y = w4A.Rw0x.A4E(this.bKn3x)
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.bps7l.parent = e4i.button;
        this.KV7O && this.KV7O.T4X();
        this.KV7O = w4A.Rw0x.A4E(this.bps7l);
        this.n4r.style.display = "none";
        if (!!this.fa6U) {
            for (var i = this.fa6U.length - 1; i >= 0; i--) {
                a2x.cJ6D(this.fa6U[i].element, false);
                if (this.fa6U[i].dragger) this.fa6U[i].dragger.T4X()
            }
        }
        this.fa6U = [];
        if (this.Ah3x) {
            clearTimeout(this.Ah3x)
        }
        this.Xt2x(0);
        this.SJ1x = 0;
        this.bX5c([[this.bKn3x.parent, "click", this.bKl3x.g4k(this)], [this.bps7l.parent, "click", this.bKl3x.g4k(this)]])
    };
    b3x.bD4H = function () {
        h4l.hd7W(this.sK1x, "click");
        if (!!this.fa6U) {
            for (var i = this.fa6U.length - 1; i >= 0; i--) {
                a2x.cJ6D(this.fa6U[i].element, false);
                if (this.fa6U[i].dragger) this.fa6U[i].dragger.T4X()
            }
        }
        this.fa6U = [];
        if (this.Ah3x) {
            clearTimeout(this.Ah3x)
        }
        this.Ah3x = 0;
        this.KV7O && this.KV7O.T4X();
        delete this.KV7O;
        this.bG4K()
    };
    b3x.bKl3x = function (d4h) {
        if (!jx8p.ZV3x() && this.fa6U.doing) {
            h4l.bh4l(d4h)
        }
    };
    b3x.bKm3x = function (e4i, r4v) {
        var nz9q = e4i.files, iG8y;
        e4i.stopped = true;
        if (!nz9q) {
            if (e4i.filename) {
                nz9q = [{name: e4i.filename, isIE: true}]
            }
        }
        for (var i = 0, len = nz9q.length; i < len; i++) {
            if (!bKp3x.test(nz9q[i].name)) {
                this.bpM8E({path: nz9q[i].name, index: r4v, status: -4, fail: "这不是<br>图片"})
            } else if (nz9q[i].size > boY7R) {
                this.bpN8F(-3);
                this.bpM8E({path: nz9q[i].name, index: r4v, status: -3, fail: "上传<br>失败"})
            } else {
                this.bpM8E({path: nz9q[i].name, file: nz9q[i], index: r4v, status: 0})
            }
        }
    };
    b3x.bpM8E = function (sR1x) {
        if (this.fa6U.length >= 9) {
            this.bpN8F(-10, 3e3, this.bKk3x.g4k(this));
            return
        }
        this.cbB9s(sR1x);
        this.fa6U.push(sR1x);
        if (!!this.fa6U.length) {
            this.n4r.style.display = ""
        }
        if (this.fa6U.length >= 9) {
            this.Lb7U.style.display = "none"
        } else {
            this.Lb7U.style.display = ""
        }
        this.KP7I()
    };
    b3x.KP7I = function () {
        var bpX8P = -1, bKh3x = 0;
        for (var i = 0, l = this.fa6U.length; i < l; i++) {
            if (this.fa6U[i].status == 1) {
                return
            }
            if (this.fa6U[i].status == 0 && bpX8P < 0) {
                bpX8P = i
            }
            if (this.fa6U[i].status == 2 || this.fa6U[i].status < 0) {
                bKh3x++
            }
        }
        var p4t = this.fa6U[bpX8P];
        if (p4t) {
            (p4t.index == 0 ? this.cbH9y : this.KV7O).Rr0x(false, p4t.file);
            p4t.status = 1;
            this.fa6U.doing = p4t;
            this.z4D("onstartupload", {})
        } else if (bKh3x == this.fa6U.length) {
            this.z4D("onfinishupload", {})
        }
    };
    b3x.bpZ8R = function () {
        return this.fa6U.doing || {}
    };
    b3x.eI6C = function (d4h) {
        var sR1x = this.bpZ8R();
        sR1x.status = -4;
        sR1x.fail = "上传<br>失败";
        this.bKg3x(sR1x);
        this.fa6U.doing = null;
        this.KP7I()
    };
    b3x.tZ1x = function (d4h) {
        var sR1x = this.bpZ8R(), dN6H = d4h.fileName.match(bKp3x);
        sR1x.picUrl = d4h.url;
        v4z.bn4r("/upload/event/img/v1", {
            query: {imgid: d4h.docId, format: dN6H[1]},
            type: "json",
            onload: this.bKf3x.g4k(this),
            onerror: this.bKf3x.g4k(this)
        })
    };
    b3x.bKf3x = function (d4h) {
        if (d4h && d4h.code == 200 && d4h.picInfo) {
            var sR1x = this.bpZ8R();
            sR1x.status = 2;
            var by4C = NEJ.X({}, d4h.picInfo);
            by4C.originId = by4C.originIdStr;
            by4C.squareId = by4C.squareIdStr;
            by4C.rectangleId = by4C.rectangleIdStr;
            by4C.pcSquareId = by4C.pcSquareIdStr;
            by4C.pcRectangleId = by4C.pcRectangleIdStr;
            by4C.originJpgId = by4C.originJpgIdStr || by4C.originJpgId;
            sR1x.picInfo = by4C;
            this.bKg3x(sR1x);
            this.fa6U.doing = null;
            this.KP7I()
        } else {
            this.eI6C(d4h)
        }
    };
    b3x.bpN8F = function (r4v, kO8G, fp7i) {
        if (this.SJ1x < r4v) {
            return
        }
        if (this.Ah3x) {
            clearTimeout(this.Ah3x);
            this.Ah3x = 0
        }
        if (kO8G) {
            this.Sm0x.innerText = boX7Q[r4v * 1];
            this.SJ1x = r4v;
            this.Ah3x = setTimeout(this.Xt2x.g4k(this, r4v, fp7i), kO8G)
        } else {
            this.Sm0x.innerText = boX7Q[r4v];
            this.SJ1x = r4v
        }
        this.Sm0x.style.display = ""
    };
    b3x.Xt2x = function (r4v, fp7i) {
        if (r4v && this.SJ1x !== r4v) {
            return
        }
        this.SJ1x = 0;
        this.Sm0x.innerText = boX7Q[0];
        this.Sm0x.style.display = "none";
        fp7i && fp7i()
    };
    b3x.cbB9s = function (cU6O) {
        var j4n = {};
        if (cU6O.fail) {
            j4n.fail = cU6O.fail
        }
        var dT6N = a2x.bZ5e("m-xwgt-share-upload-preview", j4n);
        cU6O.element = a2x.nH9y(dT6N);
        h4l.s4w(a2x.H4L(cU6O.element, "del")[0], "mousedown", this.cbo9f.g4k(this, cU6O), false);
        this.XW2x.insertBefore(cU6O.element, this.XW2x.lastElementChild);
        cU6O.dragger = w4A.bKo3x.A4E({
            view: this.XW2x.parentNode,
            body: cU6O.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Sz0x.g4k(this, cU6O),
            onchange: this.cbn9e.g4k(this, cU6O),
            ondragend: this.bns7l.g4k(this, cU6O)
        })
    };
    b3x.bKg3x = function (cU6O) {
        if (!cU6O || !cU6O.element) {
            return false
        }
        var j4n = {};
        if (cU6O.fail) {
            j4n.fail = cU6O.fail
        } else {
            j4n.url = cU6O.picUrl
        }
        a2x.y4C(cU6O.element, "z-fail");
        cU6O.element.firstChild.outerHTML = a2x.bZ5e("m-xwgt-share-upload-preview-img", j4n)
    };
    b3x.Sz0x = function (p4t, kL8D) {
        a2x.y4C(p4t.element, "z-sel")
    };
    b3x.cbn9e = function (p4t, kL8D) {
        var cFQ8I, gt7m = this.fa6U.length - 1, ob0x;
        for (var i = gt7m; i >= 0; i--) {
            a2x.x4B(this.fa6U[i].element, "z-jump");
            if (this.fa6U[i] == p4t) {
                ob0x = i
            } else {
                a2x.eY6S(this.fa6U[i].element, {left: "", top: ""})
            }
        }
        var ST1x = {x: 46 + 92 * (ob0x % 5) + kL8D.left, y: 46 + 92 * (ob0x / 5 >> 0) + kL8D.top};
        var bqo8g = ST1x.x / 92 >> 0, bqt8l = ST1x.y / 92 >> 0, yY3x = Math.max(0, Math.min(gt7m, bqt8l * 5 + bqo8g));
        if (yY3x == ob0x) {
            return
        }
        var cbj9a = yY3x < ob0x;
        for (var i = Math.min(yY3x, ob0x); i <= Math.max(yY3x, ob0x); i++) {
            if (i !== ob0x) {
                var bKb3x = i % 5;
                if (cbj9a) {
                    if (bKb3x == 4) {
                        a2x.eY6S(this.fa6U[i].element, {left: "-368px", top: "92px"})
                    } else {
                        a2x.eY6S(this.fa6U[i].element, {left: "92px", top: ""})
                    }
                } else {
                    if (bKb3x == 0) {
                        a2x.eY6S(this.fa6U[i].element, {left: "368px", top: "-92px"})
                    } else {
                        a2x.eY6S(this.fa6U[i].element, {left: "-92px", top: ""})
                    }
                }
            }
        }
    };
    b3x.bns7l = function (p4t, kL8D) {
        var cFR8J, gt7m = this.fa6U.length - 1, ob0x;
        for (var i = gt7m; i >= 0; i--) {
            a2x.eY6S(this.fa6U[i].element, {left: "", top: ""});
            if (this.fa6U[i] == p4t) {
                ob0x = i
            }
        }
        a2x.x4B(p4t.element, "z-sel");
        var ST1x = {x: 46 + 92 * (ob0x % 5) + kL8D.left, y: 46 + 92 * (ob0x / 5 >> 0) + kL8D.top};
        var bqo8g = ST1x.x / 92 >> 0, bqt8l = ST1x.y / 92 >> 0, yY3x = Math.max(0, Math.min(gt7m, bqt8l * 5 + bqo8g));
        if (yY3x == ob0x) {
            return
        }
        this.XW2x.insertBefore(p4t.element, (this.fa6U[yY3x + (yY3x > ob0x ? 1 : 0)] || {}).element || this.Lb7U);
        this.fa6U.splice(ob0x, 1);
        this.fa6U.splice(yY3x, 0, p4t)
    };
    b3x.cbo9f = function (p4t, d4h) {
        a2x.cJ6D(p4t.element, false);
        if (p4t.dragger) p4t.dragger.T4X();
        delete p4t.dragger;
        var r4v = -1;
        for (var i = this.fa6U.length - 1; i >= 0; i--) {
            if (this.fa6U[i] == p4t) {
                r4v = i;
                break
            }
        }
        this.fa6U.splice(r4v, r4v >= 0 ? 1 : 0);
        delete p4t;
        if (this.fa6U.length >= 9) {
            this.Lb7U.style.display = "none"
        } else {
            this.Lb7U.style.display = ""
        }
        if (!this.fa6U.length) {
            this.n4r.style.display = "none";
            this.Xt2x(0)
        } else {
            this.bKk3x()
        }
        if (this.fa6U.doing == p4t) {
            this.fa6U.doing = null
        }
        this.KP7I()
    };
    b3x.bKk3x = function () {
        var bJZ3x = false;
        for (var i = 0, len = this.fa6U.length; i < len; i++) {
            if (this.fa6U[i].status == -3) {
                bJZ3x = true
            }
        }
        if (bJZ3x) {
            this.bpN8F(-3)
        } else {
            this.Xt2x(-3)
        }
    };
    b3x.SV1x = function () {
        var dB6v = [];
        for (var i = this.fa6U.length - 1; i >= 0; i--) {
            if (this.fa6U[i].status == 2) {
                dB6v.unshift(this.fa6U[i].picInfo)
            }
        }
        return dB6v
    };
    I4M.fJ7C.A4E({element: w4A.bpi7b, event: ["onstartupload", "onfinishupload"]})
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, fx7q = NEJ.R, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        bc4g = c4g("nej.ui"), N4R = c4g("nej.ut"), b3x, K4O;
    if (!!N4R.mU9L) return;
    N4R.mU9L = NEJ.C();
    b3x = N4R.mU9L.O4S(N4R.bdx4B);
    K4O = N4R.mU9L.cs5x;
    b3x.bl4p = function (e4i) {
        this.cbd9U(e4i.more);
        this.Et5y = a2x.B4F(e4i.sbody);
        this.cbc9T = e4i.fixScrollPosition;
        this.bX5c([[this.Et5y, "scroll", this.cbb9S.g4k(this)]]);
        var do6i = e4i.delta;
        if (do6i == null) do6i = 30;
        this.TK1x = Math.max(0, do6i);
        var cF6z = parseInt(e4i.count) || 0;
        this.jC8u = Math.max(0, cF6z);
        var gR7K = parseInt(e4i.number) || 0;
        if (gR7K > 1 && gR7K <= cF6z) {
            this.Bt4x = gR7K
        }
        this.bm4q(e4i)
    };
    b3x.bD4H = function () {
        this.bG4K();
        delete this.AD3x;
        delete this.Et5y;
        delete this.tj1x;
        delete this.WA2x
    };
    b3x.Bk4o = function (bi4m, bq4u) {
        var bM4Q = this.zO3x + (this.jC8u - 1) * this.pd0x, gc7V = this.jC8u * this.pd0x;
        return K4O.Bk4o.call(this, bM4Q, bi4m, gc7V, bq4u)
    };
    b3x.cbd9U = function (Wu2x) {
        this.AD3x = a2x.B4F(Wu2x);
        this.bX5c([[this.AD3x, "click", this.oI0x.g4k(this)]])
    };
    b3x.brn8f = function (F4J) {
        F4J = F4J || {};
        if (this.tj1x || !F4J) return;
        if (!F4J.scrollHeight) F4J = a2x.oy0x();
        var bi4m = a2x.hO8G(this.ii8a, this.cbc9T ? F4J : null),
            do6i = bi4m.y + this.ii8a.offsetHeight - F4J.scrollTop - F4J.clientHeight,
            bro8g = F4J.scrollHeight <= F4J.clientHeight;
        if (do6i <= this.TK1x || bro8g && !this.tj1x) {
            this.oI0x()
        }
    };
    b3x.cbb9S = function (d4h) {
        if (this.tj1x) return;
        this.brn8f(h4l.W4a(d4h))
    };
    b3x.Be4i = function (d4h) {
        K4O.Be4i.apply(this, arguments);
        if (!d4h.stopped) {
            this.Nu8m();
            var bi4m = 0;
            if (d4h.index > 1) {
                bi4m = this.zO3x + ((d4h.index - 1) * this.jC8u - 1) * this.pd0x
            }
            this.hP8H = bi4m;
            this.oI0x()
        }
    };
    b3x.bLu3x = function (e4i) {
        if (!!this.Bt4x) {
            var do6i = e4i.offset > 0 ? this.pd0x : this.zO3x, gc7V = do6i + this.pd0x * (this.Bt4x - 1);
            this.hP8H = e4i.offset + gc7V;
            e4i.data.limit = gc7V;
            e4i.limit = gc7V;
            delete this.Bt4x
        }
        return e4i
    };
    b3x.bin6h = function (e4i) {
        delete this.WA2x;
        K4O.bin6h.apply(this, arguments);
        this.bJX3x()
    };
    b3x.bip6j = function (d4h) {
        if (d4h.key != this.jq8i.key) return;
        switch (d4h.action) {
            case"refresh":
            case"append":
                delete this.WA2x;
                break
        }
        K4O.bip6j.apply(this, arguments)
    };
    b3x.Nd7W = function () {
        this.yT3x("onbeforelistload", "列表加载中...");
        a2x.ba4e(this.AD3x, "display", "none")
    };
    b3x.biI6C = function (i4m, bi4m, gc7V) {
        var bq4u = i4m.length, brs8k = i4m.loaded ? bi4m + gc7V >= bq4u : bi4m + gc7V > bq4u;
        this.hP8H = Math.min(this.hP8H, bq4u);
        a2x.ba4e(this.AD3x, "display", brs8k ? "none" : "");
        if (brs8k) this.tj1x = !0;
        if (this.jC8u > 0) {
            var by4C = this.Bk4o(bi4m, i4m.length);
            if (this.bLs3x(by4C.index, by4C.total)) return !0;
            var do6i = this.zO3x - this.pd0x, gR7K = this.jC8u * this.pd0x;
            this.tj1x = (bi4m + gc7V - do6i) % gR7K == 0 || brs8k;
            a2x.ba4e(this.AD3x, "display", this.tj1x ? "none" : "");
            this.biw6q(this.tj1x && by4C.total > 1 ? "" : "none")
        }
    };
    b3x.biH6B = function () {
        this.hP8H = 0;
        this.tj1x = !0;
        this.yT3x("onemptylist", "没有列表数据！")
    };
    b3x.Nb7U = function (dT6N, kL8D) {
        this.ii8a.insertAdjacentHTML(kL8D || "beforeEnd", dT6N)
    };
    b3x.Na7T = function (ho7h) {
        this.fL7E = this.fL7E || [];
        if (k4o.eJ6D(ho7h)) {
            fx7q.push.apply(this.fL7E, ho7h)
        } else {
            this.fL7E.push(ho7h)
        }
    };
    b3x.bdX4b = function (d4h) {
        a2x.mY9P(this.cv5A);
        this.MR7K(d4h, "onafteradd");
        var eV6P = d4h.flag;
        if (d4h.stopped || !eV6P) return;
        if (this.jC8u > 0) {
            this.biz6t();
            return
        }
        this.hP8H += 1;
        eV6P == -1 ? this.bjo6i(d4h.data) : this.bLr3x(d4h.data)
    };
    b3x.bdZ4d = function (d4h) {
        this.MR7K(d4h, "onafterdelete");
        if (d4h.stopped) return;
        if (this.jC8u > 0) {
            this.biz6t();
            return
        }
        var C4G = d4h.data[this.fd6X.pkey];
        if (!!this.fL7E) {
            var p4t = a2x.bTd6X(C4G), r4v = k4o.di6c(this.fL7E, p4t);
            if (r4v >= 0) {
                this.fL7E.splice(r4v, 1);
                this.hP8H -= 1
            }
            if (!!p4t) p4t.T4X()
        } else {
            var f4j = a2x.B4F(this.bLy3x(C4G));
            if (!!f4j) this.hP8H -= 1;
            a2x.cJ6D(f4j)
        }
        if (this.hP8H <= 0) this.oI0x()
    };
    b3x.bje6Y = function (bi4m, gc7V) {
        if (bi4m != this.hP8H) return;
        if (this.VW1x()) {
            this.tj1x = !1;
            this.bJX3x()
        }
    };
    b3x.bjf6Z = function (bi4m, gc7V) {
        if (bi4m != 0) return;
        var Jh6b = this.S4W.hD7w(this.jq8i.key);
        for (var i = gc7V - 1; i >= 0; i--) {
            this.bjo6i(Jh6b[i])
        }
    };
    b3x.bJX3x = function () {
        var F4J = this.Et5y;
        if (!F4J || this.tj1x) return;
        this.brn8f(this.Et5y)
    };
    b3x.gB7u = function () {
        delete this.tj1x;
        K4O.gB7u.apply(this, arguments)
    };
    b3x.oI0x = function () {
        if (!!this.WA2x) return;
        this.WA2x = !0;
        var bi4m = this.hP8H;
        this.hP8H += bi4m == 0 ? this.zO3x : this.pd0x;
        this.bLv3x(bi4m)
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = c4g("nej.e"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), cY6S = c4g("nej.x"),
        N4R = c4g("nej.ut"), b3x;
    if (!!N4R.EE5J) return;
    N4R.EE5J = NEJ.C();
    b3x = N4R.EE5J.O4S(N4R.cH6B);
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.ji8a = e4i.event || "click";
        this.kR9I = e4i.selected || "js-selected";
        this.nK9B = e4i.disabled || "js-disabled";
        this.bJT3x = !!e4i.inverse;
        this.caP9G(e4i.list);
        this.UF1x(e4i.index || 0)
    };
    b3x.bD4H = function () {
        var caN9E = function (f4j) {
            this.brC8u(f4j, !1)
        };
        return function () {
            this.bG4K();
            k4o.bd4h(this.bU5Z, caN9E, this);
            delete this.bU5Z;
            delete this.ji8a;
            delete this.ct5y;
            delete this.nK9B;
            delete this.kR9I;
            delete this.bJT3x
        }
    }();
    b3x.caP9G = function () {
        var bgY5d = function (p4t) {
            if (!p4t) return;
            this.bU5Z.push(p4t);
            var r4v = this.bU5Z.length - 1, dt6n = this.brD8v[r4v];
            if (!dt6n) {
                dt6n = this.UF1x.g4k(this, r4v);
                this.brD8v[r4v] = dt6n
            }
            this.bX5c([[p4t, this.ji8a, dt6n]])
        };
        return function (i4m) {
            this.bU5Z = [];
            if (!this.brD8v) this.brD8v = [];
            k4o.bd4h(i4m, bgY5d, this)
        }
    }();
    b3x.brC8u = function (F4J, caJ9A) {
        !!caJ9A && !this.bJT3x ? a2x.y4C(F4J, this.kR9I) : a2x.x4B(F4J, this.kR9I)
    };
    b3x.UF1x = function (r4v, UU1x, j4n) {
        var F4J = this.bU5Z[r4v];
        if (UU1x != !0 && (r4v == this.ct5y || !F4J || a2x.bE4I(F4J, this.nK9B))) {
            h4l.cp5u(arguments[1]);
            return this
        }
        var d4h = {index: r4v, last: this.ct5y, list: this.lK9B(), data: j4n || a2x.t4x(F4J, "value")};
        this.ct5y = r4v;
        F4J = this.bU5Z[d4h.last];
        if (!!F4J) this.brC8u(F4J, !1);
        F4J = this.bU5Z[this.ct5y];
        this.brC8u(F4J, !0);
        this.z4D("onchange", d4h);
        if (!d4h.nostop) h4l.cp5u(arguments[1]);
        return this
    };
    b3x.tD1x = function () {
        return this.ct5y
    };
    b3x.lK9B = function () {
        return this.bU5Z
    };
    a2x.caG9x = cY6S.caG9x = function (bI4M, e4i) {
        var C4G = a2x.lv9m(bI4M);
        if (!C4G) return null;
        if (!N4R.bba4e(C4G, N4R.EE5J)) {
            e4i = e4i || {};
            e4i.list = !e4i.clazz ? a2x.dk6e(C4G) : a2x.H4L(C4G, e4i.clazz);
            delete e4i.clazz
        }
        return N4R.bba4e(C4G, N4R.EE5J, e4i || bb4f)
    };
    cY6S.isChange = !0
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, k4o = c4g("nej.u"), v4z = c4g("nej.j"), l4p = c4g("nm.x");
    var SETTING_KEY = "player-setting";
    var nv9m = {mode: 4, volume: .8, autoPlay: false, index: 0, lock: false};
    nv9m = v4z.sw1x(SETTING_KEY) || nv9m;
    l4p.brR8J = function () {
        return nv9m
    };
    l4p.EL5Q = function (EM5R) {
        if (EM5R) {
            nv9m = EM5R;
            v4z.uW2x(SETTING_KEY, EM5R)
        }
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        l4p = c4g("nm.x"), q4u = c4g("nm.d"), hk7d = c4g("nm.w.player.log");
    var kI8A = q4u.hR8J.A4E();
    var LogLevel = {ERROR: 10, INFO: 6, DEBUG: 2};
    var md9U = function (u4y, bH4L, rd0x) {
        var cG6A = l4p.fe7X("{0} {1} {2}", k4o.if8X(new Date, "yyyy-MM-dd HH:mm:ss"), u4y, bH4L);
        if (rd0x == LogLevel.ERROR) {
            kI8A.fu7n("playerror", {message: bH4L})
        }
        if (rd0x >= LogLevel.INFO) {
            kI8A.bRh6b(cG6A)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cG6A)
        }
    };
    hk7d.cf5k = function () {
        md9U("PLAY_ERROR", l4p.fe7X.apply(null, arguments), LogLevel.ERROR)
    };
    hk7d.pK0x = function () {
        md9U("PLAY_INFO", l4p.fe7X.apply(null, arguments), LogLevel.INFO)
    };
    hk7d.cFS8K = function () {
        md9U("PLAY_DEBUG", l4p.fe7X.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), I4M = c4g("nej.ut"), k4o = c4g("nej.u"), w4A = c4g("nm.w"),
        fp7i = c4g("flash.cb");
    var ec6W = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var ER5W, Vv1x, vr2x;
    w4A.caA9r = function (u4y, cK6E) {
        if (u4y != "flash") {
            if (!ER5W) {
                ER5W = a2x.dg6a("audio");
                k4o.bd4h(ec6W, function (u4y) {
                    h4l.s4w(ER5W, u4y, onMediaCallBack)
                })
            }
            if (ER5W && ER5W.canPlayType && ER5W.canPlayType("audio/mpeg")) {
                cK6E(new MediaWrap("audio"));
                return
            }
        }
        if (!Vv1x) {
            a2x.rG1x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {allowscriptaccess: "always"},
                onready: function (hT8L) {
                    Vv1x = hT8L;
                    k4o.bd4h(ec6W, function (u4y) {
                        fp7i[u4y] = onMediaCallBack;
                        Vv1x.addCallback(u4y, "flash.cb." + u4y)
                    });
                    cK6E(new MediaWrap("flash"))
                }.g4k(this)
            })
        } else {
            cK6E(new MediaWrap("flash"))
        }
    };

    function MediaWrap(EV5a) {
        var gP7I;
        I4M.fJ7C.A4E({element: this, event: ec6W.concat(["interrupt", "recover"])});
        gP7I = EV5a == "audio" ? ER5W : Vv1x;
        this.type = EV5a;
        this.destroy = function () {
        };
        this.setSrc = function (Y4c) {
            if (vr2x != this) {
                var gt7m = vr2x;
                if (gt7m) {
                    gt7m.interrupt()
                }
                vr2x = this
            }
            if (EV5a == "flash") {
                gP7I.setSrc(Y4c)
            } else {
                gP7I.src = Y4c
            }
        };
        this.play = function () {
            if (vr2x != this) {
                var gt7m = vr2x;
                if (gt7m) {
                    gt7m.interrupt();
                    vr2x = this;
                    this.recover()
                } else {
                    vr2x = this
                }
            }
            if (EV5a == "flash") {
                gP7I.as_play()
            } else {
                gP7I.play()
            }
        };
        this.pause = function () {
            if (vr2x != this) return;
            if (EV5a == "flash") {
                gP7I.as_pause()
            } else {
                gP7I.pause()
            }
        };
        this.load = function () {
            if (vr2x != this) return;
            if (EV5a == "flash") {
                gP7I.as_load()
            } else {
                gP7I.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({type: "interrupt"})
        };
        this.recover = function () {
            onMediaCallBack({type: "recover"})
        };
        this.getMedia = function () {
            return gP7I
        };
        var ov0x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k4o.bd4h(ov0x, function (V4Z) {
            var Vh1x = "get" + V4Z, Vk1x = "set" + V4Z;
            if (EV5a == "flash") {
                if (!this[Vh1x]) {
                    this[Vh1x] = function () {
                        return gP7I[Vh1x]()
                    }
                }
                if (!this[Vk1x]) {
                    this[Vk1x] = function (value) {
                        gP7I[Vk1x](value)
                    }
                }
            } else {
                var bJJ3x = V4Z.slice(0, 1).toLowerCase() + V4Z.slice(1);
                if (!this[Vh1x]) {
                    this[Vh1x] = function () {
                        return gP7I[bJJ3x]
                    }
                }
                if (!this[Vk1x]) {
                    this[Vk1x] = function (value) {
                        gP7I[bJJ3x] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d4h) {
        if (vr2x) {
            h4l.z4D(vr2x, d4h.type, d4h)
        }
    }
})();
(function () {
    var c4g = NEJ.P, h4l = c4g("nej.v"), v4z = c4g("nej.j"), I4M = c4g("nej.ut"), dv6p = c4g("nej.p"),
        w4A = c4g("nm.w"), l4p = c4g("nm.x"), hk7d = c4g("nm.w.player.log"), b3x;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {MEDIA_ERR_ABORTED: 1, MEDIA_ERR_NETWORK: 2, MEDIA_ERR_DECODE: 3, MEDIA_ERR_SRC_NOT_SUPPORTED: 4};
    var ErrorType = {INFO_GET_ERR: 1, NET_ERR: 2, UNKNOWN_ERR: 10};
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {NONE: 0, GET_URL: 1, RELOAD: 2, SWITCH_CDN: 3};
    var bJI3x = false;
    w4A.fM7F = NEJ.C();
    b3x = w4A.fM7F.O4S(I4M.cH6B);
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.cL6F = {};
        this.Vt1x(e4i.media);
        v4z.bn4r("/api/cdns", {
            type: "json", onload: function (d4h) {
                if (d4h.code) {
                    this.qL0x = d4h.data
                }
            }.g4k(this)
        })
    };
    b3x.bD4H = function () {
        this.bG4K();
        delete this.cL6F
    };
    b3x.ZX3x = function (bj4n) {
        if (!bj4n) return;
        var wE2x = this.cL6F.volume;
        if (this.dS6M) {
            this.dS6M.pause()
        }
        this.cL6F = {time: 0, id: bj4n.id, duration: bj4n.duration / 1e3, play: this.cL6F.play, stalledRetryCount: 0};
        if (wE2x != null) {
            this.cL6F.volume = wE2x
        }
        this.cL6F.loadState = LoadState.LOAD_START;
        this.bJH3x(bj4n.id);
        hk7d.pK0x("play song id: {0}", bj4n.id)
    };
    b3x.ej6d = function () {
        if (this.cL6F.error) {
            this.cL6F.error = null;
            if (this.cL6F.error == ErrorType.INFO_GET_ERR || this.bJG3x()) {
                this.bJF3x()
            } else {
                this.UE1x()
            }
        } else {
            if (this.dS6M) {
                this.dS6M.play()
            }
        }
        this.cL6F.play = true;
        this.pC0x("play")
    };
    b3x.fC7v = function () {
        if (this.dS6M) {
            this.dS6M.pause()
        }
        this.cL6F.play = false;
        this.pC0x("pause")
    };
    b3x.oS0x = function (bA4E) {
        if (this.dS6M) {
            this.dS6M.setCurrentTime(bA4E)
        }
        this.cL6F.time = bA4E;
        hk7d.pK0x("seek to: {0}", bA4E)
    };
    b3x.btf8X = function () {
        return this.cL6F.duration || 0
    };
    b3x.vD2x = function () {
        return !!this.cL6F.play
    };
    b3x.mQ9H = function (Uu1x) {
        this.cL6F.volume = Uu1x;
        if (this.dS6M) {
            this.dS6M.setVolume(Uu1x)
        }
    };
    b3x.Wr2x = function () {
        return this.cL6F.time
    };
    b3x.Vt1x = function (u4y) {
        w4A.caA9r(u4y, function (gP7I) {
            this.dS6M = gP7I;
            hk7d.pK0x("media loaded: {0}", gP7I.type);
            this.bX5c([[this.dS6M, "loadedmetadata", this.cau9l.g4k(this)], [this.dS6M, "ended", this.caq9h.g4k(this)], [this.dS6M, "waiting", this.zx3x.g4k(this)], [this.dS6M, "play", this.vu2x.g4k(this)], [this.dS6M, "pause", this.btv9m.g4k(this)], [this.dS6M, "playing", this.Uh1x.g4k(this)], [this.dS6M, "timeupdate", this.cal9c.g4k(this)], [this.dS6M, "progress", this.tF1x.g4k(this)], [this.dS6M, "stalled", this.btD9u.g4k(this)], [this.dS6M, "interrupt", this.fC7v.g4k(this)], [this.dS6M, "recover", this.cak9b.g4k(this)], [this.dS6M, "error", this.eI6C.g4k(this)]]);
            if (this.cL6F) {
                if (this.cL6F.loadState == LoadState.LOAD_START || this.cL6F.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.btI9z();
                    if (this.cL6F.volume != null) {
                        this.dS6M.setVolume(this.cL6F.volume)
                    }
                }
            }
        }.g4k(this))
    };
    b3x.cai9Z = function (u4y) {
        this.IJ6D();
        this.dS6M.destroy();
        this.cL6F.loadState = LoadState.IN_SWITCH_MEDIA;
        this.zx3x();
        this.Vt1x(u4y);
        hk7d.pK0x("switch media")
    };
    b3x.cFW8O = function () {
        return this.dS6M
    };
    b3x.bJH3x = function () {
        this.zx3x();
        v4z.bn4r("/api/song/enhance/player/url", {
            type: "json",
            query: {ids: JSON.stringify([this.cL6F.id]), br: DEFAULT_BR},
            onload: this.bJz3x.g4k(this),
            onerror: this.bJz3x.g4k(this)
        })
    };
    b3x.bJz3x = function (d4h) {
        if (d4h.code == 200 && d4h.data && d4h.data.length) {
            var by4C = d4h.data[0];
            if (!by4C.url) {
                this.cL6F.error = ErrorType.INFO_GET_ERR;
                this.pC0x("error", {code: this.cL6F.error});
                return
            }
            this.cL6F.playUrl = by4C.url;
            this.cL6F.expireTime = (new Date).getTime() + by4C.expi * 1e3;
            this.btI9z()
        } else {
            this.cL6F.error = ErrorType.INFO_GET_ERR;
            this.pC0x("error", {code: this.cL6F.error});
            hk7d.cf5k("info load error")
        }
    };
    b3x.btI9z = function () {
        if (this.dS6M) {
            var Y4c = this.cL6F.playUrl;
            if (this.cL6F.time > 0 && (this.cL6F.loadState == LoadState.IN_RE_GET_URL || this.cL6F.loadState == LoadState.IN_RE_GET_URL)) {
                Y4c += "#t=" + this.cL6F.time
            }
            this.dS6M.setSrc(Y4c);
            hk7d.pK0x("load mp3: {0},loadState: {1}.", Y4c, this.cL6F.loadState)
        }
    };
    b3x.bJy3x = function () {
        if (/#t=(\d+)$/.test(this.dS6M.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b3x.UE1x = function () {
        var bA4E = parseInt(this.cL6F.time) || 0, cab9S = this.bJy3x();
        if (bA4E === cab9S) {
            this.dS6M.load()
        } else {
            this.dS6M.setSrc(this.cL6F.playUrl + "#t=" + bA4E)
        }
        this.cL6F.loadState = LoadState.IN_RELOAD;
        this.zx3x();
        hk7d.pK0x("reload from: {0}", bA4E)
    };
    b3x.bJF3x = function () {
        this.cL6F.loadState = LoadState.IN_RE_GET_URL;
        this.bJH3x()
    };
    b3x.bJx3x = function () {
        var sz1x = getHost(this.cL6F.playUrl);
        if (sz1x) {
            for (var i = 0; i < this.qL0x.length; i++) {
                var ik8c = this.qL0x[i] || [], r4v = ik8c.indexOf(sz1x);
                if (r4v >= 0 && ik8c.length > 1) {
                    return ik8c[(r4v + 1) % ik8c.length]
                }
            }
        }

        function getHost(Y4c) {
            if (CDN_HOST_REG.test(Y4c)) return RegExp.$1
        }
    };
    b3x.bZZ9Q = function () {
        this.cL6F.playUrl = this.cL6F.playUrl.replace(CDN_HOST_REG, this.bJx3x());
        this.cL6F.loadState = LoadState.IN_SWITCH_CDN;
        this.btI9z();
        this.zx3x()
    };
    b3x.cau9l = function () {
        if (this.cL6F.loadState == LoadState.LOAD_START) {
            this.cL6F.loadState = LoadState.LOADED_META;
            if (this.dS6M.type == "audio") {
                this.cL6F.duration = this.dS6M.getDuration()
            }
            this.pC0x("loadedmeta", {duration: this.cL6F.duration})
        } else {
            this.cL6F.loadState = LoadState.LOADED_META
        }
        if (this.cL6F.play) {
            this.dS6M.play()
        } else {
            this.dS6M.pause()
        }
        if (this.cL6F.time && parseInt(this.cL6F.time) != this.bJy3x()) {
            this.dS6M.setCurrentTime(this.cL6F.time)
        }
        this.JQ6K();
        this.Uh1x();
        bJI3x = true;
        hk7d.pK0x("loaded meta")
    };
    b3x.caq9h = function () {
        this.cL6F.ended = true;
        this.pC0x("ended")
    };
    b3x.zx3x = function () {
        if (!this.cL6F.waiting) {
            this.cL6F.waiting = true;
            this.cL6F.waitTimestamp = +(new Date);
            this.pC0x("waiting")
        }
    };
    b3x.Uh1x = function () {
        this.cL6F.waiting = false;
        this.cL6F.waitTimestamp = 0;
        this.pC0x("playing")
    };
    b3x.vu2x = function () {
        this.pC0x("play")
    };
    b3x.btv9m = function () {
        this.pC0x("pause")
    };
    b3x.cal9c = function () {
        if (this.cL6F.loadState != LoadState.LOADED_META) return;
        var bA4E = this.dS6M.getCurrentTime();
        if (this.cL6F.waiting && bA4E > this.cL6F.time) {
            this.Uh1x()
        }
        this.cL6F.time = bA4E;
        this.pC0x("timeupdate", {time: this.cL6F.time, duration: this.cL6F.duration})
    };
    b3x.tF1x = function (d4h) {
        if (this.cL6F.loadState != LoadState.LOADED_META) return;
        var o4s = {};
        if (d4h.data) {
            o4s.total = d4h.data.total;
            o4s.loaded = d4h.data.loaded
        } else {
            var yX3x = this.dS6M.getBuffered(), bA4E = this.dS6M.getCurrentTime(), pg0x = 0;
            for (var i = 0; i < yX3x.length; i++) {
                if (bA4E > yX3x.start(i) && bA4E < yX3x.end(i)) {
                    pg0x = yX3x.end(i);
                    break
                }
            }
            o4s.total = this.cL6F.duration;
            o4s.loaded = Math.min(pg0x, o4s.total)
        }
        this.pC0x("progress", o4s)
    };
    b3x.JQ6K = function () {
        if (this.cL6F.retry) {
            clearTimeout(this.cL6F.retry.tid);
            this.cL6F.retry = null
        }
    };
    b3x.eI6C = function () {
        var cb5g = this.dS6M.getError();
        hk7d.cf5k("media error code: {0}, netState: {1}", cb5g.code, this.dS6M.getNetworkState());
        if (cb5g.code == MediaError.MEDIA_ERR_NETWORK || cb5g.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var EM5R = l4p.brR8J();
            if (!this.cL6F.retry) {
                this.cL6F.retry = {level: RetryLevel.NONE}
            } else {
                window.clearTimeout(this.cL6F.retry.tid)
            }
            if (this.cL6F.retry.level == RetryLevel.NONE) {
                if (this.bJG3x()) {
                    this.cL6F.retry.level = RetryLevel.GET_URL;
                    this.bJF3x();
                    hk7d.pK0x("Url expired, get url.")
                } else {
                    this.cL6F.retry.level = RetryLevel.RELOAD;
                    this.cL6F.retry.tid = setTimeout(this.UE1x.g4k(this), 3e3);
                    hk7d.pK0x("Reload mp3 3s later.")
                }
            } else if (this.cL6F.retry.level == RetryLevel.GET_URL) {
                this.cL6F.retry.level = RetryLevel.RELOAD;
                this.cL6F.retry.tid = setTimeout(this.UE1x.g4k(this), 3e3);
                hk7d.pK0x("Reload mp3 3s later.")
            } else if (this.cL6F.retry.level == RetryLevel.RELOAD) {
                this.cL6F.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bJx3x()) {
                    this.cL6F.retry.tid = setTimeout(this.bZZ9Q.g4k(this), 5e3);
                    hk7d.pK0x("Switch CDN 5s later.")
                } else {
                    this.cL6F.retry.tid = setTimeout(this.UE1x.g4k(this), 5e3);
                    hk7d.pK0x("Reload mp3 5s later.")
                }
            } else if (!bJI3x && this.dS6M.type == "audio" && !EM5R.useFlash && !dv6p.HP6J.mac && l4p.bwp9g().supported) {
                EM5R.useFlash = true;
                l4p.EL5Q(EM5R);
                this.cai9Z("flash")
            } else {
                this.JQ6K();
                this.fC7v();
                this.cL6F.error = ErrorType.NET_ERR;
                this.pC0x("error", {code: this.cL6F.error});
                hk7d.cf5k("error can not retry.")
            }
        } else {
            this.JQ6K();
            this.fC7v();
            this.cL6F.error = ErrorType.UNKNOWN_ERR;
            this.pC0x("error", {code: this.cL6F.error});
            hk7d.cf5k("error can not retry.")
        }
    };
    b3x.btD9u = function () {
        var hN8F = 0, bJw3x = 5e3;
        return function () {
            this.zx3x();
            clearTimeout(hN8F);
            setTimeout(function () {
                var eR6L = +(new Date);
                if (this.cL6F.waiting && eR6L - this.cL6F.waitTimestamp >= bJw3x && this.cL6F.stalledRetryCount < MAX_STALLED_RETRY) {
                    hk7d.pK0x("stalled too long retry.");
                    this.cL6F.stalledRetryCount++;
                    this.UE1x()
                }
            }.g4k(this), bJw3x);
            hk7d.pK0x("stalled")
        }
    }();
    b3x.bJG3x = function () {
        var eR6L = +(new Date);
        return eR6L > this.cL6F.expireTime
    };
    b3x.cak9b = function () {
        var bA4E = parseInt(this.cL6F.time) || 0;
        this.dS6M.setSrc(this.cL6F.playUrl + "#t=" + bA4E);
        this.cL6F.loadState = LoadState.IN_RELOAD;
        this.zx3x();
        hk7d.pK0x("recover from: {0}", bA4E)
    };
    b3x.pC0x = function (U4Y, j4n) {
        h4l.z4D(w4A.fM7F, "playaction", {action: U4Y, data: j4n || {}})
    };
    I4M.fJ7C.A4E({element: w4A.fM7F, event: ["playaction"]})
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c4g = NEJ.P, h4l = c4g("nej.v"), I4M = c4g("nej.ut"), w4A = c4g("nm.w"), b3x;
    w4A.FH5M = NEJ.C();
    b3x = w4A.FH5M.O4S(w4A.fM7F);
    K4O = w4A.FH5M.cs5x;
    b3x.cx5C = function () {
        this.cD6x()
    };
    b3x.bZT9K = function (bN4R) {
        this.ZX3x(bN4R);
        this.ej6d()
    };
    b3x.bug9X = function () {
        this.fC7v()
    };
    b3x.wu2x = function (d4h) {
        if (d4h.action == "play") {
            this.fC7v()
        }
    };
    b3x.pC0x = function (U4Y, j4n) {
        h4l.z4D(w4A.FH5M, "tmpplayaction", {action: U4Y, data: j4n || {}, tmp: true})
    };
    b3x.ty1x = function () {
        return this.cL6F
    };
    I4M.fJ7C.A4E({element: w4A.FH5M, event: ["tmpplayaction"]})
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), fH7A = c4g("nej.n"),
        v4z = c4g("nej.j"), I4M = c4g("nej.ut"), bc4g = c4g("nej.ui"), w4A = c4g("nm.w"), m4q = c4g("nm.l"),
        kM8E = c4g("nm.c"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), b3x, K4O,
        Xy2x = [{item: "m-publish-search-single", type: 1}, {
            item: "m-publish-search-artist",
            type: 100
        }, {item: "m-publish-search-album", type: 10}, {
            item: "m-publish-search-mv",
            type: 1004
        }, {item: "m-publish-search-playlist", type: 1e3}, {item: "m-publish-search-djRadio", type: 1009}];
    var bul9c = {song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5};
    w4A.bun9e = NEJ.C();
    b3x = w4A.bun9e.O4S(bc4g.ei6c);
    b3x.cx5C = function (e4i) {
        this.cD6x(e4i);
        var i4m = a2x.H4L(this.n4r, "j-flag");
        this.cFX8P = i4m.shift();
        this.bZN9E = i4m.shift();
        this.JF6z = i4m.shift();
        this.bus9j = i4m.shift();
        this.buu9l = [i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift()];
        this.XY2x = i4m.shift();
        this.bJr3x = i4m.shift();
        this.rS1x = {list: this.buu9l, selected: "z-curr", onchange: this.bJq3x.g4k(this)};
        h4l.s4w(this.JF6z, "input", this.Ym2x.g4k(this));
        h4l.s4w(this.JF6z, "propertychange", this.Ym2x.g4k(this));
        h4l.s4w(this.JF6z, "keyup", this.Ym2x.g4k(this));
        h4l.s4w(this.bZN9E, "click", this.Ym2x.g4k(this));
        h4l.s4w(this.XY2x, "click", this.cM6G.g4k(this));
        h4l.s4w(this.bJr3x, "click", function () {
            this.z4D("oncancel", {})
        }.g4k(this));
        this.S4W = q4u.EC5H.gr7k();
        this.RM0x = top.nm.w.FH5M.gr7k();
        I4M.fJ7C.A4E({element: top.nm.w.FH5M, event: ["tmpplayaction"]});
        this.se1x = {limit: 100, offset: 0, parent: this.XY2x, onbeforelistload: this.qU0x.g4k(this)};
        q4u.sk = "fuck" + a2x.t4x(this.bus9j, "xname") + "458";
        h4l.s4w(top.nm.w.FH5M, "tmpplayaction", this.wu2x.g4k(this))
    };
    b3x.ce5j = function () {
        this.cd5i = "m-xwgt-publish-search"
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        if (!!this.BL4P) {
            this.BL4P.T4X();
            delete this.BL4P
        }
        this.rS1x.index = bul9c[e4i.type || "song"];
        this.BL4P = I4M.EE5J.A4E(this.rS1x);
        this.JF6z.value = "";
        this.JF6z.focus();
        this.uN2x = "";
        this.cGa8S = 0;
        if (e4i.showMV == true) {
            this.buu9l[bul9c["mv"]].parentNode.style.display = "";
            a2x.y4C(this.bus9j, "srchtab-1")
        } else {
            this.buu9l[bul9c["mv"]].parentNode.style.display = "none";
            a2x.x4B(this.bus9j, "srchtab-1")
        }
        if (!!this.dK6E) {
            this.dK6E = this.dK6E.T4X()
        }
        if (e4i.hideBack) {
            a2x.y4C(this.bJr3x.parentNode, "f-hide")
        }
    };
    b3x.bD4H = function () {
        this.RM0x.bug9X();
        this.bG4K()
    };
    b3x.Ym2x = function () {
        var value = this.JF6z.value.trim();
        if (value && value.length) {
            if (value != this.uN2x) {
                this.uN2x = value;
                this.bJq3x({index: this.BL4P.tD1x()})
            }
        } else {
            if (this.dK6E) {
                this.dK6E = this.dK6E.T4X()
            }
        }
        this.uN2x = value
    };
    b3x.cM6G = function () {
        var bZI9z = function (F4J) {
            return a2x.bE4I(F4J, "sitm") || a2x.bE4I(F4J, "itm") || a2x.bE4I(F4J, "mv-item")
        }, bZF9w = function (F4J) {
            return a2x.bE4I(F4J, "ply")
        }, bJo3x = function () {
            m4q.Z4d.L4P({type: 2, tip: "因合作方要求，该资源需付费使用"})
        }, bZA9r = function () {
            m4q.Z4d.L4P({type: 2, tip: "因合作方要求，该资源需下载后播放"})
        }, buU9L = function (bj4n) {
            if (bj4n && bj4n.privilege && bj4n.privilege.toast) {
                v4z.bn4r("/api/song/toast", {
                    query: {id: bj4n.id},
                    type: "json",
                    onload: Vp1x.g4k(this),
                    onerror: Vp1x.g4k(this)
                })
            } else {
                Vn1x()
            }
        }, Vp1x = function (Q4U) {
            Vn1x((Q4U || bb4f).toast)
        }, Vn1x = function (bH4L) {
            m4q.Z4d.L4P({type: 2, tip: bH4L || "因合作方要求，该资源暂时下架>_<"})
        };
        return function (d4h) {
            var FY5d = h4l.W4a(d4h, bZF9w), i4m = h4l.W4a(d4h, bZI9z), ex6r = this.RM0x.ty1x();
            if (!!i4m) {
                h4l.bh4l(d4h);
                this.RD0x = a2x.t4x(i4m, "id");
                this.RC0x = a2x.t4x(i4m, "type");
                if (this.RC0x == 18) {
                    var bN4R = this.S4W.eH6B(this.RD0x), rd0x = l4p.pB0x(bN4R);
                    if (!FY5d) {
                        if (rd0x == 10) {
                            bJo3x();
                            return
                        } else if (rd0x == 100) {
                            buU9L(bN4R);
                            return
                        }
                    } else {
                        if (rd0x == 10) {
                            bJo3x();
                            return
                        } else if (rd0x == 100) {
                            buU9L(bN4R);
                            return
                        } else if (rd0x == 11) {
                            bZA9r();
                            return
                        } else {
                            a2x.x4B(this.BR4V, "z-pause z-loading");
                            if (FY5d == this.BR4V && ex6r.play && !ex6r.ended) {
                                this.RM0x.bug9X()
                            } else {
                                this.BR4V = FY5d;
                                this.RM0x.bZT9K(bN4R)
                            }
                            return
                        }
                    }
                } else if (this.RC0x == 70) {
                    if (a2x.bE4I(i4m, "z-noprogram")) {
                        m4q.Z4d.L4P({type: 2, tip: "不能分享没有节目的电台"});
                        return
                    }
                }
                this.bZw9n()
            }
        }
    }();
    b3x.bZw9n = function () {
        var hW8O = this.S4W.eH6B(this.RD0x), tm1x = l4p.bNV4Z(this.RC0x, hW8O);
        tm1x.title = tm1x.title || "";
        tm1x.author = tm1x.author || "";
        tm1x.picUrl = tm1x.picUrl || "";
        tm1x.authors = tm1x.authors || "";
        if (this.RC0x == 70) {
            this.RD0x = this.RD0x.slice(0, -4)
        }
        this.z4D("onfinish", {id: this.RD0x, type: this.RC0x, data: tm1x})
    };
    b3x.wu2x = function (d4h) {
        var j4n = d4h.data;
        if (!this.BR4V) {
            return
        }
        switch (d4h.action) {
            case"play":
                a2x.fb6V(this.BR4V, "z-pause z-play", "z-loading");
                break;
            case"pause":
            case"ended":
                a2x.x4B(this.BR4V, "z-pause z-loading");
                break;
            case"error":
                m4q.Z4d.L4P({type: 2, tip: "试听遇到问题，播放失败"});
                a2x.x4B(this.BR4V, "z-pause z-loading");
                break;
            case"playing":
                a2x.fb6V(this.BR4V, "z-loading", "z-pause");
                break;
            case"waiting":
                a2x.fb6V(this.BR4V, "z-pause", "z-loading");
                break
        }
    };
    b3x.bZv9m = function (d4h) {
        if (d4h.result.code == 407) {
            this.XY2x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.XY2x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b3x.bJq3x = function (d4h) {
        if (!this.uN2x || d4h.index < 0 || d4h.index > 5) {
            return
        }
        this.RM0x.bug9X();
        var bg4k = Xy2x[d4h.index], e4i = NEJ.X({}, this.se1x);
        e4i.cache = {klass: q4u.EC5H, clear: true, onerror: this.bZv9m.g4k(this)};
        e4i.cache.lkey = "search-publish-" + bg4k.type + "-" + this.uN2x;
        e4i.item = {klass: bg4k.item, getRestrictLevel: l4p.pB0x, dur2time: l4p.lg9X};
        if (!e4i.cache.data) {
            e4i.cache.data = {}
        }
        e4i.cache.data.s = this.uN2x;
        e4i.cache.data.type = bg4k.type;
        e4i.cache.data.isPub = true;
        if (bg4k.type == 1) {
            e4i.cache.data.hlpretag = '<span class="s-fc7">';
            e4i.cache.data.hlposttag = "</span>"
        }
        e4i.onemptylist = this.bZu9l.g4k(this, this.uN2x);
        if (!!this.Gg5l) this.S4W.ut1x(this.Gg5l);
        if (!!this.dK6E) {
            this.dK6E = this.dK6E.T4X()
        }
        this.dK6E = I4M.mU9L.A4E(e4i);
        this.Gg5l = e4i.cache.lkey
    };
    b3x.qU0x = function (d4h) {
        d4h.value = a2x.iI8A("m-publish-search-loading")
    };
    b3x.bZu9l = function (J4N, d4h) {
        a2x.dI6C(d4h.parent, "m-publish-emtpy-message", {key: J4N});
        d4h.stopped = true
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), dv6p = c4g("nej.p"), v4z = c4g("nej.j"),
        ca5f = c4g("nej.ut"), bC4G = c4g("nej.ui"), w4A = c4g("nm.w"), b3x, K4O;
    var bZs9j = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    w4A.Gi5n = NEJ.C();
    b3x = w4A.Gi5n.O4S(bC4G.ei6c);
    var gi7b = a2x.es6m("m-wgt-receiverInput");
    var bZr9i = a2x.es6m("m-wgt-receiverList");
    var iZ8R = a2x.tO1x(bZs9j);
    var bZn8f = a2x.es6m('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b3x.cx5C = function (e4i) {
        this.bk4o = [];
        this.wz2x = e4i.receiver || null;
        this.bZl8d = e4i.unique || false;
        this.nt9k = e4i.err;
        this.bJg3x(this.bJf3x, e4i.uid);
        this.cD6x(e4i)
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.Rf0x();
        this.Rd0x();
        this.ZI3x();
        if (e4i.receiver) this.bvN9E(e4i.receiver.nickname, e4i.receiver.userId);
        a2x.ba4e(this.Bo4s, "display", "block");
        a2x.ba4e(this.bvT9K, "cursor", "text");
        a2x.ba4e(this.Bo4s, "cursor", "text")
    };
    b3x.ce5j = function () {
        var j4n = this.bJe3x();
        this.cd5i = a2x.iu8m(a2x.bZ5e(gi7b, {receiver: this.wz2x, users: j4n}));
        this.mb9S = iZ8R
    };
    b3x.bW5b = function () {
        this.cg5l();
        var bQ4U = a2x.H4L(this.n4r, "j-flag");
        var ho7h = a2x.H4L(this.n4r, "j-item");
        this.bvT9K = bQ4U[0];
        this.bJd3x = bQ4U[1];
        this.ee6Y = bQ4U[2];
        this.Bo4s = bQ4U[3];
        this.Vq1x = bQ4U[4];
        this.bwd9U = bQ4U[5];
        this.fL7E = ho7h;
        a2x.y4C(this.fL7E[0], "j-selected");
        h4l.s4w(this.ee6Y, "keyup", this.bwf9W.g4k(this));
        h4l.s4w(this.ee6Y, "keydown", this.QD0x.g4k(this));
        h4l.s4w(this.ee6Y, "focus", this.lb9S.g4k(this));
        h4l.s4w(this.Vq1x, "click", this.bZa8S.g4k(this));
        h4l.s4w(this.bvT9K, "click", this.bYZ8R.g4k(this));
        h4l.s4w(document.body, "click", this.ot0x.g4k(this));
        h4l.s4w(this.ee6Y, "input", this.fN7G.g4k(this));
        h4l.s4w(this.ee6Y, "blur", this.oa9R.g4k(this))
    };
    b3x.bD4H = function (e4i) {
        h4l.mw9n(document.body, "click", this.ot0x.g4k(this));
        this.bG4K();
        this.ZI3x();
        this.bYX8P();
        this.ot0x()
    };
    b3x.bwf9W = function (d4h) {
        h4l.bh4l(d4h);
        var jN8F = d4h.keyCode || d4h.which;
        var bo4s = this.ee6Y.value;
        var bq4u = this.fL7E.length;
        var ro0x = a2x.H4L(this.n4r, "j-selected")[0];
        switch (jN8F) {
            case 13:
                var lf9W = a2x.gh7a(ro0x, "data-username");
                var ij8b = a2x.gh7a(ro0x, "data-userId");
                this.bvN9E(lf9W, ij8b);
                this.ot0x();
                this.ee6Y.value = "";
                break;
            case 38:
                var r4v = a2x.gh7a(ro0x, "data-index") - 1 < 0 ? bq4u - 1 : a2x.gh7a(ro0x, "data-index") - 1;
                a2x.x4B(ro0x, "j-selected");
                a2x.y4C(this.fL7E[r4v], "j-selected");
                break;
            case 40:
                var r4v = parseInt(a2x.gh7a(ro0x, "data-index")) + 1 >= bq4u ? 0 : parseInt(a2x.gh7a(ro0x, "data-index")) + 1;
                a2x.x4B(ro0x, "j-selected");
                a2x.y4C(this.fL7E[r4v], "j-selected");
                break;
            default:
                this.wZ2x()
        }
    };
    b3x.QD0x = function (d4h) {
        var jN8F = d4h.keyCode || d4h.which;
        var bo4s = this.ee6Y.value;
        var r4v = a2x.H4L(this.n4r, "j-receiver").length - 1;
        if (jN8F === 8 && bo4s === "") this.bYW8O(r4v)
    };
    b3x.fN7G = function (d4h) {
        var bo4s = this.ee6Y.value;
        if (bo4s.length > 10) {
            this.ee6Y.value = bo4s.substring(0, 10);
            return
        }
        dv6p.ds6m.browser == "ie" && dv6p.ds6m.version < "7.0" ? setTimeout(this.bwI9z.g4k(this), 0) : this.bwI9z();
        this.Rd0x()
    };
    b3x.lb9S = function () {
        if (this.bk4o[0]) this.wZ2x(); else this.bJg3x(this.bYN8F);
        a2x.ba4e(this.Bo4s, "display", "none")
    };
    b3x.oa9R = function () {
        var bq4u = a2x.H4L(this.n4r, "j-receiver").length;
        if (this.ee6Y.value.trim() == "" && bq4u <= 0) a2x.ba4e(this.Bo4s, "display", "block")
    };
    b3x.bvN9E = function (lf9W, ij8b) {
        var IT6N = this.Qt9k();
        if (IT6N.length >= 10) {
            this.dP6J();
            return
        }
        var bc4g;
        for (bc4g = 0; bc4g < IT6N.length; bc4g++) {
            if (IT6N[bc4g] == ij8b) {
                this.ot0x();
                return
            }
        }
        if (!lf9W || !ij8b) return;
        var f4j = a2x.dy6s(a2x.iu8m(a2x.bZ5e(bZn8f, {username: lf9W, userId: ij8b})));
        var bI4M = this.bJd3x.parentNode;
        if (this.bZl8d) {
            this.ZI3x()
        }
        bI4M.insertBefore(f4j, this.bJd3x);
        this.ee6Y.value = "";
        var bq4u = a2x.H4L(this.n4r, "j-receiver").length;
        if (bq4u > 1) a2x.ba4e(this.Bo4s, "display", "none");
        this.bwI9z();
        this.Rd0x()
    };
    b3x.ZI3x = function () {
        var Qn9e = a2x.H4L(this.n4r, "j-receiver");
        var bc4g;
        if (Qn9e.length > 0) {
            for (bc4g = 0; bc4g < Qn9e.length; bc4g++) {
                a2x.cJ6D(Qn9e[bc4g], false)
            }
        }
    };
    b3x.bYX8P = function () {
        this.ee6Y.value = ""
    };
    b3x.bYW8O = function (r4v) {
        this.dP6J(!0);
        var Qn9e = a2x.H4L(this.n4r, "j-receiver");
        a2x.cJ6D(Qn9e[r4v], false);
        this.Rd0x()
    };
    b3x.wZ2x = function () {
        var bo4s = this.ee6Y.value;
        var bv4z = bo4s.trim().toLowerCase();
        var j4n;
        bv4z = bv4z.replace(/\[/g, "\\[");
        bv4z = bv4z.replace(/\]/g, "\\]");
        j4n = this.bJe3x(bv4z);
        this.bYM8E(j4n)
    };
    b3x.ot0x = function (d4h) {
        a2x.ba4e(this.Vq1x, "display", "none")
    };
    b3x.dP6J = function (fr7k) {
        if (fr7k && this.nt9k) {
            a2x.ba4e(this.nt9k, "display", "none");
            return
        }
        if (this.nt9k) a2x.ba4e(this.nt9k, "display", "block")
    };
    b3x.bZa8S = function (d4h) {
        h4l.cp5u(d4h);
        var bO4S = d4h.target || d4h.srcElement;
        if (a2x.bE4I(bO4S, "j-flag")) return;
        var bI4M = bO4S.nodeName.toLowerCase() == "a" ? bO4S.parentNode : bO4S.parentNode.parentNode;
        var lf9W = a2x.gh7a(bI4M, "data-username");
        var ij8b = a2x.gh7a(bI4M, "data-userId");
        this.bvN9E(lf9W, ij8b);
        this.ot0x();
        a2x.ba4e(this.Bo4s, "display", "none")
    };
    b3x.bYZ8R = function (d4h) {
        h4l.bh4l(d4h);
        var bO4S = d4h.target || d4h.srcElement;
        if (a2x.bE4I(bO4S.parentNode, "j-receiver")) {
            a2x.cJ6D(bO4S.parentNode, false);
            this.dP6J(!0);
            this.Rd0x()
        } else this.ee6Y.focus()
    };
    b3x.bwI9z = function () {
        this.bwd9U.innerHTML = this.ee6Y.value;
        var cA5F = this.bwd9U.offsetWidth + 2;
        a2x.ba4e(this.ee6Y, "width", cA5F + "px")
    };
    b3x.Rd0x = function () {
        var baw3x = a2x.hO8G(this.ee6Y, this.n4r).y;
        var bIX3x = Math.floor((baw3x - 8) / 27);
        if (bIX3x < 0) return;
        a2x.ba4e(this.bvT9K, "height", 19 + bIX3x * 29 + "px")
    };
    b3x.Rf0x = function () {
        var qc0x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < qc0x.length; i++) {
            a2x.ba4e(this.bwd9U, qc0x[i], a2x.df6Z(this.ee6Y, qc0x[i]))
        }
    };
    b3x.bJg3x = function (cK6E, C4G) {
        var dn6h = C4G ? C4G : window.GUser.userId;
        var Y4c = "/api/user/getfollows/" + dn6h;
        var gm7f = v4z.bn4r(Y4c, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cK6E.g4k(this),
            onerror: function (j4n) {
                this.bk4o = []
            },
            onbeforerequest: function (j4n) {
            }
        })
    };
    b3x.bJf3x = function (j4n) {
        this.bk4o = JSON.parse(j4n).follow || [];
        var C4G = GUser.userId;
        for (var i = 0; i < this.bk4o.length; i++) {
            if (this.bk4o[i].userId == C4G) {
                this.bk4o.splice(i, 1);
                continue
            }
            this.bk4o[i].avatarUrl = this.bk4o[i].avatarUrl + "?param=30y30"
        }
    };
    b3x.bYN8F = function (j4n) {
        if (this.bk4o[0]) return;
        this.bJf3x(j4n);
        this.wZ2x()
    };
    b3x.bJe3x = function (bv4z) {
        var bv4z = bv4z ? bv4z : "";
        this.bk4o = this.bk4o[0] ? this.bk4o : [];
        var bq4u = this.bk4o.length;
        var Qc9T = this.Qt9k();
        var sH1x = [];
        var PO9F, Px9o, beS5X;
        if (!this.bk4o[0]) return sH1x;
        for (var bc4g = 0; bc4g < bq4u; bc4g++) {
            beS5X = false;
            for (var v4z = 0; v4z < Qc9T.length; v4z++) {
                if (this.bk4o[bc4g].userId == Qc9T[v4z]) {
                    beS5X = true;
                    break
                }
            }
            if (beS5X) continue;
            PO9F = this.bk4o[bc4g].nickname.toLowerCase().search(bv4z);
            Px9o = this.bk4o[bc4g].py ? this.bk4o[bc4g].py.toLowerCase().search(bv4z) : -1;
            if (PO9F !== -1 || Px9o != -1) sH1x.push(this.bk4o[bc4g])
        }
        return sH1x
    };
    b3x.bYM8E = function (j4n) {
        a2x.dI6C(this.Vq1x, bZr9i, {users: j4n});
        a2x.y4C(a2x.H4L(this.n4r, "j-item")[0], "j-selected");
        this.fL7E = a2x.H4L(this.n4r, "j-item");
        a2x.ba4e(this.Vq1x, "display", "block")
    };
    b3x.Qt9k = function () {
        var sH1x = a2x.H4L(this.n4r, "j-receiver") || [];
        var ij8b = [];
        for (var i = 0; i < sH1x.length; i++) {
            ij8b.push(a2x.gh7a(sH1x[i], "data-id"))
        }
        return ij8b
    };
    b3x.cGd8V = function () {
        var ij8b = this.Qt9k();
        var sH1x = [];
        for (var i = 0; i < ij8b.length; i++) {
            for (var j = 0; j < this.bk4o.length; j++) {
                if (ij8b[i] == this.bk4o[j].userId) sH1x.push(this.bk4o[j])
            }
        }
        return sH1x
    };
    b3x.bYz8r = function () {
        this.ZI3x()
    };
    w4A.Gi5n.L4P = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            m4q.pi0x.L4P({title: "登录"});
            return
        }
        e4i = e4i || {};
        if (e4i.parent === undefined) e4i.parent = document.body;
        !!this.ff7Y && this.ff7Y.T4X();
        this.ff7Y = this.A4E(e4i)
    };
    w4A.Gi5n.bu4y = function () {
        !!this.ff7Y && this.ff7Y.T4X()
    };
    w4A.Gi5n.GU6O = function () {
        return this.ot0x()
    };
    w4A.Gi5n.cGe8W = function () {
        return this.wZ2x()
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), l4p = c4g("nm.x"), m4q = c4g("nm.l"),
        b3x, K4O;
    m4q.IC6w = NEJ.C();
    b3x = m4q.IC6w.O4S(m4q.blX7Q);
    K4O = m4q.IC6w.cs5x;
    b3x.bl4p = function () {
        var GX6R;
        var bYr8j = function (D4H, J4N) {
            GX6R = GX6R || [];
            if (J4N != "18") GX6R.push({key: J4N, value: D4H})
        };
        return function (e4i) {
            this.bm4q(e4i);
            if (e4i.upwards) {
                a2x.y4C(this.n4r, "m-emts-up")
            } else {
                a2x.x4B(this.n4r, "m-emts-up")
            }
            if (e4i.rightwards) {
                a2x.y4C(this.n4r, "m-emts-right")
            } else {
                a2x.x4B(this.n4r, "m-emts-right")
            }
            if (!GX6R) {
                var bz4D = l4p.cnf3x();
                k4o.eC6w(bz4D, bYr8j)
            }
            var bq4u = GX6R.length;
            GX6R.splice(bq4u - 2, 0, {key: "18", value: "186"});
            this.bbW4a = GX6R;
            this.bYp8h = !!e4i.autoHide
        }
    }();
    b3x.ce5j = function () {
        this.cd5i = "ntp-portrait"
    };
    b3x.bW5b = function () {
        this.cg5l();
        var i4m = a2x.H4L(this.n4r, "j-flag");
        this.bK4O = i4m[0];
        this.bYi8a = i4m[1];
        this.bYh8Z = i4m[2];
        this.bYg8Y = i4m[3];
        h4l.s4w(this.bK4O, "click", this.xO3x.g4k(this));
        h4l.s4w(this.bYi8a, "click", this.Hd6X.g4k(this, 1));
        h4l.s4w(this.bYg8Y, "click", this.Hd6X.g4k(this, 2))
    };
    b3x.bfs5x = function (r4v) {
        this.bcf4j = r4v;
        var bi4m = (r4v - 1) * 50;
        var i4m = this.bbW4a.slice(bi4m, Math.min(bi4m + 50, this.bbW4a.length));
        this.bK4O.innerHTML = a2x.bZ5e("jst-portrait", {plist: i4m}, {purl: l4p.bOK4O});
        this.bYh8Z.innerText = r4v + "/" + Math.ceil(this.bbW4a.length / 50)
    };
    b3x.Hd6X = function (r4v) {
        var bYe8W = Math.ceil(this.bbW4a.length / 50);
        if (r4v == 1 && this.bcf4j == 1 || r4v == 2 && this.bcf4j == bYe8W) return;
        r4v == 1 ? this.bfs5x(this.bcf4j - 1) : this.bfs5x(this.bcf4j + 1)
    };
    b3x.xO3x = function (d4h) {
        var F4J = h4l.W4a(d4h, "d:text");
        if (!F4J) return;
        var d4h = {url: a2x.t4x(F4J, "url"), text: a2x.t4x(F4J, "text")};
        this.z4D("onselect", d4h);
        if (this.bYp8h && !d4h.stopped) {
            this.bu4y()
        }
    };
    b3x.L4P = function () {
        K4O.L4P.call(this);
        this.bfs5x(1)
    }
})();
(function () {
    var c4g = NEJ.P, h4l = c4g("nej.v"), k4o = c4g("nej.u"), dv6p = c4g("nej.p"), be4i = c4g("nej.h"),
        I4M = c4g("nej.ut"), ku8m = /^[#?]+/, HA6u = /#(.*?)$/, xN3x = window,
        bfw5B = !history.pushState || dv6p.HP6J.android || !history.auto;
    var bcu4y = function (Y4c, bfz5E) {
        xN3x.history[!bfz5E ? "pushState" : "replaceState"](null, document.title, Y4c)
    };
    var bcB4F = function () {
        return location.parse(xN3x.location.href)
    };
    bcu4y = bcu4y.eB6v(function (d4h) {
        if (!bfw5B) return;
        var bf4j = d4h.args;
        d4h.stopped = !0;
        Y4c = bf4j[0].replace(ku8m, "");
        !bf4j[1] ? xN3x.location.hash = Y4c : xN3x.location.replace("#" + Y4c)
    });
    bcB4F = bcB4F.eB6v(function (d4h) {
        if (!bfw5B) return;
        d4h.stopped = !0;
        var dO6I = HA6u.test(xN3x.location.href) ? RegExp.$1 : "";
        d4h.value = location.parse(dO6I.replace(ku8m, ""))
    });
    location.redirect = function (Y4c, bfz5E) {
        bcu4y(Y4c, bfz5E);
        return this
    };
    location.active = function () {
        var eg6a, Y4c, jA8s, cX6R, RU0x;
        var bfC5H = function (hn7g) {
            if (!!cX6R) {
                cX6R = !1;
                return
            }
            var d4h = {oldValue: jA8s, newValue: bcB4F()};
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h4l.z4D(location, "beforeurlchange", d4h);
                if (d4h.stopped) {
                    if (!!jA8s) {
                        cX6R = !0;
                        bcu4y(jA8s.href, !0)
                    }
                    return
                }
            }
            Y4c = xN3x.location.href;
            jA8s = d4h.newValue;
            h4l.z4D(location, "urlchange", jA8s);
            be4i.bgw5B(jA8s.href)
        };
        var bIF2x = function () {
            if (Y4c != xN3x.location.href) bfC5H();
            eg6a = requestAnimationFrame(bIF2x)
        };
        return function (bJ4N) {
            if (!!RU0x) return this;
            RU0x = !0;
            xN3x = bJ4N || window;
            if (bfw5B && "onhashchange" in window && dv6p.nj9a.trident2) {
                h4l.s4w(xN3x, "hashchange", bfC5H);
                bfC5H()
            } else if (!eg6a) {
                eg6a = requestAnimationFrame(bIF2x)
            }
            return this
        }
    }();
    location.parse = function () {
        var gK7D = /^https?:\/\/.*?\//i, ku8m = /[?#]/;
        return function (Y4c) {
            var o4s = {href: Y4c};
            Y4c = (Y4c || "").replace(gK7D, "/").split(ku8m);
            var cF6z = 1;
            if (Y4c[0] == "/" && (Y4c[1] || "").indexOf("/") == 0) cF6z = 2;
            o4s.path = Y4c.splice(0, cF6z).join("?");
            o4s.query = k4o.hv7o(Y4c.join("&"));
            return o4s
        }
    }();
    location.same = function (Y4c) {
        return bcB4F().href == Y4c
    };
    I4M.fJ7C.A4E({element: location, event: ["beforeurlchange", "urlchange"]})
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), go7h = c4g("nm.ut");
    go7h.vw2x = function (ep6j) {
        var he7X = {text: "", start: 0, end: 0};
        if (ep6j.setSelectionRange) {
            he7X.start = ep6j.selectionStart;
            he7X.end = ep6j.selectionEnd;
            he7X.text = he7X.start != he7X.end ? ep6j.value.substring(he7X.start, he7X.end) : ""
        } else if (document.selection) {
            var i, bcM4Q = document.selection.createRange(), xA2x = document.body.createTextRange();
            xA2x.moveToElementText(ep6j);
            he7X.text = bcM4Q.text;
            he7X.bookmark = bcM4Q.getBookmark();
            for (i = 0; xA2x.compareEndPoints("StartToStart", bcM4Q) < 0 && bcM4Q.moveStart("character", -1) !== 0; i++) {
                if (ep6j.value.charAt(i) == "\n") {
                    i++
                }
            }
            he7X.start = i;
            he7X.end = he7X.text.length + he7X.start
        }
        return he7X
    };
    go7h.bcR4V = function (ep6j, he7X) {
        var xA2x;
        if (!he7X) {
            he7X = {text: "", start: 0, end: 0}
        }
        ep6j.focus();
        if (ep6j.setSelectionRange) {
            ep6j.setSelectionRange(he7X.start, he7X.end)
        } else if (ep6j.createTextRange) {
            xA2x = ep6j.createTextRange();
            if (ep6j.value.length === he7X.start) {
                xA2x.collapse(false);
                xA2x.select()
            } else {
                xA2x.moveToBookmark(he7X.bookmark);
                xA2x.select()
            }
        }
    };
    go7h.HY6S = function (ep6j, he7X, cG6A) {
        var he7X = he7X || {text: "", start: 0, end: 0};
        var bfL5Q, bIE2x, xA2x, Nm7f, bID2x, bIC2x, Hu6o;
        this.bcR4V(ep6j, he7X);
        if (ep6j.setSelectionRange) {
            bfL5Q = ep6j.value;
            bIE2x = bfL5Q.substring(0, he7X.start) + cG6A + bfL5Q.substring(he7X.end);
            bID2x = bIC2x = he7X.start + cG6A.length;
            Hu6o = ep6j.scrollTop;
            ep6j.value = bIE2x;
            if (ep6j.scrollTop != Hu6o) {
                ep6j.scrollTop = Hu6o
            }
            ep6j.setSelectionRange(bID2x, bIC2x)
        } else if (ep6j.createTextRange) {
            Nm7f = document.selection.createRange();
            Nm7f.text = cG6A;
            Nm7f.setEndPoint("StartToEnd", Nm7f);
            Nm7f.select()
        }
        h4l.z4D(ep6j, "keyup")
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), dv6p = c4g("nej.p"), k4o = c4g("nej.u"),
        ca5f = c4g("nej.ut"), w4A = c4g("nm.w"), go7h = c4g("nm.ut"), b3x;
    w4A.bIB2x = NEJ.C();
    b3x = w4A.bIB2x.O4S(ca5f.cH6B);
    b3x.cx5C = function (e4i) {
        this.cD6x(e4i)
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.gp7i = e4i.txt;
        this.Hx6r = e4i.sgtsContainer;
        this.bIy2x = e4i.sgtsList[0];
        this.bep5u = e4i.sgtsItem;
        this.oE0x = e4i.rangeData;
        this.HQ6K = e4i.atIndex;
        a2x.y4C(this.bep5u[0], "selected-item");
        this.MO7H()
    };
    b3x.bD4H = function () {
        this.bG4K();
        h4l.mw9n(document.body, "keyup", this.bIx2x.g4k(this));
        h4l.mw9n(document.body, "click", this.bIw2x.g4k(this))
    };
    b3x.MO7H = function () {
        this.bX5c([[document.body, "keyup", this.bIx2x.g4k(this)], [document.body, "click", this.bIw2x.g4k(this)], [this.gp7i, "keydown", this.bIu2x.g4k(this)], [this.gp7i, "keypress", this.bIu2x.g4k(this)], [this.bIy2x, "click", this.bIt2x.g4k(this)], [this.bIy2x, "mouseover", this.HF6z.g4k(this)]])
    };
    b3x.HF6z = function (d4h) {
        var bO4S = h4l.W4a(d4h);
        var p4t = a2x.H4L(this.Hx6r, "selected-item");
        if (a2x.bE4I(bO4S, "j-sgt")) {
            a2x.x4B(p4t[0], "selected-item");
            a2x.y4C(bO4S, "selected-item")
        }
    };
    b3x.bIx2x = function (d4h) {
        var p4t = a2x.H4L(this.Hx6r, "selected-item");
        var bq4u = this.bep5u.length;
        var jN8F = d4h.keyCode || d4h.which;
        var r4v, j4n;
        switch (jN8F) {
            case 38:
                r4v = a2x.gh7a(p4t[0], "data-index") - 1 < 0 ? bq4u - 1 : a2x.gh7a(p4t[0], "data-index") - 1;
                a2x.x4B(p4t[0], "selected-item");
                a2x.y4C(this.bep5u[r4v], "selected-item");
                break;
            case 40:
                r4v = parseInt(a2x.gh7a(p4t[0], "data-index")) + 1 >= bq4u ? 0 : parseInt(a2x.gh7a(p4t[0], "data-index")) + 1;
                a2x.x4B(p4t[0], "selected-item");
                a2x.y4C(this.bep5u[r4v], "selected-item");
                break;
            case 13:
                this.bIt2x(d4h);
                break;
            case 27:
                this.ot0x();
                break;
            case 32:
                var bo4s = this.gp7i.value;
                var r4v = go7h.vw2x(this.gp7i);
                if (bo4s.charAt(r4v.start - 1) !== " ") return;
                this.ot0x();
                break
        }
    };
    b3x.bIu2x = function (d4h) {
        var jN8F = d4h.keyCode || d4h.which;
        if (jN8F === 13 || jN8F === 38 || jN8F === 40) {
            h4l.cp5u(d4h);
            d4h.keyCode = 0;
            d4h.which = 0;
            d4h.returnvalue = false
        }
    };
    b3x.bIw2x = function (d4h) {
        var bO4S = d4h.target || d4h.srcElement;
        if (bO4S === this.gp7i) return;
        this.ot0x()
    };
    b3x.bIt2x = function (d4h) {
        h4l.bh4l(d4h);
        var p4t = a2x.H4L(this.Hx6r, "selected-item")[0];
        var ro0x = d4h.target || d4h.srcElement;
        var u4y = d4h.type;
        if (a2x.bE4I(ro0x, "lst")) return;
        if (u4y == "click") {
            a2x.x4B(p4t, "selected-item");
            a2x.y4C(ro0x, "selected-item")
        } else ro0x = p4t;
        var j4n = ro0x.innerHTML + " ";
        this.ot0x();
        var he7X = this.oE0x;
        he7X.start = this.HQ6K + 1;
        if (dv6p.ds6m.browser == "ie" && dv6p.ds6m.version < "9.0") {
            this.gp7i.value = this.gp7i.value.substring(0, he7X.start) + this.gp7i.value.substring(he7X.end, this.gp7i.value.length);
            he7X.end = he7X.start
        }
        go7h.HY6S(this.gp7i, he7X, j4n);
        h4l.z4D(this.gp7i, "keyup")
    };
    b3x.ot0x = function (d4h) {
        if (!!this.Hx6r) a2x.ba4e(this.Hx6r, "display", "none");
        this.T4X()
    };
    b3x.wZ2x = function (d4h) {
        if (!!this.Hx6r) a2x.ba4e(this.Hx6r, "display", "block")
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), v4z = c4g("nej.j"), w4A = c4g("nm.w"),
        ca5f = c4g("nej.ut"), bC4G = c4g("nej.ui"), b3x;
    var bXB8t = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var bXA8s = a2x.es6m("m-wgt-atlist");
    var iZ8R = a2x.tO1x(bXB8t);
    w4A.bIq2x = NEJ.C();
    b3x = w4A.bIq2x.O4S(bC4G.ei6c);
    b3x.cx5C = function (e4i) {
        this.fP7I = {};
        this.cD6x()
    };
    b3x.bl4p = function (e4i) {
        this.fP7I.txt = a2x.B4F(e4i.target);
        this.fP7I.data = e4i.data;
        this.fP7I.offset = e4i.offset;
        this.fP7I.rangeData = e4i.rangeData;
        this.fP7I.atIndex = e4i.atIndex;
        this.bXv8n(e4i);
        this.bm4q(e4i);
        this.fP7I.sgtsContainer = this.n4r;
        this.fP7I.sgtsList = a2x.H4L(this.n4r, "lst");
        this.fP7I.sgtsItem = a2x.H4L(this.n4r, "f-thide");
        this.JM6G(e4i);
        this.bXr8j = w4A.bIB2x.A4E(this.fP7I)
    };
    b3x.bD4H = function (e4i) {
        this.bG4K();
        this.bXr8j.T4X()
    };
    b3x.ce5j = function () {
        this.mb9S = iZ8R
    };
    b3x.bW5b = function () {
        this.cg5l()
    };
    b3x.bXv8n = function (e4i) {
        this.n4r = a2x.dy6s(a2x.iu8m(a2x.bZ5e(bXA8s, e4i.data)))
    };
    b3x.JM6G = function (e4i) {
        var bIi2x = a2x.H4L(this.n4r, "selected-item")[0];
        if (bIi2x) a2x.x4B(bIi2x, "selected-item");
        var cY6S = e4i.offset.x + "px";
        var hB7u = e4i.offset.y + "px";
        a2x.ba4e(this.n4r, "left", cY6S);
        a2x.ba4e(this.n4r, "top", hB7u)
    }
})();
(function () {
    var c4g = NEJ.P, v4z = c4g("nej.j"), go7h = c4g("nm.ut");
    go7h.bIh2x = function (bo4s) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var dh6b = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var LJ7C = bo4s.match(dh6b) || [];
        for (var bc4g = 0; bc4g < LJ7C.length; bc4g++) {
            LJ7C[bc4g] = LJ7C[bc4g].split("@")[1]
        }
        LJ7C = LJ7C.reverse();
        var ij8b = GUser.userId;
        var bXf8X = v4z.sw1x("mentioners" + ij8b) || [];
        var jV8N = LJ7C.concat(bXf8X);
        if (jV8N.length > 10) jV8N = jV8N.slice(0, 10);
        v4z.uW2x("mentioners" + ij8b, jV8N)
    };
    go7h.bXe8W = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var ij8b = GUser.userId;
        return v4z.sw1x("mentioners" + ij8b) || []
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), dv6p = c4g("nej.p"), v4z = c4g("nej.j"),
        k4o = c4g("nej.u"), ca5f = c4g("nej.ut"), w4A = c4g("nm.w"), go7h = c4g("nm.ut"), l4p = c4g("nm.x"), b3x;
    var FullscreenApi = l4p.EA5F || {};
    w4A.bIg2x = NEJ.C();
    b3x = w4A.bIg2x.O4S(ca5f.cH6B);
    b3x.cx5C = function (e4i) {
        this.cD6x(e4i);
        this.bIf2x()
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.gp7i = e4i.txt;
        this.n4r = e4i.body;
        this.bId2x = e4i.before;
        this.NN9E = e4i.flag;
        this.bWX8P = e4i.after;
        this.ra0x = [];
        if (dv6p.ds6m.browser != "ie") {
            setTimeout(function () {
                this.mh9Y()
            }.g4k(this), 0)
        }
        this.MO7H()
    };
    b3x.bD4H = function () {
        this.bG4K();
        if (this.ux2x) this.ux2x.T4X();
        delete this.ux2x
    };
    b3x.MO7H = function () {
        this.bX5c([[this.gp7i, "keyup", this.bIb2x.g4k(this, this.gp7i)], [this.gp7i, "click", this.bIb2x.g4k(this, this.gp7i)], [this.gp7i, "focus", this.mh9Y.g4k(this)]])
    };
    b3x.mh9Y = function (d4h) {
        this.oE0x = go7h.vw2x(this.gp7i)
    };
    b3x.bIf2x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var dn6h = window.GUser.userId;
        var Y4c = "/api/user/getfollows/" + dn6h;
        var gm7f = v4z.bn4r(Y4c, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (j4n) {
                window.GFollowers = JSON.parse(j4n).follow
            }.g4k(this),
            onerror: function (j4n) {
            },
            onbeforerequest: function (j4n) {
            }
        })
    };
    b3x.bHV2x = function (index) {
        var D4H = this.gp7i.value, bi4m, bgG5L, bgH5M, Nl7e;
        this.bId2x.innerHTML = k4o.dG6A(D4H.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var mz9q = a2x.H4L(this.bId2x, "j-test");
        for (var bc4g = 0; bc4g < mz9q.length; bc4g++) {
            mz9q[bc4g].innerText = " "
        }
        this.NN9E.innerHTML = D4H.charAt(index);
        this.bWX8P.innerHTML = k4o.dG6A(D4H.substr(index + 1, D4H.length));
        Nl7e = parseInt(a2x.df6Z(this.gp7i, "lineHeight"));
        a2x.ba4e(this.n4r, "display", "block");
        bgG5L = a2x.hO8G(this.NN9E, this.n4r);
        bgH5M = a2x.hO8G(this.gp7i);
        a2x.ba4e(this.n4r, "display", "none");
        var cY6S = bgG5L.x + bgH5M.x;
        var hB7u = bgG5L.y + bgH5M.y + Nl7e;
        bi4m = {x: cY6S, y: hB7u};
        this.bWL8D(bi4m)
    };
    b3x.bIb2x = function (ep6j, d4h) {
        h4l.cp5u(d4h);
        var ep6j = ep6j;
        var D4H = ep6j.value;
        var bq4u = D4H.length;
        var r4v = go7h.vw2x(ep6j).start;
        var bHS2x = 0;
        var jN8F = d4h.keyCode || d4h.which;
        var jV8N;
        this.oE0x = go7h.vw2x(ep6j);
        var bHR2x = false;
        for (var i = 1; i < 20; i++) {
            jV8N = r4v - i;
            if (D4H.charAt(jV8N) === " ") break;
            if (D4H.charAt(jV8N) === "@") {
                bHR2x = true;
                this.HQ6K = bHS2x = jV8N;
                break
            }
        }
        if (bHR2x && d4h.shiftKey === false && jN8F !== 38 && jN8F !== 40) {
            if (jN8F !== 27 && jN8F !== 13) {
                this.ux2x ? this.ux2x.T4X() : null;
                this.bHV2x(bHS2x)
            }
        } else if (jN8F !== 38 && jN8F !== 40 && d4h.keyCode !== 32) {
            this.ux2x ? this.ux2x.T4X() : null
        }
    };
    b3x.bWL8D = function (bi4m) {
        var bi4m = bi4m;
        var j4n = this.vb2x();
        var e4i = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bi4m,
            data: j4n,
            target: this.gp7i,
            rangeData: this.oE0x,
            atIndex: this.HQ6K
        };
        this.ux2x ? this.ux2x.T4X() : null;
        this.ux2x = w4A.bIq2x.A4E(e4i)
    };
    b3x.vb2x = function () {
        var bWH8z = go7h.vw2x(this.gp7i).start;
        var bWG8y = this.HQ6K + 1;
        var bHQ2x = go7h.bXe8W() || [];
        var bHP2x = [];
        var bv4z = this.gp7i.value.substring(bWG8y, bWH8z).toLowerCase();
        bv4z = bv4z.replace(/\[/g, "\\[");
        bv4z = bv4z.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.ra0x = window.GFollowers[0] ? window.GFollowers : []
        } else this.ra0x = [];
        if (!this.ra0x[0]) this.bIf2x();
        for (var bc4g = 0; bc4g < bHQ2x.length; bc4g++) {
            for (var v4z = 0; v4z < this.ra0x.length; v4z++) {
                if (this.ra0x[v4z].nickname == bHQ2x[bc4g]) bHP2x.push(this.ra0x[v4z])
            }
        }
        this.ra0x = k4o.cqe4i(this.ra0x, bHP2x, {union: true, begin: true});
        var bWD8v = this.ra0x.length;
        var bdD4H = [];
        var PO9F, Px9o;
        if (!this.ra0x[0]) return {suggests: bdD4H};
        for (var i = 0; i < bWD8v; i++) {
            PO9F = this.ra0x[i].nickname.toLowerCase().search(bv4z);
            Px9o = this.ra0x[i].py ? this.ra0x[i].py.toLowerCase().search(bv4z) : -1;
            if (PO9F !== -1 || Px9o != -1) bdD4H.push(this.ra0x[i]);
            if (bdD4H.length === 10) break
        }
        return {suggests: bdD4H}
    };
    b3x.NB9s = function () {
        var he7X = this.oE0x || {text: "", start: 0, end: 0};
        h4l.z4D(this.gp7i, "focus");
        go7h.HY6S(this.gp7i, he7X, "@");
        this.oE0x = go7h.vw2x(this.gp7i);
        this.HQ6K = he7X.start;
        this.bHV2x(this.HQ6K)
    };
    b3x.GU6O = function () {
        if (this.ux2x) this.ux2x.T4X()
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), v4z = c4g("nej.j"), w4A = c4g("nm.w"),
        ca5f = c4g("nej.ut"), bC4G = c4g("nej.ui"), b3x;
    var bWC8u = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var bWB8t = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gi7b = a2x.iu8m(bWB8t);
    var iZ8R = a2x.tO1x(bWC8u);
    w4A.NT9K = NEJ.C();
    b3x = w4A.NT9K.O4S(bC4G.ei6c);
    b3x.cx5C = function (e4i) {
        this.fP7I = {};
        this.cD6x()
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i);
        this.fP7I.txt = a2x.B4F(e4i.target);
        this.Rf0x();
        this.NV9M = w4A.bIg2x.A4E(this.fP7I)
    };
    b3x.bD4H = function (e4i) {
        this.bG4K();
        this.NV9M.T4X()
    };
    b3x.ce5j = function () {
        this.cd5i = gi7b;
        this.mb9S = iZ8R
    };
    b3x.bW5b = function () {
        this.cg5l();
        var i4m = a2x.dk6e(a2x.B4F(this.n4r));
        this.fP7I.body = this.n4r;
        this.fP7I.before = i4m[0];
        this.fP7I.flag = i4m[1];
        this.fP7I.after = i4m[2]
    };
    b3x.Rf0x = function () {
        var qc0x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < qc0x.length; i++) {
            if (qc0x[i] === "width" && a2x.df6Z(this.fP7I.txt, qc0x[i]) == "100%") {
                var bWA8s = this.fP7I.txt.offsetWidth;
                if (!bWA8s) {
                    setTimeout(function () {
                        a2x.ba4e(this.n4r, qc0x[i], this.fP7I.txt.offsetWidth + "px")
                    }.g4k(this), 300)
                } else {
                    a2x.ba4e(this.n4r, qc0x[i], this.fP7I.txt.offsetWidth + "px")
                }
                continue
            }
            a2x.ba4e(this.n4r, qc0x[i], a2x.df6Z(this.fP7I.txt, qc0x[i]))
        }
    };
    b3x.NB9s = function () {
        this.NV9M.NB9s()
    };
    b3x.GU6O = function () {
        this.NV9M.GU6O()
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, fx7q = NEJ.R, a2x = c4g("nej.e"), h4l = c4g("nej.v"),
        k4o = c4g("nej.u"), I4M = c4g("nej.ut"), kM8E = c4g("nm.c"), R4V = {}, b3x;
    if (!!kM8E.bhl5q) return;
    kM8E.bhl5q = NEJ.C();
    b3x = kM8E.bhl5q.O4S(I4M.cH6B);
    b3x.cx5C = function () {
        this.cD6x()
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i)
    };
    b3x.bD4H = function () {
        this.bG4K()
    };
    b3x.Hp6j = function (fj7c, cK6E, bcN4R) {
        if (R4V[fj7c]) {
            this.hf7Y("register commonJST[" + fj7c + "] duplicate");
            return
        }
        if (!k4o.gG7z(cK6E)) {
            cK6E = ctl.comJST.bWy8q(fj7c, cK6E, bcN4R)
        }
        R4V[fj7c] = cK6E
    };
    b3x.bWw8o = function (bcD4H) {
        if (k4o.eJ6D(bcD4H)) {
            k4o.bd4h(bcD4H, function (p4t) {
                ctl.comJST.Hp6j.apply(this, p4t)
            }, this)
        } else if (k4o.lw9n(bcD4H)) {
            k4o.eC6w(bcD4H, function (eQ6K, J4N) {
                ctl.comJST.Hp6j(J4N, eQ6K)
            })
        }
    };
    b3x.bWy8q = function (fj7c, vz2x, bcN4R) {
        vz2x = vz2x || {};
        NEJ.X(vz2x, {comJST: this.ni9Z});
        if (vz2x.resetDataName && !k4o.eJ6D(vz2x.resetDataName)) {
            vz2x.resetDataName = [vz2x.resetDataName]
        }
        return function () {
            var j4n = arguments[0], jM8E = arguments[1];
            if (vz2x.resetDataName) {
                var jV8N = {};
                for (var i = 0, ii = vz2x.resetDataName.length; i < ii; i++) {
                    jV8N[vz2x.resetDataName[i]] = arguments[i]
                }
                j4n = jV8N;
                jM8E = arguments[ii]
            }
            NEJ.X(j4n, vz2x, dV6P);
            if (bcN4R) {
                jM8E = jM8E || {};
                NEJ.X(jM8E, bcN4R)
            }
            return a2x.bZ5e(fj7c, j4n, jM8E)
        }
    };
    b3x.ni9Z = function (fj7c) {
        if (!R4V[fj7c]) {
            this.hf7Y("commonJST[" + fj7c + "] is unregister");
            return ""
        } else {
            return R4V[fj7c].apply(null, fx7q.slice.call(arguments, 1))
        }
    };
    b3x.dump = function () {
        return R4V
    };
    b3x.hf7Y = function (bWu8m) {
        if (console && console.log) {
            console.log(bWu8m)
        }
    };
    var dV6P = function (eQ6K, J4N) {
        return J4N == "resetDataName"
    };
    c4g("ctl").comJST = kM8E.bhl5q.gr7k();
    a2x.cAF7y({comJST: c4g("ctl").comJST.ni9Z})
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, bs4w = NEJ.F, fx7q = NEJ.R, a2x = c4g("nej.e"), h4l = c4g("nej.v"),
        k4o = c4g("nej.u"), I4M = c4g("nej.ut"), kM8E = c4g("nm.c"), l4p = c4g("nm.x"), R4V = {}, b3x;
    if (!!kM8E.bhz5E) return;
    kM8E.bhz5E = NEJ.C();
    b3x = kM8E.bhz5E.O4S(I4M.cH6B);
    b3x.cx5C = function () {
        this.cD6x();
        var e4i = {
            "com-mv-artists": function (fO7H, dZ6T, Ow9n, bhB5G) {
                return a2x.bZ5e("com-mv-artists", {
                    artists: fO7H,
                    clazz: dZ6T,
                    boxClazz: bhB5G,
                    mark: Ow9n || function (cI6C) {
                        return cI6C
                    },
                    escape: k4o.dG6A,
                    comJST: ctl.comJST.ni9Z
                })
            },
            "com-album-artists": function (fO7H, dZ6T, Ow9n, bhB5G) {
                return a2x.bZ5e("com-album-artists", {
                    artists: fO7H,
                    clazz: dZ6T,
                    boxClazz: bhB5G,
                    mark: Ow9n || function (cI6C) {
                        return cI6C
                    },
                    escape: k4o.dG6A,
                    comJST: ctl.comJST.ni9Z
                })
            },
            "com-artists-title": {resetDataName: ["artists"], escape: k4o.dG6A},
            "com-user-type": function (dp6j, dZ6T, ly9p, xs2x, bHK2x) {
                return a2x.bZ5e("com-user-type", {
                    x: dp6j,
                    clazz: dZ6T || "",
                    clazz2: typeof bHK2x == "undefined" ? "icn" : bHK2x,
                    before: ly9p || "",
                    after: xs2x || "",
                    isEmptyObject: l4p.bOb4f
                })
            }
        };
        for (var C4G in e4i) {
            ctl.comJST.Hp6j(C4G, e4i[C4G])
        }
    };
    b3x.bl4p = function (e4i) {
        this.bm4q(e4i)
    };
    b3x.bD4H = function () {
        this.bG4K()
    };
    c4g("ctl").comJSTUtil = kM8E.bhz5E.gr7k()
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, a2x = c4g("nej.e"), dv6p = c4g("nej.p"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"), v4z = c4g("nej.j"), w4A = c4g("nm.w"), go7h = c4g("nm.ut"), q4u = c4g("nm.d"),
        l4p = c4g("nm.x"), m4q = c4g("nm.l"), bhF5K = [2, 3], dY6S = ["sn", "db"], b3x, K4O, bWr8j = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video",
            41: "cloudvideo"
        }, bcs4w = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频",
            cloudvideo: "视频"
        }, bHH2x = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by ",
            cloudvideo: " by "
        }, bWl8d = {0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20}, Hb6V = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        }, FullscreenApi = l4p.EA5F || {};
    m4q.pJ0x = NEJ.C();
    b3x = m4q.pJ0x.O4S(m4q.en6h);
    K4O = m4q.pJ0x.cs5x;
    b3x.bl4p = function (e4i) {
        if (e4i.onclose === undefined) {
            e4i.onclose = this.bHF2x.g4k(this)
        }
        this.bm4q(e4i);
        this.CD4H = e4i.isPub;
        this.jF8x = e4i.rid || -1;
        this.ey6s = e4i.type || -1;
        this.bhT5Y = e4i.purl;
        this.OZ9Q = e4i.name || "";
        this.Pf9W = e4i.author || "";
        this.bhX6R = e4i.authors || "";
        this.bbB4F = e4i.actId;
        this.bbs4w = e4i.actName;
        this.bHB2x = e4i.title;
        this.bbi4m = {};
        this.bWf7Y = e4i.mesg || "";
        this.bWe7X = e4i.placeholder || "说点什么吧";
        this.bih6b = e4i.hideTip;
        this.bWb7U = e4i.videoJumpUrl;
        var i4m, eR6L = +(new Date);
        try {
            i4m = top.localCache.B4F("user") || {}
        } catch (e) {
            i4m = {}
        }
        for (var i = 0, i4m = i4m.bindings || [], eL6F; i < i4m.length; ++i) {
            eL6F = !i4m[i].tokenJsonStr ? null : JSON.parse(i4m[i].tokenJsonStr);
            if (!eL6F || eL6F.expires_in === undefined) continue;
            var baG3x = parseInt(eL6F.expires_in), baF3x = parseInt(i4m[i].refreshTime),
                bVZ7S = (baG3x + baF3x) * 1e3 - 5 * 60 * 1e3;
            if (bVZ7S > eR6L) this.bbi4m[i4m[i].type] = !0
        }
        this.wz2x = w4A.Gi5n.A4E({parent: this.bax3x, err: this.bHy2x});
        if (this.hA7t) {
            this.hA7t.T4X()
        }
        this.hA7t = w4A.NT9K.A4E({parent: document.body, target: this.ev6p});
        if (this.ey6s == 24 || this.ey6s == 21 || this.ey6s == 41 || this.GG5L()) {
            this.ya3x.style.display = "none"
        } else {
            this.ya3x.style.display = "";
            this.oC0x = w4A.bpi7b.A4E({
                parent: this.bix6r,
                button: this.ya3x,
                onstartupload: this.bHw2x.g4k(this, true),
                onfinishupload: this.bHw2x.g4k(this, false)
            })
        }
        if (this.GG5L()) {
            this.pn0x.innerText = "";
            a2x.y4C(this.pn0x, "info-video");
            a2x.y4C(this.biA6u, "f-hide")
        } else {
            a2x.x4B(this.biA6u, "f-hide")
        }
    };
    b3x.bD4H = function () {
        this.bG4K();
        if (this.wz2x) {
            this.wz2x.T4X();
            delete this.wz2x
        }
        if (this.hA7t) {
            this.hA7t.T4X();
            delete this.hA7t
        }
        if (this.oC0x) {
            this.oC0x.T4X();
            delete this.oC0x
        }
        if (this.ms9j) {
            this.ms9j.T4X();
            delete this.ms9j
        }
    };
    b3x.ce5j = function () {
        this.cd5i = "m-wgt-sharewin"
    };
    b3x.bW5b = function () {
        this.cg5l();
        this.bHu2x = a2x.dk6e(this.n4r)[0];
        var bt4x = a2x.H4L(this.n4r, "j-flag");
        this.rg0x = bt4x.shift();
        this.bHy2x = bt4x.shift();
        this.bax3x = bt4x.shift();
        this.ev6p = bt4x.shift();
        this.pn0x = bt4x.shift();
        this.biF6z = bt4x.shift();
        this.bVQ7J = bt4x.shift();
        this.ya3x = bt4x.shift();
        this.cv5A = bt4x.shift();
        this.bix6r = bt4x.shift();
        this.Ca4e = bt4x.shift();
        this.cGh9Y = bt4x.shift();
        this.biA6u = bt4x.shift();
        this.ek6e = bt4x.shift();
        this.Zs3x = a2x.H4L(this.biA6u, "j-t");
        this.BL4P = I4M.EE5J.A4E({list: a2x.dk6e(this.rg0x), selected: "z-slt", onchange: this.biL6F.g4k(this)});
        if (dv6p.ds6m.browser == "ie" && dv6p.ds6m.version < "8.0") {
            a2x.ba4e(this.bax3x, "position", "relative");
            a2x.ba4e(this.bax3x, "zIndex", "10")
        }
        h4l.s4w(window, "snsbind", this.Rp0x.g4k(this));
        h4l.s4w(this.ev6p, "input", this.fN7G.g4k(this));
        h4l.s4w(this.ev6p, "keyup", this.uU2x.g4k(this));
        h4l.s4w(this.n4r, "click", this.cM6G.g4k(this));
        this.S4W = q4u.blg6a.A4E();
        this.S4W.s4w("onshareall", this.Zk3x.g4k(this, 0));
        this.S4W.s4w("onshareerror", this.iY8Q.g4k(this));
        this.S4W.s4w("onshareprivate", this.Zk3x.g4k(this, 1));
        this.Zj3x = q4u.yN3x.A4E();
        this.hf7Y = q4u.hR8J.A4E();
        try {
            this.Rv0x = top.api.sharePermission
        } catch (e) {
        }
        if (!this.Rv0x) {
            this.Rv0x = Hb6V;
            v4z.bn4r("/api/event/user/permission", {
                type: "json", onload: function (d4h) {
                    if (d4h.code == 200) {
                        this.Rv0x = NEJ.EX(Hb6V, d4h)
                    }
                }.g4k(this)
            })
        }
    };
    b3x.biL6F = function (d4h) {
        d4h.index == 0 ? a2x.x4B(this.bHu2x, "m-plshare") : a2x.y4C(this.bHu2x, "m-plshare");
        this.bax3x.style.display = d4h.index == 0 ? "none" : "";
        this.bVQ7J.style.display = d4h.index == 0 ? "" : "none";
        this.ya3x.style.display = d4h.index == 0 ? "" : "none";
        if (this.ey6s == 24 || this.ey6s == 21) {
            this.ya3x.style.display = "none"
        }
        this.bHy2x.style.display = "none";
        this.ev6p.value = "";
        this.cf5k();
        this.Gh5m();
        if (d4h.index == 0) {
            var cA5F = a2x.df6Z(this.ev6p, "width");
            if (cA5F == "auto" || !cA5F) {
                return
            } else {
                if (this.hA7t) {
                    this.hA7t.T4X()
                }
                this.hA7t = w4A.NT9K.A4E({parent: document.body, target: this.ev6p})
            }
            this.bix6r.style.display = ""
        } else {
            if (this.hA7t) {
                this.hA7t.T4X();
                delete this.hA7t
            }
            this.bix6r.style.display = "none"
        }
    };
    b3x.cM6G = function (d4h) {
        var f4j = h4l.W4a(d4h, "d:action");
        if (!f4j) return;
        if (a2x.t4x(f4j, "action") == "search") {
            h4l.cp5u(d4h)
        } else if (a2x.t4x(f4j, "default") === undefined) {
            h4l.cp5u(d4h)
        }
        switch (a2x.t4x(f4j, "action")) {
            case"txt":
                this.mh9Y();
                break;
            case"search":
                if (this.GG5L()) {
                    top.location.href = this.bWb7U
                } else if (this.CD4H && this.ey6s != 24) {
                    if (this.ms9j) {
                        this.ms9j.T4X()
                    }
                    this.ms9j = w4A.bun9e.A4E({
                        parent: this.n4r.parentNode,
                        onfinish: this.biR6L.g4k(this),
                        oncancel: this.bVM7F.g4k(this)
                    });
                    this.biT6N = true;
                    this.n4r.style.display = "none";
                    this.Gc5h(this.jF8x < 0 ? "添加音乐" : "更换音乐")
                }
                break;
            case"at":
                h4l.tr1x(d4h);
                !!this.hl7e && this.hl7e.bu4y();
                this.hA7t.NB9s();
                this.gk7d();
                break;
            case"emot":
                h4l.tr1x(d4h);
                !!this.hA7t && this.hA7t.GU6O();
                if (!this.hl7e) {
                    this.hl7e = m4q.IC6w.A4E({parent: this.biF6z});
                    this.hl7e.s4w("onselect", this.xO3x.g4k(this))
                }
                this.hl7e.L4P();
                break;
            case"upload":
                break;
            case"sns":
                h4l.bh4l(d4h);
                var biX6R, bv4z, u4y = a2x.t4x(f4j, "type");
                if (!this.bbi4m[u4y]) {
                    biX6R = f4j.href.split("?");
                    bv4z = k4o.hv7o(biX6R[1]);
                    bv4z["csrf_token"] = v4z.gy7r("__csrf");
                    top.open(biX6R[0] + "?" + k4o.cE6y(bv4z));
                    return
                }
                var bz4D = {2: "sn", 3: "db", 4: "rr"};
                l4p.Bd4h(f4j, "u-slg-" + bz4D[u4y] + "-gray");
                break;
            case"close":
                !!this.hl7e && this.hl7e.bu4y();
                this.bHF2x();
                break;
            case"share":
                h4l.bh4l(d4h);
                if (this.GG5L()) {
                    if (!a2x.bE4I(f4j, "u-btn2-2-dis")) {
                        this.bVL7E()
                    }
                } else if (a2x.bE4I(f4j, "u-btn2-2-dis")) {
                    if (!this.Rv0x.pubEventWithoutResource && this.jF8x < 0) {
                        this.bVJ7C()
                    } else {
                    }
                } else if (this.jF8x < 0 && !this.ev6p.value && this.oC0x && this.oC0x.SV1x().length == 0) {
                    m4q.Z4d.L4P({type: 2, tip: "请输入内容"})
                } else {
                    this.bVH7A()
                }
                break
        }
    };
    b3x.bVJ7C = function () {
        var tp1x = 0, bjc6W = function () {
            if (tp1x % 2) {
                a2x.x4B(this.pn0x, "z-show")
            } else {
                a2x.y4C(this.pn0x, "z-show")
            }
            tp1x++;
            if (tp1x > 5) {
                clearInterval(eg6a)
            }
        }, eg6a;
        return function () {
            tp1x = 0;
            clearInterval(eg6a);
            eg6a = setInterval(bjc6W.g4k(this), 200)
        }
    }();
    b3x.Rp0x = function (o4s) {
        o4s = o4s.result;
        this.bbi4m[o4s.type] = !0;
        var r4v = k4o.di6c(bhF5K, o4s.type), ch5m = "u-slg-" + dY6S[r4v] + "-gray";
        a2x.x4B(this.Zs3x[r4v], ch5m)
    };
    b3x.biR6L = function (by4C) {
        var j4n = by4C.data;
        this.jF8x = by4C.id;
        this.ey6s = by4C.type;
        this.n4r.style.display = "";
        this.Gc5h(this.bHB2x);
        this.ms9j && this.ms9j.T4X();
        this.biT6N = false;
        this.bhT5Y = j4n.picUrl;
        this.OZ9Q = j4n.title || "";
        this.Pf9W = j4n.author || "";
        this.bhX6R = j4n.authors || "";
        this.bVG7z();
        this.Yy2x()
    };
    b3x.bVM7F = function () {
        this.ms9j && this.ms9j.T4X();
        this.n4r.style.display = "";
        this.Gc5h(this.bHB2x);
        this.biT6N = false;
        this.Yy2x()
    };
    b3x.xO3x = function (d4h) {
        var bo4s = "[" + d4h.text + "]";
        go7h.HY6S(this.ev6p, this.oE0x, bo4s);
        this.gk7d()
    };
    b3x.fN7G = function (d4h) {
        dv6p.ds6m.browser == "ie" && dv6p.ds6m.version < "7.0" ? setTimeout(this.gk7d.g4k(this), 0) : this.gk7d()
    };
    b3x.uU2x = function (d4h) {
        this.mh9Y();
        if (d4h.keyCode == 8) this.gk7d()
    };
    b3x.gk7d = function () {
        this.mh9Y();
        this.Gh5m()
    };
    b3x.Gh5m = function () {
        var bq4u = Math.ceil(k4o.fy7r(this.ev6p.value.trim()) / 2);
        this.cv5A.innerText = 140 - bq4u;
        bq4u > 140 ? a2x.fb6V(this.cv5A, "s-fc4", "s-fc6") : a2x.fb6V(this.cv5A, "s-fc6", "s-fc4")
    };
    b3x.bVH7A = function () {
        if (this.cO6I()) return;
        if (k4o.fy7r(this.ev6p.value.trim()) > 280) {
            this.cf5k("字数超过140个字符");
            return
        }
        var u4y = this.BL4P.tD1x(), j4n;
        if (u4y == 0) {
            for (var i = 0, Js6m = []; i < this.Zs3x.length; ++i) {
                if (!a2x.bE4I(this.Zs3x[i], "u-slg-" + dY6S[i] + "-gray")) Js6m.push(bhF5K[i])
            }
            this.cO6I(!0);
            j4n = {
                id: this.jF8x,
                msg: this.ev6p.value.trim(),
                type: this.Yp2x(this.ey6s),
                picUrl: this.bhT5Y,
                snsTypes: Js6m.join(","),
                isPub: this.CD4H
            };
            if (this.bbB4F > 0) {
                j4n.actId = this.bbB4F;
                if (this.bbs4w) {
                    j4n.msg = "#" + this.bbs4w + "#" + j4n.msg
                }
            }
            var nN9E = this.oC0x && this.oC0x.SV1x();
            if (nN9E && nN9E.length) {
                j4n.pics = nN9E
            }
            this.S4W.cdC0x(j4n)
        } else {
            var sH1x = this.wz2x.Qt9k();
            if (sH1x.length <= 0) {
                this.cf5k("请至少选择一位好友");
                return
            }
            this.S4W.cdB0x({
                data: {
                    id: this.jF8x,
                    msg: this.ev6p.value.trim(),
                    type: this.Yp2x(this.ey6s == 41 ? 39 : this.ey6s),
                    userIds: "[" + sH1x.join(",") + "]"
                }
            })
        }
    };
    b3x.bVL7E = function () {
        if (this.cO6I()) {
            return
        }
        this.hf7Y.fu7n("click", {target: "share", targetid: "button", page: "sharevideo"});
        if (k4o.fy7r(this.ev6p.value.trim()) > 280) {
            this.cf5k("字数超过140个字符");
            return
        }
        this.cO6I(!0);
        var j4n = {msg: this.ev6p.value.trim() || "", type: "video"}, bVF7y = {videoId: this.jF8x};
        if (this.bbB4F > 0) {
            j4n.actId = this.bbB4F;
            if (this.bbs4w) {
                j4n.msg = "#" + this.bbs4w + "#" + j4n.msg
            }
        }
        j4n.videoinfo = JSON.stringify(bVF7y);
        this.S4W.cdA0x({data: {videoId: this.jF8x, commit: true}, data2: j4n, snsTypes: ""})
    };
    b3x.Zk3x = function (u4y, o4s) {
        this.cO6I(!1);
        this.bu4y();
        if (!this.bih6b) {
            if (this.GG5L()) {
                m4q.Z4d.L4P({tip: "视频将在转码完成后自动发出", autoclose: true})
            } else {
                m4q.Z4d.L4P({
                    tip: "分享成功" + (o4s.point > 0 ? ' 获得<em class="s-fc6">' + o4s.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h4l.z4D(m4q.pJ0x, "sharesuccess", {isPrivate: u4y, rid: this.jF8x, rtype: this.ey6s, data: o4s.event});
        this.z4D("onshare")
    };
    b3x.iY8Q = function (o4s) {
        this.cO6I(!1);
        var bH4L = "分享失败";
        if (o4s.code) {
            switch (o4s.code) {
                case 404:
                    bH4L = "分享的资源不存在";
                    break;
                case 407:
                    bH4L = "输入内容包含有关键字";
                    break;
                case 408:
                    bH4L = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bH4L = o4s.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l4p.fq7j({clazz: "m-layer-w2", btntxt: "知道了", message: "当前账号存在较多未完成发布的视频<br>请稍后再试"})
            }
        }
        this.cf5k(bH4L)
    };
    b3x.mh9Y = function () {
        this.oE0x = go7h.vw2x(this.ev6p)
    };
    b3x.cf5k = function (bH4L) {
        this.dP6J(this.ek6e, bH4L)
    };
    b3x.cO6I = function (cX6R) {
        return this.dX6R(this.Ca4e, cX6R, "分享", "分享中...")
    };
    b3x.Yp2x = function (jr8j) {
        return bWr8j[jr8j] || ""
    };
    b3x.bVD7w = function () {
        var ep6j, uZ2x = this.Yp2x(this.ey6s);
        this.pn0x.style.display = "";
        if (this.jF8x < 0) {
            this.pn0x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.OZ9Q) {
                this.pn0x.style.display = "none";
                return
            }
            var Ye2x = this.CD4H && this.ey6s != 24;
            ep6j = (bcs4w[uZ2x] ? bcs4w[uZ2x] + "：" : "") + this.OZ9Q + (bHH2x[uZ2x] || " ") + (uZ2x == "mv" || uZ2x == "album" ? this.bhX6R || this.Pf9W : this.Pf9W);
            a2x.dI6C(this.pn0x, "m-xwgt-share-infobar", {canChange: Ye2x, info: ep6j});
            if (Ye2x) {
                a2x.x4B(this.pn0x, "z-dis")
            } else {
                a2x.y4C(this.pn0x, "z-dis")
            }
        }
        a2x.x4B(this.pn0x, "info-video")
    };
    b3x.bVG7z = function () {
        var uZ2x = this.Yp2x(this.ey6s),
            ep6j = (bcs4w[uZ2x] ? bcs4w[uZ2x] + "：" : "") + this.OZ9Q + (bHH2x[uZ2x] || " ") + (uZ2x == "mv" || uZ2x == "album" ? this.bhX6R || this.Pf9W : this.Pf9W);
        Ye2x = this.CD4H && this.ey6s != 24;
        if (this.GG5L()) {
        } else {
            a2x.x4B(this.pn0x, "info-video");
            a2x.dI6C(this.pn0x, "m-xwgt-share-infobar", {canChange: Ye2x, isPub: this.CD4H, info: ep6j})
        }
    };
    b3x.bVC7v = function () {
        var Jy6s = this.ev6p.value;
        if (this.CD4H) {
            if (!!this.biT6N) {
                return !!Jy6s && !!Jy6s.length || !!this.oC0x && this.oC0x.SV1x().length > 0
            } else {
                return !(this.jF8x < 0) || !!Jy6s && !!Jy6s.length || !!this.oC0x && this.oC0x.SV1x().length > 0
            }
        } else {
            return !!Jy6s && !!Jy6s.length || !!this.oC0x && this.oC0x.SV1x().length > 0
        }
    };
    b3x.Yy2x = function () {
        var bHn2x = false;
        if (!this.CD4H || this.Rv0x.pubEventWithoutResource || !(this.jF8x < 0)) {
            bHn2x = true
        }
        if (bHn2x) {
            a2x.x4B(this.Ca4e, "u-btn2-2-dis")
        } else {
            a2x.y4C(this.Ca4e, "u-btn2-2-dis")
        }
    };
    b3x.bHw2x = function (bjs6m) {
        if (bjs6m) {
            a2x.y4C(this.Ca4e, "u-btn2-2-dis")
        } else {
            this.Yy2x()
        }
    };
    b3x.bHF2x = function (d4h) {
        if (d4h) {
            d4h.stopped = true
        }
        if (this.bVC7v()) {
            l4p.hi7b({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function (U4Y) {
                    if (U4Y == "ok") {
                        this.z4D("forceclose", {});
                        this.bu4y();
                        h4l.z4D(m4q.pJ0x, "shareclose", {})
                    }
                }.g4k(this)
            })
        } else {
            this.z4D("forceclose", {});
            this.bu4y();
            h4l.z4D(m4q.pJ0x, "shareclose", {})
        }
    };
    b3x.Gc5h = function (el6f, dT6N) {
        this.pb0x.Bg4k(el6f, dT6N)
    };
    b3x.Yc2x = function (u4y) {
        this.hf7Y.fu7n("page", {type: u4y})
    };
    b3x.GG5L = function () {
        return this.ey6s == 39
    };
    b3x.L4P = function () {
        var bVA7t = function (p4t, r4v) {
            var ch5m = "u-slg-" + dY6S[r4v] + "-gray";
            !this.bbi4m[bhF5K[r4v]] ? a2x.y4C(p4t, ch5m) : a2x.x4B(p4t, ch5m)
        };
        return function () {
            K4O.L4P.call(this);
            this.n4r.style.display = "";
            this.cf5k();
            this.cO6I(!1);
            this.BL4P.UF1x(0);
            this.ev6p.focus();
            this.ev6p.value = this.bWf7Y || "";
            this.ev6p.placeholder = this.bWe7X || "";
            if (!this.GG5L()) {
                this.bVD7w()
            } else {
                a2x.y4C(this.pn0x, "info-video");
                a2x.dI6C(this.pn0x, "m-xwgt-share-videobar", {title: this.OZ9Q, picUrl: this.bhT5Y})
            }
            this.gk7d();
            this.wz2x.bYz8r();
            k4o.bd4h(this.Zs3x, bVA7t, this);
            this.mh9Y();
            if (this.CD4H) {
                this.rg0x.style.display = "none"
            } else {
                this.rg0x.style.display = ""
            }
            this.Yy2x()
        }
    }();
    b3x.bu4y = function (d4h) {
        K4O.bu4y.call(this);
        !!this.hl7e && this.hl7e.bu4y();
        if (this.wz2x) {
            this.wz2x.T4X();
            delete this.wz2x
        }
        if (this.hA7t) {
            this.hA7t.T4X();
            delete this.hA7t
        }
        if (this.oC0x) {
            this.oC0x.T4X();
            delete this.oC0x
        }
        if (this.bHm2x) {
            this.bHm2x = this.bHm2x.T4X()
        }
        if (this.ms9j) {
            this.ms9j.T4X();
            delete this.ms9j
        }
    };
    l4p.lj9a = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e4i.title === undefined) {
            e4i.title = "分享"
        }
        if (e4i.actId && e4i.type != 39) {
            var u4y = bWl8d[e4i.resourceType], bV5a = e4i.resourceJson, hW8O;
            if (k4o.fG7z(bV5a)) {
                try {
                    bV5a = JSON.parse(bV5a)
                } catch (e) {
                }
            }
            if (u4y) {
                hW8O = l4p.bNV4Z(u4y, bV5a);
                e4i.name = hW8O.title;
                e4i.author = hW8O.author;
                e4i.picUrl = hW8O.picUrl;
                e4i.type = u4y;
                e4i.rid = (bV5a || []).id
            }
        }
        m4q.pJ0x.L4P(e4i)
    };
    I4M.fJ7C.A4E({element: m4q.pJ0x, event: ["sharesuccess", "shareclose"]})
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, h4l = c4g("nej.v"), a2x = c4g("nej.e"), v4z = c4g("nej.j"), m4q = c4g("nm.l"),
        w4A = c4g("nm.w"), bC4G = c4g("nej.ui"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), b3x, K4O;
    m4q.XV2x = NEJ.C();
    b3x = m4q.XV2x.O4S(m4q.en6h);
    K4O = m4q.XV2x.cs5x;
    b3x.cx5C = function () {
        this.cD6x()
    };
    b3x.bW5b = function () {
        this.cg5l();
        var i4m = a2x.H4L(this.n4r, "j-flag");
        h4l.s4w(i4m[0], "click", this.Ev5A.g4k(this))
    };
    b3x.ce5j = function () {
        this.cd5i = "m-import-ok"
    };
    b3x.bl4p = function (e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.title = "歌曲同步完成";
        this.bm4q(e4i)
    };
    b3x.bD4H = function () {
        this.bG4K()
    };
    b3x.Ev5A = function (d4h) {
        this.bu4y();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b3x.BH4L = function () {
        this.bu4y()
    };
    b3x.bLl3x = function (d4h) {
        if (d4h.keyCode == 13) this.FK5P()
    }
})();
(function () {
    var c4g = NEJ.P, bb4f = NEJ.O, h4l = c4g("nej.v"), a2x = c4g("nej.e"), v4z = c4g("nej.j"), N4R = c4g("nej.p"),
        k4o = c4g("nej.u"), m4q = c4g("nm.l"), w4A = c4g("nm.w"), bC4G = c4g("nej.ui"), q4u = c4g("nm.d"),
        l4p = c4g("nm.x"), b3x, K4O;
    m4q.bHl2x = NEJ.C();
    b3x = m4q.bHl2x.O4S(m4q.en6h);
    b3x.ce5j = function () {
        this.cd5i = "m-programtips-layer"
    };
    b3x.bW5b = function () {
        this.cg5l();
        this.bU5Z = a2x.H4L(this.n4r, "j-flag")
    };
    b3x.bl4p = function (e4i) {
        e4i.clazz = " m-layer-programtips";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "付费内容提示";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bm4q(e4i);
        this.gY7R = e4i.id;
        this.bVx7q = e4i.radiotype;
        this.lB9s = location.protocol + "//" + (this.bjE6y() || "music.163.com") + "/m/" + this.bVx7q + "?id=" + this.gY7R;
        this.bVw7p()
    };
    b3x.bD4H = function () {
        this.bG4K()
    };
    b3x.BH4L = function () {
        this.bu4y()
    };
    b3x.Ev5A = function (d4h) {
        this.z4D("onok", D4H);
        this.bu4y()
    };
    l4p.bHk2x = function (e4i) {
        m4q.bHl2x.A4E(e4i).L4P()
    };
    b3x.bVw7p = function () {
        v4z.bn4r("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k4o.cE6y({url: this.lB9s, size: 180}),
            onload: function (j4n) {
                if (j4n.code == 200) {
                    this.bVs7l(j4n.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g4k(this)
        })
    };
    b3x.bjE6y = function () {
        var Rl0x = location.host;
        if (Rl0x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b3x.bVs7l = function (jJ8B) {
        this.bU5Z[0].style.backgroundImage = "url(" + jJ8B + ")"
    }
})();
(function () {
    var c4g = NEJ.P, a2x = c4g("nej.e"), dv6p = c4g("nej.p"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"), v4z = c4g("nej.j"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), E4I = c4g("nm.m"),
        m4q = c4g("nm.l"), M4Q = c4g("nm.m.f"), b3x, K4O;
    E4I.de6Y = NEJ.C();
    b3x = E4I.de6Y.O4S(I4M.dx6r);
    b3x.bL4P = function () {
        var qQ0x = !1;
        return function () {
            if (qQ0x) return;
            qQ0x = !0;
            this.bR4V();
            if (top == self) {
                return
            }
            this.tx1x = a2x.B4F("g_backtop");
            if (window.GRef != "mail") {
            } else {
                this.bHi2x()
            }
            I4M.fJ7C.A4E({element: window, event: ["share", "playchange", "snsbind", "playstatechange"]});
            this.bX5c([[window, "scroll", this.BA4E.g4k(this)], [document, "keyup", this.bVo7h.g4k(this)], [document.body, "click", this.sW1x.g4k(this)], [document, "mouseup", this.bVn7g.g4k(this)], [this.tx1x, "click", this.Tx1x.g4k(this)], [q4u.to1x, "message", this.uy2x.g4k(this)]]);
            l4p.cdK0x(document.body);
            this.BA4E();
            if (this.Bz4D !== false && typeof GUser !== "undefined" && GUser.userId > 0) q4u.to1x.gr7k().uI2x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dv6p.ds6m.browser == "ie" && parseInt(dv6p.ds6m.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hc7V = top.player.getPlaying();
                    if (hc7V && hc7V.track && hc7V.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hc7V.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {
            }
            window.share = this.ze3x.g4k(this);
            this.km8e = q4u.hR8J.A4E();
            window.log = this.md9U.g4k(this);
            var sx1x = location.search;
            if (sx1x) {
                var bv4z = sx1x.substr(sx1x.indexOf("?") + 1), gw7p = k4o.hv7o(bv4z);
                if (gw7p && gw7p["_hash"]) location.hash = gw7p["_hash"]
            }
        }
    }();
    b3x.bVo7h = function (d4h) {
        var f4j = h4l.W4a(d4h);
        try {
            if (d4h.keyCode == 80 && l4p.bOe4i() || ["textarea", "input"].indexOf(f4j.tagName.toLowerCase()) >= 0) return;
            h4l.z4D(top.document, "keyup", {ctrlKey: d4h.ctrlKey, keyCode: d4h.keyCode})
        } catch (e) {
        }
    };
    b3x.sW1x = function (d4h) {
        var f4j = h4l.W4a(d4h);
        if (f4j && f4j.tagName == "INPUT") return;
        var f4j = h4l.W4a(d4h, "d:pid");
        if (f4j) {
            h4l.cp5u(d4h);
            var pk0x = a2x.t4x(f4j, "pid"), Bv4z = a2x.t4x(f4j, "ptype"), U4Y = a2x.t4x(f4j, "action") || "play";
            switch (U4Y) {
                case"subscribe":
                    l4p.mq9h({tracks: [pk0x]});
                    break
            }
        }
        f4j = h4l.W4a(d4h, "d:resAction");
        if (f4j && f4j.className.indexOf("-dis") == -1) {
            var cT6N = a2x.t4x(f4j, "resId"), u4y = a2x.t4x(f4j, "resType"), bjU6O = a2x.t4x(f4j, "resRadiotype"),
                bjV6P = a2x.t4x(f4j, "resRadioid"), ea6U = a2x.t4x(f4j, "resFrom"), j4n = a2x.t4x(f4j, "resData"),
                U4Y = a2x.t4x(f4j, "resAction"), buU9L = a2x.t4x(f4j, "resCopyright"),
                WB2x = a2x.t4x(f4j, "resAuditstatus");
            if (U4Y != "log" && U4Y != "bilog") h4l.cp5u(d4h);
            switch (U4Y) {
                case"log":
                    j4n = (j4n || "").split("|");
                    if (!!j4n[0]) {
                        var bg4k = {id: cT6N, alg: j4n[2] || "itembased", scene: j4n[3], position: j4n[1] || 0};
                        if (!!j4n[4]) bg4k.srcid = j4n[4];
                        window.log(j4n[0], bg4k)
                    }
                    break;
                case"bilog":
                    var bvt9k = a2x.t4x(f4j, "logAction"), bvw9n = a2x.t4x(f4j, "logJson");
                    window.log(bvt9k, bvw9n);
                    break;
                case"share":
                    if (WB2x && WB2x == 1) {
                        l4p.ir8j("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cT6N, u4y, a2x.t4x(f4j, "resPic"), a2x.t4x(f4j, "resName"), a2x.t4x(f4j, "resAuthor"), a2x.t4x(f4j, "resAuthors"))
                    }
                    break;
                case"fav":
                case"subscribe":
                    if (u4y == 18) {
                        var rd0x = a2x.t4x(f4j, "resLevel"), rY1x = a2x.t4x(f4j, "resFee");
                        if (rd0x == 10) {
                            l4p.tW1x(rY1x, cT6N, "song");
                            break
                        }
                        l4p.mq9h({tracks: [cT6N]})
                    }
                    break;
                case"download":
                    l4p.JU6O({id: cT6N, type: u4y});
                    break;
                case"programtips":
                    if (WB2x && WB2x == 1) {
                        l4p.ir8j("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l4p.bHk2x({id: bjV6P, radiotype: bjU6O})
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d4h)
        } catch (e) {
        }
    };
    b3x.bVn7g = function (d4h) {
        try {
            h4l.z4D(top.document, "mouseup")
        } catch (e) {
        }
    };
    b3x.BA4E = function () {
        var bVm7f = function () {
            var ci5n = window.innerHeight;
            if (!k4o.wg2x(ci5n)) ci5n = (document.documentElement || document.body).clientHeight;
            return ci5n
        };
        return function (d4h) {
            if (!this.tx1x) return;
            var Wy2x = bVm7f(), gj7c = document.documentElement.scrollTop || document.body.scrollTop;
            a2x.ba4e(this.tx1x, "display", gj7c > 0 ? "" : "none");
            if (dv6p.ds6m.browser == "ie" && dv6p.ds6m.version < "7.0") {
                var gx7q = Math.min(document.body.clientHeight, Wy2x + gj7c) - 204;
                a2x.ba4e(this.tx1x, "top", gx7q + "px")
            }
        }
    }();
    b3x.Tx1x = function (d4h) {
        h4l.cp5u(d4h);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b3x.ze3x = function () {
        var bka6U = function (d4h) {
            h4l.z4D(window, "share", d4h)
        };
        return function (cT6N, u4y, zp3x, V4Z, Fw5B, Fr5w) {
            l4p.lj9a({
                rid: cT6N,
                type: u4y,
                purl: zp3x,
                name: V4Z,
                author: Fw5B,
                authors: Fr5w,
                onshare: bka6U.g4k(this)
            })
        }
    }();
    b3x.md9U = function (U4Y, bg4k) {
        try {
            top.log(U4Y, bg4k)
        } catch (e) {
            if (U4Y.indexOf("new|") == 0) {
                return this.km8e.fu7n(U4Y.slice(4), bg4k)
            }
            switch (U4Y) {
                case"play":
                    this.km8e.ej6d(bg4k);
                    break;
                case"search":
                    this.km8e.bRn6h(bg4k);
                    break;
                default:
                    this.km8e.fu7n(U4Y, bg4k)
            }
        }
    };
    b3x.bHi2x = function () {
        var Wp2x, bkf6Z = false, br4v = [45, 60];
        var bVl7e = function (bH4L) {
            if (bH4L.title != "MailBoxImport") return;
            var Q4U = JSON.parse(bH4L.content || "null") || bb4f;
            if (Q4U.status == 10) {
                m4q.XV2x.A4E().L4P();
                window.clearTimeout(Wp2x)
            }
        };
        var ss1x = function (d4h) {
            if (d4h.code == 200) {
                if (d4h.status == 1) {
                    h4l.s4w(q4u.BK4O, "message", bVl7e.g4k(this));
                    q4u.BK4O.A4E().bfk5p();
                    bkf6Z = true
                } else {
                    if (bkf6Z) {
                        if (d4h.status == 10) {
                            m4q.XV2x.A4E().L4P();
                            h4l.hd7W(q4u.BK4O, "message");
                            window.clearTimeout(Wp2x);
                            bkf6Z = false
                        }
                    } else {
                        window.clearTimeout(Wp2x)
                    }
                }
            }
        };
        return function () {
            var tJ1x = br4v.shift() * 1e3;
            v4z.bn4r("/api/musicbox/mail/status", {type: "json", method: "get", onload: ss1x.g4k(this)});
            if (tJ1x) {
                Wp2x = window.setTimeout(arguments.callee, tJ1x)
            }
        }
    }();
    b3x.uy2x = function (d4h) {
        try {
            top.polling(d4h)
        } catch (e) {
        }
    }
})()