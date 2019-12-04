import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

    render() {
        return(
              <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div className="container-fluid">
      {/* <!-- Toggler --> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <!-- Brand --> */}
      <a className="navbar-brand pt-0" href="">
        <img src="" class="navbar-brand-img" alt="img"></img>
      </a>
      {/* <!-- User --> */}
      <ul className="nav align-items-center d-md-none">
        <li className="nav-item dropdown">
          <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="ni ni-bell-55"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="media align-items-center">
              <span className="avatar avatar-sm rounded-circle">
                <img alt="Image placeholder" src="../assets/img/theme/team-1-800x800.jpg"></img>
">
              </span>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
            <div className=" dropdown-header noti-title">
              <h6 className="text-overflow m-0">Welcome!</h6>
            </div>
            <a href="./examples/profile.html" class="dropdown-item">
              <i className="ni ni-single-02"></i>
              <span>My profile</span>
            </a>
            <a href="./examples/profile.html" class="dropdown-item">
              <i className="ni ni-settings-gear-65"></i>
              <span>Settings</span>
            </a>
            <a href="./examples/profile.html" class="dropdown-item">
              <i className="ni ni-calendar-grid-58"></i>
              <span>Activity</span>
            </a>
            <a href="./examples/profile.html" class="dropdown-item">
              <i className="ni ni-support-16"></i>
              <span>Support</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#!" class="dropdown-item">
              <i className="ni ni-user-run"></i>
              <span>Logout</span>
            </a>
          </div>
        </li>
      </ul>
      {/* <!-- Collapse --> */}
      <div className="collapse navbar-collapse" id="sidenav-collapse-main">
        {/* <!-- Collapse header --> */}
        <div className="navbar-collapse-header d-md-none">
          <div className="row">
            <div className="col-6 collapse-brand">
                <img src="../assets/img/brand/blue.png"></img>
            </div>
            <div className="col-6 collapse-close">
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Form --> */}
        <form className="mt-4 mb-3 d-md-none">
          <div className="input-group input-group-rounded input-group-merge">
            <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search"></input>
            <div className="input-group-prepend">
              <div className="input-group-text">
                <span className="fa fa-search"></span>
              </div>
            </div>
          </div>
        </form>
        {/* <!-- Navigation --> */}
        <ul className="navbar-nav">
          <li className="nav-item" >
          <a className=" nav-link " href="/employees"> <i class="ni ni-circle-08 text-pink"></i> Darbuotojai
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/teams">
              <i className="ni ni-world-2 text-blue"></i> Komandos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/projects">
              <i className="ni ni-app text-orange"></i> Projektai
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              <i className="ni ni-single-02 text-yellow"></i> Mano profilis
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link " href="../examples/tables.html">
              <i className="ni ni-bullet-list-67 text-red"></i> Tables
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../examples/login.html">
              <i className="ni ni-key-25 text-info"></i> Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../examples/register.html">
              <i className="ni ni-circle-08 text-pink"></i> Register
            </a>
          </li> */}
        </ul>
        {/* <!-- Divider --> */}
        <hr className="my-3"></hr>
        {/* <!-- Heading --> */}
        <h6 className="navbar-heading text-muted">Veiksmai</h6>
        {/* <!-- Navigation --> */}
        <ul className="navbar-nav mb-md-3">
          <li className="nav-item">
            <a className="nav-link" href="/create-project">
              <i className="ni ni-settings"></i> Sukurti projektą
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/create-team">
              <i className="ni ni-settings"></i> Sukurti komandą
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="ni ni-settings-gear-65"></i> Atsijungti
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        )
    }
}

export default Navbar;