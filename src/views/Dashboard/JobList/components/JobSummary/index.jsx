import React from "react";
import { NavLink } from "react-router-dom";

// reactstrap components
import { 
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Button,
} from 'reactstrap';

class JobSummary extends React.Component {

	constructor(props){
		super(props)
		this.jobUrl = '/public/job/';
	}

	limitJobDescription = (description, limit = 20) => {
        const newTitle = [];
        if (description.length > limit) {
            description.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);

            // return the result
            return `${newTitle.join(' ')} ...`;
        }
        return description;
	}

	render() {
        const imgStyle = {
            maxHeight: 75,
            maxWidth: 75,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
        
		return (
			<div>
				<Card style={{paddingTop: 10}}>
					<CardImg top src={this.props.job.company_logo} alt="Card image cap" style={imgStyle} />
					<CardBody>
						<NavLink to={`${this.jobUrl}${this.props.job.id}`}>
                            <CardTitle>{this.props.job.title}</CardTitle>
                        </NavLink>        
						<CardSubtitle>{this.props.job.type}</CardSubtitle>
						<CardText>{this.limitJobDescription(this.props.job.description)}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default JobSummary;
