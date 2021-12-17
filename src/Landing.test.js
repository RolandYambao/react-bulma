import { render, screen } from '@testing-library/react';
import Landing from './Landing';

test('renders Title tag', () => {
    render(<Landing />);
    const hElement = screen.getByText(/Coming Soon/i);
    expect(hElement).toBeInTheDocument();
});

test('renders Title tag', () => {
    render(<Landing />);
    const hElement = screen.getByText(/Subtitle 1/i);
    expect(hElement).toBeInTheDocument();
});

test('renders Subtitle tag', () => {
    render(<Landing />);
    const hElement = screen.getByText(/is the best/i);
    expect(hElement).toBeInTheDocument();
});

test('renders Title tag', () => {
    render(<Landing />);
    const hElement = screen.getByText(/Subtitle 2/i);
    expect(hElement).toBeInTheDocument();
});

test('renders Subtitle tag', () => {
    render(<Landing />);
    const hElement = screen.getByText(/software platform/i);
    expect(hElement).toBeInTheDocument();
});

test('renders Title tag', () => {
    render(<Landing />);
    const hElement = screen.getByText(/Subtitle 3/i);
    expect(hElement).toBeInTheDocument();
});

test('renders Subtitle tag', () => {
    render(<Landing />);
    const hElement = screen.getByText(/for running/i);
    expect(hElement).toBeInTheDocument();
});

test('renders Title tag', () => {
    render(<Landing />);
    const hElement = screen.getByText(/Subtitle 4/i);
    expect(hElement).toBeInTheDocument();
});

test('renders Subtitle tag', () => {
    render(<Landing />);
    const hElement = screen.getByText(/an internet business./i);
    expect(hElement).toBeInTheDocument();
});

test('renders Title tag', () => {
    render(<Landing />);
    const hElement = screen.getByText(/Subtitle 5/i);
    expect(hElement).toBeInTheDocument();
});



