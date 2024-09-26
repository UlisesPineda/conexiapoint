import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './styles/ActivateUserPage.css';
import { useAuthUser } from '../hooks';

export const ActivateUserPage = () => {

  const [isUserActivated, setIsUserActivated] = useState( false );

  const { onActivateUser } = useAuthUser();
  const { token } = useParams();
  
  const activateUser = async() => {
    return await onActivateUser( token ) && setIsUserActivated( true );
  };
  
  useEffect( () => {
    activateUser();
  }, []);
  
  return (
    <main>
        <section className="main-activateuser-container">
            <div className="activateuser-block">
              <big> { isUserActivated ? 'Usuario activado exitosamente' : 'El enlace ha caducado' } </big>
              <a href="/entrar">
                <button className='activateuser-button'> { isUserActivated ? 'Iniciar sesión' : 'Ir al inicio' } </button>
              </a>
            </div>
        </section>
    </main>
  );
};
