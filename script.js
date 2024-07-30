
function addTransaction() {
    const type = document.querySelector('select[name="typ"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const amount = document.querySelector('input[name="amount"]').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${type}</td>
        <td>${name}</td>
        <td>$${amount}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

    const tableBody = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
    tableBody.appendChild(newRow);
}

function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
}
