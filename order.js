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
const itemName = document.getElementById('item').value.trim();

        try {
            const response = await fetch('/api/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ item: itemName, qty: qtyNum })
            });

            if (response.ok) {
                const data = await response.json();

                document.getElementById('ticket-id').textContent = data.orderId;
                document.getElementById('ticket-item').textContent = data.item;
                document.getElementById('ticket-total').textContent = data.total;

                orderHistory.push({
                    orderId: data.orderId,
                    item: data.item,
                    qty: data.qty,
                    total: data.total
                });

                renderSheet();
                statusElem.textContent = `Order ${data.orderId}, total ${data.total}`;
            }
        } catch (err) {
statusElem.textContent = 'The server is not answering.';        }
finally {
            sendBtn.disabled = false;
        }
        function renderSheet() {
    const sheetBody = document.getElementById('sheet');
    sheetBody.innerHTML = '';

    let totalTakings = 0;

    orderHistory.forEach(ord => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${ord.orderId}</td>
            <td>${ord.item}</td>
            <td>${ord.qty}</td>
            <td>${ord.total}</td>
        `;
        sheetBody.appendChild(tr);
        totalTakings += ord.total;
    });

    document.getElementById('count').textContent = orderHistory.length;
    document.getElementById('takings').textContent = totalTakings;
}
dropBtn.addEventListener('click', () => {
        if (orderHistory.length === 0) return;

        const droppedOrder = orderHistory.pop();
        const currentTicketId = document.getElementById('ticket-id').textContent;

        if (String(droppedOrder.orderId) === String(currentTicketId)) {
            document.getElementById('ticket-id').textContent = '';
            document.getElementById('ticket-item').textContent = '';
            document.getElementById('ticket-total').textContent = '';
        }

        renderSheet();
    });

    if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                if (response.status === 404 || errData.error === 'not in shop') {
                    statusElem.textContent = `${itemName} is not in the shop`;
                }
            }
      