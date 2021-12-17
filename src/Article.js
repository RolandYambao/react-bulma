import React, { Component } from 'react';

class Article extends Component {

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

export {
    Article,
    ArticleAdmin,
    ArticleGhostBlog,
};