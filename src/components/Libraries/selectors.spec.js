import {booksSelector} from './selectors';

describe('selectors', () => {
    describe('booksSelector', () => {
        it('returns the books belonging to the given library id', () => {
            const state = {
                librariesData: {
                    '1': [{isbn: '1'}, {isbn: '2'}],
                    '2': [{isbn: '3'}]
                }
            };
            const result = booksSelector(state, '1');
            expect(result.length).toEqual(2);
            expect(result[0].isbn).toEqual('1');
            expect(result[1].isbn).toEqual('2');
        });

        it('returns an empty list when no library data is available', () => {
            const state = {
                librariesData: {}
            }
            const result = booksSelector(state, '1');
            expect(result.length).toEqual(0);
        });
    })
});
