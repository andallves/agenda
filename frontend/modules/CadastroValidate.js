import validator from 'validator';

export default class CadastroValidate {
  constructor() {
    this.form = document.querySelector('.form-cadastro');
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const fieldValid = this.isValid();

    if (fieldValid) {
      alert('cadastrado')
      e.target.submit();
    }
  }

  isValid() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll('.error-msg')) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll('.form-control')) {
      let label = field.previousElementSibling.innerText;

      if (!field.value) {
        this.createError(field, `O campo ${label} não pode está em branco`)
        valid = false;
      }

      if (field.classList.contains('email') && field.value) {
        if (!validator.isEmail(field.value)) {
          this.createError(field, 'Email inválido!');
          valid = false;
        }
      }

      if (field.classList.contains('password') && field.value) {
        if (field.value.length < 6 || field.value.length > 12) {
          this.createError(field, 'Senha precisa ter entre 6 e 12 caracteres.');
          valid = false;
        }
      }
    }

    return valid;
  }

  createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-msg');
    field.insertAdjacentElement('afterend', div)
  }
}