/* main.js */
/* This file contains JavaScript for interactive features like dropdowns and the quote calculator */

// Wait until the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // You can initialize interactive features here, e.g. mobile navigation toggle:
    // document.querySelector('.menu-toggle').addEventListener('click', function() {
    //   document.querySelector('.nav-links').classList.toggle('active');
    // });
  });
  
  // Function to calculate an estimated insurance quote based on user input
  function calculateQuote() {
    // Retrieve values from the quote calculator form
    var name = document.getElementById('qName').value;
    var insuranceType = document.getElementById('qInsuranceType').value;
    var coverage = document.getElementById('qCoverage').value;
    
    // Basic calculation logic (for demonstration only)
    var basePrice = 100; // Starting base price
    
    // Adjust base price based on selected insurance type
    if (insuranceType === 'auto') {
      basePrice += 50;
    } else if (insuranceType === 'commercial-auto') {
      basePrice += 100;
    } else if (insuranceType === 'business') {
      basePrice += 150;
    }
    
    // Further adjust price based on coverage level
    if (coverage === 'premium') {
      basePrice *= 1.5;
    }
    
    // Display the result in the designated quote result div
    var quoteResult = document.getElementById('quoteResult');
    quoteResult.innerHTML = '<h3>Your Estimated Quote: $' + basePrice.toFixed(2) + '</h3>';
  }
  