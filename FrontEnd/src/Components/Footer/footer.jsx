import Container from "react-bootstrap/esm/Container"
import './footer.css' 

const Footer = () => {
    
    return (
        <Container fluid className="p-0 overflow-hidden">
            <footer className="footer row">
                <div className="footer_div_image col-lg-2 d-flex flex-wrap align-items-center">
                    <img className = "footer_image img-fluid" src="/images/main_logo.png" alt="logo_d'kids"></img>
                </div>
                <div className="footer_div_info col-lg-3">
                    <h2 className="footer_title text-center">Información general</h2>
                    <ul className="footer_infogeneral text-center">
                        <li className="footer_infogeneral_info">Lunes a Viernes: 10 a 18 HS</li>
                        <li className="footer_infogeneral_info">Sábados: 10 a 15 HS</li>
                        <li className="footer_infogeneral_info">4555-5555/5675</li>
                        <li className="footer_infogeneral_info">ventas@dkidsjugueteria.com.ar</li>
                    </ul>
                </div>
                <div className="footer_div_followus col-lg-2">
                    <h2 className="footer_title_rrss text-center">¡Seguinos!</h2>
                    <div className="footer_rrss">
                        <a className="footer_rrss_link" href="https://www.instagram.com/coderhouse/" target="_blank"><img className="footer_rrss_image" src="/images/footer_instagram.png" alt="instagram_icon"></img></a>
                        <a className="footer_rrss_link" href="https://www.facebook.com/Coderhouse/" target="_blank"><img className="footer_rrss_image" src="/images/footer_facebook.png" alt="facebook_icon"></img></a>
                        <a className="footer_rrss_link" href="https://www.tiktok.com/@coderhouse" target="_blank"><img className="footer_rrss_image" src="/images/tik-tok.png" alt="tik-tok_icon"></img></a>
                        <a className="footer_rrss_link" href="https://twitter.com/coderhouse" target="_blank"><img className="footer_rrss_image" src="/images/footer_twitter.png" alt="twitter_icon"></img></a>
                    </div>
                </div>
                <div className="footer_div_dondeestamos col-lg-5">
                    <div className="footer_div_dondeestamos_info">
                        <h2 className="footer_title text-center">¿Dónde estamos?</h2>
                        <p className="footer_dondeestamos_info text-center">Av. del Libertador 6375<br></br>Belgrano<br></br>C.A.B.A.</p>
                    </div>
                        <iframe className="footer_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.0210542902337!2d-58.45546961733671!3d-34.55302230328391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb43216cd013d%3A0xa7050a5394a331b9!2sAvenida%20del%20Libertador%206301-6387!5e0!3m2!1ses!2sar!4v1722732850222!5m2!1ses!2sar" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps"></iframe>
                    </div>
            </footer>

            <div className="rights row">
                <h5 className="rights_text col-lg-12 text-center">
                    © 2024 D'Kids Juguetería. Todos los derechos reservados. <br></br>Diseñado por Juan Pablo Lezama
                </h5>
            </div>
        
            <div className="whatsapp_button">
                <a href="https://api.whatsapp.com/send?phone=541131443573&text=Hola%20D'Kids!" target="_blank"><img className= "whatsapp_image" src="/images/footer_whatsapp.png" alt="whatsapp_logo"></img></a>
            </div>
        </Container>
    )
}

export default Footer









