import settings from 'js/utils/settings'
import anime from 'animejs'

/**
 * Create employee name item in employee name list and
 * animate in the bottom right corner
 */
class Name {

    create(user){
        // Create user list item
        const check = `<svg width="15" height="12" viewBox="0 0 15 12"><path d="M6176.47,788.68l-8.21,6.771-3.75-2.778-1.51,1.636,4.63,5.413,0.82,0.955,0.85-.924,8.7-9.442Z" transform="translate(-6163 -788.688)"/></svg>`;
        const userListItem = document.createElement('li');
        userListItem.classList.add('c-employee-list__item', settings.employee.listItem.slice( 1 ));
        userListItem.innerHTML = `${check} <span>${user.first_name} ${user.last_name}`;
        document.querySelector(settings.employee.list).appendChild(userListItem);

        // Pass new employee list item to animation
        this.animateIn(userListItem);
    }

    animateIn(userListItem){
        // Start animation after avatar has been created.
        anime({
            targets: userListItem,
            opacity: [
                {value: 1, duration: 2000, easing: 'easeOutQuint'},
                {value: 0, delay: 7000, duration: 3000, easing: 'easeOutQuint'}
            ],
            complete: () => {
                userListItem.remove();
            }
        });
    }
}

export default Name;