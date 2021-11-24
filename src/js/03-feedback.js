import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const inputEmailRef = document.querySelector("[type=email]");
const textAreaMessageRef = document.querySelector("textarea");
const STORAGE_KEY = "feedback-form-state";
const getLocalStorage = localStorage.getItem(STORAGE_KEY);
const formData = {};


inputEmailRef.value = formData.email; 
textAreaMessageRef.value = formData.message;



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
    localStorage.removeItem(STORAGE_KEY);
}

function updateStorage(name, value) {
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    
    }


function autoComplete() {
    if (!getLocalStorage) {
        inputEmailRef.value = ""; 
        textAreaMessageRef.value = "";
        return;
    }

    const { email, message } = JSON.parse(getLocalStorage);

    if (email) {
        inputEmailRef.value = email;
    } else {
         inputEmailRef.value = ""; 
    }

    if (message) {
        textAreaMessageRef.value = message;
    } else {
         textAreaMessageRef.value = ""; 
    }
    
}



