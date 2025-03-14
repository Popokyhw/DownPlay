import {gsap} from "gsap";

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('gameId');

    const gamesData = {

        }
    };

    const game = gamesData[gameId];

    if (game) {
        document.getElementById('game-title').textContent = game.title;
        document.getElementById('game-genre').textContent = `Género: ${game.genre}`;
        document.getElementById('game-description').textContent = game.description;
		document.getElementById('game-author').textContent = `Autor: ${game.author}`;

        document.getElementById('steam-link').href = game.steamLink;
        document.getElementById('mega-link').href = game.megaLink;
        document.getElementById('mediafire-link').href = game.mediafireLink;
        document.getElementById('utorrent-link').href = game.utorrentLink;
    } else {
        document.getElementById('game-title').textContent = 'Juego no encontrado';
    }

	gsap.to("#game-details", {
		duration: 1,
		opacity: 1,
		y: 0,
		ease: "power2.out"
	});
});

