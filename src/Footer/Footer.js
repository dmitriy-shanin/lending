
import React from 'react';
import facebook from '../images/facebook-letter-logo.svg';
import odnoklas from '../images/odnoklassniki.svg';
import instagram from '../images/instagram-logo.svg';


const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-logo">
                        <span>LOGOTYPE</span>
                    </div>
                    <div className="footer-top-center">
                        <div className="footer-top-center_left">
                            <p>г. Москва, метро Бауманская, ул. Бауманская, дом 44</p>
                        </div>
                        <div className="footer-top-center_menu">
                            <a href="/">О компании</a>
                            <a href="/">Партнёрская программа</a>
                            <a href="/">Реклама</a>
                            <a href="/">Пресс-центр</a>
                            <a href="/">Вакансии</a>
                            <a href="/">Помощь</a>
                            <a href="/">Правила</a>
                        </div>
                        
                    </div>
                    <div className="footer-top-bootom">
                        <div className="footer-top-bootom_number">
                            <span>+7 000 000 00 00</span>
                        </div>
                        <div className="footer-top-bootom_social">
                            <span>Мы в соц сетях</span>
                            <div className="social_icons">
                                <a href="/">
                                    <img src={facebook} />
                                </a>
                                <a href="/">
                                    <img src={odnoklas} />
                                </a>
                                <a href="/">
                                    <img src={instagram} />
                                </a>
                            </div>
                            
                        </div>
                        <div className="social_subscrib">
                                <form action="/">
                                    <label>Подписка на новости</label>
                                    <input type="email" placeholder="example@mail.com" />
                                    <button>Ok</button>
                                </form>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom_copy">
                        <p>© ООО «Глобус», 2016 — 2019</p>
                    </div>
                    <div className="footer-bottom_cook">
                        <a href="/">Политика конфиденциальности</a>
                        <a href="/">Cookies</a>
                    </div>
                    
                </div>
                
            </div>
        </React.Fragment>
    );
}

export default Footer;