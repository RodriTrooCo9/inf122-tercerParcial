import { Accordion } from 'react-bootstrap';

const contenido = () => {
  const danceRegions = [
    {
      region: "como danzas andinas tenemos",
      dances: [
        "Morenada",
        "Caporal",
        "Tinku",
        "Kullawada",
        "Llamerada"
      ],
      description: "estas danzas son de la paz, potosi y oruro "
    },
    {
      region: "como danzas de los valles tenemos",
      dances: [
        "Cueca",
        "Bailecito",
        "Chacarera",
        "Saya",
        "Tobas"
      ],
      description: "estas danzas son de cochabanba, tarija y chuquisaca"
    },
    {
      region: "como danzas de la región oriental tenemos",
      dances: [
        "Taquirari",
        "Chovena",
        "Carnavalito",
        "Macheteros",
        "Pauserna"
      ],
      description: "estas danzas son de santa cruz, bení y pando"
    },
    {
      region: "como danzas del chaco tenemos",
      dances: [
        "Chaqueño",
        "Guaracha",
        "Chovena chaqueña",
        "Ritmos guaraníes",
        "Danzas de la vendimia"
      ],
      description: "estas danzas son de tarija, chuquisaca y una parte de santa cruz"
    },
    {
      region: "como danzas de la región amazónica tenemos",
      dances: [
        "Moxeño",
        "Danzas de los pueblos amazónicos",
        "Ritmos selváticos",
        "Danzas rituales",
        "Expresiones étnicas"
      ],
      description: "esta danzas son de bení y pando"
    }
  ];

  return (
    <div className="my-4">
      <h2 className="mb-4 text-center">danzas de las regiones de Bolivia</h2>
      <Accordion defaultActiveKey="0" flush>
        {danceRegions.map((region, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{region.region}</Accordion.Header>
            <Accordion.Body>
              <h5>danzas representativas:</h5>
              <ul>
                {region.dances.map((dance, i) => (
                  <li key={i}>{dance}</li>
                ))}
              </ul>
              <p className="mt-3">{region.description}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default contenido;