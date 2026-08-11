const colorsData = [
    { word: 'Red', color: '#FF0000', images: ['🍎', '🌹', '🚗'] },
    { word: 'Blue', color: '#0000FF', images: ['🫐', '🐳', '🌊'] },
    { word: 'Green', color: '#008000', images: ['🍏', '🌳', '🐸'] },
    { word: 'Yellow', color: '#FFFF00', images: ['🍌', '🌻', '🍋'] },
    { word: 'Orange', color: '#FFA500', images: ['🍊', '🥕', '🐯'] },
    { word: 'Purple', color: '#800080', images: ['🍇', '🍆', '🦄'] },
    { word: 'Pink', color: '#FFC0CB', images: ['🌸', '🎀', '🐷'] },
    { word: 'Brown', color: '#A52A2A', images: ['🐻', '🍫', '🥔'] },
    { word: 'Black', color: '#000000', images: ['🐈', '🧤', '🎹'] },
    { word: 'White', color: '#FFFFFF', images: ['☁️', '🐑', '🥛'] },
    { word: 'Gray', color: '#808080', images: ['🐘', '🦉', '🏢'] },
    { word: 'Cyan', color: '#00FFFF', images: ['🐟', '💎', '🧊'] },
    { word: 'Magenta', color: '#FF00FF', images: ['🦩', '🌸', '💗'] },
    { word: 'Lime', color: '#00FF00', images: ['🍋', '🍃', '🥒'] },
    { word: 'Indigo', color: '#4B0082', images: ['🌙', '👖', '🎨'] },
    { word: 'Violet', color: '#EE82EE', images: ['🌸', '💜', '🦋'] },
    { word: 'Teal', color: '#008080', images: ['🦆', '🌿', '🎁'] },
    { word: 'Gold', color: '#FFD700', images: ['🏆', '💰', '👑'] },
    { word: 'Silver', color: '#C0C0C0', images: ['🥈', '🥄', '🪙'] },
    { word: 'Maroon', color: '#800000', images: ['🍇', '🎃', '🪵'] }
];

// Game elements
const starsDisplay = document.getElementById('stars-display');
const clapSound = document.getElementById('clap-sound');
const feedbackText = document.getElementById('feedback-text');
const questionTextEl = document.getElementById('question-text');
const optionsArea = document.getElementById('options-area');

let currentCorrectAnswerId = '';
let currentQuestionSpeech = '';
let currentCorrectWord = '';

// Use common functions from common.js
// createTrackedTimeout, clearTrackedTimeouts, speakText, stopSpeech

function startGame() {
    starsDisplay.innerText = '';
    feedbackText.innerText = '';
    nextQuestion();
}

function nextQuestion() {
    optionsArea.innerHTML = '';
    questionTextEl.innerHTML = ''; // Clear any previous emoji
    generateColorQuestion();
}

function generateColorQuestion() {
    const shuffledColors = [...colorsData].sort(() => 0.5 - Math.random());
    const questionOptions = shuffledColors.slice(0, 4);
    const correctAnswer = questionOptions[0];
    currentCorrectAnswerId = correctAnswer.word;
    currentCorrectWord = correctAnswer.word;

    // Randomly choose question type: 0 = color to image, 1 = image to color
    const questionType = Math.floor(Math.random() * 2);

    if (questionType === 0) {
        // Question: Find the color [color name] - show color swatches
        currentQuestionSpeech = `Find the color ${correctAnswer.word}`;
        questionTextEl.innerText = currentQuestionSpeech;

        const displayOptions = [...questionOptions].sort(() => 0.5 - Math.random());

        displayOptions.forEach(option => {
            const optionCard = document.createElement('div');
            optionCard.className = 'option-card';
            optionCard.dataset.id = option.word;

            const colorPreview = document.createElement('div');
            colorPreview.style.backgroundColor = option.color;
            colorPreview.style.width = '80px';
            colorPreview.style.height = '80px';
            colorPreview.style.borderRadius = '50%';
            colorPreview.style.margin = '0 auto';
            colorPreview.style.border = '3px solid #ddd';
            optionCard.appendChild(colorPreview);

            optionCard.addEventListener('click', checkAnswer);
            optionsArea.appendChild(optionCard);
        });
    } else {
        // Question: What color is this [emoji]? - show emojis
        const randomImageIndex = Math.floor(Math.random() * correctAnswer.images.length);
        const targetImage = correctAnswer.images[randomImageIndex];
        
        currentQuestionSpeech = `What color is this?`;
        questionTextEl.innerText = currentQuestionSpeech;

        // Show the target emoji as the question
        const questionEmoji = document.createElement('div');
        questionEmoji.className = 'option-emoji';
        questionEmoji.innerText = targetImage;
        questionTextEl.appendChild(questionEmoji);

        const displayOptions = [...questionOptions].sort(() => 0.5 - Math.random());

        displayOptions.forEach(option => {
            const optionCard = document.createElement('div');
            optionCard.className = 'option-card';
            optionCard.dataset.id = option.word;

            const colorPreview = document.createElement('div');
            colorPreview.style.backgroundColor = option.color;
            colorPreview.style.width = '80px';
            colorPreview.style.height = '80px';
            colorPreview.style.borderRadius = '50%';
            colorPreview.style.margin = '0 auto';
            colorPreview.style.border = '3px solid #ddd';
            optionCard.appendChild(colorPreview);

            optionCard.addEventListener('click', checkAnswer);
            optionsArea.appendChild(optionCard);
        });
    }

    speakText(currentQuestionSpeech);
}

function checkAnswer(event) {
    const selectedCard = event.currentTarget;
    const selectedId = selectedCard.dataset.id;

    document.querySelectorAll('.option-card').forEach(c => {
        c.classList.remove('incorrect');
        c.classList.remove('correct');
    });

    if (selectedId === currentCorrectAnswerId) {
        selectedCard.classList.add('correct');
        feedbackText.innerText = "Correct!";
        feedbackText.className = "feedback-correct";
        
        starsDisplay.innerText += '⭐';

        document.querySelectorAll('.option-card').forEach(card => card.removeEventListener('click', checkAnswer));

        const proceedToNextStep = () => {
            if (starsDisplay.innerText.length >= 10) {
                feedbackText.innerText = "You're a Star! 🌟";
                speakText("You're a Star!");
                createTrackedTimeout(() => {
                    starsDisplay.innerText = '';
                    nextQuestion();
                }, 2000);
            } else {
                feedbackText.innerText = "";
                questionTextEl.style.fontSize = '2rem';
                nextQuestion();
            }
        };

        speakText(currentCorrectWord, 'en-US');

        createTrackedTimeout(() => {
            clapSound.currentTime = 0;
            clapSound.play();

            createTrackedTimeout(() => {
                clapSound.pause();
                createTrackedTimeout(proceedToNextStep, 500);
            }, 1000);
        }, 1500);
    } else {
        selectedCard.classList.add('incorrect');
        feedbackText.innerText = "Try again!";
        feedbackText.className = "feedback-incorrect";

        document.querySelectorAll('.option-card').forEach(card => card.removeEventListener('click', checkAnswer));

        createTrackedTimeout(() => {
            selectedCard.classList.remove('incorrect');
            feedbackText.innerText = "";
            document.querySelectorAll('.option-card').forEach(card => card.addEventListener('click', checkAnswer));
            speakText(currentQuestionSpeech);
        }, 2000);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    startGame();
});

// Cleanup when leaving page
window.addEventListener('beforeunload', function() {
    cleanupQuizPage(clapSound);
});