// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsAppend = document.querySelector(".cards-container")

function CardCreator(headline, authorImg, authorName) {
    const card = document.createElement("div")
    const headLine = document.createElement("div")
    const authorDiv = document.createElement("div")
    const imgHold = document.createElement("div")
    const authImg = document.createElement("img")
    const authName = document.createElement("span")

    card.appendChild(headLine)
    card.appendChild(authorDiv)
    authorDiv.appendChild(imgHold)
    authorDiv.appendChild(authName)
    imgHold.appendChild(authImg)

    card.classList.add("card")
    headLine.classList.add("headline")
    authorDiv.classList.add("author")
    imgHold.classList.add("img-container")   

    headLine.textContent = headline
    authImg.setAttribute("src", authorImg)
    authName.textContent = `By: ${authorName}`

    cardsAppend.appendChild(card)

    return
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response)
        const bootstrapArticles = response.data.articles.bootstrap
        const javascriptArticles = response.data.articles.javascript
        const jqueryArticles = response.data.articles.jquery
        const nodeArticles = response.data.articles.node
        const techArticles = response.data.articles.technology

        bootstrapArticles.forEach(element => {
            CardCreator(element.headline, element.authorPhoto, element.authorName)
        })
        javascriptArticles.forEach(element => {
            CardCreator(element.headline, element.authorPhoto, element.authorName)
        })
        jqueryArticles.forEach(element => {
            CardCreator(element.headline, element.authorPhoto, element.authorName)
        })
        nodeArticles.forEach(element => {
            CardCreator(element.headline, element.authorPhoto, element.authorName)
        })
        techArticles.forEach(element => {
            CardCreator(element.headline, element.authorPhoto, element.authorName)
        })
    })
    .catch(err => {
        console.log(err)
    })