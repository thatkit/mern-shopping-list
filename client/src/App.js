import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//components
import NavbarComp from './components/NavbarComp/NavbarComp';
import ShoppingList from './components/ShoppingList/ShoppingList';

const App = () => {
  return (
    <div className="App">
      <NavbarComp />
      <ShoppingList />
    </div>
  );
}

export default App;
