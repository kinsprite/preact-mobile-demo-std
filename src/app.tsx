/* eslint-disable react/no-unused-prop-types, react/require-default-props */
import { h, FunctionalComponent } from 'preact'; /** @jsx h */
import { Route, Router, RouterOnChangeArgs } from 'preact-router';
import { Provider } from 'react-redux';

import Counter from './components/Counter';
import Redirect from './components/Redirect';

import { createStore } from './redux/store';
import reducers from './redux/reducers';
import { flushPreloadMessages } from './nativeMessage';
import './chan';
import NavbarContainer from './components/NavbarContainer';

import Home from './routes/home';
import Example from './routes/example';
import UserPage from './routes/user';
import BooksPage from './routes/books';
import LazyPage from './routes/lazy';

import dbInit from './redux/dbInit';

import styles from './App.module.scss';

type Props = {
  CLI_DATA?: any,
  preloadedState?: any,
  routeContent?: any,
};

const App : FunctionalComponent<Props> = ({ preloadedState = dbInit(), routeContent }: Props) => {
  let currentUrl: string;

  const handleRoute = (e: RouterOnChangeArgs) => {
    currentUrl = e.url;
    console.log('Current URL: ', currentUrl);  // eslint-disable-line
  };

  const store = createStore(reducers, preloadedState);
  flushPreloadMessages(store.dispatch);

  return (
    <div id="app" class={styles.app}>
      <Provider store={store}>
        <NavbarContainer />
        <Router onChange={handleRoute}>
          <Route path="/" component={Home} />
          <Route path="/example" component={Example} />
          <Route path="/counter" component={Counter} />
          <Route path="/user" component={UserPage as FunctionalComponent} />
          <Route path="/books" component={BooksPage as FunctionalComponent} />
          <Route path="/lazy" component={LazyPage} />
          <Redirect default to="/" routeContent={routeContent} />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
