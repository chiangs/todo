/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { findByTestAttr, setup } from '../../_utils/testing.utils';

/** Import Tested Component */
import Header from './Header';

describe('<Header />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;

		beforeAll(() => {
			wrapper = setup(<Header />);
		});

		it('should render itself', () => {
			const component = findByTestAttr(wrapper, 'component-header');
			expect(component).toHaveLength(1);
		});
	});
});
