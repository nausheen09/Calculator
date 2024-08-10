function getNumber(num){
    var inputValue = document.getElementById("data")
    inputValue.value += num.innerText;
}
function getResult(){
    var inputValue = document.getElementById("data")

    var expression = inputValue.value.replace(/X/g, '*'); 
    inputValue.value = eval(expression);
  
}
function clearValue(){
    var inputValue = document.getElementById("data")
    inputValue.value = ""
}
function deleteLast(){
    var inputValue = document.getElementById("data");
    inputValue.value = inputValue.value.slice(0, -1);
}
