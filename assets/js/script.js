// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Quickz rules button
  const rulesBtn = document.getElementById('rules-btn');

  // Quickz rules div
  const rulesDiv = document.getElementById('quickz-rules')

  // Add click event listener to the rules button
  rulesBtn.addEventListener('click', function() {
    // Toggle  the display of rules div
    if(rulesDiv.style.display === 'none') {
      rulesDiv.style.display = 'block'; 
    } else {
      rulesDiv.style.display = 'none';
    }
    
  });
});