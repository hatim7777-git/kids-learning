const colorsData = [
    { word: 'Red', color: '#FF0000', examples: [
        {emoji: '🍎', text: 'Red apple'},
        {emoji: '🌹', text: 'Red rose'},
        {emoji: '🚗', text: 'Red car'}
    ]},
    { word: 'Blue', color: '#0000FF', examples: [
        {emoji: '🫐', text: 'Blueberries'},
        {emoji: '🐳', text: 'Blue whale'},
        {emoji: '🌊', text: 'Blue ocean'}
    ]},
    { word: 'Green', color: '#008000', examples: [
        {emoji: '🍏', text: 'Green apple'},
        {emoji: '🌳', text: 'Green tree'},
        {emoji: '🐸', text: 'Green frog'}
    ]},
    { word: 'Yellow', color: '#FFFF00', examples: [
        {emoji: '🍌', text: 'Yellow banana'},
        {emoji: '🌻', text: 'Yellow sunflower'},
        {emoji: '🍋', text: 'Yellow lemon'}
    ]},
    { word: 'Orange', color: '#FFA500', examples: [
        {emoji: '🍊', text: 'Orange fruit'},
        {emoji: '🥕', text: 'Orange carrot'},
        {emoji: '🐯', text: 'Orange tiger'}
    ]},
    { word: 'Purple', color: '#800080', examples: [
        {emoji: '🍇', text: 'Purple grapes'},
        {emoji: '🍆', text: 'Purple eggplant'},
        {emoji: '🦄', text: 'Purple unicorn'}
    ]},
    { word: 'Pink', color: '#FFC0CB', examples: [
        {emoji: '🌸', text: 'Pink flower'},
        {emoji: '🎀', text: 'Pink ribbon'},
        {emoji: '🐷', text: 'Pink pig'}
    ]},
    { word: 'Brown', color: '#A52A2A', examples: [
        {emoji: '🐻', text: 'Brown bear'},
        {emoji: '🍫', text: 'Brown chocolate'},
        {emoji: '🥔', text: 'Brown potato'}
    ]},
    { word: 'Black', color: '#000000', examples: [
        {emoji: '🐈', text: 'Black cat'},
        {emoji: '🧤', text: 'Black glove'},
        {emoji: '🎹', text: 'Black piano keys'}
    ]},
    { word: 'White', color: '#FFFFFF', examples: [
        {emoji: '☁️', text: 'White cloud'},
        {emoji: '🐑', text: 'White sheep'},
        {emoji: '🥛', text: 'White milk'}
    ]},
    { word: 'Gray', color: '#808080', examples: [
        {emoji: '🐘', text: 'Gray elephant'},
        {emoji: '🦉', text: 'Gray owl'},
        {emoji: '🏢', text: 'Gray building'}
    ]},
    { word: 'Cyan', color: '#00FFFF', examples: [
        {emoji: '🐟', text: 'Cyan fish'},
        {emoji: '💎', text: 'Cyan gem'},
        {emoji: '🧊', text: 'Cyan ice'}
    ]},
    { word: 'Magenta', color: '#FF00FF', examples: [
        {emoji: '🦩', text: 'Magenta flamingo'},
        {emoji: '🌸', text: 'Magenta flower'},
        {emoji: '💗', text: 'Magenta heart'}
    ]},
    { word: 'Lime', color: '#00FF00', examples: [
        {emoji: '🍋', text: 'Lime fruit'},
        {emoji: '🍃', text: 'Lime leaf'},
        {emoji: '🥒', text: 'Lime pickle'}
    ]},
    { word: 'Indigo', color: '#4B0082', examples: [
        {emoji: '🌙', text: 'Indigo night sky'},
        {emoji: '👖', text: 'Indigo jeans'},
        {emoji: '🎨', text: 'Indigo paint'}
    ]},
    { word: 'Violet', color: '#EE82EE', examples: [
        {emoji: '🌸', text: 'Violet flower'},
        {emoji: '💜', text: 'Violet heart'},
        {emoji: '🦋', text: 'Violet butterfly'}
    ]},
    { word: 'Teal', color: '#008080', examples: [
        {emoji: '🦆', text: 'Teal duck'},
        {emoji: '🌿', text: 'Teal plant'},
        {emoji: '🎁', text: 'Teal gift box'}
    ]},
    { word: 'Gold', color: '#FFD700', examples: [
        {emoji: '🏆', text: 'Gold trophy'},
        {emoji: '💰', text: 'Gold coins'},
        {emoji: '👑', text: 'Gold crown'}
    ]},
    { word: 'Silver', color: '#C0C0C0', examples: [
        {emoji: '🥈', text: 'Silver medal'},
        {emoji: '🥄', text: 'Silver spoon'},
        {emoji: '🪙', text: 'Silver coin'}
    ]},
    { word: 'Maroon', color: '#800000', examples: [
        {emoji: '🍇', text: 'Maroon grapes'},
        {emoji: '🎃', text: 'Maroon pumpkin'},
        {emoji: '🪵', text: 'Maroon bird'}
    ]}
];

// DOM elements
const detailsDisplay = document.getElementById('details-display');
const primaryImage = document.getElementById('primary-image');
const exampleImage = document.getElementById('example-image');
const exampleText = document.getElementById('example-text');
const numberWordText = document.getElementById('number-word-text');

function createGrid(data, containerId, options = {}) {
    const { displayType = 'color', lang = 'en-US' } = options;
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderTop = `8px solid ${item.color}`;
        card.dataset.exampleIndex = 0;
        
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
            if (detailsDisplay && numberWordText) {
                detailsDisplay.classList.remove('hidden');
                numberWordText.innerText = item.word;
                numberWordText.style.color = item.color;
                
                // Hide primary image for colors
                if (primaryImage) primaryImage.classList.add('hidden');
                
                // Hide example image for colors
                if (exampleImage) exampleImage.classList.add('hidden');
                
                // Cycle through examples
                const itemIndex = parseInt(card.dataset.exampleIndex);
                const currentExample = item.examples[itemIndex];
                
                // Show example in exampleText
                if (currentExample) {
                    exampleText.classList.remove('hidden');
                    exampleText.classList.add('large-emoji');
                    exampleText.innerText = currentExample.emoji;
                    
                    // Speak the color name first, then the example
                    speakText(item.word, lang);
                    setTimeout(() => {
                        speakText(currentExample.text, lang);
                    }, 1000);
                } else {
                    speakText(item.word, lang);
                }
                
                // Cycle to next example
                card.dataset.exampleIndex = (itemIndex + 1) % item.examples.length;
            }
        });

        container.appendChild(card);
    });
}

// Use speakText from common.js

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    createGrid(colorsData, 'colors-container', { displayType: 'color', lang: 'en-US' });
});