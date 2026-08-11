// Common JavaScript functions for all pages

// Fix dropdown navigation hover issues
function setupDropdownNavigation() {
    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
        const content = dropdown.querySelector('.nav-dropdown-content');
        const button = dropdown.querySelector('.nav-dropdown-btn');
        
        if (content && button) {
            dropdown.addEventListener('mouseenter', function() {
                content.style.display = 'block';
                button.setAttribute('aria-expanded', 'true');
            });
            
            dropdown.addEventListener('mouseleave', function() {
                content.style.display = 'none';
                button.setAttribute('aria-expanded', 'false');
            });
        }
    });
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Speech synthesis helper
function speakText(text, lang = 'en-US', onEndCallback = null) {
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

// Stop speech
function stopSpeech() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}

// Tracked timeout management for quizzes
let trackedTimeouts = [];

function createTrackedTimeout(callback, delay) {
    const timeoutId = setTimeout(callback, delay);
    trackedTimeouts.push(timeoutId);
    return timeoutId;
}

function clearTrackedTimeouts() {
    trackedTimeouts.forEach(id => clearTimeout(id));
    trackedTimeouts = [];
}

// Cleanup function for quiz pages
function cleanupQuizPage(clapSound = null) {
    clearTrackedTimeouts();
    stopSpeech();
    if (clapSound) {
        clapSound.pause();
        clapSound.currentTime = 0;
    }
}

// Initialize common functionality
document.addEventListener('DOMContentLoaded', function() {
    setupDropdownNavigation();
    setCurrentYear();
});