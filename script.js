// Add smooth scrolling to anchor links (same as before)

const themeToggleBtn = document.getElementById('theme-toggle');

const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-theme');
};

themeToggleBtn.addEventListener('click', toggleTheme);

// Set initial theme based on user preference (optional)
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}
