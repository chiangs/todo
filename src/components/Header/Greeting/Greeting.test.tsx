/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { setup, findByTestAttr } from '../../../_utils/testing.utils';

/** Import Tested Component */
import Greeting from './Greeting';

describe('<Greeting />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;

		beforeAll(() => {
			const mockProps = {
				name: 'Test'
			};
			wrapper = setup(<Greeting {...mockProps} />);
		});

		it('should render itself', () => {
			const component = findByTestAttr(wrapper, 'component-greeting');
			expect(component).toHaveLength(1);
		});
	});
});
