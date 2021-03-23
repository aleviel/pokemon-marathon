import {useHistory} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import PokemonCard from "../../../../components/pokemonCard";

import {FireBaseContext} from '../../../../context/firebaseContext';

import Styles from './styles.module.css'

export default function StartPage() {
    const firebase = useContext(FireBaseContext);

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

                {/*<button onClick={() => {*/}
                {/*    addPokemon();*/}
                {/*}}>*/}
                {/*    AddNew*/}
                {/*</button>*/}
            </div>

            <div className='flex'>
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
