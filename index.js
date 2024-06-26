document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    if (music) {
        music.play().catch(error => {
            console.log('Autoplay prevented:', error);
        }) ;
    }
    music.play();

    const bulbs = document.querySelectorAll('.bulb');
    let bulbIndex = 0;
    setInterval(() => {
        bulbs.forEach((bulb, index) => {
            bulb.style.opacity = (index === bulbIndex) ? '1' : '0.5';
        });
        bulbIndex = (bulbIndex + 1) % bulbs.length;
    }, 500);

    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        const randomX = Math.floor(Math.random() * 100);
        const randomDelay = Math.random() * 5;
        balloon.style.left = `${randomX}%`;
        balloon.style.animationDelay = `${randomDelay}s`;
    });

    document.getElementById('start-button').addEventListener('click', () => {
        window.location.href = 'game.html';
    });
});
