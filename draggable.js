document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');

    draggables.forEach(draggable => {
        // Load saved positions from localStorage
        const savedPosition = localStorage.getItem(draggable.id);
        if (savedPosition) {
            const { left, top } = JSON.parse(savedPosition);
            draggable.style.left = `${left}px`;
            draggable.style.top = `${top}px`;
        }

        draggable.addEventListener('mousedown', (e) => {
            const offsetX = e.clientX - draggable.getBoundingClientRect().left;
            const offsetY = e.clientY - draggable.getBoundingClientRect().top;

            function onMouseMove(e) {
                const left = e.clientX - offsetX;
                const top = e.clientY - offsetY;
                draggable.style.left = `${left}px`;
                draggable.style.top = `${top}px`;
            }

            function onMouseUp() {
                // Save the current position to localStorage
                const position = {
                    left: parseInt(draggable.style.left, 10),
                    top: parseInt(draggable.style.top, 10)
                };
                localStorage.setItem(draggable.id, JSON.stringify(position));

                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });
});
