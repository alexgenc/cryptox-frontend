import React from 'react';
import { render } from '@testing-library/react';
import HistoryChart from '../../components/HistoryChart/HistoryChart';

describe('<HistoryChart />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<HistoryChart />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<HistoryChart />);
    expect(asFragment()).toMatchSnapshot();
  });
});