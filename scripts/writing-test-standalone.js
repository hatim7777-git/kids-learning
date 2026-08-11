// Writing Test - Canvas Drawing with OCR Recognition (Standalone Version)

// Canvas and context
let canvas, ctx;
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Current mode and character
let currentMode = 'letters'; // 'letters' or 'numbers'
let currentIndex = 0;
let isSpeaking = false;
let showGuide = true;
let currentColor = 'black';

// Data for characters
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numbers = '0123456789'.split('');

// DOM elements
let instructionEl, feedbackEl;

// Initialize after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    canvas = document.getElementById('writing-canvas');
    if (canvas) {
        canvas.willReadFrequently = true;
        ctx = canvas.getContext('2d');
        instructionEl = document.getElementById('writing-instruction');
        feedbackEl = document.getElementById('writing-feedback');
        
        setupCanvas();
        setupButtonListeners();
        setupCanvasEventListeners();
        updateInstruction();
    }
});

// Set up canvas event listeners
function setupCanvasEventListeners() {
    if (!canvas) {
        return;
    }

    // Remove existing listeners to prevent duplicates
    const newCanvas = canvas.cloneNode(true);
    canvas.parentNode.replaceChild(newCanvas, canvas);
    canvas = newCanvas;
    canvas.willReadFrequently = true;
    ctx = canvas.getContext('2d');

    // Set drawing properties
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Touch events for mobile
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startDrawing(e);
    });
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        draw(e);
    });
    canvas.addEventListener('touchend', stopDrawing);
}

// Initialize canvas
function setupCanvas() {
    if (!ctx) return;
    if (!showGuide) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    if (showGuide) {
        const items = currentMode === 'letters' ? letters : numbers;
        const currentItem = items[currentIndex];
        drawGuideCharacter(currentItem);
    }
}

// Clear canvas completely (including guide)
function clearCanvas() {
    if (!ctx) return;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (showGuide) {
        const items = currentMode === 'letters' ? letters : numbers;
        const currentItem = items[currentIndex];
        drawGuideCharacter(currentItem);
    }
}

// Pre-draw the character as a guide
function drawGuideCharacter(character) {
    if (!ctx) return;

    ctx.save();
    
    const fontSize = Math.min(canvas.width, canvas.height) * 0.5;
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = '#E0E0E0';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(character, canvas.width / 2, canvas.height / 2);
    ctx.restore();
}

// Preprocess image for better OCR
function preprocessImage(imageData) {
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
                const threshold = 200; // Higher threshold to better detect colored strokes
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

// Drawing functions
function startDrawing(e) {
    isDrawing = true;
    const pos = getPosition(e);
    lastX = pos.x;
    lastY = pos.y;

    stopSpeaking();
}

function draw(e) {
    if (!isDrawing) return;
    const pos = getPosition(e);

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    lastX = pos.x;
    lastY = pos.y;
}

function stopDrawing() {
    isDrawing = false;
}

// Get position from mouse or touch event
function getPosition(e) {
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
    };
}

// Check if canvas has content
function hasContent() {
    if (!ctx) return false;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i] !== 255 || imageData.data[i + 1] !== 255 || imageData.data[i + 2] !== 255) {
            return true;
        }
    }
    return false;
}

// Speech functions
function speakWritingText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        utterance.pitch = 1.2;
        window.speechSynthesis.speak(utterance);
    }
}

function stopSpeaking() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
    }
}

// Update instruction
function updateInstruction() {
    const items = currentMode === 'letters' ? letters : numbers;
    const currentItem = items[currentIndex];
    const modeText = currentMode === 'letters' ? 'letter' : 'number';
    if (instructionEl) instructionEl.innerText = `Write the ${modeText}: ${currentItem}`;

    clearCanvas();

    if (showGuide && typeof drawGuideCharacter === 'function') {
        drawGuideCharacter(currentItem);
    }

    speakWritingText(`Write the ${modeText} ${currentItem}`);
}

// Next character
function nextItem() {
    const items = currentMode === 'letters' ? letters : numbers;
    currentIndex = (currentIndex + 1) % items.length;
    if (feedbackEl) feedbackEl.innerText = '';
    updateInstruction();
}

// Previous character
function prevItem() {
    const items = currentMode === 'letters' ? letters : numbers;
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    if (feedbackEl) feedbackEl.innerText = '';
    updateInstruction();
}

