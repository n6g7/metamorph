import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {List} from 'immutable';

import JadeSection from '../../src/components/JadeSection';

describe('<JadeSection />', () => {
  it('displays "Jade"', () => {
    const wrapper = shallow(<JadeSection
      files={List()}
      compile={() => {}}
    />);

    expect(wrapper).to.have.descendants('.title');
    expect(wrapper.find('.title')).to.contain.text('Jade');
  });
});
