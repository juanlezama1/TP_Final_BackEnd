import Container from "react-bootstrap/esm/Container"
import Main_Subtitles from "../../Components/Main_Subtitle/subtitle"
import './successPSWChange.css'
import Main_Titles from "../../Components/Main_Titles/main_titles"

const SuccessPSWChange = () => {

    return (
        <Container fluid style={{backgroundColor: '#5eb0df'}}>
            <div className="row">
                <div className="col-6 d-flex flex-row justify-content-center">
                    <img src="/images/alegria.png" alt="imagen_alegria" className='main_image_successPSWChange' />
                </div>

                <div className="col-6 d-flex flex-column justify-content-center">
                    <Main_Titles title={"Contraseña actualizada con éxito!"}/>
                    <Main_Subtitles subtitle="Ya puede utilizarla con normalidad"/>
                </div>
            </div>
        </Container>
    )
}

export default SuccessPSWChange