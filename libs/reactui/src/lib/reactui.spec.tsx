import { render } from '@testing-library/react';

import Reactui from './reactui';

describe('Reactui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactui />);
    expect(baseElement).toBeTruthy();
  });
});
