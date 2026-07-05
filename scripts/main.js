const alphabetData = [
    // Expanded with at least 5 examples per letter for a dynamic quiz.
    {id: 'A', lower: 'a', word: 'Apple', emoji: '🍎', image: 'images/ex_A.png', color: '#FF3D00'},
    {id: 'A', lower: 'a', word: 'Ant', emoji: '🐜', color: '#D9534F'},
    {id: 'A', lower: 'a', word: 'Avocado', emoji: '🥑', color: '#8BC34A'},
    {id: 'A', lower: 'a', word: 'Anchor', emoji: '⚓', color: '#607D8B'},
    {id: 'A', lower: 'a', word: 'Astronaut', emoji: '🧑‍🚀', color: '#E0E0E0'},
    {id: 'B', lower: 'b', word: 'Ball', emoji: '⚽', image: 'images/ex_B.png', color: '#0476D0'},
    {id: 'B', lower: 'b', word: 'Bee', emoji: '🐝', color: '#F0AD4E'},
    {id: 'B', lower: 'b', word: 'Banana', emoji: '🍌', color: '#FFEB3B'},
    {id: 'B', lower: 'b', word: 'Book', emoji: '📖', color: '#795548'},
    {id: 'B', lower: 'b', word: 'Butterfly', emoji: '🦋', color: '#42A5F5'},
    {id: 'C', lower: 'c', word: 'Cat', emoji: '🐱', image: 'images/ex_C.png', color: '#FFB300'},
    {id: 'C', lower: 'c', word: 'Car', emoji: '🚗', color: '#5BC0DE'},
    {id: 'C', lower: 'c', word: 'Cookie', emoji: '🍪', color: '#A1887F'},
    {id: 'C', lower: 'c', word: 'Crown', emoji: '👑', color: '#FFD700'},
    {id: 'C', lower: 'c', word: 'Clown', emoji: '🤡', color: '#E91E63'},
    {id: 'D', lower: 'd', word: 'Dog', emoji: '🐶', image: 'images/ex_D.png', color: '#4CAF50'},
    {id: 'D', lower: 'd', word: 'Duck', emoji: '🦆', color: '#5CB85C'},
    {id: 'D', lower: 'd', word: 'Donut', emoji: '🍩', color: '#F06292'},
    {id: 'D', lower: 'd', word: 'Dolphin', emoji: '🐬', color: '#29B6F6'},
    {id: 'D', lower: 'd', word: 'Diamond', emoji: '💎', color: '#4DD0E1'},
    {id: 'E', lower: 'e', word: 'Elephant', emoji: '🐘', image: 'images/ex_E.png', color: '#9C27B0'},
    {id: 'E', lower: 'e', word: 'Egg', emoji: '🥚', color: '#795548'},
    {id: 'E', lower: 'e', word: 'Eagle', emoji: '🦅', color: '#A1887F'},
    {id: 'E', lower: 'e', word: 'Earth', emoji: '🌍', color: '#4CAF50'},
    {id: 'E', lower: 'e', word: 'Eye', emoji: '👁️', color: '#00BCD4'},
    {id: 'F', lower: 'f', word: 'Fish', emoji: '🐟', image: 'images/ex_F.png', color: '#00BCD4'},
    {id: 'F', lower: 'f', word: 'Frog', emoji: '🐸', color: '#8BC34A'},
    {id: 'F', lower: 'f', word: 'Fire', emoji: '🔥', color: '#FF5722'},
    {id: 'F', lower: 'f', word: 'Flower', emoji: '🌸', color: '#E91E63'},
    {id: 'F', lower: 'f', word: 'Fox', emoji: '🦊', color: '#FF9800'},
    {id: 'G', lower: 'g', word: 'Grapes', emoji: '🍇', image: 'images/ex_G.png', color: '#673AB7'},
    {id: 'G', lower: 'g', word: 'Ghost', emoji: '👻', color: '#E0E0E0'},
    {id: 'G', lower: 'g', word: 'Guitar', emoji: '🎸', color: '#795548'},
    {id: 'G', lower: 'g', word: 'Goat', emoji: '🐐', color: '#BDBDBD'},
    {id: 'G', lower: 'g', word: 'Gift', emoji: '🎁', color: '#F44336'},
    {id: 'H', lower: 'h', word: 'Hat', emoji: '🎩', image: 'images/ex_H.png', color: '#795548'},
    {id: 'H', lower: 'h', word: 'Heart', emoji: '❤️', color: '#F44336'},
    {id: 'H', lower: 'h', word: 'Helicopter', emoji: '🚁', color: '#03A9F4'},
    {id: 'H', lower: 'h', word: 'Hammer', emoji: '🔨', color: '#9E9E9E'},
    {id: 'H', lower: 'h', word: 'Horse', emoji: '🐴', color: '#A1887F'},
    {id: 'I', lower: 'i', word: 'Ice Cream', emoji: '🍦', image: 'images/ex_I.png', color: '#E91E63'},
    {id: 'I', lower: 'i', word: 'Igloo', emoji: '🧊', color: '#B3E5FC'},
    {id: 'I', lower: 'i', word: 'Island', emoji: '🏝️', color: '#4CAF50'},
    {id: 'I', lower: 'i', word: 'Iron', emoji: '🔩', color: '#9E9E9E'},
    {id: 'I', lower: 'i', word: 'Ink', emoji: '✒️', color: '#212121'},
    {id: 'J', lower: 'j', word: 'Juice', emoji: '🧃', image: 'images/ex_J.png', color: '#FF5722'},
    {id: 'J', lower: 'j', word: 'Jellyfish', emoji: '🪼', color: '#00BCD4'},
    {id: 'J', lower: 'j', word: 'Jacket', emoji: '🧥', color: '#795548'},
    {id: 'J', lower: 'j', word: 'Jet', emoji: '✈️', color: '#607D8B'},
    {id: 'J', lower: 'j', word: 'Jewel', emoji: '💎', color: '#03A9F4'},
    {id: 'K', lower: 'k', word: 'Kite', emoji: '🪁', image: 'images/ex_K.png', color: '#009688'},
    {id: 'K', lower: 'k', word: 'Key', emoji: '🔑', color: '#FFC107'},
    {id: 'K', lower: 'k', word: 'King', emoji: '🤴', color: '#FFEB3B'},
    {id: 'K', lower: 'k', word: 'Koala', emoji: '🐨', color: '#BDBDBD'},
    {id: 'K', lower: 'k', word: 'Kangaroo', emoji: '🦘', color: '#A1887F'},
    {id: 'L', lower: 'l', word: 'Lion', emoji: '🦁', image: 'images/ex_L.png', color: '#FFC107'},
    {id: 'L', lower: 'l', word: 'Lemon', emoji: '🍋', color: '#FFEE58'},
    {id: 'L', lower: 'l', word: 'Leaf', emoji: '🍃', color: '#8BC34A'},
    {id: 'L', lower: 'l', word: 'Lamp', emoji: '💡', color: '#FFF176'},
    {id: 'L', lower: 'l', word: 'Ladybug', emoji: '🐞', color: '#D32F2F'},
    {id: 'M', lower: 'm', word: 'Monkey', emoji: '🐒', image: 'images/ex_M.png', color: '#8BC34A'},
    {id: 'M', lower: 'm', word: 'Moon', emoji: '🌙', color: '#FFF59D'},
    {id: 'M', lower: 'm', word: 'Mouse', emoji: '🐭', color: '#BDBDBD'},
    {id: 'M', lower: 'm', word: 'Mushroom', emoji: '🍄', color: '#EF5350'},
    {id: 'M', lower: 'm', word: 'Mitten', emoji: '🧤', color: '#42A5F5'},
    {id: 'N', lower: 'n', word: 'Nest', emoji: '🪹', image: 'images/ex_N.png', color: '#3F51B5'},
    {id: 'N', lower: 'n', word: 'Nose', emoji: '👃', color: '#FFCCBC'},
    {id: 'N', lower: 'n', word: 'Notebook', emoji: '📓', color: '#78909C'},
    {id: 'N', lower: 'n', word: 'Net', emoji: '🥅', color: '#FFFFFF'},
    {id: 'N', lower: 'n', word: 'Ninja', emoji: '🥷', color: '#212121'},
    {id: 'O', lower: 'o', word: 'Orange', emoji: '🍊', image: 'images/ex_O.png', color: '#FF9800'},
    {id: 'O', lower: 'o', word: 'Octopus', emoji: '🐙', color: '#E91E63'},
    {id: 'O', lower: 'o', word: 'Owl', emoji: '🦉', color: '#795548'},
    {id: 'O', lower: 'o', word: 'Onion', emoji: '🧅', color: '#E0E0E0'},
    {id: 'O', lower: 'o', word: 'Ogre', emoji: '👹', color: '#F44336'},
    {id: 'P', lower: 'p', word: 'Penguin', emoji: '🐧', image: 'images/ex_P.png', color: '#00E676'},
    {id: 'P', lower: 'p', word: 'Pizza', emoji: '🍕', color: '#FFC107'},
    {id: 'P', lower: 'p', word: 'Pig', emoji: '🐷', color: '#F48FB1'},
    {id: 'P', lower: 'p', word: 'Pirate', emoji: '🏴‍☠️', color: '#212121'},
    {id: 'P', lower: 'p', word: 'Pencil', emoji: '✏️', color: '#FFEB3B'},
    {id: 'Q', lower: 'q', word: 'Queen', emoji: '👸', image: 'images/ex_Q.png', color: '#E040FB'},
    {id: 'Q', lower: 'q', word: 'Question Mark', emoji: '❓', color: '#03A9F4'},
    {id: 'Q', lower: 'q', word: 'Quilt', emoji: '🛌', color: '#795548'},
    {id: 'Q', lower: 'q', word: 'Quail', emoji: '🐦', color: '#A1887F'},
    {id: 'Q', lower: 'q', word: 'Quartz', emoji: '💎', color: '#E0E0E0'},
    {id: 'R', lower: 'r', word: 'Rabbit', emoji: '🐇', image: 'images/ex_R.png', color: '#FF5252'},
    {id: 'R', lower: 'r', word: 'Rainbow', emoji: '🌈', color: '#9C27B0'},
    {id: 'R', lower: 'r', word: 'Robot', emoji: '🤖', color: '#9E9E9E'},
    {id: 'R', lower: 'r', word: 'Rocket', emoji: '🚀', color: '#F44336'},
    {id: 'R', lower: 'r', word: 'Ring', emoji: '💍', color: '#FFD700'},
    {id: 'S', lower: 's', word: 'Sun', emoji: '☀️', image: 'images/ex_S.png', color: '#FFEA00'},
    {id: 'S', lower: 's', word: 'Star', emoji: '⭐', color: '#FFD700'},
    {id: 'S', lower: 's', word: 'Snake', emoji: '🐍', color: '#4CAF50'},
    {id: 'S', lower: 's', word: 'Strawberry', emoji: '🍓', color: '#F44336'},
    {id: 'S', lower: 's', word: 'Spider', emoji: '🕷️', color: '#212121'},
    {id: 'T', lower: 't', word: 'Train', emoji: '🚂', image: 'images/ex_T.png', color: '#03A9F4'},
    {id: 'T', lower: 't', word: 'Tree', emoji: '🌳', color: '#4CAF50'},
    {id: 'T', lower: 't', word: 'Tiger', emoji: '🐅', color: '#FF9800'},
    {id: 'T', lower: 't', word: 'Turtle', emoji: '🐢', color: '#8BC34A'},
    {id: 'T', lower: 't', word: 'Taco', emoji: '🌮', color: '#FFC107'},
    {id: 'U', lower: 'u', word: 'Umbrella', emoji: '☂️', image: 'images/ex_U.png', color: '#9575CD'},
    {id: 'U', lower: 'u', word: 'Unicorn', emoji: '🦄', color: '#F48FB1'},
    {id: 'U', lower: 'u', word: 'UFO', emoji: '🛸', color: '#8BC34A'},
    {id: 'U', lower: 'u', word: 'Utensils', emoji: '🍴', color: '#9E9E9E'},
    {id: 'U', lower: 'u', word: 'Uniform', emoji: '🥋', color: '#FFFFFF'},
    {id: 'V', lower: 'v', word: 'Violin', emoji: '🎻', image: 'images/ex_V.png', color: '#8D6E63'},
    {id: 'V', lower: 'v', word: 'Volcano', emoji: '🌋', color: '#FF5722'},
    {id: 'V', lower: 'v', word: 'Vampire', emoji: '🧛', color: '#212121'},
    {id: 'V', lower: 'v', word: 'Vegetable', emoji: '🥦', color: '#4CAF50'},
    {id: 'V', lower: 'v', word: 'Van', emoji: '🚐', color: '#E0E0E0'},
    {id: 'W', lower: 'w', word: 'Watermelon', emoji: '🍉', image: 'images/ex_W.png', color: '#2E7D32'},
    {id: 'W', lower: 'w', word: 'Whale', emoji: '🐳', color: '#03A9F4'},
    {id: 'W', lower: 'w', word: 'Worm', emoji: '🪱', color: '#F48FB1'},
    {id: 'W', lower: 'w', word: 'Wolf', emoji: '🐺', color: '#9E9E9E'},
    {id: 'W', lower: 'w', word: 'Witch', emoji: '🧙', color: '#4CAF50'},
    {id: 'X', lower: 'x', 'word': 'Xylophone', emoji: '🎼', image: 'images/ex_X.png', color: '#006064'},
    {id: 'X', lower: 'x', word: 'X-ray', emoji: '🦴', color: '#FFFFFF'},
    {id: 'X', lower: 'x', word: 'Box', emoji: '📦', color: '#A1887F'}, // Using words with 'x'
    {id: 'X', lower: 'x', word: 'Axe', emoji: '🪓', color: '#9E9E9E'},
    {id: 'X', lower: 'x', word: 'Fox', emoji: '🦊', color: '#FF9800'},
    {id: 'Y', lower: 'y', word: 'Yo-yo', emoji: '🪀', image: 'images/ex_Y.png', color: '#F50057'},
    {id: 'Y', lower: 'y', word: 'Yacht', emoji: '🛥️', color: '#03A9F4'},
    {id: 'Y', lower: 'y', word: 'Yarn', emoji: '🧶', color: '#E91E63'},
    {id: 'Y', lower: 'y', word: 'Yawn', emoji: '🥱', color: '#FFC107'},
    {id: 'Y', lower: 'y', word: 'Yoga', emoji: '🧘', color: '#00BCD4'},
    {id: 'Z', lower: 'z', word: 'Zebra', emoji: '🦓', image: 'images/ex_Z.png', color: '#212121'},
    {id: 'Z', lower: 'z', word: 'Zipper', emoji: '🤐', color: '#9E9E9E'},
    {id: 'Z', lower: 'z', word: 'Zombie', emoji: '🧟', color: '#8BC34A'},
    {id: 'Z', lower: 'z', word: 'Zoo', emoji: '🦁', color: '#FFC107'},
    {id: 'Z', lower: 'z', word: 'ZZZ', emoji: '😴', color: '#03A9F4'},
];

