import Container from 'react-bootstrap/esm/Container'
import Main_Titles from '../../Components/Main_Titles/main_titles'
import './notFound.css'
import { ToastContainer } from 'react-toastify'

const NotFound = () => {

    return (
        <Container fluid>
            <Main_Titles title={"404 - Página No Encontrada"}/>
            <div className="row">
                <div className="main_error col-12">
                </div>
            </div>
            <ToastContainer />
        </Container>
    )
}

export default NotFound