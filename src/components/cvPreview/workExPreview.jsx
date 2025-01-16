/* eslint-disable react/prop-types */
import './preview.css'
export default function WorkExPreview({exp}){
    return(
        <div className="exp">
            <div className="first">
                <div className="position"><strong>{exp.position}</strong></div>
                <div className="company">
                    <strong>{exp.company}</strong> | {exp.startDate} - {exp.endDate}
                </div>
            </div>
            <div className="second">
                {exp.description}
            </div>
        </div>
    )
}