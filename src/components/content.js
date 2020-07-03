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
              <h1 className="is-size-1">Engineer</h1>
              <hr />
              <p className=" is-size-4">
                I have been a freelance developer since 2012, self taught starting with PHP, and now deep in the Javascript rabbit hole.
                I have helped many people navigate the cowboy-full Wordpress landscape. These days I build mainly with
                React, Vue, React Native, GatsbyJS and Strapi.
              </p>
              <p className="is-size-4" style={{ paddingTop: '1em' }}>
                In 2019 I worked as a software engineer at TheMarket using Vue, Express and ElasticSearch.
                My tasks were frontend concentrated as well as  migrating a content platform from WordPress into a custom CMS.
              </p>
              <p className="is-size-4" style={{ paddingTop: '1em' }}>
                In 2020 I co-founded the digital agency <a href="https://www.digitalmates.co.nz/">Digital Mates</a> with <a href="http://jasonsaunders.co.nz/">Jason Saunders</a>.
              </p>
              <p className="is-size-1" style={{ paddingTop: '1em' }}>
                Recent Work
              </p>
              <hr />
              <p className="is-size-4">
                <a
                  href="https://www.dpmgroup.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DPM Group
                </a>
                {" "}
                <span className="is-size-3" style={{ position: 'relative', top: '4px', padding: '0 5px', opacity: 0.5 }}>|</span>
                {" "}
                <a
                  href="https://www.hotyogadunedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hot Yoga Dunedin
                </a>
                {" "}
                <span className="is-size-3" style={{ position: 'relative', top: '4px', padding: '0 5px', opacity: 0.5 }}>|</span>
                {" "}
                <a
                  href="https://rize.fashion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rize
                </a>
                {" "}
                <span className="is-size-3" style={{ position: 'relative', top: '4px', padding: '0 5px', opacity: 0.5 }}>|</span>
                {" "}
                <a
                  href="https://www.southerncrossflutes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Southern Cross Flutes
                </a>
                {" "}
                <span className="is-size-3" style={{ position: 'relative', top: '4px', padding: '0 5px', opacity: 0.5 }}>|</span>
                {" "}
                <a
                  href="https://likeabook.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Likeabook
                </a>
                {" "}
                <span className="is-size-3" style={{ position: 'relative', top: '4px', padding: '0 5px', opacity: 0.5 }}>|</span>
                {" "}
                <a
                  href="https://ageingwellchallenge.co.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ageing Well National Science Challenge
                </a>
                {" "}
                <span className="is-size-3" style={{ position: 'relative', top: '4px', padding: '0 5px', opacity: 0.5 }}>|</span>
                {" "}
                <a
                  href="https://ecotricity.co.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ecotricity
                </a>
                {" "}
                <span className="is-size-3" style={{ position: 'relative', top: '4px', padding: '0 5px', opacity: 0.5 }}>|</span>
                {" "}
                <a
                  href="https://www.hempme.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hemp Me
                </a>


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
              <h2 className="is-size-1">Computer Scientist</h2>
              <hr />
              <p className="subtitle is-size-4">
                During 2018 - 2019 I completed a DipGrad and PGDipSci in Computer Science at Otago University while freelancing. My Post graduate specialisations were AI and Information Retrieval.
              </p>
              <p className="subtitle is-size-4">
                I believe a wide understanding across various aspects of computer science makes me a unique and agile asset in business environments, especially in small teams.
                There are many solutions to problems. I always strive to iterate quick, remove assumptons, and avoid drinking Kool-aid.
              </p>


            </div>
          </div>
        </div>
        <AnchorLink className="more" href="#section-4">
          <FaChevronDown />
        </AnchorLink>
      </div>
    </section>
  </div >
);
export default Content;
