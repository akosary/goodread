import React from "react";
import "../../assets/css/normalize.css";
import "../../assets/css/vendor.css";
import "../../assets/icomoon/icomoon.css";
import "../../assets/style.css";

export default function home() {
  return (
    <div>
      <title>Book Store</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="author" content />
      <meta name="keywords" content />
      <meta name="description" content />
      <link rel="stylesheet" type="text/css" href="css/normalize.css" />
      <link rel="stylesheet" type="text/css" href="icomoon/icomoon.css" />
      <link rel="stylesheet" type="text/css" href="css/vendor.css" />
      <link rel="stylesheet" type="text/css" href="style.css" />
      {/* script
    ================================================== */}
      <div id="header-wrap">
        <div className="top-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="social-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icon icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-youtube-play" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-behance-square" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*social-links*/}
              </div>
              <div className="col-md-6">
                <div className="right-element">
                  <a href="#" className="user-account for-buy">
                    <i className="icon icon-user" />
                    <span>Account</span>
                  </a>
                  <a href="#" className="cart for-buy">
                    <i className="icon icon-clipboard" />
                    <span>Cart:(0 $)</span>
                  </a>
                  <div className="action-menu">
                    <div className="search-bar">
                      <a
                        href="#"
                        className="search-button search-toggle"
                        data-selector="#header-wrap"
                      >
                        <i className="icon icon-search" />
                      </a>
                      <form role="search" method="get" className="search-box">
                        <input
                          className="search-field text search-input"
                          placeholder="Search"
                          type="search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                {/*top-right*/}
              </div>
            </div>
          </div>
        </div>
        {/*top-content*/}
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="main-logo">
                  <a href="index.html">
                    <img src="images/main-logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-10">
                <nav id="navbar">
                  <div className="main-menu stellarnav">
                    <ul className="menu-list">
                      <li className="menu-item active">
                        <a href="#home" data-effect="Home">
                          Home
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="#about"
                          className="nav-link"
                          data-effect="About"
                        >
                          About
                        </a>
                      </li>
                      <li className="menu-item has-sub">
                        <a
                          href="#pages"
                          className="nav-link"
                          data-effect="Pages"
                        >
                          Pages
                        </a>
                        <ul>
                          <li className="active">
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="styles.html">Styles</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="single-post.html">Post Single</a>
                          </li>
                          <li>
                            <a href="shop.html">Our Store</a>
                          </li>
                          <li>
                            <a href="single-product.html">Product Single</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="thank-you.html">Thank You</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a
                          href="#popular-books"
                          className="nav-link"
                          data-effect="Shop"
                        >
                          Shop
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="#latest-blog"
                          className="nav-link"
                          data-effect="Articles"
                        >
                          Articles
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="#contact"
                          className="nav-link"
                          data-effect="Contact"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                    <div className="hamburger">
                      <span className="bar" />
                      <span className="bar" />
                      <span className="bar" />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/*header-wrap*/}
      <section id="billboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <button className="prev slick-arrow">
                <i className="icon icon-arrow-left" />
              </button>
              <div className="main-slider pattern-overlay">
                <div className="slider-item">
                  <div className="banner-content">
                    <h2 className="banner-title">Life of the Wild</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna
                      commodo, lacus ut magna velit eleifend. Amet, quis urna, a
                      eu.
                    </p>
                    <div className="btn-wrap">
                      <a
                        href="#"
                        className="btn btn-outline-accent btn-accent-arrow"
                      >
                        Read More
                        <i className="icon icon-ns-arrow-right" />
                      </a>
                    </div>
                  </div>
                  {/*banner-content*/}
                  <img
                    src="images/main-banner1.jpg"
                    alt="banner"
                    className="banner-image"
                  />
                </div>
                {/*slider-item*/}
                <div className="slider-item">
                  <div className="banner-content">
                    <h2 className="banner-title">Birds gonna be Happy</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna
                      commodo, lacus ut magna velit eleifend. Amet, quis urna, a
                      eu.
                    </p>
                    <div className="btn-wrap">
                      <a
                        href="#"
                        className="btn btn-outline-accent btn-accent-arrow"
                      >
                        Read More
                        <i className="icon icon-ns-arrow-right" />
                      </a>
                    </div>
                  </div>
                  {/*banner-content*/}
                  <img
                    src="images/main-banner2.jpg"
                    alt="banner"
                    className="banner-image"
                  />
                </div>
                {/*slider-item*/}
              </div>
              {/*slider*/}
              <button className="next slick-arrow">
                <i className="icon icon-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="client-holder" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="inner-content">
              <div className="logo-wrap">
                <div className="grid">
                  <a href="#">
                    <img src="images/client-image1.png" alt="client" />
                  </a>
                  <a href="#">
                    <img src="images/client-image2.png" alt="client" />
                  </a>
                  <a href="#">
                    <img src="images/client-image3.png" alt="client" />
                  </a>
                  <a href="#">
                    <img src="images/client-image4.png" alt="client" />
                  </a>
                  <a href="#">
                    <img src="images/client-image5.png" alt="client" />
                  </a>
                </div>
              </div>
              {/*image-holder*/}
            </div>
          </div>
        </div>
      </section>
      <section id="featured-books">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Some quality items</span>
                </div>
                <h2 className="section-title">Featured Books</h2>
              </div>
              <div className="product-list" data-aos="fade-up">
                <div className="row">
                  <div className="col-md-3">
                    <figure className="product-style">
                      <img
                        src="images/product-item1.jpg"
                        alt="Books"
                        className="product-item"
                      />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        Add to Cart
                      </button>
                      <figcaption>
                        <h3>Simple way of piece life</h3>
                        <p>Armor Ramsey</p>
                        <div className="item-price">$ 40.00</div>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-3">
                    <figure className="product-style">
                      <img
                        src="images/product-item2.jpg"
                        alt="Books"
                        className="product-item"
                      />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        Add to Cart
                      </button>
                      <figcaption>
                        <h3>Great travel at desert</h3>
                        <p>Sanchit Howdy</p>
                        <div className="item-price">$ 38.00</div>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-3">
                    <figure className="product-style">
                      <img
                        src="images/product-item3.jpg"
                        alt="Books"
                        className="product-item"
                      />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        Add to Cart
                      </button>
                      <figcaption>
                        <h3>The lady beauty Scarlett</h3>
                        <p>Arthur Doyle</p>
                        <div className="item-price">$ 45.00</div>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-3">
                    <figure className="product-style">
                      <img
                        src="images/product-item4.jpg"
                        alt="Books"
                        className="product-item"
                      />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        Add to Cart
                      </button>
                      <figcaption>
                        <h3>Once upon a time</h3>
                        <p>Klien Marry</p>
                        <div className="item-price">$ 35.00</div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                {/*ft-books-slider*/}
              </div>
              {/*grid*/}
            </div>
            {/*inner-content*/}
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="btn-wrap align-right">
                <a href="#" className="btn-accent-arrow">
                  View all products <i className="icon icon-ns-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="best-selling" className="leaf-pattern-overlay">
        <div className="corner-pattern-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="row">
                <div className="col-md-6">
                  <figure className="products-thumb">
                    <img
                      src="images/single-image.jpg"
                      alt="book"
                      className="single-image"
                    />
                  </figure>
                </div>
                <div className="col-md-6">
                  <div className="product-entry">
                    <h2 className="section-title divider">Best Selling Book</h2>
                    <div className="products-content">
                      <div className="author-name">By Timbur Hood</div>
                      <h3 className="item-title">Birds gonna be happy</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eu feugiat amet, libero ipsum enim pharetra hac.
                      </p>
                      <div className="item-price">$ 45.00</div>
                      <div className="btn-wrap">
                        <a href="#" className="btn-accent-arrow">
                          shop it now <i className="icon icon-ns-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* / row */}
            </div>
          </div>
        </div>
      </section>
      <section id="popular-books" className="bookshelf">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Some quality items</span>
                </div>
                <h2 className="section-title">Popular Books</h2>
              </div>
              <ul className="tabs">
                <li data-tab-target="#all-genre" className="active tab">
                  All Genre
                </li>
                <li data-tab-target="#business" className="tab">
                  Business
                </li>
                <li data-tab-target="#technology" className="tab">
                  Technology
                </li>
                <li data-tab-target="#romantic" className="tab">
                  Romantic
                </li>
                <li data-tab-target="#adventure" className="tab">
                  Adventure
                </li>
                <li data-tab-target="#fictional" className="tab">
                  Fictional
                </li>
              </ul>
              <div className="tab-content">
                <div id="all-genre" data-tab-content className="active">
                  <div className="row">
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item1.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Portrait photography</h3>
                          <p>Adam Silber</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item2.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Once upon a time</h3>
                          <p>Klien Marry</p>
                          <div className="item-price">$ 35.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item3.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Tips of simple lifestyle</h3>
                          <p>Bratt Smith</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item4.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Just felt from outside</h3>
                          <p>Nicole Wilson</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item5.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Peaceful Enlightment</h3>
                          <p>Marmik Lama</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item6.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Great travel at desert</h3>
                          <p>Sanchit Howdy</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item7.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Life among the pirates</h3>
                          <p>Armor Ramsey</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item8.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Simple way of piece life</h3>
                          <p>Armor Ramsey</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
                <div id="business" data-tab-content>
                  <div className="row">
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item2.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Peaceful Enlightment</h3>
                          <p>Marmik Lama</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item4.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Great travel at desert</h3>
                          <p>Sanchit Howdy</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item6.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Life among the pirates</h3>
                          <p>Armor Ramsey</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item8.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Simple way of piece life</h3>
                          <p>Armor Ramsey</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
                <div id="technology" data-tab-content>
                  <div className="row">
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item1.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Peaceful Enlightment</h3>
                          <p>Marmik Lama</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item3.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Great travel at desert</h3>
                          <p>Sanchit Howdy</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item5.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Life among the pirates</h3>
                          <p>Armor Ramsey</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item7.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Simple way of piece life</h3>
                          <p>Armor Ramsey</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
                <div id="romantic" data-tab-content>
                  <div className="row">
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item1.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Peaceful Enlightment</h3>
                          <p>Marmik Lama</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item3.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Great travel at desert</h3>
                          <p>Sanchit Howdy</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item5.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Life among the pirates</h3>
                          <p>Armor Ramsey</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item7.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Simple way of piece life</h3>
                          <p>Armor Ramsey</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
                <div id="adventure" data-tab-content>
                  <div className="row">
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item5.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Life among the pirates</h3>
                          <p>Armor Ramsey</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item7.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Simple way of piece life</h3>
                          <p>Armor Ramsey</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
                <div id="fictional" data-tab-content>
                  <div className="row">
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item5.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Life among the pirates</h3>
                          <p>Armor Ramsey</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img
                          src="images/tab-item7.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                        <figcaption>
                          <h3>Simple way of piece life</h3>
                          <p>Armor Ramsey</p>
                          <div className="item-price">$ 40.00</div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*inner-tabs*/}
          </div>
        </div>
      </section>
      <section id="quotation" className="align-center">
        <div className="inner-content">
          <h2 className="section-title divider">Quote of the day</h2>
          <blockquote data-aos="fade-up">
            <q>
              “The more that you read, the more things you will know. The more
              that you learn, the more places you’ll go.”
            </q>
            <div className="author-name">Dr. Seuss</div>
          </blockquote>
        </div>
      </section>
      <section id="special-offer" className="bookshelf">
        <div className="section-header align-center">
          <div className="title">
            <span>Grab your opportunity</span>
          </div>
          <h2 className="section-title">Books with offer</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="inner-content">
              <div className="product-list" data-aos="fade-up">
                <div className="grid product-grid">
                  <figure className="product-style">
                    <img
                      src="images/product-item5.jpg"
                      alt="Books"
                      className="product-item"
                    />
                    <button
                      type="button"
                      className="add-to-cart"
                      data-product-tile="add-to-cart"
                    >
                      Add to Cart
                    </button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">
                        <span className="prev-price">$ 50.00</span>$ 40.00
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="product-style">
                    <img
                      src="images/product-item6.jpg"
                      alt="Books"
                      className="product-item"
                    />
                    <button
                      type="button"
                      className="add-to-cart"
                      data-product-tile="add-to-cart"
                    >
                      Add to Cart
                    </button>
                    <figcaption>
                      <h3>Great travel at desert</h3>
                      <p>Sanchit Howdy</p>
                      <div className="item-price">
                        <span className="prev-price">$ 30.00</span>$ 38.00
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="product-style">
                    <img
                      src="images/product-item7.jpg"
                      alt="Books"
                      className="product-item"
                    />
                    <button
                      type="button"
                      className="add-to-cart"
                      data-product-tile="add-to-cart"
                    >
                      Add to Cart
                    </button>
                    <figcaption>
                      <h3>The lady beauty Scarlett</h3>
                      <p>Arthur Doyle</p>
                      <div className="item-price">
                        <span className="prev-price">$ 35.00</span>$ 45.00
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="product-style">
                    <img
                      src="images/product-item8.jpg"
                      alt="Books"
                      className="product-item"
                    />
                    <button
                      type="button"
                      className="add-to-cart"
                      data-product-tile="add-to-cart"
                    >
                      Add to Cart
                    </button>
                    <figcaption>
                      <h3>Once upon a time</h3>
                      <p>Klien Marry</p>
                      <div className="item-price">
                        <span className="prev-price">$ 25.00</span>$ 35.00
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="product-style">
                    <img
                      src="images/product-item2.jpg"
                      alt="Books"
                      className="product-item"
                    />
                    <button
                      type="button"
                      className="add-to-cart"
                      data-product-tile="add-to-cart"
                    >
                      Add to Cart
                    </button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                {/*grid*/}
              </div>
            </div>
            {/*inner-content*/}
          </div>
        </div>
      </section>
      <section id="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-element">
                    <h2 className="section-title divider">
                      Subscribe to our newsletter
                    </h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="subscribe-content" data-aos="fade-up">
                    <p>
                      Sed eu feugiat amet, libero ipsum enim pharetra hac dolor
                      sit amet, consectetur. Elit adipiscing enim pharetra hac.
                    </p>
                    <form id="form">
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your email addresss here"
                      />
                      <button className="btn-subscribe">
                        <span>send</span>
                        <i className="icon icon-send" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="latest-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Read our articles</span>
                </div>
                <h2 className="section-title">Latest Articles</h2>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <article className="column" data-aos="fade-up">
                    <figure>
                      <a href="#" className="image-hvr-effect">
                        <img
                          src="images/post-img1.jpg"
                          alt="post"
                          className="post-image"
                        />
                      </a>
                    </figure>
                    <div className="post-item">
                      <div className="meta-date">Mar 30, 2021</div>
                      <h3>
                        <a href="#">
                          Reading books always makes the moments happy
                        </a>
                      </h3>
                      <div className="links-element">
                        <div className="categories">inspiration</div>
                        <div className="social-links">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="icon icon-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon icon-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon icon-behance-square" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*links-element*/}
                    </div>
                  </article>
                </div>
                <div className="col-md-4">
                  <article className="column" data-aos="fade-down">
                    <figure>
                      <a href="#" className="image-hvr-effect">
                        <img
                          src="images/post-img2.jpg"
                          alt="post"
                          className="post-image"
                        />
                      </a>
                    </figure>
                    <div className="post-item">
                      <div className="meta-date">Mar 29, 2021</div>
                      <h3>
                        <a href="#">
                          Reading books always makes the moments happy
                        </a>
                      </h3>
                      <div className="links-element">
                        <div className="categories">inspiration</div>
                        <div className="social-links">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="icon icon-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon icon-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon icon-behance-square" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*links-element*/}
                    </div>
                  </article>
                </div>
                <div className="col-md-4">
                  <article className="column" data-aos="fade-up">
                    <figure>
                      <a href="#" className="image-hvr-effect">
                        <img
                          src="images/post-img3.jpg"
                          alt="post"
                          className="post-image"
                        />
                      </a>
                    </figure>
                    <div className="post-item">
                      <div className="meta-date">Feb 27, 2021</div>
                      <h3>
                        <a href="#">
                          Reading books always makes the moments happy
                        </a>
                      </h3>
                      <div className="links-element">
                        <div className="categories">inspiration</div>
                        <div className="social-links">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="icon icon-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon icon-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon icon-behance-square" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*links-element*/}
                    </div>
                  </article>
                </div>
              </div>
              <div className="row">
                <div className="btn-wrap align-center">
                  <a
                    href="#"
                    className="btn btn-outline-accent btn-accent-arrow"
                    tabIndex={0}
                  >
                    Read All Articles
                    <i className="icon icon-ns-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="download-app" className="leaf-pattern-overlay">
        <div className="corner-pattern-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="row">
                <div className="col-md-5">
                  <figure>
                    <img
                      src="images/device.png"
                      alt="phone"
                      className="single-image"
                    />
                  </figure>
                </div>
                <div className="col-md-7">
                  <div className="app-info">
                    <h2 className="section-title divider">
                      Download our app now !
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sagittis sed ptibus liberolectus nonet psryroin. Amet sed
                      lorem posuere sit iaculis amet, ac urna. Adipiscing fames
                      semper erat ac in suspendisse iaculis.
                    </p>
                    <div className="google-app">
                      <img src="images/google-play.jpg" alt="google play" />
                      <img src="images/app-store.jpg" alt="app store" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-item">
                <div className="company-brand">
                  <img
                    src="images/main-logo.png"
                    alt="logo"
                    className="footer-logo"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sagittis sed ptibus liberolectus nonet psryroin. Amet sed
                    lorem posuere sit iaculis amet, ac urna. Adipiscing fames
                    semper erat ac in suspendisse iaculis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>About Us</h5>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a href="#">vision</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">articles </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">careers</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">service terms</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">donate</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>Discover</h5>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Books</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Authors</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Subjects</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Advanced Search</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>My account</h5>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a href="#">Sign In</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">View Cart</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">My Wishtlist</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Track My Order</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>Help</h5>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a href="#">Help center</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Report a problem</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Suggesting edits</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* / row */}
        </div>
      </footer>
      <div id="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      © 2022 All rights reserved. Free HTML Template by{" "}
                      <a
                        href="https://www.templatesjungle.com/"
                        target="_blank"
                      >
                        TemplatesJungle
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="social-links align-right">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="icon icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon icon-youtube-play" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon icon-behance-square" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*grid*/}
            </div>
            {/*footer-bottom-content*/}
          </div>
        </div>
      </div>
    </div>
  );
}

// import "../../assets/js/modernizr.js";
import "../../assets/js/jquery-1.11.0.min.js";
// import "../../assets/js/plugins.js";
// import "../../assets/js/script";
