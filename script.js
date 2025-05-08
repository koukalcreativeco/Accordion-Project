document.addEventListener("click", (event) => {
    if(event.target.classList.contains("question")) {
        const answer = event.target.nextElementSibling;

        document.querySelectorAll(".answer").forEach((answer) => {
            answer.style.display = "none";
        });
        if (answer) {
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        }
    }
})