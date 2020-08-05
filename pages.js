let pageNumber = 0

const pages = [
{ copy: "Sensual", background: "#edc7a9", circle: "#3e78ed", image: "matt_berry-620x860.jpg"},
{copy: "Very knowledgeable on pigeons", background: "#d3c7f3", circle: "#f7fe00", image: "ajx251-packshot-matt-berry.jpg"},
{copy:"A pilot", background: "#faffb8", circle: "#b472e6", image: "mattberrypa041110.jpg"}, 
{copy:"Loving son", background: "#a1fffe", circle: "#e34a47", image: "maxresdefaultphater.jpg"}
]

// "Knows a lot about peagons",
  //"Sensual",
  //"A piliot",
 // "Loves his father",

const nextTag = document.querySelector ("footer img.next")
const previousTag = document.querySelector ("footer img.prev")
const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")
const imageTag = document.querySelector("section img.centre_image")
const bodyTagmobile = document.querySelector("main")



const next = function (){
  pageNumber = pageNumber + 1
  
  if (pageNumber > pages.length - 1){
      pageNumber = 0
      }
  
  updateSection()
}

const previous = function () {
  pageNumber = pageNumber - 1
  
  if (pageNumber < 0){
      pageNumber = pages.length - 1
      }
 
  updateSection()
}

const updateSection = function (){
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
  imageTag.src = pages[pageNumber].image
  bodyTagmobile.style.backgroundColor = pages[pageNumber].background
}
nextTag.addEventListener("click", function (){
 next()  
})

previousTag.addEventListener("click", function (){
 previous()  
})




