

let currentImageIndex = 0;
let score = 0;
let attempts = 0;
const images = [
    { src: "port_3.jpg", answer: "real" },
{ src: "port_10.jpg", answer: "deepfake" },
{ src: "port_9.jpg", answer: "deepfake" },
 { src: "port_5.jpg", answer: "real" },
 { src: "port_1.jpg", answer: "real" },
{ src: "port_8.jpg", answer: "deepfake" },
 { src: "port_4.jpg", answer: "real" },
 { src: "port_2.jpg", answer: "real" },
{ src: "port_7.jpg", answer: "deepfake" },
{ src: "port_6.jpg", answer: "deepfake" },
    // Add all 10 image paths and their answers ('real' or 'deepfake')
];
const santaImage = document.getElementById('santaImage');
const scoreElement = document.getElementById('score');

function guess(answer) {
    attempts++;
    if (answer === images[currentImageIndex].answer) {
        score++;
    }
    
    if (attempts < 10) {
        updateGame();
    } else {
        showFinalScore();
    }
}

function updateGame() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    santaImage.src = images[currentImageIndex].src;
    scoreElement.textContent = `Attempt: ${attempts+1}/10`;
}
function showFinalScore() {
    let message = "";
    if (score === 10) {
        message = "Awesome, you are a deepfake detection guru!";
    } else if (score >= 7) {
        message = "Great job! You've got a sharp eye.";
    } else if (score >= 4) {
        message = "Well done, it's tricky to spot these!";
    } else {
        message = "The technology is really great and confuses a lot of people. Keep practicing!";
    }

    document.querySelector('.game-container').innerHTML = `
        <h1>Game Over! Your score: ${score}/10</h1>
        <h2>${message}</h2>
        <img src="real_vs_deepfake.png" alt="Real vs Deepfake" style="max-width: 100%; height: auto;">
        <button onclick="resetGame()" class="game-button">Try Again</button>
        <p>Want to learn more about deepfakes? <a href="https://www.idrnd.ai/deep-dive-into-deepfakes/" target="_blank">Click here</a>.</p>
    `;
}



function resetGame() {
    // Reload the current page
    window.location.reload();
}


const muteButton = document.getElementById('muteButton');
const backgroundMusic = document.getElementById('backgroundMusic');

muteButton.addEventListener('click', function() {
    if (backgroundMusic.muted) {
       backgroundMusic.muted = false;
        muteButton.classList.add('muted');
    } else {
        backgroundMusic.muted = true;
        muteButton.classList.remove('muted');
    }
});



// Initialize the first image
santaImage.src = images[0].src;
