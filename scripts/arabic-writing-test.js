// Arabic Writing Test functionality
let arabicCanvas, arabicCtx, arabicInstructionEl, arabicFeedbackEl;

// Arabic data
const arabicLetters = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'];
const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

let arabicCurrentMode = 'letters'; // 'letters' or 'numbers'
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
    }
});

// Initialize function called when switching to Arabic writing test mode
window.initializeArabicWritingTest = function() {
    stopArabicSpeaking();

    arabicCanvas = document.getElementById('arabic-writing-canvas');
    if (arabicCanvas) {
        arabicCtx = arabicCanvas.getContext('2d');
        arabicSetupCanvas();
        arabicSetupButtonListeners();
        arabicSetupCanvasEventListeners();
        arabicUpdateInstruction();
    } else {
        console.error('Arabic canvas element not found');
    }
};

// Canvas setup
window.arabicSetupCanvas = function() {
    if (!arabicCtx) return;
    if (!arabicShowGuide) {
        arabicCtx.fillStyle = 'white';
        arabicCtx.fillRect(0, 0, arabicCanvas.width, arabicCanvas.height);
    }
    arabicCtx.strokeStyle = 'black';
    arabicCtx.lineWidth = 8; // Always 8 for Arabic (both letters and numbers)
    arabicCtx.lineCap = 'round';
    arabicCtx.lineJoin = 'round';
    
    if (arabicShowGuide) {
        const items = arabicCurrentMode === 'letters' ? arabicLetters : arabicNumbers;
        const currentItem = items[arabicCurrentIndex];
        arabicDrawGuideCharacter(currentItem);
    }
};

// Clear canvas completely (including guide)
window.arabicClearCanvas = function() {
    if (!arabicCtx) return;
    arabicCtx.fillStyle = 'white';
    arabicCtx.fillRect(0, 0, arabicCanvas.width, arabicCanvas.height);
    if (arabicShowGuide) {
        const items = arabicCurrentMode === 'letters' ? arabicLetters : arabicNumbers;
        const currentItem = items[arabicCurrentIndex];
        arabicDrawGuideCharacter(currentItem);
    }
};

