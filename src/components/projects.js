import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <br></br>
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://magsmagsmags.github.io/cosmos/assets/images/password_mockup.png) center / cover' }} > </CardTitle>
                        <CardText>
                            <p>Password Generator</p>
                            A web application that allows a user to generate a random password. Users may select one or more of the following requirement parameters for the characters of their password: lowercase letters, uppercase letters, nnumbers, special characters. Users can then press a button to copy the randomly generated password to their clipboard for easy pasting! The application is responsive.
            </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/magsmagsmags/nalabear">GitHub</Button>
                            <Button colored href="https://magsmagsmags.github.io/nalabear/">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <br></br>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://magsmagsmags.github.io/cosmos/assets/images/cosmic_mockup.png) center / cover' }} > </CardTitle>
                        <CardText>
                            A web application from scratch that allows the user to select from a list of astrological zodiac signs and then display information to the user that is specific to that sign. To acheive this, we will utilize API calls to get Mercury retrograde information, display Spotify playlists, and disdplay a photo of the day from NASA.
            </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/magsmagsmags/CosmicAstrologizer">GitHub</Button>
                            <Button colored href="https://magsmagsmags.github.io/CosmicAstrologizer/">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <br></br>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://magsmagsmags.github.io/cosmos/assets/images/tracker.gif) center / cover' }} ></CardTitle>
                        <CardText>
                            <p>Employee Information Management System</p>
                            Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems. This application is a solution for managing a company's employees using node, inquirer, and MySQL.
            </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/magsmagsmags/employee_tracker">GitHub</Button>
                            <Button colored href="https://github.com/magsmagsmags/employee_tracker">Clone & run in terminal</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <div></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div></div>
            )
        }

    }



    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>  </Tab>
                    <Tab>  </Tab>
                    <Tab>  </Tab>
                    <Tab>  </Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;
