import Container from "react-bootstrap/esm/Container"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { LoadingOutlined } from '@ant-design/icons';
import Main_Subtitles from "../../Components/Main_Subtitle/subtitle"
import PasswordForm from "../../Components/PasswordForm/passwordForm";
import {Flex, Spin} from 'antd'
import './changePSW.css'

const ChangePSW = () => {

    // Obtengo el parámetro de token, si existe
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const token_value = queryParams.get("token")
    
    // Función asincrónica que chequea si el token es válido.
    // Cambia el estado del Spinner cuando termine y carga el estado del token (válido/no válido)
    const checkToken = async (token_value) => {

        if (token_value) {
            const response = await fetch('http://localhost:8080/api/users/validateToken', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({token: token_value})})
            setLoading(false)
            setTokenStatus(response.status)
            return
        }

        else {
            setLoading(false)
            setTokenStatus(400) // Si no te mandaron token, equivale a "Token Inválido"
            return
        }
    }
    
    // Estado para poner/sacar el Spinner
    const [loading, setLoading] = useState(true)
    const [token_status, setTokenStatus] = useState(null)

    // Apenas ingresa, se manda a validar el token
    useEffect(() => {
        checkToken(token_value)
    }, [])

    // Si está cargando, muestro un Spinner
    if (loading)

    {
        return (
            <Flex align="center" gap="middle">
                <Spin indicator={<LoadingOutlined spin />} />
                <div>VALIDANDO FORMULARIO...</div>
            </Flex>
        )
    }

    // Si no está cargando, verifico el estado del Token
    else {

        if(token_status != 200) // Caso de token vencido/modificado

        {
            return(
                <Container>
                    <div className="row">
                        <div className="token_invalid col-12 d-flex justify-content-center">
                            <img src="./images/tristeza.png" alt="imagen_tristeza" />
                        </div>
                    </div>
                    <Main_Subtitles subtitle={"Token inválido o vencido"}/>
                </Container>    
            )
        }

        else { // Caso de Token Válido

            return (
            
                <Container>
                     <Main_Subtitles className="subtitle" subtitle={"Ingrese su nueva contraseña"}/>
                     <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <img src="./images/secret.png" alt="imagen_secreto" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <PasswordForm></PasswordForm>
                        </div>
                    </div>
                </Container>
            )
        }
    }
}

export default ChangePSW












