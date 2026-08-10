const colorsData = [
    { word: 'Red', color: '#FF0000' },
    { word: 'Blue', color: '#0000FF' },
    { word: 'Green', color: '#008000' },
    { word: 'Yellow', color: '#FFFF00' },
    { word: 'Orange', color: '#FFA500' },
    { word: 'Purple', color: '#800080' },
    { word: 'Pink', color: '#FFC0CB' },
    { word: 'Brown', color: '#A52A2A' },
    { word: 'Black', color: '#000000' },
    { word: 'White', color: '#FFFFFF' },
    { word: 'Gray', color: '#808080' },
    { word: 'Cyan', color: '#00FFFF' },
    { word: 'Magenta', color: '#FF00FF' },
    { word: 'Lime', color: '#00FF00' },
    { word: 'Indigo', color: '#4B0082' },
    { word: 'Violet', color: '#EE82EE' },
    { word: 'Teal', color: '#008080' },
    { word: 'Gold', color: '#FFD700' },
    { word: 'Silver', color: '#C0C0C0' },
    { word: 'Maroon', color: '#800000' }
];

function createGrid(data, containerId, options = {}) {
    const { displayType = 'color', lang = 'en-US' } = options;
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderTop = `8px solid ${item.color}`;
        
        const colorSwatch = document.createElement('div');
        colorSwatch.className = 'color-swatch';
        colorSwatch.style.backgroundColor = item.color;
        card.appendChild(colorSwatch);

        const charEl = document.createElement('p');
        charEl.className = 'char';
        const lightColors = ['#FFFFFF', '#FFFF00', '#FFC0CB', '#ADD8E6', '#90EE90', '#FFD700', '#A9A9A9', '#EE82EE', '#00FF00', '#00FFFF', '#FF00FF'];
        if (lightColors.includes(item.color)) {
            charEl.style.color = '#333';
        } else {
            charEl.style.color = item.color;
        }
        charEl.innerText = item.word;
        card.appendChild(charEl);

        card.addEventListener('click', function() {
            speakText(item.word, lang);
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
    createGrid(colorsData, 'colors-container', { displayType: 'color', lang: 'en-US' });
});