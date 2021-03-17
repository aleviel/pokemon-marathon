import MenuHeader from "../../menuHeader";
import Header from "../../header";
import Layout from "../../layout";
import Footer from "../../footer";
import PokemonCard from "../../pokemonCard";

import './styles.css'
import Img from '../../images/bg3.jpg'
import Img2 from '../../images/bg2.jpg'
import pokemonCards from '../../pokemons.json'

function HomePage({onButtonClick}) {

    return (
        <>
            <MenuHeader
                onButtonClick={(page) => {
                    onButtonClick && onButtonClick(page)
                }}/>

            <Header
                title={'This is title'}
                descr={'This is Description!'}
            />

            <Layout
                title={'Rules'}
                urlBg={Img2}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red"
                    on a 3x3 grid. Each player has five cards in a hand and the aim is to capture the opponent's cards
                    by turning them into the player's own color of red or blue.
                </p>
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the
                    board) must be of the player's card color. To do this, the player must capture cards by placing a
                    card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch
                    will be compared. If the rank of the opponent's card is higher than the player's card, the player's
                    card will be captured and turned into the opponent's color. If the player's rank is higher, the
                    opponent's card will be captured and changed into the player's color instead.
                </p>
            </Layout>

            <Layout
                title={'Cards'}
                colorBg={'plum'}
            >
                <div className='flex'>
                    {
                        pokemonCards.map((elem) => {
                            return <PokemonCard key={elem.id}
                                                name={elem.name}
                                                id={elem.id}
                                                img={elem.img}
                                                values={elem.values}
                                                type={elem.type}
                            />
                        })
                    }
                </div>
            </Layout>

            <Layout
                title={'Layout3 title'}
                urlBg={Img}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red"
                    on a 3x3 grid. Each player has five cards in a hand and the aim is to capture the opponent's cards
                    by turning them into the player's own color of red or blue.
                </p>
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the
                    board) must be of the player's card color. To do this, the player must capture cards by placing a
                    card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch
                    will be compared. If the rank of the opponent's card is higher than the player's card, the player's
                    card will be captured and turned into the opponent's color. If the player's rank is higher, the
                    opponent's card will be captured and changed into the player's color instead.
                </p>
            </Layout>

            <Footer/>
        </>
    )
}

export default HomePage;
