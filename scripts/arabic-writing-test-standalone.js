// Arabic Writing Test functionality (Standalone Version)
let arabicCanvas, arabicCtx, arabicInstructionEl, arabicFeedbackEl;

// Arabic data
const arabicLetters = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'];
const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

let arabicCurrentMode = 'letters';
let arabicCurrentIndex = 0;
let arabicIsDrawing = false;
let arabicLastX = 0;
let arabicLastY = 0;
let arabicIsSpeaking = false;
let arabicShowGuide = true;

// Initialize after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    arabicCanvas = document.getElementById('arabic-writing-canvas');
    if (arabicCanvas) {
        arabicCanvas.willReadFrequently = true;
        arabicCtx = arabicCanvas.getContext('2d');
        arabicInstructionEl = document.getElementById('arabic-writing-instruction');
        arabicFeedbackEl = document.getElementById('arabic-writing-feedback');
        
        arabicSetupCanvas();
        arabicSetupButtonListeners();
        arabicSetupCanvasEventListeners();
        arabicUpdateInstruction();
    }
});

// Canvas setup
function arabicSetupCanvas() {
    if (!arabicCtx) return;
    if (!arabicShowGuide) {
        arabicCtx.fillStyle = 'white';
        arabicCtx.fillRect(0, 0, arabicCanvas.width, arabicCanvas.height);
    }
    arabicCtx.strokeStyle = 'black';
    arabicCtx.lineWidth = 8;
    arabicCtx.lineCap = 'round';
    arabicCtx.lineJoin = 'round';
    
    if (arabicShowGuide) {
        const items = arabicCurrentMode === 'letters' ? arabicLetters : arabicNumbers;
        const currentItem = items[arabicCurrentIndex];
        arabicDrawGuideCharacter(currentItem);
    }
}

// Clear canvas completely (including guide)
function arabicClearCanvas() {
    if (!arabicCtx) return;
    arabicCtx.fillStyle = 'white';
    arabicCtx.fillRect(0, 0, arabicCanvas.width, arabicCanvas.height);
    if (arabicShowGuide) {
        const items = arabicCurrentMode === 'letters' ? arabicLetters : arabicNumbers;
        const currentItem = items[arabicCurrentIndex];
        arabicDrawGuideCharacter(currentItem);
    }
}

// Pre-draw the character as a guide
function arabicDrawGuideCharacter(character) {
    if (!arabicCtx) return;

    arabicCtx.save();
    
    const fontSize = Math.min(arabicCanvas.width, arabicCanvas.height) * 0.5;
    arabicCtx.font = `bold ${fontSize}px Arial`;
    arabicCtx.fillStyle = '#E0E0E0';
    arabicCtx.textAlign = 'center';
    arabicCtx.textBaseline = 'middle';
    arabicCtx.fillText(character, arabicCanvas.width / 2, arabicCanvas.height / 2);
    arabicCtx.restore();
}

// Drawing functions
function arabicStartDrawing(e) {
    arabicIsDrawing = true;
    const pos = arabicGetPosition(e);
    arabicLastX = pos.x;
    arabicLastY = pos.y;

    stopArabicSpeaking();
}

function arabicDraw(e) {
    if (!arabicIsDrawing) return;
    const pos = arabicGetPosition(e);
    
    arabicCtx.beginPath();
    arabicCtx.moveTo(arabicLastX, arabicLastY);
    arabicCtx.lineTo(pos.x, pos.y);
    arabicCtx.stroke();
    
    arabicLastX = pos.x;
    arabicLastY = pos.y;
}

function arabicStopDrawing() {
    arabicIsDrawing = false;
}

function arabicGetPosition(e) {
    const rect = arabicCanvas.getBoundingClientRect();
    let clientX, clientY;
    
    if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }
    
    const scaleX = arabicCanvas.width / rect.width;
    const scaleY = arabicCanvas.height / rect.height;
    
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;
    
    return { x, y };
}

// Check if canvas has content
function arabicHasContent() {
    if (!arabicCtx) return false;
    const imageData = arabicCtx.getImageData(0, 0, arabicCanvas.width, arabicCanvas.height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] !== 255 || data[i + 1] !== 255 || data[i + 2] !== 255) {
            return true;
        }
    }
    return false;
}

