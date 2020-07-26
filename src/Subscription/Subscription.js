
import React from 'react';
import rss from '../images/RSS.svg'


const Subscription = () => {
    return (
        <React.Fragment>
            <div className="subcription">
                <div className="subcription-title">
                    <span>подпишитесь на рассылку</span>
                </div>
                <div className="subcription-input">
                            <label>Имя </label>
                            <input type="text" placeholder="Полин" />
                       
                            <input type="text" name="action" placeholder="example@mail.com" />
                 </div>           
                            <label>Заполните поля</label>
                            <textarea placeholder="Коментарии"/>
                        
                            <button class="button-primary">Подписаться</button> 
                            <div className="subcription-input-rss">
                                <img src={rss} />
                            </div>
                
            </div>
        </React.Fragment>
    );
}

export default Subscription;