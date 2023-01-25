import NewMeetupForm from "./NewMeetupForm";
import { useHistory } from "react-router-dom";


function NewMeetupPages(){
const history=useHistory()
    function addMeetupHandler(meetupData){
fetch("https://meetup-53c27-default-rtdb.europe-west1.firebasedatabase.app/meetup.json",
{
    method:"POST",
    body:JSON.stringify(meetupData),
    headers:{
        "Content-Type":"application/json"
    }
}).then(()=>{
    history.replace("/")
})
    } 
    return(<section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>)
}
export default NewMeetupPages;