import React from "react"

export default function Forms(){
    const [formData, setFormData] = React.useState({
        firstName:"", 
        lastName:"", 
        email:"", 
        comments:"",
        isFriendly:true,
        employment:"",
        favColor:""
    })
    
    function handleChange(event){
        setFormData(prevFormData => {
            const {name,value, type, checked} = event.target
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked:value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="FirstNamed"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
            />
            <input  
                type="text"
                placeholder="LastNamed"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
            />
             <input 
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                name="comments"
                onChange={handleChange}/>
             <input 
                type="checkbox"
                id="isFriendly"
                name="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}/>
              <label htmlFor="isFriendly">Are you Friendly?</label>
              <fieldset>
                <legend>Current Employement Status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange}
                    checked={formData.employment === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"                    
                    onChange={handleChange}
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-Time</label>
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-Time</label>
              </fieldset>
              <lable htmlFor="favColor">What is your favourite color?</lable>
              <br />
              <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="blue">Blue</option>
                <option value="violate">Violate</option>
            </select>
            <button>Submit</button>

        </form>
    )
}
