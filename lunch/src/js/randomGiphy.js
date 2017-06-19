import anime from 'animejs'
import settings from 'js/utils/settings'

(function fetchGhiphys() {
    localStorage.setItem('gifs', JSON.stringify([]));
    settings.gif.api.forEach((url, i) => {
        fetch(url)
            .then((resp) => resp.json()) // Transform the data into json
            .then(gifs => {
                const gifArray = JSON.parse(localStorage.getItem('gifs'));
                gifArray.push.apply(gifArray, gifs.data);
                localStorage.setItem('gifs', JSON.stringify(gifArray));
            })
    })
})();

document.querySelector('.js-status-circle').addEventListener('click', function(){
    setGif();
    anime({
        targets: settings.gif.element,
        opacity: [
            {value: [0, .5], duration: 200, delay: 150, easing: 'linear'},
            {value: 0, delay: settings.animations.hold - 150, duration: 200, easing: 'linear'}
        ],
    });
});

function setGif() {
    Object.assign(document.querySelector(settings.gif.element).style,{
        backgroundImage: `url(${randomGif()})`
    });
}

function randomGif() {
    const gifs = JSON.parse(localStorage.getItem('gifs'));
    return gifs[Math.floor(Math.random() * gifs.length)].images.downsized_medium.url;
}

export {randomGif, setGif};