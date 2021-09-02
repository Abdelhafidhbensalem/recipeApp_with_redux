import logo from './logo.svg';
import './App.css';
import ListRecipes from './Components/ListRecipes';
import { Route, Switch } from 'react-router-dom';
import RecipeDetails from './Components/RecipeDetails';

function App() {

  return (
    <div className="App">
      <h1>WORKSHOP API</h1>
      <Switch>
        <Route exact path='/' component={ListRecipes} />
        <Route path="/recipe/:idRecipe" component={RecipeDetails} />
      </Switch>
    </div>
  );
}

export default App;
