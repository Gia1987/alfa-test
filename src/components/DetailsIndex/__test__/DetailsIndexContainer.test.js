import React from 'react';
import { shallow } from 'enzyme';
import { DetailsIndexContainer } from '../DetailsIndexContainer';

const setup = () => {
    const props = {
        match: {params:{id: '38263'}},
    };

    const component = shallow(<DetailsIndexContainer {...props} />);
    const detailsIndex = component.find('[data-cy="details-index"]').props();

    return {
        component,
        detailsIndex,

    };
};

describe('DetailsIndexContainer', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
    it('should pass the right props',() => {
        const {
            detailsIndex
        } = setup();

        expect(typeof detailsIndex.date).toEqual('string');
        expect(typeof detailsIndex.costumer).toEqual('string');
        expect(typeof detailsIndex.body).toEqual('string');
        expect(typeof detailsIndex.img).toEqual('object');
        expect(typeof detailsIndex.logs).toEqual('object');

    });
});
