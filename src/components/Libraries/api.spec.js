import {performFetchLibraries} from './api';
import {performFetchLibrariesFixture} from "../../fixtures";

describe('api calls', () => {
    describe('performFetchLibraries', () => {
        it('return the book list when the server responds with one', async () => {
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    text: () => Promise.resolve(JSON.stringify(performFetchLibrariesFixture)),
                })
            );

            const result = await performFetchLibraries('1', 'books')();
            expect(result).toMatchObject(performFetchLibrariesFixture);
        });

        it('return an empty array when the server does not respond with a list', async () => {
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    text: () => Promise.reject(),
                })
            );

            const result = await performFetchLibraries('1', 'books')();
            expect(result).toMatchObject([]);
        });
    })
})