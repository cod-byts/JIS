// Ensure script is running
console.log("Hero scroller script loaded!");

// Select scrollers
const leftScroller = document.querySelector('.scroller-left .scroller-track');
const rightScroller = document.querySelector('.scroller-right .scroller-track');

if (!leftScroller || !rightScroller) {
    console.error("Scroller elements not found! Check your HTML structure.");
}

// Initial speeds
let leftSpeed = 1.5;  // Moves UP
let rightSpeed = 1.5; // Moves DOWN

const maxSpeed = 2.5;
const minSpeed = 0.2;
const stopZoneWidth = 250; // Horizontal area where images stop
const viewportWidth = window.innerWidth;

// Function to move scrollers
function scrollContent() {
    if (!leftScroller || !rightScroller) return;

    // Update scroll positions
    leftScroller.style.transform = `translateY(${leftScroller.offsetTop - leftSpeed}px)`;
    rightScroller.style.transform = `translateY(${rightScroller.offsetTop + rightSpeed}px)`;

    // Reset scrollers for infinite loop effect
    if (parseFloat(leftScroller.style.transform.replace("translateY(", "").replace("px)", "")) <= -leftScroller.scrollHeight / 2) {
        leftScroller.style.transform = `translateY(0px)`;
    }
    if (parseFloat(rightScroller.style.transform.replace("translateY(", "").replace("px)", "")) >= rightScroller.scrollHeight / 2) {
        rightScroller.style.transform = `translateY(0px)`;
    }

    requestAnimationFrame(scrollContent);
}

// Adjust speed based on mouse position
function adjustSpeed(event) {
    const mouseX = event.clientX;
    const centerX = viewportWidth / 2;
    const distanceFromCenter = Math.abs(mouseX - centerX);

    if (distanceFromCenter < stopZoneWidth) {
        leftSpeed = 0;
        rightSpeed = 0;
    } else {
        const slowdownFactor = distanceFromCenter / viewportWidth;
        leftSpeed = maxSpeed - (minSpeed * slowdownFactor);
        rightSpeed = maxSpeed - (minSpeed * slowdownFactor);
    }
}

// Debugging: Log mouse movement
document.addEventListener('mousemove', (event) => {
    console.log("Mouse moved:", event.clientX);
    adjustSpeed(event);
});

// Start the scrolling animation
scrollContent();
