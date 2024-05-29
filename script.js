document.addEventListener('DOMContentLoaded', () => {
    const mainButton = document.getElementById('mainButton');
    const overlay = document.getElementById('overlay');

    mainButton.addEventListener('click', () => {
        toggleOverlay();
    });

    overlay.addEventListener('click', () => {
        toggleOverlay();
    });

    function toggleOverlay() {
        if (overlay.style.display === 'block') {
            overlay.style.display = 'none';
        } else {
            overlay.style.display = 'block';
        }
    }
});