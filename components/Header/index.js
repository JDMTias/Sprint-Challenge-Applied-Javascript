// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  function element(tag) {
    return document.createElement(tag);
  }

  const headerCont = element("div");
  const date = element("span");
  const title = element("h1");
  const temp = element("span");

  function addChild(parent, child) {
    return parent.appendChild(child);
  }

  addChild(headerCont, date);
  addChild(headerCont, title);
  addChild(headerCont, temp);

  function addClass(location, name) {
    return location.classList.add(name);
  }

  addClass(headerCont, "header");
  addClass(date, "date");
  addClass(temp, "temp");

  date.textContent = "March 28, 2019";
  title.textContent = "Lambda Times";
  temp.textContent = "98";

  return headerCont;
}

console.log(Header());

function selector(selector) {
  return document.querySelector(selector);
}

const headerBox = selector(".header-container");

headerBox.appendChild(Header());
