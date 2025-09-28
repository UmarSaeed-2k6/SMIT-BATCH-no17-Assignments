// script.js

document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Click event listener for the dropdown button
    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Yeh click event ko body tak jaane se rokega
            dropdownContent.classList.toggle('show'); // 'show' class add/remove karega
        });

        // Click anywhere outside the dropdown to close it
        window.addEventListener('click', function(event) {
            if (!event.target.matches('.dropbtn')) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
    }
});