const words = [
"Frontend Developer",
"AI Student",
"Web Development Learner"
]

let i=0
let j=0
let currentWord=""
let isDeleting=false

function type(){

currentWord = words[i]

if(isDeleting){
j--
}else{
j++
}

document.getElementById("typing").textContent =
currentWord.substring(0,j)

if(!isDeleting && j===currentWord.length){
isDeleting=true
setTimeout(type,1000)
return
}

if(isDeleting && j===0){
isDeleting=false
i++
if(i===words.length){
i=0
}
}

setTimeout(type,120)

}

type()

const darkBtn = document.getElementById("darkBtn")

darkBtn.onclick = () => {
document.body.classList.toggle("dark")
}
