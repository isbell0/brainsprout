function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Subject Toggle
document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('active'));
});

// Quiz Selection
function sel(el) {
    el.parentElement.querySelectorAll('.opt').forEach(o => o.style.background = 'white');
    el.style.background = '#f39c12';
}
