// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '☀️';
    }
};
themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});
(function autoTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
    else setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
})();

// Typing animation for name (only on home)
const typingName = document.getElementById('typing-name');
if (typingName) {
    const name = "Hi, I'm Rayyan";
    let idx = 0;
    function type() {
        typingName.textContent = name.slice(0, idx);
        if (idx < name.length) {
            idx++;
            setTimeout(type, 120);
        } else {
            typingName.textContent = name;
        }
    }
    setTimeout(type, 400);
}

// Animated heading typing effect for other pages
document.querySelectorAll('.animated-heading').forEach(heading => {
    const text = heading.textContent;
    heading.textContent = '';
    let i = 0;
    function typeHeading() {
        heading.textContent = text.slice(0, i);
        i++;
        if (i <= text.length) setTimeout(typeHeading, 80);
    }
    setTimeout(typeHeading, 380);
});

