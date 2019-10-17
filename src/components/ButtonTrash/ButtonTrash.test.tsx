/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { setup, findByTestAttr } from '../../_utils/testing.utils';

/** Import Tested Component */
import ButtonTrash from './ButtonTrash';

describe('<ButtonTrash />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;
		const mockProps = {
			clickHandler: jest.fn()
		};

		beforeAll(() => {
			wrapper = setup(<ButtonTrash {...mockProps} />);
		});

		it('should render a <div />', () => {
			const component = findByTestAttr(wrapper, 'component-button-trash');
			expect(component).toHaveLength(1);
		});
	});
});
