import { all } from 'redux-saga/effects';
import libraries from '../components/Libraries/sagas';

export default function * rootSaga () {
  yield all([libraries()]);
}
