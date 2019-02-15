import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Content = () => (
  <div>
    <section className="hero secondary is-fullheight" id="section-1">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters-desktop">
              <h1 className="is-size-1">Obsessed with code</h1>
              <hr />
              <p className="subtitle is-size-4">
                I have been a freelance developer since 2012, starting with PHP,
                and now salvating over modern
                Javascript. I'm excited about static site generators and the rise of the
                headless CMS. By using Next, Hugo and GatsbyJS we can build the fastest websites in the world.
                I love clean code and
                high{" "}
                <a
                  href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fcarlaiau.com&tab=desktop"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  PageSpeed
                </a>{" "}
                scores.</p>
                <p className="subtitle is-size-4">
                All of my traditional WordPress projects are built with Beans and Carbon Fields.
                This combination offers fast development with modular UIKit and tonnes of functionality out of the box. 
                Apart from WooCommerce and a few extentions, I have a distaste for plugins.
              </p>
              <p className="subtitle is-size-4">
                I am the technical co-founder of{" "}
                <a
                  href="https://likeabook.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Likeabook
                </a>{" "}
                and{" "}
                <a
                  href="https://travelinfluencers.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Travel Influencers
                </a>
                . Recent projects I've built are{" "}
                <a
                  href="https://www.southerncrossflutes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Southern Cross Flutes
                </a>
                ,{" "}
                <a
                  href="https://ecotricity.co.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ecotricity
                </a>
                ,{" "}
                <a
                  href="http://generositycoffee.org.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Generosity Coffee
                </a>
                ,{" "}
                <a
                  href="https://www.hempme.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hemp Me
                </a>{" "}
                and the{" "}
                <a
                  href="https://ageingwellchallenge.co.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ageing Well National Science Challenge
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero primary is-fullheight" id="section-2">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters-desktop">
              <h2 className="is-size-1">Computer science</h2>
              <hr />
              <p className="subtitle is-size-4">
                In 2018 I completed a DipGrad in Computer Science at Otago University, and am partway through my Masters. 
              </p>
              <p className="subtitle is-size-4">
                Freelancing before my academic studies has given me the unique
                combination of diverse project experience and a thorough understanding of COSC fundamentals.                 
                I can confidently execute across a wide calibre of specifications and business needs.
              </p>
              <p className="subtitle is-size-4">
                I play with AI for fun. I promise to get Python notebooks up soon, please <AnchorLink className="down" href="#section-3">tell me off</AnchorLink> if I don't.
              </p>
              
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default Content;
