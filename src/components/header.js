import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import Particles from 'react-particles-js';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = ({ siteTitle }) => (
    <div>
		<Particles className="backdrop" params={{
			"particles": {
				"number": {
					"value": 50,
					"density": {
						"enable": true,
						"value_area": 750
					}
				},
				"line_linked": {
					"enable": true,
					"opacity": 0.02,
					
				},
				"move": {
					"direction": "right",
					"speed": 3
				},
				"size": {
					"value": 3
				},
				"opacity": {
					"anim": {
						"enable": true,
						"speed": 1,
						"opacity_min": 0.33
					}
				}
			},
			"retina_detect": true
		}} />
        <section className="hero primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="is-uppercase is-size-1">Carl Aiau</h1>
                    <hr />
                    <p className="subtitle is-size-2">Wordpress, Javascript and Computer Science.</p>
                </div>
				<AnchorLink className="more" href="#section-1">
					<FaChevronDown/>
                </AnchorLink>
				
            </div>
        </section>
        
    </div>
)

export default Header
