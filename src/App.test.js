import {render, screen} from '@testing-library/react';
import {appFixture} from './fixtures';
import App from './App';

jest.mock('./components/Libraries');
jest.mock('./components/NewBookModal');

test('Calls fetchLibraryData on mount', async () => {
    expect(appFixture.fetchLibraryData).not.toHaveBeenCalled();
    render(<App {...appFixture} />);
    expect(appFixture.fetchLibraryData).toHaveBeenCalled();
    const library_id_1 = screen.getByText(/This is library: 1234/i);
    const library_id_2 = screen.getByText(/This is library: 5678/i);
    expect(library_id_1).toBeInTheDocument();
    expect(library_id_2).toBeInTheDocument();
    const images = await screen.findAllByRole('img');
    expect(images.length).toEqual(3);
});
