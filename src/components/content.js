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
                In 2019, I worked as a software engineer at <a target="_blank" rel="noopener noreferrer" href="https://themarket.com/nz/">TheMarket</a>, using Vue, Express and Elasticsearch. My role centred on frontend development, where I took ownership of a user-generated content platform and its ongoing improvements.
              </p>
              <p className="is-size-4" style={{ paddingTop: '1em' }}>
                In 2020, I co-founded <a href="https://www.digitalmates.co.nz/">Digital Mates</a> with <a target="_blank" rel="noopener noreferrer" href="http://jasonsaunders.co.nz/">Jason Saunders</a>. We build across multiple architectures, with a strong focus on performant static sites using GatsbyJS and Astro and a mixture of Jamstack and headless technologies.
              </p>
              <p className="is-size-4" style={{ paddingTop: '1em' }}>
                In 2020, I joined <a target="_blank" rel="noopener noreferrer" href="https://www.sunobi.com/">Sunobi</a> as the first employed engineer and later served as VP of Development. Sunobi was a sales engagement platform built for the US residential solar market. Over my four years there, I worked end-to-end across frontend, backend and DevOps while helping grow the engineering team to 14. My work focused on Golang, C# and React (web and native), alongside technical strategy and delivery management. During this time, the platform facilitated the sale of more than 300MW of solar systems, equating to hundreds of millions in project value.
              </p>

              <p className="is-size-4" style={{ paddingTop: '1em' }}>
                In 2024, I co-founded <a target="_blank" rel="noopener noreferrer" href="https://palebluedawn.com/">Pale Blue Dawn</a>, an integrations platform for the solar industry. I lead development of a block-based workflow builder, powered by a recursive DSL that enables users to create and modify complex integration logic without writing code. The platform features AI-assisted block generation and a RAG guidance layer to suggest logic, reduce setup time, and improve workflow quality.
              </p>
              <p className="is-size-4">
                A key advantage of this design is the ability to visually inspect and replay executions. When external systems fail or return inconsistent data, runs can be retried with full visual traceability of where errors occurred. We design for fragility rather than assuming reliability, allowing users to build resilient automation pipelines across CRM, sales and EPC systems with reduced operational friction.
              </p>
              <p className="is-size-4" style={{ paddingTop: '1em' }}>
                In 2025, I took on the tech lead role for <a target="_blank" rel="noopener noreferrer" href="https://gonegood.co.nz">Gone Good</a>, a food-waste reduction platform in New Zealand. I owned the architecture of three core applications: the mobile customer app, the vendor portal for shop owners, and the internal administration interface, ensuring technical decisions aligned with product and commercial objectives. I also led development of the customer app and guided the engineering team through build, launch and iteration. Gone Good launched in October 2025 and is live in Auckland and Wellington.
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
