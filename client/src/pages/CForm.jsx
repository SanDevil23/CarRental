import React, {useState} from 'react';
import './CForm.css';
import axios from 'axios';

const CForm = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [id, setId] = useState("");
    let status = "";

    const handleID = (event) => {
        setId(event.target.value)
        console.log(id);
    }

    const handleName = (event) => {
        setName(event.target.value)
        console.log(name)
    }

    const handleGender = (event) => {
        setGender(event.target.value)
        console.log(gender)
    }

    const SubmitForm = async() =>{
        // http://localhost:8080/user/add?id=C002&name=Ravona&gender=female
        console.log("Hello World")
        console.log(id+name+gender);
        await axios.post(`http://localhost:8080/user/add?id=${id}&name=${name}&gender=${gender}`);
        console.log("Data Sent");
    }

  return (
    <div>
    <form className="Form">
        <input type="text" placeholder='ID' onChange={handleID}/>
        <input type="text" placeholder='Name' onChange={handleName}/>
        <div>
            <input type="radio" name="gender" value="male" onChange={handleGender}/>Male
            <input type="radio" name="gender" value="female" onChange={handleGender}/>Female
            <input type="radio" name="gender" value="others" onChange={handleGender}/>Others
        </div>
        <button onClick={SubmitForm}>Submit</button>
    </form>
    </div>
  )
}

export default CForm
