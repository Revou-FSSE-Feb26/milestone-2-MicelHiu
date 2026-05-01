document.getElementById("year").textContent = new Date().getFullYear();

/* /* scroll reveal */
/* const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if(entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 80);
        }
    });
}, {threshold: 0.1});

reveals.forEach(el => observer.observe(el)); */ 