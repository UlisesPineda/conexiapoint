import { useAlertMessage } from "./useAlertMessage";

export const useValidateForm = () => {
    
    const { startActivateMessage } = useAlertMessage();

    const nameFormat = /^[a-zA-Z\u00C0-\u02AF\s]{1,30}$/;
    const passwordFormat = /^(?=.*[a-zA-Z0-9])(?=.*[/*\-+]).{8,16}$/;
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validateEmptyInput = ( form, title ) => {
        for (let value in form) {
            if (Object.prototype.hasOwnProperty.call(form, value)) {
                if (!form[value] || form[value] === '') {
                    startActivateMessage({
                        title, 
                        message: 'Ingresa la información requerida',
                        isHidenButton: false,     
                    })
                    return false;
                }
            }
        }
        return true;
    };

    const validateEmail = ( email ) => {
        if ( !emailFormat.test( email ) ) {
            startActivateMessage({ 
                title: 'El formato de correo es inválido', 
                message: 'Ingresa un correo con el formato correcto', 
                isHidenButton: false,
            });
            return;
        }
        return true;
    };
    const validateName = ( name ) => {
        if ( !nameFormat.test( name ) ){
            startActivateMessage({ 
                title: 'El formato del nombre no es válido', 
                message: 'El nombre solo acepta letras, no debe ser mayor a 30 caracteres y no acepta caracteres especiales', 
                isHidenButton: false,
            });
            return;
        }
        return true;
    };
    const validatePassword = ( password ) => {
        if ( !passwordFormat.test( password ) ){
            startActivateMessage({ 
                title: 'El formato del password es incorrecto', 
                message: 'El password debe contener letras, números, uno de los siguientes caracteres: / * - + y una longitud de entre 8 y 16 caracteres', 
                isHidenButton: false,
            });
            return;
        }
        return true;
    }
    const comparePasswords = ( password, confirmPassword ) => {
        if ( password !== confirmPassword ) {
            startActivateMessage({
                title: 'Los passwords no coinciden',
                message: 'Verifica que los passwords sean iguales',
                isHidenButton: false,
            });
            return;
        }
        return true;
    };

    const validateCheckbox = ( form, isAccepted ) => {
        if ( !isAccepted ) {
            startActivateMessage({ 
                title: 'No has aceptado los términos y condiciones', 
                message: 'Acepta los términos y condiciones del servicio para generar tu registro', 
                isHidenButton: false,
            });
            return;
        }
        form.isAccepted = isAccepted;
        return true;
    };


    const validateSuscriberForm = ( form ) => {
        const { suscriberName, suscriberEmail } = form;
         return validateEmptyInput( form, 'Es necesario tu nombre y correo para dar de alta la suscripción' ) && 
            validateName( suscriberName ) && 
               validateEmail( suscriberEmail );
    };

    const validateRegisterUser = ( form, isAccepted ) => {
        const { user, email, password, confirmPassword } = form;
        return validateEmptyInput( 
            form, 
            'Para crear tu registro necesitas completar todo el formulario' 
        ) &&
            validateName( user ) && 
                validateEmail( email ) && 
                    validatePassword( password ) && 
                        comparePasswords( password, confirmPassword ) && 
                            validateCheckbox( form, isAccepted );
    };

    const validateLoginForm = ( form ) => {
        const { emailLogin, passwordLogin } = form;
        return validateEmptyInput( 
            form, 
            'Es necesario ingresar correo y contraseña para iniciar sesión' 
        ) &&
            validateEmail( emailLogin )  &&
                validatePassword( passwordLogin );
    };

    const validateChangePasswordForm = ( form ) => {
        const { changePassword, confirmChangePassword } = form;
        return validatePassword( changePassword ) &&
                comparePasswords( changePassword, confirmChangePassword );
    };

    return {        
        validateEmptyInput,
        validateSuscriberForm,
        validateRegisterUser,
        validateLoginForm,
        validateEmail,
        validateChangePasswordForm,
    };
};