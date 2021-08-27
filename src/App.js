import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './components/admin';
import Auth from './components/auth';
import Guest from './components/guest';
import ProtectedRoute from './components/core/auth/protectedRoutes';
import NotFound404 from './components/core/auth/notFound404';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Auth} />
          <ProtectedRoute exact path="/admin" component={Admin} />
          <ProtectedRoute exact path="/" component={Guest} />
          <Route path="*" exact={true} component={NotFound404} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
