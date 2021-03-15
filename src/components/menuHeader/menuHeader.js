import Menu from "../menu";
import NavBar from "../navBar";
import {useState} from "react";

export default function MenuHeader({onButtonClick}) {

    const [isActive, setActive] = useState(false)

    const onChangeActivity = () => {
        setActive(prev => !prev)
    }

    return (
        <>
            <NavBar
                onClickButton={onChangeActivity}
                active={isActive}
            />
            <Menu
                active={isActive}
                onButtonClick={(page) => {
                    onButtonClick && onButtonClick(page)
                }}
            />
        </>
    )
}