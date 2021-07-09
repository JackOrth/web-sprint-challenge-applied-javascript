// import axios from "axios"

const articleArrays = {
  "articles": {
      "javascript": [
          {
              "id": "1e4d8724-5973-4b5b-84d9-a30a3c5adb70",
              "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
              "authorPhoto": "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
              "authorName": "SIR RUFF'N'STUFF"
          },
          {
              "id": "553e2401-c95d-4029-89b8-fc6bdb60ae5e",
              "headline": "Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences",
              "authorPhoto": "https://tk-assets.lambdaschool.com/a9471235-ed71-4b11-ae15-5a4fa1151d30_bones.jpg",
              "authorName": "BONES R. LIFE"
          },
          {
              "id": "9c2ed89e-7150-4cd6-a5c2-4a4f3d6932c8",
              "headline": "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",
              "authorPhoto": "https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg",
              "authorName": "PUPPER S. DOGGO"
          },
          {
              "id": "b3af02ec-5733-4a14-8876-5db708d20051",
              "headline": "Typescript: Ten Things you Should Know Before Building Your Next Angular Application",
              "authorPhoto": "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
              "authorName": "SIR RUFF'N'STUFF"
          }
      ],
      "bootstrap": [
          {
              "id": "5efa1378-c91f-49eb-9955-02e477c95920",
              "headline": "Bootstrap 5: Get a Sneak Peak at all the New Features",
              "authorPhoto": "https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg",
              "authorName": "FIDO WALKSALOT"
          },
          {
              "id": "d03affc6-b06e-4b4a-9909-3981c7cb8389",
              "headline": "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)",
              "authorPhoto": "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
              "authorName": "MAX GOODBOYE"
          },
          {
              "id": "a85f88d3-0845-426d-9f02-930daa5c9b34",
              "headline": "The Hottest New Bootstrap 4 Components Every Developer Needs to Know About",
              "authorPhoto": "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
              "authorName": "MAX GOODBOYE"
          }
      ],
      "technology": [
          {
              "id": "be3dc9bd-52a0-4874-97d8-99223b937da9",
              "headline": "AI: What Are the Ethical Ramifications of the Future?",
              "authorPhoto": "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
              "authorName": "MAX GOODBOYE"
          },
          {
              "id": "1749a430-f470-4c23-be75-fe736a5409c2",
              "headline": "AR or VR: How We Will See the World Through a Digital Lense",
              "authorPhoto": "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
              "authorName": "MAX GOODBOYE"
          },
          {
              "id": "3a80aa8b-644a-4382-a544-f1f68cb35cb5",
              "headline": "Quantum Computing: Where we Are Now, and Where We Will Be Very Soon",
              "authorPhoto": "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
              "authorName": "MAX GOODBOYE"
          }
      ],
      "jquery": [
          {
              "id": "6945439f-363a-49b2-93b5-d50c97a717b7",
              "headline": "History of Javascript Libraries: from jQuery to React",
              "authorPhoto": "https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg",
              "authorName": "PUPPER S. DOGGO"
          },
          {
              "id": "43410bfb-e9cd-4a56-9022-315003b727e1",
              "headline": "jQuery Animations: When and Where to Use Them, and Not CSS",
              "authorPhoto": "https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg",
              "authorName": "FIDO WALKSALOT"
          },
          {
              "id": "68fd787a-f5bc-4563-bbba-c11dd5818927",
              "headline": "Why I Use jQuery in Every Application I Create and Why You Should Too",
              "authorPhoto": "https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg",
              "authorName": "FIDO WALKSALOT"
          }
      ],
      "node": [
          {
              "id": "75e89d6c-e4f4-411b-8855-bef0b8ed3508",
              "headline": "Node.js in 2018: Which Framework? Express, Sails, Hapi?",
              "authorPhoto": "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
              "authorName": "SIR RUFF'N'STUF"
          },
          {
              "id": "04468917-d408-4e2d-804f-143474f11d29",
              "headline": "MongoDB: NoSQL vs. SQL, the Debate Continues..",
              "authorPhoto": "https://tk-assets.lambdaschool.com/a9471235-ed71-4b11-ae15-5a4fa1151d30_bones.jpg",
              "authorName": "BONES R. LIFE"
          }
      ]
  }
}

console.log(articleArrays["articles"]["javascript"][0]["authorPhoto"])
const Card = (article) => {
  // TASK 5
  
  const card = document.createElement('div')
  const headLine = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const image = document.createElement('img')
  const authorName = document.createElement('span')

  card.classList.add('card')
  headLine.classList.add('headline')
  card.appendChild(headLine)
  author.classList.add('author')
  card.appendChild(author)
  imgContainer.classList.add('img-container')
  author.appendChild(imgContainer)
  author.appendChild(authorName)
  imgContainer.appendChild(image)

  headLine.textContent = articleArrays["articles"]["javascript"][0]["headline"]
  image.src = articleArrays["articles"]["javascript"][0]["authorPhoto"]
  authorName.textContent = articleArrays["articles"]["javascript"][0]["authorName"]

  const log = () => {
    console.log(["articles"]["javascript"][0]["headline"])
  }
  card.addEventListener('click', log)
  
  
  console.log(card)
  return card
}


const newURL = "http://localhost:5000/api/articles"
const cardsContainer = document.querySelector(".cards-container")
const cardAppender = (selector) => {
  // TASK 6
  axios.get(newURL)
     .then(res =>{
     selector.appendChild(Card(res.data))
   })
     .catch(err => {
     console.log(err)
   })
  .finally(() => console.log('done'))
}
cardAppender(cardsContainer)




const cardsContainer2 = document.querySelector(".cards-container2")
const secondCard = () => {
  const card2 = document.createElement('div')
  const headLine2 = document.createElement('div')
  const author2 = document.createElement('div')
  const imgContainer2 = document.createElement('div')
  const image2 = document.createElement('img')
  const authorName2 = document.createElement('span')

  cardsContainer2.appendChild(card2)
  card2.classList.add('card')
  headLine2.classList.add('headline')
  card2.appendChild(headLine2)
  author2.classList.add('author')
  card2.appendChild(author2)
  imgContainer2.classList.add('img-container')
  author2.appendChild(imgContainer2)
  author2.appendChild(authorName2)
  imgContainer2.appendChild(image2)

  headLine2.textContent = articleArrays["articles"]["javascript"][1]["headline"]
  image2.src = articleArrays["articles"]["javascript"][1]["authorPhoto"]
  authorName2.textContent = articleArrays["articles"]["javascript"][1]["authorName"]

  const log = () => {
    console.log(["articles"]["javascript"][1]["headline"])
  }
  card2.addEventListener('click', log)

  return card2
}
secondCard()


export { Card, cardAppender }


// I'm sorry the code isn't what you had intended for it to be. I realize I need for practice on how to pass the data through to the elements. The way I did it(while I know its wrong), is the next best way I felt comfortable doing in order to get you the webpage looking like the one you requested. I'm going to continue to practice and work on the area that I am struggling with, and I hope I can show that and still have a chance to get through this unit. Thanks.