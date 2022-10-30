import "./hero.scss";

//img
import Steps from "../../assets/img/hero/Steps.png";
import Btn from "../../assets/img/hero/btn.svg";
import Scroll from "../../assets/img/hero/scroll.svg";

function Hero () {
    return (
        <div className="hero">
            <div className="wr">
                <div className="hero-content">
                    <div className="hero-left">
                        <div className="hero-title" data-aos="zoom-in">
                            crypto trading
                        </div>
                        <h1 data-aos="fade-down-right">Engineers Meet <span>Traders __</span></h1>
                        <div className="hero-text" data-aos="fade-left">
                            Advanced crypto algorithmic trading and efficient
                            cross-chain execution, at scale.
                        </div>
                    </div>
                    <div className="hero-right" data-aos="flip-right">
                        <img src={Steps} alt="#"/>
                    </div>
                </div>
                <div className="hero-button" data-aos="flip-down">
                    <button className="btn">
                        <span>Learn More</span>
                        <img src={Btn} alt="#"/>
                    </button>
                </div>
                <div className="hero-scroll">
                    <img src={Scroll} alt="#"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;