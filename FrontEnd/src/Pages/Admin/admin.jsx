import Container from 'react-bootstrap/esm/Container'
import Main_Titles from '../../Components/Main_Titles/main_titles'
import Main_Subtitles from '../../Components/Main_Subtitle/subtitle'
import { UserOutlined, ProductOutlined, IdcardOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useState } from 'react'
import { Bounce, ToastContainer, Zoom, toast } from 'react-toastify'

const Admin = () => {

const [button_loading, setLoading] = useState(false)

const deleteOldUsers = async () => {

    setLoading(true)
    toast.info("Borrando usuarios obsoletos...", {theme: 'light', transition: Bounce, pauseOnHover: false, autoClose: 3000, hideProgressBar: true})
    const response = await fetch('http://localhost:8080/api/users', {method: 'DELETE', headers: {'Content-Type': 'application/json'}})
    const response2 = await response.json()

    // Obtengo la cantidad de usuarios que fueron eliminados
    const qty_users_deleted = response2.qty_users_deleted

    if (response.status == 200)

    {
        if (qty_users_deleted == 0) {
            toast.warn("No hay usuarios obsoletos!", {autoClose: 5000, pauseOnHover: false, theme: 'colored', transition: Bounce, closeOnClick: true, hideProgressBar: true })
            setLoading(false)
            return
        }

        else {
            toast.success("Usuarios obsoletos notificados por Email", {autoClose: 5000, pauseOnHover: false, theme: 'colored', transition: Bounce, closeOnClick: true, hideProgressBar: true })
            toast.success("Usuarios obsoletos borrados!", {autoClose: 5000, pauseOnHover: false, theme: 'colored', transition: Bounce, closeOnClick: true, hideProgressBar: true })
            setLoading(false)
            return
        }
    }
}

const coming_soon_button = () => {
    toast.warning("PRÓXIMAMENTE!", {icon: "🔥", theme: 'colored', pauseOnHover: false});    
  }

    return (

        <Container fluid style={{backgroundColor: '#5eb0df'}}>
            <div className="row">
                <div className="col-6 d-flex flex-row justify-content-center">
                    <img src="/images/admin.png" alt="admin_image" style={{height: '75vh'}}/>
                </div>

                <div className="col-6">
                    <Main_Titles title={"Acceso Admin:"}></Main_Titles>
                    <Main_Subtitles subtitle={"Funciones de Administrador"}></Main_Subtitles>
                    <div style={{height: '50vh'}} className="d-flex flex-column justify-content-around align-items-center">
                        <Button style={{height: '60px', width: '400px'}} type="primary" icon={<UserOutlined />} loading={button_loading} onClick={() => deleteOldUsers()}>
                            Borrar Usuarios Obsoletos (2 días sin actividad)
                        </Button>
                        <Button style={{height: '60px', width: '400px'}} type="primary" icon={<ProductOutlined />} onClick={() => coming_soon_button()}>
                            Gestionar Productos
                        </Button>
                        <Button style={{height: '60px', width: '400px'}} type="primary" icon={<IdcardOutlined />} onClick={() => coming_soon_button()}>
                            Convertir Usuarios comunes a Premium/Admin
                        </Button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Container>
    )
}

export default Admin