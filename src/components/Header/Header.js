import {useState, useMemo} from "react";
import "./header.scss";

//img
import Logo from "../../assets/img/logo.svg";
import Arr from "../../assets/img/header/arr.svg";

function Header () {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const classOpenMenu = useMemo(() => isOpenMenu ? 'open' : '', [isOpenMenu]);

    const onCloseMenu = () => setIsOpenMenu(false);

    return (
        <header className="header">
            <div className="wr">
                <div className="header-content">
                   <div className="header-logo">
                       <a href="#">
                           <img src={Logo} alt="#"/>
                       </a>
                   </div>
                    <div className="header-block">
                        <button type="button" className={`header-btn ${classOpenMenu}`} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                            {[1, 2, 3, 4].map((item) => <span key={item} />)}
                        </button>
                        <div className={`header-nav ${classOpenMenu}`}>
                            <ul>
                                <li>
                                    <a href="#">Activities</a>
                                </li>
                                <li>
                                    <a href="#Technology" onClick={onCloseMenu}>Technology</a>
                                </li>
                                <li>
                                    <a href="#R&D" onClick={onCloseMenu}>R&D</a>
                                </li>
                                <li>
                                    <a href="#Community" onClick={onCloseMenu}>Community</a>
                                </li>
                            </ul>
                            <button className="btn btn-gray">
                                <span>Career</span>
                                <img src={Arr} alt="#"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;