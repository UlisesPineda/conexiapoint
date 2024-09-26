import { Link } from 'react-router-dom';
import './styles/MainPage.css';

export const MainPage = () => {
  return (
    <main>
        <section className="main-section">
            <div className="main-block">
              <h1>CRM CONEXIA POINT</h1>
              <h2>¡Un CRM sencillo, rápido y gratuito!</h2>
              <p>Gestiona todas las interacciones con tus clientes de una manera práctica, ágil y eficaz.</p>
            </div>
            <div className="main-block ilustration-block">
              <img src="/img/main-base-ilustration.svg" alt="Ilustración principal del sitio web" />
              <img src="/img/main-float-ilustration.svg" alt="Ilustración principal del sitio web" className='floating-ilustration' />
              <img src="/img/main-light-ilustration.svg" alt="Ilustración principal del sitio web" className='light-ilustration'/>
            </div>
        </section>
        <section className="description-section">
            <div className="main-block-container-one">
              <div className="main-block">
                <h2>Administra la información de tus clientes y contactos</h2>
                <p>Desde tu escritorio de trabajo podrás administrar datos, números telefónicos, podrás enviar correos y mensajes de texto y whatsApp, la ubicación en maps y crear avisos y tareas.</p>
                <p>Podrás administrar todos tus contactos tanto personales y de negocios de manera separada para una mejor organización y para objetivos diferentes.</p>
              </div>
              <div className="main-block ilustration-block description-ilustration">
                <img src="/img/info-ilustration-one.svg" alt="Ilustración de la sección descriptiva" />
              </div>
            </div>
            <div className="main-block-container-two">
              <div className="main-block">
                <h2>Administrador de una sola vista</h2>
                <p>Toda tu información la podrás consultar desde tu área de trabajo para una organización más intuitiva simple y eficaz.</p>
                <p>Si necesitas alguna funcionalidad adicional, podrás hacer una solicitud para evaluar tu requerimiento y en caso de ser aprobado podrás contar con dicho apartado.</p>
              </div>
              <div className="main-block ilustration-block description-ilustration">
                <img src="/img/info-ilustration-two.svg" alt="Ilustración de la sección descriptiva" />
              </div>
            </div>
        </section>
        <section className="call-action-section">
            <div className="call-action-container">
              <h2>Crea una cuenta gratuita</h2>
              <p>Puedes comenzar a administrar tus contactos comerciales en cualquier momento, crear una cuenta solo te toma unos instantes.</p>
              <Link 
                to='/registro'
                className='call-action-button'
              >
                REGÍSTRATE
              </Link>
            </div>
        </section>
    </main>
  );
};
