/* eslint import/named:0 */
import React from 'react';
import { shallow } from 'enzyme';
import {
    VALID_EMAIL,
    VALID_PASSWORD,
    LINK_TASKS_INDEX
} from "../../../constants";
import { LoginContainer } from '../LoginContainer';

const historyMock = { push: jest.fn() };

const setup = () => {

    const component = shallow(<LoginContainer history={historyMock} />);
    const login = component.find('[data-cy="login"]').props();

    return {
        component,
        login
    };
};

describe('LoginContainer', () => {
    it('should render correctly', () => {
        const {component} = setup({});

        expect(component.exists()).toEqual(true);
    });

    it('should send right props', () => {
        const {login} = setup({});

        expect(typeof login.notification).toEqual('string');
        expect(typeof login.email).toEqual('string');
        expect(typeof login.password).toEqual('string');
        expect(typeof login.isAuthorised).toEqual('boolean');
        expect(typeof login.updateEmail).toEqual('function');
        expect(typeof login.updatePassword).toEqual('function');
        expect(typeof login.checkAuth).toEqual('function');
    });

    describe('Methods', () => {
        describe('updateEmail', ()=>{
            it('should update the email property of state', ()=>{
                const { component } = setup();

                component.instance().updateEmail({target:{value: 'test'}});
                const currentState = component.instance().state;

                expect(currentState.email).toEqual('test');
            });
        });
        describe('updatePassword', () => {
            it('should update the password property of state', () => {
                const { component } = setup();

                component.instance().updatePassword({target:{value: 'test'}});
                const currentState = component.instance().state;

                expect(currentState.password).toEqual('test');
            });
        });
        describe('checkAuth', () => {
            it('Should call history method', () => {
                const { component } = setup();

                component.instance().updatePassword({target:{value: VALID_PASSWORD}});
                component.instance().updateEmail({target:{value: VALID_EMAIL }});

                component.instance().checkAuth();

                expect(historyMock.push.mock.calls[0]).toEqual([ LINK_TASKS_INDEX ]);
            });
            it('Should update the isAuthorised property of state', () => {
                const { component } = setup();

                component.instance().updatePassword({target:{value: ''}});
                component.instance().updateEmail({target:{value: '' }});

                component.instance().checkAuth();

                const currentState = component.instance().state;

                expect(currentState.isAuthorised).toEqual(false);
            });
        });
    });
});
