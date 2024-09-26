import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './styles/ChangePasswordPage.css';
import { useAuthUser, useForm, useValidateForm } from '../hooks';

export const ChangePasswordPage = () => {

    const isPasswordUpdated = false;
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    const { token } = useParams();
    const { onResetPassword } = useAuthUser();
    const { validateChangePasswordForm, validateEmptyInput } = useValidateForm();
    const { form, handleChange, resetForm, disableButtonForm, enableButtonForm } = useForm({
        changePassword: '',
        confirmChangePassword: '',
    });

    const handleVisiblePassword = () => {
        setIsVisiblePassword( !isVisiblePassword );
    };

    const handleChangePassword = async(e) => {
        e.preventDefault();
        validateEmptyInput( form, 'Aún no ingresas el nuevo password' ) &&
            validateChangePasswordForm( form ) &&
                disableButtonForm() &&
                    await onResetPassword( form, token ) ?
                        enableButtonForm() & resetForm() :
                            enableButtonForm();
    };

  return (
    <main>
        <section className="changepass-main-container">
            {
                isPasswordUpdated ? 
                        <div className='changepass-block-container'>
                            <big>¡El password fue actualizado exitosamente!</big>
                            <Link to="/entrar">
                                <button className='changepassword-button'>Iniciar Sesión</button>
                            </Link>
                        </div>
                    :
                        <div className='changepass-block-container'>
                            <big>Crea tu nuevo password</big>
                            <form 
                                className="changepass-form"
                                onSubmit={ handleChangePassword }
                            >
                                <label htmlFor="changePassword">Nuevo password:</label>
                                <div className="changepass-input-container">
                                    <input 
                                        type="text" 
                                        name="changePassword"
                                        id="changePassword"
                                        value={ form.changePassword }
                                        onChange={ handleChange }
                                    />
                                    <div 
                                        className={`icon-eye ${ isVisiblePassword ? 'open-eye' : 'closed-eye' }`}
                                        onClick={ handleVisiblePassword }  
                                    ></div>
                                </div>
                                <label htmlFor="confirmChangePassword">Confirma tu nuevo password:</label>
                                <div className="changepass-input-container">
                                    <input 
                                        type={ isVisiblePassword ? 'text' : 'password' }
                                        name="confirmChangePassword"
                                        id="confirmChangePassword"
                                        value={ form.confirmChangePassword }
                                        onChange={ handleChange }
                                    />
                                    <div 
                                        className={`icon-eye ${ isVisiblePassword ? 'open-eye' : 'closed-eye' }`}
                                        onClick={ handleVisiblePassword }
                                    ></div>
                                </div>
                                <button
                                    type='submit'
                                >
                                    Guardar password
                                </button>
                            </form>
                        </div>
            }
        </section>
    </main>
  );
};
