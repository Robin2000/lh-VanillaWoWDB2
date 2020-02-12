var json_data = 0,
    new_json_data = 0,
    data = {},
    needlevel = 9,
    canusepoint = 51,
    t1_total = 0,
    t2_total = 0,
    t3_total = 0,
    lines = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ],
    url = 0,
    mc = 0;
function setAllTalent(e) {
    dom(".rat").trigger("click");
    var ids=e[0]
    var arr=e[1];
    setTimeout(function() {
        clickNext(arr, 0, arr[0], ids);    /*init click times arr[0]*/
    }, 100);
}

function clickNext(arr, index, clickTimes, ids){
    if(index >= arr.length) {
        return;
    }
    if(clickTimes <= 0) {
        setTimeout(function() {
            clickNext(arr, index+1, arr[index+1], ids);   /*init click times arr[index+1]*/
        }, 10);
        return;
    }

    var icon=dom('#'+ids[index]);
    
    unlock(dom(icon));

    leftClickIcons(dom(icon), ids[index]);

    setTimeout(function() {
        clickNext(arr, index, clickTimes-1, ids);
    }, 10);
    
}


function moveTalent(e, t, n, i) {
    if(data[t]==undefined)return;
    var r = '<div class="talent_float_info" id="tf' + e.attr("id") + '"><table>';
    r += '<tr><td class="name" colspan="2">' + data[t].n + "</td></tr>", r += '<tr><td class="rank" colspan="2">\u7b49\u7ea7 <span class="_r">' + data[t].rank + "</span>/" + data[t].p + "</td></tr>", n < data[t].uti.p && (r += '<tr><td class="u" colspan="2">\u9700\u8981' + data[t].uti.p + "\u70b9\u5728" + data[t].uti.n + "</td></tr>"), 0 != data[t].up && i < data[t].up && (r += '<tr class="up_tips"><td class="u" colspan="2">\u9700\u8981' + data[t].up + "\u70b9\u5728" + data[t].upn + "\u5929\u8d4b</td></tr>"), r += "string" == typeof data[t].d ? '<tr><td class="des" colspan="2">' + data[t].d + "</td></tr>" : '<tr><td class="des" colspan="2">' + (0 == data[t].rank ? data[t].d[0] : data[t].d[data[t].rank - 1]) + "</td></tr>", r += '<tr><td class="tips">\u70b9\u51fb\u5b66\u4e60\uff0c\u53f3\u952e\u5fd8\u5374</td><td class="cp"></td></tr>', r += "</table></div>", dom("body").append(r)
}

