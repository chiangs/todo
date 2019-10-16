import * as React from 'react';
import css from './UserProfilePicture.module.css';

type Props = {
	userProfilePicPath: string;
	userName: string;
};

const UserProfilePicture: React.FC<Props> = ({
	userProfilePicPath,
	userName
}) => {
	return (
		<section data-test='component-user-pic' className={css.UserProfilePic}>
			<img src={userProfilePicPath} alt={userName} />
		</section>
	);
};

export default UserProfilePicture;
