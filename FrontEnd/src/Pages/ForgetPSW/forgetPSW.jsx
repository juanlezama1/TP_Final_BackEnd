import Main_Titles from '../../Components/Main_Titles/main_titles'
import Main_Subtitles from '../../Components/Main_Subtitle/subtitle'
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import './forgetPSW.css'
import EmailForm from '../../Components/EmailForm/email_form';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const ForgetPSW = () => {

    const [sentEmailField, setSentEmailField] = useState(false)

    const handle_finish = () => {
      setSentEmailField(true)
      toast.warn("No olvides revisar tu casilla de SPAM!", {theme: 'colored', transition: Zoom, pauseOnHover: false});    
    }

    return (
    
      <Container fluid className='d-flex flex-column justify-content-center' style={{backgroundColor: '#5eb0df', height: '68vh'}}>
        {!sentEmailField && (
          <div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex flex-row justify-content-center">
                  <img style={{margin: '20px'}} src={'/images/anxiety.jpg'} alt="imagen_ansiedad" className='main_image' />
                </div>
              </div>
              <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                <Main_Titles title={"Olvidaste tu contraseña?"}/>
                <Main_Subtitles style={{marginBottom: '50px', paddingBottom:'0px', color: '#0f276f'}} subtitle={"No hay problema, recuperala desde acá!"}/>
                <EmailForm handle_finish={handle_finish} />
              </div>
            </div>
          </div>)}

        {sentEmailField && (
          <div>
            <Main_Titles title={"Correo Electrónico Enviado!"}/>
            <div className="row">
              <div className="col-12">
                <div className="d-flex flex-column align-items-center">
                  <img src={'/images/email.png'} alt="imagen_ansiedad" className='main_image' />
                  <Main_Subtitles style={{margin: '3px', paddingBottom:'23px', color: '#0f276f'}} subtitle={"Revisá tu correo y seguí las instrucciones"}/>
                </div>
              </div>
            </div>
          </div>
        )}
        <ToastContainer />
      </Container>
    )
}

export default ForgetPSW

















