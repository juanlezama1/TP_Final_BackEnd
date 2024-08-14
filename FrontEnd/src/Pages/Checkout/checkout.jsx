import {ToastContainer} from 'react-toastify'
import {Container} from 'react-bootstrap'
import Main_Titles from '../../Components/Main_Titles/main_titles'
import Main_Subtitles from '../../Components/Main_Subtitle/subtitle'
import { CartContext } from '../../Components/Context/context'
import { useContext } from 'react'

const Checkout = () => {

    const {cart} = useContext(CartContext) // Contexto

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
                        <Main_Subtitles subtitle={"Confirmá tu compra antes de continuar!"}/>

                        {cart.length == 0? 
                            <div className='mt-5'>
                                <div className='d-flex flex-row justify-content-center'>
                                    <h4>
                                        Sin productos por ahora ✌️
                                    </h4>
                                </div>
                            </div> : 
                            
                            <div>
                                Ahora pongo
                            </div>
                        }

                    </div>
                </div>
            <ToastContainer />
        </Container>
    )
}

export default Checkout