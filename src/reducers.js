import { combineReducers } from 'redux';
import languageProviderReducer from 'utils/LanguageProvider/reducer';
import defaultReducer from 'screens/Screen/reducer';

export default combineReducers({
  default: defaultReducer,
  language: languageProviderReducer,
});
