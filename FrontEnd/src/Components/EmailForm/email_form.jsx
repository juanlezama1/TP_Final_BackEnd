import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { Spin } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
   
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: 'Es necesario completarlo!',
    types: {
      email: 'No es un email válido!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */

const EmailForm = ({handle_finish}) => {

    const onFinish = async (email) => {
        setButton(false)
        setSpinner(true)
        const response = await fetch('http://localhost:8080/api/users/resetPSW', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email: email.user.email})})
        if (response.status == 200)
          handle_finish()

        else {
          setButton(true)
          setSpinner(false)
          toast.error("Usuario inexistente!", {position: 'bottom-right', autoClose: 1000})
        }
      };

    const [buttonIsVisible, setButton] = useState(true);
    const [spinnerIsVisible, setSpinner] = useState(false);

    return (
        <>
    <Form
{...layout}
name="nest-messages"
onFinish={onFinish}
style={{
  maxWidth: 600,
}}
validateMessages={validateMessages}
>
<Form.Item
  name={['user', 'email']}
  label="Email"
  rules={[
    {
      type: 'email',
      required: 'true'
    },
  ]}
>
  <Input />
</Form.Item>

<Form.Item
  wrapperCol={{
    ...layout.wrapperCol,
    offset: 8,
  }}
>
  {buttonIsVisible && (  <Button type="primary" htmlType="submit">
    Recuperar Correo!
  </Button>)
  }

  {spinnerIsVisible && ( <Spin />)}

</Form.Item>
</Form>
</>)
}

export default EmailForm


