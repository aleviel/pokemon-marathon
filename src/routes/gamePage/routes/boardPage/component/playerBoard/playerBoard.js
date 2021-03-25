import {useState} from 'react';
import CN from 'classnames';

import PokemonCard from '../../../../../../components/pokemonCard';

import Styles from './styles.module.css';

export default function PlayerBoard({player, cards, onClickCard}) {
    const [selectedId, setIsSelected] = useState(null);
    return (
        <>
            {
                cards.map((item) =>
                    <div
                        className={CN(Styles.cardBoard, {
                            [Styles.selected]: selectedId === item.id
                        })}
                        onClick={() => {
                            setIsSelected(item.id)
                            onClickCard && onClickCard({player, ...item})
                        }
                        }>
                        <PokemonCard key={item.id}
                                     name={item.name}
                                     id={item.id}
                                     img={item.img}
                                     values={item.values}
                                     type={item.type}
                                     minimize
                                     isActive/>
                    </div>)
            }
        </>
    );
}
