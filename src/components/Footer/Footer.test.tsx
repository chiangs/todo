/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { findByTestAttr, setup } from '../../_utils/testing.utils';

/** Import Tested Component */
import Footer from './Footer';

describe('<Footer />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;

		beforeAll(() => {
			wrapper = setup(<Footer />);
		});

		it('should render itself', () => {
			const component = findByTestAttr(wrapper, 'component-footer');
			expect(component).toHaveLength(1);
		});
	});
});