// Pre-draw the character as a guide
window.arabicDrawGuideCharacter = function(character) {
    if (!arabicCtx) return;

    arabicCtx.save();
    
    // Calculate font size based on canvas size for proper scaling
    const fontSize = Math.min(arabicCanvas.width, arabicCanvas.height) * 0.5;
    arabicCtx.font = `bold ${fontSize}px Arial`;
    arabicCtx.fillStyle = '#E0E0E0';
    arabicCtx.textAlign = 'center';
    arabicCtx.textBaseline = 'middle';
    arabicCtx.fillText(character, arabicCanvas.width / 2, arabicCanvas.height / 2);
    arabicCtx.restore();
};

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
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    
    // Scale coordinates to match internal canvas dimensions
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
    if (typeof speakText === 'function') {
        speakText(text, 'en-US');
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

    window.arabicClearCanvas();

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
window.arabicSetupButtonListeners = function() {
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
        clearBtnNew.addEventListener('click', () => {
            stopArabicSpeaking();
            window.arabicClearCanvas();
            if (arabicFeedbackEl) arabicFeedbackEl.innerText = '';
        });
    }

    if (toggleGuideBtnNew) {
        toggleGuideBtnNew.addEventListener('click', () => {
            stopArabicSpeaking();
            arabicShowGuide = !arabicShowGuide;
            toggleGuideBtnNew.innerText = arabicShowGuide ? '👁️ Guide On' : '👁️ Guide Off';
            toggleGuideBtnNew.style.backgroundColor = arabicShowGuide ? '#4CAF50' : '#9E9E9E';
            window.arabicClearCanvas();
            if (arabicFeedbackEl) arabicFeedbackEl.innerText = '';
        });
    }

    if (nextBtnNew) {
        nextBtnNew.addEventListener('click', () => {
            stopArabicSpeaking();
            arabicNextItem();
        });
    }

    if (prevBtnNew) {
        prevBtnNew.addEventListener('click', () => {
            stopArabicSpeaking();
            arabicPrevItem();
        });
    }

    if (checkBtnNew) {
        checkBtnNew.addEventListener('click', async () => {
            stopArabicSpeaking();
            const hasDrawing = arabicHasContent();
            if (!hasDrawing) {
                if (arabicFeedbackEl) {
                    arabicFeedbackEl.innerHTML = '❌ Please draw something first!';
                    arabicFeedbackEl.style.color = '#F44336';
                }
                return;
            }

            if (arabicFeedbackEl) {
                arabicFeedbackEl.innerHTML = '🔍 Checking your writing...';
                arabicFeedbackEl.style.color = '#FF9800';
            }

            try {
                const imageData = arabicCanvas.toDataURL('image/png');
                const preprocessedImage = await window.preprocessImage(imageData);

                const result = await Tesseract.recognize(preprocessedImage, 'ara', {
                    logger: m => {}
                });

                const recognizedText = result.data.text.trim();
                const items = arabicCurrentMode === 'letters' ? arabicLetters : arabicNumbers;
                const expectedChar = items[arabicCurrentIndex];

                if (recognizedText === expectedChar) {
                    if (arabicFeedbackEl) {
                        arabicFeedbackEl.innerHTML = '✅ Excellent! That\'s a perfect ' + expectedChar + '!';
                        arabicFeedbackEl.style.color = '#4CAF50';
                    }
                    arabicSpeakWritingText('Great job! That is a perfect ' + expectedChar);
                } else if (recognizedText.includes(expectedChar) || expectedChar.includes(recognizedText)) {
                    if (arabicFeedbackEl) {
                        arabicFeedbackEl.innerHTML = '👍 Good try! Almost there - that looks like a ' + expectedChar;
                        arabicFeedbackEl.style.color = '#FF9800';
                    }
                    arabicSpeakWritingText('Good try! That looks like a ' + expectedChar);
                    window.arabicClearCanvas();
                } else {
                    if (arabicFeedbackEl) {
                        arabicFeedbackEl.innerHTML = '🤔 Try again! Please write the ' + expectedChar + ' again';
                        arabicFeedbackEl.style.color = '#2196F3';
                    }
                    arabicSpeakWritingText('Keep practicing! Try writing the ' + expectedChar + ' again');
                    window.arabicClearCanvas();
                }
            } catch (error) {
                console.error('OCR Error:', error);
                if (arabicFeedbackEl) {
                    arabicFeedbackEl.innerHTML = '✅ Great effort! Keep practicing!';
                    arabicFeedbackEl.style.color = '#4CAF50';
                }
                arabicSpeakWritingText('Great effort! Keep practicing');
            }
        });
    }

    // Mode switching
    document.querySelectorAll('.arabic-writing-mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            stopArabicSpeaking();
            document.querySelectorAll('.arabic-writing-mode-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            arabicCurrentMode = e.target.dataset.mode;
            arabicCurrentIndex = 0;
            window.arabicSetupCanvas();
            arabicUpdateInstruction();
            if (arabicFeedbackEl) arabicFeedbackEl.innerText = '';
        });
    });
};

// Canvas event listeners
window.arabicSetupCanvasEventListeners = function() {
    if (!arabicCanvas) return;

    // Clone canvas to remove existing listeners
    const newCanvas = arabicCanvas.cloneNode(true);
    arabicCanvas.parentNode.replaceChild(newCanvas, arabicCanvas);
    arabicCanvas = newCanvas;
    arabicCanvas.willReadFrequently = true; // Set after cloning
    arabicCtx = arabicCanvas.getContext('2d');

    // Set drawing properties immediately after getting context
    arabicCtx.strokeStyle = 'black';
    arabicCtx.lineWidth = 8; // Always 8 for Arabic
    arabicCtx.lineCap = 'round';
    arabicCtx.lineJoin = 'round';

    arabicCanvas.addEventListener('mousedown', arabicStartDrawing);
    arabicCanvas.addEventListener('mousemove', arabicDraw);
    arabicCanvas.addEventListener('mouseup', arabicStopDrawing);
    arabicCanvas.addEventListener('mouseout', arabicStopDrawing);

    // Touch events for mobile
    arabicCanvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        arabicStartDrawing(e);
    });
    arabicCanvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        arabicDraw(e);
    });
    arabicCanvas.addEventListener('touchend', arabicStopDrawing);
};
