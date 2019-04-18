import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReactTooltip from 'react-tooltip'
import { FaChevronDown } from "react-icons/fa";

const gross_style_string = `
  .__react_component_tooltip.carl_tool{ 
    background: #306E73;
    opacity: 1;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    max-width: 500px;
  }
  .__react_component_tooltip.carl_tool.place-top:after{
    border-top-color: #306E73 !important;
  }
  .__react_component_tooltip.carl_tool.place-bottom:after{
    border-bottom-color: #306E73 !important;
  }
  .__react_component_tooltip.carl_tool.place-left:after{
    border-left-color: #306E73 !important;
  }
  .__react_component_tooltip.carl_tool.place-right:after{
    border-right-color: #306E73 !important;
  }
  .__react_component_tooltip.carl_tool .is-size-5{
    color: #fff;
  }
  @media screen  and (max-width: 480px){
    .__react_component_tooltip.carl_tool{ 
      max-width: 80vw;
    }
    .__react_component_tooltip.carl_tool .is-size-5{
      font-size: 0.8em;
    }
  }
`

const Content = () => (
  <div>
    <style dangerouslySetInnerHTML={{__html: gross_style_string }} />
    <section className="hero secondary is-fullheight" id="section-1">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters-desktop">
              <h1 className="is-size-1">Obsessed with code</h1>
              <hr />
              <p className="subtitle is-size-4">
                I have been a freelance developer since 2012, starting with PHP, and now fixated on modern Javascript and Golang.
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
                All of my traditional WordPress projects are built with <a href="https://getbeans.io" target="_blank" rel="noopener noreferrer">Beans</a> and <a href="https://carbonfields.net" target="_blank" rel="noopener noreferrer">Carbon Fields</a>.
                I have a distaste for large plugin stacks and visual builder bloat. I host on AWS in Sydneeeey</p>
              
                <p className="subtitle is-size-4">
                  Recent work, hover for deets, click to visit, {" "}
                <a
                  href="https://www.hotyogadunedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tip data-for='hyd'
                  class="has-tip"
                >
                  Hot Yoga Dunedin
                </a>
                
                <ReactTooltip id='hyd' type="light" className="carl_tool">
                  <p className="subtitle is-size-5">
                    Wordpress with Beans and Carbon Fields. Custom plugin that cron updates timetable over Mindbody's prehistoric API
                    and creates a snazy interactive interface. Loads 10 times faster than the competitor's site we were using as a benchmark.
                    </p>
                </ReactTooltip>
                ,
                {" "}
                <a
                  href="http://thegoodportal.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tip data-for='tgp'
                  class="has-tip"
                >
                  The Good Portal
                </a>
                <ReactTooltip id='tgp' type="light" className="carl_tool">
                  <p className="subtitle is-size-5">
                  This is a MVP. React single page app built on top of node microservice. 
                  Data provided by charitiy services API. 
                  Extensive event tracking to determine what to develop next.</p>
                </ReactTooltip>
                ,{" "}
                <a
                  href="https://rize.fashion"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tip data-for="riz"
                  class="has-tip"
                >
                  Rize
                </a>
                <ReactTooltip id='riz' type="light" className="carl_tool">
                  <p className="subtitle is-size-5">
                    Marketplace built ontop of WooCommerce and Stripe Connect. 
                    Multiple bespoke extensions of core WC Vendors Pro functionality, including size guides, country dependent bundle and free shipping specifications and vendor initiated refunds. 
                  </p>
                </ReactTooltip>
                ,{" "}
                <a
                  href="https://travelinfluencers.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tip data-for="tra"
                  class="has-tip"
                >
                  Travel Influencers
                </a>
                <ReactTooltip id='tra' type="light" className="carl_tool">
                  <p className="subtitle is-size-5">
                    I am the technical Co-Founder. Designed and developed in Hugo using UIKit 3. Hosted on Netlify, allowing for build previews via pull requests and A/B testing from branches.
                  </p>
                </ReactTooltip>
                ,{" "}
                <a
                  href="https://scentrepublic.co.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tip data-for="sce"
                  class="has-tip"
                >
                  Scent Republic
                </a>
                <ReactTooltip id='sce' type="light" className="carl_tool">
                  <p className="subtitle is-size-5">
                    WooCommerce store using Chargebee for subscription management. Users can manage their queue of upcoming products. 
                    Migrated client from unscalable WooCommerce Subscription theme and plugin stack while preserving paying users sbuscriptions.
                  </p>
                </ReactTooltip>
                ,{" "}
                <a
                  href="https://www.southerncrossflutes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tip data-for="sou"
                  class="has-tip"
                >
                  Southern Cross Flutes
                </a>
                <ReactTooltip id='sou' type="light" className="carl_tool">
                  <p className="subtitle is-size-5">
                    WooCommerce multi FX store. I migrated a page builder based theme and plugin stack into Beans and Carbon Fields. Reducing resource count by 90%, 
                    while providing easier administration and avoiding double entry of data.
                  </p>
                </ReactTooltip>
                ,{" "}
                
                <a
                  href="https://likeabook.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tip data-for="lik"
                  class="has-tip"
                >
                  Likeabook
                </a>
                <ReactTooltip id='lik' type="light" className="carl_tool">
                  <p className="subtitle is-size-5">
                  I am the technical Co-Founder. SAAS based on a WP Multi site. Chargebee admin subscription management. Paying admins can create sub sites within the network, and invite users to their sites.
                  </p>
                </ReactTooltip>
                ,{" "}
                <a
                  href="https://allcor.co.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tip data-for="all"
                  class="has-tip"
                >
                  Allcor
                </a>
                <ReactTooltip id='all' type="light" className="carl_tool">
                  <p className="subtitle is-size-5">
                    GatsbyJS vanilla with Bulma hosted on Netlify. Multiple video headers, Gatsby Image lazy loading. 
                    Instagram feed stored statically, with each new post triggered a static site rebuild. This is the Future.
                  </p>
                </ReactTooltip>
                ,{" "}
                <a
                  href="https://ecotricity.co.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tip data-for="eco"
                  class="has-tip"
                >
                  Ecotricity
                </a>
                <ReactTooltip id='eco' type="light" className="carl_tool">
                  <p className="subtitle is-size-5">
                    Wordpress with Beans. Reduced a gargantuan plugin stack to less than 5, reduced resource count by 80%+
                    Replaced page builder logic with page template scoped Carbon Fields and UIKit frontend.
                  </p>
                </ReactTooltip>
                ,{" "}
                <a
                  href="https://generositycoffee.org.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tip data-for="gen"
                  class="has-tip"
                >
                  Generosity Coffee
                </a>
                <ReactTooltip id='gen' type="light" className="carl_tool">
                  <p className="subtitle is-size-5">
                    WooCommerce subscriptions store powered by Beans and Carbon Fields. Simple administration with dynamic theming possible on a per-page basis. 
                  </p>
                </ReactTooltip>
                ,{" "}
                <a
                  href="https://www.hempme.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tip data-for="hem"
                  class="has-tip"
                >
                  Hemp Me
                </a>
                <ReactTooltip id='hem' type="light" className="carl_tool">
                  <p className="subtitle is-size-5">
                    WooCommerce store powered by Beans and Carbon Fields. Simple administration of sophisticated page structures using modular repeatable blocks.
                  </p>
                </ReactTooltip>
                ,{" "}
                <a
                  href="https://ageingwellchallenge.co.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tip data-for="age"
                  class="has-tip"
                >
                  Ageing Well National Science Challenge
                </a>
                <ReactTooltip id='age' type="light" className="carl_tool">
                  <p className="subtitle is-size-5">
                    Wordpress with Beans and Carbon Fields, modular block control, associations between post types creating intra-site user flow. 
                    Admin controllable interactive graphic built with good ol' jQuery.
                  </p>
                </ReactTooltip>
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