function leftClickIcons(e, t) {
    if(data[t]==undefined)return;
    if (!e.hasClass("locked") && !e.hasClass("max") && e.find(".icon_bubble").length > 0 && 60 >= needlevel && canusepoint > 0 && 1 * e.children(".icon_bubble").html() <= data[t].p) {
        e.children(".icon_bubble").html(1 * e.children(".icon_bubble").html() + 1), data[t].rank += 1, dom("#tf" + e.attr("id")).find("._r").html(1 * dom("#tf" + e.attr("id")).find("._r").html() + 1);
        var n;
        "0" == e.find("input[name=up]").val() ? lines[getThisTalentType(e)][0] += 1 : "5" == e.find("input[name=up]").val() ? lines[getThisTalentType(e)][1] += 1 : "10" == e.find("input[name=up]").val() ? lines[getThisTalentType(e)][2] += 1 : "15" == e.find("input[name=up]").val() ? lines[getThisTalentType(e)][3] += 1 : "20" == e.find("input[name=up]").val() ? lines[getThisTalentType(e)][4] += 1 : "25" == e.find("input[name=up]").val() ? lines[getThisTalentType(e)][5] += 1 : "30" == e.find("input[name=up]").val() && (lines[getThisTalentType(e)][6] += 1), n = "string" == typeof data[t].d ? data[t].d : 0 == data[t].rank ? data[t].d[0] : data[t].d[data[t].rank - 1], dom("#tf" + e.attr("id")).find(".des").html(n), e.parents(".tsb").hasClass("t1") ? dom(".t1_total").html(t1_total += 1) : e.parents(".tsb").hasClass("t2") ? dom(".t2_total").html(t2_total += 1) : e.parents(".tsb").hasClass("t3") && dom(".t3_total").html(t3_total += 1), dom(".needlevel").html(needlevel += 1), dom(".canusepoint").html(canusepoint -= 1), 1 * e.children(".icon_bubble").html() == data[t].p && (e.addClass("max"), e.children(".icon_border").css("background-position", "-42px 0"), e.children(".icon_bubble").css("color", "#e7ba00"));
        var i, r, o = e.parents(".tsb_table").find(".icons"),
            a = 1 * e.parents(".tsb").find(".tsb_info span").html();
        $.each(o, function () {
            i = dom(this).find("input[name=ut]").val(), i > 0 && (r = dom(this).parents(".tsb").find("#" + i)), dom(this).children("input[name=up]").val() <= a && 0 == i && dom(this).hasClass("locked") ? (dom(this).removeClass("locked"), dom(this).prepend('<div class="icon_bubble">0</div>'), dom(m(this).find(".icon_border").css("background-position", "-84px 0"), dom(this).find(".icon_img").attr("src", "/images/icons/talent/" + dom(this).find(".icon_img").attr("alt") + ".jpg"), dom(this).find("input[name=uplock]").val("0")) : dom(this).children("input[name=up]").val() <= a && i > 0 && r.hasClass("max") && dom(this).hasClass("locked") && (dom(this).removeClass("locked"), dom(this).prepend('<div class="icon_bubble">0</div>'), dom(this).find(".icon_border").css("background-position", "-84px 0"), dom(this).find(".icon_img").attr("src", "/images/icons/talent/" + dom(this).find(".icon_img").attr("alt") + ".jpg"), dom(this).find("input[name=utlock]").val("0"), dom(this).find("input[name=uplock]").val("0")), dom(this).hasClass("max") && dom("#tf" + e.attr("id")).find(".up_tips").remove()
        }), 0 >= canusepoint && $.each(dom(".icons"), function () {
            1 * dom(this).find(".icon_bubble").html() == 0 && (dom(this).addClass("locked"), dom(this).find(".icon_border").css("background-position", "0 0"), dom(this).find(".icon_bubble").remove(), dom(this).find(".icon_img").attr("src", "/images/icons/talent/" + dom(this).find(".icon_img").attr("alt") + "_grey.jpg"))
        })
    }
}

function rightClickIcons(e) {
    if (1 * e.find(".icon_bubble").html() > 0 && e.find(".icon_bubble").length > 0 && 1 * e.parents(".tsb").find(".tsb_info span").html() > 0 && needlevel >= 10 && 60 >= needlevel && 51 >= canusepoint) {
        var t = e.parents(".tsb_table").find(".icons"),
            n = 1 * e.parents(".tsb").find(".tsb_info span").html(),
            i = new Array,
            r = 0,
            o = 0,
            a = 0,
            s = 0,
            l = 0,
            u = 0,
            c = 0;
        $.each(t, function () {
            var t = dom(this);
            e.attr("id") == t.find(".ut" + e.attr("id")).val() && i.push(t)
        }), $.each(t, function () {
            var t = dom(this);
            t.find(".icon_bubble").length > 0 && 1 * t.find(".icon_bubble").html() > 0 && (lines[getThisTalentType(e)][1] >= 1 && n - lines[getThisTalentType(e)][1] - lines[getThisTalentType(e)][2] - lines[getThisTalentType(e)][3] - lines[getThisTalentType(e)][4] - lines[getThisTalentType(e)][5] - lines[getThisTalentType(e)][6] == 5 && (r = 1), lines[getThisTalentType(e)][2] >= 1 && n - lines[getThisTalentType(e)][2] - lines[getThisTalentType(e)][3] - lines[getThisTalentType(e)][4] - lines[getThisTalentType(e)][5] - lines[getThisTalentType(e)][6] == 10 && (r = 1, o = 1), lines[getThisTalentType(e)][3] >= 1 && n - lines[getThisTalentType(e)][3] - lines[getThisTalentType(e)][4] - lines[getThisTalentType(e)][5] - lines[getThisTalentType(e)][6] == 15 && (r = 1, o = 1, a = 1), lines[getThisTalentType(e)][4] >= 1 && n - lines[getThisTalentType(e)][4] - lines[getThisTalentType(e)][5] - lines[getThisTalentType(e)][6] == 20 && (r = 1, o = 1, a = 1, s = 1), lines[getThisTalentType(e)][5] >= 1 && n - lines[getThisTalentType(e)][5] - lines[getThisTalentType(e)][6] == 25 && (r = 1, o = 1, a = 1, s = 1, l = 1), lines[getThisTalentType(e)][6] >= 1 && n - lines[getThisTalentType(e)][6] == 30 && (r = 1, o = 1, a = 1, s = 1, l = 1, u = 1), 0 != i.length && $.each(i, function () {
                dom(this).find("input[name=ut]").val() == t.attr("id") && 1 * dom(this).find(".icon_bubble").html() > 0 && (c = 1)
            }))
        }), "0" == e.find("input[name=up]").val() && 1 != r && 1 != c ? subTalent(e, data, i, n) : "5" == e.find("input[name=up]").val() && 1 != o && 1 != c ? subTalent(e, data, i, n) : "10" == e.find("input[name=up]").val() && 1 != a && 1 != c ? subTalent(e, data, i, n) : "15" == e.find("input[name=up]").val() && 1 != s && 1 != c ? subTalent(e, data, i, n) : "20" == e.find("input[name=up]").val() && 1 != l && 1 != c ? subTalent(e, data, i, n) : "25" == e.find("input[name=up]").val() && 1 != u && 1 != c ? subTalent(e, data, i, n) : "30" == e.find("input[name=up]").val() && subTalent(e, data, i, n)
    }
}

function subTalent(e, t, n, i) {
    var r = e.attr("id");
    e.hasClass("max") && (e.removeClass("max"), e.find(".icon_border").css("background-position", "-84px 0"), e.find(".icon_bubble").css("color", "#1eff00")), 30 >= i && $.each(e.parents(".tsb").find(".line7"), function () {
        dom(this).find("input[name=uplock]").val("1")
    }), 25 >= i && $.each(e.parents(".tsb").find(".line6"), function () {
        dom(this).find("input[name=uplock]").val("1")
    }), 20 >= i && $.each(e.parents(".tsb").find(".line5"), function () {
        dom(this).find("input[name=uplock]").val("1")
    }), 15 >= i && $.each(e.parents(".tsb").find(".line4"), function () {
        dom(this).find("input[name=uplock]").val("1")
    }), 10 >= i && $.each(e.parents(".tsb").find(".line3"), function () {
        dom(this).find("input[name=uplock]").val("1")
    }), 5 >= i && $.each(e.parents(".tsb").find(".line2"), function () {
        dom(this).find("input[name=uplock]").val("1")
    }), 0 != n.length && $.each(n, function () {
        1 * e.find(".icon_bubble").html() <= t[r].p && e.attr("id") == dom(this).find("input[name=ut]").val() && dom(this).find("input[name=utlock]").val("1")
    }), lock(e.parents(".tsb").find(".icons")), e.children(".icon_bubble").html(1 * e.children(".icon_bubble").html() - 1), t[r].rank -= 1, dom("#tf" + e.attr("id")).find("._r").html(1 * dom("#tf" + e.attr("id")).find("._r").html() - 1);
    var o;
    o = "string" == typeof t[r].d ? t.d : 0 == t[r].rank ? t[r].d[0] : t[r].d[t[r].rank - 1], dom("#tf" + e.attr("id")).find(".des").html(o), "0" == e.find("input[name=up]").val() ? lines[getThisTalentType(e)][0] -= 1 : "5" == e.find("input[name=up]").val() ? lines[getThisTalentType(e)][1] -= 1 : "10" == e.find("input[name=up]").val() ? lines[getThisTalentType(e)][2] -= 1 : "15" == e.find("input[name=up]").val() ? lines[getThisTalentType(e)][3] -= 1 : "20" == e.find("input[name=up]").val() ? lines[getThisTalentType(e)][4] -= 1 : "25" == e.find("input[name=up]").val() ? lines[getThisTalentType(e)][5] -= 1 : "30" == e.find("input[name=up]").val() && (lines[getThisTalentType(e)][6] -= 1), e.parents(".tsb").hasClass("t1") ? dom(".t1_total").html(t1_total -= 1) : e.parents(".tsb").hasClass("t2") ? dom(".t2_total").html(t2_total -= 1) : e.parents(".tsb").hasClass("t3") && dom(".t3_total").html(t3_total -= 1), dom(".needlevel").html(needlevel -= 1), dom(".canusepoint").html(canusepoint += 1), 9 == needlevel && 51 == canusepoint ? (dom(".needlevel").html("--"), dom(".canusepoint").html("--")) : (dom(".needlevel").html(needlevel), dom(".canusepoint").html(canusepoint)), 59 == needlevel && 1 == canusepoint && resetOtherTalent()
}

function lock(e) {
    $.each(e, function () {
        (dom(this).find(".icon_bubble").length > 0 && "1" == dom(this).find("input[name=uplock]").val() || dom(this).find(".icon_bubble").length > 0 && "1" == dom(this).find("input[name=utlock]").val()) && (dom(this).addClass("locked"), dom(this).find(".icon_border").css("background-position", "0 0"), dom(this).find(".icon_bubble").remove(), dom(this).find(".icon_img").attr("src", "/images/icons/talent/" + dom(this).find(".icon_img").attr("alt") + "_grey.jpg"))
    })
}

function unlock(e) {
    $.each(dom(e).find(".line1"), function () {
        dom(this).find(".icon_bubble").length <= 0 && (dom(this).removeClass("locked"), dom(this).find(".icon_border").css("background-position", "-84px 0"), dom(this).prepend('<div class="icon_bubble">0</div>'), dom(this).find(".icon_img").attr("src", "/images/icons/talent/" + dom(this).find(".icon_img").attr("alt") + ".jpg"))
    })
}

function resetOtherTalent() {
    $.each(dom(".icons"), function () {
        var e = dom(this);
        "0" == e.find("input[name=uplock]").val() && "0" == e.find("input[name=utlock]").val() && e.find(".icon_bubble").length <= 0 && (e.removeClass("locked"), e.find(".icon_border").css("background-position", "-84px 0"), e.prepend('<div class="icon_bubble">0</div>'), e.find(".icon_img").attr("src", "/images/icons/talent/" + e.find(".icon_img").attr("alt") + ".jpg"))
    })
}

function getThisTalentType(e) {
    return e.parents(".tsb").hasClass("t1") ? 0 : e.parents(".tsb").hasClass("t2") ? 1 : e.parents(".tsb").hasClass("t3") ? 2 : void 0
}

function jsoncallback(e) {
    var t = "";
    if (e.status >= 0) {
        $.each(e.list, function (n, i) {
            1 == e.block_id || 2 == e.block_id || 3 == e.block_id || 4 == e.block_id || 5 == e.block_id || 7 == e.block_id || 9 == e.block_id || 10 == e.block_id || 12 == e.block_id || 13 == e.block_id || 14 == e.block_id || 96 == e.block_id ? t += '<div class="borad_dds"><a href="' + i.short_url + '" target="_blank"><img src="' + i.image_url + '" /></a></div>' : 6 == e.block_id || 8 == e.block_id || 17 == e.block_id || 15 == e.block_id ? t += '<li><a href="' + i.short_url + '" target="_blank"><img src="' + i.image_url + '" /></a></li>' : 16 == e.block_id ? t += '<div class="borad_dds ardds2"><a href="' + i.short_url + '" target="_blank"><img src="' + i.image_url + '" /></a></div>' : 11 == e.block_id ? t += '<a href="' + i.short_url + '" target="_blank"><img src="' + i.image_url + '" /></a>' : (e.block_id >= 18 && e.block_id <= 35 || 94 == e.block_id || 95 == e.block_id) && (t += '<a href="' + i.short_url + '" target="_blank"><img src="' + i.image_url + '" /></a>')
        });
        var n = dom(window).height() / 2 - 275,
            i = 126;
        if (18 == e.block_id || 20 == e.block_id || 22 == e.block_id || 24 == e.block_id || 26 == e.block_id || 28 == e.block_id || 30 == e.block_id || 32 == e.block_id || 34 == e.block_id || 94 == e.block_id) {
            var r = (dom(window).width() - 1e3) / 2,
                o = 0;
            r - i >= 0 && (o = r - i), dom(".wow_float_left").css({
                top: n,
                left: o,
                position: "fixed",
                "z-index": 99999
            })
        }
        if (19 == e.block_id || 21 == e.block_id || 23 == e.block_id || 25 == e.block_id || 27 == e.block_id || 29 == e.block_id || 31 == e.block_id || 33 == e.block_id || 35 == e.block_id || 95 == e.block_id) {
            var a = (dom(window).width() - 1e3) / 2,
                s = 0;
            a - i >= 0 && (s = a - i), dom(".wow_float_right").css({
                top: n,
                right: s,
                position: "fixed",
                "z-index": 99999
            })
        }
        dom(".wow_block_list_" + e.block_id).html(t), dom(".wow_block_list").fadeIn("slow")
    }
}

function hb() {
    var e = Date.parse(new Date) / 1e3;
    if (e > 1540051200 && 1541952e3 > e) {
        dom("body").append('<div class="hb_box"><a href="https://s.click.taobao.com/Xtr7DLw" target="_blank"><img src="/images/hb_ani.gif"></a></div>');
        var t = dom(window).width() / 2 - dom(".footer .middle").width() / 2;
        dom(".hb_box").css("right", t);
        var n = "hb_D9bq3442Zl1_" + timetrans(e, ""),
            i = getCookie(n);
        i ? "0" == i && setHbDom(n, timetrans(e, "-")) : setHbDom(n, timetrans(e, "-"))
    }
}

function isMobile() {
    var e = navigator.userAgent;
    return e.indexOf("Android") > -1 || e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1 || e.indexOf("iPod") > -1 || e.indexOf("Symbian") > -1
}

function setHbDom(e, t) {
    dom("body").append("<div class='hb_layout'></div>").css("overflow-y", "hidden"), dom("body").append('<div class="hb_img"><a href="https://s.click.taobao.com/Xtr7DLw" target="_blank"><img src="/images/hb.png"></a></div>');
    var n = dom(window).width() / 2 - dom(".hb_img").width() / 2,
        i = dom(window).height() / 2 - dom(".hb_img").height() / 2;
    dom(".hb_img").css({
        top: i,
        left: n
    }), dom(".hb_img a").click(function () {
        dom(".hb_layout").remove(), dom(".hb_img").remove(), dom("body").css("overflow-y", "scroll"), setCookie(e, "1", t)
    })
}

function setCookie(e, t, n) {
    var i = new Date(n + " 00:00:00");
    i.setTime(i.getTime() + 864e5), document.cookie = e + "=" + escape(t) + ";expires=" + i.toGMTString()
}

function getCookie(e) {
    for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
        var r = n[i].trim();
        if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
    }
    return !1
}

