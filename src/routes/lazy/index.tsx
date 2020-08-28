import { FunctionalComponent, Fragment, h } from 'preact';
import LazyContainer from './LazyContainer';

const LazyPage: FunctionalComponent = () => (
  <Fragment>
    <h2>Lazy Page</h2>
    <LazyContainer />
  </Fragment>
);

export default LazyPage;
