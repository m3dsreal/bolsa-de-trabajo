import React, { Fragment } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";

class Login extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  render() {
    return (
      <Fragment>
        <AuthNavbar />
        <div className="login-page">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Form action="" className="form" method="">
                  <Card className="card-login">
                    <CardHeader>
                      <CardHeader>
                        <h3 className="header text-center">Login</h3>
                      </CardHeader>
                    </CardHeader>
                    <CardBody>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="First Name..." type="text" />
                      </InputGroup>
                      <InputGroup className='mb-1'>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-key-25" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          autoComplete="off"
                        />
                      </InputGroup>
                    </CardBody>
                    <CardFooter>
                      <Button
                        block
                        className="btn-round mb-3"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Get Started
                      </Button>
                    </CardFooter>
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
      </Fragment>
    );
  }
}

export default Login;
