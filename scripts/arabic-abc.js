const arabicAlphabetData = [
    {id: 'أ', word: 'أسد', emoji: '🦁', englishWord: 'Lion', color: '#FFC107'},
    {id: 'أ', word: 'أرنب', emoji: '🐰', englishWord: 'Rabbit', color: '#FF3D00'},
    {id: 'ب', word: 'بطة', emoji: '🦆', englishWord: 'Duck', color: '#0476D0'},
    {id: 'ب', word: 'بقرة', emoji: '🐄', englishWord: 'Cow', color: '#A1887F'},
    {id: 'ب', word: 'بادام', emoji: '🌰', englishWord: 'Almonds', color: '#A1887F'},
    {id: 'ت', word: 'تفاح', emoji: '🍎', englishWord: 'Apple', color: '#F44336'},
    {id: 'ت', word: 'تاج', emoji: '👑', englishWord: 'Crown', color: '#FFD700'},
    {id: 'ث', word: 'ثعلب', emoji: '🦊', englishWord: 'Fox', color: '#FF9800'},
    {id: 'ث', word: 'ثور', emoji: '🐂', englishWord: 'Ox', color: '#795548'},
    {id: 'ج', word: 'جمل', emoji: '🐪', englishWord: 'Camel', color: '#795548'},
    {id: 'ج', word: 'جزر', emoji: '🥕', englishWord: 'Carrot', color: '#FF5722'},
    {id: 'ح', word: 'حاتم', emoji: '🧔‍♂️', englishWord: 'Hatim', color: '#A1887F'},
    {id: 'ح', word: 'حصان', emoji: '🐴', englishWord: 'Horse', color: '#A1887F'},
    {id: 'ح', word: 'حوت', emoji: '🐳', englishWord: 'Whale', color: '#03A9F4'},
    {id: 'خ', word: 'خروف', emoji: '🐑', englishWord: 'Sheep', color: '#A1887F'},
    {id: 'خ', word: 'خوخ', emoji: '🍑', englishWord: 'Peach', color: '#FF8A65'},
    {id: 'د', word: 'ديك', emoji: '🐓', englishWord: 'Rooster', color: '#F44336'},
    {id: 'د', word: 'دب', emoji: '🐻', englishWord: 'Bear', color: '#8D6E63'},
    {id: 'ذ', word: 'ذرة', emoji: '🌽', englishWord: 'Corn', color: '#FFEB3B'},
    {id: 'ذ', word: 'ذئب', emoji: '🐺', englishWord: 'Wolf', color: '#9E9E9E'},
    {id: 'ر', word: 'رمان', emoji: '🔴', englishWord: 'Pomegranate', color: '#E91E63'},
    {id: 'ر', word: 'رجل', emoji: '👨', englishWord: 'Man', color: '#29B6F6'},
    {id: 'ز', word: 'زرافة', emoji: '🦒', englishWord: 'Giraffe', color: '#FF9800'},
    {id: 'ز', word: 'زيتون', emoji: '🫒', englishWord: 'Olive', color: '#8BC34A'},
    {id: 'س', word: 'سكينة', emoji: '🧕', englishWord: 'Sakina', color: '#E91E63'},
    {id: 'س', word: 'سمكة', emoji: '🐠', englishWord: 'Fish', color: '#00BCD4'},
    {id: 'س', word: 'سلحفاة', emoji: '🐢', englishWord: 'Turtle', color: '#4CAF50'},
    {id: 'ش', word: 'شمس', emoji: '☀️', englishWord: 'Sun', color: '#FFC107'},
    {id: 'ش', word: 'شجرة', emoji: '🌳', englishWord: 'Tree', color: '#4CAF50'},
    {id: 'ص', word: 'صاروخ', emoji: '🚀', englishWord: 'Rocket', color: '#607D8B'},
    {id: 'ص', word: 'صقر', emoji: '🦅', englishWord: 'Falcon', color: '#9E9E9E'},
    {id: 'ض', word: 'ضفدع', emoji: '🐸', englishWord: 'Frog', color: '#8BC34A'},
    {id: 'ض', word: 'ضريح', emoji: '🕌', englishWord: 'Zari', color: '#4CAF50'},
    {id: 'ض', word: 'ضوء', emoji: '💡', englishWord: 'Light', color: '#FFEB3B'},
    {id: 'ط', word: 'طائرة', emoji: '✈️', englishWord: 'Airplane', color: '#03A9F4'},
    {id: 'ط', word: 'طاووس', emoji: '🦚', englishWord: 'Peacock', color: '#009688'},
    {id: 'ظ', word: 'ظرف', emoji: '✉️', englishWord: 'Envelope', color: '#42A5F5'},
    {id: 'ظ', word: 'ظبي', emoji: '🦌', englishWord: 'Deer', color: '#A1887F'},
    {id: 'ع', word: 'عنب', emoji: '🍇', englishWord: 'Grapes', color: '#673AB7'},
    {id: 'ع', word: 'عصفور', emoji: '🐦', englishWord: 'Bird', color: '#00BCD4'},
    {id: 'غ', word: 'غزال', emoji: '🦌', englishWord: 'Deer', color: '#9E9E9E'},
    {id: 'غ', word: 'غيمة', emoji: '☁️', englishWord: 'Cloud', color: '#78909C'},
    {id: 'ف', word: 'فيل', emoji: '🐘', englishWord: 'Elephant', color: '#9C27B0'},
    {id: 'ف', word: 'فراشة', emoji: '🦋', englishWord: 'Butterfly', color: '#3F51B5'},
    {id: 'ق', word: 'قمر', emoji: '🌙', englishWord: 'Moon', color: '#FFCA28'},
    {id: 'ق', word: 'قرآن', emoji: '📖', englishWord: 'Quran', color: '#2E7D32'},
    {id: 'ق', word: 'قطار', emoji: '🚂', englishWord: 'Train', color: '#607D8B'},
    {id: 'ك', word: 'كلب', emoji: '🐶', englishWord: 'Dog', color: '#A1887F'},
    {id: 'ك', word: 'كرة', emoji: '⚽', englishWord: 'Ball', color: '#000000'},
    {id: 'ل', word: 'ليمون', emoji: '🍋', englishWord: 'Lemon', color: '#CDDC39'},
    {id: 'ل', word: 'لحم', emoji: '🥩', englishWord: 'Meat', color: '#F44336'},
    {id: 'م', word: 'مرتضى', emoji: '👦', englishWord: 'Murtaza', color: '#03A9F4'},
    {id: 'م', word: 'موز', emoji: '🍌', englishWord: 'Banana', color: '#FFEB3B'},
    {id: 'م', word: 'مفتاح', emoji: '🔑', englishWord: 'Key', color: '#FFC107'},
    {id: 'ن', word: 'نجمة', emoji: '⭐', englishWord: 'Star', color: '#FFD700'},
    {id: 'ن', word: 'نحلة', emoji: '🐝', englishWord: 'Bee', color: '#FFEB3B'},
    {id: 'هـ', word: 'هلال', emoji: '🌙', englishWord: 'Crescent', color: '#78909C'},
    {id: 'هـ', word: 'هدية', emoji: '🎁', englishWord: 'Gift', color: '#E91E63'},
    {id: 'و', word: 'وردة', emoji: '🌹', englishWord: 'Rose', color: '#E91E63'},
    {id: 'و', word: 'ولد', emoji: '👦', englishWord: 'Boy', color: '#66BB6A'},
    {id: 'و', word: 'واڈل', emoji: '☁️', englishWord: 'Clouds', color: '#78909C'},
    {id: 'ي', word: 'يد', emoji: '🖐️', englishWord: 'Hand', color: '#FFCA28'},
    {id: 'ي', word: 'يا الله', emoji: 'يا الله', englishWord: 'Ya Allah', color: '#4CAF50'},
    {id: 'ي', word: 'يا محمد', emoji: 'يا محمد', englishWord: 'Ya Muhammad', color: '#2196F3'},
    {id: 'ي', word: 'يا علي', emoji: 'يا علي', englishWord: 'Ya Ali', color: '#FF9800'},
    {id: 'ي', word: 'يا فاطمة', emoji: 'يا فاطمة', englishWord: 'Ya Fatema', color: '#E91E63'},
    {id: 'ي', word: 'يا حسن', emoji: 'يا حسن', englishWord: 'Ya Hasan', color: '#8BC34A'},
    {id: 'ي', word: 'يا حسين', emoji: 'يا حسين', englishWord: 'Ya Hussain', color: '#F44336'}
];

