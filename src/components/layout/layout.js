import Styles from './styles.module.css'

export default function Layout(props) {
    const {title, colorBg, urlBg, children} = props;
    // const styleBg = urlBg ? {backgroundImage: `url(${urlBg})`} : {background: colorBg}
    const styleBg = {}
    if (urlBg) {
        styleBg.backgroundImage = `url(${urlBg})`
    }
    if (colorBg) {
        styleBg.backgroundColor = colorBg
    }
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
                    <div className={`${Styles.desc} ${Styles.full}`}>
                        <div>
                            {children}
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}
