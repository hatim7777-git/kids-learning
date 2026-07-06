const arabicAlphabetData = [
    // NOTE: You will need to create and add the corresponding images (e.g., ar_A.png) to your images folder.
    {id: 'أ', word: 'أرنب', image: 'images/ar_A.png', color: '#FF3D00'}, // Rabbit
    {id: 'ب', word: 'بطة', image: 'images/ar_B.png', color: '#0476D0'}, // Duck
    {id: 'ت', word: 'تفاح', image: 'images/ar_T.png', color: '#4CAF50'}, // Apple
    {id: 'ث', word: 'ثعلب', image: 'images/ar_TH.png', color: '#FFB300'}, // Fox
    {id: 'ج', word: 'جمل', image: 'images/ar_J.png', color: '#795548'}, // Camel
    {id: 'ح', word: 'حصان', image: 'images/ar_H.png', color: '#A1887F'}, // Horse
    {id: 'خ', word: 'خروف', image: 'images/ar_KH.png', color: '#757575'}, // Sheep
    {id: 'د', word: 'ديك', image: 'images/ar_D.png', color: '#F44336'}, // Rooster
    {id: 'ذ', word: 'ذرة', image: 'images/ar_DH.png', color: '#FFEB3B'}, // Corn
    {id: 'ر', word: 'رمان', image: 'images/ar_R.png', color: '#E91E63'}, // Pomegranate
    {id: 'ز', word: 'زرافة', image: 'images/ar_Z.png', color: '#FF9800'}, // Giraffe
    {id: 'س', word: 'سمكة', image: 'images/ar_S.png', color: '#00BCD4'}, // Fish
    {id: 'ش', word: 'شمس', image: 'images/ar_SH.png', color: '#FFC107'}, // Sun
    {id: 'ص', word: 'صاروخ', image: 'images/ar_SA.png', color: '#607D8B'}, // Rocket
    {id: 'ض', word: 'ضفدع', image: 'images/ar_DA.png', color: '#8BC34A'}, // Frog
    {id: 'ط', word: 'طائرة', image: 'images/ar_TA.png', color: '#03A9F4'}, // Airplane
    {id: 'ظ', word: 'ظرف', image: 'images/ar_ZA.png', color: '#42A5F5'}, // Envelope
    {id: 'ع', word: 'عنب', image: 'images/ar_AIN.png', color: '#673AB7'}, // Grapes
    {id: 'غ', word: 'غزال', image: 'images/ar_GH.png', color: '#9E9E9E'}, // Deer
    {id: 'ف', word: 'فيل', image: 'images/ar_F.png', color: '#9C27B0'}, // Elephant
    {id: 'ق', word: 'قمر', image: 'images/ar_Q.png', color: '#FFCA28'}, // Moon
    {id: 'ك', word: 'كلب', image: 'images/ar_K.png', color: '#A1887F'}, // Dog
    {id: 'ل', word: 'ليمون', image: 'images/ar_L.png', color: '#CDDC39'}, // Lemon
    {id: 'م', word: 'موز', image: 'images/ar_M.png', color: '#FFEB3B'}, // Banana
    {id: 'ن', word: 'نجمة', image: 'images/ar_N.png', color: '#FFD700'}, // Star
    {id: 'هـ', word: 'هلال', image: 'images/ar_HA.png', color: '#78909C'}, // Crescent
    {id: 'و', word: 'وردة', image: 'images/ar_W.png', color: '#E91E63'}, // Rose
    {id: 'ي', word: 'يد', image: 'images/ar_Y.png', color: '#FFCCBC'}  // Hand
];

const arabicNumberData = [
    // NOTE: You will need to create and add the corresponding images to your images folder.
    {id: '٠', word: 'صفر', fingerImg: 'images/F0.png', examples: [{text: 'لا شيء', image: 'images/EX0.png'}], color: '#607D8B'},
    {id: '١', word: 'واحد', fingerImg: 'images/F1.png', examples: [{text: 'شمس واحدة', image: 'images/EX1.png'}], color: '#FF5722'},
    {id: '٢', word: 'اثنان', fingerImg: 'images/F2.png', examples: [{text: 'عينان', image: 'images/EX2.png'}], color: '#2196F3'},
    {id: '٣', word: 'ثلاثة', fingerImg: 'images/F3.png', examples: [{text: 'ثلاثة أضواء', image: 'images/EX3.png'}], color: '#4CAF50'},
    {id: '٤', word: 'أربعة', fingerImg: 'images/F4.png', examples: [{text: 'أربع عجلات', image: 'images/EX4.png'}], color: '#FF9800'},
    {id: '٥', word: 'خمسة', fingerImg: 'images/F5.png', examples: [{text: 'خمسة أصابع', image: 'images/EX5.png'}], color: '#9C27B0'},
    {id: '٦', word: 'ستة', fingerImg: 'images/F6.png', examples: [{text: 'ستة أرجل', image: 'images/EX6.png'}], color: '#E91E63'},
    {id: '٧', word: 'سبعة', fingerImg: 'images/F7.png', examples: [{text: 'سبعة ألوان', image: 'images/EX7.png'}], color: '#FFEB3B'},
    {id: '٨', word: 'ثمانية', fingerImg: 'images/F8.png', examples: [{text: 'ثمانية أذرع', image: 'images/EX8.png'}], color: '#00BCD4'},
    {id: '٩', word: 'تسعة', fingerImg: 'images/F9.png', examples: [{text: 'تسعة مربعات', image: 'images/EX9.png'}], color: '#8BC34A'},
    {id: '١٠', word: 'عشرة', fingerImg: 'images/F10.png', examples: [{text: 'عشرة أصابع', image: 'images/EX10.png'}], color: '#795548'}
];

// Initialize Arabic grids
createGrid(arabicAlphabetData, 'arabic-abc-container', { isNumbers: false, lang: 'ar-SA' });
createGrid(arabicNumberData, 'arabic-num-container', { isNumbers: true, lang: 'ar-SA' });