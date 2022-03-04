const checkInputs = () => {
    const numInput = document.querySelector('input[name="name"]');
    const strInput = document.querySelector('input[name="age"]');

    numInput.addEventListener('input', () => {
        numInput.value = numInput.value.replace(/\d/, '');
    });

    strInput.addEventListener('input', () => {
        strInput.value = strInput.value.replace(/\D/, '');
    });
};

export default checkInputs;