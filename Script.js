document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".product-card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });
});
