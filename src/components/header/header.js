import {useHistory} from 'react-router-dom';
import Styles from './style.module.css'
import StylesBtn from './styleButton.module.css';


export default function Header(props) {
    const {title, descr} = props;
    const history = useHistory();
    return (
        <header className={Styles.root}>
            <div className={Styles.forest}></div>
            <div className={Styles.silhouette}></div>
            <div className={Styles.moon}></div>
            <div className={Styles.container}>
                {title && <h1>{title}</h1>}
                {descr && <p>{descr}</p>}
                <button
                    onClick={() => {
                        history.push('/game')
                    }}>Start game
                </button>
            </div>
        </header>
    )
}