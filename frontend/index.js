import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

import LoginValidate from './modules/LoginValidate';
import CadastroValidate from './modules/CadastroValidate';

const login = new LoginValidate();
const cadastro = new CadastroValidate();

