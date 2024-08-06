import Container from 'react-bootstrap/esm/Container'
import './registerAndLogin.css'
import Main_Titles from '../../Components/Main_Titles/main_titles'
import { Button, Checkbox, Form, Input } from 'antd'

const onFinish = (values) => {
    console.log('Success:', values)
}

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
}

const RegisterAndLogin = () => {

    return (
            <Container fluid>
                <div className="row" style={{backgroundColor: '#5eb0df'}}>
                    <div className="col-4 image_div d-flex flex-row justify-content-center align-items-center">
                        <img src="/images/coraje.jpg" alt="login_image" style={{width: '100%'}}/>
                    </div>
                    <div className="col-8">
                        <Main_Titles title={"Registrate o ingresá para continuar:"}></Main_Titles>
                        <div className="row">
                            <div className="col-12 text-center">
                                <button style={{marginTop: '12px'}} type="button"> <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792"> <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path></svg> 
                                    Accedé con GitHub! 
                                </button>
                            </div>
                        </div>

                        <div className="row" style={{marginTop: '0px'}}>
                            <div className="col-8" style={{height: '200px', marginTop: '20px', wordWrap: 'break-word'}}>
                                <Form name="basic" initialValues={{remember: true}} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                                    <Form.Item wrapperCol={{offset: 2, span: 18}} className='d-flex flex-row justify-content-center' label="Email" name="username" rules={[{required: true, message: 'Por favor ingrese su email!'}]}>
                                        <Input />
                                    </Form.Item>
                                    
                                    <Form.Item wrapperCol={{offset: 1, span: 13}} className='d-flex flex-row justify-content-center' label="Contraseña" name="password" rules={[{required: true, message: 'Por favor ingrese su contraseña!'}]}>
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item className='d-flex flex-row justify-content-center mb-1' >
                                        <Button type="primary" htmlType="submit">
                                            Ingresar
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <div className='d-flex flex-row justify-content-center'>
                                    <p className='forget_password'>¿Olvidó su contraseña?</p>
                                </div>
                            </div>

                            <div className="user_register col-4 d-flex flex-column justify-content-center" style={{height: '200px'}}>
                                <div className="row" style={{wordWrap: 'break-word'}}>
                                    <div className="col-12 d-flex flex-row justify-content-center mt-0 pt-0">
                                        ¿No tenés usuario todavía?
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-12 d-flex flex-row justify-content-center">
                                        <p>Registrate&nbsp;</p>
                                        <b>
                                            <a href='/register'>acá</a>
                                        </b>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
    )
}

export default RegisterAndLogin








