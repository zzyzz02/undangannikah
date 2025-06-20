window.addEventListener('DOMContentLoaded', () => {
    let satuMomen = document.getElementById('satuMomen');
    const urlParams = new URLSearchParams(window.location.search);
    const tamu = urlParams.get('tamu');

    if (satuMomen) {
        satuMomen.dataset.guest = tamu ? tamu : '';
    }

    
});



