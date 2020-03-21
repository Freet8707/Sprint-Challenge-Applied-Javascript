// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
function tabCreate(element){
    this.tabDiv = document.createElement("div")
    this.tabDiv.classList.add("tab")

    this.domTab = document.querySelector(".topics")
    this.tabDiv.textContent = element
    this.domTab.appendChild(this.tabDiv)
}

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        // console.log(response)
        response.data.topics.forEach(element => {
            return tabCreate(element)
        })
        // console.log(document.querySelector(".topics"))
    })
