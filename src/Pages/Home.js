import React from 'react'
import Footer from '../Reusables/Footer'
import Header from '../Reusables/Header'


const Home = () => {
  return (
    <div>
      <Header name="home"/>
      <section className="slider_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail_box">
                <h1>
                  Electrical <br />
                  Service <br />
                  Providers
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
                </p>
                <a href="" className="">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 offset-lg-1">
              <div className="img_content">
                <div className="img_container">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="img-box">
                          <img src="images/slider-img.jpg" alt="" />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="img-box">
                          <img src="images/slider-img.jpg" alt="" />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="img-box">
                          <img src="images/slider-img.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="service_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Our Services
        </h2>
        <img src="images/plug.png" alt=""/>
      </div>

      <div class="service_container">
        <div class="box">
          <div class="img-box">
            <img src="images/s1.png" class="img1" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Equipment installation
            </h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
            </p>
          </div>
        </div>
        <div class="box active">
          <div class="img-box">
            <img src="images/s2.png" class="img1" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Windmill Energy
            </h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
            </p>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="images/s3.png" class="img1" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Equipment Maintenance
            </h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
            </p>
          </div>
        </div>
        <div class="box ">
          <div class="img-box">
            <img src="images/s4.png" class="img1" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Offshore Engineering
            </h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
            </p>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="images/s5.png" class="img1" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Electrical Wiring
            </h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
            </p>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <a href="">
          Read More
        </a>
      </div>
    </div>
  </section>
           
{/*About  */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <h2>About Us</h2>
                <img src="images/plug.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit
                </p>
                <a href="">Read More</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img_container">
                <div className="img-box b1">
                  <img src="images/about-img1.jpg" alt="" />
                </div>
                <div className="img-box b2">
                  <img src="images/about-img2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section class="blog_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Blog
        </h2>
        <img src="images/plug.png" alt=""/>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="box">
            <div class="img-box">
              <img src="images/blog1.jpg" alt=""/>
            </div>
            <div class="detail-box">
              <h5>
                Blog Title Goes Here
              </h5>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box">
            <div class="img-box">
              <img src="images/blog2.jpg" alt=""/>
            </div>
            import './App.css';    <div class="detail-box">
              <h5>
                Blog Title Goes Here
              </h5>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact_section layout_padding">
                <div class="container ">
                    <div class="heading_container">
                        <h2>
                            Contact Us
                        </h2>
                        <img src="images/plug.png" alt="" />
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <form action="">
                                <div>
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone Number" />
                                </div>
                                <div>
                                    <input type="text" class="message-box" placeholder="Message" />
                                </div>
                                <div class="d-flex ">
                                    <button>
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <div class="map_container">
                                <div class="map-responsive">
                                    <iframe
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                                        width="600"
                                        height="300"
                                        frameborder="0"
                                        style={{ border: 0, width: '100%', height: '100%' }}
                                        allowfullscreen
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

      <Footer/>

    </div>
  )
}

export default Home