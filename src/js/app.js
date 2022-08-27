const form = document.querySelector("#form");
const originalHash = document.querySelector("#hash");
const fileHash = document.querySelector("#fileHash");
const inputs = document.querySelectorAll("input");
const btn = document.querySelector("#btn");

let hasError = false;

const validateData = input => {
    const label = input.nextElementSibling;
    const isEmpty = input.value === "";
    const stringSize = input.value.length;
    const minimumOfCharacters = 8;

    if (isEmpty || stringSize < minimumOfCharacters) {
        input.classList.add("error");
        label.textContent = "Cannot be empty or less than 8 characters.";
        label.classList.add("message");
    } else {
        hasError = false;

        input.classList.remove("error");
        label.textContent = "";
        label.classList.remove("message");
    }

    const checkInputError = input => {
        const hasClassError = input.classList.contains("error");;

        if (hasClassError) {
            hasError = true;
        }
    };

    inputs.forEach(checkInputError);
};

const clearFieldValue = () => {
    inputs.forEach(input => {
        input.value = "";
    });
};

const checkHash = () => {
    if (!hasError) {
        const valueIsEqual = originalHash.value === fileHash.value;

        if (valueIsEqual) {
            alert("Everything is fine, the file is safe!! :)");

            clearFieldValue();
        }

        if (!valueIsEqual) {
            alert("Danger!!!!!!!!!!! The file has been compromised! :(");

            clearFieldValue();
        }
    }    
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

btn.addEventListener("click", () => {
    inputs.forEach(input => {
        validateData(input);
    });

    checkHash();
});

inputs.forEach(input => {
    input.addEventListener("keyup", () => {
        validateData(input);
    });
});