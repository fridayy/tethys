import React from 'react';
import TodoList from './TodoList'
import { shallow, mount, render } from 'enzyme';

jest.dontMock('./TodoList');

describe('TodoListComponent', () => {

    let mockedTodos = [];

    beforeEach(() => {
        mockedTodos.push({
            resourceId: 1,
        });
    });

    it('renders text in the correct node', () => {
        expect(mount(<TodoList todos={mockedTodos} onClickDelete={() => {}}/>).find('div')).toBeDefined();
    });
});