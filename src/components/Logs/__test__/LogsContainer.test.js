/* eslint import/named:0 */
/* eslint no-underscore-dangle: "error" */
import React from 'react';
import { shallow } from 'enzyme';
import MockDate from'mockdate';
import phoneSvg from '../../../assets/phone.svg';
import { setItemLS, removeAllLSs, readLS  } from '../../../utils';
import {LogsContainer } from '../LogsContainer';

jest.mock('../../../utils');
const setItemLSMock = jest.fn().mockName('setItemLS');

const setup = () => {
    const props = {
        logs:[]
    };

    const component = shallow(<LogsContainer {...props} />);
    const logs = component.find('[data-cy="logs"]').props();
    const modal = component.find('[data-cy="modal"]').props();
    const textArea = component.find('[data-cy="text-area"]').props();
    const btnCancel = component.find('[data-cy="btn-cancel"]').props();
    const btnAdd = component.find('[data-cy="btn-add"]').props();

    return {
        component,
        logs,
        modal,
        textArea,
        btnCancel,
        btnAdd
    };
};

describe('LogsContainer', () => {
    it('should render correctly', () => {
        const { component } = setup();

        expect(component.exists()).toEqual(true);
    });
    it('should pass the right props to logs',() => {
        const {
            logs
        } = setup();
        expect(typeof logs.onOpenModal).toEqual('function');
    });
    it('should pass the right props to modal',() => {
        const {
            modal
        } = setup();
        expect(typeof modal.open).toEqual('boolean');
        expect(typeof modal.showCloseIcon).toEqual('boolean');
        expect(typeof modal.center).toEqual('boolean');
    });

    it('should pass the right props to modal',() => {
        const {
            textArea,
            component
        } = setup();
        component.instance().onOpenModal();
        expect(typeof textArea.control).toEqual('function');
        expect(typeof textArea.value).toEqual('string');
        expect(typeof textArea.onChange).toEqual('function');
        expect(typeof textArea.placeholder).toEqual('string');
    });
    it('should pass the right props to modal',() => {
        const {
            btnCancel,
        } = setup();

        expect(typeof btnCancel.onClick).toEqual('function');
    });
    it('should pass the right props to modal',() => {
        const {
            btnAdd,
        } = setup();
        expect(typeof btnAdd.onClick).toEqual('function');
    });
    describe('methods', ()=>{
        afterEach(() => {
            setItemLSMock.mockReset();
            MockDate.reset();
        });

        describe('getDate', ()=>{
            it('should returns full date', ()=>{
                const { component } = setup();
                MockDate.set('Wed Dec 11 2019 16:13:19 GMT+0000 (GMT)');
                const date = component.instance().getDate();

                expect(date).toEqual('11/12/2019  16:13');
            });
        });
        describe('setLocalStorage', () => {
            it('Should call setItemLS', () => {
                const { component } = setup();
                const input = [{icon: phoneSvg, body:'test', date: "11/12/2019  16:13" }];
                component.instance().setLocalStorage(input);

                expect(setItemLS).toHaveBeenCalledTimes(1);
            });
        });
        describe('componentDidMount', () => {
            it('Should call readLS', () => {
                const { component } = setup();
                component.instance().componentDidMount();

                expect(readLS).toHaveBeenCalledTimes(10);
            });
        });
        describe('componentWillUnmount', () => {
            it('Should call removeAllLSs', () => {
                const { component } = setup();
                component.instance().componentWillUnmount();

                expect(removeAllLSs).toHaveBeenCalledTimes(1);
            });
        });
        describe('handleChange', ()=>{
            it('Should changes the input state property', ()=>{
                const { component } = setup();
                component.instance().handleChange({target:{value: 'test'}});
                const currentState = component.instance().state;

                expect(currentState.input).toEqual('test');
            });
        });
        describe('onOpenModal', ()=>{
            it('should set open to true', ()=>{
                const { component } = setup();
                component.instance().onOpenModal('addCall');
                const currentState = component.instance().state;

                expect(currentState.open).toEqual(true);
                expect(currentState.value).toEqual('addCall');
            });
        });
        describe('onCloseModal', ()=>{
            it('should set open to false', ()=>{
                const { component } = setup();
                component.instance().onCloseModal();
                const currentState = component.instance().state;

                expect(currentState.open).toEqual(false);
            });
        });
        describe('add', ()=>{
            it('should changes taskLogs property of the state', () => {
                const { component } = setup();

                MockDate.set('Wed Dec 11 2019 16:13:19 GMT+0000 (GMT)');

                component.instance().onOpenModal('addCall');

                component.instance().handleChange({target:{value: 'test'}});

                component.instance().add({ preventDefault: () => {} });

                const currentState = component.instance().state;

                const output = [{icon: phoneSvg, body:'test', date: "11/12/2019  16:13" }];

                expect(currentState.taskLogs).toEqual(output);
                expect(currentState.input).toEqual('');
                expect(currentState.open).toEqual(false);
            });
        });
    });

});
