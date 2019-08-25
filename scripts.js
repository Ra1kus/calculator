document.addEventListener("DOMContentLoaded", function() { 
    let textField = document.getElementById('textfield');
    let clearButton = document.getElementById('clear');
    let calcButton = document.getElementById('calculate');
    let resultText = document.getElementById('result_text');
    let popupOverlay = document.getElementById('popup_overlay');
    let popup = document.getElementById('popup');
    let closeButton = document.getElementById('close');
    let copyButton = document.getElementById('copy');
    let result = 0;

    calcButton.onclick = function() {
        let currentValuesArr = textField.value.split('\n\n');
        currentValuesArr.forEach(element => {
            let plusIndex = element.indexOf('+') + 1;
            result += +element.slice(plusIndex, element.length);
        });

        resultText.innerText = result;
        popupOverlay.style.display = 'block';
        popup.style.display = 'block';
    }

    clearButton.onclick = function() {
        textField.value = '';
    }

    closeButton.onclick = function() {
        result = 0;
        popupOverlay.style.display = 'none';
        popup.style.display = 'none';
    }

    popupOverlay.onclick = function() {
        result = 0;
        popupOverlay.style.display = 'none';
        popup.style.display = 'none';
    }

    copyButton.onclick = function() {
        navigator.clipboard.writeText(result).then(function() {
            /* clipboard successfully set */
            console.log('true');
          }, function() {
            /* clipboard write failed */
            console.log('false');
        });
    }
});