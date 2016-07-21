import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {List} from 'immutable';

import StylusSection from '../../src/components/StylusSection';

describe('<StylusSection />', () => {
  it('displays "Stylus"', () => {
    const wrapper = shallow(<StylusSection
      files={List()}
      compile={() => {}}
    />);

    expect(wrapper).to.have.descendants('.title');
    expect(wrapper.find('.title')).to.contain.text('Stylus');
  });
});
