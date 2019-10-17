/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { setup, findByTestAttr } from '../../_utils/testing.utils';

/** Import Tested Component */
import TodoItem from './TodoItem';
import { Status, Category } from '_types/types';

describe('<TodoItem />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;

		beforeAll(() => {
			const mockStatus: Status = 'Not started';
			const mockCategory: Category = 'Meeting';
			const mockProps = {
				data: {
					id: 'test',
					task: 'test',
					dateCreated: new Date(),
					dateDue: new Date(),
					status: mockStatus,
					category: mockCategory
				},
				toggleTodoStatusHandler: jest.fn(),
				deleteTodoHandler: jest.fn(),
				editTodoHandler: jest.fn()
			};
			wrapper = setup(<TodoItem {...mockProps} />);
		});

		it('should render itself', () => {
			const component = findByTestAttr(wrapper, 'component-todo');
			expect(component).toHaveLength(1);
		});
	});
});
