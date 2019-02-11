import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<div>
	<section className="hero primary is-fullheight">
		<div className="hero-body">
			<div className="container">
			<h1 className="is-uppercase is-size-1">
				Carl Aiau
			</h1>
			<hr></hr>
			<p className="subtitle is-size-2">
				Wordpress, Fullstack Javascript and Computer Science.
			</p>
			</div>
		</div>
	</section>
	<section className="hero secondary is-fullheight">
	<div className="hero-body">
		<div className="container">
			<div className="columns">
				<div className="column is-three-quarters-desktop">
					<h1 className="is-size-1">
						Jack (of all trades) Developer
					</h1>
					<hr></hr>
					<p className="subtitle is-size-3">
					I have been a freelance developer since 2012, mainly with Wordpress. It is a great platform for content creation, e-commerce, and market validation of tomorrow's great idea.
					All of my builds are based on Beans and Carbon Fields. This modular combination results in a very fast, secure and maintainable site.

					</p>
					<p className="subtitle is-size-3">
						I am obsessed with performance, load times, and optimising the end user experience. 
						I avoid relying on plugins, unless they're created by a solid team, and fill a solid requirement.
						Recently I have dug into the exploding world of static site generation and headless CMS's using React, Hugo and GatsbyJS.
					</p>
					<p className="subtitle is-size-3">
						I try as hard as possible to keep the blinkers off, and am continually humbled by the expertise of others.
						I am a co-founder of Likeabook and Travelinfluencers. 
						Away from the terminal I love guzzling coffee, trying to pull 200kg+ deadlifts and refreshing Elon's twitter feed.
					</p>	
				</div>
			</div>
		</div>
	</div>
	</section>
	<section className="hero primary is-fullheight">
		<div className="hero-body">
			<div className="container">
				<div className="columns">
					<div className="column is-three-quarters-desktop">
						<h1 className=" is-size-1">
							Computer Science
						</h1>
						<hr></hr>
						<p className="subtitle is-size-3">
							Last year I completed a Graduate Diploma in Computer Science from Otago University,
							and am currently pursuing a masters in the field.</p>
						<p className="subtitle is-size-3">		
							Freelancing before my academic studies has given me a unique combination that most graduates (and freelancers) lack; diverse project experience, a rigirous understanding of computer science fundamentals and the confidence to execute.
						</p>
						<p className="subtitle is-size-3">
							I'm obsessed (albeit slightly concerned) with the disruption caused by artifical 
							intelligence and I am currently studying fast.ai's practical AI and ML courses. I will blog about my results here.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	</div>
);

export default Header;
