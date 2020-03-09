import React, { Fragment } from "react";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Stepper, Step, StepLabel } from '@material-ui/core';
// import Select from 'react-select';
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
//import COUNTRIES from './Countries-Data.js';
import './RegisterCandidate.scss';

class RegisterCandidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCandidate:{
        name: '',
        lastName: '',
        email: '',
        password: '',
        // gender: {
        //   label: '',
        //   value: '',
        // },
        // maritalStatus: {
        //   label: '',
        //   value: '',
        // },
        // document: '',
        // nacionality: {
        //   label: '',
        //   value: '',
        // },
        // telf: '',
        // address: '',
      },
      // activeStep: 0,
      // setActiveStep: 0,
    };
    // this.genderOptions = [
    //   { value: 1, label: 'Femenino'},
    //   { value: 2, label: 'Masculino'},
    // ];
    // this.maritalStatusOptions = [
    //   { value: 1, label: 'Soltero/a'},
    //   { value: 2, label: 'Casado/a'},
    //   { value: 3, label: 'Divorciado/a'},
    //   { value: 4, label: 'Viudo/a'},
    // ];
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

  // getSteps = () => (
  //   [
  //     <label className='select-label'>
  //       Datos de usuario
  //     </label>,
  //     <label className='select-label'>
  //       Datos Personales
  //     </label>,
  //     <label className='select-label'>
  //       Formación Académica
  //     </label>,
  //     <label className='select-label'>
  //       Experiencia Laboral
  //     </label>,
  //     <label className='select-label'>
  //       Conocimientos y habilidades
  //     </label>,
  //   ]
  // )

  // getStepContent = (step) => {
  //   switch (step) {
  //     case 0:
  //       return this.renderAccountData();
  //     case 1:
  //       return this.renderPersonalInformation();
  //     case 2:
  //       return 'En desarrollo'
  //     case 3:
  //       return 'En desarrollo'
  //     case 4:
  //       return 'En desarrollo'
  //     default:
  //       return 'En desarrollo';
  //   }
  // }
  //
  // handleNext = () => {
  //   let previusState = this.state.activeStep
  //   this.setState({ activeStep: (previusState + 1) })
  //
  // }
  //
  // handleBack = () => {
  //   let previusState = this.state.activeStep
  //   this.setState({ activeStep: (previusState - 1) })
  // }

  renderAccountData = () => {
    const { userCandidate } = this.state;
    return (
      <Fragment>
        <Row className='m-0'>
          <Col className='p-0'>
            <Row className='mx-4'>
              {/* Nombre */}
              <Col sm='6' className='pr-0'>
                <FormGroup>
                  <Row className='m-0 justify-content-start'>
                    <label className='select-label'>
                      Nombre
                    </label>
                  </Row>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      value={userCandidate.name}
                      onChange={({ target }) => {
                        this.setState({
                          userCandidate: {
                            ...userCandidate,
                            name: target.value,
                          }
                        });
                      }}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>

              {/* Apellido */}
              <Col sm='6'>
                <FormGroup>
                  <Row className='m-0 justify-content-start'>
                    <label className='select-label'>
                      Apellido
                    </label>
                  </Row>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-circle-10" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      value={userCandidate.lastName}
                      onChange={({ target }) => {
                        this.setState({
                          userCandidate: {
                            ...userCandidate,
                            lastName: target.value,
                          }
                        });
                      }}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>

            <Row className='mx-4'>
              {/* Correo*/}
              <Col sm='6' className='pr-0'>
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
                      value={userCandidate.email}
                      onChange={({ target }) => {
                        this.setState({
                          userCandidate: {
                            ...userCandidate,
                            email: target.value,
                          }
                        });
                      }}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              {/* Contraseña */}
              <Col sm='6'>
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
                      value={userCandidate.password}
                      onChange={({ target }) => {
                        this.setState({
                          userCandidate: {
                            ...userCandidate,
                            password: target.value,
                          }
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

  // renderPersonalInformation = () => {
  //   const { userCandidate } = this.state;
  //   return (
  //     <Fragment>
  //       <Row className='m-0'>
  //         <Col className='p-0'>
  //
  //           <Row className='mx-4'>
  //             {/* Género */}
  //             <Col sm='6' className='pr-0 justify-content-start'>
  //               <Row className='m-0 justify-content-start'>
  //                 <label className='select-label'>
  //                   Género
  //                 </label>
  //               </Row>
  //               <Select
  //                 disabled
  //                 closeMenuOnSelect
  //                 value={userCandidate.gender}
  //                 onChange={(option) => {
  //                   this.setState({
  //                     userCandidate: {
  //                       ...userCandidate,
  //                       gender: option,
  //                     }
  //                   });
  //                 }}
  //                 options={this.genderOptions}
  //               />
  //             </Col>
  //
  //             {/* Estado Civil */}
  //             <Col sm='6'>
  //                 <Row className='m-0 justify-content-start'>
  //                   <label className='select-label'>
  //                     Estado Civil
  //                   </label>
  //                 </Row>
  //                 <Select
  //                   closeMenuOnSelect
  //                   value={userCandidate.maritalStatus}
  //                   onChange={(option) => {
  //                     this.setState({
  //                       userCandidate: {
  //                         ...userCandidate,
  //                         maritalStatus: option,
  //                       }
  //                     });
  //                   }}
  //                   options={this.maritalStatusOptions}
  //                 />
  //             </Col>
  //           </Row>
  //
  //           <Row className='mx-4 mt-3'>
  //             {/* Número de Documento */}
  //             <Col sm='6' className='pr-0'>
  //               <FormGroup>
  //                 <Row className='m-0 justify-content-start'>
  //                   <label className='select-label'>
  //                     Número de Documento
  //                   </label>
  //                 </Row>
  //                 <Input
  //                   type="text"
  //                   value={userCandidate.document}
  //                   onChange={({ target }) => {
  //                     this.setState({
  //                       userCandidate: {
  //                         ...userCandidate,
  //                         document: target.value,
  //                       }
  //                     });
  //                   }}
  //                 />
  //               </FormGroup>
  //             </Col>
  //             {/* Nacionalidad */}
  //             <Col sm='6'>
  //               <FormGroup>
  //                 <Row className='m-0 justify-content-start'>
  //                   <label className='select-label'>
  //                     Nacionalidad
  //                   </label>
  //                 </Row>
  //                 <Select
  //                   placeholder=''
  //                   closeMenuOnSelect
  //                   value={userCandidate.nationality}
  //                   onChange={(option) => {
  //                     this.setState({
  //                       userCandidate: {
  //                         ...userCandidate,
  //                         nationality: option,
  //                       }
  //                     });
  //                   }}
  //                   options={COUNTRIES.map(data => (
  //                     {
  //                       value: data.code,
  //                       label: data.name
  //                     }
  //                   ))}
  //                 />
  //               </FormGroup>
  //             </Col>
  //           </Row>
  //
  //           <Row className='mx-4 mt-3'>
  //             {/* Teléfono */}
  //             <Col sm='6' className='pr-0'>
  //               <FormGroup>
  //                 <Row className='m-0 justify-content-start'>
  //                   <label className='select-label'>
  //                     Teléfono
  //                   </label>
  //                 </Row>
  //                 <Input
  //                   type="text"
  //                   value={userCandidate.telf}
  //                   onChange={({ target }) => {
  //                     this.setState({
  //                       userCandidate: {
  //                         ...userCandidate,
  //                         telf: target.value,
  //                       }
  //                     });
  //                   }}
  //                 />
  //               </FormGroup>
  //             </Col>
  //             {/* Dirección */}
  //             <Col sm='6'>
  //               <FormGroup>
  //                 <Row className='m-0 justify-content-start'>
  //                   <label className='select-label'>
  //                     Dirección
  //                   </label>
  //                 </Row>
  //                 <Input
  //                   type="text"
  //                   value={userCandidate.address}
  //                   onChange={({ target }) => {
  //                     this.setState({
  //                       userCandidate: {
  //                         ...userCandidate,
  //                         address: target.value,
  //                       }
  //                     });
  //                   }}
  //                 />
  //               </FormGroup>
  //             </Col>
  //           </Row>
  //
  //
  //         </Col>
  //       </Row>
  //     </Fragment>
  //   );
  // }
  //
  // renderEducationInformation = () => {
  //   return (
  //     <Col clasName='p-0'>
  //
  //       {/* Circle with Icon */}
  //       <Row className='justify-content-center'>
  //         <div className='circle-container'>
  //           <FontAwesomeIcon icon={faUser} className='card-icons' />
  //         </div>
  //       </Row>
  //
  //
  //       <CardBody>
  //         {/* Title */}
  //         <CardTitle className='register-title' tag="h4">Crea tu cuenta</CardTitle>
  //
  //
  //         <Row className='mx-2'>
  //           {/* Nombre */}
  //           <Col sm='6' className='pr-0'>
  //
  //             <InputGroup>
  //               <InputGroupAddon addonType="prepend">
  //                 <InputGroupText>
  //                   <i className="nc-icon nc-single-02" />
  //                 </InputGroupText>
  //               </InputGroupAddon>
  //               <Input placeholder="Nombre" type="text" />
  //             </InputGroup>
  //           </Col>
  //
  //           {/* Apellido */}
  //           <Col sm='6'>
  //             <InputGroup>
  //               <InputGroupAddon addonType="prepend">
  //                 <InputGroupText>
  //                   <i className="nc-icon nc-circle-10" />
  //                 </InputGroupText>
  //               </InputGroupAddon>
  //               <Input placeholder="Apellido" type="text" />
  //             </InputGroup>
  //           </Col>
  //         </Row>
  //
  //         <Row className='mx-2'>
  //           {/* Correo*/}
  //           <Col sm='6' className='pr-0'>
  //
  //               <InputGroup>
  //                 <InputGroupAddon addonType="prepend">
  //                   <InputGroupText>
  //                     <i className="nc-icon nc-email-85" />
  //                   </InputGroupText>
  //                 </InputGroupAddon>
  //                 <Input placeholder="Correo Electrónico" type="email" />
  //               </InputGroup>
  //           </Col>
  //           {/* Contraseña */}
  //           <Col sm='6'>
  //             <InputGroup>
  //               <InputGroupAddon addonType="prepend">
  //                 <InputGroupText>
  //                   <i className="nc-icon nc-lock-circle-open" />
  //                 </InputGroupText>
  //               </InputGroupAddon>
  //               <Input placeholder="Contraseña" type="email" />
  //             </InputGroup>
  //           </Col>
  //
  //         </Row>
  //       </CardBody>
  //
  //     </Col>
  //   );
  // }
  //
  // renderWorkExperiences = () => {
  //   return (
  //     <Col clasName='p-0'>
  //
  //       {/* Circle with Icon */}
  //       <Row className='justify-content-center'>
  //         <div className='circle-container'>
  //           <FontAwesomeIcon icon={faUser} className='card-icons' />
  //         </div>
  //       </Row>
  //
  //
  //       <CardBody>
  //         {/* Title */}
  //         <CardTitle className='register-title' tag="h4">Crea tu cuenta</CardTitle>
  //
  //
  //         <Row className='mx-2'>
  //           {/* Nombre */}
  //           <Col sm='6' className='pr-0'>
  //
  //             <InputGroup>
  //               <InputGroupAddon addonType="prepend">
  //                 <InputGroupText>
  //                   <i className="nc-icon nc-single-02" />
  //                 </InputGroupText>
  //               </InputGroupAddon>
  //               <Input placeholder="Nombre" type="text" />
  //             </InputGroup>
  //           </Col>
  //
  //           {/* Apellido */}
  //           <Col sm='6'>
  //             <InputGroup>
  //               <InputGroupAddon addonType="prepend">
  //                 <InputGroupText>
  //                   <i className="nc-icon nc-circle-10" />
  //                 </InputGroupText>
  //               </InputGroupAddon>
  //               <Input placeholder="Apellido" type="text" />
  //             </InputGroup>
  //           </Col>
  //         </Row>
  //
  //         <Row className='mx-2'>
  //           {/* Correo*/}
  //           <Col sm='6' className='pr-0'>
  //
  //               <InputGroup>
  //                 <InputGroupAddon addonType="prepend">
  //                   <InputGroupText>
  //                     <i className="nc-icon nc-email-85" />
  //                   </InputGroupText>
  //                 </InputGroupAddon>
  //                 <Input placeholder="Correo Electrónico" type="email" />
  //               </InputGroup>
  //           </Col>
  //           {/* Contraseña */}
  //           <Col sm='6'>
  //             <InputGroup>
  //               <InputGroupAddon addonType="prepend">
  //                 <InputGroupText>
  //                   <i className="nc-icon nc-lock-circle-open" />
  //                 </InputGroupText>
  //               </InputGroupAddon>
  //               <Input placeholder="Contraseña" type="email" />
  //             </InputGroup>
  //           </Col>
  //
  //         </Row>
  //       </CardBody>
  //
  //     </Col>
  //   );
  // }
  //
  // renderAbilitiesInformation = () => {
  //   return (
  //     <Col clasName='p-0'>
  //
  //       {/* Circle with Icon */}
  //       <Row className='justify-content-center'>
  //         <div className='circle-container'>
  //           <FontAwesomeIcon icon={faUser} className='card-icons' />
  //         </div>
  //       </Row>
  //
  //
  //       <CardBody>
  //         {/* Title */}
  //         <CardTitle className='register-title' tag="h4">Crea tu cuenta</CardTitle>
  //
  //
  //         <Row className='mx-2'>
  //           {/* Nombre */}
  //           <Col sm='6' className='pr-0'>
  //
  //             <InputGroup>
  //               <InputGroupAddon addonType="prepend">
  //                 <InputGroupText>
  //                   <i className="nc-icon nc-single-02" />
  //                 </InputGroupText>
  //               </InputGroupAddon>
  //               <Input placeholder="Nombre" type="text" />
  //             </InputGroup>
  //           </Col>
  //
  //           {/* Apellido */}
  //           <Col sm='6'>
  //             <InputGroup>
  //               <InputGroupAddon addonType="prepend">
  //                 <InputGroupText>
  //                   <i className="nc-icon nc-circle-10" />
  //                 </InputGroupText>
  //               </InputGroupAddon>
  //               <Input placeholder="Apellido" type="text" />
  //             </InputGroup>
  //           </Col>
  //         </Row>
  //
  //         <Row className='mx-2'>
  //           {/* Correo*/}
  //           <Col sm='6' className='pr-0'>
  //
  //               <InputGroup>
  //                 <InputGroupAddon addonType="prepend">
  //                   <InputGroupText>
  //                     <i className="nc-icon nc-email-85" />
  //                   </InputGroupText>
  //                 </InputGroupAddon>
  //                 <Input placeholder="Correo Electrónico" type="email" />
  //               </InputGroup>
  //           </Col>
  //           {/* Contraseña */}
  //           <Col sm='6'>
  //             <InputGroup>
  //               <InputGroupAddon addonType="prepend">
  //                 <InputGroupText>
  //                   <i className="nc-icon nc-lock-circle-open" />
  //                 </InputGroupText>
  //               </InputGroupAddon>
  //               <Input placeholder="Contraseña" type="email" />
  //             </InputGroup>
  //           </Col>
  //
  //         </Row>
  //       </CardBody>
  //
  //     </Col>
  //   );
  // }

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
    // const { activeStep } = this.state;
    // const steps = this.getSteps();
    return (
      <div className="lock-page">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" sm="9">
              <Form action="" className="form" method="">
                <Card className="card-lock text-center register-candidate">
                  {/* Circle with Icon */}
                  <Row className='justify-content-center m-0'>
                    <div className='circle-container'>
                      <FontAwesomeIcon icon={faUser} className='card-icons' />
                    </div>
                  </Row>

                  {/* Title */}
                  <Row className='justify-content-center m-0'>
                    <h4 className='register-title'>Crea tu cuenta</h4>
                  </Row>

                  {/*<Stepper
                    activeStep={activeStep}
                    alternativeLabel
                    className='pt-1'
                  >
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      return (
                        <Step {...stepProps} key={index} className={activeStep >= index ? 'IsActive' : null}>
                          <StepLabel {...labelProps}>
                            {label}
                          </StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>*/}

                {/* Body */}
                {/*this.getStepContent(activeStep)*/}
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

export default RegisterCandidate;
