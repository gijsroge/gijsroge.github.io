import anime from 'animejs'
import settings from 'js/utils/settings'

function run() {
    arrowAnimation();
    rippleAnimation();
}

function arrowAnimation() {
    anime({
        targets: settings.badgeIndication.arrow,
        duration: 600,
        easing: 'easeInOutCubic',
        direction: 'alternate',
        loop: true,
        translateY: ['-15px', '30px'],
    })
}

function rippleAnimation() {
    anime({
        targets: settings.badgeIndication.ripples,
        duration: 2500,
        easing: 'easeInOutCubic',
        opacity: [
            {value: ['.05', '.25']},
            {value: ['.25', '.05']}
        ],
        scale: [
            {value: ['1.05', '.95']},
            {value: ['.95', '1.05']}
        ],
        loop: true,
        delay: function (el, i, l) {
            return i * 250;
        }
    })
}

export {run as badgeIndication};