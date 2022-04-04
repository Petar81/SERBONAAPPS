// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      });
  
      var firstName = document.getElementById('firstName');
      var lastName = document.getElementById('lastName');
      var cardFirstName = document.getElementById('cardFirstName');
      var cardLastName = document.getElementById('cardLastName');
  
      firstName.addEventListener('input', function (event) {
        cardFirstName.innerHTML = firstName.value + ' ';
      });
  
      lastName.addEventListener('input', function (event) {
        cardLastName.innerHTML = lastName.value;
      });
  
      var company = document.getElementById('company');
      var cardCompany = document.getElementById('cardCompany');
  
      company.addEventListener('input', function (event) {
        cardCompany.innerHTML = company.value;
      });
  
      var email = document.getElementById('email');
      var cardEmail = document.getElementById('cardEmail');
  
      email.addEventListener('input', function (event) {
        cardEmail.innerHTML = email.value;
      });
  
      var phone = document.getElementById('phone');
      var cardPhone = document.getElementById('cardPhone');
  
      phone.addEventListener('input', function (event) {
        cardPhone.innerHTML = phone.value;
      });
  
      var address = document.getElementById('address');
      var cardStreet = document.getElementById('cardStreet');
  
      address.addEventListener('input', function (event) {
        cardStreet.innerHTML = address.value;
      });
      address.addEventListener('change', function (event) {
        if(address.value === ''){
          return cardStreet.innerHTML = '';
        }
        cardStreet.innerHTML = address.value + ', ';
      });
  
      var state = document.getElementById('state');
      var cardState = document.getElementById('cardState');
  
      state.addEventListener('change', function (event) {
        if(state.value === 'none'){
          return cardState.innerHTML = '';
        }
        cardState.innerHTML = state.value + ', ';
        // console.log(state.value);
      });
  
      var zip = document.getElementById('zip');
      var cardZIP = document.getElementById('cardZIP');
  
      zip.addEventListener('input', function (event) {
        cardZIP.innerHTML = zip.value;
      });
      zip.addEventListener('change', function (event) {
        if(zip.value === ''){
          return cardZIP.innerHTML = '';
        }
        cardZIP.innerHTML = zip.value + ', ';
      });
  
      var country = document.getElementById('country');
      var cardCountry = document.getElementById('cardCountry');
  
      country.addEventListener('change', function (event) {
        if(country.value !== 'United States of America'){
          state.setAttribute('disabled', 'disabled');
          state.value = 'none';
          cardState.innerHTML = '';
        } else {
          state.removeAttribute('disabled');
          state.value = 'AL';
          cardState.innerHTML = 'AL, ';
          // console.log(state.value);
        }
        cardCountry.innerHTML = country.value;
      });
  
      cardCountry.innerHTML = country.value;
      cardState.innerHTML = state.value + ', ';
  
  })()  