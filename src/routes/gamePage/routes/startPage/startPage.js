import {useHistory} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import PokemonCard from "../../../../components/pokemonCard";

import {PokemonContext} from "../../../../context/pokemonContex";
import {FireBaseContext} from '../../../../context/firebaseContext';

import Styles from './styles.module.css'

export default function StartPage() {
    const firebase = useContext(FireBaseContext);
    const PokemonContex = useContext(PokemonContext);

    useEffect(() => {
        firebase.getPokemonSocket(
            (res) => {
                setPokemons(res);
            }
        )
        return () => {
            firebase.offPokemonSocket()
        }
    }, [])

    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    const onSetActive = (id) => {
        PokemonContex.onSelectedPokemon()
        setPokemons(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                selected: !prev[id].selected
            }
        }))
    }

    return (
        <>
            <div style={{
                'display': 'flex',
                'flexDirection': 'column',
                'alignItems': 'center'
            }}>
                <h1 style={{
                    'display': 'block',
                    'marginBottom': 10
                }}>
                    This is Game Page
                </h1>

                <button style={{'marginBottom': 10}}
                        onClick={() => {
                            history.push('/home')
                        }}>
                    Start Game
                </button>
            </div>

            <div className={Styles.flex}>
                {
                    Object.entries(pokemons).map(([key, elem]) => {
                        return <PokemonCard key={key}
                                            idKey={key}
                                            className={Styles.card}
                                            name={elem.name}
                                            id={elem.id}
                                            img={elem.img}
                                            values={elem.values}
                                            type={elem.type}
                                            isActive={true}
                                            isSelected={elem.selected}
                                            onSetActive={() => {
                                                onSetActive(key)
                                            }}
                        />
                    })
                }
            </div>
        </>
    )
}
