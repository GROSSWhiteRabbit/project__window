
import {showModal, closeModal} from './modal';


function images(){
    const popup = document.createElement('div'),
            img = document.createElement('img'),
          parentImages = document.querySelector('.works');


          popup.classList.add('popup');
          parentImages.append(popup);
          popup.append(img);
          img.classList.add('popup_img')

    parentImages.addEventListener('click', (e)=> {
        e.preventDefault();
        if (e.target && e.target.classList.contains('preview')){
            img.setAttribute('src', e.target.parentNode.getAttribute('href'));
            showModal(popup);

        }
    });
    popup.addEventListener('click', (e)=>{
        if (e.target && e.target == popup){
        closeModal(popup);
        }
    });

}

export default images;