let orderHistory = [];

document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('order');
    const dropBtn = document.getElementById('drop');

    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const qtyInput = document.getElementById('qty');
        const statusElem = document.getElementById('status');
        const sendBtn = document.getElementById('send');

        qtyInput.setCustomValidity('');

        const rawQty = qtyInput.value.trim();
        const qtyNum = Number(rawQty);

        if (!rawQty || isNaN(qtyNum) || !Number.isInteger(qtyNum) || qtyNum < 1) {
            qtyInput.setCustomValidity('not a number');
            qtyInput.reportValidity();
            statusElem.textContent = 'not a number';
            return;
        }
        statusElem.textContent = 'Loading…';
        sendBtn.disabled = true;
    });

    dropBtn.addEventListener('click', () => {
        // Drop last logic
    });
});