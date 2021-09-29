import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import { Header,Footer } from './components/init'
import Loadable from 'react-loadable';
import { Container } from 'react-bootstrap';
import TopBarProgress from 'react-topbar-progress-indicator';

function App() {

  TopBarProgress.config({
    barColors: {
      "0": "#fff",
      "1.0": "#fff"
    },
  });

  const HomeComponent = Loadable({
    loader: () => import('./components/pages/Home'),
    loading: TopBarProgress
  });

  const ContactComponent = Loadable({
    loader: () => import('./components/pages/Contact'),
    loading: TopBarProgress,
  });

  const WorkingsComponent = Loadable({
    loader: () => import('./components/pages/Workings'),
    loading: TopBarProgress,
  });

  const ProfileComponent = Loadable({
    loader: () => import('./components/pages/Profile'),
    loading: TopBarProgress,
  });

  return (
      <Router>
        <Header />
        <Switch>
          <Container>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/contact" component={ContactComponent} />
            <Route path="/workings" component={WorkingsComponent} />
            <Route path="/profile" component={ProfileComponent} />
          </Container>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
