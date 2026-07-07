const arabicAlphabetData = [
    // Using emojis instead of images. Added English words.
    {id: 'أ', word: 'أسد', emoji: '🦁', englishWord: 'Lion', color: '#FFC107'},
    {id: 'أ', word: 'أرنب', emoji: '🐰', englishWord: 'Rabbit', color: '#FF3D00'},
    {id: 'ب', word: 'بطة', emoji: '🦆', englishWord: 'Duck', color: '#0476D0'},
    {id: 'ب', word: 'بقرة', emoji: '🐄', englishWord: 'Cow', color: '#A1887F'},
    {id: 'ت', word: 'تفاح', emoji: '🍎', englishWord: 'Apple', color: '#F44336'},
    {id: 'ت', word: 'تاج', emoji: '👑', englishWord: 'Crown', color: '#FFD700'},
    {id: 'ث', word: 'ثعلب', emoji: '🦊', englishWord: 'Fox', color: '#FF9800'},
    {id: 'ث', word: 'ثور', emoji: '🐂', englishWord: 'Ox', color: '#795548'},
    {id: 'ج', word: 'جمل', emoji: '🐪', englishWord: 'Camel', color: '#795548'},
    {id: 'ج', word: 'جزر', emoji: '🥕', englishWord: 'Carrot', color: '#FF5722'},
    {id: 'ح', word: 'حصان', emoji: '🐴', englishWord: 'Horse', color: '#A1887F'},
    {id: 'ح', word: 'حوت', emoji: '🐳', englishWord: 'Whale', color: '#03A9F4'},
    {id: 'خ', word: 'خروف', emoji: '🐑', englishWord: 'Sheep', color: '#E0E0E0'},
    {id: 'خ', word: 'خوخ', emoji: '🍑', englishWord: 'Peach', color: '#FFCCBC'},
    {id: 'د', word: 'ديك', emoji: '🐓', englishWord: 'Rooster', color: '#F44336'},
    {id: 'د', word: 'دب', emoji: '🐻', englishWord: 'Bear', color: '#8D6E63'},
    {id: 'ذ', word: 'ذرة', emoji: '🌽', englishWord: 'Corn', color: '#FFEB3B'},
    {id: 'ذ', word: 'ذئب', emoji: '🐺', englishWord: 'Wolf', color: '#9E9E9E'},
    {id: 'ر', word: 'رمان', emoji: '🔴', englishWord: 'Pomegranate', color: '#E91E63'},
    {id: 'ر', word: 'رجل', emoji: '👨', englishWord: 'Man', color: '#FFCCBC'},
    {id: 'ز', word: 'زرافة', emoji: '🦒', englishWord: 'Giraffe', color: '#FF9800'},
    {id: 'ز', word: 'زيتون', emoji: '🫒', englishWord: 'Olive', color: '#8BC34A'},
    {id: 'س', word: 'سمكة', emoji: '🐠', englishWord: 'Fish', color: '#00BCD4'},
    {id: 'س', word: 'سلحفاة', emoji: '🐢', englishWord: 'Turtle', color: '#4CAF50'},
    {id: 'ش', word: 'شمس', emoji: '☀️', englishWord: 'Sun', color: '#FFC107'},
    {id: 'ش', word: 'شجرة', emoji: '🌳', englishWord: 'Tree', color: '#4CAF50'},
    {id: 'ص', word: 'صاروخ', emoji: '🚀', englishWord: 'Rocket', color: '#607D8B'},
    {id: 'ص', word: 'صقر', emoji: '🦅', englishWord: 'Falcon', color: '#9E9E9E'},
    {id: 'ض', word: 'ضفدع', emoji: '🐸', englishWord: 'Frog', color: '#8BC34A'},
    {id: 'ض', word: 'ضوء', emoji: '💡', englishWord: 'Light', color: '#FFEB3B'},
    {id: 'ط', word: 'طائرة', emoji: '✈️', englishWord: 'Airplane', color: '#03A9F4'},
    {id: 'ط', word: 'طاووس', emoji: '🦚', englishWord: 'Peacock', color: '#009688'},
    {id: 'ظ', word: 'ظرف', emoji: '✉️', englishWord: 'Envelope', color: '#42A5F5'},
    {id: 'ظ', word: 'ظبي', emoji: '🦌', englishWord: 'Deer', color: '#A1887F'},
    {id: 'ع', word: 'عنب', emoji: '🍇', englishWord: 'Grapes', color: '#673AB7'},
    {id: 'ع', word: 'عصفور', emoji: '🐦', englishWord: 'Bird', color: '#00BCD4'},
    {id: 'غ', word: 'غزال', emoji: '🦌', englishWord: 'Deer', color: '#9E9E9E'},
    {id: 'غ', word: 'غيمة', emoji: '☁️', englishWord: 'Cloud', color: '#B0BEC5'},
    {id: 'ف', word: 'فيل', emoji: '🐘', englishWord: 'Elephant', color: '#9C27B0'},
    {id: 'ف', word: 'فراشة', emoji: '🦋', englishWord: 'Butterfly', color: '#3F51B5'},
    {id: 'ق', word: 'قمر', emoji: '🌙', englishWord: 'Moon', color: '#FFCA28'},
    {id: 'ق', word: 'قطار', emoji: '🚂', englishWord: 'Train', color: '#607D8B'},
    {id: 'ك', word: 'كلب', emoji: '🐶', englishWord: 'Dog', color: '#A1887F'},
    {id: 'ك', word: 'كرة', emoji: '⚽', englishWord: 'Ball', color: '#000000'},
    {id: 'ل', word: 'ليمون', emoji: '🍋', englishWord: 'Lemon', color: '#CDDC39'},
    {id: 'ل', word: 'لحم', emoji: '🥩', englishWord: 'Meat', color: '#F44336'},
    {id: 'م', word: 'موز', emoji: '🍌', englishWord: 'Banana', color: '#FFEB3B'},
    {id: 'م', 'word': 'مفتاح', 'emoji': '🔑', 'englishWord': 'Key', 'color': '#FFC107'},
    {id: 'ن', word: 'نجمة', emoji: '⭐', englishWord: 'Star', color: '#FFD700'},
    {id: 'ن', word: 'نحلة', emoji: '🐝', englishWord: 'Bee', color: '#FFEB3B'},
    {id: 'هـ', word: 'هلال', emoji: '🌙', englishWord: 'Crescent', color: '#78909C'},
    {id: 'هـ', word: 'هدية', emoji: '🎁', englishWord: 'Gift', color: '#E91E63'},
    {id: 'و', word: 'وردة', emoji: '🌹', englishWord: 'Rose', color: '#E91E63'},
    {id: 'و', word: 'ولد', emoji: '👦', englishWord: 'Boy', color: '#FFCCBC'},
    {id: 'ي', word: 'يد', emoji: '🖐️', englishWord: 'Hand', color: '#FFCCBC'},
    {id: 'ي', word: 'يقطين', emoji: '🎃', englishWord: 'Pumpkin', color: '#FF9800'}
];

const arabicNumberData = [
    // Using English examples for now, but with Arabic words and numbers.
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

// Initialize Arabic grids
const uniqueArabicAlphabetData = [];
const seenArabicLetters = new Set();
for (const item of arabicAlphabetData) {
    if (!seenArabicLetters.has(item.id)) {
        uniqueArabicAlphabetData.push(item);
        seenArabicLetters.add(item.id);
    }
}
createGrid(uniqueArabicAlphabetData, 'arabic-abc-container', { isNumbers: false, lang: 'ar-SA' });
createGrid(arabicNumberData, 'arabic-num-container', { isNumbers: true, lang: 'ar-SA' });