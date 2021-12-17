import { render, screen } from '@testing-library/react';
import Cheatsheet from './Cheatsheet';

test('renders Menu text', () => {
    render(<Cheatsheet />);
    const liElement = screen.getByText(/Arkham/i);
    expect(liElement).toBeInTheDocument();
});

test('renders Snippet text', () => {
    render(<Cheatsheet />);
    const h4Element = screen.getByText(/Answer Pair 2/i);
    expect(h4Element).toBeInTheDocument();
});

test('renders Snippet text', () => {
    render(<Cheatsheet />);
    const h4Element = screen.getByText(/Answer Pair 3/i);
    expect(h4Element).toBeInTheDocument();
});

test('renders Snippet text', () => {
    render(<Cheatsheet />);
    const h4Element = screen.getByText(/Answer Pair 4/i);
    expect(h4Element).toBeInTheDocument();
});

test('renders Snippet text', () => {
    render(<Cheatsheet />);
    const h4Element = screen.getByText(/Answer Pair 5/i);
    expect(h4Element).toBeInTheDocument();
});

test('renders Snippet text', () => {
    render(<Cheatsheet />);
    const h4Element = screen.getByText(/Answer Pair 6/i);
    expect(h4Element).toBeInTheDocument();
});

test('renders Snippet text', () => {
    render(<Cheatsheet />);
    const h4Element = screen.getByText(/Answer Pair 7/i);
    expect(h4Element).toBeInTheDocument();
});

test('renders Snippet text', () => {
    render(<Cheatsheet />);
    const h4Element = screen.getByText(/Answer Pair 8/i);
    expect(h4Element).toBeInTheDocument();
});

test('renders Snippet text', () => {
    render(<Cheatsheet />);
    const h4Element = screen.getByText(/Answer Pair 9/i);
    expect(h4Element).toBeInTheDocument();
});

test('renders Snippet text', () => {
    render(<Cheatsheet />);
    const h4Element = screen.getByText(/Answer Pair 10/i);
    expect(h4Element).toBeInTheDocument();
});