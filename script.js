let score = 0;
let redBoxIndex = Math.floor(Math.random() * 9); // Randomly select the red box once
let gameOver = false; // Track whether the game is over

function handleClick(box, index) {
    // If the game is over or the box is already revealed, do nothing
    if (gameOver || box.classList.contains('revealed')) return;

    // Mark the box as revealed
    box.classList.add('revealed');

    // Display message area
    const messageArea = document.getElementById('message');

    if (index === redBoxIndex) {
        box.style.backgroundColor = 'red';
        score = 0; // Reset score to zero if red box is clicked
        messageArea.textContent = "Better luck next time!";
        messageArea.style.color = 'red';
        gameOver = true; // Set the game over flag
        showRetryButton(); // Show the retry button
    } else {
        box.style.backgroundColor = 'green';
        score += 10; // Add 10 points for green boxes
        messageArea.textContent = "Yes, well done! Keep clicking!";
        messageArea.style.color = 'green';
    }

    // Update score display with animation
    const scoreBoard = document.getElementById('score');
    scoreBoard.textContent = `Rs: ${score}`;
    scoreBoard.classList.add('animate');
    setTimeout(() => scoreBoard.classList.remove('animate'), 500);
}

function showRetryButton() {
    const retryButton = document.createElement('button');
    retryButton.textContent = "Retry";
    retryButton.id = "retry-button";
    retryButton.onclick = resetGame;
    document.getElementById('retry-container').appendChild(retryButton);
}

function resetGame() {
    // Reset game state
    score = 0;
    gameOver = false;
    redBoxIndex = Math.floor(Math.random() * 9);

    // Reset the boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = '#ddd';
        box.classList.remove('revealed');
    });

    // Reset the score and message
    document.getElementById('score').textContent = `Rs: ${score}`;
    document.getElementById('message').textContent = "";

    // Remove the retry button
    const retryButton = document.getElementById('retry-button');
    if (retryButton) retryButton.remove();
}
