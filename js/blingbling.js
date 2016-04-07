var c = document.getElementById('canv'),
    $ = c.getContext('2d'),
    w = c.width = document.body.clientWidth,
    h = c.height = document.body.clientHeight,

    t = 0,
    n = 1,
    num = 200,
    s, a, b,
    x, y, _x, _y,
    _t = 1 / 1000,
    rot = t / 2;

var anim = function() {
    window.requestAnimationFrame(anim);
    $.fillStyle = 'hsla(255, 255%, 255%, 1)';
    $.fillRect(0, 0, w, h);

    for (var i = 0; i < n; i++) {
        a = (-i) * Math.PI / (n);
        x = 0;
        $.beginPath();
        $.rotate(rot);

        for (var j = 0; j < num; j++) {
            $.strokeStyle = 'hsla(55, 15%, 75%, '+ j / 100+')';

            s = Math.sin(15, Math.atan2((2, j * (num - j)), .93));
            x += 10.4 * s;
            y = x * Math.sin(b * a + 3 * t + x * -360) / -3;
            _x = x * Math.cos(b) + y * Math.sin(a);
            _y = x * Math.sin(b) + y * Math.cos(a);
            b = (j * -3) * Math.PI / 2;
            $.arc(w / 2 + _x * 2, h / 2 + _y * 2, 0, 0, 2 * Math.PI);
        }
        $.lineWidth = 1;
        $.stroke();
        $.rotate(rot);
    }
    t += _t;
};
anim();

window.addEventListener('resize', function() {
    c.width = document.body.clientWidth
    c.height = document.body.clientHeight;
}, false);