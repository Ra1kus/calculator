let textField = document.getElementById('textfield');
let button = document.getElementById('button');

button.onclick = function() {
    let result = 0;
    let currentValuesArr = textField.value.split('\n\n');
    currentValuesArr.forEach(element => {
        let plusIndex = element.indexOf('+') + 1;
        result += +element.slice(plusIndex, element.length);
    });
    alert(result);
}