import React from 'react';
import UserProfilePic from '../components/Header/UserProfilePicture';
import image from '../assets/Photo.png';

export default {
	title: 'Header UserProfilePic'
};

const user = {
	pic: image,
	name: `Brenda`
};

export const userProfilePic = () => (
	<UserProfilePic userProfilePicPath={user.pic} userName={user.name} />
);
