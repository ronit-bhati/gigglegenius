const genBtn = document.getElementById('genBtn');

const api = 'https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw&type=twopart';
let joke;

let jkSetup = document.getElementById('setup');
let jkDelivery = document.getElementById('delivery');

const showJoke = (jokeArr) => {
    jkSetup.innerText = jokeArr['setup'];
    jkDelivery.innerText = jokeArr['delivery'];
}
const main = () => {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            joke = data;
            showJoke(joke);
        })
        .catch(error => console.log(error));
}

genBtn.addEventListener('click', main);