const cursor = document.querySelector(".custom-cursor");
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
});

lightbox.option({
    onOpen: function () {
        // Systemcursor aktivieren
        document.body.classList.add("show-system-cursor");

        // Custom-Cursor ausblenden
        const cc = document.querySelector(".custom-cursor");
        const glow = document.querySelector(".cursor-glow");
        if (cc) cc.style.display = "none";
        if (glow) glow.style.display = "none";
    },
    onClose: function () {
        // Systemcursor deaktivieren
        document.body.classList.remove("show-system-cursor");

        // Custom-Cursor wieder anzeigen
        const cc = document.querySelector(".custom-cursor");
        const glow = document.querySelector(".cursor-glow");
        if (cc) cc.style.display = "block";
        if (glow) glow.style.display = "block";
    }
});


