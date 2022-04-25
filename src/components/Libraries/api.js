import {corsProxy, apiRoot, librariesEndpoint} from '../../utils/endpoints';

const fetchSettings = ({method}) => ({
    method,
    headers: {
        'Content-Type': 'application/json',
    },
    redirect: 'follow'
});

export const performFetchLibraries = (libraryId, libraryResource) => async () => {
    const settings = fetchSettings({method: 'GET'});
    try {
        const url = `${corsProxy}/${apiRoot}/${librariesEndpoint}/${libraryId}/${libraryResource}`;

        const result = await fetch(url, settings);
        const body = await result.text();
        const books = JSON.parse(body);

        return Array.isArray(books) ? books : [];
    } catch (_) {
        return [];
    }
};

export const performPostLibraries = libraryId => async () => {
    const settings = fetchSettings({method: 'POST'});
    try {
        const url = `${corsProxy}/${apiRoot}/${librariesEndpoint}/`;

        const result = await fetch(url, {...settings, body: JSON.stringify({id: libraryId})});
        const body = await result.text();

        return JSON.parse(body).id;
    } catch (_) {
        return null;
    }
};

export const performPostBooks = ({
                                     libraryId,
                                     libraryResource,
                                     currentAuthor,
                                     targetLibrary,
                                     ...bookData
                                 }) => async () => {
    const settings = fetchSettings({method: 'POST'});

    try {
        const url = `${corsProxy}/${apiRoot}/${librariesEndpoint}/${libraryId}/${libraryResource}`;

        const result = await fetch(url, {...settings, body: JSON.stringify(bookData)});
        const body = await result.text();

        return JSON.parse(body).id;
    } catch (_) {
        return null;
    }
};
