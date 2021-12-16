import React, { Component } from 'react';
import './GhostBlog.css';


const blogPost = {
    category: 'Blog Post Category 1',
    title: 'Blog Post',
    content: 'This is Blog Post',
};

const blogPostList = [
    {
        category: 'Blog Post Category 2',
        title: 'Blog Post 2',
        content: 'This is Blog Post 2',
    },
    {
        category: 'Blog Post Category 3',
        title: 'Blog Post 3',
        content: 'This is Blog Post 3',
    },
    {
        category: 'Blog Post Category 4',
        title: 'Blog Post 4',
        content: 'This is Blog Post 4',
    },
    {
        category: 'Blog Post Category 5',
        title: 'Blog Post 5',
        content: 'This is Blog Post 5',
    },
    {
        category: 'Blog Post Category 6',
        title: 'Blog Post 6',
        content: 'This is Blog Post 6',
    },
    {
        category: 'Blog Post Category 7',
        title: 'Blog Post 7',
        content: 'This is Blog Post 7',
    },
];

const displayBlogPost = blogPostList.map((blog, idx) => {
    return (
        <div className="column is-4 post" key={idx}>
            <article className="columns is-multiline">
                <div className="column is-12 post-img ">
                    <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                </div>
                <div className="column is-12 featured-content va">
                    <div>
                        <h3 className="heading post-category">{blog.category}</h3>
                        <h1 className="title post-title">{blog.title}</h1>
                        <p className="post-excerpt">{blog.content}</p>
                        <br />
                        <a href="#" className="button is-primary">Read More</a>
                    </div>

                </div>
            </article>
        </div>
    );
});

class GhostBlog extends Component {
    render() {
        return (
            <div>
                <section className="hero is-medium">
                    <div className="hero-head">
                        <div className="container">
                            <nav className="navbar" role="navigation" aria-label="main navigation">

                                <div id="navbarBasicExample" className="navbar-menu">
                                    <div className="navbar-start">
                                        <a className="navbar-item is-active">
                                            Home
                                        </a>
                                        <a className="navbar-item">
                                            Blog Posts
                                        </a>
                                    </div>

                                    <div className="navbar-end">
                                        <div className="navbar-item">
                                            <a href="#">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fas fa-rss-square"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <img src="https://cdn.emk.dev/templates/bulma-logo-light.png" width="150" height="40" />
                            <h2 className="subtitle">
                                Ghost's Casper theme made with Bulma
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="blog-posts">
                    <div className="container" />
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="columns featured-post is-multiline">
                                <div className="column is-12 post">
                                    <article className="columns featured">
                                        <div className="column is-7 post-img ">
                                            <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                                        </div>
                                        <div className="column is-5 featured-content va">
                                            <div>
                                                <h3 className="heading post-category">Category Name</h3>
                                                <h1 className="title post-title">Blog Posts Template</h1>
                                                <p className="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                                                <br />
                                                <a href="#" className="button is-primary">Read More</a>
                                            </div>

                                        </div>
                                    </article>
                                </div>
                            </div>
                            <hr />
                            <div className="columns is-multiline">
                                <div className="column post is-6">
                                    <article className="columns is-multiline">
                                        <div className="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
                                        </div>
                                        <div className="column is-12 featured-content ">
                                            <h3 className="heading post-category">Category Name</h3>
                                            <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br />
                                            <a href="#" className="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                <div className="column post is-6">
                                    <article className="columns is-multiline">
                                        <div className="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
                                        </div>
                                        <div className="column is-12 featured-content ">
                                            <h3 className="heading post-category">Category Name</h3>
                                            <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br />
                                            <a href="#" className="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                <div className="column post is-4">
                                    <article className="columns is-multiline">
                                        <div className="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
                                        </div>
                                        <div className="column is-12 featured-content ">
                                            <h3 className="heading post-category">Category Name</h3>
                                            <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br />
                                            <a href="#" className="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                <div className="column post is-4">
                                    <article className="columns is-multiline">
                                        <div className="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
                                        </div>
                                        <div className="column is-12 featured-content ">
                                            <h3 className="heading post-category">Category Name</h3>
                                            <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br />
                                            <a href="#" className="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                <div className="column post is-4">
                                    <article className="columns is-multiline">
                                        <div className="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
                                        </div>
                                        <div className="column is-12 featured-content ">
                                            <h3 className="heading post-category">Category Name</h3>
                                            <h1 className="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p className="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br />
                                            <a href="#" className="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                {displayBlogPost}
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default GhostBlog;