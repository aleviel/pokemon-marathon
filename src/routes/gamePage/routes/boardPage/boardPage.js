import {useContext} from 'react';
import PokemonCard from "../../../../components/pokemonCard";

import {PokemonContext} from "../../../../context/pokemonContex";

import Styles from './styles.module.css';

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext)

    return (
        <div className={Styles.root}>
            <div className={Styles.playerOne}>
                {
                    Object.values(pokemons).map(({name, id, img, values, type}) =>
                        <PokemonCard key={id}
                                     idKey={id}
                                     className={Styles.card}
                                     name={name}
                                     id={id}
                                     img={img}
                                     values={values}
                                     type={type}
                                     minimize
                                     isActive/>)
                }
            </div>
            <div className={Styles.board}>
                <div className={Styles.boardPlate}>1</div>
                <div className={Styles.boardPlate}>2</div>
                <div className={Styles.boardPlate}>3</div>
                <div className={Styles.boardPlate}>4</div>
                <div className={Styles.boardPlate}>5</div>
                <div className={Styles.boardPlate}>6</div>
                <div className={Styles.boardPlate}>7</div>
                <div className={Styles.boardPlate}>8</div>
                <div className={Styles.boardPlate}>9</div>
            </div>
        </div>
    )
        ;
};

export default BoardPage;
