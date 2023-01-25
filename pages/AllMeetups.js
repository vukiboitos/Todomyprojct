import MeetupList from "../component/meetups/MeetupList";
import { useState } from "react";
import { useEffect } from "react";
// const DUMMY_DATA=[
//     {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];


function AllMeetupsPages(){
  const[isLoading,setIsLoading]=useState(true)
  const[loadedMeetups,setLoadedMeetups]=useState([])//array of meetups, kad fetch datu ovde je skladisti
  
  useEffect(()=>{
    
    
    fetch("https://meetup-53c27-default-rtdb.europe-west1.firebasedatabase.app/meetup.json")
  .then(response=>{
   return response.json()
  }).then((data)=>{
   const meetups=[];

   for(const key in data){
    const meetup={
      id:key,
      ...data[key],
    }
    meetups.push(meetup)

   }



  setIsLoading(false)
  setLoadedMeetups(meetups)
  })},[])
  
  
  if(isLoading){
    return<section>...Loading</section>
  }




    return(<section>

    <h2>All Todos Page</h2>
    <MeetupList meetups={loadedMeetups}/>
    </section>
    )
}
export default AllMeetupsPages;