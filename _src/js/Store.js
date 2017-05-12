/**
 * Store
 */
import { createStore } from 'redux';
import reducers from './reducers';

module.exports = createStore( reducers );
