import {Route, Switch, useRouteMatch, Redirect, useLocation} from 'react-router-dom';
import CN from 'classnames';

import HomePage from '../routes/homePage';
import GamePage from '../routes/gamePage';
import ContactPage from '../routes/contatcPage';
import AboutPage from '../routes/aboutPage';
import MenuHeader from '../menuHeader';
import Footer from '../footer';
import NotFound from '../routes/notFound';

import Styles from './styles.module.css';

export default function App() {

    const match = useRouteMatch('/');
    const isHomePage = useLocation().pathname === '/home';

    return (
        <Switch>
            <Route path='/404' component={NotFound}/>
            <Route>
                <>
                    <MenuHeader bgActive={!(match.isExact || isHomePage)}/>
                    <div className={CN(Styles.wrap, {
                        [Styles.isHomePage]: (match.isExact || isHomePage)
                    })}>
                        <Switch>
                            <Route path='/' exact component={HomePage}/>
                            <Route path='/home' component={HomePage}/>
                            <Route path='/game' component={GamePage}/>
                            <Route path='/about' component={AboutPage}/>
                            <Route path='/contact' component={ContactPage}/>
                            <Route render={() => (
                                <Redirect push to='/404'/>
                            )}/>
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Route>
        </Switch>
    )
}
