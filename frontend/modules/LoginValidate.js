export default class LoginValidate {
  constructor() {
    this.form = document.querySelector('.form-login');
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
    }
    return valid;
  }

  createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-msg');
    field.insertAdjacentElement('afterend', div);
  }
}

