// dropdown.js
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    // Toggle dropdown menu
    dropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = e.target.closest('.dropdown');
        dropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const dropdown = document.querySelector('.dropdown');
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});

// Existing functions from home.js can remain the same