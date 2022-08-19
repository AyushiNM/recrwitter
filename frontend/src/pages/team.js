import React, {useState, useEffect} from "react";

const Team = () =>{
    return(<div>
        <div className="container g-padding-y-110--xs">
            <div className="row">
                <div className={"col-md-12"}>
                        <h1 className="g-font-weight--600 g-margin-b-50--xs">Team</h1>
                    </div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <div>
                        <img src="./img/sagar.jpg" style={{"width": "100%"}} alt="sagar"/>
                        <div className="g-margin-t-15--xs">
                            <p className="g-font-weight--600 g-margin-b-5--xs g-color--primary">
                                <a className="g-font-weight--600 g-font-size-22--xs"
                                   href="https://www.linkedin.com/in/sagar-bansal-448097140/">Sagar Bansal</a>
                                <span className="g-font-size-16--xs"> (He/Him)</span></p>
                            <p className="g-color--dark-light">Sagar is a Software Developer at Publicis Sapient. He has experience in Web Technologies, Data Engineering, and Product Engineering. He likes to watch Formula 1 on weekends.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img src="./img/ayushi.jpg" style={{"width": "100%"}} alt="sagar"/>
                        <div className="g-margin-t-15--xs">
                            <p className="g-font-weight--600 g-margin-b-5--xs g-font-size-22--xs g-color--primary">
                                <a className="g-font-size-22--xs g-font-weight--600"
                                   href="https://www.linkedin.com/in/ayushi-mittal1011/">Ayushi Mittal</a>
                                <span className="g-font-size-16--xs"> (She/Her)</span></p>
                            <p className="g-color--dark-light">Ayushi is a ML Engineer. Currently she is pursuing the degree from Plaksha University in Machine Learning & Entrepreneurship. She is also a Python Coach at Applied Computation Foundation.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    </div>)
}

export default Team;
