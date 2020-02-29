import React from "react";
import { faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Card,
  Form,
  Container,
  Col,
  Row
} from "reactstrap";

//import { Card as CustomCard } from "components/Card/Card.jsx";

import './RegisterOptions.scss';

class RegisterOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.options = [
      {
        route: "/auth/register-company",
        subtitle: 'Soy Empresa',
        icon: faBuilding,
      },
      {
        route: "/auth/register-candidate",
        subtitle: 'Soy Aspirante',
        icon: faUser,
      },
    ];
  }

  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  renderCard = () => {
    return this.options.map((element, index) => {

      return (
          <div>
            <Link to={element.route} className="text-center justify-content-center card-link">
              <Col className='col-card-container'>

                {/* Circle Container */}
                <div className='circle-container'>
                  <FontAwesomeIcon icon={element.icon} className='card-icons' />
                </div>

                {/* Subtitle Container */}
                <label className='card-label'>
                  {element.subtitle}
                </label>

              </Col>
            </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="login-page">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" sm="7">
              <Form action="" className="form" method="">
                <Card className="card-login register-options">

                  <Row style={{ marginTop:'20px', marginBottom:'20px', justifyContent: 'space-evenly' }}>
                    {this.renderCard()}
                  </Row>

                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("assets/img/bg/jan-sendereks.jpg")})`
          }}
        />
      </div>
    );
  }
}

export default RegisterOption;
