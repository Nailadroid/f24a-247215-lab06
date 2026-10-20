let orderHistory = [];

document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('order');
    const dropBtn = document.getElementById('drop');

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    dropBtn.addEventListener('click', () => {
        // Drop last logic
    });
});