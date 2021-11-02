import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container } from 'reactstrap'

import NavbarComp from './components/NavbarComp/NavbarComp';
import ShoppingList from './components/ShoppingList/ShoppingList';
import ItemModal from './components/ItemModal/ItemModal';

const App = () => {
  return (
    <div className="App">
      <NavbarComp />
      <Container>
        <ShoppingList />
        <ItemModal />
      </Container>
    </div>
  );
}

export default App;
