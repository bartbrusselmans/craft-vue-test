import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';

export default combineReducers({
	browser: createResponsiveStateReducer({
		extraSmall: 480,
		small: 768,
		medium: 1024,
		large: 1200,
		extraLarge: 1600,
	})
});
