import fullName from '../../utils/fullName';

const moduleName = 'libraries';

export const POST = fullName(moduleName, 'POST');
export const POST_BOOK = fullName(moduleName, 'POST_BOOK');
export const FETCH = fullName(moduleName, 'FETCH');
export const FETCH_SUCCESS = fullName(moduleName, 'FETCH_SUCCESS');
export const REGISTER_NEW_LIBRARY = fullName(moduleName, 'REGISTER_NEW_LIBRARY');

export const postBook = payload => ({
  type: POST_BOOK,
  payload
});

export const postLibraries = payload => ({
  type: POST,
  payload
});

export const fetchLibraryData = payload => ({
  type: FETCH,
  payload
});

export const fetchLibrariesSuccess = payload => ({
  type: FETCH_SUCCESS,
  payload
});

export const registerNewLibrary = payload => ({
  type: REGISTER_NEW_LIBRARY,
  payload
})