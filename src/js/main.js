import checkInputs from './modules/checkInputs';
import addDelRow from './modules/addDelRow';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    checkInputs();
    addDelRow();
    forms();
});