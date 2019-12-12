import React from 'react';
import { shallow } from 'enzyme';
import {
    LINK_TASKS_INDEX,
} from '../../../constants';
import { Header } from '../Header';

const setup = () => {
    const props = {
        pathname: 'test'
    };

    const component = shallow(<Header {...props} />);
    const logo = component.find('[data-cy="logo"]').props();

    return {
        component,
        logo,
    };
};

describe('Header', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });

    it('should pass the right props', () => {
        const {
            logo,
        } = setup();

        expect(logo.to).toEqual(LINK_TASKS_INDEX);

    });
});
