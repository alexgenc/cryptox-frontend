import React from 'react';
import { render } from '@testing-library/react';
import CoinDetailPage from '../../pages/CoinDetailPage/CoinDetailPage';

describe('<CoinDetailPage />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<CoinDetailPage />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<CoinDetailPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});