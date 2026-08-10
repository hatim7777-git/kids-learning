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

// DOM elements
const detailsDisplay = document.getElementById('details-display');
const primaryImage = document.getElementById('primary-image');
const exampleImage = document.getElementById('example-image');
const exampleText = document.getElementById('example-text');
const numberWordText = document.getElementById('number-word-text');
const numSong = document.getElementById('num-song');
const playNumBtn = document.getElementById('play-num-song-btn');

function createGrid(data, containerId, options = {}) {
    const { isNumbers = true, lang = 'en-US', displayType = 'text' } = options;
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderTop = `8px solid ${item.color}`; 
        
        const charEl = document.createElement('p');
        charEl.className = 'char';
        charEl.style.color = item.color;
        charEl.lang = lang;
        charEl.innerText = item.id;
        card.appendChild(charEl);

        card.addEventListener('click', function() {
            let textToSpeak = '';
            
            detailsDisplay.classList.remove('hidden');
            primaryImage.src = item.fingerImg;
            exampleImage.src = item.examples[0].image;
            exampleText.innerText = item.examples[0].text;
            numberWordText.innerText = item.word;
            textToSpeak = item.word;

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

        if (lang.startsWith('ar')) {
            const voices = window.speechSynthesis.getVoices();
            const arabicVoice = voices.find(voice => voice.lang.startsWith('ar'));
            if (arabicVoice) {
                utterance.voice = arabicVoice;
            }
        }

        if (onEndCallback) {
            utterance.onend = onEndCallback;
        }

        window.speechSynthesis.speak(utterance);
    }
}

function stopSpeech() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}

function toggleSong() {
    if (numSong.paused) {
        numSong.play();
        playNumBtn.innerText = 'Pause 123 Song ⏸️';
    } else {
        numSong.pause();
        playNumBtn.innerText = 'Play 123 Song 🎵';
    }
}

// Stop song when leaving page
window.addEventListener('beforeunload', function() {
    numSong.pause();
    numSong.currentTime = 0;
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    createGrid(numberData, 'num-container', { isNumbers: true, lang: 'en-US' });
    
    playNumBtn.addEventListener('click', toggleSong);
});