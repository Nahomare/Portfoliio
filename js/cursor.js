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
        // Custom-Cursor ausblenden
        document.querySelector(".custom-cursor").style.display = "none";
        document.querySelector(".cursor-glow").style.display = "none";

        // System-Cursor aktivieren
        document.body.classList.add("show-system-cursor");
    },
    onClose: function () {
        // Custom-Cursor wieder zeigen
        document.querySelector(".custom-cursor").style.display = "block";
        document.querySelector(".cursor-glow").style.display = "block";

        // System-Cursor wieder entfernen
        document.body.classList.remove("show-system-cursor");
    }
});