const numberData = [
    {id: '0', word: 'Zero', fingerImg: 'images/f0.png', examples: [
        {text: '🚫 An empty jar has Zero candies', image: 'images/ex0.png'}
    ], color: '#607D8B'},
    {id: '1', word: 'One', fingerImg: 'images/f1.png', examples: [{text: '☀️ There is One happy sun', image: 'images/ex1.png'}], color: '#FF5722'},
    {id: '2', word: 'Two', fingerImg: 'images/f2.png', examples: [{text: '👀 We have Two eyes', image: 'images/ex2.png'}], color: '#2196F3'},
    {id: '3', word: 'Three', fingerImg: 'images/f3.png', examples: [{text: '🚦 A traffic light has Three lights', image: 'images/ex3.png'}], color: '#4CAF50'},
    {id: '4', word: 'Four', fingerImg: 'images/f4.png', examples: [{text: '🚗 A car has Four wheels', image: 'images/ex4.png'}], color: '#FF9800'},
    {id: '5', word: 'Five', fingerImg: 'images/f5.png', examples: [{text: '🖐️ A hand has Five fingers', image: 'images/ex5.png'}], color: '#9C27B0'},
    {id: '6', word: 'Six', fingerImg: 'images/f6.png', examples: [{text: '🐞 A ladybug has Six legs', image: 'images/ex6.png'}], color: '#E91E63'},
    {id: '7', word: 'Seven', fingerImg: 'images/f7.png', examples: [{text: '🌈 A rainbow has Seven colors', image: 'images/ex7.png'}], color: '#FFEB3B'},
    {id: '8', word: 'Eight', fingerImg: 'images/f8.png', examples: [{text: '🐙 An octopus has Eight tentacles', image: 'images/ex8.png'}], color: '#00BCD4'},
    {id: '9', word: 'Nine', fingerImg: 'images/f9.png', examples: [{text: '🧩 A Rubik\'s cube face has Nine squares', image: 'images/ex9.png'}], color: '#8BC34A'},
    {id: '10', word: 'Ten', fingerImg: 'images/f10.png', examples: [{text: '👐 We have Ten fingers', image: 'images/ex10.png'}], color: '#795548'}
];

