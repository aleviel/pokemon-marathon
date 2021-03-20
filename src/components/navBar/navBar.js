import CN from 'classnames';
import Styles from './styles.module.css'

export default function NavBar({onClickButton, active, bgActive}) {
    return (
        <nav className={CN(Styles.navbar, {[Styles.bgActive]: bgActive})}>
            <div className={Styles.navWrapper}>
                <p className={Styles.brand}>
                    LOGO
                </p>
                <p className={CN(Styles.menuButton, {[Styles.active]: active})}>
                    <span
                        onClick={() => {
                            onClickButton()
                        }}/>
                </p>
            </div>
        </nav>
    )
}
