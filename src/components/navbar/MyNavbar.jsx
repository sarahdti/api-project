import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import './MyNavbar.css'

function MyNavebar() {
    const expand ='md'
    return ( 
        <>
         <Navbar key={expand} expand={expand} style={{backgroundColor:'#17a2b8'}} className="mb-3">
          <Container>
            <Navbar.Brand className='lalezar fs-5' href="#">بلاگ برنامه نویسی</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  بلاگ برنامه نویسی
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className='nav-link' to={'/'}>خانه</NavLink>
                  <NavLink className='nav-link' to={'/ad-article'} >ساخت مقاله</NavLink>
                  <NavLink className='nav-link' to={'/about'} >درباره ما</NavLink>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </>
     );
}

export default MyNavebar;