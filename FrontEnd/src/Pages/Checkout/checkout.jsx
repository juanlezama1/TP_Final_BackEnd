import {ToastContainer} from 'react-toastify'
import {Container} from 'react-bootstrap'
import Main_Titles from '../../Components/Main_Titles/main_titles'

const Checkout = () => {

    return (

        <Container fluid style={{backgroundColor: '#5eb0df'}}>
                <div className='row p-3'>
                    <div className="col-6">
                        <div className='d-flex flex-row justify-content-center align-items-center'>
                            <img src="/images/checkout.jpg" alt="checkout_image" style={{width: '90vh'}}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <Main_Titles title={"Checkout"}/>
                    </div>
                </div>
            <ToastContainer />
        </Container>
    )
}

export default Checkout