import { render, screen } from '@testing-library/react';
import App from './App';

test('renders start page correctly', async () => {
  render(<App />);
  const headingElement = await screen.findByText(/คุณเป็นใครในโลกแห่งความรัก?/i);
  const buttonElement = await screen.findByText(/ไปกันเลยยยย/i);
  expect(headingElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