const detailsDisplay = document.getElementById('details-display');
const primaryImage = document.getElementById('primary-image');
const exampleImage = document.getElementById('example-image');
const exampleText = document.getElementById('example-text');
const numberWordText = document.getElementById('number-word-text');

// Game elements
const gameContainer = document.getElementById('game-container');
const starsDisplay = document.getElementById('stars-display');
const clapSound = document.getElementById('clap-sound');
const feedbackText = document.getElementById('feedback-text');

function createGrid(data, containerId, isNumbers = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderTop = `8px solid ${item.color}`;
        card.dataset.exampleIndex = 0; 
        
        const charEl = document.createElement('p');
        charEl.className = 'char';
        charEl.style.color = item.color;
        if (isNumbers) {
            charEl.innerText = item.id;
        } else {
            charEl.innerText = item.id + item.lower;
        }

        card.appendChild(charEl);

        card.addEventListener('click', () => {
            let textToSpeak = '';
            if (isNumbers) {
                detailsDisplay.classList.remove('hidden');
                document.querySelector('.example-display').classList.remove('hidden');

                const exampleIndex = parseInt(card.dataset.exampleIndex);
                const currentExample = item.examples[exampleIndex];

                primaryImage.src = item.fingerImg;
                exampleImage.src = currentExample.image;
                numberWordText.innerText = item.word;
                exampleText.innerText = currentExample.text;

                // Remove the emoji from the start of the text for cleaner audio
                const textForSpeech = currentExample.text.replace(/^(\p{Emoji}|\p{Punctuation})\s*/u, '');
                textToSpeak = `${item.id}... ${textForSpeech}`;
                card.dataset.exampleIndex = (exampleIndex + 1) % item.examples.length;
            } else {
                detailsDisplay.classList.remove('hidden');
                document.querySelector('.example-display').classList.add('hidden'); // Hide the smaller example view
                numberWordText.innerText = ''; // Clear number word for alphabet

                primaryImage.src = item.image;
                
                // This part is for the learning mode, let's ensure it handles emoji-only items gracefully
                if (item.image) {
                    primaryImage.src = item.image;
                    textToSpeak = `${item.id}... for ${item.word}`;
                } else {
                    // If no image, we could show the emoji here too, but for now, we just speak it.
                    textToSpeak = `${item.word}... starts with ${item.id}`;
                }
            }

            speakText(textToSpeak);
        });

        container.appendChild(card);
    });
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); 
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.85; 
        utterance.pitch = 1.2; 
        window.speechSynthesis.speak(utterance);
    }
}

