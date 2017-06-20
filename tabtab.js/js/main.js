$(window).load(function() {
    $(".tabs").tabtab({
        animateHeight: !1,
        fixedHeight: !1
    }), $(".tabdemo--one").tabtab({
        animateHeight: !0,
        fixedHeight: !1,
        scale: 1,
        rotateX: 0,
        speed: 500,
        transformOrigin: "center left",
        rotateY: 90,
        easing: "easeInOutCubic",
        translateX: 0,
        tabMenu: ".tabdemo__menu",
        tabContent: ".tabdemo__content"
    }), $(".tabdemo--two").tabtab({
        animateHeight: !0,
        fixedHeight: !1,
        scale: 1,
        rotateX: 0,
        speed: 500,
        transformOrigin: "center left",
        rotateY: 90,
        easing: "easeInOutCubic",
        translateX: 0,
        tabMenu: ".tabdemo__menu",
        tabContent: ".tabdemo__content"
    }), $(".package-managers-toggle").toggle({
        "class": "open",
        target: !1
    })
});