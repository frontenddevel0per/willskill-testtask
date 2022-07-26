import ginger from '../../resources/img/ginger.png';
import nootris from '../../resources/img/nootris.png';
import virus from '../../resources/img/virus.png';

import './discount.scss';

const Discount = () => {
    return (
        <div className="discount">
            <h2>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА <br/><span className="orange">СО СКИДКОЙ -15% ПЕРВЫМ!</span></h2>
            <p className="discount-price"><span>750₽</span> 690₽</p>
            <div className="discount__benefits">
                <div className="discount__benefits-sideblock">
                    <img src={ginger} alt="ginger" />
                    <p>Содержит<br/><span className="orange">имбирь</span></p>
                </div>
                <div className="discount__benefits-mainblock">
                    <img src={nootris} alt="nootris" />
                    <p>+ Бесплатная доставка<br/><span className="orange">Специальная цена</span></p>
                </div>
                <div className="discount__benefits-sideblock">
                    <img src={virus} alt="virus" />
                    <p>Нейтрализует<br/><span className="orange">вирусы</span></p>
                </div>
            </div>
            <div className="discount__order">
                <button>Оформить заказ!</button>
            </div>
        </div>
    )
}

export default Discount;