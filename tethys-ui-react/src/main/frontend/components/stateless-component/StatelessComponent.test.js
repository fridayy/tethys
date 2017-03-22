/**
 * Created by bnjm on 3/18/17.
 */
import React from 'react';
import StatelessComponent from './StatelessComponent'
import {shallow} from "enzyme";
import {expect} from 'chai';

it('renders without crashing', () => {
    let text = "test";
    const wrapper = shallow(<StatelessComponent text={text}/>);
    expect(wrapper.find("<p>"))
});