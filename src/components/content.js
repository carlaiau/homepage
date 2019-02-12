import React from 'react'
import {FaRocket, FaRobot} from 'react-icons/fa'
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
                                expertise of others. Away from the terminal I love guzzling coffee, pulling deadlifts and
                                refreshing Elon's twitter feed. <FaRocket />
                            </p>
                            <p className="subtitle is-size-4">
                                Portfolio in redevelopment.
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
    </div>
)
export default Content
