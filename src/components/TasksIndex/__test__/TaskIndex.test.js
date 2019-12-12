import React from 'react';
import { shallow } from 'enzyme';
import TasksIndex from '../TasksIndex';
import { LINK_TASK_ID } from '../../../constants';

const setup = () => {
    const props = {
        toggleCollapse: ()=>{},
        activeIndex: 1,
    };

    const component = shallow(<TasksIndex {...props} />);
    const btn = component.find('[data-cy="btn-0"]').props();
    const collapse = component.find('[data-cy="collapse-0"]').props();
    const linkComponent = component.find('[data-cy="link-0"]').props();

    return {
        component,
        btn,
        collapse,
        linkComponent
    };
};

describe('TasksIndex', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
    it('should pass the right props to btn', () => {
        const {
            btn
        } = setup();
        expect(typeof btn.icon).toEqual('string');
        expect(typeof btn.onClick).toEqual('function');
        expect(typeof btn.index).toEqual('number');
    });
    it('should pass the right props to collapse', () => {
        const {
            collapse
        } = setup();

        expect(typeof collapse.isOpened).toEqual('boolean');
    });
    it('should pass the right props to linkComponent', () => {
        const {
            linkComponent
        } = setup();
        expect(linkComponent.to).toEqual(`${LINK_TASK_ID}38263`);
    });
});
