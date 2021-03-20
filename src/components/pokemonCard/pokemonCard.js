import {useState} from 'react';
import CN from 'classnames';

import Styles from './styles.module.css'
import BackCardSideImg from './img/card-back-side.jpg'

export default function PokemonCard(props) {

    const {onSetActive, name, id, img, values, type, isActive} = props;

    return (
        <div className={Styles.root}
             onClick={() => {
                 onSetActive(id)
             }}
        >
            <div className={CN(Styles.pokemonCard, {[Styles.active]: isActive})}>
                <div className={Styles.cardFront}>
                    <div className={CN(Styles.wrap, Styles.front)}>
                        <div className={CN(Styles.pokemon, type)}>
                            <div className={Styles.values}>
                                <div className={CN(Styles.count, Styles.top)}>{values.top}</div>
                                <div className={CN(Styles.count, Styles.right)}>{values.right}</div>
                                <div className={CN(Styles.count, Styles.bottom)}>{values.bottom}</div>
                                <div className={CN(Styles.count, Styles.left)}>{values.left}</div>
                            </div>
                            <div className={Styles.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            <div className={Styles.info}>
                                <span className={Styles.number}>{id}</span>
                                <h3 className={Styles.name}>{name}</h3>
                                <small className={type}>Type: <span>{type}</span></small>
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
