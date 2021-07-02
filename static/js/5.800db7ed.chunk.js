/*! For license information please see 5.800db7ed.chunk.js.LICENSE.txt */
(this.webpackJsonptikitoken = this.webpackJsonptikitoken || []).push([[5], {
    108: function(a, e, t) {
        a.exports = t.p + "static/media/money.d301ec34.png"
    },
    125: function(a, e, t) {
        a.exports = t.p + "static/media/bnb.162aaf57.png"
    },
    230: function(a, e, t) {
        "use strict";
        t.r(e);
        var r = t(8)
          , n = t(5)
          , s = t.n(n)
          , o = t(21)
          , i = t(81)
          , c = t(95)
          , l = t(80)
          , m = t(82)
          , d = t(96)
          , u = t(98)
          , g = t(29);
        function x(a, e) {
            var t = a - e;
            if (t < 6e4) {
                var r = Math.round(t / 1e3);
                return r > 1 ? r + " Seconds Ago" : r + " Second Ago"
            }
            if (t < 36e5) {
                var n = Math.round(t / 6e4);
                return n > 1 ? n + " Minutes Ago" : n + " Minute Ago"
            }
            if (t < 864e5) {
                var s = Math.round(t / 36e5);
                return s > 1 ? s + " Hours Ago" : s + " Hour Ago"
            }
            return t < 2592e6 ? "~ " + Math.round(t / 864e5) + " days Ago" : t < 31536e6 ? "~ " + Math.round(t / 2592e6) + " months Ago" : "~ " + Math.round(t / 31536e6) + " years Ago"
        }
        var p = t(99);
        e.default = function(a) {
            var e = Object(n.useState)(1)
              , f = Object(r.a)(e, 2)
              , b = f[0]
              , w = (f[1],
            Object(n.useState)([]))
              , v = Object(r.a)(w, 2)
              , h = (v[0],
            v[1]);
            Object(n.useEffect)((function() {
                h(u.a.slice((b - 1) * y, b * y))
            }
            ), [b]);
            var y = 0
              , E = (u.a.length,
            a.tikiPrice)
              , T = (a.highestBuyers,
            a.bnbPrice)
              , j = a.bnbHoldings
              , N = a.totalPaid
              , B = a.holdings
              , M = a.paid
              , S = a.lastPaid
              , k = a.address
              , C = a.nextPayoutProgress
              , G = a.nextPayoutValue
              , z = (a.setHoldings,
            a.setPaid,
            a.setLastPaid,
            a.setAddress,
            a.setNextPayoutProgress,
            a.setNextPayoutValue,
            s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
                className: "text-yellow-300"
            }, 0 != G ? G + " BNB" : "Processing"), Date.now() - S >= 36e5 ? " | ".concat(C, "%") : " | ".concat((60 - (Date.now() - S) / 6e4).toFixed(0), "m")))
              , F = B / 1e9 * 55e4
              , I = F / T
              , A = function(a, e) {
                for (var t = Number(a), r = 0; r < e; r++)
                    t += t / 1e9 * 55e4 / E;
                return t.toFixed(0)
            };
            return s.a.createElement("div", {
                className: "pb-10"
            }, s.a.createElement(l.a, {
                className: "text-3xl"
            }, "SAFETIKI Earnings Manager"), s.a.createElement(i.a, {
                holdings: B,
                text: "" !== k && o.a.utils.isAddress(k) && 0 !== j ? "".concat(k, " | BNB In Your Wallet: ").concat(j, " ($").concat(Object(p.a)((j * T).toFixed(2)), ")") : k
            }), s.a.createElement("div", {
                className: "grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            }, s.a.createElement(c.a, {
                title: "Your SAFETIKI Holdings",
                value: "".concat(Object(p.a)(B), " SAFETIKI")
            }, s.a.createElement(d.a, {
                icon: m.CoinsIcon,
                iconColorClass: "text-orange-500 dark:text-orange-100",
                bgColorClass: "bg-orange-100 dark:bg-orange-500",
                className: "mr-4"
            })), s.a.createElement(g.Card, null, s.a.createElement(g.CardBody, {
                className: "flex items-center"
            }, s.a.createElement(d.a, {
                icon: m.PeopleIcon,
                iconColorClass: "text-green-500 dark:text-green-100",
                bgColorClass: "bg-green-100 dark:bg-green-500",
                className: "mr-4"
            }), s.a.createElement("div", null, s.a.createElement("p", {
                className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
            }, "Total BNB Paid"), s.a.createElement("p", {
                className: "text-lg font-semibold text-gray-700 dark:text-gray-200"
            }, s.a.createElement("span", {
                className: "text-yellow-300"
            }, "".concat((M / 1e18).toFixed(4)), " BNB"))))), s.a.createElement(c.a, {
                className: "",
                title: "Last Payout Time",
                value: "".concat(0 === S ? "Never" : x(Date.now(), S))
            }, s.a.createElement(d.a, {
                icon: m.MoneyIcon,
                iconColorClass: "text-blue-500 dark:text-blue-100",
                bgColorClass: "bg-blue-100 dark:bg-blue-500",
                className: "mr-4"
            })), s.a.createElement(g.Card, null, s.a.createElement(g.CardBody, {
                className: "flex items-center"
            }, s.a.createElement(d.a, {
                icon: m.CartIcon,
                iconColorClass: "text-yellow-500 dark:text-yellow-100",
                bgColorClass: "bg-yellow-100 dark:bg-yellow-500",
                className: "mr-4"
            }), s.a.createElement("div", null, s.a.createElement("p", {
                className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
            }, "Next Payout Loading"), s.a.createElement("p", {
                className: "text-lg font-semibold text-gray-700 dark:text-gray-200"
            }, z))))), s.a.createElement("a", {
                className: "w-full h-full",
                href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=#",
                target: "_blank",
                rel: "noopener noreferrer"
            }, s.a.createElement(g.Button, {
                className: "w-full mt-4 mb-4",
                style: {
                    background: "lime !important"
                },
                iconLeft: m.HeartIcon
            }, "Click Here To Reinvest Your Dividends And Earn Even More BNB Over Time")), s.a.createElement("div", {
                className: "grid grid-cols-2 gap-4"
            }, s.a.createElement(g.Card, {
                className: "col-span-2"
            }, s.a.createElement(g.CardBody, {
                className: "flex flex-col text-center items-center"
            }, s.a.createElement("img", {
                className: "w-32 h-32 mb-4 mt-4",
                src: t(125)
            }), s.a.createElement("p", {
                className: "mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center"
            }, "Total BNB Paid To SAFETIKI Holders"), s.a.createElement("br", null), s.a.createElement("p", {
                className: "text-green-400 dark:text-green-400 text-4xl md:text-6xl text-center mb-8"
            }, Object(p.a)(N), " ", s.a.createElement("span", {
                className: "text-yellow-300"
            }, "BNB"), s.a.createElement("br", null), " = $", Object(p.a)((T * N).toFixed(0))))), s.a.createElement(g.Card, {
                className: "col-span-2 lg:col-span-1"
            }, s.a.createElement(g.CardBody, {
                className: "flex flex-col text-center items-center"
            }, s.a.createElement("img", {
                className: "w-32 h-32 mb-4 mt-4",
                src: t(108)
            }), s.a.createElement("p", {
                className: "mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center"
            }, "Your ", Object(p.a)(B), " SAFETIKI Earns:"), s.a.createElement("br", null), s.a.createElement("div", {
                className: "flex"
            }, s.a.createElement("p", {
                className: "text-green-400 dark:text-green-400 text-2xl text-center"
            }, s.a.createElement("span", {
                className: "text-yellow-300"
            }, Object(p.a)(I.toFixed(2)), " BNB"), " ($", Object(p.a)(F.toFixed(2)), ")"), s.a.createElement("span", {
                className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2"
            }, "Per Day")), s.a.createElement("div", {
                className: "flex"
            }, s.a.createElement("p", {
                className: "text-green-400 dark:text-green-400 text-2xl text-center"
            }, s.a.createElement("span", {
                className: "text-yellow-300"
            }, Object(p.a)((7 * I).toFixed(2)), " BNB"), " ($", Object(p.a)((7 * F).toFixed(2)), ")"), s.a.createElement("span", {
                className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2"
            }, "Per Week")), s.a.createElement("div", {
                className: "flex"
            }, s.a.createElement("p", {
                className: "text-green-400 dark:text-green-400 text-2xl text-center"
            }, s.a.createElement("span", {
                className: "text-yellow-300"
            }, Object(p.a)((30 * I).toFixed(2)), " BNB"), " ($", Object(p.a)((30 * F).toFixed(2)), ")"), s.a.createElement("span", {
                className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2"
            }, "Per Month")), s.a.createElement("div", {
                className: "flex"
            }, s.a.createElement("p", {
                className: "text-green-400 dark:text-green-400 text-2xl text-center"
            }, s.a.createElement("span", {
                className: "text-yellow-300"
            }, Object(p.a)((365 * I).toFixed(2)), " BNB"), " ($", Object(p.a)((365 * F).toFixed(2)), ")"), s.a.createElement("span", {
                className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2"
            }, "Per Year")), s.a.createElement("br", null), s.a.createElement("p", {
                className: "text-gray-600 dark:text-gray-400 text-xl text-center -mt-2"
            }, "Estimations are based on $5m trading volume"))), s.a.createElement(g.Card, {
                className: "col-span-2 lg:col-span-1"
            }, s.a.createElement(g.CardBody, {
                className: "flex flex-col text-center items-center"
            }, s.a.createElement("img", {
                className: "w-32 h-32 mb-4 mt-4",
                src: t(108)
            }), s.a.createElement("p", {
                className: "mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center"
            }, "By Reinvesting Dividends Every Day, Your ", Object(p.a)(B), " SAFETIKI Becomes:"), s.a.createElement("br", null), s.a.createElement("div", {
                className: "flex"
            }, s.a.createElement("p", {
                className: "text-green-400 dark:text-green-400 text-2xl text-center"
            }, s.a.createElement("span", {
                className: "text-yellow-300"
            }, 0 != B ? Object(p.a)(A(B, 7)) : "0", " SAFETIKI"), " (", 0 != B ? (A(B, 7) / B).toFixed(2) : "0", "x Earnings)"), s.a.createElement("span", {
                className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1"
            }, "In a Week")), s.a.createElement("div", {
                className: "flex"
            }, s.a.createElement("p", {
                className: "text-green-400 dark:text-green-400 text-2xl text-center"
            }, s.a.createElement("span", {
                className: "text-yellow-300"
            }, 0 != B ? Object(p.a)(A(B, 30)) : "0", " SAFETIKI"), " (", 0 != B ? (A(B, 30) / B).toFixed(2) : "0", "x Earnings)"), s.a.createElement("span", {
                className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1"
            }, "In a Month")), s.a.createElement("div", {
                className: "flex"
            }, s.a.createElement("p", {
                className: "text-green-400 dark:text-green-400 text-2xl text-center"
            }, s.a.createElement("span", {
                className: "text-yellow-300"
            }, 0 != B ? Object(p.a)(A(B, 60)) : "0", " SAFETIKI"), " (", 0 != B ? (A(B, 60) / B).toFixed(2) : "0", "x Earnings)"), s.a.createElement("span", {
                className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1"
            }, "In 2 Months")), s.a.createElement("div", {
                className: "flex"
            }, s.a.createElement("p", {
                className: "text-green-400 dark:text-green-400 text-2xl text-center"
            }, s.a.createElement("span", {
                className: "text-yellow-300"
            }, 0 != B ? Object(p.a)(A(B, 180)) : "0", " SAFETIKI"), " (", 0 != B ? (A(B, 180) / B).toFixed(2) : "0", "x Earnings)"), s.a.createElement("span", {
                className: "text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1"
            }, "In 6 Months")), s.a.createElement("br", null), s.a.createElement("p", {
                className: "text-gray-600 dark:text-gray-400 text-xl text-center -mt-2"
            }, "Estimations are based on current $SAFETIKI price")))))
        }
    },
    80: function(a, e, t) {
        "use strict";
        var r = t(5)
          , n = t.n(r);
        e.a = function(a) {
            var e = a.children;
            return n.a.createElement("h1", {
                className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
            }, e)
        }
    },
    81: function(a, e, t) {
        "use strict";
        var r = t(5)
          , n = t.n(r);
        e.a = function(a) {
            var e = a.text
              , t = a.holdings
              , r = (a.address,
            void 0 !== e && "" !== e && "0x1F5fc924e1263122822973fd9a9B4E3ACBfCf260" === e.substring(0, 2) ? "bg-green-600" : "bg-purple-600");
            return n.a.createElement("div", {
                className: "hidden lg:block"
            }, n.a.createElement("span", {
                className: "flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 ".concat(r, " rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple")
            }, n.a.createElement("div", {
                className: "flex items-center"
            }, n.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-6 w-6 mr-3",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, n.a.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            })), n.a.createElement("span", null, void 0 !== e && "" !== e && "0x1F5fc924e1263122822973fd9a9B4E3ACBfCf260" === e.substring(0, 2) ? t < 1e4 ? e + " - YOU NEED TO HOLD MORE THAN 10K SAFETIKI TO RECEIVE DIVIDENDS" : e : "Please enter your address above")), n.a.createElement("a", {
                href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=#",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Buy SAFETIKI ", n.a.createElement("span", {
                dangerouslySetInnerHTML: {
                    __html: "&RightArrow;"
                }
            }))))
        }
    },
    95: function(a, e, t) {
        "use strict";
        var r = t(5)
          , n = t.n(r)
          , s = t(29);
        e.a = function(a) {
            var e = a.title
              , t = a.value
              , r = (a.button,
            a.children);
            return n.a.createElement(s.Card, null, n.a.createElement(s.CardBody, {
                className: "flex items-center"
            }, r, n.a.createElement("div", null, n.a.createElement("p", {
                className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
            }, e), n.a.createElement("p", {
                className: "text-lg font-semibold text-gray-700 dark:text-gray-200"
            }, t))))
        }
    },
    96: function(a, e, t) {
        "use strict";
        var r = t(5)
          , n = t.n(r)
          , s = t(97)
          , o = t.n(s);
        e.a = function(a) {
            var e = a.icon
              , t = a.iconColorClass
              , r = void 0 === t ? "text-purple-600 dark:text-purple-100" : t
              , s = a.bgColorClass
              , i = void 0 === s ? "bg-purple-100 dark:bg-purple-600" : s
              , c = a.className
              , l = o()("p-3 rounded-full", r, i, c);
            return n.a.createElement("div", {
                className: l
            }, n.a.createElement(e, {
                className: "w-5 h-5"
            }))
        }
    },
    97: function(a, e, t) {
        var r;
        !function() {
            "use strict";
            var t = {}.hasOwnProperty;
            function n() {
                for (var a = [], e = 0; e < arguments.length; e++) {
                    var r = arguments[e];
                    if (r) {
                        var s = typeof r;
                        if ("string" === s || "number" === s)
                            a.push(r);
                        else if (Array.isArray(r) && r.length) {
                            var o = n.apply(null, r);
                            o && a.push(o)
                        } else if ("object" === s)
                            for (var i in r)
                                t.call(r, i) && r[i] && a.push(i)
                    }
                }
                return a.join(" ")
            }
            a.exports ? (n.default = n,
            a.exports = n) : void 0 === (r = function() {
                return n
            }
            .apply(e, [])) || (a.exports = r)
        }()
    },
    98: function(a, e, t) {
        "use strict";
        e.a = [{
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/lokesh_coder/128.jpg",
            name: "Chandler Jacobi",
            job: "Direct Security Executive",
            amount: 989.4,
            status: "primary",
            date: "Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/suribbles/128.jpg",
            name: "Monserrat Marquardt",
            job: "Forward Accountability Producer",
            amount: 471.44,
            status: "danger",
            date: "Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg",
            name: "Lonie Wyman",
            job: "Legacy Program Director",
            amount: 934.24,
            status: "success",
            date: "Fri Apr 03 2020 03:07:53 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg",
            name: "Corine Abernathy",
            job: "Chief Factors Planner",
            amount: 351.28,
            status: "warning",
            date: "Fri Jun 21 2019 20:21:55 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/operatino/128.jpg",
            name: "Lorenz Botsford",
            job: "Central Accountability Developer",
            amount: 355.3,
            status: "neutral",
            date: "Wed Aug 28 2019 15:31:43 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/akmur/128.jpg",
            name: "Everette Botsford",
            job: "Product Group Architect",
            amount: 525.42,
            status: "success",
            date: "Thu Jan 16 2020 09:53:33 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nateschulte/128.jpg",
            name: "Marilou Beahan",
            job: "Future Security Planner",
            amount: 414.99,
            status: "success",
            date: "Mon Oct 28 2019 14:44:31 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jerrybai1907/128.jpg",
            name: "Ceasar Sauer",
            job: "Direct Brand Specialist",
            amount: 488,
            status: "primary",
            date: "Tue Jul 23 2019 00:24:44 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg",
            name: "Rae McDermott",
            job: "Lead Branding Engineer",
            amount: 502.69,
            status: "danger",
            date: "Sat Feb 01 2020 12:57:03 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rtgibbons/128.jpg",
            name: "Mable Steuber",
            job: "National Group Executive",
            amount: 911.09,
            status: "danger",
            date: "Mon Sep 09 2019 12:03:25 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg",
            name: "Julian Glover",
            job: "Global Branding Assistant",
            amount: 656.94,
            status: "danger",
            date: "Fri May 22 2020 17:46:12 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg",
            name: "Duncan Toy",
            job: "Central Intranet Manager",
            amount: 120.78,
            status: "danger",
            date: "Sun Nov 17 2019 11:59:50 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg",
            name: "Blanche Friesen",
            job: "Forward Identity Executive",
            amount: 676.95,
            status: "danger",
            date: "Sun Jun 21 2020 16:46:39 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/haruintesettden/128.jpg",
            name: "Orion Koepp",
            job: "Global Accountability Strategist",
            amount: 447.56,
            status: "danger",
            date: "Thu Jun 04 2020 18:29:41 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vocino/128.jpg",
            name: "Dakota Vandervort",
            job: "Future Assurance Coordinator",
            amount: 765.22,
            status: "danger",
            date: "Fri Jan 31 2020 13:02:55 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/zaki3d/128.jpg",
            name: "Lily Collier",
            job: "Forward Configuration Orchestrator",
            amount: 449.11,
            status: "danger",
            date: "Sun Aug 18 2019 14:52:01 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/evanshajed/128.jpg",
            name: "Kayleigh Schumm",
            job: "Central Division Agent",
            amount: 65.54,
            status: "danger",
            date: "Wed May 06 2020 17:49:09 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mdsisto/128.jpg",
            name: "General McGlynn",
            job: "Central Web Analyst",
            amount: 30.51,
            status: "danger",
            date: "Mon Mar 30 2020 01:24:54 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/woodydotmx/128.jpg",
            name: "Shayna Schumm",
            job: "Future Directives Engineer",
            amount: 313.73,
            status: "danger",
            date: "Wed Jul 03 2019 10:01:06 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mfacchinello/128.jpg",
            name: "Giovanna Sanford",
            job: "Dynamic Interactions Executive",
            amount: 398.3,
            status: "danger",
            date: "Tue Oct 08 2019 17:08:43 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg",
            name: "Emie Mante",
            job: "Direct Factors Supervisor",
            amount: 142.51,
            status: "danger",
            date: "Wed Jul 24 2019 19:17:16 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/tobysaxon/128.jpg",
            name: "Chance Muller",
            job: "Lead Usability Planner",
            amount: 963.26,
            status: "danger",
            date: "Sun Dec 01 2019 14:04:10 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
            name: "Armani Torphy",
            job: "Forward Functionality Analyst",
            amount: 445.23,
            status: "danger",
            date: "Tue Dec 24 2019 13:28:36 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/devinhalladay/128.jpg",
            name: "Braeden Ward",
            job: "Central Integration Director",
            amount: 588.53,
            status: "danger",
            date: "Wed Apr 15 2020 21:40:11 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kimcool/128.jpg",
            name: "Malcolm Price",
            job: "District Program Planner",
            amount: 181.93,
            status: "danger",
            date: "Thu Oct 24 2019 07:09:03 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg",
            name: "Susan Jast",
            job: "Future Paradigm Associate",
            amount: 928.41,
            status: "danger",
            date: "Sun Feb 09 2020 23:22:23 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/peachananr/128.jpg",
            name: "Torrey Reynolds",
            job: "Lead Security Agent",
            amount: 447.37,
            status: "danger",
            date: "Mon Oct 28 2019 04:10:39 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/agromov/128.jpg",
            name: "Travon Harber",
            job: "Legacy Marketing Facilitator",
            amount: 422.48,
            status: "danger",
            date: "Sat Nov 09 2019 05:04:09 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg",
            name: "Hattie Gutkowski",
            job: "Chief Configuration Supervisor",
            amount: 714.34,
            status: "danger",
            date: "Tue Oct 22 2019 22:36:23 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ahmetalpbalkan/128.jpg",
            name: "Demarco Lang",
            job: "Investor Program Designer",
            amount: 536.92,
            status: "danger",
            date: "Wed Apr 08 2020 03:05:59 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nasirwd/128.jpg",
            name: "Glennie Ziemann",
            job: "Dynamic Interactions Analyst",
            amount: 597.25,
            status: "danger",
            date: "Mon Jun 22 2020 21:27:06 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/juaumlol/128.jpg",
            name: "Alta Howe",
            job: "District Intranet Executive",
            amount: 42.28,
            status: "danger",
            date: "Sat Oct 12 2019 22:57:22 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/victordeanda/128.jpg",
            name: "Sydnee Gottlieb",
            job: "Global Response Specialist",
            amount: 868.92,
            status: "danger",
            date: "Wed Feb 05 2020 05:17:34 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/baumannzone/128.jpg",
            name: "Arlene Schmitt",
            job: "Lead Metrics Consultant",
            amount: 364.68,
            status: "danger",
            date: "Thu Oct 03 2019 08:47:32 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/chacky14/128.jpg",
            name: "Hilda Schoen",
            job: "National Solutions Facilitator",
            amount: 260.91,
            status: "danger",
            date: "Wed Dec 04 2019 06:28:30 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kostaspt/128.jpg",
            name: "Chase Bahringer",
            job: "Dynamic Communications Designer",
            amount: 454.61,
            status: "danger",
            date: "Mon Nov 25 2019 16:59:38 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/timgthomas/128.jpg",
            name: "Lucile Hansen",
            job: "Customer Usability Facilitator",
            amount: 982.22,
            status: "danger",
            date: "Sun Aug 25 2019 17:15:59 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/safrankov/128.jpg",
            name: "Mollie Heaney",
            job: "Forward Communications Director",
            amount: 390.33,
            status: "danger",
            date: "Mon Jul 22 2019 01:45:19 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/justme_timothyg/128.jpg",
            name: "Bennie Kuvalis",
            job: "Future Factors Agent",
            amount: 456.64,
            status: "danger",
            date: "Sat Feb 08 2020 07:55:08 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/Chakintosh/128.jpg",
            name: "Jodie Luettgen",
            job: "Customer Implementation Associate",
            amount: 398.37,
            status: "danger",
            date: "Tue Jun 09 2020 11:19:53 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/weavermedia/128.jpg",
            name: "Bethel Quitzon",
            job: "Dynamic Web Strategist",
            amount: 183.58,
            status: "danger",
            date: "Sun Dec 29 2019 18:56:54 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/gmourier/128.jpg",
            name: "Jon Dietrich",
            job: "Legacy Creative Planner",
            amount: 439.01,
            status: "danger",
            date: "Sun Dec 29 2019 11:11:34 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stefvdham/128.jpg",
            name: "Nakia Kihn",
            job: "Central Interactions Coordinator",
            amount: 824.12,
            status: "danger",
            date: "Sun Sep 15 2019 06:43:56 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/thedamianhdez/128.jpg",
            name: "Assunta Grady",
            job: "Investor Operations Specialist",
            amount: 172.97,
            status: "danger",
            date: "Tue Dec 17 2019 01:46:37 GMT-0300 (Brasilia Standard Time)"
        }, {
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg",
            name: "Lukas Klocko",
            job: "Human Usability Associate",
            amount: 515.74,
            status: "danger",
            date: "Mon Jun 15 2020 04:04:32 GMT-0300 (Brasilia Standard Time)"
        }]
    },
    99: function(a, e, t) {
        "use strict";
        function r(a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        t.d(e, "a", (function() {
            return r
        }
        ))
    }
}]);
//# sourceMappingURL=5.800db7ed.chunk.js.map
