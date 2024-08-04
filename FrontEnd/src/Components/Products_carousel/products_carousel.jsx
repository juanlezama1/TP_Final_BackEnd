import React from 'react';
import { Carousel, Card} from 'antd';
import Container from 'react-bootstrap/esm/Container'
import './products_carousel.css'

const { Meta } = Card;
const Products_carousel = () => {

return (
  <Container fluid className='p-0'>
    <Carousel style={{backgroundColor: '#5eb0df', height: '500px'}} autoplay autoplaySpeed={900} dotPosition='left' className='d-flex flex-column justify-content-center text-center align-items-center' pauseOnHover={false}>
        <div className="row d-flex flex-row justify-content-center">
          <div className="col-4 d-flex flex-row justify-content-center">
            <Card style={{cursor: 'default', width: '250px', backgroundColor: '#5eb0df'}} hoverable cover={<img alt="example" src="/images/auto.png" />}>
              <Meta style={{cursor: 'default'}} className="text-center" title="Pata-Pata Sport Rojo"/>
            </Card>
          </div>
          <div className="col-4 d-flex flex-row justify-content-center">
            <Card style={{cursor: 'default', width: '250px', backgroundColor: '#5eb0df'}} hoverable cover={<img alt="example" src="./images/pictionary.png" />}>
              <Meta style={{cursor: 'default'}} className="text-center" title="Juego de mesa Pictionary"/>
            </Card>
          </div>
          <div className="col-4 d-flex flex-row justify-content-center">
            <Card style={{cursor: 'default', width: '250px', backgroundColor: '#5eb0df'}} hoverable cover={<img alt="example" src="./images/nerf.png" />}>
              <Meta style={{cursor: 'default'}} className="text-center" title="Pistola Nerf Elite 2.0"/>
            </Card>
          </div>
        </div>

        <div className="row d-flex flex-row">
          <div className="col-4 d-flex flex-row justify-content-center">
            <Card style={{cursor: 'default', width: '250px', backgroundColor: '#5eb0df', color: 'white'}} hoverable cover={<img alt="example" src="./images/pooh.png" />}>
              <Meta style={{cursor: 'default'}} className="text-center" title="Peluche Winnie Pooh"/>
            </Card>
          </div>
          <div className="col-4 d-flex flex-row justify-content-center">
            <Card style={{cursor: 'default', width: '250px', backgroundColor: '#5eb0df'}} hoverable cover={<img alt="example" src="./images/goku.png" />}>
              <Meta style={{cursor: 'default'}} className="text-center" title="Figura de acción Gokú"/>
            </Card>
          </div>
          <div className="col-4 d-flex flex-row justify-content-center">
            <Card style={{cursor: 'default', width: '250px', backgroundColor: '#5eb0df'}} hoverable cover={<img alt="example" src="./images/uno.png" />}>
              <Meta style={{cursor: 'default'}} className="text-center" title="UNO - Juego de Mesa"/>
            </Card>
          </div>
        </div>

        <div className="row d-flex flex-row">
          <div className="col-4 d-flex flex-row justify-content-center">
            <Card style={{cursor: 'default', width: '250px', backgroundColor: '#5eb0df'}} hoverable cover={<img alt="example" src="./images/sonajero.png" />}>
              <Meta style={{cursor: 'default'}} className="text-center" title="Sonajero Pajarito De Tela"/>
            </Card>
          </div>
          <div className="col-4 d-flex flex-row justify-content-center">
            <Card style={{cursor: 'default', width: '250px', backgroundColor: '#5eb0df'}} hoverable cover={<img alt="example" src="./images/pokemon.png" />}>
              <Meta style={{cursor: 'default'}} className="text-center" title="Juego de cartas Pokemon"/>
            </Card>
          </div>
          <div className="col-4 d-flex flex-row justify-content-center">
            <Card style={{cursor: 'default', width: '250px', backgroundColor: '#5eb0df'}} hoverable cover={<img alt="example" src="./images/rompecabezas.png" />}>
              <Meta style={{cursor: 'default'}} className="text-center" title="Rompecabezas Mapamundi"/>
            </Card>
          </div>
        </div>
    </Carousel>
  </Container>
)}
export default Products_carousel;





