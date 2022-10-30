import "./future.scss";

//img
import Img from "../../assets/img/future/img.svg";
import Arrow from "../../assets/img/future/arrow.svg";

function Future() {
    return (
        <div className="future" id="R&D">
            <div className="wr">
                <div className="future-content">
                    <div className="future-block">
                        <div className="future-block-one"
                             data-aos="fade-right"
                             data-aos-offset="300"
                             data-aos-easing="ease-in-sine"
                        >
                            <div className="future-column l-right">
                                Artificial Intelligence
                            </div>
                            <div className="future-column l-right">
                                Storage Networks
                            </div>
                            <div className="future-column l-right">
                                P2P Networks
                            </div>
                        </div>
                        <div className="future-block-two"
                             data-aos="fade-zoom-in"
                             data-aos-easing="ease-in-back"
                             data-aos-delay="300"
                             data-aos-offset="0"
                        >
                            <div className="future-block-two-block">
                                <div className="future-column">
                                    Public Data
                                </div>
                                <div className="future-column">
                                    Encrypted Private Data *
                                </div>
                            </div>
                        </div>
                        <div className="future-block-three"
                             data-aos="flip-left"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000"
                        >
                            <div className="future-block-three-content">
                                <div className="future-img">
                                    <img src={Img} alt="#"/>
                                </div>
                                <div className="future-text">
                                    Easy to use digital service and exclusive personal service for our active traders
                                </div>
                                <div className="future-block-three-column">
                                    <div className="future-column l-left">
                                        Indexing
                                    </div>
                                    <div className="future-column l-left">
                                        API
                                    </div>
                                </div>
                            </div>
                            <div className="future-array">
                                <div className="future-arrow a-bottom">
                                    <img src={Arrow} alt="#"/>
                                </div>
                                <div className="future-arrow">
                                    <img src={Arrow} alt="#"/>
                                </div>
                            </div>
                            <div className="future-title" data-aos="fade-down-left">
                                Consumers
                            </div>
                        </div>
                    </div>
                    <div className="future-description">
                        <h2 data-aos="fade-down-left">The future of Cryptocurrency trading <span>platform</span></h2>
                        <div className="future-paragraph" data-aos="fade-left">
                            Take advantage of time and sales, futures spread orders and depth trader — plus, trade directly from charts.
                        </div>
                        <a className="future-link"  data-aos="flip-left" href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Future;