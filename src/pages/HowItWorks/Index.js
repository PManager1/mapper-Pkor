import React from 'react';
// import './Testimonials.scss';  

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

const BgYellow = styled.section`
  height: 183px;
  background: #f9d507;
  color: #4a4244;
`; 

const BgYellowInnerP = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  max-width: 870px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`; 

const BenefitsH2 = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.4;
  margin: 5px 0 15px;
  position: relative;
  color: #505050;
  text-align: left;
  margin-bottom: 40px; 
`;

const BenefitsP = styled.p`
  color: #7a6f71;
  line-height: 34px;
  margin-top:14px;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 40px; 
`;

const BottomP = styled.p`
  color: #7a6f71;
  line-height: 34px;
  margin-top:14px;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 100px;
`;

const BgDarkGreen = styled.section`
  background: #22bcb9; 
  color: #4a4244;
`; 

const SellUsYourHouse = styled.h1`
  font-size: 45px;
  font-weight: 700;
  line-height: 80px;
  font-weight: bolder;
  color: #4a4244;
  width: 80%; 
  margin-bottom: 45px; 
`;

  const HowItWorks = () =>{
    return (<div> 
      <section className="container-fluid tinted-image"> 
          <h1 className="faq-header text-center"> How it works ?</h1>
          <h3 className="index-h3 text-center">Getting Cash For Your House Is Easier Than You Think. </h3>
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

        <BgYellow className="container-fluid">
                  <BgYellowInnerP> We Buy Houses for Cash, The Good, The Bad and The Ugly℠. No gimmicks, no false promises, just fast cash for your house. Here’s how it works.
                  </BgYellowInnerP>
                  
                    <br />
          </BgYellow>


        <div>
          <div className="row">
            <div className="col-sm-7 col-xs-12 left-faq">                  
              
            <h1 class="almost-done-yellow-top push-down2">
                    We Buy Houses Ugly or Not℠
                </h1>


                <div class="text-center push-down">
                    <p class="p-above-leading push-down"> (Rem) WE BUY UGLY HOUSES REVIEWS & HowItWorks</p>
                </div>

              
                <p class="testi-page-p push-down"> We have local professional home buyers in your area ready to answer any questions you may have about selling your house. Call 866-200-6475 or fill out the form for a fast cash offer. </p>
            

                <div class="row push-down">
                  <div class="col-sm-12 col-xs-12">  
                   <BenefitsH2 class="testiPage-header-h6 text-center">
                       <span className="asmanicolor">1.</span>  Speak With an Expert. 
                   </BenefitsH2>
                      
                      <BenefitsP>  HomeVestors, the ‘We Buy Ugly Houses® People’, is the most trusted name in the business, operating by the highest systems and standards in the industry.</BenefitsP> 
                      <hr class="testiPage-hr" />
                    </div>
                </div>


                <div class="row push-down">
                  <div class="col-sm-12 col-xs-12">  
                   <BenefitsH2 class="testiPage-header-h6 text-center">
                       <span className="asmanicolor">2.</span>  We Visit Your House. 
                   </BenefitsH2>
                      
                      <BenefitsP>  We meet with you to understand your situation. You don’t have to spend a dime to fix up your house. You don’t even have to clean it up. We pay cash for your house, as is. It’s just that simple.</BenefitsP> 
                      <hr class="testiPage-hr" />
                    </div>
                </div>



                <div class="row push-down">
                  <div class="col-sm-12 col-xs-12">  
                   <BenefitsH2 class="testiPage-header-h6 text-center">
                       <span className="asmanicolor">3.</span>  Receive a Cash Offer. 
                   </BenefitsH2>
                      
                      <BenefitsP>  HomeVestors® pays cash so there is no waiting for mortgage approvals. After a property analysis is completed, we can make a cash offer. This typically gives us the ability to close – and put cash in your hands – much more quickly.</BenefitsP> 
                      <hr class="testiPage-hr" />
                    </div>
                </div>


                <div class="row push-down">
                  <div class="col-sm-12 col-xs-12">  
                   <BenefitsH2 class="testiPage-header-h6 text-center">
                       <span className="asmanicolor">4.</span>  We Pay Typical Closing Costs. 
                   </BenefitsH2>
                      
                      <BenefitsP>  When you sell your house to us, you’ll save even more money because we pay typical closing costs – less for you to worry about!</BenefitsP> 
                      <hr class="testiPage-hr" />
                    </div>
                </div>


                <div class="row push-down">
                  <div class="col-sm-12 col-xs-12">  
                   <BenefitsH2 class="testiPage-header-h6 text-center">
                       <span className="asmanicolor">5.</span> Move On. 
                   </BenefitsH2>
                      
                      <BenefitsP>  We typically close quickly, so you can move on with your life. Selling your house through traditional methods can take months or even years- if it sells at all. It takes a lot of effort and finances to make the repairs necessary to list a house, not to mention the time and headaches involved in closing. We buy all kinds of investment houses, and we can close quickly or allow as much time as you need.</BenefitsP> 
                      <hr class="testiPage-hr" />
                    </div>
                </div>



                <div class="row push-down">
                  <div class="col-sm-12 col-xs-12">                      
                      <BottomP>  Don’t forget we pay cash, cover closing costs, buy as-is, and move fast. Call us at 866-200-6475 today!</BottomP> 
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
      


        <BgDarkGreen className="container-fluid">
            <div className="row text-center"> 
                  <SellUsYourHouse className="text-center"> Sell Us Your Ugly House </SellUsYourHouse>

            </div>     

          {/* <div className="container-fluid">  */}
              <div className="row"> 
                    <div className="col-sm-6 col-xs-12">
                        <article className="left-list">
                              <ul>
                              <li className="how-it-works-li"><span className="tickblue">✔</span>  Structural issues </li>
                              <li className="how-it-works-li"><span className="tickblue">✔</span>  Facing foreclosure </li>
                              <li className="how-it-works-li"><span className="tickblue">✔</span>  Relocation or job transfer </li>
                              <li className="how-it-works-li"><span className="tickblue">✔</span>  Undesirable neighborhoods</li>
                              <li className="how-it-works-li"><span className="tickblue">✔</span>  Divorce</li>
                              <li className="how-it-works-li"><span className="tickblue">✔</span>  Need for cosmetic fix-up</li>
                              <li className="how-it-works-li"><span className="tickblue">✔</span>  Retirement or downsizing</li>
                            </ul>
                          </article>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                          <article className="list">
                                  <ul>
                                  <li className="how-it-works-li"><span className="tickblue">✔</span>  Death of a loved one </li>
                                  <li className="how-it-works-li"><span className="tickblue">✔</span>  Liquidating assets to pay bills </li>
                                  <li className="how-it-works-li"><span className="tickblue">✔</span>  Inheriting a property you can’t keep </li>
                                  <li className="how-it-works-li"><span className="tickblue">✔</span>  Tired of living in an ugly house</li>
                                  <li className="how-it-works-li"><span className="tickblue">✔</span>  Troublesome mortgage terms</li>
                                  <li className="how-it-works-li"><span className="tickblue">✔</span>  Job loss</li>
                                  <li className="how-it-works-li"><span className="tickblue">✔</span>  …and many more</li>
                                </ul>
                              </article>
                      </div>
              {/* </div>      */}
            </div>
        </BgDarkGreen>




          <Questions /> 
            <Footer />
      {/* <StyledComponent /> */}      

      </div>); 
}



export default HowItWorks; 