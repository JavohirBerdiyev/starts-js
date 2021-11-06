let stars = document.getElementsByClassName('bx');
let emoji = document.getElementById("imoji");

  for (let i = 0; i <= 4; i++ ) {
    stars[i].onclick = function() {
      for(let j = i; j >= 0; j--) {
        stars[j].style.color = "#ffd93b";
        emoji.style.transform = `translateX(-${i * 100}px)`; 
      }
      for(let j = i; j <= 4; j++) {
        stars[j+1].style.color = "#e4e4e4";
      }
    }
  }