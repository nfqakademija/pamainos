import React, { Component } from 'react';
import AddSkillForm from './AddSkillForm';
import Skills from './Skills';

export default class SkillDisplay extends Component {

    constructor(){
        super();
    this.state = {
        skills: []
    };
}

    // componentDidMount(){
    //     this.loadSkills();
    // }

    // loadSkills(){
    //     //Todo: communication with back end to get skills
    // }

    addSkill (title) {
        let tempSkills = this.state.skills;
        tempSkills.push(title);
        this.setState({skills:tempSkills});

        //Todo: communication with backend, to add skill to database
        // this.loadSkills();
    };

    render() {
        return(
            <div className="card-body pt-0 pt-md-4">
             <Skills skills={this.state.skills} />
             <AddSkillForm></AddSkillForm>
             <AddSkillForm addSkill={this.addSkill} /> 
            </div>
        )
    }
}
