import { createStore } from 'redux';
import { responsiveStoreEnhancer, calculateResponsiveState } from 'redux-responsive';
import reducer from '../reducers/reducers';

const store = createStore(reducer, responsiveStoreEnhancer);

export default store;
