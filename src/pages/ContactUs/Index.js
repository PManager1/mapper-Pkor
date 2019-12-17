import React from 'react';
import styled from 'styled-components'; 
import { Col, Row, Container } from 'react-bootstrap';
import Footer from '../../components/Footer'; 

import { Formik } from 'formik'
import { Form, Input, PhoneInput, Select, SubmitBtn } from 'react-formik-ui';
import quote from '../../Images/faq/quote.png'; 


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #4a4244; 
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const CommentP = styled.p`
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
    max-width: 900px;
    text-align: center;
    color: #7a6f71; 
    margin-bottom: 40px;
    margin: 0 auto;
`;

const Name = styled.p`
display: block; 
font-size: 14px;
font-weight: 300;
line-height: 46px;
font-weight: 600; 
text-align: center;
color: #7a6f71; 
font-size: 20px;
margin-bottom: 40px;
margin: 0 auto;
`;



const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  font-size: 20px;
  margin: 0.5em 0;
  position: relative;
`;


const GetCashOfferbtnStyle = {
  background: '#f04134',
  color: 'white',
  marginTop: '63px',
  padding: '15px',
  width: '330px',
  bottom: '50px',
};


const GetCashOfferbtn = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const BothInput = styled.section`
  background: #f8f8f8;
`;


const ConfirmAddressSection = styled.section`
  border-right: 1px dashed lightgray;
  padding-left: 20px; 
  padding-right: 20px; 
`;

const AddContactSection = styled.section`
  padding-left: 20px; 
  padding-right: 20px; 
`;

const Wrapper = styled.section`
  background: #f8f8f8; 
`;


const customzedInput = {
  background: 'red !important',
}


const RequestFreeConsultationH1 = styled.h1`
  font-size: 80px;
  line-height: 80px;
  margin-top: 17px; 
  color: white; 
  font-size: 50px;
  font-weight: 600;
  line-height: 1.3;
  max-width: 890px;
  margin: 0 auto;
  `;

  const CallH3 = styled.h3`
  font-size: 30px !important;
  line-height: 80px;
  margin-top: 17px; 
  color: #FFF !important; 
  font-size: 50px;
  font-weight: 600;
  line-height: 1.3;
  max-width: 890px;
  margin: 0 auto;
  margin-top: 25px; 
  // max-width: 890px;
  opacity:.6;
  `; 
  
const BgGreen = styled.section`
  background: #22bcb9;
  color: #4a4244;
`; 


const ContactUs = () =>{
        return <div> 
  
          <BgGreen className="container-fluid">
                  <RequestFreeConsultationH1> Request a Free, No Obligation Consultation.</RequestFreeConsultationH1>
                  <CallH3 >Or Call  <a href="tel:123-456-7890"> 408-457-0085</a></CallH3>
                    <br />
          </BgGreen>



          {/* Process Container */}

            
          <BothInput className="container-fluid ">

          <Formik
            initialValues={{
              textFieldExample3: '',
              FirstName: '', 
              LastName: '', 
            }}

            onSubmit={data => (alert(JSON.stringify(data)))}
            render={() => (
              <Form mode='themed'>
                
                
                <div className="row push-down">

                    <ConfirmAddressSection  className="col-sm-6 col-xs-12 text-center "> 

                          <Title>      
                              <span className="asmanicolor">1.</span>  Add Property Address
                          </Title>

                            <Input
                              className='customzedInput'
                              required={true}
                              name='Street Address'
                              label='Street Address'
                              // style=''
                            />      


                            <Input
                              required={true}
                              name='City'
                              label='City'
                            />      

                            <Select
                              name='State'
                              placeholder='CA'
                              options={[
                                { value: '1', label: 'AK' },
                                { value: '2', label: 'AZ' },
                                { value: '3', label: 'CA' },
                                { value: '4', label: 'DC' },
                                { value: '5', label: 'LA' },
                                { value: '6', label: 'MD' },
                              ]}
                            />    

                            <Input
                              required={true}
                              name='Zip'
                              label='Zip'
                            />            

                            </ConfirmAddressSection>
                      


                    <AddContactSection className="col-sm-6 col-xs-12 text-center"> 
                      <Title>      
                          <span className="asmanicolor">2.</span>    Add Contact Info
                      </Title>


                        <Input
                          required={true}
                          name='FirstName'
                          label='First Name'
                        />

                        <Input
                          required={true}
                          name='LastName'
                          label='Last Name'
                        />


                      <PhoneInput
                              name='phoneNr5'
                              label='Phone Nr.'
                              format='NATIONAL'
                              defaultCountry='us'
                              placeholder='(555) 555-5555'
                            />
                  
                      <Input
                          required={true}     
                          name='Email'
                          label='Email'
                        />    
                      </AddContactSection>                                                        

                  </div> 
                  

                
                <div className="text-center">
                    <button type="submit" className="btn"  style={GetCashOfferbtnStyle} >
                      Get Cash Offer Now
                    </button>
                    </div> 
              </Form>
            )}
          />

    </BothInput>   
          

    {/* comment */}
      <section className="container-fluid">
        <div className="row">
          
        <div className="text-center">
                 <img src={quote} alt="" />
              

           <CommentP>
              My wife and I had been engaged in a financial tailspin with no relief in sight. We turned to HomeVestors for assistance and it was the smartest decision we ever made. From our initial contact to closing, everything moved along in a fluid and professional manner. They gave us a new lease on life in three weeks!                         
              </CommentP> 
              </div> 
        </div> 
        <div className="row">
                  <Name className="text-center"> Brian and Ulla C. </Name>   
        </div>                        

      </section>


          {/* yellow  */}
          <div className="yellow-footer-cta">  
                  <div className="container-fluid bg-yellow-lower">
                    <h4 className="almost-done-yellow-top"> Questions?</h4>   
                    <div className="row">
                      <div className="col-sm-4 col-xs-12">
                        <h4 className="almost-done-yellow-head"> WHO TYPICALLY SELLS HOUSES TO WE BUY UGLY HOUSES? </h4>                    
                        <p className="yellow-para">People from all walks of life sell to us, but they all share one thing in common: they need to sell a house quickly to a trusted home buyer who can make a cash offer and close on their schedule. …</p>
                        <a href="https://www.w3schools.com" className="read-more"> Read More</a>
                      </div>
                      <div className="col-sm-4 col-xs-12">
                        <h4 className="almost-done-yellow-head"> WHAT IF MY HOUSE ISN'T UGLY? </h4>                    
                        <p className="yellow-para">We’d still like to hear from you. Our buyers are interested in houses that might be good investments, regardless of condition. Whether your house needs minimal work or a lot, call us. …</p>
                        <a href="https://www.w3schools.com" className="read-more"> Read More</a>
                      </div>
                      <div className="col-sm-4 col-xs-12">
                        <h4 className="almost-done-yellow-head"> HOW DOES THE HOUSE BUYING PROCESS WORK? </h4>                    
                        <p className="yellow-para">We follow a quick and simple process that makes things easy for sellers: 1.) Call us. 2.) Get your cash offer. 3.) Close on your schedule. …</p>
                        <a href="https://www.w3schools.com" className="read-more"> Read More</a>
                      </div>                    
                    </div>
                    <div className="quest-bk" /> 
            </div>
          </div>
                <Footer />
    </div>


}

export default ContactUs; 