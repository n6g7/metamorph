import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import JadeCompiler from '../../src/components/JadeCompiler';

describe('<JadeCompiler />', () => {
  it('displays "Jade"', () => {
    const wrapper = shallow(<JadeCompiler />);

    expect(wrapper).to.have.descendants('h2');
    expect(wrapper).to.contain.text('Jade');
  });
});
