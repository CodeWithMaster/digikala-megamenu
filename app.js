/*
Code With Master Academy
*/
// get the all menu list in the mega menu
const menuLists = document.querySelectorAll(".mega-menu .menu-list ul li");
let oldElement;
// menu in menu list eventListener
menuLists.forEach((element) =>
  element.addEventListener("mouseover", (e) => {
    // this element => ( menu list item )
    const thisElement = e.target;
    // get the [data-target] attribute in menu list
    const attrName = thisElement.getAttribute("data-target");
    // get the all categorys
    const categorys = document.querySelectorAll(".category");
    // iterating the categorys list and removed the active class from all category in categorys
    categorys.forEach((element) => element.classList.remove("active"));
    // iterating the categorys and checking the classList for displayed the this category
    categorys.forEach((element) =>
      element.classList.contains(attrName)
        ? element.classList.add("active")
        : null
    );
    // this menu list added the active class
    thisElement.classList.add("active");
    // if oldElement is exist so removing the active class
    oldElement ? oldElement.classList.remove("active") : null;
    oldElement = thisElement;
  })
);
// @CodeWithMaster💜
