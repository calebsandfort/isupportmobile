import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux-loop";
import homeReducer from "../../container/HomeContainer/reducer";
import userManagement from './userManagement';
import incidentSettings from './incidentSettings';

export default combineReducers({
	form: formReducer,
	homeReducer,
	userManagement,
	incidentSettings
});
