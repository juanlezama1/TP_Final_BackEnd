import React from 'react';
import { Dropdown, Menu } from 'antd';
import './header.css';
import { Link } from 'react-router-dom';

const items_datosmercado = [
  {
    key: '1',
    label: (<Link to={'./noticias'}  >Noticias de Mercado</Link>)
  },
  {
    key: '2',
    label: (<Link to={'./calendario'}  >Calendario Económico</Link>)
  },
  {
    key: '3',
    label: (<Link to={'./sentimiento'}  >Sentimiento de Mercado</Link>)
  },
];

const items_indiceseconomicos = [
  {
    key: '4',
    label: (<Link to={'./tasa_interes'}  >Tasa de Interés</Link>)
  },
  {
    key: '5',
    label: (<Link to={'./inflacion'}  >Inflación</Link>)
  },
];

const items_herramientas = [
  {
    key: '6',
    label: (<Link to={'./calculadora'}  >Calculadora financiera</Link>)
  },
];

const Header = () => {

  return (
    <header className="row">
      <div className="header_index col-12">
        <Link className='header_image_link' to={'/'}>
          <img
            className="header_image rounded"
            src="/images/main_logo.png"
            alt="main_logo"
          /></Link>
        <nav className="header_navbar">
          <ul className="header_navbar_list">
            <li>
              <Link className='header_navbar_item' to={'/dollars'}>DÓLAR</Link>
            </li>

            <Dropdown className="header_navbar_item" menu={{items: items_datosmercado}}>
              <a className="ant-dropdown-link">
                DATOS DE MERCADO
              </a>
            </Dropdown>

            <li>
              <Link className='header_navbar_item' to={'/crypto'}>CRIPTO MÁS BARATO</Link>
            </li>

            <Dropdown className="header_navbar_item" menu={{items: items_indiceseconomicos}}>
              <a className="ant-dropdown-link">
                ÍNDICES ECONÓMICOS
              </a>
            </Dropdown>

            <Dropdown className="header_navbar_item" menu={{items: items_herramientas}}>
              <a className="ant-dropdown-link">
                HERRAMIENTAS
              </a>
            </Dropdown>

            <li>
              <Link className='header_navbar_item' to={'/cursos'}>CURSOS</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;