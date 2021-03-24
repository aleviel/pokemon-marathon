import {Route, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import {useState} from 'react';

import StartPage from './startPage';
import BoardPage from './boardPage';
import FinishPage from './finishPage';

import {PokemonContext} from '../../../context/pokemonContex';


export default function GamePage() {
    const match = useRouteMatch();
    const [selectedPokemons, setSelectedPokemons] = useState({});

    const selectPokemon = (id, pokemon) => {
        setSelectedPokemons(prev => {
            if (prev[id]) {
                const copyState = {...prev};
                delete copyState[id];
                return copyState;
            }
            return {
                ...prev, [id]: pokemon
            }
        })
    }

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            onSelectedPokemon: selectPokemon
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage}/>
                <Route path={`${match.path}/board`} component={BoardPage}/>
                <Route path={`${match.path}/finish`} component={FinishPage}/>
            </Switch>
        </PokemonContext.Provider>
    );
};
