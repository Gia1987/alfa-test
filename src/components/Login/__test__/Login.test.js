import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';
import {
    VALID_EMAIL,
    VALID_PASSWORD,
    NOTIFICATION,
} from "../../../constants";

const setup = () => {
    const props = {
        notification: NOTIFICATION,
        email: VALID_EMAIL,
        password: VALID_PASSWORD,
        updateEmail: () => {},
        updatePassword: () => {},
        checkAuth: () => {},
        isAuthorised: false
    };

    const component = shallow(<Login {...props} />);
    const email = component.find('[data-cy="email"]').props();
    const password = component.find('[data-cy="password"]').props();
    const checkAuth = component.find('[data-cy="check-auth"]').props();
    const notification = component.find('[data-cy="notification"]');

    return {
        component,
        email,
        password,
        checkAuth,
        notification,
        props
    };
};

describe('Login', () => {
    it('should render correctly', () => {
        const {
            component
        } = setup('');

        expect(component.exists()).toEqual(true);
    });

    it('should render correctly', () => {
        const {
            email,
            password,
            checkAuth,
            props
        } = setup('');

        expect(email.value).toEqual(props.email);
        expect(typeof email.onChange).toEqual('function');
        expect(password.value).toEqual(props.password);
        expect(typeof password.onChange).toEqual('function');
        expect(typeof checkAuth.children).toEqual('string');
        expect(typeof checkAuth.onClick).toEqual('function');
    });

    it('should render notification', () => {
        const {
            notification
        } = setup();

        expect(notification.props().children).toEqual(NOTIFICATION);
    });
});
