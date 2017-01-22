'use strict';

$(function () {
    var tilt = $('.js-tilt').tilt();
    var tiltOutput = $('.js-tilt-output').tilt();
    tiltOutput.on('change', function (e, transforms) {
        var output = $(this).closest('.js-parent').find('.js-output');
        $('<li><strong>X: </strong>' + transforms.percentageX + ' | <strong>Y: </strong>' + transforms.percentageY + '</li>').prependTo(output);
    });

    $('.js-destroy').on('click', function () {
        var element = $(this).closest('.js-parent').find('.js-tilt');
        element.tilt.destroy.call(element);
    });

    $('.js-enable').on('click', function () {
        var element = $(this).closest('.js-parent').find('.js-tilt');
        element.tilt();
    });
});
//# sourceMappingURL=app.js.map
