document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    let activeElement = null;
    let offsetX = 0;
    let offsetY = 0;

    draggables.forEach(draggable => {
        draggable.addEventListener('mousedown', (e) => {
            activeElement = e.target;
            offsetX = e.clientX - activeElement.getBoundingClientRect().left;
            offsetY = e.clientY - activeElement.getBoundingClientRect().top;
            activeElement.style.zIndex = 1000;
        });
    });

    document.addEventListener('mousemove', (e) => {
        if (activeElement) {
            activeElement.style.left = `${e.clientX - offsetX}px`;
            activeElement.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (activeElement) {
            activeElement.style.zIndex = 10;
            activeElement = null;
        }
    });

    // Implement additional functionalities as needed
});
