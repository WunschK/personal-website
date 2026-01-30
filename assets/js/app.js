// Reusable Typewriter Effect
function createTypewriter(elementId, options = {}) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const {
    words = [],
    singleText = '',
    typeSpeed = 150,
    deleteSpeed = 100,
    pauseAfterWord = 2000,
    pauseBeforeNext = 500,
    startDelay = 1000,
    loop = false
  } = options;
  
  // Single text mode
  if (singleText) {
    let charIndex = 0;
    
    function typeSingle() {
      if (charIndex < singleText.length) {
        element.textContent = singleText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeSingle, typeSpeed);
      }
    }
    
    setTimeout(typeSingle, startDelay);
    return;
  }
  
  // Multi-word cycling mode
  if (words.length === 0) return;
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let speed = isDeleting ? deleteSpeed : typeSpeed;
    
    if (!isDeleting && charIndex === currentWord.length) {
      speed = pauseAfterWord;
      if (loop) {
        isDeleting = true;
      }
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = pauseBeforeNext;
    }
    
    if (loop || wordIndex < words.length || isDeleting || charIndex > 0) {
      setTimeout(type, speed);
    }
  }
  
  setTimeout(type, startDelay);
}

// Initialize typewriter effects
createTypewriter('typewriter', {
  words: ['historian', 'digital humanist', 'developer', 'phd-student'],
  loop: true,
  startDelay: 1000
});

createTypewriter('hello_world', {
  singleText: 'hello world',
  startDelay: 1500
});

// Interactive scroll effect for intro sections
(function() {
  const intros = document.querySelectorAll('.intro');
  
  // Only run if we have intro sections (i.e., on home page)
  if (intros.length === 0) return;
  
  const body = document.body;
  let currentIndex = 0;
  let miniIntrosContainer;
  
  // Create mini intros container
  function createMiniIntros() {
    miniIntrosContainer = document.createElement('div');
    miniIntrosContainer.className = 'mini-intros';
    body.appendChild(miniIntrosContainer);
  }
  
  function updateMiniIntros() {
    if (!miniIntrosContainer) return;
    
    miniIntrosContainer.innerHTML = '';
    
    // Determine max mini-intros based on screen size
    const isSmallScreen = window.innerWidth <= 767;
    const maxMinis = isSmallScreen ? 4 : 5;
    const startIndex = Math.max(0, currentIndex - maxMinis + 1);
    const endIndex = currentIndex + 1;
    
    for (let i = startIndex; i < endIndex; i++) {
      if (i >= currentIndex) continue; // Don't show current section
      
      const intro = intros[i];
      if (!intro) continue;
      
      const miniIntro = document.createElement('div');
      miniIntro.className = 'mini-intro';
      miniIntro.style.animationDelay = `${(i - startIndex) * 0.1}s`;
      miniIntro.style.cursor = 'pointer';
      
      // Only include h1/h2 and first p element
      const heading = intro.querySelector('h1, h2');
      const paragraph = intro.querySelector('p');
      
      if (heading) {
        const headingClone = heading.cloneNode(true);
        // Clean up typewriter from clones
        const typewriterClone = headingClone.querySelector('#typewriter');
        if (typewriterClone) {
          typewriterClone.textContent = 'historian';
          typewriterClone.removeAttribute('id');
          typewriterClone.style.border = 'none';
          typewriterClone.style.animation = 'none';
        }
        miniIntro.appendChild(headingClone);
      }
      
      if (paragraph) {
        const paragraphClone = paragraph.cloneNode(true);
        miniIntro.appendChild(paragraphClone);
      }
      
      // Add click handler for navigation using section id
      const sectionId = intro.getAttribute('id');
      if (sectionId) {
        miniIntro.addEventListener('click', () => {
          window.location.hash = sectionId;
        });
      }
      
      miniIntrosContainer.appendChild(miniIntro);
    }
  }
  
  function handleScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    let newCurrentIndex = 0;
    
    // Find which section is currently active
    intros.forEach((intro, index) => {
      const introRect = intro.getBoundingClientRect();
      const introTop = introRect.top;
      
      // Section is active when its top is in the upper half of viewport
      if (introTop <= windowHeight * 0.5 && introTop > -windowHeight * 0.5) {
        newCurrentIndex = index;
      }
    });
    
    // Update mini intros when current section changes
    if (currentIndex !== newCurrentIndex) {
      currentIndex = newCurrentIndex;
      updateMiniIntros();
    }
    
    // Handle shrinking effect - hide sections that are completely above viewport
    intros.forEach((intro, index) => {
      const introRect = intro.getBoundingClientRect();
      
      if (introRect.bottom < 0 && index < currentIndex) {
        intro.style.visibility = 'hidden';
      } else {
        intro.style.visibility = 'visible';
        intro.classList.remove('shrinking');
      }
    });
  }
  
  createMiniIntros();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', updateMiniIntros); // Update on resize
  handleScroll(); // Initial call
})();

// Footer visibility on scroll to bottom
(function() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  
  function handleFooterVisibility() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Show footer when scrolled to within 50px of bottom
    if (scrollTop + windowHeight >= documentHeight - 50) {
      footer.classList.add('visible');
    } else {
      footer.classList.remove('visible');
    }
  }
  
  window.addEventListener('scroll', handleFooterVisibility);
  handleFooterVisibility(); // Initial call
})();