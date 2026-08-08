// Writing Test - Canvas Drawing with OCR Recognition

// Canvas and context
let canvas, ctx;
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Current mode and character
let currentMode = 'letters'; // 'letters' or 'numbers'
let currentIndex = 0;
let isSpeaking = false; // Track if currently speaking

// Data for characters
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numbers = '0123456789'.split('');

// DOM elements
let instructionEl, feedbackEl;

// Initialize after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    canvas = document.getElementById('writing-canvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        instructionEl = document.getElementById('writing-instruction');
        feedbackEl = document.getElementById('writing-feedback');
        // Don't initialize yet - wait for switchMode to call initializeWritingTest
    }
});

// Initialize function called when switching to writing test mode
window.initializeWritingTest = function() {
    // Stop any ongoing speech
    stopSpeaking();

    // Re-get canvas reference in case it was cloned
    canvas = document.getElementById('writing-canvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        setupCanvas();
        setupButtonListeners();
        setupCanvasEventListeners();
        updateInstruction();
        console.log('Writing test initialized');
    } else {
        console.error('Canvas element not found');
    }
};

// Set up canvas event listeners
function setupCanvasEventListeners() {
    if (!canvas) {
        console.error('Canvas not found');
        return;
    }

    // Remove existing listeners to prevent duplicates
    const newCanvas = canvas.cloneNode(true);
    canvas.parentNode.replaceChild(newCanvas, canvas);
    canvas = newCanvas;
    ctx = canvas.getContext('2d');

    // Set drawing properties
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
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
window.setupCanvas = function() {
    if (!ctx) return;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
};

// Drawing functions
function startDrawing(e) {
    isDrawing = true;
    const pos = getPosition(e);
    lastX = pos.x;
    lastY = pos.y;

    // Stop any ongoing speech when user starts drawing
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

    return {
        x: clientX - rect.left,
        y: clientY - rect.top
    };
}

// Check if canvas has content
function hasContent() {
    if (!ctx) return false;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
        // Check if pixel is not white
        if (imageData.data[i] !== 255 || imageData.data[i + 1] !== 255 || imageData.data[i + 2] !== 255) {
            return true;
        }
    }
    return false;
}

// Speech functions - use the speakText function from main.js
// This function has been removed to avoid conflict with main.js speakText

// Helper function to speak text with English language for writing test
function speakWritingText(text) {
    if (typeof speakText === 'function') {
        speakText(text, 'en-US');
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

    // Speak the instruction
    speakWritingText(`Write the ${modeText} ${currentItem}`);
}

// Next character
function nextItem() {
    const items = currentMode === 'letters' ? letters : numbers;
    currentIndex = (currentIndex + 1) % items.length;
    window.setupCanvas();
    if (feedbackEl) feedbackEl.innerText = '';
    updateInstruction();
}

// Previous character
function prevItem() {
    const items = currentMode === 'letters' ? letters : numbers;
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    window.setupCanvas();
    if (feedbackEl) feedbackEl.innerText = '';
    updateInstruction();
}

// Button functionality
window.setupButtonListeners = function() {
    const clearBtn = document.getElementById('clear-canvas-btn');
    const checkBtn = document.getElementById('check-writing-btn');
    const nextBtn = document.getElementById('next-writing-btn');
    const prevBtn = document.getElementById('prev-writing-btn');

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            stopSpeaking(); // Stop any ongoing speech
            window.setupCanvas();
            if (feedbackEl) feedbackEl.innerText = '';
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopSpeaking(); // Stop any ongoing speech
            prevItem();
        });
    }

    if (checkBtn) {
        checkBtn.addEventListener('click', async () => {
            stopSpeaking(); // Stop any ongoing speech
            const hasDrawing = hasContent();
            if (!hasDrawing) {
                if (feedbackEl) {
                    feedbackEl.innerHTML = '❌ Please draw something first!';
                    feedbackEl.style.color = '#F44336';
                }
                return;
            }

            // Show loading state
            if (feedbackEl) {
                feedbackEl.innerHTML = '🔍 Checking your writing...';
                feedbackEl.style.color = '#FF9800';
            }

            try {
                // Convert canvas to image for OCR
                const imageData = canvas.toDataURL('image/png');

                // Use Tesseract.js to recognize the drawn character
                const result = await Tesseract.recognize(imageData, 'eng', {
                    logger: m => console.log(m) // Optional: log progress
                });

                const recognizedText = result.data.text.trim().toUpperCase();
                const items = currentMode === 'letters' ? letters : numbers;
                const expectedChar = items[currentIndex];

                console.log('Recognized:', recognizedText, 'Expected:', expectedChar);

                // Check if the recognized text matches expected character
                if (recognizedText === expectedChar) {
                    if (feedbackEl) {
                        feedbackEl.innerHTML = '✅ Excellent! That\'s a perfect ' + expectedChar + '!';
                        feedbackEl.style.color = '#4CAF50';
                    }
                    speakWritingText('Great job! That is a perfect ' + expectedChar);
                } else if (recognizedText.includes(expectedChar) || expectedChar.includes(recognizedText)) {
                    if (feedbackEl) {
                        feedbackEl.innerHTML = '👍 Good try! Almost there - that looks like a ' + expectedChar;
                        feedbackEl.style.color = '#FF9800';
                    }
                    speakWritingText('Good try! That looks like a ' + expectedChar);
                } else {
                    if (feedbackEl) {
                        feedbackEl.innerHTML = '🤔 Keep practicing! Try writing the ' + expectedChar + ' again';
                        feedbackEl.style.color = '#2196F3';
                    }
                    speakWritingText('Keep practicing! Try writing the ' + expectedChar + ' again');
                }
            } catch (error) {
                console.error('OCR Error:', error);
                if (feedbackEl) {
                    feedbackEl.innerHTML = '✅ Great effort! Keep practicing!';
                    feedbackEl.style.color = '#4CAF50';
                }
                speakWritingText('Great effort! Keep practicing');
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopSpeaking(); // Stop any ongoing speech
            nextItem();
        });
    }

    // Mode switching
    document.querySelectorAll('.writing-mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            stopSpeaking(); // Stop any ongoing speech
            document.querySelectorAll('.writing-mode-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentMode = e.target.dataset.mode;
            currentIndex = 0;
            window.setupCanvas();
            updateInstruction();
            if (feedbackEl) feedbackEl.innerText = '';
        });
    });
};
