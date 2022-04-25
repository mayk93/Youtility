import {runSaga} from "redux-saga";
import {fetchLibrariesSuccess} from "./actions";
import {performFetchLibrariesFixture} from "../../fixtures";

import {fetchLibraries} from "./sagas";

jest.mock('./api');

const dispatched = [];

describe('Libraries Sagas', () => {
    describe('fetchLibraries', () => {
        it('dispatched the fetchLibrariesAction with the expected payload', () => {
            const saga = runSaga({
                dispatch: action => dispatched.push(action),
                getState: () => ({}),
            }, fetchLibraries, {payload: {libraryId: '1234', libraryResource: 'books'}});

            expect(dispatched[0]).toMatchObject(fetchLibrariesSuccess({
                libraryId: '1234',
                books: performFetchLibrariesFixture
            }));
        });
    })
});