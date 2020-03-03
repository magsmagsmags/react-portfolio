import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="./avatar1.png"
                                alt="avatar"
                                style={{ height: '250px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Mags Kiefer</h2>
                        <h4 style={{ color: 'grey' }}>Project Manager and Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>My name is Mags Kiefer. I'm an experienced Project Manager, Product Manager, a former Chief of Staff for a SaaS company, and a Full Stack Developer. Located in Austin, Texas and open to local and remote opportunities!</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Location</h5>
                        <p>Austin, TX </p>
                        <h5>Phone</h5>
                        <p>(413) 426-7104</p>
                        <h5>Email</h5>
                        <p>sheakiefer@gmail.com</p>
                        <h5>Web</h5>
                        <p>https://www.linkedin.com/in/sheakiefer/</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2009}
                            endYear={2012}
                            schoolName="University of Central Florida"
                            schoolDescription="Bachelor of Science (B.S.), Psychology"
                        />

                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName="UT Austin Coding Bootcamp"
                            schoolDescription="Certification in skills and competencies required to be a Full Stack Developer"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2016}
                            endYear={2017}
                            jobName="Chief of Staff; Project Manager"
                            jobDescription="NectarOM || A SaaS company in Dallas, Texas"
                        />

                        <Experience
                            startYear={2015}
                            endYear={2016}
                            jobName="Client Services and Sales Associate"
                            jobDescription="Blue Star Payment Solutions || A Payment Processing Company that launched a web and mobile app for a nonprofit donations."
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={50}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={50}
                        />
                        <Skills
                            skill="MongoDB"
                            progress={80}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