function switchMode(mode) {
    if(mode === 'abc') {
        document.getElementById('abc-container').classList.remove('hidden');
        document.getElementById('learning-main').classList.remove('hidden');
        document.getElementById('num-container').classList.add('hidden');
        detailsDisplay.classList.add('hidden'); 
        gameContainer.classList.add('hidden');
    } else if (mode === 'num') {
        document.getElementById('abc-container').classList.add('hidden');
        document.getElementById('learning-main').classList.remove('hidden');
        document.getElementById('num-container').classList.remove('hidden');
        gameContainer.classList.add('hidden');
    } else if (mode === 'game-abc' || mode === 'game-num') {
        const gameType = mode.split('-')[1]; // 'abc' or 'num'
        document.getElementById('abc-container').classList.add('hidden');
        document.getElementById('num-container').classList.add('hidden');
        document.getElementById('learning-main').classList.add('hidden');
        detailsDisplay.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        startGame(gameType);
    }
}

// --- GAME LOGIC ---
let currentCorrectAnswerId = '';
let currentQuestionSpeech = '';
let currentGameType = '';

function startGame(type) {
    currentGameType = type;
    starsDisplay.innerText = ''; // Reset stars
    feedbackText.innerText = '';
    nextQuestion();
}

function nextQuestion() {
    const optionsArea = document.getElementById('options-area');
    optionsArea.innerHTML = ''; // Clear old options

    // Randomly choose between an alphabet or number question
    if (currentGameType === 'abc') {
        generateAlphabetQuestion();
    } else {
        generateNumberQuestion();
    }
}

