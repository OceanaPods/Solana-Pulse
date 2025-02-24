// Simulate transaction comet animation trigger
document.querySelector('.transactions').addEventListener('click', () => {
    const comet = document.querySelector('.comet');
    comet.style.animation = 'none'; // Reset animation
    setTimeout(() => {
        comet.style.animation = 'comet-travel 2s infinite linear'; // Restart
    }, 10);
});
