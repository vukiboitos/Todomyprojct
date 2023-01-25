import { useContext } from "react";
import FavoriteContext from "../component/store/favorites-context";
import MeetupList from "../component/meetups/MeetupList";






function FavoritesPage(){
    const favoriteCtx=useContext(FavoriteContext)
    let content;
    if(favoriteCtx.totalFavorites === 0){
        content=<p>Got no favorites</p>
    }else{
       content= <MeetupList meetups={favoriteCtx.favorites}/>
    }

    return<section>
        <h1>My Favorite</h1>
        {content }
    </section>
    
    
}
export default FavoritesPage;