/* eslint-disable react/prop-types */
export default function Edu({edu}){

    return(
        <div className="eduInfo">
            <div className="course">
                {edu.course}
            </div>
            <div className="other">
                    {edu.institution}|{edu.startYear}-{edu.endYear}
            </div>
        </div>
    )
}