// Speech functions - use English speech for instructions
function arabicSpeakWritingText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        utterance.pitch = 1.2;
        window.speechSynthesis.speak(utterance);
    }
}

function stopArabicSpeaking() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        arabicIsSpeaking = false;
    }
}

// Update instruction
function arabicUpdateInstruction() {
    const items = arabicCurrentMode === 'letters' ? arabicLetters : arabicNumbers;
    const currentItem = items[arabicCurrentIndex];
    const modeText = arabicCurrentMode === 'letters' ? 'letter' : 'number';
    if (arabicInstructionEl) arabicInstructionEl.innerText = `Write the ${modeText}: ${currentItem}`;

    arabicClearCanvas();

    if (arabicShowGuide && typeof arabicDrawGuideCharacter === 'function') {
        arabicDrawGuideCharacter(currentItem);
    }

    arabicSpeakWritingText(`Write the ${modeText} ${currentItem}`);
}

// Next character
function arabicNextItem() {
    const items = arabicCurrentMode === 'letters' ? arabicLetters : arabicNumbers;
    arabicCurrentIndex = (arabicCurrentIndex + 1) % items.length;
    if (arabicFeedbackEl) arabicFeedbackEl.innerText = '';
    arabicUpdateInstruction();
}

// Previous character
function arabicPrevItem() {
    const items = arabicCurrentMode === 'letters' ? arabicLetters : arabicNumbers;
    arabicCurrentIndex = (arabicCurrentIndex - 1 + items.length) % items.length;
    if (arabicFeedbackEl) arabicFeedbackEl.innerText = '';
    arabicUpdateInstruction();
}

// Button functionality
function arabicSetupButtonListeners() {
    const clearBtn = document.getElementById('arabic-clear-canvas-btn');
    const checkBtn = document.getElementById('arabic-check-writing-btn');
    const nextBtn = document.getElementById('arabic-next-writing-btn');
    const prevBtn = document.getElementById('arabic-prev-writing-btn');
    const toggleGuideBtn = document.getElementById('arabic-toggle-guide-btn');

    // Remove existing event listeners by cloning the button
    if (toggleGuideBtn) {
        const newToggleBtn = toggleGuideBtn.cloneNode(true);
        toggleGuideBtn.parentNode.replaceChild(newToggleBtn, toggleGuideBtn);
    }
    if (clearBtn) {
        const newClearBtn = clearBtn.cloneNode(true);
        clearBtn.parentNode.replaceChild(newClearBtn, clearBtn);
    }
    if (checkBtn) {
        const newCheckBtn = checkBtn.cloneNode(true);
        checkBtn.parentNode.replaceChild(newCheckBtn, checkBtn);
    }
    if (nextBtn) {
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    }
    if (prevBtn) {
        const newPrevBtn = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    }

    // Re-get button references after cloning
    const toggleGuideBtnNew = document.getElementById('arabic-toggle-guide-btn');
    const clearBtnNew = document.getElementById('arabic-clear-canvas-btn');
    const checkBtnNew = document.getElementById('arabic-check-writing-btn');
    const nextBtnNew = document.getElementById('arabic-next-writing-btn');
    const prevBtnNew = document.getElementById('arabic-prev-writing-btn');

    // Initialize toggle guide button state
    if (toggleGuideBtnNew) {
        toggleGuideBtnNew.innerText = arabicShowGuide ? '👁️ Guide On' : '👁️ Guide Off';
        toggleGuideBtnNew.style.backgroundColor = arabicShowGuide ? '#4CAF50' : '#9E9E9E';
    }

    if (clearBtnNew) {
        clearBtnNew.addEventListener('click', arabicClearCanvas);
    }
    if (checkBtnNew) {
        checkBtnNew.addEventListener('click', arabicCheckWriting);
    }
    if (nextBtnNew) {
        nextBtnNew.addEventListener('click', arabicNextItem);
    }
    if (prevBtnNew) {
        prevBtnNew.addEventListener('click', arabicPrevItem);
    }
    if (toggleGuideBtnNew) {
        toggleGuideBtnNew.addEventListener('click', arabicToggleGuide);
    }

    // Setup mode switching buttons
    const modeButtons = document.querySelectorAll('.arabic-writing-mode-btn');
    modeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const mode = this.dataset.mode;
            
            // Update active state
            modeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Switch mode
            arabicCurrentMode = mode;
            arabicCurrentIndex = 0;
            if (arabicFeedbackEl) arabicFeedbackEl.innerText = '';
            arabicUpdateInstruction();
        });
    });
}

