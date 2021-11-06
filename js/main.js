let stars = document.getElementsByClassName('bx');
let emoji = document.getElementById("imoji");
let count = 4; 
  for (let i = 0; i <= count; i++ ) {
    stars[i].onclick = function() {
      for(let j = i; j >= 0; j--) {
        stars[j].style.color = "#ffd93b";
        emoji.style.transform = `translateX(-${i * 100}px)`; 
      }
      for(let k = i; k <= count-1; k++) {
        stars[k+1].style.color = "#e4e4e4";
      }
    }
  }