let count = 0;
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("increase")){
        count++
    } else if (style.contains("decrease")){
        count--
    } else {
        count = 0
    } 

    if (count > 0){
        value.style.color = "green"
    }
    if (count < 0){
        value.style.color = "red"
    }
    if (count === 0){
        value.style.color = "black"
    }
    value.textContent = count
  });
});
