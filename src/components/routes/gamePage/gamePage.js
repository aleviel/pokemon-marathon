import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import PokemonCard from '../../pokemonCard';
import database from '../../services/firebase';

export default function GamePage() {
    useEffect(() => {
        updateStateFromDB()
    }, [])

    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    const updateStateFromDB = () => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val())
        })
    }

    const updatePokemonInDB = (id, item) => {
        database.ref('pokemons/' + id).set({
            ...item
        }).then(() => {
            updateStateFromDB()
        });
    }

    const addPokemon = () => {
        const newKey = database.ref().child('pokemons').push().key;
        const newPokemon = Object.entries(pokemons)[Math.floor(Math.random() * 5)][1]
        newPokemon.isActive = false;
        setPokemons(prev => {
            return Object.assign({...prev}, {[newKey]: {...newPokemon}})
        })
        updatePokemonInDB(newKey, newPokemon)
    }

    const onSetActive = (id) => {
        setPokemons(prev => {
            return Object.entries(prev).reduce((result, currentElem) => {
                const pokemon = {...currentElem[1]}
                const pokemonKey = currentElem[0]
                if (id === pokemon.id || id === pokemonKey) {
                    pokemon.isActive = !pokemon.isActive
                }
                result[pokemonKey] = pokemon;
                updatePokemonInDB(pokemonKey, pokemon);
                return result;
            }, {})
        })
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
                    GoHome
                </button>

                <button onClick={() => {
                    addPokemon();
                }}>
                    AddNew
                </button>
            </div>

            <div className='flex'>
                {
                    Object.entries(pokemons).map(([key, elem]) => {
                        return <PokemonCard key={key}
                                            name={elem.name}
                                            id={key}
                                            img={elem.img}
                                            values={elem.values}
                                            type={elem.type}
                                            isActive={elem.isActive}
                                            onSetActive={onSetActive}
                        />
                    })
                }
            </div>
        </>
    )
}
