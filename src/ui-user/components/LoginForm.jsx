import { useState } from 'react';
import PropTypes from 'prop-types';

import { useAuthUser, useForm, useValidateForm } from '../hooks';

export const LoginForm = ({ handleTypeLoginForm }) => {

    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    const handleVisiblePassword = () => {
        setIsVisiblePassword( !isVisiblePassword );
    };

    const { validateLoginForm } = useValidateForm();
    const { onStartLogin } = useAuthUser();
    const { 
        form,
        resetForm,
        handleChange, 
        isDisabled,
        disableButtonForm,
        enableButtonForm,
    } = useForm({
        emailLogin: '',
        passwordLogin: '',
    });

    const handleLogin = async(e) => {
        e.preventDefault();
        validateLoginForm( form ) &&
            disableButtonForm() &&
                await onStartLogin( form ) ?
                    enableButtonForm() & resetForm() :
                        enableButtonForm();
    };    
    
    return (
        <>
            <form
                onSubmit={ handleLogin }
                className='login-form'
            >
                <label htmlFor="emailLogin">Ingresa tu correo:</label>
                <input 
                    type="text" 
                    name='emailLogin' 
                    id='emailLogin'
                    autoComplete='on' 
                    value={ form.emailLogin }
                    onChange={ handleChange }
                />
                <div className="password-div">
                    <label htmlFor="passwordLogin">Crea tu contraseña:</label>
                    <input 
                        type={ isVisiblePassword ? 'text' : 'password' }
                        name='passwordLogin' 
                        id='passwordLogin' 
                        value={ form.passwordLogin }
                        onChange={ handleChange }
                    />
                    <span
                        className={`icon-eye ${isVisiblePassword ? 'open-eye' : 'closed-eye'}`}
                        onClick={ handleVisiblePassword }           
                    >
                    </span>
                </div>
                <button
                    type='submit'
                    disabled={ isDisabled }
                    className={ isDisabled ? 'login-form-button-disabled' : '' }
                >
                    Entrar
                </button>
            </form>
            <p>¿Olvidaste tu password?</p>
            <p onClick={ handleTypeLoginForm }>Recupéralo Aquí</p>
        </>
    );
};

LoginForm.propTypes = {
    handleTypeLoginForm: PropTypes.func.isRequired,
};
