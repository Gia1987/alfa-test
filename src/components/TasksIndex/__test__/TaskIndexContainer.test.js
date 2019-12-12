import React from 'react';
import { shallow } from 'enzyme';
import {TasksIndexContainer} from '../TasksIndexContainer';

const setup = () => {
    const props = {};

    const component = shallow(<TasksIndexContainer {...props} />);
    const tasksIndex = component.find('[data-cy="tasks-index"]').props();

    return {
        component,
        tasksIndex,
    };
};

describe('TasksIndexContainer', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
    it('should pass the right props',() => {
        const {
            tasksIndex
        } = setup();

        expect(typeof tasksIndex.toggleCollapse).toEqual('function');
        expect(typeof tasksIndex.activeIndex).toEqual('number');
    });

    describe('methods', ()=>{
        describe('toggleCollapse', ()=>{
            it('should changes the state', ()=>{
                const { component } = setup();
                component.instance().toggleCollapse({}, {index: 1});
                const currentState = component.instance().state;

                expect(currentState.activeIndex).toEqual(1);
            });
        });
    });

});
