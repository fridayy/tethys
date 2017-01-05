import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('Header', () => {
    it('renders as expected', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('div')).toBeDefined()
    });
});