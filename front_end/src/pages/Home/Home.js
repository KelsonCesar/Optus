import React, { Component } from 'react';
import { Navbar, Header, Brand, Nav, NavItem, NavDropdown, MenuItem,  } from 'react-bootstrap';
import { Logo, Img }from '../../components/Logo';
import './home.css';

class Home extends Component{
    
    componentDidMount() {
        
      };
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            img: 'http://res.cloudinary.com/promanager/image/upload/v1518236844/favicon.ico_cgdh2n.png'
        };
    };
    render(){
        
        return(
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand"><Logo src={this.state.img}/></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {/* <Nav>
                        <NavItem eventKey={1} href="#">
                        Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                        Link
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav> */}
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                        SOBRE NOS
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                        PARA VOCE
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                        PARA EMPRESAS
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}



export default Home;