function generateAlphabetQuestion() {
    // 1. Get a list of 4 unique random letters
    let shuffledData = [...alphabetData].sort(() => 0.5 - Math.random());
    let uniqueIds = new Set();
    const questionOptions = shuffledData.filter(item => {
        return uniqueIds.has(item.id) ? false : uniqueIds.add(item.id);
    }).slice(0, 4);
    
    // 2. The first one is our correct answer
    const correctAnswer = questionOptions[0];
    currentCorrectAnswerId = correctAnswer.id;

    // 3. Randomly choose question type and set the text
    const questionTextEl = document.getElementById('question-text');
    const questionType = Math.random() < 0.5 ? 'alphabet' : 'emoji';

    if (questionType === 'alphabet' || !correctAnswer.emoji) {
        currentQuestionSpeech = `Which object starts with the letter '${correctAnswer.id}'?`;
        questionTextEl.innerText = currentQuestionSpeech;
    } else {
        currentQuestionSpeech = `Which object is this?`; // Don't speak the emoji
        questionTextEl.innerText = `${currentQuestionSpeech} ${correctAnswer.emoji}?`;
        questionTextEl.style.fontSize = '3rem'; // Make emoji bigger
    }

    speakText(currentQuestionSpeech);

    // 4. Shuffle the options for display and create their cards
    const displayOptions = [...questionOptions].sort(() => 0.5 - Math.random());
    const optionsArea = document.getElementById('options-area');

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

function generateNumberQuestion() {
    const questionTextEl = document.getElementById('question-text');
    const optionsArea = document.getElementById('options-area');
    const questionType = Math.floor(Math.random() * 3); // 0, 1, or 2

    // Get 4 unique numbers for options
    let shuffledData = [...numberData].sort(() => 0.5 - Math.random());
    const questionOptions = shuffledData.slice(0, 4);
    const correctAnswer = questionOptions[0];
    currentCorrectAnswerId = correctAnswer.id;

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
        const emojiList = ['🍓', '🍬', '⭐', '🚗', '🎈', '🍎', '⚽'];
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

    // Remove feedback from other cards
    document.querySelectorAll('.option-card').forEach(c => {
        c.classList.remove('incorrect');
        c.classList.remove('correct');
    });

    if (selectedId === currentCorrectAnswerId) {
        // Correct Answer
        selectedCard.classList.add('correct');
        feedbackText.innerText = "Correct!";
        feedbackText.className = "feedback-correct";
        
        starsDisplay.innerText += '⭐';
        clapSound.currentTime = 0;
        clapSound.play();
        // Stop the sound after 1 second
        setTimeout(() => {
            clapSound.pause();
        }, 1000);

        // Disable clicking during transition
        document.querySelectorAll('.option-card').forEach(card => card.removeEventListener('click', checkAnswer));

        if (starsDisplay.innerText.length >= 10) {
            // Game Over
            feedbackText.innerText = "You're a Star! 🌟";
            setTimeout(() => { // Restart the same game type
                startGame(currentGameType);
            }, 3000);
        } else {
            // Load next question
            setTimeout(() => {
                feedbackText.innerText = "";
                document.getElementById('question-text').style.fontSize = '2rem'; // Reset font size for next question
                nextQuestion();
            }, 1500);
        }

    } else {
        // Incorrect Answer
        selectedCard.classList.add('incorrect');
        feedbackText.innerText = "Try Again!";
        feedbackText.className = "feedback-incorrect";

        // Disable clicks during the pause
        document.querySelectorAll('.option-card').forEach(card => card.removeEventListener('click', checkAnswer));

        setTimeout(() => {
            selectedCard.classList.remove('incorrect');
            feedbackText.innerText = "";
            // Re-enable clicks
            document.querySelectorAll('.option-card').forEach(card => card.addEventListener('click', checkAnswer));
            // Repeat the question audio
            speakText(currentQuestionSpeech);
        }, 2000);
    }
}

// Initial setup
// Create a unique list for the alphabet learning grid to avoid duplicate letter cards.
// The game mode will still use the full 'alphabetData' with all examples.
const uniqueAlphabetData = [];
const seenLetters = new Set();
for (const item of alphabetData) {
    if (!seenLetters.has(item.id)) {
        uniqueAlphabetData.push(item);
        seenLetters.add(item.id);
    }
}
createGrid(uniqueAlphabetData, 'abc-container', false);
createGrid(numberData, 'num-container', true);