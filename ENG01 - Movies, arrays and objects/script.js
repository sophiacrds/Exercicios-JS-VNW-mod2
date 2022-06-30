const fantasy = [
    {
        title: "Endless Poetry",
        director: "Alejandro Jodorowsky",
        year: "2016"
    },
    {
        title: "Sol Alegria",
        director: "Tavinho Teixeira",
        year: "2018"
    },
    {
        title: "The Rocky Horror Picture Show",
        director: "Jim Sharman",
        year: "1975"
    }
];
const classic = [
    {
        title: "Freaks",
        director: "Tod Browning",
        year: "1932"
    },
    {
        title: "Top Hat",
        director: "Mark Sandrich",
        year: "1935"
    },
    {
        title: "West Side Story",
        director: "Robert Wise",
        year: "1961"
    }
];
const shortFilm = [
    {
        title: "No, I Don't Want to Dance!",
        director: "Andrea Vinciguerra",
        year: "2019",
        link: "https://www.youtube.com/watch?v=N8f2fFothVo"
    },
    {
        title: "Lost & Found",
        director: "Andrew Goldsmith",
        year: "2018",
        link: "https://www.youtube.com/watch?v=35i4zTky9pI"
    },
    {
        title: "Primos",
        director: "Federico Gutiérrez Obeso",
        year: "2018",
        link: "https://vimeo.com/426312779"
    }
];
const movies = [fantasy, classic, shortFilm];

console.table(fantasy);
console.table(classic);
console.table(shortFilm);

let text = document.querySelector("h2");
let image = document.querySelector("img");
// let video = document.querySelector("iframe");

let name = prompt("Hello! What is your name?");
let answer = prompt(`${name}, do you usually watch short films? (yes or no)`);
answer.toLowerCase;

let msgYes = `Great! I love short films... One of my favorite is called "${shortFilm[0].title}" and you can watch it on youtube: ${shortFilm[0].link}`

let msgNo = "Oh, I don't believe it! I highly recommend you to know the website shortoftheweek.com and sign their newsletter to find the best short films around the world!"

if(answer == "yes"){
    text.innerText = msgYes;
    image.src = "https://static.fabrik.io/12vz/7d87e83526677c14.jpg?lossless=1&w=1280&h=1280&fit=max&s=cbf4b6b2bef693d411ec65c58d602af1"

}else{
    text.innerText = msgNo;
    image.src = "https://static.shortoftheweek.com/images/screenshot.jpg";
}