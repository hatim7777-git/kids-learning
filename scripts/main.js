const alphabetData = [
    // Expanded with at least 5 examples per letter for a dynamic quiz.
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
    {id: 'B', lower: 'b', word: 'Box', emoji: '📦', color: '#A1887F'}, // Using words with 'x'
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
const abcSong = document.getElementById('abc-song');
const numSong = document.getElementById('num-song');
const playAbcBtn = document.getElementById('play-abc-song-btn');
const playNumBtn = document.getElementById('play-num-song-btn');

function createGrid(data, containerId, options = {}) {
    const { isNumbers = false, lang = 'en-US', displayType = 'text' } = options;
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        if (lang.startsWith('ar')) {
            card.classList.add('arabic-card');
        }
        card.style.borderTop = `8px solid ${item.color}`;
        card.dataset.exampleIndex = 0; 
        
        if (displayType === 'image') {
            const imgEl = document.createElement('img');
            imgEl.src = item.image;
            imgEl.alt = item.word;
            imgEl.className = 'card-image';
            card.appendChild(imgEl);
        } else {
            const charEl = document.createElement('p');
            charEl.className = 'char';
            charEl.style.color = item.color;
            charEl.lang = lang;
    
            if (isNumbers) {
                charEl.innerText = item.id;
            } else if (item.lower) { // English alphabet has lowercase
                charEl.innerText = item.id + item.lower;
            } else { // Arabic alphabet
                charEl.innerText = item.id;
            }
    
            card.appendChild(charEl);
        }

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
                exampleText.classList.remove('large-emoji'); // Ensure number examples don't have large emojis
                exampleText.innerText = currentExample.text;

                // Remove the emoji from the start of the text for cleaner audio
                const textForSpeech = currentExample.text.replace(/^(\p{Emoji}|\p{Punctuation})\s*/u, '');
                textToSpeak = `${item.id}... ${textForSpeech}`;
                card.dataset.exampleIndex = (exampleIndex + 1) % item.examples.length;
            } else {
                detailsDisplay.classList.remove('hidden');
                document.querySelector('.example-display').classList.remove('hidden'); // Show the example view
                
                let sourceData;
                // Hide the smaller example display by default for single-image items
                exampleImage.classList.add('hidden');
                exampleText.classList.add('hidden');

                if (lang.startsWith('ar')) {
                    sourceData = arabicAlphabetData;
                } else if (displayType === 'image') { // This handles shapes
                    sourceData = shapesData;
                } else {
                    sourceData = alphabetData;
                }
                const relatedItems = sourceData.filter(d => d.id === item.id);
                const itemIndex = parseInt(card.dataset.exampleIndex);
                const currentItem = relatedItems[itemIndex];

                if (currentItem.englishWord) { // For Arabic letters
                    primaryImage.classList.add('hidden'); // Hide primary image
                    exampleText.classList.remove('hidden'); // Show emoji text
                    exampleText.classList.add('large-emoji');
                    exampleText.innerText = currentItem.emoji;
                    numberWordText.innerHTML = `${currentItem.word}<br><span class="english-translation">${currentItem.englishWord}</span>`;
                    textToSpeak = currentItem.word; // Only queue Arabic word for speech
                } else {
                    // For English letters and Shapes
                    primaryImage.classList.remove('hidden');
                    primaryImage.src = currentItem.image || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; // Use transparent pixel if no image
                    numberWordText.innerText = currentItem.word;
                    textToSpeak = currentItem.word;

                    if (displayType === 'image') { // This is a shape
                        // Shapes only have one image, which is already set in primaryImage.
                        // No secondary display needed.
                    } else if (currentItem.emoji) { // This is an English letter with an emoji
                        exampleText.classList.remove('hidden');
                        exampleText.classList.add('large-emoji');
                        exampleText.innerText = currentItem.emoji;
                    }
                }

                card.dataset.exampleIndex = (itemIndex + 1) % relatedItems.length;
            }

            speakText(textToSpeak, lang);
        });

        container.appendChild(card);
    });
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

