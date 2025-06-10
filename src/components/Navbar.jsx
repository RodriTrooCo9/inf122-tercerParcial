import { Nav } from 'react-bootstrap';

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary shadow-sm">
      <div className="container">
        <div className="collapse navbar-collapse">
          <Nav className="me-auto">
            <Nav.Link 
              href="#" 
              onClick={() => setActiveSection('inicio')}
              className="nav-link"
            >
              Inicio
            </Nav.Link>
            <Nav.Link 
              href="#" 
              onClick={() => setActiveSection('cursos')}
              className="nav-link"
            >
              Oferta de Cursos
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;