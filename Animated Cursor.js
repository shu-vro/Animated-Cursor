var cursor = document.querySelectorAll('.cursor');
cursor.forEach(point => {
    document.addEventListener('mousemove', (e) => {
        point.style.left = e.clientX + 'px';
        point.style.top = e.clientY + 'px';
    })
});
