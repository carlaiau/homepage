import React from "react";
import Particles from "react-particles-js";
import { Link } from 'gatsby'
import "../components/style.scss";
const ThanksPage = () => (
    <div>
      <Particles
        className="backdrop"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 750
              }
            },
            line_linked: {
              enable: true,
              opacity: 0.02
            },
            move: {
              direction: "right",
              speed: 3
            },
            size: {
              value: 2
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.33
              }
            }
          },
          retina_detect: true
        }}
      />
      <section className="hero primary first is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="is-uppercase is-size-1">Thanks</h1>
            <hr />
            <p className="subtitle is-size-2">
              I will be in touch shortly.
            </p>
            <p className="subtitle is-size-2">
            Back <Link to='/'>Home</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
)

export default ThanksPage;