/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { setup, findByTestAttr } from '../../_utils/testing.utils';

/** Import Tested Component */
import ButtonPlus from './ButtonPlus';

describe('<ButtonPlus />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;
		const mockProps = {
			clickHandler: jest.fn()
		};
		beforeAll(() => {
			wrapper = setup(<ButtonPlus {...mockProps} />);
		});

		it('should render itself', () => {
			const component = findByTestAttr(wrapper, 'component-button-plus');
			expect(component).toHaveLength(1);
		});
	});
});
