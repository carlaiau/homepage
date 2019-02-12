import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Content from './content';
import Footer from './footer';
const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<Content/>
		<Footer/>
	</div>
);

export default Layout;
