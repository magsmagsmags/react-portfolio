import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <h1> WELCOME</h1>
                        <h2>GLAD YOU'RE HERE</h2>
                        <img
                            src="./logo-mags-k-dark.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />

                        <div className="banner-text">

                            <h4>Technical Project Manager</h4>
                            <h4>Product Manager</h4>
                            <h4>Implementation Consultant</h4>
                            <h4>Full Stack Web Developer</h4>

                            <hr />

                            <h4>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</h4>

                            <div className="social-links">

                                {/* LinkedIn */}



                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;