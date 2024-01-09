import { Navbar, Nav } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import icono from '../src/img/icono.png'
import Footer from "../components/Footer"

const NavBarExample = () => {
    return(
       <>

       <div className="fondo-navbar">

       <Navbar className="navBg" variant="dark" expand="lg">

       <Navbar.Brand as={Link} to="/">

        <div className="text-center" style={{width: '100%'}}>
          <img src={icono} alt="logo" style={{ width: '50px' }} id="logo" />
        </div>

      </Navbar.Brand>

        <div className="text-center">

          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        
        <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">Retro</Nav.Link>
            <Nav.Link as={Link} to="/snake">Snake</Nav.Link>
            <Nav.Link as={Link} to="/hangman">Ahorcado</Nav.Link>
            <Nav.Link as={Link} to="/tictactoe">Tres en raya</Nav.Link>
            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        </div>
      </Navbar>  

      </div>

        
            <Outlet></Outlet> 
            <Footer />
        
       </>

        
    )
}
export default NavBarExample
