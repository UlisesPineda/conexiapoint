import { conexiaPointAPI } from "../../api/conexiaPointAPI";
import { useAlertMessage } from "./useAlertMessage";

export const useSuscriber = () => {

    const { startActivateMessage } = useAlertMessage();

    const registerSuscriber = async( form ) => {
        try {
            const { data } = await conexiaPointAPI.post( '/susc/register-suscriber', form );
            startActivateMessage({
                title: data.message,
                message: data.text,
                isHidenButton: false,
            });
            console.log(data);
            return true;
        } catch (error) {
            console.log( error );
            if( error.response.status === 400 ){
                startActivateMessage({
                    title: error.response.data.message,
                    message: error.response.data.text,
                    isHidenButton: false,
                });
                return false;
            }
            else {
                startActivateMessage({
                    title: 'Hubo un error al dar de alta tu suscripción',
                    message: 'Intenta más tarde',
                    isHidenButton: false,
                });
                return false;
            }
        }
    };

    return {
        registerSuscriber,
    };
};