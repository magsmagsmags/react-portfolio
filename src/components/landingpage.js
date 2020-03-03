import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <h2>MAGS KIEFER</h2>
                        <img
                            src="./avatar1.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />

                        <div className="banner-text">

                            <h4>Technical Project Manager</h4>
                            <h4>Product Manager</h4>
                            <h4>Implementation Consultant</h4>
                            <h4>Full Stack Web Developer</h4>

                            <hr />

                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/sheakiefer/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/magsmagsmags" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Demo Site */}
                                <a href="https://magsmagsmags.github.io/CosmicAstrologizer/" rel="noopener noreferrer" target="_blank">
                                    <img
                                        src="./favicon.ico"
                                        alt="avatar"
                                    />
                                </a>


                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;