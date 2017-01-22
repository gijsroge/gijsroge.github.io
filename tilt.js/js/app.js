$(() => {
    const tilt = $('.js-tilt').tilt();
    const tiltOutput = $('.js-tilt-output').tilt();
    tiltOutput.on('change', function (e, transforms) {
       const output = $(this).closest('.js-parent').find('.js-output');
       $(`<li><strong>X: </strong>${transforms.percentageX} | <strong>Y: </strong>${transforms.percentageY}</li>`).prependTo(output);
    });

    $('.js-destroy').on('click', function () {
        const element = $(this).closest('.js-parent').find('.js-tilt');
        element[0].methods.destroy();
    });

    $('.js-enable').on('click', function () {
        const element = $(this).closest('.js-parent').find('.js-tilt');
        element.tilt();
    });
});