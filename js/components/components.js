async function loadComponent(id, file) {
    const res = await fetch(file);
    const element = document.getElementById(id)
    if (!element) return;
    element.innerHTML = await res.text();
}

async function init() {
    loader.show();
    await Promise.all([
        loadComponent("header", "/components/header.html"),
        loadComponent("contact-sec", "/components/contact-sec.html"),
        loadComponent("footer", "/components/footer.html")
    ])
    const header = document.getElementById("header").children[1];
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
    const navToggle = document.getElementById("navToggle");
    navToggle.addEventListener("click", () => {
        header.classList.toggle("activeHeader");
    });
    loader.hide();
}



init()