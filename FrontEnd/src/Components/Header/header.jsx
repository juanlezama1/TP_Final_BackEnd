import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Badge} from 'antd';
import { Link } from 'react-router-dom';
import './header.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container';
import {ShoppingCartOutlined} from '@ant-design/icons'
import {CartContext} from '../Context/context'
import {Zoom, toast } from 'react-toastify'

const items_productos = [
  {
    key: '1',
    label: (<Link to={'./products/kids'}>Niños</Link>)
  },
  {
    key: '2',
    label: (<Link to={'./products/teenagers'}  >Adolescentes</Link>)
  },
  {
    key: '3',
    label: (<Link to={'./products/adults'}  >Adultos</Link>)
  },
];

const Header = () => {

  const {cart, setCart, isLogged, setLoggedIn, isAdmin, setAdmin, setPremium, email, setEmail } = useContext(CartContext)
  const [loading, setLoading] = useState(true)

  let userLogged = undefined

  const checkToken = async (token) => {
    const response = await fetch('http://localhost:8080/api/users/verifyAccessToken', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({token})})
    if (response.status == 200) {
      userLogged = await response.json()
      setLoggedIn(true) 
      setCart(userLogged.cart) 
      setEmail(userLogged.email)
      
      if(userLogged.category == 'Standard_User') {
        setAdmin(false)
        setPremium(false)
        return
      }

      else if (userLogged.category == 'Admin') {
        setAdmin(true)
        setPremium(false)
        return
      }

      else {
        setPremium(true)
        setAdmin(false)
        return
      }
    }

    else {
      setPremium(false)
      setAdmin(false)
      setLoggedIn(false)
      setCart([])
    }
  }

  const notAdmin = (() => {

    toast.error("Sólo para Administradores!", {hideProgressBar: true, pauseOnHover: false, theme: 'colored', position: 'top-right', transition: Zoom, autoClose: 1300})
  })

  useEffect(() => {

      // Obtengo todas mis cookies
      const cookies = document.cookie
      const my_cookies = document.cookie.split(';')
      let tokenValue = null

      // Para cada una de ellas, me fijo si es la del loginToken
      my_cookies.forEach(cookie => {
        if (cookie.includes('loginCookie='))

          {
            tokenValue = cookie.substring(12)
          }
      })

      // Si llego a tener la cookie en cuestión, la valido y decodifico con mi backend
      if (tokenValue) {
        checkToken(tokenValue)
        setLoading(false)
      }


      else {
        setPremium(false)
        setAdmin(false)
        setLoggedIn(false)
        setCart([])
        setLoading(false)
      }
  }, [])
  
  if (!loading) {

    return (
      <>
      <Container fluid className='p-0 overflow-hidden'>
      <Row>
        <Col className='header-index'>
        <div className="header_index">
          <Link className='header_image_link' to={'/'}>
            <img
              className="header_image rounded"
              src="/images/main_logo.png"
              alt="main_logo"
            /></Link>
          <nav className="header_navbar">
            <ul className="header_navbar_list">

              <Dropdown className="header_navbar_item" menu={{items: items_productos}}>
                <Link className='header_navbar_item ant-dropdown-link' to={'/products/all'}>
                  PRODUCTOS
                </Link>
              </Dropdown>

            {isAdmin? (
                          <li>
                            <Link className='header_navbar_item' to={'/admin_access'}>ACCESO ADMIN</Link>
                          </li>
            ): (
                          <li>
                            <Link className='header_navbar_item' onClick={notAdmin} to={'#'}>ACCESO ADMIN</Link>
                          </li>
            )}

              <li>
                <a href="/checkout">
                  <Badge className='header_navbar_item' size='middle' count={cart.reduce((previous, current) => previous + current.quantity, 0)} showZero='true'>
                    <ShoppingCartOutlined style={{fontSize: '20px'}}/>
                  </Badge>
                </a>
              </li>

            {!isLogged && (
                            <li style={{marginLeft: '5px'}}>
                            <Link className='header_navbar_item' to={'/register_and_login'}>REGISTRO/LOGIN</Link>
                          </li>
            )}


            {isLogged && (
                            <li style={{marginLeft: '5px'}}>
                            <Link className='header_navbar_item' to={'/logout'}>LOGOUT</Link>
                          </li>
            )}

            </ul>
          </nav>
        </div>
        </Col>
      </Row>
    </Container>
    </>
    )}

  else {
    return (
      "LOADING"
    )
  }
}

export default Header;