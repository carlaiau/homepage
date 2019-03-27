import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaChevronDown } from "react-icons/fa";
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
                I have been a freelance developer since 2012, starting with PHP, and now fixated on modern Javascript.
                I'm excited about static site generators and the rise of the headless CMS. Using GatsbyJS I want to build my clients the fastest websites in the world. I love clean code and high{" "}
                <a
                  href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.carlaiau.com%2F&tab=desktop"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  PageSpeed
                </a>{" "}
                scores.</p>
                <p className="subtitle is-size-4">
                All of my traditional WordPress projects are built with Beans and Carbon Fields.
                Apart from WooCommerce and a few extensions I have a distaste for plugins.</p>
              <p className="subtitle is-size-4">
                I am the technical co-founder of{" "}
                <a
                  href="https://likeabook.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Likeabook
                </a>{", "}
                {" "}
                <a
                  href="https://octagonal.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Octagonal
                </a>{", "}
                and{" "}
                <a
                  href="https://travelinfluencers.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Travel Influencers
                </a>.
                I have recently developed{" "}
                <a
                  href="https://allcor.co.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Allcor
                </a>
                ,{" "}
                <a
                  href="http://thegoodportal.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Good Portal
                </a>
                ,{" "}
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
        <AnchorLink className="more" href="#section-3">
          <FaChevronDown />
        </AnchorLink>
      </div>
    </section>
    <section className="hero primary is-fullheight" id="section-3">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters-desktop">
              <h2 className="is-size-1">Computer science</h2>
              <hr />
              <p className="subtitle is-size-4">
                In 2018 I completed a DipGrad in Computer Science at Otago University, and am partway through my Masters in Information Retrieval. 
              </p>
              <p className="subtitle is-size-4">
                Freelancing before my academic studies has given me the unique
                combination of diverse project experience and a thorough understanding of COSC fundamentals.                 
                I can confidently execute across a wide calibre of specifications and business goals.
              </p>
            </div>
          </div>
        </div>
        <AnchorLink className="more" href="#section-4">
          <FaChevronDown />
        </AnchorLink>
      </div>
    </section>
  </div>
);
export default Content;
