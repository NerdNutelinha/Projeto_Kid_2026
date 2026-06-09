document.addEventListener("DOMContentLoaded", () => {

    console.log("Barbearia Santa Paula carregada.");

    const barbeiros = document.querySelectorAll(".barbeiro");

    barbeiros.forEach(barbeiro => {

        barbeiro.addEventListener("mouseenter", () => {
            barbeiro.style.boxShadow =
            "0 0 20px rgba(212,175,55,0.6)";
        });

        barbeiro.addEventListener("mouseleave", () => {
            barbeiro.style.boxShadow = "none";
        });

    });

});
