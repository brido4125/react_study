const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");

background.src = `img/${chosenImage}`;
document.body.appendChild(background);
