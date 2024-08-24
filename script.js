document.addEventListener('DOMContentLoaded', function() {
    // Function to add the 'in-view' class to elements
    const inView = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Unobserve the element after animation
            }
        });
    };

    // Options for the Intersection Observer
    const options = {
        threshold: 0.1 // Trigger when 10% of the element is in the viewport
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(inView, options);

    // Select elements to observe
    const elements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
    elements.forEach(element => {
        observer.observe(element);
    });
});
