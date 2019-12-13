import React from 'react';
import { shallow } from 'enzyme';
import DetailsIndex from '../DetailsIndex';

const setup = () => {
    const props = {
        body: 'test',
        date: 'test',
        costumer: 'test',
        img: {},
        logs:[]
    };

    const component = shallow(<DetailsIndex {...props} />);
    const logsComponet = component.find('[data-cy="logs"]').props();

    return {
        component,
        logsComponet,
        props
    };
};

describe('DetailsIndex', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
    it('should pass the right props', () => {
        const {
            logsComponet
        } = setup();

        expect(logsComponet.logs).toEqual([]);
    });
});
