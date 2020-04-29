import React from "react";
import * as Icon from 'react-feather';

const AdminSideBar = ({showSideNav = true}) => {

    return (
        <div id="layoutSidenav">

            <div id="layoutSidenav_nav">
                <nav className="sidenav shadow-right sidenav-light">

                    <div className="sidenav-menu">
                        <div className="nav accordion" id="accordionSidenav">

                            <div className="sidenav-menu-heading">Addons</div>

                            <a className="nav-link" href="#">
                                <div className="nav-link-icon">
                                    <Icon.Home/>
                                </div>
                                Dashboard
                            </a>

                            <a className="nav-link" href="#">
                                <div className="nav-link-icon">
                                    <Icon.Users/>
                                </div>
                                Alumni
                            </a>
                            <a className="nav-link" href="tables.html">
                                <div className="nav-link-icon">
                                    <Icon.Calendar/>
                                </div>
                                Events
                            </a>
                        </div>
                    </div>
                    <div className="sidenav-footer">
                        <div className="sidenav-footer-content">
                            <div className="sidenav-footer-subtitle">Logged in as:</div>
                            <div className="sidenav-footer-title">Admin</div>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div className="page-header pb-10 page-header-dark bg-gradient-primary-to-secondary">
                        <div className="container-fluid">
                            <div className="page-header-content">
                                <h1 className="page-header-title">
                                    <div className="page-header-icon"><i data-feather="activity"></i></div>
                                    <span>Dashboard</span>
                                </h1>
                                <div className="page-header-subtitle">
                                    San Jose Seminary
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-n10">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-header">Area Chart Example</div>
                                    <div className="card-body">

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-header">Bar Chart Example</div>
                                    <div className="card-body">
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </main>
                <footer className="footer mt-auto footer-light">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 small">Copyright &copy; Your Website 2020</div>
                            <div className="col-md-6 text-md-right small">
                                <a href="#!">Privacy Policy</a>
                                &middot;
                                <a href="#!">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default AdminSideBar;
