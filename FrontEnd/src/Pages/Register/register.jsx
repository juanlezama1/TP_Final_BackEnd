import Container from 'react-bootstrap/esm/Container'
import Main_Titles from '../../Components/Main_Titles/main_titles'
import Main_Subtitles from '../../Components/Main_Subtitle/subtitle'
import { Button, Form, Input, InputNumber} from 'antd'
import { useState } from 'react'
import { Spin } from 'antd'
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {

    const onFinish = async (values) => {

        setLoading(true)
        const response = await fetch('http://localhost:8080/api/users', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(values)})
        setRegistrationStatus(response.status)
        setLoading(false)
    }

    const [loading, setLoading] = useState(false)
    const [registrationStatus, setRegistrationStatus] = useState(null)

    // Si está cargando, muestro SPIN
    if (loading)

        {
            return (
                <>
                <Spin style={{backgroundColor: '#5eb0df', color: 'whitesmoke'}} tip="Registrando usuario..." size="large"> 
                    <div style={{padding: 50, backgroundColor: '#5eb0df', borderRadius: 4, color: 'whitesmoke'}} /> 
                </Spin>
                <ToastContainer />
                </>
            )
        }
    
    else {

        // Si no está cargando, y aún no contactó al server, muestro el formulario base

        if (!registrationStatus)

        {
            return (
                <Container fluid style={{backgroundColor: '#5eb0df'}}> 
                    <div className="row">
                        <div className="col-6 image_div">
                            <img src="/images/intensamente.jpg" alt="login_image" style={{width: '100%'}}/>
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-start">
                            <Main_Titles style={{padding: '0px', marginBottom: '60px', marginTop: '15px'}} title={"Formulario de registro:"}></Main_Titles>
                            <Form name="basic" labelCol={{span: 8}} wrapperCol={{span: 16}} style={{maxWidth: 600}} initialValues={{remember: true}} onFinish={onFinish} autoComplete="off">
                                <Form.Item label="Nombre completo" name="first_name" rules={[{required: true, message: 'Por favor ingrese su nombre completo!'}]}>
                                    <Input />
                                </Form.Item>
        
                                <Form.Item label="Apellido" name="last_name" rules={[{required: true, message: 'Por favor ingrese su apellido!'}]}>
                                    <Input />
                                </Form.Item>
        
                                <Form.Item label="Edad" name="age" rules={[{required: true, message: 'Por favor ingrese su edad!' }]}>
                                    <InputNumber />
                                </Form.Item>
        
                                <Form.Item name='email' label="Email" rules={[{required: true, message: 'Por favor ingrese su correo electrónico!' }, { type: 'email', message: 'El formato del correo electrónico no es válido!'}]}>
                                    <Input />
                                </Form.Item>
        
                                <Form.Item label="Contraseña" name="password" rules={[{required: true, message: 'Por favor ingrese su password!'}]} hasFeedback>
                                    <Input.Password />
                                </Form.Item>
        
                                <Form.Item label="Confirmar contraseña" name="password_confirm" dependencies={['password']} hasFeedback rules={[{required: true, message: 'Por favor confirme su contraseña'}, ({ getFieldValue }) => ({validator(_, value) {if (!value || getFieldValue('password') === value) {return Promise.resolve()} return Promise.reject(new Error('Las contraseñas no coinciden!'))}})]}>
                                    <Input.Password />
                                </Form.Item>
                        
                                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                                    <Button type="primary" htmlType="submit">
                                        Crear Usuario
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <ToastContainer />
                </Container>
            )
        }

        // Caso que ya tengo respuesta del server y el server está caído o se enviaron datos maliciosos (usuario modificó algo del front)
        
        else if (registrationStatus == 500  || registrationStatus == 400){

        // Quedará cargando eternamente
        setLoading(true)
        }

        // Caso de email ya registrado
        else if (registrationStatus == 409) {

            toast.warn("Email ya cargado!", {theme: 'colored', transition: Zoom, pauseOnHover: false})
            
            return (
                <Container fluid style={{backgroundColor: '#5eb0df'}}> 
                    <div className="row">
                        <div className="col-6 image_div">
                            <img src="/images/intensamente.jpg" alt="login_image" style={{width: '100%'}}/>
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-start">
                            <Main_Titles style={{padding: '0px', marginBottom: '60px', marginTop: '15px'}} title={"Formulario de registro:"}></Main_Titles>
                            <Form name="basic" labelCol={{span: 8}} wrapperCol={{span: 16}} style={{maxWidth: 600}} initialValues={{remember: true}} onFinish={onFinish} autoComplete="off">
                                <Form.Item label="Nombre completo" name="first_name" rules={[{required: true, message: 'Por favor ingrese su nombre completo!'}]}>
                                    <Input />
                                </Form.Item>
        
                                <Form.Item label="Apellido" name="last_name" rules={[{required: true, message: 'Por favor ingrese su apellido!'}]}>
                                    <Input />
                                </Form.Item>
        
                                <Form.Item label="Edad" name="age" rules={[{required: true, message: 'Por favor ingrese su edad!' }]}>
                                    <InputNumber />
                                </Form.Item>
        
                                <Form.Item name='email' label="Email" rules={[{required: true, message: 'Por favor ingrese su correo electrónico!' }, { type: 'email', message: 'El formato del correo electrónico no es válido!'}]}>
                                    <Input />
                                </Form.Item>
        
                                <Form.Item label="Contraseña" name="password" rules={[{required: true, message: 'Por favor ingrese su password!'}]} hasFeedback>
                                    <Input.Password />
                                </Form.Item>
        
                                <Form.Item label="Confirmar contraseña" name="password_confirm" dependencies={['password']} hasFeedback rules={[{required: true, message: 'Por favor confirme su contraseña'}, ({ getFieldValue }) => ({validator(_, value) {if (!value || getFieldValue('password') === value) {return Promise.resolve()} return Promise.reject(new Error('Las contraseñas no coinciden!'))}})]}>
                                    <Input.Password />
                                </Form.Item>
                        
                                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                                    <Button type="primary" htmlType="submit">
                                        Crear Usuario
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <ToastContainer />
                </Container>
            )
        }

        // Caso de éxito
        else {
            return (
                <Container fluid style={{backgroundColor: '#5eb0df'}}>
                    <div className="row">
                        <div className="col-6 d-flex flex-row justify-content-center">
                            <img style={{height: '70vh', padding: '5px'}} src="/images/stich.jpg" alt="imagen_stich" />
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-center">
                            <Main_Titles title={"Usuario creado con éxito!"}/>
                            <Main_Subtitles subtitle="Puede loguearse cuando lo desee"/>
                        </div>
                    </div>
                    <ToastContainer />
                </Container>
            )
        } 
    }
}

export default Register