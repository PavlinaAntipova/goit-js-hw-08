import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const inputEmailRef = document.querySelector("[type=email]");
const textAreaMessageRef = document.querySelector("textarea");
const getLocalStorage = localStorage.getItem("feedback-form-state");
const formData = {};

form.addEventListener("input", throttle(onInput, 500));
form.addEventListener("submit", onSubmit);

autoComplete();

function onInput(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    updateStorage(inputName, inputValue);
}

function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    form.reset();
    localStorage.removeItem("feedback-form-state");
    inputEmailRef.value = "";
    textAreaMessageRef.value = "";
}

function updateStorage(name, value) {
    if (value) {
        formData[name] = value;
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
        
    }
}

function autoComplete() {
    if (!getLocalStorage) {
        return;
    }

    const {email, message} = JSON.parse(getLocalStorage);
    
    if (email) {
       inputEmailRef.value = email; 
    } 

    if (message) {
       textAreaMessageRef.value = message;
    }

}



