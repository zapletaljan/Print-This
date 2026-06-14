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

function goToIndexHTML() {
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function () { // wait for the page to finish loading
  var mobileNav = document.getElementById('mobile-nav'); // find the mobile dropdown by id
  if (!mobileNav) return; // stop if the dropdown doesn't exist

  mobileNav.addEventListener('change', function (event) { // run when the dropdown value changes
    var value = event.target.value; // get the selected option value
    if (value.startsWith('#')) { // if it's an internal anchor link
      var target = document.querySelector(value); // find the section referenced by the anchor
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' }); // smoothly scroll to that section
      }
    } else {
      window.location.href = value; // otherwise navigate to the selected URL
    }
  });
});