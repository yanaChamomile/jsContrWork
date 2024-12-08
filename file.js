
// Отримання елементів із HTML
const nameValueAdd = document.getElementById("nameValueAdd");
const addButton = document.getElementById("addButton");
const textArea = document.getElementById("form-name_list");
const sortByNameButton = document.getElementById("sortByNameButton");
const sortByValueButton = document.getElementById("sortByValueButton");
const deleteButton = document.getElementById("deleteButton");


// Масив для зберігання пар Name=Value
let nameValueList = [];

// Перевірка на валідність
function isValidNameValue(input) {
    if (input.includes("=")) {
        const parts = input.split("=");
        const name = parts[0].trim();
        const value = parts[1].trim();
        if (name.length > 0 && value.length > 0) {
            return true;
        }
    }
    return false;
}
// запис пари в список
addButton.onclick = function () {
    const input = nameValueAdd.value.trim();
    if (isValidNameValue(input)) {
        nameValueList.push(input);
        updateTextArea();
        nameValueAdd.value = ""; // Очищення поля вводу
    } else {
        alert("Incorrect format! Please use Name=Value.");
    }
};
nameValueAdd.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addButton.click(); // Клік на Enter
    }
});


// Оновлення текстової області
function updateTextArea() {
    textArea.value = nameValueList.join("\n");
}

// Сортування за ім'ям
sortByNameButton.onclick = function () {
    nameValueList.sort(function (a, b) {
        const nameA = a.split("=")[0].trim().toLowerCase();
        const nameB = b.split("=")[0].trim().toLowerCase();
        return nameA.localeCompare(nameB);
    });
    updateTextArea();
};

// Сортування за значенням

sortByValueButton.onclick = function () {
    nameValueList.sort(function (a, b) {
        const valueA = a.split("=")[1].trim().toLowerCase();
        const valueB = b.split("=")[1].trim().toLowerCase();
        return valueA.localeCompare(valueB);
    });
    updateTextArea();
};

// Видалення обраного тексту

deleteButton.onclick = function () {
    const selectedText = textArea.value.split("\n").filter(line => line.trim() !== "");
    // Перевіряємо, чи є вибраний текст у nameValueList
    nameValueList = nameValueList.filter(pair => {
        return !selectedText.some(text => text.trim() === pair.trim());
    });
    updateTextArea();
};
