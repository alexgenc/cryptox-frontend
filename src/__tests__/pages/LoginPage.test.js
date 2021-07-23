import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';
import { MemoryRouter } from 'react-router';

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
