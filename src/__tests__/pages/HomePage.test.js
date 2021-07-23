import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../../pages/HomePage/HomePage';

describe('<HomePage />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<HomePage />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
  });
});