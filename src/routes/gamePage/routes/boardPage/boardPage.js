import {useHistory} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';

import PlayerBoard from './component/playerBoard';
import PokemonCard from '../../../../components/pokemonCard';

import {PokemonContext} from '../../../../context/pokemonContex';

import Styles from './styles.module.css';

const counterWin = (board) => {

    let player1Count = 0;
    let player2Count = 0;

    board.forEach(item => {
        if (item.card.possession === 'red') {
            player2Count++;
        }
        if (item.card.possession === 'blue') {
            player1Count++;
        }
    })

    return [player1Count, player2Count];
}

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext)
    const history = useHistory();
    const [gameBoard, setBoard] = useState([]);
    const [player1, setPlayer1] = useState(() => {
            return Object.values(pokemons).map(item => ({
                ...item,
                possession: 'blue',
            }))
        }
    );
    const [player2, setPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(0);

    useEffect(() => {
        (async function fetchData() {
            const res = await fetch('https://reactmarathon-api.netlify.app/api/board');
            const board = await res.json();
            setBoard(board.data);
        })();

        (async function fetchData2() {
            const res2 = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
            const board2Request = await res2.json();
            setPlayer2(() => {
                return board2Request.data.map(item => ({
                    ...item,
                    possession: 'red'
                }))
            });
        })();
    }, [])

    if (Object.entries(pokemons).length === 0) {
        history.replace('/game')
    }

    const onClickOnBoard = async (position) => {
        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board: gameBoard,
            };

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();
            setBoard(request.data);

            if (choiceCard.player === 1) {
                setPlayer1(prev => prev.filter(item =>
                    item.id !== choiceCard.id
                ))
            }
            if (choiceCard.player === 2) {
                setPlayer2(prev => prev.filter(item =>
                    item.id !== choiceCard.id
                ))
            }
            setSteps(prev => prev + 1);
        }
    }
    useEffect(() => {

        if (steps === 9) {
            const [count1, count2] = counterWin(gameBoard);

            if (count1 > count2) {
                alert('U WIN!')
            } else if (count1 < count2) {
                alert('U LOSE!')
            } else {
                alert('DRAW!')
            }
        }

    }, [steps])

    return (
        <div className={Styles.root}>
            <div className={Styles.playerOne}>
                {
                    <PlayerBoard
                        player={1}
                        onClickCard={(card) => {
                            setChoiceCard(card)
                        }}
                        cards={player1}
                    />
                }
            </div>
            <div className={Styles.playerTwo}>
                {
                    <PlayerBoard
                        player={2}
                        onClickCard={(card) => {
                            setChoiceCard(card)
                        }}
                        cards={player2}/>
                }
            </div>
            <div className={Styles.board}>
                {
                    gameBoard.map(item => (
                        <div key={item.position}
                             className={Styles.boardPlate}
                             onClick={() => {
                                 !item.card && onClickOnBoard(item.position)
                             }}
                        >
                            {
                                item.card && <PokemonCard {...item.card} minimize isActive/>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default BoardPage;
