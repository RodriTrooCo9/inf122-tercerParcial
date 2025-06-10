import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeContent from './components/contenido';
import CoursesContent from './components/contenidoCursos';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Navbar setActiveSection={setActiveSection} />
      
      <main className="flex-grow-1 py-4 bg-light">
        <Container>
          {activeSection === 'inicio' ? <HomeContent /> : <CoursesContent />}
        </Container>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;