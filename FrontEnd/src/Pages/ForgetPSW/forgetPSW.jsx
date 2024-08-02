import Main_Titles from '../../Components/Main_Titles/main_titles'
import Main_Subtitles from '../../Components/Main_Subtitle/subtitle'
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import './forgetPSW.css'
import EmailForm from '../../Components/EmailForm/email_form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const ForgetPSW = () => {

    const [imageValue, setImageValue] = useState("/images/anxiety.jpg");
    const [Subtitle_Value, setSubtitleValue] = useState("No hay problema, recuperala desde acá!");
    const [FieldIsVisible, setVisibleField] = useState(true);
    const [Title_Value, setTitleValue] = useState("¿Olvidaste tu contraseña?")

    const handle_finish = () => {
      setImageValue("/images/email.png")
      setVisibleField(false)
      setSubtitleValue("Te enviamos las instrucciones de recuperación por e-mail")
      setTitleValue("Correo Electrónico Enviado!")
      toast.warn("Aclaración: Revisar el SPAM!", {position: 'bottom-right', autoClose: 6500})
    };

    return (
    
    <>
      <Container>
        <Main_Titles title={Title_Value}/>

        <div className="image_container d-flex justify-content-center">
          <img src={imageValue} alt="imagen_ansiedad" className='main_image' />
        </div>

        <Main_Subtitles subtitle={Subtitle_Value}/>

        {FieldIsVisible && (        <div className="row">
          <div className="col-12">
            <div className='d-flex'>
          <EmailForm handle_finish={handle_finish} />
          </div>
          </div>
        </div>)}

      <ToastContainer />
      </Container>
  </>)
}

export default ForgetPSW

















