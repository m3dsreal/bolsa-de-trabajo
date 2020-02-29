import React from "react";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";

import './RegisterCandidate.scss';

class RegisterCandidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  clickChoice = choiceName => {
    this.setState({
      [choiceName]: !this.state[choiceName]
    });
  };
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  render() {
    return (
      <div className="lock-page">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" sm="9">
              <Form action="" className="form" method="">
                <Card className="card-lock text-center register-candidate">

                  {/* Circle with Icon */}
                  <Row className='justify-content-center'>
                    <div className='circle-container'>
                      <FontAwesomeIcon icon={faUser} className='card-icons' />
                    </div>
                  </Row>


                  <CardBody>
                    {/* Title */}
                    <CardTitle className='register-title' tag="h4">Crea tu cuenta</CardTitle>


                    <Row className='mx-2'>
                      <Col sm='6' className='pr-0'>
                        {/* Nombre */}
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Nombre" type="text" />
                        </InputGroup>
                      </Col>

                      <Col sm='6'>
                        {/* Apellido */}
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-circle-10" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Apellido" type="text" />
                        </InputGroup>
                      </Col>
                    </Row>

                    <Row className='mx-2'>
                      <Col sm='6' className='pr-0'>
                          {/* Correo*/}
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="nc-icon nc-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Correo Electrónico" type="email" />
                          </InputGroup>
                      </Col>
                      <Col sm='6'>
                        {/* Contraseña */}
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Contraseña" type="email" />
                        </InputGroup>
                      </Col>

                    </Row>
                  </CardBody>



                  {/* Button */}
                  <Row className='justify-content-end' style={{ marginBottom: '15px', marginRight: '36px'}}>
                    <Button
                      className="btn-round"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      outline
                    >
                      Siguiente
                    </Button>
                  </Row>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("assets/img/bg/fabio-mangione.jpg")})`
          }}
        />
      </div>
    );
  }
}

export default RegisterCandidate;
