import React from 'react';
import { render } from '@testing-library/react';
import { MainMenu } from './components/mainMenu';

test('renders learn react link', () => {
  const { getByText } = render(<MainMenu />);
  const linkElement = getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
