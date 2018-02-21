import React, { Component } from 'react';
import { Nav, NavItem, Grid, Row, Col, Button, Jumbotron, Glyphicon } from 'react-bootstrap';
import { FormGroup, Label, Input } from 'reactstrap';
import { Logo }from '../../components/Logo';
import Optus from '../../Optus.json';
// import { P, Span, Sticky }from '../../components/Tag';
import './login.css';

class Login extends Component{
    
    componentWillMount(){
        // this.setState({Optus: Optus});
    };
    componentDidMount() {
        this.setState({user: localStorage.getItem("user")});
    };
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            render: '',
            user: '',
            // optus: [], 
        };
    };

    handleSelect = (eventKey, user) => {
        if(eventKey === 4){
            localStorage.setItem("user", user)
            window.location = "/register";
        }
    };   

    render(){
        
        return(
// This Block Render Acesso de Conta
            <div>
            <Grid>
                <Row>
                    <Col xs={12} md={8} mdOffset={2}>
                        <Col md={12}><h1><Logo src={Optus[0].logo}/>{' '}ACESSE SUA CONTA OPTUS</h1></Col>
                        <Col md={12}>
                            <a href="/">
                                <Glyphicon glyph="home" />{" - "}INICIO
                            </a>
                        </Col>
                        <Col md={12}><hr/></Col>
                        <Col md={12}><p>Utilize o formulário abaixo para acessar a sua conta.</p></Col>
                        <Col md={12}><p>Informe o email e senha cadastrados em nosso site.</p></Col>
                        <Col md={12}>
                        <FormGroup check>
                        {this.state.user !== 'undefined' ? 
                            <Label check>
                            <Input type="radio" name="radio1" value={this.state.user} defaultChecked/>{' '}
                            {this.state.user}
                            </Label>
                        : 
                        <span>
                        <Label>
                            <Input type="radio" name="radio1" value='INDIVIDUAL'/>{' '}
                            INDIVIDUAL
                        </Label>
                        <br/>
                        <Label>
                            <Input type="radio" name="radio1" value='EMPRESARIAL'/>{' '}
                            EMPRESARIAL
                        </Label>   
                        </span>                         
                        }
                        </FormGroup>
                        </Col>
                        <br/>                        
                        <Col md={12}>
                        <p>Email:<Input type="email" name="email" id="email_id" placeholder="" /></p>
                        </Col>
                        <Col md={12}>
                            <p>Senha:<Input type="password" name="password" id="password_id" placeholder="" /></p>
                        </Col>
                        <Col md={12}>
                            <Button bsStyle="primary" bsSize="large" onClick={()=>{console.log('Submit')}}>Acessar</Button>
                        </Col>
                        <br/>
                        <Col md={12} style={{marginTop: "20px"}}>
                        <Nav>
                            <NavItem eventKey={6} onSelect={this.handleSelect}>
                                <p>Esqueci minha senha</p>
                            </NavItem>
                        </Nav>
                        </Col>
                        <br/>
                        <Col md={12}>
                        <h2>Não possui cadastro?</h2>
                        <hr/>
                        <Nav>
                            <NavItem onClick={()=>{this.handleSelect(4, 'INDIVIDUAL')}}>
                                <p>>Cadastre seu curriculo.</p>
                            </NavItem>
                            <NavItem onClick={()=>{this.handleSelect(4, 'EMPRESARIAL')}}>
                                <p>>Cadastre sua empresa.</p>
                            </NavItem>
                        </Nav>
                        </Col>

                    </Col>
                </Row>
            </Grid>
            </div>
        )
    }
}

export default Login;