import React from 'react'
import { FaAt, FaUser, FaCoffee, FaRegSmileWink, FaRocket, FaRobot, FaSmile } from 'react-icons/fa'
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
                                I have been a freelance developer since 2012, starting with PHP, and more recently
                                upgrading to modern Javascript. All of my Wordpress builds are based on Beans and
                                CarbonFields. This modular combination results in a very fast, secure and maintainable
                                site. I avoid relying on plugins, unless they're created by a solid team and fill a
                                solid requirement.
                            </p>
                            <p className="subtitle is-size-4">
                                I love fast load times, clean code and optimising the end user experience. Recently I
                                have dug into the exploding world of static site generation and headless CMS's using
                                React , Hugo and GatsbyJS. I host on Netlify, Digital Ocean and AWS depending on the
                                build.
                            </p>
                            <p className="subtitle is-size-4">
                                I try as hard as possible to avoid tunnel vision, and am continually humbled by the
                                expertise of others. I ocassionally try to design, although I work better alongside
                                talented designers. Away from the terminal I love guzzling coffee, pulling deadlifts and
                                refreshing Elon's twitter feed. <FaRocket />
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
                            <h1 className=" is-size-1">Computer Science</h1>
                            <hr />
                            <p className="subtitle is-size-4">
                                Last year I completed a Graduate Diploma in Computer Science from Otago University, and
                                am currently pursuing my Masters in Applied Science.
                            </p>
                            <p className="subtitle is-size-4">
                                Freelancing before my academic studies has given me a unique combination that most
                                graduates (and freelancers) lack; diverse project experience, a rigirous understanding
                                of computer science fundamentals and the confidence to execute.
                            </p>
                            <p className="subtitle is-size-4">
                                I'm obsessed (albeit slightly concerned) with the disruption caused by artifical
                                intelligence and I am currently studying fast.ai's practical deep and machine learning
                                courses. <FaRobot />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hero coffee is-fullheight" id="section-3">
            <div className="hero-body">
                <div className="container">
                    <h1 className="is-size-1">Lets Get Coffee</h1>
                    <hr />
                    <div className="columns is-space-between is-vcentered is-desktop">
                        <div className="column is-half-desktop">
                            <p className="subtitle is-size-4">
                                If you've read this far, we should catch up for a yarn. I'm physically based in Dunedin,
                                New Zealand but available globally.
                            </p>
                            <p className="subtitle is-size-4">
                                I'm very interested in static generation projects or running Wordpress and WooCommerce
                                headless, with a React or Vue powered frontend.
                            </p>
                            <p className="subtitle is-size-4">
                                If any of the above appeals to you, please fill out your details and I'll be in touch as
                                soon as possible.
                            </p>
                        </div>
                        <div className="column is-one-third-desktop">
                            <form>
                                <div class="field">
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-large" type="email" placeholder="Name" />
                                        <span class="icon is-large is-left">
                                            <FaUser />
                                        </span>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-large" type="email" placeholder="Email" />
                                        <span class="icon is-large is-left">
                                            <FaAt />
                                        </span>
                                    </div>
                                </div>
                                <div class="field">
                                    <div className="control has-icons-left">
                                        <div className="select is-large">
                                            <select>
                                                <option>Help With?</option>
                                                <option>WordPress</option>
                                                <option>WooCommerce</option>
                                                <option>GatsbyJS / Hugo</option>
                                                <option>Full Stack Application</option>
                                                <option>React</option>
                                            </select>
                                        </div>
                                        <span class="icon is-large is-left">
                                            <FaRegSmileWink />
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
                                            <select>
                                                <option>Preferred Coffee?</option>
                                                <option>Short Black</option>
                                                <option>Long Black</option>
                                                <option>Flat White</option>
                                                <option>Latte</option>
                                                <option>Mocha</option>
                                                <option>Lots of cream, lots of sugar</option>
                                            </select>
                                        </div>
                                        <span class="icon is-large is-left">
                                            <FaCoffee />
                                        </span>
                                    </div>
                                </div>
                                <p class="control">
                                    <a class="button is-primary is-large">
                                        Say hi! <FaSmile />
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
export default Content
