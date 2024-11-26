document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const sections = document.querySelectorAll('section');
  
    // Function to handle scroll to the target section
    function scrollToSection(event) {
      event.preventDefault();
      const targetSection = document.querySelector(event.currentTarget.getAttribute('data-target'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  
    // Function to update the active circle based on scroll position
    function updateActiveCircle() {
      let currentSection = '';
  
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.innerHeight / 2;
  
        if (scrollPosition > sectionTop && scrollPosition <= sectionBottom) {
          currentSection = section.getAttribute('id');
        }
      });
  
      circles.forEach(circle => {
        circle.classList.remove('active');
        if (circle.getAttribute('data-target') === `#${currentSection}`) {
          circle.classList.add('active');
        }
      });
    }
  
    // Function to enforce strict snapping behavior
    function enforceStrictSnap() {
      const scrollPosition = window.scrollY;
      let closestSection = null;
      let closestDistance = Number.MAX_VALUE;
      const snapDistance = 1; // Adjust this value to control the snapping distance
  
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const distance = Math.abs(scrollPosition - (sectionTop + sectionHeight / 2)); // Snap to the center of the section
  
          if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = section;
          }
      });
  
      if (closestSection && closestDistance < snapDistance) {
          closestSection.scrollIntoView({ behavior: 'smooth' });
      }
  }
  
  
    // Attach click event to circles for smooth scrolling
    circles.forEach(circle => {
      circle.addEventListener('click', scrollToSection);
    });
  
    // Update the active circle on scroll
    window.addEventListener('scroll', () => {
      updateActiveCircle();
      enforceStrictSnap(); // Enforce strict snapping behavior
    });
  
    // Initial update to set the correct state on load
    updateActiveCircle();
  });
  