const addDelRow = () => {

    const addBtn = document.querySelector('.button__add');
    const table = document.querySelector('.table');
    const delBtn = document.querySelector('.button__del');

    addBtn.addEventListener('click', () => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <input name="name" type="text" required>
        </td>
        <td>
            <select name="#" id="#">
                <option value="1">менеджер</option>
                <option value="1">аналитик</option>
                <option value="1">программист</option>
                <option value="1">юрист</option>
            </select>
        </td>
        <td>
            <input name="age" type="text" required>
        </td>
        <td>
            <input name="text" type="text" required>
        </td>
        `;
        table.appendChild(row);
        console.log(table.childNodes.length);

        if (table.childNodes.length >= 3) {
            delBtn.style.display = 'block';
        } 
    });

    delBtn.addEventListener('click', () => {
        table.lastChild.remove();
        if (table.childNodes.length <= 2) {
            delBtn.style.display = 'none';
        } 
    });
};

export default addDelRow;