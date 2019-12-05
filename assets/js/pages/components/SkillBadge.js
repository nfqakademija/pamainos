import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class SkillBadge extends Component {

    render(){
        return (
            <span className="badge badge-default"> {this.props.badge} </span>
        )
    }
}

// PropTypes
SkillBadge.propTypes = {
    badge: PropTypes.object.isRequired
}