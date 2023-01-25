//import Todo from "./component/Todo";
// import Modal from "./component/Modal";
// import Backdrop from "./component/Backdrop";
// import { useState } from "react";
import { Route ,Switch} from "react-router-dom";
import AllMeetupsPages from './pages/AllMeetups';
import NewMeetupPages from './pages/NewMeetup';
import FavoritesPage from "./pages/Favorites";
//import Layout from "./component/layout/Layout";

import Layout from "./component/layout/Layout";
function App() {


  return (
    <Layout>
      
      <Switch>
  <Route path="/" exact>
<AllMeetupsPages/>
      </Route>
      <Route path="/new-meetup">
<NewMeetupPages/>
      </Route>
      <Route path="/favorites">
<FavoritesPage/>
      </Route>
      </Switch>
      </Layout>
       
      
  );
}

export default App;
