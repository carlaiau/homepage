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
                React / Native, Vue, Node and Go.
              </p>
              <p className="is-size-4" style={{ paddingTop: '1em' }}>
                During 2019 I worked as a software engineer at <a target="_blank"
                  rel="noopener noreferrer" href="https://themarket.com/nz/">TheMarket</a> using Vue, Express and ElasticSearch.
                My tasks were concentrated on the frontend and developing and migrating a content platform from WordPress.
              </p>
              <p className="is-size-4" style={{ paddingTop: '1em' }}>
                In 2020 I co-founded the digital agency <a href="https://www.digitalmates.co.nz/">Digital Mates</a> with <a href="http://jasonsaunders.co.nz/">Jason Saunders</a>.
                We work on a variety of architectues but are most excited about static sites using tools such as GatsbyJS and Astro.
              </p>
              <p className="is-size-4" style={{ paddingTop: '1em' }}>
                In 2020, I joined <a href="https://www.sunobi.com/">Sunobi</a> as the first employed engineer. Sunobi is a sales engagement platform for the residential solar market in the US.
                My responsibilities span frontend, backend, and dev ops as the tech team expanded to 14.
                The majority of my coding involves Golang, C# and React, both web and native.
                Since joining Sunobi, we have expanded to facilitate transactions surpassing New Zealand’s total residential solar capacity of over 300MW.
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
