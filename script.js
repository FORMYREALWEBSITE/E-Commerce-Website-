// Toggle menu for mobile
function toggleMenu() {
    const overlay = document.getElementById("overlay");
    overlay.style.width = overlay.style.width === "100%" ? "0" : "100%";
}
// Scroll animation
// Show the "Go to Top" button on scroll
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const goToTopButton = document.querySelector(".go-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
