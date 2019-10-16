import * as React from 'react';
import css from './Header.module.css';
import Greeting from './Greeting';
import UserProfilePicture from './UserProfilePicture';
import Status from './Status';
import profilePic from '../../assets/Photo.png';

type Props = {};

const Header: React.FC<Props> = props => {
	// TODO: Change these constants to get from state
	const name = `Brenda`;
	const numberOfTasks = 0;
	const image = profilePic;
	const styles = [css.Header, 'label'].join(' ');
	return (
		<section data-test='component-header' className={styles}>
			<section>
				<Greeting name={name} />
				<Status numberOfTasks={numberOfTasks} />
			</section>
			<UserProfilePicture userProfilePicPath={image} userName={name} />
		</section>
	);
};

export default Header;
