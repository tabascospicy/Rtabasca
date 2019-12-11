import React from 'react';
import Skill from './skill/skill'
import "./skills.scss";
const skills = ['UI','React','Angular','React Native','Ionic','PHP','Mysql','Mongo DB','GraphQL','NodeJs','TypeScript','JavaSript','HTML5','CSS3','SASS'];
function Skills (props) {
    return (
     <div className="Blog-text">
         <h2>SKILLS</h2>
         <div className="Skills">
            {skills.map((e,i) =>{
                return <Skill key={i} name={e}/>
            })}
         </div>
     </div>
  );
}

export default Skills;