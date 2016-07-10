import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import StylusCompiler from '../../src/components/StylusCompiler';

describe('<StylusCompiler />', () => {
  it('displays "Stylus"', () => {
    const wrapper = shallow(<StylusCompiler />);

    expect(wrapper).to.have.descendants('h2');
    expect(wrapper).to.contain.text('Stylus');
  });
});
