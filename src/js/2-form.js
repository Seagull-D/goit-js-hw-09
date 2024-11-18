"use strict"


const formData = {
    email: "",
    message: "",
    }

const form = document.querySelector(".feedback-form")


form.addEventListener("submit", toSubmit);
form.addEventListener("input", onInput);

function toSubmit(evt) {
  evt.preventDefault();
console.log(evt.target)
    const { email, message } = evt.currentTarget.elements;
const checkErrorMessage = form.querySelector(".errorMsg");
  if (checkErrorMessage) {
    checkErrorMessage.remove();
  }
    if (email.value.trim() === "" || message.value.trim() === "") {
        const errorMessege = `<p class="errorMsg">Не всі поля заповнені</p>`
       
        form.insertAdjacentHTML("beforeend", errorMessege);
        
    } else {
         formData.email = this.email.value,
            formData.message = this.message.value
        console.log(formData)
        
    }
  
    
    this.reset();
  }

function onInput(evt) {
   console.log(evt.target)
   
      
        if (evt.target.value === " ") {
           evt.target.classList.add("errorColor")
     console.log(evt.target)
             }
    }
