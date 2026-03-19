// Initial App State
let appData = {
  coins: 602,
  currentSubject: null
};

// Open the Quiz for a specific lesson
function openQuiz(subject) {
  appData.currentSubject = subject;
  const overlay = document.getElementById('quizOverlay');
  
  // Update the UI with specific question (logic simplified)
  if (subject === 'calculus') {
    document.getElementById('quizQuestion').innerText = "What is the sum of interior angles in a triangle?";
  }
  
  overlay.classList.add('active');
}

// Handle Answer Selection
function selectAnswer(answer, isCorrect) {
  const options = document.querySelectorAll('.option-btn');
  
  if (isCorrect) {
    appData.coins += 75;
    document.getElementById('coinDisplay').innerText = appData.coins;
    alert("Correct! 🌟 +75 Coins");
    
    // Transition to Reflection
    setTimeout(() => {
      showReflection();
    }, 500);
  } else {
    alert("Try again! Check the lesson content above.");
  }
}

function closeQuiz() {
  document.getElementById('quizOverlay').classList.remove('active');
}

function showReflection() {
  // Logic to switch to the Reflection Screen
  document.getElementById('quizOverlay').classList.remove('active');
  document.getElementById('reflectionScreen').classList.add('active');
}
