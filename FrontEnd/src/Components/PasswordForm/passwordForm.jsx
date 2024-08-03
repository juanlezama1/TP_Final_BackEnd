import {Button, Form, Input, Flex, Spin} from 'antd'

const formItemLayout = {labelCol: {xs: {span: 24}, sm: {span: 8}}, wrapperCol: {xs: {span: 24}, sm: {span: 16}}}
const tailFormItemLayout = {wrapperCol: {xs: {span: 24, offset: 0}, sm: {span: 16, offset: 8}}}

const PasswordForm = () => {

    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };

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
        </Form>
    )
}

export default PasswordForm