function arabicToggleGuide() {
    arabicShowGuide = !arabicShowGuide;
    const toggleGuideBtn = document.getElementById('arabic-toggle-guide-btn');
    
    if (toggleGuideBtn) {
        toggleGuideBtn.innerText = arabicShowGuide ? '👁️ Guide On' : '👁️ Guide Off';
        toggleGuideBtn.style.backgroundColor = arabicShowGuide ? '#4CAF50' : '#9E9E9E';
    }
    
    arabicClearCanvas();
}

// Preprocess image for better OCR
function arabicPreprocessImage(imageData) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            
            tempCanvas.width = 100;
            tempCanvas.height = 100;
            tempCtx.drawImage(img, 0, 0, 100, 100);
            
            const imageDataObj = tempCtx.getImageData(0, 0, 100, 100);
            const data = imageDataObj.data;
            
            for (let i = 0; i < data.length; i += 4) {
                const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                const threshold = 128;
                const value = avg > threshold ? 255 : 0;
                data[i] = value;
                data[i + 1] = value;
                data[i + 2] = value;
            }
            
            tempCtx.putImageData(imageDataObj, 0, 0);
            
            resolve(tempCanvas.toDataURL('image/png'));
        };
        img.src = imageData;
    });
}

async function arabicCheckWriting() {
    if (!arabicHasContent()) {
        if (arabicFeedbackEl) arabicFeedbackEl.innerText = 'Please write something first!';
        arabicSpeakWritingText('Please write something first');
        return;
    }

    if (arabicFeedbackEl) arabicFeedbackEl.innerText = 'Checking...';

    try {
        const imageData = arabicCanvas.toDataURL('image/png');
        const processedImage = await arabicPreprocessImage(imageData);
        
        // Use Arabic and English for OCR
        const result = await Tesseract.recognize(processedImage, 'ara+eng');
        const recognizedText = result.data.text.trim();
        
        const items = arabicCurrentMode === 'letters' ? arabicLetters : arabicNumbers;
        const currentItem = items[arabicCurrentIndex];
        
        if (arabicFeedbackEl) {
            if (recognizedText.includes(currentItem)) {
                arabicFeedbackEl.innerText = `✅ Correct! You wrote ${currentItem}`;
                arabicFeedbackEl.style.color = '#4CAF50';
                arabicSpeakWritingText(`Correct! You wrote ${currentItem}`);
            } else {
                arabicFeedbackEl.innerText = `❌ Try again! You wrote ${recognizedText || 'nothing'}`;
                arabicFeedbackEl.style.color = '#F44336';
                arabicSpeakWritingText(`Try again! You wrote ${recognizedText || 'nothing'}`);
            }
        }
    } catch (error) {
        console.error('OCR Error:', error);
        if (arabicFeedbackEl) {
            arabicFeedbackEl.innerText = 'Error checking writing. Please try again.';
            arabicFeedbackEl.style.color = '#F44336';
        }
    }
}

function arabicSetupCanvasEventListeners() {
    if (!arabicCanvas) {
        return;
    }

    const newCanvas = arabicCanvas.cloneNode(true);
    arabicCanvas.parentNode.replaceChild(newCanvas, arabicCanvas);
    arabicCanvas = newCanvas;
    arabicCanvas.willReadFrequently = true;
    arabicCtx = arabicCanvas.getContext('2d');

    arabicCtx.strokeStyle = 'black';
    arabicCtx.lineWidth = 8;
    arabicCtx.lineCap = 'round';
    arabicCtx.lineJoin = 'round';

    arabicCanvas.addEventListener('mousedown', arabicStartDrawing);
    arabicCanvas.addEventListener('mousemove', arabicDraw);
    arabicCanvas.addEventListener('mouseup', arabicStopDrawing);
    arabicCanvas.addEventListener('mouseout', arabicStopDrawing);

    arabicCanvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        arabicStartDrawing(e);
    });
    arabicCanvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        arabicDraw(e);
    });
    arabicCanvas.addEventListener('touchend', arabicStopDrawing);
}