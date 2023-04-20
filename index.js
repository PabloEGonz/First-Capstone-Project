artist = [
    {
        photo: "images/angele.jpg",
        name: "Angèle",
        intro: "Belgian singer, songwriter, and producer.",
        presentation: "Angèle approaches contemporary dance-pop with a classic French pop bent. She went number one in France and Belgium with her debut album, Brol."
    },
    {
        photo: "images/nakamura.jpg",
        name: "Aya Nakamura",
        intro: "French-Malian singer, and songwriter.",
        presentation: "She made a breakthrough with the release of her first album, which was certified platinum after just over two years."
    },
    {
        photo: "images/stromae.jpg",
        name: "Stromae",
        intro: "Belgian singer, rapper, songwriter and producer.",
        presentation: "He is known for his music blending hip hop and electronic music. Stromae came to wide public attention with his song Alors on danse."
    },
    {
        photo: "images/videoclub.jpg",
        name: "Video Club",
        intro: "French musical project formed in Nantes",
        presentation: "They became popular for the song Amour Plastique, which has accumulated more than 107 million views on YouTube as of March 2023."
    },
    {
        photo: "images/indila.jpg",
        name: "Indila",
        intro: "French singer and songwriter.",
        presentation: "She released her first single, Dernière danse , in December, 2013, which reached SNEP Top 2 in France."
    },
    {
        photo: "images/pomme.jpg",
        name: "Pomme",
        intro: "French singer, songwriter, and musician.",
        presentation: "Her debut studio album, À peu près (2017), received critical acclaim and entered the French album charts at number 91."
    }
];

const artiContainer = document.getElementsByClassName("artist");
const img = document.getElementsByClassName("img-fluid");
const names = document.getElementsByClassName("artist-name");
const intro = document.getElementsByClassName("intro");
const cardText = document.getElementsByClassName("paragraph");

window.onload = () => {

    for (let i = 0; i < artiContainer.length; i++) {
        img[i].src = artist[i].photo;
        names[i].innerHTML = artist[i].name;
        intro[i].innerHTML = artist[i].intro;
        cardText[i].innerHTML = artist[i].presentation;
    }
}

const toggle = document.querySelector(".see");

toggle.onclick = () => {
    console.log(toggle.innerHTML);
    if (toggle.innerHTML === "See More") {
        toggle.innerHTML = "See Less";
    }
    else {
        toggle.innerHTML = "See More";
    }
}


