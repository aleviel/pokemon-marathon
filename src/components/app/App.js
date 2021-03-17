import {useState} from 'react';
import HomePage from "../routes/homePage";
import GamePage from "../routes/gamePage";

export default function App() {
    const [page, setPage] = useState('app')

    const onChangePage = (pageName) => {
        setPage(prev =>
            prev === pageName ? prev : pageName)
    }

    switch (page) {
        case "app":
            return <HomePage
                onButtonClick={onChangePage}
            />
        case "game":
            return <GamePage
                onButtonClick={onChangePage}
            />
        default:
            return <HomePage
                onButtonClick={onChangePage}
            />
    }
}