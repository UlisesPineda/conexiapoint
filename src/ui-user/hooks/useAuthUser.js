import { useAlertMessage } from "./useAlertMessage";
import { conexiaPointAPI } from "../../api/conexiaPointAPI";

export const useAuthUser = () => {

    const { startActivateMessage } = useAlertMessage();

    const onStartLogin = async( form ) => {
        try {
            const { data } = await conexiaPointAPI.post( '/auth/login-user', form );
            // document.cookie = `auth-token=${ data.token }; max-age=1200; domain=.conexiapoint.com; path=/; samesite=none; secure`;
            document.cookie = `auth-token=${ data.token }; max-age=7200`;
            window.location.href = `${ import.meta.env.VITE_API_USER_URL }/escritorio`;
            return true;
        } catch (error) {
            console.log(error);
            if( error.response.status === 401 ){
                startActivateMessage({
                    title: error.response.data.message,
                    message: error.response.data.text,
                    isHidenButton: false,
                });
                return false;
            }
            if( error.response.status === 404 ){
                startActivateMessage({
                    title: error.response.data.message,
                    message: error.response.data.text,
                    isHidenButton: false,
                });
                return false;
            }
            else {
                startActivateMessage({
                    title: 'Hubo un error al iniciar sesión',
                    message: 'Intenta más tarde',
                    isHidenButton: false,
                });
                return false;
            }
        }            
    };

    const onRegisterUser = async( form ) => {
        try {
            const { data } = await conexiaPointAPI.post( '/auth/register-user', form );
            startActivateMessage({
                title: data.message,
                message: data.text,
                isHidenButton: false,
            });
        } catch (error) {
            console.log( error );
            if( error.response.status === 400 ){
                startActivateMessage({
                    title: error.response.data.message,
                    message: error.response.data.text,
                    isHidenButton: false,
                });
            }
            else {
                startActivateMessage({
                    title: 'Hubo un error al generar el registro',
                    message: 'Intenta más tarde',
                    isHidenButton: false,
                });
            }
        }
        return true;
    };

    const onActivateUser = async( token ) => {
        try {
            await conexiaPointAPI.get( `/auth/activate-user/${ token }` );
            return true;
        } catch (error) {
            console.log( error );
            return false;
        }
    };

    const onRequestResetPassword = async( form ) => {
        try {
            const { data } = await conexiaPointAPI.post( '/auth//request-mail-resetpassword/', form );
            startActivateMessage({
                title: data.message,
                message: data.text,
                isHidenButton: false,
            });
            return true;
        } catch (error) {
            console.log( error );
            if( error.response.status === 404 ){
                startActivateMessage({
                    title: error.response.data.message,
                    message: error.response.data.text,
                    isHidenButton: false,
                });
                return false;
            }
            else {
                startActivateMessage({
                    title: 'Hubo un error al solicitar el cambio de password',
                    message: 'Contacta a soporte',
                    isHidenButton: false,
                });
                return false;
            }
        }
    };

    const onResetPassword = async( form, token ) => {
        try {
            const { data } = await conexiaPointAPI.put( `/auth/reset-password/${ token }`, form );
            startActivateMessage({
                title: data.message,
                message: data.text,
                isHidenButton: false,
            });
            return true;
        } catch (error) {
            console.log( error );
            if( error.response.status === 404 ){
                startActivateMessage({
                    title: error.response.data.message,
                    message: error.response.data.text,
                    isHidenButton: false,
                });
                return false;
            }
            else {
                startActivateMessage({
                    title: 'Hubo un error al realizar el cambio de password',
                    message: 'Contacta a soporte',
                    isHidenButton: false,
                });
                return false;
            }
        }
    };

    return {
        onStartLogin,
        onRegisterUser,
        onActivateUser,
        onRequestResetPassword,
        onResetPassword,
    };
};