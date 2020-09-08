
import slider from './modules/slider';
import modals from'./modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

document.addEventListener('DOMContentLoaded', ()=>{
    const modalState = {};
    slider();
    modals();
    tabs();
    forms(modalState);
    changeModalState(modalState);
    timer('2020-10-06');
    images();
});
