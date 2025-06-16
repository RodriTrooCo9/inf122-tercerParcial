import { Nav } from 'react-bootstrap';

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white shadow-sm">
      <div className="container">
        <div className="collapse navbar-collapse">
          <Nav className="me-auto">
            <Nav.Link  
              onClick={() => setActiveSection('inicio')}
              className="nav-link"
            >
              Inicio
            </Nav.Link>
            <Nav.Link 

              onClick={() => setActiveSection('cursos')}
              className="nav-link"
            >
              oferta de cursos
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
