import PersonalInfo from "./components/cvForm/personalInfo"
import WorkEx from "./components/cvForm/workEx"
import Education from "./components/cvForm/edu"
import Preview from "./components/cvPreview/preview"
import Edu from "./components/cvForm/edu"
import { useState } from "react"

export default function Content(){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [description,setDescription] = useState('');
 
    const [workEx,setWorkEx] = useState([]);

    const addWorkEx = ()=>{
        const newWorkEx = {
            company:'',
            position:'',
            startDate:'',
            endDate:'',
            description:'',
            isEditing:true
        };

        setWorkEx([...workEx,newWorkEx]);
    }

    const saveWorkExp = (index,updatedExp)=>{
        const updatedExps = [...workEx];
        updatedExps[index]={
            ...updatedExp,
            isEditing: false
        };
        setWorkEx(updatedExps);
    };

    const editWorkExp =(index)=>{
        const updatedExps = [...workEx];
        updatedExps[index].isEditing = true;
        setWorkEx(updatedExps);
    }

    const deleteWorkExp = (index) => {
        const updatedExps = workEx.filter((_,i)=> i !== index);
        setWorkEx(updatedExps);
    }



    const [edu,setEdu] = useState([]);
    const addEdu = ()=>{
        const newEdu = {
            course:'',
            institution:'',
            startYear:'',
            endYear:'',
            isEditing:true
        };

        setEdu([...edu,newEdu]);
    }


    const saveEdu = (index,updatedEdu)=>{
        const updatedEdus = [...edu];
        updatedEdu[index]={
            ...updatedEdu,
            isEditing: false
        };
        setEdu(updatedEdus);
    };

    const editEdu =(index)=>{
        const updatedEdus = [...edu];
        updatedEdus[index].isEditing = true;
        setEdu(updatedEdus);
    }

    const deleteEdu = (index) => {
        const updatedEdus = edu.filter((_,i)=> i !== index);
        setWorkEx(updatedEdus);
    }











    return(
        <div className="content">
            <div id="cvForm">
                <PersonalInfo
                    onFirstNameChange={setFirstName}
                    onLastNameChange={setLastName}
                    onTitleChange={setTitle}
                    onAddressChange={setAddress}
                    onPhoneChange={setPhone}
                    onEmailChange={setEmail}
                    onDescriptionChange={setDescription}
                />
                <h2>Work Experience</h2>
                <button onClick={addWorkEx}>Add Experience</button>
                {workEx.map((exp,index)=>(
                    <WorkEx
                        key={index}
                        exp={exp}
                        onSave={(updatedExp) => saveWorkExp(index, updatedExp)}
                        onEdit={() => editWorkExp(index)}
                        onDelete={() => deleteWorkExp(index)}
                    />
                ))}

                <Education/>
                <h2>Education</h2>
                <button onClick={addEdu}>Add Education</button>
                {edu.map((edu,index)=>(
                    <Edu
                        key={index}
                        edu={edu}
                        onSave={(updatedEdu) => saveEdu(index, updatedEdu)}
                        onEdit={() => editEdu(index)}
                        onDelete={() => deleteEdu(index)}
                    />
                ))}
            </div>
            <Preview
                firstName={firstName}
                lastName={lastName}
                title={title}
                address={address}
                phone={phone}
                email={email}
                description={description}
                workExps={workEx}
                edus={edu}
            />
        </div>
    )
}