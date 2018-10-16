import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7T9W-rOPBsjYxw5U018Vdtd1H3UrPtF5tMK6Ssr7LDSSWCGfsA" 
                        alt="Avatar"
                        className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>
                                HTML / CSS | Javascript | React | Angular | Python | PHP | Laravel
                            </p>
                            <div className="social-links">
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </a>

                                 <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true" />
                                </a>

                                 <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-free-code-camp" aria-hidden="true" />
                                </a>

                                 <a href="https://google.com" rel="noopener noreferrer" target="_blank">
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