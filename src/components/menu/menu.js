import CN from 'classnames'
import Styles from './styles.module.css'

export default function Menu({active, children}) {
    return (
        <div className={CN(Styles.menuContainer, {[Styles.active]: active, [Styles.deactive]: !active})}>
            <div className={Styles.overlay}/>
            <div className={Styles.menuItems}>
                <ul>
                    {children}
                </ul>
            </div>
        </div>
    )
}
