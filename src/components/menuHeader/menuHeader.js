import Menu from "../menu";
import NavBar from "../navBar";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function MenuHeader({bgActive}) {

    const menuItems = [
        {title: 'home', pathTo: '/home'},
        {title: 'game', pathTo: '/game'},
        {title: 'about', pathTo: '/about'},
        {title: 'contact', pathTo: '/contact'}]
    const [isActive, setActive] = useState(null)

    const onChangeActivity = () => {
        setActive(prev => !prev)
    }

    return (
        <>
            <Menu active={isActive}>
                {menuItems.map(({title, pathTo}, index) => {
                    return (
                        <li key={index}>
                            <Link to={pathTo} onClick={() => {
                                onChangeActivity();
                            }}>
                                {title.toUpperCase()}
                            </Link>
                        </li>
                    )
                })}
            </Menu>
            <NavBar
                onClickButton={onChangeActivity}
                active={isActive}
                bgActive={bgActive}
            />
        </>
    )
}
