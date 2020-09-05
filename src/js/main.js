
import slider from './modules/slider';
import modals from'./modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

document.addEventListener('DOMContentLoaded', ()=>{
    const modalState = {};
    slider();
    modals();
    tabs();
    forms(modalState);
    changeModalState(modalState);
});
