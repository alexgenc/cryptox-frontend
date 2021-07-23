import React from 'react';
import { render } from '@testing-library/react';
import PortfolioPage from '../../pages/PortfolioPage/PortfolioPage';

describe('<PortfolioPage />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<PortfolioPage />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<PortfolioPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});