document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        themeToggle.innerHTML = theme === 'dark' ? '<i class="bi bi-moon"></i>' : '<i class="bi bi-sun"></i>';
    });
});
