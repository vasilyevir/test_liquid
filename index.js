const countDownDate = new Date("Feb 20, 2023 16:00:00").getTime();

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").textContent = days.toString().length < 2 ? "0" + days : days;
  document.getElementById("hours").textContent = hours.toString().length < 2 ? "0" + hours : hours;
  document.getElementById("minutes").textContent = minutes.toString().length < 2 ? "0" + minutes : minutes;
  document.getElementById("seconds").textContent = seconds.toString().length < 2 ? "0" + seconds : seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

let isShownContent = false;
const button = document.getElementById('show-content')
const firstImage = document.getElementById('show-more').content.cloneNode(true);
button.appendChild(firstImage)

button.addEventListener('click', () => {
  const block = document.getElementById('content')
  const hide = document.getElementById('hide').content.cloneNode(true);
  const showMore = document.getElementById('show-more').content.cloneNode(true);

  if (isShownContent) {
    block.classList.remove('announcement__description-block_open');
    button.innerHTML = '';
    console.log(showMore, hide, button)
    button.appendChild(showMore)
  } else {
    block.classList.add('announcement__description-block_open')
    button.innerHTML = '';
    console.log(showMore, hide, button)
    button.appendChild(hide)
  }

  isShownContent = !isShownContent;
})

// open sidebar 
const sidebar = document.getElementById('sidebar');
const open = document.getElementById('burger')
// const cross = document.getElementById('cross');

open.addEventListener('click', () => {
  sidebar.classList.add('sidebar_open');
})

sidebar.addEventListener('click', () => {
  sidebar.classList.remove('sidebar_open');
})

// animation Tower

let id = 0;
const tower1 = document.getElementById('tower1');
const tower2 = document.getElementById('tower2');
const tower3 = document.getElementById('tower3');
const tower4 = document.getElementById('tower4');
const tower5 = document.getElementById('tower5');

setInterval(() => {
  switch (id % 5) {
    case 0:
      tower1.classList.remove('burg_hidden')
      tower5.classList.add('burg_hidden')
      break;
    case 1:
      tower2.classList.remove('burg_hidden')
      tower1.classList.add('burg_hidden')
      break;
    case 2:
      tower3.classList.remove('burg_hidden')
      tower2.classList.add('burg_hidden')
      break;
    case 3:
      tower4.classList.remove('burg_hidden')
      tower3.classList.add('burg_hidden')
      break;
    case 4:
      tower5.classList.remove('burg_hidden')
      tower4.classList.add('burg_hidden')
      break;
  }
  id += 1;
}, 1000)


// document.addEventListener("mousemove", parallax)

// /**
//  * @param {MouseEvent} event 
//  */
// function parallax(event) {
//   // Vectors coming from center
//   const vectorX = event.clientX / window.innerWidth - 0.5
//   const vectorY = event.clientY / window.innerHeight - 0.5

//   const positionX = `calc(50% - (2em * ${-vectorX}))`
//   const positionY = `calc(-2em - (2em * ${-vectorY}))`
//   const position = `${positionX} ${positionY}`

//   document.body.style.backgroundPosition = position
// }