function handleInput(event) {
    var input = event.target;
    var inputValue = input.value.replace(/\s/g, ''); // Удаляем все пробелы из значения поля ввода
    var formattedValue = formatCardNumber(inputValue); // Форматируем номер карты с пробелами
    input.value = formattedValue;
}
function formatCardNumber(value) {
    var formattedValue = value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    // Добавляем пробелы после каждых 4 цифр
    formattedValue = formattedValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    // Ограничиваем количество цифр до 16
    formattedValue = formattedValue.slice(0, 19);
    return formattedValue;
}
// Найти поле ввода по классу и добавить обработчик события
var numberInputField = document.querySelector('.card__number_field');
numberInputField.addEventListener('input', handleInput);


function handleCvcInput(event) {
    var input = event.target;
    var inputValue = input.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    var formattedValue = inputValue.slice(0, 3);  // Форматируем CVC
    input.value = formattedValue;
}
// Найти поле ввода cvc по классу и добавить обработчик события
var cvcInputField = document.querySelector('.card__cvc_field');
cvcInputField.addEventListener('input', handleCvcInput);

function handleMMInput(event) {
    var input = event.target;
    var inputValue = input.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    var formattedValue = inputValue.slice(0, 2); // Форматируем 
    input.value = formattedValue;
}
// Найти поле ввода MM по классу и добавить обработчик события
var mmInputField = document.querySelector('.card__month_field');
mmInputField.addEventListener('input', handleMMInput);


function handleYYInput(event) {
    var input = event.target;
    var inputValue = input.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    var formattedValue = inputValue.slice(0, 2);  // Форматируем MM
    input.value = formattedValue;
}
// Найти поле ввода YY по классу и добавить обработчик события
var yyInputField = document.querySelector('.card__year_field');
yyInputField.addEventListener('input', handleYYInput);


function validateForm() {
    var numberInputField = document.querySelector('.card__number_field');
    var numberErrorText = document.getElementById('numberErrorText');
    var cardNumberRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;

    var monthInputField = document.querySelector('.card__month_field');
    var yearInputField = document.querySelector('.card__year_field');
    var periodErrorText = document.getElementById('periodErrorText');

    var cvcInputField = document.querySelector('.card__cvc_field');
    var cvcErrorText = document.getElementById('cvcErrorText');

    var cardNumberOutput = document.getElementById('cardNumberOutput');
    var cardOwnerName = document.getElementById('cardOwnerName');
    var cardMM = document.getElementById('cardMM');
    var cardYY = document.getElementById('cardYY');
    var cardCvc = document.getElementById('cardCvc');

    cardOwnerName.innerText=document.querySelector('.card__cn_field').value;
    if (numberInputField.value === '') {
        numberErrorText.style.display = 'block';
        numberErrorText.innerText = "Can't be blank";
    } else if (!cardNumberRegex.test(numberInputField.value)) {
        numberErrorText.style.display = 'block';
        numberErrorText.innerText = "Invalid card number format";
    } else {
        numberErrorText.style.display = 'none';
        cardNumberOutput.innerText = numberInputField.value;
    }

    if (monthInputField.value === '' || yearInputField.value === '') {
        periodErrorText.style.display = 'block';
        periodErrorText.innerText = "Can't be blank";
    } else {
        periodErrorText.style.display = 'none';
        cardMM.innerText=monthInputField.value;
        cardYY.innerText=yearInputField.value;
    }

    if (cvcInputField.value === '') {
        cvcErrorText.style.display = 'block';
        cvcErrorText.innerText = "Can't be blank";
    } else {
        cvcErrorText.style.display = 'none';
        cardCvc.innerText=cvcInputField.value;
    }

}
