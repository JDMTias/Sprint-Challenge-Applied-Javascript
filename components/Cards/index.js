// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function articleCont(data) {
  function element(tag) {
    return document.createElement(tag);
  }

  const card = element("div");
  const headline = element("div");
  const author = element("div");
  const imageCont = element("div");
  const authorImg = element("img");
  const name = element("span");

  function addChild(parent, child) {
    return parent.appendChild(child);
  }

  addChild(card, headline);
  addChild(card, author);
  addChild(author, imageCont);
  addChild(imageCont, authorImg);
  addChild(author, name);

  function addClass(location, tag) {
    return location.classList.add(tag);
  }

  addClass(card, "card");
  addClass(headline, "headline");
  addClass(imageCont, "img-container");
  addClass(author, "author");

  headline.textContext = data.headline;
  authorImg.src = data.authorPhoto;
  name.textContext = `By ${data.authorname}`;

  return card;
}
