import anime from 'animejs'
import settings from 'js/utils/settings'
const colors = settings.animations.colors;
const animation = settings.animations;


/**
 * Turn status circle red to indicate "something went wrong"
 */
export default function () {

    const errorSound = new Audio('audio/error.mp3');
    errorSound.play();

    anime.remove(settings.status.circleBorder);
    anime({
        targets: settings.status.circleBorder,
        duration: settings.animations.enter,
        backgroundColor: [
            {value: colors.error, duration: animation.enter, easing: 'linear'},
            {value: colors.circleBorder, delay: animation.errorHold, duration: animation.exit, easing: 'linear'}
        ],
        scale: [
            {value: 1.1, duration: animation.enter, easing: 'easeOutElastic'},
            {value: 1, delay: animation.errorHold + 50, duration: animation.exit, easing: 'easeOutCirc'}
        ],
    });

    // Hide gif element
    anime.remove(settings.gif.element);
    anime({
        targets: settings.gif.element,
        duration: animation.enter,
        opacity: 0
    });

    anime.remove(settings.status.circleBg);
    anime({
        targets: settings.status.circleBg,
        scale: [
            {value: 1.05, duration: animation.enter - 150, easing: 'easeOutElastic'},
            {value: 1, delay: animation.errorHold, duration: animation.exit, easing: 'easeOutCirc'}
        ],
    });

    // Center name vertically
    const name = document.querySelector(settings.status.errorMessage);
    const top = -(name.clientHeight / 2);
    Object.assign(name.style, {marginTop: top,});

    anime.remove(settings.status.errorMessage);
    anime({
        targets: settings.status.errorMessage,
        opacity: [
            {value: [0, 1], duration: animation.enter, delay: 150, easing: 'linear'},
            {value: 0, delay: animation.errorHold - 250, duration: animation.exit, easing: 'linear'}
        ],
        scale: [
            {value: [0.5, 1], duration: animation.enter, delay: 150, easing: 'easeOutElastic'},
            {value: 0.5, delay: animation.errorHold - 250, duration: animation.exit, easing: 'easeOutCirc'}
        ]
    });


    // Stop current success message animations and add new exit animation.
    anime.remove(settings.status.message);
    anime({
        targets: settings.status.message,
        opacity: [
            {value: 0, duration: animation.exit, easing: 'linear'}
        ],
        scale: [
            {value: 0.5, duration: animation.exit, easing: 'easeOutCirc'}
        ]
    });


    // Show error message
    anime.remove(settings.status.title);
    anime({
        targets: settings.status.title,
        opacity: [
            {value: 0, duration: animation.enter, easing: 'easeOutQuint'},
            {value: 1, delay: animation.errorHold, duration: animation.exit, easing: 'linear'}
        ],
        scale: [
            {value: [1, 1.5], duration: animation.enter, easing: 'easeOutElastic'},
            {value: 1, delay: animation.errorHold, duration: animation.exit, easing: 'easeOutCirc'}
        ],
        delay: function (el, i, l) {
            return i * 50;
        }
    });
}