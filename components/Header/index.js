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
    const headerDiv = document.createElement('div');
    const spanDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const spanTemp = document.createElement('span')

    headerDiv.appendChild(spanDate);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(spanTemp);

    headerDiv.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');

    spanDate.textContent = 'SMARCH 28, 2019';
    headerTitle.textContent = 'Lambda Times';
    spanTemp.textContent = '98';

    return headerDiv

}

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());