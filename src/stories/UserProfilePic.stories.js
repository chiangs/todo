import React from 'react';
import UserProfilePic from '../components/Header/UserProfilePicture';
import image from '../assets/Photo.png';

export default {
	title: 'Header UserProfilePic',
	parameters: {
		component: UserProfilePic,
		componentSubtitle: 'Display logged in user profile image.'
	}
};

const user = {
	pic: image,
	name: `Brenda`
};

export const userProfilePic = () => (
	<UserProfilePic userProfilePicPath={user.pic} userName={user.name} />
);
