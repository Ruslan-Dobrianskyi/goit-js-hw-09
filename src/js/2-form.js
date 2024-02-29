const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.textarea');

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('Please empty ...');
  }

  const userData = {
    email,
    message,
  };
  console.log(userData);
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
});
form.addEventListener('input', e => {
  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();

  const userData = {
    email,
    message,
  };
  saveToLS('feedback-form-state', userData);
});
document.addEventListener('DOMContentLoaded', renderPage);
function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
function loadFromLs(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

function renderPage() {
  const data = loadFromLs('feedback-form-state');

  form.elements.email.value = data?.email || '';
  form.elements.message.value = data?.message || '';
}

// renderPage();
