import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Header from '../../src/components/Header';

describe('<Header />', () => {
  it('displays the title', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).to.have.descendants('h1');
    expect(wrapper).to.contain.text('Stylay');
  });
});
