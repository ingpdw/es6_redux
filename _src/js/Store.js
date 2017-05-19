/**
 * Store
 */
import { createStore } from 'redux';
import reducers from './reducers';

let Store = createStore( reducers );

export function mapStateToProps( state ) {
  Store.dispatch( actions );
}

export function mapDispatchToProps( dispatch ) {
  return null;
}

export default Store;
