import { renderHeader, renderFooter, renderMain, resetMain } from "./pageLoad.js";
import { renderHomeTab, renderMenuTab, renderContactTab } from "./tabs.js";
import { createDish } from "./menu.js";


// From pageLoad.js
renderHeader();
renderMain();
renderFooter();


// From tabs.js
renderHomeTab();
renderMenuTab();
renderContactTab();

// From menu.js
createDish('Tonkatsu', '$20', 'Coated slices of pork with panko (bread crumbs) fryed in oil, accompanied with rice.')
createDish('Ramen', '$15', 'Noodles served in meat-based broth, flavored with soy sauce or miso, with sliced pork, nori (dried seaweed), menma, and scallions.')
createDish('Nigiri pieces', '$20', 'Pieces of salmon placed on hand-pressed vinegared rice. A classic.')



// Delete rendered content and replace it with content of the clicked tab.
const headerItems = document.querySelectorAll('.headerItem');

headerItems.forEach((item) => {
    item.addEventListener('click', switchTab);
})

function switchTab(event) {
    switch (event.target.id) {
        case 'home':
            resetMain()
            renderHomeTab()
            break;
        case 'menu':
            resetMain()
            renderMenuTab()
            break;
        case 'contact':
            resetMain()
            renderMenuTab()
            break;
    }
}