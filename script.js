// 1. App State - Keeps track of user progress
const state = {
    coins: 602,
    currentLesson: "Calculus",
    isQuizOpen: false
};

// 2. Select DOM Elements
const quizOverlay = document.getElementById('quizOverlay');
const reflectionOverlay = document.getElementById('reflectionOverlay');
const coinDisplay = document.querySelector('.coin-count'); // If you add a coin counter in HTML

// 3. Logic to Trigger the Quiz
// This would be called by the "Take Pop Quiz" button
function openQuiz() {
    quizOverlay.classList.add('active');
    state.isQuizOpen = true;
    
    // Optional: Haptic feedback feel
    if (navigator.vibrate) navigator.vibrate(10); 
}

// 4. MCQ Selection Logic
function handleAnswerSelection(event) {
    // Remove 'selected' class from all options first
    const options = document.querySelectorAll('.mcq-option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Highlight the clicked one
    const selectedBtn = event.target;
    selectedBtn.classList.add('selected');
    
    // Small delay to let the user see their choice before moving to reflection
    setTimeout(() => {
        transitionToReflection();
    }, 600);
}

// 5. Seamless Transition
function transitionToReflection() {
    quizOverlay.classList.remove('active');
    
    // Wait for quiz to slide down before sliding reflection up
    setTimeout(() => {
        reflectionOverlay.classList.add('active');
    }, 400);
}

// 6. Final Reward Logic (The "Summary" Page)
function finishLesson() {
    const earnedAmount = 75;
    state.coins += earnedAmount;
    
    // Update the UI if you have a coin element
    if(coinDisplay) coinDisplay.innerText = state.coins;
    
    alert(`Great Work! You earned ${earnedAmount} coins.`);
    
    // Reset the app view
    reflectionOverlay.classList.remove('active');
}

// 7. Event Listeners for Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        // Add logic here to switch between "Home", "Shop", or "Profile"
        console.log("Navigating to:", item.dataset.target);
    });
});
