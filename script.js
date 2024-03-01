document.addEventListener('DOMContentLoaded', () => {
    const circle = document.getElementById('movingCircle');
    const pointsDisplay = document.getElementById('points');
    let points = 0;
    let interval = 1000;
    let intervalId;
    let timeoutId;

    function resetGame() {
        points = 0;
        interval = 1000;
        clearTimeout(timeoutId);
        clearInterval(intervalId);
        pointsDisplay.textContent = 'Points: 0';
        moveCircle();
        startGame();
    }

    function startGame() {
        intervalId = setInterval(moveCircle, interval);
        timeoutId = setTimeout(() => {
            alert('Game over! You didn\'t score in 5 seconds.');
            resetGame();
        }, 5000);
    }

    function moveCircle() {
        var maxX = window.innerWidth - circle.offsetWidth;
        var maxY = window.innerHeight - circle.offsetHeight;

        var randomX = Math.floor(Math.random() * maxX);
        var randomY = Math.floor(Math.random() * maxY);

        circle.style.left = randomX + 'px';
        circle.style.top = randomY + 'px';
    }

    circle.addEventListener('click', () => {
        points++;
        pointsDisplay.textContent = `Points: ${points}`;
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        interval = Math.max(100, interval - 100); // Decrease the interval, minimum 100ms
        moveCircle(); // Move the circle immediately after it's clicked
        startGame();
    });
    
});
