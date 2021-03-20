import {useHistory} from "react-router-dom";
import {useState} from "react";
import PokemonCard from "../../pokemonCard";
import pokemonCards from "../../pokemons.json";

export default function GamePage() {
    const [pokemons, setPokemons] = useState([...pokemonCards]);

    const onSetActive = (id) => {
        setPokemons((prev) => prev.map(elem =>
            elem.id === id ? {...elem, isActive: !elem.isActive} : elem
        ))
    }
    const history = useHistory();
    return (
        <>
            <h1>This is Game Page</h1>
            <button
                onClick={() => {
                    history.push('/home')
                }}
            >
                GoHome
            </button>
            <div className='flex'>
                {
                    pokemons.map((elem) => {
                        return <PokemonCard key={elem.id}
                                            name={elem.name}
                                            id={elem.id}
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