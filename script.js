/* PART 2: JAVASCRIPT FUNCTIONS - SCOPE, PARAMETERS & RETURN VALUES */

// Global variables (global scope)
let animationCount = 0;
let isLoaderActive = false;

// Function with parameters and return value
function addNumbers(num1, num2) {
    // Local variables (local scope)
    const sum = num1 + num2;
    const timestamp = new Date().toLocaleTimeString();
    
    console.log(`Adding: ${num1} + ${num2} = ${sum} at ${timestamp}`);
    return sum;
}

// Function demonstrating local scope
function generateRandomNumber(min, max) {
    // These variables only exist inside this function
    const range = max - min + 1;
    const random = Math.floor(Math.random() * range) + min;
    return random;
}

// Function that uses other functions (reusability)
function calculate(a, b) {
    const result = addNumbers(a, b);
    animationCount++; // Accessing global variable
    
    // Update DOM
    document.getElementById('result').textContent = result;
    return result;
}

/* PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT */

// Function to trigger CSS animations with parameters
function animateElement(animationType) {
    const box = document.getElementById('box');
    
    // Remove existing animation classes
    box.classList.remove('slide', 'spin', 'bounce');
    
    // Add new animation class based on parameter
    if (animationType === 'slide') {
        box.classList.add('slide');
        box.textContent = 'Sliding!';
    } else if (animationType === 'spin') {
        box.classList.add('spin');
        box.textContent = 'Spinning!';
    } else if (animationType === 'bounce') {
        box.classList.add('bounce');
        box.textContent = 'Bouncing!';
    }
    
    // Return animation info
    return {
        type: animationType,
        timestamp: Date.now()
    };
}

// Function to reset animations
function resetAnimation() {
    const box = document.getElementById('box');
    box.classList.remove('slide', 'spin', 'bounce');
    box.textContent = 'Click buttons to animate!';
}

// Card flip function
function flipCard() {
    const card = document.getElementById('card');
    card.classList.toggle('flipped');
    
    // Return current state
    return card.classList.contains('flipped');
}

// Toggle loader with global scope demonstration
function toggleLoader() {
    const loader = document.getElementById('loader');
    
    if (!isLoaderActive) {
        // Show loader
        loader.classList.add('active');
        isLoaderActive = true;
        
        // Auto-hide after 3 seconds
        setTimeout(function() {
            hideLoader();
        }, 3000);
    } else {
        hideLoader();
    }
    
    return isLoaderActive;
}

// Helper function (demonstrates reusability)
function hideLoader() {
    const loader = document.getElementById('loader');
    loader.classList.remove('active');
    isLoaderActive = false;
}

// Modal functions
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    
    // Trigger CSS animation after small delay
    setTimeout(function() {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    
    // Hide modal after animation completes
    setTimeout(function() {
        modal.style.display = 'none';
    }, 300);
}

// Close modal when clicking outside (event handling)
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initialization function (demonstrating scope)
function initializePage() {
    // Local scope
    const welcomeMessage = "Page loaded successfully!";
    console.log(welcomeMessage);
    
    // Reset global counter
    animationCount = 0;
    
    // Set initial result
    document.getElementById('result').textContent = '0';
}

// Run initialization when page loads
window.onload = initializePage;