import React from "react" 
import './Navbar.css'
import logo from '../Assets/logo-1.png'
import play from '../Assets/play.png'
import down from '../Assets/header-down-r.png'
import logo1 from '../Assets/Logo.png'
import servicedown1 from '../Assets/service-down-1.png'
import servicedown2 from '../Assets/service-down-2.png'
import servicedown3 from '../Assets/service-down-3.png'
import featuressection1 from '../Assets/features-section-1.png'
import featuressection2 from '../Assets/features-section-2.png'
import Testmonials from '../Assets/Testmonials.png'
import Testmonialsr from '../Assets/Testmonials-r.png'
import blogdownitem1 from '../Assets/blog-down-item-1.png'
import blogdownitem2 from '../Assets/blog-down-item-2.png'
import blogdownitem3 from '../Assets/blog-down-item-3.png'
import footeron1 from '../Assets/footer-on-1.png'
import Facebook from '../Assets/Facebook.png'
import Instagram from '../Assets/Instagram.png'
import Twitter from '../Assets/Twitter.png'
const Navbar = () => {
    return(
        <>
        <header>
            <div class="header">
                <div class="header-top">
                <div class="header-top-l">
                        <img src={logo} alt=""/>
                    </div>
                    <div class="header-top-in">
                        <ul>
                            <li>Home</li>
                            <li>Why us?</li>
                            <li>Freatures</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div class="header-top-r">
                        <button class="login-button">Login</button>
                        <button class="signup-button">Sign Up</button>
                    </div>  
                </div>
                <div class="header-down">
                    <div class="header-down-l">
                        <h5>AWARD WINNING COMPANY</h5>
                        <h1>We Are The Best Digital Markeing</h1>
                        <p>You need to get positive results when you spend hard earned revenue and time on any marketing effort.
                        Great returns on marketing and promotions. </p>
                        <div class="header-down-l-icon">
                            <button class="Get-Started">Get Started</button>
                            <button class="play"><img src={play}alt=""/></button>
                            
                            <button class="Watch-Video">Watch Video</button>
                        </div>
                    </div>
                    <div class="header-down-r">
                        <img src={down} alt=""/>
                    </div>
                </div>      
            </div>
        </header>  
        <section id="home">
            <div class="logo">
                <img src={logo1} alt=""/>
            </div>
            <div class="service">
                <div class="service-up">
                    <h5>WHAT WE DO</h5>
                    <h2>Grow Your Business  With Ringo</h2>
                    <p>tempus, lectus risus In' perdiel tellus, sed faucibus ipsum ipsurn nun neque. </p>
                </div>
                <div class="service-down">
                    <div class="service-down-item">
                        <img src={servicedown1} alt=""/>
                        <h4>Search Engine</h4>
                        <p>Twit are excet  Frond, rnatie boy 
                            grub it's tell gone to pot MI Mrs nut
                            butts horse play blow </p>
                    </div>

                    <div class="service-down-item">
                        <img src={servicedown2} alt=""/>
                        <h4>Email Marketing</h4>
                        <p>Twit are excet  Frond, rnatie boy 
                            grub it's tell gone to pot MI Mrs nut
                            butts horse play blow </p>
                    </div>

                    <div class="service-down-item">
                        <img src={servicedown3} alt=""/>
                        <h4>Media Marketing</h4>
                        <p>Twit are excet  Frond, rnatie boy 
                            grub it's tell gone to pot MI Mrs nut 
                            butts horse play blow </p>
                    </div>
                </div>
            </div>
            <div class="features-section-1">
                <div class="features-section-1-l">
                    <img src={featuressection1} alt="" />
                </div>
                <div class="features-section-1-r">
                    <h5>WHO WE ARE</h5>
                    <h2>Top #1 Marketing <br/> Agency in the World</h2>
                    <p>Nunc venenalis Iorem sed risus trlstque sent per. Duls porta, <br/>  rutruni tempus, lectus risus imDerdiet tellus, sed faucibus sum <br/> ipsum ncn neque. Curubilu r eleirend, erut ullamcorper porta. <br/> eras turpis. </p>
                    <button class="Get-In-Touch">Get In Touch</button>
                </div>
            </div>
            <div class="features-section-2">
                <div class="features-section-1-r">
                    <h5>OUR MISSION & GOAL</h5>
                    <h2>Realize Your Business <br/> Goals For Profit</h2>
                    <p>Nunc venenalis Iorem sed risus trlstque sent per. Duls porta, <br/>rutruni tempus, lectus risus imDerdiet tellus, sed faucibus sum <br/>ipsum ncn neque. Curubilu r eleirend, erut ullamcorper porta. eras turpis. </p>
                    <button class="Get-In-Touch">Get In Touch</button>
                </div>
                <div class="features-section-2-l">
                    <img src={featuressection2} alt=""/>
                </div>
            </div>
            <div class="Testmonials">
                <div class="Testmonials-l">
                    <img src={Testmonials} alt="" />
                </div>
                <div class="Testmonials-r">
                    <h5>TESTMONIALS</h5>
                    <h2>Client’s Fedback</h2>
                    <p>Why I say okl chap that is. sprffing aff his rut car blimey valmor gooxo blaka krcus up bobby shed a-50 William cock Richard. Bloke fanny around cheseci  </p>
                    <a><img src={Testmonialsr} alt="" />450+ <p>Client’s Feedback</p></a>
                    <button class="Get-In-Touch">Get In Touch</button>
                </div>
            </div>
            <div class="blog">
                <div class="blog-up">
                    <h2>Our Regular Updated  Blog Posts</h2>
                    <p>tempus, lectus risus In' perdiel tellus, sed faucibus ipsum ipsurn nun neque. </p>
                </div>
                <div class="blog-down">
                    <div class="blog-down-item">
                            <img src={blogdownitem1} alt="" />
                            <h2>SEO tips and tricks for new</h2>
                            <p>Curapitur eleifenc erat id ullarncorper porta, 
                                eras turpis tun pus just!), a porititar ju-to ode 
                                id oros. Proin lloborti* 
                                </p>
                    </div>

                    <div class="blog-down-item">
                        <img src={blogdownitem2} alt="" />
                        <h2>A Guide to Google SEO</h2>
                        <p>Curapitur eleifenc erat id ullarncorper porta,
                            eras turpis tun pus just!), a porititar ju-to ode
                            id oros. Proin lloborti* 
                            </p>
                    </div>

                    <div class="blog-down-item">
                        <img src={blogdownitem3} alt="" />
                        <h2>Best Practices SEO Content</h2>
                        <p>Curapitur eleifenc erat id ullarncorper porta, 
                            eras turpis tun pus just!), a porititar ju-to ode 
                            id oros. Proin lloborti* 
                            </p>
                    </div>

                </div>
            </div>
            <div class="Newsletter">
                <div class="Newsletter-in">
                    <div class="Newsletter-l">
                        <h2>Sign up to Our  Newsletter</h2>
                        <p>You need to get positive results when you 
                            spend hard earned revenue and time.
                        </p>
                    </div>
                    <div class="Newsletter-r">
                        <input type="email" placeholder="Email..." class="subscribe-input" />  
                        <button class="subscribe-button">Subscribe</button> 
                    </div>
                </div>
            </div>
        </section>  
        <footer>
        <div class="footer">
            <div class="footer-on">
                <div class="footer-on-1">
                    <img src={footeron1} alt="" />
                    <p>Nulla non otllo venicula, ultricles  lorem a, allquarn nes!. Etlam et  lorem lobortls, cony allis nunc. </p>
                    
                </div>
                <div class="footer-on-1">
                    <h5>Services</h5>
                    <p>Email Marketing Social <br/>
                        Media Marketing Search <br/>
                     Engine Optimization <br/>
                     Prnelnct Devnionmnni <br/>
                     Web Development </p>
                </div>
                <div class="footer-on-1">
                    <h5>Support</h5>
                    <p>Sizicik. Community <br/>
                        Support Documents <br/>
                        Help:le-Lk API Documents <br/>
                        5nvin,es Witus <br/>
                        Email Contort 
                         </p>
                </div>
                <div class="footer-on-1">
                    <h5>Contact Us</h5>
                    <p>suppariaringrozom <br/>
                        (41) 84?-5E2-451 <br/>
                        North Cry, 547 Link Road.  
                         </p>
                </div>
            </div>
            <div class="icon-logo">
                <img src={Facebook} alt="" />
                <img src={Twitter} alt=""/>
                <img src={Instagram} alt=""/>
            </div>
            <div class="footer-down">
                <p>All Right Reserved by Us! Copyright 2021</p>
            </div>
        </div>
    </footer>  
        </>
    );
};

export default Navbar