let root = document.getElementById('root');
let input = document.getElementById('input')

function get(){
  let userInput = input.value
  let el = document.createElement("li")
  el.innerText = userInput
  root.append(el)
}