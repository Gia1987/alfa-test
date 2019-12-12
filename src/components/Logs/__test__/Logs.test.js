import React from 'react';
import { shallow } from 'enzyme';
import Logs from '../Logs';

const setup = () => {
    const props = {
        onOpenModal: () => {},
        logs: { icon: '', body:'', date:'' },
    };

    const component = shallow(<Logs {...props} />);
    const addCallBtn = component.find('[data-cy="add-call"]').props();
    const addNoteBtn = component.find('[data-cy="add-note"]').props();

    return {
        component,
        addCallBtn,
        addNoteBtn
    };
};

describe('Logs', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
    it('should pass the right props to addCallBtn', () => {
        const {
            addCallBtn
        } = setup();
        expect(typeof addCallBtn.onClick).toEqual('function');
    });
    it('should pass the right props to addNoteBtn', () => {
        const {
            addNoteBtn
        } = setup();
        expect(typeof addNoteBtn.onClick).toEqual('function');
    });
});
