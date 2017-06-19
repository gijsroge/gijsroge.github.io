import settings from 'js/utils/settings'
import anime from 'animejs'

/**
 * Create Avatar and animate on the screen in top right corner
 */
class Avatar {

    constructor(user,removeAvatarFunction){
        // State
        this.isAnimating = false;

        // Callback
        this.removeAvatarFunction = removeAvatarFunction;

        /**
         * Show employee avatar so employee has confirmation the badge has been successful
         * @param user
         */
        this.avatarElement = document.createElement('figure');
        this.avatarElement.classList.add('c-employee-avatar', settings.employee.avatar.slice( 1 ));
        this.avatarElement.innerHTML = `<img src="${user.photo}" alt="profiel foto van ${user.first_name} ${user.last_name}">`;
        document.querySelector('body').appendChild(this.avatarElement);
        this.animateIn();
    }

    animateIn(){
        // Start animation after avatar has been created.
        anime({
            targets: this.avatarElement,
            opacity: [
                {value: [0, 1], duration: settings.animations.enter, easing: 'linear'},
            ],
            scale: [
                {value: [0, 1.3], duration: settings.animations.enter, easing: 'easeOutElastic'},
            ],
            complete: () => {
                setTimeout(() => {
                    this.animateOut();
                }, settings.animations.hold)
            }
        })
    }

    animateOut(){
        // If already animating, return.
        if (this.isAnimating) return;

        // Set state to animating
        this.isAnimating = true;

        anime({
            targets: this.avatarElement,
            opacity: [
                {value: 0, duration: settings.animations.exit, easing: 'linear'}
            ],
            scale: [
                {value: 0,duration: settings.animations.exit, easing: 'easeOutCirc'}
            ],
            complete: () => {
                this.avatarElement.remove();
                this.removeAvatarFunction();
                this.isAnimating = false;
            }
        })
    }
}

export default Avatar;