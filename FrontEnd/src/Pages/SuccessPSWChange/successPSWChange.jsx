import Container from "react-bootstrap/esm/Container"
import Main_Subtitles from "../../Components/Main_Subtitle/subtitle"
import './successPSWChange.css'

const SuccessPSWChange = () => {

    return (
        <Container>
            <div className="image_container d-flex justify-content-center">
                <img src="/images/alegria.png" alt="imagen_alegria" className='main_image' />
            </div>
            <Main_Subtitles subtitle="Contraseña actualizada con éxito!"/>
        </Container>
    )
}

export default SuccessPSWChange