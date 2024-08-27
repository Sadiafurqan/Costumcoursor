document.addEventListener('DOMContentLoaded', () => {
    // Create a custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Update the cursor's position
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    // Add hover effect
    document.querySelectorAll('.hover-target').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-target');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-target');
        });
    });
});
