import { render, screen } from '@testing-library/react';
import Book from './Book';

const bookFixture = {
    isbn: '12345',
    authors: ['John', 'Smith'],
    title: 'The book'
}

test('renders learn react link', () => {
  render(<Book {...bookFixture} />);
  const isbn = screen.getByText(/1234/i);
  const author_1 = screen.getByText(/John/i);
  const author_2 = screen.getByText(/Smith/i);
  const title = screen.getByText(/The Book/i);
  [isbn, title, author_1, author_2].forEach(element => expect(element).toBeInTheDocument());
});
