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
    onOpen: function() {
        // Custom Cursor ausblenden
        cursor.style.display = 'none';
        glow.style.display = 'none';
        // Standard-Cursor anzeigen
        document.body.style.cursor = 'default';
    },
    onClose: function() {
        // Custom Cursor einblenden
        cursor.style.display = 'block';
        glow.style.display = 'block';
        // Standard-Cursor verstecken
        document.body.style.cursor = 'none';
    }
});
