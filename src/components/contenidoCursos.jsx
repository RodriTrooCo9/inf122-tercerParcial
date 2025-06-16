import { useState } from 'react';
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';

const CoursesContent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "morenada",
      image: "/src/assets/img/descarga.jpeg",
      description: "Aprende los pasos básicos y intermedios de la Morenada.",
      price: "150bs al mes"
    },
    {
      id: 2,
      title: "Caporal",
      image: "/src/assets/img/descarga (1).jpeg",
      description: "caporal con nuestros instructores certificados.",
      price: "1800bs al mes"
    },
    {
      id: 3,
      title: "Tinku",
      image: "/src/assets/img/descarga (2).jpeg",
      description: "Baile de tinku al estilo de potosi andinos",
      price: "200bs al mes"
    }
  ];

  const handleShowModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="my-4">
      <h2 className="mb-4 text-center">oferta de cursos</h2>
      
      <Row xs={1} md={3} className="g-4">
        {courses.map((course) => (
          <Col key={course.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={course.image} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Button 
                  variant="success" 
                  onClick={() => handleShowModal(course)}
                >
                  ver Precio
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>información del curso de baile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCourse && (
            <>
              <h4>{selectedCourse.title}</h4>
              <p className="lead">{selectedCourse.description}</p>
              <div className="bg-light p-3 rounded">
                <h5 className="text-success">precio: {selectedCourse.price}</h5>
                <small className="text-muted"> todo listo para aprender</small>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            cerrar
          </Button>
          <Button variant="success" onClick={handleCloseModal}>
            inscribirse
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CoursesContent;