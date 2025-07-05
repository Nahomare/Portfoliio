const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const particles = [];

const mouse = {
    x: w / 2,
    y: h / 2,
};

document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
});

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.5 + 0.5,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25,
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "white";

    particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
        const glow = Math.max(0, 150 - dist);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 1.8, 0, Math.PI * 2); // Sterne vergrößern (z. B. 1.8x)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.85, 0.2 + glow / 150)})`; // mehr Leuchten
        ctx.fill();


        // Partikel zurücksetzen, wenn außerhalb
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();


// Danke message
    let seconds = 10;
    const countdownEl = document.getElementById('countdown');

    const countdown = setInterval(() => {
    seconds--;
    countdownEl.textContent = seconds;

    if (seconds <= 0) {
    clearInterval(countdown);
    window.location.href = 'index.html'; // Zur Startseite
}
}, 1000);

