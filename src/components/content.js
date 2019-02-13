import React from "react";
import { FaRocket } from "react-icons/fa";
import { IconContext } from "react-icons";
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
                and naturally progressing to the wonderful world of modern
                Javascript. All of my WordPress projects are built with Beans
                and Carbon Fields. This modular combination provides fast
                iterative development with minimal code. Which results in a
                secure and maintainable site for content managers and future
                developers alike. I avoid relying on stacks of plugins, they are
                WordPress' achilles heel.
              </p>
              <p className="subtitle is-size-4">
                I'm excited about static site generators and the rise of the
                headless CMS. With tools like React, Hugo and GatsbyJS we can
                build the fastest websites in the world. I love clean code and
                high{" "}
                <a
                  href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fcarlaiau.com&tab=desktop"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  PageSpeed
                </a>{" "}
                scores. Speed matters. And you know it does, because you've
                ditched plenty of unresponsive sites. Your customers aren't any
                different from you.
              </p>
              <p className="subtitle is-size-4">
                My portfolio is a work in progress, but briefly:
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
                . Some recent freelance projects I've built are{" "}
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
                In 2018 I completed a DipGrad in Computer Science at
                Otago University, and am partway through my Masters.
              </p>
              <p className="subtitle is-size-4">
                Freelancing before my academic studies has given me a unique
                combination that most graduates (and freelancers) are lacking.
                Diverse project experience, a thorough understanding of COSC fundamentals and the confidence to execute given a wide calibre of specifications.
              </p>
              <p className="subtitle is-size-4">
                I'm currently working through fast.ai's practical deep learning
                courses. Blog posts and Python notebooks coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default Content;
