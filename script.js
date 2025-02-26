document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita o comportamento padrão

            const targetId = this.getAttribute("href").substring(1); // Obtém o ID da seção
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" }); // Animação suave
            }
        });
    });
});