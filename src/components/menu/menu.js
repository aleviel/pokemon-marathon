import CN from 'classnames'
import Styles from './styles.module.css'

export default function Menu({active, onButtonClick}) {
    return (
        <div className={CN(Styles.menuContainer, {[Styles.active]: active}, {[Styles.deactive]: !active})}>
            <div className={Styles.overlay}/>
            <div className={Styles.menuItems}>
                <ul>
                    <li>
                        <a
                            onClick={() => {
                                onButtonClick && onButtonClick('app')
                            }}
                        >
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => {
                                onButtonClick && onButtonClick('game')
                            }}
                        >
                            GAME
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => {
                                console.log('will coming soon')
                            }}
                        >
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => {
                                console.log('will coming soon')
                            }}
                        >
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
