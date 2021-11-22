import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components';
import Bus from './pages/Bus';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/bus" />
        </Route>
        <Route path="/bus">
          <Bus />
        </Route>
        <Route path="*">
          <h1 className="flex-center">Nothing is here.</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
