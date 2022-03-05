import React,{useState} from "react";
import Card from "../UI/Card";
import Styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props)=>{
    const [enteredUserName,seteEnteredUserName]=useState('');
    const [enteredAge,setenteredAge]=useState('');
    const [error,setError] = useState();

    const changeUserNameHandler = (event) => {
      seteEnteredUserName(event.target.value)
    }

    const changeAgeHandler = (event) => {
      setenteredAge(event.target.value)
    }

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
          setError({
            title : 'Invalid input',
            message: 'Please enter valid Name and Age.'
          });
          return;
        }
        if(+enteredAge < 1){
          setError({
            title : 'Invalid age',
            message: 'Please enter valid age (Greater than zero).'
          });
          return;
        }
        props.onAddUser({name:enteredUserName,age:enteredAge,key:Math.random().toString()})
        seteEnteredUserName('');
        setenteredAge('');
    }

    const errorHandler = () =>{
      setError(null);
    }
    return (
      <>
      {error && <ErrorModel title= {error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={Styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">User Name</label>
          <input id="userName" type="text" value={enteredUserName} onChange={changeUserNameHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredAge} onChange={changeAgeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      </>
    );
}

export default AddUser;