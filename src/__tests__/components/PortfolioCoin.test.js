import React from 'react';
import { render } from '@testing-library/react';
import PortfolioCoin from '../../components/PortfolioCoin/PortfolioCoin';


describe('<PortfolioCoin />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<PortfolioCoin />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<PortfolioCoin />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders the <PortfolioCoin />', () => {
    const { getByText } = render(
      <PortfolioCoin />
    );

    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Price')).toBeTruthy();
  });
});