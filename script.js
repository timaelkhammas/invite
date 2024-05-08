// Function to start typing animation for each text
function startTyping() {
  var texts = document.querySelectorAll('.text');
  var index = 0;
  typeNext(index, texts);
}

// Function to type next text
function typeNext(index, texts) {
  if (index < texts.length) {
    var text = texts[index];
    var originalText = text.getAttribute('data-text');
    text.textContent = '';
    if (index === 0) { // Check if it's the first text
      text.style.left = '50%'; // Center the first text
      text.style.top = '50%'; // Center the first text
      text.style.transform = 'translate(-50%, -50%)'; // Center the first text
    } else {
      randomizePosition(text); // Randomize position for other texts
    }
    typeWriter(text, originalText, function() {
      index++;
      typeNext(index, texts);
    });
  }
}


// Typewriter effect function
function typeWriter(element, text, callback) {
  var i = 0;
  var typingInterval = setInterval(function() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      element.style.animationPlayState = 'running';
      if (callback) callback();
    }
  }, 70); // Adjust typing speed here
}

// Function to randomize position within the viewport
function randomizePosition(element) {
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  var textWidth = element.offsetWidth + 20; // Width including padding
  var textHeight = element.offsetHeight + 20; // Height including padding
  var randomLeft = Math.floor(Math.random() * (viewportWidth - textWidth));
  var randomTop = Math.floor(Math.random() * (viewportHeight - textHeight));
  element.style.left = randomLeft + 'px';
  element.style.top = randomTop + 'px';
}

// Start typing animation on page load
window.onload = function() {
  startTyping();
};