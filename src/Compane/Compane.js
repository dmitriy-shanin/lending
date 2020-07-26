
import React from 'react';
// import arrow from '../images/left-arrow.svg';

const Compane = () => {
    return (
        <React.Fragment>
            <div className="compane">
                <div className="compane-left">
                    <p>О компании</p>
                </div>
                <div className="compane-right">
                    <div className="compane-right-top">
                        <p>Что-то более продвинутое делается с помощью покадровой анимации — когда для разных состояний объекта (стоит, идет, в прыжке, атакует) создается несколько спрайтов (двумерное изображение), которые сменяют друг друга с определенным интервалом.</p>
                    </div>    
                    <div className="compane-right-bootom">
                        <a href="/">Подробнее 
                            {/* <img src={arrow} /> */}
                        </a>
                    </div> 
                </div>
            </div>
        </React.Fragment>
    );
}

export default Compane;