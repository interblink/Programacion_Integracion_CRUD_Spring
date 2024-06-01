document.addEventListener('DOMContentLoaded', function () {
    let columns = document.querySelectorAll('.col-md-6');
    columns.forEach(function (col) {
        col.addEventListener('click', function () {
            col.style.backgroundColor = col.style.backgroundColor === 'red' ? '#FF0000' : 'red';
        });
    });
});