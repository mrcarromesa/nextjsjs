import Fourth from '../components/Fourth';
import Main from '../components/Main';
import Second from '../components/Second';
import Third from '../components/Third';
import Route from '../containers/MenuNavigation/Route';
import Switch from '../containers/MenuNavigation/Switch';
import { withMenuRouteContextProvider } from '../contexts/MenuRouteContext';

const Home = () => {
  return (
    <Switch>
      <Route path='main'>
        <Main />
      </Route>
      <Route path='second'>
        <Second />
      </Route>
      <Route path='third'>
        <Third />
      </Route>
      <Route path='fourth'>
        <Fourth />
      </Route>
    </Switch>
  );
}

export default withMenuRouteContextProvider(Home);
