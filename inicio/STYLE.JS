/* JavaScript adicional aquí */
const loginForm = document.querySelector('.login__form--login');
const registroForm = document.querySelector('.login__form--registro');
const registroLink = document.querySelector('#registro-link');
const inicioLink = document.querySelector('#inicio-link');

registroLink.addEventListener('click', (e) => {
   e.preventDefault();
   loginForm.style.opacity = '0'; /* Oculta el formulario de inicio de sesión */
   setTimeout(() => {
     loginForm.style.display = 'none'; /* Después de la transición, oculta el formulario */
     registroForm.style.opacity = '1'; /* Muestra el formulario de registro */
     registroForm.style.display = 'block';
   }, 600); /* Espera 300 ms, la misma duración de la transición */
});

inicioLink.addEventListener('click', (e) => {
   e.preventDefault();
   registroForm.style.opacity = '0'; /* Oculta el formulario de registro */
   setTimeout(() => {
     registroForm.style.display = 'none'; /* Después de la transición, oculta el formulario */
     loginForm.style.opacity = '1'; /* Muestra el formulario de inicio de sesión */
     loginForm.style.display = 'block';
   }, 600); /* Espera 300 ms, la misma duración de la transición */
});

const passwordInput = document.getElementById('password-input');
const togglePassword = document.getElementById('toggle-password');

togglePassword.style.display = 'none'; // Oculta el icono del ojo inicialmente

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.trim() !== '') {
    togglePassword.style.display = 'block'; // Muestra el icono del ojo cuando se escribe algo en el campo
  } else {
    togglePassword.style.display = 'none'; // Oculta el icono del ojo si el campo está vacío
  }
});

togglePassword.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

const passwordInputRegistro = document.getElementById('password-input-registro');
const togglePasswordRegistro = document.getElementById('toggle-password-registro');

togglePasswordRegistro.style.display = 'none'; // Oculta el icono del ojo inicialmente

passwordInputRegistro.addEventListener('input', () => {
  if (passwordInputRegistro.value.trim() !== '') {
    togglePasswordRegistro.style.display = 'block'; // Muestra el icono del ojo cuando se escribe algo en el campo
  } else {
    togglePasswordRegistro.style.display = 'none'; // Oculta el icono del ojo si el campo está vacío
  }
});

togglePasswordRegistro.addEventListener('click', () => {
  if (passwordInputRegistro.type === 'password') {
    passwordInputRegistro.type = 'text';
  } else {
    passwordInputRegistro.type = 'password';
  }
});
