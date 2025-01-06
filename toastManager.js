document.addEventListener('DOMContentLoaded', () => {
    const toastContainer = document.getElementById('toastContainer');
    const messages = [
        "I am 3rd generation Lebanese-American",
        "...which probably accounts for my olive addiction",
        "I love making hummus",
        "(once you try homemade, you can't go back to store bought)",
        "I play 8 instruments",
        "Percussion is my favorite",
        "Capoeira has been my passion since I was 7",
        "This brazilian martial art combines music, acrobatics and kicks",
        "I'm a college record holder in women's breaststroke",
        "Along with martial arts, I also coach swimming",
        "The greatest gift is helping my students find joy in the process of learning",
        "I am the oldest of 8 siblings.",
        "So I've got lots of experience in strategy and risk management",
        "I also make a mean strawberry matcha",
        "True peace is ever-changing",
        "but a few favorite iterations is",
        "a quiet library and complete immersion in a book,",
        "the first bite of fresh baked homemade desert by the fire,",
        "pink sunsets on the beach",
        "diving into a wave and feeling it ripple",
        "finding an animal crossing sized shell irl"
    ];

    const createToast = (message) => {
        const toastEl = document.createElement('div');
        toastEl.className = 'toast align-items-center text-bg-primary border-0';
        toastEl.role = 'alert';
        toastEl.ariaLive = 'assertive';
        toastEl.ariaAtomic = 'true';
        toastEl.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        `;
        toastContainer.appendChild(toastEl);
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    };

    // Show the initial greeting toast
    createToast("Hi human! How is it down on earth?");

    // Show subsequent toasts every 10 seconds
    let messageIndex = 0;
    setInterval(() => {
        createToast(messages[messageIndex]);
        messageIndex = (messageIndex + 1) % messages.length;
    }, 10000);
});
