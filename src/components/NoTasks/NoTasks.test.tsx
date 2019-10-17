/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { setup, findByTestAttr } from '../../_utils/testing.utils';

/** Import Tested Component */
import NoTasks from './NoTasks';

describe('<NoTasks />', () => {

	describe('default', () => {
		let wrapper: ShallowWrapper;

		beforeAll(() => {
			wrapper = setup(<NoTasks />);
		});

		it('should render itself', () => {
			const component = findByTestAttr(wrapper, 'component-notasks');
			expect(component).toHaveLength(1);
		});
	});
});
