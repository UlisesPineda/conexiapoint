import PropTypes from 'prop-types';

import { useAlertMessage, useAuthUser, useForm, useValidateForm } from "../hooks";

export const ResetPasswordForm = ({ handleTypeLoginForm }) => {

    const { 
        form, 
        handleChange, 
        resetForm ,
        disableButtonForm,
        enableButtonForm,
    } = useForm({ emailReset: '' });
    const { onRequestResetPassword } = useAuthUser();
    const { startActivateMessage } = useAlertMessage();
    const { validateEmail } = useValidateForm();

    const handleResetPassword = async(e) => {
        e.preventDefault();
        if( form.emailReset === '' ) {
        startActivateMessage({
            title: 'El correo es requerido',
            message: 'Ingresa el correo con el que te registraste',
            isHidenButton: false,
        });
        return
        }
        validateEmail( form.emailReset ) &&
            disableButtonForm() &&
                await onRequestResetPassword( form ) ?
                    resetForm() & enableButtonForm() :
                        enableButtonForm();
    };
    
  return (
    <>
        <form
            onSubmit={ handleResetPassword }
            className='login-form'
        >
            <label htmlFor="emailReset">Ingresa el correo con el que te registraste:</label>
            <input 
                type="text" 
                name='emailReset' 
                id='emailReset'
                autoComplete='on' 
                value={ form.emailReset }
                onChange={ handleChange }
            />
            <button
                type='submit'
            >
                Recuperar Password
            </button>
        </form>
        <p>¿Ya tienes cuenta?</p>
        <p onClick={ handleTypeLoginForm }>Inicia Sesión</p>
    </>
  );
};

ResetPasswordForm.propTypes = {
    handleTypeLoginForm: PropTypes.func.isRequired,
};