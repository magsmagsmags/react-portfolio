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
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>My name is Mags Kiefer. I'm an experienced Project Manager, Product Manager, a former Chief of Staff for a SaaS company, and a Full Stack Developer. Located in Austin, Texas and open to local and remote opportunities! I'd love to get in touch</p>

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
