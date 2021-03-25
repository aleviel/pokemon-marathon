import {useHistory} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';

import PlayerBoard from './component/playerBoard';
import PokemonCard from '../../../../components/pokemonCard';

import {PokemonContext} from '../../../../context/pokemonContex';

import Styles from './styles.module.css';

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

    useEffect(() => {
        {
            (async function fetchData() {
                const res = await fetch('https://reactmarathon-api.netlify.app/api/board');
                const board = await res.json();
                setBoard(board.data);
            })();
        }

        {
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
        }
    }, [])

    //
    // if (Object.entries(pokemons).length === 0) {
    //     history.replace('/game')
    // }

    async function onClickOnBoard(position) {
        console.log(position);
        console.log('card', choiceCard)
        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                gameBoard,
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
        }

    }

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
                                // item.card && <PokemonCard {...item} minimize/>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default BoardPage;
