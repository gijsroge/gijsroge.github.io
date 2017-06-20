import granted from 'js/validate/granted'
import error from 'js/validate/error'
import Avatar from 'js/employee/avatar'
import Name from 'js/employee/name'
import {setGif} from 'js/randomGiphy'

class app {

    constructor() {
        this.ID = '';
        this.avatars = {};
    }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    run() {
        this.bindEvents();
    };

    /**
     * Get user data from lunch api
     */
    success() {

        const user = {
            first_name: 'Gijs',
            last_name: 'Rogé',
            photo: 'https://gijsroge.github.io/gijs.jpg',
        };

        // Create avatar
        this.manageEmployeeAvatars(user);

        // Create user list item.
        const name = new Name;
        name.create(user);

        // Set gif
        setGif();

        // Show success animation
        granted();

        // Clean employee ID
        this.cleanID();

    }

    error() {
        // Show error animation
        error();

        // Clean employee ID
        this.cleanID();
    }

    /**
     * Store all avatars in object untill they are animated out of the dom.
     * @param user
     */
    manageEmployeeAvatars(user) {

        // Loop over all avatars and animate out
        if (Object.keys(this.avatars).length !== 0) {
            Object.values(this.avatars).forEach((avatar) => {
                avatar.animateOut();
            });
        }

        // Create unique avatarID for later
        const avatarID = Date.now();

        // Create callback to delete avatar from app/DOM
        const removeAvatarFunction = this.removeAvatarFromList.bind(this, avatarID);

        // Add new avatar to the avatar store
        this.avatars[avatarID] = new Avatar(user, removeAvatarFunction);
    };

    /**
     * Remove avatar from object
     * @param avatarID
     */
    removeAvatarFromList(avatarID) {
        delete this.avatars[avatarID];
    };

    /**
     * Store the userID entered from the card reader.
     */
    storeID() {
        if (event.which !== 13) this.ID += String.fromCharCode(event.which);
    };

    /**
     * Clean stored userID so we can watch for new scans
     */
    cleanID() {
        this.ID = '';
    };

    bindEvents() {
        window.addEventListener('keyup', () => {
            if (event.which === 13) {
                this.success();
            }else{
                this.error();
            }
        });
    };
}

export default app;