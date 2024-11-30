// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.read-more');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url');
            window.location.href = url;
        });
    });
});
