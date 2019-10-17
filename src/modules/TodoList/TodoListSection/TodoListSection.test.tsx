/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { setup, findByTestAttr } from '../../../_utils/testing.utils';

/** Import Tested Component */
import TodoListSection from './TodoListSection';

describe('<TodoListSection />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;
		const mockProps = {
			todos: []
		};

		beforeAll(() => {
			wrapper = setup(<TodoListSection {...mockProps} />);
		});

		it('should render itself', () => {
			const component = findByTestAttr(
				wrapper,
				'component-todo-list-section'
			);
			expect(component).toHaveLength(1);
		});
	});
});
