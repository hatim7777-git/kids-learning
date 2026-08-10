const numberData = [
    {id: '0', word: 'Zero', fingerImg: 'images/F0.png', examples: [
        {text: '🚫 An empty jar has Zero candies', image: 'images/ex0.png'}
    ], color: '#607D8B'},
    {id: '1', word: 'One', fingerImg: 'images/F1.png', examples: [{text: '☀️ There is One happy sun', image: 'images/ex1.png'}], color: '#FF5722'},
    {id: '2', word: 'Two', fingerImg: 'images/F2.png', examples: [{text: '👀 We have Two eyes', image: 'images/ex2.png'}], color: '#2196F3'},
    {id: '3', word: 'Three', fingerImg: 'images/F3.png', examples: [{text: '🚦 A traffic light has Three lights', image: 'images/ex3.png'}], color: '#4CAF50'},
    {id: '4', word: 'Four', fingerImg: 'images/F4.png', examples: [{text: '🚗 A car has Four wheels', image: 'images/ex4.png'}], color: '#FF9800'},
    {id: '5', word: 'Five', fingerImg: 'images/F5.png', examples: [{text: '🖐️ A hand has Five fingers', image: 'images/ex5.png'}], color: '#9C27B0'},
    {id: '6', word: 'Six', fingerImg: 'images/F6.png', examples: [{text: '🐞 A ladybug has Six legs', image: 'images/ex6.png'}], color: '#E91E63'},
    {id: '7', word: 'Seven', fingerImg: 'images/F7.png', examples: [{text: '🌈 A rainbow has Seven colors', image: 'images/ex7.png'}], color: '#FFEB3B'},
    {id: '8', word: 'Eight', fingerImg: 'images/F8.png', examples: [{text: '🐙 An octopus has Eight tentacles', image: 'images/ex8.png'}], color: '#00BCD4'},
    {id: '9', word: 'Nine', fingerImg: 'images/F9.png', examples: [{text: '🧩 A Rubik\'s cube face has Nine squares', image: 'images/ex9.png'}], color: '#8BC34A'},
    {id: '10', word: 'Ten', fingerImg: 'images/F10.png', examples: [{text: '👐 We have Ten fingers', image: 'images/ex10.png'}], color: '#795548'}
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
let quizTimeouts = [];

function createTrackedTimeout(callback, delay) {
    const timeoutId = setTimeout(callback, delay);
    quizTimeouts.push(timeoutId);
    return timeoutId;
}

function clearQuizTimeouts() {
    quizTimeouts.forEach(id => clearTimeout(id));
    quizTimeouts = [];
}

function speakText(text, lang = 'en-US', onEndCallback = null) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.85;
        utterance.pitch = 1.2;

        if (onEndCallback) {
            utterance.onend = onEndCallback;
        }

        window.speechSynthesis.speak(utterance);
    }
}

function startGame() {
    starsDisplay.innerText = '';
    feedbackText.innerText = '';
    nextQuestion();
}

function nextQuestion() {
    optionsArea.innerHTML = '';
    generateNumberQuestion();
}

function generateNumberQuestion() {
    const questionType = Math.floor(Math.random() * 3); // 0, 1, or 2

    // Get 4 unique numbers for options
    const maxNumberForQuiz = 5;
    const filteredNumberData = numberData.filter(item => parseInt(item.id) <= maxNumberForQuiz);
    let shuffledData = [...filteredNumberData].sort(() => 0.5 - Math.random());
    const questionOptions = shuffledData.slice(0, 4);
    const correctAnswer = questionOptions[0];
    currentCorrectAnswerId = correctAnswer.id;
    currentCorrectWord = correctAnswer.word;

    const displayOptions = [...questionOptions].sort(() => 0.5 - Math.random());

    if (questionType === 0) { // Match number to finger image
        currentQuestionSpeech = `Which hand sign is for the number ${correctAnswer.id}?`;
        questionTextEl.innerText = currentQuestionSpeech;
        displayOptions.forEach(option => {
            const optionCard = document.createElement('div');
            optionCard.className = 'option-card';
            optionCard.dataset.id = option.id;
            const img = document.createElement('img');
            img.src = option.fingerImg;
            optionCard.appendChild(img);
            optionCard.addEventListener('click', checkAnswer);
            optionsArea.appendChild(optionCard);
        });
    } else if (questionType === 1) { // Match number to object image
        currentQuestionSpeech = `Which picture shows ${correctAnswer.id} things?`;
        questionTextEl.innerText = currentQuestionSpeech;
        displayOptions.forEach(option => {
            const optionCard = document.createElement('div');
            optionCard.className = 'option-card';
            optionCard.dataset.id = option.id;
            const img = document.createElement('img');
            img.src = option.examples[0].image;
            optionCard.appendChild(img);
            optionCard.addEventListener('click', checkAnswer);
            optionsArea.appendChild(optionCard);
        });
    } else { // Count the emojis
        const count = parseInt(correctAnswer.id);
        const emojiList = ['🍓', '🍬', '🚗', '🎈', '🍎', '⚽', '🥦', '🍩'];
        const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
        const emojiString = randomEmoji.repeat(count);

        currentQuestionSpeech = `How many ${randomEmoji} are there?`;
        questionTextEl.innerText = `How many ${emojiString} are there?`;
        questionTextEl.style.fontSize = '3rem';

        displayOptions.forEach(option => {
            const optionCard = document.createElement('div');
            optionCard.className = 'option-card';
            optionCard.dataset.id = option.id;
            const textEl = document.createElement('p');
            textEl.className = 'option-text';
            textEl.innerText = option.id;
            optionCard.appendChild(textEl);
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
                feedbackText.innerText = "🎉 Great job! You completed the quiz! 🎉";
                speakText("Great job! You completed the quiz!");
                clapSound.play();
                createTrackedTimeout(() => {
                    starsDisplay.innerText = '';
                    nextQuestion();
                }, 3000);
            } else {
                nextQuestion();
            }
        };

        speakText("Correct!", 'en-US', proceedToNextStep);
    } else {
        selectedCard.classList.add('incorrect');
        feedbackText.innerText = "Try again!";
        feedbackText.className = "feedback-incorrect";
        speakText("Try again!");
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    startGame();
});

// Cleanup when leaving page
window.addEventListener('beforeunload', function() {
    clearQuizTimeouts();
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    clapSound.pause();
    clapSound.currentTime = 0;
});