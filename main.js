document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.form-info');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const affair = document.getElementById('affair');
  const message = document.getElementById('message');
  const submit = document.getElementById('submit');

  form.addEventListener('input', function(event) {
    if (name.value !== '' && email.value !== '' && affair.value !== '' && message.value !== '') {
      submit.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });

  form.addEventListener('submit', function(event) {
    if (name.value === '' || email.value === '' || affair.value === '' || message.value === '') {
      alert('Please complete all fields of the form.');
      event.preventDefault();
    }
  });
});

