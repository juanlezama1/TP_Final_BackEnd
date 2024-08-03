import Container from 'react-bootstrap/esm/Container'
import Main_Titles from '../../Components/Main_Titles/main_titles'
import './notFound.css'

const NotFound = () => {

    return (
        <Container>
            <Main_Titles title={"404 - Página No Encontrada"}/>
            <div className="row">
                <div className="main_error col-12">
                </div>
            </div>
        </Container>
    )
}

export default NotFound