import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return (

            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>MAGS KIEFER</h2>
                        <img
                            src="./avatar1.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>My name is Mags Kiefer. I'm an experienced Project Manager, Product Manager, and a Full Stack Developer. In 2020 I earned a certificate in Full Stack Development from the University of Texas. I developed skills in JavaScript, jQuery, Node.js, React, MongoDB, and SQL. Prior to earning this certificate, I was the Chief of Staff for a SaaS company. I managed every step of the software development process, including contract negotiations, creating a Project Plan, technical project management, Agile development sprints, and presenting reports to project teams & stakeholders. I'm located in Austin, Texas and open to local and remote opportunities.</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Let's Connect</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '18px', fontFamily: 'Arial' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (413) 426-7104
              </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{ fontSize: '18px', fontFamily: 'Arial' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        sheakiefer@gmail.com
              </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '18px', fontFamily: 'Arial' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        https://www.linkedin.com/in/sheakiefer/
              </ListItemContent>
                                </ListItem>


                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div >
        )
    }
}

export default Contact;
