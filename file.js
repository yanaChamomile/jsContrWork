/*const container = document.forms.container;

const textarea = document.getElementById('form-name_list');
const addButton = container.addButton;
addButton.addEventListener('click', (e) => {
    const nameValue = container.name.value;
    container.name.value = nameValue;
    let person ={
        name: nameValue}
    console.log(person);
    textarea.innerText = person.name;
});
// Функція для перевірки формату "Name=Value"
function isValidPair(pair) {
    const regex = /^[\p{L}\p{N}]+\s*=\s*[\p{L}\p{N}]+$/u;
    return regex.test(pair);
}

 */
// Отримання посилань на елементи
const inputField = document.getElementById("nameValueAdd");
const addButton = document.getElementById("addButton");
const textArea = document.getElementById("form-name_list");
const sortByNameButton = document.getElementById("sortByNameButton");
const sortByValueButton = document.getElementById("sortByValueButton");
const deleteButton = document.getElementById("deleteButton");

// Додавання нової пари до списку
addButton.addEventListener("click", () => {
    const input = inputField.value.trim();

    // Перевірка формату пари "Name=Value"
    const regex =  /^[\p{L}\p{N}]+\s*=\s*[\p{L}\p{N}]+$/u;
    if (!regex.test(input)) {
        alert("Invalid format! Please use 'Name=Value'.");
        return;
    }

    // Додавання пари в текстову область
    textArea.value += input + "\n";

    // Очищення поля вводу
    inputField.value = "";
});

// Видалення вибраних рядків
deleteButton.addEventListener("click", () => {
    // Отримання виділеного тексту
    const selectedText = window.getSelection().toString().trim();
    if (!selectedText) {
        alert("Please select a row to delete.");
        return;
    }

    // Оновлення текстової області без вибраного тексту
    const rows = textArea.value.split("\n").filter(row => row.trim() !== selectedText);
    textArea.value = rows.join("\n");
});

// Сортування за іменами
sortByNameButton.addEventListener("click", () => {
    const pairs = textArea.value.trim().split("\n").filter(pair => pair);
    const sorted = pairs.sort((a, b) => {
        const [aName] = a.split("=");
        const [bName] = b.split("=");
        return aName.localeCompare(bName);
    });
    textArea.value = sorted.join("\n");
});

// Сортування за значеннями
sortByValueButton.addEventListener("click", () => {
    const pairs = textArea.value.trim().split("\n").filter(pair => pair);
    const sorted = pairs.sort((a, b) => {
        const [, aValue] = a.split("=");
        const [, bValue] = b.split("=");
        return aValue.localeCompare(bValue);
    });
    textArea.value = sorted.join("\n");
});
