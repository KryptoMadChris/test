(this.webpackJsonptikitoken = this.webpackJsonptikitoken || []).push([[1], {
    40: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return u
        }
        )),
        n.d(t, "b", (function() {
            return p
        }
        ));
        var a = n(8)
          , i = n(5)
          , s = n.n(i)
          , u = s.a.createContext()
          , p = function(e) {
            var t = e.children
              , n = Object(i.useState)(!1)
              , p = Object(a.a)(n, 2)
              , r = p[0]
              , d = p[1];
            function y() {
                d(!r)
            }
            function o() {
                d(!1)
            }
            var l = Object(i.useMemo)((function() {
                return {
                    isSidebarOpen: r,
                    toggleSidebar: y,
                    closeSidebar: o
                }
            }
            ), [r]);
            return s.a.createElement(u.Provider, {
                value: l
            }, t)
        }
    },
    48: function(e, t, n) {
        "use strict";
        var a = n(5)
          , i = n.n(a);
        t.a = function() {
            return i.a.createElement("div", {
                className: "w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900"
            }, "Loading...")
        }
    },
    56: function(e, t, n) {
        e.exports = n(78)
    },
    66: function(e, t) {},
    74: function(e, t) {},
    77: function(e, t, n) {},
    78: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(5)
          , i = n.n(a)
          , s = n(33)
          , u = n.n(s)
          , p = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        function r(e, t) {
            navigator.serviceWorker.register(e).then((function(e) {
                e.onupdatefound = function() {
                    var n = e.installing;
                    null != n && (n.onstatechange = function() {
                        "installed" === n.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),
                        t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)))
                    }
                    )
                }
            }
            )).catch((function(e) {
                console.error("Error during service worker registration:", e)
            }
            ))
        }
        var d = n(29)
          , y = (n(2),
        n(35),
        n(8))
          , o = (n(34),
        n(30))
          , l = n(7)
          , c = n(21);
        var m, b = function() {
            var e = Object(a.useState)("")
              , t = Object(y.a)(e, 2)
              , n = t[0]
              , s = t[1]
              , u = Object(l.g)();
            return Object(a.useEffect)((function() {
                u.pathname.slice(1) ? setTimeout((function() {
                    return s("Navigated to ".concat(u.pathname.slice(1), " page."))
                }
                ), 500) : s("")
            }
            ), [u]),
            i.a.createElement("span", {
                className: "sr-only",
                role: "status",
                "aria-live": "polite",
                "aria-atomic": "true"
            }, n)
        }, T = Object(a.lazy)((function() {
            return n.e(13).then(n.bind(null, 228))
        }
        )), f = new c.a.providers.JsonRpcProvider("https://bsc-dataseed1.defibit.io/"), v = new c.a.Contract("0xC1ca360e70B09C08E0F9D53E9923F9135cEC38f0",[{
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address"
            }, {
                indexed: !1,
                internalType: "bool",
                name: "isExcluded",
                type: "bool"
            }],
            name: "ExcludeFromFees",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address[]",
                name: "accounts",
                type: "address[]"
            }, {
                indexed: !1,
                internalType: "bool",
                name: "isExcluded",
                type: "bool"
            }],
            name: "ExcludeMultipleAccountsFromFees",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address"
            }, {
                indexed: !0,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "bool",
                name: "earlyParticipant",
                type: "bool"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "numberOfBuyers",
                type: "uint256"
            }],
            name: "FixedSaleBuy",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address[]",
                name: "participants",
                type: "address[]"
            }],
            name: "FixedSaleEarlyParticipantsAdded",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "uint256",
                name: "newValue",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "uint256",
                name: "oldValue",
                type: "uint256"
            }],
            name: "GasForProcessingUpdated",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "newLiquidityWallet",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "oldLiquidityWallet",
                type: "address"
            }],
            name: "LiquidityWalletUpdated",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "iterations",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "claims",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "lastProcessedIndex",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "bool",
                name: "automatic",
                type: "bool"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "gas",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "processor",
                type: "address"
            }],
            name: "ProcessedDividendTracker",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "tokensSwapped",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "SendDividends",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "pair",
                type: "address"
            }, {
                indexed: !0,
                internalType: "bool",
                name: "value",
                type: "bool"
            }],
            name: "SetAutomatedMarketMakerPair",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "tokensSwapped",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "ethReceived",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "tokensIntoLiqudity",
                type: "uint256"
            }],
            name: "SwapAndLiquify",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "newAddress",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "oldAddress",
                type: "address"
            }],
            name: "UpdateDividendTracker",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "newAddress",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "oldAddress",
                type: "address"
            }],
            name: "UpdateUniswapV2Router",
            type: "event"
        }, {
            inputs: [],
            name: "BNBRewardsFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address[]",
                name: "accounts",
                type: "address[]"
            }],
            name: "addFixedSaleEarlyParticipants",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "automatedMarketMakerPairs",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "bounceFixedSaleWallet",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }],
            name: "decreaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "dividendTokenBalanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "dividendTracker",
            outputs: [{
                internalType: "contract SAFETIKIDividendTracker",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }, {
                internalType: "bool",
                name: "excluded",
                type: "bool"
            }],
            name: "excludeFromFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address[]",
                name: "accounts",
                type: "address[]"
            }, {
                internalType: "bool",
                name: "excluded",
                type: "bool"
            }],
            name: "excludeMultipleAccountsFromFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "fixedSaleBuyers",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "fixedSaleEarlyParticipantBuysThreshold",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "fixedSaleEarlyParticipantDuration",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "fixedSaleEarlyParticipants",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "fixedSaleStartTimestamp",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gasForProcessing",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "getAccountDividendsInfo",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "int256",
                name: "",
                type: "int256"
            }, {
                internalType: "int256",
                name: "",
                type: "int256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }],
            name: "getAccountDividendsInfoAtIndex",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "int256",
                name: "",
                type: "int256"
            }, {
                internalType: "int256",
                name: "",
                type: "int256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getClaimWait",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getLastProcessedIndex",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getNumberOfDividendTokenHolders",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getTotalDividendsDistributed",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getTradingIsEnabled",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            }],
            name: "increaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "isExcludedFromFees",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "liquidityFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "liquidityWallet",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "maxSellTransactionAmount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "numberOfFixedSaleBuys",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "gas",
                type: "uint256"
            }],
            name: "processDividendTracker",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "sellFeeIncreaseFactor",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "pair",
                type: "address"
            }, {
                internalType: "bool",
                name: "value",
                type: "bool"
            }],
            name: "setAutomatedMarketMakerPair",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "swapTokensAtAmount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalFees",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "tradingEnabledTimestamp",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "recipient",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                internalType: "address",
                name: "recipient",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "uniswapV2Pair",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "uniswapV2Router",
            outputs: [{
                internalType: "contract IUniswapV2Router02",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "claimWait",
                type: "uint256"
            }],
            name: "updateClaimWait",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newAddress",
                type: "address"
            }],
            name: "updateDividendTracker",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "newValue",
                type: "uint256"
            }],
            name: "updateGasForProcessing",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newLiquidityWallet",
                type: "address"
            }],
            name: "updateLiquidityWallet",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newAddress",
                type: "address"
            }],
            name: "updateUniswapV2Router",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "withdrawableDividendOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            stateMutability: "payable",
            type: "receive"
        }],f);
        new c.a.Contract("0x0e20a67e1052abc9cc1b6b65cb311b5957168ba0",[{
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "weiAmount",
                type: "uint256"
            }],
            name: "DividendWithdrawn",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "weiAmount",
                type: "uint256"
            }],
            name: "DividendsDistributed",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            inputs: [{
                internalType: "address",
                name: "_owner",
                type: "address"
            }],
            name: "accumulativeDividendOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }],
            name: "decreaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "distributeDividends",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_owner",
                type: "address"
            }],
            name: "dividendOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            }],
            name: "increaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address[]",
                name: "accounts",
                type: "address[]"
            }, {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }],
            name: "setBalances",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalDividendsDistributed",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalDividendsToDistribute",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "recipient",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                internalType: "address",
                name: "recipient",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "withdrawDividend",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_owner",
                type: "address"
            }],
            name: "withdrawableDividendOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_owner",
                type: "address"
            }],
            name: "withdrawnDividendOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            stateMutability: "payable",
            type: "receive"
        }],f);
        var w = function() {
            var e = Object(a.useState)(0)
              , t = Object(y.a)(e, 2)
              , n = t[0]
              , s = t[1]
              , u = Object(a.useState)(0)
              , p = Object(y.a)(u, 2)
              , r = p[0]
              , d = p[1]
              , w = Object(a.useState)(0)
              , x = Object(y.a)(w, 2)
              , M = x[0]
              , g = x[1]
              , h = Object(a.useState)(0)
              , O = Object(y.a)(h, 2)
              , S = O[0]
              , j = O[1]
              , k = Object(a.useState)([])
              , E = Object(y.a)(k, 2)
              , A = E[0]
              , F = (E[1],
            Object(a.useState)(0))
              , P = Object(y.a)(F, 2)
              , D = P[0]
              , I = P[1]
              , W = Object(a.useState)(0)
              , _ = Object(y.a)(W, 2)
              , B = _[0]
              , V = _[1]
              , L = Object(a.useState)(0)
              , U = Object(y.a)(L, 2)
              , N = U[0]
              , R = U[1]
              , q = Object(a.useState)(0)
              , C = Object(y.a)(q, 2)
              , H = C[0]
              , J = C[1]
              , G = Object(a.useState)(0)
              , z = Object(y.a)(G, 2)
              , K = z[0]
              , $ = z[1]
              , Q = Object(a.useState)(!0)
              , X = Object(y.a)(Q, 2)
              , Y = X[0]
              , Z = X[1]
              , ee = Object(a.useState)(!0)
              , te = Object(y.a)(ee, 2)
              , ne = te[0]
              , ae = te[1]
              , ie = Object(a.useState)(!0)
              , se = Object(y.a)(ie, 2);
            se[0],
            se[1];
            var ue = Object(a.useState)(localStorage.getItem("address") || "")
              , pe = Object(y.a)(ue, 2)
              , re = pe[0]
              , de = pe[1];
            Object(a.useEffect)((function() {
                fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=USD&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false").then((function(e) {
                    e.json().then((function(e) {
                        g(e.binancecoin.usd)
                    }
                    ))
                }
                ))
            }
            ), []),
            Object(a.useEffect)((function() {
                c.a.utils.isAddress(re) && (localStorage.getItem("address") !== re && localStorage.setItem("address", re),
                ye(re))
            }
            ), [re, Y]),
            Object(a.useEffect)((function() {
                v.getTotalDividendsDistributed().then((function(e) {
                    s((e / 1e18).toFixed(0)),
                    setTimeout((function() {
                        ae(!ne)
                    }
                    ), 5e3)
                }
                ))
            }
            ), [ne]);
            var ye = function() {
                v.getNumberOfDividendTokenHolders().then((function(e) {
                    v.balanceOf(re).then((function(t) {
                        I((t / 1e18).toFixed(0)),
                        j(.025),
                        v.getAccountDividendsInfo(re).then((function(t) {
                            f.getBalance(re).then((function(n) {
                                d((n / 1e18).toFixed(4)),
                                V(parseInt(t[4]._hex, 16) - parseInt(t[3]._hex, 16)),
                                R(1e3 * parseInt(t[5]._hex, 16)),
                                J((100 - parseInt(t[2]._hex, 16) / parseInt(e._hex, 16) * 100).toFixed(0)),
                                $((parseInt(t[3]._hex, 16) / 1e18).toFixed(4)),
                                window.clearTimeout(m),
                                m = window.setTimeout((function() {
                                    Z(!Y)
                                }
                                ), 9e3)
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ))
            };
            return i.a.createElement(i.a.Fragment, null, i.a.createElement(o.a, null, i.a.createElement(b, null), i.a.createElement(l.c, null, i.a.createElement(l.a, {
                path: "/",
                render: function(e) {
                    return i.a.createElement(T, Object.assign({}, e, {
                        tikiPrice: S,
                        address: re,
                        setAddress: de,
                        holdings: D,
                        setHoldings: I,
                        paid: B,
                        setPaid: V,
                        lastPaid: N,
                        setLastPaid: R,
                        nextPayoutProgress: H,
                        setNextPayoutProgress: J,
                        totalPaid: n,
                        nextPayoutValue: K,
                        setNextPayoutValue: $,
                        bnbHoldings: r,
                        bnbPrice: M,
                        highestBuyers: A
                    }))
                }
            }))))
        }
          , x = n(40)
          , M = n(48);
        n(77);
        u.a.render(i.a.createElement(x.b, null, i.a.createElement(a.Suspense, {
            fallback: i.a.createElement(M.a, null)
        }, i.a.createElement(d.Windmill, {
            usePreferences: !0,
            dark: !0
        }, i.a.createElement(w, null)))), document.getElementById("root")),
        function(e) {
            if ("serviceWorker"in navigator) {
                if (new URL("",window.location.href).origin !== window.location.origin)
                    return;
                window.addEventListener("load", (function() {
                    var t = "".concat("", "/service-worker.js");
                    p ? (!function(e, t) {
                        fetch(e, {
                            headers: {
                                "Service-Worker": "script"
                            }
                        }).then((function(n) {
                            var a = n.headers.get("content-type");
                            404 === n.status || null != a && -1 === a.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                e.unregister().then((function() {
                                    window.location.reload()
                                }
                                ))
                            }
                            )) : r(e, t)
                        }
                        )).catch((function() {
                            console.log("No internet connection found. App is running in offline mode.")
                        }
                        ))
                    }(t, e),
                    navigator.serviceWorker.ready.then((function() {
                        console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")
                    }
                    ))) : r(t, e)
                }
                ))
            }
        }()
    }
}, [[56, 2, 4]]]);
//# sourceMappingURL=main.576b6ab9.chunk.js.map