// Button functionality
function setupButtonListeners() {
    const clearBtn = document.getElementById('clear-canvas-btn');
    const checkBtn = document.getElementById('check-writing-btn');
    const nextBtn = document.getElementById('next-writing-btn');
    const prevBtn = document.getElementById('prev-writing-btn');
    const toggleGuideBtn = document.getElementById('toggle-guide-btn');

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
    const toggleGuideBtnNew = document.getElementById('toggle-guide-btn');
    const clearBtnNew = document.getElementById('clear-canvas-btn');
    const checkBtnNew = document.getElementById('check-writing-btn');
    const nextBtnNew = document.getElementById('next-writing-btn');
    const prevBtnNew = document.getElementById('prev-writing-btn');

    // Initialize toggle guide button state
    if (toggleGuideBtnNew) {
        toggleGuideBtnNew.innerText = showGuide ? '👁️ Guide On' : '👁️ Guide Off';
        toggleGuideBtnNew.style.backgroundColor = showGuide ? '#4CAF50' : '#9E9E9E';
    }

    if (clearBtnNew) {
        clearBtnNew.addEventListener('click', clearCanvas);
    }
    if (checkBtnNew) {
        checkBtnNew.addEventListener('click', checkWriting);
    }
    if (nextBtnNew) {
        nextBtnNew.addEventListener('click', nextItem);
    }
    if (prevBtnNew) {
        prevBtnNew.addEventListener('click', prevItem);
    }
    if (toggleGuideBtnNew) {
        toggleGuideBtnNew.addEventListener('click', toggleGuide);
    }

    // Setup color palette buttons
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            colorButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentColor = this.dataset.color;
            ctx.strokeStyle = currentColor;
        });
    });

    // Setup mode switching buttons
    const modeButtons = document.querySelectorAll('.writing-mode-btn');
    modeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const mode = this.dataset.mode;
            const lang = this.dataset.lang;
            
            // Update active state
            modeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Switch mode
            currentMode = mode;
            currentIndex = 0;
            if (feedbackEl) feedbackEl.innerText = '';
            updateInstruction();
        });
    });
}

function toggleGuide() {
    showGuide = !showGuide;
    const toggleGuideBtn = document.getElementById('toggle-guide-btn');
    
    if (toggleGuideBtn) {
        toggleGuideBtn.innerText = showGuide ? '👁️ Guide On' : '👁️ Guide Off';
        toggleGuideBtn.style.backgroundColor = showGuide ? '#4CAF50' : '#9E9E9E';
    }
    
    clearCanvas();
}

async function checkWriting() {
    if (!hasContent()) {
        if (feedbackEl) feedbackEl.innerText = 'Please write something first!';
        speakWritingText('Please write something first');
        return;
    }

    if (feedbackEl) feedbackEl.innerText = 'Checking...';

    try {
        const imageData = canvas.toDataURL('image/png');
        const processedImage = await preprocessImage(imageData);
        
        const result = await Tesseract.recognize(processedImage, 'eng');
        const recognizedText = result.data.text.trim().toUpperCase();
        
        const items = currentMode === 'letters' ? letters : numbers;
        const currentItem = items[currentIndex];
        
        if (feedbackEl) {
            if (recognizedText === currentItem) {
                feedbackEl.innerText = `✅ Correct! You wrote ${currentItem}`;
                feedbackEl.style.color = '#4CAF50';
                speakWritingText(`Correct! You wrote ${currentItem}`);
                // Clear canvas after 10 seconds if correct
                setTimeout(() => {
                    clearCanvas();
                }, 10000);
            } else {
                feedbackEl.innerText = `❌ Try again! You wrote ${recognizedText || 'nothing'}`;
                feedbackEl.style.color = '#F44336';
                speakWritingText(`Try again! You wrote ${recognizedText || 'nothing'}`);
                // Clear canvas after 2 seconds if wrong
                setTimeout(() => {
                    clearCanvas();
                }, 2000);
            }
        }
    } catch (error) {
        console.error('OCR Error:', error);
        if (feedbackEl) {
            feedbackEl.innerText = 'Error checking writing. Please try again.';
            feedbackEl.style.color = '#F44336';
        }
    }
}