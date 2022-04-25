export const appFixture = {
    librariesData: {
        '1234': [{isbn: '1', title: 'The title', authors: ['The Author']}],
        '5678': [
            {isbn: '2', title: 'The other title', authors: ['The Other Author']},
            {isbn: '3', title: 'The third title', authors: ['The Third Author']}
        ]
    },
    fetchLibraryData: jest.fn()
};

export const performFetchLibrariesFixture = [{
    isbn: '1234',
    title: 'Saga Test Book',
    author: 'The Author'
}];