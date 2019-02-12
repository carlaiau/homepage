import React from "react";
import {
  FaAt,
  FaUser,
  FaCoffee,
  FaRegSmileWink,
  FaSmile,
  FaDollarSign
} from "react-icons/fa";

class Footer extends React.Component{

	render(){
		return(
  <section className="hero coffee is-fullheight" id="section-3">
    <div className="hero-body">
      <div className="container">
        <h1 className="is-size-1">Lets Get Coffee</h1>
        <hr />
        <div className="columns is-space-between is-desktop">
          <div className="column is-half-desktop">
            <p className="subtitle is-size-4">
              If you've read this far, we should catch up for a yarn. I'm
              physically based in Dunedin, New Zealand but available globally.
            </p>
            <p className="subtitle is-size-4">
              As you've already guessed, I'm very interested in static site
              generation, the JAMstack, or headless Wordpress and Woocommerce.
              If you want SOTA performance fill out your details and I'll be in
              touch as soon as possible.
            </p>
          </div>
          <div className="column is-one-third-desktop">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div class="field">
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input is-large"
                    type="email"
                    placeholder="Name"
                  />
                  <span class="icon is-large is-left">
                    <FaUser />
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input is-large"
                    type="email"
                    placeholder="Email"
                  />
                  <span class="icon is-large is-left">
                    <FaAt />
                  </span>
                </div>
              </div>
              <div class="field">
                <div className="control has-icons-left">
                  <div className="select is-large">
                    <select name="help-with" id="help-with" required>
                      <option value="" disabled selected>
                        Help With?
                      </option>
                      <option value="wordpress">WordPress</option>
                      <option value="woocommerce">WooCommerce</option>
                      <option value="gatsbyJs/Hugo">GatsbyJS / Hugo</option>
                      <option value="react">React</option>
                      <option value="random">Something else</option>
                    </select>
                  </div>
                  <span class="icon is-large is-left">
                    <FaRegSmileWink />
                  </span>
                </div>
              </div>
              <div class="field">
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
                  <span class="icon is-large is-left">
                    <FaDollarSign />
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea is-large has-fixed-size"
                    placeholder="Your wishlist"
                    rows="5"
                  />
                </div>
              </div>
              <div class="field">
                <div className="control has-icons-left">
                  <div className="select is-large">
                    <select required>
                      <option value="" disabled selected>
                        Preferred Coffee?
                      </option>
                      <option value="black">Black</option>
                      <option value="flat-white">Flat White</option>
                      <option value="latte">Latte</option>
                      <option value="mocha">Mocha</option>
                      <option value="lots of cream">
                        Lots of cream, lots of sugar
                      </option>
                    </select>
                  </div>
                  <span class="icon is-large is-left">
                    <FaCoffee />
                  </span>
                </div>
              </div>
              <p class="control">
                <a class="button is-primary is-large" type="submit">
                  Say hi! <FaSmile />
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
		)
	}
}

export default Footer;
