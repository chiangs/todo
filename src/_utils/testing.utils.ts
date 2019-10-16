import * as React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import { isEmptyObj } from '../_services/object.service';

/**
 * @function .findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme wrapper to search within.
 * @param {string} val - Value of data-test attribute to search.
 * @returns {ShallowWrapper} - containing node(s) with given data-test value
 */
export const findByTestAttr = (
	wrapper: ShallowWrapper,
	val: string
): ShallowWrapper => wrapper.find(`[data-test='${val}']`);

/**
 * Factory function to create ShallowWrapper for tested component
 * @function setup
 * @param {state} state - state props
 * @returns {ShallowWrapper}
 */
export const setup = (
	wrapperToTest: React.ReactElement,
	state = {}
): ShallowWrapper => {
	const wrapper = shallow(wrapperToTest, state);
	if (!isEmptyObj(state)) wrapper.setState(state);
	return wrapper;
};

/**
 * Factory function to create a MountedWrapper for a component
 * @function mountWrap
 * @param {node} Component - Component to be shallowed
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {MountedWrapper/ReactWrapper}
 */
export const mountWrap = (Component, state = {}): ReactWrapper => {
	const wrapper = mount(Component);
	if (state) wrapper.setState(state);
	return wrapper;
};
