import React from "react";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import AdminNavbar from "./Navbars/AdminNavbar.jsx";
//import Footer from "./Footer/Footer.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import JobList from "views/Dashboard/JobList/index";
import JobDetails from "views/Dashboard/JobDetails/index";

import {getJobs} from '../../store/actions/jobActions'

var ps;

class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        backgroundColor: "black",
        activeColor: "info"
      };
      this.mainPanel = React.createRef();
    }
    componentDidMount() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps = new PerfectScrollbar(this.mainPanel.current);
        document.body.classList.toggle("perfect-scrollbar-on");
      }

      this.props.getJobs();
    }
    componentWillUnmount() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    }
    componentDidUpdate(e) {
      if (e.history.action === "PUSH") {
        this.mainPanel.current.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
      }
    }
    handleActiveClick = color => {
      this.setState({ activeColor: color });
    };
    handleBgClick = color => {
      this.setState({ backgroundColor: color });
    };
    render() {
      return (
        <div className="wrapper">
          <Sidebar
            {...this.props}
            bgColor={this.state.backgroundColor}
            activeColor={this.state.activeColor}
          />
          <div className="main-panel" ref={this.mainPanel}>
            <AdminNavbar {...this.props} />
            <Switch>
              <Route path="/public/dashboard" render={props => <JobList {...props} jobs={this.props.jobs}/>} />
              <Route path="/public/job/:id" render={props => <JobDetails {...props}/>} />
            </Switch>
            {/*  <Footer fluid />*/}
          </div>
        </div>
      );
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      getJobs: ()=> dispatch(getJobs()),
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      jobs: state.job.jobs,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
