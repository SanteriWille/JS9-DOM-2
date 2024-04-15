var tall = Math.round(Math.random() * 100);
var guess = 1;

console.log(tall);

document.getElementById("checkBtn").addEventListener("click", function () {
  var mittTall = document.getElementById("inputBox").value;

  if (tall == mittTall) {
   test();
  } else if (tall < mittTall) {
    guess++;
    document.getElementById("txt").innerHTML = "Number is too big";
  } if (tall > mittTall) {
    guess++;
    document.getElementById("txt").innerHTML = "Number is too small";
  }

})

document.getElementById("luckyBtn").addEventListener("click", function () {
  var tall2 = Math.round(Math.random() * 100);
  document.getElementById("inputBox").value = tall2;

  if (tall == tall2) {
    test();
  } else if (tall < tall2) {
    guess++
    document.getElementById("txt").innerHTML = "Number is too big";
  } if (tall > tall2) {
    guess++
    document.getElementById("txt").innerHTML = "Number is too small";
  } 
})

function test() {
  alert("You guessed it right with " + (guess) + " guesses")
  let text = `do you want to play again`
  if (confirm(text) == true) {
    location.reload();
  } else {
    window.close();
  }
}