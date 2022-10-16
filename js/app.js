const userFirstName = document.querySelector('#first_name');
const userLastName = document.querySelector('#last_name');
const userEmail = document.querySelector('#email');
const userPhoneNumber = document.querySelector('#phone_number');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');

const submitMsg = document.querySelector('.submit-msg');

const errorPassword = document.querySelector('.error-password')
const passwordInputs = document.querySelectorAll('.password-input');
const submitBtn = document.querySelector('.btn-create-account');

confirmPassword.addEventListener('input', () => {
  checkPassword();
})

submitBtn.addEventListener('click', (e) => {
  
  if(userFirstName.value === '' || userLastName.value === '' || userEmail.value === '' || userPhoneNumber.value === '' || password.value === '' || confirmPassword.value === '') {
    console.log('empty input');
  }
  else if(password.value !== confirmPassword.value) {
    console.log('passwords not same');
  }
  else if(userFirstName.value !== '' && userLastName.value !== '' && userEmail.value !== '' && userPhoneNumber.value !== '' && password.value !== '' && confirmPassword.value !== '' && password.value === confirmPassword.value) {
    console.log('submit');

    submitMsg.classList.add('submit-show');
    
    setTimeout(function () {
      submitMsg.classList.remove('submit-show');
    }, 1500)
  
  }
  e.preventDefault();
})


function checkPassword () {
  if(password.value === confirmPassword.value) {
    errorPassword.textContent = 'Passwords match';

    passwordInputs.forEach(password => {
      password.classList.add('valid');
      password.classList.remove('error');
    })

    errorPassword.classList.add('valid-password');
    errorPassword.classList.remove('error-password');
  }
  else {
    errorPassword.textContent = '* Passwords do not match';

    passwordInputs.forEach(password => {
      password.classList.add('error');
      password.classList.remove('valid');
    })

    errorPassword.classList.add('error-password');
    errorPassword.classList.remove('valid-password');    
  }
}
