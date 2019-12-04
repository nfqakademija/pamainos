import React, { Component } from 'react';
import SkillBadge from './SkillBadge';
import PropTypes from 'prop-types';

class Skills extends Component {
    render(){
        return this.props.skills.map((skill) => (
            <SkillBadge badge={skill} />
        ));
    }
}

//PropTypes
Skills.propTypes = {
    skills: PropTypes.array.isRequired
}

export default Skills;