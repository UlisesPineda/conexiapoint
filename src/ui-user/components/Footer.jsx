import { Link } from 'react-router-dom';
import './styles/Footer.css';

import { useForm, useSuscriber, useValidateForm } from '../hooks';

export const Footer = () => {

  const { registerSuscriber } = useSuscriber()
  const { validateSuscriberForm } = useValidateForm();
  const { 
    form, 
    handleChange, 
    resetForm ,
    isDisabled,
    disableButtonForm,
    enableButtonForm,
  } = useForm({
    suscriberName: '',
    suscriberEmail: '',
  });
  const { suscriberName, suscriberEmail } = form;

  const handleSuscription = async(e) => {
    e.preventDefault();
      validateSuscriberForm( form ) &&
        disableButtonForm() &&
          await registerSuscriber( form ) ?
            enableButtonForm() & resetForm() :
              enableButtonForm();
  };  

  return (
    <nav className='site-footer'>
      <div className="footer-container">
        <div className="block-footer">
          <strong>NEWSLETTER</strong>
          <span></span>
          <p>Suscríbete a nuestra newsletter y recibe notificaciones de nuevas funciones para tu CRM.</p>
          <form 
            className='form-suscription'
            onSubmit={ handleSuscription }
          >
            <label htmlFor="suscriberName">Tu nombre:</label>
            <input 
              type="text" 
              name='suscriberName' 
              id='suscriberName'
              value={ suscriberName }
              onChange={ handleChange }
            />
            <label htmlFor="suscriberEmail">Tu correo:</label>
            <input 
              type="text" 
              name='suscriberEmail' 
              id='suscriberEmail'
              value={ suscriberEmail }
              onChange={ handleChange }
            />
            <button 
              type='submit'
              disabled={ isDisabled }
              className={ isDisabled ? 'susc-form-button-disabled' : '' }
            >
              SUSCRÍBEME
            </button>
          </form>
        </div>
        <div className="block-footer">
          <strong>AVISOS</strong>
          <span></span>
          <p>El servicio otorgado por CONEXIA POINT es completamente gratuito y está sujeto a los términos y condiciones del servicio.</p>
          <p>Si tienes alguna duda o requieres alguna consulta puedes escribirnos a contacto@conexiapoint.com.</p>
        </div>
        <div className="block-footer">
          <strong>ENLACES</strong>
          <span></span>
          <Link
            to='/terminos-y-condiciones'
            className='link-footer'
            title='Consulta los términos y condiciones'
          >
            TÉRMINOS Y CONDICIONES
          </Link>
          <Link
            to='/politica-de-cookies'
            className='link-footer'
            title='Consulta nuestra política de cookies'
          >
            POLÍTICA DE COOKIES
          </Link>
          <Link
            to='/politica-de-privacidad'
            className='link-footer'
            title='Consulta nuestra política de privacidad'
          >
            POLÍTICA DE PRIVACIDAD
          </Link>
        </div>
      </div>
    </nav>
  );
};
