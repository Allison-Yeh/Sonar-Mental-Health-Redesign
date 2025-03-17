
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.2, // Element must be 20% visible before triggering
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, observerOptions);

    // Select elements to animate
    document.querySelectorAll(".hidden").forEach((element) => observer.observe(element));
});
