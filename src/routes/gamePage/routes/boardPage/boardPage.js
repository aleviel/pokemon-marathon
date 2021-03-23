import Styles from './styles.module.css';

const BoardPage = () => {
    return (
        <div className={Styles.root}>
            <div className={Styles.playerOne}>

            </div>
            <div className={Styles.board}>
                <div className={Styles.boardPlate}>1</div>
                <div className={Styles.boardPlate}>2</div>
                <div className={Styles.boardPlate}>3</div>
                <div className={Styles.boardPlate}>4</div>
                <div className={Styles.boardPlate}>5</div>
                <div className={Styles.boardPlate}>6</div>
                <div className={Styles.boardPlate}>7</div>
                <div className={Styles.boardPlate}>8</div>
                <div className={Styles.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;
