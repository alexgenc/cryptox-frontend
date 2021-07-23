import React from 'react';
import { render } from '@testing-library/react';
import SignupPage from './SignupPage';
import { MemoryRouter } from 'react-router';

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});