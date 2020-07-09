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
              <h1 className="is-size-1">Engineering</h1>
              <hr />
              <p className=" is-size-4">
                I have been a freelance developer since 2012, self taught starting with PHP, and now deep in the Javascript rabbit hole.
                I have helped many people navigate the WordPress landscape. These days I mainly build with
                React / Native / GatsbyJS, Vue, Node and Go.
              </p>
              <p className="is-size-4" style={{ paddingTop: '1em' }}>
                During 2019 I worked as a software engineer at <a target="_blank"
                  rel="noopener noreferrer" href="https://themarket.com/nz/">TheMarket</a> using Vue, Express and ElasticSearch.
                My tasks were concentrated on the frontend and developing and migrating a content platform from WordPress.
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
              <h2 className="is-size-1">Computer Science</h2>
              <hr />
              <p className="subtitle is-size-4">
                During 2018 - 2019 I completed a DipGrad and PGDipSci (with distinction) in Computer Science at Otago University.
                My Post graduate specialisations were AI and Information Retrieval. Once upon a time I studied commerce majoring in Finance.
              </p>
              <p className="subtitle is-size-4">
                Understanding computer science and a little business makes me a unique and agile asset especially in small teams.
                Problems have many solutions, I strive to iterate quick and remove assumptons.
                I avoid tunnel vision and over-engineering AKA drinking Kool-aid.
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
