/* eslint-disable react/prop-types */
export default function PersonalInfo(){
    return(
        <div className="personal">
            <h2>Personal Info</h2>
            <Input value='First Name'></Input>
            <Input value='Last Name'></Input>
            <Input value='Title'></Input>
            <Input value='Address'></Input>
            <Input value='Phone Number' type="tel"></Input>
            <Input value='Email' type='email'></Input>
            <textarea rows='4' cols='50' placeholder="Description"></textarea>
        </div>
    )
}

function Input({value,type='text'}){
    return(
        <input placeholder={value} type={type}></input>
    )
}


