import React from 'react';
import { shallow } from 'enzyme';
import ImageContainer from './ImageContainer';

describe('ImageContainer', () => {
  const wrapper = shallow(
    <ImageContainer
      imageURL="https://placekitten.com/g/200/300"
      fallbackImage="https://placekitten.com/g/200/300"
      alt="Testing kitten photo"
    />
  );

  it('renders the component', () => {
    expect(wrapper.find('.container-photo').exists()).toBe(true);
  });
});
