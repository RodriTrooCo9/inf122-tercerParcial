import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="bg-info text-white py-3 shadow">
      <Container className="d-flex justify-content-between align-items-center">
        <h1 className="m-0">academia de baile "sergio el bailador"</h1>
        <div className="text-end">
          <p className="m-0">bienvenido: <strong>juan Perez</strong></p>
          <small>administrador</small>
        </div>
      </Container>
    </header>
  );
};

export default Header;