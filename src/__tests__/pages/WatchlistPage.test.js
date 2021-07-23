import React from 'react';
import { render } from '@testing-library/react';
import WatchlistPage from '../../pages/CoinDetailPage/CoinDetailPage';

describe('<WatchlistPage />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<WatchlistPage />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<WatchlistPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});