import React, { Component } from 'react';
import './Landing.css';

// Component
import { ArticleLanding } from './Article'

const newIntro = {
    title: 'Title',
    subtitle: 'Subtitle',
};

const newIntroList = [
    {
        title: 'Title 1',
        subtitle: 'Subtitle 1',
    },
    {
        title: 'Title 2',
        subtitle: 'Subtitle 2',
    },
    {
        title: 'Title 3',
        subtitle: 'Subtitle 3',
    },
    {
        title: 'Title 4',
        subtitle: 'Subtitle 4',
    },
    {
        title: 'Title 5',
        subtitle: 'Subtitle 5',
    },
];

const displayIntroList = newIntroList.map((blog, idx) => {
    return (
        <ArticleLanding key={idx} index={idx} title={blog.title} subtitle={blog.subtitle} />
    );
});


class Landing extends Component {
    render() {
        return (
            <div>
                <section className="hero is-info is-fullheight">
                    <div className="hero-head">
                        <nav className="navbar">
                            <div className="container">
                                <div className="navbar-brand">
                                    <a className="navbar-item" href="../">
                                        <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
                                    </a>
                                    <span className="navbar-burger burger" data-target="navbarMenu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                                <div id="navbarMenu" className="navbar-menu">
                                    <div className="navbar-end">
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="#">
                                                <span className="icon">
                                                    <i className="fa fa-home"></i>
                                                </span>
                                                <span>Home</span>
                                            </a>
                                        </span>
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="#">
                                                <span className="icon">
                                                    <i className="fa fa-superpowers"></i>
                                                </span>
                                                <span>Examples</span>
                                            </a>
                                        </span>
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="#">
                                                <span className="icon">
                                                    <i className="fa fa-book"></i>
                                                </span>
                                                <span>Documentation</span>
                                            </a>
                                        </span>
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/landing.html">
                                                <span className="icon">
                                                    <i className="fa fa-github"></i>
                                                </span>
                                                <span>View Source</span>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="column is-6 is-offset-3">
                                <h1 className="title">
                                    Coming Soon
                                </h1>
                                <h2 className="subtitle">
                                    $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
                                </h2>
                                {displayIntroList}
                                <ArticleLanding title={newIntro.title} subtitle={newIntro.subtitle} />
                                <div className="box">
                                    <div className="field is-grouped">
                                        <p className="control is-expanded">
                                            <input className="input" type="text" placeholder="Enter your email" />
                                        </p>
                                        <p className="control">
                                            <a className="button is-info">
                                                Notify Me
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default Landing;