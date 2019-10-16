import * as React from 'react';
import css from './Header.module.css';

type Props = {};

const Header: React.FC<Props> = props => {
	return <section data-test='component-header' className={css.Header}>Header</section>;
};

export default Header;
