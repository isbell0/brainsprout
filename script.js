function navigateTo(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function selectOpt(btn) {
    btn.parentElement.querySelectorAll('.opt').forEach(o => o.classList.remove('selected'));
    btn.classList.add('selected');
}
