import promo from '../../resources/img/promo.png';
import './promo.scss';

const Promo = () => {
    return (
        <div className="promo">
            <div className="promo__text">
                <div className="promo__text-top">
                    <h1>Активируй иммунитет!</h1>
                    <p>
                        Всего пять секунд в день помогут укрепить иммунитет<br/> и повысить защитные силы организма
                    </p>
                </div>
                <div className="promo__text-bottom">
                    <h2>Nootris помогает</h2>
                    <p>
                        Вашему организму во время пандемии<br/>
                        и сезонных простуд
                    </p>
                </div>
            </div>
            <img src={promo} alt="promo img" />
        </div>
    )
}

export default Promo;