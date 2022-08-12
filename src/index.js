import { renderHeader, renderFooter, renderMain, resetMain } from "./pageLoad.js";
import { renderHomeTab, renderMenuTab, renderContactTab } from "./tabs.js";

export { resetMain };

// From pageLoad.js
renderHeader();
renderMain();
renderFooter();

// From tabs.js
renderHomeTab();
renderMenuTab();
renderContactTab();


// Removes rendered content and replace it with content of the clicked tab.
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

