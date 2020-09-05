
const modals = ()=> {

    function bindModal(selectorModal, selectorTriggers, selecttorClose, closeClickOverlay = true, requiredInputSeklector = false){

        const elModal = document.querySelector(selectorModal),
                triggers = document.querySelectorAll(selectorTriggers),
                close = document.querySelector(selecttorClose),
                windows = document.querySelectorAll('[data-modal]');
        let requiredInput = [{value: true}];
        if (requiredInputSeklector) {
            requiredInput = document.querySelectorAll(requiredInputSeklector);
        }

        function checkValue(elem){
            let check;
             elem.forEach((input)=>{
               if( input.value){
                   check = true;

               } else {
                check = false;
                input.style.border = '1px solid red';
               }
            });
            return check;
        }
                
                
        triggers.forEach((trigger)=> {
            trigger.addEventListener('click', (e)=> {
                if(e.target && checkValue(requiredInput) ) {
                    windows.forEach(window=> {
                        closeModal(window);
                    });
                    e.preventDefault();
                    showModal(selectorModal);
                }
                

            });
        });

        close.addEventListener('click', function(e) {
            if(e.target) {
                e.preventDefault();
                console.log('ok');
                closeModal(selectorModal);
            }
        });


        if(closeClickOverlay){
            elModal.addEventListener('click', (e)=> {
                if(e.target === elModal) {
                    closeModal(selectorModal);
                }
            });
        }
        

        document.addEventListener('keyup',  (event)=> {
            if(event.key == 'Escape') {
                closeModal(selectorModal);
            }
        });

        
   





    }

    function closeModal(Modal) {
        if(typeof(Modal)== 'string'){      
            Modal = document.querySelector(Modal);
        }

        Modal.classList.remove('show');
        Modal.classList.add('hide');
        document.body.classList.remove('modal-open');
    }

    function showModal(selectorModal) {
        const elModal = document.querySelector(selectorModal);
        elModal.classList.remove('hide');
        elModal.classList.add('show');
        document.body.classList.add('modal-open');

    }


    // setTimeout(() => {
    //     showModal('.popup');
    // }, 60000);
    
    bindModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close');
    bindModal('.popup', '.phone_link', '.popup .popup_close');



    // popup_calc  Modal

    bindModal('.popup_calc', '.popup_calc_btn', '.popup_calc_close', false, );
    bindModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false, '.popup_calc .form-control');
    bindModal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', false );


};
export default modals;