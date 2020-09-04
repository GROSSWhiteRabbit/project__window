const modals = ()=> {

    function bindModal(selectorModal, selectorTriggers, selecttorClose){

        const elModal = document.querySelector(selectorModal),
                triggers = document.querySelectorAll(selectorTriggers),
                close = document.querySelector(selecttorClose);
                
                
        triggers.forEach((trigger)=> {
            trigger.addEventListener('click', (e)=> {
                if(e.target) {
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

        elModal.addEventListener('click', (e)=> {
            if(e.target === elModal) {
                closeModal(selectorModal);
            }
        });

        document.addEventListener('keyup',  (event)=> {
            if(event.key == 'Escape') {
                closeModal(selectorModal);
            }
        });

        
   




        function closeModal(selectorModal) {
            const elModal = document.querySelector(selectorModal);
            elModal.classList.remove('show');
            elModal.classList.add('hide');
            document.body.classList.remove('modal-open');
        }
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

};
export default modals;