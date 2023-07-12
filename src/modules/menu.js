import { createHeader } from "./header/header";
import { addContactButton } from "./header/buttons/contactButton";
import { addHomeButton } from "./header/buttons/homeButton";

const MenuPage = () => {
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu";

  const menuHeader = createMenuHeader(); 
  const menuListContainer = createMenuListContainer();

  menuContainer.appendChild(menuHeader.get());
  menuContainer.appendChild(menuListContainer);
  
  return menuContainer;
}

const createMenuHeader = () => {
  const menuHeader = createHeader();

  addHomeButton(menuHeader);
  addContactButton(menuHeader);

  return menuHeader;
}

const createMenuListContainer = () => {
  const menuListContainer = document.createElement("div");
  menuListContainer.id = "menu-list-container";
  const menuList = createMenuList();
  menuListContainer.appendChild(menuList);

  return menuListContainer;
}

const createMenuList = () => {
  const menuList = document.createElement("div");
  menuList.id = "menu-list";

  addMenuItemsToList(menuList);

  return menuList;
}

const addMenuItemsToList = (container) => {
  let menuItems = [];
  for (let i=0; i<6; i++) {
    const menuItem = createMenuItem(i);
    menuItems.push(menuItem);
    container.appendChild(menuItems[i].getNode());
  }
  
  menuItems[0].addItemName("Vegetarian");
  menuItems[0].addItemImageCredit(
    "Laure Noverraz",
    "Unsplash",
    "https://unsplash.com/fr/s/photos/veggie-pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");
    
  menuItems[1].addItemName("Margherita");
  menuItems[1].addItemImageCredit(
    "KamranAydinov",
    "Freepik",
    "https://www.freepik.com/free-photo/pizza-margarita-table_6087619.htm#query=margherita&position=0&from_view=search&track=sph");

  menuItems[2].addItemName("Sicilian");
  menuItems[2].addItemImageCredit(
    "Parker Hilton",
    "Unsplash",
    "https://unsplash.com/fr/s/photos/Pizza-sicilienne?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");

  menuItems[3].addItemName("Hawaiian");
  menuItems[3].addItemImageCredit(
    "stockgiu",
    "Freepik",
    "https://www.freepik.com/free-ai-image/pizza-with-pineapple-it_43023563.htm#query=margherita&position=13&from_view=search&track=sph");

  menuItems[4].addItemName("Pepperoni");
  menuItems[4].addItemImageCredit(
    "azerbaijan_stockers",
    "Freepik",
    "https://fr.freepik.com/photos-gratuite/tranche-pizza-au-pepperoni-classique-rouleaux-poivron-vert_5449364.htm#query=pizza%20aux%20pepperoni&position=1&from_view=search&track=ais");

  menuItems[5].addItemName("Quattro Formaggi");
  menuItems[5].addItemImageCredit(
    "KamranAydinov",
    "Freepik",
    "https://fr.freepik.com/photos-gratuite/pizza-quatre-fromages-table_7218711.htm#query=pizza%20aux%204%20fromages&position=24&from_view=keyword&track=ais");

}

const createMenuItem = (index) => {

  const createMenuItemContainer = (index) => {
    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.add("menu-item");
    menuItemContainer.id = `i-${index}`;
    return menuItemContainer;
  }

  const menuItemContainer = createMenuItemContainer(index);
  
  const addItemName = (itemName) => {
    const itemNameTitle = document.createElement("h3");
    itemNameTitle.innerText = itemName;
    menuItemContainer.appendChild(itemNameTitle);
  }

  const addItemImageCredit = (author,website,link) => {
    const creditText = document.createElement("p");
    const photoLink = document.createElement("a");
    const websiteText = document.createTextNode(` on ${website}`);

    creditText.innerText = "Photo by ";
    photoLink.href = link;
    photoLink.innerText = author;
    creditText.appendChild(photoLink);
    creditText.appendChild(websiteText);

    menuItemContainer.appendChild(creditText);
  }

  const getNode = () => menuItemContainer;

  return {
    getNode,
    addItemName,
    addItemImageCredit
  };
}

export {
  MenuPage
};