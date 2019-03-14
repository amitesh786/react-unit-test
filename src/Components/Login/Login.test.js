import React from 'react';
import { Form, Button } from "react-bootstrap";
import { shallow, configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Login from '../Login';

const wrapper = shallow(<Login />);
let container, containerProp;

describe("Login - No props", () => {

    it("should have state set properly", () => {
        expect(wrapper.state().title).toEqual("Login WebApp");
    });

    describe("render <div>", () => {
        beforeEach(() => {
            container = wrapper.find("div");
            containerProp = container.props();
        });

        it("should have a <div>", () => {
            expect(container).toHaveLength(1);
        });
    });

    describe("render <h2>", () => {
        beforeEach(() => {
            container = wrapper.find("h2");
        });

        it("should have a <h2>", () => {
            expect(container).toHaveLength(1);
        });

        it("should have a <h2> with the properly text", () => {
            expect(container.text()).toEqual("Login WebApp");
        });
    });
});

describe("Login - form check", () => {

    it("should have state set properly", () => {
        expect(wrapper.state().title).toEqual("Login WebApp");
    });

    it('calls onSubmit prop function when form is submitted', () => {
        const onSubmitFn = jest.fn();
        const wrapper = mount(<Form onSubmit={onSubmitFn} />);
        const form = wrapper.find('form');

        form.simulate('submit');
        expect(onSubmitFn).toHaveBeenCalledTimes(1);
    });
});

describe("Login - props", () => {
    const wrapper = shallow(<Login title="Bye Bye" />);

    it("should have a <h2> with the properly text", () => {
        container = wrapper.find("h2");
        expect(container.text()).toEqual("Login WebApp");
    });
});

describe("Login - input check", () => {

    it('renders email input with label given the type', () => {
        const wrapper = mount(<Form.Control type="email" label="Email address" />);
        const input = wrapper.find('input');
        expect(input).toHaveLength(1);
        expect(input.prop('type')).toEqual('email');
    });

    it('renders password input with label given the type', () => {
        const wrapper = mount(<Form.Control type="password" label="Password" />);
        const input = wrapper.find('input');
        expect(input).toHaveLength(1);
        expect(input.prop('type')).toEqual('password');
    });
});

describe("Login - submit check", () => {

    it('renders submit button with custom text', () => {
        const wrapper = mount(<Button>Login</Button>);
        const button = wrapper.find('button');
        expect(button).toHaveLength(1);
        expect(button.prop('type')).toEqual('button');
        expect(button.text()).toEqual('Login');
    });
});
