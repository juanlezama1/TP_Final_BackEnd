import Container from 'react-bootstrap/esm/Container'
import Main_Titles from '../../Components/Main_Titles/main_titles'
import { Button, Form, Input, InputNumber} from 'antd'

const onFinish = (values) => {
    console.log(values)
}

const Register = () => {

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
        </Container>
    )
}

export default Register