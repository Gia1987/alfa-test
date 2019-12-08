import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

const setup = () => {
    const props = {};

    const component = shallow(<App {...props} />);

    return {
        component
    };
};

describe('App', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
});
