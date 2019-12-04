import React from 'react';
import { Link } from 'react-router-dom';


class NavbarProfile extends React.Component {

    render() {
        return(
            <div>
      <nav className="navbar navbar-top navbar-expand-md bg-gradient-nav" id="navbar-main">
      <div className="container-fluid bg-gradient-nav">
        {/* <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="">Edit profile?</a> */}
      </div>
    </nav>
    <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" 
    // style="min-height: 600px; background-image: url(../assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;"
    >
    <span className="mask bg-gradient-nav opacity-8"></span>
      <div className="container-fluid d-flex align-items-center">
        <div className="row">
          <div className="col-lg-7 col-md-10">
            {/* <h1 className="display-2 text-white">Hello Jesse</h1> */}
            <p className="text-white mt-0 mb-5"> </p>
            <div> </div>
            <div> </div>
            <h1> </h1>
            {/* <a className="btn btn-info">Edit profile</a> */}
          </div>
      </div>
      </div>
    </div>
    </div>
        );
    };
}

export default NavbarProfile;