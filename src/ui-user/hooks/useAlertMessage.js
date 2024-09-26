import { useDispatch } from "react-redux";
import { onActivateMessage, onDesactivateMessage } from "../../store/slices/alertMessageSlice";

export const useAlertMessage = () => {
    const dispatch = useDispatch();

    const startActivateMessage = ( title, message, isHidenButton ) => {
        dispatch( onActivateMessage( title, message, isHidenButton ) );
    };

    const startDesactivateMessage = (  ) => {
        dispatch( onDesactivateMessage() );
    };

    return {
        startActivateMessage,
        startDesactivateMessage,
    };
};