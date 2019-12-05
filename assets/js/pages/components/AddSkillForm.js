import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddSkillForm extends Component{

    constructor(){
        super();
    state = {
        title: '',
    }
}

    onSubmit (e) {
        e.preventDefault();
        this.props.addSkill(this.state.title);
        this.setState({ title: ''});
    }

    onChange (e) {
        this.setState({ title: e.target.value});
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                 <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input id="skill-input" name="skill-input" className="form-control form-control-alternative" onChange={this.onChange} placeholder="iveskite" value={this.state.title} type="text"></input>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">Prideti</button>
            </form>
        )
    }
}

// PropTypes
AddSkillForm.propTypes = {
    addSkill: PropTypes.func.isRequired
}


export default AddSkillForm;