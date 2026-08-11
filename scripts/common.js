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

// Speech synthesis for numbers with pause (number first, then example text without emoji)
function speakNumberText(numberWord, exampleText, lang = 'en-US', onEndCallback = null) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        // Remove emojis from example text for speech (comprehensive emoji removal)
        const cleanExampleText = exampleText
            .replace(/[\u{1F300}-\u{1F9FF}]/gu, '') // Emojis
            .replace(/[\u{2600}-\u{26FF}]/gu, '') // Miscellaneous symbols (includes sun ☀️)
            .replace(/[\u{2700}-\u{27BF}]/gu, '') // Dingbats
            .replace(/[\u{1F600}-\u{1F64F}]/gu, '') // Emoticons
            .replace(/[\u{1F680}-\u{1F6FF}]/gu, '') // Transport and map symbols
            .replace(/[\u{1F700}-\u{1F77F}]/gu, '') // Alchemical symbols
            .replace(/[\u{1F780}-\u{1F7FF}]/gu, '') // Geometric shapes
            .replace(/[\u{1F800}-\u{1F8FF}]/gu, '') // Supplemental arrows
            .replace(/[\u{1F900}-\u{1F9FF}]/gu, '') // Supplemental symbols
            .replace(/[\u{1FA00}-\u{1FA6F}]/gu, '') // Chess symbols
            .replace(/[\u{1FA70}-\u{1FAFF}]/gu, '') // Symbols and pictographs
            .replace(/[\u{2000}-\u{206F}]/gu, '') // General punctuation
            .replace(/[\u{FE00}-\u{FE0F}]/gu, '') // Variation selectors
            .replace(/[\u{FE0E}-\u{FE0F}]/gu, '') // Variation selectors
            .replace(/[\u{1F020}-\u{1F093}]/gu, '') // Enclosed characters
            .replace(/[\u{1F1E0}-\u{1F1FF}]/gu, '') // Flags
            .replace(/[\u{1F10D}-\u{1F10F}]/gu, '') // Enclosed alphanumeric
            .replace(/[\u{1F12F}]/gu, '') // Enclosed alphanumeric
            .replace(/[\u{1F16C}-\u{1F171}]/gu, '') // Enclosed alphanumeric
            .replace(/[\u{1F17E}-\u{1F17F}]/gu, '') // Enclosed alphanumeric
            .replace(/[\u{1F18E}]/gu, '') // Enclosed alphanumeric
            .replace(/[\u{1F191}-\u{1F19A}]/gu, '') // Enclosed alphanumeric
            .replace(/[\u{1F1AD}-\u{1F1E5}]/gu, '') // Enclosed alphanumeric
            .trim();
        
        // First speak the number word
        const utterance1 = new SpeechSynthesisUtterance(numberWord);
        utterance1.lang = lang;
        utterance1.rate = 0.85;
        utterance1.pitch = 1.2;

        if (lang.startsWith('ar')) {
            const voices = window.speechSynthesis.getVoices();
            const arabicVoice = voices.find(voice => voice.lang.startsWith('ar'));
            if (arabicVoice) {
                utterance1.voice = arabicVoice;
            }
        }

        // Then speak the example text after a short pause
        utterance1.onend = function() {
            setTimeout(() => {
                const utterance2 = new SpeechSynthesisUtterance(cleanExampleText);
                utterance2.lang = lang;
                utterance2.rate = 0.85;
                utterance2.pitch = 1.2;

                if (lang.startsWith('ar')) {
                    const voices = window.speechSynthesis.getVoices();
                    const arabicVoice = voices.find(voice => voice.lang.startsWith('ar'));
                    if (arabicVoice) {
                        utterance2.voice = arabicVoice;
                    }
                }

                if (onEndCallback) {
                    utterance2.onend = onEndCallback;
                }

                window.speechSynthesis.speak(utterance2);
            }, 500); // 500ms pause between number and example
        };

        window.speechSynthesis.speak(utterance1);
    }
}

// Make speakNumberText available globally
window.speakNumberText = speakNumberText;

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