export default function Preview(){
    return(
        <div id="cvPreview">
            <div className="info">
                <div className="info1">
                    <div className="name">Sarthak</div>
                    <div className="title">mr.</div>
                </div>
                <div className="info2">
                <div className="box">
                <span className="material-symbols-outlined">location_on</span>
                <div>uuu</div>
                </div>
                <div className="box">
                <span className="material-symbols-outlined">call</span>
                <div></div>
                </div>
                <div className="box">
                <span className="material-symbols-outlined">mail</span>
                <div></div>
                </div>
                </div>
            </div>
            <hr></hr>
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