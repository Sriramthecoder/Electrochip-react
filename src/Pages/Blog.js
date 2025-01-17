import React from 'react'
import Header from '../Reusables/Header'
import Footer from '../Reusables/Footer'

const Blog = () => {
  return (
    <div>
      <Header name="blog"/>
      
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
      </div>
    </div>
  </section>
  <Footer/>
    </div>
  )
}

export default Blog
