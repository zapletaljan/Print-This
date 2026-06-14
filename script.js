function formScroll() { // Scroll to the form section
    const formContainer = document.getElementById('form-container');
    formContainer.scrollIntoView({ behavior: 'smooth' });
}

function hardwareScroll() { // Scroll to the hardware section
    const hardwareContainer = document.getElementById('hardware-container');
    hardwareContainer.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() { // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}