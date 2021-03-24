import CN from 'classnames';

import Styles from './styles.module.css'

export default function PokemonCard(props) {

    const {minimize, className, onSetActive, name, id, img, values, type, isActive, idKey, isSelected} = props;

    return (
        <div
            onClick={() => {
                onSetActive(idKey)
            }}
            className={CN(className, Styles.pokemonCard, {[Styles.active]: isActive, [Styles.selected]: isSelected})}>
            <div className={Styles.cardFront}>
                <div className={CN(Styles.wrap, Styles.front)}>
                    <div className={CN(Styles.pokemon, Styles[type])}>
                        <div className={Styles.values}>
                            <div className={CN(Styles.count, Styles.top)}>{values.top}</div>
                            <div className={CN(Styles.count, Styles.right)}>{values.right}</div>
                            <div className={CN(Styles.count, Styles.bottom)}>{values.bottom}</div>
                            <div className={CN(Styles.count, Styles.left)}>{values.left}</div>
                        </div>
                        <div className={Styles.imgContainer}>
                            <img src={img} alt={name}/>
                        </div>
                        {!minimize && (<div className={Styles.info}>
                            <span className={Styles.number}>#{id}</span>
                            <h3 className={Styles.name}>
                                {name}
                            </h3>
                            <small className={Styles.type}>
                                Type: <span>{type}</span>
                            </small>
                        </div>)}
                    </div>
                </div>
            </div>

            <div className={Styles.cardBack}>
                <div className={CN(Styles.wrap, Styles.back)}/>
            </div>

        </div>

    )
}
