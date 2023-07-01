import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(saveFormState, 500));


function saveFormState() {
    const formState = {
      email: emailInput.value,
      message: messageInput.value,
    };
  
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }

  

  window.addEventListener('DOMContentLoaded', () => {
    const savedFormState = localStorage.getItem('feedback-form-state');
  
    if (savedFormState) {
      const parsedFormState = JSON.parse(savedFormState);
      emailInput.value = parsedFormState.email;
      messageInput.value = parsedFormState.message;
    }
  });

  


  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const formState = {
      email: emailInput.value,
      message: messageInput.value,
    };
  
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  
    console.log(formState);
  });
  
