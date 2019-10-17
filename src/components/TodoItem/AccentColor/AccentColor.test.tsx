/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { setup, findByTestAttr } from '../../../_utils/testing.utils';

/** Import Tested Component */
import AccentColor from './AccentColor';
import { Category } from '_types/types';

describe('<AccentColor />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;
		const mockCategory: Category = 'Meeting';
		const mockProps = {
			category: mockCategory
		};
		beforeAll(() => {
			wrapper = setup(<AccentColor {...mockProps} />);
		});

		it('should render a <div />', () => {
			const component = findByTestAttr(wrapper, 'component-accent');
			expect(component).toHaveLength(1);
		});
	});
});
