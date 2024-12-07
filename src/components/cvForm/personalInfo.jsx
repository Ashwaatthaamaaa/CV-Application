/* eslint-disable react/prop-types */
export default function PersonalInfo({ onFirstNameChange, onLastNameChange, onTitleChange, onAddressChange, onPhoneChange, onEmailChange,onDescriptionChange }){
    return(
        <div className="personal">
            <h2>Personal Info</h2>
            <Input value='First Name' onChange={(e) => onFirstNameChange(e.target.value)}></Input>
            <Input value='Last Name' onChange={(e) => onLastNameChange(e.target.value)}></Input>
            <Input value='Title' onChange={(e) => onTitleChange(e.target.value)}></Input>
            <Input value='Address' onChange={(e) => onAddressChange(e.target.value)}></Input>
            <Input value='Phone Number' type="tel" onChange={(e) => onPhoneChange(e.target.value)}></Input>
            <Input value='Email' type='email' onChange={(e) => onEmailChange(e.target.value)}></Input>
            <textarea rows='4' cols='50' placeholder="Description" onChange={(e) => onDescriptionChange(e.target.value)}></textarea>
        </div>
    )
}

function Input({value, type='text', onChange}){
    return(
        <input 
placeholder={value} 
type={type} 
            onChange={onChange}
></input>
    )
}


