import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Header from '../../src/components/Header';

describe('<Header />', () => {
  it('displays the logo', () => {
    const wrapper = shallow(<Header
      autoCompile={true}
      toggleAutoCompile={() => {}}
    />);

    expect(wrapper).to.have.descendants('img');
  });
});
