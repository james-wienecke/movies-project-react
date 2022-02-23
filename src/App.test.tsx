import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from "react-dom";

it('renders without crashing', () => {
  render(<App />)
  const app = screen.getByTestId('app');
});
