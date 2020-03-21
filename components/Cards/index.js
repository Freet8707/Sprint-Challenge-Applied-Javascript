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
class Card {
    constructor(headline, url, name){
        this.cardDiv = document.createElement("div")
        this.headLineDiv = document.createElement("div")
        this.authorDiv = document.createElement("div")
        this.imgDiv = document.createElement("div")
        this.img = document.createElement("img")
        this.nameSpan = document.createElement("span")

        this.cardDiv.classList.add("card")
        this.headLineDiv.classList.add("headline")
        this.authorDiv.classList.add("author")
        this.imgDiv.classList.add("img-container")

        this.headLineDiv.textContent = headline
        this.img.setAttribute("src", url)
        this.nameSpan.textContent = `By ${name}`

        this.cardDiv.appendChild(this.headLineDiv)
        this.imgDiv.appendChild(this.img)
        this.authorDiv.appendChild(this.imgDiv)
        this.authorDiv.appendChild(this.nameSpan)
        this.cardDiv.appendChild(this.authorDiv)

        const domAttach = document.querySelector(".cards-container")
        return domAttach.appendChild(this.cardDiv)
        // console.log(this.cardDiv)
    }
} 

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response)
        return response.data.articles.javascript.forEach((element) => {
            let javaCard = new Card(element.headline, element.authorPhoto, element.authorName)
        })
    })
    axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        return response.data.articles.bootstrap.forEach((element) => {
            let bootCard = new Card(element.headline, element.authorPhoto, element.authorName)
        })
    })
    axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        return response.data.articles.technology.forEach((element) => {
            let techCard = new Card(element.headline, element.authorPhoto, element.authorName)
        })
    })
    axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        return response.data.articles.jquery.forEach((element) => {
            let jQueryCard = new Card(element.headline, element.authorPhoto, element.authorName)
        })
    })
    axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        return response.data.articles.node.forEach((element) => {
            let nodeCard = new Card(element.headline, element.authorPhoto, element.authorName)
        })
    })
// let jChan = new Card("Hey", "https://heresjChan.com", "the great jChan")

// console.log(jChan)
