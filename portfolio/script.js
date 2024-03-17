// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const elements = document.querySelectorAll('.animate__fadeInLeft:not(.animate__animated), .animate__fadeInRight:not(.animate__animated)');
    // Piliin lamang ang mga elementong may animation class ngunit hindi pa na-animate
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animate__animated'); // Idagdag ang animation class kung ang elemento ay nasa viewport
        }
    });
}

// Event listener para sa scroll event
window.addEventListener('scroll', handleScroll);

// Unang check para sa mga animation kapag nag-lo-load ang pahina
document.addEventListener('DOMContentLoaded', function() {
    handleScroll(); // Tawagin ang handleScroll function kapag nalutas na ang DOM
});

window.onload = function() {
    handleScroll(); // Tawagin ang handleScroll function pagkatapos ng pag-load ng lahat ng mga resources
};
