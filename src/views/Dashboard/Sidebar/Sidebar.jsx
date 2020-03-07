import React from "react";
// import { NavLink } from "react-router-dom";
// import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo.svg";

var ps;

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
        this.sidebar = React.createRef();
    }

    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(this.sidebar.current, {
                suppressScrollX: true,
                suppressScrollY: false
            });
        }
    }

    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
        }
    }

    render() {
        return (
        <div
            className="sidebar"
            data-color={this.props.bgColor}
            data-active-color={this.props.activeColor}
        >
            <div className="logo">
            <a
                href="https://www.creative-tim.com"
                className="simple-text logo-mini"
            >
                <div className="logo-img">
                <img src={logo} alt="react-logo" />
                </div>
            </a>
            <a
                href="https://www.creative-tim.com"
                className="simple-text logo-normal"
            >
                N Ofertas
            </a>
            </div>

            <div className="sidebar-wrapper" ref={this.sidebar}>
                <h4 className="sidebar-wrapper__header">Filtros</h4>
                <div className="filter-box">
                    <div className="heading-filter"><h5>Palabra clave</h5></div>
                    <form className="text-center">
                        <div className="form-row justify-content-center">
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="textInputFilter"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="filter-box">
                    <div className="heading-filter"><h5>Fecha de publicacion</h5></div>
                    <ul class="list-group list-date">
                        <li class="list-group-item">
                            Cras justo odio
                        </li>
                        <li class="list-group-item">
                            Dapibus ac facilisis in
                        </li>
                        <li class="list-group-item">
                            Morbi leo risus
                        </li>
                        <li class="list-group-item">
                            Cras justo odio
                        </li>
                        <li class="list-group-item">
                            Dapibus ac facilisis in
                        </li>
                        <li class="list-group-item">
                            Morbi leo risus
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}

export default Sidebar;
