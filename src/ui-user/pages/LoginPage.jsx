import { useState } from 'react';
import './styles/LoginPage.css';

import { LoginForm, ResetPasswordForm } from '../components';

export const LoginPage = () => {

  const [isResetLogin, setIsResetLogin] = useState(false);

  const handleTypeLoginForm = () => {
    setIsResetLogin( !isResetLogin );
  };

  return (
    <main>
      <section className="login-section">
        <div className="login-container">
          <div className="login-data-container">
          <h2>Comienza a administrar tus clientes y contactos.</h2>
            <div className="login-ilustration">
              <img src="/img/login-ilustration.svg" alt="Ilustración de la sección de registro" />
            </div>
          </div>
          <div className="login-form-container">
            {
              isResetLogin ? 
                <ResetPasswordForm
                  handleTypeLoginForm={ handleTypeLoginForm }
                 />
              :
                <LoginForm 
                  handleTypeLoginForm={ handleTypeLoginForm }
                />
            }
          </div>
        </div>
      </section>
    </main>
  );
};
