import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Content from './content';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<Content/>
	</div>
);

export default Layout;
