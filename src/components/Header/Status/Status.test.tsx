/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { setup, findByTestAttr } from '../../../_utils/testing.utils';

/** Import Tested Component */
import Status from './Status';

describe('<Status />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;

		beforeAll(() => {
			const mockProps = {
				numberOfTasks: 0
			};
			wrapper = setup(<Status {...mockProps} />);
		});

		it('should render itself', () => {
			const component = findByTestAttr(wrapper, 'component-status');
			expect(component).toHaveLength(1);
		});

		it('should say no tasks', () => {
			expect(wrapper.text()).toEqual('Today you have no tasks');
		});
	});

	describe('with tasks', () => {
		let wrapper: ShallowWrapper;

		beforeAll(() => {
			const mockProps = {
				numberOfTasks: 9
			};
			wrapper = setup(<Status {...mockProps} />);
		});

		it('should say no tasks', () => {
			expect(wrapper.text()).toEqual('Today you have 9 tasks');
		});
	});
});
