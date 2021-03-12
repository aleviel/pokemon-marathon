import Styles from './style.module.css'

export default function Header(props) {
    const {title, descr} = props;
    return (
        <header className={Styles.root}>
            <div className={Styles.forest}></div>
            <div className={Styles.container}>
                {title && <h1>{title}</h1>}
                {descr && <p>{descr}</p>}
            </div>
        </header>
    )
}