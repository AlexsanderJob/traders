import "./information.scss";
import {useRef, useState} from "react";

// const force = 40;
//
// const RotateBlock = ({children, ...props}) => {
//     const blockRef = useRef();
//     const [rotate, setRotate] = useState({
//         x: 0,
//         y: 0
//     });
//
//     const onMouseMove = (e) => {
//         const el = blockRef.current;
//         const halfWidth = el.offsetWidth / 2;
//         const halfHeight = el.offsetHeight / 2;
//         const offsetLeft = e.clientX;
//         const offsetTop = e.clientY;
//         let dx = 0;
//         let dy = 0;
//         if (offsetLeft > halfWidth) {
//             dx = dx - offsetLeft / force;
//         } else {
//             dx = dx + offsetLeft / force;
//         }
//         if (offsetTop > halfHeight) {
//             dy = dy - offsetTop / force;
//         } else {
//             dy = dy + offsetTop / force;
//         }
//         setRotate({x: dx, y: dy})
//     };
//
//     return (
//         <div
//             ref={blockRef}
//             onMouseMove={onMouseMove}
//             onMouseLeave={() => setRotate({x: 0, y: 0})}
//             style={{
//                 transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
//             }}
//             {...props}
//         >
//             {children}
//         </div>
//     );
// }

function Information() {
    return (
        <div className="information" id="Community">
            <div className="wr">
                <div className="information-container">
                    <div
                        className="information-trade"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <div className="information-name">
                            Spot & Margin
                        </div>
                        <h2>Trade <span>200+</span> pairs with up to 10x leverage</h2>
                        <a className="information-link" href="#">Learn more</a>
                    </div>
                    <div className="information-content">
                        <div className="information-block">
                            <div className="information-post" data-aos="flip-down">
                                <div className="information-name">
                                    Derivatives
                                </div>
                                <h3><span>40+</span> quarterly futures and contracts</h3>
                                <a className="information-link" href="#">Learn more</a>
                            </div>
                            <div className="information-post" data-aos="flip-down">
                                <div className="information-name">
                                    Trading Arena
                                </div>
                                <h3>Prize pools worth up to <span>USD 1,000,000</span></h3>
                                <a className="information-link" href="#">Learn more</a>
                            </div>
                        </div>
                        <div className="information-mobile"
                             data-aos="fade-up"
                             data-aos-anchor-placement="top-bottom"
                        >
                            <div className="information-post m-height">
                                <div className="information-name">
                                    mobile app
                                </div>
                                <h3>Trade anytime, <span>anywhere</span></h3>
                                <a className="information-link" href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;