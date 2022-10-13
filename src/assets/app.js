function loadJS() {
    const inputs = document.querySelectorAll(".input-field");
    const toggle_btn = document.querySelectorAll(".toggle");
    const bullets = document.querySelectorAll(".bullets span");
    const images = document.querySelectorAll(".image");


    const main = document.querySelector("main");
    inputs.forEach((input) => {
        input.addEventListener("focus", () => {
            input.classList.add("active");
        });
        input.addEventListener("blur", () => {
            if (input.value != "") return;
            input.classList.remove("active");
        });
    });

    toggle_btn.forEach(btn => {
        btn.addEventListener("click", () => {
            main.classList.toggle("sign-up-mode");
        })
    })

    function moveSlider() {
        let index = this.dataset.value;

        let currentImage = document.querySelector(`.img-${index}`);
        images.forEach(img => img.classList.remove("show"));
        currentImage.classList.add("show");

        const textSlider = document.querySelector(".text-group");
        textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`
        bullets.forEach(bullet => bullet.classList.remove("active"));
        this.classList.add("active");
    }

    bullets.forEach(bullet => {
        bullet.addEventListener("click", moveSlider);
    })
}


