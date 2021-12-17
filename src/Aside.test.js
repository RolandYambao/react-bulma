import { render, screen } from '@testing-library/react';
import Aside from './Aside';

test('renders Block text', () => {
    render(<Aside />);
    const pElement = screen.getByText(/Vertical.../i);
    expect(pElement).toBeInTheDocument();
});

test('renders Block text', () => {
    render(<Aside />);
    const pElement = screen.getByText(/...tiles/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Block text', () => {
    render(<Aside />);
    const pElement = screen.getByText(/Middle tile/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Block text', () => {
    render(<Aside />);
    const pElement = screen.getByText(/Wide tile/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Block text', () => {
    render(<Aside />);
    const pElement = screen.getByText(/Tall tile/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Block text', () => {
    render(<Aside />);
    const pElement = screen.getByText(/One/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Block text', () => {
    render(<Aside />);
    const pElement = screen.getByText(/Two/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Block text', () => {
    render(<Aside />);
    const pElement = screen.getByText(/Three/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Block text', () => {
    render(<Aside />);
    const pElement = screen.getByText(/Four/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Block text', () => {
    render(<Aside />);
    const pElement = screen.getByText(/Five/i);
    expect(pElement).toBeInTheDocument();
});
