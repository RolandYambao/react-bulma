import { render, screen } from '@testing-library/react';
import Admin from './Admin';

test('renders User subtitle', () => {
    render(<Admin />);
    const pElement = screen.getByText(/Users/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Products subtitle', () => {
    render(<Admin />);
    const pElement = screen.getByText(/Products/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Open Orders subtitle', () => {
    render(<Admin />);
    const pElement = screen.getByText(/Open Orders/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Exceptions subtitle', () => {
    render(<Admin />);
    const pElement = screen.getByTitle(/Exceptions/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Team Settings subtitle', () => {
    render(<Admin />);
    const aElement = screen.getByText(/Team Settings/i);
    expect(aElement).toBeInTheDocument();
});

test('renders Manage Your Team subtitle', () => {
    render(<Admin />);
    const aElement = screen.getByText(/Manage Your Team/i);
    expect(aElement).toBeInTheDocument();
});

test('renders Invitations subtitle', () => {
    render(<Admin />);
    const aElement = screen.getByText(/Invitations/i);
    expect(aElement).toBeInTheDocument();
});
