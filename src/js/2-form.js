const formData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
  email: '',
  message: '',
};
const formEl = document.forms[0];
formEl.email.value = formData.email;
formEl.message.value = formData.message;

formEl.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

formEl.addEventListener('submit', e => {
  e.preventDefault();
  if (!Object.values(formData).every(value => value)) {
    alert("Fill please all fields");
    return;
  }
  console.log(formData);
  localStorage.clear();
  formEl.reset();
  formData.email= '';
  formData.message = '';

});