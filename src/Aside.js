import React, { Component } from 'react';
import './Aside.css';

// Component
import { ArticleAside } from './Article'

const tileBlock = {
    tileBlock1: 'One',
    tileBlock2: 'Two',
    tileBlock3: 'Three',
    tileBlock4: 'Four',
    tileBlock5: 'Five',
};

const tileBlockList = [
    {
        tileBlock1: 'One',
        tileBlock2: 'Two',
        tileBlock3: 'Three',
        tileBlock4: 'Four',
        tileBlock5: 'Five',
    },
];

const displayTileBlock = tileBlockList.map((blog, idx) => {
    return (
        <ArticleAside key={idx} index={idx} tileBlock1={blog.tileBlock1} tileBlock2={blog.tileBlock2} tileBlock3={blog.tileBlock3} tileBlock4={blog.tileBlock4} tileBlock5={blog.tileBlock5} />
    )
});

class Aside extends Component {
    render() {
        return (
            <div>
                <section className="hero is-info">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Primary title
                            </h1>
                            <h2 className="subtitle">
                                Primary subtitle
                            </h2>
                        </div>
                    </div>
                </section>
                <div className="columns">

                    <aside className="column is-3 is-hidden-mobile">
                        <div className="panel">
                            <p className="panel-heading has-text-centered">Main Heading Goes Here</p>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-home"></i>
                                </span>
                                <span className="name">Dashboard</span>
                            </a>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-map-marker"></i>
                                </span>
                                <span className="name">Activity</span>
                            </a>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-th-list"></i>
                                </span>
                                <span className="name">Timeline</span>
                            </a>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-folder-o"></i>
                                </span>
                                <span className="name">Folders</span>
                            </a>
                            <hr />
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-comment-o"></i>
                                </span>
                                <span className="name">Comments</span>
                            </a>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-envelope-o"></i>
                                </span>
                                <span className="name">Mail</span>
                            </a>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-rss"></i>
                                </span>
                                <span className="name">RSS Feed</span>
                            </a>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-database"></i>
                                </span>
                                <span className="name">Data</span>
                            </a>
                        </div>
                    </aside>
                    <section className="column">
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-8">
                                <div className="tile">
                                    <div className="tile is-parent is-vertical">
                                        <article className="tile is-child notification is-primary">
                                            <p className="title">Vertical...</p>
                                            <p className="subtitle">Top tile</p>
                                        </article>
                                        <article className="tile is-child notification is-warning">
                                            <p className="title">...tiles</p>
                                            <p className="subtitle">Bottom tile</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child notification is-info">
                                            <p className="title">Middle tile</p>
                                            <p className="subtitle">With an image</p>
                                            <figure className="image is-4by3">
                                                <img src="https://bulma.io/images/placeholders/640x480.png" />
                                            </figure>
                                        </article>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child notification is-danger">
                                        <p className="title">Wide tile</p>
                                        <p className="subtitle">Aligned with the right tile</p>
                                        <div className="content">

                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-success">
                                    <div className="content">
                                        <p className="title">Tall tile</p>
                                        <p className="subtitle">With even more content</p>
                                        <div className="content">

                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                    {displayTileBlock}
                    <ArticleAside tileBlock1={tileBlock.tileBlock1} tileBlock2={tileBlock.tileBlock2} tileBlock3={tileBlock.tileBlock3} tileBlock4={tileBlock.tileBlock4} tileBlock5={tileBlock.tileBlock5} />

                </div>


                <footer className="footer">
                    <div className="container">
                        <div className="content has-text-centered">
                            <p>
                                <strong>Bulma</strong> by
                                <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
                                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Aside;