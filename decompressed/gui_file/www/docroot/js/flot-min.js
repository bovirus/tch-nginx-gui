(function(g) {
	g.color = {};
	g.color.make = function(k, n, a, h) {
		var d = {};
		d.r = k || 0;
		d.g = n || 0;
		d.b = a || 0;
		d.a = null != h ? h : 1;
		d.add = function(a, g) {
			for (var h = 0; h < a.length; ++h) d[a.charAt(h)] += g;
			return d.normalize()
		};
		d.scale = function(a, g) {
			for (var h = 0; h < a.length; ++h) d[a.charAt(h)] *= g;
			return d.normalize()
		};
		d.toString = function() {
			return 1 <= d.a ? "rgb(" + [d.r, d.g, d.b].join() + ")" : "rgba(" + [d.r, d.g, d.b, d.a]
			.join() + ")"
		};
		d.normalize = function() {
			function a(d, g, h) {
				return g < d ? d : g > h ? h : g
			}
			d.r = a(0, parseInt(d.r), 255);
			d.g = a(0, parseInt(d.g), 255);
			d.b = a(0, parseInt(d.b), 255);
			d.a = a(0, d.a, 1);
			return d
		};
		d.clone = function() {
			return g.color.make(d.r, d.b, d.g, d.a)
		};
		return d.normalize()
	};
	g.color.extract = function(k, n) {
		var a;
		do {
			a = k.css(n).toLowerCase();
			if ("" != a && "transparent" != a) break;
			k = k.parent()
		} while (k.length && !g.nodeName(k.get(0), "body"));
		"rgba(0, 0, 0, 0)" == a && (a = "transparent");
		return g.color.parse(a)
	};
	g.color.parse = function(z) {
		var n, a = g.color.make;
		if (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(z)) return a(parseInt(n[
				1],
			10), parseInt(n[2], 10), parseInt(n[3], 10));
		if (n = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/
			.exec(z)) return a(parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10), parseFloat(n[4]));
		if (n =
			/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/
			.exec(z)) return a(2.55 * parseFloat(n[1]), 2.55 * parseFloat(n[2]), 2.55 * parseFloat(n[3]));
		if (n =
			/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/
			.exec(z)) return a(2.55 *
			parseFloat(n[1]), 2.55 * parseFloat(n[2]), 2.55 * parseFloat(n[3]), parseFloat(n[4]));
		if (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(z)) return a(parseInt(n[1], 16),
			parseInt(n[2], 16), parseInt(n[3], 16));
		if (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(z)) return a(parseInt(n[1] + n[1], 16),
			parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16));
		z = g.trim(z).toLowerCase();
		if ("transparent" == z) return a(255, 255, 255, 0);
		n = k[z] || [0, 0, 0];
		return a(n[0], n[1], n[2])
	};
	var k = {
		aqua: [0, 255, 255],
		azure: [240, 255, 255],
		beige: [245,
			245, 220
		],
		black: [0, 0, 0],
		blue: [0, 0, 255],
		brown: [165, 42, 42],
		cyan: [0, 255, 255],
		darkblue: [0, 0, 139],
		darkcyan: [0, 139, 139],
		darkgrey: [169, 169, 169],
		darkgreen: [0, 100, 0],
		darkkhaki: [189, 183, 107],
		darkmagenta: [139, 0, 139],
		darkolivegreen: [85, 107, 47],
		darkorange: [255, 140, 0],
		darkorchid: [153, 50, 204],
		darkred: [139, 0, 0],
		darksalmon: [233, 150, 122],
		darkviolet: [148, 0, 211],
		fuchsia: [255, 0, 255],
		gold: [255, 215, 0],
		green: [0, 128, 0],
		indigo: [75, 0, 130],
		khaki: [240, 230, 140],
		lightblue: [173, 216, 230],
		lightcyan: [224, 255, 255],
		lightgreen: [144, 238,
			144
		],
		lightgrey: [211, 211, 211],
		lightpink: [255, 182, 193],
		lightyellow: [255, 255, 224],
		lime: [0, 255, 0],
		magenta: [255, 0, 255],
		maroon: [128, 0, 0],
		navy: [0, 0, 128],
		olive: [128, 128, 0],
		orange: [255, 165, 0],
		pink: [255, 192, 203],
		purple: [128, 0, 128],
		violet: [128, 0, 128],
		red: [255, 0, 0],
		silver: [192, 192, 192],
		white: [255, 255, 255],
		yellow: [255, 255, 0]
	}
})(jQuery);
(function(g) {
	function k(a, h) {
		var d = h.children("." + a)[0];
		if (null == d && (d = document.createElement("canvas"), d.className = a, g(d).css({
				direction: "ltr",
				position: "absolute",
				left: 0,
				top: 0
			}).appendTo(h), !d.getContext))
			if (window.G_vmlCanvasManager) d = window.G_vmlCanvasManager.initElement(d);
			else throw Error(
				"Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode."
				);
		this.element =
			d;
		d = this.context = d.getContext("2d");
		this.pixelRatio = (window.devicePixelRatio || 1) / (d.webkitBackingStorePixelRatio || d
			.mozBackingStorePixelRatio || d.msBackingStorePixelRatio || d.oBackingStorePixelRatio || d
			.backingStorePixelRatio || 1);
		this.resize(h.width(), h.height());
		this.textContainer = null;
		this.text = {};
		this._textCache = {}
	}

	function z(a, h, d, n) {
		function f(b, e) {
			e = [F].concat(e);
			for (var c = 0; c < b.length; ++c) b[c].apply(this, e)
		}

		function A(b) {
			for (var e = [], c = 0; c < b.length; ++c) {
				var l = g.extend(!0, {}, m.series);
				null != b[c].data ?
					(l.data = b[c].data, delete b[c].data, g.extend(!0, l, b[c]), b[c].data = l.data) : l.data = b[
						c];
				e.push(l)
			}
			D = e;
			c = D.length;
			e = -1;
			for (b = 0; b < D.length; ++b) l = D[b].color, null != l && (c--, "number" == typeof l && l > e && (e =
				l));
			c <= e && (c = e + 1);
			var e = [],
				s = m.colors,
				J = s.length,
				B = 0;
			for (b = 0; b < c; b++) l = g.color.parse(s[b % J] || "#666"), 0 == b % J && b && (B = 0 <= B ? 0.5 >
				B ? -B - 0.2 : 0 : -B), e[b] = l.scale("rgb", 1 + B);
			for (b = c = 0; b < D.length; ++b) {
				l = D[b];
				null == l.color ? (l.color = e[c].toString(), ++c) : "number" == typeof l.color && (l.color = e[l
					.color].toString());
				if (null == l.lines.show) {
					var E,
						s = !0;
					for (E in l)
						if (l[E] && l[E].show) {
							s = !1;
							break
						} s && (l.lines.show = !0)
				}
				null == l.lines.zero && (l.lines.zero = !!l.lines.fill);
				l.xaxis = r(N, w(l, "x"));
				l.yaxis = r(R, w(l, "y"))
			}
			z()
		}

		function w(b, e) {
			var c = b[e + "axis"];
			"object" == typeof c && (c = c.n);
			"number" != typeof c && (c = 1);
			return c
		}

		function q() {
			return g.grep(N.concat(R), function(b) {
				return b
			})
		}

		function G(b) {
			var e = {},
				c, l;
			for (c = 0; c < N.length; ++c)(l = N[c]) && l.used && (e["x" + l.n] = l.c2p(b.left));
			for (c = 0; c < R.length; ++c)(l = R[c]) && l.used && (e["y" + l.n] = l.c2p(b.top));
			void 0 !== e.x1 &&
				(e.x = e.x1);
			void 0 !== e.y1 && (e.y = e.y1);
			return e
		}

		function r(b, e) {
			b[e - 1] || (b[e - 1] = {
				n: e,
				direction: b == N ? "x" : "y",
				options: g.extend(!0, {}, b == N ? m.xaxis : m.yaxis)
			});
			return b[e - 1]
		}

		function z() {
			function b(b, c, e) {
				c < b.datamin && c != -l && (b.datamin = c);
				e > b.datamax && e != l && (b.datamax = e)
			}
			var e = Number.POSITIVE_INFINITY,
				c = Number.NEGATIVE_INFINITY,
				l = Number.MAX_VALUE,
				s, J, B, E, u, m, a, d, p, h, r, k;
			g.each(q(), function(b, l) {
				l.datamin = e;
				l.datamax = c;
				l.used = !1
			});
			for (s = 0; s < D.length; ++s) u = D[s], u.datapoints = {
				points: []
			}, f(Q.processRawData,
				[u, u.data, u.datapoints]);
			for (s = 0; s < D.length; ++s) {
				u = D[s];
				r = u.data;
				k = u.datapoints.format;
				if (!k) {
					k = [];
					k.push({
						x: !0,
						number: !0,
						required: !0
					});
					k.push({
						y: !0,
						number: !0,
						required: !0
					});
					if (u.bars.show || u.lines.show && u.lines.fill) k.push({
						y: !0,
						number: !0,
						required: !1,
						defaultValue: 0,
						autoscale: !!(u.bars.show && u.bars.zero || u.lines.show && u.lines.zero)
					}), u.bars.horizontal && (delete k[k.length - 1].y, k[k.length - 1].x = !0);
					u.datapoints.format = k
				}
				if (null == u.datapoints.pointsize) {
					u.datapoints.pointsize = k.length;
					a = u.datapoints.pointsize;
					m = u.datapoints.points;
					var aa = u.lines.show && u.lines.steps;
					u.xaxis.used = u.yaxis.used = !0;
					for (J = B = 0; J < r.length; ++J, B += a) {
						h = r[J];
						var n = null == h;
						if (!n)
							for (E = 0; E < a; ++E) {
								d = h[E];
								if (p = k[E]) p.number && null != d && (d = +d, isNaN(d) ? d = null : Infinity ==
									d ? d = l : -Infinity == d && (d = -l)), null == d && (p.required && (n = !
									0), null != p.defaultValue && (d = p.defaultValue));
								m[B + E] = d
							}
						if (n)
							for (E = 0; E < a; ++E) d = m[B + E], null != d && (p = k[E], !1 !== p.autoscale && (p
								.x && b(u.xaxis, d, d), p.y && b(u.yaxis, d, d))), m[B + E] = null;
						else if (aa && 0 < B && null != m[B - a] && m[B - a] != m[B] &&
							m[B - a + 1] != m[B + 1]) {
							for (E = 0; E < a; ++E) m[B + a + E] = m[B + E];
							m[B + 1] = m[B - a + 1];
							B += a
						}
					}
				}
			}
			for (s = 0; s < D.length; ++s) u = D[s], f(Q.processDatapoints, [u, u.datapoints]);
			for (s = 0; s < D.length; ++s) {
				u = D[s];
				m = u.datapoints.points;
				a = u.datapoints.pointsize;
				k = u.datapoints.format;
				h = B = e;
				aa = r = c;
				for (J = 0; J < m.length; J += a)
					if (null != m[J])
						for (E = 0; E < a; ++E)
							if (d = m[J + E], (p = k[E]) && !(!1 === p.autoscale || d == l || d == -l)) p.x && (d <
								B && (B = d), d > r && (r = d)), p.y && (d < h && (h = d), d > aa && (aa = d));
				if (u.bars.show) {
					switch (u.bars.align) {
						case "left":
							J = 0;
							break;
						case "right":
							J = -u.bars.barWidth;
							break;
						default:
							J = -u.bars.barWidth / 2
					}
					u.bars.horizontal ? (h += J, aa += J + u.bars.barWidth) : (B += J, r += J + u.bars.barWidth)
				}
				b(u.xaxis, B, r);
				b(u.yaxis, h, aa)
			}
			g.each(q(), function(b, l) {
				l.datamin == e && (l.datamin = null);
				l.datamax == c && (l.datamax = null)
			})
		}

		function H() {
			da && clearTimeout(da);
			W.unbind("mousemove", T);
			W.unbind("mouseleave", ka);
			W.unbind("click", Z);
			f(Q.shutdown, [W])
		}

		function L(b) {
			function e(b) {
				return b
			}
			var c, l, s = b.options.transform || e,
				m = b.options.inverseTransform;
			"x" == b.direction ? (c = b.scale = X / Math.abs(s(b.max) - s(b.min)),
				l = Math.min(s(b.max), s(b.min))) : (c = b.scale = S / Math.abs(s(b.max) - s(b.min)), c = -c,
				l = Math.max(s(b.max), s(b.min)));
			b.p2c = s == e ? function(b) {
				return (b - l) * c
			} : function(b) {
				return (s(b) - l) * c
			};
			b.c2p = m ? function(b) {
				return m(l + b / c)
			} : function(b) {
				return l + b / c
			}
		}

		function $(b) {
			var e = b.labelWidth,
				c = b.labelHeight,
				l = b.options.position,
				s = "x" === b.direction,
				a = b.options.tickLength,
				B = m.grid.axisMargin,
				E = m.grid.labelMargin,
				u = !0,
				d = !0,
				p = !0,
				h = !1;
			g.each(s ? N : R, function(c, e) {
				if (e && (e.show || e.reserveSpace)) e === b ? h = !0 : e.options.position ===
					l && (h ? d = !1 : u = !1), h || (p = !1)
			});
			d && (B = 0);
			null == a && (a = p ? "full" : 5);
			isNaN(+a) || (E += +a);
			s ? (c += E, "bottom" == l ? (v.bottom += c + B, b.box = {
				top: K.height - v.bottom,
				height: c
			}) : (b.box = {
				top: v.top + B,
				height: c
			}, v.top += c + B)) : (e += E, "left" == l ? (b.box = {
				left: v.left + B,
				width: e
			}, v.left += e + B) : (v.right += e + B, b.box = {
				left: K.width - v.right,
				width: e
			}));
			b.position = l;
			b.tickLength = a;
			b.box.padding = E;
			b.innermost = u
		}

		function t() {
			var b = m.grid.minBorderMargin,
				e;
			if (null == b)
				for (e = b = 0; e < D.length; ++e) b = Math.max(b, 2 * (D[e].points.radius + D[e].points.lineWidth /
					2));
			var c = b,
				l = b,
				s = b,
				a = b;
			g.each(q(), function(b, e) {
				e.reserveSpace && (e.ticks && e.ticks.length) && ("x" === e.direction ? (c = Math.max(c, e
					.labelWidth / 2), l = Math.max(l, e.labelWidth / 2)) : (a = Math.max(a, e
					.labelHeight / 2), s = Math.max(s, e.labelHeight / 2)))
			});
			v.left = Math.ceil(Math.max(c, v.left));
			v.right = Math.ceil(Math.max(l, v.right));
			v.top = Math.ceil(Math.max(s, v.top));
			v.bottom = Math.ceil(Math.max(a, v.bottom))
		}

		function U() {
			var b, e = q(),
				c = m.grid.show;
			for (b in v) {
				var l = m.grid.margin || 0;
				v[b] = "number" == typeof l ? l : l[b] || 0
			}
			f(Q.processOffset,
				[v]);
			for (b in v) v[b] = "object" == typeof m.grid.borderWidth ? v[b] + (c ? m.grid.borderWidth[b] : 0) : v[
				b] + (c ? m.grid.borderWidth : 0);
			g.each(e, function(b, c) {
				var e = c.options;
				c.show = null == e.show ? c.used : e.show;
				c.reserveSpace = null == e.reserveSpace ? c.show : e.reserveSpace;
				var e = c.options,
					l = +(null != e.min ? e.min : c.datamin),
					a = +(null != e.max ? e.max : c.datamax),
					m = a - l;
				if (0 == m) {
					if (m = 0 == a ? 1 : 0.01, null == e.min && (l -= m), null == e.max || null != e.min)
						a += m
				} else {
					var d = e.autoscaleMargin;
					null != d && (null == e.min && (l -= m * d, 0 > l && (null != c.datamin && 0 <=
						c.datamin) && (l = 0)), null == e.max && (a += m * d, 0 < a && (null != c
						.datamax && 0 >= c.datamax) && (a = 0)))
				}
				c.min = l;
				c.max = a
			});
			if (c) {
				l = g.grep(e, function(b) {
					return b.show || b.reserveSpace
				});
				g.each(l, function(b, c) {
					I(c);
					var e = c.options.ticks,
						l = [];
					null == e || "number" == typeof e && 0 < e ? l = c.tickGenerator(c) : e && (l = typeof e === "function" ? e(c) : e);
					var a;
					c.ticks = [];
					for (e = 0; e < l.length; ++e) {
						var m = null,
							d = l[e];
						"object" == typeof d ? (a = +d[0], 1 < d.length && (m = d[1])) : a = +d;
						null == m && (m = c.tickFormatter(a, c));
						isNaN(a) || c.ticks.push({
							v: a,
							label: m
						})
					}
					l = c.ticks;
					c.options.autoscaleMargin &&
						0 < l.length && (null == c.options.min && (c.min = Math.min(c.min, l[0].v)), null ==
							c.options.max && 1 < l.length && (c.max = Math.max(c.max, l[l.length - 1].v)));
					l = c.options;
					e = c.ticks || [];
					a = l.labelWidth || 0;
					for (var m = l.labelHeight || 0, d = a || ("x" == c.direction ? Math.floor(K.width / (e
								.length || 1)) : null), p = "flot-" + c.direction + "-axis flot-" + c
							.direction + c.n + "-axis " + (c.direction + "Axis " + c.direction + c.n +
								"Axis"), h = l.font || "flot-tick-label tickLabel", k = 0; k < e.length; ++
						k) {
						var f = e[k];
						f.label && (f = K.getTextInfo(p, f.label, h, null, d), a = Math.max(a,
							f.width), m = Math.max(m, f.height))
					}
					c.labelWidth = l.labelWidth || a;
					c.labelHeight = l.labelHeight || m
				});
				for (b = l.length - 1; 0 <= b; --b) $(l[b]);
				t();
				g.each(l, function(b, c) {
					"x" == c.direction ? (c.box.left = v.left - c.labelWidth / 2, c.box.width = K.width - v
						.left - v.right + c.labelWidth) : (c.box.top = v.top - c.labelHeight / 2, c.box
						.height = K.height - v.bottom - v.top + c.labelHeight)
				})
			}
			X = K.width - v.left - v.right;
			S = K.height - v.bottom - v.top;
			g.each(e, function(b, c) {
				L(c)
			});
			c && oa();
			pa()
		}

		function I(b) {
			var e = b.options,
				c;
			c = "number" == typeof e.ticks && 0 < e.ticks ?
				e.ticks : 0.3 * Math.sqrt("x" == b.direction ? K.width : K.height);
			c = (b.max - b.min) / c;
			var l = -Math.floor(Math.log(c) / Math.LN10),
				s = e.tickDecimals;
			null != s && l > s && (l = s);
			var a = Math.pow(10, -l),
				m = c / a,
				d;
			if (1.5 > m) d = 1;
			else if (3 > m) {
				if (d = 2, 2.25 < m && (null == s || l + 1 <= s)) d = 2.5, ++l
			} else d = 7.5 > m ? 5 : 10;
			d *= a;
			null != e.minTickSize && d < e.minTickSize && (d = e.minTickSize);
			b.delta = c;
			b.tickDecimals = Math.max(0, null != s ? s : l);
			b.tickSize = e.tickSize || d;
			if ("time" == e.mode && !b.tickGenerator) throw Error("Time mode requires the flot.time plugin.");
			b.tickGenerator ||
				(b.tickGenerator = function(b) {
					var c = [],
						e = b.tickSize * Math.floor(b.min / b.tickSize),
						l = 0,
						s = Number.NaN,
						a;
					do a = s, s = e + l * b.tickSize, c.push(s), ++l; while (s < b.max && s != a);
					return c
				}, b.tickFormatter = function(b, c) {
					var e = c.tickDecimals ? Math.pow(10, c.tickDecimals) : 1,
						l = "" + Math.round(b * e) / e;
					if (null != c.tickDecimals) {
						var s = l.indexOf("."),
							s = -1 == s ? 0 : l.length - s - 1;
						if (s < c.tickDecimals) return (s ? l : l + ".") + ("" + e).substr(1, c.tickDecimals -
							s)
					}
					return l
				});
			typeof e.tickFormatter === "function" && (b.tickFormatter = function(b, c) {
				return "" + e.tickFormatter(b,
					c)
			});
			if (null != e.alignTicksWithAxis) {
				var u = ("x" == b.direction ? N : R)[e.alignTicksWithAxis - 1];
				u && (u.used && u != b) && (c = b.tickGenerator(b), 0 < c.length && (null == e.min && (b.min = Math
					.min(b.min, c[0])), null == e.max && 1 < c.length && (b.max = Math.max(b.max, c[c
					.length - 1]))), b.tickGenerator = function(b) {
					var c = [],
						e, l;
					for (l = 0; l < u.ticks.length; ++l) e = (u.ticks[l].v - u.min) / (u.max - u.min), e = b
						.min + e * (b.max - b.min), c.push(e);
					return c
				}, !b.mode && null == e.tickDecimals && (c = Math.max(0, -Math.floor(Math.log(b.delta) /
						Math.LN10) + 1), l = b.tickGenerator(b),
					1 < l.length && /\..*0$/.test((l[1] - l[0]).toFixed(c)) || (b.tickDecimals = c)))
			}
		}

		function C() {
			K.clear();
			f(Q.drawBackground, [p]);
			var b = m.grid;
			b.show && b.backgroundColor && (p.save(), p.translate(v.left, v.top), p.fillStyle = la(m.grid
				.backgroundColor, S, 0, "rgba(255, 255, 255, 0)"), p.fillRect(0, 0, X, S), p.restore());
			b.show && !b.aboveData && ma();
			for (var e = 0; e < D.length; ++e) {
				f(Q.drawSeries, [p, D[e]]);
				var c = D[e];
				c.lines.show && ea(c);
				c.bars.show && V(c);
				c.points.show && qa(c)
			}
			f(Q.draw, [p]);
			b.show && b.aboveData && ma();
			K.render();
			ba()
		}

		function M(b, e) {
			for (var c, l, s, a, m = q(), d = 0; d < m.length; ++d)
				if (c = m[d], c.direction == e && (a = e + c.n + "axis", !b[a] && 1 == c.n && (a = e + "axis"), b[
						a])) {
					l = b[a].from;
					s = b[a].to;
					break
				} b[a] || (c = "x" == e ? N[0] : R[0], l = b[e + "1"], s = b[e + "2"]);
			null != l && (null != s && l > s) && (a = l, l = s, s = a);
			return {
				from: l,
				to: s,
				axis: c
			}
		}

		function ma() {
			var b, e, c;
			p.save();
			p.translate(v.left, v.top);
			if (c = m.grid.markings) {
				typeof c === "function" && (e = F.getAxes(), e.xmin = e.xaxis.min, e.xmax = e.xaxis.max, e.ymin = e.yaxis
					.min, e.ymax = e.yaxis.max, c = c(e));
				for (b = 0; b < c.length; ++b) {
					e = c[b];
					var l = M(e, "x"),
						s = M(e, "y");
					null == l.from && (l.from = l.axis.min);
					null == l.to && (l.to = l.axis.max);
					null == s.from && (s.from = s.axis.min);
					null == s.to && (s.to = s.axis.max);
					if (!(l.to < l.axis.min || l.from > l.axis.max || s.to < s.axis.min || s.from > s.axis.max)) {
						l.from = Math.max(l.from, l.axis.min);
						l.to = Math.min(l.to, l.axis.max);
						s.from = Math.max(s.from, s.axis.min);
						s.to = Math.min(s.to, s.axis.max);
						var a = l.from === l.to,
							d = s.from === s.to;
						if (!a || !d)
							if (l.from = Math.floor(l.axis.p2c(l.from)), l.to = Math.floor(l.axis.p2c(l.to)), s
								.from = Math.floor(s.axis.p2c(s.from)),
								s.to = Math.floor(s.axis.p2c(s.to)), a || d) {
								var d = e.lineWidth || m.grid.markingsLineWidth,
									h = d % 2 ? 0.5 : 0;
								p.beginPath();
								p.strokeStyle = e.color || m.grid.markingsColor;
								p.lineWidth = d;
								a ? (p.moveTo(l.to + h, s.from), p.lineTo(l.to + h, s.to)) : (p.moveTo(l.from, s
									.to + h), p.lineTo(l.to, s.to + h));
								p.stroke()
							} else p.fillStyle = e.color || m.grid.markingsColor, p.fillRect(l.from, s.to, l.to - l
								.from, s.from - s.to)
					}
				}
			}
			e = q();
			c = m.grid.borderWidth;
			for (l = 0; l < e.length; ++l) {
				s = e[l];
				b = s.box;
				var a = s.tickLength,
					u, k;
				if (s.show && 0 != s.ticks.length) {
					p.lineWidth =
						1;
					"x" == s.direction ? (d = 0, h = "full" == a ? "top" == s.position ? 0 : S : b.top - v.top + (
						"top" == s.position ? b.height : 0)) : (h = 0, d = "full" == a ? "left" == s.position ?
						0 : X : b.left - v.left + ("left" == s.position ? b.width : 0));
					s.innermost || (p.strokeStyle = s.options.color, p.beginPath(), u = k = 0, "x" == s.direction ?
						u = X + 1 : k = S + 1, 1 == p.lineWidth && ("x" == s.direction ? h = Math.floor(h) +
							0.5 : d = Math.floor(d) + 0.5), p.moveTo(d, h), p.lineTo(d + u, h + k), p.stroke());
					p.strokeStyle = s.options.tickColor;
					p.beginPath();
					for (b = 0; b < s.ticks.length; ++b) {
						var f = s.ticks[b].v;
						u = k =
							0;
						if (!isNaN(f) && !(f < s.min || f > s.max || "full" == a && ("object" == typeof c && 0 < c[s
								.position] || 0 < c) && (f == s.min || f == s.max))) "x" == s.direction ? (d = s
							.p2c(f), k = "full" == a ? -S : a, "top" == s.position && (k = -k)) : (h = s.p2c(f),
							u = "full" == a ? -X : a, "left" == s.position && (u = -u)), 1 == p.lineWidth && (
							"x" == s.direction ? d = Math.floor(d) + 0.5 : h = Math.floor(h) + 0.5), p.moveTo(d,
							h), p.lineTo(d + u, h + k)
					}
					p.stroke()
				}
			}
			c && (b = m.grid.borderColor, "object" == typeof c || "object" == typeof b ? ("object" !== typeof c && (
					c = {
						top: c,
						right: c,
						bottom: c,
						left: c
					}), "object" !== typeof b &&
				(b = {
					top: b,
					right: b,
					bottom: b,
					left: b
				}), 0 < c.top && (p.strokeStyle = b.top, p.lineWidth = c.top, p.beginPath(), p.moveTo(0 - c
					.left, 0 - c.top / 2), p.lineTo(X, 0 - c.top / 2), p.stroke()), 0 < c.right && (p
					.strokeStyle = b.right, p.lineWidth = c.right, p.beginPath(), p.moveTo(X + c.right / 2,
						0 - c.top), p.lineTo(X + c.right / 2, S), p.stroke()), 0 < c.bottom && (p
					.strokeStyle = b.bottom, p.lineWidth = c.bottom, p.beginPath(), p.moveTo(X + c.right,
						S + c.bottom / 2), p.lineTo(0, S + c.bottom / 2), p.stroke()), 0 < c.left && (p
					.strokeStyle = b.left, p.lineWidth = c.left, p.beginPath(),
					p.moveTo(0 - c.left / 2, S + c.bottom), p.lineTo(0 - c.left / 2, 0), p.stroke())) : (p
				.lineWidth = c, p.strokeStyle = m.grid.borderColor, p.strokeRect(-c / 2, -c / 2, X + c, S +
					c)));
			p.restore()
		}

		function oa() {
			g.each(q(), function(b, e) {
				var c = e.box,
					l = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + (e
						.direction + "Axis " + e.direction + e.n + "Axis"),
					s = e.options.font || "flot-tick-label tickLabel",
					a, d, m, u, p;
				K.removeText(l);
				if (e.show && 0 != e.ticks.length)
					for (var h = 0; h < e.ticks.length; ++h)
						if (a = e.ticks[h], a.label && !(a.v < e.min || a.v > e.max)) "x" ==
							e.direction ? (u = "center", d = v.left + e.p2c(a.v), "bottom" == e.position ?
								m = c.top + c.padding : (m = c.top + c.height - c.padding, p = "bottom")) :
							(p = "middle", m = v.top + e.p2c(a.v), "left" == e.position ? (d = c.left + c
								.width - c.padding, u = "right") : d = c.left + c.padding), K.addText(l, d,
								m, a.label, s, null, null, u, p)
			})
		}

		function ea(b) {
			function e(b, c, e, l, a) {
				var d = b.points;
				b = b.pointsize;
				var s = null,
					m = null;
				p.beginPath();
				for (var h = b; h < d.length; h += b) {
					var g = d[h - b],
						k = d[h - b + 1],
						f = d[h],
						r = d[h + 1];
					if (!(null == g || null == f)) {
						if (k <= r && k < a.min) {
							if (r < a.min) continue;
							g = (a.min - k) / (r - k) * (f - g) + g;
							k = a.min
						} else if (r <= k && r < a.min) {
							if (k < a.min) continue;
							f = (a.min - k) / (r - k) * (f - g) + g;
							r = a.min
						}
						if (k >= r && k > a.max) {
							if (r > a.max) continue;
							g = (a.max - k) / (r - k) * (f - g) + g;
							k = a.max
						} else if (r >= k && r > a.max) {
							if (k > a.max) continue;
							f = (a.max - k) / (r - k) * (f - g) + g;
							r = a.max
						}
						if (g <= f && g < l.min) {
							if (f < l.min) continue;
							k = (l.min - g) / (f - g) * (r - k) + k;
							g = l.min
						} else if (f <= g && f < l.min) {
							if (g < l.min) continue;
							r = (l.min - g) / (f - g) * (r - k) + k;
							f = l.min
						}
						if (g >= f && g > l.max) {
							if (f > l.max) continue;
							k = (l.max - g) / (f - g) * (r - k) + k;
							g = l.max
						} else if (f >= g && f > l.max) {
							if (g >
								l.max) continue;
							r = (l.max - g) / (f - g) * (r - k) + k;
							f = l.max
						}(g != s || k != m) && p.moveTo(l.p2c(g) + c, a.p2c(k) + e);
						s = f;
						m = r;
						p.lineTo(l.p2c(f) + c, a.p2c(r) + e)
					}
				}
				p.stroke()
			}

			function c(b, c, e) {
				var l = b.points;
				b = b.pointsize;
				for (var a = Math.min(Math.max(0, e.min), e.max), d = 0, s = !1, m = 1, g = 0, k = 0; !(0 < b && d >
						l.length + b);) {
					var d = d + b,
						h = l[d - b],
						f = l[d - b + m],
						r = l[d],
						q = l[d + m];
					if (s) {
						if (0 < b && null != h && null == r) {
							k = d;
							b = -b;
							m = 2;
							continue
						}
						if (0 > b && d == g + b) {
							p.fill();
							s = !1;
							b = -b;
							m = 1;
							d = g = k + b;
							continue
						}
					}
					if (!(null == h || null == r)) {
						if (h <= r && h < c.min) {
							if (r < c.min) continue;
							f = (c.min - h) / (r - h) * (q - f) + f;
							h = c.min
						} else if (r <= h && r < c.min) {
							if (h < c.min) continue;
							q = (c.min - h) / (r - h) * (q - f) + f;
							r = c.min
						}
						if (h >= r && h > c.max) {
							if (r > c.max) continue;
							f = (c.max - h) / (r - h) * (q - f) + f;
							h = c.max
						} else if (r >= h && r > c.max) {
							if (h > c.max) continue;
							q = (c.max - h) / (r - h) * (q - f) + f;
							r = c.max
						}
						s || (p.beginPath(), p.moveTo(c.p2c(h), e.p2c(a)), s = !0);
						if (f >= e.max && q >= e.max) p.lineTo(c.p2c(h), e.p2c(e.max)), p.lineTo(c.p2c(r), e.p2c(e
							.max));
						else if (f <= e.min && q <= e.min) p.lineTo(c.p2c(h), e.p2c(e.min)), p.lineTo(c.p2c(r), e
							.p2c(e.min));
						else {
							var n = h,
								G = r;
							f <= q && f < e.min && q >= e.min ? (h = (e.min - f) / (q - f) * (r - h) + h, f = e
								.min) : q <= f && (q < e.min && f >= e.min) && (r = (e.min - f) / (q - f) * (r -
									h) + h, q = e.min);
							f >= q && f > e.max && q <= e.max ? (h = (e.max - f) / (q - f) * (r - h) + h, f = e
								.max) : q >= f && (q > e.max && f <= e.max) && (r = (e.max - f) / (q - f) * (r -
									h) + h, q = e.max);
							h != n && p.lineTo(c.p2c(n), e.p2c(f));
							p.lineTo(c.p2c(h), e.p2c(f));
							p.lineTo(c.p2c(r), e.p2c(q));
							r != G && (p.lineTo(c.p2c(r), e.p2c(q)), p.lineTo(c.p2c(G), e.p2c(q)))
						}
					}
				}
			}
			p.save();
			p.translate(v.left, v.top);
			p.lineJoin = "round";
			var l = b.lines.lineWidth,
				a = b.shadowSize;
			if (0 <
				l && 0 < a) {
				p.lineWidth = a;
				p.strokeStyle = "rgba(0,0,0,0.1)";
				var d = Math.PI / 18;
				e(b.datapoints, Math.sin(d) * (l / 2 + a / 2), Math.cos(d) * (l / 2 + a / 2), b.xaxis, b.yaxis);
				p.lineWidth = a / 2;
				e(b.datapoints, Math.sin(d) * (l / 2 + a / 4), Math.cos(d) * (l / 2 + a / 4), b.xaxis, b.yaxis)
			}
			p.lineWidth = l;
			p.strokeStyle = b.color;
			if (a = y(b.lines, b.color, 0, S)) p.fillStyle = a, c(b.datapoints, b.xaxis, b.yaxis);
			0 < l && e(b.datapoints, 0, 0, b.xaxis, b.yaxis);
			p.restore()
		}

		function qa(b) {
			function e(b, c, e, l, a, d, s, m) {
				var h = b.points;
				b = b.pointsize;
				for (var f = 0; f < h.length; f += b) {
					var g =
						h[f],
						r = h[f + 1];
					null == g || (g < d.min || g > d.max || r < s.min || r > s.max) || (p.beginPath(), g = d.p2c(g),
						r = s.p2c(r) + l, "circle" == m ? p.arc(g, r, c, 0, a ? Math.PI : 2 * Math.PI, !1) : m(
							p, g, r, c, a), p.closePath(), e && (p.fillStyle = e, p.fill()), p.stroke())
				}
			}
			p.save();
			p.translate(v.left, v.top);
			var c = b.points.lineWidth,
				l = b.shadowSize,
				a = b.points.radius,
				d = b.points.symbol;
			0 == c && (c = 1E-4);
			0 < c && 0 < l && (l /= 2, p.lineWidth = l, p.strokeStyle = "rgba(0,0,0,0.1)", e(b.datapoints, a, null,
				l + l / 2, !0, b.xaxis, b.yaxis, d), p.strokeStyle = "rgba(0,0,0,0.2)", e(b.datapoints,
				a, null, l / 2, !0, b.xaxis, b.yaxis, d));
			p.lineWidth = c;
			p.strokeStyle = b.color;
			e(b.datapoints, a, y(b.points, b.color), 0, !1, b.xaxis, b.yaxis, d);
			p.restore()
		}

		function na(b, e, c, l, a, d, m, h, f, g, r) {
			var k, p, q, n;
			g ? (n = p = q = !0, k = !1, g = c, c = e + l, a = e + a, b < g && (e = b, b = g, g = e, k = !0, p = !
				1)) : (k = p = q = !0, n = !1, g = b + l, b += a, a = c, c = e, c < a && (e = c, c = a, a = e,
				n = !0, q = !1));
			if (!(b < m.min || g > m.max || c < h.min || a > h.max))
				if (g < m.min && (g = m.min, k = !1), b > m.max && (b = m.max, p = !1), a < h.min && (a = h.min,
						n = !1), c > h.max && (c = h.max, q = !1), g = m.p2c(g), a = h.p2c(a), b = m.p2c(b), c = h
					.p2c(c),
					d && (f.fillStyle = d(a, c), f.fillRect(g, c, b - g, a - c)), 0 < r && (k || p || q || n)) f
					.beginPath(), f.moveTo(g, a), k ? f.lineTo(g, c) : f.moveTo(g, c), q ? f.lineTo(b, c) : f
					.moveTo(b, c), p ? f.lineTo(b, a) : f.moveTo(b, a), n ? f.lineTo(g, a) : f.moveTo(g, a), f
					.stroke()
		}

		function V(b) {
			p.save();
			p.translate(v.left, v.top);
			p.lineWidth = b.bars.lineWidth;
			p.strokeStyle = b.color;
			var e;
			switch (b.bars.align) {
				case "left":
					e = 0;
					break;
				case "right":
					e = -b.bars.barWidth;
					break;
				default:
					e = -b.bars.barWidth / 2
			}(function(c, e, a, d, m, f) {
				var h = c.points;
				c = c.pointsize;
				for (var g =
						0; g < h.length; g += c) null != h[g] && na(h[g], h[g + 1], h[g + 2], e, a, d, m, f, p,
					b.bars.horizontal, b.bars.lineWidth)
			})(b.datapoints, e, e + b.bars.barWidth, b.bars.fill ? function(c, e) {
				return y(b.bars, b.color, c, e)
			} : null, b.xaxis, b.yaxis);
			p.restore()
		}

		function y(b, e, c, l) {
			var a = b.fill;
			if (!a) return null;
			if (b.fillColor) return la(b.fillColor, c, l, e);
			b = g.color.parse(e);
			b.a = "number" == typeof a ? a : 0.4;
			b.normalize();
			return b.toString()
		}

		function pa() {
			null != m.legend.container ? g(m.legend.container).html("") : a.find(".legend").remove();
			if (m.legend.show) {
				for (var b = [], e = [], c = !1, l = m.legend.labelFormatter, d, h, f = 0; f < D.length; ++f) d = D[
					f], d.label && (h = l ? l(d.label, d) : d.label) && e.push({
					label: h,
					color: d.color
				});
				if (m.legend.sorted)
					if (typeof m.legend.sorted === "function") e.sort(m.legend.sorted);
					else if ("reverse" == m.legend.sorted) e.reverse();
				else {
					var r = "descending" != m.legend.sorted;
					e.sort(function(b, c) {
						return b.label == c.label ? 0 : b.label < c.label != r ? 1 : -1
					})
				}
				for (f = 0; f < e.length; ++f) l = e[f], 0 == f % m.legend.noColumns && (c && b.push("\x3c/tr\x3e"),
					b.push("\x3ctr\x3e"), c = !0), b.push(
					'\x3ctd class\x3d"legendColorBox"\x3e\x3cdiv style\x3d"border:1px solid ' +
					m.legend.labelBoxBorderColor +
					';padding:1px"\x3e\x3cdiv style\x3d"width:4px;height:0;border:5px solid ' + l.color +
					';overflow:hidden"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/td\x3e\x3ctd class\x3d"legendLabel"\x3e' +
					l.label + "\x3c/td\x3e");
				c && b.push("\x3c/tr\x3e");
				0 != b.length && (e = '\x3ctable style\x3d"font-size:smaller;color:' + m.grid.color + '"\x3e' + b
					.join("") + "\x3c/table\x3e", null != m.legend.container ? g(m.legend.container).html(e) : (
						b = "", c = m.legend.position, f = m.legend.margin, null == f[0] && (f = [f, f]), "n" ==
						c.charAt(0) ?
						b += "top:" + (f[1] + v.top) + "px;" : "s" == c.charAt(0) && (b += "bottom:" + (f[1] + v
							.bottom) + "px;"), "e" == c.charAt(1) ? b += "right:" + (f[0] + v.right) + "px;" :
						"w" == c.charAt(1) && (b += "left:" + (f[0] + v.left) + "px;"), e = g(
							'\x3cdiv class\x3d"legend"\x3e' + e.replace('style\x3d"',
								'style\x3d"position:absolute;' + b + ";") + "\x3c/div\x3e").appendTo(a), 0 != m
						.legend.backgroundOpacity && (c = m.legend.backgroundColor, null == c && (c = (c = m
									.grid.backgroundColor) && "string" == typeof c ? g.color.parse(c) : g.color
								.extract(e, "background-color"), c.a = 1, c = c.toString()),
							f = e.children(), g('\x3cdiv style\x3d"position:absolute;width:' + f.width() +
								"px;height:" + f.height() + "px;" + b + "background-color:" + c +
								';"\x3e \x3c/div\x3e').prependTo(e).css("opacity", m.legend.backgroundOpacity)))
					)
			}
		}

		function T(b) {
			m.grid.hoverable && fa("plothover", b, function(b) {
				return !1 != b.hoverable
			})
		}

		function ka(b) {
			m.grid.hoverable && fa("plothover", b, function(b) {
				return !1
			})
		}

		function Z(b) {
			fa("plotclick", b, function(b) {
				return !1 != b.clickable
			})
		}

		function fa(b, e, c) {
			var l = W.offset(),
				d = e.pageX - l.left - v.left,
				f = e.pageY -
				l.top - v.top,
				h = G({
					left: d,
					top: f
				});
			h.pageX = e.pageX;
			h.pageY = e.pageY;
			e = m.grid.mouseActiveRadius;
			var g = e * e + 1,
				r = null,
				k, p, q;
			for (k = D.length - 1; 0 <= k; --k)
				if (c(D[k])) {
					var n = D[k],
						I = n.xaxis,
						x = n.yaxis,
						C = n.datapoints.points,
						A = I.c2p(d),
						t = x.c2p(f),
						w = e / I.scale,
						ea = e / x.scale;
					q = n.datapoints.pointsize;
					I.options.inverseTransform && (w = Number.MAX_VALUE);
					x.options.inverseTransform && (ea = Number.MAX_VALUE);
					if (n.lines.show || n.points.show)
						for (p = 0; p < C.length; p += q) {
							var y = C[p],
								M = C[p + 1];
							if (null != y && !(y - A > w || y - A < -w || M - t > ea || M - t < -ea)) y =
								Math.abs(I.p2c(y) - d), M = Math.abs(x.p2c(M) - f), M = y * y + M * M, M < g && (g =
									M, r = [k, p / q])
						}
					if (n.bars.show && !r) {
						switch (n.bars.align) {
							case "left":
								I = 0;
								break;
							case "right":
								I = -n.bars.barWidth;
								break;
							default:
								I = -n.bars.barWidth / 2
						}
						n = I + n.bars.barWidth;
						for (p = 0; p < C.length; p += q)
							if (y = C[p], M = C[p + 1], x = C[p + 2], null != y && (D[k].bars.horizontal ? A <= Math
									.max(x, y) && A >= Math.min(x, y) && t >= M + I && t <= M + n : A >= y + I &&
									A <= y + n && t >= Math.min(x, M) && t <= Math.max(x, M))) r = [k, p / q]
					}
				} r ? (k = r[0], p = r[1], q = D[k].datapoints.pointsize, c = {
				datapoint: D[k].datapoints.points.slice(p *
					q, (p + 1) * q),
				dataIndex: p,
				series: D[k],
				seriesIndex: k
			}) : c = null;
			c && (c.pageX = parseInt(c.series.xaxis.p2c(c.datapoint[0]) + l.left + v.left, 10), c.pageY = parseInt(c
				.series.yaxis.p2c(c.datapoint[1]) + l.top + v.top, 10));
			if (m.grid.autoHighlight) {
				for (l = 0; l < Y.length; ++l) d = Y[l], d.auto == b && (!c || !(d.series == c.series && d.point[
					0] == c.datapoint[0] && d.point[1] == c.datapoint[1])) && ga(d.series, d.point);
				c && ha(c.series, c.datapoint, b)
			}
			a.trigger(b, [h, c])
		}

		function ba() {
			var b = m.interaction.redrawOverlayInterval; - 1 == b ? ia() : da || (da = setTimeout(ia,
				b))
		}

		function ia() {
			da = null;
			P.save();
			ca.clear();
			P.translate(v.left, v.top);
			var b, e;
			for (b = 0; b < Y.length; ++b)
				if (e = Y[b], e.series.bars.show) ra(e.series, e.point);
				else {
					var c = e.series,
						a = e.point;
					e = a[0];
					var a = a[1],
						d = c.xaxis,
						m = c.yaxis,
						h = "string" === typeof c.highlightColor ? c.highlightColor : g.color.parse(c.color).scale(
							"a", 0.5).toString();
					if (!(e < d.min || e > d.max || a < m.min || a > m.max)) {
						var k = c.points.radius + c.points.lineWidth / 2;
						P.lineWidth = k;
						P.strokeStyle = h;
						h = 1.5 * k;
						e = d.p2c(e);
						a = m.p2c(a);
						P.beginPath();
						"circle" == c.points.symbol ?
							P.arc(e, a, h, 0, 2 * Math.PI, !1) : c.points.symbol(P, e, a, h, !1);
						P.closePath();
						P.stroke()
					}
				} P.restore();
			f(Q.drawOverlay, [P])
		}

		function ha(b, e, c) {
			"number" == typeof b && (b = D[b]);
			if ("number" == typeof e) {
				var a = b.datapoints.pointsize;
				e = b.datapoints.points.slice(a * e, a * (e + 1))
			}
			a = ja(b, e); - 1 == a ? (Y.push({
				series: b,
				point: e,
				auto: c
			}), ba()) : c || (Y[a].auto = !1)
		}

		function ga(b, e) {
			if (null == b && null == e) Y = [], ba();
			else {
				"number" == typeof b && (b = D[b]);
				if ("number" == typeof e) {
					var c = b.datapoints.pointsize;
					e = b.datapoints.points.slice(c * e, c * (e +
						1))
				}
				c = ja(b, e); - 1 != c && (Y.splice(c, 1), ba())
			}
		}

		function ja(b, e) {
			for (var c = 0; c < Y.length; ++c) {
				var a = Y[c];
				if (a.series == b && a.point[0] == e[0] && a.point[1] == e[1]) return c
			}
			return -1
		}

		function ra(b, e) {
			var c = "string" === typeof b.highlightColor ? b.highlightColor : g.color.parse(b.color).scale("a", 0.5)
				.toString(),
				a;
			switch (b.bars.align) {
				case "left":
					a = 0;
					break;
				case "right":
					a = -b.bars.barWidth;
					break;
				default:
					a = -b.bars.barWidth / 2
			}
			P.lineWidth = b.bars.lineWidth;
			P.strokeStyle = c;
			na(e[0], e[1], e[2] || 0, a, a + b.bars.barWidth, function() {
					return c
				},
				b.xaxis, b.yaxis, P, b.bars.horizontal, b.bars.lineWidth)
		}

		function la(b, e, c, a) {
			if ("string" == typeof b) return b;
			e = p.createLinearGradient(0, c, 0, e);
			c = 0;
			for (var d = b.colors.length; c < d; ++c) {
				var f = b.colors[c];
				if ("string" != typeof f) {
					var m = g.color.parse(a);
					null != f.brightness && (m = m.scale("rgb", f.brightness));
					null != f.opacity && (m.a *= f.opacity);
					f = m.toString()
				}
				e.addColorStop(c / (d - 1), f)
			}
			return e
		}
		var D = [],
			m = {
				colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
				legend: {
					show: !0,
					noColumns: 1,
					labelFormatter: null,
					labelBoxBorderColor: "#ccc",
					container: null,
					position: "ne",
					margin: 5,
					backgroundColor: null,
					backgroundOpacity: 0.85,
					sorted: null
				},
				xaxis: {
					show: null,
					position: "bottom",
					mode: null,
					font: null,
					color: null,
					tickColor: null,
					transform: null,
					inverseTransform: null,
					min: null,
					max: null,
					autoscaleMargin: null,
					ticks: null,
					tickFormatter: null,
					labelWidth: null,
					labelHeight: null,
					reserveSpace: null,
					tickLength: null,
					alignTicksWithAxis: null,
					tickDecimals: null,
					tickSize: null,
					minTickSize: null
				},
				yaxis: {
					autoscaleMargin: 0.02,
					position: "left"
				},
				xaxes: [],
				yaxes: [],
				series: {
					points: {
						show: !1,
						radius: 3,
						lineWidth: 2,
						fill: !0,
						fillColor: "#ffffff",
						symbol: "circle"
					},
					lines: {
						lineWidth: 2,
						fill: !1,
						fillColor: null,
						steps: !1
					},
					bars: {
						show: !1,
						lineWidth: 2,
						barWidth: 1,
						fill: !0,
						fillColor: null,
						align: "left",
						horizontal: !1,
						zero: !0
					},
					shadowSize: 3,
					highlightColor: null
				},
				grid: {
					show: !0,
					aboveData: !1,
					color: "#545454",
					backgroundColor: null,
					borderColor: null,
					tickColor: null,
					margin: 0,
					labelMargin: 5,
					axisMargin: 8,
					borderWidth: 2,
					minBorderMargin: null,
					markings: null,
					markingsColor: "#f4f4f4",
					markingsLineWidth: 2,
					clickable: !1,
					hoverable: !1,
					autoHighlight: !0,
					mouseActiveRadius: 10
				},
				interaction: {
					redrawOverlayInterval: 1E3 / 60
				},
				hooks: {}
			},
			K = null,
			ca = null,
			W = null,
			p = null,
			P = null,
			N = [],
			R = [],
			v = {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			},
			X = 0,
			S = 0,
			Q = {
				processOptions: [],
				processRawData: [],
				processDatapoints: [],
				processOffset: [],
				drawBackground: [],
				drawSeries: [],
				draw: [],
				bindEvents: [],
				drawOverlay: [],
				shutdown: []
			},
			F = this;
		F.setData = A;
		F.setupGrid = U;
		F.draw = C;
		F.getPlaceholder = function() {
			return a
		};
		F.getCanvas = function() {
			return K.element
		};
		F.getPlotOffset = function() {
			return v
		};
		F.width = function() {
			return X
		};
		F.height = function() {
			return S
		};
		F.offset = function() {
			var b = W.offset();
			b.left += v.left;
			b.top += v.top;
			return b
		};
		F.getData = function() {
			return D
		};
		F.getAxes = function() {
			var b = {};
			g.each(N.concat(R), function(e, c) {
				c && (b[c.direction + (1 != c.n ? c.n : "") + "axis"] = c)
			});
			return b
		};
		F.getXAxes = function() {
			return N
		};
		F.getYAxes = function() {
			return R
		};
		F.c2p = G;
		F.p2c = function(b) {
			var e = {},
				c, a, d;
			for (c = 0; c < N.length; ++c)
				if ((a = N[c]) && a.used)
					if (d = "x" + a.n, null == b[d] && 1 == a.n && (d = "x"), null != b[d]) {
						e.left = a.p2c(b[d]);
						break
					} for (c = 0; c < R.length; ++c)
				if ((a =
						R[c]) && a.used)
					if (d = "y" + a.n, null == b[d] && 1 == a.n && (d = "y"), null != b[d]) {
						e.top = a.p2c(b[d]);
						break
					} return e
		};
		F.getOptions = function() {
			return m
		};
		F.highlight = ha;
		F.unhighlight = ga;
		F.triggerRedrawOverlay = ba;
		F.pointOffset = function(b) {
			return {
				left: parseInt(N[w(b, "x") - 1].p2c(+b.x) + v.left, 10),
				top: parseInt(R[w(b, "y") - 1].p2c(+b.y) + v.top, 10)
			}
		};
		F.shutdown = H;
		F.destroy = function() {
			H();
			a.removeData("plot").empty();
			D = [];
			P = p = W = ca = K = m = null;
			N = [];
			R = [];
			Q = null;
			Y = [];
			F = null
		};
		F.resize = function() {
			var b = a.width(),
				e = a.height();
			K.resize(b,
				e);
			ca.resize(b, e)
		};
		F.hooks = Q;
		(function() {
			for (var b = {
					Canvas: k
				}, e = 0; e < n.length; ++e) {
				var c = n[e];
				c.init(F, b);
				c.options && g.extend(!0, m, c.options)
			}
		})(F);
		(function(b) {
			g.extend(!0, m, b);
			b && b.colors && (m.colors = b.colors);
			null == m.xaxis.color && (m.xaxis.color = g.color.parse(m.grid.color).scale("a", 0.22).toString());
			null == m.yaxis.color && (m.yaxis.color = g.color.parse(m.grid.color).scale("a", 0.22).toString());
			null == m.xaxis.tickColor && (m.xaxis.tickColor = m.grid.tickColor || m.xaxis.color);
			null == m.yaxis.tickColor && (m.yaxis.tickColor =
				m.grid.tickColor || m.yaxis.color);
			null == m.grid.borderColor && (m.grid.borderColor = m.grid.color);
			null == m.grid.tickColor && (m.grid.tickColor = g.color.parse(m.grid.color).scale("a", 0.22)
				.toString());
			var e, c;
			b = (b = a.css("font-size")) ? +b.replace("px", "") : 13;
			var d = {
				style: a.css("font-style"),
				size: Math.round(0.8 * b),
				variant: a.css("font-variant"),
				weight: a.css("font-weight"),
				family: a.css("font-family")
			};
			c = m.xaxes.length || 1;
			for (b = 0; b < c; ++b) {
				if ((e = m.xaxes[b]) && !e.tickColor) e.tickColor = e.color;
				e = g.extend(!0, {}, m.xaxis,
					e);
				m.xaxes[b] = e;
				e.font && (e.font = g.extend({}, d, e.font), e.font.color || (e.font.color = e.color), e.font
					.lineHeight || (e.font.lineHeight = Math.round(1.15 * e.font.size)))
			}
			c = m.yaxes.length || 1;
			for (b = 0; b < c; ++b) {
				if ((e = m.yaxes[b]) && !e.tickColor) e.tickColor = e.color;
				e = g.extend(!0, {}, m.yaxis, e);
				m.yaxes[b] = e;
				e.font && (e.font = g.extend({}, d, e.font), e.font.color || (e.font.color = e.color), e.font
					.lineHeight || (e.font.lineHeight = Math.round(1.15 * e.font.size)))
			}
			m.xaxis.noTicks && null == m.xaxis.ticks && (m.xaxis.ticks = m.xaxis.noTicks);
			m.yaxis.noTicks && null == m.yaxis.ticks && (m.yaxis.ticks = m.yaxis.noTicks);
			m.x2axis && (m.xaxes[1] = g.extend(!0, {}, m.xaxis, m.x2axis), m.xaxes[1].position = "top", null ==
				m.x2axis.min && (m.xaxes[1].min = null), null == m.x2axis.max && (m.xaxes[1].max = null));
			m.y2axis && (m.yaxes[1] = g.extend(!0, {}, m.yaxis, m.y2axis), m.yaxes[1].position = "right",
				null == m.y2axis.min && (m.yaxes[1].min = null), null == m.y2axis.max && (m.yaxes[1].max =
					null));
			m.grid.coloredAreas && (m.grid.markings = m.grid.coloredAreas);
			m.grid.coloredAreasColor && (m.grid.markingsColor =
				m.grid.coloredAreasColor);
			m.lines && g.extend(!0, m.series.lines, m.lines);
			m.points && g.extend(!0, m.series.points, m.points);
			m.bars && g.extend(!0, m.series.bars, m.bars);
			null != m.shadowSize && (m.series.shadowSize = m.shadowSize);
			null != m.highlightColor && (m.series.highlightColor = m.highlightColor);
			for (b = 0; b < m.xaxes.length; ++b) r(N, b + 1).options = m.xaxes[b];
			for (b = 0; b < m.yaxes.length; ++b) r(R, b + 1).options = m.yaxes[b];
			for (var h in Q) m.hooks[h] && m.hooks[h].length && (Q[h] = Q[h].concat(m.hooks[h]));
			f(Q.processOptions, [m])
		})(d);
		(function() {
			a.css("padding", 0).children().filter(function() {
				return !g(this).hasClass("flot-overlay") && !g(this).hasClass("flot-base")
			}).remove();
			"static" == a.css("position") && a.css("position", "relative");
			K = new k("flot-base", a);
			ca = new k("flot-overlay", a);
			p = K.context;
			P = ca.context;
			W = g(ca.element).unbind();
			var b = a.data("plot");
			b && (b.shutdown(), ca.clear());
			a.data("plot", F)
		})();
		A(h);
		U();
		C();
		m.grid.hoverable && (W.mousemove(T), W.bind("mouseleave", ka));
		m.grid.clickable && W.click(Z);
		f(Q.bindEvents, [W]);
		var Y = [],
			da = null
	}
	var n = Object.prototype.hasOwnProperty;
	g.fn.detach || (g.fn.detach = function() {
		return this.each(function() {
			this.parentNode && this.parentNode.removeChild(this)
		})
	});
	k.prototype.resize = function(a, h) {
		if (0 >= a || 0 >= h) throw Error("Invalid dimensions for plot, width \x3d " + a + ", height \x3d " +
		h);
		var d = this.element,
			g = this.context,
			f = this.pixelRatio;
		this.width != a && (d.width = a * f, d.style.width = a + "px", this.width = a);
		this.height != h && (d.height = h * f, d.style.height = h + "px", this.height = h);
		g.restore();
		g.save();
		g.scale(f,
			f)
	};
	k.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height)
	};
	k.prototype.render = function() {
		var a = this._textCache,
			h;
		for (h in a)
			if (n.call(a, h)) {
				var d = this.getTextLayer(h),
					g = a[h];
				d.hide();
				for (var f in g)
					if (n.call(g, f)) {
						var k = g[f],
							w;
						for (w in k)
							if (n.call(k, w)) {
								for (var q = k[w].positions, G = 0, r; r = q[G]; G++) r.active ? r.rendered || (
									d.append(r.element), r.rendered = !0) : (q.splice(G--, 1), r.rendered &&
									r.element.detach());
								0 == q.length && delete k[w]
							}
					} d.show()
			}
	};
	k.prototype.getTextLayer = function(a) {
		var h =
			this.text[a];
		null == h && (null == this.textContainer && (this.textContainer = g(
			"\x3cdiv class\x3d'flot-text'\x3e\x3c/div\x3e").css({
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			"font-size": "smaller",
			color: "#545454"
		}).insertAfter(this.element)), h = this.text[a] = g("\x3cdiv\x3e\x3c/div\x3e").addClass(a).css({
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0
		}).appendTo(this.textContainer));
		return h
	};
	k.prototype.getTextInfo = function(a, h, d, k, f) {
		var n, w;
		h = "" + h;
		k = "object" === typeof d ? d.style + " " + d.variant + " " +
			d.weight + " " + d.size + "px/" + d.lineHeight + "px " + d.family : d;
		n = this._textCache[a];
		null == n && (n = this._textCache[a] = {});
		w = n[k];
		null == w && (w = n[k] = {});
		n = w[h];
		null == n && (a = g("\x3cdiv\x3e\x3c/div\x3e").html(h).css({
			position: "absolute",
			"max-width": f,
			top: -9999
		}).appendTo(this.getTextLayer(a)), "object" === typeof d ? a.css({
			font: k,
			color: d.color
		}) : "string" === typeof d && a.addClass(d), n = w[h] = {
			width: a.outerWidth(!0),
			height: a.outerHeight(!0),
			element: a,
			positions: []
		}, a.detach());
		return n
	};
	k.prototype.addText = function(a, h, d, g,
		f, k, n, q, G) {
		a = this.getTextInfo(a, g, f, k, n);
		g = a.positions;
		"center" == q ? h -= a.width / 2 : "right" == q && (h -= a.width);
		"middle" == G ? d -= a.height / 2 : "bottom" == G && (d -= a.height);
		for (G = 0; f = g[G]; G++)
			if (f.x == h && f.y == d) {
				f.active = !0;
				return
			} f = {
			active: !0,
			rendered: !1,
			element: g.length ? a.element.clone() : a.element,
			x: h,
			y: d
		};
		g.push(f);
		f.element.css({
			top: Math.round(d),
			left: Math.round(h),
			"text-align": q
		})
	};
	k.prototype.removeText = function(a, h, d, g, f, k) {
		if (null == g) {
			if (h = this._textCache[a], null != h)
				for (var w in h)
					if (n.call(h, w)) {
						d = h[w];
						for (var q in d)
							if (n.call(d, q)) {
								a = d[q].positions;
								for (g = 0; f = a[g]; g++) f.active = !1
							}
					}
		} else {
			a = this.getTextInfo(a, g, f, k).positions;
			for (g = 0; f = a[g]; g++) f.x == h && f.y == d && (f.active = !1)
		}
	};
	g.plot = function(a, h, d) {
		return new z(g(a), h, d, g.plot.plugins)
	};
	g.plot.version = "0.8.3";
	g.plot.plugins = [];
	g.fn.plot = function(a, h) {
		return this.each(function() {
			g.plot(this, a, h)
		})
	}
})(jQuery);
(function(g) {
	function k(f) {
		var n, w = this,
			q = f.data || {};
		if (q.elem) w = f.dragTarget = q.elem, f.dragProxy = x.proxy || w, f.cursorOffsetX = q.pageX - q.left, f
			.cursorOffsetY = q.pageY - q.top, f.offsetX = f.pageX - f.cursorOffsetX, f.offsetY = f.pageY - f
			.cursorOffsetY;
		else if (x.dragging || 0 < q.which && f.which != q.which || g(f.target).is(q.not)) return;
		switch (f.type) {
			case "mousedown":
				return g.extend(q, g(w).offset(), {
					elem: w,
					target: f.target,
					pageX: f.pageX,
					pageY: f.pageY
				}), h.add(document, "mousemove mouseup", k, q), a(w, !1), x.dragging = null, !1;
			case !x.dragging &&
			"mousemove":
				if (Math.pow(f.pageX - q.pageX, 2) + Math.pow(f.pageY - q.pageY, 2) < q.distance) break;
				f.target = q.target;
				n = z(f, "dragstart", w);
				!1 !== n && (x.dragging = w, x.proxy = f.dragProxy = g(n || w)[0]);
			case "mousemove":
				if (x.dragging) {
					if (n = z(f, "drag", w), d.drop && (d.drop.allowed = !1 !== n, d.drop.handler(f)), !1 !== n)
						break;
					f.type = "mouseup"
				}
				case "mouseup":
					h.remove(document, "mousemove mouseup", k), x.dragging && (d.drop && d.drop.handler(f), z(f,
						"dragend", w)), a(w, !0), x.dragging = x.proxy = q.elem = !1
		}
		return !0
	}

	function z(a, d, h) {
		a.type = d;
		d = g.event.dispatch.call(h,
			a);
		return !1 === d ? !1 : d || a.result
	}

	function n() {
		return !1 === x.dragging
	}

	function a(a, d) {
		a && (a.unselectable = d ? "off" : "on", a.onselectstart = function() {
			return d
		}, a.style && (a.style.MozUserSelect = d ? "" : "none"))
	}
	g.fn.drag = function(a, d, g) {
		return d && this.bind("dragstart", a), g && this.bind("dragend", g), a ? this.bind("drag", d ? d : a) :
			this.trigger("drag")
	};
	var h = g.event,
		d = h.special,
		x = d.drag = {
			not: ":input",
			distance: 0,
			which: 1,
			dragging: !1,
			setup: function(a) {
				a = g.extend({
					distance: x.distance,
					which: x.which,
					not: x.not
				}, a || {});
				a.distance =
					Math.pow(a.distance, 2);
				h.add(this, "mousedown", k, a);
				this.attachEvent && this.attachEvent("ondragstart", n)
			},
			teardown: function() {
				h.remove(this, "mousedown", k);
				this === x.dragging && (x.dragging = x.proxy = !1);
				a(this, !0);
				this.detachEvent && this.detachEvent("ondragstart", n)
			}
		};
	d.dragstart = d.dragend = {
		setup: function() {},
		teardown: function() {}
	}
})(jQuery);
(function(g) {
	function k(a) {
		var h = a || window.event,
			d = [].slice.call(arguments, 1),
			k = 0,
			f = 0,
			n = 0;
		a = g.event.fix(h);
		a.type = "mousewheel";
		h.wheelDelta && (k = h.wheelDelta / 120);
		h.detail && (k = -h.detail / 3);
		n = k;
		void 0 !== h.axis && h.axis === h.HORIZONTAL_AXIS && (n = 0, f = -1 * k);
		void 0 !== h.wheelDeltaY && (n = h.wheelDeltaY / 120);
		void 0 !== h.wheelDeltaX && (f = -1 * h.wheelDeltaX / 120);
		d.unshift(a, k, f, n);
		return (g.event.dispatch || g.event.handle).apply(this, d)
	}
	var z = ["DOMMouseScroll", "mousewheel"];
	if (g.event.fixHooks)
		for (var n = z.length; n;) g.event.fixHooks[z[--n]] =
			g.event.mouseHooks;
	g.event.special.mousewheel = {
		setup: function() {
			if (this.addEventListener)
				for (var a = z.length; a;) this.addEventListener(z[--a], k, !1);
			else this.onmousewheel = k
		},
		teardown: function() {
			if (this.removeEventListener)
				for (var a = z.length; a;) this.removeEventListener(z[--a], k, !1);
			else this.onmousewheel = null
		}
	};
	g.fn.extend({
		mousewheel: function(a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function(a) {
			return this.unbind("mousewheel", a)
		}
	})
})(jQuery);
(function(g) {
	g.plot.plugins.push({
		init: function(k) {
			function z(a, d) {
				var g = k.offset();
				g.left = a.pageX - g.left;
				g.top = a.pageY - g.top;
				d ? k.zoomOut({
					center: g
				}) : k.zoom({
					center: g
				})
			}

			function n(a, d) {
				a.preventDefault();
				z(a, 0 > d);
				return !1
			}

			function a(a) {
				if (1 != a.which) return !1;
				var d = k.getPlaceholder().css("cursor");
				d && (x = d);
				k.getPlaceholder().css("cursor", k.getOptions().pan.cursor);
				f = a.pageX;
				A = a.pageY
			}

			function h(a) {
				var d = k.getOptions().pan.frameRate;
				!w && d && (w = setTimeout(function() {
					k.pan({
						left: f - a.pageX,
						top: A - a.pageY
					});
					f = a.pageX;
					A = a.pageY;
					w = null
				}, 1E3 * (1 / d)))
			}

			function d(a) {
				w && (clearTimeout(w), w = null);
				k.getPlaceholder().css("cursor", x);
				k.pan({
					left: f - a.pageX,
					top: A - a.pageY
				})
			}
			var x = "default",
				f = 0,
				A = 0,
				w = null;
			k.zoomOut = function(a) {
				a || (a = {});
				a.amount || (a.amount = k.getOptions().zoom.amount);
				a.amount = 1 / a.amount;
				k.zoom(a)
			};
			k.zoom = function(a) {
				a || (a = {});
				var d = a.center,
					h = a.amount || k.getOptions().zoom.amount,
					f = k.width(),
					n = k.height();
				d || (d = {
					left: f / 2,
					top: n / 2
				});
				var w = d.left / f,
					x = d.top / n,
					t = {
						x: {
							min: d.left - w * f / h,
							max: d.left + (1 - w) * f / h
						},
						y: {
							min: d.top - x * n / h,
							max: d.top + (1 - x) * n / h
						}
					};
				g.each(k.getAxes(), function(a, d) {
					var g = d.options,
						f = t[d.direction].min,
						k = t[d.direction].max,
						n = g.zoomRange,
						q = g.panRange;
					if (!1 !== n) {
						f = d.c2p(f);
						k = d.c2p(k);
						if (f > k) var G = f,
							f = k,
							k = G;
						q && (null != q[0] && f < q[0] && (f = q[0]), null != q[1] && k > q[
							1] && (k = q[1]));
						q = k - f;
						if (!n || !(null != n[0] && q < n[0] && 1 < h || null != n[1] && q >
								n[1] && 1 > h)) g.min = f, g.max = k
					}
				});
				k.setupGrid();
				k.draw();
				a.preventEvent || k.getPlaceholder().trigger("plotzoom", [k, a])
			};
			k.pan = function(a) {
				var d = {
					x: +a.left,
					y: +a.top
				};
				isNaN(d.x) &&
					(d.x = 0);
				isNaN(d.y) && (d.y = 0);
				g.each(k.getAxes(), function(a, g) {
					var h = g.options,
						f, k, n = d[g.direction];
					f = g.c2p(g.p2c(g.min) + n);
					k = g.c2p(g.p2c(g.max) + n);
					var q = h.panRange;
					!1 !== q && (q && (null != q[0] && q[0] > f && (n = q[0] - f, f += n,
						k += n), null != q[1] && q[1] < k && (n = q[1] - k, f +=
						n, k += n)), h.min = f, h.max = k)
				});
				k.setupGrid();
				k.draw();
				a.preventEvent || k.getPlaceholder().trigger("plotpan", [k, a])
			};
			k.hooks.bindEvents.push(function(g, f) {
				var k = g.getOptions();
				k.zoom.interactive && (f[k.zoom.trigger](z), f.mousewheel(n));
				k.pan.interactive && (f.bind("dragstart", {
					distance: 10
				}, a), f.bind("drag", h), f.bind("dragend", d))
			});
			k.hooks.shutdown.push(function(g, f) {
				f.unbind(g.getOptions().zoom.trigger, z);
				f.unbind("mousewheel", n);
				f.unbind("dragstart", a);
				f.unbind("drag", h);
				f.unbind("dragend", d);
				w && clearTimeout(w)
			})
		},
		options: {
			xaxis: {
				zoomRange: null,
				panRange: null
			},
			zoom: {
				interactive: !1,
				trigger: "dblclick",
				amount: 1.5
			},
			pan: {
				interactive: !1,
				cursor: "move",
				frameRate: 20
			}
		},
		name: "navigate",
		version: "1.3"
	})
})(jQuery);
(function(g) {
	var k = 10,
		z = 0.95;
	g.plot.plugins.push({
		init: function(n) {
			function a(a) {
				for (var d = 0, f = 0, h = 0, k = r.series.pie.combine.color, n = [], q = 0; q < a
					.length; ++q) {
					var t = a[q].data;
					g.isArray(t) && 1 == t.length && (t = t[0]);
					g.isArray(t) ? !isNaN(parseFloat(t[1])) && isFinite(t[1]) ? t[1] = +t[1] : t[1] =
						0 : t = !isNaN(parseFloat(t)) && isFinite(t) ? [1, +t] : [1, 0];
					a[q].data = [t]
				}
				for (q = 0; q < a.length; ++q) d += a[q].data[0][1];
				for (q = 0; q < a.length; ++q) t = a[q].data[0][1], t / d <= r.series.pie.combine
					.threshold && (f += t, h++, k || (k = a[q].color));
				for (q = 0; q <
					a.length; ++q) t = a[q].data[0][1], (2 > h || t / d > r.series.pie.combine
					.threshold) && n.push(g.extend(a[q], {
					data: [
						[1, t]
					],
					color: a[q].color,
					label: a[q].label,
					angle: 2 * t * Math.PI / d,
					percent: t / (d / 100)
				}));
				1 < h && n.push({
					data: [
						[1, f]
					],
					color: k,
					label: r.series.pie.combine.label,
					angle: 2 * f * Math.PI / d,
					percent: f / (d / 100)
				});
				return n
			}

			function h(a, f) {
				function h() {
					t.clearRect(0, 0, w, x);
					G.children().filter(".pieLabel, .pieLabelBackground").remove()
				}

				function n() {
					var a = r.series.pie.shadow.left,
						d = r.series.pie.shadow.top,
						f = r.series.pie.shadow.alpha,
						g = 1 < r.series.pie.radius ? r.series.pie.radius : O * r.series.pie.radius;
					if (!(g >= w / 2 - a || g * r.series.pie.tilt >= x / 2 - d || 10 >= g)) {
						t.save();
						t.translate(a, d);
						t.globalAlpha = f;
						t.fillStyle = "#000";
						t.translate(H, L);
						t.scale(1, r.series.pie.tilt);
						for (a = 1; 10 >= a; a++) t.beginPath(), t.arc(0, 0, g, 0, 2 * Math.PI, !1), t
							.fill(), g -= a;
						t.restore()
					}
				}

				function q() {
					function a(d, f, g) {
						0 >= d || isNaN(d) || (g ? t.fillStyle = f : (t.strokeStyle = f, t.lineJoin =
								"round"), t.beginPath(), 1E-9 < Math.abs(d - 2 * Math.PI) && t
							.moveTo(0, 0), t.arc(0, 0, k, n, n + d / 2, !1), t.arc(0, 0,
								k, n + d / 2, n + d, !1), t.closePath(), n += d, g ? t.fill() : t
							.stroke())
					}

					function f() {
						for (var a = h, d = 1 < r.series.pie.label.radius ? r.series.pie.label.radius :
								O * r.series.pie.label.radius, k = 0; k < V.length; ++k) {
							if (V[k].percent >= 100 * r.series.pie.label.threshold) {
								var n;
								n = V[k];
								var q = a,
									t = k;
								if (0 == n.data[0][1]) n = !0;
								else {
									var C = r.legend.labelFormatter,
										I = void 0,
										m = r.series.pie.label.formatter,
										I = C ? C(n.label, n) : n.label;
									m && (I = m(I, n));
									C = (q + n.angle + q) / 2;
									q = H + Math.round(Math.cos(C) * d);
									C = L + Math.round(Math.sin(C) * d) * r.series.pie.tilt;
									G.append("\x3cspan class\x3d'pieLabel' id\x3d'pieLabel" +
										t + "' style\x3d'position:absolute;top:" + C + "px;left:" +
										q + "px;'\x3e" + I + "\x3c/span\x3e");
									t = G.children("#pieLabel" + t);
									I = C - t.height() / 2;
									C = q - t.width() / 2;
									t.css("top", I);
									t.css("left", C);
									0 < 0 - I || 0 < 0 - C || 0 > x - (I + t.height()) || 0 > w - (C + t
										.width()) ? n = !1 : (0 != r.series.pie.label.background
										.opacity && (q = r.series.pie.label.background.color,
											null == q && (q = n.color), n = "top:" + I +
											"px;left:" + C + "px;", g(
												"\x3cdiv class\x3d'pieLabelBackground' style\x3d'position:absolute;width:" +
												t.width() + "px;height:" + t.height() + "px;" + n +
												"background-color:" +
												q + ";'\x3e\x3c/div\x3e").css("opacity", r.series
												.pie.label.background.opacity).insertBefore(t)),
										n = !0)
								}
								if (!n) return !1
							}
							a += V[k].angle
						}
						return !0
					}
					var h = Math.PI * r.series.pie.startAngle,
						k = 1 < r.series.pie.radius ? r.series.pie.radius : O * r.series.pie.radius;
					t.save();
					t.translate(H, L);
					t.scale(1, r.series.pie.tilt);
					t.save();
					for (var n = h, C = 0; C < V.length; ++C) V[C].startAngle = n, a(V[C].angle, V[C]
						.color, !0);
					t.restore();
					if (0 < r.series.pie.stroke.width) {
						t.save();
						t.lineWidth = r.series.pie.stroke.width;
						n = h;
						for (C = 0; C < V.length; ++C) a(V[C].angle,
							r.series.pie.stroke.color, !1);
						t.restore()
					}
					d(t);
					t.restore();
					return r.series.pie.label.show ? f() : !0
				}
				if (G) {
					var w = a.getPlaceholder().width(),
						x = a.getPlaceholder().height(),
						A = G.children().filter(".legend").children().width() || 0;
					t = f;
					$ = !1;
					O = Math.min(w, x / r.series.pie.tilt) / 2;
					L = x / 2 + r.series.pie.offset.top;
					H = w / 2;
					"auto" == r.series.pie.offset.left ? (H = r.legend.position.match("w") ? H + A / 2 :
							H - A / 2, H < O ? H = O : H > w - O && (H = w - O)) : H += r.series.pie
						.offset.left;
					var V = a.getData(),
						A = 0;
					do 0 < A && (O *= z), A += 1, h(), 0.8 >= r.series.pie.tilt &&
						n(); while (!q() && A < k);
					A >= k && (h(), G.prepend(
						"\x3cdiv class\x3d'error'\x3eCould not draw pie with labels contained inside canvas\x3c/div\x3e"
						));
					a.setSeries && a.insertLegend && (a.setSeries(V), a.insertLegend())
				}
			}

			function d(a) {
				if (0 < r.series.pie.innerRadius) {
					a.save();
					var d = 1 < r.series.pie.innerRadius ? r.series.pie.innerRadius : O * r.series.pie
						.innerRadius;
					a.globalCompositeOperation = "destination-out";
					a.beginPath();
					a.fillStyle = r.series.pie.stroke.color;
					a.arc(0, 0, d, 0, 2 * Math.PI, !1);
					a.fill();
					a.closePath();
					a.restore();
					a.save();
					a.beginPath();
					a.strokeStyle = r.series.pie.stroke.color;
					a.arc(0, 0, d, 0, 2 * Math.PI, !1);
					a.stroke();
					a.closePath();
					a.restore()
				}
			}

			function x(a) {
				A("plothover", a)
			}

			function f(a) {
				A("plotclick", a)
			}

			function A(a, d) {
				var f = n.offset(),
					g = parseInt(d.pageX - f.left);
				a: {
					for (var f = parseInt(d.pageY - f.top), h = n.getData(), k = n.getOptions(), k =
							1 < k.series.pie.radius ? k.series.pie.radius : O * k.series.pie.radius,
							q, x, z = 0; z < h.length; ++z) {
						var y = h[z];
						if (y.pie.show) {
							t.save();
							t.beginPath();
							t.moveTo(0, 0);
							t.arc(0, 0, k, y.startAngle, y.startAngle +
								y.angle / 2, !1);
							t.arc(0, 0, k, y.startAngle + y.angle / 2, y.startAngle + y.angle, !1);
							t.closePath();
							q = g - H;
							x = f - L;
							if (t.isPointInPath) {
								if (t.isPointInPath(g - H, f - L)) {
									t.restore();
									g = {
										datapoint: [y.percent, y.data],
										dataIndex: 0,
										series: y,
										seriesIndex: z
									};
									break a
								}
							} else {
								var A = k * Math.cos(y.startAngle),
									T = k * Math.sin(y.startAngle),
									$ = k * Math.cos(y.startAngle + y.angle / 4),
									Z = k * Math.sin(y.startAngle + y.angle / 4),
									fa = k * Math.cos(y.startAngle + y.angle / 2),
									ba = k * Math.sin(y.startAngle + y.angle / 2),
									ia = k * Math.cos(y.startAngle + y.angle / 1.5),
									ha = k * Math.sin(y.startAngle +
										y.angle / 1.5),
									ga = k * Math.cos(y.startAngle + y.angle),
									ja = k * Math.sin(y.startAngle + y.angle),
									A = [
										[0, 0],
										[A, T],
										[$, Z],
										[fa, ba],
										[ia, ha],
										[ga, ja]
									];
								q = [q, x];
								x = !1;
								T = -1;
								$ = A.length;
								for (Z = $ - 1; ++T < $; Z = T)(A[T][1] <= q[1] && q[1] < A[Z][1] ||
									A[Z][1] <= q[1] && q[1] < A[T][1]) && q[0] < (A[Z][0] - A[T]
									[0]) * (q[1] - A[T][1]) / (A[Z][1] - A[T][1]) + A[T][0] && (
									x = !x);
								if (x) {
									t.restore();
									g = {
										datapoint: [y.percent, y.data],
										dataIndex: 0,
										series: y,
										seriesIndex: z
									};
									break a
								}
							}
							t.restore()
						}
					}
					g = null
				}
				if (r.grid.autoHighlight)
					for (f = 0; f < U.length; ++f) h = U[f], h.auto == a && !(g && h.series ==
						g.series) && (h = h.series, null == h && (U = [], n.triggerRedrawOverlay()),
						h = w(h), -1 != h && (U.splice(h, 1), n.triggerRedrawOverlay()));
				g && (f = g.series, h = w(f), -1 == h ? (U.push({
					series: f,
					auto: a
				}), n.triggerRedrawOverlay()) : a || (U[h].auto = !1));
				G.trigger(a, [{
					pageX: d.pageX,
					pageY: d.pageY
				}, g])
			}

			function w(a) {
				for (var d = 0; d < U.length; ++d)
					if (U[d].series == a) return d;
				return -1
			}
			var q = null,
				G = null,
				r = null,
				O = null,
				H = null,
				L = null,
				$ = !1,
				t = null,
				U = [];
			n.hooks.processOptions.push(function(a, d) {
				d.series.pie.show && (d.grid.show = !1, "auto" == d.series.pie.label.show &&
					(d.series.pie.label.show = d.legend.show ? !1 : !0), "auto" == d.series
					.pie.radius && (d.series.pie.radius = d.series.pie.label.show ? 0.75 :
						1), 1 < d.series.pie.tilt ? d.series.pie.tilt = 1 : 0 > d.series.pie
					.tilt && (d.series.pie.tilt = 0))
			});
			n.hooks.bindEvents.push(function(a, d) {
				var g = a.getOptions();
				g.series.pie.show && (g.grid.hoverable && d.unbind("mousemove").mousemove(x), g
					.grid.clickable && d.unbind("click").click(f))
			});
			n.hooks.processDatapoints.push(function(d, f, h, k) {
				d.getOptions().series.pie.show && !$ && ($ = !0, q = d.getCanvas(),
					G = g(q).parent(), r = d.getOptions(), d.setData(a(d.getData())))
			});
			n.hooks.drawOverlay.push(function(a, f) {
				if (a.getOptions().series.pie.show) {
					var g = a.getOptions(),
						h = 1 < g.series.pie.radius ? g.series.pie.radius : O * g.series.pie
						.radius;
					f.save();
					f.translate(H, L);
					f.scale(1, g.series.pie.tilt);
					for (var k = 0; k < U.length; ++k) {
						var n = U[k].series;
						0 >= n.angle || isNaN(n.angle) || (f.fillStyle =
							"rgba(255, 255, 255, " + g.series.pie.highlight.opacity + ")", f
							.beginPath(), 1E-9 < Math.abs(n.angle - 2 * Math.PI) && f
							.moveTo(0, 0), f.arc(0, 0, h, n.startAngle,
								n.startAngle + n.angle / 2, !1), f.arc(0, 0, h, n
								.startAngle + n.angle / 2, n.startAngle + n.angle, !1), f
							.closePath(), f.fill())
					}
					d(f);
					f.restore()
				}
			});
			n.hooks.draw.push(function(a, d) {
				a.getOptions().series.pie.show && h(a, d)
			})
		},
		options: {
			series: {
				pie: {
					show: !1,
					radius: "auto",
					innerRadius: 0,
					startAngle: 1.5,
					tilt: 1,
					shadow: {
						left: 5,
						top: 15,
						alpha: 0.02
					},
					offset: {
						top: 0,
						left: "auto"
					},
					stroke: {
						color: "#fff",
						width: 1
					},
					label: {
						show: "auto",
						formatter: function(g, a) {
							return "\x3cdiv style\x3d'font-size:x-small;text-align:center;padding:2px;color:" +
								a.color +
								";'\x3e" + g + "\x3cbr/\x3e" + Math.round(a.percent) + "%\x3c/div\x3e"
						},
						radius: 1,
						background: {
							color: null,
							opacity: 0
						},
						threshold: 0
					},
					combine: {
						threshold: -1,
						color: null,
						label: "Other"
					},
					highlight: {
						opacity: 0.5
					}
				}
			}
		},
		name: "pie",
		version: "1.1"
	})
})(jQuery);
(function(g, k, z) {
	function n(q) {
		!0 === x && (x = q || 1);
		for (var z = a.length - 1; 0 <= z; z--) {
			var r = g(a[z]);
			if (r[0] == k || r.is(":visible")) {
				var O = r.width(),
					H = r.height(),
					L = r.data(A);
				if (L && (O !== L.w || H !== L.h)) r.trigger(f, [L.w = O, L.h = H]), x = q || !0
			} else L = r.data(A), L.w = 0, L.h = 0
		}
		null !== d && (x && (null == q || 1E3 > q - x) ? d = k.requestAnimationFrame(n) : (d = setTimeout(n, h[w]),
			x = !1))
	}
	"$:nomunge";
	var a = [],
		h = g.resize = g.extend(g.resize, {}),
		d, x = !1,
		f = "resize",
		A = f + "-special-event",
		w = "pendingDelay";
	h[w] = 200;
	h.activeDelay = 20;
	h.throttleWindow = !0;
	g.event.special[f] = {
		setup: function() {
			if (!h.throttleWindow && this.setTimeout) return !1;
			var f = g(this);
			a.push(this);
			f.data(A, {
				w: f.width(),
				h: f.height()
			});
			1 === a.length && (d = z, n())
		},
		teardown: function() {
			if (!h.throttleWindow && this.setTimeout) return !1;
			for (var f = g(this), k = a.length - 1; 0 <= k; k--)
				if (a[k] == this) {
					a.splice(k, 1);
					break
				} f.removeData(A);
			a.length || (x ? cancelAnimationFrame(d) : clearTimeout(d), d = null)
		},
		add: function(a) {
			function d(a, k, h) {
				var n = g(this),
					q = n.data(A) || {};
				q.w = k !== z ? k : n.width();
				q.h = h !== z ? h : n.height();
				f.apply(this, arguments)
			}
			if (!h.throttleWindow && this.setTimeout) return !1;
			var f;
			if (typeof a === "function") return f = a, d;
			f = a.handler;
			a.handler = d
		}
	};
	k.requestAnimationFrame || (k.requestAnimationFrame = function() {
		return k.webkitRequestAnimationFrame || k.mozRequestAnimationFrame || k.oRequestAnimationFrame || k
			.msRequestAnimationFrame || function(a, d) {
				return k.setTimeout(function() {
					a((new Date).getTime())
				}, h.activeDelay)
			}
	}());
	k.cancelAnimationFrame || (k.cancelAnimationFrame = k.webkitCancelRequestAnimationFrame || k
		.mozCancelRequestAnimationFrame || k.oCancelRequestAnimationFrame ||
		k.msCancelRequestAnimationFrame || clearTimeout)
})(jQuery, this);
(function(g) {
	g.plot.plugins.push({
		init: function(g) {
			function z() {
				var n = g.getPlaceholder();
				0 == n.width() || 0 == n.height() || (g.resize(), g.setupGrid(), g.draw())
			}
			g.hooks.bindEvents.push(function(g, a) {
				g.getPlaceholder().resize(z)
			});
			g.hooks.shutdown.push(function(g, a) {
				g.getPlaceholder().unbind("resize", z)
			})
		},
		options: {},
		name: "resize",
		version: "1.0"
	})
})(jQuery);