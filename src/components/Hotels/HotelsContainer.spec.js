import React from 'react';
import { shallow } from 'enzyme';
import HotelsContainer from './HotelsContainer';

describe('HotelsContainer', () => {
  const wrapper = shallow(
    <HotelsContainer hotels={[]} hotelNameFilter="" ascendingSort={false} />
  );

  it('renders the component', () => {
    expect(wrapper.find('.hotel-list').exists()).toBe(true);
  });
});
