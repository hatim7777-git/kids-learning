const arabicNumberData = [
    {id: '٠', word: 'صفر', fingerImg: 'images/F0.png', examples: [{text: '🚫 لا يوجد حلوى', image: 'images/ex0.png'}], color: '#607D8B'},
    {id: '١', word: 'واحد', fingerImg: 'images/F1.png', examples: [{text: '☀️ شمس واحدة', image: 'images/ex1.png'}], color: '#FF5722'},
    {id: '٢', word: 'اثنان', fingerImg: 'images/F2.png', examples: [{text: '👀 عينان', image: 'images/ex2.png'}], color: '#2196F3'},
    {id: '٣', word: 'ثلاثة', fingerImg: 'images/F3.png', examples: [{text: '🚦 ثلاثة أضواء', image: 'images/ex3.png'}], color: '#4CAF50'},
    {id: '٤', word: 'أربعة', fingerImg: 'images/F4.png', examples: [{text: '🚗 أربع عجلات', image: 'images/ex4.png'}], color: '#FF9800'},
    {id: '٥', word: 'خمسة', fingerImg: 'images/F5.png', examples: [{text: '🖐️ خمسة أصابع', image: 'images/ex5.png'}], color: '#9C27B0'},
    {id: '٦', word: 'ستة', fingerImg: 'images/F6.png', examples: [{text: '🐞 ستة أرجل', image: 'images/ex6.png'}], color: '#E91E63'},
    {id: '٧', word: 'سبعة', fingerImg: 'images/F7.png', examples: [{text: '🌈 سبعة ألوان', image: 'images/ex7.png'}], color: '#FFEB3B'},
    {id: '٨', word: 'ثمانية', fingerImg: 'images/F8.png', examples: [{text: '🐙 ثمانية أذرع', image: 'images/ex8.png'}], color: '#00BCD4'},
    {id: '٩', word: 'تسعة', fingerImg: 'images/F9.png', examples: [{text: '🧩 تسعة مربعات', image: 'images/ex9.png'}], color: '#8BC34A'},
    {id: '١٠', word: 'عشرة', fingerImg: 'images/F10.png', examples: [{text: '👐 عشرة أصابع', image: 'images/ex10.png'}], color: '#795548'}
];

// DOM elements
const detailsDisplay = document.getElementById('details-display');
const primaryImage = document.getElementById('primary-image');
const exampleImage = document.getElementById('example-image');
const exampleText = document.getElementById('example-text');
const numberWordText = document.getElementById('number-word-text');

function createGrid(data, containerId, options = {}) {
    const { isNumbers = true, lang = 'ar-SA', displayType = 'text' } = options;
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card arabic-card';
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

function speakText(text, lang = 'ar-SA', onEndCallback = null) {
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    createGrid(arabicNumberData, 'arabic-num-container', { isNumbers: true, lang: 'ar-SA' });
    
    // Set RTL direction for Arabic
    document.getElementById('arabic-num-container').style.direction = 'rtl';
});