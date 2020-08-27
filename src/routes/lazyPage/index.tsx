import { FunctionalComponent, Fragment, h } from 'preact';
import LazyContent from '../../components/async/lazyContent';

const LazyPage: FunctionalComponent = () => (
  <Fragment>
    <h2>Lazy Page</h2>
    <LazyContent />
  </Fragment>
);

export default LazyPage;
