document.querySelectorAll(".nav").forEach((nav, index) => {
    const links = nav.querySelector(".nav-links");
    if (!links) {
        return;
    }

    let toggle = nav.querySelector(".nav-toggle");
    if (!toggle) {
        toggle = document.createElement("button");
        toggle.type = "button";
        toggle.className = "nav-toggle";
        toggle.setAttribute("aria-label", "Toggle navigation");
        toggle.innerHTML = "<span class=\"nav-toggle-line\"></span>";
        nav.insertBefore(toggle, links);
    }

    const linksId = links.id || `nav-links-${index + 1}`;
    links.id = linksId;
    toggle.setAttribute("aria-controls", linksId);
    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });
});
