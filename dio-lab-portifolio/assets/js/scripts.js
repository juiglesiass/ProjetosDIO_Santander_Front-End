// tema dark light

const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light");
    } else {
        rootHtml.setAttribute("data-theme", "dark");
    }

    toggleTheme.classList.toggle("bi-moon-stars");
    toggleTheme.classList.toggle("bi-sun");
}

toggleTheme.addEventListener("click", changeTheme);

// accordion

const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement; //pega o pai do header
        const accordionActive = accordionItem.classList.contains("active"); // ve se tem active na classe
        
        if (accordionActive) {
            accordionItem.classList.remove("active"); // se tiver, remove a classe ativa
        } else {
            accordionItem.classList.add("active"); // se não tiver, adiciona a classe ativa
        }
    });
});

// menu ativo ao clicar

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active")); // percorre a lista e  remove a classe ativa
        item.classList.add("active"); // adiciona a classe ativa ao item clicado
    });
});