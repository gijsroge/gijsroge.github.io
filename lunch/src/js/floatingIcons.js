import anime from 'animejs'
import settings from 'js/utils/settings'
import helpers from 'js/utils/helpers'

function run() {
    addImagesToPath(fetchIcons());
}

function fetchIcons() {
    return document.querySelectorAll(settings.background.icons);
}

function centerIconOnPath(element) {
    const top = -(element.clientWidth / 2);
    const left = -(element.clientHeight / 2);
    Object.assign(element.style, {top, left,});
}

function addImagesToPath(icons) {
    const path = anime.path(settings.background.path);
    const count = icons.length;

    icons.forEach((icon, i) => {

        // Center icon
        centerIconOnPath(icon);

        // Store duration
        const duration = 500000;

        // Start animation
        const animation = anime({
            targets: icon,
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            duration: duration,
            loop: true,
            easing: 'linear',
            autoplay: false,
        });

        animation.seek((duration / count) * i);
        animation.play();

        addRandomAnimation(icon.querySelector('img'));
    });
}

function addRandomAnimation(element) {
    anime({
        targets: element,
        duration: 50000,
        easing: 'linear',
        direction: 'alternate',
        loop: true,

        scale: () => {
            return helpers.random(0.8, 1.2);
        },
        rotate: () => {
            return helpers.random(-360, 360);
        },
        delay: () => {
            return helpers.random(0, 5000);
        }
    })
}

export {run as icons};