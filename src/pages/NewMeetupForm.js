import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";


function NewMeetupForm(props){

    const refInputTitle=useRef()
    const refInputAddress=useRef()
    const refInputDescription=useRef()
    const refInputImage=useRef()
    
   //useRef je dobro za citanje,uspostavlja konekciju
   //Js ima value i ona drzi current entered value tog Inputa
   
        function submitHandler(event){
        event.preventDefault()
        const enteredTitle=refInputTitle.current.value
        const enteredImage=refInputImage.current.value;
        const enteredAddres=refInputAddress.current.value;
        const enteredDescription=refInputDescription.current.value;

        const meetupData={
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddres,
            description:enteredDescription
        }
        props.onAddMeetup(meetupData)
    }
    return<Card>
        <form className={classes.form} onSubmit={submitHandler}>
<div className={classes.control} >
    <label htmlFor="image" >Meetup Title</label>
    <input type="ulr" required id="title" ref={refInputTitle} ></input>
</div>
 <div className={classes.control} >
    <label htmlFor="url" >url address</label>
    <input type="text" required id="image" ref={refInputImage}></input>
</div>
 <div className={classes.control} >
    <label htmlFor="address" >Address</label>
    <input type="text" required id="address" ref={refInputAddress}></input>
</div>
 <div className={classes.control} >
    <label htmlFor="descripton" >Decription</label>
    <textarea id="decription" required rows="5" ref={refInputDescription}></textarea>
</div>
<div className={classes.actions} >
    <button>Add Meetup</button>
</div>
        </form>
    </Card>
}
export default NewMeetupForm;