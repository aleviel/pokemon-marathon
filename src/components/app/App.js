import {Route, Switch, useRouteMatch, Redirect} from "react-router-dom";
import HomePage from "../routes/homePage";
import GamePage from "../routes/gamePage";
import ContactPage from "../routes/contatcPage";
import AboutPage from "../routes/aboutPage";
import MenuHeader from "../menuHeader";
import Footer from "../footer";
import CN from 'classnames';
import NotFound from "../routes/notFound";
import Styles from './styles.module.css';

export default function App() {
    const match = useRouteMatch('/');
    const matchHome = useRouteMatch('/home');

    return (
        <Switch>
            <Route path='/404' component={NotFound}/>
            <Route>
                <>
                    <MenuHeader bgActive={!(match.isExact || matchHome && matchHome.isExact)}/>
                    <div className={CN(Styles.wrap, {
                        [Styles.isHomePage]: !!(match.isExact || matchHome && matchHome.isExact)
                    })}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/home" component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route render={() => (
                                <Redirect push to="/404"/>
                            )}/>
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Route>
        </Switch>
    )
}