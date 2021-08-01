const menu = document.getElementById('menu');
const body = document.getElementById('body');


const expandSidebar = () => {
    const isSidebarExpanded = body.classList.contains('sidebar-expanded');
    if(isSidebarExpanded){
        body.classList.add('sidebar-collapsed');
        body.classList.remove('sidebar-expanded');
        return;
    }
    body.classList.add('sidebar-expanded');
    body.classList.remove('sidebar-collapsed');
};
     
menu.onclick = () => expandSidebar();


// Handling show and hide dropdown items
const navItems = document.getElementsByClassName('header-nav-item');
const dropdownHandler = (e) => {
    
    if(e.currentTarget.classList.contains('open')){
        e.currentTarget.classList.remove('open');
        return;
    }
    for(i=0; i < navItems.length; i++){
        if(navItems[i].classList.contains('open')){
            navItems[i].classList.remove('open');
        }
    }
    e.currentTarget.classList.add('open');
};

for(i=0; i < navItems.length; i++){
    navItems[i].addEventListener('click', dropdownHandler);
};


// ********Handling show and hide Submenu***** //

const subMenu = document.getElementsByClassName('sidebar-nav-menu');
const hideShowSubmenu = (e) => {
    
    if(e.currentTarget.classList.contains('active')){
        e.currentTarget.classList.remove('active');
        return;
    }

    for(i=0; i < subMenu.length; i++){
        if(subMenu[i].classList.contains('active')){
            subMenu[i].classList.remove('active');
        }
    }
    e.currentTarget.classList.add('active');
};

for(let i=0; i < subMenu.length; i++){
    subMenu[i].addEventListener('click', hideShowSubmenu);
};


// ############ Handling item hide and show ########//

const hideItem = (id) => {
    const idName = document.getElementById(id);
    idName.style.display = 'none'; 
};

// ******** Collapse Short details Item ****** //

const collapseItem = (id) => {
    const idName = document.getElementById(id);
    idName.classList.toggle('collapsed');
};


