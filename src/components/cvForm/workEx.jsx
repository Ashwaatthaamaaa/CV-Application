/* eslint-disable react/prop-types */
export default function WorkEx(){
    return(
        <>
                <h2>Work Experience</h2>
                <Work/>
        </>

    )
}


function Work(){
    return(
        <div className="work">
        <Input value='Position'></Input>
        <Input value='Company'></Input>
        <Input value='Start Date'></Input>
        <Input value='End Date'></Input>
        <textarea placeholder="Description" rows='4' cols='50'></textarea>
        </div>
    )
}


function Input({value,type='text'}){
    return(
        <input placeholder={value} type={type}></input>
    )
}