// Initialize unique Arabic alphabet data
const uniqueArabicAlphabetData = [];
const seenArabicLetters = new Set();
for (const item of arabicAlphabetData) {
    if (!seenArabicLetters.has(item.id)) {
        uniqueArabicAlphabetData.push(item);
        seenArabicLetters.add(item.id);
    }
}

// DOM elements
const detailsDisplay = document.getElementById('details-display');
const primaryImage = document.getElementById('primary-image');
const exampleImage = document.getElementById('example-image');
const exampleText = document.getElementById('example-text');
const numberWordText = document.getElementById('number-word-text');

function createGrid(data, containerId, options = {}) {
    const { isNumbers = false, lang = 'ar-SA', displayType = 'text' } = options;
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card arabic-card';
        card.style.borderTop = `8px solid ${item.color}`;
        card.dataset.exampleIndex = 0; 
        
        const charEl = document.createElement('p');
        charEl.className = 'char';
        charEl.style.color = item.color;
        charEl.lang = lang;
        charEl.innerText = item.id;
        card.appendChild(charEl);

        card.addEventListener('click', function() {
            let textToSpeak = '';
            
            detailsDisplay.classList.remove('hidden');
            const relatedItems = arabicAlphabetData.filter(d => d.id === item.id);
            const itemIndex = parseInt(card.dataset.exampleIndex);
            const currentItem = relatedItems[itemIndex];

            // Show emoji if available
            if (currentItem.emoji) {
                exampleText.classList.remove('hidden');
                exampleText.classList.add('large-emoji');
                exampleText.innerText = currentItem.emoji;
            } else {
                exampleText.classList.add('hidden');
            }

            // Arabic doesn't have images, so always hide primary image
            primaryImage.classList.add('hidden');

            numberWordText.innerHTML = `${currentItem.word}<br><span class="english-translation">${currentItem.englishWord}</span>`;
            textToSpeak = currentItem.word;

            card.dataset.exampleIndex = (itemIndex + 1) % relatedItems.length;

            speakText(textToSpeak, lang);
        });

        container.appendChild(card);
    });
}

// Use speakText from common.js

function stopSpeech() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    createGrid(uniqueArabicAlphabetData, 'arabic-abc-container', { isNumbers: false, lang: 'ar-SA' });
    
    // Set RTL direction for Arabic
    document.getElementById('arabic-abc-container').style.direction = 'rtl';
});