function timetrans(e, t) {
    var e = new Date(1e3 * e),
        n = e.getFullYear() + t,
        i = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + t,
        r = e.getDate() < 10 ? "0" + e.getDate() : e.getDate();
    return n + i + r
}! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);
        return "function" === n || pe.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (pe.isFunction(t)) return pe.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return pe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (we.test(t)) return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function (e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }

    function r(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = {};
        return pe.each(e.match(je) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (a(), pe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(He, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Le.test(n) ? pe.parseJSON(n) : n
                } catch (r) {}
                pe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, i) {
        if (Ae(e)) {
            var r, o, a = pe.expando,
                s = e.nodeType,
                l = s ? pe.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = ne.pop() || pe.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: pe.noop
            }), "object" != typeof t && "function" != typeof t || (i ? l[u] = pe.extend(l[u], t) : l[u].data = pe.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pe.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[pe.camelCase(t)])) : r = o, r
        }
    }

    function d(e, t, n) {
        if (Ae(e)) {
            var i, r, o = e.nodeType,
                a = o ? pe.cache : e,
                s = o ? e[pe.expando] : pe.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in i ? t = [t] : (t = pe.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !u(i) : !pe.isEmptyObject(i)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? pe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }

    function f(e, t, n, i) {
        var r, o = 1,
            a = 20,
            s = i ? function () {
                return i.cur()
            } : function () {
                return pe.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            c = (pe.cssNumber[t] || "px" !== u && +l) && Fe.exec(pe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do o = o || ".5", c /= o, pe.style(e, t, c + u); while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function p(e) {
        var t = ze.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        var n, i, r = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || pe.nodeName(i, t) ? o.push(i) : pe.merge(o, h(i, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o
    }

    function m(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) pe._data(n, "globalEval", !t || pe._data(t[i], "globalEval"))
    }

    function g(e) {
        Pe.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t, n, i, r) {
        for (var o, a, s, l, u, c, d, f = e.length, v = p(t), b = [], y = 0; f > y; y++)
            if (a = e[y], a || 0 === a)
                if ("object" === pe.type(a)) pe.merge(b, a.nodeType ? [a] : a);
                else if (Ue.test(a)) {
            for (l = l || v.appendChild(t.createElement("div")), u = (Ie.exec(a) || ["", ""])[1].toLowerCase(), d = Xe[u] || Xe._default, l.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
            if (!de.leadingWhitespace && We.test(a) && b.push(t.createTextNode(We.exec(a)[0])), !de.tbody)
                for (a = "table" !== u || Je.test(a) ? "<table>" !== d[1] || Je.test(a) ? 0 : l : l.firstChild, o = a && a.childNodes.length; o--;) pe.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (pe.merge(b, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = v.lastChild
        } else b.push(t.createTextNode(a));
        for (l && v.removeChild(l), de.appendChecked || pe.grep(h(b, "input"), g), y = 0; a = b[y++];)
            if (i && pe.inArray(a, i) > -1) r && r.push(a);
            else if (s = pe.contains(a.ownerDocument, a), l = h(v.appendChild(a), "script"), s && m(l), n)
            for (o = 0; a = l[o++];) Be.test(a.type || "") && n.push(a);
        return l = null, v
    }

    function b() {
        return !0
    }

    function y() {
        return !1
    }

    function x() {
        try {
            return ie.activeElement
        } catch (e) {}
    }

    function T(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) T(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = y;
        else if (!r) return e;
        return 1 === o && (a = r, r = function (e) {
            return pe().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = pe.guid++)), e.each(function () {
            pe.event.add(this, t, r, i, n)
        })
    }

    function k(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function w(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
    }

    function _(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function dom(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, i, r, o = pe._data(e),
                a = pe._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, r = s[n].length; r > i; i++) pe.event.add(t, n, s[n][i])
            }
            a.data && (a.data = pe.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) {
                r = pe._data(t);
                for (i in r.events) pe.removeEvent(t, i, r.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (w(t).text = e.text, _(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Pe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function E(e, t, n, i) {
        t = oe.apply([], t);
        var r, o, a, s, l, u, c = 0,
            d = e.length,
            f = d - 1,
            p = t[0],
            m = pe.isFunction(p);
        if (m || d > 1 && "string" == typeof p && !de.checkClone && it.test(p)) return e.each(function (r) {
            var o = e.eq(r);
            m && (t[0] = p.call(this, r, o.html())), E(o, t, n, i)
        });
        if (d && (u = v(t, e[0].ownerDocument, !1, e, i), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
            for (s = pe.map(h(u, "script"), w), a = s.length; d > c; c++) o = u, c !== f && (o = pe.clone(o, !0, !0), a && pe.merge(s, h(o, "script"))), n.call(e[c], o, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, pe.map(s, _), c = 0; a > c; c++) o = s[c], Be.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(l, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
            u = r = null
        }
        return e
    }

    function S(e, t, n) {
        for (var i, r = t ? pe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || pe.cleanData(h(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && m(h(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function j(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body),
            i = pe.css(n[0], "display");
        return n.detach(), i
    }

    function N(e) {
        var t = ie,
            n = ut[e];
        return n || (n = j(e, t), "none" !== n && n || (lt = (lt || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write(), t.close(), n = j(e, t), lt.detach()), ut[e] = n), n
    }

    function D(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function A(e) {
        if (e in _t) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = wt.length; n--;)
            if (e = wt[n] + t, e in _t) return e
    }

    function L(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = pe._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Oe(i) && (o[a] = pe._data(i, "olddisplay", N(i.nodeName)))) : (r = Oe(i), (n && "none" !== n || !r) && pe._data(i, "olddisplay", r ? n : pe.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function H(e, t, n) {
        var i = xt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function q(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += pe.css(e, n + Me[o], !0, r)), i ? ("content" === n && (a -= pe.css(e, "padding" + Me[o], !0, r)), "margin" !== n && (a -= pe.css(e, "border" + Me[o] + "Width", !0, r))) : (a += pe.css(e, "padding" + Me[o], !0, r), "padding" !== n && (a += pe.css(e, "border" + Me[o] + "Width", !0, r)));
        return a
    }

    function F(t, n, i) {
        var r = !0,
            o = "width" === n ? t.offsetWidth : t.offsetHeight,
            a = ht(t),
            s = de.boxSizing && "border-box" === pe.css(t, "boxSizing", !1, a);
        if (ie.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if (o = mt(t, n, a), (0 > o || null == o) && (o = t.style[n]), dt.test(o)) return o;
            r = s && (de.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
        }
        return o + q(t, n, i || (s ? "border" : "content"), r, a) + "px"
    }

    function M(e, t, n, i, r) {
        return new M.prototype.init(e, t, n, i, r)
    }

    function O() {
        return e.setTimeout(function () {
            $t = void 0
        }), $t = pe.now()
    }

    function R(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Me[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function P(e, t, n) {
        for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function I(e, t, n) {
        var i, r, o, a, s, l, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Oe(e),
            m = pe._data(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, pe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = pe.css(e, "display"), c = "none" === u ? pe._data(e, "olddisplay") || N(e.nodeName) : u, "inline" === c && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", de.shrinkWrapBlocks() || d.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], Et.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    h = !0
                }
                f[i] = m && m[i] || pe.style(e, i)
            } else u = void 0;
        if (pe.isEmptyObject(f)) "inline" === ("none" === u ? N(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = pe._data(e, "fxshow", {}), o && (m.hidden = !h), h ? pe(e).show() : d.done(function () {
                pe(e).hide()
            }), d.done(function () {
                var t;
                pe._removeData(e, "fxshow");
                for (t in f) pe.style(e, t, f[t])
            });
            for (i in f) a = P(h ? m[i] : 0, i, d), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function B(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = pe.camelCase(n), r = t[i], o = e[n], pe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = pe.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function W(e, t, n) {
        var i, r, o = 0,
            a = W.prefilters.length,
            s = pe.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var t = $t || O(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(!0, {
                    specialEasing: {},
                    easing: pe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: $t || O(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = pe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (B(c, u.opts.specialEasing); a > o; o++)
            if (i = W.prefilters[o].call(u, e, c, u.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(i.stop, i)), i;
        return pe.map(c, P, u), pe.isFunction(u.opts.start) && u.opts.start.call(e, u), pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function z(e) {
        return pe.attr(e, "class") || ""
    }

    function X(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(je) || [];
            if (pe.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function U(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, pe.each(e[s] || [], function (e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            a = e === Qt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function J(e, t) {
        var n, i, r = pe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && pe.extend(!0, e, n), e
    }

    function V(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                } if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function Y(e, t, n, i) {
        var r, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (r in u)
                    if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    } if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function G(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }

    function Q(e) {
        for (; e && 1 === e.nodeType;) {
            if ("none" === G(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function K(e, t, n, i) {
        var r;
        if (pe.isArray(t)) pe.each(t, function (t, r) {
            n || nn.test(e) ? i(e, r) : K(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== pe.type(t)) i(e, t);
        else
            for (r in t) K(e + "[" + r + "]", t[r], n, i)
    }

    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var ne = [],
        ie = e.document,
        re = ne.slice,
        oe = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        le = {},
        ue = le.toString,
        ce = le.hasOwnProperty,
        de = {},
        fe = "1.12.1",
        pe = function (e, t) {
            return new pe.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([\da-z])/gi,
        ve = function (e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: fe,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function () {
            return re.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : re.call(this)
        },
        pushStack: function (e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e) {
            return pe.each(this, e)
        },
        map: function (e) {
            return this.pushStack(pe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    }, pe.extend = pe.fn.extend = function () {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (r = arguments[s]))
                for (i in r) e = a[i], n = r[i], a !== n && (u && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[i] = pe.extend(u, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, pe.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === pe.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e) return ce.call(e, t);
            for (t in e);
            return void 0 === t || ce.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function (t) {
            t && pe.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(me, "ms-").replace(ge, ve)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t) {
            var i, r = 0;
            if (n(e))
                for (i = e.length; i > r && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? pe.merge(i, "string" == typeof e ? [e] : e) : ae.call(i, e)), i
        },
        inArray: function (e, t, n) {
            var i;
            if (t) {
                if (se) return se.call(t, e, n);
                for (i = t.length,
                    n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
            return r
        },
        map: function (e, t, i) {
            var r, o, a = 0,
                s = [];
            if (n(e))
                for (r = e.length; r > a; a++) o = t(e[a], a, i), null != o && s.push(o);
            else
                for (a in e) o = t(e[a], a, i), null != o && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), pe.isFunction(e) ? (n = re.call(arguments, 2), i = function () {
                return e.apply(t || this, n.concat(re.call(arguments)))
            }, i.guid = e.guid = e.guid || pe.guid++, i) : void 0
        },
        now: function () {
            return +new Date
        },
        support: de
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var be = function (e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, u, d, p, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((t ? t.ownerDocument || t : P) !== A && D(t), t = t || A, H)) {
                if (11 !== m && (u = ve.exec(e)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(r))) return n;
                            if (a.id === r) return n.push(a), n
                        } else if (h && (a = h.getElementById(r)) && O(t, a) && a.id === r) return n.push(a), n
                    } else {
                        if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                    } if (T.qsa && !X[e + " "] && (!q || !q.test(e))) {
                    if (1 !== m) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ye, "\\$&") : t.setAttribute("id", s = R), d = dom(e), o = d.length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; o--;) d[o] = l + " " + f(d[o]);
                        p = d.join(","), h = be.test(e) && c(t.parentNode) || t
                    }
                    if (p) try {
                        return K.apply(n, h.querySelectorAll(p)), n
                    } catch (g) {} finally {
                        s === R && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(se, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[R] = !0, e
        }

        function r(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = B++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function (t, n, a) {
                var s, l, u, c = [I, o];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (u = t[R] || (t[R] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[i]) && s[0] === I && s[1] === o) return c[2] = s[2];
                            if (l[i] = c, c[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
            return a
        }

        function v(e, t, n, r, o, a) {
            return r && !r[R] && (r = v(r)), o && !o[R] && (o = v(o, a)), i(function (i, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    v = i || m(t || "*", s.nodeType ? [s] : s, []),
                    b = !e || !i && t ? v : g(v, f, e, s, l),
                    y = n ? o || (i ? e : h || r) ? [] : a : b;
                if (n && n(b, y, s, l), r)
                    for (u = g(y, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (y[p[c]] = !(b[p[c]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = y.length; c--;)(d = y[c]) && u.push(b[c] = d);
                            o(null, y = [], u, l)
                        }
                        for (c = y.length; c--;)(d = y[c]) && (u = o ? ee(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
                    }
                } else y = g(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, l) : K.apply(a, y)
            })
        }

        function b(e) {
            for (var t, n, i, r = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = p(function (e) {
                    return e === t
                }, a, !0), u = p(function (e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function (e, n, i) {
                    var r = !o && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; r > s; s++)
                if (n = k.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = k.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                        for (i = ++s; r > i && !k.relative[e[i].type]; i++);
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, i > s && b(e.slice(s, i)), r > i && b(e = e.slice(i)), r > i && f(e))
                    }
                    c.push(n)
                } return h(c)
        }

        function y(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function (i, a, s, l, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        b = S,
                        y = i || o && k.find.TAG("*", u),
                        x = I += null == b ? 1 : Math.random() || .1,
                        T = y.length;
                    for (u && (S = a === A || a || u); h !== T && null != (c = y[h]); h++) {
                        if (o && c) {
                            for (d = 0, a || c.ownerDocument === A || (D(c), s = !H); f = e[d++];)
                                if (f(c, a || A, s)) {
                                    l.push(c);
                                    break
                                } u && (I = x)
                        }
                        r && ((c = !f && c) && p--, i && m.push(c))
                    }
                    if (p += h, r && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (i) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = G.call(l));
                            v = g(v)
                        }
                        K.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (I = x, S = b), m
                };
            return r ? i(a) : a
        }
        var x, T, k, w, _, $, C, E, S, j, N, D, A, L, H, q, F, M, O, R = "sizzle" + 1 * new Date,
            P = e.document,
            I = 0,
            B = 0,
            W = n(),
            z = n(),
            X = n(),
            U = function (e, t) {
                return e === t && (N = !0), 0
            },
            J = 1 << 31,
            V = {}.hasOwnProperty,
            Y = [],
            G = Y.pop,
            Q = Y.push,
            K = Y.push,
            Z = Y.slice,
            ee = function (e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            fe = new RegExp("^" + ie + "$"),
            pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            ye = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Te = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ke = function () {
                D()
            };
        try {
            K.apply(Y = Z.call(P.childNodes), P.childNodes), Y[P.childNodes.length].nodeType
        } catch (we) {
            K = {
                apply: Y.length ? function (e, t) {
                    Q.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        T = t.support = {}, _ = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : P;
            return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, L = A.documentElement, H = !_(A), (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), T.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), T.getElementsByTagName = r(function (e) {
                return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
            }), T.getElementsByClassName = ge.test(A.getElementsByClassName), T.getById = r(function (e) {
                return L.appendChild(e).id = R, !A.getElementsByName || !A.getElementsByName(R).length
            }), T.getById ? (k.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, k.filter.ID = function (e) {
                var t = e.replace(xe, Te);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function (e) {
                var t = e.replace(xe, Te);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = T.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, k.find.CLASS = T.getElementsByClassName && function (e, t) {
                return "undefined" != typeof t.getElementsByClassName && H ? t.getElementsByClassName(e) : void 0
            }, F = [], q = [], (T.qsa = ge.test(A.querySelectorAll)) && (r(function (e) {
                L.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || q.push(".#.+[+~]")
            }), r(function (e) {
                var t = A.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (T.matchesSelector = ge.test(M = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function (e) {
                T.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), F.push("!=", oe)
            }), q = q.length && new RegExp(q.join("|")), F = F.length && new RegExp(F.join("|")), t = ge.test(L.compareDocumentPosition), O = t || ge.test(L.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function (e, t) {
                if (e === t) return N = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === P && O(P, e) ? -1 : t === A || t.ownerDocument === P && O(P, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return N = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!r || !o) return e === A ? -1 : t === A ? 1 : r ? -1 : o ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (r === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? a(s[i], l[i]) : s[i] === P ? -1 : l[i] === P ? 1 : 0
            }, A) : A
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== A && D(e), n = n.replace(ce, "='$1']"), T.matchesSelector && H && !X[n + " "] && (!F || !F.test(n)) && (!q || !q.test(n))) try {
                var i = M.call(e, n);
                if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {}
            return t(n, A, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== A && D(e), O(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== A && D(e);
            var n = k.attrHandle[t.toLowerCase()],
                i = n && V.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== i ? i : T.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (N = !T.detectDuplicates, j = !T.sortStable && e.slice(0), e.sort(U), N) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return j = null, e
        }, w = t.getText = function (e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += w(t);
            return n
        }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xe, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = dom(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xe, Te).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, i) {
                    return function (r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            b = !l && !s,
                            y = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && b) {
                                for (f = g, d = f[R] || (f[R] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === I && u[1], y = p && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (y = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++y && f === t) {
                                        c[e] = [I, p, y];
                                        break
                                    }
                            } else if (b && (f = t, d = f[R] || (f[R] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === I && u[1], y = p), y === !1)
                                for (;
                                    (f = ++p && f && f[m] || (y = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++y || (b && (d = f[R] || (f[R] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [I, y]), f !== t)););
                            return y -= r, y === i || y % i === 0 && y / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        r = C(e.replace(se, "$1"));
                    return r[R] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return e = e.replace(xe, Te),
                        function (t) {
                            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function (e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Te).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === L
                },
                focus: function (e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !k.pseudos.empty(e)
                },
                header: function (e) {
                    return me.test(e.nodeName)
                },
                input: function (e) {
                    return he.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (e, t) {
                    return [t - 1]
                }),
                eq: u(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) k.pseudos[x] = l(x);
        return d.prototype = k.filters = k.pseudos, k.setFilters = new d, $ = t.tokenize = function (e, n) {
            var i, r, o, a, s, l, u, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = k.preFilter; s;) {
                i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(se, " ")
                }), s = s.slice(i.length));
                for (a in k.filter) !(r = pe[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
        }, C = t.compile = function (e, t) {
            var n, i = [],
                r = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = dom(e)), n = t.length; n--;) o = b(t[n]), o[R] ? i.push(o) : r.push(o);
                o = X(e, y(r, i)), o.selector = e
            }
            return o
        }, E = t.select = function (e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e,
                d = !i && dom(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && T.getById && 9 === t.nodeType && H && k.relative[o[1].type]) {
                    if (t = (k.find.ID(a.matches[0].replace(xe, Te), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !k.relative[s = a.type]);)
                    if ((l = k.find[s]) && (i = l(a.matches[0].replace(xe, Te), be.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && f(o), !e) return K.apply(n, i), n;
                        break
                    }
            }
            return (u || C(e, d))(i, t, !H, n, !t || be.test(e) && c(t.parentNode) || t), n
        }, T.sortStable = R.split("").sort(U).join("") === R, T.detectDuplicates = !!N, D(), T.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), T.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    pe.find = be, pe.expr = be.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = be.uniqueSort, pe.text = be.getText, pe.isXMLDoc = be.isXML, pe.contains = be.contains;
    var ye = function (e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && pe(e).is(n)) break;
                    i.push(e)
                } return i
        },
        xe = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Te = pe.expr.match.needsContext,
        ke = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        we = /^.[^:#\[\.,]*$/;
    pe.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function (e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function () {
                for (t = 0; r > t; t++)
                    if (pe.contains(i[t], this)) return !0
            }));
            for (t = 0; r > t; t++) pe.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function (e) {
            return !!i(this, "string" == typeof e && Te.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var _e, $e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Ce = pe.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || _e, "string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : $e.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), ke.test(i[1]) && pe.isPlainObject(t))
                        for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (r = ie.getElementById(i[2]), r && r.parentNode) {
                    if (r.id !== i[2]) return _e.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = ie, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
        };
    Ce.prototype = pe.fn, _e = pe(ie);
    var Ee = /^(?:parents|prev(?:Until|All))/,
        Se = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pe.fn.extend({
        has: function (e) {
            var t, n = pe(e, this),
                i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++)
                    if (pe.contains(this, n[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], a = Te.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ye(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ye(e, "parentNode", n)
        },
        next: function (e) {
            return r(e, "nextSibling")
        },
        prev: function (e) {
            return r(e, "previousSibling")
        },
        nextAll: function (e) {
            return ye(e, "nextSibling")
        },
        prevAll: function (e) {
            return ye(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ye(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ye(e, "previousSibling", n)
        },
        siblings: function (e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return xe(e.firstChild)
        },
        contents: function (e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function (e, t) {
        pe.fn[e] = function (n, i) {
            var r = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Se[e] || (r = pe.uniqueSort(r)), Ee.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var je = /\S+/g;
    pe.Callbacks = function (e) {
        e = "string" == typeof e ? o(e) : pe.extend({}, e);
        var t, n, i, r, a = [],
            s = [],
            l = -1,
            u = function () {
                for (r = e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
            },
            c = {
                add: function () {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function i(t) {
                        pe.each(t, function (t, n) {
                            pe.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== pe.type(n) && i(n)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function () {
                    return pe.each(arguments, function (e, t) {
                        for (var n;
                            (n = pe.inArray(t, a, n)) > -1;) a.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function (e) {
                    return e ? pe.inArray(e, a) > -1 : a.length > 0
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return r = s = [], a = n = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return r = !0, n || c.disable(), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    }, pe.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", pe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return pe.Deferred(function (n) {
                            pe.each(t, function (t, o) {
                                var a = pe.isFunction(e[t]) && e[t];
                                r[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? pe.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, pe.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function (e) {
            var t, n, i, r = 0,
                o = re.call(arguments),
                a = o.length,
                s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : pe.Deferred(),
                u = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && pe.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var Ne;
    pe.fn.ready = function (e) {
        return pe.ready.promise().done(e), this
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function (e) {
            (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, e !== !0 && --pe.readyWait > 0 || (Ne.resolveWith(ie, [pe]), pe.fn.triggerHandler && (pe(ie).triggerHandler("ready"), pe(ie).off("ready"))))
        }
    }), pe.ready.promise = function (t) {
        if (!Ne)
            if (Ne = pe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(pe.ready);
            else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
        else {
            ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ie.documentElement
            } catch (i) {}
            n && n.doScroll && ! function r() {
                if (!pe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return e.setTimeout(r, 50)
                    }
                    a(), pe.ready()
                }
            }()
        }
        return Ne.promise(t)
    }, pe.ready.promise();
    var De;
    for (De in pe(de)) break;
    de.ownFirst = "0" === De, de.inlineBlockNeedsLayout = !1, pe(function () {
            var e, t, n, i;
            n = ie.getElementsByTagName("body")[0], n && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function () {
            var e = ie.createElement("div");
            de.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                de.deleteExpando = !1
            }
            e = null
        }();
    var Ae = function (e) {
            var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        },
        Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        He = /([A-Z])/g;
    pe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (e) {
                return e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando], !!e && !u(e)
            },
            data: function (e, t, n) {
                return c(e, t, n)
            },
            removeData: function (e, t) {
                return d(e, t)
            },
            _data: function (e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return d(e, t, !0)
            }
        }), pe.fn.extend({
            data: function (e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = pe.camelCase(i.slice(5)), l(o, i, r[i])));
                        pe._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function () {
                    pe.data(this, e)
                }) : arguments.length > 1 ? this.each(function () {
                    pe.data(this, e, t)
                }) : o ? l(o, e, pe.data(o, e)) : void 0
            },
            removeData: function (e) {
                return this.each(function () {
                    pe.removeData(this, e)
                })
            }
        }), pe.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = pe._data(e, t), n && (!i || pe.isArray(n) ? i = pe._data(e, t, pe.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = pe._queueHooks(e, t),
                    a = function () {
                        pe.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return pe._data(e, n) || pe._data(e, n, {
                    empty: pe.Callbacks("once memory").add(function () {
                        pe._removeData(e, t + "queue"), pe._removeData(e, n)
                    })
                })
            }
        }), pe.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    pe.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, i = 1,
                    r = pe.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = pe._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        }),
        function () {
            var e;
            de.shrinkWrapBlocks = function () {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = ie.getElementsByTagName("body")[0], n && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
    var qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Fe = new RegExp("^(?:([+-])=|)(" + qe + ")([a-z%]*)$", "i"),
        Me = ["Top", "Right", "Bottom", "Left"],
        Oe = function (e, t) {
            return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
        },
        Re = function (e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === pe.type(n)) {
                r = !0;
                for (s in n) Re(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, pe.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(pe(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        Pe = /^(?:checkbox|radio)$/i,
        Ie = /<([\w:-]+)/,
        Be = /^$|\/(?:java|ecma)script/i,
        We = /^\s+/,
        ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function () {
        var e = ie.createElement("div"),
            t = ie.createDocumentFragment(),
            n = ie.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, de.attributes = !e.getAttribute(pe.expando)
    }();
    var Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead,
        Xe.th = Xe.td;
    var Ue = /<|&#?\w+;/,
        Je = /<tbody/i;
    ! function () {
        var t, n, i = ie.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = i.attributes[n].expando === !1);
        i = null
    }();
    var Ve = /^(?:input|select|textarea)$/i,
        Ye = /^key/,
        Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Qe = /^(?:focusinfocus|focusoutblur)$/,
        Ke = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, m, g = pe._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = pe.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function (e) {
                        return "undefined" == typeof pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(je) || [""], s = t.length; s--;) o = Ke.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (u = pe.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = pe.event.special[p] || {}, d = pe.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && pe.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, m, g = pe.hasData(e) && pe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(je) || [""], u = t.length; u--;)
                    if (s = Ke.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = pe.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || pe.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) pe.event.remove(e, p + t[u], n, i, !0);
                pe.isEmptyObject(c) && (delete g.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function (t, n, i, r) {
            var o, a, s, l, u, c, d, f = [i || ie],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Qe.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), u = pe.event.special[p] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !pe.isWindow(i)) {
                    for (l = u.delegateType || p, Qe.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (i.ownerDocument || ie) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && Ae(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && Ae(i) && a && i[p] && !pe.isWindow(i)) {
                    c = i[a], c && (i[a] = null), pe.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {}
                    pe.event.triggered = void 0, c && (i[a] = c)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = pe.event.fix(e);
            var t, n, i, r, o, a = [],
                s = re.call(arguments),
                l = (pe._data(this, "events") || {})[e.type] || [],
                u = pe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = pe.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], n = 0; s > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? pe(r, this).index(l) > -1 : pe.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function (e) {
            if (e[pe.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Ge.test(r) ? this.mouseHooks : Ye.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== x() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === x() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return pe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            var i = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }, pe.removeEvent = ie.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
    }, pe.Event = function (e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? b : y) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: y,
        isPropagationStopped: y,
        isImmediatePropagationStopped: y,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = b, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = b, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = b, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || pe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.submit || (pe.event.special.submit = {
        setup: function () {
            return pe.nodeName(this, "form") ? !1 : void pe.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), pe._data(n, "submit", !0))
            })
        },
        postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function () {
            return pe.nodeName(this, "form") ? !1 : void pe.event.remove(this, "._submit")
        }
    }), de.change || (pe.event.special.change = {
        setup: function () {
            return Ve.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), pe.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
            })), !1) : void pe.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ve.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }), pe._data(t, "change", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return pe.event.remove(this, "._change"), !Ve.test(this.nodeName)
        }
    }), de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = pe._data(i, t);
                r || i.addEventListener(e, n, !0), pe._data(i, t, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = pe._data(i, t) - 1;
                r ? pe._data(i, t, r) : (i.removeEventListener(e, n, !0), pe._removeData(i, t))
            }
        }
    }), pe.fn.extend({
        on: function (e, t, n, i) {
            return T(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return T(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = y), this.each(function () {
                pe.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? pe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ze = / jQuery\d+="(?:null|\d+)"/g,
        et = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
        tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        at = p(ie),
        st = at.appendChild(ie.createElement("div"));
    pe.extend({
        htmlPrefilter: function (e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, r, o, a, s, l = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(o = st.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (i = h(o), s = h(e), a = 0; null != (r = s[a]); ++a) i[a] && C(r, i[a]);
            if (t)
                if (n)
                    for (s = s || h(e), i = i || h(o), a = 0; null != (r = s[a]); a++) dom(r, i[a]);
                else dom(e, o);
            return i = h(o, "script"), i.length > 0 && m(i, !l && h(e, "script")), i = s = r = null, o
        },
        cleanData: function (e, t) {
            for (var n, i, r, o, a = 0, s = pe.expando, l = pe.cache, u = de.attributes, c = pe.event.special; null != (n = e[a]); a++)
                if ((t || Ae(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(r))
                }
        }
    }), pe.fn.extend({
        domManip: E,
        detach: function (e) {
            return S(this, e, !0)
        },
        remove: function (e) {
            return S(this, e)
        },
        text: function (e) {
            return Re(this, function (e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return E(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return E(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return E(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return E(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return pe.clone(this, e, t)
            })
        },
        html: function (e) {
            return Re(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (de.htmlSerialize || !et.test(e)) && (de.leadingWhitespace || !We.test(e)) && !Xe[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return E(this, arguments, function (t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        pe.fn[e] = function (e) {
            for (var n, i = 0, r = [], o = pe(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), pe(o[i])[t](n), ae.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var lt, ut = {
            HTML: "block",
            BODY: "block"
        },
        ct = /^margin/,
        dt = new RegExp("^(" + qe + ")(?!px)[a-z%]+$", "i"),
        ft = function (e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        },
        pt = ie.documentElement;
    ! function () {
        function t() {
            var t, c, d = ie.documentElement;
            d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = s = !1, i = a = !0, e.getComputedStyle && (c = e.getComputedStyle(u), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                width: "4px"
            }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, t = u.appendChild(ie.createElement("div")), t.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", u.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), u.removeChild(t)), u.style.display = "none", o = 0 === u.getClientRects().length, o && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = u.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === t[0].offsetHeight, o && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), d.removeChild(l)
        }
        var n, i, r, o, a, s, l = ie.createElement("div"),
            u = ie.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === u.style.opacity, de.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === u.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, pe.extend(de, {
            reliableHiddenOffsets: function () {
                return null == n && t(), o
            },
            boxSizingReliable: function () {
                return null == n && t(), r
            },
            pixelMarginRight: function () {
                return null == n && t(), i
            },
            pixelPosition: function () {
                return null == n && t(), n
            },
            reliableMarginRight: function () {
                return null == n && t(), a
            },
            reliableMarginLeft: function () {
                return null == n && t(), s
            }
        }))
    }();
    var ht, mt, gt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ht = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, mt = function (e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || ht(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), n && !de.pixelMarginRight() && dt.test(a) && ct.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 === a ? a : a + ""
    }) : pt.currentStyle && (ht = function (e) {
        return e.currentStyle
    }, mt = function (e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || ht(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), dt.test(a) && !gt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var vt = /alpha\([^)]*\)/i,
        bt = /opacity\s*=\s*([^)]*)/i,
        yt = /^(none|table(?!-c[ea]).+)/,
        xt = new RegExp("^(" + qe + ")(.*)$", "i"),
        Tt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        kt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        wt = ["Webkit", "O", "Moz", "ms"],
        _t = ie.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = mt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = pe.camelCase(t),
                    l = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = A(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                if (o = typeof n, "string" === o && (r = Fe.exec(n)) && r[1] && (n = f(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = A(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = mt(e, t, i)), "normal" === o && t in kt && (o = kt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), pe.each(["height", "width"], function (e, t) {
        pe.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? yt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ft(e, Tt, function () {
                    return F(e, t, i)
                }) : F(e, t, i) : void 0
            },
            set: function (e, n, i) {
                var r = i && ht(e);
                return H(e, n, i ? q(e, t, i, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), de.opacity || (pe.cssHooks.opacity = {
        get: function (e, t) {
            return bt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = vt.test(o) ? o.replace(vt, r) : o + " " + r)
        }
    }), pe.cssHooks.marginRight = D(de.reliableMarginRight, function (e, t) {
        return t ? ft(e, {
            display: "inline-block"
        }, mt, [e, "marginRight"]) : void 0
    }), pe.cssHooks.marginLeft = D(de.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(mt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ft(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        pe.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Me[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, ct.test(e) || (pe.cssHooks[e + t].set = H)
    }), pe.fn.extend({
        css: function (e, t) {
            return Re(this, function (e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (pe.isArray(t)) {
                    for (i = ht(e), r = t.length; r > a; a++) o[t[a]] = pe.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return L(this, !0)
        },
        hide: function () {
            return L(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Oe(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }), pe.Tween = M, M.prototype = {
        constructor: M,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, pe.fx = M.prototype.init, pe.fx.step = {};
    var $t, Ct, Et = /^(?:toggle|show|hide)$/,
        St = /queueHooks$/;
    pe.Animation = pe.extend(W, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return f(n.elem, e, Fe.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(je);
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
            },
            prefilters: [I],
            prefilter: function (e, t) {
                t ? W.prefilters.unshift(e) : W.prefilters.push(e)
            }
        }), pe.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? pe.extend({}, e) : {
                complete: n || !n && t || pe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pe.isFunction(t) && t
            };
            return i.duration = pe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
            }, i
        }, pe.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Oe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = pe.isEmptyObject(e),
                    o = pe.speed(t, n, i),
                    a = function () {
                        var t = W(this, pe.extend({}, e), o);
                        (r || pe._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = pe.timers,
                        a = pe._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && St.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || pe.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = pe._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = pe.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), pe.each(["toggle", "show", "hide"], function (e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, r)
            }
        }), pe.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            pe.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), pe.timers = [], pe.fx.tick = function () {
            var e, t = pe.timers,
                n = 0;
            for ($t = pe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || pe.fx.stop(), $t = void 0
        }, pe.fx.timer = function (e) {
            pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
        }, pe.fx.interval = 13, pe.fx.start = function () {
            Ct || (Ct = e.setInterval(pe.fx.tick, pe.fx.interval))
        }, pe.fx.stop = function () {
            e.clearInterval(Ct), Ct = null
        }, pe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pe.fn.delay = function (t, n) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function () {
                    e.clearTimeout(r)
                }
            })
        },
        function () {
            var e, t = ie.createElement("input"),
                n = ie.createElement("div"),
                i = ie.createElement("select"),
                r = i.appendChild(ie.createElement("option"));
            n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = r.selected, de.enctype = !!ie.createElement("form").enctype, i.disabled = !0, de.optDisabled = !r.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
        }();
    var jt = /\r/g;
    pe.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = pe.isFunction(e), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, pe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : pe.isArray(r) && (r = pe.map(r, function (e) {
                        return null == e ? "" : e + ""
                    })), t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(jt, "") : null == n ? "" : n)
            }
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (n = i[l], (n.selected || l === r) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = pe.makeArray(t), a = r.length; a--;)
                        if (i = r[a], pe.inArray(pe.valHooks.option.get(i), o) >= 0) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function () {
        pe.valHooks[this] = {
            set: function (e, t) {
                return pe.isArray(t) ? e.checked = pe.inArray(pe(e).val(), t) > -1 : void 0
            }
        }, de.checkOn || (pe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Nt, Dt, At = pe.expr.attrHandle,
        Lt = /^(?:checked|selected)$/i,
        Ht = de.getSetAttribute,
        qt = de.input;
    pe.fn.extend({
        attr: function (e, t) {
            return Re(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), r = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Dt : Nt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = pe.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i, r = 0,
                o = t && t.match(je);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? qt && Ht || !Lt.test(n) ? e[i] = !1 : e[pe.camelCase("default-" + n)] = e[i] = !1 : pe.attr(e, n, ""), e.removeAttribute(Ht ? n : i)
        }
    }), Dt = {
        set: function (e, t, n) {
            return t === !1 ? pe.removeAttr(e, n) : qt && Ht || !Lt.test(n) ? e.setAttribute(!Ht && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = At[t] || pe.find.attr;
        qt && Ht || !Lt.test(t) ? At[t] = function (e, t, i) {
            var r, o;
            return i || (o = At[t], At[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, At[t] = o), r
        } : At[t] = function (e, t, n) {
            return n ? void 0 : e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), qt && Ht || (pe.attrHooks.value = {
        set: function (e, t, n) {
            return pe.nodeName(e, "input") ? void(e.defaultValue = t) : Nt && Nt.set(e, t, n)
        }
    }), Ht || (Nt = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, At.id = At.name = At.coords = function (e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, pe.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Nt.set
    }, pe.attrHooks.contenteditable = {
        set: function (e, t, n) {
            Nt.set(e, "" === t ? !1 : t, n)
        }
    }, pe.each(["width", "height"], function (e, t) {
        pe.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), de.style || (pe.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Ft = /^(?:input|select|textarea|button|object)$/i,
        Mt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function (e, t) {
            return Re(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = pe.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), pe.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ft.test(e.nodeName) || Mt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), de.hrefNormalized || pe.each(["href", "src"], function (e, t) {
        pe.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.optSelected || (pe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        pe.propFix[this.toLowerCase()] = this
    }), de.enctype || (pe.propFix.enctype = "encoding");
    var Ot = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, a, s, l = 0;
            if (pe.isFunction(e)) return this.each(function (t) {
                pe(this).addClass(e.call(this, t, z(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[l++];)
                    if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ot, " ")) {
                        for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = pe.trim(i), r !== s && pe.attr(n, "class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, a, s, l = 0;
            if (pe.isFunction(e)) return this.each(function (t) {
                pe(this).removeClass(e.call(this, t, z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[l++];)
                    if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ot, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        s = pe.trim(i), r !== s && pe.attr(n, "class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function (n) {
                pe(this).toggleClass(e.call(this, n, z(this), t), t)
            }) : this.each(function () {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = pe(this), o = e.match(je) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = z(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || e === !1 ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + z(n) + " ").replace(Ot, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        pe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        }
    }), pe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Rt = e.location,
        Pt = pe.now(),
        It = /\?/,
        Bt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            r = pe.trim(t + "");
        return r && !pe.trim(r.replace(Bt, function (e, t, r, o) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
        })) ? Function("return " + r)() : pe.error("Invalid JSON: " + t)
    }, pe.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
    };
    var Wt = /#.*$/,
        zt = /([?&])_=[^&]*/,
        Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Jt = /^(?:GET|HEAD)$/,
        Vt = /^\/\//,
        Yt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Gt = {},
        Qt = {},
        Kt = "*/".concat("*"),
        Zt = Rt.href,
        en = Yt.exec(Zt.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Zt,
            type: "GET",
            isLocal: Ut.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? J(J(e, pe.ajaxSettings), t) : J(pe.ajaxSettings, e)
        },
        ajaxPrefilter: X(Gt),
        ajaxTransport: X(Qt),
        ajax: function (t, n) {
            function i(t, n, i, r) {
                var o, d, b, y, T, w = n;
                2 !== x && (x = 2, l && e.clearTimeout(l), c = void 0, s = r || "", k.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, i && (y = V(f, k, i)), y = Y(f, y, k, o), o ? (f.ifModified && (T = k.getResponseHeader("Last-Modified"), T && (pe.lastModified[a] = T), T = k.getResponseHeader("etag"), T && (pe.etag[a] = T)), 204 === t || "HEAD" === f.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, d = y.data, b = y.error, o = !b)) : (b = w, !t && w || (w = "error", 0 > t && (t = 0))), k.status = t, k.statusText = (n || w) + "", o ? m.resolveWith(p, [d, w, k]) : m.rejectWith(p, [k, w, b]), k.statusCode(v), v = void 0, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [k, f, o ? d : b]), g.fireWith(p, [k, w]), u && (h.trigger("ajaxComplete", [k, f]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, a, s, l, u, c, d, f = pe.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                m = pe.Deferred(),
                g = pe.Callbacks("once memory"),
                v = f.statusCode || {},
                b = {},
                y = {},
                x = 0,
                T = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; t = Xt.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else k.always(e[k.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return c && c.abort(t), i(0, t), this
                    }
                };
            if (m.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, f.url = ((t || f.url || Zt) + "").replace(Wt, "").replace(Vt, en[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = pe.trim(f.dataType || "*").toLowerCase().match(je) || [""], null == f.crossDomain && (r = Yt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === en[1] && r[2] === en[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)), U(Gt, f, n, k), 2 === x) return k;
            u = pe.event && f.global, u && 0 === pe.active++ && pe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Jt.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (It.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = zt.test(a) ? a.replace(zt, "$1_=" + Pt++) : a + (It.test(a) ? "&" : "?") + "_=" + Pt++)), f.ifModified && (pe.lastModified[a] && k.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && k.setRequestHeader("If-None-Match", pe.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Kt + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers) k.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(p, k, f) === !1 || 2 === x)) return k.abort();
            T = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) k[o](f[o]);
            if (c = U(Qt, f, n, k)) {
                if (k.readyState = 1, u && h.trigger("ajaxSend", [k, f]), 2 === x) return k;
                f.async && f.timeout > 0 && (l = e.setTimeout(function () {
                    k.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, c.send(b, i)
                } catch (w) {
                    if (!(2 > x)) throw w;
                    i(-1, w)
                }
            } else i(-1, "No Transport");
            return k
        },
        getJSON: function (e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function (e, t) {
        pe[t] = function (e, n, i, r) {
            return pe.isFunction(n) && (r = r || i, i = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function (e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, pe.fn.extend({
        wrapAll: function (e) {
            if (pe.isFunction(e)) return this.each(function (t) {
                pe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return pe.isFunction(e) ? this.each(function (t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = pe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = pe.isFunction(e);
            return this.each(function (n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pe.expr.filters.hidden = function (e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e)
    }, pe.expr.filters.visible = function (e) {
        return !pe.expr.filters.hidden(e)
    };
    var tn = /%20/g,
        nn = /\[\]$/,
        rn = /\r?\n/g,
        on = /^(?:submit|button|image|reset|file)$/i,
        an = /^(?:input|select|textarea|keygen)/i;
    pe.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                t = pe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (n in e) K(n, e[n], t, r);
        return i.join("&").replace(tn, "+")
    }, pe.fn.extend({
        serialize: function () {
            return pe.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && an.test(this.nodeName) && !on.test(e) && (this.checked || !Pe.test(e))
            }).map(function (e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(rn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(rn, "\r\n")
                }
            }).get()
        }
    }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return this.isLocal ? ee() : ie.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var sn = 0,
        ln = {},
        un = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in ln) ln[e](void 0, !0)
    }), de.cors = !!un && "withCredentials" in un, un = de.ajax = !!un, un && pe.ajaxTransport(function (t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function (i, r) {
                    var o, a = t.xhr(),
                        s = ++sn;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
                    a.send(t.hasContent && t.data || null), n = function (e, i) {
                        var o, l, u;
                        if (n && (i || 4 === a.readyState))
                            if (delete ln[s], n = void 0, a.onreadystatechange = pe.noop, i) 4 !== a.readyState && a.abort();
                            else {
                                u = {}, o = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (c) {
                                    l = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                            } u && r(o, l, u, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = ln[s] = n : n()
                },
                abort: function () {
                    n && n(void 0, !0)
                }
            }
        }
    }), pe.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), pe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = ie.head || pe("head")[0] || ie.documentElement;
            return {
                send: function (i, r) {
                    t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var cn = [],
        dn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = cn.pop() || pe.expando + "_" + Pt++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + r) : t.jsonp !== !1 && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return a || pe.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            a = arguments
        }, i.always(function () {
            void 0 === o ? pe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, cn.push(r)), a && pe.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), de.createHTMLDocument = function () {
        if (!ie.implementation.createHTMLDocument) return !1;
        var e = ie.implementation.createHTMLDocument("");
        return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length
    }(), pe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || (de.createHTMLDocument ? ie.implementation.createHTMLDocument("") : ie);
        var i = ke.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = v([e], t, r), r && r.length && pe(r).remove(), pe.merge([], i.childNodes))
    };
    var fn = pe.fn.load;
    pe.fn.load = function (e, t, n) {
        if ("string" != typeof e && fn) return fn.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (i = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && pe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(a, o || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        pe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), pe.expr.filters.animated = function (e) {
        return pe.grep(pe.timers, function (t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, l, u, c = pe.css(e, "position"),
                d = pe(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = pe.css(e, "top"), l = pe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && pe.inArray("auto", [o, l]) > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, pe.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, pe.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = te(o), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        },
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === pe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - pe.css(i, "marginTop", !0),
                    left: t.left - n.left - pe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || pt
            })
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function (i) {
            return Re(this, function (e, i, r) {
                var o = te(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? pe(o).scrollLeft() : r, n ? r : pe(o).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }), pe.each(["top", "left"], function (e, t) {
        pe.cssHooks[t] = D(de.pixelPosition, function (e, n) {
            return n ? (n = mt(e, t), dt.test(n) ? pe(e).position()[t] + "px" : n) : void 0
        })
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            pe.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");
                return Re(this, function (t, n, i) {
                    var r;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? pe.css(t, n, a) : pe.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), pe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), pe.fn.size = function () {
        return this.length
    }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return pe
    });
    var pn = e.jQuery,
        hn = e.$;
    return pe.noConflict = function (t) {
        return e.$ === pe && (e.$ = hn), t && e.jQuery === pe && (e.jQuery = pn), pe
    }, t || (e.jQuery = e.$ = pe), pe
}),
function (e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function () {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function () {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function (e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function () {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function (t, n, i) {
            var r = e.Event(n);
            return t.trigger(r, i), r.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e[0].href
        },
        isRemote: function (e) {
            return e.data("remote") !== t && e.data("remote") !== !1
        },
        handleRemote: function (i) {
            var r, o, a, s, l, u;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    r = i.data("ujs:submit-button-formmethod") || i.attr("method"), o = i.data("ujs:submit-button-formaction") || i.attr("action"), a = e(i[0]).serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (a.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), a = i.data("params") || null);
                return u = {
                    type: r || "GET",
                    data: a,
                    dataType: l,
                    beforeSend: function (e, r) {
                        return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [e, r]) ? void i.trigger("ajax:send", e) : !1
                    },
                    success: function (e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function (e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, s && (u.xhrFields = {
                    withCredentials: s
                }), o && (u.url = o), n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function (e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function (i) {
            var r = n.href(i),
                o = i.data("method"),
                a = i.attr("target"),
                s = n.csrfToken(),
                l = n.csrfParam(),
                u = e('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            l === t || s === t || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && u.attr("target", a), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function (t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function (t) {
            n.formElements(t, n.disableSelector).each(function () {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function (e) {
            var n, i;
            n = e.is("button") ? "html" : "val", i = e.data("disable-with"), i !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
        },
        enableFormElements: function (t) {
            n.formElements(t, n.enableSelector).each(function () {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function (e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
        },
        allowAction: function (e) {
            var t, i = e.data("confirm"),
                r = !1;
            if (!i) return !0;
            if (n.fire(e, "confirm")) {
                try {
                    r = n.confirm(i)
                } catch (o) {
                    (console.error || console.log).call(console, o.stack || o)
                }
                t = n.fire(e, "confirm:complete", [r])
            }
            return r && t
        },
        blankInputs: function (t, n, i) {
            var r, o, a, s, l = e(),
                u = n || "input,textarea",
                c = t.find(u),
                d = {};
            return c.each(function () {
                r = e(this), r.is("input[type=radio]") ? (s = r.attr("name"), d[s] || (0 === t.find('input[type=radio]:checked[name="' + s + '"]').length && (a = t.find('input[type=radio][name="' + s + '"]'), l = l.add(a)), d[s] = s)) : (o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val(), o === i && (l = l.add(r)))
            }), l.length ? l : !1
        },
        nonBlankInputs: function (e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function (e) {
            var i = e.data("disable-with");
            i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function (e) {
                return n.stopEverything(e)
            }), e.data("ujs:disabled", !0)
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
        }
    }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), e(window).on("pageshow.rails", function () {
        e(e.rails.enableSelector).each(function () {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function () {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(e(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function () {
        n.enableFormElement(e(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function (t) {
        var i = e(this),
            r = i.data("method"),
            o = i.data("params"),
            a = t.metaKey || t.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(t);
        if (!a && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (a && (!r || "GET" === r) && !o) return !0;
            var s = n.handleRemote(i);
            return s === !1 ? n.enableElement(i) : s.fail(function () {
                n.enableElement(i)
            }), !1
        }
        return r ? (n.handleMethod(i), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function (t) {
        var i = e(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r === !1 ? n.enableFormElement(i) : r.fail(function () {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function (t) {
        var i = e(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
        var r, o, a = e(this),
            s = n.isRemote(a);
        if (!n.allowAction(a)) return n.stopEverything(i);
        if (a.attr("novalidate") === t)
            if (a.data("ujs:formnovalidate-button") === t) {
                if (r = n.blankInputs(a, n.requiredInputSelector, !1), r && n.fire(a, "ajax:aborted:required", [r])) return n.stopEverything(i)
            } else a.data("ujs:formnovalidate-button", t);
        if (s) {
            if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                setTimeout(function () {
                    n.disableFormElements(a)
                }, 13);
                var l = n.fire(a, "ajax:aborted:file", [o]);
                return l || setTimeout(function () {
                    n.enableFormElements(a)
                }, 13), l
            }
            return n.handleRemote(a), !1
        }
        setTimeout(function () {
            n.disableFormElements(a)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function (t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var r = i.attr("name"),
            o = r ? {
                name: r,
                value: i.val()
            } : null,
            a = i.closest("form");
        0 === a.length && (a = e("#" + i.attr("form"))), a.data("ujs:submit-button", o), a.data("ujs:formnovalidate-button", i.attr("formnovalidate")), a.data("ujs:submit-button-formaction", i.attr("formaction")), a.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function (t) {
        this === t.target && n.disableFormElements(e(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (t) {
        this === t.target && n.enableFormElements(e(this))
    }), e(function () {
        n.refreshCSRFTokens()
    }))
}(jQuery);

dom(document).ready(function () {
    dom("input[name=mc]").length > 0 && (dom("input[name=url]").length > 0 && (url = dom("input[name=url]").val()), mc = dom("input[name=mc]").val(), t1_total = 1 * dom(".t1_total").html(), t2_total = 1 * dom(".t2_total").html(), t3_total = 1 * dom(".t3_total").html(), $.getJSON("data/" + mc + ".json", function () {

    }).done(function (e) {
        json_data = e; 
        data = json_data;
        /*0 != url && setAllTalent()*/
    }), dom(".icon_a").mouseover(function () {
        var e, t = dom(this).parent(".icons"),
            n = t.attr("id"),
            i = 1 * t.parents(".tsb").find(".tsb_info span").html(),
            r = 0;
        "0" != t.find("input[name=ut]").val() && (e = t.parents(".tsb").find("#" + t.find("input[name=ut]").val()), r = e.find(".icon_bubble").length > 0 ? 1 * e.find(".icon_bubble").html() : data[n].uti.p - 1), moveTalent(t, n, r, i)
    }).mousemove(function (e) {
        var t = e.pageX,
            n = e.pageY;
        dom(".talent_float_info").css({
            left: t + 20,
            top: n - 20
        })
    }).mouseout(function () {
        dom(".talent_float_info").hide().remove()
    }).mousedown(function (e) {
        var t = dom(this).parent(".icons"),
            n = t.attr("id");
        1 == e.which ? leftClickIcons(t, n) : 3 == e.which && rightClickIcons(t)
    }), dom(".rt").click(function () {
        refreshRt(dom(this), data);
    }), dom(".rat").click(function () {
         refreshRat(data);
    }))
});
function refreshRt(e,r) {
    var t = e.parents(".tsb").find(".icons"),
    n = 0,
    i = 0;

    $.each(t, function () {
        n = dom(this).attr("id"), dom(this).removeClass("max"), 1 * dom(this).find("input[name=up]").val() > 0 || "0" == dom(this).find("input[name=up]").val() && 1 * dom(this).find("input[name=ut]").val() > 0 ? (dom(this).addClass("locked"), dom(this).find(".icon_border").css("background-position", "0 0"), dom(this).find(".icon_bubble").remove(), dom(this).find(".icon_img").attr("src", "/images/icons/talent/" + dom(this).find(".icon_img").attr("alt") + "_grey.jpg")) : (dom(this).removeClass("locked"), dom(this).find(".icon_border").css("background-position", "-84px 0"), dom(this).find(".icon_bubble").remove(), dom(this).prepend('<div class="icon_bubble">0</div>'), dom(this).find(".icon_img").attr("src", "/images/icons/talent/" + dom(this).find(".icon_img").attr("alt") + ".jpg")), "0" == dom(this).find("input[name=up]").val() && "0" == dom(this).find("input[name=ut]").val() ? (dom(this).find("input[name=uplock]").val("0"), dom(this).find("input[name=utlock]").val("0")) : 1 * dom(this).find("input[name=up]").val() > 0 && "0" == dom(this).find("input[name=ut]").val() ? (dom(this).find("input[name=uplock]").val("1"), dom(this).find("input[name=utlock]").val("0")) : 1 * dom(this).find("input[name=up]").val() > 0 && 1 * dom(this).find("input[name=ut]").val() > 0 ? (dom(this).find("input[name=uplock]").val("1"), dom(this).find("input[name=utlock]").val("1")) : "0" == dom(this).find("input[name=up]").val() && 1 * dom(this).find("input[name=ut]").val() > 0 && (dom(this).find("input[name=uplock]").val("0"), dom(this).find("input[name=utlock]").val("1")), data[n] = r[n], i = 1 * e.prev("span").html(), e.prev("span").html("0"), "1" == e.attr("id") ? (t1_total = 0, lines[0] = [0, 0, 0, 0, 0, 0, 0]) : "2" == e.attr("id") ? (t2_total = 0, lines[1] = [0, 0, 0, 0, 0, 0, 0]) : "3" == e.attr("id") && (t3_total = 0, lines[2] = [0, 0, 0, 0, 0, 0, 0]), canusepoint += i, needlevel -= i, 9 == needlevel && 51 == canusepoint ? (dom(".needlevel").html("--"), dom(".canusepoint").html("--")) : (dom(".needlevel").html(needlevel), dom(".canusepoint").html(canusepoint)), resetOtherTalent()
    })

}
function refreshRat(n) {
    var e = (dom(this), dom(".icons")),
            t = 0;
    $.each(e, function () {
        t = dom(this).attr("id"), dom(this).removeClass("max"), 1 * dom(this).find("input[name=up]").val() > 0 || "0" == dom(this).find("input[name=up]").val() && 1 * dom(this).find("input[name=ut]").val() > 0 ? (dom(this).addClass("locked"), dom(this).find(".icon_border").css("background-position", "0 0"), dom(this).find(".icon_bubble").remove(), dom(this).find(".icon_img").attr("src", "/images/icons/talent/" + dom(this).find(".icon_img").attr("alt") + "_grey.jpg")) : (dom(this).removeClass("locked"), dom(this).find(".icon_border").css("background-position", "-84px 0"), dom(this).find(".icon_bubble").remove(), dom(this).prepend('<div class="icon_bubble">0</div>'), dom(this).find(".icon_img").attr("src", "/images/icons/talent/" + dom(this).find(".icon_img").attr("alt") + ".jpg")), "0" == dom(this).find("input[name=up]").val() && "0" == dom(this).find("input[name=ut]").val() ? (dom(this).find("input[name=uplock]").val("0"), dom(this).find("input[name=utlock]").val("0")) : 1 * dom(this).find("input[name=up]").val() > 0 && "0" == dom(this).find("input[name=ut]").val() ? (dom(this).find("input[name=uplock]").val("1"), dom(this).find("input[name=utlock]").val("0")) : 1 * dom(this).find("input[name=up]").val() > 0 && 1 * dom(this).find("input[name=ut]").val() > 0 ? (dom(this).find("input[name=uplock]").val("1"), dom(this).find("input[name=utlock]").val("1")) : "0" == dom(this).find("input[name=up]").val() && 1 * dom(this).find("input[name=ut]").val() > 0 && (dom(this).find("input[name=uplock]").val("0"), dom(this).find("input[name=utlock]").val("1")), data[t] = n[t], dom(".tsb_info span").html("0"), 9 == needlevel && 51 == canusepoint ? (dom(".needlevel").html("--"), dom(".canusepoint").html("--")) : (dom(".needlevel").html(needlevel), dom(".canusepoint").html(canusepoint))
    });
    canusepoint = 51; needlevel = 9; t1_total = 0; t2_total = 0; t3_total = 0; lines = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]; resetOtherTalent();
}