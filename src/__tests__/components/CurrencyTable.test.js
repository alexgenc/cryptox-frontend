import React from 'react';
import { render } from '@testing-library/react';
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';

describe('<CurrencyTable />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<CurrencyTable />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<CurrencyTable />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders the <CurrencyTable />', () => {
    const { getByText } = render(
      <CurrencyTable />
    );

    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Price')).toBeTruthy();
  });
});