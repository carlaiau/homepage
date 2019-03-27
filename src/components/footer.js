import React from "react";
import {
  FaAt,
  FaUser,
  FaCoffee,
  FaRegSmileWink,
  FaSmile,
  FaDollarSign,
  FaRocket
} from "react-icons/fa";
import { IconContext } from "react-icons";

class Footer extends React.Component {
  render() {
    return (
      <section className="hero coffee is-fullheight" id="section-4">
        <div className="hero-body">
          <div className="container">
            <h1 className="is-size-1">Lets get coffee</h1>
            <hr />
            <div className="columns is-space-between is-desktop">
              <div className="column is-half-desktop">
                <p className="subtitle is-size-4">
					        I'm from Dunedin, New Zealand, presently working and sweating in Canguu Bali. I happily work
                  with clients globally.
                </p>
                <p className="subtitle is-size-4">
                  I'm fizzed up about React, the  static site revolution and headless
                  WordPress. If you're after state of the art performance get in
                  touch.
                </p>
                <p className="subtitle is-size-4">
                  Away from my MacBook  I love drinking copious amounts of coffee, pulling
                  deadlifts and refreshing Elon's twitter feed.
                </p>
              </div>
              <div className="column is-one-third-desktop">
                <form
                  name="contact"
                  method="post"
                  action="/thanks"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="field">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-large"
                        type="text"
                        placeholder="Name"
                        name="Name"
                        required
                      />
                      <span className="icon is-large is-left">
                        <FaUser />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-large"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                      />
                      <span className="icon is-large is-left">
                        <FaAt />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left">
                      <div className="select is-large">
                        <select name="help-with" id="help-with" required>
                          <option value="" disabled selected>
                            Help With?
                          </option>
                          <option value="wordpress">WordPress</option>
                          <option value="gatsbyJs/Hugo">GatsbyJS / Hugo</option>
                          <option value="react">React</option>
                          <option value="random">Something else</option>
                        </select>
                      </div>
                      <span className="icon is-large is-left">
                        <FaRegSmileWink />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left">
                      <div className="select is-large">
                        <select name="budget" id="budget" required>
                          <option value="" disabled selected>
                            Budget
                          </option>
                          <option value="$1000">$1,000 or below</option>
                          <option value="$5000">$5,000</option>
                          <option value="$10000">$10,000</option>
                          <option value="$25,000+">$25,000 and above</option> 
                        </select>
                      </div>
                      <span className="icon is-large is-left">
                        <FaDollarSign />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <textarea
                        name="message"
                        className="textarea is-large has-fixed-size"
                        placeholder="Your wishlist"
                        rows="5"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left">
                      <div className="select is-large">
                        <select name="coffee" required>
                          <option value="" disabled selected>
                            Preferred Coffee?
                          </option>
                          <option value="black">Black</option>
                          <option value="white">White</option>
                          <option value="lots of cream">
                            Lots of cream, lots of sugar
                          </option>
                          <option value="decaf">
                            "We don't do decaf"
                          </option>
                        </select>
                      </div>
                      <span className="icon is-large is-left">
                        <FaCoffee />
                      </span>
                    </div>
                  </div>
                  <p className="control">
                    <button
                      className="button is-primary is-large"
                      type="submit"
                    >
                      Say hi
                      <IconContext.Provider
                        value={{ className: "custom-icon" }}
                      >
                        <FaSmile />
                      </IconContext.Provider>
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
