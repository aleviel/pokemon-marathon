import {useHistory} from "react-router-dom";
import pokemonCards from "../../pokemons.json";
import PokemonCard from "../../pokemonCard";

export default function GamePage() {
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
                    pokemonCards.map((elem) => {
                        return <PokemonCard key={elem.id}
                                            name={elem.name}
                                            id={elem.id}
                                            img={elem.img}
                                            values={elem.values}
                                            type={elem.type}
                        />
                    })
                }
            </div>
        </>
    )
}