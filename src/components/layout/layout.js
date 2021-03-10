import Styles from './styles.module.css'

export default function Layout(props) {
    const {title, descr, colorBg='tomato', urlBg} = props;
    const styleBg = urlBg ? {backgroundImage: `url(${urlBg})`} : {background: colorBg}
    return (
        <section
            style={styleBg}
            className={Styles.root}
        >
            <div className={Styles.wrapper}>
                <article>
                    <div className={Styles.title}>
                        <h3>{title}</h3>
                        <span className={Styles.separator}></span>
                    </div>
                    <div className={Styles.desc + Styles.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}