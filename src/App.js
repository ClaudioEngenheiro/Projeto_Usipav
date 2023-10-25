import './App.css';
import NavTelainicio from './navTelainicio';
import NavMenu from './navMenu';
import { Container, Row, Col } from 'react-bootstrap';
import Cartoes from './Cartoes';
import Constantes from './Constantes'
//import { Footer } from 'react-bootstrap/lib/Modal';


function App() {
  return (
    <Container fluid>
      <Row className="nebulous white cabecalho bordacabecalho">
        <Col xs={10}></Col>
        <NavTelainicio></NavTelainicio>
      </Row>
      <Row className="body">
        <Col xs={3} className="nebulous white bordamenuacesso mx-auto style"><h3>Menu Principal</h3>
          <NavMenu></NavMenu>
        </Col>          
        <Col xs={9} className="nebulous white bordaconteudodireita"><h3>Usipav - Usinagem de Asfalto Ltda</h3>
        <Cartoes></Cartoes>        
        </Col>
      </Row>
      <Row className="rodape">
        <Col className="bg-warning bordatempo">Previsão de Tempo:
        </Col>
        <Col xs={5}className="bg-warning bordaDireito">Direitos Reservados: UseIA Engenharia de Software</Col>
        <Col className="bg-warning bordausuario">Usuário:</Col>
        <Col className="bg-warning bordadatahora">Data/Hora:
        </Col>
      </Row>
    </Container>
  );
}

export default App;
