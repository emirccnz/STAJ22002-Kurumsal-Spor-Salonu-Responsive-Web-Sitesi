const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;
        let speed = 100
        if(counter.dataset.target == 2500) speed = 15
        let current = 0;

        const increment = Math.ceil(target / 100);

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            counter.textContent = current + "+";

        }, speed);

        observer.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));