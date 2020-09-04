const tabs = ()=> {
    function bindTab(btnsSelector, btnsParentSelector, constentSelector, activeClass) {
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
                
            });

            if(activeClass) {
                btn.classList.add(activeClass);
            }
           

            tabContent.forEach((item)=> {
                item.classList.remove('show');
                item.classList.add('hide');
            });


            tabContent[namberTab].classList.remove('hide');
            tabContent[namberTab].classList.add('show');

        }

        showTabByBtn(tabBtns[0]);


    }
    bindTab('.glazing_block', '.glazing_slider', '.glazing_content', 'active');
    bindTab('.decoration_item .no_click', '.decoration_slider', '.decoration_content > div > div', 'after_click');

};

export default tabs;