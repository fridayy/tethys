import React from 'react';
import Navigation from './Navigation';
import { shallow, mount, render } from 'enzyme';

jest.dontMock('./Navigation.js');

describe('NavigationComponent', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Navigation/>).find('.navigation');
    });

    it('creates correct div', () => {
        expect(wrapper.is('.navigation')).toBe(true);
    });

    it('has all nodes', () => {
        expect(wrapper.find('.navigation').children().length).toBe(6);
    });
});