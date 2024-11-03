// Exercise 1

// const btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//     const newBtn = document.createElement("button")
//     newBtn.innerText = "new button"
//     newBtn.setAttribute("id", "btn")
//     document.body.appendChild(newBtn)
// })

// Exercise 2

// const box = document.getElementById("box");

// document.addEventListener("keydown", (e) => {
//   if (e.key == "q") {
//     box.style.backgroundColor = "red";
//   }
//   else if (e.key == "s") {
//     box.style.backgroundColor = "yellow";
//   }
//   else if (e.key == "d") {
//     box.style.backgroundColor = "black";
//     box.style.color = "white"
//   }
//   else if (e.key == "b") {
//     box.style.backgroundColor = "blue";
//   }
//   else{
//     alert("boshqa knopkani bosing!")
//   }
// });

// Exercise 3

// const randomBtn = document.getElementById("random-btn")

// randomBtn.addEventListener("click", () => {
//     const element = document.createElement("p")
//     const randomNumber = Math.floor(Math.random() * 100)
//     element.textContent = randomNumber;
//     document.body.appendChild(element)

//     const redValue =   Math.floor(Math.random() * 256)
//     const greenValue =   Math.floor(Math.random() * 256)
//     const blueValue =   Math.floor(Math.random() * 256)
//     const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
//     document.body.style.backgroundColor = rgbColor;
// })

// Exercise 4

// const colorBtn = document.getElementById("color-btn");
// let intervalId;

// function changeColor() {
//     const redValue = Math.floor(Math.random() * 256);
//     const greenValue = Math.floor(Math.random() * 256);
//     const blueValue = Math.floor(Math.random() * 256);
//     const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
//     document.body.style.backgroundColor = rgbColor;
// }

// function toggleColorChange() {
//     if (intervalId) {
//         clearInterval(intervalId)
//         intervalId = null;
//         colorBtn.innerText = "Change color"
//     }
//     else{
//         intervalId = setInterval(changeColor, 2000)
//         colorBtn.innerText = "Stop colors"
//     }
// }

// colorBtn.addEventListener("click", () => {
//     toggleColorChange()
// })

// Exercise  5

// const natureImg = document.getElementById("nature-img")
// const images = ["./images/nature1.png", "./images/nft-img1.svg", "./images/nft-img2.svg", "./images/subscription-img1.svg", "./images/subscription-img2.svg"];
// let index = 0;

// function changeImg() {
//     natureImg.src = images[index]

//     index++
//     if (index >= images.length) {
//         index = 0;
//     }
// }

// setInterval(changeImg, 2000)

// Game


const randomNumber = Math.floor(Math.random() * 10) + 1;
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback")
const text = document.getElementById("attempts")
let attempts = 5;
let userNumber;


        
submitBtn.addEventListener("click", () => {
    userNumber = parseInt(input.value);
  
    
  if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
      alert("Please enter a valid number between 1 and 10.");
      return;
  }
  
    if (userNumber === randomNumber) {
      feedback.innerText = "Uraa! Siz to'g'ri topdingiz!"
      
    }
  
    else if(userNumber < randomNumber){
      feedback.innerText = "Sizning soningiz kichkina"
      attempts--
      text.innerText = `Sizda ${attempts} ta urinish qoldi.`
    }
  
    else if(userNumber > randomNumber){
      feedback.innerText = "Siz kiritgan son katta"
      attempts--
      text.innerText = `Sizda ${attempts} ta urinish qoldi.`
    }
  
  input.value = ""
  
  });


