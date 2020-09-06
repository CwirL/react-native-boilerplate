import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectScreenDomain = state => state.example2 || initialState;

const makeSelectScreen = () =>
  createSelector(makeSelectScreen, substate => substate);

export default makeSelectScreen;
export { selectScreenDomain };
