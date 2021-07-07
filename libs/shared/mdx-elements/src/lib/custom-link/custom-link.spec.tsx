import { render } from '@testing-library/react';

import CustomLink from './custom-link';

describe('CustomLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomLink />);
    expect(baseElement).toBeTruthy();
  });
});
