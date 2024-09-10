document.addEventListener('DOMContentLoaded', () => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'fade-in' class when the element is in view
          entry.target.classList.add('fade-in');
          // Optionally, stop observing the element once it's visible
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    // Target elements to observe
    document.querySelectorAll('.box-panel').forEach(element => {
      observer.observe(element);
    });
  });
  