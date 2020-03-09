import React, { Fragment } from "react";
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  // CardBody,
  // CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  FormGroup,
  Container,
  Col,
  Row
} from "reactstrap";

import { history } from '../../../helpers/history.js';
import './RegisterCompany.scss';

class RegisterCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  redirectToDashboard = () => {
    history.push('/public/dashboard');
  }
  goBack = () => {
    history.push('/auth/register-options');
  }
  renderAccountData = () => {
    const { email, password } = this.state;
    return (
      <Fragment>
        <Row className='mx-0 mb-5'>
          <Col className='p-0'>

            <Row className='mx-4 justify-content-center'>
              {/* Correo*/}
              <Col sm='6' className='p-0'>
                <FormGroup>
                  <Row className='m-0 justify-content-start'>
                    <label className='select-label'>
                      Correo
                    </label>
                  </Row>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="email"
                      value={email}
                      onChange={({ target }) => {
                        this.setState({
                          email: target.value,
                        });
                      }}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>

            <Row className='mx-4 justify-content-center'>
              {/* Contraseña */}
              <Col sm='6' className='p-0'>
                <FormGroup>
                  <Row className='m-0 justify-content-start'>
                    <label className='select-label'>
                      Contraseña
                    </label>
                  </Row>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="password"
                      value={password}
                      onChange={({ target }) => {
                        this.setState({
                          password: target.value,
                        });
                      }}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>

          </Col>
        </Row>
      </Fragment>
    );
  }
  renderButtons = () => {
    return(
      <Row className='justify-content-between' style={{ marginBottom: '15px', marginRight: '36px', marginLeft: '36px'}}>
        <Button
          className="btn-round"
          color="primary"
          onClick={this.goBack}
          outline
        >
          Volver
        </Button>
        <Button
          className="btn-round"
          color="primary"
          onClick={this.redirectToDashboard}
        >
          Unirse
        </Button>
      </Row>
    );
  }
  render() {
    return (
      <div className="lock-page">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" sm="6">
              <Form action="" className="form" method="">
                <Card className="card-lock text-center register-company">
                  {/* Circle with Icon */}
                  <Row className='justify-content-center m-0'>
                    <div className='circle-container'>
                      <FontAwesomeIcon icon={faBuilding} className='card-icons' />
                    </div>
                  </Row>

                  {/* Title */}
                  <Row className='justify-content-center m-0'>
                    <h4 className='register-title'>Crea tu cuenta</h4>
                  </Row>

                  {this.renderAccountData()}
                  {this.renderButtons()}

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

export default RegisterCompany;
