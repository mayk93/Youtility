import reducer from "./reducer";
import {FETCH_SUCCESS} from "./actions";

const fetchSuccessAction = {
    type: FETCH_SUCCESS,
    payload: {
        libraryId: '1',
        books: [1, 2, 3]
    }
};

const otherFetchSuccessAction = {
    type: FETCH_SUCCESS,
    payload: {
        libraryId: '2',
        books: [4, 5]
    }
};

const newState_1 = {
    '1': [1, 2, 3]
};

const newState_2 = {
    '1': [1, 2, 3],
    '2': [4, 5]
};

describe('Libraries Data Reducer', () => {
    it('maps book arrays to library ids', () => {
        let newState = reducer({}, fetchSuccessAction);
        expect(newState).toMatchObject(newState_1);
        newState = reducer(newState, otherFetchSuccessAction);
        expect(newState).toMatchObject(newState_2);
    })
});