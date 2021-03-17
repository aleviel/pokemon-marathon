import Menu from "../menu";
import NavBar from "../navBar";
import {useState} from "react";

export default function MenuHeader({onButtonClick}) {

    const menuItems = ['home', 'game', 'about', 'contact']
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
            >
                {menuItems.map(item => {
                    return (
                        <li>
                            <a onClick={() => {
                                onButtonClick && onButtonClick(item)
                            }}
                            >
                                {item.toUpperCase()}
                            </a>
                        </li>
                    )
                })}
            </Menu>
        </>
    )
}
