// Initializing variables similar to your logic
let randomNumber = Math.floor(Math.random() * 10) + 1;
let count = 0;

// DOM Elements
const inputField = document.getElementById('userGuess');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');
const attemptDisplay = document.getElementById('attemptCount');
const resetBtn = document.getElementById('resetBtn');

function handleGuess() {
    const userNumberPrompt = inputField.value;
    let userNumber = Number(userNumberPrompt);

    // Validation logic (keeping yours intact)
    if (userNumberPrompt === "" || userNumber < 0 || userNumber > 10) {
        feedback.textContent = 'Enter valid number (0-10).';
        feedback.style.color = '#f87171'; // Error color
        return;
    }

    count++;
    attemptDisplay.textContent = count;

    // Core Comparison Logic (Your original logic)
    if (userNumber === randomNumber) {
        feedback.textContent = `🎉 Congrats! You won in ${count} attempts`;
        feedback.style.color = '#4ade80'; // Success color
        guessBtn.disabled = true;
    } else {
        if (userNumber > randomNumber) {
            feedback.textContent = 'Too high. Try again.';
            feedback.style.color = '#fbbf24'; // Warning color
        } else if (userNumber < randomNumber) {
            feedback.textContent = 'Too low. Try again.';
            feedback.style.color = '#38bdf8'; // Low color
        }
    }
    
    // Clear input for next guess
    inputField.value = '';
    inputField.focus();
}

// Reset function
function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    count = 0;
    attemptDisplay.textContent = '0';
    feedback.textContent = 'Waiting for your move...';
    feedback.style.color = '';
    guessBtn.disabled = false;
    inputField.value = '';
}

// Event Listeners
guessBtn.addEventListener('click', handleGuess);

// Allow pressing "Enter" key to guess
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleGuess();
});

resetBtn.addEventListener('click', resetGame);
