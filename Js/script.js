document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.getElementById("navLinks");

    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            const accordionContent = this.nextElementSibling;
            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            }
        });
    });

    let slideIndex = 1;
    showSlides(slideIndex);

    document.querySelectorAll(".prev").forEach(button => {
        button.addEventListener("click", function() {
            plusSlides(-1);
        });
    });

    document.querySelectorAll(".next").forEach(button => {
        button.addEventListener("click", function() {
            plusSlides(1);
        });
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("lightbox-slide");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }

    document.querySelectorAll(".close").forEach(button => {
        button.addEventListener("click", function() {
            closeLightbox();
        });
    });

    function closeLightbox() {
        document.querySelector(".lightbox").style.display = "none";
    }

    document.querySelectorAll(".lightbox img").forEach(img => {
        img.addEventListener("click", function() {
            openLightbox();
        });
    });

    function openLightbox() {
        document.querySelector(".lightbox").style.display = "flex";
        showSlides(slideIndex);
    }
});
