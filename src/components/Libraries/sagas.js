import { all, takeLatest, put, call } from 'redux-saga/effects';
import {fetchLibrariesSuccess, fetchLibraryData as fetchLibraryDataAction, registerNewLibrary, FETCH, POST, POST_BOOK} from './actions';
import { performFetchLibraries, performPostLibraries, performPostBooks } from "./api";

export function * fetchLibraries (action) {
  const { libraryId, libraryResource } = action.payload;
  const books = yield call(performFetchLibraries(libraryId, libraryResource));
  yield put(fetchLibrariesSuccess({ libraryId, books }));
}

export function * postLibraries () {
  const newLibraryId = yield call(performPostLibraries());
  yield put(fetchLibraryDataAction({ libraryId: newLibraryId, libraryResource: 'books' }));
  yield put(registerNewLibrary(newLibraryId));
}

export function * postBooks (action) {
  yield call(performPostBooks({...action.payload, libraryId: action.payload.targetLibrary, libraryResource: 'books'}));
  yield put(fetchLibraryDataAction({ libraryId: action.payload.targetLibrary, libraryResource: 'books' }));
}

function * watchFetchLibraries () {
  yield takeLatest(FETCH, fetchLibraries);
}

function * watchPostLibraries () {
  yield takeLatest(POST, postLibraries);
}

function * watchPostBooks () {
  yield takeLatest(POST_BOOK, postBooks);
}

export default function * rootSaga () {
  yield all([
      watchFetchLibraries(),
      watchPostLibraries(),
      watchPostBooks(),
  ]);
}