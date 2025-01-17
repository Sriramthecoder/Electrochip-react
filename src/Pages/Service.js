import React from 'react'
import Header from '../Reusables/Header'
import Footer from '../Reusables/Footer'

const Service = () => {
  return (
    <div>
      <Header name="service"/>
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
  <Footer/>
    </div>
  )
}

export default Service
