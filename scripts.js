const inputElement = document.querySelector("new-buy-input");
const addBuyButton = document.querySelector("new-item-button");
const validateInput = () => inputElement.value.trim().length > 0;

const handleAddItem = () => {
    const inputIsValid = validateInput();

    console.log(inputIsValid);

    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }
};

addBuyButton.addEventListener("click", handleAddItem);