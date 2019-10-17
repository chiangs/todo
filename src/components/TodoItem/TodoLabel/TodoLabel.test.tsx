/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { setup, findByTestAttr } from '../../../_utils/testing.utils';

/** Import Tested Component */
import TodoLabel from './TodoLabel';
import { Status } from '_types/types';

describe('<TodoLabel />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;
		const mockStatus: Status = 'Not started';
		const mockProps = {
			text: `test`,
			status: mockStatus,
			clickHandler: jest.fn()
		};

		beforeAll(() => {
			wrapper = setup(<TodoLabel {...mockProps} />);
		});

		it('should render a <div />', () => {
			const component = findByTestAttr(wrapper, 'component-todo-label');
			expect(component).toHaveLength(1);
		});
	});
});
