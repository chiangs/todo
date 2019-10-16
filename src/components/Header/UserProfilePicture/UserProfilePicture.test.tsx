/** Import React */
import * as React from 'react';
import img from '../../../assets/Photo.png';

/** Import Test Environment */
import { ShallowWrapper } from 'enzyme';
import { setup, findByTestAttr } from '../../../_utils/testing.utils';

/** Import Tested Component */
import UserProfilePicture from './UserProfilePicture';

describe('<UserProfilePicture />', () => {
	describe('default', () => {
		let wrapper: ShallowWrapper;

		beforeAll(() => {
			const mockProps = {
				userProfilePicPath: img,
				userName: `Brenda`
			};
			wrapper = setup(<UserProfilePicture {...mockProps} />);
		});

		it('should render itself', () => {
			const component = findByTestAttr(wrapper, 'component-user-pic');
			expect(component).toHaveLength(1);
		});
	});
});
