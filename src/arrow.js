
export function openMenu () {
    const arrowBtn = document.querySelector("#arrowBtn");
    const menuItems = document.querySelector('#menuItems');
    
    arrowBtn.addEventListener("click", () => {
        if (menuItems.style.display === 'none') {
            menuItems.style.display = 'block';
        } else {
            menuItems.style.display = 'none';
        }

    })

};


const closeMenu = () => {

}