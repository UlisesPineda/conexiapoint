import { useState } from "react";

export const useForm = ( initForm ) => {

    const [form, setForm] = useState( initForm );
    const [isDisabled, setIsDisabled] = useState( false );
    const [isAccepted, setIsAccepted] = useState( false );

    const handleChange = ( { target } ) => {
        const { name, value } = target;
        setForm({
            ...form,
            [ name ]: value,
        });
    };

    const resetForm = () => {
        setForm( initForm );
    };
    
    const handleCheckBoxChange = () => {
        setIsAccepted( !isAccepted );
    };

    const resetCheckBox = () => {
        setIsAccepted( false );
    };

    const disableButtonForm = () => {
        setIsDisabled( true );
        return true;
    };

    const enableButtonForm = () => {
        setIsDisabled( false );
        return true;
    };

    return {
        form,
        setForm,
        resetForm,
        handleChange,

        isAccepted,
        resetCheckBox,
        handleCheckBoxChange,

        isDisabled,
        disableButtonForm,
        enableButtonForm,
    };
};