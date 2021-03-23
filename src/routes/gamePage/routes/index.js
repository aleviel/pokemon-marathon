import {Route, Switch, useRouteMatch} from "react-router-dom";
import StartPage from "./startPage";
import BoardPage from "./boardPage";
import FinishPage from "./finishPage";


export default function GamePage() {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage}/>
            <Route path={`${match.path}/board`} component={BoardPage}/>
            <Route path={`${match.path}/finish`} component={FinishPage}/>
        </Switch>
    );
};
