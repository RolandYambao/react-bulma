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
        <div class="column is-4 post" key={idx}>
            <article class="columns is-multiline">
                <div class="column is-12 post-img ">
                    <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                </div>
                <div class="column is-12 featured-content va">
                    <div>
                        <h3 class="heading post-category">{blog.category}</h3>
                        <h1 class="title post-title">{blog.title}</h1>
                        <p class="post-excerpt">{blog.content}</p>
                        <br />
                        <a href="#" class="button is-primary">Read More</a>
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
                <section class="hero is-medium">
                    <div class="hero-head">
                        <div class="container">
                            <nav class="navbar" role="navigation" aria-label="main navigation">

                                <div id="navbarBasicExample" class="navbar-menu">
                                    <div class="navbar-start">
                                        <a class="navbar-item is-active">
                                            Home
                                        </a>
                                        <a class="navbar-item">
                                            Blog Posts
                                        </a>
                                    </div>

                                    <div class="navbar-end">
                                        <div class="navbar-item">
                                            <a href="#">
                                                <i class="fab fa-facebook"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fas fa-rss-square"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <img src="https://cdn.emk.dev/templates/bulma-logo-light.png" width="150" height="40" />
                            <h2 class="subtitle">
                                Ghost's Casper theme made with Bulma
                            </h2>
                        </div>
                    </div>
                </section>
                <section class="blog-posts">
                    <div class="container" />
                    <div class="columns">
                        <div class="column is-10 is-offset-1">
                            <div class="columns featured-post is-multiline">
                                <div class="column is-12 post">
                                    <article class="columns featured">
                                        <div class="column is-7 post-img ">
                                            <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                                        </div>
                                        <div class="column is-5 featured-content va">
                                            <div>
                                                <h3 class="heading post-category">Category Name</h3>
                                                <h1 class="title post-title">Blog Posts Template</h1>
                                                <p class="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                                                <br />
                                                <a href="#" class="button is-primary">Read More</a>
                                            </div>

                                        </div>
                                    </article>
                                </div>
                            </div>
                            <hr />
                            <div class="columns is-multiline">
                                <div class="column post is-6">
                                    <article class="columns is-multiline">
                                        <div class="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
                                        </div>
                                        <div class="column is-12 featured-content ">
                                            <h3 class="heading post-category">Category Name</h3>
                                            <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br />
                                            <a href="#" class="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                <div class="column post is-6">
                                    <article class="columns is-multiline">
                                        <div class="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
                                        </div>
                                        <div class="column is-12 featured-content ">
                                            <h3 class="heading post-category">Category Name</h3>
                                            <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br />
                                            <a href="#" class="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                <div class="column post is-4">
                                    <article class="columns is-multiline">
                                        <div class="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
                                        </div>
                                        <div class="column is-12 featured-content ">
                                            <h3 class="heading post-category">Category Name</h3>
                                            <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br />
                                            <a href="#" class="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                <div class="column post is-4">
                                    <article class="columns is-multiline">
                                        <div class="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
                                        </div>
                                        <div class="column is-12 featured-content ">
                                            <h3 class="heading post-category">Category Name</h3>
                                            <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br />
                                            <a href="#" class="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                <div class="column post is-4">
                                    <article class="columns is-multiline">
                                        <div class="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
                                        </div>
                                        <div class="column is-12 featured-content ">
                                            <h3 class="heading post-category">Category Name</h3>
                                            <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br />
                                            <a href="#" class="button is-primary">Read More</a>
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