import { render } from '@testing-library/react';

import Youtube from './youtube';

describe('Youtube', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Youtube />);
    expect(baseElement).toBeTruthy();
  });
});
