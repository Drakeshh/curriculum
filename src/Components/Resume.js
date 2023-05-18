import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var scoresmessage = this.props.data.scoresmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school + "-" + education.description}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      
      let compare = (scoreA, scoreB, annotation) => {
        let numberA = scoreA.level.substring(0, scoreA.level.length - 1)
        let numberB = scoreB.level.substring(0, scoreB.level.length - 1)
        return (parseInt(numberB) + ( annotation ? scoreB.annotation ? 1 : 0 : 0)) - (parseInt(numberA) + (annotation ? scoreA.annotation ? 1 : 0 : 0))
      }


      var skills = this.props.data.skills.sort(compare).map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}} className={className}></span><em>{skills.name}</em></li>
      })

      var scores = this.props.data.scores.sort(compare).map(function(score) {
      var className = 'bar-expand '+score.name.toLowerCase();
      return <li key={score.name} style={{position: "relative"}}>
                <span style={{width:score.level}} className={className}></span>
                <em>
                  {score.name + " - " + score.level}
                </em>
                {score.annotation && <i className="fa fa-star fa-flip-vertical" style={{
                    color:"yellow",
                    position: "absolute",
                    left: "-0.3em",
                    top: "-0.3em",
                    fontSize: "2.5em"
                    
                  }} aria-hidden="true"></i>}  
              </li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



    <div className="row skill">

      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>

      <div className="nine columns main-col">

        <p>{skillmessage}</p>
        <div className="bars">
            <ul className="skills">
            {skills}
          </ul>
        </div>

        
      </div>
    </div>
   </section>
    );
  }
}

export default Resume;
