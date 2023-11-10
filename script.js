const luckNums = document.getElementById("nums");
const luckStars = document.getElementById("stars");

function gerarChave() {
  var nums = [];
  var star = [];
  for (var i = 0, t = 40; i < 6; i++) {
  nums.push(Math.round(Math.random() * t))
  luckNums.textContent = nums;}
  for (var i = 0, y = 5; i < 1; i++) {
  star.push(Math.round(Math.random() * y)+1)
  luckStars.textContent = star;
  }
}