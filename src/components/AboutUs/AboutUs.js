import "./aboutUs.scss";

//img
import BlueArray from "../../assets/img/aboutUs/blueArr.svg";
import RedArray from "../../assets/img/aboutUs/redArr.svg";

function AboutUs() {
    return (
        <div className="aboutUs" id="Technology">
            <div className="wr">
                <div className="aboutUs-item" data-aos="zoom-out">
                    about Us
                </div>
                <h2 data-aos="zoom-out-up">Global technologies</h2>
                <div className="aboutUs-content">
                    <div className="aboutUs-left">
                        <div className="aboutUs-graph"
                             data-aos="fade-up"
                             data-aos-anchor-placement="top-bottom"
                        >
                            <div className="aboutUs-top">
                                <div className="aboutUs-color blueDark"
                                     data-aos="fade-right"
                                     data-aos-offset="300"
                                     data-aos-easing="ease-in-sine"
                                />
                                <div className="aboutUs-color blue"
                                     data-aos="fade-right"
                                     data-aos-offset="300"
                                     data-aos-easing="ease-in-sine"
                                />
                                <div className="aboutUs-color blueLight"
                                     data-aos="fade-right"
                                     data-aos-offset="300"
                                     data-aos-easing="ease-in-sine"
                                />
                            </div>
                            <div className="aboutUs-middle">
                                <div className="aboutUs-color greenLight"
                                     data-aos="fade-right"
                                     data-aos-offset="300"
                                     data-aos-easing="ease-in-sine"
                                />
                                <div className="aboutUs-color green"
                                     data-aos="fade-right"
                                     data-aos-offset="300"
                                     data-aos-easing="ease-in-sine"
                                />
                                <div className="aboutUs-color greenDark"
                                     data-aos="fade-right"
                                     data-aos-offset="300"
                                     data-aos-easing="ease-in-sine"
                                />
                            </div>
                        </div>
                        <div className="aboutUs-bottom">
                            <div className="aboutUs-number"
                                 data-aos="fade-right"
                                 data-aos-offset="300"
                                 data-aos-easing="ease-in-sine"
                            >10</div>
                            <div className="aboutUs-number n-line"
                                 data-aos="fade-right"
                                 data-aos-offset="300"
                                 data-aos-easing="ease-in-sine"
                            >20</div>
                            <div className="aboutUs-number n-line"
                                 data-aos="fade-right"
                                 data-aos-offset="300"
                                 data-aos-easing="ease-in-sine"
                            >30</div>
                            <div className="aboutUs-number n-line"
                                 data-aos="fade-right"
                                 data-aos-offset="300"
                                 data-aos-easing="ease-in-sine"
                            >40</div>
                        </div>
                    </div>
                    <div className="aboutUs-right">
                        <div className="aboutUs-title" data-aos="zoom-out">
                            Level 1
                        </div>
                        <div className="aboutUs-information">
                            <div className="aboutUs-step" data-aos="zoom-out-left">
                                <div className="aboutUs-img">
                                    <img src={BlueArray} alt="#"/>
                                </div>
                                <div className="aboutUs-text">
                                    Deploy a multi-legged futures strategy by simultaneously placing orders to buy and sell from the same order ticket.
                                </div>
                            </div>
                            <div className="aboutUs-step" data-aos="zoom-out-left">
                                <div className="aboutUs-img">
                                    <img src={RedArray} alt="#"/>
                                </div>
                                <div className="aboutUs-text">
                                    Place and manage orders based on the Level 2 order book, which provides a live display of all bids and offers waiting to be executed.
                                </div>
                            </div>
                        </div>
                        <button data-aos="zoom-out">Start Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;