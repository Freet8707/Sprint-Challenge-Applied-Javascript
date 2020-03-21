// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
function headerCreate(){
    this.header = document.createElement("div")
    this.h1 = document.createElement("h1")
    this.span = document.createElement("span")
    this.span2 = document.createElement("span")

    this.header.classList.add("header")
    this.span.classList.add("date")
    this.span2.classList.add("temp")

    this.header.appendChild(this.span)
    this.header.appendChild(this.h1)
    this.header.appendChild(this.span2)

    return this.header
} 

const headContain = document.querySelector(".header-container")
headContain.appendChild(headerCreate())
console.log(headContain)
// console.log(headerCreate())

//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// function Header() {}
