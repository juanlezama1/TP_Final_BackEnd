import React from 'react';
import { Dropdown} from 'antd';
import { Link } from 'react-router-dom';
import './header.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container';

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
              <a className="ant-dropdown-link">
                PRODUCTOS
              </a>
            </Dropdown>

            <li>
              <Link className='header_navbar_item' to={'/crypto'}>ACCESO ADMIN</Link>
            </li>

            <li>
              <Link className='header_navbar_item' to={'/crypto'}>REGISTRO</Link>
            </li>

            <li>
              <Link className='header_navbar_item' to={'/cursos'}>LOGIN</Link>
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