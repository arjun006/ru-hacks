import React from 'react';
import { MDBCol, MDBIcon, MDBContainer , MDBAnimation } from "mdbreact";
import sprint from '../assets/images/banana.jpg'



class Home extends React.Component{
    render(){
        return(
            <div className="Home d-flex justify-content-center align-items-center flex-row h-100">
                    <img src= {sprint} className='img-fluid' alt = 'Lemon Picture'></img>
                <MDBContainer fluid> 
                    <MDBCol className="text-center">
                    <MDBAnimation type="fadeInLeft" duration = '2s'>
                        <h1>Welcome to e-Munity</h1>
                        <h3>Where you can see your nutrition</h3>
                    </MDBAnimation>
                    </MDBCol>
                    <MDBCol className="text-center mt-5">
                    <MDBAnimation type="fadeInRight" duration = '3s'>
                        <a className="btn pr-4" href="/form" role="button">See Nutrition info <MDBIcon far icon="eye" className='eye-icon' /></a>
                        <a className="btn pr-4" href="/report" role="button">View Sales Report <MDBIcon far icon="eye" className='eye-icon' /> </a>
                    </MDBAnimation>  
                    </MDBCol>
                </MDBContainer>
            </div>
        )
    }
}
  
  export default Home;
  