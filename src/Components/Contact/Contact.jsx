import React from 'react';

const Contact = () => {
    return (
        <div>
            <section class="agenko-contact pt-130 pb-80">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            
                            <div class="contact-info-wrapper mb-50 pf_fadeup">
                                <div class="shape"><span><img src="/assets/images/pages/shape/world.png" alt="map" /></span></div>
                                <ul>
                                    <li>
                                        <div class="phone"><a href="tel:+1(555)123-4567">+1 (555) 123-4567</a></div>
                                    </li>
                                    <li>
                                        
                                        <div class="agenko-info-box">
                                            <div class="content">
                                                <h3>Address</h3>
                                                <p>6801 Hollywood Blvd, Los Angeles, 
                                                    CA 90028</p>
                                              
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        
                                        <div class="agenko-info-box">
                                            <div class="content">
                                                <h3>Email</h3>
                                                <p><a href="mailto:Info@agenko45.com">Info@peak_peark.Com</a></p>
                                             
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        
                                        <div class="agenko-info-box">
                                            <div class="content">
                                                <h3>Follow</h3>
                                                <div class="social-link">
                                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-7">

                      

                            
                            <div class="agenko-content-box mb-50 pf_fadeup">
                                <div class="section-title mb-20">
                                    <span class="sub-title">Get In Touch</span>
                                    <h2>      Get started and grow your business now.</h2>
                                </div>
                                <p class="mb-20">Start today to unlock opportunities and drive your business toward success.</p>
                                <form class="agenko-contact-form style-one" id="contact-form" action="contact.php" method="POST">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form_control" placeholder="Name" name="name" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form_control" placeholder="Email" name="email" required />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form_control" placeholder="Subject" name="subject" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <textarea class="form_control" rows="5" placeholder="Message" name="message"></textarea>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <button class="theme-btn">Send Message</button>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-message"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="agenko-map">
                
                <div class="map-box" data-aos="fade-up" data-aos-duration="1300">
                    <iframe src="https://maps.google.com/maps?q=new%20york&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                </div>
            </section>            
        </div>
    );
};

export default Contact;