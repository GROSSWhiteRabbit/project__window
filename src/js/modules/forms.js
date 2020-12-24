
 const forms  = ( modalState)=>{
    function bindForm(form) {
        const massegeStatus = {
            loading: 'Loading...',
            ok: 'OK!!',
            fail: 'Oops!! Failed!!'
        };

        form.user_phone.addEventListener('input', ()=>{
            form.user_phone.value =  form.user_phone.value.replace(/\D/g, '');
        });

        form.addEventListener('submit', (e)=> {
            e.preventDefault();
                const data = new FormData(form),
                textStatus = document.createElement('p');
                textStatus.classList.add('status');
                if (form.getAttribute('id') === 'popup_form' ) {
                    data.set('window', modalState.formWindow);
                }
    
    
                form.append(textStatus);
                textStatus.textContent =  massegeStatus.loading;
                postDate(
                    // 'http://localhost:3000/POST',
                    'assets/server.php',
                    JSON.stringify(Object.fromEntries(data.entries())))
                .then(function(res) {
                    console.log(res)
                    textStatus.textContent =  massegeStatus.ok;
                })
                .catch(()=> {
                    textStatus.textContent =  massegeStatus.fail;
                })
                .finally(()=>{
                    form.reset();
                    setTimeout(()=>{
                        textStatus.remove();
                    }, 2000);
                    form.user_phone.style.border = '';
                });
            
            
        });
        
    async function postDate(url, body) {
            const response = await fetch(url, {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'}, 
                                            body
                                        });
            if (!response.ok){
                console.error(`POST Erorr url:${url}  status:${response.status}`);
            }
                console.log(response);
            return await response.text();
            
        }





    }
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => bindForm(form));

 }; 
   

export default forms;