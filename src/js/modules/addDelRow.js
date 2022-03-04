const addDelRow = () => {

    const addBtn = document.querySelector('.button__add');
    const table = document.querySelector('.table');
    const delBtn = document.querySelector('.button__del');
    let count = 1;

    addBtn.addEventListener('click', () => {
        count++;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <input name="name${count}" type="text" required class="table__name">
        </td>
        <td>
            <select name="post${count}" id="#">
                <option value="1">менеджер</option>
                <option value="1">аналитик</option>
                <option value="1">программист</option>
                <option value="1">юрист</option>
            </select>
        </td>
        <td>
            <input name="age${count}" type="text" required class="table__age">
        </td>
        <td>
            <input name="text${count}" type="text">
        </td>
        `;
        table.appendChild(row);

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