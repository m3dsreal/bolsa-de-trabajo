import React from "react";
//import classnames from "classnames";
// reactstrap components
import {
  // Button,
  Card,
  // CardHeader,
  // CardBody,
  // CardFooter,
  // Label,
  // FormGroup,
  Form,
  // // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";

class RegisterCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  render() {
    return (
      <div className="login-page">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" sm="9">
              <Form action="" className="form" method="">
                <Card className="card-login">

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

export default RegisterCompany;
