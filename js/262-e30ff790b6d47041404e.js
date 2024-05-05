(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [262], {
        7247: function(e, A, s) {
            "use strict";
            s(1664), s(8677), s(8037), s(4570), s(3299), s(7294), s(5893)
        },
        8805: function(e, A, s) {
            "use strict";
            s(1664), s(5893)
        },
        8677: function(e, A, s) {
            "use strict";
            s.d(A, {
                Z: function() {
                    return l
                }
            });
            var n = s(1138),
                i = s.n(n),
                c = s(5675),
                r = s(9398),
                t = s(7625),
                o = s(7294),
                a = s(5893);

            function l(e) {
                var A = e.slides,
                    s = (0, o.useState)(0),
                    n = s[0],
                    l = s[1],
                    h = A.length;
                return !Array.isArray(A) || A.length <= 0 ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("section", {
                        className: i().slider,
                        children: [(0, a.jsx)(t.G, {
                            icon: r.OFe,
                            className: i().lefticon,
                            onClick: function() {
                                l(0 === n ? h - 1 : n - 1)
                            }
                        }), (0, a.jsx)(t.G, {
                            icon: r.FR9,
                            className: i().righticon,
                            onClick: function() {
                                l(n === h - 1 ? 0 : n + 1), console.log(A)
                            }
                        }), A.map((function(e, A) {
                            return (0, a.jsx)("div", {
                                className: A === n ? i().slideactive : i().slide,
                                children: A === n && (0, a.jsx)(c.default, {
                                    src: e.image,
                                    height: 300,
                                    width: 550
                                })
                            }, A)
                        }))]
                    })
                })
            }
        },
        4570: function(e, A, s) {
            "use strict";
            s(4007)
        },
        7355: function(e, A, s) {
            "use strict";
            s(5893)
        },
        8037: function(e, A, s) {
            "use strict";
            s.d(A, {
                Z: function() {
                    return o
                }
            });
            var n = s(7625),
                i = s(6814),
                c = s.n(i),
                r = s(1417),
                t = s(5893);

            function o() {
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("div", {
                        className: c().social1,
                        children: (0, t.jsxs)("div", {
                            className: c().icons1,
                            children: [(0, t.jsx)("a", {
                                rel: "noopener noreferrer",
                                href: "https://www.instagram.com/ecell_rgpv/",
                                target: "_blank",
                                children: (0, t.jsx)(n.G, {
                                    icon: r.Zzi
                                })
                            }), (0, t.jsx)("a", {
                                rel: "noopener noreferrer",
                                href: "https://www.facebook.com/ECellRGPV/",
                                target: "_blank",
                                children: (0, t.jsx)(n.G, {
                                    icon: r.neY
                                })
                            }), (0, t.jsx)("a", {
                                rel: "noopener noreferrer",
                                href: "https://twitter.com/ECellRGPV",
                                target: "_blank",
                                children: (0, t.jsx)(n.G, {
                                    icon: r.mdU
                                })
                            }), (0, t.jsx)("a", {
                                rel: "noopener noreferrer",
                                href: "https://in.linkedin.com/company/ecellrgpv",
                                target: "_blank",
                                children: (0, t.jsx)(n.G, {
                                    icon: r.D9H
                                })
                            })]
                        })
                    })
                })
            }
        },
        4007: function(e, A) {
            "use strict";
            A.Z = {
                src: "/_next/static/image/assets/images/tech/sanchit.db959608b3f5fc6600f48eddf52109e4.jpeg",
                height: 1082,
                width: 1080,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABBAEFAAAAAAAAAAAAAAABAAIDESEEBRIxcf/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAGhEAAQUBAAAAAAAAAAAAAAAAAAECAwQREv/aAAwDAQACEQMRAD8Am9t0rmyW6NwloDkyUAsJOK96wiIhuUs2KccbuU0//9k="
            }
        },
        1138: function(e) {
            e.exports = {
                slider: "carousel_slider__23F00",
                image: "carousel_image__2AmjX",
                lefticon: "carousel_lefticon__31JNx",
                righticon: "carousel_righticon__1zonw",
                slide: "carousel_slide__2P8ZA",
                slideactive: "carousel_slideactive__Q1o2B"
            }
        },
        6814: function(e) {
            e.exports = {
                social1: "socialmedianew_social1__12hP8",
                icons1: "socialmedianew_icons1__Yrh02"
            }
        }
    }
]);