import React from 'react'
import Header from '../Reusables/Header'
import Footer from '../Reusables/Footer'

const Contact = () => {
    return (
        <div>
            <Header name="contact" />
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
            <Footer />
        </div>
    )
}

export default Contact
