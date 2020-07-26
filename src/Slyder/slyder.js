import React from 'react';
import slide_1 from '../images/slide_1.jpg';
import slide_2 from '../images/slide_2.jpg';
import slide_3 from '../images/slide_3.jpg';


const Slyder = () => {

    return (
        <React.Fragment>
                    <div className="Slyder">
                        <div className="main__slyder">
                            <button className="left-button"></button>
                            <div className="block-left">
                            </div>
                            <div className="main_img">
                                <img src={slide_1} width="100%" height="600px" className="slyder" />
                            </div>
                            
                            <button className="right-button"></button>
                            
                            <div className="Slyder-animat">
                                <p>Анимация</p>
                            </div>
                            <div className="Slyder-title">
                                <h1>Подготовка спрайтов для анимации в Unity</h1>
                            </div>
                            <div className="Slyder-text">
                                <p>Спрайты должны немного отличаться друг от друга, чтобы было заметно движение.</p>
                            </div>
                        </div>
                    </div>
        </React.Fragment>           
            );
}

export default Slyder;