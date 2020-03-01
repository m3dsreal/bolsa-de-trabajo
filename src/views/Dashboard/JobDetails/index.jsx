import React from "react";
import { connect } from 'react-redux';

import {getJob} from '../../../store/actions/jobActions'

// reactstrap components
import { 
	Row,
    Col,
    Media,
    Container,
    Button
} from 'reactstrap';

class JobDetails extends React.Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getJob(id)
    }

    render() {
        const imgStyle = {
            maxHeight: 300,
            maxWidth: 300
        }
        return (
            <div className="content">
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 4 }}>
                            <Media object src={this.props.job.company_logo} style={imgStyle}/>
                        </Col>
                        <Col sm="12" md={{ size: 4, offset: 3 }}>
                            <Row>
                                Tiempo: {this.props.job.type}                             
                            </Row>
                            <Row>
                                Company: {this.props.job.company}                             
                            </Row>
                            <Row>
                                Ubicacion: {this.props.job.location}                             
                            </Row>
                            <Row>
                                <Button>Apuntarme</Button>                              
                            </Row>
                        </Col>
                    </Row>
                    <br/>
                    <Row fluid>
                        <Col sm="12" md={{ size: 8, offset: 2}}>
                                <h2 className="title">{this.props.job.title}</h2>
                        </Col>  
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 4}}>
                            <h3 className="title">Descripcion</h3>
                        </Col>
                    </Row>  
                    <Row >
                        <Col sm="12" md={{ size: 8, offset: 2}}>
                            {this.props.job.description}
                        </Col>
                    </Row>    
                    <Row>
                    </Row>      
                </Container>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getJob: (id)=> dispatch(getJob(id)),
    }
}

const mapStateToProps = (state) => {
    return {
      job: state.job.job,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);
