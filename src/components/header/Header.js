import { useState, useEffect } from 'react';

import logo from '../../resources/img/logo.png';
import headerbasket from '../../resources/img/header-basket.png';
import './header.scss';

const Header = () => {
    const [navActive, setNavActive] = useState(false);
    const navClasses = navActive ? 'header__nav active' : 'header__nav';
    const menuButtonClasses = navActive ? 'menu-button active' : 'menu-button';

    useEffect(() => {
        console.log(navActive)
    }, [navActive])

    return (
        <div className="header">
            <img src={logo} alt="Logo" />
            <div className={navClasses}>
                <p>FAQ</p>
                <p>Оплата и доставка</p>
                <p>Возврат</p>
                <p>Исследования</p>
                <p>Личный кабинет</p>
                <p>8 (800) 600-09-90</p>
            </div>
            <div className="header__bag">
                <img src={headerbasket} alt="bag icon" />
                <div className="header__bag-count">
                    <p>1</p>
                </div>
            </div>
            <label class="menu-button-container" onClick={() => setNavActive(!navActive)}>
                <div class={menuButtonClasses}></div>
            </label>
        </div>
    )
}

export default Header;