import React from 'react';
import burger from '../images/burger.svg';

import '../App.css';

const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="header_top">
                    <div className="header_top-left">
                        <a href="/">Режим работы</a>
                    </div>
                    <div className="header_top-right">
                        <a href="/">Правила посещения</a>
                    </div>
                    
                </div>
                <div className="header_footer">
                    <div className="header_footer-content">
                        <div className="header_footer-logo">
                        <a href="/">LOGOTYPE</a>
                        </div>
                        <div className="header_footer-menu">
                            <a href="/">Меню</a>
                            <a href="/">Меню</a>
                            <a href="/">Меню</a>
                            <a href="/">Меню</a>
                            <a href="/">Меню</a>
                            <a href="/">Меню</a>
                        </div>
                        <div className="header_footer-login">
                            <a href="/">Регистрация</a>
                            <a href="/">Вход</a>
                        </div>
                    </div>
                    
                </div>
                <div className="header_footer_mob">
                    <div className="header_footer-content_mob">
                        <div className="header_footer-logo_mob">
                        <a href="/">LOGOTYPE</a>
                        </div>
                        <div className="header_footer-menu_icon_mob">
                            <a href="/"><img src={burger} /></a>
                        </div>
                        {/* <div className="header_footer-menu_mob">
                            <a href="/">Меню</a>
                            <a href="/">Меню</a>
                            <a href="/">Меню</a>
                            <a href="/">Меню</a>
                            <a href="/">Меню</a>
                            <a href="/">Меню</a>
                        </div> */}
                       
                    </div>
                    
                </div>
            </div>

        </React.Fragment>    
    )
}

export default Header;