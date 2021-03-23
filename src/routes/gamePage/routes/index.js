import {Route, Switch, useRouteMatch} from "react-router-dom";
import StartPage from "./startPage";
import BoardPage from "./boardPage";
import FinishPage from "./finishPage";
import {PokemonContext} from "../../../context/pokemonContex";


export default function GamePage() {
    const match = useRouteMatch();

    const selectPokemon = () => {
        console.log('select')
    }

    return (
        <PokemonContext.Provider value={{
            pokemon: [],
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
