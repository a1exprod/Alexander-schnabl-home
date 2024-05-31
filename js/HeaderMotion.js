const container = document.getElementById('header-animation');

const createDot = (i) => {
    const dot = document.createElement('div');
    dot.className = 'header-point-motion';
    dot.style.animationDelay = `${i * 0.5}s`; // Staffelung der Animation

    // Zufällige Position innerhalb des Containers
    const posX = Math.random() * container.clientWidth;
    const posY = Math.random() * container.clientHeight;
    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;

    container.appendChild(dot);
};

// Mehrere Punkte erstellen
for (let i = 0; i < 50; i++) {
    createDot(i);
}
