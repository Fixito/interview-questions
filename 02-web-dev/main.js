const section = document.querySelector('.section');
const form = document.querySelector('.form');
const emailInput = document.querySelector("[name='email']");
const passwordInput = document.querySelector("[name='password']");

const emailRegex = /^[\w\.-]+@([a-z\d-]+\.)+[\w-]{2,4}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (!passwordValue || !emailRegex.test(emailValue)) {
    if (!passwordValue) {
      passwordInput.nextElementSibling.textContent =
        'Veuillez entrer un mot de passe';
    } else {
      passwordInput.nextElementSibling.textContent = '';
    }

    if (!emailRegex.test(emailValue)) {
      emailInput.nextElementSibling.textContent = 'Email incorrect';
    } else {
      emailInput.nextElementSibling.textContent = '';
    }

    return;
  }

  section.innerHTML = `<div class="title">
    <h2>connexion réussie</h2>
    <div class="underline"></div>
  </div>`;
});
