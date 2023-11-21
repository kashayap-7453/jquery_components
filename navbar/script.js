let navbar = document.querySelector(".navbar");
let toggleIcon = document.querySelector(".toggle-icon");
let open = document.querySelector(".open");
let close = document.querySelector(".close");

const toggleNavbar = () => {
    let result = navbar.classList.toggle("active");
    if (result) {
        close.style.display = "block";
        open.style.display = "none";
    }else{
        close.style.display = "none";
        open.style.display = "block";
    }
}

toggleIcon.addEventListener("click", () => toggleNavbar());
// navbar.addEventListener("click", () => toggleNavbar());
                            