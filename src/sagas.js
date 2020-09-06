import { all } from 'redux-saga/effects';
import defaultSaga from 'screens/Screen/saga';

export default function* rootSaga() {
  yield all([defaultSaga]);
}
