import postData from "../services/postData";

const forms = () => {

    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log(form);
    
        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        postData('http://localhost:3000/requests', json)
        .then(data => {
            console.log(data);
        }).catch(() => {
            console.log('error')
        }).finally(() => {
            document.body.style.overflow = '';
            form.reset();
        });
    });
};

export default forms;