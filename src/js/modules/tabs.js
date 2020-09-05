
const tabs = ()=> {
    function bindTab(btnsSelector, btnsParentSelector, constentSelector, activeClass, inline) {
        const tabBtns = document.querySelectorAll(btnsSelector),
                tabBtnsParent = document.querySelector(btnsParentSelector),
                tabContent =  document.querySelectorAll(constentSelector);

        tabBtnsParent.addEventListener('click', (e)=> {
            if(e.target) {
                e.preventDefault();
                if(e.target.closest(btnsSelector)) {
                    
                    const tabBtn = e.target.closest(btnsSelector);
                    showTabByBtn(tabBtn);
                }
            }
        });

        function showTabByBtn(btn) {
            
            let namberTab;
            tabBtns.forEach((item, n)=> {
                if (btn == tabBtns[n] ) {
                    namberTab = n;
                }
                if(activeClass) {
                    item.classList.remove(activeClass);
                }
                // item.style.transition = 'all .3s';
                
            });

            if(activeClass) {
                btn.classList.add(activeClass);
            }
           

            tabContent.forEach((item)=> {
                

                if(inline) {
                    item.style.display = '';
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });

            

            

            if(inline) {
                tabContent[namberTab].style.display = 'inline';
            } else {
                tabContent[namberTab].classList.remove('hide');
                tabContent[namberTab].classList.add('show');
            }
        }

        showTabByBtn(tabBtns[0]);


    }
    bindTab('.glazing_block', '.glazing_slider', '.glazing_content', 'active');
    bindTab('.decoration_item .no_click', '.decoration_slider', '.decoration_content > div > div', 'after_click');
    bindTab('.balcon_icons_img', '.balcon_icons', '.big_img  img', 'do_image_more', true);
};

export default tabs;

