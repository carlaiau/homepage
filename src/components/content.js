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
              <h1 className="is-size-1">Obsessed Developer</h1>
              <hr />
              <p className="subtitle is-size-4">
                I have been a freelance developer since 2012, starting with PHP,
                and more recently upgrading to modern Javascript. All of my
                Wordpress projects are built with Beans and Carbon Fields. This
                modular combination provides fast iterative development with minimal code. Which results in a secure and
                maintainable site for content managers and future developers alike. I avoid relying on stacks of plugins, they are Wordpress's achilles heel.
              </p>
              <p className="subtitle is-size-4">
                I love fast load times, clean code and optimising the end user
                experience. For example, this site is 140KB, with less than a second time to interactive. 
                Recently I have dug into the exploding world of static site generators and headless CMS's using React, Hugo and
                GatsbyJS.
              </p>
              <p className="subtitle is-size-4">
                My portfolio is in development, but I am technical co-founder of <a href="https://likeabook.io" target="_blank" rel="noopener noreferrer" >Likeabook</a> and <a href="https://travelinfluencers.co" target="_blank" rel="noopener noreferrer" >Travel Influencers</a>. 
                Recent freelance work has been <a href="https://www.southerncrossflutes.com/" target="_blank" rel="noopener noreferrer" >Southern Cross Flutes</a>, <a href="https://ecotricity.co.nz/" target="_blank" rel="noopener noreferrer" >Ecotricity</a>, <a href="http://generositycoffee.org.nz/" target="_blank" rel="noopener noreferrer" >Generosity Coffee</a>, <a href="https://www.hempme.com.au/" target="_blank" rel="noopener noreferrer" >Hemp Me</a> and the <a href="https://ageingwellchallenge.co.nz"  target="_blank" rel="noopener noreferrer">Ageing Well Nation Science Challenge</a>.
                
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
              <h2 className="is-size-1">Computer Science</h2>
              <hr />
              <p className="subtitle is-size-4">
                In 2018 I completed a Graduate Diploma in Computer Science
                from Otago University, and am currently pursuing my Masters.
              </p>
              <p className="subtitle is-size-4">
                Freelancing before my academic studies has given me a unique
                combination that most graduates (and freelancers) may lack. Diverse
                project experience, a rigirous understanding of computer science
                fundamentals and the confidence to execute.
              </p>
              <p className="subtitle is-size-4">
                I'm obsessed with the disruption caused by artifical intelligence and I am currently working through
                fast.ai's practical deep learning courses. Blog posts coming soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default Content;
