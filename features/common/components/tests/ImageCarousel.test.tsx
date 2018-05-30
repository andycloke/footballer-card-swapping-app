import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ImageCarousel from '../ImageCarousel';
import exampleImages from './data';

describe('ImageCarousel', () => {
  it('renders a list of images', () => {
    const rendered = renderer
      .create(<ImageCarousel images={exampleImages} />)
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
