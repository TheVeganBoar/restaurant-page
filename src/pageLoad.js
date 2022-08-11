const contentDiv = document.querySelector('#content'); 

const container = document.getElementById("content");

export function renderHeader() {
  const header = document.createElement("div");
  contentDiv.appendChild(header);
  header.classList.add("header");

  const headerList = document.createElement("ul");

  header.appendChild(headerList);

  const homeItem = document.createElement("li");
  const menuItem = document.createElement("li");
  const aboutItem = document.createElement("li");

  homeItem.classList.add("headerItem");
  menuItem.classList.add("headerItem");
  aboutItem.classList.add("headerItem");

  homeItem.setAttribute("id", "home");
  menuItem.setAttribute("id", "menu");
  aboutItem.setAttribute("id", "about");

  headerList.appendChild(homeItem);
  headerList.appendChild(menuItem);
  headerList.appendChild(aboutItem);

  homeItem.textContent = "HOME";
  menuItem.textContent = "MENU";
  aboutItem.textContent = "ABOUT";
}

export function renderFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    contentDiv.appendChild(footer);
  
    const ramenText = document.createElement("p");
    const githubText = document.createElement("p");
    footer.appendChild(ramenText);
    footer.appendChild(githubText);
    
    ramenText.innerHTML =
    "Ramen is love. Ramen is life.";
    ramenText.classList.add("ramenText");
    
    githubText.innerHTML =
      "Created by <a href='https://github.com/TheVeganBoar'>The Vegan Boar</a>";
    githubText.classList.add("footerText");
  }