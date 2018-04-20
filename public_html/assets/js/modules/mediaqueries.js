// Redux store for mediaqueries in JS
import { calculateResponsiveState } from 'redux-responsive';
import store from '../store/store';
// Snippet to add mediaqueries
let state = '';
//	Add listener for store
window.addEventListener('resize', () => {
	store.dispatch(calculateResponsiveState(window));
	state = store.getState();
	console.log(state.browser.mediaType);
});
