const genBtnEng = document.getElementById('genBtnEng');
const genBtnHindi = document.getElementById('genBtnHindi')

const apiEng = 'https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw&type=twopart';
const apiHindi = 'https://hindi-jokes-api.onrender.com/jokes?api_key=2b32deddf31b19edfdb0bbdc328b'
let joke;

let jkSetup = document.getElementById('setup');
let jkDelivery = document.getElementById('delivery');

const showJoke = (jokeArr) => {
    if (jokeArr['setup']) {
        jkSetup.innerText = jokeArr['setup'];
    } else if (jokeArr['jokeContent']){
        jkSetup.innerText = jokeArr['jokeContent'];
    }
    if (jokeArr['delivery']) {
        jkDelivery.innerText = jokeArr['delivery'];
    } else {
        jkDelivery.innerText = "";
    }
}
const main = (jkApi) => {
    fetch(jkApi)
        .then(response => response.json())
        .then(data => {
            joke = data;
            showJoke(joke);
        })
        .catch(error => console.log(error));
}

genBtnEng.addEventListener('click', main.bind(null, apiEng));
genBtnHindi.addEventListener('click', main.bind(null, apiHindi))
