//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const enterBtn = document.getElementById('enterBtn');
    const statusElement = document.getElementById('status');
    
    enterBtn.addEventListener('click', function() {
        // Create h1 element with the new text
        const h1 = document.createElement('h1');
        h1.textContent = 'Entered Metaverse';
        
        // Replace the p tag with the h1 element
        statusElement.replaceWith(h1);
        
        // Optional: Disable the button after click
        enterBtn.disabled = true;
        enterBtn.style.backgroundColor = '#9e9e9e';
    });
});