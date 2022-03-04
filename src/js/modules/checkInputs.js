const checkInputs = () => {
    const table = document.querySelector('.table');

    table.addEventListener('input', (event) => {
        if (event.target.classList.contains('table__name')) {
            event.target.value = event.target.value.replace(/\d/, '');
        } else if (event.target.classList.contains('table__age')) {
            event.target.value = event.target.value.replace(/\D/, '');
        }
    });
};

export default checkInputs;