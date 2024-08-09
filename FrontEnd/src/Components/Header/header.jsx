import React from 'react';
import { Dropdown, Avatar, Badge} from 'antd';
import { Link } from 'react-router-dom';
import './header.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container';
import {ShoppingCartOutlined} from '@ant-design/icons'

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

            <li>
              <Link className='header_navbar_item' to={'/admin_access'}>ACCESO ADMIN</Link>
            </li>

            <li>
              <a href="#">
                <Badge className='header_navbar_item' size='middle' count={5}>
                  <ShoppingCartOutlined style={{fontSize: '20px'}}/>
                </Badge>
              </a>
            </li>

            <li style={{marginLeft: '5px'}}>
              <Link className='header_navbar_item' to={'/register_and_login'}>REGISTRO/LOGIN</Link>
            </li>
          </ul>
        </nav>
      </div>
      </Col>
    </Row>
    </Container>
    </>
  );
};

export default Header;