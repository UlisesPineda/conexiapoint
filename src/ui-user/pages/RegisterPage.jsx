import { Link } from 'react-router-dom';
import './styles/RegisterPage.css';

import { useAuthUser, useForm, useValidateForm } from '../hooks';
import { useState } from 'react';

export const RegisterPage = () => {

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const { onRegisterUser } = useAuthUser();
  const { validateRegisterUser } = useValidateForm();
  const { 
    form, 
    resetForm,
    isDisabled,
    isAccepted,
    handleChange, 
    resetCheckBox,
    enableButtonForm,
    disableButtonForm,
    handleCheckBoxChange,
  } = useForm({
    user: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { user, email, password, confirmPassword } = form;

  const handleVisiblePassword = () => {
    setIsVisiblePassword( !isVisiblePassword );
  };

  const handleSuscription = async(e) => {
    e.preventDefault();
    return validateRegisterUser( form, isAccepted ) &&
        disableButtonForm() &&
          await onRegisterUser( form ) && 
            enableButtonForm() &&
              resetForm() & resetCheckBox();
  };

  return (
    <main>
      <section className="register-section">
        <div className="register-container">
          <div className="register-data-container">
            <h2>Crea tu cuenta y administra tus clientes y contactos.</h2>
            <div className="register-ilustration">
              <img src="/img/register-ilustration.svg" alt="Ilustración de la sección de registro" />
            </div>
          </div>
          <div className="register-form-container">
            <form
              onSubmit={ handleSuscription }
              className='register-form'
            >
              <label htmlFor="user">Crea tu usuario:</label>
              <input 
                type="text" 
                name='user' 
                id='user' 
                value={ user}
                onChange={ handleChange }
              />
              <label htmlFor="email">Ingresa tu correo:</label>
              <input 
                type="text" 
                name='email' 
                id='emailRegister'
                autoComplete='on' 
                value={ email }
                onChange={ handleChange }
              />
              <div className="password-div">
                <label htmlFor="password">Crea tu contraseña:</label>
                <input 
                  type={ isVisiblePassword ? 'text' : 'password' } 
                  name='password' 
                  id='passwordRegister' 
                  value={ password }
                  onChange={ handleChange }
                />
                <span 
                  className={`icon-eye ${isVisiblePassword ? 'open-eye' : 'closed-eye'}`}
                  onClick={ handleVisiblePassword }
                ></span>
              </div>
              <div className="password-div">
                <label htmlFor="confirmPassword">Confirma tu contraseña:</label>
                <input 
                  type={ isVisiblePassword ? 'text' : 'password' } 
                  name='confirmPassword' 
                  id='confirmPasswordRegister' 
                  value={ confirmPassword }
                  onChange={ handleChange }
                />
                <span 
                  className={`icon-eye ${isVisiblePassword ? 'open-eye' : 'closed-eye'}`}
                  onClick={ handleVisiblePassword }
                ></span>
              </div>
              <label htmlFor="isAccepted">Acepto los <br /><a href="/terminos-y-condiciones" target='_blank' rel='noreferrer noopener' title='Consulta los términos y condiciones del servicio'>Términos y Condiciones</a></label>
              <input 
                type="checkbox" 
                name="isAccepted" 
                id="isAccepted" 
                checked={ isAccepted }
                onChange={ handleCheckBoxChange }
              />
              <button
                type='submit'
                disabled={ isDisabled }
                className={ isDisabled ? 'register-form-button-disabled' : '' }
              >
                Crear Usuario
              </button>
            </form>
            <p>¿Ya tienes usuario?</p>
            <Link 
              to="/entrar"
            >
              Inicia Sesión
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
