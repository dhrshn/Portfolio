document.addEventListener("DOMContentLoaded", () => {
    // 1. Select the elements
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    // 2. Check if they exist (safety check)
    if (hamburger && navMenu) {
        
        // 3. Toggle menu on click
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // 4. Close menu when any link is clicked
        document.querySelectorAll(".nav-links li a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    } else {
        console.error("Error: Hamburger or Nav Menu elements not found.");
    }
});
