import {useState} from 'react';

import Styles from './styles.module.css'
import BackCardSideImg from './img/card-back-side.jpg'

export default function PokemonCard(props) {

    const [isActive, setActive] = useState(false)

    const onSetActive = () => {
        !isActive ? setActive(true) : setActive(false)
    }

    const {name, id, img, values, type} = props;

    return (
        <div className={Styles.root}
             onClick={() => {
                 onSetActive()
             }}
        >
            <div className={`${Styles.pokemonCard} ${isActive ? Styles.active : ''}`}>
                <div className={Styles.cardFront}>
                    <div className={`${Styles.wrap} ${Styles.front}`}>
                        <div className={`${Styles.pokemon}  ${type}`}>
                            <div className={Styles.values}>
                                <div className={`${Styles.count} ${Styles.top}`}>{values.top}</div>
                                <div className={`${Styles.count} ${Styles.right}`}>{values.right}</div>
                                <div className={`${Styles.count} ${Styles.bottom}`}>{values.bottom}</div>
                                <div className={`${Styles.count} ${Styles.left}`}>{values.left}</div>
                            </div>
                            <div className={Styles.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            <div className={Styles.info}>
                                <span className={Styles.number}>{id}</span>
                                <h3 className={Styles.name}>{name}</h3>
                                <small className={Styles.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Styles.cardBack}>
                    <div className={`${Styles.wrap} ${Styles.back}`}>
                        <img src={BackCardSideImg} alt="card_backed"/>
                    </div>
                </div>

            </div>
        </div>

    )
}