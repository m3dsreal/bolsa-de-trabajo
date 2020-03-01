import React from "react";

import JobCard from './components/JobSummary/index';

// reactstrap components
import { 
	Row,
	Col,
	Container
} from 'reactstrap';

class JobList extends React.Component {

    render() {
        
        let jobsCards = this.props.jobs.map(job => {
            return(
                <Col sm="4">
                    <JobCard key={job.id} job={job} match={this.props.match}/>
                </Col>
            );
        });

        return (
            <div className="content">
                <Container fluid>
                    <Row>
                        {jobsCards}
                    </Row>
                </Container>	
            </div>
        );
    }
}

export default JobList;
