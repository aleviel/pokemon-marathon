import CN from 'classnames';

import Styles from './styles.module.css'

export default function NavBar({onClickButton, active}) {
    return (
        // <nav id="navbar">
        <nav className={Styles.navbar}>
            <div className={Styles.navWrapper}>
                <p className={Styles.brand}>
                    LOGO
                </p>
                <a className={CN(Styles.menuButton, {[Styles.active]: active})}>
                    <span
                        onClick={() => {
                            onClickButton()
                        }}/>
                </a>
            </div>
        </nav>
    )
}