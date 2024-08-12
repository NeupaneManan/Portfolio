document.addEventListener("DOMContentLoaded", function () {
  const typewriterText = document.getElementById("typewriter-text");
  const phrases = [
    "I'm a Full-Stack Developer.",
    "I love coding and learning new technologies.",
    "I create responsive web applications.",
    "I am passionate about problem-solving.",
    "Let's get Connected.",
  ];
  let currentPhraseIndex = 0;
  let charIndex = 0;
  let typingSpeed = 100;
  let erasingSpeed = 50;
  let newTextDelay = 2000; // Delay between phrases

  function type() {
    if (charIndex < phrases[currentPhraseIndex].length) {
      typewriterText.textContent +=
        phrases[currentPhraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriterText.textContent = phrases[currentPhraseIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(type, typingSpeed);
    }
  }

  setTimeout(type, newTextDelay);
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
