import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel, Grid, Row, Col, Table, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Logo }from '../../components/Logo';
import { P, Span, Sticky }from '../../components/Tag';
import './register.css';

class Register extends Component{
    
    componentWillMount(){
        // this.setState({Optus: Optus});
    };
    componentDidMount() {
        var test = localStorage.getItem("user");
        this.setState({user: localStorage.getItem("user")});
        console.log("Aqui"+ this.state.user);
        console.log(test);
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

    handleSelect = (eventKey) => {
        if(eventKey === 4){
            window.location = "/register";
        }else{
        this.setState({render: eventKey});
        }
    };
    

    render(){
        
        return(
// This Block Render Cadastro de Usuario
            <div>
                <Grid>        
                    <Row>
                        <Col xs={12} md={8} mdOffset={2}>
                            <Col md={12}><h2>CADASTRO {this.state.user}</h2></Col>
                            <Col md={12}><p>Cadastre seu curriculo em nosso site.</p></Col>
                            <Col md={12}>
                                <a href="/">
                                    <Glyphicon glyph="home" />{" - "}INICIO
                                </a>
                            </Col>
                            <Col md={12}><h3>Dados Basicos</h3></Col>
                            <Col md={12}><hr/></Col>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                <Input placeholder="Email" />
                            </InputGroup>


                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}



export default Register;