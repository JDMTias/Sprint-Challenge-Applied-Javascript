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

function articleMaker (obj) {

    const cardDiv = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgContainerDiv = document.createElement('div')
    const image = document.createElement('img')
    const authorName =doucment.createElement('span')

    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imgContainerDiv)
    imgContainerDiv.appendChild(image)
    authorDiv.appendChild(authorName)

    cardDiv.classList.add('card')
    headlineDiv.classList.add('headline')
    imageContainerDiv.classList.add('img-container')

    headlineDiv.textContent = obj.headline
    image.src = obj.authorPhoto
    authorName.textContent = `By ${obj.authorName}`


    return cardDiv

}

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        console.log(response)
        const headlineTitle = response.data.articles
        console.log(headlineTitle)
        // for (let i=0; i=headlineTitle.articles.length; i++) {
        //     var title = headlineTitle.articles[i].headline
        //     return title
        // }
        headlineTitle.forEach(titles => {
            console.log(titles)
            const articlesTitles = articleMaker(titles)
        });
 
    

    })

    .catch(error => {
        console.log(error)
    })