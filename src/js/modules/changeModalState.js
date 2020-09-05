

function changeModalState(modalState){
    const sizeInputs = document.querySelectorAll('.popup_calc_content .form-control'),
    checkBoxs = document.querySelectorAll('.popup_calc_profile_content .checkbox'),
    formsWindow = document.querySelectorAll('.balcon_icons_img'); 

    sizeInputs.forEach((input)=>{
        input.addEventListener('input', ()=> {
            input.value = input.value.replace(/\D/g, '');
            input.style.border = '';
        });
    });

    checkBoxs.forEach((checkBox, i)=>{
        checkBox.addEventListener('input', ()=> {
            checkBoxs.forEach((Box, k)=>{
                if (i!=k){
                    checkBoxs[k].checked = false;
                }
                
            });
        });

    });
    
    formsWindow.forEach((form, i)=> {
        form.addEventListener('click', ()=>{
            modalState.formWindow = i;
        });
    });
}

export default changeModalState;