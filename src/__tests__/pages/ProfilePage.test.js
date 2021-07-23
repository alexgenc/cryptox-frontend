import React from 'react';
import { render } from '@testing-library/react';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';

describe('<ProfilePage />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<ProfilePage />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<ProfilePage />);
    expect(asFragment()).toMatchSnapshot();
  });
});