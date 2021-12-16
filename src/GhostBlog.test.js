import { render, screen } from '@testing-library/react';
import GhostBlog from './GhostBlog';

test('renders Blogs Post Template header', () => {
    render(<GhostBlog />);
    const h1Element = screen.getByText(/Blog Posts Template/i);
    expect(h1Element).toBeInTheDocument();
});

test('renders Blogs Post Template text', () => {
    render(<GhostBlog />);
    const pElement = screen.getByText(/This template is based off/i);
    expect(pElement).toBeInTheDocument();
});