function toggleSong(type) {
    const song = (type === 'abc') ? abcSong : numSong;
    const btn = (type === 'abc') ? playAbcBtn : playNumBtn;

    if (song.paused) {
        song.play();
        btn.innerText = (type === 'abc') ? 'Pause ABC Song ⏸️' : 'Pause 123 Song ⏸️';
    } else {
        song.pause();
        btn.innerText = (type === 'abc') ? 'Play ABC Song 🎵' : 'Play 123 Song 🎵';
    }
}

function stopAllSongs() {
    abcSong.pause();
    abcSong.currentTime = 0;
    playAbcBtn.innerText = 'Play ABC Song 🎵';

    numSong.pause();
    numSong.currentTime = 0;
    playNumBtn.innerText = 'Play 123 Song 🎵';

    playAbcBtn.classList.add('hidden');
    playNumBtn.classList.add('hidden');
}

function switchMode(mode) {
    // Hide all containers first
    ['abc-container', 'num-container', 'arabic-abc-container', 'arabic-num-container', 'shapes-container', 'game-container', 'details-display', 'learning-main'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });

    // Stop any playing songs and hide buttons before switching mode
    stopAllSongs();

    if(mode === 'abc') {
        document.getElementById('learning-main').classList.remove('hidden');
        document.getElementById('abc-container').classList.remove('hidden');
        playAbcBtn.classList.remove('hidden');
    } else if (mode === 'num') {
        document.getElementById('learning-main').classList.remove('hidden');
        document.getElementById('num-container').classList.remove('hidden');
        playNumBtn.classList.remove('hidden');
    } else if (mode === 'arabic-abc') {
        document.getElementById('learning-main').classList.remove('hidden');
        document.getElementById('arabic-abc-container').classList.remove('hidden');
        // Set main container to RTL
        document.getElementById('arabic-abc-container').style.direction = 'rtl';
    } else if (mode === 'arabic-num') {
        document.getElementById('learning-main').classList.remove('hidden');
        document.getElementById('arabic-num-container').classList.remove('hidden');
        // Set main container to RTL
        document.getElementById('arabic-num-container').style.direction = 'rtl';
    } else if (mode === 'shapes') {
        document.getElementById('learning-main').classList.remove('hidden');
        document.getElementById('shapes-container').classList.remove('hidden');
    } else if (mode === 'game-abc' || mode === 'game-num') {
        const gameType = mode.split('-')[1]; // 'abc' or 'num'
        gameContainer.classList.remove('hidden');
        startGame(gameType);
    }
}

// --- GAME LOGIC ---
let currentCorrectAnswerId = '';
let currentQuestionSpeech = '';
let currentCorrectWord = '';
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
    currentCorrectWord = correctAnswer.word;

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

        // Disable clicking during transition
        document.querySelectorAll('.option-card').forEach(card => card.removeEventListener('click', checkAnswer));

        // This function will load the next question or end the game
        const proceedToNextStep = () => {
            if (starsDisplay.innerText.length >= 10) {
                // Game Over
                feedbackText.innerText = "You're a Star! 🌟";
                setTimeout(() => { // Restart the same game type
                    startGame(currentGameType);
                }, 2000); // A bit shorter wait to restart
            } else {
                // Load next question after a fixed pause
                feedbackText.innerText = "";
                document.getElementById('question-text').style.fontSize = '2rem'; // Reset font size for next question
                nextQuestion();
            }
        };

        // New sequence: Speak word -> pause -> clap -> next question
        speakText(currentCorrectWord, 'en-US', () => {
            // After word is spoken, wait a tiny bit
            clapSound.currentTime = 0;
            clapSound.play();

            // Let the clap play for 1 second, then pause it and proceed.
            setTimeout(() => {
                clapSound.pause();
                // A small delay before the next question appears for a smoother transition
                setTimeout(proceedToNextStep, 500);
            }, 1000); // Play clap for max 1 second
        });


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
// Initialize English grids
createGrid(uniqueAlphabetData, 'abc-container', { isNumbers: false, lang: 'en-US' });
createGrid(numberData, 'num-container', { isNumbers: true, lang: 'en-US' });