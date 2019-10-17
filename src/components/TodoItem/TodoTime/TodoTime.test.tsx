/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { setup, findByTestAttr } from '../../../_utils/testing.utils';

/** Import Tested Component */
import TodoTime from './TodoTime';

describe('<TodoTime />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;
		const mockDate: Date = new Date();
		const mockProps = {
			date: mockDate
		};

		beforeAll(() => {
			wrapper = setup(<TodoTime {...mockProps} />);
		});

		it('should render itself', () => {
			const component = findByTestAttr(wrapper, 'component-todo-time');
			expect(component).toHaveLength(1);
		});
	});
});
