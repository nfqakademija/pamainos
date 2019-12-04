import React from "react";
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";

const CLASSES = {
    header: "header-global",
    navbar: "navbar navbar-main navbar-expand-lg navbar-dark bg-default",
    logo: "navbar-brand mr-lg-5"

};

function handleClick(e) {
 
}

class Header extends React.Component{

  constructor() {
    super();
  this.state = {
    dropdownStyle: ""
  };

  }

   handleClicked (){
    console.log("dasdasd");
   this.setState({dropdownStyle: "close"});
   setTimeout(function(){
    this.setState({dropdownStyle: ""});
}, 900);
  }

  render() {
    return (
        <header className={CLASSES.header}>
<nav className="navbar navbar-expand-lg navbar-dark bg-default">
    <div className="container">
        <a className="navbar-brand" href="#">Default Color</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-default">
            <div className="navbar-collapse-header">
                <div className="row">
                    <div className="col-6 collapse-brand">
                        <a href="index.html">
                            <img src="assets/img/brand/blue.png"></img>
                        </a>
                    </div>
                    <div className="col-6 collapse-close">
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>

            <ul className="navbar-nav ml-lg-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" onClick={this.handleClicked.bind(this)} aria-haspopup="true" aria-expanded="false">
                        <i className="ni ni-settings-gear-65"></i>
                        <span className="nav-link-inner--text d-lg-none">Settings</span>
                    </a>
                    <div className={"dropdown-menu dropdown-menu-right "+this.state.dropdownStyle} aria-labelledby="navbar-default_dropdown_1">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</nav>
  </header>
    );
  };
};

export default Header;