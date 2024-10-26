import { useState } from "react";

export default function BetterSignupForm() {
    const [formData,setFormData] = useState({firstName:'',lastName:''})
     
    const handleChange = (e) => {
        const changedField = e.target.name;
        const newValue = e.target.value;
        setFormData((currData)=>{
            return {...currData,
                [changedField] : newValue,
            }
        })
    }
      const handleSubmit = () => {
        console.log(formData);
      };
      return (
        <div>
          <label htmlFor="firstname">Enter a First Name: </label>
          <input
            type="text"
            placeholder="first name"
            value={formData.firstname}
            onChange={handleChange}
            id="firstname"
            name="firstName"
          />
          <label htmlFor="lastname">Enter a Last Name: </label>
          <input
            type="text"
            placeholder="last name"
            value={formData.lastname}
            onChange={handleChange}
            id="lastname"
            name="lastName"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
    }
