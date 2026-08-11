const shapesData = [
    {id: 'Circle', word: 'Circle', image: 'images/shape_circle.png', color: '#E91E63', examples: [
        {emoji: '☀️', text: 'The sun is a circle'},
        {emoji: '⏰', text: 'A clock face is a circle'},
        {emoji: '⚽', text: 'A ball is a circle'}
    ]},
    {id: 'Square', word: 'Square', image: 'images/shape_square.png', color: '#03A9F4', examples: [
        {emoji: '🪟', text: 'A window is often a square'},
        {emoji: '📦', text: 'A box is a square'},
        {emoji: '🧊', text: 'An ice cube is a square'}
    ]},
    {id: 'Triangle', word: 'Triangle', image: 'images/shape_triangle.png', color: '#FFC107', examples: [
        {emoji: '🍕', text: 'A pizza slice is a triangle'},
        {emoji: '🔺', text: 'A pyramid is a triangle'},
        {emoji: '🚧', text: 'A traffic sign is a triangle'}
    ]},
    {id: 'Rectangle', word: 'Rectangle', image: 'images/shape_rectangle.png', color: '#9C27B0', examples: [
        {emoji: '📱', text: 'A phone screen is a rectangle'},
        {emoji: '🚪', text: 'A door is a rectangle'},
        {emoji: '📄', text: 'A paper is a rectangle'}
    ]},
    {id: 'Oval', word: 'Oval', image: 'images/shape_oval.png', color: '#673AB7', examples: [
        {emoji: '🥚', text: 'An egg is an oval'},
        {emoji: '🏈', text: 'A football is an oval'},
        {emoji: '👁️', text: 'An eye is an oval'}
    ]},
    {id: 'Star', word: 'Star', image: 'images/shape_star.png', color: '#FFEB3B', examples: [
        {emoji: '⭐', text: 'Stars are star shapes'},
        {emoji: '🌟', text: 'Shining stars'},
        {emoji: '✨', text: 'Sparkles are like stars'}
    ]},
    {id: 'Heart', word: 'Heart', image: 'images/shape_heart.png', color: '#F44336', examples: [
        {emoji: '❤️', text: 'A heart shape'},
        {emoji: '🩷', text: 'Heart jewelry'},
        {emoji: '💖', text: 'Sparkling heart'}
    ]},
    {id: 'Diamond', word: 'Diamond', image: 'images/shape_diamond.png', color: '#00BCD4', examples: [
        {emoji: '💎', text: 'A diamond gem'},
        {emoji: '♦️', text: 'Diamond card suit'},
        {emoji: '💠', text: 'Diamond shape'}
    ]},
    {id: 'Line', word: 'Line', image: 'images/shape_line.png', color: '#3F51B5', examples: [
        {emoji: '➖', text: 'A straight line'},
        {emoji: '📏', text: 'A ruler shows lines'},
        {emoji: '🎹', text: 'Piano keys are lines'}
    ]},
    {id: 'Cross', word: 'Cross', image: 'images/shape_cross.png', color: '#F44336', examples: [
        {emoji: '✝️', text: 'A cross shape'},
        {emoji: '❌', text: 'X marks the spot'},
        {emoji: '➕', text: 'Addition symbol'}
    ]},
    {id: 'Plus', word: 'Plus', image: 'images/shape_plus.png', color: '#4CAF50', examples: [
        {emoji: '➕', text: 'Plus sign for addition'},
        {emoji: '🏥', text: 'Hospital cross'},
        {emoji: '✖️', text: 'Multiplication symbol'}
    ]},
    {id: 'Pentagon', word: 'Pentagon', image: 'images/shape_pentagon.png', color: '#FF9800', examples: [
        {emoji: '🏛️', text: 'The Pentagon building'},
        {emoji: '⬠', text: 'Pentagon shape'},
        {emoji: '🏠', text: 'Some houses have 5 sides'}
    ]},
    {id: 'Hexagon', word: 'Hexagon', image: 'images/shape_hexagon.png', color: '#795548', examples: [
        {emoji: '🐝', text: 'Bee hive cells are hexagons'},
        {emoji: '⬡', text: 'Hexagon shape'},
        {emoji: '❄️', text: 'Snowflakes have 6 sides'}
    ]}
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
        card.dataset.exampleIndex = 0;
        
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
            
            // Cycle through examples
            const itemIndex = parseInt(card.dataset.exampleIndex);
            const currentExample = item.examples[itemIndex];
            
            numberWordText.innerText = item.word;
            textToSpeak = item.word;
            
            // Show example in exampleText
            if (currentExample) {
                exampleText.classList.remove('hidden');
                exampleText.classList.add('large-emoji');
                exampleText.innerText = currentExample.emoji;
                
                // Also speak the example text after the shape name
                setTimeout(() => {
                    speakText(currentExample.text, lang);
                }, 1000);
            }
            
            // Hide example image for shapes
            exampleImage.classList.add('hidden');
            
            // Cycle to next example
            card.dataset.exampleIndex = (itemIndex + 1) % item.examples.length;

            speakText(textToSpeak, lang);
        });

        container.appendChild(card);
    });
}

// Use speakText from common.js

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    createGrid(shapesData, 'shapes-container', { lang: 'en-US', displayType: 'image' });
});