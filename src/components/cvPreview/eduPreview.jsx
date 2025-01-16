/* eslint-disable react/prop-types */
export default function Edu({edu}){

    return(
        <div className="eduInfo">
            <div className="course">
                <strong>{edu.course}</strong>
            </div>
            <div className="other">
                    <strong>{edu.institution}</strong>| {edu.startYear} - {edu.endYear}
            </div>
        </div>
    )
}