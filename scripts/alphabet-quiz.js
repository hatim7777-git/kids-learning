const alphabetData = [
    {id: 'A', lower: 'a', word: 'Apple', emoji: '🍎', image: 'images/ex_A.png', color: '#FF3D00'},
    {id: 'A', lower: 'a', word: 'Ant', emoji: '🐜', color: '#D9534F'},
    {id: 'A', lower: 'a', word: 'Avocado', emoji: '🥑', color: '#8BC34A'},
    {id: 'A', lower: 'a', word: 'Anchor', emoji: '⚓', color: '#607D8B'},
    {id: 'A', lower: 'a', word: 'Astronaut', emoji: '🧑‍🚀', color: '#E0E0E0'},
    {id: 'A', lower: 'a', word: 'Airplane', emoji: '✈️', color: '#03A9F4'},
    {id: 'A', lower: 'a', word: 'Alarm Clock', emoji: '⏰', color: '#F44336'},
    {id: 'B', lower: 'b', word: 'Ball', emoji: '⚽', image: 'images/ex_B.png', color: '#0476D0'},
    {id: 'B', lower: 'b', word: 'Bee', emoji: '🐝', color: '#F0AD4E'},
    {id: 'B', lower: 'b', word: 'Banana', emoji: '🍌', color: '#FFEB3B'},
    {id: 'B', lower: 'b', word: 'Book', emoji: '📖', color: '#795548'},
    {id: 'B', lower: 'b', word: 'Butterfly', emoji: '🦋', color: '#42A5F5'},
    {id: 'B', lower: 'b', word: 'Bear', emoji: '🐻', color: '#8D6E63'},
    {id: 'B', lower: 'b', word: 'Boat', emoji: '⛵', color: '#03A9F4'},
    {id: 'C', lower: 'c', word: 'Cat', emoji: '🐱', image: 'images/ex_C.png', color: '#FFB300'},
    {id: 'C', lower: 'c', word: 'Car', emoji: '🚗', color: '#5BC0DE'},
    {id: 'C', lower: 'c', word: 'Cookie', emoji: '🍪', color: '#A1887F'},
    {id: 'C', lower: 'c', word: 'Crown', emoji: '👑', color: '#FFD700'},
    {id: 'C', lower: 'c', word: 'Cake', emoji: '🎂', color: '#F48FB1'},
    {id: 'C', lower: 'c', word: 'Clown', emoji: '🤡', color: '#E91E63'},
    {id: 'D', lower: 'd', word: 'Dog', emoji: '🐶', image: 'images/ex_D.png', color: '#4CAF50'},
    {id: 'C', lower: 'c', word: 'Cloud', emoji: '☁️', color: '#B0BEC5'},
    {id: 'C', lower: 'c', word: 'Cow', emoji: '🐄', color: '#795548'},
    {id: 'D', lower: 'd', word: 'Duck', emoji: '🦆', color: '#5CB85C'},
    {id: 'D', lower: 'd', word: 'Donut', emoji: '🍩', color: '#F06292'},
    {id: 'D', lower: 'd', word: 'Dolphin', emoji: '🐬', color: '#29B6F6'},
    {id: 'D', lower: 'd', word: 'Diamond', emoji: '💎', color: '#4DD0E1'},
    {id: 'E', lower: 'e', word: 'Elephant', emoji: '🐘', image: 'images/ex_E.png', color: '#9C27B0'},
    {id: 'E', lower: 'e', word: 'Egg', emoji: '🥚', color: '#795548'},
    {id: 'E', lower: 'e', word: 'Eagle', emoji: '🦅', color: '#A1887F'},
    {id: 'E', lower: 'e', word: 'Earth', emoji: '🌍', color: '#4CAF50'},
    {id: 'E', lower: 'e', word: 'Eye', emoji: '👁️', color: '#00BCD4'},
    {id: 'D', lower: 'd', word: 'Door', emoji: '🚪', color: '#A1887F'},
    {id: 'D', lower: 'd', word: 'Dinosaur', emoji: '🦖', color: '#8BC34A'},
    {id: 'F', lower: 'f', word: 'Fish', emoji: '🐟', image: 'images/ex_F.png', color: '#00BCD4'},
    {id: 'F', lower: 'f', word: 'Frog', emoji: '🐸', color: '#8BC34A'},
    {id: 'F', lower: 'f', word: 'Fire', emoji: '🔥', color: '#FF5722'},
    {id: 'F', lower: 'f', word: 'Flower', emoji: '🌸', color: '#E91E63'},
    {id: 'F', lower: 'f', word: 'Fox', emoji: '🦊', color: '#FF9800'},
    {id: 'G', lower: 'g', word: 'Grapes', emoji: '🍇', image: 'images/ex_G.png', color: '#673AB7'},
    {id: 'G', lower: 'g', word: 'Ghost', emoji: '👻', color: '#E0E0E0'},
    {id: 'G', lower: 'g', word: 'Guitar', emoji: '🎸', color: '#795548'},
    {id: 'G', lower: 'g', word: 'Goat', emoji: '🐐', color: '#BDBDBD'},
    {id: 'G', lower: 'g', word: 'Giraffe', emoji: '🦒', color: '#FFC107'},
    {id: 'F', lower: 'f', word: 'Foot', emoji: '🦶', color: '#FFCCBC'},
    {id: 'F', lower: 'f', word: 'Feather', emoji: '🪶', color: '#9E9E9E'},
    {id: 'H', lower: 'h', word: 'Hat', emoji: '🎩', image: 'images/ex_H.png', color: '#795548'},
    {id: 'H', lower: 'h', word: 'Heart', emoji: '❤️', color: '#F44336'},
    {id: 'H', lower: 'h', word: 'Helicopter', emoji: '🚁', color: '#03A9F4'},
    {id: 'H', lower: 'h', word: 'Hammer', emoji: '🔨', color: '#9E9E9E'},
    {id: 'H', lower: 'h', word: 'Horse', emoji: '🐴', color: '#A1887F'},
    {id: 'G', lower: 'g', word: 'Gift', emoji: '🎁', color: '#F44336'},
    {id: 'I', lower: 'i', word: 'Ice Cream', emoji: '🍦', image: 'images/ex_I.png', color: '#E91E63'},
    {id: 'I', lower: 'i', word: 'Igloo', emoji: '🧊', color: '#B3E5FC'},
    {id: 'I', lower: 'i', word: 'Island', emoji: '🏝️', color: '#4CAF50'},
    {id: 'J', lower: 'j', word: 'Juice', emoji: '🧃', image: 'images/ex_J.png', color: '#FF5722'},
    {id: 'J', lower: 'j', word: 'Jellyfish', emoji: '🪼', color: '#00BCD4'},
    {id: 'J', lower: 'j', word: 'Jacket', emoji: '🧥', color: '#795548'},
    {id: 'J', lower: 'j', word: 'Jet', emoji: '✈️', color: '#607D8B'},
    {id: 'K', lower: 'k', word: 'Kite', emoji: '🪁', image: 'images/ex_K.png', color: '#009688'},
    {id: 'H', lower: 'h', word: 'House', emoji: '🏠', color: '#FF9800'},
    {id: 'H', lower: 'h', word: 'Honey', emoji: '🍯', color: '#FFD700'},
    {id: 'K', lower: 'k', word: 'Key', emoji: '🔑', color: '#FFC107'},
    {id: 'K', lower: 'k', word: 'King', emoji: '🤴', color: '#FFEB3B'},
    {id: 'K', lower: 'k', word: 'Kiwi', emoji: '🥝', color: '#8BC34A'},
    {id: 'K', lower: 'k', word: 'Kangaroo', emoji: '🦘', color: '#A1887F'},
    {id: 'J', lower: 'j', word: 'Jam', emoji: '🍓', color: '#F44336'},
    {id: 'L', lower: 'l', word: 'Lion', emoji: '🦁', image: 'images/ex_L.png', color: '#FFC107'},
    {id: 'L', lower: 'l', word: 'Lemon', emoji: '🍋', color: '#FFEE58'},
    {id: 'L', lower: 'l', word: 'Leaf', emoji: '🍃', color: '#8BC34A'},
    {id: 'L', lower: 'l', word: 'Lamp', emoji: '💡', color: '#FFF176'},
    {id: 'L', lower: 'l', word: 'Ladybug', emoji: '🐞', color: '#D32F2F'},
    {id: 'K', lower: 'k', word: 'Koala', emoji: '🐨', color: '#A1887F'},
    {id: 'M', lower: 'm', word: 'Monkey', emoji: '🐒', image: 'images/ex_M.png', color: '#8BC34A'},
    {id: 'M', lower: 'm', word: 'Moon', emoji: '🌙', color: '#FFF59D'},
    {id: 'M', lower: 'm', word: 'Mouse', emoji: '🐭', color: '#BDBDBD'},
    {id: 'M', lower: 'm', word: 'Mushroom', emoji: '🍄', color: '#EF5350'},
    {id: 'M', lower: 'm', word: 'Milk', emoji: '🥛', color: '#E3F2FD'},
    {id: 'N', lower: 'n', word: 'Nest', emoji: '🪹', image: 'images/ex_N.png', color: '#3F51B5'},
    {id: 'N', lower: 'n', word: 'Nose', emoji: '👃', color: '#FFCCBC'},
    {id: 'N', lower: 'n', word: 'Notebook', emoji: '📓', color: '#78909C'},
    {id: 'N', lower: 'n', word: 'Net', emoji: '🥅', color: '#FFFFFF'},
    {id: 'L', lower: 'l', word: 'Lollipop', emoji: '🍭', color: '#E91E63'},
    {id: 'N', lower: 'n', word: 'Ninja', emoji: '🥷', color: '#212121'},
    {id: 'O', lower: 'o', word: 'Orange', emoji: '🍊', image: 'images/ex_O.png', color: '#FF9800'},
    {id: 'O', lower: 'o', word: 'Octopus', emoji: '🐙', color: '#E91E63'},
    {id: 'O', lower: 'o', word: 'Owl', emoji: '🦉', color: '#795548'},
    {id: 'O', lower: 'o', word: 'Onion', emoji: '🧅', color: '#E0E0E0'},
    {id: 'M', lower: 'm', word: 'Mango', emoji: '🥭', color: '#FFC107'},
    {id: 'M', lower: 'm', word: 'Map', emoji: '🗺️', color: '#FFEB3B'},
    {id: 'P', lower: 'p', word: 'Penguin', emoji: '🐧', image: 'images/ex_P.png', color: '#00E676'},
    {id: 'P', lower: 'p', word: 'Pizza', emoji: '🍕', color: '#FFC107'},
    {id: 'P', lower: 'p', word: 'Panda', emoji: '🐼', color: '#212121'},
    {id: 'P', lower: 'p', word: 'Popcorn', emoji: '🍿', color: '#FFF9C4'},
    {id: 'P', lower: 'p', word: 'Pencil', emoji: '✏️', color: '#FFEB3B'},
    {id: 'Q', lower: 'q', word: 'Queen', emoji: '👸', image: 'images/ex_Q.png', color: '#E040FB'},
    {id: 'Q', lower: 'q', word: 'Question Mark', emoji: '❓', color: '#03A9F4'},
    {id: 'Q', lower: 'q', word: 'Quilt', emoji: '🛌', color: '#795548'},
    {id: 'N', lower: 'n', word: 'Nut', emoji: '🌰', color: '#795548'},
    {id: 'O', lower: 'o', word: 'Ocean', emoji: '🌊', color: '#03A9F4'},
    {id: 'R', lower: 'r', word: 'Rabbit', emoji: '🐇', image: 'images/ex_R.png', color: '#FF5252'},
    {id: 'R', lower: 'r', word: 'Rainbow', emoji: '🌈', color: '#9C27B0'},
    {id: 'R', lower: 'r', word: 'Rocket', emoji: '🚀', color: '#F44336'},
    {id: 'R', lower: 'r', word: 'Ring', emoji: '💍', color: '#FFD700'},
    {id: 'P', lower: 'p', word: 'Pear', emoji: '🍐', color: '#8BC34A'},
    {id: 'P', lower: 'p', word: 'Pig', emoji: '🐷', color: '#F48FB1'},
    {id: 'S', lower: 's', word: 'Sun', emoji: '☀️', image: 'images/ex_S.png', color: '#FFEA00'},
    {id: 'S', lower: 's', word: 'Star', emoji: '⭐', color: '#FFD700'},
    {id: 'S', lower: 's', word: 'Snake', emoji: '🐍', color: '#4CAF50'},
    {id: 'S', lower: 's', word: 'Sock', emoji: '🧦', color: '#03A9F4'},
    {id: 'S', lower: 's', word: 'Strawberry', emoji: '🍓', color: '#F44336'},
    {id: 'S', lower: 's', word: 'Ship', emoji: '🚢', color: '#607D8B'},
    {id: 'T', lower: 't', word: 'Train', emoji: '🚂', image: 'images/ex_T.png', color: '#03A9F4'},
    {id: 'T', lower: 't', word: 'Tree', emoji: '🌳', color: '#4CAF50'},
    {id: 'T', lower: 't', word: 'Tiger', emoji: '🐅', color: '#FF9800'},
    {id: 'T', lower: 't', word: 'Tomato', emoji: '🍅', color: '#F44336'},
    {id: 'R', lower: 'r', word: 'Rose', emoji: '🌹', color: '#E91E63'},
    {id: 'R', lower: 'r', word: 'Robot', emoji: '🤖', color: '#9E9E9E'},
    {id: 'T', lower: 't', word: 'Turtle', emoji: '🐢', color: '#8BC34A'},
    {id: 'U', lower: 'u', word: 'Umbrella', emoji: '☂️', image: 'images/ex_U.png', color: '#9575CD'},
    {id: 'U', lower: 'u', word: 'Unicorn', emoji: '🦄', color: '#F48FB1'},
    {id: 'U', lower: 'u', word: 'Utensils', emoji: '🍴', color: '#9E9E9E'},
    {id: 'U', lower: 'u', word: 'Uniform', emoji: '🥋', color: '#FFFFFF'},
    {id: 'S', lower: 's', word: 'Snowman', emoji: '⛄', color: '#B3E5FC'},
    {id: 'S', lower: 's', word: 'Spider', emoji: '🕷️', color: '#212121'},
    {id: 'V', lower: 'v', word: 'Violin', emoji: '🎻', image: 'images/ex_V.png', color: '#8D6E63'},
    {id: 'V', lower: 'v', word: 'Volcano', emoji: '🌋', color: '#FF5722'},
    {id: 'V', lower: 'v', word: 'Vampire', emoji: '🧛', color: '#212121'},
    {id: 'V', lower: 'v', word: 'Vegetable', emoji: '🥦', color: '#4CAF50'},
    {id: 'V', lower: 'v', word: 'Van', emoji: '🚐', color: '#E0E0E0'},
    {id: 'W', lower: 'w', word: 'Watermelon', emoji: '🍉', image: 'images/ex_W.png', color: '#2E7D32'},
    {id: 'W', lower: 'w', word: 'Whale', emoji: '🐳', color: '#03A9F4'},
    {id: 'W', lower: 'w', word: 'Watch', emoji: '⌚', color: '#9E9E9E'},
    {id: 'T', lower: 't', word: 'Tent', emoji: '⛺', color: '#FF5722'},
    {id: 'T', lower: 't', word: 'Tooth', emoji: '🦷', color: '#FFFFFF'},
    {id: 'W', lower: 'w', word: 'Wolf', emoji: '🐺', color: '#9E9E9E'},
    {id: 'X', lower: 'x', word: 'Xylophone', emoji: '🎼', image: 'images/ex_X.png', color: '#006064'},
    {id: 'X', lower: 'x', word: 'X-ray', emoji: '🦴', color: '#FFFFFF'},
    {id: 'B', lower: 'b', word: 'Box', emoji: '📦', color: '#A1887F'},
    {id: 'A', lower: 'a', word: 'Axe', emoji: '🪓', color: '#9E9E9E'},
    {id: 'F', lower: 'f', word: 'Fox', emoji: '🦊', color: '#FF9800'},
    {id: 'Y', lower: 'y', word: 'Yo-yo', emoji: '🪀', image: 'images/ex_Y.png', color: '#F50057'},
    {id: 'Y', lower: 'y', word: 'Yarn', emoji: '🧶', color: '#E91E63'},
    {id: 'Y', lower: 'y', word: 'Yawn', emoji: '🥱', color: '#FFC107'},
    {id: 'W', lower: 'w', word: 'Worm', emoji: '🪱', color: '#F48FB1'},
    {id: 'W', lower: 'w', word: 'Window', emoji: '🪟', color: '#B0BEC5'},
    {id: 'Y', lower: 'y', word: 'Yoga', emoji: '🧘', color: '#00BCD4'},
    {id: 'Z', lower: 'z', word: 'Zebra', emoji: '🦓', image: 'images/ex_Z.png', color: '#212121'},
    {id: 'Z', lower: 'z', word: 'Zombie', emoji: '🧟', color: '#8BC34A'},
    {id: 'Z', lower: 'z', word: 'ZZZ', emoji: '😴', color: '#03A9F4'},
    {id: 'Y', lower: 'y', word: 'Yellow', emoji: '💛', color: '#FFEB3B'},
    {id: 'Z', lower: 'z', word: 'Zoo', emoji: '🦍🐘🐯🦁🐒🦒🦌', color: '#FFC107'},
    {id: 'Z', lower: 'z', word: 'Zipper', emoji: '🤐', color: '#9E9E9E'}
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
let currentLetterIndex = 0;
const uniqueLetters = [...new Set(alphabetData.map(item => item.id))];

function startGame() {
    starsDisplay.innerText = '';
    feedbackText.innerText = '';
    nextQuestion();
}

function nextQuestion() {
    optionsArea.innerHTML = '';
    generateAlphabetQuestion();
}

function generateAlphabetQuestion() {
    // Get current letter from the cycle
    const currentLetter = uniqueLetters[currentLetterIndex];
    
    // Get all data for the current letter
    const letterData = alphabetData.filter(item => item.id === currentLetter);
    
    // Select random item from the current letter's data
    const correctAnswer = letterData[Math.floor(Math.random() * letterData.length)];
    currentCorrectAnswerId = correctAnswer.id;
    currentCorrectWord = correctAnswer.word;

    // Get 3 other unique letters for options
    const otherLetters = uniqueLetters.filter(letter => letter !== currentLetter);
    const shuffledOtherLetters = [...otherLetters].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    // Get one random item from each of the other letters
    const wrongOptions = shuffledOtherLetters.map(letter => {
        const letterItems = alphabetData.filter(item => item.id === letter);
        return letterItems[Math.floor(Math.random() * letterItems.length)];
    });
    
    const questionOptions = [correctAnswer, ...wrongOptions];
    const questionType = Math.random() < 0.5 ? 'alphabet' : 'emoji';

    if (questionType === 'alphabet' || !correctAnswer.emoji) {
        currentQuestionSpeech = `Which object starts with the letter '${correctAnswer.id}'?`;
        questionTextEl.innerText = currentQuestionSpeech;
    } else {
        currentQuestionSpeech = `Which object is this?`;
        questionTextEl.innerText = `${currentQuestionSpeech} ${correctAnswer.emoji}?`;
        questionTextEl.style.fontSize = '3rem';
    }

    speakText(currentQuestionSpeech);

    const displayOptions = [...questionOptions].sort(() => 0.5 - Math.random());

    displayOptions.forEach(option => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        optionCard.dataset.id = option.id;

        if (option.image) {
            const img = document.createElement('img');
            img.src = option.image;
            img.alt = option.word;
            optionCard.appendChild(img);
        } else {
            const emojiEl = document.createElement('p');
            emojiEl.className = 'option-emoji';
            emojiEl.innerText = option.emoji;
            optionCard.appendChild(emojiEl);
        }

        optionCard.addEventListener('click', checkAnswer);
        optionsArea.appendChild(optionCard);
    });
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
                feedbackText.innerText = "You're a Star! �";
                speakText("You're a Star!");
                createTrackedTimeout(() => {
                    starsDisplay.innerText = '';
                    currentLetterIndex = 0;
                    nextQuestion();
                }, 2000);
            } else {
                currentLetterIndex = (currentLetterIndex + 1) % uniqueLetters.length;
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