const originalHash = document.querySelector("#hash");
const fileHash = document.querySelector("#fileHash");
const inputs = document.querySelectorAll("input");
const btn = document.querySelector("#btn");

let hasError = false;

btn.addEventListener("click", () => {
    inputs.forEach(input => {
        if (input.value === "") {
            hasError = true;

            input.classList.add("error");
            input.setAttribute("placeholder", "Can not be empty");
            return;
        }

        hasError = false;

        input.classList.remove("error");
        input.setAttribute("placeholder", "");
    });

    if (!hasError) {
        const valueIsEqual = originalHash.value === fileHash.value;
        const moreThanEightCharacters = originalHash.value.length >= 8;

        if (!valueIsEqual && moreThanEightCharacters) {
            alert("Danger!!!!!!!!!!! The file has been compromised! :(");
        }

        inputs.forEach(input => {
            input.value = "";
        });

        if (valueIsEqual && moreThanEightCharacters) {
            alert("Everything is fine, the file is safe!! :)");
            return;
        }
        
    }
});
