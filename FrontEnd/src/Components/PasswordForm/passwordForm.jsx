import {Button, Form, Input, Spin} from 'antd'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const formItemLayout = {labelCol: {xs: {span: 24}, sm: {span: 8}}, wrapperCol: {xs: {span: 24}, sm: {span: 16}}}
const tailFormItemLayout = {wrapperCol: {xs: {span: 24, offset: 0}, sm: {span: 16, offset: 8}}}

const PasswordForm = ({token}) => {

    const navigate = useNavigate();

    const [form] = Form.useForm();
    const onFinish = async (values) => {

        // Objeto con Token y nueva contraseña que enviaré al Back
        const update_object = {
            new_password: values.password,
            token: token
        }

        // LLamo a la API
        const response = await fetch('http://localhost:8080/api/users/changePSW', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(update_object)})
        
        // Verifico el código que devolvió

        if (response.status == 200)  // Caso positivo
            navigate('/successPSWChange')

        else if (response.status == 500)  // Servidor caído
            toast.error("Servidor no responde!", {position: 'bottom-right', autoClose: 13000})

        else if (response.status == 400)
            toast.warn("La nueva contraseña no puede ser igual a la anterior!", {theme: 'colored', transition: Zoom, pauseOnHover: false})

        else
            window.location.assign("http://localhost:5173/changePSW")
    }
 
    return (

        <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} style={{maxWidth: 600}} scrollToFirstError>
            <Form.Item name="password" label="Contraseña" rules={[{required: true, message: 'Por favor ingrese su contraseña!'}]} hasFeedback>
                <Input.Password style={{marginLeft: '55px'}} />
            </Form.Item>
    
            <Form.Item name="confirm" label="Repetir contraseña" dependencies={['password']} hasFeedback rules={[{required: true, message: 'Por favor ingrese su contraseña!'}, ({ getFieldValue }) => ({validator(_, value) {if (!value || getFieldValue('password') === value) {return Promise.resolve()} return Promise.reject(new Error('Las contraseñas ingresadas son diferentes!'))}})]}>
                <Input.Password style={{marginLeft: '55px'}}/>
            </Form.Item>
    
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Actualizar Contraseña
                </Button>
            </Form.Item>
            <ToastContainer />
        </Form>
    )
}

export default PasswordForm