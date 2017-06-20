const settings = {
    gif: {
        element: '.js-random-giphy',
        api: [
            'https://api.giphy.com/v1/gifs/search?q=eating&limit=25&rating=PG-13&api_key=dc6zaTOxFJmzC',
            'https://api.giphy.com/v1/gifs/search?q=cheeseburger&limit=100&rating=PG-13&api_key=dc6zaTOxFJmzC',
            'https://api.giphy.com/v1/gifs/search?q=hot-dog&limit=100&rating=PG-13&api_key=dc6zaTOxFJmzC',
            'https://api.giphy.com/v1/gifs/search?q=bacon&limit=100&rating=PG-13&api_key=dc6zaTOxFJmzC',
            'https://api.giphy.com/v1/gifs/search?q=pizza&limit=100&rating=PG-13&api_key=dc6zaTOxFJmzC',
            'https://api.giphy.com/v1/gifs/search?q=taco&limit=100&rating=PG-13&api_key=dc6zaTOxFJmzC',
        ],
    },
    animations: {
        enter: 600,
        exit: 350,
        hold: 3000,
        errorHold: 5000,
        colors:{
            background: '#1b1b1b',
            circleBorder: '#1b1b1b',
            success: '#50a418',
            error: '#ac2222',
        },
    },
    background: {
        icons: '.js-icon-path-element',
        path: '.js-icon-path rect',
    },
    status: {
        title: '.js-status-title > *',
        message: '.js-status-success-message',
        errorMessage: '.js-status-error-message',
        circleBorder: '.js-status-circle-border',
        circleBg: '.js-status-circle-bg',
        wrapper: '.js-status-wrapper',
    },
    employee: {
        name: '.js-employee-name',
        avatar: '.js-employee-avatar',
        list: '.js-employee-list',
        listItem: '.js-employee-list-item',
    },
    badgeIndication: {
        ripples: '.js-ripples > *',
        arrow: '.js-badge-indication-arrow',
    }
};

export default settings;