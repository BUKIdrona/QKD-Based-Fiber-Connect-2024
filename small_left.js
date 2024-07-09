


    document.addEventListener("DOMContentLoaded", function() {
        const navToggle = document.getElementById("nav-toggle");
        const navMenu = document.getElementById("navMenu");
    
        navToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    
        document.addEventListener("click", function(event) {
            const isClickInside = navMenu.contains(event.target) || navToggle.contains(event.target);
    
            if (!isClickInside) {
                navMenu.classList.remove("active");
            }
        });
    });
    