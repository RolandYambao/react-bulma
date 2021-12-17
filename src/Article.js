import React, { Component } from 'react';

class ArticleForum extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <article className="post" key={this.props.index}>
                <h4>{this.props.message}</h4>
                <div className="media">
                    <div className="media-left">
                        <p className="image is-32x32">
                            <img src="http://bulma.io/images/placeholders/128x128.png" alt="" />
                        </p>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <a href="#">{this.props.person}</a> replied 34 minutes ago &nbsp;
                                <span className="tag">Question</span>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <span className="has-text-grey-light">
                            <i className="fa fa-comments"></i>1</span>
                    </div>
                </div>
            </article>
        );
    }
}

class ArticleAdmin extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <tr key={this.props.index}>
                <td width="5%"><i className="fa fa-bell-o"></i></td>
                <td>{this.props.event}</td>
                <td className="level-right"><a className="button is-small is-primary" href="#">Action</a></td>
            </tr>
        );
    }
}

class ArticleGhostBlog extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="column is-4 post" key={this.props.index}>
                <article className="columns is-multiline">
                    <div className="column is-12 post-img ">
                        <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                    </div>
                    <div className="column is-12 featured-content va">
                        <div>
                            <h3 className="heading post-category">{this.props.category}</h3>
                            <h1 className="title post-title">{this.props.title}</h1>
                            <p className="post-excerpt">{this.props.content}</p>
                            <br />
                            <a href="#" className="button is-primary">Read More</a>
                        </div>

                    </div>
                </article>
            </div>
        );
    }
}

class ArticleAside extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="column" key={this.props.index}>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification is-primary">
                                    <p className="title">{this.props.tileBlock1}</p>
                                    <p className="subtitle">Top tile</p>
                                </article>
                                <article className="tile is-child notification is-warning">
                                    <p className="title">{this.props.tileBlock2}</p>
                                    <p className="subtitle">Bottom tile</p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-info">
                                    <p className="title">{this.props.tileBlock3}</p>
                                    <p className="subtitle">With an image</p>
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/640x480.png" />
                                    </figure>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-danger">
                                <p className="title">{this.props.tileBlock4}</p>
                                <p className="subtitle">Aligned with the right tile</p>
                                <div className="content">

                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-success">
                            <div className="content">
                                <p className="title">{this.props.tileBlock5}</p>
                                <p className="subtitle">With even more content</p>
                                <div className="content">

                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}

class ArticleCheatsheet extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="box" key={this.props.index}>
                    <h4 id="const" className="title is-3">{this.props.snippet1}</h4>
                    <article className="message is-primary">
                        <span className="icon has-text-primary">
                            <i className="fab fa-js"></i>
                        </span>
                        <div className="message-body">
                            Block-scoped. Cannot be re-assigned. Not immutable.
                        </div>
                    </article>
                    <pre><code className="language-javascript">const test = 'test';</code></pre>
                </div>
                <div className="box">
                    <h4 id="let" className="title is-3">{this.props.snippet2}</h4>
                    <article className="message is-primary">
                        <span className="icon has-text-primary">
                            <i className="fas fa-info-circle"></i>
                        </span>
                        <div className="message-body">
                            Block-scoped. Can be re-assigned.
                        </div>
                    </article>
                    <pre><code className="language-javascript">let i = 0;</code></pre>
                </div>
            </div>
        );
    }
}

export {
    ArticleForum,
    ArticleAdmin,
    ArticleGhostBlog,
    ArticleAside,
    ArticleCheatsheet,
};