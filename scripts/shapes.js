const shapesData = [
    {id: 'Circle', word: 'Circle', image: 'images/shape_circle.png', color: '#E91E63'},
    {id: 'Square', word: 'Square', image: 'images/shape_square.png', color: '#03A9F4'},
    {id: 'Triangle', word: 'Triangle', image: 'images/shape_triangle.png', color: '#FFC107'},
    {id: 'Rectangle', word: 'Rectangle', image: 'images/shape_rectangle.png', color: '#9C27B0'},
    {id: 'Oval', word: 'Oval', image: 'images/shape_oval.png', color: '#673AB7'},
    {id: 'Star', word: 'Star', image: 'images/shape_star.png', color: '#FFEB3B'},
    {id: 'Heart', word: 'Heart', image: 'images/shape_heart.png', color: '#F44336'},
    {id: 'Diamond', word: 'Diamond', image: 'images/shape_diamond.png', color: '#00BCD4'},
    {id: 'Line', word: 'Line', image: 'images/shape_line.png', color: '#3F51B5'},
    {id: 'Cross', word: 'Cross', image: 'images/shape_cross.png', color: '#F44336'},
    {id: 'Plus', word: 'Plus', image: 'images/shape_plus.png', color: '#4CAF50'},
    {id: 'Pentagon', word: 'Pentagon', image: 'images/shape_pentagon.png', color: '#FF9800'},
    {id: 'Hexagon', word: 'Hexagon', image: 'images/shape_hexagon.png', color: '#795548'}
];

// DOM elements
const detailsDisplay = document.getElementById('details-display');
const primaryImage = document.getElementById('primary-image');
const exampleImage = document.getElementById('example-image');
const exampleText = document.getElementById('example-text');
const numberWordText = document.getElementById('number-word-text');

function createGrid(data, containerId, options = {}) {
    const { lang = 'en-US', displayType = 'image' } = options;
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderTop = `8px solid ${item.color}`;
        
        const imgEl = document.createElement('img');
        imgEl.src = item.image;
        imgEl.alt = item.word;
        imgEl.className = 'card-image';
        card.appendChild(imgEl);

        card.addEventListener('click', function() {
            let textToSpeak = '';
            
            detailsDisplay.classList.remove('hidden');
            primaryImage.classList.remove('hidden');
            primaryImage.src = item.image;
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    createGrid(shapesData, 'shapes-container', { lang: 'en-US', displayType: 'image' });
});