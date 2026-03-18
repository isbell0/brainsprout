// Function to switch between screens
function navigateTo(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Show the specific screen
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
    }
}

// Logic for clicking subject cards
document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});
