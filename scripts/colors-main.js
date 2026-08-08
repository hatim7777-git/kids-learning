// Colors data for learning
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

// Make colorsData globally accessible for color quiz
window.colorsData = colorsData;

// Initialize colors grid after main.js is loaded
setTimeout(() => {
    if (typeof createGrid === 'function') {
        createGrid(colorsData, 'colors-container', { displayType: 'color', lang: 'en-US' });
    } else {
        console.error('createGrid function not found. Make sure main.js is loaded before colors-main.js');
    }
}, 100);

// Color Quiz - handled in main.js through the existing quiz system
// The quiz will use window.colorsData when game type is 'colors'
