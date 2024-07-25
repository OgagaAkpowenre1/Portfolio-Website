// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let interval = null;
// const names = ["Akpowenre Ogaga", "Ogaga Akpowenre", "Ogaga A.", "A. Ogaga", "John Doe", "Jane Smith"]; // Example names


// function hackerEffect(event){
//     let iterations = 0;
//     clearInterval(interval)

//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if (index < iterations) {
//           return event.target.dataset.value[index];
//         }

//         return letters[Math.floor(Math.random() * 26)];
//       })
//       .join("");

//     if (iterations >= event.target.dataset.value.length)
//       clearInterval(interval);

//     iterations += 1 / 3;
//   }, 30);
// }

// function changeName() {
//     const nameElement = document.getElementById("name");
//     const randomName = names[Math.floor(Math.random() * names.length)];
//     nameElement.dataset.value = randomName;
//     nameElement.innerText = randomName;
//     hackerEffect({ target: nameElement });
//   }

// document.addEventListener("DOMContentLoaded", (event => {
//     const name = document.querySelector('span')
//     const greeting = document.getElementById("greeting")
//     hackerEffect({target: name})
//     name.addEventListener("mouseover", changeName)
//     greeting.addEventListener("mouseover", hackerEffect)
// }))


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const names = ["Akpowenre Ogaga", "Ogaga Akpowenre", "Ogaga A.", "A. Ogaga", "John Doe", "Jane Smith", "Kevwe Grace Akpowenre"];

function hackerEffect(element) {
  let iterations = 0;
  let interval = setInterval(() => {
    element.innerText = element.innerText.split("").map((letter, index) => {
      if (index < iterations) {
        return element.dataset.value[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    }).join("");

    if (iterations >= element.dataset.value.length) clearInterval(interval);

    iterations += 1 / 3;
  }, 30);
}

function changeName(event) {
  const nameElement = event.target;
  const randomName = names[Math.floor(Math.random() * names.length)];
  nameElement.dataset.value = randomName;
  nameElement.innerText = randomName;
  hackerEffect(nameElement);
}

document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.getElementById("name");
  const greetingElement = document.getElementById('greeting'); // Assuming the span inside the greeting-container

  if (nameElement) {
    nameElement.dataset.value = nameElement.innerText;
    hackerEffect(nameElement);
    nameElement.addEventListener("mouseover", changeName);
  }

  if (greetingElement) {
    hackerEffect(greetingElement);
    greetingElement.addEventListener("mouseover", () => hackerEffect(greetingElement));
  }
});
