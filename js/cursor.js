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

// Lightbox2 Callback einrichten
lightbox.option({
    onOpen: function() {
        cursor.style.display = 'none';
        glow.style.display = 'none';
        document.body.style.cursor = 'default';
    },
    onClose: function() {
        cursor.style.display = 'block';
        glow.style.display = 'block';
        document.body.style.cursor = 'none';
    }
});
