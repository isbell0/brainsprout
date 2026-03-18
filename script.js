function navigateTo(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Show the target screen
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
    }
}
