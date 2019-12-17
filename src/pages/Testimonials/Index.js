import React from 'react';
import './Testimonials.scss';  

import BasicForm from '../../components/BasicForm'; 
import fivestars from '../../Images/testimonials/five-stars-reviews.png';
import styled from 'styled-components';
import Footer from '../../components/Footer'; 
import Questions from '../../components/Questions'; 

const PushDownSection = styled.section`
  margin-top:30px; 
`;

const GetCashOfferbtnStyle = {
  background: '#f04134',
  color: 'white',
  marginTop: '63px',
  padding: '15px',
  width: '330px',
  bottom: '50px',
};

  const Testimonials = () =>{
    return (<div> 
      <section className="container-fluid tinted-image"> 
          <h1 className="faq-header text-center"> We Buy Ugly Houses Reviews from Recent Sellers. </h1>
          <h3 className="index-h3 text-center">Find out what people are asking about We Buy Ugly Houses®. </h3>
          <div className="s130">
            <form>
              <div className="inner-form">
                <div className="input-field first-wrap">
                  <div className="svg-wrapper">
                    <img src="https://img.icons8.com/material-outlined/25/000000/marker.png" />
                    {/* font-size: 30px; */}
                  </div>
                  <input className="searchTextField" id="searchTextField" type="text" placeholder="Enter your street address" />
                </div>
                <div className="input-field second-wrap">
                  <button className="btn-search" type="button">Get a Cash Offer Now</button>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* SECOND Container */}
        <div>
          <div className="row">
            <div className="col-sm-7 col-xs-12 left-faq">                  
              
            <h1 className="almost-done-yellow-top push-down2">
                    Why We're America's #1 Home Buyer.
                </h1>


                <div className="text-center push-down">
                    <p className="p-above-leading push-down">WE BUY UGLY HOUSES REVIEWS & TESTIMONIALS</p>
                </div>

              
                <p className="testi-page-p push-down">Unlike other home buyers, we buy your house “as is.” Read house buyer reviews & testimonials below. </p>
            

                <div className="list">
                  <ul>
                  <li className="testi-page-li">No Painting </li>
                  <li className="testi-page-li">No Repairs </li>
                  <li className="testi-page-li">No worrying </li>
                  <li className="testi-page-li">No Hassles</li>
                </ul>
                </div>

                <div className="row push-down">
                  <div className="col-sm-12 col-xs-12">  
                      <h6 className="testiPage-header-h6">
                          Morris H. (Flint, Michigan)
                      </h6>
                      
                      <div className="text-left">
                          <img className="testiPage-fivestar" src={fivestars} alt="" /> 
                      </div>  

                      <p className="testiPage-p">  Very relaxed, no pressure and on my timeline.</p> 
                      <hr className="testiPage-hr" />
                    </div>
                </div>

                <div className="row push-down">
                    <div className="col-sm-12 col-xs-12">  
                        <h6 className="testiPage-header-h6 text-center">
                            Melody W. (Hyannis, Massachusetts)
                        </h6>
                        
                        <div className="text-left">
                            <img className="testiPage-fivestar" src={fivestars} alt="" /> 
                        </div>     
                        <p className="testiPage-p">  It was a great experience.we had some hurdles along the way ..but they worked with usand we are happy how it all turned out
                          </p> 
                        <hr className="testiPage-hr" />
                      </div>
                  </div>

                  <div className="row push-down">
                      <div className="col-sm-12 col-xs-12">  
                          <h6 className="testiPage-header-h6">
                              Janenne M. (Yorktown, Virginia)
                          </h6>
                          
                          <div className="text-left">
                              <img className="testiPage-fivestar" src={fivestars} alt="" /> 
                          </div>     
                          <p className="testiPage-p">  The gentlemen I worked with were great! They made this process so easy and were very fair in their offer. I would not hesitate to recommend Home Vestors!!</p> 
                          <hr className="testiPage-hr" />
                        </div>
                    </div>
                    
                    <div className="row push-down">
                        <div className="col-sm-12 col-xs-12">  
                            <h6 className="testiPage-header-h6">
                                Pierre Y. (Saint Louis, Missouri)
                            </h6>
                            
                            <div className="text-left">
                                <img className="testiPage-fivestar" src={fivestars} alt="" /> 
                            </div>     
                            <p className="testiPage-p">  My HomeVestors representative dealt with me in a fair and professional manner and bought my house when I needed to sell it quickly.</p> 
                            <hr className="testiPage-hr" />
                          </div>
                      </div>
                      
                      
                      <div className="row push-down">
                          <div className="col-sm-12 col-xs-12">  
                              <h6 className="testiPage-header-h6">
                                  Andrei B. (ARVADA, Colorado)
                              </h6>
                              
                              <div className="text-left">
                                  <img className="testiPage-fivestar" src={fivestars} alt="" /> 
                              </div>     
                              <p className="testiPage-p"> Thank you Ryan and Vivianne for helping me get red of an "Ugly House".It was an easy and painless process. </p> 
                              <hr className="testiPage-hr" />
                            </div>
                        </div>      
                        
                      

                         <div className="text-center">
                          <button type="submit" className="btn"  style={GetCashOfferbtnStyle} >
                            Get Cash Offer Now
                          </button>
                    </div> 



            
            </div>  
            {/* col end */}
            <div className="col-sm-5 col-xs-12 right-faq">  
              <h2 className="right-faq-h1 text-center"> Request a free, no obligation consultation.</h2>                
              <div className="row">
                <div className="col-sm-12 col-xs-12"> 
                  <BasicForm />

                </div>
              </div>
            </div>
          </div>
        </div>
      
          <PushDownSection>
          <Questions /> 
            <Footer />
          </PushDownSection>
      {/* <StyledComponent /> */}      

      </div>); 
}



export default Testimonials; 