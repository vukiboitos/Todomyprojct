import { Link } from "react-router-dom"
import classes from "./MainNavigation.module.css"
import FavoriteContext from "../store/favorites-context";
import { useContext } from "react";

function MainNavigation(){
    const favoriteCtx=useContext(FavoriteContext)
    return<header className={classes.header}>
        <div className={classes.logo}>To Do</div>
            <nav>
                <ul>
                    <li>
    <Link to="/">All ToDo</Link>
                    </li>
                    <li>
    <Link to="/new-meetup">New ToDo</Link>
                    </li>
                    <li>
    <Link to="/favorites">My favorites
    <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
    </Link>
                    </li>
                    
                
                </ul>
            </nav>
    </header>
}
export default MainNavigation;