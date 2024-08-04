import Products_carousel from "../../Components/Products_carousel/products_carousel"
import Main_Titles from '../../Components/Main_Titles/main_titles'
import Container from "react-bootstrap/esm/Container"

const Main = () => {

    return (
        <Container fluid>
            <div className="row">
                <div className="col-12 m-0 p-0 overflow-hidden">
                    <Main_Titles title={"Proyecto Final CoderHouse - Juguetería D'Kids"}></Main_Titles>
                    <Products_carousel/>
                </div>
            </div>

        </Container>
    )
}

export default Main