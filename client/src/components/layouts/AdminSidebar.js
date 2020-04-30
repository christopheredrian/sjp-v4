import React from "react";
import * as Icon from 'react-feather';
import AdminDashboard from "../dashboard/AdminDashboard";

const AdminSideBar = ({showSideNav = true}) => {

    return (
        <div id="layoutSidenav">

            <div id="layoutSidenav_nav">
                <nav className="sidenav shadow-right sidenav-dark">

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
                    <div className="container-fluid mt-3">
                        <div className="row">
                            <AdminDashboard/>
                        </div>
                    </div>
                </main>
                <footer className="footer mt-auto footer-light">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 small">Copyright &copy; SJP 2020</div>
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
