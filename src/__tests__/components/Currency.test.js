import React from 'react';
import { render } from '@testing-library/react';
import Currency from '../../components/Currency/Currency';

describe('<Currency />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<Currency />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<Currency />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders the <Currency />', () => {
    const { getByText } = render(
      <Currency />
    );

    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Price')).toBeTruthy();
  });
});