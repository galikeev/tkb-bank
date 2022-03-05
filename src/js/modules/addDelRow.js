const addDelRow = () => {

    const addBtn = document.querySelector('.button__add');
    const table = document.querySelector('.table');
    const delBtn = document.querySelector('.button__del');
    let count = 1;

    const addLineTable = () => {
        addBtn.addEventListener('click', () => {
            count++;
            const row = document.createElement('tr');
            row.classList.add('table__body')
            row.innerHTML = `
            <td>
                <input name="name${count}" type="text" required class="table__name input">
            </td>
            <td>
                <select name="post${count}" id="#" class="input">
                    <option value="1">менеджер</option>
                    <option value="1">аналитик</option>
                    <option value="1">программист</option>
                    <option value="1">юрист</option>
                </select>
            </td>
            <td>
                <input name="age${count}" type="text" required class="table__age input">
            </td>
            <td>
                <input name="text${count}" type="text" class="input">
            </td>
            `;
            table.appendChild(row);
    
            if (table.childNodes.length >= 3) {
                delBtn.style.display = 'block';
            } 
        });
    };

    addLineTable();

    const deleteLineTable = () => {
        delBtn.addEventListener('click', () => {
            table.lastChild.remove();
            if (table.childNodes.length <= 2) {
                delBtn.style.display = 'none';
            } 
        });
    };

    deleteLineTable();
};

export default addDelRow;