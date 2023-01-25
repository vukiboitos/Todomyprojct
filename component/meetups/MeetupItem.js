import { useContext } from 'react';
import FavoriteContext from '../store/favorites-context';
import Card from '../../ui/Card';
import classes from  "./MeetupItem.module.css";


function MeetupItem(props) {
  const favoritesCtx = useContext(FavoriteContext);

const itemIsFavorite=favoritesCtx.itemIsFavorite(props.id)//id:iz MeetupItem

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,//ukoliko nije Favorite Function
      });//re-kreira Meetup Item koji okida addFavorite Fn u FavoriteContextProvider
      //to udejtuje State,dodaje Item u userFavorites-useState,i kad je state updejtovan 
      //cela komponente ce biti udejtovana u favorite-context.js, a samim tim i App.js
      //i sve komponente ce imati ulaz do  latest Sate;
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler} className={classes.button}>
            {itemIsFavorite ? 'Remove Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;