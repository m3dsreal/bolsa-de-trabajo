import React, { Fragment } from "react";
import { history } from '../../helpers/history.js';
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
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.logIn = props.loginUserAccount;
  }

  // componentWillMount() {
  //   const { user } = this.props;
  //   if (user) {
  //     this.redirectToDashboard();
  //   }
  // }

  componentDidMount() {
    document.body.classList.toggle("login-page");
  }

  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  redirectToDashboard = () => {
    history.push('/public/dashboard');
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.logIn({ email, password })
      .then(response => {
        this.redirectToHome();
      })
      .catch(err => err);
  }

  render() {
    const { email, password } = this.state;
    return (
      <Fragment>
        <AuthNavbar />
        <div className="login-page">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Form className="form" onSubmit={this.redirectToDashboard}>
                  <Card className="card-login">

                    <CardHeader>
                      {/* Title */}
                      <CardHeader>
                        <h3 className="header text-center">Login</h3>
                      </CardHeader>
                    </CardHeader>

                    <CardBody>
                      {/* Email */}
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Correo"
                          type="text"
                          value={email}
                          onChange={({ target }) => {
                            this.setState({
                              email: target.value,
                            });
                          }}
                        />
                      </InputGroup>
                      {/* Password */}
                      <InputGroup className='mb-1'>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-key-25" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Contraseña"
                          type="password"
                          autoComplete="off"
                          value={password}
                          onChange={({ target }) => {
                            this.setState({
                              password: target.value,
                            });
                          }}
                        />
                      </InputGroup>
                    </CardBody>

                    <CardFooter>
                      <Button
                        block
                        className="btn-round mb-3"
                        color="primary"
                        disabled={email.length < 3 || password.length < 3}
                      >
                        Iniciar sesión
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
