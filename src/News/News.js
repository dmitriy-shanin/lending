
import React from 'react';
import img1 from '../images/img_1.jpg';
import img2 from '../images/img_2.jpg';
import img3 from '../images/img_3.jpg';

const News = () => {
    return (
        <React.Fragment>
            <div className="news">
                <div className="news-top">
                    <div className="news-top-left">
                        <p>Новости</p>
                    </div>
                    <div className="news-top-right">
                        <p>Все новости</p>
                    </div>
                </div>
                <div className="news-center">
                    <div className="news-center-one">
                        <img src={img1} />
                        <span>1</span>
                    </div> 
                    <div className="news-center-two">
                        <img src={img2} />
                        <span>2</span>
                    </div> 
                       
                </div>
                <div className="news-center-three">
                    <img src={img3} />
                    <span>3</span>
                </div> 
                <div className="compane-center-bootom">
                        <a href="/">Показать еще
                            
                        </a>
                </div> 
            </div>
        </React.Fragment>
    );
}

export default News;