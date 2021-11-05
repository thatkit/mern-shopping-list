import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container } from 'reactstrap'

import NavbarComp from './components/NavbarComp/NavbarComp';
import Board from './components/Board/Board';

const App = () => {
  return (
    <div className="App">
      <NavbarComp />
      <Container>
        <Board />
      </Container>
    </div>
  );
}

export default App;
