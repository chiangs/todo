/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { setup, findByTestAttr } from '../../_utils/testing.utils';

/** Import Tested Component */
import ButtonCircle from './ButtonCircle';
import { Status } from '_types/types';

describe('<ButtonCircle />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;

		beforeAll(() => {
			const mockStatus: Status = 'Not started';
			const mockProps = {
				status: mockStatus,
				clickHandler: jest.fn()
			};
			wrapper = setup(<ButtonCircle {...mockProps} />);
		});

		it('should render a <div />', () => {
			const component = findByTestAttr(
				wrapper,
				'component-button-circle'
			);
			expect(component).toHaveLength(1);
		});
	});
});
