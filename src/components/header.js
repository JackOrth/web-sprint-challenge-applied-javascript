const Header = (/*title, date, temp*/) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div')
  header.classList.add("header")
  const spanOne = document.createElement('span')
  const headOne = document.createElement('h1')
  const spanTwo = document.createElement('span')

  header.appendChild(spanOne)
  spanOne.classList.add("data")
  spanOne.textContent = "July 9, 2021"

  header.appendChild(headOne)
  headOne.textContent = "Lambda Times"
  
  header.appendChild(spanTwo)
  spanTwo.classList.add("temp")
  spanTwo.textContent = "75°"
  console.log(header)
  return header
}

const headerContainer = document.querySelector(".header-container")
const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  headerContainer.appendChild(Header(selector))

}

export { Header, headerAppender }
