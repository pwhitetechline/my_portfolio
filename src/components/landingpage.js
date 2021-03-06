import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { PropTypes } from 'react';

import PickOfMe from '../me.jpg';

class Landing extends Component {
 
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={ PickOfMe } 
                        alt="Avatar"
                        className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>
                                HTML / CSS | Javascript | React | Angular | Python | PHP | Laravel | Node
                            </p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/patrick-white-a8115419" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </a>

                                 <a href="https://github.com/pwhitetechline" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true" />
                                </a>

                                 <a href="https://www.freecodecamp.org/fcc7c7b4032" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-free-code-camp" aria-hidden="true" />
                                </a>

                                 <a href="https://youtube.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-youtube-square" aria-hidden="true" />
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