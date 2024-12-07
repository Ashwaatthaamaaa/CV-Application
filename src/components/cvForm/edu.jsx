/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// export default function Education(){
//     return(
//         <>
//         <h2>Education</h2>
//         <Edu/>   
//         </>
//     )
// }



export default function Edu({ edus, onSave, onEdit, onDelete }) {
    console.log(edus)
    const [formData, setFormData] = useState({
        course: edus?.course || '',
        institution: edus?.institution || '',
        startYear: edus?.startYear || '',
        endYear: edus?.endYear || '',
    });

    return (
        <div className="edu">
            <Input 
                value={formData.course} 
                placeholder='Course' 
                onChange={(e) => setFormData(prev => ({ ...prev, course: e.target.value }))} 
            />
            <Input 
                value={formData.institution} 
                placeholder='University/School' 
                onChange={(e) => setFormData(prev => ({ ...prev, institution: e.target.value }))} 
            />
            <Input 
                value={formData.startYear} 
                placeholder='Start Year' 
                onChange={(e) => setFormData(prev => ({ ...prev, startYear: e.target.value }))} 
            />
            <Input 
                value={formData.endYear} 
                placeholder='Graduated Year' 
                onChange={(e) => setFormData(prev => ({ ...prev, endYear: e.target.value }))} 
            />
            <button onClick={() => onSave(formData)}>Save</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

function Input({ value, placeholder, type = 'text', onChange }) {
    return (
        <input 
            placeholder={placeholder} 
            type={type} 
            onChange={onChange} 
            value={value} 
        />
    );
}
