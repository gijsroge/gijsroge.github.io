import anime from 'animejs'
import settings from 'js/utils/settings'

const colors = settings.animations.colors;
const animation = settings.animations;

/*
 Turn status circle green to show the badge has been successfully.
 */
export default function () {

    const successSound = new Audio('audio/success.mp3');
    successSound.play();

    /**
     * Show green circle
     */
    anime.remove(settings.status.circleBorder);
    anime({
        targets: settings.status.circleBorder,
        duration: animation.enter,
        backgroundColor: [
            {value: colors.success, duration: animation.enter, easing: 'linear'},
            {value: colors.circleBorder, delay: animation.hold, duration: animation.exit, easing: 'linear'}
        ],
        scale: [
            {value: [1, 1.1], duration: animation.enter, easing: 'easeOutElastic'},
            {value: 1, delay: animation.hold + 50, duration: animation.exit, easing: 'easeOutCirc'}
        ]
    });

    anime.remove(settings.status.circleBg);
    anime({
        targets: settings.status.circleBg,
        scale: [
            {value: [1, 1.05], duration: animation.enter - 150, easing: 'easeOutElastic'},
            {value: 1, delay: animation.hold, duration: animation.exit, easing: 'easeOutCirc'}
        ],
    });


    // Animate gif
    anime({
        targets: settings.gif.element,
        scale: [
            {value: [1, 1.05], duration: animation.enter - 150, easing: 'easeOutElastic'},
            {value: 1, delay: animation.hold, duration: animation.exit, easing: 'easeOutCirc'}
        ],
        opacity: [
            {value: [0, .5], duration: 200, delay: 150, easing: 'linear'},
            {value: 0, delay: animation.hold - 150, duration: 200, easing: 'linear'}
        ],
    });


    /**
     * Create highlight loop on floating background icons
     */
    anime({
        targets: `${settings.background.icons} img`,
        duration: 600,
        easing: 'easeOutCubic',
        opacity: [
            {value: 0.5},
            {value: 0.25},
        ],
        delay: function (el, i, l) {
            return i * 50;
        }
    });

    /**
     * Show success message
     */

    // Center name vertically
    const name = document.querySelector(settings.status.message);
    const top = -(name.clientHeight / 2);
    Object.assign(name.style, {marginTop: top,});

    anime.remove(settings.status.message);
    anime({
        targets: settings.status.message,
        opacity: [
            {value: [0, 1], duration: animation.enter, delay: 150, easing: 'linear'},
            {value: 0, delay: animation.hold - 250, duration: animation.exit, easing: 'linear'}
        ],
        scale: [
            {value: [0.5, 1], duration: animation.enter, delay: 150, easing: 'easeOutElastic'},
            {value: 0.5, delay: animation.hold - 250, duration: animation.exit, easing: 'easeOutCirc'}
        ]
    });

    // Stop current error animations and add new exit animation.
    anime.remove(settings.status.errorMessage);
    anime({
        targets: settings.status.errorMessage,
        opacity: [
            {value: 0, duration: animation.exit, easing: 'linear'}
        ],
        scale: [
            {value: 0.5, duration: animation.exit, easing: 'easeOutCirc'}
        ]
    });

    anime.remove(settings.status.title);
    anime({
        targets: settings.status.title,
        opacity: [
            {value: 0, duration: animation.enter, easing: 'easeOutQuint'},
            {value: 1, delay: animation.hold, duration: animation.exit, easing: 'linear'}
        ],
        scale: [
            {value: [1, 1.5], duration: animation.enter, easing: 'easeOutElastic'},
            {value: 1, delay: animation.hold, duration: animation.exit, easing: 'easeOutCirc'}
        ],
        delay: function (el, i, l) {
            return i * 50;
        }
    });
}