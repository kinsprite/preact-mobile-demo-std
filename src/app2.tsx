import { FunctionalComponent, h } from 'preact';
import { Route, Router, RouterOnChangeArgs } from 'preact-router';

import Home from './routes/home';
import Profile from './routes/profile';
import NotFoundPage from './routes/notfound';
import Header from './components/header';
import LazyPage from './routes/lazy';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
if ((module as any).hot) {
  // eslint-disable-next-line global-require
  require('preact/debug');
}

const App: FunctionalComponent = () => {
  let currentUrl: string;

  const handleRoute = (e: RouterOnChangeArgs) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    currentUrl = e.url;
  };

  return (
    <div id="app">
      <Header />
      <Router onChange={handleRoute}>
        <Route path="/" component={Home} />
        <Route path="/lazy" component={LazyPage} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
