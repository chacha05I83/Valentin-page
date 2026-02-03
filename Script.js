function clickfunc() {
    window.location.href = "page-yes.html";
}

function increaseSize() {
   const yesButton = document.querySelector(".yes");
   yesButton.style.width = (yesButton.offsetWidth + 10) + 'px';
   yesButton.style.height = (yesButton.offsetHeight + 10) + 'px';
   const currentFontSize = window.getComputedStyle(yesButton).fontSize;
   const newFontSize = parseInt(currentFontSize) + 1 + 'px';
   yesButton.style.fontSize = newFontSize;
}

/* Génération de nombreux cœurs SVG animés */
const heartsContainer = document.querySelector(".hearts");
const svgNS = "http://www.w3.org/2000/svg";

for(let i = 0; i < 80; i++) { // plus nombreux
    const heart = document.createElementNS(svgNS, "svg");
    heart.setAttribute("class", "heart-svg");

    // taille aléatoire
    const size = 10 + Math.random() * 40; // petits et gros cœurs
    heart.setAttribute("width", size);
    heart.setAttribute("height", size);
    heart.setAttribute("viewBox", "0 0 24 24");

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z");
    heart.appendChild(path);

    // position aléatoire
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * -20 + "vh"; // au-dessus de l'écran pour tomber immédiatement
    heart.style.transform = ``; // pas de rotation du tout
    heart.style.pointerEvents = "none"; // ne bloque pas les boutons
    heart.style.fill = "red";

    // animation aléatoire
    const duration = 3 + Math.random() * 5; // vitesse variable
    const delay = Math.random() * 1; // tombe tout de suite
    heart.style.animation = `float ${duration}s linear ${delay}s infinite`;

    heartsContainer.appendChild(heart);
}
