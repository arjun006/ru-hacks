import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';



class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this)
    }

    onClick =()=>{
        
        this.setState(prevState => ({
            collapse:!prevState.collapse
        }));
        console.log(this.state.collapse)
    }

    render(){
        return(
                <MDBNavbar class='nav' fixed="top" dark expand="md">
                <MDBNavbarBrand href="/">
                    <strong>e-Munity</strong>
                </MDBNavbarBrand>
                {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                <MDBCollapse isOpen={this.state.collapse} navbar className='text-center'>
                    <MDBNavbarNav>
                    <MDBNavItem>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/form">Form</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/report">Report</MDBNavLink>
                    </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
                </MDBNavbar>
        )
    }
}
    

export default Navbar