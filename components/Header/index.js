// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector(".header-container")

function Header(date, title, temp) {
    console.log("header component")
    const header = document.createElement("div")
    const dateSpan = document.createElement("span")
    const titleH1 = document.createElement("h1")
    const temperature = document.createElement("span")

    header.appendChild(dateSpan)
    header.appendChild(titleH1)
    header.appendChild(temperature)

    dateSpan.textContent = date 
    titleH1.textContent = title
    temperature.textContent = temp

    header.classList.add("header")
    temperature.classList.add("temp")

    headerContainer.appendChild(header)

    return
}

Header("May 15, 2020", "Lambda Times", "98°")