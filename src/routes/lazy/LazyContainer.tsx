import { connect } from 'react-redux';
import { FunctionalComponent } from 'preact';
import LazyContent from '../../components/async/lazyContent';

import { reloadBooks, clearBooks } from '../../redux/actionCreators';

// const Counter = ...

const mapStateToProps = (state /* , ownProps */) => ({
  value: state.lazyValue,
});

const mapDispatchToProps = { reload: reloadBooks, clear: clearBooks };

const LazyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LazyContent) as FunctionalComponent;

export default LazyContainer;
