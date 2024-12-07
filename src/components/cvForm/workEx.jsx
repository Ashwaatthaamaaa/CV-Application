/* eslint-disable react/prop-types */
// export default function WorkEx(){
//     return(
//         <>
//                 <Work/>
//         </>

//     )
// }
import React, { useState } from 'react';

export default function WorkEx({exp, onSave, onEdit, onDelete}){

    const [formData, setFormData] = useState({
        company: exp.company || '',
        position: exp.position || '',
        startDate: exp.startDate || '',
        endDate: exp.endDate || '',
        description: exp.description || ''
    });

    return(
        <div className="work">
            <Input 
                value='Position' 
                inputValue={formData.position}
                onChange={(e) => setFormData(prev => ({...prev, position: e.target.value}))}
            />
            <Input 
                value='Company' 
                inputValue={formData.company}
                onChange={(e) => setFormData(prev => ({...prev, company: e.target.value}))}
            />
            <Input 
                value='Start Date' 
                inputValue={formData.startDate}
                onChange={(e) => setFormData(prev => ({...prev, startDate: e.target.value}))}
            />
            <Input 
                value='End Date' 
                inputValue={formData.endDate}
                onChange={(e) => setFormData(prev => ({...prev, endDate: e.target.value}))}
            />
            <textarea 
                placeholder="Description" 
                rows='4' 
                cols='50' 
                value={formData.description}
                onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
            />
            <button onClick={() => onSave(formData)}>Save</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

function Input({value, type='text', onChange, inputValue}){
    return(
        <input 
            placeholder={value} 
            type={type} 
            onChange={onChange}
            value={inputValue}
        ></input>
    )
}