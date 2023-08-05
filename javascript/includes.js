// This page created by Chat GPT-3.5 on 04/08/2023
console.log("javascript/includes.js loaded");

// Function to fetch header and footer HTML using Fetch API
function fetchIncludes() {
    fetch('../reuseable-assets/header.html')
      .then(response => response.text())
      .then(headerContent => {
        document.querySelector('header').innerHTML = headerContent;
      });
  
    fetch('../reuseable-assets/footer.html')
      .then(response => response.text())
      .then(footerContent => {
        document.querySelector('footer').innerHTML = footerContent;
      });
  }
  
  // Wait for the DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    fetchIncludes();
  });
  
  
  
  