"use strict"


let formData = {
    email: "",
    message: "",
}
    const localKay = "feedback-form-state"

const form = document.querySelector(".feedback-form")


form.addEventListener("submit", toSubmit);
form.addEventListener("input", onInput);

function onInput(evt) {
  
  const { name, value } = evt.target
  if (name === "email" || name === "message") {

    formData[name] = value.trim()

    localStorage.setItem(localKay, JSON.stringify(formData))
  }
 
  }
  


function toSubmit(evt) {
evt.preventDefault();
 
  const errorMsg = document.querySelector('.errorMsg');
  if (errorMsg) {
    errorMsg.remove();
  }

  if (!formData.email || !formData.message) {
    const errorMessage = `<p class="errorMsg">Fill please all fields !!!</p>`;
    form.insertAdjacentHTML("beforeend", errorMessage);
    
  } else {
    
    console.log(formData);
       localStorage.removeItem('feedback-form-state');
       formData.email = "";
       formData.message = "";
    
    this.reset();
  }
}

