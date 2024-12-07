/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import Edu from "./eduPreview";
import WorkExPreview from "./workExPreview";

export default function Preview({firstName,lastName,title,address,phone,email,description,workExps,edus}){
    let name = firstName +" "+ lastName;
    return(
        <div id="cvPreview">
            <div className="info">
                <div className="info1">
                    <div className="name">{name}</div>
                    <div className="title">{title}</div>
                </div>
                <div className="info2">
                <div className="box">
                <span className="material-symbols-outlined">location_on</span>
                <div>{address}</div>
                </div>
                <div className="box">
                <span className="material-symbols-outlined">call</span>
                <div>{phone}</div>
                </div>
                <div className="box">
                <span className="material-symbols-outlined">mail</span>
                <div>{email}</div>
                </div>
                </div>
            </div>
            <hr></hr>
            <div className="description">{description}</div>
            <div className="exp">
                <h2>Experience</h2>
                {workExps.map((exp,index)=>{
                    console.log(exp);
                    return(
                        <WorkExPreview
                        key={index}
                        exp={exp}
                    />
                    )

                })}
            </div>
            <div className="edu">
                <h2>Education</h2>
                {edus.map((edu,index)=>{
                                        console.log(edu);

                    return(
                        <Edu
                            key={index}
                            edu={edu}/>
                    )
                })

                }
            </div>
        </div> 
    )
}