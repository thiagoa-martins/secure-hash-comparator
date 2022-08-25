const form = document.querySelector("#form");
const originalHash = document.querySelector("#hash");
const fileHash = document.querySelector("#fileHash");
const inputs = document.querySelectorAll("input");
const btn = document.querySelector("#btn");

let hasError = false;

const validateData = input => {
    const label = input.nextElementSibling;
    const isEmpty = input.value === "";
    const minimumOfCharacters = input.value.length <= 8;

    if (isEmpty || minimumOfCharacters) {
        hasError = true;
    
        input.classList.add("error");
        label.textContent = "Cannot be empty or less than 8 characters.";
        label.classList.add("message");
        return;
    }

    hasError = false;

    input.classList.remove("error");
    label.textContent = "";
    label.classList.remove("message");
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

btn.addEventListener("click", () => {
    inputs.forEach(input => {

        validateData(input);

        input.addEventListener("keypress", () => {
            validateData(input);
        });
    });

    if (!hasError) {
        const valueIsEqual = originalHash.value === fileHash.value;
        
        if (valueIsEqual) {
            alert("Everything is fine, the file is safe!! :)");

            inputs.forEach(input => {
                input.value = "";
            });
            return;
        }

        if (!valueIsEqual) {
            alert("Danger!!!!!!!!!!! The file has been compromised! :(");

            inputs.forEach(input => {
                input.value = "";
            });
        }
    }    
});
