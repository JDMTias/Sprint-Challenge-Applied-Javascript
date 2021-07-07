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
//<div class="card"><div class="headline">Why I Use jQuery in Every Application I Create and Why You Should Too</div><div class="author"><div class="img-container"><img src="./assets/fido.jpg"></div><span>By FIDO WALKSALOT</span></div></div>
// Use your function to create a card for each of the articles and add the card to the DOM.

function articleMaker(obj) {
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainerDiv = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainerDiv);
  imgContainerDiv.appendChild(image);
  authorDiv.appendChild(authorName);

  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  imgContainerDiv.classList.add("img-container");
  authorDiv.classList.add('author')

  headlineDiv.textContent = obj.headline;
  image.src = obj.authorPhoto;
  authorName.textContent = `By ${obj.authorName}`;

  return cardDiv;
}

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then((response) => {
    // console.log(response);
    const headlineTitle = response.data.articles;
    // console.log(headlineTitle);

    const subjectTitles = Object.keys(headlineTitle);
    // console.log(subjectTitles);

    subjectTitles.forEach((key) => {
      // console.log(key)
      const values = response.data.articles[key]
      values.forEach(stuff => {
        // console.log(stuff)
        const articles2 = articleMaker(stuff)
        // console.log(articles2)
        document.querySelector('.cards-container').appendChild(articles2)
      });
    
    });
  })

  .catch((error) => {
    console.log(error);
  });
